import { Pipe, PipeTransform, Injectable } from '@angular/core';

import { DateHelper } from '../helpers/date-helper';

@Pipe({
    name: 'filterDate',
    pure: false
})
@Injectable()
export class FilterDatePipe implements PipeTransform {
    transform(items: any[], args: Date): any {
        let date  = new DateHelper().dateToDateString(args);

        return items.filter(item => item.date === date);
    }
}