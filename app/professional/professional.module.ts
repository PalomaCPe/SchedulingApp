import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProfessionalComponent } from './professional.component';
import { EmailHider } from '../shared/filter/EmailHider';
import { SharedModule } from '../shared/shared.module'

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule],
    declarations: [ProfessionalComponent, EmailHider],
    bootstrap: [ProfessionalComponent]
})
export class ProfessionalModule { }