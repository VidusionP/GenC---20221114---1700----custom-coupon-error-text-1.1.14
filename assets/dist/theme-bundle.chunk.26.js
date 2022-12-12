(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brand; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// Supermarket Mod
// import compareProducts from './global/compare-products';



 // Papathemes - Supermarket

var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);
  function Brand(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    // Papathemes - Bulk Order
    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = Object(_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__["default"])(this.context);
    }

    // Supermarket Mod
    // compareProducts(this.context.urls);
    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])(); // Papathemes - Supermarket
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
  }

  // Supermarket
  ;
  _proto.destroy = function destroy() {
    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this2 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');

      // Papathemes - Bulk Order
      if (_this2.bulkOrder) {
        _this2.bulkOrder.reinit();
      }
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      validationErrorMessages: {
        onMinPriceError: onMinPriceError,
        onMaxPriceError: onMaxPriceError,
        minPriceNotEntered: minPriceNotEntered,
        maxPriceNotEntered: maxPriceNotEntered,
        onInvalidPrice: onInvalidPrice
      }
    });
  };
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmQuanMiXSwibmFtZXMiOlsiQnJhbmQiLCJjb250ZXh0IiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJvblJlYWR5Iiwic2hvd19idWxrX29yZGVyX21vZGUiLCJ1c2VCdWxrT3JkZXIiLCJidWxrT3JkZXIiLCJidWxrT3JkZXJGYWN0b3J5IiwiY29tcGFyZVByb2R1Y3RzIiwiYWN0aW9uQmFyRmFjdG9yeSIsIiQiLCJsZW5ndGgiLCJpbml0RmFjZXRlZFNlYXJjaCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwib24iLCJkZXN0cm95IiwiZmFjZXRlZFNlYXJjaCIsIm9mZiIsIm9uTWluUHJpY2VFcnJvciIsInByaWNlX21pbl9ldmFsdWF0aW9uIiwib25NYXhQcmljZUVycm9yIiwicHJpY2VfbWF4X2V2YWx1YXRpb24iLCJtaW5QcmljZU5vdEVudGVyZWQiLCJwcmljZV9taW5fbm90X2VudGVyZWQiLCJtYXhQcmljZU5vdEVudGVyZWQiLCJwcmljZV9tYXhfbm90X2VudGVyZWQiLCJvbkludmFsaWRQcmljZSIsInByaWNlX2ludmFsaWRfdmFsdWUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwicmVpbml0IiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInZhbGlkYXRpb25FcnJvck1lc3NhZ2VzIiwiQ2F0YWxv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O1FBQ2hCLE1BQUksQ0FBQ0EsU0FBUyxDQUFDMEMsTUFBTSxFQUFFO01BQzNCO01BRUF0QyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUN1QyxPQUFPLENBQUM7UUFDcEJDLFNBQVMsRUFBRTtNQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLEVBQUU7TUFDQ0MsdUJBQXVCLEVBQUU7UUFDckIvQixlQUFlLEVBQWZBLGVBQWU7UUFDZkUsZUFBZSxFQUFmQSxlQUFlO1FBQ2ZFLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ2xCRSxrQkFBa0IsRUFBbEJBLGtCQUFrQjtRQUNsQkUsY0FBYyxFQUFkQTtNQUNKO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBO0FBQUEsRUFwRjhCd0IsZ0RBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgQ2F0YWxvZ1BhZ2UgZnJvbSAnLi9jYXRhbG9nJztcbi8vIFN1cGVybWFya2V0IE1vZFxuLy8gaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuaW1wb3J0IGFjdGlvbkJhckZhY3RvcnkgZnJvbSAnLi4vcGFwYXRoZW1lcy9hY3Rpb24tYmFyJzsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG5pbXBvcnQgYnVsa09yZGVyRmFjdG9yeSBmcm9tICcuLi9wYXBhdGhlbWVzL2J1bGstb3JkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmFuZCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIFBhcGF0aGVtZXMgLSBCdWxrIE9yZGVyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQgJiYgKHRoaXMuY29udGV4dC5zaG93X2J1bGtfb3JkZXJfbW9kZSB8fCB0aGlzLmNvbnRleHQudXNlQnVsa09yZGVyKSkge1xuICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIgPSBidWxrT3JkZXJGYWN0b3J5KHRoaXMuY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTdXBlcm1hcmtldCBNb2RcbiAgICAgICAgLy8gY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dCk7XG5cbiAgICAgICAgYWN0aW9uQmFyRmFjdG9yeSgpOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdXBlcm1hcmtldFxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmZhY2V0ZWRTZWFyY2gpIHtcbiAgICAgICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaC5kZXN0cm95KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob29rcy5vZmYoJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBwcmljZV9taW5fZXZhbHVhdGlvbjogb25NaW5QcmljZUVycm9yLFxuICAgICAgICAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21pbl9ub3RfZW50ZXJlZDogbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfbWF4X25vdF9lbnRlcmVkOiBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcbiAgICAgICAgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuYnJhbmRQcm9kdWN0c1BlclBhZ2U7XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2JyYW5kL3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2JyYW5kL3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHNob3BfYnlfYnJhbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OiBwcm9kdWN0c1BlclBhZ2UsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzaG93TW9yZTogJ2JyYW5kL3Nob3ctbW9yZScsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5mYWNldGVkU2VhcmNoID0gbmV3IEZhY2V0ZWRTZWFyY2gocmVxdWVzdE9wdGlvbnMsIChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcbiAgICAgICAgICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgLy8gUGFwYXRoZW1lcyAtIEJ1bGsgT3JkZXJcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1bGtPcmRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVsa09yZGVyLnJlaW5pdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yTWVzc2FnZXM6IHtcbiAgICAgICAgICAgICAgICBvbk1pblByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgb25NYXhQcmljZUVycm9yLFxuICAgICAgICAgICAgICAgIG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBtYXhQcmljZU5vdEVudGVyZWQsXG4gICAgICAgICAgICAgICAgb25JbnZhbGlkUHJpY2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9