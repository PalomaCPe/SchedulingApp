import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: 'ava-pro-app',
    templateUrl: 'project.html'
})

export class ProjectComponent implements OnInit {
    constructor(private _projectService: ProjectService,
        private _professionalService: ProfessionalService,
        private _customerService: CustomerService) { }

    projects: Project[];
    customers: Customer[];
    professionals: Professional[];

    ngOnInit() {
        this._customerService.getCustomers()
            .then((customers: Customer[]) => {
                this.customers = customers;
                return this._professionalService.getProfessionalList();
            })
            .then((professionals: Professional[]) => {
                this.professionals = professionals;
                return this._projectService.getListProject();
            })
            .then((projects: Project[]) => {
                this.projects = projects;

                this.projects.forEach((obj) => {
                    obj.customer = this.customers.find(p => p.id === obj.customerId);
                    obj.professional = this.professionals.find(p => p.professionalId === obj.sponsorId);
                });
            });
    }
}