import { graphql } from '@/lib/gql/gql';

export const USER_CHATS_QUERY = graphql(`
  query UserChats($userId: UUID!) {
    chatCollection(
      filter: {
        or: [{ user1_id: { eq: $userId } }, { user2_id: { eq: $userId } }]
      }
      orderBy: { last_message_at: DescNullsLast }
    ) {
      totalCount
      edges {
        node {
          id
          user1 {
            ...UserChat
          }
          user2 {
            ...UserChat
          }
          messageCollection(last: 1, orderBy: { created_at: AscNullsLast }) {
            edges {
              node {
                id
                content
                from_user_id
                to_user_id
              }
            }
          }
        }
      }
    }
  }
`);

export const CHAT_MESSAGES_QUERY = graphql(`
  query ChatMessages($id: UUID) {
    chatCollection(filter: { id: { eq: $id } }) {
      edges {
        node {
          ...Chat
        }
      }
    }
  }
`);
