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
    role : Role;    
    
  roleDetails(role : Role){
       this.role = role;
       this.roles.length;
    }
    
    levels = [6, 7, 8, 9, 10, 11, 12];
}

