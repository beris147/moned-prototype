import React from 'react';

import { Provider } from '@/lib/gql/graphql';
import FollowButtonClient from './follow-button-client';
import { getAuthUser } from '@/app/(auth)/utils';
import { fetchFollowStatus } from '../actions';
import FollowButtonClientDummy from './follow-button-dummy';

type Props = {
  provider: Provider;
};

export default async function FollowButton({ provider }: Props) {
  const { user } = await getAuthUser();
  if (!user) {
    return <FollowButtonClientDummy />;
  }
  const {
    data: { isFollowing },
  } = await fetchFollowStatus(user.id, provider.id);

  return (
    <FollowButtonClient
      provider={provider}
      authUser={user}
      isFollowing={isFollowing}
    />
  );
}
