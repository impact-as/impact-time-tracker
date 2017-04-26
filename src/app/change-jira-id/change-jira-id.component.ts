import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';

import { TrackingInterface } from '../models/tracking.interface';
import { JiraCaseInterface } from '../models/jira-case.interface';

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
	selector: 'app-change-jira-id',
	templateUrl: './change-jira-id.component.html',
	styleUrls: ['./change-jira-id.component.scss']
})
export class ChangeJiraIdComponent implements OnInit {

	private searchTerms = new Subject<string>();
	@ViewChild('searchBox') el: ElementRef;


	@Input()
	public tracking: TrackingInterface;

	public favorites: JiraCaseInterface[];
	public assignedToMe: JiraCaseInterface[];
	public searchResult: JiraCaseInterface[] = [];

	constructor(private jiraCaseService: JiraCaseService,
				private trackingService: TrackingService,
				private dialog: MdDialog) {

			this.jiraCaseService.getAssigneeCases('currentuser()');

				}

	clickJiraCase(jiraCase: JiraCaseInterface) {
		this.trackingService.updateJiraCase(this.tracking, jiraCase);
		this.dialog.closeAll();
	}
	public search(evn, term: string): void {
		this.searchTerms.next(term);
	}

	ngOnInit() {
		this.assignedToMe = this.jiraCaseService.assignedToMe;
		this.favorites = this.jiraCaseService.favorites;

		this.searchTerms
			.debounceTime(250)
			.distinctUntilChanged()
			.switchMap(term => term ? this.jiraCaseService.search(term) : Observable.of<any[]>([])).subscribe( (items) => {
				
				this.searchResult.splice(0, this.searchResult.length);
				let body:any = items;
				if(body.issues !== undefined) {
					body.issues.forEach( item => {
						const jiracase: JiraCaseInterface = {} as JiraCaseInterface;
						jiracase.jiraId = item.key;
						jiracase.title = item.fields.summary;
						this.searchResult.push(jiracase);
					});
				}
			});

	}

}
