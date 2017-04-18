export class DateHelper {

    public dateToDateString(date:Date = new Date()) {
        let mm = date.getMonth() + 1;
        let dd = date.getDate();
        let formattedDate = date.getFullYear() + 
          (mm>9 ? '' : '0') + mm.toString() + 
          (dd>9 ? '' : '0') + dd.toString();

          return formattedDate;
    }


}