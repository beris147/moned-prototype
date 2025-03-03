import React, { Suspense } from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarProvider } from '@/components/ui/sidebar';
import Loading from './ui/loading';
import { User } from '@/utils/types';
import PageLoadingWrapper from './page-loading-wrapper';

type Props = React.PropsWithChildren<{
  user?: User | undefined;
}>;

export default async function SitePage({ children, user }: Props) {
  return (
    <div className='[--header-height:calc(theme(spacing.14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar user={user} />
          <PageLoadingWrapper>
            <div className='flex flex-1 flex-col gap-4 p-4'>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </div>
          </PageLoadingWrapper>
        </div>
      </SidebarProvider>
    </div>
  );
}
