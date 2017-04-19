import { Injectable } from '@angular/core';

import { TrackingInterface } from '../models/tracking.interface';
import { JiraCaseInterface } from '../models/jira-case.interface';
import { TrackInterface } from '../models/track.interface';

import { GUID } from '../helpers/GUID';
import { DateHelper } from '../helpers/date-helper';

import { StorageService } from '../services/storage.service';
import { DatabaseService } from '../services/database.service';

import { TrackingStatus } from '../models/tracking.status';


@Injectable()
export class TrackingService {


	public currentTracking: TrackingInterface = { _id: '000' } as TrackingInterface;
	public trackings: TrackingInterface[] = [];

	public track:TrackInterface  = { active:false } as TrackInterface;

	constructor(private storageService: StorageService, private databaseService: DatabaseService) {

		this.getTrackings();

	}

	public getTrackings() {
		// const trackings = this.storageService.read<TrackingInterface[]>('trackings');
		this.databaseService.findAll().then( (trackings) => {
			const tracks = trackings !== null ? trackings as TrackingInterface[] : [];
			tracks.forEach( (item) => {
				this.trackings.push(item);
			});
		});
		//this.trackings = trackings !== null ? trackings as TrackingInterface[] : [];
	}

	public add(jiraId: string = '', date: Date = null): TrackingInterface {
		const tracking: TrackingInterface = {} as TrackingInterface;
		tracking._id = new GUID().toString();
		tracking.comment = '';
		tracking.jiraId = jiraId;
		tracking.status = TrackingStatus.READY;
		const newDate = date != null ? date : new Date();
		tracking.date = new DateHelper().dateToDateString(newDate);
		tracking.time = 0;

		this.trackings.push(tracking);
		this.databaseService.insert(tracking);
		this.start(tracking._id);

		return tracking;
	}

	public delete(id: string) {
		if (id === this.currentTracking._id) {
			this.pause(id);
		}

		this.trackings.forEach((tracking, index) => {
			if (id === tracking._id) {
				this.trackings.splice(index, 1);
				this.databaseService.remove(tracking._id);
			}
		});

	}

	public updateJiraCase(tracking: TrackingInterface, jiraCase:JiraCaseInterface) {
		this.trackings.forEach((tr) => {
			if (tracking._id === tr._id) {
				tracking.jiraId = jiraCase.jiraId;
				tracking.title = jiraCase.title;
				this.saveTracking(tracking);
			}
		});
	}


	public updateTime(tracking: TrackingInterface, seconds: number) {
		this.trackings.forEach((tr) => {
			if (tracking._id === tr._id) {
				tracking.time = seconds;
				this.saveTracking(tracking);
			}
		});
	}

	private saveTracking(tracking:TrackingInterface) {
		this.databaseService.update(tracking);
	}

	public updateComment(id: string, comment: string) {
		this.trackings.forEach((tracking) => {
			if (id === tracking._id) {
				tracking.comment = comment;
				this.saveTracking(tracking);
			}
		});
	}

	private timer = null;
	public start(id: string) {
		this.trackings.forEach((tracking) => {
			if (id === tracking._id) {

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
		this.currentTracking = { _id: '000' } as TrackingInterface;
		clearInterval(this.timer);
	}

	private updateTimer() {
		this.track.now = new Date();
		this.track.diff = (this.track.now.getTime() - this.track.start.getTime()) / 1000;
		this.track.total = this.track.original + this.track.diff;

		this.currentTracking.time = Math.floor(this.track.total);
		this.saveTracking(this.currentTracking);
	}

}
