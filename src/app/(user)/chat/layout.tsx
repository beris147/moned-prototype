import React from 'react';

import UserPage from '../components/user-page';
import ChatLayoutClient from './components/chat-layout-client';
import { getAuthUser } from '@/app/(auth)/utils';
import { fetchUserChats } from './actions';
import { redirect } from 'next/navigation';
import { RecentChatStoreProvider } from '@/utils/hooks/use-recent-chat-store';

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
    <RecentChatStoreProvider
      initialState={{
        chats,
        totalCount,
        currentUserId: user.id || '',
      }}
    >
      <ChatLayoutClient>{children}</ChatLayoutClient>
    </RecentChatStoreProvider>
  );
}

export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserPage>
      <ChatLayoutInternal>{children}</ChatLayoutInternal>
    </UserPage>
  );
}
