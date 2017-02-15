import { MongoClient, Db, FindAndModifyWriteOpResultObject, InsertOneWriteOpResult} from 'mongodb';
import { Project } from '../domain/project'
import { ICrud } from './crud.interface'

import { PROJECTS } from '../../app/shared/mock'
import { Connection } from './connection'

export class ProjectPersistence implements ICrud<Project> {

    list(): Promise<Project[]>{
        let database: Db;
        return Promise.resolve(
            Connection.conn().then ((db : Db) => {
            database= db;
            return db.collection('project').find({deleted: false}).toArray();
    })
        .then((projects: Project[]) => {
            database.close();
            return projects;
        })
        );
    }

    read(id: number): Promise<Project>{
        let database: Db;
        return Promise.resolve<Project>(
            Connection.conn()
                .then((db: Db) => {
                    database = db;
                    return db.collection('projects').findOne({ id: id, deleted: false });
                })
                .then((project: any) => {
                    database.close();

                    return project as Project;
                }));
    }

    create(project: Project): Promise<Project>{
       
        let database: Db;
        let sequence: number;

        return Promise.resolve<Project>(
            Connection.getNextSequence('projectId')
                .then((retrievedSequence: number) => {
                    sequence = retrievedSequence;
                    return Connection.conn();
                })
                .then((db: Db) => {
                    database = db;

                    return db.collection('project').insertOne({
                        id: sequence,
                        name: project.name,
                        dtInicial: project.dtInitial,
                        dtFinal: project.dtFinal,
                        customerId: +project.customerId,
                        wbs: project.wbs,
                        professionalId: +project.sponsorId,
                        customer: null,
                        professional: null,
                        deleted: project.deleted
                    })
                })
                .then((insertResult: InsertOneWriteOpResult) => {
                    if (insertResult.result.ok == 1) {
                        let savedProject: Project = insertResult.ops[0] as Project;

                        return savedProject;
                    }
                    else {
                        return Promise.reject<Project>(Error("An error ocurred when trying to create a new record"));
                    }
                })
        );
    }

    update(project: Project): Promise<Project>{
        return Promise.resolve(project);
    }

    delete(id: number): Promise<boolean>{
        return Promise.resolve(id ? true : false);
    }

}