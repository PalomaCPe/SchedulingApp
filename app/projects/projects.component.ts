import { Component, OnInit } from '@angular/core';
import { Project } from './projects';

import { PROJECTS } from '../shared/mock';


@Component({
  moduleId: module.id,
  selector: 'ava-pro-app',
  templateUrl: 'projects.html'
})

export class ProjectComponent{
  pageName = "Projetos";
  project: Project[] = PROJECTS;

}  

