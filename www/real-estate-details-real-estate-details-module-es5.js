function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["real-estate-details-real-estate-details-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/details/real-estate-details.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/details/real-estate-details.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRealEstateDetailsRealEstateDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"app/categories/real-estate\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Real Estate Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"real-estate-details-content\">\n  <ion-row class=\"image-row\">\n    <ion-col size=\"12\">\n      <app-image-shell [mode]=\"'cover'\" animation=\"spinner\" class=\"details-picture\" [src]=\"details.picture\">\n        <app-aspect-ratio [ratio]=\"{w:64, h:40}\">\n          <ion-icon class=\"bookmark-icon\" name=\"heart\"></ion-icon>\n        </app-aspect-ratio>\n      </app-image-shell>\n    </ion-col>\n  </ion-row>\n  <ion-row class=\"description-row\">\n    <ion-col size=\"12\">\n      <h4 class=\"details-price\">\n        <span class=\"price-icon\">$</span>\n        <app-text-shell [data]=\"details.price\"></app-text-shell>\n      </h4>\n      <p class=\"details-address\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.address\"></app-text-shell>\n      </p>\n      <p class=\"details-address\">\n        <app-text-shell animation=\"bouncing\" [data]=\"details.location?.city\"></app-text-shell>\n      </p>\n    </ion-col>\n    <ion-col size=\"12\">\n      <p class=\"details-description\">\n        <app-text-shell animation=\"bouncing\" lines=\"5\" [data]=\"details.description\"></app-text-shell>\n      </p>\n    </ion-col>\n  </ion-row>\n  <div class=\"accommodations-wrapper\">\n    <h3 class=\"detail-title\">About the space</h3>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-estate/guests.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Guests</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.guests\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-estate/bedrooms.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Bedrooms</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.bedrooms\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-estate/bathroom.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Bathrooms</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.bathrooms\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"accommodation-row\">\n      <ion-col class=\"icon-wrapper\">\n        <ion-icon class=\"accommodation-icon\" src=\"./assets/sample-icons/real-estate/patio.svg\"></ion-icon>\n      </ion-col>\n      <ion-col size=\"4\">\n        <span class=\"accommodation-name\">Patio</span>\n      </ion-col>\n      <ion-col size=\"2\">\n        <span class=\"accommodation-value\">\n          <app-text-shell [data]=\"details.accommodations?.patios\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"location-wrapper\">\n    <div class=\"location-header\">\n      <h3 class=\"detail-title\">Location</h3>\n      <span class=\"location-address\">\n        <app-text-shell [data]=\"details.location?.address\"></app-text-shell>\n      </span>\n    </div>\n    <!-- <app-aspect-ratio [ratio]=\"{w: 64, h: 30}\">\n      <app-image-shell [src]=\"'https://maps.googleapis.com/maps/api/staticmap?center=' + details.location?.latlng + '&zoom=15&size=640x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xd9453a%7C' + details.location?.latlng + '&key=YOUR_KEY_HERE'\">\n      </app-image-shell>\n    </app-aspect-ratio> -->\n    <app-aspect-ratio [ratio]=\"{w:64, h:30}\">\n      <app-image-shell class=\"location-image\" animation=\"spinner\" [src]=\"details.location?.mapImage\" [alt]=\"'location map'\"></app-image-shell>\n    </app-aspect-ratio>\n  </div>\n  <div class=\"amenities-wrapper\">\n    <h3 class=\"detail-title\">Amenities</h3>\n    <ion-row class=\"amenities-tags\">\n      <ion-col class=\"tag-wrapper\" *ngFor=\"let amenity of details.amenities\">\n        <span class=\"amenity-tag\">\n          <app-text-shell [data]=\"amenity.name\"></app-text-shell>\n        </span>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div class=\"safety-features-wrapper\">\n    <h3 class=\"detail-title\">Safety Features</h3>\n    <ul class=\"features-list\">\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Smoke Detector'\"></app-text-shell>\n      </li>\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Carbon Monoxide Detector'\"></app-text-shell>\n      </li>\n      <li class=\"feature-item\">\n        <app-text-shell [data]=\"'Security Alarm System'\"></app-text-shell>\n      </li>\n    </ul>\n  </div>\n  <div class=\"availability-wrapper\">\n    <h3 class=\"detail-title\">Availability</h3>\n    <ion-row class=\"availability-row\">\n      <span class=\"availability-description\">\n        <app-text-shell [data]=\"'1 month minimum'\"></app-text-shell>\n      </span>\n      <span class=\"availability-value\">\n        <app-text-shell [data]=\"'Available from June'\"></app-text-shell>\n      </span>\n    </ion-row>\n    <ion-button class=\"book-now-btn\" color=\"dark\" expand=\"block\" fill=\"outline\">BOOK NOW</ion-button>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/real-estate/details/real-estate-details.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/real-estate/details/real-estate-details.module.ts ***!
    \*******************************************************************/

  /*! exports provided: RealEstateDetailsPageModule */

  /***/
  function srcAppRealEstateDetailsRealEstateDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateDetailsPageModule", function () {
      return RealEstateDetailsPageModule;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _real_estate_details_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./real-estate-details.page */
    "./src/app/real-estate/details/real-estate-details.page.ts");
    /* harmony import */


    var _real_estate_details_resolver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./real-estate-details.resolver */
    "./src/app/real-estate/details/real-estate-details.resolver.ts");
    /* harmony import */


    var _real_estate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../real-estate.service */
    "./src/app/real-estate/real-estate.service.ts");

    var routes = [{
      path: '',
      component: _real_estate_details_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateDetailsPage"],
      resolve: {
        data: _real_estate_details_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateDetailsResolver"]
      }
    }];

    var RealEstateDetailsPageModule = function RealEstateDetailsPageModule() {
      _classCallCheck(this, RealEstateDetailsPageModule);
    };

    RealEstateDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      declarations: [_real_estate_details_page__WEBPACK_IMPORTED_MODULE_8__["RealEstateDetailsPage"]],
      providers: [_real_estate_details_resolver__WEBPACK_IMPORTED_MODULE_9__["RealEstateDetailsResolver"], _real_estate_service__WEBPACK_IMPORTED_MODULE_10__["RealEstateService"]]
    })], RealEstateDetailsPageModule);
    /***/
  },

  /***/
  "./src/app/real-estate/details/real-estate-details.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/real-estate/details/real-estate-details.page.ts ***!
    \*****************************************************************/

  /*! exports provided: RealEstateDetailsPage */

  /***/
  function srcAppRealEstateDetailsRealEstateDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateDetailsPage", function () {
      return RealEstateDetailsPage;
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

    var RealEstateDetailsPage =
    /*#__PURE__*/
    function () {
      function RealEstateDetailsPage(route) {
        _classCallCheck(this, RealEstateDetailsPage);

        this.route = route;
      }

      _createClass(RealEstateDetailsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.data.subscribe(function (resolvedRouteData) {
            var detailsDataStore = resolvedRouteData['data'];
            detailsDataStore.state.subscribe(function (state) {
              _this.details = state;
            }, function (error) {});
          }, function (error) {});
        }
      }, {
        key: "isShell",
        get: function get() {
          return this.details && this.details.isShell ? true : false;
        }
      }]);

      return RealEstateDetailsPage;
    }();

    RealEstateDetailsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-shell'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], RealEstateDetailsPage.prototype, "isShell", null);
    RealEstateDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-real-estate-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./real-estate-details.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/real-estate/details/real-estate-details.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/real-estate-details.page.scss */
      "./src/app/real-estate/details/styles/real-estate-details.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/real-estate-details.shell.scss */
      "./src/app/real-estate/details/styles/real-estate-details.shell.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])], RealEstateDetailsPage);
    /***/
  },

  /***/
  "./src/app/real-estate/details/real-estate-details.resolver.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/real-estate/details/real-estate-details.resolver.ts ***!
    \*********************************************************************/

  /*! exports provided: RealEstateDetailsResolver */

  /***/
  function srcAppRealEstateDetailsRealEstateDetailsResolverTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateDetailsResolver", function () {
      return RealEstateDetailsResolver;
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


    var _real_estate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../real-estate.service */
    "./src/app/real-estate/real-estate.service.ts");

    var RealEstateDetailsResolver =
    /*#__PURE__*/
    function () {
      function RealEstateDetailsResolver(realEstateService) {
        _classCallCheck(this, RealEstateDetailsResolver);

        this.realEstateService = realEstateService;
      }

      _createClass(RealEstateDetailsResolver, [{
        key: "resolve",
        value: function resolve() {
          var dataSource = this.realEstateService.getDetailsDataSource();
          var dataStore = this.realEstateService.getDetailsStore(dataSource);
          return dataStore;
        }
      }]);

      return RealEstateDetailsResolver;
    }();

    RealEstateDetailsResolver.ctorParameters = function () {
      return [{
        type: _real_estate_service__WEBPACK_IMPORTED_MODULE_2__["RealEstateService"]
      }];
    };

    RealEstateDetailsResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_real_estate_service__WEBPACK_IMPORTED_MODULE_2__["RealEstateService"]])], RealEstateDetailsResolver);
    /***/
  },

  /***/
  "./src/app/real-estate/details/styles/real-estate-details.page.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/real-estate/details/styles/real-estate-details.page.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRealEstateDetailsStylesRealEstateDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: var(--app-background-shade);\n  --page-amenity-vertical-gutter: 2px;\n  --page-amenity-horizontal-gutter: 4px;\n  --page-color: #d9453a;\n}\n\n.real-estate-details-content {\n  --background: var(--page-background);\n}\n\n.real-estate-details-content .image-row {\n  --ion-grid-column-padding: 0px;\n}\n\n.real-estate-details-content .image-row .bookmark-icon {\n  position: absolute;\n  right: var(--page-margin);\n  top: var(--page-margin);\n  font-size: 32px;\n  color: var(--page-color);\n}\n\n.real-estate-details-content .description-row {\n  --ion-grid-column-padding: 0px;\n  padding: var(--page-margin);\n}\n\n.real-estate-details-content .description-row .details-price {\n  margin: 0px 0px calc(var(--page-margin) / 2);\n  font-size: 18px;\n  font-weight: 600;\n  color: var(--ion-color-dark-tint);\n  display: -webkit-box;\n  display: flex;\n}\n\n.real-estate-details-content .description-row .details-price .price-icon {\n  margin-right: 5px;\n}\n\n.real-estate-details-content .description-row .details-address {\n  margin: 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content .description-row .details-address + .details-address {\n  margin-top: 5px;\n}\n\n.real-estate-details-content .description-row .details-description {\n  margin: var(--page-margin) 0px 0px;\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n}\n\n.real-estate-details-content .detail-title {\n  font-size: 16px;\n  font-weight: 500;\n  color: var(--ion-color-dark-tint);\n  margin: 0px 0px var(--page-margin);\n}\n\n.real-estate-details-content .accommodations-wrapper {\n  padding: var(--page-margin);\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content .accommodations-wrapper .accommodation-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.real-estate-details-content .accommodations-wrapper .accommodation-row + .accommodation-row {\n  padding-top: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content .accommodations-wrapper .accommodation-row .icon-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  padding-right: 20px;\n}\n\n.real-estate-details-content .accommodations-wrapper .accommodation-row .accommodation-icon {\n  font-size: 30px;\n  color: var(--ion-color-medium-shade);\n}\n\n.real-estate-details-content .accommodations-wrapper .accommodation-row .accommodation-name {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content .accommodations-wrapper .accommodation-row .accommodation-value {\n  display: block;\n  font-size: 16px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content .location-wrapper {\n  padding: calc(var(--page-margin) / 2) 0px var(--page-margin);\n}\n\n.real-estate-details-content .location-wrapper .location-header {\n  padding: 0px var(--page-margin) 0px;\n  margin-bottom: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content .location-wrapper .detail-title {\n  margin-bottom: 5px;\n}\n\n.real-estate-details-content .location-wrapper .location-address {\n  display: block;\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content .amenities-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-estate-details-content .amenities-wrapper .amenities-tags {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-top: calc(var(--page-amenity-vertical-gutter) * -1);\n}\n\n.real-estate-details-content .amenities-wrapper .amenities-tags .tag-wrapper {\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter) var(--page-amenity-vertical-gutter) 0px;\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.real-estate-details-content .amenities-wrapper .amenities-tags .tag-wrapper:last-child {\n  padding-right: 0px;\n}\n\n.real-estate-details-content .amenities-wrapper .amenities-tags .amenity-tag {\n  display: block;\n  border-radius: var(--app-narrow-radius);\n  border: 1px solid var(--ion-color-light-shade);\n  padding: var(--page-amenity-vertical-gutter) var(--page-amenity-horizontal-gutter);\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content .safety-features-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-estate-details-content .safety-features-wrapper .features-list {\n  list-style: none;\n  margin: 0px;\n  padding: 0px;\n}\n\n.real-estate-details-content .safety-features-wrapper .features-list .feature-item {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n}\n\n.real-estate-details-content .safety-features-wrapper .features-list .feature-item + .feature-item {\n  margin-top: calc(var(--page-margin) / 2);\n}\n\n.real-estate-details-content .availability-wrapper {\n  padding: calc(var(--page-margin) / 2) var(--page-margin) var(--page-margin);\n}\n\n.real-estate-details-content .availability-wrapper .availability-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.real-estate-details-content .availability-wrapper .availability-row .availability-description,\n.real-estate-details-content .availability-wrapper .availability-row .availability-value {\n  font-size: 14px;\n  color: var(--ion-color-medium-tint);\n  display: block;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n}\n\n.real-estate-details-content .availability-wrapper .availability-row .availability-description {\n  color: var(--ion-color-medium-tint);\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n}\n\n.real-estate-details-content .availability-wrapper .availability-row .availability-value {\n  color: var(--page-color);\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n\n.real-estate-details-content .availability-wrapper .book-now-btn {\n  margin: var(--page-margin) 0px 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9yZWFsLWVzdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLWVzdGF0ZS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVhbC1lc3RhdGUvZGV0YWlscy9zdHlsZXMvcmVhbC1lc3RhdGUtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxzQ0FBQTtFQUNBLDhDQUFBO0VBRUEsbUNBQUE7RUFDQSxxQ0FBQTtFQUVBLHFCQUFBO0FDSEY7O0FET0E7RUFDRSxvQ0FBQTtBQ0pGOztBRE1FO0VBQ0UsOEJBQUE7QUNKSjs7QURNSTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ0pOOztBRFFFO0VBQ0UsOEJBQUE7RUFFQSwyQkFBQTtBQ1BKOztBRFNJO0VBQ0UsNENBQUE7RUFDSCxlQUFBO0VBQ0EsZ0JBQUE7RUFDRyxpQ0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ1BOOztBRFNNO0VBQ0UsaUJBQUE7QUNQUjs7QURXSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNUTjs7QURXTTtFQUNFLGVBQUE7QUNUUjs7QURhSTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDWE47O0FEZUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0FDYko7O0FEZ0JFO0VBQ0UsMkJBQUE7RUFDQSx5Q0FBQTtBQ2RKOztBRGdCSTtFQUNFLDhCQUFBO0VBRUEseUJBQUE7VUFBQSxtQkFBQTtBQ2ZOOztBRGlCTTtFQUNFLHlDQUFBO0FDZlI7O0FEa0JNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO1VBQUEsWUFBQTtFQUNBLG1CQUFBO0FDaEJSOztBRG1CTTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtBQ2pCUjs7QURvQk07RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDbEJSOztBRHFCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUNuQlI7O0FEd0JFO0VBQ0UsNERBQUE7QUN0Qko7O0FEd0JJO0VBQ0UsbUNBQUE7RUFDQSwyQ0FBQTtBQ3RCTjs7QUR5Qkk7RUFDRSxrQkFBQTtBQ3ZCTjs7QUQwQkk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG1DQUFBO0FDeEJOOztBRDRCRTtFQUNFLDJFQUFBO0FDMUJKOztBRDRCSTtFQUNFLDhCQUFBO0VBRUEsd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDBEQUFBO0FDM0JOOztBRDZCTTtFQUNFLDBIQUFBO0VBQ0EsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0FDM0JSOztBRDZCUTtFQUNFLGtCQUFBO0FDM0JWOztBRCtCTTtFQUNFLGNBQUE7RUFDQSx1Q0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0ZBQUE7RUFDQSxlQUFBO0VBQ0EsbUNBQUE7QUM3QlI7O0FEa0NFO0VBQ0UsMkVBQUE7QUNoQ0o7O0FEa0NJO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ2hDTjs7QURrQ007RUFDRSxlQUFBO0VBQ0EsbUNBQUE7QUNoQ1I7O0FEa0NRO0VBQ0Usd0NBQUE7QUNoQ1Y7O0FEc0NFO0VBQ0UsMkVBQUE7QUNwQ0o7O0FEc0NJO0VBQ0UsOEJBQUE7RUFFQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ3JDTjs7QUR1Q007O0VBRUUsZUFBQTtFQUNBLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtBQ3JDUjs7QUR3Q007RUFDRSxtQ0FBQTtFQUNBLHVCQUFBO1VBQUEsMkJBQUE7QUN0Q1I7O0FEeUNNO0VBQ0Usd0JBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0FDdkNSOztBRDJDSTtFQUNFLGtDQUFBO0FDekNOIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1lc3RhdGUvZGV0YWlscy9zdHlsZXMvcmVhbC1lc3RhdGUtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDdXN0b20gdmFyaWFibGVzXG4vLyBOb3RlOiAgVGhlc2Ugb25lcyB3ZXJlIGFkZGVkIGJ5IHVzIGFuZCBoYXZlIG5vdGhpbmcgdG8gZG8gd2l0aCBJb25pYyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbjpob3N0IHtcbiAgLS1wYWdlLW1hcmdpbjogdmFyKC0tYXBwLWJyb2FkLW1hcmdpbik7XG4gIC0tcGFnZS1iYWNrZ3JvdW5kOiB2YXIoLS1hcHAtYmFja2dyb3VuZC1zaGFkZSk7XG5cbiAgLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG5cbiAgLS1wYWdlLWNvbG9yOiAjZDk0NTNhO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG5cbiAgLmltYWdlLXJvdyB7XG4gICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgLmJvb2ttYXJrLWljb24ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICAgIHRvcDogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgZm9udC1zaXplOiAzMnB4O1xuICAgICAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbi1yb3cge1xuICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5kZXRhaWxzLXByaWNlIHtcbiAgICAgIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuXHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgIC5wcmljZS1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtYWRkcmVzcyB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuXG4gICAgICAmICsgLmRldGFpbHMtYWRkcmVzcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1kZXNjcmlwdGlvbiB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgIH1cbiAgfVxuXG4gIC5kZXRhaWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xuICB9XG5cbiAgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcblxuICAgIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG5cbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYgKyAuYWNjb21tb2RhdGlvbi1yb3cge1xuICAgICAgICBwYWRkaW5nLXRvcDogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgIH1cblxuICAgICAgLmljb24td3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmFjY29tbW9kYXRpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgfVxuXG4gICAgICAuYWNjb21tb2RhdGlvbi1uYW1lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG5cbiAgICAgIC5hY2NvbW1vZGF0aW9uLXZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxvY2F0aW9uLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgMHB4IHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5sb2NhdGlvbi1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMHB4IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xuICAgIH1cblxuICAgIC5kZXRhaWwtdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIC5sb2NhdGlvbi1hZGRyZXNzIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgfVxuICB9XG5cbiAgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG5cbiAgICAuYW1lbml0aWVzLXRhZ3Mge1xuICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgKiAtMSk7XG5cbiAgICAgIC50YWctd3JhcHBlciB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgMHB4O1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFtZW5pdHktdGFnIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWFwcC1uYXJyb3ctcmFkaXVzKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1hbWVuaXR5LXZlcnRpY2FsLWd1dHRlcikgdmFyKC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyKTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2FmZXR5LWZlYXR1cmVzLXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5mZWF0dXJlcy1saXN0IHtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgIHBhZGRpbmc6IDBweDtcblxuICAgICAgLmZlYXR1cmUtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG5cbiAgICAgICAgJiArIC5mZWF0dXJlLWl0ZW0ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYXZhaWxhYmlsaXR5LXdyYXBwZXIge1xuICAgIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcblxuICAgIC5hdmFpbGFiaWxpdHktcm93IHtcbiAgICAgIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcblxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbixcbiAgICAgIC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFnZS1jb2xvcik7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJvb2stbm93LWJ0biB7XG4gICAgICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6IHZhcigtLWFwcC1iYWNrZ3JvdW5kLXNoYWRlKTtcbiAgLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyOiAycHg7XG4gIC0tcGFnZS1hbWVuaXR5LWhvcml6b250YWwtZ3V0dGVyOiA0cHg7XG4gIC0tcGFnZS1jb2xvcjogI2Q5NDUzYTtcbn1cblxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmltYWdlLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmltYWdlLXJvdyAuYm9va21hcmstaWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgdG9wOiB2YXIoLS1wYWdlLW1hcmdpbik7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6IHZhcigtLXBhZ2UtY29sb3IpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuZGVzY3JpcHRpb24tcm93IHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtcHJpY2Uge1xuICBtYXJnaW46IDBweCAwcHggY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtcHJpY2UgLnByaWNlLWljb24ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmRlc2NyaXB0aW9uLXJvdyAuZGV0YWlscy1hZGRyZXNzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtYWRkcmVzcyArIC5kZXRhaWxzLWFkZHJlc3Mge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5kZXNjcmlwdGlvbi1yb3cgLmRldGFpbHMtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmRldGFpbC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXRpbnQpO1xuICBtYXJnaW46IDBweCAwcHggdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFjY29tbW9kYXRpb25zLXdyYXBwZXIgLmFjY29tbW9kYXRpb24tcm93ICsgLmFjY29tbW9kYXRpb24tcm93IHtcbiAgcGFkZGluZy10b3A6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hY2NvbW1vZGF0aW9ucy13cmFwcGVyIC5hY2NvbW1vZGF0aW9uLXJvdyAuaWNvbi13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24tbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYWNjb21tb2RhdGlvbnMtd3JhcHBlciAuYWNjb21tb2RhdGlvbi1yb3cgLmFjY29tbW9kYXRpb24tdmFsdWUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIDBweCB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5sb2NhdGlvbi13cmFwcGVyIC5sb2NhdGlvbi1oZWFkZXIge1xuICBwYWRkaW5nOiAwcHggdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmRldGFpbC10aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmxvY2F0aW9uLXdyYXBwZXIgLmxvY2F0aW9uLWFkZHJlc3Mge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFtZW5pdGllcy13cmFwcGVyIHtcbiAgcGFkZGluZzogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKSB2YXIoLS1wYWdlLW1hcmdpbikgdmFyKC0tcGFnZS1tYXJnaW4pO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIHtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogY2FsYyh2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSAqIC0xKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmFtZW5pdGllcy13cmFwcGVyIC5hbWVuaXRpZXMtdGFncyAudGFnLXdyYXBwZXIge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLWFtZW5pdHktdmVydGljYWwtZ3V0dGVyKSB2YXIoLS1wYWdlLWFtZW5pdHktaG9yaXpvbnRhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIDBweDtcbiAgZmxleC1ncm93OiAwO1xuICBtaW4td2lkdGg6IGZpdC1jb250ZW50O1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIC50YWctd3JhcHBlcjpsYXN0LWNoaWxkIHtcbiAgcGFkZGluZy1yaWdodDogMHB4O1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYW1lbml0aWVzLXdyYXBwZXIgLmFtZW5pdGllcy10YWdzIC5hbWVuaXR5LXRhZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1hcHAtbmFycm93LXJhZGl1cyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIHBhZGRpbmc6IHZhcigtLXBhZ2UtYW1lbml0eS12ZXJ0aWNhbC1ndXR0ZXIpIHZhcigtLXBhZ2UtYW1lbml0eS1ob3Jpem9udGFsLWd1dHRlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5zYWZldHktZmVhdHVyZXMtd3JhcHBlciB7XG4gIHBhZGRpbmc6IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMikgdmFyKC0tcGFnZS1tYXJnaW4pIHZhcigtLXBhZ2UtbWFyZ2luKTtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLnNhZmV0eS1mZWF0dXJlcy13cmFwcGVyIC5mZWF0dXJlcy1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLnNhZmV0eS1mZWF0dXJlcy13cmFwcGVyIC5mZWF0dXJlcy1saXN0IC5mZWF0dXJlLWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuc2FmZXR5LWZlYXR1cmVzLXdyYXBwZXIgLmZlYXR1cmVzLWxpc3QgLmZlYXR1cmUtaXRlbSArIC5mZWF0dXJlLWl0ZW0ge1xuICBtYXJnaW4tdG9wOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYXZhaWxhYmlsaXR5LXdyYXBwZXIge1xuICBwYWRkaW5nOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpIHZhcigtLXBhZ2UtbWFyZ2luKSB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ucmVhbC1lc3RhdGUtZGV0YWlscy1jb250ZW50IC5hdmFpbGFiaWxpdHktd3JhcHBlciAuYXZhaWxhYmlsaXR5LXJvdyB7XG4gIC0taW9uLWdyaWQtY29sdW1uLXBhZGRpbmc6IDBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYXZhaWxhYmlsaXR5LXdyYXBwZXIgLmF2YWlsYWJpbGl0eS1yb3cgLmF2YWlsYWJpbGl0eS1kZXNjcmlwdGlvbixcbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktdmFsdWUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5hdmFpbGFiaWxpdHktcm93IC5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnJlYWwtZXN0YXRlLWRldGFpbHMtY29udGVudCAuYXZhaWxhYmlsaXR5LXdyYXBwZXIgLmF2YWlsYWJpbGl0eS1yb3cgLmF2YWlsYWJpbGl0eS12YWx1ZSB7XG4gIGNvbG9yOiB2YXIoLS1wYWdlLWNvbG9yKTtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5yZWFsLWVzdGF0ZS1kZXRhaWxzLWNvbnRlbnQgLmF2YWlsYWJpbGl0eS13cmFwcGVyIC5ib29rLW5vdy1idG4ge1xuICBtYXJnaW46IHZhcigtLXBhZ2UtbWFyZ2luKSAwcHggMHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/real-estate/details/styles/real-estate-details.shell.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/real-estate/details/styles/real-estate-details.shell.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRealEstateDetailsStylesRealEstateDetailsShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --shell-color: #d9453a;\n  --shell-color-rgb: 217,69,58;\n}\n\napp-image-shell.details-picture {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.details-price app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .25);\n  --text-shell-line-height: 18px;\n  max-width: 100px;\n  min-width: 50px;\n}\n\n.details-price app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .20);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.details-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-address + .details-address > app-text-shell {\n  max-width: 80%;\n}\n\n.details-address + .details-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.details-description > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n}\n\n.accommodation-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 30px;\n}\n\n.accommodation-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.location-address > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 60%;\n}\n\n.location-address > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\napp-image-shell.location-image {\n  --image-shell-loading-background: rgba(var(--shell-color-rgb), .10);\n  --image-shell-spinner-color: rgba(var(--shell-color-rgb), .25);\n}\n\n.amenity-tag > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .15);\n  --text-shell-line-height: 14px;\n  min-width: 50px;\n}\n\n.amenity-tag > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n\n.feature-item > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  max-width: 40%;\n}\n\n.feature-item > app-text-shell.text-loaded {\n  max-width: inherit;\n}\n\n.availability-description > app-text-shell,\n.availability-value > app-text-shell {\n  --text-shell-line-color: rgba(var(--shell-color-rgb), .10);\n  --text-shell-line-height: 14px;\n  min-width: 80%;\n}\n\n.availability-description > app-text-shell.text-loaded,\n.availability-value > app-text-shell.text-loaded {\n  min-width: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC9yZWFsLWVzdGF0ZS9kZXRhaWxzL3N0eWxlcy9yZWFsLWVzdGF0ZS1kZXRhaWxzLnNoZWxsLnNjc3MiLCJzcmMvYXBwL3JlYWwtZXN0YXRlL2RldGFpbHMvc3R5bGVzL3JlYWwtZXN0YXRlLWRldGFpbHMuc2hlbGwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHNCQUFBO0VBQ0EsNEJBQUE7QUNERjs7QURXQTtFQUNFLG1FQUFBO0VBQ0EsOERBQUE7QUNSRjs7QURXQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNSRjs7QURVRTtFQUNFLGtCQUFBO0FDUko7O0FEYUU7RUFDRSwwREFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQ1ZKOztBRFlJO0VBQ0Usa0JBQUE7QUNWTjs7QURjRTtFQUNFLGNBQUE7QUNaSjs7QURjSTtFQUNFLGtCQUFBO0FDWk47O0FEaUJBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtBQ2RGOztBRGlCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDZEY7O0FEZ0JFO0VBQ0UsY0FBQTtBQ2RKOztBRGtCQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDZkY7O0FEaUJFO0VBQ0Usa0JBQUE7QUNmSjs7QURtQkE7RUFDRSxtRUFBQTtFQUNBLDhEQUFBO0FDaEJGOztBRG1CQTtFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0FDaEJGOztBRGtCRTtFQUNFLGNBQUE7QUNoQko7O0FEb0JBO0VBQ0UsMERBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7QUNqQkY7O0FEbUJFO0VBQ0Usa0JBQUE7QUNqQko7O0FEdUJFOztFQUNFLDBEQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDbkJKOztBRHFCSTs7RUFDRSxjQUFBO0FDbEJOIiwiZmlsZSI6InNyYy9hcHAvcmVhbC1lc3RhdGUvZGV0YWlscy9zdHlsZXMvcmVhbC1lc3RhdGUtZGV0YWlscy5zaGVsbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ3VzdG9tIHZhcmlhYmxlc1xuLy8gTm90ZTogIFRoZXNlIG9uZXMgd2VyZSBhZGRlZCBieSB1cyBhbmQgaGF2ZSBub3RoaW5nIHRvIGRvIHdpdGggSW9uaWMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzXG46aG9zdCB7XG4gIC0tc2hlbGwtY29sb3I6ICNkOTQ1M2E7XG4gIC0tc2hlbGwtY29sb3ItcmdiOiAyMTcsNjksNTg7XG59XG5cbi8vIFlvdSBjYW4gYWxzbyBhcHBseSBzaGVlbCBzdHlsZXMgdG8gdGhlIGVudGlyZSBwYWdlXG46aG9zdCguaXMtc2hlbGwpIHtcbiAgLy8gaW9uLWNvbnRlbnQge1xuICAvLyAgIG9wYWNpdHk6IDAuODtcbiAgLy8gfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5kZXRhaWxzLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG5cbiAgJi50ZXh0LWxvYWRlZCB7XG4gICAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB9XG59XG5cbi5kZXRhaWxzLWFkZHJlc3Mge1xuICAmID4gYXBwLXRleHQtc2hlbGwge1xuICAgIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yMCk7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIG1heC13aWR0aDogNjAlO1xuXG4gICAgJi50ZXh0LWxvYWRlZCB7XG4gICAgICBtYXgtd2lkdGg6IGluaGVyaXQ7XG4gICAgfVxuICB9XG5cbiAgJiArIC5kZXRhaWxzLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgbWF4LXdpZHRoOiA4MCU7XG5cbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuLmRldGFpbHMtZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbn1cblxuLmFjY29tbW9kYXRpb24tdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1pbi13aWR0aDogMHB4O1xuICB9XG59XG5cbi5sb2NhdGlvbi1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNjAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLmFtZW5pdHktdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTBweDtcblxuICAmLnRleHQtbG9hZGVkIHtcbiAgICBtaW4td2lkdGg6IDBweDtcbiAgfVxufVxuXG4uZmVhdHVyZS1pdGVtID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1heC13aWR0aDogNDAlO1xuXG4gICYudGV4dC1sb2FkZWQge1xuICAgIG1heC13aWR0aDogaW5oZXJpdDtcbiAgfVxufVxuXG4uYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uLFxuLmF2YWlsYWJpbGl0eS12YWx1ZSB7XG4gICYgPiBhcHAtdGV4dC1zaGVsbCB7XG4gICAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gICAgbWluLXdpZHRoOiA4MCU7XG5cbiAgICAmLnRleHQtbG9hZGVkIHtcbiAgICAgIG1pbi13aWR0aDogMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiOmhvc3Qge1xuICAtLXNoZWxsLWNvbG9yOiAjZDk0NTNhO1xuICAtLXNoZWxsLWNvbG9yLXJnYjogMjE3LDY5LDU4O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwuZGV0YWlscy1waWN0dXJlIHtcbiAgLS1pbWFnZS1zaGVsbC1sb2FkaW5nLWJhY2tncm91bmQ6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjEwKTtcbiAgLS1pbWFnZS1zaGVsbC1zcGlubmVyLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4yNSk7XG59XG5cbi5kZXRhaWxzLXByaWNlIGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxOHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG59XG4uZGV0YWlscy1wcmljZSBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cblxuLmRldGFpbHMtYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsIHtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjIwKTtcbiAgLS10ZXh0LXNoZWxsLWxpbmUtaGVpZ2h0OiAxNHB4O1xuICBtYXgtd2lkdGg6IDYwJTtcbn1cbi5kZXRhaWxzLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbC50ZXh0LWxvYWRlZCB7XG4gIG1heC13aWR0aDogaW5oZXJpdDtcbn1cbi5kZXRhaWxzLWFkZHJlc3MgKyAuZGV0YWlscy1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwge1xuICBtYXgtd2lkdGg6IDgwJTtcbn1cbi5kZXRhaWxzLWFkZHJlc3MgKyAuZGV0YWlscy1hZGRyZXNzID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5kZXRhaWxzLWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG59XG5cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogMzBweDtcbn1cbi5hY2NvbW1vZGF0aW9uLXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn1cblxuLmxvY2F0aW9uLWFkZHJlc3MgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA2MCU7XG59XG4ubG9jYXRpb24tYWRkcmVzcyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xufVxuXG5hcHAtaW1hZ2Utc2hlbGwubG9jYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTApO1xuICAtLWltYWdlLXNoZWxsLXNwaW5uZXItY29sb3I6IHJnYmEodmFyKC0tc2hlbGwtY29sb3ItcmdiKSwgLjI1KTtcbn1cblxuLmFtZW5pdHktdGFnID4gYXBwLXRleHQtc2hlbGwge1xuICAtLXRleHQtc2hlbGwtbGluZS1jb2xvcjogcmdiYSh2YXIoLS1zaGVsbC1jb2xvci1yZ2IpLCAuMTUpO1xuICAtLXRleHQtc2hlbGwtbGluZS1oZWlnaHQ6IDE0cHg7XG4gIG1pbi13aWR0aDogNTBweDtcbn1cbi5hbWVuaXR5LXRhZyA+IGFwcC10ZXh0LXNoZWxsLnRleHQtbG9hZGVkIHtcbiAgbWluLXdpZHRoOiAwcHg7XG59XG5cbi5mZWF0dXJlLWl0ZW0gPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWF4LXdpZHRoOiA0MCU7XG59XG4uZmVhdHVyZS1pdGVtID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtYXgtd2lkdGg6IGluaGVyaXQ7XG59XG5cbi5hdmFpbGFiaWxpdHktZGVzY3JpcHRpb24gPiBhcHAtdGV4dC1zaGVsbCxcbi5hdmFpbGFiaWxpdHktdmFsdWUgPiBhcHAtdGV4dC1zaGVsbCB7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWNvbG9yOiByZ2JhKHZhcigtLXNoZWxsLWNvbG9yLXJnYiksIC4xMCk7XG4gIC0tdGV4dC1zaGVsbC1saW5lLWhlaWdodDogMTRweDtcbiAgbWluLXdpZHRoOiA4MCU7XG59XG4uYXZhaWxhYmlsaXR5LWRlc2NyaXB0aW9uID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQsXG4uYXZhaWxhYmlsaXR5LXZhbHVlID4gYXBwLXRleHQtc2hlbGwudGV4dC1sb2FkZWQge1xuICBtaW4td2lkdGg6IDBweDtcbn0iXX0= */";
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
          var _this2 = this;

          var dataSourceWithShellObservable = DataStore.AppendShell(dataSourceObservable, this.shellModel, this.networkDelay);
          dataSourceWithShellObservable.subscribe(function (dataValue) {
            _this2.timeline.next(dataValue);
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

  }
}]);
//# sourceMappingURL=real-estate-details-real-estate-details-module-es5.js.map