import { Component, OnInit, Input } from '@angular/core';

import { Professional } from './professional';
import { PROFESSIONALS } from './mock'

@Component({
    moduleId: module.id,
    selector: 'ava-pro-app',
    templateUrl: './professional.html'
})
export class ProfessionalComponent {

    pageName = "Profissionais"
    professionals: Professional[] = PROFESSIONALS; 
}