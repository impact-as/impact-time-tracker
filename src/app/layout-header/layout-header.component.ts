import { Component, OnInit, HostListener } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingService } from '../services/tracking.service';
import { ITracking } from '../models/tracking.interface';

import { ITempoBean } from '../models/tempo-bean.interface';
import { TempoService } from '../services/tempo.service';

import { WeekgraphComponent } from '../weekgraph/weekgraph.component';
import { JiraFilterAdminComponent } from '../jira-filter-admin/jira-filter-admin.component';

@Component({
	selector: 'app-header',
	templateUrl: './layout-header.component.html',
	styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {
	public synchronizing:boolean = false;	
	public status:string = 'offline';	

	@HostListener("window:offline", [])
	onOffline() {
		this.checkNetwork();
	}


	@HostListener("window:online", [])
	onLine() {
		this.checkNetwork();
	}

	constructor(public trackingService: TrackingService, private dialog: MdDialog, private tempoService: TempoService) {
	}

	public synchronize(){
		this.trackingService.trackings.forEach(tracking => {
			this.synchronizing = true;
			let aBean: ITempoBean = {			
				author:{
					name:"mm"
				},
				issue:{
					key:tracking.jiraId
					//remainingEstimateSeconds:3600
				},			
				comment:tracking.comment,
				dateStarted: tracking.dateObj.toISOString(),
				timeSpentSeconds: tracking.time		
			};

			this.tempoService.postWorklogBean(aBean).subscribe((res) => {
				this.synchronizing = false;
				if (res.status === 200) {
					console.log(res);
				}
				}, (error) => {
					console.warn(error);
				});
		});				
	}

	//temporary function for testing
	public deleteAllTrackings() {
		//console.log("trackings", this.trackingService.deleteAll());
		var worklogObserver = this.tempoService.getWorklogs("mm").subscribe((res) => {		
			if (res.status === 200) {
				console.log(res);
				window["worklogs"] = res.json();		
			}
		}, (error) => {
			
		});		
		window["trackings"] = this.trackingService.trackings;		
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
	}

}
