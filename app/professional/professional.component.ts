import { Component, OnInit, Input } from '@angular/core';

import { Professional } from './professional';
import { Role } from '../role/role'
import { ProfessionalService } from './professional.service';


@Component({
    moduleId: module.id,
    selector: 'ava-pro-app',
    templateUrl: './professional.html'
})
export class ProfessionalComponent {
    constructor (private _professionalService: ProfessionalService){}

    professionals: Professional[];
    professional: Professional;
    roles: Role[];

    ngOnInit(){
        this.professionals = this._professionalService.getProfessionalList();  
    }

    getProfessionalDetails (professional:Professional):Professional {
        return professional
    }

    profissionalDetails (professional:Professional) { 
    
    }
}

