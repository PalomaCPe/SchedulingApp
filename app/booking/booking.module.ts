import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookingComponent } from './booking.component';

@NgModule({
    imports: [BrowserModule],
    declarations: [ BookingComponent ],
    bootstrap: [ BookingComponent ]
})

export class BookingModule { }