import { Component, OnInit, Input } from '@angular/core';

import { Professional } from './professional';

@Component({
    moduleId: module.id,
    selector: 'ava-pro-app',
    templateUrl: 'professional.html'
})
export class ProfessionalComponent implements OnInit {

    private _professional: Professional = {
        professionalId: 1,
        pid: 1406,
        eid: 157,
        name: "NOME TESTE",
        email: "EMAIL@AVANADE.COM",
        role: "CARGO TESTE",
        phone: "11 5555-555"
    } as Professional;

    @Input()
    set professional(value: Professional) {
        this._professional = Object.assign({}, value);
    }

    get professional(): Professional {
        return this._professional;
    }

    constructor() { }

    ngOnInit() {

    }


}