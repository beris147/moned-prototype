import 'server-only';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { Chat, MessageConnection } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';
import { redirect } from 'next/navigation';
import { CHAT_MESSAGES_QUERY, USER_CHATS_QUERY } from './graphql/queries';

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
