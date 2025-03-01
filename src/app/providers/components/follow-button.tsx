'use client';

import { Button } from '@/components/ui/button';
import { Provider } from '@/lib/gql/graphql';
import useToggle from '@/utils/hooks/use-toggle';
import { Star } from 'lucide-react';
import React from 'react';

type Props = {
  provider: Provider;
};

export default function FollowButton({ provider }: Props) {
  const [isFollowing, toggleFollowing] = useToggle(
    (provider.user_provider_followCollection?.edges?.length ?? 0) > 0
  );
  const getFill = () => (isFollowing ? '#67e811' : 'none');
  const getColor = () => (isFollowing ? '#67e811' : '#000');

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button type='button' variant='outline' onClick={toggleFollowing}>
        <Star fill={getFill()} color={getColor()} />
      </Button>
    </div>
  );
}
