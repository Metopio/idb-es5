"use strict";

require("core-js/modules/es.symbol");

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

var idb = function (e) {
  "use strict";

  var t, n;
  var r = new WeakMap(),
      o = new WeakMap(),
      s = new WeakMap(),
      a = new WeakMap(),
      i = new WeakMap();
  var c = {
    get: function get(e, t, n) {
      if (e instanceof IDBTransaction) {
        if ("done" === t) return o.get(e);
        if ("objectStoreNames" === t) return e.objectStoreNames || s.get(e);
        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0]);
      }

      return p(e[t]);
    },
    set: function set(e, t, n) {
      return e[t] = n, !0;
    },
    has: function has(e, t) {
      return e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e;
    }
  };

  function u(e) {
    return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (n || (n = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function () {
      for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
        t[_key] = arguments[_key];
      }

      return e.apply(f(this), t), p(r.get(this));
    } : function () {
      for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        t[_key2] = arguments[_key2];
      }

      return p(e.apply(f(this), t));
    } : function (t) {
      for (var _len3 = arguments.length, n = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        n[_key3 - 1] = arguments[_key3];
      }

      var r = e.call.apply(e, [f(this), t].concat(n));
      return s.set(r, t.sort ? t.sort() : [t]), p(r);
    };
  }

  function d(e) {
    return "function" == typeof e ? u(e) : (e instanceof IDBTransaction && function (e) {
      if (o.has(e)) return;
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
      o.set(e, t);
    }(e), n = e, (t || (t = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some(function (e) {
      return n instanceof e;
    }) ? new Proxy(e, c) : e);
    var n;
  }

  function p(e) {
    if (e instanceof IDBRequest) return function (e) {
      var t = new Promise(function (t, n) {
        var r = function r() {
          e.removeEventListener("success", o), e.removeEventListener("error", s);
        },
            o = function o() {
          t(p(e.result)), r();
        },
            s = function s() {
          n(e.error), r();
        };

        e.addEventListener("success", o), e.addEventListener("error", s);
      });
      return t.then(function (t) {
        t instanceof IDBCursor && r.set(t, e);
      }).catch(function () {}), i.set(t, e), t;
    }(e);
    if (a.has(e)) return a.get(e);
    var t = d(e);
    return t !== e && (a.set(e, t), i.set(t, e)), t;
  }

  var f = function f(e) {
    return i.get(e);
  };

  var l = ["get", "getKey", "getAll", "getAllKeys", "count"],
      D = ["put", "add", "delete", "clear"],
      v = new Map();

  function b(e, t) {
    if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
    if (v.get(t)) return v.get(t);
    var n = t.replace(/FromIndex$/, ""),
        r = t !== n,
        o = D.includes(n);
    if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !o && !l.includes(n)) return;

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

    return v.set(t, s), s;
  }

  return c = function (e) {
    return _objectSpread(_objectSpread({}, e), {}, {
      get: function get(t, n, r) {
        return b(t, n) || e.get(t, n, r);
      },
      has: function has(t, n) {
        return !!b(t, n) || e.has(t, n);
      }
    });
  }(c), e.deleteDB = function (e) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        t = _ref2.blocked;

    var n = indexedDB.deleteDatabase(e);
    return t && n.addEventListener("blocked", function () {
      return t();
    }), p(n).then(function () {});
  }, e.openDB = function (e, t) {
    var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        n = _ref3.blocked,
        r = _ref3.upgrade,
        o = _ref3.blocking,
        s = _ref3.terminated;

    var a = indexedDB.open(e, t),
        i = p(a);
    return r && a.addEventListener("upgradeneeded", function (e) {
      r(p(a.result), e.oldVersion, e.newVersion, p(a.transaction));
    }), n && a.addEventListener("blocked", function () {
      return n();
    }), i.then(function (e) {
      s && e.addEventListener("close", function () {
        return s();
      }), o && e.addEventListener("versionchange", function () {
        return o();
      });
    }).catch(function () {}), i;
  }, e.unwrap = f, e.wrap = p, e;
}({});