import React from 'react';
import SignupForm from './components/signup-form';
import { isUserLoggedIn } from '../utils';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  if (await isUserLoggedIn()) {
    redirect('/dashboard');
  }
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <SignupForm />
      </div>
    </div>
  );
}
