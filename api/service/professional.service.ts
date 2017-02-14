import { Router, Response, Request } from 'express';
import { Professional } from '../domain/professional';
import { ProfessionalApplication } from '../application/professional.application';

export const professionalRouter: Router = Router();

professionalRouter.get('/list', (request: Request, response: Response) => {
    let professionalApplication: ProfessionalApplication = new ProfessionalApplication();

    professionalApplication.getProfessionals()
    .then((result: Professional[]) => {
        response.json(result);
    });
});

professionalRouter.get('/:id', (request: Request, response: Response) => {
    let professionalApplication: ProfessionalApplication = new ProfessionalApplication();

    let id: number = +request.params.id;

    professionalApplication.getProfessional(id)
    .then((professional: Professional) => {
        response.json(professional);
    })
});

professionalRouter.post('/post', (request: Request, response: Response) => {
    let professionalApplication: ProfessionalApplication = new ProfessionalApplication();

    professionalApplication.createProfessional(request.body.professional)
    .then((professionalSaved: Professional) => {
        response.json(professionalSaved);
    });
});

professionalRouter.put('/id', (request: Request, response: Response) => {
    let professionalApplication: ProfessionalApplication = new ProfessionalApplication();

    professionalApplication.saveProfessional(request.body.professional)
    .then((professionalSaved: Professional) => {
        response.json(professionalSaved);
    });
});

professionalRouter.delete('/:id', (request: Request, response: Response) => {
    let professionalApplication: ProfessionalApplication = new ProfessionalApplication();

    let id: number = +request.params.id;

    professionalApplication.deleteProfessional(id)
    .then((result: boolean) => {
        response.json(result);
    });
});