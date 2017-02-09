import { Injectable } from '@angular/core';

import { Role } from './role';

import { ROLES } from '../shared/mock';


@Injectable()
export class RoleService{
        pegarListaCargos(): Role[]{
            return ROLES;
        }

        listarCargos() : number[]{
            return [6, 7, 8, 9, 10, 11, 12];
        }
}