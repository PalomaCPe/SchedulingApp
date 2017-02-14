import { Project } from '../domain/project'
import { ICrud } from './crud.interface'

import { PROJECTS } from '../../app/shared/mock'

export class ProjectPersistence implements ICrud<Project> {

    list(): Promise<Project[]>{
        return Promise.resolve(PROJECTS);
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