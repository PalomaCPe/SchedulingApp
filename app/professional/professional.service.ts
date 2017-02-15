import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { Professional } from './professional';
import { PROFESSIONALS } from '../shared/mock';

import { Role } from '../role/role';

const SERVICE_URL: string = "/api/professional";

@Injectable ()
export class ProfessionalService{
    constructor(private _httpService: Http){}

    roles: Role[];

    getProfessionalList(): Promise <Professional[]>{
        
        let url: string = `${SERVICE_URL}/list`;

        return this._httpService.get(url)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Professional[];
        })
        .catch(this.errorHandling);
    }

    getProfessional(id: number): Promise<Professional> {
        
        let url: string = `${SERVICE_URL}/${id}`; 

        return this._httpService.get(url)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Professional;
        })
        .catch(this.errorHandling);

    }

    saveProfessional(professional: Professional): Promise<Professional>{
        let url: string = `${SERVICE_URL}/post`;
        return this._httpService.post(url, {professional: professional})
        .toPromise()
        .then((response: Response) => {
            return response.json() as Professional;
        })
        .catch(this.errorHandling); 
    }

    editProfessional(professional: Professional): Promise<Professional>{
        let url: string = `${SERVICE_URL}/put`;
        return this._httpService.put(url, {professional: professional})
        .toPromise()
        .then((response: Response) => {
            return response.json() as Professional;
        })
        .catch(this.errorHandling);
    }

    deleteProfessional(id:number): Promise<boolean> {
        let url: string = `${SERVICE_URL}/delete`;
        return this._httpService.delete(url)
        .toPromise()
        .then((response: Response) => {
            return true;
        })
        .catch(this.errorHandling);
    }

    errorHandling(error: any) {
        console.log(error.message || error);
    }
}