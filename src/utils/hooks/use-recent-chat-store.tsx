'use client';

import {
  Chat,
  Message,
  MessageConnection,
  MessageEdge,
} from '@/lib/gql/graphql';
import React, { createContext, useContext, useRef } from 'react';
import { createStore, StoreApi, useStore } from 'zustand';

type RecentChatStoreInput = {
  chats: Chat[];
  totalCount: number;
  currentUserId: string;
};

type RecentChatStore = RecentChatStoreInput & {
  setChats: (chats: Chat[]) => void;
  onMessage: (message: Message) => void;
};

const RecentChatStoreContext = createContext<StoreApi<RecentChatStore> | null>(
  null
);

function addMessageToChats(
  message: Message,
  chats: Chat[],
  setChats: (chats: Chat[]) => void
) {
  const chatFilter = chats.filter((chat) => chat.id === message.chat_id);
  if (chatFilter.length > 0) {
    const updatedChat = chatFilter[0];
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
    setChats([
      updatedChat,
      ...chats.filter((chat) => updatedChat.id !== chat.id),
    ]);
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
    setChats([newChat, ...chats]);
  }
  setChats(
    chats.sort(
      (a, b) =>
        new Date(
          b.messageCollection?.edges?.[0]?.node?.created_at ?? 0
        ).getTime() -
        new Date(
          a.messageCollection?.edges?.[0]?.node?.created_at ?? 0
        ).getTime()
    )
  );
}

export function RecentChatStoreProvider({
  children,
  initialState,
}: React.PropsWithChildren<{
  initialState: RecentChatStoreInput;
}>) {
  const storeRef = useRef<StoreApi<RecentChatStore> | null>(null);
  if (!storeRef.current) {
    storeRef.current = createStore((set) => ({
      ...initialState,
      setChats: (chats: Chat[]) => {
        set({ chats });
      },
      onMessage: (message: Message) => {
        set((state) => {
          addMessageToChats(message, state.chats, state.setChats);
          return { chats: state.chats };
        });
      },
    }));
  }
  return (
    <RecentChatStoreContext.Provider value={storeRef.current}>
      {children}
    </RecentChatStoreContext.Provider>
  );
}

export function useRecentChatStore() {
  const store = useContext(RecentChatStoreContext);
  if (!store) {
    throw new Error('Missing ChatStoreProvider');
  }
  return useStore(store);
}
