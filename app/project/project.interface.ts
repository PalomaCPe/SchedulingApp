export interface IProject {
    projectId: number;
    name: string;
    dtInitial: Date;
    dtFinal: Date;
    wbs: string;
    
    customerId: number;
    sponsorId: number;
}