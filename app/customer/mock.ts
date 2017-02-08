import { Customer } from './customer';

let custumers: Customer[] = [];
for (let i = 0; i < 100; i++) {
    custumers.push({
        "id": i+1,
        "name": `custumer ${i}`,
        "contact": `11 5555-${i}${i}${i}${i}`,
        "email": `custumer${i}@avanade.com`,
        "sponsor": i * 37 + 32
    });
}

export const CUSTOMERS: Customer[] = custumers;