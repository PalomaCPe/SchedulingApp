import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb';

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
                    return db.collection('booking').findOne({ id: id, deleted: false })
                        .then((result: Booking) => { return result; });
                })
                .then((booking: Booking) => {
                    database.close();

                    return booking as Booking;
                }));
    }

    create(booking: Booking): Promise<Booking> {
        let database: Db;
        let sequence: number;

        return Promise.resolve<Booking>(
            Connection.getNextSequence('bookingId')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.conn();
                })
                .then((db: Db) => {
                    database = db;

                    return db.collection('booking').insertOne({
                        id: sequence,
                        startDate: booking.startDate,
                        endDate: booking.endDate,
                        percentual: booking.percentual,
                        projectId: +booking.projectId,
                        professionalId: +booking.professionalId,
                        project: null,
                        professional: null,
                        deleted: booking.deleted
                    })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        let savedBooking: Booking = insertResult.ops[0] as Booking;

                        return savedBooking;
                    }
                    else {
                        return Promise.reject<Booking>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }

    update(booking: Booking): Promise<Booking> {
        let database: Db;

        return Promise.resolve<Booking>(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('booking').findOneAndUpdate({ bookingID: booking.id }, {
                        bookingID: booking.id,
                        projectID: +booking.projectId,
                        pid: +booking.professionalId,
                        initialDate: booking.startDate,
                        endDate: booking.endDate,
                        bookingPercentual: booking.percentual,
                        deleted: booking.deleted
                    }, { returnOriginal: false });
                })
                .then((updateResult: FindAndModifyWriteOpResultObject) => {
                    database.close();

                    if (updateResult.ok == 1)
                        return updateResult.value;
                    else
                        return Error("An error ocurred while triyng to update a record");
                }));
    }

    delete(id: number): Promise<boolean> {
        let database: Db;
        return Connection.conn()
            .then((db: Db) => {
                database = db;

                return db.collection('booking').findOneAndUpdate(
                    { bookingID: id },
                    { $set: { 'deleted': true } });
            })
    }
}