import 'server-only';

import { FetchType } from '@/utils/types';
import { activities, Activity, Appointment, appointments } from './utils/data';

export async function fetchUserActivities(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _userId: string | undefined | null
): FetchType<{
  activities: Activity[];
}> {
  return {
    data: {
      activities,
    },
    loading: false,
    error: null,
  };
}

export async function fetchUserAppointments(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _userId: string | undefined | null
): FetchType<{
  appointments: Appointment[];
}> {
  return {
    data: {
      appointments,
    },
    loading: false,
    error: null,
  };
}
