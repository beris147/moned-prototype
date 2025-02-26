import React from 'react';

import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { redirect } from 'next/navigation';
import UserInfoForm from './user-info-form';

const query = graphql(`
  query UserInfo($id: UUID) {
    userCollection(filter: { id: { eq: $id } }) {
      edges {
        user: node {
          full_name
          email
          phone_number
          id
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
  const user = data.userCollection?.edges.at(0)?.user;
  return <>{user && <UserInfoForm user={user} />}</>;
}
