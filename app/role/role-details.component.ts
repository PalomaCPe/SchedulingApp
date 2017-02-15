import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Role } from './role';
import { RoleService } from './role.service';


@Component({
    moduleId: module.id,
    templateUrl: 'role-details.html'
})

export class RoleDetailsComponent implements OnInit {
    private role: Role = new Role();
    private levels: number[];
    action : string;

    constructor(private _roleService: RoleService,
        private _router: ActivatedRoute,
        private _location: Location) { }

    ngOnInit() {
        this._router.params.subscribe((params: Params) => {
            this.role.id = +params['id'];
        });

        this._roleService.getRoleById(this.role.id)
            .then((result: Role) => {
                this.role = result;
            });

        this.levels = this._roleService.levelsList();
    }

    onBack() {
        this._location.back();
    }

    onEdit(){
        this.action = 'edit';
    }

    OnCreate(){
        this.action = 'edit';
    }

}