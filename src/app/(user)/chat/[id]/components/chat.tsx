'use client';

import React, { useEffect } from 'react';

import { useIsMobile } from '@/utils/hooks/use-mobile';
import { Chat as ChatType, User } from '@/lib/gql/graphql';
import { ChatInput } from '../../components/chat-input';
import { ScrollArea } from '@radix-ui/react-scroll-area';
import { ChatList } from './chat-list';
import { useChat } from '@/utils/hooks/use-chat';
import { Button } from '@/components/ui/button';
import { SendHorizontal } from 'lucide-react';

type Props = {
  selectedChat?: ChatType | undefined;
  currentUser?: User | undefined;
  receptorUser?: User | undefined;
};

export default function Chat({
  selectedChat,
  receptorUser,
  currentUser,
}: Props) {
  const isMobile = useIsMobile();
  const { currentMessage, messages, handleSend, handleInputChange, inputRef } =
    useChat({ chat: selectedChat, currentUser, receptorUser });

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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <ScrollArea style={{ flex: 1, maxHeight: '80vh' }}>
        <ChatList
          messages={messages}
          receptorUser={receptorUser}
          currentUser={currentUser}
          sendMessage={() => {}}
          isMobile={isMobile}
        />
      </ScrollArea>
      <div style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
        <ChatInput
          value={currentMessage}
          ref={inputRef}
          onKeyDown={handleKeyPress}
          onChange={handleInputChange}
          placeholder='Type a message...'
          style={{ flex: 1, marginRight: '0.5rem' }}
        />
        <Button
          onClick={handleSend}
          disabled={currentMessage.trim() === ''}
          variant='ghost'
          size='icon'
          style={{ height: '100%', width: 'auto', padding: '0.5rem' }}
        >
          <SendHorizontal size={22} className='text-muted-foreground' />
          {isMobile ? null : 'Send'}
        </Button>
      </div>
    </div>
  );
}
