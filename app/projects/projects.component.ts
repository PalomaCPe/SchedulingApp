import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';

@Component({
  moduleId: module.id,
  selector: 'ava-pro-app',
  templateUrl: 'projects.html'
})

export class ProjectComponent implements OnInit{
    private model: Projects = {
      projectId: 1,
      name: "Projeto Teste",
      customerId: 1,
      dtInitial: new Date(),
      dtFinal: new Date(),
      wbs: "WBSTESTE",
      sponsorId: 1,
  } as Projects;
    
  constructor() { }

  ngOnInit() {

  }
}  
