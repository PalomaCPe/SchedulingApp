import { ICrud } from './crud.interface';
import { Professional } from '../domain/professional';

import { PROFESSIONALS } from '../../app/shared/mock';

export class ProfessionalPersistence implements ICrud<Professional> {
    
    list(): Promise<Professional[]>{
        return Promise.resolve(PROFESSIONALS);
    }

    read(id: number): Promise<Professional>{
        return null;
    }

    create(booking: Professional): Promise<Professional>{
        return null;
    }

    update(booking: Professional): Promise<Professional>{
        return null;
    }

    delete(id: number): Promise<boolean>{
        return null;
    }
}