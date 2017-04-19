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
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
                            - 3 + (week1.getDay() + 6) % 7) / 7);
    }

}