import { Component, OnInit, Input } from '@angular/core';

import { TrackingService } from '../services/tracking.service';

@Component({
	selector: 'app-weekgraph',
	templateUrl: './weekgraph.component.html',
	styleUrls: ['./weekgraph.component.scss']
})
export class WeekgraphComponent implements OnInit {


	public chartLabels: string[] = [];
	public chartData: number[] = [];

	public projects: any[] = [];
	public chartType: string = 'doughnut';
	public chartOptions: any = {
		legend: {
			display:false
		}
	};

	public hoursRecorded: number;
	constructor(private trackingService: TrackingService) {

		this.projects = this.groupBy(this.trackingService.getTrackingsPrWeek());
		this.projects.forEach( item => {
			const timeFormatted = Math.round( (item.time / 60 / 60) * 100) / 100;
			this.chartData.push(timeFormatted);
			this.chartLabels.push(`${item.jiraId}: ${item.title}`);
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
