import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { BookingComponent } from './booking.component';
import { BookingDetailComponent } from './booking-details.component';

import { PercentualFilter } from '../shared/filter/percentual';

import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { BookingService } from './booking.service';

@NgModule({
    imports: [BrowserModule, SharedModule, FormsModule,   
        RouterModule.forRoot([
            { path: 'bookings', component: BookingComponent},
            { path: 'booking/:action/:id', component: BookingDetailComponent}
        ])],
    declarations: [ BookingComponent, PercentualFilter, BookingDetailComponent ],
    providers: [ BookingService ]   
})

export class BookingModule { }