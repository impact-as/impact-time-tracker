import { Injectable } from '@angular/core';
import { Observable,  } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { TrackingInterface } from '../models/tracking.interface';
import { JiraCaseInterface } from '../models/jira-case.interface';
import { TrackInterface } from '../models/track.interface';

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


	public currentTracking: TrackingInterface = { _id: '000' } as TrackingInterface;
	public trackings: TrackingInterface[] = [];
	public totalDayHours: number = 0;

	public updateSubscriber: BehaviorSubject<ChangeType> = new BehaviorSubject(0);

	public track: TrackInterface  = { active: false } as TrackInterface;

	constructor(private storageService: StorageService, private databaseService: DatabaseService) {

		this.getTrackings();

	}

	public getTrackings() {
		this.databaseService.findAll().then( (trackings) => {
			const tracks = trackings !== null ? trackings as TrackingInterface[] : [];
			tracks.forEach( (item) => {
				this.trackings.push(item);
			});

			this.updateSubscriber.next(ChangeType.UPDATED);
		});
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

	public update(tracking: TrackingInterface) {
		this.saveTracking(tracking);
		this.updateSubscriber.next(ChangeType.UPDATED);
	}

	public getHoursPrWeek() {
		const curr = new Date;
		const firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
		const lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
		const firstdayString = new DateHelper().dateToDateString(firstday);
		const lastdayString = new DateHelper().dateToDateString(lastday);

		const trackings = this.trackings.filter( (item: TrackingInterface) => {
			return item.date >= firstdayString && item.date <= lastdayString;
		});

		const sum = trackings.reduce( ( p, c ) => p + c.time, 0 );
		return sum;
	}

	public getHoursPrDay(day: Date) {
		const dayString = new DateHelper().dateToDateString(day);
		const trackings = this.trackings.filter( (item: TrackingInterface) => {
			return item.date === dayString;
		});
		const sum = trackings.reduce( ( p, c ) => p + c.time, 0 );
		return sum;
	}

	private saveTracking(tracking: TrackingInterface) {
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
		this.updateSubscriber.next(ChangeType.UPDATED);
	}

}
