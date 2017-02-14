import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/toPromise';

import { Project } from './project';
import { ProjectService } from './project.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

import { Customer } from '../customer/customer';
import { CustomerService } from '../customer/customer.service';

@Component({
    moduleId: module.id,
    templateUrl: 'project-details.html'
})

export class ProjectDetailsComponent implements OnInit {
    constructor(
        private _router: ActivatedRoute, 
        private _projectService: ProjectService, 
        private _professionalService: ProfessionalService, 
        private _customerService: CustomerService
    ) { }
    
    private selectedProject: Project = new Project();
    private professionals: Professional[] = [];;
    private customers: Customer[] = [];;
    
    ngOnInit() {
        
        this._router.params.subscribe((params: Params) => this.selectedProject.projectId = +params['id']);

        this.selectedProject = this._projectService.getProjectById(this.selectedProject);
        
        /*this._projectService.getProfessionalList().then((p: Professional[]) => { this.professionals = p });
       
        this._projectService.getCustomers().then((c: Customer[]) => { this.customers = c });
        
        this._projectService.getProjectById(this.id).then((project: Project) => {
            this.selectedProject = project;
            this.selectedProject.customer = this.customers.find(c => c.id === project.customerId);
            this.selectedProject.professional = this.professionals.find(p => p.professionalId === project.sponsorId);
        });*/
        
        /*this._projectService.getProfessionalList()
            .then((p: Professional[]) => {
                this.professionals = p;
                return this._projectService.getCustomers();
            })
            .then((c: Customer[]) => {
                this.customers = c;
                return this._projectService.getProjectById(this.id);
            })
            .then((project: Project) => {
                this.selectedProject = project;

                this.selectedProject.customer = this.customers.find(c => c.id === project.customerId);
                this.selectedProject.professional = this.professionals.find(p => p.professionalId === project.sponsorId);
            });*/
       
    }
   /* projectDetails(project: Project) {
        this.selectedProject = project;
        this.selectedProject.professional = this.professionals.find(p => p.professionalId === project.sponsorId); 
        this.selectedProject.customer = this.customers.find(c => c.id === project.customerId);
    }

    getProfessional(project: Project) {
        project.professional = this.professionals.find(p => p.professionalId === project.sponsorId);    
    }

    getCustomer(project: Project) {
        project.customer = this.customers.find(c => c.id === project.customerId);
    }

    backState(){
        this.selectedProject = null;
    }
    */
}