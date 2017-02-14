import { IProfessional } from './professional.interface';
import { Role } from '../role/role'

export class Professional implements IProfessional {
    
    professionalId: number;
    pid: number;
    eid: number;
    name: string;
    roleId: number;
    email: string;
    phone: string;
    //delete logico
    deleted: boolean;
    //relacionamentos
    role: Role;
}