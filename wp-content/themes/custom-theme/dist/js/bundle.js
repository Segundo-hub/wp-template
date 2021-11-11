(self["webpackChunkinit_template"] = self["webpackChunkinit_template"] || []).push([["/js/bundle"],{

/***/ "./wp-content/themes/custom-theme/src/js/index.js":
/*!********************************************************!*\
  !*** ./wp-content/themes/custom-theme/src/js/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_dom_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/dom-polyfill */ "./wp-content/themes/custom-theme/src/js/libs/dom-polyfill.js");
/* harmony import */ var _libs_dom_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_dom_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/parallax */ "./wp-content/themes/custom-theme/src/js/libs/parallax.js");
/* harmony import */ var _libs_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/dom */ "./wp-content/themes/custom-theme/src/js/libs/dom.js");
/* harmony import */ var _libs_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/utils */ "./wp-content/themes/custom-theme/src/js/libs/utils.js");




/**
 * @function parallax
 */

new _libs_parallax__WEBPACK_IMPORTED_MODULE_1__.Parallaxify().init({
  speed: 6.0
});
/**
 * @function useMediaQuery
 */

(0,_libs_utils__WEBPACK_IMPORTED_MODULE_3__.useMediaQuery)({
  media: "min-width: 62em",
  min: function min() {
    console.log('movil');
  },
  max: function max() {
    console.log('desktop');
  }
});
console.log("Holita");
/**
 * @function domOnClick
 */

document.addEventListener('click', function (event) {
  var action = event.target.closest('[data-action]') ? event.target.closest('[data-action]').dataset.action : false;
  var methods = {
    "open-menu": _libs_dom__WEBPACK_IMPORTED_MODULE_2__.openMenu,
    "close-menu": _libs_dom__WEBPACK_IMPORTED_MODULE_2__.closeMenu,
    "open-contact": _libs_dom__WEBPACK_IMPORTED_MODULE_2__.openContact,
    "close-contact": _libs_dom__WEBPACK_IMPORTED_MODULE_2__.closeContact
  };

  if (action) {
    methods[action](event);
  }
});
var saludo = "   hola".trimStart();

/***/ }),

/***/ "./wp-content/themes/custom-theme/src/js/libs/dom-polyfill.js":
/*!********************************************************************!*\
  !*** ./wp-content/themes/custom-theme/src/js/libs/dom-polyfill.js ***!
  \********************************************************************/
/***/ (() => {

(function (w, d) {
  var HTML = Element.prototype;

  HTML.addClass = function (style) {
    this.classList.add(style);
  };

  HTML.removeClass = function (style) {
    this.classList.remove(style);
  };

  HTML.toggleClass = function (style) {
    this.classList.toggle(style);
  };

  HTML.hasClass = function (style) {
    return this.classList.contains(style);
  };

  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  }

  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
    e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: function value() {
        this.parentNode.removeChild(this);
      }
    });
  });
})(window, document);

/***/ }),

/***/ "./wp-content/themes/custom-theme/src/js/libs/dom.js":
/*!***********************************************************!*\
  !*** ./wp-content/themes/custom-theme/src/js/libs/dom.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openMenu": () => (/* binding */ openMenu),
/* harmony export */   "closeMenu": () => (/* binding */ closeMenu),
/* harmony export */   "openContact": () => (/* binding */ openContact),
/* harmony export */   "closeContact": () => (/* binding */ closeContact)
/* harmony export */ });
var menu = document.querySelector('#menu-modal');
var form = document.querySelector('#contact-modal');
var root = document.querySelector('html');
var openMenu = function openMenu(event) {
  menu.toggleClass('active');
  setTimeout(function () {
    root.toggleClass('hidden-scroll');
  }, 300);
  event.target.closest('[data-action]').toggleClass('active');
};
var closeMenu = function closeMenu() {
  menu.removeClass('active');
  root.removeClass('hidden-scroll');
};
var openContact = function openContact() {
  form.addClass('active');
  root.addClass('hidden-scroll');
};
var closeContact = function closeContact(event) {
  form.removeClass('active');
  menu.addClass('hard-close');
  menu.removeClass('active');
  document.querySelector('[data-action="open-menu"]').removeClass('active');
  setTimeout(function () {
    menu.removeClass('hard-close');

    if (!menu.hasClass('active')) {
      root.removeClass('hidden-scroll');
    }
  }, 150);
};

/***/ }),

/***/ "./wp-content/themes/custom-theme/src/js/libs/parallax.js":
/*!****************************************************************!*\
  !*** ./wp-content/themes/custom-theme/src/js/libs/parallax.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Parallaxify": () => (/* binding */ Parallaxify)
/* harmony export */ });
var windowHeight = window.innerHeight,
    windowHeightExtra = 0;
var safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
    mobile = /Mobi/.test(navigator.userAgent);

if (safari && !mobile) {
  windowHeightExtra = window.outerHeight - window.innerHeight;
}

if (mobile) {
  windowHeight = window.screen.availHeight;
  windowHeightExtra = (window.screen.availHeight - window.innerHeight) / 2;
}

var positionParallax = function positionParallax(container, speed, parallax, elem) {
  var bgScroll = container.top / speed - windowHeightExtra;
  parallax[elem].style.top = bgScroll + 'px';
};

var animateParallax = function animateParallax(parallax, speed) {
  for (var i = 0; parallax.length > i; i++) {
    var container = parallax[i].parentElement.parentElement.getBoundingClientRect();

    if (container.top + container.height >= 0 && container.top <= windowHeight) {
      positionParallax(container, speed, parallax, i);
    }
  }
};

var calculateHeight = function calculateHeight(parallax, speed) {
  for (var i = 0; parallax.length > i; i++) {
    var container = parallax[i].parentElement.parentElement.getBoundingClientRect();
    var containerTop = parallax[i].parentElement.parentElement.offsetTop;
    var elemOffsetTop = (windowHeight - container.height) / 2;
    var bgHeight = windowHeight > container.height + containerTop ? container.height + containerTop - containerTop / speed : container.height + (elemOffsetTop - elemOffsetTop / speed) * 2;
    parallax[i].style.height = bgHeight + windowHeightExtra * 2 + 'px';
    positionParallax(container, speed, parallax, i);
  }
};

var Parallaxify = function universalParallax() {
  var up = function up(parallax, speed) {
    if (speed < 1) {
      speed = 1;
    }

    calculateHeight(parallax, speed);

    if (!mobile) {
      window.addEventListener('resize', function () {
        windowHeight = window.innerHeight;
        calculateHeight(parallax, speed);
      });
    }

    window.addEventListener('scroll', function () {
      animateParallax(parallax, speed);
    });
  };

  this.init = function (param) {
    if (typeof param === 'undefined') {
      param = {};
    }

    param = {
      speed: typeof param.speed !== 'undefined' ? param.speed : 1.5,
      className: typeof param.className !== 'undefined' ? param.className : 'parallax'
    };
    var parallax = document.getElementsByClassName(param.className);

    for (var i = 0; parallax.length > i; i++) {
      var wrapper = document.createElement('div');
      parallax[i].parentNode.insertBefore(wrapper, parallax[i]);
      wrapper.appendChild(parallax[i]);
      var parallaxContainer = parallax[i].parentElement;
      parallaxContainer.className += 'parallax__container';

      if (window.getComputedStyle(parallaxContainer.parentElement, null).getPropertyValue('position') !== 'relative') {
        parallaxContainer.parentElement.style.position = 'relative';
      }

      var imgData = parallax[i].dataset.parallaxImage;

      if (typeof imgData !== 'undefined') {
        parallax[i].style.backgroundImage = 'url(' + imgData + ')'; // if no other class than .parallax is specified, add CSS

        if (parallax[i].classList.length === 1 && parallax[i].classList[0] === 'parallax') {
          parallax[i].style.backgroundRepeat = 'no-repeat';
          parallax[i].style.backgroundPosition = 'center';
          parallax[i].style.backgroundSize = 'cover';
        }
      }
    }

    ;
    document.addEventListener('readystatechange', function (event) {
      if (event.target.readyState === 'complete') {
        up(parallax, param.speed);
      }
    });
  };
};

/***/ }),

/***/ "./wp-content/themes/custom-theme/src/js/libs/utils.js":
/*!*************************************************************!*\
  !*** ./wp-content/themes/custom-theme/src/js/libs/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMediaQuery": () => (/* binding */ useMediaQuery)
/* harmony export */ });
var useMediaQuery = function useMediaQuery(_ref) {
  var media = _ref.media,
      max = _ref.max,
      min = _ref.min;
  var $media = window.matchMedia("(".concat(media, ")"));
  $media.addEventListener('change', updateMedia);

  function updateMedia(e) {
    e.matches ? max() : min();
  }

  updateMedia($media);
};

/***/ }),

/***/ "./wp-content/themes/custom-theme/sass/main.scss":
/*!*******************************************************!*\
  !*** ./wp-content/themes/custom-theme/sass/main.scss ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["css/bundle"], () => (__webpack_exec__("./wp-content/themes/custom-theme/src/js/index.js"), __webpack_exec__("./wp-content/themes/custom-theme/sass/main.scss")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFSQSxDQUFRLENBQVJBLENBQUFBLEtBQUFBLENBQUFBLGdCQUFBQSxHQUFBQSxXQUFBQTtBQUNBQSxVQUFBQSxRQUFRLENBQVJBLENBQVEsQ0FBUkEsQ0FBQUEsS0FBQUEsQ0FBQUEsa0JBQUFBLEdBQUFBLFFBQUFBO0FBQ0FBLFVBQUFBLFFBQVEsQ0FBUkEsQ0FBUSxDQUFSQSxDQUFBQSxLQUFBQSxDQUFBQSxjQUFBQSxHQUFBQSxPQUFBQTtBQUNIO0FBQ0o7QUFDSjs7QUFBQTtBQUNEaEMsSUFBQUEsUUFBUSxDQUFSQSxnQkFBQUEsQ0FBQUEsa0JBQUFBLEVBQThDLGlCQUFnQjtBQUMxRCxVQUFJQyxLQUFLLENBQUxBLE1BQUFBLENBQUFBLFVBQUFBLEtBQUosWUFBNEM7QUFDeEN1QyxRQUFBQSxFQUFFLFdBQVdDLEtBQUssQ0FBbEJELEtBQUUsQ0FBRkE7QUFDSDtBQUhMeEMsS0FBQUE7QUFoQ0o7QUFoQkc7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxJQUFNTCxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXlCO0FBQUEsTUFBeEIsS0FBd0IsUUFBeEIsS0FBd0I7QUFBQSxNQUF4QixHQUF3QixRQUF4QixHQUF3QjtBQUFBLE1BQVZFLEdBQVUsUUFBVkEsR0FBVTtBQUNsRCxNQUFNaUQsTUFBTSxHQUFHdEIsTUFBTSxDQUFOQSxVQUFBQSxZQUFmLEtBQWVBLE9BQWY7QUFDQXNCLEVBQUFBLE1BQU0sQ0FBTkEsZ0JBQUFBLENBQUFBLFFBQUFBLEVBQUFBLFdBQUFBOztBQUVBLDBCQUF3QjtBQUNwQm5DLElBQUFBLENBQUMsQ0FBREEsT0FBQUEsR0FBWVosR0FBWlksRUFBQUEsR0FBb0JkLEdBQXBCYyxFQUFBQTtBQUNIOztBQUNEb0MsRUFBQUEsV0FBVyxDQUFYQSxNQUFXLENBQVhBO0FBUEc7Ozs7Ozs7Ozs7OztBQ0FQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5pdC10ZW1wbGF0ZS8uL3dwLWNvbnRlbnQvdGhlbWVzL2N1c3RvbS10aGVtZS9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaW5pdC10ZW1wbGF0ZS8uL3dwLWNvbnRlbnQvdGhlbWVzL2N1c3RvbS10aGVtZS9zcmMvanMvbGlicy9kb20tcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vaW5pdC10ZW1wbGF0ZS8uL3dwLWNvbnRlbnQvdGhlbWVzL2N1c3RvbS10aGVtZS9zcmMvanMvbGlicy9kb20uanMiLCJ3ZWJwYWNrOi8vaW5pdC10ZW1wbGF0ZS8uL3dwLWNvbnRlbnQvdGhlbWVzL2N1c3RvbS10aGVtZS9zcmMvanMvbGlicy9wYXJhbGxheC5qcyIsIndlYnBhY2s6Ly9pbml0LXRlbXBsYXRlLy4vd3AtY29udGVudC90aGVtZXMvY3VzdG9tLXRoZW1lL3NyYy9qcy9saWJzL3V0aWxzLmpzIiwid2VicGFjazovL2luaXQtdGVtcGxhdGUvLi93cC1jb250ZW50L3RoZW1lcy9jdXN0b20tdGhlbWUvc2Fzcy9tYWluLnNjc3M/ZmRhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuL2xpYnMvZG9tLXBvbHlmaWxsXCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4aWZ5IH0gZnJvbSBcIi4vbGlicy9wYXJhbGxheFwiO1xyXG5pbXBvcnQgeyBjbG9zZUNvbnRhY3QsIGNsb3NlTWVudSwgb3BlbkNvbnRhY3QsIG9wZW5NZW51IH0gZnJvbSBcIi4vbGlicy9kb21cIjtcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gXCIuL2xpYnMvdXRpbHNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb24gcGFyYWxsYXhcclxuICovXHJcblxyXG5uZXcgUGFyYWxsYXhpZnkoKS5pbml0KHtcclxuICAgIHNwZWVkOiA2LjBcclxufSlcclxuXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb24gdXNlTWVkaWFRdWVyeVxyXG4gKi9cclxuXHJcbnVzZU1lZGlhUXVlcnkoe1xyXG4gICAgbWVkaWE6IFwibWluLXdpZHRoOiA2MmVtXCIsXHJcbiAgICBtaW46ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbW92aWwnKVxyXG4gICAgfSxcclxuICAgIG1heDogKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXNrdG9wJylcclxuICAgIH1cclxufSlcclxuXHJcbmNvbnNvbGUubG9nKFwiSG9saXRhXCIpXHJcbi8qKlxyXG4gKiBAZnVuY3Rpb24gZG9tT25DbGlja1xyXG4gKi9cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgbGV0IGFjdGlvbiA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY3Rpb25dJykgP1xyXG4gICAgICAgIGV2ZW50LnRhcmdldC5jbG9zZXN0KCdbZGF0YS1hY3Rpb25dJykuZGF0YXNldC5hY3Rpb24gOlxyXG4gICAgICAgIGZhbHNlXHJcbiAgICBjb25zdCBtZXRob2RzID0ge1xyXG4gICAgICAgIFwib3Blbi1tZW51XCI6IG9wZW5NZW51LFxyXG4gICAgICAgIFwiY2xvc2UtbWVudVwiOiBjbG9zZU1lbnUsXHJcbiAgICAgICAgXCJvcGVuLWNvbnRhY3RcIjogb3BlbkNvbnRhY3QsXHJcbiAgICAgICAgXCJjbG9zZS1jb250YWN0XCI6IGNsb3NlQ29udGFjdFxyXG4gICAgfVxyXG5cclxuICAgIGlmIChhY3Rpb24pIHtcclxuICAgICAgICBtZXRob2RzW2FjdGlvbl0oZXZlbnQpXHJcbiAgICB9XHJcblxyXG59KVxyXG5cclxuY29uc3Qgc2FsdWRvID0gXCIgICBob2xhXCIudHJpbVN0YXJ0KCkiLCIoZnVuY3Rpb24odywgZCkge1xyXG4gICAgbGV0IEhUTUwgPSBFbGVtZW50LnByb3RvdHlwZTtcclxuICAgIEhUTUwuYWRkQ2xhc3MgPSBmdW5jdGlvbihzdHlsZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChzdHlsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEhUTUwucmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihzdHlsZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShzdHlsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEhUTUwudG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbihzdHlsZSkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZShzdHlsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIEhUTUwuaGFzQ2xhc3MgPSBmdW5jdGlvbihzdHlsZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzTGlzdC5jb250YWlucyhzdHlsZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgPSBFbGVtZW50LnByb3RvdHlwZS5tc01hdGNoZXNTZWxlY3RvcjtcclxuICAgIH1cclxuICAgIGlmICghRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdCkge1xyXG4gICAgICAgIEVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QgPSBmdW5jdGlvbihzKSB7XHJcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhzKSkgcmV0dXJuIGVsO1xyXG4gICAgICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKGVsICE9PSBudWxsICYmIGVsLm5vZGVUeXBlID09PSAxKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBbRWxlbWVudC5wcm90b3R5cGUsIENoYXJhY3RlckRhdGEucHJvdG90eXBlLCBEb2N1bWVudFR5cGUucHJvdG90eXBlXS5mb3JFYWNoKFxyXG4gICAgICAgIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgZS5oYXNPd25Qcm9wZXJ0eShcInJlbW92ZVwiKSB8fFxyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwicmVtb3ZlXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6ICEwLFxyXG4gICAgICAgICAgICAgICAgICAgIHdyaXRhYmxlOiAhMCxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxufSkod2luZG93LCBkb2N1bWVudCk7IiwiY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LW1vZGFsJyk7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdC1tb2RhbCcpO1xyXG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xyXG5cclxuZXhwb3J0IGNvbnN0IG9wZW5NZW51ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBtZW51LnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcm9vdC50b2dnbGVDbGFzcygnaGlkZGVuLXNjcm9sbCcpXHJcbiAgICB9LCAzMDApXHJcbiAgICBldmVudC50YXJnZXQuY2xvc2VzdCgnW2RhdGEtYWN0aW9uXScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgbWVudS5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuICAgIHJvb3QucmVtb3ZlQ2xhc3MoJ2hpZGRlbi1zY3JvbGwnKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgb3BlbkNvbnRhY3QgPSAoKSA9PiB7XHJcbiAgICBmb3JtLmFkZENsYXNzKCdhY3RpdmUnKVxyXG4gICAgcm9vdC5hZGRDbGFzcygnaGlkZGVuLXNjcm9sbCcpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjbG9zZUNvbnRhY3QgPSAoZXZlbnQpID0+IHtcclxuICAgIGZvcm0ucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgbWVudS5hZGRDbGFzcygnaGFyZC1jbG9zZScpXHJcbiAgICBtZW51LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPVwib3Blbi1tZW51XCJdJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBtZW51LnJlbW92ZUNsYXNzKCdoYXJkLWNsb3NlJylcclxuICAgICAgICBpZiAoIW1lbnUuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIHJvb3QucmVtb3ZlQ2xhc3MoJ2hpZGRlbi1zY3JvbGwnKVxyXG4gICAgICAgIH1cclxuICAgIH0sIDE1MCk7XHJcbn0iLCJ2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0LFxyXG4gICAgd2luZG93SGVpZ2h0RXh0cmEgPSAwO1xyXG52YXIgc2FmYXJpID0gL14oKD8hY2hyb21lfGFuZHJvaWQpLikqc2FmYXJpL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcclxuICAgIG1vYmlsZSA9IC9Nb2JpLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG5cclxuaWYgKHNhZmFyaSAmJiAhbW9iaWxlKSB7XHJcbiAgICB3aW5kb3dIZWlnaHRFeHRyYSA9IHdpbmRvdy5vdXRlckhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcclxufVxyXG5cclxuaWYgKG1vYmlsZSkge1xyXG4gICAgd2luZG93SGVpZ2h0ID0gd2luZG93LnNjcmVlbi5hdmFpbEhlaWdodDtcclxuICAgIHdpbmRvd0hlaWdodEV4dHJhID0gKHdpbmRvdy5zY3JlZW4uYXZhaWxIZWlnaHQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpIC8gMjtcclxufVxyXG5cclxudmFyIHBvc2l0aW9uUGFyYWxsYXggPSBmdW5jdGlvbiBwb3NpdGlvblBhcmFsbGF4KGNvbnRhaW5lciwgc3BlZWQsIHBhcmFsbGF4LCBlbGVtKSB7XHJcbiAgICB2YXIgYmdTY3JvbGwgPSBjb250YWluZXIudG9wIC8gc3BlZWQgLSB3aW5kb3dIZWlnaHRFeHRyYTtcclxuICAgIHBhcmFsbGF4W2VsZW1dLnN0eWxlLnRvcCA9IGJnU2Nyb2xsICsgJ3B4JztcclxufTtcclxudmFyIGFuaW1hdGVQYXJhbGxheCA9IGZ1bmN0aW9uIGFuaW1hdGVQYXJhbGxheChwYXJhbGxheCwgc3BlZWQpIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBwYXJhbGxheC5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gcGFyYWxsYXhbaV0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIGlmIChjb250YWluZXIudG9wICsgY29udGFpbmVyLmhlaWdodCA+PSAwICYmIGNvbnRhaW5lci50b3AgPD0gd2luZG93SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uUGFyYWxsYXgoY29udGFpbmVyLCBzcGVlZCwgcGFyYWxsYXgsIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcbnZhciBjYWxjdWxhdGVIZWlnaHQgPSBmdW5jdGlvbiBjYWxjdWxhdGVIZWlnaHQocGFyYWxsYXgsIHNwZWVkKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgcGFyYWxsYXgubGVuZ3RoID4gaTsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHBhcmFsbGF4W2ldLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICB2YXIgY29udGFpbmVyVG9wID0gcGFyYWxsYXhbaV0ucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50Lm9mZnNldFRvcDtcclxuICAgICAgICB2YXIgZWxlbU9mZnNldFRvcCA9ICh3aW5kb3dIZWlnaHQgLSBjb250YWluZXIuaGVpZ2h0KSAvIDI7XHJcbiAgICAgICAgdmFyIGJnSGVpZ2h0ID0gd2luZG93SGVpZ2h0ID4gY29udGFpbmVyLmhlaWdodCArIGNvbnRhaW5lclRvcCA/IGNvbnRhaW5lci5oZWlnaHQgKyBjb250YWluZXJUb3AgLSBjb250YWluZXJUb3AgLyBzcGVlZCA6IGNvbnRhaW5lci5oZWlnaHQgKyAoZWxlbU9mZnNldFRvcCAtIGVsZW1PZmZzZXRUb3AgLyBzcGVlZCkgKiAyO1xyXG5cclxuICAgICAgICBwYXJhbGxheFtpXS5zdHlsZS5oZWlnaHQgPSBiZ0hlaWdodCArIHdpbmRvd0hlaWdodEV4dHJhICogMiArICdweCc7XHJcbiAgICAgICAgcG9zaXRpb25QYXJhbGxheChjb250YWluZXIsIHNwZWVkLCBwYXJhbGxheCwgaSk7XHJcbiAgICB9XHJcbn07XHJcbmV4cG9ydCB2YXIgUGFyYWxsYXhpZnkgPSBmdW5jdGlvbiB1bml2ZXJzYWxQYXJhbGxheCgpIHtcclxuICAgIHZhciB1cCA9IGZ1bmN0aW9uIHVwKHBhcmFsbGF4LCBzcGVlZCkge1xyXG4gICAgICAgIGlmIChzcGVlZCA8IDEpIHtcclxuICAgICAgICAgICAgc3BlZWQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYWxjdWxhdGVIZWlnaHQocGFyYWxsYXgsIHNwZWVkKTtcclxuICAgICAgICBpZiAoIW1vYmlsZSkge1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjYWxjdWxhdGVIZWlnaHQocGFyYWxsYXgsIHNwZWVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYW5pbWF0ZVBhcmFsbGF4KHBhcmFsbGF4LCBzcGVlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5pbml0ID0gZnVuY3Rpb24ocGFyYW0pIHtcclxuICAgICAgICBpZiAodHlwZW9mIHBhcmFtID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBwYXJhbSA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGFyYW0gPSB7XHJcbiAgICAgICAgICAgIHNwZWVkOiB0eXBlb2YgcGFyYW0uc3BlZWQgIT09ICd1bmRlZmluZWQnID8gcGFyYW0uc3BlZWQgOiAxLjUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdHlwZW9mIHBhcmFtLmNsYXNzTmFtZSAhPT0gJ3VuZGVmaW5lZCcgPyBwYXJhbS5jbGFzc05hbWUgOiAncGFyYWxsYXgnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgcGFyYWxsYXggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHBhcmFtLmNsYXNzTmFtZSk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBwYXJhbGxheC5sZW5ndGggPiBpOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgcGFyYWxsYXhbaV0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgcGFyYWxsYXhbaV0pO1xyXG4gICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHBhcmFsbGF4W2ldKTtcclxuICAgICAgICAgICAgdmFyIHBhcmFsbGF4Q29udGFpbmVyID0gcGFyYWxsYXhbaV0ucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgcGFyYWxsYXhDb250YWluZXIuY2xhc3NOYW1lICs9ICdwYXJhbGxheF9fY29udGFpbmVyJztcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBhcmFsbGF4Q29udGFpbmVyLnBhcmVudEVsZW1lbnQsIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ3Bvc2l0aW9uJykgIT09ICdyZWxhdGl2ZScpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFsbGF4Q29udGFpbmVyLnBhcmVudEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaW1nRGF0YSA9IHBhcmFsbGF4W2ldLmRhdGFzZXQucGFyYWxsYXhJbWFnZTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpbWdEYXRhICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgcGFyYWxsYXhbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgaW1nRGF0YSArICcpJztcclxuICAgICAgICAgICAgICAgIC8vIGlmIG5vIG90aGVyIGNsYXNzIHRoYW4gLnBhcmFsbGF4IGlzIHNwZWNpZmllZCwgYWRkIENTU1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFsbGF4W2ldLmNsYXNzTGlzdC5sZW5ndGggPT09IDEgJiYgcGFyYWxsYXhbaV0uY2xhc3NMaXN0WzBdID09PSAncGFyYWxsYXgnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYWxsYXhbaV0uc3R5bGUuYmFja2dyb3VuZFJlcGVhdCA9ICduby1yZXBlYXQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFsbGF4W2ldLnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9ICdjZW50ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFsbGF4W2ldLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ2NvdmVyJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgICAgICAgICAgdXAocGFyYWxsYXgsIHBhcmFtLnNwZWVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufTsiLCJleHBvcnQgY29uc3QgdXNlTWVkaWFRdWVyeSA9ICh7IG1lZGlhLCBtYXgsIG1pbiB9KSA9PiB7XHJcbiAgICBjb25zdCAkbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShgKCR7bWVkaWF9KWApO1xyXG4gICAgJG1lZGlhLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHVwZGF0ZU1lZGlhKTtcclxuXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVNZWRpYShlKSB7XHJcbiAgICAgICAgZS5tYXRjaGVzID8gbWF4KCkgOiBtaW4oKVxyXG4gICAgfVxyXG4gICAgdXBkYXRlTWVkaWEoJG1lZGlhKVxyXG59IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbInNwZWVkIiwidXNlTWVkaWFRdWVyeSIsIm1lZGlhIiwibWluIiwiY29uc29sZSIsIm1heCIsImRvY3VtZW50IiwiZXZlbnQiLCJhY3Rpb24iLCJtZXRob2RzIiwiY2xvc2VDb250YWN0Iiwic2FsdWRvIiwiSFRNTCIsIkVsZW1lbnQiLCJlbCIsIkNoYXJhY3RlckRhdGEiLCJEb2N1bWVudFR5cGUiLCJlIiwiY29uZmlndXJhYmxlIiwiZW51bWVyYWJsZSIsIndyaXRhYmxlIiwidmFsdWUiLCJtZW51IiwiZm9ybSIsInJvb3QiLCJvcGVuTWVudSIsInNldFRpbWVvdXQiLCJjbG9zZU1lbnUiLCJvcGVuQ29udGFjdCIsIndpbmRvd0hlaWdodCIsIndpbmRvdyIsIndpbmRvd0hlaWdodEV4dHJhIiwic2FmYXJpIiwibmF2aWdhdG9yIiwibW9iaWxlIiwicG9zaXRpb25QYXJhbGxheCIsImJnU2Nyb2xsIiwiY29udGFpbmVyIiwicGFyYWxsYXgiLCJhbmltYXRlUGFyYWxsYXgiLCJpIiwiY2FsY3VsYXRlSGVpZ2h0IiwiY29udGFpbmVyVG9wIiwiZWxlbU9mZnNldFRvcCIsImJnSGVpZ2h0IiwiUGFyYWxsYXhpZnkiLCJ1cCIsInBhcmFtIiwiY2xhc3NOYW1lIiwid3JhcHBlciIsInBhcmFsbGF4Q29udGFpbmVyIiwiaW1nRGF0YSIsIiRtZWRpYSIsInVwZGF0ZU1lZGlhIl0sInNvdXJjZVJvb3QiOiIifQ==