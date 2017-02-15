import { Customer } from '../domain/customer';
import { CustomerPersistence } from '../persistence/customer.persistence';

export class CustomerApplication {

    private _customerPersistence: CustomerPersistence = new CustomerPersistence();

    createCustomer(customer: Customer): Promise<Customer> {
        return this._customerPersistence.create(customer);
    }

    getCustomer(id: number): Promise<Customer> {
        return this._customerPersistence.read(id);
    }

    getCustomers(): Promise<Customer[]> {
        return this._customerPersistence.list();
    }

    updateCustomer(customer: Customer): Promise<Customer> {
        return this._customerPersistence.update(customer);
    }

    deleteCustomer(id: number): Promise<boolean> {
        return this._customerPersistence.delete(id);
    }
}