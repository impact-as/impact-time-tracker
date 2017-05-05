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
		let dummyBean: ITempoBean = {			
			author:{
				name:"mm"				
			},
			issue:{
				key:"IMP-24",
				//remainingEstimateSeconds:3600				
			},			
			comment:"api test 3",
			dateStarted: "2017-05-04T00:00:00.000",
			timeSpentSeconds:7200
		};		
		this.tempoService.postWorklogBean(dummyBean);
		this.synchronizing = !this.synchronizing;
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
