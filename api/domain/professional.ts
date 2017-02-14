import { Role } from './role'

export class Professional {
    professionalId: number;
    pid: number;
    eid: number;
    name: string;
    roleId: number;
    email: string;
    phone: string;

    //relacionamentos
    role: Role;
}