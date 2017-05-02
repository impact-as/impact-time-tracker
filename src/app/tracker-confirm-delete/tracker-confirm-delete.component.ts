import { Component, OnInit, Input } from '@angular/core';

import { MdDialog } from '@angular/material';
import { TrackingService } from '../services/tracking.service';

@Component({
	selector: 'app-confirm-delete',
	templateUrl: './tracker-confirm-delete.component.html',
	styleUrls: ['./tracker-confirm-delete.component.css']
})
export class TrackerConfirmDeleteComponent implements OnInit {

	@Input()
	public id: string;

	constructor(private trackingService: TrackingService,
		private dialog: MdDialog) { }


	public delete() {
		this.trackingService.delete(this.id);
		this.dialog.closeAll();
	}
	ngOnInit() {
	}

}
