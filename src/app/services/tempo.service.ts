import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ITempoBean } from '../models/tempo-bean.interface';
import { Constants } from '../constants/constants';
import { DateHelper } from '../helpers/date-helper';

@Injectable()
export class TempoService {	
	public tempoApiHost:string = Constants.tempoApiHost;
	
	constructor(private http: Http) { }

	public postWorklogBean(bean: ITempoBean){
		return this.http.post(`${this.tempoApiHost}/worklogs/`, bean);
		
		// this.http.post(`${this.tempoApiHost}/worklogs/`, bean).subscribe((res) => {
		// 	if (res.status === 200) {
		// 		console.log(res);
		// 	}
		// }, (error) => {
		// 	console.warn(error);
		// });
	}

	public getWorklogs(user:string, interval = Constants.visibleDays - 1) {
		let dateHelper = new DateHelper();

		let now = new Date(),
		nowDate = dateHelper.dateToRequestDate(now),		
		fromDate = dateHelper.dateToRequestDate(new Date(now.getTime() - dateHelper.daysToMs(interval / 2))),
		toDate = dateHelper.dateToRequestDate(new Date(now.getTime() + dateHelper.daysToMs(interval / 2)));

		let dateQuery: string = "dateFrom=" + fromDate.dateString + "&dateTo=" + toDate.dateString; 
		return this.http.get(`${this.tempoApiHost}/worklogs/?${dateQuery}&username=${user}`);
		// this.http.get(`${this.tempoApiHost}/worklogs/?dateFrom=2017-04-01&dateTo=2017-04-21&username=${user}`).subscribe((res) => {		
		// 	if (res.status === 200) {
		// 		console.log(res);
		// 	}
		// }, (error) => {
			
		// });
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
