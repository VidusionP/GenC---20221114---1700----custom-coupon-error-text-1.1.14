(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./assets/js/theme/global/quick-view.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/global/quick-view.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.dropdown */ "./node_modules/foundation-sites/js/foundation/foundation.dropdown.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_6__);







/* harmony default export */ __webpack_exports__["default"] = (function (context) {
  // Supermarket - Instantload feature
  if (context.instantload) {
    return;
  }
  var modal = Object(_modal__WEBPACK_IMPORTED_MODULE_5__["defaultModal"])();

  // supermarket add .quickview-alt to support Choose Options show quickview
  $('body').on('click', '.quickview, .quickview-alt', function (event) {
    event.preventDefault();
    var productId = $(event.currentTarget).data('productId');

    // papathemes-inhealth
    var size = $(event.target).hasClass('quickview-alt') ? 'purchaseOptions' : 'large';
    modal.open({
      size: size
    });

    // papathemes-beautify
    var config = {
      product: {
        videos: context.productpage_videos_count,
        reviews: context.productpage_reviews_count
      }
    };

    // papathemes-inhealth
    var template = $(event.target).hasClass('quickview-alt') ? 'products/quick-view-alt' : 'products/quick-view';
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__["default"].api.product.getById(productId, {
      template: template,
      config: config
    }, function (err, response) {
      modal.updateContent(response);
      modal.$content.find('.productView').addClass('productView--quickView');
      modal.$content.find('[data-slick]').slick();

      // Papathemes Also Bought MOD {{{
      var $quickView = modal.$content.find('.quickView');
      var product;
      if ($('[data-also-bought] .productView-alsoBought-item', $quickView).length > 0) {
        product = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($quickView, lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(context, {
          enableAlsoBought: true
        }));
      } else {
        product = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($quickView, context);
      }
      $('body').trigger('loaded.quickview', [product]);
      return product;
      // }}}
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC1mdW5jdGlvbnMvbWluLW1heC12YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL25vZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3F1aWNrLXZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdG9TdHJpbmcuanMiXSwibmFtZXMiOlsibWluTWF4VmFsaWRhdGUiLCJtaW5JbnB1dFNlbGVjdG9yIiwibWF4SW5wdXRTZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJtaW5WYWx1ZSIsInBhcnNlRmxvYXQiLCIkIiwidmFsIiwibWF4VmFsdWUiLCJub2QiLCJjbGFzc2VzIiwiZXJyb3JDbGFzcyIsInN1Y2Nlc3NDbGFzcyIsImVycm9yTWVzc2FnZUNsYXNzIiwiY2hlY2tGdW5jdGlvbnMiLCJjb250ZXh0IiwiaW5zdGFudGxvYWQiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RJZCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhIiwic2l6ZSIsInRhcmdldCIsImhhc0NsYXNzIiwib3BlbiIsImNvbmZpZyIsInByb2R1Y3QiLCJ2aWRlb3MiLCJwcm9kdWN0cGFnZV92aWRlb3NfY291bnQiLCJyZXZpZXdzIiwicHJvZHVjdHBhZ2VfcmV2aWV3c19jb3VudCIsInRlbXBsYXRlIiwidXRpbHMiLCJhcGkiLCJnZXRCeUlkIiwiZXJyIiwicmVzcG9uc2UiLCJ1cGRhdGVDb250ZW50IiwiJGNvbnRlbnQiLCJmaW5kIiwiYWRkQ2xhc3MiLCJzbGljayIsIiRxdWlja1ZpZXciLCJsZW5ndGgiLCJQcm9kdWN0RGV0YWlscyIsImVuYWJsZUFsc29Cb3VnaHQiLCJ0cmln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QUFDLENBQUNFLEtBQUssRUFBRTs7TUFFM0M7TUFDQSxJQUFNQyxVQUFVLEdBQUc3QixLQUFLLENBQUN5QixRQUFRLENBQUNDLElBQUksQ0FBQyxZQUFZLENBQUM7TUFDcEQsSUFBSWIsT0FBTztNQUNYLElBQUl4QixDQUFDLENBQUMsaURBQWlELEVBQUV3QyxVQUFVLENBQUMsQ0FBQ0MsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUM3RWpCLE9BQU8sR0FBRyxJQUFJa0IsK0RBQWMsQ0FBQ0YsVUFBVSxFQUFFLHFEQUFTL0IsT0FBTyxFQUFFO1VBQUVrQyxnQkFBZ0IsRUFBRTtRQUFLLENBQUMsQ0FBQyxDQUFDO01BQzNGLENBQUMsTUFBTTtRQUNIbkIsT0FBTyxHQUFHLElBQUlrQiwrREFBYyxDQUFDRixVQUFVLEVBQUUvQixPQUFPLENBQUM7TUFDckQ7TUFFQVQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDNEMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUNwQixPQUFPLENBQUMsQ0FBQztNQUVoRCxPQUFPQSxPQUFPO01BQ2Q7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDTixDOzs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmZ1bmN0aW9uIG1pbk1heFZhbGlkYXRlKG1pbklucHV0U2VsZWN0b3IsIG1heElucHV0U2VsZWN0b3IpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShjYikge1xuICAgICAgICBjb25zdCBtaW5WYWx1ZSA9IHBhcnNlRmxvYXQoJChtaW5JbnB1dFNlbGVjdG9yKS52YWwoKSk7XG4gICAgICAgIGNvbnN0IG1heFZhbHVlID0gcGFyc2VGbG9hdCgkKG1heElucHV0U2VsZWN0b3IpLnZhbCgpKTtcblxuICAgICAgICBpZiAobWF4VmFsdWUgPiBtaW5WYWx1ZSB8fCBfLmlzTmFOKG1heFZhbHVlKSB8fCBfLmlzTmFOKG1pblZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNiKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNiKGZhbHNlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1pbk1heFZhbGlkYXRlO1xuIiwiaW1wb3J0IG5vZCBmcm9tICdub2QtdmFsaWRhdGUnO1xuaW1wb3J0IG1pbk1heFZhbGlkYXRlIGZyb20gJy4vbm9kLWZ1bmN0aW9ucy9taW4tbWF4LXZhbGlkYXRlJztcblxuLy8gSG9vayBvdXIgU0NTUyBmcmFtZXdvcmsgZm9ybSBmaWVsZCBzdGF0dXMgY2xhc3NlcyBpbnRvIHRoZSBub2QgdmFsaWRhdGlvbiBzeXN0ZW0gYmVmb3JlIHVzZVxubm9kLmNsYXNzZXMuZXJyb3JDbGFzcyA9ICdmb3JtLWZpZWxkLS1lcnJvcic7XG5ub2QuY2xhc3Nlcy5zdWNjZXNzQ2xhc3MgPSAnZm9ybS1maWVsZC0tc3VjY2Vzcyc7XG5ub2QuY2xhc3Nlcy5lcnJvck1lc3NhZ2VDbGFzcyA9ICdmb3JtLWlubGluZU1lc3NhZ2UnO1xuXG4vLyBSZWdpc3RlciB2YWxpZGF0ZSBmdW5jdGlvbnNcbm5vZC5jaGVja0Z1bmN0aW9uc1snbWluLW1heCddID0gbWluTWF4VmFsaWRhdGU7XG5cbmV4cG9ydCBkZWZhdWx0IG5vZDtcbiIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcbmltcG9ydCAnZm91bmRhdGlvbi1zaXRlcy9qcy9mb3VuZGF0aW9uL2ZvdW5kYXRpb24uZHJvcGRvd24nO1xuaW1wb3J0IHV0aWxzIGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBQcm9kdWN0RGV0YWlscyBmcm9tICcuLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4vbW9kYWwnO1xuaW1wb3J0ICdzbGljay1jYXJvdXNlbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgLy8gU3VwZXJtYXJrZXQgLSBJbnN0YW50bG9hZCBmZWF0dXJlXG4gICAgaWYgKGNvbnRleHQuaW5zdGFudGxvYWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAvLyBzdXBlcm1hcmtldCBhZGQgLnF1aWNrdmlldy1hbHQgdG8gc3VwcG9ydCBDaG9vc2UgT3B0aW9ucyBzaG93IHF1aWNrdmlld1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnF1aWNrdmlldywgLnF1aWNrdmlldy1hbHQnLCBldmVudCA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdwcm9kdWN0SWQnKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWluaGVhbHRoXG4gICAgICAgIGNvbnN0IHNpemUgPSAkKGV2ZW50LnRhcmdldCkuaGFzQ2xhc3MoJ3F1aWNrdmlldy1hbHQnKSA/ICdwdXJjaGFzZU9wdGlvbnMnIDogJ2xhcmdlJztcblxuICAgICAgICBtb2RhbC5vcGVuKHsgc2l6ZSB9KTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICB2aWRlb3M6IGNvbnRleHQucHJvZHVjdHBhZ2VfdmlkZW9zX2NvdW50LFxuICAgICAgICAgICAgICAgIHJldmlld3M6IGNvbnRleHQucHJvZHVjdHBhZ2VfcmV2aWV3c19jb3VudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1pbmhlYWx0aFxuICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9ICQoZXZlbnQudGFyZ2V0KS5oYXNDbGFzcygncXVpY2t2aWV3LWFsdCcpID8gJ3Byb2R1Y3RzL3F1aWNrLXZpZXctYWx0JyA6ICdwcm9kdWN0cy9xdWljay12aWV3JztcblxuICAgICAgICB1dGlscy5hcGkucHJvZHVjdC5nZXRCeUlkKHByb2R1Y3RJZCwgeyB0ZW1wbGF0ZSwgY29uZmlnIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcblxuICAgICAgICAgICAgbW9kYWwuJGNvbnRlbnQuZmluZCgnLnByb2R1Y3RWaWV3JykuYWRkQ2xhc3MoJ3Byb2R1Y3RWaWV3LS1xdWlja1ZpZXcnKTtcblxuICAgICAgICAgICAgbW9kYWwuJGNvbnRlbnQuZmluZCgnW2RhdGEtc2xpY2tdJykuc2xpY2soKTtcblxuICAgICAgICAgICAgLy8gUGFwYXRoZW1lcyBBbHNvIEJvdWdodCBNT0Qge3t7XG4gICAgICAgICAgICBjb25zdCAkcXVpY2tWaWV3ID0gbW9kYWwuJGNvbnRlbnQuZmluZCgnLnF1aWNrVmlldycpO1xuICAgICAgICAgICAgbGV0IHByb2R1Y3Q7XG4gICAgICAgICAgICBpZiAoJCgnW2RhdGEtYWxzby1ib3VnaHRdIC5wcm9kdWN0Vmlldy1hbHNvQm91Z2h0LWl0ZW0nLCAkcXVpY2tWaWV3KS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdCA9IG5ldyBQcm9kdWN0RGV0YWlscygkcXVpY2tWaWV3LCBfLmV4dGVuZChjb250ZXh0LCB7IGVuYWJsZUFsc29Cb3VnaHQ6IHRydWUgfSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0ID0gbmV3IFByb2R1Y3REZXRhaWxzKCRxdWlja1ZpZXcsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlcignbG9hZGVkLnF1aWNrdmlldycsIFtwcm9kdWN0XSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0O1xuICAgICAgICAgICAgLy8gfX19XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGFuIGBBcnJheWAgb2JqZWN0LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIGFycmF5LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcnJheShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNBcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KCdhYmMnKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0FycmF5KF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iXSwic291cmNlUm9vdCI6IiJ9