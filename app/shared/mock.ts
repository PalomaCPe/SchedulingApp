import { Booking } from '../booking/booking';
import { Customer } from '../customer/customer';
import { Professional } from '../professional/professional';
import { Projects } from '../projects/projects';
import { Role } from '../role/role';

export const BOOKINGS: Booking[] = [
    {
        "id": 1,
        "startDate": new Date(Date.now()),
        "endDate": new Date(Date.now()),
        "percentual": 30,
        "projectId": 1,
        "professionalId": 1
    },
    {
        "id": 2,
        "startDate": new Date(Date.now()),
        "endDate": new Date(Date.now()),
        "percentual": 50,
        "projectId": 1,
        "professionalId": 1
    }
];

export const CUSTOMERS: Customer[] = [
    {
        "id": 1,
        "name": "customer 1",
        "contact": "11 5555-1111",
        "email": "customer1@avanade.com",
        "sponsor": 123
    },
    {
        "id": 2,
        "name": "customer 2",
        "contact": "11 5555-2222",
        "email": "customer2@avanade.com",
        "sponsor": 321
    },
    {
        "id": 3,
        "name": "customer 3",
        "contact": "11 5555-3333",
        "email": "custome31@avanade.com",
        "sponsor": 213
    }
];

export const PROFESSIONALS: Professional[] = [
    {
        professionalId: 1,
        pid: 1406,
        eid: 157,
        name: "Thalita",
        email: "thalita@avanade.com",
        role: "Associate Software Engineer",
        phone: "17 1234-5678"
    },
    {
        professionalId: 2,
        pid: 1132,
        eid: 123,
        name: "Victor",
        email: "victor@avanade.com",
        role: "Associate Software Engineer",
        phone: "14 9876-5432"
    },
    {
        professionalId: 3,
        pid: 3464,
        eid: 189,
        name: "Thais",
        email: "thais@avanade.com",
        role: "Associate Software Engineer",
        phone: "19 1234-5678"
    },
    {
        professionalId: 4,
        pid: 3244,
        eid: 163,
        name: "Paloma",
        email: "paloma@avanade.com",
        role: "Associate Software Engineer",
        phone: "12 9876-5432"
    }
];

export const PROJECTS: Projects[] = [
    {
        projectId: 1,
        name: "Projeto Teste",
        customerId: 1,
        dtInitial: new Date(),
        dtFinal: new Date(),
        wbs: "WBSTESTE",
        sponsorId: 1,
    },
    {
        projectId: 1,
        name: "Projeto Teste",
        customerId: 1,
        dtInitial: new Date(),
        dtFinal: new Date(),
        wbs: "WBSTESTE",
        sponsorId: 1,
    },
    {
        projectId: 1,
        name: "Projeto Teste",
        customerId: 1,
        dtInitial: new Date(),
        dtFinal: new Date(),
        wbs: "WBSTESTE",
        sponsorId: 1,
    }
];

export const ROLES: Role[] = [
    {
        "id": 120,
        "name": "Associate Software Engineer",
        "brc": "A0022",
        "description": "Cargo mais baixo da Avanade",
        "level": 10
    },
    {
        "id": 121,
        "name": "Associate Software Engineer",
        "brc": "A0022",
        "description": "Cargo mais baixo da Avanade",
        "level": 10
    },
    {
        "id": 122,
        "name": "Associate Software Engineer",
        "brc": "A0022",
        "description": "Cargo mais baixo da Avanade",
        "level": 10
    }
];

