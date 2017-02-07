import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'ava-rol-app',
    templateUrl: 'role.html'
})

export class RoleComponent{
    pageName = 'Cargos';   

    qualquerCoisa = {
        "id" : 119,
        "name": "Associate Software Engineer",
        "brc": "A0022",
        "description": "Cargo mais baixo da Avanade",
        "level": 10
    } 
}