import React from 'react';

import { getAuthUser } from '../../(auth)/utils';
import UserInfo from './views/user-info-view';
import PrivateSitePage from '../components/private-site-page';

export default async function ProfilePage() {
  const { user } = await getAuthUser();
  return (
    <PrivateSitePage>{user && <UserInfo userID={user.id} />}</PrivateSitePage>
  );
}
