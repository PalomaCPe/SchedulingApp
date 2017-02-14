import { Customer } from '../domain/customer';
import { CustomerPersistence } from '../persistence/customer.persistence';

export class CustomerApplication {

    private _customerPersistence: CustomerPersistence = new CustomerPersistence();

    createCustomer(customer: Customer): Promise<Customer> {
        return Promise.resolve(customer);
    }

    getCustomer(id: number): Promise<Customer> {
        return this._customerPersistence.read(id);
    }

    getCustomers(): Promise<Customer[]> {
        return this._customerPersistence.list();
    }

    updateCustomer(id: number): Promise<Customer> {
        return Promise.resolve(new Customer(id))
    }

    deleteCustomer(id: number): Promise<boolean> {
        return Promise.resolve(true);
    }
}