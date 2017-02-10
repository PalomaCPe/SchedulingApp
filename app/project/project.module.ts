import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProjectComponent }  from './project.component';
import { ProjectService }  from './project.service';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports:      [ BrowserModule, SharedModule, FormsModule, RouterModule.forRoot([
    {path: 'projects', component: ProjectComponent}
  ])],
  declarations: [ ProjectComponent ],
  providers:    [ ProjectService ]
})
export class ProjectModule { }