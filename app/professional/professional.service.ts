import { Injectable } from "@angular/core";

import { Professional } from './professional';
import { PROFESSIONALS } from '../shared/mock';

@Injectable ()
export class ProfessionalService{

    getProfessionalList(): Professional[]{
        return PROFESSIONALS;
    }
}