'use client';

import React from 'react';

import { format, parseISO } from 'date-fns';
import { Clock, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Appointment } from '../utils/data';

type Props = {
  appointment: Appointment;
};

export default function AppointmentCard({ appointment }: Props) {
  const date = parseISO(appointment.date);

  return (
    <Card>
      <CardHeader className='pb-2'>
        <div className='flex justify-between items-start'>
          <div>
            <CardTitle>{appointment.title}</CardTitle>
            <CardDescription className='mt-1'>
              <span className='flex items-center gap-1'>
                <Clock className='h-3.5 w-3.5' />
                {format(date, 'h:mm a')}
              </span>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className='pb-2'>
        <div className='flex items-center gap-1 text-sm text-muted-foreground'>
          <Users className='h-4 w-4' />
          <span>With: {appointment.with}</span>
        </div>
        <div className='mt-1 text-sm text-muted-foreground'>
          Location: {appointment.location}
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex w-full justify-between'>
          <Button variant='outline' size='sm'>
            Reschedule
          </Button>
          <Button size='sm'>View Details</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
