'use client';

import * as React from 'react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { NavSecondaryProps } from './types/nav-secondary-props';
import Link from './ui/link';
import { userHasRouteAccess } from '@/utils/routes';

export function NavSecondary({
  items,
  user,
  ...props
}: NavSecondaryProps & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarMenu>
          {items
            .filter((item) => userHasRouteAccess(user, item.route))
            .map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild size='sm'>
                  <Link href={item.route}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
