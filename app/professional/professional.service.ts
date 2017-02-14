import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http"

import { Professional } from './professional';
import { PROFESSIONALS } from '../shared/mock';

import { Role } from '../role/role'

const SERVICE_URL: string = "/api/professional";

@Injectable ()
export class ProfessionalService{
    constructor(private _httpService: Http){}

    roles: Role[];

    getProfessionalList(): Promise <Professional[]>{
        
        let url: string = '${SERVICE_URL}/list';

        return this._httpService.get(url)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Professional[];
        })
        .catch(this.errorHandling);
    }

    getProfessional(): Promise<Professional> {
        
        let url: string = '${SERVICE_URL}/:id'; 

        return this._httpService.get(url)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Professional;
        })
        .catch(this.errorHandling);

    }

    errorHandling(error: any) {
        console.log(error.message || error);
    }
}