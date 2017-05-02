import { Component, OnInit, Input } from '@angular/core';

import { ITracking } from '../models/tracking.interface';
import { TrackingService } from '../services/tracking.service';
import { MdDialog } from '@angular/material';

@Component({
	selector: 'tracker-change-time',
	templateUrl: './tracker-change-time.component.html',
	styleUrls: ['./tracker-change-time.component.css']
})
export class TrackerChangeTimeComponent implements OnInit {

	@Input()
	public tracking: ITracking;

	public hours: number;
	public minutes: number;

	constructor(private trackingService: TrackingService,
		private dialog: MdDialog) { }

	public saveTime() {
		this.tracking.time = (this.hours * 3600) + (this.minutes * 60);
		this.trackingService.update(this.tracking);
		this.dialog.closeAll();
	}

	ngOnInit() {
		const hours = Math.floor(this.tracking.time / 3600);
		const minutes = Math.floor(this.tracking.time / 60) - (hours * 60);

		this.hours = hours;
		this.minutes = minutes;

	}

}
