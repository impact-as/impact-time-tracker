webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_date_helper__ = __webpack_require__(62);
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

/***/ 101:
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

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__change_time_change_time_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__change_jira_id_change_jira_id_component__ = __webpack_require__(60);
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
        this.trackingService = trackingService;
        this.dialog = dialog;
        this.editCommentId = '';
        this.editCommentVal = '';
        this.currentDay = new Date();
        this.selectedDay = new Date();
        this.trackings = this.trackingService.trackings;
    }
    TrackerComponent.prototype.gotoCurrentDate = function () {
        var myDate = new Date();
        this.selectedDay = myDate;
    };
    TrackerComponent.prototype.openChangeTimeDialog = function (tracking) {
        this.trackingService.pause(tracking.id);
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__change_time_change_time_component__["a" /* ChangeTimeComponent */]);
        instance.componentInstance['tracking'] = tracking;
    };
    TrackerComponent.prototype.changeDay = function (forward) {
        var myDate = new Date();
        if (forward) {
            myDate.setDate(this.selectedDay.getDate() + 1);
            this.selectedDay = myDate;
        }
        else {
            myDate.setDate(this.selectedDay.getDate() - 1);
            this.selectedDay = myDate;
        }
    };
    TrackerComponent.prototype.openSelectJiraIdDialog = function (tracking) {
        var instance = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__change_jira_id_change_jira_id_component__["a" /* ChangeJiraIdComponent */], {
            height: '400px',
            width: '600px',
        });
        instance.componentInstance['tracking'] = tracking;
    };
    TrackerComponent.prototype.editComment = function (tracking) {
        this.trackingService.updateComment(tracking.id, tracking.comment);
    };
    TrackerComponent.prototype.commentPress = function (evn, tracking) {
        if (evn.keyCode === 13) {
            evn.target.blur();
            this.editComment(tracking);
        }
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
        template: __webpack_require__(168),
        styles: [__webpack_require__(159)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _b || Object])
], TrackerComponent);

var _a, _b;
//# sourceMappingURL=tracker.component.js.map

/***/ }),

/***/ 103:
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

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".jira-header {\n  padding-bottom: 20px; }\n\n.jira-item {\n  font-size: 15px;\n  cursor: pointer;\n  padding: 5px; }\n  .jira-item:hover {\n    background-color: #e2e2e2; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".fill-remaining-space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.network {\n  vertical-align: middle; }\n  .network__sync {\n    font-size: 22px;\n    cursor: pointer; }\n\n.network-status {\n  font-size: 12px;\n  color: orange; }\n  .network-status_online {\n    color: greenyellow; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".material-icons.md-dark {\n  color: rgba(0, 0, 0, 0.8); }\n\n.material-icons.md-dark.md-inactive {\n  color: rgba(0, 0, 0, 0.26); }\n\n@-webkit-keyframes blinker {\n  30% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  70% {\n    opacity: 1; } }\n\n@keyframes blinker {\n  30% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  70% {\n    opacity: 1; } }\n\na {\n  cursor: pointer; }\n\n.bottom-action-container {\n  padding: 20px; }\n\n.state-button {\n  display: block;\n  background-color: #e2e2e2;\n  text-transform: uppercase;\n  text-align: center;\n  width: 74px;\n  height: 74px;\n  line-height: 74px;\n  position: absolute;\n  top: 10px;\n  left: 10px; }\n  .state-button__playing {\n    background-color: green;\n    color: white; }\n\n.tracking {\n  background-color: white;\n  margin-bottom: 1px;\n  height: 94px;\n  position: relative; }\n  .tracking__info-container {\n    top: 10px;\n    bottom: 10px;\n    left: 120px;\n    right: 10px;\n    position: absolute; }\n  .tracking__title {\n    color: #999;\n    font-size: 11px;\n    padding-top: 5px; }\n  .tracking__jira-id {\n    font-size: 25px;\n    font-weight: bold;\n    position: absolute;\n    bottom: 10px;\n    cursor: pointer; }\n    .tracking__jira-id_not-set {\n      font-weight: normal;\n      color: #d05921;\n      font-size: 20px;\n      bottom: 15px; }\n  .tracking__comment {\n    left: 150px;\n    right: 10px;\n    bottom: 10px;\n    position: absolute; }\n  .tracking__comment-input {\n    width: calc(100% - 100px);\n    padding: 7px 10px;\n    border-radius: 4px;\n    outline: none;\n    border: 1px solid #e2e2e2; }\n    .tracking__comment-input_not-valid {\n      border: 1px solid #d05921; }\n  .tracking__time {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    font-size: 30px;\n    font-weight: bold; }\n  .tracking__actions {\n    position: absolute;\n    bottom: 0px;\n    right: 10px; }\n    .tracking__actions_icon {\n      font-size: 18px; }\n    .tracking__actions a {\n      color: #666; }\n\n.date-navigation {\n  padding: 20px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "\n<app-tracker></app-tracker>"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div class=\"jira-header\">\n  Valgt Jira ID:\n  <span [hidden]=\"tracking.jiraId === ''\">{{tracking.jiraId}}</span>\n  <span [hidden]=\"tracking.jiraId !== ''\">Intet valgt</span>\n</div>\n\n<md-input-container>\n  <input mdInput placeholder=\"Find Jira Case\" (keyup)=\"searchFieldChange()\" [(ngModel)]=\"searchTerm\">\n</md-input-container>\n\n<div [hidden]=\"searchTerm === ''\">\n      <div *ngFor=\"let item of searchResult\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n</div>\n\n<div [hidden]=\"searchTerm !== ''\">\n\n  <md-tab-group>\n    <md-tab label=\"Favoritter\">\n      <div *ngFor=\"let item of favorites\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n    </md-tab>\n    \n    <md-tab label=\"Assignet til mig\">\n      <div *ngFor=\"let item of assignedToMe\" class=\"jira-item\" (click)=\"clickJiraCase(item)\">\n        <b>{{item.jiraId}}</b> - {{item.title}}\n      </div>\n    </md-tab>\n  </md-tab-group>\n</div>"

/***/ }),

/***/ 166:
/***/ (function(module, exports) {

module.exports = "\n<h3 md-dialog-title>Rediger tiden! på denne tracking</h3>\n\n\n<md-dialog-content>\n  <span>HH</span>\n  <input type=\"number\" [(ngModel)]=\"hours\" />\n  <span>MM</span>\n  <input type=\"number\" [(ngModel)]=\"minutes\" />\n</md-dialog-content>\n\n\n<md-dialog-actions>\n  <button md-dialog-close md-button>Anuller</button>\n  <button md-raised-button color=\"primary\" (click)=\"saveTime()\">Opdater</button>\n</md-dialog-actions>"

/***/ }),

/***/ 167:
/***/ (function(module, exports) {

module.exports = "\n  <md-toolbar color=\"dark\">\n\n    <span class=\"network\">\n      <i class=\"material-icons network__sync\">sync</i>\n      <span class=\"network-status network-status_online\" [hidden]=\"!online\">Online</span>\n      <span class=\"network-status\" [hidden]=\"online\">Offline</span>\n    </span>\n\n    <span class=\"app-toolbar-filler fill-remaining-space\"></span>\n\n    <div [hidden]=\"!trackingService.track.active\">\n      <span>{{trackingService.currentTracking.jiraId}}</span><br />\n      <span class=\"blink_me\">{{trackingService.track.total | formatTime}}</span><br />    \n    </div>\n\n  </md-toolbar>\n"

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"date-navigation\">\n  <button md-raised-button color=\"primary\" (click)=\"changeDay(false)\">< Forrige</button>\n  <a (click)=\"gotoCurrentDate()\">{{selectedDay | date:'fullDate'}}</a>\n  <button md-raised-button color=\"primary\" (click)=\"changeDay(true)\">Næste ></button>\n</div>\n\n<div class=\"trackings\">\n  <div class=\"tracking\" *ngFor=\"let tracking of trackings | filterDate:selectedDay\">\n\n    <a class=\"state-button\" \n      [class.state-button__playing]=\"tracking.id === trackingService.currentTracking.id\" \n      (click)=\"toggleTracking(tracking.id, tracking.id !== trackingService.currentTracking.id)\">\n        <span [hidden]=\"tracking.id !== trackingService.currentTracking.id\">stop</span>\n        <span [hidden]=\"tracking.id === trackingService.currentTracking.id\">start</span>\n    </a>\n\n    <div class=tracking__info-container>     \n\n      <div class=\"tracking__title\">\n        {{tracking.title}}\n      </div>\n\n      <div class=\"tracking__jira-id\" [class.tracking__jira-id_not-set]=\"tracking.jiraId === ''\" (click)=\"openSelectJiraIdDialog(tracking)\">\n        <span [hidden]=\"tracking.jiraId === ''\" >{{tracking.jiraId}}</span>\n        <span [hidden]=\"tracking.jiraId !== ''\" >JIRA CASE</span>\n      </div>\n\n      <div class=\"tracking__comment\">\n        <input class=\"tracking__comment-input\" [class.tracking__comment-input_not-valid]=\"tracking.comment === ''\" [(ngModel)]=\"tracking.comment\" (keyup)=\"commentPress($event, tracking)\" />\n      </div>\n\n      <div class=\"tracking__time\" (dblclick)=\"openChangeTimeDialog(tracking)\" [class.blink_me]=\"tracking.id === trackingService.currentTracking.id\">\n        {{tracking.time | formatTime}}\n      </div>\n\n      <div class=\"tracking__actions\">\n        <a><i class=\"material-icons tracking__actions_icon\">star</i></a>\n        <a [hidden]=\"tracking.jiraId === ''\" href=\"https://jira.impact.dk/browse/{{tracking.jiraId}}\" target=\"_blank\"><i class=\"material-icons tracking__actions_icon\">launch</i></a>\n        <a (click)=\"deleteTracking(tracking.id)\"><i class=\"material-icons tracking__actions_icon\">delete</i></a>\n      </div>\n\n    </div>\n\n  </div>\n\n</div>\n\n<div class=\"bottom-action-container\">\n  <button md-raised-button color=\"primary\" (click)=\"addNewTracking()\">Start ny registrering</button>\n</div>\n"

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_GUID__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_date_helper__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__(65);
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
    function TrackingService(storageService) {
        this.storageService = storageService;
        this.currentTracking = { id: "000" };
        this.track = { active: false };
        this.trackings = this.getTrackings();
    }
    TrackingService.prototype.getTrackings = function () {
        var trackings = this.storageService.read('trackings');
        return trackings !== null ? trackings : [];
    };
    TrackingService.prototype.add = function (jiraId, date) {
        if (jiraId === void 0) { jiraId = ""; }
        if (date === void 0) { date = null; }
        var tracking = {};
        tracking.id = new __WEBPACK_IMPORTED_MODULE_1__helpers_GUID__["a" /* GUID */]().toString();
        tracking.comment = "";
        tracking.jiraId = jiraId;
        tracking.inSync = false;
        var newDate = date != null ? date : new Date();
        tracking.date = new __WEBPACK_IMPORTED_MODULE_2__helpers_date_helper__["a" /* DateHelper */]().dateToDateString(newDate);
        tracking.time = 0;
        this.trackings.push(tracking);
        this.pushToStorage();
        this.start(tracking.id);
        return tracking;
    };
    TrackingService.prototype.delete = function (id) {
        var _this = this;
        if (id === this.currentTracking.id) {
            this.pause(id);
        }
        this.trackings.forEach(function (tracking, index) {
            if (id === tracking.id) {
                _this.trackings.splice(index, 1);
                _this.pushToStorage();
            }
        });
    };
    TrackingService.prototype.updateJiraCase = function (tracking, jiraCase) {
        var _this = this;
        this.trackings.forEach(function (tr) {
            if (tracking.id === tr.id) {
                tracking.jiraId = jiraCase.jiraId;
                tracking.title = jiraCase.title;
                _this.pushToStorage();
            }
        });
    };
    TrackingService.prototype.updateTime = function (tracking, seconds) {
        var _this = this;
        this.trackings.forEach(function (tr) {
            if (tracking.id === tr.id) {
                tracking.time = seconds;
                _this.pushToStorage();
            }
        });
    };
    TrackingService.prototype.pushToStorage = function () {
        this.storageService.write('trackings', this.trackings);
    };
    TrackingService.prototype.updateComment = function (id, comment) {
        var _this = this;
        this.trackings.forEach(function (tracking) {
            if (id === tracking.id) {
                tracking.comment = comment;
                _this.pushToStorage();
            }
        });
    };
    TrackingService.prototype.start = function (id) {
        var _this = this;
        this.trackings.forEach(function (tracking) {
            if (id === tracking.id) {
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
        this.currentTracking = { id: "000" };
        clearInterval(this.timer);
    };
    TrackingService.prototype.updateTimer = function () {
        this.track.now = new Date();
        this.track.diff = (this.track.now.getTime() - this.track.start.getTime()) / 1000;
        this.track.total = this.track.original + this.track.diff;
        this.currentTracking.time = Math.floor(this.track.total);
        this.pushToStorage();
    };
    return TrackingService;
}());
TrackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]) === "function" && _a || Object])
], TrackingService);

var _a;
//# sourceMappingURL=tracking.service.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(89);


/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_tracking_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__models_tracking_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__ = __webpack_require__(64);
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
    }
    ChangeJiraIdComponent.prototype.clickJiraCase = function (jiraCase) {
        this.trackingService.updateJiraCase(this.tracking, jiraCase);
        this.dialog.closeAll();
    };
    ChangeJiraIdComponent.prototype.searchFieldChange = function () {
        this.searchResult = this.jiraCaseService.search(this.searchTerm);
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
        template: __webpack_require__(165),
        styles: [__webpack_require__(157)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__["a" /* JiraCaseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_jira_case_service__["a" /* JiraCaseService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_tracking_service__["a" /* TrackingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _d || Object])
], ChangeJiraIdComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=change-jira-id.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_tracking_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__models_tracking_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(24);
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
        template: __webpack_require__(166),
        styles: [__webpack_require__(161)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_tracking_service__["a" /* TrackingService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MdDialog */]) === "function" && _c || Object])
], ChangeTimeComponent);

var _a, _b, _c;
//# sourceMappingURL=change-time.component.js.map

/***/ }),

/***/ 62:
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
    return DateHelper;
}());

//# sourceMappingURL=date-helper.js.map

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

//# sourceMappingURL=tracking.interface.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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
    function JiraCaseService() {
        this.favorites = [];
        this.assignedToMe = [];
        this.searchItems = [];
        this.generateDummyData();
    }
    JiraCaseService.prototype.search = function (term) {
        term = term.toLowerCase();
        return this.searchItems.filter(function (item) { return item.jiraId.toLowerCase().indexOf(term) >= 0 || item.title.toLowerCase().indexOf(term) >= 0; });
    };
    JiraCaseService.prototype.generateDummyData = function () {
        var jira1 = { jiraId: 'IMP-12', title: 'Impact - ledelse' };
        var jira2 = { jiraId: 'NEM-1523', title: 'Nemlig - bugfixing - error fetching website with no internet on machine' };
        var jira3 = { jiraId: 'IMP-7', title: 'Impact - ferie' };
        var jira4 = { jiraId: 'IMP-18', title: 'Impact - sygdom' };
        var jira5 = { jiraId: 'IMP-11', title: 'Impact - barnets første sygedag' };
        var jira6 = { jiraId: 'KAM-236', title: 'Kamstup - GTM Tracking for click on spot CTA buttons' };
        var jira7 = { jiraId: 'KAUF-523', title: 'Kaufmann - Include OG tags on all page types' };
        this.favorites.push(jira1);
        this.favorites.push(jira2);
        this.favorites.push(jira3);
        this.favorites.push(jira4);
        this.favorites.push(jira5);
        this.assignedToMe.push(jira2);
        this.assignedToMe.push(jira6);
        this.assignedToMe.push(jira7);
        this.searchItems.push(jira1);
        this.searchItems.push(jira2);
        this.searchItems.push(jira3);
        this.searchItems.push(jira4);
        this.searchItems.push(jira5);
        this.searchItems.push(jira6);
        this.searchItems.push(jira7);
    };
    return JiraCaseService;
}());
JiraCaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], JiraCaseService);

//# sourceMappingURL=jira-case.service.js.map

/***/ }),

/***/ 65:
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

/***/ 88:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 88;


/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(103);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 96:
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
        template: __webpack_require__(164),
        styles: [__webpack_require__(160)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tracker_tracker_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_tracking_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_storage_service__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_jira_case_service__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pipes_format_time_pipe__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pipes_filter_date_pipe__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__change_time_change_time_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__change_jira_id_change_jira_id_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__header_header_component__ = __webpack_require__(98);
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
            __WEBPACK_IMPORTED_MODULE_16__header_header_component__["a" /* HeaderComponent */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_14__change_time_change_time_component__["a" /* ChangeTimeComponent */],
            __WEBPACK_IMPORTED_MODULE_15__change_jira_id_change_jira_id_component__["a" /* ChangeJiraIdComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MaterialModule */].forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__services_tracking_service__["a" /* TrackingService */], __WEBPACK_IMPORTED_MODULE_10__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_11__services_jira_case_service__["a" /* JiraCaseService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__ = __webpack_require__(18);
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
    function HeaderComponent(trackingService) {
        this.trackingService = trackingService;
        this.online = false;
    }
    HeaderComponent.prototype.onOffline = function () {
        this.online = navigator.onLine;
    };
    HeaderComponent.prototype.onLine = function () {
        this.online = navigator.onLine;
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
        template: __webpack_require__(167),
        styles: [__webpack_require__(158)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__["a" /* TrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_tracking_service__["a" /* TrackingService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 99:
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

/***/ })

},[221]);
//# sourceMappingURL=main.bundle.js.map