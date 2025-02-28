import React from 'react';

import { getAuthUser } from '../(auth)/utils';
import { redirect } from 'next/navigation';

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user: authUser } = await getAuthUser();
  if (!authUser) {
    redirect('/login');
  }
  return <>{children}</>;
}
