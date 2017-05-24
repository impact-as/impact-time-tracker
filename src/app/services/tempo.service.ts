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
	}

	public putWorklogBean(bean: ITempoBean){
		return this.http.put(`${this.tempoApiHost}/worklogs/` + bean.id, bean);
	}

	public deleteWorklog(worklogId: number){
		return this.http.delete(`${this.tempoApiHost}/worklogs/` + worklogId);
	}

	public getWorklogs(user:string, interval = Constants.visibleDays - 1) {
		let dateHelper = new DateHelper();

		let now = new Date(),
		nowDate = dateHelper.dateToRequestDate(now),		
		fromDate = dateHelper.dateToRequestDate(new Date(now.getTime() - dateHelper.daysToMs(interval / 2))),
		toDate = dateHelper.dateToRequestDate(new Date(now.getTime() + dateHelper.daysToMs(interval / 2)));

		let dateQuery: string = "dateFrom=" + fromDate.dateString + "&dateTo=" + toDate.dateString; 
		return this.http.get(`${this.tempoApiHost}/worklogs/?${dateQuery}&username=${user}`);		
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
