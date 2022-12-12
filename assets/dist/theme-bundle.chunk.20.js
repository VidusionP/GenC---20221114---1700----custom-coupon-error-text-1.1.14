(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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

/***/ "./assets/js/theme/contact-us.js":
/*!***************************************!*\
  !*** ./assets/js/theme/contact-us.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContactUs; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ContactUs = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(ContactUs, _PageManager);
  function ContactUs() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = ContactUs.prototype;
  _proto.onReady = function onReady() {
    this.registerContactFormValidation();
  };
  _proto.registerContactFormValidation = function registerContactFormValidation() {
    var formSelector = 'form[data-contact-form]';
    var contactUsValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: formSelector + " input[type=\"submit\"]"
    });
    var $contactForm = $(formSelector);
    contactUsValidator.add([{
      selector: formSelector + " input[name=\"contact_email\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.contactEmail
    }, {
      selector: formSelector + " textarea[name=\"contact_question\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].notEmpty(val);
        cb(result);
      },
      errorMessage: this.context.contactQuestion
    }]);
    $contactForm.on('submit', function (event) {
      contactUsValidator.performCheck();
      if (contactUsValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return ContactUs;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29udGFjdC11cy5qcyJdLCJuYW1lcyI6WyJmb3JtcyIsImVtYWlsIiwidmFsdWUiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwibGVuZ3RoIiwibWluTWF4VmFsaWRhdGUiLCJtaW5JbnB1dFNlbGVjdG9yIiwibWF4SW5wdXRTZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJtaW5WYWx1ZSIsInBhcnNlRmxvYXQiLCIkIiwidmFsIiwibWF4VmFsdWUiLCJub2QiLCJjbGFzc2VzIiwiZXJyb3JDbGFzcyIsInN1Y2Nlc3NDbGFzcyIsImVycm9yTWVzc2FnZUNsYXNzIiwiY2hlY2tGdW5jdGlvbnMiLCJDb250YWN0VXMiLCJvblJlYWR5IiwicmVnaXN0ZXJDb250YWN0Rm9ybVZhbGlkYXRpb24iLCJmb3JtU2VsZWN0b3IiLCJjb250YWN0VXNWYWxpZGF0b3IiLCJzdWJtaXQiLCIkY29udGFjdEZvcm0iLCJhZGQiLCJzZWxlY3RvciIsInJlc3VsdCIsImVycm9yTWVzc2FnZSIsImNvbnRleHQiLCJjb250YWN0RW1haWwiLCJjb250YWN0UXVlc3Rpb24iLCJvbiIsImV2ZW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJldmVudERlZmF1bHQiLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUEsSUFBTUEsS0FBSyxHQUFHO0VBQ1ZDLEtBQUssaUJBQUNDLEtBQUssRUFBRTtJQUNULElBQU1DLEVBQUUsR0FBRyxlQUFlO0lBQzFCLE9BQU9BLEVBQUUsQ0FBQ0MsSUFBSSxDQUFDRixLQUFLLENBQUM7RUFDekIsQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7RUFDSUcsUUFBUSxvQkFBQ0gsS0FBSyxFQUFFO0lBQ1osT0FBTyxJQUFJLENBQUNJLFFBQVEsQ0FBQ0osS0FBSyxDQUFDO0VBQy9CLENBQUM7RUFFRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSUksUUFBUSxvQkFBQ0osS0FBSyxFQUFFO0lBQ1osT0FBT0EsS0FBSyxDQUFDSyxNQUFNLEdBQUcsQ0FBQztFQUMzQjtBQUNKLENBQUM7QUFFY1Asb0VBQUssRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCcEIsU0FBU1EsY0FBYyxDQUFDQyxnQkFBZ0IsRUFBRUMsZ0JBQWdCLEVBQUU7RUFDeEQsU0FBU0MsUUFBUSxDQUFDQyxFQUFFLEVBQUU7SUFDbEIsSUFBTUMsUUFBUSxHQUFHQyxVQUFVLENBQUNDLENBQUMsQ0FBQ04sZ0JBQWdCLENBQUMsQ0FBQ08sR0FBRyxFQUFFLENBQUM7SUFDdEQsSUFBTUMsUUFBUSxHQUFHSCxVQUFVLENBQUNDLENBQUMsQ0FBQ0wsZ0JBQWdCLENBQUMsQ0FBQ00sR0FBRyxFQUFFLENBQUM7SUFFdEQsSUFBSUMsUUFBUSxHQUFHSixRQUFRLElBQUksb0RBQVFJLFFBQVEsQ0FBQyxJQUFJLG9EQUFRSixRQUFRLENBQUMsRUFBRTtNQUMvRCxPQUFPRCxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ25CO0lBRUEsT0FBT0EsRUFBRSxDQUFDLEtBQUssQ0FBQztFQUNwQjtFQUVBLE9BQU9ELFFBQVE7QUFDbkI7QUFFZUgsNkVBQWMsRTs7Ozs7Ozs7Ozs7OztBQ2pCN0I7QUFBQTtBQUFBO0FBQUE7QUFBK0I7QUFDK0I7O0FBRTlEO0FBQ0FVLG1EQUFHLENBQUNDLE9BQU8sQ0FBQ0MsVUFBVSxHQUFHLG1CQUFtQjtBQUM1Q0YsbURBQUcsQ0FBQ0MsT0FBTyxDQUFDRSxZQUFZLEdBQUcscUJBQXFCO0FBQ2hESCxtREFBRyxDQUFDQyxPQUFPLENBQUNHLGlCQUFpQixHQUFHLG9CQUFvQjs7QUFFcEQ7QUFDQUosbURBQUcsQ0FBQ0ssY0FBYyxDQUFDLFNBQVMsQ0FBQyxHQUFHZix1RUFBYztBQUUvQlUsa0hBQUcsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1h3QjtBQUNYO0FBQ1c7QUFBQSxJQUVyQk0sU0FBUztFQUFBO0VBQUE7SUFBQTtFQUFBO0VBQUE7RUFBQSxPQUMxQkMsT0FBTyxHQUFQLG1CQUFVO0lBQ04sSUFBSSxDQUFDQyw2QkFBNkIsRUFBRTtFQUN4QyxDQUFDO0VBQUEsT0FFREEsNkJBQTZCLEdBQTdCLHlDQUFnQztJQUM1QixJQUFNQyxZQUFZLEdBQUcseUJBQXlCO0lBQzlDLElBQU1DLGtCQUFrQixHQUFHViwyREFBRyxDQUFDO01BQzNCVyxNQUFNLEVBQUtGLFlBQVk7SUFDM0IsQ0FBQyxDQUFDO0lBQ0YsSUFBTUcsWUFBWSxHQUFHZixDQUFDLENBQUNZLFlBQVksQ0FBQztJQUVwQ0Msa0JBQWtCLENBQUNHLEdBQUcsQ0FBQyxDQUNuQjtNQUNJQyxRQUFRLEVBQUtMLFlBQVksbUNBQThCO01BQ3ZEaEIsUUFBUSxFQUFFLGtCQUFDQyxFQUFFLEVBQUVJLEdBQUcsRUFBSztRQUNuQixJQUFNaUIsTUFBTSxHQUFHakMsNERBQUssQ0FBQ0MsS0FBSyxDQUFDZSxHQUFHLENBQUM7UUFFL0JKLEVBQUUsQ0FBQ3FCLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDREMsWUFBWSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDQztJQUMvQixDQUFDLEVBQ0Q7TUFDSUosUUFBUSxFQUFLTCxZQUFZLHlDQUFvQztNQUM3RGhCLFFBQVEsRUFBRSxrQkFBQ0MsRUFBRSxFQUFFSSxHQUFHLEVBQUs7UUFDbkIsSUFBTWlCLE1BQU0sR0FBR2pDLDREQUFLLENBQUNNLFFBQVEsQ0FBQ1UsR0FBRyxDQUFDO1FBRWxDSixFQUFFLENBQUNxQixNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0RDLFlBQVksRUFBRSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0U7SUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFFRlAsWUFBWSxDQUFDUSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUMvQlgsa0JBQWtCLENBQUNZLFlBQVksRUFBRTtNQUVqQyxJQUFJWixrQkFBa0IsQ0FBQ2EsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO1FBQ3BDO01BQ0o7TUFFQUYsS0FBSyxDQUFDRyxjQUFjLEVBQUU7SUFDMUIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBO0FBQUEsRUExQ2tDQyxxREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eXFxTK0BcXFMrXFwuXFxTKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuXG5mdW5jdGlvbiBtaW5NYXhWYWxpZGF0ZShtaW5JbnB1dFNlbGVjdG9yLCBtYXhJbnB1dFNlbGVjdG9yKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoY2IpIHtcbiAgICAgICAgY29uc3QgbWluVmFsdWUgPSBwYXJzZUZsb2F0KCQobWluSW5wdXRTZWxlY3RvcikudmFsKCkpO1xuICAgICAgICBjb25zdCBtYXhWYWx1ZSA9IHBhcnNlRmxvYXQoJChtYXhJbnB1dFNlbGVjdG9yKS52YWwoKSk7XG5cbiAgICAgICAgaWYgKG1heFZhbHVlID4gbWluVmFsdWUgfHwgXy5pc05hTihtYXhWYWx1ZSkgfHwgXy5pc05hTihtaW5WYWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYihmYWxzZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbGlkYXRlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBtaW5NYXhWYWxpZGF0ZTtcbiIsImltcG9ydCBub2QgZnJvbSAnbm9kLXZhbGlkYXRlJztcbmltcG9ydCBtaW5NYXhWYWxpZGF0ZSBmcm9tICcuL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZSc7XG5cbi8vIEhvb2sgb3VyIFNDU1MgZnJhbWV3b3JrIGZvcm0gZmllbGQgc3RhdHVzIGNsYXNzZXMgaW50byB0aGUgbm9kIHZhbGlkYXRpb24gc3lzdGVtIGJlZm9yZSB1c2Vcbm5vZC5jbGFzc2VzLmVycm9yQ2xhc3MgPSAnZm9ybS1maWVsZC0tZXJyb3InO1xubm9kLmNsYXNzZXMuc3VjY2Vzc0NsYXNzID0gJ2Zvcm0tZmllbGQtLXN1Y2Nlc3MnO1xubm9kLmNsYXNzZXMuZXJyb3JNZXNzYWdlQ2xhc3MgPSAnZm9ybS1pbmxpbmVNZXNzYWdlJztcblxuLy8gUmVnaXN0ZXIgdmFsaWRhdGUgZnVuY3Rpb25zXG5ub2QuY2hlY2tGdW5jdGlvbnNbJ21pbi1tYXgnXSA9IG1pbk1heFZhbGlkYXRlO1xuXG5leHBvcnQgZGVmYXVsdCBub2Q7XG4iLCJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0VXMgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckNvbnRhY3RGb3JtVmFsaWRhdGlvbigpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICBjb25zdCBmb3JtU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWNvbnRhY3QtZm9ybV0nO1xuICAgICAgICBjb25zdCBjb250YWN0VXNWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHtmb3JtU2VsZWN0b3J9IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgJGNvbnRhY3RGb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuXG4gICAgICAgIGNvbnRhY3RVc1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtU2VsZWN0b3J9IGlucHV0W25hbWU9XCJjb250YWN0X2VtYWlsXCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY29udGFjdEVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybVNlbGVjdG9yfSB0ZXh0YXJlYVtuYW1lPVwiY29udGFjdF9xdWVzdGlvblwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1zLm5vdEVtcHR5KHZhbCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmNvbnRhY3RRdWVzdGlvbixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRjb250YWN0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29udGFjdFVzVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoY29udGFjdFVzVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==