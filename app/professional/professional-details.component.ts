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
        })

        this._professionalService.getProfessional(this.id)
        .then((getProfessional: Professional) => {
            this.professional = getProfessional;
            console.log(this.professional);
            return getProfessional;
        });              
    }

    getProfessionalRole(professional: Professional) {
        professional.role = this.roles.find(r => professional.roleId == r.id);
    }

    onCreate() {
        this.action = 'edit';
    }

    onSave() {
        this._professionalService.saveProfessional(this.professional);
    }
    
    onEdit() {
        this._professionalService.editProfessional(this.professional);
    }

    onDelete() {
        this._professionalService.deleteProfessional(this.id);
        console.log(this.id);
        this._location.back();
    }

    onBack() {
        this._location.back();
    }
}