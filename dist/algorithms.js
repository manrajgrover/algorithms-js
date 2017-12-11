(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = require('util/');
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"util/":5}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],3:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],4:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],5:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":4,"_process":2,"inherits":3}],6:[function(require,module,exports){
'use strict';

var CircleTangents = require('./tangent_between_circles');

module.exports = {
  CircleTangents: CircleTangents
};

},{"./tangent_between_circles":7}],7:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for finding Tangent between circles
 *
 * Implementation from
 * https://en.wikibooks.org/wiki/Algorithm_Implementation/Geometry/Tangents_between_two_circles
 */
var CircleTangents = function () {
  function CircleTangents(x1, y1, r1, x2, y2, r2) {
    _classCallCheck(this, CircleTangents);

    /** @private */
    this._x1 = x1;
    /** @private */
    this._y1 = y1;
    /** @private */
    this._r1 = r1;
    /** @private */
    this._x2 = x2;
    /** @private */
    this._y2 = y2;
    /** @private */
    this._r2 = r2;
    /** @private */
    this._tangents = this._getTangents();
  }

  _createClass(CircleTangents, [{
    key: "_getTangents",
    value: function _getTangents() {
      var x1 = this._x1;
      var y1 = this._y1;
      var r1 = this._r1;

      var x2 = this._x2;
      var y2 = this._y2;
      var r2 = this._r2;

      var sqd = (x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2);

      if (sqd <= (r1 - r2) * (r1 - r2)) {
        return [].concat(_toConsumableArray(Array(4))).map(function () {
          return [];
        });
      }

      var dist = Math.sqrt(sqd);
      var vx = (x2 - x1) / dist;
      var vy = (y2 - y1) / dist;

      var res = [].concat(_toConsumableArray(Array(4))).map(function () {
        return [];
      });
      var i = 0;

      for (var sign1 = +1; sign1 >= -1; sign1 -= 2) {
        var c = (r1 - sign1 * r2) / dist;

        if (c * c > 1.0) {
          continue;
        }

        var h = Math.sqrt(Math.max(0.0, 1.0 - c * c));

        for (var sign2 = +1; sign2 >= -1; sign2 -= 2) {
          var nx = vx * c - sign2 * h * vy;
          var ny = vy * c + sign2 * h * vx;

          res[i].push(x1 + r1 * nx);
          res[i].push(y1 + r1 * ny);
          res[i].push(x2 + sign1 * r2 * nx);
          res[i].push(y2 + sign1 * r2 * ny);

          i += 1;
        }
      }

      return res;
    }
  }, {
    key: "tangents",
    get: function get() {
      return this._tangents;
    }
  }]);

  return CircleTangents;
}();

module.exports = CircleTangents;

},{}],8:[function(require,module,exports){
'use strict';

var geometry = require('./geometry');
var math = require('./math');
var string = require('./string');
var search = require('./search');
var sort = require('./sort');

module.exports = {
  geometry: geometry,
  math: math,
  string: string,
  search: search,
  sort: sort
};

},{"./geometry":6,"./math":12,"./search":19,"./sort":27,"./string":32}],9:[function(require,module,exports){
"use strict";

var floor = function floor(val) {
  return (val >= 0 || -1) * Math.floor(Math.abs(val));
};

/**
 * The extended Euclidean algorithm is an algorithm to
 * compute integers x and y such that given a and b.
 * ax + by = gcd(a, b)
 * @param  {Number} a Coefficient of x
 * @param  {Number} b Coefficient of y
 * @return {Object}   Object containing value of x, y and gcd
 */
var extendedEuclidean = function extendedEuclidean(a, b) {
  var terminate = 1;

  var x = 1;
  var y = 0;

  var m = 0;
  var n = 1;

  if (a === 0) {
    return { gcd: b, x: y, y: n };
  }

  if (b === 0) {
    return { gcd: a, x: x, y: m };
  }

  var q = void 0;
  var result = {
    gcd: undefined,
    x: undefined,
    y: undefined
  };

  while (terminate) {
    q = floor(a / b);
    a %= b;

    x -= q * y;
    m -= q * n;

    if (a === 0) {
      result = { gcd: b, x: y, y: n };
      break;
    }

    q = floor(b / a);
    b %= a;

    y -= q * x;
    n -= q * m;

    if (b === 0) {
      result = { gcd: a, x: x, y: m };
      break;
    }
  }

  return result;
};

module.exports = extendedEuclidean;

},{}],10:[function(require,module,exports){
"use strict";

/**
 * Raises base to a power keeping mod in check
 * @param  {Number} a   Base
 * @param  {Number} e   Power
 * @param  {Number} mod Mod Value
 * @return {Number}     Base to a power keeping mod in check
 */
var fastexp = function fastexp(a, e) {
  var mod = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1e9 + 7;

  if (a === 0 && e === 0) {
    return undefined;
  }

  var res = 1;

  while (e !== 0) {
    if (e % 2 === 1) {
      res = res * a % mod;
    }

    a = a * a % mod;
    e >>= 1;
  }

  return res % mod;
};

module.exports = fastexp;

},{}],11:[function(require,module,exports){
"use strict";

/**
 * Calculates GCD of two numbers
 * @param  {Number} a First number
 * @param  {Number} b Second number
 * @return {Number}   HCF or GCD of two numbers
 *
 * References: https://math.stackexchange.com/questions/927050/can-we-find-the-gcd-of-a-positive-and-negative-number
 */
var gcd = function gcd(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);

  if (a === 0 || b === 0) {
    return 0;
  }

  if (a === b) {
    return a;
  }

  if (a > b) {
    return gcd(a - b, b);
  }

  return gcd(a, b - a);
};

module.exports = gcd;

},{}],12:[function(require,module,exports){
'use strict';

var extendedEuclidean = require('./extended_euclidean');
var gcd = require('./gcd');
var fastexp = require('./fast_exp');
var lcm = require('./lcm');
var modularInverse = require('./modular_inverse');

module.exports = {
  extendedEuclidean: extendedEuclidean,
  gcd: gcd,
  fastexp: fastexp,
  lcm: lcm,
  modularInverse: modularInverse
};

},{"./extended_euclidean":9,"./fast_exp":10,"./gcd":11,"./lcm":13,"./modular_inverse":14}],13:[function(require,module,exports){
'use strict';

var gcd = require('./gcd');

/**
 * Calculates LCM of two numbers
 * @param  {Number} a First number
 * @param  {Number} b Second number
 * @return {Number}   LCM of two numbers
 */
var lcm = function lcm(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  a = Math.abs(a);
  b = Math.abs(b);
  return a * b / gcd(a, b);
};

module.exports = lcm;

},{"./gcd":11}],14:[function(require,module,exports){
'use strict';

var exEuclidean = require('./extended_euclidean');
var fastExp = require('./fast_exp');

/**
 * Calculates modular inverse of a number using Fermet's theorem
 *
 * @param  {Number} a Number for which inverse needs to be found
 * @param  {Number} m Mod val
 * @return {Number}   Modular Inverse
 */
var fermetModularInverse = function fermetModularInverse(a, m) {
  if (a === 0 || m === 0) {
    return null;
  }

  return fastExp(a, m - 2, m);
};

/**
 * Calculates modular inverse of a number
 *
 * @param  {Number} a Number for which inverse needs to be found
 * @param  {Number} m Mod val
 * @return {Number}   Modular Inverse
 */
var modularInverse = function modularInverse(a, m) {
  if (a === 0 || m === 0) {
    return null;
  }

  var result = exEuclidean(a, m);

  if (result.gcd !== 1) {
    return null;
  }

  return (result.x + m) % m;
};

module.exports = {
  fermetModularInverse: fermetModularInverse,
  modularInverse: modularInverse
};

},{"./extended_euclidean":9,"./fast_exp":10}],15:[function(require,module,exports){
"use strict";

/**
 * Binary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
var binarysearch = function binarysearch(sortedArray, element, left, right) {
  left = left === undefined ? 0 : left;
  right = right === undefined ? sortedArray.length - 1 : right;

  while (left <= right) {
    var mid = left + (right - left >> 1);

    if (sortedArray[mid] === element) {
      return mid;
    }

    if (sortedArray[mid] < element) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

module.exports = binarysearch;

},{}],16:[function(require,module,exports){
'use strict';

var Queue = require('../../data-structures').Queue;

var bfs = function bfs(root, childProp, callback) {
  var q = new Queue();
  var node = void 0;

  q.push(root);

  while (!q.isEmpty()) {
    node = q.pop();
    callback(node);

    var children = node[childProp];

    for (var i = 0; i < children.length; i += 1) {
      q.push(children[i]);
    }
  }
};

module.exports = bfs;

},{"../../data-structures":38}],17:[function(require,module,exports){
'use strict';

var Stack = require('../../data-structures').Stack;

var dfs = function dfs(root, childProp, callback) {
  var s = new Stack();
  var node = void 0;

  s.push(root);

  while (!s.isEmpty()) {
    node = s.pop();
    callback(node);

    var children = node[childProp];

    for (var i = 0; i < children.length; i += 1) {
      s.push(children[i]);
    }
  }
};

module.exports = dfs;

},{"../../data-structures":38}],18:[function(require,module,exports){
'use strict';

var binarysearch = require('./binary_search');

/**
 * Exponential Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
var exponentialsearch = function exponentialsearch(sortedArray, element) {
  if (sortedArray[0] === element) {
    return 0;
  }

  var len = sortedArray.length;

  var i = 1;

  while (i < len && sortedArray[i] < element) {
    i *= 2;
  }

  return binarysearch(sortedArray, element, Math.floor(i / 2), Math.min(i, len));
};

module.exports = exponentialsearch;

},{"./binary_search":15}],19:[function(require,module,exports){
'use strict';

var binarysearch = require('./binary_search');
var bfs = require('./breadth_first_search');
var dfs = require('./depth_first_search');
var exponentialsearch = require('./exponential_search');
var interpolationsearch = require('./interpolation_search');
var jumpsearch = require('./jump_search');
var linearsearch = require('./linear_search');
var ternarysearch = require('./ternary_search');

module.exports = {
  binarysearch: binarysearch,
  bfs: bfs,
  dfs: dfs,
  exponentialsearch: exponentialsearch,
  interpolationsearch: interpolationsearch,
  jumpsearch: jumpsearch,
  linearsearch: linearsearch,
  ternarysearch: ternarysearch
};

},{"./binary_search":15,"./breadth_first_search":16,"./depth_first_search":17,"./exponential_search":18,"./interpolation_search":20,"./jump_search":21,"./linear_search":22,"./ternary_search":23}],20:[function(require,module,exports){
"use strict";

/**
 * Interpolation Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
var interpolationsearch = function interpolationsearch(sortedArray, element) {
  var left = 0;
  var right = sortedArray.length - 1;

  while (left <= right && element >= sortedArray[left] && element <= sortedArray[right]) {
    var valDiff = sortedArray[right] - sortedArray[left];
    var posDiff = right - left;
    var elementDiff = element - sortedArray[left];

    var pos = left + posDiff * elementDiff / valDiff;

    if (sortedArray[pos] === element) {
      return pos;
    }

    if (sortedArray[pos] < element) {
      left = pos + 1;
    } else {
      right = pos - 1;
    }
  }

  return -1;
};

module.exports = interpolationsearch;

},{}],21:[function(require,module,exports){
"use strict";

/**
 * Jump Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
var jumpsearch = function jumpsearch(sortedArray, element) {
  var len = sortedArray.length;
  var step = Math.floor(Math.sqrt(len));
  var prev = 0;

  while (sortedArray[Math.min(step, len) - 1] < element) {
    prev = step;
    step += Math.floor(Math.sqrt(len));
    if (prev >= len) {
      return -1;
    }
  }

  while (sortedArray[prev] < element) {
    prev += 1;

    if (prev === Math.min(step, len)) {
      return -1;
    }
  }

  if (sortedArray[prev] === element) {
    return prev;
  }

  return -1;
};

module.exports = jumpsearch;

},{}],22:[function(require,module,exports){
"use strict";

/**
 * Linear Search Algorithm
 * @param  {Array}  array Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
var linearsearch = function linearsearch(array, element) {
  var len = array.length;

  for (var i = 0; i < len; i += 1) {
    if (array[i] === element) {
      return i;
    }
  }

  return -1;
};

module.exports = linearsearch;

},{}],23:[function(require,module,exports){
"use strict";

/**
 * Ternary Search Algorithm
 * @param  {Array}  sortedArray Sorted Array to be searched
 * @param  {Number} element     Element to be searched
 * @return {Number}             Index of the element, if found
 */
var ternarysearch = function ternarysearch(sortedArray, element) {
  var left = 0;
  var right = sortedArray.length - 1;

  while (left <= right) {
    var firstMid = left + Math.floor((right - left) / 3);
    var secondMid = firstMid + Math.floor((right - left) / 3);

    if (sortedArray[firstMid] === element) {
      return firstMid;
    }
    if (sortedArray[secondMid] === element) {
      return secondMid;
    }

    if (sortedArray[firstMid] > element) {
      right = firstMid - 1;
    } else if (sortedArray[secondMid] < element) {
      left = secondMid + 1;
    } else {
      left = firstMid + 1;
      right = secondMid - 1;
    }
  }

  return -1;
};

module.exports = ternarysearch;

},{}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Bubble Sorting an array
 */
var BubbleSort = function () {
  function BubbleSort() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compareFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a < b;
    };

    _classCallCheck(this, BubbleSort);

    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice());
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */


  _createClass(BubbleSort, [{
    key: '_sort',


    /**
     * Bubble Sorts the array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted array
     * @private
     */
    value: function _sort(list) {
      var len = list.length;
      var didSwap = void 0;

      for (var i = 0; i < len - 1; i += 1) {
        didSwap = false;

        for (var j = 0; j < len - i - 1; j += 1) {
          if (this._compareFunc(list[j + 1], list[j])) {
            var _ref = [list[j + 1], list[j]];
            list[j] = _ref[0];
            list[j + 1] = _ref[1];

            didSwap = true;
          }
        }

        if (!didSwap) {
          break;
        }
      }

      return list;
    }

    /**
     * Get string form of array
     * @return {String} Comma separated string array
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this._sortedList.join(', ');
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }

    /**
     * Get unsorted array
     * @return {Array} Unsorted/Initial array
     * @public
     */

  }, {
    key: 'unsortedList',
    get: function get() {
      return this._unsortedList;
    }

    /**
     * Get sorted array
     * @return {Array} Sorted array
     * @public
     */

  }, {
    key: 'sortedList',
    get: function get() {
      return this._sortedList;
    }
  }]);

  return BubbleSort;
}();

module.exports = BubbleSort;

},{}],25:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Count Sorting an array
 */
var CountSort = function () {
  function CountSort() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, CountSort);

    /** @private */
    this._unsortedList = data;
    /** @private */
    this._reverse = reverse;
    /** @private */
    this._sortedList = this._sort(data.slice());
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */


  _createClass(CountSort, [{
    key: '_sort',


    /**
     * Count Sorts the array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted array
     * @private
     */
    value: function _sort(list) {
      var len = list.length;

      var range = Math.max.apply(Math, _toConsumableArray(list));

      if (range === -Infinity) {
        return list;
      }

      var count = new Array(range + 1);
      var output = new Array(len);
      count.fill(0);

      for (var i = 0; i < len; i += 1) {
        count[list[i]] += 1;
      }

      for (var _i = 1; _i <= range; _i += 1) {
        count[_i] += count[_i - 1];
      }

      for (var _i2 = 0; _i2 < len; _i2 += 1) {
        output[count[list[_i2]] - 1] = list[_i2];
        count[list[_i2]] -= 1;
      }

      for (var _i3 = 0; _i3 < len; _i3 += 1) {
        list[_i3] = output[_i3];
      }

      return this._reverse ? list.reverse() : list;
    }

    /**
     * Get string form of array
     * @return {String} Comma separated string array
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this._sortedList.join(', ');
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }

    /**
     * Get unsorted array
     * @return {Array} Unsorted/Initial array
     * @public
     */

  }, {
    key: 'unsortedList',
    get: function get() {
      return this._unsortedList;
    }

    /**
     * Get sorted array
     * @return {Array} Sorted array
     * @public
     */

  }, {
    key: 'sortedList',
    get: function get() {
      return this._sortedList;
    }
  }]);

  return CountSort;
}();

module.exports = CountSort;

},{}],26:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Heap = require('../../data-structures/heap');

/**
 * Class for Heap Sorting an array
 */

var HeapSort = function () {
  function HeapSort() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compareFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a < b;
    };

    _classCallCheck(this, HeapSort);

    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice());
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */


  _createClass(HeapSort, [{
    key: '_sort',


    /**
     * Heap Sorts the array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted array
     * @private
     */
    value: function _sort(list) {
      var result = [];
      var heap = new Heap(list, this._compareFunc);

      while (!heap.isEmpty()) {
        result.push(heap.top());
        heap.pop();
      }

      return result;
    }

    /**
     * Get string form of array
     * @return {String} Comma separated string array
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this._sortedList.join(', ');
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }

    /**
     * Get unsorted array
     * @return {Array} Unsorted/Initial array
     * @public
     */

  }, {
    key: 'unsortedList',
    get: function get() {
      return this._unsortedList;
    }

    /**
     * Get sorted array
     * @return {Array} Sorted array
     * @public
     */

  }, {
    key: 'sortedList',
    get: function get() {
      return this._sortedList;
    }
  }]);

  return HeapSort;
}();

module.exports = HeapSort;

},{"../../data-structures/heap":37}],27:[function(require,module,exports){
'use strict';

var BubbleSort = require('./bubble_sort');
var CountSort = require('./count_sort');
var HeapSort = require('./heap_sort');
var InsertionSort = require('./insertion_sort');
var MergeSort = require('./merge_sort');
var QuickSort = require('./quick_sort');
var SelectionSort = require('./selection_sort');

module.exports = {
  BubbleSort: BubbleSort,
  CountSort: CountSort,
  HeapSort: HeapSort,
  InsertionSort: InsertionSort,
  MergeSort: MergeSort,
  QuickSort: QuickSort,
  SelectionSort: SelectionSort
};

},{"./bubble_sort":24,"./count_sort":25,"./heap_sort":26,"./insertion_sort":28,"./merge_sort":29,"./quick_sort":30,"./selection_sort":31}],28:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Insertion Sort for an array
 */
var InsertionSort = function () {
  function InsertionSort() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compareFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a < b;
    };

    _classCallCheck(this, InsertionSort);

    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice());
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */


  _createClass(InsertionSort, [{
    key: '_sort',


    /**
     * Insertion Sorts the array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted array
     * @private
     */
    value: function _sort(list) {
      var len = list.length;

      for (var i = 1; i < len; i += 1) {
        var j = i - 1;
        var key = list[i];

        while (j >= 0 && this._compareFunc(key, list[j])) {
          list[j + 1] = list[j];
          j -= 1;
        }
        list[j + 1] = key;
      }

      return list;
    }

    /**
     * Get string form of array
     * @return {String} Comma separated string array
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this._sortedList.join(', ');
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }

    /**
     * Get unsorted array
     * @return {Array} Unsorted/Initial array
     * @public
     */

  }, {
    key: 'unsortedList',
    get: function get() {
      return this._unsortedList;
    }

    /**
     * Get sorted array
     * @return {Array} Sorted array
     * @public
     */

  }, {
    key: 'sortedList',
    get: function get() {
      return this._sortedList;
    }
  }]);

  return InsertionSort;
}();

module.exports = InsertionSort;

},{}],29:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Merge Sorting an array
 */
var MergeSort = function () {
  function MergeSort() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compareFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a < b;
    };

    _classCallCheck(this, MergeSort);

    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice());
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */


  _createClass(MergeSort, [{
    key: '_merge',


    /**
     * Merges the two array in sorted order
     * @param  {Array} leftList  Left array
     * @param  {Array} rightList Right array
     * @return {Array}           Merged array
     * @private
     */
    value: function _merge(leftList, rightList) {
      var i = 0;
      var j = 0;

      var resultList = [];

      while (i < leftList.length && j < rightList.length) {
        if (this._compareFunc(leftList[i], rightList[j])) {
          resultList.push(leftList[i]);
          i += 1;
        } else {
          resultList.push(rightList[j]);
          j += 1;
        }
      }

      return resultList.concat(i < leftList.length ? leftList.slice(i) : rightList.slice(j));
    }

    /**
     * Recursive function to divide array into two halves and merge the sorted array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted Array
     * @private
     */

  }, {
    key: '_mergeSort',
    value: function _mergeSort(list) {
      if (list.length > 1) {
        var middle = list.length >> 1;

        var leftList = this._mergeSort(list.slice(0, middle));
        var rightList = this._mergeSort(list.slice(middle));

        list = this._merge(leftList, rightList);
      }

      return list;
    }

    /**
     * Merge Sorts the array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted array
     * @private
     */

  }, {
    key: '_sort',
    value: function _sort(list) {
      list = this._mergeSort(list);
      return list;
    }

    /**
     * Get string form of array
     * @return {String} Comma separated string array
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this._sortedList.join(', ');
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }

    /**
     * Get unsorted array
     * @return {Array} Unsorted/Initial array
     * @public
     */

  }, {
    key: 'unsortedList',
    get: function get() {
      return this._unsortedList;
    }

    /**
     * Get sorted array
     * @return {Array} Sorted array
     * @public
     */

  }, {
    key: 'sortedList',
    get: function get() {
      return this._sortedList;
    }
  }]);

  return MergeSort;
}();

module.exports = MergeSort;

},{}],30:[function(require,module,exports){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Quick Sorting an array
 */
var QuickSort = function () {
  function QuickSort() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compareFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a <= b;
    };

    _classCallCheck(this, QuickSort);

    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice(), 0, data.length - 1);
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */


  _createClass(QuickSort, [{
    key: '_partition',


    /**
     * Create a partition and sort the individual parts
     * @param  {Array}  list List to be sorted
     * @param  {Number} low  Left index
     * @param  {Number} high Right index
     * @return {List}        List containing sorted list and partition index
     * @private
     */
    value: function _partition(list, low, high) {
      var pivot = list[high];
      var i = low - 1;

      for (var j = low; j <= high - 1; j += 1) {
        if (this._compareFunc(list[j], pivot)) {
          i += 1;
          var _ref = [list[j], list[i]];
          list[i] = _ref[0];
          list[j] = _ref[1];
        }
      }

      var _ref2 = [list[high], list[i + 1]];
      list[i + 1] = _ref2[0];
      list[high] = _ref2[1];

      return [list, i + 1];
    }

    /**
     * Recursive function to create partition and sort the halves
     * @param  {Array}  list List to be sorted
     * @param  {Number} low  Left index
     * @param  {Number} high Right index
     * @return {List}        Sorted list
     * @private
     */

  }, {
    key: '_quickSort',
    value: function _quickSort(list, low, high) {
      if (low < high) {
        var _partition2 = this._partition(list, low, high),
            _partition3 = _slicedToArray(_partition2, 2),
            sortedlist = _partition3[0],
            pi = _partition3[1];

        this._quickSort(sortedlist, low, pi - 1);
        this._quickSort(sortedlist, pi + 1, high);
      }

      return list;
    }

    /**
     * Quick sorts the array
     * @param  {Array}  list Unsorted List
     * @param  {Number} low  Left index
     * @param  {Number} high Right index
     * @return {Array}       Sorted list
     * @private
     */

  }, {
    key: '_sort',
    value: function _sort(list, low, high) {
      list = this._quickSort(list, low, high);
      return list;
    }

    /**
     * Get string form of array
     * @return {String} Comma separated string array
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this._sortedList.join(', ');
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }

    /**
     * Get unsorted array
     * @return {Array} Unsorted/Initial array
     * @public
     */

  }, {
    key: 'unsortedList',
    get: function get() {
      return this._unsortedList;
    }

    /**
     * Get sorted array
     * @return {Array} Sorted array
     * @public
     */

  }, {
    key: 'sortedList',
    get: function get() {
      return this._sortedList;
    }
  }]);

  return QuickSort;
}();

module.exports = QuickSort;

},{}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Selection Sort for an array
 */
var SelectionSort = function () {
  function SelectionSort() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compareFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a < b;
    };

    _classCallCheck(this, SelectionSort);

    /** @private */
    this._unsortedList = data;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._sortedList = this._sort(data.slice());
    /** @private */
    this._length = data.length;
  }

  /**
   * Get size of array
   * @return {Number} Size of array
   * @public
   */


  _createClass(SelectionSort, [{
    key: '_sort',


    /**
     * Selection Sorts the array
     * @param  {Array} list Array to be sorted
     * @return {Array}      Sorted array
     * @private
     */
    value: function _sort(list) {
      var len = list.length;

      for (var i = 0; i < len - 1; i += 1) {
        var minIndex = i;

        for (var j = i + 1; j < len; j += 1) {
          if (this._compareFunc(list[j], list[minIndex])) {
            minIndex = j;
          }
        }

        var _ref = [list[minIndex], list[i]];
        list[i] = _ref[0];
        list[minIndex] = _ref[1];
      }

      return list;
    }

    /**
     * Get string form of array
     * @return {String} Comma separated string array
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this._sortedList.join(', ');
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }

    /**
     * Get unsorted array
     * @return {Array} Unsorted/Initial array
     * @public
     */

  }, {
    key: 'unsortedList',
    get: function get() {
      return this._unsortedList;
    }

    /**
     * Get sorted array
     * @return {Array} Sorted array
     * @public
     */

  }, {
    key: 'sortedList',
    get: function get() {
      return this._sortedList;
    }
  }]);

  return SelectionSort;
}();

module.exports = SelectionSort;

},{}],32:[function(require,module,exports){
'use strict';

var levenshteindistance = require('./levenshtein_distance');

module.exports = {
  levenshteindistance: levenshteindistance
};

},{"./levenshtein_distance":33}],33:[function(require,module,exports){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var levenshteindistance = function levenshteindistance() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if (a.length === 0) {
    return b.length;
  }

  if (b.length === 0) {
    return a.length;
  }

  var dp = [].concat(_toConsumableArray(Array(b.length + 1))).map(function () {
    return Array(a.length + 1);
  });

  for (var i = 0; i <= b.length; i += 1) {
    dp[i][0] = i;
  }

  for (var _i = 0; _i <= a.length; _i += 1) {
    dp[0][_i] = _i;
  }

  for (var _i2 = 1; _i2 <= b.length; _i2 += 1) {
    for (var j = 1; j <= a.length; j += 1) {
      if (b.charAt(_i2 - 1) === a.charAt(j - 1)) {
        dp[_i2][j] = dp[_i2 - 1][j - 1];
      } else {
        dp[_i2][j] = Math.min(dp[_i2 - 1][j - 1] + 1, Math.min(dp[_i2][j - 1] + 1, dp[_i2 - 1][j] + 1));
      }
    }
  }

  return dp[b.length][a.length];
};

module.exports = levenshteindistance;

},{}],34:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node(data) {
    _classCallCheck(this, Node);

    this._value = data;
    this._next = null;
    this._prev = null;
  }

  _createClass(Node, [{
    key: 'value',
    get: function get() {
      return this._value;
    }
  }, {
    key: 'next',
    get: function get() {
      return this._next;
    },
    set: function set(node) {
      this._next = node;
    }
  }, {
    key: 'prev',
    get: function get() {
      return this._prev;
    },
    set: function set(node) {
      this._prev = node;
    }
  }]);

  return Node;
}();

/**
 * Class for Doubly Linked List
 */


var DoublyLinkedList = function () {
  function DoublyLinkedList() {
    _classCallCheck(this, DoublyLinkedList);

    this._head = null;
    this._tail = null;
    this._length = 0;
  }

  /**
   * Get length of Doubly Linked List
   * @return {Number} Length of Linked List
   */


  _createClass(DoublyLinkedList, [{
    key: 'isEmpty',


    /**
     * Check if Doubly Linked List is empty or not
     * @return {Boolean} `true` if empty else `false`
     */
    value: function isEmpty() {
      return this._length === 0;
    }

    /**
     * Get tail of Doubly Linked List
     * @return {Node} Tail node
     */

  }, {
    key: 'push',


    /**
     * Pushes node to the head of Doubly Linked List
     * @param  {*}   data Data or value contained in Node
     * @return {None}
     */
    value: function push(data) {
      var newNode = new Node(data);

      if (this._head === null) {
        this._tail = newNode;
      }

      newNode.next = this._head;
      newNode.prev = null;

      if (this._head !== null) {
        this._head.prev = newNode;
      }

      this._head = newNode;
      this._length += 1;
    }

    /**
     * Inserts node after a given node
     * @param  {Node} prevNode Node after which insertion needs to take place
     * @param  {*}    data     Data or value contained in Node
     * @return {None}
     */

  }, {
    key: 'insertAfter',
    value: function insertAfter(prevNode, data) {
      if (prevNode === null || prevNode === undefined) {
        throw new Error('Previous node cannot be null or undefined');
      }

      var newNode = new Node(data);

      if (prevNode.next === null) {
        this._tail = newNode;
      }

      newNode.next = prevNode.next;
      prevNode.next = newNode;
      newNode.prev = prevNode;

      if (newNode.next !== null) {
        newNode.next.prev = newNode;
      }

      this._length += 1;
    }

    /**
     * Inserts node before a given node
     * @param  {Node}  node Node before which insertion needs to take place
     * @param  {*}     data Data or value contained in Node
     * @return {Node}
     */

  }, {
    key: 'insertBefore',
    value: function insertBefore(node, data) {
      if (node === null || node === undefined) {
        throw new Error('Node cannot be null or undefined');
      }

      var newNode = new Node(data);

      newNode.prev = node.prev;
      node.prev = newNode;
      newNode.next = node;

      if (newNode.prev !== null) {
        newNode.prev.next = newNode;
      } else {
        this._head = newNode;
      }

      this._length += 1;
    }

    /**
     * Pop node from the head
     * @return {Node} Node popped
     */

  }, {
    key: 'pop',
    value: function pop() {
      if (this._head === null) {
        throw new Error('No nodes to pop');
      }

      var reference = this._head;
      this._head = this._head.next;
      this._length -= 1;

      return reference;
    }

    /**
     * Delete node from the list
     * @param  {Node} node Node to be deleted
     * @return {None}
     */

  }, {
    key: 'deleteNode',
    value: function deleteNode(node) {
      if (node === null || node === undefined) {
        throw new Error('Node to be deleted cannot be null');
      }

      if (node === this._tail) {
        this._tail = node.prev;
      } else {
        node.next.prev = node.prev;
      }
      if (node === this._head) {
        this._head = node.next;
      } else {
        node.prev.next = node.next;
      }

      this._length -= 1;
    }

    /**
     * Returns node at given index
     * @param  {Number} index Index of required node
     * @return {Node}         Required node
     */

  }, {
    key: 'getNode',
    value: function getNode(index) {
      if (index <= 0 || index > this._length) {
        throw new RangeError('Index out of range');
      }

      var reference = this._head;

      for (var i = 1; i < index; i += 1) {
        reference = reference.next;
      }

      return reference;
    }

    /**
     * Returns string representing the Doubly Linked List
     * @return {String} String representation of Doubly Linked List
     */

  }, {
    key: 'toString',
    value: function toString() {
      var reference = this._head;
      var str = '';

      while (reference !== null) {
        str += reference.value + ' -> ';
        reference = reference.next;
      }

      str += 'null';

      return str;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._length;
    }
  }, {
    key: 'tail',
    get: function get() {
      return this._tail;
    }

    /**
     * Get head of Doubly Linked List
     * @return {Node} Head node
     */

  }, {
    key: 'head',
    get: function get() {
      return this._head;
    }
  }]);

  return DoublyLinkedList;
}();

module.exports = DoublyLinkedList;

},{}],35:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Fenwick Tree
 */
var FenwickTree = function () {
  function FenwickTree(length) {
    _classCallCheck(this, FenwickTree);

    /** @private */
    this._list = new Array(length + 1);
    /** @private */
    this._list.fill(0);
    /** @private */
    this._length = this._list.length;
  }

  /**
   * Get size of Fenwick Tree
   * @return {Number} Size of Fenwick Tree
   * @public
   */


  _createClass(FenwickTree, [{
    key: 'buildTree',


    /**
     * Builds Fenwick Tree
     * @param  {Array} array Array elements to be used to build the tree
     * @return {None}
     * @public
     */
    value: function buildTree(array) {
      if (!Array.isArray(array)) {
        throw new Error('Array needs to be passed in order to build the tree');
      }

      for (var i = 0; i < this._length; i += 1) {
        this.updateTree(i, array[i]);
      }
    }

    /**
     * Check if tree is empty
     * @return {Boolean} Returns true if empty else false
     * @public
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this._length - 1 === 0;
    }

    /**
     * Gets prefix sum of the array using the tree
     * @param  {Number} index Index till which sum needs to be calculated
     * @return {Number}       Prefix sum
     * @public
     */

  }, {
    key: 'getSum',
    value: function getSum(index) {
      if (index + 1 >= this._length) {
        throw new RangeError('Index out of bound');
      }
      var sum = 0;

      index += 1;

      while (index > 0) {
        sum += this._list[index];

        index -= index & -index;
      }

      return sum;
    }

    /**
     * Updates the tree with adding element to given index
     * @param  {Number} index   Index of element to be updated
     * @param  {Number} element Element to be added
     * @return {None}
     * @public
     */

  }, {
    key: 'updateTree',
    value: function updateTree(index, element) {
      index += 1;

      while (index <= this._length) {
        this._list[index] += element;
        index += index & -index;
      }
    }

    /**
     * Calculates range sum from given index to given index
     * @param  {Number} left  Left index
     * @param  {Number} right Right index
     * @return {Number}       Range sum
     * @public
     */

  }, {
    key: 'rangeSum',
    value: function rangeSum(left, right) {
      if (left > right) {
        var _ref = [right, left];
        left = _ref[0];
        right = _ref[1];
      }
      return this.getSum(right) - this.getSum(left - 1);
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length - 1;
    }
  }]);

  return FenwickTree;
}();

module.exports = FenwickTree;

},{}],36:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = require('./queue');
var Stack = require('./stack');

/**
 * Class for Graphs
 */

var Graph = function () {
  function Graph() {
    var directed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Graph);

    /** @private */
    this._isDirected = directed;
    /** @private */
    this._vertices = new Set();
    /** @private */
    this._edges = [];
  }

  /**
   * Get size of graph
   * @return {Number} Size of graph
   * @public
   */


  _createClass(Graph, [{
    key: 'isEmpty',


    /**
     * Check whether graph is empty or not
     * @return {Boolean} True if empty else False
     * @public
     */
    value: function isEmpty() {
      return this._vertices.size === 0;
    }

    /**
     * Adds vertex to the Graph
     * @param {Number} vertex Vertex label
     * @public
     */

  }, {
    key: 'addVertex',
    value: function addVertex(vertex) {
      vertex = String(vertex);

      if (this._vertices.has(vertex)) {
        throw new Error('Vertix ' + vertex + ' already exists');
      }

      this._vertices.add(vertex);
      this._edges[vertex] = {};
    }

    /**
     * Adds edge between two vertices
     * @param {Number} vertexA Starting vertex label
     * @param {Number} vertexB Ending vertex label
     * @param {Number} weight  Weight to be added for edge
     * @public
     */

  }, {
    key: 'addEdge',
    value: function addEdge(vertexA, vertexB, weight) {
      vertexA = String(vertexA);
      vertexB = String(vertexB);

      if (!this._vertices.has(vertexA)) {
        this.addVertex(vertexA);
      }

      if (!this._vertices.has(vertexB)) {
        this.addVertex(vertexB);
      }

      this._edges[vertexA][vertexB] = (this._edges[vertexA][vertexB] || 0) + weight;

      if (!this._isDirected) {
        this._edges[vertexB][vertexA] = (this._edges[vertexB][vertexA] || 0) + weight;
      }
    }

    /**
     * Removes vertex from the Graph
     * @param  {Number} vertex Vertex label
     * @public
     */

  }, {
    key: 'removeVertex',
    value: function removeVertex(vertex) {
      var _this = this;

      vertex = String(vertex);

      if (!this._vertices.has(vertex)) {
        throw new Error('Vertix ' + vertex + ' does not exist');
      }

      this._vertices.delete(vertex);

      this._vertices.forEach(function (v) {
        _this.removeEdge(v, vertex);
      });
    }

    /**
     * Removes edge between two vertices
     * @param  {Number} vertexA Starting vertex label
     * @param  {Number} vertexB Ending vertex label
     * @public
     */

  }, {
    key: 'removeEdge',
    value: function removeEdge(vertexA, vertexB) {
      vertexA = String(vertexA);
      vertexB = String(vertexB);

      delete this._edges[vertexA][vertexB];

      if (!this._isDirected) {
        delete this._edges[vertexB][vertexA];
      }
    }

    /**
     * Check whether one vertex is neighbour to another
     * @param  {Number}  vertexA Origin vertex
     * @param  {Number}  vertexB Vertex to be checked for
     * @return {Boolean}         True if neighbour else False
     * @public
     */

  }, {
    key: 'isNeighbour',
    value: function isNeighbour(vertexA, vertexB) {
      vertexA = String(vertexA);
      vertexB = String(vertexB);

      var neighbours = Object.keys(this._edges[vertexA]);

      for (var i = 0; i < neighbours.length; i += 1) {
        if (neighbours[i] === vertexB) {
          return true;
        }
      }

      return false;
    }

    /**
     * Returns neighbours of a given vertex
     * @param  {Number} vertex Vertex whose neighbours are required
     * @return {Array}         List of neighbouring vertices
     * @public
     */

  }, {
    key: 'getNeighbours',
    value: function getNeighbours(vertex) {
      return Object.keys(this._edges[String(vertex)]);
    }

    /**
     * Returns edge weight of edge between two vertices
     * @param  {Number} vertexA Starting Vertex label
     * @param  {Number} vertexB Ending Vertex label
     * @return {Number}         Edge weight
     * @public
     */

  }, {
    key: 'getEdgeWeight',
    value: function getEdgeWeight(vertexA, vertexB) {
      if (!this.isNeighbour(vertexA, vertexB)) {
        throw new Error('Vertex ' + vertexA + ' and ' + vertexB + ' are not neighbours');
      }

      return this._edges[String(vertexA)][String(vertexB)];
    }

    /**
     * Depth First Search
     * @param  {Number}   root     Root vertex
     * @param  {Function} callback Function to be called on each vertex
     * @public
     */

  }, {
    key: 'dfs',
    value: function dfs(root, callback) {
      var s = new Stack();
      var node = void 0;
      var visited = {};

      s.push(String(root));
      visited[root] = true;

      while (!s.isEmpty()) {
        node = s.pop();
        callback(node);

        var neighbours = this.getNeighbours(node);

        for (var i = 0; i < neighbours.length; i += 1) {
          var vertex = neighbours[i];

          if (!visited[vertex]) {
            visited[vertex] = true;
            s.push(vertex);
          }
        }
      }
    }

    /**
     * Breadth First Search
     * @param  {Number}   root     Root vertex
     * @param  {Function} callback Function to be called on each vertex
     * @public
     */

  }, {
    key: 'bfs',
    value: function bfs(root, callback) {
      var q = new Queue();
      var node = void 0;
      var visited = {};

      q.push(String(root));
      visited[root] = true;

      while (!q.isEmpty()) {
        node = q.pop();
        callback(node);

        var neighbours = this.getNeighbours(node);

        for (var i = 0; i < neighbours.length; i += 1) {
          var vertex = neighbours[i];

          if (!visited[vertex]) {
            visited[vertex] = true;
            q.push(vertex);
          }
        }
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this._vertices.size;
    }

    /**
     * Get vertices of graph
     * @return {Array} Vertices in the graph
     * @public
     */

  }, {
    key: 'vertices',
    get: function get() {
      return [].concat(_toConsumableArray(this._vertices));
    }
  }]);

  return Graph;
}();

module.exports = Graph;

},{"./queue":40,"./stack":41}],37:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Class for Heaps
 */
var Heap = function () {
  function Heap() {
    var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var compareFunc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (a, b) {
      return a < b;
    };

    _classCallCheck(this, Heap);

    /** @private */
    this._list = [];
    /** @private */
    this._length = 0;
    /** @private */
    this._compareFunc = compareFunc;
    /** @private */
    this._buildHeap(data);
  }

  /**
   * Get size of Heap
   * @return {Number} Size of Heap
   * @public
   */


  _createClass(Heap, [{
    key: '_buildHeap',


    /**
     * Build Heap
     * @param  {*} data Single element or array of data to be used for Heap
     * @return {None}
     * @private
     */
    value: function _buildHeap(data) {
      var _this = this;

      if (Array.isArray(data)) {
        data.forEach(function (val) {
          _this.push(val);
        });
      } else {
        this.push(data);
      }
    }

    /**
     * Get parent of index
     * @param  {Number} index Index for which parent is required
     * @return {Number}       Parent of index
     * @private
     */

  }, {
    key: '_parent',
    value: function _parent(index) {
      return Math.floor((index - 1) / 2);
    }

    /**
     * Get index of left node
     * @param  {Number} index Index for which left node index is needed
     * @return {Number}       Index of left node
     * @private
     */

  }, {
    key: '_left',
    value: function _left(index) {
      return 2 * index + 1;
    }

    /**
     * Get index of right node
     * @param  {Number} index Index for which right node index is needed
     * @return {Number}       Index of right node
     * @private
     */

  }, {
    key: '_right',
    value: function _right(index) {
      return 2 * index + 2;
    }

    /**
     * Swap nodes
     * @param  {Number} x Index of node one
     * @param  {Number} y Index of node two
     * @return {None}
     * @private
     */

  }, {
    key: '_swap',
    value: function _swap(x, y) {
      var _ref = [this._list[y], this._list[x]];
      this._list[x] = _ref[0];
      this._list[y] = _ref[1];
    }

    /**
     * Heapifies the array
     * @param  {Number} index Index of root
     * @return {None}
     * @private
     */

  }, {
    key: '_heapify',
    value: function _heapify(index) {
      var left = this._left(index);
      var right = this._right(index);

      var heapIndex = index;

      if (left < this._length && this._compareFunc(this._list[left], this._list[index])) {
        heapIndex = left;
      }

      if (right < this._length && this._compareFunc(this._list[right], this._list[heapIndex])) {
        heapIndex = right;
      }

      if (heapIndex !== index) {
        this._swap(index, heapIndex);
        this._heapify(heapIndex);
      }
    }

    /**
     * Whether Heap is empty
     * @return {Boolean} Whether Heap is empty or not
     * @public
     */

  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.size === 0;
    }

    /**
     * Get top of Heap
     * @return {*} Top value of Heap
     * @public
     */

  }, {
    key: 'top',
    value: function top() {
      if (this._length === 0) {
        return null;
      }

      return this._list[0];
    }

    /**
     * Pushes node to the Heap
     * @param  {*} element Value to be inserted
     * @return {None}
     * @public
     */

  }, {
    key: 'push',
    value: function push(element) {
      var elemIndex = this._length;

      this._length += 1;
      this._list.push(element);

      while (elemIndex !== 0 && this._compareFunc(this._list[elemIndex], this._list[this._parent(elemIndex)])) {
        this._swap(this._parent(elemIndex), elemIndex);
        elemIndex = this._parent(elemIndex);
      }
    }

    /**
     * Pop node from the Heap
     * @return {*} Top popped node from the Heap
     * @public
     */

  }, {
    key: 'pop',
    value: function pop() {
      if (this._length <= 0) {
        throw new Error('Heap is empty');
      }

      if (this._length === 1) {
        this._length -= 1;
        this._list.pop();
        return this._list[0];
      }

      var top = this._list[0];
      this._list[0] = this._list[this._length - 1];
      this._list.pop();
      this._length -= 1;
      this._heapify(0);

      return top;
    }
  }, {
    key: 'size',
    get: function get() {
      return this._length;
    }
  }]);

  return Heap;
}();

module.exports = Heap;

},{}],38:[function(require,module,exports){
'use strict';

var DoublyLinkedList = require('./doubly_linked_list');
var FenwickTree = require('./fenwick_tree');
var Graph = require('./graph');
var Heap = require('./heap');
var LinkedList = require('./linked_list');
var Queue = require('./queue');
var Stack = require('./stack');
var Trie = require('./trie');

module.exports = {
  DoublyLinkedList: DoublyLinkedList,
  FenwickTree: FenwickTree,
  Graph: Graph,
  Heap: Heap,
  LinkedList: LinkedList,
  Queue: Queue,
  Stack: Stack,
  Trie: Trie
};

},{"./doubly_linked_list":34,"./fenwick_tree":35,"./graph":36,"./heap":37,"./linked_list":39,"./queue":40,"./stack":41,"./trie":42}],39:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var deepStrictEqual = require('assert').deepStrictEqual;

var Node = function () {
  function Node(data) {
    _classCallCheck(this, Node);

    this._value = data;
    this._next = null;
  }

  _createClass(Node, [{
    key: 'value',
    get: function get() {
      return this._value;
    },
    set: function set(data) {
      this._value = data;
    }
  }, {
    key: 'next',
    get: function get() {
      return this._next;
    },
    set: function set(node) {
      this._next = node;
    }
  }]);

  return Node;
}();

/**
 * Class for Linked List
 */


var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    /** @private */
    this._head = null;
    /** @private */
    this._length = 0;
  }

  /**
   * Get length of Linked List
   * @return {Number} Length of Linked List
   * @public
   */


  _createClass(LinkedList, [{
    key: 'isEmpty',


    /**
     * Check if Linked List is empty or not
     * @return {Boolean} `true` if empty else `false`
     * @public
     */
    value: function isEmpty() {
      return this._length === 0;
    }

    /**
     * Pushes node to the end of Linked List
     * @param  {*}          data Data or value contained in Node
     * @return {LinkedList}      `this`
     * @public
     */

  }, {
    key: 'push',
    value: function push(data) {
      var newNode = new Node(data);

      if (this._head === null) {
        this._head = newNode;
      } else {
        newNode.next = this._head;
        this._head = newNode;
      }

      this._length += 1;
      return this;
    }

    /**
     * Pops node from the end of Linked List
     * @return {LinkedList} `this`
     * @public
     */

  }, {
    key: 'pop',
    value: function pop() {
      if (this._head === null) {
        throw new Error('There are no nodes to pop from the list');
      }

      this._head = this._head.next;
      this._length -= 1;

      return this;
    }

    /**
     * Pops node from particular place in Linked List
     * @param  {Number}     index Index of node from end of the list
     * @return {LinkedList}       `this`
     * @public
     */

  }, {
    key: 'popNodeByIndex',
    value: function popNodeByIndex(index) {
      if (index < 0 || index >= this._length) {
        throw new RangeError('Index out of range');
      }

      var reference = this._head;
      var previousNode = null;

      for (var i = 1; i <= index; i += 1) {
        previousNode = reference;
        reference = reference.next;
      }

      previousNode.next = reference.next;
      this._length -= 1;

      return this;
    }

    /**
     * Returns node at particular index else throws error if index out of range
     * @param  {Number} index Index of node from end
     * @return {Node}         Required node
     * @public
     */

  }, {
    key: 'getNodeByIndex',
    value: function getNodeByIndex(index) {
      if (index < 0 || index >= this._length) {
        throw new RangeError('Index out of range');
      }

      var reference = this._head;

      for (var i = 1; i <= index; i += 1) {
        reference = reference.next;
      }

      return reference;
    }

    /**
     * Returns first occurance of node with given value
     * @param  {*}    value Value to be searched
     * @return {Node}       First occurance of node with given value else -1
     * @public
     */

  }, {
    key: 'getNodeByValue',
    value: function getNodeByValue(value) {
      var reference = this._head;

      while (reference !== null) {
        try {
          deepStrictEqual(reference.value, value);
          return reference;
        } catch (e) {
          reference = reference.next;
        }
      }

      return -1;
    }

    /**
     * Returns Linked List as Array
     * @return {Array} Array containing values of Linked List
     * @public
     */

  }, {
    key: 'getListAsArray',
    value: function getListAsArray() {
      var reference = this._head;

      var list = [];

      while (reference !== null) {
        list.push(reference.value);
        reference = reference.next;
      }

      return list;
    }

    /**
     * Reverses Linked List
     * @return None
     * @public
     */

  }, {
    key: 'reverseList',
    value: function reverseList() {
      if (!this._head || !this._head.next) {
        return;
      }

      var curr = this._head;
      var next = null;
      var prev = null;

      while (curr) {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      this._head = prev;
    }

    /**
     * Iterates over all nodes of linked list and runs function on the node value
     * @param  {func} func Function containing logic to be applied to node value
     * @return {None}
     * @public
     */

  }, {
    key: 'forEach',
    value: function forEach(func) {
      var reference = this._head;

      while (reference !== null) {
        reference.value = func(reference.value);
        reference = reference.next;
      }

      return this;
    }

    /**
     * Returns string representing the linked list
     * @return {string} String representation of linked list
     * @public
     */

  }, {
    key: 'toString',
    value: function toString() {
      var reference = this._head;
      var str = '';

      while (reference !== null) {
        str += reference.value + ' -> ';
        reference = reference.next;
      }

      str += 'null';

      return str;
    }
  }, {
    key: 'length',
    get: function get() {
      return this._length;
    }
  }]);

  return LinkedList;
}();

module.exports = LinkedList;

},{"assert":1}],40:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoublyLinkedList = require('./doubly_linked_list');

/**
 * Class for Queues
 */

var Queue = function () {
  function Queue(data) {
    _classCallCheck(this, Queue);

    /** @private */
    this._list = new DoublyLinkedList();

    if (data !== undefined) {
      this.push(data);
    }
  }

  /**
   * Get length of Queue
   * @return {Number} Size of Queue
   * @public
   */


  _createClass(Queue, [{
    key: 'isEmpty',


    /**
     * Check if Queue is empty or not
     * @return {Boolean} `true` if empty else `false`
     * @public
     */
    value: function isEmpty() {
      return this._list.isEmpty();
    }

    /**
     * Pushes node in Queue
     * @param  {*}   data Data or value to be pushed
     * @return {None}
     * @public
     */

  }, {
    key: 'push',
    value: function push(data) {
      var _this = this;

      if (Array.isArray(data)) {
        data.forEach(function (val) {
          return _this._list.push(val);
        });
      } else {
        this._list.push(data);
      }
    }

    /**
     * Pop node from Queue
     * @return {*} Value of node which was popped
     * @public
     */

  }, {
    key: 'pop',
    value: function pop() {
      var front = this._list.tail;
      this._list.deleteNode(front);

      return front.value;
    }

    /**
     * Get front value on Queue
     * @return {*} Value of node at the front
     * @public
     */

  }, {
    key: 'front',
    value: function front() {
      return this._list.tail.value;
    }

    /**
     * Get back value on Queue
     * @return {*} Value of node at the back
     * @public
     */

  }, {
    key: 'back',
    value: function back() {
      return this._list.head.value;
    }
  }, {
    key: 'size',
    get: function get() {
      return this._list.length;
    }
  }]);

  return Queue;
}();

module.exports = Queue;

},{"./doubly_linked_list":34}],41:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DoublyLinkedList = require('./doubly_linked_list');

/**
 * Class for Stacks
 */

var Stack = function () {
  function Stack(data) {
    _classCallCheck(this, Stack);

    /** @private */
    this._list = new DoublyLinkedList();
    if (data !== undefined) {
      this.push(data);
    }
  }

  /**
   * Get length of Stack
   * @return {Number} Size of Stack
   * @public
   */


  _createClass(Stack, [{
    key: 'isEmpty',


    /**
     * Check if Stack is empty or not
     * @return {Boolean} `true` if empty else `false`
     * @public
     */
    value: function isEmpty() {
      return this._list.isEmpty();
    }

    /**
     * Pushes node in Stack
     * @param  {*}   data Data or value to be pushed
     * @return {None}
     * @public
     */

  }, {
    key: 'push',
    value: function push(data) {
      var _this = this;

      if (Array.isArray(data)) {
        data.forEach(function (val) {
          return _this._list.push(val);
        });
      } else {
        this._list.push(data);
      }
    }

    /**
     * Pop node from Stack
     * @return {*} Value of node which was popped
     * @public
     */

  }, {
    key: 'pop',
    value: function pop() {
      return this._list.pop().value;
    }

    /**
     * Get top value on stack
     * @return {*} Value of node at the top
     * @public
     */

  }, {
    key: 'top',
    value: function top() {
      var top = this._list.head;
      return top.value;
    }
  }, {
    key: 'size',
    get: function get() {
      return this._list.length;
    }
  }]);

  return Stack;
}();

module.exports = Stack;

},{"./doubly_linked_list":34}],42:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function () {
  function Node(data) {
    _classCallCheck(this, Node);

    this._isLeaf = false;
    this._children = {};
    this._data = data;
  }

  _createClass(Node, [{
    key: "isLeaf",
    get: function get() {
      return this._isLeaf;
    },
    set: function set(val) {
      this._isLeaf = val;
    }
  }, {
    key: "children",
    get: function get() {
      return this._children;
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(val) {
      this._data = val;
    }
  }]);

  return Node;
}();

/**
 * Class for Trie
 */


var Trie = function () {
  function Trie() {
    _classCallCheck(this, Trie);

    /** @private */
    this._root = new Node();
    /** @private */
    this._size = 0;
  }

  /**
   * Get size of Trie
   * @return {Number} Size of Trie
   * @public
   */


  _createClass(Trie, [{
    key: "isEmpty",


    /**
     * Checks if trie is empty or not
     * @return {Boolean} true if empty else false
     * @public
     */
    value: function isEmpty() {
      return Object.keys(this._root.children).length === 0;
    }

    /**
     * Inserts data into trie
     * @param  {String} data String to be inserted
     * @param  {*} val       Leaf node value
     * @return {Node}        Inserted node in trie
     * @public
     */

  }, {
    key: "insert",
    value: function insert(data) {
      var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

      var crawler = this._root;

      for (var i = 0; i < data.length; i += 1) {
        var child = crawler.children[data[i]];

        if (child === undefined) {
          child = new Node();
          crawler.children[data[i]] = child;
        }

        crawler = child;
      }

      this._size += 1;
      crawler.isLeaf = true;
      crawler.data = val;

      return crawler;
    }

    /**
     * Searches and returns whether word exists in trie
     * @param  {String} data  Data to be searched
     * @return {*}            val of leaf node, if exist else false
     * @public
     */

  }, {
    key: "search",
    value: function search(data) {
      var crawler = this._root;

      for (var i = 0; i < data.length; i += 1) {
        var child = crawler.children[data[i]];

        if (child === undefined) {
          return -1;
        }

        crawler = child;
      }

      if (crawler !== undefined && crawler.isLeaf) {
        return crawler.data;
      }

      return -1;
    }

    /**
     * Recursively deletes word from the trie
     * @param  {Node}    node   Current node being explored
     * @param  {String}  data   Word to be deleted
     * @param  {Integer} level  Depth looked in trie
     * @param  {Integer} length Length of word
     * @return {Boolean}        true if deleted else false
     * @private
     */

  }, {
    key: "_remove",
    value: function _remove(node, data, level, length) {
      if (node && level === length && node.isLeaf) {
        node.isLeaf = false;

        if (Object.keys(node.children).length === 0) {
          return true;
        }

        return false;
      }

      var index = data[level];

      if (this._remove(node.children[index], data, level + 1, length)) {
        delete node.children[index];

        return !node.isLeaf && Object.keys(node.children).length === 0;
      }

      return false;
    }

    /**
     * Word to be deleted
     * @param  {String} data  Word to be deleted
     * @return {Boolean}      true if deleted else false
     * @private
     */

  }, {
    key: "delete",
    value: function _delete(data) {
      if (this.search(data) !== -1) {
        this._size -= 1;
        return this._remove(this._root, data, 0, data.length);
      }
      return false;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
  }]);

  return Trie;
}();

module.exports = Trie;

},{}],43:[function(require,module,exports){
'use strict';

var algorithms = require('./algorithms');
var datastructures = require('./data-structures');

module.exports = {
  algorithms: algorithms,
  datastructures: datastructures
};

},{"./algorithms":8,"./data-structures":38}]},{},[43]);
