function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var reactDom = { exports: {} };
var reactDom_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$4 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$3 = Symbol.for("react.fragment"), q$2 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$5 = Symbol.for("react.provider"), u$3 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$4 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$3 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$1(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = z$2 && a2[z$2] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$2 = Object.assign, D$3 = {};
function E$2(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$1;
}
E$2.prototype.isReactComponent = {};
E$2.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$2.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$2.prototype;
function G$1(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$1;
}
var H$3 = G$1.prototype = new F$2();
H$3.constructor = G$1;
C$2(H$3, E$2.prototype);
H$3.isPureReactComponent = true;
var I$3 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$5(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps)
    for (d2 in g2 = a2.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$4, type: a2, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$3(a2, b2) {
  return { $$typeof: l$4, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$3(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$4;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$1 = /\/+/g;
function Q$2(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2)
    a2 = null;
  var h2 = false;
  if (null === a2)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a2.$$typeof) {
          case l$4:
          case n$3:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$2(h2, 0) : d2, I$3(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$1, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
      return a3;
    })) : null != c2 && (O$3(c2) && (c2 = N$3(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$3(a2))
    for (var g2 = 0; g2 < a2.length; g2++) {
      k2 = a2[g2];
      var f2 = d2 + Q$2(k2, g2);
      h2 += R$2(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$1(a2), "function" === typeof f2)
    for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; )
      k2 = k2.value, f2 = d2 + Q$2(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$4(a2, b2, e2) {
  if (null == a2)
    return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$3(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status)
        a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status)
    return a2._result.default;
  throw a2._result;
}
var U$3 = { current: null }, V$2 = { transition: null }, W$2 = { ReactCurrentDispatcher: U$3, ReactCurrentBatchConfig: V$2, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$4, forEach: function(a2, b2, e2) {
  S$4(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$4(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$4(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$3(a2))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$2;
react_production_min.Fragment = p$3;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$2;
react_production_min.Suspense = w$4;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$2;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$2({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps)
      var g2 = a2.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$4, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$3, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$5, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$5;
react_production_min.createFactory = function(a2) {
  var b2 = M$5.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$3, render: a2 };
};
react_production_min.isValidElement = O$3;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$3, _payload: { _status: -1, _result: a2 }, _init: T$3 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$1, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$2.transition;
  V$2.transition = {};
  try {
    a2();
  } finally {
    V$2.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a2, b2) {
  return U$3.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$3.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$3.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$3.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$3.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$3.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$3.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$3.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$3.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$3.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$3.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$3.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$3.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$3.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React$6 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const e$2 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React$6
}, [reactExports]);
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a2[d2];
        if (0 < g2(e2, b2))
          a2[d2] = b2, a2[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length)
      return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a:
        for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a2[d2] = x2, a2[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a2)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a2);
      }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$2(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++)
    da.add(b2[a2]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a2) {
  if (ja.call(ma, a2))
    return true;
  if (ja.call(la, a2))
    return false;
  if (ka.test(a2))
    return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$2(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$1[a2] = new v$2(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$1[b2] = new v$2(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$1[a2] = new v$2(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra,
    sa
  );
  z$1[b2] = new v$2(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$1[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$1[b2] = new v$2(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$1[a2] = new v$2(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d2) {
  var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2)
    return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A = Object.assign, La;
function Ma(a2) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b2) {
  if (!a2 || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a2, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a2.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2)
    return null;
  if ("function" === typeof a2)
    return a2.displayName || a2.name || null;
  if ("string" === typeof a2)
    return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a2)
    switch (a2.$$typeof) {
      case Ca:
        return (a2.displayName || "Context") + ".Consumer";
      case Ba:
        return (a2._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a2.render;
        a2 = a2.displayName;
        a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
        return a2;
      case Ga:
        return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
      case Ha:
        b2 = a2._payload;
        a2 = a2._init;
        try {
          return Qa(a2(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2)
    return false;
  var b2 = a2._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2)
    return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a2.value || a2.value != c2)
        a2.value = "" + c2;
    } else
      a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2)
    null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++)
      e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$2(91));
  return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p$2(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2)
    a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; )
      a2.removeChild(a2.firstChild);
    for (; b2.firstChild; )
      a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$2(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$2(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$2(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb)
      throw Error(p$2(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2)
      for (a2 = 0; a2 < b2.length; a2++)
        Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib)
    return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
        a2 = !d2;
        break a;
      default:
        a2 = false;
    }
  if (a2)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p$2(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a2) {
    Lb = false;
  }
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2)
    throw Error(p$2(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2)
      throw Error(p$2(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a2;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$2(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$2(190));
  }
  if (3 !== c2.tag)
    throw Error(p$2(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2)
      return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2)
    for (a2 = a2.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$1 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2)
    return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn)
    return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 1, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C$1, f2 = cd.transition;
  cd.transition = null;
  try {
    C$1 = 4, fd(a2, b2, c2, d2);
  } finally {
    C$1 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2)
      hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2)
    if (b2 = Vb(a2), null === b2)
      a2 = null;
    else if (c2 = b2.tag, 13 === c2) {
      a2 = Wb(b2);
      if (null !== a2)
        return a2;
      a2 = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a2 = null;
    } else
      b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++)
    ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2)
      a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2)
    return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia && "CompositionEvent" in window, be$2 = null;
ia && "documentMode" in document && (be$2 = document.documentMode);
var ce = ia && "TextEvent" in window && !be$2, de$1 = ia && (!ae$1 || be$2 && 8 < be$2 && 11 >= be$2), ee$1 = String.fromCharCode(32), fe$1 = false;
function ge$1(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie$1 = false;
function je(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe$1 = true;
      return ee$1;
    case "textInput":
      return a2 = b2.data, a2 === ee$1 && fe$1 ? null : a2;
    default:
      return null;
  }
}
function ke(a2, b2) {
  if (ie$1)
    return "compositionend" === a2 || !ae$1 && ge$1(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$2 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le$2[a2.type] : "textarea" === b2 ? true : false;
}
function ne$1(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe$2(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re$1(a2) {
  se$2(a2, 0);
}
function te$1(a2) {
  var b2 = ue$1(a2);
  if (Wa(b2))
    return a2;
}
function ve$2(a2, b2) {
  if ("change" === a2)
    return b2;
}
var we = false;
if (ia) {
  var xe$2;
  if (ia) {
    var ye$2 = "oninput" in document;
    if (!ye$2) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye$2 = "function" === typeof ze.oninput;
    }
    xe$2 = ye$2;
  } else
    xe$2 = false;
  we = xe$2 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a2) {
  if ("value" === a2.propertyName && te$1(qe)) {
    var b2 = [];
    ne$1(b2, qe, a2, xb(a2));
    Jb(re$1, b2);
  }
}
function Ce(a2, b2, c2) {
  "focusin" === a2 ? (Ae$1(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a2 && Ae$1();
}
function De$2(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2)
    return te$1(qe);
}
function Ee$1(a2, b2) {
  if ("click" === a2)
    return te$1(b2);
}
function Fe$1(a2, b2) {
  if ("input" === a2 || "change" === a2)
    return te$1(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge;
function Ie$1(a2, b2) {
  if (He$1(a2, b2))
    return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He$1(a2[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je(a2) {
  for (; a2 && a2.firstChild; )
    a2 = a2.firstChild;
  return a2;
}
function Ke(a2, b2) {
  var c2 = Je(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le$1(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le$1(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a2 = b2.contentWindow;
    else
      break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Ne$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe(a2) {
  var b2 = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le$1(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$1(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; )
      1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe$2 = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$2 = null, Se$2 = null, Te$1 = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$1 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$2 && Ie$1(Se$2, d2) || (Se$2 = d2, d2 = oe$2(Re$2, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a2) {
  if (Xe[a2])
    return Xe[a2];
  if (!We[a2])
    return a2;
  var b2 = We[a2], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye)
      return Xe[a2] = b2[c2];
  return a2;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se$2(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$2(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue$1(k3);
            u2 = null == n2 ? h3 : ue$1(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue$1(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve$2;
        else if (me$1(h3))
          if (we)
            na = Fe$1;
          else {
            na = De$2;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
        if (na && (na = na(a2, d3))) {
          ne$1(g3, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d3);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue$1(d3) : window;
      switch (a2) {
        case "focusin":
          if (me$1(xa) || "true" === xa.contentEditable)
            Qe = xa, Re$2 = d3, Se$2 = null;
          break;
        case "focusout":
          Se$2 = Re$2 = Qe = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe$2)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae$1)
        b: {
          switch (a2) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie$1 ? ge$1(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de$1 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$2(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a2, c2) : ke(a2, c2))
        d3 = oe$2(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se$2(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe$2(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2)
    return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2)
    throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a2.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a2;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2)
    return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a2 = Mf(a2); null !== a2; ) {
          if (c2 = a2[Of])
            return c2;
          a2 = Mf(a2);
        }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue$1(a2) {
  if (5 === a2.tag || 6 === a2.tag)
    return a2.stateNode;
  throw Error(p$2(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E$1(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E$1(Wf);
  E$1(H$2);
}
function ag(a2, b2, c2) {
  if (H$2.current !== Vf)
    throw Error(p$2(168));
  G(H$2, b2);
  G(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$2(108, Ra(a2) || "Unknown", e2));
  return A({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G(H$2, a2);
  G(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2)
    throw Error(p$2(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$1(Wf), E$1(H$2), G(H$2, a2)) : E$1(Wf);
  G(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$1;
    try {
      var c2 = eg;
      for (C$1 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C$1 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$2 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$2) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2))
          throw Error(p$2(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$2 = false, xg = a2);
      }
    } else {
      if (Dg(a2))
        throw Error(p$2(418));
      a2.flags = a2.flags & -4097 | 2;
      I$2 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; )
    a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg)
    return false;
  if (!I$2)
    return Fg(a2), I$2 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2))
      throw Hg(), Error(p$2(418));
    for (; b2; )
      Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2)
      throw Error(p$2(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; )
    a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$2 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2)
      void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a2) {
  var b2 = Mg.current;
  E$1(Mg);
  a2._currentValue = b2;
}
function Sg(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2)
      break;
    a2 = a2.return;
  }
}
function Tg(a2, b2) {
  Ng = a2;
  Pg = Og = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (Ug = true), a2.firstContext = null);
}
function Vg(a2) {
  var b2 = a2._currentValue;
  if (Pg !== a2)
    if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$2(308));
      Og = a2;
      Ng.dependencies = { lanes: 0, firstContext: a2 };
    } else
      Og = Og.next = a2;
  return b2;
}
var Wg = null;
function Xg(a2) {
  null === Wg ? Wg = [a2] : Wg.push(a2);
}
function Yg(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a2, d2);
}
function Zg(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; )
    a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function ch(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a2, c2);
}
function eh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function fh(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function ih(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2)
    for (b2 = 0; b2 < a2.length; b2++) {
      var d2 = a2[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p$2(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = L(), e2 = lh(a2), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a2, f2, e2);
  null !== b2 && (mh(b2, a2, e2, d2), eh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = L(), d2 = lh(a2), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a2, e2, d2);
  null !== b2 && (mh(b2, a2, d2, c2), eh(b2, a2, d2));
} };
function oh(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie$1(c2, d2) || !Ie$1(e2, f2) : true;
}
function ph(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H$2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = jh;
  ah(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function sh(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$2(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2)
      throw Error(p$2(284));
    if (!c2._owner)
      throw Error(p$2(290, a2));
  }
  return a2;
}
function th(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$2(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function uh(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function vh(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = wh(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a3, b3, c3), d3.return = a3, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = sh(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = sh(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = zh(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a3.mode, c3, null), b3.return = a3, b3;
      th(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      th(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I$2 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$2(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$2(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I$2 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else
                b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = sh(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a3, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                } else {
                  c2(a3, d3);
                  break;
                }
              else
                b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a3, d3, f3, h3);
      if (Ka(f3))
        return t2(a3, d3, f3, h3);
      th(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = xh(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a2) {
  if (a2 === Dh)
    throw Error(p$2(174));
  return a2;
}
function Ih(a2, b2) {
  G(Gh, b2);
  G(Fh, a2);
  G(Eh, Dh);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E$1(Eh);
  G(Eh, b2);
}
function Jh() {
  E$1(Eh);
  E$1(Fh);
  E$1(Gh);
}
function Kh(a2) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G(Fh, a2), G(Eh, c2));
}
function Lh(a2) {
  Fh.current === a2 && (E$1(Eh), E$1(Fh));
}
var M$4 = Uf(0);
function Mh(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a2 = 0; a2 < Nh.length; a2++)
    Nh[a2]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N$2 = null, O$2 = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q$1() {
  throw Error(p$2(321));
}
function Wh(a2, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++)
    if (!He$1(a2[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a2, b2, c2, d2, e2, f2) {
  Rh = f2;
  N$2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a2 || null === a2.memoizedState ? Yh : Zh;
  a2 = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      P = O$2 = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a2 = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O$2 && null !== O$2.next;
  Rh = 0;
  P = O$2 = N$2 = null;
  Sh = false;
  if (b2)
    throw Error(p$2(300));
  return a2;
}
function bi() {
  var a2 = 0 !== Uh;
  Uh = 0;
  return a2;
}
function ci() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N$2.memoizedState = P = a2 : P = P.next = a2;
  return P;
}
function di() {
  if (null === O$2) {
    var a2 = N$2.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else
    a2 = O$2.next;
  var b2 = null === P ? N$2.memoizedState : P.next;
  if (null !== b2)
    P = b2, O$2 = a2;
  else {
    if (null === a2)
      throw Error(p$2(310));
    O$2 = a2;
    a2 = { memoizedState: O$2.memoizedState, baseState: O$2.baseState, baseQueue: O$2.baseQueue, queue: O$2.queue, next: null };
    null === P ? N$2.memoizedState = P = a2 : P = P.next = a2;
  }
  return P;
}
function ei(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function fi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a2;
  var d2 = O$2, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N$2.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$1(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, N$2.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a2) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$1(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a2, b2) {
  var c2 = N$2, d2 = di(), e2 = b2(), f2 = !He$1(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R$1)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = N$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function mi(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a2);
}
function ki(a2, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a2);
  });
}
function oi(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He$1(a2, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a2) {
  var b2 = Zg(a2, 1);
  null !== b2 && mh(b2, a2, 1, -1);
}
function qi(a2) {
  var b2 = ci();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ri.bind(null, N$2, a2);
  return [b2.memoizedState, a2];
}
function li(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N$2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function si() {
  return di().memoizedState;
}
function ti(a2, b2, c2, d2) {
  var e2 = ci();
  N$2.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a2, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O$2) {
    var g2 = O$2.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N$2.flags |= a2;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a2, b2) {
  return ti(8390656, 8, a2, b2);
}
function ji(a2, b2) {
  return ui(2048, 8, a2, b2);
}
function wi(a2, b2) {
  return ui(4, 2, a2, b2);
}
function xi(a2, b2) {
  return ui(4, 4, a2, b2);
}
function yi(a2, b2) {
  if ("function" === typeof b2)
    return a2 = a2(), b2(a2), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a2 = a2(), b2.current = a2, function() {
      b2.current = null;
    };
}
function zi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ui(4, 4, yi.bind(null, b2, a2), c2);
}
function Ai() {
}
function Bi(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function Ci(a2, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function Di(a2, b2, c2) {
  if (0 === (Rh & 21))
    return a2.baseState && (a2.baseState = false, Ug = true), a2.memoizedState = c2;
  He$1(c2, b2) || (c2 = yc(), N$2.lanes |= c2, hh |= c2, a2.baseState = true);
  return b2;
}
function Ei(a2, b2) {
  var c2 = C$1;
  C$1 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$1 = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a2, b2, c2) {
  var d2 = lh(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, c2);
  else if (c2 = Yg(a2, b2, c2, d2), null !== c2) {
    var e2 = L();
    mh(c2, a2, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a2, b2, c2) {
  var d2 = lh(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a2))
    Ii(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He$1(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a2, b2, e2, d2);
    null !== c2 && (e2 = L(), mh(c2, a2, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a2) {
  var b2 = a2.alternate;
  return a2 === N$2 || null !== b2 && b2 === N$2;
}
function Ii(a2, b2) {
  Th = Sh = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Ji(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q$1, useContext: Q$1, useEffect: Q$1, useImperativeHandle: Q$1, useInsertionEffect: Q$1, useLayoutEffect: Q$1, useMemo: Q$1, useReducer: Q$1, useRef: Q$1, useState: Q$1, useDebugValue: Q$1, useDeferredValue: Q$1, useTransition: Q$1, useMutableSource: Q$1, useSyncExternalStore: Q$1, useId: Q$1, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a2, b2) {
  ci().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ti(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ti(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = Gi.bind(null, N$2, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = ci();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a2) {
  return ci().memoizedState = a2;
}, useTransition: function() {
  var a2 = qi(false), b2 = a2[0];
  a2 = Ei.bind(null, a2[1]);
  ci().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = N$2, e2 = ci();
  if (I$2) {
    if (void 0 === c2)
      throw Error(p$2(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R$1)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = ci(), b2 = R$1.identifierPrefix;
  if (I$2) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a2) {
    var b2 = di();
    return Di(b2, O$2.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = fi(ei)[0], b2 = di().memoizedState;
    return [a2, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a2) {
  var b2 = di();
  return null === O$2 ? b2.memoizedState = a2 : Di(b2, O$2.memoizedState, a2);
}, useTransition: function() {
  var a2 = gi(ei)[0], b2 = di().memoizedState;
  return [a2, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Li(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a2, b2);
  };
  return c2;
}
function Ri(a2, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a2, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ui.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Vi(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag)
      b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Wi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1))
    return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Ch(b2, null, c2, d2) : Bh(b2, a2.child, c2, d2);
}
function Zi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a2, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$2 && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, d2, e2);
  return b2.child;
}
function aj(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a2, b2, f2, d2, e2);
    a2 = yh(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie$1;
    if (c2(g2, d2) && a2.ref === b2.ref)
      return $i(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = wh(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function cj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie$1(f2, d2) && a2.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2))
        0 !== (a2.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a2.lanes, $i(a2, b2, e2);
  }
  return dj(a2, b2, c2, d2, e2);
}
function ej(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a2, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
  Yi(a2, b2, e2, c2);
  return b2.child;
}
function hj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a2, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a2 && !Ug)
    return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, $i(a2, b2, e2);
  I$2 && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a2, b2, c2, e2);
  return b2.child;
}
function ij(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a2, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a2, b2, c2, d2, f2, e2);
}
function kj(a2, b2, c2, d2, e2, f2) {
  hj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a2, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Bh(b2, a2.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  Ih(a2, b2.containerInfo);
}
function mj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a2, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function pj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = M$4.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState)
    e2 |= 1;
  G(M$4, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a2 = Ah(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a2) : rj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a2, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function tj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a2.child, null, c2);
  a2 = rj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function sj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p$2(422))), tj(a2, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a2.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$2(419));
    d2 = Li(f2, d2, void 0);
    return tj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (Ug || h2) {
    d2 = R$1;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a2, e2), mh(d2, a2, e2, -1));
    }
    uj();
    d2 = Li(Error(p$2(421)));
    return tj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a2.child, b2 = vj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$2 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a2.return, b2, c2);
}
function xj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a2, b2, d2.children, c2);
  d2 = M$4.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128))
      a:
        for (a2 = b2.child; null !== a2; ) {
          if (13 === a2.tag)
            null !== a2.memoizedState && wj(a2, c2, b2);
          else if (19 === a2.tag)
            wj(a2, c2, b2);
          else if (null !== a2.child) {
            a2.child.return = a2;
            a2 = a2.child;
            continue;
          }
          if (a2 === b2)
            break a;
          for (; null === a2.sibling; ) {
            if (null === a2.return || a2.return === b2)
              break a;
            a2 = a2.return;
          }
          a2.sibling.return = a2.return;
          a2 = a2.sibling;
        }
    d2 &= 1;
  }
  G(M$4, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a2 = c2.alternate, null !== a2 && null === Mh(a2) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a2 = e2.alternate;
          if (null !== a2 && null === Mh(a2)) {
            b2.child = e2;
            break;
          }
          a2 = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a2;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a2 && b2.child !== a2.child)
    throw Error(p$2(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = wh(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; )
      a2 = a2.sibling, c2 = c2.sibling = wh(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G(M$4, M$4.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a2, b2, c2);
        G(M$4, M$4.current & 1);
        a2 = $i(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G(M$4, M$4.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2)
          return yj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(M$4, M$4.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a2, b2, c2);
  }
  return $i(a2, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A({}, e2, { value: void 0 });
        d2 = A({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a2, b2) {
  if (!I$2)
    switch (a2.tailMode) {
      case "hidden":
        b2 = a2.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a2.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a2.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
    }
}
function S$3(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else
    for (e2 = a2.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Fj(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$3(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$3(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E$1(Wf);
      E$1(H$2);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child)
        Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a2, b2);
      S$3(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode)
        Cj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p$2(166));
          S$3(b2);
          return null;
        }
        a2 = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D$2(lf[e2], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a2
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          Aj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a2);
                D$2("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D$2(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$2("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a2
                );
                D$2("load", a2);
                e2 = d2;
                break;
              case "details":
                D$2("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za(a2, d2);
                e2 = Ya(a2, d2);
                D$2("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A({}, d2, { value: void 0 });
                D$2("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$2("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$3(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode)
        Dj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p$2(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2)
              switch (a2.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                  break;
                case 5:
                  true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$3(b2);
      return null;
    case 13:
      E$1(M$4);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2)
              throw Error(p$2(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$2(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$3(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (M$4.current & 1) ? 0 === T$2 && (T$2 = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$3(b2);
      return null;
    case 4:
      return Jh(), Bj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$3(b2), null;
    case 10:
      return Rg(b2.type._context), S$3(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$3(b2), null;
    case 19:
      E$1(M$4);
      f2 = b2.memoizedState;
      if (null === f2)
        return S$3(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T$2 || null !== a2 && 0 !== (a2.flags & 128))
            for (a2 = b2.child; null !== a2; ) {
              g2 = Mh(a2);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
                G(M$4, M$4.current & 1 | 2);
                return b2.child;
              }
              a2 = a2.sibling;
            }
          null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a2 = Mh(g2), null !== a2) {
            if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$2)
              return S$3(b2), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M$4.current, G(M$4, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$3(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S$3(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$3(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b2.tag));
}
function Jj(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E$1(Wf), E$1(H$2), Oh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E$1(M$4);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$2(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$1(M$4), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U$2 = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V$1 = null;
function Mj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W$1(a2, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$1(a2, b2, d2);
  }
}
var Oj = false;
function Pj(a2, b2) {
  Cf = dd;
  a2 = Me$1();
  if (Ne$1(a2)) {
    if ("selectionStart" in a2)
      var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else
      a: {
        c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a2)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V$1 = b2; null !== V$1; )
    if (b2 = V$1, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2)
      a2.return = b2, V$1 = a2;
    else
      for (; null !== V$1; ) {
        b2 = V$1;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (F2) {
          W$1(b2, b2.return, F2);
        }
        a2 = b2.sibling;
        if (null !== a2) {
          a2.return = b2.return;
          V$1 = a2;
          break;
        }
        V$1 = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Tj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Tj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Uj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Vj(a2) {
  a:
    for (; ; ) {
      for (; null === a2.sibling; ) {
        if (null === a2.return || Uj(a2.return))
          return null;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
        if (a2.flags & 2)
          continue a;
        if (null === a2.child || 4 === a2.tag)
          continue a;
        else
          a2.child.return = a2, a2 = a2.child;
      }
      if (!(a2.flags & 2))
        return a2.stateNode;
    }
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Wj(a2, b2, c2), a2 = a2.sibling;
}
function Xj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2)
    a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2))
    for (Xj(a2, b2, c2), a2 = a2.sibling; null !== a2; )
      Xj(a2, b2, c2), a2 = a2.sibling;
}
var X$1 = null, Yj = false;
function Zj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a2, b2, c2), c2 = c2.sibling;
}
function ak(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U$2 || Mj(c2, b2);
    case 6:
      var d2 = X$1, e2 = Yj;
      X$1 = null;
      Zj(a2, b2, c2);
      X$1 = d2;
      Yj = e2;
      null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$1.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$1 && (Yj ? (a2 = X$1, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$1, c2.stateNode));
      break;
    case 4:
      d2 = X$1;
      e2 = Yj;
      X$1 = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a2, b2, c2);
      X$1 = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a2, b2, c2);
      break;
    case 1:
      if (!U$2 && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W$1(c2, b2, h2);
        }
      Zj(a2, b2, c2);
      break;
    case 21:
      Zj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$2 = (d2 = U$2) || null !== c2.memoizedState, Zj(a2, b2, c2), U$2 = d2) : Zj(a2, b2, c2);
      break;
    default:
      Zj(a2, b2, c2);
  }
}
function bk(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a2, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X$1 = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X$1 = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X$1)
          throw Error(p$2(160));
        ak(f2, g2, e2);
        X$1 = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W$1(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a2), b2 = b2.sibling;
}
function ek(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        try {
          Qj(3, a2, a2.return), Rj(3, a2);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
        try {
          Qj(5, a2, a2.return);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a2);
      fk(a2);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W$1(a2, a2.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4) {
        if (null === a2.stateNode)
          throw Error(p$2(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a2);
      fk(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W$1(a2, a2.return, t2);
        }
      break;
    case 4:
      dk(b2, a2);
      fk(a2);
      break;
    case 13:
      dk(b2, a2);
      fk(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
      d2 & 4 && bk(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$2 = (l2 = U$2) || m2, dk(b2, a2), U$2 = l2) : dk(b2, a2);
      fk(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1))
          for (V$1 = a2, m2 = a2.child; null !== m2; ) {
            for (q2 = V$1 = m2; null !== V$1; ) {
              r2 = V$1;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W$1(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V$1 = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a2; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W$1(a2, a2.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a2)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a2)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a2);
      fk(a2);
      d2 & 4 && bk(a2);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a2
      ), fk(a2);
  }
}
function fk(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$2(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a2);
          Xj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a2);
          Wj(a2, h2, g2);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W$1(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function ik(a2, b2, c2) {
  V$1 = a2;
  jk(a2);
}
function jk(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V$1; ) {
    var e2 = V$1, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$2;
        h2 = Kj;
        var l2 = U$2;
        Kj = g2;
        if ((U$2 = k2) && !l2)
          for (V$1 = e2; null !== V$1; )
            g2 = V$1, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V$1 = k2) : kk(e2);
        for (; null !== f2; )
          V$1 = f2, jk(f2), f2 = f2.sibling;
        V$1 = e2;
        Kj = h2;
        U$2 = l2;
      }
      lk(a2);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$1 = f2) : lk(a2);
  }
}
function lk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U$2 || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U$2)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$2(163));
          }
        U$2 || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W$1(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function hk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$1 = c2;
      break;
    }
    V$1 = b2.return;
  }
}
function kk(a2) {
  for (; null !== V$1; ) {
    var b2 = V$1;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W$1(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$1(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W$1(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$1(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V$1 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$1 = h2;
      break;
    }
    V$1 = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R$1 = null, Y$1 = null, Z$1 = 0, gj = 0, fj = Uf(0), T$2 = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a2) {
  if (0 === (a2.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z$1)
    return Z$1 & -Z$1;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a2 = C$1;
  if (0 !== a2)
    return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function mh(a2, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$2(185));
  Ac(a2, c2, d2);
  if (0 === (K & 2) || a2 !== R$1)
    a2 === R$1 && (0 === (K & 2) && (rk |= c2), 4 === T$2 && Dk(a2, Z$1)), Ek(a2, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a2.tag ? ig(Fk.bind(null, a2)) : hg(Fk.bind(null, a2)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Hk(a2, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$2(327));
  var c2 = a2.callbackNode;
  if (Ik() && a2.callbackNode !== c2)
    return null;
  var d2 = uc(a2, a2 === R$1 ? Z$1 : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2)
    b2 = Jk(a2, d2);
  else {
    b2 = d2;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R$1 !== a2 || Z$1 !== b2)
      vk = null, Hj = B() + 500, Lk(a2, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a2, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y$1 ? b2 = 0 : (R$1 = null, Z$1 = 0, b2 = T$2);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Ok(a2, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
    if (6 === b2)
      Dk(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Ok(a2, f2))), 1 === b2))
        throw c2 = qk, Lk(a2, 0), Dk(a2, d2), Ek(a2, B()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Qk(a2, uk, vk);
          break;
        case 3:
          Dk(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
            if (0 !== uc(a2, 0))
              break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), b2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 4:
          Dk(a2, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Qk.bind(null, a2, uk, vk), d2);
            break;
          }
          Qk(a2, uk, vk);
          break;
        case 5:
          Qk(a2, uk, vk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ek(a2, B());
  return a2.callbackNode === c2 ? Hk.bind(null, a2) : null;
}
function Ok(a2, b2) {
  var c2 = tk;
  a2.current.memoizedState.isDehydrated && (Lk(a2, b2).flags |= 256);
  a2 = Jk(a2, b2);
  2 !== a2 && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a2;
}
function Gj(a2) {
  null === uk ? uk = a2 : uk.push.apply(uk, a2);
}
function Pk(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He$1(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a2)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a2, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a2) {
  if (0 !== (K & 6))
    throw Error(p$2(327));
  Ik();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1))
    return Ek(a2, B()), null;
  var c2 = Jk(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Ok(a2, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a2, 0), Dk(a2, b2), Ek(a2, B()), c2;
  if (6 === c2)
    throw Error(p$2(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Qk(a2, uk, vk);
  Ek(a2, B());
  return null;
}
function Rk(a2, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a2(b2);
  } finally {
    K = c2, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a2) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b2 = K;
  K |= 1;
  var c2 = pk.transition, d2 = C$1;
  try {
    if (pk.transition = null, C$1 = 1, a2)
      return a2();
  } finally {
    C$1 = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E$1(fj);
}
function Lk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1)
    for (c2 = Y$1.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E$1(Wf);
          E$1(H$2);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E$1(M$4);
          break;
        case 19:
          E$1(M$4);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R$1 = a2;
  Y$1 = a2 = wh(a2.current, null);
  Z$1 = gj = b2;
  T$2 = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a2;
}
function Nk(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N$2.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O$2 = N$2 = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T$2 = 1;
        qk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$1;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I$2 && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T$2 && (T$2 = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi(f2, k2, b2);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a2 = nk.current;
  nk.current = ai;
  return null === a2 ? ai : a2;
}
function uj() {
  if (0 === T$2 || 3 === T$2 || 2 === T$2)
    T$2 = 4;
  null === R$1 || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R$1, Z$1);
}
function Jk(a2, b2) {
  var c2 = K;
  K |= 2;
  var d2 = Kk();
  if (R$1 !== a2 || Z$1 !== b2)
    vk = null, Lk(a2, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a2, e2);
    }
  while (1);
  Qg();
  K = c2;
  nk.current = d2;
  if (null !== Y$1)
    throw Error(p$2(261));
  R$1 = null;
  Z$1 = 0;
  return T$2;
}
function Uk() {
  for (; null !== Y$1; )
    Vk(Y$1);
}
function Mk() {
  for (; null !== Y$1 && !cc(); )
    Vk(Y$1);
}
function Vk(a2) {
  var b2 = Wk(a2.alternate, a2, gj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Tk(a2) : Y$1 = b2;
  ok.current = null;
}
function Tk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a2)
        a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T$2 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (null !== b2);
  0 === T$2 && (T$2 = 5);
}
function Qk(a2, b2, c2) {
  var d2 = C$1, e2 = pk.transition;
  try {
    pk.transition = null, C$1 = 1, Xk(a2, b2, c2, d2);
  } finally {
    pk.transition = e2, C$1 = d2;
  }
  return null;
}
function Xk(a2, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$2(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2)
    return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current)
    throw Error(p$2(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === R$1 && (Y$1 = R$1 = null, Z$1 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C$1;
    C$1 = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a2, c2);
    ek(c2, a2);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    ik(c2);
    dc();
    K = h2;
    C$1 = g2;
    pk.transition = f2;
  } else
    a2.current = c2;
  wk && (wk = false, xk = a2, yk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a2, B());
  if (null !== b2)
    for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a2 = Qi, Qi = null, a2;
  0 !== (yk & 1) && 0 !== a2.tag && Ik();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === Ak ? zk++ : (zk = 0, Ak = a2) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a2 = Dc(yk), b2 = pk.transition, c2 = C$1;
    try {
      pk.transition = null;
      C$1 = 16 > a2 ? 16 : a2;
      if (null === xk)
        var d2 = false;
      else {
        a2 = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$2(331));
        var e2 = K;
        K |= 4;
        for (V$1 = a2.current; null !== V$1; ) {
          var f2 = V$1, g2 = f2.child;
          if (0 !== (V$1.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$1 = l2; null !== V$1; ) {
                  var m2 = V$1;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V$1 = q2;
                  else
                    for (; null !== V$1; ) {
                      m2 = V$1;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V$1 = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V$1 = r2;
                        break;
                      }
                      V$1 = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$1 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V$1 = g2;
          else
            b:
              for (; null !== V$1; ) {
                f2 = V$1;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V$1 = x2;
                  break b;
                }
                V$1 = f2.return;
              }
        }
        var w2 = a2.current;
        for (V$1 = w2; null !== V$1; ) {
          g2 = V$1;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V$1 = u2;
          else
            b:
              for (g2 = w2; null !== V$1; ) {
                h2 = V$1;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W$1(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V$1 = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V$1 = F2;
                  break b;
                }
                V$1 = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a2);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C$1 = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a2, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a2, b2, 1);
  a2 = dh(a2, b2, 1);
  b2 = L();
  null !== a2 && (Ac(a2, 1, b2), Ek(a2, b2));
}
function W$1(a2, b2, c2) {
  if (3 === a2.tag)
    Yk(a2, a2, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a2, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a2 = Ki(c2, a2);
          a2 = Ri(b2, a2, 1);
          b2 = dh(b2, a2, 1);
          a2 = L();
          null !== b2 && (Ac(b2, 1, a2), Ek(b2, a2));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  R$1 === a2 && (Z$1 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$1 & 130023424) === Z$1 && 500 > B() - gk ? Lk(a2, 0) : sk |= c2);
  Ek(a2, b2);
}
function Zk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L();
  a2 = Zg(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Ek(a2, c2));
}
function vj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a2, c2);
}
function ck(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a2, c2);
}
var Wk;
Wk = function(a2, b2, c2) {
  if (null !== a2)
    if (a2.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a2, b2, c2);
      Ug = 0 !== (a2.flags & 131072) ? true : false;
    }
  else
    Ug = false, I$2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$2.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a2, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a2, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$2 && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a2 = Lg(d2, a2);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a2), c2);
            break a;
        }
        throw Error(p$2(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a2, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a2)
          throw Error(p$2(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a2, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p$2(423)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p$2(424)), b2);
            b2 = mj(a2, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$2 = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a2, b2, c2);
            break a;
          }
          Yi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a2, b2), Yi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return pj(a2, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Bh(b2, null, d2, c2) : Yi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a2, b2, d2, e2, c2);
    case 7:
      return Yi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He$1(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a2, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$2(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a2, b2, d2, e2, c2);
    case 15:
      return cj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a2, c2);
    case 19:
      return yj(a2, b2, c2);
    case 22:
      return ej(a2, b2, c2);
  }
  throw Error(p$2(156, b2.tag));
};
function Gk(a2, b2) {
  return ac(a2, b2);
}
function al(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new al(a2, b2, c2, d2);
}
function bj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function $k(a2) {
  if ("function" === typeof a2)
    return bj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da)
      return 11;
    if (a2 === Ga)
      return 14;
  }
  return 2;
}
function wh(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function yh(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2)
    bj(a2) && (g2 = 1);
  else if ("string" === typeof a2)
    g2 = 5;
  else
    a:
      switch (a2) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
        case Ea:
          return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
        case Fa:
          return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a2 && null !== a2)
            switch (a2.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$2(130, null == a2 ? a2 : typeof a2, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function qj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function xh(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function zh(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function bl(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new bl(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a2;
}
function dl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function el(a2) {
  if (!a2)
    return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag)
      throw Error(p$2(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$2(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2))
      return bg(a2, c2, b2);
  }
  return b2;
}
function fl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = cl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = el(null);
  c2 = a2.current;
  d2 = L();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Ek(a2, d2);
  return a2;
}
function gl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = L(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = dh(e2, b2, g2);
  null !== a2 && (mh(a2, e2, g2, f2), eh(a2, e2, g2));
  return g2;
}
function hl(a2) {
  a2 = a2.current;
  if (!a2.child)
    return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function il(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a2, b2) {
  il(a2, b2);
  (a2 = a2.alternate) && il(a2, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ml(a2) {
  this._internalRoot = a2;
}
nl.prototype.render = ml.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$2(409));
  gl(a2, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Sk(function() {
      gl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a2) {
  this._internalRoot = a2;
}
nl.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function pl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function ql() {
}
function rl(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = hl(g2);
        f2.call(a3);
      };
    }
    var g2 = fl(b2, d2, a2, 0, null, false, false, "", ql);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Sk();
    return g2;
  }
  for (; e2 = a2.lastChild; )
    a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = hl(k2);
      h2.call(a3);
    };
  }
  var k2 = cl(a2, 0, false, null, null, false, false, "", ql);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = hl(g2);
        h2.call(a3);
      };
    }
    gl(b2, g2, a2, e2);
  } else
    g2 = rl(c2, b2, a2, e2, d2);
  return hl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a2, 1);
        if (null !== b3) {
          var c3 = L();
          mh(b3, a2, 1, c3);
        }
      }), jl(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = Zg(a2, 134217728);
    if (null !== b2) {
      var c2 = L();
      mh(b2, a2, 134217728, c2);
    }
    jl(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = lh(a2), c2 = Zg(a2, b2);
    if (null !== c2) {
      var d2 = L();
      mh(c2, a2, b2, d2);
    }
    jl(a2, b2);
  }
};
Hc = function() {
  return C$1;
};
Ic = function(a2, b2) {
  var c2 = C$1;
  try {
    return C$1 = a2, b2();
  } finally {
    C$1 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p$2(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue$1, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a2) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p$2(200));
  return dl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!ol(a2))
    throw Error(p$2(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2)
    return null;
  if (1 === a2.nodeType)
    return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render)
      throw Error(p$2(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$2(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Sk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$2(200));
  return sl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!ol(a2))
    throw Error(p$2(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2)
    for (a2 = 0; a2 < d2.length; a2++)
      c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!pl(b2))
    throw Error(p$2(200));
  return sl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!pl(a2))
    throw Error(p$2(40));
  return a2._reactRootContainer ? (Sk(function() {
    sl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p$2(200));
  if (null == a2 || void 0 === a2._reactInternals)
    throw Error(p$2(38));
  return sl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var createRoot;
var m$2 = reactDomExports;
{
  createRoot = m$2.createRoot;
  m$2.hydrateRoot;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$4 = reactExports, k$1 = Symbol.for("react.element"), l$3 = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$2 = f$4.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q$1(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2)
    m$1.call(a2, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$1, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$3;
reactJsxRuntime_production_min.jsx = q$1;
reactJsxRuntime_production_min.jsxs = q$1;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search,
      hash
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search,
        hash
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index) {
  return {
    usr: location.state,
    key: location.key,
    idx: index
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$2({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index = getIndex();
  if (index == null) {
    index = 0;
    globalHistory.replaceState(_extends$2({}, globalHistory.state, {
      idx: index
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index;
    index = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex() + 1;
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index = getIndex();
    let historyState = getHistoryState(location, index);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes2, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes2);
  rankRouteBranches(branches);
  let matches = null;
  for (let i2 = 0; matches == null && i2 < branches.length; ++i2) {
    matches = matchRouteBranch(
      branches[i2],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes2, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes2.forEach((route, index) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path, index) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_2, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index) => index === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$2({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect(cb2) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
const OutletContext = /* @__PURE__ */ reactExports.createContext(null);
function useOutlet(context) {
  let outlet = reactExports.useContext(RouteContext).outlet;
  if (outlet) {
    return /* @__PURE__ */ reactExports.createElement(OutletContext.Provider, {
      value: context
    }, outlet);
  }
  return outlet;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes2, locationArg) {
  return useRoutesImpl(routes2, locationArg);
}
function useRoutesImpl(routes2, locationArg, dataRouterState) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes2, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterState);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$1({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error || state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match.route.errorElement || match.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  var _dataRouterState2;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (matches == null) {
    var _dataRouterState;
    if ((_dataRouterState = dataRouterState) != null && _dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = (_dataRouterState2 = dataRouterState) == null ? void 0 : _dataRouterState2.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = null;
    if (dataRouterState) {
      errorElement = match.route.errorElement || defaultErrorElement;
    }
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (match.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match.route.Component, null);
      } else if (match.route.element) {
        children = match.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match,
        routeContext: {
          outlet,
          matches: matches2,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match.route.ErrorBoundary || match.route.errorElement || index === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$1({
        fromRouteId: id2
      }, options));
    }
  }, [router, id2]);
  return navigate;
}
function Outlet(props) {
  return useOutlet(props.context);
}
function Route(_props) {
  invariant(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search,
        hash,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search, hash, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes2 = [];
  reactExports.Children.forEach(children, (element, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index];
    if (element.type === reactExports.Fragment) {
      routes2.push.apply(routes2, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes2.push(route);
  });
  return routes2;
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
const START_TRANSITION = "startTransition";
const startTransitionImpl = e$2[START_TRANSITION];
function BrowserRouter(_ref) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to;
    if (isBrowser) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path != null) {
          to = path + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
const HomePageCard = ({
  item,
  index
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid grid-cols-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `col-span-1`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Link,
      {
        to: item.url,
        "aria-describedby": `home-page-card-${index}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              role: "presentation",
              alt: "",
              className: `w-full cursor-pointer `,
              src: `${"https://bhasling.github.io/hydroframe_demo/"}/images/lending/` + item.image
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-bold text-2xl mb-1`, children: item.title }) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-1 text-primary italic", children: item.group }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: `home-page-card-${index}`, className: "font-base", children: item.description })
    ] })
  ] }) });
};
function Home() {
  const cardList = [
    {
      image: "hydroGEN-hydroframe.jpeg",
      url: "/hydrogen",
      title: "HydroGEN",
      group: "APPLICATIONS",
      description: "Explore current and future watershed conditions across the US with HydroGEN"
    },
    {
      image: "hydroData-hydroframe.jpeg",
      url: "/hydrodata",
      title: "HydroData",
      group: "DATA AND SIMULATIONS",
      description: "Access hydrologic datasets and model results"
    },
    {
      image: "parFlow-conus1.0-model-hydroframe.jpeg",
      url: "/parflow-conus1",
      title: "ParFlow CONUS1.0",
      group: "DATA AND SIMULATIONS",
      description: "Learn more about the first generation national ParFlow model"
    },
    {
      image: "parFlow-conus2.0-model-hydroframe.jpeg",
      url: "/parflow-conus2",
      title: "ParFlow CONUS2.0",
      group: "DATA AND SIMULATIONS",
      description: "Learn more about the second generation national ParFlow model"
    },
    {
      image: "parFlow-resources-hydroframe.jpeg",
      url: "/parflow-resources",
      title: "ParFlow Resources",
      group: "MODELING TOOLS",
      description: "Find training resources and tools for working with ParFlow models"
    },
    {
      image: "subsetting-python-tools-hydroframe.jpeg",
      url: "/subsettools",
      title: "SubsetTools",
      group: "MODELING TOOLS",
      description: "Build your own watershed model from the national ParFlow platform"
    },
    {
      image: "sandtank-ML-hydroframe.jpeg",
      url: "/sandtank-ml",
      title: "ParFlow Sandtank ML",
      group: "EDUCATIONAL TOOLS",
      description: "Use our machine learning educational application to explore how ML emulators are used in hydrology"
    },
    {
      image: "parFlow-sandtank-model-hydroframe.jpeg",
      url: "/parflow-sandtank-model",
      title: "ParFlow Sandtank Model",
      group: "EDUCATIONAL TOOLS",
      description: "Use our sandtank educational application to learn about groundwater hydrology"
    },
    {
      image: "other-tools-and-partners-hydroframe.jpeg",
      url: "/other-tools-and-partners",
      title: "Other Tools and Partners",
      group: "EDUCATIONAL TOOLS",
      description: "Educational tools and outreach partners"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid grid-cols-12 gap-y-5 py-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:grid lg:grid-cols-12 lg:divide-x-[3px] divide-gray-200 items-center ", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "w-full m-auto lg:m-0",
          src: `${"https://bhasling.github.io/hydroframe_demo/"}images/Logo-Blue-hydroframe.png`,
          alt: ""
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-6 text-primary md:pl-10 lg:max-w-full max-w-full lg:py-3  lg:m-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "A national framework for hydrologic modeling and scientific discovery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-black mt-2", children: "Our goal is to make national hydrologic simulations and datasets more accessible. We have a variety of tools available to access data, build models and learn more about our national watersheds and hydrology." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 m-auto pb-30 gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3", children: cardList.map((item, ind) => {
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        HomePageCard,
        {
          item,
          index: ind
        },
        "hc_" + ind
      );
    }) })
  ] });
}
var i$2 = Object.defineProperty;
var d$3 = (t2, e2, n2) => e2 in t2 ? i$2(t2, e2, { enumerable: true, configurable: true, writable: true, value: n2 }) : t2[e2] = n2;
var r$1 = (t2, e2, n2) => (d$3(t2, typeof e2 != "symbol" ? e2 + "" : e2, n2), n2);
let o$6 = class o {
  constructor() {
    r$1(this, "current", this.detect());
    r$1(this, "handoffState", "pending");
    r$1(this, "currentId", 0);
  }
  set(e2) {
    this.current !== e2 && (this.handoffState = "pending", this.currentId = 0, this.current = e2);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
};
let s$5 = new o$6();
let l$2 = (e2, f2) => {
  s$5.isServer ? reactExports.useEffect(e2, f2) : reactExports.useLayoutEffect(e2, f2);
};
function s$4(e2) {
  let r2 = reactExports.useRef(e2);
  return l$2(() => {
    r2.current = e2;
  }, [e2]), r2;
}
function t$4(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o3) => setTimeout(() => {
    throw o3;
  }));
}
function o$5() {
  let n2 = [], r2 = { addEventListener(e2, t2, s2, a2) {
    return e2.addEventListener(t2, s2, a2), r2.add(() => e2.removeEventListener(t2, s2, a2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r2.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r2.requestAnimationFrame(() => r2.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r2.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t$4(() => {
      t2.current && e2[0]();
    }), r2.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, s2) {
    let a2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: s2 }), this.add(() => {
      Object.assign(e2.style, { [t2]: a2 });
    });
  }, group(e2) {
    let t2 = o$5();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return n2.push(e2), () => {
      let t2 = n2.indexOf(e2);
      if (t2 >= 0)
        for (let s2 of n2.splice(t2, 1))
          s2();
    };
  }, dispose() {
    for (let e2 of n2.splice(0))
      e2();
  } };
  return r2;
}
function p() {
  let [e2] = reactExports.useState(o$5);
  return reactExports.useEffect(() => () => e2.dispose(), [e2]), e2;
}
let o$4 = function(t2) {
  let e2 = s$4(t2);
  return React$6.useCallback((...r2) => e2.current(...r2), [e2]);
};
function s$3() {
  let r2 = typeof document == "undefined";
  return "useSyncExternalStore" in e$2 ? ((o3) => o3.useSyncExternalStore)(e$2)(() => () => {
  }, () => false, () => !r2) : false;
}
function l$1() {
  let r2 = s$3(), [e2, n2] = reactExports.useState(s$5.isHandoffComplete);
  return e2 && s$5.isHandoffComplete === false && n2(false), reactExports.useEffect(() => {
    e2 !== true && n2(true);
  }, [e2]), reactExports.useEffect(() => s$5.handoff(), []), r2 ? false : e2;
}
var o$3;
let I$1 = (o$3 = React$6.useId) != null ? o$3 : function() {
  let n2 = l$1(), [e2, u2] = React$6.useState(n2 ? () => s$5.nextId() : null);
  return l$2(() => {
    e2 === null && u2(s$5.nextId());
  }, [e2]), e2 != null ? "" + e2 : void 0;
};
function u$2(r2, n2, ...a2) {
  if (r2 in n2) {
    let e2 = n2[r2];
    return typeof e2 == "function" ? e2(...a2) : e2;
  }
  let t2 = new Error(`Tried to handle "${r2}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e2) => `"${e2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t2, u$2), t2;
}
function e$1(r2) {
  return s$5.isServer ? null : r2 instanceof Node ? r2.ownerDocument : r2 != null && r2.hasOwnProperty("current") && r2.current instanceof Node ? r2.current.ownerDocument : document;
}
let c$3 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e2) => `${e2}:not([tabindex='-1'])`).join(",");
var M$3 = ((n2) => (n2[n2.First = 1] = "First", n2[n2.Previous = 2] = "Previous", n2[n2.Next = 4] = "Next", n2[n2.Last = 8] = "Last", n2[n2.WrapAround = 16] = "WrapAround", n2[n2.NoScroll = 32] = "NoScroll", n2))(M$3 || {}), N$1 = ((o3) => (o3[o3.Error = 0] = "Error", o3[o3.Overflow = 1] = "Overflow", o3[o3.Success = 2] = "Success", o3[o3.Underflow = 3] = "Underflow", o3))(N$1 || {}), F$1 = ((t2) => (t2[t2.Previous = -1] = "Previous", t2[t2.Next = 1] = "Next", t2))(F$1 || {});
function f$3(e2 = document.body) {
  return e2 == null ? [] : Array.from(e2.querySelectorAll(c$3)).sort((r2, t2) => Math.sign((r2.tabIndex || Number.MAX_SAFE_INTEGER) - (t2.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var T$1 = ((t2) => (t2[t2.Strict = 0] = "Strict", t2[t2.Loose = 1] = "Loose", t2))(T$1 || {});
function h$2(e2, r2 = 0) {
  var t2;
  return e2 === ((t2 = e$1(e2)) == null ? void 0 : t2.body) ? false : u$2(r2, { [0]() {
    return e2.matches(c$3);
  }, [1]() {
    let l2 = e2;
    for (; l2 !== null; ) {
      if (l2.matches(c$3))
        return true;
      l2 = l2.parentElement;
    }
    return false;
  } });
}
function D$1(e2) {
  let r2 = e$1(e2);
  o$5().nextFrame(() => {
    r2 && !h$2(r2.activeElement, 0) && y$2(e2);
  });
}
var w$3 = ((t2) => (t2[t2.Keyboard = 0] = "Keyboard", t2[t2.Mouse = 1] = "Mouse", t2))(w$3 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e2) => {
  e2.metaKey || e2.altKey || e2.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e2) => {
  e2.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e2.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function y$2(e2) {
  e2 == null || e2.focus({ preventScroll: true });
}
let S$2 = ["textarea", "input"].join(",");
function H$1(e2) {
  var r2, t2;
  return (t2 = (r2 = e2 == null ? void 0 : e2.matches) == null ? void 0 : r2.call(e2, S$2)) != null ? t2 : false;
}
function I(e2, r2 = (t2) => t2) {
  return e2.slice().sort((t2, l2) => {
    let o3 = r2(t2), i2 = r2(l2);
    if (o3 === null || i2 === null)
      return 0;
    let n2 = o3.compareDocumentPosition(i2);
    return n2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : n2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function _$1(e2, r2) {
  return O$1(f$3(), r2, { relativeTo: e2 });
}
function O$1(e2, r2, { sorted: t2 = true, relativeTo: l2 = null, skipElements: o3 = [] } = {}) {
  let i2 = Array.isArray(e2) ? e2.length > 0 ? e2[0].ownerDocument : document : e2.ownerDocument, n2 = Array.isArray(e2) ? t2 ? I(e2) : e2 : f$3(e2);
  o3.length > 0 && n2.length > 1 && (n2 = n2.filter((s2) => !o3.includes(s2))), l2 = l2 != null ? l2 : i2.activeElement;
  let E2 = (() => {
    if (r2 & 5)
      return 1;
    if (r2 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), x2 = (() => {
    if (r2 & 1)
      return 0;
    if (r2 & 2)
      return Math.max(0, n2.indexOf(l2)) - 1;
    if (r2 & 4)
      return Math.max(0, n2.indexOf(l2)) + 1;
    if (r2 & 8)
      return n2.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), p2 = r2 & 32 ? { preventScroll: true } : {}, d2 = 0, a2 = n2.length, u2;
  do {
    if (d2 >= a2 || d2 + a2 <= 0)
      return 0;
    let s2 = x2 + d2;
    if (r2 & 16)
      s2 = (s2 + a2) % a2;
    else {
      if (s2 < 0)
        return 3;
      if (s2 >= a2)
        return 1;
    }
    u2 = n2[s2], u2 == null || u2.focus(p2), d2 += E2;
  } while (u2 !== i2.activeElement);
  return r2 & 6 && H$1(u2) && u2.select(), 2;
}
function d$2(e2, r2, n2) {
  let o3 = s$4(r2);
  reactExports.useEffect(() => {
    function t2(u2) {
      o3.current(u2);
    }
    return document.addEventListener(e2, t2, n2), () => document.removeEventListener(e2, t2, n2);
  }, [e2, n2]);
}
function s$2(e2, r2, n2) {
  let o3 = s$4(r2);
  reactExports.useEffect(() => {
    function t2(i2) {
      o3.current(i2);
    }
    return window.addEventListener(e2, t2, n2), () => window.removeEventListener(e2, t2, n2);
  }, [e2, n2]);
}
function h$1(s2, m2, a2 = true) {
  let i2 = reactExports.useRef(false);
  reactExports.useEffect(() => {
    requestAnimationFrame(() => {
      i2.current = a2;
    });
  }, [a2]);
  function c2(e2, r2) {
    if (!i2.current || e2.defaultPrevented)
      return;
    let t2 = r2(e2);
    if (t2 === null || !t2.getRootNode().contains(t2) || !t2.isConnected)
      return;
    let E2 = function u2(n2) {
      return typeof n2 == "function" ? u2(n2()) : Array.isArray(n2) || n2 instanceof Set ? n2 : [n2];
    }(s2);
    for (let u2 of E2) {
      if (u2 === null)
        continue;
      let n2 = u2 instanceof HTMLElement ? u2 : u2.current;
      if (n2 != null && n2.contains(t2) || e2.composed && e2.composedPath().includes(n2))
        return;
    }
    return !h$2(t2, T$1.Loose) && t2.tabIndex !== -1 && e2.preventDefault(), m2(e2, t2);
  }
  let o3 = reactExports.useRef(null);
  d$2("pointerdown", (e2) => {
    var r2, t2;
    i2.current && (o3.current = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), d$2("mousedown", (e2) => {
    var r2, t2;
    i2.current && (o3.current = ((t2 = (r2 = e2.composedPath) == null ? void 0 : r2.call(e2)) == null ? void 0 : t2[0]) || e2.target);
  }, true), d$2("click", (e2) => {
    o3.current && (c2(e2, () => o3.current), o3.current = null);
  }, true), d$2("touchend", (e2) => c2(e2, () => e2.target instanceof HTMLElement ? e2.target : null), true), s$2("blur", (e2) => c2(e2, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), true);
}
function i$1(t2) {
  var n2;
  if (t2.type)
    return t2.type;
  let e2 = (n2 = t2.as) != null ? n2 : "button";
  if (typeof e2 == "string" && e2.toLowerCase() === "button")
    return "button";
}
function s$1(t2, e2) {
  let [n2, u2] = reactExports.useState(() => i$1(t2));
  return l$2(() => {
    u2(i$1(t2));
  }, [t2.type, t2.as]), l$2(() => {
    n2 || e2.current && e2.current instanceof HTMLButtonElement && !e2.current.hasAttribute("type") && u2("button");
  }, [n2, e2]), n2;
}
let u$1 = Symbol();
function T(t2, n2 = true) {
  return Object.assign(t2, { [u$1]: n2 });
}
function y$1(...t2) {
  let n2 = reactExports.useRef(t2);
  reactExports.useEffect(() => {
    n2.current = t2;
  }, [t2]);
  let c2 = o$4((e2) => {
    for (let o3 of n2.current)
      o3 != null && (typeof o3 == "function" ? o3(e2) : o3.current = e2);
  });
  return t2.every((e2) => e2 == null || (e2 == null ? void 0 : e2[u$1])) ? void 0 : c2;
}
function F({ container: e2, accept: t2, walk: r2, enabled: c2 = true }) {
  let o3 = reactExports.useRef(t2), l2 = reactExports.useRef(r2);
  reactExports.useEffect(() => {
    o3.current = t2, l2.current = r2;
  }, [t2, r2]), l$2(() => {
    if (!e2 || !c2)
      return;
    let n2 = e$1(e2);
    if (!n2)
      return;
    let f2 = o3.current, p2 = l2.current, d2 = Object.assign((i2) => f2(i2), { acceptNode: f2 }), u2 = n2.createTreeWalker(e2, NodeFilter.SHOW_ELEMENT, d2, false);
    for (; u2.nextNode(); )
      p2(u2.currentNode);
  }, [e2, c2, o3, l2]);
}
function f$2(r2) {
  throw new Error("Unexpected object: " + r2);
}
var a$2 = ((e2) => (e2[e2.First = 0] = "First", e2[e2.Previous = 1] = "Previous", e2[e2.Next = 2] = "Next", e2[e2.Last = 3] = "Last", e2[e2.Specific = 4] = "Specific", e2[e2.Nothing = 5] = "Nothing", e2))(a$2 || {});
function x(r2, n2) {
  let t2 = n2.resolveItems();
  if (t2.length <= 0)
    return null;
  let l2 = n2.resolveActiveIndex(), s2 = l2 != null ? l2 : -1, d2 = (() => {
    switch (r2.focus) {
      case 0:
        return t2.findIndex((e2) => !n2.resolveDisabled(e2));
      case 1: {
        let e2 = t2.slice().reverse().findIndex((i2, c2, u2) => s2 !== -1 && u2.length - c2 - 1 >= s2 ? false : !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 2:
        return t2.findIndex((e2, i2) => i2 <= s2 ? false : !n2.resolveDisabled(e2));
      case 3: {
        let e2 = t2.slice().reverse().findIndex((i2) => !n2.resolveDisabled(i2));
        return e2 === -1 ? e2 : t2.length - 1 - e2;
      }
      case 4:
        return t2.findIndex((e2) => n2.resolveId(e2) === r2.id);
      case 5:
        return null;
      default:
        f$2(r2);
    }
  })();
  return d2 === -1 ? l2 : d2;
}
function t$3(...r2) {
  return Array.from(new Set(r2.flatMap((n2) => typeof n2 == "string" ? n2.split(" ") : []))).filter(Boolean).join(" ");
}
var S$1 = ((a2) => (a2[a2.None = 0] = "None", a2[a2.RenderStrategy = 1] = "RenderStrategy", a2[a2.Static = 2] = "Static", a2))(S$1 || {}), j = ((e2) => (e2[e2.Unmount = 0] = "Unmount", e2[e2.Hidden = 1] = "Hidden", e2))(j || {});
function X({ ourProps: r2, theirProps: t2, slot: e2, defaultTag: a2, features: s2, visible: n2 = true, name: f2 }) {
  let o3 = N(t2, r2);
  if (n2)
    return c$2(o3, e2, a2, f2);
  let u2 = s2 != null ? s2 : 0;
  if (u2 & 2) {
    let { static: l2 = false, ...p2 } = o3;
    if (l2)
      return c$2(p2, e2, a2, f2);
  }
  if (u2 & 1) {
    let { unmount: l2 = true, ...p2 } = o3;
    return u$2(l2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return c$2({ ...p2, hidden: true, style: { display: "none" } }, e2, a2, f2);
    } });
  }
  return c$2(o3, e2, a2, f2);
}
function c$2(r2, t2 = {}, e2, a2) {
  let { as: s2 = e2, children: n2, refName: f2 = "ref", ...o3 } = g$2(r2, ["unmount", "static"]), u2 = r2.ref !== void 0 ? { [f2]: r2.ref } : {}, l2 = typeof n2 == "function" ? n2(t2) : n2;
  "className" in o3 && o3.className && typeof o3.className == "function" && (o3.className = o3.className(t2));
  let p2 = {};
  if (t2) {
    let i2 = false, m2 = [];
    for (let [y2, d2] of Object.entries(t2))
      typeof d2 == "boolean" && (i2 = true), d2 === true && m2.push(y2);
    i2 && (p2["data-headlessui-state"] = m2.join(" "));
  }
  if (s2 === reactExports.Fragment && Object.keys(R(o3)).length > 0) {
    if (!reactExports.isValidElement(l2) || Array.isArray(l2) && l2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${a2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o3).map((d2) => `  - ${d2}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d2) => `  - ${d2}`).join(`
`)].join(`
`));
    let i2 = l2.props, m2 = typeof (i2 == null ? void 0 : i2.className) == "function" ? (...d2) => t$3(i2 == null ? void 0 : i2.className(...d2), o3.className) : t$3(i2 == null ? void 0 : i2.className, o3.className), y2 = m2 ? { className: m2 } : {};
    return reactExports.cloneElement(l2, Object.assign({}, N(l2.props, R(g$2(o3, ["ref"]))), p2, u2, w$2(l2.ref, u2.ref), y2));
  }
  return reactExports.createElement(s2, Object.assign({}, g$2(o3, ["ref"]), s2 !== reactExports.Fragment && u2, s2 !== reactExports.Fragment && p2), l2);
}
function w$2(...r2) {
  return { ref: r2.every((t2) => t2 == null) ? void 0 : (t2) => {
    for (let e2 of r2)
      e2 != null && (typeof e2 == "function" ? e2(t2) : e2.current = t2);
  } };
}
function N(...r2) {
  if (r2.length === 0)
    return {};
  if (r2.length === 1)
    return r2[0];
  let t2 = {}, e2 = {};
  for (let s2 of r2)
    for (let n2 in s2)
      n2.startsWith("on") && typeof s2[n2] == "function" ? (e2[n2] != null || (e2[n2] = []), e2[n2].push(s2[n2])) : t2[n2] = s2[n2];
  if (t2.disabled || t2["aria-disabled"])
    return Object.assign(t2, Object.fromEntries(Object.keys(e2).map((s2) => [s2, void 0])));
  for (let s2 in e2)
    Object.assign(t2, { [s2](n2, ...f2) {
      let o3 = e2[s2];
      for (let u2 of o3) {
        if ((n2 instanceof Event || (n2 == null ? void 0 : n2.nativeEvent) instanceof Event) && n2.defaultPrevented)
          return;
        u2(n2, ...f2);
      }
    } });
  return t2;
}
function D(r2) {
  var t2;
  return Object.assign(reactExports.forwardRef(r2), { displayName: (t2 = r2.displayName) != null ? t2 : r2.name });
}
function R(r2) {
  let t2 = Object.assign({}, r2);
  for (let e2 in t2)
    t2[e2] === void 0 && delete t2[e2];
  return t2;
}
function g$2(r2, t2 = []) {
  let e2 = Object.assign({}, r2);
  for (let a2 of t2)
    a2 in e2 && delete e2[a2];
  return e2;
}
function r(n2) {
  let e2 = n2.parentElement, l2 = null;
  for (; e2 && !(e2 instanceof HTMLFieldSetElement); )
    e2 instanceof HTMLLegendElement && (l2 = e2), e2 = e2.parentElement;
  let t2 = (e2 == null ? void 0 : e2.getAttribute("disabled")) === "";
  return t2 && i(l2) ? false : t2;
}
function i(n2) {
  if (!n2)
    return false;
  let e2 = n2.previousElementSibling;
  for (; e2 !== null; ) {
    if (e2 instanceof HTMLLegendElement)
      return false;
    e2 = e2.previousElementSibling;
  }
  return true;
}
let n$1 = reactExports.createContext(null);
n$1.displayName = "OpenClosedContext";
var d$1 = ((e2) => (e2[e2.Open = 1] = "Open", e2[e2.Closed = 2] = "Closed", e2[e2.Closing = 4] = "Closing", e2[e2.Opening = 8] = "Opening", e2))(d$1 || {});
function C() {
  return reactExports.useContext(n$1);
}
function c$1({ value: o3, children: r2 }) {
  return React$6.createElement(n$1.Provider, { value: o3 }, r2);
}
var o$2 = ((r2) => (r2.Space = " ", r2.Enter = "Enter", r2.Escape = "Escape", r2.Backspace = "Backspace", r2.Delete = "Delete", r2.ArrowLeft = "ArrowLeft", r2.ArrowUp = "ArrowUp", r2.ArrowRight = "ArrowRight", r2.ArrowDown = "ArrowDown", r2.Home = "Home", r2.End = "End", r2.PageUp = "PageUp", r2.PageDown = "PageDown", r2.Tab = "Tab", r2))(o$2 || {});
function t$2(e2) {
  return [e2.screenX, e2.screenY];
}
function u() {
  let e2 = reactExports.useRef([-1, -1]);
  return { wasMoved(r2) {
    let n2 = t$2(r2);
    return e2.current[0] === n2[0] && e2.current[1] === n2[1] ? false : (e2.current = n2, true);
  }, update(r2) {
    e2.current = t$2(r2);
  } };
}
function n(...e2) {
  return reactExports.useMemo(() => e$1(...e2), [...e2]);
}
function f$1() {
  let e2 = reactExports.useRef(false);
  return l$2(() => (e2.current = true, () => {
    e2.current = false;
  }), []), e2;
}
var t$1;
let a$1 = (t$1 = React$6.startTransition) != null ? t$1 : function(i2) {
  i2();
};
var q = ((o3) => (o3[o3.Open = 0] = "Open", o3[o3.Closed = 1] = "Closed", o3))(q || {}), z = ((t2) => (t2[t2.ToggleDisclosure = 0] = "ToggleDisclosure", t2[t2.CloseDisclosure = 1] = "CloseDisclosure", t2[t2.SetButtonId = 2] = "SetButtonId", t2[t2.SetPanelId = 3] = "SetPanelId", t2[t2.LinkPanel = 4] = "LinkPanel", t2[t2.UnlinkPanel = 5] = "UnlinkPanel", t2))(z || {});
let Q = { [0]: (e2) => ({ ...e2, disclosureState: u$2(e2.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e2) => e2.disclosureState === 1 ? e2 : { ...e2, disclosureState: 1 }, [4](e2) {
  return e2.linkedPanel === true ? e2 : { ...e2, linkedPanel: true };
}, [5](e2) {
  return e2.linkedPanel === false ? e2 : { ...e2, linkedPanel: false };
}, [2](e2, n2) {
  return e2.buttonId === n2.buttonId ? e2 : { ...e2, buttonId: n2.buttonId };
}, [3](e2, n2) {
  return e2.panelId === n2.panelId ? e2 : { ...e2, panelId: n2.panelId };
} }, k = reactExports.createContext(null);
k.displayName = "DisclosureContext";
function M$2(e2) {
  let n2 = reactExports.useContext(k);
  if (n2 === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, M$2), o3;
  }
  return n2;
}
let v$1 = reactExports.createContext(null);
v$1.displayName = "DisclosureAPIContext";
function w$1(e2) {
  let n2 = reactExports.useContext(v$1);
  if (n2 === null) {
    let o3 = new Error(`<${e2} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o3, w$1), o3;
  }
  return n2;
}
let H = reactExports.createContext(null);
H.displayName = "DisclosurePanelContext";
function V() {
  return reactExports.useContext(H);
}
function Y(e2, n2) {
  return u$2(n2.type, Q, e2, n2);
}
let Z = reactExports.Fragment;
function ee(e2, n2) {
  let { defaultOpen: o3 = false, ...u2 } = e2, T$12 = reactExports.useRef(null), l2 = y$1(n2, T((a2) => {
    T$12.current = a2;
  }, e2.as === void 0 || e2.as === reactExports.Fragment)), t2 = reactExports.useRef(null), f2 = reactExports.useRef(null), s2 = reactExports.useReducer(Y, { disclosureState: o3 ? 0 : 1, linkedPanel: false, buttonRef: f2, panelRef: t2, buttonId: null, panelId: null }), [{ disclosureState: i2, buttonId: c2 }, D2] = s2, d2 = o$4((a2) => {
    D2({ type: 1 });
    let r2 = e$1(T$12);
    if (!r2 || !c2)
      return;
    let p2 = (() => a2 ? a2 instanceof HTMLElement ? a2 : a2.current instanceof HTMLElement ? a2.current : r2.getElementById(c2) : r2.getElementById(c2))();
    p2 == null || p2.focus();
  }), P2 = reactExports.useMemo(() => ({ close: d2 }), [d2]), b2 = reactExports.useMemo(() => ({ open: i2 === 0, close: d2 }), [i2, d2]), y2 = { ref: l2 };
  return React$6.createElement(k.Provider, { value: s2 }, React$6.createElement(v$1.Provider, { value: P2 }, React$6.createElement(c$1, { value: u$2(i2, { [0]: d$1.Open, [1]: d$1.Closed }) }, X({ ourProps: y2, theirProps: u2, slot: b2, defaultTag: Z, name: "Disclosure" }))));
}
let te = "button";
function ne(e2, n2) {
  let o3 = I$1(), { id: u2 = `headlessui-disclosure-button-${o3}`, ...T2 } = e2, [l2, t2] = M$2("Disclosure.Button"), f2 = V(), s2 = f2 === null ? false : f2 === l2.panelId, i2 = reactExports.useRef(null), c2 = y$1(i2, n2, s2 ? null : l2.buttonRef);
  reactExports.useEffect(() => {
    if (!s2)
      return t2({ type: 2, buttonId: u2 }), () => {
        t2({ type: 2, buttonId: null });
      };
  }, [u2, t2, s2]);
  let D2 = o$4((r2) => {
    var p2;
    if (s2) {
      if (l2.disclosureState === 1)
        return;
      switch (r2.key) {
        case o$2.Space:
        case o$2.Enter:
          r2.preventDefault(), r2.stopPropagation(), t2({ type: 0 }), (p2 = l2.buttonRef.current) == null || p2.focus();
          break;
      }
    } else
      switch (r2.key) {
        case o$2.Space:
        case o$2.Enter:
          r2.preventDefault(), r2.stopPropagation(), t2({ type: 0 });
          break;
      }
  }), d2 = o$4((r2) => {
    switch (r2.key) {
      case o$2.Space:
        r2.preventDefault();
        break;
    }
  }), P2 = o$4((r$12) => {
    var p2;
    r(r$12.currentTarget) || e2.disabled || (s2 ? (t2({ type: 0 }), (p2 = l2.buttonRef.current) == null || p2.focus()) : t2({ type: 0 }));
  }), b2 = reactExports.useMemo(() => ({ open: l2.disclosureState === 0 }), [l2]), y2 = s$1(e2, i2), a2 = s2 ? { ref: c2, type: y2, onKeyDown: D2, onClick: P2 } : { ref: c2, id: u2, type: y2, "aria-expanded": l2.disclosureState === 0, "aria-controls": l2.linkedPanel ? l2.panelId : void 0, onKeyDown: D2, onKeyUp: d2, onClick: P2 };
  return X({ ourProps: a2, theirProps: T2, slot: b2, defaultTag: te, name: "Disclosure.Button" });
}
let le$1 = "div", oe$1 = S$1.RenderStrategy | S$1.Static;
function re(e2, n2) {
  let o3 = I$1(), { id: u2 = `headlessui-disclosure-panel-${o3}`, ...T2 } = e2, [l2, t2] = M$2("Disclosure.Panel"), { close: f2 } = w$1("Disclosure.Panel"), s2 = y$1(n2, l2.panelRef, (P2) => {
    a$1(() => t2({ type: P2 ? 4 : 5 }));
  });
  reactExports.useEffect(() => (t2({ type: 3, panelId: u2 }), () => {
    t2({ type: 3, panelId: null });
  }), [u2, t2]);
  let i2 = C(), c2 = (() => i2 !== null ? (i2 & d$1.Open) === d$1.Open : l2.disclosureState === 0)(), D2 = reactExports.useMemo(() => ({ open: l2.disclosureState === 0, close: f2 }), [l2, f2]), d2 = { ref: s2, id: u2 };
  return React$6.createElement(H.Provider, { value: l2.panelId }, X({ ourProps: d2, theirProps: T2, slot: D2, defaultTag: le$1, features: oe$1, visible: c2, name: "Disclosure.Panel" }));
}
let se$1 = D(ee), ue = D(ne), ie = D(re), ve$1 = Object.assign(se$1, { Button: ue, Panel: ie });
let a = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o$1(e2) {
  var r2, i2;
  let n2 = (r2 = e2.innerText) != null ? r2 : "", t2 = e2.cloneNode(true);
  if (!(t2 instanceof HTMLElement))
    return n2;
  let u2 = false;
  for (let f2 of t2.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f2.remove(), u2 = true;
  let l2 = u2 ? (i2 = t2.innerText) != null ? i2 : "" : n2;
  return a.test(l2) && (l2 = l2.replace(a, "")), l2;
}
function g$1(e2) {
  let n2 = e2.getAttribute("aria-label");
  if (typeof n2 == "string")
    return n2.trim();
  let t2 = e2.getAttribute("aria-labelledby");
  if (t2) {
    let u2 = t2.split(" ").map((l2) => {
      let r2 = document.getElementById(l2);
      if (r2) {
        let i2 = r2.getAttribute("aria-label");
        return typeof i2 == "string" ? i2.trim() : o$1(r2).trim();
      }
      return null;
    }).filter(Boolean);
    if (u2.length > 0)
      return u2.join(", ");
  }
  return o$1(e2).trim();
}
function b$1(c2) {
  let t2 = reactExports.useRef(""), r2 = reactExports.useRef("");
  return o$4(() => {
    let e2 = c2.current;
    if (!e2)
      return "";
    let u2 = e2.innerText;
    if (t2.current === u2)
      return r2.current;
    let n2 = g$1(e2).trim().toLowerCase();
    return t2.current = u2, r2.current = n2, n2;
  });
}
var me = ((r2) => (r2[r2.Open = 0] = "Open", r2[r2.Closed = 1] = "Closed", r2))(me || {}), de = ((r2) => (r2[r2.Pointer = 0] = "Pointer", r2[r2.Other = 1] = "Other", r2))(de || {}), fe = ((a2) => (a2[a2.OpenMenu = 0] = "OpenMenu", a2[a2.CloseMenu = 1] = "CloseMenu", a2[a2.GoToItem = 2] = "GoToItem", a2[a2.Search = 3] = "Search", a2[a2.ClearSearch = 4] = "ClearSearch", a2[a2.RegisterItem = 5] = "RegisterItem", a2[a2.UnregisterItem = 6] = "UnregisterItem", a2))(fe || {});
function w(e2, u2 = (r2) => r2) {
  let r2 = e2.activeItemIndex !== null ? e2.items[e2.activeItemIndex] : null, i2 = I(u2(e2.items.slice()), (t2) => t2.dataRef.current.domRef.current), s2 = r2 ? i2.indexOf(r2) : null;
  return s2 === -1 && (s2 = null), { items: i2, activeItemIndex: s2 };
}
let Te = { [1](e2) {
  return e2.menuState === 1 ? e2 : { ...e2, activeItemIndex: null, menuState: 1 };
}, [0](e2) {
  return e2.menuState === 0 ? e2 : { ...e2, __demoMode: false, menuState: 0 };
}, [2]: (e2, u2) => {
  var s2;
  let r2 = w(e2), i2 = x(u2, { resolveItems: () => r2.items, resolveActiveIndex: () => r2.activeItemIndex, resolveId: (t2) => t2.id, resolveDisabled: (t2) => t2.dataRef.current.disabled });
  return { ...e2, ...r2, searchQuery: "", activeItemIndex: i2, activationTrigger: (s2 = u2.trigger) != null ? s2 : 1 };
}, [3]: (e2, u2) => {
  let i2 = e2.searchQuery !== "" ? 0 : 1, s2 = e2.searchQuery + u2.value.toLowerCase(), o3 = (e2.activeItemIndex !== null ? e2.items.slice(e2.activeItemIndex + i2).concat(e2.items.slice(0, e2.activeItemIndex + i2)) : e2.items).find((l2) => {
    var m2;
    return ((m2 = l2.dataRef.current.textValue) == null ? void 0 : m2.startsWith(s2)) && !l2.dataRef.current.disabled;
  }), a2 = o3 ? e2.items.indexOf(o3) : -1;
  return a2 === -1 || a2 === e2.activeItemIndex ? { ...e2, searchQuery: s2 } : { ...e2, searchQuery: s2, activeItemIndex: a2, activationTrigger: 1 };
}, [4](e2) {
  return e2.searchQuery === "" ? e2 : { ...e2, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e2, u2) => {
  let r2 = w(e2, (i2) => [...i2, { id: u2.id, dataRef: u2.dataRef }]);
  return { ...e2, ...r2 };
}, [6]: (e2, u2) => {
  let r2 = w(e2, (i2) => {
    let s2 = i2.findIndex((t2) => t2.id === u2.id);
    return s2 !== -1 && i2.splice(s2, 1), i2;
  });
  return { ...e2, ...r2, activationTrigger: 1 };
} }, U$1 = reactExports.createContext(null);
U$1.displayName = "MenuContext";
function O(e2) {
  let u2 = reactExports.useContext(U$1);
  if (u2 === null) {
    let r2 = new Error(`<${e2} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r2, O), r2;
  }
  return u2;
}
function ye$1(e2, u2) {
  return u$2(u2.type, Te, e2, u2);
}
let Ie = reactExports.Fragment;
function Me(e2, u2) {
  let { __demoMode: r2 = false, ...i2 } = e2, s2 = reactExports.useReducer(ye$1, { __demoMode: r2, menuState: r2 ? 0 : 1, buttonRef: reactExports.createRef(), itemsRef: reactExports.createRef(), items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1 }), [{ menuState: t2, itemsRef: o3, buttonRef: a2 }, l2] = s2, m2 = y$1(u2);
  h$1([a2, o3], (g2, R2) => {
    var p2;
    l2({ type: 1 }), h$2(R2, T$1.Loose) || (g2.preventDefault(), (p2 = a2.current) == null || p2.focus());
  }, t2 === 0);
  let I2 = o$4(() => {
    l2({ type: 1 });
  }), A2 = reactExports.useMemo(() => ({ open: t2 === 0, close: I2 }), [t2, I2]), f2 = { ref: m2 };
  return React$6.createElement(U$1.Provider, { value: s2 }, React$6.createElement(c$1, { value: u$2(t2, { [0]: d$1.Open, [1]: d$1.Closed }) }, X({ ourProps: f2, theirProps: i2, slot: A2, defaultTag: Ie, name: "Menu" })));
}
let ge = "button";
function Re$1(e2, u2) {
  var R2;
  let r$12 = I$1(), { id: i2 = `headlessui-menu-button-${r$12}`, ...s2 } = e2, [t2, o3] = O("Menu.Button"), a2 = y$1(t2.buttonRef, u2), l2 = p(), m2 = o$4((p2) => {
    switch (p2.key) {
      case o$2.Space:
      case o$2.Enter:
      case o$2.ArrowDown:
        p2.preventDefault(), p2.stopPropagation(), o3({ type: 0 }), l2.nextFrame(() => o3({ type: 2, focus: a$2.First }));
        break;
      case o$2.ArrowUp:
        p2.preventDefault(), p2.stopPropagation(), o3({ type: 0 }), l2.nextFrame(() => o3({ type: 2, focus: a$2.Last }));
        break;
    }
  }), I2 = o$4((p2) => {
    switch (p2.key) {
      case o$2.Space:
        p2.preventDefault();
        break;
    }
  }), A2 = o$4((p2) => {
    if (r(p2.currentTarget))
      return p2.preventDefault();
    e2.disabled || (t2.menuState === 0 ? (o3({ type: 1 }), l2.nextFrame(() => {
      var M2;
      return (M2 = t2.buttonRef.current) == null ? void 0 : M2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), o3({ type: 0 })));
  }), f2 = reactExports.useMemo(() => ({ open: t2.menuState === 0 }), [t2]), g2 = { ref: a2, id: i2, type: s$1(e2, t2.buttonRef), "aria-haspopup": "menu", "aria-controls": (R2 = t2.itemsRef.current) == null ? void 0 : R2.id, "aria-expanded": t2.menuState === 0, onKeyDown: m2, onKeyUp: I2, onClick: A2 };
  return X({ ourProps: g2, theirProps: s2, slot: f2, defaultTag: ge, name: "Menu.Button" });
}
let Ae = "div", be$1 = S$1.RenderStrategy | S$1.Static;
function Ee(e2, u2) {
  var M2, b2;
  let r2 = I$1(), { id: i2 = `headlessui-menu-items-${r2}`, ...s2 } = e2, [t2, o3] = O("Menu.Items"), a2 = y$1(t2.itemsRef, u2), l2 = n(t2.itemsRef), m2 = p(), I2 = C(), A2 = (() => I2 !== null ? (I2 & d$1.Open) === d$1.Open : t2.menuState === 0)();
  reactExports.useEffect(() => {
    let n2 = t2.itemsRef.current;
    n2 && t2.menuState === 0 && n2 !== (l2 == null ? void 0 : l2.activeElement) && n2.focus({ preventScroll: true });
  }, [t2.menuState, t2.itemsRef, l2]), F({ container: t2.itemsRef.current, enabled: t2.menuState === 0, accept(n2) {
    return n2.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : n2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(n2) {
    n2.setAttribute("role", "none");
  } });
  let f2 = o$4((n2) => {
    var E2, P2;
    switch (m2.dispose(), n2.key) {
      case o$2.Space:
        if (t2.searchQuery !== "")
          return n2.preventDefault(), n2.stopPropagation(), o3({ type: 3, value: n2.key });
      case o$2.Enter:
        if (n2.preventDefault(), n2.stopPropagation(), o3({ type: 1 }), t2.activeItemIndex !== null) {
          let { dataRef: S2 } = t2.items[t2.activeItemIndex];
          (P2 = (E2 = S2.current) == null ? void 0 : E2.domRef.current) == null || P2.click();
        }
        D$1(t2.buttonRef.current);
        break;
      case o$2.ArrowDown:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.Next });
      case o$2.ArrowUp:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.Previous });
      case o$2.Home:
      case o$2.PageUp:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.First });
      case o$2.End:
      case o$2.PageDown:
        return n2.preventDefault(), n2.stopPropagation(), o3({ type: 2, focus: a$2.Last });
      case o$2.Escape:
        n2.preventDefault(), n2.stopPropagation(), o3({ type: 1 }), o$5().nextFrame(() => {
          var S2;
          return (S2 = t2.buttonRef.current) == null ? void 0 : S2.focus({ preventScroll: true });
        });
        break;
      case o$2.Tab:
        n2.preventDefault(), n2.stopPropagation(), o3({ type: 1 }), o$5().nextFrame(() => {
          _$1(t2.buttonRef.current, n2.shiftKey ? M$3.Previous : M$3.Next);
        });
        break;
      default:
        n2.key.length === 1 && (o3({ type: 3, value: n2.key }), m2.setTimeout(() => o3({ type: 4 }), 350));
        break;
    }
  }), g2 = o$4((n2) => {
    switch (n2.key) {
      case o$2.Space:
        n2.preventDefault();
        break;
    }
  }), R2 = reactExports.useMemo(() => ({ open: t2.menuState === 0 }), [t2]), p$12 = { "aria-activedescendant": t2.activeItemIndex === null || (M2 = t2.items[t2.activeItemIndex]) == null ? void 0 : M2.id, "aria-labelledby": (b2 = t2.buttonRef.current) == null ? void 0 : b2.id, id: i2, onKeyDown: f2, onKeyUp: g2, role: "menu", tabIndex: 0, ref: a2 };
  return X({ ourProps: p$12, theirProps: s2, slot: R2, defaultTag: Ae, features: be$1, visible: A2, name: "Menu.Items" });
}
let Se$1 = reactExports.Fragment;
function Pe$1(e2, u$12) {
  let r2 = I$1(), { id: i2 = `headlessui-menu-item-${r2}`, disabled: s2 = false, ...t2 } = e2, [o3, a2] = O("Menu.Item"), l2 = o3.activeItemIndex !== null ? o3.items[o3.activeItemIndex].id === i2 : false, m2 = reactExports.useRef(null), I2 = y$1(u$12, m2);
  l$2(() => {
    if (o3.__demoMode || o3.menuState !== 0 || !l2 || o3.activationTrigger === 0)
      return;
    let T2 = o$5();
    return T2.requestAnimationFrame(() => {
      var v2, B2;
      (B2 = (v2 = m2.current) == null ? void 0 : v2.scrollIntoView) == null || B2.call(v2, { block: "nearest" });
    }), T2.dispose;
  }, [o3.__demoMode, m2, l2, o3.menuState, o3.activationTrigger, o3.activeItemIndex]);
  let A2 = b$1(m2), f2 = reactExports.useRef({ disabled: s2, domRef: m2, get textValue() {
    return A2();
  } });
  l$2(() => {
    f2.current.disabled = s2;
  }, [f2, s2]), l$2(() => (a2({ type: 5, id: i2, dataRef: f2 }), () => a2({ type: 6, id: i2 })), [f2, i2]);
  let g2 = o$4(() => {
    a2({ type: 1 });
  }), R2 = o$4((T2) => {
    if (s2)
      return T2.preventDefault();
    a2({ type: 1 }), D$1(o3.buttonRef.current);
  }), p2 = o$4(() => {
    if (s2)
      return a2({ type: 2, focus: a$2.Nothing });
    a2({ type: 2, focus: a$2.Specific, id: i2 });
  }), M2 = u(), b2 = o$4((T2) => M2.update(T2)), n2 = o$4((T2) => {
    M2.wasMoved(T2) && (s2 || l2 || a2({ type: 2, focus: a$2.Specific, id: i2, trigger: 0 }));
  }), E2 = o$4((T2) => {
    M2.wasMoved(T2) && (s2 || l2 && a2({ type: 2, focus: a$2.Nothing }));
  }), P2 = reactExports.useMemo(() => ({ active: l2, disabled: s2, close: g2 }), [l2, s2, g2]);
  return X({ ourProps: { id: i2, ref: I2, role: "menuitem", tabIndex: s2 === true ? void 0 : -1, "aria-disabled": s2 === true ? true : void 0, disabled: void 0, onClick: R2, onFocus: p2, onPointerEnter: b2, onMouseEnter: b2, onPointerMove: n2, onMouseMove: n2, onPointerLeave: E2, onMouseLeave: E2 }, theirProps: t2, slot: P2, defaultTag: Se$1, name: "Menu.Item" });
}
let ve = D(Me), xe$1 = D(Re$1), he = D(Ee), De$1 = D(Pe$1), it = Object.assign(ve, { Button: xe$1, Items: he, Item: De$1 });
function c(a2 = 0) {
  let [l2, r2] = reactExports.useState(a2), t2 = f$1(), o3 = reactExports.useCallback((e2) => {
    t2.current && r2((u2) => u2 | e2);
  }, [l2, t2]), m2 = reactExports.useCallback((e2) => Boolean(l2 & e2), [l2]), s2 = reactExports.useCallback((e2) => {
    t2.current && r2((u2) => u2 & ~e2);
  }, [r2, t2]), g2 = reactExports.useCallback((e2) => {
    t2.current && r2((u2) => u2 ^ e2);
  }, [r2]);
  return { flags: l2, addFlag: o3, hasFlag: m2, removeFlag: s2, toggleFlag: g2 };
}
function l(r2) {
  let e2 = { called: false };
  return (...t2) => {
    if (!e2.called)
      return e2.called = true, r2(...t2);
  };
}
function g(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.add(...e2);
}
function v(t2, ...e2) {
  t2 && e2.length > 0 && t2.classList.remove(...e2);
}
function b(t2, e2) {
  let n2 = o$5();
  if (!t2)
    return n2.dispose;
  let { transitionDuration: m2, transitionDelay: a2 } = getComputedStyle(t2), [u2, p2] = [m2, a2].map((l2) => {
    let [r2 = 0] = l2.split(",").filter(Boolean).map((i2) => i2.includes("ms") ? parseFloat(i2) : parseFloat(i2) * 1e3).sort((i2, T2) => T2 - i2);
    return r2;
  }), o3 = u2 + p2;
  if (o3 !== 0) {
    n2.group((r2) => {
      r2.setTimeout(() => {
        e2(), r2.dispose();
      }, o3), r2.addEventListener(t2, "transitionrun", (i2) => {
        i2.target === i2.currentTarget && r2.dispose();
      });
    });
    let l2 = n2.addEventListener(t2, "transitionend", (r2) => {
      r2.target === r2.currentTarget && (e2(), l2());
    });
  } else
    e2();
  return n2.add(() => e2()), n2.dispose;
}
function M$1(t2, e2, n2, m2) {
  let a2 = n2 ? "enter" : "leave", u2 = o$5(), p2 = m2 !== void 0 ? l(m2) : () => {
  };
  a2 === "enter" && (t2.removeAttribute("hidden"), t2.style.display = "");
  let o3 = u$2(a2, { enter: () => e2.enter, leave: () => e2.leave }), l$12 = u$2(a2, { enter: () => e2.enterTo, leave: () => e2.leaveTo }), r2 = u$2(a2, { enter: () => e2.enterFrom, leave: () => e2.leaveFrom });
  return v(t2, ...e2.base, ...e2.enter, ...e2.enterTo, ...e2.enterFrom, ...e2.leave, ...e2.leaveFrom, ...e2.leaveTo, ...e2.entered), g(t2, ...e2.base, ...o3, ...r2), u2.nextFrame(() => {
    v(t2, ...e2.base, ...o3, ...r2), g(t2, ...e2.base, ...o3, ...l$12), b(t2, () => (v(t2, ...e2.base, ...o3), g(t2, ...e2.base, ...e2.entered), p2()));
  }), u2.dispose;
}
function E({ immediate: t2, container: s2, direction: n2, classes: u2, onStart: a2, onStop: c2 }) {
  let l2 = f$1(), d2 = p(), e2 = s$4(n2);
  l$2(() => {
    t2 && (e2.current = "enter");
  }, [t2]), l$2(() => {
    let r2 = o$5();
    d2.add(r2.dispose);
    let i2 = s2.current;
    if (i2 && e2.current !== "idle" && l2.current)
      return r2.dispose(), a2.current(e2.current), r2.add(M$1(i2, u2.current, e2.current === "enter", () => {
        r2.dispose(), c2.current(e2.current);
      })), r2.dispose;
  }, [n2]);
}
function S(t2 = "") {
  return t2.split(" ").filter((n2) => n2.trim().length > 1);
}
let _ = reactExports.createContext(null);
_.displayName = "TransitionContext";
var be = ((r2) => (r2.Visible = "visible", r2.Hidden = "hidden", r2))(be || {});
function Se() {
  let t2 = reactExports.useContext(_);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
function Ne() {
  let t2 = reactExports.useContext(M);
  if (t2 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return t2;
}
let M = reactExports.createContext(null);
M.displayName = "NestingContext";
function U(t2) {
  return "children" in t2 ? U(t2.children) : t2.current.filter(({ el: n2 }) => n2.current !== null).filter(({ state: n2 }) => n2 === "visible").length > 0;
}
function oe(t2, n2) {
  let r2 = s$4(t2), s2 = reactExports.useRef([]), y2 = f$1(), D2 = p(), c2 = o$4((i2, e2 = j.Hidden) => {
    let a2 = s2.current.findIndex(({ el: o3 }) => o3 === i2);
    a2 !== -1 && (u$2(e2, { [j.Unmount]() {
      s2.current.splice(a2, 1);
    }, [j.Hidden]() {
      s2.current[a2].state = "hidden";
    } }), D2.microTask(() => {
      var o3;
      !U(s2) && y2.current && ((o3 = r2.current) == null || o3.call(r2));
    }));
  }), x2 = o$4((i2) => {
    let e2 = s2.current.find(({ el: a2 }) => a2 === i2);
    return e2 ? e2.state !== "visible" && (e2.state = "visible") : s2.current.push({ el: i2, state: "visible" }), () => c2(i2, j.Unmount);
  }), p$12 = reactExports.useRef([]), h2 = reactExports.useRef(Promise.resolve()), u2 = reactExports.useRef({ enter: [], leave: [], idle: [] }), v2 = o$4((i2, e2, a2) => {
    p$12.current.splice(0), n2 && (n2.chains.current[e2] = n2.chains.current[e2].filter(([o3]) => o3 !== i2)), n2 == null || n2.chains.current[e2].push([i2, new Promise((o3) => {
      p$12.current.push(o3);
    })]), n2 == null || n2.chains.current[e2].push([i2, new Promise((o3) => {
      Promise.all(u2.current[e2].map(([f2, P2]) => P2)).then(() => o3());
    })]), e2 === "enter" ? h2.current = h2.current.then(() => n2 == null ? void 0 : n2.wait.current).then(() => a2(e2)) : a2(e2);
  }), d2 = o$4((i2, e2, a2) => {
    Promise.all(u2.current[e2].splice(0).map(([o3, f2]) => f2)).then(() => {
      var o3;
      (o3 = p$12.current.shift()) == null || o3();
    }).then(() => a2(e2));
  });
  return reactExports.useMemo(() => ({ children: s2, register: x2, unregister: c2, onStart: v2, onStop: d2, wait: h2, chains: u2 }), [x2, c2, s2, v2, d2, u2, h2]);
}
function xe() {
}
let Pe = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function se(t2) {
  var r2;
  let n2 = {};
  for (let s2 of Pe)
    n2[s2] = (r2 = t2[s2]) != null ? r2 : xe;
  return n2;
}
function Re(t2) {
  let n2 = reactExports.useRef(se(t2));
  return reactExports.useEffect(() => {
    n2.current = se(t2);
  }, [t2]), n2;
}
let ye = "div", ae = S$1.RenderStrategy;
function De(t2, n2) {
  var K2, Q2;
  let { beforeEnter: r2, afterEnter: s2, beforeLeave: y2, afterLeave: D2, enter: c$22, enterFrom: x2, enterTo: p2, entered: h2, leave: u2, leaveFrom: v2, leaveTo: d2, ...i2 } = t2, e2 = reactExports.useRef(null), a2 = y$1(e2, n2), o3 = (K2 = i2.unmount) == null || K2 ? j.Unmount : j.Hidden, { show: f2, appear: P2, initial: T2 } = Se(), [l2, j$1] = reactExports.useState(f2 ? "visible" : "hidden"), q2 = Ne(), { register: O2, unregister: V2 } = q2;
  reactExports.useEffect(() => O2(e2), [O2, e2]), reactExports.useEffect(() => {
    if (o3 === j.Hidden && e2.current) {
      if (f2 && l2 !== "visible") {
        j$1("visible");
        return;
      }
      return u$2(l2, { ["hidden"]: () => V2(e2), ["visible"]: () => O2(e2) });
    }
  }, [l2, e2, O2, V2, f2, o3]);
  let k2 = s$4({ base: S(i2.className), enter: S(c$22), enterFrom: S(x2), enterTo: S(p2), entered: S(h2), leave: S(u2), leaveFrom: S(v2), leaveTo: S(d2) }), w2 = Re({ beforeEnter: r2, afterEnter: s2, beforeLeave: y2, afterLeave: D2 }), G2 = l$1();
  reactExports.useEffect(() => {
    if (G2 && l2 === "visible" && e2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [e2, l2, G2]);
  let ue2 = T2 && !P2, z2 = P2 && f2 && T2, Te2 = (() => !G2 || ue2 ? "idle" : f2 ? "enter" : "leave")(), H2 = c(0), de2 = o$4((g2) => u$2(g2, { enter: () => {
    H2.addFlag(d$1.Opening), w2.current.beforeEnter();
  }, leave: () => {
    H2.addFlag(d$1.Closing), w2.current.beforeLeave();
  }, idle: () => {
  } })), fe2 = o$4((g2) => u$2(g2, { enter: () => {
    H2.removeFlag(d$1.Opening), w2.current.afterEnter();
  }, leave: () => {
    H2.removeFlag(d$1.Closing), w2.current.afterLeave();
  }, idle: () => {
  } })), A2 = oe(() => {
    j$1("hidden"), V2(e2);
  }, q2);
  E({ immediate: z2, container: e2, classes: k2, direction: Te2, onStart: s$4((g2) => {
    A2.onStart(e2, g2, de2);
  }), onStop: s$4((g2) => {
    A2.onStop(e2, g2, fe2), g2 === "leave" && !U(A2) && (j$1("hidden"), V2(e2));
  }) });
  let R2 = i2, me2 = { ref: a2 };
  return z2 ? R2 = { ...R2, className: t$3(i2.className, ...k2.current.enter, ...k2.current.enterFrom) } : (R2.className = t$3(i2.className, (Q2 = e2.current) == null ? void 0 : Q2.className), R2.className === "" && delete R2.className), React$6.createElement(M.Provider, { value: A2 }, React$6.createElement(c$1, { value: u$2(l2, { ["visible"]: d$1.Open, ["hidden"]: d$1.Closed }) | H2.flags }, X({ ourProps: me2, theirProps: R2, defaultTag: ye, features: ae, visible: l2 === "visible", name: "Transition.Child" })));
}
function He(t2, n2) {
  let { show: r2, appear: s2 = false, unmount: y2 = true, ...D2 } = t2, c2 = reactExports.useRef(null), x2 = y$1(c2, n2);
  l$1();
  let p2 = C();
  if (r2 === void 0 && p2 !== null && (r2 = (p2 & d$1.Open) === d$1.Open), ![true, false].includes(r2))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h2, u2] = reactExports.useState(r2 ? "visible" : "hidden"), v2 = oe(() => {
    u2("hidden");
  }), [d2, i2] = reactExports.useState(true), e2 = reactExports.useRef([r2]);
  l$2(() => {
    d2 !== false && e2.current[e2.current.length - 1] !== r2 && (e2.current.push(r2), i2(false));
  }, [e2, r2]);
  let a2 = reactExports.useMemo(() => ({ show: r2, appear: s2, initial: d2 }), [r2, s2, d2]);
  reactExports.useEffect(() => {
    if (r2)
      u2("visible");
    else if (!U(v2))
      u2("hidden");
    else {
      let T2 = c2.current;
      if (!T2)
        return;
      let l2 = T2.getBoundingClientRect();
      l2.x === 0 && l2.y === 0 && l2.width === 0 && l2.height === 0 && u2("hidden");
    }
  }, [r2, v2]);
  let o3 = { unmount: y2 }, f2 = o$4(() => {
    var T2;
    d2 && i2(false), (T2 = t2.beforeEnter) == null || T2.call(t2);
  }), P2 = o$4(() => {
    var T2;
    d2 && i2(false), (T2 = t2.beforeLeave) == null || T2.call(t2);
  });
  return React$6.createElement(M.Provider, { value: v2 }, React$6.createElement(_.Provider, { value: a2 }, X({ ourProps: { ...o3, as: reactExports.Fragment, children: React$6.createElement(le, { ref: x2, ...o3, ...D2, beforeEnter: f2, beforeLeave: P2 }) }, theirProps: {}, defaultTag: reactExports.Fragment, features: ae, visible: h2 === "visible", name: "Transition" })));
}
function Fe(t2, n2) {
  let r2 = reactExports.useContext(_) !== null, s2 = C() !== null;
  return React$6.createElement(React$6.Fragment, null, !r2 && s2 ? React$6.createElement(W, { ref: n2, ...t2 }) : React$6.createElement(le, { ref: n2, ...t2 }));
}
let W = D(He), le = D(De), Le = D(Fe), tt = Object.assign(W, { Child: Le, Root: W });
function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
const ForwardRef$2 = reactExports.forwardRef(Bars3Icon);
const Bars3Icon$1 = ForwardRef$2;
function ChevronDownIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  }));
}
const ForwardRef$1 = reactExports.forwardRef(ChevronDownIcon);
const ChevronDownIcon$1 = ForwardRef$1;
function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /* @__PURE__ */ reactExports.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /* @__PURE__ */ reactExports.createElement("title", {
    id: titleId
  }, title) : null, /* @__PURE__ */ reactExports.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
const ForwardRef = reactExports.forwardRef(XMarkIcon);
const XMarkIcon$1 = ForwardRef;
function classNames$1(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = reactExports.useState("");
  const navigation = [
    {
      name: "About",
      href: "",
      current: false,
      subMenu: [
        { name: "About Us", href: "/about-us" },
        { name: "Our Team", href: "/our-team" }
      ]
    },
    {
      name: "Applications",
      href: "",
      current: false,
      subMenu: [{ name: "HydroGEN", href: "/hydrogen" }]
    },
    {
      name: "Data and Simulations",
      href: "",
      current: false,
      subMenu: [
        { name: "HydroData", href: "/hydrodata" },
        { name: "ParFlow CONUS1.0", href: "/parflow-conus1" },
        { name: "ParFlow CONUS2.0", href: "/parflow-conus2" }
      ]
    },
    {
      name: "Modeling Tools",
      href: "",
      current: false,
      subMenu: [
        {
          name: "SubsetTools",
          href: "/subsettools"
        },
        { name: "ParFlow Resources", href: "/parflow-resources" }
      ]
    },
    {
      name: "Educational Tools",
      href: "/team",
      current: false,
      subMenu: [
        {
          name: "ParFlow SandTank Model",
          href: "/parflow-sandtank-model"
        },
        { name: "SandTank ML", href: "/sandtank-ml" },
        {
          name: "Other Tools and Partners",
          href: "/other-tools-and-partners"
        },
        { name: "Short Courses", href: "/short-courses" }
      ]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ve$1, { as: "nav", className: "bg-primary", children: ({ open }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto px-2 sm:px-8 lg:px-24 max-w-screen-2xl m-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-16 items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 flex items-center sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ve$1.Button, { className: "relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -inset-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Open main menu" }),
        open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          XMarkIcon$1,
          {
            className: "block h-6 w-6 text-white",
            "aria-hidden": "true"
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Bars3Icon$1,
          {
            className: "block h-6 w-6 text-white",
            "aria-hidden": "true"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-auto items-center justify-center sm:items-stretch sm:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-shrink-0 items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            className: "h-14 w-auto",
            src: "./images/Logo-White-hydroframe.png",
            alt: "HydroFrame"
          }
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden sm:ml-6 sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex space-x-8 justify-end items-center h-[64px]", children: navigation.map(
          (item, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            it,
            {
              as: "div",
              className: "relative mr-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  it.Button,
                  {
                    id: "button_" + index,
                    className: "hidden sm:block text-white hover:text-sky-200 focus:text-sky-200 active:text-sky-200 h-[64px] font-medium",
                    children: item.name
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  tt,
                  {
                    as: reactExports.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      it.Items,
                      {
                        className: classNames$1(
                          "absolute",
                          "left-0",
                          "mt-0",
                          "w-52",
                          "origin-top-right",
                          "rounded-none",
                          "bg-white",
                          "py-2",
                          "shadow-lg",
                          "ring-1",
                          "ring-black",
                          "ring-opacity-5",
                          "focus:outline-none"
                        ),
                        children: item.subMenu.map(
                          (subItem, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            it.Item,
                            {
                              children: ({
                                active
                              }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                Link,
                                {
                                  to: subItem.href,
                                  className: classNames$1(
                                    active ? "bg-gray-100" : "",
                                    "block px-4 py-2"
                                  ),
                                  children: subItem.name
                                }
                              )
                            },
                            "sub_" + i2
                          )
                        )
                      }
                    )
                  }
                )
              ]
            },
            "main" + index
          )
        ) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ve$1.Panel, { className: "sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1 px-2 pb-3 pt-2", children: navigation.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(React$6.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: classNames$1(
            item.href === location.pathname ? "text-sky-200" : "text-white hover:text-sky-200 active: hover:text-sky-200",
            " font-medium flex justify-between rounded-md px-3 py-2"
          ),
          onClick: () => setActiveMenu(item.name),
          "aria-current": item.current ? "page" : void 0,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(it.Button, { children: item.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDownIcon$1, { className: "w-4 h-4" })
          ]
        }
      ),
      activeMenu === item.name && /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: item.subMenu.map(
        (subItem) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          ve$1.Button,
          {
            as: "a",
            href: subItem.href,
            className: classNames$1(
              subItem.href === location.pathname ? "text-sky-200" : "text-white hover:text-sky-200",
              "ml-5 rounded-md px-3 py-2 items-center flex gap-x-2"
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full !w-2 bg-white h-2 leading-none inline-block", children: " " }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: subItem.name })
            ]
          },
          subItem.name
        )
      ) })
    ] }, item.name)) }) }) })
  ] }) }) });
}
var browser = { exports: {} };
var debug$1 = { exports: {} };
var s = 1e3;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse(val);
  } else if (type === "number" && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
  );
};
function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n2 = parseFloat(match[1]);
  var type = (match[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n2 * y;
    case "days":
    case "day":
    case "d":
      return n2 * d;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n2 * h;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n2 * m;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n2 * s;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n2;
    default:
      return void 0;
  }
}
function fmtShort(ms2) {
  if (ms2 >= d) {
    return Math.round(ms2 / d) + "d";
  }
  if (ms2 >= h) {
    return Math.round(ms2 / h) + "h";
  }
  if (ms2 >= m) {
    return Math.round(ms2 / m) + "m";
  }
  if (ms2 >= s) {
    return Math.round(ms2 / s) + "s";
  }
  return ms2 + "ms";
}
function fmtLong(ms2) {
  return plural(ms2, d, "day") || plural(ms2, h, "hour") || plural(ms2, m, "minute") || plural(ms2, s, "second") || ms2 + " ms";
}
function plural(ms2, n2, name) {
  if (ms2 < n2) {
    return;
  }
  if (ms2 < n2 * 1.5) {
    return Math.floor(ms2 / n2) + " " + name;
  }
  return Math.ceil(ms2 / n2) + " " + name + "s";
}
(function(module, exports) {
  exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms;
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevTime;
  function selectColor(namespace) {
    var hash = 0, i2;
    for (i2 in namespace) {
      hash = (hash << 5) - hash + namespace.charCodeAt(i2);
      hash |= 0;
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
  }
  function createDebug(namespace) {
    function debug2() {
      if (!debug2.enabled)
        return;
      var self2 = debug2;
      var curr = +/* @__PURE__ */ new Date();
      var ms2 = curr - (prevTime || curr);
      self2.diff = ms2;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i2 = 0; i2 < args.length; i2++) {
        args[i2] = arguments[i2];
      }
      args[0] = exports.coerce(args[0]);
      if ("string" !== typeof args[0]) {
        args.unshift("%O");
      }
      var index = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format2) {
        if (match === "%%")
          return match;
        index++;
        var formatter = exports.formatters[format2];
        if ("function" === typeof formatter) {
          var val = args[index];
          match = formatter.call(self2, val);
          args.splice(index, 1);
          index--;
        }
        return match;
      });
      exports.formatArgs.call(self2, args);
      var logFn = debug2.log || exports.log || console.log.bind(console);
      logFn.apply(self2, args);
    }
    debug2.namespace = namespace;
    debug2.enabled = exports.enabled(namespace);
    debug2.useColors = exports.useColors();
    debug2.color = selectColor(namespace);
    if ("function" === typeof exports.init) {
      exports.init(debug2);
    }
    return debug2;
  }
  function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split2 = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split2.length;
    for (var i2 = 0; i2 < len; i2++) {
      if (!split2[i2])
        continue;
      namespaces = split2[i2].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  }
  function disable() {
    exports.enable("");
  }
  function enabled(name) {
    var i2, len;
    for (i2 = 0, len = exports.skips.length; i2 < len; i2++) {
      if (exports.skips[i2].test(name)) {
        return false;
      }
    }
    for (i2 = 0, len = exports.names.length; i2 < len; i2++) {
      if (exports.names[i2].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error)
      return val.stack || val.message;
    return val;
  }
})(debug$1, debug$1.exports);
var debugExports = debug$1.exports;
(function(module, exports) {
  exports = module.exports = debugExports;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
  exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  exports.formatters.j = function(v2) {
    try {
      return JSON.stringify(v2);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  function formatArgs(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors2)
      return;
    var c2 = "color: " + this.color;
    args.splice(1, 0, c2, "color: inherit");
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
      if ("%%" === match)
        return;
      index++;
      if ("%c" === match) {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c2);
  }
  function log() {
    return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem("debug");
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e2) {
    }
  }
  function load() {
    var r2;
    try {
      r2 = exports.storage.debug;
    } catch (e2) {
    }
    if (!r2 && typeof process !== "undefined" && "env" in process) {
      r2 = {}.DEBUG;
    }
    return r2;
  }
  exports.enable(load());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e2) {
    }
  }
})(browser, browser.exports);
var browserExports = browser.exports;
var debug = browserExports("jsonp");
var jsonp_1 = jsonp;
var count = 0;
function noop() {
}
function jsonp(url, opts, fn) {
  if ("function" == typeof opts) {
    fn = opts;
    opts = {};
  }
  if (!opts)
    opts = {};
  var prefix = opts.prefix || "__jp";
  var id2 = opts.name || prefix + count++;
  var param = opts.param || "callback";
  var timeout = null != opts.timeout ? opts.timeout : 6e4;
  var enc = encodeURIComponent;
  var target = document.getElementsByTagName("script")[0] || document.head;
  var script;
  var timer;
  if (timeout) {
    timer = setTimeout(function() {
      cleanup();
      if (fn)
        fn(new Error("Timeout"));
    }, timeout);
  }
  function cleanup() {
    if (script.parentNode)
      script.parentNode.removeChild(script);
    window[id2] = noop;
    if (timer)
      clearTimeout(timer);
  }
  function cancel() {
    if (window[id2]) {
      cleanup();
    }
  }
  window[id2] = function(data) {
    debug("jsonp got", data);
    cleanup();
    if (fn)
      fn(null, data);
  };
  url += (~url.indexOf("?") ? "&" : "?") + param + "=" + enc(id2);
  url = url.replace("?&", "?");
  debug('jsonp req "%s"', url);
  script = document.createElement("script");
  script.src = url;
  target.parentNode.insertBefore(script, target);
  return cancel;
}
const jsonp$1 = /* @__PURE__ */ getDefaultExportFromCjs(jsonp_1);
var toQuerystring_min = { exports: {} };
(function(module, exports) {
  !function(t2, o3) {
    module.exports = o3();
  }(commonjsGlobal, function() {
    return (() => {
      var t2 = { d: (o4, e3) => {
        for (var n3 in e3)
          t2.o(e3, n3) && !t2.o(o4, n3) && Object.defineProperty(o4, n3, { enumerable: true, get: e3[n3] });
      }, o: (t3, o4) => Object.prototype.hasOwnProperty.call(t3, o4), r: (t3) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t3, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t3, "__esModule", { value: true });
      } }, o3 = {};
      function e2(t3) {
        return e2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t4) {
          return typeof t4;
        } : function(t4) {
          return t4 && "function" == typeof Symbol && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4;
        }, e2(t3);
      }
      t2.r(o3), t2.d(o3, { default: () => a2 });
      var n2 = encodeURIComponent;
      function r2(t3, o4, r3, c3, a3) {
        var i2 = c3 && a3.arrayPrefix || "";
        if ("object" === e2(o4)) {
          var f2 = "".concat(t3).concat(i2).concat(r3 && "]", "[");
          return "".concat(u2(o4, "".concat(r3).concat(f2), a3));
        }
        return r3 && r3.length ? "".concat(r3).concat(t3, "]").concat(i2, "=").concat(n2(o4)) : "".concat(t3).concat(i2, "=").concat(n2(o4));
      }
      function c2(t3, o4, e3, n3) {
        return o4.map(function(o5) {
          return r2(t3, o5, e3, true, n3);
        }).join("&");
      }
      function u2(t3) {
        var o4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", e3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        return (Array.isArray(t3) ? t3.map(function(t4, n3) {
          return r2("".concat(n3), t4, o4, true, e3);
        }) : Object.keys(t3).filter(function(o5) {
          return void 0 !== t3[o5];
        }).map(function(n3) {
          return t3[n3] && Array.isArray(t3[n3]) ? c2("".concat(n3), t3[n3], o4, e3) : r2(n3, t3[n3], o4, false, e3);
        })).join("&").replace(/%20/g, "+");
      }
      const a2 = u2;
      return o3;
    })();
  });
})(toQuerystring_min);
var toQuerystring_minExports = toQuerystring_min.exports;
const toQueryString = /* @__PURE__ */ getDefaultExportFromCjs(toQuerystring_minExports);
var SimpleForm = function SimpleForm2(_ref) {
  var status = _ref.status, message = _ref.message, className = _ref.className, style = _ref.style, onSubmitted = _ref.onSubmitted;
  var input = void 0;
  var submit = function submit2() {
    return input && input.value.indexOf("@") > -1 && onSubmitted({
      EMAIL: input.value
    });
  };
  return React$6.createElement(
    "div",
    { className, style },
    status === "sending" && React$6.createElement(
      "div",
      { style: { color: "blue" } },
      "sending..."
    ),
    status === "error" && React$6.createElement("div", {
      style: { color: "red" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    status === "success" && React$6.createElement("div", {
      style: { color: "green" },
      dangerouslySetInnerHTML: { __html: message }
    }),
    React$6.createElement("input", {
      ref: function ref(node) {
        return input = node;
      },
      type: "email",
      placeholder: "Your email"
    }),
    React$6.createElement(
      "button",
      { onClick: submit },
      "Submit"
    )
  );
};
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _possibleConstructorReturn(self2, call) {
  if (!self2) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function") ? call : self2;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var getAjaxUrl = function getAjaxUrl2(url) {
  return url.replace("/post?", "/post-json?");
};
var MailchimpSubscribe = function(_React$Component) {
  _inherits(MailchimpSubscribe2, _React$Component);
  function MailchimpSubscribe2() {
    var _temp, _this, _ret;
    _classCallCheck(this, MailchimpSubscribe2);
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      status: null,
      message: null
    }, _this.subscribe = function(data) {
      var params = toQueryString(data);
      var url = getAjaxUrl(_this.props.url) + "&" + params;
      _this.setState({
        status: "sending",
        message: null
      }, function() {
        return jsonp$1(url, {
          param: "c"
        }, function(err, data2) {
          if (err) {
            _this.setState({
              status: "error",
              message: err
            });
          } else if (data2.result !== "success") {
            _this.setState({
              status: "error",
              message: data2.msg
            });
          } else {
            _this.setState({
              status: "success",
              message: data2.msg
            });
          }
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }
  MailchimpSubscribe2.prototype.render = function render2() {
    return this.props.render({
      subscribe: this.subscribe,
      status: this.state.status,
      message: this.state.message
    });
  };
  return MailchimpSubscribe2;
}(React$6.Component);
MailchimpSubscribe.propTypes = {};
MailchimpSubscribe.defaultProps = {
  render: function render(_ref) {
    var subscribe = _ref.subscribe, status = _ref.status, message = _ref.message;
    return React$6.createElement(SimpleForm, {
      status,
      message,
      onSubmitted: function onSubmitted(formData) {
        return subscribe(formData);
      }
    });
  }
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Button = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: props.type || "button",
      className: classNames(
        "flex items-center px-2 lg:px-5 py-1 font-bold bg-secondary hover:bg-secondaryHover border border-gray-300 text-white shadow-md",
        props.class ? props.class : ""
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex m-auto", children: props.children })
    }
  );
};
function Cache(maxSize) {
  this._maxSize = maxSize;
  this.clear();
}
Cache.prototype.clear = function() {
  this._size = 0;
  this._values = /* @__PURE__ */ Object.create(null);
};
Cache.prototype.get = function(key) {
  return this._values[key];
};
Cache.prototype.set = function(key, value) {
  this._size >= this._maxSize && this.clear();
  if (!(key in this._values))
    this._size++;
  return this._values[key] = value;
};
var SPLIT_REGEX = /[^.^\]^[]+|(?=\[\]|\.\.)/g, DIGIT_REGEX = /^\d+$/, LEAD_DIGIT_REGEX = /^\d/, SPEC_CHAR_REGEX = /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g, CLEAN_QUOTES_REGEX = /^\s*(['"]?)(.*?)(\1)\s*$/, MAX_CACHE_SIZE = 512;
var pathCache = new Cache(MAX_CACHE_SIZE), setCache = new Cache(MAX_CACHE_SIZE), getCache = new Cache(MAX_CACHE_SIZE);
var propertyExpr = {
  Cache,
  split,
  normalizePath,
  setter: function(path) {
    var parts = normalizePath(path);
    return setCache.get(path) || setCache.set(path, function setter(obj, value) {
      var index = 0;
      var len = parts.length;
      var data = obj;
      while (index < len - 1) {
        var part = parts[index];
        if (part === "__proto__" || part === "constructor" || part === "prototype") {
          return obj;
        }
        data = data[parts[index++]];
      }
      data[parts[index]] = value;
    });
  },
  getter: function(path, safe) {
    var parts = normalizePath(path);
    return getCache.get(path) || getCache.set(path, function getter(data) {
      var index = 0, len = parts.length;
      while (index < len) {
        if (data != null || !safe)
          data = data[parts[index++]];
        else
          return;
      }
      return data;
    });
  },
  join: function(segments) {
    return segments.reduce(function(path, part) {
      return path + (isQuoted(part) || DIGIT_REGEX.test(part) ? "[" + part + "]" : (path ? "." : "") + part);
    }, "");
  },
  forEach: function(path, cb2, thisArg) {
    forEach(Array.isArray(path) ? path : split(path), cb2, thisArg);
  }
};
function normalizePath(path) {
  return pathCache.get(path) || pathCache.set(
    path,
    split(path).map(function(part) {
      return part.replace(CLEAN_QUOTES_REGEX, "$2");
    })
  );
}
function split(path) {
  return path.match(SPLIT_REGEX) || [""];
}
function forEach(parts, iter, thisArg) {
  var len = parts.length, part, idx, isArray, isBracket;
  for (idx = 0; idx < len; idx++) {
    part = parts[idx];
    if (part) {
      if (shouldBeQuoted(part)) {
        part = '"' + part + '"';
      }
      isBracket = isQuoted(part);
      isArray = !isBracket && /^\d+$/.test(part);
      iter.call(thisArg, part, isBracket, isArray, idx, parts);
    }
  }
}
function isQuoted(str) {
  return typeof str === "string" && str && ["'", '"'].indexOf(str.charAt(0)) !== -1;
}
function hasLeadingNumber(part) {
  return part.match(LEAD_DIGIT_REGEX) && !part.match(DIGIT_REGEX);
}
function hasSpecialChars(part) {
  return SPEC_CHAR_REGEX.test(part);
}
function shouldBeQuoted(part) {
  return !isQuoted(part) && (hasLeadingNumber(part) || hasSpecialChars(part));
}
const reWords = /[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g;
const words = (str) => str.match(reWords) || [];
const upperFirst = (str) => str[0].toUpperCase() + str.slice(1);
const join = (str, d2) => words(str).join(d2).toLowerCase();
const camelCase = (str) => words(str).reduce(
  (acc, next2) => `${acc}${!acc ? next2.toLowerCase() : next2[0].toUpperCase() + next2.slice(1).toLowerCase()}`,
  ""
);
const pascalCase = (str) => upperFirst(camelCase(str));
const snakeCase = (str) => join(str, "_");
const kebabCase = (str) => join(str, "-");
const sentenceCase = (str) => upperFirst(join(str, " "));
const titleCase = (str) => words(str).map(upperFirst).join(" ");
var tinyCase = {
  words,
  upperFirst,
  camelCase,
  pascalCase,
  snakeCase,
  kebabCase,
  sentenceCase,
  titleCase
};
var toposort$2 = { exports: {} };
toposort$2.exports = function(edges) {
  return toposort(uniqueNodes(edges), edges);
};
toposort$2.exports.array = toposort;
function toposort(nodes, edges) {
  var cursor = nodes.length, sorted = new Array(cursor), visited = {}, i2 = cursor, outgoingEdges = makeOutgoingEdges(edges), nodesHash = makeNodesHash(nodes);
  edges.forEach(function(edge) {
    if (!nodesHash.has(edge[0]) || !nodesHash.has(edge[1])) {
      throw new Error("Unknown node. There is an unknown node in the supplied edges.");
    }
  });
  while (i2--) {
    if (!visited[i2])
      visit(nodes[i2], i2, /* @__PURE__ */ new Set());
  }
  return sorted;
  function visit(node, i3, predecessors) {
    if (predecessors.has(node)) {
      var nodeRep;
      try {
        nodeRep = ", node was:" + JSON.stringify(node);
      } catch (e2) {
        nodeRep = "";
      }
      throw new Error("Cyclic dependency" + nodeRep);
    }
    if (!nodesHash.has(node)) {
      throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: " + JSON.stringify(node));
    }
    if (visited[i3])
      return;
    visited[i3] = true;
    var outgoing = outgoingEdges.get(node) || /* @__PURE__ */ new Set();
    outgoing = Array.from(outgoing);
    if (i3 = outgoing.length) {
      predecessors.add(node);
      do {
        var child = outgoing[--i3];
        visit(child, nodesHash.get(child), predecessors);
      } while (i3);
      predecessors.delete(node);
    }
    sorted[--cursor] = node;
  }
}
function uniqueNodes(arr) {
  var res = /* @__PURE__ */ new Set();
  for (var i2 = 0, len = arr.length; i2 < len; i2++) {
    var edge = arr[i2];
    res.add(edge[0]);
    res.add(edge[1]);
  }
  return Array.from(res);
}
function makeOutgoingEdges(arr) {
  var edges = /* @__PURE__ */ new Map();
  for (var i2 = 0, len = arr.length; i2 < len; i2++) {
    var edge = arr[i2];
    if (!edges.has(edge[0]))
      edges.set(edge[0], /* @__PURE__ */ new Set());
    if (!edges.has(edge[1]))
      edges.set(edge[1], /* @__PURE__ */ new Set());
    edges.get(edge[0]).add(edge[1]);
  }
  return edges;
}
function makeNodesHash(arr) {
  var res = /* @__PURE__ */ new Map();
  for (var i2 = 0, len = arr.length; i2 < len; i2++) {
    res.set(arr[i2], i2);
  }
  return res;
}
var toposortExports = toposort$2.exports;
const toposort$1 = /* @__PURE__ */ getDefaultExportFromCjs(toposortExports);
const toString = Object.prototype.toString;
const errorToString = Error.prototype.toString;
const regExpToString = RegExp.prototype.toString;
const symbolToString = typeof Symbol !== "undefined" ? Symbol.prototype.toString : () => "";
const SYMBOL_REGEXP = /^Symbol\((.*)\)(.*)$/;
function printNumber(val) {
  if (val != +val)
    return "NaN";
  const isNegativeZero = val === 0 && 1 / val < 0;
  return isNegativeZero ? "-0" : "" + val;
}
function printSimpleValue(val, quoteStrings = false) {
  if (val == null || val === true || val === false)
    return "" + val;
  const typeOf = typeof val;
  if (typeOf === "number")
    return printNumber(val);
  if (typeOf === "string")
    return quoteStrings ? `"${val}"` : val;
  if (typeOf === "function")
    return "[Function " + (val.name || "anonymous") + "]";
  if (typeOf === "symbol")
    return symbolToString.call(val).replace(SYMBOL_REGEXP, "Symbol($1)");
  const tag = toString.call(val).slice(8, -1);
  if (tag === "Date")
    return isNaN(val.getTime()) ? "" + val : val.toISOString(val);
  if (tag === "Error" || val instanceof Error)
    return "[" + errorToString.call(val) + "]";
  if (tag === "RegExp")
    return regExpToString.call(val);
  return null;
}
function printValue(value, quoteStrings) {
  let result = printSimpleValue(value, quoteStrings);
  if (result !== null)
    return result;
  return JSON.stringify(value, function(key, value2) {
    let result2 = printSimpleValue(this[key], quoteStrings);
    if (result2 !== null)
      return result2;
    return value2;
  }, 2);
}
function toArray(value) {
  return value == null ? [] : [].concat(value);
}
let _Symbol$toStringTag;
let strReg = /\$\{\s*(\w+)\s*\}/g;
_Symbol$toStringTag = Symbol.toStringTag;
class ValidationError extends Error {
  static formatError(message, params) {
    const path = params.label || params.path || "this";
    if (path !== params.path)
      params = Object.assign({}, params, {
        path
      });
    if (typeof message === "string")
      return message.replace(strReg, (_2, key) => printValue(params[key]));
    if (typeof message === "function")
      return message(params);
    return message;
  }
  static isError(err) {
    return err && err.name === "ValidationError";
  }
  constructor(errorOrErrors, value, field, type, disableStack) {
    super();
    this.value = void 0;
    this.path = void 0;
    this.type = void 0;
    this.errors = void 0;
    this.params = void 0;
    this.inner = void 0;
    this[_Symbol$toStringTag] = "Error";
    this.name = "ValidationError";
    this.value = value;
    this.path = field;
    this.type = type;
    this.errors = [];
    this.inner = [];
    toArray(errorOrErrors).forEach((err) => {
      if (ValidationError.isError(err)) {
        this.errors.push(...err.errors);
        const innerErrors = err.inner.length ? err.inner : [err];
        this.inner.push(...innerErrors);
      } else {
        this.errors.push(err);
      }
    });
    this.message = this.errors.length > 1 ? `${this.errors.length} errors occurred` : this.errors[0];
    if (!disableStack && Error.captureStackTrace)
      Error.captureStackTrace(this, ValidationError);
  }
}
let mixed = {
  default: "${path} is invalid",
  required: "${path} is a required field",
  defined: "${path} must be defined",
  notNull: "${path} cannot be null",
  oneOf: "${path} must be one of the following values: ${values}",
  notOneOf: "${path} must not be one of the following values: ${values}",
  notType: ({
    path,
    type,
    value,
    originalValue
  }) => {
    const castMsg = originalValue != null && originalValue !== value ? ` (cast from the value \`${printValue(originalValue, true)}\`).` : ".";
    return type !== "mixed" ? `${path} must be a \`${type}\` type, but the final value was: \`${printValue(value, true)}\`` + castMsg : `${path} must match the configured type. The validated value was: \`${printValue(value, true)}\`` + castMsg;
  }
};
let string = {
  length: "${path} must be exactly ${length} characters",
  min: "${path} must be at least ${min} characters",
  max: "${path} must be at most ${max} characters",
  matches: '${path} must match the following: "${regex}"',
  email: "${path} must be a valid email",
  url: "${path} must be a valid URL",
  uuid: "${path} must be a valid UUID",
  trim: "${path} must be a trimmed string",
  lowercase: "${path} must be a lowercase string",
  uppercase: "${path} must be a upper case string"
};
let number = {
  min: "${path} must be greater than or equal to ${min}",
  max: "${path} must be less than or equal to ${max}",
  lessThan: "${path} must be less than ${less}",
  moreThan: "${path} must be greater than ${more}",
  positive: "${path} must be a positive number",
  negative: "${path} must be a negative number",
  integer: "${path} must be an integer"
};
let date = {
  min: "${path} field must be later than ${min}",
  max: "${path} field must be at earlier than ${max}"
};
let boolean = {
  isValue: "${path} field must be ${value}"
};
let object = {
  noUnknown: "${path} field has unspecified keys: ${unknown}"
};
let array = {
  min: "${path} field must have at least ${min} items",
  max: "${path} field must have less than or equal to ${max} items",
  length: "${path} must have ${length} items"
};
let tuple = {
  notType: (params) => {
    const {
      path,
      value,
      spec
    } = params;
    const typeLen = spec.types.length;
    if (Array.isArray(value)) {
      if (value.length < typeLen)
        return `${path} tuple value has too few items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
      if (value.length > typeLen)
        return `${path} tuple value has too many items, expected a length of ${typeLen} but got ${value.length} for value: \`${printValue(value, true)}\``;
    }
    return ValidationError.formatError(mixed.notType, params);
  }
};
Object.assign(/* @__PURE__ */ Object.create(null), {
  mixed,
  string,
  number,
  date,
  object,
  array,
  boolean,
  tuple
});
const isSchema = (obj) => obj && obj.__isYupSchema__;
class Condition {
  static fromOptions(refs, config) {
    if (!config.then && !config.otherwise)
      throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");
    let {
      is,
      then,
      otherwise
    } = config;
    let check = typeof is === "function" ? is : (...values) => values.every((value) => value === is);
    return new Condition(refs, (values, schema) => {
      var _branch;
      let branch = check(...values) ? then : otherwise;
      return (_branch = branch == null ? void 0 : branch(schema)) != null ? _branch : schema;
    });
  }
  constructor(refs, builder) {
    this.fn = void 0;
    this.refs = refs;
    this.refs = refs;
    this.fn = builder;
  }
  resolve(base, options) {
    let values = this.refs.map((ref) => (
      // TODO: ? operator here?
      ref.getValue(options == null ? void 0 : options.value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context)
    ));
    let schema = this.fn(values, base, options);
    if (schema === void 0 || // @ts-ignore this can be base
    schema === base) {
      return base;
    }
    if (!isSchema(schema))
      throw new TypeError("conditions must return a schema object");
    return schema.resolve(options);
  }
}
const prefixes = {
  context: "$",
  value: "."
};
class Reference {
  constructor(key, options = {}) {
    this.key = void 0;
    this.isContext = void 0;
    this.isValue = void 0;
    this.isSibling = void 0;
    this.path = void 0;
    this.getter = void 0;
    this.map = void 0;
    if (typeof key !== "string")
      throw new TypeError("ref must be a string, got: " + key);
    this.key = key.trim();
    if (key === "")
      throw new TypeError("ref must be a non-empty string");
    this.isContext = this.key[0] === prefixes.context;
    this.isValue = this.key[0] === prefixes.value;
    this.isSibling = !this.isContext && !this.isValue;
    let prefix = this.isContext ? prefixes.context : this.isValue ? prefixes.value : "";
    this.path = this.key.slice(prefix.length);
    this.getter = this.path && propertyExpr.getter(this.path, true);
    this.map = options.map;
  }
  getValue(value, parent, context) {
    let result = this.isContext ? context : this.isValue ? value : parent;
    if (this.getter)
      result = this.getter(result || {});
    if (this.map)
      result = this.map(result);
    return result;
  }
  /**
   *
   * @param {*} value
   * @param {Object} options
   * @param {Object=} options.context
   * @param {Object=} options.parent
   */
  cast(value, options) {
    return this.getValue(value, options == null ? void 0 : options.parent, options == null ? void 0 : options.context);
  }
  resolve() {
    return this;
  }
  describe() {
    return {
      type: "ref",
      key: this.key
    };
  }
  toString() {
    return `Ref(${this.key})`;
  }
  static isRef(value) {
    return value && value.__isYupRef;
  }
}
Reference.prototype.__isYupRef = true;
const isAbsent = (value) => value == null;
function createValidation(config) {
  function validate({
    value,
    path = "",
    options,
    originalValue,
    schema
  }, panic, next2) {
    const {
      name,
      test,
      params,
      message,
      skipAbsent
    } = config;
    let {
      parent,
      context,
      abortEarly = schema.spec.abortEarly,
      disableStackTrace = schema.spec.disableStackTrace
    } = options;
    function resolve(item) {
      return Reference.isRef(item) ? item.getValue(value, parent, context) : item;
    }
    function createError(overrides = {}) {
      var _overrides$disableSta;
      const nextParams = Object.assign({
        value,
        originalValue,
        label: schema.spec.label,
        path: overrides.path || path,
        spec: schema.spec
      }, params, overrides.params);
      for (const key of Object.keys(nextParams))
        nextParams[key] = resolve(nextParams[key]);
      const error = new ValidationError(ValidationError.formatError(overrides.message || message, nextParams), value, nextParams.path, overrides.type || name, (_overrides$disableSta = overrides.disableStackTrace) != null ? _overrides$disableSta : disableStackTrace);
      error.params = nextParams;
      return error;
    }
    const invalid = abortEarly ? panic : next2;
    let ctx = {
      path,
      parent,
      type: name,
      from: options.from,
      createError,
      resolve,
      options,
      originalValue,
      schema
    };
    const handleResult = (validOrError) => {
      if (ValidationError.isError(validOrError))
        invalid(validOrError);
      else if (!validOrError)
        invalid(createError());
      else
        next2(null);
    };
    const handleError = (err) => {
      if (ValidationError.isError(err))
        invalid(err);
      else
        panic(err);
    };
    const shouldSkip = skipAbsent && isAbsent(value);
    if (shouldSkip) {
      return handleResult(true);
    }
    let result;
    try {
      var _result;
      result = test.call(ctx, value, ctx);
      if (typeof ((_result = result) == null ? void 0 : _result.then) === "function") {
        if (options.sync) {
          throw new Error(`Validation test of type: "${ctx.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);
        }
        return Promise.resolve(result).then(handleResult, handleError);
      }
    } catch (err) {
      handleError(err);
      return;
    }
    handleResult(result);
  }
  validate.OPTIONS = config;
  return validate;
}
function getIn(schema, path, value, context = value) {
  let parent, lastPart, lastPartDebug;
  if (!path)
    return {
      parent,
      parentPath: path,
      schema
    };
  propertyExpr.forEach(path, (_part, isBracket, isArray) => {
    let part = isBracket ? _part.slice(1, _part.length - 1) : _part;
    schema = schema.resolve({
      context,
      parent,
      value
    });
    let isTuple = schema.type === "tuple";
    let idx = isArray ? parseInt(part, 10) : 0;
    if (schema.innerType || isTuple) {
      if (isTuple && !isArray)
        throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${lastPartDebug}" must contain an index to the tuple element, e.g. "${lastPartDebug}[0]"`);
      if (value && idx >= value.length) {
        throw new Error(`Yup.reach cannot resolve an array item at index: ${_part}, in the path: ${path}. because there is no value at that index. `);
      }
      parent = value;
      value = value && value[idx];
      schema = isTuple ? schema.spec.types[idx] : schema.innerType;
    }
    if (!isArray) {
      if (!schema.fields || !schema.fields[part])
        throw new Error(`The schema does not contain the path: ${path}. (failed at: ${lastPartDebug} which is a type: "${schema.type}")`);
      parent = value;
      value = value && value[part];
      schema = schema.fields[part];
    }
    lastPart = part;
    lastPartDebug = isBracket ? "[" + _part + "]" : "." + _part;
  });
  return {
    schema,
    parent,
    parentPath: lastPart
  };
}
class ReferenceSet extends Set {
  describe() {
    const description = [];
    for (const item of this.values()) {
      description.push(Reference.isRef(item) ? item.describe() : item);
    }
    return description;
  }
  resolveAll(resolve) {
    let result = [];
    for (const item of this.values()) {
      result.push(resolve(item));
    }
    return result;
  }
  clone() {
    return new ReferenceSet(this.values());
  }
  merge(newItems, removeItems) {
    const next2 = this.clone();
    newItems.forEach((value) => next2.add(value));
    removeItems.forEach((value) => next2.delete(value));
    return next2;
  }
}
function clone(src, seen = /* @__PURE__ */ new Map()) {
  if (isSchema(src) || !src || typeof src !== "object")
    return src;
  if (seen.has(src))
    return seen.get(src);
  let copy;
  if (src instanceof Date) {
    copy = new Date(src.getTime());
    seen.set(src, copy);
  } else if (src instanceof RegExp) {
    copy = new RegExp(src);
    seen.set(src, copy);
  } else if (Array.isArray(src)) {
    copy = new Array(src.length);
    seen.set(src, copy);
    for (let i2 = 0; i2 < src.length; i2++)
      copy[i2] = clone(src[i2], seen);
  } else if (src instanceof Map) {
    copy = /* @__PURE__ */ new Map();
    seen.set(src, copy);
    for (const [k2, v2] of src.entries())
      copy.set(k2, clone(v2, seen));
  } else if (src instanceof Set) {
    copy = /* @__PURE__ */ new Set();
    seen.set(src, copy);
    for (const v2 of src)
      copy.add(clone(v2, seen));
  } else if (src instanceof Object) {
    copy = {};
    seen.set(src, copy);
    for (const [k2, v2] of Object.entries(src))
      copy[k2] = clone(v2, seen);
  } else {
    throw Error(`Unable to clone ${src}`);
  }
  return copy;
}
class Schema {
  constructor(options) {
    this.type = void 0;
    this.deps = [];
    this.tests = void 0;
    this.transforms = void 0;
    this.conditions = [];
    this._mutate = void 0;
    this.internalTests = {};
    this._whitelist = new ReferenceSet();
    this._blacklist = new ReferenceSet();
    this.exclusiveTests = /* @__PURE__ */ Object.create(null);
    this._typeCheck = void 0;
    this.spec = void 0;
    this.tests = [];
    this.transforms = [];
    this.withMutation(() => {
      this.typeError(mixed.notType);
    });
    this.type = options.type;
    this._typeCheck = options.check;
    this.spec = Object.assign({
      strip: false,
      strict: false,
      abortEarly: true,
      recursive: true,
      disableStackTrace: false,
      nullable: false,
      optional: true,
      coerce: true
    }, options == null ? void 0 : options.spec);
    this.withMutation((s2) => {
      s2.nonNullable();
    });
  }
  // TODO: remove
  get _type() {
    return this.type;
  }
  clone(spec) {
    if (this._mutate) {
      if (spec)
        Object.assign(this.spec, spec);
      return this;
    }
    const next2 = Object.create(Object.getPrototypeOf(this));
    next2.type = this.type;
    next2._typeCheck = this._typeCheck;
    next2._whitelist = this._whitelist.clone();
    next2._blacklist = this._blacklist.clone();
    next2.internalTests = Object.assign({}, this.internalTests);
    next2.exclusiveTests = Object.assign({}, this.exclusiveTests);
    next2.deps = [...this.deps];
    next2.conditions = [...this.conditions];
    next2.tests = [...this.tests];
    next2.transforms = [...this.transforms];
    next2.spec = clone(Object.assign({}, this.spec, spec));
    return next2;
  }
  label(label) {
    let next2 = this.clone();
    next2.spec.label = label;
    return next2;
  }
  meta(...args) {
    if (args.length === 0)
      return this.spec.meta;
    let next2 = this.clone();
    next2.spec.meta = Object.assign(next2.spec.meta || {}, args[0]);
    return next2;
  }
  withMutation(fn) {
    let before = this._mutate;
    this._mutate = true;
    let result = fn(this);
    this._mutate = before;
    return result;
  }
  concat(schema) {
    if (!schema || schema === this)
      return this;
    if (schema.type !== this.type && this.type !== "mixed")
      throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${schema.type}`);
    let base = this;
    let combined = schema.clone();
    const mergedSpec = Object.assign({}, base.spec, combined.spec);
    combined.spec = mergedSpec;
    combined.internalTests = Object.assign({}, base.internalTests, combined.internalTests);
    combined._whitelist = base._whitelist.merge(schema._whitelist, schema._blacklist);
    combined._blacklist = base._blacklist.merge(schema._blacklist, schema._whitelist);
    combined.tests = base.tests;
    combined.exclusiveTests = base.exclusiveTests;
    combined.withMutation((next2) => {
      schema.tests.forEach((fn) => {
        next2.test(fn.OPTIONS);
      });
    });
    combined.transforms = [...base.transforms, ...combined.transforms];
    return combined;
  }
  isType(v2) {
    if (v2 == null) {
      if (this.spec.nullable && v2 === null)
        return true;
      if (this.spec.optional && v2 === void 0)
        return true;
      return false;
    }
    return this._typeCheck(v2);
  }
  resolve(options) {
    let schema = this;
    if (schema.conditions.length) {
      let conditions = schema.conditions;
      schema = schema.clone();
      schema.conditions = [];
      schema = conditions.reduce((prevSchema, condition) => condition.resolve(prevSchema, options), schema);
      schema = schema.resolve(options);
    }
    return schema;
  }
  resolveOptions(options) {
    var _options$strict, _options$abortEarly, _options$recursive, _options$disableStack;
    return Object.assign({}, options, {
      from: options.from || [],
      strict: (_options$strict = options.strict) != null ? _options$strict : this.spec.strict,
      abortEarly: (_options$abortEarly = options.abortEarly) != null ? _options$abortEarly : this.spec.abortEarly,
      recursive: (_options$recursive = options.recursive) != null ? _options$recursive : this.spec.recursive,
      disableStackTrace: (_options$disableStack = options.disableStackTrace) != null ? _options$disableStack : this.spec.disableStackTrace
    });
  }
  /**
   * Run the configured transform pipeline over an input value.
   */
  cast(value, options = {}) {
    let resolvedSchema = this.resolve(Object.assign({
      value
    }, options));
    let allowOptionality = options.assert === "ignore-optionality";
    let result = resolvedSchema._cast(value, options);
    if (options.assert !== false && !resolvedSchema.isType(result)) {
      if (allowOptionality && isAbsent(result)) {
        return result;
      }
      let formattedValue = printValue(value);
      let formattedResult = printValue(result);
      throw new TypeError(`The value of ${options.path || "field"} could not be cast to a value that satisfies the schema type: "${resolvedSchema.type}". 

attempted value: ${formattedValue} 
` + (formattedResult !== formattedValue ? `result of cast: ${formattedResult}` : ""));
    }
    return result;
  }
  _cast(rawValue, options) {
    let value = rawValue === void 0 ? rawValue : this.transforms.reduce((prevValue, fn) => fn.call(this, prevValue, rawValue, this), rawValue);
    if (value === void 0) {
      value = this.getDefault(options);
    }
    return value;
  }
  _validate(_value, options = {}, panic, next2) {
    let {
      path,
      originalValue = _value,
      strict = this.spec.strict
    } = options;
    let value = _value;
    if (!strict) {
      value = this._cast(value, Object.assign({
        assert: false
      }, options));
    }
    let initialTests = [];
    for (let test of Object.values(this.internalTests)) {
      if (test)
        initialTests.push(test);
    }
    this.runTests({
      path,
      value,
      originalValue,
      options,
      tests: initialTests
    }, panic, (initialErrors) => {
      if (initialErrors.length) {
        return next2(initialErrors, value);
      }
      this.runTests({
        path,
        value,
        originalValue,
        options,
        tests: this.tests
      }, panic, next2);
    });
  }
  /**
   * Executes a set of validations, either schema, produced Tests or a nested
   * schema validate result.
   */
  runTests(runOptions, panic, next2) {
    let fired = false;
    let {
      tests,
      value,
      originalValue,
      path,
      options
    } = runOptions;
    let panicOnce = (arg) => {
      if (fired)
        return;
      fired = true;
      panic(arg, value);
    };
    let nextOnce = (arg) => {
      if (fired)
        return;
      fired = true;
      next2(arg, value);
    };
    let count2 = tests.length;
    let nestedErrors = [];
    if (!count2)
      return nextOnce([]);
    let args = {
      value,
      originalValue,
      path,
      options,
      schema: this
    };
    for (let i2 = 0; i2 < tests.length; i2++) {
      const test = tests[i2];
      test(args, panicOnce, function finishTestRun(err) {
        if (err) {
          Array.isArray(err) ? nestedErrors.push(...err) : nestedErrors.push(err);
        }
        if (--count2 <= 0) {
          nextOnce(nestedErrors);
        }
      });
    }
  }
  asNestedTest({
    key,
    index,
    parent,
    parentPath,
    originalParent,
    options
  }) {
    const k2 = key != null ? key : index;
    if (k2 == null) {
      throw TypeError("Must include `key` or `index` for nested validations");
    }
    const isIndex = typeof k2 === "number";
    let value = parent[k2];
    const testOptions = Object.assign({}, options, {
      // Nested validations fields are always strict:
      //    1. parent isn't strict so the casting will also have cast inner values
      //    2. parent is strict in which case the nested values weren't cast either
      strict: true,
      parent,
      value,
      originalValue: originalParent[k2],
      // FIXME: tests depend on `index` being passed around deeply,
      //   we should not let the options.key/index bleed through
      key: void 0,
      // index: undefined,
      [isIndex ? "index" : "key"]: k2,
      path: isIndex || k2.includes(".") ? `${parentPath || ""}[${value ? k2 : `"${k2}"`}]` : (parentPath ? `${parentPath}.` : "") + key
    });
    return (_2, panic, next2) => this.resolve(testOptions)._validate(value, testOptions, panic, next2);
  }
  validate(value, options) {
    var _options$disableStack2;
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let disableStackTrace = (_options$disableStack2 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack2 : schema.spec.disableStackTrace;
    return new Promise((resolve, reject) => schema._validate(value, options, (error, parsed) => {
      if (ValidationError.isError(error))
        error.value = parsed;
      reject(error);
    }, (errors, validated) => {
      if (errors.length)
        reject(new ValidationError(errors, validated, void 0, void 0, disableStackTrace));
      else
        resolve(validated);
    }));
  }
  validateSync(value, options) {
    var _options$disableStack3;
    let schema = this.resolve(Object.assign({}, options, {
      value
    }));
    let result;
    let disableStackTrace = (_options$disableStack3 = options == null ? void 0 : options.disableStackTrace) != null ? _options$disableStack3 : schema.spec.disableStackTrace;
    schema._validate(value, Object.assign({}, options, {
      sync: true
    }), (error, parsed) => {
      if (ValidationError.isError(error))
        error.value = parsed;
      throw error;
    }, (errors, validated) => {
      if (errors.length)
        throw new ValidationError(errors, value, void 0, void 0, disableStackTrace);
      result = validated;
    });
    return result;
  }
  isValid(value, options) {
    return this.validate(value, options).then(() => true, (err) => {
      if (ValidationError.isError(err))
        return false;
      throw err;
    });
  }
  isValidSync(value, options) {
    try {
      this.validateSync(value, options);
      return true;
    } catch (err) {
      if (ValidationError.isError(err))
        return false;
      throw err;
    }
  }
  _getDefault(options) {
    let defaultValue = this.spec.default;
    if (defaultValue == null) {
      return defaultValue;
    }
    return typeof defaultValue === "function" ? defaultValue.call(this, options) : clone(defaultValue);
  }
  getDefault(options) {
    let schema = this.resolve(options || {});
    return schema._getDefault(options);
  }
  default(def) {
    if (arguments.length === 0) {
      return this._getDefault();
    }
    let next2 = this.clone({
      default: def
    });
    return next2;
  }
  strict(isStrict = true) {
    return this.clone({
      strict: isStrict
    });
  }
  nullability(nullable, message) {
    const next2 = this.clone({
      nullable
    });
    next2.internalTests.nullable = createValidation({
      message,
      name: "nullable",
      test(value) {
        return value === null ? this.schema.spec.nullable : true;
      }
    });
    return next2;
  }
  optionality(optional, message) {
    const next2 = this.clone({
      optional
    });
    next2.internalTests.optionality = createValidation({
      message,
      name: "optionality",
      test(value) {
        return value === void 0 ? this.schema.spec.optional : true;
      }
    });
    return next2;
  }
  optional() {
    return this.optionality(true);
  }
  defined(message = mixed.defined) {
    return this.optionality(false, message);
  }
  nullable() {
    return this.nullability(true);
  }
  nonNullable(message = mixed.notNull) {
    return this.nullability(false, message);
  }
  required(message = mixed.required) {
    return this.clone().withMutation((next2) => next2.nonNullable(message).defined(message));
  }
  notRequired() {
    return this.clone().withMutation((next2) => next2.nullable().optional());
  }
  transform(fn) {
    let next2 = this.clone();
    next2.transforms.push(fn);
    return next2;
  }
  /**
   * Adds a test function to the schema's queue of tests.
   * tests can be exclusive or non-exclusive.
   *
   * - exclusive tests, will replace any existing tests of the same name.
   * - non-exclusive: can be stacked
   *
   * If a non-exclusive test is added to a schema with an exclusive test of the same name
   * the exclusive test is removed and further tests of the same name will be stacked.
   *
   * If an exclusive test is added to a schema with non-exclusive tests of the same name
   * the previous tests are removed and further tests of the same name will replace each other.
   */
  test(...args) {
    let opts;
    if (args.length === 1) {
      if (typeof args[0] === "function") {
        opts = {
          test: args[0]
        };
      } else {
        opts = args[0];
      }
    } else if (args.length === 2) {
      opts = {
        name: args[0],
        test: args[1]
      };
    } else {
      opts = {
        name: args[0],
        message: args[1],
        test: args[2]
      };
    }
    if (opts.message === void 0)
      opts.message = mixed.default;
    if (typeof opts.test !== "function")
      throw new TypeError("`test` is a required parameters");
    let next2 = this.clone();
    let validate = createValidation(opts);
    let isExclusive = opts.exclusive || opts.name && next2.exclusiveTests[opts.name] === true;
    if (opts.exclusive) {
      if (!opts.name)
        throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");
    }
    if (opts.name)
      next2.exclusiveTests[opts.name] = !!opts.exclusive;
    next2.tests = next2.tests.filter((fn) => {
      if (fn.OPTIONS.name === opts.name) {
        if (isExclusive)
          return false;
        if (fn.OPTIONS.test === validate.OPTIONS.test)
          return false;
      }
      return true;
    });
    next2.tests.push(validate);
    return next2;
  }
  when(keys, options) {
    if (!Array.isArray(keys) && typeof keys !== "string") {
      options = keys;
      keys = ".";
    }
    let next2 = this.clone();
    let deps = toArray(keys).map((key) => new Reference(key));
    deps.forEach((dep) => {
      if (dep.isSibling)
        next2.deps.push(dep.key);
    });
    next2.conditions.push(typeof options === "function" ? new Condition(deps, options) : Condition.fromOptions(deps, options));
    return next2;
  }
  typeError(message) {
    let next2 = this.clone();
    next2.internalTests.typeError = createValidation({
      message,
      name: "typeError",
      skipAbsent: true,
      test(value) {
        if (!this.schema._typeCheck(value))
          return this.createError({
            params: {
              type: this.schema.type
            }
          });
        return true;
      }
    });
    return next2;
  }
  oneOf(enums, message = mixed.oneOf) {
    let next2 = this.clone();
    enums.forEach((val) => {
      next2._whitelist.add(val);
      next2._blacklist.delete(val);
    });
    next2.internalTests.whiteList = createValidation({
      message,
      name: "oneOf",
      skipAbsent: true,
      test(value) {
        let valids = this.schema._whitelist;
        let resolved = valids.resolveAll(this.resolve);
        return resolved.includes(value) ? true : this.createError({
          params: {
            values: Array.from(valids).join(", "),
            resolved
          }
        });
      }
    });
    return next2;
  }
  notOneOf(enums, message = mixed.notOneOf) {
    let next2 = this.clone();
    enums.forEach((val) => {
      next2._blacklist.add(val);
      next2._whitelist.delete(val);
    });
    next2.internalTests.blacklist = createValidation({
      message,
      name: "notOneOf",
      test(value) {
        let invalids = this.schema._blacklist;
        let resolved = invalids.resolveAll(this.resolve);
        if (resolved.includes(value))
          return this.createError({
            params: {
              values: Array.from(invalids).join(", "),
              resolved
            }
          });
        return true;
      }
    });
    return next2;
  }
  strip(strip = true) {
    let next2 = this.clone();
    next2.spec.strip = strip;
    return next2;
  }
  /**
   * Return a serialized description of the schema including validations, flags, types etc.
   *
   * @param options Provide any needed context for resolving runtime schema alterations (lazy, when conditions, etc).
   */
  describe(options) {
    const next2 = (options ? this.resolve(options) : this).clone();
    const {
      label,
      meta,
      optional,
      nullable
    } = next2.spec;
    const description = {
      meta,
      label,
      optional,
      nullable,
      default: next2.getDefault(options),
      type: next2.type,
      oneOf: next2._whitelist.describe(),
      notOneOf: next2._blacklist.describe(),
      tests: next2.tests.map((fn) => ({
        name: fn.OPTIONS.name,
        params: fn.OPTIONS.params
      })).filter((n2, idx, list) => list.findIndex((c2) => c2.name === n2.name) === idx)
    };
    return description;
  }
}
Schema.prototype.__isYupSchema__ = true;
for (const method of ["validate", "validateSync"])
  Schema.prototype[`${method}At`] = function(path, value, options = {}) {
    const {
      parent,
      parentPath,
      schema
    } = getIn(this, path, value, options.context);
    return schema[method](parent && parent[parentPath], Object.assign({}, options, {
      parent,
      path
    }));
  };
for (const alias of ["equals", "is"])
  Schema.prototype[alias] = Schema.prototype.oneOf;
for (const alias of ["not", "nope"])
  Schema.prototype[alias] = Schema.prototype.notOneOf;
let rEmail = (
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
);
let rUrl = (
  // eslint-disable-next-line
  /^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i
);
let rUUID = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
let isTrimmed = (value) => isAbsent(value) || value === value.trim();
let objStringTag = {}.toString();
function create$6() {
  return new StringSchema();
}
class StringSchema extends Schema {
  constructor() {
    super({
      type: "string",
      check(value) {
        if (value instanceof String)
          value = value.valueOf();
        return typeof value === "string";
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value))
          return value;
        if (Array.isArray(value))
          return value;
        const strValue = value != null && value.toString ? value.toString() : value;
        if (strValue === objStringTag)
          return value;
        return strValue;
      });
    });
  }
  required(message) {
    return super.required(message).withMutation((schema) => schema.test({
      message: message || mixed.required,
      name: "required",
      skipAbsent: true,
      test: (value) => !!value.length
    }));
  }
  notRequired() {
    return super.notRequired().withMutation((schema) => {
      schema.tests = schema.tests.filter((t2) => t2.OPTIONS.name !== "required");
      return schema;
    });
  }
  length(length, message = string.length) {
    return this.test({
      message,
      name: "length",
      exclusive: true,
      params: {
        length
      },
      skipAbsent: true,
      test(value) {
        return value.length === this.resolve(length);
      }
    });
  }
  min(min, message = string.min) {
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value.length >= this.resolve(min);
      }
    });
  }
  max(max, message = string.max) {
    return this.test({
      name: "max",
      exclusive: true,
      message,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value.length <= this.resolve(max);
      }
    });
  }
  matches(regex, options) {
    let excludeEmptyString = false;
    let message;
    let name;
    if (options) {
      if (typeof options === "object") {
        ({
          excludeEmptyString = false,
          message,
          name
        } = options);
      } else {
        message = options;
      }
    }
    return this.test({
      name: name || "matches",
      message: message || string.matches,
      params: {
        regex
      },
      skipAbsent: true,
      test: (value) => value === "" && excludeEmptyString || value.search(regex) !== -1
    });
  }
  email(message = string.email) {
    return this.matches(rEmail, {
      name: "email",
      message,
      excludeEmptyString: true
    });
  }
  url(message = string.url) {
    return this.matches(rUrl, {
      name: "url",
      message,
      excludeEmptyString: true
    });
  }
  uuid(message = string.uuid) {
    return this.matches(rUUID, {
      name: "uuid",
      message,
      excludeEmptyString: false
    });
  }
  //-- transforms --
  ensure() {
    return this.default("").transform((val) => val === null ? "" : val);
  }
  trim(message = string.trim) {
    return this.transform((val) => val != null ? val.trim() : val).test({
      message,
      name: "trim",
      test: isTrimmed
    });
  }
  lowercase(message = string.lowercase) {
    return this.transform((value) => !isAbsent(value) ? value.toLowerCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      skipAbsent: true,
      test: (value) => isAbsent(value) || value === value.toLowerCase()
    });
  }
  uppercase(message = string.uppercase) {
    return this.transform((value) => !isAbsent(value) ? value.toUpperCase() : value).test({
      message,
      name: "string_case",
      exclusive: true,
      skipAbsent: true,
      test: (value) => isAbsent(value) || value === value.toUpperCase()
    });
  }
}
create$6.prototype = StringSchema.prototype;
const isoReg = /^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;
function toNumber(str, defaultValue = 0) {
  return Number(str) || defaultValue;
}
function parseIsoDate(date2) {
  const regexResult = isoReg.exec(date2);
  if (!regexResult)
    return Date.parse ? Date.parse(date2) : Number.NaN;
  const struct = {
    year: toNumber(regexResult[1]),
    month: toNumber(regexResult[2], 1) - 1,
    day: toNumber(regexResult[3], 1),
    hour: toNumber(regexResult[4]),
    minute: toNumber(regexResult[5]),
    second: toNumber(regexResult[6]),
    millisecond: regexResult[7] ? (
      // allow arbitrary sub-second precision beyond milliseconds
      toNumber(regexResult[7].substring(0, 3))
    ) : 0,
    z: regexResult[8] || void 0,
    plusMinus: regexResult[9] || void 0,
    hourOffset: toNumber(regexResult[10]),
    minuteOffset: toNumber(regexResult[11])
  };
  if (struct.z === void 0 && struct.plusMinus === void 0) {
    return new Date(struct.year, struct.month, struct.day, struct.hour, struct.minute, struct.second, struct.millisecond).valueOf();
  }
  let totalMinutesOffset = 0;
  if (struct.z !== "Z" && struct.plusMinus !== void 0) {
    totalMinutesOffset = struct.hourOffset * 60 + struct.minuteOffset;
    if (struct.plusMinus === "+")
      totalMinutesOffset = 0 - totalMinutesOffset;
  }
  return Date.UTC(struct.year, struct.month, struct.day, struct.hour, struct.minute + totalMinutesOffset, struct.second, struct.millisecond);
}
let invalidDate = /* @__PURE__ */ new Date("");
let isDate = (obj) => Object.prototype.toString.call(obj) === "[object Date]";
class DateSchema extends Schema {
  constructor() {
    super({
      type: "date",
      check(v2) {
        return isDate(v2) && !isNaN(v2.getTime());
      }
    });
    this.withMutation(() => {
      this.transform((value, _raw, ctx) => {
        if (!ctx.spec.coerce || ctx.isType(value) || value === null)
          return value;
        value = parseIsoDate(value);
        return !isNaN(value) ? new Date(value) : DateSchema.INVALID_DATE;
      });
    });
  }
  prepareParam(ref, name) {
    let param;
    if (!Reference.isRef(ref)) {
      let cast = this.cast(ref);
      if (!this._typeCheck(cast))
        throw new TypeError(`\`${name}\` must be a Date or a value that can be \`cast()\` to a Date`);
      param = cast;
    } else {
      param = ref;
    }
    return param;
  }
  min(min, message = date.min) {
    let limit = this.prepareParam(min, "min");
    return this.test({
      message,
      name: "min",
      exclusive: true,
      params: {
        min
      },
      skipAbsent: true,
      test(value) {
        return value >= this.resolve(limit);
      }
    });
  }
  max(max, message = date.max) {
    let limit = this.prepareParam(max, "max");
    return this.test({
      message,
      name: "max",
      exclusive: true,
      params: {
        max
      },
      skipAbsent: true,
      test(value) {
        return value <= this.resolve(limit);
      }
    });
  }
}
DateSchema.INVALID_DATE = invalidDate;
DateSchema.prototype;
function sortFields(fields, excludedEdges = []) {
  let edges = [];
  let nodes = /* @__PURE__ */ new Set();
  let excludes = new Set(excludedEdges.map(([a2, b2]) => `${a2}-${b2}`));
  function addNode(depPath, key) {
    let node = propertyExpr.split(depPath)[0];
    nodes.add(node);
    if (!excludes.has(`${key}-${node}`))
      edges.push([key, node]);
  }
  for (const key of Object.keys(fields)) {
    let value = fields[key];
    nodes.add(key);
    if (Reference.isRef(value) && value.isSibling)
      addNode(value.path, key);
    else if (isSchema(value) && "deps" in value)
      value.deps.forEach((path) => addNode(path, key));
  }
  return toposort$1.array(Array.from(nodes), edges).reverse();
}
function findIndex(arr, err) {
  let idx = Infinity;
  arr.some((key, ii2) => {
    var _err$path;
    if ((_err$path = err.path) != null && _err$path.includes(key)) {
      idx = ii2;
      return true;
    }
  });
  return idx;
}
function sortByKeyOrder(keys) {
  return (a2, b2) => {
    return findIndex(keys, a2) - findIndex(keys, b2);
  };
}
const parseJson = (value, _2, ctx) => {
  if (typeof value !== "string") {
    return value;
  }
  let parsed = value;
  try {
    parsed = JSON.parse(value);
  } catch (err) {
  }
  return ctx.isType(parsed) ? parsed : value;
};
function deepPartial(schema) {
  if ("fields" in schema) {
    const partial = {};
    for (const [key, fieldSchema] of Object.entries(schema.fields)) {
      partial[key] = deepPartial(fieldSchema);
    }
    return schema.setFields(partial);
  }
  if (schema.type === "array") {
    const nextArray = schema.optional();
    if (nextArray.innerType)
      nextArray.innerType = deepPartial(nextArray.innerType);
    return nextArray;
  }
  if (schema.type === "tuple") {
    return schema.optional().clone({
      types: schema.spec.types.map(deepPartial)
    });
  }
  if ("optional" in schema) {
    return schema.optional();
  }
  return schema;
}
const deepHas = (obj, p2) => {
  const path = [...propertyExpr.normalizePath(p2)];
  if (path.length === 1)
    return path[0] in obj;
  let last = path.pop();
  let parent = propertyExpr.getter(propertyExpr.join(path), true)(obj);
  return !!(parent && last in parent);
};
let isObject$1 = (obj) => Object.prototype.toString.call(obj) === "[object Object]";
function unknown(ctx, value) {
  let known = Object.keys(ctx.fields);
  return Object.keys(value).filter((key) => known.indexOf(key) === -1);
}
const defaultSort = sortByKeyOrder([]);
function create$3(spec) {
  return new ObjectSchema(spec);
}
class ObjectSchema extends Schema {
  constructor(spec) {
    super({
      type: "object",
      check(value) {
        return isObject$1(value) || typeof value === "function";
      }
    });
    this.fields = /* @__PURE__ */ Object.create(null);
    this._sortErrors = defaultSort;
    this._nodes = [];
    this._excludedEdges = [];
    this.withMutation(() => {
      if (spec) {
        this.shape(spec);
      }
    });
  }
  _cast(_value, options = {}) {
    var _options$stripUnknown;
    let value = super._cast(_value, options);
    if (value === void 0)
      return this.getDefault(options);
    if (!this._typeCheck(value))
      return value;
    let fields = this.fields;
    let strip = (_options$stripUnknown = options.stripUnknown) != null ? _options$stripUnknown : this.spec.noUnknown;
    let props = [].concat(this._nodes, Object.keys(value).filter((v2) => !this._nodes.includes(v2)));
    let intermediateValue = {};
    let innerOptions = Object.assign({}, options, {
      parent: intermediateValue,
      __validating: options.__validating || false
    });
    let isChanged = false;
    for (const prop of props) {
      let field = fields[prop];
      let exists = prop in value;
      if (field) {
        let fieldValue;
        let inputValue = value[prop];
        innerOptions.path = (options.path ? `${options.path}.` : "") + prop;
        field = field.resolve({
          value: inputValue,
          context: options.context,
          parent: intermediateValue
        });
        let fieldSpec = field instanceof Schema ? field.spec : void 0;
        let strict = fieldSpec == null ? void 0 : fieldSpec.strict;
        if (fieldSpec != null && fieldSpec.strip) {
          isChanged = isChanged || prop in value;
          continue;
        }
        fieldValue = !options.__validating || !strict ? (
          // TODO: use _cast, this is double resolving
          field.cast(value[prop], innerOptions)
        ) : value[prop];
        if (fieldValue !== void 0) {
          intermediateValue[prop] = fieldValue;
        }
      } else if (exists && !strip) {
        intermediateValue[prop] = value[prop];
      }
      if (exists !== prop in intermediateValue || intermediateValue[prop] !== value[prop]) {
        isChanged = true;
      }
    }
    return isChanged ? intermediateValue : value;
  }
  _validate(_value, options = {}, panic, next2) {
    let {
      from = [],
      originalValue = _value,
      recursive = this.spec.recursive
    } = options;
    options.from = [{
      schema: this,
      value: originalValue
    }, ...from];
    options.__validating = true;
    options.originalValue = originalValue;
    super._validate(_value, options, panic, (objectErrors, value) => {
      if (!recursive || !isObject$1(value)) {
        next2(objectErrors, value);
        return;
      }
      originalValue = originalValue || value;
      let tests = [];
      for (let key of this._nodes) {
        let field = this.fields[key];
        if (!field || Reference.isRef(field)) {
          continue;
        }
        tests.push(field.asNestedTest({
          options,
          key,
          parent: value,
          parentPath: options.path,
          originalParent: originalValue
        }));
      }
      this.runTests({
        tests,
        value,
        originalValue,
        options
      }, panic, (fieldErrors) => {
        next2(fieldErrors.sort(this._sortErrors).concat(objectErrors), value);
      });
    });
  }
  clone(spec) {
    const next2 = super.clone(spec);
    next2.fields = Object.assign({}, this.fields);
    next2._nodes = this._nodes;
    next2._excludedEdges = this._excludedEdges;
    next2._sortErrors = this._sortErrors;
    return next2;
  }
  concat(schema) {
    let next2 = super.concat(schema);
    let nextFields = next2.fields;
    for (let [field, schemaOrRef] of Object.entries(this.fields)) {
      const target = nextFields[field];
      nextFields[field] = target === void 0 ? schemaOrRef : target;
    }
    return next2.withMutation((s2) => (
      // XXX: excludes here is wrong
      s2.setFields(nextFields, [...this._excludedEdges, ...schema._excludedEdges])
    ));
  }
  _getDefault(options) {
    if ("default" in this.spec) {
      return super._getDefault(options);
    }
    if (!this._nodes.length) {
      return void 0;
    }
    let dft = {};
    this._nodes.forEach((key) => {
      var _innerOptions;
      const field = this.fields[key];
      let innerOptions = options;
      if ((_innerOptions = innerOptions) != null && _innerOptions.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      dft[key] = field && "getDefault" in field ? field.getDefault(innerOptions) : void 0;
    });
    return dft;
  }
  setFields(shape, excludedEdges) {
    let next2 = this.clone();
    next2.fields = shape;
    next2._nodes = sortFields(shape, excludedEdges);
    next2._sortErrors = sortByKeyOrder(Object.keys(shape));
    if (excludedEdges)
      next2._excludedEdges = excludedEdges;
    return next2;
  }
  shape(additions, excludes = []) {
    return this.clone().withMutation((next2) => {
      let edges = next2._excludedEdges;
      if (excludes.length) {
        if (!Array.isArray(excludes[0]))
          excludes = [excludes];
        edges = [...next2._excludedEdges, ...excludes];
      }
      return next2.setFields(Object.assign(next2.fields, additions), edges);
    });
  }
  partial() {
    const partial = {};
    for (const [key, schema] of Object.entries(this.fields)) {
      partial[key] = "optional" in schema && schema.optional instanceof Function ? schema.optional() : schema;
    }
    return this.setFields(partial);
  }
  deepPartial() {
    const next2 = deepPartial(this);
    return next2;
  }
  pick(keys) {
    const picked = {};
    for (const key of keys) {
      if (this.fields[key])
        picked[key] = this.fields[key];
    }
    return this.setFields(picked);
  }
  omit(keys) {
    const fields = Object.assign({}, this.fields);
    for (const key of keys) {
      delete fields[key];
    }
    return this.setFields(fields);
  }
  from(from, to, alias) {
    let fromGetter = propertyExpr.getter(from, true);
    return this.transform((obj) => {
      if (!obj)
        return obj;
      let newObj = obj;
      if (deepHas(obj, from)) {
        newObj = Object.assign({}, obj);
        if (!alias)
          delete newObj[from];
        newObj[to] = fromGetter(obj);
      }
      return newObj;
    });
  }
  /** Parse an input JSON string to an object */
  json() {
    return this.transform(parseJson);
  }
  noUnknown(noAllow = true, message = object.noUnknown) {
    if (typeof noAllow !== "boolean") {
      message = noAllow;
      noAllow = true;
    }
    let next2 = this.test({
      name: "noUnknown",
      exclusive: true,
      message,
      test(value) {
        if (value == null)
          return true;
        const unknownKeys = unknown(this.schema, value);
        return !noAllow || unknownKeys.length === 0 || this.createError({
          params: {
            unknown: unknownKeys.join(", ")
          }
        });
      }
    });
    next2.spec.noUnknown = noAllow;
    return next2;
  }
  unknown(allow = true, message = object.noUnknown) {
    return this.noUnknown(!allow, message);
  }
  transformKeys(fn) {
    return this.transform((obj) => {
      if (!obj)
        return obj;
      const result = {};
      for (const key of Object.keys(obj))
        result[fn(key)] = obj[key];
      return result;
    });
  }
  camelCase() {
    return this.transformKeys(tinyCase.camelCase);
  }
  snakeCase() {
    return this.transformKeys(tinyCase.snakeCase);
  }
  constantCase() {
    return this.transformKeys((key) => tinyCase.snakeCase(key).toUpperCase());
  }
  describe(options) {
    let base = super.describe(options);
    base.fields = {};
    for (const [key, value] of Object.entries(this.fields)) {
      var _innerOptions2;
      let innerOptions = options;
      if ((_innerOptions2 = innerOptions) != null && _innerOptions2.value) {
        innerOptions = Object.assign({}, innerOptions, {
          parent: innerOptions.value,
          value: innerOptions.value[key]
        });
      }
      base.fields[key] = value.describe(innerOptions);
    }
    return base;
  }
}
create$3.prototype = ObjectSchema.prototype;
var isCheckBoxInput = (element) => element.type === "checkbox";
var isDateObject = (value) => value instanceof Date;
var isNullOrUndefined = (value) => value == null;
const isObjectType = (value) => typeof value === "object";
var isObject = (value) => !isNullOrUndefined(value) && !Array.isArray(value) && isObjectType(value) && !isDateObject(value);
var getEventValue = (event) => isObject(event) && event.target ? isCheckBoxInput(event.target) ? event.target.checked : event.target.value : event;
var getNodeParentName = (name) => name.substring(0, name.search(/\.\d+(\.|$)/)) || name;
var isNameInFieldArray = (names, name) => names.has(getNodeParentName(name));
var isPlainObject = (tempObject) => {
  const prototypeCopy = tempObject.constructor && tempObject.constructor.prototype;
  return isObject(prototypeCopy) && prototypeCopy.hasOwnProperty("isPrototypeOf");
};
var isWeb = typeof window !== "undefined" && typeof window.HTMLElement !== "undefined" && typeof document !== "undefined";
function cloneObject(data) {
  let copy;
  const isArray = Array.isArray(data);
  if (data instanceof Date) {
    copy = new Date(data);
  } else if (data instanceof Set) {
    copy = new Set(data);
  } else if (!(isWeb && (data instanceof Blob || data instanceof FileList)) && (isArray || isObject(data))) {
    copy = isArray ? [] : {};
    if (!isArray && !isPlainObject(data)) {
      copy = data;
    } else {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          copy[key] = cloneObject(data[key]);
        }
      }
    }
  } else {
    return data;
  }
  return copy;
}
var compact = (value) => Array.isArray(value) ? value.filter(Boolean) : [];
var isUndefined = (val) => val === void 0;
var get = (obj, path, defaultValue) => {
  if (!path || !isObject(obj)) {
    return defaultValue;
  }
  const result = compact(path.split(/[,[\].]+?/)).reduce((result2, key) => isNullOrUndefined(result2) ? result2 : result2[key], obj);
  return isUndefined(result) || result === obj ? isUndefined(obj[path]) ? defaultValue : obj[path] : result;
};
var isBoolean = (value) => typeof value === "boolean";
const EVENTS = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
};
const VALIDATION_MODE = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
};
const INPUT_VALIDATION_RULES = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
};
React$6.createContext(null);
var getProxyFormState = (formState, control, localProxyFormState, isRoot = true) => {
  const result = {
    defaultValues: control._defaultValues
  };
  for (const key in formState) {
    Object.defineProperty(result, key, {
      get: () => {
        const _key = key;
        if (control._proxyFormState[_key] !== VALIDATION_MODE.all) {
          control._proxyFormState[_key] = !isRoot || VALIDATION_MODE.all;
        }
        localProxyFormState && (localProxyFormState[_key] = true);
        return formState[_key];
      }
    });
  }
  return result;
};
var isEmptyObject = (value) => isObject(value) && !Object.keys(value).length;
var shouldRenderFormState = (formStateData, _proxyFormState, updateFormState, isRoot) => {
  updateFormState(formStateData);
  const { name, ...formState } = formStateData;
  return isEmptyObject(formState) || Object.keys(formState).length >= Object.keys(_proxyFormState).length || Object.keys(formState).find((key) => _proxyFormState[key] === (!isRoot || VALIDATION_MODE.all));
};
var convertToArrayPayload = (value) => Array.isArray(value) ? value : [value];
function useSubscribe(props) {
  const _props = React$6.useRef(props);
  _props.current = props;
  React$6.useEffect(() => {
    const subscription = !props.disabled && _props.current.subject && _props.current.subject.subscribe({
      next: _props.current.next
    });
    return () => {
      subscription && subscription.unsubscribe();
    };
  }, [props.disabled]);
}
var isString = (value) => typeof value === "string";
var generateWatchOutput = (names, _names, formValues, isGlobal, defaultValue) => {
  if (isString(names)) {
    isGlobal && _names.watch.add(names);
    return get(formValues, names, defaultValue);
  }
  if (Array.isArray(names)) {
    return names.map((fieldName) => (isGlobal && _names.watch.add(fieldName), get(formValues, fieldName)));
  }
  isGlobal && (_names.watchAll = true);
  return formValues;
};
var isKey = (value) => /^\w*$/.test(value);
var stringToPath = (input) => compact(input.replace(/["|']|\]/g, "").split(/\.|\[/));
function set(object2, path, value) {
  let index = -1;
  const tempPath = isKey(path) ? [path] : stringToPath(path);
  const length = tempPath.length;
  const lastIndex = length - 1;
  while (++index < length) {
    const key = tempPath[index];
    let newValue = value;
    if (index !== lastIndex) {
      const objValue = object2[key];
      newValue = isObject(objValue) || Array.isArray(objValue) ? objValue : !isNaN(+tempPath[index + 1]) ? [] : {};
    }
    object2[key] = newValue;
    object2 = object2[key];
  }
  return object2;
}
var appendErrors = (name, validateAllFieldCriteria, errors, type, message) => validateAllFieldCriteria ? {
  ...errors[name],
  types: {
    ...errors[name] && errors[name].types ? errors[name].types : {},
    [type]: message || true
  }
} : {};
const focusFieldBy = (fields, callback, fieldsNames) => {
  for (const key of fieldsNames || Object.keys(fields)) {
    const field = get(fields, key);
    if (field) {
      const { _f, ...currentField } = field;
      if (_f && callback(_f.name)) {
        if (_f.ref.focus) {
          _f.ref.focus();
          break;
        } else if (_f.refs && _f.refs[0].focus) {
          _f.refs[0].focus();
          break;
        }
      } else if (isObject(currentField)) {
        focusFieldBy(currentField, callback);
      }
    }
  }
};
var getValidationModes = (mode) => ({
  isOnSubmit: !mode || mode === VALIDATION_MODE.onSubmit,
  isOnBlur: mode === VALIDATION_MODE.onBlur,
  isOnChange: mode === VALIDATION_MODE.onChange,
  isOnAll: mode === VALIDATION_MODE.all,
  isOnTouch: mode === VALIDATION_MODE.onTouched
});
var isWatched = (name, _names, isBlurEvent) => !isBlurEvent && (_names.watchAll || _names.watch.has(name) || [..._names.watch].some((watchName) => name.startsWith(watchName) && /^\.\w+/.test(name.slice(watchName.length))));
var updateFieldArrayRootError = (errors, error, name) => {
  const fieldArrayErrors = compact(get(errors, name));
  set(fieldArrayErrors, "root", error[name]);
  set(errors, name, fieldArrayErrors);
  return errors;
};
var isFileInput = (element) => element.type === "file";
var isFunction = (value) => typeof value === "function";
var isHTMLElement = (value) => {
  if (!isWeb) {
    return false;
  }
  const owner = value ? value.ownerDocument : 0;
  return value instanceof (owner && owner.defaultView ? owner.defaultView.HTMLElement : HTMLElement);
};
var isMessage = (value) => isString(value);
var isRadioInput = (element) => element.type === "radio";
var isRegex = (value) => value instanceof RegExp;
const defaultResult = {
  value: false,
  isValid: false
};
const validResult = { value: true, isValid: true };
var getCheckboxValue = (options) => {
  if (Array.isArray(options)) {
    if (options.length > 1) {
      const values = options.filter((option) => option && option.checked && !option.disabled).map((option) => option.value);
      return { value: values, isValid: !!values.length };
    }
    return options[0].checked && !options[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      options[0].attributes && !isUndefined(options[0].attributes.value) ? isUndefined(options[0].value) || options[0].value === "" ? validResult : { value: options[0].value, isValid: true } : validResult
    ) : defaultResult;
  }
  return defaultResult;
};
const defaultReturn = {
  isValid: false,
  value: null
};
var getRadioValue = (options) => Array.isArray(options) ? options.reduce((previous2, option) => option && option.checked && !option.disabled ? {
  isValid: true,
  value: option.value
} : previous2, defaultReturn) : defaultReturn;
function getValidateError(result, ref, type = "validate") {
  if (isMessage(result) || Array.isArray(result) && result.every(isMessage) || isBoolean(result) && !result) {
    return {
      type,
      message: isMessage(result) ? result : "",
      ref
    };
  }
}
var getValueAndMessage = (validationData) => isObject(validationData) && !isRegex(validationData) ? validationData : {
  value: validationData,
  message: ""
};
var validateField = async (field, formValues, validateAllFieldCriteria, shouldUseNativeValidation, isFieldArray) => {
  const { ref, refs, required, maxLength, minLength, min, max, pattern, validate, name, valueAsNumber, mount, disabled } = field._f;
  const inputValue = get(formValues, name);
  if (!mount || disabled) {
    return {};
  }
  const inputRef = refs ? refs[0] : ref;
  const setCustomValidity = (message) => {
    if (shouldUseNativeValidation && inputRef.reportValidity) {
      inputRef.setCustomValidity(isBoolean(message) ? "" : message || "");
      inputRef.reportValidity();
    }
  };
  const error = {};
  const isRadio = isRadioInput(ref);
  const isCheckBox = isCheckBoxInput(ref);
  const isRadioOrCheckbox2 = isRadio || isCheckBox;
  const isEmpty = (valueAsNumber || isFileInput(ref)) && isUndefined(ref.value) && isUndefined(inputValue) || isHTMLElement(ref) && ref.value === "" || inputValue === "" || Array.isArray(inputValue) && !inputValue.length;
  const appendErrorsCurry = appendErrors.bind(null, name, validateAllFieldCriteria, error);
  const getMinMaxMessage = (exceedMax, maxLengthMessage, minLengthMessage, maxType = INPUT_VALIDATION_RULES.maxLength, minType = INPUT_VALIDATION_RULES.minLength) => {
    const message = exceedMax ? maxLengthMessage : minLengthMessage;
    error[name] = {
      type: exceedMax ? maxType : minType,
      message,
      ref,
      ...appendErrorsCurry(exceedMax ? maxType : minType, message)
    };
  };
  if (isFieldArray ? !Array.isArray(inputValue) || !inputValue.length : required && (!isRadioOrCheckbox2 && (isEmpty || isNullOrUndefined(inputValue)) || isBoolean(inputValue) && !inputValue || isCheckBox && !getCheckboxValue(refs).isValid || isRadio && !getRadioValue(refs).isValid)) {
    const { value, message } = isMessage(required) ? { value: !!required, message: required } : getValueAndMessage(required);
    if (value) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.required,
        message,
        ref: inputRef,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.required, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (!isEmpty && (!isNullOrUndefined(min) || !isNullOrUndefined(max))) {
    let exceedMax;
    let exceedMin;
    const maxOutput = getValueAndMessage(max);
    const minOutput = getValueAndMessage(min);
    if (!isNullOrUndefined(inputValue) && !isNaN(inputValue)) {
      const valueNumber = ref.valueAsNumber || (inputValue ? +inputValue : inputValue);
      if (!isNullOrUndefined(maxOutput.value)) {
        exceedMax = valueNumber > maxOutput.value;
      }
      if (!isNullOrUndefined(minOutput.value)) {
        exceedMin = valueNumber < minOutput.value;
      }
    } else {
      const valueDate = ref.valueAsDate || new Date(inputValue);
      const convertTimeToDate = (time) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + time);
      const isTime = ref.type == "time";
      const isWeek = ref.type == "week";
      if (isString(maxOutput.value) && inputValue) {
        exceedMax = isTime ? convertTimeToDate(inputValue) > convertTimeToDate(maxOutput.value) : isWeek ? inputValue > maxOutput.value : valueDate > new Date(maxOutput.value);
      }
      if (isString(minOutput.value) && inputValue) {
        exceedMin = isTime ? convertTimeToDate(inputValue) < convertTimeToDate(minOutput.value) : isWeek ? inputValue < minOutput.value : valueDate < new Date(minOutput.value);
      }
    }
    if (exceedMax || exceedMin) {
      getMinMaxMessage(!!exceedMax, maxOutput.message, minOutput.message, INPUT_VALIDATION_RULES.max, INPUT_VALIDATION_RULES.min);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if ((maxLength || minLength) && !isEmpty && (isString(inputValue) || isFieldArray && Array.isArray(inputValue))) {
    const maxLengthOutput = getValueAndMessage(maxLength);
    const minLengthOutput = getValueAndMessage(minLength);
    const exceedMax = !isNullOrUndefined(maxLengthOutput.value) && inputValue.length > +maxLengthOutput.value;
    const exceedMin = !isNullOrUndefined(minLengthOutput.value) && inputValue.length < +minLengthOutput.value;
    if (exceedMax || exceedMin) {
      getMinMaxMessage(exceedMax, maxLengthOutput.message, minLengthOutput.message);
      if (!validateAllFieldCriteria) {
        setCustomValidity(error[name].message);
        return error;
      }
    }
  }
  if (pattern && !isEmpty && isString(inputValue)) {
    const { value: patternValue, message } = getValueAndMessage(pattern);
    if (isRegex(patternValue) && !inputValue.match(patternValue)) {
      error[name] = {
        type: INPUT_VALIDATION_RULES.pattern,
        message,
        ref,
        ...appendErrorsCurry(INPUT_VALIDATION_RULES.pattern, message)
      };
      if (!validateAllFieldCriteria) {
        setCustomValidity(message);
        return error;
      }
    }
  }
  if (validate) {
    if (isFunction(validate)) {
      const result = await validate(inputValue, formValues);
      const validateError = getValidateError(result, inputRef);
      if (validateError) {
        error[name] = {
          ...validateError,
          ...appendErrorsCurry(INPUT_VALIDATION_RULES.validate, validateError.message)
        };
        if (!validateAllFieldCriteria) {
          setCustomValidity(validateError.message);
          return error;
        }
      }
    } else if (isObject(validate)) {
      let validationResult = {};
      for (const key in validate) {
        if (!isEmptyObject(validationResult) && !validateAllFieldCriteria) {
          break;
        }
        const validateError = getValidateError(await validate[key](inputValue, formValues), inputRef, key);
        if (validateError) {
          validationResult = {
            ...validateError,
            ...appendErrorsCurry(key, validateError.message)
          };
          setCustomValidity(validateError.message);
          if (validateAllFieldCriteria) {
            error[name] = validationResult;
          }
        }
      }
      if (!isEmptyObject(validationResult)) {
        error[name] = {
          ref: inputRef,
          ...validationResult
        };
        if (!validateAllFieldCriteria) {
          return error;
        }
      }
    }
  }
  setCustomValidity(true);
  return error;
};
function baseGet(object2, updatePath) {
  const length = updatePath.slice(0, -1).length;
  let index = 0;
  while (index < length) {
    object2 = isUndefined(object2) ? index++ : object2[updatePath[index++]];
  }
  return object2;
}
function isEmptyArray(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && !isUndefined(obj[key])) {
      return false;
    }
  }
  return true;
}
function unset(object2, path) {
  const paths = Array.isArray(path) ? path : isKey(path) ? [path] : stringToPath(path);
  const childObject = paths.length === 1 ? object2 : baseGet(object2, paths);
  const index = paths.length - 1;
  const key = paths[index];
  if (childObject) {
    delete childObject[key];
  }
  if (index !== 0 && (isObject(childObject) && isEmptyObject(childObject) || Array.isArray(childObject) && isEmptyArray(childObject))) {
    unset(object2, paths.slice(0, -1));
  }
  return object2;
}
function createSubject() {
  let _observers = [];
  const next2 = (value) => {
    for (const observer of _observers) {
      observer.next && observer.next(value);
    }
  };
  const subscribe = (observer) => {
    _observers.push(observer);
    return {
      unsubscribe: () => {
        _observers = _observers.filter((o3) => o3 !== observer);
      }
    };
  };
  const unsubscribe = () => {
    _observers = [];
  };
  return {
    get observers() {
      return _observers;
    },
    next: next2,
    subscribe,
    unsubscribe
  };
}
var isPrimitive = (value) => isNullOrUndefined(value) || !isObjectType(value);
function deepEqual(object1, object2) {
  if (isPrimitive(object1) || isPrimitive(object2)) {
    return object1 === object2;
  }
  if (isDateObject(object1) && isDateObject(object2)) {
    return object1.getTime() === object2.getTime();
  }
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    if (!keys2.includes(key)) {
      return false;
    }
    if (key !== "ref") {
      const val2 = object2[key];
      if (isDateObject(val1) && isDateObject(val2) || isObject(val1) && isObject(val2) || Array.isArray(val1) && Array.isArray(val2) ? !deepEqual(val1, val2) : val1 !== val2) {
        return false;
      }
    }
  }
  return true;
}
var isMultipleSelect = (element) => element.type === `select-multiple`;
var isRadioOrCheckbox = (ref) => isRadioInput(ref) || isCheckBoxInput(ref);
var live = (ref) => isHTMLElement(ref) && ref.isConnected;
var objectHasFunction = (data) => {
  for (const key in data) {
    if (isFunction(data[key])) {
      return true;
    }
  }
  return false;
};
function markFieldsDirty(data, fields = {}) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        fields[key] = Array.isArray(data[key]) ? [] : {};
        markFieldsDirty(data[key], fields[key]);
      } else if (!isNullOrUndefined(data[key])) {
        fields[key] = true;
      }
    }
  }
  return fields;
}
function getDirtyFieldsFromDefaultValues(data, formValues, dirtyFieldsFromValues) {
  const isParentNodeArray = Array.isArray(data);
  if (isObject(data) || isParentNodeArray) {
    for (const key in data) {
      if (Array.isArray(data[key]) || isObject(data[key]) && !objectHasFunction(data[key])) {
        if (isUndefined(formValues) || isPrimitive(dirtyFieldsFromValues[key])) {
          dirtyFieldsFromValues[key] = Array.isArray(data[key]) ? markFieldsDirty(data[key], []) : { ...markFieldsDirty(data[key]) };
        } else {
          getDirtyFieldsFromDefaultValues(data[key], isNullOrUndefined(formValues) ? {} : formValues[key], dirtyFieldsFromValues[key]);
        }
      } else {
        dirtyFieldsFromValues[key] = !deepEqual(data[key], formValues[key]);
      }
    }
  }
  return dirtyFieldsFromValues;
}
var getDirtyFields = (defaultValues, formValues) => getDirtyFieldsFromDefaultValues(defaultValues, formValues, markFieldsDirty(formValues));
var getFieldValueAs = (value, { valueAsNumber, valueAsDate, setValueAs }) => isUndefined(value) ? value : valueAsNumber ? value === "" ? NaN : value ? +value : value : valueAsDate && isString(value) ? new Date(value) : setValueAs ? setValueAs(value) : value;
function getFieldValue(_f) {
  const ref = _f.ref;
  if (_f.refs ? _f.refs.every((ref2) => ref2.disabled) : ref.disabled) {
    return;
  }
  if (isFileInput(ref)) {
    return ref.files;
  }
  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }
  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }
  if (isCheckBoxInput(ref)) {
    return getCheckboxValue(_f.refs).value;
  }
  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
var getResolverOptions = (fieldsNames, _fields, criteriaMode, shouldUseNativeValidation) => {
  const fields = {};
  for (const name of fieldsNames) {
    const field = get(_fields, name);
    field && set(fields, name, field._f);
  }
  return {
    criteriaMode,
    names: [...fieldsNames],
    fields,
    shouldUseNativeValidation
  };
};
var getRuleValue = (rule) => isUndefined(rule) ? rule : isRegex(rule) ? rule.source : isObject(rule) ? isRegex(rule.value) ? rule.value.source : rule.value : rule;
var hasValidation = (options) => options.mount && (options.required || options.min || options.max || options.maxLength || options.minLength || options.pattern || options.validate);
function schemaErrorLookup(errors, _fields, name) {
  const error = get(errors, name);
  if (error || isKey(name)) {
    return {
      error,
      name
    };
  }
  const names = name.split(".");
  while (names.length) {
    const fieldName = names.join(".");
    const field = get(_fields, fieldName);
    const foundError = get(errors, fieldName);
    if (field && !Array.isArray(field) && name !== fieldName) {
      return { name };
    }
    if (foundError && foundError.type) {
      return {
        name: fieldName,
        error: foundError
      };
    }
    names.pop();
  }
  return {
    name
  };
}
var skipValidation = (isBlurEvent, isTouched, isSubmitted, reValidateMode, mode) => {
  if (mode.isOnAll) {
    return false;
  } else if (!isSubmitted && mode.isOnTouch) {
    return !(isTouched || isBlurEvent);
  } else if (isSubmitted ? reValidateMode.isOnBlur : mode.isOnBlur) {
    return !isBlurEvent;
  } else if (isSubmitted ? reValidateMode.isOnChange : mode.isOnChange) {
    return isBlurEvent;
  }
  return true;
};
var unsetEmptyArray = (ref, name) => !compact(get(ref, name)).length && unset(ref, name);
const defaultOptions = {
  mode: VALIDATION_MODE.onSubmit,
  reValidateMode: VALIDATION_MODE.onChange,
  shouldFocusError: true
};
function createFormControl(props = {}, flushRootRender) {
  let _options = {
    ...defaultOptions,
    ...props
  };
  let _formState = {
    submitCount: 0,
    isDirty: false,
    isLoading: isFunction(_options.defaultValues),
    isValidating: false,
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    touchedFields: {},
    dirtyFields: {},
    errors: {}
  };
  let _fields = {};
  let _defaultValues = isObject(_options.defaultValues) || isObject(_options.values) ? cloneObject(_options.defaultValues || _options.values) || {} : {};
  let _formValues = _options.shouldUnregister ? {} : cloneObject(_defaultValues);
  let _state = {
    action: false,
    mount: false,
    watch: false
  };
  let _names = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  };
  let delayErrorCallback;
  let timer = 0;
  const _proxyFormState = {
    isDirty: false,
    dirtyFields: false,
    touchedFields: false,
    isValidating: false,
    isValid: false,
    errors: false
  };
  const _subjects = {
    values: createSubject(),
    array: createSubject(),
    state: createSubject()
  };
  const shouldCaptureDirtyFields = props.resetOptions && props.resetOptions.keepDirtyValues;
  const validationModeBeforeSubmit = getValidationModes(_options.mode);
  const validationModeAfterSubmit = getValidationModes(_options.reValidateMode);
  const shouldDisplayAllAssociatedErrors = _options.criteriaMode === VALIDATION_MODE.all;
  const debounce = (callback) => (wait) => {
    clearTimeout(timer);
    timer = setTimeout(callback, wait);
  };
  const _updateValid = async (shouldUpdateValid) => {
    if (_proxyFormState.isValid || shouldUpdateValid) {
      const isValid = _options.resolver ? isEmptyObject((await _executeSchema()).errors) : await executeBuiltInValidation(_fields, true);
      if (isValid !== _formState.isValid) {
        _subjects.state.next({
          isValid
        });
      }
    }
  };
  const _updateIsValidating = (value) => _proxyFormState.isValidating && _subjects.state.next({
    isValidating: value
  });
  const _updateFieldArray = (name, values = [], method, args, shouldSetValues = true, shouldUpdateFieldsAndState = true) => {
    if (args && method) {
      _state.action = true;
      if (shouldUpdateFieldsAndState && Array.isArray(get(_fields, name))) {
        const fieldValues = method(get(_fields, name), args.argA, args.argB);
        shouldSetValues && set(_fields, name, fieldValues);
      }
      if (shouldUpdateFieldsAndState && Array.isArray(get(_formState.errors, name))) {
        const errors = method(get(_formState.errors, name), args.argA, args.argB);
        shouldSetValues && set(_formState.errors, name, errors);
        unsetEmptyArray(_formState.errors, name);
      }
      if (_proxyFormState.touchedFields && shouldUpdateFieldsAndState && Array.isArray(get(_formState.touchedFields, name))) {
        const touchedFields = method(get(_formState.touchedFields, name), args.argA, args.argB);
        shouldSetValues && set(_formState.touchedFields, name, touchedFields);
      }
      if (_proxyFormState.dirtyFields) {
        _formState.dirtyFields = getDirtyFields(_defaultValues, _formValues);
      }
      _subjects.state.next({
        name,
        isDirty: _getDirty(name, values),
        dirtyFields: _formState.dirtyFields,
        errors: _formState.errors,
        isValid: _formState.isValid
      });
    } else {
      set(_formValues, name, values);
    }
  };
  const updateErrors = (name, error) => {
    set(_formState.errors, name, error);
    _subjects.state.next({
      errors: _formState.errors
    });
  };
  const updateValidAndValue = (name, shouldSkipSetValueAs, value, ref) => {
    const field = get(_fields, name);
    if (field) {
      const defaultValue = get(_formValues, name, isUndefined(value) ? get(_defaultValues, name) : value);
      isUndefined(defaultValue) || ref && ref.defaultChecked || shouldSkipSetValueAs ? set(_formValues, name, shouldSkipSetValueAs ? defaultValue : getFieldValue(field._f)) : setFieldValue(name, defaultValue);
      _state.mount && _updateValid();
    }
  };
  const updateTouchAndDirty = (name, fieldValue, isBlurEvent, shouldDirty, shouldRender) => {
    let shouldUpdateField = false;
    let isPreviousDirty = false;
    const output = {
      name
    };
    if (!isBlurEvent || shouldDirty) {
      if (_proxyFormState.isDirty) {
        isPreviousDirty = _formState.isDirty;
        _formState.isDirty = output.isDirty = _getDirty();
        shouldUpdateField = isPreviousDirty !== output.isDirty;
      }
      const isCurrentFieldPristine = deepEqual(get(_defaultValues, name), fieldValue);
      isPreviousDirty = get(_formState.dirtyFields, name);
      isCurrentFieldPristine ? unset(_formState.dirtyFields, name) : set(_formState.dirtyFields, name, true);
      output.dirtyFields = _formState.dirtyFields;
      shouldUpdateField = shouldUpdateField || _proxyFormState.dirtyFields && isPreviousDirty !== !isCurrentFieldPristine;
    }
    if (isBlurEvent) {
      const isPreviousFieldTouched = get(_formState.touchedFields, name);
      if (!isPreviousFieldTouched) {
        set(_formState.touchedFields, name, isBlurEvent);
        output.touchedFields = _formState.touchedFields;
        shouldUpdateField = shouldUpdateField || _proxyFormState.touchedFields && isPreviousFieldTouched !== isBlurEvent;
      }
    }
    shouldUpdateField && shouldRender && _subjects.state.next(output);
    return shouldUpdateField ? output : {};
  };
  const shouldRenderByError = (name, isValid, error, fieldState) => {
    const previousFieldError = get(_formState.errors, name);
    const shouldUpdateValid = _proxyFormState.isValid && isBoolean(isValid) && _formState.isValid !== isValid;
    if (props.delayError && error) {
      delayErrorCallback = debounce(() => updateErrors(name, error));
      delayErrorCallback(props.delayError);
    } else {
      clearTimeout(timer);
      delayErrorCallback = null;
      error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
    }
    if ((error ? !deepEqual(previousFieldError, error) : previousFieldError) || !isEmptyObject(fieldState) || shouldUpdateValid) {
      const updatedFormState = {
        ...fieldState,
        ...shouldUpdateValid && isBoolean(isValid) ? { isValid } : {},
        errors: _formState.errors,
        name
      };
      _formState = {
        ..._formState,
        ...updatedFormState
      };
      _subjects.state.next(updatedFormState);
    }
    _updateIsValidating(false);
  };
  const _executeSchema = async (name) => _options.resolver(_formValues, _options.context, getResolverOptions(name || _names.mount, _fields, _options.criteriaMode, _options.shouldUseNativeValidation));
  const executeSchemaAndUpdateState = async (names) => {
    const { errors } = await _executeSchema(names);
    if (names) {
      for (const name of names) {
        const error = get(errors, name);
        error ? set(_formState.errors, name, error) : unset(_formState.errors, name);
      }
    } else {
      _formState.errors = errors;
    }
    return errors;
  };
  const executeBuiltInValidation = async (fields, shouldOnlyCheckValid, context = {
    valid: true
  }) => {
    for (const name in fields) {
      const field = fields[name];
      if (field) {
        const { _f, ...fieldValue } = field;
        if (_f) {
          const isFieldArrayRoot = _names.array.has(_f.name);
          const fieldError = await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation && !shouldOnlyCheckValid, isFieldArrayRoot);
          if (fieldError[_f.name]) {
            context.valid = false;
            if (shouldOnlyCheckValid) {
              break;
            }
          }
          !shouldOnlyCheckValid && (get(fieldError, _f.name) ? isFieldArrayRoot ? updateFieldArrayRootError(_formState.errors, fieldError, _f.name) : set(_formState.errors, _f.name, fieldError[_f.name]) : unset(_formState.errors, _f.name));
        }
        fieldValue && await executeBuiltInValidation(fieldValue, shouldOnlyCheckValid, context);
      }
    }
    return context.valid;
  };
  const _removeUnmounted = () => {
    for (const name of _names.unMount) {
      const field = get(_fields, name);
      field && (field._f.refs ? field._f.refs.every((ref) => !live(ref)) : !live(field._f.ref)) && unregister(name);
    }
    _names.unMount = /* @__PURE__ */ new Set();
  };
  const _getDirty = (name, data) => (name && data && set(_formValues, name, data), !deepEqual(getValues(), _defaultValues));
  const _getWatch = (names, defaultValue, isGlobal) => generateWatchOutput(names, _names, {
    ..._state.mount ? _formValues : isUndefined(defaultValue) ? _defaultValues : isString(names) ? { [names]: defaultValue } : defaultValue
  }, isGlobal, defaultValue);
  const _getFieldArray = (name) => compact(get(_state.mount ? _formValues : _defaultValues, name, props.shouldUnregister ? get(_defaultValues, name, []) : []));
  const setFieldValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    let fieldValue = value;
    if (field) {
      const fieldReference = field._f;
      if (fieldReference) {
        !fieldReference.disabled && set(_formValues, name, getFieldValueAs(value, fieldReference));
        fieldValue = isHTMLElement(fieldReference.ref) && isNullOrUndefined(value) ? "" : value;
        if (isMultipleSelect(fieldReference.ref)) {
          [...fieldReference.ref.options].forEach((optionRef) => optionRef.selected = fieldValue.includes(optionRef.value));
        } else if (fieldReference.refs) {
          if (isCheckBoxInput(fieldReference.ref)) {
            fieldReference.refs.length > 1 ? fieldReference.refs.forEach((checkboxRef) => (!checkboxRef.defaultChecked || !checkboxRef.disabled) && (checkboxRef.checked = Array.isArray(fieldValue) ? !!fieldValue.find((data) => data === checkboxRef.value) : fieldValue === checkboxRef.value)) : fieldReference.refs[0] && (fieldReference.refs[0].checked = !!fieldValue);
          } else {
            fieldReference.refs.forEach((radioRef) => radioRef.checked = radioRef.value === fieldValue);
          }
        } else if (isFileInput(fieldReference.ref)) {
          fieldReference.ref.value = "";
        } else {
          fieldReference.ref.value = fieldValue;
          if (!fieldReference.ref.type) {
            _subjects.values.next({
              name,
              values: { ..._formValues }
            });
          }
        }
      }
    }
    (options.shouldDirty || options.shouldTouch) && updateTouchAndDirty(name, fieldValue, options.shouldTouch, options.shouldDirty, true);
    options.shouldValidate && trigger(name);
  };
  const setValues = (name, value, options) => {
    for (const fieldKey in value) {
      const fieldValue = value[fieldKey];
      const fieldName = `${name}.${fieldKey}`;
      const field = get(_fields, fieldName);
      (_names.array.has(name) || !isPrimitive(fieldValue) || field && !field._f) && !isDateObject(fieldValue) ? setValues(fieldName, fieldValue, options) : setFieldValue(fieldName, fieldValue, options);
    }
  };
  const setValue = (name, value, options = {}) => {
    const field = get(_fields, name);
    const isFieldArray = _names.array.has(name);
    const cloneValue = cloneObject(value);
    set(_formValues, name, cloneValue);
    if (isFieldArray) {
      _subjects.array.next({
        name,
        values: { ..._formValues }
      });
      if ((_proxyFormState.isDirty || _proxyFormState.dirtyFields) && options.shouldDirty) {
        _subjects.state.next({
          name,
          dirtyFields: getDirtyFields(_defaultValues, _formValues),
          isDirty: _getDirty(name, cloneValue)
        });
      }
    } else {
      field && !field._f && !isNullOrUndefined(cloneValue) ? setValues(name, cloneValue, options) : setFieldValue(name, cloneValue, options);
    }
    isWatched(name, _names) && _subjects.state.next({ ..._formState });
    _subjects.values.next({
      name,
      values: { ..._formValues }
    });
    !_state.mount && flushRootRender();
  };
  const onChange = async (event) => {
    const target = event.target;
    let name = target.name;
    let isFieldValueUpdated = true;
    const field = get(_fields, name);
    const getCurrentFieldValue = () => target.type ? getFieldValue(field._f) : getEventValue(event);
    if (field) {
      let error;
      let isValid;
      const fieldValue = getCurrentFieldValue();
      const isBlurEvent = event.type === EVENTS.BLUR || event.type === EVENTS.FOCUS_OUT;
      const shouldSkipValidation = !hasValidation(field._f) && !_options.resolver && !get(_formState.errors, name) && !field._f.deps || skipValidation(isBlurEvent, get(_formState.touchedFields, name), _formState.isSubmitted, validationModeAfterSubmit, validationModeBeforeSubmit);
      const watched = isWatched(name, _names, isBlurEvent);
      set(_formValues, name, fieldValue);
      if (isBlurEvent) {
        field._f.onBlur && field._f.onBlur(event);
        delayErrorCallback && delayErrorCallback(0);
      } else if (field._f.onChange) {
        field._f.onChange(event);
      }
      const fieldState = updateTouchAndDirty(name, fieldValue, isBlurEvent, false);
      const shouldRender = !isEmptyObject(fieldState) || watched;
      !isBlurEvent && _subjects.values.next({
        name,
        type: event.type,
        values: { ..._formValues }
      });
      if (shouldSkipValidation) {
        _proxyFormState.isValid && _updateValid();
        return shouldRender && _subjects.state.next({ name, ...watched ? {} : fieldState });
      }
      !isBlurEvent && watched && _subjects.state.next({ ..._formState });
      _updateIsValidating(true);
      if (_options.resolver) {
        const { errors } = await _executeSchema([name]);
        const previousErrorLookupResult = schemaErrorLookup(_formState.errors, _fields, name);
        const errorLookupResult = schemaErrorLookup(errors, _fields, previousErrorLookupResult.name || name);
        error = errorLookupResult.error;
        name = errorLookupResult.name;
        isValid = isEmptyObject(errors);
      } else {
        error = (await validateField(field, _formValues, shouldDisplayAllAssociatedErrors, _options.shouldUseNativeValidation))[name];
        isFieldValueUpdated = Number.isNaN(fieldValue) || fieldValue === get(_formValues, name, fieldValue);
        if (isFieldValueUpdated) {
          if (error) {
            isValid = false;
          } else if (_proxyFormState.isValid) {
            isValid = await executeBuiltInValidation(_fields, true);
          }
        }
      }
      if (isFieldValueUpdated) {
        field._f.deps && trigger(field._f.deps);
        shouldRenderByError(name, isValid, error, fieldState);
      }
    }
  };
  const trigger = async (name, options = {}) => {
    let isValid;
    let validationResult;
    const fieldNames = convertToArrayPayload(name);
    _updateIsValidating(true);
    if (_options.resolver) {
      const errors = await executeSchemaAndUpdateState(isUndefined(name) ? name : fieldNames);
      isValid = isEmptyObject(errors);
      validationResult = name ? !fieldNames.some((name2) => get(errors, name2)) : isValid;
    } else if (name) {
      validationResult = (await Promise.all(fieldNames.map(async (fieldName) => {
        const field = get(_fields, fieldName);
        return await executeBuiltInValidation(field && field._f ? { [fieldName]: field } : field);
      }))).every(Boolean);
      !(!validationResult && !_formState.isValid) && _updateValid();
    } else {
      validationResult = isValid = await executeBuiltInValidation(_fields);
    }
    _subjects.state.next({
      ...!isString(name) || _proxyFormState.isValid && isValid !== _formState.isValid ? {} : { name },
      ..._options.resolver || !name ? { isValid } : {},
      errors: _formState.errors,
      isValidating: false
    });
    options.shouldFocus && !validationResult && focusFieldBy(_fields, (key) => key && get(_formState.errors, key), name ? fieldNames : _names.mount);
    return validationResult;
  };
  const getValues = (fieldNames) => {
    const values = {
      ..._defaultValues,
      ..._state.mount ? _formValues : {}
    };
    return isUndefined(fieldNames) ? values : isString(fieldNames) ? get(values, fieldNames) : fieldNames.map((name) => get(values, name));
  };
  const getFieldState = (name, formState) => ({
    invalid: !!get((formState || _formState).errors, name),
    isDirty: !!get((formState || _formState).dirtyFields, name),
    isTouched: !!get((formState || _formState).touchedFields, name),
    error: get((formState || _formState).errors, name)
  });
  const clearErrors = (name) => {
    name && convertToArrayPayload(name).forEach((inputName) => unset(_formState.errors, inputName));
    _subjects.state.next({
      errors: name ? _formState.errors : {}
    });
  };
  const setError = (name, error, options) => {
    const ref = (get(_fields, name, { _f: {} })._f || {}).ref;
    set(_formState.errors, name, {
      ...error,
      ref
    });
    _subjects.state.next({
      name,
      errors: _formState.errors,
      isValid: false
    });
    options && options.shouldFocus && ref && ref.focus && ref.focus();
  };
  const watch = (name, defaultValue) => isFunction(name) ? _subjects.values.subscribe({
    next: (payload) => name(_getWatch(void 0, defaultValue), payload)
  }) : _getWatch(name, defaultValue, true);
  const unregister = (name, options = {}) => {
    for (const fieldName of name ? convertToArrayPayload(name) : _names.mount) {
      _names.mount.delete(fieldName);
      _names.array.delete(fieldName);
      if (!options.keepValue) {
        unset(_fields, fieldName);
        unset(_formValues, fieldName);
      }
      !options.keepError && unset(_formState.errors, fieldName);
      !options.keepDirty && unset(_formState.dirtyFields, fieldName);
      !options.keepTouched && unset(_formState.touchedFields, fieldName);
      !_options.shouldUnregister && !options.keepDefaultValue && unset(_defaultValues, fieldName);
    }
    _subjects.values.next({
      values: { ..._formValues }
    });
    _subjects.state.next({
      ..._formState,
      ...!options.keepDirty ? {} : { isDirty: _getDirty() }
    });
    !options.keepIsValid && _updateValid();
  };
  const _updateDisabledField = ({ disabled, name, field, fields }) => {
    if (isBoolean(disabled)) {
      const value = disabled ? void 0 : get(_formValues, name, getFieldValue(field ? field._f : get(fields, name)._f));
      set(_formValues, name, value);
      updateTouchAndDirty(name, value, false, false, true);
    }
  };
  const register = (name, options = {}) => {
    let field = get(_fields, name);
    const disabledIsDefined = isBoolean(options.disabled);
    set(_fields, name, {
      ...field || {},
      _f: {
        ...field && field._f ? field._f : { ref: { name } },
        name,
        mount: true,
        ...options
      }
    });
    _names.mount.add(name);
    if (field) {
      _updateDisabledField({
        field,
        disabled: options.disabled,
        name
      });
    } else {
      updateValidAndValue(name, true, options.value);
    }
    return {
      ...disabledIsDefined ? { disabled: options.disabled } : {},
      ..._options.progressive ? {
        required: !!options.required,
        min: getRuleValue(options.min),
        max: getRuleValue(options.max),
        minLength: getRuleValue(options.minLength),
        maxLength: getRuleValue(options.maxLength),
        pattern: getRuleValue(options.pattern)
      } : {},
      name,
      onChange,
      onBlur: onChange,
      ref: (ref) => {
        if (ref) {
          register(name, options);
          field = get(_fields, name);
          const fieldRef = isUndefined(ref.value) ? ref.querySelectorAll ? ref.querySelectorAll("input,select,textarea")[0] || ref : ref : ref;
          const radioOrCheckbox = isRadioOrCheckbox(fieldRef);
          const refs = field._f.refs || [];
          if (radioOrCheckbox ? refs.find((option) => option === fieldRef) : fieldRef === field._f.ref) {
            return;
          }
          set(_fields, name, {
            _f: {
              ...field._f,
              ...radioOrCheckbox ? {
                refs: [
                  ...refs.filter(live),
                  fieldRef,
                  ...Array.isArray(get(_defaultValues, name)) ? [{}] : []
                ],
                ref: { type: fieldRef.type, name }
              } : { ref: fieldRef }
            }
          });
          updateValidAndValue(name, false, void 0, fieldRef);
        } else {
          field = get(_fields, name, {});
          if (field._f) {
            field._f.mount = false;
          }
          (_options.shouldUnregister || options.shouldUnregister) && !(isNameInFieldArray(_names.array, name) && _state.action) && _names.unMount.add(name);
        }
      }
    };
  };
  const _focusError = () => _options.shouldFocusError && focusFieldBy(_fields, (key) => key && get(_formState.errors, key), _names.mount);
  const handleSubmit = (onValid, onInvalid) => async (e2) => {
    if (e2) {
      e2.preventDefault && e2.preventDefault();
      e2.persist && e2.persist();
    }
    let fieldValues = cloneObject(_formValues);
    _subjects.state.next({
      isSubmitting: true
    });
    if (_options.resolver) {
      const { errors, values } = await _executeSchema();
      _formState.errors = errors;
      fieldValues = values;
    } else {
      await executeBuiltInValidation(_fields);
    }
    unset(_formState.errors, "root");
    if (isEmptyObject(_formState.errors)) {
      _subjects.state.next({
        errors: {}
      });
      await onValid(fieldValues, e2);
    } else {
      if (onInvalid) {
        await onInvalid({ ..._formState.errors }, e2);
      }
      _focusError();
      setTimeout(_focusError);
    }
    _subjects.state.next({
      isSubmitted: true,
      isSubmitting: false,
      isSubmitSuccessful: isEmptyObject(_formState.errors),
      submitCount: _formState.submitCount + 1,
      errors: _formState.errors
    });
  };
  const resetField = (name, options = {}) => {
    if (get(_fields, name)) {
      if (isUndefined(options.defaultValue)) {
        setValue(name, get(_defaultValues, name));
      } else {
        setValue(name, options.defaultValue);
        set(_defaultValues, name, options.defaultValue);
      }
      if (!options.keepTouched) {
        unset(_formState.touchedFields, name);
      }
      if (!options.keepDirty) {
        unset(_formState.dirtyFields, name);
        _formState.isDirty = options.defaultValue ? _getDirty(name, get(_defaultValues, name)) : _getDirty();
      }
      if (!options.keepError) {
        unset(_formState.errors, name);
        _proxyFormState.isValid && _updateValid();
      }
      _subjects.state.next({ ..._formState });
    }
  };
  const _reset = (formValues, keepStateOptions = {}) => {
    const updatedValues = formValues ? cloneObject(formValues) : _defaultValues;
    const cloneUpdatedValues = cloneObject(updatedValues);
    const values = formValues && !isEmptyObject(formValues) ? cloneUpdatedValues : _defaultValues;
    if (!keepStateOptions.keepDefaultValues) {
      _defaultValues = updatedValues;
    }
    if (!keepStateOptions.keepValues) {
      if (keepStateOptions.keepDirtyValues || shouldCaptureDirtyFields) {
        for (const fieldName of _names.mount) {
          get(_formState.dirtyFields, fieldName) ? set(values, fieldName, get(_formValues, fieldName)) : setValue(fieldName, get(values, fieldName));
        }
      } else {
        if (isWeb && isUndefined(formValues)) {
          for (const name of _names.mount) {
            const field = get(_fields, name);
            if (field && field._f) {
              const fieldReference = Array.isArray(field._f.refs) ? field._f.refs[0] : field._f.ref;
              if (isHTMLElement(fieldReference)) {
                const form = fieldReference.closest("form");
                if (form) {
                  form.reset();
                  break;
                }
              }
            }
          }
        }
        _fields = {};
      }
      _formValues = props.shouldUnregister ? keepStateOptions.keepDefaultValues ? cloneObject(_defaultValues) : {} : cloneObject(values);
      _subjects.array.next({
        values: { ...values }
      });
      _subjects.values.next({
        values: { ...values }
      });
    }
    _names = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: false,
      focus: ""
    };
    !_state.mount && flushRootRender();
    _state.mount = !_proxyFormState.isValid || !!keepStateOptions.keepIsValid;
    _state.watch = !!props.shouldUnregister;
    _subjects.state.next({
      submitCount: keepStateOptions.keepSubmitCount ? _formState.submitCount : 0,
      isDirty: keepStateOptions.keepDirty ? _formState.isDirty : !!(keepStateOptions.keepDefaultValues && !deepEqual(formValues, _defaultValues)),
      isSubmitted: keepStateOptions.keepIsSubmitted ? _formState.isSubmitted : false,
      dirtyFields: keepStateOptions.keepDirtyValues ? _formState.dirtyFields : keepStateOptions.keepDefaultValues && formValues ? getDirtyFields(_defaultValues, formValues) : {},
      touchedFields: keepStateOptions.keepTouched ? _formState.touchedFields : {},
      errors: keepStateOptions.keepErrors ? _formState.errors : {},
      isSubmitting: false,
      isSubmitSuccessful: false
    });
  };
  const reset = (formValues, keepStateOptions) => _reset(isFunction(formValues) ? formValues(_formValues) : formValues, keepStateOptions);
  const setFocus = (name, options = {}) => {
    const field = get(_fields, name);
    const fieldReference = field && field._f;
    if (fieldReference) {
      const fieldRef = fieldReference.refs ? fieldReference.refs[0] : fieldReference.ref;
      if (fieldRef.focus) {
        fieldRef.focus();
        options.shouldSelect && fieldRef.select();
      }
    }
  };
  const _updateFormState = (updatedFormState) => {
    _formState = {
      ..._formState,
      ...updatedFormState
    };
  };
  const _resetDefaultValues = () => isFunction(_options.defaultValues) && _options.defaultValues().then((values) => {
    reset(values, _options.resetOptions);
    _subjects.state.next({
      isLoading: false
    });
  });
  return {
    control: {
      register,
      unregister,
      getFieldState,
      handleSubmit,
      setError,
      _executeSchema,
      _getWatch,
      _getDirty,
      _updateValid,
      _removeUnmounted,
      _updateFieldArray,
      _updateDisabledField,
      _getFieldArray,
      _reset,
      _resetDefaultValues,
      _updateFormState,
      _subjects,
      _proxyFormState,
      get _fields() {
        return _fields;
      },
      get _formValues() {
        return _formValues;
      },
      get _state() {
        return _state;
      },
      set _state(value) {
        _state = value;
      },
      get _defaultValues() {
        return _defaultValues;
      },
      get _names() {
        return _names;
      },
      set _names(value) {
        _names = value;
      },
      get _formState() {
        return _formState;
      },
      set _formState(value) {
        _formState = value;
      },
      get _options() {
        return _options;
      },
      set _options(value) {
        _options = {
          ..._options,
          ...value
        };
      }
    },
    trigger,
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    reset,
    resetField,
    clearErrors,
    unregister,
    setError,
    setFocus,
    getFieldState
  };
}
function useForm(props = {}) {
  const _formControl = React$6.useRef();
  const _values = React$6.useRef();
  const [formState, updateFormState] = React$6.useState({
    isDirty: false,
    isValidating: false,
    isLoading: isFunction(props.defaultValues),
    isSubmitted: false,
    isSubmitting: false,
    isSubmitSuccessful: false,
    isValid: false,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: {},
    defaultValues: isFunction(props.defaultValues) ? void 0 : props.defaultValues
  });
  if (!_formControl.current) {
    _formControl.current = {
      ...createFormControl(props, () => updateFormState((formState2) => ({ ...formState2 }))),
      formState
    };
  }
  const control = _formControl.current.control;
  control._options = props;
  useSubscribe({
    subject: control._subjects.state,
    next: (value) => {
      if (shouldRenderFormState(value, control._proxyFormState, control._updateFormState, true)) {
        updateFormState({ ...control._formState });
      }
    }
  });
  React$6.useEffect(() => {
    if (props.values && !deepEqual(props.values, _values.current)) {
      control._reset(props.values, control._options.resetOptions);
      _values.current = props.values;
    } else {
      control._resetDefaultValues();
    }
  }, [props.values, control]);
  React$6.useEffect(() => {
    if (!control._state.mount) {
      control._updateValid();
      control._state.mount = true;
    }
    if (control._state.watch) {
      control._state.watch = false;
      control._subjects.state.next({ ...control._formState });
    }
    control._removeUnmounted();
  });
  _formControl.current.formState = getProxyFormState(formState, control);
  return _formControl.current;
}
var e = function(i2, e2, t2) {
  if (i2 && "reportValidity" in i2) {
    var f2 = get(t2, e2);
    i2.setCustomValidity(f2 && f2.message || ""), i2.reportValidity();
  }
}, t = function(r2, i2) {
  var t2 = function(t3) {
    var f3 = i2.fields[t3];
    f3 && f3.ref && "reportValidity" in f3.ref ? e(f3.ref, t3, r2) : f3.refs && f3.refs.forEach(function(i3) {
      return e(i3, t3, r2);
    });
  };
  for (var f2 in i2.fields)
    t2(f2);
}, f = function(e2, f2) {
  f2.shouldUseNativeValidation && t(e2, f2);
  var o3 = {};
  for (var a2 in e2) {
    var n2 = get(f2.fields, a2);
    set(o3, a2, Object.assign(e2[a2], { ref: n2 && n2.ref }));
  }
  return o3;
};
var o2 = function(o3, n2, a2) {
  return void 0 === n2 && (n2 = {}), void 0 === a2 && (a2 = {}), function(s2, i2, c2) {
    try {
      return Promise.resolve(function(t$12, r2) {
        try {
          var u2 = (n2.context && false, Promise.resolve(o3["sync" === a2.mode ? "validateSync" : "validate"](s2, Object.assign({ abortEarly: false }, n2, { context: i2 }))).then(function(t$13) {
            return c2.shouldUseNativeValidation && t({}, c2), { values: a2.rawValues ? s2 : t$13, errors: {} };
          }));
        } catch (e2) {
          return r2(e2);
        }
        return u2 && u2.then ? u2.then(void 0, r2) : u2;
      }(0, function(e2) {
        if (!e2.inner)
          throw e2;
        return { values: {}, errors: f((o4 = e2, n3 = !c2.shouldUseNativeValidation && "all" === c2.criteriaMode, (o4.inner || []).reduce(function(e3, t2) {
          if (e3[t2.path] || (e3[t2.path] = { message: t2.message, type: t2.type }), n3) {
            var o5 = e3[t2.path].types, a3 = o5 && o5[t2.type];
            e3[t2.path] = appendErrors(t2.path, n3, e3, t2.type, a3 ? [].concat(a3, t2.message) : t2.message);
          }
          return e3;
        }, {})), c2) };
        var o4, n3;
      }));
    } catch (e2) {
      return Promise.reject(e2);
    }
  };
};
const CustomForm = ({ status, message, onValidated }) => {
  var _a, _b, _c, _d, _e, _f;
  const [mailStatus, setMailStatus] = reactExports.useState("");
  const schema = create$3().shape({
    email: create$6().required("Email is required").matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      "Invalid Email Address"
    ),
    firstName: create$6().required("First name is required"),
    lastName: create$6().required("Last name is required"),
    tags: create$6()
  });
  const {
    register,
    handleSubmit,
    trigger,
    reset,
    formState: { errors }
  } = useForm({
    mode: "all",
    resolver: o2(schema)
  });
  const sendEmail = (data) => {
    onValidated({
      EMAIL: data.email,
      FNAME: data.firstName,
      LNAME: data.lastName,
      tags: data.tags
    });
  };
  reactExports.useEffect(() => {
    if (status === "success") {
      reset();
    }
    setMailStatus(status);
  }, [status]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "grid w-full", onSubmit: handleSubmit(sendEmail), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2", children: " Subscribe to get email updates" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700",
          type: "text",
          placeholder: "First Name",
          ...register("firstName", {
            onChange: (e2) => {
              trigger("firstName");
            }
          })
        }
      ),
      (errors == null ? void 0 : errors.name) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-600 text-sm", children: (_b = (_a = errors == null ? void 0 : errors.name) == null ? void 0 : _a.message) == null ? void 0 : _b.toString() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          className: "block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700",
          type: "text",
          placeholder: "Last Name",
          ...register("lastName", {
            onChange: (e2) => {
              trigger("lastName");
            }
          })
        }
      ),
      (errors == null ? void 0 : errors.name) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-600 text-sm", children: (_d = (_c = errors == null ? void 0 : errors.name) == null ? void 0 : _c.message) == null ? void 0 : _d.toString() })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700",
        type: "text",
        placeholder: "Email",
        ...register("email", {
          onChange: (e2) => {
            trigger("email");
            setMailStatus("");
          }
        })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { hidden: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        className: "block w-full h-7 indent-1 focus:outline-none focus:border focus:border-gray-700",
        type: "hidden",
        value: "10674954",
        ...register("tags", {
          onChange: (e2) => {
            trigger("tags");
          }
        })
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: (errors == null ? void 0 : errors.email) && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-red-600 text-sm", children: (_f = (_e = errors == null ? void 0 : errors.email) == null ? void 0 : _e.message) == null ? void 0 : _f.toString() }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Button,
      {
        type: "submit",
        class: "bg-transparent !border-black !text-black inline-block shadow-none hover:!text-white hover:!border-white",
        children: "Subscribe"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xs", children: [
      mailStatus === "error" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-red-500",
          dangerouslySetInnerHTML: { __html: message }
        }
      ),
      mailStatus === "success" && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "text-green-700",
          dangerouslySetInnerHTML: { __html: message }
        }
      )
    ] })
  ] }) });
};
const MailchimpFormContainer = () => {
  const postUrl = "https://princeton.us12.list-manage.com/subscribe/post?u=52c32f0a19ea89eb500c42e58&amp;id=220a02071e&amp;f_id=000d49e0f";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mc__form-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    MailchimpSubscribe,
    {
      url: postUrl,
      render: ({ subscribe, status, message }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CustomForm,
        {
          status,
          message,
          onValidated: (formData) => subscribe(formData)
        }
      )
    }
  ) });
};
const Footer = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-tertiary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-screen-2xl m-auto lg:flex grid gap-10 lg:gap-0 lg:justify-center py-10 lg:py-14 px-4 sm:px-8 lg:px-16 lg:divide-x lg:divide-gray-400", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:pr-10 w-fit m-auto md:m-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "items-center gap-x-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          className: "max-w-none w-full lg:w-auto sm:h-32 lg:h-20 m-auto",
          src: "./images/Logo-Blue-hydroframe.png",
          alt: "HydroFrame Logo"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        "Copyright © HydroFrame ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:pl-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MailchimpFormContainer, {}) })
  ] }) });
};
function App() {
  const { pathname } = useLocation();
  reactExports.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0
      // behavior: "smooth",
    });
    setTimeout(() => {
      const spinner = document.getElementById("spinner");
      if (spinner && !spinner.hasAttribute("hidden")) {
        spinner.classList.add("fadeOut");
        setTimeout(() => {
          spinner.setAttribute("hidden", "true");
        }, 1e3);
      }
    }, 500);
  }, [pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white text-text lg:text-lg", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-0 left-0 w-full z-50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 min-h-[calc(100vh-330px)] max-w-screen-2xl m-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}) })
  ] }) });
}
const HeroSection = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "bg-contain lg:bg-cover h-full px-4 sm:px-8 lg:px-36 pt-4 pb-10 lg:pt-10 lg:pb-40  sm:min-h-60 lg:min-h-96 flex max-w-full",
      style: {
        backgroundImage: 'url("' + (item.image || "./images/three-line-swoosh.svg") + '")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom"
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-x-10 z-10  max-w-5xl my-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: " py-2 lg:py-5 px-5 lg:px-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-3xl lg:text-5xl font-bold break-words w-full !sticky !top-20", children: item.title }),
        item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-[400px]", children: item.description })
      ] }) }) })
    }
  );
};
const AboutCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: ``, children: [
    item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-primary font-bold block xl:hidden text-2xl mb-5`,
        dangerouslySetInnerHTML: { __html: item.title }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `w-full lg:w-[48%] mb-5 ${item.imageLeft ? "float-right lg:ml-12" : "float-left lg:mr-12"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full", src: item.image, alt: "images" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-justify", children: [
      item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-primary font-bold hidden xl:block text-3xl mb-5`,
          dangerouslySetInnerHTML: { __html: item.title }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          dangerouslySetInnerHTML: { __html: item.description }
        }
      )
    ] })
  ] }) });
};
function AboutUs() {
  const [cardList] = reactExports.useState([
    {
      imageLeft: false,
      title: "What is HydroFrame?",
      image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/about-us/what-is-hydroframe.png`,
      description: `<div>HydroFrame is a platform to facilitate easy interaction with large computationally intensive hydrologic models and massive simulated outputs.</div>
                <div class="mt-5">Our tools enable users to subset model inputs and outputs for any watershed in the US and to develop their own models.</div>
                <div class="mt-5">We also develop free interactive educational tools and lesson plans to teach students of all ages about groundwater and the hydrologic cycle.</div>`
    },
    {
      imageLeft: true,
      title: "Why HydroFrame?",
      image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/about-us/seeks-hydroframe.png`,
      description: `<div>Hydrologic simulations have advanced greatly in
                recent years. We now have models spanning the entire
                US that capture groundwater, surface water and plant
                processes at high spatial resolution. Despite these
                developments the community of people who use and
                develop national models remains small due to
                multiple barriers to entry:</div>
                <ul class="list-disc list-inside">
                    <li class="mt-5">
                        Developing hydrologic input datasets and
                        validating the behavior of national models
                        is challenging and our current platforms
                        have taken years to develop.
                    </li>
                    <li class="mt-5">
                        The computer models that we use can be
                        difficult for new users to pick up without
                        some training and computer science
                        background.
                    </li>
                    <li class="mt-5">
                        National simulations rely on high
                        performance computing and generate very
                        large outputs that can be difficult to
                        manage.
                    </li>
                </ul>
                <div class="mt-5">HydroFrame seeks to remove these barriers. We build tools to make existing national models community resources that anyone can interact with.</div>`
    }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "About us",
          description: "",
          image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/three-line-swoosh.svg`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-10 lg:gap-12 grid", children: cardList.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(AboutCard, { item }, item.title)) }) }) }) })
  ] });
}
const UserCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `grid grid-cols-1`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `col-span-1`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        alt: "",
        className: `w-full`,
        src: "/images/our-team/" + item.image
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mt-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `font-bold text-xl mb-1`,
          dangerouslySetInnerHTML: { __html: item.name }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "mb-1 text-base",
          dangerouslySetInnerHTML: { __html: item.position }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "font-bold mb-1 text-lg",
          dangerouslySetInnerHTML: {
            __html: item.universityName
          }
        }
      )
    ] })
  ] }) });
};
function OurTeam() {
  const leaderList = [
    {
      image: "reed-maxwell-hydroframe.jpg",
      name: "REED MAXWELL",
      position: "Project PI<br/>Professor",
      universityName: "Princeton University"
    },
    {
      image: "laura-condon-hydroframe.jpg",
      name: "LAURA CONDON",
      position: "Co-PI<br/>Associate Professor",
      universityName: "University of Arizona"
    },
    {
      image: "ilkay-atlintas-hydroframe.jpg",
      name: "ILKAY ALTINTAS",
      position: "Co-PI<br/>Chief Data Science Officer",
      universityName: "San Diego<br/>Supercomputer Center"
    },
    {
      image: "tony-castronova-hydroframe.jpg",
      name: "TONY CASTRONOVA",
      position: "Co-PI<br/>Senior Research Hydrologist",
      universityName: "CUAHSI"
    },
    {
      image: "alejandro-flores-hydroframe.jpg",
      name: "ALEJANDRO FLORES",
      position: "Co-PI<br/>Associate Professor",
      universityName: "Boise State University"
    },
    {
      image: "david-tarboton-hydroframe.jpg",
      name: "DAVID TARBOTON",
      position: "Co-PI<br/>Director, Utah Water<br />Research Laboratory",
      universityName: "Utah State University"
    }
  ];
  const teamList = [
    {
      image: "george-artavanis-hydroframe.jpg",
      name: "GEORGE ARTAVANIS",
      position: "Research Software Engineer",
      universityName: "Princeton University"
    },
    {
      image: "amy-defnet-hydroframe.jpg",
      name: "AMY DEFNET",
      position: "Research Software Engineer",
      universityName: "Princeton University"
    },
    {
      image: "lisa-gallaghere-hydroframe.jpg",
      name: "LISA GALLAGHER",
      position: "Education and Outreach Specialist",
      universityName: "Princeton University"
    },
    {
      image: "david-gochis-hydroframe.jpg",
      name: "DAVID GOCHIS",
      position: "Senior Scientist",
      universityName: "National Center for<br />Atmospheric Research"
    },
    {
      image: "bill-hasling-hydroframe.jpg",
      name: "BILL HASLING",
      position: "Senior Research Software Engineer",
      universityName: "Princeton University"
    },
    {
      image: "amy-johnson-hydroframe.jpg",
      name: "AMY JOHNSON",
      position: "Research Software Engineer",
      universityName: "University of Arizona"
    },
    {
      image: "will-lytle-hydroframe.jpg",
      name: "WILL LYTLE",
      position: "Research Software Engineer",
      universityName: "University of Arizona"
    },
    {
      image: "yueling-ma-hydroframe.jpg",
      name: "YUELING MA",
      position: "Postdoctoral Scholar",
      universityName: "Princeton University"
    },
    {
      image: "cathie-olchanowsky-hydroframe.jpg",
      name: "CATHIE OLCHANOWSKY",
      position: "Software System Design Engineer",
      universityName: "AMD"
    },
    {
      image: "michelle-strout-hydroframe.jpg",
      name: "MICHELLE STROUT",
      position: "Software Developer",
      universityName: "University of Arizona"
    },
    {
      image: "amanda-triplett-hydroframe.jpg",
      name: "AMANDA TRIPLETT",
      position: "Graduate Student",
      universityName: "University of Arizona"
    },
    {
      image: "danielle-tijerina-hydroframe.jpg",
      name: "DANIELLE TIJERINA",
      position: "Graduate Student",
      universityName: "Princeton University"
    },
    {
      image: "chen-yang-hydroframe.jpg",
      name: "CHEN YANG",
      position: "Postdoctoral Scholar",
      universityName: "Princeton University"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "Our Team",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-8 lg:gap-12 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold pb-5 ", children: "Project Leadership" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4", children: leaderList.map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(UserCard, { item }, ind + "cpi");
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold pb-5 ", children: "Team Members" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-4 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4", children: teamList.map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(UserCard, { item }, ind + "tm");
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-primary text-2xl sm:text-4xl font-bold pb-5", children: [
        "Partner Institutions",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flax flax-col mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-8 lg:gap-y-3 grid-cols-1 lg:gap-x-3 sm:grid-cols-2 lg:grid-cols-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.princeton.edu/",
                target: "_blank",
                rel: "noreferrer",
                title: "Princeton University",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "m-auto lg:m-0 max-w-none h-24 lg:h-28",
                    src: "./images/our-team/partner/princeton-university-hydroframe.png",
                    alt: "Princeton University"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.arizona.edu/",
                target: "_blank",
                rel: "noreferrer",
                title: "The University of Arizona",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "max-w-none h-16 lg:h-28 m-auto",
                    src: "./images/our-team/partner/the-university-arizona-hydroframe.png",
                    alt: "The University of Arizona"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.usu.edu/",
                target: "_blank",
                rel: "noreferrer",
                title: "UtahState University",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "max-w-none h-16 lg:h-28 m-auto",
                    src: "./images/our-team/partner/utahstate-university-hydroframe.png",
                    alt: "UtahState University"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.boisestate.edu/",
                target: "_blank",
                rel: "noreferrer",
                title: "Boise State",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "max-w-none h-16 lg:h-28 m-auto",
                    src: "./images/our-team/partner/boise-state-hydroframe.png",
                    alt: "Boise State"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-8 lg:gap-y-3 grid-cols-1 lg:gap-x-3 mt-10 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 ", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.cuahsi.org/",
                target: "_blank",
                rel: "noreferrer",
                title: "CUAHSI allied for water science",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "max-w-none h-auto w-20 lg:w-auto lg:h-16 m-auto lg:m-0 mt-3",
                    src: "./images/our-team/partner/cauhsi-hydroframe.png",
                    alt: "CUAHSI allied for water science"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.sdsc.edu/",
                target: "_blank",
                rel: "noreferrer",
                title: "SDSC",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "max-w-none h-auto w-20 lg:w-auto lg:h-12 m-auto lg:m-0 mt-3",
                    src: "./images/our-team/partner/sdsc-hydroframe.png",
                    alt: "SDSC"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://thewatershed.org/",
                target: "_blank",
                rel: "noreferrer",
                title: "The Watershed institute",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "max-w-none w-2/3 lg:h-20 m-auto lg:m-0",
                    src: "./images/our-team/partner/watershed- Institute-hydroframe.png",
                    alt: "The Watershed institute"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-8 lg:gap-y-3 grid-cols-1 md:gap-x-20 lg:gap-x-20 mt-10 lg:mt-16 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.hydroshare.org/",
                target: "_blank",
                rel: "noreferrer",
                title: "HYDROSHARE",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "m-auto lg:m-0 max-w-none h-auto w-2/3 md:w-full lg:h-16",
                    src: "./images/our-team/partner/hydroshare-hydroframe.png",
                    alt: "HYDROSHARE"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://projectwet.arizona.edu/",
                target: "_blank",
                rel: "noreferrer",
                title: "Arizona Project WET",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    className: "max-w-none h-auto w-full md:w-full lg:h-16 m-auto",
                    src: "./images/our-team/partner/arizona-project-wet-hydroframe.png",
                    alt: "Arizona Project WET"
                  }
                )
              }
            )
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pb-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Funding" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 font-normal", children: "Our project is supported by the National Science Foundation Cyber Infrastructure Program." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://www.nsf.gov/",
            target: "_blank",
            rel: "noreferrer",
            title: "National Science Foundation",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                className: "max-w-none h-16 lg:h-28 m-auto md:m-0",
                src: "./images/our-team/funding/NSF-logo-hydroframe.png",
                alt: "National Science Foundation"
              }
            )
          }
        ) })
      ] }) })
    ] })
  ] });
}
const HydrogenCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex flex-col lg:flex-row gap-5 lg:gap-12", children: [
    item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-primary font-bold block lg:hidden text-2xl`,
        dangerouslySetInnerHTML: { __html: item.title }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        className: "w-full lg:ml-[-50px] lg:mr-[350px]",
        src: item.image,
        alt: "images"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-2 lg:ml-[-120px]", children: [
      item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-primary font-bold hidden lg:block text-3xl mb-5`,
          dangerouslySetInnerHTML: { __html: item.title }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: ``,
          dangerouslySetInnerHTML: { __html: item.description }
        }
      ),
      item.buttonTitle && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full lg:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: item.buttonLink || "",
          className: "inline-block font-medium m-auto lg:ml-0 mt-5 self-center bg-primary hover:bg-secondaryHover transition-colors text-white px-14 py-5 uppercase",
          rel: "noreferrer",
          target: "_blank",
          children: item.buttonTitle
        }
      ) })
    ] })
  ] }) });
};
function Hydrogen() {
  const [cardList] = reactExports.useState([
    {
      title: "Explore current and future watershed conditions across the US",
      image: "./images/hydrogen/Hydrogen-App-Laptop-Smaller.gif",
      description: "HydroGEN allows users to explore current watershed conditions across the US as well as future scenarios. No prior hydrologic or modeling experience required. Check out our website to learn more and access the application.",
      buttonTitle: "Visit The Website",
      buttonLink: "https://hydro-generation.org/"
    }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "HydroGEN",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10", children: cardList.map((item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(HydrogenCard, { item }, ind)) }) })
  ] });
}
const styles = "";
var lib = {};
var Carousel$3 = {};
var utils = {};
var clones = {};
(function(exports) {
  function getOriginalCounterPart(index, _a, childrenArr) {
    var slidesToShow = _a.slidesToShow, currentSlide = _a.currentSlide;
    return childrenArr.length > 2 * slidesToShow ? index + 2 * slidesToShow : currentSlide >= childrenArr.length ? childrenArr.length + index : index;
  }
  function getOriginalIndexLookupTableByClones(slidesToShow, childrenArr) {
    if (childrenArr.length > 2 * slidesToShow) {
      for (var table = {}, firstBeginningOfClones = childrenArr.length - 2 * slidesToShow, firstEndOfClones = childrenArr.length - firstBeginningOfClones, firstCount = firstBeginningOfClones, i2 = 0; i2 < firstEndOfClones; i2++)
        table[i2] = firstCount, firstCount++;
      var secondBeginningOfClones = childrenArr.length + firstEndOfClones, secondEndOfClones = secondBeginningOfClones + childrenArr.slice(0, 2 * slidesToShow).length, secondCount = 0;
      for (i2 = secondBeginningOfClones; i2 <= secondEndOfClones; i2++)
        table[i2] = secondCount, secondCount++;
      var originalEnd = secondBeginningOfClones, originalCounter = 0;
      for (i2 = firstEndOfClones; i2 < originalEnd; i2++)
        table[i2] = originalCounter, originalCounter++;
      return table;
    }
    table = {};
    var totalSlides = 3 * childrenArr.length, count2 = 0;
    for (i2 = 0; i2 < totalSlides; i2++)
      table[i2] = count2, ++count2 === childrenArr.length && (count2 = 0);
    return table;
  }
  function getClones(slidesToShow, childrenArr) {
    return childrenArr.length < slidesToShow ? childrenArr : childrenArr.length > 2 * slidesToShow ? childrenArr.slice(childrenArr.length - 2 * slidesToShow, childrenArr.length).concat(childrenArr, childrenArr.slice(0, 2 * slidesToShow)) : childrenArr.concat(childrenArr, childrenArr);
  }
  function getInitialSlideInInfiniteMode(slidesToShow, childrenArr) {
    return childrenArr.length > 2 * slidesToShow ? 2 * slidesToShow : childrenArr.length;
  }
  function checkClonesPosition(_a, childrenArr, props) {
    var isReachingTheEnd, currentSlide = _a.currentSlide, slidesToShow = _a.slidesToShow, itemWidth = _a.itemWidth, totalItems = _a.totalItems, nextSlide = 0, nextPosition = 0, isReachingTheStart = 0 === currentSlide, originalFirstSlide = childrenArr.length - (childrenArr.length - 2 * slidesToShow);
    return childrenArr.length < slidesToShow ? (nextPosition = nextSlide = 0, isReachingTheStart = isReachingTheEnd = false) : childrenArr.length > 2 * slidesToShow ? ((isReachingTheEnd = currentSlide >= originalFirstSlide + childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = -itemWidth * (nextSlide = originalFirstSlide + (childrenArr.length - 2 * slidesToShow)))) : ((isReachingTheEnd = currentSlide >= 2 * childrenArr.length) && (nextPosition = -itemWidth * (nextSlide = currentSlide - childrenArr.length)), isReachingTheStart && (nextPosition = props.showDots ? -itemWidth * (nextSlide = childrenArr.length) : -itemWidth * (nextSlide = totalItems / 3))), { isReachingTheEnd, isReachingTheStart, nextSlide, nextPosition };
  }
  Object.defineProperty(exports, "__esModule", { value: true }), exports.getOriginalCounterPart = getOriginalCounterPart, exports.getOriginalIndexLookupTableByClones = getOriginalIndexLookupTableByClones, exports.getClones = getClones, exports.getInitialSlideInInfiniteMode = getInitialSlideInInfiniteMode, exports.checkClonesPosition = checkClonesPosition;
})(clones);
var elementWidth = {};
Object.defineProperty(elementWidth, "__esModule", { value: true });
function getPartialVisibilityGutter(responsive, partialVisible, serverSideDeviceType, clientSideDeviceType) {
  var gutter = 0, deviceType = clientSideDeviceType || serverSideDeviceType;
  return partialVisible && deviceType && (gutter = responsive[deviceType].partialVisibilityGutter || responsive[deviceType].paritialVisibilityGutter), gutter;
}
function getWidthFromDeviceType(deviceType, responsive) {
  var itemWidth;
  responsive[deviceType] && (itemWidth = (100 / responsive[deviceType].items).toFixed(1));
  return itemWidth;
}
function getItemClientSideWidth(props, slidesToShow, containerWidth) {
  return Math.round(containerWidth / (slidesToShow + (props.centerMode ? 1 : 0)));
}
elementWidth.getPartialVisibilityGutter = getPartialVisibilityGutter, elementWidth.getWidthFromDeviceType = getWidthFromDeviceType, elementWidth.getItemClientSideWidth = getItemClientSideWidth;
var common = {};
Object.defineProperty(common, "__esModule", { value: true });
var elementWidth_1$1 = elementWidth;
function notEnoughChildren(state) {
  var slidesToShow = state.slidesToShow;
  return state.totalItems < slidesToShow;
}
function getInitialState(state, props) {
  var flexBisis, domLoaded = state.domLoaded, slidesToShow = state.slidesToShow, containerWidth = state.containerWidth, itemWidth = state.itemWidth, deviceType = props.deviceType, responsive = props.responsive, ssr = props.ssr, partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
  ssr && deviceType && !domFullyLoaded && (flexBisis = elementWidth_1$1.getWidthFromDeviceType(deviceType, responsive));
  var shouldRenderOnSSR = Boolean(ssr && deviceType && !domFullyLoaded && flexBisis);
  return { shouldRenderOnSSR, flexBisis, domFullyLoaded, partialVisibilityGutter: elementWidth_1$1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType), shouldRenderAtAll: shouldRenderOnSSR || domFullyLoaded };
}
function getIfSlideIsVisbile(index, state) {
  var currentSlide = state.currentSlide, slidesToShow = state.slidesToShow;
  return currentSlide <= index && index < currentSlide + slidesToShow;
}
function getTransformForCenterMode(state, props, transformPlaceHolder) {
  var transform = transformPlaceHolder || state.transform;
  return !props.infinite && 0 === state.currentSlide || notEnoughChildren(state) ? transform : transform + state.itemWidth / 2;
}
function isInLeftEnd(_a) {
  return !(0 < _a.currentSlide);
}
function isInRightEnd(_a) {
  var currentSlide = _a.currentSlide, totalItems = _a.totalItems;
  return !(currentSlide + _a.slidesToShow < totalItems);
}
function getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) {
  void 0 === partialVisibilityGutter && (partialVisibilityGutter = 0);
  var currentSlide = state.currentSlide, slidesToShow = state.slidesToShow, isRightEndReach = isInRightEnd(state), shouldRemoveRightGutter = !props.infinite && isRightEndReach, baseTransform = transformPlaceHolder || state.transform;
  if (notEnoughChildren(state))
    return baseTransform;
  var transform = baseTransform + currentSlide * partialVisibilityGutter;
  return shouldRemoveRightGutter ? transform + (state.containerWidth - (state.itemWidth - partialVisibilityGutter) * slidesToShow) : transform;
}
function parsePosition(props, position) {
  return props.rtl ? -1 * position : position;
}
function getTransform(state, props, transformPlaceHolder) {
  var partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, responsive = props.responsive, deviceType = props.deviceType, centerMode = props.centerMode, transform = transformPlaceHolder || state.transform, partialVisibilityGutter = elementWidth_1$1.getPartialVisibilityGutter(responsive, partialVisbile || partialVisible, deviceType, state.deviceType);
  return parsePosition(props, partialVisible || partialVisbile ? getTransformForPartialVsibile(state, partialVisibilityGutter, props, transformPlaceHolder) : centerMode ? getTransformForCenterMode(state, props, transformPlaceHolder) : transform);
}
function getSlidesToSlide(state, props) {
  var domLoaded = state.domLoaded, slidesToShow = state.slidesToShow, containerWidth = state.containerWidth, itemWidth = state.itemWidth, deviceType = props.deviceType, responsive = props.responsive, slidesToScroll = props.slidesToSlide || 1, domFullyLoaded = Boolean(domLoaded && slidesToShow && containerWidth && itemWidth);
  return props.ssr && props.deviceType && !domFullyLoaded && Object.keys(responsive).forEach(function(device) {
    var slidesToSlide = responsive[device].slidesToSlide;
    deviceType === device && slidesToSlide && (slidesToScroll = slidesToSlide);
  }), domFullyLoaded && Object.keys(responsive).forEach(function(item) {
    var _a = responsive[item], breakpoint = _a.breakpoint, slidesToSlide = _a.slidesToSlide, max = breakpoint.max, min = breakpoint.min;
    slidesToSlide && window.innerWidth >= min && window.innerWidth <= max && (slidesToScroll = slidesToSlide);
  }), slidesToScroll;
}
common.notEnoughChildren = notEnoughChildren, common.getInitialState = getInitialState, common.getIfSlideIsVisbile = getIfSlideIsVisbile, common.getTransformForCenterMode = getTransformForCenterMode, common.isInLeftEnd = isInLeftEnd, common.isInRightEnd = isInRightEnd, common.getTransformForPartialVsibile = getTransformForPartialVsibile, common.parsePosition = parsePosition, common.getTransform = getTransform, common.getSlidesToSlide = getSlidesToSlide;
var throttle$1 = {};
Object.defineProperty(throttle$1, "__esModule", { value: true });
var throttle = function(func, limit, setIsInThrottle) {
  var inThrottle;
  return function() {
    var args = arguments;
    inThrottle || (func.apply(this, args), inThrottle = true, "function" == typeof setIsInThrottle && setIsInThrottle(true), setTimeout(function() {
      inThrottle = false, "function" == typeof setIsInThrottle && setIsInThrottle(false);
    }, limit));
  };
};
throttle$1.default = throttle;
var throwError = {};
(function(exports) {
  function throwError2(state, props) {
    var partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, centerMode = props.centerMode, ssr = props.ssr, responsive = props.responsive;
    if ((partialVisbile || partialVisible) && centerMode)
      throw new Error("center mode can not be used at the same time with partialVisible");
    if (!responsive)
      throw ssr ? new Error("ssr mode need to be used in conjunction with responsive prop") : new Error("Responsive prop is needed for deciding the amount of items to show on the screen");
    if (responsive && "object" != typeof responsive)
      throw new Error("responsive prop must be an object");
  }
  Object.defineProperty(exports, "__esModule", { value: true }), exports.default = throwError2;
})(throwError);
var next = {};
Object.defineProperty(next, "__esModule", { value: true });
var common_1$5 = common;
function populateNextSlides(state, props, slidesHavePassed) {
  void 0 === slidesHavePassed && (slidesHavePassed = 0);
  var nextSlides, nextPosition, slidesToShow = state.slidesToShow, currentSlide = state.currentSlide, itemWidth = state.itemWidth, totalItems = state.totalItems, slidesToSlide = common_1$5.getSlidesToSlide(state, props), nextMaximumSlides = currentSlide + 1 + slidesHavePassed + slidesToShow + (0 < slidesHavePassed ? 0 : slidesToSlide);
  return nextPosition = nextMaximumSlides <= totalItems ? -itemWidth * (nextSlides = currentSlide + slidesHavePassed + (0 < slidesHavePassed ? 0 : slidesToSlide)) : totalItems < nextMaximumSlides && currentSlide !== totalItems - slidesToShow ? -itemWidth * (nextSlides = totalItems - slidesToShow) : nextSlides = void 0, { nextSlides, nextPosition };
}
next.populateNextSlides = populateNextSlides;
var previous = {};
Object.defineProperty(previous, "__esModule", { value: true });
var React$5 = reactExports, common_1$4 = common, common_2 = common;
function populatePreviousSlides(state, props, slidesHavePassed) {
  void 0 === slidesHavePassed && (slidesHavePassed = 0);
  var nextSlides, nextPosition, currentSlide = state.currentSlide, itemWidth = state.itemWidth, slidesToShow = state.slidesToShow, children = props.children, showDots = props.showDots, infinite = props.infinite, slidesToSlide = common_1$4.getSlidesToSlide(state, props), nextMaximumSlides = currentSlide - slidesHavePassed - (0 < slidesHavePassed ? 0 : slidesToSlide), additionalSlides = (React$5.Children.toArray(children).length - slidesToShow) % slidesToSlide;
  return nextPosition = 0 <= nextMaximumSlides ? (nextSlides = nextMaximumSlides, showDots && !infinite && 0 < additionalSlides && common_2.isInRightEnd(state) && (nextSlides = currentSlide - additionalSlides), -itemWidth * nextSlides) : nextSlides = nextMaximumSlides < 0 && 0 !== currentSlide ? 0 : void 0, { nextSlides, nextPosition };
}
previous.populatePreviousSlides = populatePreviousSlides;
var mouseOrTouchMove = {};
(function(exports) {
  function populateSlidesOnMouseTouchMove(state, props, initialX, lastX, clientX, transformPlaceHolder) {
    var direction, nextPosition, itemWidth = state.itemWidth, slidesToShow = state.slidesToShow, totalItems = state.totalItems, currentSlide = state.currentSlide, infinite = props.infinite, canContinue = false, slidesHavePassedRight = Math.round((initialX - lastX) / itemWidth), slidesHavePassedLeft = Math.round((lastX - initialX) / itemWidth), isMovingLeft = initialX < clientX;
    if (clientX < initialX && !!(slidesHavePassedRight <= slidesToShow)) {
      direction = "right";
      var translateXLimit = Math.abs(-itemWidth * (totalItems - slidesToShow)), nextTranslate = transformPlaceHolder - (lastX - clientX), isLastSlide = currentSlide === totalItems - slidesToShow;
      (Math.abs(nextTranslate) <= translateXLimit || isLastSlide && infinite) && (nextPosition = nextTranslate, canContinue = true);
    }
    isMovingLeft && slidesHavePassedLeft <= slidesToShow && (direction = "left", ((nextTranslate = transformPlaceHolder + (clientX - lastX)) <= 0 || 0 === currentSlide && infinite) && (canContinue = true, nextPosition = nextTranslate));
    return { direction, nextPosition, canContinue };
  }
  Object.defineProperty(exports, "__esModule", { value: true }), exports.populateSlidesOnMouseTouchMove = populateSlidesOnMouseTouchMove;
})(mouseOrTouchMove);
Object.defineProperty(utils, "__esModule", { value: true });
var clones_1$2 = clones;
utils.getOriginalCounterPart = clones_1$2.getOriginalCounterPart, utils.getClones = clones_1$2.getClones, utils.checkClonesPosition = clones_1$2.checkClonesPosition, utils.getInitialSlideInInfiniteMode = clones_1$2.getInitialSlideInInfiniteMode;
var elementWidth_1 = elementWidth;
utils.getWidthFromDeviceType = elementWidth_1.getWidthFromDeviceType, utils.getPartialVisibilityGutter = elementWidth_1.getPartialVisibilityGutter, utils.getItemClientSideWidth = elementWidth_1.getItemClientSideWidth;
var common_1$3 = common;
utils.getInitialState = common_1$3.getInitialState, utils.getIfSlideIsVisbile = common_1$3.getIfSlideIsVisbile, utils.getTransformForCenterMode = common_1$3.getTransformForCenterMode, utils.getTransformForPartialVsibile = common_1$3.getTransformForPartialVsibile, utils.isInLeftEnd = common_1$3.isInLeftEnd, utils.isInRightEnd = common_1$3.isInRightEnd, utils.notEnoughChildren = common_1$3.notEnoughChildren, utils.getSlidesToSlide = common_1$3.getSlidesToSlide;
var throttle_1 = throttle$1;
utils.throttle = throttle_1.default;
var throwError_1 = throwError;
utils.throwError = throwError_1.default;
var next_1 = next;
utils.populateNextSlides = next_1.populateNextSlides;
var previous_1 = previous;
utils.populatePreviousSlides = previous_1.populatePreviousSlides;
var mouseOrTouchMove_1 = mouseOrTouchMove;
utils.populateSlidesOnMouseTouchMove = mouseOrTouchMove_1.populateSlidesOnMouseTouchMove;
var types = {};
var __extends$1 = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d2, b2) {
    return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        b3.hasOwnProperty(p2) && (d3[p2] = b3[p2]);
    })(d2, b2);
  };
  return function(d2, b2) {
    function __() {
      this.constructor = d2;
    }
    extendStatics(d2, b2), d2.prototype = null === b2 ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
Object.defineProperty(types, "__esModule", { value: true });
var React$4 = reactExports;
function isMouseMoveEvent(e2) {
  return "clientY" in e2;
}
types.isMouseMoveEvent = isMouseMoveEvent;
var Carousel$2 = function(_super) {
  function Carousel2() {
    return null !== _super && _super.apply(this, arguments) || this;
  }
  return __extends$1(Carousel2, _super), Carousel2;
}(React$4.Component);
types.default = Carousel$2;
var Dots$1 = {};
var dots = {};
Object.defineProperty(dots, "__esModule", { value: true });
var clones_1$1 = clones, common_1$2 = common;
function getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr) {
  var table = {}, slidesToSlide = common_1$2.getSlidesToSlide(state, props);
  return Array(numberOfDotsToShow).fill(0).forEach(function(_2, i2) {
    var nextSlide = clones_1$1.getOriginalCounterPart(i2, state, childrenArr);
    if (0 === i2)
      table[0] = nextSlide;
    else {
      var now = table[i2 - 1] + slidesToSlide;
      table[i2] = now;
    }
  }), table;
}
dots.getLookupTableForNextSlides = getLookupTableForNextSlides;
Object.defineProperty(Dots$1, "__esModule", { value: true });
var React$3 = reactExports, clones_1 = clones, dots_1 = dots, common_1$1 = common, Dots = function(_a) {
  var props = _a.props, state = _a.state, goToSlide = _a.goToSlide, getState = _a.getState, showDots = props.showDots, customDot = props.customDot, dotListClass = props.dotListClass, infinite = props.infinite, children = props.children;
  if (!showDots || common_1$1.notEnoughChildren(state))
    return null;
  var numberOfDotsToShow, currentSlide = state.currentSlide, slidesToShow = state.slidesToShow, slidesToSlide = common_1$1.getSlidesToSlide(state, props), childrenArr = React$3.Children.toArray(children);
  numberOfDotsToShow = infinite ? Math.ceil(childrenArr.length / slidesToSlide) : Math.ceil((childrenArr.length - slidesToShow) / slidesToSlide) + 1;
  var nextSlidesTable = dots_1.getLookupTableForNextSlides(numberOfDotsToShow, state, props, childrenArr), lookupTable = clones_1.getOriginalIndexLookupTableByClones(slidesToShow, childrenArr), currentSlides = lookupTable[currentSlide];
  return React$3.createElement("ul", { className: "react-multi-carousel-dot-list " + dotListClass }, Array(numberOfDotsToShow).fill(0).map(function(_2, index) {
    var isActive, nextSlide;
    if (infinite) {
      nextSlide = nextSlidesTable[index];
      var cloneIndex = lookupTable[nextSlide];
      isActive = currentSlides === cloneIndex || cloneIndex <= currentSlides && currentSlides < cloneIndex + slidesToSlide;
    } else {
      var maximumNextSlide = childrenArr.length - slidesToShow, possibileNextSlides = index * slidesToSlide;
      isActive = (nextSlide = maximumNextSlide < possibileNextSlides ? maximumNextSlide : possibileNextSlides) === currentSlide || nextSlide < currentSlide && currentSlide < nextSlide + slidesToSlide && currentSlide < childrenArr.length - slidesToShow;
    }
    return customDot ? React$3.cloneElement(customDot, { index, active: isActive, key: index, onClick: function() {
      return goToSlide(nextSlide);
    }, carouselState: getState() }) : React$3.createElement("li", { "data-index": index, key: index, className: "react-multi-carousel-dot " + (isActive ? "react-multi-carousel-dot--active" : "") }, React$3.createElement("button", { "aria-label": "Go to slide " + (index + 1), onClick: function() {
      return goToSlide(nextSlide);
    } }));
  }));
};
Dots$1.default = Dots;
var Arrows = {};
Object.defineProperty(Arrows, "__esModule", { value: true });
var React$2 = reactExports, LeftArrow = function(_a) {
  var customLeftArrow = _a.customLeftArrow, getState = _a.getState, previous2 = _a.previous, disabled = _a.disabled, rtl = _a.rtl;
  if (customLeftArrow)
    return React$2.cloneElement(customLeftArrow, { onClick: function() {
      return previous2();
    }, carouselState: getState(), disabled, rtl });
  var rtlClassName = rtl ? "rtl" : "";
  return React$2.createElement("button", { "aria-label": "Go to previous slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--left " + rtlClassName, onClick: function() {
    return previous2();
  }, type: "button", disabled });
};
Arrows.LeftArrow = LeftArrow;
var RightArrow = function(_a) {
  var customRightArrow = _a.customRightArrow, getState = _a.getState, next2 = _a.next, disabled = _a.disabled, rtl = _a.rtl;
  if (customRightArrow)
    return React$2.cloneElement(customRightArrow, { onClick: function() {
      return next2();
    }, carouselState: getState(), disabled, rtl });
  var rtlClassName = rtl ? "rtl" : "";
  return React$2.createElement("button", { "aria-label": "Go to next slide", className: "react-multiple-carousel__arrow react-multiple-carousel__arrow--right " + rtlClassName, onClick: function() {
    return next2();
  }, type: "button", disabled });
};
Arrows.RightArrow = RightArrow;
var CarouselItems$1 = {};
Object.defineProperty(CarouselItems$1, "__esModule", { value: true });
var React$1 = reactExports, utils_1$1 = utils, CarouselItems = function(_a) {
  var props = _a.props, state = _a.state, goToSlide = _a.goToSlide, clones2 = _a.clones, notEnoughChildren2 = _a.notEnoughChildren, itemWidth = state.itemWidth, children = props.children, infinite = props.infinite, itemClass = props.itemClass, itemAriaLabel = props.itemAriaLabel, partialVisbile = props.partialVisbile, partialVisible = props.partialVisible, _b = utils_1$1.getInitialState(state, props), flexBisis = _b.flexBisis, shouldRenderOnSSR = _b.shouldRenderOnSSR, domFullyLoaded = _b.domFullyLoaded, partialVisibilityGutter = _b.partialVisibilityGutter;
  return _b.shouldRenderAtAll ? (partialVisbile && console.warn('WARNING: Please correct props name: "partialVisible" as old typo will be removed in future versions!'), React$1.createElement(React$1.Fragment, null, (infinite ? clones2 : React$1.Children.toArray(children)).map(function(child, index) {
    return React$1.createElement("li", { key: index, "data-index": index, onClick: function() {
      props.focusOnSelect && goToSlide(index);
    }, "aria-hidden": utils_1$1.getIfSlideIsVisbile(index, state) ? "false" : "true", "aria-label": itemAriaLabel || (child.props.ariaLabel ? child.props.ariaLabel : null), style: { flex: shouldRenderOnSSR ? "1 0 " + flexBisis + "%" : "auto", position: "relative", width: domFullyLoaded ? ((partialVisbile || partialVisible) && partialVisibilityGutter && !notEnoughChildren2 ? itemWidth - partialVisibilityGutter : itemWidth) + "px" : "auto" }, className: "react-multi-carousel-item " + (utils_1$1.getIfSlideIsVisbile(index, state) ? "react-multi-carousel-item--active" : "") + " " + itemClass }, child);
  }))) : null;
};
CarouselItems$1.default = CarouselItems;
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d2, b2) {
    return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        b3.hasOwnProperty(p2) && (d3[p2] = b3[p2]);
    })(d2, b2);
  };
  return function(d2, b2) {
    function __() {
      this.constructor = d2;
    }
    extendStatics(d2, b2), d2.prototype = null === b2 ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
Object.defineProperty(Carousel$3, "__esModule", { value: true });
var React = reactExports, utils_1 = utils, types_1 = types, Dots_1 = Dots$1, Arrows_1 = Arrows, CarouselItems_1 = CarouselItems$1, common_1 = common, defaultTransitionDuration = 400, defaultTransition = "transform 400ms ease-in-out", Carousel$1 = function(_super) {
  function Carousel2(props) {
    var _this = _super.call(this, props) || this;
    return _this.containerRef = React.createRef(), _this.listRef = React.createRef(), _this.state = { itemWidth: 0, slidesToShow: 0, currentSlide: 0, totalItems: React.Children.count(props.children), deviceType: "", domLoaded: false, transform: 0, containerWidth: 0 }, _this.onResize = _this.onResize.bind(_this), _this.handleDown = _this.handleDown.bind(_this), _this.handleMove = _this.handleMove.bind(_this), _this.handleOut = _this.handleOut.bind(_this), _this.onKeyUp = _this.onKeyUp.bind(_this), _this.handleEnter = _this.handleEnter.bind(_this), _this.setIsInThrottle = _this.setIsInThrottle.bind(_this), _this.next = utils_1.throttle(_this.next.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.previous = utils_1.throttle(_this.previous.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.goToSlide = utils_1.throttle(_this.goToSlide.bind(_this), props.transitionDuration || defaultTransitionDuration, _this.setIsInThrottle), _this.onMove = false, _this.initialX = 0, _this.lastX = 0, _this.isAnimationAllowed = false, _this.direction = "", _this.initialY = 0, _this.isInThrottle = false, _this.transformPlaceHolder = 0, _this;
  }
  return __extends(Carousel2, _super), Carousel2.prototype.resetTotalItems = function() {
    var _this = this, totalItems = React.Children.count(this.props.children), currentSlide = utils_1.notEnoughChildren(this.state) ? 0 : Math.max(0, Math.min(this.state.currentSlide, totalItems));
    this.setState({ totalItems, currentSlide }, function() {
      _this.setContainerAndItemWidth(_this.state.slidesToShow, true);
    });
  }, Carousel2.prototype.setIsInThrottle = function(isInThrottle) {
    void 0 === isInThrottle && (isInThrottle = false), this.isInThrottle = isInThrottle;
  }, Carousel2.prototype.setTransformDirectly = function(position, withAnimation) {
    var additionalTransfrom = this.props.additionalTransfrom;
    this.transformPlaceHolder = position;
    var currentTransform = common_1.getTransform(this.state, this.props, this.transformPlaceHolder);
    this.listRef && this.listRef.current && (this.setAnimationDirectly(withAnimation), this.listRef.current.style.transform = "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)");
  }, Carousel2.prototype.setAnimationDirectly = function(animationAllowed) {
    this.listRef && this.listRef.current && (this.listRef.current.style.transition = animationAllowed ? this.props.customTransition || defaultTransition : "none");
  }, Carousel2.prototype.componentDidMount = function() {
    this.setState({ domLoaded: true }), this.setItemsToShow(), window.addEventListener("resize", this.onResize), this.onResize(true), this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), this.props.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, Carousel2.prototype.setClones = function(slidesToShow, itemWidth, forResizing, resetCurrentSlide) {
    var _this = this;
    void 0 === resetCurrentSlide && (resetCurrentSlide = false), this.isAnimationAllowed = false;
    var childrenArr = React.Children.toArray(this.props.children), initialSlide = utils_1.getInitialSlideInInfiniteMode(slidesToShow || this.state.slidesToShow, childrenArr), clones2 = utils_1.getClones(this.state.slidesToShow, childrenArr), currentSlide = childrenArr.length < this.state.slidesToShow ? 0 : this.state.currentSlide;
    this.setState({ totalItems: clones2.length, currentSlide: forResizing && !resetCurrentSlide ? currentSlide : initialSlide }, function() {
      _this.correctItemsPosition(itemWidth || _this.state.itemWidth);
    });
  }, Carousel2.prototype.setItemsToShow = function(shouldCorrectItemPosition, resetCurrentSlide) {
    var _this = this, responsive = this.props.responsive;
    Object.keys(responsive).forEach(function(item) {
      var _a = responsive[item], breakpoint = _a.breakpoint, items = _a.items, max = breakpoint.max, min = breakpoint.min, widths = [window.innerWidth];
      window.screen && window.screen.width && widths.push(window.screen.width);
      var screenWidth = Math.min.apply(Math, widths);
      min <= screenWidth && screenWidth <= max && (_this.setState({ slidesToShow: items, deviceType: item }), _this.setContainerAndItemWidth(items, shouldCorrectItemPosition, resetCurrentSlide));
    });
  }, Carousel2.prototype.setContainerAndItemWidth = function(slidesToShow, shouldCorrectItemPosition, resetCurrentSlide) {
    var _this = this;
    if (this.containerRef && this.containerRef.current) {
      var containerWidth = this.containerRef.current.offsetWidth, itemWidth_1 = utils_1.getItemClientSideWidth(this.props, slidesToShow, containerWidth);
      this.setState({ containerWidth, itemWidth: itemWidth_1 }, function() {
        _this.props.infinite && _this.setClones(slidesToShow, itemWidth_1, shouldCorrectItemPosition, resetCurrentSlide);
      }), shouldCorrectItemPosition && this.correctItemsPosition(itemWidth_1);
    }
  }, Carousel2.prototype.correctItemsPosition = function(itemWidth, isAnimationAllowed, setToDomDirectly) {
    isAnimationAllowed && (this.isAnimationAllowed = true), !isAnimationAllowed && this.isAnimationAllowed && (this.isAnimationAllowed = false);
    var nextTransform = this.state.totalItems < this.state.slidesToShow ? 0 : -itemWidth * this.state.currentSlide;
    setToDomDirectly && this.setTransformDirectly(nextTransform, true), this.setState({ transform: nextTransform });
  }, Carousel2.prototype.onResize = function(value) {
    var shouldCorrectItemPosition;
    shouldCorrectItemPosition = !!this.props.infinite && ("boolean" != typeof value || !value), this.setItemsToShow(shouldCorrectItemPosition);
  }, Carousel2.prototype.componentDidUpdate = function(_a, _b) {
    var _this = this, keyBoardControl = _a.keyBoardControl, autoPlay = _a.autoPlay, children = _a.children, containerWidth = _b.containerWidth, domLoaded = _b.domLoaded, currentSlide = _b.currentSlide;
    if (this.containerRef && this.containerRef.current && this.containerRef.current.offsetWidth !== containerWidth && (this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), this.itemsToShowTimeout = setTimeout(function() {
      _this.setItemsToShow(true);
    }, this.props.transitionDuration || defaultTransitionDuration)), keyBoardControl && !this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), !keyBoardControl && this.props.keyBoardControl && window.addEventListener("keyup", this.onKeyUp), autoPlay && !this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), autoPlay || !this.props.autoPlay || this.autoPlay || (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed)), children.length !== this.props.children.length ? Carousel2.clonesTimeout = setTimeout(function() {
      _this.props.infinite ? _this.setClones(_this.state.slidesToShow, _this.state.itemWidth, true, true) : _this.resetTotalItems();
    }, this.props.transitionDuration || defaultTransitionDuration) : this.props.infinite && this.state.currentSlide !== currentSlide && this.correctClonesPosition({ domLoaded }), this.transformPlaceHolder !== this.state.transform && (this.transformPlaceHolder = this.state.transform), this.props.autoPlay && this.props.rewind && !this.props.infinite && utils_1.isInRightEnd(this.state)) {
      var rewindBuffer = this.props.transitionDuration || defaultTransitionDuration;
      Carousel2.isInThrottleTimeout = setTimeout(function() {
        _this.setIsInThrottle(false), _this.resetAutoplayInterval(), _this.goToSlide(0, void 0, !!_this.props.rewindWithAnimation);
      }, rewindBuffer + this.props.autoPlaySpeed);
    }
  }, Carousel2.prototype.correctClonesPosition = function(_a) {
    var _this = this, domLoaded = _a.domLoaded, childrenArr = React.Children.toArray(this.props.children), _b = utils_1.checkClonesPosition(this.state, childrenArr, this.props), isReachingTheEnd = _b.isReachingTheEnd, isReachingTheStart = _b.isReachingTheStart, nextSlide = _b.nextSlide, nextPosition = _b.nextPosition;
    this.state.domLoaded && domLoaded && (isReachingTheEnd || isReachingTheStart) && (this.isAnimationAllowed = false, Carousel2.transformTimeout = setTimeout(function() {
      _this.setState({ transform: nextPosition, currentSlide: nextSlide });
    }, this.props.transitionDuration || defaultTransitionDuration));
  }, Carousel2.prototype.next = function(slidesHavePassed) {
    var _this = this;
    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange;
    if (!utils_1.notEnoughChildren(this.state)) {
      var _b = utils_1.populateNextSlides(this.state, this.props, slidesHavePassed), nextSlides = _b.nextSlides, nextPosition = _b.nextPosition, previousSlide = this.state.currentSlide;
      void 0 !== nextSlides && void 0 !== nextPosition && ("function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = true, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: nextPosition, currentSlide: nextSlides }, function() {
        "function" == typeof afterChange && (Carousel2.afterChangeTimeout = setTimeout(function() {
          afterChange(previousSlide, _this.getState());
        }, _this.props.transitionDuration || defaultTransitionDuration));
      }));
    }
  }, Carousel2.prototype.previous = function(slidesHavePassed) {
    var _this = this;
    void 0 === slidesHavePassed && (slidesHavePassed = 0);
    var _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange;
    if (!utils_1.notEnoughChildren(this.state)) {
      var _b = utils_1.populatePreviousSlides(this.state, this.props, slidesHavePassed), nextSlides = _b.nextSlides, nextPosition = _b.nextPosition;
      if (void 0 !== nextSlides && void 0 !== nextPosition) {
        var previousSlide = this.state.currentSlide;
        "function" == typeof beforeChange && beforeChange(nextSlides, this.getState()), this.isAnimationAllowed = true, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ transform: nextPosition, currentSlide: nextSlides }, function() {
          "function" == typeof afterChange && (Carousel2.afterChangeTimeout2 = setTimeout(function() {
            afterChange(previousSlide, _this.getState());
          }, _this.props.transitionDuration || defaultTransitionDuration));
        });
      }
    }
  }, Carousel2.prototype.resetAutoplayInterval = function() {
    this.props.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
  }, Carousel2.prototype.componentWillUnmount = function() {
    window.removeEventListener("resize", this.onResize), this.props.keyBoardControl && window.removeEventListener("keyup", this.onKeyUp), this.props.autoPlay && this.autoPlay && (clearInterval(this.autoPlay), this.autoPlay = void 0), this.itemsToShowTimeout && clearTimeout(this.itemsToShowTimeout), Carousel2.clonesTimeout && clearTimeout(Carousel2.clonesTimeout), Carousel2.isInThrottleTimeout && clearTimeout(Carousel2.isInThrottleTimeout), Carousel2.transformTimeout && clearTimeout(Carousel2.transformTimeout), Carousel2.afterChangeTimeout && clearTimeout(Carousel2.afterChangeTimeout), Carousel2.afterChangeTimeout2 && clearTimeout(Carousel2.afterChangeTimeout2), Carousel2.afterChangeTimeout3 && clearTimeout(Carousel2.afterChangeTimeout3);
  }, Carousel2.prototype.resetMoveStatus = function() {
    this.onMove = false, this.initialX = 0, this.lastX = 0, this.direction = "", this.initialY = 0;
  }, Carousel2.prototype.getCords = function(_a) {
    var clientX = _a.clientX, clientY = _a.clientY;
    return { clientX: common_1.parsePosition(this.props, clientX), clientY: common_1.parsePosition(this.props, clientY) };
  }, Carousel2.prototype.handleDown = function(e2) {
    if (!(!types_1.isMouseMoveEvent(e2) && !this.props.swipeable || types_1.isMouseMoveEvent(e2) && !this.props.draggable || this.isInThrottle)) {
      var _a = this.getCords(types_1.isMouseMoveEvent(e2) ? e2 : e2.touches[0]), clientX = _a.clientX, clientY = _a.clientY;
      this.onMove = true, this.initialX = clientX, this.initialY = clientY, this.lastX = clientX, this.isAnimationAllowed = false;
    }
  }, Carousel2.prototype.handleMove = function(e2) {
    if (!(!types_1.isMouseMoveEvent(e2) && !this.props.swipeable || types_1.isMouseMoveEvent(e2) && !this.props.draggable || utils_1.notEnoughChildren(this.state))) {
      var _a = this.getCords(types_1.isMouseMoveEvent(e2) ? e2 : e2.touches[0]), clientX = _a.clientX, clientY = _a.clientY, diffX = this.initialX - clientX, diffY = this.initialY - clientY;
      if (this.onMove) {
        if (!(Math.abs(diffX) > Math.abs(diffY)))
          return;
        var _b = utils_1.populateSlidesOnMouseTouchMove(this.state, this.props, this.initialX, this.lastX, clientX, this.transformPlaceHolder), direction = _b.direction, nextPosition = _b.nextPosition, canContinue = _b.canContinue;
        direction && (this.direction = direction, canContinue && void 0 !== nextPosition && this.setTransformDirectly(nextPosition)), this.lastX = clientX;
      }
    }
  }, Carousel2.prototype.handleOut = function(e2) {
    this.props.autoPlay && !this.autoPlay && (this.autoPlay = setInterval(this.next, this.props.autoPlaySpeed));
    var shouldDisableOnMobile = "touchend" === e2.type && !this.props.swipeable, shouldDisableOnDesktop = ("mouseleave" === e2.type || "mouseup" === e2.type) && !this.props.draggable;
    if (!shouldDisableOnMobile && !shouldDisableOnDesktop && this.onMove) {
      if (this.setAnimationDirectly(true), "right" === this.direction)
        if (this.initialX - this.lastX >= this.props.minimumTouchDrag) {
          var slidesHavePassed = Math.round((this.initialX - this.lastX) / this.state.itemWidth);
          this.next(slidesHavePassed);
        } else
          this.correctItemsPosition(this.state.itemWidth, true, true);
      if ("left" === this.direction)
        if (this.lastX - this.initialX > this.props.minimumTouchDrag) {
          slidesHavePassed = Math.round((this.lastX - this.initialX) / this.state.itemWidth);
          this.previous(slidesHavePassed);
        } else
          this.correctItemsPosition(this.state.itemWidth, true, true);
      this.resetMoveStatus();
    }
  }, Carousel2.prototype.isInViewport = function(el2) {
    var _a = el2.getBoundingClientRect(), _b = _a.top, top = void 0 === _b ? 0 : _b, _c = _a.left, left = void 0 === _c ? 0 : _c, _d = _a.bottom, bottom = void 0 === _d ? 0 : _d, _e = _a.right, right = void 0 === _e ? 0 : _e;
    return 0 <= top && 0 <= left && bottom <= (window.innerHeight || document.documentElement.clientHeight) && right <= (window.innerWidth || document.documentElement.clientWidth);
  }, Carousel2.prototype.isChildOfCarousel = function(el2) {
    return !!(el2 instanceof Element && this.listRef && this.listRef.current) && this.listRef.current.contains(el2);
  }, Carousel2.prototype.onKeyUp = function(e2) {
    var target = e2.target;
    switch (e2.keyCode) {
      case 37:
        if (this.isChildOfCarousel(target))
          return this.previous();
        break;
      case 39:
        if (this.isChildOfCarousel(target))
          return this.next();
        break;
      case 9:
        if (this.isChildOfCarousel(target) && target instanceof HTMLInputElement && this.isInViewport(target))
          return this.next();
    }
  }, Carousel2.prototype.handleEnter = function(e2) {
    types_1.isMouseMoveEvent(e2) && this.autoPlay && this.props.autoPlay && this.props.pauseOnHover && (clearInterval(this.autoPlay), this.autoPlay = void 0);
  }, Carousel2.prototype.goToSlide = function(slide, skipCallbacks, animationAllowed) {
    var _this = this;
    if (void 0 === animationAllowed && (animationAllowed = true), !this.isInThrottle) {
      var itemWidth = this.state.itemWidth, _a = this.props, afterChange = _a.afterChange, beforeChange = _a.beforeChange, previousSlide = this.state.currentSlide;
      "function" != typeof beforeChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipBeforeChange) || beforeChange(slide, this.getState()), this.isAnimationAllowed = animationAllowed, this.props.shouldResetAutoplay && this.resetAutoplayInterval(), this.setState({ currentSlide: slide, transform: -itemWidth * slide }, function() {
        _this.props.infinite && _this.correctClonesPosition({ domLoaded: true }), "function" != typeof afterChange || skipCallbacks && ("object" != typeof skipCallbacks || skipCallbacks.skipAfterChange) || (Carousel2.afterChangeTimeout3 = setTimeout(function() {
          afterChange(previousSlide, _this.getState());
        }, _this.props.transitionDuration || defaultTransitionDuration));
      });
    }
  }, Carousel2.prototype.getState = function() {
    return this.state;
  }, Carousel2.prototype.renderLeftArrow = function(disbaled) {
    var _this = this, _a = this.props, customLeftArrow = _a.customLeftArrow, rtl = _a.rtl;
    return React.createElement(Arrows_1.LeftArrow, { customLeftArrow, getState: function() {
      return _this.getState();
    }, previous: this.previous, disabled: disbaled, rtl });
  }, Carousel2.prototype.renderRightArrow = function(disbaled) {
    var _this = this, _a = this.props, customRightArrow = _a.customRightArrow, rtl = _a.rtl;
    return React.createElement(Arrows_1.RightArrow, { customRightArrow, getState: function() {
      return _this.getState();
    }, next: this.next, disabled: disbaled, rtl });
  }, Carousel2.prototype.renderButtonGroups = function() {
    var _this = this, customButtonGroup = this.props.customButtonGroup;
    return customButtonGroup ? React.cloneElement(customButtonGroup, { previous: function() {
      return _this.previous();
    }, next: function() {
      return _this.next();
    }, goToSlide: function(slideIndex, skipCallbacks) {
      return _this.goToSlide(slideIndex, skipCallbacks);
    }, carouselState: this.getState() }) : null;
  }, Carousel2.prototype.renderDotsList = function() {
    var _this = this;
    return React.createElement(Dots_1.default, { state: this.state, props: this.props, goToSlide: this.goToSlide, getState: function() {
      return _this.getState();
    } });
  }, Carousel2.prototype.renderCarouselItems = function() {
    var clones2 = [];
    if (this.props.infinite) {
      var childrenArr = React.Children.toArray(this.props.children);
      clones2 = utils_1.getClones(this.state.slidesToShow, childrenArr);
    }
    return React.createElement(CarouselItems_1.default, { clones: clones2, goToSlide: this.goToSlide, state: this.state, notEnoughChildren: utils_1.notEnoughChildren(this.state), props: this.props });
  }, Carousel2.prototype.render = function() {
    var _a = this.props, deviceType = _a.deviceType, arrows = _a.arrows, renderArrowsWhenDisabled = _a.renderArrowsWhenDisabled, removeArrowOnDeviceType = _a.removeArrowOnDeviceType, infinite = _a.infinite, containerClass = _a.containerClass, sliderClass = _a.sliderClass, customTransition = _a.customTransition, additionalTransfrom = _a.additionalTransfrom, renderDotsOutside = _a.renderDotsOutside, renderButtonGroupOutside = _a.renderButtonGroupOutside, className = _a.className, rtl = _a.rtl;
    var _b = utils_1.getInitialState(this.state, this.props), shouldRenderOnSSR = _b.shouldRenderOnSSR, shouldRenderAtAll = _b.shouldRenderAtAll, isLeftEndReach = utils_1.isInLeftEnd(this.state), isRightEndReach = utils_1.isInRightEnd(this.state), shouldShowArrows = arrows && !(removeArrowOnDeviceType && (deviceType && -1 < removeArrowOnDeviceType.indexOf(deviceType) || this.state.deviceType && -1 < removeArrowOnDeviceType.indexOf(this.state.deviceType))) && !utils_1.notEnoughChildren(this.state) && shouldRenderAtAll, disableLeftArrow = !infinite && isLeftEndReach, disableRightArrow = !infinite && isRightEndReach, currentTransform = common_1.getTransform(this.state, this.props);
    return React.createElement(React.Fragment, null, React.createElement("div", { className: "react-multi-carousel-list " + containerClass + " " + className, dir: rtl ? "rtl" : "ltr", ref: this.containerRef }, React.createElement("ul", { ref: this.listRef, className: "react-multi-carousel-track " + sliderClass, style: { transition: this.isAnimationAllowed ? customTransition || defaultTransition : "none", overflow: shouldRenderOnSSR ? "hidden" : "unset", transform: "translate3d(" + (currentTransform + additionalTransfrom) + "px,0,0)" }, onMouseMove: this.handleMove, onMouseDown: this.handleDown, onMouseUp: this.handleOut, onMouseEnter: this.handleEnter, onMouseLeave: this.handleOut, onTouchStart: this.handleDown, onTouchMove: this.handleMove, onTouchEnd: this.handleOut }, this.renderCarouselItems()), shouldShowArrows && (!disableLeftArrow || renderArrowsWhenDisabled) && this.renderLeftArrow(disableLeftArrow), shouldShowArrows && (!disableRightArrow || renderArrowsWhenDisabled) && this.renderRightArrow(disableRightArrow), shouldRenderAtAll && !renderButtonGroupOutside && this.renderButtonGroups(), shouldRenderAtAll && !renderDotsOutside && this.renderDotsList()), shouldRenderAtAll && renderDotsOutside && this.renderDotsList(), shouldRenderAtAll && renderButtonGroupOutside && this.renderButtonGroups());
  }, Carousel2.defaultProps = { slidesToSlide: 1, infinite: false, draggable: true, swipeable: true, arrows: true, renderArrowsWhenDisabled: false, containerClass: "", sliderClass: "", itemClass: "", keyBoardControl: true, autoPlaySpeed: 3e3, showDots: false, renderDotsOutside: false, renderButtonGroupOutside: false, minimumTouchDrag: 80, className: "", dotListClass: "", focusOnSelect: false, centerMode: false, additionalTransfrom: 0, pauseOnHover: true, shouldResetAutoplay: true, rewind: false, rtl: false, rewindWithAnimation: false }, Carousel2;
}(React.Component);
Carousel$3.default = Carousel$1;
Object.defineProperty(lib, "__esModule", { value: true });
var Carousel_1 = Carousel$3;
lib.default = Carousel_1.default;
var reactMultiCarousel = lib;
const Carousel = /* @__PURE__ */ getDefaultExportFromCjs(reactMultiCarousel);
var dist = {};
var ga4 = {};
var gtag = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var gtag2 = function gtag3() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (typeof window !== "undefined") {
      var _window;
      if (typeof window.gtag === "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag4() {
          window.dataLayer.push(arguments);
        };
      }
      (_window = window).gtag.apply(_window, args);
    }
  };
  var _default = gtag2;
  exports["default"] = _default;
})(gtag);
var format = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = format2;
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
  function toTitleCase(string2) {
    return string2.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title) {
      if (index > 0 && index + match.length !== title.length && match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" && (title.charAt(index + match.length) !== "-" || title.charAt(index - 1) === "-") && title.charAt(index - 1).search(/[^\s-]/) < 0) {
        return match.toLowerCase();
      }
      if (match.substr(1).search(/[A-Z]|\../) > -1) {
        return match;
      }
      return match.charAt(0).toUpperCase() + match.substr(1);
    });
  }
  function mightBeEmail(s2) {
    return typeof s2 === "string" && s2.indexOf("@") !== -1;
  }
  var redacted = "REDACTED (Potential Email Address)";
  function redactEmail(string2) {
    if (mightBeEmail(string2)) {
      console.warn("This arg looks like an email address, redacting.");
      return redacted;
    }
    return string2;
  }
  function format2() {
    var s2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var titleCase2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    var redactingEmail = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : true;
    var _str = s2 || "";
    if (titleCase2) {
      _str = toTitleCase(s2);
    }
    if (redactingEmail) {
      _str = redactEmail(_str);
    }
    return _str;
  }
})(format);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.GA4 = void 0;
  var _gtag = _interopRequireDefault(gtag);
  var _format = _interopRequireDefault(format);
  var _excluded2 = ["eventCategory", "eventAction", "eventLabel", "eventValue", "hitType"], _excluded22 = ["title", "location"], _excluded3 = ["page", "hitType"];
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _objectWithoutProperties(source, excluded) {
    if (source == null)
      return {};
    var target = _objectWithoutPropertiesLoose2(source, excluded);
    var key, i2;
    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
      for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
        key = sourceSymbolKeys[i2];
        if (excluded.indexOf(key) >= 0)
          continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key))
          continue;
        target[key] = source[key];
      }
    }
    return target;
  }
  function _objectWithoutPropertiesLoose2(source, excluded) {
    if (source == null)
      return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i2;
    for (i2 = 0; i2 < sourceKeys.length; i2++) {
      key = sourceKeys[i2];
      if (excluded.indexOf(key) >= 0)
        continue;
      target[key] = source[key];
    }
    return target;
  }
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
      return Array.from(iter);
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr))
      return _arrayLikeToArray(arr);
  }
  function ownKeys(object2, enumerableOnly) {
    var keys = Object.keys(object2);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object2);
      enumerableOnly && (symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object2, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = null != arguments[i2] ? arguments[i2] : {};
      i2 % 2 ? ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }
  function _slicedToArray(arr, i2) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray(arr, i2) || _nonIterableRest();
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _unsupportedIterableToArray(o3, minLen) {
    if (!o3)
      return;
    if (typeof o3 === "string")
      return _arrayLikeToArray(o3, minLen);
    var n2 = Object.prototype.toString.call(o3).slice(8, -1);
    if (n2 === "Object" && o3.constructor)
      n2 = o3.constructor.name;
    if (n2 === "Map" || n2 === "Set")
      return Array.from(o3);
    if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return _arrayLikeToArray(o3, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length)
      len = arr.length;
    for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
      arr2[i2] = arr[i2];
    return arr2;
  }
  function _iterableToArrayLimit(arr, i2) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i2) {
          if (Object(_i) !== _i)
            return;
          _n = false;
        } else
          for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i2); _n = true)
            ;
      } catch (err) {
        _d = true, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
            return;
        } finally {
          if (_d)
            throw _e;
        }
      }
      return _arr;
    }
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr))
      return arr;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }
  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null)
      return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== void 0) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object")
        return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  var GA4 = /* @__PURE__ */ function() {
    function GA42() {
      var _this = this;
      _classCallCheck2(this, GA42);
      _defineProperty(this, "reset", function() {
        _this.isInitialized = false;
        _this._testMode = false;
        _this._currentMeasurementId;
        _this._hasLoadedGA = false;
        _this._isQueuing = false;
        _this._queueGtag = [];
      });
      _defineProperty(this, "_gtag", function() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (!_this._testMode) {
          if (_this._isQueuing) {
            _this._queueGtag.push(args);
          } else {
            _gtag["default"].apply(void 0, args);
          }
        } else {
          _this._queueGtag.push(args);
        }
      });
      _defineProperty(this, "_loadGA", function(GA_MEASUREMENT_ID, nonce) {
        var gtagUrl = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "https://www.googletagmanager.com/gtag/js";
        if (typeof window === "undefined" || typeof document === "undefined") {
          return;
        }
        if (!_this._hasLoadedGA) {
          var script = document.createElement("script");
          script.async = true;
          script.src = "".concat(gtagUrl, "?id=").concat(GA_MEASUREMENT_ID);
          if (nonce) {
            script.setAttribute("nonce", nonce);
          }
          document.body.appendChild(script);
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag2() {
            window.dataLayer.push(arguments);
          };
          _this._hasLoadedGA = true;
        }
      });
      _defineProperty(this, "_toGtagOptions", function(gaOptions) {
        if (!gaOptions) {
          return;
        }
        var mapFields = {
          // Old https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#cookieUpdate
          // New https://developers.google.com/analytics/devguides/collection/gtagjs/cookies-user-id#cookie_update
          cookieUpdate: "cookie_update",
          cookieExpires: "cookie_expires",
          cookieDomain: "cookie_domain",
          cookieFlags: "cookie_flags",
          // must be in set method?
          userId: "user_id",
          clientId: "client_id",
          anonymizeIp: "anonymize_ip",
          // https://support.google.com/analytics/answer/2853546?hl=en#zippy=%2Cin-this-article
          contentGroup1: "content_group1",
          contentGroup2: "content_group2",
          contentGroup3: "content_group3",
          contentGroup4: "content_group4",
          contentGroup5: "content_group5",
          // https://support.google.com/analytics/answer/9050852?hl=en
          allowAdFeatures: "allow_google_signals",
          allowAdPersonalizationSignals: "allow_ad_personalization_signals",
          nonInteraction: "non_interaction",
          page: "page_path",
          hitCallback: "event_callback"
        };
        var gtagOptions = Object.entries(gaOptions).reduce(function(prev, _ref) {
          var _ref2 = _slicedToArray(_ref, 2), key = _ref2[0], value = _ref2[1];
          if (mapFields[key]) {
            prev[mapFields[key]] = value;
          } else {
            prev[key] = value;
          }
          return prev;
        }, {});
        return gtagOptions;
      });
      _defineProperty(this, "initialize", function(GA_MEASUREMENT_ID) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        if (!GA_MEASUREMENT_ID) {
          throw new Error("Require GA_MEASUREMENT_ID");
        }
        var initConfigs = typeof GA_MEASUREMENT_ID === "string" ? [{
          trackingId: GA_MEASUREMENT_ID
        }] : GA_MEASUREMENT_ID;
        _this._currentMeasurementId = initConfigs[0].trackingId;
        var gaOptions = options.gaOptions, gtagOptions = options.gtagOptions, nonce = options.nonce, _options$testMode = options.testMode, testMode = _options$testMode === void 0 ? false : _options$testMode, gtagUrl = options.gtagUrl;
        _this._testMode = testMode;
        if (!testMode) {
          _this._loadGA(_this._currentMeasurementId, nonce, gtagUrl);
        }
        if (!_this.isInitialized) {
          _this._gtag("js", /* @__PURE__ */ new Date());
          initConfigs.forEach(function(config) {
            var mergedGtagOptions = _objectSpread(_objectSpread(_objectSpread({}, _this._toGtagOptions(_objectSpread(_objectSpread({}, gaOptions), config.gaOptions))), gtagOptions), config.gtagOptions);
            if (Object.keys(mergedGtagOptions).length) {
              _this._gtag("config", config.trackingId, mergedGtagOptions);
            } else {
              _this._gtag("config", config.trackingId);
            }
          });
        }
        _this.isInitialized = true;
        if (!testMode) {
          var queues = _toConsumableArray(_this._queueGtag);
          _this._queueGtag = [];
          _this._isQueuing = false;
          while (queues.length) {
            var queue = queues.shift();
            _this._gtag.apply(_this, _toConsumableArray(queue));
            if (queue[0] === "get") {
              _this._isQueuing = true;
            }
          }
        }
      });
      _defineProperty(this, "set", function(fieldsObject) {
        if (!fieldsObject) {
          console.warn("`fieldsObject` is required in .set()");
          return;
        }
        if (_typeof(fieldsObject) !== "object") {
          console.warn("Expected `fieldsObject` arg to be an Object");
          return;
        }
        if (Object.keys(fieldsObject).length === 0) {
          console.warn("empty `fieldsObject` given to .set()");
        }
        _this._gaCommand("set", fieldsObject);
      });
      _defineProperty(this, "_gaCommandSendEvent", function(eventCategory, eventAction, eventLabel, eventValue, fieldsObject) {
        _this._gtag("event", eventAction, _objectSpread(_objectSpread({
          event_category: eventCategory,
          event_label: eventLabel,
          value: eventValue
        }, fieldsObject && {
          non_interaction: fieldsObject.nonInteraction
        }), _this._toGtagOptions(fieldsObject)));
      });
      _defineProperty(this, "_gaCommandSendEventParameters", function() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        if (typeof args[0] === "string") {
          _this._gaCommandSendEvent.apply(_this, _toConsumableArray(args.slice(1)));
        } else {
          var _args$ = args[0], eventCategory = _args$.eventCategory, eventAction = _args$.eventAction, eventLabel = _args$.eventLabel, eventValue = _args$.eventValue;
          _args$.hitType;
          var rest = _objectWithoutProperties(_args$, _excluded2);
          _this._gaCommandSendEvent(eventCategory, eventAction, eventLabel, eventValue, rest);
        }
      });
      _defineProperty(this, "_gaCommandSendTiming", function(timingCategory, timingVar, timingValue, timingLabel) {
        _this._gtag("event", "timing_complete", {
          name: timingVar,
          value: timingValue,
          event_category: timingCategory,
          event_label: timingLabel
        });
      });
      _defineProperty(this, "_gaCommandSendPageview", function(page, fieldsObject) {
        if (fieldsObject && Object.keys(fieldsObject).length) {
          var _this$_toGtagOptions = _this._toGtagOptions(fieldsObject), title = _this$_toGtagOptions.title, location = _this$_toGtagOptions.location, rest = _objectWithoutProperties(_this$_toGtagOptions, _excluded22);
          _this._gtag("event", "page_view", _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, page && {
            page_path: page
          }), title && {
            page_title: title
          }), location && {
            page_location: location
          }), rest));
        } else if (page) {
          _this._gtag("event", "page_view", {
            page_path: page
          });
        } else {
          _this._gtag("event", "page_view");
        }
      });
      _defineProperty(this, "_gaCommandSendPageviewParameters", function() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        if (typeof args[0] === "string") {
          _this._gaCommandSendPageview.apply(_this, _toConsumableArray(args.slice(1)));
        } else {
          var _args$2 = args[0], page = _args$2.page;
          _args$2.hitType;
          var rest = _objectWithoutProperties(_args$2, _excluded3);
          _this._gaCommandSendPageview(page, rest);
        }
      });
      _defineProperty(this, "_gaCommandSend", function() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        var hitType = typeof args[0] === "string" ? args[0] : args[0].hitType;
        switch (hitType) {
          case "event":
            _this._gaCommandSendEventParameters.apply(_this, args);
            break;
          case "pageview":
            _this._gaCommandSendPageviewParameters.apply(_this, args);
            break;
          case "timing":
            _this._gaCommandSendTiming.apply(_this, _toConsumableArray(args.slice(1)));
            break;
          case "screenview":
          case "transaction":
          case "item":
          case "social":
          case "exception":
            console.warn("Unsupported send command: ".concat(hitType));
            break;
          default:
            console.warn("Send command doesn't exist: ".concat(hitType));
        }
      });
      _defineProperty(this, "_gaCommandSet", function() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }
        if (typeof args[0] === "string") {
          args[0] = _defineProperty({}, args[0], args[1]);
        }
        _this._gtag("set", _this._toGtagOptions(args[0]));
      });
      _defineProperty(this, "_gaCommand", function(command) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }
        switch (command) {
          case "send":
            _this._gaCommandSend.apply(_this, args);
            break;
          case "set":
            _this._gaCommandSet.apply(_this, args);
            break;
          default:
            console.warn("Command doesn't exist: ".concat(command));
        }
      });
      _defineProperty(this, "ga", function() {
        for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
          args[_key7] = arguments[_key7];
        }
        if (typeof args[0] === "string") {
          _this._gaCommand.apply(_this, args);
        } else {
          var readyCallback = args[0];
          _this._gtag("get", _this._currentMeasurementId, "client_id", function(clientId) {
            _this._isQueuing = false;
            var queues = _this._queueGtag;
            readyCallback({
              get: function get2(property) {
                return property === "clientId" ? clientId : property === "trackingId" ? _this._currentMeasurementId : property === "apiVersion" ? "1" : void 0;
              }
            });
            while (queues.length) {
              var queue = queues.shift();
              _this._gtag.apply(_this, _toConsumableArray(queue));
            }
          });
          _this._isQueuing = true;
        }
        return _this.ga;
      });
      _defineProperty(this, "event", function(optionsOrName, params) {
        if (typeof optionsOrName === "string") {
          _this._gtag("event", optionsOrName, _this._toGtagOptions(params));
        } else {
          var action = optionsOrName.action, category = optionsOrName.category, label = optionsOrName.label, value = optionsOrName.value, nonInteraction = optionsOrName.nonInteraction, transport = optionsOrName.transport;
          if (!category || !action) {
            console.warn("args.category AND args.action are required in event()");
            return;
          }
          var fieldObject = {
            hitType: "event",
            eventCategory: (0, _format["default"])(category),
            eventAction: (0, _format["default"])(action)
          };
          if (label) {
            fieldObject.eventLabel = (0, _format["default"])(label);
          }
          if (typeof value !== "undefined") {
            if (typeof value !== "number") {
              console.warn("Expected `args.value` arg to be a Number.");
            } else {
              fieldObject.eventValue = value;
            }
          }
          if (typeof nonInteraction !== "undefined") {
            if (typeof nonInteraction !== "boolean") {
              console.warn("`args.nonInteraction` must be a boolean.");
            } else {
              fieldObject.nonInteraction = nonInteraction;
            }
          }
          if (typeof transport !== "undefined") {
            if (typeof transport !== "string") {
              console.warn("`args.transport` must be a string.");
            } else {
              if (["beacon", "xhr", "image"].indexOf(transport) === -1) {
                console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`");
              }
              fieldObject.transport = transport;
            }
          }
          _this._gaCommand("send", fieldObject);
        }
      });
      _defineProperty(this, "send", function(fieldObject) {
        _this._gaCommand("send", fieldObject);
      });
      this.reset();
    }
    _createClass(GA42, [{
      key: "gtag",
      value: function gtag2() {
        this._gtag.apply(this, arguments);
      }
    }]);
    return GA42;
  }();
  exports.GA4 = GA4;
  var _default = new GA4();
  exports["default"] = _default;
})(ga4);
(function(exports) {
  function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
      return typeof obj2;
    } : function(obj2) {
      return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
    }, _typeof(obj);
  }
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.ReactGAImplementation = void 0;
  var _ga = _interopRequireWildcard(ga4);
  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function")
      return null;
    var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
    var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache2(nodeInterop2) {
      return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }
  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
      return { "default": obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj["default"] = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
  var ReactGAImplementation = _ga.GA4;
  exports.ReactGAImplementation = ReactGAImplementation;
  var _default = _ga["default"];
  exports["default"] = _default;
})(dist);
const ReactGA = /* @__PURE__ */ getDefaultExportFromCjs(dist);
const CategoryCard = ({ item }) => {
  const logNotebookClick = (item2, action) => ReactGA.event({
    action,
    category: "notebooks",
    label: item2.name
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border border-gray-200 shadow-md p-5 grid gap-y-2 mx-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "font-semibold",
        dangerouslySetInnerHTML: { __html: item.name }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        dangerouslySetInnerHTML: { __html: item.description }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-x-6 justify-center lg:justify-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.execlink,
          target: "_blank",
          className: "rounded-full overflow-hidden",
          onClick: () => logNotebookClick(item, "show_binder"),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "./images/common/play.svg",
              title: "Load Notebook with Binder",
              alt: "",
              className: "w-8"
            }
          )
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.codelink,
          target: "_blank",
          className: "rounded-full overflow-hidden",
          onClick: () => logNotebookClick(item, "show_source"),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: "./images/common/git.png",
              title: "Show Notebook Source Code From GIT",
              alt: "",
              className: "w-8"
            }
          )
        }
      )
    ] })
  ] }) });
};
const CarouselCard = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4e3, min: 3e3 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3e3, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    Carousel,
    {
      className: " w-full m-auto pb-7 pt-2",
      responsive,
      arrows: true,
      renderButtonGroupOutside: true,
      containerClass: "carousel-container science-slider",
      showDots: true,
      renderDotsOutside: true,
      children: props.itemList.map((item, ind) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsx(CategoryCard, { item }, ind);
      })
    }
  ) });
};
const ParFlowCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 text-center", children: [
    item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-primary font-bold block md:hidden text-2xl mb-2`,
        dangerouslySetInnerHTML: { __html: item.title }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto rounded-full p-8 bg-bgf inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.link || "", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-28", src: item.image, alt: "images" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-80 hidden md:block", children: [
      item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-primary font-bold text-2xl m-auto`,
          dangerouslySetInnerHTML: { __html: item.title }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `mt-2`,
          dangerouslySetInnerHTML: { __html: item.description }
        }
      )
    ] })
  ] }) });
};
function SubsettingPythonTools() {
  const [categoryList, setCategoryList] = reactExports.useState([]);
  const fetchCategory = () => {
    fetch("./json/website-notebooks.json").then((response) => {
      return response.json();
    }).then((data) => {
      setCategoryList(data);
    }).catch((e2) => {
      console.log(e2.message);
    });
  };
  reactExports.useEffect(() => {
    fetchCategory();
  }, []);
  const [shortCourses] = reactExports.useState([
    {
      title: "Subsetting Using HydroFrame and HydroData",
      image: "/images/parflow-resources/Notebook.png",
      description: "",
      link: "https://github.com/hydroframe/Subsetting_ShortCourse"
    }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "SubsetTools",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 py-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: "The SubsetTools python package is a set of tools to help users subset inputs and outputs from the national ParFlow simulations (PFCONUS1.0 and PFCONUS2.0) and build their own watershed models. You can use SubsetTools to clip any inputs from the national framework for a domain of interest. There are also functions to adapt run scripts from the national simulation to a smaller domain, and example workflows show you how to develop a full steady state or transient simulation from the national framework. Example workflows are provided for both CONUS1 and CONUS2 model frameworks." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold pb-5 ", children: "Usage and Installation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "The SubsetTools package relies on datasets in the HydroData catalog. Before using the SubsetTools you will first need to",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://hydrogen.princeton.edu/signup?origin=hydroframe",
              children: [
                " ",
                "sign up for an account",
                " "
              ]
            }
          ),
          "with the HydroFrame project and",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://hydrogen.princeton.edu/pin?origin=hydroframe",
              children: [
                " ",
                "get a pin"
              ]
            }
          ),
          ".",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://hydroframesubsettools.readthedocs.io/en/latest/getting_started.html",
              children: [
                " ",
                "View the quick start guide",
                " "
              ]
            }
          ),
          "Instructions for getting signed up can be found."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "SubsetTools can be installed in a python virtual environment with pip:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border border-gray-400 py-2 px-3 inline-block overflow-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gray-800 whitespace-pre-line break-word inline-block w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "whitespace-nowrap", children: "$ pip install subsettools" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0 lg:mt-10 grid gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full justify-center lg:justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "inline-block font-medium px-8 py-4 lg:px-8 lg:py-4 bg-primary text-white uppercase",
            href: "https://hydroframesubsettools.readthedocs.io/en/latest/",
            rel: "noreferrer",
            target: "_blank",
            children: "READ THE DOCUMENTATION"
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-2", children: "Notebooks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:gap-7", children: categoryList.filter((item) => {
          return item.section === "subsettools";
        }).map((item) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xl lg:text-2xl mb-2 font-semibold", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 grid grid-cols-1 gap-x-8 justify-center relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CarouselCard,
              {
                itemList: item.list
              }
            ) })
          ] }, item.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Triplett et al., (2024).  ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "break-word text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://doi.org/10.21105/joss.06752",
              children: "SubsetTools: A Python package to subset data to build and run ParFlow hydrologic models."
            }
          ),
          "  Journal of Open Source Software, 9(99), 6752."
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Short Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto pb-5 gap-16", children: "We teach a subsetting short course for new users. To be informed on upcoming short courses please join the HydroFrame mailing list. In the meantime you can get started with the resources from previous short courses:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-10 lg:gap-10", children: shortCourses.map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ParFlowCard, { item }, ind);
        }) })
      ] })
    ] })
  ] });
}
const ParflowConusCard = ({
  item
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-primary font-bold block lg:hidden text-2xl mb-5`,
        dangerouslySetInnerHTML: { __html: item.title }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:w-[50%] float-left mb-5 lg:mr-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shadow-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full", src: item.image, alt: "images" }) }),
      item.caption && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "pt-2 text-sm",
          dangerouslySetInnerHTML: { __html: item.caption }
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-justify", children: [
      item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-primary font-bold hidden lg:block text-3xl mb-5`,
          dangerouslySetInnerHTML: { __html: item.title }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          dangerouslySetInnerHTML: { __html: item.description }
        }
      )
    ] })
  ] }) });
};
function ParflowResources() {
  const [cardList1] = reactExports.useState([
    {
      title: "About ParFlow",
      image: "./images/parflow-resources/parflow-hydroframe.png",
      caption: `<i>Conceptual illustration of the ParFlow-CLM model (Figure from <a href="https://www.science.org/doi/10.1126/science.aaf7891" class="text-primary" target="_blank">Maxwell and Condon (2016)</a> supplementary information)</i>`,
      description: `<div>ParFlow is a numerical model that simulates the hydrologic cycle from the bedrock to the top of the plant canopy. It integrates three-dimensional groundwater flow with overland flow and plant processes using physically-based equations to rigorously simulate fluxes of water and energy in complex real-world systems. You can <a class="text-primary font-bold" rel="noreferrer" target="_blank" href="https://parflow.org/"> learn more about the ParFlow model and how it works here</a>.</div>
                <div class="mt-5">ParFlow is a computationally advanced model that can run on laptops and supercomputers and has been used in hundreds of studies evaluating hydrologic processes from the hillslope to the continental scale.</div>`
    }
  ]);
  const [toolsList] = reactExports.useState([
    {
      title: "PF Tools",
      image: "/images/parflow-resources/Screwdriver.png",
      description: "A set of tools for pre and post processing ParFlow model results",
      link: "https://parflow.readthedocs.io/en/latest/python/getting_started.html"
    },
    {
      title: "SubsetTools",
      image: "/images/parflow-resources/Gears.png",
      description: "Tools for building watershed models from the National Framework",
      link: "https://hydroframesubsettools.readthedocs.io/en/latest/"
    }
  ]);
  const [shortCourses] = reactExports.useState([
    {
      title: "Basic TCL Based",
      image: "/images/parflow-resources/Notebook.png",
      description: "",
      link: "https://github.com/hydroframe/ParFlow_Short_Course"
    },
    {
      title: "Advanced TCL Based",
      image: "/images/parflow-resources/Notebook.png",
      description: "",
      link: "https://github.com/hydroframe/ParFlow_Advanced_ShortCourse"
    },
    {
      title: "Python Based (2022)",
      image: "/images/parflow-resources/Notebook.png",
      description: "",
      link: "https://github.com/hydroframe/parflow_python_shortcourse"
    },
    {
      title: "Python Based (2024)",
      image: "/images/parflow-resources/Notebook.png",
      description: "",
      link: "https://github.com/hydroframe/parflow_short_course_updated"
    }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "ParFlow Resources",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-8 lg:gap-14 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-10 lg:gap-12 grid", children: cardList1.map(
          (item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ParflowConusCard,
            {
              item
            },
            ind + "pr"
          )
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 gap-16 md:grid-cols-1", children: "This page provides a centralized set of tools for interacting with and learning more about ParFlow. ParFlow is an open source model. The source code and and user manual (linked below) provide the most complete documentation for the code. In addition we provide links here for tools that can make it easier to build and evaluate ParFlow models as well as short course teaching materials." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:flex place-content-center gap-5 lg:gap-x-10 mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "https://github.com/parflow/parflow",
              className: "inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover",
              type: "submit",
              target: "_blank",
              children: "SOURCE CODE"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "https://parflow.readthedocs.io/en/latest/index.html",
              className: "inline-block font-medium px-8 py-4 lg:px-16 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover",
              type: "submit",
              target: "_blank",
              children: "USER MANUAL"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-5", children: "Tools for interacting with ParFlow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-10 lg:gap-20 md:flex-row justify-center", children: toolsList.map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ParFlowCard, { item }, ind + "tip");
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Short Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto pb-5 gap-16", children: "We teach ParFlow short courses for new users. To be informed on upcoming short courses please join the ParFlow mailing list. In the meantime you can get started with the resources from previous short courses:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-10 lg:gap-10", children: shortCourses.map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ParFlowCard, { item }, ind);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-5", children: "Mailing List" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "m-auto gap-16 ", children: [
          "Become a part of our mailing list to stay up to date on the most recent version of ParFlow, and to receive regular updates on resources!",
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-medium", children: [
            "Send an email to ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "mailto:parflow@googlegroups.com",
                className: "text-primary",
                children: "parflow@googlegroups.com"
              }
            ),
            "  with the subject “Subscribe” to join!"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Hydrodata() {
  const [categoryList, setCategoryList] = reactExports.useState([]);
  const fetchCategory = () => {
    fetch("./json/website-notebooks.json").then((response) => {
      return response.json();
    }).then((data) => {
      setCategoryList(data);
    }).catch((e2) => {
      console.log(e2.message);
    });
  };
  reactExports.useEffect(() => {
    fetchCategory();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "HydroData",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid mb-5 ", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-inside", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "mt-5 text-primary text-2xl sm:text-4xl font-bold", children: "HydroData is a repository of hydrologic observations, watershed characteristics and model simulations for the contiguous US." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "mt-5", children: [
            "Our repository includes well data, stream gages and flux towers from national observation networks. All observation data is updated weekly and pre-processed for consistency.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "The model inputs and outputs from the ParFlow CONUS model include a complete geospatial watershed fabric (e.g. hydrogeology, topography, river networks and land cover) as well as simulation outputs of groundwater, surface water and land energy fluxes. To learn more about the ParFlow CONUS models refer to the pages on",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "text-primary font-bold",
                to: "/parflow-conus1",
                children: [
                  " ",
                  "ParFlow CONUS1"
                ]
              }
            ),
            " ",
            "and",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "text-primary font-bold",
                to: "/parflow-conus2",
                children: [
                  " ",
                  "ParFlow CONUS2"
                ]
              }
            ),
            "."
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold pb-5 mt-10", children: "Usage and Installation" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
          "Access to all datasets in the HydroData catalog is available via API. Users can download up to 10GB per month of data from the catalog. Please refer to our data policy for additional details on appropriate data usage and limitations.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "To use the API you will first need to",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://hydrogen.princeton.edu/signup?origin=hydroframe",
              children: [
                " ",
                "sign up for an account",
                " "
              ]
            }
          ),
          "with the HydroFrame project and",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://hydrogen.princeton.edu/pin?origin=hydroframe",
              children: [
                " ",
                "get a pin"
              ]
            }
          ),
          ".",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://hf-hydrodata.readthedocs.io/en/latest/getting_started.html#creating-a-hydrogen-api-account",
              children: [
                " ",
                "View the quick start guide",
                " "
              ]
            }
          ),
          "to access instructions to assist you with the sign up process.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://hf-hydrodata.readthedocs.io/en/latest/available_data.html",
              children: "Access the documentation page"
            }
          ),
          " ",
          "to browse all available datasets and variables in the data catalog. We have also created a python package to make it easy to interact with and subset both gridded and point datasets."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 mb-5 lg:mb-10 grid gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border lg:border-0 border-gray-400 inline-block overflow-auto w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "border-0 lg:border border-gray-400 text-gray-800 whitespace-pre-line break-word inline-block py-2 px-3 w-full lg:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "whitespace-nowrap", children: "$ pip install hf_hydrodata" }) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0 lg:mt-10 grid gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-full justify-center lg:justify-start", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "inline-block px-8 py-4 lg:px-8 lg:py-4 bg-primary font-medium text-white uppercase",
            href: "https://hf-hydrodata.readthedocs.io/en/latest",
            rel: "noreferrer",
            target: "_blank",
            children: "READ THE DOCUMENTATION"
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-2", children: "Notebooks" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 lg:gap-7", children: categoryList.filter((item) => {
          return item.section === "hf_hydrodata";
        }).map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xl lg:text-2xl mb-2 font-semibold", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 grid grid-cols-1 gap-x-8 justify-center relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              CarouselCard,
              {
                itemList: item.list
              }
            ) })
          ] }, item.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Recommended Citations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " ", children: "Please acknowledge the HydroFrame project if you use our tools and make sure to cite any of the datasets that you use. Citations are included in the metadata of all datasets, please refer to the example scripts for details on how to access the citations." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
          "Defnet et al., (2024).  ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "break-word text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://joss.theoj.org/papers/10.21105/joss.06623",
              children: "hf_hydrodata: A Python package for accessing hydrologic simulations and observations across the United States"
            }
          ),
          "  Journal of Open Source Software, 9(99), 6623"
        ] }) }) })
      ] })
    ] })
  ] });
}
const CommonCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
    item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-primary font-bold block lg:hidden text-2xl mb-5`,
        dangerouslySetInnerHTML: { __html: item.title }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-[50%] float-left mb-5 lg:mr-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full ", src: item.image, alt: "images" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-justify", children: [
      item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-primary font-bold hidden lg:block text-3xl mb-5`,
          dangerouslySetInnerHTML: { __html: item.title }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: ``,
          dangerouslySetInnerHTML: { __html: item.description }
        }
      )
    ] })
  ] }) });
};
const ResourcesCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5   pb-5 grid gap-y-", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: item.link || "", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full", src: item.image, alt: "images" }) }) }) }) });
};
const SandtankCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
    item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `text-primary font-bold block lg:hidden text-2xl mb-5`,
        dangerouslySetInnerHTML: { __html: item.title }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full lg:w-[50%] float-left mb-5 lg:mr-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full", src: item.image, alt: "images" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-justify", children: [
      item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-primary font-bold hidden lg:block lg:text-3xl mb-5 text-left`,
          dangerouslySetInnerHTML: { __html: item.title }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `mb-2`,
          dangerouslySetInnerHTML: { __html: item.description }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left", children: item.buttonTitle && /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: item.buttonLink || "",
          className: "inline-block font-medium items-center bg-primary hover:bg-secondaryHover transition-colors text-white px-10 py-3.5 uppercase mt-5",
          type: "submit",
          children: item.buttonTitle
        }
      ) })
    ] })
  ] }) });
};
function ParflowSandtankModel() {
  const [community] = reactExports.useState([
    {
      title: "Community education and engagement is a priority",
      image: "./images/parFlow-sandtank-model/community-education-hydroframe.png",
      description: `<div>Our project team develops free educational tools and resources to support a variety of users who want to learn and teach about hydrology, modeling and more! Please visit all of the Educational Tools pages to discover our collection of resources.</div>
                <div class="mt-2">
                    Groundwater plays an integral role in the hydrologic cycle
                    but is difficult to see, and therefore often misunderstood
                    or ignored. The
                    <span class="font-bold">ParFlow Sandtank</span> is an
                    online simulation tool that lets users interactively
                    simulate and visualize groundwater movement through a
                    virtual slice of the subsurface. Users can adjust
                    groundwater levels, change subsurface properties, pump
                    groundwater and add pollutants then watch the system
                    respond in real time.
                </div>`
    }
  ]);
  const [cardList] = reactExports.useState([
    {
      title: "Agrosystem Template",
      image: "./images/parFlow-sandtank-model/agrosystem-template-hydroframe.png",
      description: `<div>This is an advanced ParFlow Sandtank template with enhanced capabilities to explore topics like climate change and sustainable agriculture practices.<div>
                <div class="mt-3"><i>Developed by Sara Cerasoli, Princeton University</i></div>`,
      buttonTitle: "START THE MODULE",
      buttonLink: "https://sandtank.hydroframe.org/?name=agrosystem"
    },
    {
      title: "Hillslope Template",
      image: "./images/parFlow-sandtank-model/hillslope-template-hydroframe.png",
      description: `<div>The hillslope template is a variation of the ParFlow Sandtank model that allows users to explore subsurface hydrology using a simplified hillslope model.</div>
                <div class="mt-3"><i>Developed by Abe Farley, University of Arizona</i></div>`,
      buttonTitle: "START THE MODULE",
      buttonLink: "https://sandtank.hydroframe.org/?name=hillslope"
    },
    {
      title: "Tucson-TCE Template",
      image: "./images/parFlow-sandtank-model/tucson-template-hydroframe.png",
      description: `<div>This is a location-specific template that models subsurface conditions in Tucson, AZ. Users can model real environmental scenarios that impact Tucson’s groundwater supply.</div>
                <div class="mt-3"><i>Developed by Abe Farley, University of Arizona</i></div>`,
      buttonTitle: "START THE MODULE",
      buttonLink: "https://sandtank.hydroframe.org/?name=tucson_tce"
    }
  ]);
  const [resourcesList] = reactExports.useState([
    {
      image: "./images/parFlow-sandtank-model/resources-1-hydroframe.png",
      link: "https://vimeo.com/398697315"
    },
    {
      image: "./images/parFlow-sandtank-model/resources-2-hydroframe.png",
      link: "https://vimeo.com/413761989"
    }
  ]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4e3, min: 3e3 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3e3, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "ParFlow Sandtank Model",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 lg:gap-12 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-10 lg:gap-12 grid", children: community.map((item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(CommonCard, { item }, ind + "psm")) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:flex place-content-center gap-5 lg:gap-x-10 mt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "https://sandtank.hydroframe.org/",
              className: "inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover",
              type: "submit",
              target: "_blank",
              children: "EXPLORE PARFLOW SANDTANK"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "https://hydroframe.github.io/SandTank/manual/",
              className: "inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover",
              type: "submit",
              target: "_blank",
              children: "SANDTANK MANUAL"
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-5", children: "ParFlow Sandtank in action" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Physical aquifer models are a highly effective teaching tool, but come with inherent limitations. Our motivation for developing the ParFlow Sandtank was to create an educational tool that could be used to achieve the same instructional goals as the physical model, while reducing limitations and increasing accessibility. The ParFlow Sandtank has been used in a variety of educational settings with more than 32,000 users to date." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row justify-center gap-16 mt-10 relative mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              className: "w-full lg:w-1/2 shadow-lg",
              src: "./images/parFlow-sandtank-model/parFlow-sandtank-in-action-hydroframe.JPEG",
              role: "presentation",
              alt: ""
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center lg:justify-start lg:items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "parflow-tip relative bg-bgc px-12 lg:px-20 py-4 lg:py-5 rounded-xl text-center flex flex-col gap-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-6xl font-bold text-primary", children: ">32,000" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg italic text-textFourth font-medium", children: "Users to date" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: "./images/parFlow-sandtank-model/users.png",
                className: "w-20 md:w-24 m-auto",
                role: "presentation",
                alt: ""
              }
            ) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-5", children: "Templates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          "The ParFlow Sandtank allows users to develop customized templates in addition to the available default template by adjusting input files or developing new ones. Features such as topography, well placements, initial conditions, subsurface configuration and various visual components may be altered. Detailed instructions on how to develop and contribute templates can be found on our",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              className: "text-primary font-bold",
              to: "https://hydroframe.github.io/SandTank/docs/contributing.html",
              target: "_blank",
              rel: "noreferrer",
              children: "GitHub"
            }
          ),
          ". Examples of these customized templates can be found below."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-14 mt-10", children: cardList.map((item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(SandtankCard, { item }, ind + "tmp")) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-3", children: "Resources" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", children: "Please explore the available resources below and check back regularly for new additions!" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 grid grid-cols-1 gap-x-8 justify-center relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Carousel,
          {
            className: "w-[calc(100%)] m-auto",
            responsive,
            arrows: true,
            renderButtonGroupOutside: true,
            containerClass: "carousel-container science-slider",
            showDots: true,
            renderDotsOutside: true,
            children: resourcesList.map((item, ind) => {
              return /* @__PURE__ */ jsxRuntimeExports.jsx(ResourcesCard, { item }, ind);
            })
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-5", children: "Citations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Condon, LE, A Farley, S Jourdain, P O’leary, P Avery, L Gallagher, C Chennault, RM Maxwell (2023).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "text-primary font-bold",
                target: "blank",
                rel: "noreferrer",
                href: "https://jose.theoj.org/papers/10.21105/jose.00179",
                children: "ParFlow Sand Tank: A tool for groundwater exploration."
              }
            ),
            "  Journal of Open Source Education. 6(61), 179."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Gallagher, LK, AJ Farley, C Chennault, S Cerasoli, S Jourdain, P O’Leary, LE Condon & RM Maxwell (2022).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "text-primary font-bold",
                target: "blank",
                rel: "noreferrer",
                href: "https://www.frontiersin.org/journals/water/articles/10.3389/frwa.2022.909918/full",
                children: "The ParFlow Sandtank: An Interactive educational tool making invisible groundwater visible."
              }
            ),
            "  Frontiers in Water. 4."
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
const SandTankUserManual = () => {
  window.location.replace("https://hydroframe.github.io/SandTank/manual");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Redirect" });
};
function SandtankMl() {
  const [community] = reactExports.useState([
    {
      title: "Community education and engagement is a priority",
      image: "./images/sandtankMl/community-hydroframe.jpg",
      description: `<div>Our project team develops free educational tools and resources to support a variety of users who want to learn and teach about hydrology, modeling and more! Please visit all of the Educational Tools pages to discover our collection of resources.</div>
                <div class="my-5">
                    Sandtank ML builds upon an already existing educational tool
                    created by members of our research team - the ParFlow Sandtank,
                    an interactive computer simulation of a physical aquifer model.
                    Using the output of the ParFlow Sandtank as the prediction goal,
                    Sandtank ML allows users to run various machine learning (ML)
                    models and manipulate training sets and other components to
                    explore how particular decisions impact model accuracy. The goal
                    of the application is to help users gain an understanding of
                    basic ML approaches and processes, as well as understanding the
                    way ML can be leveraged in hydrology.
                </div>`
    }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "Sandtank ML",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 lg:gap-12 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-10 lg:gap-12 grid", children: community.map(
          (item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CommonCard,
            {
              item
            },
            ind + "sml"
          )
        ) }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex  justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            className: "inline-block px-8 py-4 lg:px-8 lg:py-4 bg-primary text-white font-medium uppercase transition-colors hover:bg-secondaryHover",
            href: "https://sandtank-ml.hydroframe.org/",
            rel: "noreferrer",
            target: "_blank",
            children: "EXPLORE SANDTANK ML"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: " text-primary text-2xl sm:text-4xl font-bold pb-5", children: "Citations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
          "Gallagher, LK, JM Williams, D Lazzeri, C Chennault, S Jourdain, P O’Leary, LE Condon and RM Maxwell (2021). Sandtank-ML: An Educational Tool at the Interface of Hydrology and Machine Learning. Water. 13, 3328.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              href: "https://doi.org/10.3390/w13233328",
              children: "https://doi.org/10.3390/w13233328"
            }
          ),
          "."
        ] }) })
      ] }) })
    ] })
  ] });
}
const OtherToolsEducationalCard = ({ item }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12", children: [
    item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: `col-span-1 text-primary font-bold block lg:hidden text-xl`,
        dangerouslySetInnerHTML: { __html: item.title }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1 md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { className: "w-full", src: item.image, alt: "images" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "col-span-1 md:col-span-7", children: [
      item.title && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: `text-primary font-bold hidden lg:block lg:text-3xl mb-5 text-left`,
          dangerouslySetInnerHTML: { __html: item.title }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          dangerouslySetInnerHTML: { __html: item.description }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-left", children: item.buttonTitle && item.buttonLink && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: item.buttonLink,
          className: "inline-block font-medium items-center bg-primary hover:bg-secondaryHover transition-colors text-white px-10 py-3.5 uppercase mt-5",
          rel: "noreferrer",
          target: "_blank",
          children: item.buttonTitle
        }
      ) })
    ] })
  ] }) });
};
function OtherToolsandPartners() {
  const [cardList] = reactExports.useState([
    {
      title: "DIY Soil Permeameter",
      image: "./images/other-tools-and-partners/permeameter-hydroframe.jpg",
      description: 'An online application that helps you build your own soil permeameter with materials around your home, then measure the hydraulic conductivity (how quickly water flows through the soil) of your own soil sample. You can also compare your soil samples to others and attempt the designer soil challenge!<div class="mt-5 italic">Developed by Christopher Browne, Princeton University</div> ',
      buttonTitle: "START THE MODULE",
      buttonLink: "https://diypermeameter.hydroframe.org/"
    }
  ]);
  const [cardList1] = reactExports.useState([
    {
      title: "Integrated GroundWater Modeling Center",
      image: "./images/other-tools-and-partners/educational-partners-hydroframe.png",
      description: "The Integrated GroundWater Modeling Center (IGWMC) is committed to supporting a robust education and outreach program, promoting the education of students as well as community members, through STEM fairs, classroom lessons, workshops and partnerships. These community events provide our students with the opportunity to expand their skill set and experience through broad perspectives how their research is relevant to society.",
      buttonTitle: "VISIT THE WEBSITE",
      buttonLink: "https://igwmc.princeton.edu/education-and-outreach/"
    },
    {
      title: "The Watershed Institute",
      image: "./images/other-tools-and-partners/watershed-Institute-hydroframe.jpg",
      description: "The Watershed Institute is a non-profit environmental organization dedicated to protecting and restoring water and the natural environment in central New Jersey. Spanning over 950 acres of pristine land, the institute serves as a hub for environmental education, research, and advocacy. The Watershed Institute offers a variety of educational programs, workshops, and events for the community, aiming to inspire a sense of environmental stewardship.",
      buttonTitle: "VISIT THE WEBSITE",
      buttonLink: "https://thewatershed.org/"
    },
    {
      title: "Arizona Project WET",
      image: "./images/other-tools-and-partners/projectwet-hydroframe.JPEG",
      description: "Arizona Project WET is a comprehensive water education program based in Arizona and affiliated with the national Project WET Foundation. This initiative focuses on enhancing water literacy and fostering an understanding of water-related issues among educators, students, and the community. The program offers a range of water-focused educational materials, workshops, and activities designed to engage learners of all ages.",
      buttonTitle: "VISIT THE WEBSITE",
      buttonLink: "https://projectwet.arizona.edu/"
    }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "Other Tools and Partners",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-8 lg:gap-14 py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-5", children: "Other Tools" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-14", children: cardList.map((item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(OtherToolsEducationalCard, { item }, ind)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold mb-5", children: "Educational Partners" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-14", children: cardList1.map((item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(OtherToolsEducationalCard, { item }, ind)) })
      ] })
    ] })
  ] });
}
function ShortCourses() {
  const [PFshortCourses] = reactExports.useState([
    {
      title: "Basic TCL Based",
      image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/parflow-resources/Notebook.png`,
      description: "",
      link: "https://github.com/hydroframe/ParFlow_Short_Course"
    },
    {
      title: "Advanced TCL Based",
      image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/parflow-resources/Notebook.png`,
      description: "",
      link: "https://github.com/hydroframe/ParFlow_Advanced_ShortCourse"
    },
    {
      title: "Python Based (2022)",
      image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/parflow-resources/Notebook.png`,
      description: "",
      link: "https://github.com/hydroframe/parflow_python_shortcourse"
    },
    {
      title: "Python Based (2024)",
      image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/parflow-resources/Notebook.png`,
      description: "",
      link: "https://github.com/hydroframe/parflow_short_course_updated"
    }
  ]);
  const [SubsetShortCourses] = reactExports.useState([
    {
      title: "Subsetting Using HydroFrame and HydroData",
      image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/parflow-resources/Notebook.png`,
      description: "",
      link: "https://github.com/hydroframe/Subsetting_ShortCourse"
    }
  ]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "Short Courses",
          description: "",
          image: `${"https://bhasling.github.io/hydroframe_demo/"}/images/three-line-swoosh.svg`
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 py-5 lg:py-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "ParFlow Short Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto pb-5 gap-16", children: "We teach ParFlow short courses for new users. To be informed on upcoming short courses please join the ParFlow mailing list. In the meantime you can get started with the resources from previous short courses:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-10 lg:gap-10", children: PFshortCourses.map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ParFlowCard, { item }, ind);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Subsetting Short Courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto pb-5 gap-16", children: "We teach a subsetting short course for new users. To be informed on upcoming short courses please join the HydroFrame mailing list. In the meantime you can get started with the resources from previous short courses:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap justify-center gap-10 lg:gap-10", children: SubsetShortCourses.map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(ParFlowCard, { item }, ind);
        }) })
      ] })
    ] })
  ] });
}
function ParFlowCONUS1() {
  const [cardList1] = reactExports.useState([
    {
      title: "ParFlow CONUS1.0 Model",
      image: "./images/parflow-conus-1.0/parflow-conus-1.0.png",
      caption: `<i>Steady state groundwater depth simulated by the ParFlow CONUS1.0 model (Figure from <a class="text-primary" href="https://gmd.copernicus.org/articles/8/923/2015/gmd-8-923-2015.html" target="_blank">Maxwell et al (2015)</a>)</i>`,
      description: `<div>The ParFlow CONUS1.0 model is the first version of the national ParFlow-CLM model. It was developed to model groundwater, surface water and land energy fluxes across the contiguous US, and at the time it was the first national model of the US to incorporate lateral groundwater flow.The model covers 6.2 million square kilometers encompassing the majority of the contiguous United States.</div>
                <div class="mt-5">The model extends from the bedrock to the treetops and is unique from other large scale modeling approaches because ParFlow simulates 3D variably saturated flow in the subsurface. You can <a class="text-primary font-bold" href="/parflow-resources">learn more about the ParFlow model here.</a></div>`
    }
  ]);
  const [categoryList, setCategoryList] = reactExports.useState([]);
  const fetchCategory = () => {
    fetch("./json/website-notebooks.json").then((response) => {
      return response.json();
    }).then((data) => {
      setCategoryList(data);
    }).catch((e2) => {
      console.log(e2.message);
    });
  };
  reactExports.useEffect(() => {
    fetchCategory();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "ParFlow CONUS1.0",
          description: "",
          image: ""
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-y-5 lg:gap-y-12 my-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-10 lg:gap-12 grid", children: cardList1.map(
          (item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ParflowConusCard,
            {
              item
            },
            ind + "conus1"
          )
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gap-16 md:grid-cols-1", children: "The CONUS1 model has been used in a number of studies to quantify groundwater-surface water interactions and watershed behaviors across the country. Initial work with the model focused on a steady state groundwater configuration. This is essentially our best estimate of modern undeveloped groundwater levels based on long term average recharge rates (Refer to the steady state publication list for more information)." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "gap-16 md:grid-cols-1 mt-5", children: "Building from this work, we completed a series of transient simulations that use hourly meteorological forcing data to drive dynamic hydrologic conditions. We completed a series of transient simulations using water year 1985 as a baseline and considering the impact of both groundwater pumping and climate warming. In addition we completed a modern simulation of water years 2002-2005 (Refer to the transient publication list for more information)." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "How to get access to the model" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-16 md:grid-cols-1 mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "The complete model configuration including all input files and run scripts as well as many of the national outputs for the baseline simulations are archived on the HydroData catalog." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              to: "https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_domain.html",
              children: "conus1_domain dataset"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              to: "https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_baseline_85.html",
              children: "conus1_baseline_85 dataset"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              className: "text-primary font-bold",
              rel: "noreferrer",
              target: "_blank",
              to: "https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_baseline_mod.html",
              children: "conus1_baseline_mod dataset"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            "To access all datasets using the gridded data tools",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "text-primary font-bold",
                to: "https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_domain.html",
                target: "_blank",
                children: "explore the HydroData Catalog"
              }
            ),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "text-primary font-bold",
                to: "/subsettools",
                children: "Use the Subset Tools Package"
              }
            ),
            " to create your own ParFlow model using the national model as a starting point."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Notebooks" }),
        categoryList.filter((item) => {
          return item.section === "parflow_conus1";
        }).map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xl lg:text-2xl mb-2 font-semibold", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 grid grid-cols-1 gap-x-8 justify-center relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselCard, { itemList: item.list }) })
          ] }, item.title);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Steady State Simulation Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Condon, LE, AS Hering and RM Maxwell (2015).",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://www.sciencedirect.com/science/article/abs/pii/S0309170815000822",
                children: " Quantitative assessment of groundwater controls across major US river basins using a multi-model regression algorithm. "
              }
            ),
            "Advances in Water Resources. 82, 106-123."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Condon, LE and RM Maxwell (2015).",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014WR016774",
                children: " Evaluating the relationship between topography and groundwater using outputs from a continental-scale integrated hydrology model. "
              }
            ),
            "Water Resources Research. (51)8: 6602-6621."
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Transient Simulation Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "O’Neill, MMF, DT Tijerina, LE Condon, and RM Maxwell (2021).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://gmd.copernicus.org/articles/14/7223/2021/",
                children: "Assessment of the ParFlow–CLM CONUS 1.0 Integrated Hydrologic Model: Evaluation of Hyper-Resolution Water Balance Components across the Contiguous United States."
              }
            ),
            "  Geoscientific Model Development 14, no. 12: 7223–54."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Tijerina, D, LE Condon, K FitzGerald, A Dugger, MM O’Neil, K Sampson, D Gochis and RM Maxwell (2021).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020WR028931",
                children: "Continental Hydrologic Intercomparison Project, Phase 1: A Large-Scale Hydrologic Model Comparison Over the Continental United States."
              }
            ),
            "  Water Resources Research. 57, e2020WR028931"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Condon, LE, AL Atchley and RM Maxwell (2020).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://www.nature.com/articles/s41467-020-14688-0",
                children: "Evapotranspiration depletes groundwater under warming over the contiguous United States."
              }
            ),
            "  Nature Communications, 11(873)."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Condon, LE and RM Maxwell (2019).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://www.science.org/doi/10.1126/sciadv.aav4574",
                children: "Simulating the sensitivity of evapotranspiration and streamflow to large-scale groundwater depletion."
              }
            ),
            "  Science Advances, 5(6): eaav4574."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Condon, LE and RM Maxwell (2017).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://hess.copernicus.org/articles/21/1117/2017/",
                children: "Systematic shifts in Budyko relationships caused by groundwater storage changes. Hydrology and Earth."
              }
            ),
            "  System Sciences. 21(2): p. 1117-1135, doi:10.5194/hess-21-1117-2017"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "Maxwell, RM and LE Condon (2016).  ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                className: "break-word text-primary font-bold",
                rel: "noreferrer",
                target: "_blank",
                href: "https://www.science.org/doi/10.1126/science.aaf7891",
                children: "Connections between groundwater flow and transpiration partitioning."
              }
            ),
            "  Science, 353(6297):377-380 doi:10.1126/science.aaf7891."
          ] })
        ] }) })
      ] })
    ] })
  ] });
}
function ParFlowCONUS2() {
  const [cardList1] = reactExports.useState([
    {
      title: "ParFlow CONUS2.0 Model",
      image: "./images/parflow-conus-2.0/parflow-conus-2.0.png",
      caption: `<i>Steady state water table depth map for the CONUS2.0 model (<a class="text-primary" target="_blank" href="https://www.sciencedirect.com/science/article/pii/S0022169423012362?via%3Dihub">Yang et al. 2023</a>)</i>`,
      description: `The ParFlow CONUS2.0 model is the second generation national ParFLow model. It is a significant update from the CONUS1.0 model. Almost every model input field has been improved in some way from the first generation to the second generation model. The new model differs significantly from the CONUS1.0 model in the following ways.`
    }
  ]);
  const [categoryList, setCategoryList] = reactExports.useState([]);
  const fetchCategory = () => {
    fetch("./json/website-notebooks.json").then((response) => {
      return response.json();
    }).then((data) => {
      setCategoryList(data);
    }).catch((e2) => {
      console.log(e2.message);
    });
  };
  reactExports.useEffect(() => {
    fetchCategory();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroSection,
      {
        item: {
          title: "ParFlow CONUS2.0",
          description: "",
          image: "./images/three-line-swoosh.svg"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-y-5 lg:gap-y-12 my-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "m-auto gap-10 lg:gap-12 grid", children: cardList1.map(
          (item, ind) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ParflowConusCard,
            {
              item
            },
            ind + "psm"
          )
        ) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-16 md:grid-cols-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "", children: "The spatial extent of the domain was expanded from the original CONUS1 box domain to cover the entire contiguous US and areas draining to it (This expanded the surface area of the domain to 7.8 million square km)." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "", children: "The number of vertical layers in the model was increased from 5 to 10 and the vertical extent of the model was extended from 102m to 392m." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
              "The domain is aligned with the US National Water Model and the topography was re-processed match drainage basin areas, proceses local sinks and internally draining basins and to improve the spatial consistency of the stream network (Refer to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  className: "text-primary font-bold",
                  target: "blank",
                  rel: "noreferrer",
                  to: "https://essd.copernicus.org/articles/13/3263/2021/essd-13-3263-2021.html",
                  children: "Zhang et al. (2021)"
                }
              ),
              ")."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
              "A 3D continental hydrostratigraphic model was developed from scratch to include vertical complexity and a flow barrier was used to enable confined and unconfined aquifers. The final configuration was chosen from 80 possible domains which were tested in two watersheds (Refer to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  className: "text-primary font-bold",
                  target: "blank",
                  rel: "noreferrer",
                  to: "https://doi.org/10.1111/gwat.13357",
                  children: "Tijerina-Kreuzer et al. (2023)"
                }
              ),
              " ",
              "and",
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  className: "text-primary font-bold",
                  target: "blank",
                  rel: "noreferrer",
                  to: "https://doi.org/10.1111/gwat.13354",
                  children: [
                    " ",
                    "Swilley et al. (2023)"
                  ]
                }
              ),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "For complete details of the new domain refer to",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "text-primary font-bold",
              target: "blank",
              rel: "noreferrer",
              href: "https://doi.org/10.1016/j.jhydrol.2023.130294",
              children: "Yang et al. (2023)"
            }
          ),
          " ",
          "documentation of the CONUS2.0 steady state simulation. Transient simulations are in progress for the CONUS2.0 domain and will be released here when they are available."
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "How to get access to the model" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "gap-16 md:grid-cols-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1", children: [
            "The complete model configuration including all input files and run scripts are archived on the HydroData catalog in the",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "text-primary font-bold",
                target: "blank",
                rel: "noreferrer",
                to: "https://hf-hydrodata.readthedocs.io/en/latest/gen_conus2_domain.html",
                children: [
                  " ",
                  "conus2_domain dataset."
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            "To access all datasets using the gridded data tools",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "text-primary font-bold",
                to: "https://hf-hydrodata.readthedocs.io/en/latest/gen_conus1_domain.html",
                target: "_blank",
                children: "explore the HydroData Catalog"
              }
            ),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                className: "text-primary font-bold",
                to: "/subsettools",
                children: "Use the Subset Tools Package"
              }
            ),
            " to create your own ParFlow model using the national model as a starting point."
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Notebooks using subset tools to build a model from CONUS2:" }),
        categoryList.filter((item) => {
          return item.section === "parflow_conus2";
        }).map((item, ind) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-xl lg:text-2xl mb-2 font-semibold", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-12 grid grid-cols-1 gap-x-8 justify-center relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselCard, { itemList: item.list }) })
          ] }, item.title);
        })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Model Development Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
            "Tijerina-Kreuzer, D, JS Swilley, HV Tran, J Zhang, B West, C Yang, LE Condon, and RM Maxwell (2023).",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "text-primary font-bold",
                target: "blank",
                rel: "noreferrer",
                to: "https://doi.org/10.1111/gwat.13357",
                children: [
                  " ",
                  "Continental Scale Hydrostratigraphy: Basin-Scale Testing of Alternative Data-Driven Approaches.",
                  " "
                ]
              }
            ),
            "Groundwater. 28 September 2023."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
            "Swilley, JS, D Tijerina-Kreuzer, HV Tran, J Zhang, C Yang, LE Condon and RM Maxwell (2023).",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "text-primary font-bold",
                target: "blank",
                rel: "noreferrer",
                to: "https://doi.org/10.1111/gwat.13354",
                children: [
                  " ",
                  "Continental Scale Hydrostratigraphy: Comparing Geologically Informed Data Products to Analytical Solutions. Groundwater.",
                  " "
                ]
              }
            ),
            "15 September 2023."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
            "Zhang, J, LE Condon, H Tran and RM Maxwell (2021).",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                className: "text-primary font-bold",
                target: "blank",
                rel: "noreferrer",
                to: "https://essd.copernicus.org/articles/13/3263/2021/essd-13-3263-2021.html",
                children: [
                  " ",
                  "A National topographic dataset for hydrological modeling over the contiguous United States, Earth System Science data.",
                  " "
                ]
              }
            ),
            "Earth Syst. Sci. Data. 13, 3263–3279."
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Steady State Simulation Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
          "Yang, C, DT Tijerina-Kreuzer, HV Tran, LE Condon, and RM Maxwell (2023).",
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              className: "text-primary font-bold",
              target: "blank",
              rel: "noreferrer",
              to: "https://www.sciencedirect.com/science/article/pii/S0022169423012362?via%3Dihub",
              children: [
                " ",
                "A High-Resolution, 3D Groundwater-Surface Water Simulation of the Contiguous US: Advances in the Integrated ParFlow CONUS 2.0 Modeling Platform.",
                " "
              ]
            }
          ),
          "Journal of Hydrology. 626: 130294."
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary text-2xl sm:text-4xl font-bold", children: "Other Publications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "list-disc list-outside pl-5 gap-y-5 grid", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "", children: [
          "Condon, LE and RM Maxwell (2019).  ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              className: "text-primary font-bold",
              target: "blank",
              rel: "noreferrer",
              href: "https://www.sciencedirect.com/science/article/abs/pii/S0098300418307957",
              children: "Modified priority flood and global slope enforcement algorithm for topographic processing in physically based hydrologic modeling applications."
            }
          ),
          "  Computers & Geosciences. 126:73-83."
        ] }) }) })
      ] })
    ] })
  ] });
}
const NotFound = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col md:flex-row md:flex place-content-center gap-5 lg:gap-x-10 mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-8 lg:px-36 grid gap-10 lg:gap-12 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-3xl lg:text-5xl font-bold break-words w-full !sticky !top-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Whoops!" }),
      " Page Not Found"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-block font-medium px-8 py-4 lg:px-4 lg:py-4 sm:px-8 sm:py-2 bg-primary w-80 text-white uppercase transition-colors hover:bg-secondaryHover",
        type: "submit",
        children: "Let's get you back home"
      }
    )
  ] }) }) });
};
const createRoutes = () => /* @__PURE__ */ jsxRuntimeExports.jsx(BrowserRouter, { basename: "https://bhasling.github.io/hydroframe_demo/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Routes, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}), children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Home, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/about-us", element: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutUs, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/our-team", element: /* @__PURE__ */ jsxRuntimeExports.jsx(OurTeam, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/hydrogen", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Hydrogen, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Route,
    {
      path: "/subsettools",
      element: /* @__PURE__ */ jsxRuntimeExports.jsx(SubsettingPythonTools, {})
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Route,
    {
      path: "/parflow-resources",
      element: /* @__PURE__ */ jsxRuntimeExports.jsx(ParflowResources, {})
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/hydrodata", element: /* @__PURE__ */ jsxRuntimeExports.jsx(Hydrodata, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Route,
    {
      path: "sand-tank-user-manual",
      element: /* @__PURE__ */ jsxRuntimeExports.jsx(SandTankUserManual, {})
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Route,
    {
      path: "/parflow-sandtank-model",
      element: /* @__PURE__ */ jsxRuntimeExports.jsx(ParflowSandtankModel, {})
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/sandtank-ml", element: /* @__PURE__ */ jsxRuntimeExports.jsx(SandtankMl, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Route,
    {
      path: "/other-tools-and-partners",
      element: /* @__PURE__ */ jsxRuntimeExports.jsx(OtherToolsandPartners, {})
    }
  ),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/short-courses", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ShortCourses, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/parflow-conus1", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ParFlowCONUS1, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "/parflow-conus2", element: /* @__PURE__ */ jsxRuntimeExports.jsx(ParFlowCONUS2, {}) }),
  /* @__PURE__ */ jsxRuntimeExports.jsx(Route, { path: "*", element: /* @__PURE__ */ jsxRuntimeExports.jsx(NotFound, {}) })
] }) }) });
const main = "";
const carousel_min = "";
ReactGA.initialize("G-ZD01YNXXCV");
let container;
const routes = createRoutes();
document.addEventListener("DOMContentLoaded", function() {
  if (!container) {
    container = document.getElementById("root");
    const root = createRoot(container);
    root.render(routes);
  }
});
