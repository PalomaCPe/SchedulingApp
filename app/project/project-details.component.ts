import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

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
        private _customerService: CustomerService,
        private _location: Location
    ) { }
    
    selectedProject: Project = new Project();
    professionals: Professional[] = [];
    customers: Customer[] = [];
    action: string;
    id: number;
    
    ngOnInit() {

        this._router.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.action = params['action'];
            console.log(this.action);
        });

        this._professionalService.getProfessionalList()
            .then((professionals: Professional[]) => {
                this.professionals = professionals;
                return this._customerService.getCustomers();
            })
            .then((customers: Customer[]) => {
                this.customers = customers;
                return this._projectService.getProjectById(this.id)
            })
            .then((project: Project) => {
                this.selectedProject = project;

                this.selectedProject.customer = this.customers.find(c => c.id === project.customerId);
                this.selectedProject.professional = this.professionals.find(p => p.professionalId === project.sponsorId);

                console.log(this.customers);
            });

    }
    
    projectDetails(project: Project) {
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
    
    onEdit() {
        this.action = 'edit';
    }

    onCreate() {
        this.action = 'new';
    }

    backState() {
        this._location.back();
    }

    onSave() {
        if (this.action === 'new')
            this._projectService.createProject(this.selectedProject)
                .then((projectSave: Project) => {
                    this.selectedProject = projectSave;
                    this.ngOnInit();
                    this.action = 'details';
                });
    }
    
}