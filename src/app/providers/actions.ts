'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { GraphQLFormattedError } from 'graphql';
import { fetchFollowStatus } from './data-fetch';

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
