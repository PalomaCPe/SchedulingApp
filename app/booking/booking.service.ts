import { Injectable } from '@angular/core';

import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';

@Injectable()
export class BookingService{

    getBookingList(): Booking[]{
        return BOOKINGS;
    }

    getBooking(id: number): Booking{
        return BOOKINGS.find(b => b.id === id);
    }
}