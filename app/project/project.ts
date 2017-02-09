import { IProject } from './project.interface';

export class Project implements IProject {
    projectId: number;
    name: string;
    customerId: number;
    dtInitial: Date;
    dtFinal: Date;
    wbs: string;
    sponsorId: number;
}