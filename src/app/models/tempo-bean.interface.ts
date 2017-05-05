export interface ITempoBean { //API 8.0.0 http://tempo.io/doc/timesheets/api/rest/latest/#1799179586
    issue:{        
        remainingEstimateSeconds?:number
        key:string // JIRA id
        projectId?:number // maybe worklog id        
    }
    author?:{ //Ignored in PUT operations        
        name:string
    }    
    comment:string //Description of the worklog
    dateStarted:string //YYYY-MM-ddT00:00:00.000+0000
    billedSeconds?:number //Billed time in seconds
    timeSpentSeconds:number //Time worked in seconds
}