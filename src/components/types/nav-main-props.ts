import { routes } from '@/utils/routes';
import { LucideIcon } from 'lucide-react';

export type NavMainProps = {
  items: {
    title: string;
    route: routes;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      route: routes;
    }[];
  }[];
};
