import { Router, Response, Request } from 'express';
import { Customer } from '../domain/customer';
import { CustomerApplication } from '../application/customer.application';

export const customerRouter: Router = Router();


customerRouter.post('/post', (request: Request, response: Response) => { });

customerRouter.get('/:id', (request: Request, response: Response) => {
    new CustomerApplication()
        .getCustomer(+request.params.id)
        .then((result: Customer) => {
            response.json(result);
        });
});

customerRouter.get('/list', (request: Request, response: Response) => {
    new CustomerApplication()
        .getCustomers()
        .then((result: Customer[]) => {
            response.json(result);
        });
});

customerRouter.put('/:id', (request: Request, response: Response) => {
    new CustomerApplication()
        .updateCustomer(+request.params.id)
        .then((result: Customer) => {
            response.json(result);
        });
});

customerRouter.delete('/:id', (request: Request, response: Response) => {
    new CustomerApplication()
        .deleteCustomer(+request.params.id)
        .then((result: boolean) => {
            response.json(result);
        });
});
