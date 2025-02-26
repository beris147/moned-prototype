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
    "\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n": typeof types.UpdateUserProfileDocument,
    "\n  query UserInfo($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n        }\n      }\n    }\n  }\n": typeof types.UserInfoDocument,
    "\n  fragment UserData on user {\n    full_name\n    email\n    phone_number\n    id\n  }\n": typeof types.UserDataFragmentDoc,
    "\n  mutation UpdateUser($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        ...UserData\n      }\n    }\n  }\n": typeof types.UpdateUserDocument,
};
const documents: Documents = {
    "\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n": types.UpdateUserProfileDocument,
    "\n  query UserInfo($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n        }\n      }\n    }\n  }\n": types.UserInfoDocument,
    "\n  fragment UserData on user {\n    full_name\n    email\n    phone_number\n    id\n  }\n": types.UserDataFragmentDoc,
    "\n  mutation UpdateUser($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        ...UserData\n      }\n    }\n  }\n": types.UpdateUserDocument,
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
export function graphql(source: "\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        id\n        full_name\n        email\n        phone_number\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query UserInfo($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query UserInfo($id: UUID) {\n    userCollection(filter: { id: { eq: $id } }) {\n      edges {\n        user: node {\n          full_name\n          email\n          phone_number\n          id\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment UserData on user {\n    full_name\n    email\n    phone_number\n    id\n  }\n"): (typeof documents)["\n  fragment UserData on user {\n    full_name\n    email\n    phone_number\n    id\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        ...UserData\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation UpdateUser($id: UUID, $userInput: userUpdateInput!) {\n    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {\n      records {\n        ...UserData\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;