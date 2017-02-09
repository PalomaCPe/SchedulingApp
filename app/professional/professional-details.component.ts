import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
        private _roleService: RoleService    
    ) {

    }
    professionals: Professional[];
    professional:Professional;
    roles: Role[];
    id: number;

    ngOnInit() {
        this._router.params.subscribe((params: Params) => {
            this.id = +params['id'];    
        })
        this.professionals = this._professionalService.getProfessionalList();
        this.roles = this._roleService.getRoleList();
    }

    getProfessional() {
        this.professional = this.professionals.find(p => p.professionalId == this.id);
    }
}