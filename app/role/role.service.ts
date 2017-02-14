import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Role } from './role';

import { ROLES } from '../shared/mock';

const SERVICE_URL: string = 'api/role';


@Injectable()
export class RoleService {

    constructor(private _httpService: Http) {}

    getRoleList(): Promise<Role[]> {
        let url: string = `${SERVICE_URL}/list`;

        return this._httpService.get(url)
        .toPromise()
        .then((response: Response) => {
            return response.json() as Role[];
        })
        .catch(this.errorHandling);
    }

    levelsList(): number[] {
        return [6, 7, 8, 9, 10, 11, 12];
    }

    getRoleById(role: Role) {
        return ROLES.find(r => r.id === role.id);
    }

    errorHandling(error: any) {
        console.log(error)
    }
}