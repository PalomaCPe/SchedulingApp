import { IProjects } from './projects.interface';

export class Projects implements IProjects {
    projectId: number;
    name: string;
    customerId: number;
    dtInitial: Date;
    dtFinal: Date;
    wbs: string;
    sponsorId: number;
}