import { Outage } from './interfaces/outage.interface';

export const outages: Outage[] = [
  {
    area: 'Bulacan',
    status: 'ACTIVE',
    type: 'Fiber Cut',
    estimatedRestoration: '2:00 PM',
  },
  {
    area: 'Muzon',
    status: 'ACTIVE',
    type: 'Power Interruption',
    estimatedRestoration: '4:00 PM',
  },
  {
    area: 'Caloocan',
    status: 'ACTIVE',
    type: 'Power Interruption',
    estimatedRestoration: '4:00 PM',
  },
  {
    area: 'Quezon City',
    status: 'ACTIVE',
    type: 'Fiber Cut',
    estimatedRestoration: '6:00 AM',
  },
];