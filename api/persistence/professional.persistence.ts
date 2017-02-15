import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult } from 'mongodb';
import { ICrud } from './crud.interface';
import { Professional } from '../domain/professional';
import { Connection } from './connection';

export class ProfessionalPersistence implements ICrud<Professional> {
    
    list(): Promise<Professional[]>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('professional').find({deleted: false}).toArray();
            })
            .then((professionals: Professional[]) => {
                database.close();
                return professionals;
            })
        );
    }

    read(id: number): Promise<Professional>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('professional').findOne({professionalId: id, deleted: false});
            })
            .then ((professional: any) => {
                database.close();
                return professional;
            })
        );
    }

    create(professional: Professional): Promise<Professional>{
        let database: Db;
        let sequence: number;

        return Promise.resolve<Professional>(
            Connection.getNextSequence('professionalId')
            .then((retrieveSequence: number) => {
                sequence = retrieveSequence;
                return Connection.conn();
            })
            .then((db: Db) => {
                return db.collection('professional').insertOne({
                        professionalId: sequence,
                        pid: professional.pid,
                        eid: professional.eid,
                        name: professional.name,
                        roleId: +professional.roleId,
                        email: professional.email,
                        phone: professional.phone,
                        role: null,
                        deleted: professional.deleted
                });
            })
            .then((insertResult: InsertOneWriteOpResult) => {
                if(insertResult.result.ok == 1){
                    let savedProfessional: Professional = insertResult.ops[0] as Professional;
                    return savedProfessional;
                }
                else {
                    return Promise.reject<Professional>(Error("An error ocurred when trying to create a new record"));
                }
            })
        )
    }

    update(professional: Professional): Promise<Professional>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('professional').update(
                    {professionalId: professional.professionalId},
                    {
                        professionalId: professional.professionalId,
                        pid: professional.pid,
                        eid: professional.eid,
                        name: professional.name,
                        roleId: +professional.roleId,
                        email: professional.email,
                        phone: professional.phone,
                        role: null,
                        deleted: professional.deleted
                    }
                );
            })
            .then((professional: any) => {
                database.close();
                return professional;
            })
        )
    }

    delete(id: number): Promise<boolean>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
            .then((db:Db) => {
                database = db;
                return db.collection('professional').update(
                    {"professionalId": id}, 
                    {$set: { "deleted": true }}
                );
            })
            .then((professional: any) => {
                database.close();
                return true
            })
        );
    }
}