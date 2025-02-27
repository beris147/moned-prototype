'use client';
import React from 'react';
import { signInWithGoogle } from '../actions';
import { Button } from '@/components/ui/button';

export default function GoogleSignInButton({ label }: { label: string }) {
  return (
    <Button
      type='button'
      variant='outline'
      className='w-full'
      onClick={signInWithGoogle}
    >
      {label}
    </Button>
  );
}
