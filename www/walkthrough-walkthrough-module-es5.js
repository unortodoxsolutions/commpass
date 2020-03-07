function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["walkthrough-walkthrough-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWalkthroughWalkthroughPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header no-border>\n    <ion-toolbar>\n        <ion-buttons slot=\"end\">\n            <ion-button class=\"skip-walkthrough-button\" fill=\"clear\" (click)=\"skipWalkthrough()\">skip</ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-slides class=\"walkthrough-slides\" pager=\"true\" [options]=\"slidesOptions\">\n        <ion-slide class=\"first-slide illustration-and-decoration-slide\">\n            <ion-row class=\"slide-inner-row\">\n                <ion-col class=\"illustration-col\">\n                    <app-aspect-ratio [ratio]=\"{w:915, h:849}\">\n                        <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/illustration-5.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n                    </app-aspect-ratio>\n                </ion-col>\n                <ion-col class=\"decoration-col\">\n                    <!-- http://jxnblk.com/paths/?d=M0%200%20V5%20H5%20C25%205%2025%2020%2045%2020%20S65%205%2085%205%20H90%20V0%20Z -->\n                    <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 90 20\" style=\"enable-background:new 0 0 90 20;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 V5 H5 C25 5 25 20 45 20 S65 5 85 5 H90 V0 Z\"/>\n          </svg>\n                </ion-col>\n                <ion-col class=\"info-col\">\n                    <div class=\"info-wrapper\">\n                        <h3 class=\"info-title\">Book Visitors</h3>\n                        <p class=\"info-paragraph\">\n                            Create a friendly atmosphere for your visitors from the entrance. No stress, No fuzz\n                        </p>\n                        <!-- <p class=\"info-paragraph\">\n                            <b>You will love Ionic 4, and if you get lost, remember we have lots of tutorials to help you.</b>\n                        </p> -->\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n        <ion-slide class=\"second-slide illustration-and-decoration-slide\">\n            <ion-row class=\"slide-inner-row\">\n                <ion-col class=\"illustration-col\">\n                    <app-aspect-ratio [ratio]=\"{w:1096, h:806}\">\n                        <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/illustration-2.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n                    </app-aspect-ratio>\n                </ion-col>\n                <ion-col class=\"decoration-col\">\n                    <!-- http://jxnblk.com/paths/?d=M0%200%20L64%200%20L64%2024%20Q56%2024%2048%2016%20Q34%200%2022%2010%20Q10%2022%200%208%20Z -->\n                    <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 24\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 L64 0 L64 24 Q56 24 48 16 Q34 0 22 10 Q10 22 0 8 Z\"/>\n          </svg>\n                </ion-col>\n                <ion-col class=\"info-col\">\n                    <div class=\"info-wrapper\">\n                        <h3 class=\"info-title\">Hazzle-free Entry</h3>\n                        <p class=\"info-paragraph\">\n                            Entry into the neighborhood is hazzle-free with cases of delay in clarification from house owners eliminated\n                        </p>\n                        <!-- <p class=\"info-paragraph\">\n                            You are free to reuse and modify every component of this template.\n                        </p> -->\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n        <ion-slide class=\"third-slide illustration-and-decoration-slide\">\n            <ion-row class=\"slide-inner-row\">\n                <ion-col class=\"illustration-col\">\n                    <app-aspect-ratio [ratio]=\"{w:918, h:703}\">\n                        <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/illustration-3.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n                    </app-aspect-ratio>\n                </ion-col>\n                <ion-col class=\"decoration-col\">\n                    <!-- http://jxnblk.com/paths/?d=M0%200%20V5%20H5%20C19%205%2025%2014%2032%2014%20S45%205%2059%205%20H64%20V0%20Z -->\n                    <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 14\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 V5 H5 C19 5 25 14 32 14 S45 5 59 5 H64 V0 Z\"/>\n          </svg>\n                </ion-col>\n                <ion-col class=\"info-col\">\n                    <div class=\"info-wrapper\">\n                        <h3 class=\"info-title\">Safety Tips</h3>\n                        <p class=\"info-paragraph\">\n                            Safety tips and precautions well displayed in the palm of your hand to ensure you remain conscious of the environment and follow safety rules\n                        </p>\n                    </div>\n                    <ion-col class=\"call-to-actions-wrapper\">\n                        <!-- <ion-button class=\"get-started-button\" expand=\"block\" [routerLink]=\"['/auth/signup']\">Get Started</ion-button> --\n                        <ion-row class=\"alt-call-to-action-row\">\n                            <!-- <span class=\"cta-leading-text\">Already have an account?</span> -->\n                        <ion-button class=\"login-button\" fill=\"clear\" [routerLink]=\"['/auth/login']\">\n                            Login here\n                        </ion-button>\n                    </ion-col>\n                </ion-col>\n            </ion-row>\n        </ion-slide>\n        <!-- <ion-slide class=\"last-slide illustration-and-decoration-slide\">\n            <ion-row class=\"slide-inner-row\">\n                <ion-col class=\"illustration-col\">\n                    <app-aspect-ratio [ratio]=\"{w:924, h:819}\">\n                        <app-image-shell class=\"illustration-image\" animation=\"spinner\" [src]=\"'./assets/images/illustration-4.svg'\" [alt]=\"'walkthrough'\"></app-image-shell>\n                    </app-aspect-ratio>\n                </ion-col>\n                <ion-col class=\"decoration-col\">\n                    <!-- http://jxnblk.com/paths/?d=M0%200%20L64%200%20L64%2010%20Q56%2024%2046%2012%20Q34%200%2026%208%20Q10%2022%200%208%20Z --\n                    <svg class=\"vector-decoration\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" height=\"100px\" width=\"100%\" viewBox=\"0 0 64 18\" style=\"enable-background:new 0 0 64 24;\" xml:space=\"preserve\" preserveAspectRatio=\"none\">\n            <path d=\"M0 0 L64 0 L64 10 Q56 24 46 12 Q34 0 26 8 Q10 22 0 8 Z\"/>\n          </svg>\n                </ion-col>\n                <ion-col class=\"info-col\">\n                    <ion-row class=\"info-outer\">\n                        <ion-col>\n                            <div class=\"info-wrapper\">\n                                <h3 class=\"info-title\">Let The Fun Begin</h3>\n                                <!-- <p class=\"info-paragraph\">\n                                    Hope you like this Ionic v4 template and please let us know your feedback so we can keep improving it! Enjoy ;)\n                                </p> --\n                            </div>\n                        </ion-col>\n                        <ion-col class=\"call-to-actions-wrapper\">\n                            <!-- <ion-button class=\"get-started-button\" expand=\"block\" [routerLink]=\"['/auth/signup']\">Get Started</ion-button> --\n                            <ion-row class=\"alt-call-to-action-row\">\n                                <!-- <span class=\"cta-leading-text\">Already have an account?</span> --\n                                <ion-button class=\"login-button\" fill=\"clear\" [routerLink]=\"['/auth/login']\">\n                                    Login here\n                                </ion-button>\n                            </ion-row>\n                        </ion-col>\n                    </ion-row>\n                </ion-col>\n            </ion-row>\n        </ion-slide> -->\n    </ion-slides>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.page.scss":
  /*!**********************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.page.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":host {\n  --page-margin: var(--app-broad-margin);\n  --page-background: #ffffff;\n  --page-swiper-pagination-space: 40px;\n  --page-swiper-pagination-height: 18px;\n  --page-pagination-bullet-size: 10px;\n  --page-first-slide-background: #c1ebff;\n  --page-second-slide-background: #a9ebd2;\n  --page-third-slide-background: #f0cbe5;\n  --page-last-slide-background: #eef3ff;\n  --page-vector-decoration-fill: var(--ion-color-light-shade);\n}\n\nion-header ion-toolbar {\n  --ion-toolbar-background: #FFFFFF;\n}\n\nion-header ion-toolbar ion-button {\n  --color: var(--ion-color-primary);\n}\n\nion-content {\n  position: absolute;\n  top: 0;\n  background-color: #ffffff !important;\n}\n\n.walkthrough-slides {\n  --bullet-background: var(--ion-color-dark);\n  --bullet-background-active: var(--ion-color-dark);\n  height: 100%;\n}\n\n.walkthrough-slides .slide-inner-row {\n  height: 100%;\n  width: 100%;\n  padding: 0px;\n  padding-top: var(--app-header-height);\n  border-bottom: var(--page-swiper-pagination-space) solid transparent;\n  background-clip: padding-box;\n  background-color: var(--page-vector-decoration-fill);\n}\n\n.illustration-and-decoration-slide .slide-inner-row {\n  --ion-grid-column-padding: 0px;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.illustration-and-decoration-slide .illustration-col {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 0;\n  min-height: auto;\n  min-height: -webkit-fit-content;\n  min-height: -moz-fit-content;\n  min-height: fit-content;\n  max-width: 30vh;\n  padding: 0px;\n}\n\n.illustration-and-decoration-slide .decoration-col {\n  -webkit-box-flex: 0;\n          flex-grow: 0;\n  flex-shrink: 1;\n  min-height: 12vh;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .decoration-col .vector-decoration {\n  fill: currentColor;\n  color: var(--page-vector-decoration-fill);\n  background-color: var(--page-background);\n  padding-bottom: 4px;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  shape-rendering: geometricprecision;\n  height: calc(100% + 1px);\n}\n\n.illustration-and-decoration-slide .info-col {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  flex-shrink: 0;\n  min-height: auto;\n  background-color: var(--page-background);\n  margin-bottom: -1px;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper {\n  margin: calc(var(--page-margin) * -1) var(--page-margin) 0px;\n  text-align: left;\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n  margin: 0px;\n  margin-bottom: var(--page-margin);\n  color: var(--ion-color-dark);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph {\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n  margin: 0px 0px calc(var(--page-margin) / 2);\n}\n\n.illustration-and-decoration-slide .info-col .info-wrapper .info-paragraph:last-child {\n  margin-bottom: 0px;\n}\n\n.first-slide {\n  --page-vector-decoration-fill: var(--page-first-slide-background);\n}\n\n.second-slide {\n  --page-vector-decoration-fill: var(--page-second-slide-background);\n}\n\n.third-slide {\n  --page-vector-decoration-fill: var(--page-third-slide-background);\n}\n\n.last-slide {\n  --page-vector-decoration-fill: var(--page-last-slide-background);\n}\n\n.last-slide .slide-inner-row {\n  border-width: 0px;\n}\n\n.last-slide .info-col {\n  padding: var(--page-margin);\n}\n\n.last-slide .info-col .info-outer {\n  height: 100%;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.last-slide .info-col .info-outer .info-wrapper {\n  margin: calc(var(--page-margin) * -1) 0px 0px;\n}\n\n.last-slide .info-col .info-outer .call-to-actions-wrapper {\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n\n.last-slide .info-col .get-started-button {\n  margin: 0px;\n}\n\n.last-slide .info-col .alt-call-to-action-row {\n  padding-top: 5px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n\n.last-slide .info-col .alt-call-to-action-row .cta-leading-text {\n  color: var(--ion-color-medium);\n  font-size: 16px;\n}\n\n.last-slide .info-col .alt-call-to-action-row .login-button {\n  --color: var(--ion-color-secondary);\n  margin: 0px;\n}\n\n:host(.first-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host(.last-slide-active) ::ng-deep .walkthrough-slides .swiper-pagination {\n  display: none;\n}\n\n:host(.last-slide-active) .skip-walkthrough-button {\n  visibility: hidden;\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination {\n  height: var(--page-swiper-pagination-height);\n  line-height: 1;\n  bottom: calc((var(--page-swiper-pagination-space) - var(--page-swiper-pagination-height)) / 2);\n}\n\n:host ::ng-deep .walkthrough-slides .swiper-pagination .swiper-pagination-bullet {\n  width: var(--page-pagination-bullet-size);\n  height: var(--page-pagination-bullet-size);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIiwic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksc0NBQUE7RUFDQSwwQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsMkRBQUE7QUNESjs7QURNSTtFQUNJLGlDQUFBO0FDSFI7O0FES1E7RUFDSSxpQ0FBQTtBQ0haOztBRFFBO0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7QUNOSjs7QURTQTtFQUNJLDBDQUFBO0VBQ0EsaURBQUE7RUFDQSxZQUFBO0FDTko7O0FET0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxxQ0FBQTtFQUVBLG9FQUFBO0VBQ0EsNEJBQUE7RUFDQSxvREFBQTtBQ1BSOztBRFlJO0VBQ0ksOEJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtVQUFBLDJCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1RSOztBRFdJO0VBQ0ksbUJBQUE7VUFBQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFBQSw0QkFBQTtFQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNUUjs7QURXSTtFQUNJLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7RUFFQSxnQkFBQTtFQUNBLDZDQUFBO1VBQUEscUNBQUE7QUNWUjs7QURXUTtFQUNJLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBRUEsNkNBQUE7VUFBQSxxQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esd0JBQUE7QUNWWjs7QURhSTtFQUNJLG1CQUFBO1VBQUEsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHdDQUFBO0VBRUEsbUJBQUE7RUFFQSw2Q0FBQTtVQUFBLHFDQUFBO0FDYlI7O0FEY1E7RUFDSSw0REFBQTtFQUNBLGdCQUFBO0FDWlo7O0FEYVk7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSw0QkFBQTtBQ1hoQjs7QURhWTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLDRDQUFBO0FDWGhCOztBRFlnQjtFQUNJLGtCQUFBO0FDVnBCOztBRGlCQTtFQUNJLGlFQUFBO0FDZEo7O0FEaUJBO0VBQ0ksa0VBQUE7QUNkSjs7QURpQkE7RUFDSSxpRUFBQTtBQ2RKOztBRGlCQTtFQUNJLGdFQUFBO0FDZEo7O0FEZUk7RUFFSSxpQkFBQTtBQ2RSOztBRGdCSTtFQUNJLDJCQUFBO0FDZFI7O0FEZVE7RUFDSSxZQUFBO0VBQ0Esc0JBQUE7VUFBQSxxQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ2JaOztBRGNZO0VBQ0ksNkNBQUE7QUNaaEI7O0FEY1k7RUFDSSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7QUNaaEI7O0FEZVE7RUFDSSxXQUFBO0FDYlo7O0FEZVE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw4QkFBQTtVQUFBLDZCQUFBO0FDYlo7O0FEY1k7RUFDSSw4QkFBQTtFQUNBLGVBQUE7QUNaaEI7O0FEY1k7RUFDSSxtQ0FBQTtFQUNBLFdBQUE7QUNaaEI7O0FEbUJJO0VBQ0ksa0JBQUE7QUNoQlI7O0FEc0JRO0VBQ0ksYUFBQTtBQ25CWjs7QURzQkk7RUFDSSxrQkFBQTtBQ3BCUjs7QUQ0Qkk7RUFDSSw0Q0FBQTtFQUNBLGNBQUE7RUFFQSw4RkFBQTtBQzFCUjs7QUQyQlE7RUFDSSx5Q0FBQTtFQUNBLDBDQUFBO0FDekJaIiwiZmlsZSI6InNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEN1c3RvbSB2YXJpYWJsZXNcbi8vIE5vdGU6ICBUaGVzZSBvbmVzIHdlcmUgYWRkZWQgYnkgdXMgYW5kIGhhdmUgbm90aGluZyB0byBkbyB3aXRoIElvbmljIENTUyBDdXN0b20gUHJvcGVydGllc1xuOmhvc3Qge1xuICAgIC0tcGFnZS1tYXJnaW46IHZhcigtLWFwcC1icm9hZC1tYXJnaW4pO1xuICAgIC0tcGFnZS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcbiAgICAtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0OiAxOHB4O1xuICAgIC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplOiAxMHB4O1xuICAgIC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjYzFlYmZmO1xuICAgIC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZDogI2E5ZWJkMjtcbiAgICAtLXBhZ2UtdGhpcmQtc2xpZGUtYmFja2dyb3VuZDogI2YwY2JlNTtcbiAgICAtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjZWVmM2ZmO1xuICAgIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuXG4vLyBOb3RlOiAgQWxsIHRoZSBDU1MgdmFyaWFibGVzIGRlZmluZWQgYmVsb3cgYXJlIG92ZXJyaWRlcyBvZiBJb25pYyBlbGVtZW50cyBDU1MgQ3VzdG9tIFByb3BlcnRpZXNcbmlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1pb24tdG9vbGJhci1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAvLyBGb3IgdGhlIHNraXAgYnV0dG9uXG4gICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5pb24tY29udGVudCB7XG4gICAgLy8gVG8gZ2V0IHRoZSBpb24tY29udGVudCBiZWhpbmQgdGhlIGlvbi1oZWFkZXJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLndhbGt0aHJvdWdoLXNsaWRlcyB7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC5zbGlkZS1pbm5lci1yb3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIC8vIEhlYWRlciBzcGFjZVxuICAgICAgICBwYWRkaW5nLXRvcDogdmFyKC0tYXBwLWhlYWRlci1oZWlnaHQpO1xuICAgICAgICAvLyAuc3dpcGVyLXBhZ2luYXRpb24gc3BhY2VcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbCk7XG4gICAgfVxufVxuXG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAgIG1pbi1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBtYXgtd2lkdGg6IDMwdmg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICB9XG4gICAgLmRlY29yYXRpb24tY29sIHtcbiAgICAgICAgZmxleC1ncm93OiAwO1xuICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgLy8gVG8gcHJldmVudCB0cmFuc3BhcmVudCBsaW5lIGNhdXNlZCBieSBwaXhlbCBmcmFjdGlvbnNcbiAgICAgICAgbWluLWhlaWdodDogMTJ2aDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgLnZlY3Rvci1kZWNvcmF0aW9uIHtcbiAgICAgICAgICAgIGZpbGw6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGwpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAvLyBUbyBwcmV2ZW50IHRyYW5zcGFyZW50IGxpbmUgY2F1c2VkIGJ5IHBpeGVsIGZyYWN0aW9uc1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgICAgICAgICAgIHNoYXBlLXJlbmRlcmluZzogZ2VvbWV0cmljcHJlY2lzaW9uO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAxcHgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5pbmZvLWNvbCB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhZ2UtYmFja2dyb3VuZCk7XG4gICAgICAgIC8vIFRvIHByZXZlbnQgdHJhbnNwYXJlbnQgbGluZSBjYXVzZWQgYnkgcGl4ZWwgZnJhY3Rpb25zXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG4gICAgICAgIC8vIFByZXZlbnQgLmluZm8td3JhcHBlciB0ZXh0IHRvIGJsaW5rIGFzIGl0J3Mgb3ZlciB0aGUgcHJldmlvdXMgZWxlbWVudCAoU2FmYXJpIGlzc3VlKVxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xuICAgICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgKiAtMSkgdmFyKC0tcGFnZS1tYXJnaW4pIDBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICAuaW5mby10aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaW5mby1wYXJhZ3JhcGgge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpcnN0LXNsaWRlIHtcbiAgICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kKTtcbn1cblxuLnNlY29uZC1zbGlkZSB7XG4gICAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4udGhpcmQtc2xpZGUge1xuICAgIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4ubGFzdC1zbGlkZSB7XG4gICAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kKTtcbiAgICAuc2xpZGUtaW5uZXItcm93IHtcbiAgICAgICAgLy8gSW4gdGhlIGxhc3Qgc2xpZGUgLnN3aXBlci1wYWdpbmF0aW9uIGlzIGhpZGRlblxuICAgICAgICBib3JkZXItd2lkdGg6IDBweDtcbiAgICB9XG4gICAgLmluZm8tY29sIHtcbiAgICAgICAgcGFkZGluZzogdmFyKC0tcGFnZS1tYXJnaW4pO1xuICAgICAgICAuaW5mby1vdXRlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmluZm8td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNhbGwtdG8tYWN0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZ2V0LXN0YXJ0ZWQtYnV0dG9uIHtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICAuY3RhLWxlYWRpbmctdGV4dCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG46aG9zdCguZmlyc3Qtc2xpZGUtYWN0aXZlKSB7XG4gICAgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbn1cblxuOmhvc3QoLmxhc3Qtc2xpZGUtYWN0aXZlKSB7XG4gICAgIDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIHtcbiAgICAgICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbn1cblxuLy8gSVNTVUU6IC5zd2lwZXItcGFnZ2luYXRpb24gZ2V0cyByZW5kZXJlZCBkeW5hbWljYWxseS4gVGhhdCBwcmV2ZW50cyBzdHlsaW5nIHRoZSBlbGVtZW50cyB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IEFuZ3VsYXIgVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuLy8gICAgICAgIChBbmd1bGFyIGRvZXNuJ3QgYWRkIGFuICdfbmdjb250ZW50JyBhdHRyaWJ1dGUgdG8gdGhlIC5zd2lwZXItcGFnZ2luYXRpb24gYmVjYXVzZSBpdCdzIGR5bmFtaWNhbGx5IHJlbmRlcmVkKVxuLy8gRklYOiAgIFNlZTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM2MjY1MDcyLzExMTY5NTlcbjpob3N0IDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIHtcbiAgICAuc3dpcGVyLXBhZ2luYXRpb24ge1xuICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24taGVpZ2h0KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIC8vIC5zd2lwZXItcGFnaW5hdGlvbiBpcyAxOHB4IGhlaWdodCwgLnNsaWRlLWlubmVyLXJvdyBoYXMgNDBweCBvZiBwYWRkaW5nLWJvdHRvbSA9PiBib3R0b20gPSAoNDBweCAtIDE4cHgpLzIgPSAxMXB4XG4gICAgICAgIGJvdHRvbTogY2FsYygodmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZSkgLSB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCkpIC8gMik7XG4gICAgICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICAgICAgICAgICAgd2lkdGg6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXBhZ2UtcGFnaW5hdGlvbi1idWxsZXQtc2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiOmhvc3Qge1xuICAtLXBhZ2UtbWFyZ2luOiB2YXIoLS1hcHAtYnJvYWQtbWFyZ2luKTtcbiAgLS1wYWdlLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1zcGFjZTogNDBweDtcbiAgLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodDogMThweDtcbiAgLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemU6IDEwcHg7XG4gIC0tcGFnZS1maXJzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjYzFlYmZmO1xuICAtLXBhZ2Utc2Vjb25kLXNsaWRlLWJhY2tncm91bmQ6ICNhOWViZDI7XG4gIC0tcGFnZS10aGlyZC1zbGlkZS1iYWNrZ3JvdW5kOiAjZjBjYmU1O1xuICAtLXBhZ2UtbGFzdC1zbGlkZS1iYWNrZ3JvdW5kOiAjZWVmM2ZmO1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cblxuaW9uLWhlYWRlciBpb24tdG9vbGJhciB7XG4gIC0taW9uLXRvb2xiYXItYmFja2dyb3VuZDogI0ZGRkZGRjtcbn1cbmlvbi1oZWFkZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4ud2Fsa3Rocm91Z2gtc2xpZGVzIHtcbiAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ud2Fsa3Rocm91Z2gtc2xpZGVzIC5zbGlkZS1pbm5lci1yb3cge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHg7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1hcHAtaGVhZGVyLWhlaWdodCk7XG4gIGJvcmRlci1ib3R0b206IHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIHNvbGlkIHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGwpO1xufVxuXG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5zbGlkZS1pbm5lci1yb3cge1xuICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwcHg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbGx1c3RyYXRpb24tY29sIHtcbiAgZmxleC1ncm93OiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgbWluLWhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1heC13aWR0aDogMzB2aDtcbiAgcGFkZGluZzogMHB4O1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICBmbGV4LWdyb3c6IDA7XG4gIGZsZXgtc2hyaW5rOiAxO1xuICBtaW4taGVpZ2h0OiAxMnZoO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wgLnZlY3Rvci1kZWNvcmF0aW9uIHtcbiAgZmlsbDogY3VycmVudENvbG9yO1xuICBjb2xvcjogdmFyKC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbiAgc2hhcGUtcmVuZGVyaW5nOiBnZW9tZXRyaWNwcmVjaXNpb247XG4gIGhlaWdodDogY2FsYygxMDAlICsgMXB4KTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIHtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMDtcbiAgbWluLWhlaWdodDogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIC5pbmZvLXdyYXBwZXIge1xuICBtYXJnaW46IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pICogLTEpIHZhcigtLXBhZ2UtbWFyZ2luKSAwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIC5pbmZvLWNvbCAuaW5mby13cmFwcGVyIC5pbmZvLXRpdGxlIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXBhZ2UtbWFyZ2luKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbi5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmluZm8tY29sIC5pbmZvLXdyYXBwZXIgLmluZm8tcGFyYWdyYXBoIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4IDBweCBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAvIDIpO1xufVxuLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby1wYXJhZ3JhcGg6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmZpcnN0LXNsaWRlIHtcbiAgLS1wYWdlLXZlY3Rvci1kZWNvcmF0aW9uLWZpbGw6IHZhcigtLXBhZ2UtZmlyc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi5zZWNvbmQtc2xpZGUge1xuICAtLXBhZ2UtdmVjdG9yLWRlY29yYXRpb24tZmlsbDogdmFyKC0tcGFnZS1zZWNvbmQtc2xpZGUtYmFja2dyb3VuZCk7XG59XG5cbi50aGlyZC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLXRoaXJkLXNsaWRlLWJhY2tncm91bmQpO1xufVxuXG4ubGFzdC1zbGlkZSB7XG4gIC0tcGFnZS12ZWN0b3ItZGVjb3JhdGlvbi1maWxsOiB2YXIoLS1wYWdlLWxhc3Qtc2xpZGUtYmFja2dyb3VuZCk7XG59XG4ubGFzdC1zbGlkZSAuc2xpZGUtaW5uZXItcm93IHtcbiAgYm9yZGVyLXdpZHRoOiAwcHg7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wge1xuICBwYWRkaW5nOiB2YXIoLS1wYWdlLW1hcmdpbik7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmluZm8tb3V0ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuaW5mby1vdXRlciAuaW5mby13cmFwcGVyIHtcbiAgbWFyZ2luOiBjYWxjKHZhcigtLXBhZ2UtbWFyZ2luKSAqIC0xKSAwcHggMHB4O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5pbmZvLW91dGVyIC5jYWxsLXRvLWFjdGlvbnMtd3JhcHBlciB7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5nZXQtc3RhcnRlZC1idXR0b24ge1xuICBtYXJnaW46IDBweDtcbn1cbi5sYXN0LXNsaWRlIC5pbmZvLWNvbCAuYWx0LWNhbGwtdG8tYWN0aW9uLXJvdyB7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xufVxuLmxhc3Qtc2xpZGUgLmluZm8tY29sIC5hbHQtY2FsbC10by1hY3Rpb24tcm93IC5jdGEtbGVhZGluZy10ZXh0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ubGFzdC1zbGlkZSAuaW5mby1jb2wgLmFsdC1jYWxsLXRvLWFjdGlvbi1yb3cgLmxvZ2luLWJ1dHRvbiB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBtYXJnaW46IDBweDtcbn1cblxuOmhvc3QoLmZpcnN0LXNsaWRlLWFjdGl2ZSkgLnNraXAtd2Fsa3Rocm91Z2gtYnV0dG9uIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIDo6bmctZGVlcCAud2Fsa3Rocm91Z2gtc2xpZGVzIC5zd2lwZXItcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46aG9zdCgubGFzdC1zbGlkZS1hY3RpdmUpIC5za2lwLXdhbGt0aHJvdWdoLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXN3aXBlci1wYWdpbmF0aW9uLWhlaWdodCk7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBib3R0b206IGNhbGMoKHZhcigtLXBhZ2Utc3dpcGVyLXBhZ2luYXRpb24tc3BhY2UpIC0gdmFyKC0tcGFnZS1zd2lwZXItcGFnaW5hdGlvbi1oZWlnaHQpKSAvIDIpO1xufVxuOmhvc3QgOjpuZy1kZWVwIC53YWxrdGhyb3VnaC1zbGlkZXMgLnN3aXBlci1wYWdpbmF0aW9uIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogdmFyKC0tcGFnZS1wYWdpbmF0aW9uLWJ1bGxldC1zaXplKTtcbiAgaGVpZ2h0OiB2YXIoLS1wYWdlLXBhZ2luYXRpb24tYnVsbGV0LXNpemUpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.responsive.scss":
  /*!****************************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.responsive.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughResponsiveScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* ----------- iPhone 4 and 4S ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 2/3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 30vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n/* ----------- iPhone 5, 5S, 5C and 5SE ----------- */\n@media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (device-aspect-ratio: 40/71) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 32vh;\n    padding: 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n  .illustration-and-decoration-slide .info-col .info-wrapper .info-title {\n    margin-bottom: calc(var(--page-margin) / 2);\n    font-size: 20px;\n  }\n}\n/* ----------- iPhone 6, 6S, 7 and 8 ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 36vh;\n    padding: 2vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 14vh;\n  }\n}\n/* ----------- iPhone X ----------- */\n@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 34vh;\n    padding: 6vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 12vh;\n  }\n}\n/* ----------- iPhone 6+, 7+ and 8+ ----------- */\n@media only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) {\n  .illustration-and-decoration-slide .illustration-col {\n    max-width: 38vh;\n    padding: 4vh 0px;\n  }\n  .illustration-and-decoration-slide .decoration-col {\n    min-height: 14vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucmVzcG9uc2l2ZS5zY3NzIiwic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2gucmVzcG9uc2l2ZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDRDQUFBO0FBQ0E7RUFXSTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VDZEo7RURpQkU7SUFDRSxnQkFBQTtFQ2ZKO0VEb0JNO0lBQ0UsMkNBQUE7SUFDQSxlQUFBO0VDbEJSO0FBQ0Y7QUR3QkEscURBQUE7QUFDQTtFQVdJO0lBQ0UsZUFBQTtJQUNBLFlBQUE7RUNoQ0o7RURtQ0U7SUFDRSxnQkFBQTtFQ2pDSjtFRHNDTTtJQUNFLDJDQUFBO0lBQ0EsZUFBQTtFQ3BDUjtBQUNGO0FEMENBLGtEQUFBO0FBQ0E7RUFVSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ2pESjtFRG9ERTtJQUNFLGdCQUFBO0VDbERKO0FBQ0Y7QURzREEscUNBQUE7QUFDQTtFQVVJO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDN0RKO0VEZ0VFO0lBQ0UsZ0JBQUE7RUM5REo7QUFDRjtBRGtFQSxpREFBQTtBQUNBO0VBVUk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7RUN6RUo7RUQ0RUU7SUFDRSxnQkFBQTtFQzFFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnJlc3BvbnNpdmUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIChOb3RlOiBEb24ndCBjaGFuZ2UgdGhlIG9yZGVyIG9mIHRoZSBkZXZpY2VzIGFzIGl0IG1heSBicmVhayB0aGUgY29ycmVjdCBjc3MgcHJlY2VkZW5jZSlcblxuLy8gKHNlZTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9zbmlwcGV0cy9jc3MvbWVkaWEtcXVlcmllcy1mb3Itc3RhbmRhcmQtZGV2aWNlcy8jaXBob25lLXF1ZXJpZXMpXG4vLyAoc2VlOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDc3NTAyNjEvMTExNjk1OSlcblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzIwcHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDQ4MHB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgYW5kIChkZXZpY2UtYXNwZWN0LXJhdGlvOiAyLzMpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBwb3J0cmFpdDpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpXG4gIC8vIHVuY29tbWVudCBmb3Igb25seSBsYW5kc2NhcGU6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSlcbntcbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSB7XG4gICAgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgICAgbWF4LXdpZHRoOiAzMHZoO1xuICAgICAgcGFkZGluZzogMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICAgIH1cblxuICAgIC5pbmZvLWNvbCB7XG4gICAgICAuaW5mby13cmFwcGVyIHtcbiAgICAgICAgLmluZm8tdGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IGNhbGModmFyKC0tcGFnZS1tYXJnaW4pIC8gMik7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDMyMHB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NjhweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpXG4gIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogNDAgLyA3MSlcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDMydmg7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuXG4gICAgLmRlY29yYXRpb24tY29sIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gICAgfVxuXG4gICAgLmluZm8tY29sIHtcbiAgICAgIC5pbmZvLXdyYXBwZXIge1xuICAgICAgICAuaW5mby10aXRsZSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0gaVBob25lIDYsIDZTLCA3IGFuZCA4IC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogMzc1cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDY2N3B4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMilcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDM2dmg7XG4gICAgICBwYWRkaW5nOiAydmggMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIH1cbiAgfVxufVxuXG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuXG4gIGFuZCAobWluLWRldmljZS13aWR0aCA6IDM3NXB4KVxuICBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA4MTJweClcbiAgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW8gOiAzKVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgcG9ydHJhaXQ6XG4gIC8vIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KVxuICAvLyB1bmNvbW1lbnQgZm9yIG9ubHkgbGFuZHNjYXBlOlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpXG57XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUge1xuICAgIC5pbGx1c3RyYXRpb24tY29sIHtcbiAgICAgIG1heC13aWR0aDogMzR2aDtcbiAgICAgIHBhZGRpbmc6IDZ2aCAwcHg7XG4gICAgfVxuXG4gICAgLmRlY29yYXRpb24tY29sIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gICAgfVxuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2KywgNysgYW5kIDgrIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW5cbiAgYW5kIChtaW4tZGV2aWNlLXdpZHRoIDogNDE0cHgpXG4gIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDczNnB4KVxuICBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMylcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IHBvcnRyYWl0OlxuICAvLyBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdClcbiAgLy8gdW5jb21tZW50IGZvciBvbmx5IGxhbmRzY2FwZTpcbiAgLy8gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKVxue1xuICAuaWxsdXN0cmF0aW9uLWFuZC1kZWNvcmF0aW9uLXNsaWRlIHtcbiAgICAuaWxsdXN0cmF0aW9uLWNvbCB7XG4gICAgICBtYXgtd2lkdGg6IDM4dmg7XG4gICAgICBwYWRkaW5nOiA0dmggMHB4O1xuICAgIH1cblxuICAgIC5kZWNvcmF0aW9uLWNvbCB7XG4gICAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICAgIH1cbiAgfVxufVxuIiwiLyogLS0tLS0tLS0tLS0gaVBob25lIDQgYW5kIDRTIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkgYW5kICgtd2Via2l0LW1pbi1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIGFuZCAoZGV2aWNlLWFzcGVjdC1yYXRpbzogMi8zKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzB2aDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA1LCA1UywgNUMgYW5kIDVTRSAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNTY4cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSBhbmQgKGRldmljZS1hc3BlY3QtcmF0aW86IDQwLzcxKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzJ2aDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuZGVjb3JhdGlvbi1jb2wge1xuICAgIG1pbi1oZWlnaHQ6IDEydmg7XG4gIH1cbiAgLmlsbHVzdHJhdGlvbi1hbmQtZGVjb3JhdGlvbi1zbGlkZSAuaW5mby1jb2wgLmluZm8td3JhcHBlciAuaW5mby10aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogY2FsYyh2YXIoLS1wYWdlLW1hcmdpbikgLyAyKTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbi8qIC0tLS0tLS0tLS0tIGlQaG9uZSA2LCA2UywgNyBhbmQgOCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNjY3cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzZ2aDtcbiAgICBwYWRkaW5nOiAydmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgWCAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogMzc1cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogODEycHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzR2aDtcbiAgICBwYWRkaW5nOiA2dmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxMnZoO1xuICB9XG59XG4vKiAtLS0tLS0tLS0tLSBpUGhvbmUgNissIDcrIGFuZCA4KyAtLS0tLS0tLS0tLSAqL1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogNzM2cHgpIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAzKSB7XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmlsbHVzdHJhdGlvbi1jb2wge1xuICAgIG1heC13aWR0aDogMzh2aDtcbiAgICBwYWRkaW5nOiA0dmggMHB4O1xuICB9XG4gIC5pbGx1c3RyYXRpb24tYW5kLWRlY29yYXRpb24tc2xpZGUgLmRlY29yYXRpb24tY29sIHtcbiAgICBtaW4taGVpZ2h0OiAxNHZoO1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/walkthrough/styles/walkthrough.shell.scss":
  /*!***********************************************************!*\
    !*** ./src/app/walkthrough/styles/walkthrough.shell.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWalkthroughStylesWalkthroughShellScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "app-image-shell.illustration-image {\n  --image-shell-loading-background: transparent;\n  --image-shell-spinner-color: var(--ion-color-lightest);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Ncl9Gcm9zaC9EZXNrdG9wL1NlY3VyZVBhc3Mvc3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2guc2hlbGwuc2NzcyIsInNyYy9hcHAvd2Fsa3Rocm91Z2gvc3R5bGVzL3dhbGt0aHJvdWdoLnNoZWxsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2Q0FBQTtFQUNBLHNEQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC93YWxrdGhyb3VnaC9zdHlsZXMvd2Fsa3Rocm91Z2guc2hlbGwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn1cbiIsImFwcC1pbWFnZS1zaGVsbC5pbGx1c3RyYXRpb24taW1hZ2Uge1xuICAtLWltYWdlLXNoZWxsLWxvYWRpbmctYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0taW1hZ2Utc2hlbGwtc3Bpbm5lci1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0ZXN0KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/walkthrough/walkthrough.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/walkthrough/walkthrough.module.ts ***!
    \***************************************************/

  /*! exports provided: WalkthroughPageModule */

  /***/
  function srcAppWalkthroughWalkthroughModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPageModule", function () {
      return WalkthroughPageModule;
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


    var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./walkthrough.page */
    "./src/app/walkthrough/walkthrough.page.ts");

    var routes = [{
      path: '',
      component: _walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]
    }];

    var WalkthroughPageModule = function WalkthroughPageModule() {
      _classCallCheck(this, WalkthroughPageModule);
    };

    WalkthroughPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes), _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"]],
      declarations: [_walkthrough_page__WEBPACK_IMPORTED_MODULE_7__["WalkthroughPage"]]
    })], WalkthroughPageModule);
    /***/
  },

  /***/
  "./src/app/walkthrough/walkthrough.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/walkthrough/walkthrough.page.ts ***!
    \*************************************************/

  /*! exports provided: WalkthroughPage */

  /***/
  function srcAppWalkthroughWalkthroughPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WalkthroughPage", function () {
      return WalkthroughPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");

    var WalkthroughPage =
    /*#__PURE__*/
    function () {
      function WalkthroughPage(menu) {
        _classCallCheck(this, WalkthroughPage);

        this.menu = menu;
        this.slidesOptions = {
          zoom: {
            toggle: false // Disable zooming to prevent weird double tap zomming on slide images

          }
        };
        this.isFirstSlide = true;
        this.isLastSlide = false;
      }

      _createClass(WalkthroughPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.menu.enable(false);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          // ViewChild is set
          this.slides.isBeginning().then(function (isBeginning) {
            _this.isFirstSlide = isBeginning;
          });
          this.slides.isEnd().then(function (isEnd) {
            _this.isLastSlide = isEnd;
          }); // Subscribe to changes

          this.slides.ionSlideWillChange.subscribe(function (changes) {
            _this.slides.isBeginning().then(function (isBeginning) {
              _this.isFirstSlide = isBeginning;
            });

            _this.slides.isEnd().then(function (isEnd) {
              _this.isLastSlide = isEnd;
            });
          });
        }
      }, {
        key: "skipWalkthrough",
        value: function skipWalkthrough() {
          var _this2 = this;

          // Skip to the last slide
          this.slides.length().then(function (length) {
            _this2.slides.slideTo(length);
          });
        }
      }]);

      return WalkthroughPage;
    }();

    WalkthroughPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])], WalkthroughPage.prototype, "slides", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.first-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WalkthroughPage.prototype, "isFirstSlide", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.last-slide-active'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], WalkthroughPage.prototype, "isLastSlide", void 0);
    WalkthroughPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-walkthrough',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./walkthrough.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/walkthrough/walkthrough.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.page.scss */
      "./src/app/walkthrough/styles/walkthrough.page.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.shell.scss */
      "./src/app/walkthrough/styles/walkthrough.shell.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./styles/walkthrough.responsive.scss */
      "./src/app/walkthrough/styles/walkthrough.responsive.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], WalkthroughPage);
    /***/
  }
}]);
//# sourceMappingURL=walkthrough-walkthrough-module-es5.js.map