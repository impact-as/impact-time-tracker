import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingInterface } from '../models/tracking.interface';
import { JiraCaseInterface } from '../models/jira-case.interface';

import { TrackingService } from '../services/tracking.service';
import { JiraCaseService } from '../services/jira-case.service';

@Component({
	selector: 'app-change-jira-id',
	templateUrl: './change-jira-id.component.html',
	styleUrls: ['./change-jira-id.component.scss']
})
export class ChangeJiraIdComponent implements OnInit {

	@Input()
	public tracking: TrackingInterface;

	public searchTerm: string = '';

	public favorites: JiraCaseInterface[];
	public assignedToMe: JiraCaseInterface[];
	public searchResult: JiraCaseInterface[];

	constructor(private jiraCaseService: JiraCaseService, 
				private trackingService:TrackingService,
				private dialog:MdDialog) { }

	clickJiraCase(jiraCase: JiraCaseInterface) {
		this.trackingService.updateJiraCase(this.tracking, jiraCase);
		this.dialog.closeAll();
	}

	searchFieldChange() {
		this.searchResult = this.jiraCaseService.search(this.searchTerm);
	}

	ngOnInit() {
		this.assignedToMe = this.jiraCaseService.assignedToMe;
		this.favorites = this.jiraCaseService.favorites;

	}

}
