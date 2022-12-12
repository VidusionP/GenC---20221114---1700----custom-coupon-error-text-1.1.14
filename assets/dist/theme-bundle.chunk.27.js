(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../page-manager */ "./assets/js/page-manager.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Brands = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Brands, _PageManager);
  function Brands() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Brands.prototype;
  _proto.onReady = function onReady() {
    this.showMoreBrands();
  };
  _proto.showMoreBrands = function showMoreBrands() {
    $('.button--showmore').on('click', function (event) {
      event.preventDefault();
      var nextPage = $(".pagination-item--current").next(),
        link = nextPage.find("a").attr("href");
      $('#listing-showmoreBtn > a').addClass('loading');
      $.ajax({
        type: 'get',
        url: link.replace("http://", "//"),
        success: function success(data) {
          if ($(data).find('#brand-listing-container').length > 0) {
            $('#brand-listing-container').append($(data).find('#brand-listing-container').children());
            $('.pagination-list').html($(data).find(".pagination-list").html());
            $('#listing-showmoreBtn > a').removeClass('loading').blur();
            if (Number($(data).find('.pagination-info .end').text()) <= Number($(data).find('.pagination-info .total').text())) {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .end').text());
            } else {
              $('.pagination .pagination-info .end').text($(data).find('.pagination-info .total').text());
            }
            nextPage = $(".pagination-item--current").next();
            if (nextPage.length === 0) {
              $('#listing-showmoreBtn').addClass('pagination-disable').text('No more brands');
            }
          }
        }
      });
    });
  };
  return Brands;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIl0sIm5hbWVzIjpbIkJyYW5kcyIsIm9uUmVhZHkiLCJzaG93TW9yZUJyYW5kcyIsIiQiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXh0UGFnZSIsIm5leHQiLCJsaW5rIiwiZmluZCIsImF0dHIiLCJhZGRDbGFzcyIsImFqYXgiLCJ0eXBlIiwidXJsIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkYXRhIiwibGVuZ3RoIiwiYXBwZW5kIiwiY2hpbGRyZW4iLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJibHVyIiwiTnVtYmVyIiwidGV4dCIsIlBhZ2VNYW5hZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEM7QUFBQSxJQUVyQkEsTUFBTTtFQUFBO0VBQUE7SUFBQTtFQUFBO0VBQUE7RUFBQSxPQUN2QkMsT0FBTyxHQUFQLG1CQUFVO0lBQ04sSUFBSSxDQUFDQyxjQUFjLEVBQUU7RUFDekIsQ0FBQztFQUFBLE9BQ0RBLGNBQWMsR0FBZCwwQkFBaUI7SUFFYkMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUNDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ0MsS0FBSyxFQUFLO01BQzFDQSxLQUFLLENBQUNDLGNBQWMsRUFBRTtNQUN0QixJQUFJQyxRQUFRLEdBQUdKLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDSyxJQUFJLEVBQUU7UUFDaERDLElBQUksR0FBR0YsUUFBUSxDQUFDRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxNQUFNLENBQUM7TUFDMUNSLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDUyxRQUFRLENBQUMsU0FBUyxDQUFDO01BRWpEVCxDQUFDLENBQUNVLElBQUksQ0FBQztRQUNIQyxJQUFJLEVBQUUsS0FBSztRQUNYQyxHQUFHLEVBQUVOLElBQUksQ0FBQ08sT0FBTyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7UUFDbENDLE9BQU8sRUFBRSxpQkFBU0MsSUFBSSxFQUFFO1VBQ3BCLElBQUlmLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLENBQUNSLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBRXJEaEIsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUNpQixNQUFNLENBQUNqQixDQUFDLENBQUNlLElBQUksQ0FBQyxDQUFDUixJQUFJLENBQUMsMEJBQTBCLENBQUMsQ0FBQ1csUUFBUSxFQUFFLENBQUM7WUFFekZsQixDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQ21CLElBQUksQ0FBQ25CLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLENBQUNSLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDWSxJQUFJLEVBQUUsQ0FBQztZQUVuRW5CLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDb0IsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDQyxJQUFJLEVBQUU7WUFFM0QsSUFBSUMsTUFBTSxDQUFDdEIsQ0FBQyxDQUFDZSxJQUFJLENBQUMsQ0FBQ1IsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUNnQixJQUFJLEVBQUUsQ0FBQyxJQUFJRCxNQUFNLENBQUN0QixDQUFDLENBQUNlLElBQUksQ0FBQyxDQUFDUixJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQ2dCLElBQUksRUFBRSxDQUFDLEVBQUU7Y0FDaEh2QixDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ3VCLElBQUksQ0FBQ3ZCLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLENBQUNSLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDZ0IsSUFBSSxFQUFFLENBQUM7WUFDN0YsQ0FBQyxNQUFNO2NBQ0h2QixDQUFDLENBQUMsbUNBQW1DLENBQUMsQ0FBQ3VCLElBQUksQ0FBQ3ZCLENBQUMsQ0FBQ2UsSUFBSSxDQUFDLENBQUNSLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDZ0IsSUFBSSxFQUFFLENBQUM7WUFDL0Y7WUFFQW5CLFFBQVEsR0FBR0osQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUNLLElBQUksRUFBRTtZQUVoRCxJQUFJRCxRQUFRLENBQUNZLE1BQU0sS0FBSyxDQUFDLEVBQUU7Y0FDdkJoQixDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQ1MsUUFBUSxDQUFDLG9CQUFvQixDQUFDLENBQUNjLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUNuRjtVQUNKO1FBQ0o7TUFDSixDQUFDLENBQUM7SUFDTixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUE7QUFBQSxFQXZDK0JDLHFEQUFXIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yNy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuLi9wYWdlLW1hbmFnZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmRzIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xyXG4gICAgb25SZWFkeSgpIHtcclxuICAgICAgICB0aGlzLnNob3dNb3JlQnJhbmRzKCk7XHJcbiAgICB9XHJcbiAgICBzaG93TW9yZUJyYW5kcygpIHtcclxuXHJcbiAgICAgICAgJCgnLmJ1dHRvbi0tc2hvd21vcmUnKS5vbignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgdmFyIG5leHRQYWdlID0gJChcIi5wYWdpbmF0aW9uLWl0ZW0tLWN1cnJlbnRcIikubmV4dCgpLFxyXG4gICAgICAgICAgICAgICAgbGluayA9IG5leHRQYWdlLmZpbmQoXCJhXCIpLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5hZGRDbGFzcygnbG9hZGluZycpO1xyXG5cclxuICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdnZXQnLFxyXG4gICAgICAgICAgICAgICAgdXJsOiBsaW5rLnJlcGxhY2UoXCJodHRwOi8vXCIsIFwiLy9cIiksXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZGF0YSkuZmluZCgnI2JyYW5kLWxpc3RpbmctY29udGFpbmVyJykubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2JyYW5kLWxpc3RpbmctY29udGFpbmVyJykuYXBwZW5kKCQoZGF0YSkuZmluZCgnI2JyYW5kLWxpc3RpbmctY29udGFpbmVyJykuY2hpbGRyZW4oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbi1saXN0JykuaHRtbCgkKGRhdGEpLmZpbmQoXCIucGFnaW5hdGlvbi1saXN0XCIpLmh0bWwoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjbGlzdGluZy1zaG93bW9yZUJ0biA+IGEnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpLmJsdXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChOdW1iZXIoJChkYXRhKS5maW5kKCcucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCkpIDw9IE51bWJlcigkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLnRvdGFsJykudGV4dCgpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24gLnBhZ2luYXRpb24taW5mbyAuZW5kJykudGV4dCgkKGRhdGEpLmZpbmQoJy5wYWdpbmF0aW9uLWluZm8gLmVuZCcpLnRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcucGFnaW5hdGlvbiAucGFnaW5hdGlvbi1pbmZvIC5lbmQnKS50ZXh0KCQoZGF0YSkuZmluZCgnLnBhZ2luYXRpb24taW5mbyAudG90YWwnKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UGFnZSA9ICQoXCIucGFnaW5hdGlvbi1pdGVtLS1jdXJyZW50XCIpLm5leHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0UGFnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyNsaXN0aW5nLXNob3dtb3JlQnRuJykuYWRkQ2xhc3MoJ3BhZ2luYXRpb24tZGlzYWJsZScpLnRleHQoJ05vIG1vcmUgYnJhbmRzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=