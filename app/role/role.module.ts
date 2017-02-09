import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RoleService } from './role.service';
import { RoleComponent } from './role.component';

@NgModule({
    imports: [BrowserModule, FormsModule, SharedModule, RouterModule.forRoot([
        { path: 'roles', component: RoleComponent}
    ])],

    declarations: [RoleComponent],
    providers: [RoleService]
})

export class RoleModule{ }