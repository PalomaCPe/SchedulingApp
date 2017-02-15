import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb';

import { Role } from '../domain/role';
import { ICrud } from './crud.interface';
import { Connection } from './connection';

import { ROLES } from '../../app/shared/mock';

export class RolePersistence implements ICrud<Role>{

    list(): Promise<Role[]> {
        let database: Db;
        return Promise.resolve(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('role').find({ deleted: false }).toArray();
                })
                .then((roles: Role[]) => {
                    database.close();
                    return roles;
                }));

    }
    read(id: number): Promise<Role> {
        let database: Db;
        return Promise.resolve<Role>(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('role').findOne({ id: id, deleted: false });
                })
                .then((role: any) => {
                    database.close();
                    return role as Role;
                }));
    }

    create(role: Role): Promise<Role> {
        let database: Db;
        let sequence: number;

        return Promise.resolve<Role>(
            Connection.getNextSequence('roleId')
                .then((retrivedSequence: number) => {
                    sequence = retrivedSequence;
                    return Connection.conn();
                })
                .then((db: Db) => {
                    database = db;
                    return db.collection('role').insertOne({
                        id: sequence,
                        name: role.name,
                        brc: role.brc,
                        description: role.description, 
                        level: +role.level,
                        deleted: false
                    })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        let savedRole: Role = insertResult.ops[0] as Role;
                        return savedRole;
                    }
                    else {
                        return Promise.reject<Role>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }

    update(role: Role): Promise<Role> {
        return null;
    }

    delete(id: number): Promise<boolean> {
        return null;
    }
}