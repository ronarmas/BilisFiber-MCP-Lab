import { Injectable } from '@nestjs/common';

import { TroubleshootingService } from '../../troubleshooting/troubleshooting.service';
import { DiagnosticsService } from '../../diagnostics/diagnostics.service';
import { CustomersService } from '../../customers/customers.service';
import { OutagesService } from '../../outages/outages.service';
import { TicketsService } from '../../tickets/tickets.service';
import { AppointmentsService } from '../../appointments/appointments.service';

@Injectable()
export class TalkdeskService {


  constructor(

    private readonly troubleshootingService:
      TroubleshootingService,


    private readonly diagnosticsService:
      DiagnosticsService,
      private readonly customersService:
    CustomersService,

  private readonly outagesService:
    OutagesService,

  private readonly ticketsService:
    TicketsService,

  private readonly appointmentsService:
    AppointmentsService,

  ) {}



  // Talkdesk AI diagnostic tool

  diagnose(accountNumber: string) {


    const result =
      this.troubleshootingService.troubleshoot(
        accountNumber,
      );


    return {

      customer:
        result.customer,


      serviceId:
        result.serviceId,


      issue:
        'Internet Connectivity Issue',


      outage:
        result.outage,


      diagnostics:
        result.diagnostics,


      recommendation:
        result.recommendation,


      nextAction:
        this.determineAction(
          result,
        ),

    };

  }



  // Talkdesk AI reboot tool

  reboot(serviceId: string) {

    return this.diagnosticsService.rebootDevice(
      serviceId,
    );

  }



  private determineAction(
    result: any,
  ) {


    if (result.outage) {

      return 'Inform customer of ongoing outage';

    }


    if (
      result.diagnostics.los === true
      ||
      result.diagnostics.ontStatus === 'OFFLINE'
    ) {

      return 'Perform ONT reboot then validate';

    }


    return 'Continue standard troubleshooting';

  }

  //handles
  handleEvent(event: any) {


  switch(event.event) {


    case 'CALL_STARTED':

      return {

        event: event.event,

        sessionId: event.sessionId,

        message:
        'Call received. Preparing customer context.',

      };


    case 'CALL_ENDED':

      return {

        event: event.event,

        sessionId: event.sessionId,

        message:
        'Call completed.',

      };


    default:

      return {

        event: event.event,

        message:
        'Unknown Talkdesk event',

        };

    }

  }

  //
  buildCustomerContext(
  accountNumber: string,
  sessionId: string,
) {


  const customer =
    this.customersService.getCustomer(
      accountNumber,
    );


  const troubleshooting =
    this.troubleshootingService.troubleshoot(
      accountNumber,
    );


  const tickets =
    this.ticketsService.getTicketById(
      accountNumber,
    );


  const appointments =
    this.appointmentsService.getAppointmentsByAccount(
      accountNumber,
    );



  return {


    sessionId,


    customer,


    diagnostics:
      troubleshooting.diagnostics,


    outage:
      troubleshooting.outage,


    tickets,


    appointments,


    recommendedAction:
      troubleshooting.recommendation,


  };


}


}