import { MongoClient, Db, FindAndModifyWriteOpResultObject } from 'mongodb';
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
        return Promise.resolve(PROJECTS.find(project => project.projectId === id));
    }

    create(project: Project): Promise<Project>{
        return Promise.resolve(new Project());
    }

    update(project: Project): Promise<Project>{
        return Promise.resolve(project);
    }

    delete(id: number): Promise<boolean>{
        return Promise.resolve(id ? true : false);
    }

}