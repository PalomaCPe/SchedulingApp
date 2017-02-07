import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProfessionalComponent } from './professional.component';
import {EmailHider} from '../filters/emailHider'

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ProfessionalComponent, EmailHider],
    bootstrap: [ProfessionalComponent]
})
export class ProfessionalModule { }