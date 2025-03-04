import React, { Suspense } from 'react';

import { redirect } from 'next/navigation';
import { fetchChatMessages, fetchUserChats } from '../actions';
import UserPage from '../../components/user-page';
import Chat from './components/chat';
import { getAuthUser } from '@/app/(auth)/utils';

async function SingleChatPageInternal({ id }: { id: string }) {
  const { user } = await getAuthUser();
  // get all user chats to reder the recent chat lists
  const {
    data: { chats, totalCount },
    error,
  } = await fetchUserChats(user?.id);
  // get all messages for the selected chat
  const {
    data: { chat },
    error: error2,
  } = await fetchChatMessages(id);

  if (error || error2) {
    redirect('/error');
  }

  let emisorUser = undefined;
  let receptorUser = undefined;

  if (chat?.user1?.id === user?.id) {
    receptorUser = chat.user1;
    emisorUser = chat.user2;
  } else {
    emisorUser = chat?.user1;
    receptorUser = chat?.user2;
  }

  return (
    <Chat
      selectedChat={chat}
      chats={chats}
      totalCount={totalCount}
      emisorUser={emisorUser ?? undefined}
      receptorUser={receptorUser ?? undefined}
    />
  );
}

export default async function SingleChatPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <UserPage>
      <Suspense fallback={<Chat chats={[]} totalCount={0} />}>
        <SingleChatPageInternal id={id} />
      </Suspense>
    </UserPage>
  );
}
