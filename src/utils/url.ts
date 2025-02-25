type TURLParams = { [key: string]: string };

export const getURL = (): string => {
  let url =
    process?.env?.NEXT_PUBLIC_API_URI ??
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/';
  url = url.startsWith('http') ? url : `https://${url}`;
  url = url.endsWith('/') ? url : `${url}/`;
  return url;
};

export const buildURL = (path: string, params?: TURLParams): string => {
  const url = new URL(getURL());
  url.pathname = url.pathname === '/' ? path : `${url.pathname}/${path}`;
  if (params) {
    for (const key in params) {
      url.searchParams.append(key, params[key]);
    }
  }
  return url.href;
};
