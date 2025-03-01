'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { Provider } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';

const ALL_ACTIVE_PROVIDERS_QUERY = graphql(`
  query AllActiveProviders {
    providerCollection(filter: { account_status: { eq: active } }) {
      edges {
        node {
          ...ProviderFields
        }
      }
    }
  }
`);

export async function fetchAllActiveProviders(): FetchType<{
  providers: Provider[];
}> {
  const client = await getSSRClient();

  const { data, loading, error } = await client.query({
    query: ALL_ACTIVE_PROVIDERS_QUERY,
  });

  const providers =
    data.providerCollection?.edges
      ?.map((edge) => edge.node)
      .filter((node) => node !== null) || [];

  return {
    data: {
      providers: providers as Provider[],
    },
    loading,
    error,
  };
}
