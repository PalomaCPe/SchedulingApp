import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

import { ProfessionalComponent } from './professional.component';
import { ProfessionalDetailComponent } from './professional-details.component'

import { EmailHider } from '../shared/filter/EmailHider';
import { SharedModule } from '../shared/shared.module'
import { ProfessionalService } from './professional.service';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule, RouterModule.forRoot([
        {path:'professionals', component: ProfessionalComponent},
        {path:'professionals/detail/:id', component: ProfessionalDetailComponent}
    ])],
    declarations: [ProfessionalComponent, EmailHider],
    providers: [ProfessionalService]
})
export class ProfessionalModule { }