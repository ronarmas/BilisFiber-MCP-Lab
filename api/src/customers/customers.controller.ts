import { Controller, Get, Query, Param } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}
  @Get('find')
  findCustomer(@Query('search') search: string,){
    return this.customersService.findCustomer(search);

  }
  @Get(':accountNumber/services')
  getCustomerServices(
    @Param('accountNumber') accountNumber: string,
  ) {

    console.log(
      'Getting services for:',
      accountNumber,
    );

    return this.customersService.getCustomerServices(accountNumber,);

  }


  @Get(':accountNumber')
  getCustomerDetails(
    @Param('accountNumber') accountNumber: string,
  ) {

    console.log(
      'Getting customer:',
      accountNumber,
    );

    return this.customersService.getCustomerDetails(
      accountNumber,
    );

  }

}