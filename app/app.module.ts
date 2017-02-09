import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Router } from '@angular/router';

import { BookingModule } from './booking/booking.module';

import { RoleModule } from './role/role.module';

import { WelcomeComponent } from './welcome.component';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule,
    BookingModule,
    RoleModule,
    RouterModule.forRoot([
        { path: 'welcome', component: WelcomeComponent},
        { path: '', redirectTo:'/welcome', pathMatch:'full'}
    ])],
    declarations: [AppComponent, WelcomeComponent],
    bootstrap: [AppComponent]
})

export class AppModule{}