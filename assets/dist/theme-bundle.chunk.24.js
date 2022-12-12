(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./assets/js/papathemes/dropdown-swatches.js":
/*!***************************************************!*\
  !*** ./assets/js/papathemes/dropdown-swatches.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! selectize */ "./node_modules/selectize/dist/js/standalone/selectize.min.js");
/* harmony import */ var selectize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(selectize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var selectize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! selectize-css */ "./node_modules/selectize/dist/css/selectize.css");


/* harmony default export */ __webpack_exports__["default"] = (function (product, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$swatchFieldSelec = _ref.swatchFieldSelector,
    swatchFieldSelector = _ref$swatchFieldSelec === void 0 ? 'form[data-cart-item-add] [data-product-option-change] [data-product-attribute="swatch"]' : _ref$swatchFieldSelec,
    _ref$getSwatchLabelFr = _ref.getSwatchLabelFromInput,
    getSwatchLabelFromInput = _ref$getSwatchLabelFr === void 0 ? function (inputEl) {
      return $(inputEl).next().children().first().attr('title');
    } : _ref$getSwatchLabelFr,
    _ref$getSwatchImageHT = _ref.getSwatchImageHTMLFromInput,
    getSwatchImageHTMLFromInput = _ref$getSwatchImageHT === void 0 ? function (inputEl) {
      return $(inputEl).next().html();
    } : _ref$getSwatchImageHT,
    _ref$isSwatchHidden = _ref.isSwatchHidden,
    isSwatchHidden = _ref$isSwatchHidden === void 0 ? function (inputEl) {
      return $(inputEl).next().is(':hidden');
    } : _ref$isSwatchHidden,
    _ref$isSwatchUnavaila = _ref.isSwatchUnavailable,
    isSwatchUnavailable = _ref$isSwatchUnavaila === void 0 ? function (inputEl) {
      return $(inputEl).next().hasClass('unavailable');
    } : _ref$isSwatchUnavaila,
    _ref$renderSelect = _ref.renderSelect,
    renderSelect = _ref$renderSelect === void 0 ? function ($formField, $select) {
      return $formField.find('.form-label').first().after($select);
    } : _ref$renderSelect,
    _ref$hideOriginalSwat = _ref.hideOriginalSwatches,
    hideOriginalSwatches = _ref$hideOriginalSwat === void 0 ? false : _ref$hideOriginalSwat,
    _ref$hideOriginalSwat2 = _ref.hideOriginalSwatchesFunc,
    hideOriginalSwatchesFunc = _ref$hideOriginalSwat2 === void 0 ? function ($formField) {
      return $formField.children('.form-option-swatch, .form-radio').css({
        position: 'absolute',
        visibility: 'hidden',
        height: 0,
        width: 0,
        overflow: 'hidden',
        margin: 0
      });
    } : _ref$hideOriginalSwat2;
  product.$scope.find(swatchFieldSelector).not('._dropdownSwatchesLoaded').addClass('_dropdownSwatchesLoaded').get().map(function (el) {
    return $(el);
  }).forEach(function ($formField) {
    var $inputs = $formField.find('input');
    var selectId = "chiara__dropdownSwatches-" + String($inputs.first().attr('name')).replace(/attribute\[(.*)\]/, 'attribute_$1');

    // Hidden select for initializing Selectize
    var $select = $("<select class=\"chiara__dropdownSwatches\" id=\"" + selectId + "\"><option value=\"\">" + product.context.txtSelectOne + "</option></select>").hide().on('change', function (event) {
      // Stop the form's change event
      event.preventDefault();
      event.stopPropagation();
    });

    // Populate the hidden select options
    $inputs.each(function (i, el) {
      var label = getSwatchLabelFromInput(el);
      $select.append("<option value=\"" + $(el).attr('value') + "\" title=\"" + label + "\" " + (el.checked ? 'selected' : '') + ">" + label + "</option>");
    });

    // Insert the hidden select to the form field
    renderSelect($formField, $select);

    // Hide the original swatches if specified
    if (hideOriginalSwatches) {
      hideOriginalSwatchesFunc($formField);
    }

    // Add label for accessibility compliance
    $select.after("<label class=\"is-srOnly\" for=\"" + selectId + "-selectized\">" + product.context.txtSelectOne + "</label>");

    // Initialize 'Selectize' select box
    $select.selectize({
      copyClassesToDropdown: true,
      render: {
        item: function item(_item, escape) {
          var $input = $inputs.filter("[value=\"" + _item.value + "\"]");
          return "\n                            <div class=\"_item " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(_item.text) + "</span>\n                            </div>\n                        ";
        },
        option: function option(item, escape) {
          var $input = $inputs.filter("[value=\"" + item.value + "\"]");
          return "\n                            <div class=\"_option " + (isSwatchUnavailable($input) ? 'unavailable' : '') + "\" " + (isSwatchHidden($input) ? 'style="display:none"' : '') + ">\n                                <span class=\"_img\">" + getSwatchImageHTMLFromInput($input) + "</span>\n                                <span class=\"_text\">" + escape(item.text) + "</span>\n                            </div>\n                        ";
        }
      }
    });
    var selectize = $select[0].selectize;

    // Select the original swatch when the dropdown swatch selected
    selectize.on('change', function () {
      // console.log('selectize change');
      $inputs.filter("[value=\"" + $select.val() + "\"]").trigger('click');
    });

    // Select the dropdown swatch when the original swatch selected
    product.$scope.find('[data-product-option-change]').on('change', function (event) {
      // console.log('data-product-option-change change');
      var value = $inputs.filter(':checked').val();
      selectize.setValue(value, true);
    });

    // Update 'Selectize' options when the availablity of the original swatches changed
    product.$scope.first().on('updateProductAttributes', function () {
      // console.log('updateProductAttributes');
      var value = $inputs.filter(':checked').val();
      selectize.clearCache();
      selectize.clear(true);
      selectize.setValue(value, true);
      selectize.refreshOptions(false);
    });
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcGFwYXRoZW1lcy9kcm9wZG93bi1zd2F0Y2hlcy5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0Iiwic3dhdGNoRmllbGRTZWxlY3RvciIsImdldFN3YXRjaExhYmVsRnJvbUlucHV0IiwiaW5wdXRFbCIsIiQiLCJuZXh0IiwiY2hpbGRyZW4iLCJmaXJzdCIsImF0dHIiLCJnZXRTd2F0Y2hJbWFnZUhUTUxGcm9tSW5wdXQiLCJodG1sIiwiaXNTd2F0Y2hIaWRkZW4iLCJpcyIsImlzU3dhdGNoVW5hdmFpbGFibGUiLCJoYXNDbGFzcyIsInJlbmRlclNlbGVjdCIsIiRmb3JtRmllbGQiLCIkc2VsZWN0IiwiZmluZCIsImFmdGVyIiwiaGlkZU9yaWdpbmFsU3dhdGNoZXMiLCJoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMiLCJjc3MiLCJwb3NpdGlvbiIsInZpc2liaWxpdHkiLCJoZWlnaHQiLCJ3aWR0aCIsIm92ZXJmbG93IiwibWFyZ2luIiwiJHNjb3BlIiwibm90IiwiYWRkQ2xhc3MiLCJnZXQiLCJtYXAiLCJlbCIsImZvckVhY2giLCIkaW5wdXRzIiwic2VsZWN0SWQiLCJTdHJpbmciLCJyZXBsYWNlIiwiY29udGV4dCIsInR4dFNlbGVjdE9uZSIsImhpZGUiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJlYWNoIiwiaSIsImxhYmVsIiwiYXBwZW5kIiwiY2hlY2tlZCIsInNlbGVjdGl6ZSIsImNvcHlDbGFzc2VzVG9Ecm9wZG93biIsInJlbmRlciIsIml0ZW0iLCJlc2NhcGUiLCIkaW5wdXQiLCJmaWx0ZXIiLCJ2YWx1ZSIsInRleHQiLCJvcHRpb24iLCJ2YWwiLCJ0cmlnZ2VyIiwic2V0VmFsdWUiLCJjbGVhckNhY2hlIiwiY2xlYXIiLCJyZWZyZXNoT3B0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1CO0FBQ0k7QUFFUix5RUFB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QUssRUFBRSxJQUFJLENBQUM7TUFDL0JQLFNBQVMsQ0FBQ2UsY0FBYyxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDLENBQUM7RUFDTixDQUFDLENBQUM7QUFDVixDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4yNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc2VsZWN0aXplJztcbmltcG9ydCAnc2VsZWN0aXplLWNzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHByb2R1Y3QsIHtcbiAgICBzd2F0Y2hGaWVsZFNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jYXJ0LWl0ZW0tYWRkXSBbZGF0YS1wcm9kdWN0LW9wdGlvbi1jaGFuZ2VdIFtkYXRhLXByb2R1Y3QtYXR0cmlidXRlPVwic3dhdGNoXCJdJyxcbiAgICBnZXRTd2F0Y2hMYWJlbEZyb21JbnB1dCA9IGlucHV0RWwgPT4gJChpbnB1dEVsKS5uZXh0KCkuY2hpbGRyZW4oKS5maXJzdCgpLmF0dHIoJ3RpdGxlJyksXG4gICAgZ2V0U3dhdGNoSW1hZ2VIVE1MRnJvbUlucHV0ID0gaW5wdXRFbCA9PiAkKGlucHV0RWwpLm5leHQoKS5odG1sKCksXG4gICAgaXNTd2F0Y2hIaWRkZW4gPSBpbnB1dEVsID0+ICQoaW5wdXRFbCkubmV4dCgpLmlzKCc6aGlkZGVuJyksXG4gICAgaXNTd2F0Y2hVbmF2YWlsYWJsZSA9IGlucHV0RWwgPT4gJChpbnB1dEVsKS5uZXh0KCkuaGFzQ2xhc3MoJ3VuYXZhaWxhYmxlJyksXG4gICAgcmVuZGVyU2VsZWN0ID0gKCRmb3JtRmllbGQsICRzZWxlY3QpID0+ICRmb3JtRmllbGQuZmluZCgnLmZvcm0tbGFiZWwnKS5maXJzdCgpLmFmdGVyKCRzZWxlY3QpLFxuICAgIGhpZGVPcmlnaW5hbFN3YXRjaGVzID0gZmFsc2UsXG4gICAgaGlkZU9yaWdpbmFsU3dhdGNoZXNGdW5jID0gJGZvcm1GaWVsZCA9PiAkZm9ybUZpZWxkLmNoaWxkcmVuKCcuZm9ybS1vcHRpb24tc3dhdGNoLCAuZm9ybS1yYWRpbycpLmNzcyh7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgfSksXG59ID0ge30pIHtcbiAgICBwcm9kdWN0LiRzY29wZS5maW5kKHN3YXRjaEZpZWxkU2VsZWN0b3IpLm5vdCgnLl9kcm9wZG93blN3YXRjaGVzTG9hZGVkJylcbiAgICAgICAgLmFkZENsYXNzKCdfZHJvcGRvd25Td2F0Y2hlc0xvYWRlZCcpXG4gICAgICAgIC5nZXQoKVxuICAgICAgICAubWFwKGVsID0+ICQoZWwpKVxuICAgICAgICAuZm9yRWFjaCgkZm9ybUZpZWxkID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybUZpZWxkLmZpbmQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RJZCA9IGBjaGlhcmFfX2Ryb3Bkb3duU3dhdGNoZXMtJHtTdHJpbmcoJGlucHV0cy5maXJzdCgpLmF0dHIoJ25hbWUnKSkucmVwbGFjZSgvYXR0cmlidXRlXFxbKC4qKVxcXS8sICdhdHRyaWJ1dGVfJDEnKX1gO1xuXG4gICAgICAgICAgICAvLyBIaWRkZW4gc2VsZWN0IGZvciBpbml0aWFsaXppbmcgU2VsZWN0aXplXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChgPHNlbGVjdCBjbGFzcz1cImNoaWFyYV9fZHJvcGRvd25Td2F0Y2hlc1wiIGlkPVwiJHtzZWxlY3RJZH1cIj48b3B0aW9uIHZhbHVlPVwiXCI+JHtwcm9kdWN0LmNvbnRleHQudHh0U2VsZWN0T25lfTwvb3B0aW9uPjwvc2VsZWN0PmApXG4gICAgICAgICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgICAgICAgIC5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHRoZSBmb3JtJ3MgY2hhbmdlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBQb3B1bGF0ZSB0aGUgaGlkZGVuIHNlbGVjdCBvcHRpb25zXG4gICAgICAgICAgICAkaW5wdXRzLmVhY2goKGksIGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBnZXRTd2F0Y2hMYWJlbEZyb21JbnB1dChlbCk7XG4gICAgICAgICAgICAgICAgJHNlbGVjdC5hcHBlbmQoYDxvcHRpb24gdmFsdWU9XCIkeyQoZWwpLmF0dHIoJ3ZhbHVlJyl9XCIgdGl0bGU9XCIke2xhYmVsfVwiICR7ZWwuY2hlY2tlZCA/ICdzZWxlY3RlZCcgOiAnJ30+JHtsYWJlbH08L29wdGlvbj5gKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBJbnNlcnQgdGhlIGhpZGRlbiBzZWxlY3QgdG8gdGhlIGZvcm0gZmllbGRcbiAgICAgICAgICAgIHJlbmRlclNlbGVjdCgkZm9ybUZpZWxkLCAkc2VsZWN0KTtcblxuICAgICAgICAgICAgLy8gSGlkZSB0aGUgb3JpZ2luYWwgc3dhdGNoZXMgaWYgc3BlY2lmaWVkXG4gICAgICAgICAgICBpZiAoaGlkZU9yaWdpbmFsU3dhdGNoZXMpIHtcbiAgICAgICAgICAgICAgICBoaWRlT3JpZ2luYWxTd2F0Y2hlc0Z1bmMoJGZvcm1GaWVsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEFkZCBsYWJlbCBmb3IgYWNjZXNzaWJpbGl0eSBjb21wbGlhbmNlXG4gICAgICAgICAgICAkc2VsZWN0LmFmdGVyKGA8bGFiZWwgY2xhc3M9XCJpcy1zck9ubHlcIiBmb3I9XCIke3NlbGVjdElkfS1zZWxlY3RpemVkXCI+JHtwcm9kdWN0LmNvbnRleHQudHh0U2VsZWN0T25lfTwvbGFiZWw+YCk7XG5cbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgJ1NlbGVjdGl6ZScgc2VsZWN0IGJveFxuICAgICAgICAgICAgJHNlbGVjdC5zZWxlY3RpemUoe1xuICAgICAgICAgICAgICAgIGNvcHlDbGFzc2VzVG9Ecm9wZG93bjogdHJ1ZSxcbiAgICAgICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogKGl0ZW0sIGVzY2FwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7aXRlbS52YWx1ZX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9pdGVtICR7aXNTd2F0Y2hVbmF2YWlsYWJsZSgkaW5wdXQpID8gJ3VuYXZhaWxhYmxlJyA6ICcnfVwiICR7aXNTd2F0Y2hIaWRkZW4oJGlucHV0KSA/ICdzdHlsZT1cImRpc3BsYXk6bm9uZVwiJyA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJfaW1nXCI+JHtnZXRTd2F0Y2hJbWFnZUhUTUxGcm9tSW5wdXQoJGlucHV0KX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiX3RleHRcIj4ke2VzY2FwZShpdGVtLnRleHQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGA7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbjogKGl0ZW0sIGVzY2FwZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7aXRlbS52YWx1ZX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIl9vcHRpb24gJHtpc1N3YXRjaFVuYXZhaWxhYmxlKCRpbnB1dCkgPyAndW5hdmFpbGFibGUnIDogJyd9XCIgJHtpc1N3YXRjaEhpZGRlbigkaW5wdXQpID8gJ3N0eWxlPVwiZGlzcGxheTpub25lXCInIDogJyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIl9pbWdcIj4ke2dldFN3YXRjaEltYWdlSFRNTEZyb21JbnB1dCgkaW5wdXQpfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJfdGV4dFwiPiR7ZXNjYXBlKGl0ZW0udGV4dCl9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGl6ZSA9ICRzZWxlY3RbMF0uc2VsZWN0aXplO1xuXG4gICAgICAgICAgICAvLyBTZWxlY3QgdGhlIG9yaWdpbmFsIHN3YXRjaCB3aGVuIHRoZSBkcm9wZG93biBzd2F0Y2ggc2VsZWN0ZWRcbiAgICAgICAgICAgIHNlbGVjdGl6ZS5vbignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RpemUgY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgJGlucHV0cy5maWx0ZXIoYFt2YWx1ZT1cIiR7JHNlbGVjdC52YWwoKX1cIl1gKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFNlbGVjdCB0aGUgZHJvcGRvd24gc3dhdGNoIHdoZW4gdGhlIG9yaWdpbmFsIHN3YXRjaCBzZWxlY3RlZFxuICAgICAgICAgICAgcHJvZHVjdC4kc2NvcGUuZmluZCgnW2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlXScpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGEtcHJvZHVjdC1vcHRpb24tY2hhbmdlIGNoYW5nZScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJGlucHV0cy5maWx0ZXIoJzpjaGVja2VkJykudmFsKCk7XG4gICAgICAgICAgICAgICAgc2VsZWN0aXplLnNldFZhbHVlKHZhbHVlLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgJ1NlbGVjdGl6ZScgb3B0aW9ucyB3aGVuIHRoZSBhdmFpbGFibGl0eSBvZiB0aGUgb3JpZ2luYWwgc3dhdGNoZXMgY2hhbmdlZFxuICAgICAgICAgICAgcHJvZHVjdC4kc2NvcGUuZmlyc3QoKS5vbigndXBkYXRlUHJvZHVjdEF0dHJpYnV0ZXMnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZVByb2R1Y3RBdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSAkaW5wdXRzLmZpbHRlcignOmNoZWNrZWQnKS52YWwoKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RpemUuY2xlYXJDYWNoZSgpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGl6ZS5jbGVhcih0cnVlKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RpemUuc2V0VmFsdWUodmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIHNlbGVjdGl6ZS5yZWZyZXNoT3B0aW9ucyhmYWxzZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9