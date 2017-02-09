import { Component } from '@angular/core';

@Component({
    selector: 'ava-wel-app',
    template: '<h1 class="text-center">{{ title }}</h1>'
})
export class WelcomeComponent {
    title: string = "Aplicação de Scheduling";
}