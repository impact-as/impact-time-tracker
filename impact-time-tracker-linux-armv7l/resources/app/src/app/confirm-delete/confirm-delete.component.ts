import { Component, OnInit, Input } from '@angular/core';

import { MdDialog } from '@angular/material';
import { TrackingService } from '../services/tracking.service';

@Component({
	selector: 'app-confirm-delete',
	templateUrl: './confirm-delete.component.html',
	styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

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
