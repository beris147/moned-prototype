'use client';

import React from 'react';

import { useSidebar } from './sidebar';
import NextLink from 'next/link';

type Props = React.PropsWithChildren<{
  href: string;
  className?: string;
}>;

export default function Link({ href, children, className }: Props) {
  const { isMobile, setOpenMobile } = useSidebar();
  const handleClick = () => {
    if (isMobile) {
      setOpenMobile(false);
    }
  };

  return (
    <NextLink
      href={href}
      onClick={handleClick}
      className={className}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {children}
    </NextLink>
  );
}
