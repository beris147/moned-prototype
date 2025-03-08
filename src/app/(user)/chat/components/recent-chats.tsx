'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { MoreHorizontal } from 'lucide-react';
import { useIsMobile } from '@/utils/hooks/use-mobile';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatPreview from './chat-preview';
import { useMessageSubscription } from '@/utils/hooks/use-chat';
import SendMessageDialog from './send-message-dialog';
import { useRecentChatStore } from '@/utils/hooks/use-recent-chat-store';

export default function RecentChats() {
  const isMobile = useIsMobile();
  const { chats, totalCount, currentUserId, onMessage } = useRecentChatStore();

  useMessageSubscription({
    onMessage,
  });

  return (
    <aside
      style={{
        width: isMobile ? '100%' : 'auto',
        borderRight: isMobile ? undefined : '1px solid #ccc',
        padding: '1rem',
        height: '100%',
      }}
    >
      <div className='flex justify-between p-2 items-center mb-4 gap-6 sticky top-0 z-10'>
        <div className='flex items-center text-2xl'>
          <p className='font-medium'>Chats</p>
          <span>({totalCount})</span>
        </div>
        <div className='flex'>
          <Button variant={'ghost'}>
            <MoreHorizontal size={20} />
          </Button>
          <SendMessageDialog currentUserId={currentUserId} />
        </div>
      </div>
      <ScrollArea>
        {chats.map((chat) => (
          <div
            key={chat.id}
            style={!isMobile ? { width: '200px' } : { maxWidth: '100%' }}
            className='grid flex-1 text-left text-sm leading-tight'
          >
            <ChatPreview chat={chat} currentUserId={currentUserId} />
          </div>
        ))}
      </ScrollArea>
    </aside>
  );
}
