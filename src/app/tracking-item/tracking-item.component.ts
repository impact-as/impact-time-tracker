import { Component, OnInit,  Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingInterface } from '../models/tracking.interface';

import { TrackingService } from '../services/tracking.service';

import { ChangeTimeComponent } from '../change-time/change-time.component';
import { ChangeJiraIdComponent } from '../change-jira-id/change-jira-id.component';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
	selector: 'app-tracking-item',
	templateUrl: './tracking-item.component.html',
	styleUrls: ['./tracking-item.component.scss']
})
export class TrackingItemComponent implements OnInit {

	@Input()
	public tracking: TrackingInterface;

	constructor(public trackingService: TrackingService, public dialog: MdDialog) {

	}

	public openSelectJiraIdDialog(tracking: TrackingInterface) {
		const instance = this.dialog.open(ChangeJiraIdComponent);
		instance.componentInstance['tracking'] = tracking;
	}

	public openChangeTimeDialog(tracking: TrackingInterface) {
		this.trackingService.pause(tracking._id);
		const instance = this.dialog.open(ChangeTimeComponent);
		instance.componentInstance['tracking'] = tracking;
		// instance.afterClosed().subscribe( () => {
		// 	this.updateDayHours();
		// });
	}

	public editComment(tracking: TrackingInterface) {
		this.trackingService.updateComment(tracking._id, tracking.comment);
	}

	public toggleTracking(id: string, start: boolean) {
		if (start) {
			this.trackingService.start(id);
		} else {
			this.trackingService.pause(id);
		}

	}

	public deleteTracking(id: string) {
		const instance = this.dialog.open(ConfirmDeleteComponent);
		instance.componentInstance['id'] = id;
	}
	ngOnInit() {
	}

}
