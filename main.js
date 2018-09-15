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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<app-list-of-books></app-list-of-books>\r\n\r\n"

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
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_of_books_list_of_books_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-of-books/list-of-books.component */ "./src/app/list-of-books/list-of-books.component.ts");
/* harmony import */ var _book_item_book_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./book-item/book-item.component */ "./src/app/book-item/book-item.component.ts");
/* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-form/edit-form.component */ "./src/app/edit-form/edit-form.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _book_item_book_item_component__WEBPACK_IMPORTED_MODULE_6__["BookItemComponent"],
                _list_of_books_list_of_books_component__WEBPACK_IMPORTED_MODULE_5__["ListOfBooksComponent"],
                _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_7__["EditFormComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-item/book-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-item/book-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n    max-width: 400px;\r\n}\r\n\r\n.truncate {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n  }\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 40%;\r\n    z-index: 10;\r\n}"

/***/ }),

/***/ "./src/app/book-item/book-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-item/book-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"item col-xs-4 col-lg-12\">\n  <div class=\"thumbnail card\">\n    <div class=\"img-event\">\n      <img class=\"group list-group-image img-fluid\" style=\"width:400px; height: 250px;\" src={{imgLink}} alt=\"\" />\n    </div>\n    <div class=\"caption card-body\">\n        <label >Title:</label>\n      <h4 class=\" book-line mw-100 alert alert-success truncate\" title=\"{{bookTitle|titlecase}}\">{{bookTitle|titlecase}}</h4>\n      <label >Authors:</label>\n      <div class=\" book-line alert alert-info truncate\" title=\"{{author?author:'Unknown' | titlecase}}\"> {{author?author:'Unknown' | titlecase}}</div>\n      <label >Published date:</label>\n      <div class=\"alert alert-info \" title=\"{{publishDate?publishDate : 'Unknown'}}\"> {{publishDate?publishDate : 'Unknown'}}</div>\n      <label >Book ID:</label>\n      <div class=\"book-line alert alert-info truncate\" title=\"{{id}}\"> {{id}}</div>\n      <div> </div>\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-md-6\">\n          <p class=\"lead\">\n          </p>\n        </div>\n        <div class=\" btn-group col-xs-12 col-md-12\">\n          <a class=\"btn btn-info btn-md\" (click)=\"showEditDialog()\">Edit</a>\n          <a class=\"btn btn-danger btn-md\" (click)=\"showModalDelete = true\">Delete</a>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Edit window  -->\n\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalEditForm\" class=\"overlay\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Edit book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalEditForm = false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"form-group  \">\n          <label >Title:</label>\n          <input type=\"text\" class=\"form-control\" style=\"max-width: 400px\" [(ngModel)]=\"updatedBookTitle\" required>\n        </div>\n        <div class=\"form-group\">\n          <label>Authors:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"updatedAuthor\">\n        </div>\n        <div class=\"form-group\">\n          <label>Publish Date::</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"updatedPublishDate\">\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"saveBtn();\">Save changes</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"showModalEditForm = false\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Delete msg -->\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalDelete\" class=\"overlay\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Delete the book ?</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalDelete = false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteBtn();\">Yes</button>\n        <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalDelete = false\">No</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Author error -->\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalAuthorErr\" class=\"center\" class=\"overlay\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-danger\">Author field can't be empty</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalAuthorErr = false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalAuthorErr = false\">Ok</button>\n    </div>\n  </div>\n</div>\n\n<!-- Title error -->\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalTitleErr\" class=\"overlay\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-danger\">Title field can't be empty</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalTitleErr = false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalTitleErr = false\">Ok</button>\n    </div>\n  </div>\n</div>\n\n<!-- Empty date error -->\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalDateEmptyErr\" class=\"overlay\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title text-danger\">Publish date field was empty and has been changed to \"Unknown\"</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalDateEmptyErr = false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalDateEmptyErr = false\">Ok</button>\n    </div>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/book-item/book-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-item/book-item.component.ts ***!
  \**************************************************/
/*! exports provided: BookItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookItemComponent", function() { return BookItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookItemComponent = /** @class */ (function () {
    function BookItemComponent(bookService) {
        this.bookService = bookService;
    }
    BookItemComponent.prototype.ngOnInit = function () {
        console.log(this.author);
    };
    BookItemComponent.prototype.saveBtn = function () {
        this.showModalEditForm = false;
        if (this.updatedBookTitle != "") {
            this.bookTitle = this.updatedBookTitle;
        }
        else {
            this.showModalTitleErr = true;
            this.showModalEditForm = true;
        }
        if (this.updatedPublishDate != "") {
            this.publishDate = this.updatedPublishDate;
        }
        else {
            this.publishDate = "Unknown";
            this.showModalDateEmptyErr = true;
        }
        if (this.updatedAuthor != "") {
            this.author = this.updatedAuthor;
        }
        else {
            this.showModalAuthorErr = true;
            this.showModalEditForm = true;
        }
    };
    BookItemComponent.prototype.deleteBtn = function () {
        var _this = this;
        var bookToDelete = this.books.find(function (book) { return book.id === _this.id; });
        var index = this.books.indexOf(bookToDelete);
        this.books.splice(index, 1);
    };
    BookItemComponent.prototype.showEditDialog = function () {
        this.updatedAuthor = this.author;
        this.updatedBookTitle = this.bookTitle;
        this.updatedPublishDate = this.publishDate;
        this.showModalEditForm = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookItemComponent.prototype, "bookTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookItemComponent.prototype, "publishDate", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookItemComponent.prototype, "author", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookItemComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BookItemComponent.prototype, "imgLink", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], BookItemComponent.prototype, "books", void 0);
    BookItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-item',
            template: __webpack_require__(/*! ./book-item.component.html */ "./src/app/book-item/book-item.component.html"),
            styles: [__webpack_require__(/*! ./book-item.component.css */ "./src/app/book-item/book-item.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], BookItemComponent);
    return BookItemComponent;
}());



/***/ }),

/***/ "./src/app/edit-form/edit-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-form/edit-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/edit-form/edit-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.ts ***!
  \**************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
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

var EditFormComponent = /** @class */ (function () {
    function EditFormComponent() {
    }
    EditFormComponent.prototype.ngOnInit = function () {
    };
    EditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-form',
            template: __webpack_require__(/*! ./edit-form.component.html */ "./src/app/edit-form/edit-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-form.component.css */ "./src/app/edit-form/edit-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditFormComponent);
    return EditFormComponent;
}());



/***/ }),

/***/ "./src/app/list-of-books/list-of-books.component.css":
/*!***********************************************************!*\
  !*** ./src/app/list-of-books/list-of-books.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/list-of-books/list-of-books.component.html":
/*!************************************************************!*\
  !*** ./src/app/list-of-books/list-of-books.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center\">Find books</h1>\n<div col-lg-6 >\n    <div class=\"input-group\">\n      <input type=\"text\" [(ngModel)]=\"searchInput\" class=\"form-control\" placeholder=\"Book search\" aria-label=\"Book search\"\n        aria-describedby=\"basic-addon2\">\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-success\" type=\"button\" (click)=\"searchBooks()\">Search</button>\n      </div>\n    </div>\n    <h2 *ngIf=\"books\" class=\"text-center\">Or create a new book</h2>\n    <button *ngIf=\"books\" class=\"float-right btn-success\" (click)=\"showModalCreateNewBook=true\">Create a new book</button>\n\n</div>\n\n      <!-- Book created msg -->\n      <div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalBookCreated\" class=\"overlay\">\n            <div class=\"modal-dialog\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h5 class=\"modal-title text-danger\">A new book has been created </h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalBookCreated = false\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalBookCreated = false\">Ok</button>\n              </div>\n            </div>\n          </div>\n\n<!-- Create new book -->\n\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalCreateNewBook\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\">Create a new book</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalCreateNewBook = false\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"form-group  \">\n          <label data.error.message=\"Required field!\">Title:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"bookTitle\">\n        </div>\n        <div class=\"form-group\">\n          <label>Authors:</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"author\">\n        </div>\n        <div class=\"form-group\">\n          <label>Publish Date::</label>\n          <input type=\"date\" class=\"form-control\" [(ngModel)]=\"publishDate\">\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"addBtn();\">Add This book</button>\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"showModalCreateNewBook = false\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Title error -->\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalTitleErr\" class=\"overlay\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title text-danger\">Title field can't be empty</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalTitleErr = false\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalTitleErr = false\">Ok</button>\n          </div>\n        </div>\n      </div>\n\n<!-- Author error -->\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalAuthorErr\" class=\"center\" class=\"overlay\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title text-danger\">Author field was empty and has been changed to \"Unknown\"</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalAuthorErr = false\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalAuthorErr = false\">Ok</button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Empty date error -->\n<div tabindex=\"-1\" role=\"dialog\" *ngIf=\"showModalDateEmptyErr\" class=\"overlay\">\n        <div class=\"modal-dialog\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h5 class=\"modal-title text-danger\">Publish date field was empty and has been changed to \"Unknown\"</h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"showModalDateEmptyErr = false\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n            <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"showModalDateEmptyErr = false\">Ok</button>\n          </div>\n        </div>\n      </div>\n\n\n<!-- Book item container -->\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 my-3\">\n      <div class=\"pull-right\">\n        <div class=\"btn-group\">\n          <button class=\"btn btn-info\" id=\"list\">\n            View style 1\n          </button>\n          <button class=\"btn btn-danger\" id=\"grid\">\n            View style 2\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div id=\"products\" class=\"row view-group\">\n    <app-book-item *ngFor=\"let book of books\" [bookTitle]=\"book.volumeInfo.title\" [author]=\"book.volumeInfo.authors\"\n      [id]=\"book.id\" [books]=\"books\" [publishDate]=\"book.volumeInfo.publishedDate\" [imgLink]=\"book.volumeInfo.imageLinks\n              &&book.volumeInfo.imageLinks.smallThumbnail?\n              book.volumeInfo.imageLinks.smallThumbnail:\n              'https://www.usj.es/blogs/universidad-san-jorge/wp-content/uploads/2018/06/libro.png'\">\n\n    </app-book-item>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/list-of-books/list-of-books.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/list-of-books/list-of-books.component.ts ***!
  \**********************************************************/
/*! exports provided: ListOfBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOfBooksComponent", function() { return ListOfBooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/book.service */ "./src/app/shared/book.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListOfBooksComponent = /** @class */ (function () {
    function ListOfBooksComponent(bookService) {
        this.bookService = bookService;
        this.bookTitle = "";
        this.publishDate = "";
        this.author = "";
    }
    ListOfBooksComponent.prototype.ngOnInit = function () {
        this.searchBooks();
    };
    //search button
    ListOfBooksComponent.prototype.searchBooks = function () {
        var _this = this;
        this.bookService.getBooksList(this.searchInput)
            .subscribe(function (data) {
            _this.books = data.items;
        });
    };
    //generate Book ID
    ListOfBooksComponent.prototype.generateId = function () {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    ;
    ListOfBooksComponent.prototype.addBtn = function () {
        var book = Object();
        var volumeInfo = new Object();
        book.volumeInfo = volumeInfo;
        this.allchecked = false;
        //title validation
        if (this.bookTitle != "") {
            book.volumeInfo.title = this.bookTitle;
            this.allchecked = true;
        }
        else {
            this.showModalTitleErr = true;
            this.allchecked = false;
        }
        //author validation
        if (this.author != "") {
            book.volumeInfo.authors = this.author;
        }
        else {
            this.showModalAuthorErr = true;
        }
        //date validation
        if (this.publishDate != "") {
            book.volumeInfo.publishedDate = this.publishDate;
        }
        else {
            this.showModalDateEmptyErr = true;
        }
        book.id = this.generateId();
        if (this.allchecked) {
            this.author = this.bookTitle = this.publishDate = '';
            this.books.push(book);
            this.showModalCreateNewBook = false;
            this.showModalBookCreated = true;
        }
    };
    ListOfBooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-of-books',
            template: __webpack_require__(/*! ./list-of-books.component.html */ "./src/app/list-of-books/list-of-books.component.html"),
            styles: [__webpack_require__(/*! ./list-of-books.component.css */ "./src/app/list-of-books/list-of-books.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]])
    ], ListOfBooksComponent);
    return ListOfBooksComponent;
}());



/***/ }),

/***/ "./src/app/shared/book.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/book.service.ts ***!
  \****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = /** @class */ (function () {
    function BookService(http) {
        this.http = http;
    }
    //Ajax
    BookService.prototype.getBooksList = function (searchIndex) {
        return this.http.get("https://www.googleapis.com/books/v1/volumes?q=" + searchIndex)
            .map(function (res) { return res.json(); });
    };
    BookService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], BookService);
    return BookService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular5\List-of-books-page(15.9.18)\List-of-books-page\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map