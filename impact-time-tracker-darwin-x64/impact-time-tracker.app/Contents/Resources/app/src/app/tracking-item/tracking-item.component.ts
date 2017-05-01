import { Component, OnInit,  Input } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ITracking } from '../models/tracking.interface';

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
	public tracking: ITracking;

	constructor(public trackingService: TrackingService, public dialog: MdDialog) {

	}

	public openSelectJiraIdDialog(tracking: ITracking) {
		const instance = this.dialog.open(ChangeJiraIdComponent, {
			height: '80%',
			width: '80%',
		});
		instance.componentInstance['tracking'] = tracking;
	}

	public openChangeTimeDialog(tracking: ITracking) {
		this.trackingService.pause(tracking._id);
		const instance = this.dialog.open(ChangeTimeComponent);
		instance.componentInstance['tracking'] = tracking;
	}

	public editComment(tracking: ITracking) {
		this.trackingService.update(tracking);
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
