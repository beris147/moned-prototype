'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { Provider } from '@/lib/gql/graphql';
import { FetchType } from '@/utils/types';
import { GraphQLFormattedError } from 'graphql';
import { redirect } from 'next/navigation';

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

const CHECK_FOLLOW_STATUS_QUERY = graphql(`
  query CheckFollowStatus($userId: UUID!, $providerId: UUID!) {
    user_provider_followCollection(
      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }
    ) {
      edges {
        node {
          user_id
          provider_id
        }
      }
    }
  }
`);

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

const FOLLOW_PROVIDER_MUTATION = graphql(`
  mutation FollowProvider($userId: UUID!, $providerId: UUID!) {
    insertIntouser_provider_followCollection(
      objects: [{ user_id: $userId, provider_id: $providerId }]
    ) {
      affectedCount
    }
  }
`);

async function followProvider(userId: string, providerId: string) {
  const client = await getSSRClient();

  const { errors } = await client.mutate({
    mutation: FOLLOW_PROVIDER_MUTATION,
    variables: {
      userId,
      providerId,
    },
  });

  if (errors) {
    throw new Error((errors as GraphQLFormattedError[])[0].message);
  }
}

const UNFOLLOW_PROVIDER_MUTATION = graphql(`
  mutation UnfollowProvider($userId: UUID!, $providerId: UUID!) {
    deleteFromuser_provider_followCollection(
      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }
    ) {
      affectedCount
    }
  }
`);

async function unfollowProvider(userId: string, providerId: string) {
  const client = await getSSRClient();

  const { errors } = await client.mutate({
    mutation: UNFOLLOW_PROVIDER_MUTATION,
    variables: {
      userId,
      providerId,
    },
  });

  if (errors) {
    throw new Error((errors as GraphQLFormattedError[])[0].message);
  }
}

export async function toggleFollowProvider(
  userId: string,
  providerId: string
): Promise<boolean> {
  const {
    data: { isFollowing },
  } = await fetchFollowStatus(userId, providerId);
  if (isFollowing) {
    await unfollowProvider(userId, providerId);
  } else {
    await followProvider(userId, providerId);
  }

  return !isFollowing;
}

const FOLLOWED_PROVIDERS_QUERY = graphql(`
  query FollowedProviders($userId: UUID!) {
    user_provider_followCollection(filter: { user_id: { eq: $userId } }) {
      edges {
        node {
          provider {
            id
            user {
              full_name
            }
          }
        }
      }
    }
  }
`);

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
