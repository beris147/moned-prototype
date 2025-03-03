import React, { Suspense } from 'react';

import UserPage from '../components/user-page';
import ChatLayout from './components/chat-layout';
import Loading from '@/components/ui/loading';
import { fetchUserChats } from './actions';
import { redirect } from 'next/navigation';

async function ChatPageInternal() {
  const {
    data: { chats, totalCount, currentUserId },
    error,
  } = await fetchUserChats();

  if (error) {
    redirect('/error');
  }

  return (
    <ChatLayout
      chats={chats}
      totalCount={totalCount}
      currentUserId={currentUserId}
    />
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
