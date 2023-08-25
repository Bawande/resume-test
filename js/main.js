/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/components/achievements/achievementsBoy.js":
/*!***********************************************************!*\
  !*** ./src/js/components/achievements/achievementsBoy.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/deviceCheck */ "./src/js/helpers/deviceCheck.js");
/* harmony import */ var _modules_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/throttle */ "./src/js/modules/throttle.js");


var fixedScrollBlock = function fixedScrollBlock() {
  var $parent = document.querySelector(".achievements__container");
  var $fixedItem = $parent === null || $parent === void 0 ? void 0 : $parent.querySelector(".achievements__scene");
  var parentRect = $parent.getBoundingClientRect();
  var fixedItemRect = $fixedItem.getBoundingClientRect();
  $fixedItem.style.width = parentRect.width * 0.27 + "px";
  if ((0,_helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__.detectWidth)(768)) {
    $fixedItem.classList.remove("_bottom");
    $fixedItem.classList.remove("is-fixed");
    $fixedItem.style.width = "";
    window.removeEventListener("scroll", fixedScrollBlock);
    return;
  }
  if (fixedItemRect.height != 0 && parentRect.top <= 0 && parentRect.bottom >= fixedItemRect.height) {
    $fixedItem.classList.remove("_bottom");
    $fixedItem.classList.add("is-fixed");
  } else {
    if (parentRect.bottom - 100 <= fixedItemRect.bottom) {
      $fixedItem.classList.add("_bottom");
      $fixedItem.classList.remove("is-fixed");
      // $fixedItem.style.width = "";
    } else {
      $fixedItem.classList.remove("_bottom");
      $fixedItem.classList.remove("is-fixed");
      // $fixedItem.style.width = "";
    }
  }

  // console.log(parentRect.bottom - 100 <= fixedItemRect.bottom);
};

var optimizedFixedScrollBlock = (0,_modules_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(fixedScrollBlock, 100);
if (!(0,_helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__.detectWidth)(768)) {
  window.addEventListener("scroll", optimizedFixedScrollBlock);
}

/***/ }),

/***/ "./src/js/components/achievements/index.js":
/*!*************************************************!*\
  !*** ./src/js/components/achievements/index.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _achievementsBoy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./achievementsBoy */ "./src/js/components/achievements/achievementsBoy.js");


/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");

function openMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(true, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.addClass('is-menu-opened');
    $('.header__menu').removeClass('is-hidden');
    setImmediate(function () {
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
      _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', "".concat(_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].getScrollbarWidth(), "px"));
    });
    setTimeout(function () {
      $('.header__menu').addClass('is-active');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 100);
  });
}
function closeMenu() {
  return new Promise(function (resolve) {
    $('.js-burger').addClass('is-disabled').attr('disabled', true);
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(false, _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.find('.header__menu'), 'header');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$body.css('padding-right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.css('right', '');
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header.removeClass('is-menu-opened');
    $('.header__menu').removeClass('is-active');
    setTimeout(function () {
      $('.header__menu').addClass('is-hidden');
      $('.js-burger').removeClass('is-disabled').attr('disabled', false);
      resolve();
    }, 500);
  });
}
function toggleMenu(event) {
  event.preventDefault();
  event.stopPropagation();
  if ($(event.currentTarget).hasClass('is-active')) {
    $(event.currentTarget).removeClass('is-active');
    closeMenu();
  } else {
    $(event.currentTarget).addClass('is-active');
    openMenu();
  }
}
function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$header = $('.header');
  $('.js-burger').on('click.header', toggleMenu);
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.on('click.header', function (e) {
    var $container = $('.header__menu');
    if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  }).on('keyup.header', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
      closeMenu();
      $('.js-burger').removeClass('is-active');
    }
  });
}
function destroy() {
  $('.js-burger').off('.header');
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.off('.header');
}
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy,
  openMenu: openMenu,
  closeMenu: closeMenu
});

/***/ }),

/***/ "./src/js/components/header/activeMenuItems.js":
/*!*****************************************************!*\
  !*** ./src/js/components/header/activeMenuItems.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/deviceCheck */ "./src/js/helpers/deviceCheck.js");
/* harmony import */ var _modules_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/throttle */ "./src/js/modules/throttle.js");


var $parentLinks = document.querySelector(".header-topnav__list");
var $links = $parentLinks.querySelectorAll(".header-topnav__link");
var linksActiveClassRemove = function linksActiveClassRemove() {
  [].forEach.call($links, function ($link) {
    $link.classList.remove("is-active");
  });
};
var searchActiveMenuItems = function searchActiveMenuItems() {
  var $sections = document.querySelectorAll("section");
  var offsetScroll = 80;
  if ((0,_helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__.detectWidth)(768)) {
    window.removeEventListener("scroll", optimizedSearchActiveMenuItems);
    return;
  }
  linksActiveClassRemove();
  [].forEach.call($sections, function ($section) {
    var sectionRect = $section.getBoundingClientRect();
    if (sectionRect.top - offsetScroll <= 0 && sectionRect.bottom - offsetScroll >= 0) {
      var sectionID = $section.getAttribute("id");
      [].forEach.call($links, function ($link) {
        var linkHref = $link.getAttribute("href").slice(1);
        if (linkHref === sectionID) {
          $link.classList.add("is-active");
        }
      });
    }
  });
};
var optimizedSearchActiveMenuItems = (0,_modules_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(searchActiveMenuItems, 100);
if (!(0,_helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__.detectWidth)(768)) {
  window.addEventListener("scroll", optimizedSearchActiveMenuItems);
}
var hendlerCkickMenuItem = function hendlerCkickMenuItem(event) {
  if ((0,_helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__.detectWidth)(768)) {
    window.removeEventListener("click", hendlerCkickMenuItem);
    return;
  }
  if (event.target.closest(".header-topnav__link")) {
    window.removeEventListener("scroll", optimizedSearchActiveMenuItems);
    var $link = event.target;
    linksActiveClassRemove();
    $link.classList.add("is-active");
    setTimeout(function () {
      window.addEventListener("scroll", optimizedSearchActiveMenuItems);
    }, 5000);
  }
};
$parentLinks.addEventListener("click", hendlerCkickMenuItem);

/***/ }),

/***/ "./src/js/components/header/fixedMenu.js":
/*!***********************************************!*\
  !*** ./src/js/components/header/fixedMenu.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers_deviceCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/deviceCheck */ "./src/js/helpers/deviceCheck.js");
/* harmony import */ var _modules_throttle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/throttle */ "./src/js/modules/throttle.js");


var state = {
  height: null
};
var fixedMenu = function fixedMenu() {
  var $parent = document.querySelector(".header__menu-wrap");
  var $body = document.body;
  var parentRect = $parent.getBoundingClientRect();
  var scroll = window.pageYOffset || document.documentElement.scrollTop;
  var parentHeight = parentRect.height;
  if (state.height === null) {
    state.height = parentHeight;
  }
  if (parentRect.height <= scroll) {
    if (state.height && state.height < parentHeight) {
      state.height = parentHeight;
    }
    $body.style.paddingTop = state.height + "px";
    $parent.classList.add("is-fixed");
    $parent.style.width = parentRect.width + "px";
  } else {
    $parent.classList.remove("is-fixed");
    $parent.style.width = "";
    $body.style.paddingTop = "";
  }
};
var optimizedFixedMenu = (0,_modules_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(fixedMenu, 100);
window.addEventListener("scroll", optimizedFixedMenu);
var handlerOnResize = function handlerOnResize(event) {
  var $parent = document.querySelector(".header__menu-wrap");
  if ($parent.closest(".is-fixed")) {
    $parent.classList.remove("is-fixed");
    $parent.style.width = "";
  }
};
var optimizedHandlerOnResize = (0,_modules_throttle__WEBPACK_IMPORTED_MODULE_1__["default"])(handlerOnResize, 100);
window.addEventListener("resize", optimizedHandlerOnResize);

/***/ }),

/***/ "./src/js/components/header/index.js":
/*!*******************************************!*\
  !*** ./src/js/components/header/index.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fixedMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fixedMenu */ "./src/js/components/header/fixedMenu.js");
/* harmony import */ var _activeMenuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeMenuItems */ "./src/js/components/header/activeMenuItems.js");



/***/ }),

/***/ "./src/js/components/preloader/index.js":
/*!**********************************************!*\
  !*** ./src/js/components/preloader/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preloader_new__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preloader-new */ "./src/js/components/preloader/preloader-new.js");


/***/ }),

/***/ "./src/js/components/preloader/loadImages.js":
/*!***************************************************!*\
  !*** ./src/js/components/preloader/loadImages.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readyImges: function() { return /* binding */ readyImges; }
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var urlImages = ["images/icon-company_21vek-by.jpg", "images/icon-company_Integral.jpg", "images/icon-company_j-creative-solutions.jpg", "images/icon-company_oz-by.jpg", "images/achievements-boy-desktop.png", "images/footer_hands-desktop.png", "images/header-logo-desktop.png", "images/header-menu_watch.png"];
function LoadingImage() {
  this.urls = new Set();
  this.listImages = [];
  this.addItem = function (url) {
    this.urls.add(url);
  };
  this.getTotalItems = function () {
    return this.urls.size;
  };
  this.load = function (callbackProgress) {
    var _iterator = _createForOfIteratorHelper(this.urls),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var url = _step.value;
        var img = new Image();
        this.listImages.push(img);
        img.onload = callbackProgress;
        img.src = url;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };
}
function readyImges(callbackprogress, callbackReady) {
  var loader = new LoadingImage();
  urlImages.forEach(function (url) {
    loader.addItem(url);
  });
  var totalImages = loader.getTotalItems();
  var count = 0;
  var progress = 0;
  loader.load(function () {
    count++;
    progress = count / totalImages * 100;
    if (typeof callbackprogress === "function") {
      callbackprogress(progress);
    }
    if (totalImages === count) {
      if (typeof callbackReady === "function") callbackReady();
    }
  });
}


/***/ }),

/***/ "./src/js/components/preloader/preloader-new.js":
/*!******************************************************!*\
  !*** ./src/js/components/preloader/preloader-new.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers */ "./src/js/helpers.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loadImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadImages */ "./src/js/components/preloader/loadImages.js");



var $parentPreloader = document.querySelector("#preloader");
var $preloaderScene = document.querySelector(".preloader__scene");
_helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(true, $("#preloader"), "preloader");
var removePreloader = function removePreloader() {
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].lockScroll(false, $("#preloader"), "preloader");
  $parentPreloader.classList.remove("is-visible");
  setTimeout(function () {
    aos__WEBPACK_IMPORTED_MODULE_1___default().init();
    $parentPreloader.style.display = "none";
  }, 300);
};
function preloaderImageLoad() {
  return new Promise(function (resolve, reject) {
    var img = new Image();
    img.onload = resolve;
    img.src = "images/preloader-rocket-man.jpg";
  });
}
var onLoadWindow = function onLoadWindow() {
  setTimeout(function () {
    removePreloader();
  }, 3000);
};
var contentLoaded = function contentLoaded() {
  var $mediaFiles = document.querySelectorAll("img, video");
  preloaderImageLoad().then(function () {
    var windowHeight = window.screen.height;
    var windowWidth = window.screen.width;
    var $image = document.querySelector(".preloader__image");
    var imageRect = $image.getBoundingClientRect();
    var startImagePositionX = imageRect.x;
    var endImagePositionX = windowWidth - imageRect.width;
    var distanceX = Math.abs(startImagePositionX) + Math.abs(endImagePositionX);
    var startImagePositionY = imageRect.y;
    var endImagePositionY = 0 - imageRect.height;
    var distanceY = Math.abs(startImagePositionY) + Math.abs(endImagePositionY);
    var positionImageX = startImagePositionX;
    var positionImageY = startImagePositionY;
    (0,_loadImages__WEBPACK_IMPORTED_MODULE_2__.readyImges)(function (progress) {
      positionImageX = startImagePositionX + distanceX * progress / 100;
      positionImageY = startImagePositionY - distanceY * progress / 100;
      $preloaderScene.style.left = positionImageX + "px";
      $preloaderScene.style.top = positionImageY + "px";
    }, function () {
      removePreloader();
    });
  });
};
window.addEventListener("load", onLoadWindow);
document.addEventListener("DOMContentLoaded", contentLoaded);

/***/ }),

/***/ "./src/js/components/scrollPosition/index.js":
/*!***************************************************!*\
  !*** ./src/js/components/scrollPosition/index.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scrollPosition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollPosition */ "./src/js/components/scrollPosition/scrollPosition.js");


/***/ }),

/***/ "./src/js/components/scrollPosition/scrollPosition.js":
/*!************************************************************!*\
  !*** ./src/js/components/scrollPosition/scrollPosition.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/throttle */ "./src/js/modules/throttle.js");

var colorGradient = ["#D2233C", "#282A33"];
var scrollPosition = function scrollPosition() {
  var $scrollProgress = document.querySelector(".scroll-position");
  var $progressCounter = $scrollProgress.querySelector(".scroll-position__counter");
  var scroll = window.pageYOffset || document.documentElement.scrollTop;
  var calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrollValue = Math.round(scroll * 100 / calcHeight);
  if (window.document.documentMode) {
    $scrollProgress.style.background = "linear-gradient(".concat(colorGradient[0], " ").concat(scrollValue, "%, ").concat(colorGradient[1], " ").concat(scrollValue, "%)");
  } else {
    $scrollProgress.style.background = "conic-gradient(".concat(colorGradient[0], " ").concat(scrollValue, "%, ").concat(colorGradient[1], " ").concat(scrollValue, "%)");
  }
  $progressCounter.textContent = "".concat(scrollValue);
  if (scrollValue >= 100) {
    $scrollProgress.classList.add("is-bottom");
  } else {
    if ($scrollProgress.closest(".is-bottom")) {
      $scrollProgress.classList.remove("is-bottom");
    }
  }
};
var optimizedScrollPosition = (0,_modules_throttle__WEBPACK_IMPORTED_MODULE_0__["default"])(scrollPosition, 100);
window.addEventListener("scroll", optimizedScrollPosition);

/***/ }),

/***/ "./src/js/components/social.js":
/*!*************************************!*\
  !*** ./src/js/components/social.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ninelines-sharing */ "./node_modules/ninelines-sharing/dist/ninelines-sharing.js");
/* harmony import */ var ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ninelines_sharing__WEBPACK_IMPORTED_MODULE_0__);

if (document.querySelector('[data-social]')) {
  var list = document.querySelectorAll('[data-social]');
  Array.prototype.forEach.call(list, function (item) {
    item.addEventListener('click', function (e) {
      var social = e.currentTarget.dataset.social;
      var url = location.origin + location.pathname;
      (ninelines_sharing__WEBPACK_IMPORTED_MODULE_0___default())[social](url);
    });
  });
}

/***/ }),

/***/ "./src/js/helpers.js":
/*!***************************!*\
  !*** ./src/js/helpers.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! body-scroll-lock */ "./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");

var vars = {};
vars.$document = $(document);
vars.$window = $(window);
vars.$body = $(document.body);
vars.$html = $(document.documentElement);
vars.isMobile = function () {
  return innerWidth <= 1024;
};
vars.isIE = function () {
  return vars.$html.hasClass("is-browser-ie");
};
vars.isIOS = function () {
  return vars.$html.hasClass("is-os-ios");
};
vars.winWidth = window.innerWidth;

/**
 * Очистить текст от спецсимволов
 * @param {string} text Обязательное, строка для очистки
 * @returns {string} Очищенная строка
 */
vars.clearText = function (text) {
  return text.trim().replace(/\s+/g, " ");
};

/**
 * Создать куки запись
 * @param {string} name Обязательное, название записи
 * @param {string} value Обязательное, значение записи
 * @param {string} days Обязательное, время для жизни
 */
vars.setCookie = function (name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=".concat(date.toUTCString());
  }
  document.cookie = "".concat(name, "=").concat(value || "").concat(expires, "; path=/");
};

/**
 * Получить куки запись
 * @param {string} name Обязательное, название записи
 */
vars.getCookie = function (name) {
  var nameEQ = "".concat(name, "=");
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
};

/**
 * Удалить куки запись
 * @param {string} name Обязательное, название записи
 */
vars.eraseCookie = function (name) {
  document.cookie = "".concat(name, "=; Max-Age=-99999999;");
};
var dataScrollLocks;
/**
 * Блокирует скролл страницы
 * Необходим для использования модальных окон
 * @param {boolean} state Обязательное
 * @param {string} element Обязательное, элемент которому нужно разрешить скролл
 * @param {string} name Необязательное, ключ,
 * чтобы была возможность открывать окно поверх другого окна
 */
vars.lockScroll = function (state, $element, name) {
  var element = $element.get(0) ? $element.get(0) : $element;
  // console.log(element);
  if (typeof dataScrollLocks === "undefined") {
    dataScrollLocks = new Set();
  }
  var scrollLocks = dataScrollLocks;
  if (state) {
    if (typeof name === "string") {
      scrollLocks.add(name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.disableBodyScroll(element, {
      reserveScrollBarGap: true
    });
    setImmediate(function () {
      vars.$html.addClass("is-lock-scroll");
    });
  } else {
    if (typeof name === "string") {
      scrollLocks["delete"](name);
    }
    body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.enableBodyScroll(element);
    if (!scrollLocks.size) {
      body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.clearAllBodyScrollLocks();
      vars.$html.removeClass("is-lock-scroll");
    }
  }
};

/**
 * Скролл до элемента
 * @param {string} $container Обязательное, элемент к которому нужно скроллить
 * @param {string|number} time Необязательное, время скролла
 * @param {string|number} offset Необязательное, смещение скролла может быть + или -
 */
vars.scrollTo = function ($container) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
  var offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  vars.$html.css("scroll-behavior", "initial");
  $("html, body").stop().animate({
    scrollTop: "".concat($container.offset().top + parseInt(offset, 10))
  }, parseInt(time, 10));
  setTimeout(function () {
    vars.$html.css("scroll-behavior", "");
  }, parseInt(time, 10) + 100);
};
var scrollDiv;

/**
 * Получить размер скроллбара если он есть
 * @returns {number} размер скроллбара
 */
vars.getScrollbarWidth = function () {
  var width = window.innerWidth - vars.$html.get(0).clientWidth;
  if (width || document.documentElement.clientHeight >= document.documentElement.offsetHeight) {
    return width;
  }

  // Document doesn't have a scrollbar, possibly because there is not enough content so browser doesn't show it
  if (!scrollDiv) {
    scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = "width:100px;height:100px;overflow:scroll !important;position:absolute;top:-9999px";
    document.body.appendChild(scrollDiv);
  }
  return scrollDiv.offsetWidth - scrollDiv.clientWidth;
};

/**
 * Узнать есть доступен ли ховер
 * @returns {boolean}
 */
function hasHoverSupport() {
  var hoverSupport;
  if (vars.isIE && vars.getScrollbarWidth()) {
    // On touch devices scrollbar width is usually 0
    hoverSupport = true;
  } else if (vars.isMobile()) {
    hoverSupport = false;
  } else if (window.matchMedia("(any-hover: hover)").matches || window.matchMedia("(hover: hover)").matches) {
    hoverSupport = true;
  } else if (window.matchMedia("(hover: none)").matches) {
    hoverSupport = false;
  } else {
    hoverSupport = typeof vars.$html.ontouchstart === "undefined";
  }
  return hoverSupport;
}
if (!hasHoverSupport()) {
  vars.$html.removeClass("has-hover").addClass("no-hover");
} else {
  vars.$html.removeClass("no-hover").addClass("has-hover");
}

/**
 * Переопределение доступности ховера
 */
function resize() {
  setTimeout(function () {
    if (vars.winWidth !== window.innerWidth) {
      if (!hasHoverSupport()) {
        vars.$html.removeClass("has-hover").addClass("no-hover");
      } else {
        vars.$html.removeClass("no-hover").addClass("has-hover");
      }
      vars.winWidth = window.innerWidth;
    }
  }, 300);
}
vars.$window.on("resize", resize);
/* harmony default export */ __webpack_exports__["default"] = (vars);

/***/ }),

/***/ "./src/js/helpers/deviceCheck.js":
/*!***************************************!*\
  !*** ./src/js/helpers/deviceCheck.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectMob: function() { return /* binding */ detectMob; },
/* harmony export */   detectWidth: function() { return /* binding */ detectWidth; },
/* harmony export */   mobileAndTabletCheck: function() { return /* binding */ mobileAndTabletCheck; },
/* harmony export */   mobileCheck: function() { return /* binding */ mobileCheck; }
/* harmony export */ });
var mobileCheck = function mobileCheck() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
var mobileAndTabletCheck = function mobileAndTabletCheck() {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
function detectMob() {
  return window.innerWidth <= 800;
}
function detectWidth(width) {
  return window.innerWidth <= +width;
}


/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./src/js/helpers.js");
/* harmony import */ var _components_social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/social */ "./src/js/components/social.js");
/* harmony import */ var _components_preloader_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/preloader/index */ "./src/js/components/preloader/index.js");
/* harmony import */ var _components_achievements_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/achievements/index */ "./src/js/components/achievements/index.js");
/* harmony import */ var _components_header_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/header/index */ "./src/js/components/header/index.js");
/* harmony import */ var _components_scrollPosition_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/scrollPosition/index */ "./src/js/components/scrollPosition/index.js");
/* harmony import */ var _vendor_ie_fix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vendor/ie-fix */ "./src/js/vendor/ie-fix.js");
/* harmony import */ var _vendor_vh_fix__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vendor/vh-fix */ "./src/js/vendor/vh-fix.js");
/* harmony import */ var _modules_actualYear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/actualYear */ "./src/js/modules/actualYear.js");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/header */ "./src/js/components/header.js");
/* harmony import */ var _modules_lazyLoading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/lazyLoading */ "./src/js/modules/lazyLoading.js");
/* harmony import */ var _modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/scrollToAnchor */ "./src/js/modules/scrollToAnchor.js");
/* harmony import */ var _modules_backToTop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/backToTop */ "./src/js/modules/backToTop.js");














(0,_vendor_ie_fix__WEBPACK_IMPORTED_MODULE_7__.ieFix)();
(0,_vendor_vh_fix__WEBPACK_IMPORTED_MODULE_8__.vhFix)();
(0,_modules_actualYear__WEBPACK_IMPORTED_MODULE_9__.actualYear)();
_modules_scrollToAnchor__WEBPACK_IMPORTED_MODULE_12__["default"].init();
_modules_backToTop__WEBPACK_IMPORTED_MODULE_13__["default"].init();
_components_header__WEBPACK_IMPORTED_MODULE_10__["default"].init();
_modules_lazyLoading__WEBPACK_IMPORTED_MODULE_11__["default"].init();

/***/ }),

/***/ "./src/js/modules/actualYear.js":
/*!**************************************!*\
  !*** ./src/js/modules/actualYear.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   actualYear: function() { return /* binding */ actualYear; }
/* harmony export */ });
/**
* Модуль "Актуальный год"
*/
var actualYear = function actualYear() {
  var year = new Date().getFullYear();
  if (document.querySelector('[data-actual-year]')) {
    document.querySelector('[data-actual-year]').textContent = year;
  }
};

/***/ }),

/***/ "./src/js/modules/backToTop.js":
/*!*************************************!*\
  !*** ./src/js/modules/backToTop.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");


/**
* Модуль "Возврат наверх"
*/
var init = function init() {
  var className = '.js-back-to-top';
  var shownClass = 'is-shown';
  var lastScrollTop = 0;
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.on('click.backTop', "".concat(className), function () {
    _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].scrollTo($('body'));
  });
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$window.on('scroll.backTop', function () {
    var scrollTop = window.pageYOffset;
    if (scrollTop > window.innerHeight) {
      if (lastScrollTop > scrollTop) {
        $(className).addClass(shownClass);
      } else {
        $(className).removeClass(shownClass);
      }
    } else {
      $(className).removeClass(shownClass);
    }
    lastScrollTop = scrollTop;
  });
};
var destroy = function destroy() {
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$window.off('.backTop');
  _helpers__WEBPACK_IMPORTED_MODULE_0__["default"].$document.off('.backTop');
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/modules/lazyLoading.js":
/*!***************************************!*\
  !*** ./src/js/modules/lazyLoading.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lozad */ "./node_modules/lozad/dist/lozad.min.js");
/* harmony import */ var lozad__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lozad__WEBPACK_IMPORTED_MODULE_0__);

var observer;

/**
* Модуль "Отложенная загрузка изображений"
* https://github.com/ApoorvSaxena/lozad.js
*/
var init = function init() {
  observer = lozad__WEBPACK_IMPORTED_MODULE_0___default()('.js-lazy', {
    rootMargin: '10px 0px',
    // syntax similar to that of CSS Margin
    threshold: 0.1,
    // ratio of element convergence
    enableAutoReload: true,
    // it will reload the new image when validating attributes changes
    loaded: function loaded(el) {
      el.classList.add('is-loaded');
    }
  });
  observer.observe();
};

/**
* Тригер для загрузки изображений до того, как оно появится в наблюдателе области просмотра
* @param {string} img Обязательное, элемент img
*/
var trigger = function trigger(img) {
  observer.triggerLoad(img);
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  trigger: trigger
});

/***/ }),

/***/ "./src/js/modules/scrollToAnchor.js":
/*!******************************************!*\
  !*** ./src/js/modules/scrollToAnchor.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header */ "./src/js/components/header.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers */ "./src/js/helpers.js");



/**
 * Модуль "Плавный переход к якорю"
 */
var init = function init() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.on("click.anchor", ".js-to-anchor", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var id = $(e.currentTarget).attr("href");
    var speed = $(e.currentTarget).data("speed") || 500;
    var offset = _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css("position") === "fixed" || _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.css("position") === "absolute" ? -_helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$header.outerHeight(true) : -70;
    _components_header__WEBPACK_IMPORTED_MODULE_0__["default"].closeMenu().then(function () {
      $(".js-burger").removeClass("is-active");
      _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].scrollTo($(id), speed, offset);
    });
  });
};
var destroy = function destroy() {
  _helpers__WEBPACK_IMPORTED_MODULE_1__["default"].$document.off(".anchor");
};
/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  destroy: destroy
});

/***/ }),

/***/ "./src/js/modules/throttle.js":
/*!************************************!*\
  !*** ./src/js/modules/throttle.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// - callee, функция, которую надо вызывать;
// - timeout, интервал в мс, с которым следует пропускать вызовы.
var throttle = function throttle(callee, timeout) {
  var timer = null;
  return function perform() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (timer) return;
    timer = setTimeout(function () {
      callee.apply(void 0, args);
      clearTimeout(timer);
      timer = null;
    }, timeout);
  };
};
/* harmony default export */ __webpack_exports__["default"] = (throttle);

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_4__);





// import objectFitVideos from 'object-fit-videos';

svg4everybody__WEBPACK_IMPORTED_MODULE_2___default()();
object_fit_images__WEBPACK_IMPORTED_MODULE_4___default()();
// objectFitVideos();

window.$ = (jquery__WEBPACK_IMPORTED_MODULE_3___default());
window.jQuery = (jquery__WEBPACK_IMPORTED_MODULE_3___default());
window.objectFitImages = (object_fit_images__WEBPACK_IMPORTED_MODULE_4___default());
// window.objectFitVideos = objectFitVideos;

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/ie-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/ie-fix.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ieFix: function() { return /* binding */ ieFix; }
/* harmony export */ });
/* eslint-disable */

/**
* Много разных фиксов для ie,
* чтобы не было лишних проблем
* Performance.now()
* forEach
* CustomEvent
* includes
* matches
* closest
* prepend
* append
* before
* remove
* startsWith
* Performance.now()
* https://gist.github.com/paulirish/5438650
*/

var ieFix = function ieFix() {
  (function () {
    if ("performance" in window == false) {
      window.performance = {};
    }

    // thanks IE8
    Date.now = Date.now || function () {
      return new Date().getTime();
    };
    if ("now" in window.performance == false) {
      var nowOffset = Date.now();
      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }
      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })();

  // forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // CustomEvent
  (function () {
    if (typeof window.CustomEvent === 'function') return false;
    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  // includes
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);
        var len = o.length >>> 0;
        if (len === 0) {
          return false;
        }
        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }
        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }
        return false;
      }
    });
  }

  // matches
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length;
      // eslint-disable-next-line no-empty
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
  }
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  // closest
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;
      do {
        if (el.matches(s)) {
          return el;
        }
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }

  // prepend
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }
      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  // append
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }
      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

  // before
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }
      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  // remove
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }
      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

  // startsWith
  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  }

  // Fixes
  //---------------------------------

  // ie download
  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }
    var filename = el.getAttribute("download");
    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }
    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();
      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };
      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };
      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };
  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");
    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  }

  // ie svg focus fix
  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }
    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };
  unfocusableSvg();

  //ie footer nailing
  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;
    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }
    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0;
      // eslint-disable-next-line no-unused-expressions
      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };
    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };
  ieFooterNailing();
};


/***/ }),

/***/ "./src/js/vendor/vh-fix.js":
/*!*********************************!*\
  !*** ./src/js/vendor/vh-fix.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vhFix: function() { return /* binding */ vhFix; }
/* harmony export */ });
/**
* Модуль исправления багов на iOs устройствах
* определяет высоту экрана и при любом изменении переопределяет её
* в стилях используйте кастомные стили var(--vh)
*/
var vhFix = function vhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    var vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    window.addEventListener('resize', function () {
      vh = window.innerHeight;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    });
  }
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkninelines_template"] = self["webpackChunkninelines_template"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], function() { return __webpack_require__("./src/js/main.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map