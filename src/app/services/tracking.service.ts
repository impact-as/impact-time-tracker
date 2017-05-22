import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ITracking } from '../models/tracking.interface';
import { IJiraCase } from '../models/jira-case.interface';
import { ITrack } from '../models/track.interface';

import { GUID } from '../helpers/GUID';
import { DateHelper } from '../helpers/date-helper';

import { StorageService } from '../services/storage.service';
import { DatabaseService } from '../services/database.service';

import { TrackingStatus } from '../models/tracking.status';

export enum ChangeType {
	ADDED = 0,
	DELETED = 1,
	UPDATED = 2

}


@Injectable()
export class TrackingService {


	public currentTracking: ITracking = { _id: '000' } as ITracking;
	public trackings: ITracking[] = [];
	public totalDayHours: number = 0;

	public updateSubscriber: BehaviorSubject<ChangeType> = new BehaviorSubject(0);

	public track: ITrack  = { active: false } as ITrack;

	constructor(private storageService: StorageService, private databaseService: DatabaseService) {
		let active = <string>this.storageService.read('tracker-active');

		this.getTrackings().then(() => {
			this.start(active);
		});
	}

	public getTrackings() {
		return this.databaseService.findAll().then( (trackings) => {
			const tracks = trackings !== null ? trackings as ITracking[] : [];
			tracks.forEach( (item) => {
				this.trackings.push(item);
			});

			this.updateSubscriber.next(ChangeType.UPDATED);
		});
	}

	public add(jiraId: string = '', date: Date = null): ITracking {
		const tracking: ITracking = {} as ITracking;
		tracking._id = new GUID().toString();
		tracking.comment = '';
		tracking.jiraId = jiraId;
		tracking.status = TrackingStatus.READY;
		const newDate = date != null ? date : new Date();
		tracking.date = new DateHelper().dateToDateString(newDate);
		tracking.time = 0;

		this.trackings.push(tracking);
		this.databaseService.insert(tracking);
		this.updateSubscriber.next(ChangeType.ADDED);
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
				this.updateSubscriber.next(ChangeType.DELETED);
			}
		});
	}

	public update(tracking: ITracking) {
		this.saveTracking(tracking);
		this.updateSubscriber.next(ChangeType.UPDATED);
	}

	public getHoursPrWeek() {
		const trackings = this.getTrackingsPrWeek();
		const sum = trackings.reduce( ( p, c ) => p + c.time, 0 );
		return sum;
	}

	public getTrackingsPrWeek() {
		const curr = new Date;
		const firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
		const lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
		const firstdayString = new DateHelper().dateToDateString(firstday);
		const lastdayString = new DateHelper().dateToDateString(lastday);
		return this.trackings.filter( (item: ITracking) => {
			return item.date >= firstdayString && item.date <= lastdayString;
		});
	}

	public getHoursPrDay(day: Date) {
		const dayString = new DateHelper().dateToDateString(day);
		const trackings = this.trackings.filter( (item: ITracking) => {
			return item.date === dayString;
		});
		const sum = trackings.reduce( ( p, c ) => p + c.time, 0 );
		return sum;
	}

	private saveTracking(tracking: ITracking) {
		this.databaseService.update(tracking);
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

				this.storageService.write('tracker-active', String(id));
			}
		});
	}

	public pause(id: string) {
		this.track.active = false;
		this.currentTracking = { _id: '000' } as ITracking;
		clearInterval(this.timer);
		this.storageService.write('tracker-active', '');
	}

	private updateTimer() {
		this.track.now = new Date();
		this.track.diff = (this.track.now.getTime() - this.track.start.getTime()) / 1000;
		this.track.total = this.track.original + this.track.diff;

		this.currentTracking.time = Math.floor(this.track.total);
		this.saveTracking(this.currentTracking);
		this.updateSubscriber.next(ChangeType.UPDATED);
	}

}
