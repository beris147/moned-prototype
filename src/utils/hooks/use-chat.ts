import { graphql } from '@/lib/gql/gql';
import { Chat, Message, MessageInsertInput, User } from '@/lib/gql/graphql';
import { useMutation } from '@apollo/client';
import { RefObject, useEffect, useRef, useState } from 'react';
import { createClient } from '../supabase/client';

type useMessageSubscriptionProps = {
  chat?: Chat | undefined;
  onMessage: (message: Message) => void;
};

export function useMessageSubscription({
  chat,
  onMessage,
}: useMessageSubscriptionProps) {
  const client = createClient();

  useEffect(() => {
    // supabase graphql subscription is not supported for now, we can either
    // implement prisma for the whole project to have a better db management +
    // subscriptions with strong types. For now we use the raw supabase client
    // to subscribe to the changes in the message table
    const messageSubscription = client
      .channel(chat ? `chat-${chat.id}` : 'all-user-chats')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'message',
          filter: chat ? `chat_id=eq.${chat.id}` : undefined,
        },
        (payload) => {
          const newMessage: Message = {
            __typename: 'message',
            id: payload.new.id,
            nodeId: payload.new.id,
            from_user:
              payload.new.from_user_id === chat?.user1?.id
                ? chat?.user1
                : chat?.user2,
            to_user:
              payload.new.to_user_id === chat?.user1?.id
                ? chat?.user1
                : chat?.user2,
            created_at: payload.new.created_at,
            chat_id: payload.new.chat_id,
            content: payload.new.content,
            from_user_id: payload.new.from_user_id,
            to_user_id: payload.new.to_user_id,
          };
          onMessage(newMessage);
        }
      )
      .subscribe();

    return () => {
      messageSubscription.unsubscribe();
    };
  }, [client]);
}

type useChatProps = {
  chat?: Chat | undefined;
  currentUser?: User | undefined;
  receptorUser?: User | undefined;
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

export function useChat({ chat, currentUser, receptorUser }: useChatProps): {
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

  useMessageSubscription({
    chat,
    onMessage: (message) => {
      if (message.from_user_id === receptorUser?.id) {
        setMessages((prev) => [...prev, message]);
      }
    },
  });

  const sendMessage = (newMessage: MessageInsertInput) => {
    const optimisticMessage: Message = {
      __typename: 'message',
      id: Math.random().toString(),
      nodeId: Math.random().toString(),
      from_user: currentUser,
      to_user: receptorUser,
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
        from_user_id: currentUser?.id ?? '',
        chat_id: chat?.id ?? '',
        content: currentMessage.trim(),
        to_user_id: receptorUser?.id ?? '',
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
