import React from 'react';

import { redirect } from 'next/navigation';
import { fetchChatMessages } from '../actions';
import Chat from './components/chat';
import { getAuthUser } from '@/app/(auth)/utils';

async function SingleChatPageInternal({ id }: { id: string }) {
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

export default async function SingleChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return <SingleChatPageInternal id={id} />;
}
