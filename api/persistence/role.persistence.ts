import { ICrud } from './crud.interface';
import { Role } from '../domain/role';

import { ROLES } from '../../app/shared/mock';

export class RolePersistence implements ICrud<Role> {
    
    list(): Promise<Role[]>{
        return Promise.resolve(ROLES);
    }

    read(id: number): Promise<Role>{
        return null;
    }

    create(booking: Role): Promise<Role>{
        return null;
    }

    update(booking: Role): Promise<Role>{
        return null;
    }

    delete(id: number): Promise<boolean>{
        return null;
    }
}