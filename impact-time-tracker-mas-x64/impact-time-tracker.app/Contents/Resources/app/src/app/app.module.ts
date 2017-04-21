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

import { DatabaseService } from './services/database.service';
import { LoginService } from './services/login.service';
import { WeekgraphComponent } from './weekgraph/weekgraph.component';

@NgModule({
	declarations: [
		AppComponent,
		TrackerComponent,
		FormatTimePipe,
		FilterDatePipe,
		ChangeTimeComponent,
		ChangeJiraIdComponent,
		HeaderComponent,
		WeekgraphComponent
	],
	entryComponents: [
		ChangeTimeComponent,
		ChangeJiraIdComponent,
		WeekgraphComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MaterialModule.forRoot()
	],
	providers: [TrackingService, StorageService, JiraCaseService, DatabaseService, LoginService],
	bootstrap: [AppComponent]
})
export class AppModule { }