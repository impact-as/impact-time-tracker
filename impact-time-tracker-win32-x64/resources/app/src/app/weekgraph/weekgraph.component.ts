import { Component, OnInit, Input } from '@angular/core';

import { TrackingService } from '../services/tracking.service';

@Component({
  selector: 'app-weekgraph',
  templateUrl: './weekgraph.component.html',
  styleUrls: ['./weekgraph.component.scss']
})
export class WeekgraphComponent implements OnInit {


  public hoursRecorded:number;
  constructor(private trackingService:TrackingService) { }

  ngOnInit() {

      this.hoursRecorded = this.trackingService.getHoursPrWeek();
  }

}
