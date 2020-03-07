(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Log In</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"login-content\">\n    <h2 class=\"auth-title\">\n        Welcome!\n        <!-- <br/> Discover the new Ionic 4 -->\n    </h2>\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"doLogin()\">\n        <ion-list class=\"inputs-list\" lines=\"full\">\n            <!-- <ion-item>\n                <ion-label>I am a ...</ion-label>\n                <ion-select placeholder=\"Select One\" formControlName='role'>\n                    <ion-select-option value=\"resident\">Resident</ion-select-option>\n                    <ion-select-option value=\"dependent\">Dependent</ion-select-option>\n                    <ion-select-option value=\"security\">Security</ion-select-option>\n                </ion-select>\n            </ion-item> -->\n            <ion-item class=\"input-item\">\n                <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.email\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('email').hasError(validation.type) && (loginForm.get('email').dirty || loginForm.get('email').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n\n            <ion-item class=\"input-item\">\n                <app-show-hide-password>\n                    <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n                </app-show-hide-password>\n            </ion-item>\n            <div class=\"error-container\">\n                <ng-container *ngFor=\"let validation of validation_messages.password\">\n                    <div class=\"error-message\" *ngIf=\"loginForm.get('password').hasError(validation.type) && (loginForm.get('password').dirty || loginForm.get('password').touched)\">\n                        <ion-icon name=\"information-circle-outline\"></ion-icon>\n                        <span>{{ validation.message }}</span>\n                    </div>\n                </ng-container>\n            </div>\n        </ion-list>\n\n        <ion-button class=\"login-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!loginForm.valid || isLoading\">\n            <ion-spinner name=\"crescent\" slot='start' *ngIf='isLoading'></ion-spinner>\n            <ion-text *ngIf='isLoading' style='margin-left: 30px !important'>Logging In...</ion-text>\n            <ion-text *ngIf='!isLoading'>Log In</ion-text>\n        </ion-button>\n        <ion-row class=\"other-auth-options-row\">\n            <!-- <ion-button class=\"forgot-btn\" fill=\"clear\" [routerLink]=\"['/auth/forgot-password']\">\n                Forgot Password?\n            </ion-button> -->\n            <!-- <ion-button class=\"signup-btn\" fill=\"clear\" [routerLink]=\"['/auth/signup']\">\n                Don't Have an Account?\n            </ion-button> -->\n        </ion-row>\n    </form>\n\n    <!-- <div class=\"social-auth-options\">\n        <p class=\"options-divider\">Or</p> -->\n    <!-- <ion-button class=\"social-auth-btn facebook-auth-btn\" expand=\"block\" color=\"facebook\" (click)=\"doFacebookLogin()\">Log In with Facebook</ion-button> -->\n    <!-- <ion-button class=\"social-auth-btn google-auth-btn\" expand=\"block\" color=\"google\" (click)=\"doGoogleLogin()\">Log In with Google</ion-button> -->\n    <!-- <ion-button class=\"social-auth-btn twitter-auth-btn\" expand=\"block\" color=\"twitter\" (click)=\"doTwitterLogin()\">Log In with Twitter</ion-button> -->\n    <!-- </div> -->\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hoa_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoa-store.service */ "./src/app/hoa-store.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");







// import { Storage } from '@ionic/storage';


let LoginPage = class LoginPage {
    constructor(router, menu, toast, store, platform) {
        this.router = router;
        this.menu = menu;
        this.toast = toast;
        this.store = store;
        this.platform = platform;
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required.' },
                { type: 'pattern', message: 'Enter a valid email.' }
            ],
            'password': [
                { type: 'required', message: 'Password is required.' },
                { type: 'minlength', message: 'Password must be at least 6 characters long.' }
            ]
        };
        this.isLoading = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('test@test.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
            // 'role': new FormControl('', Validators.compose([
            //       Validators.required
            //     ]))
        });
    }
    ngOnInit() {
        this.menu.enable(false);
    }
    doLogin() {
        this.isLoading = true;
        console.log('do Log In');
        //     firebase.auth().currentUser.
        firebase_app__WEBPACK_IMPORTED_MODULE_7__["auth"]().signInWithEmailAndPassword(this.loginForm.get('email').value, this.loginForm.get('password').value).then((res) => {
            console.log('login successful');
            this.store.setItem('hoa-uid', res.user.uid);
            // if (this.platform.is('android') || this.platform.is('ios')) {
            //       console.log('Platform is native');
            //       window.localStorage.setItem('hoa-uid', res.user.uid); // REMOVE BEFORE BUILD
            //       this.store.setItem('hoa-uid', res.user.uid).then(() => {
            //             console.log('UID SAVED');
            //       }).catch((err: Error) => {
            //             console.error(err.message);
            //       });
            // } else if (this.platform.is('mobileweb')) {
            //       console.log('Platform is not native');
            //       window.localStorage.setItem('hoa-uid', res.user.uid);
            // } else {
            //       console.log('Not running on browser or native device');
            //       window.localStorage.setItem('hoa-uid', res.user.uid);
            // }
            // CHECK FOR RESIDENT
            if (firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('resident').child(res.user.uid).once('value') !== null) {
                console.log('isIT', firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('resident').child(res.user.uid).once('value', (snap) => {
                    return snap.val();
                }));
                firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('resident').child(res.user.uid).once('value', (snapshot) => {
                    this.store.setItem('hoa-role', snapshot.val().role);
                    // for (const key in snapshot.val()) {
                    //       if (snapshot.val().hasOwnProperty(key)) {
                    //             const element = snapshot.val()[key];
                    //             if (key === res.user.uid) {
                    // window.localStorage.setItem('hoa-role', snapshot.val().role);
                    // if (this.platform.is('android') || this.platform.is('ios')) {
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role); // REMOVE BEFORE BUILD
                    //       this.store.setItem('hoa-role', snapshot.val().role).then(() => {
                    //             console.log('ROLE SAVED');
                    //       }).catch((err: Error) => {
                    //             console.error(err.message);
                    //       });
                    // } else if (this.platform.is('mobileweb')) {
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                    // } else {
                    //       console.log('Not running on browser or native device');
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                    // }
                    this.isLoading = false;
                    this.toast.showToast(`Welcome Back ${snapshot.val().fullname.split(' ')[0]}`, '2000', 'bottom');
                    // } else {
                    console.log('User is a ' + snapshot.val().role);
                    //             }
                    //       }
                    // }
                }).then(() => {
                    if (window.localStorage.getItem('hoa-role')) {
                        this.router.navigate(['app/activity']);
                    }
                });
            }
            // CHECK FOR SECURITY
            if (firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('security').child(res.user.uid).once('value') !== null) {
                firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('security').child(res.user.uid).once('value', (snapshot) => {
                    // for (const key in snapshot.val()) {
                    //       if (snapshot.val().hasOwnProperty(key)) {
                    //             const element = snapshot.val()[key];
                    //             if (key === res.user.uid) {
                    // window.localStorage.setItem('hoa-role', snapshot.val().role);
                    this.store.setItem('hoa-role', snapshot.val().role);
                    // if (this.platform.is('android') || this.platform.is('ios')) {
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role); // REMOVE BEFORE BUILD
                    //       this.store.setItem('hoa-role', snapshot.val().role).then(() => {
                    //             console.log('ROLE SAVED');
                    //       }).catch((err: Error) => {
                    //             console.error(err.message);
                    //       });
                    // } else if (this.platform.is('mobileweb')) {
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                    // } else {
                    //       console.log('Not running on browser or native device');
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                    // }
                    this.isLoading = false;
                    this.toast.showToast(`Welcome Back ${snapshot.val().fullname.split(' ')[0]}`, '2000', 'bottom');
                    // } else {
                    console.log('User is a ' + snapshot.val().role);
                    //             }
                    //       }
                    // }
                }).then(() => {
                    if (window.localStorage.getItem('hoa-role')) {
                        this.router.navigate(['app/activity']);
                    }
                });
            }
            // CHECK FOR DEPENDENT
            if (firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('dependent').child(res.user.uid).once('value') !== null) {
                firebase_app__WEBPACK_IMPORTED_MODULE_7__["database"]().ref('dependent').child(res.user.uid).once('value', (snapshot) => {
                    // for (const key in snapshot.val()) {
                    //       if (snapshot.val().hasOwnProperty(key)) {
                    //             const element = snapshot.val()[key];
                    //             if (key === res.user.uid) {
                    // window.localStorage.setItem('hoa-role', snapshot.val().role);
                    this.store.setItem('hoa-role', snapshot.val().role);
                    // if (this.platform.is('android') || this.platform.is('ios')) {
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role); // REMOVE BEFORE BUILD
                    //       this.store.setItem('hoa-role', snapshot.val().role).then(() => {
                    //             console.log('ROLE SAVED');
                    //       }).catch((err: Error) => {
                    //             console.error(err.message);
                    //       });
                    // } else if (this.platform.is('mobileweb')) {
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                    // } else {
                    //       console.log('Not running on browser or native device');
                    //       window.localStorage.setItem('hoa-role', snapshot.val().role);
                    // }
                    this.isLoading = false;
                    this.toast.showToast(`Welcome Back ${snapshot.val().fullname.split(' ')[0]}`, '2000', 'bottom');
                    // } else {
                    console.log('User is a ' + snapshot.val().role);
                    //             }
                    //       }
                    // }
                }).then(() => {
                    if (window.localStorage.getItem('hoa-role')) {
                        this.router.navigate(['app/activity']);
                    }
                });
            }
            // firebase.database().ref('security').once('value', (snapshot) => {
            //       for (const key in snapshot.val()) {
            //             if (snapshot.val().hasOwnProperty(key)) {
            //                   const element = snapshot.val()[key];
            //                   if (key === res.user.uid) {
            //                         window.localStorage.setItem('hoa-role', element.role);
            //                   } else {
            //                         console.log('User is not a security personnel');
            //                   }
            //             }
            //       }
            // });
            // this.store.set('hoa-role', role);
        }).catch((err) => {
            console.error(err.message);
            this.toast.showToast(`${err.message}`, '4000', 'bottom');
            this.isLoading = false;
        });
    }
    //   showToast(msg: string, dur: string, pos: string) {
    //       this.toast.show(msg, dur, pos).subscribe(
    //             toast => {
    //               console.log(toast);
    //             }
    //           );
    //   }
    goToForgotPassword() {
        console.log('redirect to forgot-password page');
    }
    doFacebookLogin() {
        console.log('facebook login');
        this.router.navigate(['app/activity']);
    }
    doGoogleLogin() {
        console.log('google login');
        this.router.navigate(['app/activity']);
    }
    doTwitterLogin() {
        console.log('twitter login');
        this.router.navigate(['app/activity']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_5__["HoaStoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_5__["HoaStoreService"], _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./styles/login.page.scss */ "./src/app/login/styles/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _hoa_store_service__WEBPACK_IMPORTED_MODULE_5__["HoaStoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], LoginPage);



/***/ }),

/***/ "./src/app/login/styles/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/login/styles/login.page.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n}\n\n.login-content {\n  --background: var(--page-background);\n  --padding-start: var(--page-margin);\n  --padding-end: var(--page-margin);\n  --padding-top: var(--page-margin);\n  --padding-bottom: var(--page-margin);\n}\n\n.login-content .auth-title {\n  color: var(--ion-color-dark);\n  font-weight: bold;\n  margin-top: calc(var(--page-margin) / 2);\n  margin-bottom: calc(var(--page-margin) * (3/2));\n  letter-spacing: 0.6px;\n}\n\n.login-content .inputs-list {\n  --ion-item-background: var(--page-background);\n}\n\n.login-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n\n.login-content .inputs-list .error-container .error-message {\n  margin: calc(var(--page-margin) / 2) 0px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n\n.login-content .inputs-list .error-container .error-message ion-icon {\n  -webkit-padding-end: calc(var(--page-margin) / 2);\n          padding-inline-end: calc(var(--page-margin) / 2);\n}\n\n.login-content .login-btn {\n  margin: calc(var(--page-margin) / 2) 0px;\n}\n\n.login-content .other-auth-options-row {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.login-content .other-auth-options-row .forgot-btn {\n  --color: var(--ion-color-medium);\n  margin: 0px;\n}\n\n.login-content .other-auth-options-row .signup-btn {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n.login-content .social-auth-options .options-divider {\n  color: var(--ion-color-medium);\n  margin: var(--page-margin) 0px;\n  text-align: center;\n}\n\n.login-content .social-auth-options .social-auth-btn {\n  margin: 0px;\n}\n\n.login-content .social-auth-options .social-auth-btn:not(:first-child) {\n  margin-top: var(--page-margin);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9sb2dpbi9zdHlsZXMvbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9sb2dpbi9zdHlsZXMvbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usc0NBQUE7RUFDQSw4Q0FBQTtBQ0RGOztBREtBO0VBQ0Usb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxvQ0FBQTtBQ0ZGOztBRElFO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0UsNkNBQUE7QUNISjs7QURLSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0hOOztBRE9NO0VBQ0Usd0NBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDTFI7O0FET1E7RUFDRSxpREFBQTtVQUFBLGdEQUFBO0FDTFY7O0FEV0U7RUFDRSx3Q0FBQTtBQ1RKOztBRFlFO0VBQ0UseUJBQUE7VUFBQSw4QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNWSjs7QURZSTtFQUNFLGdDQUFBO0VBRUEsV0FBQTtBQ1hOOztBRGNJO0VBQ0UsbUNBQUE7RUFFQSxXQUFBO0FDYk47O0FEa0JJO0VBQ0UsOEJBQUE7RUFDRiw4QkFBQTtFQUNBLGtCQUFBO0FDaEJKOztBRG1CSTtFQUNFLFdBQUE7QUNqQk47O0FEbUJNO0VBQ0UsOEJBQUE7QUNqQlIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9zdHlsZXMvbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAtLXBhZ2UtYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5sb2dpbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAuYXV0aC10aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogKDMvMikpO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgfVxuXG4gIC5pbnB1dHMtbGlzdCB7XG4gICAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuXG4gICAgLmlucHV0LWl0ZW0ge1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgfVxuXG4gICAgLmVycm9yLWNvbnRhaW5lciB7XG4gICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubG9naW4tYnRuIHtcbiAgICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4O1xuICB9XG5cbiAgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cge1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgLmZvcmdvdC1idG4ge1xuICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cbiAgICAgIG1hcmdpbjogMHB4O1xuICAgIH1cblxuICAgIC5zaWdudXAtYnRuIHtcbiAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuXG4gICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gIH1cblxuICAuc29jaWFsLWF1dGgtb3B0aW9ucyB7XG4gICAgLm9wdGlvbnMtZGl2aWRlciB7XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIFx0XHRtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1hdXRoLWJ0biB7XG4gICAgICBtYXJnaW46IDBweDtcblxuICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG5cbi5sb2dpbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wYWdlLWJhY2tncm91bmQpO1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5sb2dpbi1jb250ZW50IC5hdXRoLXRpdGxlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogKDMvMikpO1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG4ubG9naW4tY29udGVudCAuaW5wdXRzLWxpc3Qge1xuICAtLWlvbi1pdGVtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG59XG4ubG9naW4tY29udGVudCAuaW5wdXRzLWxpc3QgLmlucHV0LWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4ubG9naW4tY29udGVudCAuaW5wdXRzLWxpc3QgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmxvZ2luLWNvbnRlbnQgLmlucHV0cy1saXN0IC5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ubG9naW4tY29udGVudCAubG9naW4tYnRuIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweDtcbn1cbi5sb2dpbi1jb250ZW50IC5vdGhlci1hdXRoLW9wdGlvbnMtcm93IHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRlbnQgLm90aGVyLWF1dGgtb3B0aW9ucy1yb3cgLmZvcmdvdC1idG4ge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgbWFyZ2luOiAwcHg7XG59XG4ubG9naW4tY29udGVudCAub3RoZXItYXV0aC1vcHRpb25zLXJvdyAuc2lnbnVwLWJ0biB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDBweDtcbn1cbi5sb2dpbi1jb250ZW50IC5zb2NpYWwtYXV0aC1vcHRpb25zIC5vcHRpb25zLWRpdmlkZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxvZ2luLWNvbnRlbnQgLnNvY2lhbC1hdXRoLW9wdGlvbnMgLnNvY2lhbC1hdXRoLWJ0biB7XG4gIG1hcmdpbjogMHB4O1xufVxuLmxvZ2luLWNvbnRlbnQgLnNvY2lhbC1hdXRoLW9wdGlvbnMgLnNvY2lhbC1hdXRoLWJ0bjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIG1hcmdpbi10b3A6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map