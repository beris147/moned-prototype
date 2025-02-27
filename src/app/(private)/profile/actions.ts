'use server';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import {
  ProviderInsertInput,
  ProviderUpdateInput,
  UserUpdateInput,
} from '@/lib/gql/graphql';
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

const SIGNUP_PROVIDER_MUTATION = graphql(`
  mutation SignUpProvider($providerInput: providerInsertInput!) {
    insertIntoproviderCollection(objects: [$providerInput]) {
      records {
        degree
        cedula
        created_at
        account_status
      }
    }
  }
`);

// create function to signup provider
export async function signUpProvider(
  providerInputForm: ProviderInsertInput
): Promise<ProviderUpdateInput | undefined> {
  const providerInput = removeTypename(providerInputForm);
  const client = await getSSRClient();
  const result = await client.mutate({
    mutation: SIGNUP_PROVIDER_MUTATION,
    variables: {
      providerInput,
    },
  });

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data?.insertIntoproviderCollection?.records.at(0);
}

const UPDATE_PROVIDER_DATA_MUTATION = graphql(`
  mutation UpdateProviderData($id: UUID, $providerInput: providerUpdateInput!) {
    updateproviderCollection(filter: { id: { eq: $id } }, set: $providerInput) {
      records {
        degree
        cedula
        created_at
        account_status
      }
    }
  }
`);

export async function updateProviderData(
  providerInputForm: ProviderUpdateInput
): Promise<ProviderUpdateInput | undefined> {
  const providerInput = removeTypename(providerInputForm);
  const client = await getSSRClient();
  const result = await client.mutate({
    mutation: UPDATE_PROVIDER_DATA_MUTATION,
    variables: {
      id: providerInputForm.id,
      providerInput,
    },
  });

  if (result.errors) {
    throw new Error(result.errors[0].message);
  }

  return result.data?.updateproviderCollection.records[0];
}
