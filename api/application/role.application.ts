import { Role } from '../domain/role';
import { RolePersistence } from '../persistence/role.persistence';

export class RoleApplication{
    getRoles(): Promise<Role[]>{
        let rolePersistence: RolePersistence = new RolePersistence();

        return rolePersistence.list();
    }
}