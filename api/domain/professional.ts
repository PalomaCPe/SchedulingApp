import { Role } from './Role'

export class Professional {
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