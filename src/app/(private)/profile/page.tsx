import React from 'react';

import { getAuthUser } from '../../(auth)/utils';
import UserInfo from './views/user-info-view';
import SitePage from '@/components/site-page';

export default async function ProfilePage() {
  const { user } = await getAuthUser();
  return <SitePage>{user && <UserInfo userID={user.id} />}</SitePage>;
}
