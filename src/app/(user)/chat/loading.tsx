import Loading from '@/components/ui/loading';
import React from 'react';
import UserPage from '../components/user-page';

export default function LoadingChatPages() {
  return (
    <UserPage>
      <Loading />
    </UserPage>
  );
}
