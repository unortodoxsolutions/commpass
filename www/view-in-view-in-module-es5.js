function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-in-view-in-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-in/view-in.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-in/view-in.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewInViewInPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar color='primary'>\n        <ion-title>View In</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/view-in/view-in.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/view-in/view-in.module.ts ***!
    \*******************************************/

  /*! exports provided: ViewInPageModule */

  /***/
  function srcAppViewInViewInModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewInPageModule", function () {
      return ViewInPageModule;
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


    var _view_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./view-in.page */
    "./src/app/view-in/view-in.page.ts");

    var routes = [{
      path: '',
      component: _view_in_page__WEBPACK_IMPORTED_MODULE_6__["ViewInPage"]
    }];

    var ViewInPageModule = function ViewInPageModule() {
      _classCallCheck(this, ViewInPageModule);
    };

    ViewInPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)],
      declarations: [_view_in_page__WEBPACK_IMPORTED_MODULE_6__["ViewInPage"]]
    })], ViewInPageModule);
    /***/
  },

  /***/
  "./src/app/view-in/view-in.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/view-in/view-in.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewInViewInPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXctaW4vdmlldy1pbi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/view-in/view-in.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/view-in/view-in.page.ts ***!
    \*****************************************/

  /*! exports provided: ViewInPage */

  /***/
  function srcAppViewInViewInPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewInPage", function () {
      return ViewInPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ViewInPage =
    /*#__PURE__*/
    function () {
      function ViewInPage() {
        _classCallCheck(this, ViewInPage);
      }

      _createClass(ViewInPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewInPage;
    }();

    ViewInPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-in',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-in.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-in/view-in.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-in.page.scss */
      "./src/app/view-in/view-in.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ViewInPage);
    /***/
  }
}]);
//# sourceMappingURL=view-in-view-in-module-es5.js.map