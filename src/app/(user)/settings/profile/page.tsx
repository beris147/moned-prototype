import React from 'react';

import { redirect } from 'next/navigation';
import UserInfoForm from './components/user-info-form';
import Loading from '@/components/ui/loading';
import UserPage from '../../components/user-page';
import { fetchUserProfile } from './data-fetch';
import { getAuthUser } from '@/app/(auth)/utils';

export default async function UserProfilePage() {
  const { user: authUser } = await getAuthUser();
  const {
    data: { user },
    loading,
    error,
  } = await fetchUserProfile(authUser?.id);
  if (loading) {
    return <Loading />;
  }
  if (error || !user) {
    redirect('/error');
  }
  return (
    <UserPage>
      <UserInfoForm user={user} />
    </UserPage>
  );
}
