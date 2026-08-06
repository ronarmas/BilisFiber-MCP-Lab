import { Injectable } from '@nestjs/common';
import { outages } from './outages.data';

@Injectable()
export class OutagesService {

  checkOutage(area: string) {

    const outage = outages.find(
      outage =>
        outage.area.toLowerCase() === area.toLowerCase(),
    );

    if (!outage) {
      return {
        outage: false,
        message: 'No active outage detected in your area.',
      };
    }

    return {
      outage: true,
      status: outage.status,
      area: outage.area,
      cause: outage.type,
      estimatedRestoration: outage.estimatedRestoration,
      message: 'Our engineers are already working on restoration.',
    };
  }

}