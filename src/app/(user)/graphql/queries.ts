import { graphql } from '@/lib/gql/gql';

export const USER_DATA_QUERY = graphql(`
  query UserActions($id: UUID) {
    userCollection(filter: { id: { eq: $id } }) {
      edges {
        user: node {
          id
          provider {
            id
          }
          admin {
            id
          }
        }
      }
    }
  }
`);
