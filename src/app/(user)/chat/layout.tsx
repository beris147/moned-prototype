import React from 'react';

import UserPage from '../components/user-page';
import ChatLayoutClient from './components/chat-layout-client';
import { getAuthUser } from '@/app/(auth)/utils';
import { redirect } from 'next/navigation';
import { RecentChatStoreProvider } from '@/utils/hooks/use-recent-chat-store';
import { fetchUserChats } from './data-fetch';
import { fetchFollowedProviders } from '@/app/providers/data-fetch';

async function ChatLayoutInternal({ children }: React.PropsWithChildren) {
  const { user } = await getAuthUser();
  const {
    data: { chats, totalCount },
    error: chatsError,
  } = await fetchUserChats(user?.id);
  const {
    data: { providers: followedProviders },
  } = await fetchFollowedProviders(user?.id);

  if (chatsError || !user) {
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
      <ChatLayoutClient followedProviders={followedProviders}>
        {children}
      </ChatLayoutClient>
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
