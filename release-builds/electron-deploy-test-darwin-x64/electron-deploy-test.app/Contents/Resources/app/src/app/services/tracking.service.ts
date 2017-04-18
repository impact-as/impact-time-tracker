import { Injectable } from '@angular/core';

import { TrackingInterface } from '../models/tracking.interface';
import { JiraCaseInterface } from '../models/jira-case.interface'
import { TrackInterface } from '../models/track.interface';

import { GUID } from '../helpers/GUID';
import { DateHelper } from '../helpers/date-helper';

import { StorageService } from '../services/storage.service';

@Injectable()
export class TrackingService {


	public currentTracking: TrackingInterface = { id: "000" } as TrackingInterface;
	public trackings: TrackingInterface[];

	public track:TrackInterface  = { active:false } as TrackInterface;

	constructor(private storageService: StorageService) {

		this.trackings = this.getTrackings();
	}

	public getTrackings(): TrackingInterface[] {
		const trackings = this.storageService.read<TrackingInterface[]>('trackings');
		return trackings !== null ? trackings : [];
	}

	public add(jiraId: string = "", date: Date = null): TrackingInterface {
		let tracking: TrackingInterface = {} as TrackingInterface;
		tracking.id = new GUID().toString();
		tracking.comment = "";
		tracking.jiraId = jiraId;
		tracking.inSync = false;
		let newDate = date != null ? date : new Date();
		tracking.date = new DateHelper().dateToDateString(newDate);
		tracking.time = 0;

		this.trackings.push(tracking);
		this.pushToStorage();
		this.start(tracking.id);

		return tracking;
	}

	public delete(id: string) {
		if (id === this.currentTracking.id) {
			this.pause(id);
		}

		this.trackings.forEach((tracking, index) => {
			if (id === tracking.id) {
				this.trackings.splice(index, 1);
				this.pushToStorage();
			}
		});

	}

	public updateJiraCase(tracking: TrackingInterface, jiraCase:JiraCaseInterface) {
		this.trackings.forEach((tr) => {
			if (tracking.id === tr.id) {
				tracking.jiraId = jiraCase.jiraId;
				tracking.title = jiraCase.title;
				this.pushToStorage();
			}
		});
	}


	public updateTime(tracking: TrackingInterface, seconds: number) {
		this.trackings.forEach((tr) => {
			if (tracking.id === tr.id) {
				tracking.time = seconds;
				this.pushToStorage();
			}
		});
	}

	private pushToStorage() {
		this.storageService.write('trackings', this.trackings);
	}

	public updateComment(id: string, comment: string) {
		this.trackings.forEach((tracking) => {
			if (id === tracking.id) {
				tracking.comment = comment;
				this.pushToStorage();
			}
		});
	}

	private timer;
	public start(id: string) {
		this.trackings.forEach((tracking) => {
			if (id === tracking.id) {

				this.currentTracking = tracking;
				this.track.start = new Date();
				this.track.now = new Date();
				this.track.original = tracking.time;
				this.track.active = true;
				this.updateTimer();

				clearInterval(this.timer);
				this.timer = setInterval(this.updateTimer.bind(this), 1000);
			}
		});
	}
	public pause(id: string) {
		this.track.active = false;
		this.currentTracking = { id: "000" } as TrackingInterface;
		clearInterval(this.timer);
	}

	private updateTimer() {
		this.track.now = new Date();
		this.track.diff = (this.track.now.getTime() - this.track.start.getTime()) / 1000;
		this.track.total = this.track.original + this.track.diff;

		this.currentTracking.time = Math.floor(this.track.total);
		this.pushToStorage();
	}

}
