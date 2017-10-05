require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("shelljs");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("cheerio");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("robotto");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shelljs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shelljs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_shelljs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cheerio__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_cheerio__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs_extra__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_fs_extra___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_fs_extra__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_robotto__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_robotto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_robotto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers__ = __webpack_require__(12);


var _this = this;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }












var q = ['https://std.regis.ku.ac.th'],
    q_visited = [],
    listRobotsTxt = [];
var LIMIT = 100,
    TIMEOUT = 1000,
    USERAGENT = 'bot',
    DELAY = 100;

var checkUrl = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(oldUrl) {
		return __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						if (!(q.length === 0 || q_visited.length === LIMIT)) {
							_context2.next = 4;
							break;
						}

						__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync('listRobotsTxt.json', JSON.stringify(Object(__WEBPACK_IMPORTED_MODULE_8_lodash__["uniq"])(listRobotsTxt), null, 2), 'utf8');
						console.log('---END---');
						return _context2.abrupt('return');

					case 4:
						new Promise(function () {
							var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(resolve, reject) {
								var position, currentUrl;
								return __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
									while (1) {
										switch (_context.prev = _context.next) {
											case 0:
												if (!oldUrl) {
													_context.next = 8;
													break;
												}

												_context.next = 3;
												return q.findIndex(function (data) {
													return data.indexOf(__WEBPACK_IMPORTED_MODULE_3_url___default.a.parse(oldUrl).host) === -1;
												});

											case 3:
												position = _context.sent;
												currentUrl = q.splice(position, 1)[0];

												setTimeout(function () {
													resolve(currentUrl);
												}, DELAY);
												_context.next = 9;
												break;

											case 8:
												resolve(q.shift());

											case 9:
											case 'end':
												return _context.stop();
										}
									}
								}, _callee, _this);
							}));

							return function (_x2, _x3) {
								return _ref2.apply(this, arguments);
							};
						}()).then(function (currentUrl) {
							Object(__WEBPACK_IMPORTED_MODULE_9__helpers__["b" /* hasRobotsTxt */])(currentUrl).then(function (has) {
								return has && listRobotsTxt.push(__WEBPACK_IMPORTED_MODULE_3_url___default.a.parse(currentUrl).host);
							});
							__WEBPACK_IMPORTED_MODULE_7_robotto___default.a.canCrawl(USERAGENT, currentUrl, function (err, isAllowed) {
								if (isAllowed || err) {
									main(currentUrl);
								} else {
									checkUrl();
								}
							});
						});

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, _this);
	}));

	return function checkUrl(_x) {
		return _ref.apply(this, arguments);
	};
}();

var main = function () {
	var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(currentUrl) {
		var res, urls;
		return __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.prev = 0;
						_context3.next = 3;
						return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(currentUrl, { timeout: TIMEOUT, headers: { 'User-Agent': USERAGENT } });

					case 3:
						res = _context3.sent;

						console.log('====================================');
						console.log(q_visited.length + 1 + ' : ', currentUrl);
						q_visited.push(currentUrl);
						urls = Object(__WEBPACK_IMPORTED_MODULE_9__helpers__["a" /* getUrl */])(currentUrl, res.data, [].concat(q, q_visited));
						_context3.next = 10;
						return Object(__WEBPACK_IMPORTED_MODULE_9__helpers__["c" /* writeContent */])(currentUrl, res.data);

					case 10:
						q.push.apply(q, _toConsumableArray(urls));
						console.log('====================================');
						checkUrl(currentUrl);
						_context3.next = 18;
						break;

					case 15:
						_context3.prev = 15;
						_context3.t0 = _context3['catch'](0);

						checkUrl(currentUrl);

					case 18:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, _this, [[0, 15]]);
	}));

	return function main(_x4) {
		return _ref3.apply(this, arguments);
	};
}();

if (__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync('html')) __WEBPACK_IMPORTED_MODULE_6_fs_extra___default.a.removeSync('html');
if (__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync('listRobotsTxt.json')) __WEBPACK_IMPORTED_MODULE_6_fs_extra___default.a.removeSync('listRobotsTxt.json');
checkUrl();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return writeContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hasRobotsTxt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shelljs__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_shelljs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_shelljs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_url___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_url__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_robotto__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_robotto___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_robotto__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cheerio__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_cheerio___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_cheerio__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








var USERAGENT = 'bot',
    TIMEOUT = 1000;

var writeContent = function writeContent(urlPath, content) {
	var handleUrl = __WEBPACK_IMPORTED_MODULE_3_url___default.a.parse(urlPath);
	var directory = void 0;
	if (handleUrl.path === '/') {
		directory = 'html/' + handleUrl.host;
	} else {
		directory = 'html/' + handleUrl.host + handleUrl.path;
	}
	var rootDirectory = directory.split('/').slice(0, -1).join('/');
	if (!__WEBPACK_IMPORTED_MODULE_1_fs___default.a.existsSync(rootDirectory)) {
		__WEBPACK_IMPORTED_MODULE_2_shelljs___default.a.mkdir('-p', rootDirectory);
	}
	__WEBPACK_IMPORTED_MODULE_1_fs___default.a.writeFileSync(directory, content, 'utf8');
};

var hasRobotsTxt = function () {
	var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(urlPath) {
		var robotsUrl, res;
		return __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_Github_js_crawler_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						robotsUrl = __WEBPACK_IMPORTED_MODULE_5_robotto___default.a.getRobotsUrl(urlPath);
						_context.prev = 1;
						_context.next = 4;
						return __WEBPACK_IMPORTED_MODULE_4_axios___default.a.get(robotsUrl, { maxRedirects: 0, timeout: TIMEOUT, headers: { 'User-Agent': USERAGENT } });

					case 4:
						res = _context.sent;
						return _context.abrupt('return', true);

					case 8:
						_context.prev = 8;
						_context.t0 = _context['catch'](1);
						return _context.abrupt('return', false);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this, [[1, 8]]);
	}));

	return function hasRobotsTxt(_x) {
		return _ref.apply(this, arguments);
	};
}();

var getUrl = function getUrl(currentUrl, content, listUrl) {
	var regx = /.(html|htm)/g;
	var handleCurrentUrl = __WEBPACK_IMPORTED_MODULE_3_url___default.a.parse(currentUrl);
	var protocol = handleCurrentUrl.protocol,
	    host = handleCurrentUrl.host,
	    path = handleCurrentUrl.path;

	var $ = __WEBPACK_IMPORTED_MODULE_6_cheerio___default.a.load(content);
	var urls = $('a').map(function (i, el) {
		var link = $(el).attr('href');
		if (__WEBPACK_IMPORTED_MODULE_3_url___default.a.parse(link).protocol) {
			return link;
		}
		if (link.charAt(0) === '/') {
			return protocol + '//' + host + link;
		} else {
			return protocol + '//' + host + path.split('/').slice(0, -1).join('/') + '/' + link;
		}
	}).get();
	urls = urls.filter(function (data) {
		return regx.test(data) && !listUrl.includes(data);
	});
	return urls;
};

/***/ })
/******/ ]);
//# sourceMappingURL=main.map