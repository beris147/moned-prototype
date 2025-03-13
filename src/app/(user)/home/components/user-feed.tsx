import React from 'react';

import { parseISO } from 'date-fns';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FeedContent from './user-feed-content';
import { Activity, Appointment, groupItemsByDate } from '../utils/data';
import { fetchUserActivities, fetchUserAppointments } from '../data-fetch';
import { getAuthUser } from '@/app/(auth)/utils';

// Combine and sort all items by date
const mergeAll = (appointments: Appointment[], activities: Activity[]) => {
  return [...appointments, ...activities].sort(
    (a, b) => parseISO(a.date).getTime() - parseISO(b.date).getTime()
  );
};

export default async function UserFeed() {
  const { user } = await getAuthUser();
  const {
    data: { activities },
  } = await fetchUserActivities(user?.id);
  const {
    data: { appointments },
  } = await fetchUserAppointments(user?.id);
  const allItems = mergeAll(appointments, activities);

  return (
    <div className='space-y-6'>
      <Tabs defaultValue='all' className='w-full'>
        <TabsList className='grid w-full grid-cols-3'>
          <TabsTrigger value='all'>All</TabsTrigger>
          <TabsTrigger value='appointment'>Appointments</TabsTrigger>
          <TabsTrigger value='activity'>Activities</TabsTrigger>
        </TabsList>

        <TabsContent value='all' className='mt-6'>
          <FeedContent {...groupItemsByDate(allItems)} />
        </TabsContent>

        <TabsContent value='appointment' className='mt-6'>
          <FeedContent {...groupItemsByDate(appointments)} />
        </TabsContent>

        <TabsContent value='activity' className='mt-6'>
          <FeedContent {...groupItemsByDate(activities)} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
