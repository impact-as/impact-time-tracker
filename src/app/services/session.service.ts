import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Constants } from '../constants/constants';

@Injectable()
export class SessionService {
	constructor(private http: Http) { }

	public getUser() {		
		return this.http.get(Constants.sessionApiHost);
	}
}
