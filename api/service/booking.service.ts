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

bookingRouter.get('/:id', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    let id: number = +request.params.id;

    bookingApplication.getBooking(id)
        .then((booking: Booking) => {
            response.json(booking);
        })
});

bookingRouter.post('/post', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    bookingApplication.createBooking(request.body.booking)
        .then((bookingSaved: Booking) => {
            response.json(bookingSaved);
        })
});

bookingRouter.put('/:id', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    bookingApplication.saveBooking(request.body.booking)
        .then((bookingSaved: Booking) => {
            response.json(bookingSaved);
        });
});

bookingRouter.delete('/:id', (request: Request, response: Response) => {
    let bookingApplication: BookingApplication = new BookingApplication();

    let id: number = +request.params.id;

    bookingApplication.deleteBooking(id)
        .then((result: boolean) => {
            response.json(result);
        });
});