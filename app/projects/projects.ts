import { IProjects } from './projects.interface';
export class Projects implements IProjects {
    schProjectId: number;
    name: string;
    customerId: number;
    dtInitial: Date;
    dtFinal: Date;
    wbs: string;
    sponsorId: number;
}