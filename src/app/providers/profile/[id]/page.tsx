import React, { Suspense } from 'react';

import UserPage from '@/app/(user)/components/user-page';
import { fetchProviderProfile } from '../actions';
import { redirect } from 'next/navigation';
import Loading from '@/components/ui/loading';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AvatarTemplate } from '@/components/ui/avatar';
import FollowButton from '../../components/follow-button';

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { data, loading, error } = await fetchProviderProfile(id);

  if (error) {
    redirect('/error');
  }

  const isFollowing =
    (data.provider.user_provider_followCollection?.edges?.length ?? 0) > 0;

  return (
    <UserPage>
      {loading && <Loading />}
      <Suspense fallback={<Loading />}>
        <Card>
          <CardHeader>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <CardTitle>
                <AvatarTemplate
                  fallbackName={data.provider.user?.full_name ?? ''}
                >
                  {data.provider.user?.full_name}
                </AvatarTemplate>
              </CardTitle>
              <div style={{ textAlign: 'right' }}>
                {data.provider.account_status === 'active' && (
                  <FollowButton
                    provider={data.provider}
                    isFollowing={isFollowing}
                  />
                )}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div>
              <p>
                <strong>Provider Degree:</strong> {data.provider.degree}
              </p>
              <p>
                <strong>Provider Cedula:</strong> {data.provider.cedula}
              </p>
            </div>
            <p>
              <strong>Provider Email:</strong> {data.provider.user?.email}
            </p>
          </CardContent>
        </Card>
      </Suspense>
    </UserPage>
  );
}
