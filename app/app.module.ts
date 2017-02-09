import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { CustomerModule } from './customer/customer.module';
import { BookingModule } from './booking/booking.module';
import { ProjectModule } from './project/project.module';
import { ProfessionalModule } from './professional/professional.module';
import { RoleModule } from './role/role.module';

import { WelcomeComponent } from './welcome.component';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,BookingModule, ProfessionalModule, RoleModule, CustomerModule, ProjectModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent},
        { path: '', redirectTo:'/welcome', pathMatch:'full'},
    ])],

    declarations: [AppComponent, WelcomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }