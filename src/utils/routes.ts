import { User } from './types';

const publicRoutesArray = [
  '/',
  '/login',
  '/signup',
  '/error',
  '/providers',
] as const;
const userRoutesArray = [
  '/profile',
  '/home',
  '/billing',
  '/chat',
  '/settings',
] as const;

export type PublicRoutes = (typeof publicRoutesArray)[number];
export type UserRoutes = (typeof userRoutesArray)[number];

export type Routes = PublicRoutes | UserRoutes;

export function isPublicRoute(item: Routes): item is PublicRoutes {
  return publicRoutesArray.includes(item as PublicRoutes);
}

export function isUserRoute(item: Routes): item is UserRoutes {
  return userRoutesArray.includes(item as UserRoutes);
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
    case 'user':
      return isPublicRoute(route) || isUserRoute(route);
  }
}
