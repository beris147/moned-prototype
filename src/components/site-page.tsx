import React from 'react';

import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarProvider } from '@/components/ui/sidebar';
import { User } from '@/utils/types';

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
          <div className='flex flex-1 flex-col gap-4 p-4'>{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}
