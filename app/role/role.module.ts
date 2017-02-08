import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { RoleComponent } from './role.component';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule],
    declarations: [RoleComponent],
    bootstrap: [RoleComponent]
})

export class RoleModule{ }