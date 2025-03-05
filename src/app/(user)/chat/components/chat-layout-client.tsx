'use client';

import React from 'react';

import RecentChats from './recent-chats';
import { useIsMobile } from '@/utils/hooks/use-mobile';
import { usePathname } from 'next/navigation';
import { Chat } from '@/lib/gql/graphql';

type Props = React.PropsWithChildren<{
  chats: Chat[];
  totalCount: number;
  currentUserId: string;
}>;

export default function ChatLayoutClient({ children, ...props }: Props) {
  const isMobile = useIsMobile();
  // if current route is /chat/:id, then hide the sidebar, we will be showing
  // the chat in full screen mode instead
  const pathname = usePathname();
  const showRecentChats = !pathname.includes('/chat/') || !isMobile;
  const showChat = pathname.includes('/chat/') || !isMobile;

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      {showRecentChats && <RecentChats {...props} />}
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
