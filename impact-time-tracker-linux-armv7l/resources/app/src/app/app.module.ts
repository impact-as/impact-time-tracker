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
import { WeekgraphComponent } from './weekgraph/weekgraph.component';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { TrackingItemComponent } from './tracking-item/tracking-item.component';

import { DatabaseService } from './services/database.service';
import { LoginService } from './services/login.service';
import { TempoService } from './services/tempo.service';
import { JiraFilterAdminComponent } from './jira-filter-admin/jira-filter-admin.component';

@NgModule({
	declarations: [
		AppComponent,
		TrackerComponent,
		FormatTimePipe,
		FilterDatePipe,
		ChangeTimeComponent,
		ChangeJiraIdComponent,
		HeaderComponent,
		WeekgraphComponent,
		ConfirmDeleteComponent,
		TrackingItemComponent,
		JiraFilterAdminComponent
	],
	entryComponents: [
		ChangeTimeComponent,
		ChangeJiraIdComponent,
		WeekgraphComponent,
		ConfirmDeleteComponent,
		TrackingItemComponent,
		JiraFilterAdminComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		MaterialModule.forRoot()
	],
	providers: [
		TrackingService,
		StorageService,
		JiraCaseService,
		DatabaseService,
		LoginService,
		TempoService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
