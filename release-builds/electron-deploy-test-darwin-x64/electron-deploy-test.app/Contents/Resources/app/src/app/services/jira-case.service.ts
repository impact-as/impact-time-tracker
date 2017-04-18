import { Injectable } from '@angular/core';

import { JiraCaseInterface } from '../models/jira-case.interface';

@Injectable()
export class JiraCaseService {

	public favorites: JiraCaseInterface[] = [];
	public assignedToMe: JiraCaseInterface[] = [];

	private searchItems: JiraCaseInterface[] = [];

	constructor() {
		this.generateDummyData();
	}

	public search(term) {
		term = term.toLowerCase();
		return this.searchItems.filter( item => { return item.jiraId.toLowerCase().indexOf(term) >= 0 || item.title.toLowerCase().indexOf(term) >= 0; });
	}

	public generateDummyData() {

		const jira1: JiraCaseInterface = { jiraId: 'IMP-12', title: 'Impact - ledelse' };
		const jira2: JiraCaseInterface = { jiraId: 'NEM-1523', title: 'Nemlig - bugfixing - error fetching website with no internet on machine' };
		const jira3: JiraCaseInterface = { jiraId: 'IMP-7', title: 'Impact - ferie' };
		const jira4: JiraCaseInterface = { jiraId: 'IMP-18', title: 'Impact - sygdom' };
		const jira5: JiraCaseInterface = { jiraId: 'IMP-11', title: 'Impact - barnets første sygedag' };
		const jira6: JiraCaseInterface = { jiraId: 'KAM-236', title: 'Kamstup - GTM Tracking for click on spot CTA buttons' };
		const jira7: JiraCaseInterface = { jiraId: 'KAUF-523', title: 'Kaufmann - Include OG tags on all page types' };

		this.favorites.push(jira1);
		this.favorites.push(jira2);
		this.favorites.push(jira3);
		this.favorites.push(jira4);
		this.favorites.push(jira5);

		this.assignedToMe.push(jira2);
		this.assignedToMe.push(jira6);
		this.assignedToMe.push(jira7);

		this.searchItems.push(jira1);
		this.searchItems.push(jira2);
		this.searchItems.push(jira3);
		this.searchItems.push(jira4);
		this.searchItems.push(jira5);
		this.searchItems.push(jira6);
		this.searchItems.push(jira7);
	}

}
