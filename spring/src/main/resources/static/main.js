(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api/api.module.ts":
/*!***********************************!*\
  !*** ./src/app/api/api.module.ts ***!
  \***********************************/
/*! exports provided: ApiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return ApiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuration */ "./src/app/api/configuration.ts");
/* harmony import */ var _api_apiController_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api/apiController.service */ "./src/app/api/api/apiController.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ApiModule = /** @class */ (function () {
    function ApiModule(parentModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
    ApiModule_1 = ApiModule;
    ApiModule.forRoot = function (configurationFactory) {
        return {
            ngModule: ApiModule_1,
            providers: [{ provide: _configuration__WEBPACK_IMPORTED_MODULE_3__["Configuration"], useFactory: configurationFactory }]
        };
    };
    ApiModule = ApiModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            declarations: [],
            exports: [],
            providers: [
                _api_apiController_service__WEBPACK_IMPORTED_MODULE_4__["ApiControllerService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"])()),
        __metadata("design:paramtypes", [ApiModule])
    ], ApiModule);
    return ApiModule;
    var ApiModule_1;
}());



/***/ }),

/***/ "./src/app/api/api/api.ts":
/*!********************************!*\
  !*** ./src/app/api/api/api.ts ***!
  \********************************/
/*! exports provided: APIS, ApiControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return APIS; });
/* harmony import */ var _apiController_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiController.service */ "./src/app/api/api/apiController.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiControllerService", function() { return _apiController_service__WEBPACK_IMPORTED_MODULE_0__["ApiControllerService"]; });



var APIS = [_apiController_service__WEBPACK_IMPORTED_MODULE_0__["ApiControllerService"]];


/***/ }),

/***/ "./src/app/api/api/apiController.service.ts":
/*!**************************************************!*\
  !*** ./src/app/api/api/apiController.service.ts ***!
  \**************************************************/
/*! exports provided: ApiControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiControllerService", function() { return ApiControllerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _encoder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../encoder */ "./src/app/api/encoder.ts");
/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables */ "./src/app/api/variables.ts");
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configuration */ "./src/app/api/configuration.ts");
/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ApiControllerService = /** @class */ (function () {
    function ApiControllerService(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'https://localhost:8081';
        this.defaultHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        this.configuration = new _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]();
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }
    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    ApiControllerService.prototype.canConsumeForm = function (consumes) {
        var form = 'multipart/form-data';
        for (var _i = 0, consumes_1 = consumes; _i < consumes_1.length; _i++) {
            var consume = consumes_1[_i];
            if (form === consume) {
                return true;
            }
        }
        return false;
    };
    ApiControllerService.prototype.add = function (data, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (data === null || data === undefined) {
            throw new Error('Required parameter data was null or undefined when calling add.');
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [
            'application/json'
        ];
        var httpContentTypeSelected = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set("Content-Type", httpContentTypeSelected);
        }
        return this.httpClient.post(this.basePath + "/api/records", data, {
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ApiControllerService.prototype.browse = function (email, offset, limit, observe, reportProgress) {
        if (observe === void 0) { observe = 'body'; }
        if (reportProgress === void 0) { reportProgress = false; }
        if (email === null || email === undefined) {
            throw new Error('Required parameter email was null or undefined when calling browse.');
        }
        var queryParameters = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ encoder: new _encoder__WEBPACK_IMPORTED_MODULE_2__["CustomHttpUrlEncodingCodec"]() });
        if (email !== undefined) {
            queryParameters = queryParameters.set('email', email);
        }
        if (offset !== undefined) {
            queryParameters = queryParameters.set('offset', offset);
        }
        if (limit !== undefined) {
            queryParameters = queryParameters.set('limit', limit);
        }
        var headers = this.defaultHeaders;
        // to determine the Accept header
        var httpHeaderAccepts = [
            '*/*'
        ];
        var httpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set("Accept", httpHeaderAcceptSelected);
        }
        // to determine the Content-Type header
        var consumes = [];
        return this.httpClient.get(this.basePath + "/api/records", {
            params: queryParameters,
            withCredentials: this.configuration.withCredentials,
            headers: headers,
            observe: observe,
            reportProgress: reportProgress
        });
    };
    ApiControllerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()), __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_variables__WEBPACK_IMPORTED_MODULE_3__["BASE_PATH"])), __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"])()),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String, _configuration__WEBPACK_IMPORTED_MODULE_4__["Configuration"]])
    ], ApiControllerService);
    return ApiControllerService;
}());



/***/ }),

/***/ "./src/app/api/configuration.ts":
/*!**************************************!*\
  !*** ./src/app/api/configuration.ts ***!
  \**************************************/
/*! exports provided: Configuration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return Configuration; });
var Configuration = /** @class */ (function () {
    function Configuration(configurationParameters) {
        if (configurationParameters === void 0) { configurationParameters = {}; }
        this.apiKeys = configurationParameters.apiKeys;
        this.username = configurationParameters.username;
        this.password = configurationParameters.password;
        this.accessToken = configurationParameters.accessToken;
        this.basePath = configurationParameters.basePath;
        this.withCredentials = configurationParameters.withCredentials;
    }
    /**
     * Select the correct content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} contentTypes - the array of content types that are available for selection
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderContentType = function (contentTypes) {
        var _this = this;
        if (contentTypes.length == 0) {
            return undefined;
        }
        var type = contentTypes.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return contentTypes[0];
        }
        return type;
    };
    /**
     * Select the correct accept content-type to use for a request.
     * Uses {@link Configuration#isJsonMime} to determine the correct accept content-type.
     * If no content type is found return the first found type if the contentTypes is not empty
     * @param {string[]} accepts - the array of content types that are available for selection.
     * @returns {string} the selected content-type or <code>undefined</code> if no selection could be made.
     */
    Configuration.prototype.selectHeaderAccept = function (accepts) {
        var _this = this;
        if (accepts.length == 0) {
            return undefined;
        }
        var type = accepts.find(function (x) { return _this.isJsonMime(x); });
        if (type === undefined) {
            return accepts[0];
        }
        return type;
    };
    /**
     * Check if the given MIME is a JSON MIME.
     * JSON MIME examples:
     *   application/json
     *   application/json; charset=UTF8
     *   APPLICATION/JSON
     *   application/vnd.company+json
     * @param {string} mime - MIME (Multipurpose Internet Mail Extensions)
     * @return {boolean} True if the given MIME is JSON, false otherwise.
     */
    Configuration.prototype.isJsonMime = function (mime) {
        var jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
        return mime != null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
    };
    return Configuration;
}());



/***/ }),

/***/ "./src/app/api/encoder.ts":
/*!********************************!*\
  !*** ./src/app/api/encoder.ts ***!
  \********************************/
/*! exports provided: CustomHttpUrlEncodingCodec */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomHttpUrlEncodingCodec", function() { return CustomHttpUrlEncodingCodec; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
* CustomHttpUrlEncodingCodec
* Fix plus sign (+) not encoding, so sent as blank space
* See: https://github.com/angular/angular/issues/11058#issuecomment-247367318
*/
var CustomHttpUrlEncodingCodec = /** @class */ (function (_super) {
    __extends(CustomHttpUrlEncodingCodec, _super);
    function CustomHttpUrlEncodingCodec() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomHttpUrlEncodingCodec.prototype.encodeKey = function (k) {
        k = _super.prototype.encodeKey.call(this, k);
        return k.replace(/\+/gi, '%2B');
    };
    CustomHttpUrlEncodingCodec.prototype.encodeValue = function (v) {
        v = _super.prototype.encodeValue.call(this, v);
        return v.replace(/\+/gi, '%2B');
    };
    return CustomHttpUrlEncodingCodec;
}(_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpUrlEncodingCodec"]));



/***/ }),

/***/ "./src/app/api/index.ts":
/*!******************************!*\
  !*** ./src/app/api/index.ts ***!
  \******************************/
/*! exports provided: APIS, BASE_PATH, COLLECTION_FORMATS, Configuration, ApiModule, ApiControllerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/app/api/api/api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "APIS", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["APIS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiControllerService", function() { return _api_api__WEBPACK_IMPORTED_MODULE_0__["ApiControllerService"]; });

/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ "./src/app/api/variables.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["BASE_PATH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return _variables__WEBPACK_IMPORTED_MODULE_1__["COLLECTION_FORMATS"]; });

/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuration */ "./src/app/api/configuration.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Configuration", function() { return _configuration__WEBPACK_IMPORTED_MODULE_2__["Configuration"]; });

/* harmony import */ var _api_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.module */ "./src/app/api/api.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApiModule", function() { return _api_module__WEBPACK_IMPORTED_MODULE_3__["ApiModule"]; });







/***/ }),

/***/ "./src/app/api/variables.ts":
/*!**********************************!*\
  !*** ./src/app/api/variables.ts ***!
  \**********************************/
/*! exports provided: BASE_PATH, COLLECTION_FORMATS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PATH", function() { return BASE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLLECTION_FORMATS", function() { return COLLECTION_FORMATS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var BASE_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('basePath');
var COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
};


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _date_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./date-formatter.service */ "./src/app/date-formatter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(dateFormatter, snackBar) {
        this.dateFormatter = dateFormatter;
        this.snackBar = snackBar;
        this.hrs = Array.from(Array(24), function (_, i) { return i; });
        this.mms = Array.from(Array(60), function (_, i) { return i; });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var added = this.getInput('added');
        if (added && added.value) {
            this.snackBar.open("Tracking for " + added.value + " has been added", 'OK', { duration: 5000 });
        }
    };
    AppComponent.prototype.submit = function ($event) {
        var form = $event.currentTarget;
        form.submit();
    };
    AppComponent.prototype.getInput = function (id) {
        return document.getElementById(id);
    };
    AppComponent.prototype.navPage = function (i) {
        var input = this.getInput('page');
        input.value = (+input.value + i) + '';
    };
    AppComponent.prototype.addRecord = function () {
        var start = this.getInput('start');
        start.value = this.dateFormatter.formatDate(this.startDate, this.startHour, this.startMinute);
        var end = this.getInput('end');
        end.value = this.dateFormatter.formatDate(this.endDate, this.endHour, this.endMinute);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: window.mainTemplate + '',
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_date_formatter_service__WEBPACK_IMPORTED_MODULE_2__["DateFormatterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./src/app/api/index.ts");
/* harmony import */ var _spa_spa_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./spa/spa.component */ "./src/app/spa/spa.component.ts");
/* harmony import */ var _spa_search_spa_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./spa-search/spa-search.component */ "./src/app/spa-search/spa-search.component.ts");
/* harmony import */ var _spa_add_spa_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./spa-add/spa-add.component */ "./src/app/spa-add/spa-add.component.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _spa_spa_component__WEBPACK_IMPORTED_MODULE_8__["SpaComponent"],
                _spa_search_spa_search_component__WEBPACK_IMPORTED_MODULE_9__["SpaSearchComponent"],
                _spa_add_spa_add_component__WEBPACK_IMPORTED_MODULE_10__["SpaAddComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _api__WEBPACK_IMPORTED_MODULE_7__["ApiModule"],
            ],
            providers: [
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"],
                _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
                { provide: _api__WEBPACK_IMPORTED_MODULE_7__["BASE_PATH"], useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].apiPath }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/date-formatter.service.ts":
/*!*******************************************!*\
  !*** ./src/app/date-formatter.service.ts ***!
  \*******************************************/
/*! exports provided: DateFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateFormatterService", function() { return DateFormatterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DateFormatterService = /** @class */ (function () {
    function DateFormatterService(numberPipe, datePipe) {
        this.numberPipe = numberPipe;
        this.datePipe = datePipe;
    }
    DateFormatterService.prototype.formatDate = function (date, hour, minute) {
        return this.datePipe.transform(date, 'dd.MM.yyyy') + ' '
            + this.numberPipe.transform(hour, '2.0-0') + ':'
            + this.numberPipe.transform(minute, '2.0-0');
    };
    DateFormatterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]])
    ], DateFormatterService);
    return DateFormatterService;
}());



/***/ }),

/***/ "./src/app/spa-add/spa-add.component.css":
/*!***********************************************!*\
  !*** ./src/app/spa-add/spa-add.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spa-add/spa-add.component.html":
/*!************************************************!*\
  !*** ./src/app/spa-add/spa-add.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-shade\" *ngIf=\"isLoadingResults\">\n  <mat-spinner></mat-spinner>\n</div>\n<mat-card>\n  <mat-card-title>Input data, and click add</mat-card-title>\n  <mat-card-content>\n    <form action=\"/add\" (ngSubmit)=\"submit();addForm.resetForm()\" method=\"POST\" #addForm=\"ngForm\">\n      <mat-form-field class=\"email\">\n        <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" required email [(ngModel)]=\"inputEmail\" #inputEmailCtrl=\"ngModel\"\n        />\n        <mat-error *ngIf=\"inputEmailCtrl.errors && inputEmailCtrl.errors['required']\">\n          Email is\n          <strong>required</strong>\n        </mat-error>\n        <mat-error *ngIf=\"inputEmailCtrl.errors && inputEmailCtrl.errors['email']\">\n          Please enter a valid email address\n        </mat-error>\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker\" placeholder=\"Start date\" name=\"startDate\" required [(ngModel)]=\"startDate\" #startDateCtrl=\"ngModel\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n        <mat-datepicker #picker></mat-datepicker>\n        <mat-error *ngIf=\"startDateCtrl.errors && startDateCtrl.errors['required']\">\n          Start date is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"time\">\n        <mat-select placeholder=\"Hour\" name=\"startHour\" required [(ngModel)]=\"startHour\" #startHourCtrl=\"ngModel\">\n          <mat-option *ngFor=\"let hr of hrs\" [value]=\"hr\">\n            {{ hr | number:'2.0-0' }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"startHourCtrl.errors && startHourCtrl.errors['required']\">\n          Hour is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"time\">\n        <mat-select placeholder=\"Minute\" name=\"startMinute\" required [(ngModel)]=\"startMinute\" #startMinuteCtrl=\"ngModel\">\n          <mat-option *ngFor=\"let mm of mms\" [value]=\"mm\">\n            {{ mm | number:'2.0-0' }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"startMinuteCtrl.errors && startMinuteCtrl.errors['required']\">\n          Minute is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <br/>\n      <mat-form-field>\n        <input matInput [matDatepicker]=\"picker2\" placeholder=\"End date\" name=\"endDate\" required [(ngModel)]=\"endDate\" #endDateCtrl=\"ngModel\">\n        <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n        <mat-datepicker #picker2></mat-datepicker>\n        <mat-error *ngIf=\"endDateCtrl.errors && endDateCtrl.errors['required']\">\n          End date is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"time\">\n        <mat-select placeholder=\"Hour\" name=\"endHour\" required [(ngModel)]=\"endHour\" #endHourCtrl=\"ngModel\">\n          <mat-option *ngFor=\"let hr of hrs\" [value]=\"hr\">\n            {{ hr | number:'2.0-0' }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"endHourCtrl.errors && endHourCtrl.errors['required']\">\n          Hour is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"time\">\n        <mat-select placeholder=\"Minute\" name=\"endMinute\" required [(ngModel)]=\"endMinute\" #endMinuteCtrl=\"ngModel\">\n          <mat-option *ngFor=\"let mm of mms\" [value]=\"mm\">\n            {{ mm | number:'2.0-0' }}\n          </mat-option>\n        </mat-select>\n        <mat-error *ngIf=\"endMinuteCtrl.errors && endMinuteCtrl.errors['required']\">\n          Minute is\n          <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n      <br/>\n      <input type=\"hidden\" name=\"start\" id=\"start\" />\n      <input type=\"hidden\" name=\"end\" id=\"end\" />\n      <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"!addForm.valid\">\n        <mat-icon>add</mat-icon>Add\n      </button>\n    </form>\n    <div th:if=\"${added != null}\">\n      <input type=\"hidden\" id=\"added\" name=\"added\" th:value=\"${added.email}\" />\n    </div>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/spa-add/spa-add.component.ts":
/*!**********************************************!*\
  !*** ./src/app/spa-add/spa-add.component.ts ***!
  \**********************************************/
/*! exports provided: SpaAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaAddComponent", function() { return SpaAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");
/* harmony import */ var _date_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../date-formatter.service */ "./src/app/date-formatter.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpaAddComponent = /** @class */ (function () {
    function SpaAddComponent(api, dateFormatter, snackBar) {
        this.api = api;
        this.dateFormatter = dateFormatter;
        this.snackBar = snackBar;
        this.hrs = Array.from(Array(24), function (_, i) { return i; });
        this.mms = Array.from(Array(60), function (_, i) { return i; });
        this.isLoadingResults = false;
    }
    SpaAddComponent.prototype.submit = function () {
        var _this = this;
        var start = this.dateFormatter.formatDate(this.startDate, this.startHour, this.startMinute);
        var end = this.dateFormatter.formatDate(this.endDate, this.endHour, this.endMinute);
        this.isLoadingResults = true;
        this.api.add({ email: this.inputEmail, start: start, end: end })
            .subscribe(function (data) {
            _this.isLoadingResults = false;
            _this.snackBar.open("Tracking for " + data.email + " has been added", 'OK', { duration: 5000 });
        });
    };
    SpaAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spa-add',
            template: __webpack_require__(/*! ./spa-add.component.html */ "./src/app/spa-add/spa-add.component.html"),
            styles: [__webpack_require__(/*! ./spa-add.component.css */ "./src/app/spa-add/spa-add.component.css")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_1__["ApiControllerService"],
            _date_formatter_service__WEBPACK_IMPORTED_MODULE_2__["DateFormatterService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], SpaAddComponent);
    return SpaAddComponent;
}());



/***/ }),

/***/ "./src/app/spa-search/spa-search.component.css":
/*!*****************************************************!*\
  !*** ./src/app/spa-search/spa-search.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/spa-search/spa-search.component.html":
/*!******************************************************!*\
  !*** ./src/app/spa-search/spa-search.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"loading-shade\" *ngIf=\"isLoadingResults\">\n  <mat-spinner></mat-spinner>\n</div>\n<mat-card>\n  <mat-card>\n    <mat-card-title>Input email and click search</mat-card-title>\n    <mat-card-content>\n      <form (ngSubmit)=\"submit();searchForm.resetForm()\" #searchForm=\"ngForm\">\n        <mat-form-field class=\"email\">\n          <input type=\"email\" matInput placeholder=\"Email\" name=\"email\" required email [(ngModel)]=\"email\" #emailCtrl=\"ngModel\" />\n          <mat-error *ngIf=\"emailCtrl.errors && emailCtrl.errors['required']\">\n            Email is\n            <strong>required</strong>\n          </mat-error>\n          <mat-error *ngIf=\"emailCtrl.errors && emailCtrl.errors['email']\">\n            Please enter a valid email address\n          </mat-error>\n        </mat-form-field>\n        <button mat-raised-button type=\"submit\" color=\"primary\" [disabled]=\"emailCtrl.errors\">\n          <mat-icon>search</mat-icon>Search\n        </button>\n      </form>\n    </mat-card-content>\n  </mat-card>\n  <br/>\n  <div [hidden]=\"!searchEmail\">\n    <form action=\"/search\" method=\"POST\" (ngSubmit)=\"submit()\">\n      <mat-card [hidden]=\"!dataSource.length\">\n        <mat-card-title>Results</mat-card-title>\n        <mat-card-content>\n          <table class=\"mat-elevation-z8\" mat-table [dataSource]=\"dataSource\">\n\n            <ng-container matColumnDef=\"email\">\n              <th mat-header-cell *matHeaderCellDef> Email </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"start\">\n              <th mat-header-cell *matHeaderCellDef> Start time </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.start | date:'dd.MM.yyyy HH:mm'}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"end\">\n              <th mat-header-cell *matHeaderCellDef> End time </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.end | date:'dd.MM.yyyy HH:mm'}} </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n          <mat-paginator [length]=\"resultLength\" [pageSizeOptions]=\"[5, 10, 20]\"></mat-paginator>\n        </mat-card-content>\n      </mat-card>\n      <mat-card [hidden]=\"dataSource.length\">\n        <mat-card-title>No Data</mat-card-title>\n      </mat-card>\n    </form>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/spa-search/spa-search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/spa-search/spa-search.component.ts ***!
  \****************************************************/
/*! exports provided: SpaSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaSearchComponent", function() { return SpaSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./src/app/api/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpaSearchComponent = /** @class */ (function () {
    function SpaSearchComponent(api) {
        this.api = api;
        this.displayedColumns = ['email', 'start', 'end'];
        this.isLoadingResults = false;
        this.dataSource = [];
        this.resultLength = 0;
        this.searchEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    SpaSearchComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.paginator.page, this.searchEvent)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
            _this.isLoadingResults = true;
            return _this.api.browse(_this.searchEmail, _this.paginator.pageIndex * _this.paginator.pageSize, _this.paginator.pageSize + 1);
        }))
            .subscribe(function (data) {
            _this.isLoadingResults = false;
            var len = _this.paginator.pageIndex * _this.paginator.pageSize + data.length;
            if (data.length === _this.paginator.pageSize + 1) {
                data.splice(_this.paginator.pageSize, 1);
            }
            _this.resultLength = len;
            _this.dataSource = data;
        });
    };
    SpaSearchComponent.prototype.submit = function () {
        this.searchEmail = this.email;
        this.paginator.pageIndex = 0;
        this.searchEvent.next();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], SpaSearchComponent.prototype, "paginator", void 0);
    SpaSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spa-search',
            template: __webpack_require__(/*! ./spa-search.component.html */ "./src/app/spa-search/spa-search.component.html"),
            styles: [__webpack_require__(/*! ./spa-search.component.css */ "./src/app/spa-search/spa-search.component.css")]
        }),
        __metadata("design:paramtypes", [_api__WEBPACK_IMPORTED_MODULE_4__["ApiControllerService"]])
    ], SpaSearchComponent);
    return SpaSearchComponent;
}());



/***/ }),

/***/ "./src/app/spa/spa.component.css":
/*!***************************************!*\
  !*** ./src/app/spa/spa.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spa/spa.component.html":
/*!****************************************!*\
  !*** ./src/app/spa/spa.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Time records\">\n    <app-spa-search></app-spa-search>\n  </mat-tab>\n  <mat-tab label=\"Add time tracking\">\n    <app-spa-add></app-spa-add>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/spa/spa.component.ts":
/*!**************************************!*\
  !*** ./src/app/spa/spa.component.ts ***!
  \**************************************/
/*! exports provided: SpaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaComponent", function() { return SpaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpaComponent = /** @class */ (function () {
    function SpaComponent() {
    }
    SpaComponent.prototype.ngOnInit = function () {
    };
    SpaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-spa',
            template: __webpack_require__(/*! ./spa.component.html */ "./src/app/spa/spa.component.html"),
            styles: [__webpack_require__(/*! ./spa.component.css */ "./src/app/spa/spa.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SpaComponent);
    return SpaComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    apiPath: '.',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/chaowlert/Downloads/timetracker-frontend/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map