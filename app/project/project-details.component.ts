import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Project } from './project';
import { Professional } from './../professional/professional';

import { ProjectService } from './project.service';
import { ProfessionalService } from './../professional/professional.service';

@Component({
    moduleId: module.id,
    templateUrl: 'project-details.html'
})
export class ProjectDetailsComponent implements OnInit {

    private project: Project = new Project();
    private sponsors: Professional[] = [];

    constructor(private _router: ActivatedRoute, private _projectService: ProjectService, private _professionalService: ProfessionalService) { }

    ngOnInit() {
        this._router.params.subscribe((params: Params) => this.project.sponsorId = +params['id']);

        this.project = this._projectService.getProjectById(this.project);
        this.sponsors = this._professionalService.getProfessionalList();
    }

}