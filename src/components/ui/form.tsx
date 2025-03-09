import React from 'react';

import { cn } from '@/lib/ui/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './card';

type Props = React.PropsWithChildren<{
  onSubmit?: () => void;
  title: string;
  description: string;
}>;

export default function Form({
  children,
  onSubmit,
  title,
  description,
}: Props) {
  return (
    <div className={cn('flex flex-col gap-6')}>
      <Card>
        <CardHeader>
          <CardTitle className='text-1xl'>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit}>
            <div className='flex flex-col gap-6'>{children}</div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
