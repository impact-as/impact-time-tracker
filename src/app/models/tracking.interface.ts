import { TrackingStatus } from './tracking.status';
import { ChangeType } from './change.type';

export interface ITracking {
	_id: string;
	comment: string;
	jiraId: string;
	title: string;
	time: number;
	status: TrackingStatus;
	date: string;
	dateObj: Date;
	worklogId?: number;
	
	//Attributes for sync - todo: move to separate common interfacer for tracking & bean
	queuedUp?: boolean;
	changeType?: ChangeType;

    forAdding?: boolean;
	forUpdating?: boolean;
    forDeleting?: boolean;
	lastChange?: string
}
