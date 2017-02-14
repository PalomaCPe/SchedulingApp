import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { ProjectService } from './project.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';

@Component({
  moduleId: module.id,
  selector: 'ava-pro-app',
  templateUrl: 'project.html',
})

export class ProjectComponent implements OnInit {

  constructor(
    private _projectService: ProjectService, 
    private _professionalService: ProfessionalService, 
    private _customerService: CustomerService
  ) { }

  projects: Project[];
  professionals: Professional[];
  customers: Customer[];
  selectedProject: Project; 

  ngOnInit(){

    this._professionalService.getProfessionalList()
      .then((p: Professional[]) => {
          this.professionals = p;
          return this._customerService.getCustomers();
      })
      .then((c: Customer[]) => {
          this.customers = c;
          return this._projectService.getListProject();
      })
      .then((p: Project[]) => {
          this.projects = p;
          this.projects.forEach((obj) => {
            obj.professional = this.professionals.find(p => p.professionalId === obj.sponsorId);
            obj.customer = this.customers.find(c => c.id === obj.customerId);
          });
      });

  }
}  