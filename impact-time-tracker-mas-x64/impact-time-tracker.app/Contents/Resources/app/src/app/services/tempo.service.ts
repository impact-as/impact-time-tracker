import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class TempoService {

	public tempoApiHost: string = 'https://jira.impact.dk/rest/tempo-timesheets/3';

	constructor(private http: Http) { }

	public getWorklogs() {
		this.http.get(`${this.tempoApiHost}/worklogs/?dateFrom=2017-04-01&dateTo=2017-04-21&username=mst`).subscribe((res) => {
			if (res.status === 200) {
				console.log(res);
			}
		}, (error) => {

		});
	}

}
