import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookingComponent } from './booking.component';

import { PercentualFilter } from '../shared/filter/percentual';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [BrowserModule, SharedModule, FormsModule],
    declarations: [ BookingComponent, PercentualFilter],
    bootstrap: [ BookingComponent ]
})

export class BookingModule { }