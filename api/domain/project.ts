
import { Professional } from './professional';
import { Customer } from './customer';

export class Project {
    projectId: number;
    name: string;
    dtInitial: Date;
    dtFinal: Date;
    wbs: string;

    customerId: number;
    sponsorId: number;

    customer: Customer;
    professional: Professional;

    deleted:boolean;

    constructor(id?: number) {
        this.projectId = id || null;
    }
}