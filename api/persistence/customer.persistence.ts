import { MongoClient, Db, FindAndModifyWriteOpResultObject, Collection } from 'mongodb';

import { Customer } from '../domain/customer';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

import { BOOKINGS } from '../../app/shared/mock';

export class CustomerPersistence implements ICrud<Customer> {

    private database: Db;
    private customerCollection: Collection;

    list(): Promise<Customer[]> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            let customerList = db.collection('customer').find({ deleted: false }).toArray() as Promise<Customer[]>;
            db.close();
            return customerList;
        }));
    }


    read(id: number): Promise<Customer> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            let customer = db.collection('customer').findOne({ id: id, deleted: false }) as Promise<Customer>
            db.close();
            return customer;
        }));
    }

    create(customer: Customer): Promise<Customer> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            db.collection('customer').insert(JSON.stringify(customer));
            db.close();
            return customer;
        }));
    }

    update(customer: Customer): Promise<Customer> {
         return Promise.resolve(Connection.conn().then((db: Db) => {
            db.collection('customer').update({ id: customer.id }, JSON.stringify(customer));
            db.close();
            return customer;
        }));
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(Connection.conn().then((db: Db) => {
            db.collection('customer').remove({ id: id, deleted: false });
            db.close();
            return Promise.resolve(id ? true : false);
        }));
    }
}