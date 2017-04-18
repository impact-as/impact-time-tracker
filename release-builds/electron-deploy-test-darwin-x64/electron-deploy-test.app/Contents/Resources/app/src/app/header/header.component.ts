import { Component, OnInit, HostListener } from '@angular/core';

import { TrackingService } from '../services/tracking.service';
import { TrackingInterface } from '../models/tracking.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	public online:boolean = false;

	@HostListener("window:offline", [])
	onOffline() {
		this.online = navigator.onLine;
	}


	@HostListener("window:online", [])
	onLine() {
		this.online = navigator.onLine;
	}

  constructor(public trackingService:TrackingService) { 


	}

  ngOnInit() {
		this.online = navigator.onLine;
  }

}
