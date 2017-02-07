import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookingComponent } from './booking.component';

import { PercentualFilter } from '../filters/percentual';

@NgModule({
    imports: [BrowserModule],
    declarations: [ BookingComponent, PercentualFilter],
    bootstrap: [ BookingComponent ]
})

export class BookingModule { }