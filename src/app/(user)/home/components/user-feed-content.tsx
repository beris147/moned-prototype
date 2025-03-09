'use client';

import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import { Calendar } from 'lucide-react';
import { format, parseISO } from 'date-fns';
import AppointmentCard from './appointment-card';
import ActivityCard from './activity-card';
import { FeedContentProps, isAppointment } from '../utils/data';

export default function FeedContent({
  groupedItems,
  dateKeys,
}: FeedContentProps) {
  if (dateKeys.length === 0) {
    return (
      <Card>
        <CardContent className='pt-6 text-center text-muted-foreground'>
          No items to display
        </CardContent>
      </Card>
    );
  }

  return (
    <div className='space-y-8'>
      {dateKeys.map((dateKey) => (
        <div key={dateKey} className='space-y-4'>
          <div className='sticky top-0 z-10 bg-background pt-2 pb-1'>
            <div className='flex items-center gap-2'>
              <Calendar className='h-5 w-5 text-primary' />
              <h2 className='text-xl font-semibold'>
                {format(parseISO(dateKey), 'EEEE, MMMM d, yyyy')}
              </h2>
            </div>
            <div className='mt-1 h-px bg-border' />
          </div>

          <div className='grid gap-4'>
            {groupedItems[dateKey].map((item) => (
              <div key={`${item.id}`}>
                {isAppointment(item) ? (
                  <AppointmentCard appointment={item} />
                ) : (
                  <ActivityCard activity={item} />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
