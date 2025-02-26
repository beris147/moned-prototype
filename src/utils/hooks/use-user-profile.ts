import { FragmentType, useFragment } from '@/lib/gql';
import { ApolloError, BaseMutationOptions, useMutation } from '@apollo/client';
import { graphql } from '@/lib/gql/gql';
import {
  UpdateUserMutation,
  UserDataFragment,
  UserUpdateInput,
} from '@/lib/gql/graphql';
import { useState } from 'react';
import { removeTypename } from '../types';

export const USER_DATA_FRAGMENT = graphql(`
  fragment UserData on user {
    full_name
    email
    phone_number
    id
  }
`);

export const UPDATE_USER_MUTATION = graphql(`
  mutation UpdateUser($id: UUID, $userInput: userUpdateInput!) {
    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {
      records {
        ...UserData
      }
    }
  }
`);

type Props = {
  onCompleted?:
    | ((data: UpdateUserMutation, clientOptions?: BaseMutationOptions) => void)
    | undefined;
  onError?:
    | ((error: ApolloError, clientOptions?: BaseMutationOptions) => void)
    | undefined;
};

export const useUserProfile = (
  from: FragmentType<typeof USER_DATA_FRAGMENT>,
  { onCompleted, onError }: Props = {}
): [UserDataFragment, (formData: UserUpdateInput) => void] => {
  const data = useFragment(USER_DATA_FRAGMENT, from);
  const [loadedData, setLoadedData] = useState<UserDataFragment>(data);
  const [updateUserInternal] = useMutation(UPDATE_USER_MUTATION, {
    optimisticResponse: (variables) => ({
      __typename: 'Mutation' as const,
      updateuserCollection: {
        __typename: 'userUpdateResponse' as const,
        records: [
          {
            __typename: 'user' as const,
            id: variables.id ?? '',
            full_name: variables.userInput.full_name,
            email: variables.userInput.email ?? '',
            phone_number: variables.userInput.phone_number,
          },
        ],
      },
    }),
    update: (cache, { data }) => {
      const user = data?.updateuserCollection?.records?.[0];
      if (user) {
        cache.writeFragment({
          id: cache.identify(user),
          fragment: USER_DATA_FRAGMENT,
          data: user,
        });
        setLoadedData(user);
      }
    },
    onCompleted,
    onError,
  });

  const updateUser = (formData: UserUpdateInput) => {
    // need to remove typename to apollo to recognize the data type
    const userInput = removeTypename(formData);
    updateUserInternal({
      variables: {
        id: formData.id,
        userInput,
      },
    });
  };

  return [loadedData, updateUser];
};
