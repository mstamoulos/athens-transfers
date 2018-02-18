webpackJsonp([1,4],{

/***/ 215:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 215;


/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(251);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.isNavCollapsed = true;
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(365),
            // styleUrls: ['./app.component.css']
            styles: ["\n    h3 {\n      color: dodgerblue;\n    }\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/app.component.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__server_server_component__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__servers_servers_component__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_navbar_component__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_carousel_component__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home_component__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_router__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_services_services_component__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_booking_booking_component__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_prices_prices_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact_component__ = __webpack_require__(244);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import {MdDatepickerModule} from '@angular/material';












var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_14__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__["a" /* AboutComponent */] },
    {
        path: 'services',
        component: __WEBPACK_IMPORTED_MODULE_17__pages_services_services_component__["a" /* ServicesComponent */],
        data: { title: 'Heroes List' }
    },
    /*  { path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },*/
    { path: 'book', component: __WEBPACK_IMPORTED_MODULE_18__pages_booking_booking_component__["a" /* BookingComponent */] },
    { path: 'prices', component: __WEBPACK_IMPORTED_MODULE_19__pages_prices_prices_component__["a" /* PricesComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact_component__["a" /* ContactComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__server_server_component__["a" /* ServerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__servers_servers_component__["a" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_12__core_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_13__core_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pages_services_services_component__["a" /* ServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_18__pages_booking_booking_component__["a" /* BookingComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pages_prices_prices_component__["a" /* PricesComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pages_contact_contact_component__["a" /* ContactComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ng2_smart_table__["a" /* Ng2SmartTableModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_15__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: true, enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/app.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'ct-carousel',
            template: __webpack_require__(366)
        })
    ], CarouselComponent);
    return CarouselComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/carousel.component.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// core/navbar.component.ts

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.isShow = true;
    }
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'ct-navbar',
            template: __webpack_require__(367)
        })
    ], NavbarComponent);
    return NavbarComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/navbar.component.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__(368),
            styles: [__webpack_require__(309)]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/about.component.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__booking__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BookingComponent = /** @class */ (function () {
    function BookingComponent(http) {
        this.http = http;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__booking__["a" /* Booking */]('', '', '', '', null);
        this.submitted = false;
    }
    BookingComponent.prototype.ngOnInit = function () {
    };
    BookingComponent.prototype.onSubmit = function () {
        console.log('here', JSON.stringify(this.model));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpHeaders */]().set('Content-Type', 'application/json; charset=utf-8');
        this.submitted = true;
        this.http.post('greeting', this.model, { headers: headers }).subscribe(function (data) {
            console.log(data);
        });
    };
    BookingComponent.prototype.newHero = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_1__booking__["a" /* Booking */]('', '', '', '', null);
    };
    BookingComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-booking',
            template: __webpack_require__(369),
            styles: [__webpack_require__(310)]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
    ], BookingComponent);
    return BookingComponent;
    var _a;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/booking.component.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Booking; });
var Booking = /** @class */ (function () {
    function Booking(name, surname, from, to, date) {
        this.name = name;
        this.surname = surname;
        this.from = from;
        this.to = to;
        this.date = date;
    }
    return Booking;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/booking.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__(370),
            styles: [__webpack_require__(311)]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/contact.component.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__(371),
            styles: [__webpack_require__(312)]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/home.component.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricesComponent = /** @class */ (function () {
    function PricesComponent() {
        this.settings = {
            actions: {
                add: false,
                edit: false,
                delete: false
            },
            columns: {
                from: {
                    title: 'From',
                    editable: false
                },
                to: {
                    title: 'To',
                    editable: false
                },
                price: {
                    title: 'Price',
                    editable: false
                }
            }
        };
        this.data = [
            {
                from: "Athens",
                to: "Airport",
                price: "100 euros",
            },
            {
                from: "Athens",
                to: "Airport",
                price: "100 euros",
            },
            {
                from: "Athens",
                to: "Airport",
                price: "100 euros",
            },
            {
                from: "Athens",
                to: "Airport",
                price: "100 euros",
            },
            {
                from: "Athens",
                to: "Airport",
                price: "100 euros",
            },
            {
                from: "Athens",
                to: "Airport",
                price: "100 euros",
            }
        ];
    }
    PricesComponent.prototype.ngOnInit = function () {
    };
    PricesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-prices',
            template: __webpack_require__(372),
            styles: [__webpack_require__(313)]
        }),
        __metadata("design:paramtypes", [])
    ], PricesComponent);
    return PricesComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/prices.component.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_service__ = __webpack_require__(248);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(service) {
        this.service = service;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getServices().then(function (services) {
            return _this.services = services;
        });
        console.log(this.services);
    };
    ServicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-services',
            template: __webpack_require__(373),
            styles: [__webpack_require__(314)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_service__["a" /* ServicesService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_service__["a" /* ServicesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_service__["a" /* ServicesService */]) === "function" && _a || Object])
    ], ServicesComponent);
    return ServicesComponent;
    var _a;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/services.component.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServicesService = /** @class */ (function () {
    function ServicesService(http) {
        this.http = http;
    }
    ServicesService.prototype.extractData = function (res) {
        return res.json();
    };
    ServicesService.prototype.someMethod = function () {
        return this.http.get('/assets/json/services.json').map(this.extractData);
    };
    ServicesService.prototype.getServices = function () {
        return this.http.get('/assets/json/services.json')
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    ServicesService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ServicesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], ServicesService);
    return ServicesService;
    var _a;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/services.service.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.serverId = 10;
        this.serverStatus = 'offline';
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }
    ServerComponent.prototype.getServerStatus = function () {
        return this.serverStatus;
    };
    ServerComponent.prototype.getColor = function () {
        return this.serverStatus === 'online' ? 'green' : 'red';
    };
    ServerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            selector: 'app-server',
            template: __webpack_require__(374),
            styles: ["\n    .online {\n      color: white;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [])
    ], ServerComponent);
    return ServerComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/server.component.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        var _this = this;
        this.allowNewServer = false;
        this.serverCreationStatus = 'No server was created!';
        this.serverName = 'Testserver';
        this.serverCreated = false;
        this.servers = ['Testserver', 'Testserver 2'];
        setTimeout(function () {
            _this.allowNewServer = true;
        }, 2000);
    }
    ServersComponent.prototype.ngOnInit = function () {
    };
    ServersComponent.prototype.onCreateServer = function () {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    };
    ServersComponent.prototype.onUpdateServerName = function (event) {
        this.serverName = event.target.value;
    };
    ServersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
            // selector: '[app-servers]',
            // selector: '.app-servers',
            selector: 'app-servers',
            // template: `
            //   <app-server></app-server>
            //   <app-server></app-server>`,
            template: __webpack_require__(375),
            styles: [__webpack_require__(315)]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());

//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/servers.component.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=d:/Development/theo-taxi/basics-final/src/environment.js.map

/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, ".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

module.exports = "\r\n<ct-navbar></ct-navbar>\r\n<router-outlet></router-outlet>\r\n<router-outlet name=\"popup\"></router-outlet>\r\n<!--<div class=\"container\">\n  <div class=\"row\">\r\n    <div class=\"col-lg-1\">\r\n    </div>\r\n<div class=\"col-10\">\r\n    <ct-carousel></ct-carousel>\r\n  </div>\r\n</div>\r\n<div class=\"col-lg-1\">\r\n</div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\n      <h3>I'm in the AppComponent!<i class=\"fa fa-american-sign-language-interpreting fa-5x\" aria-hidden=\"true\"> </i> </h3>\r\n      <hr>\n      <app-servers></app-servers>\n\n    </div>\n  </div>\n</div>\n-->\n"

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

module.exports = "<ngb-carousel>\r\n  <ng-template ngbSlide>\r\n    <img src=\"assets/img/FB_IMG_1493489257742.jpg\" class=\"img-fluid\" style=\"width:100%\" alt=\"Random first slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>First slide label</h3>\r\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img src=\"assets/img/FB_IMG_1493489271169.jpg\" class=\"img-fluid\" style=\"width:100%\" alt=\"Random second slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Second slide label</h3>\r\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n    </div>\r\n  </ng-template>\r\n  <ng-template ngbSlide>\r\n    <img src=\"assets/img/FB_IMG_1493489483010.jpg\" class=\"img-fluid\" style=\"width:100%\" alt=\"Random third slide\">\r\n    <div class=\"carousel-caption\">\r\n      <h3>Third slide label</h3>\r\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n    </div>\r\n  </ng-template>\r\n</ngb-carousel>\r\n"

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\">\r\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"isShow = !isShow\">\r\n    &#9776;\r\n  </button>\r\n\r\n\r\n  <a class=\"navbar-brand\" href=\"#\"><img style=\"max-height:60px;\" src=\"assets/img/logo.png\"/></a>\r\n  <div class=\"collapse navbar-collapse\" [ngClass]=\"{ 'show': isShow }\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" routerLink=\"home\" routerLinkActive=\"active\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home <span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"about\"><i class=\"fa fa-info-circle\" aria-hidden=\"true\"></i> About us</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"services\"><i class=\"fa fa-car\" aria-hidden=\"true\"></i> Services</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"book\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> Booking</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"prices\"><i class=\"fa fa-euro\" aria-hidden=\"true\"></i> Prices</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"contact\">Contact</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  About us\n</div>\n"

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-lg-2 hidden-xl-up\">\r\n    <img class=\"img-fluid\" style=\"height:100%\" src=\"assets/img/FB_IMG_1493488549488.jpg\" />\r\n  </div>\r\n  <div class=\"col col-md-12 col-lg-9\">\r\n    <div [hidden]=\"submitted\">\r\n      <form (ngSubmit)=\"onSubmit()\" #bookingForm=\"ngForm\" class=\"alternate-theme\" >\r\n        <md-form-field class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Name\" required value=\"\" [(ngModel)]=\"model.name\" name=\"name\" #name=\"ngModel\">\r\n          <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\">\r\n            Name is required\r\n          </div>\r\n        </md-form-field>\r\n        <md-form-field class=\"example-full-width\">\r\n          <input mdInput required placeholder=\"Surname\" value=\"\" [(ngModel)]=\"model.surname\" name=\"surname\" #name=\"ngModel\">\r\n        </md-form-field>\r\n        <md-form-field class=\"example-full-width\">\r\n          <input mdInput required placeholder=\"Email\" value=\"\" [(ngModel)]=\"model.email\" name=\"email\" #name=\"ngModel\">\r\n        </md-form-field>\r\n        <md-form-field class=\"example-full-width\">\r\n          <input mdInput required placeholder=\"From\" value=\"\" [(ngModel)]=\"model.from\" name=\"from\" #name=\"ngModel\">\r\n        </md-form-field>\r\n        <md-form-field required class=\"example-full-width\">\r\n          <input mdInput placeholder=\"To\" value=\"\" [(ngModel)]=\"model.to\" name=\"to\" #name=\"ngModel\">\r\n        </md-form-field>\r\n        <md-form-field required class=\"example-full-width\" >\r\n        <input mdInput [mdDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"model.date\" name=\"date\" #name=\"ngModel\">\r\n        <md-datepicker-toggle mdSuffix [for]=\"picker\"></md-datepicker-toggle>\r\n        <md-datepicker #picker></md-datepicker>\r\n        </md-form-field>\r\n        <button type=\"submit\" md-raised-button class=\"alternate-theme\"  [disabled]=\"!bookingForm.valid\" color=\"primary\">Book</button>\r\n        <button (click)=\"newHero();\"  color=\"accent\" md-raised-button>Clear</button>\r\n      </form>\r\n    </div>\r\n    <div [hidden]=\"!submitted\">\r\n      <h2>You submitted the following:</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Name</div>\r\n        <div class=\"col-xs-9  pull-left\">{{ model.name }}</div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Alter Ego</div>\r\n        <div class=\"col-xs-9 pull-left\"></div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-3\">Power</div>\r\n        <div class=\"col-xs-9 pull-left\"></div>\r\n      </div>\r\n      <br>\r\n      <button class=\"btn btn-primary\" (click)=\"submitted=false\">Edit</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

module.exports = "<p>\n  contact works!\n</p>\n"

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

module.exports = "-\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-1\">\n    </div>\n    <div class=\"col-10\">\n      <ct-carousel></ct-carousel>\n    </div>\n  </div>\n  <div class=\"col-lg-1\"></div>\n"

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-lg-2\">\r\n    <img class=\"img-fluid\" style=\"height:100%\" src=\"assets/img/FB_IMG_1493489386833.jpg\" />\r\n  </div>\r\n  <div class=\"col col-lg-9\">\r\n    <ng2-smart-table [settings]=\"settings\" [source]=\"data\"></ng2-smart-table>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col col-lg-2\">\r\n    <img class=\"img-fluid\" style=\"height:100%\" src=\"assets/img/FB_IMG_1493489449448.jpg\"/>\r\n  </div>\r\n  <div class=\"col col-lg-9\">\r\n    <ngb-accordion [closeOthers]=\"true\">\r\n      <ngb-panel *ngFor=\"let service of services; let i = index;\">\r\n        <ng-template ngbPanelTitle>\r\n          <i class=\"fa {{service.fa}}\" aria-hidden=\"true\"></i> {{service.title}}\r\n        </ng-template>\r\n        <ng-template ngbPanelContent>\r\n          <img src=\"assets/img/{{service.img}}\" class=\" img-fluid rounded float-left\" style=\"width:20%;height:auto\" alt=\"...\"> {{service.text}}\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

module.exports = "<p\n  [ngStyle]=\"{backgroundColor: getColor()}\"\n  [ngClass]=\"{online: serverStatus === 'online'}\">\n  {{ 'Server' }} with ID {{ serverId }} is {{ getServerStatus() }}\n</p>\n"

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

module.exports = "<label>Server Name</label>\n<!--<input-->\n  <!--type=\"text\"-->\n  <!--class=\"form-control\"-->\n  <!--(input)=\"onUpdateServerName($event)\">-->\n<input\n  type=\"text\"\n  class=\"form-control\"\n  [(ngModel)]=\"serverName\">\n<!--<p>{{ serverName }}</p>-->\n<button\n  class=\"btn btn-primary\"\n  [disabled]=\"!allowNewServer\"\n  (click)=\"onCreateServer()\">Add Server</button>\n<!--<p [innerText]=\"allowNewServer\"></p>-->\n<!--<p>{{ serverCreationStatus }}</p>-->\n<p *ngIf=\"serverCreated\">Server was created, server name is {{ serverName }}</p>\n<app-server *ngFor=\"let server of servers\"></app-server>\n"

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(216);


/***/ })

},[424]);
//# sourceMappingURL=main.bundle.js.map