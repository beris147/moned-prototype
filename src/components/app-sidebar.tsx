'use client';

import * as React from 'react';
import {
  CircleHelp,
  Command,
  House,
  LockKeyhole,
  Mail,
  MessageCircle,
  PenLine,
  ReceiptText,
  Settings2,
  UserSearch,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavSecondary } from '@/components/nav-secondary';
import { NavUserLoggedIn, NavUserLoggedOut } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavSecondaryProps } from './types/nav-secondary-props';
import { NavMainProps } from './types/nav-main-props';
import { User } from '@/utils/types';

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
            route: '/settings/profile',
          },
          {
            title: 'Billing',
            route: '/settings/billing',
          },
          {
            title: 'Provider Info',
            route: '/settings/provider',
          },
        ],
      },
    ],
  },
  navSecondary: {
    items: [
      {
        title: 'FAQs',
        route: '/faqs',
        icon: CircleHelp,
      },
      {
        title: 'Privacy Policy',
        route: '/privacy-policy',
        icon: LockKeyhole,
      },
      {
        title: 'Terms of Service',
        route: '/terms-of-service',
        icon: ReceiptText,
      },
      {
        title: 'Contact Us',
        route: '/contact-us',
        icon: Mail,
      },
      {
        title: 'Provider Registration',
        route: '/provider/signup',
        icon: PenLine,
      },
    ],
  },
};

type Props = {
  props?: React.ComponentProps<typeof Sidebar>;
  user: User | undefined;
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
              {/* Intentionally use <a> here to refresh page */}
              <a href='/'>
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
        <NavMain items={data.navMain.items} user={user} />
        <NavSecondary
          items={data.navSecondary.items}
          user={user}
          className='mt-auto'
        />
      </SidebarContent>
      <SidebarFooter>
        {user === undefined ? (
          <NavUserLoggedOut />
        ) : (
          <React.Suspense fallback={<NavUserLoggedOut />}>
            <NavUserLoggedIn user={user} />
          </React.Suspense>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
