import { Component, OnInit } from '@angular/core';

import { IJiraCase } from '../models/jira-case.interface';
import { IJiraFilter } from '../models/jira-filter.interface';

import { JiraCaseService } from '../services/jira-case.service';

@Component({
	selector: 'app-jira-filter-admin',
	templateUrl: './jira-filter-admin.component.html',
	styleUrls: ['./jira-filter-admin.component.scss']
})
export class JiraFilterAdminComponent implements OnInit {

	public filters: IJiraFilter[] = [];

	constructor(private jiraCaseService: JiraCaseService) {

		this.filters = this.jiraCaseService.filters;

	}

	public remove(index: number) {
		this.jiraCaseService.filters.splice(index, 1);
	}

	public add() {
		const filter = {} as IJiraFilter;
		filter.id = '';
		filter.title = '';
		filter.issues = [];
		this.filters.push(filter);
	}

	public save() {
		this.jiraCaseService.saveFilters();
	}

	ngOnInit() {
	}

}
