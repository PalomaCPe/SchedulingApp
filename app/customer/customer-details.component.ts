import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { Professional } from './../professional/professional';

import { CustomerService } from './customer.service';
import { ProfessionalService } from './../professional/professional.service';

@Component({
    moduleId: module.id,
    templateUrl: 'customer-details.html'
})
export class CustomerDetailsComponent implements OnInit {

    private customer: Customer = new Customer();
    private sponsors: Professional[] = [];

    constructor(private _router: ActivatedRoute, private _customerService: CustomerService, private _professionalService: ProfessionalService) { }

    ngOnInit() {
        this._router.params.subscribe((params: Params) => this.customer.id = +params['id']);

        this.customer = this._customerService.getCustomerById(this.customer);
        this.sponsors = this._professionalService.getProfessionalList();
    }

}