import { Component } from '@angular/core';
import { Role } from './role';
import { RoleService } from './role.service';



@Component({
    moduleId: module.id,
    selector: 'ava-rol-app',
    templateUrl: 'role.html'
})

export class RoleComponent {

    private pageName = 'Cargos';
    private roles: Role[];
    private role: Role;
    private levels: number[];

    constructor(private _roleservice: RoleService) { }

    ngOnInit() {
        this.levels = this._roleservice.levelsList();

        this._roleservice.getRoleList()
            .then((roles: Role[]) => {
                this.roles = roles;
            });
    }

    roleDetails(role: Role) {
        this.role = role;
        this.roles.length;
    }
    
}