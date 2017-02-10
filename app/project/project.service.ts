import { Injectable } from '@angular/core';

import { Project } from './project';
import { PROJECTS } from '../shared/mock';

import { Professional } from '../professional/professional';
import { PROFESSIONALS } from '../shared/mock';

import { Customer } from '../customer/customer';
import { CUSTOMERS } from '../shared/mock';

@Injectable()
export class ProjectService {  
    getListProject(): Project[]{
        return PROJECTS;
    }
    getProjectById(project: Project): Project{
        return PROJECTS.find(p => p.projectId === project.projectId);
    }
    getListProfessional(): Professional[]{
        return PROFESSIONALS;
    } 
    getListCustomer(): Customer[]{
        return CUSTOMERS;
    }         
    
}