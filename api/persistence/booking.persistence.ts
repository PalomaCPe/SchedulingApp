import { MongoClient, Db, FindAndModifyWriteOpResultObject } from 'mongodb';

import { Booking } from '../domain/booking';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

import { BOOKINGS } from '../../app/shared/mock';

export class BookingPersistence implements ICrud<Booking> {
    
    list(): Promise<Booking[]> {
        let database: Db;
        return Promise.resolve(
            Connection.conn()
                .then((db: Db) => {
                    database = db;

                    return db.collection('booking').find().toArray();
                })
                .then((bookings: Booking[]) => {
                    database.close();

                    return bookings;
                })
        );
    }

    read(id: number): Promise<Booking> {
        return null;//Promise.resolve(BOOKINGS.find(b => b.id === id));;
    }

    create(booking: Booking): Promise<Booking> {
        return null;
    }

    update(booking: Booking): Promise<Booking> {
        return null;
    }

    delete(id: number): Promise<boolean> {
        return null;
    }
}