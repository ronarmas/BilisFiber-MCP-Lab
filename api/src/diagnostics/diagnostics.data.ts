import { Diagnostic } from './interfaces/diagnostic.interface';
import { DeviceStatus } from './enums/device-status.enum';
import { ConnectionStatus } from './enums/connection-status.enum';

export const diagnostics: Diagnostic[] = [

  {
    serviceId: 'SRV-100001',
    ontStatus: DeviceStatus.OFFLINE,
    routerStatus: DeviceStatus.ONLINE,
    connectionStatus: ConnectionStatus.DOWN,
    opticalSignal: '-28.5 dBm',
    los: true,
    lastSeen: '2026-08-03T16:30:00',
  },

  {
    serviceId: 'SRV-100002',
    ontStatus: DeviceStatus.ONLINE,
    routerStatus: DeviceStatus.ONLINE,
    connectionStatus: ConnectionStatus.UP,
    opticalSignal: '-18.2 dBm',
    los: false,
    lastSeen: '2026-08-03T16:55:00',
  },

];

