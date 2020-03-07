(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <!-- <ion-menu-button></ion-menu-button> -->\n            <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Visit Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"visit-details-content ion-padding\" *ngIf='!checkIsArray(visitor.guest)'>\n    <div id=\"skeleton\" *ngIf='!visitor'>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n    </div>\n    <ion-list lines='none' *ngIf='visitor'>\n        <!-- <p> -->\n        <!-- <ion-item> -->\n        <ion-text *ngIf='role === \"security\"'>\n            Guest Code: {{visitor.guestCode}}\n        </ion-text>\n        <!-- <ion-text *ngIf='role === \"security\"'>\n            Visitor: {{visitor.guest.fullname}}\n        </ion-text> -->\n        <ion-text>\n            Guest: {{visitor.guest.fullname}}\n        </ion-text>\n        <!-- </ion-item> -->\n        <br>\n        <ion-text *ngIf='role === \"security\"'>\n            Host: {{this.host.fullname}}\n        </ion-text>\n        <br *ngIf='role == \"security\"'>\n        <ion-text *ngIf='role === \"security\"'>\n            Host Apt: {{this.host.estateAptNum}}\n        </ion-text>\n        <br *ngIf='role == \"security\"'>\n        <!-- <ion-item> -->\n        <ion-text>\n            {{visitor.bookedAt | date:'medium'}}\n        </ion-text>\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='secondary'>\n            Status: {{visitor.status}}\n        </ion-text>\n        <!-- </ion-item> -->\n        <br>\n        <!-- </p> -->\n        <hr>\n        <ion-item *ngIf='role === \"resident\" || role === \"dependent\"'>\n            <!-- SHARE -->\n            <ion-grid>\n                <ion-row>\n                    <!-- <ion-col size='6'> -->\n                    <ion-button class='ion-activatable' expand='block' fill='solid' color='primary' (click)='shareBooking()'>\n                        <ion-icon name=\"share\" slot='start'></ion-icon>\n                        share\n                        <ion-ripple-effect></ion-ripple-effect>\n                    </ion-button>\n                    <!-- </ion-col> -->\n                </ion-row>\n            </ion-grid>\n            <!-- RETURN/DETAIN -->\n            <ion-grid>\n                <ion-row>\n                    <ion-col size='6'>\n                        <ion-button class='ion-activatable' expand='block' fill='solid' color='primary' (click)='return()'>\n                            <ion-icon name=\"arrow-round-back\" slot='start'></ion-icon>\n                            Return\n                            <ion-ripple-effect></ion-ripple-effect>\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size='6'>\n                        <ion-button class='ion-activatable' expand='block' fill='solid' color='secondary' (click)='detain()'>\n                            <ion-icon name=\"information-circle-outline\" slot='start'></ion-icon>\n                            Detain\n                            <ion-ripple-effect></ion-ripple-effect>\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <!-- <hr> -->\n        </ion-item>\n        <!-- <p> -->\n        <!-- <ion-item> -->\n        <ion-text color='app-background-shade' *ngIf='visitor.confirmed !== \"N/A\"'>\n            Confirmed @ <span>{{visitor.confirmed | date:'medium'}}</span>\n        </ion-text>\n        <!-- <ion-text color='app-background-shade' *ngIf='visitor.confirmed === \"N/A\"'>\n            Confirmed @ <span>{{visitor.confirmed}}</span>\n        </ion-text> -->\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='app-background-shade' *ngIf='visitor.inAt !== \"N/A\"'>\n            In @ <span>{{visitor.inAt | date:'medium'}}</span>\n        </ion-text>\n        <!-- <ion-text color='app-background-shade' *ngIf='visitor.inAt === \"N/A\"'>\n            In @ <span>{{visitor.inAt}}</span>\n        </ion-text> -->\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='app-background-shade' *ngIf='visitor.leavingAt !== \"N/A\"'>\n            Leaving @ <span>{{visitor.leavingAt | date:'medium'}}</span>\n        </ion-text>\n        <!-- <ion-text color='app-background-shade' *ngIf='visitor.inAt === \"N/A\"'>\n            Leaving @ <span>{{visitor.leavingAt}}</span>\n        </ion-text> -->\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='app-background-shade' *ngIf='visitor.outAt !== \"N/A\"'>\n            Out @ <span>{{visitor.outAt | date:'medium'}}</span>\n        </ion-text>\n        <!-- <ion-text color='app-background-shade' *ngIf='visitor.inAt === \"N/A\"'>\n            Out @ <span>{{visitor.outAt}}</span>\n        </ion-text> -->\n        <!-- <hr> -->\n        <!-- </ion-item> -->\n        <!-- </p> -->\n        <ion-item *ngIf='role !== \"security\"'>\n            <ion-label>Phone</ion-label>\n            <ion-input type=\"text\" readonly [value]='visitor.guest.phone | titlecase' *ngIf='visitor.guest.phone !== \"\" && visitor.guest.phone !== \"N/A\"'></ion-input>\n            <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.phone === \"N/A\" || visitor.guest.phone === undefined'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Gender</ion-label>\n            <ion-input type=\"text\" readonly [value]='visitor.guest.gender | titlecase' *ngIf='visitor.guest.gender !== \"\" && visitor.guest.gender !== \"N/A\"'></ion-input>\n            <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.gender === \"N/A\" || visitor.guest.gender === undefined'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Vehicle Make</ion-label>\n            <ion-input type=\"text\" readonly [value]='visitor.guest.vehicleMake | titlecase' *ngIf='visitor.guest.vehicleMake !== \"\" && visitor.guest.vehicleMake !== \"N/A\"'></ion-input>\n            <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.vehicleMake === \"N/A\" || visitor.guest.vehicleMake === undefined'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Vehicle Color</ion-label>\n            <ion-input type=\"text\" readonly [value]='visitor.guest.vehicleColor | titlecase' *ngIf='visitor.guest.vehicleColor !== \"\" && visitor.guest.vehicleColor !== \"N/A\"'></ion-input>\n            <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.vehicleColor === \"N/A\" || visitor.guest.vehicleColor === undefined'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Vehicle Reg Num</ion-label>\n            <ion-input type=\"text\" readonly [value]='visitor.guest.vehicleRegNum | uppercase' *ngIf='visitor.guest.vehicleRegNum !== \"\" && visitor.guest.vehicleRegNum !== \"N/A\"'></ion-input>\n            <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.vehicleRegNum === \"N/A\" || visitor.guest.vehicleRegNum === undefined'></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Comments</ion-label>\n            <ion-input type=\"text\" readonly [value]='visitor.guest.comments | titlecase' *ngIf='visitor.guest.comments !== \"\" && visitor.guest.comments !== \"N/A\"'></ion-input>\n            <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.comments === \"N/A\" || visitor.guest.comments === undefined'></ion-input>\n        </ion-item>\n        <ion-button expland='block' fill='solid' *ngIf='role !== \"security\"' (click)='setLeaving()'>Visitor is Leaving</ion-button>\n        <ion-button expland='block' fill='solid' *ngIf='role !== \"security\"' (click)='bookOut()'>Cancel Visit</ion-button>\n        <ion-button expland='block' fill='solid' *ngIf='role === \"security\"' (click)='checkIn()'>Check In</ion-button>\n        <ion-button expland='block' fill='solid' *ngIf='role === \"security\"' (click)='checkOut()'>Check Out</ion-button>\n    </ion-list>\n</ion-content>\n\n<!-- GROUP GUEST CONTENT -->\n<ion-content class=\"group-visit-details-content ion-padding\" *ngIf='checkIsArray(visitor.guest)'>\n    <div id=\"skeleton\" *ngIf='!visitor'>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n        <ion-skeleton-text animated style='width: 100%; height: 20px'></ion-skeleton-text>\n    </div>\n    <ion-list lines='none' *ngIf='visitor'>\n        <!-- <p> -->\n        <ion-text *ngIf='role === \"security\"'>\n            Guest Code: {{visitor.guestCode}}\n        </ion-text>\n        <br *ngIf='role === \"security\"'>\n        <ion-text *ngIf='role === \"security\"'>\n            Number of Guests: {{visitor.guest.length}}\n        </ion-text>\n        <ion-card *ngIf='role == \"resident\" || role === \"dependent\"'>\n            <ion-text *ngFor='let guest of visitor.guest'>\n                Guest: {{guest.fullname}}\n            </ion-text>\n        </ion-card>\n        <br>\n        <!-- <ion-text *ngIf='role === \"security\"'>\n            Host: {{hostName}}\n        </ion-text> -->\n        <br *ngIf='role === \"security\"'>\n        <!-- <ion-item> -->\n        <ion-text>\n            {{visitor.bookedAt | date:'medium'}}\n        </ion-text>\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='secondary'>\n            Status: {{visitor.status}}\n        </ion-text>\n        <!-- </ion-item> -->\n        <br>\n        <!-- </p> -->\n        <hr>\n        <ion-item *ngIf='role === \"resident\" || role === \"dependent\"'>\n            <!-- SHARE -->\n            <ion-grid>\n                <ion-row>\n                    <!-- <ion-col size='6'> -->\n                    <ion-button class='ion-activatable' expand='block' fill='solid' color='primary' (click)='shareBooking()'>\n                        <ion-icon name=\"share\" slot='start'></ion-icon>\n                        share\n                        <ion-ripple-effect></ion-ripple-effect>\n                    </ion-button>\n                    <!-- </ion-col> -->\n                </ion-row>\n            </ion-grid>\n            <ion-grid>\n                <ion-row>\n                    <ion-col size='6'>\n                        <ion-button expand='block' fill='solid' color='primary' (click)='return()'>\n                            <ion-icon name=\"arrow-round-back\" slot='start'></ion-icon>\n                            Return\n                        </ion-button>\n                    </ion-col>\n                    <ion-col size='6'>\n                        <ion-button expand='block' fill='solid' color='secondary' (click)='detain()'>\n                            <ion-icon name=\"information-circle-outline\" slot='start'></ion-icon>\n                            Detain\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n            <hr>\n        </ion-item>\n        <!-- <p> -->\n        <!-- <ion-item> -->\n        <ion-text>\n            Confirmed @ <span>{{visitor.confirmed | date:'medium'}}</span>\n        </ion-text>\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='app-background-shade' *ngIf='visitor.inAt !== \"N/A\"'>\n            In @ <span>{{visitor.inAt | date:'medium'}}</span>\n        </ion-text>\n        <!-- <ion-text color='app-background-shade' *ngIf='visitor.inAt === \"N/A\"'>\n            In @ <span>{{visitor.inAt}}</span>\n        </ion-text> -->\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='app-background-shade' *ngIf='visitor.leavingAt !== \"N/A\"'>\n            Leaving @ <span>{{visitor.leavingAt | date:'medium'}}</span>\n        </ion-text>\n        <!-- <ion-text color='app-background-shade' *ngIf='visitor.inAt === \"N/A\"'>\n            Leaving @ <span>{{visitor.leavingAt}}</span>\n        </ion-text> -->\n        <!-- </ion-item> -->\n        <br>\n        <!-- <ion-item> -->\n        <ion-text color='app-background-shade' *ngIf='visitor.outAt !== \"N/A\"'>\n            Out @ <span>{{visitor.outAt | date:'medium'}}</span>\n        </ion-text>\n        <!-- <ion-text color='app-background-shade' *ngIf='visitor.inAt === \"N/A\"'>\n            Out @ <span>{{visitor.outAt}}</span>\n        </ion-text> -->\n        <hr>\n        <!-- </ion-item> -->\n        <!-- </p> -->\n        <!-- <ion-item>\n              <ion-label>Phone</ion-label>\n              <ion-input type=\"text\" readonly [value]='visitor.guest.phone | titlecase' *ngIf='visitor.guest.phone !== \"\"'></ion-input>\n              <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.phone === \"\"'></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Gender</ion-label>\n              <ion-input type=\"text\" readonly [value]='visitor.guest.gender | titlecase' *ngIf='visitor.guest.gender !== \"\"'></ion-input>\n              <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.gender === \"\"'></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Vehicle Make</ion-label>\n              <ion-input type=\"text\" readonly [value]='visitor.guest.vehicleMake | titlecase' *ngIf='visitor.guest.vehicleMake !== \"\"'></ion-input>\n              <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.vehicleMake === \"\"'></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Vehicle Color</ion-label>\n              <ion-input type=\"text\" readonly [value]='visitor.guest.vehicleColor | titlecase' *ngIf='visitor.guest.vehicleColor !== \"\"'></ion-input>\n              <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.vehicleColor === \"\"'></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Vehicle Reg Num</ion-label>\n              <ion-input type=\"text\" readonly [value]='visitor.guest.vehicleRegNum | uppercase' *ngIf='visitor.guest.vehicleRegNum !== \"\"'></ion-input>\n              <ion-input type=\"text\" readonly value='/A' *ngIf='visitor.guest.vehicleRegNum === \"\"'></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Comments</ion-label>\n              <ion-input type=\"text\" readonly [value]='visitor.guest.comments | titlecase' *ngIf='visitor.guest.comments !== \"\"'></ion-input>\n              <ion-input type=\"text\" readonly value='N/A' *ngIf='visitor.guest.comments === \"\"'></ion-input>\n          </ion-item> -->\n        <ion-button expland='block' fill='solid' *ngIf='role !== \"security\"' (click)='setLeaving()'>Visitor is Leaving</ion-button>\n        <ion-button expland='block' fill='solid' *ngIf='role !== \"security\"' (click)='bookOut()'>Cancel Visit</ion-button>\n        <ion-button expland='block' fill='solid' *ngIf='role === \"security\"' (click)='checkIn()'>Check In</ion-button>\n        <ion-button expland='block' fill='solid' *ngIf='role === \"security\"' (click)='checkOut()'>Check Out</ion-button>\n    </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/details/details.module.ts":
/*!*******************************************!*\
  !*** ./src/app/details/details.module.ts ***!
  \*******************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/details/details.page.ts");







const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]
    }
];
let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/details/details.page.scss":
/*!*******************************************!*\
  !*** ./src/app/details/details.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".visit-details-content ion-list ion-item ion-label,\n.group-visit-details-content ion-list ion-item ion-label {\n  color: var(--ion-color-secondary) !important;\n}\n.visit-details-content ion-list ion-item ion-input,\n.group-visit-details-content ion-list ion-item ion-input {\n  text-align: end;\n}\n.visit-details-content ion-list ion-button,\n.group-visit-details-content ion-list ion-button {\n  width: 100% !important;\n  height: 50px !important;\n}\n.visit-details-content ion-list ion-text,\n.group-visit-details-content ion-list ion-text {\n  padding: 10px 10px 5px 20px;\n}\n.visit-details-content ion-list ion-text span,\n.group-visit-details-content ion-list ion-text span {\n  float: right;\n  color: var(--ion-color-medium) !important;\n}\n.visit-details-content ion-list hr,\n.group-visit-details-content ion-list hr {\n  border-bottom: 2px solid var(--ion-color-primary-tint) !important;\n}\n.visit-details-content ion-card,\n.group-visit-details-content ion-card {\n  --background: var(--app-background-shade);\n  --color: #000;\n  height: 30px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: start;\n  -webkit-box-align: center;\n          align-items: center;\n  box-shadow: none;\n  border-radius: 10px;\n  margin: 10px 0px 0px 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlZOztFQUNJLDRDQUFBO0FDRmhCO0FESVk7O0VBQ0ksZUFBQTtBQ0RoQjtBRElROztFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNEWjtBREdROztFQUNJLDJCQUFBO0FDQVo7QURDWTs7RUFFSSxZQUFBO0VBQ0EseUNBQUE7QUNDaEI7QURFUTs7RUFDSSxpRUFBQTtBQ0NaO0FERUk7O0VBQ0kseUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHVCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWxzL2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpc2l0LWRldGFpbHMtY29udGVudCxcbi5ncm91cC12aXNpdC1kZXRhaWxzLWNvbnRlbnQge1xuICAgIGlvbi1saXN0IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXRleHQge1xuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDVweCAyMHB4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHBhZGRpbmctbGVmdDogMzBweCAhaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGhyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KSAhaW1wb3J0YW50XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWNhcmQge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgICAgICAgLS1jb2xvcjogIzAwMDtcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHggIWltcG9ydGFudFxuICAgIH1cbn0iLCIudmlzaXQtZGV0YWlscy1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1sYWJlbCxcbi5ncm91cC12aXNpdC1kZXRhaWxzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG4udmlzaXQtZGV0YWlscy1jb250ZW50IGlvbi1saXN0IGlvbi1pdGVtIGlvbi1pbnB1dCxcbi5ncm91cC12aXNpdC1kZXRhaWxzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWl0ZW0gaW9uLWlucHV0IHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuLnZpc2l0LWRldGFpbHMtY29udGVudCBpb24tbGlzdCBpb24tYnV0dG9uLFxuLmdyb3VwLXZpc2l0LWRldGFpbHMtY29udGVudCBpb24tbGlzdCBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG59XG4udmlzaXQtZGV0YWlscy1jb250ZW50IGlvbi1saXN0IGlvbi10ZXh0LFxuLmdyb3VwLXZpc2l0LWRldGFpbHMtY29udGVudCBpb24tbGlzdCBpb24tdGV4dCB7XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHggMjBweDtcbn1cbi52aXNpdC1kZXRhaWxzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLXRleHQgc3Bhbixcbi5ncm91cC12aXNpdC1kZXRhaWxzLWNvbnRlbnQgaW9uLWxpc3QgaW9uLXRleHQgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICFpbXBvcnRhbnQ7XG59XG4udmlzaXQtZGV0YWlscy1jb250ZW50IGlvbi1saXN0IGhyLFxuLmdyb3VwLXZpc2l0LWRldGFpbHMtY29udGVudCBpb24tbGlzdCBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KSAhaW1wb3J0YW50O1xufVxuLnZpc2l0LWRldGFpbHMtY29udGVudCBpb24tY2FyZCxcbi5ncm91cC12aXNpdC1kZXRhaWxzLWNvbnRlbnQgaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1jb2xvcjogIzAwMDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDEwcHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/details/details.page.ts":
/*!*****************************************!*\
  !*** ./src/app/details/details.page.ts ***!
  \*****************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _hoa_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hoa-store.service */ "./src/app/hoa-store.service.ts");
/* harmony import */ var _toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../toast.service */ "./src/app/toast.service.ts");
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../alert.service */ "./src/app/alert.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/database */ "./node_modules/firebase/database/dist/index.esm.js");










let DetailsPage = class DetailsPage {
    constructor(route, router, store, toast, alertService, geoLocation, socialSharing) {
        this.route = route;
        this.router = router;
        this.store = store;
        this.toast = toast;
        this.alertService = alertService;
        this.geoLocation = geoLocation;
        this.socialSharing = socialSharing;
        this.visitor = { guest: {} };
        this.host = { fullname: 'Host Name', estateAptNum: '001' };
        this.uid = this.store.getItem('hoa-uid');
        this.role = this.store.getItem('hoa-role');
        this.getVisitor();
        this.getLocation();
    }
    //    ionViewWillEnter() {
    //          console.log('VIEW WILL ENTER');
    //          this.getVisitor();
    //    }
    setLeaving() {
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('leavingAt').set(Date())
            .then(() => {
            //    SET LEAVINGAT AT GENERAL NODE
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('leavingAt').set(Date()).then(() => {
                console.log('General Leaving set');
            }).catch((err) => {
                console.error(err.message);
            });
            //    SET STATUS TO 'Leaving'
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Leaving').then(() => {
                console.log('Leaving set');
            }).catch((err) => {
                console.error(err.message);
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('status').set('Leaving').then(() => {
                console.log('Leaving set');
            }).catch((err) => {
                console.error(err.message);
            });
        }).catch((err) => {
            console.error(err.message);
        });
    }
    shareBooking() {
        // SHARE BOOKING TO VISITOR
        // USING IONIC-NATIVE
        // check if guests is an array
        if (this.checkIsArray(this.visitor.guest)) {
            // GROUP SHARE
            // const message = `Dear guest, your access code into ${this.profile.estateName} Estate is ${this.visitor.guestCode}.
            // Kindly present access code on arrival.
            // Host: ${this.profile.fullname}
            // Direction: https://google.com/maps/dir/''/${this.location.lat},${this.location.lng}`;
            this.alertService.presentGroupShareAlert('Share Booking With Guests?', this.visitor.guest, this.visitor.guestCode, this.profile, this.location);
        }
        else {
            // NORMAL SHARE
            // const message = `Dear ${this.visitor.fullname}, your access code into ${this.profile.estateName} Estate is ${this.visitor.guestCode}.
            // Kindly present access code on arrival.
            // Host: ${this.profile.fullname}
            // Direction: https://google.com/maps/place/${this.location.lat},${this.location.lng}`;
            this.alertService.presentShareAlert(`Share Booking With ${this.visitor.guest.fullname}?`, this.visitor.guest, this.visitor.guestCode, this.profile, this.location);
        }
        // this.socialSharing.share(message).then(() => {
        //       this.toast.showToast('Booking Shared', '2000', 'bottom');
        // }, (err) => {
        //       this.toast.showToast('Operation Cancelled', '2000', 'bottom');
        // }).catch((err: Error) => {
        //       this.toast.showToast(err.message, '4000', 'bottom');
        // });
    }
    shareGroupBooking() {
        this.visitor.guest.forEach(guest => {
            const message = `Dear ${guest.fullname}, your access code into ${this.profile.estateName} Estate is ${this.visitor.guestCode}.
            Kindly present access code on arrival.
            Host: ${this.profile.fullname}
            Direction: ${this.location.lng},${this.location.lat}`;
            this.socialSharing.shareViaSMS(message, guest.phone).then(() => {
                this.toast.showToast('Booking Shared', '2000', 'bottom');
            }, (err) => {
                this.toast.showToast('Operation Cancelled', '2000', 'bottom');
            }).catch((err) => {
                this.toast.showToast(err.message, '4000', 'bottom');
            });
        });
    }
    getLocation() {
        const options = {
            enableHighAccuracy: true
        };
        this.geoLocation.getCurrentPosition(options).then((res) => {
            this.location = {
                lat: res.coords.latitude,
                lng: res.coords.longitude
            };
        }).catch((err) => {
            console.log(err.message);
        });
    }
    getProfile() {
        let role, uid;
        uid = this.store.getItem('hoa-uid');
        role = this.store.getItem('hoa-role');
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(role).child(uid).once('value', (snapshot) => {
            this.profile = snapshot.val();
            // GET DEPENDENT ON IF ROLE === DEPENDENT
            if (role === 'dependent') {
                this.getDependentOn();
            }
        }).then(() => {
            console.log('Profile retrieved successfully');
            // this.toast.showToast('Profile retrieved', '2000', 'bottom');
        }).catch((err) => {
            console.error(err.message);
            this.toast.showToast(err.message, '4000', 'bottom');
        });
    }
    getDependentOn() {
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.profile.dependentOn}`).once('value', (snapshot) => {
            console.log('Retrieved dependentOn');
            this.dependentOn = snapshot.val();
        }).catch((err) => {
            console.error(err.message);
        });
    }
    return() {
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('return').set(true)
            .then(() => {
            //    SET RETURN AT GENERAL NODE
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('return').set(true).then(() => {
                console.log('General return set');
            }).catch((err) => {
                console.error(err.message);
            });
            //    SET STATUS TO 'Return'
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Return').then(() => {
                console.log('Return set');
            }).catch((err) => {
                console.error(err.message);
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('status').set('Return').then(() => {
                console.log('Return set');
            }).catch((err) => {
                console.error(err.message);
            });
        }).catch((err) => {
            console.error(err.message);
        });
    }
    detain() {
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('detain').set(true)
            .then(() => {
            //    SET DETAIN AT GENERAL NODE
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('detain').set(true).then(() => {
                console.log('General detain set');
            }).catch((err) => {
                console.error(err.message);
            });
            //    SET STATUS TO 'Hold/Detain'
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Hold/Detain').then(() => {
                console.log('Hold/Detain set');
            }).catch((err) => {
                console.error(err.message);
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('status').set('Hold/Detain').then(() => {
                console.log('Hold/Detain set');
            }).catch((err) => {
                console.error(err.message);
            });
        }).catch((err) => {
            console.error(err.message);
        });
    }
    checkIn() {
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('inAt').set(Date())
            .then(() => {
            //    SET INAT AT GENERAL NODE
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('inAt').set(Date()).then(() => {
                console.log('General inAt set');
            }).catch((err) => {
                console.error(err.message);
            });
            //    SET STATUS TO 'Leaving'
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('In').then(() => {
                console.log('In set');
            }).catch((err) => {
                console.error(err.message);
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('status').set('In').then(() => {
                console.log('In set');
            }).catch((err) => {
                console.error(err.message);
            });
            //    RESET DETAIN
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('detain').set(false)
                .then(() => {
                //    SET DETAIN AT GENERAL NODE
                firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('detain').set(false).then(() => {
                    console.log('General detain set');
                }).catch((err) => {
                    console.error(err.message);
                });
            });
            //    RESET RETURN
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('return').set(false)
                .then(() => {
                //    SET return AT GENERAL NODE
                firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('return').set(false).then(() => {
                    console.log('General return set');
                }).catch((err) => {
                    console.error(err.message);
                });
            });
        }).catch((err) => {
            console.error(err.message);
        });
    }
    checkOut() {
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('outAt').set(Date())
            .then(() => {
            //    SET outAt AT GENERAL NODE
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('outAt').set(Date()).then(() => {
                console.log('General outAt set');
            }).catch((err) => {
                console.error(err.message);
            });
            //    SET STATUS TO 'Leaving'
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('status').set('Out').then(() => {
                console.log('Out set');
            }).catch((err) => {
                console.error(err.message);
            });
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('status').set('Out').then(() => {
                console.log('Out set');
            }).catch((err) => {
                console.error(err.message);
            });
            //    RESET DETAIN
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('detain').set(false)
                .then(() => {
                //    SET DETAIN AT GENERAL NODE
                firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('detain').set(false).then(() => {
                    console.log('General detain set');
                }).catch((err) => {
                    console.error(err.message);
                });
            });
            //    RESET RETURN
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident/${this.visitor.bookedBy}/visitors/${this.key}`).child('return').set(false)
                .then(() => {
                //    SET return AT GENERAL NODE
                firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors/${this.key}`).child('return').set(false).then(() => {
                    console.log('General return set');
                }).catch((err) => {
                    console.error(err.message);
                });
            });
        }).catch((err) => {
            console.error(err.message);
        });
    }
    bookOut() {
        // BOOK OUT GUEST AND DELETE FROM GENERAL NODE AND
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors`).child(this.key).remove()
            .then(() => {
            console.log('Removed from general node');
            // RESIDENT NODE
            firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`${this.role}/${this.uid}/visitors`).child(this.key).remove()
                .then(() => {
                this.toast.showToast('Guest Booked Out', '2000', 'bottom');
                this.router.navigate(['app/activity']);
            }).catch((err) => {
                this.toast.showToast(err.message, '4000', 'bottom');
            });
            // this.toast.showToast('Guest Booked Out', '2000', 'bottom');
            // this.router.navigate(['app/activity']);
        }).catch((err) => {
            this.toast.showToast(err.message, '4000', 'bottom');
            console.error(err.message);
        });
    }
    checkIsArray(obj) {
        return Array.isArray(obj);
    }
    getVisitor() {
        const uid = this.store.getItem('hoa-uid');
        const role = this.store.getItem('hoa-role');
        this.uid = uid;
        this.role = role;
        this.route.paramMap.subscribe((param) => {
            console.log('Param', param);
            const key = param.get('visitor');
            console.log('Key', key);
            this.key = key;
            // this.visitor = param.get('visitor');
            if (role === 'resident' || role === 'dependent') {
                firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`${role}/${uid}/visitors`).child(key).on('value', (snapshot) => {
                    this.visitor = snapshot.val();
                    console.log('Snap', snapshot.val());
                });
                // console.log('Visitor', this.visitor);
            }
            if (role === 'security') {
                firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`Visitors`).child(key).on('value', (snapshot) => {
                    this.visitor = snapshot.val();
                    console.log('Snap', snapshot.val());
                    // GET HOST NAME
                    // if (this.getResidentHost(snapshot.val().bookedby)) {
                    //       this.host = this.getResidentHost(snapshot.val().bookedby);
                    // } else {
                    //       this.host = this.getDependentHost(snapshot.val().bookedby);
                    // }
                    (this.getResidentHost(snapshot.val().bookedBy) || this.getDependentHost(snapshot.val().bookedBy));
                    console.log('HOST', this.host);
                });
                // console.log('Visitor', this.visitor);
            }
        });
    }
    getDependentHost(bookedBy) {
        console.log('By', bookedBy);
        let val;
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`dependent`).child(bookedBy).once('value', (snap) => {
            // this.host =  snap.val();
            console.log('Host', snap.val());
            this.host = snap.val();
        });
        return val;
    }
    getResidentHost(bookedBy) {
        console.log('By', bookedBy);
        let val;
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["database"]().ref(`resident`).child(bookedBy).once('value', (snap) => {
            // this.host = snap.val();
            console.log('Host', snap.val());
            this.host = snap.val();
        });
        return val;
    }
    ngOnInit() {
        this.getProfile();
        // this.getLocation();
    }
    ionViewWillEnter() {
        this.getProfile();
        // this.getLocation();
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_5__["HoaStoreService"] },
    { type: _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] },
    { type: _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"] }
];
DetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/details/details.page.html")).default,
        providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_5__["HoaStoreService"], _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"], _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.page.scss */ "./src/app/details/details.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _hoa_store_service__WEBPACK_IMPORTED_MODULE_5__["HoaStoreService"],
        _toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"],
        _alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
        _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])
], DetailsPage);



/***/ })

}]);
//# sourceMappingURL=details-details-module-es2015.js.map