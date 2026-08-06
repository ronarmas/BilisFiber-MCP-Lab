import { Customer } from './interfaces/customer.interface';



export const customers: Customer[] = [
  {
    accountNumber: '100001',
    customerName: 'Juan Dela Cruz',
    email: 'juan.delacruz@email.com',
    phoneNumber: '09171234567',
    address: 'Blk 12 Lot 8, Santol',
    barangay: 'Santol',
    city: 'Balagtas',
    province: 'Bulacan',
    servicePlan: 'Fiber Internet 2000',
    status: 'ACTIVE',
    serviceId: 'SRV-100001',
  },
  {
    accountNumber: '100002',
    customerName: 'Maria Santos',
    email: 'maria.santos@email.com',
    phoneNumber: '09181234567',
    address: '45 Rizal Avenue',
    barangay: 'Bagbaguin',
    city: 'Caloocan',
    province: 'Metro Manila',
    servicePlan: 'Fiber Internet 1500',
    status: 'ACTIVE',
    serviceId: 'SRV-100002',
  },
  {
    accountNumber: '100003',
    customerName: 'Pedro Reyes',
    email: 'pedro.reyes@email.com',
    phoneNumber: '09191234567',
    address: '22 Mindanao Avenue',
    barangay: 'Batasan Hills',
    city: 'Quezon City',
    province: 'Metro Manila',
    servicePlan: 'Fiber Internet 1000',
    status: 'SUSPENDED',
    serviceId: 'SRV-100003',
  },
];
