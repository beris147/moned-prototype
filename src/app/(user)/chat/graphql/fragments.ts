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
  }
`);
