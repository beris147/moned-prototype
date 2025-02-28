import { Routes } from '@/utils/routes';
import { User } from '@/utils/types';
import { LucideIcon } from 'lucide-react';

export type NavMainProps = {
  items: {
    title: string;
    route: Routes;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      route: Routes;
    }[];
  }[];
  user?: User | undefined;
};
