import { Router, Response, Request } from 'express';
import { Role } from '../domain/role';
import { RoleApplication } from '../application/role.application';

export const roleRouter: Router = Router();

roleRouter.get('/list', (request: Request, response: Response) => {
    let roleApplication: RoleApplication = new RoleApplication();

    roleApplication.getRoles()
        .then((result: Role[]) => {
            response.json(result);
        });

});

roleRouter.get('/id', (request: Request, response: Response) => {
    let roleApplication: RoleApplication = new RoleApplication();
    let id: number =+ request.params.id;

    roleApplication.getRoles(id)
    .then ((role : Role) =>{
        response.json(role)
    })

});