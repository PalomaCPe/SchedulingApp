import { Injectable } from '@angular/core';

import { Booking } from './booking';
import { BOOKINGS } from '../shared/mock';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class BookingService {

    projects: Project[];
    professionals: Professional[];

    getBookingList(): Promise<Booking[]> {
        return Promise.resolve(BOOKINGS);
    }

    getBooking(id: number): Promise<Booking> {
        return Promise.resolve(BOOKINGS.find(b => b.id === id));
    }

    getProjectDetails(booking: Booking) {
        booking.project = this.projects.find(project => project.projectId == booking.projectId);
    }

    getProfessionalDetails(booking: Booking) {
        booking.professional = this.professionals.find(professional => professional.pid == booking.professionalId);
    }

    getBookings() {
        BOOKINGS.forEach((item) => {
            this.getProfessionalDetails(item);
            this.getProjectDetails(item);
        });
    }
}