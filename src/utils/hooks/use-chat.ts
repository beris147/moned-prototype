import { graphql } from '@/lib/gql/gql';
import { Chat, Message, MessageInsertInput, User } from '@/lib/gql/graphql';
import { useMutation } from '@apollo/client';
import { RefObject, useRef, useState } from 'react';

type Props = {
  chat?: Chat | undefined;
  receptorUser?: User | undefined;
  emisorUser?: User | undefined;
};

const SEND_CHAT_MESSAGE_MUTATION = graphql(`
  mutation SendChatMessage(
    $chatId: UUID!
    $from: UUID!
    $to: UUID!
    $content: String!
  ) {
    insertIntomessageCollection(
      objects: [
        {
          from_user_id: $from
          to_user_id: $to
          content: $content
          chat_id: $chatId
        }
      ]
    ) {
      records {
        ...Message
      }
    }
  }
`);

export function useChat({ chat, receptorUser, emisorUser }: Props): {
  currentMessage: string;
  messages: Message[];
  handleSend: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  inputRef: RefObject<HTMLTextAreaElement | null>;
  sending: boolean;
} {
  const [currentMessage, setCurrentMessage] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const [messages, setMessages] = useState<Message[]>(
    chat?.messageCollection?.edges.map((edge) => edge.node) ?? []
  );

  const [sendChatMessageMutation, { loading: sending }] = useMutation(
    SEND_CHAT_MESSAGE_MUTATION
  );

  const sendMessage = (newMessage: MessageInsertInput) => {
    const optimisticMessage: Message = {
      __typename: 'message',
      id: Math.random().toString(),
      nodeId: Math.random().toString(),
      from_user: receptorUser,
      to_user: emisorUser,
      created_at: new Date().toISOString(),
      chat_id: newMessage.chat_id ?? '',
      content: newMessage.content ?? '',
      from_user_id: newMessage.from_user_id ?? '',
      to_user_id: newMessage.to_user_id ?? '',
    };
    sendChatMessageMutation({
      variables: {
        chatId: newMessage.chat_id ?? '',
        from: newMessage.from_user_id ?? '',
        to: newMessage.to_user_id ?? '',
        content: newMessage.content ?? '',
      },
      onError: (error) => {
        console.error(error);
        // remove optimistic message
        setMessages((prev) =>
          prev.filter((message) => message.id !== optimisticMessage.id)
        );
      },
    });

    setMessages((prev) => [...prev, optimisticMessage]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentMessage(event.target.value);
  };

  const handleSend = () => {
    if (currentMessage.trim()) {
      sendMessage({
        from_user_id: receptorUser?.id ?? '',
        chat_id: chat?.id ?? '',
        content: currentMessage.trim(),
        to_user_id: emisorUser?.id ?? '',
      });
      setCurrentMessage('');
      inputRef.current?.focus();
    }
  };

  return {
    currentMessage,
    messages,
    handleSend,
    handleInputChange,
    inputRef,
    sending,
  };
}
