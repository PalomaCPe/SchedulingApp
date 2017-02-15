import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Customer } from './customer'


@Injectable()
export class CustomerService {

    private url: string = '/api/customer'

    constructor(private http: Http) { }

    insertCustomer(customer: Customer): Promise<Customer> {
        return this.http.post(`${this.url}/post`, JSON.stringify(customer)).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    getCustomerById(customer: Customer): Promise<Customer> {
        return this.http.get(`${this.url}/${customer.id}`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    getCustomers(): Promise<Customer[]> {
        return this.http.get(`${this.url}/list`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    updateCustomer(customer: Customer): Promise<Customer> {
        return this.http.put(`${this.url}/${customer.id}`, JSON.stringify(customer)).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error))
    }

    deleteCustomer(customer: Customer): Promise<boolean> {
        return this.http.delete(`${this.url}/${customer.id}`).toPromise()
            .then((res: Response) => res.json().data || res.json())
            .catch((error: Error) => this.errorHandling(error));
    }

    errorHandling(error: any) {
        console.log(error)
    }

}