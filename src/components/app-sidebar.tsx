'use client';

import * as React from 'react';
import {
  Command,
  House,
  MessageCircle,
  Settings2,
  UserSearch,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { ReadonlyUser } from '@/utils/types';
import { NavSecondaryProps } from './types/nav-secondary-props';
import { NavMainProps } from './types/nav-main-props';

type SideBarData = {
  navMain: NavMainProps;
  navSecondary: NavSecondaryProps;
};

const data: SideBarData = {
  navMain: {
    items: [
      {
        title: 'Home',
        route: '/home',
        icon: House,
      },
      {
        title: 'Chat',
        route: '/chat',
        icon: MessageCircle,
      },
      {
        title: 'Providers',
        route: '/providers',
        icon: UserSearch,
      },
      {
        title: 'Settings',
        route: '/settings',
        icon: Settings2,
        // todo is active needs to depend on the current route
        isActive: true,
        items: [
          {
            title: 'Profile',
            route: '/profile',
          },
          {
            title: 'Billing',
            route: '/billing',
          },
        ],
      },
    ],
  },
  navSecondary: {
    items: [],
  },
};

type Props = {
  props?: React.ComponentProps<typeof Sidebar>;
  user?: ReadonlyUser;
};

export function AppSidebar({ user, ...props }: Props) {
  return (
    <Sidebar
      className='top-[--header-height] !h-[calc(100svh-var(--header-height))]'
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <a href='#'>
                <div className='flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground'>
                  <Command className='size-4' />
                </div>
                <div className='grid flex-1 text-left text-sm leading-tight'>
                  <span className='truncate font-semibold'>Mental Health</span>
                  <span className='truncate text-xs'>Moned Technologies</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain.items} />
        <NavSecondary items={data.navSecondary.items} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
