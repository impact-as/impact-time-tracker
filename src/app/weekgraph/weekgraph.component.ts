import { Component, OnInit, Input } from '@angular/core';

import { TrackingService } from '../services/tracking.service';

@Component({
	selector: 'app-weekgraph',
	templateUrl: './weekgraph.component.html',
	styleUrls: ['./weekgraph.component.scss']
})
export class WeekgraphComponent implements OnInit {


	public doughnutChartLabels: string[] = [];
	public doughnutChartData: number[] = [];

	public projects: any[] = [];
	public doughnutChartType: string = 'doughnut';

	public hoursRecorded: number;
	constructor(private trackingService: TrackingService) {

		this.projects = this.groupBy(this.trackingService.getTrackingsPrWeek());
		this.projects.forEach( item => {
			this.doughnutChartData.push( Math.round(item.time / 60) / 60 );
			this.doughnutChartLabels.push(item.jiraId);
		});

	}

	public groupBy(list) {
		return list.reduce(function (res, obj) {
			if (!(obj.jiraId in res)) {
				res.__array.push(res[obj.jiraId] = obj);
			} else {
				res[obj.jiraId].time += obj.time;
				res[obj.jiraId].jiraId = obj.jiraId;
			}
			return res;
		}, { __array: [] }).__array;
	}

	ngOnInit() {

		this.hoursRecorded = this.trackingService.getHoursPrWeek();
	}

}
