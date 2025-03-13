import React from 'react';

import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import SitePage from '@/components/site-page';
import { getAuthUser } from '@/app/(auth)/utils';
import { fetchUserData } from '../data-fetch';

export default async function UserPage({ children }: React.PropsWithChildren) {
  const { user } = await getAuthUser();
  const { data, loading, error } = await fetchUserData(user?.id);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    redirect('/error');
  }

  if (!data) {
    redirect('/error');
  }
  return <SitePage user={data}>{children}</SitePage>;
}
