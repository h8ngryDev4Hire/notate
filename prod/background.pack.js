/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Universal/Handlers/NoteHandler.js":
/*!***********************************************!*\
  !*** ./src/Universal/Handlers/NoteHandler.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoteHandler)
/* harmony export */ });
/* harmony import */ var _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageHandler.js */ "./src/Universal/Handlers/StorageHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// NoteHandler Class Definition
var NoteHandler = /*#__PURE__*/function () {
  function NoteHandler() {
    _classCallCheck(this, NoteHandler);
  }
  return _createClass(NoteHandler, null, [{
    key: "createNote",
    value: (
    /*
    	Method that creates new Note by 1st assigning it
    */
    function () {
      var _createNote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(title, content, origin) {
        var notes, newNoteId, newNote;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              debugger;
              _context.next = 3;
              return _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].getNotes();
            case 3:
              notes = _context.sent;
              newNoteId = notes.length + 1;
              newNote = new this.Note(newNoteId, title, content, origin);
              _context.next = 8;
              return _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].setNote(newNote);
            case 8:
              debugger;
              return _context.abrupt("return", newNote);
            case 10:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createNote(_x, _x2, _x3) {
        return _createNote.apply(this, arguments);
      }
      return createNote;
    }())
  }, {
    key: "deleteNote",
    value: function () {
      var _deleteNote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(noteId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteNote(noteId);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function deleteNote(_x4) {
        return _deleteNote.apply(this, arguments);
      }
      return deleteNote;
    }()
  }, {
    key: "updateNote",
    value: function () {
      var _updateNote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(noteId) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function updateNote(_x5) {
        return _updateNote.apply(this, arguments);
      }
      return updateNote;
    }() // Add more note-related operations as needed
  }]);
}();
// Note Class Definition
/*
	DO NOT USE THIS CONSTRUCTOR CLASS EXPLICITLY. ONLY CALL SIBLING 
	METHODS THAT WILL CREATE THE NOTE USING THIS CONSTRUCTOR CLASS

	a Note object that is used across the application and fills out the 
	NoteCard component.

	Note.id:	Contains the id of the note that is used by StorageHandler and
			other components to differentiate each note from each other.
	Note.title:	Title of the note that is visually referenced by NoteCard component.
	Note.content:	Content of the note that is visually referenced by NoteCard component.
	Note.origin:	The URL of which the note was created at.
	Note.created:	Timestamp of when note was created using Date() class 
	Note.modified:	Timestamp of when note was modified using Date() class
*/
_defineProperty(NoteHandler, "Note", /*#__PURE__*/function () {
  function _class(id, title, content, origin) {
    var modified = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : new Date();
    _classCallCheck(this, _class);
    this.id = id;
    this.title = title;
    this.content = content;
    this.origin = origin;
    this.created = new Date().toString();
    this.modified = modified.toString();
  }
  return _createClass(_class);
}());


/***/ }),

/***/ "./src/Universal/Handlers/NotebookHandler.js":
/*!***************************************************!*\
  !*** ./src/Universal/Handlers/NotebookHandler.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotebookHandler)
/* harmony export */ });
/* harmony import */ var _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StorageHandler.js */ "./src/Universal/Handlers/StorageHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


// NotebookManager Class Definition
var NotebookHandler = /*#__PURE__*/function () {
  function NotebookHandler() {
    _classCallCheck(this, NotebookHandler);
  }
  return _createClass(NotebookHandler, null, [{
    key: "createNotebook",
    value: function () {
      var _createNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(title, description) {
        var notebooks, newNotebookId, newNotebook;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].getNotebooks();
            case 2:
              notebooks = _context.sent;
              newNotebookId = notebooks.length + 1;
              newNotebook = new this.Notebook(newNotebookId, title, description, []);
              _context.next = 7;
              return _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].saveNotebook(newNotebook);
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function createNotebook(_x, _x2) {
        return _createNotebook.apply(this, arguments);
      }
      return createNotebook;
    }()
  }, {
    key: "deleteNotebook",
    value: function () {
      var _deleteNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(notebookId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteNotebook(notebookId);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function deleteNotebook(_x3) {
        return _deleteNotebook.apply(this, arguments);
      }
      return deleteNotebook;
    }()
  }, {
    key: "getNoteByID",
    value: function () {
      var _getNoteByID = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(notebook) {
        var notes;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return Promise.all(notebook.collection.slice(0, 4).map( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id, index) {
                  var note;
                  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].getNote(id);
                      case 2:
                        note = _context3.sent;
                        return _context3.abrupt("return", note);
                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x5, _x6) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 2:
              notes = _context4.sent;
              return _context4.abrupt("return", notes);
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function getNoteByID(_x4) {
        return _getNoteByID.apply(this, arguments);
      }
      return getNoteByID;
    }() // Add more notebook-related operations as needed
  }]);
}();
// Notebook Class Definition
_defineProperty(NotebookHandler, "Notebook", /*#__PURE__*/function () {
  function _class(id, title, description, collection) {
    _classCallCheck(this, _class);
    this.id = id;
    this.title = title;
    this.description = description;
    this.collection = collection;
  }
  return _createClass(_class, [{
    key: "assignNoteToCollection",
    value: function () {
      var _assignNoteToCollection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(note) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.collection.push(note.id);
              debugger;
              _StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].updateNotebook(this);
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function assignNoteToCollection(_x7) {
        return _assignNoteToCollection.apply(this, arguments);
      }
      return assignNoteToCollection;
    }()
  }, {
    key: "removeNoteFromCollection",
    value: function () {
      var _removeNoteFromCollection = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(note) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this.collection.remove(note.id);
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function removeNoteFromCollection(_x8) {
        return _removeNoteFromCollection.apply(this, arguments);
      }
      return removeNoteFromCollection;
    }()
  }]);
}());


/***/ }),

/***/ "./src/Universal/Handlers/StorageHandler.js":
/*!**************************************************!*\
  !*** ./src/Universal/Handlers/StorageHandler.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StorageHandler)
/* harmony export */ });
/* harmony import */ var _NotebookHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotebookHandler.js */ "./src/Universal/Handlers/NotebookHandler.js");
/* harmony import */ var _NoteHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoteHandler.js */ "./src/Universal/Handlers/NoteHandler.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



// StorageManager Class
var StorageHandler = /*#__PURE__*/function () {
  function StorageHandler() {
    _classCallCheck(this, StorageHandler);
  }
  return _createClass(StorageHandler, null, [{
    key: "getNotebooks",
    value: // Methods Definitions
    function () {
      var _getNotebooks = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.get(_this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS, function (data) {
                  var accessedDataExists = data[_this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS] ? data[_this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS] : false;
                  var notebooks = [];
                  if (accessedDataExists) {
                    accessedDataExists.forEach(function (notebook) {
                      notebooks.push(Object.setPrototypeOf(notebook, _NotebookHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].Notebook.prototype));
                    });
                  }
                  resolve(data[_this.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS] || []);
                });
              }));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getNotebooks() {
        return _getNotebooks.apply(this, arguments);
      }
      return getNotebooks;
    }()
  }, {
    key: "getNotebook",
    value: function () {
      var _getNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(notebookId) {
        var data;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getNotebooks();
            case 2:
              data = _context2.sent;
              return _context2.abrupt("return", data.find(function (notebook) {
                return notebook.id === notebookId;
              }));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function getNotebook(_x) {
        return _getNotebook.apply(this, arguments);
      }
      return getNotebook;
    }()
  }, {
    key: "saveNotebook",
    value: function () {
      var _saveNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(notebook) {
        var _this2 = this;
        var notebooks, updatedNotebooks;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return this.getNotebooks();
            case 2:
              notebooks = _context3.sent;
              updatedNotebooks = [].concat(_toConsumableArray(notebooks), [notebook]);
              return _context3.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.set(_defineProperty({}, _this2.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS, updatedNotebooks), function () {
                  resolve();
                });
              }));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function saveNotebook(_x2) {
        return _saveNotebook.apply(this, arguments);
      }
      return saveNotebook;
    }()
  }, {
    key: "updateNotebook",
    value: function () {
      var _updateNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(notebook) {
        var _this3 = this;
        var notebooks, index;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return this.getNotebooks();
            case 2:
              notebooks = _context4.sent;
              index = notebooks.findIndex(function (n) {
                return n.id === notebook.id;
              });
              if (!(index !== -1)) {
                _context4.next = 7;
                break;
              }
              notebooks[index] = Object.setPrototypeOf(notebook, _NotebookHandler_js__WEBPACK_IMPORTED_MODULE_0__["default"].Notebook.prototype);
              return _context4.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.set(_defineProperty({}, _this3.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS, notebooks), function () {
                  resolve();
                });
              }));
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function updateNotebook(_x3) {
        return _updateNotebook.apply(this, arguments);
      }
      return updateNotebook;
    }()
  }, {
    key: "getNotes",
    value: function () {
      var _getNotes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.get([_this4.CHROME_STORAGE_CONFIGURATION.NOTES], function (data) {
                  if (data !== null && data !== void 0 && data.NOTES) {
                    var notes = [];
                    var accessNoteKeys = Object.entries(data)[0][1];
                    accessNoteKeys.forEach(function (note) {
                      Object.setPrototypeOf(note, _NoteHandler_js__WEBPACK_IMPORTED_MODULE_1__["default"].Note.prototype);
                      notes.push(note);
                    });
                    resolve(notes);
                  }
                  resolve(data[_this4.CHROME_STORAGE_CONFIGURATION.NOTES] || []);
                });
              }));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function getNotes() {
        return _getNotes.apply(this, arguments);
      }
      return getNotes;
    }()
  }, {
    key: "getNote",
    value: function () {
      var _getNote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(noteID) {
        var _this5 = this;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.get(_this5.CHROME_STORAGE_CONFIGURATION.NOTES, function (data) {
                  Object.entries(data).forEach(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                      key = _ref2[0],
                      val = _ref2[1];
                    Object.entries(val).forEach(function (_ref3) {
                      var _ref4 = _slicedToArray(_ref3, 2),
                        notes = _ref4[0],
                        meta = _ref4[1];
                      if (meta.id == noteID) {
                        var note = Object.setPrototypeOf(meta, _NoteHandler_js__WEBPACK_IMPORTED_MODULE_1__["default"].Note.prototype);
                        resolve(note || []);
                      }
                    });
                  });
                });
              }));
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function getNote(_x4) {
        return _getNote.apply(this, arguments);
      }
      return getNote;
    }()
  }, {
    key: "saveNote",
    value: function () {
      var _saveNote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(note) {
        var _this6 = this;
        var notes, index;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.getNotes();
            case 2:
              notes = _context7.sent;
              note.modified = new Date().toString();

              // If either note was created in Notate app or was never assigned an origin property
              if ((note === null || note === void 0 ? void 0 : note.origin) === undefined || (note === null || note === void 0 ? void 0 : note.origin) === null) {
                note.origin = this.NOTATE_ORIGIN_URL;
              }
              if ((note === null || note === void 0 ? void 0 : note.id) === undefined) {
                // New Note
                note.id = notes.length;
                notes.push(note);
              } else {
                //Existing Note
                index = notes.findIndex(function (n) {
                  return n.id === note.id;
                });
                notes[index] = note;
              }
              return _context7.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.set(_defineProperty({}, _this6.CHROME_STORAGE_CONFIGURATION.NOTES, notes), function () {
                  resolve();
                });
              }));
            case 7:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function saveNote(_x5) {
        return _saveNote.apply(this, arguments);
      }
      return saveNote;
    }()
  }, {
    key: "setNote",
    value: function () {
      var _setNote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(note) {
        var _this7 = this;
        var exists, prevNotes, newNotes;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              exists = false;
              _context8.next = 3;
              return this.getNotes();
            case 3:
              prevNotes = _context8.sent;
              newNotes = []; // Checks if note already exists
              prevNotes.forEach(function (n) {
                if (n.id === note.id) {
                  newNotes.push(note);
                  exists = true;
                } else {
                  newNotes.push(n);
                }
              });
              if (!exists) {
                newNotes.push(note);
              }
              return _context8.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.set(_defineProperty({}, _this7.CHROME_STORAGE_CONFIGURATION.NOTES, newNotes), function () {
                  resolve();
                });
              }));
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function setNote(_x6) {
        return _setNote.apply(this, arguments);
      }
      return setNote;
    }()
  }, {
    key: "deleteNotebook",
    value: function () {
      var _deleteNotebook = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(notebookId) {
        var _this8 = this;
        var notebooks, updatedNotebooks;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return this.getNotebooks();
            case 2:
              notebooks = _context9.sent;
              updatedNotebooks = notebooks.filter(function (notebook) {
                return notebook.id !== notebookId;
              });
              return _context9.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.set(_defineProperty({}, _this8.CHROME_STORAGE_CONFIGURATION.NOTEBOOKS, updatedNotebooks), function () {
                  resolve();
                });
              }));
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function deleteNotebook(_x7) {
        return _deleteNotebook.apply(this, arguments);
      }
      return deleteNotebook;
    }()
  }, {
    key: "deleteNote",
    value: function () {
      var _deleteNote = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(noteId) {
        var _this9 = this;
        var notes, updatedNotes;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.getNotes();
            case 2:
              notes = _context10.sent;
              updatedNotes = notes.filter(function (note) {
                return note.id !== noteId;
              });
              return _context10.abrupt("return", new Promise(function (resolve) {
                chrome.storage.sync.set(_defineProperty({}, _this9.CHROME_STORAGE_CONFIGURATION.NOTES, updatedNotes), function () {
                  resolve();
                });
              }));
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function deleteNote(_x8) {
        return _deleteNote.apply(this, arguments);
      }
      return deleteNote;
    }()
  }]);
}();
// Constants Definitions
_defineProperty(StorageHandler, "CHROME_STORAGE_CONFIGURATION", {
  NOTES: 'NOTES',
  NOTEBOOKS: 'NOTEBOOKS'
});
_defineProperty(StorageHandler, "NOTATE_ORIGIN_URL", "chrome-extension://oafafkiomfjgiiinldeiliabogmpfpke/index.html");


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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./src/Background/background.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _universal_Handlers_StorageHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @universal/Handlers/StorageHandler.js */ "./src/Universal/Handlers/StorageHandler.js");

var NOTATE_LANDING_PAGE = './index.html';
var CHROME_NEWTAB = 'chrome://newtab/';

/* 
	Browser Event Listener that fires when Browser starts.
	Event fired opens Notate page.	
*/
chrome.runtime.onStartup.addListener(function (tab) {
  if (tab.url !== chrome.runtime.getURL(NOTATE_LANDING_PAGE) || tab.url == CHROME_NEWTAB || tab.pendingUrl == CHROME_NEWTAB) {
    chrome.tabs.create({
      url: chrome.runtime.getURL(NOTATE_LANDING_PAGE)
    });
  }
});

/*
	Browser Event Listenr that fires on new tab opened by user
	Event fired opens Notate Page
*/
chrome.tabs.onCreated.addListener(function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    var tab = tabs[0];
    if (tab.url == CHROME_NEWTAB || tab.pendingUrl == CHROME_NEWTAB) {
      chrome.tabs.update(tab.id, {
        url: chrome.runtime.getURL(NOTATE_LANDING_PAGE)
      });
    } else {
      console.log('statement not executed');
      console.log('TAB URL: ', tab.url);
      console.log('PENDING TAB URL: ', tab.pendingUrl);
    }
  });
});
chrome.action.onClicked.addListener(function () {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, function (tabs) {
    var tab = tabs[0].id;
    chrome.tabs.sendMessage(tab, {
      type: 'FUCKU'
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUdJLElBQUksQ0FBQyxDQUFDLENBQUM7SUFHbkIsSUFBSUosR0FBRyxDQUFDQyxHQUFHLElBQUlMLGFBQWEsSUFBSUksR0FBRyxDQUFDRyxVQUFVLElBQUlQLGFBQWEsRUFBRTtNQUNoRTdELE1BQU0sQ0FBQ3FFLElBQUksQ0FBQ0ssTUFBTSxDQUFDVCxHQUFHLENBQUNsSCxFQUFFLEVBQUU7UUFBRW1ILEdBQUcsRUFBRWxFLE1BQU0sQ0FBQzhELE9BQU8sQ0FBQ0ssTUFBTSxDQUFDUCxtQkFBbUI7TUFBRSxDQUFDLENBQUM7SUFDaEYsQ0FBQyxNQUNJO01BQ0plLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHdCQUF3QixDQUFDO01BQ3JDRCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxXQUFXLEVBQUVYLEdBQUcsQ0FBQ0MsR0FBRyxDQUFDO01BQ2pDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRVgsR0FBRyxDQUFDRyxVQUFVLENBQUM7SUFDakQ7RUFFRCxDQUFDLENBQUM7QUFDSCxDQUFDLENBQUM7QUFJRnBFLE1BQU0sQ0FBQzZFLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDZCxXQUFXLENBQUMsWUFBSTtFQUN2Q2hFLE1BQU0sQ0FBQ3FFLElBQUksQ0FBQ0UsS0FBSyxDQUFDO0lBQUVDLE1BQU0sRUFBRSxJQUFJO0lBQUVDLGFBQWEsRUFBRTtFQUFLLENBQUMsRUFBRSxVQUFDSixJQUFJLEVBQUs7SUFDbEUsSUFBTUosR0FBRyxHQUFHSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUN0SCxFQUFFO0lBRXRCaUQsTUFBTSxDQUFDcUUsSUFBSSxDQUFDVSxXQUFXLENBQUNkLEdBQUcsRUFBRTtNQUFFOVAsSUFBSSxFQUFFO0lBQVEsQ0FBQyxDQUFDO0VBRWhELENBQUMsQ0FBQztBQUNILENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvVW5pdmVyc2FsL0hhbmRsZXJzL05vdGVIYW5kbGVyLmpzIiwid2VicGFjazovL3F1aWNrLW5vdGVzLy4vc3JjL1VuaXZlcnNhbC9IYW5kbGVycy9Ob3RlYm9va0hhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvVW5pdmVyc2FsL0hhbmRsZXJzL1N0b3JhZ2VIYW5kbGVyLmpzIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9xdWljay1ub3Rlcy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3F1aWNrLW5vdGVzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcXVpY2stbm90ZXMvLi9zcmMvQmFja2dyb3VuZC9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN0b3JhZ2VIYW5kbGVyIGZyb20gJy4vU3RvcmFnZUhhbmRsZXIuanMnO1xuXG4vLyBOb3RlSGFuZGxlciBDbGFzcyBEZWZpbml0aW9uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlSGFuZGxlciB7XG4gIC8vIE5vdGUgQ2xhc3MgRGVmaW5pdGlvblxuXG4vKlxuXHRETyBOT1QgVVNFIFRISVMgQ09OU1RSVUNUT1IgQ0xBU1MgRVhQTElDSVRMWS4gT05MWSBDQUxMIFNJQkxJTkcgXG5cdE1FVEhPRFMgVEhBVCBXSUxMIENSRUFURSBUSEUgTk9URSBVU0lORyBUSElTIENPTlNUUlVDVE9SIENMQVNTXG5cblx0YSBOb3RlIG9iamVjdCB0aGF0IGlzIHVzZWQgYWNyb3NzIHRoZSBhcHBsaWNhdGlvbiBhbmQgZmlsbHMgb3V0IHRoZSBcblx0Tm90ZUNhcmQgY29tcG9uZW50LlxuXG5cdE5vdGUuaWQ6XHRDb250YWlucyB0aGUgaWQgb2YgdGhlIG5vdGUgdGhhdCBpcyB1c2VkIGJ5IFN0b3JhZ2VIYW5kbGVyIGFuZFxuXHRcdFx0b3RoZXIgY29tcG9uZW50cyB0byBkaWZmZXJlbnRpYXRlIGVhY2ggbm90ZSBmcm9tIGVhY2ggb3RoZXIuXG5cdE5vdGUudGl0bGU6XHRUaXRsZSBvZiB0aGUgbm90ZSB0aGF0IGlzIHZpc3VhbGx5IHJlZmVyZW5jZWQgYnkgTm90ZUNhcmQgY29tcG9uZW50LlxuXHROb3RlLmNvbnRlbnQ6XHRDb250ZW50IG9mIHRoZSBub3RlIHRoYXQgaXMgdmlzdWFsbHkgcmVmZXJlbmNlZCBieSBOb3RlQ2FyZCBjb21wb25lbnQuXG5cdE5vdGUub3JpZ2luOlx0VGhlIFVSTCBvZiB3aGljaCB0aGUgbm90ZSB3YXMgY3JlYXRlZCBhdC5cblx0Tm90ZS5jcmVhdGVkOlx0VGltZXN0YW1wIG9mIHdoZW4gbm90ZSB3YXMgY3JlYXRlZCB1c2luZyBEYXRlKCkgY2xhc3MgXG5cdE5vdGUubW9kaWZpZWQ6XHRUaW1lc3RhbXAgb2Ygd2hlbiBub3RlIHdhcyBtb2RpZmllZCB1c2luZyBEYXRlKCkgY2xhc3NcbiovXG4gIHN0YXRpYyBOb3RlID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKGlkLCB0aXRsZSwgY29udGVudCwgb3JpZ2luLCBtb2RpZmllZCA9IG5ldyBEYXRlKCkpIHtcbiAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgIHRoaXMuY3JlYXRlZCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMubW9kaWZpZWQgPSBtb2RpZmllZC50b1N0cmluZygpO1xuICAgIH1cbiAgfTtcblxuLypcblx0TWV0aG9kIHRoYXQgY3JlYXRlcyBuZXcgTm90ZSBieSAxc3QgYXNzaWduaW5nIGl0XG4qL1xuICBzdGF0aWMgYXN5bmMgY3JlYXRlTm90ZSh0aXRsZSwgY29udGVudCwgb3JpZ2luKSB7XG4gIGRlYnVnZ2VyXG4gIGNvbnN0IG5vdGVzID0gYXdhaXQgU3RvcmFnZUhhbmRsZXIuZ2V0Tm90ZXMoKTtcbiAgY29uc3QgbmV3Tm90ZUlkID0gbm90ZXMubGVuZ3RoICsgMTtcbiAgY29uc3QgbmV3Tm90ZSA9IG5ldyB0aGlzLk5vdGUobmV3Tm90ZUlkLCB0aXRsZSwgY29udGVudCwgb3JpZ2luKTtcbiAgYXdhaXQgU3RvcmFnZUhhbmRsZXIuc2V0Tm90ZShuZXdOb3RlKTtcbiAgZGVidWdnZXJcbiAgcmV0dXJuIG5ld05vdGU7XG59XG5cbiAgc3RhdGljIGFzeW5jIGRlbGV0ZU5vdGUobm90ZUlkKSB7XG4gICAgYXdhaXQgU3RvcmFnZUhhbmRsZXIuZGVsZXRlTm90ZShub3RlSWQpO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZU5vdGUobm90ZUlkKSB7XG5cbiAgfVxuXG4gIC8vIEFkZCBtb3JlIG5vdGUtcmVsYXRlZCBvcGVyYXRpb25zIGFzIG5lZWRlZFxufVxuXG4iLCJpbXBvcnQgU3RvcmFnZUhhbmRsZXIgZnJvbSAnLi9TdG9yYWdlSGFuZGxlci5qcyc7XG5cbi8vIE5vdGVib29rTWFuYWdlciBDbGFzcyBEZWZpbml0aW9uXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3RlYm9va0hhbmRsZXIge1xuICAvLyBOb3RlYm9vayBDbGFzcyBEZWZpbml0aW9uXG4gIHN0YXRpYyBOb3RlYm9vayA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBjb2xsZWN0aW9uKSB7XG4gICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICB0aGlzLmNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uO1xuICAgIH1cblxuXHRhc3luYyBhc3NpZ25Ob3RlVG9Db2xsZWN0aW9uIChub3RlKSB7XG5cdFx0dGhpcy5jb2xsZWN0aW9uLnB1c2gobm90ZS5pZClcblx0XHRkZWJ1Z2dlclxuXHRcdFN0b3JhZ2VIYW5kbGVyLnVwZGF0ZU5vdGVib29rKHRoaXMpXG4gIFx0fVxuXG5cdGFzeW5jIHJlbW92ZU5vdGVGcm9tQ29sbGVjdGlvbiAobm90ZSkge1xuXHRcdHRoaXMuY29sbGVjdGlvbi5yZW1vdmUobm90ZS5pZClcblx0fVxuXG4gIH07XG5cblxuXG4gIHN0YXRpYyBhc3luYyBjcmVhdGVOb3RlYm9vayh0aXRsZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBub3RlYm9va3MgPSBhd2FpdCBTdG9yYWdlSGFuZGxlci5nZXROb3RlYm9va3MoKTtcbiAgICBjb25zdCBuZXdOb3RlYm9va0lkID0gbm90ZWJvb2tzLmxlbmd0aCArIDE7XG4gICAgY29uc3QgbmV3Tm90ZWJvb2sgPSBuZXcgdGhpcy5Ob3RlYm9vayhuZXdOb3RlYm9va0lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIFtdKTtcbiAgICBhd2FpdCBTdG9yYWdlSGFuZGxlci5zYXZlTm90ZWJvb2sobmV3Tm90ZWJvb2spO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGRlbGV0ZU5vdGVib29rKG5vdGVib29rSWQpIHtcbiAgICBhd2FpdCBTdG9yYWdlSGFuZGxlci5kZWxldGVOb3RlYm9vayhub3RlYm9va0lkKTtcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXROb3RlQnlJRCAobm90ZWJvb2spIHtcblx0Y29uc3Qgbm90ZXMgPSBhd2FpdCBQcm9taXNlLmFsbChcblx0XHRub3RlYm9vay5jb2xsZWN0aW9uLnNsaWNlKDAsNCkubWFwKGFzeW5jIChpZCxpbmRleCk9Pntcblx0XHRjb25zdCBub3RlID0gYXdhaXQgU3RvcmFnZUhhbmRsZXIuZ2V0Tm90ZShpZClcblx0XHRyZXR1cm4gbm90ZTtcblx0XHR9KSlcblx0cmV0dXJuIG5vdGVzXHRcblx0fVxuXG5cbiAgLy8gQWRkIG1vcmUgbm90ZWJvb2stcmVsYXRlZCBvcGVyYXRpb25zIGFzIG5lZWRlZFxufVxuIiwiaW1wb3J0IE5vdGVib29rSGFuZGxlciBmcm9tICcuL05vdGVib29rSGFuZGxlci5qcyc7XG5pbXBvcnQgTm90ZUhhbmRsZXIgZnJvbSAnLi9Ob3RlSGFuZGxlci5qcyc7XG5cblxuLy8gU3RvcmFnZU1hbmFnZXIgQ2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JhZ2VIYW5kbGVyIHtcblxuXHQvLyBDb25zdGFudHMgRGVmaW5pdGlvbnNcblx0c3RhdGljICBDSFJPTUVfU1RPUkFHRV9DT05GSUdVUkFUSU9OID0ge1xuXHROT1RFUzogJ05PVEVTJyxcblx0Tk9URUJPT0tTOiAnTk9URUJPT0tTJyxcbn1cblxuXHRzdGF0aWMgTk9UQVRFX09SSUdJTl9VUkwgPSBcImNocm9tZS1leHRlbnNpb246Ly9vYWZhZmtpb21mamdpaWlubGRlaWxpYWJvZ21wZnBrZS9pbmRleC5odG1sXCJcblxuXHQvLyBNZXRob2RzIERlZmluaXRpb25zXG4gIHN0YXRpYyBhc3luYyBnZXROb3RlYm9va3MoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh0aGlzLkNIUk9NRV9TVE9SQUdFX0NPTkZJR1VSQVRJT04uTk9URUJPT0tTLCAoZGF0YSkgPT4ge1xuXHQgICAgICBcdGNvbnN0IGFjY2Vzc2VkRGF0YUV4aXN0cyA9IGRhdGFbdGhpcy5DSFJPTUVfU1RPUkFHRV9DT05GSUdVUkFUSU9OLk5PVEVCT09LU10gPyBkYXRhW3RoaXMuQ0hST01FX1NUT1JBR0VfQ09ORklHVVJBVElPTi5OT1RFQk9PS1NdIDogZmFsc2Vcblx0ICAgICAgXHRjb25zdCBub3RlYm9va3MgPSBbXVxuXHQgICAgICBcdFxuXHQgICAgICBcdGlmIChhY2Nlc3NlZERhdGFFeGlzdHMpIHtcblx0XHRcdGFjY2Vzc2VkRGF0YUV4aXN0cy5mb3JFYWNoKChub3RlYm9vayk9Pntcblx0XHRcdFx0bm90ZWJvb2tzLnB1c2goT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vdGVib29rLCBOb3RlYm9va0hhbmRsZXIuTm90ZWJvb2sucHJvdG90eXBlKSlcblx0XHR9KVxuXG5cdFx0fVxuXHQgICAgIFx0IFxuXHQgICAgICBcbiAgICAgICAgcmVzb2x2ZShkYXRhW3RoaXMuQ0hST01FX1NUT1JBR0VfQ09ORklHVVJBVElPTi5OT1RFQk9PS1NdIHx8IFtdKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbnN0YXRpYyBhc3luYyBnZXROb3RlYm9vayhub3RlYm9va0lkKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLmdldE5vdGVib29rcygpO1xuICByZXR1cm4gZGF0YS5maW5kKChub3RlYm9vaykgPT4gbm90ZWJvb2suaWQgPT09IG5vdGVib29rSWQpO1xufVxuXG4gIHN0YXRpYyBhc3luYyBzYXZlTm90ZWJvb2sobm90ZWJvb2spIHtcbiAgICBjb25zdCBub3RlYm9va3MgPSBhd2FpdCB0aGlzLmdldE5vdGVib29rcygpO1xuICAgIGNvbnN0IHVwZGF0ZWROb3RlYm9va3MgPSBbLi4ubm90ZWJvb2tzLCBub3RlYm9va107XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFt0aGlzLkNIUk9NRV9TVE9SQUdFX0NPTkZJR1VSQVRJT04uTk9URUJPT0tTXTogdXBkYXRlZE5vdGVib29rcyB9LCAoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIHVwZGF0ZU5vdGVib29rKG5vdGVib29rKSB7XG4gICAgY29uc3Qgbm90ZWJvb2tzID0gYXdhaXQgdGhpcy5nZXROb3RlYm9va3MoKTtcbiAgICBjb25zdCBpbmRleCA9IG5vdGVib29rcy5maW5kSW5kZXgoKG4pID0+IG4uaWQgPT09IG5vdGVib29rLmlkKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBub3RlYm9va3NbaW5kZXhdID0gT2JqZWN0LnNldFByb3RvdHlwZU9mKG5vdGVib29rLCBOb3RlYm9va0hhbmRsZXIuTm90ZWJvb2sucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFt0aGlzLkNIUk9NRV9TVE9SQUdFX0NPTkZJR1VSQVRJT04uTk9URUJPT0tTXTogbm90ZWJvb2tzIH0sICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICBzdGF0aWMgYXN5bmMgZ2V0Tm90ZXMoKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCggW3RoaXMuQ0hST01FX1NUT1JBR0VfQ09ORklHVVJBVElPTi5OT1RFU10sIChkYXRhKSA9PiB7XG5cdFx0aWYgKGRhdGE/Lk5PVEVTKSB7XG5cdFx0XHRjb25zdCBub3RlcyA9IFtdXG5cdFx0XHRjb25zdCBhY2Nlc3NOb3RlS2V5cyA9IE9iamVjdC5lbnRyaWVzKGRhdGEpWzBdWzFdXG5cblx0XHRcdGFjY2Vzc05vdGVLZXlzLmZvckVhY2goKG5vdGUpPT57XG5cdCAgICAgIFx0XHRcdE9iamVjdC5zZXRQcm90b3R5cGVPZihub3RlLCBOb3RlSGFuZGxlci5Ob3RlLnByb3RvdHlwZSlcblx0XHRcdFx0bm90ZXMucHVzaChub3RlKVxuXHRcdFx0fSlcblx0XHRcdHJlc29sdmUobm90ZXMpXG5cdFx0fSBcblxuXHQgICAgICByZXNvbHZlKGRhdGFbdGhpcy5DSFJPTUVfU1RPUkFHRV9DT05GSUdVUkFUSU9OLk5PVEVTXSB8fCBbXSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG5cdHN0YXRpYyBhc3luYyBnZXROb3RlIChub3RlSUQpIHtcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuXHQgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldCh0aGlzLkNIUk9NRV9TVE9SQUdFX0NPTkZJR1VSQVRJT04uTk9URVMsIChkYXRhKSA9PiB7XG5cdFx0XHRPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LHZhbF0pPT57XG5cdCAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHZhbCkuZm9yRWFjaCgoW25vdGVzLCBtZXRhXSk9Pntcblx0ICAgICAgICAgICAgICAgIGlmIChtZXRhLmlkID09IG5vdGVJRCkge1xuXHRcdFx0XHRjb25zdCBub3RlID0gT2JqZWN0LnNldFByb3RvdHlwZU9mKG1ldGEsIE5vdGVIYW5kbGVyLk5vdGUucHJvdG90eXBlKVxuXHRcdFx0XHRyZXNvbHZlKG5vdGUgfHwgW10pXG5cdFx0XHR9IFxuXHQgICAgICAgICAgICB9KVxuXHQgICAgICAgIH0pXG5cdCAgICAgIH0pO1xuXHQgICAgfSk7XG5cdCAgfVxuXG5cblxuXG5zdGF0aWMgYXN5bmMgc2F2ZU5vdGUobm90ZSkge1xuXHRjb25zdCBub3RlcyA9IGF3YWl0IHRoaXMuZ2V0Tm90ZXMoKTtcblx0bm90ZS5tb2RpZmllZCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKVxuXG5cblx0Ly8gSWYgZWl0aGVyIG5vdGUgd2FzIGNyZWF0ZWQgaW4gTm90YXRlIGFwcCBvciB3YXMgbmV2ZXIgYXNzaWduZWQgYW4gb3JpZ2luIHByb3BlcnR5XG5cdGlmIChub3RlPy5vcmlnaW4gPT09IHVuZGVmaW5lZCB8fCBub3RlPy5vcmlnaW4gPT09IG51bGwpIHtcblx0XHRub3RlLm9yaWdpbiA9IHRoaXMuTk9UQVRFX09SSUdJTl9VUkxcdFxuXHR9XG5cblx0aWYgKG5vdGU/LmlkID09PSB1bmRlZmluZWQpIHtcblx0XHQvLyBOZXcgTm90ZVxuXHRcdG5vdGUuaWQgPSBub3Rlcy5sZW5ndGhcblx0XHRub3Rlcy5wdXNoKG5vdGUpXG5cblx0fSBlbHNlIHtcblx0XHQvL0V4aXN0aW5nIE5vdGVcblx0XHRjb25zdCBpbmRleCA9IG5vdGVzLmZpbmRJbmRleCgobikgPT4gbi5pZCA9PT0gbm90ZS5pZCk7XG5cdFx0bm90ZXNbaW5kZXhdID0gbm90ZVxuXHRcdFxuXHR9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgY2hyb21lLnN0b3JhZ2Uuc3luYy5zZXQoeyBbdGhpcy5DSFJPTUVfU1RPUkFHRV9DT05GSUdVUkFUSU9OLk5PVEVTXTogbm90ZXMgfSwgKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuc3RhdGljIGFzeW5jIHNldE5vdGUobm90ZSkge1xuXHRsZXQgZXhpc3RzID0gZmFsc2U7XG5cblx0Y29uc3QgcHJldk5vdGVzID0gYXdhaXQgdGhpcy5nZXROb3RlcygpXG5cdGNvbnN0IG5ld05vdGVzID0gW11cblxuXHQvLyBDaGVja3MgaWYgbm90ZSBhbHJlYWR5IGV4aXN0c1xuXHRwcmV2Tm90ZXMuZm9yRWFjaCgobik9Pntcblx0XHRpZiAobi5pZCA9PT0gbm90ZS5pZCkgIHtcblx0XHRcdG5ld05vdGVzLnB1c2gobm90ZSlcblx0XHRcdGV4aXN0cyA9IHRydWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0bmV3Tm90ZXMucHVzaChuKVxuXHRcdH1cdFxuXHR9KVxuXG5cdGlmICghZXhpc3RzKSB7bmV3Tm90ZXMucHVzaChub3RlKX1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFsgdGhpcy5DSFJPTUVfU1RPUkFHRV9DT05GSUdVUkFUSU9OLk5PVEVTIF06IG5ld05vdGVzIH0sICgpID0+IHsgcmVzb2x2ZSgpIH0pXG5cdH0pXG59XG5cblxuXG4gIHN0YXRpYyBhc3luYyBkZWxldGVOb3RlYm9vayhub3RlYm9va0lkKSB7XG4gICAgY29uc3Qgbm90ZWJvb2tzID0gYXdhaXQgdGhpcy5nZXROb3RlYm9va3MoKTtcbiAgICBjb25zdCB1cGRhdGVkTm90ZWJvb2tzID0gbm90ZWJvb2tzLmZpbHRlcigobm90ZWJvb2spID0+IG5vdGVib29rLmlkICE9PSBub3RlYm9va0lkKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgW3RoaXMuQ0hST01FX1NUT1JBR0VfQ09ORklHVVJBVElPTi5OT1RFQk9PS1NdOiB1cGRhdGVkTm90ZWJvb2tzIH0sICgpID0+IHtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZGVsZXRlTm90ZShub3RlSWQpIHtcbiAgICBjb25zdCBub3RlcyA9IGF3YWl0IHRoaXMuZ2V0Tm90ZXMoKTtcbiAgICBjb25zdCB1cGRhdGVkTm90ZXMgPSBub3Rlcy5maWx0ZXIoKG5vdGUpID0+IG5vdGUuaWQgIT09IG5vdGVJZCk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFt0aGlzLkNIUk9NRV9TVE9SQUdFX0NPTkZJR1VSQVRJT04uTk9URVNdOiB1cGRhdGVkTm90ZXMgfSwgKCkgPT4ge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgU3RvcmFnZU1hbmFnZXIgZnJvbSAnQHVuaXZlcnNhbC9IYW5kbGVycy9TdG9yYWdlSGFuZGxlci5qcyc7XG5cbmNvbnN0IE5PVEFURV9MQU5ESU5HX1BBR0UgPSAnLi9pbmRleC5odG1sJztcbmNvbnN0IENIUk9NRV9ORVdUQUIgPSAnY2hyb21lOi8vbmV3dGFiLydcblxuXG4vKiBcblx0QnJvd3NlciBFdmVudCBMaXN0ZW5lciB0aGF0IGZpcmVzIHdoZW4gQnJvd3NlciBzdGFydHMuXG5cdEV2ZW50IGZpcmVkIG9wZW5zIE5vdGF0ZSBwYWdlLlx0XG4qL1xuY2hyb21lLnJ1bnRpbWUub25TdGFydHVwLmFkZExpc3RlbmVyKCh0YWIpPT4ge1xuXHRpZiAodGFiLnVybCAhPT0gY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIHx8IHRhYi51cmwgPT0gQ0hST01FX05FV1RBQiB8fCB0YWIucGVuZGluZ1VybCA9PSBDSFJPTUVfTkVXVEFCKSB7XG5cdFx0Y2hyb21lLnRhYnMuY3JlYXRlKHsgdXJsOiBjaHJvbWUucnVudGltZS5nZXRVUkwoTk9UQVRFX0xBTkRJTkdfUEFHRSkgfSlcblx0fVxufSlcblxuXG4vKlxuXHRCcm93c2VyIEV2ZW50IExpc3RlbnIgdGhhdCBmaXJlcyBvbiBuZXcgdGFiIG9wZW5lZCBieSB1c2VyXG5cdEV2ZW50IGZpcmVkIG9wZW5zIE5vdGF0ZSBQYWdlXG4qL1xuY2hyb21lLnRhYnMub25DcmVhdGVkLmFkZExpc3RlbmVyKCgpPT4ge1xuXHRjaHJvbWUudGFicy5xdWVyeSh7IGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZSB9LCAodGFicykgPT4ge1xuXHRcdGNvbnN0IHRhYiA9IHRhYnNbMF1cblxuXG5cdFx0aWYgKHRhYi51cmwgPT0gQ0hST01FX05FV1RBQiB8fCB0YWIucGVuZGluZ1VybCA9PSBDSFJPTUVfTkVXVEFCKSB7XG5cdFx0XHRjaHJvbWUudGFicy51cGRhdGUodGFiLmlkLCB7IHVybDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKE5PVEFURV9MQU5ESU5HX1BBR0UpIH0pXG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3N0YXRlbWVudCBub3QgZXhlY3V0ZWQnKVxuXHRcdFx0Y29uc29sZS5sb2coJ1RBQiBVUkw6ICcsIHRhYi51cmwpXG5cdFx0XHRjb25zb2xlLmxvZygnUEVORElORyBUQUIgVVJMOiAnLCB0YWIucGVuZGluZ1VybClcblx0XHR9XG5cblx0fSlcdFxufSlcblxuXG5cbmNocm9tZS5hY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKCgpPT57XG5cdGNocm9tZS50YWJzLnF1ZXJ5KHsgYWN0aXZlOiB0cnVlLCBjdXJyZW50V2luZG93OiB0cnVlIH0sICh0YWJzKSA9PiB7XG5cdFx0Y29uc3QgdGFiID0gdGFic1swXS5pZFxuXHRcdFxuXHRcdGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYiwgeyB0eXBlOiAnRlVDS1UnIH0pXG5cblx0fSlcdFxufSlcbiJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiZ2VuIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJpbmZvIiwiZXJyb3IiLCJfYXN5bmNUb0dlbmVyYXRvciIsImZuIiwic2VsZiIsImFyZ3MiLCJhcmd1bWVudHMiLCJhcHBseSIsImVyciIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsImluc3RhbmNlIiwiQ29uc3RydWN0b3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInRhcmdldCIsInByb3BzIiwiZGVzY3JpcHRvciIsIl90b1Byb3BlcnR5S2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJTdG9yYWdlSGFuZGxlciIsIk5vdGVIYW5kbGVyIiwiX2NyZWF0ZU5vdGUiLCJfY2FsbGVlIiwidGl0bGUiLCJjb250ZW50Iiwib3JpZ2luIiwibm90ZXMiLCJuZXdOb3RlSWQiLCJuZXdOb3RlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImdldE5vdGVzIiwiTm90ZSIsInNldE5vdGUiLCJjcmVhdGVOb3RlIiwiX3giLCJfeDIiLCJfeDMiLCJfZGVsZXRlTm90ZSIsIl9jYWxsZWUyIiwibm90ZUlkIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiZGVsZXRlTm90ZSIsIl94NCIsIl91cGRhdGVOb3RlIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJ1cGRhdGVOb3RlIiwiX3g1IiwiX2NsYXNzIiwiaWQiLCJtb2RpZmllZCIsIkRhdGUiLCJjcmVhdGVkIiwidG9TdHJpbmciLCJkZWZhdWx0IiwiTm90ZWJvb2tIYW5kbGVyIiwiX2NyZWF0ZU5vdGVib29rIiwiZGVzY3JpcHRpb24iLCJub3RlYm9va3MiLCJuZXdOb3RlYm9va0lkIiwibmV3Tm90ZWJvb2siLCJnZXROb3RlYm9va3MiLCJOb3RlYm9vayIsInNhdmVOb3RlYm9vayIsImNyZWF0ZU5vdGVib29rIiwiX2RlbGV0ZU5vdGVib29rIiwibm90ZWJvb2tJZCIsImRlbGV0ZU5vdGVib29rIiwiX2dldE5vdGVCeUlEIiwiX2NhbGxlZTQiLCJub3RlYm9vayIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsImFsbCIsImNvbGxlY3Rpb24iLCJtYXAiLCJfcmVmIiwiaW5kZXgiLCJub3RlIiwiZ2V0Tm90ZSIsIl94NiIsImdldE5vdGVCeUlEIiwiX2Fzc2lnbk5vdGVUb0NvbGxlY3Rpb24iLCJfY2FsbGVlNSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInVwZGF0ZU5vdGVib29rIiwiYXNzaWduTm90ZVRvQ29sbGVjdGlvbiIsIl94NyIsIl9yZW1vdmVOb3RlRnJvbUNvbGxlY3Rpb24iLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsInJlbW92ZSIsInJlbW92ZU5vdGVGcm9tQ29sbGVjdGlvbiIsIl94OCIsIl9nZXROb3RlYm9va3MiLCJfdGhpcyIsImNocm9tZSIsInN0b3JhZ2UiLCJzeW5jIiwiZ2V0IiwiQ0hST01FX1NUT1JBR0VfQ09ORklHVVJBVElPTiIsIk5PVEVCT09LUyIsImRhdGEiLCJhY2Nlc3NlZERhdGFFeGlzdHMiLCJfZ2V0Tm90ZWJvb2siLCJmaW5kIiwiZ2V0Tm90ZWJvb2siLCJfc2F2ZU5vdGVib29rIiwiX3RoaXMyIiwidXBkYXRlZE5vdGVib29rcyIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInNldCIsIl91cGRhdGVOb3RlYm9vayIsIl90aGlzMyIsImZpbmRJbmRleCIsIl9nZXROb3RlcyIsIl90aGlzNCIsIk5PVEVTIiwiYWNjZXNzTm90ZUtleXMiLCJlbnRyaWVzIiwiX2dldE5vdGUiLCJub3RlSUQiLCJfdGhpczUiLCJfcmVmMiIsIl9zbGljZWRUb0FycmF5IiwidmFsIiwiX3JlZjMiLCJfcmVmNCIsIm1ldGEiLCJfc2F2ZU5vdGUiLCJfY2FsbGVlNyIsIl90aGlzNiIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIk5PVEFURV9PUklHSU5fVVJMIiwic2F2ZU5vdGUiLCJfc2V0Tm90ZSIsIl9jYWxsZWU4IiwiX3RoaXM3IiwiZXhpc3RzIiwicHJldk5vdGVzIiwibmV3Tm90ZXMiLCJfY2FsbGVlOCQiLCJfY29udGV4dDgiLCJfY2FsbGVlOSIsIl90aGlzOCIsIl9jYWxsZWU5JCIsIl9jb250ZXh0OSIsImZpbHRlciIsIl9jYWxsZWUxMCIsIl90aGlzOSIsInVwZGF0ZWROb3RlcyIsIl9jYWxsZWUxMCQiLCJfY29udGV4dDEwIiwiU3RvcmFnZU1hbmFnZXIiLCJOT1RBVEVfTEFORElOR19QQUdFIiwiQ0hST01FX05FV1RBQiIsInJ1bnRpbWUiLCJvblN0YXJ0dXAiLCJhZGRMaXN0ZW5lciIsInRhYiIsInVybCIsImdldFVSTCIsInBlbmRpbmdVcmwiLCJ0YWJzIiwib25DcmVhdGVkIiwicXVlcnkiLCJhY3RpdmUiLCJjdXJyZW50V2luZG93IiwidXBkYXRlIiwiY29uc29sZSIsImxvZyIsImFjdGlvbiIsIm9uQ2xpY2tlZCIsInNlbmRNZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==