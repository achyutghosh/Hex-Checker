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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _red_red_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./red/red.component */ "./src/app/red/red.component.ts");
/* harmony import */ var _blue_blue_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blue/blue.component */ "./src/app/blue/blue.component.ts");
/* harmony import */ var _green_green_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./green/green.component */ "./src/app/green/green.component.ts");
/* harmony import */ var _yellow_yellow_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./yellow/yellow.component */ "./src/app/yellow/yellow.component.ts");
/* harmony import */ var _grey_grey_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./grey/grey.component */ "./src/app/grey/grey.component.ts");
/* harmony import */ var _other_other_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./other/other.component */ "./src/app/other/other.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");










var routes = [
    { path: "", component: _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"] },
    { path: "red", component: _red_red_component__WEBPACK_IMPORTED_MODULE_3__["RedComponent"] },
    { path: "blue", component: _blue_blue_component__WEBPACK_IMPORTED_MODULE_4__["BlueComponent"] },
    { path: "green", component: _green_green_component__WEBPACK_IMPORTED_MODULE_5__["GreenComponent"] },
    { path: "yellow", component: _yellow_yellow_component__WEBPACK_IMPORTED_MODULE_6__["YellowComponent"] },
    { path: "grey", component: _grey_grey_component__WEBPACK_IMPORTED_MODULE_7__["GreyComponent"] },
    { path: "other", component: _other_other_component__WEBPACK_IMPORTED_MODULE_8__["OtherComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

// Custom Routing Component which holds array of component for routing
var routingComponents = [_red_red_component__WEBPACK_IMPORTED_MODULE_3__["RedComponent"], _blue_blue_component__WEBPACK_IMPORTED_MODULE_4__["BlueComponent"], _green_green_component__WEBPACK_IMPORTED_MODULE_5__["GreenComponent"], _yellow_yellow_component__WEBPACK_IMPORTED_MODULE_6__["YellowComponent"], _green_green_component__WEBPACK_IMPORTED_MODULE_5__["GreenComponent"], _grey_grey_component__WEBPACK_IMPORTED_MODULE_7__["GreyComponent"], _other_other_component__WEBPACK_IMPORTED_MODULE_8__["OtherComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\r\n    text-align: center;\r\n}\r\n\r\n.fa-tint {\r\n    background: #833ab4;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n\r\n    font-size: 200%;\r\n}\r\n\r\n/* Fixing the sidebar position */\r\n\r\n.fixed-side {\r\n padding: 50px;\r\n}\r\n\r\n.red {\r\n    background: #E44236;\r\n    color: #fff;\r\n}\r\n\r\n/* a.activeRed {\r\n    background: #E44236;\r\n    color: #fff;\r\n} */\r\n\r\n.blue {\r\n    background: #3498DB ;\r\n    color: #fff;\r\n}\r\n\r\n.green {\r\n    background: #2ECC72;\r\n    color: #fff;\r\n}\r\n\r\n.yellow {\r\n    background: #EEC213;\r\n    color: #fff;\r\n}\r\n\r\n.grey {\r\n    background: #7B8788;\r\n    color: #fff;\r\n}\r\n\r\n.great {\r\n    background: #EA7773;\r\n    color: #fff;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .color-grid {\r\n        padding-left: 100px;\r\n    }\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDc0IsK0JBQStCO0lBQ3pHLCtEQUErRCxFQUFFLHFFQUFxRTs7SUFFdEksNkJBQTZCO0lBQzdCLG9DQUFvQzs7SUFFcEMsZUFBZTtBQUNuQjs7QUFFQSxnQ0FBZ0M7O0FBQ2hDO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTs7O0dBR0c7O0FBRUg7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFHQTtJQUNJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWdyb3VwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZhLXRpbnQge1xyXG4gICAgYmFja2dyb3VuZDogIzgzM2FiNDsgIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmY2IwNDUsICNmZDFkMWQsICM4MzNhYjQpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmNiMDQ1LCAjZmQxZDFkLCAjODMzYWI0KTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG5cclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxufVxyXG5cclxuLyogRml4aW5nIHRoZSBzaWRlYmFyIHBvc2l0aW9uICovXHJcbi5maXhlZC1zaWRlIHtcclxuIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWQge1xyXG4gICAgYmFja2dyb3VuZDogI0U0NDIzNjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4vKiBhLmFjdGl2ZVJlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTQ0MjM2O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0gKi9cclxuXHJcbi5ibHVlIHtcclxuICAgIGJhY2tncm91bmQ6ICMzNDk4REIgO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkVDQzcyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnllbGxvdyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUVDMjEzO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmdyZXkge1xyXG4gICAgYmFja2dyb3VuZDogIzdCODc4ODtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5ncmVhdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUE3NzczO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5jb2xvci1ncmlkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<br><br><br>\n<div class=\"row\">\n    <!-- Sidebar Column -->\n    <div class=\"col-md-2 mb-2\">\n        <div class=\"list-group\">\n            <div class=\"fixed-side\">\n                <a class=\"list-group-item\"><i class=\"fas fa-tint\"></i></a>\n                <a routerLink=\"/red\" class=\"list-group-item red\"><i class=\"fas fa-fill\"></i> Red</a>\n                <a routerLink=\"/blue\" class=\"list-group-item blue\"><i class=\"fas fa-fill\"></i> Blue</a>\n                <a routerLink=\"/green\" class=\"list-group-item green\"><i class=\"fas fa-fill\"></i> Green</a>\n                <a routerLink=\"/yellow\" class=\"list-group-item yellow\"><i class=\"fas fa-fill\"></i> Yellow</a>\n                <a routerLink=\"/grey\" class=\"list-group-item grey\"><i class=\"fas fa-fill\"></i> Grey</a>\n                <a routerLink=\"/other\" class=\"list-group-item great\"><i class=\"fas fa-fill\"></i> Greats</a>\n            </div>\n        </div>\n    </div>\n    <!-- Content Column -->\n    <div class=\"col-md-10 mb-6 color-grid\">\n        <router-outlet></router-outlet>\n        <!-- <app-red></app-red>\n        <br>\n        <app-blue></app-blue>\n        <br>\n        <app-green></app-green>\n        <br>\n        <app-yellow></app-yellow>\n        <br>\n        <app-grey></app-grey>\n        <br>\n        <app-other></app-other> -->\n        <!-- <hr> -->\n    </div>\n</div>\n<app-footer></app-footer>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularBootstrap';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _service_colors_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/colors.service */ "./src/app/service/colors.service.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["routingComponents"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_11__["ClipboardModule"]],
            providers: [_service_colors_service__WEBPACK_IMPORTED_MODULE_9__["ColorsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blue/blue.component.css":
/*!*****************************************!*\
  !*** ./src/app/blue/blue.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Beautiful Blue */\r\n#blue_3498DB {\r\n    background-color: #3498DB;\r\n}\r\n#blue_74B9FF {\r\n    background-color: #74B9FF;\r\n}\r\n#blue_2475B0 {\r\n    background-color: #2475B0;\r\n}\r\n#blue_0A79DF {\r\n    background-color: #0A79DF;\r\n}\r\n#blue_4834DF {\r\n    background-color: #4834DF;\r\n}\r\n#blue_30336B {\r\n    background-color: #30336B;\r\n}\r\n#blue_487EB0 {\r\n    background-color: #487EB0;\r\n}\r\n#blue_192A56 {\r\n    background-color: #192A56;\r\n}\r\n#blue_6A89CC {\r\n    background-color: #6A89CC;\r\n}\r\n#blue_0A3D62 {\r\n    background-color: #0A3D62;\r\n}\r\n#blue_4BCFFA {\r\n    background-color: #4BCFFA;\r\n}\r\n#blue_0ABDE3 {\r\n    background-color: #0ABDE3;\r\n}\r\n#blue_25CCF7 {\r\n    background-color: #25CCF7;\r\n}\r\n#blue_67E6DC {\r\n    background-color: #67E6DC;\r\n}\r\n#blue_3C40C6 {\r\n    background-color: #3C40C6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmx1ZS9ibHVlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsbUJBQW1CO0FBQ25CO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2JsdWUvYmx1ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQmVhdXRpZnVsIEJsdWUgKi9cclxuI2JsdWVfMzQ5OERCIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4REI7XHJcbn1cclxuI2JsdWVfNzRCOUZGIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NEI5RkY7XHJcbn1cclxuI2JsdWVfMjQ3NUIwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDc1QjA7XHJcbn1cclxuI2JsdWVfMEE3OURGIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTc5REY7XHJcbn1cclxuI2JsdWVfNDgzNERGIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODM0REY7XHJcbn1cclxuI2JsdWVfMzAzMzZCIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMDMzNkI7XHJcbn1cclxuI2JsdWVfNDg3RUIwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODdFQjA7XHJcbn1cclxuI2JsdWVfMTkyQTU2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTJBNTY7XHJcbn1cclxuI2JsdWVfNkE4OUNDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QTg5Q0M7XHJcbn1cclxuI2JsdWVfMEEzRDYyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQTNENjI7XHJcbn1cclxuI2JsdWVfNEJDRkZBIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QkNGRkE7XHJcbn1cclxuI2JsdWVfMEFCREUzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwQUJERTM7XHJcbn1cclxuI2JsdWVfMjVDQ0Y3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNUNDRjc7XHJcbn1cclxuI2JsdWVfNjdFNkRDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2N0U2REM7XHJcbn1cclxuI2JsdWVfM0M0MEM2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzQzQwQzY7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/blue/blue.component.html":
/*!******************************************!*\
  !*** ./src/app/blue/blue.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Beautiful Blue  -->\n<h3><span class=\"badge badge-primary\">\n    <i class=\"fas fa-paint-roller\"></i> Beautiful Blue</span></h3>\n  <div class=\"row\">\n    <div class=\"card\" id=\"{{color.id}}\" *ngFor=\"let color of colors[1].blue\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{color.hexcode}} <i class=\"far fa-clone\" data-toggle=\"tooltip\" data-placement=\"top\"\n            title=\"Copy\" ngxClipboard [cbContent]=\"color.hexcode\"></i></h5>\n      </div>\n    </div>\n  </div>\n\n  "

/***/ }),

/***/ "./src/app/blue/blue.component.ts":
/*!****************************************!*\
  !*** ./src/app/blue/blue.component.ts ***!
  \****************************************/
/*! exports provided: BlueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlueComponent", function() { return BlueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/colors.service */ "./src/app/service/colors.service.ts");



var BlueComponent = /** @class */ (function () {
    function BlueComponent(colorService) {
        this.colorService = colorService;
        this.colors = [];
    }
    BlueComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.getColor()
            .subscribe(function (data) { return _this.colors = data; });
    };
    BlueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blue',
            template: __webpack_require__(/*! ./blue.component.html */ "./src/app/blue/blue.component.html"),
            styles: [__webpack_require__(/*! ./blue.component.css */ "./src/app/blue/blue.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"]])
    ], BlueComponent);
    return BlueComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerText {\r\n    background: #833ab4;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n\r\n    font-size: 150%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CLEdBQUcsOEJBQThCLEdBQ3NCLCtCQUErQjtJQUN6RywrREFBK0QsRUFBRSxxRUFBcUU7O0lBRXRJLDZCQUE2QjtJQUM3QixvQ0FBb0M7O0lBRXBDLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyVGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjODMzYWI0OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZjYjA0NSwgI2ZkMWQxZCwgIzgzM2FiNCk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmY2IwNDUsICNmZDFkMWQsICM4MzNhYjQpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer >\n  <!-- <div class=\"container\"> -->\n    <p class=\"s-0 text-center footerText\"><b>Copyright &copy; Achyut Ghosh</b><a href=\"https://achyutghosh.github.io/\"></a></p>\n  <!-- </div> -->\n  <!-- /.container -->\n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/green/green.component.css":
/*!*******************************************!*\
  !*** ./src/app/green/green.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Golf green */\r\n#green_2ecc72{\r\n    background-color: #2ecc72\r\n}\r\n#green_26ae60{\r\n    background-color: #26ae60\r\n}\r\n#green_6ab04c{\r\n    background-color: #6ab04c\r\n}\r\n#green_6AB04A{\r\n    background-color: #6AB04A\r\n}\r\n#green_badc57{\r\n    background-color: #badc57\r\n}\r\n#green_43BE31{\r\n    background-color: #43BE31\r\n}\r\n#green_45CE30{\r\n    background-color: #45CE30\r\n}\r\n#green_10A881{\r\n    background-color: #10A881\r\n}\r\n#green_1BCA9B{\r\n    background-color: #1BCA9B\r\n}\r\n#green_7CEC9F{\r\n    background-color: #7CEC9F\r\n}\r\n#green_019031{\r\n    background-color: #019031\r\n}\r\n#green_A3CB37{\r\n    background-color: #A3CB37\r\n}\r\n#green_75DA8B{\r\n    background-color: #75DA8B\r\n}\r\n#green_53E0BC{\r\n    background-color: #53E0BC\r\n}\r\n#green_218F76{\r\n    background-color: #218F76\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JlZW4vZ3JlZW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0FBQ2Y7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZ3JlZW4vZ3JlZW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEdvbGYgZ3JlZW4gKi9cclxuI2dyZWVuXzJlY2M3MntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZWNjNzJcclxufVxyXG4jZ3JlZW5fMjZhZTYwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI2YWU2MFxyXG59XHJcbiNncmVlbl82YWIwNGN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmFiMDRjXHJcbn1cclxuI2dyZWVuXzZBQjA0QXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2QUIwNEFcclxufVxyXG4jZ3JlZW5fYmFkYzU3e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhZGM1N1xyXG59XHJcbiNncmVlbl80M0JFMzF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNCRTMxXHJcbn1cclxuI2dyZWVuXzQ1Q0UzMHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NUNFMzBcclxufVxyXG4jZ3JlZW5fMTBBODgxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEwQTg4MVxyXG59XHJcbiNncmVlbl8xQkNBOUJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUJDQTlCXHJcbn1cclxuI2dyZWVuXzdDRUM5RntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Q0VDOUZcclxufVxyXG4jZ3JlZW5fMDE5MDMxe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxOTAzMVxyXG59XHJcbiNncmVlbl9BM0NCMzd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTNDQjM3XHJcbn1cclxuI2dyZWVuXzc1REE4QntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NURBOEJcclxufVxyXG4jZ3JlZW5fNTNFMEJDe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzUzRTBCQ1xyXG59XHJcbiNncmVlbl8yMThGNzZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4Rjc2XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/green/green.component.html":
/*!********************************************!*\
  !*** ./src/app/green/green.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Golf Green  -->\n<h3><span class=\"badge badge-success\"><i class=\"fas fa-paint-roller\"></i> Golf Green</span></h3>\n<div class=\"row\">\n  <div class=\"card\" id=\"{{color.id}}\" *ngFor=\"let color of colors[2].green\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{color.hexcode}} <i class=\"far fa-clone\" data-toggle=\"tooltip\" data-placement=\"top\"\n          title=\"Copy\" ngxClipboard [cbContent]=\"color.hexcode\"></i></h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/green/green.component.ts":
/*!******************************************!*\
  !*** ./src/app/green/green.component.ts ***!
  \******************************************/
/*! exports provided: GreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreenComponent", function() { return GreenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/colors.service */ "./src/app/service/colors.service.ts");



var GreenComponent = /** @class */ (function () {
    function GreenComponent(colorService) {
        this.colorService = colorService;
        this.colors = [];
    }
    GreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.getColor()
            .subscribe(function (data) { return _this.colors = data; });
    };
    GreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-green',
            template: __webpack_require__(/*! ./green.component.html */ "./src/app/green/green.component.html"),
            styles: [__webpack_require__(/*! ./green.component.css */ "./src/app/green/green.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"]])
    ], GreenComponent);
    return GreenComponent;
}());



/***/ }),

/***/ "./src/app/grey/grey.component.css":
/*!*****************************************!*\
  !*** ./src/app/grey/grey.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Old Grey */\r\n#grey_7B8788 {\r\n    background-color: #7B8788;\r\n}\r\n#grey_99AAAB {\r\n    background-color: #99AAAB;\r\n}\r\n#grey_2C3335 {\r\n    background-color: #2C3335;\r\n}\r\n#grey_616C6F {\r\n    background-color: #616C6F;\r\n}\r\n#grey_DAE0E2 {\r\n    background-color: #DAE0E2;\r\n}\r\n#grey_535C68 {\r\n    background-color: #535C68;\r\n}\r\n#grey_333945 {\r\n    background-color: #333945;\r\n}\r\n#grey_2F363F {\r\n    background-color: #2F363F;\r\n}\r\n#grey_586776 {\r\n    background-color: #586776;\r\n}\r\n#grey_8395A7 {\r\n    background-color: #8395A7;\r\n}\r\n#grey_A4B0BD {\r\n    background-color: #A4B0BD;\r\n}\r\n#grey_777E8B {\r\n    background-color: #777E8B;\r\n}\r\n#grey_758AA2 {\r\n    background-color: #758AA2;\r\n}\r\n#grey_47535E {\r\n    background-color: #47535E;\r\n}\r\n#grey_4C4B4B {\r\n    background-color: #4C4B4B;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JleS9ncmV5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYTtBQUNiO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2dyZXkvZ3JleS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogT2xkIEdyZXkgKi9cclxuI2dyZXlfN0I4Nzg4IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Qjg3ODg7XHJcbn1cclxuI2dyZXlfOTlBQUFCIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OUFBQUI7XHJcbn1cclxuI2dyZXlfMkMzMzM1IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQzMzMzU7XHJcbn1cclxuI2dyZXlfNjE2QzZGIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTZDNkY7XHJcbn1cclxuI2dyZXlfREFFMEUyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNEQUUwRTI7XHJcbn1cclxuI2dyZXlfNTM1QzY4IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1MzVDNjg7XHJcbn1cclxuI2dyZXlfMzMzOTQ1IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM5NDU7XHJcbn1cclxuI2dyZXlfMkYzNjNGIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRjM2M0Y7XHJcbn1cclxuI2dyZXlfNTg2Nzc2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODY3NzY7XHJcbn1cclxuI2dyZXlfODM5NUE3IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM4Mzk1QTc7XHJcbn1cclxuI2dyZXlfQTRCMEJEIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBNEIwQkQ7XHJcbn1cclxuI2dyZXlfNzc3RThCIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NzdFOEI7XHJcbn1cclxuI2dyZXlfNzU4QUEyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3NThBQTI7XHJcbn1cclxuI2dyZXlfNDc1MzVFIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NzUzNUU7XHJcbn1cclxuI2dyZXlfNEM0QjRCIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QzRCNEI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/grey/grey.component.html":
/*!******************************************!*\
  !*** ./src/app/grey/grey.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span class=\"badge badge-secondary\"><i class=\"fas fa-paint-roller\"></i> Old Grey</span></h3>\n<div class=\"row\">\n  <div class=\"card\" id=\"{{color.id}}\" *ngFor=\"let color of colors[4].grey\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{color.hexcode}} <i class=\"far fa-clone\" data-toggle=\"tooltip\" data-placement=\"top\"\n          title=\"Copy\" ngxClipboard [cbContent]=\"color.hexcode\"></i></h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/grey/grey.component.ts":
/*!****************************************!*\
  !*** ./src/app/grey/grey.component.ts ***!
  \****************************************/
/*! exports provided: GreyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreyComponent", function() { return GreyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/colors.service */ "./src/app/service/colors.service.ts");



var GreyComponent = /** @class */ (function () {
    function GreyComponent(colorService) {
        this.colorService = colorService;
        this.colors = [];
    }
    GreyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.getColor()
            .subscribe(function (data) { return _this.colors = data; });
    };
    GreyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grey',
            template: __webpack_require__(/*! ./grey.component.html */ "./src/app/grey/grey.component.html"),
            styles: [__webpack_require__(/*! ./grey.component.css */ "./src/app/grey/grey.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"]])
    ], GreyComponent);
    return GreyComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-brand {\r\n    /* Font color */\r\n    background: #833ab4;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n\r\n    /* Font family */\r\n    font-family: \"Lucida Console\", Monaco, monospace;\r\n    font-size: 150%;\r\n}\r\n\r\n.nav-item, .fa-grin-alt, .navbar-toggler{\r\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\r\n    background: #667db6;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to left, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n    font-size: 120%;\r\n}\r\n\r\n.navbar {\r\n background: #fff;  /* fallback for old browsers */\r\n}\r\n\r\n.alert {\r\n    background-color: #FFFFFF;\r\n}\r\n\r\n.alert-heading {\r\n    font-family: \"Comic Sans MS\", cursive, sans-serif;\r\n}\r\n\r\na {\r\n    color: #FFFFFF;\r\n}\r\n\r\n.fa-palette {\r\n    background: #833ab4;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n    background: linear-gradient(to left, #fcb045, #fd1d1d, #833ab4); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQixHQUFHLDhCQUE4QixHQUNzQiwrQkFBK0I7SUFDekcsK0RBQStELEVBQUUscUVBQXFFOztJQUV0SSw2QkFBNkI7SUFDN0Isb0NBQW9DOztJQUVwQyxnQkFBZ0I7SUFDaEIsZ0RBQWdEO0lBQ2hELGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxzRUFBc0U7SUFDdEUsbUJBQW1CLEdBQUcsOEJBQThCLEdBQytCLCtCQUErQjtJQUNsSCx3RUFBd0UsRUFBRSxxRUFBcUU7SUFDL0ksNkJBQTZCO0lBQzdCLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCLEdBQUcsOEJBQThCO0FBQ2xEOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQixHQUFHLDhCQUE4QixHQUNzQiwrQkFBK0I7SUFDekcsK0RBQStELEVBQUUscUVBQXFFOztJQUV0SSw2QkFBNkI7SUFDN0Isb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1icmFuZCB7XHJcbiAgICAvKiBGb250IGNvbG9yICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjODMzYWI0OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZjYjA0NSwgI2ZkMWQxZCwgIzgzM2FiNCk7ICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNmY2IwNDUsICNmZDFkMWQsICM4MzNhYjQpOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcblxyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgLyogRm9udCBmYW1pbHkgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBcIkx1Y2lkYSBDb25zb2xlXCIsIE1vbmFjbywgbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxNTAlO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0sIC5mYS1ncmluLWFsdCwgLm5hdmJhci10b2dnbGVye1xyXG4gICAgZm9udC1mYW1pbHk6IEltcGFjdCwgSGFldHRlbnNjaHdlaWxlciwgJ0FyaWFsIE5hcnJvdyBCb2xkJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQ6ICM2NjdkYjY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjNjY3ZGI2LCAjMDA4MmM4LCAjMDA4MmM4LCAjNjY3ZGI2KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzY2N2RiNiwgIzAwODJjOCwgIzAwODJjOCwgIzY2N2RiNik7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuIGJhY2tncm91bmQ6ICNmZmY7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbn1cclxuXHJcbi5hbGVydCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4uYWxlcnQtaGVhZGluZyB7XHJcbiAgICBmb250LWZhbWlseTogXCJDb21pYyBTYW5zIE1TXCIsIGN1cnNpdmUsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5mYS1wYWxldHRlIHtcclxuICAgIGJhY2tncm91bmQ6ICM4MzNhYjQ7ICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCAjZmNiMDQ1LCAjZmQxZDFkLCAjODMzYWI0KTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2ZjYjA0NSwgI2ZkMWQxZCwgIzgzM2FiNCk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar fixed-top navbar-expand-lg\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" href=\"index.html\"><i class=\"fas fa-palette\"></i> hexChecker</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\n      data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\"\n      aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://achyutghosh.github.io/\"><i class=\"fas fa-code\"></i> About</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/other/other.component.css":
/*!*******************************************!*\
  !*** ./src/app/other/other.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Might be great */\r\n#great_EAF0F1 {\r\n    background-color: #EAF0F1;\r\n}\r\n#great_E74292 {\r\n    background-color: #E74292;\r\n}\r\n#great_01CBC6 {\r\n    background-color: #01CBC6;\r\n}\r\n#great_BB2CD9 {\r\n    background-color: #BB2CD9;\r\n}\r\n#great_8B78E6 {\r\n    background-color: #8B78E6;\r\n}\r\n#great_00CCCD {\r\n    background-color: #00CCCD;\r\n}\r\n#great_1287A5 {\r\n    background-color: #1287A5;\r\n}\r\n#great_EA7773 {\r\n    background-color: #EA7773;\r\n}\r\n#great_2B2B52 {\r\n    background-color: #2B2B52;\r\n}\r\n#great_F5BCBA {\r\n    background-color: #F5BCBA;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RoZXIvb3RoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxtQkFBbUI7QUFDbkI7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9vdGhlci9vdGhlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTWlnaHQgYmUgZ3JlYXQgKi9cclxuI2dyZWF0X0VBRjBGMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUFGMEYxO1xyXG59XHJcbiNncmVhdF9FNzQyOTIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3NDI5MjtcclxufVxyXG4jZ3JlYXRfMDFDQkM2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMUNCQzY7XHJcbn1cclxuI2dyZWF0X0JCMkNEOSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkIyQ0Q5O1xyXG59XHJcbiNncmVhdF84Qjc4RTYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzhCNzhFNjtcclxufVxyXG4jZ3JlYXRfMDBDQ0NEIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMENDQ0Q7XHJcbn1cclxuI2dyZWF0XzEyODdBNSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI4N0E1O1xyXG59XHJcbiNncmVhdF9FQTc3NzMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBNzc3MztcclxufVxyXG4jZ3JlYXRfMkIyQjUyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQjJCNTI7XHJcbn1cclxuI2dyZWF0X0Y1QkNCQSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVCQ0JBO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/other/other.component.html":
/*!********************************************!*\
  !*** ./src/app/other/other.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span class=\"badge badge-info\"><i class=\"fas fa-paint-roller\"></i> Might Be Great</span></h3>\n<div class=\"row\">\n  <div class=\"card\" id=\"{{color.id}}\" *ngFor=\"let color of colors[5].great\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{color.hexcode}} <i class=\"far fa-clone\" data-toggle=\"tooltip\" data-placement=\"top\"\n          title=\"Copy\" ngxClipboard [cbContent]=\"color.hexcode\"></i></h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/other/other.component.ts":
/*!******************************************!*\
  !*** ./src/app/other/other.component.ts ***!
  \******************************************/
/*! exports provided: OtherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherComponent", function() { return OtherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/colors.service */ "./src/app/service/colors.service.ts");



var OtherComponent = /** @class */ (function () {
    function OtherComponent(colorService) {
        this.colorService = colorService;
        this.colors = [];
    }
    OtherComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.getColor()
            .subscribe(function (data) { return _this.colors = data; });
    };
    OtherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-other',
            template: __webpack_require__(/*! ./other.component.html */ "./src/app/other/other.component.html"),
            styles: [__webpack_require__(/*! ./other.component.css */ "./src/app/other/other.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"]])
    ], OtherComponent);
    return OtherComponent;
}());



/***/ }),

/***/ "./src/app/red/red.component.css":
/*!***************************************!*\
  !*** ./src/app/red/red.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Rocking Red */\r\n#E44236 {\r\n    background-color: #E44236;\r\n    border: #E44236;\r\n}\r\n#B83227 {\r\n    background-color: #B83227;\r\n    border: #B83227;\r\n}\r\n#D63031 {\r\n    background-color: #D63031;\r\n    border: #D63031;\r\n}\r\n#E84342 {\r\n    background-color: #E84342;\r\n    border: #E84342;\r\n}\r\n#FF3031 {\r\n    background-color: #FF3031;\r\n    border: #FF3031;\r\n}\r\n#BA2F16 {\r\n    background-color: #BA2F16;\r\n    border: #BA2F16;\r\n}\r\n#EC4849 {\r\n    background-color: #EC4849;\r\n    border: #EC4849;\r\n}\r\n#FF3E4D {\r\n    background-color: #FF3E4D;\r\n    border: #FF3E4D;\r\n}\r\n#E71C23 {\r\n    background-color: #E71C23;\r\n    border: #E71C23;\r\n}\r\n#EA425C {\r\n    background-color: #EA425C;\r\n    border: #EA425C;\r\n}\r\n#E8290B {\r\n    background-color: #E8290B;\r\n    border: #E8290B;\r\n}\r\n#AE1438 {\r\n    background-color: #AE1438;\r\n    border: #AE1438;\r\n}\r\n#E83350 {\r\n    background-color: #E83350;\r\n    border: #E83350;\r\n}\r\n#FF4848 {\r\n    background-color: #FF4848;\r\n    border: #FF4848;\r\n}\r\n#FF362E {\r\n    background-color: #FF362E;\r\n    border: #FF362E;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVkL3JlZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUNoQjtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9yZWQvcmVkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSb2NraW5nIFJlZCAqL1xyXG4jRTQ0MjM2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNDQyMzY7XHJcbiAgICBib3JkZXI6ICNFNDQyMzY7XHJcbn1cclxuXHJcbiNCODMyMjcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4MzIyNztcclxuICAgIGJvcmRlcjogI0I4MzIyNztcclxufVxyXG5cclxuI0Q2MzAzMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDYzMDMxO1xyXG4gICAgYm9yZGVyOiAjRDYzMDMxO1xyXG59XHJcblxyXG4jRTg0MzQyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODQzNDI7XHJcbiAgICBib3JkZXI6ICNFODQzNDI7XHJcbn1cclxuXHJcbiNGRjMwMzEge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGMzAzMTtcclxuICAgIGJvcmRlcjogI0ZGMzAzMTtcclxufVxyXG5cclxuI0JBMkYxNiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkEyRjE2O1xyXG4gICAgYm9yZGVyOiAjQkEyRjE2O1xyXG59XHJcblxyXG4jRUM0ODQ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQzQ4NDk7XHJcbiAgICBib3JkZXI6ICNFQzQ4NDk7XHJcbn1cclxuXHJcbiNGRjNFNEQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGM0U0RDtcclxuICAgIGJvcmRlcjogI0ZGM0U0RDtcclxufVxyXG5cclxuI0U3MUMyMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTcxQzIzO1xyXG4gICAgYm9yZGVyOiAjRTcxQzIzO1xyXG59XHJcblxyXG4jRUE0MjVDIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQTQyNUM7XHJcbiAgICBib3JkZXI6ICNFQTQyNUM7XHJcbn1cclxuXHJcbiNFODI5MEIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U4MjkwQjtcclxuICAgIGJvcmRlcjogI0U4MjkwQjtcclxufVxyXG5cclxuI0FFMTQzOCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUUxNDM4O1xyXG4gICAgYm9yZGVyOiAjQUUxNDM4O1xyXG59XHJcblxyXG4jRTgzMzUwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFODMzNTA7XHJcbiAgICBib3JkZXI6ICNFODMzNTA7XHJcbn1cclxuXHJcbiNGRjQ4NDgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNDg0ODtcclxuICAgIGJvcmRlcjogI0ZGNDg0ODtcclxufVxyXG5cclxuI0ZGMzYyRSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYzNjJFO1xyXG4gICAgYm9yZGVyOiAjRkYzNjJFO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/red/red.component.html":
/*!****************************************!*\
  !*** ./src/app/red/red.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Rocking Red  -->\r\n<h3><span class=\"badge badge-danger\"><i class=\"fas fa-paint-roller\"></i> Rocking Red</span></h3>\r\n<div class=\"row\">\r\n    <div class=\"card\" id=\"{{color.id}}\" *ngFor=\"let color of colors[0].red\">\r\n        <div class=\"card-body\">\r\n            <h5 class=\"card-title\">{{color.hexcode}} <i class=\"far fa-clone\" data-toggle=\"tooltip\" data-placement=\"top\" \r\n                title=\"Copy\" ngxClipboard [cbContent]=\"color.hexcode\"></i></h5>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/red/red.component.ts":
/*!**************************************!*\
  !*** ./src/app/red/red.component.ts ***!
  \**************************************/
/*! exports provided: RedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedComponent", function() { return RedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/colors.service */ "./src/app/service/colors.service.ts");



var RedComponent = /** @class */ (function () {
    function RedComponent(colorService) {
        this.colorService = colorService;
        this.colors = [];
    }
    RedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.getColor()
            .subscribe(function (data) { return _this.colors = data; });
    };
    RedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-red',
            template: __webpack_require__(/*! ./red.component.html */ "./src/app/red/red.component.html"),
            styles: [__webpack_require__(/*! ./red.component.css */ "./src/app/red/red.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"]])
    ], RedComponent);
    return RedComponent;
}());



/***/ }),

/***/ "./src/app/service/colors.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/colors.service.ts ***!
  \*******************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ColorsService = /** @class */ (function () {
    function ColorsService(http) {
        this.http = http;
        this._url = "/assets/data/color.json";
    }
    ColorsService.prototype.getColor = function () {
        return this.http.get(this._url);
    };
    ColorsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ColorsService);
    return ColorsService;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".landing-flex{\r\n    padding-top: 65px;\r\n    padding-right: 70px;\r\n}\r\n\r\n.jumbotron {\r\n  background: #757F9A;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to left, #D7DDE8, #757F9A); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n\r\n\r\n   color: #fff;\r\n}\r\n\r\n.red {\r\n    color: #FF362E;\r\n}\r\n\r\n.green {\r\n    color: #019031;\r\n}\r\n\r\n.blue {\r\n    color: #0ABDE3;\r\n}\r\n\r\n.yellow {\r\n    color: #E1DA00;\r\n}\r\n\r\n.fa-brush {\r\n    color: #BB2CD9;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0VBQ0UsbUJBQW1CLEdBQUcsOEJBQThCLEdBQ2EsK0JBQStCO0VBQ2hHLHNEQUFzRCxFQUFFLHFFQUFxRTs7O0dBRzVILFdBQVc7QUFDZDs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFuZGluZy1mbGV4e1xyXG4gICAgcGFkZGluZy10b3A6IDY1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xyXG59XHJcblxyXG4uanVtYm90cm9uIHtcclxuICBiYWNrZ3JvdW5kOiAjNzU3RjlBOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICNEN0RERTgsICM3NTdGOUEpOyAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI0Q3RERFOCwgIzc1N0Y5QSk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuXHJcblxyXG4gICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnJlZCB7XHJcbiAgICBjb2xvcjogI0ZGMzYyRTtcclxufVxyXG5cclxuLmdyZWVuIHtcclxuICAgIGNvbG9yOiAjMDE5MDMxO1xyXG59XHJcblxyXG4uYmx1ZSB7XHJcbiAgICBjb2xvcjogIzBBQkRFMztcclxufVxyXG5cclxuLnllbGxvdyB7XHJcbiAgICBjb2xvcjogI0UxREEwMDtcclxufVxyXG5cclxuLmZhLWJydXNoIHtcclxuICAgIGNvbG9yOiAjQkIyQ0Q5O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex p-2\">\r\n    <div class=\"landing-flex\">\r\n        <div class=\"jumbotron\">\r\n            <h1 class=\"display-4\"><span class=\"red\">Say </span> <span class=\"green\">hello </span> <span class=\"blue\">to </span> <span class=\"yellow\">colors </span> <i class=\"fas fa-brush\"></i></h1>\r\n            <p class=\"lead\"><b>Mere color, unspoiled by meaning, and unallied with definite form, can speak to the soul in a thousand different ways.\r\n            <i class=\"fas fa-paint-brush\"></i></b></p>\r\n            <hr class=\"my-4\">\r\n            <h5 class=\"msg\">This is a little contrebution to the developer community. Choose your color from the side menu.</h5>\r\n            <h6></h6>\r\n            <!-- <a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">Learn more</a> -->\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/yellow/yellow.component.css":
/*!*********************************************!*\
  !*** ./src/app/yellow/yellow.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Fresh Yellow */\r\n#EEC213 {\r\n    background-color: #EEC213;\r\n}\r\n#F5C469 {\r\n    background-color: #F5C469;\r\n}\r\n#F4C724 {\r\n    background-color: #F4C724;\r\n}\r\n#F0DF87 {\r\n    background-color: #F0DF87;\r\n}\r\n#DFAF2B {\r\n    background-color: #DFAF2B;\r\n}\r\n#FAC42F {\r\n    background-color: #FAC42F;\r\n}\r\n#F3B63A {\r\n    background-color: #F3B63A;\r\n}\r\n#FBD28B {\r\n    background-color: #FBD28B;\r\n}\r\n#F3B431 {\r\n    background-color: #F3B431;\r\n}\r\n#FAD02E {\r\n    background-color: #FAD02E;\r\n}\r\n#E5B143 {\r\n    background-color: #E5B143;\r\n}\r\n#F3CC79 {\r\n    background-color: #F3CC79;\r\n}\r\n#F9DDA4 {\r\n    background-color: #F9DDA4;\r\n}\r\n#FFF222 {\r\n    background-color: #FFF222;\r\n}\r\n#E1DA00 {\r\n    background-color: #E1DA00;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAveWVsbG93L3llbGxvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFpQjtBQUNqQjtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC95ZWxsb3cveWVsbG93LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGcmVzaCBZZWxsb3cgKi9cclxuI0VFQzIxMyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVDMjEzO1xyXG59XHJcbiNGNUM0Njkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y1QzQ2OTtcclxufVxyXG4jRjRDNzI0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEM3MjQ7XHJcbn1cclxuI0YwREY4NyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBERjg3O1xyXG59XHJcbiNERkFGMkIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0RGQUYyQjtcclxufVxyXG4jRkFDNDJGIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUM0MkY7XHJcbn1cclxuI0YzQjYzQSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjNCNjNBO1xyXG59XHJcbiNGQkQyOEIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZCRDI4QjtcclxufVxyXG4jRjNCNDMxIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0I0MzE7XHJcbn1cclxuI0ZBRDAyRSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFEMDJFO1xyXG59XHJcbiNFNUIxNDMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U1QjE0MztcclxufVxyXG4jRjNDQzc5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGM0NDNzk7XHJcbn1cclxuI0Y5RERBNCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlEREE0O1xyXG59XHJcbiNGRkYyMjIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjIyMjtcclxufVxyXG4jRTFEQTAwIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMURBMDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/yellow/yellow.component.html":
/*!**********************************************!*\
  !*** ./src/app/yellow/yellow.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3><span class=\"badge badge-warning\"><i class=\"fas fa-paint-roller\"></i> Fresh Yellow</span></h3>\n<div class=\"row\">\n  <div class=\"card\" id=\"{{color.id}}\" *ngFor=\"let color of colors[3].yellow\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{color.hexcode}} <i class=\"far fa-clone\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Copy\"\n        ngxClipboard [cbContent]=\"color.hexcode\"></i></h5>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/yellow/yellow.component.ts":
/*!********************************************!*\
  !*** ./src/app/yellow/yellow.component.ts ***!
  \********************************************/
/*! exports provided: YellowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YellowComponent", function() { return YellowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/colors.service */ "./src/app/service/colors.service.ts");



var YellowComponent = /** @class */ (function () {
    function YellowComponent(colorService) {
        this.colorService = colorService;
        this.colors = [];
    }
    YellowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.colorService.getColor()
            .subscribe(function (data) { return _this.colors = data; });
    };
    YellowComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-yellow',
            template: __webpack_require__(/*! ./yellow.component.html */ "./src/app/yellow/yellow.component.html"),
            styles: [__webpack_require__(/*! ./yellow.component.css */ "./src/app/yellow/yellow.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"]])
    ], YellowComponent);
    return YellowComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\Projects\hexChecker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map