'use client';

import React from 'react';

import { useIsMobile } from '@/utils/hooks/use-mobile';
import RecentChats from './recent-chats';
import { Chat } from '@/lib/gql/graphql';

type Props = {
  chats: Chat[];
  totalCount: number;
  currentUserId: string;
};

export default function ChatLayout({ ...props }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      <RecentChats {...props} />
      {!isMobile && (
        <main style={{ flex: 1, padding: '1rem' }}>
          <div
            style={{
              border: '1px solid #ccc',
              height: '100%',
              padding: '1rem',
            }}
          />
        </main>
      )}
    </div>
  );
}
