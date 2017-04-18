import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';

import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';

import { TrackingService } from './services/tracking.service';
import { StorageService } from './services/storage.service';
import { JiraCaseService } from './services/jira-case.service';
import { FormatTimePipe } from './pipes/format-time.pipe';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { ChangeTimeComponent } from './change-time/change-time.component';
import { ChangeJiraIdComponent } from './change-jira-id/change-jira-id.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
	declarations: [
		AppComponent,
		TrackerComponent,
		FormatTimePipe,
		FilterDatePipe,
		ChangeTimeComponent,
		ChangeJiraIdComponent,
		HeaderComponent
	],
	entryComponents: [
		ChangeTimeComponent,
		ChangeJiraIdComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MaterialModule.forRoot()
	],
	providers: [TrackingService, StorageService, JiraCaseService],
	bootstrap: [AppComponent]
})
export class AppModule { }
