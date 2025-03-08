import React from 'react';

import UserPage from '@/app/(user)/components/user-page';
import ProviderSignupForm from '@/app/(provider)/provider/signup/components/provider-signup-form';
import { fetchUserProfile } from '@/app/(user)/settings/profile/actions';
import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';

async function ProviderSignupPageInternal() {
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

  return <ProviderSignupForm user={user} />;
}

export default function ProviderSignupPage() {
  return (
    <UserPage>
      <ProviderSignupPageInternal />
    </UserPage>
  );
}
