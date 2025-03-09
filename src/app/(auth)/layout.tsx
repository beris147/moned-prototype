import React from 'react';

import { isUserLoggedIn } from '../(auth)/utils';
import { redirect } from 'next/navigation';

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (await isUserLoggedIn()) {
    redirect('/home');
  }
  return <>{children}</>;
}
