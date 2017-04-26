import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingInterface } from '../models/tracking.interface';
import { TrackingService } from '../services/tracking.service';

@Component({
	selector: 'app-tracker',
	templateUrl: './tracker.component.html',
	styleUrls: ['./tracker.component.scss'],

})
export class TrackerComponent implements OnInit {

	public availableDays:Date[] = [];
	public currentDay: Date;
	public selectedDay: Date;
	public trackings: TrackingInterface[];
	public totalDayHours: number = 0;

	public editCommentId: string = '';
	public editCommentVal: string = '';

	constructor(public trackingService: TrackingService, public dialog: MdDialog) {

		this.currentDay = new Date();
		this.selectedDay = new Date();

		this.trackings = this.trackingService.trackings;

		this.addDays();

		// update dayhours - FIX this at some point
		setTimeout( () => {
			this.updateDayHours();
		}, 1000);
		setInterval( () => {
			this.updateDayHours();
		}, 60 * 1000);

	}

	public addDays() {
		for (let i = 0; i < 15; i++) {
			const myDate = new Date();
			myDate.setDate(this.selectedDay.getDate() + (-7 + i));
			this.availableDays.push(myDate);
		}
	}

	public gotoDate(date:Date = new Date()) {
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
