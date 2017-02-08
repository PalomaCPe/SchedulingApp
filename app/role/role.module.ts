import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';

import { RoleComponent } from './role.component';

@NgModule({
    imports: [BrowserModule, SharedModule],
    declarations: [RoleComponent],
    bootstrap: [RoleComponent]
})

export class RoleModule{ }