(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents();
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;

    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this2 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this2.refreshContent(true);
      } else {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this3 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      _this3.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].hooks.on('product-option-change', function (event, currentTarget) {
      var $changedOption = $(currentTarget);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: err,
            icon: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this4 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getContent(options, function (err, response) {
      _this4.$cartContent.html(response.content);
      _this4.$cartTotals.html(response.totals);
      _this4.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this4.bindEvents();
      _this4.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this4.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this5 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // --------------------------------------------------------------------
    // Giao - supermarket:
    // Fix problem when manually input quality input on the cart page
    // don't update
    // --------------------------------------------------------------------

    $('input[name^="qty-"]').on('change', function (event) {
      var $el = $(event.currentTarget);
      var itemId = $el.attr('name').replace('qty-', '');
      var oldQty = parseInt($el.data('oldValue'), 10);
      var maxQty = parseInt($el.data('quantityMax'), 10);
      var minQty = parseInt($el.data('quantityMin'), 10);
      var minError = $el.data('quantityMinError');
      var maxError = $el.data('quantityMaxError');
      var newQty = parseInt($el.val(), 10);
      event.preventDefault();

      // Does not quality for min/max quantity
      if (newQty < minQty) {
        $el.val(oldQty);
        return alert(minError);
      } else if (newQty > maxQty) {
        $el.val(oldQty);
        return alert(maxError);
      }
      _this5.$overlay.show();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
        _this5.$overlay.hide();
        if (response.data.status === 'succeed') {
          // if the quantity is changed "1" from "0", we have to remove the row.
          var remove = newQty === 0;
          _this5.refreshContent(remove);
        } else {
          $el.val(oldQty);
          alert(response.data.errors.join('\n'));
        }
      });
    }).on('focusin', function (event) {
      var $el = $(event.currentTarget);
      $el.data('oldValue', $el.val());
    });

    // --------------------------------------------------------------------

    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault();
      // edit item in cart
      _this5.cartEditOptions(itemId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this6 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show().focus(); // papathemes-beautify mod
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show().focus(); // papathemes-beautify mod
    });

    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $codeInput.data('error'),
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this6.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: 'This coupon code is invalid or the highest value discount has already been applied',
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this7 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
      $('.gift-certificate-cancel:visible').focus(); // papathemes-beautify
    });

    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
      $('.gift-certificate-add:visible').focus(); // papathemes-beautify
    });

    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_3__["default"])(code)) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
          text: $certInput.data('error'),
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this7.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"].fire({
            text: resp.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this8 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_4__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this8.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_5__["default"]($('[data-shipping-estimator]'));
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");






var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--ups');
      var $estimatorFormDefault = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_1__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_5__["default"].fire({
          text: err,
          icon: 'error'
        });
        throw new Error(err);
      }
      var $field = jquery__WEBPACK_IMPORTED_MODULE_0___default()(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["Validators"].cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimator');
    var $estimatorForm = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-country"]', $estimatorForm).val(),
        state_id: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-state"]', $estimatorForm).val(),
        city: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: jquery__WEBPACK_IMPORTED_MODULE_0___default()('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quotes').html(response.content);

        // bind the select button
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').show().focus();
    });
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-show').show().focus();
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
});

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/each */ "./node_modules/lodash/each.js");
/* harmony import */ var lodash_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/isEmpty */ "./node_modules/lodash/isEmpty.js");
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/transform */ "./node_modules/lodash/transform.js");
/* harmony import */ var lodash_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_transform__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");







/**
 * If there are no options from bcapp, a text field will be sent. This will create a select element to hold options after the remote request.
 * @returns {jQuery|HTMLElement}
 */
function makeStateRequired(stateElement, context) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-select',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<select></select>', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  var $hiddenInput = $('[name*="FormFieldIsText"]');
  if ($hiddenInput.length !== 0) {
    $hiddenInput.remove();
  }
  if ($newElement.prev().find('small').length === 0) {
    // String is injected from localizer
    $newElement.prev().append("<small>" + context.required + "</small>");
  } else {
    $newElement.prev().find('small').show();
  }
  return $newElement;
}

/**
 * If a country with states is the default, a select will be sent,
 * In this case we need to be able to switch to an input field and hide the required field
 */
function makeStateOptional(stateElement) {
  var attrs = lodash_transform__WEBPACK_IMPORTED_MODULE_2___default()(stateElement.prop('attributes'), function (result, item) {
    var ret = result;
    ret[item.name] = item.value;
    return ret;
  });
  var replacementAttributes = {
    type: 'text',
    id: attrs.id,
    'data-label': attrs['data-label'],
    class: 'form-input',
    name: attrs.name,
    'data-field-type': attrs['data-field-type']
  };
  stateElement.replaceWith($('<input />', replacementAttributes));
  var $newElement = $('[data-field-type="State"]');
  if ($newElement.length !== 0) {
    Object(_utils_form_utils__WEBPACK_IMPORTED_MODULE_4__["insertStateHiddenField"])($newElement);
    $newElement.prev().find('small').hide();
  }
  return $newElement;
}

/**
 * Adds the array of options from the remote request to the newly created select box.
 * @param {Object} statesArray
 * @param {jQuery} $selectElement
 * @param {Object} options
 */
function addOptions(statesArray, $selectElement, options) {
  var container = [];
  container.push("<option value=\"\">" + statesArray.prefix + "</option>");
  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()($selectElement)) {
    lodash_each__WEBPACK_IMPORTED_MODULE_0___default()(statesArray.states, function (stateObj) {
      if (options.useIdForStates) {
        container.push("<option value=\"" + stateObj.id + "\">" + stateObj.name + "</option>");
      } else {
        container.push("<option value=\"" + stateObj.name + "\">" + stateObj.name + "</option>");
      }
    });
    $selectElement.html(container.join(' '));
  }
}

/**
 *
 * @param {jQuery} stateElement
 * @param {Object} context
 * @param {Object} options
 * @param {Function} callback
 */
/* harmony default export */ __webpack_exports__["default"] = (function (stateElement, context, options, callback) {
  if (context === void 0) {
    context = {};
  }
  /**
   * Backwards compatible for three parameters instead of four
   *
   * Available options:
   *
   * useIdForStates {Bool} - Generates states dropdown using id for values instead of strings
   */
  if (typeof options === 'function') {
    /* eslint-disable no-param-reassign */
    callback = options;
    options = {};
    /* eslint-enable no-param-reassign */
  }

  $('select[data-field-type="Country"]').on('change', function (event) {
    var countryName = $(event.currentTarget).val();
    // console.log($('select[data-field-type="Country"]').val())

    if (countryName === '') {
      return;
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName(countryName, function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
    });
  });
  if ($('select[data-field-type="Country"]').val() === 'Canada') {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.country.getByName('Canada', function (err, response) {
      if (err) {
        Object(_global_modal__WEBPACK_IMPORTED_MODULE_5__["showAlertModal"])(context.state_error);
        return callback(err);
      }
      var $currentInput = $('[data-field-type="State"]');
      if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(response.data.states)) {
        // The element may have been replaced with a select, reselect it
        var $selectElement = makeStateRequired($currentInput, context);
        addOptions(response.data, $selectElement, options);
        callback(null, $selectElement);
        $('#FormField_12_input').val('Ontario');
      } else {
        var newElement = makeStateOptional($currentInput, context);
        callback(null, newElement);
      }
      console.log($currentInput);
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/bind.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/bind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3N0YXRlLWNvdW50cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVXcmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yZXBsYWNlSG9sZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2JpbmQuanMiXSwibmFtZXMiOlsiQ2FydCIsIm9uUmVhZHkiLCIkY2FydENvbnRlbnQiLCIkIiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0VG90YWxzIiwiJG92ZXJsYXkiLCJoaWRlIiwiYmluZEV2ZW50cyIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiaXRlbUlkIiwiZGF0YSIsIiRlbCIsIm9sZFF0eSIsInBhcnNlSW50IiwidmFsIiwibWF4UXR5IiwibWluUXR5IiwibWluRXJyb3IiLCJtYXhFcnJvciIsIm5ld1F0eSIsInN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93IiwidXRpbHMiLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJlcnJvcnMiLCJqb2luIiwiY2FydFJlbW92ZUl0ZW0iLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwibW9kYWwiLCJkZWZhdWx0TW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJvbiIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsIiRjaGFuZ2VkT3B0aW9uIiwiJGZvcm0iLCJwYXJlbnRzIiwiJHN1Ym1pdCIsIiRtZXNzYWdlQm94IiwiaXRlbSIsImF0dHIiLCJvcHRpb25DaGFuZ2UiLCJzZXJpYWxpemUiLCJyZXN1bHQiLCJwdXJjaGFzaW5nX21lc3NhZ2UiLCJwcm9wIiwicHVyY2hhc2FibGUiLCJpbnN0b2NrIiwiJGNhcnRJdGVtc1Jvd3MiLCIkY2FydFBhZ2VUaXRsZSIsInRvdGFscyIsInBhZ2VUaXRsZSIsInN0YXR1c01lc3NhZ2VzIiwibGVuZ3RoIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJnZXRDb250ZW50IiwiaHRtbCIsInJlcGxhY2VXaXRoIiwicXVhbnRpdHkiLCJ0cmlnZ2VyIiwiYmluZENhcnRFdmVudHMiLCJkZWJvdW5jZVRpbWVvdXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlcGxhY2UiLCJhbGVydCIsInN0cmluZyIsInNob3dDYW5jZWxCdXR0b24iLCJ0aGVuIiwidmFsdWUiLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImZvY3VzIiwiY29kZSIsImFwcGx5Q29kZSIsImJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMiLCIkY2VydENvbnRhaW5lciIsIiRjZXJ0Rm9ybSIsIiRjZXJ0SW5wdXQiLCJ0b2dnbGUiLCJnaWZ0Q2VydENoZWNrIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJmaW5kIiwidG9nZ2xlVmlld3MiLCIkc2luZ2xlRm9ybSIsIiRtdWx0aUZvcm0iLCJzaGlwcGluZ0VzdGltYXRvciIsIlNoaXBwaW5nRXN0aW1hdG9yIiwiUGFnZU1hbmFnZXIiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJOdW1iZXIiLCJpc05hTiIsImVycm9yTWVzc2FnZSIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwiY29udGV4dCIsInVzZUlkRm9yU3RhdGVzIiwiZmllbGQiLCJFcnJvciIsIiRmaWVsZCIsImdldFN0YXR1cyIsImlzIiwiVmFsaWRhdG9ycyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0IiwibWFrZVN0YXRlUmVxdWlyZWQiLCJzdGF0ZUVsZW1lbnQiLCJhdHRycyIsInJldCIsIm5hbWUiLCJyZXBsYWNlbWVudEF0dHJpYnV0ZXMiLCJjbGFzcyIsIiRuZXdFbGVtZW50IiwiJGhpZGRlbklucHV0IiwicHJldiIsImFwcGVuZCIsInJlcXVpcmVkIiwibWFrZVN0YXRlT3B0aW9uYWwiLCJ0eXBlIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsImFkZE9wdGlvbnMiLCJzdGF0ZXNBcnJheSIsIiRzZWxlY3RFbGVtZW50IiwiY29udGFpbmVyIiwicHVzaCIsInByZWZpeCIsInN0YXRlcyIsInN0YXRlT2JqIiwiY2FsbGJhY2siLCJjb3VudHJ5TmFtZSIsImNvdW50cnkiLCJnZXRCeU5hbWUiLCJzaG93QWxlcnRNb2RhbCIsInN0YXRlX2Vycm9yIiwiJGN1cnJlbnRJbnB1dCIsIm5ld0VsZW1lbnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUVzQjtBQUNqQjtBQUNXO0FBQ1o7QUFDTjtBQUFBLElBRW5CQSxJQUFJO0VBQUE7RUFBQTtJQUFBO0VBQUE7RUFBQTtFQUFBLE9BQ3JCQyxPQUFPLEdBQVAsbUJBQVU7SUFDTixJQUFJLENBQUNDLFlBQVksR0FBR0MsQ0FBQyxDQUFDLHFCQUFxQixDQUFDO0lBQzVDLElBQUksQ0FBQ0MsYUFBYSxHQUFHRCxDQUFDLENBQUMsb0JBQW9CLENBQUM7SUFDNUMsSUFBSSxDQUFDRSxXQUFXLEdBQUdGLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUMxQyxJQUFJLENBQUNHLFFBQVEsR0FBR0gsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQzNDSSxJQUFJLEVBQUUsQ0FBQyxDQUFDOztJQUViLElBQUksQ0FBQ0MsVUFBVSxFQUFFO0VBQ3JCLENBQUM7RUFBQSxPQUVEQyxVQUFVLEdBQVYsb0JBQVdDLE9BQU8sRUFBRTtJQUFBO0lBQ2hCLElBQU1DLE1BQU0sR0FBR0QsT0FBTyxDQUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQ3pDLElBQU1DLEdBQUcsR0FBR1YsQ0FBQyxXQUFTUSxNQUFNLENBQUc7SUFDL0IsSUFBTUcsTUFBTSxHQUFHQyxRQUFR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bnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IGdpZnRDZXJ0Q2hlY2sgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBTaGlwcGluZ0VzdGltYXRvciBmcm9tICcuL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcbmltcG9ydCBzd2FsIGZyb20gJy4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLiRjYXJ0Q29udGVudCA9ICQoJ1tkYXRhLWNhcnQtY29udGVudF0nKTtcbiAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzID0gJCgnW2RhdGEtY2FydC1zdGF0dXNdJyk7XG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcbiAgICAgICAgdGhpcy4kb3ZlcmxheSA9ICQoJ1tkYXRhLWNhcnRdIC5sb2FkaW5nT3ZlcmxheScpXG4gICAgICAgICAgICAuaGlkZSgpOyAvLyBUT0RPOiB0ZW1wb3JhcnkgdW50aWwgcm9wZXIgcHVsbHMgaW4gaGlzIGNhcnQgY29tcG9uZW50c1xuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGNhcnRVcGRhdGUoJHRhcmdldCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcGFyc2VJbnQoJGVsLnZhbCgpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1heFF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1heCcpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgIGNvbnN0IG1pbkVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWluRXJyb3InKTtcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xuICAgICAgICBjb25zdCBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIDEgOiBvbGRRdHkgLSAxO1xuXG4gICAgICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQoY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCAkZm9ybSA9ICRjaGFuZ2VkT3B0aW9uLnBhcmVudHMoJ2Zvcm0nKTtcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XG4gICAgICAgICAgICBjb25zdCAkbWVzc2FnZUJveCA9ICQoJy5hbGVydE1lc3NhZ2VCb3gnKTtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSAkKCdbbmFtZT1cIml0ZW1faWRcIl0nLCAkZm9ybSkuYXR0cigndmFsdWUnKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLm9wdGlvbkNoYW5nZShpdGVtLCAkZm9ybS5zZXJpYWxpemUoKSwgKGVyciwgcmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHJlc3VsdC5kYXRhIHx8IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICRtZXNzYWdlQm94LnNob3coKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFkYXRhLnB1cmNoYXNhYmxlIHx8ICFkYXRhLmluc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZnJlc2hDb250ZW50KHJlbW92ZSkge1xuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcbiAgICAgICAgY29uc3QgJGNhcnRQYWdlVGl0bGUgPSAkKCdbZGF0YS1jYXJ0LXBhZ2UtdGl0bGVdJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICdjYXJ0L2NvbnRlbnQnLFxuICAgICAgICAgICAgICAgIHRvdGFsczogJ2NhcnQvdG90YWxzJyxcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxuICAgICAgICAgICAgICAgIHN0YXR1c01lc3NhZ2VzOiAnY2FydC9zdGF0dXMtbWVzc2FnZXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgICAgICAvLyBSZW1vdmUgbGFzdCBpdGVtIGZyb20gY2FydD8gUmVsb2FkXG4gICAgICAgIGlmIChyZW1vdmUgJiYgJGNhcnRJdGVtc1Jvd3MubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kY2FydENvbnRlbnQuaHRtbChyZXNwb25zZS5jb250ZW50KTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRUb3RhbHMuaHRtbChyZXNwb25zZS50b3RhbHMpO1xuICAgICAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzLmh0bWwocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZXMpO1xuXG4gICAgICAgICAgICAkY2FydFBhZ2VUaXRsZS5yZXBsYWNlV2l0aChyZXNwb25zZS5wYWdlVGl0bGUpO1xuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcblxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignY2FydC1xdWFudGl0eS11cGRhdGUnLCBxdWFudGl0eSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xuICAgICAgICBjb25zdCBkZWJvdW5jZVRpbWVvdXQgPSA0MDA7XG4gICAgICAgIGNvbnN0IGNhcnRVcGRhdGUgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGUsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuICAgICAgICBjb25zdCBjYXJ0UmVtb3ZlSXRlbSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFJlbW92ZUl0ZW0sIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xuXG4gICAgICAgIC8vIGNhcnQgdXBkYXRlXG4gICAgICAgICQoJ1tkYXRhLWNhcnQtdXBkYXRlXScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIGNhcnQgcXVhbnRpdHlcbiAgICAgICAgICAgIGNhcnRVcGRhdGUoJHRhcmdldCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIC8vIEdpYW8gLSBzdXBlcm1hcmtldDpcbiAgICAgICAgLy8gRml4IHByb2JsZW0gd2hlbiBtYW51YWxseSBpbnB1dCBxdWFsaXR5IGlucHV0IG9uIHRoZSBjYXJ0IHBhZ2VcbiAgICAgICAgLy8gZG9uJ3QgdXBkYXRlXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgICAgICAgJCgnaW5wdXRbbmFtZV49XCJxdHktXCJdJykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlbCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkZWwuYXR0cignbmFtZScpLnJlcGxhY2UoJ3F0eS0nLCAnJyk7XG4gICAgICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgnb2xkVmFsdWUnKSwgMTApO1xuICAgICAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XG4gICAgICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgICAgICAgICBjb25zdCBuZXdRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxuICAgICAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWxlcnQobWluRXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFsZXJ0KG1heEVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgICAgICBhbGVydChyZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLm9uKCdmb2N1c2luJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgJGVsLmRhdGEoJ29sZFZhbHVlJywgJGVsLnZhbCgpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAgICAgICAkKCcuY2FydC1yZW1vdmUnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm1EZWxldGUnKTtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGljb246ICd3YXJuaW5nJyxcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbSBmcm9tIGNhcnRcbiAgICAgICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZWRpdF0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtRWRpdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gZWRpdCBpdGVtIGluIGNhcnRcbiAgICAgICAgICAgIHRoaXMuY2FydEVkaXRPcHRpb25zKGl0ZW1JZCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Db250YWluZXIgPSAkKCcuY291cG9uLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNvdXBvbkZvcm0gPSAkKCcuY291cG9uLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtYWRkJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS5oaWRlKCk7XG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5zaG93KCkuZm9jdXMoKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBtb2RcbiAgICAgICAgICAgICRjb2RlSW5wdXQudHJpZ2dlcignZm9jdXMnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRjb3Vwb25Db250YWluZXIuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLmhpZGUoKTtcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCkuZm9jdXMoKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeSBtb2RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUNvZGUoY29kZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdUaGlzIGNvdXBvbiBjb2RlIGlzIGludmFsaWQgb3IgdGhlIGhpZ2hlc3QgdmFsdWUgZGlzY291bnQgaGFzIGFscmVhZHkgYmVlbiBhcHBsaWVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcbiAgICAgICAgY29uc3QgJGNlcnRGb3JtID0gJCgnLmNhcnQtZ2lmdC1jZXJ0aWZpY2F0ZS1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjZXJ0SW5wdXQgPSAkKCdbbmFtZT1cImNlcnRjb2RlXCJdJywgJGNlcnRGb3JtKTtcblxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWw6dmlzaWJsZScpLmZvY3VzKCk7IC8vIHBhcGF0aGVtZXMtYmVhdXRpZnlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZDp2aXNpYmxlJykuZm9jdXMoKTsgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICB9KTtcblxuICAgICAgICAkY2VydEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY2VydElucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoIWdpZnRDZXJ0Q2hlY2soY29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNlcnRJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3AuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3AuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcbiAgICAgICAgY29uc3QgbW9kYWwgPSBkZWZhdWx0TW9kYWwoKTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUdpZnR3cmFwJyk7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIG1vZGFsLm9wZW4oKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0Jykub24oJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRzZWxlY3QgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAkc2VsZWN0LmRhdGEoJ2luZGV4Jyk7XG5cbiAgICAgICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGFsbG93TWVzc2FnZSA9ICRzZWxlY3QuZmluZChgb3B0aW9uW3ZhbHVlPSR7aWR9XWApLmRhdGEoJ2FsbG93TWVzc2FnZScpO1xuXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fS0ke2lkfWApLnNob3coKTtcblxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLnNob3coKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLnRyaWdnZXIoJ2NoYW5nZScpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkKCdpbnB1dDpyYWRpb1tuYW1lID1cImdpZnR3cmFwdHlwZVwiXTpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICBjb25zdCAkc2luZ2xlRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctc2luZ2xlJyk7XG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgPT09ICdzYW1lJykge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCgnW25hbWU9XCJnaWZ0d3JhcHR5cGVcIl0nKS5vbignY2xpY2snLCB0b2dnbGVWaWV3cyk7XG5cbiAgICAgICAgdG9nZ2xlVmlld3MoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLmJpbmRDYXJ0RXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzKCk7XG5cbiAgICAgICAgLy8gaW5pdGlhdGUgc2hpcHBpbmcgZXN0aW1hdG9yIG1vZHVsZVxuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gbmV3IFNoaXBwaW5nRXN0aW1hdG9yKCQoJ1tkYXRhLXNoaXBwaW5nLWVzdGltYXRvcl0nKSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdFc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnQ291bnRyeVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5nZXRTdGF0dXModGhpcy4kc3RhdGUpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kU3RhdGVWYWxpZGF0aW9uKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRmaWVsZC5hdHRyKCdwbGFjZWhvbGRlcicsICdTdGF0ZS9wcm92aW5jZScpO1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFdoZW4geW91IGNoYW5nZSBhIGNvdW50cnksIHlvdSBzd2FwIHRoZSBzdGF0ZS9wcm92aW5jZSBiZXR3ZWVuIGFuIGlucHV0IGFuZCBhIHNlbGVjdCBkcm9wZG93blxuICAgICAgICAgICAgLy8gTm90IGFsbCBjb3VudHJpZXMgcmVxdWlyZSB0aGUgcHJvdmluY2UgdG8gYmUgZmlsbGVkXG4gICAgICAgICAgICAvLyBXZSBoYXZlIHRvIHJlbW92ZSB0aGlzIGNsYXNzIHdoZW4gd2Ugc3dhcCBzaW5jZSBub2QgdmFsaWRhdGlvbiBkb2Vzbid0IGNsZWFudXAgZm9yIHVzXG4gICAgICAgICAgICAkKHRoaXMuc2hpcHBpbmdFc3RpbWF0b3IpLmZpbmQoJy5mb3JtLWZpZWxkLS1zdWNjZXNzJykucmVtb3ZlQ2xhc3MoJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZEVzdGltYXRvckV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckNvbnRhaW5lciA9ICQoJy5zaGlwcGluZy1lc3RpbWF0b3InKTtcbiAgICAgICAgY29uc3QgJGVzdGltYXRvckZvcm0gPSAkKCcuZXN0aW1hdG9yLWZvcm0nKTtcblxuICAgICAgICAkZXN0aW1hdG9yRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvdW50cnlfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9pZDogJCgnW25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgICAgICBjaXR5OiAkKCdbbmFtZT1cInNoaXBwaW5nLWNpdHlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgemlwX2NvZGU6ICQoJ1tuYW1lPVwic2hpcHBpbmctemlwXCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0U2hpcHBpbmdRdW90ZXMocGFyYW1zLCAnY2FydC9zaGlwcGluZy1xdW90ZXMnLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICQoJy5zaGlwcGluZy1xdW90ZXMnKS5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gYmluZCB0aGUgc2VsZWN0IGJ1dHRvblxuICAgICAgICAgICAgICAgICQoJy5zZWxlY3Qtc2hpcHBpbmctcXVvdGUnKS5vbignY2xpY2snLCBjbGlja0V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVvdGVJZCA9ICQoJy5zaGlwcGluZy1xdW90ZTpjaGVja2VkJykudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpY2tFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LnN1Ym1pdFNoaXBwaW5nUXVvdGUocXVvdGVJZCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc2hvdycpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLWhpZGUnKS5zaG93KCkuZm9jdXMoKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1zaG93Jykuc2hvdygpLmZvY3VzKCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHsgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XHJcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi4vZ2xvYmFsL21vZGFsJztcclxuXHJcbi8qKlxyXG4gKiBJZiB0aGVyZSBhcmUgbm8gb3B0aW9ucyBmcm9tIGJjYXBwLCBhIHRleHQgZmllbGQgd2lsbCBiZSBzZW50LiBUaGlzIHdpbGwgY3JlYXRlIGEgc2VsZWN0IGVsZW1lbnQgdG8gaG9sZCBvcHRpb25zIGFmdGVyIHRoZSByZW1vdGUgcmVxdWVzdC5cclxuICogQHJldHVybnMge2pRdWVyeXxIVE1MRWxlbWVudH1cclxuICovXHJcbmZ1bmN0aW9uIG1ha2VTdGF0ZVJlcXVpcmVkKHN0YXRlRWxlbWVudCwgY29udGV4dCkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuICAgICAgICByZXR1cm4gcmV0O1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVwbGFjZW1lbnRBdHRyaWJ1dGVzID0ge1xyXG4gICAgICAgIGlkOiBhdHRycy5pZCxcclxuICAgICAgICAnZGF0YS1sYWJlbCc6IGF0dHJzWydkYXRhLWxhYmVsJ10sXHJcbiAgICAgICAgY2xhc3M6ICdmb3JtLXNlbGVjdCcsXHJcbiAgICAgICAgbmFtZTogYXR0cnMubmFtZSxcclxuICAgICAgICAnZGF0YS1maWVsZC10eXBlJzogYXR0cnNbJ2RhdGEtZmllbGQtdHlwZSddLFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0ZUVsZW1lbnQucmVwbGFjZVdpdGgoJCgnPHNlbGVjdD48L3NlbGVjdD4nLCByZXBsYWNlbWVudEF0dHJpYnV0ZXMpKTtcclxuXHJcbiAgICBjb25zdCAkbmV3RWxlbWVudCA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xyXG4gICAgY29uc3QgJGhpZGRlbklucHV0ID0gJCgnW25hbWUqPVwiRm9ybUZpZWxkSXNUZXh0XCJdJyk7XHJcblxyXG4gICAgaWYgKCRoaWRkZW5JbnB1dC5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAkaGlkZGVuSW5wdXQucmVtb3ZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vIFN0cmluZyBpcyBpbmplY3RlZCBmcm9tIGxvY2FsaXplclxyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5hcHBlbmQoYDxzbWFsbD4ke2NvbnRleHQucmVxdWlyZWR9PC9zbWFsbD5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJG5ld0VsZW1lbnQucHJldigpLmZpbmQoJ3NtYWxsJykuc2hvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkbmV3RWxlbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIElmIGEgY291bnRyeSB3aXRoIHN0YXRlcyBpcyB0aGUgZGVmYXVsdCwgYSBzZWxlY3Qgd2lsbCBiZSBzZW50LFxyXG4gKiBJbiB0aGlzIGNhc2Ugd2UgbmVlZCB0byBiZSBhYmxlIHRvIHN3aXRjaCB0byBhbiBpbnB1dCBmaWVsZCBhbmQgaGlkZSB0aGUgcmVxdWlyZWQgZmllbGRcclxuICovXHJcbmZ1bmN0aW9uIG1ha2VTdGF0ZU9wdGlvbmFsKHN0YXRlRWxlbWVudCkge1xyXG4gICAgY29uc3QgYXR0cnMgPSBfLnRyYW5zZm9ybShzdGF0ZUVsZW1lbnQucHJvcCgnYXR0cmlidXRlcycpLCAocmVzdWx0LCBpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldFtpdGVtLm5hbWVdID0gaXRlbS52YWx1ZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHJlcGxhY2VtZW50QXR0cmlidXRlcyA9IHtcclxuICAgICAgICB0eXBlOiAndGV4dCcsXHJcbiAgICAgICAgaWQ6IGF0dHJzLmlkLFxyXG4gICAgICAgICdkYXRhLWxhYmVsJzogYXR0cnNbJ2RhdGEtbGFiZWwnXSxcclxuICAgICAgICBjbGFzczogJ2Zvcm0taW5wdXQnLFxyXG4gICAgICAgIG5hbWU6IGF0dHJzLm5hbWUsXHJcbiAgICAgICAgJ2RhdGEtZmllbGQtdHlwZSc6IGF0dHJzWydkYXRhLWZpZWxkLXR5cGUnXSxcclxuICAgIH07XHJcblxyXG4gICAgc3RhdGVFbGVtZW50LnJlcGxhY2VXaXRoKCQoJzxpbnB1dCAvPicsIHJlcGxhY2VtZW50QXR0cmlidXRlcykpO1xyXG5cclxuICAgIGNvbnN0ICRuZXdFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgaWYgKCRuZXdFbGVtZW50Lmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICRuZXdFbGVtZW50LnByZXYoKS5maW5kKCdzbWFsbCcpLmhpZGUoKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJG5ld0VsZW1lbnQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBZGRzIHRoZSBhcnJheSBvZiBvcHRpb25zIGZyb20gdGhlIHJlbW90ZSByZXF1ZXN0IHRvIHRoZSBuZXdseSBjcmVhdGVkIHNlbGVjdCBib3guXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdGF0ZXNBcnJheVxyXG4gKiBAcGFyYW0ge2pRdWVyeX0gJHNlbGVjdEVsZW1lbnRcclxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcclxuICovXHJcbmZ1bmN0aW9uIGFkZE9wdGlvbnMoc3RhdGVzQXJyYXksICRzZWxlY3RFbGVtZW50LCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBbXTtcclxuXHJcbiAgICBjb250YWluZXIucHVzaChgPG9wdGlvbiB2YWx1ZT1cIlwiPiR7c3RhdGVzQXJyYXkucHJlZml4fTwvb3B0aW9uPmApO1xyXG5cclxuICAgIGlmICghXy5pc0VtcHR5KCRzZWxlY3RFbGVtZW50KSkge1xyXG4gICAgICAgIF8uZWFjaChzdGF0ZXNBcnJheS5zdGF0ZXMsIChzdGF0ZU9iaikgPT4ge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy51c2VJZEZvclN0YXRlcykge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnB1c2goYDxvcHRpb24gdmFsdWU9XCIke3N0YXRlT2JqLmlkfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGA8b3B0aW9uIHZhbHVlPVwiJHtzdGF0ZU9iai5uYW1lfVwiPiR7c3RhdGVPYmoubmFtZX08L29wdGlvbj5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkc2VsZWN0RWxlbWVudC5odG1sKGNvbnRhaW5lci5qb2luKCcgJykpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtqUXVlcnl9IHN0YXRlRWxlbWVudFxyXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dFxyXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlRWxlbWVudCwgY29udGV4dCA9IHt9LCBvcHRpb25zLCBjYWxsYmFjaykge1xyXG4gICAgLyoqXHJcbiAgICAgKiBCYWNrd2FyZHMgY29tcGF0aWJsZSBmb3IgdGhyZWUgcGFyYW1ldGVycyBpbnN0ZWFkIG9mIGZvdXJcclxuICAgICAqXHJcbiAgICAgKiBBdmFpbGFibGUgb3B0aW9uczpcclxuICAgICAqXHJcbiAgICAgKiB1c2VJZEZvclN0YXRlcyB7Qm9vbH0gLSBHZW5lcmF0ZXMgc3RhdGVzIGRyb3Bkb3duIHVzaW5nIGlkIGZvciB2YWx1ZXMgaW5zdGVhZCBvZiBzdHJpbmdzXHJcbiAgICAgKi9cclxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbiAgICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xyXG4gICAgICAgIG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXHJcbiAgICB9XHJcblxyXG4gICAgJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNvdW50cnlOYW1lID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS52YWwoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygkKCdzZWxlY3RbZGF0YS1maWVsZC10eXBlPVwiQ291bnRyeVwiXScpLnZhbCgpKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjb3VudHJ5TmFtZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1dGlscy5hcGkuY291bnRyeS5nZXRCeU5hbWUoY291bnRyeU5hbWUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuICAgIGlmICggJCgnc2VsZWN0W2RhdGEtZmllbGQtdHlwZT1cIkNvdW50cnlcIl0nKS52YWwoKSA9PT0gJ0NhbmFkYScpIHtcclxuICAgICAgICB1dGlscy5hcGkuY291bnRyeS5nZXRCeU5hbWUoJ0NhbmFkYScsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKGNvbnRleHQuc3RhdGVfZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCAkY3VycmVudElucHV0ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIV8uaXNFbXB0eShyZXNwb25zZS5kYXRhLnN0YXRlcykpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gcmVwbGFjZWQgd2l0aCBhIHNlbGVjdCwgcmVzZWxlY3QgaXRcclxuICAgICAgICAgICAgICAgIGNvbnN0ICRzZWxlY3RFbGVtZW50ID0gbWFrZVN0YXRlUmVxdWlyZWQoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgYWRkT3B0aW9ucyhyZXNwb25zZS5kYXRhLCAkc2VsZWN0RWxlbWVudCwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsLCAkc2VsZWN0RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjRm9ybUZpZWxkXzEyX2lucHV0JykudmFsKCdPbnRhcmlvJylcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0gbWFrZVN0YXRlT3B0aW9uYWwoJGN1cnJlbnRJbnB1dCwgY29udGV4dCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coJGN1cnJlbnRJbnB1dClcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwidmFyIGJhc2VDcmVhdGUgPSByZXF1aXJlKCcuL19iYXNlQ3JlYXRlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcHJvZHVjZXMgYW4gaW5zdGFuY2Ugb2YgYEN0b3JgIHJlZ2FyZGxlc3Mgb2ZcbiAqIHdoZXRoZXIgaXQgd2FzIGludm9rZWQgYXMgcGFydCBvZiBhIGBuZXdgIGV4cHJlc3Npb24gb3IgYnkgYGNhbGxgIG9yIGBhcHBseWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IEN0b3IgVGhlIGNvbnN0cnVjdG9yIHRvIHdyYXAuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyB3cmFwcGVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVDdG9yKEN0b3IpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIC8vIFVzZSBhIGBzd2l0Y2hgIHN0YXRlbWVudCB0byB3b3JrIHdpdGggY2xhc3MgY29uc3RydWN0b3JzLiBTZWVcbiAgICAvLyBodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWZ1bmN0aW9uLW9iamVjdHMtY2FsbC10aGlzYXJndW1lbnQtYXJndW1lbnRzbGlzdFxuICAgIC8vIGZvciBtb3JlIGRldGFpbHMuXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEN0b3I7XG4gICAgICBjYXNlIDE6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdKTtcbiAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICBjYXNlIDQ6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIGNhc2UgNTogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0pO1xuICAgICAgY2FzZSA2OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSwgYXJnc1s1XSk7XG4gICAgICBjYXNlIDc6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdLCBhcmdzWzZdKTtcbiAgICB9XG4gICAgdmFyIHRoaXNCaW5kaW5nID0gYmFzZUNyZWF0ZShDdG9yLnByb3RvdHlwZSksXG4gICAgICAgIHJlc3VsdCA9IEN0b3IuYXBwbHkodGhpc0JpbmRpbmcsIGFyZ3MpO1xuXG4gICAgLy8gTWltaWMgdGhlIGNvbnN0cnVjdG9yJ3MgYHJldHVybmAgYmVoYXZpb3IuXG4gICAgLy8gU2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDEzLjIuMiBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogdGhpc0JpbmRpbmc7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQ3RvcjtcbiIsInZhciBhcHBseSA9IHJlcXVpcmUoJy4vX2FwcGx5JyksXG4gICAgY3JlYXRlQ3RvciA9IHJlcXVpcmUoJy4vX2NyZWF0ZUN0b3InKSxcbiAgICByb290ID0gcmVxdWlyZSgnLi9fcm9vdCcpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBmdW5jdGlvbiBtZXRhZGF0YS4gKi9cbnZhciBXUkFQX0JJTkRfRkxBRyA9IDE7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgd3JhcHMgYGZ1bmNgIHRvIGludm9rZSBpdCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZ1xuICogb2YgYHRoaXNBcmdgIGFuZCBgcGFydGlhbHNgIHByZXBlbmRlZCB0byB0aGUgYXJndW1lbnRzIGl0IHJlY2VpdmVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtudW1iZXJ9IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuIFNlZSBgY3JlYXRlV3JhcGAgZm9yIG1vcmUgZGV0YWlscy5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gcGFydGlhbHMgVGhlIGFyZ3VtZW50cyB0byBwcmVwZW5kIHRvIHRob3NlIHByb3ZpZGVkIHRvXG4gKiAgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpYWwoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMpIHtcbiAgdmFyIGlzQmluZCA9IGJpdG1hc2sgJiBXUkFQX0JJTkRfRkxBRyxcbiAgICAgIEN0b3IgPSBjcmVhdGVDdG9yKGZ1bmMpO1xuXG4gIGZ1bmN0aW9uIHdyYXBwZXIoKSB7XG4gICAgdmFyIGFyZ3NJbmRleCA9IC0xLFxuICAgICAgICBhcmdzTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgbGVmdEluZGV4ID0gLTEsXG4gICAgICAgIGxlZnRMZW5ndGggPSBwYXJ0aWFscy5sZW5ndGgsXG4gICAgICAgIGFyZ3MgPSBBcnJheShsZWZ0TGVuZ3RoICsgYXJnc0xlbmd0aCksXG4gICAgICAgIGZuID0gKHRoaXMgJiYgdGhpcyAhPT0gcm9vdCAmJiB0aGlzIGluc3RhbmNlb2Ygd3JhcHBlcikgPyBDdG9yIDogZnVuYztcblxuICAgIHdoaWxlICgrK2xlZnRJbmRleCA8IGxlZnRMZW5ndGgpIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4XSA9IHBhcnRpYWxzW2xlZnRJbmRleF07XG4gICAgfVxuICAgIHdoaWxlIChhcmdzTGVuZ3RoLS0pIHtcbiAgICAgIGFyZ3NbbGVmdEluZGV4KytdID0gYXJndW1lbnRzWysrYXJnc0luZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIGFwcGx5KGZuLCBpc0JpbmQgPyB0aGlzQXJnIDogdGhpcywgYXJncyk7XG4gIH1cbiAgcmV0dXJuIHdyYXBwZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlUGFydGlhbDtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRpbWVzKDIsIF8ubm9vcCk7XG4gKiAvLyA9PiBbdW5kZWZpbmVkLCB1bmRlZmluZWRdXG4gKi9cbmZ1bmN0aW9uIG5vb3AoKSB7XG4gIC8vIE5vIG9wZXJhdGlvbiBwZXJmb3JtZWQuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbm9vcDtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBhIG5ldyBlbXB0eSBhcnJheS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMTMuMFxuICogQGNhdGVnb3J5IFV0aWxcbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGVtcHR5IGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgYXJyYXlzID0gXy50aW1lcygyLCBfLnN0dWJBcnJheSk7XG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzKTtcbiAqIC8vID0+IFtbXSwgW11dXG4gKlxuICogY29uc29sZS5sb2coYXJyYXlzWzBdID09PSBhcnJheXNbMV0pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gc3R1YkFycmF5KCkge1xuICByZXR1cm4gW107XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R1YkFycmF5O1xuIiwidmFyIGJhc2VSZXN0ID0gcmVxdWlyZSgnLi9fYmFzZVJlc3QnKSxcbiAgICBjcmVhdGVXcmFwID0gcmVxdWlyZSgnLi9fY3JlYXRlV3JhcCcpLFxuICAgIGdldEhvbGRlciA9IHJlcXVpcmUoJy4vX2dldEhvbGRlcicpLFxuICAgIHJlcGxhY2VIb2xkZXJzID0gcmVxdWlyZSgnLi9fcmVwbGFjZUhvbGRlcnMnKTtcblxuLyoqIFVzZWQgdG8gY29tcG9zZSBiaXRtYXNrcyBmb3IgZnVuY3Rpb24gbWV0YWRhdGEuICovXG52YXIgV1JBUF9CSU5EX0ZMQUcgPSAxLFxuICAgIFdSQVBfUEFSVElBTF9GTEFHID0gMzI7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaW52b2tlcyBgZnVuY2Agd2l0aCB0aGUgYHRoaXNgIGJpbmRpbmcgb2YgYHRoaXNBcmdgXG4gKiBhbmQgYHBhcnRpYWxzYCBwcmVwZW5kZWQgdG8gdGhlIGFyZ3VtZW50cyBpdCByZWNlaXZlcy5cbiAqXG4gKiBUaGUgYF8uYmluZC5wbGFjZWhvbGRlcmAgdmFsdWUsIHdoaWNoIGRlZmF1bHRzIHRvIGBfYCBpbiBtb25vbGl0aGljIGJ1aWxkcyxcbiAqIG1heSBiZSB1c2VkIGFzIGEgcGxhY2Vob2xkZXIgZm9yIHBhcnRpYWxseSBhcHBsaWVkIGFyZ3VtZW50cy5cbiAqXG4gKiAqKk5vdGU6KiogVW5saWtlIG5hdGl2ZSBgRnVuY3Rpb24jYmluZGAsIHRoaXMgbWV0aG9kIGRvZXNuJ3Qgc2V0IHRoZSBcImxlbmd0aFwiXG4gKiBwcm9wZXJ0eSBvZiBib3VuZCBmdW5jdGlvbnMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBiaW5kLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0gey4uLip9IFtwYXJ0aWFsc10gVGhlIGFyZ3VtZW50cyB0byBiZSBwYXJ0aWFsbHkgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJvdW5kIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBncmVldChncmVldGluZywgcHVuY3R1YXRpb24pIHtcbiAqICAgcmV0dXJuIGdyZWV0aW5nICsgJyAnICsgdGhpcy51c2VyICsgcHVuY3R1YXRpb247XG4gKiB9XG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiB2YXIgYm91bmQgPSBfLmJpbmQoZ3JlZXQsIG9iamVjdCwgJ2hpJyk7XG4gKiBib3VuZCgnIScpO1xuICogLy8gPT4gJ2hpIGZyZWQhJ1xuICpcbiAqIC8vIEJvdW5kIHdpdGggcGxhY2Vob2xkZXJzLlxuICogdmFyIGJvdW5kID0gXy5iaW5kKGdyZWV0LCBvYmplY3QsIF8sICchJyk7XG4gKiBib3VuZCgnaGknKTtcbiAqIC8vID0+ICdoaSBmcmVkISdcbiAqL1xudmFyIGJpbmQgPSBiYXNlUmVzdChmdW5jdGlvbihmdW5jLCB0aGlzQXJnLCBwYXJ0aWFscykge1xuICB2YXIgYml0bWFzayA9IFdSQVBfQklORF9GTEFHO1xuICBpZiAocGFydGlhbHMubGVuZ3RoKSB7XG4gICAgdmFyIGhvbGRlcnMgPSByZXBsYWNlSG9sZGVycyhwYXJ0aWFscywgZ2V0SG9sZGVyKGJpbmQpKTtcbiAgICBiaXRtYXNrIHw9IFdSQVBfUEFSVElBTF9GTEFHO1xuICB9XG4gIHJldHVybiBjcmVhdGVXcmFwKGZ1bmMsIGJpdG1hc2ssIHRoaXNBcmcsIHBhcnRpYWxzLCBob2xkZXJzKTtcbn0pO1xuXG4vLyBBc3NpZ24gZGVmYXVsdCBwbGFjZWhvbGRlcnMuXG5iaW5kLnBsYWNlaG9sZGVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=