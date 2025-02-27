import React from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { getAuthUser } from '@/app/(auth)/utils';
import { redirect } from 'next/navigation';
import { getSSRClient } from '@/lib/apollo/ssr-client';
import { graphql } from '@/lib/gql/gql';
import { ReadonlyUser } from '@/utils/types';

const query = graphql(`
  query PrivateSitePageUser($id: UUID) {
    userCollection(filter: { id: { eq: $id } }) {
      edges {
        user: node {
          full_name
          email
        }
      }
    }
  }
`);

type FetchResponse = {
  data: {
    user?: ReadonlyUser;
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
  const user = data.userCollection?.edges.at(0)?.user;
  return { data: { user }, loading, error };
}

export default async function PrivateSitePage({
  children,
}: React.PropsWithChildren) {
  console.log('PrivateSitePage');
  const { user: authUser } = await getAuthUser();
  if (!authUser) {
    redirect('/login');
  }

  const {
    data: { user },
    loading,
    error,
  } = await fetchData(authUser.id);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    redirect('/error');
  }

  return (
    <div className='[--header-height:calc(theme(spacing.14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar user={user} />
          <SidebarInset>
            <div className='flex flex-1 flex-col gap-4 p-4'>{children}</div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
