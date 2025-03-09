'use client';

import React from 'react';

import { format, parseISO } from 'date-fns';
import { Clock, FileText } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Activity } from '../utils/data';

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  const dueDate = parseISO(activity.date);

  const typeColors = {
    work: 'text-purple-600 dark:text-purple-400',
    personal: 'text-green-600 dark:text-green-400',
    education: 'text-amber-600 dark:text-amber-400',
  };

  return (
    <Card>
      <CardHeader className='pb-2'>
        <div className='flex justify-between items-start'>
          <CardTitle>{activity.title}</CardTitle>
        </div>
        <CardDescription className='mt-1'>
          <span
            className={typeColors[activity.type as keyof typeof typeColors]}
          >
            {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-2'>
        <div className='flex items-center gap-1 text-sm text-muted-foreground'>
          <Clock className='h-4 w-4' />
          <span>Due: {format(dueDate, 'h:mm a')}</span>
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex w-full justify-between'>
          <Button variant='outline' size='sm'>
            <FileText className='mr-2 h-4 w-4' />
            View Details
          </Button>
          <Button size='sm'>Mark Complete</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
