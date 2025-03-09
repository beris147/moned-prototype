import { format, parseISO } from 'date-fns';

export type Appointment = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: 'health' | 'work' | 'personal';
  with: string;
};

export type Activity = {
  id: string;
  title: string;
  date: string;
  status: 'urgent' | 'normal' | 'completed';
  type: 'work' | 'personal' | 'education';
};

type Item = Appointment | Activity;

export const isAppointment = (item: Item): item is Appointment => {
  return (item as Appointment).with !== undefined;
};

export const isActivity = (item: Item): item is Activity => {
  return (item as Activity).status !== undefined;
};

export const appointments: Appointment[] = [
  {
    id: 'appointment-1',
    title: "Doctor's Appointment",
    date: '2025-03-09T10:30:00',
    location: 'Medical Center',
    type: 'health',
    with: 'Dr. Smith',
  },
  {
    id: 'appointment-2',
    title: 'Team Meeting',
    date: '2025-03-09T14:00:00',
    location: 'Conference Room B',
    type: 'work',
    with: 'Marketing Team',
  },
  {
    id: 'appointment-3',
    title: 'Dentist Checkup',
    date: '2025-03-10T09:15:00',
    location: 'Dental Clinic',
    type: 'health',
    with: 'Dr. Johnson',
  },
  {
    id: 'appointment-4',
    title: 'Client Presentation',
    date: '2025-03-11T11:00:00',
    location: 'Main Office',
    type: 'work',
    with: 'Acme Corp',
  },
  {
    id: 'appointment-5',
    title: 'Parent-Teacher Conference',
    date: '2025-03-12T16:30:00',
    location: 'Lincoln Elementary',
    type: 'personal',
    with: 'Ms. Williams',
  },
];

export const activities: Activity[] = [
  {
    id: 'activity-1',
    title: 'Submit Quarterly Report',
    date: '2025-03-09T17:00:00',
    status: 'urgent',
    type: 'work',
  },
  {
    id: 'activity-2',
    title: 'Review Project Proposal',
    date: '2025-03-09T23:59:00',
    status: 'normal',
    type: 'work',
  },
  {
    id: 'activity-3',
    title: 'Pay Electricity Bill',
    date: '2025-03-10T23:59:00',
    status: 'normal',
    type: 'personal',
  },
  {
    id: 'activity-4',
    title: 'Complete Online Course Module',
    date: '2025-03-11T23:59:00',
    status: 'normal',
    type: 'education',
  },
  {
    id: 'activity-5',
    title: 'Submit Tax Documents',
    date: '2025-03-12T17:00:00',
    status: 'urgent',
    type: 'personal',
  },
];

export type FeedContentProps = {
  groupedItems: Record<string, Item[]>;
  dateKeys: string[];
};

export const groupItemsByDate = (items: Item[]): FeedContentProps => {
  const groupedItems: Record<string, Item[]> = {};

  items.forEach((item) => {
    const dateKey = format(parseISO(item.date), 'yyyy-MM-dd');
    if (!groupedItems[dateKey]) {
      groupedItems[dateKey] = [];
    }
    groupedItems[dateKey].push(item);
  });

  const dateKeys = Object.keys(groupedItems).sort();

  return {
    groupedItems,
    dateKeys,
  };
};
