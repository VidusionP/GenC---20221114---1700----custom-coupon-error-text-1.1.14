(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/papathemes/instant-load.js":
/*!**********************************************!*\
  !*** ./assets/js/papathemes/instant-load.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/size */ "./node_modules/lodash/size.js");
/* harmony import */ var lodash_size__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_size__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/delay */ "./node_modules/lodash/delay.js");
/* harmony import */ var lodash_delay__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_delay__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_global_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../theme/global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./theme-utils */ "./assets/js/papathemes/theme-utils.js");



function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }







var isTouchDevice = Object(_theme_utils__WEBPACK_IMPORTED_MODULE_9__["checkTouchDevice"])();
var history = window.history;
var Preloader = {
  cache: {},
  cacheLimit: 100,
  loading: {},
  /**
   * Wait until no other the same url loading
   * @param {String} cacheKey
   */
  waitLoading: function waitLoading(cacheKey) {
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (Preloader.loading[cacheKey]) {
                _context.next = 2;
                break;
              }
              return _context.abrupt("return");
            case 2:
              _context.next = 4;
              return new Promise(function (resolve) {
                var check = function check() {
                  if (!Preloader.loading[cacheKey]) {
                    resolve();
                  } else {
                    lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(check, 300);
                  }
                };
                check();
              });
            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  /**
   * @param {Function} request Promise function
   * @param {String} cacheKey
   * @return {Promise}
   */
  load: function load(request, cacheKey) {
    var _this = this;
    return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var response;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this.waitLoading(cacheKey);
            case 2:
              if (!Preloader.getCache(cacheKey)) {
                _context2.next = 4;
                break;
              }
              return _context2.abrupt("return", Preloader.getCache(cacheKey));
            case 4:
              Preloader.loading[cacheKey] = true;
              _context2.prev = 5;
              _context2.next = 8;
              return request();
            case 8:
              response = _context2.sent;
              Preloader.saveCache(response, cacheKey);
              delete Preloader.loading[cacheKey];
              return _context2.abrupt("return", response);
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](5);
              delete Preloader.loading[cacheKey];
              throw _context2.t0;
            case 18:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[5, 14]]);
    }))();
  },
  getCache: function getCache(cacheKey) {
    if (cacheKey && Preloader.cache[cacheKey]) {
      return Preloader.cache[cacheKey];
    }
    return null;
  },
  saveCache: function saveCache(data, cacheKey) {
    if (cacheKey) {
      if (lodash_size__WEBPACK_IMPORTED_MODULE_1___default()(Preloader.cache) >= Preloader.cacheLimit) {
        for (var k in Preloader.cache) {
          if (Preloader.cache.hasOwnProperty(k)) {
            delete Preloader.cache[k];
            break;
          }
        }
      }
      Preloader.cache[cacheKey] = data;
    }
  }
};
var InstantQuickView = /*#__PURE__*/function () {
  function InstantQuickView(context) {
    this.context = context;
    this.modal = Object(_theme_global_modal__WEBPACK_IMPORTED_MODULE_4__["defaultModal"])();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.unbindEvents();
    this.bindEvents();
  }

  /**
   * Load a product quickview content
   * @param {String} productId
   * @return {Promise}
   */
  var _proto = InstantQuickView.prototype;
  _proto.loadProduct = function loadProduct(productId) {
    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, {
          template: 'products/quick-view'
        }, function (err, response) {
          if (err) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };
    return Preloader.load(request, "quick-view|" + productId);
  };
  _proto.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    var _this2 = this;
    event.preventDefault();
    var $el = $(event.currentTarget);
    if (event.type === 'click') {
      this.modal.open({
        size: 'large'
      });
    }
    this.loadProduct($el.data('productId')).then(function (response) {
      if (event.type === 'click') {
        _this2.modal.updateContent(response);
        _this2.modal.$content.find('.productView').addClass('productView--quickView');
        _this2.modal.$content.find('[data-slick]').slick();
        lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          var $quickView = _this2.modal.$content.find('.quickView');
          var product;
          if ($('[data-also-bought] .productView-alsoBought-item', $quickView).length > 0) {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($quickView, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this2.context, {
              enableAlsoBought: true
            }));
          } else {
            product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_5__["default"]($quickView, _this2.context);
          }
          $('body').trigger('loaded.quickview', [product]);
          return product;
        }, 200);
        if (window.addthis && typeof window.addthis.toolbox === 'function') {
          window.addthis.toolbox('.addthis_toolbox');
        }
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    $('body').on('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    $('body').off('mouseenter click', '.quickview, .quickview-alt', this.onMouseEnterOrClick);
  };
  return InstantQuickView;
}();
var InstantLoad = /*#__PURE__*/function () {
  function InstantLoad(context) {
    // Won't init on touch screen
    if (isTouchDevice) {
      return;
    }
    this.context = context;
    this.$head = $('head');
    this.$body = $('body');
    this.$pageBody = $('.body').first();
    this.onMouseEnterOrClick = this.onMouseEnterOrClick.bind(this);
    this.onLoadPageManually = this.onLoadPageManually.bind(this);
    this.onPopstate = this.onPopstate.bind(this);
    if (!history.state) {
      history.replaceState({
        instantload: true,
        pageType: this.context.pageType
      }, document.title, window.location);
    }
    this.unbindEvents();
    this.bindEvents();
  }
  var _proto2 = InstantLoad.prototype;
  _proto2.initGlobal = function initGlobal($scope) {
    Object(_theme_global_foundation__WEBPACK_IMPORTED_MODULE_7__["default"])($(document));
    Object(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])('[data-collapsible]', {
      $context: $scope
    });
    $('[data-slick]', $scope).slick();
    if (window.addthis && typeof window.addthis.toolbox === 'function') {
      window.addthis.toolbox('.addthis_toolbox');
    }
  };
  _proto2.redirect = function redirect(url) {
    window.location = url;
  };
  _proto2.isUnsupportedPage = function isUnsupportedPage(response) {
    return response.trim() === 'UNSUPPORTED' || !$(response).first().is('#instantload-html-element');
  };
  _proto2.loadPage = function loadPage(url, show, pushState, pageType) {
    var _this3 = this;
    if (show) {
      this.$pageBody.addClass('instantload-loading');
    }
    if (pushState) {
      try {
        history.pushState({
          instantload: true,
          pageType: this.context.pageType
        }, null, url);
      } catch (e) {
        if (show) {
          return this.redirect(url);
        }
        return;
      }
    }
    var config;
    if (pageType === 'home') {
      config = {
        carousel: this.context.homepage_show_carousel,
        products: {
          new: {
            limit: this.context.product_new_count
          },
          featured: {
            limit: this.context.product_featured_count
          },
          top_sellers: {
            limit: this.context.product_top_count
          }
        },
        blog: {
          recent_posts: {
            limit: this.context.homepage_blog_posts_count
          }
        },
        customer: {
          recently_viewed_products: {
            limit: this.context.product_recently_viewed
          }
        },
        shop_by_brand: {
          limit: this.context.sidebar_shop_by_brand
        },
        categories: true,
        cart: true
      };
    } else {
      config = {
        product: {
          videos: {
            limit: this.context.productpage_videos_count
          },
          reviews: {
            limit: this.context.productpage_reviews_count
          },
          related_products: {
            limit: this.context.productpage_related_products_count
          },
          similar_by_views: {
            limit: this.context.productpage_similar_by_views_count
          }
        },
        category: {
          shop_by_price: true,
          products: {
            limit: this.context.categorypage_products_per_page
          }
        },
        blog: {
          posts: {
            limit: 5,
            pages: 3,
            summary: 500
          },
          recent_posts: {
            limit: this.context.homepage_blog_posts_count
          }
        },
        products: {
          new: {
            limit: 5
          }
        },
        brands: {
          limit: 100
        },
        brand: {
          products: {
            limit: this.context.brandpage_products_per_page
          }
        },
        shop_by_brand: {
          limit: 9
        },
        customer: {
          recently_viewed_products: {
            limit: this.context.product_recently_viewed
          }
        },
        categories: true,
        cart: true
      };
    }
    var request = function request() {
      return new Promise(function (resolve, reject) {
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.getPage(url, {
          config: config
        }, function (err, response) {
          if (err || !response) {
            reject(err);
          } else {
            resolve(response);
          }
        });
      });
    };
    Preloader.load(request, "loadPage|" + url).then(function (response) {
      if (show) {
        if (_this3.isUnsupportedPage(response)) {
          return _this3.redirect(url);
        }
        _this3.$body.trigger('beforeload.instantload', [response]);
        var $response = $(response);
        var $respBody = $response.find('#instantload-body-element');
        $('html, body').scrollTop(0);

        // Remove the previous appended <head>'s child tags
        _this3.$head.children().each(function (i, el) {
          var $elm = $(el);
          if ($elm.is('[data-instantload-head-dynamic]')) {
            $elm.remove();
          }
        });

        // Remove title, meta[property] ...
        _this3.$head.children('title, meta[property], link[rel=amphtml], link[rel=canonical]').remove();

        // Append new <head>'s child tags
        $response.find('#instantload-head-element').children().each(function (i, el) {
          var $elm = $(el);
          $elm.attr('data-instantload-head-dynamic', '');
          _this3.$head.append($elm);
        });

        // Replace <body>'s classes
        _this3.$body.attr('class', $respBody.attr('class'));

        // Replace '.body' element
        var $pageBody = $response.find('#instantload-page-body');
        if ($pageBody.length > 0) {
          _this3.$pageBody.empty().append($pageBody.children());
          _this3.initGlobal(_this3.$pageBody);
        }

        // Replace top & bottom banners
        _this3.$body.find('[data-banner-location=top]').empty().append($response.find('#instantload-banners-top').children());
        _this3.$body.find('[data-banner-location=bottom]').empty().append($response.find('#instantload-banners-bottom').children());

        // Remove and append the new script #instantload-script
        _this3.$body.find('#instantload-script').remove();
        _this3.$body.append($response.find('#instantload-script'));

        // Remove and append new elements match [data-instantload-body-dynamic]
        // Useful for loading third-party scripts
        _this3.$body.children('[data-instantload-body-dynamic]').remove();
        _this3.$body.append($respBody.children('[data-instantload-body-dynamic]'));
        _this3.$pageBody.removeClass('instantload-loading').addClass('instantload-loaded');
        lodash_delay__WEBPACK_IMPORTED_MODULE_2___default()(function () {
          return _this3.$pageBody.removeClass('instantload-loaded');
        }, 300);
        _this3.$body.trigger('loaded.instantload', [response]);
      }
    }).catch(function () {
      if (show) {
        return _this3.redirect(url);
      }
    });
  };
  _proto2.onMouseEnterOrClick = function onMouseEnterOrClick(event) {
    event.preventDefault();
    var $el = $(event.currentTarget);
    var data = $el.data('instantload');
    var url = (typeof data === 'object' ? data.url : null) || $el.data('instantloadUrl') || $el.prop('href');
    var pageType = typeof data === 'object' ? data.page : null;
    if (!url) {
      return;
    }
    this.loadPage(url, event.type === 'click', event.type === 'click', pageType);
  };
  _proto2.onPopstate = function onPopstate() {
    // console.log('onPopstate - state:', history.state);
    if (!history.state) {
      return;
    }
    // console.log(history);

    if (history.state.instantload) {
      this.loadPage(window.location, true, false, history.state.pageType);
    } else {
      // Unsupported pages instantly at this stage - reload it
      window.location.reload();
    }
  };
  _proto2.onLoadPageManually = function onLoadPageManually(event, url, eventType, pageType) {
    if (eventType === void 0) {
      eventType = '';
    }
    if (pageType === void 0) {
      pageType = null;
    }
    this.loadPage(url, eventType === 'click', eventType === 'click', pageType);
  };
  _proto2.bindEvents = function bindEvents() {
    $('body, [data-menu]').on('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').on('loadPage.instantload', this.onLoadPageManually);
    $(window).on('popstate', this.onPopstate);
  };
  _proto2.unbindEvents = function unbindEvents() {
    $('body, [data-menu]').off('mouseenter click', '[data-instantload], [data-instantload-url]', this.onMouseEnterOrClick);
    $('body').off('loadPage.instantload', this.onLoadPageManually);
    $(window).off('popstate', this.onPopstate);
  };
  return InstantLoad;
}();
/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // eslint-disable-next-line no-new
  new InstantQuickView(context);

  // eslint-disable-next-line no-new
  new InstantLoad(context);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/nod-functions/min-max-validate.js":
/*!******************************************************************!*\
  !*** ./assets/js/theme/common/nod-functions/min-max-validate.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNaN */ "./node_modules/lodash/isNaN.js");
/* harmony import */ var lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNaN__WEBPACK_IMPORTED_MODULE_0__);

function minMaxValidate(minInputSelector, maxInputSelector) {
  function validate(cb) {
    var minValue = parseFloat($(minInputSelector).val());
    var maxValue = parseFloat($(maxInputSelector).val());
    if (maxValue > minValue || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(maxValue) || lodash_isNaN__WEBPACK_IMPORTED_MODULE_0___default()(minValue)) {
      return cb(true);
    }
    return cb(false);
  }
  return validate;
}
/* harmony default export */ __webpack_exports__["default"] = (minMaxValidate);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/nod.js":
/*!***************************************!*\
  !*** ./assets/js/theme/common/nod.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nod-validate */ "./node_modules/nod-validate/nod.js");
/* harmony import */ var nod_validate__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nod_validate__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nod-functions/min-max-validate */ "./assets/js/theme/common/nod-functions/min-max-validate.js");



// Hook our SCSS framework form field status classes into the nod validation system before use
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorClass = 'form-field--error';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.successClass = 'form-field--success';
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.classes.errorMessageClass = 'form-inlineMessage';

// Register validate functions
nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a.checkFunctions['min-max'] = _nod_functions_min_max_validate__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ __webpack_exports__["default"] = (nod_validate__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/lodash/_asciiSize.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_asciiSize.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js");

/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
var asciiSize = baseProperty('length');

module.exports = asciiSize;


/***/ }),

/***/ "./node_modules/lodash/_baseDelay.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseDelay.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */
function baseDelay(func, wait, args) {
  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  return setTimeout(function() { func.apply(undefined, args); }, wait);
}

module.exports = baseDelay;


/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ "./node_modules/lodash/_stringSize.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stringSize.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiSize = __webpack_require__(/*! ./_asciiSize */ "./node_modules/lodash/_asciiSize.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeSize = __webpack_require__(/*! ./_unicodeSize */ "./node_modules/lodash/_unicodeSize.js");

/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */
function stringSize(string) {
  return hasUnicode(string)
    ? unicodeSize(string)
    : asciiSize(string);
}

module.exports = stringSize;


/***/ }),

/***/ "./node_modules/lodash/_unicodeSize.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_unicodeSize.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function unicodeSize(string) {
  var result = reUnicode.lastIndex = 0;
  while (reUnicode.test(string)) {
    ++result;
  }
  return result;
}

module.exports = unicodeSize;


/***/ }),

/***/ "./node_modules/lodash/delay.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/delay.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseDelay = __webpack_require__(/*! ./_baseDelay */ "./node_modules/lodash/_baseDelay.js"),
    baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */
var delay = baseRest(function(func, wait, args) {
  return baseDelay(func, toNumber(wait) || 0, args);
});

module.exports = delay;


/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "./node_modules/lodash/isString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "./node_modules/lodash/size.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/size.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js"),
    isString = __webpack_require__(/*! ./isString */ "./node_modules/lodash/isString.js"),
    stringSize = __webpack_require__(/*! ./_stringSize */ "./node_modules/lodash/_stringSize.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function size(collection) {
  if (collection == null) {
    return 0;
  }
  if (isArrayLike(collection)) {
    return isString(collection) ? stringSize(collection) : collection.length;
  }
  var tag = getTag(collection);
  if (tag == mapTag || tag == setTag) {
    return collection.size;
  }
  return baseKeys(collection).length;
}

module.exports = size;


/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9pbnN0YW50LWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9ub2QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYXNjaWlTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VEZWxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9faGFzVW5pY29kZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zdHJpbmdTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3VuaWNvZGVTaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZGVsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNTdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9zaXplLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiXSwibmFtZXMiOlsiaXNUb3VjaERldmljZSIsImNoZWNrVG91Y2hEZXZpY2UiLCJoaXN0b3J5Iiwid2luZG93IiwiUHJlbG9hZGVyIiwiY2FjaGUiLCJjYWNoZUxpbWl0IiwibG9hZGluZyIsIndhaXRMb2FkaW5nIiwiY2FjaGVLZXkiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNoZWNrIiwibG9hZCIsInJlcXVlc3QiLCJnZXRDYWNoZSIsInJlc3BvbnNlIiwic2F2ZUNhY2hlIiwiZGF0YSIsImsiLCJoYXNPd25Qcm9wZXJ0eSIsIkluc3RhbnRRdWlja1ZpZXciLCJjb250ZXh0IiwibW9kYWwiLCJkZWZhdWx0TW9kYWwiLCJvbk1vdXNlRW50ZXJPckNsaWNrIiwiYmluZCIsInVuYmluZEV2ZW50cyIsImJpbmRFdmVudHMiLCJsb2FkUHJvZHVjdCIsInByb2R1Y3RJZCIsInJlamVjdCIsInV0aWxzIiwiYXBpIiwicHJvZHVjdCIsImdldEJ5SWQiLCJ0ZW1wbGF0ZSIsImVyciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCIkZWwiLCIkIiwiY3VycmVudFRhcmdldCIsInR5cGUiLCJvcGVuIiwic2l6ZSIsInRoZW4iLCJ1cGRhdGVDb250ZW50IiwiJGNvbnRlbnQiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGljayIsIiRxdWlja1ZpZXciLCJsZW5ndGgiLCJQcm9kdWN0RGV0YWlscyIsImVuYWJsZUFsc29Cb3VnaHQiLCJ0cmlnZ2VyIiwiYWRkdGhpcyIsInRvb2xib3giLCJvbiIsIm9mZiIsIkluc3RhbnRMb2FkIiwiJGhlYWQiLCIkYm9keSIsIiRwYWdlQm9keSIsImZpcnN0Iiwib25Mb2FkUGFnZU1hbnVhbGx5Iiwib25Qb3BzdGF0ZSIsInN0YXRlIiwicmVwbGFjZVN0YXRlIiwiaW5zdGFudGxvYWQiLCJwYWdlVHlwZSIsImRvY3VtZW50IiwidGl0bGUiLCJsb2NhdGlvbiIsImluaXRHbG9iYWwiLCIkc2NvcGUiLCJmb3VuZGF0aW9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiJGNvbnRleHQiLCJyZWRpcmVjdCIsInVybCIsImlzVW5zdXBwb3J0ZWRQYWdlIiwidHJpbSIsImlzIiwibG9hZFBhZ2UiLCJzaG93IiwicHVzaFN0YXRlIiwiZSIsImNvbmZpZyIsImNhcm91c2VsIiwiaG9tZXBhZ2Vfc2hvd19jYXJvdXNlbCIsInByb2R1Y3RzIiwibmV3IiwibGltaXQiLCJwcm9kdWN0X25ld19jb3VudCIsImZlYXR1cmVkIiwicHJvZHVjdF9mZWF0dXJlZF9jb3VudCIsInRvcF9zZWxsZXJzIiwicHJvZHVjdF90b3BfY291bnQiLCJibG9nIiwicmVjZW50X3Bvc3RzIiwiaG9tZXBhZ2VfYmxvZ19wb3N0c19jb3VudCIsImN1c3RvbWVyIiwicmVjZW50bHlfdmlld2VkX3Byb2R1Y3RzIiwicHJvZHVjdF9yZWNlbnRseV92aWV3ZWQiLCJzaG9wX2J5X2JyYW5kIiwic2lkZWJhcl9zaG9wX2J5X2JyYW5kIiwiY2F0ZWdvcmllcyIsImNhcnQiLCJ2aWRlb3MiLCJwcm9kdWN0cGFnZV92aWRlb3NfY291bnQiLCJyZXZpZXdzIiwicHJvZHVjdHBhZ2VfcmV2aWV3c19jb3VudCIsInJlbGF0ZWRfcHJvZHVjdHMiLCJwcm9kdWN0cGFnZV9yZWxhdGVkX3Byb2R1Y3RzX2NvdW50Iiwic2ltaWxhcl9ieV92aWV3cyIsInByb2R1Y3RwYWdlX3NpbWlsYXJfYnlfdmlld3NfY291bnQiLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJjYXRlZ29yeXBhZ2VfcHJvZHVjdHNfcGVyX3BhZ2UiLCJwb3N0cyIsInBhZ2VzIiwic3VtbWFyeSIsImJyYW5kcyIsImJyYW5kIiwiYnJhbmRwYWdlX3Byb2R1Y3RzX3Blcl9wYWdlIiwiZ2V0UGFnZSIsIiRyZXNwb25zZSIsIiRyZXNwQm9keSIsInNjcm9sbFRvcCIsImNoaWxkcmVuIiwiZWFjaCIsImkiLCJlbCIsIiRlbG0iLCJyZW1vdmUiLCJhdHRyIiwiYXBwZW5kIiwiZW1wdHkiLCJyZW1vdmVDbGFzcyIsImNhdGNoIiwicHJvcCIsInBhZ2UiLCJyZWxvYWQiLCJldmVudFR5cGUiLCJtaW5NYXhWYWxpZGF0ZSIsIm1pbklucHV0U2VsZWN0b3IiLCJtYXhJbnB1dFNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsIm1pblZhbHVlIiwicGFyc2VGbG9hdCIsInZhbCIsIm1heFZhbHVlIiwibm9kIiwiY2xhc3NlcyIsImVycm9yQ2xhc3MiLCJzdWNjZXNzQ2xhc3MiLCJlcnJvck1lc3NhZ2VDbGFzcyIsImNo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QUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUM3QkEsZUFBZSxtQkFBTyxDQUFDLHVEQUFhO0FBQ3BDLGFBQWEsbUJBQU8sQ0FBQyxtREFBVztBQUNoQyxrQkFBa0IsbUJBQU8sQ0FBQywyREFBZTtBQUN6QyxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0IsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGlCQUFpQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLGFBQWEsRUFBRTtBQUNmO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBkZWZhdWx0TW9kYWwgfSBmcm9tICcuLi90aGVtZS9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4uL3RoZW1lL2NvbW1vbi9wcm9kdWN0LWRldGFpbHMnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgZm91bmRhdGlvbiBmcm9tICcuLi90aGVtZS9nbG9iYWwvZm91bmRhdGlvbic7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4uL3RoZW1lL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgeyBjaGVja1RvdWNoRGV2aWNlIH0gZnJvbSAnLi90aGVtZS11dGlscyc7XG5cbmNvbnN0IGlzVG91Y2hEZXZpY2UgPSBjaGVja1RvdWNoRGV2aWNlKCk7XG5jb25zdCBoaXN0b3J5ID0gd2luZG93Lmhpc3Rvcnk7XG5jb25zdCBQcmVsb2FkZXIgPSB7XG4gICAgY2FjaGU6IHt9LFxuICAgIGNhY2hlTGltaXQ6IDEwMCxcbiAgICBsb2FkaW5nOiB7fSxcblxuICAgIC8qKlxuICAgICAqIFdhaXQgdW50aWwgbm8gb3RoZXIgdGhlIHNhbWUgdXJsIGxvYWRpbmdcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FjaGVLZXlcbiAgICAgKi9cbiAgICBhc3luYyB3YWl0TG9hZGluZyhjYWNoZUtleSkge1xuICAgICAgICBpZiAoIVByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIVByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgXy5kZWxheShjaGVjaywgMzAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2hlY2soKTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IHJlcXVlc3QgUHJvbWlzZSBmdW5jdGlvblxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYWNoZUtleVxuICAgICAqIEByZXR1cm4ge1Byb21pc2V9XG4gICAgICovXG4gICAgYXN5bmMgbG9hZChyZXF1ZXN0LCBjYWNoZUtleSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgIGF3YWl0IHRoaXMud2FpdExvYWRpbmcoY2FjaGVLZXkpO1xuXG4gICAgICAgIGlmIChQcmVsb2FkZXIuZ2V0Q2FjaGUoY2FjaGVLZXkpKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJlbG9hZGVyLmdldENhY2hlKGNhY2hlS2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIFByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XSA9IHRydWU7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdCgpO1xuICAgICAgICAgICAgUHJlbG9hZGVyLnNhdmVDYWNoZShyZXNwb25zZSwgY2FjaGVLZXkpO1xuICAgICAgICAgICAgZGVsZXRlIFByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XTtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgZGVsZXRlIFByZWxvYWRlci5sb2FkaW5nW2NhY2hlS2V5XTtcbiAgICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgZ2V0Q2FjaGUoY2FjaGVLZXkpIHtcbiAgICAgICAgaWYgKGNhY2hlS2V5ICYmIFByZWxvYWRlci5jYWNoZVtjYWNoZUtleV0pIHtcbiAgICAgICAgICAgIHJldHVybiBQcmVsb2FkZXIuY2FjaGVbY2FjaGVLZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH0sXG5cbiAgICBzYXZlQ2FjaGUoZGF0YSwgY2FjaGVLZXkpIHtcbiAgICAgICAgaWYgKGNhY2hlS2V5KSB7XG4gICAgICAgICAgICBpZiAoXy5zaXplKFByZWxvYWRlci5jYWNoZSkgPj0gUHJlbG9hZGVyLmNhY2hlTGltaXQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gUHJlbG9hZGVyLmNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChQcmVsb2FkZXIuY2FjaGUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBQcmVsb2FkZXIuY2FjaGVba107XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByZWxvYWRlci5jYWNoZVtjYWNoZUtleV0gPSBkYXRhO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmNsYXNzIEluc3RhbnRRdWlja1ZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5tb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2sgPSB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTG9hZCBhIHByb2R1Y3QgcXVpY2t2aWV3IGNvbnRlbnRcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gcHJvZHVjdElkXG4gICAgICogQHJldHVybiB7UHJvbWlzZX1cbiAgICAgKi9cbiAgICBsb2FkUHJvZHVjdChwcm9kdWN0SWQpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9ICgpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0LmdldEJ5SWQocHJvZHVjdElkLCB7IHRlbXBsYXRlOiAncHJvZHVjdHMvcXVpY2stdmlldycgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByZWxvYWRlci5sb2FkKHJlcXVlc3QsIGBxdWljay12aWV3fCR7cHJvZHVjdElkfWApO1xuICAgIH1cblxuICAgIG9uTW91c2VFbnRlck9yQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICBpZiAoZXZlbnQudHlwZSA9PT0gJ2NsaWNrJykge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5vcGVuKHsgc2l6ZTogJ2xhcmdlJyB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZFByb2R1Y3QoJGVsLmRhdGEoJ3Byb2R1Y3RJZCcpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3RWaWV3JykuYWRkQ2xhc3MoJ3Byb2R1Y3RWaWV3LS1xdWlja1ZpZXcnKTtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsLiRjb250ZW50LmZpbmQoJ1tkYXRhLXNsaWNrXScpLnNsaWNrKCk7XG4gICAgICAgICAgICAgICAgXy5kZWxheSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRxdWlja1ZpZXcgPSB0aGlzLm1vZGFsLiRjb250ZW50LmZpbmQoJy5xdWlja1ZpZXcnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkKCdbZGF0YS1hbHNvLWJvdWdodF0gLnByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbScsICRxdWlja1ZpZXcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QgPSBuZXcgUHJvZHVjdERldGFpbHMoJHF1aWNrVmlldywgXy5leHRlbmQodGhpcy5jb250ZXh0LCB7IGVuYWJsZUFsc29Cb3VnaHQ6IHRydWUgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcXVpY2tWaWV3LCB0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VyKCdsb2FkZWQucXVpY2t2aWV3JywgW3Byb2R1Y3RdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmFkZHRoaXMgJiYgdHlwZW9mIHdpbmRvdy5hZGR0aGlzLnRvb2xib3ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmFkZHRoaXMudG9vbGJveCgnLmFkZHRoaXNfdG9vbGJveCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyIGNsaWNrJywgJy5xdWlja3ZpZXcsIC5xdWlja3ZpZXctYWx0JywgdGhpcy5vbk1vdXNlRW50ZXJPckNsaWNrKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgICQoJ2JvZHknKS5vZmYoJ21vdXNlZW50ZXIgY2xpY2snLCAnLnF1aWNrdmlldywgLnF1aWNrdmlldy1hbHQnLCB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2spO1xuICAgIH1cbn1cblxuY2xhc3MgSW5zdGFudExvYWQge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgLy8gV29uJ3QgaW5pdCBvbiB0b3VjaCBzY3JlZW5cbiAgICAgICAgaWYgKGlzVG91Y2hEZXZpY2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuJGhlYWQgPSAkKCdoZWFkJyk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgICAgIHRoaXMuJHBhZ2VCb2R5ID0gJCgnLmJvZHknKS5maXJzdCgpO1xuXG4gICAgICAgIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayA9IHRoaXMub25Nb3VzZUVudGVyT3JDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uTG9hZFBhZ2VNYW51YWxseSA9IHRoaXMub25Mb2FkUGFnZU1hbnVhbGx5LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Qb3BzdGF0ZSA9IHRoaXMub25Qb3BzdGF0ZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGlmICghaGlzdG9yeS5zdGF0ZSkge1xuICAgICAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoeyBpbnN0YW50bG9hZDogdHJ1ZSwgcGFnZVR5cGU6IHRoaXMuY29udGV4dC5wYWdlVHlwZSB9LCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRHbG9iYWwoJHNjb3BlKSB7XG4gICAgICAgIGZvdW5kYXRpb24oJChkb2N1bWVudCkpO1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHsgJGNvbnRleHQ6ICRzY29wZSB9KTtcbiAgICAgICAgJCgnW2RhdGEtc2xpY2tdJywgJHNjb3BlKS5zbGljaygpO1xuICAgICAgICBpZiAod2luZG93LmFkZHRoaXMgJiYgdHlwZW9mIHdpbmRvdy5hZGR0aGlzLnRvb2xib3ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHdpbmRvdy5hZGR0aGlzLnRvb2xib3goJy5hZGR0aGlzX3Rvb2xib3gnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZGlyZWN0KHVybCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSB1cmw7XG4gICAgfVxuXG4gICAgaXNVbnN1cHBvcnRlZFBhZ2UocmVzcG9uc2UpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRyaW0oKSA9PT0gJ1VOU1VQUE9SVEVEJyB8fCAhJChyZXNwb25zZSkuZmlyc3QoKS5pcygnI2luc3RhbnRsb2FkLWh0bWwtZWxlbWVudCcpO1xuICAgIH1cblxuICAgIGxvYWRQYWdlKHVybCwgc2hvdywgcHVzaFN0YXRlLCBwYWdlVHlwZSkge1xuICAgICAgICBpZiAoc2hvdykge1xuICAgICAgICAgICAgdGhpcy4kcGFnZUJvZHkuYWRkQ2xhc3MoJ2luc3RhbnRsb2FkLWxvYWRpbmcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwdXNoU3RhdGUpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeS5wdXNoU3RhdGUoeyBpbnN0YW50bG9hZDogdHJ1ZSwgcGFnZVR5cGU6IHRoaXMuY29udGV4dC5wYWdlVHlwZSB9LCBudWxsLCB1cmwpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChzaG93KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZGlyZWN0KHVybCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjb25maWc7XG4gICAgICAgIGlmIChwYWdlVHlwZSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgY2Fyb3VzZWw6IHRoaXMuY29udGV4dC5ob21lcGFnZV9zaG93X2Nhcm91c2VsLFxuICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5ldzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0X25ld19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZmVhdHVyZWQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdF9mZWF0dXJlZF9jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdG9wX3NlbGxlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdF90b3BfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBibG9nOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlY2VudF9wb3N0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5ob21lcGFnZV9ibG9nX3Bvc3RzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50bHlfdmlld2VkX3Byb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnByb2R1Y3RfcmVjZW50bHlfdmlld2VkLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnNpZGViYXJfc2hvcF9ieV9icmFuZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNhdGVnb3JpZXM6IHRydWUsXG4gICAgICAgICAgICAgICAgY2FydDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdDoge1xuICAgICAgICAgICAgICAgICAgICB2aWRlb3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdHBhZ2VfdmlkZW9zX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICByZXZpZXdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnByb2R1Y3RwYWdlX3Jldmlld3NfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHJlbGF0ZWRfcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQucHJvZHVjdHBhZ2VfcmVsYXRlZF9wcm9kdWN0c19jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2ltaWxhcl9ieV92aWV3czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5wcm9kdWN0cGFnZV9zaW1pbGFyX2J5X3ZpZXdzX2NvdW50LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2hvcF9ieV9wcmljZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiB0aGlzLmNvbnRleHQuY2F0ZWdvcnlwYWdlX3Byb2R1Y3RzX3Blcl9wYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmxvZzoge1xuICAgICAgICAgICAgICAgICAgICBwb3N0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlczogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1bW1hcnk6IDUwMCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50X3Bvc3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LmhvbWVwYWdlX2Jsb2dfcG9zdHNfY291bnQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICBuZXc6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiA1LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYnJhbmRzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiAxMDAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHRoaXMuY29udGV4dC5icmFuZHBhZ2VfcHJvZHVjdHNfcGVyX3BhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaG9wX2J5X2JyYW5kOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0OiA5LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVjZW50bHlfdmlld2VkX3Byb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogdGhpcy5jb250ZXh0LnByb2R1Y3RfcmVjZW50bHlfdmlld2VkLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjYXJ0OiB0cnVlLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSAoKSA9PiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB1dGlscy5hcGkuZ2V0UGFnZSh1cmwsIHsgY29uZmlnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVyciB8fCAhcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIFByZWxvYWRlci5sb2FkKHJlcXVlc3QsIGBsb2FkUGFnZXwke3VybH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Vuc3VwcG9ydGVkUGFnZShyZXNwb25zZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVkaXJlY3QodXJsKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2JlZm9yZWxvYWQuaW5zdGFudGxvYWQnLCBbcmVzcG9uc2VdKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0ICRyZXNwb25zZSA9ICQocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRyZXNwQm9keSA9ICRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtYm9keS1lbGVtZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc2Nyb2xsVG9wKDApO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBwcmV2aW91cyBhcHBlbmRlZCA8aGVhZD4ncyBjaGlsZCB0YWdzXG4gICAgICAgICAgICAgICAgdGhpcy4kaGVhZC5jaGlsZHJlbigpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbG0gPSAkKGVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlbG0uaXMoJ1tkYXRhLWluc3RhbnRsb2FkLWhlYWQtZHluYW1pY10nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGVsbS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRpdGxlLCBtZXRhW3Byb3BlcnR5XSAuLi5cbiAgICAgICAgICAgICAgICB0aGlzLiRoZWFkLmNoaWxkcmVuKCd0aXRsZSwgbWV0YVtwcm9wZXJ0eV0sIGxpbmtbcmVsPWFtcGh0bWxdLCBsaW5rW3JlbD1jYW5vbmljYWxdJykucmVtb3ZlKCk7XG5cblxuICAgICAgICAgICAgICAgIC8vIEFwcGVuZCBuZXcgPGhlYWQ+J3MgY2hpbGQgdGFnc1xuICAgICAgICAgICAgICAgICRyZXNwb25zZS5maW5kKCcjaW5zdGFudGxvYWQtaGVhZC1lbGVtZW50JykuY2hpbGRyZW4oKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxtID0gJChlbCk7XG4gICAgICAgICAgICAgICAgICAgICRlbG0uYXR0cignZGF0YS1pbnN0YW50bG9hZC1oZWFkLWR5bmFtaWMnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGhlYWQuYXBwZW5kKCRlbG0pO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVwbGFjZSA8Ym9keT4ncyBjbGFzc2VzXG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5hdHRyKCdjbGFzcycsICRyZXNwQm9keS5hdHRyKCdjbGFzcycpKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgJy5ib2R5JyBlbGVtZW50XG4gICAgICAgICAgICAgICAgY29uc3QgJHBhZ2VCb2R5ID0gJHJlc3BvbnNlLmZpbmQoJyNpbnN0YW50bG9hZC1wYWdlLWJvZHknKTtcbiAgICAgICAgICAgICAgICBpZiAoJHBhZ2VCb2R5Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcGFnZUJvZHkuZW1wdHkoKS5hcHBlbmQoJHBhZ2VCb2R5LmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRHbG9iYWwodGhpcy4kcGFnZUJvZHkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2UgdG9wICYgYm90dG9tIGJhbm5lcnNcbiAgICAgICAgICAgICAgICB0aGlzLiRib2R5LmZpbmQoJ1tkYXRhLWJhbm5lci1sb2NhdGlvbj10b3BdJykuZW1wdHkoKS5hcHBlbmQoJHJlc3BvbnNlLmZpbmQoJyNpbnN0YW50bG9hZC1iYW5uZXJzLXRvcCcpLmNoaWxkcmVuKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuZmluZCgnW2RhdGEtYmFubmVyLWxvY2F0aW9uPWJvdHRvbV0nKS5lbXB0eSgpLmFwcGVuZCgkcmVzcG9uc2UuZmluZCgnI2luc3RhbnRsb2FkLWJhbm5lcnMtYm90dG9tJykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW5kIGFwcGVuZCB0aGUgbmV3IHNjcmlwdCAjaW5zdGFudGxvYWQtc2NyaXB0XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5maW5kKCcjaW5zdGFudGxvYWQtc2NyaXB0JykucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5hcHBlbmQoJHJlc3BvbnNlLmZpbmQoJyNpbnN0YW50bG9hZC1zY3JpcHQnKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW5kIGFwcGVuZCBuZXcgZWxlbWVudHMgbWF0Y2ggW2RhdGEtaW5zdGFudGxvYWQtYm9keS1keW5hbWljXVxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgbG9hZGluZyB0aGlyZC1wYXJ0eSBzY3JpcHRzXG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS5jaGlsZHJlbignW2RhdGEtaW5zdGFudGxvYWQtYm9keS1keW5hbWljXScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKCRyZXNwQm9keS5jaGlsZHJlbignW2RhdGEtaW5zdGFudGxvYWQtYm9keS1keW5hbWljXScpKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuJHBhZ2VCb2R5LnJlbW92ZUNsYXNzKCdpbnN0YW50bG9hZC1sb2FkaW5nJykuYWRkQ2xhc3MoJ2luc3RhbnRsb2FkLWxvYWRlZCcpO1xuICAgICAgICAgICAgICAgIF8uZGVsYXkoKCkgPT4gdGhpcy4kcGFnZUJvZHkucmVtb3ZlQ2xhc3MoJ2luc3RhbnRsb2FkLWxvYWRlZCcpLCAzMDApO1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdsb2FkZWQuaW5zdGFudGxvYWQnLCBbcmVzcG9uc2VdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZWRpcmVjdCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbk1vdXNlRW50ZXJPckNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgZGF0YSA9ICRlbC5kYXRhKCdpbnN0YW50bG9hZCcpO1xuICAgICAgICBjb25zdCB1cmwgPSAodHlwZW9mIGRhdGEgPT09ICdvYmplY3QnID8gZGF0YS51cmwgOiBudWxsKSB8fCAkZWwuZGF0YSgnaW5zdGFudGxvYWRVcmwnKSB8fCAkZWwucHJvcCgnaHJlZicpO1xuICAgICAgICBjb25zdCBwYWdlVHlwZSA9IHR5cGVvZiBkYXRhID09PSAnb2JqZWN0JyA/IGRhdGEucGFnZSA6IG51bGw7XG5cbiAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZFBhZ2UodXJsLCBldmVudC50eXBlID09PSAnY2xpY2snLCBldmVudC50eXBlID09PSAnY2xpY2snLCBwYWdlVHlwZSk7XG4gICAgfVxuXG4gICAgb25Qb3BzdGF0ZSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ29uUG9wc3RhdGUgLSBzdGF0ZTonLCBoaXN0b3J5LnN0YXRlKTtcbiAgICAgICAgaWYgKCFoaXN0b3J5LnN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coaGlzdG9yeSk7XG5cbiAgICAgICAgaWYgKGhpc3Rvcnkuc3RhdGUuaW5zdGFudGxvYWQpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFBhZ2Uod2luZG93LmxvY2F0aW9uLCB0cnVlLCBmYWxzZSwgaGlzdG9yeS5zdGF0ZS5wYWdlVHlwZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBVbnN1cHBvcnRlZCBwYWdlcyBpbnN0YW50bHkgYXQgdGhpcyBzdGFnZSAtIHJlbG9hZCBpdFxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkUGFnZU1hbnVhbGx5KGV2ZW50LCB1cmwsIGV2ZW50VHlwZSA9ICcnLCBwYWdlVHlwZSA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5sb2FkUGFnZSh1cmwsIGV2ZW50VHlwZSA9PT0gJ2NsaWNrJywgZXZlbnRUeXBlID09PSAnY2xpY2snLCBwYWdlVHlwZSk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgJCgnYm9keSwgW2RhdGEtbWVudV0nKS5vbignbW91c2VlbnRlciBjbGljaycsICdbZGF0YS1pbnN0YW50bG9hZF0sIFtkYXRhLWluc3RhbnRsb2FkLXVybF0nLCB0aGlzLm9uTW91c2VFbnRlck9yQ2xpY2spO1xuICAgICAgICAkKCdib2R5Jykub24oJ2xvYWRQYWdlLmluc3RhbnRsb2FkJywgdGhpcy5vbkxvYWRQYWdlTWFudWFsbHkpO1xuICAgICAgICAkKHdpbmRvdykub24oJ3BvcHN0YXRlJywgdGhpcy5vblBvcHN0YXRlKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgICQoJ2JvZHksIFtkYXRhLW1lbnVdJykub2ZmKCdtb3VzZWVudGVyIGNsaWNrJywgJ1tkYXRhLWluc3RhbnRsb2FkXSwgW2RhdGEtaW5zdGFudGxvYWQtdXJsXScsIHRoaXMub25Nb3VzZUVudGVyT3JDbGljayk7XG4gICAgICAgICQoJ2JvZHknKS5vZmYoJ2xvYWRQYWdlLmluc3RhbnRsb2FkJywgdGhpcy5vbkxvYWRQYWdlTWFudWFsbHkpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BzdGF0ZSk7XG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIG5ldyBJbnN0YW50UXVpY2tWaWV3KGNvbnRleHQpO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgIG5ldyBJbnN0YW50TG9hZChjb250ZXh0KTtcbn1cbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIG1pbk1heFZhbGlkYXRlKG1pbklucHV0U2VsZWN0b3IsIG1heElucHV0U2VsZWN0b3IpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShjYikge1xuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IHBhcnNlRmxvYXQoJChtaW5JbnB1dFNlbGVjdG9yKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gcGFyc2VGbG9hdCgkKG1heElucHV0U2VsZWN0b3IpLnZhbCgpKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPiBtaW5WYWx1ZSB8fCBfLmlzTmFOKG1heFZhbHVlKSB8fCBfLmlzTmFOKG1pblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNiKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbk1heFZhbGlkYXRlO1xuIiwiaW1wb3J0IG5vZCBmcm9tICdub2QtdmFsaWRhdGUnO1xuaW1wb3J0IG1pbk1heFZhbGlkYXRlIGZyb20gJy4vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlJztcblxuLy8gSG9vayBvdXIgU0NTUyBmcmFtZXdvcmsgZm9ybSBmaWVsZCBzdGF0dXMgY2xhc3NlcyBpbnRvIHRoZSBub2QgdmFsaWRhdGlvbiBzeXN0ZW0gYmVmb3JlIHVzZVxubm9kLmNsYXNzZXMuZXJyb3JDbGFzcyA9ICdmb3JtLWZpZWxkLS1lcnJvcic7XG5ub2QuY2xhc3Nlcy5zdWNjZXNzQ2xhc3MgPSAnZm9ybS1maWVsZC0tc3VjY2Vzcyc7XG5ub2QuY2xhc3Nlcy5lcnJvck1lc3NhZ2VDbGFzcyA9ICdmb3JtLWlubGluZU1lc3NhZ2UnO1xuXG4vLyBSZWdpc3RlciB2YWxpZGF0ZSBmdW5jdGlvbnNcbm5vZC5jaGVja0Z1bmN0aW9uc1snbWluLW1heCddID0gbWluTWF4VmFsaWRhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZDtcbiIsInZhciBiYXNlUHJvcGVydHkgPSByZXF1aXJlKCcuL19iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBzaXplIG9mIGFuIEFTQ0lJIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN0cmluZyBzaXplLlxuICovXG52YXIgYXNjaWlTaXplID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBhc2NpaVNpemU7XG4iLCIvKiogRXJyb3IgbWVzc2FnZSBjb25zdGFudHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmRlbGF5YCBhbmQgYF8uZGVmZXJgIHdoaWNoIGFjY2VwdHMgYGFyZ3NgXG4gKiB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdCBUaGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byBkZWxheSBpbnZvY2F0aW9uLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge251bWJlcnxPYmplY3R9IFJldHVybnMgdGhlIHRpbWVyIGlkIG9yIHRpbWVvdXQgb2JqZWN0LlxuICovXG5mdW5jdGlvbiBiYXNlRGVsYXkoZnVuYywgd2FpdCwgYXJncykge1xuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHsgZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3MpOyB9LCB3YWl0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRGVsYXk7XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnByb3BlcnR5YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZXAgcGF0aHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYWNjZXNzb3IgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eShrZXkpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdFtrZXldO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VQcm9wZXJ0eTtcbiIsIi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjaGFyYWN0ZXIgY2xhc3Nlcy4gKi9cbnZhciByc0FzdHJhbFJhbmdlID0gJ1xcXFx1ZDgwMC1cXFxcdWRmZmYnLFxuICAgIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxuICAgIHJlQ29tYm9IYWxmTWFya3NSYW5nZSA9ICdcXFxcdWZlMjAtXFxcXHVmZTJmJyxcbiAgICByc0NvbWJvU3ltYm9sc1JhbmdlID0gJ1xcXFx1MjBkMC1cXFxcdTIwZmYnLFxuICAgIHJzQ29tYm9SYW5nZSA9IHJzQ29tYm9NYXJrc1JhbmdlICsgcmVDb21ib0hhbGZNYXJrc1JhbmdlICsgcnNDb21ib1N5bWJvbHNSYW5nZSxcbiAgICByc1ZhclJhbmdlID0gJ1xcXFx1ZmUwZVxcXFx1ZmUwZic7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSBjYXB0dXJlIGdyb3Vwcy4gKi9cbnZhciByc1pXSiA9ICdcXFxcdTIwMGQnO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgc3RyaW5ncyB3aXRoIFt6ZXJvLXdpZHRoIGpvaW5lcnMgb3IgY29kZSBwb2ludHMgZnJvbSB0aGUgYXN0cmFsIHBsYW5lc10oaHR0cDovL2Vldi5lZS9ibG9nLzIwMTUvMDkvMTIvZGFyay1jb3JuZXJzLW9mLXVuaWNvZGUvKS4gKi9cbnZhciByZUhhc1VuaWNvZGUgPSBSZWdFeHAoJ1snICsgcnNaV0ogKyByc0FzdHJhbFJhbmdlICArIHJzQ29tYm9SYW5nZSArIHJzVmFyUmFuZ2UgKyAnXScpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgc3RyaW5nYCBjb250YWlucyBVbmljb2RlIHN5bWJvbHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGEgc3ltYm9sIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGhhc1VuaWNvZGUoc3RyaW5nKSB7XG4gIHJldHVybiByZUhhc1VuaWNvZGUudGVzdChzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhhc1VuaWNvZGU7XG4iLCJ2YXIgYXNjaWlTaXplID0gcmVxdWlyZSgnLi9fYXNjaWlTaXplJyksXG4gICAgaGFzVW5pY29kZSA9IHJlcXVpcmUoJy4vX2hhc1VuaWNvZGUnKSxcbiAgICB1bmljb2RlU2l6ZSA9IHJlcXVpcmUoJy4vX3VuaWNvZGVTaXplJyk7XG5cbi8qKlxuICogR2V0cyB0aGUgbnVtYmVyIG9mIHN5bWJvbHMgaW4gYHN0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgVGhlIHN0cmluZyB0byBpbnNwZWN0LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3RyaW5nIHNpemUuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1NpemUoc3RyaW5nKSB7XG4gIHJldHVybiBoYXNVbmljb2RlKHN0cmluZylcbiAgICA/IHVuaWNvZGVTaXplKHN0cmluZylcbiAgICA6IGFzY2lpU2l6ZShzdHJpbmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0cmluZ1NpemU7XG4iLCIvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXG52YXIgcnNBc3RyYWxSYW5nZSA9ICdcXFxcdWQ4MDAtXFxcXHVkZmZmJyxcbiAgICByc0NvbWJvTWFya3NSYW5nZSA9ICdcXFxcdTAzMDAtXFxcXHUwMzZmJyxcbiAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXG4gICAgcnNDb21ib1N5bWJvbHNSYW5nZSA9ICdcXFxcdTIwZDAtXFxcXHUyMGZmJyxcbiAgICByc0NvbWJvUmFuZ2UgPSByc0NvbWJvTWFya3NSYW5nZSArIHJlQ29tYm9IYWxmTWFya3NSYW5nZSArIHJzQ29tYm9TeW1ib2xzUmFuZ2UsXG4gICAgcnNWYXJSYW5nZSA9ICdcXFxcdWZlMGVcXFxcdWZlMGYnO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2FwdHVyZSBncm91cHMuICovXG52YXIgcnNBc3RyYWwgPSAnWycgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzQ29tYm8gPSAnWycgKyByc0NvbWJvUmFuZ2UgKyAnXScsXG4gICAgcnNGaXR6ID0gJ1xcXFx1ZDgzY1tcXFxcdWRmZmItXFxcXHVkZmZmXScsXG4gICAgcnNNb2RpZmllciA9ICcoPzonICsgcnNDb21ibyArICd8JyArIHJzRml0eiArICcpJyxcbiAgICByc05vbkFzdHJhbCA9ICdbXicgKyByc0FzdHJhbFJhbmdlICsgJ10nLFxuICAgIHJzUmVnaW9uYWwgPSAnKD86XFxcXHVkODNjW1xcXFx1ZGRlNi1cXFxcdWRkZmZdKXsyfScsXG4gICAgcnNTdXJyUGFpciA9ICdbXFxcXHVkODAwLVxcXFx1ZGJmZl1bXFxcXHVkYzAwLVxcXFx1ZGZmZl0nLFxuICAgIHJzWldKID0gJ1xcXFx1MjAwZCc7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgdW5pY29kZSByZWdleGVzLiAqL1xudmFyIHJlT3B0TW9kID0gcnNNb2RpZmllciArICc/JyxcbiAgICByc09wdFZhciA9ICdbJyArIHJzVmFyUmFuZ2UgKyAnXT8nLFxuICAgIHJzT3B0Sm9pbiA9ICcoPzonICsgcnNaV0ogKyAnKD86JyArIFtyc05vbkFzdHJhbCwgcnNSZWdpb25hbCwgcnNTdXJyUGFpcl0uam9pbignfCcpICsgJyknICsgcnNPcHRWYXIgKyByZU9wdE1vZCArICcpKicsXG4gICAgcnNTZXEgPSByc09wdFZhciArIHJlT3B0TW9kICsgcnNPcHRKb2luLFxuICAgIHJzU3ltYm9sID0gJyg/OicgKyBbcnNOb25Bc3RyYWwgKyByc0NvbWJvICsgJz8nLCByc0NvbWJvLCByc1JlZ2lvbmFsLCByc1N1cnJQYWlyLCByc0FzdHJhbF0uam9pbignfCcpICsgJyknO1xuXG4vKiogVXNlZCB0byBtYXRjaCBbc3RyaW5nIHN5bWJvbHNdKGh0dHBzOi8vbWF0aGlhc2J5bmVucy5iZS9ub3Rlcy9qYXZhc2NyaXB0LXVuaWNvZGUpLiAqL1xudmFyIHJlVW5pY29kZSA9IFJlZ0V4cChyc0ZpdHogKyAnKD89JyArIHJzRml0eiArICcpfCcgKyByc1N5bWJvbCArIHJzU2VxLCAnZycpO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYSBVbmljb2RlIGBzdHJpbmdgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIFRoZSBzdHJpbmcgaW5zcGVjdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN0cmluZyBzaXplLlxuICovXG5mdW5jdGlvbiB1bmljb2RlU2l6ZShzdHJpbmcpIHtcbiAgdmFyIHJlc3VsdCA9IHJlVW5pY29kZS5sYXN0SW5kZXggPSAwO1xuICB3aGlsZSAocmVVbmljb2RlLnRlc3Qoc3RyaW5nKSkge1xuICAgICsrcmVzdWx0O1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gdW5pY29kZVNpemU7XG4iLCJ2YXIgYmFzZURlbGF5ID0gcmVxdWlyZSgnLi9fYmFzZURlbGF5JyksXG4gICAgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIHRvTnVtYmVyID0gcmVxdWlyZSgnLi90b051bWJlcicpO1xuXG4vKipcbiAqIEludm9rZXMgYGZ1bmNgIGFmdGVyIGB3YWl0YCBtaWxsaXNlY29uZHMuIEFueSBhZGRpdGlvbmFsIGFyZ3VtZW50cyBhcmVcbiAqIHByb3ZpZGVkIHRvIGBmdW5jYCB3aGVuIGl0J3MgaW52b2tlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IHdhaXQgVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkgaW52b2NhdGlvbi5cbiAqIEBwYXJhbSB7Li4uKn0gW2FyZ3NdIFRoZSBhcmd1bWVudHMgdG8gaW52b2tlIGBmdW5jYCB3aXRoLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXIgaWQuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVsYXkoZnVuY3Rpb24odGV4dCkge1xuICogICBjb25zb2xlLmxvZyh0ZXh0KTtcbiAqIH0sIDEwMDAsICdsYXRlcicpO1xuICogLy8gPT4gTG9ncyAnbGF0ZXInIGFmdGVyIG9uZSBzZWNvbmQuXG4gKi9cbnZhciBkZWxheSA9IGJhc2VSZXN0KGZ1bmN0aW9uKGZ1bmMsIHdhaXQsIGFyZ3MpIHtcbiAgcmV0dXJuIGJhc2VEZWxheShmdW5jLCB0b051bWJlcih3YWl0KSB8fCAwLCBhcmdzKTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGRlbGF5O1xuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsInZhciBiYXNlR2V0VGFnID0gcmVxdWlyZSgnLi9fYmFzZUdldFRhZycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTdHJpbmdgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzdHJpbmcsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N0cmluZygnYWJjJyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N0cmluZygxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHxcbiAgICAoIWlzQXJyYXkodmFsdWUpICYmIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgYmFzZUdldFRhZyh2YWx1ZSkgPT0gc3RyaW5nVGFnKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmluZztcbiIsInZhciBiYXNlS2V5cyA9IHJlcXVpcmUoJy4vX2Jhc2VLZXlzJyksXG4gICAgZ2V0VGFnID0gcmVxdWlyZSgnLi9fZ2V0VGFnJyksXG4gICAgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuL2lzQXJyYXlMaWtlJyksXG4gICAgaXNTdHJpbmcgPSByZXF1aXJlKCcuL2lzU3RyaW5nJyksXG4gICAgc3RyaW5nU2l6ZSA9IHJlcXVpcmUoJy4vX3N0cmluZ1NpemUnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG1hcFRhZyA9ICdbb2JqZWN0IE1hcF0nLFxuICAgIHNldFRhZyA9ICdbb2JqZWN0IFNldF0nO1xuXG4vKipcbiAqIEdldHMgdGhlIHNpemUgb2YgYGNvbGxlY3Rpb25gIGJ5IHJldHVybmluZyBpdHMgbGVuZ3RoIGZvciBhcnJheS1saWtlXG4gKiB2YWx1ZXMgb3IgdGhlIG51bWJlciBvZiBvd24gZW51bWVyYWJsZSBzdHJpbmcga2V5ZWQgcHJvcGVydGllcyBmb3Igb2JqZWN0cy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uIHNpemUuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uc2l6ZShbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICpcbiAqIF8uc2l6ZSh7ICdhJzogMSwgJ2InOiAyIH0pO1xuICogLy8gPT4gMlxuICpcbiAqIF8uc2l6ZSgncGViYmxlcycpO1xuICogLy8gPT4gN1xuICovXG5mdW5jdGlvbiBzaXplKGNvbGxlY3Rpb24pIHtcbiAgaWYgKGNvbGxlY3Rpb24gPT0gbnVsbCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChpc0FycmF5TGlrZShjb2xsZWN0aW9uKSkge1xuICAgIHJldHVybiBpc1N0cmluZyhjb2xsZWN0aW9uKSA/IHN0cmluZ1NpemUoY29sbGVjdGlvbikgOiBjb2xsZWN0aW9uLmxlbmd0aDtcbiAgfVxuICB2YXIgdGFnID0gZ2V0VGFnKGNvbGxlY3Rpb24pO1xuICBpZiAodGFnID09IG1hcFRhZyB8fCB0YWcgPT0gc2V0VGFnKSB7XG4gICAgcmV0dXJuIGNvbGxlY3Rpb24uc2l6ZTtcbiAgfVxuICByZXR1cm4gYmFzZUtleXMoY29sbGVjdGlvbikubGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNpemU7XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==