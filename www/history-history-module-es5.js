function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHistoryHistoryPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot='start'>\n            <ion-back-button></ion-back-button>\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title> History </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\" *ngIf='role === \"resident\" || role === \"dependent\"'>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf='role === \"resident\"'>\n        <ion-fab-button>\n            <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-list side=\"top\">\n            <ion-fab-button (click)='bookGuest()'>\n                <ion-icon src=\"../../assets/sample-icons/activity/person.svg\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button (click)='bookGroupGuest()'>\n                <ion-icon src=\"../../assets/sample-icons/activity/group.svg\"></ion-icon>\n            </ion-fab-button>\n        </ion-fab-list>\n    </ion-fab>\n    <ion-searchbar placeholder=\"Search Visitor By Guest Code\" inputmode='text' mode='ios' animated [(ngModel)]='searchKey' (ionChange)='search($event)' *ngIf='visitors !== undefined || profile'></ion-searchbar>\n    <!-- <ion-button color='primary' fill='outline' expand='block' style='height: 40px; width: 140px; margin: auto' (click)='search()' *ngIf='visitors !== undefined'>Search</ion-button> -->\n    <p class=\"search__hint\">{{searchErrorText}}</p>\n    <div id=\"welcome__message\" *ngIf='!profile'>\n        <p class=\"hint\" *ngIf='!visitors'>Your visitor history will show here</p>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n        <ion-skeleton-text animated style=\"width: 100%; height: 63px; border-radius: 10px\"></ion-skeleton-text>\n    </div>\n    <ion-list lines='full'>\n        <!-- <ion-list-header>Visitors</ion-list-header> -->\n        <ion-grid class=\"ion-activatable\" *ngFor=\"let visitor of visitors; let i = index\" (click)=\"viewVisitor(i)\">\n            <div class=\"single__guest\" *ngIf='!checkIsArray(visitor.guest)'>\n                <ion-item-group>\n                    <ion-item>\n                        <!-- <ion-row> -->\n                        <ion-avatar item-left>\n                            <!-- <img src=\"\"> -->\n                            <ion-text>{{visitor.guestCode}}</ion-text>\n                        </ion-avatar>\n                        <ion-col size='8'>\n                            <h6 class=\"name\"> {{ visitor.guest.fullname | titlecase}}</h6>\n                            <p class=\"bookedAt\">{{ visitor.bookedAt | date:'medium' }}</p>\n                        </ion-col>\n                        <ion-col size='2'>\n                            <p class=\"status\">{{visitor.status}}</p>\n                        </ion-col>\n                        <!-- </ion-row> -->\n                    </ion-item>\n                </ion-item-group>\n                <!-- <ion-row>\n                    <ion-label color='danger'>Name</ion-label>\n                    <ion-skeleton-text animated style=\"width: 80%\" *ngIf='!visitor'></ion-skeleton-text>\n                    <ion-input type=\"text\" readonly [value]='visitor.guest.fullname | titlecase' *ngIf='visitor'></ion-input>\n                </ion-row>\n                <ion-row>\n                    <small>{{visitor.bookedAt | date:'medium'}}</small>\n                </ion-row> -->\n            </div>\n            <div class=\"group__guest\" *ngIf='checkIsArray(visitor.guest)'>\n                <ion-item-group>\n                    <ion-item>\n                        <!-- <ion-row> -->\n                        <ion-avatar item-left>\n                            <!-- <img src=\"\"> -->\n                            <ion-text>{{visitor.guestCode}}</ion-text>\n                        </ion-avatar>\n                        <ion-col size='8'>\n                            <h6 class=\"name\"> {{ visitor.guest[0].fullname | titlecase}} & {{visitor.guest.length - 1}} Other(s)</h6>\n                            <p class=\"bookedAt\">{{ visitor.bookedAt | date:'medium' }}</p>\n                        </ion-col>\n                        <ion-col size='2'>\n                            <p class=\"status\">{{visitor.status}}</p>\n                        </ion-col>\n                        <!-- </ion-row> -->\n                    </ion-item>\n                </ion-item-group>\n            </div>\n            <ion-ripple-effect></ion-ripple-effect>\n        </ion-grid>\n    </ion-list>\n</ion-content>\n\n<!-- SECURITY CONTENT -->\n<ion-content class=\"ion-padding sec-content\" *ngIf='role === \"security\"'>\n    <p class=\"hint\" *ngIf='!visitors'>Visitor history will show here</p>\n    <div id=\"welcome__message\" *ngIf='!profile'>\n        <ion-row>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n            <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n            <!-- <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text>\n              <ion-skeleton-text animated style=\"width: 70px; height: 70px; border-radius: 50%\"></ion-skeleton-text> -->\n        </ion-row>\n    </div>\n    <ion-list lines='full'>\n        <ion-row>\n            <div class=\"visitor__code ion-activatable\" *ngFor='let visitor of visitors; let i = index' (click)=\"viewVisitor(i)\">\n                <p id=\"visitor__code--text\">{{visitor.guestCode}}</p>\n                <ion-ripple-effect></ion-ripple-effect>\n            </div>\n        </ion-row>\n        <!-- <ion-searchbar placeholder=\"Search Visitor\" inputmode='text' mode='ios' animated [(ngModel)]='searchKey' (ionChange)='filter($event)'></ion-searchbar> -->\n        <!-- <ion-button color='medium' fill='outline' expand='block' (click)='search()'>Search</ion-button> -->\n        <!-- <ion-list-header>Visitors</ion-list-header> -->\n        <!-- <ion-grid *ngFor=\"let visitor of visitors; let i = index\" (click)=\"viewVisitor(i)\">\n                <ion-row>\n                    <ion-label color='danger'>Name</ion-label>\n                    <ion-skeleton-text animated style=\"width: 80%\" *ngIf='!visitor'></ion-skeleton-text>\n                    <ion-input type=\"text\" readonly [value]='visitor.fullname | titlecase' *ngIf='visitor'></ion-input>\n                </ion-row>\n                <ion-row>\n                    <small>{{visitor.bookedAt | date:'medium'}}</small>\n                </ion-row>\n            </ion-grid> -->\n    </ion-list>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/history/history.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/history/history.module.ts ***!
    \*******************************************/

  /*! exports provided: HistoryPageModule */

  /***/
  function srcAppHistoryHistoryModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPageModule", function () {
      return HistoryPageModule;
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


    var _history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./history.page */
    "./src/app/history/history.page.ts");

    var routes = [{
      path: '',
      component: _history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]
    }];

    var HistoryPageModule = function HistoryPageModule() {
      _classCallCheck(this, HistoryPageModule);
    };

    HistoryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_history_page__WEBPACK_IMPORTED_MODULE_6__["HistoryPage"]]
    })], HistoryPageModule);
    /***/
  },

  /***/
  "./src/app/history/history.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/history/history.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppHistoryHistoryPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-input {\n  text-align: end !important;\n}\n\nion-item,\nion-list-header {\n  --padding-start: 0 !important;\n}\n\nion-list-header {\n  color: var(--ion-color-medium) !important;\n}\n\nion-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.search__hint {\n  color: var(--ion-color-danger) !important;\n  padding: 10px !important;\n  text-align: center;\n}\n\n.single__guest ion-item-group ion-item ion-avatar,\n.group__guest ion-item-group ion-item ion-avatar {\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  padding: 20px !important;\n  height: 70px !important;\n  width: 70px !important;\n  background: var(--app-background-shade);\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"8\"],\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] {\n  height: 70px !important;\n  margin: 0px 0px 0px 20px;\n  padding: 0;\n  /* align-items: center; */\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"8\"] h6,\n.single__guest ion-item-group ion-item ion-col[size=\"8\"] p,\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] h6,\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] p {\n  padding: 0 !important;\n  margin: 0 !important;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"8\"] p,\n.group__guest ion-item-group ion-item ion-col[size=\"8\"] p {\n  color: grey !important;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"2\"],\n.group__guest ion-item-group ion-item ion-col[size=\"2\"] {\n  margin: 0;\n  padding: 0;\n  -webkit-transform: translate(-40px, -20px);\n          transform: translate(-40px, -20px);\n  text-align: right;\n}\n\n.single__guest ion-item-group ion-item ion-col[size=\"2\"] .status,\n.group__guest ion-item-group ion-item ion-col[size=\"2\"] .status {\n  font-size: 12px;\n  color: var(--ion-color-secondary) !important;\n}\n\nion-grid {\n  padding: 0px 0px 10px 0px;\n  border-radius: 10px;\n}\n\np {\n  padding: 0 !important;\n  margin: 0 !important;\n  color: var(--ion-color-dark) !important;\n}\n\n.sec-content ion-row {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.sec-content ion-row .visitor__code {\n  height: 70px !important;\n  width: 70px !important;\n  border-radius: 50%;\n  background: var(--app-background-shade) !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px;\n}\n\n.sec-content ion-row .visitor__code #visitor__code--text {\n  color: #000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIiwic3JjL2FwcC9oaXN0b3J5L2hpc3RvcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTs7RUFFSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0kseUNBQUE7QUNDSjs7QURFQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHFCQUFBO1VBQUEseUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURNWTs7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUNBQUE7QUNGaEI7O0FES1k7O0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGaEI7O0FER2dCOzs7O0VBRUkscUJBQUE7RUFDQSxvQkFBQTtBQ0NwQjs7QURDZ0I7O0VBQ0ksc0JBQUE7QUNFcEI7O0FEQ1k7O0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtVQUFBLGtDQUFBO0VBQ0EsaUJBQUE7QUNFaEI7O0FERGdCOztFQUNJLGVBQUE7RUFDQSw0Q0FBQTtBQ0lwQjs7QURJQTtFQUVJLHlCQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURNQTtFQUNJLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1Q0FBQTtBQ0hKOztBRE9JO0VBQ0ksbUNBQUE7VUFBQSxrQ0FBQTtBQ0pSOztBREtRO0VBQ0ksdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0RBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7QUNIWjs7QURJWTtFQUNJLHNCQUFBO0FDRmhCIiwiZmlsZSI6InNyYy9hcHAvaGlzdG9yeS9oaXN0b3J5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnRcbn1cblxuaW9uLWl0ZW0sXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSAhaW1wb3J0YW50XG59XG5cbmlvbi1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hfX2hpbnQge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW5nbGVfX2d1ZXN0LFxuLmdyb3VwX19ndWVzdCB7XG4gICAgaW9uLWl0ZW0tZ3JvdXAge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICBpb24tYXZhdGFyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlvbi1yb3cge1xuICAgICAgICAgICAgaW9uLWNvbFtzaXplPSc4J10ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGg2LFxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlvbi1jb2xbc2l6ZT0nMiddIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNDBweCwgLTIwcHgpO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIC5zdGF0dXMge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWdyaWQge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG4gICAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIC8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5wIHtcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKSAhaW1wb3J0YW50XG59XG5cbi5zZWMtY29udGVudCB7XG4gICAgaW9uLXJvdyB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgIC52aXNpdG9yX19jb2RlIHtcbiAgICAgICAgICAgIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgICN2aXNpdG9yX19jb2RlLS10ZXh0IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xufVxuXG5pb24taXRlbSxcbmlvbi1saXN0LWhlYWRlciB7XG4gIC0tcGFkZGluZy1zdGFydDogMCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSkgIWltcG9ydGFudDtcbn1cblxuaW9uLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zZWFyY2hfX2hpbnQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW5nbGVfX2d1ZXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1hdmF0YXIsXG4uZ3JvdXBfX2d1ZXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1hdmF0YXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNzBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogNzBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG59XG4uc2luZ2xlX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCI4XCJdLFxuLmdyb3VwX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCI4XCJdIHtcbiAgaGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4IDBweCAwcHggMjBweDtcbiAgcGFkZGluZzogMDtcbiAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc2luZ2xlX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCI4XCJdIGg2LFxuLnNpbmdsZV9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSBwLFxuLmdyb3VwX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCI4XCJdIGg2LFxuLmdyb3VwX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCI4XCJdIHAge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xufVxuLnNpbmdsZV9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiOFwiXSBwLFxuLmdyb3VwX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCI4XCJdIHAge1xuICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xufVxuLnNpbmdsZV9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiMlwiXSxcbi5ncm91cF9fZ3Vlc3QgaW9uLWl0ZW0tZ3JvdXAgaW9uLWl0ZW0gaW9uLWNvbFtzaXplPVwiMlwiXSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTQwcHgsIC0yMHB4KTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2luZ2xlX19ndWVzdCBpb24taXRlbS1ncm91cCBpb24taXRlbSBpb24tY29sW3NpemU9XCIyXCJdIC5zdGF0dXMsXG4uZ3JvdXBfX2d1ZXN0IGlvbi1pdGVtLWdyb3VwIGlvbi1pdGVtIGlvbi1jb2xbc2l6ZT1cIjJcIl0gLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1ncmlkIHtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxucCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbn1cblxuLnNlYy1jb250ZW50IGlvbi1yb3cge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLnNlYy1jb250ZW50IGlvbi1yb3cgLnZpc2l0b3JfX2NvZGUge1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSkgIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5zZWMtY29udGVudCBpb24tcm93IC52aXNpdG9yX19jb2RlICN2aXNpdG9yX19jb2RlLS10ZXh0IHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/history/history.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/history/history.page.ts ***!
    \*****************************************/

  /*! exports provided: HistoryPage */

  /***/
  function srcAppHistoryHistoryPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryPage", function () {
      return HistoryPage;
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

    var HistoryPage =
    /*#__PURE__*/
    function () {
      function HistoryPage(store, router) {
        _classCallCheck(this, HistoryPage);

        this.store = store;
        this.router = router;
        this.visitorsKeys = [];
        this.searchKey = '';
        this.allVisitors = [];
        this.allVisitorsKeys = [];
        this.searchedIndex = 0;
        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
      }

      _createClass(HistoryPage, [{
        key: "getProfile",
        value: function getProfile() {
          var _this = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("".concat(this.role, "/").concat(this.uid)).once('value', function (snapshot) {
            _this.profile = snapshot.val();
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "getVisitors",
        value: function getVisitors() {
          var _this2 = this;

          if (this.role === 'resident' || this.role === 'dependent') {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("".concat(this.role, "/").concat(this.uid)).child('visitors').orderByChild('bookedAt').once('value', function (snapshot) {
              _this2.visitors = [];

              for (var key in snapshot.val()) {
                if (snapshot.val().hasOwnProperty(key)) {
                  var visitor = snapshot.val()[key];

                  _this2.visitors.push(visitor);

                  _this2.visitorsKeys.push(key);
                }
              }

              _this2.visitors = _this2.visitors.reverse().slice(0, 500);
              _this2.visitorsKeys = _this2.visitorsKeys.reverse().slice(0, 500);
              _this2.allVisitors = _this2.visitors;
              _this2.allVisitorsKeys = _this2.visitorsKeys;
            }).catch(function (err) {
              console.error(err.message);
            });
          }

          if (this.role === 'security') {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("Estates/".concat(this.profile.estateUID, "/visitors")).orderByChild('bookedAt').once('value', function (snapshot) {
              _this2.visitors = [];

              for (var key in snapshot.val()) {
                if (snapshot.val().hasOwnProperty(key)) {
                  var visitor = snapshot.val()[key];

                  _this2.visitors.push(visitor);

                  _this2.visitorsKeys.push(key);
                }
              }

              _this2.visitors.reverse();

              _this2.visitorsKeys.reverse();

              _this2.allVisitors = _this2.visitors;
              _this2.allVisitorsKeys = _this2.visitorsKeys;
            }).catch(function (err) {
              console.error(err.message);
            });
          }
        }
      }, {
        key: "filter",
        value: function filter(ev) {
          var _this3 = this;

          // this.items = this.allItems;
          // this.getVisitors();
          this.visitors = this.allVisitors; // console.log(ev);

          var val = ev.detail.value; //     console.log('/val', typeof val);

          if (val && val.trim() !== '') {
            this.visitors = this.visitors.filter(function (term) {
              _this3.searchedIndex = _this3.visitors.indexOf(term); // this.visitorsKeys = this.visitorsKeys[this.searchedIndex];

              console.log('Selected Index', _this3.searchedIndex);
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
          var _this4 = this;

          console.log(ev);
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
              _this4.allVisitors.forEach(function (visitor, i) {
                // console.log(visitor);
                // if (!this.checkIsArray(visitor.guest)) {
                console.log(_this4.checkIsArray(visitor.guest));

                if (visitor.guestCode.toString() === _this4.searchKey) {
                  // console.log('found at ' + i);
                  _this4.visitors = [];
                  _this4.visitorsKeys = [];

                  _this4.visitors.push(_this4.allVisitors[i]);

                  _this4.visitorsKeys.push(_this4.allVisitorsKeys[i]);

                  console.log(_this4.visitors);
                  _this4.searchErrorText = ''; //    return this.visitors;
                }

                resolve(_this4.searchErrorText = ''); // } else {
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
              _this4.visitors = _this4.allVisitors;
              _this4.visitorsKeys = _this4.allVisitorsKeys;
              _this4.searchErrorText = '';
            }
          }).catch(function (err) {
            _this4.searchErrorText = err;
          }); //       }
          //    });
        } //   search() {
        //         console.log('searching');
        //       //    for (let i = 0; i < this.visitors.length; i++) {
        //       //          console.log('forloop');
        //       //       if (this.visitors[i].guest.fullname === this.searchKey) {
        //       //             console.log('found at ' + i);
        //       //             this.visitors = [];
        //       //             this.visitors.push(this.visitors[i]);
        //       //       }
        //       //    }
        //          this.allVisitors.forEach((visitor, i) => {
        //             // console.log(visitor);
        //             // if (!this.checkIsArray(visitor.guest)) {
        //                   console.log(this.checkIsArray(visitor.guest));
        //                   if (visitor.guestCode.toString() === this.searchKey) {
        //                         // console.log('found at ' + i);
        //                         this.visitors = [];
        //                         this.visitorsKeys = [];
        //                         this.visitors.push(this.allVisitors[i]);
        //                         this.visitorsKeys.push(this.allVisitorsKeys[i]);
        //                         console.log(this.visitors);
        //                         return;
        //                   }
        //             // } else {
        //             //       visitor.guest.forEach(guest => {
        //                         // if (guest.fullname.toLowerCase() === this.searchKey) {
        //                         //       // console.log('found at ' + i);
        //                         //       this.visitors = [];
        //                         //       this.visitorsKeys = [];
        //                         //       this.visitors.push(this.allVisitors[i]);
        //                         //       this.visitorsKeys.push(this.allVisitorsKeys[i]);
        //                         //       console.log(this.visitors);
        //                         //       return;
        //                         // }
        //                   });
        //       //       }
        //       //    });
        //   }

      }, {
        key: "checkIsArray",
        value: function checkIsArray(obj) {
          return Array.isArray(obj);
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
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid');
          this.getProfile();
          this.getVisitors();
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid');
          this.getProfile();
          this.getVisitors();
          this.visitors = this.allVisitors;
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid');
          this.getProfile();
          this.getVisitors();
          this.visitors = this.allVisitors;
        }
      }]);

      return HistoryPage;
    }();

    HistoryPage.ctorParameters = function () {
      return [{
        type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HistoryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/history/history.page.html")).default,
      providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.page.scss */
      "./src/app/history/history.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], HistoryPage);
    /***/
  }
}]);
//# sourceMappingURL=history-history-module-es5.js.map