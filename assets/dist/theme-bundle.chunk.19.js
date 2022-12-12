(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");


function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









// Supermarket Mod
// import compareProducts from './global/compare-products';

var Account = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Account, _PageManager);
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = Object(_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_8__["createTranslationDictionary"])(context);
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');

    // Supermarket Mod
    // compareProducts(this.context.urls);
    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var _this3 = this;
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm, this.context);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field, _this3.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this4 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm, this.context);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field, _this4.validationDictionary.field_not_blank);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["creditCardType"])(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_9__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this4.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_9__["storeInstrument"])(_this4.context, data, function () {
          window.location.href = _this4.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_10__["default"].fire({
            text: _this4.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm, this.context);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti = this.validationDictionary,
        enterPassword = _this$validationDicti.password,
        matchPassword = _this$validationDicti.password_match,
        invalidPassword = _this$validationDicti.invalid_password;
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["createPasswordValidationErrorTextObject"])(enterPassword, enterPassword, matchPassword, invalidPassword), true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["announceInputErrorMessage"]
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_1___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vcGF5bWVudC1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3dpc2hsaXN0LmpzIl0sIm5hbWVzIjpbInNpbmdsZXRvbiIsImNvbXBhcmVMaXN0VG1wbCIsImNvbXBhcmVMaXN0SXRlbVRtcGwiLCJDb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwiYW5pbWF0aW9uVGltZSIsIiRib2R5IiwiJCIsInByb2R1Y3RzIiwibG9hZFByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSIsIiRzY29wZSIsIk11c3RhY2hlIiwicmVuZGVyIiwiY29tcGFyZSIsImNvbXBhcmVBZGRvbkxhbmdfY29tcGFyZSIsImNsZWFyX2FsbCIsImNvbXBhcmVBZGRvbkxhbmdfY2xlYXJfYWxsIiwicmVuZGVySXRlbXMiLCJtYXAiLCJwcm9kdWN0IiwicmVuZGVySXRlbSIsImpvaW4iLCJsZW5ndGgiLCJhZGRDbGFzcyIsImhpZGUiLCJyZW1vdmVDbGFzcyIsInNob3ciLCJhcHBlbmQiLCIkcHJvZHVjdExpc3QiLCJmaW5kIiwiJGNvbXBhcmVCdXR0b24iLCJ1cGRhdGVDb21wYXJlVXJsIiwiYmluZEV2ZW50cyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsInMiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZSIsInNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIiRlbCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIk51bWJlciIsImRhdGEiLCJmaWx0ZXIiLCJpdGVtIiwiYWRkUHJvZHVjdCIsImltYWdlIiwiYWx0IiwicmVtb3ZlUHJvZHVjdCIsInRvZ2dsZUNsYXNzIiwiY2xlYXJBbGxQcm9kdWN0cyIsInB1c2giLCJmYWRlSW4iLCJmYWRlT3V0IiwicmVtb3ZlIiwicGF0aCIsImF0dHIiLCJ1cmxzIiwicXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcXVpY2tfdmlldyIsImNvbXBhcmVBZGRvbkxhbmdfcmVtb3ZlIiwiY29tcGFyZVByb2R1Y3RzIiwiQWNjb3VudCIsInZhbGlkYXRpb25EaWN0aW9uYXJ5IiwiY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IiwiJHN0YXRlIiwib25SZWFkeSIsIiRlZGl0QWNjb3VudEZvcm0iLCJjbGFzc2lmeUZvcm0iLCIkYWRkcmVzc0Zvcm0iLCIkaW5ib3hGb3JtIiwiJGFjY291bnRSZXR1cm5Gb3JtIiwiJHBheW1lbnRNZXRob2RGb3JtIiwiJHJlb3JkZXJGb3JtIiwiJGludm9pY2VCdXR0b24iLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsIldpc2hsaXN0IiwibG9hZCIsInJlZ2lzdGVyRWRpdEFjY291bnRWYWxpZGF0aW9uIiwiaXMiLCJpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkIiwibGVmdCIsInNjcmVlbiIsImF2YWlsV2lkdGgiLCJ0b3AiLCJhdmFpbEhlaWdodCIsInVybCIsIm9wZW4iLCJpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uIiwicmVnaXN0ZXJJbmJveFZhbGlkYXRpb24iLCJpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uIiwiaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbiIsImluaXRSZW9yZGVyRm9ybSIsImJpbmREZWxldGVBZGRyZXNzIiwiYmluZERlbGV0ZVBheW1lbnRNZXRob2QiLCJtZXNzYWdlIiwiY29uZmlybSIsIiRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMiLCJzdWJtaXRGb3JtIiwiZWFjaCIsImluZGV4IiwicHJvZHVjdENoZWNrYm94IiwicHJvZHVjdElkIiwidmFsIiwiJGlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsInN3YWwiLCJmaXJlIiwidGV4dCIsInNlbGVjdEl0ZW0iLCJpY29uIiwidmFsaWRhdGlvbk1vZGVsIiwidmFsaWRhdGlvbiIsInN0YXRlU2VsZWN0b3IiLCIkc3RhdGVFbGVtZW50IiwiYWRkcmVzc1ZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsInRhcCIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJhZGQiLCIkbGFzdCIsInN0YXRlQ291bnRyeSIsImVyciIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJWYWxpZGF0b3JzIiwic2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbiIsImZpZWxkX25vdF9ibGFuayIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJlcnJvck1lc3NhZ2UiLCJmb3JtU3VibWl0IiwiaSIsImVsZSIsInBhcnNlSW50IiwiZmlyc3ROYW1lTGFiZWwiLCJsYXN0TmFtZUxhYmVsIiwiY29tcGFueUxhYmVsIiwicGhvbmVMYWJlbCIsImFkZHJlc3MxTGFiZWwiLCJhZGRyZXNzMkxhYmVsIiwiY2l0eUxhYmVsIiwiY291bnRyeUxhYmVsIiwiY2hvb3NlQ291bnRyeUxhYmVsIiwic3RhdGVMYWJlbCIsInBvc3RhbENvZGVMYWJlbCIsInBheW1lbnRNZXRob2RTZWxlY3RvciIsInBheW1lbnRNZXRob2RWYWxpZGF0b3IiLCJjYXJkVHlwZSIsInRhcmdldCIsImNyZWRpdENhcmRUeXBlIiwic2libGluZ3MiLCJjc3MiLCJDQ1ZhbGlkYXRvcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2IiwiQ0NGb3JtYXR0ZXJzIiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJzZXJpYWxpemVBcnJheSIsIm9iaiIsInJlZk9iaiIsImNvdW50cnkiLCJjb3VudHJpZXMiLCJzdGF0ZSIsInN0YXRlcyIsImNvdW50cnlfY29kZSIsImNvZGUiLCJzdGF0ZV9vcl9wcm92aW5jZV9jb2RlIiwiZGVmYXVsdF9pbnN0cnVtZW50Iiwic3RvcmVJbnN0cnVtZW50IiwibG9jYXRpb24iLCJocmVmIiwicGF5bWVudE1ldGhvZHNVcmwiLCJnZW5lcmljX2Vycm9yIiwiZm9ybUVkaXRTZWxlY3RvciIsImVkaXRWYWxpZGF0b3IiLCJlbWFpbFNlbGVjdG9yIiwiJGVtYWlsRWxlbWVudCIsInBhc3N3b3JkU2VsZWN0b3IiLCIkcGFzc3dvcmRFbGVtZW50IiwicGFzc3dvcmQyU2VsZWN0b3IiLCIkcGFzc3dvcmQyRWxlbWVudCIsImN1cnJlbnRQYXNzd29yZFNlbGVjdG9yIiwiJGN1cnJlbnRQYXNzd29yZCIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiZW50ZXJQYXNzd29yZCIsInBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwiaW52YWxpZFBhc3N3b3JkIiwiaW52YWxpZF9wYXNzd29yZCIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInJlc3VsdCIsImN1cnJlbnRQYXNzd29yZCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiaW5ib3hWYWxpZGF0b3IiLCJlbnRlck9yZGVyTnVtIiwiZW50ZXJTdWJqZWN0IiwiZW50ZXJNZXNzYWdlIiwiUGFnZU1hbmFnZXIiLCJvbWl0TnVsbFN0cmluZyIsImtleSIsImNyZWRpdGNhcmRzIiwiY2FyZCIsImRvbmUiLCJmYWlsIiwicGF5bWVudHNVcmwiLCJzaG9wcGVySWQiLCJzdG9yZUhhc2giLCJ2YXVsdFRva2VuIiwicHJvdmlkZXJfaWQiLCJjdXJyZW5jeV9jb2RlIiwiY3JlZGl0X2NhcmRfbnVtYmVyIiwibmFtZV9vbl9jYXJkIiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsImNpdHkiLCJwb3N0YWxfY29kZSIsImNvbXBhbnkiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwiZW1haWwiLCJwaG9uZSIsImV4cGlyeSIsInNwbGl0IiwiYWpheCIsImRhdGFUeXBlIiwibWV0aG9kIiwiY2FjaGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIkFjY2VwdCIsImluc3RydW1lbnQiLCJjYXJkaG9sZGVyX25hbWUiLCJudW1iZXIiLCJleHBpcnlfbW9udGgiLCJtb250aCIsImV4cGlyeV95ZWFyIiwieWVhciIsInZlcmlmaWNhdGlvbl92YWx1ZSIsImJpbGxpbmdfYWRkcmVzcyIsIkZvcm1hdHRlcnMiLCJyZWZUYXJnZXQiLCJmb3JtYXQiLCJ3aGljaCIsInRlc3QiLCJzbGljZSIsInJlcGxhY2UiLCJ2YWxpZGF0b3IiLCJpc1ZhbGlkIiwiaXNQYXN0IiwiY3ZjIiwiV2lzaExpc3QiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJ3aXNobGlzdERlbGV0ZUNvbmZpcm0iLCJjb25maXJtZWQiLCJ3aXNobGlzdERlbGV0ZSIsInJlZ2lzdGVyQWRkV2lzaExpc3RWYWxpZGF0aW9uIiwiJGFkZFdpc2hsaXN0Rm9ybSIsImFkZFdpc2hsaXN0VmFsaWRhdG9yIiwiJGFkZFdpc2hMaXN0Rm9ybSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ2hDLElBQUlBLFNBQVM7QUFFYixJQUFNQyxlQUFlLG1uQ0FjcEI7QUFFRCxJQUFNQyxtQkFBbUIsb21CQU14QjtBQUFDLElBRUlDLGVBQWU7RUFDakIseUJBQVlDLE9BQU8sRUFBRTtJQUFBO0lBQ2pCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsYUFBYSxHQUFHLEdBQUc7SUFDeEIsSUFBSSxDQUFDQyxLQUFLLEdBQUdDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFFdEIsSUFB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Z0IsR0FBR3pSLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUU1QyxJQUFJeVIsZ0JBQWdCLENBQUMxUSxNQUFNLEVBQUU7TUFDekIsSUFBSSxDQUFDdVEsNkJBQTZCLENBQUNHLGdCQUFnQixDQUFDO0lBQ3hEO0lBRUEsSUFBSSxDQUFDTixxQkFBcUIsRUFBRTtFQUNoQyxDQUFDO0VBQUE7QUFBQSxFQTlEaUN4RCxxREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTXVzdGFjaGUgZnJvbSAnbXVzdGFjaGUnO1xubGV0IHNpbmdsZXRvbjtcblxuY29uc3QgY29tcGFyZUxpc3RUbXBsID0gYFxuICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1wYW5lbC13cmFwcGVyIGlzLWVtcHR5XCIgaWQ9XCJzdXBlcm1hcmtldENvbXBhcmVMaXN0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1wYW5lbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LXBhbmVsLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3RcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1saXN0Pnt7e3JlbmRlckl0ZW1zfX19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInt7Y29tcGFyZV91cmx9fVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBidXR0b24tLXNtYWxsIGJ1dHRvbi0tY29tcGFyZVwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LWJ1dHRvbj57e2NvbXBhcmV9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wbGFpbiBidXR0b24tLXNtYWxsIGJ1dHRvbi0tY2xlYXJBbGxcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1jbGVhcmFsbD57e2NsZWFyX2FsbH19PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tY2xvc2VcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC10b2dnbGU+PGkgY2xhc3M9XCJmYSBmYS1jaGV2cm9uLWRvd25cIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5DbG9zZTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tb3BlblwiIGRhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZT48aSBjbGFzcz1cImZhIGZhLWNoZXZyb24tdXBcIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj5PcGVuPC9zcGFuPjwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG5cbmNvbnN0IGNvbXBhcmVMaXN0SXRlbVRtcGwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInN1cGVybWFya2V0LWNvbXBhcmVMaXN0LWl0ZW1cIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1pdGVtPVwie3tpZH19XCI+XG4gICAgICAgIDxpbWcgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1pbWdcIiBzcmM9XCJ7e2ltYWdlfX1cIiBhbHQ9XCJ7e2FsdH19XCIgdGl0bGU9XCJ7e2FsdH19XCI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic3VwZXJtYXJrZXQtY29tcGFyZUxpc3QtcXVpY2t2aWV3IHF1aWNrdmlld1wiIGRhdGEtcHJvZHVjdC1pZD1cInt7aWR9fVwiPjxpIGNsYXNzPVwiZmEgZmEtc2VhcmNoLXBsdXNcIj48L2k+PHNwYW4gY2xhc3M9XCJpcy1zck9ubHlcIj57e3F1aWNrX3ZpZXd9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzdXBlcm1hcmtldC1jb21wYXJlTGlzdC1yZW1vdmVcIiBkYXRhLWNvbXBhcmUtcHJvZHVjdC1yZW1vdmU9XCJ7e2lkfX1cIj48aSBjbGFzcz1cImZhIGZhLXRyYXNoXCI+PC9pPjxzcGFuIGNsYXNzPVwiaXMtc3JPbmx5XCI+e3tyZW1vdmV9fTwvc3Bhbj48L2J1dHRvbj5cbiAgICA8L2Rpdj5cbmA7XG5cbmNsYXNzIENvbXBhcmVQcm9kdWN0cyB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWUgPSAzMDA7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgdGhpcy5wcm9kdWN0cyA9IHRoaXMubG9hZFByb2R1Y3RzRnJvbUxvY2FsU3RvcmFnZSgpIHx8IFtdO1xuXG4gICAgICAgIHRoaXMuJHNjb3BlID0gJChNdXN0YWNoZS5yZW5kZXIoY29tcGFyZUxpc3RUbXBsLCB7XG4gICAgICAgICAgICBjb21wYXJlOiBjb250ZXh0LmNvbXBhcmVBZGRvbkxhbmdfY29tcGFyZSxcbiAgICAgICAgICAgIGNsZWFyX2FsbDogY29udGV4dC5jb21wYXJlQWRkb25MYW5nX2NsZWFyX2FsbCxcbiAgICAgICAgICAgIHJlbmRlckl0ZW1zOiAoKSA9PiB0aGlzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHRoaXMucmVuZGVySXRlbShwcm9kdWN0KSkuam9pbignJyksXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLmFkZENsYXNzKCdpcy1lbXB0eScpLmhpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1lbXB0eScpLnNob3coKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJGJvZHkuYXBwZW5kKHRoaXMuJHNjb3BlKTtcblxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdCA9IHRoaXMuJHNjb3BlLmZpbmQoJ1tkYXRhLWNvbXBhcmUtcHJvZHVjdC1saXN0XScpO1xuICAgICAgICB0aGlzLiRjb21wYXJlQnV0dG9uID0gdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LWJ1dHRvbl0nKTtcblxuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBsb2FkUHJvZHVjdHNGcm9tTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb21wYXJlUHJvZHVjdHMnKTtcbiAgICAgICAgaWYgKHMpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2Uocyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCkge1xuICAgICAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbXBhcmVQcm9kdWN0cycsIEpTT04uc3RyaW5naWZ5KHRoaXMucHJvZHVjdHMpKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjbGljaycsICdbZGF0YS1jb21wYXJlLWlkXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCAkZWwgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaWQgPSBOdW1iZXIoJGVsLmRhdGEoJ2NvbXBhcmVJZCcpKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZHVjdHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gaWQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkUHJvZHVjdCh7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiAkZWwuZGF0YSgnY29tcGFyZUltYWdlJyksXG4gICAgICAgICAgICAgICAgICAgIGFsdDogJGVsLmRhdGEoJ2NvbXBhcmVUaXRsZScpLFxuICAgICAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kc2NvcGUucmVtb3ZlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1wcm9kdWN0LXJlbW92ZV0nLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgJGVsID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gTnVtYmVyKCRlbC5kYXRhKCdjb21wYXJlUHJvZHVjdFJlbW92ZScpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUHJvZHVjdChpZCk7XG5cbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnJlbW92ZUNsYXNzKCdpcy1jbG9zZWQnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kc2NvcGUuZmluZCgnW2RhdGEtY29tcGFyZS1wcm9kdWN0LXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy4kc2NvcGUudG9nZ2xlQ2xhc3MoJ2lzLWNsb3NlZCcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtY2xlYXJhbGxdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJBbGxQcm9kdWN0cygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGRQcm9kdWN0KHByb2R1Y3QpIHtcbiAgICAgICAgdGhpcy5wcm9kdWN0cy5wdXNoKHByb2R1Y3QpO1xuICAgICAgICB0aGlzLnNhdmVQcm9kdWN0c1RvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlQ29tcGFyZVVybCgpO1xuXG4gICAgICAgIGNvbnN0ICRlbCA9ICQodGhpcy5yZW5kZXJJdGVtKHByb2R1Y3QpKS5oaWRlKCk7XG5cbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3QuYXBwZW5kKCRlbCk7XG5cbiAgICAgICAgJGVsLnNob3codGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5yZW1vdmVDbGFzcygnaXMtZW1wdHknKS5mYWRlSW4odGhpcy5hbmltYXRpb25UaW1lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlUHJvZHVjdChpZCkge1xuICAgICAgICB0aGlzLnByb2R1Y3RzID0gdGhpcy5wcm9kdWN0cy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBpZCk7XG4gICAgICAgIHRoaXMuc2F2ZVByb2R1Y3RzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVDb21wYXJlVXJsKCk7XG5cbiAgICAgICAgY29uc3QgJGVsID0gdGhpcy4kc2NvcGUuZmluZChgW2RhdGEtY29tcGFyZS1wcm9kdWN0LWl0ZW09JHtpZH1dYCk7XG4gICAgICAgICRlbC5mYWRlT3V0KHRoaXMuYW5pbWF0aW9uVGltZSwgKCkgPT4ge1xuICAgICAgICAgICAgJGVsLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5wcm9kdWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaXMtZW1wdHknKS5mYWRlT3V0KHRoaXMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyQWxsUHJvZHVjdHMoKSB7XG4gICAgICAgIHRoaXMucHJvZHVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5zYXZlUHJvZHVjdHNUb0xvY2FsU3RvcmFnZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUNvbXBhcmVVcmwoKTtcblxuICAgICAgICBjb25zdCAkZWwgPSB0aGlzLiRzY29wZS5maW5kKCdbZGF0YS1jb21wYXJlLXByb2R1Y3QtaXRlbV0nKTtcbiAgICAgICAgJGVsLmZhZGVPdXQodGhpcy5hbmltYXRpb25UaW1lLCAoKSA9PiB7XG4gICAgICAgICAgICAkZWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5hZGRDbGFzcygnaXMtZW1wdHknKS5mYWRlT3V0KHRoaXMuYW5pbWF0aW9uVGltZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUNvbXBhcmVVcmwoKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHByb2R1Y3QuaWQpLmpvaW4oJy8nKTtcbiAgICAgICAgdGhpcy4kY29tcGFyZUJ1dHRvbi5hdHRyKCdocmVmJywgYCR7dGhpcy5jb250ZXh0LnVybHMuY29tcGFyZX0vJHtwYXRofWApO1xuICAgIH1cblxuICAgIHJlbmRlckl0ZW0oaXRlbSkge1xuICAgICAgICByZXR1cm4gTXVzdGFjaGUucmVuZGVyKGNvbXBhcmVMaXN0SXRlbVRtcGwsIHtcbiAgICAgICAgICAgIC4uLml0ZW0sXG4gICAgICAgICAgICBxdWlja192aWV3OiB0aGlzLmNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19xdWlja192aWV3LFxuICAgICAgICAgICAgcmVtb3ZlOiB0aGlzLmNvbnRleHQuY29tcGFyZUFkZG9uTGFuZ19yZW1vdmUsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZVByb2R1Y3RzKGNvbnRleHQpIHtcbiAgICBpZiAoIXNpbmdsZXRvbikge1xuICAgICAgICBzaW5nbGV0b24gPSBuZXcgQ29tcGFyZVByb2R1Y3RzKGNvbnRleHQpO1xuICAgIH1cbiAgICByZXR1cm4gc2luZ2xldG9uO1xufVxuIiwiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4uL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQge1xuICAgIGNsYXNzaWZ5Rm9ybSxcbiAgICBWYWxpZGF0b3JzLFxuICAgIGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCxcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXG59IGZyb20gJy4vY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHsgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5IH0gZnJvbSAnLi9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcbmltcG9ydCBzd2FsIGZyb20gJy4vZ2xvYmFsL3N3ZWV0LWFsZXJ0Jztcbi8vIFN1cGVybWFya2V0IE1vZFxuLy8gaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScpO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbnN0ICRlZGl0QWNjb3VudEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1lZGl0LWFjY291bnQtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFkZHJlc3NGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtYWRkcmVzcy1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW5ib3hGb3JtID0gY2xhc3NpZnlGb3JtKCdmb3JtW2RhdGEtaW5ib3gtZm9ybV0nKTtcbiAgICAgICAgY29uc3QgJGFjY291bnRSZXR1cm5Gb3JtID0gY2xhc3NpZnlGb3JtKCdbZGF0YS1hY2NvdW50LXJldHVybi1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcGF5bWVudE1ldGhvZEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkcmVvcmRlckZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmVvcmRlci1mb3JtXScpO1xuICAgICAgICBjb25zdCAkaW52b2ljZUJ1dHRvbiA9ICQoJ1tkYXRhLXByaW50LWludm9pY2VdJyk7XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXQgTW9kXG4gICAgICAgIC8vIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIC8vIEluamVjdGVkIHZpYSB0ZW1wbGF0ZVxuICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzID0gdGhpcy5jb250ZXh0LnBhc3N3b3JkUmVxdWlyZW1lbnRzO1xuXG4gICAgICAgIC8vIEluc3RhbnRpYXRlcyB3aXNoIGxpc3QgSlNcbiAgICAgICAgV2lzaGxpc3QubG9hZCh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkZWRpdEFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKTtcbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbnZvaWNlQnV0dG9uLmxlbmd0aCkge1xuICAgICAgICAgICAgJGludm9pY2VCdXR0b24ub24oJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxlZnQgPSB3aW5kb3cuc2NyZWVuLmF2YWlsV2lkdGggLyAyIC0gNDUwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvcCA9IHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLyAyIC0gMzIwO1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9ICRpbnZvaWNlQnV0dG9uLmRhdGEoJ3ByaW50SW52b2ljZScpO1xuXG4gICAgICAgICAgICAgICAgd2luZG93Lm9wZW4odXJsLCAnb3JkZXJJbnZvaWNlJywgYHdpZHRoPTkwMCxoZWlnaHQ9NjUwLGxlZnQ9JHtsZWZ0fSx0b3A9JHt0b3B9LHNjcm9sbGJhcnM9MWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGFkZHJlc3NGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5pbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLiRzdGF0ZS5pcygnaW5wdXQnKSkge1xuICAgICAgICAgICAgICAgIGluc2VydFN0YXRlSGlkZGVuRmllbGQodGhpcy4kc3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRpbmJveEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhY2NvdW50UmV0dXJuRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFjY291bnRSZXR1cm5Gb3JtVmFsaWRhdGlvbigkYWNjb3VudFJldHVybkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwYXltZW50TWV0aG9kRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRyZW9yZGVyRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmREZWxldGVBZGRyZXNzKCk7XG4gICAgICAgIHRoaXMuYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCaW5kcyBhIHN1Ym1pdCBob29rIHRvIGVuc3VyZSB0aGUgY3VzdG9tZXIgcmVjZWl2ZXMgYSBjb25maXJtYXRpb24gZGlhbG9nIGJlZm9yZSBkZWxldGluZyBhbiBhZGRyZXNzXG4gICAgICovXG4gICAgYmluZERlbGV0ZUFkZHJlc3MoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1hZGRyZXNzXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVBZGRyZXNzJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCgpIHtcbiAgICAgICAgJCgnW2RhdGEtZGVsZXRlLXBheW1lbnQtbWV0aG9kXScpLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdkZWxldGVQYXltZW50TWV0aG9kJyk7XG5cbiAgICAgICAgICAgIGlmICghd2luZG93LmNvbmZpcm0obWVzc2FnZSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UmVvcmRlckZvcm0oJHJlb3JkZXJGb3JtKSB7XG4gICAgICAgICRyZW9yZGVyRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcyA9ICQoJy5hY2NvdW50LWxpc3RJdGVtIC5mb3JtLWNoZWNrYm94OmNoZWNrZWQnKTtcbiAgICAgICAgICAgIGxldCBzdWJtaXRGb3JtID0gZmFsc2U7XG5cbiAgICAgICAgICAgICRyZW9yZGVyRm9ybS5maW5kKCdbbmFtZV49XCJyZW9yZGVyaXRlbVwiXScpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzLmVhY2goKGluZGV4LCBwcm9kdWN0Q2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSAkKHByb2R1Y3RDaGVja2JveCkudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgnPGlucHV0PicsIHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGByZW9yZGVyaXRlbVske3Byb2R1Y3RJZH1dYCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICcxJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHN1Ym1pdEZvcm0gPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgJHJlb3JkZXJGb3JtLmFwcGVuZCgkaW5wdXQpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICghc3VibWl0Rm9ybSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LnNlbGVjdEl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24oJGFkZHJlc3NGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGFkZHJlc3NGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBzdGF0ZVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIFtkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXSc7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKHN0YXRlU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBhZGRyZXNzVmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xuXG4gICAgICAgIGlmICgkc3RhdGVFbGVtZW50KSB7XG4gICAgICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJHN0YXRlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLnNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24oYWRkcmVzc1ZhbGlkYXRvciwgZmllbGQsIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkuZmllbGRfbm90X2JsYW5rKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgJGFkZHJlc3NGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoYWRkcmVzc1ZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKSB7XG4gICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9ICRhY2NvdW50UmV0dXJuRm9ybS5kYXRhKCdhY2NvdW50UmV0dXJuRm9ybUVycm9yJyk7XG5cbiAgICAgICAgJGFjY291bnRSZXR1cm5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgZm9ybVN1Ym1pdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHVudGlsIHdlIGZpbmQgYSBub24temVybyB2YWx1ZSBpbiB0aGUgZHJvcGRvd24gZm9yIHF1YW50aXR5XG4gICAgICAgICAgICAkKCdbbmFtZV49XCJyZXR1cm5fcXR5XCJdJywgJGFjY291bnRSZXR1cm5Gb3JtKS5lYWNoKChpLCBlbGUpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoJChlbGUpLnZhbCgpLCAxMCkgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybVN1Ym1pdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXhpdCBvdXQgb2YgbG9vcCBpZiB3ZSBmb3VuZCBhdCBsZWFzdCBvbmUgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoZm9ybVN1Ym1pdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSkge1xuICAgICAgICAvLyBJbmplY3QgdmFsaWRhdGlvbnMgaW50byBmb3JtIGZpZWxkcyBiZWZvcmUgdmFsaWRhdGlvbiBydW5zXG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjZmlyc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuZmlyc3ROYW1lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjbGFzdF9uYW1lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5sYXN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvbXBhbnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmNvbXBhbnlMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcGhvbmUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBob25lTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MxLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2FkZHJlc3MyLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5hZGRyZXNzMkxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjaXR5LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jaXR5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY291bnRyeS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlc2VsZWN0XCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb3VudHJ5TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgcHJlZml4OiBcIiR7dGhpcy5jb250ZXh0LmNob29zZUNvdW50cnlMYWJlbH1cIiB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjc3RhdGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnN0YXRlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjcG9zdGFsX2NvZGUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LnBvc3RhbENvZGVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcblxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRwYXltZW50TWV0aG9kRm9ybSwgdGhpcy5jb250ZXh0KTtcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1wYXltZW50LW1ldGhvZC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IHBheW1lbnRNZXRob2RWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcblxuICAgICAgICBsZXQgJGxhc3Q7XG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LmZpZWxkX25vdF9ibGFuayk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFVzZSBjcmVkaXQgY2FyZCBudW1iZXIgaW5wdXQgbGlzdGVuZXIgdG8gaGlnaGxpZ2h0IGNyZWRpdCBjYXJkIHR5cGVcbiAgICAgICAgbGV0IGNhcmRUeXBlO1xuICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICBjYXJkVHlwZSA9IGNyZWRpdENhcmRUeXBlKHRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoY2FyZFR5cGUpIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nW2FsdD1cIiR7Y2FyZFR5cGV9XCJdYCkuc2libGluZ3MoKS5jc3MoJ29wYWNpdHknLCAnLjInKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGltZ2ApLmNzcygnb3BhY2l0eScsICcxJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFNldCBvZiBjcmVkaXQgY2FyZCB2YWxpZGF0aW9uXG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gLCB0aGlzLmNvbnRleHQuY3JlZGl0Q2FyZE51bWJlcik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRFeHBpcmF0aW9uVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCwgdGhpcy5jb250ZXh0LmV4cGlyYXRpb24pO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb24ocGF5bWVudE1ldGhvZFZhbGlkYXRvciwgYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwibmFtZV9vbl9jYXJkXCJdYCwgdGhpcy5jb250ZXh0Lm5hbWVPbkNhcmQpO1xuICAgICAgICBDQ1ZhbGlkYXRvcnMuc2V0Q3Z2VmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjdnZcIl1gLCB0aGlzLmNvbnRleHQuY3Z2LCAoKSA9PiBjYXJkVHlwZSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIGZvcm1hdFxuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjcmVkaXRfY2FyZF9udW1iZXJcIl1gKTtcbiAgICAgICAgQ0NGb3JtYXR0ZXJzLnNldEV4cGlyYXRpb25Gb3JtYXQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiZXhwaXJhdGlvblwiXWApO1xuXG4gICAgICAgIC8vIEJpbGxpbmcgYWRkcmVzcyB2YWxpZGF0aW9uXG4gICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgLy8gUGVyZm9ybSBmaW5hbCBmb3JtIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHBheW1lbnRNZXRob2RWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICBpZiAocGF5bWVudE1ldGhvZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICAvLyBTZXJpYWxpemUgZm9ybSBkYXRhIGFuZCByZWR1Y2UgaXQgdG8gb2JqZWN0XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IF8ucmVkdWNlKCRwYXltZW50TWV0aG9kRm9ybS5zZXJpYWxpemVBcnJheSgpLCAob2JqLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZk9iaiA9IG9iajtcbiAgICAgICAgICAgICAgICAgICAgcmVmT2JqW2l0ZW0ubmFtZV0gPSBpdGVtLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVmT2JqO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcblxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiBjb3VudHJ5IGFuZCBzdGF0ZSBjb2RlXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnRyeSA9IF8uZmluZCh0aGlzLmNvbnRleHQuY291bnRyaWVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5jb3VudHJ5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGNvdW50cnkgJiYgXy5maW5kKGNvdW50cnkuc3RhdGVzLCAoeyB2YWx1ZSB9KSA9PiB2YWx1ZSA9PT0gZGF0YS5zdGF0ZSk7XG4gICAgICAgICAgICAgICAgZGF0YS5jb3VudHJ5X2NvZGUgPSBjb3VudHJ5ID8gY291bnRyeS5jb2RlIDogZGF0YS5jb3VudHJ5O1xuICAgICAgICAgICAgICAgIGRhdGEuc3RhdGVfb3JfcHJvdmluY2VfY29kZSA9IHN0YXRlID8gc3RhdGUuY29kZSA6IGRhdGEuc3RhdGU7XG5cbiAgICAgICAgICAgICAgICAvLyBEZWZhdWx0IEluc3RydW1lbnRcbiAgICAgICAgICAgICAgICBkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudCA9ICEhZGF0YS5kZWZhdWx0X2luc3RydW1lbnQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSBjcmVkaXQgY2FyZFxuICAgICAgICAgICAgICAgIHN0b3JlSW5zdHJ1bWVudCh0aGlzLmNvbnRleHQsIGRhdGEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmNvbnRleHQucGF5bWVudE1ldGhvZHNVcmw7XG4gICAgICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb250ZXh0LmdlbmVyaWNfZXJyb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRlZGl0QWNjb3VudEZvcm0sIHRoaXMuY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGZvcm1FZGl0U2VsZWN0b3IgPSAnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ29uZmlybVBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJGN1cnJlbnRQYXNzd29yZCA9ICQoY3VycmVudFBhc3N3b3JkU2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3RvciwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS52YWxpZF9lbWFpbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQsIGludmFsaWRfcGFzc3dvcmQ6IGludmFsaWRQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmQyU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICAgICAgZWRpdFZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICAgICAgY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0KGVudGVyUGFzc3dvcmQsIGVudGVyUGFzc3dvcmQsIG1hdGNoUGFzc3dvcmQsIGludmFsaWRQYXNzd29yZCksXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGN1cnJlbnRQYXNzd29yZCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBjdXJyZW50UGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gJycgJiYgJHBhc3N3b3JkRWxlbWVudC52YWwoKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmN1cnJlbnRQYXNzd29yZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZWRpdFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2ZpcnN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZmlyc3ROYW1lLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUVkaXRTZWxlY3Rvcn0gaW5wdXRbbmFtZT0nYWNjb3VudF9sYXN0bmFtZSddYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQubGFzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkZWRpdEFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoZWRpdFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVySW5ib3hWYWxpZGF0aW9uKCRpbmJveEZvcm0pIHtcbiAgICAgICAgY29uc3QgaW5ib3hWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICAgICAgdGFwOiBhbm5vdW5jZUlucHV0RXJyb3JNZXNzYWdlLFxuICAgICAgICB9KTtcblxuICAgICAgICBpbmJveFZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHNlbGVjdFtuYW1lPVwibWVzc2FnZV9vcmRlcl9pZFwiXScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IE51bWJlcih2YWwpICE9PSAwO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck9yZGVyTnVtLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSBpbnB1dFtuYW1lPVwibWVzc2FnZV9zdWJqZWN0XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJTdWJqZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXSB0ZXh0YXJlYVtuYW1lPVwibWVzc2FnZV9jb250ZW50XCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJNZXNzYWdlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGluYm94Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaW5ib3hWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChpbmJveFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgY3JlZGl0Y2FyZHMgZnJvbSAnY3JlZGl0Y2FyZHMnO1xuXG4vKipcbiAqIE9taXQgbnVsbCBvciBlbXB0eSBzdHJpbmcgcHJvcGVydGllcyBvZiBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmNvbnN0IG9taXROdWxsU3RyaW5nID0gb2JqID0+IHtcbiAgICBjb25zdCByZWZPYmogPSBvYmo7XG5cbiAgICAkLmVhY2gocmVmT2JqLCAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09ICcnKSB7XG4gICAgICAgICAgICBkZWxldGUgcmVmT2JqW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZWZPYmo7XG59O1xuXG4vKipcbiAqIEdldCBjcmVkaXQgY2FyZCB0eXBlIGZyb20gY3JlZGl0IGNhcmQgbnVtYmVyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWRpdENhcmRUeXBlID0gdmFsdWUgPT4gY3JlZGl0Y2FyZHMuY2FyZC50eXBlKGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodmFsdWUpLCB0cnVlKTtcblxuLyoqXG4gKiBXcmFwcGVyIGZvciBhamF4IHJlcXVlc3QgdG8gc3RvcmUgYSBuZXcgaW5zdHJ1bWVudCBpbiBiaWdwYXlcbiAqIEBwYXJhbSB7b2JqZWN0fSBSZXByZXNlbnRpbmcgdGhlIGRhdGEgbmVlZGVkIGZvciB0aGUgaGVhZGVyXG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGJvZHlcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRvbmUgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZhaWwgRnVuY3Rpb24gdG8gZXhlY3V0ZSBvbiBhIHVuc3VjY2Vzc2Z1bCByZXNwb25zZVxuICovXG5leHBvcnQgY29uc3Qgc3RvcmVJbnN0cnVtZW50ID0gKHtcbiAgICAvLyBIb3N0bmFtZSwgSWRzICYgVG9rZW5cbiAgICBwYXltZW50c1VybCxcbiAgICBzaG9wcGVySWQsXG4gICAgc3RvcmVIYXNoLFxuICAgIHZhdWx0VG9rZW4sXG59LCB7XG4gICAgLyogZXNsaW50LWRpc2FibGUgKi9cbiAgICAvLyBQcm92aWRlciBJbmZvXG4gICAgcHJvdmlkZXJfaWQsXG4gICAgY3VycmVuY3lfY29kZSxcblxuICAgIC8vIEluc3RydW1lbnQgRGV0YWlsc1xuICAgIGNyZWRpdF9jYXJkX251bWJlcixcbiAgICBleHBpcmF0aW9uLFxuICAgIG5hbWVfb25fY2FyZCxcbiAgICBjdnYsXG4gICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuXG4gICAgLy8gQmlsbGluZyBBZGRyZXNzXG4gICAgYWRkcmVzczEsXG4gICAgYWRkcmVzczIsXG4gICAgY2l0eSxcbiAgICBwb3N0YWxfY29kZSxcbiAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgIGNvdW50cnlfY29kZSxcbiAgICBjb21wYW55LFxuICAgIGZpcnN0X25hbWUsXG4gICAgbGFzdF9uYW1lLFxuICAgIGVtYWlsLFxuICAgIHBob25lLFxuICAgIC8qIGVzbGludC1lbmFibGUgKi9cbn0sIGRvbmUsIGZhaWwpID0+IHtcbiAgICBjb25zdCBleHBpcnkgPSBleHBpcmF0aW9uLnNwbGl0KCcvJyk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6IGAke3BheW1lbnRzVXJsfS9zdG9yZXMvJHtzdG9yZUhhc2h9L2N1c3RvbWVycy8ke3Nob3BwZXJJZH0vc3RvcmVkX2luc3RydW1lbnRzYCxcbiAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdmF1bHRUb2tlbixcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vdm5kLmJjLnYxK2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBpbnN0cnVtZW50OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2NhcmQnLFxuICAgICAgICAgICAgICAgIGNhcmRob2xkZXJfbmFtZTogbmFtZV9vbl9jYXJkLFxuICAgICAgICAgICAgICAgIG51bWJlcjogY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZShjcmVkaXRfY2FyZF9udW1iZXIpLFxuICAgICAgICAgICAgICAgIGV4cGlyeV9tb250aDogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLFxuICAgICAgICAgICAgICAgIGV4cGlyeV95ZWFyOiBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSxcbiAgICAgICAgICAgICAgICB2ZXJpZmljYXRpb25fdmFsdWU6IGN2dixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3M6IG9taXROdWxsU3RyaW5nKHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzMSxcbiAgICAgICAgICAgICAgICBhZGRyZXNzMixcbiAgICAgICAgICAgICAgICBjaXR5LFxuICAgICAgICAgICAgICAgIHBvc3RhbF9jb2RlLFxuICAgICAgICAgICAgICAgIHN0YXRlX29yX3Byb3ZpbmNlX2NvZGUsXG4gICAgICAgICAgICAgICAgY291bnRyeV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvbXBhbnksXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvbmUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIHByb3ZpZGVyX2lkLFxuICAgICAgICAgICAgZGVmYXVsdF9pbnN0cnVtZW50LFxuICAgICAgICAgICAgY3VycmVuY3lfY29kZSxcbiAgICAgICAgfSksXG4gICAgfSlcbiAgICAgICAgLmRvbmUoZG9uZSlcbiAgICAgICAgLmZhaWwoZmFpbCk7XG59O1xuXG5leHBvcnQgY29uc3QgRm9ybWF0dGVycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gY3JlZGl0Y2FyZHMuY2FyZC5mb3JtYXQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh0YXJnZXQudmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBmb3JtYXQgZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldEV4cGlyYXRpb25Gb3JtYXQ6IGZpZWxkID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICAkKGZpZWxkKS5vbigna2V5dXAnLCAoeyB0YXJnZXQsIHdoaWNoIH0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZWZUYXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgICAgICAgICAgaWYgKHdoaWNoID09PSA4ICYmIC8uKihcXC8pJC8udGVzdCh0YXJnZXQudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IHRhcmdldC52YWx1ZS5zbGljZSgwLCAtMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQudmFsdWUubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgNSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aGljaCAhPT0gOCkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFsxLTldXFwvfFsyLTldKSQvZywgJzAkMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkkL2csICckMS8nKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzAtMV0pKFszLTldKSQvZywgJzAkMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXigwWzEtOV18MVswLTJdKShbMC05XXsyfSkkL2csICckMS8kMicpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMF0rKVxcL3xbMF0rJC9nLCAnMCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvW15cXGRcXC9dfF5bXFwvXSokL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcLy9nLCAnLycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjcmVkaXQgY2FyZCBudW1iZXJcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmNhcmQuaXNWYWxpZChjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgZXhwaXJhdGlvbiBkYXRlXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXhwaXJ5ID0gdmFsLnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIC9eKDBbMS05XXwxWzAtMl0pXFwvKFswLTldezJ9KSQvLnRlc3QodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICYmICFjcmVkaXRjYXJkcy5leHBpcmF0aW9uLmlzUGFzdChjcmVkaXRjYXJkcy5leHBpcmF0aW9uLm1vbnRoLnBhcnNlKGV4cGlyeVswXSksIGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ueWVhci5wYXJzZShleHBpcnlbMV0sIHRydWUpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIG5hbWUgb24gY2FyZFxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0TmFtZU9uQ2FyZFZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9ICEhdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGN2dlxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICogQHBhcmFtIHthbnl9IGNhcmRUeXBlIFRoZSBjcmVkaXQgY2FyZCBudW1iZXIgdHlwZVxuICAgICAqL1xuICAgIHNldEN2dlZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UsIGNhcmRUeXBlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0eXBlID0gdHlwZW9mIGNhcmRUeXBlID09PSAnZnVuY3Rpb24nID8gY2FyZFR5cGUoKSA6IGNhcmRUeXBlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoICYmIGNyZWRpdGNhcmRzLmN2Yy5pc1ZhbGlkKHZhbCwgdHlwZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbn07XG4iLCJpbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24ucmV2ZWFsJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaXNoTGlzdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnYWNjb3VudC9hZGQtd2lzaGxpc3QnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBjb25maXJtIGJveCBiZWZvcmUgZGVsZXRpbmcgYWxsIHdpc2ggbGlzdHNcbiAgICAgKi9cbiAgICB3aXNobGlzdERlbGV0ZUNvbmZpcm0oKSB7XG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtd2lzaGxpc3QtZGVsZXRlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IHdpbmRvdy5jb25maXJtKHRoaXMuY29udGV4dC53aXNobGlzdERlbGV0ZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hsaXN0Rm9ybSkge1xuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJy53aXNobGlzdC1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0nLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmFkZFdpc2hsaXN0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcud2lzaGxpc3QtZm9ybSBpbnB1dFtuYW1lPVwid2lzaGxpc3RuYW1lXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1lvdSBtdXN0IGVudGVyIGEgd2lzaGxpc3QgbmFtZS4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGFkZFdpc2hsaXN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRXaXNobGlzdFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkV2lzaGxpc3RWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb25zdCAkYWRkV2lzaExpc3RGb3JtID0gJCgnLndpc2hsaXN0LWZvcm0nKTtcblxuICAgICAgICBpZiAoJGFkZFdpc2hMaXN0Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBZGRXaXNoTGlzdFZhbGlkYXRpb24oJGFkZFdpc2hMaXN0Rm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLndpc2hsaXN0RGVsZXRlQ29uZmlybSgpO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=