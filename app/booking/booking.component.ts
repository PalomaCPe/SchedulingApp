import { Component, OnInit } from '@angular/core';

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

export class BookingComponent implements OnInit {
    bookings: Booking[] = BOOKINGS;    
    booking: Booking;

    projects: Project[];
    professionals: Professional[];

    ngOnInit(){
        this.projects = PROJECTS;
        this.professionals = PROFESSIONALS;

        this.getBookings();
    }

    getBookingsDetails(booking: Booking){
        this.booking = booking;
        
        this.booking.project = this.projects.find(p => p.projectId === booking.projectId);
        this.booking.professional = this.professionals.find(p => p.professionalId === booking.professionalId);
    }

    getBookings() {
        this.bookings.forEach((item) => {
            this.getProfessionalDetails(item);
            this.getProjectDetails(item);
        });
    }

    getProjectDetails(booking: Booking) {
        booking.project = this.projects.find(project => project.projectId == booking.projectId);
    }

    getProfessionalDetails(booking: Booking) {
        booking.professional = this.professionals.find(professional => professional.pid == booking.professionalId);
    }

    startDateChanged(value: Date): void {
        this.booking.startDate = value;
    }

    endDateChanged(value: Date): void {
        this.booking.endDate = value;
    }

    onBack(){
        this.booking = null;
    }
}