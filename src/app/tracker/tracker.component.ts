import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

// import { Observable } from 'rxjs/Observable';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { ITracking } from '../models/tracking.interface';
import { TrackingService } from '../services/tracking.service';
import { Constants } from '../constants/constants'

@Component({
	selector: 'app-tracker',
	templateUrl: './tracker.component.html',
	styleUrls: ['./tracker.component.scss'],

})
export class TrackerComponent implements OnInit {

	public availableDays:Date[] = [];
	public currentDay: Date;
	public selectedDay: Date;
	public trackings: ITracking[];
	public visibleTrackings: ITracking[];
	public totalDayHours: number = 0;		

	constructor(public trackingService: TrackingService, public dialog: MdDialog) {

		this.currentDay = new Date();
		this.selectedDay = new Date();

		this.trackings = this.trackingService.trackings;
		this.visibleTrackings = this.trackingService.visibleTrackings;

		this.addDays();

		this.trackingService.updateSubscriber.subscribe(change => 
			this.updateDayHours()
		);

	}

	public addDays(visibleDays = Constants.visibleDays) {
		for (let i = 0; i < visibleDays; i++) {
			const myDate = new Date();
			myDate.setDate(this.selectedDay.getDate() + (-7 + i));
			this.availableDays.push(myDate);
		}
	}

	public gotoDate(date: Date = new Date()) {
		const myDate = date;
		this.selectedDay = myDate;
		this.updateDayHours();
	}

	public updateDayHours() {
		this.totalDayHours = this.trackingService.getHoursPrDay(this.selectedDay);
	}

	public addNewTracking(jiraId: string = '') {
		const newTracking = this.trackingService.add(jiraId, this.selectedDay);
	}
	ngOnInit() {

	}

}
