import React, { Suspense } from 'react';

import { redirect } from 'next/navigation';
import UserInfoForm from './components/user-info-form';
import { fetchUserProfile } from './actions';
import Loading from '@/components/ui/loading';
import UserPage from '../../components/user-page';

async function UserProfilePageInternal() {
  const {
    data: { user },
    loading,
    error,
  } = await fetchUserProfile();
  if (loading) {
    return <Loading />;
  }
  if (error || !user) {
    redirect('/error');
  }
  return <UserInfoForm user={user} />;
}

export default function UserProfilePage() {
  return (
    <UserPage>
      <Suspense fallback={<Loading />}>
        <UserProfilePageInternal />
      </Suspense>
    </UserPage>
  );
}
