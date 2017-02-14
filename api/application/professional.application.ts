import { Professional } from '../domain/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication {
    getProfessionals(): Promise<Professional[]> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return professionalPersistence.list();
    }
}