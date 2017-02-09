import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from '../shared/mock';

import { Professional } from '../professional/professional';
import { PROFESSIONALS } from '../shared/mock';

import { Customer } from '../customer/customer';
import { CUSTOMERS } from '../shared/mock';

@Component({
  moduleId: module.id,
  selector: 'ava-pro-app',
  templateUrl: 'project.html'
})

export class ProjectComponent implements OnInit {
  
  pageName = "Projetos";

  projects: Project[] = PROJECTS;
  professionals: Professional[];
  customers: Customer[];

  selectedProject: Project;

  ngOnInit(){
    this.customers = CUSTOMERS;
    this.professionals = PROFESSIONALS;

    this.getProjects();
  }

  getProjects() {
    this.projects.forEach((item) => {
        this.getProfessional(item);
        this.getCustomer(item);
    });
  }

  projectDetails(project: Project): void {
    this.selectedProject = project;
    this.selectedProject.professional = PROFESSIONALS.find(p => p.professionalId === project.sponsorId);
    this.selectedProject.customer = CUSTOMERS.find(p => p.id === project.customerId);
  }
  
  getProfessional(project: Project): void {
    project.professional = this.professionals.find(professional => professional.pid == project.sponsorId);    
  }

  getCustomer(project: Project): void {
    project.customer = this.customers.find(customer => customer.id == project.customerId);
  }

}  