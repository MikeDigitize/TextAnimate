(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/build";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.AnimateText = AnimateText;

	var _utils = __webpack_require__(1);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TextAnimator = function () {
		function TextAnimator(text) {
			_classCallCheck(this, TextAnimator);

			this.text = text;
		}

		_createClass(TextAnimator, [{
			key: 'split',
			value: function split() {
				this.text = (0, _utils.splitText)(this.text);
				return this;
			}
		}, {
			key: 'intoDOM',
			value: function intoDOM(tag, className, target) {
				(0, _utils.elementsIntoDOM)(this.text, tag, className, target);
				return this;
			}
		}]);

		return TextAnimator;
	}();

	function AnimateText(text) {
		if (!(this instanceof TextAnimator)) {
			return new TextAnimator(text);
		}
		return new TextAnimator(text);
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.splitText = splitText;
	exports.insertIntoDOM = insertIntoDOM;
	exports.createElement = createElement;
	exports.setTextContent = setTextContent;
	exports.addClass = addClass;
	exports.createArrayOfElements = createArrayOfElements;
	exports.elementsIntoDOM = elementsIntoDOM;
	function splitText(text) {
		return text.split('');
	}

	function insertIntoDOM() {
		var element = arguments.length <= 0 || arguments[0] === undefined ? createElement() : arguments[0];
		var target = arguments.length <= 1 || arguments[1] === undefined ? document.body : arguments[1];

		target.appendChild(element);
	}

	function createElement() {
		var tag = arguments.length <= 0 || arguments[0] === undefined ? 'span' : arguments[0];

		return document.createElement(tag);
	}

	function setTextContent() {
		var element = arguments.length <= 0 || arguments[0] === undefined ? createElement() : arguments[0];
		var text = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

		element.textContent = text;
		return element;
	}

	function addClass(element) {
		var className = arguments.length <= 1 || arguments[1] === undefined ? 'text-animator' : arguments[1];

		element.classList.add(className);
		return element;
	}

	function createArrayOfElements() {
		var arr = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];
		var tag = arguments[1];
		var className = arguments[2];

		return arr.map(function (text) {
			return setTextContent(addClass(createElement(tag), className), text);
		});
	}

	function elementsIntoDOM(arr, tag, className, target) {
		createArrayOfElements(arr, tag, className).forEach(function (element) {
			return insertIntoDOM(element, target);
		});
	}

/***/ }
/******/ ])
});
;