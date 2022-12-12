(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/beautify/shop-by-price-slider.js":
/*!****************************************************!*\
  !*** ./assets/js/beautify/shop-by-price-slider.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {var ShopByPriceSlider = /*#__PURE__*/function () {
  function ShopByPriceSlider($scope) {
    var _this = this;
    if ($scope.data('beautifyShopByPriceSliderInstance')) {
      return;
    }
    $scope.data('beautifyShopByPriceSliderInstance', this);
    this.onPriceInput = this.onPriceInput.bind(this);
    this.$scope = $scope;
    this.$slider = $('[data-slider]', $scope);
    this.$min = $('input[name="min_price"], input[data-input-min]', $scope);
    this.$max = $('input[name="max_price"], input[data-input-max]', $scope);
    this.$cancel = $('[data-cancel]', $scope);
    this.$clear = $('[data-clear]', $scope);
    this.$form = $('form', $scope).not('[data-faceted-search-range]'); // exclude faceted form
    this.$apply = $('[data-apply]', $scope);
    this.shopByPrice = $scope.data('beautifyShopByPrice');
    var min = this.shopByPrice[0].low.value;
    var max = this.shopByPrice[this.shopByPrice.length - 1].high.value;
    var params = new URLSearchParams(window.location.search);
    var values = [params.get('price_min') || params.get('min_price') || min, params.get('price_max') || params.get('max_price') || max];
    if (params.has('price_min') || params.has('min_price') || params.has('price_max') || params.has('max_price')) {
      this.$clear.show();
    } else {
      this.$clear.hide();
    }
    this.originalValues = values;
    this.$slider.slider({
      range: true,
      min: min,
      max: max,
      values: values,
      slide: function slide(event, ui) {
        _this.$min.val(ui.values[0]);
        _this.$max.val(ui.values[1]);
        if (ui.values[0] != _this.originalValues[0] || ui.values[1] != _this.originalValues[1]) {
          _this.$cancel.show();
        }
      }
    });
    this.$min.attr({
      min: min,
      max: max,
      value: params.get('price_min') || params.get('min_price') || ''
    }).on('input', this.onPriceInput);
    this.$max.attr({
      min: min,
      max: max,
      value: params.get('price_max') || params.get('max_price') || ''
    }).on('input', this.onPriceInput);
    this.$cancel.on('click', function () {
      event.preventDefault();
      _this.$slider.slider('values', _this.originalValues);
      _this.$min.val(_this.originalValues[0]);
      _this.$max.val(_this.originalValues[1]);
      _this.$cancel.hide();
    });
    this.$form.on('submit', function (event) {
      event.preventDefault();
      _this.apply();
    });
    this.$apply.on('click', function (event) {
      event.preventDefault();
      _this.apply();
    });
  }
  var _proto = ShopByPriceSlider.prototype;
  _proto.apply = function apply() {
    var _this$$slider$slider = this.$slider.slider('values'),
      slideMin = _this$$slider$slider[0],
      slideMax = _this$$slider$slider[1];
    var min = Number(this.$min.val()) || slideMin;
    var max = Number(this.$max.val()) || slideMax;
    var params = new URLSearchParams(window.location.search);
    params.set('price_min', min);
    params.set('price_max', max);
    window.location = window.location.pathname + "?" + params.toString();
  };
  _proto.onPriceInput = function onPriceInput(event) {
    var val = Number(event.target.value) || 0;
    var min = Number(this.$min.prop('min')) || 0;
    var max = Number(this.$min.prop('max')) || 0;
    var curMin = Number(this.$min.val()) || this.originalValues[0];
    var curMax = Number(this.$max.val()) || this.originalValues[1];
    if (val < min) {
      val = min;
    }
    if (val > max) {
      val = max;
    }
    if (this.$min.is(event.target) && curMax > 0 && val > curMax) {
      val = curMax;
    }
    if (this.$max.is(event.target) && curMin > 0 && val < curMin) {
      val = curMin;
    }
    event.target.value = val;
    var newMin = Number(this.$min.val()) || this.originalValues[0];
    var newMax = Number(this.$max.val()) || this.originalValues[1];
    this.$slider.slider('values', [newMin, newMax]);
    if (newMin != this.originalValues[0] || newMax != this.originalValues[1]) {
      this.$cancel.show();
    } else {
      this.$cancel.hide();
    }
  };
  return ShopByPriceSlider;
}();
/* harmony default export */ __webpack_exports__["default"] = (function (selector) {
  if (selector === void 0) {
    selector = '[data-beautify-shop-by-price]';
  }
  $(selector).each(function (i, el) {
    return new ShopByPriceSlider($(el));
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/papathemes/action-bar.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/action-bar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return actionBarFactory; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");



var instantloadBinded = false;
var actionBar;
function removeModeClass(index, className) {
  return (className.match(/(^|\s)mode-\S+/g) || []).join(' ');
}
var ActionBar = /*#__PURE__*/function () {
  function ActionBar(options) {
    if (options === void 0) {
      options = {};
    }
    // console.log('actionbar constructor');
    this.onModeChange = this.onModeChange.bind(this);
    this.options = options;
    this.init();
  }
  var _proto = ActionBar.prototype;
  _proto.init = function init() {
    this.$sortBy = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-sort-by]');
    if (!this.$sortBy.length) {
      return;
    }
    var $limit = this.$sortBy.find('[name=limit]');
    var $mode = this.$sortBy.find('input[name=mode]');
    var url = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.location.href, true);
    if (url.query.limit) {
      $limit.val(url.query.limit);
    }
    if (url.query.mode) {
      $mode.prop('checked', false).filter("[value=" + url.query.mode + "]").prop('checked', true);
    }

    // Stop action bar if the page is category bulk order custom template
    var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    if ($body.hasClass('supermarket-page--pages-custom-category-bulk-order') || $body.hasClass('supermarket-page--pages-custom-brand-bulk-order')) {
      return;
    }
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + $mode.filter(':checked').val());
    this.unbindEvents();
    this.bindEvents();
  };
  _proto.reinit = function reinit(newOptions) {
    // console.log('actionbar reinit');
    if (newOptions) {
      this.options = newOptions;
    }
    this.init();
  };
  _proto.destroy = function destroy() {
    // console.log('actionbar destroyed');
    this.unbindEvents();
  };
  _proto.bindEvents = function bindEvents() {
    this.$sortBy.find('input[name=mode]').on('change', this.onModeChange);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$sortBy.find('input[name=mode]').off('change', this.onModeChange);
  };
  _proto.onModeChange = function onModeChange(event) {
    event.preventDefault();
    var mode = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).val();
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container').removeClass(removeModeClass).addClass("mode-" + mode);
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#product-listing-container .pagination-link').each(function (i, el) {
      var $a = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].replaceParams($a.attr('href'), {
        mode: mode
      });
      $a.attr('href', url);
    });
    var url = url__WEBPACK_IMPORTED_MODULE_1___default.a.parse(window.location.href, true);
    url.query.mode = mode;
    window.history.pushState({}, document.title, url__WEBPACK_IMPORTED_MODULE_1___default.a.format({
      pathname: url.pathname,
      search: _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_2__["default"].buildQueryString(url.query)
    }));
  };
  return ActionBar;
}();
/**
 * Call this function when:
 * - Page is loaded
 * - Ajax page returned
 */
function actionBarFactory(options) {
  if (actionBar) {
    actionBar.reinit(options);
  } else {
    actionBar = new ActionBar(options);
  }

  // Destroy actionBar when loading new page
  if (!instantloadBinded) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      if (actionBar) {
        actionBar.destroy();
        actionBar = null;
      }
    });
    instantloadBinded = true;
  }
}

/***/ }),

/***/ "./assets/js/papathemes/bulk-order.js":
/*!********************************************!*\
  !*** ./assets/js/papathemes/bulk-order.js ***!
  \********************************************/
/*! exports provided: BulkOrder, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkOrder", function() { return BulkOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return bulkOrderFactory; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




//
// https://javascript.info/task/delay-promise
//
function delay(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

//
// https://hackernoon.com/functional-javascript-resolving-promises-sequentially-7aac18c4431e
//
function promiseSerial(funcs) {
  return funcs.reduce(function (promise, func) {
    return promise.then(function (result) {
      return func().then(Array.prototype.concat.bind(result));
    });
  }, Promise.resolve([]));
}
var BulkOrder = /*#__PURE__*/function () {
  function BulkOrder(context, $scope) {
    var _this = this;
    this.context = context || {};
    this.$body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
    this.$scope = $scope;
    this.itemCount = 0;
    this.progressCurrent = 0;
    this.progressTotal = 0;
    this.onQuantityChange = this.onQuantityChange.bind(this);
    this.onQuantityButtonClick = this.onQuantityButtonClick.bind(this);
    this.onProductAdded = this.onProductAdded.bind(this);
    this.onAddAllClick = this.onAddAllClick.bind(this);
    this.onCartQtyChange = this.onCartQtyChange.bind(this);
    this.onProgressPopupCloseClick = this.onProgressPopupCloseClick.bind(this);
    this.reinit();

    // Supermarket
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('beforeload.instantload', function () {
      return _this.unbindEvents();
    });
  }
  var _proto = BulkOrder.prototype;
  _proto.reinit = function reinit() {
    this.$progressPopup = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal', this.$scope);
    this.$progressBar = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.progressBar', this.$progressPopup);
    this.$progressPopupCurrent = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-current', this.$scope);
    this.$progressPopupActions = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bulkOrder-progressModal-actions', this.$scope);
    this.$progressPopupClose = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-close]', this.$scope);
    this.unbindEvents();
    this.bindEvents();
    this.calculate();
    if (this.context.cartId) {
      this.updateQtyInCart();
    }
  };
  _proto.bindEvents = function bindEvents() {
    this.$scope.on('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.on('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.on('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.on('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.on('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.on('click', this.onProgressPopupCloseClick);
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$scope.off('change', '[data-bulkorder-qty-id]', this.onQuantityChange);
    this.$scope.off('click', '[data-quantity-change] button', this.onQuantityButtonClick);
    this.$scope.off('click', '[data-bulkorder-add-all]', this.onAddAllClick);
    this.$body.off('ajax-addtocart-item-added', this.onProductAdded);
    this.$body.off('cart-quantity-update', this.onCartQtyChange);
    this.$progressPopupClose.off('click', this.onProgressPopupCloseClick);
  };
  _proto.onProgressPopupCloseClick = function onProgressPopupCloseClick(event) {
    event.preventDefault();
    this.hideProgressPopup();
  };
  _proto.onCartQtyChange = function onCartQtyChange() {
    this.updateQtyInCart();
  };
  _proto.showProgressPopup = function showProgressPopup() {
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.addClass('is-open');
  };
  _proto.hideProgressPopup = function hideProgressPopup() {
    this.$progressPopupCurrent.css('width', 0);
    this.$progressPopupActions.addClass('u-hiddenVisually');
    this.$progressPopup.removeClass('is-open');
  };
  _proto.updateProgressPopup = function updateProgressPopup() {
    if (this.progressTotal > 0) {
      this.$progressPopupCurrent.css('width', this.progressCurrent / this.progressTotal * 100 + "%");
    } else {
      this.$progressPopupCurrent.css('width', 0);
    }
  };
  _proto.showProgressPopupActions = function showProgressPopupActions() {
    this.$progressPopupActions.removeClass('u-hiddenVisually');
  };
  _proto.showProgressBar = function showProgressBar() {
    this.$progressBar.removeClass('u-hiddenVisually');
  };
  _proto.hideProgressBar = function hideProgressBar() {
    this.$progressBar.addClass('u-hiddenVisually');
  };
  _proto.onAddAllClick = function onAddAllClick(event) {
    event.preventDefault();
    if (this.itemCount === 0) {
      _theme_global_sweet_alert__WEBPACK_IMPORTED_MODULE_2__["default"].fire({
        text: this.context.bulkOrderEnterQty || 'Please enter product quantity',
        icon: 'error'
      });
      return;
    }
    this.addAllProducts();
  };
  _proto.onProductAdded = function onProductAdded(event, productId) {
    this.$scope.find("[data-bulkorder-qty-id='" + productId + "']").val(0);
    this.calculate();
  };
  _proto.onQuantityButtonClick = function onQuantityButtonClick(event) {
    event.preventDefault();
    var $target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget);
    var $input = $target.closest('[data-quantity-change]').find('input');
    var quantityMin = parseInt($input.data('quantityMin'), 10);
    var quantityMax = parseInt($input.data('quantityMax'), 10);
    var qty = parseInt($input.val(), 10);

    // If action is incrementing
    if ($target.data('action') === 'inc') {
      // If quantity max option is set
      if (quantityMax > 0) {
        // Check quantity does not exceed max
        if (qty + 1 <= quantityMax) {
          qty++;
        }
      } else {
        qty++;
      }
    } else if (qty > 0) {
      // If quantity min option is set
      if (quantityMin > 0) {
        // Check quantity does not fall below min
        if (qty - 1 >= quantityMin) {
          qty--;
        } else {
          qty = 0;
        }
      } else {
        qty--;
      }
    }
    $input.val(qty);
    this.calculate();
  };
  _proto.onQuantityChange = function onQuantityChange() {
    this.calculate();
  };
  _proto.calculate = function calculate() {
    var _this2 = this;
    var format = '';
    var total = 0;
    var count = 0;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');
      var $price = _this2.$scope.find("[data-bulkorder-price-id='" + productId + "']");
      var priceVal = parseFloat($price.data('bulkorderPriceValue'));
      var priceFmt = "" + $price.data('bulkorderPriceFormatted');
      var subtotal = Math.round(priceVal * qty * 100) / 100;
      var $subtotal = _this2.$scope.find("[data-bulkorder-subtotal-id='" + productId + "']");
      $subtotal.html(priceFmt.replace(/[0-9.,]+/, subtotal));
      format = priceFmt;
      total += subtotal;
      count += qty;
    });
    this.itemCount = count;
    this.$scope.find('[data-bulkorder-total-count]').html(count);
    this.$scope.find('[data-bulkorder-total-amount]').html(format.replace(/[0-9.,]+/, Math.round(total * 100) / 100));
  };
  _proto.addAllProducts = function addAllProducts() {
    var _this3 = this;
    var promises = [];
    this.progressCurrent = 0;
    this.$scope.find('[data-bulkorder-qty-id]').each(function (i, el) {
      var $input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
      var qty = parseInt($input.val(), 10);
      var productId = $input.data('bulkorderQtyId');
      if (qty > 0) {
        promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this3.progressCurrent++;
                  _this3.updateProgressPopup();
                  _context.next = 4;
                  return _this3.addProduct(productId, qty);
                case 4:
                  // eslint-disable-line no-unused-expressions

                  $input.val(0);
                  _this3.calculate();

                  // wait 1s before adding to cart a new item in order to avoid request failed.
                  _context.next = 8;
                  return delay(1000);
                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        })));
      }
    });
    this.progressTotal = promises.length;
    this.showProgressPopup();
    this.showProgressBar();
    promiseSerial(promises).then(function () {
      _this3.showProgressPopupActions();
      _this3.hideProgressBar();
      // this.updateQtyInCart();
      _this3.updateCartCounter();
    });
  };
  _proto.addProduct = /*#__PURE__*/function () {
    var _addProduct = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(productId, qty) {
      var formData, promise;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!(window.FormData === undefined)) {
                _context2.next = 2;
                break;
              }
              return _context2.abrupt("return");
            case 2:
              formData = new FormData();
              formData.append('product_id', productId);
              formData.append('qty[]', qty);
              promise = new Promise(function (resolve) {
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(formData, function (err, response) {
                  var errorMessage = err || response.data.error;

                  // Guard statement
                  if (errorMessage) {
                    // Strip the HTML from the error message
                    var tmp = document.createElement('DIV');
                    tmp.innerHTML = errorMessage;
                    alert(tmp.textContent || tmp.innerText);
                  }
                  resolve();
                });
              });
              _context2.next = 8;
              return promise;
            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    function addProduct(_x, _x2) {
      return _addProduct.apply(this, arguments);
    }
    return addProduct;
  }();
  _proto.updateQtyInCart = function updateQtyInCart() {
    var _this4 = this;
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/storefront/cart', function (data) {
      if (!data.length) {
        return;
      }
      var qtys = {};
      data[0].lineItems.physicalItems.forEach(function (item) {
        if (typeof qtys[item.productId] !== 'undefined') {
          qtys[item.productId] += item.quantity;
        } else {
          qtys[item.productId] = item.quantity;
        }
      });
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-bulkorder-cart-qty-id]', _this4.$scope).each(function (i, el) {
        var $el = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el);
        var productId = parseInt($el.data('bulkorderCartQtyId'), 10);
        if (qtys[productId]) {
          $el.html(qtys[productId]);
          $el.closest('._qtyInCartWrapper').show();
        } else {
          $el.html('0');
          $el.closest('._qtyInCartWrapper').hide();
        }
      });
    });
  };
  _proto.updateCartCounter = function updateCartCounter() {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.getContent({
      template: 'cart/preview'
    }, function (err, resp) {
      if (err) {
        return;
      }

      // Update cart counter
      var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
      var $cartQuantity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-cart-quantity]', resp);
      var $cartCounter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cart-quantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
    });
  };
  return BulkOrder;
}();
function bulkOrderFactory(context, selector) {
  if (context === void 0) {
    context = null;
  }
  if (selector === void 0) {
    selector = '#product-listing-container';
  }
  var $selector = jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector);
  var bulkOrder = $selector.data('bulkOrderInstance');
  if (!(bulkOrder instanceof BulkOrder)) {
    bulkOrder = new BulkOrder(context, $selector);
    $selector.data('bulkOrderInstance', bulkOrder);
  }
  return bulkOrder;
}

/***/ }),

/***/ "./assets/js/papathemes/compare-products.js":
/*!**************************************************!*\
  !*** ./assets/js/papathemes/compare-products.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return compareProducts; });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);

var singleton;
var compareListTmpl = "\n    <div class=\"supermarket-compareList-panel-wrapper is-empty\" id=\"supermarketCompareList\">\n        <div class=\"supermarket-compareList-panel\">\n            <div class=\"supermarket-compareList-panel-body\">\n                <div class=\"supermarket-compareList\" data-compare-product-list>{{{renderItems}}}</div>\n                <div class=\"supermarket-compareList-actions\">\n                    <a href=\"{{compare_url}}\" class=\"button button--primary button--small button--compare\" data-compare-product-button>{{compare}}</a>\n                    <button type=\"button\" class=\"button button--plain button--small button--clearAll\" data-compare-product-clearall>{{clear_all}}</button>\n                </div>\n            </div>\n            <button type=\"button\" class=\"button button--close\" data-compare-product-toggle><i class=\"fa fa-chevron-down\"></i><span class=\"is-srOnly\">Close</span></button>\n            <button type=\"button\" class=\"button button--open\" data-compare-product-toggle><i class=\"fa fa-chevron-up\"></i><span class=\"is-srOnly\">Open</span></button>\n        </div>\n    </div>\n";
var compareListItemTmpl = "\n    <div class=\"supermarket-compareList-item\" data-compare-product-item=\"{{id}}\">\n        <img class=\"supermarket-compareList-img\" src=\"{{image}}\" alt=\"{{alt}}\" title=\"{{alt}}\">\n        <button type=\"button\" class=\"supermarket-compareList-quickview quickview\" data-product-id=\"{{id}}\"><i class=\"fa fa-search-plus\"></i><span class=\"is-srOnly\">{{quick_view}}</span></button>\n        <button type=\"button\" class=\"supermarket-compareList-remove\" data-compare-product-remove=\"{{id}}\"><i class=\"fa fa-trash\"></i><span class=\"is-srOnly\">{{remove}}</span></button>\n    </div>\n";
var CompareProducts = /*#__PURE__*/function () {
  function CompareProducts(context) {
    var _this = this;
    this.context = context;
    this.animationTime = 300;
    this.$body = $('body');
    this.products = this.loadProductsFromLocalStorage() || [];
    this.$scope = $(mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(compareListTmpl, {
      compare: context.compareAddonLang_compare,
      clear_all: context.compareAddonLang_clear_all,
      renderItems: function renderItems() {
        return _this.products.map(function (product) {
          return _this.renderItem(product);
        }).join('');
      }
    }));
    if (this.products.length === 0) {
      this.$scope.addClass('is-empty').hide();
    } else {
      this.$scope.removeClass('is-empty').show();
    }
    this.$body.append(this.$scope);
    this.$productList = this.$scope.find('[data-compare-product-list]');
    this.$compareButton = this.$scope.find('[data-compare-product-button]');
    this.updateCompareUrl();
    this.bindEvents();
  }
  var _proto = CompareProducts.prototype;
  _proto.loadProductsFromLocalStorage = function loadProductsFromLocalStorage() {
    if (!window.localStorage) {
      return;
    }
    var s = window.localStorage.getItem('compareProducts');
    if (s) {
      try {
        return JSON.parse(s);
      } catch (e) {
        return null;
      }
    } else {
      return null;
    }
  };
  _proto.saveProductsToLocalStorage = function saveProductsToLocalStorage() {
    if (!window.localStorage) {
      return;
    }
    window.localStorage.setItem('compareProducts', JSON.stringify(this.products));
  };
  _proto.bindEvents = function bindEvents() {
    var _this2 = this;
    this.$body.on('click', '[data-compare-id]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareId'));
      if (_this2.products.filter(function (item) {
        return item.id === id;
      }).length === 0) {
        _this2.addProduct({
          image: $el.data('compareImage'),
          alt: $el.data('compareTitle'),
          id: id
        });
      }
      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.on('click', '[data-compare-product-remove]', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var id = Number($el.data('compareProductRemove'));
      _this2.removeProduct(id);
      _this2.$scope.removeClass('is-closed');
    });
    this.$scope.find('[data-compare-product-toggle]').on('click', function (event) {
      event.preventDefault();
      _this2.$scope.toggleClass('is-closed');
    });
    this.$scope.find('[data-compare-product-clearall]').on('click', function (event) {
      event.preventDefault();
      _this2.clearAllProducts();
    });
  };
  _proto.addProduct = function addProduct(product) {
    var _this3 = this;
    this.products.push(product);
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = $(this.renderItem(product)).hide();
    this.$productList.append($el);
    $el.show(this.animationTime, function () {
      _this3.$scope.removeClass('is-empty').fadeIn(_this3.animationTime);
    });
  };
  _proto.removeProduct = function removeProduct(id) {
    var _this4 = this;
    this.products = this.products.filter(function (item) {
      return item.id !== id;
    });
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find("[data-compare-product-item=" + id + "]");
    $el.fadeOut(this.animationTime, function () {
      $el.remove();
      if (_this4.products.length === 0) {
        _this4.$scope.addClass('is-empty').fadeOut(_this4.animationTime);
      }
    });
  };
  _proto.clearAllProducts = function clearAllProducts() {
    var _this5 = this;
    this.products = [];
    this.saveProductsToLocalStorage();
    this.updateCompareUrl();
    var $el = this.$scope.find('[data-compare-product-item]');
    $el.fadeOut(this.animationTime, function () {
      $el.remove();
      _this5.$scope.addClass('is-empty').fadeOut(_this5.animationTime);
    });
  };
  _proto.updateCompareUrl = function updateCompareUrl() {
    var path = this.products.map(function (product) {
      return product.id;
    }).join('/');
    this.$compareButton.attr('href', this.context.urls.compare + "/" + path);
  };
  _proto.renderItem = function renderItem(item) {
    return mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(compareListItemTmpl, Object.assign({}, item, {
      quick_view: this.context.compareAddonLang_quick_view,
      remove: this.context.compareAddonLang_remove
    }));
  };
  return CompareProducts;
}();
function compareProducts(context) {
  if (!singleton) {
    singleton = new CompareProducts(context);
  }
  return singleton;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);
  function CatalogPage() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = CatalogPage.prototype;
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */
    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */
    delete url.query.page;
    event.preventDefault();
    event.isDefaultPrevented = true; /* eslint-disable-line */ // papathemes-supermarket: quickfix stop stencil-utils SortByHook submitting the form when select changed
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/faceted-search.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../beautify/shop-by-price-slider */ "./assets/js/beautify/shop-by-price-slider.js");











 // Papathemes - Supermarket


/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    var defaultOptions = {
      accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
      blockerSelector: '#facetedSearch .blocker, #beautify__findGate-sidebar .blocker',
      // papathemes-beautify edited
      clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
      componentSelector: '#facetedSearch-navList',
      facetNavListSelector: '#facetedSearch .navList',
      priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
      priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
      priceRangeFormSelector: '#facet-range-form',
      priceRangeMaxPriceSelector: '#facet-range-form [name=max_price]',
      priceRangeMinPriceSelector: '#facet-range-form [name=min_price]',
      showMoreToggleSelector: '#facetedSearch ._accordion-content .toggleLink',
      // papathemes-beautify edited
      facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
      modal: Object(_global_modal__WEBPACK_IMPORTED_MODULE_7__["default"])('#modal')[0],
      modalOpen: false
    };

    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_3___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // papathemes-beautify
    this.initPriceSlider();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onPopState = this.onPopState.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();

    // Supermarket
    $('body').one('beforeload.instantload', function () {
      return _this.unbindEvents();
    });

    // papathemes-beautify
    this.initFindGate();
  }

  // papathemes-beautify
  var _proto = FacetedSearch.prototype;
  _proto.initFindGate = function initFindGate() {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);
    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      this.findGate(width);
    }
  };
  _proto.findGate = function findGate(width) {
    var _this2 = this;
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);
    delete url.query._bs_width;
    delete url.query['Minimum Gate Width'];
    delete url.query['Minimum Gate Width[]'];
    delete url.query['Maximum Gate Width'];
    delete url.query['Maximum Gate Width[]'];
    if (width) {
      var showMoreUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
      });
      var minWidthPromise = new Promise(function (resolve) {
        var findMinWidthValues = function findMinWidthValues($scope) {
          return $scope.find('[data-faceted-search-facet]').get().map(function (el) {
            var _url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse($(el).attr('href'), true);
            return Number(_url.query['Minimum Gate Width']);
          });
        };
        var $minWidth = $('#facetedSearch [data-facet="Minimum Gate Width"]');
        if ($minWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(showMoreUrl, {
            template: _this2.requestOptions.showMore,
            params: {
              list_all: 'Minimum Gate Width'
            }
          }, function (err, resp) {
            resolve(findMinWidthValues($(resp)));
          });
        } else {
          resolve(findMinWidthValues($minWidth));
        }
      });
      var maxWidthPromise = new Promise(function (resolve) {
        var findMaxWidthValues = function findMaxWidthValues($scope) {
          return $scope.find('[data-faceted-search-facet]').get().map(function (el) {
            var _url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse($(el).attr('href'), true);
            return Number(_url.query['Maximum Gate Width']);
          });
        };
        var $maxWidth = $('#facetedSearch [data-facet="Maximum Gate Width"]');
        if ($maxWidth.data('hasMoreResults')) {
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(showMoreUrl, {
            template: _this2.requestOptions.showMore,
            params: {
              list_all: 'Maximum Gate Width'
            }
          }, function (err, resp) {
            resolve(findMaxWidthValues($(resp)));
          });
        } else {
          resolve(findMaxWidthValues($maxWidth));
        }
      });
      Promise.all([minWidthPromise, maxWidthPromise]).then(function (_ref) {
        var minWidthArr = _ref[0],
          maxWidthArr = _ref[1];
        url.query._bs_width = width;
        url.query['Minimum Gate Width[]'] = minWidthArr.filter(function (val) {
          return val <= width;
        });
        url.query['Maximum Gate Width[]'] = maxWidthArr.filter(function (val) {
          return val >= width;
        });
        if (url.query['Minimum Gate Width[]'].length === minWidthArr.length) {
          delete url.query['Minimum Gate Width[]'];
        }
        if (url.query['Maximum Gate Width[]'].length === maxWidthArr.length) {
          delete url.query['Maximum Gate Width[]'];
        }
        _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
          pathname: url.pathname,
          search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
        }));
      });
    } else {
      _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
        pathname: url.pathname,
        search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
      }));
    }
  }

  // Supermarket
  ;
  _proto.destroy = function destroy() {
    this.unbindEvents();
  }

  // Public methods
  ;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }
    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_11__["default"])(); // Papathemes - Supermarket

    // Init collapsibles
    Object(_collapsible__WEBPACK_IMPORTED_MODULE_8__["default"])();

    // Init price validator
    this.initPriceValidator();

    // papathemes-beautify
    this.initPriceSlider();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this3 = this;
    // Supermarket
    if (this.updateViewCallback) {
      return this.updateViewCallback();
    }
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this3.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this3.refreshView(content);
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this4 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["api"].getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this4.options.modal.open();
        _this4.options.modalOpen = true;
        _this4.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this6 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this6.expandFacet($accordionToggle);
    });
  }

  // Private methods
  ;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = Object(_nod__WEBPACK_IMPORTED_MODULE_10__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_9__["Validators"].setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this7 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this7.collapsedFacetItems, id);
      if (shouldCollapse) {
        _this7.collapseFacetItems($navList);
      } else {
        _this7.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this8 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = lodash_includes__WEBPACK_IMPORTED_MODULE_0___default()(_this8.collapsedFacets, id);
      if (shouldCollapse) {
        _this8.collapseFacet($accordionToggle);
      } else {
        _this8.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    var _this9 = this;
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // papathemes-beautify {{{
    var $minMaxFacets = $('#facetedSearch-navList--maximum-gate-width, #facetedSearch-content--minimum-gate-width');
    if ($minMaxFacets.length > 0) {
      $('.sidebarBlock--findGate').show();
      $minMaxFacets.closest('._accordion-block').hide();
    } else {
      $('.sidebarBlock--findGate').hide();
    }
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(_utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].getUrl(), true);
    if (url.query._bs_width) {
      var width = Number(url.query._bs_width);
      $('#beautify__findGate-sidebar form [name=_bs_width]').val(width);
    }
    $('#beautify__findGate-sidebar form').off('submit').on('submit', function (event) {
      event.preventDefault();
      _this9.findGate($(event.target).find('[name=_bs_width]').val());
    });
    // }}}

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */
    var winUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(url, true);
    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }
    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    /* MOD by papathemes - supermarket
    ---
    urlUtils.goToUrl(url);
    ---
    */
    var winUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var facetUrl = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(url, true);
    if (winUrl.query.mode) {
      facetUrl.query.mode = winUrl.query.mode;
    }
    if (winUrl.query.limit) {
      facetUrl.query.limit = winUrl.query.limit;
    }
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: facetUrl.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(facetUrl.query)
    }));
    /* END MOD */

    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    /* MOD by papathemes - supermarket
    ---
    const queryParams = $(currentTarget).serialize().split('=');
     url.query[queryParams[0]] = queryParams[1];
    ---
    */
    var queryParams = $(currentTarget).serializeArray();
    queryParams.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    /* END MOD */
    delete url.query.page;
    event.preventDefault();
    event.isDefaultPrevented = true; // papathemes-supermarket: quick-fixed stencil-utils for sorting ajax request

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_10__["default"].constants.VALID)) {
      return;
    }

    /* MOD by papathemes - supermarket
    ---
    const url = Url.parse(window.location.href);
    const queryParams = decodeURI($(currentTarget).serialize());
    ---
    */
    var url = url__WEBPACK_IMPORTED_MODULE_5___default.a.parse(window.location.href, true);
    var queryParamsArray = $(currentTarget).serializeArray();
    queryParamsArray.forEach(function (param) {
      url.query[param.name] = param.value;
    });
    var queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].buildQueryString(url.query);
    /* END MOD */

    _utils_url_utils__WEBPACK_IMPORTED_MODULE_6__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_5___default.a.format({
      pathname: url.pathname,
      search: "?" + queryParams
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_2___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    var currentUrl = window.location.href;
    var searchParams = new URLSearchParams(currentUrl);
    // If searchParams does not contain a page value then modify url query string to have page=1
    if (!searchParams.has('page')) {
      var linkUrl = $('.pagination-link').attr('href');
      if (linkUrl) {
        // Supermarket Fix undefined
        var re = /page=[0-9]+/i;
        var updatedLinkUrl = linkUrl.replace(re, 'page=1');
        window.history.replaceState({}, document.title, updatedLinkUrl);
      }
    }
    $(window).trigger('statechange');
  }

  // papathemes-beautify
  ;
  _proto.initPriceSlider = function initPriceSlider() {
    $('#facetedSearch[data-beautify-faceted-shop-by-price]').get().map(function (el) {
      return $(el);
    }).forEach(function ($facetedSearch) {
      var $shopByPrice = $facetedSearch.find('#facetedSearch-content--price');
      $shopByPrice.data('beautifyShopByPrice', $facetedSearch.data('beautifyFacetedShopByPrice'));
      Object(_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_12__["default"])($shopByPrice);
    });
  };
  return FacetedSearch;
}();
/* harmony default export */ __webpack_exports__["default"] = (FacetedSearch);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
// eslint-disable-next-line import/prefer-default-export
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./assets/js/theme/common/utils/url-utils.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }

    // supermarket: Fix url encode RFC 3986
    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }
    return url__WEBPACK_IMPORTED_MODULE_0___default.a.format(parsed);
  },
  // Supermarket
  removeParams: function removeParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0___default.a.parse(url, true);

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    if (typeof params === 'string') {
      if (parsed.query.hasOwnProperty(params)) {
        parsed.query[params] = null;
        delete parsed.query[params];
      }
    } else if (typeof params === 'object') {
      params.forEach(function (param) {
        if (parsed.query.hasOwnProperty(param)) {
          parsed.query[param] = null;
          delete parsed.query[param];
        }
      });
    }

    // supermarket: Fix url encode RFC 3986
    if (parsed.query) {
      parsed.search = urlUtils.buildQueryString(parsed.query);
      delete parsed.query;
    }
    return url__WEBPACK_IMPORTED_MODULE_0___default.a.format(parsed);
  },
  // supermarket: Fix faceted value contains both + and a spacing character (ie. "DVD+R DL")
  encodeParam: function encodeParam(val) {
    return encodeURIComponent(val).split('%20').join('+').replace(/[!'()*]/g, function (c) {
      return "%" + c.charCodeAt(0).toString(16);
    });
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key][ndx]); // supermarket mod
            }
          }
        } else {
          out += "&" + urlUtils.encodeParam(key) + "=" + urlUtils.encodeParam(queryData[key]); // supermarket mod
        }
      }
    }

    return out.substring(1);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (urlUtils);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYmVhdXRpZnkvc2hvcC1ieS1wcmljZS1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvYWN0aW9uLWJhci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9idWxrLW9yZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wYXBhdGhlbWVzL2NvbXBhcmUtcHJvZHVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9mYWNldGVkLXNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3RyYW5zbGF0aW9ucy11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL3VybC11dGlscy5qcyJdLCJuYW1lcyI6WyJTaG9wQnlQcmljZVNsaWRlciIsIiRzY29wZSIsImRhdGEiLCJvblByaWNlSW5wdXQiLCJiaW5kIiwiJHNsaWRlciIsIiQiLCIkbWluIiwiJG1heCIsIiRjYW5jZWwiLCIkY2xlYXIiLCIkZm9ybSIsIm5vdCIsIiRhcHBseSIsInNob3BCeVByaWNlIiwibWluIiwibG93IiwidmFsdWUiLCJtYXgiLCJsZW5ndGgiLCJoaWdoIiwicGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ2YWx1ZXMiLCJnZXQiLCJoYXMiLCJzaG93IiwiaGlkZSIsIm9yaWdpbmFsVmFsdWVzIiwic2xpZGVyIiwicmFuZ2UiLCJzbGlkZSIsImV2ZW50IiwidWkiLCJ2YWwiLCJhdHRyIiwib24iLCJwcmV2ZW50RGVmYXVsdCIsImFwcGx5Iiwic2xpZGVNaW4iLCJzbGlkZU1heCIsIk51bWJlciIsInNldCIsInBhdGhuYW1lIiwidG9TdHJpbmciLCJ0YXJnZXQiLCJwcm9wIiwiY3VyTWluIiwiY3VyTWF4IiwiaXMiLCJuZXdNaW4iLCJuZXdNYXgiLCJzZWxlY3RvciIsImVhY2giLCJpIiwiZWwiLCJpbnN0YW50bG9hZEJpbmRlZCIsImFjdGlvbkJhciIsInJlbW92ZU1vZGVDbGFzcyIsImluZGV4IiwiY2xhc3NOYW1lIiwibWF0Y2giLCJqb2luIiwiQWN0aW9uQmFyIiwib3B0aW9ucyIsIm9uTW9kZUNoYW5nZSIsImluaXQiLCIkc29ydEJ5IiwiJGxpbWl0IiwiZmluZCIsIiRtb2RlIiwidXJsIiwiVXJsIiwicGFyc2UiLCJocmVmIiwicXVlcnkiLCJsaW1pdCIsIm1vZGUiLCJmaWx0ZXIiLCIkYm9keSIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInVuYmluZEV2ZW50cyIsImJpbmRFdmVudHMiLCJyZWluaXQiLCJuZXdPcHRpb25zIiwiZGVzdHJveSIsIm9mZiIsIiRhIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJmb3JtYXQiLCJidWlsZFF1ZXJ5U3RyaW5nIiwiYWN0aW9uQmFyRmFjdG9yeSIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJwcm9taXNlU2VyaWFsIiwiZnVuY3MiLCJyZWR1Y2UiLCJwcm9taXNlIiwiZnVuYyIsInRoZW4iLCJyZXN1bHQiLCJBcnJheSIsInByb3RvdHlwZSIsImNvbmNhdCIsIkJ1bGtPcmRlciIsImNvbnRleHQiLCJpdGVtQ291bnQiLCJwcm9ncmVzc0N1cnJlbnQiLCJwcm9ncmVzc1RvdGFsIiwib25RdWFudGl0eUNoYW5nZSIsIm9uUXVhbnRpdHlCdXR0b25DbGljayIsIm9uUHJvZHVjdEFkZGVkIiwib25BZGRBbGxDbGljayIsIm9uQ2FydFF0eUNoYW5nZSIsIm9uUHJvZ3Jlc3NQb3B1cENsb3NlQ2xpY2siLCIkcHJvZ3Jlc3NQb3B1cCIsIiRwcm9ncmVzc0JhciIsIiRwcm9ncmVzc1BvcHVwQ3VycmVudCIsIiRwcm9ncmVzc1BvcHVwQWN0aW9ucyIsIiRwcm9ncmVzc1BvcHVwQ2xvc2UiLCJjYWxjdWxhdGUiLCJjYXJ0SWQiLCJ1cGRhdGVRdHlJbkNhcnQiLCJoaWRlUHJvZ3Jlc3NQb3B1cCIsInNob3dQcm9ncmVzc1BvcHVwIiwiY3NzIiwidXBkYXRlUHJvZ3Jlc3NQb3B1cCIsInNob3dQcm9ncmVzc1BvcHVwQWN0aW9ucyIsInNob3dQcm9ncmVzc0JhciIsImhpZGVQcm9ncmVzc0JhciIsInN3YWwiLCJmaXJlIiwidGV4dCIsImJ1bGtPcmRlckVudGVyUXR5IiwiaWNvbiIsImFkZEFsbFByb2R1Y3RzIiwicHJvZHVjdElkIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCIkaW5wdXQiLCJjbG9zZXN0IiwicXVhbnRpdHlNaW4iLCJwYXJzZUludCIsInF1YW50aXR5TWF4IiwicXR5IiwidG90YWwiLCJjb3VudCIsIiRwcmljZSIsInByaWNlVmFsIiwicGFyc2VGbG9hdCIsInByaWNlRm10Iiwic3VidG90YWwiLCJNYXRoIiwicm91bmQiLCIkc3VidG90YWwiLCJodG1sIiwicmVwbGFjZSIsInByb21pc2VzIiwicHVzaCIsImFkZFByb2R1Y3QiLCJ1cGRhdGVDYXJ0Q291bnRlciIsIkZvcm1EYXRhIiwidW5kZWZpbmVkIiwiZm9ybURhdGEiLCJhcHBlbmQiLCJ1dGlscyIsImFwaSIsImNhcnQiLCJpdGVtQWRkIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvck1lc3NhZ2UiLCJlcnJvciIsInRtcCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhbGVydCIsInRleHRDb250ZW50IiwiaW5uZXJUZXh0IiwicXR5cyIsImxpbmVJdGVtcyIsInBoeXNpY2FsSXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsInF1YW50aXR5IiwiJGVsIiwiZ2V0Q29udGVudCIsInRlbXBsYXRlIiwicmVzcCIsIiRjYXJ0UXVhbnRpdHkiLCIkY2FydENvdW50ZXIiLCJ0cmlnZ2VyIiwiYnVsa09yZGVyRmFjdG9yeSIsIiRzZWxlY3RvciIsImJ1bGtPcmRlciIsInNpbmdsZXRvbiIsImNvbXBhcmVMaXN0VG1wbCIsImNvbXBhcmVMaXN0SXRlbVRtcGwiLCJDb21wYXJlUHJvZHVjdHMiLCJhbmltYXRpb25UaW1lIiwicHJvZHVjdHMiLCJsb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlIiwiTXVzdGFjaGUiLCJyZW5kZXIiLCJjb21wYXJlIiwiY29tcGFyZUFkZG9uTGFuZ19jb21wYXJlIiwiY2xlYXJfYWxsIiwiY29tcGFyZUFkZG9uTGFuZ19jbGVhcl9hbGwiLCJyZW5kZXJJdGVtcyIsIm1hcCIsInByb2R1Y3QiLCJyZW5kZXJJdGVtIiwiJHByb2R1Y3RMaXN0IiwiJGNvbXBhcmVCdXR0b24iLCJ1cGRhdGVDb21wYXJlVXJsIiwibG9jYWxTdG9yYWdlIiwicyIsImdldEl0ZW0iLCJKU09OIiwiZSIsInNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlkIiwiaW1hZ2UiLCJhbHQiLCJyZW1vdmVQcm9kdWN0IiwidG9nZ2xlQ2xhc3MiLCJjbGVhckFsbFByb2R1Y3RzIiwiZmFkZUluIiwiZmFkZU91dCIsInJlbW92ZSIsInBhdGgiLCJ1cmxzIiwicXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcmVtb3ZlIiwiY29tcGFyZVByb2R1Y3RzIiwiQ2F0YWxvZ1BhZ2UiLCJvblNvcnRCeVN1Ym1pdCIsInF1ZXJ5UGFyYW1zIiwic2VyaWFsaXplQXJyYXkiLCJwYXJhbSIsIm5hbWUiLCJwYWdlIiwiaXNEZWZhdWx0UHJldmVudGVkIiwiUGFnZU1hbmFnZXIiLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsImRlZmF1bHRPcHRpb25zIiwiYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IiLCJibG9ja2VyU2VsZWN0b3IiLCJjbGVhckZhY2V0U2VsZWN0b3IiLCJjb21wb25lbnRTZWxlY3RvciIsImZhY2V0TmF2TGlzdFNlbGVjdG9yIiwicHJpY2VSYW5nZUVycm9yU2VsZWN0b3IiLCJwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvciIsInByaWNlUmFuZ2VGb3JtU2VsZWN0b3IiLCJwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvciIsInByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yIiwic2hvd01vcmVUb2dnbGVTZWxlY3RvciIsImZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcyIsIm1vZGFsIiwibW9kYWxGYWN0b3J5IiwibW9kYWxPcGVuIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImNvbGxhcHNpYmxlRmFjdG9yeSIsImluaXRQcmljZVZhbGlkYXRvciIsImluaXRQcmljZVNsaWRlciIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJpc0NvbGxhcHNlZCIsInRhcmdldElkIiwiY29sbGFwc2VBbGxGYWNldHMiLCJvblN0YXRlQ2hhbmdlIiwib25Qb3BTdGF0ZSIsIm9uVG9nZ2xlQ2xpY2siLCJvbkFjY29yZGlvblRvZ2dsZSIsIm9uQ2xlYXJGYWNldCIsIm9uRmFjZXRDbGljayIsIm9uUmFuZ2VTdWJtaXQiLCJmaWx0ZXJGYWNldEl0ZW1zIiwib25lIiwiaW5pdEZpbmRHYXRlIiwiZ2V0VXJsIiwiX2JzX3dpZHRoIiwid2lkdGgiLCJmaW5kR2F0ZSIsInNob3dNb3JlVXJsIiwibWluV2lkdGhQcm9taXNlIiwiZmluZE1pbldpZHRoVmFsdWVzIiwiX3VybCIsIiRtaW5XaWR0aCIsImdldFBhZ2UiLCJzaG93TW9yZSIsImxpc3RfYWxsIiwibWF4V2lkdGhQcm9taXNlIiwiZmluZE1heFdpZHRoVmFsdWVzIiwiJG1heFdpZHRoIiwiYWxsIiwibWluV2lkdGhBcnIiLCJtYXhXaWR0aEFyciIsImdvVG9VcmwiLCJyZWZyZXNoVmlldyIsImNvbnRlbnQiLCJyZXN0b3JlQ29sbGFwc2VkRmFjZXRzIiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlVmlld0NhbGxiYWNrIiwiRXJyb3IiLCJleHBhbmRGYWNldEl0ZW1zIiwiJG5hdkxpc3QiLCJoYXNNb3JlUmVzdWx0cyIsInRvZ2dsZUZhY2V0SXRlbXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiZmFjZXQiLCJmYWNldFVybCIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiJGl0ZW1zIiwidG9Mb3dlckNhc2UiLCJlbGVtZW50IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsImNsb3NlIiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJ2YWxpZGF0b3IiLCJub2QiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwiVmFsaWRhdG9ycyIsInNldE1pbk1heFByaWNlVmFsaWRhdGlvbiIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwicHJpY2VSYW5nZVZhbGlkYXRvciIsIiRuYXZMaXN0cyIsInNob3VsZENvbGxhcHNlIiwiJG1pbk1heEZhY2V0cyIsImhvb2tzIiwiJGxpbmsiLCJzdG9wUHJvcGFnYXRpb24iLCJ3aW5VcmwiLCIkdG9nZ2xlIiwiYXJlQWxsIiwiY29uc3RhbnRzIiwiVkFMSUQiLCJxdWVyeVBhcmFtc0FycmF5IiwiY3VycmVudFVybCIsInNlYXJjaFBhcmFtcyIsImxpbmtVcmwiLCJyZSIsInVwZGF0ZWRMaW5rVXJsIiwicmVwbGFjZVN0YXRlIiwiJGZhY2V0ZWRTZWFyY2giLCIkc2hvcEJ5UHJpY2UiLCJpbml0U2hvcEJ5UHJpY2VTbGlkZXIiLCJUUkFOU0xBVElPTlMiLCJpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5IiwiZGljdGlvbmFyeSIsIk9iamVjdCIsImtleXMiLCJjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ0cmFuc2xhdGlvbktleXMiLCJrZXkiLCJzcGxpdCIsInBvcCIsImFjYyIsInBhcnNlZCIsImhhc093blByb3BlcnR5IiwicmVtb3ZlUGFyYW1zIiwiZW5jb2RlUGFyYW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJjIiwiY2hhckNvZGVBdCIsInF1ZXJ5RGF0YSIsIm91dCIsImlzQXJyYXkiLCJuZHgiLCJzdWJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OzZDQUFNQSxpQkFBaUI7RUFDbkIsMkJBQVlDLE1BQU0sRUFBRTtJQUFBO0lBQ2hCLElBQUlBLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLG1DQUFtQyxDQUFDLEVBQUU7TUFDbEQ7SUFDSjtJQUVBRCxNQUFNLENBQUNDLElBQUksQ0FBQyxtQ0FBbUMsRUFBRSxJQUFJLENBQUM7SUFFdEQsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFaEQsSUFBSSxDQUFDSCxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDSSxPQUFPLEdBQUdDLENBQUMsQ0FBQyxlQUFlLEVBQUVMLE1BQU0sQ0FBQztJQUN6QyxJQUFJLENBQUNNLElBQUksR0FBR0QsQ0FBQyxDQUFDLGdEQUFnRCxFQUFFTCxNQUFNLENBQUM7SUFDdkUsSUFBSSxDQUFDTyxJQUFJLEdBQUdGLENBQUMsQ0FBQyxnREFBZ0QsRUFBRUwsTUFBTSxDQUFDO0lBQ3ZFLElBQUksQ0FBQ1EsT0FBTyxHQUFHSCxDQUFDLENBQUMsZUFBZSxFQUFFTCxNQUFNLENBQUM7SUFDekMs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Q0FBQztJQUFBLENBQUUsQ0FBQztFQUFBO0VBRWpJcUQsZ0JBQWdCLEVBQUUsMEJBQUMrUyxTQUFTLEVBQUs7SUFDN0IsSUFBSUMsR0FBRyxHQUFHLEVBQUU7SUFDWixJQUFJWixHQUFHO0lBQ1AsS0FBS0EsR0FBRyxJQUFJVyxTQUFTLEVBQUU7TUFDbkIsSUFBSUEsU0FBUyxDQUFDTixjQUFjLENBQUNMLEdBQUcsQ0FBQyxFQUFFO1FBQy9CLElBQUl0UixLQUFLLENBQUNtUyxPQUFPLENBQUNGLFNBQVMsQ0FBQ1gsR0FBRyxDQUFDLENBQUMsRUFBRTtVQUMvQixJQUFJYyxHQUFHO1VBRVAsS0FBS0EsR0FBRyxJQUFJSCxTQUFTLENBQUNYLEdBQUcsQ0FBQyxFQUFFO1lBQ3hCLElBQUlXLFNBQVMsQ0FBQ1gsR0FBRyxDQUFDLENBQUNLLGNBQWMsQ0FBQ1MsR0FBRyxDQUFDLEVBQUU7Y0FDcENGLEdBQUcsVUFBUXZULFFBQVEsQ0FBQ2tULFdBQVcsQ0FBQ1AsR0FBRyxDQUFDLFNBQUkzUyxRQUFRLENBQUNrVCxXQUFXLENBQUNJLFNBQVMsQ0FBQ1gsR0FBRyxDQUFDLENBQUNjLEdBQUcsQ0FBQyxDQUFHLENBQUMsQ0FBQztZQUN6RjtVQUNKO1FBQ0osQ0FBQyxNQUFNO1VBQ0hGLEdBQUcsVUFBUXZULFFBQVEsQ0FBQ2tULFdBQVcsQ0FBQ1AsR0FBRyxDQUFDLFNBQUkzUyxRQUFRLENBQUNrVCxXQUFXLENBQUNJLFNBQVMsQ0FBQ1gsR0FBRyxDQUFDLENBQUcsQ0FBQyxDQUFDO1FBQ3BGO01BQ0o7SUFDSjs7SUFFQSxPQUFPWSxHQUFHLENBQUNHLFNBQVMsQ0FBQyxDQUFDLENBQUM7RUFDM0I7QUFDSixDQUFDO0FBRWMxVCx1RUFBUSxFIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay45LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2hvcEJ5UHJpY2VTbGlkZXIge1xuICAgIGNvbnN0cnVjdG9yKCRzY29wZSkge1xuICAgICAgICBpZiAoJHNjb3BlLmRhdGEoJ2JlYXV0aWZ5U2hvcEJ5UHJpY2VTbGlkZXJJbnN0YW5jZScpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkc2NvcGUuZGF0YSgnYmVhdXRpZnlTaG9wQnlQcmljZVNsaWRlckluc3RhbmNlJywgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5vblByaWNlSW5wdXQgPSB0aGlzLm9uUHJpY2VJbnB1dC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xuICAgICAgICB0aGlzLiRzbGlkZXIgPSAkKCdbZGF0YS1zbGlkZXJdJywgJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kbWluID0gJCgnaW5wdXRbbmFtZT1cIm1pbl9wcmljZVwiXSwgaW5wdXRbZGF0YS1pbnB1dC1taW5dJywgJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kbWF4ID0gJCgnaW5wdXRbbmFtZT1cIm1heF9wcmljZVwiXSwgaW5wdXRbZGF0YS1pbnB1dC1tYXhdJywgJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kY2FuY2VsID0gJCgnW2RhdGEtY2FuY2VsXScsICRzY29wZSk7XG4gICAgICAgIHRoaXMuJGNsZWFyID0gJCgnW2RhdGEtY2xlYXJdJywgJHNjb3BlKTtcbiAgICAgICAgdGhpcy4kZm9ybSA9ICQoJ2Zvcm0nLCAkc2NvcGUpLm5vdCgnW2RhdGEtZmFjZXRlZC1zZWFyY2gtcmFuZ2VdJyk7IC8vIGV4Y2x1ZGUgZmFjZXRlZCBmb3JtXG4gICAgICAgIHRoaXMuJGFwcGx5ID0gJCgnW2RhdGEtYXBwbHldJywgJHNjb3BlKTtcbiAgICAgICAgdGhpcy5zaG9wQnlQcmljZSA9ICRzY29wZS5kYXRhKCdiZWF1dGlmeVNob3BCeVByaWNlJyk7XG5cbiAgICAgICAgY29uc3QgbWluID0gdGhpcy5zaG9wQnlQcmljZVswXS5sb3cudmFsdWU7XG4gICAgICAgIGNvbnN0IG1heCA9IHRoaXMuc2hvcEJ5UHJpY2VbdGhpcy5zaG9wQnlQcmljZS5sZW5ndGggLSAxXS5oaWdoLnZhbHVlO1xuXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtcbiAgICAgICAgICAgIHBhcmFtcy5nZXQoJ3ByaWNlX21pbicpIHx8IHBhcmFtcy5nZXQoJ21pbl9wcmljZScpIHx8IG1pbixcbiAgICAgICAgICAgIHBhcmFtcy5nZXQoJ3ByaWNlX21heCcpIHx8IHBhcmFtcy5nZXQoJ21heF9wcmljZScpIHx8IG1heCxcbiAgICAgICAgXTtcblxuICAgICAgICBpZiAocGFyYW1zLmhhcygncHJpY2VfbWluJykgfHwgcGFyYW1zLmhhcygnbWluX3ByaWNlJykgfHwgcGFyYW1zLmhhcygncHJpY2VfbWF4JykgfHwgcGFyYW1zLmhhcygnbWF4X3ByaWNlJykpIHtcbiAgICAgICAgICAgIHRoaXMuJGNsZWFyLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGNsZWFyLmhpZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3JpZ2luYWxWYWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiRzbGlkZXIuc2xpZGVyKHtcbiAgICAgICAgICAgIHJhbmdlOiB0cnVlLFxuICAgICAgICAgICAgbWluLFxuICAgICAgICAgICAgbWF4LFxuICAgICAgICAgICAgdmFsdWVzLFxuICAgICAgICAgICAgc2xpZGU6IChldmVudCwgdWkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRtaW4udmFsKHVpLnZhbHVlc1swXSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kbWF4LnZhbCh1aS52YWx1ZXNbMV0pO1xuICAgICAgICAgICAgICAgIGlmICh1aS52YWx1ZXNbMF0gIT0gdGhpcy5vcmlnaW5hbFZhbHVlc1swXSB8fCB1aS52YWx1ZXNbMV0gIT0gdGhpcy5vcmlnaW5hbFZhbHVlc1sxXSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRjYW5jZWwuc2hvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kbWluLmF0dHIoeyBtaW4sIG1heCwgdmFsdWU6IHBhcmFtcy5nZXQoJ3ByaWNlX21pbicpIHx8IHBhcmFtcy5nZXQoJ21pbl9wcmljZScpIHx8ICcnIH0pLm9uKCdpbnB1dCcsIHRoaXMub25QcmljZUlucHV0KTtcbiAgICAgICAgdGhpcy4kbWF4LmF0dHIoeyBtaW4sIG1heCwgdmFsdWU6IHBhcmFtcy5nZXQoJ3ByaWNlX21heCcpIHx8IHBhcmFtcy5nZXQoJ21heF9wcmljZScpIHx8ICcnIH0pLm9uKCdpbnB1dCcsIHRoaXMub25QcmljZUlucHV0KTtcblxuICAgICAgICB0aGlzLiRjYW5jZWwub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ3ZhbHVlcycsIHRoaXMub3JpZ2luYWxWYWx1ZXMpO1xuICAgICAgICAgICAgdGhpcy4kbWluLnZhbCh0aGlzLm9yaWdpbmFsVmFsdWVzWzBdKTtcbiAgICAgICAgICAgIHRoaXMuJG1heC52YWwodGhpcy5vcmlnaW5hbFZhbHVlc1sxXSk7XG4gICAgICAgICAgICB0aGlzLiRjYW5jZWwuaGlkZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRmb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hcHBseSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRhcHBseS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5hcHBseSgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhcHBseSgpIHtcbiAgICAgICAgY29uc3QgW3NsaWRlTWluLCBzbGlkZU1heF0gPSB0aGlzLiRzbGlkZXIuc2xpZGVyKCd2YWx1ZXMnKTtcbiAgICAgICAgY29uc3QgbWluID0gTnVtYmVyKHRoaXMuJG1pbi52YWwoKSkgfHwgc2xpZGVNaW47XG4gICAgICAgIGNvbnN0IG1heCA9IE51bWJlcih0aGlzLiRtYXgudmFsKCkpIHx8IHNsaWRlTWF4O1xuICAgICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgICBwYXJhbXMuc2V0KCdwcmljZV9taW4nLCBtaW4pO1xuICAgICAgICBwYXJhbXMuc2V0KCdwcmljZV9tYXgnLCBtYXgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBgJHt3aW5kb3cubG9jYXRpb24ucGF0aG5hbWV9PyR7cGFyYW1zLnRvU3RyaW5nKCl9YDtcbiAgICB9XG5cbiAgICBvblByaWNlSW5wdXQoZXZlbnQpIHtcbiAgICAgICAgbGV0IHZhbCA9IE51bWJlcihldmVudC50YXJnZXQudmFsdWUpIHx8IDA7XG4gICAgICAgIGNvbnN0IG1pbiA9IE51bWJlcih0aGlzLiRtaW4ucHJvcCgnbWluJykpIHx8IDA7XG4gICAgICAgIGNvbnN0IG1heCA9IE51bWJlcih0aGlzLiRtaW4ucHJvcCgnbWF4JykpIHx8IDA7XG5cbiAgICAgICAgY29uc3QgY3VyTWluID0gTnVtYmVyKHRoaXMuJG1pbi52YWwoKSkgfHwgdGhpcy5vcmlnaW5hbFZhbHVlc1swXTtcbiAgICAgICAgY29uc3QgY3VyTWF4ID0gTnVtYmVyKHRoaXMuJG1heC52YWwoKSkgfHwgdGhpcy5vcmlnaW5hbFZhbHVlc1sxXTtcblxuICAgICAgICBpZiAodmFsIDwgbWluKSB7XG4gICAgICAgICAgICB2YWwgPSBtaW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA+IG1heCkge1xuICAgICAgICAgICAgdmFsID0gbWF4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJG1pbi5pcyhldmVudC50YXJnZXQpICYmIGN1ck1heCA+IDAgJiYgdmFsID4gY3VyTWF4KSB7XG4gICAgICAgICAgICB2YWwgPSBjdXJNYXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kbWF4LmlzKGV2ZW50LnRhcmdldCkgJiYgY3VyTWluID4gMCAmJiB2YWwgPCBjdXJNaW4pIHtcbiAgICAgICAgICAgIHZhbCA9IGN1ck1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IHZhbDtcblxuICAgICAgICBjb25zdCBuZXdNaW4gPSBOdW1iZXIodGhpcy4kbWluLnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzBdO1xuICAgICAgICBjb25zdCBuZXdNYXggPSBOdW1iZXIodGhpcy4kbWF4LnZhbCgpKSB8fCB0aGlzLm9yaWdpbmFsVmFsdWVzWzFdO1xuXG4gICAgICAgIHRoaXMuJHNsaWRlci5zbGlkZXIoJ3ZhbHVlcycsIFtuZXdNaW4sIG5ld01heF0pO1xuXG4gICAgICAgIGlmIChuZXdNaW4gIT0gdGhpcy5vcmlnaW5hbFZhbHVlc1swXSB8fCBuZXdNYXggIT0gdGhpcy5vcmlnaW5hbFZhbHVlc1sxXSkge1xuICAgICAgICAgICAgdGhpcy4kY2FuY2VsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGNhbmNlbC5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzZWxlY3RvciA9ICdbZGF0YS1iZWF1dGlmeS1zaG9wLWJ5LXByaWNlXScpIHtcbiAgICAkKHNlbGVjdG9yKS5lYWNoKChpLCBlbCkgPT4gbmV3IFNob3BCeVByaWNlU2xpZGVyKCQoZWwpKSk7XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuXG5sZXQgaW5zdGFudGxvYWRCaW5kZWQgPSBmYWxzZTtcbmxldCBhY3Rpb25CYXI7XG5cbmZ1bmN0aW9uIHJlbW92ZU1vZGVDbGFzcyhpbmRleCwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccyltb2RlLVxcUysvZykgfHwgW10pLmpvaW4oJyAnKTtcbn1cblxuY2xhc3MgQWN0aW9uQmFyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjdGlvbmJhciBjb25zdHJ1Y3RvcicpO1xuICAgICAgICB0aGlzLm9uTW9kZUNoYW5nZSA9IHRoaXMub25Nb2RlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIHRoaXMuJHNvcnRCeSA9ICQoJ1tkYXRhLXNvcnQtYnldJyk7XG5cbiAgICAgICAgaWYgKCF0aGlzLiRzb3J0QnkubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCAkbGltaXQgPSB0aGlzLiRzb3J0QnkuZmluZCgnW25hbWU9bGltaXRdJyk7XG4gICAgICAgIGNvbnN0ICRtb2RlID0gdGhpcy4kc29ydEJ5LmZpbmQoJ2lucHV0W25hbWU9bW9kZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcblxuICAgICAgICBpZiAodXJsLnF1ZXJ5LmxpbWl0KSB7XG4gICAgICAgICAgICAkbGltaXQudmFsKHVybC5xdWVyeS5saW1pdCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXJsLnF1ZXJ5Lm1vZGUpIHtcbiAgICAgICAgICAgICRtb2RlLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGBbdmFsdWU9JHt1cmwucXVlcnkubW9kZX1dYCkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RvcCBhY3Rpb24gYmFyIGlmIHRoZSBwYWdlIGlzIGNhdGVnb3J5IGJ1bGsgb3JkZXIgY3VzdG9tIHRlbXBsYXRlXG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICBpZiAoJGJvZHkuaGFzQ2xhc3MoJ3N1cGVybWFya2V0LXBhZ2UtLXBhZ2VzLWN1c3RvbS1jYXRlZ29yeS1idWxrLW9yZGVyJykgfHwgJGJvZHkuaGFzQ2xhc3MoJ3N1cGVybWFya2V0LXBhZ2UtLXBhZ2VzLWN1c3RvbS1icmFuZC1idWxrLW9yZGVyJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJylcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhyZW1vdmVNb2RlQ2xhc3MpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoYG1vZGUtJHskbW9kZS5maWx0ZXIoJzpjaGVja2VkJykudmFsKCl9YCk7XG5cbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcmVpbml0KG5ld09wdGlvbnMpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjdGlvbmJhciByZWluaXQnKTtcbiAgICAgICAgaWYgKG5ld09wdGlvbnMpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IG5ld09wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FjdGlvbmJhciBkZXN0cm95ZWQnKTtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzb3J0QnkuZmluZCgnaW5wdXRbbmFtZT1tb2RlXScpLm9uKCdjaGFuZ2UnLCB0aGlzLm9uTW9kZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRzb3J0QnkuZmluZCgnaW5wdXRbbmFtZT1tb2RlXScpLm9mZignY2hhbmdlJywgdGhpcy5vbk1vZGVDaGFuZ2UpO1xuICAgIH1cblxuICAgIG9uTW9kZUNoYW5nZShldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IG1vZGUgPSAkKGV2ZW50LnRhcmdldCkudmFsKCk7XG5cbiAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKHJlbW92ZU1vZGVDbGFzcylcbiAgICAgICAgICAgIC5hZGRDbGFzcyhgbW9kZS0ke21vZGV9YCk7XG5cbiAgICAgICAgJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXIgLnBhZ2luYXRpb24tbGluaycpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYSA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVwbGFjZVBhcmFtcygkYS5hdHRyKCdocmVmJyksIHsgbW9kZSB9KTtcbiAgICAgICAgICAgICRhLmF0dHIoJ2hyZWYnLCB1cmwpO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICB1cmwucXVlcnkubW9kZSA9IG1vZGU7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KSk7XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGwgdGhpcyBmdW5jdGlvbiB3aGVuOlxuICogLSBQYWdlIGlzIGxvYWRlZFxuICogLSBBamF4IHBhZ2UgcmV0dXJuZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWN0aW9uQmFyRmFjdG9yeShvcHRpb25zKSB7XG4gICAgaWYgKGFjdGlvbkJhcikge1xuICAgICAgICBhY3Rpb25CYXIucmVpbml0KG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFjdGlvbkJhciA9IG5ldyBBY3Rpb25CYXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgLy8gRGVzdHJveSBhY3Rpb25CYXIgd2hlbiBsb2FkaW5nIG5ldyBwYWdlXG4gICAgaWYgKCFpbnN0YW50bG9hZEJpbmRlZCkge1xuICAgICAgICAkKCdib2R5Jykub24oJ2JlZm9yZWxvYWQuaW5zdGFudGxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uQmFyKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uQmFyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBhY3Rpb25CYXIgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaW5zdGFudGxvYWRCaW5kZWQgPSB0cnVlO1xuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuLy9cbi8vIGh0dHBzOi8vamF2YXNjcmlwdC5pbmZvL3Rhc2svZGVsYXktcHJvbWlzZVxuLy9cbmZ1bmN0aW9uIGRlbGF5KG1zKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuXG4vL1xuLy8gaHR0cHM6Ly9oYWNrZXJub29uLmNvbS9mdW5jdGlvbmFsLWphdmFzY3JpcHQtcmVzb2x2aW5nLXByb21pc2VzLXNlcXVlbnRpYWxseS03YWFjMThjNDQzMWVcbi8vXG5mdW5jdGlvbiBwcm9taXNlU2VyaWFsKGZ1bmNzKSB7XG4gICAgcmV0dXJuIGZ1bmNzLnJlZHVjZShcbiAgICAgICAgKHByb21pc2UsIGZ1bmMpID0+IHByb21pc2UudGhlbihyZXN1bHQgPT4gZnVuYygpLnRoZW4oQXJyYXkucHJvdG90eXBlLmNvbmNhdC5iaW5kKHJlc3VsdCkpKSxcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKFtdKVxuICAgICk7XG59XG5cbmV4cG9ydCBjbGFzcyBCdWxrT3JkZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQsICRzY29wZSkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICB0aGlzLiRzY29wZSA9ICRzY29wZTtcbiAgICAgICAgdGhpcy5pdGVtQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnByb2dyZXNzQ3VycmVudCA9IDA7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NUb3RhbCA9IDA7XG5cbiAgICAgICAgdGhpcy5vblF1YW50aXR5Q2hhbmdlID0gdGhpcy5vblF1YW50aXR5Q2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25RdWFudGl0eUJ1dHRvbkNsaWNrID0gdGhpcy5vblF1YW50aXR5QnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblByb2R1Y3RBZGRlZCA9IHRoaXMub25Qcm9kdWN0QWRkZWQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFkZEFsbENsaWNrID0gdGhpcy5vbkFkZEFsbENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25DYXJ0UXR5Q2hhbmdlID0gdGhpcy5vbkNhcnRRdHlDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vblByb2dyZXNzUG9wdXBDbG9zZUNsaWNrID0gdGhpcy5vblByb2dyZXNzUG9wdXBDbG9zZUNsaWNrLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5yZWluaXQoKTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldFxuICAgICAgICAkKCdib2R5Jykub24oJ2JlZm9yZWxvYWQuaW5zdGFudGxvYWQnLCAoKSA9PiB0aGlzLnVuYmluZEV2ZW50cygpKTtcbiAgICB9XG5cbiAgICByZWluaXQoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXAgPSAkKCcuYnVsa09yZGVyLXByb2dyZXNzTW9kYWwnLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzQmFyID0gJCgnLnByb2dyZXNzQmFyJywgdGhpcy4kcHJvZ3Jlc3NQb3B1cCk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDdXJyZW50ID0gJCgnLmJ1bGtPcmRlci1wcm9ncmVzc01vZGFsLWN1cnJlbnQnLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBBY3Rpb25zID0gJCgnLmJ1bGtPcmRlci1wcm9ncmVzc01vZGFsLWFjdGlvbnMnLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDbG9zZSA9ICQoJ1tkYXRhLWNsb3NlXScsIHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmNhcnRJZCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVRdHlJbkNhcnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjaGFuZ2UnLCAnW2RhdGEtYnVsa29yZGVyLXF0eS1pZF0nLCB0aGlzLm9uUXVhbnRpdHlDaGFuZ2UpO1xuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtcXVhbnRpdHktY2hhbmdlXSBidXR0b24nLCB0aGlzLm9uUXVhbnRpdHlCdXR0b25DbGljayk7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9uKCdjbGljaycsICdbZGF0YS1idWxrb3JkZXItYWRkLWFsbF0nLCB0aGlzLm9uQWRkQWxsQ2xpY2spO1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdhamF4LWFkZHRvY2FydC1pdGVtLWFkZGVkJywgdGhpcy5vblByb2R1Y3RBZGRlZCk7XG4gICAgICAgIHRoaXMuJGJvZHkub24oJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgdGhpcy5vbkNhcnRRdHlDaGFuZ2UpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ2xvc2Uub24oJ2NsaWNrJywgdGhpcy5vblByb2dyZXNzUG9wdXBDbG9zZUNsaWNrKTtcbiAgICB9XG5cbiAgICB1bmJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLm9mZignY2hhbmdlJywgJ1tkYXRhLWJ1bGtvcmRlci1xdHktaWRdJywgdGhpcy5vblF1YW50aXR5Q2hhbmdlKTtcbiAgICAgICAgdGhpcy4kc2NvcGUub2ZmKCdjbGljaycsICdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdIGJ1dHRvbicsIHRoaXMub25RdWFudGl0eUJ1dHRvbkNsaWNrKTtcbiAgICAgICAgdGhpcy4kc2NvcGUub2ZmKCdjbGljaycsICdbZGF0YS1idWxrb3JkZXItYWRkLWFsbF0nLCB0aGlzLm9uQWRkQWxsQ2xpY2spO1xuICAgICAgICB0aGlzLiRib2R5Lm9mZignYWpheC1hZGR0b2NhcnQtaXRlbS1hZGRlZCcsIHRoaXMub25Qcm9kdWN0QWRkZWQpO1xuICAgICAgICB0aGlzLiRib2R5Lm9mZignY2FydC1xdWFudGl0eS11cGRhdGUnLCB0aGlzLm9uQ2FydFF0eUNoYW5nZSk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDbG9zZS5vZmYoJ2NsaWNrJywgdGhpcy5vblByb2dyZXNzUG9wdXBDbG9zZUNsaWNrKTtcbiAgICB9XG5cbiAgICBvblByb2dyZXNzUG9wdXBDbG9zZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuaGlkZVByb2dyZXNzUG9wdXAoKTtcbiAgICB9XG5cbiAgICBvbkNhcnRRdHlDaGFuZ2UoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlUXR5SW5DYXJ0KCk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2dyZXNzUG9wdXAoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBBY3Rpb25zLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXAuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICB9XG5cbiAgICBoaWRlUHJvZ3Jlc3NQb3B1cCgpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NQb3B1cEN1cnJlbnQuY3NzKCd3aWR0aCcsIDApO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQWN0aW9ucy5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJvZ3Jlc3NQb3B1cCgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NUb3RhbCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBDdXJyZW50LmNzcygnd2lkdGgnLCBgJHt0aGlzLnByb2dyZXNzQ3VycmVudCAvIHRoaXMucHJvZ3Jlc3NUb3RhbCAqIDEwMH0lYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRwcm9ncmVzc1BvcHVwQ3VycmVudC5jc3MoJ3dpZHRoJywgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzaG93UHJvZ3Jlc3NQb3B1cEFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuJHByb2dyZXNzUG9wdXBBY3Rpb25zLnJlbW92ZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgfVxuXG4gICAgc2hvd1Byb2dyZXNzQmFyKCkge1xuICAgICAgICB0aGlzLiRwcm9ncmVzc0Jhci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgIH1cblxuICAgIGhpZGVQcm9ncmVzc0JhcigpIHtcbiAgICAgICAgdGhpcy4kcHJvZ3Jlc3NCYXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICB9XG5cbiAgICBvbkFkZEFsbENsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXRlbUNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5idWxrT3JkZXJFbnRlclF0eSB8fCAnUGxlYXNlIGVudGVyIHByb2R1Y3QgcXVhbnRpdHknLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWRkQWxsUHJvZHVjdHMoKTtcbiAgICB9XG5cbiAgICBvblByb2R1Y3RBZGRlZChldmVudCwgcHJvZHVjdElkKSB7XG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoYFtkYXRhLWJ1bGtvcmRlci1xdHktaWQ9JyR7cHJvZHVjdElkfSddYCkudmFsKDApO1xuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpO1xuICAgIH1cblxuICAgIG9uUXVhbnRpdHlCdXR0b25DbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGlucHV0ID0gJHRhcmdldC5jbG9zZXN0KCdbZGF0YS1xdWFudGl0eS1jaGFuZ2VdJykuZmluZCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgcXVhbnRpdHlNaW4gPSBwYXJzZUludCgkaW5wdXQuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xuICAgICAgICBjb25zdCBxdWFudGl0eU1heCA9IHBhcnNlSW50KCRpbnB1dC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG5cbiAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuXG4gICAgICAgIC8vIElmIGFjdGlvbiBpcyBpbmNyZW1lbnRpbmdcbiAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnKSB7XG4gICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgaWYgKHF1YW50aXR5TWF4ID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIHF1YW50aXR5IGRvZXMgbm90IGV4Y2VlZCBtYXhcbiAgICAgICAgICAgICAgICBpZiAoKHF0eSArIDEpIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXR5Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMCkge1xuICAgICAgICAgICAgLy8gSWYgcXVhbnRpdHkgbWluIG9wdGlvbiBpcyBzZXRcbiAgICAgICAgICAgIGlmIChxdWFudGl0eU1pbiA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBmYWxsIGJlbG93IG1pblxuICAgICAgICAgICAgICAgIGlmICgocXR5IC0gMSkgPj0gcXVhbnRpdHlNaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5LS07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcXR5ID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJGlucHV0LnZhbChxdHkpO1xuXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKCk7XG4gICAgfVxuXG4gICAgb25RdWFudGl0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcbiAgICB9XG5cbiAgICBjYWxjdWxhdGUoKSB7XG4gICAgICAgIGxldCBmb3JtYXQgPSAnJztcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJGlucHV0LmRhdGEoJ2J1bGtvcmRlclF0eUlkJyk7XG4gICAgICAgICAgICBjb25zdCAkcHJpY2UgPSB0aGlzLiRzY29wZS5maW5kKGBbZGF0YS1idWxrb3JkZXItcHJpY2UtaWQ9JyR7cHJvZHVjdElkfSddYCk7XG4gICAgICAgICAgICBjb25zdCBwcmljZVZhbCA9IHBhcnNlRmxvYXQoJHByaWNlLmRhdGEoJ2J1bGtvcmRlclByaWNlVmFsdWUnKSk7XG4gICAgICAgICAgICBjb25zdCBwcmljZUZtdCA9IGAkeyRwcmljZS5kYXRhKCdidWxrb3JkZXJQcmljZUZvcm1hdHRlZCcpfWA7XG4gICAgICAgICAgICBjb25zdCBzdWJ0b3RhbCA9IE1hdGgucm91bmQocHJpY2VWYWwgKiBxdHkgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgY29uc3QgJHN1YnRvdGFsID0gdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtYnVsa29yZGVyLXN1YnRvdGFsLWlkPScke3Byb2R1Y3RJZH0nXWApO1xuICAgICAgICAgICAgJHN1YnRvdGFsLmh0bWwocHJpY2VGbXQucmVwbGFjZSgvWzAtOS4sXSsvLCBzdWJ0b3RhbCkpO1xuXG4gICAgICAgICAgICBmb3JtYXQgPSBwcmljZUZtdDtcbiAgICAgICAgICAgIHRvdGFsICs9IHN1YnRvdGFsO1xuICAgICAgICAgICAgY291bnQgKz0gcXR5O1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1Db3VudCA9IGNvdW50O1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWJ1bGtvcmRlci10b3RhbC1jb3VudF0nKS5odG1sKGNvdW50KTtcbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtYnVsa29yZGVyLXRvdGFsLWFtb3VudF0nKS5odG1sKGZvcm1hdC5yZXBsYWNlKC9bMC05LixdKy8sIE1hdGgucm91bmQodG90YWwgKiAxMDApIC8gMTAwKSk7XG4gICAgfVxuXG4gICAgYWRkQWxsUHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHByb21pc2VzID0gW107XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NDdXJyZW50ID0gMDtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1idWxrb3JkZXItcXR5LWlkXScpLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXQgPSAkKGVsKTtcbiAgICAgICAgICAgIGNvbnN0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJGlucHV0LmRhdGEoJ2J1bGtvcmRlclF0eUlkJyk7XG5cbiAgICAgICAgICAgIGlmIChxdHkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NDdXJyZW50Kys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZ3Jlc3NQb3B1cCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkUHJvZHVjdChwcm9kdWN0SWQsIHF0eSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG5cbiAgICAgICAgICAgICAgICAgICAgJGlucHV0LnZhbCgwKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3YWl0IDFzIGJlZm9yZSBhZGRpbmcgdG8gY2FydCBhIG5ldyBpdGVtIGluIG9yZGVyIHRvIGF2b2lkIHJlcXVlc3QgZmFpbGVkLlxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBkZWxheSgxMDAwKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5wcm9ncmVzc1RvdGFsID0gcHJvbWlzZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1BvcHVwKCk7XG4gICAgICAgIHRoaXMuc2hvd1Byb2dyZXNzQmFyKCk7XG5cbiAgICAgICAgcHJvbWlzZVNlcmlhbChwcm9taXNlcykudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQcm9ncmVzc1BvcHVwQWN0aW9ucygpO1xuICAgICAgICAgICAgdGhpcy5oaWRlUHJvZ3Jlc3NCYXIoKTtcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlUXR5SW5DYXJ0KCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb3VudGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFzeW5jIGFkZFByb2R1Y3QocHJvZHVjdElkLCBxdHkpIHtcbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3Byb2R1Y3RfaWQnLCBwcm9kdWN0SWQpO1xuICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3F0eVtdJywgcXR5KTtcblxuICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQoZm9ybURhdGEsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN0cmlwIHRoZSBIVE1MIGZyb20gdGhlIGVycm9yIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICAgICAgYWxlcnQodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwcm9taXNlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgIH1cblxuICAgIHVwZGF0ZVF0eUluQ2FydCgpIHtcbiAgICAgICAgJC5nZXQoJy9hcGkvc3RvcmVmcm9udC9jYXJ0JywgZGF0YSA9PiB7XG4gICAgICAgICAgICBpZiAoIWRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBxdHlzID0ge307XG5cbiAgICAgICAgICAgIGRhdGFbMF0ubGluZUl0ZW1zLnBoeXNpY2FsSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHF0eXNbaXRlbS5wcm9kdWN0SWRdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBxdHlzW2l0ZW0ucHJvZHVjdElkXSArPSBpdGVtLnF1YW50aXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eXNbaXRlbS5wcm9kdWN0SWRdID0gaXRlbS5xdWFudGl0eTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnW2RhdGEtYnVsa29yZGVyLWNhcnQtcXR5LWlkXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9IHBhcnNlSW50KCRlbC5kYXRhKCdidWxrb3JkZXJDYXJ0UXR5SWQnKSwgMTApO1xuICAgICAgICAgICAgICAgIGlmIChxdHlzW3Byb2R1Y3RJZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmh0bWwocXR5c1twcm9kdWN0SWRdKTtcbiAgICAgICAgICAgICAgICAgICAgJGVsLmNsb3Nlc3QoJy5fcXR5SW5DYXJ0V3JhcHBlcicpLnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkZWwuaHRtbCgnMCcpO1xuICAgICAgICAgICAgICAgICAgICAkZWwuY2xvc2VzdCgnLl9xdHlJbkNhcnRXcmFwcGVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB1cGRhdGVDYXJ0Q291bnRlcigpIHtcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudCh7IHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyB9LCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBVcGRhdGUgY2FydCBjb3VudGVyXG4gICAgICAgICAgICBjb25zdCAkYm9keSA9ICQoJ2JvZHknKTtcbiAgICAgICAgICAgIGNvbnN0ICRjYXJ0UXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHJlc3ApO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydC1xdWFudGl0eScpIHx8IDA7XG5cbiAgICAgICAgICAgICRjYXJ0Q291bnRlci5hZGRDbGFzcygnY2FydC1jb3VudC0tcG9zaXRpdmUnKTtcbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1bGtPcmRlckZhY3RvcnkoY29udGV4dCA9IG51bGwsIHNlbGVjdG9yID0gJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJykge1xuICAgIGNvbnN0ICRzZWxlY3RvciA9ICQoc2VsZWN0b3IpO1xuICAgIGxldCBidWxrT3JkZXIgPSAkc2VsZWN0b3IuZGF0YSgnYnVsa09yZGVySW5zdGFuY2UnKTtcblxuICAgIGlmICghKGJ1bGtPcmRlciBpbnN0YW5jZW9mIEJ1bGtPcmRlcikpIHtcbiAgICAgICAgYnVsa09yZGVyID0gbmV3IEJ1bGtPcmRlcihjb250ZXh0LCAkc2VsZWN0b3IpO1xuICAgICAgICAkc2VsZWN0b3IuZGF0YSgnYnVsa09yZGVySW5zdGFuY2UnLCBidWxrT3JkZXIpO1xuICAgIH1cblxuICAgIHJldHVybiBidWxrT3JkZXI7XG59XG4iLCJpbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xubGV0IHNpbmdsZXRvbjtcblxuY29uc3QgY29tcGFyZUxpc3RUbXBsID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1wYW5lbC13cmFwcGVyIGlzLWVtcHR5XCIgaWQ9XCJzdXBlcm1hcmtldENvbXBhcmVMaXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3RcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1saXN0Pnt7e3JlbmRlckl0ZW1zfX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInt7Y29tcGFyZV91cmx9fVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsIGJ1dHRvbi0tY29tcGFyZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWJ1dHRvbj57e2NvbXBhcmV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wbGFpbiBidXR0b24tLXNtYWxsIGJ1dHRvbi0tY2xlYXJBbGxcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1jbGVhcmFsbD57e2NsZWFyX2FsbH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tY2xvc2VcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC10b2dnbGU+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tb3BlblwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZT48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tdXBcIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5PcGVuPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbmNvbnN0IGNvbXBhcmVMaXN0SXRlbVRtcGwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWl0ZW1cIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1pdGVtPVwie3tpZH19XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1pbWdcIiBzcmM9XCJ7e2ltYWdlfX1cIiBhbHQ9XCJ7e2FsdH19XCIgdGl0bGU9XCJ7e2FsdH19XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtcXVpY2t2aWV3IHF1aWNrdmlld1wiIGRhdGEtcHJvZHVjdC1pZD1cInt7aWR9fVwiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3F1aWNrX3ZpZXd9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1yZW1vdmVcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1yZW1vdmU9XCJ7e2lkfX1cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+e3tyZW1vdmV9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbmA7XG5cbmNsYXNzIENvbXBhcmVQcm9kdWN0cyB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAzMDA7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMubG9hZFByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJChNdXN0YWNoZS5yZW5kZXIoY29tcGFyZUxpc3RUbXBsLCB7XG4gICAgICAgICAgICBjb21wYXJlOiBjb250ZXh0LmNvbXBhcmVBZGRvbkxhbmdfY29tcGFyZSxcbiAgICAgICAgICAgIGNsZWFyX2FsbDogY29udGV4dC5jb21wYXJlQWRkb25MYW5nX2NsZWFyX2FsbCxcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zOiAoKSA9PiB0aGlzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHRoaXMucmVuZGVySXRlbShwcm9kdWN0KSkuam9pbignJyksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1saXN0XScpO1xuICAgICAgICB0aGlzLiRjb21wYXJlQnV0dG9uID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LWJ1dHRvbl0nKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYXJlUHJvZHVjdHMnKTtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uocyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbXBhcmVQcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHMpKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoJGVsLmRhdGEoJ2NvbXBhcmVJZCcpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAkZWwuZGF0YSgnY29tcGFyZUltYWdlJyksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogJGVsLmRhdGEoJ2NvbXBhcmVUaXRsZScpLFxuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKCRlbC5kYXRhKCdjb21wYXJlUHJvZHVjdFJlbW92ZScpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUHJvZHVjdChpZCk7XG5cbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUudG9nZ2xlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtY2xlYXJhbGxdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbGxQcm9kdWN0cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRQcm9kdWN0KHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICB0aGlzLnNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9ICQodGhpcy5yZW5kZXJJdGVtKHByb2R1Y3QpKS5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3QuYXBwZW5kKCRlbCk7XG5cbiAgICAgICAgJGVsLnNob3codGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtZW1wdHknKS5mYWRlSW4odGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvZHVjdChpZCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wYXJlVXJsKCk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtY29tcGFyZS1wcm9kdWN0LWl0ZW09JHtpZH1dYCk7XG4gICAgICAgICRlbC5mYWRlT3V0KHRoaXMuYW5pbWF0aW9uVGltZSwgKCkgPT4ge1xuICAgICAgICAgICAgJGVsLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaXMtZW1wdHknKS5mYWRlT3V0KHRoaXMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyQWxsUHJvZHVjdHMoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbV0nKTtcbiAgICAgICAgJGVsLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaXMtZW1wdHknKS5mYWRlT3V0KHRoaXMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbXBhcmVVcmwoKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuaWQpLmpvaW4oJy8nKTtcbiAgICAgICAgdGhpcy4kY29tcGFyZUJ1dHRvbi5hdHRyKCdocmVmJywgYCR7dGhpcy5jb250ZXh0LnVybHMuY29tcGFyZX0vJHtwYXRofWApO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gTXVzdGFjaGUucmVuZGVyKGNvbXBhcmVMaXN0SXRlbVRtcGwsIHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICBxdWlja192aWV3OiB0aGlzLmNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19xdWlja192aWV3LFxuICAgICAgICAgICAgcmVtb3ZlOiB0aGlzLmNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19yZW1vdmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZVByb2R1Y3RzKGNvbnRleHQpIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgICBzaW5nbGV0b24gPSBuZXcgQ29tcGFyZVByb2R1Y3RzKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgLyogTU9EIGJ5IHBhcGF0aGVtZXMgLSBzdXBlcm1hcmtldFxuICAgICAgICAtLS1cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICAtLS1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgdXJsLnF1ZXJ5W3BhcmFtLm5hbWVdID0gcGFyYW0udmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvKiBFTkQgTU9EICovXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlOyAvKiBlc2xpbnQtZGlzYWJsZS1saW5lICovIC8vIHBhcGF0aGVtZXMtc3VwZXJtYXJrZXQ6IHF1aWNrZml4IHN0b3Agc3RlbmNpbC11dGlscyBTb3J0QnlIb29rIHN1Ym1pdHRpbmcgdGhlIGZvcm0gd2hlbiBzZWxlY3QgY2hhbmdlZFxuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgaG9va3MsIGFwaSB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IG1vZGFsRmFjdG9yeSBmcm9tICcuLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbGxhcHNpYmxlJztcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICcuL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IG5vZCBmcm9tICcuL25vZCc7XG5pbXBvcnQgYWN0aW9uQmFyRmFjdG9yeSBmcm9tICcuLi8uLi9wYXBhdGhlbWVzL2FjdGlvbi1iYXInOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbmltcG9ydCBpbml0U2hvcEJ5UHJpY2VTbGlkZXIgZnJvbSAnLi4vLi4vYmVhdXRpZnkvc2hvcC1ieS1wcmljZS1zbGlkZXInO1xuXG4vKipcbiAqIEZhY2V0ZWQgc2VhcmNoIHZpZXcgY29tcG9uZW50XG4gKi9cbmNsYXNzIEZhY2V0ZWRTZWFyY2gge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXF1ZXN0T3B0aW9ucyAtIE9iamVjdCB3aXRoIG9wdGlvbnMgZm9yIHRoZSBhamF4IHJlcXVlc3RzXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgLSBGdW5jdGlvbiB0byBleGVjdXRlIGFmdGVyIGZldGNoaW5nIHRlbXBsYXRlc1xuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqXG4gICAgICogbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAqICAgICAgdGVtcGxhdGVzOiB7XG4gICAgICogICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdjYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAqICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJ1xuICAgICAqICAgICB9XG4gICAgICogfTtcbiAgICAgKlxuICAgICAqIGxldCB0ZW1wbGF0ZXNEaWRMb2FkID0gZnVuY3Rpb24oY29udGVudCkge1xuICAgICAqICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgKiAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCB0ZW1wbGF0ZXNEaWRMb2FkKTtcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihyZXF1ZXN0T3B0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICAgICAgICAgIGJsb2NrZXJTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5ibG9ja2VyLCAjYmVhdXRpZnlfX2ZpbmRHYXRlLXNpZGViYXIgLmJsb2NrZXInLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IGVkaXRlZFxuICAgICAgICAgICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICAgICAgICAgIGNvbXBvbmVudFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2gtbmF2TGlzdCcsXG4gICAgICAgICAgICBmYWNldE5hdkxpc3RTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5uYXZMaXN0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgICAgICAgICBwcmljZVJhbmdlRmllbGRzZXRTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIC5mb3JtLWZpZWxkc2V0JyxcbiAgICAgICAgICAgIHByaWNlUmFuZ2VGb3JtU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybScsXG4gICAgICAgICAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1heF9wcmljZV0nLFxuICAgICAgICAgICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSBbbmFtZT1taW5fcHJpY2VdJyxcbiAgICAgICAgICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuX2FjY29yZGlvbi1jb250ZW50IC50b2dnbGVMaW5rJywgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBlZGl0ZWRcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICAgICAgICAgIG1vZGFsOiBtb2RhbEZhY3RvcnkoJyNtb2RhbCcpWzBdLFxuICAgICAgICAgICAgbW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBQcml2YXRlIHByb3BlcnRpZXNcbiAgICAgICAgdGhpcy5yZXF1ZXN0T3B0aW9ucyA9IHJlcXVlc3RPcHRpb25zO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IF8uZXh0ZW5kKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gW107XG4gICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IFtdO1xuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB0aGlzLmluaXRQcmljZVNsaWRlcigpO1xuXG4gICAgICAgIC8vIFNob3cgbGltaXRlZCBpdGVtcyBieSBkZWZhdWx0XG4gICAgICAgICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKS5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJChuYXZMaXN0KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE1hcmsgaW5pdGlhbGx5IGNvbGxhcHNlZCBhY2NvcmRpb25zXG4gICAgICAgICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKS5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMucHVzaChjb2xsYXBzaWJsZS50YXJnZXRJZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENvbGxhcHNlIGFsbCBmYWNldHMgaWYgaW5pdGlhbGx5IGhpZGRlblxuICAgICAgICAvLyBOT1RFOiBOZWVkIHRvIGV4ZWN1dGUgYWZ0ZXIgQ29sbGFwc2libGUgZ2V0cyBib290c3RyYXBwZWRcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMuY29tcG9uZW50U2VsZWN0b3IpLmlzKCc6aGlkZGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsRmFjZXRzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9ic2VydmUgdXNlciBldmVudHNcbiAgICAgICAgdGhpcy5vblN0YXRlQ2hhbmdlID0gdGhpcy5vblN0YXRlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Qb3BTdGF0ZSA9IHRoaXMub25Qb3BTdGF0ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldFxuICAgICAgICAkKCdib2R5Jykub25lKCdiZWZvcmVsb2FkLmluc3RhbnRsb2FkJywgKCkgPT4gdGhpcy51bmJpbmRFdmVudHMoKSk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB0aGlzLmluaXRGaW5kR2F0ZSgpO1xuICAgIH1cblxuICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICBpbml0RmluZEdhdGUoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh1cmxVdGlscy5nZXRVcmwoKSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKHVybC5xdWVyeS5fYnNfd2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gTnVtYmVyKHVybC5xdWVyeS5fYnNfd2lkdGgpO1xuICAgICAgICAgICAgdGhpcy5maW5kR2F0ZSh3aWR0aCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kR2F0ZSh3aWR0aCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2UodXJsVXRpbHMuZ2V0VXJsKCksIHRydWUpO1xuXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkuX2JzX3dpZHRoO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGgnXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoW10nXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoJ107XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aFtdJ107XG5cbiAgICAgICAgaWYgKHdpZHRoKSB7XG4gICAgICAgICAgICBjb25zdCBzaG93TW9yZVVybCA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KVxuICAgIFxuICAgICAgICAgICAgY29uc3QgbWluV2lkdGhQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmluZE1pbldpZHRoVmFsdWVzID0gJHNjb3BlID0+ICRzY29wZS5maW5kKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nKS5nZXQoKS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBfdXJsID0gVXJsLnBhcnNlKCQoZWwpLmF0dHIoJ2hyZWYnKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoX3VybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoJ10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtaW5XaWR0aCA9ICQoJyNmYWNldGVkU2VhcmNoIFtkYXRhLWZhY2V0PVwiTWluaW11bSBHYXRlIFdpZHRoXCJdJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRtaW5XaWR0aC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXRQYWdlKHNob3dNb3JlVXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiAnTWluaW11bSBHYXRlIFdpZHRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5kTWluV2lkdGhWYWx1ZXMoJChyZXNwKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmRNaW5XaWR0aFZhbHVlcygkbWluV2lkdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbWF4V2lkdGhQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmluZE1heFdpZHRoVmFsdWVzID0gJHNjb3BlID0+ICRzY29wZS5maW5kKCdbZGF0YS1mYWNldGVkLXNlYXJjaC1mYWNldF0nKS5nZXQoKS5tYXAoZWwgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBfdXJsID0gVXJsLnBhcnNlKCQoZWwpLmF0dHIoJ2hyZWYnKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIoX3VybC5xdWVyeVsnTWF4aW11bSBHYXRlIFdpZHRoJ10pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRtYXhXaWR0aCA9ICQoJyNmYWNldGVkU2VhcmNoIFtkYXRhLWZhY2V0PVwiTWF4aW11bSBHYXRlIFdpZHRoXCJdJyk7XG4gICAgICAgICAgICAgICAgaWYgKCRtYXhXaWR0aC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFwaS5nZXRQYWdlKHNob3dNb3JlVXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogdGhpcy5yZXF1ZXN0T3B0aW9ucy5zaG93TW9yZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiAnTWF4aW11bSBHYXRlIFdpZHRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmaW5kTWF4V2lkdGhWYWx1ZXMoJChyZXNwKSkpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZpbmRNYXhXaWR0aFZhbHVlcygkbWF4V2lkdGgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgIFByb21pc2UuYWxsKFttaW5XaWR0aFByb21pc2UsIG1heFdpZHRoUHJvbWlzZV0pLnRoZW4oKFttaW5XaWR0aEFyciwgbWF4V2lkdGhBcnJdKSA9PiB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5Ll9ic193aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoW10nXSA9IG1pbldpZHRoQXJyLmZpbHRlcih2YWwgPT4gdmFsIDw9IHdpZHRoKTtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aFtdJ10gPSBtYXhXaWR0aEFyci5maWx0ZXIodmFsID0+IHZhbCA+PSB3aWR0aCk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKHVybC5xdWVyeVsnTWluaW11bSBHYXRlIFdpZHRoW10nXS5sZW5ndGggPT09IG1pbldpZHRoQXJyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydNaW5pbXVtIEdhdGUgV2lkdGhbXSddO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAodXJsLnF1ZXJ5WydNYXhpbXVtIEdhdGUgV2lkdGhbXSddLmxlbmd0aCA9PT0gbWF4V2lkdGhBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnlbJ01heGltdW0gR2F0ZSBXaWR0aFtdJ107XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSkpO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIC8vIFN1cGVybWFya2V0XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBhY3Rpb25CYXJGYWN0b3J5KCk7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIC8vIEluaXQgcHJpY2UgdmFsaWRhdG9yXG4gICAgICAgIHRoaXMuaW5pdFByaWNlVmFsaWRhdG9yKCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB0aGlzLmluaXRQcmljZVNsaWRlcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVZpZXdDYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXBkYXRlVmlld0NhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLnNob3coKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZSh1cmxVdGlscy5nZXRVcmwoKSwgdGhpcy5yZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgJCh0aGlzLm9wdGlvbnMuYmxvY2tlclNlbGVjdG9yKS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpZXcoY29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFJlbW92ZVxuICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBpZCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgY29uc3QgaGFzTW9yZVJlc3VsdHMgPSAkbmF2TGlzdC5kYXRhKCdoYXNNb3JlUmVzdWx0cycpO1xuXG4gICAgICAgIGlmIChoYXNNb3JlUmVzdWx0cykge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGRlcGVuZGluZyBvbiBgY29sbGFwc2VkYCBmbGFnXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpKSB7XG4gICAgICAgICAgICB0aGlzLmdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCRuYXZMaXN0KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0TW9yZUZhY2V0UmVzdWx0cygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBmYWNldCA9ICRuYXZMaXN0LmRhdGEoJ2ZhY2V0Jyk7XG4gICAgICAgIGNvbnN0IGZhY2V0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG5cbiAgICAgICAgaWYgKHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUpIHtcbiAgICAgICAgICAgIGFwaS5nZXRQYWdlKGZhY2V0VXJsLCB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHRoaXMucmVxdWVzdE9wdGlvbnMuc2hvd01vcmUsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RfYWxsOiBmYWNldCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsT3BlbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLm1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZpbHRlckZhY2V0SXRlbXMoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGl0ZW1zID0gJCgnLm5hdkxpc3QtaXRlbScpO1xuICAgICAgICBjb25zdCBxdWVyeSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkudmFsKCkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgICAkaXRlbXMuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSAkKGVsZW1lbnQpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKHRleHQuaW5kZXhPZihxdWVyeSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgJChlbGVtZW50KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKSB7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgY29sbGFwc2libGUub3BlbigpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VBbGxGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG5cbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQcml2YXRlIG1ldGhvZHNcbiAgICBpbml0UHJpY2VWYWxpZGF0b3IoKSB7XG4gICAgICAgIGlmICgkKHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5vZCgpO1xuICAgICAgICBjb25zdCBzZWxlY3RvcnMgPSB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBmb3JtU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlRm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgbWluUHJpY2VTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VNaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9O1xuXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uKHZhbGlkYXRvciwgc2VsZWN0b3JzLCB0aGlzLm9wdGlvbnMudmFsaWRhdGlvbkVycm9yTWVzc2FnZXMpO1xuXG4gICAgICAgIHRoaXMucHJpY2VSYW5nZVZhbGlkYXRvciA9IHZhbGlkYXRvcjtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpIHtcbiAgICAgICAgY29uc3QgJG5hdkxpc3RzID0gJCh0aGlzLm9wdGlvbnMuZmFjZXROYXZMaXN0U2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgY29sbGFwc2VkIHN0YXRlIGZvciBlYWNoIGZhY2V0XG4gICAgICAgICRuYXZMaXN0cy5lYWNoKChpbmRleCwgbmF2TGlzdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKG5hdkxpc3QpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkQ29sbGFwc2UgPSBfLmluY2x1ZGVzKHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKSB7XG4gICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGVzID0gJCh0aGlzLm9wdGlvbnMuYWNjb3JkaW9uVG9nZ2xlU2VsZWN0b3IpO1xuXG4gICAgICAgICRhY2NvcmRpb25Ub2dnbGVzLmVhY2goKGluZGV4LCBhY2NvcmRpb25Ub2dnbGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRhY2NvcmRpb25Ub2dnbGUgPSAkKGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gXy5pbmNsdWRlcyh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkQ29sbGFwc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIC8vIENsZWFuLXVwXG4gICAgICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vbigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ2tleXVwJywgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtcywgdGhpcy5maWx0ZXJGYWNldEl0ZW1zKTtcbiAgICAgICAgJCh0aGlzLm9wdGlvbnMuY2xlYXJGYWNldFNlbGVjdG9yKS5vbignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSB7e3tcbiAgICAgICAgY29uc3QgJG1pbk1heEZhY2V0cyA9ICQoJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QtLW1heGltdW0tZ2F0ZS13aWR0aCwgI2ZhY2V0ZWRTZWFyY2gtY29udGVudC0tbWluaW11bS1nYXRlLXdpZHRoJyk7XG4gICAgICAgIGlmICgkbWluTWF4RmFjZXRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyQmxvY2stLWZpbmRHYXRlJykuc2hvdygpO1xuICAgICAgICAgICAgJG1pbk1heEZhY2V0cy5jbG9zZXN0KCcuX2FjY29yZGlvbi1ibG9jaycpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5zaWRlYmFyQmxvY2stLWZpbmRHYXRlJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2UodXJsVXRpbHMuZ2V0VXJsKCksIHRydWUpO1xuICAgICAgICBpZiAodXJsLnF1ZXJ5Ll9ic193aWR0aCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBOdW1iZXIodXJsLnF1ZXJ5Ll9ic193aWR0aCk7XG4gICAgICAgICAgICAkKCcjYmVhdXRpZnlfX2ZpbmRHYXRlLXNpZGViYXIgZm9ybSBbbmFtZT1fYnNfd2lkdGhdJykudmFsKHdpZHRoKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcjYmVhdXRpZnlfX2ZpbmRHYXRlLXNpZGViYXIgZm9ybScpLm9mZignc3VibWl0Jykub24oJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuZmluZEdhdGUoJChldmVudC50YXJnZXQpLmZpbmQoJ1tuYW1lPV9ic193aWR0aF0nKS52YWwoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB9fX1cblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1mYWNldC1jbGlja2VkJywgdGhpcy5vbkZhY2V0Q2xpY2spO1xuICAgICAgICBob29rcy5vbignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgLy8gRE9NIGV2ZW50c1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vZmYoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdjbGljaycsIHRoaXMub3B0aW9ucy5zaG93TW9yZVRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uVG9nZ2xlQ2xpY2spO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigna2V5dXAnLCB0aGlzLm9wdGlvbnMuZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zLCB0aGlzLmZpbHRlckZhY2V0SXRlbXMpO1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5jbGVhckZhY2V0U2VsZWN0b3IpLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXJGYWNldCk7XG5cbiAgICAgICAgLy8gSG9va3NcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9mZignZmFjZXRlZFNlYXJjaC1yYW5nZS1zdWJtaXR0ZWQnLCB0aGlzLm9uUmFuZ2VTdWJtaXQpO1xuICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICB9XG5cbiAgICBvbkNsZWFyRmFjZXQoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGxpbmsgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCB1cmwgPSAkbGluay5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgICAgIC0tLVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCB3aW5VcmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5Lm1vZGUpIHtcbiAgICAgICAgICAgIGZhY2V0VXJsLnF1ZXJ5Lm1vZGUgPSB3aW5VcmwucXVlcnkubW9kZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luVXJsLnF1ZXJ5LmxpbWl0KSB7XG4gICAgICAgICAgICBmYWNldFVybC5xdWVyeS5saW1pdCA9IHdpblVybC5xdWVyeS5saW1pdDtcbiAgICAgICAgfVxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogZmFjZXRVcmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyhmYWNldFVybC5xdWVyeSkgfSkpO1xuICAgICAgICAvKiBFTkQgTU9EICovXG4gICAgfVxuXG4gICAgb25Ub2dnbGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJG5hdkxpc3QgPSAkKCR0b2dnbGUuYXR0cignaHJlZicpKTtcblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAvLyBUb2dnbGUgdmlzaWJsZSBpdGVtc1xuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgIH1cblxuICAgIG9uRmFjZXRDbGljayhldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICRsaW5rLnRvZ2dsZUNsYXNzKCdpcy1zZWxlY3RlZCcpO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBVUkxcbiAgICAgICAgLyogTU9EIGJ5IHBhcGF0aGVtZXMgLSBzdXBlcm1hcmtldFxuICAgICAgICAtLS1cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybCh1cmwpO1xuICAgICAgICAtLS1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgd2luVXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgZmFjZXRVcmwgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgaWYgKHdpblVybC5xdWVyeS5tb2RlKSB7XG4gICAgICAgICAgICBmYWNldFVybC5xdWVyeS5tb2RlID0gd2luVXJsLnF1ZXJ5Lm1vZGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpblVybC5xdWVyeS5saW1pdCkge1xuICAgICAgICAgICAgZmFjZXRVcmwucXVlcnkubGltaXQgPSB3aW5VcmwucXVlcnkubGltaXQ7XG4gICAgICAgIH1cblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogZmFjZXRVcmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyhmYWNldFVybC5xdWVyeSkgfSkpO1xuICAgICAgICAvKiBFTkQgTU9EICovXG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgLyogTU9EIGJ5IHBhcGF0aGVtZXMgLSBzdXBlcm1hcmtldFxuICAgICAgICAtLS1cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICAtLS1cbiAgICAgICAgKi9cbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgdXJsLnF1ZXJ5W3BhcmFtLm5hbWVdID0gcGFyYW0udmFsdWU7XG4gICAgICAgIH0pO1xuICAgICAgICAvKiBFTkQgTU9EICovXG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQgPSB0cnVlOyAvLyBwYXBhdGhlbWVzLXN1cGVybWFya2V0OiBxdWljay1maXhlZCBzdGVuY2lsLXV0aWxzIGZvciBzb3J0aW5nIGFqYXggcmVxdWVzdFxuXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwoVXJsLmZvcm1hdCh7IHBhdGhuYW1lOiB1cmwucGF0aG5hbWUsIHNlYXJjaDogdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvKiBNT0QgYnkgcGFwYXRoZW1lcyAtIHN1cGVybWFya2V0XG4gICAgICAgIC0tLVxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9IGRlY29kZVVSSSgkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpKTtcbiAgICAgICAgLS0tXG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zQXJyYXkgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZUFycmF5KCk7XG4gICAgICAgIHF1ZXJ5UGFyYW1zQXJyYXkuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICAgICAgICB1cmwucXVlcnlbcGFyYW0ubmFtZV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyh1cmwucXVlcnkpO1xuICAgICAgICAvKiBFTkQgTU9EICovXG5cbiAgICAgICAgdXJsVXRpbHMuZ29Ub1VybChVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiBgPyR7cXVlcnlQYXJhbXN9YCB9KSk7XG4gICAgfVxuXG4gICAgb25TdGF0ZUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gICAgfVxuXG4gICAgb25BY2NvcmRpb25Ub2dnbGUoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG4gICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG5cbiAgICAgICAgaWYgKGNvbGxhcHNpYmxlLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldHMsIFtpZF0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBfLndpdGhvdXQodGhpcy5jb2xsYXBzZWRGYWNldHMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uUG9wU3RhdGUoKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhjdXJyZW50VXJsKTtcbiAgICAgICAgLy8gSWYgc2VhcmNoUGFyYW1zIGRvZXMgbm90IGNvbnRhaW4gYSBwYWdlIHZhbHVlIHRoZW4gbW9kaWZ5IHVybCBxdWVyeSBzdHJpbmcgdG8gaGF2ZSBwYWdlPTFcbiAgICAgICAgaWYgKCFzZWFyY2hQYXJhbXMuaGFzKCdwYWdlJykpIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmtVcmwgPSAkKCcucGFnaW5hdGlvbi1saW5rJykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgaWYgKGxpbmtVcmwpIHsgLy8gU3VwZXJtYXJrZXQgRml4IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlID0gL3BhZ2U9WzAtOV0rL2k7XG4gICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZExpbmtVcmwgPSBsaW5rVXJsLnJlcGxhY2UocmUsICdwYWdlPTEnKTtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cGRhdGVkTGlua1VybCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxuXG4gICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgIGluaXRQcmljZVNsaWRlcigpIHtcbiAgICAgICAgJCgnI2ZhY2V0ZWRTZWFyY2hbZGF0YS1iZWF1dGlmeS1mYWNldGVkLXNob3AtYnktcHJpY2VdJykuZ2V0KCkubWFwKGVsID0+ICQoZWwpKVxuICAgICAgICAgICAgLmZvckVhY2goJGZhY2V0ZWRTZWFyY2ggPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRzaG9wQnlQcmljZSA9ICRmYWNldGVkU2VhcmNoLmZpbmQoJyNmYWNldGVkU2VhcmNoLWNvbnRlbnQtLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgJHNob3BCeVByaWNlLmRhdGEoJ2JlYXV0aWZ5U2hvcEJ5UHJpY2UnLCAkZmFjZXRlZFNlYXJjaC5kYXRhKCdiZWF1dGlmeUZhY2V0ZWRTaG9wQnlQcmljZScpKTtcbiAgICAgICAgICAgICAgICBpbml0U2hvcEJ5UHJpY2VTbGlkZXIoJHNob3BCeVByaWNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmFjZXRlZFNlYXJjaDtcbiIsImNvbnN0IFRSQU5TTEFUSU9OUyA9ICd0cmFuc2xhdGlvbnMnO1xuY29uc3QgaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSA9IChkaWN0aW9uYXJ5KSA9PiAhIU9iamVjdC5rZXlzKGRpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubGVuZ3RoO1xuY29uc3QgY2hvb3NlQWN0aXZlRGljdGlvbmFyeSA9ICguLi5kaWN0aW9uYXJ5SnNvbkxpc3QpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnlKc29uTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkaWN0aW9uYXJ5ID0gSlNPTi5wYXJzZShkaWN0aW9uYXJ5SnNvbkxpc3RbaV0pO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iLCJpbXBvcnQgVXJsIGZyb20gJ3VybCc7XG5cbmNvbnN0IHVybFV0aWxzID0ge1xuICAgIGdldFVybDogKCkgPT4gYCR7d2luZG93LmxvY2F0aW9uLnBhdGhuYW1lfSR7d2luZG93LmxvY2F0aW9uLnNlYXJjaH1gLFxuXG4gICAgZ29Ub1VybDogKHVybCkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoe30sIGRvY3VtZW50LnRpdGxlLCB1cmwpO1xuICAgICAgICAkKHdpbmRvdykudHJpZ2dlcignc3RhdGVjaGFuZ2UnKTtcbiAgICB9LFxuXG4gICAgcmVwbGFjZVBhcmFtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuICAgICAgICBsZXQgcGFyYW07XG5cbiAgICAgICAgLy8gTGV0IHRoZSBmb3JtYXR0ZXIgdXNlIHRoZSBxdWVyeSBvYmplY3QgdG8gYnVpbGQgdGhlIG5ldyB1cmxcbiAgICAgICAgcGFyc2VkLnNlYXJjaCA9IG51bGw7XG5cbiAgICAgICAgZm9yIChwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdXBlcm1hcmtldDogRml4IHVybCBlbmNvZGUgUkZDIDM5ODZcbiAgICAgICAgaWYgKHBhcnNlZC5xdWVyeSkge1xuICAgICAgICAgICAgcGFyc2VkLnNlYXJjaCA9IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcocGFyc2VkLnF1ZXJ5KTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYXJzZWQucXVlcnk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gVXJsLmZvcm1hdChwYXJzZWQpO1xuICAgIH0sXG5cbiAgICAvLyBTdXBlcm1hcmtldFxuICAgIHJlbW92ZVBhcmFtczogKHVybCwgcGFyYW1zKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZCA9IFVybC5wYXJzZSh1cmwsIHRydWUpO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKHBhcnNlZC5xdWVyeS5oYXNPd25Qcm9wZXJ0eShwYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkLnF1ZXJ5W3BhcmFtc10gPSBudWxsO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJzZWQucXVlcnlbcGFyYW1zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgcGFyYW1zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucXVlcnkuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcGFyc2VkLnF1ZXJ5W3BhcmFtXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN1cGVybWFya2V0OiBGaXggdXJsIGVuY29kZSBSRkMgMzk4NlxuICAgICAgICBpZiAocGFyc2VkLnF1ZXJ5KSB7XG4gICAgICAgICAgICBwYXJzZWQuc2VhcmNoID0gdXJsVXRpbHMuYnVpbGRRdWVyeVN0cmluZyhwYXJzZWQucXVlcnkpO1xuICAgICAgICAgICAgZGVsZXRlIHBhcnNlZC5xdWVyeTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBVcmwuZm9ybWF0KHBhcnNlZCk7XG4gICAgfSxcblxuICAgIC8vIHN1cGVybWFya2V0OiBGaXggZmFjZXRlZCB2YWx1ZSBjb250YWlucyBib3RoICsgYW5kIGEgc3BhY2luZyBjaGFyYWN0ZXIgKGllLiBcIkRWRCtSIERMXCIpXG4gICAgZW5jb2RlUGFyYW06ICh2YWwpID0+IGVuY29kZVVSSUNvbXBvbmVudCh2YWwpLnNwbGl0KCclMjAnKS5qb2luKCcrJykucmVwbGFjZSgvWyEnKCkqXS9nLCBjID0+IGAlJHtjLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpfWApLFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHt1cmxVdGlscy5lbmNvZGVQYXJhbShrZXkpfT0ke3VybFV0aWxzLmVuY29kZVBhcmFtKHF1ZXJ5RGF0YVtrZXldW25keF0pfWA7IC8vIHN1cGVybWFya2V0IG1vZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHt1cmxVdGlscy5lbmNvZGVQYXJhbShrZXkpfT0ke3VybFV0aWxzLmVuY29kZVBhcmFtKHF1ZXJ5RGF0YVtrZXldKX1gOyAvLyBzdXBlcm1hcmtldCBtb2RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgdXJsVXRpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9