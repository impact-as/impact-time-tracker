import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingInterface } from '../models/tracking.interface';
import { TrackingService } from '../services/tracking.service';
import { ChangeTimeComponent } from '../change-time/change-time.component';
import { ChangeJiraIdComponent } from '../change-jira-id/change-jira-id.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

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


		// update dayhours
		setTimeout( () => {
			this.updateDayHours();
		}, 1000);
		setInterval( () => {
			this.updateDayHours();
		}, 60 * 1000);

	}

	public addDays() {
		for(let i = 0; i < 15; i++) {
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

	public openChangeTimeDialog(tracking: TrackingInterface) {
		this.trackingService.pause(tracking._id);
		const instance = this.dialog.open(ChangeTimeComponent);
		instance.componentInstance['tracking'] = tracking;
		instance.afterClosed().subscribe( () => {
			this.updateDayHours();
		});
	}

	public updateDayHours() {
		this.totalDayHours = this.trackingService.getHoursPrDay(this.selectedDay);
	}

	public openSelectJiraIdDialog(tracking: TrackingInterface) {
		const instance = this.dialog.open(ChangeJiraIdComponent, {
			height: '400px',
			width: '600px',
		});
		instance.componentInstance['tracking'] = tracking;
	}

	public editComment(tracking: TrackingInterface) {
		this.trackingService.updateComment(tracking._id, tracking.comment);
	}

	public toggleTracking(id: string, start: boolean) {
		if (start) {
			this.trackingService.start(id);
		} else {
			this.trackingService.pause(id);
		}

	}

	public deleteTracking(id: string) {
		const instance = this.dialog.open(ConfirmDeleteComponent);
		instance.componentInstance['id'] = id;
		// this.trackingService.delete(id);
	}

	public addNewTracking(jiraId: string = '') {
		const newTracking = this.trackingService.add(jiraId, this.selectedDay);
	}
	ngOnInit() {

	}

}
