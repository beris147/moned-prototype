import React from 'react';
import { Message, UserData } from '../data';
import ChatTopbar from './chat-top-bar';
import { ChatList } from './chat-list';

interface ChatProps {
  messages?: Message[];
  selectedUser: UserData;
  isMobile: boolean;
}

export interface Example {
  name: string;
  url: string;
}

interface State {
  selectedExample: Example;
  examples: Example[];
  input: string;
  chatBotMessages: Message[];
  messages: Message[];
  hasInitialAIResponse: boolean;
  hasInitialResponse: boolean;
}

function useChatStore(arg0: (state: State) => Message[]) {
  throw new Error('Function not implemented.');
}

export function Chat({ messages, selectedUser, isMobile }: ChatProps) {
  const messagesState = useChatStore((state) => state.messages);

  const sendMessage = (newMessage: Message) => {
    // Send message to the server
  };

  return (
    <div className='flex flex-col justify-between w-full h-full'>
      <ChatTopbar selectedUser={selectedUser} />

      <ChatList
        messages={[]}
        selectedUser={selectedUser}
        sendMessage={sendMessage}
        isMobile={isMobile}
      />

      <ChatBottombar isMobile={isMobile} />
    </div>
  );
}
