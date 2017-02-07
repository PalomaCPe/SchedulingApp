import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentual' })

export class PercentualFilter implements PipeTransform {
    transform(value: number): string {
        if (isNaN(value))
            return '';
        
        value = value * 100;
        return value.toString() + "%";
    }
}