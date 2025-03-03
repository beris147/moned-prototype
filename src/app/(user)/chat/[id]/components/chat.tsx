'use client';

import React from 'react';

import { useIsMobile } from '@/utils/hooks/use-mobile';
import RecentChats from '../../components/recent-chats';
import { Chat as ChatType, Message } from '@/lib/gql/graphql';

type Props = {
  messages: Message[];
  chats: ChatType[];
  totalCount: number;
  currentUserId: string;
};

export default function Chat({ messages, currentUserId, ...props }: Props) {
  const isMobile = useIsMobile();

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      {!isMobile && <RecentChats {...props} currentUserId={currentUserId} />}
      <main style={{ flex: 1, padding: '1rem' }}>
        <div
          style={{
            border: '1px solid #ccc',
            height: '100%',
            padding: '1rem',
          }}
        >
          <h1>Chat: {messages.length}</h1>
          <div>
            {messages.map((message) => (
              <div key={message.id}>
                {message.from_user_id === currentUserId ? (
                  <p>You</p>
                ) : (
                  <p>Other</p>
                )}
                <p>{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
