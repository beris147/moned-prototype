import React from 'react';

import { redirect } from 'next/navigation';
import Chat from './components/chat';
import { getAuthUser } from '@/app/(auth)/utils';
import { fetchChatMessages } from '../data-fetch';

export default async function SingleChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { user } = await getAuthUser();
  // get all messages for the selected chat
  const {
    data: { chat },
    error,
  } = await fetchChatMessages(id);

  if (error) {
    redirect('/error');
  }

  let receptorUser = undefined;
  let currentUser = undefined;

  if (chat?.user1?.id === user?.id) {
    currentUser = chat.user1;
    receptorUser = chat.user2;
  } else {
    receptorUser = chat?.user1;
    currentUser = chat?.user2;
  }

  return (
    <Chat
      selectedChat={chat}
      receptorUser={receptorUser ?? undefined}
      currentUser={currentUser ?? undefined}
    />
  );
}
