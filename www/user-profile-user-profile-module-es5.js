function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user-profile.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user-profile.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserProfileUserProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar color='primary'>\n        <ion-buttons slot=\"start\">\n            <ion-back-button></ion-back-button>\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            Profile\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"user-profile-content\">\n    <ion-row class=\"user-details-section\">\n        <ion-col class=\"user-image-wrapper\" (click)='addProfileImg()'>\n            <!-- <div id=\"edit-profile-icon\">\n                <ion-icon name=\"create\"></ion-icon>\n            </div> -->\n            <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                <app-image-shell class=\"user-image\" animation=\"spinner\" [src]=\"profilePic\"></app-image-shell>\n            </app-aspect-ratio>\n        </ion-col>\n        <ion-col class=\"user-info-wrapper\">\n            <ion-row class=\"user-data-row\">\n                <ion-col size=\"9\">\n                    <h3 class=\"user-name\">\n                        <app-text-shell [data]=\"profile.fullname\"></app-text-shell>\n                    </h3>\n                    <h5 class=\"user-title\">\n                        <app-text-shell [data]=\"profile.role\"></app-text-shell>\n                    </h5>\n                </ion-col>\n                <!-- <ion-col class=\"membership-col\">\n                    <span class=\"user-membership\">\n            <app-text-shell [data]=\"profile.membership\"></app-text-shell>\n          </span>\n                </ion-col> -->\n            </ion-row>\n            <ion-row class=\"actions-row\">\n                <ion-col class=\"main-actions\">\n                    <!-- <ion-button class=\"call-to-action-btn\" size=\"small\" color=\"primary\" (click)='toBookGuestPage()' *ngIf='role === \"resident\" || role === \"dependent\"'>{{ 'BOOK GUEST' | translate }}</ion-button> -->\n                    <ion-button class=\"call-to-action-btn\" size=\"small\" color=\"primary\" (click)='getLocation()' *ngIf='role === \"resident\" || role === \"dependent\"'>{{ 'GET LOCATION' | translate }}</ion-button>\n                    <ion-button class=\"call-to-action-btn\" size=\"small\" color=\"danger\" (click)='logOut()'>{{'LOG OUT' | translate}}</ion-button>\n                </ion-col>\n                <ion-col class=\"secondary-actions\">\n                    <ion-button class=\"more-btn\" size=\"small\" fill=\"clear\" color=\"medium\" (click)=\"editProfile()\">\n                        <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                    </ion-button>\n                    <!-- <ion-button class=\"more-btn\" size=\"small\" fill=\"clear\" color=\"medium\" (click)=\"openLanguageChooser()\">\n                        <ion-icon slot=\"icon-only\" name=\"more\"></ion-icon>\n                    </ion-button> -->\n                </ion-col>\n            </ion-row>\n        </ion-col>\n    </ion-row>\n    <div class=\"user-about-section\">\n        <h3 class=\"details-section-title\">{{ 'ABOUT' | translate }}</h3>\n        <p class=\"user-description\">\n            <app-text-shell animation=\"bouncing\" lines=\"4\" [data]=\"profile.about\" *ngIf='role === \"resident\"'></app-text-shell>\n            <app-text-shell animation=\"bouncing\" lines=\"4\" [data]=\"profile.about\" *ngIf='role === \"security\"'></app-text-shell>\n            <app-text-shell animation=\"bouncing\" lines=\"4\" [data]=\"profile.relationship + ' to ' + dependentOn.fullname\" *ngIf='role === \"dependent\"'></app-text-shell>\n        </p>\n    </div>\n    <ion-row class=\"user-stats-section\" *ngIf='role === \"resident\"'>\n        <!-- <ion-col class=\"user-stats-wrapper\" size=\"4\">\n      <span class=\"stat-value\">\n        <app-text-shell [data]=\"profile.likes\"></app-text-shell>\n      </span>\n      <span class=\"stat-name\">{{ 'LIKES' | translate }}</span>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"4\">\n      <span class=\"stat-value\">\n        <app-text-shell [data]=\"profile.followers\"></app-text-shell>\n      </span>\n      <span class=\"stat-name\">{{ 'FOLLOWERS' | translate }}</span>\n    </ion-col>\n    <ion-col class=\"user-stats-wrapper\" size=\"4\">\n      <span class=\"stat-value\">\n        <app-text-shell [data]=\"profile.following\"></app-text-shell>\n      </span>\n      <span class=\"stat-name\">{{ 'FOLLOWING' | translate }}</span>\n    </ion-col> -->\n        <ion-segment (ionChange)='segmentChanged($event)' [(ngModel)]=\"segment\">\n            <ion-segment-button value=\"visitors\" color='secondary'>\n                <ion-label color='secondary'>ABOUT ME</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"dependents\">\n                <ion-label>DEPENDENTS</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n    </ion-row>\n    <div [ngSwitch]='segment' *ngIf='role === \"resident\"'>\n        <div id=\"dependents\" *ngSwitchCase=\"'dependents'\">\n            <ion-fab vertical=\"bottom\" horizontal=\"end\">\n                <ion-fab-button (click)='toCreateDependent()'>\n                    <ion-icon name=\"add-circle\"></ion-icon>\n                </ion-fab-button>\n\n                <!-- <ion-fab-list side=\"top\">\n                    <ion-fab-button (click)='toCreateDependent()'>Dependent</ion-fab-button>\n                    <ion-fab-button (click)='toBookGuestPage()'>Guest</ion-fab-button>\n                </ion-fab-list> -->\n\n                <!-- <ion-fab-list side=\"start\">\n            <ion-fab-button>Vimeo</ion-fab-button>\n          </ion-fab-list> -->\n\n            </ion-fab>\n            <p class=\"hint\" *ngIf='dependents === []'>Your dependents will show here</p>\n            <ion-list lines='full'>\n                <ion-item class=\"ion-activatable\" *ngFor=\"let dependent of dependents; let i = index\" (click)=\"viewDependent(i)\">\n                    <ion-label>Name</ion-label>\n                    {{dependent.fullname}}\n                    <ion-ripple-effect></ion-ripple-effect>\n                </ion-item>\n            </ion-list>\n        </div>\n        <div id=\"visitors\" *ngSwitchCase=\"'visitors'\">\n            <ion-list lines='full'>\n                <ion-list-header>{{role | uppercase}} INFORMATION</ion-list-header>\n                <ion-item>\n                    <ion-label stacked>{{'Estate Name' | translate}}</ion-label>\n                    <ion-input readonly type=\"text\" [value]='profile.estateName | titlecase'></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>{{'Apartment Number' | translate}}</ion-label>\n                    <ion-input readonly type=\"text\" [value]='profile.estateAptNum | titlecase'></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>{{'Email' | translate}}</ion-label>\n                    <ion-input readonly type=\"email\" [value]='profile.email'></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label stacked>{{'Address' | translate}}</ion-label>\n                    <ion-input readonly type=\"text\" [value]='address | titlecase'></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>{{'Gender' | translate}}</ion-label>\n                    <ion-input readonly type=\"text\" [value]='profile.gender | titlecase'></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>{{'Marital Status' | translate}}</ion-label>\n                    <ion-input readonly type=\"text\" [value]='profile.maritalStatus | titlecase'></ion-input>\n                </ion-item>\n            </ion-list>\n            <!-- <ion-fab vertical=\"bottom\" horizontal=\"end\" color='secondary'>\n                <ion-fab-button (click)='toBookGuestPage()' color='secondary'>\n                    <ion-icon name=\"add-circle\"></ion-icon>\n                </ion-fab-button>\n\n                <!-- <ion-fab-list side=\"top\">\n                    <ion-fab-button (click)='toCreateDependent()'>Dependent</ion-fab-button>\n                    <ion-fab-button (click)='toBookGuestPage()'>Guest</ion-fab-button>\n                </ion-fab-list> -->\n\n            <!-- <ion-fab-list side=\"start\">\n            <ion-fab-button>Vimeo</ion-fab-button>\n          </ion-fab-list> --\n\n            </ion-fab>\n            <p class=\"hint\" *ngIf='this.visitors === []'>Your visitor activity will show here</p>\n            <ion-list lines='full'>\n                <ion-item *ngFor=\"let visitor of visitors; let i = index\" (click)=\"viewVisitor(i)\">\n                    <ion-label>{{'Name' | translate}}</ion-label>\n                    <ion-input type=\"text\" readonly [value]='visitor.fullname | titlecase'></ion-input>\n                </ion-item>\n            </ion-list> -->\n        </div>\n    </div>\n    <!-- SECURITY DETAILS -->\n    <div id=\"security\" *ngIf='role === \"security\"'>\n        <ion-list lines='full'>\n            <ion-list-header>{{role | uppercase}} INFORMATION</ion-list-header>\n            <ion-item>\n                <ion-label stacked>{{'Estate Name' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='estateName | titlecase'></ion-input>\n            </ion-item>\n            <!-- <ion-item>\n                <ion-label stacked>{{'Apartment Number' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='profile.estateAptNum | titlecase'></ion-input>\n            </ion-item> -->\n            <ion-item>\n                <ion-label stacked>{{'Email' | translate}}</ion-label>\n                <ion-input readonly type=\"email\" [value]='profile.email'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label stacked>{{'Address' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='address | titlecase'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{'Gender' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='profile.gender | titlecase'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{'Marital Status' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='profile.maritalStatus | titlecase'></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n    <!-- DEPENDENT PROFILE INFORMATION -->\n    <div id=\"dependent\" *ngIf='role === \"dependent\"'>\n        <ion-list lines='full'>\n            <ion-list-header>{{role | uppercase}} INFORMATION</ion-list-header>\n            <ion-item>\n                <ion-label>{{'Email' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='profile.email'></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{'Phone' | translate}}</ion-label>\n                <ion-input readonly type=\"text\" [value]='profile.phone | titlecase'></ion-input>\n            </ion-item>\n        </ion-list>\n        <!-- DEPENDENT'S VISITORS LOG -->\n        <ion-list lines='full' *ngIf='visitors !== \"\" || visitors !== null'>\n            <ion-list-header>VISITORS LOG</ion-list-header>\n            <ion-item *ngFor='let visitor of visitors; let i = index' (click)='viewVisitor(i)'>\n                <ion-label>{{'Name' | translate}}</ion-label>\n                <ion-input type=\"text\" readonly [value]='visitor.fullname | titlecase'></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n    <!-- <div class=\"user-about-section\">\n        <h3 class=\"details-section-title\">{{ 'ABOUT' | translate }}</h3>\n        <p class=\"user-description\">\n            <app-text-shell animation=\"bouncing\" lines=\"4\" [data]=\"profile.about\"></app-text-shell>\n        </p>\n    </div> -->\n    <!-- <div class=\"user-friends-section\">\n        <ion-row class=\"heading-row\">\n            <h3 class=\"details-section-title\">{{ 'FRIENDS' | translate }}</h3>\n            <a class=\"heading-call-to-action\" [routerLink]=\"['/app/user/friends']\">{{ 'SEE_ALL' | translate }}</a>\n        </ion-row>\n        <ion-row class=\"friends-row\">\n            <ion-col class=\"friend-item\" size=\"2\" *ngFor=\"let friend of profile.friends\">\n                <app-aspect-ratio [ratio]=\"{w: 1, h: 1}\">\n                    <app-image-shell class=\"friend-picture\" [src]=\"friend.image\"></app-image-shell>\n                </app-aspect-ratio>\n                <span class=\"friend-name\">\n          <app-text-shell [data]=\"friend.name\"></app-text-shell>\n        </span>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class=\"user-photos-section\">\n        <ion-row class=\"heading-row\">\n            <h3 class=\"details-section-title\">{{ 'PHOTOS' | translate }}</h3>\n            <a class=\"heading-call-to-action\">{{ 'SEE_ALL' | translate }}</a>\n        </ion-row>\n        <ion-row class=\"pictures-row\">\n            <ion-col class=\"picture-item\" size=\"2\" *ngFor=\"let photo of profile.photos\">\n                <app-image-shell [mode]=\"'cover'\" [src]=\"photo.image\" class=\"user-photo-image\">\n                    <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n                    </app-aspect-ratio>\n                </app-image-shell>\n            </ion-col>\n        </ion-row>\n    </div> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/language/language.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/language/language.service.ts ***!
    \**********************************************/

  /*! exports provided: LanguageService */

  /***/
  function srcAppLanguageLanguageServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LanguageService", function () {
      return LanguageService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LanguageService =
    /*#__PURE__*/
    function () {
      function LanguageService() {
        _classCallCheck(this, LanguageService);

        this.languages = new Array();
        this.languages.push({
          name: 'English',
          code: 'en'
        }, {
          name: 'Spanish',
          code: 'es'
        }, {
          name: 'French',
          code: 'fr'
        });
      }

      _createClass(LanguageService, [{
        key: "getLanguages",
        value: function getLanguages() {
          return this.languages;
        }
      }]);

      return LanguageService;
    }();

    LanguageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], LanguageService);
    /***/
  },

  /***/
  "./src/app/shell/data-store.ts":
  /*!*************************************!*\
    !*** ./src/app/shell/data-store.ts ***!
    \*************************************/

  /*! exports provided: ShellModel, DataStore */

  /***/
  function srcAppShellDataStoreTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellModel", function () {
      return ShellModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataStore", function () {
      return DataStore;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./config/app-shell.config */
    "./src/app/shell/config/app-shell.config.ts");

    var ShellModel = function ShellModel() {
      _classCallCheck(this, ShellModel);

      this.isShell = false;
    };

    var DataStore =
    /*#__PURE__*/
    function () {
      function DataStore(shellModel) {
        _classCallCheck(this, DataStore);

        this.shellModel = shellModel; // We wait on purpose 2 secs on local environment when fetching from json to simulate the backend roundtrip.
        // However, in production you should set this delay to 0 in the assets/config/app-shell.config.prod.json file.
        // tslint:disable-next-line:max-line-length

        this.networkDelay = _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings && _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay ? _config_app_shell_config__WEBPACK_IMPORTED_MODULE_3__["AppShellConfig"].settings.networkDelay : 0;
        this.timeline = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
      } // Static function with generics
      // (ref: https://stackoverflow.com/a/24293088/1116959)
      // Append a shell (T & ShellModel) to every value (T) emmited to the timeline


      _createClass(DataStore, [{
        key: "load",
        value: function load(dataSourceObservable) {
          var _this = this;

          var dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
          dataSourceWithShellObservable.subscribe(function (dataValue) {
            _this.timeline.next(dataValue);
          });
        }
      }, {
        key: "state",
        get: function get() {
          return this.timeline.asObservable();
        }
      }], [{
        key: "AppendShell",
        value: function AppendShell(dataObservable, shellModel) {
          var networkDelay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 400;
          var delayObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(networkDelay)); // Assign shell flag accordingly
          // (ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])([delayObservable, dataObservable]).pipe( // Dismiss unnecessary delayValue
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2),
                delayValue = _ref2[0],
                dataValue = _ref2[1];

            return Object.assign(dataValue, {
              isShell: false
            });
          }), // Set the shell model as the initial value
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(Object.assign(shellModel, {
            isShell: true
          })));
        }
      }]);

      return DataStore;
    }();
    /***/

  },

  /***/
  "./src/app/user/profile/styles/user-profile.ios.scss":
  /*!***********************************************************!*\
    !*** ./src/app/user/profile/styles/user-profile.ios.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileStylesUserProfileIosScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.ios) .user-details-section .user-image-wrapper {\n  max-width: 30%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUuaW9zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxjQUFBO0FDRE4iLCJmaWxlIjoic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5pb3Muc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSB7XG4gIC51c2VyLWRldGFpbHMtc2VjdGlvbiB7XG4gICAgLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUuaW9zKSAudXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW1hZ2Utd3JhcHBlciB7XG4gIG1heC13aWR0aDogMzAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/profile/styles/user-profile.md.scss":
  /*!**********************************************************!*\
    !*** ./src/app/user/profile/styles/user-profile.md.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileStylesUserProfileMdScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host-context(.plt-mobile.md) .user-details-section .user-image-wrapper {\n  max-width: 28%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5tZC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5tZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0UsY0FBQTtBQ0ROIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUubWQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoLnBsdC1tb2JpbGUubWQpIHtcbiAgLnVzZXItZGV0YWlscy1zZWN0aW9uIHtcbiAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgIG1heC13aWR0aDogMjglO1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3QtY29udGV4dCgucGx0LW1vYmlsZS5tZCkgLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDI4JTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/user/profile/styles/user-profile.page.scss":
  /*!************************************************************!*\
    !*** ./src/app/user/profile/styles/user-profile.page.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileStylesUserProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-border-radius: var(--app-fair-radius);\n  --page-actions-padding: 5px;\n  --page-friends-gutter: calc(var(--page-margin) / 2);\n  --page-pictures-gutter: calc(var(--page-margin) / 2);\n}\n\nion-list-header {\n  color: var(--ion-color-dark) !important;\n  background: var(--app-background-shade) !important;\n  margin: 10px 0px 20px 0px !important;\n}\n\nion-label {\n  color: var(--ion-color-secondary) !important;\n}\n\nion-input {\n  text-align: end !important;\n}\n\n.user-details-section {\n  --ion-grid-column-padding: 0px;\n  margin: var(--page-margin);\n}\n\n.user-details-section .user-image-wrapper {\n  max-width: 26%;\n}\n\n.user-details-section .user-info-wrapper {\n  padding-left: var(--page-margin);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: nowrap;\n}\n\n.user-details-section .user-info-wrapper .user-data-row {\n  padding-bottom: var(--page-margin);\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-name {\n  margin: 0px 0px 5px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-title {\n  margin: 0px;\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .membership-col {\n  padding-left: var(--page-margin);\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n\n.user-details-section .user-info-wrapper .user-data-row .user-membership {\n  display: block;\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: 4px 8px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.user-details-section .user-info-wrapper .actions-row {\n  --ion-grid-columns: 10;\n  --ion-grid-column-padding: var(--page-actions-padding);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  flex-wrap: nowrap;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n}\n\n.user-details-section .user-info-wrapper .actions-row .main-actions {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n  margin-left: calc(var(--page-actions-padding) * -1);\n  margin-right: calc(var(--page-actions-padding) * -1);\n  display: -webkit-box;\n  display: flex;\n}\n\n.user-details-section .user-info-wrapper .actions-row .main-actions .call-to-action-btn {\n  padding: 0px var(--page-actions-padding);\n  margin: 0px;\n}\n\n.user-details-section .user-info-wrapper .actions-row .secondary-actions {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.user-details-section .user-info-wrapper .actions-row .secondary-actions .more-btn {\n  --padding-start: 4px;\n  --padding-end: 4px;\n  margin: 0px;\n}\n\n.user-stats-section {\n  --ion-grid-column-padding: 0px;\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-stats-section .user-stats-wrapper {\n  text-align: center;\n}\n\n.user-stats-section .user-stats-wrapper .stat-value {\n  display: block;\n  padding-bottom: 5px;\n  color: var(--ion-color-dark-shade);\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.user-stats-section .user-stats-wrapper .stat-name {\n  font-size: 16px;\n  color: var(--ion-color-medium);\n}\n\n.details-section-title {\n  font-size: 18px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.user-about-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-about-section .user-description {\n  color: var(--ion-color-dark-shade);\n  text-align: justify;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n  line-height: 1.3;\n}\n\n.user-friends-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: var(--page-margin);\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n\n.user-friends-section .heading-row {\n  margin-bottom: var(--page-margin);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.user-friends-section .heading-row .details-section-title {\n  margin: 0px;\n}\n\n.user-friends-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.user-friends-section .friends-row {\n  --ion-grid-columns: 7;\n  --ion-grid-column-padding: 0px;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n  will-change: scroll-position;\n  margin-left: calc(var(--page-margin) * -1);\n  margin-right: calc(var(--page-margin) * -1);\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.user-friends-section .friends-row::-webkit-scrollbar {\n  display: none;\n}\n\n.user-friends-section .friends-row::before, .user-friends-section .friends-row::after {\n  content: \"\";\n  -webkit-box-flex: 0;\n          flex: 0 0 calc(var(--page-margin) - var(--page-friends-gutter));\n}\n\n.user-friends-section .friends-row .friend-item {\n  padding: 0px var(--page-friends-gutter);\n}\n\n.user-friends-section .friends-row .friend-item .friend-name {\n  display: block;\n  text-align: center;\n  margin: var(--page-margin) 0px;\n  font-size: 14px;\n}\n\n.user-photos-section {\n  margin: calc(var(--page-margin) * 2) var(--page-margin) var(--page-margin);\n  padding-bottom: calc(var(--page-margin) * 2);\n}\n\n.user-photos-section .heading-row {\n  margin-bottom: var(--page-margin);\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.user-photos-section .heading-row .details-section-title {\n  margin: 0px;\n}\n\n.user-photos-section .heading-row .heading-call-to-action {\n  padding: calc(var(--page-margin) / 2) calc(var(--page-margin) / 4);\n  text-decoration: none;\n  color: var(--ion-color-secondary);\n}\n\n.user-photos-section .pictures-row {\n  --ion-grid-columns: 4;\n  --ion-grid-column-padding: 0px;\n  margin: 0px calc(var(--page-pictures-gutter) * -1);\n}\n\n.user-photos-section .pictures-row .picture-item {\n  padding: 0px var(--page-pictures-gutter) calc(var(--page-pictures-gutter) * 2);\n}\n\n#security ion-list ion-item ion-input {\n  text-align: end !important;\n}\n\n::ng-deep .language-alert {\n  --select-alert-color: #000;\n  --select-alert-background: #FFF;\n  --select-alert-margin: 16px;\n  --select-alert-color: var(--ion-color-lightest);\n  --select-alert-background: var(--ion-color-primary);\n  --select-alert-margin: var(--app-fair-margin);\n}\n\n::ng-deep .language-alert .alert-head {\n  padding-top: calc((var(--select-alert-margin) / 4) * 3);\n  padding-bottom: calc((var(--select-alert-margin) / 4) * 3);\n  -webkit-padding-start: var(--select-alert-margin);\n          padding-inline-start: var(--select-alert-margin);\n  -webkit-padding-end: var(--select-alert-margin);\n          padding-inline-end: var(--select-alert-margin);\n}\n\n::ng-deep .language-alert .alert-title {\n  color: var(--select-alert-color);\n}\n\n::ng-deep .language-alert .alert-head,\n::ng-deep .language-alert .alert-message {\n  background-color: var(--select-alert-background);\n}\n\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-ios .alert-title {\n  margin: 0px;\n}\n\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-md .alert-title {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n::ng-deep .language-alert .alert-wrapper.sc-ion-alert-md .alert-button {\n  --padding-top: 0;\n  --padding-start: 0.9em;\n  --padding-end: 0.9em;\n  --padding-bottom: 0;\n  height: 2.1em;\n  font-size: 13px;\n}\n\n::ng-deep .language-alert .alert-message {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3VzZXIvcHJvZmlsZS9zdHlsZXMvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL3RoZW1lL21peGlucy9zY3JvbGxiYXJzLnNjc3MiLCIvVXNlcnMvTXJfRnJvc2gvRGVza3RvcC9TZWN1cmVQYXNzL3NyYy90aGVtZS9taXhpbnMvaW5wdXRzL3NlbGVjdC1hbGVydC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksdUNBQUE7RUFDQSw0Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtBQ0hKOztBRE1BO0VBQ0ksdUNBQUE7RUFDQSxrREFBQTtFQUNBLG9DQUFBO0FDSEo7O0FETUE7RUFDSSw0Q0FBQTtBQ0hKOztBRE1BO0VBQ0ksMEJBQUE7QUNISjs7QURPQTtFQUNJLDhCQUFBO0VBQ0EsMEJBQUE7QUNKSjs7QURLSTtFQUNJLGNBQUE7QUNIUjs7QURLSTtFQUNJLGdDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtFQUNBLGlCQUFBO0FDSFI7O0FESVE7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ0ZaOztBREdZO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUNEaEI7O0FER1k7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDRGhCOztBREdZO0VBQ0ksZ0NBQUE7RUFDQSxtQkFBQTtVQUFBLFlBQUE7QUNEaEI7O0FER1k7RUFDSSxjQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0RoQjs7QURJUTtFQUNJLHNCQUFBO0VBQ0Esc0RBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtFQUNBLG9EQUFBO0FDRlo7O0FER1k7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxvREFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ0RoQjs7QURFZ0I7RUFDSSx3Q0FBQTtFQUNBLFdBQUE7QUNBcEI7O0FER1k7RUFDSSxtQkFBQTtVQUFBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRGhCOztBREVnQjtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDQXBCOztBRE9BO0VBQ0ksOEJBQUE7RUFDQSwwRUFBQTtFQUNBLGtDQUFBO0VBQ0EscURBQUE7QUNKSjs7QURLSTtFQUNJLGtCQUFBO0FDSFI7O0FESVE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZaOztBRElRO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FDRlo7O0FET0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FDSko7O0FET0E7RUFDSSwwRUFBQTtFQUNBLGtDQUFBO0VBQ0EscURBQUE7QUNKSjs7QURLSTtFQUNJLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0hSOztBRE9BO0VBQ0ksMEVBQUE7RUFDQSxrQ0FBQTtFQUNBLHFEQUFBO0FDSko7O0FES0k7RUFDSSxpQ0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSFI7O0FESVE7RUFDSSxXQUFBO0FDRlo7O0FESVE7RUFDSSxrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNGWjs7QURLSTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0VFbktOLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRCtKRjs7QUM1SkU7RUFDRSxhQUFBO0FEOEpKOztBRERRO0VBRUksV0FBQTtFQUVBLG1CQUFBO1VBQUEsK0RBQUE7QUNDWjs7QURDUTtFQUNJLHVDQUFBO0FDQ1o7O0FEQVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNFaEI7O0FESUE7RUFDSSwwRUFBQTtFQUNBLDRDQUFBO0FDREo7O0FERUk7RUFDSSxpQ0FBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQVI7O0FEQ1E7RUFDSSxXQUFBO0FDQ1o7O0FEQ1E7RUFDSSxrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNDWjs7QURFSTtFQUNJLHFCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrREFBQTtBQ0FSOztBRENRO0VBQ0ksOEVBQUE7QUNDWjs7QURPWTtFQUNJLDBCQUFBO0FDSmhCOztBRFlBO0VHOU5FLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFSCtORSwrQ0FBQTtFQUNBLG1EQUFBO0VBQ0EsNkNBQUE7QUNSSjs7QUV2TkU7RUFDRSx1REFBQTtFQUNBLDBEQUFBO0VBQ0EsaURBQUE7VUFBQSxnREFBQTtFQUNBLCtDQUFBO1VBQUEsOENBQUE7QUZ5Tko7O0FFdE5FO0VBQ0UsZ0NBQUE7QUZ3Tko7O0FFck5FOztFQUVFLGdEQUFBO0FGdU5KOztBRWxOSTtFQUNFLFdBQUE7QUZvTk47O0FFOU1JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FGZ05OOztBRTdNSTtFQUVFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLGVBQUE7QUY2TU47O0FEbkJJO0VBQ0ksYUFBQTtBQ3FCUiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvcHJvZmlsZS9zdHlsZXMvdXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi90aGVtZS9taXhpbnMvc2Nyb2xsYmFyc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uLy4uL3RoZW1lL21peGlucy9pbnB1dHMvc2VsZWN0LWFsZXJ0XCI7XG4vLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gICAgLS1wYWdlLWJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG4gICAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAgIC0tcGFnZS1mcmllbmRzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAtLXBhZ2UtcGljdHVyZXMtZ3V0dGVyOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuXG5pb24tbGlzdC1oZWFkZXIge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSkgIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDEwcHggMHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnRcbn1cblxuLy8gTm90ZTogIEFsbCB0aGUgQ1NTIHZhcmlhYmxlcyBkZWZpbmVkIGJlbG93IGFyZSBvdmVycmlkZXMgb2YgSW9uaWMgZWxlbWVudHMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG4udXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAudXNlci1pbWFnZS13cmFwcGVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyNiU7XG4gICAgfVxuICAgIC51c2VyLWluZm8td3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAudXNlci1kYXRhLXJvdyB7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAudXNlci1uYW1lIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCAwcHggNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXNlci10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW1iZXJzaGlwLWNvbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXItbWVtYmVyc2hpcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25zLXJvdyB7XG4gICAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbnM6IDEwO1xuICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpICogLTEpO1xuICAgICAgICAgICAgLm1haW4tYWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKHZhcigtLXBhZ2UtYWN0aW9ucy1wYWRkaW5nKSAqIC0xKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIC5jYWxsLXRvLWFjdGlvbi1idG4ge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2Vjb25kYXJ5LWFjdGlvbnMge1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgLm1vcmUtYnRuIHtcbiAgICAgICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4udXNlci1zdGF0cy1zZWN0aW9uIHtcbiAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAuc3RhdC12YWx1ZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgfVxuICAgICAgICAuc3RhdC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICAgIG1hcmdpbjogMHB4IDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG5cbi51c2VyLWFib3V0LXNlY3Rpb24ge1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gICAgLnVzZXItZGVzY3JpcHRpb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICB9XG59XG5cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiB7XG4gICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAuaGVhZGluZy1yb3cge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuaGVhZGluZy1jYWxsLXRvLWFjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZyaWVuZHMtcm93IHtcbiAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA3OyAvLyBXZSB3YW50IHRvIHNob3cgdGhyZWUgZnJpZW5kcyBhbmQgYSBoYWxmLiBFYWNoIGZyaWVuZCBmaWxscyAyIGNvbHMgPT4gKDMuNSAqIDIgPSA3IGNvbHMpXG4gICAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAgICAgICBAaW5jbHVkZSBoaWRlLXNjcm9sbGJhcnMoKTtcbiAgICAgICAgJjo6YmVmb3JlLFxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIC8vIC5mcmllbmQtaXRlbSBoYXMgOHB4IG9mIHNpZGUgcGFkZGluZywgd2UgbmVlZCBhbiBleHRyYSA0cHggYXQgdGhlIGJlZ2lubmluZyBhbmQgZW5kIHRvIGZpbGwgdGhlIDEycHggc2lkZSBtYXJnaW4gb2YgdGhlIHZpZXdcbiAgICAgICAgICAgIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpKTtcbiAgICAgICAgfVxuICAgICAgICAuZnJpZW5kLWl0ZW0ge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpO1xuICAgICAgICAgICAgLmZyaWVuZC1uYW1lIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnVzZXItcGhvdG9zLXNlY3Rpb24ge1xuICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xuICAgIC5oZWFkaW5nLXJvdyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuZGV0YWlscy1zZWN0aW9uLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucGljdHVyZXMtcm93IHtcbiAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW5zOiA0O1xuICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4IGNhbGModmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpICogLTEpO1xuICAgICAgICAucGljdHVyZS1pdGVtIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCB2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuI3NlY3VyaXR5IHtcbiAgICBpb24tbGlzdCB7XG4gICAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIEFsZXJ0cyBhbmQgaW4gZ2VuZXJhbCBhbGwgb3ZlcmxheXMgYXJlIGF0dGFjaGVkIHRvIHRoZSBib2R5IG9yIGlvbi1hcHAgZGlyZWN0bHlcbi8vIFdlIG5lZWQgdG8gdXNlIDo6bmctZGVlcCB0byBhY2Nlc3MgaXQgZnJvbSBoZXJlXG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IHtcbiAgICBAaW5jbHVkZSBzZWxlY3QtYWxlcnQoKTtcbiAgICAvLyBWYXJpYWJsZXMgc2hvdWxkIGJlIGluIGEgZGVlcGVyIHNlbGVjdG9yIG9yIGFmdGVyIHRoZSBtaXhpbiBpbmNsdWRlIHRvIG92ZXJyaWRlIGRlZmF1bHQgdmFsdWVzXG4gICAgLS1zZWxlY3QtYWxlcnQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbiAgICAuYWxlcnQtbWVzc2FnZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsIjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLW5hcnJvdy1tYXJnaW4pO1xuICAtLXBhZ2UtYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLWZhaXItcmFkaXVzKTtcbiAgLS1wYWdlLWFjdGlvbnMtcGFkZGluZzogNXB4O1xuICAtLXBhZ2UtZnJpZW5kcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gIC0tcGFnZS1waWN0dXJlcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG5cbmlvbi1saXN0LWhlYWRlciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyaykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWJhY2tncm91bmQtc2hhZGUpICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTBweCAwcHggMjBweCAwcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1pbnB1dCB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xufVxuXG4udXNlci1kZXRhaWxzLXNlY3Rpb24ge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWltYWdlLXdyYXBwZXIge1xuICBtYXgtd2lkdGg6IDI2JTtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLnVzZXItZGF0YS1yb3cge1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyAudXNlci1uYW1lIHtcbiAgbWFyZ2luOiAwcHggMHB4IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC51c2VyLWRhdGEtcm93IC51c2VyLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyAubWVtYmVyc2hpcC1jb2wge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgZmxleC1ncm93OiAwO1xufVxuLnVzZXItZGV0YWlscy1zZWN0aW9uIC51c2VyLWluZm8td3JhcHBlciAudXNlci1kYXRhLXJvdyAudXNlci1tZW1iZXJzaGlwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYXBwLW5hcnJvdy1yYWRpdXMpO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW5zOiAxMDtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC5hY3Rpb25zLXJvdyAubWFpbi1hY3Rpb25zIHtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tbGVmdDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gIG1hcmdpbi1yaWdodDogY2FsYyh2YXIoLS1wYWdlLWFjdGlvbnMtcGFkZGluZykgKiAtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4udXNlci1kZXRhaWxzLXNlY3Rpb24gLnVzZXItaW5mby13cmFwcGVyIC5hY3Rpb25zLXJvdyAubWFpbi1hY3Rpb25zIC5jYWxsLXRvLWFjdGlvbi1idG4ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1hY3Rpb25zLXBhZGRpbmcpO1xuICBtYXJnaW46IDBweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5zZWNvbmRhcnktYWN0aW9ucyB7XG4gIGZsZXgtZ3JvdzogMDtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbi51c2VyLWRldGFpbHMtc2VjdGlvbiAudXNlci1pbmZvLXdyYXBwZXIgLmFjdGlvbnMtcm93IC5zZWNvbmRhcnktYWN0aW9ucyAubW9yZS1idG4ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgLS1wYWRkaW5nLWVuZDogNHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLnVzZXItc3RhdHMtc2VjdGlvbiB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLnVzZXItc3RhdHMtc2VjdGlvbiAudXNlci1zdGF0cy13cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnVzZXItc3RhdHMtc2VjdGlvbiAudXNlci1zdGF0cy13cmFwcGVyIC5zdGF0LXZhbHVlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbi51c2VyLXN0YXRzLXNlY3Rpb24gLnVzZXItc3RhdHMtd3JhcHBlciAuc3RhdC1uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5cbi5kZXRhaWxzLXNlY3Rpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgbWFyZ2luOiAwcHggMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cblxuLnVzZXItYWJvdXQtc2VjdGlvbiB7XG4gIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi51c2VyLWFib3V0LXNlY3Rpb24gLnVzZXItZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstc2hhZGUpO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyB7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5oZWFkaW5nLXJvdyAuZGV0YWlscy1zZWN0aW9uLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG59XG4udXNlci1mcmllbmRzLXNlY3Rpb24gLmhlYWRpbmctcm93IC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDc7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbiAgbWFyZ2luLWxlZnQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICBtYXJnaW4tcmlnaHQ6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpO1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIG92ZXJmbG93OiAtbW96LXNjcm9sbGJhcnMtbm9uZTtcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdzo6YmVmb3JlLCAudXNlci1mcmllbmRzLXNlY3Rpb24gLmZyaWVuZHMtcm93OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGZsZXg6IDAgMCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAtIHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpKTtcbn1cbi51c2VyLWZyaWVuZHMtc2VjdGlvbiAuZnJpZW5kcy1yb3cgLmZyaWVuZC1pdGVtIHtcbiAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtZnJpZW5kcy1ndXR0ZXIpO1xufVxuLnVzZXItZnJpZW5kcy1zZWN0aW9uIC5mcmllbmRzLXJvdyAuZnJpZW5kLWl0ZW0gLmZyaWVuZC1uYW1lIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiB2YXIoLS1wYWdlLW1hcmdpbikgMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51c2VyLXBob3Rvcy1zZWN0aW9uIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDIpO1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLmhlYWRpbmctcm93IHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udXNlci1waG90b3Mtc2VjdGlvbiAuaGVhZGluZy1yb3cgLmRldGFpbHMtc2VjdGlvbi10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xufVxuLnVzZXItcGhvdG9zLXNlY3Rpb24gLmhlYWRpbmctcm93IC5oZWFkaW5nLWNhbGwtdG8tYWN0aW9uIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDQpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbi51c2VyLXBob3Rvcy1zZWN0aW9uIC5waWN0dXJlcy1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbnM6IDQ7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHggY2FsYyh2YXIoLS1wYWdlLXBpY3R1cmVzLWd1dHRlcikgKiAtMSk7XG59XG4udXNlci1waG90b3Mtc2VjdGlvbiAucGljdHVyZXMtcm93IC5waWN0dXJlLWl0ZW0ge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpIGNhbGModmFyKC0tcGFnZS1waWN0dXJlcy1ndXR0ZXIpICogMik7XG59XG5cbiNzZWN1cml0eSBpb24tbGlzdCBpb24taXRlbSBpb24taW5wdXQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCB7XG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiAjMDAwO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiAjRkZGO1xuICAtLXNlbGVjdC1hbGVydC1tYXJnaW46IDE2cHg7XG4gIC0tc2VsZWN0LWFsZXJ0LWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAtLXNlbGVjdC1hbGVydC1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogdmFyKC0tYXBwLWZhaXItbWFyZ2luKTtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LWhlYWQge1xuICBwYWRkaW5nLXRvcDogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbik7XG59XG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IC5hbGVydC10aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtY29sb3IpO1xufVxuOjpuZy1kZWVwIC5sYW5ndWFnZS1hbGVydCAuYWxlcnQtaGVhZCxcbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWxlY3QtYWxlcnQtYmFja2dyb3VuZCk7XG59XG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1pb3MgLmFsZXJ0LXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG59XG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46Om5nLWRlZXAgLmxhbmd1YWdlLWFsZXJ0IC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCAuYWxlcnQtYnV0dG9uIHtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcbiAgLS1wYWRkaW5nLWVuZDogMC45ZW07XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGhlaWdodDogMi4xZW07XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbjo6bmctZGVlcCAubGFuZ3VhZ2UtYWxlcnQgLmFsZXJ0LW1lc3NhZ2Uge1xuICBkaXNwbGF5OiBub25lO1xufSIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XG4gIC8vIElFIDEwK1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgLy8gRmlyZWZveFxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIiwiQG1peGluIHNlbGVjdC1hbGVydCgpIHtcbiAgLy8gRGVmYXVsdCB2YWx1ZXNcbiAgLS1zZWxlY3QtYWxlcnQtY29sb3I6ICMwMDA7XG4gIC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQ6ICNGRkY7XG4gIC0tc2VsZWN0LWFsZXJ0LW1hcmdpbjogMTZweDtcblxuICAuYWxlcnQtaGVhZCB7XG4gICAgcGFkZGluZy10b3A6IGNhbGMoKHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pIC8gNCkgKiAzKTtcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygodmFyKC0tc2VsZWN0LWFsZXJ0LW1hcmdpbikgLyA0KSAqIDMpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1zZWxlY3QtYWxlcnQtbWFyZ2luKTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLXNlbGVjdC1hbGVydC1tYXJnaW4pO1xuICB9XG5cbiAgLmFsZXJ0LXRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWNvbG9yKTtcbiAgfVxuXG4gIC5hbGVydC1oZWFkLFxuICAuYWxlcnQtbWVzc2FnZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VsZWN0LWFsZXJ0LWJhY2tncm91bmQpO1xuICB9XG5cbiAgLy8gaU9TIHN0eWxlc1xuICAuYWxlcnQtd3JhcHBlci5zYy1pb24tYWxlcnQtaW9zIHtcbiAgICAuYWxlcnQtdGl0bGUge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgfVxuICB9XG5cbiAgLy8gTWF0ZXJpYWwgc3R5bGVzXG4gIC5hbGVydC13cmFwcGVyLnNjLWlvbi1hbGVydC1tZCB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuXG4gICAgLmFsZXJ0LWJ1dHRvbiB7XG4gICAgICAvLyBWYWx1ZXMgdGFrZW4gZnJvbSBJb25pYyBzbWFsbCBidXR0b24gcHJlc2V0XG4gICAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjllbTtcbiAgICAgIC0tcGFkZGluZy1lbmQ6IDAuOWVtO1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcblxuICAgICAgaGVpZ2h0OiAyLjFlbTtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/profile/styles/user-profile.shell.scss":
  /*!*************************************************************!*\
    !*** ./src/app/user/profile/styles/user-profile.shell.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserProfileStylesUserProfileShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.user-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.user-name > app-text-shell {\n  --text-shell-line-height: 20px;\n  max-width: 50%;\n}\n\n.user-name > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-title > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n}\n\n.user-title > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.user-membership > app-text-shell {\n  --text-shell-line-color: rgba(var(--ion-color-secondary-rgb), 0.4);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.user-membership > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.stat-value > app-text-shell {\n  --text-shell-line-height: 18px;\n  max-width: 50%;\n  margin: 0px auto;\n}\n\n.stat-value > app-text-shell.text-loaded {\n  max-width: unset;\n  margin: initial;\n}\n\n.user-description > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.friend-picture {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n\n.friend-name > app-text-shell {\n  --text-shell-line-height: 14px;\n}\n\napp-image-shell.user-photo-image {\n  --image-shell-border-radius: var(--page-border-radius);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5zaGVsbC5zY3NzIiwic3JjL2FwcC91c2VyL3Byb2ZpbGUvc3R5bGVzL3VzZXItcHJvZmlsZS5zaGVsbC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0RBQUE7QUNDRjs7QURFQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBRENFO0VBQ0UsZ0JBQUE7QUNDSjs7QURHQTtFQUNFLDhCQUFBO0VBQ0EsY0FBQTtBQ0FGOztBREVFO0VBQ0UsZ0JBQUE7QUNBSjs7QURJQTtFQUNFLGtFQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0FDREo7O0FES0E7RUFDRSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0ZGOztBRElFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7O0FETUE7RUFDRSw4QkFBQTtBQ0hGOztBRE1BO0VBQ0Usc0RBQUE7QUNIRjs7QURNQTtFQUNFLDhCQUFBO0FDSEY7O0FETUE7RUFDRSxzREFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvdXNlci9wcm9maWxlL3N0eWxlcy91c2VyLXByb2ZpbGUuc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC51c2VyLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1heC13aWR0aDogNTAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gIH1cbn1cblxuLnVzZXItdGl0bGUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTZweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiB1bnNldDtcbiAgfVxufVxuXG4udXNlci1tZW1iZXJzaGlwID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuNCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5zdGF0LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgbWFyZ2luOiBpbml0aWFsO1xuICB9XG59XG5cbi51c2VyLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC5mcmllbmQtcGljdHVyZSB7XG4gIC0taW1hZ2Utc2hlbGwtYm9yZGVyLXJhZGl1czogdmFyKC0tcGFnZS1ib3JkZXItcmFkaXVzKTtcbn1cblxuLmZyaWVuZC1uYW1lID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbmFwcC1pbWFnZS1zaGVsbC51c2VyLXBob3RvLWltYWdlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuIiwiYXBwLWltYWdlLXNoZWxsLnVzZXItaW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59XG5cbi51c2VyLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMjBweDtcbiAgbWF4LXdpZHRoOiA1MCU7XG59XG4udXNlci1uYW1lID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4udXNlci10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbn1cbi51c2VyLXRpdGxlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4udXNlci1tZW1iZXJzaGlwID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuNCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xufVxuLnVzZXItbWVtYmVyc2hpcCA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5zdGF0LXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE4cHg7XG4gIG1heC13aWR0aDogNTAlO1xuICBtYXJnaW46IDBweCBhdXRvO1xufVxuLnN0YXQtdmFsdWUgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG4gIG1hcmdpbjogaW5pdGlhbDtcbn1cblxuLnVzZXItZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLmZyaWVuZC1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1ib3JkZXItcmFkaXVzOiB2YXIoLS1wYWdlLWJvcmRlci1yYWRpdXMpO1xufVxuXG4uZnJpZW5kLW5hbWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuYXBwLWltYWdlLXNoZWxsLnVzZXItcGhvdG8taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWJvcmRlci1yYWRpdXM6IHZhcigtLXBhZ2UtYm9yZGVyLXJhZGl1cyk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/user/profile/user-profile.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/user/profile/user-profile.module.ts ***!
    \*****************************************************/

  /*! exports provided: UserProfilePageModule */

  /***/
  function srcAppUserProfileUserProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function () {
      return UserProfilePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-profile.page */
    "./src/app/user/profile/user-profile.page.ts");
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");
    /* harmony import */


    var _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-profile.resolver */
    "./src/app/user/profile/user-profile.resolver.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _language_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../language/language.service */
    "./src/app/language/language.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");

    var routes = [{
      path: '',
      component: _user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"],
      resolve: {
        data: _user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__["UserProfileResolver"]
      }
    }];

    var UserProfilePageModule = function UserProfilePageModule() {
      _classCallCheck(this, UserProfilePageModule);
    };

    UserProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslateModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_6__["UserProfilePage"]],
      providers: [_user_profile_resolver__WEBPACK_IMPORTED_MODULE_8__["UserProfileResolver"], _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"], _language_language_service__WEBPACK_IMPORTED_MODULE_10__["LanguageService"]]
    })], UserProfilePageModule);
    /***/
  },

  /***/
  "./src/app/user/profile/user-profile.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/user/profile/user-profile.page.ts ***!
    \***************************************************/

  /*! exports provided: UserProfilePage */

  /***/
  function srcAppUserProfileUserProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfilePage", function () {
      return UserProfilePage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/ngx/index.js");
    /* harmony import */


    var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/image-picker/ngx */
    "./node_modules/@ionic-native/image-picker/ngx/index.js");
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/google-maps */
    "./node_modules/@ionic-native/google-maps/index.js");
    /* harmony import */


    var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/native-geocoder/ngx */
    "./node_modules/@ionic-native/native-geocoder/ngx/index.js");
    /* harmony import */


    var _language_language_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../language/language.service */
    "./src/app/language/language.service.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_11___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var firebase_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! firebase/auth */
    "./node_modules/firebase/auth/dist/index.esm.js");
    /* harmony import */


    var firebase_database__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! firebase/database */
    "./node_modules/firebase/database/dist/index.esm.js");
    /* harmony import */


    var _hoa_store_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../hoa-store.service */
    "./src/app/hoa-store.service.ts");

    var UserProfilePage =
    /*#__PURE__*/
    function () {
      function UserProfilePage(route, translate, languageService, alertController, router, store, toast, imagePicker, geolocation, gmaps, geocoder, nativeG) {
        _classCallCheck(this, UserProfilePage);

        this.route = route;
        this.translate = translate;
        this.languageService = languageService;
        this.alertController = alertController;
        this.router = router;
        this.store = store;
        this.toast = toast;
        this.imagePicker = imagePicker;
        this.geolocation = geolocation;
        this.gmaps = gmaps;
        this.geocoder = geocoder;
        this.nativeG = nativeG; //   profile: UserProfileModel;

        this.profile = {};
        this.available_languages = [];
        this.dependents = [];
        this.dependentsKeys = [];
        this.visitors = [];
        this.visitorsKeys = [];
        this.segment = 'visitors';
        this.dependentOn = '';
        this.address = ''; //   this.role = window.localStorage.getItem('hoa-role');
        //   this.uid = window.localStorage.getItem('hoa-uid');

        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
        this.getProfile(); //   this.getLocation();
      }

      _createClass(UserProfilePage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid');
          this.getProfile();
          this.getTranslations();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid');
          this.getProfile();
          this.getTranslations(); //     this.route.data.subscribe((resolvedRouteData) => {
          //       const profileDataStore = resolvedRouteData['data'];
          //       profileDataStore.state.subscribe(
          //         (state) => {
          //           this.profile = state;
          //           // get translations for this page to use in the Language Chooser Alert
          //           this.getTranslations();
          //           this.translate.onLangChange.subscribe(() => {
          //             this.getTranslations();
          //           });
          //         },
          //         (error) => {}
          //       );
          //     },
          //     (error) => {});
        }
      }, {
        key: "addProfileImg",
        value: function addProfileImg() {
          var _this2 = this;

          //   UPLOAD PROFILE PICTURE USING IMAGEPICKER
          var options = {
            allow_video: false,
            maximumImagesCount: 1,
            outputType: 1
          };
          this.imagePicker.getPictures(options).then(function (result) {
            _this2.toast.show('Uploading Profile Image', 'short', 'bottom');

            var uploadTask = firebase_app__WEBPACK_IMPORTED_MODULE_11__["storage"]().ref("".concat(_this2.role, "/").concat(_this2.uid)).child('profilePic').putString(result);
            uploadTask.on('state_changed', function (snapshot) {
              // Observe state change events such as progress, pause, and resume
              // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
              var progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
              console.log('Upload is ' + progress + '% done');

              switch (snapshot.state) {
                case firebase_app__WEBPACK_IMPORTED_MODULE_11__["storage"].TaskState.PAUSED:
                  // or 'paused'
                  console.log('Upload is paused');
                  break;

                case firebase_app__WEBPACK_IMPORTED_MODULE_11__["storage"].TaskState.RUNNING:
                  // or 'running'
                  console.log('Upload is running');
                  break;
              }
            }, function (err) {
              // Handle unsuccessful uploads
              _this2.toast.show(err.message, 'long', 'bottom');
            }, function () {
              // Handle successful uploads on complete
              // For instance, get the download URL: https://firebasestorage.googleapis.com/...
              uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                // SET USER'S PROFILE PIC
                firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref("".concat(_this2.role, "/").concat(_this2.uid)).child('profilePic').set(downloadURL);
                console.log('File available at', downloadURL);

                _this2.toast.show('Profile Image changed', 'short', 'bottom');
              });
            });
          }, function (err) {
            _this2.toast.show(err.message, 'long', 'bottom');
          }).catch(function (err) {
            _this2.toast.show(err.message, 'long', 'bottom');
          });
        }
      }, {
        key: "editProfile",
        value: function editProfile() {
          // ROUTE USER TO UPDATE-PROFILE PAGE
          this.router.navigate(['update-profile']);
        }
      }, {
        key: "getLocation",
        value: function getLocation() {
          var _this3 = this;

          // GET USER'S LOCATION AND REVERSE GEOCODE TO GET ADDRESS
          this.geolocation.getCurrentPosition().then(function (pos) {
            var lat = pos.coords.latitude;
            var lng = pos.coords.longitude;
            var resultArray;
            var options = {
              useLocale: true,
              maxResults: 5
            };

            _this3.nativeG.reverseGeocode(lat, lng, options).then(function (result) {
              resultArray = result[0];
              _this3.address = result[0].subLocality;

              _this3.showToast('Location Retrieved', '2000', 'bottom');
            }).catch(function (err) {
              _this3.showToast(err.message, '4000', 'bottom');
            }); // const request: GeocoderRequest = {
            //       position: {lat: lat, lng: lng}
            // };
            // this.geocoder.geocode(request).then((res: BaseArrayClass<GeocoderResult[]>) => {
            //       this.showToast('Got BaseArrayClass<GeocoderResult[]>', '2000', 'bottom');
            //       res.one('finish').then(() => {
            //             this.showToast('finished', '2000', 'bottom');
            //             resultArray = res.getArray();
            //             this.address = resultArray[0].formatted_address;
            //             console.log(resultArray);
            //             this.showToast(resultArray[0].join(','), '10000', 'top');
            //             this.showToast('Address Retrieved', '2000', 'bottom');
            //       });
            // });

          }).catch(function (err) {
            _this3.showToast(err.message, '4000', 'bottom');
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this4 = this;

          var role, uid;
          role = this.store.getItem('hoa-role');
          uid = this.store.getItem('hoa-uid');
          firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref(role).child(uid).once('value', function (snapshot) {
            _this4.profile = snapshot.val();
            _this4.profilePic = snapshot.val().profilePic || 'https://picsum.photos/200';
            _this4.address = snapshot.val().address;
            _this4.visitors = [];
            _this4.dependents = []; // GET ESTATE NAME

            firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref('Estates').child(snapshot.val().estateUID).once('value', function (estate) {
              _this4.estateName = estate.val().name || '';
            }); // GET DEPENDENT ON IF ROLE === DEPENDENT

            if (role === 'dependent') {
              _this4.getDependentOn();
            } // GET VISITORS


            for (var key in snapshot.val().visitors) {
              if (snapshot.val().visitors.hasOwnProperty(key)) {
                var visitor = snapshot.val().visitors[key];

                _this4.visitorsKeys.push(key);

                _this4.visitors.push(visitor); // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
                //       this.visitors.push(snap.val());
                // });

              }
            } // GET DEPENDENTS


            for (var _key in snapshot.val().dependents) {
              if (snapshot.val().dependents.hasOwnProperty(_key)) {
                var dependent = snapshot.val().dependents[_key];

                _this4.dependentsKeys.push(_key);

                _this4.dependents.push(dependent); // firebase.database().ref(`${role}/${uid}/visitors`).child(key).on('value', snap => {
                //       this.visitors.push(snap.val());
                // });

              }
            }
          }).then(function () {
            console.log('Profile retrieved successfully');
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "getDependentOn",
        value: function getDependentOn() {
          var _this5 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_11__["database"]().ref("resident/".concat(this.profile.dependentOn)).once('value', function (snapshot) {
            console.log('Retrieved dependentOn');
            _this5.dependentOn = snapshot.val();
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "getVisitors",
        value: function getVisitors() {}
      }, {
        key: "logOut",
        value: function logOut() {
          this.store.clearStore();
          this.showToast('Log out successful', '3000', 'bottom');
          this.router.navigate(['walkthrough']);
        }
      }, {
        key: "toBookGuestPage",
        value: function toBookGuestPage() {
          this.router.navigate(['book-guest']);
        }
      }, {
        key: "toCreateDependent",
        value: function toCreateDependent() {
          this.router.navigate(['add-dependent']);
        }
      }, {
        key: "showToast",
        value: function showToast(msg, dur, pos) {
          this.toast.show(msg, dur, pos).subscribe(function (toast) {
            console.log(toast);
          });
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {//   console.log(ev);
          //   this.segment = ev;
        }
      }, {
        key: "viewVisitor",
        value: function viewVisitor(i) {
          console.log(this.visitorsKeys[i]);
          this.router.navigate(['details', this.visitorsKeys[i]]);
        }
      }, {
        key: "viewDependent",
        value: function viewDependent(i) {
          console.log(this.dependentsKeys[i]);
          this.router.navigate(['dependent-details', this.dependentsKeys[i]]);
        }
      }, {
        key: "ngViewWillEnter",
        value: function ngViewWillEnter() {
          this.getProfile();
        }
      }, {
        key: "getTranslations",
        value: function getTranslations() {
          var _this6 = this;

          // get translations for this page to use in the Language Chooser Alert
          this.translate.getTranslation(this.translate.currentLang).subscribe(function (translations) {
            _this6.translations = translations;
          });
        }
      }, {
        key: "openLanguageChooser",
        value: function openLanguageChooser() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this7 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.available_languages = this.languageService.getLanguages().map(function (item) {
                      return {
                        name: item.name,
                        type: 'radio',
                        label: item.name,
                        value: item.code,
                        checked: item.code === _this7.translate.currentLang
                      };
                    });
                    _context.next = 3;
                    return this.alertController.create({
                      header: this.translations.SELECT_LANGUAGE,
                      inputs: this.available_languages,
                      cssClass: 'language-alert',
                      buttons: [{
                        text: this.translations.CANCEL,
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler() {}
                      }, {
                        text: this.translations.OK,
                        handler: function handler(data) {
                          if (data) {
                            _this7.translate.use(data);
                          }
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    _context.next = 6;
                    return alert.present();

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.profile && this.profile.isShell ? true : false;
        }
      }]);

      return UserProfilePage;
    }();

    UserProfilePage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"]
      }, {
        type: _language_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_14__["HoaStoreService"]
      }, {
        type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"]
      }, {
        type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"]
      }, {
        type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"]
      }, {
        type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMaps"]
      }, {
        type: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["Geocoder"]
      }, {
        type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UserProfilePage.prototype, "isShell", null);
    UserProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/profile/user-profile.page.html")).default,
      providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_14__["HoaStoreService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/user-profile.page.scss */
      "./src/app/user/profile/styles/user-profile.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/user-profile.shell.scss */
      "./src/app/user/profile/styles/user-profile.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/user-profile.ios.scss */
      "./src/app/user/profile/styles/user-profile.ios.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/user-profile.md.scss */
      "./src/app/user/profile/styles/user-profile.md.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"], _language_language_service__WEBPACK_IMPORTED_MODULE_9__["LanguageService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _hoa_store_service__WEBPACK_IMPORTED_MODULE_14__["HoaStoreService"], _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_4__["Toast"], _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["Geolocation"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMaps"], _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["Geocoder"], _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"]])], UserProfilePage);
    /***/
  },

  /***/
  "./src/app/user/profile/user-profile.resolver.ts":
  /*!*******************************************************!*\
    !*** ./src/app/user/profile/user-profile.resolver.ts ***!
    \*******************************************************/

  /*! exports provided: UserProfileResolver */

  /***/
  function srcAppUserProfileUserProfileResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileResolver", function () {
      return UserProfileResolver;
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


    var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../user.service */
    "./src/app/user/user.service.ts");

    var UserProfileResolver =
    /*#__PURE__*/
    function () {
      function UserProfileResolver(userService) {
        _classCallCheck(this, UserProfileResolver);

        this.userService = userService;
      }

      _createClass(UserProfileResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.userService.getProfileDataSource();
          var dataStore = this.userService.getProfileStore(dataSource);
          return dataStore;
        }
      }]);

      return UserProfileResolver;
    }();

    UserProfileResolver.ctorParameters = function () {
      return [{
        type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }];
    };

    UserProfileResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])], UserProfileResolver);
    /***/
  }
}]);
//# sourceMappingURL=user-profile-user-profile-module-es5.js.map