'use client';

import React, { useEffect } from 'react';

import { useIsMobile } from '@/utils/hooks/use-mobile';
import RecentChats from '../../components/recent-chats';
import { Chat as ChatType, User } from '@/lib/gql/graphql';
import { ChatInput } from '../../components/chat-input';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ChatList } from './chat-list';
import { useChat } from '@/utils/hooks/use-chat';

type Props = {
  selectedChat?: ChatType | undefined;
  chats: ChatType[];
  totalCount: number;
  receptorUser?: User | undefined;
  emisorUser?: User | undefined;
};

export default function Chat({
  selectedChat,
  emisorUser,
  receptorUser,
  ...props
}: Props) {
  const isMobile = useIsMobile();
  const { currentMessage, messages, handleSend, handleInputChange, inputRef } =
    useChat({ chat: selectedChat, receptorUser, emisorUser });

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100%',
        flexDirection: isMobile ? 'column' : 'row',
      }}
    >
      {!isMobile && (
        <RecentChats {...props} receptorUserId={receptorUser?.id ?? ''} />
      )}
      <main style={{ flex: 1, padding: '1rem' }}>
        <div
          style={{
            border: '1px solid #ccc',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <ScrollArea style={{ flex: 1 }}>
            <ChatList
              messages={messages}
              emisorUser={emisorUser}
              receptorUser={receptorUser}
              sendMessage={() => {}}
              isMobile={isMobile}
            />
          </ScrollArea>
          <div style={{ padding: '1rem' }}>
            <ChatInput
              value={currentMessage}
              ref={inputRef}
              onKeyDown={handleKeyPress}
              onChange={handleInputChange}
              placeholder='Type a message...'
            />
          </div>
        </div>
      </main>
    </div>
  );
}
