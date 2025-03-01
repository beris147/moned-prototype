'use client';

import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  onClick?: () => void;
  fill?: string | undefined;
  color?: string | undefined;
};

export default function FollowButtonClientDummy({ onClick, ...props }: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push('/login');
    }
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Button type='button' variant='outline' onClick={handleClick}>
        <Star {...props} />
      </Button>
    </div>
  );
}
