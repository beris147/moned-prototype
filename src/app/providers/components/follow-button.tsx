'use client';

import { Button } from '@/components/ui/button';
import useToggle from '@/utils/hooks/use-toggle';
import { Star } from 'lucide-react';
import React from 'react';

export default function FollowButton() {
  const [isFollowing, toggleFollowing] = useToggle(false);
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
