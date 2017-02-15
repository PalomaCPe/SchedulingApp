import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { ProjectComponent } from './project.component';
import { ProjectDetailsComponent } from './project-details.component';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ProjectService } from './project.service';

@NgModule({
    imports: [BrowserModule, SharedModule, FormsModule,   
        RouterModule.forRoot([
            { path: 'projects', component: ProjectComponent},
            { path: 'projects/details/:id', component: ProjectDetailsComponent}
        ])],
    declarations: [ ProjectComponent, ProjectDetailsComponent ],
    providers: [ ProjectService ]   
})

export class ProjectModule { }