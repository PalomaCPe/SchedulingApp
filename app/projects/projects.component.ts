import { Component, OnInit } from '@angular/core';
import { Projects } from './projects';
import { PROJECTS } from './mock';


@Component({
  moduleId: module.id,
  selector: 'ava-pro-app',
  templateUrl: 'projects.html'
})

export class ProjectComponent{
  pageName = "Projetos";
  projects: Projects[] = PROJECTS;
}  

