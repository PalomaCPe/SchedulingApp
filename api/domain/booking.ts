import { Professional } from './professional';
import { Project } from './project';

export class Booking {
    id: number;
    startDate: Date;
    endDate: Date;
    percentual: number;
    projectId: number;
    professionalId: number;
    //delete lógico
    deleted: boolean;
    //Propriedades de navegação
    project: Project;
    professional: Professional;
}