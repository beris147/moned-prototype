import React, { Suspense } from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { getAuthUser } from '@/app/(auth)/utils';
import Loading from './ui/loading';

export default async function SitePage({ children }: React.PropsWithChildren) {
  const { user } = await getAuthUser();

  return (
    <div className='[--header-height:calc(theme(spacing.14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar userID={user?.id} />
          <SidebarInset>
            <div className='flex flex-1 flex-col gap-4 p-4'>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
