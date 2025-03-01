'use client';

import React from 'react';

import { useSidebarRoute } from './sidebar';
import { useLoading } from '@/utils/hooks/use-loading';

type Props = React.PropsWithChildren<{
  href: string;
  className?: string;
}>;

export default function Link({ href, children, className }: Props) {
  const { redirect } = useSidebarRoute();
  const { setLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    e.preventDefault();
    redirect(href);
  };

  return (
    <a
      onClick={handleClick}
      className={className}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {children}
    </a>
  );
}
