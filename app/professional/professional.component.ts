import { Component, OnInit, Input } from '@angular/core';

import { Professional } from './professional';
import { ProfessionalService } from './professional.service';

import { Role } from '../role/role'
import { RoleService } from '../role/role.service';



@Component({
    moduleId: module.id,
    selector: 'ava-pro-app',
    templateUrl: './professional.html'
})
export class ProfessionalComponent {
    constructor (private _professionalService: ProfessionalService, private _roleService: RoleService){}

    professionals: Professional[];
    professional: Professional;
    roles: Role[];

    ngOnInit(){
        this._professionalService.getProfessionalList()
        .then((getProfessionals: Professional[]) => {
            this.professionals = getProfessionals;
            return  this._roleService.getRoleList();
        })
        .then((getRoles: Role[]) => {
            this.roles = getRoles;
        });
        //this.roles = this._roleService.getRoleList();
    }

    getProfessionalDetails (professional:Professional):Professional {
        /*for(let role of this.roles){
            if(professional.roleId === role.id) {
                professional.role = role;
            }
        }*/
        return professional;
    }

    profissionalDetails (professional:Professional) { 
        this.professional = this.getProfessionalDetails(professional);
    }
}

