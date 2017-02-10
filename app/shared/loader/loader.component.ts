import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'ava-lod-app',
    template: '<h1 *ngIf="loading">loading... !!!!</h1>'
})


export class LoaderComponent {

    private loading = false;

}