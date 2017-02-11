import { Booking } from '../domain/booking';
import { BookingPersistence } from '../persistence/booking.persistence';

export class BookingApplication{
    getBookings(): Promise<Booking[]>{
        let bookingPersistence: BookingPersistence = new BookingPersistence();

        return bookingPersistence.list();
    }
}