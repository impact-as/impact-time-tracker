import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatTime'
})
export class FormatTimePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		let secs = Math.round(value);
		let hours = Math.floor(secs / (60 * 60));
		let minutes = Math.floor((secs % (60 * 60)) / 60);

		let hours_formatted = hours.toString();
		let minutes_formatted = minutes.toString();
		if(hours <10) {
			hours_formatted = '0' + hours_formatted;
		}
		if(minutes <10) {
			minutes_formatted = '0' + minutes_formatted;
		}

		return `${hours_formatted}:${minutes_formatted}`;
	}

}
