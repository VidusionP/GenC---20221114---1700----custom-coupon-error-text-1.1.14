(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./assets/js/papathemes/also-bought.js":
/*!*********************************************!*\
  !*** ./assets/js/papathemes/also-bought.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlsoBought; });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme/common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scroll-to-element */ "./node_modules/scroll-to-element/index.js");
/* harmony import */ var scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scroll_to_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils */ "./assets/js/papathemes/utils.js");
/* harmony import */ var _theme_global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../theme/global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_8__);

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
function reportFormValidity(form) {
  var valid = true;
  if (form && form.checkValidity) {
    valid = form.checkValidity();
    if (!valid) {
      if (form.reportValidity) {
        form.reportValidity();
      } else {
        valid = true;
      }
    }
  }
  return valid;
}
var AlsoBought = /*#__PURE__*/function () {
  function AlsoBought(parentProductDetails, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$thumbnailTemplat = _ref.thumbnailTemplate,
      thumbnailTemplate = _ref$thumbnailTemplat === void 0 ? "\n            <div class=\"productView-alsoBought-thumbnail-item {{#checked}}is-checked{{/checked}}\" data-thumbnail-product-id=\"{{id}}\">\n                <div class=\"productView-alsoBought-item-image\">\n                    <a class=\"productView-alsoBought-thumbnail-label\" href=\"{{url}}\" target=\"_blank\"><img class=\"lazyload\" src=\"{{loadingImg}}\" data-src=\"{{img}}\" alt=\"{{name}}\" title=\"{{name}}\"></a>\n                </div>\n            </div>\n        " : _ref$thumbnailTemplat,
      _ref$productDetailsTe = _ref.productDetailsTemplate,
      productDetailsTemplate = _ref$productDetailsTe === void 0 ? "\n            <div class=\"productView-alsoBought-item-inner\">\n                <div class=\"productView-alsoBought-item-check\">\n                    <div class=\"form-field\">\n                        <input\n                            class=\"form-checkbox\"\n                            type=\"checkbox\" \n                            name=\"productView-alsoBought-item-checkbox\"\n                            id=\"productView-alsoBought-item-checkbox-{{id}}\"\n                            value=\"{{id}}\"\n                            {{#checked}}checked{{/checked}}\n                            data-also-bought-checkbox>\n                        <label class=\"form-label {{#checked}}is-checked{{/checked}}\" for=\"productView-alsoBought-item-checkbox-{{id}}\">\n                            <div class=\"productView-alsoBought-item-title\">{{name}}</div>\n                            <div class=\"productView-alsoBought-item-price\">\n                                {{&loginPriceHtml}}\n                                {{&priceHtml}}\n                                {{&priceRangeHtml}}\n                            </div>\n\n                            {{&optionsToggleHtml}}\n                        </label>\n                    </div>\n                </div>\n                <div class=\"productView-alsoBought-item-form\" id=\"productView-alsoBought-item-form-{{id}}\" data-product-content>\n                    {{&formHtml}}\n                </div>\n            </div>\n        " : _ref$productDetailsTe,
      _ref$priceTemplate = _ref.priceTemplate,
      priceTemplate = _ref$priceTemplate === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <!-- Sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\" {{#nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{priceLabel}}\n                    </span>\n                    <span class=\"price-now-label\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                        {{salePriceLabel}}\n                    </span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{price.formatted}}</span>\n                </div>\n                <!-- Non-sale price -->\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" {{^nonSalePrice}}style=\"display: none;\"{{/nonSalePrice}}>\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                <!-- Retail price -->\n                {{&retailPriceHtml}}\n                {{&taxLabelHtml}}\n            </div>\n        " : _ref$priceTemplate,
      _ref$priceRangeTempla = _ref.priceRangeTemplate,
      priceRangeTemplate = _ref$priceRangeTempla === void 0 ? "\n            <div class=\"price-section-group price-section-group--{{taxClassPrefix}}\">\n                <div class=\"price-section price-section--{{taxClassPrefix}} price-section--main\">\n                    <span class=\"price-label\">{{priceLabel}}</span>\n                    <span class=\"price-now-label\" style=\"display: none;\">{{salePriceLabel}}</span>\n                    <span data-product-price-{{taxDataPrefix}} class=\"price price--{{taxClassPrefix}} price--main\">{{priceRange.min.formatted}} - {{priceRange.max.formatted}}</span>\n                    {{&taxLabelHtml}}\n                </div>\n                <div class=\"price-section price-section--{{taxClassPrefix}} non-sale-price--{{taxClassPrefix}}\" style=\"display: none;\">\n                    <span class=\"price-was-label\">{{nonSalePriceLabel}}</span>\n                    <span data-product-non-sale-price-{{taxDataPrefix}} class=\"price price--non-sale\">\n                        {{nonSalePrice.formatted}}\n                    </span>\n                </div>\n                {{&retailPriceRangeHtml}}\n                {{&retailPriceHtml}}\n            </div>\n        " : _ref$priceRangeTempla,
      _ref$taxLabelTemplate = _ref.taxLabelTemplate,
      taxLabelTemplate = _ref$taxLabelTemplate === void 0 ? "\n            <abbr title=\"{{title}}\">{{text}}</abbr>\n        " : _ref$taxLabelTemplate,
      _ref$retailPriceRange = _ref.retailPriceRangeTemplate,
      retailPriceRangeTemplate = _ref$retailPriceRange === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-price-{{taxDataPrefix}} class=\"price price--rrp\">{{retailPriceRange.min.with_tax.formatted}} - {{retailPriceRange.max.with_tax.formatted}}</span>\n            </div>\n        " : _ref$retailPriceRange,
      _ref$retailPriceTempl = _ref.retailPriceTemplate,
      retailPriceTemplate = _ref$retailPriceTempl === void 0 ? "\n            <div class=\"price-section price-section--{{taxClassPrefix}} rrp-price--{{taxClassPrefix}}\" {{^retailPrice}}style=\"display: none;{{/retailPrice}}\">\n                {{retailPriceLabel}}\n                <span data-product-rrp-{{taxDataPrefix}} class=\"price price--rrp\">\n                    {{retailPrice.formatted}}\n                </span>\n            </div>\n        " : _ref$retailPriceTempl,
      _ref$loginPriceTempla = _ref.loginPriceTemplate,
      loginPriceTemplate = _ref$loginPriceTempla === void 0 ? "\n            <a class=\"price--login\" href=\"{{loginUrl}}\" translate>{{loginForPriceTxt}}</a>\n        " : _ref$loginPriceTempla,
      _ref$optionsToggleTem = _ref.optionsToggleTemplate,
      optionsToggleTemplate = _ref$optionsToggleTem === void 0 ? "\n            <div class=\"productView-alsoBought-item-formToggle\"><a href=\"#productView-alsoBought-item-form-{{id}}\" data-options-collapsible>{{chooseOptionsTxt}} <i aria-hidden=\"true\" class=\"icon\"><svg><use xlink:href=\"#icon-chevron-down\"></use></svg></i></a></div>\n        " : _ref$optionsToggleTem,
      _ref$simpleFormTempla = _ref.simpleFormTemplate,
      simpleFormTemplate = _ref$simpleFormTempla === void 0 ? "\n            <form class=\"form form--addToCart\" method=\"post\" action=\"{{addToCartUrl}}\" enctype=\"multipart/form-data\" data-cart-item-add>\n                <input type=\"hidden\" name=\"action\" value=\"add\">\n                <input type=\"hidden\" name=\"product_id\" value=\"{{id}}\"/>\n                <input type=\"hidden\" name=\"qty[]\" value=\"{{qty}}\"/>\n            </form>\n        " : _ref$simpleFormTempla,
      _ref$loadingTemplate = _ref.loadingTemplate,
      loadingTemplate = _ref$loadingTemplate === void 0 ? "\n            <div class=\"loading\"><img src=\"{{loadingImg}}\" alt=\"loading\"/></div>\n        " : _ref$loadingTemplate,
      _ref$templateCustomTa = _ref.templateCustomTags,
      templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa;
    this.parentProductDetails = parentProductDetails;
    this.thumbnailTemplate = thumbnailTemplate;
    this.productDetailsTemplate = productDetailsTemplate;
    this.priceTemplate = priceTemplate;
    this.priceRangeTemplate = priceRangeTemplate;
    this.taxLabelTemplate = taxLabelTemplate;
    this.retailPriceRangeTemplate = retailPriceRangeTemplate;
    this.retailPriceTemplate = retailPriceTemplate;
    this.loginPriceTemplate = loginPriceTemplate;
    this.optionsToggleTemplate = optionsToggleTemplate;
    this.simpleFormTemplate = simpleFormTemplate;
    this.loadingTemplate = loadingTemplate;
    this.templateCustomTags = templateCustomTags;
    this.context = this.parentProductDetails.context;
    this.numberTexts = this.context.txtAlsoBoughtNumberArray.split(',');
    this.allNumberTexts = this.context.txtAlsoBoughtAllNumberArray.split(',');
    this.$alsoBoughtEl = $('[data-also-bought]', parentProductDetails.$productViewScope);
    this.config = this.$alsoBoughtEl.data('alsoBought') || {};
    this.moneyWithTax = this.config.samplePriceWithTax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(this.config.samplePriceWithTax, this.context.money) : null;
    this.moneyWithoutTax = this.config.samplePriceWithoutTax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(this.config.samplePriceWithoutTax, this.context.money) : null;

    // try to guess any price on the page
    this.moneyFallback = this.moneyWithTax || this.moneyWithoutTax
    // is default currency?
    || (this.context.activeCurrencyCode && this.context.activeCurrencyCode === this.context.defaultCurrencyCode ? this.context.money : null)
    // any price on the page
    || $('[data-product-price-without-tax], [data-product-price-with-tax]').get().reduce(function (_money, el) {
      return _money || Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])($(el).text());
    }, null)
    // use currency code
    || (this.context.activeCurrencyCode ? Object.assign({}, this.context.money, {
      currency_token: " " + this.context.activeCurrencyCode + " "
    }) : this.context.money);
    this.products = [];
    this.productNodes = [];
    this.onAddAllButtonClick = this.onAddAllButtonClick.bind(this);
    this.onAddSelectedButtonClick = this.onAddSelectedButtonClick.bind(this);
    var thumbSize = this.context.alsobought_thumbnail_size.split('x');
    this.thumbnailWidth = Number(thumbSize[0]) || 100;
    this.thumbnailHeight = Number(thumbSize[1]) || 100;
    this.retrieveAlsoBoughtProducts();
    $('[data-add-all]', this.$alsoBoughtEl).on('click', this.onAddAllButtonClick);
    $('[data-add-selected]', this.$alsoBoughtEl).on('click', this.onAddSelectedButtonClick);
  }
  var _proto = AlsoBought.prototype;
  _proto.currencyFormat = function currencyFormat(value) {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["currencyFormat"])(value, (this.config.includeTax ? this.moneyWithTax : this.moneyWithoutTax) || this.moneyFallback);
  };
  _proto.retrieveAlsoBoughtProducts = function retrieveAlsoBoughtProducts() {
    var _this = this;
    var $thumbnails = $('[data-thumbnails]', this.$alsoBoughtEl);
    var options = {
      template: {
        details: 'papathemes/also-bought/product-details',
        thumbnail: 'papathemes/also-bought/product-thumbnail'
      }
    };
    var $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
    var productIds = $productEls.get().map(function (el) {
      return $(el).data('productId');
    });
    if ($productEls.length > 0) {
      this.$alsoBoughtEl.removeClass('u-hiddenVisually');
      $.ajax({
        url: '/graphql',
        method: 'POST',
        data: JSON.stringify({
          query: "\n                        query (\n                            $productIds: [Int!],\n                            $productsCount: Int,\n                            " + (!this.config.requireLogin ? "\n                                $includeTax: Boolean,\n                                $currencyCode: currencyCode,\n                            " : '') + "\n                                $imgWidth: Int!,\n                            $imgHeight: Int!\n                        ) {\n                            site {\n                                products (\n                                    entityIds: $productIds,\n                                    first: $productsCount,\n                                    hideOutOfStock: true\n                                ) {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            path\n                                            addToCartUrl\n                                            minPurchaseQuantity\n                                            defaultImage {\n                                                url (\n                                                    width: $imgWidth,\n                                                    height: $imgHeight\n                                                )\n                                            }\n                                            availabilityV2 {\n                                                status\n                                                ... on ProductUnavailable {\n                                                    message\n                                                }\n                                            }\n                                            " + (!this.config.requireLogin ? "\n                                                prices (\n                                                    includeTax: $includeTax,\n                                                    currencyCode: $currencyCode\n                                                ) {\n                                                    price {\n                                                        ...MoneyFields\n                                                    }\n                                                    salePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    basePrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    retailPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    mapPrice {\n                                                        ...MoneyFields\n                                                    }\n                                                    priceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                    retailPriceRange {\n                                                        ...MoneyRangeFields\n                                                    }\n                                                }\n                                            " : '') + "\n                                            productOptions (\n                                                first: 1\n                                            ) {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                        " + (!this.config.requireLogin ? "\n                            fragment MoneyFields on Money {\n                                value\n                                currencyCode\n                            }\n                            fragment MoneyRangeFields on MoneyRange {\n                                min {\n                                    ...MoneyFields\n                                }\n                                max {\n                                    ...MoneyFields\n                                }\n                            }\n                        " : '') + "\n                    ",
          variables: {
            productIds: productIds,
            productsCount: productIds.length,
            includeTax: this.config.includeTax,
            currencyCode: this.context.activeCurrencyCode,
            imgWidth: this.thumbnailWidth,
            imgHeight: this.thumbnailHeight
          }
        }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + this.context.graphQLToken
        },
        xhrFields: {
          withCredentials: true
        },
        success: function success(resp) {
          resp.data.site.products.edges.forEach(function (_ref2) {
            var node = _ref2.node;
            // Don't show this product if it's unavailable
            if (node.availabilityV2 && node.availabilityV2.status === 'Unavailable') {
              return;
            }
            _this.productNodes.push(node);
            var id = node.entityId;
            var name = node.name;
            var url = node.path;
            var addToCartUrl = node.addToCartUrl;
            var qty = node.minPurchaseQuantity || 1;
            var loadingImg = _this.context.loadingImg;
            var img = node.defaultImage.url || _this.context.defaultProductImage;
            var $productEl = $productEls.filter("[data-product-id=\"" + id + "\"]");
            var taxClassPrefix = _this.config.includeTax ? 'withTax' : 'withoutTax';
            var taxDataPrefix = _this.config.includeTax ? 'with-tax' : 'without-tax';
            var priceLabel = _this.context.pdp_price_label;
            var salePriceLabel = _this.context.pdp_sale_price_label;
            var nonSalePriceLabel = _this.context.pdp_non_sale_price_label;
            var retailPriceLabel = _this.context.pdp_retail_price_label;
            var chooseOptionsTxt = _this.context.chooseOptionsTxt;
            var loginForPriceTxt = _this.context.loginForPriceTxt;
            var loginUrl = _this.context.loginUrl || '/login.php';
            var checked = _this.context.alsobought_checked;
            var price = !_this.config.requireLogin && node.prices.price ? {
              formatted: _this.currencyFormat(node.prices.price.value)
            } : null;
            var nonSalePrice = !_this.config.requireLogin && node.prices.basePrice && node.prices.price && node.prices.basePrice.value !== node.prices.price.value ? {
              formatted: _this.currencyFormat(node.prices.basePrice.value)
            } : null;
            var retailPrice = !_this.config.requireLogin && node.prices.retailPrice ? {
              formatted: _this.currencyFormat(node.prices.retailPrice.value)
            } : null;
            var priceRange = !_this.config.requireLogin && node.prices.priceRange && node.prices.priceRange.min.value != node.prices.priceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.priceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.priceRange.max.value)
              }
            } : null;
            var retailPriceRange = !_this.config.requireLogin && node.prices.retailPriceRange && node.prices.retailPriceRange.min.value != node.prices.retailPriceRange.max.value ? {
              min: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.min.value)
              },
              max: {
                formatted: _this.currencyFormat(node.prices.retailPriceRange.max.value)
              }
            } : null;
            var loginPriceHtml = _this.config.requireLogin ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.loginPriceTemplate, {
              loginUrl: loginUrl,
              loginForPriceTxt: loginForPriceTxt
            }, null, _this.templateCustomTags) : '';
            var taxLabelHtml = _this.config.showTaxLabel ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.taxLabelTemplate, {
              title: _this.config.includeTax ? _this.context.includingTaxTxt : _this.context.excludingTaxTxt,
              text: _this.config.includeTax ? _this.context.priceWithTaxTxt : _this.context.priceWithoutTaxTxt
            }, null, _this.templateCustomTags) : '';
            var retailPriceRangeHtml = retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.retailPriceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPriceRange: retailPriceRange
            }, null, _this.templateCustomTags) : '';
            var retailPriceHtml = !retailPriceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.retailPriceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              retailPriceLabel: retailPriceLabel,
              retailPrice: retailPrice
            }, null, _this.templateCustomTags) : '';
            var priceRangeHtml = priceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.priceRangeTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              priceRange: priceRange,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceRangeHtml: retailPriceRangeHtml,
              retailPriceHtml: retailPriceHtml
            }, null, _this.templateCustomTags) : '';
            var optionsToggleHtml = node.productOptions.edges.length > 0 ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.optionsToggleTemplate, {
              id: id,
              chooseOptionsTxt: chooseOptionsTxt
            }, null, _this.templateCustomTags) : '';
            var priceHtml = !_this.config.requireLogin && !priceRange ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.priceTemplate, {
              taxClassPrefix: taxClassPrefix,
              taxDataPrefix: taxDataPrefix,
              priceLabel: priceLabel,
              salePriceLabel: salePriceLabel,
              nonSalePriceLabel: nonSalePriceLabel,
              price: price,
              nonSalePrice: nonSalePrice,
              taxLabelHtml: taxLabelHtml,
              retailPriceHtml: retailPriceHtml
            }, null, _this.templateCustomTags) : '';
            var formHtml = node.productOptions.edges.length === 0 ? mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.simpleFormTemplate, {
              id: id,
              addToCartUrl: addToCartUrl,
              qty: qty
            }, null, _this.templateCustomTags) : '';
            var detailsHtml = mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.productDetailsTemplate, {
              id: id,
              name: name,
              loginPriceHtml: loginPriceHtml,
              priceHtml: priceHtml,
              priceRangeHtml: priceRangeHtml,
              optionsToggleHtml: optionsToggleHtml,
              formHtml: formHtml,
              checked: checked
            }, null, _this.templateCustomTags);
            var thumbnailHtml = $(mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(_this.thumbnailTemplate, {
              id: id,
              name: name,
              url: url,
              loadingImg: loadingImg,
              img: img,
              checked: checked
            }, null, _this.templateCustomTags));
            $productEl.append(detailsHtml);
            $thumbnails.append(thumbnailHtml);

            // load simple product details
            if (node.productOptions.edges.length === 0) {
              var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this.context, {
                enableAlsoBought: false
              }));

              // listen price change
              product.$scope.on('price-change', function () {
                return _this.updateTotalPrice();
              });

              // store the product object for later use
              _this.products.push(product);
              $productEl.data('productDetails', product);
            }

            // init foundation collapsible
            Object(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
              $context: $productEl
            });

            // bind events
            $productEl.find('[data-also-bought-checkbox]').on('change', _this.onAlsoBoughtCheckboxChange.bind(_this, $productEl));
            $productEl.find('[data-options-collapsible]').on(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["CollapsibleEvents"].open, _this.onOptionsOpen.bind(_this, $productEl));
            _this.updateTotalPrice();
            _this.updateAddSelectedToCartButton();
          });
        }
      });

      // init parent product item
      var $parentProductEl = $('[data-parent-product]', this.$alsoBoughtEl);
      Object(_theme_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])('[data-options-collapsible]', {
        $context: $parentProductEl
      });
      $('[data-also-bought-checkbox]', $parentProductEl).on('change', this.onAlsoBoughtCheckboxChange.bind(this, $parentProductEl));

      // listen parent product price change
      this.parentProductDetails.$scope.on('price-change', function () {
        return _this.updateTotalPrice();
      });
    }
  };
  _proto.updateTotalPrice = function updateTotalPrice() {
    var _this2 = this;
    // stop showing total price if require login
    if (this.config.requireLogin) {
      return;
    }
    var productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
      return $(el).val();
    });
    var priceById = Object.assign({}, this.productNodes.filter(function (node) {
      return node.prices && node.prices.price;
    }).reduce(function (_priceById, node) {
      var _node$entityId, _Object$assign;
      return Object.assign({}, _priceById, (_Object$assign = {}, _Object$assign[node.entityId] = (_node$entityId = {}, _node$entityId[_this2.config.includeTax ? 'with_tax' : 'without_tax'] = {
        value: node.prices.price.value,
        formatted: _this2.currencyFormat(node.prices.price.value)
      }, _node$entityId), _Object$assign));
    }, {}), this.products.filter(function (product) {
      return product.price && product.productId;
    }).reduce(function (_priceById, product) {
      var _Object$assign2;
      return Object.assign({}, _priceById, (_Object$assign2 = {}, _Object$assign2[product.productId] = product.price, _Object$assign2));
    }, {}));

    // merge productNodes & product details objects
    var products = Object.keys(priceById).map(function (productId) {
      return {
        productId: productId,
        price: priceById[productId]
      };
    });
    var total = [this.parentProductDetails].concat(products).filter(function (product) {
      return productIds.indexOf(product.productId) > -1;
    }).reduce(function (_ref3, _ref4) {
      var _ref3$with_tax = _ref3.with_tax,
        with_tax = _ref3$with_tax === void 0 ? 0 : _ref3$with_tax,
        _ref3$without_tax = _ref3.without_tax,
        without_tax = _ref3$without_tax === void 0 ? 0 : _ref3$without_tax,
        money_with_tax = _ref3.money_with_tax,
        money_without_tax = _ref3.money_without_tax;
      var price = _ref4.price;
      return {
        with_tax: price && price.with_tax ? with_tax + price.with_tax.value : null,
        without_tax: price && price.without_tax ? without_tax + price.without_tax.value : null,
        money_with_tax: money_with_tax || (price && price.with_tax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(price.with_tax.formatted, _this2.context.money) : null),
        money_without_tax: money_without_tax || (price && price.without_tax ? Object(_utils__WEBPACK_IMPORTED_MODULE_5__["extractMoney"])(price.without_tax.formatted, _this2.context.money) : null)
      };
    }, {});
    var $withTax = $('[data-total-with-tax]', this.$alsoBoughtEl);
    var $withoutTax = $('[data-total-without-tax]', this.$alsoBoughtEl);
    if (total.with_tax) {
      $('[data-price]', $withTax).html(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["currencyFormat"])(total.with_tax, total.money_with_tax));
      $withTax.show();
      if (total.without_tax) {
        $('[data-tax-label]', $withTax).show();
      } else {
        $('[data-tax-label]', $withTax).hide();
      }
    } else {
      $withTax.hide();
    }
    if (total.without_tax) {
      $('[data-price]', $withoutTax).html(Object(_utils__WEBPACK_IMPORTED_MODULE_5__["currencyFormat"])(total.without_tax, total.money_without_tax));
      $withoutTax.show();
      if (total.with_tax) {
        $('[data-tax-label]', $withoutTax).show();
      } else {
        $('[data-tax-label]', $withoutTax).hide();
      }
    } else {
      $withoutTax.hide();
    }
  };
  _proto.onAddAllButtonClick = function onAddAllButtonClick(e) {
    e.preventDefault();
    $('[data-also-bought-checkbox]', this.$alsoBoughtEl).prop('checked', true).trigger('change');
  };
  _proto.onAddSelectedButtonClick = function onAddSelectedButtonClick(e) {
    e.preventDefault();
    this.addSelectedProductsToCart();
  };
  _proto.onAlsoBoughtCheckboxChange = function onAlsoBoughtCheckboxChange($productEl, e) {
    var $cb = $(e.target);
    var $toggle = $productEl.find('[data-options-collapsible]').first();
    var $label = $("label[for=\"" + $cb.attr('id') + "\"]", this.$alsoBoughtEl);
    var $thumb = $("[data-thumbnail-product-id=\"" + $productEl.data('productId') + "\"]", this.$alsoBoughtEl);

    // open (close) product options form if checkbox is checked (unchecked)
    if ($cb.prop('checked')) {
      $label.addClass('is-checked');
      $thumb.addClass('is-checked');
      if (!$toggle.hasClass('is-open')) {
        $toggle.trigger('click');
      }
    } else {
      $label.removeClass('is-checked');
      $thumb.removeClass('is-checked');
      if ($toggle.hasClass('is-open')) {
        $toggle.trigger('click');
      }
    }
    this.updateTotalPrice();
    this.updateAddSelectedToCartButton();
  };
  _proto.onOptionsOpen = function onOptionsOpen($productEl) {
    if ($productEl.data('productDetails')) {
      return;
    }
    this.loadProductDetails($productEl);
  };
  _proto.loadProductDetails = /*#__PURE__*/function () {
    var _loadProductDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee($productEl) {
      var _this3 = this;
      var productId, $content;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              productId = $productEl.data('productId');
              $content = $productEl.find('[data-product-content]');
              $content.html(mustache__WEBPACK_IMPORTED_MODULE_8___default.a.render(this.loadingTemplate, {
                loadingImg: this.context.loadingImg
              }, null, this.templateCustomTags));
              _context.next = 5;
              return new Promise(function (resolve) {
                _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.product.getById(productId, {
                  template: 'papathemes/also-bought/product-details'
                }, function (err, resp) {
                  if (err || !resp) {
                    return;
                  }
                  $content.html($(resp).html());
                  var product = new _theme_common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($productEl, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context, {
                    enableAlsoBought: false
                  }), null, true);

                  // listen price change
                  product.$scope.on('price-change', function () {
                    return _this3.updateTotalPrice();
                  });

                  // store the product object for later use
                  _this3.products.push(product);
                  $productEl.data('productDetails', product);
                  _this3.updateTotalPrice();
                  resolve();
                });
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function loadProductDetails(_x) {
      return _loadProductDetails.apply(this, arguments);
    }
    return loadProductDetails;
  }();
  _proto.updateAddSelectedToCartButton = function updateAddSelectedToCartButton() {
    var $all = $('[data-also-bought-checkbox]', this.$alsoBoughtEl);
    var $checked = $all.filter(':checked');
    var $btns = $('[data-buttons]', this.$alsoBoughtEl);
    if ($checked.length > 0) {
      var str = $checked.length === $all.length ? $checked.length <= this.allNumberTexts.length ? this.allNumberTexts[$checked.length - 1] : $checked.length : $checked.length <= this.numberTexts.length ? this.numberTexts[$checked.length - 1] : $checked.length;
      var $btn = $('[data-add-selected]', this.$alsoBoughtEl);
      var text = String($btn.data('originalText') || $btn.html());
      $btn.data('originalText', text).html(text.replace('%str%', str));
      $btns.addClass('show');
    } else {
      $btns.removeClass('show');
    }
  }

  // No longer used. Keep for other third-party scripts compatibility.
  /**
   * Promise to Call after the parent product is added to add also-bought products.
   */;
  _proto.parentProductAddedToCart =
  /*#__PURE__*/
  function () {
    var _parentProductAddedToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var _this4 = this;
      var promises, success;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // console.log('parent product added');
              promises = [];
              success = true;
              this.products.forEach(function (product) {
                if (product.$scope.find('[data-also-bought-checkbox]:checked').length > 0) {
                  promises.push( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return _this4.addProductToCart(product);
                          case 3:
                            _context2.next = 5;
                            return delay(1000);
                          case 5:
                            _context2.next = 10;
                            break;
                          case 7:
                            _context2.prev = 7;
                            _context2.t0 = _context2["catch"](0);
                            success = false;
                          case 10:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2, null, [[0, 7]]);
                  })));
                }
              });
              _context3.next = 5;
              return promiseSerial(promises);
            case 5:
              return _context3.abrupt("return", success);
            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    function parentProductAddedToCart() {
      return _parentProductAddedToCart.apply(this, arguments);
    }
    return parentProductAddedToCart;
  }();
  _proto.addSelectedProductsToCart = /*#__PURE__*/function () {
    var _addSelectedProductsToCart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var productIds, results, success, _yield$this$parentPro, err, resp, errorMsg, $productEls, i, productId, $productEl, product, _yield$product$addPro, _err, _resp, _errorMsg, $toggle, _results$, _product, _resp2, modal;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              productIds = $('[data-also-bought-checkbox]:checked', this.$alsoBoughtEl).get().map(function (el) {
                return $(el).val();
              });
              results = [];
              success = true; // add parent product to cart
              if (!(productIds.indexOf(this.parentProductDetails.productId) > -1)) {
                _context4.next = 20;
                break;
              }
              success = reportFormValidity(this.parentProductDetails.$form.get(0));
              if (!success) {
                _context4.next = 20;
                break;
              }
              _context4.next = 8;
              return this.parentProductDetails.addProductToCartAsync();
            case 8:
              _yield$this$parentPro = _context4.sent;
              err = _yield$this$parentPro[0];
              resp = _yield$this$parentPro[1];
              errorMsg = err || resp.data.error;
              if (!errorMsg) {
                _context4.next = 18;
                break;
              }
              _context4.next = 15;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                text: errorMsg,
                type: 'error'
              });
            case 15:
              success = false;
              _context4.next = 20;
              break;
            case 18:
              results.push({
                product: this.parentProductDetails,
                resp: resp
              });
              $("[data-also-bought-checkbox][value=\"" + this.parentProductDetails.productId + "\"]", this.$alsoBoughtEl).prop('checked', false).trigger('change');
            case 20:
              $productEls = $('[data-product-id]', this.$alsoBoughtEl).not('[data-parent-product]');
              i = 0;
            case 22:
              if (!(i < productIds.length && success)) {
                _context4.next = 61;
                break;
              }
              productId = productIds[i];
              if (!(!productId || productId == this.parentProductDetails.productId)) {
                _context4.next = 26;
                break;
              }
              return _context4.abrupt("continue", 58);
            case 26:
              $productEl = $productEls.filter("[data-product-id=\"" + productId + "\"]");
              if (!($productEl.length === 0)) {
                _context4.next = 29;
                break;
              }
              return _context4.abrupt("continue", 58);
            case 29:
              if ($productEl.data('productDetails')) {
                _context4.next = 32;
                break;
              }
              _context4.next = 32;
              return this.loadProductDetails($productEl);
            case 32:
              product = $productEl.data('productDetails');
              if (product) {
                _context4.next = 35;
                break;
              }
              return _context4.abrupt("continue", 58);
            case 35:
              success = reportFormValidity(product.$form.get(0));
              if (!success) {
                _context4.next = 56;
                break;
              }
              _context4.next = 39;
              return product.addProductToCartAsync();
            case 39:
              _yield$product$addPro = _context4.sent;
              _err = _yield$product$addPro[0];
              _resp = _yield$product$addPro[1];
              _errorMsg = _err || _resp.data.error;
              if (!_errorMsg) {
                _context4.next = 49;
                break;
              }
              _context4.next = 46;
              return sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
                text: _errorMsg,
                type: 'error'
              });
            case 46:
              success = false;
              _context4.next = 54;
              break;
            case 49:
              results.push({
                product: product,
                resp: _resp
              });
              $('[data-also-bought-checkbox]', product.$scope).prop('checked', false).trigger('change');
              if (!(i < productIds.length - 1)) {
                _context4.next = 54;
                break;
              }
              _context4.next = 54;
              return delay(200);
            case 54:
              _context4.next = 58;
              break;
            case 56:
              // open the product form
              $toggle = $('[data-options-collapsible]', product.$scope);
              if (!$toggle.hasClass('is-open')) {
                $toggle.trigger('click');
              }
            case 58:
              i++;
              _context4.next = 22;
              break;
            case 61:
              if (results.length > 0) {
                _results$ = results[0], _product = _results$.product, _resp2 = _results$.resp; // Open preview modal and update content
                if (_product.previewModal) {
                  // Supermarket OBPS Mod
                  modal = Object(_theme_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();
                  modal.close();
                  if (this.context.add_to_cart_popup !== 'hide') {
                    _product.previewModal.open();
                  }
                  _product.updateCartContent(_product.previewModal, _resp2.data.cart_item.id);
                } else {
                  // if no modal, redirect to the cart page
                  this.redirectTo(_resp2.data.cart_item.cart_url || this.context.urls.cart);
                }
              }
            case 62:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    function addSelectedProductsToCart() {
      return _addSelectedProductsToCart.apply(this, arguments);
    }
    return addSelectedProductsToCart;
  }();
  _proto.addProductToCart = function addProductToCart(product) {
    return new Promise(function (resolve, reject) {
      var form = $('form[data-cart-item-add]', product.$scope).get(0);
      var $addToCartBtn = $('#form-action-addToCart', product.$scope);
      var originalBtnVal = $addToCartBtn.val();
      var waitMessage = $addToCartBtn.data('waitMessage');
      var $errorBox = $('[data-error-box]', product.$scope);
      var $errorMsg = $('[data-error-message]', product.$scope);
      var $checkbox = $('[data-also-bought-checkbox]', product.$scope);

      // Do not do AJAX if browser doesn't support FormData
      if (window.FormData === undefined) {
        resolve();
      }
      $addToCartBtn.val(waitMessage).prop('disabled', true);
      product.$overlay.show();

      // Add item to cart
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["default"].api.cart.itemAdd(product.filterEmptyFilesFromForm(new FormData(form)), function (err, response) {
        var errorMessage = err || response.data.error;

        // console.log(form);

        $addToCartBtn.val(originalBtnVal).prop('disabled', false);
        product.$overlay.hide();

        // Guard statement
        if (errorMessage) {
          // console.log('reject add product');

          $errorMsg.html(errorMessage);
          $errorBox.removeClass('u-hiddenVisually');
          if ($errorBox.length > 0) {
            scroll_to_element__WEBPACK_IMPORTED_MODULE_4___default()($errorBox.get(0));
          }
          reject();
          return;
        }

        // console.log('resolve add product');
        $errorMsg.empty();
        $errorBox.addClass('u-hiddenVisually');
        $checkbox.prop('checked', false).trigger('change');
        resolve();
      });
    });
  };
  return AlsoBought;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/product-details.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/product-details.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetails; });
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/isNumber */ "./node_modules/lodash/isNumber.js");
/* harmony import */ var lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isNumber__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isObject */ "./node_modules/lodash/isObject.js");
/* harmony import */ var lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isObject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js");
/* harmony import */ var lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _global_foundation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/foundation */ "./assets/js/theme/global/foundation.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _product_image_gallery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product/image-gallery */ "./assets/js/theme/product/image-gallery.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utils/banner-utils */ "./assets/js/theme/common/utils/banner-utils.js");
/* harmony import */ var _papathemes_also_bought__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../papathemes/also-bought */ "./assets/js/papathemes/also-bought.js");
/* harmony import */ var _common_media_query_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../common/media-query-list */ "./assets/js/theme/common/media-query-list.js");
/* harmony import */ var _papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../papathemes/theme-utils */ "./assets/js/papathemes/theme-utils.js");
/* harmony import */ var _papathemes_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../papathemes/utils */ "./assets/js/papathemes/utils.js");




function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



 // Supermarket





 // Papathemes - AlsoBought
 // papathemes-beautify
 // papathemes-beautify
 // papathemes-inhealth

var mediumMediaQueryList = Object(_common_media_query_list__WEBPACK_IMPORTED_MODULE_14__["default"])('medium'); // papathemes-beautify

// Supermarket - OBPS Mod
/* eslint-disable */
function shake($el, settings) {
  if (typeof settings === 'undefined') {
    settings = {};
  }
  if (typeof settings.interval === 'undefined') {
    settings.interval = 100;
  }
  if (typeof settings.distance === 'undefined') {
    settings.distance = 10;
  }
  if (typeof settings.times === 'undefined') {
    settings.times = 4;
  }
  if (typeof settings.complete === 'undefined') {
    settings.complete = function () {};
  }
  $el.css('position', 'relative');
  for (var iter = 0; iter < settings.times + 1; iter++) {
    $el.animate({
      left: iter % 2 === 0 ? settings.distance : settings.distance * -1
    }, settings.interval);
  }
  $el.animate({
    left: 0
  }, settings.interval, settings.complete);
}
/* eslint-enable */

// Supermarket: Fix Price not update when a product option is checked
function supermarketSerialize($form) {
  var assoc = $form.serializeArray().reduce(function (_assoc, _ref) {
    var name = _ref.name,
      value = _ref.value;
    _assoc[name] = value;
    return _assoc;
  }, {});
  return $.param(assoc);
}
var ProductDetails = /*#__PURE__*/function () {
  function ProductDetails($scopeArg, context, productAttributesData) {
    var _this = this;
    if (productAttributesData === void 0) {
      productAttributesData = {};
    }
    // Papathemes Also Bought MOD
    // Papathemes Also Bought MOD {{{
    var $scope = context.enableAlsoBought ? $scopeArg.find('[data-also-bought-parent-scope]') : $scopeArg;
    this.$productViewScope = $scopeArg;
    // }}}

    this.$overlay = $('[data-cart-item-add] .loadingOverlay');
    this.$scope = $scope;
    this.context = context;
    this.imageGallery = new _product_image_gallery__WEBPACK_IMPORTED_MODULE_9__["default"]($('[data-image-gallery]', this.$scope));
    this.imageGallery.init();
    this.listenQuantityChange();
    this.initRadioAttributes();
    Object(_global_foundation__WEBPACK_IMPORTED_MODULE_7__["default"])($(document)); // Supermarket
    this.initCustomTabs(); // Papathemes - Supermarket

    _wishlist__WEBPACK_IMPORTED_MODULE_11__["default"].load(this.context);
    this.getTabRequests();

    // Papathemes - AlsoBought
    if (context.enableAlsoBought) {
      try {
        var _ref2 = window.supermarketThemeExtraConfig || {},
          alsoBoughtOptions = _ref2.alsoBoughtOptions;
        this.alsoBought = new _papathemes_also_bought__WEBPACK_IMPORTED_MODULE_13__["default"](this, alsoBoughtOptions);
      } catch (err) {
        console.error(err);
      }
    }
    var $form = $('form[data-cart-item-add]', $scope);
    var $productOptionsElement = $('[data-product-option-change]', $form);
    var hasOptions = ($productOptionsElement.html() || '').trim().length;
    var hasDefaultOptions = $productOptionsElement.find('[data-default]').length;

    // papathemes-chiara edited for also-bought
    this.price = null;
    this.productId = $('input[name="product_id"]', this.$scope).val();
    this.$form = $form;

    // Papathemes - Supermarket: Fix click reviews link open tab
    $('a[href*="#tab-reviews"]', $scope).on('click', function (event) {
      if (!$(event.target).is('.tab-title')) {
        $('[data-tab] a[href="#tab-reviews"]', $scope).click().scrollTop(0);
      }
    });
    $productOptionsElement.on('change', function (event) {
      _this.productOptionsChanged(event);
      _this.setProductVariant();
    });
    $form.on('submit', function (event) {
      _this.addProductToCart(event, $form[0]);
    });

    // Update product attributes. Also update the initial view in case items are oos
    // or have default variant properties that change the view
    if ((lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()(productAttributesData) || hasDefaultOptions) && hasOptions) {
      var $productId = $('[name="product_id"]', $form).val();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange($productId, supermarketSerialize($form), 'products/bulk-discount-rates', function (err, response) {
        var attributesData = response.data || {};
        var attributesContent = response.content || {};
        _this.updateProductAttributes(attributesData);
        if (hasDefaultOptions) {
          _this.updateView(attributesData, attributesContent);
        } else {
          _this.updateDefaultAttributesForOOS(attributesData);
        }
      });
    } else {
      this.updateProductAttributes(productAttributesData);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__["default"].dispatchProductBannerEvent(productAttributesData);
    }
    $productOptionsElement.show();
    this.previewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["default"])('#previewModal')[0];

    // Supermarket
    if (this.previewModal) {
      this.previewModal.$modal.addClass('preview-modal').addClass("preview-modal--" + context.add_to_cart_popup);
      if (context.add_to_cart_popup === 'mini') {
        // unbind open/close event of the original modal
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].open, this.previewModal.onModalOpen);
        this.previewModal.$modal.off(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].close, this.previewModal.onModalClose);

        // bind open/class event for mini preview modal
        this.previewModal.onModalOpen = this.onMiniPreviewModalOpen.bind(this.previewModal);
        this.previewModal.onModalClose = this.onMiniPreviewModalClose.bind(this.previewModal);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].open, this.previewModal.onModalOpen);
        this.previewModal.$modal.on(_global_modal__WEBPACK_IMPORTED_MODULE_10__["ModalEvents"].close, this.previewModal.onModalClose);
      }
    }

    // papathemes-beautify
    this.initTabScrollToViewport();
    this.initGoToTab();

    // Need for papathemes-mqpo + alsobought v2 compliance
    this.$scope.data('productDetailsInstance', this);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.emit('product-productdetails-init', this);

    // Chiara: dropdown color swatches
    if (this.context.swatch_option_display_type === 'dropdown' || this.context.swatch_option_display_type === 'both') {
      Promise.all(/*! import() */[__webpack_require__.e(18), __webpack_require__.e(24)]).then(__webpack_require__.bind(null, /*! ../../papathemes/dropdown-swatches */ "./assets/js/papathemes/dropdown-swatches.js")).then(function (module) {
        return module.default(_this, {
          hideOriginalSwatches: _this.context.swatch_option_display_type === 'dropdown'
        });
      });
    }
  }

  // papathemes-beautify
  var _proto = ProductDetails.prototype;
  _proto.initTabScrollToViewport = function initTabScrollToViewport() {
    var _this2 = this;
    var $body = $('body');
    var $quickView = this.$scope.closest('.quickView').first();
    $quickView.css('position', 'relative');
    var resumeStickyHeader;
    var scrollToView = function scrollToView(el) {
      var $target = $($(el).attr('href'), _this2.$scope).first();
      if ($quickView.length > 0) {
        var h = $quickView.scrollTop();
        var $el = $target;
        var i = 0;
        while (!$el.is('.quickView') && $el.length > 0 && i++ < 20) {
          h += $el.position().top;
          $el = $el.offsetParent();
        }
        $quickView.animate({
          scrollTop: h - 50
        }, 300);
      } else {
        $('html, body').animate({
          scrollTop: $target.offset().top - 50
        }, {
          duration: 300,
          // skip sticky header while scrolling to the tab content
          start: function start() {
            clearTimeout(resumeStickyHeader);
            $body.addClass('_skipCheckScrollUpStickyHeader');
          },
          complete: function complete() {
            return $('html, body').clearQueue();
          },
          always: function always() {
            clearTimeout(resumeStickyHeader);
            resumeStickyHeader = setTimeout(function () {
              return $body.removeClass('_skipCheckScrollUpStickyHeader');
            }, 200);
          }
        });
      }
    };
    $('.productView-description .tab', this.$scope).on('opened', function (event) {
      if (mediumMediaQueryList.matches) {
        scrollToView($(event.target).find('a').get(0));
      }
    });
  }

  // papathemes-beautify
  ;
  _proto.initGoToTab = function initGoToTab() {
    var _this3 = this;
    $('[data-gototab]', this.$scope).on('click', function (event) {
      event.preventDefault();
      var $el = $(event.currentTarget);
      var href = $el.attr('href');
      if (mediumMediaQueryList.matches) {
        var $target = _this3.$scope.find('[data-tab]').find("a[href=\"" + href + "\"").first();
        $target.trigger('click');
      } else {
        var _$target = _this3.$scope.find(href).first();
        Object(_papathemes_theme_utils__WEBPACK_IMPORTED_MODULE_15__["scrollTop"])(_$target.offset().top - 100);
      }
    });
  }

  /**
   * https://stackoverflow.com/questions/49672992/ajax-request-fails-when-sending-formdata-including-empty-file-input-in-safari
   * Safari browser with jquery 3.3.1 has an issue uploading empty file parameters. This function removes any empty files from the form params
   * @param formData: FormData object
   * @returns FormData object
   */;
  _proto.filterEmptyFilesFromForm = function filterEmptyFilesFromForm(formData) {
    try {
      for (var _iterator = _createForOfIteratorHelperLoose(formData), _step; !(_step = _iterator()).done;) {
        var _step$value = _step.value,
          key = _step$value[0],
          val = _step$value[1];
        if (val instanceof File && !val.name && !val.size) {
          formData.delete(key);
        }
      }
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return formData;
  };
  _proto.setProductVariant = function setProductVariant() {
    if (this.context.isAMP) {
      return;
    }
    var unsatisfiedRequiredFields = [];
    var options = [];
    $.each($('[data-product-attribute]'), function (index, value) {
      var optionLabel = value.children[0].innerText;
      var optionTitle = optionLabel.split(':')[0].trim();
      var required = optionLabel.toLowerCase().includes('required');
      var type = value.getAttribute('data-product-attribute');
      if ((type === 'input-file' || type === 'input-text' || type === 'input-number') && value.querySelector('input').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'textarea' && value.querySelector('textarea').value === '' && required) {
        unsatisfiedRequiredFields.push(value);
      }
      if (type === 'date') {
        var isSatisfied = Array.from(value.querySelectorAll('select')).every(function (select) {
          return select.selectedIndex !== 0;
        });
        if (isSatisfied) {
          var dateString = Array.from(value.querySelectorAll('select')).map(function (x) {
            return x.value;
          }).join('-');
          options.push(optionTitle + ":" + dateString);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-select') {
        var select = value.querySelector('select');
        var selectedIndex = select.selectedIndex;
        if (selectedIndex !== 0) {
          options.push(optionTitle + ":" + select.options[selectedIndex].innerText);
          return;
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
      if (type === 'set-rectangle' || type === 'set-radio' || type === 'swatch' || type === 'input-checkbox' || type === 'product-list') {
        var checked = value.querySelector('input:checked'); // papathemes-beautify edited
        if (checked) {
          if (type === 'set-rectangle' || type === 'set-radio' || type === 'product-list') {
            var label = checked.labels ? checked.labels[0].innerText : $("label[for=" + checked.id + "]").first().text();
            if (label) {
              options.push(optionTitle + ":" + label);
            }
          }
          if (type === 'swatch') {
            var _label = checked.labels ? checked.labels[0].children[0] : $("label[for=" + checked.id + "]").children().get(0);
            if (_label) {
              options.push(optionTitle + ":" + _label.title);
            }
          }
          if (type === 'input-checkbox') {
            options.push(optionTitle + ":Yes");
          }
          return;
        }
        if (type === 'input-checkbox') {
          options.push(optionTitle + ":No");
        }
        if (required) {
          unsatisfiedRequiredFields.push(value);
        }
      }
    });
    var productVariant = unsatisfiedRequiredFields.length === 0 ? options.sort().join(', ') : 'unsatisfied';
    var view = $('.productView');
    if (productVariant) {
      productVariant = productVariant === 'unsatisfied' ? '' : productVariant;
      if (view.attr('data-event-type')) {
        view.attr('data-product-variant', productVariant);
      } else {
        var productName = view.find('.productView-title')[0].innerText;
        var card = $("[data-name=" + JSON.stringify(productName) + "]"); // Fixed by PapaThemes
        card.attr('data-product-variant', productVariant);
      }
    }
  }

  /**
   * Since $productView can be dynamically inserted using render_with,
   * We have to retrieve the respective elements
   *
   * @param $scope
   */;
  _proto.getViewModel = function getViewModel($scope) {
    return {
      $priceWithTax: $('[data-product-price-with-tax]', $scope),
      $priceWithoutTax: $('[data-product-price-without-tax]', $scope),
      rrpWithTax: {
        $div: $('.rrp-price--withTax', $scope),
        $span: $('[data-product-rrp-with-tax]', $scope)
      },
      rrpWithoutTax: {
        $div: $('.rrp-price--withoutTax', $scope),
        $span: $('[data-product-rrp-price-without-tax]', $scope)
      },
      nonSaleWithTax: {
        $div: $('.non-sale-price--withTax', $scope),
        $span: $('[data-product-non-sale-price-with-tax]', $scope)
      },
      nonSaleWithoutTax: {
        $div: $('.non-sale-price--withoutTax', $scope),
        $span: $('[data-product-non-sale-price-without-tax]', $scope)
      },
      priceSaved: {
        $div: $('.price-section--saving', $scope),
        $span: $('[data-product-price-saved]', $scope)
      },
      priceNowLabel: {
        $span: $('.price-now-label', $scope)
      },
      priceLabel: {
        $span: $('.price-label', $scope)
      },
      $weight: $('.productView-info [data-product-weight]', $scope),
      $increments: $('.form-field--increments :input', $scope),
      $addToCart: $('#form-action-addToCart', $scope),
      $wishlistVariation: $('[data-wishlist-add] [name="variation_id"]', $scope),
      stock: {
        $container: $('.form-field--stock, .productView-info-name--stock, .productView-info-value--stock', $scope),
        // papathemes-beautify edited
        $input: $('[data-product-stock]', $scope),
        $badge: $('.productView-stockLabel', $scope) // papathemes-beautify
      },

      sku: {
        $label: $('dt.sku-label', $scope),
        $value: $('[data-product-sku]', $scope)
      },
      upc: {
        $label: $('dt.upc-label', $scope),
        $value: $('[data-product-upc]', $scope)
      },
      mpn: {
        $label: $('dt.mpn-label', $scope),
        $value: $('[data-product-mpn]', $scope)
      },
      quantity: {
        $text: $('.incrementTotal', $scope),
        $input: $('[name=qty\\[\\]]', $scope)
      },
      $bulkPricing: $('.productView-info-bulkPricing', $scope)
    };
  }

  /**
   * Checks if the current window is being run inside an iframe
   * @returns {boolean}
   */;
  _proto.isRunningInIframe = function isRunningInIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }

  /**
   *
   * Handle product options changes
   *
   */;
  _proto.productOptionsChanged = function productOptionsChanged(event) {
    var _this4 = this;
    var $changedOption = $(event.target);
    var $form = $changedOption.parents('form');
    var productId = $('[name="product_id"]', $form).val();

    // Do not trigger an ajax request if it's a file or if the browser doesn't support FormData
    if ($changedOption.attr('type') === 'file' || window.FormData === undefined) {
      return;
    }

    // Supermarket: display selected swatch title
    if ($changedOption.data('productAttributeLabel')) {
      $changedOption.closest('[data-product-attribute]').find('[data-option-value]').html($changedOption.data('productAttributeLabel'));
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(productId, supermarketSerialize($form), 'products/bulk-discount-rates', function (err, response) {
      var productAttributesData = response.data || {};
      var productAttributesContent = response.content || {};
      _this4.updateProductAttributes(productAttributesData);
      _this4.updateView(productAttributesData, productAttributesContent);
      _utils_banner_utils__WEBPACK_IMPORTED_MODULE_12__["default"].dispatchProductBannerEvent(productAttributesData);
    });
  };
  _proto.showProductImage = function showProductImage(image) {
    if (lodash_isPlainObject__WEBPACK_IMPORTED_MODULE_2___default()(image)) {
      var zoomImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.zoom_size
      }
      /*
          Should match zoom size used for data-zoom-image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */);

      var mainImageUrl = _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data, {
        '1x': this.context.product_size
      }
      /*
          Should match fallback image size used for the main product image in
          components/products/product-view.html
          Note that this will only be used as a fallback image for browsers that do not support srcset
          Also note that getSrcset returns a simple src string when exactly one size is provided
      */);

      var mainImageSrcset = this.context.product_image_responsive ? _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].tools.imageSrcset.getSrcset(image.data) : '';
      this.imageGallery.setAlternateImage({
        // mainImageUrl: `${mainImageUrl}?imbypass=on`,
        // zoomImageUrl: `${zoomImageUrl}?imbypass=on`,
        mainImageUrl: mainImageUrl,
        zoomImageUrl: zoomImageUrl,
        mainImageSrcset: mainImageSrcset
      });
    } else {
      this.imageGallery.restoreImage();
    }
  }

  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */;
  _proto.listenQuantityChange = function listenQuantityChange() {
    var _this5 = this;
    this.$scope.on('click', '[data-quantity-change] button', function (event) {
      event.preventDefault();
      var $target = $(event.currentTarget);
      var viewModel = _this5.getViewModel(_this5.$scope);
      var $input = viewModel.quantity.$input;
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
      } else if (qty > 1) {
        // If quantity min option is set
        if (quantityMin > 0) {
          // Check quantity does not fall below min
          if (qty - 1 >= quantityMin) {
            qty--;
          }
        } else {
          qty--;
        }
      }

      // update hidden input
      viewModel.quantity.$input.val(qty);
      // update text
      viewModel.quantity.$text.text(qty);
    });

    // --------------------------------------------------------------------
    // Giao - supermarket:
    // Fix problem when enter on quantity box won't decrease 1 unit
    // --------------------------------------------------------------------
    this.getViewModel(this.$scope).quantity.$input.on('keypress', function (event) {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });

    // --------------------------------------------------------------------
  }

  // papathemes-chiara added for also-bought
  ;
  _proto.addProductToCartAsync = function addProductToCartAsync() {
    var _this6 = this;
    return new Promise(function (resolve) {
      var $form = $('form[data-cart-item-add]', _this6.$scope);
      var form = $form.get(0);
      var $addToCartBtn = $('#form-action-addToCart', _this6.$scope);
      var originalBtnVal = $addToCartBtn.val();
      var waitMessage = $addToCartBtn.data('waitMessage');

      // Do not do AJAX if browser doesn't support FormData
      if (window.FormData === undefined) {
        return;
      }
      $addToCartBtn.val(waitMessage).prop('disabled', true);
      _this6.$overlay.show();

      // Add item to cart
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(_this6.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, response) {
          var errorMessage;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // AlsoBought Mod
                  errorMessage = err || response.data.error;
                  $addToCartBtn.val(originalBtnVal).prop('disabled', false);
                  _this6.$overlay.hide();
                  resolve([err, response]);
                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref3.apply(this, arguments);
        };
      }());
    });
  }

  /**
   *
   * Add a product to cart
   *
   */;
  _proto.addProductToCart = function addProductToCart(event, form) {
    var _this7 = this;
    var $addToCartBtn = $('#form-action-addToCart', $(event.target));
    var originalBtnVal = $addToCartBtn.val();
    var waitMessage = $addToCartBtn.data('waitMessage');

    // Do not do AJAX if browser doesn't support FormData
    if (window.FormData === undefined) {
      return;
    }

    // Supermarket:
    // Somehow Safari iOS doesn't work right with FormData,
    // so we submit the form as normal.
    if (this.context.isAMP) {
      $(form).attr('target', '_top');
      return;
    }

    // Prevent default
    event.preventDefault();
    $addToCartBtn.val(waitMessage).prop('disabled', true);
    this.$overlay.show();

    // Add item to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemAdd(this.filterEmptyFilesFromForm(new FormData(form)), /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, response) {
        var errorMessage, tmp, modal, _modal;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                errorMessage = err || response.data.error;
                $addToCartBtn.val(originalBtnVal).prop('disabled', false);
                _this7.$overlay.hide();

                // Guard statement
                if (!errorMessage) {
                  _context2.next = 7;
                  break;
                }
                // Strip the HTML from the error message
                tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;
                return _context2.abrupt("return", Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["showAlertModal"])(tmp.textContent || tmp.innerText));
              case 7:
                if (!_this7.context.redirect_cart) {
                  _context2.next = 10;
                  break;
                }
                _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);
                return _context2.abrupt("return");
              case 10:
                if (!(_this7.context.add_to_cart_popup === 'cart')) {
                  _context2.next = 14;
                  break;
                }
                // close quick-view modal
                modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
                if (modal) {
                  modal.close();
                }
                return _context2.abrupt("return", Object(_papathemes_utils__WEBPACK_IMPORTED_MODULE_16__["openCartPreview"])(response.data.cart_item.id));
              case 14:
                // Open preview modal and update content
                if (_this7.previewModal) {
                  // Supermarket OBPS Mod
                  _modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_10__["defaultModal"])();
                  _modal.close();
                  if (_this7.context.add_to_cart_popup !== 'hide') {
                    _this7.previewModal.open();
                  }
                  _this7.updateCartContent(_this7.previewModal, response.data.cart_item.id);
                } else {
                  _this7.$overlay.show();
                  // if no modal, redirect to the cart page
                  _this7.redirectTo(response.data.cart_item.cart_url || _this7.context.urls.cart);
                }
              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  }

  /**
   * Get cart contents
   *
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.getCartContent = function getCartContent(cartItemId, onComplete) {
    var options = {
      template: 'cart/preview',
      params: {
        suggest: cartItemId
      },
      config: {
        cart: {
          suggestions: {
            limit: 4
          }
        }
      }
    };
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent(options, onComplete);
  }

  /**
   * Redirect to url
   *
   * @param {String} url
   */;
  _proto.redirectTo = function redirectTo(url) {
    if (this.isRunningInIframe() && !window.iframeSdk) {
      window.top.location = url;
    } else {
      window.location = url;
    }
  }

  /**
   * Update cart content
   *
   * @param {Modal} modal
   * @param {String} cartItemId
   * @param {Function} onComplete
   */;
  _proto.updateCartContent = function updateCartContent(modal, cartItemId, onComplete) {
    var _this8 = this;
    this.getCartContent(cartItemId, function (err, response) {
      if (err) {
        return;
      }
      modal.updateContent(response);
      _this8.applyModalAutoClose(modal); // Supermarket

      // Update cart counter
      var $body = $('body');
      var $cartQuantity = $('[data-cart-quantity]', modal.$content);
      var $cartCounter = $('.navUser-action .cart-count');
      var quantity = $cartQuantity.data('cartQuantity') || 0;
      $cartCounter.addClass('cart-count--positive');
      $body.trigger('cart-quantity-update', quantity);
      if (onComplete) {
        onComplete(response);
      }

      // Supermarket - OBPS Mod
      shake($('.navUser-item--cart > .navUser-action'));
    });
  }

  /**
   * Show an message box if a message is passed
   * Hide the box if the message is empty
   * @param  {String} message
   */;
  _proto.showMessageBox = function showMessageBox(message) {
    var $messageBox = $('.productAttributes-message', this.$scope); // Papathemes fix missing $scope

    if (message) {
      $('.alertBox-message', $messageBox).text(message);
      $messageBox.show();
    } else {
      $messageBox.hide();
    }
  }

  /**
   * Hide the pricing elements that will show up only when the price exists in API
   * @param viewModel
   */;
  _proto.clearPricingNotFound = function clearPricingNotFound(viewModel) {
    viewModel.rrpWithTax.$div.hide();
    viewModel.rrpWithoutTax.$div.hide();
    viewModel.nonSaleWithTax.$div.hide();
    viewModel.nonSaleWithoutTax.$div.hide();
    viewModel.priceSaved.$div.hide();
    viewModel.priceNowLabel.$span.hide();
    viewModel.priceLabel.$span.hide();
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updatePriceView = function updatePriceView(viewModel, price) {
    this.clearPricingNotFound(viewModel);
    if (price.with_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithTax.html(price.with_tax.formatted);

      // papathemes-beautify
      if (price.rrp_with_tax || price.non_sale_price_with_tax) {
        viewModel.$priceWithTax.addClass('_hasSale');
      } else {
        viewModel.$priceWithTax.removeClass('_hasSale');
      }
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);

      // papathemes-beautify
      if (price.rrp_without_tax || price.non_sale_price_without_tax) {
        viewModel.$priceWithoutTax.addClass('_hasSale');
      } else {
        viewModel.$priceWithoutTax.removeClass('_hasSale');
      }
    }
    if (price.rrp_with_tax) {
      viewModel.rrpWithTax.$div.show();
      viewModel.rrpWithTax.$span.html(price.rrp_with_tax.formatted);
    }
    if (price.rrp_without_tax) {
      viewModel.rrpWithoutTax.$div.show();
      viewModel.rrpWithoutTax.$span.html(price.rrp_without_tax.formatted);
    }
    if (price.saved) {
      viewModel.priceSaved.$div.show();
      viewModel.priceSaved.$span.html(price.saved.formatted);
    }
    if (price.non_sale_price_with_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithTax.$span.html(price.non_sale_price_with_tax.formatted);
    }
    if (price.non_sale_price_without_tax) {
      viewModel.priceLabel.$span.hide();
      viewModel.nonSaleWithoutTax.$div.show();
      viewModel.priceNowLabel.$span.show();
      viewModel.nonSaleWithoutTax.$span.html(price.non_sale_price_without_tax.formatted);
    }
  }

  /**
   * Update the view of price, messages, SKU and stock options when a product option changes
   * @param  {Object} data Product attribute data
   */;
  _proto.updateView = function updateView(data, content) {
    if (content === void 0) {
      content = null;
    }
    var viewModel = this.getViewModel(this.$scope);
    this.showMessageBox(data.stock_message || data.purchasing_message);
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.price)) {
      this.updatePriceView(viewModel, data.price);
    }
    if (lodash_isObject__WEBPACK_IMPORTED_MODULE_1___default()(data.weight)) {
      viewModel.$weight.html(data.weight.formatted);
    }

    // Set variation_id if it exists for adding to wishlist
    if (data.variantId) {
      viewModel.$wishlistVariation.val(data.variantId);
    }

    // If SKU is available
    if (data.sku) {
      viewModel.sku.$value.text(data.sku);
      viewModel.sku.$label.show();
    } else {
      viewModel.sku.$label.hide();
      viewModel.sku.$value.text('');
    }

    // If UPC is available
    if (data.upc) {
      viewModel.upc.$value.text(data.upc);
      viewModel.upc.$label.show();
    } else {
      viewModel.upc.$label.hide();
      viewModel.upc.$value.text('');
    }

    // If MPN is available
    if (data.mpn) {
      viewModel.mpn.$value.text(data.mpn);
      viewModel.mpn.$label.show();
    } else {
      if (viewModel.mpn.$value.data('originalMpn')) {
        viewModel.mpn.$value.text(viewModel.mpn.$value.data('originalMpn'));
        viewModel.mpn.$label.show();
      } else {
        viewModel.mpn.$label.hide();
        viewModel.mpn.$value.text('');
      }
    }

    // if stock view is on (CP settings)
    if (viewModel.stock.$container.length && lodash_isNumber__WEBPACK_IMPORTED_MODULE_0___default()(data.stock)) {
      // if the stock container is hidden, show
      viewModel.stock.$container.removeClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    } else {
      viewModel.stock.$container.addClass('u-hiddenVisually');
      viewModel.stock.$input.text(data.stock);
    }

    // papathemes-beautify: show / hide stock badge
    if (data.instock && data.purchasable) {
      viewModel.stock.$badge.removeClass('_outstock').each(function (i, el) {
        $(el).text($(el).data('instockMessage'));
      });
    } else {
      // viewModel.stock.$badge.addClass('_outstock').text(data.stock_message || data.purchasing_message);
      viewModel.stock.$badge.addClass('_outstock').each(function (i, el) {
        $(el).text($(el).data('outstockMessage'));
      });
    }
    this.updateDefaultAttributesForOOS(data);

    // If Bulk Pricing rendered HTML is available
    if (data.bulk_discount_rates && content) {
      viewModel.$bulkPricing.html(content);
    } else if (typeof data.bulk_discount_rates !== 'undefined') {
      viewModel.$bulkPricing.html('');
    }
    if (data.purchasable) {
      this.$scope.find('._addToCartVisibility').filter(':hidden').show();
    } else {
      this.$scope.find('._addToCartVisibility').hide();
    }
  };
  _proto.updateDefaultAttributesForOOS = function updateDefaultAttributesForOOS(data) {
    var viewModel = this.getViewModel(this.$scope);
    if (!data.purchasable || !data.instock) {
      viewModel.$addToCart.prop('disabled', true);
      viewModel.$increments.prop('disabled', true);
    } else {
      viewModel.$addToCart.prop('disabled', false);
      viewModel.$increments.prop('disabled', false);
    }
  }

  /**
   * Hide or mark as unavailable out of stock attributes if enabled
   * @param  {Object} data Product attribute data
   */;
  _proto.updateProductAttributes = function updateProductAttributes(data) {
    var _this9 = this;
    var behavior = data.out_of_stock_behavior;
    var inStockIds = data.in_stock_attributes;
    var outOfStockMessage = " (" + data.out_of_stock_message + ")";

    // papathemes-chiara edited for also-bought
    this.price = data.price;
    this.$scope.trigger('price-change');
    this.showProductImage(data.image);
    if (behavior !== 'hide_option' && behavior !== 'label_option') {
      return;
    }
    $('[data-product-attribute-value]', this.$scope).each(function (i, attribute) {
      var $attribute = $(attribute);
      var attrId = parseInt($attribute.data('productAttributeValue'), 10);
      if (inStockIds.indexOf(attrId) !== -1) {
        _this9.enableAttribute($attribute, behavior, outOfStockMessage);
      } else {
        _this9.disableAttribute($attribute, behavior, outOfStockMessage);
      }
    });
    this.$scope.trigger('updateProductAttributes'); // papathemes-beautify for dropdown-swatches
  };
  _proto.disableAttribute = function disableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.disableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.hide();
    } else {
      $attribute.addClass('unavailable');
    }
  };
  _proto.disableSelectOptionAttribute = function disableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    var $select = $attribute.parent();
    if (behavior === 'hide_option') {
      $attribute.toggleOption(false);
      // If the attribute is the selected option in a select dropdown, select the first option (MERC-639)
      if ($select.val() === $attribute.attr('value')) {
        $select[0].selectedIndex = 0;
      }
    } else {
      $attribute.attr('disabled', 'disabled');
      $attribute.html($attribute.html().replace(outOfStockMessage, '') + outOfStockMessage);
    }
  };
  _proto.enableAttribute = function enableAttribute($attribute, behavior, outOfStockMessage) {
    if (this.getAttributeType($attribute) === 'set-select') {
      return this.enableSelectOptionAttribute($attribute, behavior, outOfStockMessage);
    }
    if (behavior === 'hide_option') {
      $attribute.show();
    } else {
      $attribute.removeClass('unavailable');
    }
  };
  _proto.enableSelectOptionAttribute = function enableSelectOptionAttribute($attribute, behavior, outOfStockMessage) {
    if (behavior === 'hide_option') {
      $attribute.toggleOption(true);
    } else {
      $attribute.prop('disabled', false);
      $attribute.html($attribute.html().replace(outOfStockMessage, ''));
    }
  };
  _proto.getAttributeType = function getAttributeType($attribute) {
    var $parent = $attribute.closest('[data-product-attribute]');
    return $parent ? $parent.data('productAttribute') : null;
  }

  /**
   * Allow radio buttons to get deselected
   */;
  _proto.initRadioAttributes = function initRadioAttributes() {
    var _this10 = this;
    $('[data-product-attribute] input[type="radio"]', this.$scope).each(function (i, radio) {
      var $radio = $(radio);

      // Only bind to click once
      if ($radio.attr('data-state') !== undefined) {
        $radio.on('click', function () {
          if ($radio.data('state') === true) {
            $radio.prop('checked', false);
            $radio.data('state', false);
            $radio.trigger('change');
          } else {
            $radio.data('state', true);
          }
          _this10.initRadioAttributes();
        });
      }
      $radio.attr('data-state', $radio.prop('checked'));
    });
  }

  /**
   * Check for fragment identifier in URL requesting a specific tab
   */;
  _proto.getTabRequests = function getTabRequests() {
    if (window.location.hash && window.location.hash.indexOf('#tab-') === 0) {
      var $activeTab = $('.tabs').has("[href='" + window.location.hash + "']");
      var $tabContent = $("" + window.location.hash);
      if ($activeTab.length > 0) {
        $activeTab.find('.tab').removeClass('is-active').has("[href='" + window.location.hash + "']").addClass('is-active');
        $tabContent.addClass('is-active').siblings().removeClass('is-active');
      }
    }
  }

  /**
   * Init custom tabs by parsing product description
   * (Added by Papathemes - Supermarket)
   */;
  _proto.initCustomTabs = function initCustomTabs() {
    var $customTabs = $('[data-custom-tab]', this.$scope);
    if ($customTabs.length === 0) {
      return;
    }
    var $tabs = $('.productView-description > .tabs', this.$scope);
    var $tabsContent = $('.productView-description > .tabs-contents', this.$scope);
    if ($tabs.length === 0 || $tabsContent.length === 0) {
      return;
    }
    $customTabs.each(function (i, el) {
      var $el = $(el);
      var $title = $el.find('[data-custom-tab-title]');
      var title = $title.html();
      var expand = $title.data('expand');
      if (!expand) {
        expand = 'View All';
      }
      var close = $title.data('close');
      if (!close) {
        close = 'Close';
      }
      $title.remove();
      var content = $el.html();
      $el.remove();
      $tabs.append("<li class=\"tab tab--custom tab--custom-" + i + "\"><a class=\"tab-title\" href=\"#tab-custom-" + i + "\">" + title + "</a></li>");
      $tabsContent.append("<div class=\"tab-content tab-content--custom tab-content--custom-" + i + "\" id=\"tab-custom-" + i + "\" data-papathemes-mobile-collapse><h2 class=\"beautify__page-heading\">" + title + "</h2><div class=\"productView-custom-tabContent papathemes-mobile-collapse-content\" data-papathemes-mobile-collapse-content>" + content + "</div><a href=\"#\" class=\"papathemes-mobile-collapse-handle\" data-papathemes-mobile-collapse-handle><span class=\"on\">" + expand + "</span><span class=\"off\">" + close + "</span></a></div>");
    });
  }

  // Papathemes - Supermarket
  ;
  _proto.onMiniPreviewModalOpen = function onMiniPreviewModalOpen() {
    $('body').addClass('has-activeModal--miniPreview');
  }

  // Papathemes - Supermarket
  ;
  _proto.onMiniPreviewModalClose = function onMiniPreviewModalClose() {
    $('body').removeClass('has-activeModal--miniPreview');
    if (typeof this.autoCloseTimer !== 'undefined' && this.autoCloseTimer) {
      window.clearInterval(this.autoCloseTimer);
      this.autoCloseTimer = null;
    }
  }

  // Papathemes - Supermarket
  ;
  _proto.applyModalAutoClose = function applyModalAutoClose(modal) {
    var $autoCloseEl = modal.$modal.find('[data-auto-close]');
    if ($autoCloseEl.length > 0) {
      var sec = $autoCloseEl.data('autoClose') || 5;
      var $count = $autoCloseEl.find('.count');
      $count.html(sec);
      modal.autoCloseTimer = window.setInterval(function () {
        // eslint-disable-line
        if (sec > 1) {
          sec--;
          $count.html(sec);
        } else {
          window.clearInterval(modal.autoCloseTimer);
          modal.autoCloseTimer = null; // eslint-disable-line
          modal.close();
        }
      }, 1000);
    }
  };
  return ProductDetails;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/banner-utils.js":
/*!******************************************************!*\
  !*** ./assets/js/theme/common/utils/banner-utils.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ie_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ie-helpers */ "./assets/js/theme/common/utils/ie-helpers.js");

var bannerUtils = {
  dispatchProductBannerEvent: function dispatchProductBannerEvent(productAttributes) {
    if (!productAttributes.price || _ie_helpers__WEBPACK_IMPORTED_MODULE_0__["isBrowserIE"]) return;
    var price = 0;
    if (!productAttributes.price.price_range) {
      if (productAttributes.price.without_tax) {
        price = productAttributes.price.without_tax.value;
      }
      if (productAttributes.price.with_tax) {
        price = productAttributes.price.with_tax.value;
      }
    }
    var evt = new CustomEvent('bigcommerce.productpricechange', {
      detail: {
        amount: price
      }
    });
    window.dispatchEvent(evt);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (bannerUtils);

/***/ }),

/***/ "./assets/js/theme/common/utils/ie-helpers.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/ie-helpers.js ***!
  \****************************************************/
/*! exports provided: isBrowserIE, convertIntoArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowserIE", function() { return isBrowserIE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertIntoArray", function() { return convertIntoArray; });
var isBrowserIE = !!document.documentMode;
var convertIntoArray = function convertIntoArray(collection) {
  return Array.prototype.slice.call(collection);
};

/***/ }),

/***/ "./assets/js/theme/product/image-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/image-gallery.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageGallery; });
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/clone */ "./node_modules/lodash/clone.js");
/* harmony import */ var lodash_clone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_clone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var baguettebox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! baguettebox */ "./node_modules/baguettebox.js/dist/baguetteBox.min.js");
/* harmony import */ var baguettebox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(baguettebox__WEBPACK_IMPORTED_MODULE_4__);


// ============================================================================
// PAPATHEMES SARAHMARKET CUSTOMIZATION:
// - Using slick carousel for image thumbnails.
// - Using baguetteBox for image lightbox.
// ============================================================================




var ImageGallery = /*#__PURE__*/function () {
  function ImageGallery($gallery) {
    this.$mainCarousel = $gallery.find('[data-image-gallery-main]');
    this.$navCarousel = $gallery.find('[data-image-gallery-nav]');
    var $defSlide = this.$mainCarousel.find('.slick-current');
    var defSlideIdx = $defSlide.parent().children().index($defSlide);
    this.currentSlideIndex = defSlideIdx;
    var uid = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()('');
    if (this.$mainCarousel.attr('id') === '') {
      this.$mainCarousel.attr('id', "imageGalleryMainCarousel" + uid);
    }
    if (this.$navCarousel.attr('id') === '') {
      this.$navCarousel.attr('id', "imageGalleryNavCarousel" + uid);
    }
  }
  var _proto = ImageGallery.prototype;
  _proto.init = function init() {
    this.bindEvents();
  };
  _proto.setMainImage = function setMainImage(imgObj) {
    this.currentImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(imgObj);
    this.swapMainImage();
  };
  _proto.setAlternateImage = function setAlternateImage(imgObj) {
    if (!this.savedImage) {
      this.savedImage = lodash_clone__WEBPACK_IMPORTED_MODULE_0___default()(this.currentImage);
    }
    this.setMainImage(imgObj);
  };
  _proto.restoreImage = function restoreImage() {
    if (this.savedImage) {
      this.setMainImage(this.savedImage);
      delete this.savedImage;
    }
  };
  _proto.setActiveThumb = function setActiveThumb() {
    var i = this.$mainCarousel.slick('slickCurrentSlide');
    this.$navCarousel.find('.slick-slide').removeClass('slick-current').eq(i).addClass('slick-current');
  };
  _proto.swapMainImage = function swapMainImage() {
    /*
    try {
        this.$mainCarousel.slick('slickGoTo', this.currentSlideIndex);
    } catch (e) {
        // ignore
    }
    */
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.slick-current', this.$navCarousel).removeClass('slick-current');
    this.$mainCarousel.find('.slick-slide').eq(this.currentSlideIndex).find('img').attr('src', this.currentImage.mainImageUrl);
    this.$mainCarousel.find('.slick-slide').eq(this.currentSlideIndex).find('img').attr('srcset', this.currentImage.mainImageSrcset);
    this.$mainCarousel.find('.slick-slide').eq(this.currentSlideIndex).find('a').attr('href', this.currentImage.zoomImageUrl);

    // empty lightbox contents of current galley so that it will be created again
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('#baguetteBox-slider').html('');
    baguettebox__WEBPACK_IMPORTED_MODULE_4___default.a.run("#" + this.$mainCarousel.attr('id')); // init again
  };
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    this.$mainCarousel.on('init', function () {
      var $img = jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-slick-index=\"" + _this.currentSlideIndex + "\"] img", _this.$mainCarousel);
      var $a = $img.closest('a');
      _this.currentImage = {
        mainImageUrl: $a.data('originalImg') || $img.attr('src'),
        zoomImageUrl: $a.data('originalZoom'),
        mainImageSrcset: $a.data('originalSrcset'),
        $selectedThumb: null
      };
    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      _this.currentSlideIndex = nextSlide;
      var $img = jquery__WEBPACK_IMPORTED_MODULE_2___default()("[data-slick-index=\"" + nextSlide + "\"] img", _this.$mainCarousel);
      var $a = $img.closest('a');
      _this.currentImage = {
        mainImageUrl: $a.data('originalImg') || $img.attr('src'),
        zoomImageUrl: $a.data('originalZoom'),
        mainImageSrcset: $a.data('originalSrcset'),
        $selectedThumb: null
      };
      _this.swapMainImage();
      _this.savedImage = null;
    }).on('afterChange', function () {
      _this.setActiveThumb();
    }).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      initialSlide: this.currentSlideIndex,
      asNavFor: this.$navCarousel.length > 0 ? "#" + this.$navCarousel.attr('id') : null,
      swipe: false,
      arrows: false,
      responsive: [{
        breakpoint: 800,
        settings: {
          swipe: true
        }
      }]
    });

    // setTimeout(() => {
    this.$navCarousel.on('setPosition', function () {
      try {
        var slick = _this.$navCarousel.slick('getSlick');
        if (slick.options.slidesToShow >= slick.slideCount) {
          _this.$navCarousel.find('.slick-track').css('transform', 'none');
        }
      } catch (e) {
        // ignore
      }
    });
    this.$navCarousel.on('init', function () {
      _this.$navCarousel.find('.slick-slide').on('keypress', function (event) {
        var keyCode = event.keyCode || event.which;
        if (keyCode === 13 || keyCode === 32) {
          event.preventDefault();
          _this.$mainCarousel.slick('slickGoTo', jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target).data('slickIndex'));
        }
      });
    });
    if (this.$navCarousel.data('imageGalleryNavHorizontal')) {
      this.$navCarousel.slick({
        slidesToShow: parseInt(this.$navCarousel.data('image-gallery-nav-slides'), 10),
        slidesToScroll: 1,
        infinite: false,
        initialSlide: this.currentSlideIndex,
        asNavFor: "#" + this.$mainCarousel.attr('id'),
        arrows: true,
        focusOnSelect: true,
        centerPadding: 0,
        adaptiveHeight: true,
        // variableWidth: true,
        lazyLoad: 'progressive',
        responsive: [{
          breakpoint: 550,
          settings: {
            // arrows: false,
          }
        }]
      });
    } else {
      this.$navCarousel.slick({
        slidesToShow: parseInt(this.$navCarousel.data('image-gallery-nav-slides'), 10),
        slidesToScroll: 1,
        infinite: false,
        initialSlide: this.currentSlideIndex,
        asNavFor: "#" + this.$mainCarousel.attr('id'),
        arrows: true,
        vertical: true,
        verticalSwiping: true,
        focusOnSelect: true,
        centerPadding: 0,
        adaptiveHeight: true,
        lazyLoad: 'progressive',
        responsive: [{
          breakpoint: 550,
          settings: {
            vertical: false,
            verticalSwiping: false
            // slidesToShow: 1,
            // arrows: false,
            // variableWidth: true,
          }
        }]
      });
    }
    // }, 200);

    baguettebox__WEBPACK_IMPORTED_MODULE_4___default.a.run("#" + this.$mainCarousel.attr('id'));
  };
  return ImageGallery;
}();


/***/ }),

/***/ "./assets/js/theme/wishlist.js":
/*!*************************************!*\
  !*** ./assets/js/theme/wishlist.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WishList; });
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var WishList = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(WishList, _PageManager);
  function WishList(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.options = {
      template: 'account/add-wishlist'
    };
    return _assertThisInitialized(_this) || _assertThisInitialized(_this);
  }

  /**
   * Creates a confirm box before deleting all wish lists
   */
  var _proto = WishList.prototype;
  _proto.wishlistDeleteConfirm = function wishlistDeleteConfirm() {
    var _this2 = this;
    $('body').on('click', '[data-wishlist-delete]', function (event) {
      var confirmed = window.confirm(_this2.context.wishlistDelete);
      if (confirmed) {
        return true;
      }
      event.preventDefault();
    });
  };
  _proto.registerAddWishListValidation = function registerAddWishListValidation($addWishlistForm) {
    var _this3 = this;
    this.addWishlistValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.wishlist-form input[type="submit"]'
    });
    this.addWishlistValidator.add([{
      selector: '.wishlist-form input[name="wishlistname"]',
      validate: function validate(cb, val) {
        var result = val.length > 0;
        cb(result);
      },
      errorMessage: 'You must enter a wishlist name.'
    }]);
    $addWishlistForm.on('submit', function (event) {
      _this3.addWishlistValidator.performCheck();
      if (_this3.addWishlistValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.onReady = function onReady() {
    var $addWishListForm = $('.wishlist-form');
    if ($addWishListForm.length) {
      this.registerAddWishListValidation($addWishListForm);
    }
    this.wishlistDeleteConfirm();
  };
  return WishList;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9hbHNvLWJvdWdodC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3Byb2R1Y3QtZGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Jhbm5lci11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2llLWhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvd2lzaGxpc3QuanMiXSwibmFtZXMiOlsiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInByb21pc2VTZXJpYWwiLCJmdW5jcyIsInJlZHVjZSIsInByb21pc2UiLCJmdW5jIiwidGhlbiIsInJlc3VsdCIsIkFycmF5IiwicHJvdG90eXBlIiwiY29uY2F0IiwiYmluZCIsInJlcG9ydEZvcm1WYWxpZGl0eSIsImZvcm0iLCJ2YWxpZCIsImNoZWNrVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIkFsc29Cb3VnaHQiLCJwYXJlbnRQcm9kdWN0RGV0YWlscyIsInRodW1ibmFpbFRlbXBsYXRlIiwicHJvZHVjdERldGFpbHNUZW1wbGF0ZSIsInByaWNlVGVtcGxhdGUiLCJwcmljZVJhbmdlVGVtcGxhdGUiLCJ0YXhMYWJlbFRlbXBsYXRlIiwicmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlIiwicmV0YWlsUHJpY2VUZW1wbGF0ZSIsImxvZ2luUHJpY2VUZW1wbGF0ZSIsIm9wdGlvbnNUb2dnbGVUZW1wbGF0ZSIsInNpbXBsZUZvcm1UZW1wbGF0ZSIsImxvYWRpbmdUZW1wbGF0ZSIsInRlbXBsYXRlQ3VzdG9tVGFncyIsImNvbnRleHQiLCJudW1iZXJUZXh0cyIsInR4dEFsc29Cb3VnaHROdW1iZXJBcnJheSIsInNwbGl0IiwiYWxsTnVtYmVyVGV4dHMiLCJ0eHRBbHNvQm91Z2h0QWxsTnVtYmVyQXJyYXkiLCIkYWxzb0JvdWdodEVsIiwiJCIsIiRwcm9kdWN0Vmlld1Njb3BlIiwiY29uZmlnIiwiZGF0YSIsIm1vbmV5V2l0aFRheCIsInNhbXBsZVByaWNlV2l0aFRheCIsImV4dHJhY3RNb25leSIsIm1vbmV5IiwibW9uZXlXaXRob3V0VGF4Iiwic2FtcGxlUHJpY2VXaXRob3V0VGF4IiwibW9uZXlGYWxsYmFjayIsImFjdGl2ZUN1cnJlbmN5Q29kZSIsImRlZmF1bHRDdXJyZW5jeUNvZGUiLCJnZXQiLCJfbW9uZXkiLCJlbCIsInRleHQiLCJjdXJyZW5jeV90b2tlbiIsInByb2R1Y3RzIiwicHJvZHVjdE5vZGVzIiwib25BZGRBbGxCdXR0b25DbGljayIsIm9uQWRkU2VsZWN0ZWRCdXR0b25DbGljayIsInRodW1iU2l6ZSIsImFsc29ib3VnaHRfdGh1bWJuYWlsX3NpemUiLCJ0aHVtYm5haWxXaWR0aCIsIk51bWJlciIsInRodW1ibmFpbEhlaWdodCIsInJldHJpZXZlQWxzb0JvdWdodFByb2R1Y3RzIiwib24iLCJjdXJyZW5jeUZvcm1hdCIsInZhbHVlIiwiaW5jbHVkZVRheCIsIiR0aHVtYm5haWxzIiwib3B0aW9ucyIsInRlbXBsYXRlIiwiZGV0YWlscyIsInRodW1ibmFpbCIsIiRwcm9kdWN0RWxzIiwibm90IiwicHJvZHVjdElkcyIsIm1hcCIsImxlbmd0aCIsInJlbW92ZUNsYXNzIiwiYWpheCIsInVybCIsIm1ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsInJlcXVpcmVMb2dpbiIsInZhcmlhYmxlcyIsInByb2R1Y3RzQ291bnQiLCJjdXJyZW5jeUNvZGUiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsImhlYWRlcnMiLCJncmFwaFFMVG9rZW4iLCJ4aHJGaWVsZHMiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzdWNjZXNzIiwicmVzcCIsInNpdGUiLCJlZGdlcyIsImZvckVhY2giLCJub2RlIiwiYXZhaWxhYmlsaXR5VjIiLCJzdGF0dXMiLCJwdXNoIiwiaWQiLCJlbnRpdHlJZCIsIm5hbWUiLCJwYXRoIiwiYWRkVG9DYXJ0VXJsIiwicXR5IiwibWluUHVyY2hhc2VRdWFudGl0eSIsImxvYWRpbmdJbWciLCJpbWciLCJkZWZhdWx0SW1hZ2UiLCJkZWZhdWx0UHJvZHVjdEltYWdlIiwiJHByb2R1Y3RFbCIsImZpbHRlciIsInRheENsYXNzUHJlZml4IiwidGF4RGF0YVByZWZpeCIsInByaWNlTGFiZWwiLCJwZHBfcHJpY2VfbGFiZWwiLCJzYWxlUHJpY2VMYWJlbCIsInBkcF9zYWxlX3ByaWNlX2xhYmVsIiwibm9uU2FsZVByaWNlTGFiZWwiLCJwZHBfbm9uX3NhbGVfcHJpY2VfbGFiZWwiLCJyZXRhaWxQcmljZUxhYmVsIiwicGRwX3JldGFpbF9wcmljZV9sYWJlbCIsImNob29zZU9wdGlvbnNUeHQiLCJsb2dpbkZvclByaWNlVHh0IiwibG9naW5VcmwiLCJjaGVja2VkIiwiYWxzb2JvdWdodF9jaGVja2VkIiwicHJpY2UiLCJwcmljZXMiLCJmb3JtYXR0ZWQiLCJub25TYWxlUHJpY2UiLCJiYXNlUHJpY2UiLCJyZXRhaWxQcmljZSIsInByaWNlUmFuZ2UiLCJtaW4iLCJtYXgiLCJyZXRhaWxQcmljZVJhbmdlIiwibG9naW5QcmljZUh0bWwiLCJNdXN0YWNoZSIsInJlbmRlciIsInRheExhYmVsSHRtbCIsInNob3dUYXhMYWJlbCIsInRpdGxlIiwiaW5jbHVkaW5nVGF4VHh0IiwiZXhjbHVkaW5nVGF4VHh0IiwicHJpY2VXaXRoVGF4VHh0IiwicHJpY2VXaXRob3V0VGF4VHh0IiwicmV0YWlsUHJpY2VSYW5nZUh0bWwiLCJyZXRhaWxQcmljZUh0bWwiLCJwcmljZVJhbmdlSHRtbCIsIm9wdGlvbnNUb2dnbGVIdG1sIiwicHJvZHVjdE9wdGlvbnMiLCJwcmljZUh0bWwiLCJmb3JtSHRtbCIsImRldGFpbHNIdG1sIiwidGh1bWJuYWlsSHRtbCIsImFwcGVuZCIsInByb2R1Y3QiLCJQcm9kdWN0RGV0YWlscyIsImVuYWJsZUFsc29Cb3VnaHQiLCIkc2NvcGUiLCJ1cGRhdGVUb3RhbFByaWNlIiwiY29sbGFwc2libGVGYWN0b3J5IiwiJGNvbnRleHQiLCJmaW5kIiwib25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UiLCJDb2xsYXBzaWJsZUV2ZW50cyIsIm9wZW4iLCJvbk9wdGlvbnNPcGVuIiwidXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24iLCIkcGFyZW50UHJvZHVjdEVsIiwidmFsIiwicHJpY2VCeUlkIiwiX3ByaWNlQnlJZCIsInByb2R1Y3RJZCIsIk9iamVjdCIsImtleXMiLCJ0b3RhbCIsImluZGV4T2YiLCJ3aXRoX3RheCIsIndpdGhvdXRfdGF4IiwibW9uZXlfd2l0aF90YXgiLCJtb25leV93aXRob3V0X3RheCIsIiR3aXRoVGF4IiwiJHdpdGhvdXRUYXgiLCJodG1sIiwic2hvdyIsImhpZGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwcm9wIiwidHJpZ2dlciIsImFkZFNlbGVjdGVkUHJvZHVjdHNUb0NhcnQiLCIkY2IiLCJ0YXJnZXQiLCIkdG9nZ2xlIiwiZmlyc3QiLCIkbGFiZWwiLCJhdHRyIiwiJHRodW1iIiwiYWRkQ2xhc3MiLCJoYXNDbGFzcyIsImxvYWRQcm9kdWN0RGV0YWlscyIsIiRjb250ZW50IiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwiJGFsbCIsIiRjaGVja2VkIiwiJGJ0bnMiLCJzdHIiLCIkYnRuIiwiU3RyaW5nIiwicmVwbGFjZSIsInBhcmVudFByb2R1Y3RBZGRlZFRvQ2FydCIsInByb21pc2VzIiwiYWRkUHJvZHVjdFRvQ2FydCIsInJlc3VsdHMiLCIkZm9ybSIsImFkZFByb2R1Y3RUb0NhcnRBc3luYyIsImVycm9yTXNnIiwiZXJyb3IiLCJzd2FsIiwidHlwZSIsImkiLCJwcmV2aWV3TW9kYWwiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsImNsb3NlIiwiYWRkX3RvX2NhcnRfcG9wdXAiLCJ1cGRhdGVDYXJ0Q29udGVudCIsImNhcnRfaXRlbSIsInJlZGlyZWN0VG8iLCJjYXJ0X3VybCIsInVybHMiLCJjYXJ0IiwicmVqZWN0IiwiJGFkZFRvQ2FydEJ0biIsIm9yaWdpbmFsQnRuVmFsIiwid2FpdE1lc3NhZ2UiLCIkZXJyb3JCb3giLCIkZXJyb3JNc2ciLCIkY2hlY2tib3giLCJ3aW5kb3ciLCJGb3JtRGF0YSIsInVuZGVmaW5lZCIsIiRvdmVybGF5IiwiaXRlbUFkZCIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsInJlc3BvbnNlIiwiZXJyb3JNZXNzYWdlIiwic2Nyb2xsVG9FbGVtZW50IiwiZW1wdHkiLCJtZWRpdW1NZWRpYVF1ZXJ5TGlzdCIsIm1lZGlhUXVlcnlMaXN0RmFjdG9yeSIsInNoYWtlIiwiJGVsIiwic2V0dGluZ3MiLCJpbnRlcnZhbCIsImRpc3RhbmNlIiwidGltZXMiLCJjb21wbGV0ZSIsImNzcyIsIml0ZXIiLCJhbmltYXRlIiwibGVmdCIsInN1cGVybWFya2V0U2VyaWFsaXplIiwiYXNzb2MiLCJzZXJpYWxpemVBcnJheSIsIl9hc3NvYyIsInBhcmFtIiwiJHNjb3BlQXJnIiwicHJvZHVjdEF0dHJpYnV0ZXNEYXRhIiwiaW1hZ2VHYWxsZXJ5IiwiSW1hZ2VHYWxsZXJ5IiwiaW5pdCIsImxpc3RlblF1YW50aXR5Q2hhbmdlIiwiaW5pdFJhZGlvQXR0cmlidXRlcyIsImZvdW5kYXRpb24iLCJkb2N1bWVudCIsImluaXRDdXN0b21UYWJzIiwiV2lzaGxpc3QiLCJsb2FkIiwiZ2V0VGFiUmVxdWVzdHMiLCJzdXBlcm1hcmtldFRoZW1lRXh0cmFDb25maWciLCJhbHNvQm91Z2h0T3B0aW9ucyIsImFsc29Cb3VnaHQiLCJjb25zb2xlIiwiJHByb2R1Y3RPcHRpb25zRWxlbWVudCIsImhhc09wdGlvbnMiLCJ0cmltIiwiaGFzRGVmYXVsdE9wdGlvbnMiLCJldmVudCIsImlzIiwiY2xpY2siLCJzY3JvbGxUb3AiLCJwcm9kdWN0T3B0aW9uc0NoYW5nZWQiLCJzZXRQcm9kdWN0VmFyaWFudCIsIiRwcm9kdWN0SWQiLCJwcm9kdWN0QXR0cmlidXRlcyIsIm9wdGlvbkNoYW5nZSIsImF0dHJpYnV0ZXNEYXRhIiwiYXR0cmlidXRlc0NvbnRlbnQiLCJjb250ZW50IiwidXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMiLCJ1cGRhdGVWaWV3IiwidXBkYXRlRGVmYXVsdEF0dHJpYnV0ZXNGb3JPT1MiLCJiYW5uZXJVdGlscyIsImRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50IiwibW9kYWxGYWN0b3J5IiwiJG1vZGFsIiwib2ZmIiwiTW9kYWxFdmVudHMiLCJvbk1vZGFsT3BlbiIsIm9uTW9kYWxDbG9zZSIsIm9uTWluaVByZXZpZXdNb2RhbE9wZW4iLCJvbk1pbmlQcmV2aWV3TW9kYWxDbG9zZSIsImluaXRUYWJTY3JvbGxUb1ZpZXdwb3J0IiwiaW5pdEdvVG9UYWIiLCJob29rcyIsImVtaXQiLCJzd2F0Y2hfb3B0aW9uX2Rpc3BsYXlfdHlwZSIsIm1vZHVsZSIsImRlZmF1bHQiLCJoaWRlT3JpZ2luYWxTd2F0Y2hlcyIsIiRib2R5IiwiJHF1aWNrVmlldyIsImNsb3Nlc3QiLCJyZXN1bWVTdGlja3lIZWFkZXIiLCJzY3JvbGxUb1ZpZXciLCIkdGFyZ2V0IiwiaCIsInBvc2l0aW9uIiwidG9wIiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0IiwiZHVyYXRpb24iLCJzdGFydCIsImNsZWFyVGltZW91dCIsImNsZWFyUXVldWUiLCJhbHdheXMiLCJtYXRjaGVzIiwiY3VycmVudFRhcmdldCIsImhyZWYiLCJmb3JtRGF0YSIsImtleSIsIkZpbGUiLCJzaXplIiwiZGVsZXRlIiwiaXNBTVAiLCJ1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzIiwiZWFjaCIsImluZGV4Iiwib3B0aW9uTGFiZWwiLCJjaGlsZHJlbiIsImlubmVyVGV4dCIsIm9wdGlvblRpdGxlIiwicmVxdWlyZWQiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwiZ2V0QXR0cmlidXRlIiwicXVlcnlTZWxlY3RvciIsImlzU2F0aXNmaWVkIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJldmVyeSIsInNlbGVjdCIsInNlbGVjdGVkSW5kZXgiLCJkYXRlU3RyaW5nIiwieCIsImpvaW4iLCJsYWJlbCIsImxhYmVscyIsInByb2R1Y3RWYXJpYW50Iiwic29ydCIsInZpZXciLCJwcm9kdWN0TmFtZSIsImNhcmQiLCJnZXRWaWV3TW9kZWwiLCIkcHJpY2VXaXRoVGF4IiwiJHByaWNlV2l0aG91dFRheCIsInJycFdpdGhUYXgiLCIkZGl2IiwiJHNwYW4iLCJycnBXaXRob3V0VGF4Iiwibm9uU2FsZVdpdGhUYXgiLCJub25TYWxlV2l0aG91dFRheCIsInByaWNlU2F2ZWQiLCJwcmljZU5vd0xhYmVsIiwiJHdlaWdodCIsIiRpbmNyZW1lbnRzIiwiJGFkZFRvQ2FydCIsIiR3aXNobGlzdFZhcmlhdGlvbiIsInN0b2NrIiwiJGNvbnRhaW5lciIsIiRpbnB1dCIsIiRiYWRnZSIsInNrdSIsIiR2YWx1ZSIsInVwYyIsIm1wbiIsInF1YW50aXR5IiwiJHRleHQiLCIkYnVsa1ByaWNpbmciLCJpc1J1bm5pbmdJbklmcmFtZSIsInNlbGYiLCIkY2hhbmdlZE9wdGlvbiIsInBhcmVudHMiLCJwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQiLCJzaG93UHJvZHVjdEltYWdlIiwiaW1hZ2UiLCJ6b29tSW1hZ2VVcmwiLCJ0b29scyIsImltYWdlU3Jjc2V0IiwiZ2V0U3Jjc2V0Iiwiem9vbV9zaXplIiwibWFpbkltYWdlVXJsIiwicHJvZHVjdF9zaXplIiwibWFpbkltYWdlU3Jjc2V0IiwicHJvZHVjdF9pbWFnZV9yZXNwb25zaXZlIiwic2V0QWx0ZXJuYXRlSW1hZ2UiLCJyZXN0b3JlSW1hZ2UiLCJ2aWV3TW9kZWwiLCJxdWFudGl0eU1pbiIsInBhcnNlSW50IiwicXVhbnRpdHlNYXgiLCJrZXlDb2RlIiwidG1wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInNob3dBbGVydE1vZGFsIiwidGV4dENvbnRlbnQiLCJyZWRpcmVjdF9jYXJ0Iiwib3BlbkNhcnRQcmV2aWV3IiwiZ2V0Q2FydENvbnRlbnQiLCJjYXJ0SXRlbUlkIiwib25Db21wbGV0ZSIsInBhcmFtcyIsInN1Z2dlc3QiLCJzdWdnZXN0aW9ucyIsImxpbWl0IiwiZ2V0Q29udGVudCIsImlmcmFtZVNkayIsImxvY2F0aW9uIiwidXBkYXRlQ29udGVudCIsImFwcGx5TW9kYWxBdXRvQ2xvc2UiLCIkY2FydFF1YW50aXR5IiwiJGNhcnRDb3VudGVyIiwic2hvd01lc3NhZ2VCb3giLCJtZXNzYWdlIiwiJG1lc3NhZ2VCb3giLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsInVwZGF0ZVByaWNlVmlldyIsInJycF93aXRoX3RheCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4IiwicnJwX3dpdGhvdXRfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJzYXZlZCIsInN0b2NrX21lc3NhZ2UiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJ3ZWlnaHQiLCJ2YXJpYW50SWQiLCJpbnN0b2NrIiwicHVyY2hhc2FibGUiLCJidWxrX2Rpc2NvdW50X3JhdGVzIiwiYmVoYXZpb3IiLCJvdXRfb2Zfc3RvY2tfYmVoYXZpb3IiLCJpblN0b2NrSWRzIiwiaW5fc3RvY2tfYXR0cmlidXRlcyIsIm91dE9mU3RvY2tNZXNzYWdlIiwib3V0X29mX3N0b2NrX21lc3NhZ2UiLCJhdHRyaWJ1dGUiLCIkYXR0cmlidXRlIiwiYXR0cklkIiwiZW5hYmxlQXR0cmlidXRlIiwiZGlzYWJsZUF0dHJpYnV0ZSIsImdldEF0dHJpYnV0ZVR5cGUiLCJkaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlIiwiJHNlbGVjdCIsInBhcmVudCIsInRvZ2dsZU9wdGlvbiIsImVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSIsIiRwYXJlbnQiLCJyYWRpbyIsIiRyYWRpbyIsImhhc2giLCIkYWN0aXZlVGFiIiwiaGFzIiwiJHRhYkNvbnRlbnQiLCJzaWJsaW5ncyIsIiRjdXN0b21UYWJzIiwiJHRhYnMiLCIkdGFic0NvbnRlbnQiLCIkdGl0bGUiLCJleHBhbmQiLCJyZW1vdmUiLCJhdXRvQ2xvc2VUaW1lciIsImNsZWFySW50ZXJ2YWwiLCIkYXV0b0Nsb3NlRWwiLCJzZWMiLCIkY291bnQiLCJzZXRJbnRlcnZhbCIsImlzQnJvd3NlcklFIiwicHJpY2VfcmFuZ2UiLCJldnQiLCJDdXN0b21FdmVudCIsImRldGFpbCIsImFtb3VudCIsImRpc3BhdGNoRXZlbnQiLCJkb2N1bWVudE1vZGUiLCJjb252ZXJ0SW50b0FycmF5IiwiY29sbGVjdGlvbiIsInNsaWNlIiwiY2FsbCIsIiRnYWxsZXJ5IiwiJG1haW5DYXJvdXNlbCIsIiRuYXZDYXJvdXNlbCIsIiRkZWZTbGlkZSIsImRlZlNsaWRlSWR4IiwiY3VycmVudFNsaWRlSW5kZXgiLCJ1aWQiLCJiaW5kRXZlbnRzIiwic2V0TWFpbkltYWdlIiwiaW1nT2JqIiwiY3VycmVudEltYWdlIiwic3dhcE1haW5JbWFnZSIsInNhdmVkSW1hZ2UiLCJzZXRBY3RpdmVUaHVtYiIsInNsaWNrIiwiZXEiLCJiYWd1ZXR0ZUJveCIsInJ1biIsIiRpbWciLCIkYSIsIiRzZWxlY3RlZFRodW1iIiwiY3VycmVudFNsaWRlIiwibmV4dFNsaWRlIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJpbmZpbml0ZSIsImluaXRpYWxTbGlkZSIsImFzTmF2Rm9yIiwic3dpcGUiLCJhcnJvd3MiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNsaWRlQ291bnQiLCJ3aGljaCIsImZvY3VzT25TZWxlY3QiLCJjZW50ZXJQYWRkaW5nIiwiYWRhcHRpdmVIZWlnaHQiLCJsYXp5TG9hZCIsInZlcnRpY2FsIiwidmVydGljYWxTd2lwaW5nIiwiV2lzaExpc3QiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJjb25maXJtZWQiLCJjb25maXJtIiwid2lzaGxpc3REZWxldGUiLCJyZWdpc3RlckFkZFdpc2hMaXN0VmFsaWRhdGlvbiIsIiRhZGRXaXNobGlzdEZvcm0iLCJhZGRXaXNobGlzdFZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsIm9uUmVhZHkiLCIkYWRkV2lzaExpc3RGb3JtIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQUNBO0FBQUE7QUFBQTtBQUErQztBQUNxQztBQUN2QjtBQUNiO0FBQ087QUFDRjtBQUN0QjtBQUNDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFNBQVNBLEtBQUssQ0FBQ0MsRUFBRSxFQUFFO0VBQ2YsT0FBTyxJQUFJQyxPQUFPLENBQUMsVUFBQUMsT0FBTztJQUFBLE9BQUlDLFVBQVUsQ0FBQ0QsT0FBTyxFQUFFRixFQUFFLENBQUM7RUFBQSxFQUFDO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVNJLGFBQWEsQ0FBQ0MsS0FBSyxFQUFFO0VBQzFCLE9BQU9BLEtBQUssQ0FBQ0MsTUFBTSxDQUNmLFVBQUNDLE9BQU8sRUFBRUMsSUFBSTtJQUFBLE9BQUtELE9BQU8sQ0FBQ0UsSUFBSSxDQUFDLFVBQUFDLE1BQU07TUFBQSxPQUFJRixJQUFJLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDRSxLQUFLLENBQUNDLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNKLE1BQU0sQ0FBQyxDQUFDO0lBQUEsRUFBQztFQUFBLEdBQzNGVCxPQUFPLENBQUNDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FDdEI7QUFDTDtBQUVBLFNBQVNhLGtCQUFrQixDQUFDQyxJQUFJLEVBQUU7RUFDOUIsSUFBSUMsS0FBSyxHQUFHLElBQUk7RUFDaEIsSUFBSUQsSUFBSSxJQUFJQSxJQUFJLENBQUNFLGFBQWEsRUFBRTtJQUM1QkQsS0FBSyxHQUFHRCxJQUFJLENBQUNFLGFBQWEsRUFBRTtJQUM1QixJQUFJLENBQUNELEtBQUssRUFBRTtNQUNSLElBQUlELElBQUksQ0FBQ0csY0FBYyxFQUFFO1FBQ3JCSCxJQUFJLENBQUNHLGNBQWMsRUFBRTtNQUN6QixDQUFDLE1BQU07UUFDSEYs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QU0zSyxNQUFNLEdBQUcySyxHQUFHLENBQUNuRyxNQUFNLEdBQUcsQ0FBQztRQUU3QmdmLEVBQUUsQ0FBQ3hqQixNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0QyUCxZQUFZLEVBQUU7SUFDbEIsQ0FBQyxDQUNKLENBQUM7SUFFRnNULGdCQUFnQixDQUFDdGYsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBME8sS0FBSyxFQUFJO01BQ25DLE1BQUksQ0FBQzZRLG9CQUFvQixDQUFDTyxZQUFZLEVBQUU7TUFFeEMsSUFBSSxNQUFJLENBQUNQLG9CQUFvQixDQUFDUSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDM0M7TUFDSjtNQUVBclIsS0FBSyxDQUFDeEcsY0FBYyxFQUFFO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVEOFgsT0FBTyxHQUFQLG1CQUFVO0lBQ04sSUFBTUMsZ0JBQWdCLEdBQUc3aEIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBRTVDLElBQUk2aEIsZ0JBQWdCLENBQUNwZixNQUFNLEVBQUU7TUFDekIsSUFBSSxDQUFDd2UsNkJBQTZCLENBQUNZLGdCQUFnQixDQUFDO0lBQ3hEO0lBRUEsSUFBSSxDQUFDaEIscUJBQXFCLEVBQUU7RUFDaEMsQ0FBQztFQUFBO0FBQUEsRUE5RGlDaUIscURBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXywgeyBpbmRleE9mIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5LCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuLi90aGVtZS9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCBzY3JvbGxUb0VsZW1lbnQgZnJvbSAnc2Nyb2xsLXRvLWVsZW1lbnQnO1xuaW1wb3J0IHsgY3VycmVuY3lGb3JtYXQsIGV4dHJhY3RNb25leSB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi4vdGhlbWUvZ2xvYmFsL21vZGFsJztcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcbmltcG9ydCBNdXN0YWNoZSBmcm9tICdtdXN0YWNoZSc7XG4vL1xuLy8gaHR0cHM6Ly9qYXZhc2NyaXB0LmluZm8vdGFzay9kZWxheS1wcm9taXNlXG4vL1xuZnVuY3Rpb24gZGVsYXkobXMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG59XG5cbi8vXG4vLyBodHRwczovL2hhY2tlcm5vb24uY29tL2Z1bmN0aW9uYWwtamF2YXNjcmlwdC1yZXNvbHZpbmctcHJvbWlzZXMtc2VxdWVudGlhbGx5LTdhYWMxOGM0NDMxZVxuLy9cbmZ1bmN0aW9uIHByb21pc2VTZXJpYWwoZnVuY3MpIHtcbiAgICByZXR1cm4gZnVuY3MucmVkdWNlKFxuICAgICAgICAocHJvbWlzZSwgZnVuYykgPT4gcHJvbWlzZS50aGVuKHJlc3VsdCA9PiBmdW5jKCkudGhlbihBcnJheS5wcm90b3R5cGUuY29uY2F0LmJpbmQocmVzdWx0KSkpLFxuICAgICAgICBQcm9taXNlLnJlc29sdmUoW10pLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHJlcG9ydEZvcm1WYWxpZGl0eShmb3JtKSB7XG4gICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICBpZiAoZm9ybSAmJiBmb3JtLmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgdmFsaWQgPSBmb3JtLmNoZWNrVmFsaWRpdHkoKTtcbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgaWYgKGZvcm0ucmVwb3J0VmFsaWRpdHkpIHtcbiAgICAgICAgICAgICAgICBmb3JtLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFsc29Cb3VnaHQge1xuICAgIGNvbnN0cnVjdG9yKHBhcmVudFByb2R1Y3REZXRhaWxzLCB7XG4gICAgICAgIHRodW1ibmFpbFRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtdGh1bWJuYWlsLWl0ZW0ge3sjY2hlY2tlZH19aXMtY2hlY2tlZHt7L2NoZWNrZWR9fVwiIGRhdGEtdGh1bWJuYWlsLXByb2R1Y3QtaWQ9XCJ7e2lkfX1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC10aHVtYm5haWwtbGFiZWxcIiBocmVmPVwie3t1cmx9fVwiIHRhcmdldD1cIl9ibGFua1wiPjxpbWcgY2xhc3M9XCJsYXp5bG9hZFwiIHNyYz1cInt7bG9hZGluZ0ltZ319XCIgZGF0YS1zcmM9XCJ7e2ltZ319XCIgYWx0PVwie3tuYW1lfX1cIiB0aXRsZT1cInt7bmFtZX19XCI+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHByb2R1Y3REZXRhaWxzVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveC17e2lkfX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwie3tpZH19XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyNjaGVja2VkfX1jaGVja2Vke3svY2hlY2tlZH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWwge3sjY2hlY2tlZH19aXMtY2hlY2tlZHt7L2NoZWNrZWR9fVwiIGZvcj1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1jaGVja2JveC17e2lkfX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLXRpdGxlXCI+e3tuYW1lfX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLXByaWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7JmxvZ2luUHJpY2VIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJpY2VIdG1sfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3smcHJpY2VSYW5nZUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3smb3B0aW9uc1RvZ2dsZUh0bWx9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtXCIgaWQ9XCJwcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0tZm9ybS17e2lkfX1cIiBkYXRhLXByb2R1Y3QtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAge3smZm9ybUh0bWx9fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHByaWNlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbi1ncm91cCBwcmljZS1zZWN0aW9uLWdyb3VwLS17e3RheENsYXNzUHJlZml4fX1cIj5cbiAgICAgICAgICAgICAgICA8IS0tIFNhbGUgcHJpY2UgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IHByaWNlLXNlY3Rpb24tLW1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1sYWJlbFwiIHt7I25vblNhbGVQcmljZX19c3R5bGU9XCJkaXNwbGF5OiBub25lO1wie3svbm9uU2FsZVByaWNlfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e3ByaWNlTGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utbm93LWxhYmVsXCIge3tebm9uU2FsZVByaWNlfX1zdHlsZT1cImRpc3BsYXk6IG5vbmU7XCJ7ey9ub25TYWxlUHJpY2V9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7c2FsZVByaWNlTGFiZWx9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1wcmljZS17e3RheERhdGFQcmVmaXh9fSBjbGFzcz1cInByaWNlIHByaWNlLS17e3RheENsYXNzUHJlZml4fX0gcHJpY2UtLW1haW5cIj57e3ByaWNlLmZvcm1hdHRlZH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwhLS0gTm9uLXNhbGUgcHJpY2UgLS0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IG5vbi1zYWxlLXByaWNlLS17e3RheENsYXNzUHJlZml4fX1cIiB7e15ub25TYWxlUHJpY2V9fXN0eWxlPVwiZGlzcGxheTogbm9uZTtcInt7L25vblNhbGVQcmljZX19PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByaWNlLXdhcy1sYWJlbFwiPnt7bm9uU2FsZVByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLW5vbi1zYWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7e25vblNhbGVQcmljZS5mb3JtYXR0ZWR9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPCEtLSBSZXRhaWwgcHJpY2UgLS0+XG4gICAgICAgICAgICAgICAge3smcmV0YWlsUHJpY2VIdG1sfX1cbiAgICAgICAgICAgICAgICB7eyZ0YXhMYWJlbEh0bWx9fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHByaWNlUmFuZ2VUZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uLWdyb3VwIHByaWNlLXNlY3Rpb24tZ3JvdXAtLXt7dGF4Q2xhc3NQcmVmaXh9fVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcmljZS1zZWN0aW9uIHByaWNlLXNlY3Rpb24tLXt7dGF4Q2xhc3NQcmVmaXh9fSBwcmljZS1zZWN0aW9uLS1tYWluXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2UtbGFiZWxcIj57e3ByaWNlTGFiZWx9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwcmljZS1ub3ctbGFiZWxcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+e3tzYWxlUHJpY2VMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcHJpY2Ute3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0te3t0YXhDbGFzc1ByZWZpeH19IHByaWNlLS1tYWluXCI+e3twcmljZVJhbmdlLm1pbi5mb3JtYXR0ZWR9fSAtIHt7cHJpY2VSYW5nZS5tYXguZm9ybWF0dGVkfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7JnRheExhYmVsSHRtbH19XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IG5vbi1zYWxlLXByaWNlLS17e3RheENsYXNzUHJlZml4fX1cIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJpY2Utd2FzLWxhYmVsXCI+e3tub25TYWxlUHJpY2VMYWJlbH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3Qtbm9uLXNhbGUtcHJpY2Ute3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0tbm9uLXNhbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7bm9uU2FsZVByaWNlLmZvcm1hdHRlZH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7eyZyZXRhaWxQcmljZVJhbmdlSHRtbH19XG4gICAgICAgICAgICAgICAge3smcmV0YWlsUHJpY2VIdG1sfX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICB0YXhMYWJlbFRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGFiYnIgdGl0bGU9XCJ7e3RpdGxlfX1cIj57e3RleHR9fTwvYWJicj5cbiAgICAgICAgYCxcbiAgICAgICAgcmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByaWNlLXNlY3Rpb24gcHJpY2Utc2VjdGlvbi0te3t0YXhDbGFzc1ByZWZpeH19IHJycC1wcmljZS0te3t0YXhDbGFzc1ByZWZpeH19XCI+XG4gICAgICAgICAgICAgICAge3tyZXRhaWxQcmljZUxhYmVsfX1cbiAgICAgICAgICAgICAgICA8c3BhbiBkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXt7dGF4RGF0YVByZWZpeH19IGNsYXNzPVwicHJpY2UgcHJpY2UtLXJycFwiPnt7cmV0YWlsUHJpY2VSYW5nZS5taW4ud2l0aF90YXguZm9ybWF0dGVkfX0gLSB7e3JldGFpbFByaWNlUmFuZ2UubWF4LndpdGhfdGF4LmZvcm1hdHRlZH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHJldGFpbFByaWNlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJpY2Utc2VjdGlvbiBwcmljZS1zZWN0aW9uLS17e3RheENsYXNzUHJlZml4fX0gcnJwLXByaWNlLS17e3RheENsYXNzUHJlZml4fX1cIiB7e15yZXRhaWxQcmljZX19c3R5bGU9XCJkaXNwbGF5OiBub25lO3t7L3JldGFpbFByaWNlfX1cIj5cbiAgICAgICAgICAgICAgICB7e3JldGFpbFByaWNlTGFiZWx9fVxuICAgICAgICAgICAgICAgIDxzcGFuIGRhdGEtcHJvZHVjdC1ycnAte3t0YXhEYXRhUHJlZml4fX0gY2xhc3M9XCJwcmljZSBwcmljZS0tcnJwXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7cmV0YWlsUHJpY2UuZm9ybWF0dGVkfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYCxcbiAgICAgICAgbG9naW5QcmljZVRlbXBsYXRlID0gYFxuICAgICAgICAgICAgPGEgY2xhc3M9XCJwcmljZS0tbG9naW5cIiBocmVmPVwie3tsb2dpblVybH19XCIgdHJhbnNsYXRlPnt7bG9naW5Gb3JQcmljZVR4dH19PC9hPlxuICAgICAgICBgLFxuICAgICAgICBvcHRpb25zVG9nZ2xlVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFZpZXctYWxzb0JvdWdodC1pdGVtLWZvcm1Ub2dnbGVcIj48YSBocmVmPVwiI3Byb2R1Y3RWaWV3LWFsc29Cb3VnaHQtaXRlbS1mb3JtLXt7aWR9fVwiIGRhdGEtb3B0aW9ucy1jb2xsYXBzaWJsZT57e2Nob29zZU9wdGlvbnNUeHR9fSA8aSBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzcz1cImljb25cIj48c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWNoZXZyb24tZG93blwiPjwvdXNlPjwvc3ZnPjwvaT48L2E+PC9kaXY+XG4gICAgICAgIGAsXG4gICAgICAgIHNpbXBsZUZvcm1UZW1wbGF0ZSA9IGBcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybSBmb3JtLS1hZGRUb0NhcnRcIiBtZXRob2Q9XCJwb3N0XCIgYWN0aW9uPVwie3thZGRUb0NhcnRVcmx9fVwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIgZGF0YS1jYXJ0LWl0ZW0tYWRkPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImFjdGlvblwiIHZhbHVlPVwiYWRkXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicHJvZHVjdF9pZFwiIHZhbHVlPVwie3tpZH19XCIvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInF0eVtdXCIgdmFsdWU9XCJ7e3F0eX19XCIvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICBgLFxuICAgICAgICBsb2FkaW5nVGVtcGxhdGUgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGluZ1wiPjxpbWcgc3JjPVwie3tsb2FkaW5nSW1nfX1cIiBhbHQ9XCJsb2FkaW5nXCIvPjwvZGl2PlxuICAgICAgICBgLFxuICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MgPSBudWxsLFxuICAgIH0gPSB7fSkge1xuICAgICAgICB0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzID0gcGFyZW50UHJvZHVjdERldGFpbHM7XG4gICAgICAgIHRoaXMudGh1bWJuYWlsVGVtcGxhdGUgPSB0aHVtYm5haWxUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlsc1RlbXBsYXRlID0gcHJvZHVjdERldGFpbHNUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcmljZVRlbXBsYXRlID0gcHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5wcmljZVJhbmdlVGVtcGxhdGUgPSBwcmljZVJhbmdlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMudGF4TGFiZWxUZW1wbGF0ZSA9IHRheExhYmVsVGVtcGxhdGU7XG4gICAgICAgIHRoaXMucmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlID0gcmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLnJldGFpbFByaWNlVGVtcGxhdGUgPSByZXRhaWxQcmljZVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvZ2luUHJpY2VUZW1wbGF0ZSA9IGxvZ2luUHJpY2VUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5vcHRpb25zVG9nZ2xlVGVtcGxhdGUgPSBvcHRpb25zVG9nZ2xlVGVtcGxhdGU7XG4gICAgICAgIHRoaXMuc2ltcGxlRm9ybVRlbXBsYXRlID0gc2ltcGxlRm9ybVRlbXBsYXRlO1xuICAgICAgICB0aGlzLmxvYWRpbmdUZW1wbGF0ZSA9IGxvYWRpbmdUZW1wbGF0ZTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MgPSB0ZW1wbGF0ZUN1c3RvbVRhZ3M7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuY29udGV4dDtcbiAgICAgICAgdGhpcy5udW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0TnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy5hbGxOdW1iZXJUZXh0cyA9IHRoaXMuY29udGV4dC50eHRBbHNvQm91Z2h0QWxsTnVtYmVyQXJyYXkuc3BsaXQoJywnKTtcbiAgICAgICAgdGhpcy4kYWxzb0JvdWdodEVsID0gJCgnW2RhdGEtYWxzby1ib3VnaHRdJywgcGFyZW50UHJvZHVjdERldGFpbHMuJHByb2R1Y3RWaWV3U2NvcGUpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IHRoaXMuJGFsc29Cb3VnaHRFbC5kYXRhKCdhbHNvQm91Z2h0JykgfHwge307XG4gICAgICAgIHRoaXMubW9uZXlXaXRoVGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRoVGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG4gICAgICAgIHRoaXMubW9uZXlXaXRob3V0VGF4ID0gdGhpcy5jb25maWcuc2FtcGxlUHJpY2VXaXRob3V0VGF4ID8gZXh0cmFjdE1vbmV5KHRoaXMuY29uZmlnLnNhbXBsZVByaWNlV2l0aG91dFRheCwgdGhpcy5jb250ZXh0Lm1vbmV5KSA6IG51bGw7XG5cbiAgICAgICAgLy8gdHJ5IHRvIGd1ZXNzIGFueSBwcmljZSBvbiB0aGUgcGFnZVxuICAgICAgICB0aGlzLm1vbmV5RmFsbGJhY2sgPSB0aGlzLm1vbmV5V2l0aFRheCB8fCB0aGlzLm1vbmV5V2l0aG91dFRheFxuICAgICAgICAgICAgLy8gaXMgZGVmYXVsdCBjdXJyZW5jeT9cbiAgICAgICAgICAgIHx8ICh0aGlzLmNvbnRleHQuYWN0aXZlQ3VycmVuY3lDb2RlICYmIHRoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGUgPT09IHRoaXMuY29udGV4dC5kZWZhdWx0Q3VycmVuY3lDb2RlID8gdGhpcy5jb250ZXh0Lm1vbmV5IDogbnVsbClcbiAgICAgICAgICAgIC8vIGFueSBwcmljZSBvbiB0aGUgcGFnZVxuICAgICAgICAgICAgfHwgJCgnW2RhdGEtcHJvZHVjdC1wcmljZS13aXRob3V0LXRheF0sIFtkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJykuZ2V0KClcbiAgICAgICAgICAgICAgICAucmVkdWNlKChfbW9uZXksIGVsKSA9PiBfbW9uZXkgfHwgZXh0cmFjdE1vbmV5KCQoZWwpLnRleHQoKSksIG51bGwpXG4gICAgICAgICAgICAvLyB1c2UgY3VycmVuY3kgY29kZVxuICAgICAgICAgICAgfHwgKHRoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGUgPyB7Li4udGhpcy5jb250ZXh0Lm1vbmV5LCBjdXJyZW5jeV90b2tlbjogYCAke3RoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGV9IGAgfSA6IHRoaXMuY29udGV4dC5tb25leSk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2R1Y3ROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLm9uQWRkQWxsQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQWRkQWxsQnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFkZFNlbGVjdGVkQnV0dG9uQ2xpY2sgPSB0aGlzLm9uQWRkU2VsZWN0ZWRCdXR0b25DbGljay5iaW5kKHRoaXMpO1xuXG4gICAgICAgIGNvbnN0IHRodW1iU2l6ZSA9IHRoaXMuY29udGV4dC5hbHNvYm91Z2h0X3RodW1ibmFpbF9zaXplLnNwbGl0KCd4Jyk7XG5cbiAgICAgICAgdGhpcy50aHVtYm5haWxXaWR0aCA9IE51bWJlcih0aHVtYlNpemVbMF0pIHx8IDEwMDtcbiAgICAgICAgdGhpcy50aHVtYm5haWxIZWlnaHQgPSBOdW1iZXIodGh1bWJTaXplWzFdKSB8fCAxMDA7XG5cbiAgICAgICAgdGhpcy5yZXRyaWV2ZUFsc29Cb3VnaHRQcm9kdWN0cygpO1xuXG4gICAgICAgICQoJ1tkYXRhLWFkZC1hbGxdJywgdGhpcy4kYWxzb0JvdWdodEVsKS5vbignY2xpY2snLCB0aGlzLm9uQWRkQWxsQnV0dG9uQ2xpY2spO1xuICAgICAgICAkKCdbZGF0YS1hZGQtc2VsZWN0ZWRdJywgdGhpcy4kYWxzb0JvdWdodEVsKS5vbignY2xpY2snLCB0aGlzLm9uQWRkU2VsZWN0ZWRCdXR0b25DbGljayk7XG4gICAgfVxuXG4gICAgY3VycmVuY3lGb3JtYXQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbmN5Rm9ybWF0KHZhbHVlLCAodGhpcy5jb25maWcuaW5jbHVkZVRheCA/IHRoaXMubW9uZXlXaXRoVGF4IDogdGhpcy5tb25leVdpdGhvdXRUYXgpIHx8IHRoaXMubW9uZXlGYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmV0cmlldmVBbHNvQm91Z2h0UHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0ICR0aHVtYm5haWxzID0gJCgnW2RhdGEtdGh1bWJuYWlsc10nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBkZXRhaWxzOiAncGFwYXRoZW1lcy9hbHNvLWJvdWdodC9wcm9kdWN0LWRldGFpbHMnLFxuICAgICAgICAgICAgICAgIHRodW1ibmFpbDogJ3BhcGF0aGVtZXMvYWxzby1ib3VnaHQvcHJvZHVjdC10aHVtYm5haWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RFbHMgPSAkKCdbZGF0YS1wcm9kdWN0LWlkXScsIHRoaXMuJGFsc29Cb3VnaHRFbCkubm90KCdbZGF0YS1wYXJlbnQtcHJvZHVjdF0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkcyA9ICRwcm9kdWN0RWxzLmdldCgpLm1hcChlbCA9PiAkKGVsKS5kYXRhKCdwcm9kdWN0SWQnKSk7XG5cbiAgICAgICAgaWYgKCRwcm9kdWN0RWxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuJGFsc29Cb3VnaHRFbC5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogJy9ncmFwaHFsJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHByb2R1Y3RJZHM6IFtJbnQhXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdHNDb3VudDogSW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7IXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiA/IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGluY2x1ZGVUYXg6IEJvb2xlYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW5jeUNvZGU6IGN1cnJlbmN5Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRpbWdXaWR0aDogSW50ISxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkaW1nSGVpZ2h0OiBJbnQhXG4gICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50aXR5SWRzOiAkcHJvZHVjdElkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0OiAkcHJvZHVjdHNDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVPdXRPZlN0b2NrOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRpdHlJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0VXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblB1cmNoYXNlUXVhbnRpdHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICRpbWdXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICRpbWdIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmFpbGFiaWxpdHlWMiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBQcm9kdWN0VW5hdmFpbGFibGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gPyBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZXMgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVUYXg6ICRpbmNsdWRlVGF4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbmN5Q29kZTogJGN1cnJlbmN5Q29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYXNlUHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5RmllbGRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcFByaWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uTW9uZXlGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5UmFuZ2VGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLk1vbmV5UmFuZ2VGaWVsZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdE9wdGlvbnMgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlyc3Q6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJHshdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5RmllbGRzIG9uIE1vbmV5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lDb2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyYWdtZW50IE1vbmV5UmFuZ2VGaWVsZHMgb24gTW9uZXlSYW5nZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5Nb25leUZpZWxkc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0c0NvdW50OiBwcm9kdWN0SWRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVUYXg6IHRoaXMuY29uZmlnLmluY2x1ZGVUYXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGU6IHRoaXMuY29udGV4dC5hY3RpdmVDdXJyZW5jeUNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdXaWR0aDogdGhpcy50aHVtYm5haWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0hlaWdodDogdGhpcy50aHVtYm5haWxIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3RoaXMuY29udGV4dC5ncmFwaFFMVG9rZW59YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHhockZpZWxkczoge1xuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNwLmRhdGEuc2l0ZS5wcm9kdWN0cy5lZGdlcy5mb3JFYWNoKCh7IG5vZGUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRG9uJ3Qgc2hvdyB0aGlzIHByb2R1Y3QgaWYgaXQncyB1bmF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuYXZhaWxhYmlsaXR5VjIgJiYgbm9kZS5hdmFpbGFiaWxpdHlWMi5zdGF0dXMgPT09ICdVbmF2YWlsYWJsZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdE5vZGVzLnB1c2gobm9kZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gbm9kZS5lbnRpdHlJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBub2RlLnBhdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRUb0NhcnRVcmwgPSBub2RlLmFkZFRvQ2FydFVybDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHF0eSA9IG5vZGUubWluUHVyY2hhc2VRdWFudGl0eSB8fCAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZGluZ0ltZyA9IHRoaXMuY29udGV4dC5sb2FkaW5nSW1nO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gbm9kZS5kZWZhdWx0SW1hZ2UudXJsIHx8IHRoaXMuY29udGV4dC5kZWZhdWx0UHJvZHVjdEltYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RFbCA9ICRwcm9kdWN0RWxzLmZpbHRlcihgW2RhdGEtcHJvZHVjdC1pZD1cIiR7aWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhDbGFzc1ByZWZpeCA9IHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyAnd2l0aFRheCcgOiAnd2l0aG91dFRheCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhEYXRhUHJlZml4ID0gdGhpcy5jb25maWcuaW5jbHVkZVRheCA/ICd3aXRoLXRheCcgOiAnd2l0aG91dC10YXgnO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJpY2VMYWJlbCA9IHRoaXMuY29udGV4dC5wZHBfcHJpY2VfbGFiZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYWxlUHJpY2VMYWJlbCA9IHRoaXMuY29udGV4dC5wZHBfc2FsZV9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5vblNhbGVQcmljZUxhYmVsID0gdGhpcy5jb250ZXh0LnBkcF9ub25fc2FsZV9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJldGFpbFByaWNlTGFiZWwgPSB0aGlzLmNvbnRleHQucGRwX3JldGFpbF9wcmljZV9sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNob29zZU9wdGlvbnNUeHQgPSB0aGlzLmNvbnRleHQuY2hvb3NlT3B0aW9uc1R4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luRm9yUHJpY2VUeHQgPSB0aGlzLmNvbnRleHQubG9naW5Gb3JQcmljZVR4dDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luVXJsID0gdGhpcy5jb250ZXh0LmxvZ2luVXJsIHx8ICcvbG9naW4ucGhwJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLmNvbnRleHQuYWxzb2JvdWdodF9jaGVja2VkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IDogbnVsbDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgbm9uU2FsZVByaWNlID0gIXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiAmJiBub2RlLnByaWNlcy5iYXNlUHJpY2UgJiYgbm9kZS5wcmljZXMucHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBub2RlLnByaWNlcy5iYXNlUHJpY2UudmFsdWUgIT09IG5vZGUucHJpY2VzLnByaWNlLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5iYXNlUHJpY2UudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRhaWxQcmljZSA9ICF0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4gJiYgbm9kZS5wcmljZXMucmV0YWlsUHJpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnJldGFpbFByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9OiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZVJhbmdlID0gIXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiAmJiBub2RlLnByaWNlcy5wcmljZVJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUgIT0gbm9kZS5wcmljZXMucHJpY2VSYW5nZS5tYXgudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucHJpY2VSYW5nZS5taW4udmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZDogdGhpcy5jdXJyZW5jeUZvcm1hdChub2RlLnByaWNlcy5wcmljZVJhbmdlLm1heC52YWx1ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXRhaWxQcmljZVJhbmdlID0gIXRoaXMuY29uZmlnLnJlcXVpcmVMb2dpbiAmJiBub2RlLnByaWNlcy5yZXRhaWxQcmljZVJhbmdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgbm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5taW4udmFsdWUgIT0gbm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5tYXgudmFsdWUgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnJldGFpbFByaWNlUmFuZ2UubWluLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXR0ZWQ6IHRoaXMuY3VycmVuY3lGb3JtYXQobm9kZS5wcmljZXMucmV0YWlsUHJpY2VSYW5nZS5tYXgudmFsdWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGw7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luUHJpY2VIdG1sID0gdGhpcy5jb25maWcucmVxdWlyZUxvZ2luID8gTXVzdGFjaGUucmVuZGVyKHRoaXMubG9naW5QcmljZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5VcmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5Gb3JQcmljZVR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXhMYWJlbEh0bWwgPSB0aGlzLmNvbmZpZy5zaG93VGF4TGFiZWwgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy50YXhMYWJlbFRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRoaXMuY29uZmlnLmluY2x1ZGVUYXggPyB0aGlzLmNvbnRleHQuaW5jbHVkaW5nVGF4VHh0IDogdGhpcy5jb250ZXh0LmV4Y2x1ZGluZ1RheFR4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbmZpZy5pbmNsdWRlVGF4ID8gdGhpcy5jb250ZXh0LnByaWNlV2l0aFRheFR4dCA6IHRoaXMuY29udGV4dC5wcmljZVdpdGhvdXRUYXhUeHQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VSYW5nZUh0bWwgPSByZXRhaWxQcmljZVJhbmdlID8gTXVzdGFjaGUucmVuZGVyKHRoaXMucmV0YWlsUHJpY2VSYW5nZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlUmFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmV0YWlsUHJpY2VIdG1sID0gIXJldGFpbFByaWNlUmFuZ2UgPyBNdXN0YWNoZS5yZW5kZXIodGhpcy5yZXRhaWxQcmljZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4Q2xhc3NQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4RGF0YVByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRhaWxQcmljZUxhYmVsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlUmFuZ2VIdG1sID0gcHJpY2VSYW5nZSA/IE11c3RhY2hlLnJlbmRlcih0aGlzLnByaWNlUmFuZ2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheENsYXNzUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheERhdGFQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vblNhbGVQcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXhMYWJlbEh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VSYW5nZUh0bWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0YWlsUHJpY2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpIDogJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnNUb2dnbGVIdG1sID0gbm9kZS5wcm9kdWN0T3B0aW9ucy5lZGdlcy5sZW5ndGggPiAwID8gTXVzdGFjaGUucmVuZGVyKHRoaXMub3B0aW9uc1RvZ2dsZVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlT3B0aW9uc1R4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcmljZUh0bWwgPSAhdGhpcy5jb25maWcucmVxdWlyZUxvZ2luICYmICFwcmljZVJhbmdlID8gTXVzdGFjaGUucmVuZGVyKHRoaXMucHJpY2VUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheENsYXNzUHJlZml4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheERhdGFQcmVmaXgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2VMYWJlbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub25TYWxlUHJpY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4TGFiZWxIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldGFpbFByaWNlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtSHRtbCA9IG5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXMubGVuZ3RoID09PSAwID8gTXVzdGFjaGUucmVuZGVyKHRoaXMuc2ltcGxlRm9ybVRlbXBsYXRlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVG9DYXJ0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF0eSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIG51bGwsIHRoaXMudGVtcGxhdGVDdXN0b21UYWdzKSA6ICcnO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzSHRtbCA9IE11c3RhY2hlLnJlbmRlcih0aGlzLnByb2R1Y3REZXRhaWxzVGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUHJpY2VIdG1sLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByaWNlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmljZVJhbmdlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zVG9nZ2xlSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtSHRtbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgbnVsbCwgdGhpcy50ZW1wbGF0ZUN1c3RvbVRhZ3MpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aHVtYm5haWxIdG1sID0gJChNdXN0YWNoZS5yZW5kZXIodGhpcy50aHVtYm5haWxUZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdJbWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmFwcGVuZChkZXRhaWxzSHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkdGh1bWJuYWlscy5hcHBlbmQodGh1bWJuYWlsSHRtbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgc2ltcGxlIHByb2R1Y3QgZGV0YWlsc1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcHJvZHVjdEVsLCBfLmV4dGVuZCh0aGlzLmNvbnRleHQsIHsgZW5hYmxlQWxzb0JvdWdodDogZmFsc2UgfSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGlzdGVuIHByaWNlIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLm9uKCdwcmljZS1jaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgcHJvZHVjdCBvYmplY3QgZm9yIGxhdGVyIHVzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvZHVjdHMucHVzaChwcm9kdWN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3REZXRhaWxzJywgcHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGluaXQgZm91bmRhdGlvbiBjb2xsYXBzaWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScsIHsgJGNvbnRleHQ6ICRwcm9kdWN0RWwgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmluZCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgICAgICRwcm9kdWN0RWwuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJykub24oJ2NoYW5nZScsIHRoaXMub25BbHNvQm91Z2h0Q2hlY2tib3hDaGFuZ2UuYmluZCh0aGlzLCAkcHJvZHVjdEVsKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJykub24oQ29sbGFwc2libGVFdmVudHMub3BlbiwgdGhpcy5vbk9wdGlvbnNPcGVuLmJpbmQodGhpcywgJHByb2R1Y3RFbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQWRkU2VsZWN0ZWRUb0NhcnRCdXR0b24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBpbml0IHBhcmVudCBwcm9kdWN0IGl0ZW1cbiAgICAgICAgICAgIGNvbnN0ICRwYXJlbnRQcm9kdWN0RWwgPSAkKCdbZGF0YS1wYXJlbnQtcHJvZHVjdF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScsIHsgJGNvbnRleHQ6ICRwYXJlbnRQcm9kdWN0RWwgfSk7XG4gICAgICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCAkcGFyZW50UHJvZHVjdEVsKS5vbignY2hhbmdlJywgdGhpcy5vbkFsc29Cb3VnaHRDaGVja2JveENoYW5nZS5iaW5kKHRoaXMsICRwYXJlbnRQcm9kdWN0RWwpKTtcblxuICAgICAgICAgICAgLy8gbGlzdGVuIHBhcmVudCBwcm9kdWN0IHByaWNlIGNoYW5nZVxuICAgICAgICAgICAgdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy4kc2NvcGUub24oJ3ByaWNlLWNoYW5nZScsICgpID0+IHRoaXMudXBkYXRlVG90YWxQcmljZSgpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVRvdGFsUHJpY2UoKSB7XG4gICAgICAgIC8vIHN0b3Agc2hvd2luZyB0b3RhbCBwcmljZSBpZiByZXF1aXJlIGxvZ2luXG4gICAgICAgIGlmICh0aGlzLmNvbmZpZy5yZXF1aXJlTG9naW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZHMgPSAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF06Y2hlY2tlZCcsIHRoaXMuJGFsc29Cb3VnaHRFbClcbiAgICAgICAgICAgIC5nZXQoKVxuICAgICAgICAgICAgLm1hcChlbCA9PiAkKGVsKS52YWwoKSk7XG5cbiAgICAgICAgY29uc3QgcHJpY2VCeUlkID0ge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9kdWN0Tm9kZXMuZmlsdGVyKG5vZGUgPT4gbm9kZS5wcmljZXMgJiYgbm9kZS5wcmljZXMucHJpY2UpLnJlZHVjZSgoX3ByaWNlQnlJZCwgbm9kZSkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5fcHJpY2VCeUlkLFxuICAgICAgICAgICAgICAgIFtub2RlLmVudGl0eUlkXToge1xuICAgICAgICAgICAgICAgICAgICBbdGhpcy5jb25maWcuaW5jbHVkZVRheCA/ICd3aXRoX3RheCcgOiAnd2l0aG91dF90YXgnXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5vZGUucHJpY2VzLnByaWNlLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkOiB0aGlzLmN1cnJlbmN5Rm9ybWF0KG5vZGUucHJpY2VzLnByaWNlLnZhbHVlKSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLCB7fSksXG4gICAgICAgICAgICAuLi50aGlzLnByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHByb2R1Y3QucHJpY2UgJiYgcHJvZHVjdC5wcm9kdWN0SWQpLnJlZHVjZSgoX3ByaWNlQnlJZCwgcHJvZHVjdCkgPT4gKHtcbiAgICAgICAgICAgICAgICAuLi5fcHJpY2VCeUlkLFxuICAgICAgICAgICAgICAgIFtwcm9kdWN0LnByb2R1Y3RJZF06IHByb2R1Y3QucHJpY2UsXG4gICAgICAgICAgICB9KSwge30pLFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIG1lcmdlIHByb2R1Y3ROb2RlcyAmIHByb2R1Y3QgZGV0YWlscyBvYmplY3RzXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzID0gT2JqZWN0LmtleXMocHJpY2VCeUlkKS5tYXAocHJvZHVjdElkID0+ICh7XG4gICAgICAgICAgICBwcm9kdWN0SWQsXG4gICAgICAgICAgICBwcmljZTogcHJpY2VCeUlkW3Byb2R1Y3RJZF0sXG4gICAgICAgIH0pKTtcblxuICAgICAgICBjb25zdCB0b3RhbCA9IFt0aGlzLnBhcmVudFByb2R1Y3REZXRhaWxzLCAuLi5wcm9kdWN0c11cbiAgICAgICAgICAgIC5maWx0ZXIocHJvZHVjdCA9PiBwcm9kdWN0SWRzLmluZGV4T2YocHJvZHVjdC5wcm9kdWN0SWQpID4gLTEpXG4gICAgICAgICAgICAucmVkdWNlKCh7IHdpdGhfdGF4ID0gMCwgd2l0aG91dF90YXggPSAwLCBtb25leV93aXRoX3RheCwgbW9uZXlfd2l0aG91dF90YXggfSwgeyBwcmljZSB9KSA9PiAoe1xuICAgICAgICAgICAgICAgIHdpdGhfdGF4OiBwcmljZSAmJiBwcmljZS53aXRoX3RheCA/IHdpdGhfdGF4ICsgcHJpY2Uud2l0aF90YXgudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgICAgIHdpdGhvdXRfdGF4OiBwcmljZSAmJiBwcmljZS53aXRob3V0X3RheCA/IHdpdGhvdXRfdGF4ICsgcHJpY2Uud2l0aG91dF90YXgudmFsdWUgOiBudWxsLFxuICAgICAgICAgICAgICAgIG1vbmV5X3dpdGhfdGF4OiBtb25leV93aXRoX3RheCB8fCAoKHByaWNlICYmIHByaWNlLndpdGhfdGF4KSA/IGV4dHJhY3RNb25leShwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQsIHRoaXMuY29udGV4dC5tb25leSkgOiBudWxsKSxcbiAgICAgICAgICAgICAgICBtb25leV93aXRob3V0X3RheDogbW9uZXlfd2l0aG91dF90YXggfHwgKChwcmljZSAmJiBwcmljZS53aXRob3V0X3RheCkgPyBleHRyYWN0TW9uZXkocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkLCB0aGlzLmNvbnRleHQubW9uZXkpIDogbnVsbCksXG4gICAgICAgICAgICB9KSwge30pO1xuXG4gICAgICAgIGNvbnN0ICR3aXRoVGF4ID0gJCgnW2RhdGEtdG90YWwtd2l0aC10YXhdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJHdpdGhvdXRUYXggPSAkKCdbZGF0YS10b3RhbC13aXRob3V0LXRheF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuXG4gICAgICAgIGlmICh0b3RhbC53aXRoX3RheCkge1xuICAgICAgICAgICAgJCgnW2RhdGEtcHJpY2VdJywgJHdpdGhUYXgpLmh0bWwoY3VycmVuY3lGb3JtYXQodG90YWwud2l0aF90YXgsIHRvdGFsLm1vbmV5X3dpdGhfdGF4KSk7XG4gICAgICAgICAgICAkd2l0aFRheC5zaG93KCk7XG4gICAgICAgICAgICBpZiAodG90YWwud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICAkKCdbZGF0YS10YXgtbGFiZWxdJywgJHdpdGhUYXgpLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRoVGF4KS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkd2l0aFRheC5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodG90YWwud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICQoJ1tkYXRhLXByaWNlXScsICR3aXRob3V0VGF4KS5odG1sKGN1cnJlbmN5Rm9ybWF0KHRvdGFsLndpdGhvdXRfdGF4LCB0b3RhbC5tb25leV93aXRob3V0X3RheCkpO1xuICAgICAgICAgICAgJHdpdGhvdXRUYXguc2hvdygpO1xuICAgICAgICAgICAgaWYgKHRvdGFsLndpdGhfdGF4KSB7XG4gICAgICAgICAgICAgICAgJCgnW2RhdGEtdGF4LWxhYmVsXScsICR3aXRob3V0VGF4KS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRheC1sYWJlbF0nLCAkd2l0aG91dFRheCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHdpdGhvdXRUYXguaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BZGRBbGxCdXR0b25DbGljayhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkKCdbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpXG4gICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIHRydWUpXG4gICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgfVxuXG4gICAgb25BZGRTZWxlY3RlZEJ1dHRvbkNsaWNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLmFkZFNlbGVjdGVkUHJvZHVjdHNUb0NhcnQoKTtcbiAgICB9XG5cbiAgICBvbkFsc29Cb3VnaHRDaGVja2JveENoYW5nZSgkcHJvZHVjdEVsLCBlKSB7XG4gICAgICAgIGNvbnN0ICRjYiA9ICQoZS50YXJnZXQpO1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJHByb2R1Y3RFbC5maW5kKCdbZGF0YS1vcHRpb25zLWNvbGxhcHNpYmxlXScpLmZpcnN0KCk7XG4gICAgICAgIGNvbnN0ICRsYWJlbCA9ICQoYGxhYmVsW2Zvcj1cIiR7JGNiLmF0dHIoJ2lkJyl9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJHRodW1iID0gJChgW2RhdGEtdGh1bWJuYWlsLXByb2R1Y3QtaWQ9XCIkeyRwcm9kdWN0RWwuZGF0YSgncHJvZHVjdElkJyl9XCJdYCwgdGhpcy4kYWxzb0JvdWdodEVsKTtcblxuICAgICAgICAvLyBvcGVuIChjbG9zZSkgcHJvZHVjdCBvcHRpb25zIGZvcm0gaWYgY2hlY2tib3ggaXMgY2hlY2tlZCAodW5jaGVja2VkKVxuICAgICAgICBpZiAoJGNiLnByb3AoJ2NoZWNrZWQnKSkge1xuICAgICAgICAgICAgJGxhYmVsLmFkZENsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICAkdGh1bWIuYWRkQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGlmICghJHRvZ2dsZS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgJHRvZ2dsZS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGxhYmVsLnJlbW92ZUNsYXNzKCdpcy1jaGVja2VkJyk7XG4gICAgICAgICAgICAkdGh1bWIucmVtb3ZlQ2xhc3MoJ2lzLWNoZWNrZWQnKTtcbiAgICAgICAgICAgIGlmICgkdG9nZ2xlLmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICAkdG9nZ2xlLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVBZGRTZWxlY3RlZFRvQ2FydEJ1dHRvbigpO1xuICAgIH1cblxuICAgIG9uT3B0aW9uc09wZW4oJHByb2R1Y3RFbCkge1xuICAgICAgICBpZiAoJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCk7XG4gICAgfVxuXG4gICAgYXN5bmMgbG9hZFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwpIHtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0SWQnKTtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkcHJvZHVjdEVsLmZpbmQoJ1tkYXRhLXByb2R1Y3QtY29udGVudF0nKTtcblxuICAgICAgICAkY29udGVudC5odG1sKE11c3RhY2hlLnJlbmRlcih0aGlzLmxvYWRpbmdUZW1wbGF0ZSwgeyBsb2FkaW5nSW1nOiB0aGlzLmNvbnRleHQubG9hZGluZ0ltZyB9LCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncykpO1xuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3QuZ2V0QnlJZChwcm9kdWN0SWQsIHsgdGVtcGxhdGU6ICdwYXBhdGhlbWVzL2Fsc28tYm91Z2h0L3Byb2R1Y3QtZGV0YWlscycgfSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIgfHwgIXJlc3ApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAkY29udGVudC5odG1sKCQocmVzcCkuaHRtbCgpKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRwcm9kdWN0RWwsIF8uZXh0ZW5kKHRoaXMuY29udGV4dCwgeyBlbmFibGVBbHNvQm91Z2h0OiBmYWxzZSB9KSwgbnVsbCwgdHJ1ZSk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gbGlzdGVuIHByaWNlIGNoYW5nZVxuICAgICAgICAgICAgICAgIHByb2R1Y3QuJHNjb3BlLm9uKCdwcmljZS1jaGFuZ2UnLCAoKSA9PiB0aGlzLnVwZGF0ZVRvdGFsUHJpY2UoKSk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgdGhlIHByb2R1Y3Qgb2JqZWN0IGZvciBsYXRlciB1c2VcbiAgICAgICAgICAgICAgICB0aGlzLnByb2R1Y3RzLnB1c2gocHJvZHVjdCk7XG4gICAgICAgICAgICAgICAgJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycsIHByb2R1Y3QpO1xuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVG90YWxQcmljZSgpO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUFkZFNlbGVjdGVkVG9DYXJ0QnV0dG9uKCkge1xuICAgICAgICBjb25zdCAkYWxsID0gJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJywgdGhpcy4kYWxzb0JvdWdodEVsKTtcbiAgICAgICAgY29uc3QgJGNoZWNrZWQgPSAkYWxsLmZpbHRlcignOmNoZWNrZWQnKTtcbiAgICAgICAgY29uc3QgJGJ0bnMgPSAkKCdbZGF0YS1idXR0b25zXScsIHRoaXMuJGFsc29Cb3VnaHRFbCk7XG5cbiAgICAgICAgaWYgKCRjaGVja2VkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHN0ciA9ICRjaGVja2VkLmxlbmd0aCA9PT0gJGFsbC5sZW5ndGhcbiAgICAgICAgICAgICAgICA/ICgkY2hlY2tlZC5sZW5ndGggPD0gdGhpcy5hbGxOdW1iZXJUZXh0cy5sZW5ndGggPyB0aGlzLmFsbE51bWJlclRleHRzWyRjaGVja2VkLmxlbmd0aCAtIDFdIDogJGNoZWNrZWQubGVuZ3RoKVxuICAgICAgICAgICAgICAgIDogKCRjaGVja2VkLmxlbmd0aCA8PSB0aGlzLm51bWJlclRleHRzLmxlbmd0aCA/IHRoaXMubnVtYmVyVGV4dHNbJGNoZWNrZWQubGVuZ3RoIC0gMV0gOiAkY2hlY2tlZC5sZW5ndGgpO1xuICAgICAgICAgICAgY29uc3QgJGJ0biA9ICQoJ1tkYXRhLWFkZC1zZWxlY3RlZF0nLCB0aGlzLiRhbHNvQm91Z2h0RWwpO1xuICAgICAgICAgICAgY29uc3QgdGV4dCA9IFN0cmluZygkYnRuLmRhdGEoJ29yaWdpbmFsVGV4dCcpIHx8ICRidG4uaHRtbCgpKTtcbiAgICAgICAgICAgICRidG4uZGF0YSgnb3JpZ2luYWxUZXh0JywgdGV4dCkuaHRtbCh0ZXh0LnJlcGxhY2UoJyVzdHIlJywgc3RyKSk7XG4gICAgICAgICAgICAkYnRucy5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGJ0bnMucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIE5vIGxvbmdlciB1c2VkLiBLZWVwIGZvciBvdGhlciB0aGlyZC1wYXJ0eSBzY3JpcHRzIGNvbXBhdGliaWxpdHkuXG4gICAgLyoqXG4gICAgICogUHJvbWlzZSB0byBDYWxsIGFmdGVyIHRoZSBwYXJlbnQgcHJvZHVjdCBpcyBhZGRlZCB0byBhZGQgYWxzby1ib3VnaHQgcHJvZHVjdHMuXG4gICAgICovXG4gICAgYXN5bmMgcGFyZW50UHJvZHVjdEFkZGVkVG9DYXJ0KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncGFyZW50IHByb2R1Y3QgYWRkZWQnKTtcblxuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBsZXQgc3VjY2VzcyA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgaWYgKHByb2R1Y3QuJHNjb3BlLmZpbmQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XTpjaGVja2VkJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBhd2FpdCBwcm9taXNlU2VyaWFsKHByb21pc2VzKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtZXhwcmVzc2lvbnNcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XG4gICAgfVxuXG4gICAgXG5cbiAgICBhc3luYyBhZGRTZWxlY3RlZFByb2R1Y3RzVG9DYXJ0KCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0SWRzID0gJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdOmNoZWNrZWQnLCB0aGlzLiRhbHNvQm91Z2h0RWwpXG4gICAgICAgICAgICAuZ2V0KClcbiAgICAgICAgICAgIC5tYXAoZWwgPT4gJChlbCkudmFsKCkpO1xuXG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBbXTtcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuXG4gICAgICAgIC8vIGFkZCBwYXJlbnQgcHJvZHVjdCB0byBjYXJ0XG4gICAgICAgIGlmIChwcm9kdWN0SWRzLmluZGV4T2YodGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy5wcm9kdWN0SWQpID4gLTEpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSByZXBvcnRGb3JtVmFsaWRpdHkodGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscy4kZm9ybS5nZXQoMCkpO1xuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbZXJyLCByZXNwXSA9IGF3YWl0IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMuYWRkUHJvZHVjdFRvQ2FydEFzeW5jKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNc2cgPSBlcnIgfHwgcmVzcC5kYXRhLmVycm9yO1xuICAgICAgICAgICAgICAgIGlmIChlcnJvck1zZykge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvZHVjdDogdGhpcy5wYXJlbnRQcm9kdWN0RGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3AsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAkKGBbZGF0YS1hbHNvLWJvdWdodC1jaGVja2JveF1bdmFsdWU9XCIke3RoaXMucGFyZW50UHJvZHVjdERldGFpbHMucHJvZHVjdElkfVwiXWAsIHRoaXMuJGFsc29Cb3VnaHRFbClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5wcm9wKCdjaGVja2VkJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAudHJpZ2dlcignY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgJHByb2R1Y3RFbHMgPSAkKCdbZGF0YS1wcm9kdWN0LWlkXScsIHRoaXMuJGFsc29Cb3VnaHRFbCkubm90KCdbZGF0YS1wYXJlbnQtcHJvZHVjdF0nKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2R1Y3RJZHMubGVuZ3RoICYmIHN1Y2Nlc3M7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gcHJvZHVjdElkc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwcm9kdWN0SWQgfHwgcHJvZHVjdElkID09IHRoaXMucGFyZW50UHJvZHVjdERldGFpbHMucHJvZHVjdElkKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0RWwgPSAkcHJvZHVjdEVscy5maWx0ZXIoYFtkYXRhLXByb2R1Y3QtaWQ9XCIke3Byb2R1Y3RJZH1cIl1gKTtcblxuICAgICAgICAgICAgaWYgKCRwcm9kdWN0RWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghJHByb2R1Y3RFbC5kYXRhKCdwcm9kdWN0RGV0YWlscycpKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5sb2FkUHJvZHVjdERldGFpbHMoJHByb2R1Y3RFbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSAkcHJvZHVjdEVsLmRhdGEoJ3Byb2R1Y3REZXRhaWxzJyk7XG5cbiAgICAgICAgICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdWNjZXNzID0gcmVwb3J0Rm9ybVZhbGlkaXR5KHByb2R1Y3QuJGZvcm0uZ2V0KDApKTtcbiAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgW2VyciwgcmVzcF0gPSBhd2FpdCBwcm9kdWN0LmFkZFByb2R1Y3RUb0NhcnRBc3luYygpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTXNnID0gZXJyIHx8IHJlc3AuZGF0YS5lcnJvcjtcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3QsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgJCgnW2RhdGEtYWxzby1ib3VnaHQtY2hlY2tib3hdJywgcHJvZHVjdC4kc2NvcGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJvcCgnY2hlY2tlZCcsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IHByb2R1Y3RJZHMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gb3BlbiB0aGUgcHJvZHVjdCBmb3JtXG4gICAgICAgICAgICAgICAgY29uc3QgJHRvZ2dsZSA9ICQoJ1tkYXRhLW9wdGlvbnMtY29sbGFwc2libGVdJywgcHJvZHVjdC4kc2NvcGUpO1xuICAgICAgICAgICAgICAgIGlmICghJHRvZ2dsZS5oYXNDbGFzcygnaXMtb3BlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgICR0b2dnbGUudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdCB7IHByb2R1Y3QsIHJlc3AgfSA9IHJlc3VsdHNbMF07XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmIChwcm9kdWN0LnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIC8vIFN1cGVybWFya2V0IE9CUFMgTW9kXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXAgIT09ICdoaWRlJykge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0LnByZXZpZXdNb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvZHVjdC51cGRhdGVDYXJ0Q29udGVudChwcm9kdWN0LnByZXZpZXdNb2RhbCwgcmVzcC5kYXRhLmNhcnRfaXRlbS5pZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG1vZGFsLCByZWRpcmVjdCB0byB0aGUgY2FydCBwYWdlXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvKHJlc3AuZGF0YS5jYXJ0X2l0ZW0uY2FydF91cmwgfHwgdGhpcy5jb250ZXh0LnVybHMuY2FydCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRQcm9kdWN0VG9DYXJ0KHByb2R1Y3QpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSAkKCdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLCBwcm9kdWN0LiRzY29wZSkuZ2V0KDApO1xuICAgICAgICAgICAgY29uc3QgJGFkZFRvQ2FydEJ0biA9ICQoJyNmb3JtLWFjdGlvbi1hZGRUb0NhcnQnLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbEJ0blZhbCA9ICRhZGRUb0NhcnRCdG4udmFsKCk7XG4gICAgICAgICAgICBjb25zdCB3YWl0TWVzc2FnZSA9ICRhZGRUb0NhcnRCdG4uZGF0YSgnd2FpdE1lc3NhZ2UnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlcnJvckJveCA9ICQoJ1tkYXRhLWVycm9yLWJveF0nLCBwcm9kdWN0LiRzY29wZSk7XG4gICAgICAgICAgICBjb25zdCAkZXJyb3JNc2cgPSAkKCdbZGF0YS1lcnJvci1tZXNzYWdlXScsIHByb2R1Y3QuJHNjb3BlKTtcbiAgICAgICAgICAgIGNvbnN0ICRjaGVja2JveCA9ICQoJ1tkYXRhLWFsc28tYm91Z2h0LWNoZWNrYm94XScsIHByb2R1Y3QuJHNjb3BlKTtcblxuICAgICAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgICAgIGlmICh3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHByb2R1Y3QuJG92ZXJsYXkuc2hvdygpO1xuXG4gICAgICAgICAgICAvLyBBZGQgaXRlbSB0byBjYXJ0XG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKHByb2R1Y3QuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtKSksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmb3JtKTtcblxuICAgICAgICAgICAgICAgICRhZGRUb0NhcnRCdG5cbiAgICAgICAgICAgICAgICAgICAgLnZhbChvcmlnaW5hbEJ0blZhbClcbiAgICAgICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICAgICAgcHJvZHVjdC4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBHdWFyZCBzdGF0ZW1lbnRcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZWplY3QgYWRkIHByb2R1Y3QnKTtcblxuICAgICAgICAgICAgICAgICAgICAkZXJyb3JNc2cuaHRtbChlcnJvck1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkZXJyb3JCb3gucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlcnJvckJveC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb0VsZW1lbnQoJGVycm9yQm94LmdldCgwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNvbHZlIGFkZCBwcm9kdWN0Jyk7XG4gICAgICAgICAgICAgICAgJGVycm9yTXNnLmVtcHR5KCk7XG4gICAgICAgICAgICAgICAgJGVycm9yQm94LmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgICAgICAgICAgJGNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSkudHJpZ2dlcignY2hhbmdlJyk7XG5cbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24nO1xuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xuaW1wb3J0IGZvdW5kYXRpb24gZnJvbSAnLi4vZ2xvYmFsL2ZvdW5kYXRpb24nOyAvLyBTdXBlcm1hcmtldFxuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4uL3Byb2R1Y3QvaW1hZ2UtZ2FsbGVyeSc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IGRlZmF1bHRNb2RhbCwgTW9kYWxFdmVudHMsIHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgV2lzaGxpc3QgZnJvbSAnLi4vd2lzaGxpc3QnO1xuaW1wb3J0IGJhbm5lclV0aWxzIGZyb20gJy4vdXRpbHMvYmFubmVyLXV0aWxzJztcbmltcG9ydCBBbHNvQm91Z2h0IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvYWxzby1ib3VnaHQnOyAvLyBQYXBhdGhlbWVzIC0gQWxzb0JvdWdodFxuaW1wb3J0IG1lZGlhUXVlcnlMaXN0RmFjdG9yeSBmcm9tICcuLi9jb21tb24vbWVkaWEtcXVlcnktbGlzdCc7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbmltcG9ydCB7IHNjcm9sbFRvcCB9IGZyb20gJy4uLy4uL3BhcGF0aGVtZXMvdGhlbWUtdXRpbHMnOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG5pbXBvcnQgeyBvcGVuQ2FydFByZXZpZXcgIH0gZnJvbSAnLi4vLi4vcGFwYXRoZW1lcy91dGlscyc7IC8vIHBhcGF0aGVtZXMtaW5oZWFsdGhcblxuY29uc3QgbWVkaXVtTWVkaWFRdWVyeUxpc3QgPSBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoJ21lZGl1bScpOyAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG5cbi8vIFN1cGVybWFya2V0IC0gT0JQUyBNb2Rcbi8qIGVzbGludC1kaXNhYmxlICovXG5mdW5jdGlvbiBzaGFrZSgkZWwsIHNldHRpbmdzKSB7XG4gICAgaWYgKHR5cGVvZiBzZXR0aW5ncyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgc2V0dGluZ3MgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNldHRpbmdzLmludGVydmFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZXR0aW5ncy5pbnRlcnZhbCA9IDEwMDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNldHRpbmdzLmRpc3RhbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZXR0aW5ncy5kaXN0YW5jZSA9IDEwO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygc2V0dGluZ3MudGltZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHNldHRpbmdzLnRpbWVzID0gNDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHNldHRpbmdzLmNvbXBsZXRlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZXR0aW5ncy5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHsgfTtcbiAgICB9XG5cbiAgICAkZWwuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuXG4gICAgZm9yIChsZXQgaXRlciA9IDA7IGl0ZXIgPCAoc2V0dGluZ3MudGltZXMgKyAxKTsgaXRlcisrKSB7XG4gICAgICAgICRlbC5hbmltYXRlKHsgbGVmdDogKChpdGVyICUgMiA9PT0gMCA/IHNldHRpbmdzLmRpc3RhbmNlIDogc2V0dGluZ3MuZGlzdGFuY2UgKiAtMSkpIH0sIHNldHRpbmdzLmludGVydmFsKTtcbiAgICB9XG5cbiAgICAkZWwuYW5pbWF0ZSh7IGxlZnQ6IDAgfSwgc2V0dGluZ3MuaW50ZXJ2YWwsIHNldHRpbmdzLmNvbXBsZXRlKTtcbn1cbi8qIGVzbGludC1lbmFibGUgKi9cblxuLy8gU3VwZXJtYXJrZXQ6IEZpeCBQcmljZSBub3QgdXBkYXRlIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBpcyBjaGVja2VkXG5mdW5jdGlvbiBzdXBlcm1hcmtldFNlcmlhbGl6ZSgkZm9ybSkge1xuICAgIGNvbnN0IGFzc29jID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKS5yZWR1Y2UoKF9hc3NvYywgeyBuYW1lLCB2YWx1ZSB9KSA9PiB7XG4gICAgICAgIF9hc3NvY1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gX2Fzc29jO1xuICAgIH0sIHt9KTtcbiAgICByZXR1cm4gJC5wYXJhbShhc3NvYyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWxzIHtcbiAgICBjb25zdHJ1Y3Rvcigkc2NvcGVBcmcsIGNvbnRleHQsIHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHt9KSB7IC8vIFBhcGF0aGVtZXMgQWxzbyBCb3VnaHQgTU9EXG4gICAgICAgIC8vIFBhcGF0aGVtZXMgQWxzbyBCb3VnaHQgTU9EIHt7e1xuICAgICAgICBjb25zdCAkc2NvcGUgPSBjb250ZXh0LmVuYWJsZUFsc29Cb3VnaHQgPyAkc2NvcGVBcmcuZmluZCgnW2RhdGEtYWxzby1ib3VnaHQtcGFyZW50LXNjb3BlXScpIDogJHNjb3BlQXJnO1xuICAgICAgICB0aGlzLiRwcm9kdWN0Vmlld1Njb3BlID0gJHNjb3BlQXJnO1xuICAgICAgICAvLyB9fX1cblxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkgPSAkKCdbZGF0YS1jYXJ0LWl0ZW0tYWRkXSAubG9hZGluZ092ZXJsYXknKTtcbiAgICAgICAgdGhpcy4kc2NvcGUgPSAkc2NvcGU7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5ID0gbmV3IEltYWdlR2FsbGVyeSgkKCdbZGF0YS1pbWFnZS1nYWxsZXJ5XScsIHRoaXMuJHNjb3BlKSk7XG4gICAgICAgIHRoaXMuaW1hZ2VHYWxsZXJ5LmluaXQoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5RdWFudGl0eUNoYW5nZSgpO1xuICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgZm91bmRhdGlvbigkKGRvY3VtZW50KSk7IC8vIFN1cGVybWFya2V0XG4gICAgICAgIHRoaXMuaW5pdEN1c3RvbVRhYnMoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG5cbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuICAgICAgICB0aGlzLmdldFRhYlJlcXVlc3RzKCk7XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lcyAtIEFsc29Cb3VnaHRcbiAgICAgICAgaWYgKGNvbnRleHQuZW5hYmxlQWxzb0JvdWdodCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IGFsc29Cb3VnaHRPcHRpb25zIH0gPSB3aW5kb3cuc3VwZXJtYXJrZXRUaGVtZUV4dHJhQ29uZmlnIHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuYWxzb0JvdWdodCA9IG5ldyBBbHNvQm91Z2h0KHRoaXMsIGFsc29Cb3VnaHRPcHRpb25zKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgJHNjb3BlKTtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RPcHRpb25zRWxlbWVudCA9ICQoJ1tkYXRhLXByb2R1Y3Qtb3B0aW9uLWNoYW5nZV0nLCAkZm9ybSk7XG4gICAgICAgIGNvbnN0IGhhc09wdGlvbnMgPSAoJHByb2R1Y3RPcHRpb25zRWxlbWVudC5odG1sKCkgfHwgJycpLnRyaW0oKS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGhhc0RlZmF1bHRPcHRpb25zID0gJHByb2R1Y3RPcHRpb25zRWxlbWVudC5maW5kKCdbZGF0YS1kZWZhdWx0XScpLmxlbmd0aDtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWNoaWFyYSBlZGl0ZWQgZm9yIGFsc28tYm91Z2h0XG4gICAgICAgIHRoaXMucHJpY2UgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2R1Y3RJZCA9ICQoJ2lucHV0W25hbWU9XCJwcm9kdWN0X2lkXCJdJywgdGhpcy4kc2NvcGUpLnZhbCgpO1xuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0OiBGaXggY2xpY2sgcmV2aWV3cyBsaW5rIG9wZW4gdGFiXG4gICAgICAgICQoJ2FbaHJlZio9XCIjdGFiLXJldmlld3NcIl0nLCAkc2NvcGUpLm9uKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCEkKGV2ZW50LnRhcmdldCkuaXMoJy50YWItdGl0bGUnKSkge1xuICAgICAgICAgICAgICAgICQoJ1tkYXRhLXRhYl0gYVtocmVmPVwiI3RhYi1yZXZpZXdzXCJdJywgJHNjb3BlKS5jbGljaygpLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJHByb2R1Y3RPcHRpb25zRWxlbWVudC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9kdWN0T3B0aW9uc0NoYW5nZWQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkZm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRQcm9kdWN0VG9DYXJ0KGV2ZW50LCAkZm9ybVswXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBwcm9kdWN0IGF0dHJpYnV0ZXMuIEFsc28gdXBkYXRlIHRoZSBpbml0aWFsIHZpZXcgaW4gY2FzZSBpdGVtcyBhcmUgb29zXG4gICAgICAgIC8vIG9yIGhhdmUgZGVmYXVsdCB2YXJpYW50IHByb3BlcnRpZXMgdGhhdCBjaGFuZ2UgdGhlIHZpZXdcbiAgICAgICAgaWYgKChfLmlzRW1wdHkocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKSB8fCBoYXNEZWZhdWx0T3B0aW9ucykgJiYgaGFzT3B0aW9ucykge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZSgkcHJvZHVjdElkLCBzdXBlcm1hcmtldFNlcmlhbGl6ZSgkZm9ybSksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoYXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNEZWZhdWx0T3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoYXR0cmlidXRlc0RhdGEsIGF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMocHJvZHVjdEF0dHJpYnV0ZXNEYXRhKTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAkcHJvZHVjdE9wdGlvbnNFbGVtZW50LnNob3coKTtcblxuICAgICAgICB0aGlzLnByZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI3ByZXZpZXdNb2RhbCcpWzBdO1xuXG4gICAgICAgIC8vIFN1cGVybWFya2V0XG4gICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLmFkZENsYXNzKCdwcmV2aWV3LW1vZGFsJykuYWRkQ2xhc3MoYHByZXZpZXctbW9kYWwtLSR7Y29udGV4dC5hZGRfdG9fY2FydF9wb3B1cH1gKTtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwID09PSAnbWluaScpIHtcbiAgICAgICAgICAgICAgICAvLyB1bmJpbmQgb3Blbi9jbG9zZSBldmVudCBvZiB0aGUgb3JpZ2luYWwgbW9kYWxcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLm9wZW4sIHRoaXMucHJldmlld01vZGFsLm9uTW9kYWxPcGVuKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC4kbW9kYWwub2ZmKE1vZGFsRXZlbnRzLmNsb3NlLCB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsQ2xvc2UpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCBvcGVuL2NsYXNzIGV2ZW50IGZvciBtaW5pIHByZXZpZXcgbW9kYWxcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsT3BlbiA9IHRoaXMub25NaW5pUHJldmlld01vZGFsT3Blbi5iaW5kKHRoaXMucHJldmlld01vZGFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsQ2xvc2UgPSB0aGlzLm9uTWluaVByZXZpZXdNb2RhbENsb3NlLmJpbmQodGhpcy5wcmV2aWV3TW9kYWwpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldmlld01vZGFsLiRtb2RhbC5vbihNb2RhbEV2ZW50cy5vcGVuLCB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsT3Blbik7XG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3TW9kYWwuJG1vZGFsLm9uKE1vZGFsRXZlbnRzLmNsb3NlLCB0aGlzLnByZXZpZXdNb2RhbC5vbk1vZGFsQ2xvc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB0aGlzLmluaXRUYWJTY3JvbGxUb1ZpZXdwb3J0KCk7XG4gICAgICAgIHRoaXMuaW5pdEdvVG9UYWIoKTtcblxuICAgICAgICAvLyBOZWVkIGZvciBwYXBhdGhlbWVzLW1xcG8gKyBhbHNvYm91Z2h0IHYyIGNvbXBsaWFuY2VcbiAgICAgICAgdGhpcy4kc2NvcGUuZGF0YSgncHJvZHVjdERldGFpbHNJbnN0YW5jZScsIHRoaXMpO1xuICAgICAgICB1dGlscy5ob29rcy5lbWl0KCdwcm9kdWN0LXByb2R1Y3RkZXRhaWxzLWluaXQnLCB0aGlzKTtcblxuICAgICAgICAvLyBDaGlhcmE6IGRyb3Bkb3duIGNvbG9yIHN3YXRjaGVzXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuc3dhdGNoX29wdGlvbl9kaXNwbGF5X3R5cGUgPT09ICdkcm9wZG93bicgfHwgdGhpcy5jb250ZXh0LnN3YXRjaF9vcHRpb25fZGlzcGxheV90eXBlID09PSAnYm90aCcpIHtcbiAgICAgICAgICAgIGltcG9ydCgnLi4vLi4vcGFwYXRoZW1lcy9kcm9wZG93bi1zd2F0Y2hlcycpXG4gICAgICAgICAgICAgICAgLnRoZW4obW9kdWxlID0+IG1vZHVsZS5kZWZhdWx0KHRoaXMsIHtcbiAgICAgICAgICAgICAgICAgICAgaGlkZU9yaWdpbmFsU3dhdGNoZXM6IHRoaXMuY29udGV4dC5zd2F0Y2hfb3B0aW9uX2Rpc3BsYXlfdHlwZSA9PT0gJ2Ryb3Bkb3duJyxcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgaW5pdFRhYlNjcm9sbFRvVmlld3BvcnQoKSB7XG4gICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICBjb25zdCAkcXVpY2tWaWV3ID0gdGhpcy4kc2NvcGUuY2xvc2VzdCgnLnF1aWNrVmlldycpLmZpcnN0KCk7XG4gICAgICAgICRxdWlja1ZpZXcuY3NzKCdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHJlc3VtZVN0aWNreUhlYWRlcjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNjcm9sbFRvVmlldyA9IGVsID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKCQoZWwpLmF0dHIoJ2hyZWYnKSwgdGhpcy4kc2NvcGUpLmZpcnN0KCk7XG4gICAgICAgICAgICBpZiAoJHF1aWNrVmlldy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGggPSAkcXVpY2tWaWV3LnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIGxldCAkZWwgPSAkdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoISRlbC5pcygnLnF1aWNrVmlldycpICYmICRlbC5sZW5ndGggPiAwICYmIGkrKyA8IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGggKz0gJGVsLnBvc2l0aW9uKCkudG9wO1xuICAgICAgICAgICAgICAgICAgICAkZWwgPSAkZWwub2Zmc2V0UGFyZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHF1aWNrVmlldy5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBoIC0gNTAsXG4gICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6ICR0YXJnZXQub2Zmc2V0KCkudG9wIC0gNTAsXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgICAgICAgICAgICAgICAvLyBza2lwIHN0aWNreSBoZWFkZXIgd2hpbGUgc2Nyb2xsaW5nIHRvIHRoZSB0YWIgY29udGVudFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc3VtZVN0aWNreUhlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS5hZGRDbGFzcygnX3NraXBDaGVja1Njcm9sbFVwU3RpY2t5SGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiAkKCdodG1sLCBib2R5JykuY2xlYXJRdWV1ZSgpLFxuICAgICAgICAgICAgICAgICAgICBhbHdheXM6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXN1bWVTdGlja3lIZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bWVTdGlja3lIZWFkZXIgPSBzZXRUaW1lb3V0KCgpID0+ICRib2R5LnJlbW92ZUNsYXNzKCdfc2tpcENoZWNrU2Nyb2xsVXBTdGlja3lIZWFkZXInKSwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiAudGFiJywgdGhpcy4kc2NvcGUpXG4gICAgICAgICAgICAub24oJ29wZW5lZCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobWVkaXVtTWVkaWFRdWVyeUxpc3QubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb1ZpZXcoJChldmVudC50YXJnZXQpLmZpbmQoJ2EnKS5nZXQoMCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICBpbml0R29Ub1RhYigpIHtcbiAgICAgICAgJCgnW2RhdGEtZ290b3RhYl0nLCB0aGlzLiRzY29wZSkub24oJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGhyZWYgPSAkZWwuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgICBpZiAobWVkaXVtTWVkaWFRdWVyeUxpc3QubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS10YWJdJykuZmluZChgYVtocmVmPVwiJHtocmVmfVwiYCkuZmlyc3QoKTtcbiAgICAgICAgICAgICAgICAkdGFyZ2V0LnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSB0aGlzLiRzY29wZS5maW5kKGhyZWYpLmZpcnN0KCk7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wKCR0YXJnZXQub2Zmc2V0KCkudG9wIC0gMTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcbiAgICAgKiBTYWZhcmkgYnJvd3NlciB3aXRoIGpxdWVyeSAzLjMuMSBoYXMgYW4gaXNzdWUgdXBsb2FkaW5nIGVtcHR5IGZpbGUgcGFyYW1ldGVycy4gVGhpcyBmdW5jdGlvbiByZW1vdmVzIGFueSBlbXB0eSBmaWxlcyBmcm9tIHRoZSBmb3JtIHBhcmFtc1xuICAgICAqIEBwYXJhbSBmb3JtRGF0YTogRm9ybURhdGEgb2JqZWN0XG4gICAgICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XG4gICAgICovXG4gICAgZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKGZvcm1EYXRhKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbF0gb2YgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsIGluc3RhbmNlb2YgRmlsZSAmJiAhdmFsLm5hbWUgJiYgIXZhbC5zaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xuICAgIH1cblxuICAgIHNldFByb2R1Y3RWYXJpYW50KCkge1xuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmlzQU1QKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzID0gW107XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSBbXTtcblxuICAgICAgICAkLmVhY2goJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJyksIChpbmRleCwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0O1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uVGl0bGUgPSBvcHRpb25MYWJlbC5zcGxpdCgnOicpWzBdLnRyaW0oKTtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVpcmVkID0gb3B0aW9uTGFiZWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVxdWlyZWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSB2YWx1ZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUnKTtcblxuICAgICAgICAgICAgaWYgKCh0eXBlID09PSAnaW5wdXQtZmlsZScgfHwgdHlwZSA9PT0gJ2lucHV0LXRleHQnIHx8IHR5cGUgPT09ICdpbnB1dC1udW1iZXInKSAmJiB2YWx1ZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlID09PSAnJyAmJiByZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIHVuc2F0aXNmaWVkUmVxdWlyZWRGaWVsZHMucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlID09PSAndGV4dGFyZWEnICYmIHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhJykudmFsdWUgPT09ICcnICYmIHJlcXVpcmVkKSB7XG4gICAgICAgICAgICAgICAgdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzU2F0aXNmaWVkID0gQXJyYXkuZnJvbSh2YWx1ZS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKSkuZXZlcnkoKHNlbGVjdCkgPT4gc2VsZWN0LnNlbGVjdGVkSW5kZXggIT09IDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBBcnJheS5mcm9tKHZhbHVlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCcpKS5tYXAoKHgpID0+IHgudmFsdWUpLmpvaW4oJy0nKTtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2RhdGVTdHJpbmd9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkSW5kZXggPSBzZWxlY3Quc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06JHtzZWxlY3Qub3B0aW9uc1tzZWxlY3RlZEluZGV4XS5pbm5lclRleHR9YCk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdzZXQtcmVjdGFuZ2xlJyB8fCB0eXBlID09PSAnc2V0LXJhZGlvJyB8fCB0eXBlID09PSAnc3dhdGNoJyB8fCB0eXBlID09PSAnaW5wdXQtY2hlY2tib3gnIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHZhbHVlLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0OmNoZWNrZWQnKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBlZGl0ZWRcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3NldC1yZWN0YW5nbGUnIHx8IHR5cGUgPT09ICdzZXQtcmFkaW8nIHx8IHR5cGUgPT09ICdwcm9kdWN0LWxpc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IGNoZWNrZWQubGFiZWxzID8gY2hlY2tlZC5sYWJlbHNbMF0uaW5uZXJUZXh0IDogJChgbGFiZWxbZm9yPSR7Y2hlY2tlZC5pZH1dYCkuZmlyc3QoKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnB1c2goYCR7b3B0aW9uVGl0bGV9OiR7bGFiZWx9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N3YXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gY2hlY2tlZC5sYWJlbHMgPyBjaGVja2VkLmxhYmVsc1swXS5jaGlsZHJlblswXSA6ICQoYGxhYmVsW2Zvcj0ke2NoZWNrZWQuaWR9XWApLmNoaWxkcmVuKCkuZ2V0KDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfToke2xhYmVsLnRpdGxlfWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnMucHVzaChgJHtvcHRpb25UaXRsZX06WWVzYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdpbnB1dC1jaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKGAke29wdGlvblRpdGxlfTpOb2ApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgICAgICB1bnNhdGlzZmllZFJlcXVpcmVkRmllbGRzLnB1c2godmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHByb2R1Y3RWYXJpYW50ID0gdW5zYXRpc2ZpZWRSZXF1aXJlZEZpZWxkcy5sZW5ndGggPT09IDAgPyBvcHRpb25zLnNvcnQoKS5qb2luKCcsICcpIDogJ3Vuc2F0aXNmaWVkJztcbiAgICAgICAgY29uc3QgdmlldyA9ICQoJy5wcm9kdWN0VmlldycpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0VmFyaWFudCkge1xuICAgICAgICAgICAgcHJvZHVjdFZhcmlhbnQgPSBwcm9kdWN0VmFyaWFudCA9PT0gJ3Vuc2F0aXNmaWVkJyA/ICcnIDogcHJvZHVjdFZhcmlhbnQ7XG4gICAgICAgICAgICBpZiAodmlldy5hdHRyKCdkYXRhLWV2ZW50LXR5cGUnKSkge1xuICAgICAgICAgICAgICAgIHZpZXcuYXR0cignZGF0YS1wcm9kdWN0LXZhcmlhbnQnLCBwcm9kdWN0VmFyaWFudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3ROYW1lID0gdmlldy5maW5kKCcucHJvZHVjdFZpZXctdGl0bGUnKVswXS5pbm5lclRleHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZCA9ICQoYFtkYXRhLW5hbWU9JHtKU09OLnN0cmluZ2lmeShwcm9kdWN0TmFtZSl9XWApOyAvLyBGaXhlZCBieSBQYXBhVGhlbWVzXG4gICAgICAgICAgICAgICAgY2FyZC5hdHRyKCdkYXRhLXByb2R1Y3QtdmFyaWFudCcsIHByb2R1Y3RWYXJpYW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNpbmNlICRwcm9kdWN0VmlldyBjYW4gYmUgZHluYW1pY2FsbHkgaW5zZXJ0ZWQgdXNpbmcgcmVuZGVyX3dpdGgsXG4gICAgICogV2UgaGF2ZSB0byByZXRyaWV2ZSB0aGUgcmVzcGVjdGl2ZSBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHBhcmFtICRzY29wZVxuICAgICAqL1xuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICRwcmljZVdpdGhUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIHJycFdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcucnJwLXByaWNlLS13aXRoVGF4JywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBycnBXaXRob3V0VGF4OiB7XG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcnJwLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbm9uU2FsZVdpdGhvdXRUYXg6IHtcbiAgICAgICAgICAgICAgICAkZGl2OiAkKCcubm9uLXNhbGUtcHJpY2UtLXdpdGhvdXRUYXgnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VTYXZlZDoge1xuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXNhdmVkXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xuICAgICAgICAgICAgICAgICRzcGFuOiAkKCcucHJpY2Utbm93LWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJHdlaWdodDogJCgnLnByb2R1Y3RWaWV3LWluZm8gW2RhdGEtcHJvZHVjdC13ZWlnaHRdJywgJHNjb3BlKSxcbiAgICAgICAgICAgICRpbmNyZW1lbnRzOiAkKCcuZm9ybS1maWVsZC0taW5jcmVtZW50cyA6aW5wdXQnLCAkc2NvcGUpLFxuICAgICAgICAgICAgJGFkZFRvQ2FydDogJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICRzY29wZSksXG4gICAgICAgICAgICAkd2lzaGxpc3RWYXJpYXRpb246ICQoJ1tkYXRhLXdpc2hsaXN0LWFkZF0gW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nLCAkc2NvcGUpLFxuICAgICAgICAgICAgc3RvY2s6IHtcbiAgICAgICAgICAgICAgICAkY29udGFpbmVyOiAkKCcuZm9ybS1maWVsZC0tc3RvY2ssIC5wcm9kdWN0Vmlldy1pbmZvLW5hbWUtLXN0b2NrLCAucHJvZHVjdFZpZXctaW5mby12YWx1ZS0tc3RvY2snLCAkc2NvcGUpLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5IGVkaXRlZFxuICAgICAgICAgICAgICAgICRpbnB1dDogJCgnW2RhdGEtcHJvZHVjdC1zdG9ja10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICRiYWRnZTogJCgnLnByb2R1Y3RWaWV3LXN0b2NrTGFiZWwnLCAkc2NvcGUpLCAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2t1OiB7XG4gICAgICAgICAgICAgICAgJGxhYmVsOiAkKCdkdC5za3UtbGFiZWwnLCAkc2NvcGUpLFxuICAgICAgICAgICAgICAgICR2YWx1ZTogJCgnW2RhdGEtcHJvZHVjdC1za3VdJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGM6IHtcbiAgICAgICAgICAgICAgICAkbGFiZWw6ICQoJ2R0LnVwYy1sYWJlbCcsICRzY29wZSksXG4gICAgICAgICAgICAgICAgJHZhbHVlOiAkKCdbZGF0YS1wcm9kdWN0LXVwY10nLCAkc2NvcGUpLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1wbjoge1xuICAgICAgICAgICAgICAgICRsYWJlbDogJCgnZHQubXBuLWxhYmVsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkdmFsdWU6ICQoJ1tkYXRhLXByb2R1Y3QtbXBuXScsICRzY29wZSksXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcXVhbnRpdHk6IHtcbiAgICAgICAgICAgICAgICAkdGV4dDogJCgnLmluY3JlbWVudFRvdGFsJywgJHNjb3BlKSxcbiAgICAgICAgICAgICAgICAkaW5wdXQ6ICQoJ1tuYW1lPXF0eVxcXFxbXFxcXF1dJywgJHNjb3BlKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAkYnVsa1ByaWNpbmc6ICQoJy5wcm9kdWN0Vmlldy1pbmZvLWJ1bGtQcmljaW5nJywgJHNjb3BlKSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDaGVja3MgaWYgdGhlIGN1cnJlbnQgd2luZG93IGlzIGJlaW5nIHJ1biBpbnNpZGUgYW4gaWZyYW1lXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgaXNSdW5uaW5nSW5JZnJhbWUoKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNlbGYgIT09IHdpbmRvdy50b3A7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBIYW5kbGUgcHJvZHVjdCBvcHRpb25zIGNoYW5nZXNcbiAgICAgKlxuICAgICAqL1xuICAgIHByb2R1Y3RPcHRpb25zQ2hhbmdlZChldmVudCkge1xuICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQoJ1tuYW1lPVwicHJvZHVjdF9pZFwiXScsICRmb3JtKS52YWwoKTtcblxuICAgICAgICAvLyBEbyBub3QgdHJpZ2dlciBhbiBhamF4IHJlcXVlc3QgaWYgaXQncyBhIGZpbGUgb3IgaWYgdGhlIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IEZvcm1EYXRhXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5hdHRyKCd0eXBlJykgPT09ICdmaWxlJyB8fCB3aW5kb3cuRm9ybURhdGEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXQ6IGRpc3BsYXkgc2VsZWN0ZWQgc3dhdGNoIHRpdGxlXG4gICAgICAgIGlmICgkY2hhbmdlZE9wdGlvbi5kYXRhKCdwcm9kdWN0QXR0cmlidXRlTGFiZWwnKSkge1xuICAgICAgICAgICAgJGNoYW5nZWRPcHRpb25cbiAgICAgICAgICAgICAgICAuY2xvc2VzdCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdJylcbiAgICAgICAgICAgICAgICAuZmluZCgnW2RhdGEtb3B0aW9uLXZhbHVlXScpXG4gICAgICAgICAgICAgICAgLmh0bWwoJGNoYW5nZWRPcHRpb24uZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UocHJvZHVjdElkLCBzdXBlcm1hcmtldFNlcmlhbGl6ZSgkZm9ybSksICdwcm9kdWN0cy9idWxrLWRpc2NvdW50LXJhdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSA9IHJlc3BvbnNlLmRhdGEgfHwge307XG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0QXR0cmlidXRlc0NvbnRlbnQgPSByZXNwb25zZS5jb250ZW50IHx8IHt9O1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcm9kdWN0QXR0cmlidXRlcyhwcm9kdWN0QXR0cmlidXRlc0RhdGEpO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVWaWV3KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSwgcHJvZHVjdEF0dHJpYnV0ZXNDb250ZW50KTtcbiAgICAgICAgICAgIGJhbm5lclV0aWxzLmRpc3BhdGNoUHJvZHVjdEJhbm5lckV2ZW50KHByb2R1Y3RBdHRyaWJ1dGVzRGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dQcm9kdWN0SW1hZ2UoaW1hZ2UpIHtcbiAgICAgICAgaWYgKF8uaXNQbGFpbk9iamVjdChpbWFnZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHpvb21JbWFnZVVybCA9IHV0aWxzLnRvb2xzLmltYWdlU3Jjc2V0LmdldFNyY3NldChcbiAgICAgICAgICAgICAgICBpbWFnZS5kYXRhLFxuICAgICAgICAgICAgICAgIHsgJzF4JzogdGhpcy5jb250ZXh0Lnpvb21fc2l6ZSB9LFxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgICAgICAgIFNob3VsZCBtYXRjaCB6b29tIHNpemUgdXNlZCBmb3IgZGF0YS16b29tLWltYWdlIGluXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdC12aWV3Lmh0bWxcbiAgICAgICAgICAgICAgICAgICAgTm90ZSB0aGF0IHRoaXMgd2lsbCBvbmx5IGJlIHVzZWQgYXMgYSBmYWxsYmFjayBpbWFnZSBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBzcmNzZXRcbiAgICAgICAgICAgICAgICAgICAgQWxzbyBub3RlIHRoYXQgZ2V0U3Jjc2V0IHJldHVybnMgYSBzaW1wbGUgc3JjIHN0cmluZyB3aGVuIGV4YWN0bHkgb25lIHNpemUgaXMgcHJvdmlkZWRcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbWFpbkltYWdlVXJsID0gdXRpbHMudG9vbHMuaW1hZ2VTcmNzZXQuZ2V0U3Jjc2V0KFxuICAgICAgICAgICAgICAgIGltYWdlLmRhdGEsXG4gICAgICAgICAgICAgICAgeyAnMXgnOiB0aGlzLmNvbnRleHQucHJvZHVjdF9zaXplIH0sXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgU2hvdWxkIG1hdGNoIGZhbGxiYWNrIGltYWdlIHNpemUgdXNlZCBmb3IgdGhlIG1haW4gcHJvZHVjdCBpbWFnZSBpblxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzL3Byb2R1Y3RzL3Byb2R1Y3Qtdmlldy5odG1sXG4gICAgICAgICAgICAgICAgICAgIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSBiZSB1c2VkIGFzIGEgZmFsbGJhY2sgaW1hZ2UgZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgc3Jjc2V0XG4gICAgICAgICAgICAgICAgICAgIEFsc28gbm90ZSB0aGF0IGdldFNyY3NldCByZXR1cm5zIGEgc2ltcGxlIHNyYyBzdHJpbmcgd2hlbiBleGFjdGx5IG9uZSBzaXplIGlzIHByb3ZpZGVkXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IG1haW5JbWFnZVNyY3NldCA9IHRoaXMuY29udGV4dC5wcm9kdWN0X2ltYWdlX3Jlc3BvbnNpdmUgPyB1dGlscy50b29scy5pbWFnZVNyY3NldC5nZXRTcmNzZXQoaW1hZ2UuZGF0YSkgOiAnJztcblxuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkuc2V0QWx0ZXJuYXRlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIC8vIG1haW5JbWFnZVVybDogYCR7bWFpbkltYWdlVXJsfT9pbWJ5cGFzcz1vbmAsXG4gICAgICAgICAgICAgICAgLy8gem9vbUltYWdlVXJsOiBgJHt6b29tSW1hZ2VVcmx9P2ltYnlwYXNzPW9uYCxcbiAgICAgICAgICAgICAgICBtYWluSW1hZ2VVcmwsXG4gICAgICAgICAgICAgICAgem9vbUltYWdlVXJsLFxuICAgICAgICAgICAgICAgIG1haW5JbWFnZVNyY3NldCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbWFnZUdhbGxlcnkucmVzdG9yZUltYWdlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEhhbmRsZSBhY3Rpb24gd2hlbiB0aGUgc2hvcHBlciBjbGlja3Mgb24gKyAvIC0gZm9yIHF1YW50aXR5XG4gICAgICpcbiAgICAgKi9cbiAgICBsaXN0ZW5RdWFudGl0eUNoYW5nZSgpIHtcbiAgICAgICAgdGhpcy4kc2NvcGUub24oJ2NsaWNrJywgJ1tkYXRhLXF1YW50aXR5LWNoYW5nZV0gYnV0dG9uJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dDtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWluID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5TWF4ID0gcGFyc2VJbnQoJGlucHV0LmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcblxuICAgICAgICAgICAgbGV0IHF0eSA9IHBhcnNlSW50KCRpbnB1dC52YWwoKSwgMTApO1xuXG4gICAgICAgICAgICAvLyBJZiBhY3Rpb24gaXMgaW5jcmVtZW50aW5nXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYycpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtYXggb3B0aW9uIGlzIHNldFxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1heCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZXhjZWVkIG1heFxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSArIDEpIDw9IHF1YW50aXR5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHkrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocXR5ID4gMSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHF1YW50aXR5IG1pbiBvcHRpb24gaXMgc2V0XG4gICAgICAgICAgICAgICAgaWYgKHF1YW50aXR5TWluID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBmYWxsIGJlbG93IG1pblxuICAgICAgICAgICAgICAgICAgICBpZiAoKHF0eSAtIDEpID49IHF1YW50aXR5TWluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBxdHktLTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHF0eS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdXBkYXRlIGhpZGRlbiBpbnB1dFxuICAgICAgICAgICAgdmlld01vZGVsLnF1YW50aXR5LiRpbnB1dC52YWwocXR5KTtcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0ZXh0XG4gICAgICAgICAgICB2aWV3TW9kZWwucXVhbnRpdHkuJHRleHQudGV4dChxdHkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICAvLyBHaWFvIC0gc3VwZXJtYXJrZXQ6XG4gICAgICAgIC8vIEZpeCBwcm9ibGVtIHdoZW4gZW50ZXIgb24gcXVhbnRpdHkgYm94IHdvbid0IGRlY3JlYXNlIDEgdW5pdFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLmdldFZpZXdNb2RlbCh0aGlzLiRzY29wZSkucXVhbnRpdHkuJGlucHV0Lm9uKCdrZXlwcmVzcycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICB9XG5cbiAgICAvLyBwYXBhdGhlbWVzLWNoaWFyYSBhZGRlZCBmb3IgYWxzby1ib3VnaHRcbiAgICBhZGRQcm9kdWN0VG9DYXJ0QXN5bmMoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJywgdGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9ICRmb3JtLmdldCgwKTtcbiAgICAgICAgICAgIGNvbnN0ICRhZGRUb0NhcnRCdG4gPSAkKCcjZm9ybS1hY3Rpb24tYWRkVG9DYXJ0JywgdGhpcy4kc2NvcGUpO1xuICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxCdG5WYWwgPSAkYWRkVG9DYXJ0QnRuLnZhbCgpO1xuICAgICAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG4gICAgXG4gICAgICAgICAgICAvLyBEbyBub3QgZG8gQUpBWCBpZiBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBGb3JtRGF0YVxuICAgICAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwod2FpdE1lc3NhZ2UpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICBcbiAgICAgICAgICAgIC8vIEFkZCBpdGVtIHRvIGNhcnRcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQodGhpcy5maWx0ZXJFbXB0eUZpbGVzRnJvbUZvcm0obmV3IEZvcm1EYXRhKGZvcm0pKSwgYXN5bmMgKGVyciwgcmVzcG9uc2UpID0+IHsgLy8gQWxzb0JvdWdodCBNb2RcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcbiAgICBcbiAgICAgICAgICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgICAgIC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgICAgIHJlc29sdmUoW2VyciwgcmVzcG9uc2VdKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKlxuICAgICAqIEFkZCBhIHByb2R1Y3QgdG8gY2FydFxuICAgICAqXG4gICAgICovXG4gICAgYWRkUHJvZHVjdFRvQ2FydChldmVudCwgZm9ybSkge1xuICAgICAgICBjb25zdCAkYWRkVG9DYXJ0QnRuID0gJCgnI2Zvcm0tYWN0aW9uLWFkZFRvQ2FydCcsICQoZXZlbnQudGFyZ2V0KSk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsQnRuVmFsID0gJGFkZFRvQ2FydEJ0bi52YWwoKTtcbiAgICAgICAgY29uc3Qgd2FpdE1lc3NhZ2UgPSAkYWRkVG9DYXJ0QnRuLmRhdGEoJ3dhaXRNZXNzYWdlJyk7XG5cbiAgICAgICAgLy8gRG8gbm90IGRvIEFKQVggaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgRm9ybURhdGFcbiAgICAgICAgaWYgKHdpbmRvdy5Gb3JtRGF0YSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBlcm1hcmtldDpcbiAgICAgICAgLy8gU29tZWhvdyBTYWZhcmkgaU9TIGRvZXNuJ3Qgd29yayByaWdodCB3aXRoIEZvcm1EYXRhLFxuICAgICAgICAvLyBzbyB3ZSBzdWJtaXQgdGhlIGZvcm0gYXMgbm9ybWFsLlxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmlzQU1QKSB7XG4gICAgICAgICAgICAkKGZvcm0pLmF0dHIoJ3RhcmdldCcsICdfdG9wJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHRcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkYWRkVG9DYXJ0QnRuXG4gICAgICAgICAgICAudmFsKHdhaXRNZXNzYWdlKVxuICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gQWRkIGl0ZW0gdG8gY2FydFxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKHRoaXMuZmlsdGVyRW1wdHlGaWxlc0Zyb21Gb3JtKG5ldyBGb3JtRGF0YShmb3JtKSksIGFzeW5jIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcblxuICAgICAgICAgICAgJGFkZFRvQ2FydEJ0blxuICAgICAgICAgICAgICAgIC52YWwob3JpZ2luYWxCdG5WYWwpXG4gICAgICAgICAgICAgICAgLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgLy8gR3VhcmQgc3RhdGVtZW50XG4gICAgICAgICAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgLy8gU3RyaXAgdGhlIEhUTUwgZnJvbSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICAgICAgICAgIHRtcC5pbm5lckhUTUwgPSBlcnJvck1lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvd0FsZXJ0TW9kYWwodG1wLnRleHRDb250ZW50IHx8IHRtcC5pbm5lclRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXQ6IFN1cHBvcnQgcmVkaXJlY3QgdG8gY2FydCBwYWdlIGFmdGVyIGFkZGVkIHRvIGNhcnRcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQucmVkaXJlY3RfY2FydCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fCB0aGlzLmNvbnRleHQudXJscy5jYXJ0KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtaW5oZWFsdGg6IFNob3cgY2FydCBwcmV2aWV3IG9uIHRoZSByaWdodCBzaWRlXG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZXh0LmFkZF90b19jYXJ0X3BvcHVwID09PSAnY2FydCcpIHtcbiAgICAgICAgICAgICAgICAvLyBjbG9zZSBxdWljay12aWV3IG1vZGFsXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wZW5DYXJ0UHJldmlldyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5pZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIE9wZW4gcHJldmlldyBtb2RhbCBhbmQgdXBkYXRlIGNvbnRlbnRcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXZpZXdNb2RhbCkge1xuICAgICAgICAgICAgICAgIC8vIFN1cGVybWFya2V0IE9CUFMgTW9kXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuYWRkX3RvX2NhcnRfcG9wdXAgIT09ICdoaWRlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXZpZXdNb2RhbC5vcGVuKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0Q29udGVudCh0aGlzLnByZXZpZXdNb2RhbCwgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcbiAgICAgICAgICAgICAgICAvLyBpZiBubyBtb2RhbCwgcmVkaXJlY3QgdG8gdGhlIGNhcnQgcGFnZVxuICAgICAgICAgICAgICAgIHRoaXMucmVkaXJlY3RUbyhyZXNwb25zZS5kYXRhLmNhcnRfaXRlbS5jYXJ0X3VybCB8fCB0aGlzLmNvbnRleHQudXJscy5jYXJ0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0IGNhcnQgY29udGVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjYXJ0SXRlbUlkXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Db21wbGV0ZVxuICAgICAqL1xuICAgIGdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIG9uQ29tcGxldGUpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9wcmV2aWV3JyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHN1Z2dlc3Q6IGNhcnRJdGVtSWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgY2FydDoge1xuICAgICAgICAgICAgICAgICAgICBzdWdnZXN0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCBvbkNvbXBsZXRlKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWRpcmVjdCB0byB1cmxcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICByZWRpcmVjdFRvKHVybCkge1xuICAgICAgICBpZiAodGhpcy5pc1J1bm5pbmdJbklmcmFtZSgpICYmICF3aW5kb3cuaWZyYW1lU2RrKSB7XG4gICAgICAgICAgICB3aW5kb3cudG9wLmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gdXJsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIGNhcnQgY29udGVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtNb2RhbH0gbW9kYWxcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY2FydEl0ZW1JZFxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQ29tcGxldGVcbiAgICAgKi9cbiAgICB1cGRhdGVDYXJ0Q29udGVudChtb2RhbCwgY2FydEl0ZW1JZCwgb25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLmdldENhcnRDb250ZW50KGNhcnRJdGVtSWQsIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIHRoaXMuYXBwbHlNb2RhbEF1dG9DbG9zZShtb2RhbCk7IC8vIFN1cGVybWFya2V0XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBjYXJ0IGNvdW50ZXJcbiAgICAgICAgICAgIGNvbnN0ICRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRRdWFudGl0eSA9ICQoJ1tkYXRhLWNhcnQtcXVhbnRpdHldJywgbW9kYWwuJGNvbnRlbnQpO1xuICAgICAgICAgICAgY29uc3QgJGNhcnRDb3VudGVyID0gJCgnLm5hdlVzZXItYWN0aW9uIC5jYXJ0LWNvdW50Jyk7XG4gICAgICAgICAgICBjb25zdCBxdWFudGl0eSA9ICRjYXJ0UXVhbnRpdHkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgJGNhcnRDb3VudGVyLmFkZENsYXNzKCdjYXJ0LWNvdW50LS1wb3NpdGl2ZScpO1xuICAgICAgICAgICAgJGJvZHkudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG5cbiAgICAgICAgICAgIGlmIChvbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZShyZXNwb25zZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFN1cGVybWFya2V0IC0gT0JQUyBNb2RcbiAgICAgICAgICAgIHNoYWtlKCQoJy5uYXZVc2VyLWl0ZW0tLWNhcnQgPiAubmF2VXNlci1hY3Rpb24nKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNob3cgYW4gbWVzc2FnZSBib3ggaWYgYSBtZXNzYWdlIGlzIHBhc3NlZFxuICAgICAqIEhpZGUgdGhlIGJveCBpZiB0aGUgbWVzc2FnZSBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSAge1N0cmluZ30gbWVzc2FnZVxuICAgICAqL1xuICAgIHNob3dNZXNzYWdlQm94KG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcucHJvZHVjdEF0dHJpYnV0ZXMtbWVzc2FnZScsIHRoaXMuJHNjb3BlKTsgLy8gUGFwYXRoZW1lcyBmaXggbWlzc2luZyAkc2NvcGVcblxuICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgJCgnLmFsZXJ0Qm94LW1lc3NhZ2UnLCAkbWVzc2FnZUJveCkudGV4dChtZXNzYWdlKTtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRtZXNzYWdlQm94LmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhpZGUgdGhlIHByaWNpbmcgZWxlbWVudHMgdGhhdCB3aWxsIHNob3cgdXAgb25seSB3aGVuIHRoZSBwcmljZSBleGlzdHMgaW4gQVBJXG4gICAgICogQHBhcmFtIHZpZXdNb2RlbFxuICAgICAqL1xuICAgIGNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCkge1xuICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcbiAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uaGlkZSgpO1xuICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXG4gICAgICogQHBhcmFtICB7T2JqZWN0fSBkYXRhIFByb2R1Y3QgYXR0cmlidXRlIGRhdGFcbiAgICAgKi9cbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xuICAgICAgICB0aGlzLmNsZWFyUHJpY2luZ05vdEZvdW5kKHZpZXdNb2RlbCk7XG5cbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5odG1sKHByaWNlLndpdGhfdGF4LmZvcm1hdHRlZCk7XG5cbiAgICAgICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXggfHwgcHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aFRheC5hZGRDbGFzcygnX2hhc1NhbGUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXgucmVtb3ZlQ2xhc3MoJ19oYXNTYWxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4Lmh0bWwocHJpY2Uud2l0aG91dF90YXguZm9ybWF0dGVkKTtcblxuICAgICAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICAgICAgaWYgKHByaWNlLnJycF93aXRob3V0X3RheCB8fCBwcmljZS5ub25fc2FsZV9wcmljZV93aXRob3V0X3RheCkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC4kcHJpY2VXaXRob3V0VGF4LmFkZENsYXNzKCdfaGFzU2FsZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwuJHByaWNlV2l0aG91dFRheC5yZW1vdmVDbGFzcygnX2hhc1NhbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRoVGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aG91dF90YXguZm9ybWF0dGVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwcmljZS5zYXZlZCkge1xuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kc3Bhbi5odG1sKHByaWNlLnNhdmVkLmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJpY2Uubm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZU5vd0xhYmVsLiRzcGFuLnNob3coKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGUgdGhlIHZpZXcgb2YgcHJpY2UsIG1lc3NhZ2VzLCBTS1UgYW5kIHN0b2NrIG9wdGlvbnMgd2hlbiBhIHByb2R1Y3Qgb3B0aW9uIGNoYW5nZXNcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxuICAgICAqL1xuICAgIHVwZGF0ZVZpZXcoZGF0YSwgY29udGVudCA9IG51bGwpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuc2hvd01lc3NhZ2VCb3goZGF0YS5zdG9ja19tZXNzYWdlIHx8IGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcblxuICAgICAgICBpZiAoXy5pc09iamVjdChkYXRhLnByaWNlKSkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBkYXRhLnByaWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChfLmlzT2JqZWN0KGRhdGEud2VpZ2h0KSkge1xuICAgICAgICAgICAgdmlld01vZGVsLiR3ZWlnaHQuaHRtbChkYXRhLndlaWdodC5mb3JtYXR0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2V0IHZhcmlhdGlvbl9pZCBpZiBpdCBleGlzdHMgZm9yIGFkZGluZyB0byB3aXNobGlzdFxuICAgICAgICBpZiAoZGF0YS52YXJpYW50SWQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kd2lzaGxpc3RWYXJpYXRpb24udmFsKGRhdGEudmFyaWFudElkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIFNLVSBpcyBhdmFpbGFibGVcbiAgICAgICAgaWYgKGRhdGEuc2t1KSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc2t1LiR2YWx1ZS50ZXh0KGRhdGEuc2t1KTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJGxhYmVsLmhpZGUoKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5za3UuJHZhbHVlLnRleHQoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgVVBDIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS51cGMpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC51cGMuJHZhbHVlLnRleHQoZGF0YS51cGMpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kbGFiZWwuaGlkZSgpO1xuICAgICAgICAgICAgdmlld01vZGVsLnVwYy4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBNUE4gaXMgYXZhaWxhYmxlXG4gICAgICAgIGlmIChkYXRhLm1wbikge1xuICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kdmFsdWUudGV4dChkYXRhLm1wbik7XG4gICAgICAgICAgICB2aWV3TW9kZWwubXBuLiRsYWJlbC5zaG93KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodmlld01vZGVsLm1wbi4kdmFsdWUuZGF0YSgnb3JpZ2luYWxNcG4nKSkge1xuICAgICAgICAgICAgICAgIHZpZXdNb2RlbC5tcG4uJHZhbHVlLnRleHQodmlld01vZGVsLm1wbi4kdmFsdWUuZGF0YSgnb3JpZ2luYWxNcG4nKSk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kbGFiZWwuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2aWV3TW9kZWwubXBuLiRsYWJlbC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgdmlld01vZGVsLm1wbi4kdmFsdWUudGV4dCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiBzdG9jayB2aWV3IGlzIG9uIChDUCBzZXR0aW5ncylcbiAgICAgICAgaWYgKHZpZXdNb2RlbC5zdG9jay4kY29udGFpbmVyLmxlbmd0aCAmJiBfLmlzTnVtYmVyKGRhdGEuc3RvY2spKSB7XG4gICAgICAgICAgICAvLyBpZiB0aGUgc3RvY2sgY29udGFpbmVyIGlzIGhpZGRlbiwgc2hvd1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcblxuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRpbnB1dC50ZXh0KGRhdGEuc3RvY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRjb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC5zdG9jay4kaW5wdXQudGV4dChkYXRhLnN0b2NrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhcGF0aGVtZXMtYmVhdXRpZnk6IHNob3cgLyBoaWRlIHN0b2NrIGJhZGdlXG4gICAgICAgIGlmIChkYXRhLmluc3RvY2sgJiYgZGF0YS5wdXJjaGFzYWJsZSkge1xuICAgICAgICAgICAgdmlld01vZGVsLnN0b2NrLiRiYWRnZS5yZW1vdmVDbGFzcygnX291dHN0b2NrJykuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgICAgICAkKGVsKS50ZXh0KCQoZWwpLmRhdGEoJ2luc3RvY2tNZXNzYWdlJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB2aWV3TW9kZWwuc3RvY2suJGJhZGdlLmFkZENsYXNzKCdfb3V0c3RvY2snKS50ZXh0KGRhdGEuc3RvY2tfbWVzc2FnZSB8fCBkYXRhLnB1cmNoYXNpbmdfbWVzc2FnZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuc3RvY2suJGJhZGdlLmFkZENsYXNzKCdfb3V0c3RvY2snKS5lYWNoKChpLCBlbCkgPT4ge1xuICAgICAgICAgICAgICAgICQoZWwpLnRleHQoJChlbCkuZGF0YSgnb3V0c3RvY2tNZXNzYWdlJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpO1xuXG4gICAgICAgIC8vIElmIEJ1bGsgUHJpY2luZyByZW5kZXJlZCBIVE1MIGlzIGF2YWlsYWJsZVxuICAgICAgICBpZiAoZGF0YS5idWxrX2Rpc2NvdW50X3JhdGVzICYmIGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kYnVsa1ByaWNpbmcuaHRtbChjb250ZW50KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgKGRhdGEuYnVsa19kaXNjb3VudF9yYXRlcykgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGJ1bGtQcmljaW5nLmh0bWwoJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRhdGEucHVyY2hhc2FibGUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5fYWRkVG9DYXJ0VmlzaWJpbGl0eScpLmZpbHRlcignOmhpZGRlbicpLnNob3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmZpbmQoJy5fYWRkVG9DYXJ0VmlzaWJpbGl0eScpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZURlZmF1bHRBdHRyaWJ1dGVzRm9yT09TKGRhdGEpIHtcbiAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xuICAgICAgICBpZiAoIWRhdGEucHVyY2hhc2FibGUgfHwgIWRhdGEuaW5zdG9jaykge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZpZXdNb2RlbC4kaW5jcmVtZW50cy5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld01vZGVsLiRhZGRUb0NhcnQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB2aWV3TW9kZWwuJGluY3JlbWVudHMucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIaWRlIG9yIG1hcmsgYXMgdW5hdmFpbGFibGUgb3V0IG9mIHN0b2NrIGF0dHJpYnV0ZXMgaWYgZW5hYmxlZFxuICAgICAqIEBwYXJhbSAge09iamVjdH0gZGF0YSBQcm9kdWN0IGF0dHJpYnV0ZSBkYXRhXG4gICAgICovXG4gICAgdXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMoZGF0YSkge1xuICAgICAgICBjb25zdCBiZWhhdmlvciA9IGRhdGEub3V0X29mX3N0b2NrX2JlaGF2aW9yO1xuICAgICAgICBjb25zdCBpblN0b2NrSWRzID0gZGF0YS5pbl9zdG9ja19hdHRyaWJ1dGVzO1xuICAgICAgICBjb25zdCBvdXRPZlN0b2NrTWVzc2FnZSA9IGAgKCR7ZGF0YS5vdXRfb2Zfc3RvY2tfbWVzc2FnZX0pYDtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWNoaWFyYSBlZGl0ZWQgZm9yIGFsc28tYm91Z2h0XG4gICAgICAgIHRoaXMucHJpY2UgPSBkYXRhLnByaWNlO1xuICAgICAgICB0aGlzLiRzY29wZS50cmlnZ2VyKCdwcmljZS1jaGFuZ2UnKTtcblxuICAgICAgICB0aGlzLnNob3dQcm9kdWN0SW1hZ2UoZGF0YS5pbWFnZSk7XG5cbiAgICAgICAgaWYgKGJlaGF2aW9yICE9PSAnaGlkZV9vcHRpb24nICYmIGJlaGF2aW9yICE9PSAnbGFiZWxfb3B0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGUtdmFsdWVdJywgdGhpcy4kc2NvcGUpLmVhY2goKGksIGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZSA9ICQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJJZCA9IHBhcnNlSW50KCRhdHRyaWJ1dGUuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZVZhbHVlJyksIDEwKTtcblxuXG4gICAgICAgICAgICBpZiAoaW5TdG9ja0lkcy5pbmRleE9mKGF0dHJJZCkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlLnRyaWdnZXIoJ3VwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzJyk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnkgZm9yIGRyb3Bkb3duLXN3YXRjaGVzXG4gICAgfVxuXG4gICAgZGlzYWJsZUF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlVHlwZSgkYXR0cmlidXRlKSA9PT0gJ3NldC1zZWxlY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kaXNhYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaGlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5hZGRDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRpc2FibGVTZWxlY3RPcHRpb25BdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkYXR0cmlidXRlLnBhcmVudCgpO1xuXG4gICAgICAgIGlmIChiZWhhdmlvciA9PT0gJ2hpZGVfb3B0aW9uJykge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS50b2dnbGVPcHRpb24oZmFsc2UpO1xuICAgICAgICAgICAgLy8gSWYgdGhlIGF0dHJpYnV0ZSBpcyB0aGUgc2VsZWN0ZWQgb3B0aW9uIGluIGEgc2VsZWN0IGRyb3Bkb3duLCBzZWxlY3QgdGhlIGZpcnN0IG9wdGlvbiAoTUVSQy02MzkpXG4gICAgICAgICAgICBpZiAoJHNlbGVjdC52YWwoKSA9PT0gJGF0dHJpYnV0ZS5hdHRyKCd2YWx1ZScpKSB7XG4gICAgICAgICAgICAgICAgJHNlbGVjdFswXS5zZWxlY3RlZEluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuaHRtbCgkYXR0cmlidXRlLmh0bWwoKS5yZXBsYWNlKG91dE9mU3RvY2tNZXNzYWdlLCAnJykgKyBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmFibGVBdHRyaWJ1dGUoJGF0dHJpYnV0ZSwgYmVoYXZpb3IsIG91dE9mU3RvY2tNZXNzYWdlKSB7XG4gICAgICAgIGlmICh0aGlzLmdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkgPT09ICdzZXQtc2VsZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZW5hYmxlU2VsZWN0T3B0aW9uQXR0cmlidXRlKCRhdHRyaWJ1dGUsIGJlaGF2aW9yLCBvdXRPZlN0b2NrTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYmVoYXZpb3IgPT09ICdoaWRlX29wdGlvbicpIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUuc2hvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJGF0dHJpYnV0ZS5yZW1vdmVDbGFzcygndW5hdmFpbGFibGUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGVuYWJsZVNlbGVjdE9wdGlvbkF0dHJpYnV0ZSgkYXR0cmlidXRlLCBiZWhhdmlvciwgb3V0T2ZTdG9ja01lc3NhZ2UpIHtcbiAgICAgICAgaWYgKGJlaGF2aW9yID09PSAnaGlkZV9vcHRpb24nKSB7XG4gICAgICAgICAgICAkYXR0cmlidXRlLnRvZ2dsZU9wdGlvbih0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRhdHRyaWJ1dGUucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAkYXR0cmlidXRlLmh0bWwoJGF0dHJpYnV0ZS5odG1sKCkucmVwbGFjZShvdXRPZlN0b2NrTWVzc2FnZSwgJycpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldEF0dHJpYnV0ZVR5cGUoJGF0dHJpYnV0ZSkge1xuICAgICAgICBjb25zdCAkcGFyZW50ID0gJGF0dHJpYnV0ZS5jbG9zZXN0KCdbZGF0YS1wcm9kdWN0LWF0dHJpYnV0ZV0nKTtcblxuICAgICAgICByZXR1cm4gJHBhcmVudCA/ICRwYXJlbnQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZScpIDogbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBbGxvdyByYWRpbyBidXR0b25zIHRvIGdldCBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgaW5pdFJhZGlvQXR0cmlidXRlcygpIHtcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1hdHRyaWJ1dGVdIGlucHV0W3R5cGU9XCJyYWRpb1wiXScsIHRoaXMuJHNjb3BlKS5lYWNoKChpLCByYWRpbykgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHJhZGlvID0gJChyYWRpbyk7XG5cbiAgICAgICAgICAgIC8vIE9ubHkgYmluZCB0byBjbGljayBvbmNlXG4gICAgICAgICAgICBpZiAoJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgJHJhZGlvLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRyYWRpby5kYXRhKCdzdGF0ZScpID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcmFkaW8ucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRyYWRpby5kYXRhKCdzdGF0ZScsIGZhbHNlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHJhZGlvLmRhdGEoJ3N0YXRlJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluaXRSYWRpb0F0dHJpYnV0ZXMoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJhZGlvLmF0dHIoJ2RhdGEtc3RhdGUnLCAkcmFkaW8ucHJvcCgnY2hlY2tlZCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ2hlY2sgZm9yIGZyYWdtZW50IGlkZW50aWZpZXIgaW4gVVJMIHJlcXVlc3RpbmcgYSBzcGVjaWZpYyB0YWJcbiAgICAgKi9cbiAgICBnZXRUYWJSZXF1ZXN0cygpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyN0YWItJykgPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0ICRhY3RpdmVUYWIgPSAkKCcudGFicycpLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKTtcbiAgICAgICAgICAgIGNvbnN0ICR0YWJDb250ZW50ID0gJChgJHt3aW5kb3cubG9jYXRpb24uaGFzaH1gKTtcblxuICAgICAgICAgICAgaWYgKCRhY3RpdmVUYWIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICRhY3RpdmVUYWIuZmluZCgnLnRhYicpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJylcbiAgICAgICAgICAgICAgICAgICAgLmhhcyhgW2hyZWY9JyR7d2luZG93LmxvY2F0aW9uLmhhc2h9J11gKVxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJHRhYkNvbnRlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXG4gICAgICAgICAgICAgICAgICAgIC5zaWJsaW5ncygpXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0IGN1c3RvbSB0YWJzIGJ5IHBhcnNpbmcgcHJvZHVjdCBkZXNjcmlwdGlvblxuICAgICAqIChBZGRlZCBieSBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXQpXG4gICAgICovXG4gICAgaW5pdEN1c3RvbVRhYnMoKSB7XG4gICAgICAgIGNvbnN0ICRjdXN0b21UYWJzID0gJCgnW2RhdGEtY3VzdG9tLXRhYl0nLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIGlmICgkY3VzdG9tVGFicy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICR0YWJzID0gJCgnLnByb2R1Y3RWaWV3LWRlc2NyaXB0aW9uID4gLnRhYnMnLCB0aGlzLiRzY29wZSk7XG4gICAgICAgIGNvbnN0ICR0YWJzQ29udGVudCA9ICQoJy5wcm9kdWN0Vmlldy1kZXNjcmlwdGlvbiA+IC50YWJzLWNvbnRlbnRzJywgdGhpcy4kc2NvcGUpO1xuXG4gICAgICAgIGlmICgkdGFicy5sZW5ndGggPT09IDAgfHwgJHRhYnNDb250ZW50Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGN1c3RvbVRhYnMuZWFjaCgoaSwgZWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZWwpO1xuICAgICAgICAgICAgY29uc3QgJHRpdGxlID0gJGVsLmZpbmQoJ1tkYXRhLWN1c3RvbS10YWItdGl0bGVdJyk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9ICR0aXRsZS5odG1sKCk7XG5cbiAgICAgICAgICAgIGxldCBleHBhbmQgPSAkdGl0bGUuZGF0YSgnZXhwYW5kJyk7XG5cbiAgICAgICAgICAgIGlmICghZXhwYW5kKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kID0gJ1ZpZXcgQWxsJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNsb3NlID0gJHRpdGxlLmRhdGEoJ2Nsb3NlJyk7XG5cbiAgICAgICAgICAgIGlmICghY2xvc2UpIHtcbiAgICAgICAgICAgICAgICBjbG9zZSA9ICdDbG9zZSc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICR0aXRsZS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgY29uc3QgY29udGVudCA9ICRlbC5odG1sKCk7XG5cbiAgICAgICAgICAgICRlbC5yZW1vdmUoKTtcblxuICAgICAgICAgICAgJHRhYnMuYXBwZW5kKGA8bGkgY2xhc3M9XCJ0YWIgdGFiLS1jdXN0b20gdGFiLS1jdXN0b20tJHtpfVwiPjxhIGNsYXNzPVwidGFiLXRpdGxlXCIgaHJlZj1cIiN0YWItY3VzdG9tLSR7aX1cIj4ke3RpdGxlfTwvYT48L2xpPmApO1xuICAgICAgICAgICAgJHRhYnNDb250ZW50LmFwcGVuZChgPGRpdiBjbGFzcz1cInRhYi1jb250ZW50IHRhYi1jb250ZW50LS1jdXN0b20gdGFiLWNvbnRlbnQtLWN1c3RvbS0ke2l9XCIgaWQ9XCJ0YWItY3VzdG9tLSR7aX1cIiBkYXRhLXBhcGF0aGVtZXMtbW9iaWxlLWNvbGxhcHNlPjxoMiBjbGFzcz1cImJlYXV0aWZ5X19wYWdlLWhlYWRpbmdcIj4ke3RpdGxlfTwvaDI+PGRpdiBjbGFzcz1cInByb2R1Y3RWaWV3LWN1c3RvbS10YWJDb250ZW50IHBhcGF0aGVtZXMtbW9iaWxlLWNvbGxhcHNlLWNvbnRlbnRcIiBkYXRhLXBhcGF0aGVtZXMtbW9iaWxlLWNvbGxhcHNlLWNvbnRlbnQ+JHtjb250ZW50fTwvZGl2PjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJwYXBhdGhlbWVzLW1vYmlsZS1jb2xsYXBzZS1oYW5kbGVcIiBkYXRhLXBhcGF0aGVtZXMtbW9iaWxlLWNvbGxhcHNlLWhhbmRsZT48c3BhbiBjbGFzcz1cIm9uXCI+JHtleHBhbmR9PC9zcGFuPjxzcGFuIGNsYXNzPVwib2ZmXCI+JHtjbG9zZX08L3NwYW4+PC9hPjwvZGl2PmApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbiAgICBvbk1pbmlQcmV2aWV3TW9kYWxPcGVuKCkge1xuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2hhcy1hY3RpdmVNb2RhbC0tbWluaVByZXZpZXcnKTtcbiAgICB9XG5cbiAgICAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbiAgICBvbk1pbmlQcmV2aWV3TW9kYWxDbG9zZSgpIHtcbiAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdoYXMtYWN0aXZlTW9kYWwtLW1pbmlQcmV2aWV3Jyk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5hdXRvQ2xvc2VUaW1lciAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5hdXRvQ2xvc2VUaW1lcikge1xuICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5hdXRvQ2xvc2VUaW1lcik7XG4gICAgICAgICAgICB0aGlzLmF1dG9DbG9zZVRpbWVyID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuICAgIGFwcGx5TW9kYWxBdXRvQ2xvc2UobW9kYWwpIHtcbiAgICAgICAgY29uc3QgJGF1dG9DbG9zZUVsID0gbW9kYWwuJG1vZGFsLmZpbmQoJ1tkYXRhLWF1dG8tY2xvc2VdJyk7XG4gICAgICAgIGlmICgkYXV0b0Nsb3NlRWwubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNlYyA9ICRhdXRvQ2xvc2VFbC5kYXRhKCdhdXRvQ2xvc2UnKSB8fCA1O1xuICAgICAgICAgICAgY29uc3QgJGNvdW50ID0gJGF1dG9DbG9zZUVsLmZpbmQoJy5jb3VudCcpO1xuICAgICAgICAgICAgJGNvdW50Lmh0bWwoc2VjKTtcblxuICAgICAgICAgICAgbW9kYWwuYXV0b0Nsb3NlVGltZXIgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgICAgICAgICAgaWYgKHNlYyA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VjLS07XG4gICAgICAgICAgICAgICAgICAgICRjb3VudC5odG1sKHNlYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobW9kYWwuYXV0b0Nsb3NlVGltZXIpO1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5hdXRvQ2xvc2VUaW1lciA9IG51bGw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGlzQnJvd3NlcklFIH0gZnJvbSAnLi9pZS1oZWxwZXJzJztcblxuY29uc3QgYmFubmVyVXRpbHMgPSB7XG4gICAgZGlzcGF0Y2hQcm9kdWN0QmFubmVyRXZlbnQ6IChwcm9kdWN0QXR0cmlidXRlcykgPT4ge1xuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlIHx8IGlzQnJvd3NlcklFKSByZXR1cm47XG5cbiAgICAgICAgbGV0IHByaWNlID0gMDtcblxuICAgICAgICBpZiAoIXByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLnByaWNlX3JhbmdlKSB7XG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aG91dF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhvdXRfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJvZHVjdEF0dHJpYnV0ZXMucHJpY2Uud2l0aF90YXgpIHtcbiAgICAgICAgICAgICAgICBwcmljZSA9IHByb2R1Y3RBdHRyaWJ1dGVzLnByaWNlLndpdGhfdGF4LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCdiaWdjb21tZXJjZS5wcm9kdWN0cHJpY2VjaGFuZ2UnLCB7XG4gICAgICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgICAgICBhbW91bnQ6IHByaWNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgYmFubmVyVXRpbHM7XG4iLCJleHBvcnQgY29uc3QgaXNCcm93c2VySUUgPSAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcblxuZXhwb3J0IGNvbnN0IGNvbnZlcnRJbnRvQXJyYXkgPSBjb2xsZWN0aW9uID0+IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGNvbGxlY3Rpb24pO1xuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUEFQQVRIRU1FUyBTQVJBSE1BUktFVCBDVVNUT01JWkFUSU9OOlxuLy8gLSBVc2luZyBzbGljayBjYXJvdXNlbCBmb3IgaW1hZ2UgdGh1bWJuYWlscy5cbi8vIC0gVXNpbmcgYmFndWV0dGVCb3ggZm9yIGltYWdlIGxpZ2h0Ym94LlxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCAnc2xpY2stY2Fyb3VzZWwnO1xuaW1wb3J0IGJhZ3VldHRlQm94IGZyb20gJ2JhZ3VldHRlYm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZ2FsbGVyeSkge1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwgPSAkZ2FsbGVyeS5maW5kKCdbZGF0YS1pbWFnZS1nYWxsZXJ5LW1haW5dJyk7XG4gICAgICAgIHRoaXMuJG5hdkNhcm91c2VsID0gJGdhbGxlcnkuZmluZCgnW2RhdGEtaW1hZ2UtZ2FsbGVyeS1uYXZdJyk7XG5cbiAgICAgICAgY29uc3QgJGRlZlNsaWRlID0gdGhpcy4kbWFpbkNhcm91c2VsLmZpbmQoJy5zbGljay1jdXJyZW50Jyk7XG4gICAgICAgIGNvbnN0IGRlZlNsaWRlSWR4ID0gJGRlZlNsaWRlLnBhcmVudCgpLmNoaWxkcmVuKCkuaW5kZXgoJGRlZlNsaWRlKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRTbGlkZUluZGV4ID0gZGVmU2xpZGVJZHg7XG5cbiAgICAgICAgY29uc3QgdWlkID0gXy51bmlxdWVJZCgnJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpID09PSAnJykge1xuICAgICAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLmF0dHIoJ2lkJywgYGltYWdlR2FsbGVyeU1haW5DYXJvdXNlbCR7dWlkfWApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJG5hdkNhcm91c2VsLmF0dHIoJ2lkJykgPT09ICcnKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5hdHRyKCdpZCcsIGBpbWFnZUdhbGxlcnlOYXZDYXJvdXNlbCR7dWlkfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpbkltYWdlKGltZ09iaikge1xuICAgICAgICB0aGlzLmN1cnJlbnRJbWFnZSA9IF8uY2xvbmUoaW1nT2JqKTtcblxuICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBzZXRBbHRlcm5hdGVJbWFnZShpbWdPYmopIHtcbiAgICAgICAgaWYgKCF0aGlzLnNhdmVkSW1hZ2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IF8uY2xvbmUodGhpcy5jdXJyZW50SW1hZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0TWFpbkltYWdlKGltZ09iaik7XG4gICAgfVxuXG4gICAgcmVzdG9yZUltYWdlKCkge1xuICAgICAgICBpZiAodGhpcy5zYXZlZEltYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnNldE1haW5JbWFnZSh0aGlzLnNhdmVkSW1hZ2UpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2F2ZWRJbWFnZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICBjb25zdCBpID0gdGhpcy4kbWFpbkNhcm91c2VsLnNsaWNrKCdzbGlja0N1cnJlbnRTbGlkZScpO1xuICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbFxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKVxuICAgICAgICAgICAgLmVxKGkpXG4gICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcbiAgICB9XG5cbiAgICBzd2FwTWFpbkltYWdlKCkge1xuICAgICAgICAvKlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLnNsaWNrKCdzbGlja0dvVG8nLCB0aGlzLmN1cnJlbnRTbGlkZUluZGV4KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgIH1cbiAgICAgICAgKi9cbiAgICAgICAgJCgnLnNsaWNrLWN1cnJlbnQnLCB0aGlzLiRuYXZDYXJvdXNlbCkucmVtb3ZlQ2xhc3MoJ3NsaWNrLWN1cnJlbnQnKTtcbiAgICAgICAgdGhpcy4kbWFpbkNhcm91c2VsLmZpbmQoJy5zbGljay1zbGlkZScpLmVxKHRoaXMuY3VycmVudFNsaWRlSW5kZXgpLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsIHRoaXMuY3VycmVudEltYWdlLm1haW5JbWFnZVVybCk7XG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbC5maW5kKCcuc2xpY2stc2xpZGUnKS5lcSh0aGlzLmN1cnJlbnRTbGlkZUluZGV4KS5maW5kKCdpbWcnKS5hdHRyKCdzcmNzZXQnLCB0aGlzLmN1cnJlbnRJbWFnZS5tYWluSW1hZ2VTcmNzZXQpO1xuICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuZmluZCgnLnNsaWNrLXNsaWRlJykuZXEodGhpcy5jdXJyZW50U2xpZGVJbmRleCkuZmluZCgnYScpLmF0dHIoJ2hyZWYnLCB0aGlzLmN1cnJlbnRJbWFnZS56b29tSW1hZ2VVcmwpO1xuXG4gICAgICAgIC8vIGVtcHR5IGxpZ2h0Ym94IGNvbnRlbnRzIG9mIGN1cnJlbnQgZ2FsbGV5IHNvIHRoYXQgaXQgd2lsbCBiZSBjcmVhdGVkIGFnYWluXG4gICAgICAgICQoJyNiYWd1ZXR0ZUJveC1zbGlkZXInKS5odG1sKCcnKTtcbiAgICAgICAgYmFndWV0dGVCb3gucnVuKGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gKTsgLy8gaW5pdCBhZ2FpblxuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJG1haW5DYXJvdXNlbFxuICAgICAgICAgICAgLm9uKCdpbml0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbWcgPSAkKGBbZGF0YS1zbGljay1pbmRleD1cIiR7dGhpcy5jdXJyZW50U2xpZGVJbmRleH1cIl0gaW1nYCwgdGhpcy4kbWFpbkNhcm91c2VsKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICRpbWcuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogJGEuZGF0YSgnb3JpZ2luYWxJbWcnKSB8fCAkaW1nLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICRhLmRhdGEoJ29yaWdpbmFsWm9vbScpLFxuICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICRhLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdiZWZvcmVDaGFuZ2UnLCAoZXZlbnQsIHNsaWNrLCBjdXJyZW50U2xpZGUsIG5leHRTbGlkZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNsaWRlSW5kZXggPSBuZXh0U2xpZGU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkaW1nID0gJChgW2RhdGEtc2xpY2staW5kZXg9XCIke25leHRTbGlkZX1cIl0gaW1nYCwgdGhpcy4kbWFpbkNhcm91c2VsKTtcbiAgICAgICAgICAgICAgICBjb25zdCAkYSA9ICRpbWcuY2xvc2VzdCgnYScpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50SW1hZ2UgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1haW5JbWFnZVVybDogJGEuZGF0YSgnb3JpZ2luYWxJbWcnKSB8fCAkaW1nLmF0dHIoJ3NyYycpLFxuICAgICAgICAgICAgICAgICAgICB6b29tSW1hZ2VVcmw6ICRhLmRhdGEoJ29yaWdpbmFsWm9vbScpLFxuICAgICAgICAgICAgICAgICAgICBtYWluSW1hZ2VTcmNzZXQ6ICRhLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JyksXG4gICAgICAgICAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiBudWxsLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN3YXBNYWluSW1hZ2UoKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZWRJbWFnZSA9IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdhZnRlckNoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGluaXRpYWxTbGlkZTogdGhpcy5jdXJyZW50U2xpZGVJbmRleCxcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogdGhpcy4kbmF2Q2Fyb3VzZWwubGVuZ3RoID4gMCA/IGAjJHt0aGlzLiRuYXZDYXJvdXNlbC5hdHRyKCdpZCcpfWAgOiBudWxsLFxuICAgICAgICAgICAgICAgIHN3aXBlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogODAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2lwZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbC5vbignc2V0UG9zaXRpb24nLCAoKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsaWNrID0gdGhpcy4kbmF2Q2Fyb3VzZWwuc2xpY2soJ2dldFNsaWNrJyk7XG4gICAgICAgICAgICAgICAgaWYgKHNsaWNrLm9wdGlvbnMuc2xpZGVzVG9TaG93ID49IHNsaWNrLnNsaWRlQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuZmluZCgnLnNsaWNrLXRyYWNrJykuY3NzKCd0cmFuc2Zvcm0nLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuJG5hdkNhcm91c2VsLm9uKCdpbml0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kbmF2Q2Fyb3VzZWwuZmluZCgnLnNsaWNrLXNsaWRlJykub24oJ2tleXByZXNzJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuICAgICAgICAgICAgICAgIGlmIChrZXlDb2RlID09PSAxMyB8fCBrZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRtYWluQ2Fyb3VzZWwuc2xpY2soJ3NsaWNrR29UbycsICQoZXZlbnQudGFyZ2V0KS5kYXRhKCdzbGlja0luZGV4JykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy4kbmF2Q2Fyb3VzZWwuZGF0YSgnaW1hZ2VHYWxsZXJ5TmF2SG9yaXpvbnRhbCcpKSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbFxuICAgICAgICAgICAgICAgIC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQodGhpcy4kbmF2Q2Fyb3VzZWwuZGF0YSgnaW1hZ2UtZ2FsbGVyeS1uYXYtc2xpZGVzJyksIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiB0aGlzLmN1cnJlbnRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogYCMke3RoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpfWAsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIHZhcmlhYmxlV2lkdGg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRuYXZDYXJvdXNlbFxuICAgICAgICAgICAgICAgIC5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogcGFyc2VJbnQodGhpcy4kbmF2Q2Fyb3VzZWwuZGF0YSgnaW1hZ2UtZ2FsbGVyeS1uYXYtc2xpZGVzJyksIDEwKSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbFNsaWRlOiB0aGlzLmN1cnJlbnRTbGlkZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICBhc05hdkZvcjogYCMke3RoaXMuJG1haW5DYXJvdXNlbC5hdHRyKCdpZCcpfWAsXG4gICAgICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsU3dpcGluZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZm9jdXNPblNlbGVjdDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogMCxcbiAgICAgICAgICAgICAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAncHJvZ3Jlc3NpdmUnLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWxTd2lwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB2YXJpYWJsZVdpZHRoOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIH0sIDIwMCk7XG5cbiAgICAgICAgYmFndWV0dGVCb3gucnVuKGAjJHt0aGlzLiRtYWluQ2Fyb3VzZWwuYXR0cignaWQnKX1gKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3VudC9hZGQtd2lzaGxpc3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcbiAgICAgKi9cbiAgICB3aXNobGlzdERlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hsaXN0Rm9ybSkge1xuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgd2lzaGxpc3QgbmFtZS4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcblxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=