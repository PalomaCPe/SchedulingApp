import { Component } from '@angular/core';
import { Customer } from './customer';
import { CUSTOMERS } from '../shared/mock';

@Component({
    moduleId: module.id,
    selector: 'ava-cus-app',
    templateUrl: 'customer.html'
})

export class CustomerComponent {
    pageName = 'Cliente';
    customers: Customer[] = CUSTOMERS;
}
