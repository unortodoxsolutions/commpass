function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-profile-update-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/update-profile/update-profile.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/update-profile/update-profile.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUpdateProfileUpdateProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <!-- <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons> -->\n        <ion-title>\n            Update Profile\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"update-profile-content\">\n    <form [formGroup]=\"updateForm\" (ngSubmit)=\"updateProfile()\">\n        <ion-list lines='full'>\n            <!-- FULLNAME  -->\n            <ion-item>\n                <ion-label stacked>Fullname</ion-label>\n                <ion-input type=\"text\" inputmode=\"text\" formControlName='fullname'></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.fullname\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('fullname').hasError(validation.type) && (updateForm.get('fullname').dirty || updateForm.get('fullname').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- ESTATE NAME -->\n            <ion-item>\n                <ion-label stacked>Estate Name</ion-label>\n                <ion-input type=\"text\" inputmode=\"text\" formControlName='estateName' readonly></ion-input>\n                <!-- <ion-select placeholder=\"Select One\" formControlName='estateName' readonly>\n                    <ion-select-option *ngFor='let estate of estates' value=\"{{estate.name}}\">{{estate.name}}</ion-select-option>\n                </ion-select> -->\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.estateName\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('estateName').hasError(validation.type) && (updateForm.get('estateName').dirty || updateForm.get('estateName').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- APARTMENT NUMBER -->\n            <ion-item *ngIf='role !== \"security\"'>\n                <ion-label stacked>Estate Apt Number</ion-label>\n                <ion-input type=\"text\" inputmode=\"text\" formControlName='estateAptNum'></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.estateAptNum\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('estateAptNum').hasError(validation.type) && (updateForm.get('estateAptNum').dirty || updateForm.get('estateAptNum').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- EMAIL -->\n            <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input type=\"email\" inputmode=\"email\" formControlName='email'></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.email\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('email').hasError(validation.type) && (updateForm.get('email').dirty || updateForm.get('email').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- ADDRESS -->\n            <ion-item>\n                <ion-label stacked>Address</ion-label>\n                <ion-input type=\"text\" inputmode=\"text\" formControlName='address'></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.address\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('address').hasError(validation.type) && (updateForm.get('address').dirty || updateForm.get('address').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- GENDER -->\n            <ion-item>\n                <ion-label>Gender</ion-label>\n                <ion-select placeholder=\"Select One\" formControlName='gender'>\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                    <ion-select-option value=\"other\">Other</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.gender\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('gender').hasError(validation.type) && (updateForm.get('gender').dirty || updateForm.get('gender').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- MARITAL STATUS -->\n            <ion-item>\n                <ion-label>Marital Status</ion-label>\n                <ion-select placeholder=\"Select One\" formControlName='maritalStatus'>\n                    <ion-select-option value=\"single\">Single</ion-select-option>\n                    <ion-select-option value=\"married\">Married</ion-select-option>\n                    <ion-select-option value=\"divorced\">Divorced</ion-select-option>\n                </ion-select>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.maritalStatus\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('maritalStatus').hasError(validation.type) && (updateForm.get('maritalStatus').dirty || updateForm.get('maritalStatus').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- ABOUT -->\n            <ion-item>\n                <ion-label stacked>About</ion-label>\n                <ion-input type=\"text\" inputmode=\"text\" formControlName='about'></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.about\">\n                    <div class=\"error-message\" *ngIf=\"updateForm.get('about').hasError(validation.type) && (updateForm.get('about').dirty || updateForm.get('about').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n        </ion-list>\n\n        <ion-button type=\"submit\" expand='block' fill='solid' color='primary' [disabled]='!updateForm.valid || isLoading'>\n            <ion-spinner name=\"crescent\" slot='start' *ngIf='isLoading'></ion-spinner>\n            <ion-text *ngIf='!isLoading'>Update Profile</ion-text>\n        </ion-button>\n    </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/update-profile/update-profile.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/update-profile/update-profile.module.ts ***!
    \*********************************************************/

  /*! exports provided: UpdateProfilePageModule */

  /***/
  function srcAppUpdateProfileUpdateProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfilePageModule", function () {
      return UpdateProfilePageModule;
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


    var _update_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-profile.page */
    "./src/app/update-profile/update-profile.page.ts");

    var routes = [{
      path: '',
      component: _update_profile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProfilePage"]
    }];

    var UpdateProfilePageModule = function UpdateProfilePageModule() {
      _classCallCheck(this, UpdateProfilePageModule);
    };

    UpdateProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_update_profile_page__WEBPACK_IMPORTED_MODULE_6__["UpdateProfilePage"]]
    })], UpdateProfilePageModule);
    /***/
  },

  /***/
  "./src/app/update-profile/update-profile.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/update-profile/update-profile.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUpdateProfileUpdateProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  text-align: end !important;\n}\n\n.error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC91cGRhdGUtcHJvZmlsZS91cGRhdGUtcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FER0k7RUFDSSx3Q0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNBUjs7QURDUTtFQUNJLGlEQUFBO1VBQUEsZ0RBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/update-profile/update-profile.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/update-profile/update-profile.page.ts ***!
    \*******************************************************/

  /*! exports provided: UpdateProfilePage */

  /***/
  function srcAppUpdateProfileUpdateProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateProfilePage", function () {
      return UpdateProfilePage;
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


    var _hoa_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../hoa-store.service */
    "./src/app/hoa-store.service.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");

    var UpdateProfilePage =
    /*#__PURE__*/
    function () {
      function UpdateProfilePage(router, store) {
        _classCallCheck(this, UpdateProfilePage);

        this.router = router;
        this.store = store;
        this.role = window.localStorage.getItem('hoa-role');
        this.validation_messages = {
          'fullname': [{
            type: 'required',
            message: 'Fullname is required.'
          }],
          'estateName': [{
            type: 'required',
            message: 'Estate Name is required.'
          }],
          'estateAptNum': [{
            type: 'required',
            message: 'Apartment Number is required.'
          }],
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Enter a valid email.'
          }],
          'address': [{
            type: 'required',
            message: 'Address is required.'
          }],
          'gender': [{
            type: 'required',
            message: 'Please indicate a gender.'
          }],
          'maritalStatus': [{
            type: 'required',
            message: 'This field is required.'
          }],
          'about': [{
            type: 'required',
            message: 'A little about yourself.'
          }]
        }; // estateName = '';
        // estateAptNum = '';
        // email = '';
        // address = '';
        // gender = '';
        // maritalStatus = '';
        // about = '';
        // fullname = '';

        this.estates = [];
        this.isLoading = false;
        this.getestates(); // get estates

        this.getProfile(); // get profile for editing

        this.updateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'fullname': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'estateName': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'estateAptNum': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
          'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'maritalStatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'about': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
      }

      _createClass(UpdateProfilePage, [{
        key: "updateProfile",
        value: function updateProfile() {
          var _this = this;

          this.isLoading = true; // firebase.auth().currentUser.displayName = this.fullname;

          var role = this.store.getItem('hoa-role').toString();
          var uid = this.store.getItem('hoa-uid').toString();
          firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref(role).child(uid).update({
            estateName: this.updateForm.get('estateName').value,
            estateAptNum: this.updateForm.get('estateAptNum').value,
            email: this.updateForm.get('email').value,
            address: this.updateForm.get('address').value,
            gender: this.updateForm.get('gender').value,
            maritalStatus: this.updateForm.get('maritalStatus').value,
            about: this.updateForm.get('about').value,
            fullname: this.updateForm.get('fullname').value
          }).then(function () {
            console.log('User updated');
            _this.isLoading = false;

            _this.router.navigate(['app/user']);
          }).catch(function (err) {
            console.error(err.message);
            _this.isLoading = false;
          });
        }
      }, {
        key: "getestates",
        value: function getestates() {
          var _this2 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('Estates').once('value', function (snapshot) {
            for (var key in snapshot.val()) {
              if (snapshot.val().hasOwnProperty(key)) {
                var estate = snapshot.val()[key];

                _this2.estates.push(estate);
              }
            }
          }, function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this3 = this;

          var role, uid;
          role = this.store.getItem('hoa-role');
          uid = this.store.getItem('hoa-uid');
          firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref(role).child(uid).once('value', function (snapshot) {
            // SET INPUT TO APPROPRIATE SNAPSHOT VALUE
            _this3.updateForm.get('fullname').setValue(snapshot.val().fullname || '');

            _this3.updateForm.get('estateName').setValue(snapshot.val().estateName || '');

            _this3.updateForm.get('estateAptNum').setValue(snapshot.val().estateAptNum || '');

            _this3.updateForm.get('email').setValue(snapshot.val().email || '');

            _this3.updateForm.get('address').setValue(snapshot.val().address || '');

            _this3.updateForm.get('gender').setValue(snapshot.val().gender || '');

            _this3.updateForm.get('maritalStatus').setValue(snapshot.val().maritalStatus || '');

            _this3.updateForm.get('about').setValue(snapshot.val().about || ''); // this.profile = snapshot.val();
            // this.visitors = [];
            // this.dependents = [];
            // GET DEPENDENT ON IF ROLE === DEPENDENT
            // if (role === 'dependent') {
            //       this.getDependentOn();
            // }
            // // GET VISITORS
            // for (const key in snapshot.val().visitors) {
            //       if (snapshot.val().visitors.hasOwnProperty(key)) {
            //             const visitor = snapshot.val().visitors[key];
            //             this.visitorsKeys.push(key);
            //             this.visitors.push(visitor);
            //             // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
            //             //       this.visitors.push(snap.val());
            //             // });
            //       }
            // }
            // // GET DEPENDENTS
            // for (const key in snapshot.val().dependents) {
            //       if (snapshot.val().dependents.hasOwnProperty(key)) {
            //             const dependent = snapshot.val().dependents[key];
            //             this.dependentsKeys.push(key);
            //             this.dependents.push(dependent);
            //             // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
            //             //       this.visitors.push(snap.val());
            //             // });
            //       }
            // }

          }).then(function () {
            console.log('Profile retrieved successfully');
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UpdateProfilePage;
    }();

    UpdateProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_4__["HoaStoreService"]
      }];
    };

    UpdateProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/update-profile/update-profile.page.html")).default,
      providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_4__["HoaStoreService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-profile.page.scss */
      "./src/app/update-profile/update-profile.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _hoa_store_service__WEBPACK_IMPORTED_MODULE_4__["HoaStoreService"]])], UpdateProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=update-profile-update-profile-module-es5.js.map