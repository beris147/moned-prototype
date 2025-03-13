import { graphql } from '@/lib/gql/gql';

export const ALL_ACTIVE_PROVIDERS_QUERY = graphql(`
  query AllActiveProviders {
    providerCollection(filter: { account_status: { eq: active } }) {
      edges {
        node {
          ...ProviderFields
        }
      }
    }
  }
`);

export const CHECK_FOLLOW_STATUS_QUERY = graphql(`
  query CheckFollowStatus($userId: UUID!, $providerId: UUID!) {
    user_provider_followCollection(
      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }
    ) {
      edges {
        node {
          user_id
          provider_id
        }
      }
    }
  }
`);

export const FOLLOWED_PROVIDERS_QUERY = graphql(`
  query FollowedProviders($userId: UUID!) {
    user_provider_followCollection(filter: { user_id: { eq: $userId } }) {
      edges {
        node {
          provider {
            id
            user {
              full_name
            }
          }
        }
      }
    }
  }
`);
