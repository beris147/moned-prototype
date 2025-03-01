'use server';

import { graphql } from '@/lib/gql/gql';
import { getAuthUser } from '../(auth)/utils';
import { getSSRClient } from '@/lib/apollo/ssr-client';
import { FetchType, User, UserType } from '@/utils/types';

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

export async function fetchUserData(): FetchType<User> {
  const { user: authUser } = await getAuthUser();
  if (!authUser) {
    return {
      data: { userID: null, userType: 'non-auth' },
      loading: false,
    };
  }
  const client = await getSSRClient();
  const { data, loading, error } = await client.query({
    query,
    variables: {
      id: authUser?.id,
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
}
