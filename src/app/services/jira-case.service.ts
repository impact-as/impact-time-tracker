import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { StorageService } from './storage.service';
import { LoginService } from './login.service';

import { IJiraCase } from '../models/jira-case.interface';
import { IJiraFilter } from '../models/jira-filter.interface';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class JiraCaseService {

	public jiraApiHost: string = 'https://jira.impact.dk/rest/api/2';

	public favorites: IJiraCase[] = [];
	public assignedToMe: IJiraCase[] = [];
	private searchItems: IJiraCase[] = [];
	public filters: IJiraFilter[] = [];


	constructor(private http: Http,
		private storageService: StorageService,
		private loginService: LoginService) {


		this.filters = this.storageService.read<IJiraFilter[]>('jirafilters') || [];

	}

	public saveFilters() {
		this.storageService.write('jirafilters', this.filters);
	}

	public updateFilterResults() {

		this.filters.forEach( (filter: IJiraFilter, index) => {

			this.getCasesByFilterId(filter.id).subscribe((body: any) => {
				if (body.issues !== undefined) {
					filter.issues = [];
					body.issues.forEach(item => {
						const jiracase: IJiraCase = {} as IJiraCase;
						jiracase.jiraId = item.key;
						jiracase.title = item.fields.summary;
						filter.issues.push(jiracase);
					});

				}
			});

		} );
	}

	public getCasesAssinedTo(user: string = 'currentuser()'): Observable<any[]> {
		return this.http.get(`${this.jiraApiHost}/search?jql=assignee=${user}%20AND%20status%20%3D%20Open+order+by+createddate`)
			.map(response => response.json())
			.catch( (error) => {
				return this.handleError(error);
			});
	}


	public getCasesByFilterId(filter: string): Observable<any[]> {
		return this.http.get(`${this.jiraApiHost}/search?jql=filter=${filter}`)
			.map(response => response.json())
			.catch( (error) => {
				return this.handleError(error);
			});
	}

	public handleError(error: any) {
		if (error.status === 400) {
			this.loginService.openLoginPrompt();
		}
		return Observable.throw(error.message);
	}

	public search(term: string): Observable<any[]> {
		let summarySearch = this.http.get(`${this.jiraApiHost}/search?jql=summary~"${term}"+order+by+createddate`).map(response => response.json()),
		keySearch = this.http.get(`${this.jiraApiHost}/search?jql=key="${term}"+order+by+createddate`).map(response => response.json()).catch(response => Observable.of({issues:[]}));
		
		return Observable.forkJoin([summarySearch,keySearch]).map(res => {
				res[0].issues = res[0].issues.concat(res[1].issues);
				return res[0];
			}
		);
		
		//return this.http.get(`${this.jiraApiHost}/search?jql=summary~"${term}"+order+by+createddate`).map(response => response.json());		
	}
}
