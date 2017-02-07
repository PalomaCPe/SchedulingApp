import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppProjects}  from './projects.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppProjects ],
  bootstrap:    [ AppProjects ]
})
export class ProjectsModule { }