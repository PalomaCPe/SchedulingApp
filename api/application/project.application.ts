import { Project } from '../domain/project';
import { ProjectPersistence } from '../persistence/project.persistence';

export class ProjectApplication{
    getProjects(): Promise<Project[]>{
        return new ProjectPersistence().list();
    }
    
    /************************/
    
    getProject(id: number): Promise<Project> {
        return new ProjectPersistence().read(id);
    }
    createProject(project: Project): Promise<Project> {
        return Promise.resolve(project);
    }
    updateProject(id: number): Promise<Project> {
        return Promise.resolve(new Project(id));
    }
    deleteProject(id: number): Promise<Project> {
        return new ProjectPersistence().read(id);
    }
}