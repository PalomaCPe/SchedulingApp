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
        this.customers = this._customerService.getCustomers();
        this.sponsors = this._professionalService.getProfessionalList();
    }

    getSponsorName(customer: Customer): string {
        return this.sponsors.find(s => s.professionalId === customer.sponsor).name;
    }
}
