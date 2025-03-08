import { graphql } from '@/lib/gql/gql';

export const USER_CHAT_FRAGMENT = graphql(`
  fragment UserChat on user {
    id
    full_name
  }
`);

export const MESSAGE_FRAGMENT = graphql(`
  fragment Message on message {
    id
    from_user {
      id
      full_name
    }
    to_user {
      id
      full_name
    }
    content
    created_at
    from_user_id
    to_user_id
  }
`);

export const CHAT_FRAGMENT = graphql(`
  fragment Chat on chat {
    id
    user1 {
      id
      full_name
    }
    user2 {
      id
      full_name
    }
    messageCollection(orderBy: { created_at: DescNullsLast }) {
      edges {
        node {
          ...Message
        }
      }
    }
  }
`);
