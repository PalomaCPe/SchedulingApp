import { IRole } from './role.interface';

export class Role implements IRole{
    id: number;
    name: string;
    brc: string;
    description: string;
    level: number;
    deleted: boolean;
}
