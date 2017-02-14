import { Role } from '../domain/role';
import { ICrud } from './crud.interface';

import { ROLES } from '../../app/shared/mock';

export class RolePersistence implements ICrud<Role>{
    list(): Promise<Role[]>{
        return Promise.resolve(ROLES);
    }

    read(id: number): Promise<Role>{
        return Promise.resolve(ROLES.find(r => r.id === id));
    }

    create(role: Role) : Promise<Role>{
        return null;
    }

    update(role: Role): Promise<Role>{
        return null;
    }

    delete(id: number): Promise<boolean>{
        return null;
    }
}