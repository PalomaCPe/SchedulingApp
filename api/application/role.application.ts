import { Role } from '../domain/role';
import { RolePersistence } from '../persistence/role.persistence';

export class RoleApplication{
    constructor(private rolePersistence: RolePersistence = new RolePersistence()) {}

    getRoles(): Promise<Role[]>{
        return this.rolePersistence.list();
    }

    getRole(id: number): Promise<Role>{
        return this.rolePersistence.read(id);
    }

    createRole(role: Role): Promise<Role>{
        return this.rolePersistence.create(role);
    }
}