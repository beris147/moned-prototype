import { Heart } from 'lucide-react';
import React from 'react';
import Icon from '../../components/icons';
import { Button } from '../../components/ui/button';
import Link from 'next/link';

export default function LandingFooter() {
  return (
    <footer className='w-full border-t bg-background py-6 md:py-12'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='space-y-4'>
            <div className='flex items-center gap-2'>
              <Heart className='h-6 w-6 text-primary' />
              <span className='text-xl font-bold'>MindfulCare</span>
            </div>
            <p className='text-sm text-muted-foreground'>
              Connecting you with mental health professionals for a healthier
              mind.
            </p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/about'
                  className='text-muted-foreground hover:text-foreground'
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href='/how-it-works'
                  className='text-muted-foreground hover:text-foreground'
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href='/providers'
                  className='text-muted-foreground hover:text-foreground'
                >
                  For Providers
                </Link>
              </li>
              <li>
                <Link
                  href='/blog'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>Legal</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  href='/terms'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href='/privacy-policy'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/cookie-policy'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href='/accessibility'
                  className='text-muted-foreground hover:text-foreground'
                >
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-bold'>Connect With Us</h3>
            <div className='flex gap-4'>
              <Link
                href='https://facebook.com'
                className='text-muted-foreground hover:text-foreground'
              >
                <Icon icon='facebook' height={20} width={20} />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='https://twitter.com'
                className='text-muted-foreground hover:text-foreground'
              >
                <Icon icon='twitter' height={20} width={20} />
                <span className='sr-only'>Twitter</span>
              </Link>
              <Link
                href='https://instagram.com'
                className='text-muted-foreground hover:text-foreground'
              >
                <Icon icon='instagram' height={20} width={20} />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='https://github.com'
                className='text-muted-foreground hover:text-foreground'
              >
                <Icon icon='github' height={20} width={20} />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </div>
            <div className='space-y-2'>
              <h4 className='text-sm font-medium'>
                Subscribe to our newsletter
              </h4>
              <form className='flex gap-2'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50'
                />
                <Button type='submit' size='sm'>
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t pt-8 text-center text-sm text-muted-foreground'>
          <p>© {new Date().getFullYear()} MindfulCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
