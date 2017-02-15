import { MongoClient, Db, FindAndModifyWriteOpResultObject } from 'mongodb';
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
        return Promise.resolve(
            Connection.conn()
            .then((db:Db) => {
                database = db;
                return db.collection('professional').insert(professional);
            })
            .then((professional: any) => {
                database.close();
                return professional
            })
        );
    }

    update(professional: Professional): Promise<Professional>{
        let database: Db;
        return Promise.resolve(
            Connection.conn()
            .then((db: Db) => {
                database = db;
                return db.collection('professional').update(
                    {professionalId: professional.professionalId},
                    professional
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
                    {professionalId: id}, 
                    { 
                        professionalId: id, 
                        deleted: true 
                    }
                );
            })
            .then((professional: any) => {
                database.close();
                return true
            })
        );
    }
}