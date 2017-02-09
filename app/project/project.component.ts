import { Component, OnInit } from '@angular/core';

import { Project } from './project';

import { ProjectService } from './project.service';

import { Professional } from '../professional/professional';

import { Customer } from '../customer/customer';

@Component({
  moduleId: module.id,
  selector: 'ava-pro-app',
  templateUrl: 'project.html',
})

export class ProjectComponent implements OnInit {
  
  constructor(private _projectService: ProjectService) {

  }

  projects: Project[];
  selectedProject: Project;

  professionals: Professional[];
  customers: Customer[];
  
  ngOnInit(){
    this.getProjects();
    this.customers = this._projectService.getListCustomer();
    this.professionals = this._projectService.getListProfessional();
  }

  getProjects(): void{
    this._projectService.getListProject().then(projects => this.projects = projects);
    
    this.projects.forEach((item) => {
          this.getProfessional(item);
          this.getCustomer(item);
    });
  }

  projectDetails(project: Project): void {
    this.selectedProject = project;
    this.selectedProject.professional = this.professionals.find(professional => professional.professionalId == project.sponsorId); 
    this.selectedProject.customer = this.customers.find(customer => customer.id === project.customerId);
  }

  getProfessional(project: Project): void {
    project.professional = this.professionals.find(professional => professional.professionalId == project.sponsorId);    
  }

  getCustomer(project: Project): void {
    project.customer = this.customers.find(customer => customer.id == project.customerId);
  }

  backState(){
      this.selectedProject = null;
  }
}  