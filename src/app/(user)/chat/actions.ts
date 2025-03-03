'use server';

import { getAuthUser } from '@/app/(auth)/utils';
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
      orderBy: { last_message_at: DescNullsLast }
    ) {
      totalCount
      edges {
        node {
          id
          user1_id
          user2_id
          messageCollection(last: 1) {
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

export async function fetchUserChats(): FetchType<{
  chats: Chat[];
  totalCount: number;
}> {
  const { user } = await getAuthUser();
  if (!user) {
    redirect('/login');
  }
  const client = await getSSRClient();
  const { data, loading, error } = await client.query({
    query: USER_CHATS_QUERY,
    variables: {
      userId: user.id,
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
