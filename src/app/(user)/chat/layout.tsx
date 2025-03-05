import React, { Suspense } from 'react';

import UserPage from '../components/user-page';
import ChatLayoutClient from './components/chat-layout-client';
import { getAuthUser } from '@/app/(auth)/utils';
import { fetchUserChats } from './actions';
import { redirect } from 'next/navigation';

async function ChatLayoutInternal({ children }: React.PropsWithChildren) {
  const { user } = await getAuthUser();
  const {
    data: { chats, totalCount },
    error,
  } = await fetchUserChats(user?.id);

  if (error || !user) {
    redirect('/error');
  }

  return (
    <ChatLayoutClient
      chats={chats}
      totalCount={totalCount}
      currentUserId={user.id}
    >
      {children}
    </ChatLayoutClient>
  );
}

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserPage>
      <Suspense
        fallback={
          <ChatLayoutClient chats={[]} totalCount={0} currentUserId={''} />
        }
      >
        <ChatLayoutInternal>{children}</ChatLayoutInternal>
      </Suspense>
    </UserPage>
  );
}
