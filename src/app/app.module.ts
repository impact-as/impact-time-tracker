import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import 'chart.js';
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
import { TrackerChangeTimeComponent } from './tracker-change-time/tracker-change-time.component';
import { JiraChangeId } from './jira-change-id/jira-change-id.component';
import { HeaderComponent } from './header/header.component';
import { WeekgraphComponent } from './weekgraph/weekgraph.component';
import { TrackerConfirmDeleteComponent } from './tracker-confirm-delete/tracker-confirm-delete.component';
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
		TrackerChangeTimeComponent,
		JiraChangeId,
		HeaderComponent,
		WeekgraphComponent,
		TrackerConfirmDeleteComponent,
		TrackingItemComponent,
		JiraFilterAdminComponent
	],
	entryComponents: [
		TrackerChangeTimeComponent,
		JiraChangeId,
		WeekgraphComponent,
		TrackerConfirmDeleteComponent,
		TrackingItemComponent,
		JiraFilterAdminComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		BrowserAnimationsModule,
		ChartsModule,
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
