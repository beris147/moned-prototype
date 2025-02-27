import { routes } from '@/utils/routes';
import { LucideIcon } from 'lucide-react';

export type NavSecondaryProps = {
  items: {
    title: string;
    route: routes;
    icon: LucideIcon;
  }[];
};
