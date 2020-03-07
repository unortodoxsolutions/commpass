function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48], {
  /***/
  "./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js ***!
    \*******************************************************************/

  /*! exports provided: ion_radio, ion_radio_group */

  /***/
  function node_modulesIonicCoreDistEsmIonRadio_2MdEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_radio", function () {
      return Radio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ion_radio_group", function () {
      return RadioGroup;
    });
    /* harmony import */


    var _chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./chunk-d0403a2f.js */
    "./node_modules/@ionic/core/dist/esm/chunk-d0403a2f.js");
    /* harmony import */


    var _chunk_1074393c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./chunk-1074393c.js */
    "./node_modules/@ionic/core/dist/esm/chunk-1074393c.js");
    /* harmony import */


    var _chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./chunk-353a032e.js */
    "./node_modules/@ionic/core/dist/esm/chunk-353a032e.js");
    /* harmony import */


    var _chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./chunk-c90aaa66.js */
    "./node_modules/@ionic/core/dist/esm/chunk-c90aaa66.js");
    /**
     * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
     */


    var Radio =
    /*#__PURE__*/
    function () {
      function Radio(hostRef) {
        var _this = this;

        _classCallCheck(this, Radio);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = "ion-rb-".concat(radioButtonIds++);
        /**
         * The name of the control, which is submitted with the form data.
         */

        this.name = this.inputId;
        /**
         * If `true`, the user cannot interact with the radio.
         */

        this.disabled = false;
        /**
         * If `true`, the radio is selected.
         */

        this.checked = false;

        this.onFocus = function () {
          _this.ionFocus.emit();
        };

        this.onBlur = function () {
          _this.ionBlur.emit();
        };

        this.onClick = function () {
          if (_this.checked) {
            _this.ionDeselect.emit();
          } else {
            _this.checked = true;
          }
        };

        this.ionRadioDidLoad = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRadioDidLoad", 7);
        this.ionRadioDidUnload = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionRadioDidUnload", 7);
        this.ionStyle = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionStyle", 7);
        this.ionSelect = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionSelect", 7);
        this.ionDeselect = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionDeselect", 7);
        this.ionFocus = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionFocus", 7);
        this.ionBlur = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionBlur", 7);
      }

      _createClass(Radio, [{
        key: "colorChanged",
        value: function colorChanged() {
          this.emitStyle();
        }
      }, {
        key: "checkedChanged",
        value: function checkedChanged(isChecked) {
          if (isChecked) {
            this.ionSelect.emit({
              checked: true,
              value: this.value
            });
          }

          this.emitStyle();
        }
      }, {
        key: "disabledChanged",
        value: function disabledChanged() {
          this.emitStyle();
        }
      }, {
        key: "componentWillLoad",
        value: function componentWillLoad() {
          if (this.value === undefined) {
            this.value = this.inputId;
          }

          this.emitStyle();
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.ionRadioDidLoad.emit();
        }
      }, {
        key: "componentDidUnload",
        value: function componentDidUnload() {
          this.ionRadioDidUnload.emit();
        }
      }, {
        key: "emitStyle",
        value: function emitStyle() {
          this.ionStyle.emit({
            'radio-checked': this.checked,
            'interactive-disabled': this.disabled
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _Object$assign;

          var inputId = this.inputId,
              disabled = this.disabled,
              checked = this.checked,
              color = this.color,
              el = this.el;
          var mode = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
          var labelId = inputId + '-lbl';
          var label = Object(_chunk_c90aaa66_js__WEBPACK_IMPORTED_MODULE_3__["f"])(el);

          if (label) {
            label.id = labelId;
          }

          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            onClick: this.onClick,
            role: "radio",
            "aria-disabled": disabled ? 'true' : null,
            "aria-checked": "".concat(checked),
            "aria-labelledby": labelId,
            class: Object.assign({}, Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["c"])(color), (_Object$assign = {}, _defineProperty(_Object$assign, mode, true), _defineProperty(_Object$assign, 'in-item', Object(_chunk_353a032e_js__WEBPACK_IMPORTED_MODULE_2__["h"])('ion-item', el)), _defineProperty(_Object$assign, 'interactive', true), _defineProperty(_Object$assign, 'radio-checked', checked), _defineProperty(_Object$assign, 'radio-disabled', disabled), _Object$assign))
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "radio-icon"
          }, Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            class: "radio-inner"
          })), Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: "button",
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            disabled: disabled
          }));
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "color": ["colorChanged"],
            "checked": ["checkedChanged"],
            "disabled": ["disabledChanged"]
          };
        }
      }, {
        key: "style",
        get: function get() {
          return ":host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color:var(--ion-color-step-400,#999);--color-checked:var(--ion-color-primary,#3880ff);--border-width:2px;--border-style:solid;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:50%;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:50%;width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0);-webkit-transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1);transition:transform .28s cubic-bezier(.4,0,.2,1),-webkit-transform .28s cubic-bezier(.4,0,.2,1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scaleX(1);transform:scaleX(1)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:\"\";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}";
        }
      }]);

      return Radio;
    }();

    var radioButtonIds = 0;

    var RadioGroup =
    /*#__PURE__*/
    function () {
      function RadioGroup(hostRef) {
        _classCallCheck(this, RadioGroup);

        Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.inputId = "ion-rg-".concat(radioGroupIds++);
        this.labelId = "".concat(this.inputId, "-lbl");
        this.radios = [];
        /**
         * If `true`, the radios can be deselected.
         */

        this.allowEmptySelection = false;
        /**
         * The name of the control, which is submitted with the form data.
         */

        this.name = this.inputId;
        this.ionChange = Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionChange", 7);
      }

      _createClass(RadioGroup, [{
        key: "valueChanged",
        value: function valueChanged(value) {
          this.updateRadios();
          this.ionChange.emit({
            value: value
          });
        }
      }, {
        key: "onRadioDidLoad",
        value: function onRadioDidLoad(ev) {
          var radio = ev.target;
          radio.name = this.name; // add radio to internal list

          this.radios.push(radio); // this radio-group does not have a value
          // but this radio is checked, so let's set the
          // radio-group's value from the checked radio

          if (this.value == null && radio.checked) {
            this.value = radio.value;
          } else {
            this.updateRadios();
          }
        }
      }, {
        key: "onRadioDidUnload",
        value: function onRadioDidUnload(ev) {
          var index = this.radios.indexOf(ev.target);

          if (index > -1) {
            this.radios.splice(index, 1);
          }
        }
      }, {
        key: "onRadioSelect",
        value: function onRadioSelect(ev) {
          var selectedRadio = ev.target;

          if (selectedRadio) {
            this.value = selectedRadio.value;
          }
        }
      }, {
        key: "onRadioDeselect",
        value: function onRadioDeselect(ev) {
          if (this.allowEmptySelection) {
            var selectedRadio = ev.target;

            if (selectedRadio) {
              selectedRadio.checked = false;
              this.value = undefined;
            }
          }
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          // Get the list header if it exists and set the id
          // this is used to set aria-labelledby
          var header = this.el.querySelector('ion-list-header');

          if (!header) {
            header = this.el.querySelector('ion-item-divider');
          }

          if (header) {
            var label = header.querySelector('ion-label');

            if (label) {
              this.labelId = label.id = this.name + '-lbl';
            }
          }

          this.updateRadios();
        }
      }, {
        key: "updateRadios",
        value: function updateRadios() {
          var value = this.value;
          var hasChecked = false;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.radios[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var radio = _step.value;

              if (!hasChecked && radio.value === value) {
                // correct value for this radio
                // but this radio isn't checked yet
                // and we haven't found a checked yet
                hasChecked = true;
                radio.checked = true;
              } else {
                // this radio doesn't have the correct value
                // or the radio group has been already checked
                radio.checked = false;
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            role: "radiogroup",
            "aria-labelledby": this.labelId,
            class: Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this)
          });
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_chunk_d0403a2f_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "value": ["valueChanged"]
          };
        }
      }]);

      return RadioGroup;
    }();

    var radioGroupIds = 0;
    /***/
  }
}]);
//# sourceMappingURL=48-es5.js.map