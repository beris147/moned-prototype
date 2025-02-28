import { Routes } from '@/utils/routes';
import { User } from '@/utils/types';
import { LucideIcon } from 'lucide-react';

export type NavSecondaryProps = {
  items: {
    title: string;
    route: Routes;
    icon: LucideIcon;
  }[];
  user?: User | undefined;
};
