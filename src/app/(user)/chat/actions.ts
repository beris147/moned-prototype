'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { redirect } from 'next/navigation';

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
