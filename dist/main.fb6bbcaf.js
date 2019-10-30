// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
var getArea = function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
};

var rectangles = [{
  width: 18,
  height: 2
}, {
  width: 10,
  height: 9
}, {
  width: 2,
  height: 4
}, {
  width: 8,
  height: 3
}];
console.log(rectangles, rectangles.map(getArea));

var hasBigArea = function hasBigArea(rectangle) {
  return getArea(rectangle) > 50;
};

console.log(rectangles.some(hasBigArea)); //1 true = true, 0 true = false

var hasEvenArea = function hasEvenArea(elment) {
  return getArea(elment) % 2 === 0;
};

console.log([].every(hasEvenArea)); //0 false = true, 1 false = false
//reducer === (acc, val) => acc

var sumAllAreas = function sumAllAreas(total, rectangle) {
  return total + getArea(rectangle);
};

console.log(rectangles.reduce(sumAllAreas, 0)); //recursivamente ejecuta funcion sobre lista, manteniendo valor 'inicial'
// Si no hay valor inicial, usara primer elemento
// js es capaz de ejecutar funciones sin parametro porque tiene la misma firma. Magia negra.
// (1, 2) => 3
// (3, 3) => 6
// (6, 4) => 10
// COMPOSICIÓN **********************************************************
// La composición no es más que agrupar un conjunto de pequeñas funciones que reciben un número de parámetros en cadena
// y devolver una función que vaya ejecutando una a una de las funciones pasadas en cadena pasando el resultado de
// las funciones ejecutadas a las funciones siguiente (como una tubería)
// Supongamos el siguiente ejemplo:

var toUpper = function toUpper(text) {
  return text.toUpperCase();
};

console.log(toUpper("hey you"));

var exclamate = function exclamate(text) {
  return text + '!!';
};

console.log(exclamate("hey you"));

var coupledShout = function coupledShout(text) {
  return exclamate(toUpper(text));
};

console.log(coupledShout("hey you")); // Como vemos la función "shout" realiza una llamada a "toUpper" y a "exclamate"
// Aunque a simple vista puede parecer un poco ilegible lo que vemos es que dichas funciones están encadenadas
// la entrada de "shout" es utilizada por "toUpper" y devuelve una salida que a su vez es la entrada de "exclamate"
// cuya salida es el resultado final de "shout"
// Si tuviésemos más funciones el resultado podría ser más difícil de apreciar a simple vista:

var nextCharFromNumberImperative = function nextCharFromNumberImperative(char) {
  var trimmed = char.trim();
  var number = parseInt(trimmed);
  var nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
};

console.log(nextCharFromNumberImperative(' 64 ')); // Si intentamos reducirlo a una sola línea vemos que es aún más difícil entender qué está pasando

var nextCharFromNumberOneLine = function nextCharFromNumberOneLine(char) {
  return String.fromCharCode(parseInt(char.trim()) + 1);
}; // Aquí es donde brilla la composición
// Por definición:
// compose = f · g
// compose :: (b -> c) -> (a -> b) -> (a -> c)
// Se lee "Compose es una función que recibe como argumento una función que transforma de 'B' a 'C' y otra función
// que transforma de 'A' a 'B' y devuelve una función que transforma de 'A' a 'C'"


var composeTwo = function composeTwo(f, g) {
  return function (x) {
    return f(g(x));
  };
};

var shout = composeTwo(exclamate, toUpper); // Tiene el mismo orden qque exclamate(toUpper(x))

console.log(shout("hey you")); // Veamos cómo corregir la función "nextCharFromNumberOneLine" para que se vea más claras las transformaciones
// utilizando "composeTwo"

var addOne = function addOne(num) {
  return num + 1;
};

var trim = function trim(str) {
  return str.trim();
};

var fromCharCode = function fromCharCode(num) {
  return String.fromCharCode(num);
};

var nextCharFromNumberComposedTwo = composeTwo(fromCharCode, composeTwo(addOne, composeTwo(parseInt, trim)));
console.log(nextCharFromNumberComposedTwo(' 64')); // Vemos que anidar "composeTwo" tampoco resuelve el problema por lo que crearemos una función "compose" que reciba
// un número de funciones dinámicas:

var compose = function compose() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }

  return functions.reduce(function (f, g) {
    return function () {
      return f(g.apply(void 0, arguments));
    };
  });
};

var nextCharFromNumber = compose(fromCharCode, addOne, parseInt, trim);
console.log(nextCharFromNumber(' 64')); // Gracias a la composición podemos evitarnos el iterar múltiples veces sobre un array.
// Veamos el siguiente ejemplo:

var numbers = [16, 31, 46, 57, 66];
var result = numbers.map(function (x) {
  return x * 15;
}).map(function (x) {
  return x / 3;
});
console.log(result); // Si extraemos y componemos las funciones de cada map conseguiremos una única función que genere un mismo resultado

var mutiplyBy15 = function mutiplyBy15(x) {
  return x * 15;
};

var divideBy3 = function divideBy3(x) {
  return x / 3;
};

var transformation = compose(divideBy3, mutiplyBy15);
console.log(numbers.map(transformation));
},{}],"../node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51562" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../node_modules/parcel/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map