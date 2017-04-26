import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { StorageService } from './storage.service';
import { LoginService } from './login.service';

import { JiraCaseInterface } from '../models/jira-case.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class JiraCaseService {

	public jiraApiHost: string = 'https://jira.impact.dk/rest/api/2';

	public favorites: JiraCaseInterface[] = [];
	public assignedToMe: JiraCaseInterface[] = [];
	private searchItems: JiraCaseInterface[] = [];

	constructor(private http: Http,
		private storageService: StorageService,
		private loginService: LoginService) {


	}

	public getAssigneeCases(user: string) {

		this.http.get(`${this.jiraApiHost}/search?jql=assignee=${user}%20AND%20status%20%3D%20Open`).subscribe((res) => {
			if (res.status === 200) {
				const body = res.json();
				const cases: JiraCaseInterface[] = [];
				this.assignedToMe.splice(0, this.assignedToMe.length);
				body.issues.forEach(item => {
					const jiracase: JiraCaseInterface = {} as JiraCaseInterface;
					jiracase.jiraId = item.key;
					jiracase.title = item.fields.summary;
					this.assignedToMe.push(jiracase);
				});
			}
		}, (error) => {
			if (error.status === 400) {
				this.loginService.openLoginPrompt();
			}
		});
	}

	public search(term: string): Observable<any[]> {
		return this.http.get(`${this.jiraApiHost}/search?jql=summary~"${term}"`).map(response => response.json());
	}

}
