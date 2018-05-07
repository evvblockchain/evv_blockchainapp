webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "../../../../../src/app/app-header/app-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
    }
    AppHeaderComponent.prototype.ngOnInit = function () {
    };
    AppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-app-header',
            template: __webpack_require__("../../../../../src/app/app-header/app-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-header/app-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkin_checkin_component__ = __webpack_require__("../../../../../src/app/checkin/checkin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__verify_verify_component__ = __webpack_require__("../../../../../src/app/verify/verify.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_4__checkin_checkin_component__["a" /* CheckinComponent */],
            },
            {
                path: 'history',
                component: __WEBPACK_IMPORTED_MODULE_5__history_history_component__["a" /* HistoryComponent */],
            },
            {
                path: 'checkout',
                component: __WEBPACK_IMPORTED_MODULE_6__checkout_checkout_component__["a" /* CheckoutComponent */],
            },
            {
                path: 'verify/:imagePath',
                component: __WEBPACK_IMPORTED_MODULE_7__verify_verify_component__["a" /* VerifyComponent */],
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<ng4-loading-spinner> </ng4-loading-spinner>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            alert(device.platform);
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_header_app_header_component__ = __webpack_require__("../../../../../src/app/app-header/app-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkin_checkin_component__ = __webpack_require__("../../../../../src/app/checkin/checkin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__clientinfo_clientinfo_component__ = __webpack_require__("../../../../../src/app/clientinfo/clientinfo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__history_history_component__ = __webpack_require__("../../../../../src/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__checkout_checkout_component__ = __webpack_require__("../../../../../src/app/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__material_material_module__ = __webpack_require__("../../../../../src/app/material/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_events_lib_touch__ = __webpack_require__("../../../../ng2-events/lib/touch/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ng2_events_lib_touch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ng2_events_lib_touch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__verify_verify_component__ = __webpack_require__("../../../../../src/app/verify/verify.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_clock_service__ = __webpack_require__("../../../../../src/app/services/clock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_tierion_service__ = __webpack_require__("../../../../../src/app/services/tierion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_5__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_header_app_header_component__["a" /* AppHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__checkin_checkin_component__["a" /* CheckinComponent */],
                __WEBPACK_IMPORTED_MODULE_9__clientinfo_clientinfo_component__["a" /* ClientinfoComponent */],
                __WEBPACK_IMPORTED_MODULE_10__history_history_component__["a" /* HistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_11__checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_25__verify_verify_component__["a" /* VerifyComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_16__environments_environment__["a" /* environment */].firebase, 'angular-auth-firebase'),
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_15_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_19__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_22__material_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_23_ng2_events_lib_touch__["TouchEventModule"],
                __WEBPACK_IMPORTED_MODULE_24__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyAykt0P59dSaId2Od4AhIyHaeGtFR3rda0'
                }),
                __WEBPACK_IMPORTED_MODULE_26__angular_http__["c" /* HttpModule */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_27__globals__["a" /* Globals */],
                __WEBPACK_IMPORTED_MODULE_28__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_29__services_clock_service__["a" /* ClockService */],
                __WEBPACK_IMPORTED_MODULE_30__services_location_service__["a" /* LocationService */],
                __WEBPACK_IMPORTED_MODULE_31__services_tierion_service__["a" /* TierionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/checkin/checkin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkin-header{\n    height: 70px;\n    background: #ffc000;\n    text-align: center;\n    position: relative;\n}\n.user-avatar{\n    width: 80px;\n    border-radius: 50%;\n    position: absolute;\n    bottom: -57px;\n    left: 40%;\n}\n.time-container{\n    text-align: center;\n    margin-top: 60px;\n}\n.client-container{\n    background: #4472c4;\n    padding: 5px 10px;\n}\n.client-container .row{\n    margin: 0;\n}\n.client-info{\n    width: 80%;\n}\n.client-image{\n    width: 20%;\n}\n.client-image img{\n    width: 80px;\n}\n.footer-container{\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    height: 60px;\n    background: #70ad47;\n    text-align: center;\n    color: #fff;\n    padding: 15px 0;\n    \n}\n.vertical-center{\n    margin-top: auto;\nmargin-bottom: auto;\n}\nagm-map {\n    height: calc(100vh - 400px);\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkin/checkin.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"checkin-section\" >\n\n  <div class=\"app-sub-header\" *ngFor=\"let agent of agentData | async\">\n<h4>Welcome {{agent.name}}</h4>\n<img src=\"data:image/jpg;base64,{{agent.photo}}\" alt=\"\" class=\"user-avatar\">\n  </div>\n  <div *ngFor=\"let client of clientdata | async\">\n  <div class=\"time-container\">\n    <h4>\n      {{client.timing.date | date}}\n    </h4>\n    <h3>\n        {{ time  | date:'h:mm a'}}\n    </h3>\n  </div>\n\n\n  <div class=\"client-container text-white\" >\n    <div class=\"row\">\n      <div class=\"col-9 vertical-center\"  >\n        <div>Client Name: {{client.clientname}}</div>\n        <div>ID: {{client.clientid}}</div>\n        <div>Address:  {{client.Address}}</div>\n\n      </div>\n      <div class=\"col-3 vertical-center\">\n        <img src=\"assets/images/info-icon.png\" alt=\"\" class=\"img-fluid\">\n      </div>\n    </div>  </div>\n\n  \n  \n\n  <div class=\"map-container\">\n    <agm-map [zoom]=\"15\" [latitude]=\"client.location.lat\" [longitude]=\"client.location.long\">\n      <agm-marker [latitude]=\"client.location.lat\" [longitude]=\"client.location.long\"></agm-marker>\n      <agm-circle [latitude]=\"client.location.lat\" [longitude]=\"client.location.long\" [radius]=\"10\"></agm-circle>\n    </agm-map>\n  </div></div>\n  <div class=\"footer-container\" (click)=\"takeSelfie();\">\n   <h4>Checkin</h4>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/checkin/checkin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__("../../../../../src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_clock_service__ = __webpack_require__("../../../../../src/app/services/clock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CheckinComponent = /** @class */ (function () {
    function CheckinComponent(db, authService, spinnerService, router, globals, messageService, clockService) {
        this.db = db;
        this.authService = authService;
        this.spinnerService = spinnerService;
        this.router = router;
        this.globals = globals;
        this.messageService = messageService;
        this.clockService = clockService;
        this.today = Date.now();
        this.title = 'My first AGM project';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.spinnerService.show();
    }
    CheckinComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = this.authService.getLoggedInUser();
        console.log(this.currentUser.email);
        this.clientdata = this.db.collection('/clientlist').valueChanges();
        this.agentData = this.db.collection('/evvagents', function (ref) { return ref.where('email', '==', _this.currentUser.email); }).valueChanges();
        //this.agentData = this.db.collection('evvagents', ref => ref.where('Agents.email', '==', 'jince.george@xe04.ey.com')).valueChanges();
        this.clockService.getClock().subscribe(function (time) { return _this.time = time; });
        console.log(this.clientdata);
        this.clientdata.subscribe(function (result) {
            _this.spinnerService.hide();
            _this.globals.clientdata = result;
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
        });
        this.agentData.subscribe(function (result) {
            _this.spinnerService.hide();
            _this.globals.agentData = result;
            _this.authService.getFaceId(result[0].photo).subscribe(function (res) {
                console.log(res);
                _this.loggedInUserImagefaceId = res[0].faceId;
                _this.globals.loggedUserFaceId = _this.loggedInUserImagefaceId;
            });
            console.log(result);
        });
    };
    CheckinComponent.prototype.takeSelfie = function () {
        var _this = this;
        if (typeof cordova !== 'undefined') {
            console.log(cordova);
            var cameraOptions = {
                destinationType: Camera.DestinationType.DATA_URL,
                quality: 25,
                encodingType: Camera.EncodingType.JPEG,
                correctOrientation: true,
                cameraDirection: Camera.Direction.FRONT
            };
            console.log(navigator);
            // (<any> navigator).camera.getPicture(cameraOptions).then((imageData) => {
            //   // imageData is a base64 encoded string
            //     this.base64Image = "data:image/jpeg;base64," + imageData;
            //     this.router.navigate(['dashboard/verify']);
            // }, (err) => {
            //     console.log(err);
            // });
            navigator.camera.getPicture(function (value) {
                //alert(value);
                _this.spinnerService.show();
                _this.router.navigate(['dashboard/verify', value]);
            }, function (value) {
                alert(value);
            }, cameraOptions);
        }
    };
    CheckinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkin',
            template: __webpack_require__("../../../../../src/app/checkin/checkin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/checkin/checkin.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_5__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__services_clock_service__["a" /* ClockService */]])
    ], CheckinComponent);
    return CheckinComponent;
}());



/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkin-header{\r\n    height: 70px;\r\n    background: #ffc000;\r\n    text-align: center;\r\n    position: relative;\r\n}\r\n.user-avatar{\r\n    width: 80px;\r\n    border-radius: 50%;\r\n    position: absolute;\r\n    bottom: -57px;\r\n    left: 40%;\r\n}\r\n.time-container{\r\n    text-align: center;\r\n    margin-top: 60px;\r\n}\r\n.client-container{\r\n    background: #4472c4;\r\n    padding: 5px 10px;\r\n}\r\n.client-container .row{\r\n    margin: 0;\r\n}\r\n.client-info{\r\n    width: 80%;\r\n}\r\n.client-image{\r\n    width: 20%;\r\n}\r\n.client-image img{\r\n    width: 80px;\r\n}\r\n.footer-container{\r\n    position: fixed;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 60px;\r\n    background: #70ad47;\r\n    text-align: center;\r\n    color: #fff;\r\n    padding: 15px 0;\r\n    \r\n}\r\n.vertical-center{\r\n    margin-top: auto;\r\nmargin-bottom: auto;\r\n}\r\nagm-map {\r\n    height: calc(100vh - 400px);\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"checkin-section\" >\n\n  <div class=\"app-sub-header\" *ngFor=\"let agent of agentData | async \">\n<h4>Welcome {{agent.name}}</h4>\n<img src=\"data:image/jpg;base64,{{agent.photo}}\" alt=\"\" class=\"user-avatar\">\n  </div>\n  <div *ngFor=\"let client of clientdata | async\">\n  <div class=\"time-container\">\n    <h4>\n      {{client.timing.date | date}}\n    </h4>\n    <h3>\n      {{ time  | date:'h:mm a'}}\n    </h3>\n  </div>\n\n\n  <div class=\"client-container text-white\" >\n    <div class=\"row\">\n      <div class=\"col-9 vertical-center\"  >\n        <div>Client Name: {{client.clientname}}</div>\n        <div>ID: {{client.clientid}}</div>\n        <div>Address:  {{client.Address}}</div>\n\n      </div>\n      <div class=\"col-3 vertical-center\">\n        <img src=\"assets/images/info-icon.png\" alt=\"\" class=\"img-fluid\">\n      </div>\n    </div>  </div>\n\n\n  \n  <div class=\"timer-container container\">\n    <div class=\"text-center\">  <h4>You are in work mode</h4>\n    </div>\n  \n    <div class=\"row\">\n      <div class=\"col-6 vertical-center\" style=\"border-right: 1px solid;\" >\n        <h5>Todays working hours</h5>\n        <h2>{{totalHours}} Hrs</h2>\n      </div>\n      <div class=\"col-6 vertical-center\"  >\n          <h5>Todays working hours</h5>\n        <h2>{{totalHours}} Hrs</h2>\n      </div>\n    </div>\n  </div>\n\n  <!-- <div class=\"map-container\">\n    <agm-map [latitude]=\"client.location.lat\" [longitude]=\"client.location.long\">\n      <agm-marker [latitude]=\"client.location.lat\" [longitude]=\"client.location.long\"></agm-marker>\n    </agm-map>\n  </div>--></div> \n  <div class=\"footer-container\" (click)=\"saveCheckinData();\">\n   <h4>Checkout</h4>\n  </div>\n</section>"

/***/ }),

/***/ "../../../../../src/app/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_clock_service__ = __webpack_require__("../../../../../src/app/services/clock.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(globals, spinnerService, authService, db, clockService) {
        this.globals = globals;
        this.spinnerService = spinnerService;
        this.authService = authService;
        this.db = db;
        this.clockService = clockService;
        this.today = Date.now();
        this.prodcollection = this.db.collection('agent_c_inout');
        this.spinnerService.show();
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clockService.getClock().subscribe(function (time) { return _this.time = time; });
        this.currentUser = this.authService.getLoggedInUser();
        console.log(this.currentUser.email);
        this.clientdata = this.db.collection('/clientlist').valueChanges();
        this.agentData = this.db.collection('/evvagents', function (ref) { return ref.where('email', '==', _this.currentUser.email); }).valueChanges();
        //this.agentData = this.db.collection('evvagents', ref => ref.where('Agents.email', '==', 'jince.george@xe04.ey.com')).valueChanges();
        this.clientdata.subscribe(function (result) {
            _this.spinnerService.hide();
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
            var diffInMs = Date.parse(result[0].timing.outtime) - Date.parse(result[0].timing.intime);
            var diffInHours = diffInMs / 1000 / 60 / 60;
            _this.totalHours = (diffInHours < 10) ? '0' + diffInHours : diffInHours;
        });
        this.agentData.subscribe(function (result) {
            //this.spinnerService.hide();
            // this.messageService.sendMessage(result[0].clientname);
            console.log(result);
        });
    };
    CheckoutComponent.prototype.saveCheckinData = function () {
        var date = new Date();
        var dateStamp = (date.getMonth() + 1) + '' + date.getDate() + '' + date.getFullYear();
        this.prodcollection.doc(dateStamp.toString()).set({
            agentId: 'A345231',
            agentName: 'Jince',
            inoutInfo: {
                intime: new Date(),
                inloc: {
                    lat: '28.5367841',
                    long: '-28.5367841'
                }
            },
            clientId: 'C11223',
            clientName: 'Bill Gates'
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    CheckoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__("../../../../../src/app/checkout/checkout.component.html"),
            styles: [__webpack_require__("../../../../../src/app/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_5__services_clock_service__["a" /* ClockService */]])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/clientinfo/clientinfo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/clientinfo/clientinfo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  clientinfo works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/clientinfo/clientinfo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientinfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientinfoComponent = /** @class */ (function () {
    function ClientinfoComponent() {
    }
    ClientinfoComponent.prototype.ngOnInit = function () {
    };
    ClientinfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-clientinfo',
            template: __webpack_require__("../../../../../src/app/clientinfo/clientinfo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/clientinfo/clientinfo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientinfoComponent);
    return ClientinfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    "appTitle": "EVV",
    "isOffline": false,
    "messages": {
        "LOGIN_ERROR": "Invalid username and password."
    },
    "FaceAPI": {
        "url": "https://westcentralus.api.cognitive.microsoft.com/face/v1.0/",
        "JSONtypeHeader": {
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': '415a491cc97e480490105a7b19703e66'
        },
        "OctectTypeHeader": {
            'Content-Type': 'application/octet-stream',
            'Ocp-Apim-Subscription-Key': '415a491cc97e480490105a7b19703e66'
        }
    },
    "TierionAPI": {
        "URL": " https://api.tierion.com/v1/",
        "Header": {
            "Content-Type": "application/json",
            "X-Username": "jince.george@xe04.ey.com",
            "X-Api-Key": "kXizEl+B4/4wyLXkmpRI6TpbDa35T53yMv21BfGElRM="
        },
        "DataStoreId": "7103"
    }
};


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".app-nav-bar{\n    background: #4472c4;\n   \n}\n\n.example-container {\n    width: 500px;\n    height: 300px;\n    border: 1px solid rgba(0, 0, 0, 0.5);\n  }\n\n.example-sidenav-content {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    height: 100%;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n  }\n\n.example-sidenav {\n    padding: 20px;\n  }\n\n.mat-sidenav-container{\n      height: 80%;\n  }\n\n.mat-drawer-container{\n      height: calc(100vh - 56px);\n     \n     \n  }\n\n.mat-drawer{\n      width: 45%;\n  }\n\n.mat-drawer-content{\n      padding:0;\n  }\n\n.hamburger{\n    background: none;\n    border: none;\n    color: #fff;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"app-nav-bar navbar navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidenav.toggle()\" class=\"hamburger\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand text-white\" href=\"#\">{{config.appTitle}}</a>\n\n</nav>\n<mat-sidenav-container>\n  <mat-sidenav #sidenav mode=\"slide\">\n\n    <app-menu  (click)=\"sidenav.close()\"></app-menu>\n  </mat-sidenav>\n  <mat-sidenav-content> \n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.config = __WEBPACK_IMPORTED_MODULE_1__config_app_config__["a" /* config */];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// globals.ts

var Globals = /** @class */ (function () {
    function Globals() {
        this.role = 'test';
        this.loggedUserFaceId = '';
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "../../../../../src/app/history/history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  history works! history works! history works! history works! history works! history works! history works! history works! history works! history works! history works! history works! history works! history works! history works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-history',
            template: __webpack_require__("../../../../../src/app/history/history.component.html"),
            styles: [__webpack_require__("../../../../../src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HistoryComponent);
    return HistoryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.login-bg{\n    background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/login-bg.jpg")) + ");\n    height: 100%;\n    position: fixed;\n    text-align: center;\n    font-size: 1.5rem;\n}\n.login-card{\n    background-color:transparent;\n  margin-top: 100px;\n  border: none;\n}\n.app-logo{\n    height: 100px;\n}\n.form-control, .form-control:focus,.form-control:active{\n    border: none;\n    background: none;\n    border-bottom: 1px solid;\n    color: #fff;\n    border-radius: 0;\n    -webkit-text-decoration-color: #fff;\n            text-decoration-color: #fff;\n    margin-bottom: 30px;\n    font-size: 1.2rem;\n    \n}\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #fff;\n    opacity: 1; /* Firefox */\n}\n:-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #fff;\n    opacity: 1; /* Firefox */\n}\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #fff;\n    opacity: 1; /* Firefox */\n}\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\n    color: #fff;\n    opacity: 1; /* Firefox */\n}\n.btn-rounded{\n    width: 200px;\n    border-radius: 25px;\n    background-color: transparent;\n    font-size: 1.2rem;\n    border-color: #fff;\n    color: #fff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-app-header></app-app-header> -->\n<div class=\"container login-bg py-5\">\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <img src=\"assets/images/block-chain-icon.png\" class=\"app-logo\">\n        <div class=\"text-white\">{{config.appTitle}}</div>\n          <div class=\"row\">\n              <div class=\"col-md-6 mx-auto\">\n\n                  <!-- form card login -->\n                  <div class=\"card rounded-0 login-card\">\n                     \n                      <div class=\"card-body\">\n                        <form name=\"userform\" method=\"post\" #formCtrl=\"ngForm\">\n                          <div class=\"form-group\">\n                            \n                            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"user.email\" name=\"email\" placeholder=\"Email\" required>\n                          </div>\n<div class=\"form-group\">\n                     \n                      <input type=\"password\" class=\"form-control\" [(ngModel)]=\"user.password\" name=\"password\" placeholder=\"Password\" required>\n                    </div>\n                              <!-- <div>\n                                  <label class=\"custom-control custom-checkbox\">\n                                    <input type=\"checkbox\" class=\"custom-control-input\">\n                                    <span class=\"custom-control-indicator\"></span>\n                                    <span class=\"custom-control-description small text-dark\">Remember me on this computer</span>\n                                  </label>\n                              </div> -->\n                              <button type=\"submit\" class=\"btn btn-rounded btn-lg \" (click)=\"signInWithEmail()\"  [disabled]=\"formCtrl.form.invalid\"  id=\"btnLogin\">Login</button>\n                          </form>\n                      </div>\n                      <!--/card-block-->\n                  </div>\n                  <!-- /form card login -->\n\n              </div>\n\n\n          </div>\n          <!--/row-->\n\n      </div>\n      <!--/col-->\n  </div>\n  <!--/row-->\n</div>\n<!--/container-->\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, spinnerService) {
        this.authService = authService;
        this.router = router;
        this.spinnerService = spinnerService;
        this.config = __WEBPACK_IMPORTED_MODULE_4__config_app_config__["a" /* config */];
        this.user = {
            email: 'jince.george@xe04.ey.com',
            password: 'test123'
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signInWithEmail = function () {
        var _this = this;
        this.spinnerService.show();
        this.authService.signInRegular(this.user.email, this.user.password)
            .then(function (res) {
            console.log(res);
            _this.spinnerService.hide();
            _this.router.navigate(['dashboard']);
        })
            .catch(function (err) {
            console.log('error: ' + err);
            alert(__WEBPACK_IMPORTED_MODULE_4__config_app_config__["a" /* config */].messages.LOGIN_ERROR);
            _this.spinnerService.hide();
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng4_loading_spinner__["Ng4LoadingSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__ = __webpack_require__("../../../material/esm5/sidenav.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_grid_list__["a" /* MatGridListModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_card__["a" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_sidenav__["a" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_grid_list__["a" /* MatGridListModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n    <li class=\"list-group-item\" routerLink=\"/dashboard\">Checkin</li>\n    <li class=\"list-group-item\" routerLink=\"/dashboard/history\">History</li>\n    <li class=\"list-group-item\" routerLink=\"/dashboard/checkout\">Checkout</li>\n    <li class=\"list-group-item\" routerLink=\"/\">Logout</li>\n\n  </ul>"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
            styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(_firebaseAuth, router, http) {
        this._firebaseAuth = _firebaseAuth;
        this.router = router;
        this.http = http;
        this.faceAPiUrl = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/';
        this.user = _firebaseAuth.authState;
    }
    AuthService.prototype.signInRegular = function (email, password) {
        var credential = __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].EmailAuthProvider.credential(email, password);
        return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.getLoggedInUser = function () {
        return this._firebaseAuth.auth.currentUser;
    };
    AuthService.prototype.verifyImage = function (originalImageUrl, selfyImage) {
        // originalImageUrl=  "http://i.cricketcb.com/stats/img/faceImages/25.jpg";
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */](__WEBPACK_IMPORTED_MODULE_7__config_app_config__["a" /* config */].FaceAPI.JSONtypeHeader);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var dataToVerify = {
            "faceId1": (selfyImage),
            "faceId2": (originalImageUrl)
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config_app_config__["a" /* config */].FaceAPI.url + 'verify', dataToVerify, options)
            .map(function (res) {
            return (res.json());
        });
    };
    AuthService.prototype.getFaceId = function (faceImageData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */](__WEBPACK_IMPORTED_MODULE_7__config_app_config__["a" /* config */].FaceAPI.OctectTypeHeader);
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__config_app_config__["a" /* config */].FaceAPI.url + 'detect', this._base64ToArrayBuffer(faceImageData), options)
            .map(function (res) {
            return (res.json());
        });
    };
    AuthService.prototype.makeblob = function (dataURL) {
        var BASE64_MARKER = ';base64,';
        if (dataURL.indexOf(BASE64_MARKER) == -1) {
            var parts = dataURL.split(',');
            var contentType = parts[0].split(':')[1];
            var raw = decodeURIComponent(parts[1]);
            return new Blob([raw], { type: contentType });
        }
        var parts = dataURL.split(BASE64_MARKER);
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;
        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    };
    AuthService.prototype._base64ToArrayBuffer = function (base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/clock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClockService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClockService = /** @class */ (function () {
    function ClockService() {
        this.clock = __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].interval(1000).map(function (tick) { return new Date(); }).share();
    }
    ClockService.prototype.getClock = function () {
        return this.clock;
    };
    ClockService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ClockService);
    return ClockService;
}());



/***/ }),

/***/ "../../../../../src/app/services/location.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocationService = /** @class */ (function () {
    function LocationService() {
    }
    LocationService.prototype.getCurrentLocation = function (locationSuccess, locationError) {
        if (typeof cordova !== 'undefined') {
            navigator.geolocation.getCurrentPosition(function (value) {
                //alert(value);
                var locationObj = {
                    lat: value.coords.latitude,
                    long: value.coords.longitude,
                };
                return locationSuccess(locationObj);
            }, function (value) {
                return locationError(value);
            });
        }
    };
    LocationService.prototype.arePointsNear = function (point1, point2) {
        point1 = new google.maps.LatLng(point1.lat, point1.long);
        point2 = new google.maps.LatLng(point2.lat, point2.long);
        var sw = new google.maps.LatLng(point2.lat() - 0.005, point2.lng() - 0.005);
        var ne = new google.maps.LatLng(point2.lat() + 0.005, point2.lng() + 0.005);
        var bounds = new google.maps.LatLngBounds(sw, ne);
        if (bounds.contains(point1))
            return true;
        return false;
    };
    LocationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocationService);
    return LocationService;
}());



/***/ }),

/***/ "../../../../../src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
    }
    MessageService.prototype.sendMessage = function (message) {
        this.subject.next({ text: message });
    };
    MessageService.prototype.clearMessage = function () {
        this.subject.next();
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/services/tierion.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TierionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_app_config__ = __webpack_require__("../../../../../src/app/config/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TierionService = /** @class */ (function () {
    function TierionService(http) {
        this.http = http;
    }
    TierionService.prototype.saveCheckinToBlockChain = function (checkinData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](__WEBPACK_IMPORTED_MODULE_1__config_app_config__["a" /* config */].TierionAPI.Header);
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var dataToSave = checkinData;
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config_app_config__["a" /* config */].TierionAPI.URL + 'records', dataToSave, options)
            .map(function (res) {
            return (res.json());
        });
    };
    TierionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], TierionService);
    return TierionService;
}());



/***/ }),

/***/ "../../../../../src/app/verify/verify.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".verify-header{\n    height: 70px;\n    background: #ffc000;\n    text-align: center;\n    position: relative;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/verify/verify.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"verify-section\" >\n\n    <div class=\"app-sub-header\">\n  <h4>Verification</h4>\n   </div>\n   \n    <div class=\"image-container\">\n        <img src=\"data:image/jpg;base64,{{base64Image}}\" alt=\"\" class=\"img-fluid\">\n    </div>\n  \n  \n  \n  \n    \n    \n  \n\n    <div class=\"footer-container\" (click)=\"verifyImage();\">\n     <h4>Verify</h4>\n    </div>\n  </section>"

/***/ }),

/***/ "../../../../../src/app/verify/verify.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VerifyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_location_service__ = __webpack_require__("../../../../../src/app/services/location.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_tierion_service__ = __webpack_require__("../../../../../src/app/services/tierion.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VerifyComponent = /** @class */ (function () {
    function VerifyComponent(db, route, spinnerService, authService, globals, locationService, tierionService, router) {
        var _this = this;
        this.db = db;
        this.route = route;
        this.spinnerService = spinnerService;
        this.authService = authService;
        this.globals = globals;
        this.locationService = locationService;
        this.tierionService = tierionService;
        this.router = router;
        this.prodcollection = this.db.collection('agent_c_inout');
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.base64Image = params['imagePath'];
            _this.spinnerService.hide();
        });
    }
    VerifyComponent.prototype.ngOnInit = function () {
    };
    VerifyComponent.prototype.verifyImage = function () {
        var _this = this;
        this.spinnerService.show();
        this.clientLocation = this.globals.clientdata[0];
        this.authService.getFaceId(this.base64Image).subscribe(function (res) {
            if (res != undefined && res.length > 0) {
                _this.authService.verifyImage(res[0].faceId, _this.globals.loggedUserFaceId).subscribe(function (result) {
                    console.log(result);
                    if (result != undefined) {
                        _this.spinnerService.hide();
                        if (result.confidence > 0.5) {
                            _this.locationService.getCurrentLocation(function (value) {
                                if (_this.locationService.arePointsNear(value, _this.clientLocation.location)) {
                                    _this.createCheckinData(value);
                                }
                                else
                                    alert('Please makes sure you have reached the client location before checkin.');
                            }, function (value) {
                                alert('Failed to find your location.');
                            });
                        }
                        else {
                            alert('Face verification has been failed. Please try with your own another selfie.');
                        }
                    }
                });
            }
            else {
                _this.spinnerService.hide();
                alert('There is no face detected in the captured image.');
            }
        });
    };
    VerifyComponent.prototype.saveCheckinDataToFireBase = function (isUpdate) {
        var date = new Date();
        var dateStamp = (date.getMonth() + 1) + '' + date.getDate() + '' + date.getFullYear();
        this.prodcollection.doc(dateStamp.toString()).set(this.checkinDataToSave)
            .catch(function (err) {
            console.log(err);
        });
        if (!isUpdate)
            this.saveCheckinToBlockChain(this.checkinDataToSave);
    };
    VerifyComponent.prototype.saveCheckinToBlockChain = function (dataToSave) {
        var _this = this;
        this.tierionService.saveCheckinToBlockChain(dataToSave).subscribe(function (bcResponse) {
            console.log(bcResponse);
            var blockChainData = {
                bcid: bcResponse.id,
                accountId: bcResponse.accountId,
                datastoreId: bcResponse.datastoreId,
                sha256: bcResponse.sha256,
                status: bcResponse.status,
                timestamp: bcResponse.timestamp,
            };
            _this.checkinDataToSave.blockChanData = blockChainData;
            _this.saveCheckinDataToFireBase(true);
            alert('You are successfully checked in.');
            _this.router.navigate(['dashboard/checkout']);
        });
    };
    VerifyComponent.prototype.createCheckinData = function (locationData) {
        this.checkinDataToSave = {
            datastoreId: 7103,
            agentId: this.globals.agentData[0].agentId,
            agentName: this.globals.agentData[0].name,
            inoutInfo: {
                intime: new Date(),
                inloc: locationData
            },
            clientId: this.globals.clientdata[0].clientid,
            clientName: this.globals.clientdata[0].clientname,
        };
        this.saveCheckinDataToFireBase(false);
    };
    VerifyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-verify',
            template: __webpack_require__("../../../../../src/app/verify/verify.component.html"),
            styles: [__webpack_require__("../../../../../src/app/verify/verify.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerService"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__globals__["a" /* Globals */],
            __WEBPACK_IMPORTED_MODULE_6__services_location_service__["a" /* LocationService */],
            __WEBPACK_IMPORTED_MODULE_7__services_tierion_service__["a" /* TierionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], VerifyComponent);
    return VerifyComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/login-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login-bg.37b57509ff47f603e522.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAMEp0l85Lax7-XAOcjzEuY6moWH-vxgJg",
        authDomain: "evvblockchain-62ed3.firebaseapp.com",
        databaseURL: "https://evvblockchain-62ed3.firebaseio.com",
        projectId: "evvblockchain-62ed3",
        storageBucket: "evvblockchain-62ed3.appspot.com",
        messagingSenderId: "145261578071"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick__ = __webpack_require__("../../../../fastclick/lib/fastclick.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_fastclick__);






__WEBPACK_IMPORTED_MODULE_5_fastclick__["attach"](document.body);
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map