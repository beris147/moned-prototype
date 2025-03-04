'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { Forward, Heart, MoreHorizontalIcon } from 'lucide-react';
import { Message, User } from '@/lib/gql/graphql';
import { ChatMessageList } from '../../components/chat-message-list';
import {
  ChatBubble,
  ChatBubbleAction,
  ChatBubbleActionWrapper,
  ChatBubbleMessage,
  ChatBubbleTimestamp,
} from '../../components/chat-bubble';
import { AvatarTemplate } from '@/components/ui/avatar';
import { useIsMobile } from '@/utils/hooks/use-mobile';

interface ChatListProps {
  messages: Message[];
  receptorUser: User | undefined;
  currentUser: User | undefined;
  sendMessage: (newMessage: Message) => void;
  isMobile: boolean;
}

const getMessageVariant = (message: Message, currentUserId: string) =>
  message.from_user?.id === currentUserId ? 'sent' : 'received';

export function ChatList({ messages, currentUser }: ChatListProps) {
  const isMobile = useIsMobile();
  const actionIcons = [
    { icon: MoreHorizontalIcon, type: 'More' },
    { icon: Forward, type: 'Like' },
    { icon: Heart, type: 'Share' },
  ];

  return (
    <div className='w-full overflow-y-hidden h-full flex flex-col'>
      <ChatMessageList>
        <AnimatePresence>
          {messages.map((message, index) => {
            const variant = getMessageVariant(message, currentUser?.id ?? '');
            return (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, scale: 1, y: 50, x: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                exit={{ opacity: 0, scale: 1, y: 1, x: 0 }}
                transition={{
                  opacity: { duration: 0.1 },
                  layout: {
                    type: 'spring',
                    bounce: 0.3,
                    duration: index * 0.05 + 0.2,
                  },
                }}
                style={{ originX: 0.5, originY: 0.5 }}
                className='flex flex-col gap-2 p-4'
              >
                <ChatBubble variant={variant}>
                  {!isMobile && (
                    <AvatarTemplate
                      fallbackName={message.from_user?.full_name ?? 'User'}
                    />
                  )}
                  <ChatBubbleMessage isLoading={false}>
                    <div className='break-words overflow-hidden'>
                      {message.content}
                    </div>
                    {message.created_at && (
                      <ChatBubbleTimestamp timestamp={message.created_at} />
                    )}
                  </ChatBubbleMessage>
                  <ChatBubbleActionWrapper>
                    {actionIcons.map(({ icon: Icon, type }) => (
                      <ChatBubbleAction
                        className='size-7'
                        key={type}
                        icon={<Icon className='size-4' />}
                        onClick={() =>
                          console.log(
                            'Action ' + type + ' clicked for message ' + index
                          )
                        }
                      />
                    ))}
                  </ChatBubbleActionWrapper>
                </ChatBubble>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </ChatMessageList>
    </div>
  );
}
