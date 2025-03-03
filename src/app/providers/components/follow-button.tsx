import React from 'react';

import { Provider } from '@/lib/gql/graphql';
import FollowButtonClient from './follow-button-client';
import { getAuthUser } from '@/app/(auth)/utils';
import FollowButtonClientDummy from './follow-button-dummy';

type Props = {
  provider: Provider;
  isFollowing: boolean;
};

export default async function FollowButton({ provider, isFollowing }: Props) {
  const { user } = await getAuthUser();
  if (!user) {
    return <FollowButtonClientDummy />;
  }

  return (
    <FollowButtonClient
      provider={provider}
      authUser={user}
      isFollowing={isFollowing}
    />
  );
}
