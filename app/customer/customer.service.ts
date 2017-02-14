import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Customer } from './customer';
import { CUSTOMERS } from '../shared/mock';


@Injectable()
export class CustomerService {

    constructor(private http: Http) { }

    getCustomerById(customer: Customer): Promise<Customer> {
        return this.http.get(`/api/customer/${customer.id}`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    getCustomers(): Promise<Customer[]> {
        return this.http.get(`/api/customer/list`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteCustomer(customer: Customer): Promise<boolean> {
        return this.http.delete(`/api/customer/${customer.id}`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error));
    }

    errorHandling(error: any) {
        console.log(error)
    }

}