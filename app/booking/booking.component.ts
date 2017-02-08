import { Component } from '@angular/core';

import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app',
    templateUrl: 'booking.html'
})

export class BookingComponent {
    pageName = 'Alocação';

    bookings: Booking[] = BOOKINGS;
}