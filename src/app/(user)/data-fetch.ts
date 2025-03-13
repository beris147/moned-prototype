import 'server-only';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { FetchType, User, UserType } from '@/utils/types';
import { unstable_cache } from 'next/cache';
import { USER_DATA_QUERY } from './graphql/queries';

export async function fetchUserData(
  userId: string | null | undefined
): FetchType<User> {
  if (!userId) {
    return {
      data: { userID: null, userType: 'non-auth' },
      loading: false,
    };
  }
  const client = await getSSRClient();

  const cachedUserData = unstable_cache(
    async (userId: string | null | undefined): FetchType<User> => {
      if (!userId) {
        return {
          data: { userID: null, userType: 'non-auth' },
          loading: false,
        };
      }

      const { data, loading, error } = await client.query({
        query: USER_DATA_QUERY,
        variables: {
          id: userId,
        },
      });
      const userData = data.userCollection?.edges.at(0)?.user;
      let userType: UserType = 'non-auth';
      if (userData) {
        userType = 'user';
      }
      if (userData?.provider) {
        userType = 'provider';
      }
      if (userData?.admin) {
        userType = 'provider';
      }
      return {
        data: {
          userID: userData?.id ?? null,
          userType,
        },
        loading,
        error,
      };
    },
    [userId],
    {
      tags: ['auth-user'],
      revalidate: 60,
    }
  );

  return cachedUserData(userId);
}
