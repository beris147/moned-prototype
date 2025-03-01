import React from 'react';

import UserPage from '../(user)/components/user-page';
import { fetchAllActiveProviders } from './actions';
import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import ProviderCard from './components/provider-card';

export default async function ProvidersPage() {
  const { data, loading, error } = await fetchAllActiveProviders();

  if (error) {
    redirect('/error');
  }

  return (
    <UserPage>
      {loading && <Loading />}
      {!loading &&
        data.providers.map((provider) => (
          <ProviderCard key={provider.id} provider={provider} />
        ))}
    </UserPage>
  );
}
