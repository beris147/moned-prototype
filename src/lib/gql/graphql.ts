/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A high precision floating point value represented as a string */
  BigFloat: { input: string; output: string; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: string; output: string; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: string; output: string; }
  /** A date and time */
  Datetime: { input: string; output: string; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: string; output: string; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: string; output: string; }
  /** A universally unique identifier */
  UUID: { input: string; output: string; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `admin` collection */
  deleteFromadminCollection: AdminDeleteResponse;
  /** Deletes zero or more records from the `appointment` collection */
  deleteFromappointmentCollection: AppointmentDeleteResponse;
  /** Deletes zero or more records from the `messages` collection */
  deleteFrommessagesCollection: MessagesDeleteResponse;
  /** Deletes zero or more records from the `provider` collection */
  deleteFromproviderCollection: ProviderDeleteResponse;
  /** Deletes zero or more records from the `provider_availability` collection */
  deleteFromprovider_availabilityCollection: Provider_AvailabilityDeleteResponse;
  /** Deletes zero or more records from the `user` collection */
  deleteFromuserCollection: UserDeleteResponse;
  /** Deletes zero or more records from the `user_provider_follow` collection */
  deleteFromuser_provider_followCollection: User_Provider_FollowDeleteResponse;
  generate_unique_cedula?: Maybe<Scalars['String']['output']>;
  get_random_degree?: Maybe<Scalars['String']['output']>;
  get_random_full_name?: Maybe<Scalars['String']['output']>;
  /** Adds one or more `admin` records to the collection */
  insertIntoadminCollection?: Maybe<AdminInsertResponse>;
  /** Adds one or more `appointment` records to the collection */
  insertIntoappointmentCollection?: Maybe<AppointmentInsertResponse>;
  /** Adds one or more `messages` records to the collection */
  insertIntomessagesCollection?: Maybe<MessagesInsertResponse>;
  /** Adds one or more `provider` records to the collection */
  insertIntoproviderCollection?: Maybe<ProviderInsertResponse>;
  /** Adds one or more `provider_availability` records to the collection */
  insertIntoprovider_availabilityCollection?: Maybe<Provider_AvailabilityInsertResponse>;
  /** Adds one or more `user` records to the collection */
  insertIntouserCollection?: Maybe<UserInsertResponse>;
  /** Adds one or more `user_provider_follow` records to the collection */
  insertIntouser_provider_followCollection?: Maybe<User_Provider_FollowInsertResponse>;
  /** Updates zero or more records in the `admin` collection */
  updateadminCollection: AdminUpdateResponse;
  /** Updates zero or more records in the `appointment` collection */
  updateappointmentCollection: AppointmentUpdateResponse;
  /** Updates zero or more records in the `messages` collection */
  updatemessagesCollection: MessagesUpdateResponse;
  /** Updates zero or more records in the `provider` collection */
  updateproviderCollection: ProviderUpdateResponse;
  /** Updates zero or more records in the `provider_availability` collection */
  updateprovider_availabilityCollection: Provider_AvailabilityUpdateResponse;
  /** Updates zero or more records in the `user` collection */
  updateuserCollection: UserUpdateResponse;
  /** Updates zero or more records in the `user_provider_follow` collection */
  updateuser_provider_followCollection: User_Provider_FollowUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromadminCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AdminFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromappointmentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AppointmentFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrommessagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MessagesFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromproviderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProviderFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromprovider_AvailabilityCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Provider_AvailabilityFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromuser_Provider_FollowCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_Provider_FollowFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoadminCollectionArgs = {
  objects: Array<AdminInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoappointmentCollectionArgs = {
  objects: Array<AppointmentInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntomessagesCollectionArgs = {
  objects: Array<MessagesInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoproviderCollectionArgs = {
  objects: Array<ProviderInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntoprovider_AvailabilityCollectionArgs = {
  objects: Array<Provider_AvailabilityInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouserCollectionArgs = {
  objects: Array<UserInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntouser_Provider_FollowCollectionArgs = {
  objects: Array<User_Provider_FollowInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdateadminCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AdminFilter>;
  set: AdminUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateappointmentCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<AppointmentFilter>;
  set: AppointmentUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatemessagesCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<MessagesFilter>;
  set: MessagesUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateproviderCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<ProviderFilter>;
  set: ProviderUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateprovider_AvailabilityCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Provider_AvailabilityFilter>;
  set: Provider_AvailabilityUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuserCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<UserFilter>;
  set: UserUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdateuser_Provider_FollowCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<User_Provider_FollowFilter>;
  set: User_Provider_FollowUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `admin` */
  adminCollection?: Maybe<AdminConnection>;
  /** A pagable collection of type `appointment` */
  appointmentCollection?: Maybe<AppointmentConnection>;
  /** A pagable collection of type `messages` */
  messagesCollection?: Maybe<MessagesConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `provider` */
  providerCollection?: Maybe<ProviderConnection>;
  /** A pagable collection of type `provider_availability` */
  provider_availabilityCollection?: Maybe<Provider_AvailabilityConnection>;
  /** A pagable collection of type `user` */
  userCollection?: Maybe<UserConnection>;
  /** A pagable collection of type `user_provider_follow` */
  user_provider_followCollection?: Maybe<User_Provider_FollowConnection>;
};


/** The root type for querying data */
export type QueryAdminCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AdminFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AdminOrderBy>>;
};


/** The root type for querying data */
export type QueryAppointmentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AppointmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppointmentOrderBy>>;
};


/** The root type for querying data */
export type QueryMessagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MessagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessagesOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryProviderCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<ProviderFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProviderOrderBy>>;
};


/** The root type for querying data */
export type QueryProvider_AvailabilityCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Provider_AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Provider_AvailabilityOrderBy>>;
};


/** The root type for querying data */
export type QueryUserCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderBy>>;
};


/** The root type for querying data */
export type QueryUser_Provider_FollowCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_Provider_FollowFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_Provider_FollowOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Admin = Node & {
  __typename?: 'admin';
  account_status?: Maybe<Admin_Account_Status>;
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  user?: Maybe<User>;
};

export type AdminConnection = {
  __typename?: 'adminConnection';
  edges: Array<AdminEdge>;
  pageInfo: PageInfo;
};

export type AdminDeleteResponse = {
  __typename?: 'adminDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Admin>;
};

export type AdminEdge = {
  __typename?: 'adminEdge';
  cursor: Scalars['String']['output'];
  node: Admin;
};

export type AdminFilter = {
  account_status?: InputMaybe<Admin_Account_StatusFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AdminFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AdminFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AdminFilter>>;
};

export type AdminInsertInput = {
  account_status?: InputMaybe<Admin_Account_Status>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AdminInsertResponse = {
  __typename?: 'adminInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Admin>;
};

export type AdminOrderBy = {
  account_status?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type AdminUpdateInput = {
  account_status?: InputMaybe<Admin_Account_Status>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AdminUpdateResponse = {
  __typename?: 'adminUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Admin>;
};

export enum Admin_Account_Status {
  Active = 'active',
  Suspended = 'suspended',
  Test = 'test',
  Unknown = 'unknown'
}

/** Boolean expression comparing fields on type "admin_account_status" */
export type Admin_Account_StatusFilter = {
  eq?: InputMaybe<Admin_Account_Status>;
  in?: InputMaybe<Array<Admin_Account_Status>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Admin_Account_Status>;
};

export type Appointment = Node & {
  __typename?: 'appointment';
  appointment_period: Scalars['Opaque']['output'];
  created_at: Scalars['Datetime']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  patient_user_id?: Maybe<Scalars['UUID']['output']>;
  provider?: Maybe<Provider>;
  provider_user_id: Scalars['UUID']['output'];
  user?: Maybe<User>;
};

export type AppointmentConnection = {
  __typename?: 'appointmentConnection';
  edges: Array<AppointmentEdge>;
  pageInfo: PageInfo;
};

export type AppointmentDeleteResponse = {
  __typename?: 'appointmentDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Appointment>;
};

export type AppointmentEdge = {
  __typename?: 'appointmentEdge';
  cursor: Scalars['String']['output'];
  node: Appointment;
};

export type AppointmentFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<AppointmentFilter>>;
  appointment_period?: InputMaybe<OpaqueFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<AppointmentFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<AppointmentFilter>>;
  patient_user_id?: InputMaybe<UuidFilter>;
  provider_user_id?: InputMaybe<UuidFilter>;
};

export type AppointmentInsertInput = {
  appointment_period?: InputMaybe<Scalars['Opaque']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  patient_user_id?: InputMaybe<Scalars['UUID']['input']>;
  provider_user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AppointmentInsertResponse = {
  __typename?: 'appointmentInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Appointment>;
};

export type AppointmentOrderBy = {
  appointment_period?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  patient_user_id?: InputMaybe<OrderByDirection>;
  provider_user_id?: InputMaybe<OrderByDirection>;
};

export type AppointmentUpdateInput = {
  appointment_period?: InputMaybe<Scalars['Opaque']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  patient_user_id?: InputMaybe<Scalars['UUID']['input']>;
  provider_user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type AppointmentUpdateResponse = {
  __typename?: 'appointmentUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Appointment>;
};

export type Messages = Node & {
  __typename?: 'messages';
  content: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  from_user_id: Scalars['UUID']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  to_user_id: Scalars['UUID']['output'];
  user?: Maybe<User>;
};

export type MessagesConnection = {
  __typename?: 'messagesConnection';
  edges: Array<MessagesEdge>;
  pageInfo: PageInfo;
};

export type MessagesDeleteResponse = {
  __typename?: 'messagesDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Messages>;
};

export type MessagesEdge = {
  __typename?: 'messagesEdge';
  cursor: Scalars['String']['output'];
  node: Messages;
};

export type MessagesFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<MessagesFilter>>;
  content?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  from_user_id?: InputMaybe<UuidFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<MessagesFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<MessagesFilter>>;
  to_user_id?: InputMaybe<UuidFilter>;
};

export type MessagesInsertInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  from_user_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  to_user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type MessagesInsertResponse = {
  __typename?: 'messagesInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Messages>;
};

export type MessagesOrderBy = {
  content?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  from_user_id?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  to_user_id?: InputMaybe<OrderByDirection>;
};

export type MessagesUpdateInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  from_user_id?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  to_user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type MessagesUpdateResponse = {
  __typename?: 'messagesUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Messages>;
};

export type Provider = Node & {
  __typename?: 'provider';
  account_status: Provider_Account_Status;
  appointmentCollection?: Maybe<AppointmentConnection>;
  cedula: Scalars['String']['output'];
  created_at: Scalars['Datetime']['output'];
  degree: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  provider_availabilityCollection?: Maybe<Provider_AvailabilityConnection>;
  user?: Maybe<User>;
  user_provider_followCollection?: Maybe<User_Provider_FollowConnection>;
};


export type ProviderAppointmentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AppointmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppointmentOrderBy>>;
};


export type ProviderProvider_AvailabilityCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Provider_AvailabilityFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Provider_AvailabilityOrderBy>>;
};


export type ProviderUser_Provider_FollowCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_Provider_FollowFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_Provider_FollowOrderBy>>;
};

export type ProviderConnection = {
  __typename?: 'providerConnection';
  edges: Array<ProviderEdge>;
  pageInfo: PageInfo;
};

export type ProviderDeleteResponse = {
  __typename?: 'providerDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Provider>;
};

export type ProviderEdge = {
  __typename?: 'providerEdge';
  cursor: Scalars['String']['output'];
  node: Provider;
};

export type ProviderFilter = {
  account_status?: InputMaybe<Provider_Account_StatusFilter>;
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<ProviderFilter>>;
  cedula?: InputMaybe<StringFilter>;
  created_at?: InputMaybe<DatetimeFilter>;
  degree?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<ProviderFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<ProviderFilter>>;
};

export type ProviderInsertInput = {
  account_status?: InputMaybe<Provider_Account_Status>;
  cedula?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  degree?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProviderInsertResponse = {
  __typename?: 'providerInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Provider>;
};

export type ProviderOrderBy = {
  account_status?: InputMaybe<OrderByDirection>;
  cedula?: InputMaybe<OrderByDirection>;
  created_at?: InputMaybe<OrderByDirection>;
  degree?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
};

export type ProviderUpdateInput = {
  account_status?: InputMaybe<Provider_Account_Status>;
  cedula?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  degree?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};

export type ProviderUpdateResponse = {
  __typename?: 'providerUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Provider>;
};

export enum Provider_Account_Status {
  Active = 'active',
  Suspended = 'suspended',
  Test = 'test',
  Unknown = 'unknown',
  Unverified = 'unverified'
}

/** Boolean expression comparing fields on type "provider_account_status" */
export type Provider_Account_StatusFilter = {
  eq?: InputMaybe<Provider_Account_Status>;
  in?: InputMaybe<Array<Provider_Account_Status>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Provider_Account_Status>;
};

export type Provider_Availability = Node & {
  __typename?: 'provider_availability';
  day_of_week: Week_Day;
  id: Scalars['UUID']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  provider?: Maybe<Provider>;
  provider_user_id: Scalars['UUID']['output'];
  time_range: Scalars['Opaque']['output'];
};

export type Provider_AvailabilityConnection = {
  __typename?: 'provider_availabilityConnection';
  edges: Array<Provider_AvailabilityEdge>;
  pageInfo: PageInfo;
};

export type Provider_AvailabilityDeleteResponse = {
  __typename?: 'provider_availabilityDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Provider_Availability>;
};

export type Provider_AvailabilityEdge = {
  __typename?: 'provider_availabilityEdge';
  cursor: Scalars['String']['output'];
  node: Provider_Availability;
};

export type Provider_AvailabilityFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Provider_AvailabilityFilter>>;
  day_of_week?: InputMaybe<Week_DayFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Provider_AvailabilityFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Provider_AvailabilityFilter>>;
  provider_user_id?: InputMaybe<UuidFilter>;
  time_range?: InputMaybe<OpaqueFilter>;
};

export type Provider_AvailabilityInsertInput = {
  day_of_week?: InputMaybe<Week_Day>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  provider_user_id?: InputMaybe<Scalars['UUID']['input']>;
  time_range?: InputMaybe<Scalars['Opaque']['input']>;
};

export type Provider_AvailabilityInsertResponse = {
  __typename?: 'provider_availabilityInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Provider_Availability>;
};

export type Provider_AvailabilityOrderBy = {
  day_of_week?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  provider_user_id?: InputMaybe<OrderByDirection>;
  time_range?: InputMaybe<OrderByDirection>;
};

export type Provider_AvailabilityUpdateInput = {
  day_of_week?: InputMaybe<Week_Day>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  provider_user_id?: InputMaybe<Scalars['UUID']['input']>;
  time_range?: InputMaybe<Scalars['Opaque']['input']>;
};

export type Provider_AvailabilityUpdateResponse = {
  __typename?: 'provider_availabilityUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Provider_Availability>;
};

export type User = Node & {
  __typename?: 'user';
  admin?: Maybe<Admin>;
  appointmentCollection?: Maybe<AppointmentConnection>;
  created_at: Scalars['Datetime']['output'];
  email: Scalars['String']['output'];
  full_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  messagesCollection?: Maybe<MessagesConnection>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Provider>;
  testing: Scalars['Boolean']['output'];
  user_provider_followCollection?: Maybe<User_Provider_FollowConnection>;
};


export type UserAppointmentCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<AppointmentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AppointmentOrderBy>>;
};


export type UserMessagesCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<MessagesFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MessagesOrderBy>>;
};


export type UserUser_Provider_FollowCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<User_Provider_FollowFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<User_Provider_FollowOrderBy>>;
};

export type UserConnection = {
  __typename?: 'userConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
};

export type UserDeleteResponse = {
  __typename?: 'userDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserEdge = {
  __typename?: 'userEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export type UserFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<UserFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  email?: InputMaybe<StringFilter>;
  full_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<UserFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<UserFilter>>;
  phone_number?: InputMaybe<StringFilter>;
  testing?: InputMaybe<BooleanFilter>;
};

export type UserInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  testing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserInsertResponse = {
  __typename?: 'userInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type UserOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  full_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
  testing?: InputMaybe<OrderByDirection>;
};

export type UserUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  full_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  testing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateResponse = {
  __typename?: 'userUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User>;
};

export type User_Provider_Follow = Node & {
  __typename?: 'user_provider_follow';
  followed_at: Scalars['Datetime']['output'];
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  provider?: Maybe<Provider>;
  provider_id: Scalars['UUID']['output'];
  user?: Maybe<User>;
  user_id: Scalars['UUID']['output'];
};

export type User_Provider_FollowConnection = {
  __typename?: 'user_provider_followConnection';
  edges: Array<User_Provider_FollowEdge>;
  pageInfo: PageInfo;
};

export type User_Provider_FollowDeleteResponse = {
  __typename?: 'user_provider_followDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Provider_Follow>;
};

export type User_Provider_FollowEdge = {
  __typename?: 'user_provider_followEdge';
  cursor: Scalars['String']['output'];
  node: User_Provider_Follow;
};

export type User_Provider_FollowFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<User_Provider_FollowFilter>>;
  followed_at?: InputMaybe<DatetimeFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<User_Provider_FollowFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<User_Provider_FollowFilter>>;
  provider_id?: InputMaybe<UuidFilter>;
  user_id?: InputMaybe<UuidFilter>;
};

export type User_Provider_FollowInsertInput = {
  followed_at?: InputMaybe<Scalars['Datetime']['input']>;
  provider_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_Provider_FollowInsertResponse = {
  __typename?: 'user_provider_followInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Provider_Follow>;
};

export type User_Provider_FollowOrderBy = {
  followed_at?: InputMaybe<OrderByDirection>;
  provider_id?: InputMaybe<OrderByDirection>;
  user_id?: InputMaybe<OrderByDirection>;
};

export type User_Provider_FollowUpdateInput = {
  followed_at?: InputMaybe<Scalars['Datetime']['input']>;
  provider_id?: InputMaybe<Scalars['UUID']['input']>;
  user_id?: InputMaybe<Scalars['UUID']['input']>;
};

export type User_Provider_FollowUpdateResponse = {
  __typename?: 'user_provider_followUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<User_Provider_Follow>;
};

export enum Week_Day {
  Friday = 'friday',
  Monday = 'monday',
  Saturday = 'saturday',
  Sunday = 'sunday',
  Thursday = 'thursday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday'
}

/** Boolean expression comparing fields on type "week_day" */
export type Week_DayFilter = {
  eq?: InputMaybe<Week_Day>;
  in?: InputMaybe<Array<Week_Day>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Week_Day>;
};

export type UserActionsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type UserActionsQuery = { __typename: 'Query', userCollection?: { __typename: 'userConnection', edges: Array<{ __typename: 'userEdge', user: { __typename: 'user', id: string, provider?: { __typename: 'provider', id: string } | null, admin?: { __typename: 'admin', id: string } | null } }> } | null };

export type UserProfileQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type UserProfileQuery = { __typename: 'Query', userCollection?: { __typename: 'userConnection', edges: Array<{ __typename: 'userEdge', user: { __typename: 'user', full_name?: string | null, email: string, phone_number?: string | null, id: string, provider?: { __typename: 'provider', cedula: string, account_status: Provider_Account_Status, degree: string, id: string } | null } }> } | null };

export type UpdateUserProfileMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  userInput: UserUpdateInput;
}>;


export type UpdateUserProfileMutation = { __typename: 'Mutation', updateuserCollection: { __typename: 'userUpdateResponse', records: Array<{ __typename: 'user', id: string, full_name?: string | null, email: string, phone_number?: string | null }> } };

export type SignUpProviderMutationVariables = Exact<{
  providerInput: ProviderInsertInput;
}>;


export type SignUpProviderMutation = { __typename: 'Mutation', insertIntoproviderCollection?: { __typename: 'providerInsertResponse', records: Array<{ __typename: 'provider', degree: string, cedula: string, created_at: string, account_status: Provider_Account_Status }> } | null };

export type UpdateProviderDataMutationVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
  providerInput: ProviderUpdateInput;
}>;


export type UpdateProviderDataMutation = { __typename: 'Mutation', updateproviderCollection: { __typename: 'providerUpdateResponse', records: Array<{ __typename: 'provider', degree: string, cedula: string, created_at: string, account_status: Provider_Account_Status }> } };

export type AllActiveProvidersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllActiveProvidersQuery = { __typename: 'Query', providerCollection?: { __typename: 'providerConnection', edges: Array<{ __typename: 'providerEdge', node: (
        { __typename: 'provider' }
        & { ' $fragmentRefs'?: { 'ProviderFieldsFragment': ProviderFieldsFragment } }
      ) }> } | null };

export type ProviderFieldsFragment = { __typename: 'provider', cedula: string, degree: string, id: string, user?: { __typename: 'user', id: string, full_name?: string | null, email: string } | null, user_provider_followCollection?: { __typename: 'user_provider_followConnection', edges: Array<{ __typename: 'user_provider_followEdge', node: { __typename: 'user_provider_follow', user_id: string, provider_id: string } }> } | null } & { ' $fragmentName'?: 'ProviderFieldsFragment' };

export type ProviderProfileQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;


export type ProviderProfileQuery = { __typename: 'Query', providerCollection?: { __typename: 'providerConnection', edges: Array<{ __typename: 'providerEdge', node: (
        { __typename: 'provider', account_status: Provider_Account_Status }
        & { ' $fragmentRefs'?: { 'ProviderFieldsFragment': ProviderFieldsFragment } }
      ) }> } | null };

export type NavUserLoggedInQueryVariables = Exact<{
  id?: InputMaybe<Scalars['UUID']['input']>;
}>;


export type NavUserLoggedInQuery = { __typename: 'Query', userCollection?: { __typename: 'userConnection', edges: Array<{ __typename: 'userEdge', user: { __typename: 'user', full_name?: string | null, email: string } }> } | null };

export const ProviderFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cedula"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_provider_followCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"provider_id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProviderFieldsFragment, unknown>;
export const UserActionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserActions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"admin"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserActionsQuery, UserActionsQueryVariables>;
export const UserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"UserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"cedula"}},{"kind":"Field","name":{"kind":"Name","value":"account_status"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<UserProfileQuery, UserProfileQueryVariables>;
export const UpdateUserProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateUserProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"userUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateuserCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateUserProfileMutation, UpdateUserProfileMutationVariables>;
export const SignUpProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SignUpProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"providerInsertInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"insertIntoproviderCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"objects"},"value":{"kind":"ListValue","values":[{"kind":"Variable","name":{"kind":"Name","value":"providerInput"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"cedula"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"account_status"}}]}}]}}]}}]} as unknown as DocumentNode<SignUpProviderMutation, SignUpProviderMutationVariables>;
export const UpdateProviderDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateProviderData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"providerUpdateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"updateproviderCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"set"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"records"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"cedula"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"account_status"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateProviderDataMutation, UpdateProviderDataMutationVariables>;
export const AllActiveProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"AllActiveProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"providerCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"account_status"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"EnumValue","value":"active"}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFields"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cedula"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_provider_followCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"provider_id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<AllActiveProvidersQuery, AllActiveProvidersQueryVariables>;
export const ProviderProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"ProviderProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"providerCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ProviderFields"}},{"kind":"Field","name":{"kind":"Name","value":"account_status"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ProviderFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"provider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cedula"}},{"kind":"Field","name":{"kind":"Name","value":"degree"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user_provider_followCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"user_id"}},{"kind":"Field","name":{"kind":"Name","value":"provider_id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ProviderProfileQuery, ProviderProfileQueryVariables>;
export const NavUserLoggedInDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"NavUserLoggedIn"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"userCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"full_name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<NavUserLoggedInQuery, NavUserLoggedInQueryVariables>;