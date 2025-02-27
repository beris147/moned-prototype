import React from 'react';

import { getAuthUser } from '@/app/(auth)/utils';
import { redirect } from 'next/navigation';
import SitePage from '@/components/site-page';

export default async function PrivateSitePage({
  children,
}: React.PropsWithChildren) {
  const { user: authUser } = await getAuthUser();
  if (!authUser) {
    redirect('/login');
  }

  return <SitePage>{children}</SitePage>;
}
