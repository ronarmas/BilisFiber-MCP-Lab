import { DeviceStatus } from '../enums/device-status.enum';
import { ConnectionStatus } from '../enums/connection-status.enum';

export interface Diagnostic {
  serviceId: string;

  ontStatus: DeviceStatus;
  routerStatus: DeviceStatus;

  connectionStatus: ConnectionStatus;

  opticalSignal: string;
  los: boolean;

  lastSeen: string;
}