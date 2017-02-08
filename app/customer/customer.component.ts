import { Component } from '@angular/core';
import { ICustomer } from './customer.interface';
import { CUSTOMER_MOCK } from './mock';

@Component({
    moduleId: module.id,
    selector: 'ava-cus-app',
    templateUrl: 'customer.html'
})

export class CustomerComponent {
    pageName = 'Customer';
    customers: ICustomer[] = CUSTOMER_MOCK;
}
