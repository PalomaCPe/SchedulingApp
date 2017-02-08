import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'percentual' })

export class PercentualFilter implements PipeTransform {
    transform(value: number): string {
        if (isNaN(value))
            return '';
        return value.toString() + "%";
    }
}