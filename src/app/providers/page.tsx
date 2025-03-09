import React from 'react';

import UserPage from '../(user)/components/user-page';
import { fetchAllActiveProviders } from './actions';
import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import ProviderCard from './components/provider-card';

async function ProvidersPageInternal() {
  const { data, loading, error } = await fetchAllActiveProviders();
  if (loading) {
    return <Loading />;
  }
  if (error) {
    redirect('/error');
  }

  return data.providers.map((provider) => (
    <ProviderCard key={provider.id} provider={provider} />
  ));
}

export default async function ProvidersPage() {
  return (
    <UserPage>
      <ProvidersPageInternal />
    </UserPage>
  );
}
