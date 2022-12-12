(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var _papathemes_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../papathemes/compare-products */ "./assets/js/papathemes/compare-products.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _papathemes_action_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../papathemes/action-bar */ "./assets/js/papathemes/action-bar.js");
/* harmony import */ var _papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../papathemes/bulk-order */ "./assets/js/papathemes/bulk-order.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




// Supermarket Mod
// import compareProducts from './global/compare-products';






 // Papathemes - Supermarket

var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);
  function Search(context) {
    var _this;
    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_3__["createTranslationDictionary"])(context);
    return _this;
  }
  var _proto = Search.prototype;
  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this2 = this;
    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };
    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }
    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this2.formatCategoryTreeForJSTree(childNode));
      });
    }
    return nodeData;
  };
  _proto.showProducts = function showProducts() {
    var url = _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(window.location.href, {
      section: 'product'
    });
    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    $('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-content-results-toggle]').addClass('navBar-action');
    $('[data-product-results-toggle]').removeClass('navBar-action');
    $('[data-product-results-toggle]').addClass('navBar-action-color--active');
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.showContent = function showContent() {
    var url = _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(window.location.href, {
      section: 'content'
    });
    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    $('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    $('[data-product-results-toggle]').addClass('navBar-action');
    $('[data-content-results-toggle]').removeClass('navBar-action');
    $('[data-content-results-toggle]').addClass('navBar-action-color--active');
    _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    // Supermarket Mod
    // compareProducts(this.context.urls);
    Object(_papathemes_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context);
    var $searchForm = $('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = $('#product-listing-container');
    this.$facetedSearchContainer = $('#faceted-search-container');
    this.$contentResultsContainer = $('#search-results-content');

    // Papathemes - Bulk Order
    if (this.context && (this.context.show_bulk_order_mode || this.context.useBulkOrder)) {
      this.bulkOrder = Object(_papathemes_bulk_order__WEBPACK_IMPORTED_MODULE_11__["default"])(this.context);
    }
    Object(_papathemes_action_bar__WEBPACK_IMPORTED_MODULE_10__["default"])(); // Papathemes - Supermarket

    // Init faceted search
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }

    // Init collapsibles
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    $('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this3.showProducts();
    });
    $('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();
      _this3.showContent();
    });
    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent();
    } else {
      this.showProducts();
    }
    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this3.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();
      if (!validator.check()) {
        return event.preventDefault();
      }
      $searchForm.find('input[name="category\[\]"]').remove();
      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = $('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
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
  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this4 = this;
    $.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this4.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };
  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this5 = this;
    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this5.categoryTreeData);
          } else {
            // Lazy loaded children
            _this5.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);

    // papathemes-beautify: fix accessibility
    $container.on('ready.jstree, redraw.jstree', function () {
      return $container.find('.jstree-node').removeAttr('aria-selected');
    });
    $container.on('changed.jstree', function (event, node) {
      node.event.currentTarget.closest('.jstree-node').removeAttr('aria-selected');
    });
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this6 = this;
    var _this$validationDicti = this.validationDictionary,
      onMinPriceError = _this$validationDicti.price_min_evaluation,
      onMaxPriceError = _this$validationDicti.price_max_evaluation,
      minPriceNotEntered = _this$validationDicti.price_min_not_entered,
      maxPriceNotEntered = _this$validationDicti.price_max_not_entered,
      onInvalidPrice = _this$validationDicti.price_invalid_value;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var $searchHeading = $('#search-results-heading');
    var $searchCount = $('#search-results-product-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_2__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $searchHeading.html(content.heading);
      $searchCount.html(content.productCount);
      $('body').triggerHandler('compareReset');

      // Papathemes - Bulk Order
      if (_this6.bulkOrder) {
        _this6.bulkOrder.reinit();
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
  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form
    });
    return this;
  };
  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }
    return this;
  };
  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }
    return false;
  };
  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwidXJsIiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VjdGlvbiIsIiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciIsInJlbW92ZUNsYXNzIiwiJGZhY2V0ZWRTZWFyY2hDb250YWluZXIiLCIkY29udGVudFJlc3VsdHNDb250YWluZXIiLCJhZGRDbGFzcyIsIiQiLCJnb1RvVXJsIiwic2hvd0NvbnRlbnQiLCJvblJlYWR5IiwiY29tcGFyZVByb2R1Y3RzIiwiJHNlYXJjaEZvcm0iLCIkY2F0ZWdvcnlUcmVlQ29udGFpbmVyIiwiZmluZCIsIlVybCIsInBhcnNlIiwidHJlZURhdGEiLCJzaG93X2J1bGtfb3JkZXJfbW9kZSIsInVzZUJ1bGtPcmRlciIsImJ1bGtPcmRlciIsImJ1bGtPcmRlckZhY3RvcnkiLCJhY3Rpb25CYXJGYWN0b3J5IiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5IiwidmFsaWRhdG9yIiwiaW5pdFZhbGlkYXRpb24iLCJiaW5kVmFsaWRhdGlvbiIsImNhdGVnb3J5VHJlZSIsImNhdGVnb3J5VHJlZURhdGEiLCJjcmVhdGVDYXRlZ29yeVRyZWUiLCJzZWxlY3RlZENhdGVnb3J5SWRzIiwianN0cmVlIiwiZ2V0X3NlbGVjdGVkIiwiY2hlY2siLCJyZW1vdmUiLCJjYXRlZ29yeUlkIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwiZGVzdHJveSIsImZhY2V0ZWRTZWFyY2giLCJvZmYiLCJsb2FkVHJlZU5vZGVzIiwiY2IiLCJhamF4Iiwic2VsZWN0ZWRDYXRlZ29yeUlkIiwicHJlZml4IiwiaGVhZGVycyIsIkJDRGF0YSIsImNzcmZfdG9rZW4iLCJkb25lIiwiZm9ybWF0dGVkUmVzdWx0cyIsImRhdGFOb2RlIiwiJGNvbnRhaW5lciIsInRyZWVPcHRpb25zIiwiY29yZSIsInRoZW1lcyIsImljb25zIiwiY2hlY2tib3giLCJ0aHJlZV9zdGF0ZSIsInBsdWdpbnMiLCJyZW1vdmVBdHRyIiwiY3VycmVudFRhcmdldCIsImNsb3Nlc3QiLCJvbk1pblByaWNlRXJyb3IiLCJwcmljZV9taW5fZXZhbHVhdGlvbiIsIm9uTWF4UHJpY2VFcnJvciIsInByaWNlX21heF9ldmFsdWF0aW9uIiwibWluUHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWluX25vdF9lbnRlcmVkIiwibWF4UHJpY2VOb3RFbnRlcmVkIiwicHJpY2VfbWF4X25vdF9lbnRlcmVkIiwib25JbnZhbGlkUHJpY2UiLCJwcmljZV9pbnZhbGlkX3ZhbHVlIiwiJHNlYXJjaEhlYWRpbmciLCIkc2VhcmNoQ291bnQiLCJwcm9kdWN0c1BlclBhZ2UiLCJzZWFyY2hQcm9kdWN0c1BlclBhZ2UiLCJyZXF1ZXN0T3B0aW9ucyIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwiaGVhZGluZyIsInByb2R1Y3RDb3VudCIsImNvbmZpZyIsInByb2R1Y3RfcmVzdWx0cyIsImxpbWl0Iiwic2hvd01vcmUiLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsInJlaW5pdCIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ2YWxpZGF0aW9uRXJyb3JNZXNzYWdlcyIsIiRmb3JtIiwibm9kIiwic3VibWl0IiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNnQjtBQUNtQztBQUN2RjtBQUNBO0FBQzZEO0FBQ2I7QUFDMUI7QUFDZ0M7QUFDdEM7QUFDZTtBQUN5QixDQUFDO0FBQ0Q7QUFBQSxJQUVuQ0EsTUFBTTtFQUFBO0VBQ3ZCLGdCQUFZQyxPQUFPLEVBQUU7SUFBQTtJQUNqQixnQ0FBTUEsT0FBTyxDQUFDO0lBQ2QsTUFBS0Msb0JBQW9CLEdBQUdDLDBHQUEyQixDQUFDRixPQUFPLENBQUM7SUFBQztFQUNyRTtFQUFDO0VBQUEsT0FFREcsMkJBQTJCLEdBQTNCLHFDQUE0QkMsSUFBSSxFQUFFO0lBQUE7SUFDOUIsSUFBTUMsUUFBUSxHQUFHO01BQ2JDLElBQUksRUFBRUYsSUFBSSxDQUFDRyxJQUFJO01BQ2ZDLEVBQUUsRUFBRUosSUFBSSxDQUFDSyxRQUFRLENBQUNELEVBQUU7TUFDcEJFLEtBQUssRUFBRTtRQUNIQyxRQUFRLEVBQUVQLElBQUksQ0FBQ087TUFDbkI7SUFDSixDQUFDO0lBRUQsSUFBSVAsSUFBSSxDQUFDTSxLQUFLLEVBQUU7TUFDWkwsUUFBUSxDQUFDSyxLQUFLLENBQUNFLE1BQU0sR0FBR1IsSUFBSSxDQUFDTSxLQUFLLEtBQUssTUFBTTtNQUM3Q0wsUUFBUSxDQUFDUSxRQUFRLEdBQUcsSUFBSTtJQUM1QjtJQUVBLElBQUlULElBQUksQ0FBQ1MsUUFBUSxFQUFFO01BQ2ZSLFFBQVEsQ0FBQ1EsUUFBUSxHQUFHLEVBQUU7TUFDdEJULElBQUksQ0FBQ1MsUUFBUSxDQUFDQyxPQUFPLENBQUMsVUFBQ0MsU0FBUyxFQUFLO1FBQ2pDVixRQUFRLENBQUNRLFFBQVEs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Q3JCL0IsZUFBZSxFQUFmQSxlQUFlO1FBQ2ZFLGVBQWUsRUFBZkEsZUFBZTtRQUNmRSxrQkFBa0IsRUFBbEJBLGtCQUFrQjtRQUNsQkUsa0JBQWtCLEVBQWxCQSxrQkFBa0I7UUFDbEJFLGNBQWMsRUFBZEE7TUFDSjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUVEakQsY0FBYyxHQUFkLHdCQUFleUUsS0FBSyxFQUFFO0lBQ2xCLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQzFFLFNBQVMsR0FBRzJFLDJEQUFHLENBQUM7TUFDakJDLE1BQU0sRUFBRUY7SUFDWixDQUFDLENBQUM7SUFFRixPQUFPLElBQUk7RUFDZixDQUFDO0VBQUEsT0FFRHhFLGNBQWMsR0FBZCx3QkFBZTJFLFFBQVEsRUFBRTtJQUNyQixJQUFJLElBQUksQ0FBQzdFLFNBQVMsRUFBRTtNQUNoQixJQUFJLENBQUNBLFNBQVMsQ0FBQzhFLEdBQUcsQ0FBQztRQUNmQyxRQUFRLEVBQUVGLFFBQVE7UUFDbEJHLFFBQVEsRUFBRSxVQUFVO1FBQ3BCQyxZQUFZLEVBQUVKLFFBQVEsQ0FBQzlILElBQUksQ0FBQyxjQUFjO01BQzlDLENBQUMsQ0FBQztJQUNOO0lBRUEsT0FBTyxJQUFJO0VBQ2YsQ0FBQztFQUFBLE9BRUQwRCxLQUFLLEdBQUwsaUJBQVE7SUFDSixJQUFJLElBQUksQ0FBQ1QsU0FBUyxFQUFFO01BQ2hCLElBQUksQ0FBQ0EsU0FBUyxDQUFDa0YsWUFBWSxFQUFFO01BQzdCLE9BQU8sSUFBSSxDQUFDbEYsU0FBUyxDQUFDbUYsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUN6QztJQUVBLE9BQU8sS0FBSztFQUNoQixDQUFDO0VBQUE7QUFBQSxFQWxTK0JDLGdEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhvb2tzIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcbi8vIFN1cGVybWFya2V0IE1vZFxuLy8gaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi4vcGFwYXRoZW1lcy9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgJ2pzdHJlZSc7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgYWN0aW9uQmFyRmFjdG9yeSBmcm9tICcuLi9wYXBhdGhlbWVzL2FjdGlvbi1iYXInOyAvLyBQYXBhdGhlbWVzIC0gU3VwZXJtYXJrZXRcbmltcG9ydCBidWxrT3JkZXJGYWN0b3J5IGZyb20gJy4uL3BhcGF0aGVtZXMvYnVsay1vcmRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCBleHRlbmRzIENhdGFsb2dQYWdlIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5ID0gY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSB7XG4gICAgICAgIGNvbnN0IG5vZGVEYXRhID0ge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxuICAgICAgICAgICAgaWQ6IG5vZGUubWV0YWRhdGEuaWQsXG4gICAgICAgICAgICBzdGF0ZToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAobm9kZS5zdGF0ZSkge1xuICAgICAgICAgICAgbm9kZURhdGEuc3RhdGUub3BlbmVkID0gbm9kZS5zdGF0ZSA9PT0gJ29wZW4nO1xuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlRGF0YTtcbiAgICB9XG5cbiAgICBzaG93UHJvZHVjdHMoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMod2luZG93LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgIHNlY3Rpb246ICdwcm9kdWN0JyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IHVybFV0aWxzLnJlcGxhY2VQYXJhbXMod2luZG93LmxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgIHNlY3Rpb246ICdjb250ZW50JyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kY29udGVudFJlc3VsdHNDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIuYWRkQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24tY29sb3ItLWFjdGl2ZScpO1xuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XG5cbiAgICAgICAgJCgnW2RhdGEtY29udGVudC1yZXN1bHRzLXRvZ2dsZV0nKS5yZW1vdmVDbGFzcygnbmF2QmFyLWFjdGlvbicpO1xuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gU3VwZXJtYXJrZXQgTW9kXG4gICAgICAgIC8vIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQpO1xuXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRjYXRlZ29yeVRyZWVDb250YWluZXIgPSAkc2VhcmNoRm9ybS5maW5kKCdbZGF0YS1zZWFyY2gtY2F0ZWdvcnktdHJlZV0nKTtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcbiAgICAgICAgdGhpcy4kcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XG5cbiAgICAgICAgLy8gUGFwYXRoZW1lcyAtIEJ1bGsgT3JkZXJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dCAmJiAodGhpcy5jb250ZXh0LnNob3dfYnVsa19vcmRlcl9tb2RlIHx8IHRoaXMuY29udGV4dC51c2VCdWxrT3JkZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmJ1bGtPcmRlciA9IGJ1bGtPcmRlckZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFjdGlvbkJhckZhY3RvcnkoKTsgLy8gUGFwYXRoZW1lcyAtIFN1cGVybWFya2V0XG5cbiAgICAgICAgLy8gSW5pdCBmYWNldGVkIHNlYXJjaFxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXQgY29sbGFwc2libGVzXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmZpbmQoJ2xpLnByb2R1Y3QnKS5sZW5ndGggPT09IDAgfHwgdXJsLnF1ZXJ5LnNlY3Rpb24gPT09ICdjb250ZW50Jykge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IHRoaXMuaW5pdFZhbGlkYXRpb24oJHNlYXJjaEZvcm0pXG4gICAgICAgICAgICAuYmluZFZhbGlkYXRpb24oJHNlYXJjaEZvcm0uZmluZCgnI3NlYXJjaF9xdWVyeV9hZHYnKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmNhdGVnb3J5VHJlZS5mb3JFYWNoKChub2RlKSA9PiB7XG4gICAgICAgICAgICB0cmVlRGF0YS5wdXNoKHRoaXMuZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yeVRyZWVEYXRhID0gdHJlZURhdGE7XG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xuXG4gICAgICAgICRzZWFyY2hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcblxuICAgICAgICAgICAgaWYgKCF2YWxpZGF0b3IuY2hlY2soKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjYXRlZ29yeUlkIG9mIHNlbGVjdGVkQ2F0ZWdvcnlJZHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnY2F0ZWdvcnlbXScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU3VwZXJtYXJrZXRcbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5mYWNldGVkU2VhcmNoKSB7XG4gICAgICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2guZGVzdHJveSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaG9va3Mub2ZmKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2FkVHJlZU5vZGVzKG5vZGUsIGNiKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvcmVtb3RlL3YxL2NhdGVnb3J5LXRyZWUnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkQ2F0ZWdvcnlJZDogbm9kZS5pZCxcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICdjYXRlZ29yeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSkuZG9uZShkYXRhID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSBbXTtcblxuICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChkYXRhTm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFJlc3VsdHMucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShkYXRhTm9kZSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKGZvcm1hdHRlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXRlZ29yeVRyZWUoJGNvbnRhaW5lcikge1xuICAgICAgICBjb25zdCB0cmVlT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvcmU6IHtcbiAgICAgICAgICAgICAgICBkYXRhOiAobm9kZSwgY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUm9vdCBub2RlXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5IGxvYWRlZCBjaGlsZHJlblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkVHJlZU5vZGVzKG5vZGUsIGNiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGhlbWVzOiB7XG4gICAgICAgICAgICAgICAgICAgIGljb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tib3g6IHtcbiAgICAgICAgICAgICAgICB0aHJlZV9zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGx1Z2luczogW1xuICAgICAgICAgICAgICAgICdjaGVja2JveCcsXG4gICAgICAgICAgICBdLFxuICAgICAgICB9O1xuXG4gICAgICAgICRjb250YWluZXIuanN0cmVlKHRyZWVPcHRpb25zKTtcblxuICAgICAgICAvLyBwYXBhdGhlbWVzLWJlYXV0aWZ5OiBmaXggYWNjZXNzaWJpbGl0eVxuICAgICAgICAkY29udGFpbmVyLm9uKCdyZWFkeS5qc3RyZWUsIHJlZHJhdy5qc3RyZWUnLCAoKSA9PiAkY29udGFpbmVyLmZpbmQoJy5qc3RyZWUtbm9kZScpLnJlbW92ZUF0dHIoJ2FyaWEtc2VsZWN0ZWQnKSk7XG4gICAgICAgICRjb250YWluZXIub24oJ2NoYW5nZWQuanN0cmVlJywgKGV2ZW50LCBub2RlKSA9PiB7XG4gICAgICAgICAgICBub2RlLmV2ZW50LmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnLmpzdHJlZS1ub2RlJykucmVtb3ZlQXR0cignYXJpYS1zZWxlY3RlZCcpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgIHByaWNlX21heF9ldmFsdWF0aW9uOiBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICBwcmljZV9taW5fbm90X2VudGVyZWQ6IG1pblByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgcHJpY2VfaW52YWxpZF92YWx1ZTogb25JbnZhbGlkUHJpY2UsXG4gICAgICAgIH0gPSB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5O1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJHNlYXJjaEhlYWRpbmcgPSAkKCcjc2VhcmNoLXJlc3VsdHMtaGVhZGluZycpO1xuICAgICAgICBjb25zdCAkc2VhcmNoQ291bnQgPSAkKCcjc2VhcmNoLXJlc3VsdHMtcHJvZHVjdC1jb3VudCcpO1xuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxuICAgICAgICAgICAgICAgIGhlYWRpbmc6ICdzZWFyY2gvaGVhZGluZycsXG4gICAgICAgICAgICAgICAgcHJvZHVjdENvdW50OiAnc2VhcmNoL3Byb2R1Y3QtY291bnQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RfcmVzdWx0czoge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuICAgICAgICAgICAgJHNlYXJjaEhlYWRpbmcuaHRtbChjb250ZW50LmhlYWRpbmcpO1xuICAgICAgICAgICAgJHNlYXJjaENvdW50Lmh0bWwoY29udGVudC5wcm9kdWN0Q291bnQpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAvLyBQYXBhdGhlbWVzIC0gQnVsayBPcmRlclxuICAgICAgICAgICAgaWYgKHRoaXMuYnVsa09yZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idWxrT3JkZXIucmVpbml0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9LCB7XG4gICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3JNZXNzYWdlczoge1xuICAgICAgICAgICAgICAgIG9uTWluUHJpY2VFcnJvcixcbiAgICAgICAgICAgICAgICBvbk1heFByaWNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbWluUHJpY2VOb3RFbnRlcmVkLFxuICAgICAgICAgICAgICAgIG1heFByaWNlTm90RW50ZXJlZCxcbiAgICAgICAgICAgICAgICBvbkludmFsaWRQcmljZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRWYWxpZGF0aW9uKCRmb3JtKSB7XG4gICAgICAgIHRoaXMuJGZvcm0gPSAkZm9ybTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkZm9ybSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYmluZFZhbGlkYXRpb24oJGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAkZWxlbWVudCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBjaGVjaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==