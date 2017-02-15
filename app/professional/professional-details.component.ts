import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Professional } from './professional';
import { Role } from '../role/role'

import { ProfessionalService } from './professional.service';
import { RoleService } from '../role/role.service';

@Component({
    moduleId: module.id,
    templateUrl: './professional-details.html'
})

export class ProfessionalDetailComponent {
    constructor(private _router: ActivatedRoute,
        private _professionalService: ProfessionalService,
        private _roleService: RoleService,
        private _location: Location    
    ) {

    }
    professionals: Professional[];
    professional:Professional;
    roles: Role[];
    action: string;
    id: number;

    ngOnInit() {
        this._router.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.action = params['action'];
            console.log(this.action);    
        })

        this._professionalService.getProfessional(this.id)
        .then((getProfessional: Professional) => {
            this.professional = getProfessional;
            return this._roleService.getRoleList();
        })
        .then((getRoles:Role[]) => {
            this.roles = getRoles;
            this.getProfessionalRole(this.professional);
        });               
    }

    getProfessionalRole(professional: Professional) {
        professional.role = this.roles.find(r => professional.roleId == r.id);
    }

    onBack() {
        this._location.back();
    }
}