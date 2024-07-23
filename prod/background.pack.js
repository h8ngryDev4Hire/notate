/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Universal/Handlers/UserConfiguration.js":
/*!*****************************************************!*\
  !*** ./src/Universal/Handlers/UserConfiguration.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserConfiguration: () => (/* binding */ UserConfiguration)
/* harmony export */ });
var UserConfiguration = {
  Notate: {
    search: {
      preferredEngine: {
        value: "perplexityai",
        description: "Sets your preferred Search Engine.",
        options: ["google", "bing", "duckduckgo", "yahoo", "baidu", "yandex", "ecosia", "perplexityai"]
      },
      searchNotes: {
        value: "true",
        description: "Sets whether or not notes should be searched for when searching in the search bar.",
        options: ["true", "false"]
      }
    },
    page: {
      pageOpenBehavior: {
        value: "onNewTab",
        description: "Sets default page to open up when clicking the New Tab Button.",
        options: ["onNewTab", "onClickPopup", "false"]
      },
      backgroundWallpaper: {
        value: "darkWood",
        description: "Sets wallpaper for Notate.",
        options: ["darkWood", "corkBoard", "marbleChessBoard"]
      }
    },
    noteModal: {
      preferredColor: {
        value: "red",
        description: "Sets preferred color when creating new notes",
        options: ["red", "yellow", "blue", "green", "orange", "pink", "purple"]
      }
    }
  },
  WebContent: {
    tools: {},
    behavior: {
      newNotePopup: {
        value: "true",
        description: "Sets whether the New Note Button shows when hovering the cursor in the corner of the page.",
        options: ["true", "false"]
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
  function DatabaseAdapter() {
    _classCallCheck(this, DatabaseAdapter);
    this.mapper = {
      name: 'NOTATE_DB',
      stores: ['NOTES', 'NOTEBOOKS', 'USER_CONFIGURATION']
    };
    this.connection = this.connectToDB();
    this.inventory = this.getInventory();
    this.request = null;
  }
  return _createClass(DatabaseAdapter, [{
    key: "connectToDB",
    value: function () {
      var _connectToDB = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var DBBrige = indexedDB.open(_this.mapper.name, 1);
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
                          resolve(_this.connection);
                        case 5:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }));
                  return function (_x) {
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
                          console.log('Upgrading DB...');
                          _this.connection = e.target.result;
                          transaction = e.target.transaction;
                          _this.mapper.stores.forEach(function (storeKey) {
                            _this.connection.createObjectStore(storeKey, {
                              keyPath: 'id',
                              autoIncrement: true
                            });
                          });
                          _context2.next = 6;
                          return _this.setupUserConfiguration(transaction);
                        case 6:
                          console.log('DB upgrade successful');

                          //Runs callback if defined
                          if (!(_this.workermessage === 'function')) {
                            _context2.next = 10;
                            break;
                          }
                          _context2.next = 10;
                          return _this.workermessage();
                        case 10:
                          resolve(_this.connection);
                        case 11:
                        case "end":
                          return _context2.stop();
                      }
                    }, _callee2);
                  }));
                  return function (_x2) {
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
      function connectToDB() {
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
                  store.add(_UserConfiguration_js__WEBPACK_IMPORTED_MODULE_0__.UserConfiguration);
                  console.log('config upload successful');
                } catch (e) {
                  console.error('config upload failed');
                }
              }));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function setupUserConfiguration(_x3) {
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
                return function (_x4, _x5) {
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
      function insertData(_x6, _x7) {
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
      function deleteData(_x8, _x9) {
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
/* harmony import */ var _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @universal/Handlers/indexedDBhandler.js */ "./src/Universal/Handlers/indexedDBhandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var NOTATE_LANDING_PAGE = './index.html';
var CHROME_NEWTAB = 'chrome://newtab/';
var db, launchBehavior;

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
        return spawnNotateTab();
      case 5:
      case "end":
        return _context.stop();
    }
  }, _callee);
})));

/*
EVENT LISTENER:
	Fires and runs the spawnTab() function on new tab if user 
	configuration has 'onNewTab' enabled.
*/
chrome.tabs.onCreated.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.next = 2;
        return updateBackgroundVariables();
      case 2:
        if (!(launchBehavior === 'onNewTab')) {
          _context2.next = 5;
          break;
        }
        _context2.next = 5;
        return spawnNotateTab();
      case 5:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));

/*
EVENT LISTENER:
*/
chrome.action.onClicked.addListener( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        _context3.next = 2;
        return updateBackgroundVariables();
      case 2:
        if (!(launchBehavior === 'onClickPopup')) {
          _context3.next = 5;
          break;
        }
        _context3.next = 5;
        return spawnNotateTab();
      case 5:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
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
      var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(message) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return databaseRequest(port, message);
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
});

/*
FUNCTION:
	Core function that initializes indexedDB connection for application
	components to utilize
*/
var initializeDatabase = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          return _context6.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return new _universal_Handlers_indexedDBhandler_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
                  case 2:
                    db = _context5.sent;
                    _context5.next = 5;
                    return db.inventory;
                  case 5:
                    resolve(db);
                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x2, _x3) {
              return _ref6.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function initializeDatabase() {
    return _ref5.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Injects the Notate starting page when the New Tab button is	
	clicked
*/
var spawnNotateTab = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
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
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function spawnNotateTab() {
    return _ref7.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Updates Background Worker variables, which is typically only required after a CRUD Op	
	in USER_CONFIGURATION IDB Store
*/
var updateBackgroundVariables = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          if (!db) {
            _context8.next = 4;
            break;
          }
          launchBehavior = db.inventory.USER_CONFIGURATION[0].Notate.page.pageOpenBehavior.value;
          _context8.next = 8;
          break;
        case 4:
          _context8.next = 6;
          return initializeDatabase();
        case 6:
          _context8.next = 8;
          return updateBackgroundVariables();
        case 8:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function updateBackgroundVariables() {
    return _ref8.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Intializes application by grabbing IDB Stores + updating necessary background worker 
	variables. Should only fire @ browser launch / extension install.
*/
var bootstrapApplication = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return initializeDatabase();
        case 2:
          if (!db) {
            _context9.next = 7;
            break;
          }
          _context9.next = 5;
          return updateBackgroundVariables();
        case 5:
          _context9.next = 9;
          break;
        case 7:
          _context9.next = 9;
          return initializeDatabase();
        case 9:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function bootstrapApplication() {
    return _ref9.apply(this, arguments);
  };
}();

/*
FUNCTION:
	Handles all inbound IDB CRUD Op Requests coming from both Notate.jsx page + Content
	Script. Updates necessary background components post DB CRUD Op dependent on what IDB 
	store is being operated on as well as what CRUD Op is being performed.
*/
var databaseRequest = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(port, message) {
    var _message$content, _message$content2, _message$content3, _message$content4;
    var data, store, insertOperation, deleteOperation;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          if (!(_typeof(port) === 'object' && _typeof(message) === 'object')) {
            _context12.next = 24;
            break;
          }
          _context12.t0 = message.type;
          _context12.next = _context12.t0 === 'GET_DATABASE' ? 4 : _context12.t0 === 'POST_DATABASE' ? 6 : _context12.t0 === 'DELETE_DATABASE' ? 12 : _context12.t0 === 'RELOAD_DATABASE' ? 18 : 24;
          break;
        case 4:
          port.postMessage({
            type: 'DATABASE',
            content: db
          });
          return _context12.abrupt("break", 24);
        case 6:
          data = message === null || message === void 0 || (_message$content = message.content) === null || _message$content === void 0 ? void 0 : _message$content.data;
          store = message === null || message === void 0 || (_message$content2 = message.content) === null || _message$content2 === void 0 ? void 0 : _message$content2.store;
          insertOperation = /*#__PURE__*/function () {
            var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.prev = 0;
                    if (!(data && store && db.insertData)) {
                      _context10.next = 12;
                      break;
                    }
                    _context10.next = 4;
                    return db.insertData(data, store);
                  case 4:
                    _context10.next = 6;
                    return initializeDatabase();
                  case 6:
                    if (!(store === 'USER_CONFIGURATION')) {
                      _context10.next = 9;
                      break;
                    }
                    _context10.next = 9;
                    return updateBackgroundVariables();
                  case 9:
                    port.postMessage({
                      type: 'DATABASE',
                      content: db
                    });
                    _context10.next = 17;
                    break;
                  case 12:
                    debugger;
                    _context10.next = 15;
                    return initializeDatabase();
                  case 15:
                    _context10.next = 17;
                    return insertOperation();
                  case 17:
                    _context10.next = 22;
                    break;
                  case 19:
                    _context10.prev = 19;
                    _context10.t0 = _context10["catch"](0);
                    debugger;
                  case 22:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, null, [[0, 19]]);
            }));
            return function insertOperation() {
              return _ref11.apply(this, arguments);
            };
          }();
          _context12.next = 11;
          return insertOperation();
        case 11:
          return _context12.abrupt("break", 24);
        case 12:
          data = message === null || message === void 0 || (_message$content3 = message.content) === null || _message$content3 === void 0 ? void 0 : _message$content3.data;
          store = message === null || message === void 0 || (_message$content4 = message.content) === null || _message$content4 === void 0 ? void 0 : _message$content4.store;
          deleteOperation = /*#__PURE__*/function () {
            var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    if (!(data && store && db.deleteData)) {
                      _context11.next = 8;
                      break;
                    }
                    _context11.next = 3;
                    return db.deleteData(data, store);
                  case 3:
                    _context11.next = 5;
                    return initializeDatabase();
                  case 5:
                    port.postMessage({
                      type: 'DATABASE',
                      content: db
                    });
                    _context11.next = 13;
                    break;
                  case 8:
                    debugger;
                    _context11.next = 11;
                    return initializeDatabase();
                  case 11:
                    _context11.next = 13;
                    return deleteOperation();
                  case 13:
                  case "end":
                    return _context11.stop();
                }
              }, _callee11);
            }));
            return function deleteOperation() {
              return _ref12.apply(this, arguments);
            };
          }();
          _context12.next = 17;
          return deleteOperation();
        case 17:
          return _context12.abrupt("break", 24);
        case 18:
          if (db) {
            _context12.next = 23;
            break;
          }
          _context12.next = 21;
          return initializeDatabase();
        case 21:
          console.log('database being sent: ', db);
          port.postMessage({
            type: 'DATABASE',
            content: db
          });
        case 23:
          return _context12.abrupt("break", 24);
        case 24:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function databaseRequest(_x4, _x5) {
    return _ref10.apply(this, arguments);
  };
}();

/*
DEPRECATED FUNCTION:
	Broadcasts the DBAdapter instance to the active tab that hosts 
	an extension component (AKA content script/other extension pages)
*/
var broadcastDBConnection = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(db) {
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          chrome.tabs.query({
            active: true,
            currentWindow: true
          }, function (tabs) {
            var tab = tabs[0].id;
            chrome.tabs.sendMessage(tab, {
              type: 'DATABASE_CONNECTION',
              content: db
            });
          });
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function broadcastDBConnection(_x6) {
    return _ref13.apply(this, arguments);
  };
}();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEzTSxJQUFBLEdBQUEyTSxVQUFBLENBQUF0TyxJQUFBO1FBQUE7VUFFdENtTCxNQUFNLENBQUNNLElBQUksQ0FBQ2UsS0FBSyxDQUFDO1lBQUVDLE1BQU0sRUFBRSxJQUFJO1lBQUVDLGFBQWEsRUFBRTtVQUFLLENBQUMsRUFBRSxVQUFDakIsSUFBSSxFQUFLO1lBQ2xFLElBQU1rQixHQUFHLEdBQUdsQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUN6QixFQUFFO1lBRXRCbUIsTUFBTSxDQUFDTSxJQUFJLENBQUM4QyxXQUFXLENBQUM1QixHQUFHLEVBQUU7Y0FDNUJoUCxJQUFJLEVBQUUscUJBQXFCO2NBQzNCb1EsT0FBTyxFQUFFeEc7WUFDVixDQUFDLENBQUM7VUFDSCxDQUFDLENBQUM7UUFBQTtRQUFBO1VBQUEsT0FBQStHLFVBQUEsQ0FBQXhNLElBQUE7TUFBQTtJQUFBLEdBQUFzTSxTQUFBO0VBQUEsQ0FDRjtFQUFBLGdCQVZLRixxQkFBcUJBLENBQUF6RSxHQUFBO0lBQUEsT0FBQTBFLE1BQUEsQ0FBQWpMLEtBQUEsT0FBQUQsU0FBQTtFQUFBO0FBQUEsR0FVMUIsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aWNrLW5vdGVzLy4vc3JjL1VuaXZlcnNhbC9IYW5kbGVycy9Vc2VyQ29uZmlndXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy8uL3NyYy9Vbml2ZXJzYWwvSGFuZGxlcnMvaW5kZXhlZERCaGFuZGxlci5qcyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3F1aWNrLW5vdGVzLy4vc3JjL0JhY2tncm91bmQvYmFja2dyb3VuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVXNlckNvbmZpZ3VyYXRpb24gPSB7XG5cdE5vdGF0ZToge1xuXHRcdHNlYXJjaDoge1xuXHRcdFx0cHJlZmVycmVkRW5naW5lOiB7XG5cdFx0XHRcdHZhbHVlOiBcInBlcnBsZXhpdHlhaVwiLFxuXHRcdFx0XHRkZXNjcmlwdGlvbjogXCJTZXRzIHlvdXIgcHJlZmVycmVkIFNlYXJjaCBFbmdpbmUuXCIsXG5cdFx0XHRcdG9wdGlvbnM6IFtcImdvb2dsZVwiLCBcImJpbmdcIiwgXCJkdWNrZHVja2dvXCIsIFwieWFob29cIiwgXCJiYWlkdVwiLCBcInlhbmRleFwiLCBcImVjb3NpYVwiLCBcInBlcnBsZXhpdHlhaVwiXVxuXHRcdFx0fSxcblx0XHRcdHNlYXJjaE5vdGVzOiB7XG5cdFx0XHRcdHZhbHVlOiBcInRydWVcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiU2V0cyB3aGV0aGVyIG9yIG5vdCBub3RlcyBzaG91bGQgYmUgc2VhcmNoZWQgZm9yIHdoZW4gc2VhcmNoaW5nIGluIHRoZSBzZWFyY2ggYmFyLlwiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl1cblx0XHRcdH1cblx0XHR9LFxuXHRcdHBhZ2U6IHtcblx0XHRcdHBhZ2VPcGVuQmVoYXZpb3I6IHtcblx0XHRcdFx0dmFsdWU6IFwib25OZXdUYWJcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246IFwiU2V0cyBkZWZhdWx0IHBhZ2UgdG8gb3BlbiB1cCB3aGVuIGNsaWNraW5nIHRoZSBOZXcgVGFiIEJ1dHRvbi5cIixcblx0XHRcdFx0b3B0aW9uczogW1wib25OZXdUYWJcIiwgXCJvbkNsaWNrUG9wdXBcIiwgXCJmYWxzZVwiXVxuXHRcdFx0fSxcblx0XHRcdGJhY2tncm91bmRXYWxscGFwZXI6IHtcblx0XHRcdFx0dmFsdWU6IFwiZGFya1dvb2RcIixcblx0XHRcdFx0ZGVzY3JpcHRpb246XCJTZXRzIHdhbGxwYXBlciBmb3IgTm90YXRlLlwiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJkYXJrV29vZFwiLCBcImNvcmtCb2FyZFwiLCBcIm1hcmJsZUNoZXNzQm9hcmRcIl1cblx0XHRcdH1cblx0XHR9LFxuXHRcdG5vdGVNb2RhbDoge1xuXHRcdFx0cHJlZmVycmVkQ29sb3I6IHtcblx0XHRcdFx0dmFsdWU6IFwicmVkXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgcHJlZmVycmVkIGNvbG9yIHdoZW4gY3JlYXRpbmcgbmV3IG5vdGVzXCIsXG5cdFx0XHRcdG9wdGlvbnM6IFtcInJlZFwiLCBcInllbGxvd1wiLCBcImJsdWVcIiwgXCJncmVlblwiLCBcIm9yYW5nZVwiLCBcInBpbmtcIiwgXCJwdXJwbGVcIl1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdFdlYkNvbnRlbnQ6IHtcblx0XHR0b29sczoge1xuXHRcdFxuXHRcdH0sXG5cdFx0YmVoYXZpb3I6IHtcblx0XHRcdG5ld05vdGVQb3B1cDoge1xuXHRcdFx0XHR2YWx1ZTogXCJ0cnVlXCIsXG5cdFx0XHRcdGRlc2NyaXB0aW9uOiBcIlNldHMgd2hldGhlciB0aGUgTmV3IE5vdGUgQnV0dG9uIHNob3dzIHdoZW4gaG92ZXJpbmcgdGhlIGN1cnNvciBpbiB0aGUgY29ybmVyIG9mIHRoZSBwYWdlLlwiLFxuXHRcdFx0XHRvcHRpb25zOiBbXCJ0cnVlXCIsIFwiZmFsc2VcIl1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiIsImltcG9ydCB7IFVzZXJDb25maWd1cmF0aW9uIGFzIENvbmZpZ3VyYXRpb24gfSBmcm9tICcuL1VzZXJDb25maWd1cmF0aW9uLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhYmFzZUFkYXB0ZXIge1xuICAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5tYXBwZXIgPSB7XG4gICAgICAgIG5hbWU6ICdOT1RBVEVfREInLFxuICAgICAgICBzdG9yZXM6IFsnTk9URVMnLCAnTk9URUJPT0tTJywgJ1VTRVJfQ09ORklHVVJBVElPTiddLFxuICAgIH1cbiAgICB0aGlzLmNvbm5lY3Rpb24gPSAgdGhpcy5jb25uZWN0VG9EQigpO1xuICAgIHRoaXMuaW52ZW50b3J5ID0gIHRoaXMuZ2V0SW52ZW50b3J5KCk7XG4gICAgdGhpcy5yZXF1ZXN0ID0gbnVsbDtcbiAgfVxuICAgIFxuICBhc3luYyBjb25uZWN0VG9EQigpIHtcblx0ICBcdCAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0ICAgXG5cbiAgIFx0XHQgICBjb25zdCBEQkJyaWdlID0gaW5kZXhlZERCLm9wZW4odGhpcy5tYXBwZXIubmFtZSwgMSk7XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9uc3VjY2VzcyA9IGFzeW5jIChlKSA9PiB7XG5cdFx0ICAgICBpZiAodGhpcy53b3JrZXJtZXNzYWdlID09PSAnZnVuY3Rpb24nKSBhd2FpdCB0aGlzLndvcmtlcm1lc3NhZ2UoKVxuICAgXHRcdCAgICAgdGhpcy5jb25uZWN0aW9uID0gZS50YXJnZXQucmVzdWx0O1xuICAgXHRcdCAgICAgcmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24pO1xuICAgXHRcdCAgIH07XG5cbiAgIFx0XHQgICBEQkJyaWdlLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGluaXRpbmcgREI6ICcgKyBlLnRhcmdldC5lcnJvcikpO1xuXG4gICBcdFx0ICAgREJCcmlnZS5vbnVwZ3JhZGVuZWVkZWQgPSBhc3luYyAoZSkgPT4ge1xuXHRcdFx0ICAgY29uc29sZS5sb2coJ1VwZ3JhZGluZyBEQi4uLicpXG4gICBcdFx0IFxuICAgXHRcdCAgICAgdGhpcy5jb25uZWN0aW9uID0gZS50YXJnZXQucmVzdWx0O1xuXHRcdCAgICAgY29uc3QgdHJhbnNhY3Rpb24gPSBlLnRhcmdldC50cmFuc2FjdGlvblxuXG4gICBcdFx0ICAgICB0aGlzLm1hcHBlci5zdG9yZXMuZm9yRWFjaCgoc3RvcmVLZXkpPT57XG4gICBcdFx0ICAgICAgICAgdGhpcy5jb25uZWN0aW9uLmNyZWF0ZU9iamVjdFN0b3JlKHN0b3JlS2V5LCB7IGtleVBhdGg6ICdpZCcsIGF1dG9JbmNyZW1lbnQ6IHRydWUgfSlcbiAgIFx0XHQgICAgIH0pXG4gICBcdFxuXHRcdFx0XG5cdFx0ICAgICBhd2FpdCB0aGlzLnNldHVwVXNlckNvbmZpZ3VyYXRpb24odHJhbnNhY3Rpb24pXG5cblx0XHQgICAgIGNvbnNvbGUubG9nKCdEQiB1cGdyYWRlIHN1Y2Nlc3NmdWwnKVxuXG5cdFx0ICAgICAvL1J1bnMgY2FsbGJhY2sgaWYgZGVmaW5lZFxuXHRcdCAgICAgaWYgKHRoaXMud29ya2VybWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YXdhaXQgdGhpcy53b3JrZXJtZXNzYWdlKClcblx0XHQgICAgIH1cblxuICAgXHRcdCAgICAgcmVzb2x2ZSh0aGlzLmNvbm5lY3Rpb24pO1xuICAgXHRcdCAgIH07XG4gICBcdFx0IH0pO1xuXG5cbiAgfVxuXG4gIGFzeW5jIHNldHVwVXNlckNvbmZpZ3VyYXRpb24odHJhbnNhY3Rpb24pIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSgnVVNFUl9DT05GSUdVUkFUSU9OJylcblx0XHRcdHN0b3JlLmFkZChDb25maWd1cmF0aW9uKVxuXHRcdFx0Y29uc29sZS5sb2coJ2NvbmZpZyB1cGxvYWQgc3VjY2Vzc2Z1bCcpXG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignY29uZmlnIHVwbG9hZCBmYWlsZWQnKVxuXHRcdH1cblx0fSlcbiAgfVxuXG5cbiAgICAvLyBOZWVkcyB0byBiZSB3b3JrZWQgb25cbiAgICBhc3luYyBnZXRJbnZlbnRvcnkoKSB7XG5cbiAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0aW9uO1xuICAgICAgICBjb25zdCBkYiA9IHRoaXMuY29ubmVjdGlvblxuICAgICAgICBjb25zdCBpbnZlbnRvcnkgPSB7fVxuXG5cblx0Y29uc3QgYWxsU3RvcmVzV2VyZUZldGNoZWQgPSAoZGF0YXNldCkgPT4ge1xuXHRcdGNvbnN0IGZvcm11bGEgPSAgKGUpID0+IGUgPT09IGZhbHNlXG5cdFx0Y29uc3QgcmVzdWx0cyA9IGRhdGFzZXQuc29tZShmb3JtdWxhKVxuXHRcdHJldHVybiAhcmVzdWx0c1xuXHR9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRiU3RvcmVOYW1lcyA9IGRiLm9iamVjdFN0b3JlTmFtZXNcbiAgICAgICAgICAgIGNvbnN0IHN0b3JlcyA9IHt9XG5cblx0ICAgIE9iamVjdC52YWx1ZXMoZGJTdG9yZU5hbWVzKS5mb3JFYWNoKChuYW1lKT0+eyBzdG9yZXNbbmFtZV0gPSBmYWxzZSB9KVxuXG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHN0b3JlcykuZm9yRWFjaCgoc3RvcmUpPT57XG4gICAgICAgICAgICAgICAgaW52ZW50b3J5W3N0b3JlXSA9IFtdXG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0cmFuc2FjdGlvbiA9IGRiLnRyYW5zYWN0aW9uKHN0b3JlLCAncmVhZG9ubHknKVxuICAgICAgICAgICAgICAgIGNvbnN0IG9ialN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoc3RvcmUpXG5cbiAgICAgICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gb2JqU3RvcmUuZ2V0QWxsKClcblxuICAgICAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGUudGFyZ2V0LnJlc3VsdFxuXHRcdCAgICBcblx0XHQgICAgaWYgKHR5cGVvZiByZXN1bHRzID09PSAnb2JqZWN0JyAmJiByZXN1bHRzLmxlbmd0aCA9PT0gMCkge1xuXHRcdFx0c3RvcmVzW3N0b3JlXSA9IHRydWVcblxuXHRcdFx0Y29uc3QgY29tcGFyaXNvbiA9IGFsbFN0b3Jlc1dlcmVGZXRjaGVkKE9iamVjdC52YWx1ZXMoc3RvcmVzKSlcblxuXHRcdFx0ICAgIGlmIChjb21wYXJpc29uKSB7XG5cdFx0XHQgICAgXHR0aGlzLmludmVudG9yeSA9IGludmVudG9yeVxuXHRcdFx0XHRyZXNvbHZlKHRoaXMuaW52ZW50b3J5KVxuXHRcdFx0ICAgIH1cblx0XHQgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50b3J5W3N0b3JlXS5wdXNoKGl0ZW0pXG5cdFx0XHRzdG9yZXNbc3RvcmVdID0gdHJ1ZVxuXG5cdFx0XHRjb25zdCBjb21wYXJpc29uID0gYWxsU3RvcmVzV2VyZUZldGNoZWQoT2JqZWN0LnZhbHVlcyhzdG9yZXMpKVx0XHRcdFxuXG5cdFx0XHRpZiAoY29tcGFyaXNvbikge1xuXHRcdFx0XHR0aGlzLmludmVudG9yeSA9IGludmVudG9yeVxuXHRcdFx0XHRyZXNvbHZlKHRoaXMuaW52ZW50b3J5KVxuXHRcdFx0fVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXF1ZXN0Lm9uZXJyb3IgPSAoZSkgPT4ge3JlamVjdChjb25zb2xlLmVycm9yKGBFcnJvciBwcm9jZXNzaW5nIHJlcXVlc3Q6ICR7ZS5lcnJvcn1gKSl9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICBhc3luYyBpbnNlcnREYXRhKGRhdGEsIHRhcmdldF9zdG9yZSkgeyAgICAgICAgXG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5jb25uZWN0aW9uXG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oW3RhcmdldF9zdG9yZV0sICdyZWFkd3JpdGUnKVxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0YXJnZXRfc3RvcmUpXG5cbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSBzdG9yZS5wdXQoZGF0YSlcblxuICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBhc3luYyAoKT0+IHtcblx0ICAgIFx0YXdhaXQgdGhpcy5jbGVhbnVwKClcblx0XHRyZXNvbHZlKCdJdGVtIGFkZGVkIHRvIERCJylcblx0ICAgIH1cblxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGUpID0+IHtyZWplY3QoY29uc29sZS5lcnJvcihgRXJyb3IgYWRkaW5nIGRhdGE6ICR7ZS5lcnJvcn1gKSl9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIFxuXG5cbiAgICBhc3luYyBkZWxldGVEYXRhKGRhdGEsIHRhcmdldF9zdG9yZSkgeyAgICAgICAgXG4gICAgICAgIGNvbnN0IGRiID0gYXdhaXQgdGhpcy5jb25uZWN0aW9uXG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRyYW5zYWN0aW9uID0gZGIudHJhbnNhY3Rpb24oW3RhcmdldF9zdG9yZV0sICdyZWFkd3JpdGUnKVxuICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZSh0YXJnZXRfc3RvcmUpXG5cbiAgICAgICAgICAgIGlmIChkYXRhPy5pZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRhLmlkXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHN0b3JlLmRlbGV0ZShpdGVtKVxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbnN1Y2Nlc3MgPSBhc3luYyAoKT0+IHtcblx0XHRcdGF3YWl0IHRoaXMuY2xlYW51cCgpXG5cdFx0XHRyZXNvbHZlKCdJdGVtIHJlbW92ZWQgZnJvbSBEQicpXG5cdFx0fVxuXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKGUpID0+IHtyZWplY3QoY29uc29sZS5lcnJvcihgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgYXR0ZW1wdGluZyB0byBwZXJmb3JtIERFTEVURSBvcGVyYXRpb246ICR7ZS5lcnJvcn1gKSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlamVjdChjb25zb2xlLmVycm9yKGBJdGVtIHRvIGRlbGV0ZSBkb2VzIG5vdCBoYXZlIGEgdmFsaWQgc2NoZW1hIGZvciB0aGlzIGRhdGFiYXNlLmApKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuXG5cbiAgICBhc3luYyBjbGVhbnVwKCkge1xuICAgIFx0dGhpcy5pbnZlbnRvcnkgPSBhd2FpdCB0aGlzLmdldEludmVudG9yeSgpXG5cdGlmICh0aGlzLndvcmtlcm1lc3NhZ2UgPT09ICdmdW5jdGlvbicpIGF3YWl0IHRoaXMud29ya2VybWVzc2FnZSgpXG4gICAgfVxufVxuXG5cblxuXG5leHBvcnQgY2xhc3MgREJXb3JrZXIgZXh0ZW5kcyBEYXRhYmFzZUFkYXB0ZXIge1xuXHRjb25zdHJ1Y3Rvcigpe1xuXHRcdHN1cGVyKClcblx0XHRcblx0fVx0XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEYXRhYmFzZUFkYXB0ZXIgZnJvbSAnQHVuaXZlcnNhbC9IYW5kbGVycy9pbmRleGVkREJoYW5kbGVyLmpzJ1xuXG5jb25zdCBOT1RBVEVfTEFORElOR19QQUdFID0gJy4vaW5kZXguaHRtbCc7XG5jb25zdCBDSFJPTUVfTkVXVEFCID0gJ2Nocm9tZTovL25ld3RhYi8nXG5cbmxldCBkYiwgbGF1bmNoQmVoYXZpb3I7XG5cblxuXG5cblxuLypcbkVWRU5UIExJU1RFTkVSXG5cdEZpcmVzIG9uIENocm9tZSBzdGFydHVwLiBJcyBvbmUgb2YgMiBjaHJvbWUgZXZlbnQgbGlzdGVuZXJzXG5cdHRoYXQgZmlyZXMgYm9vdHN0cmFwQXBwbGljYXRpb24oKS5cbiovXG5jaHJvbWUucnVudGltZS5vblN0YXJ0dXAuYWRkTGlzdGVuZXIoYXN5bmMgKCk9PiB7XG5cdGF3YWl0IGJvb3RzdHJhcEFwcGxpY2F0aW9uKClcblxuXHRpZiAobGF1bmNoQmVoYXZpb3IgJiYgbGF1bmNoQmVoYXZpb3IgPT09ICdvbk5ld1RhYicpIHtcblx0XHRhd2FpdCBzcGF3bk5vdGF0ZVRhYigpXG5cdH1cbn0pXG5cblxuLypcbkVWRU5UIExJU1RFTkVSOlxuXHRGaXJlcyBhbmQgcnVucyB0aGUgc3Bhd25UYWIoKSBmdW5jdGlvbiBvbiBuZXcgdGFiIGlmIHVzZXIgXG5cdGNvbmZpZ3VyYXRpb24gaGFzICdvbk5ld1RhYicgZW5hYmxlZC5cbiovXG5jaHJvbWUudGFicy5vbkNyZWF0ZWQuYWRkTGlzdGVuZXIoYXN5bmMgKCk9PiB7XG5cdGF3YWl0IHVwZGF0ZUJhY2tncm91bmRWYXJpYWJsZXMoKVxuXHRpZiAobGF1bmNoQmVoYXZpb3IgPT09ICdvbk5ld1RhYicpIGF3YWl0IHNwYXduTm90YXRlVGFiKClcbn0pXG5cblxuXG4vKlxuRVZFTlQgTElTVEVORVI6XG4qL1xuY2hyb21lLmFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIoYXN5bmMoKSA9PiB7XG5cdGF3YWl0IHVwZGF0ZUJhY2tncm91bmRWYXJpYWJsZXMoKVxuXHRpZiAobGF1bmNoQmVoYXZpb3IgPT09ICdvbkNsaWNrUG9wdXAnKSBhd2FpdCBzcGF3bk5vdGF0ZVRhYigpXG59KVxuXG5cblxuLypcbkVWRU5UIExJU1RFTkVSOlxuXHRGaXJlcyB3aGVuIGFuIGluY29taW5nIGRhdGFiYXNlIGNvbm5lY3Rpb24gaXMgcmVjZWl2ZWQgYW5kXHRcblx0ZGVsZWdhdGVzIGFsbCBkYXRhYmFzZSBvcGVyYXRpb25zIHRvIHRoZSBkYXRhYmFzZVJlcXVlc3QoKVxuXHRmdW5jdGlvbi5cbiovXG5jaHJvbWUucnVudGltZS5vbkNvbm5lY3QuYWRkTGlzdGVuZXIoKHBvcnQpID0+IHtcbiAgaWYgKHBvcnQubmFtZSA9PT0gJ0RBVEFCQVNFX0NPTk5FQ1RJT04nKSB7XG4gICAgcG9ydC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoYXN5bmMgKG1lc3NhZ2UpID0+IHtcblx0YXdhaXQgZGF0YWJhc2VSZXF1ZXN0KHBvcnQsIG1lc3NhZ2UpXG4gICAgfSk7XG4gIH1cbn0pO1xuXG5cblxuLypcbkZVTkNUSU9OOlxuXHRDb3JlIGZ1bmN0aW9uIHRoYXQgaW5pdGlhbGl6ZXMgaW5kZXhlZERCIGNvbm5lY3Rpb24gZm9yIGFwcGxpY2F0aW9uXG5cdGNvbXBvbmVudHMgdG8gdXRpbGl6ZVxuKi9cbmNvbnN0IGluaXRpYWxpemVEYXRhYmFzZSA9IGFzeW5jICgpID0+IHsgXG5cdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0ZGIgPSBhd2FpdCBuZXcgRGF0YWJhc2VBZGFwdGVyOyBcblx0XHRhd2FpdCBkYi5pbnZlbnRvcnlcblx0XHRyZXNvbHZlKGRiKVxuXHR9KVxufVxuXG5cblxuLypcbkZVTkNUSU9OOlxuXHRJbmplY3RzIHRoZSBOb3RhdGUgc3RhcnRpbmcgcGFnZSB3aGVuIHRoZSBOZXcgVGFiIGJ1dHRvbiBpc1x0XG5cdGNsaWNrZWRcbiovXG5jb25zdCBzcGF3bk5vdGF0ZVRhYiA9IGFzeW5jICgpID0+IHtcblx0Y2hyb21lLnRhYnMucXVlcnkoeyBhY3RpdmU6IHRydWUsIGN1cnJlbnRXaW5kb3c6IHRydWUgfSwgKHRhYnMpID0+IHtcblx0XHRjb25zdCB0YWIgPSB0YWJzWzBdXG5cblxuXHRcdGlmICh0YWI/LnVybCA9PSBDSFJPTUVfTkVXVEFCIHx8IHRhYj8ucGVuZGluZ1VybCA9PSBDSFJPTUVfTkVXVEFCKSB7XG5cdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlbWVudCBub3QgZXhlY3V0ZWQnKVxuXHRcdFx0Y29uc29sZS5sb2coKHRhYj8udXJsID8gKCdUQUIgVVJMOiAnLCB0YWI/LnVybCkgOiAnJykpXG5cdFx0XHRjb25zb2xlLmxvZygnUEVORElORyBUQUIgVVJMOiAnLCB0YWI/LnBlbmRpbmdVcmwpXG5cdFx0fVxuXG5cdH0pXHRcbn1cblxuXG5cbi8qXG5GVU5DVElPTjpcblx0VXBkYXRlcyBCYWNrZ3JvdW5kIFdvcmtlciB2YXJpYWJsZXMsIHdoaWNoIGlzIHR5cGljYWxseSBvbmx5IHJlcXVpcmVkIGFmdGVyIGEgQ1JVRCBPcFx0XG5cdGluIFVTRVJfQ09ORklHVVJBVElPTiBJREIgU3RvcmVcbiovXG5jb25zdCB1cGRhdGVCYWNrZ3JvdW5kVmFyaWFibGVzID0gYXN5bmMgKCkgPT4ge1xuXHRpZiAoZGIpIHtcblx0XHRsYXVuY2hCZWhhdmlvciA9IGRiLmludmVudG9yeS5VU0VSX0NPTkZJR1VSQVRJT05bMF0uTm90YXRlLnBhZ2UucGFnZU9wZW5CZWhhdmlvci52YWx1ZVx0XG5cdH0gZWxzZSB7XG5cdFx0YXdhaXQgaW5pdGlhbGl6ZURhdGFiYXNlKClcblx0XHRhd2FpdCB1cGRhdGVCYWNrZ3JvdW5kVmFyaWFibGVzKClcblx0fVxufVxuXG5cblxuLypcbkZVTkNUSU9OOlxuXHRJbnRpYWxpemVzIGFwcGxpY2F0aW9uIGJ5IGdyYWJiaW5nIElEQiBTdG9yZXMgKyB1cGRhdGluZyBuZWNlc3NhcnkgYmFja2dyb3VuZCB3b3JrZXIgXG5cdHZhcmlhYmxlcy4gU2hvdWxkIG9ubHkgZmlyZSBAIGJyb3dzZXIgbGF1bmNoIC8gZXh0ZW5zaW9uIGluc3RhbGwuXG4qL1xuY29uc3QgYm9vdHN0cmFwQXBwbGljYXRpb24gPSBhc3luYyAoKSA9PiB7XG5cdGF3YWl0IGluaXRpYWxpemVEYXRhYmFzZSgpXG5cdGlmIChkYikge1xuXHRcdGF3YWl0IHVwZGF0ZUJhY2tncm91bmRWYXJpYWJsZXMoKVxuXHR9IGVsc2UgYXdhaXQgaW5pdGlhbGl6ZURhdGFiYXNlKClcbn1cblxuXG5cbi8qXG5GVU5DVElPTjpcblx0SGFuZGxlcyBhbGwgaW5ib3VuZCBJREIgQ1JVRCBPcCBSZXF1ZXN0cyBjb21pbmcgZnJvbSBib3RoIE5vdGF0ZS5qc3ggcGFnZSArIENvbnRlbnRcblx0U2NyaXB0LiBVcGRhdGVzIG5lY2Vzc2FyeSBiYWNrZ3JvdW5kIGNvbXBvbmVudHMgcG9zdCBEQiBDUlVEIE9wIGRlcGVuZGVudCBvbiB3aGF0IElEQiBcblx0c3RvcmUgaXMgYmVpbmcgb3BlcmF0ZWQgb24gYXMgd2VsbCBhcyB3aGF0IENSVUQgT3AgaXMgYmVpbmcgcGVyZm9ybWVkLlxuKi9cbmNvbnN0IGRhdGFiYXNlUmVxdWVzdCA9IGFzeW5jIChwb3J0LCBtZXNzYWdlKSA9PiB7XG5cdGlmICgodHlwZW9mIHBvcnQgPT09ICdvYmplY3QnKSAmJiAodHlwZW9mIG1lc3NhZ2UgPT09ICdvYmplY3QnKSkge1xuXHRcdGxldCBkYXRhLHN0b3JlO1xuXG5cdFx0c3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcblx0XHRcdGNhc2UgJ0dFVF9EQVRBQkFTRSc6IFxuXHRcdFx0XHRwb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0RBVEFCQVNFJywgY29udGVudDogZGIgfSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XG5cblx0XHRcdGNhc2UgJ1BPU1RfREFUQUJBU0UnOiBcblx0XHRcdFx0IGRhdGEgPSBtZXNzYWdlPy5jb250ZW50Py5kYXRhXG5cdFx0XHRcdCBzdG9yZSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LnN0b3JlXG5cblx0XHRcdFx0Y29uc3QgaW5zZXJ0T3BlcmF0aW9uID0gYXN5bmMgKCkgPT4ge1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpZiAoIGRhdGEgJiYgc3RvcmUgJiYgZGIuaW5zZXJ0RGF0YSApIHtcblx0XHRcdFx0XHQgXHRcdGF3YWl0IGRiLmluc2VydERhdGEoZGF0YSwgc3RvcmUpXG5cdFx0XHRcdFx0XHRcdGF3YWl0IGluaXRpYWxpemVEYXRhYmFzZSgpXG5cblx0XHRcdFx0XHRcdFx0Ly8gU2luY2Ugb25seSBVcGRhdGUgT3BzIHdpbGwgYmUgcGVyZm9ybWVkIG9uIHRoaXMgc3RvcmUsIGl0cyBzYWZlXG5cdFx0XHRcdFx0XHRcdC8vIHRvIGFsd2F5cyBhc3N1bWUgdGhhdCB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJhbiBhZnRlciBldmVyeVxuXHRcdFx0XHRcdFx0XHQvLyB1c2VyIGNvbmZpZ3VyYXRpb24gdXBkYXRlLlxuXHRcdFx0XHRcdFx0XHRpZiAoc3RvcmUgPT09ICdVU0VSX0NPTkZJR1VSQVRJT04nKSBhd2FpdCB1cGRhdGVCYWNrZ3JvdW5kVmFyaWFibGVzKClcblxuXHRcdFx0XHRcdFx0XHRwb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0RBVEFCQVNFJywgY29udGVudDogZGIgfSlcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdGRlYnVnZ2VyIFxuXHRcdFx0XHRcdFx0XHRhd2FpdCBpbml0aWFsaXplRGF0YWJhc2UoKVxuXHRcdFx0XHRcdFx0XHRhd2FpdCBpbnNlcnRPcGVyYXRpb24oKVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0XHRcdGRlYnVnZ2VyXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YXdhaXQgaW5zZXJ0T3BlcmF0aW9uKClcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdFxuXG5cdFx0XHRjYXNlICdERUxFVEVfREFUQUJBU0UnOiBcblx0XHRcdFx0ZGF0YSA9IG1lc3NhZ2U/LmNvbnRlbnQ/LmRhdGFcblx0XHRcdFx0c3RvcmUgPSBtZXNzYWdlPy5jb250ZW50Py5zdG9yZVxuXG5cdFx0XHRcdGNvbnN0IGRlbGV0ZU9wZXJhdGlvbiA9IGFzeW5jICgpID0+IHtcblx0XHRcdFx0XHRpZiAoIGRhdGEgJiYgc3RvcmUgJiYgZGIuZGVsZXRlRGF0YSApIHtcblx0XHRcdFx0XHRcdGF3YWl0IGRiLmRlbGV0ZURhdGEoZGF0YSwgc3RvcmUpXG5cdFx0XHRcdFx0XHRhd2FpdCBpbml0aWFsaXplRGF0YWJhc2UoKVxuXHRcdFx0XHRcdFx0cG9ydC5wb3N0TWVzc2FnZSh7IHR5cGU6ICdEQVRBQkFTRScsIGNvbnRlbnQ6IGRiIH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGRlYnVnZ2VyXG5cdFx0XHRcdFx0XHRhd2FpdCBpbml0aWFsaXplRGF0YWJhc2UoKVxuXHRcdFx0XHRcdFx0YXdhaXQgZGVsZXRlT3BlcmF0aW9uKClcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRhd2FpdCBkZWxldGVPcGVyYXRpb24oKVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0XG5cblx0XHRcdGNhc2UgJ1JFTE9BRF9EQVRBQkFTRSc6IFxuXG5cdFx0XHRcdGlmICghZGIpIHtcblx0XHRcdFx0XHRhd2FpdCBpbml0aWFsaXplRGF0YWJhc2UoKVxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdkYXRhYmFzZSBiZWluZyBzZW50OiAnLCBkYilcblx0XHRcdFx0XHRwb3J0LnBvc3RNZXNzYWdlKHsgdHlwZTogJ0RBVEFCQVNFJywgY29udGVudDogZGIgfSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxufVxuXG5cblxuXG5cblxuLypcbkRFUFJFQ0FURUQgRlVOQ1RJT046XG5cdEJyb2FkY2FzdHMgdGhlIERCQWRhcHRlciBpbnN0YW5jZSB0byB0aGUgYWN0aXZlIHRhYiB0aGF0IGhvc3RzIFxuXHRhbiBleHRlbnNpb24gY29tcG9uZW50IChBS0EgY29udGVudCBzY3JpcHQvb3RoZXIgZXh0ZW5zaW9uIHBhZ2VzKVxuKi9cbmNvbnN0IGJyb2FkY2FzdERCQ29ubmVjdGlvbiA9IGFzeW5jIChkYikgPT4ge1xuXG5cdGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG5cdFx0Y29uc3QgdGFiID0gdGFic1swXS5pZFxuXHRcdFxuXHRcdGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYiwgeyBcblx0XHRcdHR5cGU6ICdEQVRBQkFTRV9DT05ORUNUSU9OJywgXG5cdFx0XHRjb250ZW50OiBkYiBcblx0XHR9KVxuXHR9KVx0XG59XG5cblxuXG5cblxuIl0sIm5hbWVzIjpbIlVzZXJDb25maWd1cmF0aW9uIiwiTm90YXRlIiwic2VhcmNoIiwicHJlZmVycmVkRW5naW5lIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsIm9wdGlvbnMiLCJzZWFyY2hOb3RlcyIsInBhZ2UiLCJwYWdlT3BlbkJlaGF2aW9yIiwiYmFja2dyb3VuZFdhbGxwYXBlciIsIm5vdGVNb2RhbCIsInByZWZlcnJlZENvbG9yIiwiV2ViQ29udGVudCIsInRvb2xzIiwiYmVoYXZpb3IiLCJuZXdOb3RlUG9wdXAiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwiaSIsIlN5bWJvbCIsImEiLCJpdGVyYXRvciIsImMiLCJhc3luY0l0ZXJhdG9yIiwidSIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwid3JhcCIsIkdlbmVyYXRvciIsImNyZWF0ZSIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJ0eXBlIiwiYXJnIiwiY2FsbCIsImgiLCJsIiwiZiIsInMiLCJ5IiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsInAiLCJkIiwiZ2V0UHJvdG90eXBlT2YiLCJ2IiwidmFsdWVzIiwiZyIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsImludm9rZSIsIl90eXBlb2YiLCJyZXNvbHZlIiwiX19hd2FpdCIsInRoZW4iLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsIkVycm9yIiwiZG9uZSIsIm1ldGhvZCIsImRlbGVnYXRlIiwibWF5YmVJbnZva2VEZWxlZ2F0ZSIsInNlbnQiLCJfc2VudCIsImRpc3BhdGNoRXhjZXB0aW9uIiwiYWJydXB0IiwiVHlwZUVycm9yIiwicmVzdWx0TmFtZSIsIm5leHQiLCJuZXh0TG9jIiwicHVzaFRyeUVudHJ5IiwidHJ5TG9jIiwiY2F0Y2hMb2MiLCJmaW5hbGx5TG9jIiwiYWZ0ZXJMb2MiLCJ0cnlFbnRyaWVzIiwicHVzaCIsInJlc2V0VHJ5RW50cnkiLCJjb21wbGV0aW9uIiwicmVzZXQiLCJpc05hTiIsImxlbmd0aCIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsIm1hcmsiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImF3cmFwIiwiYXN5bmMiLCJQcm9taXNlIiwia2V5cyIsInJldmVyc2UiLCJwb3AiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicnZhbCIsImhhbmRsZSIsImNvbXBsZXRlIiwiZmluaXNoIiwiX2NhdGNoIiwiZGVsZWdhdGVZaWVsZCIsImFzeW5jR2VuZXJhdG9yU3RlcCIsImdlbiIsInJlamVjdCIsIl9uZXh0IiwiX3Rocm93Iiwia2V5IiwiaW5mbyIsImVycm9yIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJmbiIsInNlbGYiLCJhcmdzIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJlcnIiLCJ1bmRlZmluZWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImRlc2NyaXB0b3IiLCJfdG9Qcm9wZXJ0eUtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiU3RyaW5nIiwiTnVtYmVyIiwiQ29uZmlndXJhdGlvbiIsIkRhdGFiYXNlQWRhcHRlciIsIm1hcHBlciIsInN0b3JlcyIsImNvbm5lY3Rpb24iLCJjb25uZWN0VG9EQiIsImludmVudG9yeSIsImdldEludmVudG9yeSIsInJlcXVlc3QiLCJfY29ubmVjdFRvREIiLCJfY2FsbGVlMyIsIl90aGlzIiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwiREJCcmlnZSIsImluZGV4ZWREQiIsIm9wZW4iLCJvbnN1Y2Nlc3MiLCJfcmVmIiwiX2NhbGxlZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJ3b3JrZXJtZXNzYWdlIiwicmVzdWx0IiwiX3giLCJvbmVycm9yIiwiY29uc29sZSIsIm9udXBncmFkZW5lZWRlZCIsIl9yZWYyIiwiX2NhbGxlZTIiLCJ0cmFuc2FjdGlvbiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImxvZyIsInN0b3JlS2V5IiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiYXV0b0luY3JlbWVudCIsInNldHVwVXNlckNvbmZpZ3VyYXRpb24iLCJfeDIiLCJfc2V0dXBVc2VyQ29uZmlndXJhdGlvbiIsIl9jYWxsZWU0IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0Iiwic3RvcmUiLCJvYmplY3RTdG9yZSIsImFkZCIsIl94MyIsIl9nZXRJbnZlbnRvcnkiLCJfY2FsbGVlNiIsIl90aGlzMiIsImRiIiwiYWxsU3RvcmVzV2VyZUZldGNoZWQiLCJfY2FsbGVlNiQiLCJfY29udGV4dDYiLCJkYXRhc2V0IiwiZm9ybXVsYSIsInJlc3VsdHMiLCJzb21lIiwiX3JlZjMiLCJfY2FsbGVlNSIsImRiU3RvcmVOYW1lcyIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIm9iamVjdFN0b3JlTmFtZXMiLCJvYmpTdG9yZSIsImdldEFsbCIsImNvbXBhcmlzb24iLCJpdGVtIiwiY29uY2F0IiwiX3g0IiwiX3g1IiwiX2luc2VydERhdGEiLCJfY2FsbGVlOCIsImRhdGEiLCJ0YXJnZXRfc3RvcmUiLCJfdGhpczMiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJwdXQiLCJfY2FsbGVlNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsImNsZWFudXAiLCJpbnNlcnREYXRhIiwiX3g2IiwiX3g3IiwiX2RlbGV0ZURhdGEiLCJfY2FsbGVlMTAiLCJfdGhpczQiLCJfY2FsbGVlMTAkIiwiX2NvbnRleHQxMCIsImlkIiwiX2NhbGxlZTkiLCJfY2FsbGVlOSQiLCJfY29udGV4dDkiLCJkZWxldGVEYXRhIiwiX3g4IiwiX3g5IiwiX2NsZWFudXAiLCJfY2FsbGVlMTEiLCJfY2FsbGVlMTEkIiwiX2NvbnRleHQxMSIsImRlZmF1bHQiLCJEQldvcmtlciIsIl9EYXRhYmFzZUFkYXB0ZXIiLCJfY2FsbFN1cGVyIiwiX2luaGVyaXRzIiwiTk9UQVRFX0xBTkRJTkdfUEFHRSIsIkNIUk9NRV9ORVdUQUIiLCJsYXVuY2hCZWhhdmlvciIsImNocm9tZSIsInJ1bnRpbWUiLCJvblN0YXJ0dXAiLCJhZGRMaXN0ZW5lciIsImJvb3RzdHJhcEFwcGxpY2F0aW9uIiwic3Bhd25Ob3RhdGVUYWIiLCJ0YWJzIiwib25DcmVhdGVkIiwidXBkYXRlQmFja2dyb3VuZFZhcmlhYmxlcyIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsIm9uQ29ubmVjdCIsInBvcnQiLCJvbk1lc3NhZ2UiLCJfcmVmNCIsIm1lc3NhZ2UiLCJkYXRhYmFzZVJlcXVlc3QiLCJpbml0aWFsaXplRGF0YWJhc2UiLCJfcmVmNSIsIl9yZWY2IiwiX3JlZjciLCJxdWVyeSIsImFjdGl2ZSIsImN1cnJlbnRXaW5kb3ciLCJ0YWIiLCJ1cmwiLCJwZW5kaW5nVXJsIiwidXBkYXRlIiwiZ2V0VVJMIiwiX3JlZjgiLCJVU0VSX0NPTkZJR1VSQVRJT04iLCJfcmVmOSIsIl9yZWYxMCIsIl9jYWxsZWUxMiIsIl9tZXNzYWdlJGNvbnRlbnQiLCJfbWVzc2FnZSRjb250ZW50MiIsIl9tZXNzYWdlJGNvbnRlbnQzIiwiX21lc3NhZ2UkY29udGVudDQiLCJpbnNlcnRPcGVyYXRpb24iLCJkZWxldGVPcGVyYXRpb24iLCJfY2FsbGVlMTIkIiwiX2NvbnRleHQxMiIsInQwIiwicG9zdE1lc3NhZ2UiLCJjb250ZW50IiwiX3JlZjExIiwiX3JlZjEyIiwiYnJvYWRjYXN0REJDb25uZWN0aW9uIiwiX3JlZjEzIiwiX2NhbGxlZTEzIiwiX2NhbGxlZTEzJCIsIl9jb250ZXh0MTMiLCJzZW5kTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=