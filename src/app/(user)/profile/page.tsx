import React from 'react';

import { redirect } from 'next/navigation';
import UserInfoForm from './components/user-info-form';
import ProviderInfoView from './views/provider-info-view';
import { fetchUserProfile } from './actions';
import Loading from '@/components/ui/loading';
import UserPage from '../components/user-page';

export default async function UserProfilePage() {
  const {
    data: { user, provider },
    loading,
    error,
  } = await fetchUserProfile();
  if (loading) {
    return <Loading />;
  }
  if (error || !user) {
    redirect('/error');
  }

  return (
    <UserPage>
      <UserInfoForm user={user} />
      <ProviderInfoView provider={provider} user={user} />
    </UserPage>
  );
}
