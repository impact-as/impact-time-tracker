import { Component, OnInit,  Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ITracking } from '../models/tracking.interface';

import { TrackingService } from '../services/tracking.service';

import { ChangeTimeComponent } from '../change-time/change-time.component';
import { JiraChangeId } from '../jira-change-id/jira-change-id.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
	selector: 'app-tracking-item',
	templateUrl: './tracking-item.component.html',
	styleUrls: ['./tracking-item.component.scss']
})
export class TrackingItemComponent implements OnInit {

	@Input()
	public tracking: ITracking;

	constructor(public trackingService: TrackingService, public dialog: MdDialog) {

	}

	public openSelectJiraIdDialog(tracking: ITracking) {
		const instance = this.dialog.open(JiraChangeId, {
			height: '80%',
			width: '80%',
		});

		instance.componentInstance['tracking'] = this.tracking;
	}

	public openChangeTimeDialog() {
		const instance = this.dialog.open(ChangeTimeComponent);
		instance.componentInstance['tracking'] = this.tracking;

		this.trackingService.pause(this.tracking._id);

	}

	public editComment() {
		this.trackingService.update(this.tracking);
	}

	public toggleTracking() {
		const start = !this.isCurrentTracking();

		if (start) {
			this.trackingService.start(this.tracking._id);
		} else {
			this.trackingService.pause(this.tracking._id);
		}

	}

	public isCurrentTracking():boolean {
		return this.tracking === this.trackingService.currentTracking;
	}

	public deleteTracking() {
		const instance = this.dialog.open(ConfirmDeleteComponent);
		instance.componentInstance['id'] = this.tracking._id;
	}
	ngOnInit() {
	}

}
