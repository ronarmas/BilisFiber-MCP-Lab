import {Technician } from '../interfaces/technician.interface';
export const technicians: Technician[] = [
  {
    technicianId: 'TECH-100001',
    name: 'Juan Dela Cruz',
    contactNumber: '09171234567',
    area: 'Bulacan',
    specialization: 'Fiber Installation',
    status: 'AVAILABLE',
    available: true,
  },
  {
    technicianId: 'TECH-100002',
    name: 'Mark Villanueva',
    contactNumber: '09181234567',
    area: 'Metro Manila',
    specialization: 'Network Troubleshooting',
    status: 'BUSY',
    available: false,
  },
  {
    technicianId: 'TECH-100003',
    name: 'Anna Garcia',
    contactNumber: '09191234567',
    area: 'Bulacan',
    specialization: 'ONU Replacement',
    status: 'AVAILABLE',
    available: true,
  },
];