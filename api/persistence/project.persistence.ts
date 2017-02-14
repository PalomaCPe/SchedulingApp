import { Project } from '../domain/project'
import { ICrud } from './crud.interface'

import { PROJECTS } from '../../app/shared/mock'

export class ProjectPersistence implements ICrud<Project> {

     list(): Promise<Project[]>{
        return Promise.resolve(PROJECTS);
    }

    read(id: number): Promise<Project>{
        return null;
    }

    create(project: Project): Promise<Project>{
        return null;
    }

    update(project: Project): Promise<Project>{
        return null;
    }

    delete(id: number): Promise<boolean>{
        return null;
    }

}