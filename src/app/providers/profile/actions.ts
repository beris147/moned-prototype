'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { Provider } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';

const PROVIDER_PROFILE_QUERY = graphql(`
  query ProviderProfile($id: UUID!) {
    providerCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          user {
            id
            full_name
            email
          }
          cedula
          degree
          id
          account_status
        }
      }
    }
  }
`);

export async function fetchProviderProfile(id: string): FetchType<{
  provider: Provider;
}> {
  const client = await getSSRClient();

  const { data, loading, error } = await client.query({
    query: PROVIDER_PROFILE_QUERY,
    variables: { id },
  });

  const providers =
    data.providerCollection?.edges
      ?.map((edge) => edge.node)
      .filter((node) => node !== null) || [];

  return {
    data: {
      provider: providers.at(0) as Provider,
    },
    loading,
    error,
  };
}
