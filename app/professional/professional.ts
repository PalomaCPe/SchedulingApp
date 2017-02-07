import {IProfessional} from './professional.interface';

export class Professional implements IProfessional {
    professionalId: number;
    pid: number;
    eid: number;
    name: string;
    email: string;
    phone: number;
    role: string;        
}