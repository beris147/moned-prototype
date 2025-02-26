import React from 'react';

import { redirect } from 'next/navigation';
import { getAuthUser } from '../(auth)/utils';
import UserInfo from './components/user-info-view';

export default async function ProfilePage() {
  const { user, error } = await getAuthUser();
  if (error || !user) {
    redirect('/login');
  }
  return (
    <>
      Profile Page! <br />
      <UserInfo userID={user.id} />
    </>
  );
}
