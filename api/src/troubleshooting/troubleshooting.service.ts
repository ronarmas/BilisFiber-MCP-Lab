import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomersService } from '../customers/customers.service';
import { OutagesService } from '../outages/outages.service';
import { DiagnosticsService } from '../diagnostics/diagnostics.service';


@Injectable()
export class TroubleshootingService {

  constructor(

    private readonly customersService: CustomersService,

    private readonly outagesService: OutagesService,

    private readonly diagnosticsService: DiagnosticsService,

  ) {}


  troubleshoot(accountNumber: string) {


    // 1. Find customer
    const customer =
      this.customersService.getCustomer(accountNumber);


    if (!customer) {
      throw new NotFoundException(
        `Customer ${accountNumber} not found`,
      );
    }


    // 2. Check outage
    const outage =
      this.outagesService.checkOutage(
        customer.city,
      );


    // 3. Run diagnostics
    const diagnostics =
      this.diagnosticsService.getDiagnostics(
        customer.serviceId,
      );


    // 4. Generate recommendation

    let recommendation = 'Service is normal';


    if (outage) {

      recommendation =
        'Known outage detected. Advise customer to wait for restoration.';

    }
    else if (
      diagnostics.ontStatus === 'OFFLINE'
      ||
      diagnostics.los === true
    ) {

      recommendation =
        'Possible fiber issue detected. Schedule technician visit.';

    }


    return {

      customer: {
        accountNumber: customer.accountNumber,
        name: customer.customerName,
      },


      serviceId:
        customer.serviceId,


      outage,


      diagnostics,


      recommendation,

    };

  }

}