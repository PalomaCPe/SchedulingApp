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
    this.projects = this._projectService.getListProject();
    this.customers = this._projectService.getListCustomer();
    this.professionals = this._projectService.getListProfessional();

    this.getProjects();
  }
 
  getProjects() {
    this.projects.forEach((item) => {
        this.getProfessional(item);
        this.getCustomer(item);
    });
  }
  
  projectDetails(project: Project) {
    this.selectedProject = project;
    this.selectedProject.professional = this.professionals.find(p => p.professionalId == project.sponsorId); 
    this.selectedProject.customer = this.customers.find(c => c.id === project.customerId);
  }

  getProfessional(project: Project) {
    project.professional = this.professionals.find(p => p.professionalId == project.sponsorId);    
  }

  getCustomer(project: Project) {
    project.customer = this.customers.find(c => c.id == project.customerId);
  }

  backState(){
      this.selectedProject = null;
  }
}  