import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Booking } from './booking';
import { BookingService } from './booking.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    templateUrl: 'booking-details.html'
})
export class BookingDetailComponent implements OnInit {
    constructor(private _bookingService: BookingService,
        private _professionalService: ProfessionalService,
        private _projectService: ProjectService,
        private _router: ActivatedRoute) { }

    booking: Booking;
    professionals: Professional[];
    projects: Project[];
    action: string;
    id: number;

    ngOnInit() {
        this._router.params.subscribe((params: Params) => {
            this.id = +params['id'];
        });

        this._professionalService.getProfessionalList()
            .then((professionals: Professional[]) => {
                this.professionals = professionals;
                return this._projectService.getListProject();
            })
            .then((projects: Project[]) => {
                this.projects = projects;
                return this._bookingService.getBooking(this.id)
            })
            .then((booking: Booking) => {
                this.booking = booking;

                this.booking.project = this.projects.find(p => p.projectId === booking.projectId);
                this.booking.professional = this.professionals.find(p => p.professionalId === booking.professionalId);
            });
    }

    getProjectDetails(booking: Booking) {
        booking.project = this.projects.find(project => project.projectId == booking.projectId);
    }

    getProfessionalDetails(booking: Booking) {
        booking.professional = this.professionals.find(professional => professional.pid == booking.professionalId);
    }

    getBookingsDetails(booking: Booking) {
        this.booking = booking;

        this.booking.project = this.projects.find(p => p.projectId === booking.projectId);
        this.booking.professional = this.professionals.find(p => p.professionalId === booking.professionalId);
    }

    startDateChanged(value: Date): void {
        this.booking.startDate = value;
    }

    endDateChanged(value: Date): void {
        this.booking.endDate = value;
    }

    onBack() {
    }
}