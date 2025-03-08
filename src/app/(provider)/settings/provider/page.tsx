import React from 'react';

import UserPage from '@/app/(user)/components/user-page';
import { fetchUserProfile } from '@/app/(user)/settings/profile/actions';
import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import ProviderInfoForm from './components/provider-info-form';

async function ProviderSettingsPageInternal() {
  const {
    data: { provider },
    loading,
    error,
  } = await fetchUserProfile();
  if (loading) {
    return <Loading />;
  }
  if (error || !provider) {
    redirect('/error');
  }

  return <ProviderInfoForm provider={provider} />;
}

export default function ProviderSettingsPage() {
  return (
    <UserPage>
      <ProviderSettingsPageInternal />
    </UserPage>
  );
}
