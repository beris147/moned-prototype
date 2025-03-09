'use client';

import React from 'react';

import { Provider } from '@/lib/gql/graphql';
import { User as AuthUser } from '@supabase/supabase-js';
import { useOptimisticAction } from '@/utils/hooks/use-optimistic-action';
import { toggleFollowProvider } from '../actions';
import FollowButtonClientDummy from './follow-button-dummy';

type FollowButtonClientProps = {
  provider: Provider;
  authUser: AuthUser;
  isFollowing: boolean;
};

export default function FollowButtonClient({
  provider,
  authUser,
  isFollowing: isFollowingProp,
}: FollowButtonClientProps) {
  const [isFollowing, updateIsFollowing] = useOptimisticAction(
    isFollowingProp,
    async () => toggleFollowProvider(authUser.id, provider.id)
  );
  const onClick = () => updateIsFollowing(!isFollowing);

  const getFill = () => (isFollowing ? '#67e811' : 'none');
  const getColor = () => (isFollowing ? '#67e811' : '#000');

  return (
    <FollowButtonClientDummy
      onClick={onClick}
      fill={getFill()}
      color={getColor()}
    />
  );
}
