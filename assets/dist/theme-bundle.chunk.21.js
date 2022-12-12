(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./assets/js/papathemes/card-swatches/Card.js":
/*!****************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/Card.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.min.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_0__);
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Card = /*#__PURE__*/function () {
  function Card(_ref) {
    var $scope = _ref.$scope,
      $attributesContainer = _ref.$attributesContainer,
      productId = _ref.productId,
      productViewFile = _ref.productViewFile,
      attributesTemplate = _ref.attributesTemplate,
      templateCustomTags = _ref.templateCustomTags,
      addToCartFormSelector = _ref.addToCartFormSelector,
      $cardImage = _ref.$cardImage,
      imageSize = _ref.imageSize,
      inputFinderFunc = _ref.inputFinderFunc,
      swatchesLimit = _ref.swatchesLimit,
      imageReplacerFunc = _ref.imageReplacerFunc,
      includeOptions = _ref.includeOptions,
      displayInStockOnly = _ref.displayInStockOnly,
      autoSelectOptionValues = _ref.autoSelectOptionValues,
      _ref$autoInit = _ref.autoInit,
      autoInit = _ref$autoInit === void 0 ? true : _ref$autoInit,
      graphQLNode = _ref.graphQLNode;
    this.$scope = $scope;
    this.productId = productId;
    this.$attributesContainer = $attributesContainer;
    this.productViewFile = productViewFile;
    this.attributesTemplate = attributesTemplate;
    this.templateCustomTags = templateCustomTags;
    this.addToCartFormSelector = addToCartFormSelector;
    this.$cardImage = $cardImage;
    this.imageSize = imageSize;
    this.inputFinderFunc = inputFinderFunc;
    this.swatchesLimit = swatchesLimit;
    this.imageReplacerFunc = imageReplacerFunc;
    this.includeOptions = includeOptions;
    this.displayInStockOnly = displayInStockOnly;
    this.autoSelectOptionValues = autoSelectOptionValues;
    this.autoInit = autoInit;
    this.graphQLNode = graphQLNode;
    if (this.autoInit) {
      this.init();
    }
  }
  var _proto = Card.prototype;
  _proto.init = function init() {
    if (this.displayInStockOnly) {
      this.requestInStockAttributes();
    } else {
      if (this.graphQLNode) {
        this.buildProductOptions();
      } else {
        this.requestProductOptions();
      }
    }
  };
  _proto.requestInStockAttributes = function requestInStockAttributes() {
    var _this = this;
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      data: {
        action: 'add',
        product_id: this.productId
      },
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var attributesData = resp.data || {};
        if (typeof attributesData.in_stock_attributes === 'object' || attributesData.instock) {
          if (_this.graphQLNode) {
            _this.buildProductOptions(attributesData);
          } else {
            _this.requestProductOptions(attributesData);
          }
        }
      }
    });
  };
  _proto.requestProductOptions = function requestProductOptions(attributesData) {
    var _this2 = this;
    $.ajax({
      url: "/products.php?productId=" + this.productId,
      method: 'GET',
      headers: {
        'stencil-config': '{}',
        'stencil-options': "{\"render_with\":\"" + this.productViewFile + "\"}",
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        _this2.buildProductOptions(attributesData, resp);
      }
    });
  };
  _proto.buildProductOptions = function buildProductOptions(attributesData, resp) {
    var _this3 = this;
    if (attributesData === void 0) {
      attributesData = {};
    }
    var data = {
      attributes: []
    };
    if (this.graphQLNode) {
      // load attributes from graphQL
      data.attributes = this.graphQLNode.productOptions.edges.reduce(function (_options, _ref2) {
        var optionNode = _ref2.node;
        if (_this3.includeOptions.length > 0 && !_this3.includeOptions.includes(String(optionNode.displayName).toLocaleUpperCase())) {
          return _options;
        }
        if (optionNode.values) {
          var values = optionNode.values.edges.reduce(function (_values, _ref3) {
            var valueNode = _ref3.node;
            if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1) {
              if (valueNode.imageUrl || valueNode.hexColors || valueNode.label) {
                _values.push({
                  content: valueNode.imageUrl ? "<span class=\"form-option-variant form-option-variant--pattern\" title=\"" + valueNode.label + "\" style=\"background-image: url('" + valueNode.imageUrl + "');\"></span>" : valueNode.hexColors ? valueNode.hexColors.map(function (color) {
                    return "<span class='form-option-variant form-option-variant--color' title=\"" + valueNode.label + "\" style=\"background-color: " + color + "\"></span>";
                  }).join('') : "<span class=\"form-option-variant\">" + valueNode.label + "</span>",
                  label: valueNode.label,
                  type: valueNode.imageUrl || valueNode.hexColors ? 'swatch' : 'rectangle',
                  attributeId: optionNode.entityId,
                  attributeValue: valueNode.entityId
                });
              }
            }
            return _values;
          }, []);
          if (values.length > 0) {
            _options.push(values);
          }
        }
        return _options;
      }, []);
    } else {
      // load attributes from AJAX request
      $(resp).find('[data-product-attribute="swatch"]').each(function (i, el) {
        var $swatches = $(el);
        var swatches = [];
        $swatches.find('[data-product-attribute-value]').each(function (i, labelEl) {
          var $label = $(labelEl);
          var $input = _this3.inputFinderFunc ? _this3.inputFinderFunc($swatches, $label) : $swatches.find("[id=\"" + $label.attr('for') + "\"]");
          var attributeValue = Number($input.attr('value'));
          var attributeId = Number($input.attr('name').replace(/attribute\[([0-9]+)\]/, '$1'));
          if (typeof attributesData.in_stock_attributes !== 'object' || attributesData.in_stock_attributes.indexOf(attributeValue) > -1) {
            swatches.push({
              content: $label.html(),
              label: $input.data('productAttributeLabel'),
              attributeId: attributeId,
              attributeValue: attributeValue
            });
          }
        });
        if (swatches.length > 0) {
          data.attributes.push(swatches);
        }
      });
    }
    if (data.attributes.length === 0) {
      return;
    }
    var html = mustache__WEBPACK_IMPORTED_MODULE_0___default.a.render(this.attributesTemplate, data, null, this.templateCustomTags);
    this.$attributesContainer.append(html);
    var $form;
    if (this.graphQLNode) {
      // build Form from graphQL
      $form = $('<form class="productSwatches-hiddenForm"></form>').hide();
      $form.append("<input type=\"hidden\" name=\"action\" value=\"add\">");
      $form.append("<input type=\"hidden\" name=\"product_id\" value=\"" + this.productId + "\">");
      $form.append("<input type=\"hidden\" name=\"qty[]\" value=\"" + (this.graphQLNode.minPurchaseQuantity || 1) + "\">");
      this.graphQLNode.productOptions.edges.forEach(function (_ref4) {
        var optionNode = _ref4.node;
        var defaultValue = '';
        if (optionNode.values) {
          defaultValue = _this3.autoSelectOptionValues && optionNode.values.edges.length > 0 ? optionNode.values.edges[0].node.entityId : '';
          defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref5) {
            var valueNode = _ref5.node;
            return valueNode.isDefault ? valueNode.entityId : _defaultValue;
          }, defaultValue);
          if (!defaultValue && attributesData && attributesData.in_stock_attributes) {
            defaultValue = optionNode.values.edges.reduce(function (_defaultValue, _ref6) {
              var valueNode = _ref6.node;
              return _defaultValue || (attributesData.in_stock_attributes.indexOf(valueNode.entityId) > -1 ? valueNode.entityId : '');
            }, '');
          }
        } else if (optionNode.checkedByDefault) {
          defaultValue = 1;
        }
        $form.append("<input type=\"hidden\" name=\"attribute[" + optionNode.entityId + "]\" value=\"" + defaultValue + "\">");
      });
    } else {
      // build Form from AJAX request
      var _$form = $('<div></div>').append(resp).find(this.addToCartFormSelector).addClass('productSwatches-hiddenForm').hide();

      // Remove all 'id' to avoid duplicated label.for in quick-view
      _$form.find('[id]').prop('id', null);
    }
    this.$attributesContainer.append($form);
    this.$attributesContainer.on('click', '[data-attribute-id]', function (event) {
      event.preventDefault();
      var $a = $(event.currentTarget);
      var id = $a.data('attributeId');
      var value = $a.data('attributeValue');
      _this3.$attributesContainer.find("[data-attribute-id=" + id + "]").removeClass('is-active').find('input').prop('checked', false);
      $a.addClass('is-active').find('input').prop('checked', true);
      $form.find("[name=\"attribute[" + id + "]\"]").val([value]);
      _this3.requestAttributesChange($form);
    });
    if (this.swatchesLimit) {
      this.$attributesContainer.find('[data-more]').each(function (i, moreEl) {
        var $more = $(moreEl);
        var $list = $more.closest('[data-swatches]');
        var $less = $list.find('[data-less]');
        var $items = $list.find('[data-attribute-id]');
        if ($items.length > _this3.swatchesLimit) {
          var $hiddenItems = $items.filter(function (j) {
            return j >= _this3.swatchesLimit;
          }).hide();
          $more.on('click', function () {
            $hiddenItems.show();
            $more.hide();
            $less.show();
          });
          $less.on('click', function () {
            $hiddenItems.hide();
            $less.hide();
            $more.show();
          });
        } else {
          $more.hide();
        }
        $less.hide();
      });
    } else {
      this.$attributesContainer.find('[data-more], [data-less]').hide();
    }
  };
  _proto.requestAttributesChange = function requestAttributesChange($form) {
    var _this4 = this;
    if (!window.FormData) {
      return;
    }
    var data = this.filterEmptyFilesFromForm(new FormData($form.get(0)));
    $.ajax({
      url: "/remote/v1/product-attributes/" + this.productId,
      method: 'POST',
      contentType: false,
      processData: false,
      data: data,
      headers: {
        'stencil-config': '{}',
        'stencil-options': '{}',
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      },
      xhrFields: {
        withCredentials: true
      },
      success: function success(resp) {
        var _resp$data = resp.data,
          image = _resp$data.image,
          price = _resp$data.price;
        if (_this4.imageReplacerFunc) {
          var img = image ? image.data.replace('{:size}', _this4.imageSize) : null;
          _this4.imageReplacerFunc(_this4.$cardImage, img);
        } else {
          if (image) {
            var _img = image.data.replace('{:size}', _this4.imageSize);
            if (!_this4.$cardImage.data('originalSrc')) {
              _this4.$cardImage.data('originalSrc', _this4.$cardImage.attr('src')).data('originalSrcset', _this4.$cardImage.attr('srcset'));
            }
            _this4.$cardImage.attr('src', _img).attr('srcset', '').attr('data-srcset', '').addClass('productSwatches-image-optionChanged');
          } else if (_this4.$cardImage.data('originalSrc')) {
            _this4.$cardImage.attr('src', _this4.$cardImage.data('originalSrc')).attr('srcset', _this4.$cardImage.data('originalSrcset')).attr('data-srcset', _this4.$cardImage.data('originalSrcset')).data('originalSrc', null).data('originalSrcset', null).removeClass('productSwatches-image-optionChanged');
          }
        }
        if (price) {
          var viewModel = _this4.getViewModel(_this4.$scope);
          _this4.updatePriceView(viewModel, price);
        }
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
      }
    };
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
    }
    if (price.without_tax) {
      viewModel.priceLabel.$span.show();
      viewModel.$priceWithoutTax.html(price.without_tax.formatted);
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
  };
  return Card;
}();
/* harmony default export */ __webpack_exports__["default"] = (Card);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/papathemes/card-swatches/ProductSwatches.js":
/*!***************************************************************!*\
  !*** ./assets/js/papathemes/card-swatches/ProductSwatches.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./assets/js/papathemes/card-swatches/Card.js");

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ProductSwatches = /*#__PURE__*/function () {
  function ProductSwatches(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      _ref$cardSelector = _ref.cardSelector,
      cardSelector = _ref$cardSelector === void 0 ? '.product .card, .productCarousel-slide .card' : _ref$cardSelector,
      _ref$productIdSelecto = _ref.productIdSelector,
      productIdSelector = _ref$productIdSelecto === void 0 ? '[data-product-id]' : _ref$productIdSelecto,
      _ref$findProductIdByI = _ref.findProductIdByImg,
      findProductIdByImg = _ref$findProductIdByI === void 0 ? false : _ref$findProductIdByI,
      _ref$swatchesContaine = _ref.swatchesContainerSelector,
      swatchesContainerSelector = _ref$swatchesContaine === void 0 ? '.card-text--colorswatches' : _ref$swatchesContaine,
      _ref$cardImageSelecto = _ref.cardImageSelector,
      cardImageSelector = _ref$cardImageSelecto === void 0 ? '.card-image' : _ref$cardImageSelecto,
      _ref$addToCartFormSel = _ref.addToCartFormSelector,
      addToCartFormSelector = _ref$addToCartFormSel === void 0 ? 'form[data-cart-item-add]' : _ref$addToCartFormSel,
      _ref$productViewFile = _ref.productViewFile,
      productViewFile = _ref$productViewFile === void 0 ? 'products/product-view' : _ref$productViewFile,
      _ref$attributesTempla = _ref.attributesTemplate,
      attributesTemplate = _ref$attributesTempla === void 0 ? "\n            <div class=\"productSwatches-attributes\">\n                {{#attributes}}\n                    <div class=\"productSwatches-swatches\" data-swatches>\n                        {{#.}}\n                            <a href=\"#\" class=\"productSwatches-swatches-item productSwatches-swatches-item--{{type}}\" title=\"{{label}}\"\n                                data-attribute-id=\"{{attributeId}}\"\n                                data-attribute-value=\"{{attributeValue}}\">{{&content}}</a>\n                        {{/.}}\n                        <button type=\"button\" class=\"productSwatches-swatches-more\" data-more>+ More</button>\n                        <button type=\"button\" class=\"productSwatches-swatches-less\" data-less>- Less</button>\n                    </div>\n                {{/attributes}}\n            </div>\n        " : _ref$attributesTempla,
      _ref$templateCustomTa = _ref.templateCustomTags,
      templateCustomTags = _ref$templateCustomTa === void 0 ? null : _ref$templateCustomTa,
      _ref$imageSize = _ref.imageSize,
      imageSize = _ref$imageSize === void 0 ? '590x590' : _ref$imageSize,
      _ref$inputFinderFunc = _ref.inputFinderFunc,
      inputFinderFunc = _ref$inputFinderFunc === void 0 ? null : _ref$inputFinderFunc,
      _ref$swatchesLimit = _ref.swatchesLimit,
      swatchesLimit = _ref$swatchesLimit === void 0 ? 5 : _ref$swatchesLimit,
      _ref$imageReplacerFun = _ref.imageReplacerFunc,
      imageReplacerFunc = _ref$imageReplacerFun === void 0 ? null : _ref$imageReplacerFun,
      _ref$includeOptions = _ref.includeOptions,
      includeOptions = _ref$includeOptions === void 0 ? [] : _ref$includeOptions,
      _ref$displayInStockOn = _ref.displayInStockOnly,
      displayInStockOnly = _ref$displayInStockOn === void 0 ? false : _ref$displayInStockOn,
      _ref$autoSelectOption = _ref.autoSelectOptionValues,
      autoSelectOptionValues = _ref$autoSelectOption === void 0 ? true : _ref$autoSelectOption,
      _ref$graphQLToken = _ref.graphQLToken,
      graphQLToken = _ref$graphQLToken === void 0 ? '' : _ref$graphQLToken;
    this.config = {
      cardSelector: cardSelector,
      productIdSelector: productIdSelector,
      findProductIdByImg: findProductIdByImg,
      swatchesContainerSelector: swatchesContainerSelector,
      cardImageSelector: cardImageSelector,
      addToCartFormSelector: addToCartFormSelector,
      productViewFile: productViewFile,
      attributesTemplate: attributesTemplate,
      templateCustomTags: templateCustomTags,
      imageSize: imageSize,
      inputFinderFunc: inputFinderFunc,
      swatchesLimit: swatchesLimit,
      imageReplacerFunc: imageReplacerFunc,
      includeOptions: includeOptions.map(function (s) {
        return String(s).trim().toLocaleUpperCase();
      }),
      displayInStockOnly: displayInStockOnly,
      autoSelectOptionValues: autoSelectOptionValues,
      graphQLToken: graphQLToken
    };
    this.bindEvents();
  }
  var _proto = ProductSwatches.prototype;
  _proto.bindEvents = function bindEvents() {
    var _this = this;
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
    if (MutationObserver) {
      this.mutationObserver = new MutationObserver(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(function () {
        _this.onWindowScroll();
      }, 200));
      this.mutationObserver.observe(document.documentElement, {
        childList: true,
        subtree: true
      });
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    if (this.mutationObserver) {
      this.mutationObserver.disconnect();
      this.mutationObserver = null;
    }
  };
  _proto.onWindowScroll = function onWindowScroll($body) {
    var _this2 = this;
    if ($body === void 0) {
      $body = null;
    }
    var cards = [];
    $(this.config.cardSelector, $body).not('.productSwatchesLoaded').each(function (i, el) {
      var $scope = $(el).addClass('productSwatchesLoaded');
      if ($scope.data('productSwatchesCard')) {
        return;
      }
      var productId = $scope.data('productId') || $scope.find(_this2.config.productIdSelector).data('productId');
      if (!productId) {
        // try to find product ID by img src
        if (!_this2.config.findProductIdByImg) {
          return;
        }
        productId = $scope.find('img').get().reduce(function (id, img) {
          if (id) {
            return id;
          }
          var m = String(img.src).match(/products\/([0-9]+)\//);
          return m ? Number(m[1]) : id;
        }, null);
        if (!productId) {
          return;
        }
      }
      var $attributesContainer = $scope.find(_this2.config.swatchesContainerSelector);
      if ($attributesContainer.length === 0) {
        return;
      }
      var _this2$config = _this2.config,
        productViewFile = _this2$config.productViewFile,
        attributesTemplate = _this2$config.attributesTemplate,
        templateCustomTags = _this2$config.templateCustomTags,
        addToCartFormSelector = _this2$config.addToCartFormSelector,
        imageSize = _this2$config.imageSize,
        inputFinderFunc = _this2$config.inputFinderFunc,
        swatchesLimit = _this2$config.swatchesLimit,
        imageReplacerFunc = _this2$config.imageReplacerFunc,
        includeOptions = _this2$config.includeOptions,
        displayInStockOnly = _this2$config.displayInStockOnly,
        autoSelectOptionValues = _this2$config.autoSelectOptionValues,
        graphQLToken = _this2$config.graphQLToken;
      var $cardImage = $scope.find(_this2.config.cardImageSelector).first();
      var card = new _Card__WEBPACK_IMPORTED_MODULE_1__["default"]({
        $scope: $scope,
        $attributesContainer: $attributesContainer,
        productId: productId,
        productViewFile: productViewFile,
        attributesTemplate: attributesTemplate,
        templateCustomTags: templateCustomTags,
        addToCartFormSelector: addToCartFormSelector,
        $cardImage: $cardImage,
        imageSize: imageSize,
        inputFinderFunc: inputFinderFunc,
        swatchesLimit: swatchesLimit,
        imageReplacerFunc: imageReplacerFunc,
        includeOptions: includeOptions,
        displayInStockOnly: displayInStockOnly,
        autoSelectOptionValues: autoSelectOptionValues,
        autoInit: !graphQLToken
      });
      cards.push(card);
      $scope.data('productSwatchesCard', card);
    });
    if (this.config.graphQLToken && cards.length > 0) {
      var ids = Array.from(new Set(cards.map(function (card) {
        return card.productId;
      })));
      this.fetchGraphQLProducts(ids).then(function (edges) {
        edges.forEach(function (edge) {
          cards.filter(function (card) {
            return card.productId == edge.node.entityId;
          }).forEach(function (card) {
            card.graphQLNode = edge.node;
            card.init();
          });
        });
      });
    }
  };
  _proto.fetchGraphQLProducts = /*#__PURE__*/function () {
    var _fetchGraphQLProducts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(ids) {
      var edges, i, _ids, resp;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              edges = [];
              i = 0;
            case 2:
              if (!(i < ids.length)) {
                _context.next = 11;
                break;
              }
              _ids = ids.slice(i, i + 50);
              _context.next = 6;
              return $.ajax({
                url: '/graphql',
                method: 'POST',
                data: JSON.stringify({
                  query: "\n                        query {\n                            site {\n                                products (entityIds: " + JSON.stringify(_ids) + ", first: " + _ids.length + ") {\n                                    edges {\n                                        node {\n                                            entityId\n                                            name\n                                            minPurchaseQuantity\n                                            productOptions {\n                                                edges {\n                                                    node {\n                                                        entityId\n                                                        displayName\n                                                        ... on CheckboxOption {\n                                                            checkedByDefault\n                                                        }\n                                                        ... on MultipleChoiceOption {\n                                                            values {\n                                                                edges {\n                                                                    node {\n                                                                        entityId\n                                                                        isDefault\n                                                                        ... on SwatchOptionValue {\n                                                                            label\n                                                                            hexColors\n                                                                            imageUrl(width: 100)\n                                                                        }\n                                                                        ... on MultipleChoiceOptionValue {\n                                                                            label\n                                                                        }\n                                                                    }\n                                                                }\n                                                            }\n                                                        }\n                                                    }\n                                                }\n                                            }\n                                        }\n                                    }\n                                }\n                            }\n                        }\n                    "
                }),
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer " + this.config.graphQLToken
                },
                xhrFields: {
                  withCredentials: true
                }
              });
            case 6:
              resp = _context.sent;
              edges = edges.concat(resp.data.site.products.edges);
            case 8:
              i += 50;
              _context.next = 2;
              break;
            case 11:
              return _context.abrupt("return", edges);
            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    function fetchGraphQLProducts(_x) {
      return _fetchGraphQLProducts.apply(this, arguments);
    }
    return fetchGraphQLProducts;
  }();
  return ProductSwatches;
}();
/* harmony default export */ __webpack_exports__["default"] = (ProductSwatches);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jYXJkLXN3YXRjaGVzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3BhcGF0aGVtZXMvY2FyZC1zd2F0Y2hlcy9Qcm9kdWN0U3dhdGNoZXMuanMiXSwibmFtZXMiOlsiQ2FyZCIsIiRzY29wZSIsIiRhdHRyaWJ1dGVzQ29udGFpbmVyIiwicHJvZHVjdElkIiwicHJvZHVjdFZpZXdGaWxlIiwiYXR0cmlidXRlc1RlbXBsYXRlIiwidGVtcGxhdGVDdXN0b21UYWdzIiwiYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yIiwiJGNhcmRJbWFnZSIsImltYWdlU2l6ZSIsImlucHV0RmluZGVyRnVuYyIsInN3YXRjaGVzTGltaXQiLCJpbWFnZVJlcGxhY2VyRnVuYyIsImluY2x1ZGVPcHRpb25zIiwiZGlzcGxheUluU3RvY2tPbmx5IiwiYXV0b1NlbGVjdE9wdGlvblZhbHVlcyIsImF1dG9Jbml0IiwiZ3JhcGhRTE5vZGUiLCJpbml0IiwicmVxdWVzdEluU3RvY2tBdHRyaWJ1dGVzIiwiYnVpbGRQcm9kdWN0T3B0aW9ucyIsInJlcXVlc3RQcm9kdWN0T3B0aW9ucyIsIiQiLCJhamF4IiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImFjdGlvbiIsInByb2R1Y3RfaWQiLCJoZWFkZXJzIiwid2luZG93IiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsInhockZpZWxkcyIsIndpdGhDcmVkZW50aWFscyIsInN1Y2Nlc3MiLCJyZXNwIiwiYXR0cmlidXRlc0RhdGEiLCJpbl9zdG9ja19hdHRyaWJ1dGVzIiwiaW5zdG9jayIsImF0dHJpYnV0ZXMiLCJwcm9kdWN0T3B0aW9ucyIsImVkZ2VzIiwicmVkdWNlIiwiX29wdGlvbnMiLCJvcHRpb25Ob2RlIiwibm9kZSIsImxlbmd0aCIsImluY2x1ZGVzIiwiU3RyaW5nIiwiZGlzcGxheU5hbWUiLCJ0b0xvY2FsZVVwcGVyQ2FzZSIsInZhbHVlcyIsIl92YWx1ZXMiLCJ2YWx1ZU5vZGUiLCJpbmRleE9mIiwiZW50aXR5SWQiLCJpbWFnZVVybCIsImhleENvbG9ycyIsImxhYmVsIiwicHVzaCIsImNvbnRlbnQiLCJtYXAiLCJjb2xvciIsImpvaW4iLCJ0eXBlIiwiYXR0cmlidXRlSWQiLCJhdHRyaWJ1dGVWYWx1ZSIsImZpbmQiLCJlYWNoIiwiaSIsImVsIiwiJHN3YXRjaGVzIiwic3dhdGNoZXMiLCJsYWJlbEVsIiwiJGxhYmVsIiwiJGlucHV0IiwiYXR0ciIsIk51bWJlciIsInJlcGxhY2UiLCJodG1sIiwiTXVzdGFjaGUiLCJyZW5kZXIiLCJhcHBlbmQiLCIkZm9ybSIsImhpZGUiLCJtaW5QdXJjaGFzZVF1YW50aXR5IiwiZm9yRWFjaCIsImRlZmF1bHRWYWx1ZSIsIl9kZWZhdWx0VmFsdWUiLCJpc0RlZmF1bHQiLCJjaGVja2VkQnlEZWZhdWx0IiwiYWRkQ2xhc3MiLCJwcm9wIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGEiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsInJlbW92ZUNsYXNzIiwidmFsIiwicmVxdWVzdEF0dHJpYnV0ZXNDaGFuZ2UiLCJtb3JlRWwiLCIkbW9yZSIsIiRsaXN0IiwiY2xvc2VzdCIsIiRsZXNzIiwiJGl0ZW1zIiwiJGhpZGRlbkl0ZW1zIiwiZmlsdGVyIiwiaiIsInNob3ciLCJGb3JtRGF0YSIsImZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybSIsImdldCIsImNvbnRlbnRUeXBlIiwicHJvY2Vzc0RhdGEiLCJpbWFnZSIsInByaWNlIiwiaW1nIiwidmlld01vZGVsIiwiZ2V0Vmlld01vZGVsIiwidXBkYXRlUHJpY2VWaWV3IiwiZm9ybURhdGEiLCJrZXkiLCJGaWxlIiwibmFtZSIsInNpemUiLCJkZWxldGUiLCJlIiwiY29uc29sZSIsImVycm9yIiwiJHByaWNlV2l0aFRheCIsIiRwcmljZVdpdGhvdXRUYXgiLCJycnBXaXRoVGF4IiwiJGRpdiIsIiRzcGFuIiwicnJwV2l0aG91dFRheCIsIm5vblNhbGVXaXRoVGF4Iiwibm9uU2FsZVdpdGhvdXRUYXgiLCJwcmljZVNhdmVkIiwicHJpY2VOb3dMYWJlbCIsInByaWNlTGFiZWwiLCJjbGVhclByaWNpbmdOb3RGb3VuZCIsIndpdGhfdGF4IiwiZm9ybWF0dGVkIiwid2l0aG91dF90YXgiLCJycnBfd2l0aF90YXgiLCJycnBfd2l0aG91dF90YXgiLCJzYXZlZCIsIm5vbl9zYWxlX3ByaWNlX3dpdGhfdGF4Iiwibm9uX3NhbGVfcHJpY2Vfd2l0aG91dF90YXgiLCJQcm9kdWN0U3dhdGNoZXMiLCJjYXJkU2VsZWN0b3IiLCJwcm9kdWN0SWRTZWxlY3RvciIsImZpbmRQcm9kdWN0SWRCeUltZyIsInN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IiLCJjYXJkSW1hZ2VTZWxlY3RvciIsImdyYXBoUUxUb2tlbiIsImNvbmZpZyIsInMiLCJ0cmltIiwiYmluZEV2ZW50cyIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJXZWJLaXRNdXRhdGlvbk9ic2VydmVyIiwibXV0YXRpb25PYnNlcnZlciIsIm9uV2luZG93U2Nyb2xsIiwib2JzZXJ2ZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInVuYmluZEV2ZW50cyIsImRpc2Nvbm5lY3QiLCIkYm9keSIsImNhcmRzIiwibm90IiwibSIsInNyYyIsIm1hdGNoIiwiZmlyc3QiLCJjYXJkIiwiaWRzIiwiQXJyYXkiLCJmcm9tIiwiU2V0IiwiZmV0Y2hHcmFwaFFMUHJvZHVjdHMiLCJ0aGVuIiwiZWRnZSIsIl9pZHMiLCJzbGljZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeSIsImNvbmNhdCIsInNpdGUiLCJwcm9kdWN0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUFBLElBRTFCQSxJQUFJO0VBQ04sb0JBa0JHO0lBQUEsSUFqQkNDLE1BQU0sUUFBTkEsTUFBTTtNQUNOQyxvQkFBb0IsUUFBcEJBLG9CQUFvQjtNQUNwQkMsU0FBUyxRQUFUQSxTQUFTO01BQ1RDLGVBQWUsUUFB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OUksS0FBSyxHQUFHLEVBQUU7Y0FDTDRCLENBQUMsR0FBRyxDQUFDO1lBQUE7Y0FBQSxNQUFFQSxDQUFDLEdBQUdrSCxHQUFHLENBQUN6SSxNQUFNO2dCQUFBO2dCQUFBO2NBQUE7Y0FDcEJnSixJQUFJLEdBQUdQLEdBQUcsQ0FBQ1EsS0FBSyxDQUFDMUgsQ0FBQyxFQUFFQSxDQUFDLEdBQUcsRUFBRSxDQUFDO2NBQUE7Y0FBQSxPQUNkaEQsQ0FBQyxDQUFDQyxJQUFJLENBQUM7Z0JBQ3RCQyxHQUFHLEVBQUUsVUFBVTtnQkFDZkMsTUFBTSxFQUFFLE1BQU07Z0JBQ2RDLElBQUksRUFBRXVLLElBQUksQ0FBQ0MsU0FBUyxDQUFDO2tCQUNqQkMsS0FBSyxtSUFHOEJGLElBQUksQ0FBQ0MsU0FBUyxDQUFDSCxJQUFJLENBQUMsaUJBQVlBLElBQUksQ0FBQ2hKLE1BQU07Z0JBeUNsRixDQUFDLENBQUM7Z0JBQ0ZsQixPQUFPLEVBQUU7a0JBQ0wsY0FBYyxFQUFFLGtCQUFrQjtrQkFDbEMsZUFBZSxjQUFZLElBQUksQ0FBQ29JLE1BQU0sQ0FBQ0Q7Z0JBQzNDLENBQUM7Z0JBQ0QvSCxTQUFTLEVBQUU7a0JBQ1BDLGVBQWUsRUFBRTtnQkFDckI7Y0FDSixDQUFDLENBQUM7WUFBQTtjQXhESUUsSUFBSTtjQXlEVk0sS0FBSyxHQUFHQSxLQUFLLENBQUMwSixNQUFNLENBQUNoSyxJQUFJLENBQUNWLElBQUksQ0FBQzJLLElBQUksQ0FBQ0MsUUFBUSxDQUFDNUosS0FBSyxDQUFDO1lBQUM7Y0EzRHhCNEIsQ0FBQyxJQUFJLEVBQUU7Y0FBQTtjQUFBO1lBQUE7Y0FBQSxpQ0E2RGhDNUIsS0FBSztZQUFBO1lBQUE7Y0FBQTtVQUFBO1FBQUE7TUFBQTtJQUFBLENBQ2Y7SUFBQTtNQUFBO0lBQUE7SUFBQTtFQUFBO0VBQUE7QUFBQTtBQUdVZ0gsOEVBQWUsRSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xyXG5cclxuY2xhc3MgQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgJHNjb3BlLFxyXG4gICAgICAgICRhdHRyaWJ1dGVzQ29udGFpbmVyLFxyXG4gICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICBwcm9kdWN0Vmlld0ZpbGUsXHJcbiAgICAgICAgYXR0cmlidXRlc1RlbXBsYXRlLFxyXG4gICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcclxuICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgJGNhcmRJbWFnZSxcclxuICAgICAgICBpbWFnZVNpemUsXHJcbiAgICAgICAgaW5wdXRGaW5kZXJGdW5jLFxyXG4gICAgICAgIHN3YXRjaGVzTGltaXQsXHJcbiAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXHJcbiAgICAgICAgaW5jbHVkZU9wdGlvbnMsXHJcbiAgICAgICAgZGlzcGxheUluU3RvY2tPbmx5LFxyXG4gICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXHJcbiAgICAgICAgYXV0b0luaXQgPSB0cnVlLFxyXG4gICAgICAgIGdyYXBoUUxOb2RlLFxyXG4gICAgfSkge1xyXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJHNjb3BlO1xyXG4gICAgICAgIHRoaXMucHJvZHVjdElkID0gcHJvZHVjdElkO1xyXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIgPSAkYXR0cmlidXRlc0NvbnRhaW5lcjtcclxuICAgICAgICB0aGlzLnByb2R1Y3RWaWV3RmlsZSA9IHByb2R1Y3RWaWV3RmlsZTtcclxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNUZW1wbGF0ZSA9IGF0dHJpYnV0ZXNUZW1wbGF0ZTtcclxuICAgICAgICB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncyA9IHRlbXBsYXRlQ3VzdG9tVGFncztcclxuICAgICAgICB0aGlzLmFkZFRvQ2FydEZvcm1TZWxlY3RvciA9IGFkZFRvQ2FydEZvcm1TZWxlY3RvcjtcclxuICAgICAgICB0aGlzLiRjYXJkSW1hZ2UgPSAkY2FyZEltYWdlO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VTaXplID0gaW1hZ2VTaXplO1xyXG4gICAgICAgIHRoaXMuaW5wdXRGaW5kZXJGdW5jID0gaW5wdXRGaW5kZXJGdW5jO1xyXG4gICAgICAgIHRoaXMuc3dhdGNoZXNMaW1pdCA9IHN3YXRjaGVzTGltaXQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZVJlcGxhY2VyRnVuYyA9IGltYWdlUmVwbGFjZXJGdW5jO1xyXG4gICAgICAgIHRoaXMuaW5jbHVkZU9wdGlvbnMgPSBpbmNsdWRlT3B0aW9ucztcclxuICAgICAgICB0aGlzLmRpc3BsYXlJblN0b2NrT25seSA9IGRpc3BsYXlJblN0b2NrT25seTtcclxuICAgICAgICB0aGlzLmF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgPSBhdXRvU2VsZWN0T3B0aW9uVmFsdWVzO1xyXG4gICAgICAgIHRoaXMuYXV0b0luaXQgPSBhdXRvSW5pdDtcclxuICAgICAgICB0aGlzLmdyYXBoUUxOb2RlID0gZ3JhcGhRTE5vZGU7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmF1dG9Jbml0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlJblN0b2NrT25seSkge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RJblN0b2NrQXR0cmlidXRlcygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdyYXBoUUxOb2RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUHJvZHVjdE9wdGlvbnMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFByb2R1Y3RPcHRpb25zKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEluU3RvY2tBdHRyaWJ1dGVzKCkge1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogYC9yZW1vdGUvdjEvcHJvZHVjdC1hdHRyaWJ1dGVzLyR7dGhpcy5wcm9kdWN0SWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FkZCcsXHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiB0aGlzLnByb2R1Y3RJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtY29uZmlnJzogJ3t9JyxcclxuICAgICAgICAgICAgICAgICdzdGVuY2lsLW9wdGlvbnMnOiAne30nLFxyXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlc0RhdGEgPSByZXNwLmRhdGEgfHwge307XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMgPT09ICdvYmplY3QnIHx8IGF0dHJpYnV0ZXNEYXRhLmluc3RvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5ncmFwaFFMTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUHJvZHVjdE9wdGlvbnMoYXR0cmlidXRlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhKSB7XHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBgL3Byb2R1Y3RzLnBocD9wcm9kdWN0SWQ9JHt0aGlzLnByb2R1Y3RJZH1gLFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1jb25maWcnOiAne30nLFxyXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtb3B0aW9ucyc6IGB7XCJyZW5kZXJfd2l0aFwiOlwiJHt0aGlzLnByb2R1Y3RWaWV3RmlsZX1cIn1gLFxyXG4gICAgICAgICAgICAgICAgJ3gteHNyZi10b2tlbic6IHdpbmRvdy5CQ0RhdGEgJiYgd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuID8gd2luZG93LkJDRGF0YS5jc3JmX3Rva2VuIDogJycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWNjZXNzOiAocmVzcCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idWlsZFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhLCByZXNwKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFByb2R1Y3RPcHRpb25zKGF0dHJpYnV0ZXNEYXRhID0ge30sIHJlc3ApIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzOiBbXSxcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhRTE5vZGUpIHtcclxuICAgICAgICAgICAgLy8gbG9hZCBhdHRyaWJ1dGVzIGZyb20gZ3JhcGhRTFxyXG4gICAgICAgICAgICBkYXRhLmF0dHJpYnV0ZXMgPSB0aGlzLmdyYXBoUUxOb2RlLnByb2R1Y3RPcHRpb25zLmVkZ2VzLnJlZHVjZSgoX29wdGlvbnMsIHsgbm9kZTogb3B0aW9uTm9kZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbmNsdWRlT3B0aW9ucy5sZW5ndGggPiAwICYmICF0aGlzLmluY2x1ZGVPcHRpb25zLmluY2x1ZGVzKFN0cmluZyhvcHRpb25Ob2RlLmRpc3BsYXlOYW1lKS50b0xvY2FsZVVwcGVyQ2FzZSgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfb3B0aW9ucztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25Ob2RlLnZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLnJlZHVjZSgoX3ZhbHVlcywgeyBub2RlOiB2YWx1ZU5vZGUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMgIT09ICdvYmplY3QnIHx8IGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMuaW5kZXhPZih2YWx1ZU5vZGUuZW50aXR5SWQpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZU5vZGUuaW1hZ2VVcmwgfHwgdmFsdWVOb2RlLmhleENvbG9ycyB8fCB2YWx1ZU5vZGUubGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB2YWx1ZU5vZGUuaW1hZ2VVcmwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGA8c3BhbiBjbGFzcz1cImZvcm0tb3B0aW9uLXZhcmlhbnQgZm9ybS1vcHRpb24tdmFyaWFudC0tcGF0dGVyblwiIHRpdGxlPVwiJHt2YWx1ZU5vZGUubGFiZWx9XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7dmFsdWVOb2RlLmltYWdlVXJsfScpO1wiPjwvc3Bhbj5gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICh2YWx1ZU5vZGUuaGV4Q29sb3JzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdmFsdWVOb2RlLmhleENvbG9ycy5tYXAoY29sb3IgPT4gYDxzcGFuIGNsYXNzPSdmb3JtLW9wdGlvbi12YXJpYW50IGZvcm0tb3B0aW9uLXZhcmlhbnQtLWNvbG9yJyB0aXRsZT1cIiR7dmFsdWVOb2RlLmxhYmVsfVwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L3NwYW4+YCkuam9pbignJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgPHNwYW4gY2xhc3M9XCJmb3JtLW9wdGlvbi12YXJpYW50XCI+JHt2YWx1ZU5vZGUubGFiZWx9PC9zcGFuPmApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogdmFsdWVOb2RlLmxhYmVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiB2YWx1ZU5vZGUuaW1hZ2VVcmwgfHwgdmFsdWVOb2RlLmhleENvbG9ycyA/ICdzd2F0Y2gnIDogJ3JlY3RhbmdsZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZUlkOiBvcHRpb25Ob2RlLmVudGl0eUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVWYWx1ZTogdmFsdWVOb2RlLmVudGl0eUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIFtdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgX29wdGlvbnMucHVzaCh2YWx1ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfb3B0aW9ucztcclxuICAgICAgICAgICAgfSwgW10pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGxvYWQgYXR0cmlidXRlcyBmcm9tIEFKQVggcmVxdWVzdFxyXG4gICAgICAgICAgICAkKHJlc3ApLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic3dhdGNoXCJdJykuZWFjaCgoaSwgZWwpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRzd2F0Y2hlcyA9ICQoZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3dhdGNoZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHN3YXRjaGVzLmZpbmQoJ1tkYXRhLXByb2R1Y3QtYXR0cmlidXRlLXZhbHVlXScpLmVhY2goKGksIGxhYmVsRWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkbGFiZWwgPSAkKGxhYmVsRWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9IHRoaXMuaW5wdXRGaW5kZXJGdW5jID8gdGhpcy5pbnB1dEZpbmRlckZ1bmMoJHN3YXRjaGVzLCAkbGFiZWwpIDogJHN3YXRjaGVzLmZpbmQoYFtpZD1cIiR7JGxhYmVsLmF0dHIoJ2ZvcicpfVwiXWApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZVZhbHVlID0gTnVtYmVyKCRpbnB1dC5hdHRyKCd2YWx1ZScpKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVJZCA9IE51bWJlcigkaW5wdXQuYXR0cignbmFtZScpLnJlcGxhY2UoL2F0dHJpYnV0ZVxcWyhbMC05XSspXFxdLywgJyQxJykpO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcyAhPT0gJ29iamVjdCcgfHwgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZVZhbHVlKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3YXRjaGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJGxhYmVsLmh0bWwoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAkaW5wdXQuZGF0YSgncHJvZHVjdEF0dHJpYnV0ZUxhYmVsJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZVZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3dhdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYXR0cmlidXRlcy5wdXNoKHN3YXRjaGVzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZGF0YS5hdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBodG1sID0gTXVzdGFjaGUucmVuZGVyKHRoaXMuYXR0cmlidXRlc1RlbXBsYXRlLCBkYXRhLCBudWxsLCB0aGlzLnRlbXBsYXRlQ3VzdG9tVGFncyk7XHJcbiAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5hcHBlbmQoaHRtbCk7XHJcblxyXG4gICAgICAgIGxldCAkZm9ybTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZ3JhcGhRTE5vZGUpIHtcclxuICAgICAgICAgICAgLy8gYnVpbGQgRm9ybSBmcm9tIGdyYXBoUUxcclxuICAgICAgICAgICAgJGZvcm0gPSAkKCc8Zm9ybSBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1oaWRkZW5Gb3JtXCI+PC9mb3JtPicpLmhpZGUoKTtcclxuICAgICAgICAgICAgJGZvcm0uYXBwZW5kKGA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhY3Rpb25cIiB2YWx1ZT1cImFkZFwiPmApO1xyXG4gICAgICAgICAgICAkZm9ybS5hcHBlbmQoYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInByb2R1Y3RfaWRcIiB2YWx1ZT1cIiR7dGhpcy5wcm9kdWN0SWR9XCI+YCk7XHJcbiAgICAgICAgICAgICRmb3JtLmFwcGVuZChgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicXR5W11cIiB2YWx1ZT1cIiR7dGhpcy5ncmFwaFFMTm9kZS5taW5QdXJjaGFzZVF1YW50aXR5IHx8IDF9XCI+YCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3JhcGhRTE5vZGUucHJvZHVjdE9wdGlvbnMuZWRnZXMuZm9yRWFjaCgoeyBub2RlOiBvcHRpb25Ob2RlIH0pID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkZWZhdWx0VmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChvcHRpb25Ob2RlLnZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IHRoaXMuYXV0b1NlbGVjdE9wdGlvblZhbHVlcyAmJiBvcHRpb25Ob2RlLnZhbHVlcy5lZGdlcy5sZW5ndGggPiAwID8gb3B0aW9uTm9kZS52YWx1ZXMuZWRnZXNbMF0ubm9kZS5lbnRpdHlJZCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IG9wdGlvbk5vZGUudmFsdWVzLmVkZ2VzLnJlZHVjZSgoX2RlZmF1bHRWYWx1ZSwgeyBub2RlOiB2YWx1ZU5vZGUgfSkgPT4gdmFsdWVOb2RlLmlzRGVmYXVsdCA/IHZhbHVlTm9kZS5lbnRpdHlJZCA6IF9kZWZhdWx0VmFsdWUsIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWZhdWx0VmFsdWUgJiYgYXR0cmlidXRlc0RhdGEgJiYgYXR0cmlidXRlc0RhdGEuaW5fc3RvY2tfYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWUgPSBvcHRpb25Ob2RlLnZhbHVlcy5lZGdlcy5yZWR1Y2UoKF9kZWZhdWx0VmFsdWUsIHsgbm9kZTogdmFsdWVOb2RlIH0pID0+IF9kZWZhdWx0VmFsdWUgfHwgKGF0dHJpYnV0ZXNEYXRhLmluX3N0b2NrX2F0dHJpYnV0ZXMuaW5kZXhPZih2YWx1ZU5vZGUuZW50aXR5SWQpID4gLTEgPyB2YWx1ZU5vZGUuZW50aXR5SWQgOiAnJyksICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbk5vZGUuY2hlY2tlZEJ5RGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAkZm9ybS5hcHBlbmQoYDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImF0dHJpYnV0ZVske29wdGlvbk5vZGUuZW50aXR5SWR9XVwiIHZhbHVlPVwiJHtkZWZhdWx0VmFsdWV9XCI+YCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGJ1aWxkIEZvcm0gZnJvbSBBSkFYIHJlcXVlc3RcclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkKCc8ZGl2PjwvZGl2PicpLmFwcGVuZChyZXNwKS5maW5kKHRoaXMuYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdwcm9kdWN0U3dhdGNoZXMtaGlkZGVuRm9ybScpXHJcbiAgICAgICAgICAgICAgICAuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGFsbCAnaWQnIHRvIGF2b2lkIGR1cGxpY2F0ZWQgbGFiZWwuZm9yIGluIHF1aWNrLXZpZXdcclxuICAgICAgICAgICAgJGZvcm0uZmluZCgnW2lkXScpLnByb3AoJ2lkJywgbnVsbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmFwcGVuZCgkZm9ybSk7XHJcblxyXG4gICAgICAgIHRoaXMuJGF0dHJpYnV0ZXNDb250YWluZXIub24oJ2NsaWNrJywgJ1tkYXRhLWF0dHJpYnV0ZS1pZF0nLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRhID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkYS5kYXRhKCdhdHRyaWJ1dGVJZCcpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICRhLmRhdGEoJ2F0dHJpYnV0ZVZhbHVlJyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAuZmluZChgW2RhdGEtYXR0cmlidXRlLWlkPSR7aWR9XWApLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2lucHV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgJGEuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnaW5wdXQnKS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICAkZm9ybS5maW5kKGBbbmFtZT1cImF0dHJpYnV0ZVske2lkfV1cIl1gKS52YWwoW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RBdHRyaWJ1dGVzQ2hhbmdlKCRmb3JtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3dhdGNoZXNMaW1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLiRhdHRyaWJ1dGVzQ29udGFpbmVyLmZpbmQoJ1tkYXRhLW1vcmVdJykuZWFjaCgoaSwgbW9yZUVsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbW9yZSA9ICQobW9yZUVsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRsaXN0ID0gJG1vcmUuY2xvc2VzdCgnW2RhdGEtc3dhdGNoZXNdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkbGVzcyA9ICRsaXN0LmZpbmQoJ1tkYXRhLWxlc3NdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCAkaXRlbXMgPSAkbGlzdC5maW5kKCdbZGF0YS1hdHRyaWJ1dGUtaWRdJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCRpdGVtcy5sZW5ndGggPiB0aGlzLnN3YXRjaGVzTGltaXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkaGlkZGVuSXRlbXMgPSAkaXRlbXMuZmlsdGVyKGogPT4gaiA+PSB0aGlzLnN3YXRjaGVzTGltaXQpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAkbW9yZS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRoaWRkZW5JdGVtcy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICRtb3JlLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGxlc3Muc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICRsZXNzLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGhpZGRlbkl0ZW1zLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJGxlc3MuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkbW9yZS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1vcmUuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICRsZXNzLmhpZGUoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy4kYXR0cmlidXRlc0NvbnRhaW5lci5maW5kKCdbZGF0YS1tb3JlXSwgW2RhdGEtbGVzc10nKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXF1ZXN0QXR0cmlidXRlc0NoYW5nZSgkZm9ybSkge1xyXG4gICAgICAgIGlmICghd2luZG93LkZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKSk7XHJcblxyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogYC9yZW1vdGUvdjEvcHJvZHVjdC1hdHRyaWJ1dGVzLyR7dGhpcy5wcm9kdWN0SWR9YCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IGZhbHNlLFxyXG4gICAgICAgICAgICBkYXRhLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAnc3RlbmNpbC1jb25maWcnOiAne30nLFxyXG4gICAgICAgICAgICAgICAgJ3N0ZW5jaWwtb3B0aW9ucyc6ICd7fScsXHJcbiAgICAgICAgICAgICAgICAneC14c3JmLXRva2VuJzogd2luZG93LkJDRGF0YSAmJiB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gPyB3aW5kb3cuQkNEYXRhLmNzcmZfdG9rZW4gOiAnJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGltYWdlLCBwcmljZSB9ID0gcmVzcC5kYXRhO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlUmVwbGFjZXJGdW5jKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gaW1hZ2UgPyBpbWFnZS5kYXRhLnJlcGxhY2UoJ3s6c2l6ZX0nLCB0aGlzLmltYWdlU2l6ZSkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VSZXBsYWNlckZ1bmModGhpcy4kY2FyZEltYWdlLCBpbWcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1nID0gaW1hZ2UuZGF0YS5yZXBsYWNlKCd7OnNpemV9JywgdGhpcy5pbWFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyYycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjYXJkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmMnLCB0aGlzLiRjYXJkSW1hZ2UuYXR0cignc3JjJykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JywgdGhpcy4kY2FyZEltYWdlLmF0dHIoJ3NyY3NldCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRjYXJkSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Jjc2V0JywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zcmNzZXQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygncHJvZHVjdFN3YXRjaGVzLWltYWdlLW9wdGlvbkNoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyYycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGNhcmRJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyYycsIHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyYycpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NyY3NldCcsIHRoaXMuJGNhcmRJbWFnZS5kYXRhKCdvcmlnaW5hbFNyY3NldCcpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc3Jjc2V0JywgdGhpcy4kY2FyZEltYWdlLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF0YSgnb3JpZ2luYWxTcmMnLCBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3Jjc2V0JywgbnVsbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygncHJvZHVjdFN3YXRjaGVzLWltYWdlLW9wdGlvbkNoYW5nZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgdmlld01vZGVsID0gdGhpcy5nZXRWaWV3TW9kZWwodGhpcy4kc2NvcGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUHJpY2VWaWV3KHZpZXdNb2RlbCwgcHJpY2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDk2NzI5OTIvYWpheC1yZXF1ZXN0LWZhaWxzLXdoZW4tc2VuZGluZy1mb3JtZGF0YS1pbmNsdWRpbmctZW1wdHktZmlsZS1pbnB1dC1pbi1zYWZhcmlcclxuICAgICAqIFNhZmFyaSBicm93c2VyIHdpdGgganF1ZXJ5IDMuMy4xIGhhcyBhbiBpc3N1ZSB1cGxvYWRpbmcgZW1wdHkgZmlsZSBwYXJhbWV0ZXJzLiBUaGlzIGZ1bmN0aW9uIHJlbW92ZXMgYW55IGVtcHR5IGZpbGVzIGZyb20gdGhlIGZvcm0gcGFyYW1zXHJcbiAgICAgKiBAcGFyYW0gZm9ybURhdGE6IEZvcm1EYXRhIG9iamVjdFxyXG4gICAgICogQHJldHVybnMgRm9ybURhdGEgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGZpbHRlckVtcHR5RmlsZXNGcm9tRm9ybShmb3JtRGF0YSkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsXSBvZiBmb3JtRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbCBpbnN0YW5jZW9mIEZpbGUgJiYgIXZhbC5uYW1lICYmICF2YWwuc2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmRlbGV0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZvcm1EYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2luY2UgJHByb2R1Y3RWaWV3IGNhbiBiZSBkeW5hbWljYWxseSBpbnNlcnRlZCB1c2luZyByZW5kZXJfd2l0aCxcclxuICAgICAqIFdlIGhhdmUgdG8gcmV0cmlldmUgdGhlIHJlc3BlY3RpdmUgZWxlbWVudHNcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gJHNjb3BlXHJcbiAgICAgKi9cclxuICAgIGdldFZpZXdNb2RlbCgkc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAkcHJpY2VXaXRoVGF4OiAkKCdbZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgICRwcmljZVdpdGhvdXRUYXg6ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgcnJwV2l0aFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtd2l0aC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcnJwV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLnJycC1wcmljZS0td2l0aG91dFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ycnAtcHJpY2Utd2l0aG91dC10YXhdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbm9uU2FsZVdpdGhUYXg6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5ub24tc2FsZS1wcmljZS0td2l0aFRheCcsICRzY29wZSksXHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnW2RhdGEtcHJvZHVjdC1ub24tc2FsZS1wcmljZS13aXRoLXRheF0nLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBub25TYWxlV2l0aG91dFRheDoge1xyXG4gICAgICAgICAgICAgICAgJGRpdjogJCgnLm5vbi1zYWxlLXByaWNlLS13aXRob3V0VGF4JywgJHNjb3BlKSxcclxuICAgICAgICAgICAgICAgICRzcGFuOiAkKCdbZGF0YS1wcm9kdWN0LW5vbi1zYWxlLXByaWNlLXdpdGhvdXQtdGF4XScsICRzY29wZSksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHByaWNlU2F2ZWQ6IHtcclxuICAgICAgICAgICAgICAgICRkaXY6ICQoJy5wcmljZS1zZWN0aW9uLS1zYXZpbmcnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJ1tkYXRhLXByb2R1Y3QtcHJpY2Utc2F2ZWRdJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcHJpY2VOb3dMYWJlbDoge1xyXG4gICAgICAgICAgICAgICAgJHNwYW46ICQoJy5wcmljZS1ub3ctbGFiZWwnLCAkc2NvcGUpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwcmljZUxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICAkc3BhbjogJCgnLnByaWNlLWxhYmVsJywgJHNjb3BlKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGlkZSB0aGUgcHJpY2luZyBlbGVtZW50cyB0aGF0IHdpbGwgc2hvdyB1cCBvbmx5IHdoZW4gdGhlIHByaWNlIGV4aXN0cyBpbiBBUElcclxuICAgICAqIEBwYXJhbSB2aWV3TW9kZWxcclxuICAgICAqL1xyXG4gICAgY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKSB7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRoVGF4LiRkaXYuaGlkZSgpO1xyXG4gICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VTYXZlZC4kZGl2LmhpZGUoKTtcclxuICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgdmlld01vZGVsLnByaWNlTGFiZWwuJHNwYW4uaGlkZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXBkYXRlIHRoZSB2aWV3IG9mIHByaWNlLCBtZXNzYWdlcywgU0tVIGFuZCBzdG9jayBvcHRpb25zIHdoZW4gYSBwcm9kdWN0IG9wdGlvbiBjaGFuZ2VzXHJcbiAgICAgKiBAcGFyYW0gIHtPYmplY3R9IGRhdGEgUHJvZHVjdCBhdHRyaWJ1dGUgZGF0YVxyXG4gICAgICovXHJcbiAgICB1cGRhdGVQcmljZVZpZXcodmlld01vZGVsLCBwcmljZSkge1xyXG4gICAgICAgIHRoaXMuY2xlYXJQcmljaW5nTm90Rm91bmQodmlld01vZGVsKTtcclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhUYXguaHRtbChwcmljZS53aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLndpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLiRwcmljZVdpdGhvdXRUYXguaHRtbChwcmljZS53aXRob3V0X3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLnJycF93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucnJwV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ycnBfd2l0aF90YXguZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ycnBfd2l0aG91dF90YXgpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnJycFdpdGhvdXRUYXguJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ycnBXaXRob3V0VGF4LiRzcGFuLmh0bWwocHJpY2UucnJwX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJpY2Uuc2F2ZWQpIHtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlU2F2ZWQuJGRpdi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZVNhdmVkLiRzcGFuLmh0bWwocHJpY2Uuc2F2ZWQuZm9ybWF0dGVkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VMYWJlbC4kc3Bhbi5oaWRlKCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aFRheC4kZGl2LnNob3coKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLnByaWNlTm93TGFiZWwuJHNwYW4uc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwubm9uU2FsZVdpdGhUYXguJHNwYW4uaHRtbChwcmljZS5ub25fc2FsZV9wcmljZV93aXRoX3RheC5mb3JtYXR0ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4KSB7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5wcmljZUxhYmVsLiRzcGFuLmhpZGUoKTtcclxuICAgICAgICAgICAgdmlld01vZGVsLm5vblNhbGVXaXRob3V0VGF4LiRkaXYuc2hvdygpO1xyXG4gICAgICAgICAgICB2aWV3TW9kZWwucHJpY2VOb3dMYWJlbC4kc3Bhbi5zaG93KCk7XHJcbiAgICAgICAgICAgIHZpZXdNb2RlbC5ub25TYWxlV2l0aG91dFRheC4kc3Bhbi5odG1sKHByaWNlLm5vbl9zYWxlX3ByaWNlX3dpdGhvdXRfdGF4LmZvcm1hdHRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xyXG4iLCJpbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vQ2FyZCc7XHJcblxyXG5jbGFzcyBQcm9kdWN0U3dhdGNoZXMge1xyXG4gICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgIGNhcmRTZWxlY3RvciA9ICcucHJvZHVjdCAuY2FyZCwgLnByb2R1Y3RDYXJvdXNlbC1zbGlkZSAuY2FyZCcsXHJcbiAgICAgICAgcHJvZHVjdElkU2VsZWN0b3IgPSAnW2RhdGEtcHJvZHVjdC1pZF0nLFxyXG4gICAgICAgIGZpbmRQcm9kdWN0SWRCeUltZyA9IGZhbHNlLFxyXG4gICAgICAgIHN3YXRjaGVzQ29udGFpbmVyU2VsZWN0b3IgPSAnLmNhcmQtdGV4dC0tY29sb3Jzd2F0Y2hlcycsXHJcbiAgICAgICAgY2FyZEltYWdlU2VsZWN0b3IgPSAnLmNhcmQtaW1hZ2UnLFxyXG4gICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvciA9ICdmb3JtW2RhdGEtY2FydC1pdGVtLWFkZF0nLFxyXG4gICAgICAgIHByb2R1Y3RWaWV3RmlsZSA9ICdwcm9kdWN0cy9wcm9kdWN0LXZpZXcnLFxyXG4gICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2R1Y3RTd2F0Y2hlcy1hdHRyaWJ1dGVzXCI+XHJcbiAgICAgICAgICAgICAgICB7eyNhdHRyaWJ1dGVzfX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzXCIgZGF0YS1zd2F0Y2hlcz5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3sjLn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWl0ZW0gcHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWl0ZW0tLXt7dHlwZX19XCIgdGl0bGU9XCJ7e2xhYmVsfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYXR0cmlidXRlLWlkPVwie3thdHRyaWJ1dGVJZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWF0dHJpYnV0ZS12YWx1ZT1cInt7YXR0cmlidXRlVmFsdWV9fVwiPnt7JmNvbnRlbnR9fTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3svLn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLW1vcmVcIiBkYXRhLW1vcmU+KyBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwicHJvZHVjdFN3YXRjaGVzLXN3YXRjaGVzLWxlc3NcIiBkYXRhLWxlc3M+LSBMZXNzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7ey9hdHRyaWJ1dGVzfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYCxcclxuICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MgPSBudWxsLFxyXG4gICAgICAgIGltYWdlU2l6ZSA9ICc1OTB4NTkwJyxcclxuICAgICAgICBpbnB1dEZpbmRlckZ1bmMgPSBudWxsLFxyXG4gICAgICAgIHN3YXRjaGVzTGltaXQgPSA1LFxyXG4gICAgICAgIGltYWdlUmVwbGFjZXJGdW5jID0gbnVsbCxcclxuICAgICAgICBpbmNsdWRlT3B0aW9ucyA9IFtdLFxyXG4gICAgICAgIGRpc3BsYXlJblN0b2NrT25seSA9IGZhbHNlLFxyXG4gICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMgPSB0cnVlLFxyXG4gICAgICAgIGdyYXBoUUxUb2tlbiA9ICcnXHJcbiAgICB9ID0ge30pIHtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHtcclxuICAgICAgICAgICAgY2FyZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICBwcm9kdWN0SWRTZWxlY3RvcixcclxuICAgICAgICAgICAgZmluZFByb2R1Y3RJZEJ5SW1nLFxyXG4gICAgICAgICAgICBzd2F0Y2hlc0NvbnRhaW5lclNlbGVjdG9yLFxyXG4gICAgICAgICAgICBjYXJkSW1hZ2VTZWxlY3RvcixcclxuICAgICAgICAgICAgYWRkVG9DYXJ0Rm9ybVNlbGVjdG9yLFxyXG4gICAgICAgICAgICBwcm9kdWN0Vmlld0ZpbGUsXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcclxuICAgICAgICAgICAgdGVtcGxhdGVDdXN0b21UYWdzLFxyXG4gICAgICAgICAgICBpbWFnZVNpemUsXHJcbiAgICAgICAgICAgIGlucHV0RmluZGVyRnVuYyxcclxuICAgICAgICAgICAgc3dhdGNoZXNMaW1pdCxcclxuICAgICAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXHJcbiAgICAgICAgICAgIGluY2x1ZGVPcHRpb25zOiBpbmNsdWRlT3B0aW9ucy5tYXAocyA9PiBTdHJpbmcocykudHJpbSgpLnRvTG9jYWxlVXBwZXJDYXNlKCkpLFxyXG4gICAgICAgICAgICBkaXNwbGF5SW5TdG9ja09ubHksXHJcbiAgICAgICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXHJcbiAgICAgICAgICAgIGdyYXBoUUxUb2tlbixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcclxuICAgICAgICBpZiAoTXV0YXRpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihkZWJvdW5jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uV2luZG93U2Nyb2xsKCk7XHJcbiAgICAgICAgICAgIH0sIDIwMCkpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1YnRyZWU6IHRydWUsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bmJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubXV0YXRpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgICAgICAgICB0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbldpbmRvd1Njcm9sbCgkYm9keSA9IG51bGwpIHtcclxuICAgICAgICBjb25zdCBjYXJkcyA9IFtdO1xyXG5cclxuICAgICAgICAkKHRoaXMuY29uZmlnLmNhcmRTZWxlY3RvciwgJGJvZHkpLm5vdCgnLnByb2R1Y3RTd2F0Y2hlc0xvYWRlZCcpLmVhY2goKGksIGVsKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzY29wZSA9ICQoZWwpLmFkZENsYXNzKCdwcm9kdWN0U3dhdGNoZXNMb2FkZWQnKTtcclxuICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhKCdwcm9kdWN0U3dhdGNoZXNDYXJkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHByb2R1Y3RJZCA9ICRzY29wZS5kYXRhKCdwcm9kdWN0SWQnKSB8fCAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5wcm9kdWN0SWRTZWxlY3RvcikuZGF0YSgncHJvZHVjdElkJyk7XHJcbiAgICAgICAgICAgIGlmICghcHJvZHVjdElkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0cnkgdG8gZmluZCBwcm9kdWN0IElEIGJ5IGltZyBzcmNcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb25maWcuZmluZFByb2R1Y3RJZEJ5SW1nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvZHVjdElkID0gJHNjb3BlLmZpbmQoJ2ltZycpLmdldCgpLnJlZHVjZSgoaWQsIGltZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBTdHJpbmcoaW1nLnNyYykubWF0Y2goL3Byb2R1Y3RzXFwvKFswLTldKylcXC8vKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbSA/IE51bWJlcihtWzFdKSA6IGlkO1xyXG4gICAgICAgICAgICAgICAgfSwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXByb2R1Y3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgJGF0dHJpYnV0ZXNDb250YWluZXIgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5zd2F0Y2hlc0NvbnRhaW5lclNlbGVjdG9yKTtcclxuICAgICAgICAgICAgaWYgKCRhdHRyaWJ1dGVzQ29udGFpbmVyLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0Vmlld0ZpbGUsXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzVGVtcGxhdGUsXHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUN1c3RvbVRhZ3MsXHJcbiAgICAgICAgICAgICAgICBhZGRUb0NhcnRGb3JtU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dEZpbmRlckZ1bmMsXHJcbiAgICAgICAgICAgICAgICBzd2F0Y2hlc0xpbWl0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcclxuICAgICAgICAgICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBncmFwaFFMVG9rZW4sXHJcbiAgICAgICAgICAgIH0gPSB0aGlzLmNvbmZpZztcclxuXHJcbiAgICAgICAgICAgIGNvbnN0ICRjYXJkSW1hZ2UgPSAkc2NvcGUuZmluZCh0aGlzLmNvbmZpZy5jYXJkSW1hZ2VTZWxlY3RvcikuZmlyc3QoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZCh7XHJcbiAgICAgICAgICAgICAgICAkc2NvcGUsXHJcbiAgICAgICAgICAgICAgICAkYXR0cmlidXRlc0NvbnRhaW5lcixcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RJZCxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RWaWV3RmlsZSxcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXNUZW1wbGF0ZSxcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlQ3VzdG9tVGFncyxcclxuICAgICAgICAgICAgICAgIGFkZFRvQ2FydEZvcm1TZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICRjYXJkSW1hZ2UsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICBpbnB1dEZpbmRlckZ1bmMsXHJcbiAgICAgICAgICAgICAgICBzd2F0Y2hlc0xpbWl0LFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VSZXBsYWNlckZ1bmMsXHJcbiAgICAgICAgICAgICAgICBpbmNsdWRlT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlJblN0b2NrT25seSxcclxuICAgICAgICAgICAgICAgIGF1dG9TZWxlY3RPcHRpb25WYWx1ZXMsXHJcbiAgICAgICAgICAgICAgICBhdXRvSW5pdDogIWdyYXBoUUxUb2tlbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNhcmRzLnB1c2goY2FyZCk7XHJcblxyXG4gICAgICAgICAgICAkc2NvcGUuZGF0YSgncHJvZHVjdFN3YXRjaGVzQ2FyZCcsIGNhcmQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jb25maWcuZ3JhcGhRTFRva2VuICYmIGNhcmRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgaWRzID0gQXJyYXkuZnJvbShuZXcgU2V0KGNhcmRzLm1hcChjYXJkID0+IGNhcmQucHJvZHVjdElkKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmZldGNoR3JhcGhRTFByb2R1Y3RzKGlkcykudGhlbihlZGdlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBlZGdlcy5mb3JFYWNoKGVkZ2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRzLmZpbHRlcihjYXJkID0+IGNhcmQucHJvZHVjdElkID09IGVkZ2Uubm9kZS5lbnRpdHlJZCkuZm9yRWFjaChjYXJkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5ncmFwaFFMTm9kZSA9IGVkZ2Uubm9kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZC5pbml0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZmV0Y2hHcmFwaFFMUHJvZHVjdHMoaWRzKSB7XHJcbiAgICAgICAgbGV0IGVkZ2VzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpZHMubGVuZ3RoOyBpICs9IDUwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF9pZHMgPSBpZHMuc2xpY2UoaSwgaSArIDUwKTtcclxuICAgICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0ICQuYWpheCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvZ3JhcGhxbCcsXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGRhdGE6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cyAoZW50aXR5SWRzOiAke0pTT04uc3RyaW5naWZ5KF9pZHMpfSwgZmlyc3Q6ICR7X2lkcy5sZW5ndGh9KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pblB1cmNoYXNlUXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0T3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gQ2hlY2tib3hPcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkQnlEZWZhdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiBvbiBNdWx0aXBsZUNob2ljZU9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGdlcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudGl0eUlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGVmYXVsdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gU3dhdGNoT3B0aW9uVmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhleENvbG9yc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwod2lkdGg6IDEwMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4gb24gTXVsdGlwbGVDaG9pY2VPcHRpb25WYWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0aGlzLmNvbmZpZy5ncmFwaFFMVG9rZW59YCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4aHJGaWVsZHM6IHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWRnZXMgPSBlZGdlcy5jb25jYXQocmVzcC5kYXRhLnNpdGUucHJvZHVjdHMuZWRnZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZWRnZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RTd2F0Y2hlcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==