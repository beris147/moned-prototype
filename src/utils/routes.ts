import { User } from './types';

const publicRoutesArray = [
  '/',
  '/login',
  '/signup',
  '/error',
  '/providers',
  '/faqs',
  '/privacy-policy',
  '/terms-of-service',
  '/contact-us',
] as const;
const userRoutesArray = [
  '/home',
  '/chat',
  '/settings',
  '/settings/profile',
  '/settings/billing',
  '/provider/signup',
] as const;
const providerRoutesArray = [
  '/home',
  '/chat',
  '/settings',
  '/settings/profile',
  '/settings/billing',
  '/settings/provider',
] as const;

export type PublicRoutes = (typeof publicRoutesArray)[number];
export type UserRoutes = (typeof userRoutesArray)[number];
export type ProviderRoutes = (typeof providerRoutesArray)[number];

export type Routes = PublicRoutes | UserRoutes | ProviderRoutes;

export function isPublicRoute(item: Routes): item is PublicRoutes {
  return publicRoutesArray.includes(item as PublicRoutes);
}

export function isUserRoute(item: Routes): item is UserRoutes {
  return userRoutesArray.includes(item as UserRoutes);
}

export function isProviderRoute(item: Routes): item is ProviderRoutes {
  return providerRoutesArray.includes(item as ProviderRoutes);
}

export function userHasRouteAccess(
  user: User | undefined,
  route: Routes
): boolean {
  if (!user) {
    return isPublicRoute(route);
  }
  switch (user.userType) {
    case 'non-auth':
      return isPublicRoute(route);
    case 'admin':
    case 'provider':
      return isPublicRoute(route) || isProviderRoute(route);
    case 'user':
      return isPublicRoute(route) || isUserRoute(route);
  }
}
