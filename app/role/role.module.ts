import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RoleService } from './role.service';
import { RoleComponent } from './role.component';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule],
    declarations: [RoleComponent],
    providers: [RoleService]
})

export class RoleModule{ }