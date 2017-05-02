import { Component, OnInit, HostListener } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingService } from '../services/tracking.service';
import { ITracking } from '../models/tracking.interface';

import { WeekgraphComponent } from '../weekgraph/weekgraph.component';
import { JiraFilterAdminComponent } from '../jira-filter-admin/jira-filter-admin.component';

@Component({
	selector: 'app-header',
	templateUrl: './layout-header.component.html',
	styleUrls: ['./layout-header.component.scss']
})
export class LayoutHeaderComponent implements OnInit {

	public status:string = 'offline';

	@HostListener("window:offline", [])
	onOffline() {
		this.checkNetwork();
	}


	@HostListener("window:online", [])
	onLine() {
		this.checkNetwork();
	}

	constructor(public trackingService: TrackingService,
		private dialog: MdDialog) {


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
