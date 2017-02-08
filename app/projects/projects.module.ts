import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProjectComponent}  from './projects.component';
import {HeaderComponent}  from '../shared/header/header.component';

@NgModule({
  imports:      [ BrowserModule, HeaderComponent ],
  declarations: [ ProjectComponent ],
  bootstrap:    [ ProjectComponent ]
})
export class ProjectsModule { }