/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Background/Utils/chromeStorageHandler.js":
/*!******************************************************!*\
  !*** ./src/Background/Utils/chromeStorageHandler.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getHighPriorityVariables: () => (/* binding */ getHighPriorityVariables),
/* harmony export */   setHighPriorityVariables: () => (/* binding */ setHighPriorityVariables)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var CHROME_STORE_HIGH_PRIORITY = 'CHROME_STORE_HIGH_PRIORITY';
var setHighPriorityVariables = function setHighPriorityVariables(data) {
  chrome.storage.sync.set({
    CHROME_STORE_HIGH_PRIORITY: data
  });
};
var getHighPriorityVariables = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(query) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", new Promise(function (resolve) {
            chrome.storage.sync.get(CHROME_STORE_HIGH_PRIORITY, function (resolution) {
              console.log('high priority fetch result: ', resolution);
              Object.entries(resolution.CHROME_STORE_HIGH_PRIORITY).forEach(function (_ref2) {
                var _ref3 = _slicedToArray(_ref2, 2),
                  key = _ref3[0],
                  val = _ref3[1];
                if (query == key) {
                  resolve(val);
                }
              });
            });
          }));
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getHighPriorityVariables(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/Background/Utils/coreService.js":
/*!*********************************************!*\
  !*** ./src/Background/Utils/coreService.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_LOGGING_DB: () => (/* binding */ ERROR_LOGGING_DB),
/* harmony export */   NOTATE_DB: () => (/* binding */ NOTATE_DB),
/* harmony export */   USER_CONFIGURATION_DB: () => (/* binding */ USER_CONFIGURATION_DB),
/* harmony export */   "default": () => (/* binding */ CoreService)
/* harmony export */ });
/* harmony import */ var _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @universal/Handlers/indexedDBhandler.js */ "./src/Universal/Handlers/indexedDBhandler.js");
/* harmony import */ var _chromeStorageHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chromeStorageHandler.js */ "./src/Background/Utils/chromeStorageHandler.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var NOTATE_DB = "notate";
var ERROR_LOGGING_DB = "errorLogging";
var USER_CONFIGURATION_DB = "userConfiguration";
var CoreService = /*#__PURE__*/function () {
  function CoreService() {
    _classCallCheck(this, CoreService);
    this.databases = {
      notatedb: undefined,
      errorloggingdb: undefined,
      userconfigurationdb: undefined
    };
    this.env = {
      important: {
        launchBehavior: undefined
      },
      common: {},
      namespace: {
        chromeStorage: {
          highPriority: "CHROME_STORE_HIGH_PRIORITY"
        }
      }
    };
  }
  return _createClass(CoreService, [{
    key: "initializeDatabase",
    value: function () {
      var _initializeDatabase = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(name) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return new Promise( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                  var database;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.t0 = name;
                        _context.next = _context.t0 === NOTATE_DB ? 3 : _context.t0 === ERROR_LOGGING_DB ? 8 : _context.t0 === USER_CONFIGURATION_DB ? 13 : 18;
                        break;
                      case 3:
                        _context.next = 5;
                        return new _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](NOTATE_DB);
                      case 5:
                        _this.databases.notatedb = _context.sent;
                        database = _this.databases.notatedb;
                        return _context.abrupt("break", 18);
                      case 8:
                        _context.next = 10;
                        return new _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](ERROR_LOGGING_DB);
                      case 10:
                        _this.databases.errorloggingdb = _context.sent;
                        database = _this.databases.errorloggingdb;
                        return _context.abrupt("break", 18);
                      case 13:
                        _context.next = 15;
                        return new _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](USER_CONFIGURATION_DB);
                      case 15:
                        _this.databases.userconfigurationdb = _context.sent;
                        database = _this.databases.userconfigurationdb;
                        return _context.abrupt("break", 18);
                      case 18:
                        _context.next = 20;
                        return database.inventory;
                      case 20:
                        resolve(database);
                      case 21:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }());
            case 2:
              return _context2.abrupt("return", _context2.sent);
            case 3:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function initializeDatabase(_x) {
        return _initializeDatabase.apply(this, arguments);
      }
      return initializeDatabase;
    }()
  }, {
    key: "databaseRequest",
    value: function () {
      var _databaseRequest = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(port, message) {
        var _message$content2,
          _message$content3,
          _this2 = this,
          _message$content4,
          _message$content5,
          _db;
        var _message$content, data, store, db, type, target, insertOperation, deleteOperation;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              if (!(_typeof(port) === 'object' && message !== null && message !== void 0 && message.type && message !== null && message !== void 0 && message.content && message !== null && message !== void 0 && (_message$content = message.content) !== null && _message$content !== void 0 && _message$content.database)) {
                _context5.next = 38;
                break;
              }
              type = message.type, target = message.content.database;
              _context5.t0 = target;
              _context5.next = _context5.t0 === NOTATE_DB ? 6 : _context5.t0 === ERROR_LOGGING_DB ? 8 : _context5.t0 === USER_CONFIGURATION_DB ? 10 : 12;
              break;
            case 6:
              db = this.databases.notatedb;
              return _context5.abrupt("break", 12);
            case 8:
              db = this.databases.errorloggingdb;
              return _context5.abrupt("break", 12);
            case 10:
              db = this.databases.userconfigurationdb;
              return _context5.abrupt("break", 12);
            case 12:
              _context5.t1 = type;
              _context5.next = _context5.t1 === 'GET_DATABASE' ? 15 : _context5.t1 === 'POST_DATABASE' ? 17 : _context5.t1 === 'DELETE_DATABASE' ? 23 : _context5.t1 === 'RELOAD_DATABASE' ? 29 : 36;
              break;
            case 15:
              port.postMessage({
                type: 'DATABASE',
                content: {
                  data: db,
                  database: target
                }
              });
              return _context5.abrupt("break", 36);
            case 17:
              data = message === null || message === void 0 || (_message$content2 = message.content) === null || _message$content2 === void 0 ? void 0 : _message$content2.data;
              store = message === null || message === void 0 || (_message$content3 = message.content) === null || _message$content3 === void 0 ? void 0 : _message$content3.store;
              insertOperation = /*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return db;
                      case 2:
                        _context3.next = 4;
                        return db.insertData;
                      case 4:
                        if (!(db.insertData === 'undefined')) {
                          _context3.next = 11;
                          break;
                        }
                        _context3.next = 7;
                        return _this2.initializeDatabase(target);
                      case 7:
                        _context3.next = 9;
                        return insertOperation();
                      case 9:
                        _context3.next = 27;
                        break;
                      case 11:
                        if (!(data && store && typeof db.insertData === 'function')) {
                          _context3.next = 22;
                          break;
                        }
                        _context3.next = 14;
                        return db.insertData(data, store);
                      case 14:
                        _context3.next = 16;
                        return _this2.initializeDatabase(target);
                      case 16:
                        if (!(store === 'USER_CONFIGURATION')) {
                          _context3.next = 19;
                          break;
                        }
                        _context3.next = 19;
                        return _this2.updateBackgroundEnvVariables();
                      case 19:
                        port.postMessage({
                          type: 'DATABASE',
                          content: {
                            data: db,
                            database: target
                          }
                        });
                        _context3.next = 27;
                        break;
                      case 22:
                        console.log('insertData failed both checks for some reason...');
                        _context3.next = 25;
                        return _this2.initializeDatabase(target);
                      case 25:
                        _context3.next = 27;
                        return insertOperation();
                      case 27:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function insertOperation() {
                  return _ref2.apply(this, arguments);
                };
              }();
              _context5.next = 22;
              return insertOperation();
            case 22:
              return _context5.abrupt("break", 36);
            case 23:
              data = message === null || message === void 0 || (_message$content4 = message.content) === null || _message$content4 === void 0 ? void 0 : _message$content4.data;
              store = message === null || message === void 0 || (_message$content5 = message.content) === null || _message$content5 === void 0 ? void 0 : _message$content5.store;
              deleteOperation = /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return db;
                      case 2:
                        if (!(db.deleteData === 'undefined')) {
                          _context4.next = 9;
                          break;
                        }
                        _context4.next = 5;
                        return _this2.initializeDatabase(target);
                      case 5:
                        _context4.next = 7;
                        return deleteOperation();
                      case 7:
                        _context4.next = 22;
                        break;
                      case 9:
                        if (!(data && store && typeof db.deleteData === 'function')) {
                          _context4.next = 17;
                          break;
                        }
                        _context4.next = 12;
                        return db.deleteData(data, store);
                      case 12:
                        _context4.next = 14;
                        return _this2.initializeDatabase(target);
                      case 14:
                        port.postMessage({
                          type: 'DATABASE',
                          content: {
                            data: db,
                            database: target
                          }
                        });
                        _context4.next = 22;
                        break;
                      case 17:
                        console.log('deleteData failed both checks for some reason...');
                        _context4.next = 20;
                        return _this2.initializeDatabase(target);
                      case 20:
                        _context4.next = 22;
                        return deleteOperation();
                      case 22:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));
                return function deleteOperation() {
                  return _ref3.apply(this, arguments);
                };
              }();
              _context5.next = 28;
              return deleteOperation();
            case 28:
              return _context5.abrupt("break", 36);
            case 29:
              if (!(!db || ((_db = db) === null || _db === void 0 ? void 0 : _db.inventory) instanceof Promise)) {
                _context5.next = 34;
                break;
              }
              _context5.next = 32;
              return this.initializeDatabase(target);
            case 32:
              _context5.next = 35;
              break;
            case 34:
              port.postMessage({
                type: 'DATABASE',
                content: {
                  data: db,
                  database: target
                }
              });
            case 35:
              return _context5.abrupt("break", 36);
            case 36:
              _context5.next = 39;
              break;
            case 38:
              throw new Error("message " + JSON.stringify(message) + "\n" + " either has an invalid schema or is missing one or more required properties." + "\nmessages are expected to have '.type', '.content', and '.content.database' fields.");
            case 39:
              _context5.next = 45;
              break;
            case 41:
              _context5.prev = 41;
              _context5.t2 = _context5["catch"](0);
              _context5.next = 45;
              return this.generateErrorLog(_context5.t2, {
                "function": 'databaseRequest'
              });
            case 45:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 41]]);
      }));
      function databaseRequest(_x4, _x5) {
        return _databaseRequest.apply(this, arguments);
      }
      return databaseRequest;
    }()
  }, {
    key: "updateBackgroundEnvVariables",
    value: function () {
      var _updateBackgroundEnvVariables = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this3 = this;
        var launchBehavior, _this$databases, _this$databases2;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return this.databases.userconfigurationdb.inventory;
            case 3:
              this.env.important.launchBehavior = this.databases.userconfigurationdb.inventory.USER_CONFIGURATION[0].Notate.page.pageOpenBehavior.value;
              launchBehavior = this.env.important.launchBehavior;
              _context6.next = 11;
              break;
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              _context6.next = 11;
              return this.generateErrorLog(_context6.t0, {
                "function": "updateBackgroundEnvVariables"
              });
            case 11:
              _context6.prev = 11;
              if (!(!((_this$databases = this.databases) !== null && _this$databases !== void 0 && (_this$databases = _this$databases.userconfigurationdb) !== null && _this$databases !== void 0 && _this$databases.inventory) || !((_this$databases2 = this.databases) !== null && _this$databases2 !== void 0 && _this$databases2.userconfigurationdb))) {
                _context6.next = 23;
                break;
              }
              console.log('userconfigurationdb was not loaded. reloading now...');
              _context6.prev = 14;
              _context6.next = 17;
              return this.initializeDatabase(USER_CONFIGURATION_DB);
            case 17:
              _context6.next = 21;
              break;
            case 19:
              _context6.prev = 19;
              _context6.t1 = _context6["catch"](14);
            case 21:
              _context6.next = 23;
              return this.updateBackgroundEnvVariables();
            case 23:
              if (typeof launchBehavior === 'undefined') {
                console.log('unable to set up background env variables. retrying in 500ms...');
                setTimeout(function () {
                  return _this3.updateBackgroundEnvVariables();
                }, 500);
              }
              if (launchBehavior) {
                console.log('env variables initialized. Updating high priority env variables...');
                (0,_chromeStorageHandler_js__WEBPACK_IMPORTED_MODULE_1__.setHighPriorityVariables)(this.env.important);
              }
              return _context6.finish(11);
            case 26:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0, 7, 11, 26], [14, 19]]);
      }));
      function updateBackgroundEnvVariables() {
        return _updateBackgroundEnvVariables.apply(this, arguments);
      }
      return updateBackgroundEnvVariables;
    }()
  }, {
    key: "generateErrorLog",
    value: function () {
      var _generateErrorLog = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(error) {
        var _this$databases$error, _this$databases$error2;
        var context,
          _chrome$runtime$getMa,
          errorLog,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              context = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : {};
              console.log('logging error...');
              if (!(!this.databases.errorloggingdb || ((_this$databases$error = this.databases.errorloggingdb) === null || _this$databases$error === void 0 ? void 0 : _this$databases$error.inventory) instanceof Promise || !((_this$databases$error2 = this.databases.errorloggingdb) !== null && _this$databases$error2 !== void 0 && _this$databases$error2.insertData))) {
                _context7.next = 5;
                break;
              }
              _context7.next = 5;
              return this.initializeDatabase(ERROR_LOGGING_DB);
            case 5:
              _context7.prev = 5;
              errorLog = {
                timestamp: new Date().toISOString(),
                error: {
                  name: error === null || error === void 0 ? void 0 : error.name,
                  message: error === null || error === void 0 ? void 0 : error.message,
                  stackTrace: error === null || error === void 0 ? void 0 : error.stack
                },
                context: _objectSpread(_objectSpread({}, context), {}, {
                  url: chrome.runtime.getURL(''),
                  extensionId: chrome.runtime.id,
                  manifestVersion: (_chrome$runtime$getMa = chrome.runtime.getManifest()) === null || _chrome$runtime$getMa === void 0 ? void 0 : _chrome$runtime$getMa.manifest_version
                })
              };
              _context7.next = 9;
              return this.databases.errorloggingdb.insertData(errorLog, "ERRORS");
            case 9:
              _context7.next = 13;
              break;
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](5);
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 11]]);
      }));
      function generateErrorLog(_x6) {
        return _generateErrorLog.apply(this, arguments);
      }
      return generateErrorLog;
    }() //	setHighPriorityVariables() {
    //		const target = this.env.namespace.chromeStorage.highPriority 
    //		const payload = this.env.important
    //
    //		chrome.storage.sync.set({ target : payload })
    //	}
    //
    //
    //	fetchHighPriorityVariables() {
    //		let result;
    //
    //		const target = this.env.namespace.chromeStorage.highPriority
    //
    //		chrome.storage.sync.get(target, (res)=>{
    //			result = res	
    //		})
    //
    //		return result
    //	}
  }]);
}();


/***/ }),

/***/ "./src/Background/Utils/eventActions.js":
/*!**********************************************!*\
  !*** ./src/Background/Utils/eventActions.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   spawnNotateTab: () => (/* binding */ spawnNotateTab)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var NOTATE_LANDING_PAGE = './index.html';
var CHROME_NEWTAB = 'chrome://newtab/';

/*
FUNCTION:
	Injects the Notate starting page when the New Tab button is	
	clicked
*/
var spawnNotateTab = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(directive) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (directive === "onNewTab") {
            chrome.tabs.query({
              active: true,
              currentWindow: true
            }, function (tabs) {
              var tab = tabs[0];
              if ((tab === null || tab === void 0 ? void 0 : tab.url) == CHROME_NEWTAB || (tab === null || tab === void 0 ? void 0 : tab.pendingUrl) == CHROME_NEWTAB) {
                chrome.tabs.update(tab.id, {
                  url: chrome.runtime.getURL(NOTATE_LANDING_PAGE)
                });
              } else {
                console.log('statement not executed');
                console.log(tab !== null && tab !== void 0 && tab.url ? ('TAB URL: ', tab === null || tab === void 0 ? void 0 : tab.url) : '');
                console.log('PENDING TAB URL: ', tab === null || tab === void 0 ? void 0 : tab.pendingUrl);
              }
            });
          } else if (directive === "onClickPopup") {
            chrome.tabs.query({
              active: true,
              currentWindow: true
            }, function (tabs) {
              var tab = tabs[0];
              chrome.tabs.update(tab.id, {
                url: chrome.runtime.getURL(NOTATE_LANDING_PAGE)
              });
            });
          }
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function spawnNotateTab(_x) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/DevUtils/Scripts/inspectIndexedDBStore.js":
/*!*******************************************************!*\
  !*** ./src/DevUtils/Scripts/inspectIndexedDBStore.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inspectIDBStore: () => (/* binding */ inspectIDBStore)
/* harmony export */ });
function inspectIDBStore(databaseName) {
  if (!databaseName) throw new Error("inspectIDBStore() 'databaseName' param expected but none supplied.");
  return new Promise(function (resolve, reject) {
    var request = indexedDB.open(databaseName);
    request.onerror = function (event) {
      return reject("Error opening database: ".concat(event.target.error));
    };
    request.onsuccess = function (event) {
      var db = event.target.result;
      var storeNames = Array.from(db.objectStoreNames);
      var allStoresData = {};
      var completedStores = 0;
      storeNames.forEach(function (storeName) {
        var transaction = db.transaction(storeName, 'readonly');
        var store = transaction.objectStore(storeName);
        var getAllRequest = store.getAll();
        getAllRequest.onerror = function (event) {
          return reject("Error fetching data from ".concat(storeName, ": ").concat(event.target.error));
        };
        getAllRequest.onsuccess = function (event) {
          allStoresData[storeName] = event.target.result;
          completedStores++;
          if (completedStores === storeNames.length) {
            console.log("Content of all stores in \"".concat(databaseName, "\":"), allStoresData);
            resolve(allStoresData);
          }
        };
        transaction.onerror = function (event) {
          return reject("Transaction error for ".concat(storeName, ": ").concat(event.target.error));
        };
      });
    };
  });
}

// Usage example:
// inspectIDBStore('NOTATE_DB').then(data => console.log(data)).catch(error => console.error(error));
// inspectIDBStore('ERROR_LOGGING_DB').then(data => console.log(data)).catch(error => console.error(error));// Usage example:
// inspectIDBStore('notate', 'USER_CONFIGURATION').then(data => console.log(data)).catch(error => console.error(error));// Usage example:
// viewIndexedDBStore('USER_CONFIGURATION').then(data => console.log(data)).catch(error => console.error(error));

/***/ }),

/***/ "./src/DevUtils/devutils.js":
/*!**********************************!*\
  !*** ./src/DevUtils/devutils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LaunchDevTools)
/* harmony export */ });
/* harmony import */ var _Scripts_inspectIndexedDBStore_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scripts/inspectIndexedDBStore.js */ "./src/DevUtils/Scripts/inspectIndexedDBStore.js");

function LaunchDevTools() {
  try {
    globalThis.inspectIDBStore = _Scripts_inspectIndexedDBStore_js__WEBPACK_IMPORTED_MODULE_0__.inspectIDBStore;
    globalThis.ping = ping;
    globalThis.ping();
  } catch (error) {
    error;
    debugger;
  }
}
var ping = function ping() {
  console.log('ping');
};

/***/ }),

/***/ "./src/Universal/Handlers/UserConfiguration.js":
/*!*****************************************************!*\
  !*** ./src/Universal/Handlers/UserConfiguration.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfigurationTemplate: () => (/* binding */ ConfigurationTemplate)
/* harmony export */ });
var ConfigurationTemplate = {
  Notate: {
    search: {
      preferredEngine: {
        value: "perplexityai",
        description: "Sets your preferred Search Engine.",
        options: ["google", "bing", "duckduckgo", "yahoo", "baidu", "yandex", "ecosia", "perplexityai"],
        enabled: true
      },
      searchNotes: {
        value: "true",
        description: "Sets whether or not notes should be searched for when searching in the search bar.",
        options: ["true", "false"],
        enabled: true
      }
    },
    page: {
      pageOpenBehavior: {
        value: "onNewTab",
        description: "Sets default page to open up when clicking the New Tab Button.",
        options: ["onNewTab", "onClickPopup", "false"],
        enabled: true
      },
      backgroundWallpaper: {
        value: "darkWood",
        description: "Sets wallpaper for Notate.",
        options: ["darkWood", "corkBoard", "marbleChessBoard", "notePaper"],
        enabled: true
      }
    },
    noteModal: {
      preferredColor: {
        value: "yellow",
        description: "Sets preferred color when creating new notes",
        options: ["red", "yellow", "blue", "green", "orange", "pink", "purple"],
        enabled: true
      }
    }
  },
  WebContent: {
    tools: {},
    behavior: {
      newNotePopup: {
        value: "true",
        description: "Sets whether the New Note Button shows when hovering the cursor in the corner of the page.",
        options: ["true", "false"],
        enabled: true
      }
    }
  }
};

/***/ }),

/***/ "./src/Universal/Handlers/indexedDBhandler.js":
/*!****************************************************!*\
  !*** ./src/Universal/Handlers/indexedDBhandler.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DBWorker: () => (/* binding */ DBWorker),
/* harmony export */   "default": () => (/* binding */ DatabaseAdapter)
/* harmony export */ });
/* harmony import */ var _UserConfiguration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserConfiguration.js */ "./src/Universal/Handlers/UserConfiguration.js");
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var DatabaseAdapter = /*#__PURE__*/function () {
  function DatabaseAdapter(databaseName) {
    _classCallCheck(this, DatabaseAdapter);
    this.mapper = {
      db: {
        notate: {
          name: 'NOTATE_DB',
          stores: ['NOTES', 'NOTEBOOKS']
        },
        errorLogging: {
          name: 'ERROR_LOGGING_DB',
          stores: ['ERRORS']
        },
        userConfiguration: {
          name: 'USER_CONFIGURATION_DB',
          stores: ['USER_CONFIGURATION']
        }
      }
    };
    this.connection = this.connectToDB(databaseName);
    this.inventory = null;
    this.request = null;
  }
  return _createClass(DatabaseAdapter, [{
    key: "connectToDB",
    value: function () {
      var _connectToDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(databaseName) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var legend = _this.mapper.db[databaseName];
                var DBBrige = indexedDB.open(legend.name, 1);
                DBBrige.onsuccess = /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(e) {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          if (!(_this.workermessage === 'function')) {
                            _context.next = 3;
                            break;
                          }
                          _context.next = 3;
                          return _this.workermessage();
                        case 3:
                          _this.connection = e.target.result;

                          //console.log(`${databaseName} connected. awaiting inventory...`)
                          _context.next = 6;
                          return _this.getInventory();
                        case 6:
                          _this.inventory = _context.sent;
                          resolve(_this.connection);
                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }();
                DBBrige.onerror = function (e) {
                  return reject(console.error('error initing DB: ' + e.target.error));
                };
                DBBrige.onupgradeneeded = /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(e) {
                    var transaction;
                    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                      while (1) switch (_context2.prev = _context2.next) {
                        case 0:
                          //console.log(`Upgrading DB ${databaseName}...`)

                          _this.connection = e.target.result;
                          transaction = e.target.transaction;
                          legend.stores.forEach(function (storeKey) {
                            _this.connection.createObjectStore(storeKey, {
                              keyPath: 'id',
                              autoIncrement: true
                            });
                          });
                          if (!legend.stores.some(function (store) {
                            return store === "USER_CONFIGURATION";
                          })) {
                            _context2.next = 6;
                            break;
                          }
                          _context2.next = 6;
                          return _this.setupUserConfiguration(transaction);
                        case 6:
                          if (!(_this.workermessage === 'function')) {
                            _context2.next = 9;
                            break;
                          }
                          _context2.next = 9;
                          return _this.workermessage();
                        case 9:
                          _context2.next = 11;
                          return _this.getInventory();
                        case 11:
                          _this.inventory = _context2.sent;
                          resolve(_this.connection);
                        case 13:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function (_x3) {
                    return _ref2.apply(this, arguments);
                  };
                }();
              }));
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function connectToDB(_x) {
        return _connectToDB.apply(this, arguments);
      }
      return connectToDB;
    }()
  }, {
    key: "setupUserConfiguration",
    value: function () {
      var _setupUserConfiguration = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(transaction) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                try {
                  var store = transaction.objectStore('USER_CONFIGURATION');
                  store.add(_UserConfiguration_js__WEBPACK_IMPORTED_MODULE_0__.ConfigurationTemplate);
                } catch (e) {
                  console.error(e);
                  console.error('config upload failed');
                }
              }));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function setupUserConfiguration(_x4) {
        return _setupUserConfiguration.apply(this, arguments);
      }
      return setupUserConfiguration;
    }() // Needs to be worked on
  }, {
    key: "getInventory",
    value: function () {
      var _getInventory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var _this2 = this;
        var db, inventory, allStoresWereFetched;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.connection;
            case 2:
              db = this.connection;
              inventory = {};
              allStoresWereFetched = function allStoresWereFetched(dataset) {
                var formula = function formula(e) {
                  return e === false;
                };
                var results = dataset.some(formula);
                return !results;
              };
              return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
                  var dbStoreNames, stores;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        dbStoreNames = db.objectStoreNames;
                        stores = {};
                        Object.values(dbStoreNames).forEach(function (name) {
                          stores[name] = false;
                        });
                        Object.keys(stores).forEach(function (store) {
                          inventory[store] = [];
                          var transaction = db.transaction(store, 'readonly');
                          var objStore = transaction.objectStore(store);
                          var request = objStore.getAll();
                          request.onsuccess = function (e) {
                            var results = e.target.result;
                            if (_typeof(results) === 'object' && results.length === 0) {
                              stores[store] = true;
                              var comparison = allStoresWereFetched(Object.values(stores));
                              if (comparison) {
                                _this2.inventory = inventory;
                                resolve(_this2.inventory);
                              }
                            }
                            results.forEach(function (item) {
                              inventory[store].push(item);
                              stores[store] = true;
                              var comparison = allStoresWereFetched(Object.values(stores));
                              if (comparison) {
                                _this2.inventory = inventory;
                                resolve(_this2.inventory);
                              }
                            });
                          };
                          request.onerror = function (e) {
                            reject(console.error("Error processing request: ".concat(e.error)));
                          };
                        });
                      case 4:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x5, _x6) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 6:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function getInventory() {
        return _getInventory.apply(this, arguments);
      }
      return getInventory;
    }()
  }, {
    key: "insertData",
    value: function () {
      var _insertData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data, target_store) {
        var _this3 = this;
        var db;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.next = 2;
              return this.connection;
            case 2:
              db = _context8.sent;
              return _context8.abrupt("return", new Promise(function (resolve, reject) {
                var transaction = db.transaction([target_store], 'readwrite');
                var store = transaction.objectStore(target_store);
                var request = store.put(data);
                request.onsuccess = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
                  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                    while (1) switch (_context7.prev = _context7.next) {
                      case 0:
                        _context7.next = 2;
                        return _this3.cleanup();
                      case 2:
                        resolve('Item added to DB');
                      case 3:
                      case "end":
                        return _context7.stop();
                    }
                  }, _callee7);
                }));
                request.onerror = function (e) {
                  reject(console.error("Error adding data: ".concat(e.error)));
                };
              }));
            case 4:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function insertData(_x7, _x8) {
        return _insertData.apply(this, arguments);
      }
      return insertData;
    }()
  }, {
    key: "deleteData",
    value: function () {
      var _deleteData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data, target_store) {
        var _this4 = this;
        var db;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.connection;
            case 2:
              db = _context10.sent;
              return _context10.abrupt("return", new Promise(function (resolve, reject) {
                var transaction = db.transaction([target_store], 'readwrite');
                var store = transaction.objectStore(target_store);
                if (data !== null && data !== void 0 && data.id) {
                  var item = data.id;
                  var request = store["delete"](item);
                  request.onsuccess = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
                    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                      while (1) switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.next = 2;
                          return _this4.cleanup();
                        case 2:
                          resolve('Item removed from DB');
                        case 3:
                        case "end":
                          return _context9.stop();
                      }
                    }, _callee9);
                  }));
                  request.onerror = function (e) {
                    reject(console.error("Something went wrong while attempting to perform DELETE operation: ".concat(e.error)));
                  };
                } else {
                  reject(console.error("Item to delete does not have a valid schema for this database."));
                }
              }));
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function deleteData(_x9, _x10) {
        return _deleteData.apply(this, arguments);
      }
      return deleteData;
    }()
  }, {
    key: "cleanup",
    value: function () {
      var _cleanup = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.getInventory();
            case 2:
              this.inventory = _context11.sent;
              if (!(this.workermessage === 'function')) {
                _context11.next = 6;
                break;
              }
              _context11.next = 6;
              return this.workermessage();
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function cleanup() {
        return _cleanup.apply(this, arguments);
      }
      return cleanup;
    }()
  }]);
}();

var DBWorker = /*#__PURE__*/function (_DatabaseAdapter) {
  function DBWorker() {
    _classCallCheck(this, DBWorker);
    return _callSuper(this, DBWorker);
  }
  _inherits(DBWorker, _DatabaseAdapter);
  return _createClass(DBWorker);
}(DatabaseAdapter);

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
var __webpack_exports__ = {};
/*!**************************************!*\
  !*** ./src/Background/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BackgroundService: () => (/* binding */ BackgroundService),
/* harmony export */   ERROR_LOGGING_DB: () => (/* binding */ ERROR_LOGGING_DB),
/* harmony export */   NOTATE_DB: () => (/* binding */ NOTATE_DB),
/* harmony export */   USER_CONFIGURATION_DB: () => (/* binding */ USER_CONFIGURATION_DB)
/* harmony export */ });
/* harmony import */ var _Utils_coreService_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils/coreService.js */ "./src/Background/Utils/coreService.js");
/* harmony import */ var _Utils_eventActions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils/eventActions.js */ "./src/Background/Utils/eventActions.js");
/* harmony import */ var _Utils_chromeStorageHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils/chromeStorageHandler.js */ "./src/Background/Utils/chromeStorageHandler.js");
/* harmony import */ var _dev_devutils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dev/devutils.js */ "./src/DevUtils/devutils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





/*
 * DevTool Call
*/
(0,_dev_devutils_js__WEBPACK_IMPORTED_MODULE_3__["default"])();

/*
 * Constants
*/
var NOTATE_DB = "notate";
var ERROR_LOGGING_DB = "errorLogging";
var USER_CONFIGURATION_DB = "userConfiguration";
var CHROME_STORE_HIGH_PRIORITY = "CHROME_STORE_HIGH_PRIORITY";
var BackgroundService = new _Utils_coreService_js__WEBPACK_IMPORTED_MODULE_0__["default"]();

/*
EVENT LISTENER
	Fires on Chrome startup. Is one of 2 chrome event listeners
	that fires bootstrapApplication().
*/
chrome.runtime.onStartup.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var launchBehavior;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return bootstrapApplication();
      case 2:
        launchBehavior = BackgroundService.env.important.launchBehavior;
        if (launchBehavior && launchBehavior === 'onNewTab') {
          (0,_Utils_eventActions_js__WEBPACK_IMPORTED_MODULE_1__.spawnNotateTab)(launchBehavior);
        }
      case 4:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));

/*
EVENT LISTENER
	Fires on Chrome startup. Is one of 2 chrome event listeners
	that fires bootstrapApplication().
*/
chrome.runtime.onInstalled.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var launchBehavior;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return bootstrapApplication();
      case 2:
        launchBehavior = BackgroundService.env.important.launchBehavior;
        if (launchBehavior && launchBehavior === 'onNewTab') {
          (0,_Utils_eventActions_js__WEBPACK_IMPORTED_MODULE_1__.spawnNotateTab)(launchBehavior);
        }
      case 4:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));

/*
EVENT LISTENER:
	Fires and runs the spawnTab() function on new tab if user 
	configuration has 'onNewTab' enabled.
*/
chrome.tabs.onCreated.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  var launchBehavior;
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return (0,_Utils_chromeStorageHandler_js__WEBPACK_IMPORTED_MODULE_2__.getHighPriorityVariables)('launchBehavior');
      case 2:
        launchBehavior = _context3.sent;
        if (launchBehavior === 'onNewTab') (0,_Utils_eventActions_js__WEBPACK_IMPORTED_MODULE_1__.spawnNotateTab)(launchBehavior);
      case 4:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})));

/*
EVENT LISTENER:
	Fires and runs spawnTab() function when user clicks Notate
	popup
*/
chrome.action.onClicked.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var launchBehavior;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return (0,_Utils_chromeStorageHandler_js__WEBPACK_IMPORTED_MODULE_2__.getHighPriorityVariables)('launchBehavior');
      case 2:
        launchBehavior = _context4.sent;
        if (launchBehavior === 'onClickPopup') (0,_Utils_eventActions_js__WEBPACK_IMPORTED_MODULE_1__.spawnNotateTab)(launchBehavior);
      case 4:
      case "end":
        return _context4.stop();
    }
  }, _callee4);
})));

/*
EVENT LISTENER:
	Fires when an incoming database connection is received and	
	delegates all database operations to the databaseRequest()
	function.
*/
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name === 'DATABASE_CONNECTION') {
    port.onMessage.addListener( /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(message) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return BackgroundService.databaseRequest(port, message);
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      return function (_x) {
        return _ref5.apply(this, arguments);
      };
    }());
  }
});

/*
FUNCTION:
	Intializes application by grabbing IDB Stores + updating necessary background worker 
	variables. Should only fire @ browser launch / extension install.
*/
var bootstrapApplication = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    var _BackgroundService$da, _BackgroundService$da2;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return Promise.allSettled([BackgroundService.initializeDatabase(USER_CONFIGURATION_DB), BackgroundService.initializeDatabase(ERROR_LOGGING_DB), BackgroundService.initializeDatabase(NOTATE_DB)]);
        case 2:
          if (!(!BackgroundService.databases.errorloggingdb || ((_BackgroundService$da = BackgroundService.databases.errorloggingdb) === null || _BackgroundService$da === void 0 ? void 0 : _BackgroundService$da.inventory) instanceof Promise)) {
            _context6.next = 5;
            break;
          }
          _context6.next = 5;
          return BackgroundService.initializeDatabase(ERROR_LOGGING_DB);
        case 5:
          if (!(BackgroundService.databases.userconfigurationdb instanceof Promise || !BackgroundService.databases.userconfigurationdb || !((_BackgroundService$da2 = BackgroundService.databases) !== null && _BackgroundService$da2 !== void 0 && _BackgroundService$da2.inventory) || (BackgroundService === null || BackgroundService === void 0 ? void 0 : BackgroundService.inventory) instanceof Promise)) {
            _context6.next = 10;
            break;
          }
          _context6.next = 8;
          return BackgroundService.initializeDatabase(USER_CONFIGURATION_DB);
        case 8:
          _context6.next = 12;
          break;
        case 10:
          _context6.next = 12;
          return BackgroundService.updateBackgroundEnvVariables();
        case 12:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function bootstrapApplication() {
    return _ref6.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Used to quickly fetch env variables which is needed at startup.
*/
var fetchHighPriorityVariables = function fetchHighPriorityVariables() {
  chrome.storage.sync.get([CHROME_STORE_HIGH_PRIORITY], function (ENV_VARS) {
    console.log('ENV_VARS: ', ENV_VARS);
    try {
      launchBehavior = ENV_VARS[CHROME_STORE_HIGH_PRIORITY].pageBehavior;
    } catch (error) {}
  });
};
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBQXVKLFNBQUEsQ0FBQTlLLElBQUE7WUFBQTtVQUFBO1VBQUE4SyxTQUFBLENBQUE5SyxJQUFBO1VBQUEsT0FFekNzVCxpQkFBaUIsQ0FBQ25MLGtCQUFrQixDQUFDdkIscUJBQXFCLENBQUM7UUFBQTtVQUFBa0UsU0FBQSxDQUFBOUssSUFBQTtVQUFBO1FBQUE7VUFBQThLLFNBQUEsQ0FBQTlLLElBQUE7VUFBQSxPQUNyRHNULGlCQUFpQixDQUFDMUosNEJBQTRCLENBQUMsQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBa0IsU0FBQSxDQUFBaEosSUFBQTtNQUFBO0lBQUEsR0FBQTJJLFFBQUE7RUFBQSxDQUU3RDtFQUFBLGdCQXhCS2dKLG9CQUFvQkEsQ0FBQTtJQUFBLE9BQUFRLEtBQUEsQ0FBQWhRLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0F3QnpCOztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTXFRLDBCQUEwQixHQUFJLFNBQTlCQSwwQkFBMEJBLENBQUEsRUFBVTtFQUN6QzlQLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxJQUFJLENBQUNRLEdBQUcsQ0FBQyxDQUFDYiwwQkFBMEIsQ0FBQyxFQUFFLFVBQUNrUSxRQUFRLEVBQUc7SUFDakVuUCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVrUCxRQUFRLENBQUM7SUFDbkMsSUFBSTtNQUNIbE4sY0FBYyxHQUFHa04sUUFBUSxDQUFDbFEsMEJBQTBCLENBQUMsQ0FBQ21RLFlBQVk7SUFDbkUsQ0FBQyxDQUFDLE9BQU81USxLQUFLLEVBQUUsQ0FDaEI7RUFDRCxDQUFDLENBQUM7QUFDSCxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9CYWNrZ3JvdW5kL1V0aWxzL2Nocm9tZVN0b3JhZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL3F1aWNrLW5vdGVzLy4vc3JjL0JhY2tncm91bmQvVXRpbHMvY29yZVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvQmFja2dyb3VuZC9VdGlscy9ldmVudEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvRGV2VXRpbHMvU2NyaXB0cy9pbnNwZWN0SW5kZXhlZERCU3RvcmUuanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvRGV2VXRpbHMvZGV2dXRpbHMuanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvVW5pdmVyc2FsL0hhbmRsZXJzL1VzZXJDb25maWd1cmF0aW9uLmpzIiwid2VicGFjazovL3F1aWNrLW5vdGVzLy4vc3JjL1VuaXZlcnNhbC9IYW5kbGVycy9pbmRleGVkREJoYW5kbGVyLmpzIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvQmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZID0gJ0NIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZJ1xuXG5leHBvcnQgY29uc3Qgc2V0SGlnaFByaW9yaXR5VmFyaWFibGVzID0gKGRhdGEpID0+IHtcblx0XHRjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IENIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZIDogZGF0YSB9KVxufSBcblxuZXhwb3J0IGNvbnN0IGdldEhpZ2hQcmlvcml0eVZhcmlhYmxlcyA9IGFzeW5jIChxdWVyeSkgPT4ge1xuXG5cdHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XG5cdFx0Y2hyb21lLnN0b3JhZ2Uuc3luYy5nZXQoQ0hST01FX1NUT1JFX0hJR0hfUFJJT1JJVFksIChyZXNvbHV0aW9uKT0+e1xuXHRcdFx0Y29uc29sZS5sb2coJ2hpZ2ggcHJpb3JpdHkgZmV0Y2ggcmVzdWx0OiAnLCByZXNvbHV0aW9uKVxuXG5cdFx0XHRPYmplY3QuZW50cmllcyhyZXNvbHV0aW9uLkNIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZKS5mb3JFYWNoKChbIGtleSwgdmFsIF0pPT57XG5cdFx0XHRcdGlmIChxdWVyeSA9PSBrZXkpIHtcblx0XHRcdFx0XHRyZXNvbHZlKHZhbClcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHR9KVx0XG5cdH0pXG5cbn1cbiIsImltcG9ydCBEYXRhYmFzZUFkYXB0ZXIgZnJvbSAnQHVuaXZlcnNhbC9IYW5kbGVycy9pbmRleGVkREJoYW5kbGVyLmpzJztcbmltcG9ydCB7IHNldEhpZ2hQcmlvcml0eVZhcmlhYmxlcyB9IGZyb20gJy4vY2hyb21lU3RvcmFnZUhhbmRsZXIuanMnXG5cbmV4cG9ydCBjb25zdCBOT1RBVEVfREIgPSBcIm5vdGF0ZVwiXG5leHBvcnQgY29uc3QgRVJST1JfTE9HR0lOR19EQiA9IFwiZXJyb3JMb2dnaW5nXCJcbmV4cG9ydCBjb25zdCBVU0VSX0NPTkZJR1VSQVRJT05fREIgPSBcInVzZXJDb25maWd1cmF0aW9uXCJcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcmVTZXJ2aWNlIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5kYXRhYmFzZXMgPSB7XG5cdFx0XHRub3RhdGVkYjogdW5kZWZpbmVkLFxuXHRcdFx0ZXJyb3Jsb2dnaW5nZGI6IHVuZGVmaW5lZCxcblx0XHRcdHVzZXJjb25maWd1cmF0aW9uZGI6IHVuZGVmaW5lZCBcblx0XHR9XG5cdFx0dGhpcy5lbnYgPSB7XG5cdFx0XHRpbXBvcnRhbnQ6IHtcblx0XHRcdFx0bGF1bmNoQmVoYXZpb3I6IHVuZGVmaW5lZFxuXHRcdFx0fSxcblx0XHRcdGNvbW1vbjoge1xuXG5cdFx0XHR9LFxuXHRcdFx0bmFtZXNwYWNlOiB7XG5cdFx0XHRcdGNocm9tZVN0b3JhZ2U6IHtcblx0XHRcdFx0XHRoaWdoUHJpb3JpdHk6IFwiQ0hST01FX1NUT1JFX0hJR0hfUFJJT1JJVFlcIlxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdFxuXG5cdGFzeW5jIGluaXRpYWxpemVEYXRhYmFzZShuYW1lKSB7XG5cdFx0cmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGxldCBkYXRhYmFzZTtcblxuXHRcdFx0c3dpdGNoIChuYW1lKSB7XG5cdFx0XHRcdGNhc2UgTk9UQVRFX0RCOlxuXHRcdFx0XHRcdHRoaXMuZGF0YWJhc2VzLm5vdGF0ZWRiID0gYXdhaXQgbmV3IERhdGFiYXNlQWRhcHRlcihOT1RBVEVfREIpXG5cdFx0XHRcdFx0ZGF0YWJhc2UgPSB0aGlzLmRhdGFiYXNlcy5ub3RhdGVkYlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIEVSUk9SX0xPR0dJTkdfREI6XG5cdFx0XHRcdFx0dGhpcy5kYXRhYmFzZXMuZXJyb3Jsb2dnaW5nZGIgPSBhd2FpdCBuZXcgRGF0YWJhc2VBZGFwdGVyKEVSUk9SX0xPR0dJTkdfREIpXG5cdFx0XHRcdFx0ZGF0YWJhc2UgPSB0aGlzLmRhdGFiYXNlcy5lcnJvcmxvZ2dpbmdkYlxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFVTRVJfQ09ORklHVVJBVElPTl9EQjpcblx0XHRcdFx0XHR0aGlzLmRhdGFiYXNlcy51c2VyY29uZmlndXJhdGlvbmRiID0gYXdhaXQgbmV3IERhdGFiYXNlQWRhcHRlcihVU0VSX0NPTkZJR1VSQVRJT05fREIpXG5cdFx0XHRcdFx0ZGF0YWJhc2UgPSB0aGlzLmRhdGFiYXNlcy51c2VyY29uZmlndXJhdGlvbmRiXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cblx0XHRcdGF3YWl0IGRhdGFiYXNlLmludmVudG9yeVxuXG5cdFx0XHRyZXNvbHZlKGRhdGFiYXNlKVxuXHRcdH0pXG5cdH1cblxuXG5cdGFzeW5jIGRhdGFiYXNlUmVxdWVzdChwb3J0LCBtZXNzYWdlKSAge1xuXHRcdHRyeSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCh0eXBlb2YgcG9ydCA9PT0gJ29iamVjdCcpICYmIFxuXHRcdFx0XHRtZXNzYWdlPy50eXBlICYmIFxuXHRcdFx0XHRtZXNzYWdlPy5jb250ZW50ICYmIFxuXHRcdFx0XHRtZXNzYWdlPy5jb250ZW50Py5kYXRhYmFzZVxuXHRcdFx0KXtcblx0XHRcdFx0bGV0IGRhdGEsIHN0b3JlLCBkYjtcblx0XG5cdFxuXHRcdFx0XHRjb25zdCB7IFxuXHRcdFx0XHRcdHR5cGUsIFxuXHRcdFx0XHRcdGNvbnRlbnQ6IHtkYXRhYmFzZTogdGFyZ2V0fSwgIFxuXHRcdFx0XHR9ID0gbWVzc2FnZVxuXHRcdFx0XG5cdFx0XHRcdHN3aXRjaCAodGFyZ2V0KSB7XG5cdFx0XHRcdFx0Y2FzZSBOT1RBVEVfREI6XG5cdFx0XHRcdFx0XHRkYiA9IHRoaXMuZGF0YWJhc2VzLm5vdGF0ZWRiIFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFxuXHRcdFx0XHRcdGNhc2UgRVJST1JfTE9HR0lOR19EQjpcblx0XHRcdFx0XHRcdGRiID0gdGhpcy5kYXRhYmFzZXMuZXJyb3Jsb2dnaW5nZGJcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcblx0XHRcdFx0XHRjYXNlIFVTRVJfQ09ORklHVVJBVElPTl9EQjpcblx0XHRcdFx0XHRcdGRiID0gdGhpcy5kYXRhYmFzZXMudXNlcmNvbmZpZ3VyYXRpb25kYlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cdFxuXHRcblx0XG5cdFx0XHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJ0dFVF9EQVRBQkFTRSc6IFxuXHRcblx0XHRcdFx0XHRcdHBvcnQucG9zdE1lc3NhZ2UoeyBcblx0XHRcdFx0XHRcdFx0dHlwZTogJ0RBVEFCQVNFJywgXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHsgZGF0YTogZGIsIGRhdGFiYXNlOiB0YXJnZXQgfVxuXHRcdFx0XHRcdFx0XHQgXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNhc2UgJ1BPU1RfREFUQUJBU0UnOiBcblx0XHRcdFx0XHRcdGRhdGEgPSBtZXNzYWdlPy5jb250ZW50Py5kYXRhXG5cdFx0XHRcdFx0XHRzdG9yZSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LnN0b3JlXG5cdFx0XG5cdFx0XHRcdFx0XHRjb25zdCBpbnNlcnRPcGVyYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGRiXG5cdFx0XHRcdFx0XHRcdGF3YWl0IGRiLmluc2VydERhdGFcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdGlmICggZGIuaW5zZXJ0RGF0YSA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5pbml0aWFsaXplRGF0YWJhc2UodGFyZ2V0KVxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IGluc2VydE9wZXJhdGlvbigpXG5cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggZGF0YSAmJiBzdG9yZSAmJiB0eXBlb2YgZGIuaW5zZXJ0RGF0YSA9PT0gJ2Z1bmN0aW9uJyAgKSB7XG5cdFx0XHRcdFx0XHQgXHRcdGF3YWl0IGRiLmluc2VydERhdGEoZGF0YSwgc3RvcmUpXG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5pbml0aWFsaXplRGF0YWJhc2UodGFyZ2V0KVxuXHRcdFxuXHRcdFx0XHRcdFx0XHRcdC8vIFNpbmNlIG9ubHkgVXBkYXRlIE9wcyB3aWxsIGJlIHBlcmZvcm1lZCBvbiB0aGlzIHN0b3JlLCBpdHMgc2FmZVxuXHRcdFx0XHRcdFx0XHRcdC8vIHRvIGFsd2F5cyBhc3N1bWUgdGhhdCB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJhbiBhZnRlciBldmVyeVxuXHRcdFx0XHRcdFx0XHRcdC8vIHVzZXIgY29uZmlndXJhdGlvbiB1cGRhdGUuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHN0b3JlID09PSAnVVNFUl9DT05GSUdVUkFUSU9OJykgYXdhaXQgdGhpcy51cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKClcblx0XG5cdFx0XHRcdFx0XHRcdFx0cG9ydC5wb3N0TWVzc2FnZSh7IFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ0RBVEFCQVNFJywgXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiB7IGRhdGE6IGRiLCBkYXRhYmFzZTogdGFyZ2V0IH1cblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdpbnNlcnREYXRhIGZhaWxlZCBib3RoIGNoZWNrcyBmb3Igc29tZSByZWFzb24uLi4nKVxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuaW5pdGlhbGl6ZURhdGFiYXNlKHRhcmdldClcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCBpbnNlcnRPcGVyYXRpb24oKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRcdFx0fVxuXHRcdFxuXHRcdFx0XHRcdFx0YXdhaXQgaW5zZXJ0T3BlcmF0aW9uKClcblx0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNhc2UgJ0RFTEVURV9EQVRBQkFTRSc6IFxuXHRcdFx0XHRcdFx0ZGF0YSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LmRhdGFcblx0XHRcdFx0XHRcdHN0b3JlID0gbWVzc2FnZT8uY29udGVudD8uc3RvcmVcblx0XHRcblx0XHRcdFx0XHRcdGNvbnN0IGRlbGV0ZU9wZXJhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgZGJcblxuXHRcdFx0XHRcdFx0XHRpZiAoIGRiLmRlbGV0ZURhdGEgPT09ICd1bmRlZmluZWQnICkge1xuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuaW5pdGlhbGl6ZURhdGFiYXNlKHRhcmdldClcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCBkZWxldGVPcGVyYXRpb24oKVxuXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGRhdGEgJiYgc3RvcmUgJiYgdHlwZW9mIGRiLmRlbGV0ZURhdGEgPT09ICdmdW5jdGlvbicgKSB7XG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgZGIuZGVsZXRlRGF0YShkYXRhLCBzdG9yZSlcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmluaXRpYWxpemVEYXRhYmFzZSh0YXJnZXQpXG5cdFx0XHRcdFx0XHRcdFx0cG9ydC5wb3N0TWVzc2FnZSh7IFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ0RBVEFCQVNFJywgXG5cdFx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiB7IGRhdGE6IGRiLCBkYXRhYmFzZTogdGFyZ2V0IH1cblx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2RlbGV0ZURhdGEgZmFpbGVkIGJvdGggY2hlY2tzIGZvciBzb21lIHJlYXNvbi4uLicpXG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5pbml0aWFsaXplRGF0YWJhc2UodGFyZ2V0KVxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IGRlbGV0ZU9wZXJhdGlvbigpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRcdGF3YWl0IGRlbGV0ZU9wZXJhdGlvbigpXG5cdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlICdSRUxPQURfREFUQUJBU0UnOiBcblx0XHRcdFx0XHRcdGlmICghZGIgfHwgZGI/LmludmVudG9yeSBpbnN0YW5jZW9mIFByb21pc2UpIHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgdGhpcy5pbml0aWFsaXplRGF0YWJhc2UodGFyZ2V0KVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cG9ydC5wb3N0TWVzc2FnZSh7IFxuXHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdEQVRBQkFTRScsIFxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHsgZGF0YTogZGIsIGRhdGFiYXNlOiB0YXJnZXQgfSxcblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJtZXNzYWdlIFwiICsgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkgKyBcIlxcblwiICsgXG5cdFx0XHRcdFx0XCIgZWl0aGVyIGhhcyBhbiBpbnZhbGlkIHNjaGVtYSBvciBpcyBtaXNzaW5nIG9uZSBvciBtb3JlIHJlcXVpcmVkIHByb3BlcnRpZXMuXCIgK1xuXHRcdFx0XHRcdFwiXFxubWVzc2FnZXMgYXJlIGV4cGVjdGVkIHRvIGhhdmUgJy50eXBlJywgJy5jb250ZW50JywgYW5kICcuY29udGVudC5kYXRhYmFzZScgZmllbGRzLlwiKVxuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhd2FpdCB0aGlzLmdlbmVyYXRlRXJyb3JMb2coZXJyb3IsIHsgZnVuY3Rpb246ICdkYXRhYmFzZVJlcXVlc3QnIH0pXG5cdFx0fVxuXHR9XG5cblxuXHRhc3luYyB1cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKCkge1xuXHRcdGxldCBsYXVuY2hCZWhhdmlvcjtcblxuXHRcdHRyeSB7XG5cdFx0XHRhd2FpdCB0aGlzLmRhdGFiYXNlcy51c2VyY29uZmlndXJhdGlvbmRiLmludmVudG9yeVxuXG5cdFxuXHRcdFx0dGhpcy5lbnYuaW1wb3J0YW50LmxhdW5jaEJlaGF2aW9yID0gdGhpcy5kYXRhYmFzZXMuXG5cdFx0XHRcdHVzZXJjb25maWd1cmF0aW9uZGIuaW52ZW50b3J5LlVTRVJfQ09ORklHVVJBVElPTlswXS5Ob3RhdGUucGFnZS5wYWdlT3BlbkJlaGF2aW9yLnZhbHVlXHRcblxuXHRcdFx0bGF1bmNoQmVoYXZpb3IgPSB0aGlzLmVudi5pbXBvcnRhbnQubGF1bmNoQmVoYXZpb3IgXG5cblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0YXdhaXQgdGhpcy5nZW5lcmF0ZUVycm9yTG9nKGVycm9yLCB7ZnVuY3Rpb246IFwidXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlc1wifSlcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHQhdGhpcy5kYXRhYmFzZXM/LnVzZXJjb25maWd1cmF0aW9uZGI/LmludmVudG9yeSB8fFxuXHRcdFx0XHQhdGhpcy5kYXRhYmFzZXM/LnVzZXJjb25maWd1cmF0aW9uZGJcblx0XHRcdCkge1xuXHRcdFx0XHRjb25zb2xlLmxvZygndXNlcmNvbmZpZ3VyYXRpb25kYiB3YXMgbm90IGxvYWRlZC4gcmVsb2FkaW5nIG5vdy4uLicpXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0YXdhaXQgdGhpcy5pbml0aWFsaXplRGF0YWJhc2UoVVNFUl9DT05GSUdVUkFUSU9OX0RCKVxuXHRcdFx0XHR9IGNhdGNoKGUpIHt9XG5cdFx0XHRcdGF3YWl0IHRoaXMudXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlcygpXG5cdFx0XHR9XG5cdFxuXHRcdFx0aWYgKHR5cGVvZiBsYXVuY2hCZWhhdmlvciA9PT0gJ3VuZGVmaW5lZCcgKSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1bmFibGUgdG8gc2V0IHVwIGJhY2tncm91bmQgZW52IHZhcmlhYmxlcy4gcmV0cnlpbmcgaW4gNTAwbXMuLi4nKVxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpPT4gdGhpcy51cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKCksIDUwMClcblx0XHRcdH1cblx0XG5cdFx0XHRpZiAobGF1bmNoQmVoYXZpb3IpIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2VudiB2YXJpYWJsZXMgaW5pdGlhbGl6ZWQuIFVwZGF0aW5nIGhpZ2ggcHJpb3JpdHkgZW52IHZhcmlhYmxlcy4uLicpXG5cdFx0XHRcdFxuXHRcdFx0XHRzZXRIaWdoUHJpb3JpdHlWYXJpYWJsZXModGhpcy5lbnYuaW1wb3J0YW50KVxuXHRcdFx0fSBcblx0XHR9XG5cdH1cblxuXHRhc3luYyBnZW5lcmF0ZUVycm9yTG9nKGVycm9yLCBjb250ZXh0PXt9KSB7XG5cdFx0Y29uc29sZS5sb2coJ2xvZ2dpbmcgZXJyb3IuLi4nKVxuXG5cdFx0aWYgKFxuXHRcdFx0IXRoaXMuZGF0YWJhc2VzLmVycm9ybG9nZ2luZ2RiIHx8IFxuXHRcdFx0dGhpcy5kYXRhYmFzZXMuZXJyb3Jsb2dnaW5nZGI/LmludmVudG9yeSBpbnN0YW5jZW9mIFByb21pc2UgfHwgXG5cdFx0XHQhdGhpcy5kYXRhYmFzZXMuZXJyb3Jsb2dnaW5nZGI/Lmluc2VydERhdGFcblx0XHQpIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZURhdGFiYXNlKEVSUk9SX0xPR0dJTkdfREIpXG5cdFxuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBlcnJvckxvZyA9IHtcblx0XHRcdFx0dGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXG5cdFx0XHRcdGVycm9yOiB7XG5cdFx0XHRcdFx0bmFtZTogZXJyb3I/Lm5hbWUsXG5cdFx0XHRcdFx0bWVzc2FnZTogZXJyb3I/Lm1lc3NhZ2UsXG5cdFx0XHRcdFx0c3RhY2tUcmFjZTogZXJyb3I/LnN0YWNrXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGNvbnRleHQ6IHtcblx0XHRcdFx0XHQgLi4uY29udGV4dCxcblx0XHRcdFx0XHR1cmw6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnJyksXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uSWQ6IGNocm9tZS5ydW50aW1lLmlkLFxuXHRcdFx0XHRcdG1hbmlmZXN0VmVyc2lvbjogY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKT8ubWFuaWZlc3RfdmVyc2lvblxuXHRcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdGF3YWl0IHRoaXMuZGF0YWJhc2VzLmVycm9ybG9nZ2luZ2RiLmluc2VydERhdGEoZXJyb3JMb2csIFwiRVJST1JTXCIpXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XG5cdFx0fVxuXHR9XG5cblx0XG4vL1x0c2V0SGlnaFByaW9yaXR5VmFyaWFibGVzKCkge1xuLy9cdFx0Y29uc3QgdGFyZ2V0ID0gdGhpcy5lbnYubmFtZXNwYWNlLmNocm9tZVN0b3JhZ2UuaGlnaFByaW9yaXR5IFxuLy9cdFx0Y29uc3QgcGF5bG9hZCA9IHRoaXMuZW52LmltcG9ydGFudFxuLy9cbi8vXHRcdGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgdGFyZ2V0IDogcGF5bG9hZCB9KVxuLy9cdH1cbi8vXG4vL1xuLy9cdGZldGNoSGlnaFByaW9yaXR5VmFyaWFibGVzKCkge1xuLy9cdFx0bGV0IHJlc3VsdDtcbi8vXG4vL1x0XHRjb25zdCB0YXJnZXQgPSB0aGlzLmVudi5uYW1lc3BhY2UuY2hyb21lU3RvcmFnZS5oaWdoUHJpb3JpdHlcbi8vXG4vL1x0XHRjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh0YXJnZXQsIChyZXMpPT57XG4vL1x0XHRcdHJlc3VsdCA9IHJlc1x0XG4vL1x0XHR9KVxuLy9cbi8vXHRcdHJldHVybiByZXN1bHRcbi8vXHR9XG59XG4iLCJjb25zdCBOT1RBVEVfTEFORElOR19QQUdFID0gJy4vaW5kZXguaHRtbCc7XG5jb25zdCBDSFJPTUVfTkVXVEFCID0gJ2Nocm9tZTovL25ld3RhYi8nXG5cbi8qXG5GVU5DVElPTjpcblx0SW5qZWN0cyB0aGUgTm90YXRlIHN0YXJ0aW5nIHBhZ2Ugd2hlbiB0aGUgTmV3IFRhYiBidXR0b24gaXNcdFxuXHRjbGlja2VkXG4qL1xuZXhwb3J0IGNvbnN0IHNwYXduTm90YXRlVGFiID0gYXN5bmMgKGRpcmVjdGl2ZSkgPT4ge1xuXHRpZiAoZGlyZWN0aXZlID09PSBcIm9uTmV3VGFiXCIpIHtcblx0XHRjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuXHRcdFx0Y29uc3QgdGFiID0gdGFic1swXVxuXHRcblx0XG5cdFx0XHRpZiAodGFiPy51cmwgPT0gQ0hST01FX05FV1RBQiB8fCB0YWI/LnBlbmRpbmdVcmwgPT0gQ0hST01FX05FV1RBQikge1xuXHRcdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlbWVudCBub3QgZXhlY3V0ZWQnKVxuXHRcdFx0XHRjb25zb2xlLmxvZygodGFiPy51cmwgPyAoJ1RBQiBVUkw6ICcsIHRhYj8udXJsKSA6ICcnKSlcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BFTkRJTkcgVEFCIFVSTDogJywgdGFiPy5wZW5kaW5nVXJsKVxuXHRcdFx0fVxuXHRcblx0XHR9KVx0XG5cdH1cblxuXHRlbHNlIGlmIChkaXJlY3RpdmUgPT09IFwib25DbGlja1BvcHVwXCIpIHtcblx0XHRjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuXHRcdFx0Y29uc3QgdGFiID0gdGFic1swXVxuXG5cdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0fSlcblx0fVxuXG59XG4iLCJleHBvcnQgIGZ1bmN0aW9uIGluc3BlY3RJREJTdG9yZShkYXRhYmFzZU5hbWUpIHtcblx0aWYgKCFkYXRhYmFzZU5hbWUpIHRocm93IG5ldyBFcnJvcihgaW5zcGVjdElEQlN0b3JlKCkgJ2RhdGFiYXNlTmFtZScgcGFyYW0gZXhwZWN0ZWQgYnV0IG5vbmUgc3VwcGxpZWQuYClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oZGF0YWJhc2VOYW1lKTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBldmVudCA9PiByZWplY3QoYEVycm9yIG9wZW5pbmcgZGF0YWJhc2U6ICR7ZXZlbnQudGFyZ2V0LmVycm9yfWApO1xuXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVOYW1lcyA9IEFycmF5LmZyb20oZGIub2JqZWN0U3RvcmVOYW1lcyk7XG4gICAgICAgICAgICBjb25zdCBhbGxTdG9yZXNEYXRhID0ge307XG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZWRTdG9yZXMgPSAwO1xuXG4gICAgICAgICAgICBzdG9yZU5hbWVzLmZvckVhY2goc3RvcmVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdldEFsbFJlcXVlc3QgPSBzdG9yZS5nZXRBbGwoKTtcblxuICAgICAgICAgICAgICAgIGdldEFsbFJlcXVlc3Qub25lcnJvciA9IGV2ZW50ID0+IHJlamVjdChgRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tICR7c3RvcmVOYW1lfTogJHtldmVudC50YXJnZXQuZXJyb3J9YCk7XG5cbiAgICAgICAgICAgICAgICBnZXRBbGxSZXF1ZXN0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcmVzRGF0YVtzdG9yZU5hbWVdID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkU3RvcmVzKys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZFN0b3JlcyA9PT0gc3RvcmVOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb250ZW50IG9mIGFsbCBzdG9yZXMgaW4gXCIke2RhdGFiYXNlTmFtZX1cIjpgLCBhbGxTdG9yZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWxsU3RvcmVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25lcnJvciA9IGV2ZW50ID0+IHJlamVjdChgVHJhbnNhY3Rpb24gZXJyb3IgZm9yICR7c3RvcmVOYW1lfTogJHtldmVudC50YXJnZXQuZXJyb3J9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuLy8gVXNhZ2UgZXhhbXBsZTpcbi8vIGluc3BlY3RJREJTdG9yZSgnTk9UQVRFX0RCJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4vLyBpbnNwZWN0SURCU3RvcmUoJ0VSUk9SX0xPR0dJTkdfREInKS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsvLyBVc2FnZSBleGFtcGxlOlxuLy8gaW5zcGVjdElEQlN0b3JlKCdub3RhdGUnLCAnVVNFUl9DT05GSUdVUkFUSU9OJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7Ly8gVXNhZ2UgZXhhbXBsZTpcbi8vIHZpZXdJbmRleGVkREJTdG9yZSgnVVNFUl9DT05GSUdVUkFUSU9OJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iLCJpbXBvcnQgeyBpbnNwZWN0SURCU3RvcmUgfSBmcm9tICcuL1NjcmlwdHMvaW5zcGVjdEluZGV4ZWREQlN0b3JlLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hEZXZUb29scygpIHtcblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmluc3BlY3RJREJTdG9yZSA9IGluc3BlY3RJREJTdG9yZVxuXHRcdGdsb2JhbFRoaXMucGluZyA9IHBpbmdcblxuXHRcdGdsb2JhbFRoaXMucGluZygpXG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRlcnJvclxuXHRcdGRlYnVnZ2VyXG5cdH1cbn1cblxuXG5jb25zdCBwaW5nID0gKCkgPT4ge1xuXHRjb25zb2xlLmxvZygncGluZycpXG59XG4iLCJleHBvcnQgY29uc3QgQ29uZmlndXJhdGlvblRlbXBsYXRlID0ge1xuXHROb3RhdGU6IHtcblx0XHRzZWFyY2g6IHtcblx0XHRcdHByZWZlcnJlZEVuZ2luZToge1xuXHRcdFx0XHR2YWx1ZTogXCJwZXJwbGV4aXR5YWlcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiU2V0cyB5b3VyIHByZWZlcnJlZCBTZWFyY2ggRW5naW5lLlwiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJnb29nbGVcIiwgXCJiaW5nXCIsIFwiZHVja2R1Y2tnb1wiLCBcInlhaG9vXCIsIFwiYmFpZHVcIiwgXCJ5YW5kZXhcIiwgXCJlY29zaWFcIiwgXCJwZXJwbGV4aXR5YWlcIl0sXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRzZWFyY2hOb3Rlczoge1xuXHRcdFx0XHR2YWx1ZTogXCJ0cnVlXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgd2hldGhlciBvciBub3Qgbm90ZXMgc2hvdWxkIGJlIHNlYXJjaGVkIGZvciB3aGVuIHNlYXJjaGluZyBpbiB0aGUgc2VhcmNoIGJhci5cIixcblx0XHRcdFx0b3B0aW9uczogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRwYWdlOiB7XG5cdFx0XHRwYWdlT3BlbkJlaGF2aW9yOiB7XG5cdFx0XHRcdHZhbHVlOiBcIm9uTmV3VGFiXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgZGVmYXVsdCBwYWdlIHRvIG9wZW4gdXAgd2hlbiBjbGlja2luZyB0aGUgTmV3IFRhYiBCdXR0b24uXCIsXG5cdFx0XHRcdG9wdGlvbnM6IFtcIm9uTmV3VGFiXCIsIFwib25DbGlja1BvcHVwXCIsIFwiZmFsc2VcIl0sXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRiYWNrZ3JvdW5kV2FsbHBhcGVyOiB7XG5cdFx0XHRcdHZhbHVlOiBcImRhcmtXb29kXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlwiU2V0cyB3YWxscGFwZXIgZm9yIE5vdGF0ZS5cIixcblx0XHRcdFx0b3B0aW9uczogW1wiZGFya1dvb2RcIiwgXCJjb3JrQm9hcmRcIiwgXCJtYXJibGVDaGVzc0JvYXJkXCIsIFwibm90ZVBhcGVyXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRub3RlTW9kYWw6IHtcblx0XHRcdHByZWZlcnJlZENvbG9yOiB7XG5cdFx0XHRcdHZhbHVlOiBcInllbGxvd1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJTZXRzIHByZWZlcnJlZCBjb2xvciB3aGVuIGNyZWF0aW5nIG5ldyBub3Rlc1wiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJyZWRcIiwgXCJ5ZWxsb3dcIiwgXCJibHVlXCIsIFwiZ3JlZW5cIiwgXCJvcmFuZ2VcIiwgXCJwaW5rXCIsIFwicHVycGxlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRXZWJDb250ZW50OiB7XG5cdFx0dG9vbHM6IHtcblx0XHRcblx0XHR9LFxuXHRcdGJlaGF2aW9yOiB7XG5cdFx0XHRuZXdOb3RlUG9wdXA6IHtcblx0XHRcdFx0dmFsdWU6IFwidHJ1ZVwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJTZXRzIHdoZXRoZXIgdGhlIE5ldyBOb3RlIEJ1dHRvbiBzaG93cyB3aGVuIGhvdmVyaW5nIHRoZSBjdXJzb3IgaW4gdGhlIGNvcm5lciBvZiB0aGUgcGFnZS5cIixcblx0XHRcdFx0b3B0aW9uczogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb25maWd1cmF0aW9uVGVtcGxhdGUgfSBmcm9tICcuL1VzZXJDb25maWd1cmF0aW9uLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZUFkYXB0ZXIge1xuICAgY29uc3RydWN0b3IoZGF0YWJhc2VOYW1lKSB7XG4gICAgdGhpcy5tYXBwZXIgPSB7XG4gICAgICAgIGRiOiB7XG5cdFx0bm90YXRlOiB7XG5cdFx0XHRuYW1lOidOT1RBVEVfREInLFxuXHRcdFx0c3RvcmVzOiAgWydOT1RFUycsICdOT1RFQk9PS1MnXSxcblx0XHR9LFxuXHRcdGVycm9yTG9nZ2luZzoge1xuXHRcdFx0bmFtZTogJ0VSUk9SX0xPR0dJTkdfREInLFxuXHRcdFx0c3RvcmVzOiBbJ0VSUk9SUyddXG5cdFx0fSxcblx0XHR1c2VyQ29uZmlndXJhdGlvbjoge1xuXHRcdFx0bmFtZTogJ1VTRVJfQ09ORklHVVJBVElPTl9EQicsXG5cdFx0XHRzdG9yZXM6IFsnVVNFUl9DT05GSUdVUkFUSU9OJ11cblx0XHR9XG5cdH1cbiAgICB9XG4gICAgdGhpcy5jb25uZWN0aW9uID0gIHRoaXMuY29ubmVjdFRvREIoZGF0YWJhc2VOYW1lKTtcbiAgICB0aGlzLmludmVudG9yeSA9ICBudWxsO1xuICAgIHRoaXMucmVxdWVzdCA9IG51bGw7XG4gIH1cbiAgICBcbiAgYXN5bmMgY29ubmVjdFRvREIoZGF0YWJhc2VOYW1lKSB7XG5cdCAgXHQgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdCAgIFxuXHRcdCAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMubWFwcGVyLmRiW2RhdGFiYXNlTmFtZV1cblxuICAgXHRcdCAgIGNvbnN0IERCQnJpZ2UgPSBpbmRleGVkREIub3BlbihsZWdlbmQubmFtZSwgMSk7XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9uc3VjY2VzcyA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ICAgICBpZiAodGhpcy53b3JrZXJtZXNzYWdlID09PSAnZnVuY3Rpb24nKSBhd2FpdCB0aGlzLndvcmtlcm1lc3NhZ2UoKVxuICAgXHRcdCAgICAgdGhpcy5jb25uZWN0aW9uID0gZS50YXJnZXQucmVzdWx0O1xuXG5cdFx0ICAgICAvL2NvbnNvbGUubG9nKGAke2RhdGFiYXNlTmFtZX0gY29ubmVjdGVkLiBhd2FpdGluZyBpbnZlbnRvcnkuLi5gKVxuXHRcdCAgICAgdGhpcy5pbnZlbnRvcnkgPSBhd2FpdCB0aGlzLmdldEludmVudG9yeSgpXG4gICBcdFx0ICAgICByZXNvbHZlKHRoaXMuY29ubmVjdGlvbik7XG4gICBcdFx0ICAgfTtcblxuICAgXHRcdCAgIERCQnJpZ2Uub25lcnJvciA9IChlKSA9PiByZWplY3QoY29uc29sZS5lcnJvcignZXJyb3IgaW5pdGluZyBEQjogJyArIGUudGFyZ2V0LmVycm9yKSk7XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9udXBncmFkZW5lZWRlZCA9IGFzeW5jIChlKSA9PiB7XG5cdFx0XHQgICAvL2NvbnNvbGUubG9nKGBVcGdyYWRpbmcgREIgJHtkYXRhYmFzZU5hbWV9Li4uYClcbiAgIFx0XHQgXG4gICBcdFx0ICAgICB0aGlzLmNvbm5lY3Rpb24gPSBlLnRhcmdldC5yZXN1bHQ7XG5cdFx0ICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGUudGFyZ2V0LnRyYW5zYWN0aW9uXG5cbiAgIFx0XHQgICAgIGxlZ2VuZC5zdG9yZXMuZm9yRWFjaCgoc3RvcmVLZXkpPT57XG4gICBcdFx0ICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlS2V5LCB7IGtleVBhdGg6ICdpZCcsIGF1dG9JbmNyZW1lbnQ6IHRydWUgfSlcbiAgIFx0XHQgICAgIH0pXG4gICBcdFxuXHRcdCAgICAgaWYgKGxlZ2VuZC5zdG9yZXMuc29tZSggc3RvcmUgPT4gc3RvcmUgPT09IFwiVVNFUl9DT05GSUdVUkFUSU9OXCIgKSkge1xuXHRcdFx0YXdhaXQgdGhpcy5zZXR1cFVzZXJDb25maWd1cmF0aW9uKHRyYW5zYWN0aW9uKVxuXHRcdCAgICAgfSBcblx0XHRcdCAgIFxuXG5cdFx0ICAgICAvL2NvbnNvbGUubG9nKCdEQiBpbnN0YWxsIHN1Y2Nlc3NmdWwnKVxuXG5cdFx0ICAgICAvL1J1bnMgY2FsbGJhY2sgaWYgZGVmaW5lZFxuXHRcdCAgICAgaWYgKHRoaXMud29ya2VybWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YXdhaXQgdGhpcy53b3JrZXJtZXNzYWdlKClcblx0XHQgICAgIH1cblxuXHRcdCAgICAgdGhpcy5pbnZlbnRvcnkgPSBhd2FpdCB0aGlzLmdldEludmVudG9yeSgpXG4gICBcdFx0ICAgICByZXNvbHZlKHRoaXMuY29ubmVjdGlvbik7XG4gICBcdFx0ICAgfTtcbiAgIFx0XHQgfSk7XG4gIH1cblxuICBhc3luYyBzZXR1cFVzZXJDb25maWd1cmF0aW9uKHRyYW5zYWN0aW9uKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ1VTRVJfQ09ORklHVVJBVElPTicpXG5cdFx0XHRzdG9yZS5hZGQoQ29uZmlndXJhdGlvblRlbXBsYXRlKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSlcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2NvbmZpZyB1cGxvYWQgZmFpbGVkJylcblx0XHR9XG5cdH0pXG4gIH1cblxuXG4gICAgLy8gTmVlZHMgdG8gYmUgd29ya2VkIG9uXG4gICAgYXN5bmMgZ2V0SW52ZW50b3J5KCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgY29uc3QgZGIgPSB0aGlzLmNvbm5lY3Rpb25cbiAgICAgICAgY29uc3QgaW52ZW50b3J5ID0ge31cblxuXG5cdGNvbnN0IGFsbFN0b3Jlc1dlcmVGZXRjaGVkID0gKGRhdGFzZXQpID0+IHtcblx0XHRjb25zdCBmb3JtdWxhID0gIChlKSA9PiBlID09PSBmYWxzZVxuXHRcdGNvbnN0IHJlc3VsdHMgPSBkYXRhc2V0LnNvbWUoZm9ybXVsYSlcblx0XHRyZXR1cm4gIXJlc3VsdHNcblx0fVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYlN0b3JlTmFtZXMgPSBkYi5vYmplY3RTdG9yZU5hbWVzXG4gICAgICAgICAgICBjb25zdCBzdG9yZXMgPSB7fVxuXG5cdCAgICBPYmplY3QudmFsdWVzKGRiU3RvcmVOYW1lcykuZm9yRWFjaCgobmFtZSk9Pnsgc3RvcmVzW25hbWVdID0gZmFsc2UgfSlcblxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXMpLmZvckVhY2goKHN0b3JlKT0+e1xuICAgICAgICAgICAgICAgIGludmVudG9yeVtzdG9yZV0gPSBbXVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihzdG9yZSwgJ3JlYWRvbmx5JylcbiAgICAgICAgICAgICAgICBjb25zdCBvYmpTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9ialN0b3JlLmdldEFsbCgpXG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlLnRhcmdldC5yZXN1bHRcblx0XHQgICAgXG5cdFx0ICAgIGlmICh0eXBlb2YgcmVzdWx0cyA9PT0gJ29iamVjdCcgJiYgcmVzdWx0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHN0b3Jlc1tzdG9yZV0gPSB0cnVlXG5cblx0XHRcdGNvbnN0IGNvbXBhcmlzb24gPSBhbGxTdG9yZXNXZXJlRmV0Y2hlZChPYmplY3QudmFsdWVzKHN0b3JlcykpXG5cblx0XHRcdCAgICBpZiAoY29tcGFyaXNvbikge1xuXHRcdFx0ICAgIFx0dGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnlcblx0XHRcdFx0cmVzb2x2ZSh0aGlzLmludmVudG9yeSlcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeVtzdG9yZV0ucHVzaChpdGVtKVxuXHRcdFx0c3RvcmVzW3N0b3JlXSA9IHRydWVcblxuXHRcdFx0Y29uc3QgY29tcGFyaXNvbiA9IGFsbFN0b3Jlc1dlcmVGZXRjaGVkKE9iamVjdC52YWx1ZXMoc3RvcmVzKSlcdFx0XHRcblxuXHRcdFx0aWYgKGNvbXBhcmlzb24pIHtcblx0XHRcdFx0dGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnlcblx0XHRcdFx0cmVzb2x2ZSh0aGlzLmludmVudG9yeSlcblx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGUpID0+IHtyZWplY3QoY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyByZXF1ZXN0OiAke2UuZXJyb3J9YCkpfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgaW5zZXJ0RGF0YShkYXRhLCB0YXJnZXRfc3RvcmUpIHsgICAgICAgIFxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuY29ubmVjdGlvblxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFt0YXJnZXRfc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGFyZ2V0X3N0b3JlKVxuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUucHV0KGRhdGEpXG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCk9PiB7XG5cdCAgICBcdGF3YWl0IHRoaXMuY2xlYW51cCgpXG5cdFx0cmVzb2x2ZSgnSXRlbSBhZGRlZCB0byBEQicpXG5cdCAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiB7cmVqZWN0KGNvbnNvbGUuZXJyb3IoYEVycm9yIGFkZGluZyBkYXRhOiAke2UuZXJyb3J9YCkpfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcblxuXG4gICAgYXN5bmMgZGVsZXRlRGF0YShkYXRhLCB0YXJnZXRfc3RvcmUpIHsgICAgICAgIFxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuY29ubmVjdGlvblxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFt0YXJnZXRfc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGFyZ2V0X3N0b3JlKVxuXG4gICAgICAgICAgICBpZiAoZGF0YT8uaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0YS5pZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5kZWxldGUoaXRlbSlcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCk9PiB7XG5cdFx0XHRhd2FpdCB0aGlzLmNsZWFudXAoKVxuXHRcdFx0cmVzb2x2ZSgnSXRlbSByZW1vdmVkIGZyb20gREInKVxuXHRcdH1cblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiB7cmVqZWN0KGNvbnNvbGUuZXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGF0dGVtcHRpbmcgdG8gcGVyZm9ybSBERUxFVEUgb3BlcmF0aW9uOiAke2UuZXJyb3J9YCkpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoY29uc29sZS5lcnJvcihgSXRlbSB0byBkZWxldGUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHNjaGVtYSBmb3IgdGhpcyBkYXRhYmFzZS5gKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgY2xlYW51cCgpIHtcbiAgICBcdHRoaXMuaW52ZW50b3J5ID0gYXdhaXQgdGhpcy5nZXRJbnZlbnRvcnkoKVxuXHRpZiAodGhpcy53b3JrZXJtZXNzYWdlID09PSAnZnVuY3Rpb24nKSBhd2FpdCB0aGlzLndvcmtlcm1lc3NhZ2UoKVxuICAgIH1cbn1cblxuXG5cblxuZXhwb3J0IGNsYXNzIERCV29ya2VyIGV4dGVuZHMgRGF0YWJhc2VBZGFwdGVyIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpXG5cdFx0XG5cdH1cdFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ29yZVNlcnZpY2UgZnJvbSAnLi9VdGlscy9jb3JlU2VydmljZS5qcydcbmltcG9ydCB7IHNwYXduTm90YXRlVGFiIH0gZnJvbSAnLi9VdGlscy9ldmVudEFjdGlvbnMuanMnXG5pbXBvcnQgeyBzZXRIaWdoUHJpb3JpdHlWYXJpYWJsZXMsIGdldEhpZ2hQcmlvcml0eVZhcmlhYmxlcyB9IGZyb20gJy4vVXRpbHMvY2hyb21lU3RvcmFnZUhhbmRsZXIuanMnXG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnQGRldi9kZXZ1dGlscy5qcydcblxuXG4vKlxuICogRGV2VG9vbCBDYWxsXG4qL1xuRGV2VG9vbHMoKVxuXG5cblxuLypcbiAqIENvbnN0YW50c1xuKi9cbmV4cG9ydCBjb25zdCBOT1RBVEVfREIgPSBcIm5vdGF0ZVwiXG5leHBvcnQgY29uc3QgRVJST1JfTE9HR0lOR19EQiA9IFwiZXJyb3JMb2dnaW5nXCJcbmV4cG9ydCBjb25zdCBVU0VSX0NPTkZJR1VSQVRJT05fREIgPSBcInVzZXJDb25maWd1cmF0aW9uXCJcblxuXG5cbmNvbnN0IENIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZID0gXCJDSFJPTUVfU1RPUkVfSElHSF9QUklPUklUWVwiXG5cblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRTZXJ2aWNlID0gbmV3IENvcmVTZXJ2aWNlKClcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUlxuXHRGaXJlcyBvbiBDaHJvbWUgc3RhcnR1cC4gSXMgb25lIG9mIDIgY2hyb21lIGV2ZW50IGxpc3RlbmVyc1xuXHR0aGF0IGZpcmVzIGJvb3RzdHJhcEFwcGxpY2F0aW9uKCkuXG4qL1xuY2hyb21lLnJ1bnRpbWUub25TdGFydHVwLmFkZExpc3RlbmVyKGFzeW5jICgpPT4ge1xuXHRhd2FpdCBib290c3RyYXBBcHBsaWNhdGlvbigpXG5cblx0bGV0IGxhdW5jaEJlaGF2aW9yID0gQmFja2dyb3VuZFNlcnZpY2UuZW52LmltcG9ydGFudC5sYXVuY2hCZWhhdmlvclxuXG5cdGlmIChsYXVuY2hCZWhhdmlvciAmJiBsYXVuY2hCZWhhdmlvciA9PT0gJ29uTmV3VGFiJykge1xuXHRcdHNwYXduTm90YXRlVGFiKGxhdW5jaEJlaGF2aW9yKVxuXHR9XG59KVxuXG5cblxuLypcbkVWRU5UIExJU1RFTkVSXG5cdEZpcmVzIG9uIENocm9tZSBzdGFydHVwLiBJcyBvbmUgb2YgMiBjaHJvbWUgZXZlbnQgbGlzdGVuZXJzXG5cdHRoYXQgZmlyZXMgYm9vdHN0cmFwQXBwbGljYXRpb24oKS5cbiovXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoKT0+IHtcblx0YXdhaXQgYm9vdHN0cmFwQXBwbGljYXRpb24oKVxuXG5cdGxldCBsYXVuY2hCZWhhdmlvciA9IEJhY2tncm91bmRTZXJ2aWNlLmVudi5pbXBvcnRhbnQubGF1bmNoQmVoYXZpb3JcblxuXHRpZiAobGF1bmNoQmVoYXZpb3IgJiYgbGF1bmNoQmVoYXZpb3IgPT09ICdvbk5ld1RhYicpIHtcblx0XHRzcGF3bk5vdGF0ZVRhYihsYXVuY2hCZWhhdmlvcilcblx0fVxufSlcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUjpcblx0RmlyZXMgYW5kIHJ1bnMgdGhlIHNwYXduVGFiKCkgZnVuY3Rpb24gb24gbmV3IHRhYiBpZiB1c2VyIFxuXHRjb25maWd1cmF0aW9uIGhhcyAnb25OZXdUYWInIGVuYWJsZWQuXG4qL1xuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKGFzeW5jICgpPT4ge1xuXHRjb25zdCBsYXVuY2hCZWhhdmlvciA9IGF3YWl0IGdldEhpZ2hQcmlvcml0eVZhcmlhYmxlcygnbGF1bmNoQmVoYXZpb3InKVxuXHRpZiAobGF1bmNoQmVoYXZpb3IgPT09ICdvbk5ld1RhYicpICBzcGF3bk5vdGF0ZVRhYihsYXVuY2hCZWhhdmlvcilcbn0pXG5cblxuXG4vKlxuRVZFTlQgTElTVEVORVI6XG5cdEZpcmVzIGFuZCBydW5zIHNwYXduVGFiKCkgZnVuY3Rpb24gd2hlbiB1c2VyIGNsaWNrcyBOb3RhdGVcblx0cG9wdXBcbiovXG5jaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYyAoKSA9PiB7XG5cdGNvbnN0IGxhdW5jaEJlaGF2aW9yID0gYXdhaXQgZ2V0SGlnaFByaW9yaXR5VmFyaWFibGVzKCdsYXVuY2hCZWhhdmlvcicpXG5cdGlmIChsYXVuY2hCZWhhdmlvciA9PT0gJ29uQ2xpY2tQb3B1cCcpICBzcGF3bk5vdGF0ZVRhYihsYXVuY2hCZWhhdmlvcilcbn0pXG5cblxuXG4vKlxuRVZFTlQgTElTVEVORVI6XG5cdEZpcmVzIHdoZW4gYW4gaW5jb21pbmcgZGF0YWJhc2UgY29ubmVjdGlvbiBpcyByZWNlaXZlZCBhbmRcdFxuXHRkZWxlZ2F0ZXMgYWxsIGRhdGFiYXNlIG9wZXJhdGlvbnMgdG8gdGhlIGRhdGFiYXNlUmVxdWVzdCgpXG5cdGZ1bmN0aW9uLlxuKi9cbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xuICBpZiAocG9ydC5uYW1lID09PSAnREFUQUJBU0VfQ09OTkVDVElPTicpIHtcbiAgICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihhc3luYyAobWVzc2FnZSkgPT4ge1xuXHRhd2FpdCBCYWNrZ3JvdW5kU2VydmljZS5kYXRhYmFzZVJlcXVlc3QocG9ydCwgbWVzc2FnZSlcbiAgICB9KTtcbiAgfVxufSk7XG5cblxuXG5cblxuXG5cblxuLypcbkZVTkNUSU9OOlxuXHRJbnRpYWxpemVzIGFwcGxpY2F0aW9uIGJ5IGdyYWJiaW5nIElEQiBTdG9yZXMgKyB1cGRhdGluZyBuZWNlc3NhcnkgYmFja2dyb3VuZCB3b3JrZXIgXG5cdHZhcmlhYmxlcy4gU2hvdWxkIG9ubHkgZmlyZSBAIGJyb3dzZXIgbGF1bmNoIC8gZXh0ZW5zaW9uIGluc3RhbGwuXG4qL1xuY29uc3QgYm9vdHN0cmFwQXBwbGljYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChbXG5cdFx0QmFja2dyb3VuZFNlcnZpY2UuaW5pdGlhbGl6ZURhdGFiYXNlKFVTRVJfQ09ORklHVVJBVElPTl9EQiksXG5cdFx0QmFja2dyb3VuZFNlcnZpY2UuaW5pdGlhbGl6ZURhdGFiYXNlKEVSUk9SX0xPR0dJTkdfREIpLFxuXHRcdEJhY2tncm91bmRTZXJ2aWNlLmluaXRpYWxpemVEYXRhYmFzZShOT1RBVEVfREIpXG5cdF0pXG5cdFxuXG5cdGlmIChcblx0XHQhQmFja2dyb3VuZFNlcnZpY2UuZGF0YWJhc2VzLmVycm9ybG9nZ2luZ2RiIHx8XG5cdFx0QmFja2dyb3VuZFNlcnZpY2UuZGF0YWJhc2VzLmVycm9ybG9nZ2luZ2RiPy5pbnZlbnRvcnkgaW5zdGFuY2VvZiBQcm9taXNlXG5cdCkge1xuXHRcdGF3YWl0IEJhY2tncm91bmRTZXJ2aWNlLmluaXRpYWxpemVEYXRhYmFzZShFUlJPUl9MT0dHSU5HX0RCKVxuXHR9XG5cblx0aWYgKFxuXHRcdEJhY2tncm91bmRTZXJ2aWNlLmRhdGFiYXNlcy51c2VyY29uZmlndXJhdGlvbmRiIGluc3RhbmNlb2YgUHJvbWlzZSB8fFxuXHRcdCFCYWNrZ3JvdW5kU2VydmljZS5kYXRhYmFzZXMudXNlcmNvbmZpZ3VyYXRpb25kYiB8fFxuXHRcdCFCYWNrZ3JvdW5kU2VydmljZS5kYXRhYmFzZXM/LmludmVudG9yeSB8fCBcblx0XHRCYWNrZ3JvdW5kU2VydmljZT8uaW52ZW50b3J5IGluc3RhbmNlb2YgUHJvbWlzZVxuXHQpIHtcblx0XHRhd2FpdCBCYWNrZ3JvdW5kU2VydmljZS5pbml0aWFsaXplRGF0YWJhc2UoVVNFUl9DT05GSUdVUkFUSU9OX0RCKVxuXHR9IGVsc2UgYXdhaXQgQmFja2dyb3VuZFNlcnZpY2UudXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlcygpXG5cbn1cblxuXG5cbi8qXG5GVU5DVElPTjpcblx0VXNlZCB0byBxdWlja2x5IGZldGNoIGVudiB2YXJpYWJsZXMgd2hpY2ggaXMgbmVlZGVkIGF0IHN0YXJ0dXAuXG4qL1xuY29uc3QgZmV0Y2hIaWdoUHJpb3JpdHlWYXJpYWJsZXMgPSAgKCkgPT4ge1xuXHRjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbQ0hST01FX1NUT1JFX0hJR0hfUFJJT1JJVFldLCAoRU5WX1ZBUlMpPT57XG5cdFx0Y29uc29sZS5sb2coJ0VOVl9WQVJTOiAnLCBFTlZfVkFSUylcblx0XHR0cnkge1xuXHRcdFx0bGF1bmNoQmVoYXZpb3IgPSBFTlZfVkFSU1tDSFJPTUVfU1RPUkVfSElHSF9QUklPUklUWV0ucGFnZUJlaGF2aW9yXG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHR9XG5cdH0pXHRcbn1cblxuXG5cblxuIl0sIm5hbWVzIjpbIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJfc2xpY2VkVG9BcnJheSIsImFyciIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJtaW5MZW4iLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImxlbiIsImFycjIiLCJpc0FycmF5IiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIkNIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZIiwic2V0SGlnaFByaW9yaXR5VmFyaWFibGVzIiwiZGF0YSIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwic2V0IiwiZ2V0SGlnaFByaW9yaXR5VmFyaWFibGVzIiwiX3JlZiIsIl9jYWxsZWUiLCJxdWVyeSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXQiLCJyZXNvbHV0aW9uIiwiY29uc29sZSIsImxvZyIsImVudHJpZXMiLCJfcmVmMiIsIl9yZWYzIiwidmFsIiwiX3giLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiRGF0YWJhc2VBZGFwdGVyIiwiTk9UQVRFX0RCIiwiRVJST1JfTE9HR0lOR19EQiIsIlVTRVJfQ09ORklHVVJBVElPTl9EQiIsIkNvcmVTZXJ2aWNlIiwiZGF0YWJhc2VzIiwibm90YXRlZGIiLCJlcnJvcmxvZ2dpbmdkYiIsInVzZXJjb25maWd1cmF0aW9uZGIiLCJlbnYiLCJpbXBvcnRhbnQiLCJsYXVuY2hCZWhhdmlvciIsImNvbW1vbiIsIm5hbWVzcGFjZSIsImNocm9tZVN0b3JhZ2UiLCJoaWdoUHJpb3JpdHkiLCJfaW5pdGlhbGl6ZURhdGFiYXNlIiwiX2NhbGxlZTIiLCJfdGhpcyIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImRhdGFiYXNlIiwidDAiLCJpbnZlbnRvcnkiLCJfeDIiLCJfeDMiLCJpbml0aWFsaXplRGF0YWJhc2UiLCJfZGF0YWJhc2VSZXF1ZXN0IiwiX2NhbGxlZTUiLCJwb3J0IiwibWVzc2FnZSIsIl9tZXNzYWdlJGNvbnRlbnQyIiwiX21lc3NhZ2UkY29udGVudDMiLCJfdGhpczIiLCJfbWVzc2FnZSRjb250ZW50NCIsIl9tZXNzYWdlJGNvbnRlbnQ1IiwiX2RiIiwiX21lc3NhZ2UkY29udGVudCIsInN0b3JlIiwiZGIiLCJpbnNlcnRPcGVyYXRpb24iLCJkZWxldGVPcGVyYXRpb24iLCJfY2FsbGVlNSQiLCJfY29udGV4dDUiLCJjb250ZW50IiwidDEiLCJwb3N0TWVzc2FnZSIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiaW5zZXJ0RGF0YSIsInVwZGF0ZUJhY2tncm91bmRFbnZWYXJpYWJsZXMiLCJfY2FsbGVlNCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImRlbGV0ZURhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwidDIiLCJnZW5lcmF0ZUVycm9yTG9nIiwiZGF0YWJhc2VSZXF1ZXN0IiwiX3g0IiwiX3g1IiwiX3VwZGF0ZUJhY2tncm91bmRFbnZWYXJpYWJsZXMiLCJfY2FsbGVlNiIsIl90aGlzMyIsIl90aGlzJGRhdGFiYXNlcyIsIl90aGlzJGRhdGFiYXNlczIiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJVU0VSX0NPTkZJR1VSQVRJT04iLCJOb3RhdGUiLCJwYWdlIiwicGFnZU9wZW5CZWhhdmlvciIsInNldFRpbWVvdXQiLCJfZ2VuZXJhdGVFcnJvckxvZyIsIl9jYWxsZWU3IiwiX3RoaXMkZGF0YWJhc2VzJGVycm9yIiwiX3RoaXMkZGF0YWJhc2VzJGVycm9yMiIsImNvbnRleHQiLCJfY2hyb21lJHJ1bnRpbWUkZ2V0TWEiLCJlcnJvckxvZyIsIl9hcmdzNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsInRpbWVzdGFtcCIsIkRhdGUiLCJ0b0lTT1N0cmluZyIsInN0YWNrVHJhY2UiLCJzdGFjayIsIl9vYmplY3RTcHJlYWQiLCJ1cmwiLCJydW50aW1lIiwiZ2V0VVJMIiwiZXh0ZW5zaW9uSWQiLCJpZCIsIm1hbmlmZXN0VmVyc2lvbiIsImdldE1hbmlmZXN0IiwibWFuaWZlc3RfdmVyc2lvbiIsIl94NiIsImRlZmF1bHQiLCJOT1RBVEVfTEFORElOR19QQUdFIiwiQ0hST01FX05FV1RBQiIsInNwYXduTm90YXRlVGFiIiwiZGlyZWN0aXZlIiwidGFicyIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJ0YWIiLCJwZW5kaW5nVXJsIiwidXBkYXRlIiwiaW5zcGVjdElEQlN0b3JlIiwiZGF0YWJhc2VOYW1lIiwicmVxdWVzdCIsImluZGV4ZWREQiIsIm9wZW4iLCJvbmVycm9yIiwiZXZlbnQiLCJjb25jYXQiLCJvbnN1Y2Nlc3MiLCJyZXN1bHQiLCJzdG9yZU5hbWVzIiwib2JqZWN0U3RvcmVOYW1lcyIsImFsbFN0b3Jlc0RhdGEiLCJjb21wbGV0ZWRTdG9yZXMiLCJzdG9yZU5hbWUiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiZ2V0QWxsUmVxdWVzdCIsImdldEFsbCIsIkxhdW5jaERldlRvb2xzIiwiZ2xvYmFsVGhpcyIsInBpbmciLCJDb25maWd1cmF0aW9uVGVtcGxhdGUiLCJzZWFyY2giLCJwcmVmZXJyZWRFbmdpbmUiLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJlbmFibGVkIiwic2VhcmNoTm90ZXMiLCJiYWNrZ3JvdW5kV2FsbHBhcGVyIiwibm90ZU1vZGFsIiwicHJlZmVycmVkQ29sb3IiLCJXZWJDb250ZW50IiwidG9vbHMiLCJiZWhhdmlvciIsIm5ld05vdGVQb3B1cCIsIm1hcHBlciIsIm5vdGF0ZSIsInN0b3JlcyIsImVycm9yTG9nZ2luZyIsInVzZXJDb25maWd1cmF0aW9uIiwiY29ubmVjdGlvbiIsImNvbm5lY3RUb0RCIiwiX2Nvbm5lY3RUb0RCIiwibGVnZW5kIiwiREJCcmlnZSIsIndvcmtlcm1lc3NhZ2UiLCJnZXRJbnZlbnRvcnkiLCJvbnVwZ3JhZGVuZWVkZWQiLCJzdG9yZUtleSIsImNyZWF0ZU9iamVjdFN0b3JlIiwia2V5UGF0aCIsImF1dG9JbmNyZW1lbnQiLCJzb21lIiwic2V0dXBVc2VyQ29uZmlndXJhdGlvbiIsIl9zZXR1cFVzZXJDb25maWd1cmF0aW9uIiwiYWRkIiwiX2dldEludmVudG9yeSIsImFsbFN0b3Jlc1dlcmVGZXRjaGVkIiwiZGF0YXNldCIsImZvcm11bGEiLCJyZXN1bHRzIiwiZGJTdG9yZU5hbWVzIiwib2JqU3RvcmUiLCJjb21wYXJpc29uIiwiaXRlbSIsIl9pbnNlcnREYXRhIiwiX2NhbGxlZTgiLCJ0YXJnZXRfc3RvcmUiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJwdXQiLCJjbGVhbnVwIiwiX3g3IiwiX3g4IiwiX2RlbGV0ZURhdGEiLCJfY2FsbGVlMTAiLCJfdGhpczQiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsIl9jYWxsZWU5IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiX3g5IiwiX3gxMCIsIl9jbGVhbnVwIiwiX2NhbGxlZTExIiwiX2NhbGxlZTExJCIsIl9jb250ZXh0MTEiLCJEQldvcmtlciIsIl9EYXRhYmFzZUFkYXB0ZXIiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiRGV2VG9vbHMiLCJCYWNrZ3JvdW5kU2VydmljZSIsIm9uU3RhcnR1cCIsImFkZExpc3RlbmVyIiwiYm9vdHN0cmFwQXBwbGljYXRpb24iLCJvbkluc3RhbGxlZCIsIm9uQ3JlYXRlZCIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsIm9uQ29ubmVjdCIsIm9uTWVzc2FnZSIsIl9yZWY1IiwiX3JlZjYiLCJfQmFja2dyb3VuZFNlcnZpY2UkZGEiLCJfQmFja2dyb3VuZFNlcnZpY2UkZGEyIiwiYWxsU2V0dGxlZCIsImZldGNoSGlnaFByaW9yaXR5VmFyaWFibGVzIiwiRU5WX1ZBUlMiLCJwYWdlQmVoYXZpb3IiXSwic291cmNlUm9vdCI6IiJ9