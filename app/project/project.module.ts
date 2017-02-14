import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProjectService } from './project.service';
import { ProjectComponent } from './project.component';
import { ProjectDetailsComponent } from './project-details.component';


@NgModule({
  imports: [BrowserModule, FormsModule, SharedModule, RouterModule.forRoot([
    {path: 'projects', component: ProjectComponent},
    { path: 'projects/details/:id', component: ProjectDetailsComponent }
  ])],
  declarations: [ ProjectComponent, ProjectDetailsComponent ],
  providers:    [ ProjectService ]
})
export class ProjectModule { }