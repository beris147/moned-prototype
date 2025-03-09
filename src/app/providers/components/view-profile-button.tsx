'use client';

import { Button } from '@/components/ui/button';
import Link from '@/components/ui/link';
import React from 'react';

type Props = {
  providerID: string;
};

export default function ViewProfileButton({ providerID }: Props) {
  return (
    <Button type='button'>
      <Link href={`/providers/profile/${providerID}`}>Profile</Link>
    </Button>
  );
}
