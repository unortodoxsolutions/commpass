(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carpooling-ride-details-ride-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carpooling/ride-details/ride-details.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carpooling/ride-details/ride-details.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Ride Details\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ride-history-content\">\n    <ion-list lines='full'>\n        <p class=\"rideDate\">{{ride.date | date:'short'}}</p>\n        <ion-list-header>Route</ion-list-header>\n        <!-- ROUTE -->\n        <ion-item>\n            <ion-grid>\n                <ion-row class='dataRow'>\n                    <ion-row class='fromRow'>\n                        <ion-col size='1'>\n                            <ion-icon name=\"pin\" color='seceondary'></ion-icon>\n                        </ion-col>\n                        <ion-col size='11'>\n                            <ion-text>{{ ride.from }}</ion-text>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class='intRow'>\n                        <ion-col size='1'>\n                            <ion-icon name=\"more\" color='dark'></ion-icon>\n                        </ion-col>\n                        <ion-col size='11'>\n                            <!-- <ion-icon name=\"pin\" color='danger'></ion-icon> -->\n                        </ion-col>\n                    </ion-row>\n                    <ion-row class='toRow'>\n                        <ion-col size='1'>\n                            <ion-icon name=\"pin\" color='danger'></ion-icon>\n                        </ion-col>\n                        <ion-col size='11'>\n                            <ion-text>{{ ride.to }}</ion-text>\n                            <!-- <ion-icon name=\"pin\" color='danger'></ion-icon> -->\n                        </ion-col>\n                    </ion-row>\n                </ion-row>\n            </ion-grid>\n        </ion-item>\n\n        <!-- PRICE/SEATS -->\n        <!-- <ion-item class=\"itemPriceSeats\">\n            <ion-text item-right>{{ ride.seats }} Seats</ion-text>\n        </ion-item> -->\n\n        <!-- RIDE DETAILS -->\n        <ion-list-header>Ride Details</ion-list-header>\n        <ion-item>\n            <ion-label position='stacked'>\n                From\n            </ion-label>\n            <ion-text>{{ ride.from }}</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label position='stacked'>\n                To\n            </ion-label>\n            <ion-text>{{ ride.to }}</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label position='stacked'>\n                Date\n            </ion-label>\n            <ion-text>{{ ride.date | date:'shortDate' }}</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label position='stacked'>\n                Time\n            </ion-label>\n            <ion-text>{{ ride.time | date:'shortTime' }}</ion-text>\n        </ion-item>\n        <ion-item>\n            <ion-label position='stacked'>\n                Available Seats\n            </ion-label>\n            <ion-text>{{ ride.seats }}</ion-text>\n        </ion-item>\n\n        <!-- CAR OWNER -->\n        <ion-list-header>Car Owner</ion-list-header>\n        <ion-item class='carOwnerItem ion-activatable'>\n            <ion-avatar item-left>\n                <img src=\"https://picsum.photos/100\" *ngIf='ride.offeredBy.profilePic === undefined'>\n                <img [src]='ride.offeredBy.profilePic' *ngIf='ride.offeredBy.profilePic !== undefined'>\n            </ion-avatar>\n            <ion-col size='7'>\n                <h6 class=\"carOwnerName\"> {{ ride.offeredBy.fullname | titlecase }}</h6>\n                <p class=\"carOwnerAbout\">{{ ride.offeredBy.about }}</p>\n            </ion-col>\n            <ion-col size='3'>\n                <ion-icon name=\"mail\"></ion-icon>\n            </ion-col>\n            <ion-ripple-effect></ion-ripple-effect>\n        </ion-item>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/carpooling/ride-details/ride-details.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/carpooling/ride-details/ride-details.module.ts ***!
  \****************************************************************/
/*! exports provided: RideDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideDetailsPageModule", function() { return RideDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ride_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ride-details.page */ "./src/app/carpooling/ride-details/ride-details.page.ts");







const routes = [
    {
        path: '',
        component: _ride_details_page__WEBPACK_IMPORTED_MODULE_6__["RideDetailsPage"]
    }
];
let RideDetailsPageModule = class RideDetailsPageModule {
};
RideDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_ride_details_page__WEBPACK_IMPORTED_MODULE_6__["RideDetailsPage"]]
    })
], RideDetailsPageModule);



/***/ }),

/***/ "./src/app/carpooling/ride-details/ride-details.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/carpooling/ride-details/ride-details.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-grid {\n  display: -webkit-box;\n  display: flex;\n  width: 100vw;\n}\nion-grid .dataRow {\n  width: 100vw !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\nion-grid .dataRow .fromRow,\nion-grid .dataRow .intRow {\n  height: 20px !important;\n}\nion-list-header {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n.rideDate {\n  text-align: center;\n  font-size: 24px;\n  color: var(--ion-color-secondary);\n}\n.carOwnerItem {\n  background-color: var(--app-background-shade) !important;\n  padding: 0px 0px 0px 0px;\n}\n.carOwnerItem ion-avatar {\n  height: 70px !important;\n  width: 70px !important;\n}\n.carOwnerItem ion-col[size=\"7\"] {\n  padding: 0px 0px 0px 5px;\n}\n.carOwnerItem ion-col[size=\"7\"] .carOwnerName {\n  margin: 0px 0px 5px 0px;\n}\n.carOwnerItem ion-col[size=\"7\"] .carOwnerAbout {\n  margin: 0;\n}\n.carOwnerItem ion-col[size=\"3\"] {\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: flex;\n  font-size: 24px;\n  color: var(--ion-color-primary) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9jYXJwb29saW5nL3JpZGUtZGV0YWlscy9yaWRlLWRldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9jYXJwb29saW5nL3JpZGUtZGV0YWlscy9yaWRlLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKO0FEQUk7RUFDSSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0VSO0FERFE7O0VBRUksdUJBQUE7QUNHWjtBREdBO0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FDREo7QURJQTtFQUNJLHdEQUFBO0VBQ0Esd0JBQUE7QUNESjtBREVJO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtBQ0FSO0FERUk7RUFDSSx3QkFBQTtBQ0FSO0FEQ1E7RUFDSSx1QkFBQTtBQ0NaO0FEQ1E7RUFDSSxTQUFBO0FDQ1o7QURFSTtFQUNJLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9jYXJwb29saW5nL3JpZGUtZGV0YWlscy9yaWRlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWdyaWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIC5kYXRhUm93IHtcbiAgICAgICAgd2lkdGg6IDEwMHZ3ICFpbXBvcnRhbnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC5mcm9tUm93LFxuICAgICAgICAuaW50Um93IHtcbiAgICAgICAgICAgIGhlaWdodDogMjBweCAhaW1wb3J0YW50XG4gICAgICAgIH1cbiAgICAgICAgLnRvUm93IHt9XG4gICAgfVxufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLnJpZGVEYXRlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLmNhck93bmVySXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgIGlvbi1hdmF0YXIge1xuICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudFxuICAgIH1cbiAgICBpb24tY29sW3NpemU9JzcnXSB7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbiAgICAgICAgLmNhck93bmVyTmFtZSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuY2FyT3duZXJBYm91dCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNvbFtzaXplPSczJ10ge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnRcbiAgICB9XG59IiwiaW9uLWdyaWQge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG59XG5pb24tZ3JpZCAuZGF0YVJvdyB7XG4gIHdpZHRoOiAxMDB2dyAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuaW9uLWdyaWQgLmRhdGFSb3cgLmZyb21Sb3csXG5pb24tZ3JpZCAuZGF0YVJvdyAuaW50Um93IHtcbiAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tbGlzdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmlkZURhdGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uY2FyT3duZXJJdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cbi5jYXJPd25lckl0ZW0gaW9uLWF2YXRhciB7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xufVxuLmNhck93bmVySXRlbSBpb24tY29sW3NpemU9XCI3XCJdIHtcbiAgcGFkZGluZzogMHB4IDBweCAwcHggNXB4O1xufVxuLmNhck93bmVySXRlbSBpb24tY29sW3NpemU9XCI3XCJdIC5jYXJPd25lck5hbWUge1xuICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbn1cbi5jYXJPd25lckl0ZW0gaW9uLWNvbFtzaXplPVwiN1wiXSAuY2FyT3duZXJBYm91dCB7XG4gIG1hcmdpbjogMDtcbn1cbi5jYXJPd25lckl0ZW0gaW9uLWNvbFtzaXplPVwiM1wiXSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/carpooling/ride-details/ride-details.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/carpooling/ride-details/ride-details.page.ts ***!
  \**************************************************************/
/*! exports provided: RideDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RideDetailsPage", function() { return RideDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let RideDetailsPage = class RideDetailsPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        // GET RIDE DETAILS
        this.getRide();
    }
    getRide() {
        this.route.paramMap.subscribe((params) => {
            this.ride = JSON.parse(params.get('ride'));
        });
    }
    ngOnInit() {
    }
};
RideDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RideDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ride-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ride-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carpooling/ride-details/ride-details.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ride-details.page.scss */ "./src/app/carpooling/ride-details/ride-details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], RideDetailsPage);



/***/ })

}]);
//# sourceMappingURL=carpooling-ride-details-ride-details-module-es2015.js.map