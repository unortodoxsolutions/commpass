(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header no-border>\n      <ion-toolbar color='primary'>\n          <ion-buttons slot='start'>\n              <ion-menu-button></ion-menu-button>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n              <ion-button></ion-button>\n          </ion-buttons>\n          <ion-title> {{this.role | titlecase}} Activity</ion-title>\n      </ion-toolbar>\n  </ion-header> -->\n\n<ion-content slot='fixed' class=\"landing-content\">\n    <ion-row>\n        <ion-col size='5' (click)='toActivity()'>\n            <!-- ACCESS CONTROL NAV ITEM -->\n            <div class=\"navItem\">\n                <ion-icon src=\"./assets/sample-icons/tabs/line-chart.svg\"></ion-icon>\n                <ion-text>Access Control</ion-text>\n            </div>\n        </ion-col>\n        <ion-col size='5' (click)='toCarpooling()' *ngIf='role !== \"security\"'>\n            <!-- CARPOOLING NAV ITEM -->\n            <div class=\" navItem \">\n                <ion-icon name=\"car\"></ion-icon>\n                <ion-text>Carpooling</ion-text>\n            </div>\n        </ion-col>\n        <ion-col size='5'>\n            <!-- Emergency NAV ITEM -->\n            <div class=\"navItem\" (click)='toEmergency()'>\n                <ion-icon src=\"./assets/sample-icons/tabs/bandage.svg \"></ion-icon>\n                <ion-text>Emergency</ion-text>\n            </div>\n        </ion-col>\n        <ion-col size='5'>\n            <!-- PLACARD NAV ITEM -->\n            <div class=\"navItem\" (click)='toPlacard()'>\n                <ion-icon src=\"./assets/sample-icons/tabs/notifications.svg\"></ion-icon>\n                <ion-text>Placard</ion-text>\n            </div>\n        </ion-col>\n    </ion-row>\n</ion-content>");

/***/ }),

/***/ "./src/app/landing/landing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing.page */ "./src/app/landing/landing.page.ts");







const routes = [
    {
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]
    }
];
let LandingPageModule = class LandingPageModule {
};
LandingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_6__["LandingPage"]]
    })
], LandingPageModule);



/***/ }),

/***/ "./src/app/landing/landing.page.scss":
/*!*******************************************!*\
  !*** ./src/app/landing/landing.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".landing-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  --background: url('home-bg.png') !important;\n}\n.landing-content ion-row {\n  height: 50vh;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  margin: 25vh 5vh;\n}\n.landing-content ion-row ion-col {\n  height: 160px;\n  width: 120px;\n  background: var(--ion-color-primary);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: 0px 0px 7px grey;\n  border-radius: 20px;\n  margin: 5px;\n}\n.landing-content ion-row ion-col .navItem {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 70px;\n  justify-content: space-around;\n  color: var(--ion-color-light);\n}\n.landing-content ion-row ion-col .navItem ion-icon {\n  font-size: 24px;\n  color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSwyQ0FBQTtBQ0NKO0FEQUk7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FER1E7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0RaO0FERVk7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7QUNBaEI7QURDZ0I7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7QUNDcEIiLCJmaWxlIjoic3JjL2FwcC9sYW5kaW5nL2xhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxhbmRpbmctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy5wbmcnKSAhaW1wb3J0YW50O1xuICAgIGlvbi1yb3cge1xuICAgICAgICBoZWlnaHQ6IDUwdmg7XG4gICAgICAgIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMjV2aCA1dmg7XG4gICAgICAgIC8vICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAvLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGlvbi1jb2wge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggZ3JleTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgIC5uYXZJdGVtIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgaGVpZ2h0OiAxODBweDtcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAgICAgICAgICAgICAgIC8vICAgICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAvLyAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgICAgIC8vICAgICB3aWR0aDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmxhbmRpbmctY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvaG9tZS1iZy5wbmdcIikgIWltcG9ydGFudDtcbn1cbi5sYW5kaW5nLWNvbnRlbnQgaW9uLXJvdyB7XG4gIGhlaWdodDogNTB2aDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAyNXZoIDV2aDtcbn1cbi5sYW5kaW5nLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIHtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDdweCBncmV5O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW46IDVweDtcbn1cbi5sYW5kaW5nLWNvbnRlbnQgaW9uLXJvdyBpb24tY29sIC5uYXZJdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG4ubGFuZGluZy1jb250ZW50IGlvbi1yb3cgaW9uLWNvbCAubmF2SXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59Il19 */");

/***/ }),

/***/ "./src/app/landing/landing.page.ts":
/*!*****************************************!*\
  !*** ./src/app/landing/landing.page.ts ***!
  \*****************************************/
/*! exports provided: LandingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPage", function() { return LandingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LandingPage = class LandingPage {
    constructor(router) {
        this.router = router;
    }
    toActivity() {
        this.router.navigate(['app/activity']);
    }
    toCarpooling() {
        this.router.navigate(['app/carpooling/home']);
    }
    toEmergency() {
        this.router.navigate(['app/emergency']);
    }
    toPlacard() {
        this.router.navigate(['app/notifications']);
    }
    ngOnInit() {
    }
};
LandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LandingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.page.scss */ "./src/app/landing/landing.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LandingPage);



/***/ })

}]);
//# sourceMappingURL=landing-landing-module-es2015.js.map