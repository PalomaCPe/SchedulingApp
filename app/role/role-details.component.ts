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
    private id: Number;
    private action: String;

    constructor(private _roleService: RoleService,
        private _router: ActivatedRoute,
        private _location: Location) { }

    ngOnInit() {
        this._router.params.subscribe((params: Params) => {
            this.id = +params['id'];
            this.action = params['action'];
            console.log(params);
        });

        this._roleService.getRoleById(this.id)
            .then((result: Role) => {
                console.log(result);
                this.role = result;
            });

        this.levels = this._roleService.levelsList();
    }

    save(id: Number) {
        // this._roleService.saveRole(id);
    }

    onBack() {
        this._location.back();
    }
}