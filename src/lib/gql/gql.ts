/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query UserActions($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          id\n          provider {\n            id\n          }\n          admin {\n            id\n          }\n        }\n      }\n    }\n  }\n": typeof types.UserActionsDocument,
    "\n  query UserProfile($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n          provider {\n            cedula\n            account_status\n            degree\n            id\n          }\n        }\n      }\n    }\n  }\n": typeof types.UserProfileDocument,
    "\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n": typeof types.UpdateUserProfileDocument,
    "\n  mutation SignUpProvider($providerInput: providerInsertInput!) {\n    insertIntoproviderCollection(objects: [$providerInput]) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n": typeof types.SignUpProviderDocument,
    "\n  mutation UpdateProviderData($id: UUID, $providerInput: providerUpdateInput!) {\n    updateproviderCollection(filter: { id: { eq: $id } }, set: $providerInput) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n": typeof types.UpdateProviderDataDocument,
    "\n  query AllActiveProviders {\n    providerCollection(filter: { account_status: { eq: active } }) {\n      edges {\n        node {\n          ...ProviderFields\n        }\n      }\n    }\n  }\n": typeof types.AllActiveProvidersDocument,
    "\n  query CheckFollowStatus($userId: UUID!, $providerId: UUID!) {\n    user_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n": typeof types.CheckFollowStatusDocument,
    "\n  mutation FollowProvider($userId: UUID!, $providerId: UUID!) {\n    insertIntouser_provider_followCollection(\n      objects: [{ user_id: $userId, provider_id: $providerId }]\n    ) {\n      affectedCount\n    }\n  }\n": typeof types.FollowProviderDocument,
    "\n  mutation UnfollowProvider($userId: UUID!, $providerId: UUID!) {\n    deleteFromuser_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      affectedCount\n    }\n  }\n": typeof types.UnfollowProviderDocument,
    "\n  fragment ProviderFields on provider {\n    user {\n      id\n      full_name\n      email\n    }\n    cedula\n    degree\n    id\n    user_provider_followCollection {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n": typeof types.ProviderFieldsFragmentDoc,
    "\n  query ProviderProfile($id: UUID!) {\n    providerCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          ...ProviderFields\n          account_status\n        }\n      }\n    }\n  }\n": typeof types.ProviderProfileDocument,
    "\n  query NavUserLoggedIn($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n        }\n      }\n    }\n  }\n": typeof types.NavUserLoggedInDocument,
};
const documents: Documents = {
    "\n  query UserActions($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          id\n          provider {\n            id\n          }\n          admin {\n            id\n          }\n        }\n      }\n    }\n  }\n": types.UserActionsDocument,
    "\n  query UserProfile($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n          provider {\n            cedula\n            account_status\n            degree\n            id\n          }\n        }\n      }\n    }\n  }\n": types.UserProfileDocument,
    "\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n": types.UpdateUserProfileDocument,
    "\n  mutation SignUpProvider($providerInput: providerInsertInput!) {\n    insertIntoproviderCollection(objects: [$providerInput]) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n": types.SignUpProviderDocument,
    "\n  mutation UpdateProviderData($id: UUID, $providerInput: providerUpdateInput!) {\n    updateproviderCollection(filter: { id: { eq: $id } }, set: $providerInput) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n": types.UpdateProviderDataDocument,
    "\n  query AllActiveProviders {\n    providerCollection(filter: { account_status: { eq: active } }) {\n      edges {\n        node {\n          ...ProviderFields\n        }\n      }\n    }\n  }\n": types.AllActiveProvidersDocument,
    "\n  query CheckFollowStatus($userId: UUID!, $providerId: UUID!) {\n    user_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n": types.CheckFollowStatusDocument,
    "\n  mutation FollowProvider($userId: UUID!, $providerId: UUID!) {\n    insertIntouser_provider_followCollection(\n      objects: [{ user_id: $userId, provider_id: $providerId }]\n    ) {\n      affectedCount\n    }\n  }\n": types.FollowProviderDocument,
    "\n  mutation UnfollowProvider($userId: UUID!, $providerId: UUID!) {\n    deleteFromuser_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      affectedCount\n    }\n  }\n": types.UnfollowProviderDocument,
    "\n  fragment ProviderFields on provider {\n    user {\n      id\n      full_name\n      email\n    }\n    cedula\n    degree\n    id\n    user_provider_followCollection {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n": types.ProviderFieldsFragmentDoc,
    "\n  query ProviderProfile($id: UUID!) {\n    providerCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          ...ProviderFields\n          account_status\n        }\n      }\n    }\n  }\n": types.ProviderProfileDocument,
    "\n  query NavUserLoggedIn($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n        }\n      }\n    }\n  }\n": types.NavUserLoggedInDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserActions($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          id\n          provider {\n            id\n          }\n          admin {\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserActions($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          id\n          provider {\n            id\n          }\n          admin {\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserProfile($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n          provider {\n            cedula\n            account_status\n            degree\n            id\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserProfile($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n          provider {\n            cedula\n            account_status\n            degree\n            id\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUpProvider($providerInput: providerInsertInput!) {\n    insertIntoproviderCollection(objects: [$providerInput]) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation SignUpProvider($providerInput: providerInsertInput!) {\n    insertIntoproviderCollection(objects: [$providerInput]) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateProviderData($id: UUID, $providerInput: providerUpdateInput!) {\n    updateproviderCollection(filter: { id: { eq: $id } }, set: $providerInput) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateProviderData($id: UUID, $providerInput: providerUpdateInput!) {\n    updateproviderCollection(filter: { id: { eq: $id } }, set: $providerInput) {\n      records {\n        degree\n        cedula\n        created_at\n        account_status\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query AllActiveProviders {\n    providerCollection(filter: { account_status: { eq: active } }) {\n      edges {\n        node {\n          ...ProviderFields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query AllActiveProviders {\n    providerCollection(filter: { account_status: { eq: active } }) {\n      edges {\n        node {\n          ...ProviderFields\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CheckFollowStatus($userId: UUID!, $providerId: UUID!) {\n    user_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query CheckFollowStatus($userId: UUID!, $providerId: UUID!) {\n    user_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation FollowProvider($userId: UUID!, $providerId: UUID!) {\n    insertIntouser_provider_followCollection(\n      objects: [{ user_id: $userId, provider_id: $providerId }]\n    ) {\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation FollowProvider($userId: UUID!, $providerId: UUID!) {\n    insertIntouser_provider_followCollection(\n      objects: [{ user_id: $userId, provider_id: $providerId }]\n    ) {\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UnfollowProvider($userId: UUID!, $providerId: UUID!) {\n    deleteFromuser_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      affectedCount\n    }\n  }\n"): (typeof documents)["\n  mutation UnfollowProvider($userId: UUID!, $providerId: UUID!) {\n    deleteFromuser_provider_followCollection(\n      filter: { user_id: { eq: $userId }, provider_id: { eq: $providerId } }\n    ) {\n      affectedCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment ProviderFields on provider {\n    user {\n      id\n      full_name\n      email\n    }\n    cedula\n    degree\n    id\n    user_provider_followCollection {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  fragment ProviderFields on provider {\n    user {\n      id\n      full_name\n      email\n    }\n    cedula\n    degree\n    id\n    user_provider_followCollection {\n      edges {\n        node {\n          user_id\n          provider_id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ProviderProfile($id: UUID!) {\n    providerCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          ...ProviderFields\n          account_status\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query ProviderProfile($id: UUID!) {\n    providerCollection(filter: { id: { eq: $id } }) {\n      edges {\n        node {\n          ...ProviderFields\n          account_status\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query NavUserLoggedIn($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query NavUserLoggedIn($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;