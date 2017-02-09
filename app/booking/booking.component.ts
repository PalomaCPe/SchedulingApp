import { Component } from '@angular/core';

import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';

import { Project } from '../project/project';
import { Professional } from '../professional/professional';

import { PROJECTS } from '../shared/mock';
import { PROFESSIONALS } from '../shared/mock';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app',
    templateUrl: 'booking.html'
})

export class BookingComponent {
    bookings: Booking[] = BOOKINGS;    
    booking: Booking;

    projects: Project[];
    professionals: Professional[];

    bookingDetails(booking: Booking){
        this.booking = booking;

        this.booking.project = PROJECTS.find(p => p.projectId === booking.projectId);
        this.booking.professional = PROFESSIONALS.find(p => p.professionalId === booking.professionalId);

        this.projects = PROJECTS;
        this.professionals = PROFESSIONALS;
    }
}