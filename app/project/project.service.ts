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

@Injectable()
export class ProjectService {  

    constructor(private _http: Http) { }

    getListProject(): Promise<Project[]> {
        let url: string = `${projectUrl}/list`;
        
        return this._http.get(url)
            .toPromise()
            .then((response: Response) => {

                return response.json() as Project[];
            })
            .catch(this.handleError);
    }
    getProjectById(id: number): Promise<Project> {
        let url: string = `${projectUrl}/${id}`;
        
        return this._http.get(url)
            .toPromise()
            .then((response: Response) => {

                return response.json() as Project;
            })
            .catch(this.handleError);
    }
     createProject(project: Project) {
        let url: string = `${projectUrl}/post`;

        return this._http.post(url, { project: project })
            .toPromise()
            .then((response: Response) => {
                return response.json() as Project;
            })
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }         
    
}