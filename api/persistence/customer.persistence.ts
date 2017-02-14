import { Customer } from '../domain/customer';
import { ICrud } from './crud.interface';

import { CUSTOMERS } from '../../app/shared/mock';

export class CustomerPersistence implements ICrud<Customer> {
    list(): Promise<Customer[]> {
        return Promise.resolve(CUSTOMERS);
    }

    read(id: number): Promise<Customer> {
        return null;
    }

    create(customer: Customer): Promise<Customer> {
        return null;
    }

    update(customer: Customer): Promise<Customer> {
        return null;
    }

    delete(id: number): Promise<boolean> {
        return null;
    }
}