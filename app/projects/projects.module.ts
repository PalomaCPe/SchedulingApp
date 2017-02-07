import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ProjectComponent}  from './projects.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ ProjectComponent ],
  bootstrap:    [ ProjectComponent ]
})
export class ProjectsModule { }