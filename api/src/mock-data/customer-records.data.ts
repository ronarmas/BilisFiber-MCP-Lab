import { DeviceStatus } from '../diagnostics/enums/device-status.enum';
import { ConnectionStatus } from '../diagnostics/enums/connection-status.enum';
import { AppointmentStatus } from '../appointments/enums/appointment-status.enum';
import { TicketPriority } from '../tickets/enums/ticket-priority.enum';
import { TicketStatus } from '../tickets/enums/ticket-status.enum';

export interface Customer {

  accountNumber: string;

  customerName: string;

  email: string;

  phoneNumber: string;

  address: string;

  barangay: string;

  city: string;

  province: string;

  servicePlan: string;

  status: string;

  serviceId: string;

}

export interface CustomerService {

  accountNumber: string;

  serviceId: string;

  serviceName: string;

  category: string;

  speed: string;

  monthlyFee: number;

  status: string;

  barangay: string;

  city: string;

  province: string;

  installationAddress: string;

}

export interface Diagnostic {

  serviceId: string;

  ontStatus: DeviceStatus;

  routerStatus: DeviceStatus;

  connectionStatus: ConnectionStatus;

  opticalSignal: string;

  los: boolean;

  lastSeen: string;

}

export interface Ticket {

  ticketId: string;

  accountNumber: string;

  issue: string;

  priority: TicketPriority;

  status: TicketStatus;

  createdAt: string;

}

export interface Appointment {

  appointmentId: string;

  ticketId: string;

  accountNumber: string;

  technician: string;

  visitDate: string;

  timeSlot: string;

  purpose: string;

  status: AppointmentStatus;

}

export interface CustomerRecord {

  accountNumber: string;

  customer: Customer;

  services: CustomerService[];

  diagnostics: Diagnostic;

  tickets: Ticket[];

  appointments: Appointment[];

}

export const customerRecords: CustomerRecord[] = [

  {
    accountNumber: '100001',

    customer: {
      accountNumber: '100001',
      customerName: 'Juan Dela Cruz',
      email: 'juan.delacruz@email.com',
      phoneNumber: '09171234567',
      address: 'Blk 12 Lot 8',
      barangay: 'Santol',
      city: 'Balagtas',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 2000',
      status: 'ACTIVE',
      serviceId: 'SRV-100001',
    },

    services: [
      {
        accountNumber: '100001',
        serviceId: 'SRV-100001',
        serviceName: 'Fiber Internet 2000',
        category: 'Internet',
        speed: '2000 Mbps',
        monthlyFee: 2499,
        status: 'ACTIVE',
        barangay: 'Santol',
        city: 'Balagtas',
        province: 'Bulacan',
        installationAddress:
          'Blk 12 Lot 8, Santol, Balagtas, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100001',
      ontStatus: DeviceStatus.ONLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.UP,
      opticalSignal: '-18 dBm',
      los: false,
      lastSeen: '2026-08-06T09:30:00',
    },

    tickets: [
      {
        ticketId: 'INC-100001',
        accountNumber: '100001',
        issue: 'No Internet Connection',
        priority: TicketPriority.HIGH,
        status: TicketStatus.OPEN,
        createdAt: '2026-08-06T10:00:00',
      },
    ],

    appointments: [
      {
        appointmentId: 'APT-100001',
        ticketId: 'INC-100001',
        accountNumber: '100001',
        technician: 'Juan Dela Cruz',
        visitDate: '2026-08-08',
        timeSlot: '08:00 AM - 10:00 AM',
        purpose: 'Fiber Line Repair',
        status: AppointmentStatus.SCHEDULED,
      },
    ],
  },
    {
    accountNumber: '100002',

    customer: {
      accountNumber: '100002',
      customerName: 'Maria Santos',
      email: 'maria.santos@email.com',
      phoneNumber: '09181234567',
      address: 'Blk 20 Lot 5',
      barangay: 'Tabang',
      city: 'Plaridel',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 100 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100002',
    },

    services: [
      {
        accountNumber: '100002',
        serviceId: 'SRV-100002',
        serviceName: 'Fiber Internet 100 Mbps',
        category: 'Internet',
        speed: '100 Mbps',
        monthlyFee: 1499,
        status: 'ACTIVE',
        barangay: 'Tabang',
        city: 'Plaridel',
        province: 'Bulacan',
        installationAddress:
          'Blk 20 Lot 5, Tabang, Plaridel, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100002',
      ontStatus: DeviceStatus.ONLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.DOWN,
      opticalSignal: '-19.2 dBm',
      los: false,
      lastSeen: '2026-08-06T09:45:00',
    },

    tickets: [
      {
        ticketId: 'INC-100002',
        accountNumber: '100002',
        issue: 'Intermittent Internet Connection',
        priority: TicketPriority.MEDIUM,
        status: TicketStatus.RESOLVED,
        createdAt: '2026-08-06T09:15:00',
      },
    ],

    appointments: [],
  },
    {
    accountNumber: '100003',

    customer: {
      accountNumber: '100003',
      customerName: 'Pedro Reyes',
      email: 'pedro.reyes@email.com',
      phoneNumber: '09191234567',
      address: 'Blk 5 Lot 10',
      barangay: 'Poblacion',
      city: 'Malolos',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 500 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100003',
    },

    services: [
      {
        accountNumber: '100003',
        serviceId: 'SRV-100003',
        serviceName: 'Fiber Internet 500 Mbps',
        category: 'Internet',
        speed: '500 Mbps',
        monthlyFee: 1999,
        status: 'ACTIVE',
        barangay: 'Poblacion',
        city: 'Malolos',
        province: 'Bulacan',
        installationAddress:
          'Blk 5 Lot 10, Poblacion, Malolos, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100003',
      ontStatus: DeviceStatus.OFFLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.DOWN,
      opticalSignal: '-29.8 dBm',
      los: true,
      lastSeen: '2026-08-06T08:15:00',
    },

    tickets: [
      {
        ticketId: 'INC-100003',
        accountNumber: '100003',
        issue: 'LOS Red Light',
        priority: TicketPriority.HIGH,
        status: TicketStatus.OPEN,
        createdAt: '2026-08-06T08:30:00',
      },
    ],

    appointments: [
      {
        appointmentId: 'APT-100003',
        ticketId: 'INC-100003',
        accountNumber: '100003',
        technician: 'Mark Bautista',
        visitDate: '2026-08-09',
        timeSlot: '08:00 AM - 10:00 AM',
        purpose: 'Fiber Line Inspection',
        status: AppointmentStatus.SCHEDULED,
      },
    ],
  },
    {
    accountNumber: '100004',

    customer: {
      accountNumber: '100004',
      customerName: 'Ana Lopez',
      email: 'ana.lopez@email.com',
      phoneNumber: '09172345678',
      address: 'Blk 8 Lot 2',
      barangay: 'Longos',
      city: 'Malolos',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 300 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100004',
    },

    services: [
      {
        accountNumber: '100004',
        serviceId: 'SRV-100004',
        serviceName: 'Fiber Internet 300 Mbps',
        category: 'Internet',
        speed: '300 Mbps',
        monthlyFee: 1699,
        status: 'ACTIVE',
        barangay: 'Longos',
        city: 'Malolos',
        province: 'Bulacan',
        installationAddress:
          'Blk 8 Lot 2, Longos, Malolos, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100004',
      ontStatus: DeviceStatus.ONLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.DOWN,
      opticalSignal: '-27.5 dBm',
      los: false,
      lastSeen: '2026-08-06T10:05:00',
    },

    tickets: [],

    appointments: [],
  },
    {
    accountNumber: '100005',

    customer: {
      accountNumber: '100005',
      customerName: 'Carlos Mendoza',
      email: 'carlos.mendoza@email.com',
      phoneNumber: '09173456789',
      address: 'Blk 18 Lot 6',
      barangay: 'San Jose',
      city: 'Baliwag',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 500 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100005',
    },

    services: [
      {
        accountNumber: '100005',
        serviceId: 'SRV-100005',
        serviceName: 'Fiber Internet 500 Mbps',
        category: 'Internet',
        speed: '500 Mbps',
        monthlyFee: 1999,
        status: 'ACTIVE',
        barangay: 'San Jose',
        city: 'Baliwag',
        province: 'Bulacan',
        installationAddress:
          'Blk 18 Lot 6, San Jose, Baliwag, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100005',
      ontStatus: DeviceStatus.OFFLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.DOWN,
      opticalSignal: '-31.2 dBm',
      los: true,
      lastSeen: '2026-08-06T11:20:00',
    },

    tickets: [
      {
        ticketId: 'INC-100005',
        accountNumber: '100005',
        issue: 'Fiber LOS - Field Technician Required',
        priority: TicketPriority.HIGH,
        status: TicketStatus.OPEN,
        createdAt: '2026-08-06T11:30:00',
      },
    ],

    appointments: [],
  },
    {
    accountNumber: '100006',

    customer: {
      accountNumber: '100006',
      customerName: 'Ramon Cruz',
      email: 'ramon.cruz@email.com',
      phoneNumber: '09174567890',
      address: 'Blk 12 Lot 7',
      barangay: 'Tikay',
      city: 'Malolos',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 300 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100006',
    },

    services: [
      {
        accountNumber: '100006',
        serviceId: 'SRV-100006',
        serviceName: 'Fiber Internet 300 Mbps',
        category: 'Internet',
        speed: '300 Mbps',
        monthlyFee: 1699,
        status: 'ACTIVE',
        barangay: 'Tikay',
        city: 'Malolos',
        province: 'Bulacan',
        installationAddress:
          'Blk 12 Lot 7, Tikay, Malolos, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100006',
      ontStatus: DeviceStatus.OFFLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.DOWN,
      opticalSignal: '-30.1 dBm',
      los: true,
      lastSeen: '2026-08-06T08:10:00',
    },

    tickets: [
      {
        ticketId: 'INC-100006',
        accountNumber: '100006',
        issue: 'Fiber Line Fault',
        priority: TicketPriority.HIGH,
        status: TicketStatus.OPEN,
        createdAt: '2026-08-06T08:15:00',
      },
    ],

    appointments: [
      {
        appointmentId: 'APT-100006',
        ticketId: 'INC-100006',
        accountNumber: '100006',
        technician: 'Michael Cruz',
        visitDate: '2026-08-11',
        timeSlot: '10:00 AM - 12:00 PM',
        purpose: 'Fiber Line Repair',
        status: AppointmentStatus.SCHEDULED,
      },
    ],
  },
    {
    accountNumber: '100007',

    customer: {
      accountNumber: '100007',
      customerName: 'Jennifer Flores',
      email: 'jennifer.flores@email.com',
      phoneNumber: '09175678901',
      address: 'Blk 3 Lot 14',
      barangay: 'Santo Rosario',
      city: 'Malolos',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 600 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100007',
    },

    services: [
      {
        accountNumber: '100007',
        serviceId: 'SRV-100007',
        serviceName: 'Fiber Internet 600 Mbps',
        category: 'Internet',
        speed: '600 Mbps',
        monthlyFee: 2299,
        status: 'ACTIVE',
        barangay: 'Santo Rosario',
        city: 'Malolos',
        province: 'Bulacan',
        installationAddress:
          'Blk 3 Lot 14, Santo Rosario, Malolos, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100007',
      ontStatus: DeviceStatus.OFFLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.DOWN,
      opticalSignal: '-32.4 dBm',
      los: true,
      lastSeen: '2026-08-06T09:05:00',
    },

    tickets: [
      {
        ticketId: 'INC-100007',
        accountNumber: '100007',
        issue: 'Fiber Cable Damage',
        priority: TicketPriority.HIGH,
        status: TicketStatus.OPEN,
        createdAt: '2026-08-06T09:10:00',
      },
    ],

    appointments: [
      {
        appointmentId: 'APT-100007',
        ticketId: 'INC-100007',
        accountNumber: '100007',
        technician: 'Joseph Ramos',
        visitDate: '2026-08-12',
        timeSlot: '01:00 PM - 03:00 PM',
        purpose: 'Fiber Cable Replacement',
        status: AppointmentStatus.PENDING,
      },
    ],
  },
    {
    accountNumber: '100008',

    customer: {
      accountNumber: '100008',
      customerName: 'Michael Ramos',
      email: 'michael.ramos@email.com',
      phoneNumber: '09176789012',
      address: 'Blk 7 Lot 9',
      barangay: 'Guinhawa',
      city: 'Malolos',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 200 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100008',
    },

    services: [
      {
        accountNumber: '100008',
        serviceId: 'SRV-100008',
        serviceName: 'Fiber Internet 200 Mbps',
        category: 'Internet',
        speed: '200 Mbps',
        monthlyFee: 1599,
        status: 'ACTIVE',
        barangay: 'Guinhawa',
        city: 'Malolos',
        province: 'Bulacan',
        installationAddress:
          'Blk 7 Lot 9, Guinhawa, Malolos, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100008',
      ontStatus: DeviceStatus.ONLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.UP,
      opticalSignal: '-17.5 dBm',
      los: false,
      lastSeen: '2026-08-06T10:45:00',
    },

    tickets: [],

    appointments: [],
  },
    {
    accountNumber: '100009',

    customer: {
      accountNumber: '100009',
      customerName: 'Sarah Bautista',
      email: 'sarah.bautista@email.com',
      phoneNumber: '09177890123',
      address: 'Blk 15 Lot 3',
      barangay: 'Sapang Palay',
      city: 'San Jose Del Monte',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 1000 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100009',
    },

    services: [
      {
        accountNumber: '100009',
        serviceId: 'SRV-100009',
        serviceName: 'Fiber Internet 1000 Mbps',
        category: 'Internet',
        speed: '1000 Mbps',
        monthlyFee: 2499,
        status: 'ACTIVE',
        barangay: 'Sapang Palay',
        city: 'San Jose Del Monte',
        province: 'Bulacan',
        installationAddress:
          'Blk 15 Lot 3, Sapang Palay, San Jose Del Monte, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100009',
      ontStatus: DeviceStatus.ONLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.UP,
      opticalSignal: '-18.1 dBm',
      los: false,
      lastSeen: '2026-08-06T11:30:00',
    },

    tickets: [],

    appointments: [],
  },
    {
    accountNumber: '100010',

    customer: {
      accountNumber: '100010',
      customerName: 'Mark Villanueva',
      email: 'mark.villanueva@email.com',
      phoneNumber: '09178901234',
      address: 'Blk 9 Lot 21',
      barangay: 'Sto. Cristo',
      city: 'Malolos',
      province: 'Bulacan',
      servicePlan: 'Fiber Internet 600 Mbps',
      status: 'ACTIVE',
      serviceId: 'SRV-100010',
    },

    services: [
      {
        accountNumber: '100010',
        serviceId: 'SRV-100010',
        serviceName: 'Fiber Internet 600 Mbps',
        category: 'Internet',
        speed: '600 Mbps',
        monthlyFee: 2299,
        status: 'ACTIVE',
        barangay: 'Sto. Cristo',
        city: 'Malolos',
        province: 'Bulacan',
        installationAddress:
          'Blk 9 Lot 21, Sto. Cristo, Malolos, Bulacan',
      },
    ],

    diagnostics: {
      serviceId: 'SRV-100010',
      ontStatus: DeviceStatus.OFFLINE,
      routerStatus: DeviceStatus.ONLINE,
      connectionStatus: ConnectionStatus.DOWN,
      opticalSignal: '-33.8 dBm',
      los: true,
      lastSeen: '2026-08-06T12:15:00',
    },

    tickets: [],

    appointments: [],
  },


];

export function getCustomerRecord(accountNumber: string): CustomerRecord | undefined {
  return customerRecords.find(
    record => record.accountNumber === accountNumber,
  );
}

export function getCustomerByServiceId(serviceId: string): CustomerRecord | undefined {
  return customerRecords.find(record =>
    record.services.some(service => service.serviceId === serviceId,),
  );
}
export const appointments = customerRecords.flatMap(
  customer => customer.appointments,
);

export const diagnostics = customerRecords.map(
  customer => customer.diagnostics,
);

export const tickets = customerRecords.flatMap(
  record => record.tickets,
);