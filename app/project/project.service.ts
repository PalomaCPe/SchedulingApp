import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from '../shared/mock';

import { Professional } from '../professional/professional';
import { PROFESSIONALS } from '../shared/mock';

import { Customer } from '../customer/customer';
import { CUSTOMERS } from '../shared/mock';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectService {  
    
    private projectUrl = '/api/project';
    private professionalUrl = '/api/professional';
    private customerUrl = '/api/customer';

    constructor(private _http: Http) { }

    /*getListProject(): Promise<Project[]>{
        return Promise.resolve(PROJECTS);
    }

    getProjectById(id: number): Promise<Project>{
        return Promise.resolve(PROJECTS.find(p => p.projectId === id));
    }
   
    getProfessionalList(): Promise<Professional[]>{
        return Promise.resolve(PROFESSIONALS);
    } 
    
    getCustomers(): Promise<Customer[]>{
        return Promise.resolve(CUSTOMERS);
    }     
    */
    getListProject(): Promise<Project[]>{
        return this._http.get(this.projectUrl)
            .toPromise()
            .then(response => response.json().data as Project[])
            .catch(this.handleError);
    }

    getProjectById(id: number): Promise<Project>{
        const url = `${this.projectUrl}/${id}`;
        return this._http.get(url)
            .toPromise()
            .then(response => response.json().data as Project)
            .catch(this.handleError);
    }
   
    getProfessionalList(): Promise<Professional[]>{
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

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }         
    
}