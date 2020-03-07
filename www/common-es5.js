function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-00265c49.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-00265c49.js ***!
    \*************************************************************/

  /*! exports provided: a, d */

  /***/
  function node_modulesIonicCoreDistEsmChunk00265c49Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return attachComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return detachComponent;
    });

    var attachComponent = function attachComponent(delegate, container, component, cssClasses, componentProps) {
      var el;
      return regeneratorRuntime.async(function attachComponent$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!delegate) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

            case 2:
              if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
                _context.next = 4;
                break;
              }

              throw new Error('framework delegate is missing');

            case 4:
              el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

              if (cssClasses) {
                cssClasses.forEach(function (c) {
                  return el.classList.add(c);
                });
              }

              if (componentProps) {
                Object.assign(el, componentProps);
              }

              container.appendChild(el);

              if (!el.componentOnReady) {
                _context.next = 11;
                break;
              }

              _context.next = 11;
              return regeneratorRuntime.awrap(el.componentOnReady());

            case 11:
              return _context.abrupt("return", el);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      });
    };

    var detachComponent = function detachComponent(delegate, element) {
      if (element) {
        if (delegate) {
          var container = element.parentElement;
          return delegate.removeViewFromDom(container, element);
        }

        element.remove();
      }

      return Promise.resolve();
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-353a032e.js ***!
    \*************************************************************/

  /*! exports provided: c, g, h, o */

  /***/
  function node_modulesIonicCoreDistEsmChunk353a032eJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return createColorClasses;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "g", function () {
      return getClassMap;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hostContext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "o", function () {
      return openURL;
    });

    var hostContext = function hostContext(selector, el) {
      return el.closest(selector) !== null;
    };
    /**
     * Create the mode and color classes for the component based on the classes passed in
     */


    var createColorClasses = function createColorClasses(color) {
      return typeof color === 'string' && color.length > 0 ? _defineProperty({
        'ion-color': true
      }, "ion-color-".concat(color), true) : undefined;
    };

    var getClassList = function getClassList(classes) {
      if (classes !== undefined) {
        var array = Array.isArray(classes) ? classes : classes.split(' ');
        return array.filter(function (c) {
          return c != null;
        }).map(function (c) {
          return c.trim();
        }).filter(function (c) {
          return c !== '';
        });
      }

      return [];
    };

    var getClassMap = function getClassMap(classes) {
      var map = {};
      getClassList(classes).forEach(function (c) {
        return map[c] = true;
      });
      return map;
    };

    var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

    var openURL = function openURL(url, ev, direction) {
      var router;
      return regeneratorRuntime.async(function openURL$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
                _context2.next = 5;
                break;
              }

              router = document.querySelector('ion-router');

              if (!router) {
                _context2.next = 5;
                break;
              }

              if (ev != null) {
                ev.preventDefault();
              }

              return _context2.abrupt("return", router.push(url, direction));

            case 5:
              return _context2.abrupt("return", false);

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      });
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-3c9755dd.js ***!
    \*************************************************************/

  /*! exports provided: d, l, s, t */

  /***/
  function node_modulesIonicCoreDistEsmChunk3c9755ddJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return deepReady;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "l", function () {
      return lifecycle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return setPageHidden;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "t", function () {
      return transition;
    });
    /* harmony import */


    var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-d0403a2f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
    /* harmony import */


    var _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-94c4865f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-94c4865f.js");

    var iosTransitionAnimation = function iosTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | ios-transition-3107e07c-js */
      "ios-transition-3107e07c-js").then(__webpack_require__.bind(null,
      /*! ./ios.transition-3107e07c.js */
      "./node_modules/@ionic/core/dist/esm/ios.transition-3107e07c.js"));
    };

    var mdTransitionAnimation = function mdTransitionAnimation() {
      return __webpack_require__.e(
      /*! import() | md-transition-90b00ffe-js */
      "md-transition-90b00ffe-js").then(__webpack_require__.bind(null,
      /*! ./md.transition-90b00ffe.js */
      "./node_modules/@ionic/core/dist/esm/md.transition-90b00ffe.js"));
    };

    var transition = function transition(opts) {
      return new Promise(function (resolve, reject) {
        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["w"])(function () {
          beforeTransition(opts);
          runTransition(opts).then(function (result) {
            if (result.animation) {
              result.animation.destroy();
            }

            afterTransition(opts);
            resolve(result);
          }, function (error) {
            afterTransition(opts);
            reject(error);
          });
        });
      });
    };

    var beforeTransition = function beforeTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      setZIndex(enteringEl, leavingEl, opts.direction);

      if (opts.showGoBack) {
        enteringEl.classList.add('can-go-back');
      } else {
        enteringEl.classList.remove('can-go-back');
      }

      setPageHidden(enteringEl, false);

      if (leavingEl) {
        setPageHidden(leavingEl, false);
      }
    };

    var runTransition = function runTransition(opts) {
      var animationBuilder, ani;
      return regeneratorRuntime.async(function runTransition$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(getAnimationBuilder(opts));

            case 2:
              animationBuilder = _context3.sent;
              ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

              return _context3.abrupt("return", ani);

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      });
    };

    var afterTransition = function afterTransition(opts) {
      var enteringEl = opts.enteringEl;
      var leavingEl = opts.leavingEl;
      enteringEl.classList.remove('ion-page-invisible');

      if (leavingEl !== undefined) {
        leavingEl.classList.remove('ion-page-invisible');
      }
    };

    var getAnimationBuilder = function getAnimationBuilder(opts) {
      var builder;
      return regeneratorRuntime.async(function getAnimationBuilder$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", undefined);

            case 2:
              if (!opts.animationBuilder) {
                _context4.next = 4;
                break;
              }

              return _context4.abrupt("return", opts.animationBuilder);

            case 4:
              if (!(opts.mode === 'ios')) {
                _context4.next = 10;
                break;
              }

              _context4.next = 7;
              return regeneratorRuntime.awrap(iosTransitionAnimation());

            case 7:
              _context4.t0 = _context4.sent.iosTransitionAnimation;
              _context4.next = 13;
              break;

            case 10:
              _context4.next = 12;
              return regeneratorRuntime.awrap(mdTransitionAnimation());

            case 12:
              _context4.t0 = _context4.sent.mdTransitionAnimation;

            case 13:
              builder = _context4.t0;
              return _context4.abrupt("return", builder);

            case 15:
            case "end":
              return _context4.stop();
          }
        }
      });
    };

    var animation = function animation(animationBuilder, opts) {
      var trans;
      return regeneratorRuntime.async(function animation$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(waitForReady(opts, true));

            case 2:
              _context5.next = 4;
              return regeneratorRuntime.awrap(__webpack_require__.e(
              /*! import() | index-d9adb105-js */
              "index-d9adb105-js").then(__webpack_require__.bind(null,
              /*! ./index-d9adb105.js */
              "./node_modules/@ionic/core/dist/esm/index-d9adb105.js")).then(function (mod) {
                return mod.create(animationBuilder, opts.baseEl, opts);
              }));

            case 4:
              trans = _context5.sent;
              fireWillEvents(opts.enteringEl, opts.leavingEl);
              _context5.next = 8;
              return regeneratorRuntime.awrap(playTransition(trans, opts));

            case 8:
              if (opts.progressCallback) {
                opts.progressCallback(undefined);
              }

              if (trans.hasCompleted) {
                fireDidEvents(opts.enteringEl, opts.leavingEl);
              }

              return _context5.abrupt("return", {
                hasCompleted: trans.hasCompleted,
                animation: trans
              });

            case 11:
            case "end":
              return _context5.stop();
          }
        }
      });
    };

    var noAnimation = function noAnimation(opts) {
      var enteringEl, leavingEl;
      return regeneratorRuntime.async(function noAnimation$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              enteringEl = opts.enteringEl;
              leavingEl = opts.leavingEl;
              _context6.next = 4;
              return regeneratorRuntime.awrap(waitForReady(opts, false));

            case 4:
              fireWillEvents(enteringEl, leavingEl);
              fireDidEvents(enteringEl, leavingEl);
              return _context6.abrupt("return", {
                hasCompleted: true
              });

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      });
    };

    var waitForReady = function waitForReady(opts, defaultDeep) {
      var deep, promises;
      return regeneratorRuntime.async(function waitForReady$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
              promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
              _context7.next = 4;
              return regeneratorRuntime.awrap(Promise.all(promises));

            case 4:
              _context7.next = 6;
              return regeneratorRuntime.awrap(notifyViewReady(opts.viewIsReady, opts.enteringEl));

            case 6:
            case "end":
              return _context7.stop();
          }
        }
      });
    };

    var notifyViewReady = function notifyViewReady(viewIsReady, enteringEl) {
      return regeneratorRuntime.async(function notifyViewReady$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              if (!viewIsReady) {
                _context8.next = 3;
                break;
              }

              _context8.next = 3;
              return regeneratorRuntime.awrap(viewIsReady(enteringEl));

            case 3:
            case "end":
              return _context8.stop();
          }
        }
      });
    };

    var playTransition = function playTransition(trans, opts) {
      var progressCallback = opts.progressCallback;
      var promise = new Promise(function (resolve) {
        return trans.onFinish(resolve);
      }); // cool, let's do this, start the transition

      if (progressCallback) {
        // this is a swipe to go back, just get the transition progress ready
        // kick off the swipe animation start
        trans.progressStart();
        progressCallback(trans);
      } else {
        // only the top level transition should actually start "play"
        // kick it off and let it play through
        // ******** DOM WRITE ****************
        trans.play();
      } // create a callback for when the animation is done


      return promise;
    };

    var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
      lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["b"]);
      lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["L"]);
    };

    var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
      lifecycle(enteringEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["a"]);
      lifecycle(leavingEl, _chunk_94c4865f_js__WEBPACK_IMPORTED_MODULE_1__["c"]);
    };

    var lifecycle = function lifecycle(el, eventName) {
      if (el) {
        var ev = new CustomEvent(eventName, {
          bubbles: false,
          cancelable: false
        });
        el.dispatchEvent(ev);
      }
    };

    var shallowReady = function shallowReady(el) {
      if (el && el.componentOnReady) {
        return el.componentOnReady();
      }

      return Promise.resolve();
    };

    var deepReady = function deepReady(el) {
      var element, stencilEl;
      return regeneratorRuntime.async(function deepReady$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              element = el;

              if (!element) {
                _context9.next = 10;
                break;
              }

              if (!(element.componentOnReady != null)) {
                _context9.next = 8;
                break;
              }

              _context9.next = 5;
              return regeneratorRuntime.awrap(element.componentOnReady());

            case 5:
              stencilEl = _context9.sent;

              if (!(stencilEl != null)) {
                _context9.next = 8;
                break;
              }

              return _context9.abrupt("return");

            case 8:
              _context9.next = 10;
              return regeneratorRuntime.awrap(Promise.all(Array.from(element.children).map(deepReady)));

            case 10:
            case "end":
              return _context9.stop();
          }
        }
      });
    };

    var setPageHidden = function setPageHidden(el, hidden) {
      if (hidden) {
        el.setAttribute('aria-hidden', 'true');
        el.classList.add('ion-page-hidden');
      } else {
        el.hidden = false;
        el.removeAttribute('aria-hidden');
        el.classList.remove('ion-page-hidden');
      }
    };

    var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
      if (enteringEl !== undefined) {
        enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
      }

      if (leavingEl !== undefined) {
        leavingEl.style.zIndex = '100';
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-4e92c885.js ***!
    \*************************************************************/

  /*! exports provided: a, b, c, h */

  /***/
  function node_modulesIonicCoreDistEsmChunk4e92c885Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return hapticSelectionStart;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return hapticSelectionChanged;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return hapticSelectionEnd;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hapticSelection;
    });
    /**
     * Check to see if the Haptic Plugin is available
     * @return Returns `true` or false if the plugin is available
     */

    /**
     * Trigger a selection changed haptic event. Good for one-time events
     * (not for gestures)
     */


    var hapticSelection = function hapticSelection() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.selection();
      }
    };
    /**
     * Tell the haptic engine that a gesture for a selection change is starting.
     */


    var hapticSelectionStart = function hapticSelectionStart() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionStart();
      }
    };
    /**
     * Tell the haptic engine that a selection changed during a gesture.
     */


    var hapticSelectionChanged = function hapticSelectionChanged() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionChanged();
      }
    };
    /**
     * Tell the haptic engine we are done with a gesture. This needs to be
     * called lest resources are not properly recycled.
     */


    var hapticSelectionEnd = function hapticSelectionEnd() {
      var engine = window.TapticEngine;

      if (engine) {
        engine.gestureSelectionEnd();
      }
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js ***!
    \*************************************************************/

  /*! exports provided: a, b, c, d, e, f, h, i, n, p, r */

  /***/
  function node_modulesIonicCoreDistEsmChunkC90aaa66Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "a", function () {
      return rIC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "b", function () {
      return assert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "c", function () {
      return clamp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "d", function () {
      return debounceEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "e", function () {
      return debounce;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "f", function () {
      return findItemLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "h", function () {
      return hasShadowDom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "i", function () {
      return isEndSide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "n", function () {
      return now;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "p", function () {
      return pointerCoord;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "r", function () {
      return renderHiddenInput;
    });

    var rIC = function rIC(callback) {
      if ('requestIdleCallback' in window) {
        window.requestIdleCallback(callback);
      } else {
        setTimeout(callback, 32);
      }
    };

    var hasShadowDom = function hasShadowDom(el) {
      return !!el.shadowRoot && !!el.attachShadow;
    };

    var findItemLabel = function findItemLabel(componentEl) {
      var itemEl = componentEl.closest('ion-item');

      if (itemEl) {
        return itemEl.querySelector('ion-label');
      }

      return null;
    };

    var renderHiddenInput = function renderHiddenInput(always, container, name, value, disabled) {
      if (always || hasShadowDom(container)) {
        var input = container.querySelector('input.aux-input');

        if (!input) {
          input = container.ownerDocument.createElement('input');
          input.type = 'hidden';
          input.classList.add('aux-input');
          container.appendChild(input);
        }

        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
      }
    };

    var clamp = function clamp(min, n, max) {
      return Math.max(min, Math.min(n, max));
    };

    var assert = function assert(actual, reason) {
      if (!actual) {
        var message = 'ASSERT: ' + reason;
        console.error(message);
        debugger; // tslint:disable-line

        throw new Error(message);
      }
    };

    var now = function now(ev) {
      return ev.timeStamp || Date.now();
    };

    var pointerCoord = function pointerCoord(ev) {
      // get X coordinates for either a mouse click
      // or a touch depending on the given event
      if (ev) {
        var changedTouches = ev.changedTouches;

        if (changedTouches && changedTouches.length > 0) {
          var touch = changedTouches[0];
          return {
            x: touch.clientX,
            y: touch.clientY
          };
        }

        if (ev.pageX !== undefined) {
          return {
            x: ev.pageX,
            y: ev.pageY
          };
        }
      }

      return {
        x: 0,
        y: 0
      };
    };
    /**
     * @hidden
     * Given a side, return if it should be on the end
     * based on the value of dir
     * @param side the side
     * @param isRTL whether the application dir is rtl
     */


    var isEndSide = function isEndSide(side) {
      var isRTL = document.dir === 'rtl';

      switch (side) {
        case 'start':
          return isRTL;

        case 'end':
          return !isRTL;

        default:
          throw new Error("\"".concat(side, "\" is not a valid value for [side]. Use \"start\" or \"end\" instead."));
      }
    };

    var debounceEvent = function debounceEvent(event, wait) {
      var original = event._original || event;
      return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
      };
    };

    var debounce = function debounce(func) {
      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var timer;
      return function () {
        clearTimeout(timer);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        timer = setTimeout.apply(void 0, [func, wait].concat(args));
      };
    };
    /***/

  },

  /***/
  "./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js":
  /*!*************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/chunk-cae2ca23.js ***!
    \*************************************************************/

  /*! exports provided: s */

  /***/
  function node_modulesIonicCoreDistEsmChunkCae2ca23Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s", function () {
      return sanitizeDOMString;
    });
    /**
     * Does a simple sanitization of all elements
     * in an untrusted string
     */


    var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
      try {
        if (typeof untrustedString !== 'string' || untrustedString === '') {
          return untrustedString;
        }
        /**
         * Create a document fragment
         * separate from the main DOM,
         * create a div to do our work in
         */


        var documentFragment = document.createDocumentFragment();
        var workingDiv = document.createElement('div');
        documentFragment.appendChild(workingDiv);
        workingDiv.innerHTML = untrustedString;
        /**
         * Remove any elements
         * that are blocked
         */

        blockedTags.forEach(function (blockedTag) {
          var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

          for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
            var element = getElementsToRemove[elementIndex];

            if (element.parentNode) {
              element.parentNode.removeChild(element);
            } else {
              documentFragment.removeChild(element);
            }
            /**
             * We still need to sanitize
             * the children of this element
             * as they are left behind
             */


            var childElements = getElementChildren(element);
            /* tslint:disable-next-line */

            for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
              sanitizeElement(childElements[childIndex]);
            }
          }
        });
        /**
         * Go through remaining elements and remove
         * non-allowed attribs
         */
        // IE does not support .children on document fragments, only .childNodes

        var documentFragmentChildren = getElementChildren(documentFragment);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < documentFragmentChildren.length; childIndex++) {
          sanitizeElement(documentFragmentChildren[childIndex]);
        } // Append document fragment to div


        var fragmentDiv = document.createElement('div');
        fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

        var getInnerDiv = fragmentDiv.querySelector('div');
        return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
      } catch (err) {
        console.error(err);
        return '';
      }
    };
    /**
     * Clean up current element based on allowed attributes
     * and then recursively dig down into any child elements to
     * clean those up as well
     */


    var sanitizeElement = function sanitizeElement(element) {
      // IE uses childNodes, so ignore nodes that are not elements
      if (element.nodeType && element.nodeType !== 1) {
        return;
      }

      for (var i = element.attributes.length - 1; i >= 0; i--) {
        var attribute = element.attributes[i];
        var attributeName = attribute.name; // remove non-allowed attribs

        if (!allowedAttributes.includes(attributeName.toLowerCase())) {
          element.removeAttribute(attributeName);
          continue;
        } // clean up any allowed attribs
        // that attempt to do any JS funny-business


        var attributeValue = attribute.value;
        /* tslint:disable-next-line */

        if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
          element.removeAttribute(attributeName);
        }
      }
      /**
       * Sanitize any nested children
       */


      var childElements = getElementChildren(element);
      /* tslint:disable-next-line */

      for (var _i = 0; _i < childElements.length; _i++) {
        sanitizeElement(childElements[_i]);
      }
    };
    /**
     * IE doesn't always support .children
     * so we revert to .childNodes instead
     */


    var getElementChildren = function getElementChildren(element) {
      return element.children != null ? element.children : element.childNodes;
    };

    var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
    var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];
    /***/
  },

  /***/
  "./node_modules/firebase/app/dist/index.cjs.js":
  /*!*****************************************************!*\
    !*** ./node_modules/firebase/app/dist/index.cjs.js ***!
    \*****************************************************/

  /*! no static exports found */

  /***/
  function node_modulesFirebaseAppDistIndexCjsJs(module, exports, __webpack_require__) {
    "use strict";

    function _interopDefault(ex) {
      return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
    }

    var firebase = _interopDefault(__webpack_require__(
    /*! @firebase/app */
    "./node_modules/@firebase/app/dist/index.cjs.js"));
    /**
     * @license
     * Copyright 2018 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */


    module.exports = firebase; //# sourceMappingURL=index.cjs.js.map

    /***/
  },

  /***/
  "./node_modules/firebase/auth/dist/index.esm.js":
  /*!******************************************************!*\
    !*** ./node_modules/firebase/auth/dist/index.esm.js ***!
    \******************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseAuthDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/auth */
    "./node_modules/@firebase/auth/dist/auth.esm.js"); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./node_modules/firebase/database/dist/index.esm.js":
  /*!**********************************************************!*\
    !*** ./node_modules/firebase/database/dist/index.esm.js ***!
    \**********************************************************/

  /*! no exports provided */

  /***/
  function node_modulesFirebaseDatabaseDistIndexEsmJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _firebase_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @firebase/database */
    "./node_modules/@firebase/database/dist/index.cjs.js");
    /* harmony import */


    var _firebase_database__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(_firebase_database__WEBPACK_IMPORTED_MODULE_0__); //# sourceMappingURL=index.esm.js.map

    /***/

  },

  /***/
  "./src/app/alert.service.ts":
  /*!**********************************!*\
    !*** ./src/app/alert.service.ts ***!
    \**********************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
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
    /* harmony import */


    var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/social-sharing/ngx */
    "./node_modules/@ionic-native/social-sharing/ngx/index.js");
    /* harmony import */


    var _toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toast.service */
    "./src/app/toast.service.ts");
    /* harmony import */


    var _url_shortener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./url-shortener.service */
    "./src/app/url-shortener.service.ts"); // import { HoaStoreService } from '../hoa-store.service';
    // import { tiny } from 'tiny-shortener';


    var AlertService =
    /*#__PURE__*/
    function () {
      function AlertService(alertCtrl, toast, urlShort, socialSharing) {
        _classCallCheck(this, AlertService);

        this.alertCtrl = alertCtrl;
        this.toast = toast;
        this.urlShort = urlShort;
        this.socialSharing = socialSharing;
      }

      _createClass(AlertService, [{
        key: "presentShareAlert",
        value: function presentShareAlert(msg, form, code, profile, location) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.alertCtrl.create({
                      // header: 'Confirm!',
                      message: msg,
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah'); // return false;
                        }
                      }, {
                        text: 'Yes',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this.shareBooking(form, code, profile, location); // return true;

                        }
                      }]
                    });

                  case 2:
                    alert = _context10.sent;
                    _context10.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "presentGroupShareAlert",
        value: function presentGroupShareAlert(msg, guests, code, profile, location) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.alertCtrl.create({
                      // header: 'Confirm!',
                      message: msg,
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: function handler() {
                          console.log('Confirm Cancel: blah'); // return false;
                        }
                      }, {
                        text: 'Yes',
                        cssClass: 'secondary',
                        handler: function handler() {
                          console.log('Confirm Okay');

                          _this2.shareGroupBooking(guests, code, profile, location); // return true;

                        }
                      }]
                    });

                  case 2:
                    alert = _context11.sent;
                    _context11.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "shareBooking",
        value: function shareBooking(form, code, profile, location) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var short_url, message;
            return regeneratorRuntime.wrap(function _callee3$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    // SHARE BOOKING VIA SMS TO VISITOR
                    // USING IONIC-NATIVE
                    short_url = "https://www.google.com/maps/dir/?api=1&destination=".concat(location.lat, ",").concat(location.lng); // SHORTEN URL
                    // let short_url;
                    // // tslint:disable-next-line:max-line-length
                    // this.urlShort.shortenURL(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`).subscribe((res: any) => {
                    //       short_url = res.id;
                    //       console.log('short_url', res.id);
                    // });
                    // tslint:disable-next-line:max-line-length
                    // const short_url = <string> await tiny(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`).catch((error: Error) => console.error(error));
                    // tslint:disable-next-line:max-line-length

                    message = "Dear ".concat(form.get('name').value, ", your access code into ").concat(profile.estateName, " is ").concat(code, ".\nKindly present access code on arrival.\nHost: ").concat(profile.fullname, "\nDirection: https://www.google.com/maps/dir/?api=1&destination=").concat(location.lat, ",").concat(location.lng, "\n\nPowered by CommPass");
                    this.socialSharing.share(message).then(function () {
                      _this3.toast.showToast('Booking Shared', '2000', 'bottom');
                    }).catch(function (err) {
                      _this3.toast.showToast(err.message, '4000', 'bottom');
                    }); // const message = `Hey ${form.get('name').value}, you\'re booked. Your serial number is: ${code}`;
                    // this.socialSharing.share(message).then(() => {
                    //       this.toast.showToast('Booking Shared', '2000', 'bottom');
                    // }).catch((err: Error) => {
                    //       this.toast.showToast(err.message, '4000', 'bottom');
                    // });

                  case 3:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "shareGroupBooking",
        value: function shareGroupBooking(guests, code, profile, location) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            var short_url, message;
            return regeneratorRuntime.wrap(function _callee4$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    // SHARE BOOKING VIA SMS TO VISITOR
                    // USING IONIC-NATIVE
                    short_url = "https://www.google.com/maps/dir/?api=1&destination=".concat(location.lat, ",").concat(location.lng); // SHORTEN URL
                    // let short_url;
                    // // tslint:disable-next-line:max-line-length
                    // this.urlShort.shortenURL(`https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`).subscribe((res: any) => {
                    //       short_url = res.id;
                    //       console.log('short_url', res.id);
                    // });
                    // tslint:disable-next-line:max-line-length

                    message = "Dear guest, your access code into ".concat(profile.estateName, " is ").concat(code, ".\nKindly present access code on arrival.\nHost: ").concat(profile.fullname, "\nDirection: https://www.google.com/maps/dir/?api=1&destination=").concat(location.lat, ",").concat(location.lng, "\n\nPowered by CommPass"); //       let phoneNumbers = '';
                    // guests.forEach((guest) => {
                    //       phoneNumbers += `${guest.phone},`;
                    // });
                    // SHARE VIA SOCIAL MEDIA

                    this.socialSharing.share(message).then(function () {
                      _this4.toast.showToast('Booking Shared', '2000', 'bottom');
                    }).catch(function (err) {
                      _this4.toast.showToast(err.message, '4000', 'bottom');
                    }); // const message = `Hey ${form.get('name').value}, you\'re booked. Your serial number is: ${code}`;
                    // this.socialSharing.share(message).then(() => {
                    //       this.toast.showToast('Booking Shared', '2000', 'bottom');
                    // }).catch((err: Error) => {
                    //       this.toast.showToast(err.message, '4000', 'bottom');
                    // });

                  case 3:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]
      }, {
        type: _url_shortener_service__WEBPACK_IMPORTED_MODULE_5__["UrlShortenerService"]
      }, {
        type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"], _url_shortener_service__WEBPACK_IMPORTED_MODULE_5__["UrlShortenerService"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_3__["SocialSharing"]])], AlertService);
    /***/
  },

  /***/
  "./src/app/deals/deals.service.ts":
  /*!****************************************!*\
    !*** ./src/app/deals/deals.service.ts ***!
    \****************************************/

  /*! exports provided: DealsService */

  /***/
  function srcAppDealsDealsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsService", function () {
      return DealsService;
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


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listing/deals-listing.model */
    "./src/app/deals/listing/deals-listing.model.ts");
    /* harmony import */


    var _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details/deals-details.model */
    "./src/app/deals/details/deals-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DealsService =
    /*#__PURE__*/
    function () {
      function DealsService(http) {
        _classCallCheck(this, DealsService);

        this.http = http;
      }

      _createClass(DealsService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          var _this5 = this;

          return this.http.get('./assets/sample-data/deals/listing.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (listingData) {
            // using rest operator to divide the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb
            var items = listingData.items,
                otherData = tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"](listingData, ["items"]);
            var itemsWithRelativeDates = items.map(function (dealItem, index) {
              // Relative date (better to showcase UI micro-interactions)
              return Object.assign({}, dealItem, {
                expirationDate: _this5.relativeDates[index]
              });
            }); // using spread operator to concat the data https://dev.to/napoleon039/how-to-use-the-spread-and-rest-operator-4jbb

            return Object.assign({}, otherData, {
              items: itemsWithRelativeDates
            });
          }));
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_deals_listing_model__WEBPACK_IMPORTED_MODULE_4__["DealsListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/deals/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (detailsData) {
            var expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss');
            return Object.assign({}, detailsData, {
              expirationDate: expirationDate
            });
          }));
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Initialize the model specifying that it is a shell model
          var shellModel = new _details_deals_details_model__WEBPACK_IMPORTED_MODULE_5__["DealsDetailsModel"]();
          this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.detailsDataStore.load(dataSource);
          return this.detailsDataStore;
        }
      }, {
        key: "relativeDates",
        get: function get() {
          return [dayjs__WEBPACK_IMPORTED_MODULE_3__().add(1, 'day').add(8, 'hour').add(10, 'second').format('MM/DD/YYYY HH:mm:ss'), dayjs__WEBPACK_IMPORTED_MODULE_3__().add(7, 'day').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'month').format('MM/DD/YYYY'), dayjs__WEBPACK_IMPORTED_MODULE_3__().add(2, 'month').format('MM/DD/YYYY')];
        }
      }]);

      return DealsService;
    }();

    DealsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
      }];
    };

    DealsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]])], DealsService);
    /***/
  },

  /***/
  "./src/app/deals/details/deals-details.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/deals/details/deals-details.model.ts ***!
    \******************************************************/

  /*! exports provided: DealsDetailsModel */

  /***/
  function srcAppDealsDetailsDealsDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsDetailsModel", function () {
      return DealsDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var DealsDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE) {
      _inherits(DealsDetailsModel, _shell_data_store__WE);

      function DealsDetailsModel() {
        var _this6;

        _classCallCheck(this, DealsDetailsModel);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(DealsDetailsModel).call(this));
        _this6.showcaseImages = ['', '', '']; // Default mock value
        // expirationDate = '03/03/2019';

        _this6.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
        _this6.relatedDeals = [{
          logo: '',
          name: '',
          description: ''
        }, {
          logo: '',
          name: '',
          description: ''
        }, {
          logo: '',
          name: '',
          description: ''
        }];
        return _this6;
      }

      return DealsDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_2__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/deals/listing/deals-listing.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/deals/listing/deals-listing.model.ts ***!
    \******************************************************/

  /*! exports provided: DealsItemModel, DealsListingModel */

  /***/
  function srcAppDealsListingDealsListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsItemModel", function () {
      return DealsItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DealsListingModel", function () {
      return DealsListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var DealsItemModel = function DealsItemModel() {
      _classCallCheck(this, DealsItemModel);

      // Default mock value
      // expirationDate = '12/01/2018';
      this.expirationDate = dayjs__WEBPACK_IMPORTED_MODULE_1__().add(5, 'day').format('MM/DD/YYYY HH:mm:ss');
    };

    var DealsListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE2) {
      _inherits(DealsListingModel, _shell_data_store__WE2);

      function DealsListingModel() {
        var _this7;

        _classCallCheck(this, DealsListingModel);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(DealsListingModel).call(this));
        _this7.items = [new DealsItemModel(), new DealsItemModel(), new DealsItemModel(), new DealsItemModel()];
        return _this7;
      }

      return DealsListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_2__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/fashion/details/fashion-details.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/fashion/details/fashion-details.model.ts ***!
    \**********************************************************/

  /*! exports provided: FashionDetailsModel */

  /***/
  function srcAppFashionDetailsFashionDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionDetailsModel", function () {
      return FashionDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FashionDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE3) {
      _inherits(FashionDetailsModel, _shell_data_store__WE3);

      function FashionDetailsModel() {
        var _this8;

        _classCallCheck(this, FashionDetailsModel);

        _this8 = _possibleConstructorReturn(this, _getPrototypeOf(FashionDetailsModel).call(this));
        _this8.showcaseImages = [{
          type: '',
          source: ''
        }, {
          type: '',
          source: ''
        }, {
          type: '',
          source: ''
        }];
        _this8.colorVariants = [{
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }];
        _this8.sizeVariants = [{
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }, {
          name: '',
          value: '',
          default: false
        }];
        _this8.relatedProducts = [{
          id: null
        }, {
          id: null
        }];
        return _this8;
      }

      return FashionDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/fashion/fashion.service.ts":
  /*!********************************************!*\
    !*** ./src/app/fashion/fashion.service.ts ***!
    \********************************************/

  /*! exports provided: FashionService */

  /***/
  function srcAppFashionFashionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionService", function () {
      return FashionService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/fashion-listing.model */
    "./src/app/fashion/listing/fashion-listing.model.ts");
    /* harmony import */


    var _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/fashion-details.model */
    "./src/app/fashion/details/fashion-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FashionService =
    /*#__PURE__*/
    function () {
      function FashionService(http) {
        _classCallCheck(this, FashionService);

        this.http = http;
      }

      _createClass(FashionService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/fashion/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_fashion_listing_model__WEBPACK_IMPORTED_MODULE_3__["FashionListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/fashion/details.json');
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Use cache if available
          if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_fashion_details_model__WEBPACK_IMPORTED_MODULE_4__["FashionDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
          }

          return this.detailsDataStore;
        }
      }]);

      return FashionService;
    }();

    FashionService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FashionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FashionService);
    /***/
  },

  /***/
  "./src/app/fashion/listing/fashion-listing.model.ts":
  /*!**********************************************************!*\
    !*** ./src/app/fashion/listing/fashion-listing.model.ts ***!
    \**********************************************************/

  /*! exports provided: FashionItemModel, FashionListingModel */

  /***/
  function srcAppFashionListingFashionListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionItemModel", function () {
      return FashionItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FashionListingModel", function () {
      return FashionListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FashionItemModel = function FashionItemModel() {
      _classCallCheck(this, FashionItemModel);
    };

    var FashionListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE4) {
      _inherits(FashionListingModel, _shell_data_store__WE4);

      function FashionListingModel() {
        var _this9;

        _classCallCheck(this, FashionListingModel);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(FashionListingModel).call(this));
        _this9.items = [new FashionItemModel(), new FashionItemModel(), new FashionItemModel(), new FashionItemModel()];
        return _this9;
      }

      return FashionListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/food/details/food-details.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/food/details/food-details.model.ts ***!
    \****************************************************/

  /*! exports provided: FoodDetailsModel */

  /***/
  function srcAppFoodDetailsFoodDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodDetailsModel", function () {
      return FoodDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FoodDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE5) {
      _inherits(FoodDetailsModel, _shell_data_store__WE5);

      function FoodDetailsModel() {
        var _this10;

        _classCallCheck(this, FoodDetailsModel);

        _this10 = _possibleConstructorReturn(this, _getPrototypeOf(FoodDetailsModel).call(this));
        _this10.ratings = [{
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }, {
          concept: '',
          rate: null
        }];
        _this10.openHours = [{
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: false,
          hourFrom: '',
          hourTo: ''
        }];
        _this10.tags = ['', '', ''];
        _this10.usersPictures = ['', '', '', '', '', ''];
        _this10.popularDishes = [{
          name: '',
          rate: null,
          votesCount: null
        }, {
          name: '',
          rate: null,
          votesCount: null
        }];
        _this10.reviews = [{
          user: {
            image: '',
            name: '',
            reviewsCount: null,
            points: null
          },
          avgRating: null,
          ratings: [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }],
          publishedAt: null,
          message: ''
        }, {
          user: {
            image: '',
            name: '',
            reviewsCount: null,
            points: null
          },
          avgRating: null,
          ratings: [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }],
          publishedAt: null,
          message: ''
        }, {
          user: {
            image: '',
            name: '',
            reviewsCount: null,
            points: null
          },
          avgRating: null,
          ratings: [{
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }, {
            concept: '',
            rate: null
          }],
          publishedAt: null,
          message: ''
        }];
        _this10.popularRecipes = [{
          showcaseImage: '',
          name: '',
          chef: {
            name: '',
            image: ''
          },
          difficulty: '',
          time: '',
          calories: '',
          chefExtract: ''
        }];
        return _this10;
      }

      return FoodDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/food/food.service.ts":
  /*!**************************************!*\
    !*** ./src/app/food/food.service.ts ***!
    \**************************************/

  /*! exports provided: FoodService */

  /***/
  function srcAppFoodFoodServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodService", function () {
      return FoodService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listing/food-listing.model */
    "./src/app/food/listing/food-listing.model.ts");
    /* harmony import */


    var _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details/food-details.model */
    "./src/app/food/details/food-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FoodService =
    /*#__PURE__*/
    function () {
      function FoodService(http) {
        _classCallCheck(this, FoodService);

        this.http = http;
      }

      _createClass(FoodService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/food/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_food_listing_model__WEBPACK_IMPORTED_MODULE_4__["FoodListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource(slug) {
          return this.http.get('./assets/sample-data/food/details.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["flatMap"])(function (details) {
            return details.items.filter(function (item) {
              return item.slug === slug;
            });
          }));
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Initialize the model specifying that it is a shell model
          var shellModel = new _details_food_details_model__WEBPACK_IMPORTED_MODULE_5__["FoodDetailsModel"]();
          this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_6__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

          this.detailsDataStore.load(dataSource);
          return this.detailsDataStore;
        }
      }]);

      return FoodService;
    }();

    FoodService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FoodService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FoodService);
    /***/
  },

  /***/
  "./src/app/food/listing/food-listing.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/food/listing/food-listing.model.ts ***!
    \****************************************************/

  /*! exports provided: FoodItemModel, FoodListingModel */

  /***/
  function srcAppFoodListingFoodListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodItemModel", function () {
      return FoodItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FoodListingModel", function () {
      return FoodListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var FoodItemModel = function FoodItemModel() {
      _classCallCheck(this, FoodItemModel);

      this.tags = ['', '', ''];
      this.pictures = ['', '', '', '', ''];
    };

    var FoodListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE6) {
      _inherits(FoodListingModel, _shell_data_store__WE6);

      function FoodListingModel() {
        var _this11;

        _classCallCheck(this, FoodListingModel);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(FoodListingModel).call(this));
        _this11.items = [new FoodItemModel(), new FoodItemModel(), new FoodItemModel(), new FoodItemModel()];
        return _this11;
      }

      return FoodListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-estate/details/real-estate-details.model.ts":
  /*!******************************************************************!*\
    !*** ./src/app/real-estate/details/real-estate-details.model.ts ***!
    \******************************************************************/

  /*! exports provided: RealEstateDetailsModel */

  /***/
  function srcAppRealEstateDetailsRealEstateDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateDetailsModel", function () {
      return RealEstateDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RealEstateDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE7) {
      _inherits(RealEstateDetailsModel, _shell_data_store__WE7);

      function RealEstateDetailsModel() {
        var _this12;

        _classCallCheck(this, RealEstateDetailsModel);

        _this12 = _possibleConstructorReturn(this, _getPrototypeOf(RealEstateDetailsModel).call(this));
        _this12.amenities = [{
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }, {
          name: '',
          icon: ''
        }];
        return _this12;
      }

      return RealEstateDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-estate/listing/real-estate-listing.model.ts":
  /*!******************************************************************!*\
    !*** ./src/app/real-estate/listing/real-estate-listing.model.ts ***!
    \******************************************************************/

  /*! exports provided: RealEstateItemModel, RealEstateListingModel */

  /***/
  function srcAppRealEstateListingRealEstateListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateItemModel", function () {
      return RealEstateItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateListingModel", function () {
      return RealEstateListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RealEstateItemModel = function RealEstateItemModel() {
      _classCallCheck(this, RealEstateItemModel);

      this.amenities = [{
        name: '',
        icon: ''
      }, {
        name: '',
        icon: ''
      }];
    };

    var RealEstateListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE8) {
      _inherits(RealEstateListingModel, _shell_data_store__WE8);

      function RealEstateListingModel() {
        var _this13;

        _classCallCheck(this, RealEstateListingModel);

        _this13 = _possibleConstructorReturn(this, _getPrototypeOf(RealEstateListingModel).call(this));
        _this13.items = [new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel(), new RealEstateItemModel()];
        return _this13;
      }

      return RealEstateListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/real-estate/real-estate.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/real-estate/real-estate.service.ts ***!
    \****************************************************/

  /*! exports provided: RealEstateService */

  /***/
  function srcAppRealEstateRealEstateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealEstateService", function () {
      return RealEstateService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./listing/real-estate-listing.model */
    "./src/app/real-estate/listing/real-estate-listing.model.ts");
    /* harmony import */


    var _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./details/real-estate-details.model */
    "./src/app/real-estate/details/real-estate-details.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var RealEstateService =
    /*#__PURE__*/
    function () {
      function RealEstateService(http) {
        _classCallCheck(this, RealEstateService);

        this.http = http;
      }

      _createClass(RealEstateService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/real-estate/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_real_estate_listing_model__WEBPACK_IMPORTED_MODULE_3__["RealEstateListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/real-estate/details.json');
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Use cache if available
          if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_real_estate_details_model__WEBPACK_IMPORTED_MODULE_4__["RealEstateDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
          }

          return this.detailsDataStore;
        }
      }]);

      return RealEstateService;
    }();

    RealEstateService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RealEstateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], RealEstateService);
    /***/
  },

  /***/
  "./src/app/toast.service.ts":
  /*!**********************************!*\
    !*** ./src/app/toast.service.ts ***!
    \**********************************/

  /*! exports provided: ToastService */

  /***/
  function srcAppToastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastService", function () {
      return ToastService;
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


    var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/toast/ngx */
    "./node_modules/@ionic-native/toast/ngx/index.js");

    var ToastService =
    /*#__PURE__*/
    function () {
      function ToastService(toast) {
        _classCallCheck(this, ToastService);

        this.toast = toast;
      }

      _createClass(ToastService, [{
        key: "showToast",
        value: function showToast(msg, dur, pos) {
          this.toast.show(msg, dur, pos).subscribe(function (toast) {
            console.log(toast);
          });
        }
      }]);

      return ToastService;
    }();

    ToastService.ctorParameters = function () {
      return [{
        type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_2__["Toast"]
      }];
    };

    ToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_2__["Toast"]])], ToastService);
    /***/
  },

  /***/
  "./src/app/travel/details/travel-details.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/travel/details/travel-details.model.ts ***!
    \********************************************************/

  /*! exports provided: TravelDetailsModel */

  /***/
  function srcAppTravelDetailsTravelDetailsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelDetailsModel", function () {
      return TravelDetailsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var TravelDetailsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE9) {
      _inherits(TravelDetailsModel, _shell_data_store__WE9);

      function TravelDetailsModel() {
        var _this14;

        _classCallCheck(this, TravelDetailsModel);

        _this14 = _possibleConstructorReturn(this, _getPrototypeOf(TravelDetailsModel).call(this));
        _this14.tags = new Array(3).fill('');
        _this14.openHours = [{
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: true,
          hourFrom: '',
          hourTo: ''
        }, {
          day: '',
          open: false,
          hourFrom: '',
          hourTo: ''
        }];
        _this14.whereToStay = [{
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }];
        _this14.whereToEat = [{
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }, {
          picture: '',
          name: '',
          rating: null
        }];
        _this14.relatedActivities = [{
          picture: '',
          name: '',
          category: '',
          rating: null
        }, {
          picture: '',
          name: '',
          category: '',
          rating: null
        }];
        return _this14;
      }

      return TravelDetailsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/travel/listing/travel-listing.model.ts":
  /*!********************************************************!*\
    !*** ./src/app/travel/listing/travel-listing.model.ts ***!
    \********************************************************/

  /*! exports provided: TravelItemModel, TravelListingModel */

  /***/
  function srcAppTravelListingTravelListingModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelItemModel", function () {
      return TravelItemModel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelListingModel", function () {
      return TravelListingModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var TravelItemModel = function TravelItemModel() {
      _classCallCheck(this, TravelItemModel);
    };

    var TravelListingModel =
    /*#__PURE__*/
    function (_shell_data_store__WE10) {
      _inherits(TravelListingModel, _shell_data_store__WE10);

      function TravelListingModel() {
        var _this15;

        _classCallCheck(this, TravelListingModel);

        _this15 = _possibleConstructorReturn(this, _getPrototypeOf(TravelListingModel).call(this));
        _this15.items = [new TravelItemModel(), new TravelItemModel(), new TravelItemModel(), new TravelItemModel()];
        return _this15;
      }

      return TravelListingModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/travel/travel.service.ts":
  /*!******************************************!*\
    !*** ./src/app/travel/travel.service.ts ***!
    \******************************************/

  /*! exports provided: TravelService */

  /***/
  function srcAppTravelTravelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TravelService", function () {
      return TravelService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");
    /* harmony import */


    var _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./listing/travel-listing.model */
    "./src/app/travel/listing/travel-listing.model.ts");
    /* harmony import */


    var _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./details/travel-details.model */
    "./src/app/travel/details/travel-details.model.ts");

    var TravelService =
    /*#__PURE__*/
    function () {
      function TravelService(http) {
        _classCallCheck(this, TravelService);

        this.http = http;
      }

      _createClass(TravelService, [{
        key: "getListingDataSource",
        value: function getListingDataSource() {
          return this.http.get('./assets/sample-data/travel/listing.json');
        }
      }, {
        key: "getListingStore",
        value: function getListingStore(dataSource) {
          // Use cache if available
          if (!this.listingDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _listing_travel_listing_model__WEBPACK_IMPORTED_MODULE_4__["TravelListingModel"]();
            this.listingDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.listingDataStore.load(dataSource);
          }

          return this.listingDataStore;
        }
      }, {
        key: "getDetailsDataSource",
        value: function getDetailsDataSource() {
          return this.http.get('./assets/sample-data/travel/details.json');
        }
      }, {
        key: "getDetailsStore",
        value: function getDetailsStore(dataSource) {
          // Use cache if available
          if (!this.detailsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _details_travel_details_model__WEBPACK_IMPORTED_MODULE_5__["TravelDetailsModel"]();
            this.detailsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_3__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.detailsDataStore.load(dataSource);
          }

          return this.detailsDataStore;
        }
      }]);

      return TravelService;
    }();

    TravelService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TravelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], TravelService);
    /***/
  },

  /***/
  "./src/app/url-shortener.service.ts":
  /*!******************************************!*\
    !*** ./src/app/url-shortener.service.ts ***!
    \******************************************/

  /*! exports provided: UrlShortenerService */

  /***/
  function srcAppUrlShortenerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UrlShortenerService", function () {
      return UrlShortenerService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UrlShortenerService =
    /*#__PURE__*/
    function () {
      function UrlShortenerService(http) {
        _classCallCheck(this, UrlShortenerService);

        this.http = http;
        this.endpoint = 'https://www.googleapis.com/urlshortener/v1/url';
      }

      _createClass(UrlShortenerService, [{
        key: "shortenURL",
        value: function shortenURL(url) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          var data = {
            longUrl: url
          };
          return this.http.post(this.endpoint, data, {
            headers: headers
          });
        }
      }]);

      return UrlShortenerService;
    }();

    UrlShortenerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UrlShortenerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UrlShortenerService);
    /***/
  },

  /***/
  "./src/app/user/friends/user-friends.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/friends/user-friends.model.ts ***!
    \****************************************************/

  /*! exports provided: UserFriendsModel */

  /***/
  function srcAppUserFriendsUserFriendsModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserFriendsModel", function () {
      return UserFriendsModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserFriendsModel =
    /*#__PURE__*/
    function (_shell_data_store__WE11) {
      _inherits(UserFriendsModel, _shell_data_store__WE11);

      function UserFriendsModel() {
        var _this16;

        _classCallCheck(this, UserFriendsModel);

        _this16 = _possibleConstructorReturn(this, _getPrototypeOf(UserFriendsModel).call(this));
        _this16.friends = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: true
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }];
        _this16.followers = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: true
        }];
        _this16.following = [{
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }, {
          image: '',
          name: '',
          job: '',
          followers: '',
          followings: '',
          following: false
        }];
        return _this16;
      }

      return UserFriendsModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/user/profile/user-profile.model.ts":
  /*!****************************************************!*\
    !*** ./src/app/user/profile/user-profile.model.ts ***!
    \****************************************************/

  /*! exports provided: UserProfileModel */

  /***/
  function srcAppUserProfileUserProfileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserProfileModel", function () {
      return UserProfileModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserProfileModel =
    /*#__PURE__*/
    function (_shell_data_store__WE12) {
      _inherits(UserProfileModel, _shell_data_store__WE12);

      function UserProfileModel() {
        var _this17;

        _classCallCheck(this, UserProfileModel);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(UserProfileModel).call(this));
        _this17.friends = [{
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }, {
          image: '',
          name: ''
        }];
        _this17.photos = ['', '', '', ''];
        return _this17;
      }

      return UserProfileModel;
    }(_shell_data_store__WEBPACK_IMPORTED_MODULE_1__["ShellModel"]);
    /***/

  },

  /***/
  "./src/app/user/user.service.ts":
  /*!**************************************!*\
    !*** ./src/app/user/user.service.ts ***!
    \**************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppUserUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile/user-profile.model */
    "./src/app/user/profile/user-profile.model.ts");
    /* harmony import */


    var _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./friends/user-friends.model */
    "./src/app/user/friends/user-friends.model.ts");
    /* harmony import */


    var _shell_data_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shell/data-store */
    "./src/app/shell/data-store.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getProfileDataSource",
        value: function getProfileDataSource() {
          return this.http.get('./assets/sample-data/user/user-profile.json');
        }
      }, {
        key: "getProfileStore",
        value: function getProfileStore(dataSource) {
          // Use cache if available
          if (!this.profileDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _profile_user_profile_model__WEBPACK_IMPORTED_MODULE_3__["UserProfileModel"]();
            this.profileDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.profileDataStore.load(dataSource);
          }

          return this.profileDataStore;
        }
      }, {
        key: "getFriendsDataSource",
        value: function getFriendsDataSource() {
          return this.http.get('./assets/sample-data/user/user-friends.json');
        }
      }, {
        key: "getFriendsStore",
        value: function getFriendsStore(dataSource) {
          // Use cache if available
          if (!this.friendsDataStore) {
            // Initialize the model specifying that it is a shell model
            var shellModel = new _friends_user_friends_model__WEBPACK_IMPORTED_MODULE_4__["UserFriendsModel"]();
            this.friendsDataStore = new _shell_data_store__WEBPACK_IMPORTED_MODULE_5__["DataStore"](shellModel); // Trigger the loading mechanism (with shell) in the dataStore

            this.friendsDataStore.load(dataSource);
          }

          return this.friendsDataStore;
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], UserService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map