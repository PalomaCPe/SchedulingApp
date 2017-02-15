import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Booking } from './booking';

import { Project } from '../project/project';
import { ProjectService } from '../project/project.service';

import { Professional } from '../professional/professional';
import { ProfessionalService } from '../professional/professional.service';

const SERVICE_URL: string = '/api/booking';

@Injectable()
export class BookingService {
    constructor(private _httpService: Http) { }

    projects: Project[];
    professionals: Professional[];

    getBookingList(): Promise<Booking[]> {
        let url: string = `${SERVICE_URL}/list`;

        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {

                return response.json() as Booking[];
            })
            .catch(this.errorHandling);
    }

    getBooking(id: number): Promise<Booking> {
        let url: string = `${SERVICE_URL}/${id}`;

        return this._httpService.get(url)
            .toPromise()
            .then((response: Response) => {

                return response.json() as Booking;
            })
            .catch(this.errorHandling);
    }

    getProjectDetails(booking: Booking) {
        booking.project = this.projects.find(project => project.projectId == booking.projectId);
    }

    getProfessionalDetails(booking: Booking) {
        booking.professional = this.professionals.find(professional => professional.pid == booking.professionalId);
    }

    createBooking(booking: Booking) {
        let url: string = `${SERVICE_URL}/post`;

        return this._httpService.post(url, { booking: booking })
            .toPromise()
            .then((response: Response) => {
                return response.json() as Booking;
            })
            .catch(this.errorHandling);
    }

    editBooking(booking: Booking): Promise<Booking> {
        let url: string = `${SERVICE_URL}/${booking.id}`;

        return this._httpService.put(url, { booking: booking })
            .toPromise()
            .then((response: Response) => {
                return response.json() as Booking;
            })
            .catch(this.errorHandling);
    }

    deleteBooking(id: number): Promise<boolean> {
        let url: string = `${SERVICE_URL}/delete/${id}`;

        return this._httpService.delete(url)
            .toPromise()
            .then((response: Response) => {
                return response.json() as boolean;
            })
            .catch(this.errorHandling);
    }

    errorHandling(error: any) {
        console.log(error.message || error);
    }
}