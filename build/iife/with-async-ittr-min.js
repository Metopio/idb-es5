"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.async-iterator");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.some");

require("core-js/modules/es.array.sort");

require("core-js/modules/es.map");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.includes");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.string.replace");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.for-each");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

var idb = function (e) {
  "use strict";

  var t = function t(e, _t) {
    return _t.some(function (t) {
      return e instanceof t;
    });
  };

  var n, r;
  var o = new WeakMap(),
      s = new WeakMap(),
      a = new WeakMap(),
      i = new WeakMap(),
      c = new WeakMap();
  var u = {
    get: function get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if ("done" === t) return s.get(e);
        if ("objectStoreNames" === t) return e.objectStoreNames || a.get(e);
        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
      }

      return l(e[t]);
    },
    set: function set(e, t, n) {
      return e[t] = n, !0;
    },
    has: function has(e, t) {
      return e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e;
    }
  };

  function d(e) {
    u = e(u);
  }

  function f(e) {
    return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (r || (r = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }

      return e.apply(D(this), t), l(o.get(this));
    } : function () {
      for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        t[_key2] = arguments[_key2];
      }

      return l(e.apply(D(this), t));
    } : function (t) {
      for (var _len3 = arguments.length, n = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        n[_key3 - 1] = arguments[_key3];
      }

      var r = e.call.apply(e, [D(this), t].concat(n));
      return a.set(r, t.sort ? t.sort() : [t]), l(r);
    };
  }

  function p(e) {
    return "function" == typeof e ? f(e) : (e instanceof IDBTransaction && function (e) {
      if (s.has(e)) return;
      var t = new Promise(function (t, n) {
        var r = function r() {
          e.removeEventListener("complete", o), e.removeEventListener("error", s), e.removeEventListener("abort", s);
        },
            o = function o() {
          t(), r();
        },
            s = function s() {
          n(e.error || new DOMException("AbortError", "AbortError")), r();
        };

        e.addEventListener("complete", o), e.addEventListener("error", s), e.addEventListener("abort", s);
      });
      s.set(e, t);
    }(e), t(e, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])) ? new Proxy(e, u) : e);
  }

  function l(e) {
    if (e instanceof IDBRequest) return function (e) {
      var t = new Promise(function (t, n) {
        var r = function r() {
          e.removeEventListener("success", o), e.removeEventListener("error", s);
        },
            o = function o() {
          t(l(e.result)), r();
        },
            s = function s() {
          n(e.error), r();
        };

        e.addEventListener("success", o), e.addEventListener("error", s);
      });
      return t.then(function (t) {
        t instanceof IDBCursor && o.set(t, e);
      }).catch(function () {}), c.set(t, e), t;
    }(e);
    if (i.has(e)) return i.get(e);
    var t = p(e);
    return t !== e && (i.set(e, t), c.set(t, e)), t;
  }

  var D = function D(e) {
    return c.get(e);
  };

  var I = ["get", "getKey", "getAll", "getAllKeys", "count"],
      B = ["put", "add", "delete", "clear"],
      b = new Map();

  function v(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
    if (b.get(t)) return b.get(t);
    var n = t.replace(/FromIndex$/, ""),
        r = t !== n,
        o = B.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !I.includes(n)) return;

    var s = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
        var _a;

        var s,
            a,
            _len4,
            t,
            _key4,
            i,
            _args = arguments;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                s = this.transaction(e, o ? "readwrite" : "readonly");
                a = s.store;

                for (_len4 = _args.length, t = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
                  t[_key4 - 1] = _args[_key4];
                }

                r && (a = a.index(t.shift()));
                i = (_a = a)[n].apply(_a, t);
                _context.t0 = o;

                if (!_context.t0) {
                  _context.next = 9;
                  break;
                }

                _context.next = 9;
                return s.done;

              case 9:
                return _context.abrupt("return", i);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function s(_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return b.set(t, s), s;
  }

  d(function (e) {
    return _objectSpread(_objectSpread({}, e), {}, {
      get: function get(t, n, r) {
        return v(t, n) || e.get(t, n, r);
      },
      has: function has(t, n) {
        return !!v(t, n) || e.has(t, n);
      }
    });
  });
  var g = ["continue", "continuePrimaryKey", "advance"],
      y = {},
      h = new WeakMap(),
      m = new WeakMap(),
      w = {
    get: function get(e, t) {
      if (!g.includes(t)) return e[t];
      var n = y[t];
      return n || (n = y[t] = function () {
        var _m$get;

        h.set(this, (_m$get = m.get(this))[t].apply(_m$get, arguments));
      }), n;
    }
  };

  function E() {
    return _E.apply(this, arguments);
  }

  function _E() {
    _E = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _t2;

      var t,
          n,
          _args2 = arguments;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              t = this;
              _context2.t0 = t instanceof IDBCursor;

              if (_context2.t0) {
                _context2.next = 6;
                break;
              }

              _context2.next = 5;
              return _awaitAsyncGenerator((_t2 = t).openCursor.apply(_t2, _args2));

            case 5:
              t = _context2.sent;

            case 6:
              if (t) {
                _context2.next = 8;
                break;
              }

              return _context2.abrupt("return");

            case 8:
              t = t;
              n = new Proxy(t, w);
              m.set(n, t), c.set(n, D(t));

            case 11:
              if (!t) {
                _context2.next = 20;
                break;
              }

              _context2.next = 14;
              return n;

            case 14:
              _context2.next = 16;
              return _awaitAsyncGenerator(h.get(n) || t.continue());

            case 16:
              t = _context2.sent;
              h.delete(n);

            case 18:
              _context2.next = 11;
              break;

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _E.apply(this, arguments);
  }

  function L(e, n) {
    return n === Symbol.asyncIterator && t(e, [IDBIndex, IDBObjectStore, IDBCursor]) || "iterate" === n && t(e, [IDBIndex, IDBObjectStore]);
  }

  return d(function (e) {
    return _objectSpread(_objectSpread({}, e), {}, {
      get: function get(t, n, r) {
        return L(t, n) ? E : e.get(t, n, r);
      },
      has: function has(t, n) {
        return L(t, n) || e.has(t, n);
      }
    });
  }), e.deleteDB = function (e) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        t = _ref2.blocked;

    var n = indexedDB.deleteDatabase(e);
    return t && n.addEventListener("blocked", function () {
      return t();
    }), l(n).then(function () {});
  }, e.openDB = function (e, t) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        n = _ref3.blocked,
        r = _ref3.upgrade,
        o = _ref3.blocking,
        s = _ref3.terminated;

    var a = indexedDB.open(e, t),
        i = l(a);
    return r && a.addEventListener("upgradeneeded", function (e) {
      r(l(a.result), e.oldVersion, e.newVersion, l(a.transaction));
    }), n && a.addEventListener("blocked", function () {
      return n();
    }), i.then(function (e) {
      s && e.addEventListener("close", function () {
        return s();
      }), o && e.addEventListener("versionchange", function () {
        return o();
      });
    }).catch(function () {}), i;
  }, e.unwrap = D, e.wrap = l, e;
}({});