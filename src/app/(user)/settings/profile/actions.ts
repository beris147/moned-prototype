'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { UserUpdateInput } from '@/lib/gql/graphql';
import { removeTypename } from '@/utils/types';

const UPDATE_USER_DATA_MUTATION = graphql(`
  mutation UpdateUserProfile($id: UUID, $userInput: userUpdateInput!) {
    updateuserCollection(filter: { id: { eq: $id } }, set: $userInput) {
      records {
        id
        full_name
        email
        phone_number
      }
    }
  }
`);

export async function updateUserProfile(
  formData: UserUpdateInput
): Promise<UserUpdateInput | undefined> {
  const client = await getSSRClient();

  const userInput = removeTypename(formData);

  const result = await client.mutate({
    mutation: UPDATE_USER_DATA_MUTATION,
    variables: {
      id: formData.id,
      userInput,
    },
  });

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data?.updateuserCollection.records[0];
}
