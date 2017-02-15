import { MongoClient, Db, FindAndModifyWriteOpResultObject } from 'mongodb';
import { Connection } from './connection';

import { Role } from '../domain/role';
import { ICrud } from './crud.interface';

import { ROLES } from '../../app/shared/mock';

export class RolePersistence implements ICrud<Role>{

    list(): Promise<Role[]>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('role').find({deleted: false}).toArray();
                })
                .then((role: Role[]) => {
                    database.close();
                    return role;
                })
        );

    }

    read(id: number): Promise<Role>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('role').findOne({id: id});
                })
                .then((role: any) => {
                    database.close();
                    return role as Role;
                })
        );
    }

    create(role: Role) : Promise<Role>{
        return null;
    }    

    update(role: Role): Promise<Role>{
        return null;
    }

    delete(id: number): Promise<boolean>{
        return null;
    }
}