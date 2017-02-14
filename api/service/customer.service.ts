import { Router, Response, Request } from 'express';
import { Customer } from '../domain/customer';
import { CustomerApplication } from '../application/customer.application';

export const customerRouter: Router = Router();

customerRouter.route('/post')
    .post((request: Request, response: Response) => { });


customerRouter.route('/list')
    .get((request: Request, response: Response) => {
        new CustomerApplication().getCustomers()
            .then((result: Customer[]) => {
                response.json(result);
            });
    });

customerRouter.route('/:id')
    .get((request: Request, response: Response) => {
        new CustomerApplication().getCustomer(+request.params.id)
            .then((result: Customer) => {
                response.json(result);
            });
    })
    .put((request: Request, response: Response) => {
        new CustomerApplication().updateCustomer(+request.params.id)
            .then((result: Customer) => {
                response.json(result);
            });
    })
    .delete((request: Request, response: Response) => {
        new CustomerApplication().deleteCustomer(+request.params.id)
            .then((result: boolean) => {
                response.json(result);
            });
    });
