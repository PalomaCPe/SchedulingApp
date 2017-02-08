import { Component, Input } from '@angular/core';

import { Customer } from './customer';
import { Professional } from './../professional/professional';
import { CUSTOMERS, PROFESSIONALS } from './../shared/mock';

@Component({
    moduleId: module.id,
    selector: 'ava-cus-app',
    templateUrl: 'customer.html',
    styles: ['tbody > tr { cursor:pointer }']
})

export class CustomerComponent {
    private pageName = 'Clientes';
    private customers: Customer[] = CUSTOMERS
    private sponsors: Professional[] = PROFESSIONALS

    private selectedCustomer: Customer;
    private initialSelectedCustomer: Customer;

    customerDetails(customer: Customer): void {
        this.selectedCustomer = customer;
        this.initialSelectedCustomer = Object.assign({}, customer);
    }
    reset(): void {
        this.selectedCustomer = Object.assign({}, this.initialSelectedCustomer);
    }
    save(): void {
        this.selectedCustomer = null;
        this.initialSelectedCustomer = null;
    }

    getSponsorName(customer: Customer): string {
        let sponsorName: string = "---"
        for (let i = 0; i < this.sponsors.length; i++) {
            if (this.sponsors[i].professionalId == customer.sponsor) sponsorName = this.sponsors[i].name;
        }
        return sponsorName;
    }
}
