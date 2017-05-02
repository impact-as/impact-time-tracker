import { Component } from '@angular/core';
import { TrackingService } from '../services/tracking.service';

import { ITracking } from '../models/tracking.interface';

@Component({
	selector: 'layout-footer',
	templateUrl: './layout-footer.component.html',
	styleUrls: ['./layout-footer.component.scss'],
})
export class LayoutFooterComponent {
	constructor(public trackingService: TrackingService) {


	}
}
