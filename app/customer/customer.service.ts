import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { CUSTOMERS } from '../shared/mock';


@Injectable()
export class CustomerService {


    getCustomerById(customer: Customer): Promise<Customer> {
        return Promise.resolve(CUSTOMERS.find(c => c.id === customer.id))
    }

    getCustomers(): Promise<Customer[]> {
        return Promise.resolve(CUSTOMERS);
    }

}