import React from 'react';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { redirect } from 'next/navigation';
import UserInfoForm from '../components/user-info-form';
import ProviderInfoView from './provider-info-view';
import { ProviderUpdateInput, UserUpdateInput } from '@/lib/gql/graphql';

const query = graphql(`
  query UserInfo($id: UUID) {
    userCollection(filter: { id: { eq: $id } }) {
      edges {
        user: node {
          full_name
          email
          phone_number
          id
          provider {
            cedula
            account_status
            degree
          }
        }
      }
    }
  }
`);

type FetchResponse = {
  data: {
    user?: UserUpdateInput | undefined | null;
    provider?: ProviderUpdateInput | undefined | null;
  };
  loading: boolean;
  error: unknown;
};

async function fetchData(userID: string): Promise<FetchResponse> {
  const client = await getSSRClient();
  const { data, loading, error } = await client.query({
    query,
    variables: {
      id: userID,
    },
  });
  const userData = data.userCollection?.edges.at(0)?.user;
  const { provider, ...user } = userData || {};
  return { data: { user, provider }, loading, error };
}

export default async function UserInfo({ userID }: { userID: string }) {
  const {
    data: { user, provider },
    loading,
    error,
  } = await fetchData(userID);
  if (loading) {
    return <>Loading...</>;
  }
  if (error) {
    redirect('/error');
  }

  return (
    <>
      {user && (
        <>
          <UserInfoForm user={user} />
          <ProviderInfoView provider={provider} user={user} />
        </>
      )}
    </>
  );
}
