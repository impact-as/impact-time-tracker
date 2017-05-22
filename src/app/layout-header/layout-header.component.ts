import { Component, OnInit, HostListener } from '@angular/core';
import { MdDialog } from '@angular/material';

import { SynchronizationService } from '../services/synchronization.service';

import { WeekgraphComponent } from '../weekgraph/weekgraph.component';
import { JiraFilterAdminComponent } from '../jira-filter-admin/jira-filter-admin.component';
import { SessionService } from '../services/session.service';

@Component({
	selector: 'app-header',
	templateUrl: './layout-header.component.html',
	styleUrls: ['./layout-header.component.scss']	
})
export class LayoutHeaderComponent implements OnInit {
	public synchronizing:boolean = false;	
	public synchronizationSuccess:boolean = false;	
	public synchronizationFail:boolean = false;	
	
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

	constructor(private dialog: MdDialog, private synchronizationService: SynchronizationService) {
	}

	private resetSyncIcon(){
		this.synchronizationSuccess = false;
		this.synchronizationFail = false;		
	}
	
	public synchronize(){
		if (!this.checkNetwork()){
			return;
		}
		this.resetSyncIcon();
		this.synchronizing = true;
		let syncObservable = this.synchronizationService.getWorklogs();		
		syncObservable.subscribe(results => {
			let changes = this.synchronizationService.mergeTrackings(this.synchronizationService.getTrackings(),results.json());
			this.synchronizationService.updateChanges(changes.localChanges, changes.serverChanges).subscribe(response => {
				console.log(response);
				this.synchronizing = false;
				this.synchronizationSuccess = true;
			});;			
		}
		, error => { 
			console.log("Error getting tempo worklogs", error);
			this.synchronizing = false;
			this.synchronizationFail = true;
		});		
	}	
	
	public checkNetwork() {
		this.status = navigator.onLine ? 'online' : 'offline';
		return navigator.onLine;
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

	//Function for testing
	public testFunction(event) {
		this.synchronizationService.testFunction(event);
	}

}
