import { Component, OnInit, Input } from '@angular/core';

import { TrackingInterface } from '../models/tracking.interface';
import { TrackingService } from '../services/tracking.service';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-change-time',
  templateUrl: './change-time.component.html',
  styleUrls: ['./change-time.component.css']
})
export class ChangeTimeComponent implements OnInit {

  @Input()
  public tracking: TrackingInterface;

  public hours: number;
  public minutes: number;

  constructor(private trackingService: TrackingService,
              private dialog:MdDialog) { }

  public saveTime() {
    this.tracking.time = (this.hours * 3600) + (this.minutes * 60);
    this.trackingService.updateTime(this.tracking, this.tracking.time);
    this.dialog.closeAll();
  }

  ngOnInit() {
    const hours = Math.floor(this.tracking.time / 3600);
    const minutes = Math.floor(this.tracking.time / 60) - (hours * 60);

    this.hours = hours;
    this.minutes = minutes;

  }

}
