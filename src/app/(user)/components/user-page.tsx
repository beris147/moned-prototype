import React from 'react';

import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import { fetchUserData } from '../actions';
import SitePage from '@/components/site-page';

export default async function UserPage({ children }: React.PropsWithChildren) {
  const { data, loading, error } = await fetchUserData();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    redirect('/error');
  }

  return <SitePage user={data}>{children}</SitePage>;
}
