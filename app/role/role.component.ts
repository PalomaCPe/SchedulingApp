import { Component } from '@angular/core';
import { Role } from './role';
import { ROLES } from '../shared/mock';

@Component({
    moduleId: module.id,
    selector: 'ava-rol-app',
    templateUrl: 'role.html'
})

export class RoleComponent{
    pageName = 'Cargos';   
    roles : Role[] = ROLES;
}