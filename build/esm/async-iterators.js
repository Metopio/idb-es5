"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.async-iterator");

require("core-js/modules/es.array.includes");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.object.assign");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.promise");

require("core-js/modules/es.string.iterator");

require("core-js/modules/es.weak-map");

require("core-js/modules/web.dom-collections.iterator");

require("regenerator-runtime/runtime");

var _wrapIdbValue = require("./wrap-idb-value.js");

function _awaitAsyncGenerator(value) { return new _AwaitValue(value); }

function _wrapAsyncGenerator(fn) { return function () { return new _AsyncGenerator(fn.apply(this, arguments)); }; }

function _AsyncGenerator(gen) { var front, back; function send(key, arg) { return new Promise(function (resolve, reject) { var request = { key: key, arg: arg, resolve: resolve, reject: reject, next: null }; if (back) { back = back.next = request; } else { front = back = request; resume(key, arg); } }); } function resume(key, arg) { try { var result = gen[key](arg); var value = result.value; var wrappedAwait = value instanceof _AwaitValue; Promise.resolve(wrappedAwait ? value.wrapped : value).then(function (arg) { if (wrappedAwait) { resume(key === "return" ? "return" : "next", arg); return; } settle(result.done ? "return" : "normal", arg); }, function (err) { resume("throw", err); }); } catch (err) { settle("throw", err); } } function settle(type, value) { switch (type) { case "return": front.resolve({ value: value, done: true }); break; case "throw": front.reject(value); break; default: front.resolve({ value: value, done: false }); break; } front = front.next; if (front) { resume(front.key, front.arg); } else { back = null; } } this._invoke = send; if (typeof gen.return !== "function") { this.return = undefined; } }

if (typeof Symbol === "function" && Symbol.asyncIterator) { _AsyncGenerator.prototype[Symbol.asyncIterator] = function () { return this; }; }

_AsyncGenerator.prototype.next = function (arg) { return this._invoke("next", arg); };

_AsyncGenerator.prototype.throw = function (arg) { return this._invoke("throw", arg); };

_AsyncGenerator.prototype.return = function (arg) { return this._invoke("return", arg); };

function _AwaitValue(value) { this.wrapped = value; }

var advanceMethodProps = ['continue', 'continuePrimaryKey', 'advance'];
var methodMap = {};
var advanceResults = new WeakMap();
var ittrProxiedCursorToOriginalProxy = new WeakMap();
var cursorIteratorTraps = {
  get: function get(target, prop) {
    if (!advanceMethodProps.includes(prop)) return target[prop];
    var cachedFunc = methodMap[prop];

    if (!cachedFunc) {
      cachedFunc = methodMap[prop] = function () {
        var _ittrProxiedCursorToO;

        advanceResults.set(this, (_ittrProxiedCursorToO = ittrProxiedCursorToOriginalProxy.get(this))[prop].apply(_ittrProxiedCursorToO, arguments));
      };
    }

    return cachedFunc;
  }
};

function iterate() {
  return _iterate.apply(this, arguments);
}

function _iterate() {
  _iterate = _wrapAsyncGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var cursor,
        _cursor,
        proxiedCursor,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // tslint:disable-next-line:no-this-assignment
            cursor = this;

            if (cursor instanceof IDBCursor) {
              _context.next = 5;
              break;
            }

            _context.next = 4;
            return _awaitAsyncGenerator((_cursor = cursor).openCursor.apply(_cursor, _args));

          case 4:
            cursor = _context.sent;

          case 5:
            if (cursor) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return");

          case 7:
            cursor = cursor;
            proxiedCursor = new Proxy(cursor, cursorIteratorTraps);
            ittrProxiedCursorToOriginalProxy.set(proxiedCursor, cursor); // Map this double-proxy back to the original, so other cursor methods work.

            _wrapIdbValue.a.set(proxiedCursor, (0, _wrapIdbValue.u)(cursor));

          case 11:
            if (!cursor) {
              _context.next = 20;
              break;
            }

            _context.next = 14;
            return proxiedCursor;

          case 14:
            _context.next = 16;
            return _awaitAsyncGenerator(advanceResults.get(proxiedCursor) || cursor.continue());

          case 16:
            cursor = _context.sent;
            advanceResults.delete(proxiedCursor);
            _context.next = 11;
            break;

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _iterate.apply(this, arguments);
}

function isIteratorProp(target, prop) {
  return prop === Symbol.asyncIterator && (0, _wrapIdbValue.i)(target, [IDBIndex, IDBObjectStore, IDBCursor]) || prop === 'iterate' && (0, _wrapIdbValue.i)(target, [IDBIndex, IDBObjectStore]);
}

(0, _wrapIdbValue.r)(function (oldTraps) {
  return Object.assign({}, oldTraps, {
    get: function get(target, prop, receiver) {
      if (isIteratorProp(target, prop)) return iterate;
      return oldTraps.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      return isIteratorProp(target, prop) || oldTraps.has(target, prop);
    }
  });
});