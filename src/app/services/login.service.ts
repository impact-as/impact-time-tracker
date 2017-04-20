import { Injectable } from '@angular/core';
import { MdDialog } from '@angular/material';

@Injectable()
export class LoginService {

  constructor(public dialog: MdDialog) { 

  }

  public openLoginPrompt() {
     window.open('https://jitra.impact.dk', '_blank');
  }

}
