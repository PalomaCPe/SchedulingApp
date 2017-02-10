import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { Professional } from './../professional/professional';

import { CustomerService } from './customer.service';
import { ProfessionalService } from './../professional/professional.service';

@Component({
    moduleId: module.id,
    selector: 'ava-cus-app',
    templateUrl: 'customer.html',
    styles: ['tbody > tr > td > span { cursor:pointer }']
})

export class CustomerComponent implements OnInit {

    constructor(private _customerService: CustomerService, private _professionalService: ProfessionalService) { }

    private customers: Customer[];
    private sponsors: Professional[];
    
    ngOnInit() {
        this._customerService.getCustomers().then((customerList: Customer[]) => this.customers = customerList).catch((error: Error) => { throw error });
        this._professionalService.getProfessionalList().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
    }

    getSponsorName(customer: Customer): string {
        return this.sponsors.find(s => s.professionalId === customer.sponsor).name;
    }
}
