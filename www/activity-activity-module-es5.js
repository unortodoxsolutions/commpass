function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["activity-activity-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/activity/activity.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/activity/activity.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActivityActivityPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot='start'>\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button></ion-button>\n        </ion-buttons>\n        <ion-title> {{this.role | titlecase}} Activity</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf='role === \"resident\" || role === \"dependent\"'>\n    <ion-fab vertical=\"top\" horizontal=\"end\" slot=\"fixed\" edge='true'>\n        <ion-fab-button color='secondary' (click)='this.router.navigate([\"notifications\"])'>\n            <ion-icon src=\"./assets/sample-icons/tabs/notifications.svg\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf='role === \"resident\" || role === \"dependent\"'>\n        <ion-fab-button>\n            <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"top\">\n            <ion-fab-button (click)='bookGuest()'>\n                <ion-icon name='person'></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button (click)='bookGroupGuest()'>\n                <ion-icon name='people'></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n    <div id=\"welcome__message\" *ngIf='!profile'>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; margin-bottom: 30px !important;\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n    </div>\n    <div id=\"welcome__message\" *ngIf='profile'>\n        <p id=\"welcome__message--profile-name\">Welcome, {{profile.fullname}}</p>\n        <p id=\"welcome__message--estate-name\">Estate: {{profile.estateName}} Estate</p>\n        <p id=\"welcome__message--estate-address\">Address: {{profile.estateAptNum}}</p>\n    </div>\n    <p class=\"hint\" *ngIf='!visitors'>Your Visitor Activity Will Show Here</p>\n    <p class=\"hint\" *ngIf='visitors === null'>No Visitor Activity Available</p>\n    <ion-list lines='full'>\n        <!-- <ion-searchbar placeholder=\"Search Visitor\" inputmode='text' mode='ios' animated [(ngModel)]='searchKey' (ionChange)='filter($event)'></ion-searchbar> -->\n        <!-- <ion-button color='medium' fill='outline' expand='block' (click)='search()'>Search</ion-button> -->\n        <!-- <ion-list-header>Visitors</ion-list-header> -->\n        <ion-grid class=\"ion-activatable\" *ngFor=\"let visitor of visitors; let i = index\" (click)=\"viewVisitor(i)\">\n            <div class=\"single__guest\" *ngIf='!checkIsArray(visitor.guest)'>\n                <ion-item-group>\n                    <ion-item>\n                        <!-- <ion-row> -->\n                        <ion-avatar item-left>\n                            <!-- <img src=\"\"> -->\n                            <ion-text>{{visitor.guestCode}}</ion-text>\n                        </ion-avatar>\n                        <ion-col size='8'>\n                            <h6 class=\"name\"> {{ visitor.guest.fullname | titlecase}}</h6>\n                            <p class=\"bookedAt\">{{ visitor.bookedAt | date:'medium' }}</p>\n                        </ion-col>\n                        <ion-col size='2'>\n                            <p class=\"status\">{{visitor.status}}</p>\n                        </ion-col>\n                        <!-- </ion-row> -->\n                    </ion-item>\n                </ion-item-group>\n                <!-- <ion-row>\n                    <ion-label color='danger'>Name</ion-label>\n                    <ion-skeleton-text animated style=\"width: 80%\" *ngIf='!visitor'></ion-skeleton-text>\n                    <ion-input type=\"text\" readonly [value]='visitor.guest.fullname | titlecase' *ngIf='visitor'></ion-input>\n                </ion-row>\n                <ion-row>\n                    <small>{{visitor.bookedAt | date:'medium'}}</small>\n                </ion-row> -->\n            </div>\n            <div class=\"group__guest\" *ngIf='checkIsArray(visitor.guest)'>\n                <ion-item-group>\n                    <ion-item>\n                        <!-- <ion-row> -->\n                        <ion-avatar item-left>\n                            <!-- <img src=\"\"> -->\n                            <ion-text>{{visitor.guestCode}}</ion-text>\n                        </ion-avatar>\n                        <ion-col size='8'>\n                            <h6 class=\"name\"> {{ visitor.guest[0].fullname | titlecase}} & {{visitor.guest.length - 1}} Other(s)</h6>\n                            <p class=\"bookedAt\">{{ visitor.bookedAt | date:'medium' }}</p>\n                        </ion-col>\n                        <ion-col size='2'>\n                            <p class=\"status\">{{visitor.status}}</p>\n                        </ion-col>\n                        <!-- </ion-row> -->\n                    </ion-item>\n                </ion-item-group>\n                <!-- <ion-row>\n                    <ion-label color='danger'>Group</ion-label>\n                    <ion-skeleton-text animated style=\"width: 80%\" *ngIf='!visitor'></ion-skeleton-text> -->\n                <!-- <ion-row> -->\n                <!-- <ion-col size='6' text-wrap *ngFor='let guest of visitor.guest'> -->\n                <!-- <ion-input style='text-align: center' text-wrap type=\"text\" readonly *ngFor='let guest of visitor.guest' [value]='guest.fullname  | titlecase'></ion-input> -->\n                <!-- </ion-col> -->\n                <!-- </ion-row> -->\n                <!-- </ion-row>\n                <ion-row>\n                    <small>{{visitor.bookedAt | date:'medium'}}</small>\n                </ion-row> -->\n            </div>\n            <ion-ripple-effect></ion-ripple-effect>\n        </ion-grid>\n    </ion-list>\n</ion-content>\n\n<!-- SECURITY CONTENT -->\n<ion-content class=\"ion-padding sec-content\" *ngIf='role === \"security\"'>\n    <div id=\"welcome__message\" *ngIf='!profile'>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; margin-bottom: 30px !important;\"></ion-skeleton-text>\n        <ion-row>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%; margin: 10px\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%; margin: 10px\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%; margin: 10px\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%; margin: 10px\"></ion-skeleton-text>\n            <!-- <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text> -->\n        </ion-row>\n    </div>\n    <div id=\"welcome__message\" *ngIf='profile'>\n        <p id=\"welcome__message--profile-name\">Welcome, {{profile.fullname}}</p>\n        <p id=\"welcome__message--estate-name\">Estate: {{profile.estateName}} Estate</p>\n        <p id=\"welcome__message--estate-address\">Address: {{profile.estateAptNum}}</p>\n    </div>\n    <p class=\"hint\" *ngIf='!visitors'>Visitor activity will show here</p>\n    <ion-searchbar placeholder=\"Search Visitor By Guest Code\" inputmode='text' mode='ios' animated [(ngModel)]='searchKey' (ionChange)='search($event)' *ngIf='visitors !== undefined && role === \"security\"'></ion-searchbar>\n    <!-- <ion-button color='primary' fill='outline' expand='block' style='height: 40px; width: 140px; margin: auto' (click)='search()' *ngIf='visitors !== undefined && role === \"security\"'>Search</ion-button> -->\n    <p class=\"search__hint\">{{searchErrorText}}</p>\n    <ion-list lines='full' *ngIf='visitors'>\n        <!-- <ion-searchbar *ngIf='visitors' placeholder=\"Search access code\" inputmode='text' mode='ios' animated [(ngModel)]='searchKey' (ionChange)='filter($event)'></ion-searchbar> -->\n        <ion-row>\n            <div class=\"visitor__code ion-activatable\" *ngFor='let visitor of visitors; let i = index' (click)=\"viewVisitor(i)\">\n                <p id=\"visitor__code--text\">{{visitor.guestCode}}</p>\n                <ion-ripple-effect></ion-ripple-effect>\n            </div>\n        </ion-row>\n        <!-- <ion-button color='medium' fill='outline' expand='block' (click)='search()'>Search</ion-button> -->\n        <!-- <ion-list-header>Visitors</ion-list-header> -->\n        <!-- <ion-grid *ngFor=\"let visitor of visitors; let i = index\" (click)=\"viewVisitor(i)\">\n              <ion-row>\n                  <ion-label color='danger'>Name</ion-label>\n                  <ion-skeleton-text animated style=\"width: 80%\" *ngIf='!visitor'></ion-skeleton-text>\n                  <ion-input type=\"text\" readonly [value]='visitor.fullname | titlecase' *ngIf='visitor'></ion-input>\n              </ion-row>\n              <ion-row>\n                  <small>{{visitor.bookedAt | date:'medium'}}</small>\n              </ion-row>\n          </ion-grid> -->\n    </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/activity/activity.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/activity/activity.module.ts ***!
    \*********************************************/

  /*! exports provided: ActivityPageModule */

  /***/
  function srcAppActivityActivityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityPageModule", function () {
      return ActivityPageModule;
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


    var _activity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./activity.page */
    "./src/app/activity/activity.page.ts");

    var routes = [{
      path: '',
      component: _activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]
    }];

    var ActivityPageModule = function ActivityPageModule() {
      _classCallCheck(this, ActivityPageModule);
    };

    ActivityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_activity_page__WEBPACK_IMPORTED_MODULE_6__["ActivityPage"]]
    })], ActivityPageModule);
    /***/
  },

  /***/
  "./src/app/activity/activity.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/activity/activity.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppActivityActivityPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  text-align: end !important;\n}\n\nion-item,\nion-list-header {\n  --padding-start: 0 !important;\n}\n\nion-list-header {\n  color: var(--ion-color-medium) !important;\n}\n\nion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.search__hint {\n  color: var(--ion-color-danger) !important;\n  padding: 10px !important;\n  text-align: center;\n}\n\n.single__guest ion-item-group ion-item ion-avatar,\n.group__guest ion-item-group ion-item ion-avatar {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  padding: 20px !important;\n  height: 70px !important;\n  width: 70px !important;\n  background: var(--app-background-shade);\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"8\"],\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] {\n  height: 70px !important;\n  margin: 0px 0px 0px 20px;\n  padding: 0;\n  /* align-items: center; */\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"8\"] h6,\n.single__guest ion-item-group ion-item ion-col[size=\"8\"] p,\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] h6,\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] p {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"8\"] p,\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] p {\n  color: grey !important;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"2\"],\n.group__guest ion-item-group ion-item ion-col[size=\"2\"] {\n  margin: 0;\n  padding: 0;\n  -webkit-transform: translate(-40px, -20px);\n          transform: translate(-40px, -20px);\n  text-align: right;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"2\"] .status,\n.group__guest ion-item-group ion-item ion-col[size=\"2\"] .status {\n  font-size: 12px;\n  color: var(--ion-color-secondary) !important;\n}\n\nion-grid {\n  padding: 0px 0px 10px 0px;\n  border-radius: 10px;\n}\n\nion-button {\n  width: 30%;\n  margin-left: 35%;\n}\n\np {\n  padding: 0 !important;\n  margin: 0 !important;\n  color: var(--ion-color-dark) !important;\n}\n\n.sec-content ion-row {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.sec-content ion-row .visitor__code {\n  height: 70px !important;\n  width: 70px !important;\n  border-radius: 50%;\n  background: var(--app-background-shade) !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px;\n}\n\n.sec-content ion-row .visitor__code #visitor__code--text {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9hY3Rpdml0eS9hY3Rpdml0eS5wYWdlLnNjc3MiLCJzcmMvYXBwL2FjdGl2aXR5L2FjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7O0VBRUksNkJBQUE7QUNDSjs7QURFQTtFQUNJLHlDQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FETVk7O0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVDQUFBO0FDRmhCOztBREtZOztFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRmhCOztBREdnQjs7OztFQUVJLHFCQUFBO0VBQ0Esb0JBQUE7QUNDcEI7O0FEQ2dCOztFQUNJLHNCQUFBO0FDRXBCOztBRENZOztFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsMENBQUE7VUFBQSxrQ0FBQTtFQUNBLGlCQUFBO0FDRWhCOztBRERnQjs7RUFDSSxlQUFBO0VBQ0EsNENBQUE7QUNJcEI7O0FESUE7RUFFSSx5QkFBQTtFQUNBLG1CQUFBO0FDRko7O0FETUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURNQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1Q0FBQTtBQ0hKOztBRE9JO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ0pSOztBREtRO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNIWjs7QURJWTtFQUNJLHNCQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZpdHkvYWN0aXZpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudFxufVxuXG5pb24taXRlbSxcbmlvbi1saXN0LWhlYWRlciB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICFpbXBvcnRhbnRcbn1cblxuaW9uLXJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNlYXJjaF9faGludCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbmdsZV9fZ3Vlc3QsXG4uZ3JvdXBfX2d1ZXN0IHtcbiAgICBpb24taXRlbS1ncm91cCB7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaW9uLXJvdyB7XG4gICAgICAgICAgICBpb24tY29sW3NpemU9JzgnXSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDBweCAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgaDYsXG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWNvbFtzaXplPScyJ10ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LCAtMjBweCk7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICAgICAgLnN0YXR1cyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tZ3JpZCB7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbn1cblxucCB7XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudFxufVxuXG4uc2VjLWNvbnRlbnQge1xuICAgIGlvbi1yb3cge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAudmlzaXRvcl9fY29kZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiA3MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAjdmlzaXRvcl9fY29kZS0tdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuaW9uLWl0ZW0sXG5pb24tbGlzdC1oZWFkZXIge1xuICAtLXBhZGRpbmctc3RhcnQ6IDAgIWltcG9ydGFudDtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2VhcmNoX19oaW50IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2luZ2xlX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tYXZhdGFyLFxuLmdyb3VwX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tYXZhdGFyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpO1xufVxuLnNpbmdsZV9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSxcbi5ncm91cF9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSB7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAwcHggMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnNpbmdsZV9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSBoNixcbi5zaW5nbGVfX2d1ZXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1jb2xbc2l6ZT1cIjhcIl0gcCxcbi5ncm91cF9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSBoNixcbi5ncm91cF9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSBwIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbn1cbi5zaW5nbGVfX2d1ZXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1jb2xbc2l6ZT1cIjhcIl0gcCxcbi5ncm91cF9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSBwIHtcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cbi5zaW5nbGVfX2d1ZXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1jb2xbc2l6ZT1cIjJcIl0sXG4uZ3JvdXBfX2d1ZXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1jb2xbc2l6ZT1cIjJcIl0ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC00MHB4LCAtMjBweCk7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNpbmdsZV9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiMlwiXSAuc3RhdHVzLFxuLmdyb3VwX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCIyXCJdIC5zdGF0dXMge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuXG5pb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICB3aWR0aDogMzAlO1xuICBtYXJnaW4tbGVmdDogMzUlO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50O1xufVxuXG4uc2VjLWNvbnRlbnQgaW9uLXJvdyB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uc2VjLWNvbnRlbnQgaW9uLXJvdyAudmlzaXRvcl9fY29kZSB7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLnNlYy1jb250ZW50IGlvbi1yb3cgLnZpc2l0b3JfX2NvZGUgI3Zpc2l0b3JfX2NvZGUtLXRleHQge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/activity/activity.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/activity/activity.page.ts ***!
    \*******************************************/

  /*! exports provided: ActivityPage */

  /***/
  function srcAppActivityActivityPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActivityPage", function () {
      return ActivityPage;
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


    var _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../hoa-store.service */
    "./src/app/hoa-store.service.ts");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");

    var ActivityPage =
    /*#__PURE__*/
    function () {
      function ActivityPage(store, router) {
        var _this = this;

        _classCallCheck(this, ActivityPage);

        this.store = store;
        this.router = router;
        this.visitors = [];
        this.allVisitors = [];
        this.allVisitorsKeys = [];
        this.visitorsKeys = []; //   this.role = this.store.getItem('hoa-role');
        //   this.uid = this.store.getItem('hoa-uid');

        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
        this.getProfile().then(function (success) {
          if (success) {
            _this.getVisitors();
          } else {
            console.log('Error!');
          }
        }).catch(function (err) {
          console.log(err.message);
        });
        this.visitors = this.allVisitors;
      }

      _createClass(ActivityPage, [{
        key: "getProfile",
        value: function getProfile() {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("".concat(_this2.role, "/").concat(_this2.uid)).once('value', function (snapshot) {
              _this2.profile = snapshot.val();
              console.log(snapshot.val());
              resolve(true);
            }).catch(function (err) {
              console.error(err.message);
              reject(false);
            });
          });
        }
      }, {
        key: "getVisitors",
        value: function getVisitors() {
          var _this3 = this;

          if (this.role === 'resident' || this.role === 'dependent') {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("".concat(this.role, "/").concat(this.uid)).child('visitors').orderByChild('bookedAt').once('value', function (snapshot) {
              _this3.visitors = [];

              for (var key in snapshot.val()) {
                if (snapshot.val().hasOwnProperty(key)) {
                  var visitor = snapshot.val()[key];
                  var expires = visitor.bookedAt + 86400000; // CHECK IF BOOKING IS LESS THAN 24 HOURS OLD

                  if (Date.now() <= expires) {
                    // SHOW ONLY VISITS LESS THAN 24 HOURS OLD
                    _this3.visitors.push(visitor);

                    _this3.visitorsKeys.push(key);
                  }
                }
              }

              _this3.allVisitors = _this3.visitors;
              _this3.allVisitorsKeys = _this3.visitorsKeys;
              _this3.visitors = _this3.visitors.reverse().slice(0, 20);
              _this3.visitorsKeys = _this3.visitorsKeys.reverse().slice(0, 20); // console.log('Visitors', snapshot.val());
            }).catch(function (err) {
              console.error(err.message);
            });
          }

          if (this.role === 'security') {
            //   SHOW SECURITIES ESTATE VISITORS ONLY
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("Estates/".concat(this.profile.estateUID, "/visitors")).orderByChild('bookedAt').once('value', function (snapshot) {
              _this3.visitors = [];

              for (var key in snapshot.val()) {
                if (snapshot.val().hasOwnProperty(key)) {
                  var visitor = snapshot.val()[key];
                  var expires = visitor.bookedAt + 86400000; // CHECK IF BOOKING IS LESS THAN 24 HOURS OLD

                  if (Date.now() <= expires) {
                    // SHOW ONLY VISITS LESS THAN 24 HOURS OLD
                    _this3.visitors.push(visitor);

                    _this3.visitorsKeys.push(key);
                  }
                }
              }

              _this3.allVisitors = _this3.visitors;
              _this3.allVisitorsKeys = _this3.visitorsKeys;

              _this3.visitors.reverse().slice(0, 20);

              _this3.visitorsKeys.reverse().slice(0, 20); // console.log('Visitors', snapshot.val());

            }).catch(function (err) {
              console.error(err.message);
            });
          }
        }
      }, {
        key: "viewVisitor",
        value: function viewVisitor(i) {
          console.log(this.visitorsKeys[i]);
          this.router.navigate(['details', this.visitorsKeys[i]]);
        }
      }, {
        key: "bookGuest",
        value: function bookGuest() {
          this.router.navigate(['book-guest']);
        }
      }, {
        key: "bookGroupGuest",
        value: function bookGroupGuest() {
          this.router.navigate(['book-group']);
        }
      }, {
        key: "checkIsArray",
        value: function checkIsArray(obj) {
          return Array.isArray(obj);
        }
      }, {
        key: "filter",
        value: function filter(ev) {
          var _this4 = this;

          // this.items = this.allItems;
          // this.getVisitors();
          this.visitors = this.allVisitors; // console.log(ev);

          var val = ev.detail.value; //     console.log('/val', typeof val);

          if (val && val.trim() !== '') {
            this.visitors = this.visitors.filter(function (term) {
              _this4.searchedIndex = _this4.visitors.indexOf(term); // this.visitorsKeys = this.visitorsKeys[this.searchedIndex];

              console.log('Selected Index', _this4.searchedIndex);
              return term.guestCode.toString() === val;
            }); // this.visitors.filter(term => {
            //       this.visitorsKeys = [];
            //       return this.visitorsKeys.push(this.visitorsKeys[this.visitors.indexOf(term)]);
            // });
          }

          console.log(this.visitorsKeys);
        }
      }, {
        key: "search",
        value: function search(ev) {
          var _this5 = this;

          // console.log(this.allVisitors);
          console.log('searching'); //    for (let i = 0; i < this.visitors.length; i++) {
          //          console.log('forloop');
          //       if (this.visitors[i].guest.fullname === this.searchKey) {
          //             console.log('found at ' + i);
          //             this.visitors = [];
          //             this.visitors.push(this.visitors[i]);
          //       }
          //    }

          return new Promise(function (resolve, reject) {
            var val = ev.detail.value;

            if (val !== '' && val !== null) {
              _this5.allVisitors.forEach(function (visitor, i) {
                // console.log(visitor);
                // if (!this.checkIsArray(visitor.guest)) {
                console.log(_this5.checkIsArray(visitor.guest));

                if (visitor.guestCode.toString() === _this5.searchKey) {
                  // console.log('found at ' + i);
                  _this5.visitors = [];
                  _this5.visitorsKeys = [];

                  _this5.visitors.push(_this5.allVisitors[i]);

                  _this5.visitorsKeys.push(_this5.allVisitorsKeys[i]);

                  console.log(_this5.visitors);
                  _this5.searchErrorText = ''; //    return this.visitors;
                }

                resolve(_this5.searchErrorText = ''); // } else {
                //       visitor.guest.forEach(guest => {
                // if (guest.fullname.toLowerCase() === this.searchKey) {
                //       // console.log('found at ' + i);
                //       this.visitors = [];
                //       this.visitorsKeys = [];
                //       this.visitors.push(this.allVisitors[i]);
                //       this.visitorsKeys.push(this.allVisitorsKeys[i]);
                //       console.log(this.visitors);
                //       return;
                // }
              });

              reject('Guest Code Does Not Exist');
            } else {
              _this5.visitors = _this5.allVisitors.reverse().slice(0, 20);
              _this5.visitorsKeys = _this5.allVisitorsKeys.reverse().slice(0, 20);
              _this5.searchErrorText = '';
            }
          }).catch(function (err) {
            _this5.searchErrorText = err;
          }); //       }
          //    });
        } // OLD SEARCH METHOD
        //   search() {
        //          for (let i = 0; i < this.visitors.length; i++) {
        //             if (this.visitors[i].guestCode.toString() === this.searchKey) {
        //                   this.visitors = [];
        //                   this.visitors.push(this.visitors[])
        //             }
        //          }
        //   }

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid'); //   this.getProfile().then((success) => {
          //       if (success) {
          //             this.getVisitors();
          //       } else {
          //             console.log('Error!');
          //       }
          //   }).catch((err: Error) => {
          //       console.log(err.message);
          //   });
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {// this.role = this.store.getItem('hoa-role');
          // this.uid = this.store.getItem('hoa-uid');
          // this.getProfile().then((success) => {
          //       if (success) {
          //             this.getVisitors();
          //       } else {
          //             console.log('Error!');
          //       }
          //   }).catch((err: Error) => {
          //       console.log(err.message);
          //   });
          //   this.visitors = this.allVisitors;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this6 = this;

          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid');
          this.getProfile().then(function (success) {
            if (success) {
              _this6.getVisitors();
            } else {
              console.log('Error!');
            }
          }).catch(function (err) {
            console.log(err.message);
          });
          this.visitors = this.allVisitors;
        }
      }]);

      return ActivityPage;
    }();

    ActivityPage.ctorParameters = function () {
      return [{
        type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ActivityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-activity',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./activity.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/activity/activity.page.html")).default,
      providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./activity.page.scss */
      "./src/app/activity/activity.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], ActivityPage);
    /***/
  }
}]);
//# sourceMappingURL=activity-activity-module-es5.js.map