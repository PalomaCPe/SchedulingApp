import { Booking } from '../domain/booking';
import { BookingPersistence } from '../persistence/booking.persistence';

export class BookingApplication {
    constructor(private bookingPersistence: BookingPersistence = new BookingPersistence()) { }

    getBookings(): Promise<Booking[]> {
        return this.bookingPersistence.list();
    }

    getBooking(id: number): Promise<Booking> {
        return this.bookingPersistence.read(id);
    }    

    saveBooking(booking: Booking): Promise<Booking> {
        return this.bookingPersistence.update(booking);
    }

    createBooking(booking: Booking): Promise<Booking> {
        booking.deleted = false;

        return this.bookingPersistence.create(booking);
    }

    deleteBooking(id: number): Promise<boolean> {
        return this.bookingPersistence.delete(id);
    }
}