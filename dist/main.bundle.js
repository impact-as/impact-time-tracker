webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 100;


/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(116);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.isDarkTheme = false;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(189),
        styles: [__webpack_require__(177)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tracker_tracker_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_tracking_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_jira_case_service__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_format_time_pipe__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_filter_date_pipe__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__change_time_change_time_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__change_jira_id_change_jira_id_component__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_database_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_login_service__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__weekgraph_weekgraph_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__tracker_tracker_component__["a" /* TrackerComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pipes_format_time_pipe__["a" /* FormatTimePipe */],
            __WEBPACK_IMPORTED_MODULE_13__pipes_filter_date_pipe__["a" /* FilterDatePipe */],
            __WEBPACK_IMPORTED_MODULE_14__change_time_change_time_component__["a" /* ChangeTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__change_jira_id_change_jira_id_component__["a" /* ChangeJiraIdComponent */],
            __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__weekgraph_weekgraph_component__["a" /* WeekgraphComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__change_time_change_time_component__["a" /* ChangeTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__change_jira_id_change_jira_id_component__["a" /* ChangeJiraIdComponent */],
            __WEBPACK_IMPORTED_MODULE_19__weekgraph_weekgraph_component__["a" /* WeekgraphComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_tracking_service__["a" /* TrackingService */], __WEBPACK_IMPORTED_MODULE_10__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_11__services_jira_case_service__["a" /* JiraCaseService */], __WEBPACK_IMPORTED_MODULE_17__services_database_service__["a" /* DatabaseService */], __WEBPACK_IMPORTED_MODULE_18__services_login_service__["a" /* LoginService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weekgraph_weekgraph_component__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = (function () {
    function HeaderComponent(trackingService, dialog) {
        this.trackingService = trackingService;
        this.dialog = dialog;
        this.online = false;
    }
    HeaderComponent.prototype.onOffline = function () {
        this.online = navigator.onLine;
    };
    HeaderComponent.prototype.onLine = function () {
        this.online = navigator.onLine;
    };
    HeaderComponent.prototype.openWeekGraph = function () {
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__weekgraph_weekgraph_component__["a" /* WeekgraphComponent */]);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.online = navigator.onLine;
    };
    return HeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* HostListener */])("window:offline", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onOffline", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* HostListener */])("window:online", []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeaderComponent.prototype, "onLine", null);
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(192),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GUID; });
var GUID = (function () {
    function GUID(str) {
        this.str = str || GUID.getNewGUIDString();
    }
    GUID.prototype.toString = function () {
        return this.str;
    };
    GUID.getNewGUIDString = function () {
        // your favourite guid generation function could go here
        // ex: http://stackoverflow.com/a/8809472/188246
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    };
    return GUID;
}());

//# sourceMappingURL=GUID.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingStatus; });
var TrackingStatus;
(function (TrackingStatus) {
    TrackingStatus[TrackingStatus["READY"] = 0] = "READY";
    TrackingStatus[TrackingStatus["INSYNC"] = 1] = "INSYNC";
    TrackingStatus[TrackingStatus["CLOSED"] = 2] = "CLOSED";
    TrackingStatus[TrackingStatus["ERROR"] = 3] = "ERROR";
})(TrackingStatus || (TrackingStatus = {}));
//# sourceMappingURL=tracking.status.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_date_helper__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDatePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterDatePipe = (function () {
    function FilterDatePipe() {
    }
    FilterDatePipe.prototype.transform = function (items, args) {
        var date = new __WEBPACK_IMPORTED_MODULE_1__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(args);
        return items.filter(function (item) { return item.date === date; });
    };
    return FilterDatePipe;
}());
FilterDatePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
        name: 'filterDate',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], FilterDatePipe);

//# sourceMappingURL=filter-date.pipe.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormatTimePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormatTimePipe = (function () {
    function FormatTimePipe() {
    }
    FormatTimePipe.prototype.transform = function (value, args) {
        var secs = Math.round(value);
        var hours = Math.floor(secs / (60 * 60));
        var minutes = Math.floor((secs % (60 * 60)) / 60);
        var hours_formatted = hours.toString();
        var minutes_formatted = minutes.toString();
        if (hours < 10) {
            hours_formatted = '0' + hours_formatted;
        }
        if (minutes < 10) {
            minutes_formatted = '0' + minutes_formatted;
        }
        return hours_formatted + ":" + minutes_formatted;
    };
    return FormatTimePipe;
}());
FormatTimePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* Pipe */])({
        name: 'formatTime'
    })
], FormatTimePipe);

//# sourceMappingURL=format-time.pipe.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_time_change_time_component__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_jira_id_change_jira_id_component__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrackerComponent = (function () {
    function TrackerComponent(trackingService, dialog) {
        var _this = this;
        this.trackingService = trackingService;
        this.dialog = dialog;
        this.availableDays = [];
        this.totalDayHours = 0;
        this.editCommentId = '';
        this.editCommentVal = '';
        this.currentDay = new Date();
        this.selectedDay = new Date();
        this.trackings = this.trackingService.trackings;
        this.addDays();
        // update dayhours
        setTimeout(function () {
            _this.updateDayHours();
        }, 1000);
        setInterval(function () {
            _this.updateDayHours();
        }, 60 * 1000);
    }
    TrackerComponent.prototype.addDays = function () {
        for (var i = 0; i < 15; i++) {
            var myDate = new Date();
            myDate.setDate(this.selectedDay.getDate() + (-7 + i));
            this.availableDays.push(myDate);
        }
    };
    TrackerComponent.prototype.gotoDate = function (date) {
        if (date === void 0) { date = new Date(); }
        var myDate = date;
        this.selectedDay = myDate;
        this.updateDayHours();
    };
    TrackerComponent.prototype.openChangeTimeDialog = function (tracking) {
        var _this = this;
        this.trackingService.pause(tracking._id);
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__change_time_change_time_component__["a" /* ChangeTimeComponent */]);
        instance.componentInstance['tracking'] = tracking;
        instance.afterClosed().subscribe(function () {
            _this.updateDayHours();
        });
    };
    TrackerComponent.prototype.updateDayHours = function () {
        this.totalDayHours = this.trackingService.getHoursPrDay(this.selectedDay);
    };
    TrackerComponent.prototype.openSelectJiraIdDialog = function (tracking) {
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__change_jira_id_change_jira_id_component__["a" /* ChangeJiraIdComponent */], {
            height: '400px',
            width: '600px',
        });
        instance.componentInstance['tracking'] = tracking;
    };
    TrackerComponent.prototype.editComment = function (tracking) {
        this.trackingService.updateComment(tracking._id, tracking.comment);
    };
    TrackerComponent.prototype.toggleTracking = function (id, start) {
        if (start) {
            this.trackingService.start(id);
        }
        else {
            this.trackingService.pause(id);
        }
    };
    TrackerComponent.prototype.deleteTracking = function (id) {
        this.trackingService.delete(id);
    };
    TrackerComponent.prototype.addNewTracking = function (jiraId) {
        if (jiraId === void 0) { jiraId = ''; }
        var newTracking = this.trackingService.add(jiraId, this.selectedDay);
    };
    TrackerComponent.prototype.ngOnInit = function () {
    };
    return TrackerComponent;
}());
TrackerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-tracker',
        template: __webpack_require__(193),
        styles: [__webpack_require__(175)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], TrackerComponent);

var _a, _b;
//# sourceMappingURL=tracker.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".jira-header {\n  padding-bottom: 20px; }\n\n.jira-item {\n  font-size: 12px;\n  cursor: pointer;\n  padding: 5px;\n  color: #999; }\n  .jira-item b {\n    font-size: 15px;\n    color: #666; }\n  .jira-item:hover {\n    background-color: #e2e2e2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.network {\n  vertical-align: middle; }\n  .network__sync {\n    font-size: 22px;\n    cursor: pointer;\n    vertical-align: middle;\n    color: #666; }\n\n.network-status {\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 3px;\n  background-color: orange;\n  color: white; }\n  .network-status_online {\n    background-color: #94C11E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, ".material-icons.md-dark {\n  color: rgba(0, 0, 0, 0.8); }\n\n.material-icons.md-dark.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n\na {\n  cursor: pointer; }\n\n.bottom-action-container {\n  padding: 20px; }\n\n.day-summary {\n  padding: 20px; }\n\n.state-button {\n  display: block;\n  text-align: center;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #e2e2e2; }\n  .state-button i {\n    font-size: 74px; }\n  .state-button__playing {\n    color: #94C11E; }\n\n.trackings {\n  padding: 0px 20px; }\n\n.tracking {\n  margin-bottom: 1px;\n  height: 94px;\n  position: relative;\n  border-top: 1px solid #e2e2e2; }\n  .tracking:first-child {\n    border-top: none; }\n  .tracking__info-container {\n    top: 15px;\n    bottom: 15px;\n    left: 120px;\n    right: 10px;\n    position: absolute; }\n  .tracking__title {\n    color: #999;\n    font-size: 11px;\n    padding-top: 5px;\n    font-weight: normal; }\n  .tracking__jira-id {\n    font-size: 25px;\n    font-weight: bold;\n    position: absolute;\n    bottom: 0px;\n    cursor: pointer; }\n    .tracking__jira-id_not-set {\n      font-weight: normal;\n      color: black;\n      font-size: 20px;\n      bottom: 5px; }\n  .tracking__comment {\n    left: 0px;\n    right: 20px;\n    top: 0px;\n    position: absolute; }\n  .tracking__comment-input {\n    width: calc(100% - 110px);\n    padding: 7px 10px;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid #e2e2e2; }\n    .tracking__comment-input_not-valid {\n      border: 1px solid rgba(208, 89, 33, 0.3); }\n  .tracking__time {\n    position: absolute;\n    right: 0px;\n    top: -5px;\n    font-size: 30px;\n    font-weight: bold;\n    cursor: pointer; }\n  .tracking__actions {\n    position: absolute;\n    bottom: 3px;\n    right: 0px; }\n    .tracking__actions_icon {\n      font-size: 18px; }\n    .tracking__actions a {\n      color: #CCC; }\n\n.date-navigation {\n  background-color: whitesmoke;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.days {\n  text-align: center;\n  width: 100%; }\n\n.day {\n  color: lightgray;\n  display: inline-block;\n  width: 55px;\n  text-align: center;\n  text-transform: uppercase; }\n  .day_current {\n    color: #CCC; }\n    .day_current .day__date {\n      background-color: #CCC;\n      color: white; }\n  .day_selected {\n    color: #17B9D6; }\n    .day_selected .day__date {\n      background-color: #17B9D6;\n      color: white; }\n  .day__date {\n    height: 45px;\n    width: 45px;\n    line-height: 45px;\n    display: inline-block;\n    border-radius: 50%;\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "\n<app-tracker></app-tracker>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class=\"jira-header\">\n  Valgt Jira ID:\n  <span [hidden]=\"tracking.jiraId === ''\">{{tracking.jiraId}}</span>\n  <span [hidden]=\"tracking.jiraId !== ''\">Intet valgt</span>\n</div>\n\n<md-input-container>\n  <input mdInput placeholder=\"Find Jira Case\" (keyup)=\"searchFieldChange()\" [(ngModel)]=\"searchTerm\">\n</md-input-container>\n\n<div [hidden]=\"searchTerm === ''\">\n      <div *ngFor=\"let item of searchResult\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n</div>\n\n<div [hidden]=\"searchTerm !== ''\">\n\n  <md-tab-group>\n    <!--<md-tab label=\"Favoritter\">\n      <div *ngFor=\"let item of favorites\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n    </md-tab>-->\n    \n    <md-tab label=\"Assignet til mig\">\n      <div *ngFor=\"let item of assignedToMe\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n    </md-tab>\n  </md-tab-group>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>\n  Rediger tiden\n  </h3>\n\n<form (ngSubmit)=\"saveTime()\">\n\n  <md-dialog-content>\n    <md-input-container>\n      <input mdInput type=\"number\" placeholder=\"timer\" [(ngModel)]=\"hours\" name=\"hours\" />\n    </md-input-container>\n\n    <md-input-container>\n      <input mdInput type=\"number\" placeholder=\"minutter\" [(ngModel)]=\"minutes\" name=\"minutes\" />\n    </md-input-container>\n\n  </md-dialog-content>\n\n\n  <md-dialog-actions style=\"float:right;\">\n    <button md-dialog-close md-button>Anuller</button>\n    <button md-raised-button color=\"primary\" (click)=\"saveTime()\">Opdater</button>\n  </md-dialog-actions>\n\n</form>"

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

module.exports = "\n  <md-toolbar color=\"dark\">\n\n    <span class=\"network\">\n      <i class=\"material-icons network__sync\">sync</i>\n      <span class=\"network-status network-status_online\" [hidden]=\"!online\">Online</span>\n      <span class=\"network-status\" [hidden]=\"online\">Offline</span>\n    </span>\n\n    <span class=\"app-toolbar-filler fill-remaining-space\"></span>\n\n    <a><i class=\"material-icons\" (click)=\"openWeekGraph()\">equalizer</i></a>\n\n    <span class=\"app-toolbar-filler fill-remaining-space\"></span>\n\n    <div [hidden]=\"!trackingService.track.active\">\n      <span>{{trackingService.currentTracking.jiraId}}</span><br />\n      <span class=\"blink_me\">{{trackingService.track.total | formatTime}}</span><br />    \n    </div>\n\n  </md-toolbar>\n"

/***/ }),

/***/ 193:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"date-navigation\">\n  <div class=\"days\">\n    <a *ngFor=\"let day of availableDays\" (click)=\"gotoDate(day)\" class=\"day\" [class.day_selected]=\"day.getDate() == selectedDay.getDate()\"[class.day_current]=\"day.getDate() == currentDay.getDate()\">\n      {{day | date:'EEE'}}\n      <span class=\"day__date\">{{day | date:'dd/MM'}}</span>\n      </a>\n  </div>\n</div>\n\n<div class=\"day-summary\">\n  Der er i alt reigstreret {{totalDayHours | formatTime}} timer for dagen\n</div>\n\n<div class=\"trackings\">\n  <div class=\"tracking\" *ngFor=\"let tracking of trackings | filterDate:selectedDay\">\n\n    <a class=\"state-button\" \n      [class.state-button__playing]=\"tracking._id === trackingService.currentTracking._id\" \n      (click)=\"toggleTracking(tracking._id, tracking._id !== trackingService.currentTracking._id)\">\n        <span [hidden]=\"tracking._id !== trackingService.currentTracking._id\"><i class=\"material-icons\">pause_circle_filled</i></span>\n        <span [hidden]=\"tracking._id === trackingService.currentTracking._id\"><i class=\"material-icons\">play_circle_filled</i></span>\n    </a>\n\n    <div class=tracking__info-container>\n\n      <div class=\"tracking__jira-id\" [class.tracking__jira-id_not-set]=\"tracking.jiraId === ''\" (click)=\"openSelectJiraIdDialog(tracking)\">\n        <span [hidden]=\"tracking.jiraId === ''\" >{{tracking.jiraId}} </span>\n        <span [hidden]=\"tracking.jiraId !== ''\" >Ingen Jira case </span>\n        <span class=\"tracking__title\">{{tracking.title}}</span>\n      </div>\n\n      <div class=\"tracking__comment\">\n        <input class=\"tracking__comment-input\" (blur)=\"editComment(tracking)\" [class.tracking__comment-input_not-valid]=\"tracking.comment === ''\" [(ngModel)]=\"tracking.comment\" />\n      </div>\n\n      <div class=\"tracking__time\" (click)=\"openChangeTimeDialog(tracking)\" [class.blink_me]=\"tracking._id === trackingService.currentTracking._id\">\n        {{tracking.time | formatTime}}\n      </div>\n\n      <div class=\"tracking__actions\">\n        <a><i class=\"material-icons tracking__actions_icon\">star</i></a>\n        <a [hidden]=\"tracking.jiraId === ''\" href=\"https://jira.impact.dk/browse/{{tracking.jiraId}}\" target=\"_blank\"><i class=\"material-icons tracking__actions_icon\">launch</i></a>\n        <a (click)=\"deleteTracking(tracking._id)\"><i class=\"material-icons tracking__actions_icon\">delete</i></a>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n\n<div class=\"bottom-action-container\">\n  <button md-raised-button color=\"primary\" (click)=\"addNewTracking()\">Start ny registrering</button>\n</div>\n"

/***/ }),

/***/ 194:
/***/ (function(module, exports) {

module.exports = "Timer du har registreret i denne uge<br />\n\n\n{{hoursRecorded  | formatTime}}"

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_GUID__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_date_helper__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_database_service__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_tracking_status__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackingService = (function () {
    function TrackingService(storageService, databaseService) {
        this.storageService = storageService;
        this.databaseService = databaseService;
        this.currentTracking = { _id: '000' };
        this.trackings = [];
        this.totalDayHours = 0;
        this.track = { active: false };
        this.timer = null;
        this.getTrackings();
    }
    TrackingService.prototype.getTrackings = function () {
        var _this = this;
        this.databaseService.findAll().then(function (trackings) {
            var tracks = trackings !== null ? trackings : [];
            tracks.forEach(function (item) {
                _this.trackings.push(item);
            });
        });
    };
    TrackingService.prototype.add = function (jiraId, date) {
        if (jiraId === void 0) { jiraId = ''; }
        if (date === void 0) { date = null; }
        var tracking = {};
        tracking._id = new __WEBPACK_IMPORTED_MODULE_1__helpers_GUID__["a" /* GUID */]().toString();
        tracking.comment = '';
        tracking.jiraId = jiraId;
        tracking.status = __WEBPACK_IMPORTED_MODULE_5__models_tracking_status__["a" /* TrackingStatus */].READY;
        var newDate = date != null ? date : new Date();
        tracking.date = new __WEBPACK_IMPORTED_MODULE_2__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(newDate);
        tracking.time = 0;
        this.trackings.push(tracking);
        this.databaseService.insert(tracking);
        this.start(tracking._id);
        return tracking;
    };
    TrackingService.prototype.delete = function (id) {
        var _this = this;
        if (id === this.currentTracking._id) {
            this.pause(id);
        }
        this.trackings.forEach(function (tracking, index) {
            if (id === tracking._id) {
                _this.trackings.splice(index, 1);
                _this.databaseService.remove(tracking._id);
            }
        });
    };
    TrackingService.prototype.updateJiraCase = function (tracking, jiraCase) {
        var _this = this;
        this.trackings.forEach(function (tr) {
            if (tracking._id === tr._id) {
                tracking.jiraId = jiraCase.jiraId;
                tracking.title = jiraCase.title;
                _this.saveTracking(tracking);
            }
        });
    };
    TrackingService.prototype.updateTime = function (tracking, seconds) {
        var _this = this;
        this.trackings.forEach(function (tr) {
            if (tracking._id === tr._id) {
                tracking.time = seconds;
                _this.saveTracking(tracking);
            }
        });
    };
    TrackingService.prototype.getHoursPrWeek = function () {
        var curr = new Date;
        var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
        var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
        var firstdayString = new __WEBPACK_IMPORTED_MODULE_2__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(firstday);
        var lastdayString = new __WEBPACK_IMPORTED_MODULE_2__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(lastday);
        var trackings = this.trackings.filter(function (item) {
            return item.date >= firstdayString && item.date <= lastdayString;
        });
        var sum = trackings.reduce(function (p, c) { return p + c.time; }, 0);
        return sum;
    };
    TrackingService.prototype.getHoursPrDay = function (day) {
        var dayString = new __WEBPACK_IMPORTED_MODULE_2__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(day);
        var trackings = this.trackings.filter(function (item) {
            return item.date === dayString;
        });
        var sum = trackings.reduce(function (p, c) { return p + c.time; }, 0);
        return sum;
    };
    TrackingService.prototype.saveTracking = function (tracking) {
        this.databaseService.update(tracking);
    };
    TrackingService.prototype.updateComment = function (id, comment) {
        var _this = this;
        this.trackings.forEach(function (tracking) {
            if (id === tracking._id) {
                tracking.comment = comment;
                _this.saveTracking(tracking);
            }
        });
    };
    TrackingService.prototype.start = function (id) {
        var _this = this;
        this.trackings.forEach(function (tracking) {
            if (id === tracking._id) {
                _this.currentTracking = tracking;
                _this.track.start = new Date();
                _this.track.now = new Date();
                _this.track.original = tracking.time;
                _this.track.active = true;
                _this.updateTimer();
                clearInterval(_this.timer);
                _this.timer = setInterval(_this.updateTimer.bind(_this), 1000);
            }
        });
    };
    TrackingService.prototype.pause = function (id) {
        this.track.active = false;
        this.currentTracking = { _id: '000' };
        clearInterval(this.timer);
    };
    TrackingService.prototype.updateTimer = function () {
        this.track.now = new Date();
        this.track.diff = (this.track.now.getTime() - this.track.start.getTime()) / 1000;
        this.track.total = this.track.original + this.track.diff;
        this.currentTracking.time = Math.floor(this.track.total);
        this.saveTracking(this.currentTracking);
    };
    return TrackingService;
}());
TrackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_database_service__["a" /* DatabaseService */]) === "function" && _b || Object])
], TrackingService);

var _a, _b;
//# sourceMappingURL=tracking.service.js.map

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(101);


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
    }
    StorageService.prototype.write = function (key, value) {
        if (value) {
            value = JSON.stringify(value);
        }
        localStorage.setItem(key, value);
    };
    StorageService.prototype.read = function (key) {
        var value = localStorage.getItem(key);
        if (value && value != "undefined" && value != "null") {
            return JSON.parse(value);
        }
        return null;
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeJiraIdComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChangeJiraIdComponent = (function () {
    function ChangeJiraIdComponent(jiraCaseService, trackingService, dialog) {
        this.jiraCaseService = jiraCaseService;
        this.trackingService = trackingService;
        this.dialog = dialog;
        this.searchTerm = '';
        this.jiraCaseService.getAssigneeCases('currentuser()');
    }
    ChangeJiraIdComponent.prototype.clickJiraCase = function (jiraCase) {
        this.trackingService.updateJiraCase(this.tracking, jiraCase);
        this.dialog.closeAll();
    };
    ChangeJiraIdComponent.prototype.searchFieldChange = function () {
        var _this = this;
        this.jiraCaseService.search(this.searchTerm).then(function (items) {
            _this.searchResult = items;
        });
    };
    ChangeJiraIdComponent.prototype.ngOnInit = function () {
        this.assignedToMe = this.jiraCaseService.assignedToMe;
        this.favorites = this.jiraCaseService.favorites;
    };
    return ChangeJiraIdComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__["TrackingInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__["TrackingInterface"]) === "function" && _a || Object)
], ChangeJiraIdComponent.prototype, "tracking", void 0);
ChangeJiraIdComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-change-jira-id',
        template: __webpack_require__(190),
        styles: [__webpack_require__(173)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__["a" /* JiraCaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__["a" /* JiraCaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _d || Object])
], ChangeJiraIdComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=change-jira-id.component.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeTimeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeTimeComponent = (function () {
    function ChangeTimeComponent(trackingService, dialog) {
        this.trackingService = trackingService;
        this.dialog = dialog;
    }
    ChangeTimeComponent.prototype.saveTime = function () {
        this.tracking.time = (this.hours * 3600) + (this.minutes * 60);
        this.trackingService.updateTime(this.tracking, this.tracking.time);
        this.dialog.closeAll();
    };
    ChangeTimeComponent.prototype.ngOnInit = function () {
        var hours = Math.floor(this.tracking.time / 3600);
        var minutes = Math.floor(this.tracking.time / 60) - (hours * 60);
        this.hours = hours;
        this.minutes = minutes;
    };
    return ChangeTimeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__["TrackingInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__["TrackingInterface"]) === "function" && _a || Object)
], ChangeTimeComponent.prototype, "tracking", void 0);
ChangeTimeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-change-time',
        template: __webpack_require__(191),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], ChangeTimeComponent);

var _a, _b, _c;
//# sourceMappingURL=change-time.component.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateHelper; });
var DateHelper = (function () {
    function DateHelper() {
    }
    DateHelper.prototype.dateToDateString = function (date) {
        if (date === void 0) { date = new Date(); }
        var mm = date.getMonth() + 1;
        var dd = date.getDate();
        var formattedDate = date.getFullYear() +
            (mm > 9 ? '' : '0') + mm.toString() +
            (dd > 9 ? '' : '0') + dd.toString();
        return formattedDate;
    };
    DateHelper.prototype.getWeekNumber = function (date) {
        if (date === void 0) { date = new Date(); }
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000
            - 3 + (week1.getDay() + 6) % 7) / 7);
    };
    return DateHelper;
}());

//# sourceMappingURL=date-helper.js.map

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

//# sourceMappingURL=tracking.interface.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Datastore = __webpack_require__(183);
var dataB = 'database.db';
var DatabaseService = (function () {
    function DatabaseService() {
        this.db = new Datastore({
            filename: dataB,
            autoload: true
        });
    }
    DatabaseService.prototype.insert = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.db.insert(item, (function (err, newItem) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(newItem);
                }
            }));
        });
    };
    DatabaseService.prototype.findAll = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.db.find({}, (function (err, items) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(items);
                }
            }));
        });
    };
    DatabaseService.prototype.update = function (item) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.db.update({ _id: item._id }, { $set: item }, (function (err, NumReplaced) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(NumReplaced);
                }
            }));
        });
    };
    DatabaseService.prototype.remove = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            return _this.db.remove({ _id: id }, {}, (function (err, numRemoved) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(numRemoved);
                }
            }));
        });
    };
    return DatabaseService;
}());
DatabaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], DatabaseService);

//# sourceMappingURL=database.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JiraCaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var JiraCaseService = (function () {
    function JiraCaseService(http, storageService, loginService) {
        this.http = http;
        this.storageService = storageService;
        this.loginService = loginService;
        this.favorites = [];
        this.assignedToMe = [];
        this.searchItems = [];
    }
    JiraCaseService.prototype.getAssigneeCases = function (user) {
        var _this = this;
        this.http.get("https://jira.impact.dk/rest/api/2/search?jql=assignee=" + user + "%20AND%20status%20%3D%20Open").subscribe(function (res) {
            if (res.status === 200) {
                var body = res.json();
                var cases = [];
                body.issues.forEach(function (item) {
                    var jiracase = {};
                    jiracase.jiraId = item.key;
                    jiracase.title = item.fields.summary;
                    _this.assignedToMe.push(jiracase);
                });
            }
        }, function (error) {
            if (error.status === 400) {
                _this.loginService.openLoginPrompt();
            }
        });
    };
    JiraCaseService.prototype.search = function (term) {
        var _this = this;
        term = term.toLowerCase();
        return new Promise(function (resolve, reject) {
            if (term !== '') {
                _this.http.get("https://jira.impact.dk/rest/api/2/search?jql=summary~\"" + term + "\"").subscribe(function (res) {
                    if (res.status === 200) {
                        var body = res.json();
                        var cases_1 = [];
                        body.issues.forEach(function (item) {
                            var jiracase = {};
                            jiracase.jiraId = item.key;
                            jiracase.title = item.fields.summary;
                            cases_1.push(jiracase);
                        });
                        resolve(cases_1);
                    }
                }, function (error) {
                    if (error.status === 400) {
                        _this.loginService.openLoginPrompt();
                    }
                    reject();
                });
            }
            else {
                reject();
            }
        });
    };
    return JiraCaseService;
}());
JiraCaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _c || Object])
], JiraCaseService);

var _a, _b, _c;
//# sourceMappingURL=jira-case.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(19);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(dialog) {
        this.dialog = dialog;
    }
    LoginService.prototype.openLoginPrompt = function () {
        window.open('https://jira.impact.dk/login.jsp', '_blank');
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekgraphComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WeekgraphComponent = (function () {
    function WeekgraphComponent(trackingService) {
        this.trackingService = trackingService;
    }
    WeekgraphComponent.prototype.ngOnInit = function () {
        this.hoursRecorded = this.trackingService.getHoursPrWeek();
    };
    return WeekgraphComponent;
}());
WeekgraphComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Component */])({
        selector: 'app-weekgraph',
        template: __webpack_require__(194),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object])
], WeekgraphComponent);

var _a;
//# sourceMappingURL=weekgraph.component.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.bundle.js.map