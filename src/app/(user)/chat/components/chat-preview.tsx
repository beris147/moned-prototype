'use client';

import React from 'react';

import { Chat } from '@/lib/gql/graphql';
import { AvatarTemplate } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  chat: Chat;
  currentUserId: string;
};

export default function ChatPreview({ chat, currentUserId }: Props) {
  const chatUser = chat.user1?.id === currentUserId ? chat.user2 : chat.user1;

  return (
    <Button
      key={chat.id}
      className='flex gap-2 items-center p-2'
      style={{ width: '100%', height: 'auto' }}
      type='button'
      variant={'outline'}
    >
      <Link href={`/chat/${chat.id}`}>
        <div className='flex gap-2 items-center'>
          <AvatarTemplate fallbackName={chatUser?.full_name ?? 'Unknown'}>
            <div>
              <p className='font-medium'>{chatUser?.full_name ?? 'Unknown'}</p>
              <p className='text-xs text-gray-500'>
                {chat.messageCollection?.edges?.at(0)?.node.content}
              </p>
            </div>
          </AvatarTemplate>
        </div>
      </Link>
    </Button>
  );
}
