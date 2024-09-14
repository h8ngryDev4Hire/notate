/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
var CHROME_STORE_HIGH_PRIORITY = "CHROME_STORE_HIGH_PRIORITY";
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
      common: {}
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
                        if (!(data && store && typeof db.insertData === 'function')) {
                          _context3.next = 11;
                          break;
                        }
                        _context3.next = 3;
                        return db.insertData(data, store);
                      case 3:
                        _context3.next = 5;
                        return _this2.initializeDatabase(target);
                      case 5:
                        if (!(store === 'USER_CONFIGURATION')) {
                          _context3.next = 8;
                          break;
                        }
                        _context3.next = 8;
                        return _this2.updateBackgroundEnvVariables();
                      case 8:
                        port.postMessage({
                          type: 'DATABASE',
                          content: {
                            data: db,
                            database: target
                          }
                        });
                        _context3.next = 15;
                        break;
                      case 11:
                        _context3.next = 13;
                        return _this2.initializeDatabase(target);
                      case 13:
                        _context3.next = 15;
                        return insertOperation();
                      case 15:
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
                        if (!(data && store && typeof db.deleteData === 'function')) {
                          _context4.next = 8;
                          break;
                        }
                        _context4.next = 3;
                        return db.deleteData(data, store);
                      case 3:
                        _context4.next = 5;
                        return _this2.initializeDatabase(target);
                      case 5:
                        port.postMessage({
                          type: 'DATABASE',
                          content: {
                            data: db,
                            database: target
                          }
                        });
                        _context4.next = 12;
                        break;
                      case 8:
                        _context4.next = 10;
                        return _this2.initializeDatabase(target);
                      case 10:
                        _context4.next = 12;
                        return deleteOperation();
                      case 12:
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
                chrome.storage.sync.set({
                  CHROME_STORE_HIGH_PRIORITY: this.env.important
                });
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
              if (!(!this.databases.errorloggingdb || ((_this$databases$error = this.databases.errorloggingdb) === null || _this$databases$error === void 0 ? void 0 : _this$databases$error.inventory) instanceof Promise || !((_this$databases$error2 = this.databases.errorloggingdb) !== null && _this$databases$error2 !== void 0 && _this$databases$error2.insertData))) {
                _context7.next = 4;
                break;
              }
              _context7.next = 4;
              return this.initializeDatabase(ERROR_LOGGING_DB);
            case 4:
              _context7.prev = 4;
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
              _context7.next = 8;
              return this.databases.errorloggingdb.insertData(errorLog, "ERRORS");
            case 8:
              _context7.next = 12;
              break;
            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](4);
            case 12:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[4, 10]]);
      }));
      function generateErrorLog(_x6) {
        return _generateErrorLog.apply(this, arguments);
      }
      return generateErrorLog;
    }()
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
                          console.log("".concat(databaseName, " connected. awaiting inventory..."));
                          _context.next = 7;
                          return _this.getInventory();
                        case 7:
                          _this.inventory = _context.sent;
                          resolve(_this.connection);
                        case 9:
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
                          console.log("Upgrading DB ".concat(databaseName, "..."));
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
                            _context2.next = 7;
                            break;
                          }
                          _context2.next = 7;
                          return _this.setupUserConfiguration(transaction);
                        case 7:
                          console.log('DB install successful');

                          //Runs callback if defined
                          if (!(_this.workermessage === 'function')) {
                            _context2.next = 11;
                            break;
                          }
                          _context2.next = 11;
                          return _this.workermessage();
                        case 11:
                          _context2.next = 13;
                          return _this.getInventory();
                        case 13:
                          _this.inventory = _context2.sent;
                          resolve(_this.connection);
                        case 15:
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
/* harmony import */ var _dev_devutils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dev/devutils.js */ "./src/DevUtils/devutils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/*
 * DevTool Call
*/
(0,_dev_devutils_js__WEBPACK_IMPORTED_MODULE_2__["default"])();

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
        if (!(launchBehavior && launchBehavior === 'onNewTab')) {
          _context.next = 6;
          break;
        }
        _context.next = 6;
        return (0,_Utils_eventActions_js__WEBPACK_IMPORTED_MODULE_1__.spawnNotateTab)(launchBehavior);
      case 6:
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
        return BackgroundService.updateBackgroundEnvVariables();
      case 2:
        launchBehavior = BackgroundService.env.important.launchBehavior;
        if (typeof launchBehavior === 'undefined') {}
        console.log('launchBehavior: ', launchBehavior);
        if (launchBehavior === 'onNewTab') (0,_Utils_eventActions_js__WEBPACK_IMPORTED_MODULE_1__.spawnNotateTab)(launchBehavior);
      case 6:
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
        return BackgroundService.updateBackgroundEnvVariables();
      case 2:
        launchBehavior = BackgroundService.env.important.launchBehavior;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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L0ksSUFBQTtZQUFBO1VBQUE7VUFBQStJLFNBQUEsQ0FBQS9JLElBQUE7VUFBQSxPQUV6Q2dTLGlCQUFpQixDQUFDaE0sa0JBQWtCLENBQUN6QixxQkFBcUIsQ0FBQztRQUFBO1VBQUF3RSxTQUFBLENBQUEvSSxJQUFBO1VBQUE7UUFBQTtVQUFBK0ksU0FBQSxDQUFBL0ksSUFBQTtVQUFBLE9BQ3JEZ1MsaUJBQWlCLENBQUNwSyw0QkFBNEIsQ0FBQyxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFtQixTQUFBLENBQUFqSCxJQUFBO01BQUE7SUFBQSxHQUFBNEcsUUFBQTtFQUFBLENBRTdEO0VBQUEsZ0JBeEJLeUosb0JBQW9CQSxDQUFBO0lBQUEsT0FBQVEsS0FBQSxDQUFBelAsS0FBQSxPQUFBRCxTQUFBO0VBQUE7QUFBQSxHQXdCekI7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNOFAsMEJBQTBCLEdBQUksU0FBOUJBLDBCQUEwQkEsQ0FBQSxFQUFVO0VBQ3pDeEosTUFBTSxDQUFDQyxPQUFPLENBQUNDLElBQUksQ0FBQ3VKLEdBQUcsQ0FBQyxDQUFDeE8sMEJBQTBCLENBQUMsRUFBRSxVQUFDeU8sUUFBUSxFQUFHO0lBQ2pFN0osT0FBTyxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFNEosUUFBUSxDQUFDO0lBQ25DLElBQUk7TUFDSGpPLGNBQWMsR0FBR2lPLFFBQVEsQ0FBQ3pPLDBCQUEwQixDQUFDLENBQUMwTyxZQUFZO0lBQ25FLENBQUMsQ0FBQyxPQUFPdFEsS0FBSyxFQUFFLENBQ2hCO0VBQ0QsQ0FBQyxDQUFDO0FBQ0gsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvQmFja2dyb3VuZC9VdGlscy9jb3JlU2VydmljZS5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9CYWNrZ3JvdW5kL1V0aWxzL2V2ZW50QWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9EZXZVdGlscy9TY3JpcHRzL2luc3BlY3RJbmRleGVkREJTdG9yZS5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9EZXZVdGlscy9kZXZ1dGlscy5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9Vbml2ZXJzYWwvSGFuZGxlcnMvVXNlckNvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvVW5pdmVyc2FsL0hhbmRsZXJzL2luZGV4ZWREQmhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9CYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFiYXNlQWRhcHRlciBmcm9tICdAdW5pdmVyc2FsL0hhbmRsZXJzL2luZGV4ZWREQmhhbmRsZXIuanMnO1xuXG5leHBvcnQgY29uc3QgTk9UQVRFX0RCID0gXCJub3RhdGVcIlxuZXhwb3J0IGNvbnN0IEVSUk9SX0xPR0dJTkdfREIgPSBcImVycm9yTG9nZ2luZ1wiXG5leHBvcnQgY29uc3QgVVNFUl9DT05GSUdVUkFUSU9OX0RCID0gXCJ1c2VyQ29uZmlndXJhdGlvblwiXG5cbmNvbnN0IENIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZID0gXCJDSFJPTUVfU1RPUkVfSElHSF9QUklPUklUWVwiXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29yZVNlcnZpY2Uge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmRhdGFiYXNlcyA9IHtcblx0XHRcdG5vdGF0ZWRiOiB1bmRlZmluZWQsXG5cdFx0XHRlcnJvcmxvZ2dpbmdkYjogdW5kZWZpbmVkLFxuXHRcdFx0dXNlcmNvbmZpZ3VyYXRpb25kYjogdW5kZWZpbmVkIFxuXHRcdH1cblx0XHR0aGlzLmVudiA9IHtcblx0XHRcdGltcG9ydGFudDoge1xuXHRcdFx0XHRsYXVuY2hCZWhhdmlvcjogdW5kZWZpbmVkXG5cdFx0XHR9LFxuXHRcdFx0Y29tbW9uOiB7XG5cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0XG5cblx0YXN5bmMgaW5pdGlhbGl6ZURhdGFiYXNlKG5hbWUpIHtcblx0XHRyZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bGV0IGRhdGFiYXNlO1xuXG5cdFx0XHRzd2l0Y2ggKG5hbWUpIHtcblx0XHRcdFx0Y2FzZSBOT1RBVEVfREI6XG5cdFx0XHRcdFx0dGhpcy5kYXRhYmFzZXMubm90YXRlZGIgPSBhd2FpdCBuZXcgRGF0YWJhc2VBZGFwdGVyKE5PVEFURV9EQilcblx0XHRcdFx0XHRkYXRhYmFzZSA9IHRoaXMuZGF0YWJhc2VzLm5vdGF0ZWRiXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgRVJST1JfTE9HR0lOR19EQjpcblx0XHRcdFx0XHR0aGlzLmRhdGFiYXNlcy5lcnJvcmxvZ2dpbmdkYiA9IGF3YWl0IG5ldyBEYXRhYmFzZUFkYXB0ZXIoRVJST1JfTE9HR0lOR19EQilcblx0XHRcdFx0XHRkYXRhYmFzZSA9IHRoaXMuZGF0YWJhc2VzLmVycm9ybG9nZ2luZ2RiXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgVVNFUl9DT05GSUdVUkFUSU9OX0RCOlxuXHRcdFx0XHRcdHRoaXMuZGF0YWJhc2VzLnVzZXJjb25maWd1cmF0aW9uZGIgPSBhd2FpdCBuZXcgRGF0YWJhc2VBZGFwdGVyKFVTRVJfQ09ORklHVVJBVElPTl9EQilcblx0XHRcdFx0XHRkYXRhYmFzZSA9IHRoaXMuZGF0YWJhc2VzLnVzZXJjb25maWd1cmF0aW9uZGJcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblxuXHRcdFx0YXdhaXQgZGF0YWJhc2UuaW52ZW50b3J5XG5cblx0XHRcdHJlc29sdmUoZGF0YWJhc2UpXG5cdFx0fSlcblx0fVxuXG5cblx0YXN5bmMgZGF0YWJhc2VSZXF1ZXN0KHBvcnQsIG1lc3NhZ2UpICB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChcblx0XHRcdFx0KHR5cGVvZiBwb3J0ID09PSAnb2JqZWN0JykgJiYgXG5cdFx0XHRcdG1lc3NhZ2U/LnR5cGUgJiYgXG5cdFx0XHRcdG1lc3NhZ2U/LmNvbnRlbnQgJiYgXG5cdFx0XHRcdG1lc3NhZ2U/LmNvbnRlbnQ/LmRhdGFiYXNlXG5cdFx0XHQpe1xuXHRcdFx0XHRsZXQgZGF0YSwgc3RvcmUsIGRiO1xuXHRcblx0XG5cdFx0XHRcdGNvbnN0IHsgXG5cdFx0XHRcdFx0dHlwZSwgXG5cdFx0XHRcdFx0Y29udGVudDoge2RhdGFiYXNlOiB0YXJnZXR9LCAgXG5cdFx0XHRcdH0gPSBtZXNzYWdlXG5cdFx0XHRcblx0XHRcdFx0c3dpdGNoICh0YXJnZXQpIHtcblx0XHRcdFx0XHRjYXNlIE5PVEFURV9EQjpcblx0XHRcdFx0XHRcdGRiID0gdGhpcy5kYXRhYmFzZXMubm90YXRlZGIgXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XG5cdFx0XHRcdFx0Y2FzZSBFUlJPUl9MT0dHSU5HX0RCOlxuXHRcdFx0XHRcdFx0ZGIgPSB0aGlzLmRhdGFiYXNlcy5lcnJvcmxvZ2dpbmdkYlxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFxuXHRcdFx0XHRcdGNhc2UgVVNFUl9DT05GSUdVUkFUSU9OX0RCOlxuXHRcdFx0XHRcdFx0ZGIgPSB0aGlzLmRhdGFiYXNlcy51c2VyY29uZmlndXJhdGlvbmRiXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVx0XG5cdFxuXHRcblx0XHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnR0VUX0RBVEFCQVNFJzogXG5cdFxuXHRcdFx0XHRcdFx0cG9ydC5wb3N0TWVzc2FnZSh7IFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnREFUQUJBU0UnLCBcblx0XHRcdFx0XHRcdFx0Y29udGVudDogeyBkYXRhOiBkYiwgZGF0YWJhc2U6IHRhcmdldCB9XG5cdFx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0Y2FzZSAnUE9TVF9EQVRBQkFTRSc6IFxuXHRcdFx0XHRcdFx0ZGF0YSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LmRhdGFcblx0XHRcdFx0XHRcdHN0b3JlID0gbWVzc2FnZT8uY29udGVudD8uc3RvcmVcblx0XHRcblx0XHRcdFx0XHRcdGNvbnN0IGluc2VydE9wZXJhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdFx0aWYgKCBkYXRhICYmIHN0b3JlICYmIHR5cGVvZiBkYi5pbnNlcnREYXRhID09PSAnZnVuY3Rpb24nICkge1xuXHRcdFx0XHRcdFx0IFx0XHRhd2FpdCBkYi5pbnNlcnREYXRhKGRhdGEsIHN0b3JlKVxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuaW5pdGlhbGl6ZURhdGFiYXNlKHRhcmdldClcblx0XHRcblx0XHRcdFx0XHRcdFx0XHQvLyBTaW5jZSBvbmx5IFVwZGF0ZSBPcHMgd2lsbCBiZSBwZXJmb3JtZWQgb24gdGhpcyBzdG9yZSwgaXRzIHNhZmVcblx0XHRcdFx0XHRcdFx0XHQvLyB0byBhbHdheXMgYXNzdW1lIHRoYXQgdGhpcyBmdW5jdGlvbiBuZWVkcyB0byBiZSByYW4gYWZ0ZXIgZXZlcnlcblx0XHRcdFx0XHRcdFx0XHQvLyB1c2VyIGNvbmZpZ3VyYXRpb24gdXBkYXRlLlxuXHRcdFx0XHRcdFx0XHRcdGlmIChzdG9yZSA9PT0gJ1VTRVJfQ09ORklHVVJBVElPTicpIGF3YWl0IHRoaXMudXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlcygpXG5cdFxuXHRcdFx0XHRcdFx0XHRcdHBvcnQucG9zdE1lc3NhZ2UoeyBcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6ICdEQVRBQkFTRScsIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGVudDogeyBkYXRhOiBkYiwgZGF0YWJhc2U6IHRhcmdldCB9XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmluaXRpYWxpemVEYXRhYmFzZSh0YXJnZXQpXG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgaW5zZXJ0T3BlcmF0aW9uKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRcdH1cblx0XHRcblx0XHRcdFx0XHRcdGF3YWl0IGluc2VydE9wZXJhdGlvbigpXG5cdFx0XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcblx0XHRcdFx0XHRjYXNlICdERUxFVEVfREFUQUJBU0UnOiBcblx0XHRcdFx0XHRcdGRhdGEgPSBtZXNzYWdlPy5jb250ZW50Py5kYXRhXG5cdFx0XHRcdFx0XHRzdG9yZSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LnN0b3JlXG5cdFx0XG5cdFx0XHRcdFx0XHRjb25zdCBkZWxldGVPcGVyYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdGlmICggZGF0YSAmJiBzdG9yZSAmJiB0eXBlb2YgZGIuZGVsZXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCBkYi5kZWxldGVEYXRhKGRhdGEsIHN0b3JlKVxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHRoaXMuaW5pdGlhbGl6ZURhdGFiYXNlKHRhcmdldClcblx0XHRcdFx0XHRcdFx0XHRwb3J0LnBvc3RNZXNzYWdlKHsgXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnREFUQUJBU0UnLCBcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHsgZGF0YTogZGIsIGRhdGFiYXNlOiB0YXJnZXQgfVxuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmluaXRpYWxpemVEYXRhYmFzZSh0YXJnZXQpXG5cdFx0XHRcdFx0XHRcdFx0YXdhaXQgZGVsZXRlT3BlcmF0aW9uKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFxuXHRcdFx0XHRcdFx0YXdhaXQgZGVsZXRlT3BlcmF0aW9uKClcblx0XHRcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGNhc2UgJ1JFTE9BRF9EQVRBQkFTRSc6IFxuXHRcdFx0XHRcdFx0aWYgKCFkYiB8fCBkYj8uaW52ZW50b3J5IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCB0aGlzLmluaXRpYWxpemVEYXRhYmFzZSh0YXJnZXQpXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRwb3J0LnBvc3RNZXNzYWdlKHsgXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ0RBVEFCQVNFJywgXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogeyBkYXRhOiBkYiwgZGF0YWJhc2U6IHRhcmdldCB9LFxuXHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIm1lc3NhZ2UgXCIgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArIFwiXFxuXCIgKyBcblx0XHRcdFx0XHRcIiBlaXRoZXIgaGFzIGFuIGludmFsaWQgc2NoZW1hIG9yIGlzIG1pc3Npbmcgb25lIG9yIG1vcmUgcmVxdWlyZWQgcHJvcGVydGllcy5cIiArXG5cdFx0XHRcdFx0XCJcXG5tZXNzYWdlcyBhcmUgZXhwZWN0ZWQgdG8gaGF2ZSAnLnR5cGUnLCAnLmNvbnRlbnQnLCBhbmQgJy5jb250ZW50LmRhdGFiYXNlJyBmaWVsZHMuXCIpXG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdGF3YWl0IHRoaXMuZ2VuZXJhdGVFcnJvckxvZyhlcnJvciwgeyBmdW5jdGlvbjogJ2RhdGFiYXNlUmVxdWVzdCcgfSlcblx0XHR9XG5cdH1cblxuXG5cdGFzeW5jIHVwZGF0ZUJhY2tncm91bmRFbnZWYXJpYWJsZXMoKSB7XG5cdFx0bGV0IGxhdW5jaEJlaGF2aW9yO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGF3YWl0IHRoaXMuZGF0YWJhc2VzLnVzZXJjb25maWd1cmF0aW9uZGIuaW52ZW50b3J5XG5cblx0XG5cdFx0XHR0aGlzLmVudi5pbXBvcnRhbnQubGF1bmNoQmVoYXZpb3IgPSB0aGlzLmRhdGFiYXNlcy5cblx0XHRcdFx0dXNlcmNvbmZpZ3VyYXRpb25kYi5pbnZlbnRvcnkuVVNFUl9DT05GSUdVUkFUSU9OWzBdLk5vdGF0ZS5wYWdlLnBhZ2VPcGVuQmVoYXZpb3IudmFsdWVcdFxuXG5cdFx0XHRsYXVuY2hCZWhhdmlvciA9IHRoaXMuZW52LmltcG9ydGFudC5sYXVuY2hCZWhhdmlvciBcblxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRhd2FpdCB0aGlzLmdlbmVyYXRlRXJyb3JMb2coZXJyb3IsIHtmdW5jdGlvbjogXCJ1cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzXCJ9KVxuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdCF0aGlzLmRhdGFiYXNlcz8udXNlcmNvbmZpZ3VyYXRpb25kYj8uaW52ZW50b3J5IHx8XG5cdFx0XHRcdCF0aGlzLmRhdGFiYXNlcz8udXNlcmNvbmZpZ3VyYXRpb25kYlxuXHRcdFx0KSB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd1c2VyY29uZmlndXJhdGlvbmRiIHdhcyBub3QgbG9hZGVkLiByZWxvYWRpbmcgbm93Li4uJylcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRhd2FpdCB0aGlzLmluaXRpYWxpemVEYXRhYmFzZShVU0VSX0NPTkZJR1VSQVRJT05fREIpXG5cdFx0XHRcdH0gY2F0Y2goZSkge31cblx0XHRcdFx0YXdhaXQgdGhpcy51cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKClcblx0XHRcdH1cblx0XG5cdFx0XHRpZiAodHlwZW9mIGxhdW5jaEJlaGF2aW9yID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3VuYWJsZSB0byBzZXQgdXAgYmFja2dyb3VuZCBlbnYgdmFyaWFibGVzLiByZXRyeWluZyBpbiA1MDBtcy4uLicpXG5cdFx0XHRcdHNldFRpbWVvdXQoKCk9PiB0aGlzLnVwZGF0ZUJhY2tncm91bmRFbnZWYXJpYWJsZXMoKSwgNTAwKVxuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChsYXVuY2hCZWhhdmlvcikge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZW52IHZhcmlhYmxlcyBpbml0aWFsaXplZC4gVXBkYXRpbmcgaGlnaCBwcmlvcml0eSBlbnYgdmFyaWFibGVzLi4uJylcblx0XHRcdFx0XG5cdFx0XHRcdGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgQ0hST01FX1NUT1JFX0hJR0hfUFJJT1JJVFk6IHRoaXMuZW52LmltcG9ydGFudCB9KVxuXHRcblx0XHRcdH0gXG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZ2VuZXJhdGVFcnJvckxvZyhlcnJvciwgY29udGV4dD17fSkge1xuXHRcdGlmIChcblx0XHRcdCF0aGlzLmRhdGFiYXNlcy5lcnJvcmxvZ2dpbmdkYiB8fCBcblx0XHRcdHRoaXMuZGF0YWJhc2VzLmVycm9ybG9nZ2luZ2RiPy5pbnZlbnRvcnkgaW5zdGFuY2VvZiBQcm9taXNlIHx8IFxuXHRcdFx0IXRoaXMuZGF0YWJhc2VzLmVycm9ybG9nZ2luZ2RiPy5pbnNlcnREYXRhXG5cdFx0KSBhd2FpdCB0aGlzLmluaXRpYWxpemVEYXRhYmFzZShFUlJPUl9MT0dHSU5HX0RCKVxuXHRcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZXJyb3JMb2cgPSB7XG5cdFx0XHRcdHRpbWVzdGFtcDogbmV3IERhdGUoKS50b0lTT1N0cmluZygpLFxuXHRcdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRcdG5hbWU6IGVycm9yPy5uYW1lLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IGVycm9yPy5tZXNzYWdlLFxuXHRcdFx0XHRcdHN0YWNrVHJhY2U6IGVycm9yPy5zdGFja1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb250ZXh0OiB7XG5cdFx0XHRcdFx0IC4uLmNvbnRleHQsXG5cdFx0XHRcdFx0dXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJycpLFxuXHRcdFx0XHRcdGV4dGVuc2lvbklkOiBjaHJvbWUucnVudGltZS5pZCxcblx0XHRcdFx0XHRtYW5pZmVzdFZlcnNpb246IGNocm9tZS5ydW50aW1lLmdldE1hbmlmZXN0KCk/Lm1hbmlmZXN0X3ZlcnNpb25cblx0XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdFx0XHRhd2FpdCB0aGlzLmRhdGFiYXNlcy5lcnJvcmxvZ2dpbmdkYi5pbnNlcnREYXRhKGVycm9yTG9nLCBcIkVSUk9SU1wiKVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFxuXHRcdH1cblxuXHR9XG59XG4iLCJjb25zdCBOT1RBVEVfTEFORElOR19QQUdFID0gJy4vaW5kZXguaHRtbCc7XG5jb25zdCBDSFJPTUVfTkVXVEFCID0gJ2Nocm9tZTovL25ld3RhYi8nXG5cbi8qXG5GVU5DVElPTjpcblx0SW5qZWN0cyB0aGUgTm90YXRlIHN0YXJ0aW5nIHBhZ2Ugd2hlbiB0aGUgTmV3IFRhYiBidXR0b24gaXNcdFxuXHRjbGlja2VkXG4qL1xuZXhwb3J0IGNvbnN0IHNwYXduTm90YXRlVGFiID0gYXN5bmMgKGRpcmVjdGl2ZSkgPT4ge1xuXHRpZiAoZGlyZWN0aXZlID09PSBcIm9uTmV3VGFiXCIpIHtcblx0XHRjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuXHRcdFx0Y29uc3QgdGFiID0gdGFic1swXVxuXHRcblx0XG5cdFx0XHRpZiAodGFiPy51cmwgPT0gQ0hST01FX05FV1RBQiB8fCB0YWI/LnBlbmRpbmdVcmwgPT0gQ0hST01FX05FV1RBQikge1xuXHRcdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlbWVudCBub3QgZXhlY3V0ZWQnKVxuXHRcdFx0XHRjb25zb2xlLmxvZygodGFiPy51cmwgPyAoJ1RBQiBVUkw6ICcsIHRhYj8udXJsKSA6ICcnKSlcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BFTkRJTkcgVEFCIFVSTDogJywgdGFiPy5wZW5kaW5nVXJsKVxuXHRcdFx0fVxuXHRcblx0XHR9KVx0XG5cdH1cblxuXHRlbHNlIGlmIChkaXJlY3RpdmUgPT09IFwib25DbGlja1BvcHVwXCIpIHtcblx0XHRjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuXHRcdFx0Y29uc3QgdGFiID0gdGFic1swXVxuXG5cdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0fSlcblx0fVxuXG59XG4iLCJleHBvcnQgIGZ1bmN0aW9uIGluc3BlY3RJREJTdG9yZShkYXRhYmFzZU5hbWUpIHtcblx0aWYgKCFkYXRhYmFzZU5hbWUpIHRocm93IG5ldyBFcnJvcihgaW5zcGVjdElEQlN0b3JlKCkgJ2RhdGFiYXNlTmFtZScgcGFyYW0gZXhwZWN0ZWQgYnV0IG5vbmUgc3VwcGxpZWQuYClcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gaW5kZXhlZERCLm9wZW4oZGF0YWJhc2VOYW1lKTtcblxuICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSBldmVudCA9PiByZWplY3QoYEVycm9yIG9wZW5pbmcgZGF0YWJhc2U6ICR7ZXZlbnQudGFyZ2V0LmVycm9yfWApO1xuXG4gICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGIgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgY29uc3Qgc3RvcmVOYW1lcyA9IEFycmF5LmZyb20oZGIub2JqZWN0U3RvcmVOYW1lcyk7XG4gICAgICAgICAgICBjb25zdCBhbGxTdG9yZXNEYXRhID0ge307XG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZWRTdG9yZXMgPSAwO1xuXG4gICAgICAgICAgICBzdG9yZU5hbWVzLmZvckVhY2goc3RvcmVOYW1lID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlTmFtZSwgJ3JlYWRvbmx5Jyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShzdG9yZU5hbWUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdldEFsbFJlcXVlc3QgPSBzdG9yZS5nZXRBbGwoKTtcblxuICAgICAgICAgICAgICAgIGdldEFsbFJlcXVlc3Qub25lcnJvciA9IGV2ZW50ID0+IHJlamVjdChgRXJyb3IgZmV0Y2hpbmcgZGF0YSBmcm9tICR7c3RvcmVOYW1lfTogJHtldmVudC50YXJnZXQuZXJyb3J9YCk7XG5cbiAgICAgICAgICAgICAgICBnZXRBbGxSZXF1ZXN0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWxsU3RvcmVzRGF0YVtzdG9yZU5hbWVdID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGVkU3RvcmVzKys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBsZXRlZFN0b3JlcyA9PT0gc3RvcmVOYW1lcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBDb250ZW50IG9mIGFsbCBzdG9yZXMgaW4gXCIke2RhdGFiYXNlTmFtZX1cIjpgLCBhbGxTdG9yZXNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWxsU3RvcmVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgdHJhbnNhY3Rpb24ub25lcnJvciA9IGV2ZW50ID0+IHJlamVjdChgVHJhbnNhY3Rpb24gZXJyb3IgZm9yICR7c3RvcmVOYW1lfTogJHtldmVudC50YXJnZXQuZXJyb3J9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn1cblxuLy8gVXNhZ2UgZXhhbXBsZTpcbi8vIGluc3BlY3RJREJTdG9yZSgnTk9UQVRFX0RCJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4vLyBpbnNwZWN0SURCU3RvcmUoJ0VSUk9SX0xPR0dJTkdfREInKS50aGVuKGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSkpLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsvLyBVc2FnZSBleGFtcGxlOlxuLy8gaW5zcGVjdElEQlN0b3JlKCdub3RhdGUnLCAnVVNFUl9DT05GSUdVUkFUSU9OJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7Ly8gVXNhZ2UgZXhhbXBsZTpcbi8vIHZpZXdJbmRleGVkREJTdG9yZSgnVVNFUl9DT05GSUdVUkFUSU9OJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XG4iLCJpbXBvcnQgeyBpbnNwZWN0SURCU3RvcmUgfSBmcm9tICcuL1NjcmlwdHMvaW5zcGVjdEluZGV4ZWREQlN0b3JlLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXVuY2hEZXZUb29scygpIHtcblx0dHJ5IHtcblx0XHRnbG9iYWxUaGlzLmluc3BlY3RJREJTdG9yZSA9IGluc3BlY3RJREJTdG9yZVxuXHRcdGdsb2JhbFRoaXMucGluZyA9IHBpbmdcblxuXHRcdGdsb2JhbFRoaXMucGluZygpXG5cdH0gY2F0Y2goZXJyb3IpIHtcblx0XHRlcnJvclxuXHRcdGRlYnVnZ2VyXG5cdH1cbn1cblxuXG5jb25zdCBwaW5nID0gKCkgPT4ge1xuXHRjb25zb2xlLmxvZygncGluZycpXG59XG4iLCJleHBvcnQgY29uc3QgQ29uZmlndXJhdGlvblRlbXBsYXRlID0ge1xuXHROb3RhdGU6IHtcblx0XHRzZWFyY2g6IHtcblx0XHRcdHByZWZlcnJlZEVuZ2luZToge1xuXHRcdFx0XHR2YWx1ZTogXCJwZXJwbGV4aXR5YWlcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiU2V0cyB5b3VyIHByZWZlcnJlZCBTZWFyY2ggRW5naW5lLlwiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJnb29nbGVcIiwgXCJiaW5nXCIsIFwiZHVja2R1Y2tnb1wiLCBcInlhaG9vXCIsIFwiYmFpZHVcIiwgXCJ5YW5kZXhcIiwgXCJlY29zaWFcIiwgXCJwZXJwbGV4aXR5YWlcIl0sXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRzZWFyY2hOb3Rlczoge1xuXHRcdFx0XHR2YWx1ZTogXCJ0cnVlXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgd2hldGhlciBvciBub3Qgbm90ZXMgc2hvdWxkIGJlIHNlYXJjaGVkIGZvciB3aGVuIHNlYXJjaGluZyBpbiB0aGUgc2VhcmNoIGJhci5cIixcblx0XHRcdFx0b3B0aW9uczogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRwYWdlOiB7XG5cdFx0XHRwYWdlT3BlbkJlaGF2aW9yOiB7XG5cdFx0XHRcdHZhbHVlOiBcIm9uTmV3VGFiXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgZGVmYXVsdCBwYWdlIHRvIG9wZW4gdXAgd2hlbiBjbGlja2luZyB0aGUgTmV3IFRhYiBCdXR0b24uXCIsXG5cdFx0XHRcdG9wdGlvbnM6IFtcIm9uTmV3VGFiXCIsIFwib25DbGlja1BvcHVwXCIsIFwiZmFsc2VcIl0sXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRiYWNrZ3JvdW5kV2FsbHBhcGVyOiB7XG5cdFx0XHRcdHZhbHVlOiBcImRhcmtXb29kXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlwiU2V0cyB3YWxscGFwZXIgZm9yIE5vdGF0ZS5cIixcblx0XHRcdFx0b3B0aW9uczogW1wiZGFya1dvb2RcIiwgXCJjb3JrQm9hcmRcIiwgXCJtYXJibGVDaGVzc0JvYXJkXCIsIFwibm90ZVBhcGVyXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRub3RlTW9kYWw6IHtcblx0XHRcdHByZWZlcnJlZENvbG9yOiB7XG5cdFx0XHRcdHZhbHVlOiBcInllbGxvd1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJTZXRzIHByZWZlcnJlZCBjb2xvciB3aGVuIGNyZWF0aW5nIG5ldyBub3Rlc1wiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJyZWRcIiwgXCJ5ZWxsb3dcIiwgXCJibHVlXCIsIFwiZ3JlZW5cIiwgXCJvcmFuZ2VcIiwgXCJwaW5rXCIsIFwicHVycGxlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRXZWJDb250ZW50OiB7XG5cdFx0dG9vbHM6IHtcblx0XHRcblx0XHR9LFxuXHRcdGJlaGF2aW9yOiB7XG5cdFx0XHRuZXdOb3RlUG9wdXA6IHtcblx0XHRcdFx0dmFsdWU6IFwidHJ1ZVwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJTZXRzIHdoZXRoZXIgdGhlIE5ldyBOb3RlIEJ1dHRvbiBzaG93cyB3aGVuIGhvdmVyaW5nIHRoZSBjdXJzb3IgaW4gdGhlIGNvcm5lciBvZiB0aGUgcGFnZS5cIixcblx0XHRcdFx0b3B0aW9uczogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb25maWd1cmF0aW9uVGVtcGxhdGUgfSBmcm9tICcuL1VzZXJDb25maWd1cmF0aW9uLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZUFkYXB0ZXIge1xuICAgY29uc3RydWN0b3IoZGF0YWJhc2VOYW1lKSB7XG4gICAgdGhpcy5tYXBwZXIgPSB7XG4gICAgICAgIGRiOiB7XG5cdFx0bm90YXRlOiB7XG5cdFx0XHRuYW1lOidOT1RBVEVfREInLFxuXHRcdFx0c3RvcmVzOiAgWydOT1RFUycsICdOT1RFQk9PS1MnXSxcblx0XHR9LFxuXHRcdGVycm9yTG9nZ2luZzoge1xuXHRcdFx0bmFtZTogJ0VSUk9SX0xPR0dJTkdfREInLFxuXHRcdFx0c3RvcmVzOiBbJ0VSUk9SUyddXG5cdFx0fSxcblx0XHR1c2VyQ29uZmlndXJhdGlvbjoge1xuXHRcdFx0bmFtZTogJ1VTRVJfQ09ORklHVVJBVElPTl9EQicsXG5cdFx0XHRzdG9yZXM6IFsnVVNFUl9DT05GSUdVUkFUSU9OJ11cblx0XHR9XG5cdH1cbiAgICB9XG4gICAgdGhpcy5jb25uZWN0aW9uID0gIHRoaXMuY29ubmVjdFRvREIoZGF0YWJhc2VOYW1lKTtcbiAgICB0aGlzLmludmVudG9yeSA9ICBudWxsO1xuICAgIHRoaXMucmVxdWVzdCA9IG51bGw7XG4gIH1cbiAgICBcbiAgYXN5bmMgY29ubmVjdFRvREIoZGF0YWJhc2VOYW1lKSB7XG5cdCAgXHQgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdCAgIFxuXHRcdCAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMubWFwcGVyLmRiW2RhdGFiYXNlTmFtZV1cblxuICAgXHRcdCAgIGNvbnN0IERCQnJpZ2UgPSBpbmRleGVkREIub3BlbihsZWdlbmQubmFtZSwgMSk7XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9uc3VjY2VzcyA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ICAgICBpZiAodGhpcy53b3JrZXJtZXNzYWdlID09PSAnZnVuY3Rpb24nKSBhd2FpdCB0aGlzLndvcmtlcm1lc3NhZ2UoKVxuICAgXHRcdCAgICAgdGhpcy5jb25uZWN0aW9uID0gZS50YXJnZXQucmVzdWx0O1xuXG5cdFx0ICAgICBjb25zb2xlLmxvZyhgJHtkYXRhYmFzZU5hbWV9IGNvbm5lY3RlZC4gYXdhaXRpbmcgaW52ZW50b3J5Li4uYClcblx0XHQgICAgIHRoaXMuaW52ZW50b3J5ID0gYXdhaXQgdGhpcy5nZXRJbnZlbnRvcnkoKVxuICAgXHRcdCAgICAgcmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24pO1xuICAgXHRcdCAgIH07XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGluaXRpbmcgREI6ICcgKyBlLnRhcmdldC5lcnJvcikpO1xuXG4gICBcdFx0ICAgREJCcmlnZS5vbnVwZ3JhZGVuZWVkZWQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdFx0ICAgY29uc29sZS5sb2coYFVwZ3JhZGluZyBEQiAke2RhdGFiYXNlTmFtZX0uLi5gKVxuICAgXHRcdCBcbiAgIFx0XHQgICAgIHRoaXMuY29ubmVjdGlvbiA9IGUudGFyZ2V0LnJlc3VsdDtcblx0XHQgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZS50YXJnZXQudHJhbnNhY3Rpb25cblxuICAgXHRcdCAgICAgbGVnZW5kLnN0b3Jlcy5mb3JFYWNoKChzdG9yZUtleSk9PntcbiAgIFx0XHQgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVLZXksIHsga2V5UGF0aDogJ2lkJywgYXV0b0luY3JlbWVudDogdHJ1ZSB9KVxuICAgXHRcdCAgICAgfSlcbiAgIFx0XG5cdFx0ICAgICBpZiAobGVnZW5kLnN0b3Jlcy5zb21lKCBzdG9yZSA9PiBzdG9yZSA9PT0gXCJVU0VSX0NPTkZJR1VSQVRJT05cIiApKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnNldHVwVXNlckNvbmZpZ3VyYXRpb24odHJhbnNhY3Rpb24pXG5cdFx0ICAgICB9IFxuXHRcdFx0ICAgXG5cblx0XHQgICAgIGNvbnNvbGUubG9nKCdEQiBpbnN0YWxsIHN1Y2Nlc3NmdWwnKVxuXG5cdFx0ICAgICAvL1J1bnMgY2FsbGJhY2sgaWYgZGVmaW5lZFxuXHRcdCAgICAgaWYgKHRoaXMud29ya2VybWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YXdhaXQgdGhpcy53b3JrZXJtZXNzYWdlKClcblx0XHQgICAgIH1cblxuXHRcdCAgICAgdGhpcy5pbnZlbnRvcnkgPSBhd2FpdCB0aGlzLmdldEludmVudG9yeSgpXG4gICBcdFx0ICAgICByZXNvbHZlKHRoaXMuY29ubmVjdGlvbik7XG4gICBcdFx0ICAgfTtcbiAgIFx0XHQgfSk7XG4gIH1cblxuICBhc3luYyBzZXR1cFVzZXJDb25maWd1cmF0aW9uKHRyYW5zYWN0aW9uKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ1VTRVJfQ09ORklHVVJBVElPTicpXG5cdFx0XHRzdG9yZS5hZGQoQ29uZmlndXJhdGlvblRlbXBsYXRlKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSlcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2NvbmZpZyB1cGxvYWQgZmFpbGVkJylcblx0XHR9XG5cdH0pXG4gIH1cblxuXG4gICAgLy8gTmVlZHMgdG8gYmUgd29ya2VkIG9uXG4gICAgYXN5bmMgZ2V0SW52ZW50b3J5KCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgY29uc3QgZGIgPSB0aGlzLmNvbm5lY3Rpb25cbiAgICAgICAgY29uc3QgaW52ZW50b3J5ID0ge31cblxuXG5cdGNvbnN0IGFsbFN0b3Jlc1dlcmVGZXRjaGVkID0gKGRhdGFzZXQpID0+IHtcblx0XHRjb25zdCBmb3JtdWxhID0gIChlKSA9PiBlID09PSBmYWxzZVxuXHRcdGNvbnN0IHJlc3VsdHMgPSBkYXRhc2V0LnNvbWUoZm9ybXVsYSlcblx0XHRyZXR1cm4gIXJlc3VsdHNcblx0fVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYlN0b3JlTmFtZXMgPSBkYi5vYmplY3RTdG9yZU5hbWVzXG4gICAgICAgICAgICBjb25zdCBzdG9yZXMgPSB7fVxuXG5cdCAgICBPYmplY3QudmFsdWVzKGRiU3RvcmVOYW1lcykuZm9yRWFjaCgobmFtZSk9Pnsgc3RvcmVzW25hbWVdID0gZmFsc2UgfSlcblxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXMpLmZvckVhY2goKHN0b3JlKT0+e1xuICAgICAgICAgICAgICAgIGludmVudG9yeVtzdG9yZV0gPSBbXVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihzdG9yZSwgJ3JlYWRvbmx5JylcbiAgICAgICAgICAgICAgICBjb25zdCBvYmpTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9ialN0b3JlLmdldEFsbCgpXG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlLnRhcmdldC5yZXN1bHRcblx0XHQgICAgXG5cdFx0ICAgIGlmICh0eXBlb2YgcmVzdWx0cyA9PT0gJ29iamVjdCcgJiYgcmVzdWx0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHN0b3Jlc1tzdG9yZV0gPSB0cnVlXG5cblx0XHRcdGNvbnN0IGNvbXBhcmlzb24gPSBhbGxTdG9yZXNXZXJlRmV0Y2hlZChPYmplY3QudmFsdWVzKHN0b3JlcykpXG5cblx0XHRcdCAgICBpZiAoY29tcGFyaXNvbikge1xuXHRcdFx0ICAgIFx0dGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnlcblx0XHRcdFx0cmVzb2x2ZSh0aGlzLmludmVudG9yeSlcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeVtzdG9yZV0ucHVzaChpdGVtKVxuXHRcdFx0c3RvcmVzW3N0b3JlXSA9IHRydWVcblxuXHRcdFx0Y29uc3QgY29tcGFyaXNvbiA9IGFsbFN0b3Jlc1dlcmVGZXRjaGVkKE9iamVjdC52YWx1ZXMoc3RvcmVzKSlcdFx0XHRcblxuXHRcdFx0aWYgKGNvbXBhcmlzb24pIHtcblx0XHRcdFx0dGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnlcblx0XHRcdFx0cmVzb2x2ZSh0aGlzLmludmVudG9yeSlcblx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGUpID0+IHtyZWplY3QoY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyByZXF1ZXN0OiAke2UuZXJyb3J9YCkpfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgaW5zZXJ0RGF0YShkYXRhLCB0YXJnZXRfc3RvcmUpIHsgICAgICAgIFxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuY29ubmVjdGlvblxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFt0YXJnZXRfc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGFyZ2V0X3N0b3JlKVxuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUucHV0KGRhdGEpXG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCk9PiB7XG5cdCAgICBcdGF3YWl0IHRoaXMuY2xlYW51cCgpXG5cdFx0cmVzb2x2ZSgnSXRlbSBhZGRlZCB0byBEQicpXG5cdCAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiB7cmVqZWN0KGNvbnNvbGUuZXJyb3IoYEVycm9yIGFkZGluZyBkYXRhOiAke2UuZXJyb3J9YCkpfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcblxuXG4gICAgYXN5bmMgZGVsZXRlRGF0YShkYXRhLCB0YXJnZXRfc3RvcmUpIHsgICAgICAgIFxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuY29ubmVjdGlvblxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFt0YXJnZXRfc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGFyZ2V0X3N0b3JlKVxuXG4gICAgICAgICAgICBpZiAoZGF0YT8uaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0YS5pZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5kZWxldGUoaXRlbSlcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCk9PiB7XG5cdFx0XHRhd2FpdCB0aGlzLmNsZWFudXAoKVxuXHRcdFx0cmVzb2x2ZSgnSXRlbSByZW1vdmVkIGZyb20gREInKVxuXHRcdH1cblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiB7cmVqZWN0KGNvbnNvbGUuZXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGF0dGVtcHRpbmcgdG8gcGVyZm9ybSBERUxFVEUgb3BlcmF0aW9uOiAke2UuZXJyb3J9YCkpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoY29uc29sZS5lcnJvcihgSXRlbSB0byBkZWxldGUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHNjaGVtYSBmb3IgdGhpcyBkYXRhYmFzZS5gKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgY2xlYW51cCgpIHtcbiAgICBcdHRoaXMuaW52ZW50b3J5ID0gYXdhaXQgdGhpcy5nZXRJbnZlbnRvcnkoKVxuXHRpZiAodGhpcy53b3JrZXJtZXNzYWdlID09PSAnZnVuY3Rpb24nKSBhd2FpdCB0aGlzLndvcmtlcm1lc3NhZ2UoKVxuICAgIH1cbn1cblxuXG5cblxuZXhwb3J0IGNsYXNzIERCV29ya2VyIGV4dGVuZHMgRGF0YWJhc2VBZGFwdGVyIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpXG5cdFx0XG5cdH1cdFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgQ29yZVNlcnZpY2UgZnJvbSAnLi9VdGlscy9jb3JlU2VydmljZS5qcydcbmltcG9ydCB7IHNwYXduTm90YXRlVGFiIH0gZnJvbSAnLi9VdGlscy9ldmVudEFjdGlvbnMuanMnXG5pbXBvcnQgRGV2VG9vbHMgZnJvbSAnQGRldi9kZXZ1dGlscy5qcydcblxuXG4vKlxuICogRGV2VG9vbCBDYWxsXG4qL1xuRGV2VG9vbHMoKVxuXG5cblxuLypcbiAqIENvbnN0YW50c1xuKi9cbmV4cG9ydCBjb25zdCBOT1RBVEVfREIgPSBcIm5vdGF0ZVwiXG5leHBvcnQgY29uc3QgRVJST1JfTE9HR0lOR19EQiA9IFwiZXJyb3JMb2dnaW5nXCJcbmV4cG9ydCBjb25zdCBVU0VSX0NPTkZJR1VSQVRJT05fREIgPSBcInVzZXJDb25maWd1cmF0aW9uXCJcblxuXG5cbmNvbnN0IENIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZID0gXCJDSFJPTUVfU1RPUkVfSElHSF9QUklPUklUWVwiXG5cblxuZXhwb3J0IGNvbnN0IEJhY2tncm91bmRTZXJ2aWNlID0gbmV3IENvcmVTZXJ2aWNlKClcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUlxuXHRGaXJlcyBvbiBDaHJvbWUgc3RhcnR1cC4gSXMgb25lIG9mIDIgY2hyb21lIGV2ZW50IGxpc3RlbmVyc1xuXHR0aGF0IGZpcmVzIGJvb3RzdHJhcEFwcGxpY2F0aW9uKCkuXG4qL1xuY2hyb21lLnJ1bnRpbWUub25TdGFydHVwLmFkZExpc3RlbmVyKGFzeW5jICgpPT4ge1xuXHRhd2FpdCBib290c3RyYXBBcHBsaWNhdGlvbigpXG5cblx0bGV0IGxhdW5jaEJlaGF2aW9yID0gQmFja2dyb3VuZFNlcnZpY2UuZW52LmltcG9ydGFudC5sYXVuY2hCZWhhdmlvclxuXG5cdGlmIChsYXVuY2hCZWhhdmlvciAmJiBsYXVuY2hCZWhhdmlvciA9PT0gJ29uTmV3VGFiJykge1xuXHRcdGF3YWl0IHNwYXduTm90YXRlVGFiKGxhdW5jaEJlaGF2aW9yKVxuXHR9XG59KVxuXG5cblxuLypcbkVWRU5UIExJU1RFTkVSXG5cdEZpcmVzIG9uIENocm9tZSBzdGFydHVwLiBJcyBvbmUgb2YgMiBjaHJvbWUgZXZlbnQgbGlzdGVuZXJzXG5cdHRoYXQgZmlyZXMgYm9vdHN0cmFwQXBwbGljYXRpb24oKS5cbiovXG5jaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihhc3luYyAoKT0+IHtcblx0YXdhaXQgYm9vdHN0cmFwQXBwbGljYXRpb24oKVxuXG5cdGxldCBsYXVuY2hCZWhhdmlvciA9IEJhY2tncm91bmRTZXJ2aWNlLmVudi5pbXBvcnRhbnQubGF1bmNoQmVoYXZpb3JcblxuXHRpZiAobGF1bmNoQmVoYXZpb3IgJiYgbGF1bmNoQmVoYXZpb3IgPT09ICdvbk5ld1RhYicpIHtcblx0XHRzcGF3bk5vdGF0ZVRhYihsYXVuY2hCZWhhdmlvcilcblx0fVxufSlcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUjpcblx0RmlyZXMgYW5kIHJ1bnMgdGhlIHNwYXduVGFiKCkgZnVuY3Rpb24gb24gbmV3IHRhYiBpZiB1c2VyIFxuXHRjb25maWd1cmF0aW9uIGhhcyAnb25OZXdUYWInIGVuYWJsZWQuXG4qL1xuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKGFzeW5jICgpPT4ge1xuXHRhd2FpdCBCYWNrZ3JvdW5kU2VydmljZS51cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKClcblxuXHRsZXQgbGF1bmNoQmVoYXZpb3IgPSBCYWNrZ3JvdW5kU2VydmljZS5lbnYuaW1wb3J0YW50LmxhdW5jaEJlaGF2aW9yXG5cblx0aWYgKHR5cGVvZiBsYXVuY2hCZWhhdmlvciA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0fVxuXG5cdGNvbnNvbGUubG9nKCdsYXVuY2hCZWhhdmlvcjogJywgbGF1bmNoQmVoYXZpb3IpXG5cdGlmIChsYXVuY2hCZWhhdmlvciA9PT0gJ29uTmV3VGFiJykgIHNwYXduTm90YXRlVGFiKGxhdW5jaEJlaGF2aW9yKVxufSlcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUjpcblx0RmlyZXMgYW5kIHJ1bnMgc3Bhd25UYWIoKSBmdW5jdGlvbiB3aGVuIHVzZXIgY2xpY2tzIE5vdGF0ZVxuXHRwb3B1cFxuKi9cbmNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGFzeW5jKCkgPT4ge1xuXHRhd2FpdCBCYWNrZ3JvdW5kU2VydmljZS51cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKClcblxuXHRsZXQgbGF1bmNoQmVoYXZpb3IgPSBCYWNrZ3JvdW5kU2VydmljZS5lbnYuaW1wb3J0YW50LmxhdW5jaEJlaGF2aW9yXG5cblx0aWYgKGxhdW5jaEJlaGF2aW9yID09PSAnb25DbGlja1BvcHVwJykgIHNwYXduTm90YXRlVGFiKGxhdW5jaEJlaGF2aW9yKVxufSlcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUjpcblx0RmlyZXMgd2hlbiBhbiBpbmNvbWluZyBkYXRhYmFzZSBjb25uZWN0aW9uIGlzIHJlY2VpdmVkIGFuZFx0XG5cdGRlbGVnYXRlcyBhbGwgZGF0YWJhc2Ugb3BlcmF0aW9ucyB0byB0aGUgZGF0YWJhc2VSZXF1ZXN0KClcblx0ZnVuY3Rpb24uXG4qL1xuY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKChwb3J0KSA9PiB7XG4gIGlmIChwb3J0Lm5hbWUgPT09ICdEQVRBQkFTRV9DT05ORUNUSU9OJykge1xuICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlKSA9PiB7XG5cdGF3YWl0IEJhY2tncm91bmRTZXJ2aWNlLmRhdGFiYXNlUmVxdWVzdChwb3J0LCBtZXNzYWdlKVxuICAgIH0pO1xuICB9XG59KTtcblxuXG5cblxuXG5cblxuXG4vKlxuRlVOQ1RJT046XG5cdEludGlhbGl6ZXMgYXBwbGljYXRpb24gYnkgZ3JhYmJpbmcgSURCIFN0b3JlcyArIHVwZGF0aW5nIG5lY2Vzc2FyeSBiYWNrZ3JvdW5kIHdvcmtlciBcblx0dmFyaWFibGVzLiBTaG91bGQgb25seSBmaXJlIEAgYnJvd3NlciBsYXVuY2ggLyBleHRlbnNpb24gaW5zdGFsbC5cbiovXG5jb25zdCBib290c3RyYXBBcHBsaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0YXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKFtcblx0XHRCYWNrZ3JvdW5kU2VydmljZS5pbml0aWFsaXplRGF0YWJhc2UoVVNFUl9DT05GSUdVUkFUSU9OX0RCKSxcblx0XHRCYWNrZ3JvdW5kU2VydmljZS5pbml0aWFsaXplRGF0YWJhc2UoRVJST1JfTE9HR0lOR19EQiksXG5cdFx0QmFja2dyb3VuZFNlcnZpY2UuaW5pdGlhbGl6ZURhdGFiYXNlKE5PVEFURV9EQilcblx0XSlcblx0XG5cblx0aWYgKFxuXHRcdCFCYWNrZ3JvdW5kU2VydmljZS5kYXRhYmFzZXMuZXJyb3Jsb2dnaW5nZGIgfHxcblx0XHRCYWNrZ3JvdW5kU2VydmljZS5kYXRhYmFzZXMuZXJyb3Jsb2dnaW5nZGI/LmludmVudG9yeSBpbnN0YW5jZW9mIFByb21pc2Vcblx0KSB7XG5cdFx0YXdhaXQgQmFja2dyb3VuZFNlcnZpY2UuaW5pdGlhbGl6ZURhdGFiYXNlKEVSUk9SX0xPR0dJTkdfREIpXG5cdH1cblxuXHRpZiAoXG5cdFx0QmFja2dyb3VuZFNlcnZpY2UuZGF0YWJhc2VzLnVzZXJjb25maWd1cmF0aW9uZGIgaW5zdGFuY2VvZiBQcm9taXNlIHx8XG5cdFx0IUJhY2tncm91bmRTZXJ2aWNlLmRhdGFiYXNlcy51c2VyY29uZmlndXJhdGlvbmRiIHx8XG5cdFx0IUJhY2tncm91bmRTZXJ2aWNlLmRhdGFiYXNlcz8uaW52ZW50b3J5IHx8IFxuXHRcdEJhY2tncm91bmRTZXJ2aWNlPy5pbnZlbnRvcnkgaW5zdGFuY2VvZiBQcm9taXNlXG5cdCkge1xuXHRcdGF3YWl0IEJhY2tncm91bmRTZXJ2aWNlLmluaXRpYWxpemVEYXRhYmFzZShVU0VSX0NPTkZJR1VSQVRJT05fREIpXG5cdH0gZWxzZSBhd2FpdCBCYWNrZ3JvdW5kU2VydmljZS51cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKClcblxufVxuXG5cblxuLypcbkZVTkNUSU9OOlxuXHRVc2VkIHRvIHF1aWNrbHkgZmV0Y2ggZW52IHZhcmlhYmxlcyB3aGljaCBpcyBuZWVkZWQgYXQgc3RhcnR1cC5cbiovXG5jb25zdCBmZXRjaEhpZ2hQcmlvcml0eVZhcmlhYmxlcyA9ICAoKSA9PiB7XG5cdGNocm9tZS5zdG9yYWdlLnN5bmMuZ2V0KFtDSFJPTUVfU1RPUkVfSElHSF9QUklPUklUWV0sIChFTlZfVkFSUyk9Pntcblx0XHRjb25zb2xlLmxvZygnRU5WX1ZBUlM6ICcsIEVOVl9WQVJTKVxuXHRcdHRyeSB7XG5cdFx0XHRsYXVuY2hCZWhhdmlvciA9IEVOVl9WQVJTW0NIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZXS5wYWdlQmVoYXZpb3Jcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdH1cblx0fSlcdFxufVxuXG5cblxuXG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImUiLCJ0IiwiciIsIk9iamVjdCIsInByb3RvdHlwZSIsIm4iLCJoYXNPd25Qcm9wZXJ0eSIsIm8iLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiRGF0YWJhc2VBZGFwdGVyIiwiTk9UQVRFX0RCIiwiRVJST1JfTE9HR0lOR19EQiIsIlVTRVJfQ09ORklHVVJBVElPTl9EQiIsIkNIUk9NRV9TVE9SRV9ISUdIX1BSSU9SSVRZIiwiQ29yZVNlcnZpY2UiLCJkYXRhYmFzZXMiLCJub3RhdGVkYiIsImVycm9ybG9nZ2luZ2RiIiwidXNlcmNvbmZpZ3VyYXRpb25kYiIsImVudiIsImltcG9ydGFudCIsImxhdW5jaEJlaGF2aW9yIiwiY29tbW9uIiwiX2luaXRpYWxpemVEYXRhYmFzZSIsIl9jYWxsZWUyIiwiX3RoaXMiLCJfY2FsbGVlMiQiLCJfY29udGV4dDIiLCJfcmVmIiwiX2NhbGxlZSIsImRhdGFiYXNlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInQwIiwiaW52ZW50b3J5IiwiX3gyIiwiX3gzIiwiaW5pdGlhbGl6ZURhdGFiYXNlIiwiX3giLCJfZGF0YWJhc2VSZXF1ZXN0IiwiX2NhbGxlZTUiLCJwb3J0IiwibWVzc2FnZSIsIl9tZXNzYWdlJGNvbnRlbnQyIiwiX21lc3NhZ2UkY29udGVudDMiLCJfdGhpczIiLCJfbWVzc2FnZSRjb250ZW50NCIsIl9tZXNzYWdlJGNvbnRlbnQ1IiwiX2RiIiwiX21lc3NhZ2UkY29udGVudCIsImRhdGEiLCJzdG9yZSIsImRiIiwiaW5zZXJ0T3BlcmF0aW9uIiwiZGVsZXRlT3BlcmF0aW9uIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1IiwiY29udGVudCIsInQxIiwicG9zdE1lc3NhZ2UiLCJfcmVmMiIsIl9jYWxsZWUzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiaW5zZXJ0RGF0YSIsInVwZGF0ZUJhY2tncm91bmRFbnZWYXJpYWJsZXMiLCJfcmVmMyIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiZGVsZXRlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0MiIsImdlbmVyYXRlRXJyb3JMb2ciLCJkYXRhYmFzZVJlcXVlc3QiLCJfeDQiLCJfeDUiLCJfdXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlcyIsIl9jYWxsZWU2IiwiX3RoaXMzIiwiX3RoaXMkZGF0YWJhc2VzIiwiX3RoaXMkZGF0YWJhc2VzMiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIlVTRVJfQ09ORklHVVJBVElPTiIsIk5vdGF0ZSIsInBhZ2UiLCJwYWdlT3BlbkJlaGF2aW9yIiwiY29uc29sZSIsImxvZyIsInNldFRpbWVvdXQiLCJjaHJvbWUiLCJzdG9yYWdlIiwic3luYyIsInNldCIsIl9nZW5lcmF0ZUVycm9yTG9nIiwiX2NhbGxlZTciLCJfdGhpcyRkYXRhYmFzZXMkZXJyb3IiLCJfdGhpcyRkYXRhYmFzZXMkZXJyb3IyIiwiY29udGV4dCIsIl9jaHJvbWUkcnVudGltZSRnZXRNYSIsImVycm9yTG9nIiwiX2FyZ3M3IiwiX2NhbGxlZTckIiwiX2NvbnRleHQ3IiwidGltZXN0YW1wIiwiRGF0ZSIsInRvSVNPU3RyaW5nIiwic3RhY2tUcmFjZSIsInN0YWNrIiwiX29iamVjdFNwcmVhZCIsInVybCIsInJ1bnRpbWUiLCJnZXRVUkwiLCJleHRlbnNpb25JZCIsImlkIiwibWFuaWZlc3RWZXJzaW9uIiwiZ2V0TWFuaWZlc3QiLCJtYW5pZmVzdF92ZXJzaW9uIiwiX3g2IiwiZGVmYXVsdCIsIk5PVEFURV9MQU5ESU5HX1BBR0UiLCJDSFJPTUVfTkVXVEFCIiwic3Bhd25Ob3RhdGVUYWIiLCJkaXJlY3RpdmUiLCJ0YWJzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwidGFiIiwicGVuZGluZ1VybCIsInVwZGF0ZSIsImluc3BlY3RJREJTdG9yZSIsImRhdGFiYXNlTmFtZSIsInJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib25lcnJvciIsImV2ZW50IiwiY29uY2F0Iiwib25zdWNjZXNzIiwicmVzdWx0Iiwic3RvcmVOYW1lcyIsIkFycmF5IiwiZnJvbSIsIm9iamVjdFN0b3JlTmFtZXMiLCJhbGxTdG9yZXNEYXRhIiwiY29tcGxldGVkU3RvcmVzIiwic3RvcmVOYW1lIiwidHJhbnNhY3Rpb24iLCJvYmplY3RTdG9yZSIsImdldEFsbFJlcXVlc3QiLCJnZXRBbGwiLCJMYXVuY2hEZXZUb29scyIsImdsb2JhbFRoaXMiLCJwaW5nIiwiQ29uZmlndXJhdGlvblRlbXBsYXRlIiwic2VhcmNoIiwicHJlZmVycmVkRW5naW5lIiwiZGVzY3JpcHRpb24iLCJvcHRpb25zIiwiZW5hYmxlZCIsInNlYXJjaE5vdGVzIiwiYmFja2dyb3VuZFdhbGxwYXBlciIsIm5vdGVNb2RhbCIsInByZWZlcnJlZENvbG9yIiwiV2ViQ29udGVudCIsInRvb2xzIiwiYmVoYXZpb3IiLCJuZXdOb3RlUG9wdXAiLCJtYXBwZXIiLCJub3RhdGUiLCJzdG9yZXMiLCJlcnJvckxvZ2dpbmciLCJ1c2VyQ29uZmlndXJhdGlvbiIsImNvbm5lY3Rpb24iLCJjb25uZWN0VG9EQiIsIl9jb25uZWN0VG9EQiIsImxlZ2VuZCIsIkRCQnJpZ2UiLCJ3b3JrZXJtZXNzYWdlIiwiZ2V0SW52ZW50b3J5Iiwib251cGdyYWRlbmVlZGVkIiwic3RvcmVLZXkiLCJjcmVhdGVPYmplY3RTdG9yZSIsImtleVBhdGgiLCJhdXRvSW5jcmVtZW50Iiwic29tZSIsInNldHVwVXNlckNvbmZpZ3VyYXRpb24iLCJfc2V0dXBVc2VyQ29uZmlndXJhdGlvbiIsImFkZCIsIl9nZXRJbnZlbnRvcnkiLCJhbGxTdG9yZXNXZXJlRmV0Y2hlZCIsImRhdGFzZXQiLCJmb3JtdWxhIiwicmVzdWx0cyIsImRiU3RvcmVOYW1lcyIsIm9ialN0b3JlIiwiY29tcGFyaXNvbiIsIml0ZW0iLCJfaW5zZXJ0RGF0YSIsIl9jYWxsZWU4IiwidGFyZ2V0X3N0b3JlIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwicHV0IiwiY2xlYW51cCIsIl94NyIsIl94OCIsIl9kZWxldGVEYXRhIiwiX2NhbGxlZTEwIiwiX3RoaXM0IiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJfY2FsbGVlOSIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsIl94OSIsIl94MTAiLCJfY2xlYW51cCIsIl9jYWxsZWUxMSIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDExIiwiREJXb3JrZXIiLCJfRGF0YWJhc2VBZGFwdGVyIiwiX2NhbGxTdXBlciIsIl9pbmhlcml0cyIsIkRldlRvb2xzIiwiQmFja2dyb3VuZFNlcnZpY2UiLCJvblN0YXJ0dXAiLCJhZGRMaXN0ZW5lciIsImJvb3RzdHJhcEFwcGxpY2F0aW9uIiwib25JbnN0YWxsZWQiLCJvbkNyZWF0ZWQiLCJhY3Rpb24iLCJvbkNsaWNrZWQiLCJvbkNvbm5lY3QiLCJvbk1lc3NhZ2UiLCJfcmVmNSIsIl9yZWY2IiwiX0JhY2tncm91bmRTZXJ2aWNlJGRhIiwiX0JhY2tncm91bmRTZXJ2aWNlJGRhMiIsImFsbFNldHRsZWQiLCJmZXRjaEhpZ2hQcmlvcml0eVZhcmlhYmxlcyIsImdldCIsIkVOVl9WQVJTIiwicGFnZUJlaGF2aW9yIl0sInNvdXJjZVJvb3QiOiIifQ==