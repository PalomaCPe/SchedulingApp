import { Component, OnInit, Input } from '@angular/core';

import { Professional } from './professional';
import { Role } from '../role/role'
import { PROFESSIONALS } from '../shared/mock'
import { ROLES } from '../shared/mock'


@Component({
    moduleId: module.id,
    selector: 'ava-pro-app',
    templateUrl: './professional.html'
})
export class ProfessionalComponent {
    professionals: Professional[] = PROFESSIONALS;
    professional: Professional;
    roles: Role[] = ROLES;

    profissionalDetails (professional:Professional) { 
    this.professional = professional;
    for (let role of this.roles){
        if (this.professional.role === role.name) {
            this.professional.roleId = role.id;
            this.professional.role = role.name;
        }
    }
 }
}

