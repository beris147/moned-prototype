'use client';

import React from 'react';

import { Chat } from '@/lib/gql/graphql';
import { AvatarTemplate } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  chat: Chat;
  receptorUserId: string;
};

export default function ChatPreview({ chat, receptorUserId }: Props) {
  const emisorUser =
    chat.user1?.id === receptorUserId ? chat.user2 : chat.user1;

  return (
    <Button
      key={chat.id}
      className='flex justify-start gap-2 p-2'
      style={{ width: 'auto', height: 'auto' }}
      type='button'
      variant='ghost'
    >
      <Link href={`/chat/${chat.id}`}>
        <div className='flex gap-2'>
          <AvatarTemplate fallbackName={emisorUser?.full_name ?? 'Unknown'}>
            <div>
              <p className='font-medium'>
                {emisorUser?.full_name ?? 'Unknown'}
              </p>
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
