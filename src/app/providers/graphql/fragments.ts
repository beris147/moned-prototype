import { graphql } from '@/lib/gql/gql';

export const PROVIDER_FIELDS_FRAGMENT = graphql(`
  fragment ProviderFields on provider {
    user {
      id
      full_name
      email
    }
    cedula
    degree
    id
    user_provider_followCollection {
      edges {
        node {
          user_id
          provider_id
        }
      }
    }
  }
`);
