export type publicRoutes = '/login' | '/signup' | '/error' | '/' | '/providers';
export type privateRoutes =
  | '/profile'
  | '/home'
  | '/billing'
  | '/chat'
  | '/settings';

export type routes = publicRoutes | privateRoutes;
