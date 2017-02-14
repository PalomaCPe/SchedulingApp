import { Customer } from '../domain/customer';
import { ICrud } from './crud.interface';

import { CUSTOMERS } from '../../app/shared/mock';

export class CustomerPersistence implements ICrud<Customer> {
    list(): Promise<Customer[]> {
        return Promise.resolve(CUSTOMERS);
    }

    read(id: number): Promise<Customer> {
        return Promise.resolve(CUSTOMERS.find(customer => customer.id === id));
    }

    create(customer: Customer): Promise<Customer> {
        return Promise.resolve(new Customer());
    }

    update(customer: Customer): Promise<Customer> {
        return Promise.resolve(customer);
    }

    delete(id: number): Promise<boolean> {
        return Promise.resolve(id ? true : false);
    }
}