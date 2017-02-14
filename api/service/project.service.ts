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

    projectApplication.getProject(+request.params.id).then((result: Project) => {
        response.json(result);
    });
});

projectRouter.post('/post', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    projectApplication.getProjects().then((result: Project[]) => {
        response.json(result);
    });
});
projectRouter.put('/:id', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    projectApplication.updateProject(+request.params.id).then((result: Project) => {
        response.json(result);
    });
});
projectRouter.delete('/:id', (request: Request, response: Response) => {
    let projectApplication: ProjectApplication = new ProjectApplication();

    projectApplication.deleteProject(+request.params.id).then((result: Project) => {
        response.json(result);
    });
});
