import { ChangeType } from './change.type';
import { ITracking } from './tracking.interface';

export interface ITempoBean { //API 8.0.0 http://tempo.io/doc/timesheets/api/rest/latest/#1799179586
    issue: {        
        remainingEstimateSeconds?: number;
        key: string; // JIRA id
        projectId?: number; // maybe worklog id        
    };
    author?: { //Ignored in PUT operations        
        name: string;
    }; 
    id?: number;
    comment: string; //Description of the worklog
    dateStarted: string; //YYYY-MM-ddT00:00:00.000+0000
    billedSeconds?: number; //Billed time in seconds
    timeSpentSeconds: number; //Time worked in seconds
    
    //Attributes for sync - todo: move to separate common interfacer for tracking & bean
    queuedUp?: boolean;
    changeType?: ChangeType;
    tracking?: ITracking;

    forAdding?: boolean;
    forUpdating?: boolean;
    forDeleting?: boolean;
}