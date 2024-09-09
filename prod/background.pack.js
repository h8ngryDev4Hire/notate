/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  } catch (error) {
    error;
    debugger;
  }
}

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
/* harmony export */   ERROR_LOGGING_DB: () => (/* binding */ ERROR_LOGGING_DB),
/* harmony export */   NOTATE_DB: () => (/* binding */ NOTATE_DB),
/* harmony export */   USER_CONFIGURATION_DB: () => (/* binding */ USER_CONFIGURATION_DB)
/* harmony export */ });
/* harmony import */ var _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @universal/Handlers/indexedDBhandler.js */ "./src/Universal/Handlers/indexedDBhandler.js");
/* harmony import */ var _dev_devutils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @dev/devutils.js */ "./src/DevUtils/devutils.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/*
 * DevTool Call
*/
(0,_dev_devutils_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/*
 * Constants
*/
var NOTATE_DB = "notate";
var ERROR_LOGGING_DB = "errorLogging";
var USER_CONFIGURATION_DB = "userConfiguration";
var NOTATE_LANDING_PAGE = './index.html';
var CHROME_NEWTAB = 'chrome://newtab/';

/*
DATABASE ENV VARIABLES
*/
var notatedb, errorloggingdb, userconfigurationdb;

/*
BACKGROUND ENV VARIABLES
*/
var launchBehavior;

/*
EVENT LISTENER
	Fires on Chrome startup. Is one of 2 chrome event listeners
	that fires bootstrapApplication().
*/
chrome.runtime.onStartup.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.next = 2;
        return bootstrapApplication();
      case 2:
        if (!(launchBehavior && launchBehavior === 'onNewTab')) {
          _context.next = 5;
          break;
        }
        _context.next = 5;
        return spawnNotateTab(launchBehavior);
      case 5:
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
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return bootstrapApplication();
      case 2:
        if (!(launchBehavior && launchBehavior === 'onNewTab')) {
          _context2.next = 5;
          break;
        }
        _context2.next = 5;
        return spawnNotateTab(launchBehavior);
      case 5:
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
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return updateBackgroundEnvVariables();
      case 2:
        if (!(launchBehavior === 'onNewTab')) {
          _context3.next = 5;
          break;
        }
        _context3.next = 5;
        return spawnNotateTab(launchBehavior);
      case 5:
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
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        _context4.next = 2;
        return updateBackgroundEnvVariables();
      case 2:
        if (!(launchBehavior === 'onClickPopup')) {
          _context4.next = 5;
          break;
        }
        _context4.next = 5;
        return spawnNotateTab(launchBehavior);
      case 5:
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
              return databaseRequest(port, message);
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
	Core function that initializes indexedDB connection for the 
	Notate User Database which contains user-made content, as well
	as user-set configuration settings that the application
	components utilize
*/
var initializeNotateDatabase = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          return _context7.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return new _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](NOTATE_DB);
                  case 2:
                    notatedb = _context6.sent;
                  case 3:
                    if (!(notatedb instanceof Promise)) {
                      _context6.next = 9;
                      break;
                    }
                    _context6.next = 6;
                    return notatedb.inventory;
                  case 6:
                    console.log('awaiting notatedb...');
                    _context6.next = 3;
                    break;
                  case 9:
                    resolve(notatedb);
                  case 10:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return function (_x2, _x3) {
              return _ref7.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function initializeNotateDatabase() {
    return _ref6.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Core function that initializes indexedDB connection for the 
	Error Logging Database which contains a history of all errors
	that the application runs into during its lifespan.
*/
var initializeErrorLoggingDatabase = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return new _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](ERROR_LOGGING_DB);
                  case 2:
                    errorloggingdb = _context8.sent;
                  case 3:
                    if (!(errorloggingdb instanceof Promise)) {
                      _context8.next = 9;
                      break;
                    }
                    _context8.next = 6;
                    return errorloggingdb.inventory;
                  case 6:
                    console.log('awaiting errorloggingdb...');
                    _context8.next = 3;
                    break;
                  case 9:
                    resolve(errorloggingdb);
                  case 10:
                  case "end":
                    return _context8.stop();
                }
              }, _callee8);
            }));
            return function (_x4, _x5) {
              return _ref9.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function initializeErrorLoggingDatabase() {
    return _ref8.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Core function that initializes indexedDB connection for the 
	Error Logging Database which contains a history of all errors
	that the application runs into during its lifespan.
*/
var initializeUserConfigurationDatabase = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          return _context11.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return new _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__["default"](USER_CONFIGURATION_DB);
                  case 2:
                    userconfigurationdb = _context10.sent;
                  case 3:
                    if (!(userconfigurationdb instanceof Promise)) {
                      _context10.next = 9;
                      break;
                    }
                    _context10.next = 6;
                    return userconfigurationdb.inventory;
                  case 6:
                    console.log('awaiting errorloggingdb...');
                    _context10.next = 3;
                    break;
                  case 9:
                    resolve(userconfigurationdb);
                  case 10:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }));
            return function (_x6, _x7) {
              return _ref11.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return function initializeUserConfigurationDatabase() {
    return _ref10.apply(this, arguments);
  };
}();

/*
FUNCTION:
	
 */
var generateErrorLog = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(error) {
    var _errorloggingdb, _errorloggingdb2;
    var context,
      _chrome$runtime$getMa,
      errorLog,
      _args12 = arguments;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          context = _args12.length > 1 && _args12[1] !== undefined ? _args12[1] : {};
          if (!(!errorloggingdb || ((_errorloggingdb = errorloggingdb) === null || _errorloggingdb === void 0 ? void 0 : _errorloggingdb.inventory) instanceof Promise || !((_errorloggingdb2 = errorloggingdb) !== null && _errorloggingdb2 !== void 0 && _errorloggingdb2.insertData))) {
            _context12.next = 4;
            break;
          }
          _context12.next = 4;
          return initializeErrorLoggingDatabase();
        case 4:
          _context12.prev = 4;
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
          _context12.next = 8;
          return errorloggingdb.insertData(errorLog, "ERRORS");
        case 8:
          _context12.next = 12;
          break;
        case 10:
          _context12.prev = 10;
          _context12.t0 = _context12["catch"](4);
        case 12:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[4, 10]]);
  }));
  return function generateErrorLog(_x8) {
    return _ref12.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Injects the Notate starting page when the New Tab button is	
	clicked
*/
var spawnNotateTab = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(directive) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
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
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function spawnNotateTab(_x9) {
    return _ref13.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Updates Background Worker variables, which is typically only required after a CRUD Op	
	in USER_CONFIGURATION IDB Store
*/
var updateBackgroundEnvVariables = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          launchBehavior = userconfigurationdb.inventory.USER_CONFIGURATION[0].Notate.page.pageOpenBehavior.value;
          _context14.next = 8;
          break;
        case 4:
          _context14.prev = 4;
          _context14.t0 = _context14["catch"](0);
          _context14.next = 8;
          return generateErrorLog(_context14.t0, {
            "function": "updateBackgroundEnvVariables"
          });
        case 8:
          _context14.prev = 8;
          if (typeof launchBehavior === 'undefined') {
            console.log('unable to set up background env variables. retrying in 500ms...');
            setTimeout(updateBackgroundEnvVariables, 500);
          }
          if (launchBehavior) console.log('env variables initialized.');
          return _context14.finish(8);
        case 12:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 4, 8, 12]]);
  }));
  return function updateBackgroundEnvVariables() {
    return _ref14.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Intializes application by grabbing IDB Stores + updating necessary background worker 
	variables. Should only fire @ browser launch / extension install.
*/
var bootstrapApplication = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
    var _errorloggingdb3;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.next = 2;
          return initializeNotateDatabase();
        case 2:
          _context15.next = 4;
          return initializeErrorLoggingDatabase();
        case 4:
          _context15.next = 6;
          return initializeUserConfigurationDatabase();
        case 6:
          if (!(!errorloggingdb || ((_errorloggingdb3 = errorloggingdb) === null || _errorloggingdb3 === void 0 ? void 0 : _errorloggingdb3.inventory) instanceof Promise)) {
            _context15.next = 9;
            break;
          }
          _context15.next = 9;
          return initializeErrorLoggingDatabase();
        case 9:
          if (!userconfigurationdb) {
            _context15.next = 14;
            break;
          }
          _context15.next = 12;
          return updateBackgroundEnvVariables();
        case 12:
          _context15.next = 16;
          break;
        case 14:
          _context15.next = 16;
          return initializeUserConfigurationDatabase();
        case 16:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function bootstrapApplication() {
    return _ref15.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Handles all inbound IDB CRUD Op Requests coming from both Notate.jsx page + Content
	Script. Updates necessary background components post DB CRUD Op dependent on what IDB 
	store is being operated on as well as what CRUD Op is being performed.
*/
var databaseRequest = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(port, message) {
    var _message$content2, _message$content3, _message$content4, _message$content5, _db;
    var _message$content, data, store, db, initialize, type, target, insertOperation, deleteOperation;
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          if (!(_typeof(port) === 'object' && message !== null && message !== void 0 && message.type && message !== null && message !== void 0 && message.content && message !== null && message !== void 0 && (_message$content = message.content) !== null && _message$content !== void 0 && _message$content.database)) {
            _context18.next = 42;
            break;
          }
          type = message.type, target = message.content.database;
          _context18.t0 = target;
          _context18.next = _context18.t0 === NOTATE_DB ? 6 : _context18.t0 === ERROR_LOGGING_DB ? 9 : _context18.t0 === USER_CONFIGURATION_DB ? 12 : 15;
          break;
        case 6:
          db = notatedb;
          initialize = initializeNotateDatabase;
          return _context18.abrupt("break", 15);
        case 9:
          db = errorloggingdb;
          initialize = initializeErrorLoggingDatabase;
          return _context18.abrupt("break", 15);
        case 12:
          db = userconfigurationdb;
          initialize = initializeUserConfigurationDatabase;
          return _context18.abrupt("break", 15);
        case 15:
          if (typeof initialize === 'undefined') debugger;
          _context18.t1 = type;
          _context18.next = _context18.t1 === 'GET_DATABASE' ? 19 : _context18.t1 === 'POST_DATABASE' ? 21 : _context18.t1 === 'DELETE_DATABASE' ? 27 : _context18.t1 === 'RELOAD_DATABASE' ? 33 : 40;
          break;
        case 19:
          port.postMessage({
            type: 'DATABASE',
            content: {
              data: db,
              database: target
            }
          });
          return _context18.abrupt("break", 40);
        case 21:
          data = message === null || message === void 0 || (_message$content2 = message.content) === null || _message$content2 === void 0 ? void 0 : _message$content2.data;
          store = message === null || message === void 0 || (_message$content3 = message.content) === null || _message$content3 === void 0 ? void 0 : _message$content3.store;
          insertOperation = /*#__PURE__*/function () {
            var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    if (!(data && store && typeof db.insertData === 'function')) {
                      _context16.next = 11;
                      break;
                    }
                    _context16.next = 3;
                    return db.insertData(data, store);
                  case 3:
                    _context16.next = 5;
                    return initialize();
                  case 5:
                    if (!(store === 'USER_CONFIGURATION')) {
                      _context16.next = 8;
                      break;
                    }
                    _context16.next = 8;
                    return updateBackgroundEnvVariables();
                  case 8:
                    port.postMessage({
                      type: 'DATABASE',
                      content: {
                        data: db,
                        database: target
                      }
                    });
                    _context16.next = 15;
                    break;
                  case 11:
                    _context16.next = 13;
                    return initialize();
                  case 13:
                    _context16.next = 15;
                    return insertOperation();
                  case 15:
                  case "end":
                    return _context16.stop();
                }
              }, _callee16);
            }));
            return function insertOperation() {
              return _ref17.apply(this, arguments);
            };
          }();
          _context18.next = 26;
          return insertOperation();
        case 26:
          return _context18.abrupt("break", 40);
        case 27:
          data = message === null || message === void 0 || (_message$content4 = message.content) === null || _message$content4 === void 0 ? void 0 : _message$content4.data;
          store = message === null || message === void 0 || (_message$content5 = message.content) === null || _message$content5 === void 0 ? void 0 : _message$content5.store;
          deleteOperation = /*#__PURE__*/function () {
            var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    if (!(data && store && typeof db.deleteData === 'function')) {
                      _context17.next = 8;
                      break;
                    }
                    _context17.next = 3;
                    return db.deleteData(data, store);
                  case 3:
                    _context17.next = 5;
                    return initialize();
                  case 5:
                    port.postMessage({
                      type: 'DATABASE',
                      content: {
                        data: db,
                        database: target
                      }
                    });
                    _context17.next = 12;
                    break;
                  case 8:
                    _context17.next = 10;
                    return initialize();
                  case 10:
                    _context17.next = 12;
                    return deleteOperation();
                  case 12:
                  case "end":
                    return _context17.stop();
                }
              }, _callee17);
            }));
            return function deleteOperation() {
              return _ref18.apply(this, arguments);
            };
          }();
          _context18.next = 32;
          return deleteOperation();
        case 32:
          return _context18.abrupt("break", 40);
        case 33:
          if (!(!db || ((_db = db) === null || _db === void 0 ? void 0 : _db.inventory) instanceof Promise)) {
            _context18.next = 38;
            break;
          }
          _context18.next = 36;
          return initialize();
        case 36:
          _context18.next = 39;
          break;
        case 38:
          port.postMessage({
            type: 'DATABASE',
            content: {
              data: db,
              database: target
            }
          });
        case 39:
          return _context18.abrupt("break", 40);
        case 40:
          _context18.next = 43;
          break;
        case 42:
          throw new Error("message " + JSON.stringify(message) + "\n" + " either has an invalid schema or is missing one or more required properties." + "\nmessages are expected to have '.type', '.content', and '.content.database' fields.");
        case 43:
          _context18.next = 49;
          break;
        case 45:
          _context18.prev = 45;
          _context18.t2 = _context18["catch"](0);
          _context18.next = 49;
          return generateErrorLog(_context18.t2, {
            "function": 'databaseRequest'
          });
        case 49:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 45]]);
  }));
  return function databaseRequest(_x10, _x11) {
    return _ref16.apply(this, arguments);
  };
}();

/*
DEPRECATED FUNCTION:
	Broadcasts the DBAdapter instance to the active tab that hosts 
	an extension component (AKA content script/other extension pages)
*/
var broadcastDBConnection = /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(notatedb) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, function (tabs) {
            var tab = tabs[0].id;
            chrome.tabs.sendMessage(tab, {
              type: 'DATABASE_CONNECTION',
              content: notatedb
            });
          });
        case 1:
        case "end":
          return _context19.stop();
      }
    }, _callee19);
  }));
  return function broadcastDBConnection(_x12) {
    return _ref19.apply(this, arguments);
  };
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TCxNQUFBLENBQUFuTyxLQUFBLE9BQUFELFNBQUE7RUFBQTtBQUFBLEdBVTFCLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9EZXZVdGlscy9TY3JpcHRzL2luc3BlY3RJbmRleGVkREJTdG9yZS5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9EZXZVdGlscy9kZXZ1dGlscy5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9Vbml2ZXJzYWwvSGFuZGxlcnMvVXNlckNvbmZpZ3VyYXRpb24uanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvVW5pdmVyc2FsL0hhbmRsZXJzL2luZGV4ZWREQmhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9CYWNrZ3JvdW5kL2JhY2tncm91bmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICBmdW5jdGlvbiBpbnNwZWN0SURCU3RvcmUoZGF0YWJhc2VOYW1lKSB7XG5cdGlmICghZGF0YWJhc2VOYW1lKSB0aHJvdyBuZXcgRXJyb3IoYGluc3BlY3RJREJTdG9yZSgpICdkYXRhYmFzZU5hbWUnIHBhcmFtIGV4cGVjdGVkIGJ1dCBub25lIHN1cHBsaWVkLmApXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKGRhdGFiYXNlTmFtZSk7XG5cbiAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gZXZlbnQgPT4gcmVqZWN0KGBFcnJvciBvcGVuaW5nIGRhdGFiYXNlOiAke2V2ZW50LnRhcmdldC5lcnJvcn1gKTtcblxuICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRiID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlTmFtZXMgPSBBcnJheS5mcm9tKGRiLm9iamVjdFN0b3JlTmFtZXMpO1xuICAgICAgICAgICAgY29uc3QgYWxsU3RvcmVzRGF0YSA9IHt9O1xuXG4gICAgICAgICAgICBsZXQgY29tcGxldGVkU3RvcmVzID0gMDtcblxuICAgICAgICAgICAgc3RvcmVOYW1lcy5mb3JFYWNoKHN0b3JlTmFtZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihzdG9yZU5hbWUsICdyZWFkb25seScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmVOYW1lKTtcbiAgICAgICAgICAgICAgICBjb25zdCBnZXRBbGxSZXF1ZXN0ID0gc3RvcmUuZ2V0QWxsKCk7XG5cbiAgICAgICAgICAgICAgICBnZXRBbGxSZXF1ZXN0Lm9uZXJyb3IgPSBldmVudCA9PiByZWplY3QoYEVycm9yIGZldGNoaW5nIGRhdGEgZnJvbSAke3N0b3JlTmFtZX06ICR7ZXZlbnQudGFyZ2V0LmVycm9yfWApO1xuXG4gICAgICAgICAgICAgICAgZ2V0QWxsUmVxdWVzdC5vbnN1Y2Nlc3MgPSBldmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFsbFN0b3Jlc0RhdGFbc3RvcmVOYW1lXSA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlZFN0b3JlcysrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wbGV0ZWRTdG9yZXMgPT09IHN0b3JlTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgQ29udGVudCBvZiBhbGwgc3RvcmVzIGluIFwiJHtkYXRhYmFzZU5hbWV9XCI6YCwgYWxsU3RvcmVzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGFsbFN0b3Jlc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIHRyYW5zYWN0aW9uLm9uZXJyb3IgPSBldmVudCA9PiByZWplY3QoYFRyYW5zYWN0aW9uIGVycm9yIGZvciAke3N0b3JlTmFtZX06ICR7ZXZlbnQudGFyZ2V0LmVycm9yfWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbi8vIFVzYWdlIGV4YW1wbGU6XG4vLyBpbnNwZWN0SURCU3RvcmUoJ05PVEFURV9EQicpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuLy8gaW5zcGVjdElEQlN0b3JlKCdFUlJPUl9MT0dHSU5HX0RCJykudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7Ly8gVXNhZ2UgZXhhbXBsZTpcbi8vIGluc3BlY3RJREJTdG9yZSgnbm90YXRlJywgJ1VTRVJfQ09ORklHVVJBVElPTicpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpOy8vIFVzYWdlIGV4YW1wbGU6XG4vLyB2aWV3SW5kZXhlZERCU3RvcmUoJ1VTRVJfQ09ORklHVVJBVElPTicpLnRoZW4oZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xuIiwiaW1wb3J0IHsgaW5zcGVjdElEQlN0b3JlIH0gZnJvbSAnLi9TY3JpcHRzL2luc3BlY3RJbmRleGVkREJTdG9yZS5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF1bmNoRGV2VG9vbHMoKSB7XG5cdHRyeSB7XG5cdFx0Z2xvYmFsVGhpcy5pbnNwZWN0SURCU3RvcmUgPSBpbnNwZWN0SURCU3RvcmVcblx0fSBjYXRjaChlcnJvcikge1xuXHRcdGVycm9yXG5cdFx0ZGVidWdnZXJcblx0fVxufVxuXG4iLCJleHBvcnQgY29uc3QgQ29uZmlndXJhdGlvblRlbXBsYXRlID0ge1xuXHROb3RhdGU6IHtcblx0XHRzZWFyY2g6IHtcblx0XHRcdHByZWZlcnJlZEVuZ2luZToge1xuXHRcdFx0XHR2YWx1ZTogXCJwZXJwbGV4aXR5YWlcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiU2V0cyB5b3VyIHByZWZlcnJlZCBTZWFyY2ggRW5naW5lLlwiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJnb29nbGVcIiwgXCJiaW5nXCIsIFwiZHVja2R1Y2tnb1wiLCBcInlhaG9vXCIsIFwiYmFpZHVcIiwgXCJ5YW5kZXhcIiwgXCJlY29zaWFcIiwgXCJwZXJwbGV4aXR5YWlcIl0sXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRzZWFyY2hOb3Rlczoge1xuXHRcdFx0XHR2YWx1ZTogXCJ0cnVlXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgd2hldGhlciBvciBub3Qgbm90ZXMgc2hvdWxkIGJlIHNlYXJjaGVkIGZvciB3aGVuIHNlYXJjaGluZyBpbiB0aGUgc2VhcmNoIGJhci5cIixcblx0XHRcdFx0b3B0aW9uczogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRwYWdlOiB7XG5cdFx0XHRwYWdlT3BlbkJlaGF2aW9yOiB7XG5cdFx0XHRcdHZhbHVlOiBcIm9uTmV3VGFiXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgZGVmYXVsdCBwYWdlIHRvIG9wZW4gdXAgd2hlbiBjbGlja2luZyB0aGUgTmV3IFRhYiBCdXR0b24uXCIsXG5cdFx0XHRcdG9wdGlvbnM6IFtcIm9uTmV3VGFiXCIsIFwib25DbGlja1BvcHVwXCIsIFwiZmFsc2VcIl0sXG5cdFx0XHRcdGVuYWJsZWQ6IHRydWVcblx0XHRcdH0sXG5cdFx0XHRiYWNrZ3JvdW5kV2FsbHBhcGVyOiB7XG5cdFx0XHRcdHZhbHVlOiBcImRhcmtXb29kXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOlwiU2V0cyB3YWxscGFwZXIgZm9yIE5vdGF0ZS5cIixcblx0XHRcdFx0b3B0aW9uczogW1wiZGFya1dvb2RcIiwgXCJjb3JrQm9hcmRcIiwgXCJtYXJibGVDaGVzc0JvYXJkXCIsIFwibm90ZVBhcGVyXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRub3RlTW9kYWw6IHtcblx0XHRcdHByZWZlcnJlZENvbG9yOiB7XG5cdFx0XHRcdHZhbHVlOiBcInllbGxvd1wiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJTZXRzIHByZWZlcnJlZCBjb2xvciB3aGVuIGNyZWF0aW5nIG5ldyBub3Rlc1wiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJyZWRcIiwgXCJ5ZWxsb3dcIiwgXCJibHVlXCIsIFwiZ3JlZW5cIiwgXCJvcmFuZ2VcIiwgXCJwaW5rXCIsIFwicHVycGxlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRXZWJDb250ZW50OiB7XG5cdFx0dG9vbHM6IHtcblx0XHRcblx0XHR9LFxuXHRcdGJlaGF2aW9yOiB7XG5cdFx0XHRuZXdOb3RlUG9wdXA6IHtcblx0XHRcdFx0dmFsdWU6IFwidHJ1ZVwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJTZXRzIHdoZXRoZXIgdGhlIE5ldyBOb3RlIEJ1dHRvbiBzaG93cyB3aGVuIGhvdmVyaW5nIHRoZSBjdXJzb3IgaW4gdGhlIGNvcm5lciBvZiB0aGUgcGFnZS5cIixcblx0XHRcdFx0b3B0aW9uczogW1widHJ1ZVwiLCBcImZhbHNlXCJdLFxuXHRcdFx0XHRlbmFibGVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgeyBDb25maWd1cmF0aW9uVGVtcGxhdGUgfSBmcm9tICcuL1VzZXJDb25maWd1cmF0aW9uLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZUFkYXB0ZXIge1xuICAgY29uc3RydWN0b3IoZGF0YWJhc2VOYW1lKSB7XG4gICAgdGhpcy5tYXBwZXIgPSB7XG4gICAgICAgIGRiOiB7XG5cdFx0bm90YXRlOiB7XG5cdFx0XHRuYW1lOidOT1RBVEVfREInLFxuXHRcdFx0c3RvcmVzOiAgWydOT1RFUycsICdOT1RFQk9PS1MnXSxcblx0XHR9LFxuXHRcdGVycm9yTG9nZ2luZzoge1xuXHRcdFx0bmFtZTogJ0VSUk9SX0xPR0dJTkdfREInLFxuXHRcdFx0c3RvcmVzOiBbJ0VSUk9SUyddXG5cdFx0fSxcblx0XHR1c2VyQ29uZmlndXJhdGlvbjoge1xuXHRcdFx0bmFtZTogJ1VTRVJfQ09ORklHVVJBVElPTl9EQicsXG5cdFx0XHRzdG9yZXM6IFsnVVNFUl9DT05GSUdVUkFUSU9OJ11cblx0XHR9XG5cdH1cbiAgICB9XG4gICAgdGhpcy5jb25uZWN0aW9uID0gIHRoaXMuY29ubmVjdFRvREIoZGF0YWJhc2VOYW1lKTtcbiAgICB0aGlzLmludmVudG9yeSA9ICBudWxsO1xuICAgIHRoaXMucmVxdWVzdCA9IG51bGw7XG4gIH1cbiAgICBcbiAgYXN5bmMgY29ubmVjdFRvREIoZGF0YWJhc2VOYW1lKSB7XG5cdCAgXHQgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdCAgIFxuXHRcdCAgIGNvbnN0IGxlZ2VuZCA9IHRoaXMubWFwcGVyLmRiW2RhdGFiYXNlTmFtZV1cblxuICAgXHRcdCAgIGNvbnN0IERCQnJpZ2UgPSBpbmRleGVkREIub3BlbihsZWdlbmQubmFtZSwgMSk7XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9uc3VjY2VzcyA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ICAgICBpZiAodGhpcy53b3JrZXJtZXNzYWdlID09PSAnZnVuY3Rpb24nKSBhd2FpdCB0aGlzLndvcmtlcm1lc3NhZ2UoKVxuICAgXHRcdCAgICAgdGhpcy5jb25uZWN0aW9uID0gZS50YXJnZXQucmVzdWx0O1xuXG5cdFx0ICAgICBjb25zb2xlLmxvZyhgJHtkYXRhYmFzZU5hbWV9IGNvbm5lY3RlZC4gYXdhaXRpbmcgaW52ZW50b3J5Li4uYClcblx0XHQgICAgIHRoaXMuaW52ZW50b3J5ID0gYXdhaXQgdGhpcy5nZXRJbnZlbnRvcnkoKVxuICAgXHRcdCAgICAgcmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24pO1xuICAgXHRcdCAgIH07XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGluaXRpbmcgREI6ICcgKyBlLnRhcmdldC5lcnJvcikpO1xuXG4gICBcdFx0ICAgREJCcmlnZS5vbnVwZ3JhZGVuZWVkZWQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdFx0ICAgY29uc29sZS5sb2coYFVwZ3JhZGluZyBEQiAke2RhdGFiYXNlTmFtZX0uLi5gKVxuICAgXHRcdCBcbiAgIFx0XHQgICAgIHRoaXMuY29ubmVjdGlvbiA9IGUudGFyZ2V0LnJlc3VsdDtcblx0XHQgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZS50YXJnZXQudHJhbnNhY3Rpb25cblxuICAgXHRcdCAgICAgbGVnZW5kLnN0b3Jlcy5mb3JFYWNoKChzdG9yZUtleSk9PntcbiAgIFx0XHQgICAgICAgICB0aGlzLmNvbm5lY3Rpb24uY3JlYXRlT2JqZWN0U3RvcmUoc3RvcmVLZXksIHsga2V5UGF0aDogJ2lkJywgYXV0b0luY3JlbWVudDogdHJ1ZSB9KVxuICAgXHRcdCAgICAgfSlcbiAgIFx0XG5cdFx0ICAgICBpZiAobGVnZW5kLnN0b3Jlcy5zb21lKCBzdG9yZSA9PiBzdG9yZSA9PT0gXCJVU0VSX0NPTkZJR1VSQVRJT05cIiApKSB7XG5cdFx0XHRhd2FpdCB0aGlzLnNldHVwVXNlckNvbmZpZ3VyYXRpb24odHJhbnNhY3Rpb24pXG5cdFx0ICAgICB9IFxuXHRcdFx0ICAgXG5cblx0XHQgICAgIGNvbnNvbGUubG9nKCdEQiBpbnN0YWxsIHN1Y2Nlc3NmdWwnKVxuXG5cdFx0ICAgICAvL1J1bnMgY2FsbGJhY2sgaWYgZGVmaW5lZFxuXHRcdCAgICAgaWYgKHRoaXMud29ya2VybWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YXdhaXQgdGhpcy53b3JrZXJtZXNzYWdlKClcblx0XHQgICAgIH1cblxuXHRcdCAgICAgdGhpcy5pbnZlbnRvcnkgPSBhd2FpdCB0aGlzLmdldEludmVudG9yeSgpXG4gICBcdFx0ICAgICByZXNvbHZlKHRoaXMuY29ubmVjdGlvbik7XG4gICBcdFx0ICAgfTtcbiAgIFx0XHQgfSk7XG4gIH1cblxuICBhc3luYyBzZXR1cFVzZXJDb25maWd1cmF0aW9uKHRyYW5zYWN0aW9uKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoJ1VTRVJfQ09ORklHVVJBVElPTicpXG5cdFx0XHRzdG9yZS5hZGQoQ29uZmlndXJhdGlvblRlbXBsYXRlKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSlcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2NvbmZpZyB1cGxvYWQgZmFpbGVkJylcblx0XHR9XG5cdH0pXG4gIH1cblxuXG4gICAgLy8gTmVlZHMgdG8gYmUgd29ya2VkIG9uXG4gICAgYXN5bmMgZ2V0SW52ZW50b3J5KCkge1xuXG4gICAgICAgIGF3YWl0IHRoaXMuY29ubmVjdGlvbjtcbiAgICAgICAgY29uc3QgZGIgPSB0aGlzLmNvbm5lY3Rpb25cbiAgICAgICAgY29uc3QgaW52ZW50b3J5ID0ge31cblxuXG5cdGNvbnN0IGFsbFN0b3Jlc1dlcmVGZXRjaGVkID0gKGRhdGFzZXQpID0+IHtcblx0XHRjb25zdCBmb3JtdWxhID0gIChlKSA9PiBlID09PSBmYWxzZVxuXHRcdGNvbnN0IHJlc3VsdHMgPSBkYXRhc2V0LnNvbWUoZm9ybXVsYSlcblx0XHRyZXR1cm4gIXJlc3VsdHNcblx0fVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCBhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYlN0b3JlTmFtZXMgPSBkYi5vYmplY3RTdG9yZU5hbWVzXG4gICAgICAgICAgICBjb25zdCBzdG9yZXMgPSB7fVxuXG5cdCAgICBPYmplY3QudmFsdWVzKGRiU3RvcmVOYW1lcykuZm9yRWFjaCgobmFtZSk9Pnsgc3RvcmVzW25hbWVdID0gZmFsc2UgfSlcblxuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhzdG9yZXMpLmZvckVhY2goKHN0b3JlKT0+e1xuICAgICAgICAgICAgICAgIGludmVudG9yeVtzdG9yZV0gPSBbXVxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBkYi50cmFuc2FjdGlvbihzdG9yZSwgJ3JlYWRvbmx5JylcbiAgICAgICAgICAgICAgICBjb25zdCBvYmpTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKHN0b3JlKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IG9ialN0b3JlLmdldEFsbCgpXG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uc3VjY2VzcyA9IChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBlLnRhcmdldC5yZXN1bHRcblx0XHQgICAgXG5cdFx0ICAgIGlmICh0eXBlb2YgcmVzdWx0cyA9PT0gJ29iamVjdCcgJiYgcmVzdWx0cy5sZW5ndGggPT09IDApIHtcblx0XHRcdHN0b3Jlc1tzdG9yZV0gPSB0cnVlXG5cblx0XHRcdGNvbnN0IGNvbXBhcmlzb24gPSBhbGxTdG9yZXNXZXJlRmV0Y2hlZChPYmplY3QudmFsdWVzKHN0b3JlcykpXG5cblx0XHRcdCAgICBpZiAoY29tcGFyaXNvbikge1xuXHRcdFx0ICAgIFx0dGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnlcblx0XHRcdFx0cmVzb2x2ZSh0aGlzLmludmVudG9yeSlcblx0XHRcdCAgICB9XG5cdFx0ICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudG9yeVtzdG9yZV0ucHVzaChpdGVtKVxuXHRcdFx0c3RvcmVzW3N0b3JlXSA9IHRydWVcblxuXHRcdFx0Y29uc3QgY29tcGFyaXNvbiA9IGFsbFN0b3Jlc1dlcmVGZXRjaGVkKE9iamVjdC52YWx1ZXMoc3RvcmVzKSlcdFx0XHRcblxuXHRcdFx0aWYgKGNvbXBhcmlzb24pIHtcblx0XHRcdFx0dGhpcy5pbnZlbnRvcnkgPSBpbnZlbnRvcnlcblx0XHRcdFx0cmVzb2x2ZSh0aGlzLmludmVudG9yeSlcblx0XHRcdH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGUpID0+IHtyZWplY3QoY29uc29sZS5lcnJvcihgRXJyb3IgcHJvY2Vzc2luZyByZXF1ZXN0OiAke2UuZXJyb3J9YCkpfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgaW5zZXJ0RGF0YShkYXRhLCB0YXJnZXRfc3RvcmUpIHsgICAgICAgIFxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuY29ubmVjdGlvblxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFt0YXJnZXRfc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGFyZ2V0X3N0b3JlKVxuXG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gc3RvcmUucHV0KGRhdGEpXG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCk9PiB7XG5cdCAgICBcdGF3YWl0IHRoaXMuY2xlYW51cCgpXG5cdFx0cmVzb2x2ZSgnSXRlbSBhZGRlZCB0byBEQicpXG5cdCAgICB9XG5cbiAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiB7cmVqZWN0KGNvbnNvbGUuZXJyb3IoYEVycm9yIGFkZGluZyBkYXRhOiAke2UuZXJyb3J9YCkpfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBcblxuXG4gICAgYXN5bmMgZGVsZXRlRGF0YShkYXRhLCB0YXJnZXRfc3RvcmUpIHsgICAgICAgIFxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IHRoaXMuY29ubmVjdGlvblxuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKFt0YXJnZXRfc3RvcmVdLCAncmVhZHdyaXRlJylcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUodGFyZ2V0X3N0b3JlKVxuXG4gICAgICAgICAgICBpZiAoZGF0YT8uaWQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0YS5pZFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5kZWxldGUoaXRlbSlcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gYXN5bmMgKCk9PiB7XG5cdFx0XHRhd2FpdCB0aGlzLmNsZWFudXAoKVxuXHRcdFx0cmVzb2x2ZSgnSXRlbSByZW1vdmVkIGZyb20gREInKVxuXHRcdH1cblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25lcnJvciA9IChlKSA9PiB7cmVqZWN0KGNvbnNvbGUuZXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIGF0dGVtcHRpbmcgdG8gcGVyZm9ybSBERUxFVEUgb3BlcmF0aW9uOiAke2UuZXJyb3J9YCkpfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZWplY3QoY29uc29sZS5lcnJvcihgSXRlbSB0byBkZWxldGUgZG9lcyBub3QgaGF2ZSBhIHZhbGlkIHNjaGVtYSBmb3IgdGhpcyBkYXRhYmFzZS5gKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgYXN5bmMgY2xlYW51cCgpIHtcbiAgICBcdHRoaXMuaW52ZW50b3J5ID0gYXdhaXQgdGhpcy5nZXRJbnZlbnRvcnkoKVxuXHRpZiAodGhpcy53b3JrZXJtZXNzYWdlID09PSAnZnVuY3Rpb24nKSBhd2FpdCB0aGlzLndvcmtlcm1lc3NhZ2UoKVxuICAgIH1cbn1cblxuXG5cblxuZXhwb3J0IGNsYXNzIERCV29ya2VyIGV4dGVuZHMgRGF0YWJhc2VBZGFwdGVyIHtcblx0Y29uc3RydWN0b3IoKXtcblx0XHRzdXBlcigpXG5cdFx0XG5cdH1cdFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRGF0YWJhc2VBZGFwdGVyIGZyb20gJ0B1bml2ZXJzYWwvSGFuZGxlcnMvaW5kZXhlZERCaGFuZGxlci5qcydcbmltcG9ydCBEZXZUb29scyBmcm9tICdAZGV2L2RldnV0aWxzLmpzJ1xuXG5cbi8qXG4gKiBEZXZUb29sIENhbGxcbiovXG5EZXZUb29scygpXG5cblxuXG4vKlxuICogQ29uc3RhbnRzXG4qL1xuZXhwb3J0IGNvbnN0IE5PVEFURV9EQiA9IFwibm90YXRlXCJcbmV4cG9ydCBjb25zdCBFUlJPUl9MT0dHSU5HX0RCID0gXCJlcnJvckxvZ2dpbmdcIlxuZXhwb3J0IGNvbnN0IFVTRVJfQ09ORklHVVJBVElPTl9EQiA9IFwidXNlckNvbmZpZ3VyYXRpb25cIlxuXG5jb25zdCBOT1RBVEVfTEFORElOR19QQUdFID0gJy4vaW5kZXguaHRtbCc7XG5jb25zdCBDSFJPTUVfTkVXVEFCID0gJ2Nocm9tZTovL25ld3RhYi8nXG5cblxuXG5cbi8qXG5EQVRBQkFTRSBFTlYgVkFSSUFCTEVTXG4qL1xubGV0IG5vdGF0ZWRiLCBlcnJvcmxvZ2dpbmdkYiwgdXNlcmNvbmZpZ3VyYXRpb25kYlxuXG5cbi8qXG5CQUNLR1JPVU5EIEVOViBWQVJJQUJMRVNcbiovXG5sZXQgbGF1bmNoQmVoYXZpb3I7XG5cblxuXG5cblxuLypcbkVWRU5UIExJU1RFTkVSXG5cdEZpcmVzIG9uIENocm9tZSBzdGFydHVwLiBJcyBvbmUgb2YgMiBjaHJvbWUgZXZlbnQgbGlzdGVuZXJzXG5cdHRoYXQgZmlyZXMgYm9vdHN0cmFwQXBwbGljYXRpb24oKS5cbiovXG5jaHJvbWUucnVudGltZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIoYXN5bmMgKCk9PiB7XG5cdGF3YWl0IGJvb3RzdHJhcEFwcGxpY2F0aW9uKClcblxuXHRpZiAobGF1bmNoQmVoYXZpb3IgJiYgbGF1bmNoQmVoYXZpb3IgPT09ICdvbk5ld1RhYicpIHtcblx0XHRhd2FpdCBzcGF3bk5vdGF0ZVRhYihsYXVuY2hCZWhhdmlvcilcblx0fVxufSlcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUlxuXHRGaXJlcyBvbiBDaHJvbWUgc3RhcnR1cC4gSXMgb25lIG9mIDIgY2hyb21lIGV2ZW50IGxpc3RlbmVyc1xuXHR0aGF0IGZpcmVzIGJvb3RzdHJhcEFwcGxpY2F0aW9uKCkuXG4qL1xuY2hyb21lLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoYXN5bmMgKCk9PiB7XG5cdGF3YWl0IGJvb3RzdHJhcEFwcGxpY2F0aW9uKClcblxuXHRpZiAobGF1bmNoQmVoYXZpb3IgJiYgbGF1bmNoQmVoYXZpb3IgPT09ICdvbk5ld1RhYicpIHtcblx0XHRhd2FpdCBzcGF3bk5vdGF0ZVRhYihsYXVuY2hCZWhhdmlvcilcblx0fVxufSlcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUjpcblx0RmlyZXMgYW5kIHJ1bnMgdGhlIHNwYXduVGFiKCkgZnVuY3Rpb24gb24gbmV3IHRhYiBpZiB1c2VyIFxuXHRjb25maWd1cmF0aW9uIGhhcyAnb25OZXdUYWInIGVuYWJsZWQuXG4qL1xuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKGFzeW5jICgpPT4ge1xuXHRhd2FpdCB1cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKClcblx0aWYgKGxhdW5jaEJlaGF2aW9yID09PSAnb25OZXdUYWInKSBhd2FpdCBzcGF3bk5vdGF0ZVRhYihsYXVuY2hCZWhhdmlvcilcbn0pXG5cblxuXG4vKlxuRVZFTlQgTElTVEVORVI6XG5cdEZpcmVzIGFuZCBydW5zIHNwYXduVGFiKCkgZnVuY3Rpb24gd2hlbiB1c2VyIGNsaWNrcyBOb3RhdGVcblx0cG9wdXBcbiovXG5jaHJvbWUuYWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihhc3luYygpID0+IHtcblx0YXdhaXQgdXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlcygpXG5cdGlmIChsYXVuY2hCZWhhdmlvciA9PT0gJ29uQ2xpY2tQb3B1cCcpIGF3YWl0IHNwYXduTm90YXRlVGFiKGxhdW5jaEJlaGF2aW9yKVxufSlcblxuXG5cbi8qXG5FVkVOVCBMSVNURU5FUjpcblx0RmlyZXMgd2hlbiBhbiBpbmNvbWluZyBkYXRhYmFzZSBjb25uZWN0aW9uIGlzIHJlY2VpdmVkIGFuZFx0XG5cdGRlbGVnYXRlcyBhbGwgZGF0YWJhc2Ugb3BlcmF0aW9ucyB0byB0aGUgZGF0YWJhc2VSZXF1ZXN0KClcblx0ZnVuY3Rpb24uXG4qL1xuY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKChwb3J0KSA9PiB7XG4gIGlmIChwb3J0Lm5hbWUgPT09ICdEQVRBQkFTRV9DT05ORUNUSU9OJykge1xuICAgIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKGFzeW5jIChtZXNzYWdlKSA9PiB7XG5cdGF3YWl0IGRhdGFiYXNlUmVxdWVzdChwb3J0LCBtZXNzYWdlKVxuICAgIH0pO1xuICB9XG59KTtcblxuXG5cbi8qXG5GVU5DVElPTjpcblx0Q29yZSBmdW5jdGlvbiB0aGF0IGluaXRpYWxpemVzIGluZGV4ZWREQiBjb25uZWN0aW9uIGZvciB0aGUgXG5cdE5vdGF0ZSBVc2VyIERhdGFiYXNlIHdoaWNoIGNvbnRhaW5zIHVzZXItbWFkZSBjb250ZW50LCBhcyB3ZWxsXG5cdGFzIHVzZXItc2V0IGNvbmZpZ3VyYXRpb24gc2V0dGluZ3MgdGhhdCB0aGUgYXBwbGljYXRpb25cblx0Y29tcG9uZW50cyB1dGlsaXplXG4qL1xuY29uc3QgaW5pdGlhbGl6ZU5vdGF0ZURhdGFiYXNlID0gYXN5bmMgKCkgPT4geyBcblx0cmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcblxuXHRcdFx0bm90YXRlZGIgPSBhd2FpdCBuZXcgRGF0YWJhc2VBZGFwdGVyKE5PVEFURV9EQik7IFxuXG5cdFx0XHR3aGlsZSAobm90YXRlZGIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRcdGF3YWl0IG5vdGF0ZWRiLmludmVudG9yeVxuXHRcdFx0XHRjb25zb2xlLmxvZygnYXdhaXRpbmcgbm90YXRlZGIuLi4nKVxuXHRcdFx0fVxuXG5cblx0XHRcdHJlc29sdmUobm90YXRlZGIpXG5cdH0pXG59XG5cblxuLypcbkZVTkNUSU9OOlxuXHRDb3JlIGZ1bmN0aW9uIHRoYXQgaW5pdGlhbGl6ZXMgaW5kZXhlZERCIGNvbm5lY3Rpb24gZm9yIHRoZSBcblx0RXJyb3IgTG9nZ2luZyBEYXRhYmFzZSB3aGljaCBjb250YWlucyBhIGhpc3Rvcnkgb2YgYWxsIGVycm9yc1xuXHR0aGF0IHRoZSBhcHBsaWNhdGlvbiBydW5zIGludG8gZHVyaW5nIGl0cyBsaWZlc3Bhbi5cbiovXG5jb25zdCBpbml0aWFsaXplRXJyb3JMb2dnaW5nRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7IFxuXHRyZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdGVycm9ybG9nZ2luZ2RiID0gYXdhaXQgbmV3IERhdGFiYXNlQWRhcHRlcihFUlJPUl9MT0dHSU5HX0RCKTsgXG5cblx0XHR3aGlsZSAoZXJyb3Jsb2dnaW5nZGIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRhd2FpdCBlcnJvcmxvZ2dpbmdkYi5pbnZlbnRvcnlcblx0XHRcdGNvbnNvbGUubG9nKCdhd2FpdGluZyBlcnJvcmxvZ2dpbmdkYi4uLicpXG5cdFx0fVxuXG5cdFx0cmVzb2x2ZShlcnJvcmxvZ2dpbmdkYilcblx0fSlcbn1cblxuXG5cbi8qXG5GVU5DVElPTjpcblx0Q29yZSBmdW5jdGlvbiB0aGF0IGluaXRpYWxpemVzIGluZGV4ZWREQiBjb25uZWN0aW9uIGZvciB0aGUgXG5cdEVycm9yIExvZ2dpbmcgRGF0YWJhc2Ugd2hpY2ggY29udGFpbnMgYSBoaXN0b3J5IG9mIGFsbCBlcnJvcnNcblx0dGhhdCB0aGUgYXBwbGljYXRpb24gcnVucyBpbnRvIGR1cmluZyBpdHMgbGlmZXNwYW4uXG4qL1xuY29uc3QgaW5pdGlhbGl6ZVVzZXJDb25maWd1cmF0aW9uRGF0YWJhc2UgPSBhc3luYyAoKSA9PiB7IFxuXHRyZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHVzZXJjb25maWd1cmF0aW9uZGIgPSBhd2FpdCBuZXcgRGF0YWJhc2VBZGFwdGVyKFVTRVJfQ09ORklHVVJBVElPTl9EQik7IFxuXG5cdFx0d2hpbGUgKHVzZXJjb25maWd1cmF0aW9uZGIgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG5cdFx0XHRhd2FpdCB1c2VyY29uZmlndXJhdGlvbmRiLmludmVudG9yeVxuXHRcdFx0Y29uc29sZS5sb2coJ2F3YWl0aW5nIGVycm9ybG9nZ2luZ2RiLi4uJylcblx0XHR9XG5cblx0XHRyZXNvbHZlKHVzZXJjb25maWd1cmF0aW9uZGIpXG5cdH0pXG59XG5cblxuXG4vKlxuRlVOQ1RJT046XG5cdFxuICovXG5jb25zdCBnZW5lcmF0ZUVycm9yTG9nID0gYXN5bmMgKGVycm9yLCBjb250ZXh0PXt9KSA9PiB7XG5cdGlmICghZXJyb3Jsb2dnaW5nZGIgfHwgZXJyb3Jsb2dnaW5nZGI/LmludmVudG9yeSBpbnN0YW5jZW9mIFByb21pc2UgfHwgIWVycm9ybG9nZ2luZ2RiPy5pbnNlcnREYXRhKSBhd2FpdCBpbml0aWFsaXplRXJyb3JMb2dnaW5nRGF0YWJhc2UoKVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgZXJyb3JMb2cgPSB7XG5cdFx0XHR0aW1lc3RhbXA6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKSxcblx0XHRcdGVycm9yOiB7XG5cdFx0XHRcdG5hbWU6IGVycm9yPy5uYW1lLFxuXHRcdFx0XHRtZXNzYWdlOiBlcnJvcj8ubWVzc2FnZSxcblx0XHRcdFx0c3RhY2tUcmFjZTogZXJyb3I/LnN0YWNrXG5cdFx0XHR9LFxuXHRcdFx0Y29udGV4dDoge1xuXHRcdFx0XHQgLi4uY29udGV4dCxcblx0XHRcdFx0dXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJycpLFxuXHRcdFx0XHRleHRlbnNpb25JZDogY2hyb21lLnJ1bnRpbWUuaWQsXG5cdFx0XHRcdG1hbmlmZXN0VmVyc2lvbjogY2hyb21lLnJ1bnRpbWUuZ2V0TWFuaWZlc3QoKT8ubWFuaWZlc3RfdmVyc2lvblxuXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXdhaXQgZXJyb3Jsb2dnaW5nZGIuaW5zZXJ0RGF0YShlcnJvckxvZywgXCJFUlJPUlNcIilcblx0fSBjYXRjaCAoZXJyb3IpIHtcblxuXHR9XG59XG5cblxuXG4vKlxuRlVOQ1RJT046XG5cdEluamVjdHMgdGhlIE5vdGF0ZSBzdGFydGluZyBwYWdlIHdoZW4gdGhlIE5ldyBUYWIgYnV0dG9uIGlzXHRcblx0Y2xpY2tlZFxuKi9cbmNvbnN0IHNwYXduTm90YXRlVGFiID0gYXN5bmMgKGRpcmVjdGl2ZSkgPT4ge1xuXHRpZiAoZGlyZWN0aXZlID09PSBcIm9uTmV3VGFiXCIpIHtcblx0XHRjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuXHRcdFx0Y29uc3QgdGFiID0gdGFic1swXVxuXHRcblx0XG5cdFx0XHRpZiAodGFiPy51cmwgPT0gQ0hST01FX05FV1RBQiB8fCB0YWI/LnBlbmRpbmdVcmwgPT0gQ0hST01FX05FV1RBQikge1xuXHRcdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlbWVudCBub3QgZXhlY3V0ZWQnKVxuXHRcdFx0XHRjb25zb2xlLmxvZygodGFiPy51cmwgPyAoJ1RBQiBVUkw6ICcsIHRhYj8udXJsKSA6ICcnKSlcblx0XHRcdFx0Y29uc29sZS5sb2coJ1BFTkRJTkcgVEFCIFVSTDogJywgdGFiPy5wZW5kaW5nVXJsKVxuXHRcdFx0fVxuXHRcblx0XHR9KVx0XG5cdH1cblxuXHRlbHNlIGlmIChkaXJlY3RpdmUgPT09IFwib25DbGlja1BvcHVwXCIpIHtcblx0XHRjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuXHRcdFx0Y29uc3QgdGFiID0gdGFic1swXVxuXG5cdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0fSlcblx0fVxuXG59XG5cblxuXG4vKlxuRlVOQ1RJT046XG5cdFVwZGF0ZXMgQmFja2dyb3VuZCBXb3JrZXIgdmFyaWFibGVzLCB3aGljaCBpcyB0eXBpY2FsbHkgb25seSByZXF1aXJlZCBhZnRlciBhIENSVUQgT3BcdFxuXHRpbiBVU0VSX0NPTkZJR1VSQVRJT04gSURCIFN0b3JlXG4qL1xuY29uc3QgdXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlcyA9IGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRsYXVuY2hCZWhhdmlvciA9IHVzZXJjb25maWd1cmF0aW9uZGIuaW52ZW50b3J5LlVTRVJfQ09ORklHVVJBVElPTlswXS5Ob3RhdGUucGFnZS5wYWdlT3BlbkJlaGF2aW9yLnZhbHVlXHRcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRhd2FpdCBnZW5lcmF0ZUVycm9yTG9nKGVycm9yLCB7ZnVuY3Rpb246IFwidXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlc1wifSlcblx0fSBmaW5hbGx5IHtcblx0XHRpZiAodHlwZW9mIGxhdW5jaEJlaGF2aW9yID09PSAndW5kZWZpbmVkJyApIHtcblx0XHRcdGNvbnNvbGUubG9nKCd1bmFibGUgdG8gc2V0IHVwIGJhY2tncm91bmQgZW52IHZhcmlhYmxlcy4gcmV0cnlpbmcgaW4gNTAwbXMuLi4nKVxuXHRcdFx0c2V0VGltZW91dCh1cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzLCA1MDApXG5cdFx0fVxuXG5cdFx0aWYgKGxhdW5jaEJlaGF2aW9yKSBjb25zb2xlLmxvZygnZW52IHZhcmlhYmxlcyBpbml0aWFsaXplZC4nKVxuXHR9XG59XG5cblxuXG4vKlxuRlVOQ1RJT046XG5cdEludGlhbGl6ZXMgYXBwbGljYXRpb24gYnkgZ3JhYmJpbmcgSURCIFN0b3JlcyArIHVwZGF0aW5nIG5lY2Vzc2FyeSBiYWNrZ3JvdW5kIHdvcmtlciBcblx0dmFyaWFibGVzLiBTaG91bGQgb25seSBmaXJlIEAgYnJvd3NlciBsYXVuY2ggLyBleHRlbnNpb24gaW5zdGFsbC5cbiovXG5jb25zdCBib290c3RyYXBBcHBsaWNhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0YXdhaXQgaW5pdGlhbGl6ZU5vdGF0ZURhdGFiYXNlKClcblx0YXdhaXQgaW5pdGlhbGl6ZUVycm9yTG9nZ2luZ0RhdGFiYXNlKClcblx0YXdhaXQgaW5pdGlhbGl6ZVVzZXJDb25maWd1cmF0aW9uRGF0YWJhc2UoKVxuXHRcblx0aWYgKCFlcnJvcmxvZ2dpbmdkYiB8fCBlcnJvcmxvZ2dpbmdkYj8uaW52ZW50b3J5IGluc3RhbmNlb2YgUHJvbWlzZSkgYXdhaXQgaW5pdGlhbGl6ZUVycm9yTG9nZ2luZ0RhdGFiYXNlKClcblxuXHRpZiAodXNlcmNvbmZpZ3VyYXRpb25kYikge1xuXHRcdGF3YWl0IHVwZGF0ZUJhY2tncm91bmRFbnZWYXJpYWJsZXMoKVxuXHR9IGVsc2UgYXdhaXQgaW5pdGlhbGl6ZVVzZXJDb25maWd1cmF0aW9uRGF0YWJhc2UoKVxufVxuXG5cblxuLypcbkZVTkNUSU9OOlxuXHRIYW5kbGVzIGFsbCBpbmJvdW5kIElEQiBDUlVEIE9wIFJlcXVlc3RzIGNvbWluZyBmcm9tIGJvdGggTm90YXRlLmpzeCBwYWdlICsgQ29udGVudFxuXHRTY3JpcHQuIFVwZGF0ZXMgbmVjZXNzYXJ5IGJhY2tncm91bmQgY29tcG9uZW50cyBwb3N0IERCIENSVUQgT3AgZGVwZW5kZW50IG9uIHdoYXQgSURCIFxuXHRzdG9yZSBpcyBiZWluZyBvcGVyYXRlZCBvbiBhcyB3ZWxsIGFzIHdoYXQgQ1JVRCBPcCBpcyBiZWluZyBwZXJmb3JtZWQuXG4qL1xuY29uc3QgZGF0YWJhc2VSZXF1ZXN0ID0gYXN5bmMgKHBvcnQsIG1lc3NhZ2UpID0+IHtcblx0dHJ5IHtcblx0aWYgKFxuXHRcdCh0eXBlb2YgcG9ydCA9PT0gJ29iamVjdCcpICYmIFxuXHRcdG1lc3NhZ2U/LnR5cGUgJiYgXG5cdFx0bWVzc2FnZT8uY29udGVudCAmJiBcblx0XHRtZXNzYWdlPy5jb250ZW50Py5kYXRhYmFzZVxuXHQpe1xuXHRcdGxldCBkYXRhLCBzdG9yZSwgZGIsIGluaXRpYWxpemU7XG5cblxuXHRcdGNvbnN0IHsgdHlwZSwgY29udGVudDoge2RhdGFiYXNlOiB0YXJnZXR9LCAgfSA9IG1lc3NhZ2Vcblx0XHRcblx0XHRcdHN3aXRjaCAodGFyZ2V0KSB7XG5cdFx0XHRcdGNhc2UgTk9UQVRFX0RCOlxuXHRcdFx0XHRcdGRiID0gbm90YXRlZGJcblx0XHRcdFx0XHRpbml0aWFsaXplID0gaW5pdGlhbGl6ZU5vdGF0ZURhdGFiYXNlXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBFUlJPUl9MT0dHSU5HX0RCOlxuXHRcdFx0XHRcdGRiID0gZXJyb3Jsb2dnaW5nZGJcblx0XHRcdFx0XHRpbml0aWFsaXplID0gaW5pdGlhbGl6ZUVycm9yTG9nZ2luZ0RhdGFiYXNlXG5cdFx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdFx0Y2FzZSBVU0VSX0NPTkZJR1VSQVRJT05fREI6XG5cdFx0XHRcdFx0ZGIgPSB1c2VyY29uZmlndXJhdGlvbmRiXG5cdFx0XHRcdFx0aW5pdGlhbGl6ZSA9IGluaXRpYWxpemVVc2VyQ29uZmlndXJhdGlvbkRhdGFiYXNlXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XHRcblxuXHRcdFx0aWYgKHR5cGVvZiBpbml0aWFsaXplID09PSAndW5kZWZpbmVkJykgZGVidWdnZXJcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ0dFVF9EQVRBQkFTRSc6IFxuXG5cdFx0XHRcdFx0cG9ydC5wb3N0TWVzc2FnZSh7IFxuXHRcdFx0XHRcdFx0dHlwZTogJ0RBVEFCQVNFJywgXG5cdFx0XHRcdFx0XHRjb250ZW50OiB7IGRhdGE6IGRiLCBkYXRhYmFzZTogdGFyZ2V0IH1cblx0XHRcdFx0XHRcdCBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XG5cdFxuXHRcdFx0XHRjYXNlICdQT1NUX0RBVEFCQVNFJzogXG5cdFx0XHRcdFx0ZGF0YSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LmRhdGFcblx0XHRcdFx0XHRzdG9yZSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LnN0b3JlXG5cdFxuXHRcdFx0XHRcdGNvbnN0IGluc2VydE9wZXJhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdGlmICggZGF0YSAmJiBzdG9yZSAmJiB0eXBlb2YgZGIuaW5zZXJ0RGF0YSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHQgXHRcdGF3YWl0IGRiLmluc2VydERhdGEoZGF0YSwgc3RvcmUpXG5cdFx0XHRcdFx0XHRcdGF3YWl0IGluaXRpYWxpemUoKVxuXHRcblx0XHRcdFx0XHRcdFx0Ly8gU2luY2Ugb25seSBVcGRhdGUgT3BzIHdpbGwgYmUgcGVyZm9ybWVkIG9uIHRoaXMgc3RvcmUsIGl0cyBzYWZlXG5cdFx0XHRcdFx0XHRcdC8vIHRvIGFsd2F5cyBhc3N1bWUgdGhhdCB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJhbiBhZnRlciBldmVyeVxuXHRcdFx0XHRcdFx0XHQvLyB1c2VyIGNvbmZpZ3VyYXRpb24gdXBkYXRlLlxuXHRcdFx0XHRcdFx0XHRpZiAoc3RvcmUgPT09ICdVU0VSX0NPTkZJR1VSQVRJT04nKSBhd2FpdCB1cGRhdGVCYWNrZ3JvdW5kRW52VmFyaWFibGVzKClcblxuXHRcdFx0XHRcdFx0XHRwb3J0LnBvc3RNZXNzYWdlKHsgXG5cdFx0XHRcdFx0XHRcdFx0dHlwZTogJ0RBVEFCQVNFJywgXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogeyBkYXRhOiBkYiwgZGF0YWJhc2U6IHRhcmdldCB9XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRhd2FpdCBpbml0aWFsaXplKClcblx0XHRcdFx0XHRcdFx0YXdhaXQgaW5zZXJ0T3BlcmF0aW9uKClcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0YXdhaXQgaW5zZXJ0T3BlcmF0aW9uKClcblx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFxuXHRcblx0XHRcdFx0Y2FzZSAnREVMRVRFX0RBVEFCQVNFJzogXG5cdFx0XHRcdFx0ZGF0YSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LmRhdGFcblx0XHRcdFx0XHRzdG9yZSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LnN0b3JlXG5cdFxuXHRcdFx0XHRcdGNvbnN0IGRlbGV0ZU9wZXJhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRcdGlmICggZGF0YSAmJiBzdG9yZSAmJiB0eXBlb2YgZGIuZGVsZXRlRGF0YSA9PT0gJ2Z1bmN0aW9uJyApIHtcblx0XHRcdFx0XHRcdFx0YXdhaXQgZGIuZGVsZXRlRGF0YShkYXRhLCBzdG9yZSlcblx0XHRcdFx0XHRcdFx0YXdhaXQgaW5pdGlhbGl6ZSgpXG5cdFx0XHRcdFx0XHRcdHBvcnQucG9zdE1lc3NhZ2UoeyBcblx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnREFUQUJBU0UnLCBcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiB7IGRhdGE6IGRiLCBkYXRhYmFzZTogdGFyZ2V0IH1cblx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGF3YWl0IGluaXRpYWxpemUoKVxuXHRcdFx0XHRcdFx0XHRhd2FpdCBkZWxldGVPcGVyYXRpb24oKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0YXdhaXQgZGVsZXRlT3BlcmF0aW9uKClcblx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFxuXHRcblx0XHRcdFx0Y2FzZSAnUkVMT0FEX0RBVEFCQVNFJzogXG5cdFx0XHRcdFx0aWYgKCFkYiB8fCBkYj8uaW52ZW50b3J5IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuXHRcdFx0XHRcdFx0YXdhaXQgaW5pdGlhbGl6ZSgpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHBvcnQucG9zdE1lc3NhZ2UoeyBcblx0XHRcdFx0XHRcdFx0dHlwZTogJ0RBVEFCQVNFJywgXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IHsgZGF0YTogZGIsIGRhdGFiYXNlOiB0YXJnZXQgfSxcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIm1lc3NhZ2UgXCIgKyBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSArIFwiXFxuXCIgKyBcblx0XHRcdFx0XCIgZWl0aGVyIGhhcyBhbiBpbnZhbGlkIHNjaGVtYSBvciBpcyBtaXNzaW5nIG9uZSBvciBtb3JlIHJlcXVpcmVkIHByb3BlcnRpZXMuXCIgK1xuXHRcdFx0XHRcIlxcbm1lc3NhZ2VzIGFyZSBleHBlY3RlZCB0byBoYXZlICcudHlwZScsICcuY29udGVudCcsIGFuZCAnLmNvbnRlbnQuZGF0YWJhc2UnIGZpZWxkcy5cIilcblx0XHRcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0YXdhaXQgZ2VuZXJhdGVFcnJvckxvZyhlcnJvciwgeyBmdW5jdGlvbjogJ2RhdGFiYXNlUmVxdWVzdCcgfSlcblx0fVxuXG5cblxuXHQgXG59XG5cblxuXG5cblxuXG4vKlxuREVQUkVDQVRFRCBGVU5DVElPTjpcblx0QnJvYWRjYXN0cyB0aGUgREJBZGFwdGVyIGluc3RhbmNlIHRvIHRoZSBhY3RpdmUgdGFiIHRoYXQgaG9zdHMgXG5cdGFuIGV4dGVuc2lvbiBjb21wb25lbnQgKEFLQSBjb250ZW50IHNjcmlwdC9vdGhlciBleHRlbnNpb24gcGFnZXMpXG4qL1xuY29uc3QgYnJvYWRjYXN0REJDb25uZWN0aW9uID0gYXN5bmMgKG5vdGF0ZWRiKSA9PiB7XG5cblx0Y2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcblx0XHRjb25zdCB0YWIgPSB0YWJzWzBdLmlkXG5cdFx0XG5cdFx0Y2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiLCB7IFxuXHRcdFx0dHlwZTogJ0RBVEFCQVNFX0NPTk5FQ1RJT04nLCBcblx0XHRcdGNvbnRlbnQ6IG5vdGF0ZWRiIFxuXHRcdH0pXG5cdH0pXHRcbn1cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiaW5zcGVjdElEQlN0b3JlIiwiZGF0YWJhc2VOYW1lIiwiRXJyb3IiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJpbmRleGVkREIiLCJvcGVuIiwib25lcnJvciIsImV2ZW50IiwiY29uY2F0IiwidGFyZ2V0IiwiZXJyb3IiLCJvbnN1Y2Nlc3MiLCJkYiIsInJlc3VsdCIsInN0b3JlTmFtZXMiLCJBcnJheSIsImZyb20iLCJvYmplY3RTdG9yZU5hbWVzIiwiYWxsU3RvcmVzRGF0YSIsImNvbXBsZXRlZFN0b3JlcyIsImZvckVhY2giLCJzdG9yZU5hbWUiLCJ0cmFuc2FjdGlvbiIsInN0b3JlIiwib2JqZWN0U3RvcmUiLCJnZXRBbGxSZXF1ZXN0IiwiZ2V0QWxsIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsIkxhdW5jaERldlRvb2xzIiwiZ2xvYmFsVGhpcyIsIkNvbmZpZ3VyYXRpb25UZW1wbGF0ZSIsIk5vdGF0ZSIsInNlYXJjaCIsInByZWZlcnJlZEVuZ2luZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJvcHRpb25zIiwiZW5hYmxlZCIsInNlYXJjaE5vdGVzIiwicGFnZSIsInBhZ2VPcGVuQmVoYXZpb3IiLCJiYWNrZ3JvdW5kV2FsbHBhcGVyIiwibm90ZU1vZGFsIiwicHJlZmVycmVkQ29sb3IiLCJXZWJDb250ZW50IiwidG9vbHMiLCJiZWhhdmlvciIsIm5ld05vdGVQb3B1cCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsIlN0cmluZyIsIk51bWJlciIsIkRhdGFiYXNlQWRhcHRlciIsIm1hcHBlciIsIm5vdGF0ZSIsInN0b3JlcyIsImVycm9yTG9nZ2luZyIsInVzZXJDb25maWd1cmF0aW9uIiwiY29ubmVjdGlvbiIsImNvbm5lY3RUb0RCIiwiaW52ZW50b3J5IiwiX2Nvbm5lY3RUb0RCIiwiX2NhbGxlZTMiLCJfdGhpcyIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsImxlZ2VuZCIsIkRCQnJpZ2UiLCJfcmVmIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ3b3JrZXJtZXNzYWdlIiwiZ2V0SW52ZW50b3J5IiwiX3gyIiwib251cGdyYWRlbmVlZGVkIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsInN0b3JlS2V5IiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiYXV0b0luY3JlbWVudCIsInNvbWUiLCJzZXR1cFVzZXJDb25maWd1cmF0aW9uIiwiX3gzIiwiX3giLCJfc2V0dXBVc2VyQ29uZmlndXJhdGlvbiIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0IiwiYWRkIiwiX3g0IiwiX2dldEludmVudG9yeSIsIl9jYWxsZWU2IiwiX3RoaXMyIiwiYWxsU3RvcmVzV2VyZUZldGNoZWQiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJkYXRhc2V0IiwiZm9ybXVsYSIsInJlc3VsdHMiLCJfcmVmMyIsIl9jYWxsZWU1IiwiZGJTdG9yZU5hbWVzIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1Iiwib2JqU3RvcmUiLCJjb21wYXJpc29uIiwiaXRlbSIsIl94NSIsIl94NiIsIl9pbnNlcnREYXRhIiwiX2NhbGxlZTgiLCJkYXRhIiwidGFyZ2V0X3N0b3JlIiwiX3RoaXMzIiwiX2NhbGxlZTgkIiwiX2NvbnRleHQ4IiwicHV0IiwiX2NhbGxlZTciLCJfY2FsbGVlNyQiLCJfY29udGV4dDciLCJjbGVhbnVwIiwiaW5zZXJ0RGF0YSIsIl94NyIsIl94OCIsIl9kZWxldGVEYXRhIiwiX2NhbGxlZTEwIiwiX3RoaXM0IiwiX2NhbGxlZTEwJCIsIl9jb250ZXh0MTAiLCJpZCIsIl9jYWxsZWU5IiwiX2NhbGxlZTkkIiwiX2NvbnRleHQ5IiwiZGVsZXRlRGF0YSIsIl94OSIsIl94MTAiLCJfY2xlYW51cCIsIl9jYWxsZWUxMSIsIl9jYWxsZWUxMSQiLCJfY29udGV4dDExIiwiZGVmYXVsdCIsIkRCV29ya2VyIiwiX0RhdGFiYXNlQWRhcHRlciIsIl9jYWxsU3VwZXIiLCJfaW5oZXJpdHMiLCJEZXZUb29scyIsIk5PVEFURV9EQiIsIkVSUk9SX0xPR0dJTkdfREIiLCJVU0VSX0NPTkZJR1VSQVRJT05fREIiLCJOT1RBVEVfTEFORElOR19QQUdFIiwiQ0hST01FX05FV1RBQiIsIm5vdGF0ZWRiIiwiZXJyb3Jsb2dnaW5nZGIiLCJ1c2VyY29uZmlndXJhdGlvbmRiIiwibGF1bmNoQmVoYXZpb3IiLCJjaHJvbWUiLCJydW50aW1lIiwib25TdGFydHVwIiwiYWRkTGlzdGVuZXIiLCJib290c3RyYXBBcHBsaWNhdGlvbiIsInNwYXduTm90YXRlVGFiIiwib25JbnN0YWxsZWQiLCJ0YWJzIiwib25DcmVhdGVkIiwidXBkYXRlQmFja2dyb3VuZEVudlZhcmlhYmxlcyIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsIm9uQ29ubmVjdCIsInBvcnQiLCJvbk1lc3NhZ2UiLCJfcmVmNSIsIm1lc3NhZ2UiLCJkYXRhYmFzZVJlcXVlc3QiLCJpbml0aWFsaXplTm90YXRlRGF0YWJhc2UiLCJfcmVmNiIsIl9yZWY3IiwiaW5pdGlhbGl6ZUVycm9yTG9nZ2luZ0RhdGFiYXNlIiwiX3JlZjgiLCJfcmVmOSIsImluaXRpYWxpemVVc2VyQ29uZmlndXJhdGlvbkRhdGFiYXNlIiwiX3JlZjEwIiwiX3JlZjExIiwiZ2VuZXJhdGVFcnJvckxvZyIsIl9yZWYxMiIsIl9jYWxsZWUxMiIsIl9lcnJvcmxvZ2dpbmdkYiIsIl9lcnJvcmxvZ2dpbmdkYjIiLCJjb250ZXh0IiwiX2Nocm9tZSRydW50aW1lJGdldE1hIiwiZXJyb3JMb2ciLCJfYXJnczEyIiwiX2NhbGxlZTEyJCIsIl9jb250ZXh0MTIiLCJ0aW1lc3RhbXAiLCJEYXRlIiwidG9JU09TdHJpbmciLCJzdGFja1RyYWNlIiwic3RhY2siLCJfb2JqZWN0U3ByZWFkIiwidXJsIiwiZ2V0VVJMIiwiZXh0ZW5zaW9uSWQiLCJtYW5pZmVzdFZlcnNpb24iLCJnZXRNYW5pZmVzdCIsIm1hbmlmZXN0X3ZlcnNpb24iLCJ0MCIsIl9yZWYxMyIsIl9jYWxsZWUxMyIsImRpcmVjdGl2ZSIsIl9jYWxsZWUxMyQiLCJfY29udGV4dDEzIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwidGFiIiwicGVuZGluZ1VybCIsInVwZGF0ZSIsIl9yZWYxNCIsIl9jYWxsZWUxNCIsIl9jYWxsZWUxNCQiLCJfY29udGV4dDE0IiwiVVNFUl9DT05GSUdVUkFUSU9OIiwic2V0VGltZW91dCIsIl9yZWYxNSIsIl9jYWxsZWUxNSIsIl9lcnJvcmxvZ2dpbmdkYjMiLCJfY2FsbGVlMTUkIiwiX2NvbnRleHQxNSIsIl9yZWYxNiIsIl9jYWxsZWUxOCIsIl9tZXNzYWdlJGNvbnRlbnQyIiwiX21lc3NhZ2UkY29udGVudDMiLCJfbWVzc2FnZSRjb250ZW50NCIsIl9tZXNzYWdlJGNvbnRlbnQ1IiwiX2RiIiwiX21lc3NhZ2UkY29udGVudCIsImluaXRpYWxpemUiLCJpbnNlcnRPcGVyYXRpb24iLCJkZWxldGVPcGVyYXRpb24iLCJfY2FsbGVlMTgkIiwiX2NvbnRleHQxOCIsImNvbnRlbnQiLCJkYXRhYmFzZSIsInQxIiwicG9zdE1lc3NhZ2UiLCJfcmVmMTciLCJfY2FsbGVlMTYiLCJfY2FsbGVlMTYkIiwiX2NvbnRleHQxNiIsIl9yZWYxOCIsIl9jYWxsZWUxNyIsIl9jYWxsZWUxNyQiLCJfY29udGV4dDE3IiwiSlNPTiIsInN0cmluZ2lmeSIsInQyIiwiX3gxMSIsImJyb2FkY2FzdERCQ29ubmVjdGlvbiIsIl9yZWYxOSIsIl9jYWxsZWUxOSIsIl9jYWxsZWUxOSQiLCJfY29udGV4dDE5Iiwic2VuZE1lc3NhZ2UiLCJfeDEyIl0sInNvdXJjZVJvb3QiOiIifQ==