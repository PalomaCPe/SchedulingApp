import { Booking } from '../domain/booking';
import { ICrud } from './crud.interface';

import { BOOKINGS } from '../../app/shared/mock';

export class BookingPersistence implements ICrud<Booking> {
    list(): Promise<Booking[]>{
        return Promise.resolve(BOOKINGS);
    }

    read(id: number): Promise<Booking>{
        return null;
    }

    create(booking: Booking): Promise<Booking>{
        return null;
    }

    update(booking: Booking): Promise<Booking>{
        return null;
    }

    delete(id: number): Promise<boolean>{
        return null;
    }
}