import 'server-only';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { ProviderUpdateInput, UserUpdateInput } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';

const USER_PROFILE_QUERY = graphql(`
  query UserProfile($id: UUID) {
    userCollection(filter: { id: { eq: $id } }) {
      edges {
        user: node {
          full_name
          email
          phone_number
          id
          provider {
            cedula
            account_status
            degree
            id
          }
        }
      }
    }
  }
`);

export async function fetchUserProfile(
  userId: string | null | undefined
): FetchType<{
  user?: UserUpdateInput | undefined | null;
  provider?: ProviderUpdateInput | undefined | null;
}> {
  if (!userId) {
    return {
      data: {},
      loading: false,
      error: new Error('User is not logged in'),
    };
  }
  const client = await getSSRClient();
  const { data, loading, error } = await client.query({
    query: USER_PROFILE_QUERY,
    variables: {
      id: userId,
    },
  });
  const userData = data.userCollection?.edges.at(0)?.user;
  const { provider, ...user } = userData || {};
  return { data: { user, provider }, loading, error };
}
