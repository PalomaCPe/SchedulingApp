import { Professional } from '../domain/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication {

    getProfessionals(): Promise<Professional[]> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return professionalPersistence.list();
    }
    
    getProfessional(id: number): Promise<Professional> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return professionalPersistence.read(id);
    }

    postProfessional(professional: Professional): Promise<Professional> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return professionalPersistence.update(professional);    
    }

    createProfessional(professional: Professional): Promise<Professional> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return professionalPersistence.create(professional);
    }

    deleteProfessional(id: number, ): Promise<Professional> {
        let professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence();
        return null;
    } 
}