'use client';

import React from 'react';

import { Button } from '@/components/ui/button';
import { MoreHorizontal, SquarePen } from 'lucide-react';
import { useIsMobile } from '@/utils/hooks/use-mobile';
import { Chat, MessageConnection, MessageEdge } from '@/lib/gql/graphql';
import { ScrollArea } from '@/components/ui/scroll-area';
import ChatPreview from './chat-preview';
import { useMessageSubscription } from '@/utils/hooks/use-chat';

type Props = {
  chats: Chat[];
  totalCount: number;
  receptorUserId: string;
};

export default function RecentChats({
  chats: chatsProps,
  totalCount,
  receptorUserId,
}: Props) {
  const isMobile = useIsMobile();
  const [chats, setChats] = React.useState(chatsProps);

  useMessageSubscription({
    onMessage: (message) => {
      const chatIndex = chats.findIndex((chat) => chat.id === message.chat_id);
      if (chatIndex !== -1) {
        const updatedChat = chats[chatIndex];
        if (updatedChat.messageCollection?.edges?.[0]?.node) {
          updatedChat.messageCollection.edges[0].node = message;
        } else {
          updatedChat.messageCollection = {
            edges: [
              {
                node: message,
              } as MessageEdge,
            ],
          } as MessageConnection;
        }
        setChats((prev) => {
          const updatedChats = [...prev];
          updatedChats.splice(chatIndex, 1);
          updatedChats.unshift(updatedChat);
          return updatedChats;
        });
      } else {
        const newChat: Chat = {
          __typename: 'chat',
          id: message.chat_id,
          nodeId: message.chat_id,
          user1_id: message.from_user_id,
          user2_id: message.to_user_id,
          created_at: new Date().toISOString(),
          messageCollection: {
            edges: [
              {
                node: message,
              } as MessageEdge,
            ],
          } as MessageConnection,
        };
        setChats([...chats, newChat]);
      }
      setChats((prev) =>
        prev.sort(
          (a, b) =>
            new Date(
              b.messageCollection?.edges?.[0]?.node?.created_at ?? 0
            ).getTime() -
            new Date(
              a.messageCollection?.edges?.[0]?.node?.created_at ?? 0
            ).getTime()
        )
      );
    },
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
          <Button variant={'ghost'}>
            <SquarePen size={20} />
          </Button>
        </div>
      </div>
      <ScrollArea>
        {chats.map((chat) => (
          <div
            key={chat.id}
            style={!isMobile ? { width: '200px' } : { maxWidth: '100%' }}
            className='grid flex-1 text-left text-sm leading-tight'
          >
            <ChatPreview chat={chat} receptorUserId={receptorUserId} />
          </div>
        ))}
      </ScrollArea>
    </aside>
  );
}
