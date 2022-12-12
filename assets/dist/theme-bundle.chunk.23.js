(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./assets/js/papathemes/search-in-category.js":
/*!****************************************************!*\
  !*** ./assets/js/papathemes/search-in-category.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchInCategory; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");




var SearchInCategory = /*#__PURE__*/function () {
  /**
   * Constructor
   *
   * Should be constructed after FacetedSearch object constructed
   * so that FacetedSearch `statechange` event callback can be executed.
   *
   * `options` includes:
   * - (object) `context`: from PageManager.context.
   * - (object) `facetedSearch`
   * - (function) `searchCallback`: callback to re-render search results.
   *
   * @param {object} options
   */
  function SearchInCategory(options) {
    // console.log('search-in-category constructor');
    this.doSearch = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.doSearch.bind(this), 500);
    this.onInput = this.onInput.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onClear = this.onClear.bind(this);
    this.onStateChange = this.onStateChange.bind(this);
    this.options = options;
    this.$body = $('body');
    this.$input = $('[data-search-in-category]');
    this.$form = this.$input.closest('form');
    this.$clear = this.$form.find('[data-clear]').hide();
    this.originalPathname = window.location.pathname;
    if (options && options.facetedSearch) {
      this.options.facetedSearch.updateViewCallback = this.updateViewFacetedSearch.bind(this);
    }
    this.bindEvents();
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), true);
    if (url.query.q) {
      this.$input.val(url.query.q);
      this.$clear.show();
      $(window).trigger('statechange');
    }
  }
  var _proto = SearchInCategory.prototype;
  _proto.destroy = function destroy() {
    // console.log('search-in-category destroy');
    this.unbindEvents();
  };
  _proto.bindEvents = function bindEvents() {
    this.$input.on('input', this.onInput);
    this.$form.on('submit', this.onFormSubmit);
    this.$clear.on('click', this.onClear);
    if ($('#facetedSearch').length === 0) {
      $(window).on('statechange', this.onStateChange);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$input.off('input', this.onInput);
    this.$form.off('submit', this.onFormSubmit);
    this.$clear.off('click', this.onClear);
    $(window).off('statechange', this.onStateChange);
  };
  _proto.onFormSubmit = function onFormSubmit() {
    return false;
  };
  _proto.onClear = function onClear(event) {
    event.preventDefault();
    this.$clear.hide();
    this.$input.val('').trigger('input');
  };
  _proto.onInput = function onInput(event) {
    this.doSearch($(event.target).val());
  };
  _proto.onStateChange = function onStateChange() {
    var _this = this;
    // console.log('search-in-category statechange');
    var searchUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl();
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(searchUrl, true);
    var searchQuery = url.query.search_query || url.query.search_query_adv || url.query.q;
    var requestOptions = {
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      config: {
        category: {
          shop_by_price: true
        }
      }
    };
    if (searchQuery) {
      url.query.search_query_adv = searchQuery;
      delete url.query.search_query;
      delete url.query.q;
      delete url.query.category;
      if (this.options.context.categoryId) {
        url.query['category[]'] = this.options.context.categoryId;
      } else {
        delete url.query['category[]'];
      }
      if (this.options.context.categorypage_search_subs) {
        url.query.searchsubs = 'ON';
      }
      searchUrl = "/search.php?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query);
      requestOptions = {
        template: {
          productListing: 'supermarket/search-in-category/product-listing',
          sidebar: 'supermarket/search-in-category/sidebar'
        },
        showMore: 'search/show-more'
      };
    }
    this.$form.addClass('loading');
    this.$body.trigger('beforerequest.searchincategory');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["api"].getPage(searchUrl, requestOptions, function (err, content) {
      _this.$form.removeClass('loading');
      if (err) {
        throw new Error(err);
      }
      _this.$body.trigger('beforeupdate.searchincategory');
      if (content && _this.options.searchCallback) {
        _this.options.searchCallback(content);
      }
      _this.$body.trigger('afterupdate.searchincategory');
    });
  };
  _proto.doSearch = function doSearch(searchQuery) {
    if (searchQuery.length === 0) {
      this.$clear.hide();
      var url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), ['q', 'search_query', 'search_query_adv', 'category', 'page']);
      _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].goToUrl(url);
    } else if (searchQuery.length >= 3) {
      this.$clear.show();
      var _url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(_theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl(), ['q', 'search_query', 'search_query_adv', 'page']);
      _url = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].replaceParams(_url, {
        q: searchQuery
      });
      _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].goToUrl(_url);
    }
  };
  _proto.updateViewFacetedSearch = function updateViewFacetedSearch() {
    var _this2 = this;
    var facetedSearch = this.options.facetedSearch;
    var requestUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getUrl();
    var requestOptions = facetedSearch.requestOptions;
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(requestUrl, true);
    var searchQuery = url.query.q || url.query.search_query;

    // Check if the URL is 'Clear All', then clear the search query as well
    var stdParams = ['_bc_fsnf', 'search_query', 'q', 'sort', 'limit', 'mode', 'page'];
    var filterParams = Object.keys(url.query).filter(function (key) {
      return stdParams.indexOf(key) === -1;
    });
    var isClearAll = window.location.pathname === '/search.php' && filterParams.length === 0;
    if (isClearAll) {
      this.$input.val('');
      this.$clear.hide();
      requestUrl = _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].removeParams(requestUrl, [].concat(filterParams, ['search_query', 'q', '_bc_fsnf'])).replace('/search.php', this.originalPathname);
      window.history.replaceState({}, document.title, requestUrl);
    } else if (searchQuery) {
      // Show nice URL on the location bar
      if (window.location.pathname === '/search.php') {
        url.query.q = searchQuery;
        delete url.query.search_query;
        if (Number(url.query.category) === this.options.context.categoryId) {
          delete url.query.category;
        }
        window.history.replaceState({}, document.title, this.originalPathname + "?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query));
      }
      delete url.query.q;
      url.query.search_query = searchQuery;
      if (!url.query.category) {
        url.query.category = this.options.context.categoryId;
      }
      requestUrl = "/search.php?" + _theme_common_utils_url_utils__WEBPACK_IMPORTED_MODULE_3__["default"].buildQueryString(url.query);
      requestOptions = {
        template: {
          productListing: 'supermarket/search-in-category/product-listing',
          sidebar: 'supermarket/search-in-category/sidebar'
        },
        showMore: 'search/show-more'
      };
    } else {
      this.$input.val('');
    }
    $(facetedSearch.options.blockerSelector).show();
    this.$form.addClass('loading');
    this.$body.trigger('beforerequest.searchincategory');
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__["api"].getPage(requestUrl, requestOptions, function (err, content) {
      // Supermarket MOD
      $(facetedSearch.options.blockerSelector).hide();
      _this2.$form.removeClass('loading');
      if (err) {
        throw new Error(err);
      }
      _this2.$body.trigger('beforeupdate.searchincategory');

      // Refresh view with new content
      facetedSearch.refreshView(content);
      _this2.$body.trigger('afterupdate.searchincategory');
    });
  };
  return SearchInCategory;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
/* harmony import */ var _papathemes_search_in_category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../papathemes/search-in-category */ "./assets/js/papathemes/search-in-category.js");
/* harmony import */ var _beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../beautify/shop-by-price-slider */ "./assets/js/beautify/shop-by-price-slider.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


// Supermarket Mod
// import compareProducts from './global/compare-products';



 // Papathemes - Supermarket
// import { autoExpandCategoryMenu } from '../papathemes/theme-utils'; // Supermarket



var Category = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Category, _CatalogPage);
  function Category(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_4__["createTranslationDictionary"])(context);
    return _this;
  }
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    // console.log('category onReady');
    // autoExpandCategoryMenu(this.context); // Supermarket

    // Papathemes - Bulk Order
    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = Object(_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_6__["default"])(this.context);
    }

    // Supermarket Mod
    // compareProducts(this.context.urls);
    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);

      // papathemes-beautify
      Object(_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
      if (this.context.categorypage_search === 'show') {
        $('body').on('afterupdate.searchincategory', function () {
          return Object(_beautify_shop_by_price_slider__WEBPACK_IMPORTED_MODULE_8__["default"])();
        });
      }
    }

    // Papathemes - Supermarket
    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])();

    // Supermarket
    if (this.context.categorypage_search === 'show') {
      this.initSearchInCategory();
    }

    // papathemes-beautify
    $('#categories-navList .navList-action--checkbox').on('click', function (event) {
      return $(event.target).toggleClass('is-selected');
    });
  }

  // Supermarket
  ;
  _proto.destroy = function destroy() {
    if (this.searchInCategory) {
      this.searchInCategory.destroy();
    }
    if (this.facetedSearch) {
      this.facetedSearch.destroy();
    } else {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].off('sortBy-submitted', this.onSortBySubmit);
    }
  }

  // Supermarket
  ;
  _proto.initSearchInCategory = function initSearchInCategory() {
    var _this2 = this;
    this.searchInCategory = new _papathemes_search_in_category__WEBPACK_IMPORTED_MODULE_7__["default"]({
      context: this.context,
      facetedSearch: this.facetedSearch,
      searchCallback: function searchCallback(content) {
        $('#product-listing-container').html(content.productListing);
        if (_this2.bulkOrder) {
          _this2.bulkOrder.reinit();
        }
        Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_5__["default"])();
        $('body').triggerHandler('compareReset');
        $('html, body').animate({
          scrollTop: 0
        }, 100);
      }
    });
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this3 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);

      // Papathemes - Bulk Order
      if (_this3.bulkOrder) {
        _this3.bulkOrder.reinit();
      }
      $('body').triggerHandler('compareReset');
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
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9zZWFyY2gtaW4tY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NhdGVnb3J5LmpzIl0sIm5hbWVzIjpbIlNlYXJjaEluQ2F0ZWdvcnkiLCJvcHRpb25zIiwiZG9TZWFyY2giLCJiaW5kIiwib25JbnB1dCIsIm9uRm9ybVN1Ym1pdCIsIm9uQ2xlYXIiLCJvblN0YXRlQ2hhbmdlIiwiJGJvZHkiLCIkIiwiJGlucHV0IiwiJGZvcm0iLCJjbG9zZXN0IiwiJGNsZWFyIiwiZmluZCIsImhpZGUiLCJvcmlnaW5hbFBhdGhuYW1lIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsImZhY2V0ZWRTZWFyY2giLCJ1cGRhdGVWaWV3Q2FsbGJhY2siLCJ1cGRhdGVWaWV3RmFjZXRlZFNlYXJjaCIsImJpbmRFdmVudHMiLCJ1cmwiLCJVcmwiLCJwYXJzZSIsInVybFV0aWxzIiwiZ2V0VXJsIiwicXVlcnkiLCJxIiwidmFsIiwic2hvdyIsInRyaWdnZXIiLCJkZXN0cm95IiwidW5iaW5kRXZlbnRzIiwib24iLCJsZW5ndGgiLCJvZmYiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Iiwic2VhcmNoVXJsIiwic2VhcmNoUXVlcnkiLCJzZWFyY2hfcXVlcnkiLCJzZWFyY2hfcXVlcnlfYWR2IiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsImNhdGVnb3J5Iiwic2hvcF9ieV9wcmljZSIsImNvbnRleHQiLCJjYXRlZ29yeUlkIiwiY2F0ZWdvcnlwYWdlX3NlYXJjaF9zdWJzIiwic2VhcmNoc3VicyIsImJ1aWxkUXVlcnlTdHJpbmciLCJzaG93TW9yZSIsImFkZENsYXNzIiwiYXBpIiwiZ2V0UGFnZSIsImVyciIsImNvbnRlbnQiLCJyZW1vdmVDbGFzcyIsIkVycm9yIiwic2VhcmNoQ2FsbGJhY2siLCJyZW1vdmVQYXJhbXMiLCJnb1RvVXJsIiwicmVwbGFjZVBhcmFtcyIsInJlcXVlc3RVcmwiLCJzdGRQYXJhbXMiLCJmaWx0ZXJQYXJhbXMiLCJPYmplY3QiLCJrZXlzIiwiZmlsdGVyIiwia2V5IiwiaW5kZXhPZiIsImlzQ2xlYXJBbGwiLCJyZXBsYWNlIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImRvY3VtZW50IiwidGl0bGUiLCJOdW1iZXIiLCJibG9ja2VyU2VsZWN0b3IiLCJyZWZyZXNoVmlldyIsIkNhdGVnb3J5IiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkiLCJvblJlYWR5Iiwic2hvd19idWxrX29yZGVyX21vZGUiLCJ1c2VCdWxrT3JkZXIiLCJidWxrT3JkZXIiLCJidWxrT3JkZXJGYWN0b3J5IiwiY29tcGFyZVByb2R1Y3RzIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImhvb2tzIiwiaW5pdFNob3BCeVByaWNlU2xpZGVyIiwiY2F0ZWdvcnlwYWdlX3NlYXJjaCIsImFjdGlvbkJhckZhY3RvcnkiLCJpbml0U2VhcmNoSW5DYXRlZ29yeSIsInRvZ2dsZUNsYXNzIiwic2VhcmNoSW5DYXRlZ29yeSIsImh0bWwiLCJyZWluaXQiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCJwcm9kdWN0c1BlclBhZ2UiLCJjYXRlZ29yeVByb2R1Y3RzUGVyUGFnZSIsInByb2R1Y3RzIiwibGltaXQiLCJGYWNldGVkU2VhcmNoIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJDYXRhbG9nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUUzQjtBQUNpQztBQUFBLElBRWxDQSxnQkFBZ0I7RUFDakM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSSwwQkFBWUMsT0FBTyxFQUFFO0lBQ2pCO0lBQ0EsSUFBSSxDQUFDQyxRQUFRLEdBQUcsdURBQVMsSUFBSSxDQUFDQSxRQUFRLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDdkQsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNELElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDRSxZQUFZLEdBQUcsSUFBSSxDQUFDQSxZQUFZLENBQUNGLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDaEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSSxDQUFDQSxPQUFPLENBQUNILElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdEMsSUFBSSxDQUFDSSxhQUFhLEdBQUcsSUFBSSxDQUFDQSxhQUFhLENBQUNKLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEQsSUFBSSxDQUFDRixPQUFPLEdBQUdBLE9BQU87SUFDdEIsSUFBSSxDQUFDTyxLQUFLLEdBQUdDLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDdEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdELENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM1QyxJQUFJLENBQUNFLEtBQUssR0FBRyxJQUFJLENBQUNELE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLE1BQU0sQ0FBQztJQUN4QyxJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJLENBQUNGLEtBQUssQ0FBQ0csSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDQyxJ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IjoidGhlbWUtYnVuZGxlLmNodW5rLjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWFyY2hJbkNhdGVnb3J5IHtcbiAgICAvKipcbiAgICAgKiBDb25zdHJ1Y3RvclxuICAgICAqXG4gICAgICogU2hvdWxkIGJlIGNvbnN0cnVjdGVkIGFmdGVyIEZhY2V0ZWRTZWFyY2ggb2JqZWN0IGNvbnN0cnVjdGVkXG4gICAgICogc28gdGhhdCBGYWNldGVkU2VhcmNoIGBzdGF0ZWNoYW5nZWAgZXZlbnQgY2FsbGJhY2sgY2FuIGJlIGV4ZWN1dGVkLlxuICAgICAqXG4gICAgICogYG9wdGlvbnNgIGluY2x1ZGVzOlxuICAgICAqIC0gKG9iamVjdCkgYGNvbnRleHRgOiBmcm9tIFBhZ2VNYW5hZ2VyLmNvbnRleHQuXG4gICAgICogLSAob2JqZWN0KSBgZmFjZXRlZFNlYXJjaGBcbiAgICAgKiAtIChmdW5jdGlvbikgYHNlYXJjaENhbGxiYWNrYDogY2FsbGJhY2sgdG8gcmUtcmVuZGVyIHNlYXJjaCByZXN1bHRzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWFyY2gtaW4tY2F0ZWdvcnkgY29uc3RydWN0b3InKTtcbiAgICAgICAgdGhpcy5kb1NlYXJjaCA9IGRlYm91bmNlKHRoaXMuZG9TZWFyY2guYmluZCh0aGlzKSwgNTAwKTtcbiAgICAgICAgdGhpcy5vbklucHV0ID0gdGhpcy5vbklucHV0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25Gb3JtU3VibWl0ID0gdGhpcy5vbkZvcm1TdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyID0gdGhpcy5vbkNsZWFyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuICAgICAgICB0aGlzLiRpbnB1dCA9ICQoJ1tkYXRhLXNlYXJjaC1pbi1jYXRlZ29yeV0nKTtcbiAgICAgICAgdGhpcy4kZm9ybSA9IHRoaXMuJGlucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy4kY2xlYXIgPSB0aGlzLiRmb3JtLmZpbmQoJ1tkYXRhLWNsZWFyXScpLmhpZGUoKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbFBhdGhuYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZmFjZXRlZFNlYXJjaCkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2gudXBkYXRlVmlld0NhbGxiYWNrID0gdGhpcy51cGRhdGVWaWV3RmFjZXRlZFNlYXJjaC5iaW5kKHRoaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG5cbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHVybFV0aWxzLmdldFVybCgpLCB0cnVlKTtcbiAgICAgICAgaWYgKHVybC5xdWVyeS5xKSB7XG4gICAgICAgICAgICB0aGlzLiRpbnB1dC52YWwodXJsLnF1ZXJ5LnEpO1xuICAgICAgICAgICAgdGhpcy4kY2xlYXIuc2hvdygpO1xuICAgICAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VhcmNoLWluLWNhdGVnb3J5IGRlc3Ryb3knKTtcbiAgICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiRpbnB1dC5vbignaW5wdXQnLCB0aGlzLm9uSW5wdXQpO1xuICAgICAgICB0aGlzLiRmb3JtLm9uKCdzdWJtaXQnLCB0aGlzLm9uRm9ybVN1Ym1pdCk7XG4gICAgICAgIHRoaXMuJGNsZWFyLm9uKCdjbGljaycsIHRoaXMub25DbGVhcik7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVuYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kaW5wdXQub2ZmKCdpbnB1dCcsIHRoaXMub25JbnB1dCk7XG4gICAgICAgIHRoaXMuJGZvcm0ub2ZmKCdzdWJtaXQnLCB0aGlzLm9uRm9ybVN1Ym1pdCk7XG4gICAgICAgIHRoaXMuJGNsZWFyLm9mZignY2xpY2snLCB0aGlzLm9uQ2xlYXIpO1xuICAgICAgICAkKHdpbmRvdykub2ZmKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgfVxuXG4gICAgb25Gb3JtU3VibWl0KCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb25DbGVhcihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLiRjbGVhci5oaWRlKCk7XG4gICAgICAgIHRoaXMuJGlucHV0LnZhbCgnJykudHJpZ2dlcignaW5wdXQnKTtcbiAgICB9XG5cbiAgICBvbklucHV0KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZG9TZWFyY2goJChldmVudC50YXJnZXQpLnZhbCgpKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2VhcmNoLWluLWNhdGVnb3J5IHN0YXRlY2hhbmdlJyk7XG4gICAgICAgIGxldCBzZWFyY2hVcmwgPSB1cmxVdGlscy5nZXRVcmwoKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHNlYXJjaFVybCwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeSB8fCB1cmwucXVlcnkuc2VhcmNoX3F1ZXJ5X2FkdiB8fCB1cmwucXVlcnkucTtcbiAgICAgICAgbGV0IHJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgICAgICB1cmwucXVlcnkuc2VhcmNoX3F1ZXJ5X2FkdiA9IHNlYXJjaFF1ZXJ5O1xuXG4gICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnNlYXJjaF9xdWVyeTtcbiAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucTtcbiAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnkuY2F0ZWdvcnk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGV4dC5jYXRlZ29yeUlkKSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5WydjYXRlZ29yeVtdJ10gPSB0aGlzLm9wdGlvbnMuY29udGV4dC5jYXRlZ29yeUlkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5WydjYXRlZ29yeVtdJ107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuY29udGV4dC5jYXRlZ29yeXBhZ2Vfc2VhcmNoX3N1YnMpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnkuc2VhcmNoc3VicyA9ICdPTic7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlYXJjaFVybCA9IGAvc2VhcmNoLnBocD8ke3VybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KX1gO1xuXG4gICAgICAgICAgICByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ3N1cGVybWFya2V0L3NlYXJjaC1pbi1jYXRlZ29yeS9wcm9kdWN0LWxpc3RpbmcnLFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc3VwZXJtYXJrZXQvc2VhcmNoLWluLWNhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKCdsb2FkaW5nJyk7XG4gICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYmVmb3JlcmVxdWVzdC5zZWFyY2hpbmNhdGVnb3J5Jyk7XG5cbiAgICAgICAgYXBpLmdldFBhZ2Uoc2VhcmNoVXJsLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kZm9ybS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYmVmb3JldXBkYXRlLnNlYXJjaGluY2F0ZWdvcnknKTtcblxuICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgdGhpcy5vcHRpb25zLnNlYXJjaENhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnNlYXJjaENhbGxiYWNrKGNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRib2R5LnRyaWdnZXIoJ2FmdGVydXBkYXRlLnNlYXJjaGluY2F0ZWdvcnknKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZG9TZWFyY2goc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgaWYgKHNlYXJjaFF1ZXJ5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy4kY2xlYXIuaGlkZSgpO1xuICAgICAgICAgICAgY29uc3QgdXJsID0gdXJsVXRpbHMucmVtb3ZlUGFyYW1zKHVybFV0aWxzLmdldFVybCgpLCBbJ3EnLCAnc2VhcmNoX3F1ZXJ5JywgJ3NlYXJjaF9xdWVyeV9hZHYnLCAnY2F0ZWdvcnknLCAncGFnZSddKTtcbiAgICAgICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWFyY2hRdWVyeS5sZW5ndGggPj0gMykge1xuICAgICAgICAgICAgdGhpcy4kY2xlYXIuc2hvdygpO1xuICAgICAgICAgICAgbGV0IHVybCA9IHVybFV0aWxzLnJlbW92ZVBhcmFtcyh1cmxVdGlscy5nZXRVcmwoKSwgWydxJywgJ3NlYXJjaF9xdWVyeScsICdzZWFyY2hfcXVlcnlfYWR2JywgJ3BhZ2UnXSk7XG4gICAgICAgICAgICB1cmwgPSB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHVybCwgeyBxOiBzZWFyY2hRdWVyeSB9KTtcbiAgICAgICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVZpZXdGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCBmYWNldGVkU2VhcmNoID0gdGhpcy5vcHRpb25zLmZhY2V0ZWRTZWFyY2g7XG4gICAgICAgIGxldCByZXF1ZXN0VXJsID0gdXJsVXRpbHMuZ2V0VXJsKCk7XG4gICAgICAgIGxldCByZXF1ZXN0T3B0aW9ucyA9IGZhY2V0ZWRTZWFyY2gucmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZShyZXF1ZXN0VXJsLCB0cnVlKTtcbiAgICAgICAgY29uc3Qgc2VhcmNoUXVlcnkgPSB1cmwucXVlcnkucSB8fCB1cmwucXVlcnkuc2VhcmNoX3F1ZXJ5O1xuXG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBVUkwgaXMgJ0NsZWFyIEFsbCcsIHRoZW4gY2xlYXIgdGhlIHNlYXJjaCBxdWVyeSBhcyB3ZWxsXG4gICAgICAgIGNvbnN0IHN0ZFBhcmFtcyA9IFsnX2JjX2ZzbmYnLCAnc2VhcmNoX3F1ZXJ5JywgJ3EnLCAnc29ydCcsICdsaW1pdCcsICdtb2RlJywgJ3BhZ2UnXTtcbiAgICAgICAgY29uc3QgZmlsdGVyUGFyYW1zID0gT2JqZWN0LmtleXModXJsLnF1ZXJ5KS5maWx0ZXIoa2V5ID0+IHN0ZFBhcmFtcy5pbmRleE9mKGtleSkgPT09IC0xKTtcbiAgICAgICAgY29uc3QgaXNDbGVhckFsbCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zZWFyY2gucGhwJyAmJiBmaWx0ZXJQYXJhbXMubGVuZ3RoID09PSAwO1xuXG4gICAgICAgIGlmIChpc0NsZWFyQWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRpbnB1dC52YWwoJycpO1xuICAgICAgICAgICAgdGhpcy4kY2xlYXIuaGlkZSgpO1xuICAgICAgICAgICAgcmVxdWVzdFVybCA9IHVybFV0aWxzLnJlbW92ZVBhcmFtcyhyZXF1ZXN0VXJsLCBbLi4uZmlsdGVyUGFyYW1zLCAnc2VhcmNoX3F1ZXJ5JywgJ3EnLCAnX2JjX2ZzbmYnXSkucmVwbGFjZSgnL3NlYXJjaC5waHAnLCB0aGlzLm9yaWdpbmFsUGF0aG5hbWUpO1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgcmVxdWVzdFVybCk7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgICAgIC8vIFNob3cgbmljZSBVUkwgb24gdGhlIGxvY2F0aW9uIGJhclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSA9PT0gJy9zZWFyY2gucGhwJykge1xuICAgICAgICAgICAgICAgIHVybC5xdWVyeS5xID0gc2VhcmNoUXVlcnk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5zZWFyY2hfcXVlcnk7XG4gICAgICAgICAgICAgICAgaWYgKE51bWJlcih1cmwucXVlcnkuY2F0ZWdvcnkpID09PSB0aGlzLm9wdGlvbnMuY29udGV4dC5jYXRlZ29yeUlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnkuY2F0ZWdvcnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSh7fSwgZG9jdW1lbnQudGl0bGUsIGAke3RoaXMub3JpZ2luYWxQYXRobmFtZX0/JHt1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSl9YCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucTtcbiAgICAgICAgICAgIHVybC5xdWVyeS5zZWFyY2hfcXVlcnkgPSBzZWFyY2hRdWVyeTtcbiAgICAgICAgICAgIGlmICghdXJsLnF1ZXJ5LmNhdGVnb3J5KSB7XG4gICAgICAgICAgICAgICAgdXJsLnF1ZXJ5LmNhdGVnb3J5ID0gdGhpcy5vcHRpb25zLmNvbnRleHQuY2F0ZWdvcnlJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdFVybCA9IGAvc2VhcmNoLnBocD8ke3VybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KX1gO1xuICAgICAgICAgICAgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzdXBlcm1hcmtldC9zZWFyY2gtaW4tY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogJ3N1cGVybWFya2V0L3NlYXJjaC1pbi1jYXRlZ29yeS9zaWRlYmFyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNob3dNb3JlOiAnc2VhcmNoL3Nob3ctbW9yZScsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kaW5wdXQudmFsKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoZmFjZXRlZFNlYXJjaC5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuICAgICAgICB0aGlzLiRmb3JtLmFkZENsYXNzKCdsb2FkaW5nJyk7XG5cbiAgICAgICAgdGhpcy4kYm9keS50cmlnZ2VyKCdiZWZvcmVyZXF1ZXN0LnNlYXJjaGluY2F0ZWdvcnknKTtcblxuICAgICAgICBhcGkuZ2V0UGFnZShyZXF1ZXN0VXJsLCByZXF1ZXN0T3B0aW9ucywgKGVyciwgY29udGVudCkgPT4geyAvLyBTdXBlcm1hcmtldCBNT0RcbiAgICAgICAgICAgICQoZmFjZXRlZFNlYXJjaC5vcHRpb25zLmJsb2NrZXJTZWxlY3RvcikuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy4kZm9ybS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuXG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYmVmb3JldXBkYXRlLnNlYXJjaGluY2F0ZWdvcnknKTtcblxuICAgICAgICAgICAgLy8gUmVmcmVzaCB2aWV3IHdpdGggbmV3IGNvbnRlbnRcbiAgICAgICAgICAgIGZhY2V0ZWRTZWFyY2gucmVmcmVzaFZpZXcoY29udGVudCk7XG5cbiAgICAgICAgICAgIHRoaXMuJGJvZHkudHJpZ2dlcignYWZ0ZXJ1cGRhdGUuc2VhcmNoaW5jYXRlZ29yeScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBvbmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG4vLyBTdXBlcm1hcmtldCBNb2Rcbi8vIGltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4uL3BhcGF0aGVtZXMvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbmltcG9ydCBhY3Rpb25CYXJGYWN0b3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvYWN0aW9uLWJhcic7IC8vIFBhcGF0aGVtZXMgLSBTdXBlcm1hcmtldFxuLy8gaW1wb3J0IHsgYXV0b0V4cGFuZENhdGVnb3J5TWVudSB9IGZyb20gJy4uL3BhcGF0aGVtZXMvdGhlbWUtdXRpbHMnOyAvLyBTdXBlcm1hcmtldFxuaW1wb3J0IGJ1bGtPcmRlckZhY3RvcnkgZnJvbSAnLi4vcGFwYXRoZW1lcy9idWxrLW9yZGVyJztcbmltcG9ydCBTZWFyY2hJbkNhdGVnb3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvc2VhcmNoLWluLWNhdGVnb3J5JztcbmltcG9ydCBpbml0U2hvcEJ5UHJpY2VTbGlkZXIgZnJvbSAnLi4vYmVhdXRpZnkvc2hvcC1ieS1wcmljZS1zbGlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRlZ29yeSBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjYXRlZ29yeSBvblJlYWR5Jyk7XG4gICAgICAgIC8vIGF1dG9FeHBhbmRDYXRlZ29yeU1lbnUodGhpcy5jb250ZXh0KTsgLy8gU3VwZXJtYXJrZXRcblxuICAgICAgICAvLyBQYXBhdGhlbWVzIC0gQnVsayBPcmRlclxuICAgICAgICBpZiAodGhpcy5jb250ZXh0ICYmICh0aGlzLmNvbnRleHQuc2hvd19idWxrX29yZGVyX21vZGUgfHwgdGhpcy5jb250ZXh0LnVzZUJ1bGtPcmRlcikpIHtcbiAgICAgICAgICAgIHRoaXMuYnVsa09yZGVyID0gYnVsa09yZGVyRmFjdG9yeSh0aGlzLmNvbnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3VwZXJtYXJrZXQgTW9kXG4gICAgICAgIC8vIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuXG4gICAgICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5XG4gICAgICAgICAgICBpbml0U2hvcEJ5UHJpY2VTbGlkZXIoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuY2F0ZWdvcnlwYWdlX3NlYXJjaCA9PT0gJ3Nob3cnKSB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLm9uKCdhZnRlcnVwZGF0ZS5zZWFyY2hpbmNhdGVnb3J5JywgKCkgPT4gaW5pdFNob3BCeVByaWNlU2xpZGVyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTtcblxuICAgICAgICAvLyBTdXBlcm1hcmtldFxuICAgICAgICBpZiAodGhpcy5jb250ZXh0LmNhdGVnb3J5cGFnZV9zZWFyY2ggPT09ICdzaG93Jykge1xuICAgICAgICAgICAgdGhpcy5pbml0U2VhcmNoSW5DYXRlZ29yeSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGFwYXRoZW1lcy1iZWF1dGlmeVxuICAgICAgICAkKCcjY2F0ZWdvcmllcy1uYXZMaXN0IC5uYXZMaXN0LWFjdGlvbi0tY2hlY2tib3gnKS5vbignY2xpY2snLCBldmVudCA9PiAkKGV2ZW50LnRhcmdldCkudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJykpO1xuICAgIH1cblxuICAgIC8vIFN1cGVybWFya2V0XG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoSW5DYXRlZ29yeSkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbkNhdGVnb3J5LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mYWNldGVkU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2guZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTdXBlcm1hcmtldFxuICAgIGluaXRTZWFyY2hJbkNhdGVnb3J5KCkge1xuICAgICAgICB0aGlzLnNlYXJjaEluQ2F0ZWdvcnkgPSBuZXcgU2VhcmNoSW5DYXRlZ29yeSh7XG4gICAgICAgICAgICBjb250ZXh0OiB0aGlzLmNvbnRleHQsXG4gICAgICAgICAgICBmYWNldGVkU2VhcmNoOiB0aGlzLmZhY2V0ZWRTZWFyY2gsXG4gICAgICAgICAgICBzZWFyY2hDYWxsYmFjazogKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5idWxrT3JkZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIucmVpbml0KCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYWN0aW9uQmFyRmFjdG9yeSgpO1xuXG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAvLyBQYXBhdGhlbWVzIC0gQnVsayBPcmRlclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVsa09yZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIucmVpbml0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=