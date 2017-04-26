webpackJsonp([1,4],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 107;


/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(125);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 115:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(200),
        styles: [__webpack_require__(187)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tracker_tracker_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_tracking_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_storage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_jira_case_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_format_time_pipe__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_filter_date_pipe__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__change_time_change_time_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__change_jira_id_change_jira_id_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__weekgraph_weekgraph_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__confirm_delete_confirm_delete_component__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tracking_item_tracking_item_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_database_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_login_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_tempo_service__ = __webpack_require__(122);
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
            __WEBPACK_IMPORTED_MODULE_17__weekgraph_weekgraph_component__["a" /* WeekgraphComponent */],
            __WEBPACK_IMPORTED_MODULE_18__confirm_delete_confirm_delete_component__["a" /* ConfirmDeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_19__tracking_item_tracking_item_component__["a" /* TrackingItemComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__change_time_change_time_component__["a" /* ChangeTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__change_jira_id_change_jira_id_component__["a" /* ChangeJiraIdComponent */],
            __WEBPACK_IMPORTED_MODULE_17__weekgraph_weekgraph_component__["a" /* WeekgraphComponent */],
            __WEBPACK_IMPORTED_MODULE_18__confirm_delete_confirm_delete_component__["a" /* ConfirmDeleteComponent */],
            __WEBPACK_IMPORTED_MODULE_19__tracking_item_tracking_item_component__["a" /* TrackingItemComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__services_tracking_service__["a" /* TrackingService */],
            __WEBPACK_IMPORTED_MODULE_10__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_11__services_jira_case_service__["a" /* JiraCaseService */],
            __WEBPACK_IMPORTED_MODULE_20__services_database_service__["a" /* DatabaseService */],
            __WEBPACK_IMPORTED_MODULE_21__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_22__services_tempo_service__["a" /* TempoService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weekgraph_weekgraph_component__ = __webpack_require__(76);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(204),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 118:
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
    // tslint:disable-next-line:member-ordering
    GUID.getNewGUIDString = function () {
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

/***/ 119:
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

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_GUID__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_date_helper__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_database_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_tracking_status__ = __webpack_require__(119);
/* unused harmony export ChangeType */
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







var ChangeType;
(function (ChangeType) {
    ChangeType[ChangeType["ADDED"] = 0] = "ADDED";
    ChangeType[ChangeType["DELETED"] = 1] = "DELETED";
    ChangeType[ChangeType["UPDATED"] = 2] = "UPDATED";
})(ChangeType || (ChangeType = {}));
var TrackingService = (function () {
    function TrackingService(storageService, databaseService) {
        this.storageService = storageService;
        this.databaseService = databaseService;
        this.currentTracking = { _id: '000' };
        this.trackings = [];
        this.totalDayHours = 0;
        this.updateSubscriber = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](0);
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
            _this.updateSubscriber.next(ChangeType.UPDATED);
        });
    };
    TrackingService.prototype.add = function (jiraId, date) {
        if (jiraId === void 0) { jiraId = ''; }
        if (date === void 0) { date = null; }
        var tracking = {};
        tracking._id = new __WEBPACK_IMPORTED_MODULE_2__helpers_GUID__["a" /* GUID */]().toString();
        tracking.comment = '';
        tracking.jiraId = jiraId;
        tracking.status = __WEBPACK_IMPORTED_MODULE_6__models_tracking_status__["a" /* TrackingStatus */].READY;
        var newDate = date != null ? date : new Date();
        tracking.date = new __WEBPACK_IMPORTED_MODULE_3__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(newDate);
        tracking.time = 0;
        this.trackings.push(tracking);
        this.databaseService.insert(tracking);
        this.updateSubscriber.next(ChangeType.ADDED);
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
                _this.updateSubscriber.next(ChangeType.DELETED);
            }
        });
    };
    TrackingService.prototype.update = function (tracking) {
        this.saveTracking(tracking);
        this.updateSubscriber.next(ChangeType.UPDATED);
    };
    TrackingService.prototype.getHoursPrWeek = function () {
        var curr = new Date;
        var firstday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
        var lastday = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));
        var firstdayString = new __WEBPACK_IMPORTED_MODULE_3__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(firstday);
        var lastdayString = new __WEBPACK_IMPORTED_MODULE_3__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(lastday);
        var trackings = this.trackings.filter(function (item) {
            return item.date >= firstdayString && item.date <= lastdayString;
        });
        var sum = trackings.reduce(function (p, c) { return p + c.time; }, 0);
        return sum;
    };
    TrackingService.prototype.getHoursPrDay = function (day) {
        var dayString = new __WEBPACK_IMPORTED_MODULE_3__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(day);
        var trackings = this.trackings.filter(function (item) {
            return item.date === dayString;
        });
        var sum = trackings.reduce(function (p, c) { return p + c.time; }, 0);
        return sum;
    };
    TrackingService.prototype.saveTracking = function (tracking) {
        this.databaseService.update(tracking);
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
        this.updateSubscriber.next(ChangeType.UPDATED);
    };
    return TrackingService;
}());
TrackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_database_service__["a" /* DatabaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_database_service__["a" /* DatabaseService */]) === "function" && _b || Object])
], TrackingService);

var _a, _b;
//# sourceMappingURL=tracking.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_date_helper__ = __webpack_require__(72);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filterDate',
        pure: false
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], FilterDatePipe);

//# sourceMappingURL=filter-date.pipe.js.map

/***/ }),

/***/ 121:
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'formatTime'
    })
], FormatTimePipe);

//# sourceMappingURL=format-time.pipe.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TempoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TempoService = (function () {
    function TempoService(http) {
        this.http = http;
        this.tempoApiHost = 'https://jira.impact.dk/rest/tempo-timesheets/3';
    }
    TempoService.prototype.getWorklogs = function (user) {
        this.http.get(this.tempoApiHost + "/worklogs/?dateFrom=2017-04-01&dateTo=2017-04-21&username=" + user).subscribe(function (res) {
            if (res.status === 200) {
                console.log(res);
            }
        }, function (error) {
        });
    };
    TempoService.prototype.getApprovalStatus = function (user, date) {
        if (date === void 0) { date = new Date(); }
        var dateString = date.toISOString().substring(0, 10);
        this.http.get(this.tempoApiHost + "/timesheet-approval/current/?dateFrom=" + dateString + "&username=" + user).subscribe(function (res) {
            if (res.status === 200) {
                console.log(res);
            }
        }, function (error) {
        });
    };
    return TempoService;
}());
TempoService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TempoService);

var _a;
//# sourceMappingURL=tempo.service.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__ = __webpack_require__(12);
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
        this.currentDay = new Date();
        this.selectedDay = new Date();
        this.trackings = this.trackingService.trackings;
        this.addDays();
        this.trackingService.updateSubscriber.subscribe(function (change) { return _this.updateDayHours(); });
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
    TrackerComponent.prototype.updateDayHours = function () {
        this.totalDayHours = this.trackingService.getHoursPrDay(this.selectedDay);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-tracker',
        template: __webpack_require__(205),
        styles: [__webpack_require__(184)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], TrackerComponent);

var _a, _b;
//# sourceMappingURL=tracker.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_time_change_time_component__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__change_jira_id_change_jira_id_component__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__confirm_delete_confirm_delete_component__ = __webpack_require__(71);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrackingItemComponent = (function () {
    function TrackingItemComponent(trackingService, dialog) {
        this.trackingService = trackingService;
        this.dialog = dialog;
    }
    TrackingItemComponent.prototype.openSelectJiraIdDialog = function (tracking) {
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_5__change_jira_id_change_jira_id_component__["a" /* ChangeJiraIdComponent */], {
            height: '80%',
            width: '80%',
        });
        instance.componentInstance['tracking'] = tracking;
    };
    TrackingItemComponent.prototype.openChangeTimeDialog = function (tracking) {
        this.trackingService.pause(tracking._id);
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__change_time_change_time_component__["a" /* ChangeTimeComponent */]);
        instance.componentInstance['tracking'] = tracking;
    };
    TrackingItemComponent.prototype.editComment = function (tracking) {
        this.trackingService.update(tracking);
    };
    TrackingItemComponent.prototype.toggleTracking = function (id, start) {
        if (start) {
            this.trackingService.start(id);
        }
        else {
            this.trackingService.pause(id);
        }
    };
    TrackingItemComponent.prototype.deleteTracking = function (id) {
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__confirm_delete_confirm_delete_component__["a" /* ConfirmDeleteComponent */]);
        instance.componentInstance['id'] = id;
    };
    TrackingItemComponent.prototype.ngOnInit = function () {
    };
    return TrackingItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__["TrackingInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__["TrackingInterface"]) === "function" && _a || Object)
], TrackingItemComponent.prototype, "tracking", void 0);
TrackingItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-tracking-item',
        template: __webpack_require__(206),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], TrackingItemComponent);

var _a, _b, _c;
//# sourceMappingURL=tracking-item.component.js.map

/***/ }),

/***/ 125:
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

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".jira-header {\n  padding-bottom: 20px; }\n\n.jira-item {\n  font-size: 12px;\n  cursor: pointer;\n  padding: 5px;\n  color: #999; }\n  .jira-item b {\n    font-size: 15px;\n    color: #666; }\n  .jira-item:hover {\n    background-color: #e2e2e2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.network {\n  vertical-align: middle; }\n  .network__sync {\n    font-size: 22px;\n    cursor: pointer;\n    vertical-align: middle;\n    color: #666; }\n\n.network-status {\n  font-size: 12px;\n  padding: 4px;\n  border-radius: 3px;\n  background-color: orange;\n  color: white; }\n  .network-status_online {\n    background-color: #94C11E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".material-icons.md-dark {\n  color: rgba(0, 0, 0, 0.8); }\n\n.material-icons.md-dark.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n\na {\n  cursor: pointer; }\n\n.bottom-action-container {\n  padding: 20px; }\n\n.day-summary {\n  padding: 20px; }\n\n.trackings {\n  padding: 0px 20px; }\n\n.date-navigation {\n  background-color: whitesmoke;\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.days {\n  text-align: center;\n  width: 100%; }\n\n.day {\n  color: lightgray;\n  display: inline-block;\n  width: 55px;\n  text-align: center;\n  text-transform: uppercase; }\n  .day_current {\n    color: #CCC; }\n    .day_current .day__date {\n      background-color: #CCC;\n      color: white; }\n  .day_selected {\n    color: #17B9D6; }\n    .day_selected .day__date {\n      background-color: #17B9D6;\n      color: white; }\n  .day__date {\n    height: 45px;\n    width: 45px;\n    line-height: 45px;\n    display: inline-block;\n    border-radius: 50%;\n    font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ":host {\n  margin-bottom: 1px;\n  height: 94px;\n  position: relative;\n  display: block;\n  border-top: 1px solid #e2e2e2; }\n  :host:first-child {\n    border-top: none; }\n\n.info-container {\n  top: 15px;\n  bottom: 15px;\n  left: 120px;\n  right: 10px;\n  position: absolute; }\n\n.title {\n  color: #999;\n  font-size: 11px;\n  padding-top: 5px;\n  font-weight: normal; }\n\n.jira-id {\n  font-size: 25px;\n  font-weight: bold;\n  position: absolute;\n  bottom: 0px;\n  cursor: pointer; }\n  .jira-id_not-set {\n    font-weight: normal;\n    color: black;\n    font-size: 20px;\n    bottom: 5px; }\n\n.comment {\n  left: 0px;\n  right: 20px;\n  top: 0px;\n  position: absolute; }\n\n.comment-input {\n  width: calc(100% - 110px);\n  padding: 7px 10px;\n  border-radius: 4px;\n  outline: none;\n  border: 1px solid #e2e2e2; }\n  .comment-input_not-valid {\n    border: 1px solid rgba(208, 89, 33, 0.3); }\n\n.time {\n  position: absolute;\n  right: 0px;\n  top: -5px;\n  font-size: 30px;\n  font-weight: bold;\n  cursor: pointer; }\n\n.actions {\n  position: absolute;\n  bottom: 3px;\n  right: 0px; }\n  .actions_icon {\n    font-size: 18px; }\n  .actions a {\n    color: #CCC; }\n\n.state-button {\n  display: block;\n  text-align: center;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  color: #e2e2e2;\n  cursor: pointer; }\n  .state-button i {\n    font-size: 74px; }\n  .state-button__playing {\n    color: #94C11E; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

module.exports = "\n<app-tracker></app-tracker>"

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "<div class=\"jira-header\">\n  Valgt Jira ID:\n  <span [hidden]=\"tracking.jiraId === ''\">{{tracking.jiraId}}</span>\n  <span [hidden]=\"tracking.jiraId !== ''\">Intet valgt</span>\n</div>\n\n<md-input-container>\n  <input mdInput placeholder=\"Find Jira Case\"  #searchBox id=\"search-box\"  (keyup)=\"search($event, searchBox.value)\" />\n</md-input-container>\n\n<div [hidden]=\"searchBox.value === ''\">\n      <div *ngFor=\"let item of searchResult\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n</div>\n\n<div [hidden]=\"searchBox.value !== ''\">\n\n  <md-tab-group>\n    <!--<md-tab label=\"Favoritter\">\n      <div *ngFor=\"let item of favorites\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n    </md-tab>-->\n    \n    <md-tab label=\"Assignet til mig\">\n      <div *ngFor=\"let item of assignedToMe\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n    </md-tab>\n  </md-tab-group>\n</div>"

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "<h3 md-dialog-title>\n  Rediger tiden\n  </h3>\n\n<form (ngSubmit)=\"saveTime()\">\n\n  <md-dialog-content>\n    <md-input-container>\n      <input mdInput type=\"number\" placeholder=\"timer\" [(ngModel)]=\"hours\" name=\"hours\" />\n    </md-input-container>\n\n    <md-input-container>\n      <input mdInput type=\"number\" placeholder=\"minutter\" [(ngModel)]=\"minutes\" name=\"minutes\" />\n    </md-input-container>\n\n  </md-dialog-content>\n\n\n  <md-dialog-actions style=\"float:right;\">\n    <button md-dialog-close md-button>Anuller</button>\n    <button md-raised-button color=\"primary\" (click)=\"saveTime()\">Opdater</button>\n  </md-dialog-actions>\n\n</form>"

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "\n\n  <md-dialog-content>\n   Er du sikker på at du vil fjerne denne tracking?\n  </md-dialog-content>\n\n\n  <md-dialog-actions style=\"float:right;\">\n    <button md-dialog-close md-button>Anuller</button>\n    <button md-raised-button color=\"primary\" (click)=\"delete()\">Slet</button>\n  </md-dialog-actions>\n"

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "\n  <md-toolbar color=\"dark\">\n\n    <span class=\"network\">\n      <i class=\"material-icons network__sync\">sync</i>\n      <span class=\"network-status network-status_online\" [hidden]=\"!online\">Online</span>\n      <span class=\"network-status\" [hidden]=\"online\">Offline</span>\n    </span>\n\n    <span class=\"app-toolbar-filler fill-remaining-space\"></span>\n\n    <a><i class=\"material-icons\" (click)=\"openWeekGraph()\">equalizer</i></a>\n\n    <span class=\"app-toolbar-filler fill-remaining-space\"></span>\n\n    <div [hidden]=\"!trackingService.track.active\">\n      <span [hidden]=\"trackingService.currentTracking.jiraId === ''\">{{trackingService.currentTracking.jiraId}}</span>\n      <span [hidden]=\"trackingService.currentTracking.jiraId !== ''\">Ingen Jira case</span>\n      <br />\n      <span class=\"blink_me\">{{trackingService.track.total | formatTime}}</span><br />    \n    </div>\n\n  </md-toolbar>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"date-navigation\">\n  <div class=\"days\">\n    <a *ngFor=\"let day of availableDays\" (click)=\"gotoDate(day)\" class=\"day\" [class.day_selected]=\"day.getDate() == selectedDay.getDate()\"[class.day_current]=\"day.getDate() == currentDay.getDate()\">\n      {{day | date:'EEE'}}\n      <span class=\"day__date\">{{day | date:'dd/MM'}}</span>\n      </a>\n  </div>\n</div>\n\n<div class=\"day-summary\">\n  Der er i alt reigstreret {{totalDayHours | formatTime}} timer for dagen\n</div>\n\n<div class=\"trackings\">\n  <app-tracking-item *ngFor=\"let tracking of trackings | filterDate:selectedDay\" [tracking]=\"tracking\"></app-tracking-item>\n</div>\n\n\n<div class=\"bottom-action-container\">\n  <button md-raised-button color=\"primary\" (click)=\"addNewTracking()\">Start ny registrering</button>\n</div>\n"

/***/ }),

/***/ 206:
/***/ (function(module, exports) {

module.exports = "\n  <a class=\"state-button\" \n    [class.state-button__playing]=\"tracking._id === trackingService.currentTracking._id\" \n    (click)=\"toggleTracking(tracking._id, tracking._id !== trackingService.currentTracking._id)\">\n      <span [hidden]=\"tracking._id !== trackingService.currentTracking._id\"><i class=\"material-icons\">pause_circle_filled</i></span>\n      <span [hidden]=\"tracking._id === trackingService.currentTracking._id\"><i class=\"material-icons\">play_circle_filled</i></span>\n  </a>\n\n  <div class=info-container>\n\n    <div class=\"jira-id\" [class.jira-id_not-set]=\"tracking.jiraId === ''\" (click)=\"openSelectJiraIdDialog(tracking)\">\n      <span [hidden]=\"tracking.jiraId === ''\" >{{tracking.jiraId}} </span>\n      <span [hidden]=\"tracking.jiraId !== ''\" >Ingen Jira case </span>\n      <span class=\"title\">{{tracking.title}}</span>\n    </div>\n\n    <div class=\"comment\">\n      <input class=\"comment-input\" (blur)=\"editComment(tracking)\" [class.comment-input_not-valid]=\"tracking.comment === ''\" [(ngModel)]=\"tracking.comment\" />\n    </div>\n\n    <div class=\"time\" (click)=\"openChangeTimeDialog(tracking)\" [class.blink_me]=\"tracking._id === trackingService.currentTracking._id\">\n      {{tracking.time | formatTime}}\n    </div>\n\n    <div class=\"actions\">\n      <a [hidden]=\"tracking.jiraId === ''\" href=\"https://jira.impact.dk/browse/{{tracking.jiraId}}\" target=\"_blank\"><i class=\"material-icons actions_icon\">launch</i></a>\n      <a (click)=\"deleteTracking(tracking._id)\"><i class=\"material-icons actions_icon\">delete</i></a>\n    </div>\n\n  </div>\n"

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "Timer du har registreret i denne uge<br />\n\n\n{{hoursRecorded  | formatTime}}"

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(108);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

//# sourceMappingURL=tracking.interface.js.map

/***/ }),

/***/ 44:
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
        if (value && value !== 'undefined' && value !== 'null') {
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

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_switchMap__);
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
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.searchResult = [];
        this.jiraCaseService.getAssigneeCases('currentuser()');
    }
    ChangeJiraIdComponent.prototype.clickJiraCase = function (jiraCase) {
        this.tracking.jiraId = jiraCase.jiraId;
        this.tracking.title = jiraCase.title;
        this.trackingService.update(this.tracking);
        this.dialog.closeAll();
    };
    ChangeJiraIdComponent.prototype.search = function (evn, term) {
        this.searchTerms.next(term);
    };
    ChangeJiraIdComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.assignedToMe = this.jiraCaseService.assignedToMe;
        this.favorites = this.jiraCaseService.favorites;
        this.searchTerms
            .debounceTime(250)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.jiraCaseService.search(term) : __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]); }).subscribe(function (items) {
            _this.searchResult.splice(0, _this.searchResult.length);
            var body = items;
            if (body.issues !== undefined) {
                body.issues.forEach(function (item) {
                    var jiracase = {};
                    jiracase.jiraId = item.key;
                    jiracase.title = item.fields.summary;
                    _this.searchResult.push(jiracase);
                });
            }
        });
    };
    return ChangeJiraIdComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('searchBox'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], ChangeJiraIdComponent.prototype, "el", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__["TrackingInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__["TrackingInterface"]) === "function" && _b || Object)
], ChangeJiraIdComponent.prototype, "tracking", void 0);
ChangeJiraIdComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-change-jira-id',
        template: __webpack_require__(201),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__["a" /* JiraCaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__["a" /* JiraCaseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _e || Object])
], ChangeJiraIdComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=change-jira-id.component.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(11);
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
        this.trackingService.update(this.tracking);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__["TrackingInterface"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__["TrackingInterface"]) === "function" && _a || Object)
], ChangeTimeComponent.prototype, "tracking", void 0);
ChangeTimeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-change-time',
        template: __webpack_require__(202),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], ChangeTimeComponent);

var _a, _b, _c;
//# sourceMappingURL=change-time.component.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmDeleteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConfirmDeleteComponent = (function () {
    function ConfirmDeleteComponent(trackingService, dialog) {
        this.trackingService = trackingService;
        this.dialog = dialog;
    }
    ConfirmDeleteComponent.prototype.delete = function () {
        this.trackingService.delete(this.id);
        this.dialog.closeAll();
    };
    ConfirmDeleteComponent.prototype.ngOnInit = function () {
    };
    return ConfirmDeleteComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String)
], ConfirmDeleteComponent.prototype, "id", void 0);
ConfirmDeleteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-confirm-delete',
        template: __webpack_require__(203),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], ConfirmDeleteComponent);

var _a, _b;
//# sourceMappingURL=confirm-delete.component.js.map

/***/ }),

/***/ 72:
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

/***/ 73:
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

var Datastore = __webpack_require__(194);
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

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
        this.jiraApiHost = 'https://jira.impact.dk/rest/api/2';
        this.favorites = [];
        this.assignedToMe = [];
        this.searchItems = [];
    }
    JiraCaseService.prototype.getAssigneeCases = function (user) {
        var _this = this;
        this.http.get(this.jiraApiHost + "/search?jql=assignee=" + user + "%20AND%20status%20%3D%20Open").subscribe(function (res) {
            if (res.status === 200) {
                var body = res.json();
                var cases = [];
                _this.assignedToMe.splice(0, _this.assignedToMe.length);
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
        return this.http.get(this.jiraApiHost + "/search?jql=summary~\"" + term + "\"").map(function (response) { return response.json(); });
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

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(11);
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
        this.dialog.closeAll();
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

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__ = __webpack_require__(12);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-weekgraph',
        template: __webpack_require__(207),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object])
], WeekgraphComponent);

var _a;
//# sourceMappingURL=weekgraph.component.js.map

/***/ })

},[261]);
//# sourceMappingURL=main.bundle.js.map