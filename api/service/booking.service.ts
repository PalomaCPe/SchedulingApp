import { Router, Response, Request } from 'express';
import { Booking } from '../domain/booking';
import { BookingApplication } from '../application/booking.application';

export const bookingRouter: Router = Router();

bookingRouter.get('/list', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    bookingApplication.getBookings()
        .then((result: Booking[]) => {
            response.json(result);
        });
});