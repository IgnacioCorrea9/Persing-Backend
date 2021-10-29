function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn-bd": "./node_modules/moment/locale/bn-bd.js",
      "./bn-bd.js": "./node_modules/moment/locale/bn-bd.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-mx": "./node_modules/moment/locale/es-mx.js",
      "./es-mx.js": "./node_modules/moment/locale/es-mx.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tk": "./node_modules/moment/locale/tk.js",
      "./tk.js": "./node_modules/moment/locale/tk.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/@core/core.module.ts":
  /*!**************************************!*\
    !*** ./src/app/@core/core.module.ts ***!
    \**************************************/

  /*! exports provided: NB_CORE_PROVIDERS, CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NB_CORE_PROVIDERS", function () {
      return NB_CORE_PROVIDERS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _module_import_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./module-import-guard */
    "./src/app/@core/module-import-guard.ts");
    /* harmony import */


    var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./utils */
    "./src/app/@core/utils/index.ts");

    var NB_CORE_PROVIDERS = [_utils__WEBPACK_IMPORTED_MODULE_3__["AnalyticsService"], _utils__WEBPACK_IMPORTED_MODULE_3__["LayoutService"], _utils__WEBPACK_IMPORTED_MODULE_3__["SeoService"], _utils__WEBPACK_IMPORTED_MODULE_3__["StateService"]];

    var CoreModule =
    /*#__PURE__*/
    function () {
      function CoreModule(parentModule) {
        _classCallCheck(this, CoreModule);

        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_2__["throwIfAlreadyLoaded"])(parentModule, "CoreModule");
      }

      _createClass(CoreModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: CoreModule,
            providers: [].concat(NB_CORE_PROVIDERS)
          };
        }
      }]);

      return CoreModule;
    }();

    CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CoreModule
    });
    CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CoreModule_Factory(t) {
        return new (t || CoreModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CoreModule, 12));
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: [],
          declarations: []
        }]
      }], function () {
        return [{
          type: CoreModule,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/module-import-guard.ts":
  /*!**********************************************!*\
    !*** ./src/app/@core/module-import-guard.ts ***!
    \**********************************************/

  /*! exports provided: throwIfAlreadyLoaded */

  /***/
  function srcAppCoreModuleImportGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function () {
      return throwIfAlreadyLoaded;
    });

    function throwIfAlreadyLoaded(parentModule, moduleName) {
      if (parentModule) {
        throw new Error("".concat(moduleName, " has already been loaded. Import Core modules in the AppModule only."));
      }
    }
    /***/

  },

  /***/
  "./src/app/@core/utils/analytics.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/@core/utils/analytics.service.ts ***!
    \**************************************************/

  /*! exports provided: AnalyticsService */

  /***/
  function srcAppCoreUtilsAnalyticsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsService", function () {
      return AnalyticsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AnalyticsService =
    /*#__PURE__*/
    function () {
      function AnalyticsService(location, router) {
        _classCallCheck(this, AnalyticsService);

        this.location = location;
        this.router = router;
        this.enabled = false;
      }

      _createClass(AnalyticsService, [{
        key: "trackPageViews",
        value: function trackPageViews() {
          var _this = this;

          if (this.enabled) {
            this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
              return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"];
            })).subscribe(function () {
              ga('send', {
                hitType: 'pageview',
                page: _this.location.path()
              });
            });
          }
        }
      }, {
        key: "trackEvent",
        value: function trackEvent(eventName) {
          if (this.enabled) {
            ga('send', 'event', eventName);
          }
        }
      }]);

      return AnalyticsService;
    }();

    AnalyticsService.ɵfac = function AnalyticsService_Factory(t) {
      return new (t || AnalyticsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AnalyticsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnalyticsService,
      factory: AnalyticsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/utils/index.ts":
  /*!**************************************!*\
    !*** ./src/app/@core/utils/index.ts ***!
    \**************************************/

  /*! exports provided: LayoutService, AnalyticsService, SeoService, StateService */

  /***/
  function srcAppCoreUtilsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _layout_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./layout.service */
    "./src/app/@core/utils/layout.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return _layout_service__WEBPACK_IMPORTED_MODULE_0__["LayoutService"];
    });
    /* harmony import */


    var _analytics_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./analytics.service */
    "./src/app/@core/utils/analytics.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AnalyticsService", function () {
      return _analytics_service__WEBPACK_IMPORTED_MODULE_1__["AnalyticsService"];
    });
    /* harmony import */


    var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./state.service */
    "./src/app/@core/utils/state.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"];
    });
    /* harmony import */


    var _seo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./seo.service */
    "./src/app/@core/utils/seo.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SeoService", function () {
      return _seo_service__WEBPACK_IMPORTED_MODULE_3__["SeoService"];
    });
    /***/

  },

  /***/
  "./src/app/@core/utils/layout.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/@core/utils/layout.service.ts ***!
    \***********************************************/

  /*! exports provided: LayoutService */

  /***/
  function srcAppCoreUtilsLayoutServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutService", function () {
      return LayoutService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var LayoutService =
    /*#__PURE__*/
    function () {
      function LayoutService() {
        _classCallCheck(this, LayoutService);

        this.layoutSize$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.layoutSizeChange$ = this.layoutSize$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])({
          refCount: true
        }));
      }

      _createClass(LayoutService, [{
        key: "changeLayoutSize",
        value: function changeLayoutSize() {
          this.layoutSize$.next();
        }
      }, {
        key: "onChangeLayoutSize",
        value: function onChangeLayoutSize() {
          return this.layoutSizeChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1));
        }
      }, {
        key: "onSafeChangeLayoutSize",
        value: function onSafeChangeLayoutSize() {
          return this.layoutSizeChange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(350));
        }
      }]);

      return LayoutService;
    }();

    LayoutService.ɵfac = function LayoutService_Factory(t) {
      return new (t || LayoutService)();
    };

    LayoutService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LayoutService,
      factory: LayoutService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/utils/seo.service.ts":
  /*!********************************************!*\
    !*** ./src/app/@core/utils/seo.service.ts ***!
    \********************************************/

  /*! exports provided: SeoService */

  /***/
  function srcAppCoreUtilsSeoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SeoService", function () {
      return SeoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SeoService =
    /*#__PURE__*/
    function () {
      function SeoService(router, document, platformId) {
        _classCallCheck(this, SeoService);

        this.router = router;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);
        this.dom = document;

        if (this.isBrowser) {
          this.createCanonicalTag();
        }
      }

      _createClass(SeoService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.destroy$.next();
          this.destroy$.complete();
        }
      }, {
        key: "createCanonicalTag",
        value: function createCanonicalTag() {
          this.linkCanonical = this.dom.createElement('link');
          this.linkCanonical.setAttribute('rel', 'canonical');
          this.dom.head.appendChild(this.linkCanonical);
          this.linkCanonical.setAttribute('href', this.getCanonicalUrl());
        }
      }, {
        key: "trackCanonicalChanges",
        value: function trackCanonicalChanges() {
          var _this2 = this;

          if (!this.isBrowser) {
            return;
          }

          this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) {
            return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"];
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroy$)).subscribe(function () {
            _this2.linkCanonical.setAttribute('href', _this2.getCanonicalUrl());
          });
        }
      }, {
        key: "getCanonicalUrl",
        value: function getCanonicalUrl() {
          return this.dom.location.origin + this.dom.location.pathname;
        }
      }]);

      return SeoService;
    }();

    SeoService.ɵfac = function SeoService_Factory(t) {
      return new (t || SeoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]));
    };

    SeoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SeoService,
      factory: SeoService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SeoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NB_DOCUMENT"]]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@core/utils/state.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/@core/utils/state.service.ts ***!
    \**********************************************/

  /*! exports provided: StateService */

  /***/
  function srcAppCoreUtilsStateServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StateService", function () {
      return StateService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var StateService =
    /*#__PURE__*/
    function () {
      function StateService(directionService) {
        var _this3 = this;

        _classCallCheck(this, StateService);

        this.layouts = [{
          name: 'One Column',
          icon: 'nb-layout-default',
          id: 'one-column',
          selected: true
        }, {
          name: 'Two Column',
          icon: 'nb-layout-two-column',
          id: 'two-column'
        }, {
          name: 'Center Column',
          icon: 'nb-layout-centre',
          id: 'center-column'
        }];
        this.sidebars = [{
          name: 'Sidebar at layout start',
          icon: 'nb-layout-sidebar-left',
          id: 'start',
          selected: true
        }, {
          name: 'Sidebar at layout end',
          icon: 'nb-layout-sidebar-right',
          id: 'end'
        }];
        this.layoutState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.layouts[0]);
        this.sidebarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sidebars[0]);
        this.alive = true;
        directionService.onDirectionChange().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function () {
          return _this3.alive;
        })).subscribe(function (direction) {
          return _this3.updateSidebarIcons(direction);
        });
        this.updateSidebarIcons(directionService.getDirection());
      }

      _createClass(StateService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.alive = false;
        }
      }, {
        key: "updateSidebarIcons",
        value: function updateSidebarIcons(direction) {
          var _this$sidebars = _slicedToArray(this.sidebars, 2),
              startSidebar = _this$sidebars[0],
              endSidebar = _this$sidebars[1];

          var isLtr = direction === _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirection"].LTR;
          var startIconClass = isLtr ? 'nb-layout-sidebar-left' : 'nb-layout-sidebar-right';
          var endIconClass = isLtr ? 'nb-layout-sidebar-right' : 'nb-layout-sidebar-left';
          startSidebar.icon = startIconClass;
          endSidebar.icon = endIconClass;
        }
      }, {
        key: "setLayoutState",
        value: function setLayoutState(state) {
          this.layoutState$.next(state);
        }
      }, {
        key: "getLayoutStates",
        value: function getLayoutStates() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.layouts);
        }
      }, {
        key: "onLayoutState",
        value: function onLayoutState() {
          return this.layoutState$.asObservable();
        }
      }, {
        key: "setSidebarState",
        value: function setSidebarState(state) {
          this.sidebarState$.next(state);
        }
      }, {
        key: "getSidebarStates",
        value: function getSidebarStates() {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.sidebars);
        }
      }, {
        key: "onSidebarState",
        value: function onSidebarState() {
          return this.sidebarState$.asObservable();
        }
      }]);

      return StateService;
    }();

    StateService.ɵfac = function StateService_Factory(t) {
      return new (t || StateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"]));
    };

    StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StateService,
      factory: StateService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_3__["NbLayoutDirectionService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/@theme/styles/theme.default.ts":
  /*!************************************************!*\
    !*** ./src/app/@theme/styles/theme.default.ts ***!
    \************************************************/

  /*! exports provided: DEFAULT_THEME */

  /***/
  function srcAppThemeStylesThemeDefaultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DEFAULT_THEME", function () {
      return DEFAULT_THEME;
    });
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");

    var baseThemeVariables = _nebular_theme__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_THEME"].variables;
    var DEFAULT_THEME = {
      name: 'default',
      base: 'default',
      variables: {
        temperature: {
          arcFill: [baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary, baseThemeVariables.primary],
          arcEmpty: baseThemeVariables.bg2,
          thumbBg: baseThemeVariables.bg2,
          thumbBorder: baseThemeVariables.primary
        },
        solar: {
          gradientLeft: baseThemeVariables.primary,
          gradientRight: baseThemeVariables.primary,
          shadowColor: 'rgba(0, 0, 0, 0)',
          secondSeriesFill: baseThemeVariables.bg2,
          radius: ['80%', '90%']
        },
        traffic: {
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          yAxisSplitLine: baseThemeVariables.separator,
          lineBg: baseThemeVariables.border4,
          lineShadowBlur: '1',
          itemColor: baseThemeVariables.border4,
          itemBorderColor: baseThemeVariables.border4,
          itemEmphasisBorderColor: baseThemeVariables.primary,
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          shadowLineShadow: 'rgba(0, 0, 0, 0)',
          gradFrom: baseThemeVariables.bg2,
          gradTo: baseThemeVariables.bg2
        },
        electricity: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: baseThemeVariables.fgText,
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          axisLineColor: baseThemeVariables.border3,
          xAxisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          lineGradFrom: baseThemeVariables.primary,
          lineGradTo: baseThemeVariables.primary,
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.bg2,
          areaGradTo: baseThemeVariables.bg2,
          shadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        bubbleMap: {
          titleColor: baseThemeVariables.fgText,
          areaColor: baseThemeVariables.bg4,
          areaHoverColor: baseThemeVariables.fgHighlight,
          areaBorderColor: baseThemeVariables.border5
        },
        profitBarAnimationEchart: {
          textColor: baseThemeVariables.fgText,
          firstAnimationBarColor: baseThemeVariables.primary,
          secondAnimationBarColor: baseThemeVariables.success,
          splitLineStyleOpacity: '1',
          splitLineStyleWidth: '1',
          splitLineStyleColor: baseThemeVariables.separator,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        },
        trafficBarEchart: {
          gradientFrom: baseThemeVariables.warningLight,
          gradientTo: baseThemeVariables.warning,
          shadow: baseThemeVariables.warningLight,
          shadowBlur: '0',
          axisTextColor: baseThemeVariables.fgText,
          axisFontSize: '12',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal'
        },
        countryOrders: {
          countryBorderColor: baseThemeVariables.border4,
          countryFillColor: baseThemeVariables.bg3,
          countryBorderWidth: '1',
          hoveredCountryBorderColor: baseThemeVariables.primary,
          hoveredCountryFillColor: baseThemeVariables.primaryLight,
          hoveredCountryBorderWidth: '1',
          chartAxisLineColor: baseThemeVariables.border4,
          chartAxisTextColor: baseThemeVariables.fg,
          chartAxisFontSize: '16',
          chartGradientTo: baseThemeVariables.primary,
          chartGradientFrom: baseThemeVariables.primaryLight,
          chartAxisSplitLine: baseThemeVariables.separator,
          chartShadowLineColor: baseThemeVariables.primaryLight,
          chartLineBottomShadowColor: baseThemeVariables.primary,
          chartInnerLineColor: baseThemeVariables.bg2
        },
        echarts: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.fgText,
          splitLineColor: baseThemeVariables.separator,
          itemHoverShadowColor: 'rgba(0, 0, 0, 0.5)',
          tooltipBackgroundColor: baseThemeVariables.primary,
          areaOpacity: '0.7'
        },
        chartjs: {
          axisLineColor: baseThemeVariables.separator,
          textColor: baseThemeVariables.fgText
        },
        orders: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '0',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'solid',
          lineWidth: '4',
          // first line
          firstAreaGradFrom: baseThemeVariables.bg3,
          firstAreaGradTo: baseThemeVariables.bg3,
          firstShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // second line
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondAreaGradFrom: 'rgba(51, 102, 255, 0.2)',
          secondAreaGradTo: 'rgba(51, 102, 255, 0)',
          secondShadowLineDarkBg: 'rgba(0, 0, 0, 0)',
          // third line
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdAreaGradFrom: 'rgba(0, 214, 143, 0.2)',
          thirdAreaGradTo: 'rgba(0, 214, 143, 0)',
          thirdShadowLineDarkBg: 'rgba(0, 0, 0, 0)'
        },
        profit: {
          bg: baseThemeVariables.bg,
          textColor: baseThemeVariables.fgText,
          axisLineColor: baseThemeVariables.border4,
          splitLineColor: baseThemeVariables.separator,
          areaOpacity: '1',
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          // first bar
          firstLineGradFrom: baseThemeVariables.bg3,
          firstLineGradTo: baseThemeVariables.bg3,
          firstLineShadow: 'rgba(0, 0, 0, 0)',
          // second bar
          secondLineGradFrom: baseThemeVariables.primary,
          secondLineGradTo: baseThemeVariables.primary,
          secondLineShadow: 'rgba(0, 0, 0, 0)',
          // third bar
          thirdLineGradFrom: baseThemeVariables.success,
          thirdLineGradTo: baseThemeVariables.successLight,
          thirdLineShadow: 'rgba(0, 0, 0, 0)'
        },
        orderProfitLegend: {
          firstItem: baseThemeVariables.success,
          secondItem: baseThemeVariables.primary,
          thirdItem: baseThemeVariables.bg3
        },
        visitors: {
          tooltipBg: baseThemeVariables.bg,
          tooltipLineColor: 'rgba(0, 0, 0, 0)',
          tooltipLineWidth: '1',
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipExtraCss: 'border-radius: 10px; padding: 8px 24px;',
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '20',
          axisLineColor: baseThemeVariables.border4,
          axisFontSize: '16',
          axisTextColor: baseThemeVariables.fg,
          yAxisSplitLine: baseThemeVariables.separator,
          itemBorderColor: baseThemeVariables.primary,
          lineStyle: 'dotted',
          lineWidth: '6',
          lineGradFrom: '#ffffff',
          lineGradTo: '#ffffff',
          lineShadow: 'rgba(0, 0, 0, 0)',
          areaGradFrom: baseThemeVariables.primary,
          areaGradTo: baseThemeVariables.primaryLight,
          innerLineStyle: 'solid',
          innerLineWidth: '1',
          innerAreaGradFrom: baseThemeVariables.success,
          innerAreaGradTo: baseThemeVariables.success
        },
        visitorsLegend: {
          firstIcon: baseThemeVariables.success,
          secondIcon: baseThemeVariables.primary
        },
        visitorsPie: {
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          firstPieRadius: ['70%', '90%'],
          secondPieGradientLeft: baseThemeVariables.warning,
          secondPieGradientRight: baseThemeVariables.warningLight,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieRadius: ['60%', '97%'],
          shadowOffsetX: '0',
          shadowOffsetY: '0'
        },
        visitorsPieLegend: {
          firstSection: baseThemeVariables.warning,
          secondSection: baseThemeVariables.success
        },
        earningPie: {
          radius: ['65%', '100%'],
          center: ['50%', '50%'],
          fontSize: '22',
          firstPieGradientLeft: baseThemeVariables.success,
          firstPieGradientRight: baseThemeVariables.success,
          firstPieShadowColor: 'rgba(0, 0, 0, 0)',
          secondPieGradientLeft: baseThemeVariables.primary,
          secondPieGradientRight: baseThemeVariables.primary,
          secondPieShadowColor: 'rgba(0, 0, 0, 0)',
          thirdPieGradientLeft: baseThemeVariables.warning,
          thirdPieGradientRight: baseThemeVariables.warning,
          thirdPieShadowColor: 'rgba(0, 0, 0, 0)'
        },
        earningLine: {
          gradFrom: baseThemeVariables.primary,
          gradTo: baseThemeVariables.primary,
          tooltipTextColor: baseThemeVariables.fgText,
          tooltipFontWeight: 'normal',
          tooltipFontSize: '16',
          tooltipBg: baseThemeVariables.bg,
          tooltipBorderColor: baseThemeVariables.border2,
          tooltipBorderWidth: '1',
          tooltipExtraCss: 'border-radius: 10px; padding: 4px 16px;'
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/@theme/theme.module.ts":
  /*!****************************************!*\
    !*** ./src/app/@theme/theme.module.ts ***!
    \****************************************/

  /*! exports provided: ThemeModule */

  /***/
  function srcAppThemeThemeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThemeModule", function () {
      return ThemeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @nebular/eva-icons */
    "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _styles_theme_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./styles/theme.default */
    "./src/app/@theme/styles/theme.default.ts");

    var NB_MODULES = [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"]];

    var ThemeModule =
    /*#__PURE__*/
    function () {
      function ThemeModule() {
        _classCallCheck(this, ThemeModule);
      }

      _createClass(ThemeModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: ThemeModule,
            providers: _toConsumableArray(_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbThemeModule"].forRoot({
              name: "default"
            }, [_styles_theme_default__WEBPACK_IMPORTED_MODULE_4__["DEFAULT_THEME"]]).providers)
          };
        }
      }]);

      return ThemeModule;
    }();

    ThemeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ThemeModule
    });
    ThemeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ThemeModule_Factory(t) {
        return new (t || ThemeModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]].concat(NB_MODULES), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ThemeModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbUserModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbActionsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSearchModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbContextMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbButtonModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbSelectModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbIconModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_3__["NbEvaIconsModule"]],
        exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThemeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]].concat(NB_MODULES),
          exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          declarations: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: routes, AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _public_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./public/guards/auth.guard */
    "./src/app/public/guards/auth.guard.ts");

    var routes = [{
      path: "index",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | public-public-module */
        [__webpack_require__.e("default~auth-auth-module~public-public-module"), __webpack_require__.e("public-public-module")]).then(__webpack_require__.bind(null,
        /*! ./public/public.module */
        "./src/app/public/public.module.ts")).then(function (m) {
          return m.PublicModule;
        });
      },
      canActivate: [_public_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]]
    }, {
      path: "login",
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | auth-auth-module */
        [__webpack_require__.e("default~auth-auth-module~public-public-module"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null,
        /*! ./auth/auth.module */
        "./src/app/auth/auth.module.ts")).then(function (m) {
          return m.AuthModule;
        });
      }
    }, {
      path: "",
      redirectTo: "index",
      pathMatch: "full"
    }, {
      path: "**",
      redirectTo: "index"
    }];
    var config = {
      useHash: false
    };

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, config)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */


    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["ngx-app"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'ngx-app',
          template: '<router-outlet></router-outlet>'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./@core/core.module */
    "./src/app/@core/core.module.ts");
    /* harmony import */


    var _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./@theme/theme.module */
    "./src/app/@theme/theme.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _public_services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./public/services/main.service */
    "./src/app/public/services/main.service.ts");
    /* harmony import */


    var _public_services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./public/services/auth.service */
    "./src/app/public/services/auth.service.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _public_services_general_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./public/services/general.service */
    "./src/app/public/services/general.service.ts");
    /* harmony import */


    var _public_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./public/guards/auth.guard */
    "./src/app/public/guards/auth.guard.ts");
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_public_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"], _public_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _public_services_general_service__WEBPACK_IMPORTED_MODULE_12__["GeneralService"], _public_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbWindowModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrModule"].forRoot(), _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"].forRoot()]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbWindowModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"], _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_http__WEBPACK_IMPORTED_MODULE_10__["HttpModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbLayoutModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbSidebarModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbMenuModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDatepickerModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbDialogModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbWindowModule"].forRoot(), _nebular_theme__WEBPACK_IMPORTED_MODULE_7__["NbToastrModule"].forRoot(), _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forRoot(), _theme_theme_module__WEBPACK_IMPORTED_MODULE_4__["ThemeModule"].forRoot()],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
          providers: [_public_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"], _public_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _public_services_general_service__WEBPACK_IMPORTED_MODULE_12__["GeneralService"], _public_guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/guards/auth.guard.ts":
  /*!*********************************************!*\
    !*** ./src/app/public/guards/auth.guard.ts ***!
    \*********************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppPublicGuardsAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/auth.service */
    "./src/app/public/services/auth.service.ts");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authService = authService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          if (this.authService.isLoggedIn()) {
            return true;
          } else {
            this.router.navigate(["/login"]);
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/services/auth.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/public/services/auth.service.ts ***!
    \*************************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppPublicServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _general_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./general.service */
    "./src/app/public/services/general.service.ts");
    /* harmony import */


    var _main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main.service */
    "./src/app/public/services/main.service.ts");

    var AuthService =
    /*#__PURE__*/
    function () {
      // public baseUrl: string = "https://persing.herokuapp.com/";
      function AuthService(http, generalService, mainService) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.generalService = generalService;
        this.mainService = mainService;
        /** API Access - ENV */

        this.baseUrl = "http://localhost:8081/";
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        this.headers.append("Content-Type", "application/json");
      } // =================================
      //  Metodos
      // ================================

      /**
       * Asingación sesión
       * @param {any} user
       */


      _createClass(AuthService, [{
        key: "setAuthValues",
        value: function setAuthValues(_ref) {
          var data = _ref.data;

          try {
            localStorage.removeItem("_user");
            localStorage.removeItem("_token");
            localStorage.removeItem("_expiresIn");

            var _token = "".concat(data.token);

            this.mainService.headers.append("authorization", "Bearer " + _token);

            var _expiresIn = moment__WEBPACK_IMPORTED_MODULE_2__().add(data.expiresIn, "second");

            delete data.token;
            delete data.expiresIn;

            var _user = Object.assign({}, data.user);

            localStorage.setItem("_user", JSON.stringify(_user));
            localStorage.setItem("_token", _token);
            localStorage.setItem("_expiresIn", JSON.stringify(_expiresIn.valueOf()));
            return true;
          } catch (error) {}
        }
        /**
         * User is admin PROGEN
         */

      }, {
        key: "getUser",

        /**
         * Retorna el usuario en sesión
         * @return {any} user
         */
        value: function getUser() {
          return JSON.parse(localStorage.getItem("_user"));
        }
        /**
         * Retorna el usuario en sesión
         * @return {any} user
         */

      }, {
        key: "getToken",
        value: function getToken() {
          return localStorage.getItem("_token");
        }
        /**
         * Verifca si el usario está en sesión
         */

      }, {
        key: "isLoggedIn",
        value: function isLoggedIn() {
          var _user = JSON.parse(localStorage.getItem("_user" || false)) || {};

          var _token = localStorage.getItem("_token") || "";

          if (this.isSuperadmin) return _token && _user._id;else {
            return false;
          }
        }
        /**
         * Reotrna el usuario en sesión
         * @return {any} user
         */

      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem("_user");
          localStorage.removeItem("_token");
          return true;
        }
        /**
         * API Generico POST
         * @param {string} api route: api/componente
         * @param {any} data objeto a persistir
         * @return {Observable<any>} respuesta asincrónica
         */

      }, {
        key: "post",
        value: function post(_ref2) {
          var api = _ref2.api,
              data = _ref2.data;
          var request = this.http.post("".concat(this.baseUrl).concat(api), data, {
            headers: this.headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) {
            return res.json();
          }));
          return this.responseHandler({
            request: request
          });
        }
        /**
         * Obtiene una respuesta del servidor
         * @param {Observable} request
         */

      }, {
        key: "responseHandler",
        value: function responseHandler(_ref3) {
          var _this4 = this;

          var request = _ref3.request;
          return new Promise(function (resolve) {
            request.subscribe(function (response) {
              if (response) {
                if (response.success) {
                  if (response.user !== undefined && response.user != null) resolve(response);else {
                    _this4.generalService.handleError({
                      error: "Usuario no registrado."
                    });

                    resolve(undefined);
                  }
                } else {
                  _this4.generalService.handleError({
                    error: response.error
                  });

                  resolve(undefined);
                }
              } else {
                _this4.generalService.handleResponseNull({});

                resolve(undefined);
              }
            }, function (error) {
              var _body = JSON.parse(error._body || "{}");

              if (_body.error) _this4.generalService.handleError({
                error: "".concat(_body.error)
              });else _this4.generalService.handleError({
                error: error
              });
              resolve(undefined);
            });
          });
        }
      }, {
        key: "isSuperadmin",
        get: function get() {
          var _user = JSON.parse(localStorage.getItem("_user" || false)) || {};

          return _user.tipo && (_user.tipo === "superadministrador" || _user.tipo === "administrador");
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]
        }, {
          type: _general_service__WEBPACK_IMPORTED_MODULE_5__["GeneralService"]
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/services/general.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/public/services/general.service.ts ***!
    \****************************************************/

  /*! exports provided: GeneralService */

  /***/
  function srcAppPublicServicesGeneralServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeneralService", function () {
      return GeneralService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @nebular/theme */
    "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var GeneralService =
    /*#__PURE__*/
    function () {
      function GeneralService(toastrService, router, activatedRoute, dialogService, location) {
        _classCallCheck(this, GeneralService);

        this.toastrService = toastrService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.dialogService = dialogService;
        this.location = location;
      } // =================================
      // Metodos MANIPULACION
      // ================================

      /**
       * Retorna el valor ingresado en formato number
       * o 0 si no se puede parsear
       * @param fromVal
       * @return number
       */


      _createClass(GeneralService, [{
        key: "getNumber",
        value: function getNumber(fromVal) {
          var valor = parseFloat("".concat(fromVal || "0")).toString();
          if (valor === "NaN") return 0;else return parseFloat(valor);
        }
        /**
         * Remueve todos los espacios en blanco
         * tanto los del borde como los contenidos
         * @param x
         * @return string
         */

      }, {
        key: "removeWS",
        value: function removeWS(x) {
          return "".concat(x).trim().replace(/\s/g, "");
        }
        /**
         * Remueve los diacriticos de una cadena
         * @param x
         * @return string
         */

      }, {
        key: "removeDiacritics",
        value: function removeDiacritics(x) {
          return "".concat(x).normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        }
        /**
         * Remueve los diacriticos de una cadena
         * y quita todos los espcaios en blanco
         * @param x
         * @return string
         */

      }, {
        key: "getPlainString",
        value: function getPlainString(x) {
          return this.removeDiacritics(this.removeWS(x));
        } // =================================
        // Metodos TOASTR
        // ================================

        /**
         * Abre un dialogo estilo nebular
         * @param  {any} dialog referencia al template en html
         * que contiene el dialogo. Debería der tipye ElementRef o TypeReference
         * @returns void
         */

      }, {
        key: "showDialog",
        value: function showDialog(_ref4) {
          var dialog = _ref4.dialog;
          return this.dialogService.open(dialog, {
            context: ""
          });
        } // =================================
        // Metodos TOASTR
        // ================================

        /**
         * Muestra una notificacion estilo Toastr en la pantalla actual
         * @param  {string} position determina en que parte de la pantalla se representará el Toastr
         * @param  {any} title titulo del Toastr
         * @param  {any} message contenido del Toastr
         * @param  {any} status puede ser (basic, primary, success, info, warning, danger, control)
         * @returns void
         */

      }, {
        key: "showToastr",
        value: function showToastr(_ref5) {
          var position = _ref5.position,
              title = _ref5.title,
              message = _ref5.message,
              status = _ref5.status;
          var realPosition = position ? position : "top-end";
          var realMessage = message ? message : "";
          var duractionMilisec = 4650;
          this.toastrService.show("".concat(realMessage), "".concat(title), {
            position: realPosition,
            status: status,
            duration: duractionMilisec
          });
        }
        /**
         * Muestra un mensaje cuando el servidor responde NULL
         * @param {string} titulo o nombre del modulo para saber en qué componete se utiliza
         * @return void
         */

      }, {
        key: "handleResponseNull",
        value: function handleResponseNull(_ref6) {
          var titulo = _ref6.titulo;
          this.showToastr({
            title: "No se ha establecido una conexión con el servidor.",
            message: "".concat(titulo || ""),
            status: "basic"
          });
        }
        /**
         * Muestra un mensaje con el error
         * @param {any} error objeto error a mostrar
         * @param {string} titulo o nombre del modulo para saber en qué componete se utiliza
         * @return void
         */

      }, {
        key: "handleError",
        value: function handleError(_ref7) {
          var error = _ref7.error,
              titulo = _ref7.titulo;

          if (error.ok == false && error.status == 500) {
            var url = "".concat(error.url).split("api/");
            var domain = url[0].includes("local") ? "Localhost Server" : "Heorku Server";
            this.handleResponseNull({
              titulo: "Servidor: ".concat(domain || "inválido", ". API: ").concat(url[1] || "inválido")
            });
            return;
          }

          this.showToastr({
            title: "".concat(error.message || error.data || error || "404 No Encontrado."),
            status: "warning"
          });
        }
        /**
         * Muestra un mensaje de success
         * @param {string} text - mensaje
         * @return void
         */

      }, {
        key: "handleSuccess",
        value: function handleSuccess(_ref8) {
          var text = _ref8.text;
          this.showToastr({
            title: "".concat(text),
            status: "success"
          });
        }
        /**
         * Mensaje 401 no tiene permisos
         * @returns void
         */

      }, {
        key: "on401",
        value: function on401() {
          this.showToastr({
            title: "No cuenta con los suficientes permisos.",
            status: "danger"
          });
        }
        /**
         * Mesnaje generico faltan campos por completar
         * @returns void
         */

      }, {
        key: "onIncomplete",
        value: function onIncomplete() {
          this.showToastr({
            title: "Faltan campos por completar.",
            status: "warning"
          });
        } // =================================
        // Metodos GENERALES
        // ================================

        /**
         * Navegación a url anterior
         */

      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
        /**
         * Se encarga de navegar a la URL especificada
         * @param {string} path -> "/dashboard/inventario/:id"
         * @return void
         */

      }, {
        key: "routerNavigateTo",
        value: function routerNavigateTo(_ref9) {
          var path = _ref9.path;
          this.router.navigate([path]).then(function (fulfilled) {});
        }
        /**
         * Navegacion con Query
         * @param {string} path
         * @param {any} query
         * @return void
         */

      }, {
        key: "routerNavQueryTo",
        value: function routerNavQueryTo(_ref10) {
          var path = _ref10.path,
              query = _ref10.query;
          this.router.navigate([path], {
            queryParams: query
          });
        }
        /**
         * Adiciona un query a la url actual
         * @param {any} query
         * @returns void
         */

      }, {
        key: "onAddQuery",
        value: function onAddQuery(_ref11) {
          var query = _ref11.query;
          this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: query || null,
            queryParamsHandling: "merge"
          });
        }
        /**
         * Organiza por fecha de creadcion en el servidor
         * @param a primer objeto
         * @param b segundo objeto
         * @return number
         */

      }, {
        key: "sortCreatedAt",
        value: function sortCreatedAt(a, b) {
          var dateA = a ? new Date(a.createdAt) : new Date();
          var dateB = b ? new Date(b.createdAt) : new Date();
          return dateB.getTime() - dateA.getTime();
        }
        /**
         * Organiza por atributo dado
         * @param attr atributo a comparar
         * @param a primer objeto
         * @param b segundo objeto
         * @return number
         */

      }, {
        key: "sortProperty",
        value: function sortProperty(attr, a, b) {
          if (attr) {
            return "".concat(a[attr]).localeCompare("".concat(b[attr]));
          } else return 0;
        }
        /**
         * Organiza por fecha personalizada
         * @param a primer objeto
         * @param b segundo objeto
         * @return number
         */

      }, {
        key: "sortDateProperty",
        value: function sortDateProperty(attr, a, b) {
          var dateA = a[attr] ? new Date(a[attr]) : new Date();
          var dateB = b[attr] ? new Date(b[attr]) : new Date();
          return dateB.getTime() - dateA.getTime();
        }
      }]);

      return GeneralService;
    }();

    GeneralService.ɵfac = function GeneralService_Factory(t) {
      return new (t || GeneralService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
    };

    GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GeneralService,
      factory: GeneralService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbDialogService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/public/services/main.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/public/services/main.service.ts ***!
    \*************************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppPublicServicesMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/add/operator/map */
    "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
    /* harmony import */


    var _general_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./general.service */
    "./src/app/public/services/general.service.ts");

    var MainService =
    /*#__PURE__*/
    function () {
      function MainService(http, generalService) {
        _classCallCheck(this, MainService);

        this.http = http;
        this.generalService = generalService;
        /** API Access - ENV */
        // public baseUrl: string = "https://persing.herokuapp.com/";

        this.baseUrl = "http://localhost:8081/"; // this.baseUrl = environment.baseUrl;

        var _token = localStorage.getItem("_token") || "";

        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
          "Content-Type": "application/json",
          Authorization: _token
        }); // this.headers.append('Content-Type', 'application/json');
        // this.setBearer();
      } // =================================
      // SERVICES
      // ================================

      /**
       * Header token
       */
      // private setBearer(): void {
      //   if (_token && !this.headers.has('Authorization')) this.headers.append('Authorization', _token);
      // }

      /**
       * Obtiene una respuesta del servidor
       * @param {Observable} request
       */


      _createClass(MainService, [{
        key: "responseHandler",
        value: function responseHandler(_ref12) {
          var _this5 = this;

          var request = _ref12.request,
              hide404 = _ref12.hide404;
          return new Promise(function (resolve) {
            request.subscribe(function (response) {
              if (response) {
                if (response.status === 200 || response.status === 201) {
                  if (response.body["data"] !== undefined && response.body["data"] != null) resolve(response.body["data"]);else {
                    if (!hide404) _this5.generalService.handleError({
                      error: "404 Objeto No Encontrado."
                    });
                    resolve(undefined);
                  }
                } else {
                  _this5.generalService.handleError({
                    error: response.body
                  });

                  resolve(undefined);
                }
              } else {
                _this5.generalService.handleResponseNull({});

                resolve(undefined);
              }
            }, function (error) {
              var _body = JSON.parse(error._body || "{}");

              if (_body.message) _this5.generalService.handleError({
                error: "".concat(_body.message)
              });else _this5.generalService.handleError({
                error: error
              });
              resolve(undefined);
            });
          });
        }
      }, {
        key: "deleteResponseHandler",
        value: function deleteResponseHandler(_ref13) {
          var _this6 = this;

          var request = _ref13.request;
          return new Promise(function (resolve, reject) {
            request.subscribe(function (response) {
              if (response) {
                if (response.status === 200) {
                  _this6.generalService.handleSuccess({
                    text: "Registro eliminado exitosamente"
                  });

                  resolve(response);
                } else {
                  _this6.generalService.handleError({
                    error: response.body
                  });

                  reject(new Error(response.body));
                }
              } else {
                _this6.generalService.handleError({
                  error: 'Sin respuesta'
                });

                reject(new Error('Sin respuesta'));
              }
            });
          });
        }
        /**
         * API Generico GET
         * @param {string} api route: api/componente
         * @return {Promise<any>} respuesta asincrónica
         */

      }, {
        key: "get",
        value: function get(_ref14) {
          var api = _ref14.api,
              hide404 = _ref14.hide404;
          var request = this.http.get("".concat(this.baseUrl).concat(api), {
            headers: this.headers,
            observe: "response"
          });
          return this.responseHandler({
            request: request,
            hide404: hide404
          });
        }
        /**
         * API Generico POST
         * @param {string} api route: api/componente
         * @param {any} data objeto a persistir
         * @return {Observable<any>} respuesta asincrónica
         */

      }, {
        key: "post",
        value: function post(_ref15) {
          var api = _ref15.api,
              data = _ref15.data;
          var request = this.http.post("".concat(this.baseUrl).concat(api), data, {
            headers: this.headers,
            observe: "response"
          });
          return this.responseHandler({
            request: request
          });
        }
        /**
         * API Generico DELETE
         * @param {string} api route: api/componente/id
         * @return {Observable<any>} respuesta asincrónica
         */

      }, {
        key: "delete",
        value: function _delete(_ref16) {
          var api = _ref16.api;
          var request = this.http["delete"]("".concat(this.baseUrl).concat(api), {
            headers: this.headers,
            observe: "response"
          });
          return this.deleteResponseHandler({
            request: request
          });
        }
        /**
         * API Generico PUT
         * @param {string} api route: api/componente/id
         * @param {any} data propiedades a actualizar
         * @return {Observable<any>} respuesta asincrónica
         */

      }, {
        key: "put",
        value: function put(_ref17) {
          var api = _ref17.api,
              data = _ref17.data;
          var request = this.http.put("".concat(this.baseUrl).concat(api), data, {
            headers: this.headers,
            observe: "response"
          });
          return this.responseHandler({
            request: request
          });
        }
      }]);

      return MainService;
    }();

    MainService.ɵfac = function MainService_Factory(t) {
      return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]));
    };

    MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MainService,
      factory: MainService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _general_service__WEBPACK_IMPORTED_MODULE_3__["GeneralService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */
    // The file contents for the current environment will overwrite these during build.
    // The build system defaults to the dev environment which uses `environment.ts`, but if you do
    // `ng build --env=prod` then `environment.prod.ts` will be used instead.
    // The list of which env maps to which file can be found in `.angular-cli.json`.


    var environment = {
      production: false,
      baseUrl: "http://localhost:8081/",
      accessKeyId: "AKIAUT7IXVID77RSYJ5F",
      secretAccessKey: "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",
      region: "us-east-1",
      bucketName: "open-recursos",
      bucketACL: "public-read",
      countriesKey: "UFFrSXo0NDQ1a1Z4RTlkbnhLTDhza3J0MFllbnBnblFCU1AwMXIwOA=="
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /**
     * @license
     * Copyright Akveo. All Rights Reserved.
     * Licensed under the MIT License. See License.txt in the project root for license information.
     */


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Alefy trabaja\Documents\Persing\persing-admin\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map