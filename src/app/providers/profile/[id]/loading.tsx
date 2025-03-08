import UserPage from '@/app/(user)/components/user-page';
import Loading from '@/components/ui/loading';
import React from 'react';

export default function LoadingPage() {
  return (
    <UserPage>
      <Loading />
    </UserPage>
  );
}
