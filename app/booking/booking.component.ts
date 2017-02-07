import { Component } from '@angular/core';

import { Booking } from './booking';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app',
    templateUrl: 'booking.html'
})

export class BookingComponent {
    pageName = 'Alocação';

    model: Booking = {
        "id": 1,
        "startDate": new Date(Date.now()),
        "endDate": new Date(Date.now()),
        "percentual": 0.3,
        "projectId": 1, 
        "professionalId": 1
    };
}