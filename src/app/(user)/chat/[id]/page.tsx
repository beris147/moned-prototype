import React, { Suspense } from 'react';

import Loading from '@/components/ui/loading';
import { redirect } from 'next/navigation';
import { fetchChatMessages, fetchUserChats } from '../actions';
import UserPage from '../../components/user-page';
import Chat from './components/chat';

async function SingleChatPageInternal({ id }: { id: string }) {
  const {
    data: { chats, totalCount, currentUserId },
    error,
  } = await fetchUserChats();
  const {
    data: { messages },
    error: error2,
  } = await fetchChatMessages(id);

  if (error || error2) {
    redirect('/error');
  }

  return (
    <Chat
      messages={messages}
      chats={chats}
      totalCount={totalCount}
      currentUserId={currentUserId}
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
      <Suspense fallback={<Loading />}>
        <SingleChatPageInternal id={id} />
      </Suspense>
    </UserPage>
  );
}
