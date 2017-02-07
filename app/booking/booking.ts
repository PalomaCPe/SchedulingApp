import { IBooking } from './booking.interface';

export class Booking implements IBooking {
    id: number;
    startDate: Date;
    endDate: Date;
    percentual: number;
    projectId: number;
    professionalId: number;
}