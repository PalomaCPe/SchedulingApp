import { Professional } from '../domain/professional';
import { ProfessionalPersistence } from '../persistence/professional.persistence';

export class ProfessionalApplication {
    constructor(private professionalPersistence: ProfessionalPersistence = new ProfessionalPersistence()) {}

    getProfessionals(): Promise<Professional[]> {
        return this.professionalPersistence.list();
    }

    getProfessional(id:number): Promise<Professional> {
        return this.professionalPersistence.read(id);
    }

    saveProfessional(professional: Professional): Promise<Professional> {
        return this.professionalPersistence.update(professional);
    }

    createProfessional(professional: Professional): Promise<Professional> {
        professional.deleted = false;

        return this.professionalPersistence.create(professional);
    }

    deleteProfessional(id: number): Promise<boolean> {
        return this.professionalPersistence.delete(id);
    }
}