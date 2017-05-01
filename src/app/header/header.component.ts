import { Component, OnInit, HostListener } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingService } from '../services/tracking.service';
import { ITracking } from '../models/tracking.interface';

import { WeekgraphComponent } from '../weekgraph/weekgraph.component';
import { JiraFilterAdminComponent } from '../jira-filter-admin/jira-filter-admin.component';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public online: boolean = false;

	@HostListener("window:offline", [])
	onOffline() {
		this.online = navigator.onLine;
	}


	@HostListener("window:online", [])
	onLine() {
		this.online = navigator.onLine;
	}

	constructor(public trackingService: TrackingService,
		private dialog: MdDialog) {


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
		this.online = navigator.onLine;
	}

}
