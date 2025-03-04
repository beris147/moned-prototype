'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { MoreHorizontal, SquarePen } from 'lucide-react';
import { useIsMobile } from '@/utils/hooks/use-mobile';
import { Chat } from '@/lib/gql/graphql';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatPreview from './chat-preview';

type Props = {
  chats: Chat[];
  totalCount: number;
  receptorUserId: string;
};

export default function RecentChats({
  chats,
  totalCount,
  receptorUserId,
}: Props) {
  const isMobile = useIsMobile();

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
          <Button variant={'ghost'}>
            <SquarePen size={20} />
          </Button>
        </div>
      </div>
      <ScrollArea>
        {chats.map((chat) => (
          <ChatPreview
            key={chat.id}
            chat={chat}
            receptorUserId={receptorUserId}
          />
        ))}
      </ScrollArea>
    </aside>
  );
}
