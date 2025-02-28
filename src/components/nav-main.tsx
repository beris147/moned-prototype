'use client';

import React from 'react';

import { ChevronRight } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebarRoute,
} from '@/components/ui/sidebar';
import { NavMainProps } from './types/nav-main-props';
import { userHasRouteAccess } from '@/utils/routes';

export function NavMain({ items, user }: NavMainProps) {
  const { redirect } = useSidebarRoute();
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items
          .filter((item) => userHasRouteAccess(user, item.route))
          .map((item) => (
            <Collapsible key={item.title} asChild defaultOpen={item.isActive}>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip={item.title}>
                  <a href='#' onClick={() => redirect(item.route)}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuAction className='data-[state=open]:rotate-90'>
                        <ChevronRight />
                        <span className='sr-only'>Toggle</span>
                      </SidebarMenuAction>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items
                          ?.filter((subItem) =>
                            userHasRouteAccess(user, subItem.route)
                          )
                          .map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                              <SidebarMenuSubButton asChild>
                                <a
                                  href='#'
                                  onClick={() => redirect(subItem.route)}
                                >
                                  <span>{subItem.title}</span>
                                </a>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </>
                ) : null}
              </SidebarMenuItem>
            </Collapsible>
          ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
