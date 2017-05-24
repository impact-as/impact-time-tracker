import { Component, OnInit, DoCheck, OnChanges, Input, KeyValueDiffers } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ITracking } from '../models/tracking.interface';

import { TrackingService } from '../services/tracking.service';
import { Observable } from 'rxjs/Observable';

import { TrackerChangeTimeComponent } from '../tracker-change-time/tracker-change-time.component';
import { JiraChangeId } from '../jira-change-id/jira-change-id.component';
import { TrackerConfirmDeleteComponent } from '../tracker-confirm-delete/tracker-confirm-delete.component';
import { Constants } from '../constants/constants';

@Component({
	selector: 'tracking-item',
	templateUrl: './tracking-item.component.html',
	styleUrls: ['./tracking-item.component.scss']	
})
export class TrackingItemComponent implements DoCheck, OnChanges, OnInit {

	@Input() public tracking: ITracking;
	public visible: boolean;
	differ: any;
	constructor(public trackingService: TrackingService, public dialog: MdDialog, private differs: KeyValueDiffers) {
		this.differ = differs.find({}).create(null);
	}

	public openSelectJiraIdDialog(tracking: ITracking) {
		const instance = this.dialog.open(JiraChangeId, {
			height: '80%',
			width: '80%',
		});

		instance.componentInstance['tracking'] = this.tracking;
	}

	public openChangeTimeDialog() {
		const instance = this.dialog.open(TrackerChangeTimeComponent);
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
		const instance = this.dialog.open(TrackerConfirmDeleteComponent);
		instance.componentInstance['id'] = this.tracking._id;
	}

	ngOnInit() {		
		this.visible = this.trackingService.trackingVisible(this.tracking);
	}
	ngOnChanges() {
		this.visible = this.trackingService.trackingVisible(this.tracking);		
	}
	ngDoCheck() {
		//This can't relly be the way to get angular to detect object mutaion in trackings array!		
		var changes = this.differ.diff(this.tracking);
		if(changes) {			
			changes.forEachChangedItem(change => {
				this.ngOnChanges();
			});			
		} 	
	}
}
