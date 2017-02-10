import { Component, OnInit } from '@angular/core';

import { Booking } from './booking';
import { BookingService } from './booking.service';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: 'ava-bok-app',
    templateUrl: 'booking.html'
})

export class BookingComponent implements OnInit {
    constructor(private _bookingService: BookingService,
        private _professionalService: ProfessionalService,
        private _projectService: ProjectService) { }

    bookings: Booking[];

    projects: Project[];
    professionals: Professional[];

    ngOnInit() {
        this._professionalService.getProfessionalList()
            .then((professionals: Professional[]) => {
                this.professionals = professionals;
                return this._projectService.getListProject();
            })
            .then((projects: Project[]) => {
                this.projects = projects;
                return this._bookingService.getBookingList();
            })
            .then((bookings: Booking[]) => {
                this.bookings = bookings;

                this.bookings.forEach((obj) => {
                    obj.project = this.projects.find(p => p.projectId === obj.projectId);
                    obj.professional = this.professionals.find(p => p.professionalId === obj.professionalId);
                });
            });
    }
}