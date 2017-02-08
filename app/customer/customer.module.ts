import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './../shared/shared.module';
import { CustomerComponent } from './customer.component';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule],
    declarations: [CustomerComponent],
    bootstrap: [CustomerComponent]
})

export class CustomerModule { }