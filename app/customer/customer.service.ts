import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { CUSTOMERS } from '../shared/mock';


@Injectable()
export class CustomerService {


    getCustomerById(customer: Customer): Customer {
        return CUSTOMERS.find(c => c.id === customer.id);
    }

    getCustomers(): Customer[] {
        return CUSTOMERS;
    }

}