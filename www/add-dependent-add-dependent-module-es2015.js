(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-dependent-add-dependent-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-dependent/add-dependent.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-dependent/add-dependent.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <!-- <ion-menu-button></ion-menu-button> -->\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Add a Dependent</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"book-guest-content\" *ngIf='role === \"resident\"'>\n    <form [formGroup]=\"dependentForm\" (ngSubmit)=\"createDependentAccount()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n            <!-- ACCOUNT NAME-->\n            <ion-item class=\"input-item\">\n                <ion-input type=\"text\" placeholder='Account Name' formControlName='accountName'></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.accountName\">\n                    <div class=\"error-message\" *ngIf=\"dependentForm.get('accountName').hasError(validation.type) && (dependentForm.get('accountName').dirty || dependentForm.get('accountName').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- EMAIL -->\n            <ion-item class=\"input-item\">\n                <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.email\">\n                    <div class=\"error-message\" *ngIf=\"dependentForm.get('email').hasError(validation.type) && (dependentForm.get('email').dirty || dependentForm.get('email').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- PHONE -->\n            <ion-item class=\"input-item\">\n                <ion-input type=\"tel\" placeholder=\"Phone\" formControlName=\"phone\" clearInput autocapitalize=\"off\" inputmode=\"tel\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.phone\">\n                    <div class=\"error-message\" *ngIf=\"dependentForm.get('phone').hasError(validation.type) && (dependentForm.get('phone').dirty || dependentForm.get('phone').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- RELATIONSHIP -->\n            <ion-item class=\"input-item\">\n                <ion-input type=\"text\" placeholder=\"Relationship\" formControlName=\"relationship\" clearInput autocapitalize=\"off\" inputmode=\"text\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.relationship\">\n                    <div class=\"error-message\" *ngIf=\"dependentForm.get('relationship').hasError(validation.type) && (dependentForm.get('relationship').dirty || dependentForm.get('relationship').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n            <!-- PASSWORD -->\n            <ion-item class=\"input-item\">\n                <app-show-hide-password>\n                    <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n                </app-show-hide-password>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"dependentForm.get('password').hasError(validation.type) && (dependentForm.get('password').dirty || dependentForm.get('password').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n        </ion-list>\n\n        <ion-button class=\"login-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!dependentForm.valid || isLoading\">\n            <ion-spinner name=\"crescent\" slot='start' *ngIf='isLoading'></ion-spinner>\n            <ion-text *ngIf='isLoading' style='margin-left: 30px !important'>Adding Dependent...</ion-text>\n            <ion-text *ngIf='!isLoading'>Add Dependent</ion-text>\n        </ion-button>\n    </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/add-dependent/add-dependent.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-dependent/add-dependent.module.ts ***!
  \*******************************************************/
/*! exports provided: AddDependentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDependentPageModule", function() { return AddDependentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_dependent_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-dependent.page */ "./src/app/add-dependent/add-dependent.page.ts");








const routes = [
    {
        path: '',
        component: _add_dependent_page__WEBPACK_IMPORTED_MODULE_7__["AddDependentPage"]
    }
];
let AddDependentPageModule = class AddDependentPageModule {
};
AddDependentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"]
        ],
        declarations: [_add_dependent_page__WEBPACK_IMPORTED_MODULE_7__["AddDependentPage"]]
    })
], AddDependentPageModule);



/***/ }),

/***/ "./src/app/add-dependent/add-dependent.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/add-dependent/add-dependent.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n.login-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9hZGQtZGVwZW5kZW50L2FkZC1kZXBlbmRlbnQucGFnZS5zY3NzIiwic3JjL2FwcC9hZGQtZGVwZW5kZW50L2FkZC1kZXBlbmRlbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDQVI7QURDUTtFQUNJLGlEQUFBO1VBQUEsZ0RBQUE7QUNDWjtBRElBO0VBQ0ksd0NBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2FkZC1kZXBlbmRlbnQvYWRkLWRlcGVuZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3ItY29udGFpbmVyIHtcbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5sb2dpbi1idG4ge1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG59IiwiLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSBpb24taWNvbiB7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cblxuLmxvZ2luLWJ0biB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/add-dependent/add-dependent.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/add-dependent/add-dependent.page.ts ***!
  \*****************************************************/
/*! exports provided: AddDependentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDependentPage", function() { return AddDependentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoa-store.service */ "./src/app/hoa-store.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");








let AddDependentPage = class AddDependentPage {
    constructor(router, store) {
        this.router = router;
        this.store = store;
        this.isLoading = false;
        this.validation_messages = {
            'accountName': [
                { type: 'required', message: 'Dependent name is required.' }
            ],
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'phone': [
                { type: 'required', message: 'Dependent phone number is required' }
            ],
            'relationship': [
                { type: 'required', message: 'Relationship with dependent is required' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ]
        };
        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
        //   INIT FORM
        this.dependentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'accountName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'relationship': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    addDependent(uid) {
        //    this.isLoading = true;
        //    INIT DEPENDENT
        const dependent = {
            fullname: this.dependentForm.get('accountName').value,
            email: this.dependentForm.get('email').value,
            phone: this.dependentForm.get('phone').value,
            relationship: this.dependentForm.get('relationship').value,
            password: this.dependentForm.get('password').value,
            dependentOn: this.uid,
            uid: uid,
            role: 'dependent',
            visitors: ''
        };
        // ADD DEPENDENT TO USER'S /dependent ROUTE
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref(`${this.role}/${this.uid}`).child('dependents').push(dependent).then(() => {
            console.log('Dependent added to user route');
            this.isLoading = false;
            this.router.navigate(['app/user']);
        }).catch((err) => {
            console.error(err.message);
        });
        // ADD DEPENDENT TO GENERAL ROUTE
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref(`dependent/${uid}`).set(dependent).then(() => {
            console.log('Dependent added to general route');
        }).catch((err) => {
            console.error(err.message);
        });
    }
    createDependentAccount() {
        this.isLoading = true;
        const email = this.dependentForm.get('email').value;
        const password = this.dependentForm.get('password').value;
        //    let uid;
        //    CREATE DEPENDENT'S AUTH ACCOUNT
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().createUserWithEmailAndPassword(email, password).then((res) => {
            // uid = res.user.uid;
            this.addDependent(res.user.uid);
            console.log('Dependent created successfully');
        }).catch((err) => {
            console.error(err.message);
        });
    }
    ngOnInit() {
    }
};
AddDependentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"] }
];
AddDependentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-dependent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-dependent.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-dependent/add-dependent.page.html")).default,
        providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-dependent.page.scss */ "./src/app/add-dependent/add-dependent.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]])
], AddDependentPage);



/***/ })

}]);
//# sourceMappingURL=add-dependent-add-dependent-module-es2015.js.map