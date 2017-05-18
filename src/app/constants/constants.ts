import { TrackingStatus } from '../models/tracking.status';
export class Constants {
	public static tempoApiHost: string = 'https://jira.impact.dk/rest/tempo-timesheets/3';
    public static sessionApiHost: string = 'https://jira.impact.dk/rest/auth/latest/session/';
    public static visibleDays: number = 15;
    public static hiddenStatuses: TrackingStatus[] = [TrackingStatus.DELETED];
}