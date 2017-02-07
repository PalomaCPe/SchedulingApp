import { NgModule }         from'@angular/core';
import { BrowserModule }    from'@angular/platform-browser';

import { CustomerComponent } from './customer.component';

@NgModule ({
    imports:        [BrowserModule],
    declarations:   [CustomerComponent],
    bootstrap:      [CustomerComponent]
})

export class CustomerModule { }