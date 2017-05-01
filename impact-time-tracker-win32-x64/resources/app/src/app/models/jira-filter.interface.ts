import { IJiraCase } from './jira-case.interface';

export interface IJiraFilter {
	id: string;
	title: string;
	issues: IJiraCase[];
}
