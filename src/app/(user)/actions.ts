'use server';

import { graphql } from '@/lib/gql/gql';
import { getSSRClient } from '@/lib/apollo/ssr-client';
import { FetchType, User, UserType } from '@/utils/types';
import { unstable_cache } from 'next/cache';

const query = graphql(`
  query UserActions($id: UUID) {
    userCollection(filter: { id: { eq: $id } }) {
      edges {
        user: node {
          id
          provider {
            id
          }
          admin {
            id
          }
        }
      }
    }
  }
`);

export const fetchUserData = unstable_cache(
  async (userId: string | null | undefined): FetchType<User> => {
    if (!userId) {
      return {
        data: { userID: null, userType: 'non-auth' },
        loading: false,
      };
    }
    const client = await getSSRClient();
    const { data, loading, error } = await client.query({
      query,
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
  ['auth-user-data']
);
