import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

@Injectable()
export class LoginService {

	constructor(public dialog: MdDialog) {

	}

	public openLoginPrompt() {
		this.dialog.closeAll();
		window.open('https://jira.impact.dk/login.jsp', '_blank');
	}

}
