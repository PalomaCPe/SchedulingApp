import {Pipe, PipeTransform} from '@angular/core'

@Pipe({ name: 'emailHider'})

export class EmailHider implements PipeTransform {
    transform (email: string): string {
        email = email.slice(0, email.indexOf('@')+1);
        return email;
    }
}