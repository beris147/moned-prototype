import React from 'react';

import './globals.css';

import type { Metadata } from 'next';
import { ApolloWrapper } from '@/lib/apollo/wrapper';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ApolloWrapper>{children}</ApolloWrapper>
        <SpeedInsights />
      </body>
    </html>
  );
}
