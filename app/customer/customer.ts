import { ICustomer } from './customer.interface';

export class Role implements ICustomer{
    id: number;
    name: string;
    contact: string;
    email: string;
    sponsor: number;
}