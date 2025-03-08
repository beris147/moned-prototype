'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { Chat, MessageConnection } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';
import { redirect } from 'next/navigation';

const USER_CHATS_QUERY = graphql(`
  query UserChats($userId: UUID!) {
    chatCollection(
      filter: {
        or: [{ user1_id: { eq: $userId } }, { user2_id: { eq: $userId } }]
      }
      orderBy: { last_message_at: DescNullsLast }
    ) {
      totalCount
      edges {
        node {
          id
          user1 {
            ...UserChat
          }
          user2 {
            ...UserChat
          }
          messageCollection(last: 1, orderBy: { created_at: AscNullsLast }) {
            edges {
              node {
                id
                content
                from_user_id
                to_user_id
              }
            }
          }
        }
      }
    }
  }
`);

export async function fetchUserChats(userId: string | undefined): FetchType<{
  chats: Chat[];
  totalCount: number;
}> {
  if (!userId) {
    redirect('/login');
  }
  const client = await getSSRClient();
  const { data, loading, error } = await client.query({
    query: USER_CHATS_QUERY,
    variables: {
      userId,
    },
  });

  return {
    data: {
      chats:
        (data?.chatCollection?.edges?.map((edge) => edge.node) as Chat[]) || [],
      totalCount: data?.chatCollection?.totalCount || 0,
    },
    loading,
    error,
  };
}

const CHAT_MESSAGES_QUERY = graphql(`
  query ChatMessages($id: UUID) {
    chatCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          ...Chat
        }
      }
    }
  }
`);

export async function fetchChatMessages(id: string): FetchType<{
  chat: Chat;
}> {
  const client = await getSSRClient();
  const { data, loading, error } = await client.query({
    query: CHAT_MESSAGES_QUERY,
    variables: {
      id,
    },
  });

  const chat = data?.chatCollection?.edges?.[0]?.node as Chat;

  return {
    data: {
      chat: {
        ...chat,
        // reverse the messages order to display from oldest to newest
        messageCollection: {
          edges: [...(chat?.messageCollection?.edges || [])].reverse(),
        } as MessageConnection,
      },
    },
    loading,
    error,
  };
}

const CREATE_CHAT_MUTATION = graphql(`
  mutation CreateChat($user1_id: UUID!, $user2_id: UUID!) {
    insertIntochatCollection(
      objects: [{ user1_id: $user1_id, user2_id: $user2_id }]
    ) {
      records {
        id
      }
    }
  }
`);

const USERS_CHAT_QUERY = graphql(`
  query UsersChat($user1_id: UUID!, $user2_id: UUID!) {
    chatCollection(
      filter: {
        or: [
          { user1_id: { eq: $user1_id }, user2_id: { eq: $user2_id } }
          { user1_id: { eq: $user2_id }, user2_id: { eq: $user1_id } }
        ]
      }
      orderBy: { last_message_at: AscNullsLast }
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`);

export async function startChat(user1_id: string, user2_id: string) {
  const client = await getSSRClient();
  const { data: existingChatData, error } = await client.query({
    query: USERS_CHAT_QUERY,
    variables: {
      user1_id,
      user2_id,
    },
  });
  if (error) {
    console.error(error);
    redirect('/error');
  }
  const existingChat = existingChatData.chatCollection?.edges[0]?.node;
  if (existingChat) {
    redirect(`/chat/${existingChat.id}`);
  }

  const { data: newChatData, errors } = await client.mutate({
    mutation: CREATE_CHAT_MUTATION,
    variables: {
      user1_id,
      user2_id,
    },
  });

  if (errors) {
    console.error(errors);
    redirect('/error');
  }

  const newChat = newChatData?.insertIntochatCollection?.records?.[0];

  if (newChat) {
    redirect(`/chat/${newChat.id}`);
  } else {
    console.error('Failed to create a new chat');
    redirect('/error');
  }
}
