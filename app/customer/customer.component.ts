import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { Professional } from './../professional/professional';

import { CustomerService } from './customer.service';

@Component({
    moduleId: module.id,
    selector: 'ava-cus-app',
    templateUrl: 'customer.html',
    styles: ['tbody > tr { cursor:pointer }']
})

export class CustomerComponent implements OnInit {

    constructor(private _customerService: CustomerService) { }

    private customers: Customer[];
    private sponsors: Professional[];

    private selectedCustomer: Customer;
    private initialSelectedCustomer: Customer;

    ngOnInit() {
         this.customers = this._customerService.getCustomers();
         this.sponsors = this._customerService.getSponsors();
    }

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
