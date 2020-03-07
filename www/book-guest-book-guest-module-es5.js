function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["book-guest-book-guest-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/book-guest/book-guest.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/book-guest/book-guest.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBookGuestBookGuestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <!-- <ion-menu-button></ion-menu-button> -->\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Book a Guest</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"book-guest-content\">\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)='bookGroupGuest()'>\n        <ion-fab-button>\n            <ion-icon name=\"people\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-item>\n\n        <!-- <div class=\"import__contact\"> -->\n        <h3 id=\"import_contact--text\" item-left>Import Contact From Your Device</h3>\n        <ion-button id='import_contact--button' expand='block' fill='solid' (click)='importContact()'>\n            <ion-icon name=\"person-add\"></ion-icon>\n            <!-- Import Contact -->\n        </ion-button>\n        <!-- </div> -->\n    </ion-item>\n    <form [formGroup]=\"guestForm\" (ngSubmit)=\"bookGuest()\">\n        <ion-list lines='full'>\n            <!-- NAME -->\n            <ion-item class=\"input-item\">\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input type=\"text\" formControlName=\"name\" inputmode=\"text\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.name\">\n                    <div class=\"error-message\" *ngIf=\"guestForm.get('name').hasError(validation.type) && (guestForm.get('name').dirty || guestForm.get('name').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- PHONE NUMBER -->\n            <ion-item class=\"input-item\">\n                <ion-label position=\"floating\">Phone Number</ion-label>\n                <ion-input type=\"text\" formControlName=\"phone\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.phone\">\n                    <div class=\"error-message\" *ngIf=\"guestForm.get('phone').hasError(validation.type) && (guestForm.get('phone').dirty || guestForm.get('phone').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- GENDER -->\n            <ion-item class=\"input-item\">\n                <ion-label position=\"floating\">Gender</ion-label>\n                <ion-select placeholder=\"Select One\" formControlName='gender'>\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                    <ion-select-option value=\"other\">Other</ion-select-option>\n                </ion-select>\n                <!-- <ion-input type=\"text\" formControlName=\"phone\"></ion-input> -->\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.gender\">\n                    <div class=\"error-message\" *ngIf=\"guestForm.get('gender').hasError(validation.type) && (guestForm.get('gender').dirty || guestForm.get('gender').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- VEHICLE MAKE -->\n            <ion-item class=\"input-item\">\n                <ion-label position=\"floating\">Vehicle Make</ion-label>\n                <ion-input type=\"text\" formControlName=\"vehicleMake\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.vehicleMake\">\n                    <div class=\"error-message\" *ngIf=\"guestForm.get('vehicleMake').hasError(validation.type) && (guestForm.get('vehicleMake').dirty || guestForm.get('vehicleMake').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- VEHICLE REG NUMBER -->\n            <ion-item class=\"input-item\">\n                <ion-label position=\"floating\">Vehicle Reg Number</ion-label>\n                <ion-input type=\"text\" formControlName=\"vehicleRegNum\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.vehicleRegNum\">\n                    <div class=\"error-message\" *ngIf=\"guestForm.get('vehicleRegNum').hasError(validation.type) && (guestForm.get('vehicleRegNum').dirty || guestForm.get('vehicleRegNum').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- VEHICLE COLOR -->\n            <ion-item class=\"input-item\">\n                <ion-label position=\"floating\">Vehicle Color</ion-label>\n                <ion-input type=\"text\" formControlName=\"vehicleColor\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.vehicleColor\">\n                    <div class=\"error-message\" *ngIf=\"guestForm.get('vehicleColor').hasError(validation.type) && (guestForm.get('vehicleColor').dirty || guestForm.get('vehicleColor').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- COMMENTS -->\n            <ion-item class=\"input-item\">\n                <ion-label position=\"floating\">Comments</ion-label>\n                <ion-input type=\"text\" formControlName=\"comments\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.comments\">\n                    <div class=\"error-message\" *ngIf=\"guestForm.get('comments').hasError(validation.type) && (guestForm.get('comments').dirty || guestForm.get('comments').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- <ion-item>\n            <ion-label stacked>Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='fullname'></ion-input>\n        </ion-item> -->\n            <!-- <ion-item>\n            <ion-label stacked>Phone Number</ion-label>\n            <ion-input type=\"tel\" [(ngModel)]='phone'></ion-input>\n        </ion-item> -->\n            <!-- <ion-item>\n            <ion-label>Gender</ion-label>\n            <ion-select placeholder=\"Select One\" [(ngModel)]='gender'>\n                <ion-select-option value=\"f\">Female</ion-select-option>\n                <ion-select-option value=\"m\">Male</ion-select-option>\n                <ion-select-option value=\"other\">Other</ion-select-option>\n            </ion-select>\n        </ion-item> -->\n            <!-- <ion-item>\n            <ion-label stacked>Vehicle Make</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='vehicleMake'></ion-input>\n        </ion-item> -->\n            <!-- <ion-item>\n            <ion-label stacked>Vehicle Reg Number</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='vehicleRegNum'></ion-input>\n        </ion-item> -->\n            <!-- <ion-item>\n            <ion-label stacked>Vehicle Color</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='vehicleColor'></ion-input>\n        </ion-item> -->\n            <!-- <ion-item>\n            <ion-label stacked>Comments</ion-label>\n            <ion-input type=\"text\" [(ngModel)]='comments'></ion-input>\n        </ion-item> -->\n            <ion-item>\n                <ion-label>Guest Confirmation</ion-label>\n                <ion-toggle formControlName=\"isConfirmed\"></ion-toggle>\n            </ion-item>\n        </ion-list>\n        <ion-button expand='block' fill='solid' (click)='bookGuest()' [disabled]='isLoading || !guestForm.valid'>\n            <ion-spinner name=\"crescent\" slot='start' *ngIf='isLoading'></ion-spinner>\n            <ion-text *ngIf='isLoading' style='margin-left: 30px !important'>Booking Guest...</ion-text>\n            <ion-text *ngIf='!isLoading'>Book Guest</ion-text>\n        </ion-button>\n    </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/book-guest/book-guest.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/book-guest/book-guest.module.ts ***!
    \*************************************************/

  /*! exports provided: BookGuestPageModule */

  /***/
  function srcAppBookGuestBookGuestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookGuestPageModule", function () {
      return BookGuestPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _book_guest_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./book-guest.page */
    "./src/app/book-guest/book-guest.page.ts");

    var routes = [{
      path: '',
      component: _book_guest_page__WEBPACK_IMPORTED_MODULE_6__["BookGuestPage"]
    }];

    var BookGuestPageModule = function BookGuestPageModule() {
      _classCallCheck(this, BookGuestPageModule);
    };

    BookGuestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_book_guest_page__WEBPACK_IMPORTED_MODULE_6__["BookGuestPage"]]
    })], BookGuestPageModule);
    /***/
  },

  /***/
  "./src/app/book-guest/book-guest.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/book-guest/book-guest.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBookGuestBookGuestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  font-size: 16px !important;\n  text-align: center;\n  padding: 5px;\n  color: var(--ion-color-medium);\n}\n\n#import_contact--button {\n  position: absolute;\n  right: 20px;\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n}\n\n.error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9ib29rLWd1ZXN0L2Jvb2stZ3Vlc3QucGFnZS5zY3NzIiwic3JjL2FwcC9ib29rLWd1ZXN0L2Jvb2stZ3Vlc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREdJO0VBQ0ksd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDQVI7O0FEQ1E7RUFDSSxpREFBQTtVQUFBLGdEQUFBO0FDQ1oiLCJmaWxlIjoic3JjL2FwcC9ib29rLWd1ZXN0L2Jvb2stZ3Vlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4jaW1wb3J0X2NvbnRhY3QtLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJoMyB7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuXG4jaW1wb3J0X2NvbnRhY3QtLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/book-guest/book-guest.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/book-guest/book-guest.page.ts ***!
    \***********************************************/

  /*! exports provided: BookGuestPage */

  /***/
  function srcAppBookGuestBookGuestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookGuestPage", function () {
      return BookGuestPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/contacts/ngx */
    "./node_modules/@ionic-native/contacts/ngx/index.js");
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _hoa_store_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../hoa-store.service */
    "./src/app/hoa-store.service.ts");
    /* harmony import */


    var _toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../toast.service */
    "./src/app/toast.service.ts");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../alert.service */
    "./src/app/alert.service.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js"); // import 'firebase/auth';


    var BookGuestPage =
    /*#__PURE__*/
    function () {
      function BookGuestPage(router, store, toast, alert, contacts, socialSharing, geoLocation) {
        _classCallCheck(this, BookGuestPage);

        this.router = router;
        this.store = store;
        this.toast = toast;
        this.alert = alert;
        this.contacts = contacts;
        this.socialSharing = socialSharing;
        this.geoLocation = geoLocation; // fullname = '';
        // phone = '';
        // gender = '';
        // vehicleMake = '';
        // vehicleRegNum = '';
        // vehicleColor = '';
        // comments = '';

        this.isConfirmed = false;
        this.dependentOn = '';
        this.profile = '';
        this.guestCode = 0;
        this.isLoading = false;
        this.location = '';
        this.validation_messages = {
          'name': [{
            type: 'required',
            message: 'Guest name is required.'
          }],
          'phone': [{
            type: 'required',
            message: 'Guest phone number is required'
          }],
          'gender': [{
            type: 'required',
            message: 'Please specify a gender'
          }],
          'vehicleMake': [{
            type: 'required',
            message: 'Please specify a vehicle make'
          }],
          'vehicleRegNum': [{
            type: 'required',
            message: 'Vehicle registration number is required'
          }],
          'vehicleColor': [{
            type: 'required',
            message: 'Please specify a color'
          }],
          'comments': [{
            type: 'required',
            message: 'Please include a comment'
          }]
        };
        this.getLocation();
        this.getProfile();
        this.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100; //   INIT FORM

        this.guestForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'vehicleMake': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          'vehicleRegNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          'vehicleColor': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          'comments': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          'isConfirmed': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](true)
        });
      }

      _createClass(BookGuestPage, [{
        key: "bookGuest",
        value: function bookGuest() {
          var _this = this;

          this.isLoading = true; // ADD GUEST TO USER'S GUESTS ROUTE

          var uid = this.store.getItem('hoa-uid');
          var role = this.store.getItem('hoa-role');
          var date = Date.now();
          var data; // console

          var confirmed;

          if (this.isConfirmed) {
            // confirmed = new Date();
            data = {
              guest: {
                fullname: this.guestForm.get('name').value,
                phone: this.guestForm.get('phone').value,
                gender: this.guestForm.get('gender').value,
                vehicleMake: this.guestForm.get('vehicleMake').value || 'N/A',
                vehicleRegNum: this.guestForm.get('vehicleRegNum').value || 'N/A',
                vehicleColor: this.guestForm.get('vehicleColor').value || 'N/A',
                comments: this.guestForm.get('comments').value || 'N/A'
              },
              confirmed: date,
              status: 'Confirmed',
              bookedAt: date,
              bookedBy: uid,
              inAt: 'N/A',
              leavingAt: 'N/A',
              outAt: 'N/A',
              return: false,
              detain: false,
              guestCode: this.guestCode
            };
          } else {
            data = {
              guest: {
                fullname: this.guestForm.get('name').value,
                phone: this.guestForm.get('phone').value,
                gender: this.guestForm.get('gender').value,
                vehicleMake: this.guestForm.get('vehicleMake').value || 'N/A',
                vehicleRegNum: this.guestForm.get('vehicleRegNum').value || 'N/A',
                vehicleColor: this.guestForm.get('vehicleColor').value || 'N/A',
                comments: this.guestForm.get('comments').value || 'N/A'
              },
              status: 'Booked',
              confirmed: 'N/A',
              bookedAt: date,
              bookedBy: uid,
              inAt: 'N/A',
              leavingAt: 'N/A',
              outAt: 'N/A',
              return: false,
              detain: false,
              guestCode: this.guestCode
            };
          }

          firebase_app__WEBPACK_IMPORTED_MODULE_10__["database"]().ref("".concat(role, "/").concat(uid)).child('visitors').push(data).then(function (res) {
            console.log('Added to user route successfully'); // ADD GUEST TO GENERAL VISITOR'S NODE FOR SECURITY

            firebase_app__WEBPACK_IMPORTED_MODULE_10__["database"]().ref('Visitors').child(res.key).set(data).then(function () {
              console.log('Added to Visitor\'s route for security'); // tslint:disable-next-line:max-line-length

              var presentAlert = _this.alert.presentShareAlert("Share Booking With ".concat(data.guest.fullname, "?"), _this.guestForm, _this.guestCode, _this.profile, _this.location); // console.log(presentAlert.__zone_symbol__state);
              // presentAlert.then((presentRes) => {
              //       console.log('PRESENT ALERT RES', presentRes);
              // this.shareBooking();


              _this.router.navigate(['app/activity']);

              _this.toast.showToast('Guest Booked', '2000', 'bottom');

              _this.isLoading = false; // }).catch((err: Error) => {

              _this.router.navigate(['app/user']);

              _this.toast.showToast('Guest Booked', '2000', 'bottom');

              _this.isLoading = false; // });
              // if (presentAlert.__zone_symbol__state) {
              //       this.shareBooking();
              //       this.router.navigate(['app/user']);
              //       this.toast.showToast('Guest Booked', '2000', 'bottom');
              //       this.isLoading = false;
              // } else {
              //       this.router.navigate(['app/user']);
              //       this.toast.showToast('Guest Booked', '2000', 'bottom');
              //       this.isLoading = false;
              // }
            }).catch(function (err) {
              console.error(err.message);

              _this.toast.showToast(err.message, '4000', 'bottom');

              _this.isLoading = false;
            }); // ADD TO RESIDENT'S ESTATE VISITORS ROUTE /Estates/{estateUID}/visitors/{UID}

            firebase_app__WEBPACK_IMPORTED_MODULE_10__["database"]().ref("Estates/".concat(_this.profile.estateUID)).child('visitors').push(res.key).then(function () {
              console.log('Visitor UID added to Estate route');
            }, function (err) {
              console.log(err);
            }).catch(function (err) {
              console.log(err.message);
            }); // ADD TO DEPENDENT'S SUPER IF ROLE === dependent

            if (role === 'dependent') {
              firebase_app__WEBPACK_IMPORTED_MODULE_10__["database"]().ref("resident/".concat(_this.dependentOn.uid, "/dependents/").concat(uid)).child('visitors').push(data).then(function () {
                console.log('Guest added to dependent under super');

                _this.toast.showToast('Guest Booked', '2000', 'bottom');

                _this.isLoading = false;
              }).catch(function (err) {
                console.error(err.message);

                _this.toast.showToast(err.message, '4000', 'bottom');

                _this.isLoading = false;
              });
            }
          }).catch(function (err) {
            console.error(err.message);

            _this.toast.showToast(err.message, '4000', 'bottom');

            _this.isLoading = false;
          });
        }
      }, {
        key: "sendSMS",
        value: function sendSMS() {
          var _this2 = this;

          //   SEND BOOKING SMS TO VISITORS NUMBER
          //   USING IONIC-NATIVE
          var message = "Hey ".concat(this.guestForm.get('name').value, ", you're booked. Your serial number is: ").concat(this.guestCode);
          this.socialSharing.shareViaSMS(message, this.guestForm.get('phone').value).then(function () {
            _this2.toast.showToast('SMS Sent To Guest', '2000', 'bottom');
          }).catch(function (err) {
            _this2.toast.showToast(err.message, '4000', 'bottom');
          });
        }
      }, {
        key: "importContact",
        value: function importContact() {
          var _this3 = this;

          this.contacts.pickContact().then(function (pickedContact) {
            // SET FORM TO APPROPRIATE VALUES
            _this3.guestForm.get('name').setValue(pickedContact.displayName);

            _this3.guestForm.get('phone').setValue(pickedContact.phoneNumbers[0].value);

            _this3.toast.showToast('Contact Retrieved', '2000', 'bottom');
          }).catch(function (err) {
            _this3.toast.showToast(err.message, '4000', 'bottom');
          });
        }
      }, {
        key: "bookGroupGuest",
        value: function bookGroupGuest() {
          this.router.navigate(['book-group']);
        }
      }, {
        key: "getDependentOn",
        value: function getDependentOn() {
          var _this4 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_10__["database"]().ref("resident/".concat(this.profile.dependentOn)).once('value', function (snapshot) {
            console.log('Retrieved dependentOn');
            _this4.dependentOn = snapshot.val();
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "shareBooking",
        value: function shareBooking() {
          var _this5 = this;

          // SHARE BOOKING TO VISITOR
          // USING IONIC-NATIVE
          var message = "Dear ".concat(this.guestForm.get('name').value, ", your access code into ").concat(this.profile.estateName, " is ").concat(this.guestCode, ".\n      Kindly present access code on arrival.\n      Host: ").concat(this.profile.fullname, "\n      Direction: ").concat(this.location.lng, ",").concat(this.location.lat);
          this.socialSharing.share(message).then(function () {
            _this5.toast.showToast('Booking Shared', '2000', 'bottom');
          }).catch(function (err) {
            _this5.toast.showToast(err.message, '4000', 'bottom');
          });
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this6 = this;

          var options = {
            enableHighAccuracy: true
          };
          this.geoLocation.getCurrentPosition(options).then(function (res) {
            _this6.location = {
              lat: res.coords.latitude,
              lng: res.coords.longitude
            };
          }).catch(function (err) {
            console.log(err.message);
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this7 = this;

          var role, uid;
          uid = this.store.getItem('hoa-uid');
          role = this.store.getItem('hoa-role');
          firebase_app__WEBPACK_IMPORTED_MODULE_10__["database"]().ref(role).child(uid).once('value', function (snapshot) {
            _this7.profile = snapshot.val(); // GET DEPENDENT ON IF ROLE === DEPENDENT

            if (role === 'dependent') {
              _this7.getDependentOn();
            }
          }).then(function () {
            console.log('Profile retrieved successfully'); // this.toast.showToast('Profile retrieved', '2000', 'bottom');
          }).catch(function (err) {
            console.error(err.message);

            _this7.toast.showToast(err.message, '4000', 'bottom');
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          //   CHECK IF GUESTCODE ALREADY EXISTS
          firebase_app__WEBPACK_IMPORTED_MODULE_10__["database"]().ref('Visitors').once('value', function (snap) {
            if (snap.val()) {
              for (var key in snap.val()) {
                if (snap.val().hasOwnProperty(key)) {
                  var visitor = snap.val()[key];

                  if (visitor.status === 'In' && visitor.guestCode === _this8.guestCode) {
                    console.log('Code exists', _this8.guestCode);
                    _this8.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                  } else {
                    console.log('Code available', _this8.guestCode);
                    _this8.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
                  }
                }
              }
            } else {
              console.log('No snap');
              _this8.guestCode = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
              console.log('Guest Code', _this8.guestCode);
            }
          });
        }
      }]);

      return BookGuestPage;
    }();

    BookGuestPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_7__["HoaStoreService"]
      }, {
        type: _toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]
      }, {
        type: _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]
      }, {
        type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }];
    };

    BookGuestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-book-guest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./book-guest.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/book-guest/book-guest.page.html")).default,
      providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_7__["HoaStoreService"], _toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./book-guest.page.scss */
      "./src/app/book-guest/book-guest.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _hoa_store_service__WEBPACK_IMPORTED_MODULE_7__["HoaStoreService"], _toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"], _alert_service__WEBPACK_IMPORTED_MODULE_9__["AlertService"], _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_4__["Contacts"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]])], BookGuestPage);
    /***/
  }
}]);
//# sourceMappingURL=book-guest-book-guest-module-es5.js.map