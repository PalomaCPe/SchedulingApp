import { IBooking } from './booking.interface';

import { Project } from '../project/project';
import { Professional } from '../professional/professional';

export class Booking implements IBooking {
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