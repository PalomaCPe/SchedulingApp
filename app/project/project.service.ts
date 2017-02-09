import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from '../shared/mock';

import { Professional } from '../professional/professional';
import { PROFESSIONALS } from '../shared/mock';

import { Customer } from '../customer/customer';
import { CUSTOMERS } from '../shared/mock';

@Injectable()
export class ProjectService {  
    getListProject(): Promise<Project[]>{
        return Promise.resolve(PROJECTS);
    }
    getListProfessional(): Professional[]{
        return PROFESSIONALS;
    } 
    getListCustomer(): Customer[]{
        return CUSTOMERS;
    }         
}