import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from './customer';
import { Professional } from './../professional/professional';

import { CustomerService } from './customer.service';
import { ProfessionalService } from './../professional/professional.service';

@Component({
    moduleId: module.id,
    templateUrl: 'customer-details.html'
})
export class CustomerDetailsComponent implements OnInit {

    public action: string;

    private customer: Customer = new Customer();
    private sponsors: Professional[] = [];

    constructor(
        private _route: ActivatedRoute,
        private _customerService: CustomerService,
        private _professionalService: ProfessionalService,
        private _router: Router,
        private _location: Location
    ) { }

    ngOnInit() {

        this._route.params.subscribe((params: Params) => {
            this.customer.id = +params['id'];
            this.action = params['action'];
        });

        this._customerService.getCustomerById(this.customer).then((customer: Customer) => { this.customer = customer }).catch((error: Error) => { throw error });
        this._professionalService.getProfessionalList().then((sponsorsList: Professional[]) => this.sponsors = sponsorsList).catch((error: Error) => { throw error });
    }
    onCreate() {
        this.action = "new"
        this.customer = Object.assign({}, new Customer());
    }
    onEdit() {
        this.action = "edit"
    }

    save() {
        if (this.action === "edit") this._customerService.updateCustomer(this.customer).then(() => { this._router.navigate(['/customers']) })
        else if (this.action === "new") this._customerService.insertCustomer(this.customer).then(() => { this._router.navigate(['/customers']) })
        else console.log("Action Invalid!!");
    }

    delete() {
        this._customerService.deleteCustomer(this.customer).then(() => { this._router.navigate(['/customers']) })
    }

    goBack() {
        this._location.back();
    }

}