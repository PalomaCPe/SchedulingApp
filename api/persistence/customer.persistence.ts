import { MongoClient, Db, FindAndModifyWriteOpResultObject, Collection } from 'mongodb';

import { Customer } from '../domain/customer';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

import { BOOKINGS } from '../../app/shared/mock';

export class CustomerPersistence implements ICrud<Customer> {

    private database: Db;
    private customerCollection: Collection;

    list(): Promise<Customer[]> {
        try {
            this.openConn();
            return Promise.resolve(this.customerCollection.find({ deleted: false }).toArray()
                .then((customerList: Customer[]) => { return customerList }))
        }
        catch (error) { throw error }
        finally { this.closeConn() }
    }

    read(id: number): Promise<Customer> {
        try {
            this.openConn();
            return Promise.resolve(this.customerCollection.findOne({ id: id, deleted: false })
                .then((customer: Customer) => { return customer }))
        }
        catch (error) { throw error }
        finally { this.closeConn() }
    }

    create(customer: Customer): Promise<Customer> {
        try {
            this.openConn();
            this.customerCollection.insert(JSON.stringify(customer));
            return Promise.resolve(customer);
        }
        catch (error) { throw error }
        finally { this.closeConn() }
    }

    update(customer: Customer): Promise<Customer> {
        try {
            this.openConn();
            this.customerCollection.update({ id: customer.id }, JSON.stringify(customer));
            return Promise.resolve(customer);
        }
        catch (error) { throw error }
        finally { this.closeConn() }
    }

    delete(id: number): Promise<boolean> {
        try {
            this.openConn();
            this.customerCollection.remove({ id: id, deleted: false });
            return Promise.resolve(id ? true : false);
        }
        catch (error) { throw error }
        finally { this.closeConn() }
    }

    openConn() {
        Connection.conn().then((db: Db) => {
            this.database = db
            this.customerCollection = db.collection('customer')
        });
    }
    closeConn() {
        this.database.close();
    }

}