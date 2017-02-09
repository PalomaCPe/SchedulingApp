import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectComponent }  from './project.component';
import { ProjectService }  from './project.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports:      [ BrowserModule, SharedModule ],
  declarations: [ ProjectComponent ],
  //bootstrap:    [ ProjectComponent ],
  providers:    [ ProjectService ]
})
export class ProjectModule { }