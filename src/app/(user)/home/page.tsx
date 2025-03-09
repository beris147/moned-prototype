import React from 'react';
import UserPage from '../components/user-page';
import UserFeed from './components/user-feed';

export default function Page() {
  return (
    <UserPage>
      <UserFeed />
    </UserPage>
  );
}
