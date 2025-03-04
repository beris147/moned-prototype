'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/lib/ui/utils';

const Avatar = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

function getInitials(name: string | undefined | null): string {
  const words = (name ?? 'user').split(' ');
  let initials = '';

  for (const word of words) {
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }
  return initials;
}

type AvatarTemplateProps = React.PropsWithChildren<{
  fallbackName: string;
}>;

const AvatarTemplate = ({ children, fallbackName }: AvatarTemplateProps) => {
  return (
    <div className='flex items-center gap-2 px-1 py-1.5 text-left'>
      <Avatar>
        <AvatarFallback>{getInitials(fallbackName)}</AvatarFallback>
      </Avatar>
      <div className='grid flex-1 text-left leading-tight'>{children}</div>
    </div>
  );
};

export { Avatar, AvatarImage, AvatarFallback, AvatarTemplate };
