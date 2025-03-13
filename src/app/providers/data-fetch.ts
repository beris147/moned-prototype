import 'server-only';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { Provider } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';
import { redirect } from 'next/navigation';
import {
  ALL_ACTIVE_PROVIDERS_QUERY,
  CHECK_FOLLOW_STATUS_QUERY,
  FOLLOWED_PROVIDERS_QUERY,
} from './graphql/queries';

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

export async function fetchFollowStatus(
  userId: string,
  providerId: string
): FetchType<{
  isFollowing: boolean;
}> {
  const client = await getSSRClient();

  const { data, loading, error } = await client.query({
    query: CHECK_FOLLOW_STATUS_QUERY,
    variables: { userId, providerId },
    fetchPolicy: 'no-cache', // Disable caching for this query
  });

  const isFollowing =
    (data.user_provider_followCollection?.edges?.length ?? 0) > 0;

  return {
    data: {
      isFollowing,
    },
    loading,
    error,
  };
}

export async function fetchFollowedProviders(
  userId: string | undefined
): FetchType<{
  providers: Provider[];
}> {
  if (!userId) {
    redirect('/login');
  }
  const client = await getSSRClient();

  const { data, loading, error } = await client.query({
    query: FOLLOWED_PROVIDERS_QUERY,
    variables: { userId },
  });

  const providers = data.user_provider_followCollection?.edges
    ?.map((edge) => edge.node.provider)
    .filter((node) => node !== null) as Provider[];

  return {
    data: {
      providers,
    },
    loading,
    error,
  };
}
