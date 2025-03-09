import { Heart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from '../../components/ui/button';

export default function LandingHeader() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Heart className='h-6 w-6 text-primary' />
          <span className='text-xl font-bold'>MindfulCare</span>
        </div>
        <nav className='hidden md:flex gap-6 text-sm'>
          <Link href='#about' className='transition-colors hover:text-primary'>
            About
          </Link>
          <Link
            href='#how-it-works'
            className='transition-colors hover:text-primary'
          >
            How It Works
          </Link>
          <Link
            href='#providers'
            className='transition-colors hover:text-primary'
          >
            For Providers
          </Link>
          <Link
            href='#privacy'
            className='transition-colors hover:text-primary'
          >
            Privacy
          </Link>
        </nav>
        <div className='flex items-center gap-4'>
          <Link href='/login'>
            <Button variant='ghost' size='sm'>
              Log in
            </Button>
          </Link>
          <Link href='/signup'>
            <Button size='sm'>Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
