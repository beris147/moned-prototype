import { createContext, useContext } from 'react';

export type PageLoadingContextType = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

export const PageLoadingContext = createContext<PageLoadingContextType>({
  loading: false,
  setLoading: (value: boolean) => {
    console.warn('No PageLoadingContextProvider found', value);
  },
});

export function useLoading(): PageLoadingContextType {
  return useContext(PageLoadingContext);
}
