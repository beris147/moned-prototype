import React from 'react';

import { redirect } from 'next/navigation';
import { getAuthUser } from '../(auth)/utils';
import ProfileView from './components/profile-view';

export default async function ProfilePage() {
  const { user, error } = await getAuthUser();
  if (error || !user) {
    redirect('/login');
  }
  return (
    <>
      <ProfileView userID={user.id} />
    </>
  );
}
