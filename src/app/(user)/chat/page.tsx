import React, { Suspense } from 'react';

import UserPage from '../components/user-page';
import ChatLayout from './components/chat-layout';
import Loading from '@/components/ui/loading';
import { fetchUserChats } from './actions';
import { redirect } from 'next/navigation';
import { getAuthUser } from '@/app/(auth)/utils';

async function ChatPageInternal() {
  const { user } = await getAuthUser();
  const {
    data: { chats, totalCount },
    error,
  } = await fetchUserChats(user?.id);

  if (error || !user) {
    redirect('/error');
  }

  return (
    <ChatLayout chats={chats} totalCount={totalCount} currentUserId={user.id} />
  );
}

export default function ChatPage() {
  return (
    <UserPage>
      <Suspense fallback={<Loading />}>
        <ChatPageInternal />
      </Suspense>
    </UserPage>
  );
}
