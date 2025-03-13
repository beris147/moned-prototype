import React from 'react';

import UserPage from '@/app/(user)/components/user-page';
import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import ProviderInfoForm from './components/provider-info-form';
import { fetchUserProfile } from '@/app/(user)/settings/profile/data-fetch';
import { getAuthUser } from '@/app/(auth)/utils';

export default async function ProviderSettingsPage() {
  const { user: authUser } = await getAuthUser();
  const {
    data: { provider },
    loading,
    error,
  } = await fetchUserProfile(authUser?.id);
  if (loading) {
    return <Loading />;
  }
  if (error || !provider) {
    redirect('/error');
  }
  return (
    <UserPage>
      <ProviderInfoForm provider={provider} />
    </UserPage>
  );
}
