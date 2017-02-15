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

                    return db.collection('booking').find({ deleted: false }).toArray();
                })
                .then((bookings: Booking[]) => {
                    database.close();

                    return bookings;
                })
        );
    }

    read(id: number): Promise<Booking> {
        let database: Db;
        return Promise.resolve<Booking>(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('booking').findOne({ id: id, deleted: false });
                })
                .then((booking: any) => {
                    database.close();

                    return booking as Booking;
                }));
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