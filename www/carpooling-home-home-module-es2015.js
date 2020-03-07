(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carpooling-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/carpooling/home/home.page.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carpooling/home/home.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Carpooling\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"carpooling-content\" #content>\n    <ion-img src='https://sciexaminer.com/wp-content/uploads/2019/10/Carpooling-990x660.jpg' height='150px'></ion-img>\n    <ion-segment [(ngModel)]=\"segment\" (ionChange)='segmentChanged($event)'>\n        <ion-segment-button [disabled]='isLoading' value=\"findRide\" color='secondary'>\n            <ion-label color='secondary'>Find A Ride</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [disabled]='isLoading' value=\"offerRide\">\n            <ion-label color='secondary'>Offer Ride</ion-label>\n        </ion-segment-button>\n        <ion-segment-button [disabled]='isLoading' value=\"rideHistory\">\n            <ion-label color='secondary'>History</ion-label>\n        </ion-segment-button>\n    </ion-segment>\n    <div [ngSwitch]='segment'>\n        <div id=\"findRide\" [hidden]=\"this.segment !== 'findRide'\">\n            <form [formGroup]=\"findRideForm\" (ngSubmit)=\"findRide()\">\n                <ion-list lines='full'>\n                    <!-- FROM LOCATION  -->\n                    <ion-item>\n                        <ion-label stacked>From</ion-label>\n                        <input ngx-google-places-autocomplete #findFrom type=\"text\" id='findFrom' inputmode=\"text\" autocomplete='on' formControlName='findFrom'>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.findFrom\">\n                            <div class=\"error-message\" *ngIf=\"findRideForm.get('findFrom').hasError(validation.type) && (findRideForm.get('findFrom').dirty || findRideForm.get('findFrom').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <!-- TO LOCATION  -->\n                    <ion-item>\n                        <ion-label stacked>To</ion-label>\n                        <input ngx-google-places-autocomplete #findTo type=\"text\" id='findTo' autocomplete='on' inputmode=\"text\" formControlName='findTo'>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.findTo\">\n                            <div class=\"error-message\" *ngIf=\"findRideForm.get('findTo').hasError(validation.type) && (findRideForm.get('findTo').dirty || findRideForm.get('findTo').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <!-- AVAILABLE SEATS  -->\n                    <ion-item>\n                        <ion-label stacked>Seats</ion-label>\n                        <ion-input type=\"number\" inputmode=\"number\" formControlName='findSeats'></ion-input>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.findSeats\">\n                            <div class=\"error-message\" *ngIf=\"findRideForm.get('findSeats').hasError(validation.type) && (findRideForm.get('findSeats').dirty || findRideForm.get('findSeats').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n\n                    <ion-button type=\"submit\" expand='block' fill='solid' color='primary' [disabled]='!findRideForm.valid || isLoading'>\n                        <ion-spinner name=\"crescent\" slot='start' *ngIf='isLoading'></ion-spinner>\n                        <ion-text>{{findRideButtonText}}</ion-text>\n                    </ion-button>\n                </ion-list>\n            </form>\n\n            <p class=\"hint\" *ngIf='findRideSearchResults === []'>\n                No Results\n            </p>\n\n            <div *ngIf='!findRideSearchResults && isLoading'>\n                <ion-skeleton-text style=\"width: 100%; height: 70px; background-color: var(--app-background-shade)\"></ion-skeleton-text>\n            </div>\n\n            <ion-list class='findRideResultList' lines='full' *ngIf='findRideSearchResults'>\n                <ion-list-header>Search Results</ion-list-header>\n                <ion-item class='findRideResultItem ion-activatable' *ngFor=\"let ride of findRideSearchResults; let i = index\" (click)=\"viewRideDetails(i)\">\n                    <ion-avatar item-left>\n                        <img src=\"https://picsum.photos/100\" *ngIf='ride.offeredBy.profilePic === undefined'>\n                        <img [src]='ride.offeredBy.profilePic' *ngIf='ride.offeredBy.profilePic !== undefined'>\n                    </ion-avatar>\n                    <ion-col size='7'>\n                        <h6 class=\"rideResidentName\"> {{ ride.offeredBy.fullname | titlecase }}</h6>\n                        <p class=\"rideFromTo\">{{ ride.from }} - {{ ride.to }}</p>\n                    </ion-col>\n                    <ion-col size='3'>\n                        <p class=\"rideTime\">\n                            <ion-icon name=\"time\"></ion-icon>\n                            {{ ride.time | date:'shortTime' }}\n                        </p>\n                        <p class=\"rideSeats\">\n                            <ion-icon name=\"people\"></ion-icon>\n                            {{ ride.seats }}\n                        </p>\n                    </ion-col>\n                    <ion-ripple-effect></ion-ripple-effect>\n                    <!-- {{ride.from}} -->\n                </ion-item>\n            </ion-list>\n\n        </div>\n        <div id=\"offerRide\" [hidden]=\"this.segment !== 'offerRide'\">\n            <form [formGroup]=\"offerRideForm\" (ngSubmit)=\"offerRide()\">\n                <ion-list lines='full'>\n                    <!-- FROM LOCATION  -->\n                    <ion-item>\n                        <ion-label stacked>From</ion-label>\n                        <input ngx-google-places-autocomplete #offerFrom type=\"text\" id='offerFrom' autocomplete='on' inputmode=\"text\" formControlName='offerFrom'>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.offerFrom\">\n                            <div class=\"error-message\" *ngIf=\"offerRideForm.get('offerFrom').hasError(validation.type) && (offerRideForm.get('offerFrom').dirty || offerRideForm.get('offerFrom').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <!-- TO LOCATION  -->\n                    <ion-item>\n                        <ion-label stacked>To</ion-label>\n                        <input ngx-google-places-autocomplete #offerTo type=\"text\" id='offerTo' autocomplete='on' inputmode=\"text\" formControlName='offerTo'>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.offerTo\">\n                            <div class=\"error-message\" *ngIf=\"offerRideForm.get('offerTo').hasError(validation.type) && (offerRideForm.get('offerTo').dirty || offerRideForm.get('offerTo').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <!-- RIDE DATE  -->\n                    <ion-item>\n                        <ion-label>Date</ion-label>\n                        <ion-datetime displayFormat=\"DD/MM/YYYY\" pickerFormat='DD MM YYYY' formControlName='offerDate'></ion-datetime>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.offerDate\">\n                            <div class=\"error-message\" *ngIf=\"offerRideForm.get('offerDate').hasError(validation.type) && (offerRideForm.get('offerDate').dirty || offerRideForm.get('offerDate').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <!-- RIDE TIME  -->\n                    <ion-item>\n                        <ion-label>Time</ion-label>\n                        <ion-datetime displayFormat='HH:mm' pickerFormat='HH:mm' formControlName='offerTime'></ion-datetime>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.offerTime\">\n                            <div class=\"error-message\" *ngIf=\"offerRideForm.get('offerTime').hasError(validation.type) && (offerRideForm.get('offerTime').dirty || offerRideForm.get('offerTime').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n                    <!-- AVAILABLE SEATS  -->\n                    <ion-item>\n                        <ion-label stacked>Available Seats</ion-label>\n                        <ion-input type=\"number\" inputmode=\"number\" formControlName='offerSeats'></ion-input>\n                    </ion-item>\n                    <div class=\"error-container\">\n                        <ng-container *ngFor=\"let validation of validation_messages.offerSeats\">\n                            <div class=\"error-message\" *ngIf=\"offerRideForm.get('offerSeats').hasError(validation.type) && (offerRideForm.get('offerSeats').dirty || offerRideForm.get('offerSeats').touched)\">\n                                <ion-icon name=\"information-circle-outline\"></ion-icon>\n                                <span>{{ validation.message }}</span>\n                            </div>\n                        </ng-container>\n                    </div>\n                </ion-list>\n\n                <ion-button type=\"submit\" expand='block' fill='solid' color='primary' [disabled]='!offerRideForm.valid || isLoading'>\n                    <ion-spinner name=\"crescent\" slot='start' *ngIf='isLoading'></ion-spinner>\n                    <ion-text>{{offerRideButtonText}}</ion-text>\n                </ion-button>\n            </form>\n        </div>\n        <div id=\"rideHistory\" *ngSwitchCase=\"'rideHistory'\">\n            <!--  -->\n            <div *ngIf='!rideHistory'>\n                <ion-skeleton-text style=\"width: 100%; height: 70px; background-color: var(--app-background-shade)\"></ion-skeleton-text>\n                <ion-skeleton-text style=\"width: 100%; height: 70px; background-color: var(--app-background-shade)\"></ion-skeleton-text>\n                <ion-skeleton-text style=\"width: 100%; height: 70px; background-color: var(--app-background-shade)\"></ion-skeleton-text>\n                <ion-skeleton-text style=\"width: 100%; height: 70px; background-color: var(--app-background-shade)\"></ion-skeleton-text>\n                <ion-skeleton-text style=\"width: 100%; height: 70px; background-color: var(--app-background-shade)\"></ion-skeleton-text>\n                <ion-skeleton-text style=\"width: 100%; height: 70px; background-color: var(--app-background-shade)\"></ion-skeleton-text>\n            </div>\n            <ion-list class='rideHistoryList' lines='full' *ngIf='this.rideHistory != []'>\n                <ion-item class='rideHistoryItem ion-activatable' *ngFor=\"let ride of rideHistory; let i = index\" (click)=\"viewRideHistoryDetails(i)\">\n                    <ion-avatar item-left>\n                        <img src=\"https://picsum.photos/100\" *ngIf='ride.offeredBy.profilePic === undefined'>\n                        <img [src]='ride.offeredBy.profilePic' *ngIf='ride.offeredBy.profilePic !== undefined'>\n                    </ion-avatar>\n                    <ion-col size='7'>\n                        <h6 class=\"rideResidentName\"> {{ ride.offeredBy.fullname | titlecase }}</h6>\n                        <p class=\"rideFromTo\">{{ ride.from }} - {{ ride.to }}</p>\n                    </ion-col>\n                    <ion-col size='3'>\n                        <p class=\"rideTime\">\n                            <ion-icon name=\"time\"></ion-icon>\n                            {{ ride.time | date:'shortTime' }}\n                        </p>\n                        <p class=\"rideSeats\">\n                            <ion-icon name=\"people\"></ion-icon>\n                            {{ ride.seats }}\n                        </p>\n                    </ion-col>\n                    <ion-ripple-effect></ion-ripple-effect>\n                    <!-- {{ride.from}} -->\n                </ion-item>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/carpooling/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/carpooling/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/carpooling/home/home.page.ts");








const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
    }
];
let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/carpooling/home/home.page.scss":
/*!************************************************!*\
  !*** ./src/app/carpooling/home/home.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-input,\ninput {\n  text-align: end !important;\n  border: 0 !important;\n  width: 75vw !important;\n}\n\nion-button ion-spinner {\n  margin-right: 20px !important;\n}\n\n.error-container {\n  color: var(--ion-color-danger) !important;\n  margin: 0px 0px 0px 10px;\n}\n\n.findRideResultList ion-list-header,\n.rideHistoryList ion-list-header {\n  background: var(--ion-color-primary);\n  color: #fff;\n}\n\n.findRideResultList .findRideResultItem,\n.findRideResultList .rideHistoryItem,\n.rideHistoryList .findRideResultItem,\n.rideHistoryList .rideHistoryItem {\n  background-color: var(--app-background-shade) !important;\n  padding: 0px 0px 0px 0px;\n}\n\n.findRideResultList .findRideResultItem ion-avatar,\n.findRideResultList .rideHistoryItem ion-avatar,\n.rideHistoryList .findRideResultItem ion-avatar,\n.rideHistoryList .rideHistoryItem ion-avatar {\n  height: 70px !important;\n  width: 70px !important;\n}\n\n.findRideResultList .findRideResultItem ion-col[size=\"7\"],\n.findRideResultList .rideHistoryItem ion-col[size=\"7\"],\n.rideHistoryList .findRideResultItem ion-col[size=\"7\"],\n.rideHistoryList .rideHistoryItem ion-col[size=\"7\"] {\n  padding: 0px 0px 0px 5px;\n}\n\n.findRideResultList .findRideResultItem ion-col[size=\"7\"] .rideResidentName,\n.findRideResultList .rideHistoryItem ion-col[size=\"7\"] .rideResidentName,\n.rideHistoryList .findRideResultItem ion-col[size=\"7\"] .rideResidentName,\n.rideHistoryList .rideHistoryItem ion-col[size=\"7\"] .rideResidentName {\n  margin: 0px 0px 5px 0px;\n}\n\n.findRideResultList .findRideResultItem ion-col[size=\"7\"] .rideFromTo,\n.findRideResultList .rideHistoryItem ion-col[size=\"7\"] .rideFromTo,\n.rideHistoryList .findRideResultItem ion-col[size=\"7\"] .rideFromTo,\n.rideHistoryList .rideHistoryItem ion-col[size=\"7\"] .rideFromTo {\n  margin: 0;\n}\n\n.findRideResultList .findRideResultItem ion-col[size=\"3\"],\n.findRideResultList .rideHistoryItem ion-col[size=\"3\"],\n.rideHistoryList .findRideResultItem ion-col[size=\"3\"],\n.rideHistoryList .rideHistoryItem ion-col[size=\"3\"] {\n  padding: 0;\n}\n\n.findRideResultList .findRideResultItem ion-col[size=\"3\"] .rideTime,\n.findRideResultList .rideHistoryItem ion-col[size=\"3\"] .rideTime,\n.rideHistoryList .findRideResultItem ion-col[size=\"3\"] .rideTime,\n.rideHistoryList .rideHistoryItem ion-col[size=\"3\"] .rideTime {\n  margin: 0px 0px 5px 0px;\n}\n\n.findRideResultList .findRideResultItem ion-col[size=\"3\"] .rideSeats,\n.findRideResultList .rideHistoryItem ion-col[size=\"3\"] .rideSeats,\n.rideHistoryList .findRideResultItem ion-col[size=\"3\"] .rideSeats,\n.rideHistoryList .rideHistoryItem ion-col[size=\"3\"] .rideSeats {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9jYXJwb29saW5nL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2NhcnBvb2xpbmcvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSwwQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURHSTtFQUNJLDZCQUFBO0FDQVI7O0FESUE7RUFDSSx5Q0FBQTtFQUNBLHdCQUFBO0FDREo7O0FETUk7O0VBQ0ksb0NBQUE7RUFDQSxXQUFBO0FDRlI7O0FESUk7Ozs7RUFFSSx3REFBQTtFQUNBLHdCQUFBO0FDQVI7O0FEQ1E7Ozs7RUFDSSx1QkFBQTtFQUNBLHNCQUFBO0FDSVo7O0FERlE7Ozs7RUFDSSx3QkFBQTtBQ09aOztBRE5ZOzs7O0VBQ0ksdUJBQUE7QUNXaEI7O0FEVFk7Ozs7RUFDSSxTQUFBO0FDY2hCOztBRFhROzs7O0VBQ0ksVUFBQTtBQ2dCWjs7QURmWTs7OztFQUNJLHVCQUFBO0FDb0JoQjs7QURsQlk7Ozs7RUFDSSxTQUFBO0FDdUJoQiIsImZpbGUiOiJzcmMvYXBwL2NhcnBvb2xpbmcvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCxcbmlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICB3aWR0aDogNzV2dyAhaW1wb3J0YW50XG59XG5cbmlvbi1idXR0b24ge1xuICAgIGlvbi1zcGlubmVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG4uZXJyb3ItY29udGFpbmVyIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XG59XG5cbi5maW5kUmlkZVJlc3VsdExpc3QsXG4ucmlkZUhpc3RvcnlMaXN0IHtcbiAgICBpb24tbGlzdC1oZWFkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuZmluZFJpZGVSZXN1bHRJdGVtLFxuICAgIC5yaWRlSGlzdG9yeUl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSkgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogMHB4IDBweCAwcHggMHB4O1xuICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudFxuICAgICAgICB9XG4gICAgICAgIGlvbi1jb2xbc2l6ZT0nNyddIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbiAgICAgICAgICAgIC5yaWRlUmVzaWRlbnROYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5yaWRlRnJvbVRvIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWNvbFtzaXplPSczJ10ge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIC5yaWRlVGltZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmlkZVNlYXRzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWlucHV0LFxuaW5wdXQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3NXZ3ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1idXR0b24gaW9uLXNwaW5uZXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yLWNvbnRhaW5lciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDEwcHg7XG59XG5cbi5maW5kUmlkZVJlc3VsdExpc3QgaW9uLWxpc3QtaGVhZGVyLFxuLnJpZGVIaXN0b3J5TGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmZpbmRSaWRlUmVzdWx0TGlzdCAuZmluZFJpZGVSZXN1bHRJdGVtLFxuLmZpbmRSaWRlUmVzdWx0TGlzdCAucmlkZUhpc3RvcnlJdGVtLFxuLnJpZGVIaXN0b3J5TGlzdCAuZmluZFJpZGVSZXN1bHRJdGVtLFxuLnJpZGVIaXN0b3J5TGlzdCAucmlkZUhpc3RvcnlJdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDBweDtcbn1cbi5maW5kUmlkZVJlc3VsdExpc3QgLmZpbmRSaWRlUmVzdWx0SXRlbSBpb24tYXZhdGFyLFxuLmZpbmRSaWRlUmVzdWx0TGlzdCAucmlkZUhpc3RvcnlJdGVtIGlvbi1hdmF0YXIsXG4ucmlkZUhpc3RvcnlMaXN0IC5maW5kUmlkZVJlc3VsdEl0ZW0gaW9uLWF2YXRhcixcbi5yaWRlSGlzdG9yeUxpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tYXZhdGFyIHtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG59XG4uZmluZFJpZGVSZXN1bHRMaXN0IC5maW5kUmlkZVJlc3VsdEl0ZW0gaW9uLWNvbFtzaXplPVwiN1wiXSxcbi5maW5kUmlkZVJlc3VsdExpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tY29sW3NpemU9XCI3XCJdLFxuLnJpZGVIaXN0b3J5TGlzdCAuZmluZFJpZGVSZXN1bHRJdGVtIGlvbi1jb2xbc2l6ZT1cIjdcIl0sXG4ucmlkZUhpc3RvcnlMaXN0IC5yaWRlSGlzdG9yeUl0ZW0gaW9uLWNvbFtzaXplPVwiN1wiXSB7XG4gIHBhZGRpbmc6IDBweCAwcHggMHB4IDVweDtcbn1cbi5maW5kUmlkZVJlc3VsdExpc3QgLmZpbmRSaWRlUmVzdWx0SXRlbSBpb24tY29sW3NpemU9XCI3XCJdIC5yaWRlUmVzaWRlbnROYW1lLFxuLmZpbmRSaWRlUmVzdWx0TGlzdCAucmlkZUhpc3RvcnlJdGVtIGlvbi1jb2xbc2l6ZT1cIjdcIl0gLnJpZGVSZXNpZGVudE5hbWUsXG4ucmlkZUhpc3RvcnlMaXN0IC5maW5kUmlkZVJlc3VsdEl0ZW0gaW9uLWNvbFtzaXplPVwiN1wiXSAucmlkZVJlc2lkZW50TmFtZSxcbi5yaWRlSGlzdG9yeUxpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tY29sW3NpemU9XCI3XCJdIC5yaWRlUmVzaWRlbnROYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweCAwcHg7XG59XG4uZmluZFJpZGVSZXN1bHRMaXN0IC5maW5kUmlkZVJlc3VsdEl0ZW0gaW9uLWNvbFtzaXplPVwiN1wiXSAucmlkZUZyb21Ubyxcbi5maW5kUmlkZVJlc3VsdExpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tY29sW3NpemU9XCI3XCJdIC5yaWRlRnJvbVRvLFxuLnJpZGVIaXN0b3J5TGlzdCAuZmluZFJpZGVSZXN1bHRJdGVtIGlvbi1jb2xbc2l6ZT1cIjdcIl0gLnJpZGVGcm9tVG8sXG4ucmlkZUhpc3RvcnlMaXN0IC5yaWRlSGlzdG9yeUl0ZW0gaW9uLWNvbFtzaXplPVwiN1wiXSAucmlkZUZyb21UbyB7XG4gIG1hcmdpbjogMDtcbn1cbi5maW5kUmlkZVJlc3VsdExpc3QgLmZpbmRSaWRlUmVzdWx0SXRlbSBpb24tY29sW3NpemU9XCIzXCJdLFxuLmZpbmRSaWRlUmVzdWx0TGlzdCAucmlkZUhpc3RvcnlJdGVtIGlvbi1jb2xbc2l6ZT1cIjNcIl0sXG4ucmlkZUhpc3RvcnlMaXN0IC5maW5kUmlkZVJlc3VsdEl0ZW0gaW9uLWNvbFtzaXplPVwiM1wiXSxcbi5yaWRlSGlzdG9yeUxpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tY29sW3NpemU9XCIzXCJdIHtcbiAgcGFkZGluZzogMDtcbn1cbi5maW5kUmlkZVJlc3VsdExpc3QgLmZpbmRSaWRlUmVzdWx0SXRlbSBpb24tY29sW3NpemU9XCIzXCJdIC5yaWRlVGltZSxcbi5maW5kUmlkZVJlc3VsdExpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tY29sW3NpemU9XCIzXCJdIC5yaWRlVGltZSxcbi5yaWRlSGlzdG9yeUxpc3QgLmZpbmRSaWRlUmVzdWx0SXRlbSBpb24tY29sW3NpemU9XCIzXCJdIC5yaWRlVGltZSxcbi5yaWRlSGlzdG9yeUxpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tY29sW3NpemU9XCIzXCJdIC5yaWRlVGltZSB7XG4gIG1hcmdpbjogMHB4IDBweCA1cHggMHB4O1xufVxuLmZpbmRSaWRlUmVzdWx0TGlzdCAuZmluZFJpZGVSZXN1bHRJdGVtIGlvbi1jb2xbc2l6ZT1cIjNcIl0gLnJpZGVTZWF0cyxcbi5maW5kUmlkZVJlc3VsdExpc3QgLnJpZGVIaXN0b3J5SXRlbSBpb24tY29sW3NpemU9XCIzXCJdIC5yaWRlU2VhdHMsXG4ucmlkZUhpc3RvcnlMaXN0IC5maW5kUmlkZVJlc3VsdEl0ZW0gaW9uLWNvbFtzaXplPVwiM1wiXSAucmlkZVNlYXRzLFxuLnJpZGVIaXN0b3J5TGlzdCAucmlkZUhpc3RvcnlJdGVtIGlvbi1jb2xbc2l6ZT1cIjNcIl0gLnJpZGVTZWF0cyB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/carpooling/home/home.page.ts":
/*!**********************************************!*\
  !*** ./src/app/carpooling/home/home.page.ts ***!
  \**********************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hoa_store_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hoa-store.service */ "./src/app/hoa-store.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");










let HomePage = class HomePage {
    constructor(store, toast, router) {
        this.store = store;
        this.toast = toast;
        this.router = router;
        this.segment = 'findRide';
        this.offerRideButtonText = 'Offer Ride';
        this.findRideButtonText = 'Find Ride';
        this.isLoading = false;
        this.placesOptions = {};
        this.validation_messages = {
            'offerFrom': [
                { type: 'required', message: 'Field is required.' }
            ],
            'offerTo': [
                { type: 'required', message: 'Field is required.' }
            ],
            'offerDate': [
                { type: 'required', message: 'Field is required.' }
            ],
            'offerTime': [
                { type: 'required', message: 'Field is required.' }
            ],
            'offerSeats': [
                { type: 'required', message: 'Field is required.' }
            ],
            'findFrom': [
                { type: 'required', message: 'Field is required.' }
            ],
            'findTo': [
                { type: 'required', message: 'Field is required.' }
            ],
            'findSeats': [
                { type: 'required', message: 'Field is required.' }
            ]
        };
        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
        this.initFindRideForm().then(() => {
            const findTo = new google.maps.places.Autocomplete(this.findTo.nativeElement);
            findTo.addListener('place_changed', () => {
                // console.log(findTo.getPlace());
                // FORCE VALUE SET
                this.findRideForm.get('findTo').setValue(findTo.getPlace().name);
                console.log(this.findRideForm.get('findTo').value);
            });
            const findFrom = new google.maps.places.Autocomplete(this.findFrom.nativeElement);
            findFrom.addListener('place_changed', () => {
                // console.log(findFrom.getPlace());
                // FORCE VALUE SET
                this.findRideForm.get('findFrom').setValue(findFrom.getPlace().name);
                console.log(this.findRideForm.get('findFrom').value);
            });
        });
        this.initOfferRideForm();
        //   this.initOfferRideForm().then(() => {
        //       const offerTo = new google.maps.places.Autocomplete(this.offerTo.nativeElement);
        //       offerTo.addListener('place_changed', () => {
        //             // console.log(offerTo.getPlace());
        //             // FORCE VALUE SET
        //             this.offerRideForm.get('offerTo').setValue(offerTo.getPlace().name);
        //             console.log(this.offerRideForm.get('offerTo').value);
        //       });
        //       const offerFrom = new google.maps.places.Autocomplete(this.offerFrom.nativeElement);
        //       offerFrom.addListener('place_changed', () => {
        //             // console.log(offerFrom.getPlace());
        //             // FORCE VALUE SET
        //             this.offerRideForm.get('offerFrom').setValue(offerFrom.getPlace().name);
        //             console.log(this.offerRideForm.get('offerFrom').value);
        //       });
        //   });
        this.getProfile();
    }
    segmentChanged(e) {
        console.log(e);
        //  CHECK CURRENT SEGMENT AND APPLY GOOGLE PLACES AUTOCOMPLETE
        // INPUT BUG FIX ACCORDINGLY
        if (e.detail.value === 'findRide') {
            // FIX FOR FIND RIDE SEGMENT
            this.initFindRideForm().then(() => {
                const findTo = new google.maps.places.Autocomplete(this.findTo.nativeElement);
                findTo.addListener('place_changed', () => {
                    // console.log(findTo.getPlace());
                    // FORCE VALUE SET
                    this.findRideForm.get('findTo').setValue(findTo.getPlace().name);
                    console.log(this.findRideForm.get('findTo').value);
                });
                const findFrom = new google.maps.places.Autocomplete(this.findFrom.nativeElement);
                findFrom.addListener('place_changed', () => {
                    // console.log(findFrom.getPlace());
                    // FORCE VALUE SET
                    this.findRideForm.get('findFrom').setValue(findFrom.getPlace().name);
                    console.log(this.findRideForm.get('findFrom').value);
                });
            });
        }
        else if (e.detail.value === 'offerRide') {
            console.log('offerRide segment active');
            console.log(this.offerFrom, this.offerTo);
            // FIX FOR OFFER RIDE SEGMENT
            // this.initOfferRideForm().then(() => {
            const offerTo = new google.maps.places.Autocomplete(this.offerTo.nativeElement);
            offerTo.addListener('place_changed', () => {
                // console.log(offerTo.getPlace());
                // FORCE VALUE SET
                this.offerRideForm.get('offerTo').setValue(offerTo.getPlace().name);
                console.log(this.offerRideForm.get('offerTo').value);
            });
            const offerFrom = new google.maps.places.Autocomplete(this.offerFrom.nativeElement);
            offerFrom.addListener('place_changed', () => {
                // console.log(offerFrom.getPlace());
                // FORCE VALUE SET
                this.offerRideForm.get('offerFrom').setValue(offerFrom.getPlace().name);
                console.log(this.offerRideForm.get('offerFrom').value);
            });
            // });
        }
        else {
            // FALLBACK
            return;
        }
    }
    viewRideDetails(i) {
        // ROUTE TO /ride-details/:ride
        const ride = this.findRideSearchResults[i];
        this.router.navigate(['ride-details', JSON.stringify(ride)]);
    }
    viewRideHistoryDetails(i) {
        // ROUTE TO /ride-details/:ride
        const ride = this.rideHistory[i];
        this.router.navigate(['ride-details', JSON.stringify(ride)]);
    }
    getRideHistory() {
        //    GET RESIDENT'S RIDE HISTORY FROM /{uid}/rides/history ROUTE
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`${this.role}/${this.uid}`).child('rides/history').once('value', (rides) => {
            this.rideHistory = [];
            for (const key in rides.val()) {
                if (rides.val().hasOwnProperty(key)) {
                    const rideKey = rides.val()[key];
                    console.log(rideKey);
                    // GET RIDE DETAISL FROM /Carpooling/rides/{rideKey}
                    firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref('Carpooling/rides').child(rideKey).once('value', (ride) => {
                        this.rideHistory.push(ride.val());
                        console.log(ride.val());
                        this.toast.showToast('Ride History Retrieved', '2000', 'bottom');
                    }, (err) => {
                        console.warn(err.message);
                        this.toast.showToast(err.message, '4000', 'bottom');
                    }).catch((err) => {
                        console.error(err.message);
                        this.toast.showToast(err.message, '4000', 'bottom');
                    });
                }
            }
        }, (err) => {
            console.warn(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
        }).catch((err) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
        });
    }
    findRide() {
        this.isLoading = true;
        this.findRideButtonText = 'Finding Ride';
        const searchParams = {
            from: this.findRideForm.get('findFrom').value,
            to: this.findRideForm.get('findTo').value,
            seats: this.findRideForm.get('findSeats').value
        };
        // GET RIDES FROM RESIDENT'S ESTATE'S /carpooling/rides ROUTE
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Estates/${this.estateUID}`).child('carpooling/rides').once('value', (estateRides) => {
            const estateRidesVals = estateRides.val();
            console.log(estateRidesVals);
            this.findRideSearchResults = [];
            for (const key in estateRides.val()) {
                if (estateRides.val().hasOwnProperty(key)) {
                    const estateRideKey = estateRides.val()[key];
                    console.log(estateRideKey);
                    // GET RIDE DETAILS FROM GENERAL /Carpooling/rides ROUTE
                    firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref('Carpooling/rides').child(estateRideKey).once('value', (rideDetails) => {
                        const ride = rideDetails.val();
                        console.log(ride);
                        // CHECK IF searchParams === ride.from && ride.to && ride.seats
                        if (ride.from === searchParams.from &&
                            ride.to === searchParams.to &&
                            ride.seats === searchParams.seats) {
                            this.findRideSearchResults.push(ride);
                        }
                    }, (err) => {
                        console.error(err);
                    }).catch((err) => {
                        console.error(err.message);
                    });
                }
            }
            this.isLoading = false;
            this.content.scrollByPoint(0, 150, 1500);
            this.findRideButtonText = 'Find Ride';
            this.toast.showToast('Found Some Rides', '2000', 'bottom');
        }, (err) => {
            console.log(err);
            this.isLoading = false;
            this.findRideButtonText = 'Find Ride';
            this.toast.showToast(err.message, '4000', 'bottom');
        }).catch((err) => {
            console.error(err.message);
            this.isLoading = false;
            this.findRideButtonText = 'Find Ride';
            this.toast.showToast(err.message, '4000', 'bottom');
        });
    }
    offerRide() {
        this.isLoading = true;
        this.offerRideButtonText = 'Offering Ride';
        const formData = {
            from: this.offerRideForm.get('offerFrom').value,
            to: this.offerRideForm.get('offerTo').value,
            date: this.offerRideForm.get('offerDate').value,
            time: this.offerRideForm.get('offerTime').value,
            seats: this.offerRideForm.get('offerSeats').value,
            offeredBy: this.profile
        };
        // SAVE TO GENERAL /carpooling/rides ROUTE
        // FOR ADMIN ANALYTICS
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Carpooling`).child('rides').push(formData).then((genRes) => {
            console.log('Ride saved to general node', genRes.key);
            // SAVE INTO RESIDENT'S ESTATE'S /carpooling/rides ROUTE
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Estates/${this.estateUID}`).child('carpooling/rides').push(genRes.key).then(() => {
                // SAVE TO RESIDENT'S /rides/history ROUTE
                firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`${this.role}/${this.uid}`).child('rides/history').push(genRes.key).then(() => {
                    this.toast.showToast('Ride Offered', '2000', 'bottom');
                    console.log('Ride offered');
                    this.clearOfferRideForm();
                    this.isLoading = false;
                    this.offerRideButtonText = 'Offer Ride';
                }, (err) => {
                    this.toast.showToast(err, '4000', 'bottom');
                    console.error(err);
                    this.isLoading = false;
                    this.offerRideButtonText = 'Offer Ride';
                }).catch((err) => {
                    this.toast.showToast(err.message, '4000', 'bottom');
                    console.error(err.message);
                    this.isLoading = false;
                    this.offerRideButtonText = 'Offer Ride';
                });
            }, (err) => {
                console.error(err);
            }).catch((err) => {
                console.error(err.message);
            });
        }, (err) => {
            this.toast.showToast(err, '4000', 'bottom');
            console.error(err);
            this.isLoading = false;
            this.offerRideButtonText = 'Offer Ride';
        }).catch((err) => {
            this.toast.showToast(err.message, '4000', 'bottom');
            console.error(err.message);
            this.isLoading = false;
            this.offerRideButtonText = 'Offer Ride';
        });
    }
    getProfile() {
        const role = this.store.getItem('hoa-role');
        const uid = this.store.getItem('hoa-uid');
        return new Promise((resolve, reject) => {
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`${role}/${uid}`).once('value', (profile) => {
                this.estateUID = profile.val().estateUID;
                this.profile = profile.val();
                resolve(true);
            }, (err) => {
                // this.toast.showToast(err.message, '4000', 'bottom');
                console.error(err.message);
                reject(false);
            }).catch((err) => {
                //    this.toast.showToast(err.message, '4000', 'bottom');
                console.error(err.message);
                reject(false);
            });
        }).then((res) => {
            if (res) {
                this.getRideHistory();
            }
        }).catch((err) => {
            console.error(err);
        });
    }
    initFindRideForm() {
        //   INIT offerRideForm
        return new Promise((resolve, reject) => {
            //   INIT findRideForm
            this.findRideForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'findFrom': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])),
                'findTo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])),
                'findSeats': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]))
            });
            resolve(true);
        });
    }
    initOfferRideForm() {
        return new Promise((resolve, reject) => {
            this.offerRideForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                'offerFrom': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])),
                'offerTo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])),
                'offerDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])),
                'offerTime': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ])),
                'offerSeats': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]))
            });
            resolve(true);
        });
    }
    clearOfferRideForm() {
        this.offerRideForm.get('offerFrom').reset();
        this.offerRideForm.get('offerTo').reset();
        this.offerRideForm.get('offerDate').reset();
        this.offerRideForm.get('offerTime').reset();
        this.offerRideForm.get('offerSeats').reset();
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // GOOGLE PLACES AUTOCOMPLETE FORM INPUTS
        const findTo = new google.maps.places.Autocomplete(this.findTo.nativeElement);
        findTo.addListener('place_changed', () => {
            const addr = findTo.getPlace().name;
            console.log(findTo.getPlace());
            // FORCE VALUE SET
            this.findRideForm.get('findTo').setValue(addr);
        });
        const findFrom = new google.maps.places.Autocomplete(this.findFrom.nativeElement);
        findFrom.addListener('place_changed', () => {
            const addr = findFrom.getPlace().name;
            console.log(findFrom.getPlace());
            // FORCE VALUE SET
            this.findRideForm.get('findFrom').setValue(addr);
        });
    }
    ionViewWillEnter() {
        // this.initForms();
    }
};
HomePage.ctorParameters = () => [
    { type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_6__["HoaStoreService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placesRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceDirective"])
], HomePage.prototype, "placesRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"])
], HomePage.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('findTo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "findTo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('findFrom', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "findFrom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('offerTo', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "offerTo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('offerFrom', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "offerFrom", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ionSegment', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"])
], HomePage.prototype, "ionSegment", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/carpooling/home/home.page.html")).default,
        providers: [
            _hoa_store_service__WEBPACK_IMPORTED_MODULE_6__["HoaStoreService"],
            _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/carpooling/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hoa_store_service__WEBPACK_IMPORTED_MODULE_6__["HoaStoreService"],
        _toast_service__WEBPACK_IMPORTED_MODULE_7__["ToastService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=carpooling-home-home-module-es2015.js.map