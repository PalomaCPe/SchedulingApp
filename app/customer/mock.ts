import { ICustomer } from './customer.interface';

let custumers: ICustomer[] = [];
for (let i = 0; i < 10; i++) {
    custumers.push({
        "id": i,
        "name": `custumer ${i}`,
        "contact": `11 5555-${i}${i}${i}${i}`,
        "email": `custumer${i}@avanade.com`,
        "sponsor": i * 37 + 32
    });
}

export const CUSTOMER_MOCK: ICustomer[] = custumers;