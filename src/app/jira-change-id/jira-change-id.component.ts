import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';

import { ITracking } from '../models/tracking.interface';
import { IJiraCase } from '../models/jira-case.interface';
import { IJiraFilter } from '../models/jira-filter.interface';

import { TrackingService } from '../services/tracking.service';
import { JiraCaseService } from '../services/jira-case.service';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'jira-change-id',
	templateUrl: './jira-change-id.component.html',
	styleUrls: ['./jira-change-id.component.scss']
})
export class JiraChangeId implements OnInit {

	private searchTerms = new Subject<string>();
	@ViewChild('searchBox') el: ElementRef;


	@Input()
	public tracking: ITracking;

	public favorites: IJiraCase[] = [];
	public assignedToMe: IJiraCase[] = [];
	public searchResult: IJiraCase[] = [];

	public filters: IJiraFilter[] = [];

	constructor(private jiraCaseService: JiraCaseService,
		private trackingService: TrackingService,
		private dialog: MdDialog) {

		this.jiraCaseService.getCasesAssinedTo().subscribe((body: any) => {
			if (body.issues !== undefined) {
				this.assignedToMe.splice(0, this.assignedToMe.length);
				body.issues.forEach(item => {
					const jiracase: IJiraCase = {} as IJiraCase;
					jiracase.jiraId = item.key;
					jiracase.title = item.fields.summary;
					this.assignedToMe.push(jiracase);
				});

			}
		});

		this.jiraCaseService.updateFilterResults();

	}


	clickJiraCase(jiraCase: IJiraCase) {
		this.tracking.jiraId = jiraCase.jiraId;
		this.tracking.title = jiraCase.title;
		this.trackingService.update(this.tracking);
		this.dialog.closeAll();
	}
	public search(evn, term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit() {
		this.assignedToMe = this.jiraCaseService.assignedToMe;
		this.filters = this.jiraCaseService.filters;

		this.searchTerms
			.debounceTime(250)
			.distinctUntilChanged()
			.switchMap(term => term ? this.jiraCaseService.search(term) : Observable.of<any[]>([])).subscribe((body: any) => {

				this.searchResult.splice(0, this.searchResult.length);
				if (body.issues !== undefined) {
					body.issues.forEach(item => {
						const jiracase: IJiraCase = {} as IJiraCase;
						jiracase.jiraId = item.key;
						jiracase.title = item.fields.summary;
						this.searchResult.push(jiracase);
					});
				}
			});

	}

}
