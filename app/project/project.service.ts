import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from '../shared/mock';

import { Professional } from '../professional/professional';
import { PROFESSIONALS } from '../shared/mock';

import { Customer } from '../customer/customer';
import { CUSTOMERS } from '../shared/mock';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

    const projectUrl = '/api/project';
    /*const professionalUrl = '/api/professional';
    const customerUrl = '/api/customer';*/

@Injectable()
export class ProjectService {  

    constructor(private _http: Http) { }

    getListProject(): Promise<Project[]>{
        let url: string = `${projectUrl}/list`;
        return this._http.get(url)
            .toPromise()
            .then(response => response.json().data as Project[])
            .catch(this.handleError);
    }

    getProjectById(id: number): Promise<Project>{
        let url: string = `${projectUrl}/${id}`;
        return this._http.get(url)
            .toPromise()
            .then(response => response.json().data as Project)
            .catch(this.handleError);
    }
   
   /* getProfessionalList(): Promise<Professional[]>{
        return this._http.get(this.professionalUrl)
            .toPromise()
            .then(response => response.json().data as Professional[])
            .catch(this.handleError);
    } 
    
    getCustomers(): Promise<Customer[]>{
        return this._http.get(this.customerUrl)
            .toPromise()
            .then(response => response.json().data as Customer[])
            .catch(this.handleError);
    }
    */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }         
    
}