(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emergency-emergency-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/emergency/emergency.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emergency/emergency.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot='start'>\n            <ion-back-button></ion-back-button>\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Emergency</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"call\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"top\">\n            <ion-fab-button class='lg' (click)='callEstateAuth()'>\n                <ion-icon name=\"warning\" slot='start'></ion-icon>\n                Contact estate authorities\n            </ion-fab-button>\n            <ion-fab-button class='lg' (click)='callAuth()'>\n                <ion-icon name=\"warning\" slot='start'></ion-icon>\n                Contact authorities\n            </ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n\n    <p class=\"hint\">\n        In case of emergency, use the floating action button below to call the authorities\n    </p>\n</ion-content>");

/***/ }),

/***/ "./src/app/emergency/emergency.module.ts":
/*!***********************************************!*\
  !*** ./src/app/emergency/emergency.module.ts ***!
  \***********************************************/
/*! exports provided: EmergencyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyPageModule", function() { return EmergencyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _emergency_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergency.page */ "./src/app/emergency/emergency.page.ts");







const routes = [
    {
        path: '',
        component: _emergency_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyPage"]
    }
];
let EmergencyPageModule = class EmergencyPageModule {
};
EmergencyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_emergency_page__WEBPACK_IMPORTED_MODULE_6__["EmergencyPage"]]
    })
], EmergencyPageModule);



/***/ }),

/***/ "./src/app/emergency/emergency.page.scss":
/*!***********************************************!*\
  !*** ./src/app/emergency/emergency.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-fab-button.lg {\n  width: 250px;\n  height: 50px;\n  --border-radius: 10px !important;\n  border: 0;\n  -webkit-transform: translateX(-200px);\n          transform: translateX(-200px);\n}\n\np.hint {\n  text-align: center;\n  color: var(--app-background-shade);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9lbWVyZ2VuY3kvZW1lcmdlbmN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvZW1lcmdlbmN5L2VtZXJnZW5jeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLHFDQUFBO1VBQUEsNkJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0Esa0NBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2VtZXJnZW5jeS9lbWVyZ2VuY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWZhYi1idXR0b24ubGcge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLS1ib3JkZXItcmFkaXVzOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwcHgpO1xufVxuXG5wLmhpbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufSIsImlvbi1mYWItYnV0dG9uLmxnIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwcHgpO1xufVxuXG5wLmhpbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/emergency/emergency.page.ts":
/*!*********************************************!*\
  !*** ./src/app/emergency/emergency.page.ts ***!
  \*********************************************/
/*! exports provided: EmergencyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergencyPage", function() { return EmergencyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoa-store.service */ "./src/app/hoa-store.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");







let EmergencyPage = class EmergencyPage {
    constructor(call, store, toast) {
        this.call = call;
        this.store = store;
        this.toast = toast;
        this.profile = [];
        this.getProfile();
    }
    callEstateAuth() {
        // CALL ESTATE AUTHPRITIES
        this.call.isCallSupported().then(() => {
            // ${this.estateDetails.emergencyNumber}
            this.call.callNumber(`+2347050706655`, false).then((res) => {
                console.log(res);
                this.toast.showToast(res, '2000', 'bottom');
                alert(res);
            }).catch((err) => {
                console.error(err.message);
                this.toast.showToast(err.message, '2000', 'bottom');
                alert(err.message);
            });
        }).catch((err) => {
            console.error(err.message);
            this.toast.showToast(err.message, '2000', 'bottom');
            alert(err.message);
        });
    }
    callAuth() {
        // CALL EMERGENCY AUTHORITIES (112 OR 911)
        this.call.isCallSupported().then(() => {
            this.call.callNumber(`+2347050706655`, false).then((res) => {
                console.log(res);
                this.toast.showToast(res, '2000', 'bottom');
                alert(res);
            }).catch((err) => {
                console.error(err.message);
                this.toast.showToast(err.message, '2000', 'bottom');
                alert(err.message);
            });
        }).catch((err) => {
            console.error(err.message);
            this.toast.showToast(err.message, '2000', 'bottom');
            alert(err.message);
        });
    }
    getProfile() {
        let role, uid;
        role = this.store.getItem('hoa-role');
        uid = this.store.getItem('hoa-uid');
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref(role).child(uid).once('value', (snapshot) => {
            this.profile = snapshot.val();
            this.estateDetails = this.getEstateDetails(snapshot.val().estateName);
        }).then(() => {
            console.log('Profile retrieved successfully');
        }).catch((err) => {
            console.error(err.message);
        });
    }
    getEstateDetails(estateName) {
        firebase_app__WEBPACK_IMPORTED_MODULE_5__["database"]().ref('Estates').child(estateName).once('value', (snapshot) => {
            return snapshot.val();
        });
    }
    ngOnInit() {
        //   this.getProfile();
    }
};
EmergencyPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"] }
];
EmergencyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-emergency',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./emergency.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/emergency/emergency.page.html")).default,
        providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"], _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./emergency.page.scss */ "./src/app/emergency/emergency.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"],
        _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"],
        _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
], EmergencyPage);



/***/ })

}]);
//# sourceMappingURL=emergency-emergency-module-es2015.js.map