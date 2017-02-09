import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BookingComponent } from './booking.component';

import { PercentualFilter } from '../shared/filter/percentual';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';

import { BookingService } from './booking.service';

@NgModule({
    imports: [BrowserModule, SharedModule, FormsModule],
    declarations: [ BookingComponent, PercentualFilter],
    bootstrap: [ BookingComponent ],
    providers: [ BookingService ]   
})

export class BookingModule { }