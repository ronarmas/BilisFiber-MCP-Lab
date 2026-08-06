import { Injectable, NotFoundException } from '@nestjs/common';
import {
  customerRecords,
  getCustomerRecord,
} from '../mock-data/customer-records.data';

@Injectable()
export class CustomersService {

  findCustomer(search: string) {

    const keyword = search.toLowerCase();

    const results = customerRecords
      .map(record => record.customer)
      .filter(customer =>
        customer.accountNumber === search ||
        customer.phoneNumber === search ||
        customer.customerName.toLowerCase().includes(keyword),
      );

    if (!results.length) {
      throw new NotFoundException(
        `No customer found matching '${search}'.`,
      );
    }

    return results;
  }

  getCustomerDetails(accountNumber: string) {

    const record = getCustomerRecord(accountNumber);

    if (!record) {
      throw new NotFoundException(
        `Customer with account number '${accountNumber}' not found.`,
      );
    }

    return record.customer;
  }

  getCustomerServices(accountNumber: string) {

    const record = getCustomerRecord(accountNumber);

    if (!record) {
      throw new NotFoundException(
        `Customer with account number '${accountNumber}' not found.`,
      );
    }

    if (!record.services.length) {
      throw new NotFoundException(
        `No services found for account '${accountNumber}'.`,
      );
    }

    return record.services;
  }

  getCustomer(accountNumber: string) {

    return getCustomerRecord(accountNumber)?.customer;

  }

}