import { Project } from '../domain/project';
import { ProjectPersistence } from '../persistence/project.persistence';

export class ProjectApplication{
    getProjects(): Promise<Project[]>{
        let projectPersistence: ProjectPersistence = new ProjectPersistence();

        return projectPersistence.list();
    }
}