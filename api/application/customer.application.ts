import { Customer } from '../domain/customer';
import { CustomerPersistence } from '../persistence/customer.persistence';

export class CustomerApplication {
    getCustomers(): Promise<Customer[]> {
        return new CustomerPersistence().list();
    }
}