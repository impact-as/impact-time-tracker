import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ITempoBean } from '../models/tempo-bean.interface';

@Injectable()
export class TempoService {

	public tempoApiHost: string = 'https://jira.impact.dk/rest/tempo-timesheets/3';

	constructor(private http: Http) { }

	public postWorklogBean(bean: ITempoBean){
		this.http.post(`${this.tempoApiHost}/worklogs/`, bean).subscribe((res) => {
			if (res.status === 200) {
				console.log(res);
			}
		}, (error) => {
			console.warn(error);
		});
	}

	public getWorklogs(user:string) {
		this.http.get(`${this.tempoApiHost}/worklogs/?dateFrom=2017-04-01&dateTo=2017-04-21&username=${user}`).subscribe((res) => {
			if (res.status === 200) {
				console.log(res);
			}
		}, (error) => {
			
		});
	}

	public getApprovalStatus(user: string, date: Date = new Date()) {
		const dateString = date.toISOString().substring(0, 10);
		this.http.get(`${this.tempoApiHost}/timesheet-approval/current/?dateFrom=${dateString}&username=${user}`).subscribe((res) => {
			if (res.status === 200) {
				console.log(res);
			}
		}, (error) => {

		});
	}

}
