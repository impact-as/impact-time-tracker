import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { StorageService } from './storage.service';
import { LoginService } from './login.service';

import { JiraCaseInterface } from '../models/jira-case.interface';

@Injectable()
export class JiraCaseService {

	public favorites: JiraCaseInterface[] = [];
	public assignedToMe: JiraCaseInterface[] = [];

	private searchItems: JiraCaseInterface[] = [];

	constructor(private http: Http, 
				private storageService: StorageService, 
				private loginService:LoginService) {


	}

	public getAssigneeCases(user:string) {

		this.http.get(`https://jira.impact.dk/rest/api/2/search?jql=assignee=${user}%20AND%20status%20%3D%20Open`).subscribe( (res) => {
			if(res.status === 200) {
				const body = res.json();
				const cases: JiraCaseInterface[] = [];
				body.issues.forEach( item => {
					const jiracase: JiraCaseInterface = {} as JiraCaseInterface;
					jiracase.jiraId = item.key;
					jiracase.title = item.fields.summary;
					this.assignedToMe.push(jiracase);
				});
			} 
		}, (error) => {
			if(error.status === 400) {
				this.loginService.openLoginPrompt();
			}
		});
	}

	public search(term) {
		term = term.toLowerCase();


		return new Promise((resolve, reject) => {

			if(term !== '') {

				this.http.get(`https://jira.impact.dk/rest/api/2/search?jql=summary~"${term}"`).subscribe( (res) => {
					if(res.status === 200) {
						const body = res.json();
						const cases: JiraCaseInterface[] = [];
						body.issues.forEach( item => {
							const jiracase: JiraCaseInterface = {} as JiraCaseInterface;
							jiracase.jiraId = item.key;
							jiracase.title = item.fields.summary;
							cases.push(jiracase);
						});
						resolve(cases);
					}
				}, (error) => {
					if(error.status === 400) {
						this.loginService.openLoginPrompt();
					}
					reject();
				});

			} else {
				reject();
			}

		});

	}

}
