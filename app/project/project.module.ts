import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProjectComponent}  from './project.component';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, SharedModule ],
  declarations: [ ProjectComponent ],
  bootstrap:    [ ProjectComponent ]
})
export class ProjectModule { }