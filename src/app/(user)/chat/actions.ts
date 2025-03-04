'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { Chat } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';
import { redirect } from 'next/navigation';

const USER_CHATS_QUERY = graphql(`
  query UserChats($userId: UUID!) {
    chatCollection(
      filter: {
        or: [{ user1_id: { eq: $userId } }, { user2_id: { eq: $userId } }]
      }
      orderBy: { last_message_at: AscNullsLast }
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
          id
          user1 {
            id
            full_name
          }
          user2 {
            id
            full_name
          }
          messageCollection(orderBy: { created_at: AscNullsLast }) {
            edges {
              node {
                ...Message
              }
            }
          }
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

  return {
    data: {
      chat: data?.chatCollection?.edges?.[0]?.node as Chat,
    },
    loading,
    error,
  };
}
