import { Injectable, NotFoundException } from '@nestjs/common';

//import { diagnostics } from './diagnostics.data';
import { diagnostics } from '../mock-data/customer-records.data';

import { DeviceStatus } from './enums/device-status.enum';
import { ConnectionStatus } from './enums/connection-status.enum';

@Injectable()
export class DiagnosticsService {
  // Get diagnostics by service ID
  getDiagnostics(serviceId: string) {
const diagnostic = diagnostics.find(d => d.serviceId === serviceId,);

    if (!diagnostic) {
      throw new NotFoundException(
        `Diagnostics not found for service ${serviceId}`,
      );
    }

    return diagnostic;
  }


  // Reboot ONT device
  rebootDevice(serviceId: string) {

    const diagnostic = diagnostics.find(
      d => d.serviceId === serviceId,
    );

    if (!diagnostic) {
      throw new NotFoundException(
        `Device not found for service ${serviceId}`,
      );
    }


    // Simulate reboot process
    diagnostic.ontStatus = DeviceStatus.REBOOTING;
    diagnostic.connectionStatus = ConnectionStatus.DOWN;


    return {
      serviceId: diagnostic.serviceId,
      message: 'ONT reboot initiated',
      ontStatus: diagnostic.ontStatus,
      connectionStatus: diagnostic.connectionStatus,
      timestamp: new Date(),
    };
  }


  // Refresh status after reboot
  refreshStatus(serviceId: string) {

    const diagnostic = diagnostics.find(
      d => d.serviceId === serviceId,
    );

    if (!diagnostic) {
      throw new NotFoundException(
        `Device not found for service ${serviceId}`,
      );
    }


     // Simulate ONT recovery
  diagnostic.ontStatus = DeviceStatus.ONLINE;
  diagnostic.routerStatus = DeviceStatus.ONLINE;
  diagnostic.connectionStatus = ConnectionStatus.UP;
  diagnostic.los = false;
  diagnostic.lastSeen = new Date().toISOString();


  return {
    serviceId: diagnostic.serviceId,
    message: 'ONT connection restored',
    ontStatus: diagnostic.ontStatus,
    routerStatus: diagnostic.routerStatus,
    connectionStatus: diagnostic.connectionStatus,
    opticalSignal: diagnostic.opticalSignal,
    los: diagnostic.los,
    lastSeen: diagnostic.lastSeen,
  };
}


  // Get all diagnostics
  getAllDiagnostics() {
    return diagnostics;
  }


  // Check connection status
  checkConnection(serviceId: string) {

    const diagnostic = diagnostics.find(
      d => d.serviceId === serviceId,
    );

    if (!diagnostic) {
      throw new NotFoundException(
        `Service ${serviceId} not found`,
      );
    }


    return {
      serviceId: diagnostic.serviceId,
      connectionStatus: diagnostic.connectionStatus,
      opticalSignal: diagnostic.opticalSignal,
      lastSeen: diagnostic.lastSeen,
      
    };
  }


// Reset diagnostics to original demo state
resetDiagnostics(serviceId: string) {

    const diagnostic = diagnostics.find(
      d => d.serviceId === serviceId,
    );

    if (!diagnostic) {
      throw new NotFoundException(
        `Device not found for service ${serviceId}`,
      );
    }

    switch (serviceId) {

      case 'SRV-100002':
        diagnostic.ontStatus = DeviceStatus.ONLINE;
        diagnostic.routerStatus = DeviceStatus.ONLINE;
        diagnostic.connectionStatus = ConnectionStatus.DOWN;
        diagnostic.opticalSignal = '-19.2 dBm';
        diagnostic.los = false;
        diagnostic.lastSeen = '2026-08-06T09:45:00';
        break;

      default:
        return {
          message: `No reset profile defined for ${serviceId}`,
        };
    }

    return {
      serviceId: diagnostic.serviceId,
      message: 'Diagnostics reset successfully.',
      diagnostics: diagnostic,
    };
  }
}