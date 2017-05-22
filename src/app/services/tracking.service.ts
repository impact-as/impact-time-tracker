import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { ITracking } from '../models/tracking.interface';
import { IJiraCase } from '../models/jira-case.interface';
import { ITrack } from '../models/track.interface';

import { GUID } from '../helpers/GUID';
import { DateHelper } from '../helpers/date-helper';

import { StorageService } from '../services/storage.service';
import { DatabaseService } from '../services/database.service';

import { TrackingStatus } from '../models/tracking.status';

import { ChangeType } from '../models/change.type';
import { Constants } from '../constants/constants';

@Injectable()
export class TrackingService {


	public currentTracking: ITracking = { _id: '000' } as ITracking;
	public trackings: ITracking[] = [];	
	public totalDayHours: number = 0;

	public updateSubscriber: BehaviorSubject<ChangeType> = new BehaviorSubject(0);
	public trackingSubscriber: BehaviorSubject<ITracking> = new BehaviorSubject(this.currentTracking);

	public track: ITrack  = { active: false } as ITrack;

	constructor(private storageService: StorageService, private databaseService: DatabaseService) {

		this.getTrackings();

	}

	private cleanTrackings(){
		this.trackings = [];
	}

	public trackingVisible(tracking: ITracking): boolean{
		return (!Constants.hiddenStatuses.find(status => status === tracking.status));
	}

	public getTrackings() {
		this.cleanTrackings();
		this.databaseService.findAll().then( (trackings) => {
			const tracks = trackings !== null ? trackings as ITracking[] : [];			
			tracks.forEach( (item) => {				
				// if (!Constants.hiddenStatuses.find(status => status === item.status)){
				// 	this.visibleTrackings.push(item);
				// }
				this.trackings.push(item);
			});

			this.updateSubscriber.next(ChangeType.UPDATED);
		});
	}

	public add(jiraId: string = '', date: Date = null, comment:string = ''): ITracking {
		const tracking: ITracking = {} as ITracking;
		tracking._id = new GUID().toString();		
		tracking.jiraId = jiraId;
		tracking.status = TrackingStatus.READY;
		const newDate = date != null ? date : new Date();
		tracking.date = new DateHelper().dateToDateString(newDate);
		tracking.dateObj = newDate;
		tracking.time = 0;

		this.trackings.push(tracking);
		this.databaseService.insert(tracking);
		this.updateSubscriber.next(ChangeType.ADDED);
		this.start(tracking._id);		
		return tracking;
	}

	public addMultiple(trackings: Array<ITracking>): Array<ITracking> {
		trackings.forEach(t => {
			t._id = new GUID().toString();
			t.status = TrackingStatus.READY;
			this.trackings.push(t);
		});
		this.databaseService.insert(trackings);
		this.updateSubscriber.next(ChangeType.ADDED);
		return trackings;
	}

	public delete(id: string, forReal: boolean = false) {
		if (id === this.currentTracking._id) {
			this.pause(id);
		}

		this.trackings.forEach((tracking, index) => {
			if (id === tracking._id) {
				if (!tracking.worklogId) {// just delete non synchronized trackings
					forReal = true;
				}
				if (forReal) {
					this.trackings.splice(index, 1);
					this.databaseService.remove(tracking._id);
				}
				else {
					tracking.status = TrackingStatus.DELETED;
					//tracking = {...tracking, status:TrackingStatus.DELETED};
					// let newObj = Object.assign({},tracking);
					// newObj.status = TrackingStatus.DELETED;
					// tracking = Object.assign({}, newObj);
					this.update(tracking);
				}
				//this.updateSubscriber.next(ChangeType.DELETED);
				this.trackingSubscriber.next(tracking);
			}
		});		
	}
	
	public deleteMultiple(trackings) {
		this.trackings = this.trackings.filter((tracking:ITracking) => {
			return !trackings.find((toKeep:ITracking) =>{
				return toKeep._id === tracking._id;
			});
		});		
		trackings.forEach((tracking, index) => {
			this.pause(tracking._id);						
			this.databaseService.remove(tracking._id);
			//tracking.status = TrackingStatus.DELETED;
			this.updateSubscriber.next(ChangeType.DELETED);			
		});
		return this.trackings;
	}
	
	public deleteAll() {
		this.trackings.forEach((tracking, index) => {
			this.pause(tracking._id);			
			this.databaseService.remove(tracking._id);
			this.updateSubscriber.next(ChangeType.DELETED);			
		});
		this.cleanTrackings();		
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
			return this.trackingVisible(item) && item.date >= firstdayString && item.date <= lastdayString;
		});
	}

	public getHoursPrDay(day: Date) {
		const dayString = new DateHelper().dateToDateString(day);
		const trackings = this.trackings.filter( (item: ITracking) => {
			return this.trackingVisible(item) && item.date === dayString;
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
			}
		});
	}
	public pause(id: string) {
		this.track.active = false;
		this.currentTracking = { _id: '000' } as ITracking;
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
