import React from 'react';

import LoginForm from './components/login-form';
import { isUserLoggedIn } from '../utils';
import { redirect } from 'next/navigation';

export default async function Page() {
  if (await isUserLoggedIn()) {
    redirect('/dashboard');
  }
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <LoginForm />
      </div>
    </div>
  );
}
