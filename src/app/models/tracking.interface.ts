import { TrackingStatus } from './tracking.status';

export interface ITracking {
	_id: string;
	comment: string;
	jiraId: string;
	title: string;
	time: number;
	status: TrackingStatus;
	date: string;
	dateObj: Date;
}
