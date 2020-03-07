(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dependent-details-dependent-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent-details/dependent-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dependent-details/dependent-details.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <!-- <ion-menu-button></ion-menu-button> -->\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Dependent Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"dependent-details-content ion-padding\">\n    <ion-list lines='full'>\n        <ion-list-header>INFORMATION</ion-list-header>\n        <!-- <ion-item>\n                <ion-label stacked>{{'Estate Name' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='profile.estateName + \" Estate\" | titlecase'></ion-input>\n            </ion-item> -->\n        <ion-item>\n            <ion-label stacked>Fullname</ion-label>\n            <ion-input readonly type=\"text\" [value]='dependent.fullname | titlecase'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Email</ion-label>\n            <ion-input readonly type=\"email\" [value]='dependent.email'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Phone Number</ion-label>\n            <ion-input readonly type=\"text\" [value]='dependent.phone | titlecase'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Relationship</ion-label>\n            <ion-input readonly type=\"text\" [value]='dependent.relationship | titlecase'></ion-input>\n        </ion-item>\n    </ion-list>\n    <!-- DEPENDENT'S VISITORS LOG -->\n    <ion-list lines='full' *ngIf='dependent.visitors !== \"\" || dependent.visitors !== null'>\n        <ion-list-header>VISITORS LOG</ion-list-header>\n        <ion-item *ngFor='let visitor of dependent.visitors; let i = index'>\n            <ion-input type=\"text\" readonly [value]='visitor.fullname | titlecase'></ion-input>\n        </ion-item>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/dependent-details/dependent-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/dependent-details/dependent-details.module.ts ***!
  \***************************************************************/
/*! exports provided: DependentDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependentDetailsPageModule", function() { return DependentDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dependent_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dependent-details.page */ "./src/app/dependent-details/dependent-details.page.ts");







const routes = [
    {
        path: '',
        component: _dependent_details_page__WEBPACK_IMPORTED_MODULE_6__["DependentDetailsPage"]
    }
];
let DependentDetailsPageModule = class DependentDetailsPageModule {
};
DependentDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_dependent_details_page__WEBPACK_IMPORTED_MODULE_6__["DependentDetailsPage"]]
    })
], DependentDetailsPageModule);



/***/ }),

/***/ "./src/app/dependent-details/dependent-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/dependent-details/dependent-details.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list-header {\n  color: var(--ion-color-dark) !important;\n  background: var(--app-background-shade) !important;\n  margin: 10px 0px 20px 0px !important;\n}\n\nion-label {\n  color: var(--ion-color-secondary) !important;\n}\n\nion-input {\n  text-align: end !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9kZXBlbmRlbnQtZGV0YWlscy9kZXBlbmRlbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzcmMvYXBwL2RlcGVuZGVudC1kZXRhaWxzL2RlcGVuZGVudC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQ0FBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kZXBlbmRlbnQtZGV0YWlscy9kZXBlbmRlbnQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbGlzdC1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnRcbn0iLCJpb24tbGlzdC1oZWFkZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDEwcHggMHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dependent-details/dependent-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/dependent-details/dependent-details.page.ts ***!
  \*************************************************************/
/*! exports provided: DependentDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependentDetailsPage", function() { return DependentDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hoa-store.service */ "./src/app/hoa-store.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");






let DependentDetailsPage = class DependentDetailsPage {
    constructor(route, router, store) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.dependent = [];
    }
    ngOnInit() {
        const uid = this.store.getItem('hoa-uid');
        const role = this.store.getItem('hoa-role');
        this.uid = uid;
        this.role = role;
        this.route.paramMap.subscribe((param) => {
            console.log('Param', param);
            const key = param.get('dependent');
            console.log('Key', key);
            this.key = key;
            // this.visitor = param.get('visitor');
            // if (role === 'resident') {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref(`${role}/${uid}/dependents`).child(key).on('value', (snapshot) => {
                this.dependent = snapshot.val();
                console.log('Dependent', this.dependent);
                // console.log('Snap', snapshot.val());
            });
            // }
        });
    }
};
DependentDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"] }
];
DependentDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dependent-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dependent-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dependent-details/dependent-details.page.html")).default,
        providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dependent-details.page.scss */ "./src/app/dependent-details/dependent-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]])
], DependentDetailsPage);



/***/ })

}]);
//# sourceMappingURL=dependent-details-dependent-details-module-es2015.js.map