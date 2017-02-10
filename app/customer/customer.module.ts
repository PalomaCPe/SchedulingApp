import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from './../shared/shared.module';
import { CustomerComponent } from './customer.component';
import { CustomerDetailsComponent } from './customer-details.component';

import { CustomerService } from './customer.service';
import { ProfessionalService } from './../professional/professional.service';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule,
        RouterModule.forRoot([
            { path: 'customers', component: CustomerComponent },
            { path: 'customers/details/:id', component: CustomerDetailsComponent },
        ])],
    declarations: [CustomerComponent, CustomerDetailsComponent],
    providers: [CustomerService, ProfessionalService]
})

export class CustomerModule { }