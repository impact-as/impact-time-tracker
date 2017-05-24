import { Pipe, PipeTransform, Injectable } from '@angular/core';
import { TrackingStatus } from '../models/tracking.status';
import { Constants } from '../constants/constants';

@Pipe({
    name: 'filterVisible',
    pure: false
})
@Injectable()
export class FilterVisiblePipe implements PipeTransform {
    transform(items: any[], status: TrackingStatus): any {        
        return items.filter(item => Constants.hiddenStatuses.find(status => Constants.hiddenStatuses === item.status));
    }
}