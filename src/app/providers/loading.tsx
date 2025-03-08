import Loading from '@/components/ui/loading';
import React from 'react';
import UserPage from '../(user)/components/user-page';

export default function LoadingPage() {
  return (
    <UserPage>
      <Loading />
    </UserPage>
  );
}
