function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-categories-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCategoriesCategoriesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>\n            {{role | titlecase}} Home\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"categories-content\">\n    <!-- DIV TO SHOW IF isSecurity -->\n    <div id=\"security\" *ngIf='this.role === \"security\"'>\n        <!-- ION-SEARCHBAR -->\n\n        <!-- SHOW A LIST OF ALL VISITORS ORDERED BY BOOKEDAT -->\n        <!-- <ion-list lines='none'>\n                  <ion-item *ngFor=\"let visitor of visitors; let i = index\" (click)=\"viewVisitor(i)\" >\n                        {{visitor.fullname}}\n                  </ion-item>\n            </ion-list> -->\n        <ion-row class=\"user-stats-section\">\n            <!-- <ion-col class=\"user-stats-wrapper\" size=\"4\">\n                <span class=\"stat-value\">\n                  <app-text-shell [data]=\"profile.likes\"></app-text-shell>\n                </span>\n                <span class=\"stat-name\">{{ 'LIKES' | translate }}</span>\n              </ion-col>\n              <ion-col class=\"user-stats-wrapper\" size=\"4\">\n                <span class=\"stat-value\">\n                  <app-text-shell [data]=\"profile.followers\"></app-text-shell>\n                </span>\n                <span class=\"stat-name\">{{ 'FOLLOWERS' | translate }}</span>\n              </ion-col>\n              <ion-col class=\"user-stats-wrapper\" size=\"4\">\n                <span class=\"stat-value\">\n                  <app-text-shell [data]=\"profile.following\"></app-text-shell>\n                </span>\n                <span class=\"stat-name\">{{ 'FOLLOWING' | translate }}</span>\n              </ion-col> -->\n            <ion-segment (ionChange)='segmentChanged($event)' [(ngModel)]=\"segment\">\n                <ion-segment-button value=\"news\">\n                    <ion-label>NEWS</ion-label>\n                </ion-segment-button>\n                <ion-segment-button value=\"visitors\">\n                    <ion-label>VISITORS</ion-label>\n                </ion-segment-button>\n            </ion-segment>\n        </ion-row>\n        <div [ngSwitch]='segment'>\n            <div id=\"news\" *ngSwitchCase=\"'news'\">\n\n                <ion-list lines='full'>\n                    <ion-item id='news-item' *ngFor=\"let news of estateNews; let i = index\" (click)=\"viewNews(i)\">\n                        <ion-row class=\"news-data-row\">\n                            <ion-col size=\"12\">\n                                <h3 class=\"news-title\">\n                                    <app-text-shell [data]=\"news.title\"></app-text-shell>\n                                </h3>\n                                <h5 class=\"news-shortTxt\">\n                                    <app-text-shell [data]=\"news.shortTxt\"></app-text-shell>\n                                </h5>\n                            </ion-col>\n                            <!-- <ion-col class=\"membership-col\">\n                                <span class=\"news-membership\">\n                        <app-text-shell [data]=\"profile.membership\"></app-text-shell>\n                      </span>\n                            </ion-col> -->\n                        </ion-row>\n                    </ion-item>\n                </ion-list>\n            </div>\n            <div id=\"visitors\" *ngSwitchCase=\"'visitors'\">\n\n                <ion-list lines='full'>\n                    <ion-item id='news-item' *ngFor=\"let visitor of visitors; let i = index\" (click)=\"viewVisitor(i)\">\n                        <!-- <ion-text> -->\n                        {{visitor.fullname}}\n                        <!-- </ion-text> -->\n                        <br>\n                        <!-- <ion-text>-->\n                        <!-- <small> \n                        <ion-text color='success'> -->\n                        {{visitor.bookedAt.split('(')[0]}}\n                        <!-- </ion-text>\n                        </small> -->\n                        <!-- </ion-text> -->\n                    </ion-item>\n                </ion-list>\n            </div>\n        </div>\n    </div>\n\n    <!-- DIV TO SHOW IF isResident || isDependent -->\n    <div id=\"resident\" *ngIf='this.role === \"resident\" || this.role === \"dependent\"'>\n        <!-- SHOW ESTATE NEWS ADDED BY HOA FOR RESIDENT'S ESTATE -->\n        <ion-list lines='full'>\n            <ion-item id='news-item' *ngFor=\"let news of estateNews; let i = index\" (click)=\"viewNews(i)\">\n                <!-- {{news.title}} <br> {{news.shortTxt}} -->\n                <ion-row class=\"news-data-row\">\n                    <ion-col size=\"12\">\n                        <h3 class=\"news-title\">\n                            <app-text-shell [data]=\"news.title\"></app-text-shell>\n                        </h3>\n                        <h5 class=\"news-shortTxt\">\n                            <app-text-shell [data]=\"news.shortTxt\"></app-text-shell>\n                        </h5>\n                    </ion-col>\n                    <!-- <ion-col class=\"membership-col\">\n                      <span class=\"news-membership\">\n              <app-text-shell [data]=\"profile.membership\"></app-text-shell>\n            </span>\n                  </ion-col> -->\n                </ion-row>\n            </ion-item>\n        </ion-list>\n    </div>\n    <!-- <ion-row class=\"categories-list\">\n    <ion-col class=\"category-item travel-category\" size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/travel.png'\">\n        <app-aspect-ratio [ratio]=\"{w:75, h:49}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/travel']\">\n            <h2 class=\"category-title\">Travel</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item fashion-category\" size=\"6\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/fashion.png'\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/fashion']\">\n            <h2 class=\"category-title\">Fashion</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item food-category\" size=\"6\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/food.png'\">\n        <app-aspect-ratio [ratio]=\"{w:1, h:1}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/food']\">\n            <h2 class=\"category-title\">Food</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item deals-category\" size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/deals.png'\">\n        <app-aspect-ratio [ratio]=\"{w:75, h:30}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/deals']\">\n            <h2 class=\"category-title\">Deals</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n    <ion-col class=\"category-item real-estate-category\" size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" class=\"category-cover\" animation=\"spinner\" [src]=\"'./assets/sample-images/categories/real-estate.png'\">\n        <app-aspect-ratio [ratio]=\"{w:75, h:30}\">\n          <a class=\"category-anchor\" [routerLink]=\"['/app/categories/real-estate']\">\n            <h2 class=\"category-title\">Real Estate</h2>\n          </a>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row> -->\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/categories/categories.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/categories/categories.module.ts ***!
    \*************************************************/

  /*! exports provided: CategoriesPageModule */

  /***/
  function srcAppCategoriesCategoriesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function () {
      return CategoriesPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _categories_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./categories.page */
    "./src/app/categories/categories.page.ts");

    var categoriesRoutes = [{
      path: '',
      component: _categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"]
    }];

    var CategoriesPageModule = function CategoriesPageModule() {
      _classCallCheck(this, CategoriesPageModule);
    };

    CategoriesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(categoriesRoutes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_categories_page__WEBPACK_IMPORTED_MODULE_7__["CategoriesPage"]]
    })], CategoriesPageModule);
    /***/
  },

  /***/
  "./src/app/categories/categories.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/categories/categories.page.ts ***!
    \***********************************************/

  /*! exports provided: CategoriesPage */

  /***/
  function srcAppCategoriesCategoriesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoriesPage", function () {
      return CategoriesPage;
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

    var CategoriesPage =
    /*#__PURE__*/
    function () {
      function CategoriesPage(router, store) {
        _classCallCheck(this, CategoriesPage);

        this.router = router;
        this.store = store;
        this.segment = 'visitors';
        this.role = '';
        this.uid = '';
        this.visitors = [];
        this.visitorsKeys = [];
        this.estateNews = [];
        this.estateNewsKeys = [];
        this.profile = '';
        this.dependentOn = '';
        this.role = this.store.getItem('hoa-role');
        this.uid = this.store.getItem('hoa-uid');
        this.getProfile();
        this.getVisitors();
        this.getNews();
      }

      _createClass(CategoriesPage, [{
        key: "getVisitors",
        value: function getVisitors() {
          var _this = this;

          // GET GENERAL VISITORS NODE FOR SECURITY PERSONNEL
          firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref('Visitors').orderByChild('bookedAt').once('value', function (snapshot) {
            console.log('Ordered Visitors', snapshot.val());
            _this.visitors = [];

            for (var key in snapshot.val()) {
              if (snapshot.val().hasOwnProperty(key)) {
                var visitor = snapshot.val()[key];

                _this.visitorsKeys.push(key);

                _this.visitors.push(visitor);
              }
            }
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "getNews",
        value: function getNews() {
          var _this2 = this;

          // GET NEWS OF THE ESTATE THE USER BELONGS TO
          console.log('Role', this.role);
          console.log('Uid', this.uid);

          if (this.role === 'resident' || this.role === 'security') {
            firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("".concat(this.role, "/").concat(this.uid)).child('estateName').once('value', function (snapshot) {
              var estateName = snapshot.val();
              console.log('Estate', snapshot.val());
              firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("Estates/".concat(snapshot.val())).child('news').orderByChild('postedAt').on('value', function (snap) {
                for (var key in snap.val()) {
                  if (snap.val().hasOwnProperty(key)) {
                    var news = snap.val()[key];

                    _this2.estateNewsKeys.push(key);

                    _this2.estateNews.push(news);
                  }
                }
              }, function (err) {
                console.error(err.message);
              });
            }).catch(function (err) {
              console.error(err.message);
            });
          }
        }
      }, {
        key: "getDependentOn",
        value: function getDependentOn() {
          var _this3 = this;

          console.log('Profile', this.profile);
          firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("resident/".concat(this.profile.dependentOn)).once('value', function (snapshot) {
            console.log('Retrieved dependentOn');
            _this3.dependentOn = snapshot.val(); // GET NEWS FOR DEPENDENTS

            if (_this3.role === 'dependent') {
              console.log('DependentOn', snapshot.val());
              firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("resident/".concat(snapshot.val().uid)).child('estateName').once('value', function (snapshot) {
                var estateName = snapshot.val();
                console.log('Estate', snapshot.val());
                firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("Estates/".concat(estateName)).child('news').orderByChild('postedAt').on('value', function (snap) {
                  for (var key in snap.val()) {
                    if (snap.val().hasOwnProperty(key)) {
                      var news = snap.val()[key];

                      _this3.estateNewsKeys.push(key);

                      _this3.estateNews.push(news);
                    }
                  }

                  console.log('News', _this3.estateNews);
                }, function (err) {
                  console.error(err.message);
                });
              }).catch(function (err) {
                console.error(err.message);
              });
            }
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this4 = this;

          firebase_app__WEBPACK_IMPORTED_MODULE_4__["database"]().ref("".concat(this.role, "/").concat(this.uid)).once('value', function (snapshot) {
            _this4.profile = snapshot.val();

            if (_this4.role === 'dependent') {
              _this4.getDependentOn();
            }
          }).catch(function (err) {
            console.error(err.message);
          });
        }
      }, {
        key: "viewVisitor",
        value: function viewVisitor(i) {
          this.router.navigate(['details', this.visitorsKeys[i]]);
        }
      }, {
        key: "viewNews",
        value: function viewNews(i) {// TO NEWS DETAILS PAGE
        }
      }, {
        key: "segmentChanged",
        value: function segmentChanged(ev) {
          console.log('Segment Changed');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.role = this.store.getItem('hoa-role');
          this.uid = this.store.getItem('hoa-uid');
        }
      }]);

      return CategoriesPage;
    }();

    CategoriesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]
      }];
    };

    CategoriesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-categories',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./categories.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/categories/categories.page.html")).default,
      providers: [_hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/categories.page.scss */
      "./src/app/categories/styles/categories.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/categories.shell.scss */
      "./src/app/categories/styles/categories.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/categories.responsive.scss */
      "./src/app/categories/styles/categories.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _hoa_store_service__WEBPACK_IMPORTED_MODULE_3__["HoaStoreService"]])], CategoriesPage);
    /***/
  },

  /***/
  "./src/app/categories/styles/categories.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/categories/styles/categories.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesStylesCategoriesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-narrow-margin);\n  --page-categories-gutter: calc(var(--page-margin) / 4);\n  --page-category-background: var(--ion-color-medium);\n  --page-category-background-rgb: var(--ion-color-medium-rgb);\n}\n\n.categories-list {\n  --ion-grid-column-padding: var(--page-categories-gutter);\n  padding: calc(var(--page-categories-gutter) * 3);\n  height: 100%;\n  align-content: flex-start;\n  overflow: scroll;\n  -ms-overflow-style: none;\n  overflow: -moz-scrollbars-none;\n  scrollbar-width: none;\n}\n\n.categories-list::-webkit-scrollbar {\n  display: none;\n}\n\n.categories-list .category-item .category-anchor {\n  height: 100%;\n  text-decoration: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.categories-list .category-item .category-anchor .category-title {\n  margin: auto;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-size: 18px;\n  letter-spacing: 1px;\n  padding: calc((var(--page-margin) / 4) * 3) var(--page-margin);\n  color: var(--ion-color-lightest);\n  background-color: var(--page-category-background);\n  border-radius: var(--app-fair-radius);\n}\n\n.categories-list #news-item {\n  background: var(--app-background-shade) !important;\n}\n\n.categories-list #news-item .news-data-row {\n  padding-bottom: var(--page-margin);\n  flex-wrap: nowrap;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.categories-list #news-item .news-data-row .news-title {\n  margin: 0px 0px 5px;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n}\n\n.categories-list #news-item .news-data-row .news-shortTxt {\n  margin: 0px;\n  color: var(--ion-color-dark) !important;\n  font-size: 16px !important;\n}\n\n.categories-list #news-item .news-data-row .membership-col {\n  padding-left: var(--page-margin);\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n}\n\n.categories-list #news-item .news-data-row .news-membership {\n  display: block;\n  background-color: var(--ion-color-secondary);\n  color: var(--ion-color-lightest);\n  border-radius: var(--app-narrow-radius);\n  padding: 4px 8px;\n  text-align: center;\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.categories-list .travel-category {\n  --page-category-background: #00AFFF;\n  --page-category-background-rgb: 0, 175, 255;\n}\n\n.categories-list .fashion-category {\n  --page-category-background: #cb328f;\n  --page-category-background-rgb: 203, 50, 143;\n}\n\n.categories-list .food-category {\n  --page-category-background: #ebbb00;\n  --page-category-background-rgb: 235, 187, 0;\n}\n\n.categories-list .deals-category {\n  --page-category-background: #70df70;\n  --page-category-background-rgb: 112, 223, 112;\n}\n\n.categories-list .real-estate-category {\n  --page-category-background: #d9453a;\n  --page-category-background-rgb: 217, 69, 58;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9jYXRlZ29yaWVzL3N0eWxlcy9jYXRlZ29yaWVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCIvVXNlcnMvTXJfRnJvc2gvRGVza3RvcC9TZWN1cmVQYXNzL3NyYy90aGVtZS9taXhpbnMvc2Nyb2xsYmFycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0ksdUNBQUE7RUFDQSxzREFBQTtFQUNBLG1EQUFBO0VBQ0EsMkRBQUE7QUNGSjs7QURNQTtFQUNJLHdEQUFBO0VBQ0EsZ0RBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFRWJGLHdCQUFBO0VBR0EsOEJBQUE7RUFDQSxxQkFBQTtBRFNGOztBQ05FO0VBQ0UsYUFBQTtBRFFKOztBREFRO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsdUJBQUE7VUFBQSwyQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNFWjs7QUREWTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsOERBQUE7RUFDQSxnQ0FBQTtFQUNBLGlEQUFBO0VBQ0EscUNBQUE7QUNHaEI7O0FEQ0k7RUFDSSxrREFBQTtBQ0NSOztBREFRO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNFWjs7QUREWTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDR2hCOztBRERZO0VBQ0ksV0FBQTtFQUNBLHVDQUFBO0VBQ0EsMEJBQUE7QUNHaEI7O0FERFk7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtBQ0doQjs7QUREWTtFQUNJLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR2hCOztBRENJO0VBQ0ksbUNBQUE7RUFDQSwyQ0FBQTtBQ0NSOztBRENJO0VBQ0ksbUNBQUE7RUFDQSw0Q0FBQTtBQ0NSOztBRENJO0VBQ0ksbUNBQUE7RUFDQSwyQ0FBQTtBQ0NSOztBRENJO0VBQ0ksbUNBQUE7RUFDQSw2Q0FBQTtBQ0NSOztBRENJO0VBQ0ksbUNBQUE7RUFDQSwyQ0FBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zL3Njcm9sbGJhcnNcIjtcbi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1uYXJyb3ctbWFyZ2luKTtcbiAgICAtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXI6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gNCk7XG4gICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5jYXRlZ29yaWVzLWxpc3Qge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXIpO1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcikgKiAzKTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIEBpbmNsdWRlIGhpZGUtc2Nyb2xsYmFycygpO1xuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pIC8gNCkgKiAzKSB2YXIoLS1wYWdlLW1hcmdpbik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtZmFpci1yYWRpdXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgICNuZXdzLWl0ZW0ge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSkgIWltcG9ydGFudDtcbiAgICAgICAgLm5ld3MtZGF0YS1yb3cge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLm5ld3MtdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXdzLXNob3J0VHh0IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVtYmVyc2hpcC1jb2wge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5uZXdzLW1lbWJlcnNoaXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudHJhdmVsLWNhdGVnb3J5IHtcbiAgICAgICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICMwMEFGRkY7XG4gICAgICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMCwgMTc1LCAyNTU7XG4gICAgfVxuICAgIC5mYXNoaW9uLWNhdGVnb3J5IHtcbiAgICAgICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNjYjMyOGY7XG4gICAgICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjAzLCA1MCwgMTQzO1xuICAgIH1cbiAgICAuZm9vZC1jYXRlZ29yeSB7XG4gICAgICAgIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjZWJiYjAwO1xuICAgICAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIzNSwgMTg3LCAwO1xuICAgIH1cbiAgICAuZGVhbHMtY2F0ZWdvcnkge1xuICAgICAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzcwZGY3MDtcbiAgICAgICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAxMTIsIDIyMywgMTEyO1xuICAgIH1cbiAgICAucmVhbC1lc3RhdGUtY2F0ZWdvcnkge1xuICAgICAgICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2Q5NDUzYTtcbiAgICAgICAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMTcsIDY5LCA1ODtcbiAgICB9XG59IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtbmFycm93LW1hcmdpbik7XG4gIC0tcGFnZS1jYXRlZ29yaWVzLWd1dHRlcjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KTtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKTtcbn1cblxuLmNhdGVnb3JpZXMtbGlzdCB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IHZhcigtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXIpO1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtY2F0ZWdvcmllcy1ndXR0ZXIpICogMyk7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbn1cbi5jYXRlZ29yaWVzLWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdGVnb3J5LWFuY2hvciB7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmNhdGVnb3JpZXMtbGlzdCAuY2F0ZWdvcnktaXRlbSAuY2F0ZWdvcnktYW5jaG9yIC5jYXRlZ29yeS10aXRsZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICBwYWRkaW5nOiBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgLyA0KSAqIDMpIHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1mYWlyLXJhZGl1cyk7XG59XG4uY2F0ZWdvcmllcy1saXN0ICNuZXdzLWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSkgIWltcG9ydGFudDtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgI25ld3MtaXRlbSAubmV3cy1kYXRhLXJvdyB7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uY2F0ZWdvcmllcy1saXN0ICNuZXdzLWl0ZW0gLm5ld3MtZGF0YS1yb3cgLm5ld3MtdGl0bGUge1xuICBtYXJnaW46IDBweCAwcHggNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgI25ld3MtaXRlbSAubmV3cy1kYXRhLXJvdyAubmV3cy1zaG9ydFR4dCB7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xufVxuLmNhdGVnb3JpZXMtbGlzdCAjbmV3cy1pdGVtIC5uZXdzLWRhdGEtcm93IC5tZW1iZXJzaGlwLWNvbCB7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICBmbGV4LWdyb3c6IDA7XG59XG4uY2F0ZWdvcmllcy1saXN0ICNuZXdzLWl0ZW0gLm5ld3MtZGF0YS1yb3cgLm5ld3MtbWVtYmVyc2hpcCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY2F0ZWdvcmllcy1saXN0IC50cmF2ZWwtY2F0ZWdvcnkge1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogIzAwQUZGRjtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAwLCAxNzUsIDI1NTtcbn1cbi5jYXRlZ29yaWVzLWxpc3QgLmZhc2hpb24tY2F0ZWdvcnkge1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZDogI2NiMzI4ZjtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiOiAyMDMsIDUwLCAxNDM7XG59XG4uY2F0ZWdvcmllcy1saXN0IC5mb29kLWNhdGVnb3J5IHtcbiAgLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQ6ICNlYmJiMDA7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kLXJnYjogMjM1LCAxODcsIDA7XG59XG4uY2F0ZWdvcmllcy1saXN0IC5kZWFscy1jYXRlZ29yeSB7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjNzBkZjcwO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDExMiwgMjIzLCAxMTI7XG59XG4uY2F0ZWdvcmllcy1saXN0IC5yZWFsLWVzdGF0ZS1jYXRlZ29yeSB7XG4gIC0tcGFnZS1jYXRlZ29yeS1iYWNrZ3JvdW5kOiAjZDk0NTNhO1xuICAtLXBhZ2UtY2F0ZWdvcnktYmFja2dyb3VuZC1yZ2I6IDIxNywgNjksIDU4O1xufSIsIi8vIEhpZGUgc2Nyb2xsYmFyczogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4OTk0ODM3LzExMTY5NTlcbkBtaXhpbiBoaWRlLXNjcm9sbGJhcnMoKSB7XG4gIC8vIElFIDEwK1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG5cbiAgLy8gRmlyZWZveFxuICBvdmVyZmxvdzogLW1vei1zY3JvbGxiYXJzLW5vbmU7XG4gIHNjcm9sbGJhci13aWR0aDogbm9uZTtcblxuICAvLyBTYWZhcmkgYW5kIENocm9tZVxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/categories/styles/categories.responsive.scss":
  /*!**************************************************************!*\
    !*** ./src/app/categories/styles/categories.responsive.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesStylesCategoriesResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 16px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .categories-list .category-item .category-anchor .category-title {\n    font-size: 20px;\n    padding: var(--page-margin) calc((var(--page-margin) * 3) / 2);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9jYXRlZ29yaWVzL3N0eWxlcy9jYXRlZ29yaWVzLnJlc3BvbnNpdmUuc2NzcyIsInNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5yZXNwb25zaXZlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsNENBQUE7QUFDQTtFQWFRO0lBQ0UsZUFBQTtFQ2hCUjtBQUNGO0FEc0JBLHFEQUFBO0FBY0Esa0RBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VDNUNSO0FBQ0Y7QURrREEscUNBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VDM0RSO0FBQ0Y7QURpRUEsaURBQUE7QUFDQTtFQVlRO0lBQ0UsZUFBQTtJQUNBLDhEQUFBO0VDMUVSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jYXRlZ29yaWVzL3N0eWxlcy9jYXRlZ29yaWVzLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuXG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA2NjdweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmNhdGVnb3JpZXMtbGlzdCB7XG4gICAgLmNhdGVnb3J5LWl0ZW0ge1xuICAgICAgLmNhdGVnb3J5LWFuY2hvciB7XG4gICAgICAgIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpIDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5jYXRlZ29yaWVzLWxpc3Qge1xuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlblxuICBhbmQgKG1pbi1kZXZpY2Utd2lkdGggOiA0MTRweClcbiAgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzM2cHgpXG4gIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5jYXRlZ29yaWVzLWxpc3Qge1xuICAgIC5jYXRlZ29yeS1pdGVtIHtcbiAgICAgIC5jYXRlZ29yeS1hbmNob3Ige1xuICAgICAgICAuY2F0ZWdvcnktdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKSA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA0IGFuZCA0UyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDIvMykge1xuICAuY2F0ZWdvcmllcy1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXRlZ29yeS1hbmNob3IgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzNzVweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA2NjdweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcbiAgLmNhdGVnb3JpZXMtbGlzdCAuY2F0ZWdvcnktaXRlbSAuY2F0ZWdvcnktYW5jaG9yIC5jYXRlZ29yeS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKSBjYWxjKCh2YXIoLS1wYWdlLW1hcmdpbikgKiAzKSAvIDIpO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5jYXRlZ29yaWVzLWxpc3QgLmNhdGVnb3J5LWl0ZW0gLmNhdGVnb3J5LWFuY2hvciAuY2F0ZWdvcnktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbikgY2FsYygodmFyKC0tcGFnZS1tYXJnaW4pICogMykgLyAyKTtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYrLCA3KyBhbmQgOCsgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQxNHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDczNnB4KSBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMykge1xuICAuY2F0ZWdvcmllcy1saXN0IC5jYXRlZ29yeS1pdGVtIC5jYXRlZ29yeS1hbmNob3IgLmNhdGVnb3J5LXRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pIGNhbGMoKHZhcigtLXBhZ2UtbWFyZ2luKSAqIDMpIC8gMik7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/categories/styles/categories.shell.scss":
  /*!*********************************************************!*\
    !*** ./src/app/categories/styles/categories.shell.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCategoriesStylesCategoriesShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.category-cover {\n  --image-shell-loading-background: rgba(var(--page-category-background-rgb), .25);\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n\n.news-title > app-text-shell {\n  --text-shell-line-height: 20px;\n  max-width: 50%;\n}\n\n.news-title > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.news-shortTxt > app-text-shell {\n  --text-shell-line-height: 16px;\n  max-width: 70%;\n  font-size: 16px !important;\n  color: var(--ion-color-medium) !important;\n}\n\n.news-shortTxt > app-text-shell.text-loaded {\n  max-width: unset;\n}\n\n.news-membership > app-text-shell {\n  --text-shell-line-color: rgba(var(--ion-color-secondary-rgb), 0.4);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.news-membership > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9jYXRlZ29yaWVzL3N0eWxlcy9jYXRlZ29yaWVzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL2NhdGVnb3JpZXMvc3R5bGVzL2NhdGVnb3JpZXMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdGQUFBO0VBQ0Esc0RBQUE7QUNDSjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREFJO0VBQ0ksZ0JBQUE7QUNFUjs7QURFQTtFQUNJLDhCQUFBO0VBQ0EsY0FBQTtFQUNBLDBCQUFBO0VBQ0EseUNBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0FDRVI7O0FERUE7RUFDSSxrRUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtBQ0VSIiwiZmlsZSI6InNyYy9hcHAvY2F0ZWdvcmllcy9zdHlsZXMvY2F0ZWdvcmllcy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYXBwLWltYWdlLXNoZWxsLmNhdGVnb3J5LWNvdmVyIHtcbiAgICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiKSwgLjI1KTtcbiAgICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodGVzdCk7XG59XG5cbi5uZXdzLXRpdGxlPmFwcC10ZXh0LXNoZWxsIHtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MCU7XG4gICAgJi50ZXh0LWxvYWRlZCB7XG4gICAgICAgIG1heC13aWR0aDogdW5zZXQ7XG4gICAgfVxufVxuXG4ubmV3cy1zaG9ydFR4dD5hcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgIG1heC13aWR0aDogNzAlO1xuICAgIGZvbnQtc2l6ZTogMTZweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSAhaW1wb3J0YW50O1xuICAgICYudGV4dC1sb2FkZWQge1xuICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgIH1cbn1cblxuLm5ld3MtbWVtYmVyc2hpcD5hcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IpLCAwLjQpO1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgICBtaW4td2lkdGg6IDMwcHg7XG4gICAgJi50ZXh0LWxvYWRlZCB7XG4gICAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgIH1cbn0iLCJhcHAtaW1hZ2Utc2hlbGwuY2F0ZWdvcnktY292ZXIge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1wYWdlLWNhdGVnb3J5LWJhY2tncm91bmQtcmdiKSwgLjI1KTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHRlc3QpO1xufVxuXG4ubmV3cy10aXRsZSA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cbi5uZXdzLXRpdGxlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IHVuc2V0O1xufVxuXG4ubmV3cy1zaG9ydFR4dCA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNnB4O1xuICBtYXgtd2lkdGg6IDcwJTtcbiAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKSAhaW1wb3J0YW50O1xufVxuLm5ld3Mtc2hvcnRUeHQgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogdW5zZXQ7XG59XG5cbi5uZXdzLW1lbWJlcnNoaXAgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMC40KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG59XG4ubmV3cy1tZW1iZXJzaGlwID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn0iXX0= */";
    /***/
  }
}]);
//# sourceMappingURL=categories-categories-module-es5.js.map