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

        this._customerService.getCustomerById(this.customer).then((customer: Customer) => { this.customer = customer }).catch((error: Error) => { throw error });
        this._professionalService.getProfessionalList().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
    }

}