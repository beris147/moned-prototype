'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

type Props = {
  providerID: string;
};

export default function ViewProfileButton({ providerID }: Props) {
  const route = useRouter();

  return (
    <div>
      <Button
        onClick={() => {
          route.push(`/providers/profile/${providerID}`);
        }}
        type='button'
      >
        Profile
      </Button>
    </div>
  );
}
