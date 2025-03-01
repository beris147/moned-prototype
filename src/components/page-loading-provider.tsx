'use client';

import React, { useState } from 'react';
import { PageLoadingContext } from '@/utils/hooks/use-loading';

export default function PageLoadingProvider({
  children,
}: React.PropsWithChildren) {
  const [loading, setLoading] = useState(false);
  const setValue = (value: boolean) => {
    setLoading(value);
  };

  return (
    <PageLoadingContext.Provider value={{ loading, setLoading: setValue }}>
      {children}
    </PageLoadingContext.Provider>
  );
}
