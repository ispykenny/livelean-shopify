/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./styles/style.scss":
/*!***************************!*\
  !*** ./styles/style.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://liveleanrx_shopify/./styles/style.scss?");

/***/ }),

/***/ "./src/_app.js":
/*!*********************!*\
  !*** ./src/_app.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./styles/style.scss\");\n/* harmony import */ var _backgrounds__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backgrounds */ \"./src/backgrounds.js\");\n/* harmony import */ var _lazy_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lazy-load */ \"./src/lazy-load.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n\n\n(0,_lazy_load__WEBPACK_IMPORTED_MODULE_2__.lazyLoad)();\n(0,_nav__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_backgrounds__WEBPACK_IMPORTED_MODULE_1__.setBackgroundImages)();\n\n\n//# sourceURL=webpack://liveleanrx_shopify/./src/_app.js?");

/***/ }),

/***/ "./src/backgrounds.js":
/*!****************************!*\
  !*** ./src/backgrounds.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setBackgroundImages\": () => (/* binding */ setBackgroundImages)\n/* harmony export */ });\n\nconst config  = {\n  root: null,\n  rootMargin: '0px',\n  threshold: 0.3\n};\n\nconst setBackgroundImages = () => {\n  let backgrounds = document.querySelectorAll('.background')\n  let observer = new IntersectionObserver((element) => {\n    \n    element.forEach(backgroundElement => {\n      if(!backgroundElement.isIntersecting) return;\n      if(backgroundElement.intersectionRatio > 0) {\n        const img = new Image();\n        img.src = backgroundElement.target.getAttribute('data-bg');\n\n        img.onload = () => {\n          backgroundElement.target.style.backgroundImage = 'url('+ img.src +')'\n          backgroundElement.target.closest('section').classList.add('active')\n          backgroundElement.target.setAttribute('data-bg', '')\n        }\n        observer.unobserve(backgroundElement.target)\n      }\n    })\n  }, config)\n  \n  backgrounds.forEach(image => {\n    observer.observe(image)\n  })\n}\n\n\n\n//# sourceURL=webpack://liveleanrx_shopify/./src/backgrounds.js?");

/***/ }),

/***/ "./src/lazy-load.js":
/*!**************************!*\
  !*** ./src/lazy-load.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lazyLoad\": () => (/* binding */ lazyLoad)\n/* harmony export */ });\n\nconst config  = {\n  root: null,\n  rootMargin: '0px',\n  threshold: 0.3\n};\n\nconst lazyLoad = () => {\n  let images = document.querySelectorAll('main img')\n  let observer = new IntersectionObserver((element) => {\n    \n    element.forEach(imgEl => {\n      if(!imgEl.isIntersecting) return;\n      if(imgEl.intersectionRatio > 0) {\n        const img = new Image();\n        img.src = imgEl.target.getAttribute('data-src');\n\n        img.onload = () => {\n          imgEl.target.setAttribute('src', img.src)\n          imgEl.target.closest('div').classList.add('active')\n          imgEl.target.setAttribute('data-src', '')\n        }\n        observer.unobserve(imgEl.target)\n      }\n    })\n  }, config)\n  \n  images.forEach(image => {\n    observer.observe(image)\n  })\n}\n\n//# sourceURL=webpack://liveleanrx_shopify/./src/lazy-load.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {\n  const menu_trigger = document.querySelector('.menu');\n  const header = document.querySelector('header');\n  menu_trigger.addEventListener('click', () => header.classList.toggle('nav-showing'))\n}\n\n//# sourceURL=webpack://liveleanrx_shopify/./src/nav.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/_app.js");
/******/ 	
/******/ })()
;