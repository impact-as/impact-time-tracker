export class DateHelper {

    public dateToDateString(date:Date = new Date()) {
        let mm = date.getMonth() + 1;
        let dd = date.getDate();
        let formattedDate = date.getFullYear() + 
          (mm>9 ? '' : '0') + mm.toString() + 
          (dd>9 ? '' : '0') + dd.toString();

          return formattedDate;
    }


    public getWeekNumber(date:Date = new Date()):number {
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    }

    public daysToMs (days: number) {
		return days*24*60*60*1000;
	}

	public dateToRequestDate (date: Date){				
		let year = date.getFullYear(),
		month = date.getMonth() + 1,
		day = date.getDate();
		return {
			year: year,
			month : month,
			day: day, 
			dateString: year + "-" + month + "-" + day
		}
	}
}