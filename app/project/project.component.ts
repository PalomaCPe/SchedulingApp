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

export class ProjectComponent{
  pageName = "Projetos";
  
  projects: Project[] = PROJECTS;
  professionals: Professional[];
  customers: Customer[];

  selectedProject: Project;
  
  projectDetails(project: Project): void {
    this.selectedProject = project;
   
    this.selectedProject.professional = PROFESSIONALS.find(p => p.professionalId === project.sponsorId);
    this.selectedProject.customer = CUSTOMERS.find(p => p.id === project.customerId);
    
    this.professionals = PROFESSIONALS;
    this.customers = CUSTOMERS;
  }
  
}  

