import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './../shared/shared.module';
import { CustomerComponent } from './customer.component';

import { CustomerService } from './customer.service';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule,
        RouterModule.forRoot([
            { path: 'customers', component: CustomerComponent },
        ])],
    declarations: [CustomerComponent],
    providers: [CustomerService]
})

export class CustomerModule { }