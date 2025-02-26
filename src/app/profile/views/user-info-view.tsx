import React from 'react';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { redirect } from 'next/navigation';
import UserInfoForm from '../components/user-info-form';
import ProviderInfoView from './provider-info-view';

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

export default async function UserInfo({ userID }: { userID: string }) {
  const client = await getSSRClient();
  const { data, loading, error } = await client.query({
    query,
    variables: {
      id: userID,
    },
  });
  if (loading) {
    return <>Loading...</>;
  }
  if (error || !data) {
    redirect('/error');
  }
  const userData = data.userCollection?.edges.at(0)?.user;
  const { provider, ...user } = userData || {};

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
