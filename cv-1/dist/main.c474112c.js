// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "/*\u4F60\u597D\uFF0C\u6B22\u8FCE\u6765\u5230\u524D\u7AEF\u7684\u4E16\u754C\uFF01\n*\u6211\u662FHappievening\uFF0C\u559C\u6B22\u524D\u7AEF\uFF0C\u4F60\u5462\uFF1F\n*\u8BA9\u6211\u6765\u6DFB\u52A0\u4E00\u70B9\u6837\u5F0F\u8FDB\u53BB......\n*\u6211\u8981\u505A\u4E00\u4E9B\u51C6\u5907\u5DE5\u4F5C\uFF1A\n*\u9996\u5148\u662F\u5199\u901A\u7528\u7684CSS reset\u4EE3\u7801\uFF01*/\n* {\n    margin: 0;\n    padding: 0; \n    box-sizing: border-box\n}\nimg {\n    max-width: 100%\n}\n/*\u8D77\u624B\u5F0F\u505A\u597D\u4E86\uFF01\u63A5\u4E0B\u6765\u6211\u4EEC\u505A\u4EC0\u4E48\u5462\uFF1F\n*\u5BF9\u4E86\uFF01\u5148\u8BA9\u5B57\u53D8\u6210\u7EFF\u8272\u5427\uFF01\n*\u6211\u8981\u8FD9\u6837\u5199:*/\nbody {\n    color: green\n}\n/*\u63A5\u4E0B\u6765\u6211\u8981\u753B\u4E00\u4E2A\u592A\u6781\uFF01\n\u9996\u5148\u6211\u4EEC\u51C6\u5907\u4E00\u4E2A\u5706*/\n#div1 {\n    border: 1px solid black;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    box-shadow: 0 0 3px rgba(0,0,0,0.5);\n    border:none;\n}\n#div1 {\n    background: linear-gradient(90deg, white 0%, white 50%, black 50%, black 100%);\n}\n/*\u52A0\u9634\u6781\u7684\u773C*/\n#div1::before {\n  width: 100px;\n  height: 100px;\n  /*\u73AF\u5F62*/\n  background: radial-gradient(circle closest-side, white 37.5%, black 37.5%);\n  position: relative;\n  top: 0%;\n  left: 25%;\n  border-radius: 50%\n}\n/*\u52A0\u9633\u6781\u7684\u773C*/\n#div1::after {\n  width: 100px;\n  height: 100px;\n  /*\u73AF\u5F62*/\n  background: radial-gradient(circle closest-side, black 37.5%, white 37.5%);\n  position: relative;\n  top: 0%;\n  left: 25%;\n  border-radius: 50%\n}\n/*\u5B9A\u4E49\u4E00\u4E2A\u52A8\u753B*/\n@keyframes rt {\n  from {}to {\n    transform: rotate(360deg)\n  }\n}\n/*\u8BA9\u592A\u6781\u52A8\u8D77\u6765\uFF01*/\n#div1{\n   animation: rt 10s infinite linear \n}\n/*\u6211\u7684\u5C55\u793A\u5230\u6B64\u7ED3\u675F\n\u795D\u4F60\u5929\u5929\u5F00\u5FC3\uFF01*/\n";
var n = 0;

var step = function step() {
  //   console.log(n);
  setTimeout(function () {
    var str = string.substr(n, 1);
    document.querySelector("style").innerHTML += str;
    switch (str) {
      case "\n":
        str = "<br>";
        break;
      case " ":
        str = "&nbsp;";
        break;
      case "\t":
        str = "&nbsp;&nbsp;&nbsp;&nbsp;";
        break;
      default:
    }
    document.querySelector("#demo").innerHTML += str;
    document.querySelector("#demo").scrollTo(0, 99999);
    if (n < string.length - 1) {
      n++;
      step();
    }
  }, 40);
};

step();
},{}],"../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52666' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../.config/yarn/global/node_modules/parcel/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.c474112c.map