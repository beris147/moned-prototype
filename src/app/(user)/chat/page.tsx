import React from 'react';
import UserPage from '../components/user-page';
import ChatTemplate from './components/chat-template';

export default function ChatPage() {
  return (
    <UserPage>
      <ChatTemplate />
    </UserPage>
  );
}
