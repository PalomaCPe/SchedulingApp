import { Router, Response, Request } from 'express';
import { Customer } from '../domain/customer';
import { CustomerApplication } from '../application/customer.application';

export const customerRouter: Router = Router();

customerRouter.get('/list', (request: Request, response: Response) => {
    let customerApplication: CustomerApplication = new CustomerApplication();

    customerApplication.getCustomers()
        .then((result: Customer[]) => {
            response.json(result);
        });
});