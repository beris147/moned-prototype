'use client';

import React from 'react';

import RecentChats from './recent-chats';
import { useIsMobile } from '@/utils/hooks/use-mobile';
import { usePathname } from 'next/navigation';
import { useRecentChatStore } from '@/utils/hooks/use-recent-chat-store';
import { useMessageSubscription } from '@/utils/hooks/use-chat';
import { Provider } from '@/lib/gql/graphql';

type Props = React.PropsWithChildren<{
  followedProviders: Provider[];
}>;

export default function ChatLayoutClient({
  children,
  followedProviders,
}: Props) {
  const isMobile = useIsMobile();
  // if current route is /chat/:id, then hide the sidebar, we will be showing
  // the chat in full screen mode instead
  const pathname = usePathname();
  const showRecentChats = !pathname.includes('/chat/') || !isMobile;
  const showChat = pathname.includes('/chat/') || !isMobile;
  const { chats, totalCount, currentUserId, onMessage } = useRecentChatStore();

  useMessageSubscription({
    onMessage,
    channel: `user-${currentUserId}-chats`,
  });

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      {showRecentChats && (
        <RecentChats
          currentUserId={currentUserId}
          chats={chats}
          totalCount={totalCount}
          followedProviders={followedProviders}
        />
      )}
      {showChat && (
        <main style={{ flex: 1, padding: '1rem', height: '100%' }}>
          <div
            style={{
              border: '1px solid #ccc',
              height: '100%',
              padding: '1rem',
              overflow: 'hidden',
            }}
          >
            {children}
          </div>
        </main>
      )}
    </div>
  );
}
