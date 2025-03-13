import React from 'react';

import UserPage from '@/app/(user)/components/user-page';
import ProviderSignupForm from '@/app/(provider)/provider/signup/components/provider-signup-form';
import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import { fetchUserProfile } from '@/app/(user)/settings/profile/data-fetch';
import { getAuthUser } from '@/app/(auth)/utils';

export default async function ProviderSignupPage() {
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
      <ProviderSignupForm user={user} />
    </UserPage>
  );
}
