import React from 'react';
import { isUserLoggedIn } from './(auth)/utils';
import { redirect } from 'next/navigation';
import SitePage from '@/components/site-page';

export default async function Home() {
  if (await isUserLoggedIn()) {
    redirect('/home');
  }
  return (
    <SitePage>
      <div>
        <h1>Home</h1>
        <p>Welcome to the home page!</p>
      </div>
    </SitePage>
  );
}
