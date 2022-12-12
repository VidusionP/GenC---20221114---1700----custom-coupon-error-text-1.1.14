(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^\S+@\S+\.\S+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

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

/***/ "./assets/js/theme/common/utils/form-utils.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/form-utils.js ***!
  \****************************************************/
/*! exports provided: createPasswordValidationErrorTextObject, classifyForm, Validators, insertStateHiddenField, announceInputErrorMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPasswordValidationErrorTextObject", function() { return createPasswordValidationErrorTextObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "announceInputErrorMessage", function() { return announceInputErrorMessage; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/forms */ "./assets/js/theme/common/models/forms.js");





var inputTagNames = ['input', 'select', 'textarea'];
/**
 * Set up Object with Error Messages on Password Validation. Please use messages in mentioned order
 * @param {string} empty defines error text for empty field
 * @param {string} confirm defines error text for empty confirmation field
 * @param {string} mismatch defines error text if confirm passford mismatches passford field
 * @param {string} invalid defines error text for invalid password charaters sequence
 * @return {object} messages or default texts if nothing is providing
 */
var createPasswordValidationErrorTextObject = function createPasswordValidationErrorTextObject(empty, confirm, mismatch, invalid) {
  return {
    onEmptyPasswordErrorText: empty,
    onConfirmPasswordErrorText: confirm,
    onMismatchPasswordErrorText: mismatch,
    onNotValidPasswordErrorText: invalid
  };
};

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}

/**
 * Announce form input error message by screen reader
 * @param {params.element} dom input element where checking is happened
 * @param {params.result} result of validation check
 */
function announceInputErrorMessage(_ref) {
  var element = _ref.element,
    result = _ref.result;
  if (result) {
    return;
  }
  var activeInputContainer = $(element).parent();
  // the reason for using span tag is nod-validate lib
  // which does not add error message class while initialising form
  var errorMessage = $(activeInputContainer).find('span');
  if (errorMessage.length) {
    var $errMessage = $(errorMessage[0]);
    if (!$errMessage.attr('role')) {
      $errMessage.attr('role', 'alert');
    }
  }
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   * @param {string} errorText describes errorMassage on email validation
   */
  setEmailValidation: function setEmailValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: errorText
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param {object} errorTextsObject
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, _ref2, isOptional) {
    var onEmptyPasswordErrorText = _ref2.onEmptyPasswordErrorText,
      onConfirmPasswordErrorText = _ref2.onConfirmPasswordErrorText,
      onMismatchPasswordErrorText = _ref2.onMismatchPasswordErrorText,
      onNotValidPasswordErrorText = _ref2.onNotValidPasswordErrorText;
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: onEmptyPasswordErrorText
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: onNotValidPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: onConfirmPasswordErrorText
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: onMismatchPasswordErrorText
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors, priceValidationErrorTexts) {
    if (priceValidationErrorTexts === void 0) {
      priceValidationErrorTexts = {};
    }
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;

    // eslint-disable-next-line object-curly-newline
    var _priceValidationError = priceValidationErrorTexts,
      onMinPriceError = _priceValidationError.onMinPriceError,
      onMaxPriceError = _priceValidationError.onMaxPriceError,
      minPriceNotEntered = _priceValidationError.minPriceNotEntered,
      maxPriceNotEntered = _priceValidationError.maxPriceNotEntered,
      onInvalidPrice = _priceValidationError.onInvalidPrice;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });

    validator.add({
      errorMessage: onMinPriceError,
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: onMaxPriceError,
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: maxPriceNotEntered,
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: minPriceNotEntered,
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: onInvalidPrice,
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field, errorText) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: errorText
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMuanMiXSwibmFtZXMiOlsiZm9ybXMiLCJlbWFpbCIsInZhbHVlIiwicmUiLCJ0ZXN0IiwicGFzc3dvcmQiLCJub3RFbXB0eSIsImxlbmd0aCIsIm1pbk1heFZhbGlkYXRlIiwibWluSW5wdXRTZWxlY3RvciIsIm1heElucHV0U2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwibWluVmFsdWUiLCJwYXJzZUZsb2F0IiwiJCIsInZhbCIsIm1heFZhbHVlIiwibm9kIiwiY2xhc3NlcyIsImVycm9yQ2xhc3MiLCJzdWNjZXNzQ2xhc3MiLCJlcnJvck1lc3NhZ2VDbGFzcyIsImNoZWNrRnVuY3Rpb25zIiwiaW5wdXRUYWdOYW1lcyIsImNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdCIsImVtcHR5IiwiY29uZmlybSIsIm1pc21hdGNoIiwiaW52YWxpZCIsIm9uRW1wdHlQYXNzd29yZEVycm9yVGV4dCIsIm9uQ29uZmlybVBhc3N3b3JkRXJyb3JUZXh0Iiwib25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0Iiwib25Ob3RWYWxpZFBhc3N3b3JkRXJyb3JUZXh0IiwiY2xhc3NpZnlJbnB1dCIsImlucHV0IiwiZm9ybUZpZWxkQ2xhc3MiLCIkaW5wdXQiLCIkZm9ybUZpZWxkIiwicGFyZW50IiwidGFnTmFtZSIsInByb3AiLCJ0b0xvd2VyQ2FzZSIsImNsYXNzTmFtZSIsInNwZWNpZmljQ2xhc3NOYW1lIiwiaW5wdXRUeXBlIiwiYWRkQ2xhc3MiLCJjbGFzc2lmeUZvcm0iLCJmb3JtU2VsZWN0b3IiLCJvcHRpb25zIiwiJGZvcm0iLCIkaW5wdXRzIiwiZmluZCIsImpvaW4iLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJhZnRlciIsImFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UiLCJlbGVtZW50IiwicmVzdWx0IiwiYWN0aXZlSW5wdXRDb250YWluZXIiLCJlcnJvck1lc3NhZ2UiLCIkZXJyTWVzc2FnZSIsImF0dHIiLCJWYWxpZGF0b3JzIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdG9yIiwiZmllbGQiLCJlcnJvclRleHQiLCJhZGQiLCJzZWxlY3RvciIsInNldFBhc3N3b3JkVmFsaWRhdGlvbiIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsInJlcXVpcmVtZW50cyIsImlzT3B0aW9uYWwiLCIkcGFzc3dvcmQiLCJwYXNzd29yZFZhbGlkYXRpb25zIiwiUmVnRXhwIiwiYWxwaGEiLCJudW1lcmljIiwibWlubGVuZ3RoIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwic2VsZWN0b3JzIiwicHJpY2VWYWxpZGF0aW9uRXJyb3JUZXh0cyIsImVycm9yU2VsZWN0b3IiLCJmaWVsZHNldFNlbGVjdG9yIiwibWF4UHJpY2VTZWxlY3RvciIsIm1pblByaWNlU2VsZWN0b3IiLCJvbk1pblByaWNlRXJyb3IiLCJvbk1heFByaWNlRXJyb3IiLCJtaW5QcmljZU5vdEVudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJvbkludmFsaWRQcmljZSIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImhhc0NsYXNzIiwicmVtb3ZlQ2xhc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBLElBQU1BLEtBQUssR0FBRztFQUNWQyxLQUFLLGlCQUFDQyxLQUFLLEVBQUU7SUFDVCxJQUFNQyxFQUFFLEdBQUcsZUFBZTtJQUMxQixPQUFPQSxFQUFFLENBQUNDLElBQUksQ0FBQ0YsS0FBSyxDQUFDO0VBQ3pCLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0VBQ0lHLFFBQVEsb0JBQUNILEtBQUssRUFBRTtJQUNaLE9BQU8sSUFBSSxDQUFDSSxRQUFRLENBQUNKLEtBQUssQ0FBQztFQUMvQixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lJLFFBQVEsb0JBQUNKLEtBQUssRUFBRTtJQUNaLE9BQU9BLEtBQUssQ0FBQ0ssTUFBTSxHQUFHLENBQUM7RUFDM0I7QUFDSixDQUFDO0FBRWNQLG9FQUFLLEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnBCLFNBQVNRLGNBQWMsQ0FBQ0MsZ0JBQWdCLEVBQUVDLGdCQUFnQixFQUFFO0VBQ3hELFNBQVNDLFFBQVEsQ0FBQ0MsRUFBRSxFQUFFO0lBQ2xCLElBQU1DLFFBQVEsR0FBR0MsVUFBVSxDQUFDQyxDQUFDLENBQUNOLGdCQUFnQixDQUFDLENBQUNPLEdBQUcsRUFBRSxDQUFDO0lBQ3RELElBQU1DLFFBQVEsR0FBR0gsVUFBVSxDQUFDQyxDQUFDLENBQUNMLGdCQUFnQixDQUFDLENBQUNNLEdBQUcsRUFBRSxDQUFDO0lBRXRELElBQUlDLFFBQVEsR0FBR0osUUFBUSxJQUFJLG9EQUFRSSxRQUFRLENBQUMsSUFBSSxvREFBUUosUUFBUSxDQUFDLEVBQUU7TUFDL0QsT0FBT0QsRUFBRSxDQUFDLElBQUksQ0FBQztJQUNuQjtJQUVBLE9BQU9BLEVBQUUsQ0FBQyxLQUFLLENBQUM7RUFDcEI7RUFFQSxPQUFPRCxRQUFRO0FB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QUFLO1FBQ2ZqRSxRQUFRLEVBQUUsVUFBVTtRQUNwQjJELFlBQVksRUFBRU87TUFDbEIsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSWdDLHNCQUFzQixFQUFFLGdDQUFDakMsS0FBSyxFQUFLO0lBQy9CLElBQU1rQyxrQkFBa0IsR0FBRy9GLENBQUMsbUJBQWlCNkQsS0FBSyxDQUFDbUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFNO0lBRTFFQyxNQUFNLENBQUNDLElBQUksQ0FBQy9GLDRDQUFHLENBQUNDLE9BQU8sQ0FBQyxDQUFDK0YsT0FBTyxDQUFDLFVBQUNoSCxLQUFLLEVBQUs7TUFDeEMsSUFBSTRHLGtCQUFrQixDQUFDSyxRQUFRLENBQUNqRyw0Q0FBRyxDQUFDQyxPQUFPLENBQUNqQixLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2pENEcsa0JBQWtCLENBQUNNLFdBQVcsQ0FBQ2xHLDRDQUFHLENBQUNDLE9BQU8sQ0FBQ2pCLEtBQUssQ0FBQyxDQUFDO01BQ3REO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybXMgPSB7XG4gICAgZW1haWwodmFsdWUpIHtcbiAgICAgICAgY29uc3QgcmUgPSAvXlxcUytAXFxTK1xcLlxcUysvO1xuICAgICAgICByZXR1cm4gcmUudGVzdCh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlcyBhIHBhc3N3b3JkIGZpZWxkXG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICovXG4gICAgcGFzc3dvcmQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm90RW1wdHkodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiB2YWxpZGF0ZXMgaWYgYSBmaWVsZCBpcyBlbXB0eVxuICAgICAqIEBwYXJhbSB2YWx1ZVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqXG4gICAgICovXG4gICAgbm90RW1wdHkodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+IDA7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1zO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcblxuZnVuY3Rpb24gbWluTWF4VmFsaWRhdGUobWluSW5wdXRTZWxlY3RvciwgbWF4SW5wdXRTZWxlY3Rvcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKGNiKSB7XG4gICAgICAgIGNvbnN0IG1pblZhbHVlID0gcGFyc2VGbG9hdCgkKG1pbklucHV0U2VsZWN0b3IpLnZhbCgpKTtcbiAgICAgICAgY29uc3QgbWF4VmFsdWUgPSBwYXJzZUZsb2F0KCQobWF4SW5wdXRTZWxlY3RvcikudmFsKCkpO1xuXG4gICAgICAgIGlmIChtYXhWYWx1ZSA+IG1pblZhbHVlIHx8IF8uaXNOYU4obWF4VmFsdWUpIHx8IF8uaXNOYU4obWluVmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2IoZmFsc2UpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWxpZGF0ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWluTWF4VmFsaWRhdGU7XG4iLCJpbXBvcnQgbm9kIGZyb20gJ25vZC12YWxpZGF0ZSc7XG5pbXBvcnQgbWluTWF4VmFsaWRhdGUgZnJvbSAnLi9ub2QtZnVuY3Rpb25zL21pbi1tYXgtdmFsaWRhdGUnO1xuXG4vLyBIb29rIG91ciBTQ1NTIGZyYW1ld29yayBmb3JtIGZpZWxkIHN0YXR1cyBjbGFzc2VzIGludG8gdGhlIG5vZCB2YWxpZGF0aW9uIHN5c3RlbSBiZWZvcmUgdXNlXG5ub2QuY2xhc3Nlcy5lcnJvckNsYXNzID0gJ2Zvcm0tZmllbGQtLWVycm9yJztcbm5vZC5jbGFzc2VzLnN1Y2Nlc3NDbGFzcyA9ICdmb3JtLWZpZWxkLS1zdWNjZXNzJztcbm5vZC5jbGFzc2VzLmVycm9yTWVzc2FnZUNsYXNzID0gJ2Zvcm0taW5saW5lTWVzc2FnZSc7XG5cbi8vIFJlZ2lzdGVyIHZhbGlkYXRlIGZ1bmN0aW9uc1xubm9kLmNoZWNrRnVuY3Rpb25zWydtaW4tbWF4J10gPSBtaW5NYXhWYWxpZGF0ZTtcblxuZXhwb3J0IGRlZmF1bHQgbm9kO1xuIiwiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBub2QgZnJvbSAnLi4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9tb2RlbHMvZm9ybXMnO1xuXG5jb25zdCBpbnB1dFRhZ05hbWVzID0gW1xuICAgICdpbnB1dCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3RleHRhcmVhJyxcbl07XG4vKipcbiAqIFNldCB1cCBPYmplY3Qgd2l0aCBFcnJvciBNZXNzYWdlcyBvbiBQYXNzd29yZCBWYWxpZGF0aW9uLiBQbGVhc2UgdXNlIG1lc3NhZ2VzIGluIG1lbnRpb25lZCBvcmRlclxuICogQHBhcmFtIHtzdHJpbmd9IGVtcHR5IGRlZmluZXMgZXJyb3IgdGV4dCBmb3IgZW1wdHkgZmllbGRcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb25maXJtIGRlZmluZXMgZXJyb3IgdGV4dCBmb3IgZW1wdHkgY29uZmlybWF0aW9uIGZpZWxkXG4gKiBAcGFyYW0ge3N0cmluZ30gbWlzbWF0Y2ggZGVmaW5lcyBlcnJvciB0ZXh0IGlmIGNvbmZpcm0gcGFzc2ZvcmQgbWlzbWF0Y2hlcyBwYXNzZm9yZCBmaWVsZFxuICogQHBhcmFtIHtzdHJpbmd9IGludmFsaWQgZGVmaW5lcyBlcnJvciB0ZXh0IGZvciBpbnZhbGlkIHBhc3N3b3JkIGNoYXJhdGVycyBzZXF1ZW5jZVxuICogQHJldHVybiB7b2JqZWN0fSBtZXNzYWdlcyBvciBkZWZhdWx0IHRleHRzIGlmIG5vdGhpbmcgaXMgcHJvdmlkaW5nXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QgPSAoZW1wdHksIGNvbmZpcm0sIG1pc21hdGNoLCBpbnZhbGlkKSA9PiAoe1xuICAgIG9uRW1wdHlQYXNzd29yZEVycm9yVGV4dDogZW1wdHksXG4gICAgb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQ6IGNvbmZpcm0sXG4gICAgb25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0OiBtaXNtYXRjaCxcbiAgICBvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQ6IGludmFsaWQsXG59KTtcblxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gYW4gaW5wdXQgZWxlbWVudCBvbiBpdHMgdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IGlucHV0XG4gKiBAcGFyYW0ge3N0cmluZ30gZm9ybUZpZWxkQ2xhc3NcbiAqIEByZXR1cm4ge29iamVjdH0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZnVuY3Rpb24gY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpIHtcbiAgICBjb25zdCAkaW5wdXQgPSAkKGlucHV0KTtcbiAgICBjb25zdCAkZm9ybUZpZWxkID0gJGlucHV0LnBhcmVudChgLiR7Zm9ybUZpZWxkQ2xhc3N9YCk7XG4gICAgY29uc3QgdGFnTmFtZSA9ICRpbnB1dC5wcm9wKCd0YWdOYW1lJykudG9Mb3dlckNhc2UoKTtcblxuICAgIGxldCBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7dGFnTmFtZX1gO1xuICAgIGxldCBzcGVjaWZpY0NsYXNzTmFtZTtcblxuICAgIC8vIElucHV0IGNhbiBiZSB0ZXh0L2NoZWNrYm94L3JhZGlvIGV0Yy4uLlxuICAgIGlmICh0YWdOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgIGNvbnN0IGlucHV0VHlwZSA9ICRpbnB1dC5wcm9wKCd0eXBlJyk7XG5cbiAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydyYWRpbycsICdjaGVja2JveCcsICdzdWJtaXQnXSwgaW5wdXRUeXBlKSkge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1jaGVja2JveCwgLmZvcm0tZmllbGQtLXJhZGlvXG4gICAgICAgICAgICBjbGFzc05hbWUgPSBgJHtmb3JtRmllbGRDbGFzc30tLSR7Xy5jYW1lbENhc2UoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gaWU6IC5mb3JtLWZpZWxkLS1pbnB1dCAuZm9ybS1maWVsZC0taW5wdXRUZXh0XG4gICAgICAgICAgICBzcGVjaWZpY0NsYXNzTmFtZSA9IGAke2NsYXNzTmFtZX0ke18uY2FwaXRhbGl6ZShpbnB1dFR5cGUpfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBcHBseSBjbGFzcyBtb2RpZmllclxuICAgIHJldHVybiAkZm9ybUZpZWxkXG4gICAgICAgIC5hZGRDbGFzcyhjbGFzc05hbWUpXG4gICAgICAgIC5hZGRDbGFzcyhzcGVjaWZpY0NsYXNzTmFtZSk7XG59XG5cbi8qKlxuICogQXBwbHkgY2xhc3MgbmFtZSB0byBlYWNoIGlucHV0IGVsZW1lbnQgaW4gYSBmb3JtIGJhc2VkIG9uIGl0cyB0eXBlXG4gKiBAZXhhbXBsZVxuICogLy8gQmVmb3JlXG4gKiA8Zm9ybSBpZD1cImZvcm1cIj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIj5cbiAqICAgICA8L2Rpdj5cbiAqICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxuICogICAgICAgICA8c2VsZWN0Pi4uLjwvc2VsZWN0PlxuICogICAgIDwvZGl2PlxuICogPC9mb3JtPlxuICpcbiAqIGNsYXNzaWZ5Rm9ybSgnI2Zvcm0nLCB7IGZvcm1GaWVsZENsYXNzOiAnZm9ybS1maWVsZCcgfSk7XG4gKlxuICogLy8gQWZ0ZXJcbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLWlucHV0IGZvcm0tZmllbGQtLWlucHV0VGV4dFwiPi4uLjwvZGl2PlxuICogPGRpdiBjbGFzcz1cImZvcm0tZmllbGQgZm9ybS1maWVsZC0tc2VsZWN0XCI+Li4uPC9kaXY+XG4gKlxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSBmb3JtU2VsZWN0b3IgLSBzZWxlY3RvciBvciBlbGVtZW50XG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7alF1ZXJ5fSBFbGVtZW50IGl0c2VsZlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NpZnlGb3JtKGZvcm1TZWxlY3Rvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgJGZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG4gICAgY29uc3QgJGlucHV0cyA9ICRmb3JtLmZpbmQoaW5wdXRUYWdOYW1lcy5qb2luKCcsICcpKTtcblxuICAgIC8vIE9idGFpbiBvcHRpb25zXG4gICAgY29uc3QgeyBmb3JtRmllbGRDbGFzcyA9ICdmb3JtLWZpZWxkJyB9ID0gb3B0aW9ucztcblxuICAgIC8vIENsYXNzaWZ5IGVhY2ggaW5wdXQgaW4gYSBmb3JtXG4gICAgJGlucHV0cy5lYWNoKChfXywgaW5wdXQpID0+IHtcbiAgICAgICAgY2xhc3NpZnlJbnB1dChpbnB1dCwgZm9ybUZpZWxkQ2xhc3MpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICRmb3JtO1xufVxuXG4vKipcbiAqIEdldCBpZCBmcm9tIGdpdmVuIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJGZpZWxkIEpRdWVyeSBmaWVsZCBvYmplY3RcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0RmllbGRJZCgkZmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gJGZpZWxkLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcWy4qXFxdKS8pO1xuXG4gICAgaWYgKGZpZWxkSWQgJiYgZmllbGRJZC5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZpZWxkSWRbMF07XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xufVxuXG4vKipcbiAqIEluc2VydCBoaWRkZW4gZmllbGQgYWZ0ZXIgU3RhdGUvUHJvdmluY2UgZmllbGRcbiAqIEBwYXJhbSB7b2JqZWN0fSAkc3RhdGVGaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGluc2VydFN0YXRlSGlkZGVuRmllbGQoJHN0YXRlRmllbGQpIHtcbiAgICBjb25zdCBmaWVsZElkID0gZ2V0RmllbGRJZCgkc3RhdGVGaWVsZCk7XG4gICAgY29uc3Qgc3RhdGVGaWVsZEF0dHJzID0ge1xuICAgICAgICB0eXBlOiAnaGlkZGVuJyxcbiAgICAgICAgbmFtZTogYEZvcm1GaWVsZElzVGV4dCR7ZmllbGRJZH1gLFxuICAgICAgICB2YWx1ZTogJzEnLFxuICAgIH07XG5cbiAgICAkc3RhdGVGaWVsZC5hZnRlcigkKCc8aW5wdXQgLz4nLCBzdGF0ZUZpZWxkQXR0cnMpKTtcbn1cblxuLyoqXG4gKiBBbm5vdW5jZSBmb3JtIGlucHV0IGVycm9yIG1lc3NhZ2UgYnkgc2NyZWVuIHJlYWRlclxuICogQHBhcmFtIHtwYXJhbXMuZWxlbWVudH0gZG9tIGlucHV0IGVsZW1lbnQgd2hlcmUgY2hlY2tpbmcgaXMgaGFwcGVuZWRcbiAqIEBwYXJhbSB7cGFyYW1zLnJlc3VsdH0gcmVzdWx0IG9mIHZhbGlkYXRpb24gY2hlY2tcbiAqL1xuZnVuY3Rpb24gYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSh7IGVsZW1lbnQsIHJlc3VsdCB9KSB7XG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGFjdGl2ZUlucHV0Q29udGFpbmVyID0gJChlbGVtZW50KS5wYXJlbnQoKTtcbiAgICAvLyB0aGUgcmVhc29uIGZvciB1c2luZyBzcGFuIHRhZyBpcyBub2QtdmFsaWRhdGUgbGliXG4gICAgLy8gd2hpY2ggZG9lcyBub3QgYWRkIGVycm9yIG1lc3NhZ2UgY2xhc3Mgd2hpbGUgaW5pdGlhbGlzaW5nIGZvcm1cbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkKGFjdGl2ZUlucHV0Q29udGFpbmVyKS5maW5kKCdzcGFuJyk7XG5cbiAgICBpZiAoZXJyb3JNZXNzYWdlLmxlbmd0aCkge1xuICAgICAgICBjb25zdCAkZXJyTWVzc2FnZSA9ICQoZXJyb3JNZXNzYWdlWzBdKTtcblxuICAgICAgICBpZiAoISRlcnJNZXNzYWdlLmF0dHIoJ3JvbGUnKSkge1xuICAgICAgICAgICAgJGVyck1lc3NhZ2UuYXR0cigncm9sZScsICdhbGVydCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBWYWxpZGF0b3JzID0ge1xuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBlcnJvclRleHQgZGVzY3JpYmVzIGVycm9yTWFzc2FnZSBvbiBlbWFpbCB2YWxpZGF0aW9uXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IGVycm9yVGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFZhbGlkYXRlIHBhc3N3b3JkIGZpZWxkc1xuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmRTZWxlY3RvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZDJTZWxlY3RvclxuICAgICAqIEBwYXJhbSByZXF1aXJlbWVudHNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JUZXh0c09iamVjdFxuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCB7XG4gICAgICAgIG9uRW1wdHlQYXNzd29yZEVycm9yVGV4dCwgb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsIG9uTWlzbWF0Y2hQYXNzd29yZEVycm9yVGV4dCwgb25Ob3RWYWxpZFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgIH0sIGlzT3B0aW9uYWwpID0+IHtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRWYWxpZGF0aW9ucyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25FbXB0eVBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmRTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLmFscGhhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5tYXRjaChuZXcgUmVnRXhwKHJlcXVpcmVtZW50cy5udW1lcmljKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHZhbC5sZW5ndGggPj0gcmVxdWlyZW1lbnRzLm1pbmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBvcHRpb25hbCBhbmQgbm90aGluZyBlbnRlcmVkLCBpdCBpcyB2YWxpZFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCAmJiB2YWwubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBvbk5vdFZhbGlkUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcHRpb25hbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25Db25maXJtUGFzc3dvcmRFcnJvclRleHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsID09PSAkcGFzc3dvcmQudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaXNtYXRjaFBhc3N3b3JkRXJyb3JUZXh0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHBhc3N3b3JkVmFsaWRhdGlvbnMpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZSBwYXNzd29yZCBmaWVsZHNcbiAgICAgKiBAcGFyYW0ge05vZH0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdG9yc1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZXJyb3JTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZmllbGRzZXRTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMuZm9ybVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5tYXhQcmljZVNlbGVjdG9yXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9ycy5taW5QcmljZVNlbGVjdG9yXG4gICAgICovXG4gICAgc2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBzZWxlY3RvcnMsIHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHMgPSB7fSkgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBlcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICBtaW5QcmljZVNlbGVjdG9yLFxuICAgICAgICB9ID0gc2VsZWN0b3JzO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBvYmplY3QtY3VybHktbmV3bGluZVxuICAgICAgICBjb25zdCB7IG9uTWluUHJpY2VFcnJvciwgb25NYXhQcmljZUVycm9yLCBtaW5QcmljZU5vdEVudGVyZWQsIG1heFByaWNlTm90RW50ZXJlZCwgb25JbnZhbGlkUHJpY2UgfSA9IHByaWNlVmFsaWRhdGlvbkVycm9yVGV4dHM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogYG1pbi1tYXg6JHttaW5QcmljZVNlbGVjdG9yfToke21heFByaWNlU2VsZWN0b3J9YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6IGBtaW4tbWF4OiR7bWluUHJpY2VTZWxlY3Rvcn06JHttYXhQcmljZVNlbGVjdG9yfWAsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IG9uSW52YWxpZFByaWNlLFxuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnbWluLW51bWJlcjowJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLnNldE1lc3NhZ2VPcHRpb25zKHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBbbWluUHJpY2VTZWxlY3RvciwgbWF4UHJpY2VTZWxlY3Rvcl0sXG4gICAgICAgICAgICBwYXJlbnQ6IGZpZWxkc2V0U2VsZWN0b3IsXG4gICAgICAgICAgICBlcnJvclNwYW46IGVycm9yU2VsZWN0b3IsXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgbmV3IHZhbGlkYXRpb24gd2hlbiB0aGUgZm9ybSBpcyBkaXJ0eVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JUZXh0KSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBjbGFzc2VzIGZyb20gZGlydHkgZm9ybSBpZiBwcmV2aW91c2x5IGNoZWNrZWRcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBjbGVhblVwU3RhdGVWYWxpZGF0aW9uOiAoZmllbGQpID0+IHtcbiAgICAgICAgY29uc3QgJGZpZWxkQ2xhc3NFbGVtZW50ID0gJCgoYFtkYXRhLXR5cGU9XCIke2ZpZWxkLmRhdGEoJ2ZpZWxkVHlwZScpfVwiXWApKTtcblxuICAgICAgICBPYmplY3Qua2V5cyhub2QuY2xhc3NlcykuZm9yRWFjaCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmICgkZmllbGRDbGFzc0VsZW1lbnQuaGFzQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKSkge1xuICAgICAgICAgICAgICAgICRmaWVsZENsYXNzRWxlbWVudC5yZW1vdmVDbGFzcyhub2QuY2xhc3Nlc1t2YWx1ZV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuZXhwb3J0IHsgVmFsaWRhdG9ycywgaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCwgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==