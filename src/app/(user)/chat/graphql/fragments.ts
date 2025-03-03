import { graphql } from '@/lib/gql/gql';

export const USER_CHAT_FRAGMENT = graphql(`
  fragment UserChat on user {
    id
    full_name
  }
`);
