import { Router, Response, Request } from 'express';
import { Project } from '../domain/project';
import { ProjectApplication } from '../application/project.application';

export const projectRouter: Router = Router();

projectRouter.get('/list', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    projectApplication.getProjects()
        .then((result: Project[]) => {
            response.json(result);
        });
});

projectRouter.get('/:id', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    let id: number = +request.params.id;

    projectApplication.getProject(id).then((result: Project) => {
        response.json(result);
    });
});

projectRouter.post('/post', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    let id: number = +request.params.id;

    projectApplication.getProjects().then((result: Project[]) => {
        response.json(result);
    });
});
projectRouter.put('/:id', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    let id: number = +request.params.id;

    projectApplication.updateProject(id).then((result: Project) => {
        response.json(result);
    });
});
projectRouter.delete('/:id', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    let id: number = +request.params.id;

    projectApplication.deleteProject(id).then((result: Project) => {
        response.json(result);
    });
});
