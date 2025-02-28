import { UserUpdateInput } from '@/lib/gql/graphql';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const removeTypename = (obj: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { __typename, ...rest } = obj;
  return rest;
};

// sometimes the data won't be used as input, but it's simpler
// to transform any user reponse object into a `UserUpdateInput`
// than to a proper `User`, so let's use it like this
export type ReadonlyUser = Readonly<UserUpdateInput>;

export type UserType = 'non-auth' | 'user' | 'provider' | 'admin';

export type User = {
  userID?: string;
  userType: UserType;
};
