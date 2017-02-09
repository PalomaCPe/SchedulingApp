import { Injectable } from '@angular/core';

import { Customer } from './customer';
import { Professional } from '../professional/professional';
import { CUSTOMERS, PROFESSIONALS } from '../shared/mock';


@Injectable()
export class CustomerService {

    getCustomers(): Customer[] {
        return CUSTOMERS;
    }

    getSponsors(): Professional[] {
        return PROFESSIONALS;
    }

}