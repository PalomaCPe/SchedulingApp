import { Customer } from '../domain/customer';
import { CustomerPersistence } from '../persistence/customer.persistence';

export class CustomerApplication {
    createCustomer(customer: Customer): Promise<Customer> {
        return Promise.resolve(customer);
    }
    getCustomer(id: number): Promise<Customer> {
        return new CustomerPersistence().read(id);
    }
    getCustomers(): Promise<Customer[]> {
        return new CustomerPersistence().list();
    }
    updateCustomer(id: number): Promise<Customer> {
        return Promise.resolve(new Customer(id))
    }
    deleteCustomer(id: number): Promise<boolean> {
        return Promise.resolve(true);
    }
}