import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ProfessionalComponent } from './professional.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [ProfessionalComponent],
    bootstrap: [ProfessionalComponent]
})
export class ProfessionalModule { }