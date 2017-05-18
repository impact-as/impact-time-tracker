import { Component, OnInit, HostListener } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingService } from '../services/tracking.service';
import { ITracking } from '../models/tracking.interface';

import { ITempoBean } from '../models/tempo-bean.interface';
import { TempoService } from '../services/tempo.service';

import { WeekgraphComponent } from '../weekgraph/weekgraph.component';
import { JiraFilterAdminComponent } from '../jira-filter-admin/jira-filter-admin.component';

import { DateHelper } from '../helpers/date-helper';
import { ChangeType } from '../models/change.type';
import { TrackingStatus } from '../models/tracking.status';
import { Observable } from 'rxjs/Observable';

import { SessionService } from '../services/session.service';


@Component({
	selector: 'app-header',
	templateUrl: './layout-header.component.html',
	styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
	public synchronizing:boolean = false;	
	public status:string = 'offline';	
	public user: any;

	@HostListener("window:offline", [])
	onOffline() {
		this.checkNetwork();
	}


	@HostListener("window:online", [])
	onLine() {
		this.checkNetwork();
	}

	constructor(public trackingService: TrackingService, private dialog: MdDialog, private tempoService: TempoService, private sessionService: SessionService) {
	}

	private worklogToTracking(worklog:ITempoBean, changeType: ChangeType):ITracking {
		let dateHelper = new DateHelper();
		let tracking = <ITracking>{};		
		tracking.dateObj = new Date(worklog.dateStarted);
		tracking.jiraId = worklog.issue.key;
		tracking.time = worklog.timeSpentSeconds;
		tracking.date = dateHelper.dateToDateString(tracking.dateObj);		
		tracking.comment = worklog.comment;
		tracking.worklogId = worklog.id;
		tracking.changeType = changeType;
		return tracking;
	}

	private trackingToWorklog(tracking: ITracking, changeType: ChangeType):ITempoBean {
		let dateHelper = new DateHelper();
		let worklog = <ITempoBean>{};
		worklog.author = { name:this.user.name };
		worklog.issue = { key: tracking.jiraId};		
		worklog.timeSpentSeconds = tracking.time;
		worklog.comment = tracking.comment;
		worklog.dateStarted = dateHelper.dateStringToDateObject(tracking.date).toISOString();
		worklog.changeType = changeType;
		worklog.tracking = tracking;
		worklog.id = tracking.worklogId;
		return worklog;
	}

	private getTrackings() {
		return this.trackingService.trackings;
	}

	private getWorklogs() {	
		let sessionObservable = (typeof this.user === "undefined") ? this.sessionService.getUser().map(res => {
			this.user = res.json();
			return this.user;
		}).switchMap(user => this.tempoService.getWorklogs(user.name)).map(res => res) : this.tempoService.getWorklogs(this.user.name);
		
		return sessionObservable;
	}

	private isomorphicEntries(tracking:ITracking, worklog:ITempoBean){
		let dateHelper = new DateHelper();
		let trackingDateObj = dateHelper.dateStringToDateObject(tracking.date);
		let worklogDateObj = new Date(worklog.dateStarted);
		let sameDate = trackingDateObj.toISOString() === worklogDateObj.toISOString();
		let sameComment = tracking.comment === worklog.comment;
		let sameJira = tracking.jiraId === worklog.issue.key;
		return sameDate && sameComment && sameJira;		
	}

	private timeSummation(tracking:ITracking, worklog:ITempoBean) {
		let sum = tracking.time + worklog.timeSpentSeconds;
		tracking.time = sum;
		worklog.timeSpentSeconds = sum;
		return {tracking:tracking, worklog:worklog};
	}
	
	private mergeTrackings(localTrackings, serverWorklogs): {localChanges:Array<ITracking>, serverChanges:Array<ITempoBean>} {
		let localChanges: Array<ITracking> = [],
		serverChanges: Array<ITempoBean> = [];
					
		if (serverWorklogs.length > 0) {			
			// Look for local previously synchronized trackings that are not on server -> delete locally
			localTrackings.filter((tracking:ITracking) => typeof tracking.worklogId !== "undefined").
			forEach((tracking:ITracking) => {
				if (!serverWorklogs.find((worklog:ITempoBean) => worklog.id === tracking.worklogId)) {
					tracking.queuedUp = true;
					tracking.changeType = ChangeType.DELETED;
					localChanges.push(tracking);
				}
			});

			serverWorklogs.forEach((worklog:ITempoBean) => {
				// Worklog doesn't exist on client -> add locally
				if (localTrackings.length === 0 || !localTrackings.filter(t => !t.queuedUp).find(t => worklog.id === t.worklogId)) {
					localChanges.push(this.worklogToTracking(worklog, ChangeType.ADDED));
				}
				
				localTrackings.forEach((tracking:ITracking) => {				
					// if (this.isomorphicEntries(tracking, worklog)){ // Entries are isomorphic -> update locally and on server
					// 	tracking.worklogId = worklog.id;
					// 	worklog.forAdding = true;
					// 	tracking.forUpdating = true;
					// 	this.timeSummation(tracking, worklog);
					// 	localChanges.push(tracking);
					// 	serverChanges.push(worklog);
					// }
					// else { // Entry doesn't exist locally, so create
					// 	localChanges.push(this.worklogToTracking(worklog));
					// }

					// Already handled
					if (tracking.queuedUp) {
						return;
					}					
					
					// Tracking is local only -> put on server
					if (!tracking.worklogId) { 
						tracking.queuedUp = true;						
						serverChanges.push(this.trackingToWorklog(tracking,  ChangeType.ADDED));
						return;
					}				

					// Tracking has been synchronized before -> check for changes and update server if changed
					else if (tracking.worklogId === worklog.id){
						if (!this.isomorphicEntries(tracking, worklog)) {
							tracking.queuedUp = true;							
							serverChanges.push(this.trackingToWorklog(tracking, ChangeType.UPDATED));
							return;
						}
					}

					// Tracking has been synchronized and marked as deleted locally -> delete on server
					else if (tracking.status === TrackingStatus.DELETED) {
						tracking.queuedUp = true;
						serverChanges.push(this.trackingToWorklog(tracking, ChangeType.DELETED));
					}
					
				});
			});
		}
		// No worklogs returned from server -> push all, but delete previously synchronized trackings locally
		else {
			localTrackings.forEach((tracking:ITracking) => {
				if (typeof tracking.worklogId === "undefined") {
					serverChanges.push(this.trackingToWorklog(tracking, ChangeType.ADDED));
				}
				else {
					tracking.queuedUp = true;
					tracking.changeType = ChangeType.DELETED;
					localChanges.push(tracking);
				}
			});
		}
		return {
			localChanges: localChanges,
			serverChanges: serverChanges
		}
	}

	private updateChanges(localChanges:Array<ITracking>, serverChanges:Array<ITempoBean>){
		// Handle local changes

		// Add		
		let addChangesLocal = localChanges.filter(change => change.changeType === ChangeType.ADDED);
		if (addChangesLocal.length > 0){
			let addResult = this.trackingService.addMultiple(addChangesLocal);
		}		

		// Delete
		let deleteChangesLocal = localChanges.filter(change => change.changeType === ChangeType.DELETED);
		if (deleteChangesLocal.length > 0){
			let deleteResult = this.trackingService.deleteMultiple(deleteChangesLocal);
		}
		// Update		
		

		// Handle server changes
		// Add
		let addChangesServer = serverChanges.filter(change => change.changeType === ChangeType.ADDED);		
		let httpAddObservables = [];
		addChangesServer.forEach(worklog => {
			httpAddObservables.push(
				this.tempoService.postWorklogBean(worklog).map(response => {
					let responseObj = response.json();
					this.updateLocalWithSyncResult(responseObj, worklog.tracking);
					return responseObj;})
			);
		});
		Observable.forkJoin(httpAddObservables).subscribe(response => {
			console.log(response);
		})

		// Delete
		let deleteChangesServer = serverChanges.filter(change => change.changeType === ChangeType.UPDATED);		
		let httpDeleteObservables = [];
		deleteChangesServer.forEach(worklog => {
			httpUpdateObservables.push(
				this.tempoService.deleteWorklog(worklog.id).map(response => { return response.json(); })
			);
		});
		Observable.forkJoin(httpDeleteObservables).subscribe(response => {
			console.log(response);
		});

		// Update
		let updateChangesServer = serverChanges.filter(change => change.changeType === ChangeType.UPDATED);		
		let httpUpdateObservables = [];
		updateChangesServer.forEach(worklog => {
			httpUpdateObservables.push(
				this.tempoService.putWorklogBean(worklog).map(response => { return response.json(); })
			);
		});
		Observable.forkJoin(httpUpdateObservables).subscribe(response => {
			console.log(response);
		});

		this.synchronizing = false;
	}

	public updateLocalWithSyncResult(updateResult: ITempoBean, tracking: ITracking) {
		if (!tracking.worklogId) {
			tracking.worklogId = updateResult.id;
			this.trackingService.update(tracking);
		}
	}

	public synchronize(){
		this.synchronizing = true;
		this.getWorklogs().subscribe(results => {
			let changes = this.mergeTrackings(this.getTrackings(),results.json());
			this.updateChanges(changes.localChanges, changes.serverChanges);			
		}
		, error => console.log("Error getting tempo worklogs", error));		
		/*
		this.trackingService.trackings.forEach(tracking => {
			this.synchronizing = true;
			let aBean: ITempoBean = {			
				author:{
					name:"mm"
				},
				issue:{
					key:tracking.jiraId
					//remainingEstimateSeconds:0
				},			
				comment:tracking.comment,
				dateStarted: tracking.dateObj.toISOString(),
				timeSpentSeconds: tracking.time		
			};

			this.tempoService.postWorklogBean(aBean).subscribe((res) => {				
				if (res.status === 200) {
					console.log(res);
				}
				}, (error) => {
					console.warn(error);
				},() => {
					this.synchronizing = false;
				});
		});				
		*/
	}

	//temporary function for testing
	public testFunction(event) {
		this.getWorklogs();
		window["trackings"] = this.trackingService.trackings;
		if (event.shiftKey){
			console.log("deleting all trackings", this.trackingService.deleteAll());
			return;
		}
		
		var worklogObserver = this.tempoService.getWorklogs("mm").subscribe((res) => {		
			if (res.status === 200) {
				console.log(res);
				window["worklogs"] = res.json();		
			}
		}, (error) => {
			
		});				
	}

	public setSessionInfo(){
		this.sessionService.getUser().subscribe(res => { 
			this.user = res.json();
		}, err => 
		console.log(err)
		);
	}

	public checkNetwork() {
		this.status = navigator.onLine ? 'online' : 'offline';
	}

	public openWeekGraph() {
		const instance = this.dialog.open(WeekgraphComponent, {
			height: '80%',
			width: '80%',
		});
	}

	public openJiraFilterAdmin() {
		const instance = this.dialog.open(JiraFilterAdminComponent, {
			height: '80%',
			width: '80%',
		});
	}

	ngOnInit() {
		this.checkNetwork();
		this.setSessionInfo();
	}

}
