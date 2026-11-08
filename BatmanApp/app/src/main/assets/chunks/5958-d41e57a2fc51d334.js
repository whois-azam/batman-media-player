if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
if(typeof queueMicrotask==='undefined'){window.queueMicrotask=function(cb){Promise.resolve().then(cb);};self.queueMicrotask=window.queueMicrotask;}
if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5958], { 24: (t, e, i) => {
  "use strict";
  i.d(e, { s: () => r });
  var n = i(152);
  function r(t2) {
    return (0, n.G)(t2) && "offsetHeight" in t2;
  }
}, 152: (t, e, i) => {
  "use strict";
  function n(t2) {
    return "object" == typeof t2 && null !== t2;
  }
  i.d(e, { G: () => n });
}, 167: (t, e, i) => {
  "use strict";
  function n(t2, e2) {
    -1 === t2.indexOf(e2) && t2.push(e2);
  }
  function r(t2, e2) {
    let i2 = t2.indexOf(e2);
    i2 > -1 && t2.splice(i2, 1);
  }
  i.d(e, { Ai: () => r, Kq: () => n });
}, 427: (t, e, i) => {
  "use strict";
  i.d(e, { B: () => n });
  let n = "undefined" != typeof window;
}, 529: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "useMergedRef", { enumerable: true, get: function() {
    return r;
  } });
  let n = i(756);
  function r(t2, e2) {
    let i2 = (0, n.useRef)(null), r2 = (0, n.useRef)(null);
    return (0, n.useCallback)((n2) => {
      if (null === n2) {
        let t3 = i2.current;
        t3 && (i2.current = null, t3());
        let e3 = r2.current;
        e3 && (r2.current = null, e3());
      } else t2 && (i2.current = s(t2, n2)), e2 && (r2.current = s(e2, n2));
    }, [t2, e2]);
  }
  function s(t2, e2) {
    if ("function" != typeof t2) return t2.current = e2, () => {
      t2.current = null;
    };
    {
      let i2 = t2(e2);
      return "function" == typeof i2 ? i2 : () => t2(null);
    }
  }
  ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", { value: true }), Object.assign(e.default, e), t.exports = e.default);
}, 623: (t, e, i) => {
  "use strict";
  i.d(e, { x: () => r });
  var n = i(152);
  function r(t2) {
    return (0, n.G)(t2) && "ownerSVGElement" in t2;
  }
}, 678: (t, e, i) => {
  "use strict";
  i.d(e, { j: () => A });
  var n = i(8186), r = i(8767), s = i(7753), o = i(7499), a = i(7355), l = i(9952), u = i(7681);
  function h(t2, e2, i2) {
    return (i2 < 0 && (i2 += 1), i2 > 1 && (i2 -= 1), i2 < 1 / 6) ? t2 + (e2 - t2) * 6 * i2 : i2 < 0.5 ? e2 : i2 < 2 / 3 ? t2 + (e2 - t2) * (2 / 3 - i2) * 6 : t2;
  }
  var d = i(6957);
  function c(t2, e2) {
    return (i2) => i2 > 0 ? e2 : t2;
  }
  var p = i(2067);
  let f = (t2, e2, i2) => {
    let n2 = t2 * t2, r2 = i2 * (e2 * e2 - n2) + n2;
    return r2 < 0 ? 0 : Math.sqrt(r2);
  }, m = [l.u, d.B, u.V], v = (t2) => m.find((e2) => e2.test(t2));
  function g(t2) {
    let e2 = v(t2);
    if ((0, r.$)(!!e2, `'${t2}' is not an animatable color. Use the equivalent color code instead.`), !e2) return false;
    let i2 = e2.parse(t2);
    return e2 === u.V && (i2 = (function({ hue: t3, saturation: e3, lightness: i3, alpha: n2 }) {
      t3 /= 360, i3 /= 100;
      let r2 = 0, s2 = 0, o2 = 0;
      if (e3 /= 100) {
        let n3 = i3 < 0.5 ? i3 * (1 + e3) : i3 + e3 - i3 * e3, a2 = 2 * i3 - n3;
        r2 = h(a2, n3, t3 + 1 / 3), s2 = h(a2, n3, t3), o2 = h(a2, n3, t3 - 1 / 3);
      } else r2 = s2 = o2 = i3;
      return { red: Math.round(255 * r2), green: Math.round(255 * s2), blue: Math.round(255 * o2), alpha: n2 };
    })(i2)), i2;
  }
  let y = (t2, e2) => {
    let i2 = g(t2), n2 = g(e2);
    if (!i2 || !n2) return c(t2, e2);
    let r2 = { ...i2 };
    return (t3) => (r2.red = f(i2.red, n2.red, t3), r2.green = f(i2.green, n2.green, t3), r2.blue = f(i2.blue, n2.blue, t3), r2.alpha = (0, p.k)(i2.alpha, n2.alpha, t3), d.B.transform(r2));
  }, x = /* @__PURE__ */ new Set(["none", "hidden"]);
  function b(t2, e2) {
    return (i2) => (0, p.k)(t2, e2, i2);
  }
  function w(t2) {
    return "number" == typeof t2 ? b : "string" == typeof t2 ? (0, s.p)(t2) ? c : o.y.test(t2) ? y : T : Array.isArray(t2) ? S : "object" == typeof t2 ? o.y.test(t2) ? y : P : c;
  }
  function S(t2, e2) {
    let i2 = [...t2], n2 = i2.length, r2 = t2.map((t3, i3) => w(t3)(t3, e2[i3]));
    return (t3) => {
      for (let e3 = 0; e3 < n2; e3++) i2[e3] = r2[e3](t3);
      return i2;
    };
  }
  function P(t2, e2) {
    let i2 = { ...t2, ...e2 }, n2 = {};
    for (let r2 in i2) void 0 !== t2[r2] && void 0 !== e2[r2] && (n2[r2] = w(t2[r2])(t2[r2], e2[r2]));
    return (t3) => {
      for (let e3 in n2) i2[e3] = n2[e3](t3);
      return i2;
    };
  }
  let T = (t2, e2) => {
    let i2 = a.f.createTransformer(e2), s2 = (0, a.V)(t2), o2 = (0, a.V)(e2);
    return s2.indexes.var.length === o2.indexes.var.length && s2.indexes.color.length === o2.indexes.color.length && s2.indexes.number.length >= o2.indexes.number.length ? x.has(t2) && !o2.values.length || x.has(e2) && !s2.values.length ? (function(t3, e3) {
      return x.has(t3) ? (i3) => i3 <= 0 ? t3 : e3 : (i3) => i3 >= 1 ? e3 : t3;
    })(t2, e2) : (0, n.F)(S((function(t3, e3) {
      var _a;
      let i3 = [], n2 = { color: 0, var: 0, number: 0 };
      for (let r2 = 0; r2 < e3.values.length; r2++) {
        let s3 = e3.types[r2], o3 = t3.indexes[s3][n2[s3]], a2 = (_a = t3.values[o3]) != null ? _a : 0;
        i3[r2] = a2, n2[s3]++;
      }
      return i3;
    })(s2, o2), o2.values), i2) : ((0, r.$)(true, `Complex values '${t2}' and '${e2}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), c(t2, e2));
  };
  function A(t2, e2, i2) {
    return "number" == typeof t2 && "number" == typeof e2 && "number" == typeof i2 ? (0, p.k)(t2, e2, i2) : w(t2)(t2, e2);
  }
}, 696: (t, e, i) => {
  "use strict";
  function n(t2, e2) {
    return e2 ? 1e3 / e2 * t2 : 0;
  }
  i.d(e, { f: () => n });
}, 811: (t, e, i) => {
  "use strict";
  function n(t2, e2, i2) {
    var _a;
    if (t2 instanceof EventTarget) return [t2];
    if ("string" == typeof t2) {
      let n2 = document;
      e2 && (n2 = e2.current);
      let r = (_a = i2 == null ? void 0 : i2[t2]) != null ? _a : n2.querySelectorAll(t2);
      return r ? Array.from(r) : [];
    }
    return Array.from(t2);
  }
  i.d(e, { K: () => n });
}, 874: (t, e, i) => {
  "use strict";
  i.d(e, { L: () => n });
  let n = (0, i(756).createContext)({});
}, 895: (t, e, i) => {
  "use strict";
  i.d(e, { k5: () => h });
  var n = i(756), r = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 }, s = n.createContext && n.createContext(r), o = ["attr", "size", "title"];
  function a() {
    return (a = Object.assign ? Object.assign.bind() : function(t2) {
      for (var e2 = 1; e2 < arguments.length; e2++) {
        var i2 = arguments[e2];
        for (var n2 in i2) Object.prototype.hasOwnProperty.call(i2, n2) && (t2[n2] = i2[n2]);
      }
      return t2;
    }).apply(this, arguments);
  }
  function l(t2, e2) {
    var i2 = Object.keys(t2);
    if (Object.getOwnPropertySymbols) {
      var n2 = Object.getOwnPropertySymbols(t2);
      e2 && (n2 = n2.filter(function(e3) {
        return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
      })), i2.push.apply(i2, n2);
    }
    return i2;
  }
  function u(t2) {
    for (var e2 = 1; e2 < arguments.length; e2++) {
      var i2 = null != arguments[e2] ? arguments[e2] : {};
      e2 % 2 ? l(Object(i2), true).forEach(function(e3) {
        var n2, r2, s2;
        n2 = t2, r2 = e3, s2 = i2[e3], (r2 = (function(t3) {
          var e4 = (function(t4, e5) {
            if ("object" != typeof t4 || !t4) return t4;
            var i3 = t4[Symbol.toPrimitive];
            if (void 0 !== i3) {
              var n3 = i3.call(t4, e5 || "default");
              if ("object" != typeof n3) return n3;
              throw TypeError("@@toPrimitive must return a primitive value.");
            }
            return ("string" === e5 ? String : Number)(t4);
          })(t3, "string");
          return "symbol" == typeof e4 ? e4 : e4 + "";
        })(r2)) in n2 ? Object.defineProperty(n2, r2, { value: s2, enumerable: true, configurable: true, writable: true }) : n2[r2] = s2;
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(i2)) : l(Object(i2)).forEach(function(e3) {
        Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(i2, e3));
      });
    }
    return t2;
  }
  function h(t2) {
    return (e2) => n.createElement(d, a({ attr: u({}, t2.attr) }, e2), (function t3(e3) {
      return e3 && e3.map((e4, i2) => n.createElement(e4.tag, u({ key: i2 }, e4.attr), t3(e4.child)));
    })(t2.child));
  }
  function d(t2) {
    var e2 = (e3) => {
      var i2, { attr: r2, size: s2, title: l2 } = t2, h2 = (function(t3, e4) {
        if (null == t3) return {};
        var i3, n2, r3 = (function(t4, e5) {
          if (null == t4) return {};
          var i4 = {};
          for (var n3 in t4) if (Object.prototype.hasOwnProperty.call(t4, n3)) {
            if (e5.indexOf(n3) >= 0) continue;
            i4[n3] = t4[n3];
          }
          return i4;
        })(t3, e4);
        if (Object.getOwnPropertySymbols) {
          var s3 = Object.getOwnPropertySymbols(t3);
          for (n2 = 0; n2 < s3.length; n2++) i3 = s3[n2], !(e4.indexOf(i3) >= 0) && Object.prototype.propertyIsEnumerable.call(t3, i3) && (r3[i3] = t3[i3]);
        }
        return r3;
      })(t2, o), d2 = s2 || e3.size || "1em";
      return e3.className && (i2 = e3.className), t2.className && (i2 = (i2 ? i2 + " " : "") + t2.className), n.createElement("svg", a({ stroke: "currentColor", fill: "currentColor", strokeWidth: "0" }, e3.attr, r2, h2, { className: i2, style: u(u({ color: t2.color || e3.color }, e3.style), t2.style), height: d2, width: d2, xmlns: "http://www.w3.org/2000/svg" }), l2 && n.createElement("title", null, l2), t2.children);
    };
    return void 0 !== s ? n.createElement(s.Consumer, null, (t3) => e2(t3)) : e2(r);
  }
}, 992: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "RouterContext", { enumerable: true, get: function() {
    return n;
  } });
  let n = i(9582)._(i(756)).default.createContext(null);
}, 1036: (t, e, i) => {
  "use strict";
  i.d(e, { G: () => h });
  var n = i(7920), r = i(1994), s = i(8186), o = i(8767), a = i(4115), l = i(7809), u = i(678);
  function h(t2, e2, { clamp: i2 = true, ease: d, mixer: c } = {}) {
    let p = t2.length;
    if ((0, o.V)(p === e2.length, "Both input and output ranges must be the same length"), 1 === p) return () => e2[0];
    if (2 === p && e2[0] === e2[1]) return () => e2[1];
    let f = t2[0] === t2[1];
    t2[0] > t2[p - 1] && (t2 = [...t2].reverse(), e2 = [...e2].reverse());
    let m = (function(t3, e3, i3) {
      let o2 = [], a2 = i3 || n.W.mix || u.j, l2 = t3.length - 1;
      for (let i4 = 0; i4 < l2; i4++) {
        let n2 = a2(t3[i4], t3[i4 + 1]);
        if (e3) {
          let t4 = Array.isArray(e3) ? e3[i4] || r.l : e3;
          n2 = (0, s.F)(t4, n2);
        }
        o2.push(n2);
      }
      return o2;
    })(e2, d, c), v = m.length, g = (i3) => {
      if (f && i3 < t2[0]) return e2[0];
      let n2 = 0;
      if (v > 1) for (; n2 < t2.length - 2 && !(i3 < t2[n2 + 1]); n2++) ;
      let r2 = (0, a.q)(t2[n2], t2[n2 + 1], i3);
      return m[n2](r2);
    };
    return i2 ? (e3) => g((0, l.q)(t2[0], t2[p - 1], e3)) : g;
  }
}, 1308: (t, e, i) => {
  "use strict";
  i.d(e, { t: () => n });
  let n = (0, i(756).createContext)(null);
}, 1931: (t, e) => {
  "use strict";
  function i(t2) {
    let { ampFirst: e2 = false, hybrid: i2 = false, hasQuery: n = false } = void 0 === t2 ? {} : t2;
    return e2 || i2 && n;
  }
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "isInAmpMode", { enumerable: true, get: function() {
    return i;
  } });
}, 1994: (t, e, i) => {
  "use strict";
  i.d(e, { l: () => n });
  let n = (t2) => t2;
}, 2067: (t, e, i) => {
  "use strict";
  i.d(e, { k: () => n });
  let n = (t2, e2, i2) => t2 + (e2 - t2) * i2;
}, 2102: (t, e, i) => {
  "use strict";
  i.d(e, { M: () => r });
  var n = i(756);
  function r(t2) {
    let e2 = (0, n.useRef)(null);
    return null === e2.current && (e2.current = t2()), e2.current;
  }
}, 2243: (t, e, i) => {
  "use strict";
  var n = i(5786);
  Object.defineProperty(e, "__esModule", { value: true }), !(function(t2, e2) {
    for (var i2 in e2) Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  })(e, { default: function() {
    return v;
  }, defaultHead: function() {
    return c;
  } });
  let r = i(9582), s = i(6215), o = i(3928), a = s._(i(756)), l = r._(i(4620)), u = i(3171), h = i(4595), d = i(1931);
  function c(t2) {
    void 0 === t2 && (t2 = false);
    let e2 = [(0, o.jsx)("meta", { charSet: "utf-8" }, "charset")];
    return t2 || e2.push((0, o.jsx)("meta", { name: "viewport", content: "width=device-width" }, "viewport")), e2;
  }
  function p(t2, e2) {
    return "string" == typeof e2 || "number" == typeof e2 ? t2 : e2.type === a.default.Fragment ? t2.concat(a.default.Children.toArray(e2.props.children).reduce((t3, e3) => "string" == typeof e3 || "number" == typeof e3 ? t3 : t3.concat(e3), [])) : t2.concat(e2);
  }
  i(3555);
  let f = ["name", "httpEquiv", "charSet", "itemProp"];
  function m(t2, e2) {
    let { inAmpMode: i2 } = e2;
    return t2.reduce(p, []).reverse().concat(c(i2).reverse()).filter(/* @__PURE__ */ (function() {
      let t3 = /* @__PURE__ */ new Set(), e3 = /* @__PURE__ */ new Set(), i3 = /* @__PURE__ */ new Set(), n2 = {};
      return (r2) => {
        let s2 = true, o2 = false;
        if (r2.key && "number" != typeof r2.key && r2.key.indexOf("$") > 0) {
          o2 = true;
          let e4 = r2.key.slice(r2.key.indexOf("$") + 1);
          t3.has(e4) ? s2 = false : t3.add(e4);
        }
        switch (r2.type) {
          case "title":
          case "base":
            e3.has(r2.type) ? s2 = false : e3.add(r2.type);
            break;
          case "meta":
            for (let t4 = 0, e4 = f.length; t4 < e4; t4++) {
              let e5 = f[t4];
              if (r2.props.hasOwnProperty(e5)) if ("charSet" === e5) i3.has(e5) ? s2 = false : i3.add(e5);
              else {
                let t5 = r2.props[e5], i4 = n2[e5] || /* @__PURE__ */ new Set();
                ("name" !== e5 || !o2) && i4.has(t5) ? s2 = false : (i4.add(t5), n2[e5] = i4);
              }
            }
        }
        return s2;
      };
    })()).reverse().map((t3, e3) => {
      let r2 = t3.key || e3;
      if (n.env.__NEXT_OPTIMIZE_FONTS && !i2 && "link" === t3.type && t3.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some((e4) => t3.props.href.startsWith(e4))) {
        let e4 = { ...t3.props || {} };
        return e4["data-href"] = e4.href, e4.href = void 0, e4["data-optimized-fonts"] = true, a.default.cloneElement(t3, e4);
      }
      return a.default.cloneElement(t3, { key: r2 });
    });
  }
  let v = function(t2) {
    let { children: e2 } = t2, i2 = (0, a.useContext)(u.AmpStateContext), n2 = (0, a.useContext)(h.HeadManagerContext);
    return (0, o.jsx)(l.default, { reduceComponentsToState: m, headManager: n2, inAmpMode: (0, d.isInAmpMode)(i2), children: e2 });
  };
  ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", { value: true }), Object.assign(e.default, e), t.exports = e.default);
}, 2250: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "Image", { enumerable: true, get: function() {
    return b;
  } });
  let n = i(9582), r = i(6215), s = i(3928), o = r._(i(756)), a = n._(i(3221)), l = n._(i(2243)), u = i(6450), h = i(2895), d = i(3837);
  i(3555);
  let c = i(992), p = n._(i(7074)), f = i(529), m = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", dangerouslyAllowSVG: false, unoptimized: false };
  function v(t2, e2, i2, n2, r2, s2, o2) {
    let a2 = null == t2 ? void 0 : t2.src;
    t2 && t2["data-loaded-src"] !== a2 && (t2["data-loaded-src"] = a2, ("decode" in t2 ? t2.decode() : Promise.resolve()).catch(() => {
    }).then(() => {
      if (t2.parentElement && t2.isConnected) {
        if ("empty" !== e2 && r2(true), null == i2 ? void 0 : i2.current) {
          let e3 = new Event("load");
          Object.defineProperty(e3, "target", { writable: false, value: t2 });
          let n3 = false, r3 = false;
          i2.current({ ...e3, nativeEvent: e3, currentTarget: t2, target: t2, isDefaultPrevented: () => n3, isPropagationStopped: () => r3, persist: () => {
          }, preventDefault: () => {
            n3 = true, e3.preventDefault();
          }, stopPropagation: () => {
            r3 = true, e3.stopPropagation();
          } });
        }
        (null == n2 ? void 0 : n2.current) && n2.current(t2);
      }
    }));
  }
  function g(t2) {
    return o.use ? { fetchPriority: t2 } : { fetchpriority: t2 };
  }
  let y = (0, o.forwardRef)((t2, e2) => {
    let { src: i2, srcSet: n2, sizes: r2, height: a2, width: l2, decoding: u2, className: h2, style: d2, fetchPriority: c2, placeholder: p2, loading: m2, unoptimized: y2, fill: x2, onLoadRef: b2, onLoadingCompleteRef: w, setBlurComplete: S, setShowAltText: P, sizesInput: T, onLoad: A, onError: E, ...C } = t2, M = (0, o.useCallback)((t3) => {
      t3 && (E && (t3.src = t3.src), t3.complete && v(t3, p2, b2, w, S, y2, T));
    }, [i2, p2, b2, w, S, E, y2, T]), j = (0, f.useMergedRef)(e2, M);
    return (0, s.jsx)("img", { ...C, ...g(c2), loading: m2, width: l2, height: a2, decoding: u2, "data-nimg": x2 ? "fill" : "1", className: h2, style: d2, sizes: r2, srcSet: n2, src: i2, ref: j, onLoad: (t3) => {
      v(t3.currentTarget, p2, b2, w, S, y2, T);
    }, onError: (t3) => {
      P(true), "empty" !== p2 && S(true), E && E(t3);
    } });
  });
  function x(t2) {
    let { isAppRouter: e2, imgAttributes: i2 } = t2, n2 = { as: "image", imageSrcSet: i2.srcSet, imageSizes: i2.sizes, crossOrigin: i2.crossOrigin, referrerPolicy: i2.referrerPolicy, ...g(i2.fetchPriority) };
    return e2 && a.default.preload ? (a.default.preload(i2.src, n2), null) : (0, s.jsx)(l.default, { children: (0, s.jsx)("link", { rel: "preload", href: i2.srcSet ? void 0 : i2.src, ...n2 }, "__nimg-" + i2.src + i2.srcSet + i2.sizes) });
  }
  let b = (0, o.forwardRef)((t2, e2) => {
    let i2 = (0, o.useContext)(c.RouterContext), n2 = (0, o.useContext)(d.ImageConfigContext), r2 = (0, o.useMemo)(() => {
      var t3;
      let e3 = m || n2 || h.imageConfigDefault, i3 = [...e3.deviceSizes, ...e3.imageSizes].sort((t4, e4) => t4 - e4), r3 = e3.deviceSizes.sort((t4, e4) => t4 - e4), s2 = null == (t3 = e3.qualities) ? void 0 : t3.sort((t4, e4) => t4 - e4);
      return { ...e3, allSizes: i3, deviceSizes: r3, qualities: s2 };
    }, [n2]), { onLoad: a2, onLoadingComplete: l2 } = t2, f2 = (0, o.useRef)(a2);
    (0, o.useEffect)(() => {
      f2.current = a2;
    }, [a2]);
    let v2 = (0, o.useRef)(l2);
    (0, o.useEffect)(() => {
      v2.current = l2;
    }, [l2]);
    let [g2, b2] = (0, o.useState)(false), [w, S] = (0, o.useState)(false), { props: P, meta: T } = (0, u.getImgProps)(t2, { defaultLoader: p.default, imgConf: r2, blurComplete: g2, showAltText: w });
    return (0, s.jsxs)(s.Fragment, { children: [(0, s.jsx)(y, { ...P, unoptimized: T.unoptimized, placeholder: T.placeholder, fill: T.fill, onLoadRef: f2, onLoadingCompleteRef: v2, setBlurComplete: b2, setShowAltText: S, sizesInput: t2.sizes, ref: e2 }), T.priority ? (0, s.jsx)(x, { isAppRouter: !i2, imgAttributes: P }) : null] });
  });
  ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", { value: true }), Object.assign(e.default, e), t.exports = e.default);
}, 2335: (t, e, i) => {
  "use strict";
  i.d(e, { v: () => r });
  var n = i(167);
  class r {
    constructor() {
      this.subscriptions = [];
    }
    add(t2) {
      return (0, n.Kq)(this.subscriptions, t2), () => (0, n.Ai)(this.subscriptions, t2);
    }
    notify(t2, e2, i2) {
      let n2 = this.subscriptions.length;
      if (n2) if (1 === n2) this.subscriptions[0](t2, e2, i2);
      else for (let r2 = 0; r2 < n2; r2++) {
        let n3 = this.subscriptions[r2];
        n3 && n3(t2, e2, i2);
      }
    }
    getSize() {
      return this.subscriptions.length;
    }
    clear() {
      this.subscriptions.length = 0;
    }
  }
}, 2433: (t, e, i) => {
  "use strict";
  i.d(e, { Z: () => s });
  var n = i(4115), r = i(2067);
  function s(t2) {
    let e2 = [0];
    return !(function(t3, e3) {
      let i2 = t3[t3.length - 1];
      for (let s2 = 1; s2 <= e3; s2++) {
        let o = (0, n.q)(0, e3, s2);
        t3.push((0, r.k)(i2, 1, o));
      }
    })(e2, t2.length - 1), e2;
  }
}, 2487: (t, e, i) => {
  "use strict";
  i.d(e, { E: () => r });
  var n = i(756);
  let r = i(427).B ? n.useLayoutEffect : n.useEffect;
}, 2562: (t, e, i) => {
  "use strict";
  var n = i(5786);
  i(9613);
  var r = i(756), s = (function(t2) {
    return t2 && "object" == typeof t2 && "default" in t2 ? t2 : { default: t2 };
  })(r), o = void 0 !== n && n.env && true, a = function(t2) {
    return "[object String]" === Object.prototype.toString.call(t2);
  }, l = (function() {
    function t2(t3) {
      var e3 = void 0 === t3 ? {} : t3, i3 = e3.name, n2 = void 0 === i3 ? "stylesheet" : i3, r2 = e3.optimizeForSpeed, s2 = void 0 === r2 ? o : r2;
      u(a(n2), "`name` must be a string"), this._name = n2, this._deletedRulePlaceholder = "#" + n2 + "-deleted-rule____{}", u("boolean" == typeof s2, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = s2, this._serverSheet = void 0, this._tags = [], this._injected = false, this._rulesCount = 0;
      var l2 = "undefined" != typeof window && document.querySelector('meta[property="csp-nonce"]');
      this._nonce = l2 ? l2.getAttribute("content") : null;
    }
    var e2, i2 = t2.prototype;
    return i2.setOptimizeForSpeed = function(t3) {
      u("boolean" == typeof t3, "`setOptimizeForSpeed` accepts a boolean"), u(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = t3, this.inject();
    }, i2.isOptimizeForSpeed = function() {
      return this._optimizeForSpeed;
    }, i2.inject = function() {
      var t3 = this;
      if (u(!this._injected, "sheet already injected"), this._injected = true, "undefined" != typeof window && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (o || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = true);
        return;
      }
      this._serverSheet = { cssRules: [], insertRule: function(e3, i3) {
        return "number" == typeof i3 ? t3._serverSheet.cssRules[i3] = { cssText: e3 } : t3._serverSheet.cssRules.push({ cssText: e3 }), i3;
      }, deleteRule: function(e3) {
        t3._serverSheet.cssRules[e3] = null;
      } };
    }, i2.getSheetForTag = function(t3) {
      if (t3.sheet) return t3.sheet;
      for (var e3 = 0; e3 < document.styleSheets.length; e3++) if (document.styleSheets[e3].ownerNode === t3) return document.styleSheets[e3];
    }, i2.getSheet = function() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }, i2.insertRule = function(t3, e3) {
      if (u(a(t3), "`insertRule` accepts only strings"), "undefined" == typeof window) return "number" != typeof e3 && (e3 = this._serverSheet.cssRules.length), this._serverSheet.insertRule(t3, e3), this._rulesCount++;
      if (this._optimizeForSpeed) {
        var i3 = this.getSheet();
        "number" != typeof e3 && (e3 = i3.cssRules.length);
        try {
          i3.insertRule(t3, e3);
        } catch (e4) {
          return o || console.warn("StyleSheet: illegal rule: \n\n" + t3 + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1;
        }
      } else {
        var n2 = this._tags[e3];
        this._tags.push(this.makeStyleTag(this._name, t3, n2));
      }
      return this._rulesCount++;
    }, i2.replaceRule = function(t3, e3) {
      if (this._optimizeForSpeed || "undefined" == typeof window) {
        var i3 = "undefined" != typeof window ? this.getSheet() : this._serverSheet;
        if (e3.trim() || (e3 = this._deletedRulePlaceholder), !i3.cssRules[t3]) return t3;
        i3.deleteRule(t3);
        try {
          i3.insertRule(e3, t3);
        } catch (n3) {
          o || console.warn("StyleSheet: illegal rule: \n\n" + e3 + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), i3.insertRule(this._deletedRulePlaceholder, t3);
        }
      } else {
        var n2 = this._tags[t3];
        u(n2, "old rule at index `" + t3 + "` not found"), n2.textContent = e3;
      }
      return t3;
    }, i2.deleteRule = function(t3) {
      if ("undefined" == typeof window) return void this._serverSheet.deleteRule(t3);
      if (this._optimizeForSpeed) this.replaceRule(t3, "");
      else {
        var e3 = this._tags[t3];
        u(e3, "rule at index `" + t3 + "` not found"), e3.parentNode.removeChild(e3), this._tags[t3] = null;
      }
    }, i2.flush = function() {
      this._injected = false, this._rulesCount = 0, "undefined" != typeof window ? (this._tags.forEach(function(t3) {
        return t3 && t3.parentNode.removeChild(t3);
      }), this._tags = []) : this._serverSheet.cssRules = [];
    }, i2.cssRules = function() {
      var t3 = this;
      return "undefined" == typeof window ? this._serverSheet.cssRules : this._tags.reduce(function(e3, i3) {
        return i3 ? e3 = e3.concat(Array.prototype.map.call(t3.getSheetForTag(i3).cssRules, function(e4) {
          return e4.cssText === t3._deletedRulePlaceholder ? null : e4;
        })) : e3.push(null), e3;
      }, []);
    }, i2.makeStyleTag = function(t3, e3, i3) {
      e3 && u(a(e3), "makeStyleTag accepts only strings as second parameter");
      var n2 = document.createElement("style");
      this._nonce && n2.setAttribute("nonce", this._nonce), n2.type = "text/css", n2.setAttribute("data-" + t3, ""), e3 && n2.appendChild(document.createTextNode(e3));
      var r2 = document.head || document.getElementsByTagName("head")[0];
      return i3 ? r2.insertBefore(n2, i3) : r2.appendChild(n2), n2;
    }, e2 = [{ key: "length", get: function() {
      return this._rulesCount;
    } }], (function(t3, e3) {
      for (var i3 = 0; i3 < e3.length; i3++) {
        var n2 = e3[i3];
        n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), Object.defineProperty(t3, n2.key, n2);
      }
    })(t2.prototype, e2), t2;
  })();
  function u(t2, e2) {
    if (!t2) throw Error("StyleSheet: " + e2 + ".");
  }
  var h = function(t2) {
    for (var e2 = 5381, i2 = t2.length; i2; ) e2 = 33 * e2 ^ t2.charCodeAt(--i2);
    return e2 >>> 0;
  }, d = {};
  function c(t2, e2) {
    if (!e2) return "jsx-" + t2;
    var i2 = String(e2), n2 = t2 + i2;
    return d[n2] || (d[n2] = "jsx-" + h(t2 + "-" + i2)), d[n2];
  }
  function p(t2, e2) {
    "undefined" == typeof window && (e2 = e2.replace(/\/style/gi, "\\/style"));
    var i2 = t2 + e2;
    return d[i2] || (d[i2] = e2.replace(/__jsx-style-dynamic-selector/g, t2)), d[i2];
  }
  var f = (function() {
    function t2(t3) {
      var e3 = void 0 === t3 ? {} : t3, i2 = e3.styleSheet, n2 = void 0 === i2 ? null : i2, r2 = e3.optimizeForSpeed, s2 = void 0 !== r2 && r2;
      this._sheet = n2 || new l({ name: "styled-jsx", optimizeForSpeed: s2 }), this._sheet.inject(), n2 && "boolean" == typeof s2 && (this._sheet.setOptimizeForSpeed(s2), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
    }
    var e2 = t2.prototype;
    return e2.add = function(t3) {
      var e3 = this;
      void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(t3.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), "undefined" == typeof window || this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function(t4, e4) {
        return t4[e4] = 0, t4;
      }, {}));
      var i2 = this.getIdAndRules(t3), n2 = i2.styleId, r2 = i2.rules;
      if (n2 in this._instancesCounts) {
        this._instancesCounts[n2] += 1;
        return;
      }
      var s2 = r2.map(function(t4) {
        return e3._sheet.insertRule(t4);
      }).filter(function(t4) {
        return -1 !== t4;
      });
      this._indices[n2] = s2, this._instancesCounts[n2] = 1;
    }, e2.remove = function(t3) {
      var e3 = this, i2 = this.getIdAndRules(t3).styleId;
      if ((function(t4, e4) {
        if (!t4) throw Error("StyleSheetRegistry: " + e4 + ".");
      })(i2 in this._instancesCounts, "styleId: `" + i2 + "` not found"), this._instancesCounts[i2] -= 1, this._instancesCounts[i2] < 1) {
        var n2 = this._fromServer && this._fromServer[i2];
        n2 ? (n2.parentNode.removeChild(n2), delete this._fromServer[i2]) : (this._indices[i2].forEach(function(t4) {
          return e3._sheet.deleteRule(t4);
        }), delete this._indices[i2]), delete this._instancesCounts[i2];
      }
    }, e2.update = function(t3, e3) {
      this.add(e3), this.remove(t3);
    }, e2.flush = function() {
      this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {};
    }, e2.cssRules = function() {
      var t3 = this, e3 = this._fromServer ? Object.keys(this._fromServer).map(function(e4) {
        return [e4, t3._fromServer[e4]];
      }) : [], i2 = this._sheet.cssRules();
      return e3.concat(Object.keys(this._indices).map(function(e4) {
        return [e4, t3._indices[e4].map(function(t4) {
          return i2[t4].cssText;
        }).join(t3._optimizeForSpeed ? "" : "\n")];
      }).filter(function(t4) {
        return !!t4[1];
      }));
    }, e2.styles = function(t3) {
      var e3, i2;
      return e3 = this.cssRules(), void 0 === (i2 = t3) && (i2 = {}), e3.map(function(t4) {
        var e4 = t4[0], n2 = t4[1];
        return s.default.createElement("style", { id: "__" + e4, key: "__" + e4, nonce: i2.nonce ? i2.nonce : void 0, dangerouslySetInnerHTML: { __html: n2 } });
      });
    }, e2.getIdAndRules = function(t3) {
      var e3 = t3.children, i2 = t3.dynamic, n2 = t3.id;
      if (i2) {
        var r2 = c(n2, i2);
        return { styleId: r2, rules: Array.isArray(e3) ? e3.map(function(t4) {
          return p(r2, t4);
        }) : [p(r2, e3)] };
      }
      return { styleId: c(n2), rules: Array.isArray(e3) ? e3 : [e3] };
    }, e2.selectFromServer = function() {
      return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(t3, e3) {
        return t3[e3.id.slice(2)] = e3, t3;
      }, {});
    }, t2;
  })(), m = r.createContext(null);
  m.displayName = "StyleSheetContext";
  var v = s.default.useInsertionEffect || s.default.useLayoutEffect, g = "undefined" != typeof window ? new f() : void 0;
  function y(t2) {
    var e2 = g || r.useContext(m);
    return e2 && ("undefined" == typeof window ? e2.add(t2) : v(function() {
      return e2.add(t2), function() {
        e2.remove(t2);
      };
    }, [t2.id, String(t2.dynamic)])), null;
  }
  y.dynamic = function(t2) {
    return t2.map(function(t3) {
      return c(t3[0], t3[1]);
    }).join(" ");
  }, e.style = y;
}, 2895: (t, e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), !(function(t2, e2) {
    for (var i2 in e2) Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  })(e, { VALID_LOADERS: function() {
    return i;
  }, imageConfigDefault: function() {
    return n;
  } });
  let i = ["default", "imgix", "cloudinary", "akamai", "custom"], n = { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", loaderFile: "", domains: [], disableStaticImages: false, minimumCacheTTL: 60, formats: ["image/webp"], dangerouslyAllowSVG: false, contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;", contentDispositionType: "attachment", localPatterns: void 0, remotePatterns: [], qualities: void 0, unoptimized: false };
}, 3171: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "AmpStateContext", { enumerable: true, get: function() {
    return n;
  } });
  let n = i(9582)._(i(756)).default.createContext({});
}, 3185: (t, e, i) => {
  "use strict";
  i.d(e, { Q: () => n });
  let n = { value: null, addProjectionMetrics: null };
}, 3405: (t, e, i) => {
  "use strict";
  i.d(e, { $: () => s, q: () => o });
  var n = i(5257);
  let r = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, s = (t2, e2) => (i2) => !!("string" == typeof i2 && r.test(i2) && i2.startsWith(t2) || e2 && null != i2 && Object.prototype.hasOwnProperty.call(i2, e2)), o = (t2, e2, i2) => (r2) => {
    if ("string" != typeof r2) return r2;
    let [s2, o2, a, l] = r2.match(n.S);
    return { [t2]: parseFloat(s2), [e2]: parseFloat(o2), [i2]: parseFloat(a), alpha: void 0 !== l ? parseFloat(l) : 1 };
  };
}, 3637: (t, e, i) => {
  "use strict";
  i.d(e, { default: () => r.a });
  var n = i(7114), r = i.n(n);
}, 3645: (t, e, i) => {
  "use strict";
  i.d(e, { Q: () => n });
  let n = (0, i(756).createContext)({ transformPagePoint: (t2) => t2, isStatic: false, reducedMotion: "never" });
}, 3648: (t, e, i) => {
  "use strict";
  i.d(e, { I: () => o });
  var n = i(7920);
  let r = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
  var s = i(3185);
  function o(t2, e2) {
    let i2 = false, o2 = true, a = { delta: 0, timestamp: 0, isProcessing: false }, l = () => i2 = true, u = r.reduce((t3, i3) => (t3[i3] = /* @__PURE__ */ (function(t4, e3) {
      let i4 = /* @__PURE__ */ new Set(), n2 = /* @__PURE__ */ new Set(), r2 = false, o3 = false, a2 = /* @__PURE__ */ new WeakSet(), l2 = { delta: 0, timestamp: 0, isProcessing: false }, u2 = 0;
      function h2(e4) {
        a2.has(e4) && (d2.schedule(e4), t4()), u2++, e4(l2);
      }
      let d2 = { schedule: (t5, e4 = false, s2 = false) => {
        let o4 = s2 && r2 ? i4 : n2;
        return e4 && a2.add(t5), o4.has(t5) || o4.add(t5), t5;
      }, cancel: (t5) => {
        n2.delete(t5), a2.delete(t5);
      }, process: (t5) => {
        if (l2 = t5, r2) {
          o3 = true;
          return;
        }
        r2 = true, [i4, n2] = [n2, i4], i4.forEach(h2), e3 && s.Q.value && s.Q.value.frameloop[e3].push(u2), u2 = 0, i4.clear(), r2 = false, o3 && (o3 = false, d2.process(t5));
      } };
      return d2;
    })(l, e2 ? i3 : void 0), t3), {}), { setup: h, read: d, resolveKeyframes: c, preUpdate: p, update: f, preRender: m, render: v, postRender: g } = u, y = () => {
      let r2 = n.W.useManualTiming ? a.timestamp : performance.now();
      i2 = false, n.W.useManualTiming || (a.delta = o2 ? 1e3 / 60 : Math.max(Math.min(r2 - a.timestamp, 40), 1)), a.timestamp = r2, a.isProcessing = true, h.process(a), d.process(a), c.process(a), p.process(a), f.process(a), m.process(a), v.process(a), g.process(a), a.isProcessing = false, i2 && e2 && (o2 = false, t2(y));
    }, x = () => {
      i2 = true, o2 = true, a.isProcessing || t2(y);
    };
    return { schedule: r.reduce((t3, e3) => {
      let n2 = u[e3];
      return t3[e3] = (t4, e4 = false, r2 = false) => (i2 || x(), n2.schedule(t4, e4, r2)), t3;
    }, {}), cancel: (t3) => {
      for (let e3 = 0; e3 < r.length; e3++) u[r[e3]].cancel(t3);
    }, state: a, steps: u };
  }
}, 3691: (t, e, i) => {
  "use strict";
  i.d(e, { xQ: () => s });
  var n = i(756), r = i(1308);
  function s() {
    let t2 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], e2 = (0, n.useContext)(r.t);
    if (null === e2) return [true, null];
    let { isPresent: i2, onExitComplete: s2, register: o } = e2, a = (0, n.useId)();
    (0, n.useEffect)(() => {
      if (t2) return o(a);
    }, [t2]);
    let l = (0, n.useCallback)(() => t2 && s2 && s2(a), [a, s2, t2]);
    return !i2 && s2 ? [false, l] : [true];
  }
}, 3837: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "ImageConfigContext", { enumerable: true, get: function() {
    return s;
  } });
  let n = i(9582)._(i(756)), r = i(2895), s = n.default.createContext(r.imageConfigDefault);
}, 4115: (t, e, i) => {
  "use strict";
  i.d(e, { q: () => n });
  let n = (t2, e2, i2) => {
    let n2 = e2 - t2;
    return 0 === n2 ? 1 : (i2 - t2) / n2;
  };
}, 4213: (t, e, i) => {
  "use strict";
  i.d(e, { N: () => y });
  var n = i(3928), r = i(756), s = i(874), o = i(2102), a = i(2487), l = i(1308), u = i(24), h = i(3645);
  class d extends r.Component {
    getSnapshotBeforeUpdate(t2) {
      let e2 = this.props.childRef.current;
      if (e2 && t2.isPresent && !this.props.isPresent) {
        let t3 = e2.offsetParent, i2 = (0, u.s)(t3) && t3.offsetWidth || 0, n2 = this.props.sizeRef.current;
        n2.height = e2.offsetHeight || 0, n2.width = e2.offsetWidth || 0, n2.top = e2.offsetTop, n2.left = e2.offsetLeft, n2.right = i2 - n2.width - n2.left;
      }
      return null;
    }
    componentDidUpdate() {
    }
    render() {
      return this.props.children;
    }
  }
  function c(t2) {
    let { children: e2, isPresent: i2, anchorX: s2 } = t2, o2 = (0, r.useId)(), a2 = (0, r.useRef)(null), l2 = (0, r.useRef)({ width: 0, height: 0, top: 0, left: 0, right: 0 }), { nonce: u2 } = (0, r.useContext)(h.Q);
    return (0, r.useInsertionEffect)(() => {
      let { width: t3, height: e3, top: n2, left: r2, right: h2 } = l2.current;
      if (i2 || !a2.current || !t3 || !e3) return;
      a2.current.dataset.motionPopId = o2;
      let d2 = document.createElement("style");
      return u2 && (d2.nonce = u2), document.head.appendChild(d2), d2.sheet && d2.sheet.insertRule('\n          [data-motion-pop-id="'.concat(o2, '"] {\n            position: absolute !important;\n            width: ').concat(t3, "px !important;\n            height: ").concat(e3, "px !important;\n            ").concat("left" === s2 ? "left: ".concat(r2) : "right: ".concat(h2), "px !important;\n            top: ").concat(n2, "px !important;\n          }\n        ")), () => {
        document.head.contains(d2) && document.head.removeChild(d2);
      };
    }, [i2]), (0, n.jsx)(d, { isPresent: i2, childRef: a2, sizeRef: l2, children: r.cloneElement(e2, { ref: a2 }) });
  }
  let p = (t2) => {
    let { children: e2, initial: i2, isPresent: s2, onExitComplete: a2, custom: u2, presenceAffectsLayout: h2, mode: d2, anchorX: p2 } = t2, m2 = (0, o.M)(f), v2 = (0, r.useId)(), g2 = true, y2 = (0, r.useMemo)(() => (g2 = false, { id: v2, initial: i2, isPresent: s2, custom: u2, onExitComplete: (t3) => {
      for (let e3 of (m2.set(t3, true), m2.values())) if (!e3) return;
      a2 && a2();
    }, register: (t3) => (m2.set(t3, false), () => m2.delete(t3)) }), [s2, m2, a2]);
    return h2 && g2 && (y2 = { ...y2 }), (0, r.useMemo)(() => {
      m2.forEach((t3, e3) => m2.set(e3, false));
    }, [s2]), r.useEffect(() => {
      s2 || m2.size || !a2 || a2();
    }, [s2]), "popLayout" === d2 && (e2 = (0, n.jsx)(c, { isPresent: s2, anchorX: p2, children: e2 })), (0, n.jsx)(l.t.Provider, { value: y2, children: e2 });
  };
  function f() {
    return /* @__PURE__ */ new Map();
  }
  var m = i(3691);
  let v = (t2) => t2.key || "";
  function g(t2) {
    let e2 = [];
    return r.Children.forEach(t2, (t3) => {
      (0, r.isValidElement)(t3) && e2.push(t3);
    }), e2;
  }
  let y = (t2) => {
    let { children: e2, custom: i2, initial: l2 = true, onExitComplete: u2, presenceAffectsLayout: h2 = true, mode: d2 = "sync", propagate: c2 = false, anchorX: f2 = "left" } = t2, [y2, x] = (0, m.xQ)(c2), b = (0, r.useMemo)(() => g(e2), [e2]), w = c2 && !y2 ? [] : b.map(v), S = (0, r.useRef)(true), P = (0, r.useRef)(b), T = (0, o.M)(() => /* @__PURE__ */ new Map()), [A, E] = (0, r.useState)(b), [C, M] = (0, r.useState)(b);
    (0, a.E)(() => {
      S.current = false, P.current = b;
      for (let t3 = 0; t3 < C.length; t3++) {
        let e3 = v(C[t3]);
        w.includes(e3) ? T.delete(e3) : true !== T.get(e3) && T.set(e3, false);
      }
    }, [C, w.length, w.join("-")]);
    let j = [];
    if (b !== A) {
      let t3 = [...b];
      for (let e3 = 0; e3 < C.length; e3++) {
        let i3 = C[e3], n2 = v(i3);
        w.includes(n2) || (t3.splice(e3, 0, i3), j.push(i3));
      }
      return "wait" === d2 && j.length && (t3 = j), M(g(t3)), E(b), null;
    }
    let { forceRender: k } = (0, r.useContext)(s.L);
    return (0, n.jsx)(n.Fragment, { children: C.map((t3) => {
      let e3 = v(t3), r2 = (!c2 || !!y2) && (b === C || w.includes(e3));
      return (0, n.jsx)(p, { isPresent: r2, initial: (!S.current || !!l2) && void 0, custom: i2, presenceAffectsLayout: h2, mode: d2, onExitComplete: r2 ? void 0 : () => {
        if (!T.has(e3)) return;
        T.set(e3, true);
        let t4 = true;
        T.forEach((e4) => {
          e4 || (t4 = false);
        }), t4 && (null == k || k(), M(P.current), c2 && (null == x || x()), u2 && u2());
      }, anchorX: f2, children: t3 }, e3);
    }) });
  };
}, 4491: (t, e) => {
  "use strict";
  function i(t2) {
    let { widthInt: e2, heightInt: i2, blurWidth: n, blurHeight: r, blurDataURL: s, objectFit: o } = t2, a = n ? 40 * n : e2, l = r ? 40 * r : i2, u = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
    return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + u + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (u ? "none" : "contain" === o ? "xMidYMid" : "cover" === o ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + s + "'/%3E%3C/svg%3E";
  }
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "getImageBlurSvg", { enumerable: true, get: function() {
    return i;
  } });
}, 4620: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: function() {
    return o;
  } });
  let n = i(756), r = n.useLayoutEffect, s = n.useEffect;
  function o(t2) {
    let { headManager: e2, reduceComponentsToState: i2 } = t2;
    function o2() {
      if (e2 && e2.mountedInstances) {
        let r2 = n.Children.toArray(Array.from(e2.mountedInstances).filter(Boolean));
        e2.updateHead(i2(r2, t2));
      }
    }
    return r(() => {
      var i3;
      return null == e2 || null == (i3 = e2.mountedInstances) || i3.add(t2.children), () => {
        var i4;
        null == e2 || null == (i4 = e2.mountedInstances) || i4.delete(t2.children);
      };
    }), r(() => (e2 && (e2._pendingUpdate = o2), () => {
      e2 && (e2._pendingUpdate = o2);
    })), s(() => (e2 && e2._pendingUpdate && (e2._pendingUpdate(), e2._pendingUpdate = null), () => {
      e2 && e2._pendingUpdate && (e2._pendingUpdate(), e2._pendingUpdate = null);
    })), null;
  }
}, 4624: (t, e, i) => {
  "use strict";
  i.d(e, { Gt: () => r, PP: () => a, WG: () => s, uv: () => o });
  var n = i(1994);
  let { schedule: r, cancel: s, state: o, steps: a } = (0, i(3648).I)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : n.l, true);
}, 4734: (t, e, i) => {
  "use strict";
  let n;
  i.d(e, { k: () => a });
  var r = i(7920), s = i(4624);
  function o() {
    n = void 0;
  }
  let a = { now: () => (void 0 === n && a.set(s.uv.isProcessing || r.W.useManualTiming ? s.uv.timestamp : performance.now()), n), set: (t2) => {
    n = t2, queueMicrotask(o);
  } };
}, 4800: (t, e, i) => {
  "use strict";
  function n(t2) {
    let e2;
    return () => (void 0 === e2 && (e2 = t2()), e2);
  }
  i.d(e, { p: () => n });
}, 5204: (t, e, i) => {
  "use strict";
  i.d(e, { a: () => n });
  let n = (t2) => Math.round(1e5 * t2) / 1e5;
}, 5257: (t, e, i) => {
  "use strict";
  i.d(e, { S: () => n });
  let n = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
}, 5329: (t, e, i) => {
  "use strict";
  i.d(e, { OQ: () => h });
  var n = i(2335), r = i(696), s = i(4734), o = i(4624);
  let a = (t2) => !isNaN(parseFloat(t2)), l = { current: void 0 };
  class u {
    constructor(t2, e2 = {}) {
      this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (t3, e3 = true) => {
        var _a, _b;
        let i2 = s.k.now();
        if (this.updatedAt !== i2 && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(t3), this.current !== this.prev && ((_a = this.events.change) == null ? void 0 : _a.notify(this.current), this.dependents)) for (let t4 of this.dependents) t4.dirty();
        e3 && ((_b = this.events.renderRequest) == null ? void 0 : _b.notify(this.current));
      }, this.hasAnimated = false, this.setCurrent(t2), this.owner = e2.owner;
    }
    setCurrent(t2) {
      this.current = t2, this.updatedAt = s.k.now(), null === this.canTrackVelocity && void 0 !== t2 && (this.canTrackVelocity = a(this.current));
    }
    setPrevFrameValue(t2 = this.current) {
      this.prevFrameValue = t2, this.prevUpdatedAt = this.updatedAt;
    }
    onChange(t2) {
      return this.on("change", t2);
    }
    on(t2, e2) {
      this.events[t2] || (this.events[t2] = new n.v());
      let i2 = this.events[t2].add(e2);
      return "change" === t2 ? () => {
        i2(), o.Gt.read(() => {
          this.events.change.getSize() || this.stop();
        });
      } : i2;
    }
    clearListeners() {
      for (let t2 in this.events) this.events[t2].clear();
    }
    attach(t2, e2) {
      this.passiveEffect = t2, this.stopPassiveEffect = e2;
    }
    set(t2, e2 = true) {
      e2 && this.passiveEffect ? this.passiveEffect(t2, this.updateAndNotify) : this.updateAndNotify(t2, e2);
    }
    setWithVelocity(t2, e2, i2) {
      this.set(e2), this.prev = void 0, this.prevFrameValue = t2, this.prevUpdatedAt = this.updatedAt - i2;
    }
    jump(t2, e2 = true) {
      this.updateAndNotify(t2), this.prev = t2, this.prevUpdatedAt = this.prevFrameValue = void 0, e2 && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
    dirty() {
      var _a;
      (_a = this.events.change) == null ? void 0 : _a.notify(this.current);
    }
    addDependent(t2) {
      this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(t2);
    }
    removeDependent(t2) {
      this.dependents && this.dependents.delete(t2);
    }
    get() {
      return l.current && l.current.push(this), this.current;
    }
    getPrevious() {
      return this.prev;
    }
    getVelocity() {
      let t2 = s.k.now();
      if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t2 - this.updatedAt > 30) return 0;
      let e2 = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
      return (0, r.f)(parseFloat(this.current) - parseFloat(this.prevFrameValue), e2);
    }
    start(t2) {
      return this.stop(), new Promise((e2) => {
        this.hasAnimated = true, this.animation = t2(e2), this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
      });
    }
    stop() {
      this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
    }
    isAnimating() {
      return !!this.animation;
    }
    clearAnimation() {
      delete this.animation;
    }
    destroy() {
      var _a, _b;
      (_a = this.dependents) == null ? void 0 : _a.clear(), (_b = this.events.destroy) == null ? void 0 : _b.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
    }
  }
  function h(t2, e2) {
    return new u(t2, e2);
  }
}, 6077: (t, e, i) => {
  "use strict";
  function n(t10) {
    return null !== t10 && "object" == typeof t10 && "function" == typeof t10.start;
  }
  function r(t10) {
    let e10 = [{}, {}];
    return null == t10 || t10.values.forEach((t11, i10) => {
      e10[0][i10] = t11.get(), e10[1][i10] = t11.getVelocity();
    }), e10;
  }
  function s(t10, e10, i10, n10) {
    if ("function" == typeof e10) {
      let [s2, o2] = r(n10);
      e10 = e10(void 0 !== i10 ? i10 : t10.custom, s2, o2);
    }
    if ("string" == typeof e10 && (e10 = t10.variants && t10.variants[e10]), "function" == typeof e10) {
      let [s2, o2] = r(n10);
      e10 = e10(void 0 !== i10 ? i10 : t10.custom, s2, o2);
    }
    return e10;
  }
  function o(t10, e10, i10) {
    let n10 = t10.getProps();
    return s(n10, e10, void 0 !== i10 ? i10 : n10.custom, t10);
  }
  function a(t10, e10) {
    var _a, _b;
    return (_b = (_a = t10 == null ? void 0 : t10[e10]) != null ? _a : t10 == null ? void 0 : t10.default) != null ? _b : t10;
  }
  i.d(e, { P: () => rB });
  var l, u, h = i(4624);
  let d = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], c = new Set(d), p = /* @__PURE__ */ new Set(["width", "height", "top", "left", "right", "bottom", ...d]);
  var f = i(5329);
  let m = (t10) => Array.isArray(t10);
  var v = i(7920);
  let g = (t10) => !!(t10 && t10.getVelocity);
  function y(t10, e10) {
    let i10 = t10.getValue("willChange");
    if (g(i10) && i10.add) return i10.add(e10);
    if (!i10 && v.W.WillChange) {
      let i11 = new v.W.WillChange("auto");
      t10.addValue("willChange", i11), i11.add(e10);
    }
  }
  let x = (t10) => t10.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), b = "data-" + x("framerAppearId");
  var w = i(8186), S = i(7809);
  let P = (t10) => 1e3 * t10, T = (t10) => t10 / 1e3;
  var A = i(4734);
  let E = { layout: 0, mainThread: 0, waapi: 0 };
  var C = i(678);
  let M = (t10) => {
    let e10 = ({ timestamp: e11 }) => t10(e11);
    return { start: (t11 = true) => h.Gt.update(e10, t11), stop: () => (0, h.WG)(e10), now: () => h.uv.isProcessing ? h.uv.timestamp : A.k.now() };
  }, j = (t10, e10, i10 = 10) => {
    let n10 = "", r2 = Math.max(Math.round(e10 / i10), 2);
    for (let e11 = 0; e11 < r2; e11++) n10 += Math.round(1e4 * t10(e11 / (r2 - 1))) / 1e4 + ", ";
    return `linear(${n10.substring(0, n10.length - 2)})`;
  };
  function k(t10) {
    let e10 = 0, i10 = t10.next(e10);
    for (; !i10.done && e10 < 2e4; ) e10 += 50, i10 = t10.next(e10);
    return e10 >= 2e4 ? 1 / 0 : e10;
  }
  var R = i(696);
  function V(t10, e10, i10) {
    let n10 = Math.max(e10 - 5, 0);
    return (0, R.f)(i10 - t10(n10), e10 - n10);
  }
  let _ = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: 0.3, visualDuration: 0.3, restSpeed: { granular: 0.01, default: 2 }, restDelta: { granular: 5e-3, default: 0.5 }, minDuration: 0.01, maxDuration: 10, minDamping: 0.05, maxDamping: 1 };
  var D = i(8767);
  function O(t10, e10) {
    return t10 * Math.sqrt(1 - e10 * e10);
  }
  let F = ["duration", "bounce"], L = ["stiffness", "damping", "mass"];
  function B(t10, e10) {
    return e10.some((e11) => void 0 !== t10[e11]);
  }
  function I(t10 = _.visualDuration, e10 = _.bounce) {
    let i10, n10 = "object" != typeof t10 ? { visualDuration: t10, keyframes: [0, 1], bounce: e10 } : t10, { restSpeed: r2, restDelta: s2 } = n10, o2 = n10.keyframes[0], a2 = n10.keyframes[n10.keyframes.length - 1], l2 = { done: false, value: o2 }, { stiffness: u2, damping: h2, mass: d2, duration: c2, velocity: p2, isResolvedFromDuration: f2 } = (function(t11) {
      let e11 = { velocity: _.velocity, stiffness: _.stiffness, damping: _.damping, mass: _.mass, isResolvedFromDuration: false, ...t11 };
      if (!B(t11, L) && B(t11, F)) if (t11.visualDuration) {
        let i11 = 2 * Math.PI / (1.2 * t11.visualDuration), n11 = i11 * i11, r3 = 2 * (0, S.q)(0.05, 1, 1 - (t11.bounce || 0)) * Math.sqrt(n11);
        e11 = { ...e11, mass: _.mass, stiffness: n11, damping: r3 };
      } else {
        let i11 = (function({ duration: t12 = _.duration, bounce: e12 = _.bounce, velocity: i12 = _.velocity, mass: n11 = _.mass }) {
          let r3, s3;
          (0, D.$)(t12 <= P(_.maxDuration), "Spring duration must be 10 seconds or less");
          let o3 = 1 - e12;
          o3 = (0, S.q)(_.minDamping, _.maxDamping, o3), t12 = (0, S.q)(_.minDuration, _.maxDuration, T(t12)), o3 < 1 ? (r3 = (e13) => {
            let n12 = e13 * o3, r4 = n12 * t12;
            return 1e-3 - (n12 - i12) / O(e13, o3) * Math.exp(-r4);
          }, s3 = (e13) => {
            let n12 = e13 * o3 * t12, s4 = Math.pow(o3, 2) * Math.pow(e13, 2) * t12, a4 = Math.exp(-n12), l3 = O(Math.pow(e13, 2), o3);
            return (n12 * i12 + i12 - s4) * a4 * (-r3(e13) + 1e-3 > 0 ? -1 : 1) / l3;
          }) : (r3 = (e13) => -1e-3 + Math.exp(-e13 * t12) * ((e13 - i12) * t12 + 1), s3 = (e13) => t12 * t12 * (i12 - e13) * Math.exp(-e13 * t12));
          let a3 = (function(t13, e13, i13) {
            let n12 = i13;
            for (let i14 = 1; i14 < 12; i14++) n12 -= t13(n12) / e13(n12);
            return n12;
          })(r3, s3, 5 / t12);
          if (t12 = P(t12), isNaN(a3)) return { stiffness: _.stiffness, damping: _.damping, duration: t12 };
          {
            let e13 = Math.pow(a3, 2) * n11;
            return { stiffness: e13, damping: 2 * o3 * Math.sqrt(n11 * e13), duration: t12 };
          }
        })(t11);
        (e11 = { ...e11, ...i11, mass: _.mass }).isResolvedFromDuration = true;
      }
      return e11;
    })({ ...n10, velocity: -T(n10.velocity || 0) }), m2 = p2 || 0, v2 = h2 / (2 * Math.sqrt(u2 * d2)), g2 = a2 - o2, y2 = T(Math.sqrt(u2 / d2)), x2 = 5 > Math.abs(g2);
    if (r2 || (r2 = x2 ? _.restSpeed.granular : _.restSpeed.default), s2 || (s2 = x2 ? _.restDelta.granular : _.restDelta.default), v2 < 1) {
      let t11 = O(y2, v2);
      i10 = (e11) => a2 - Math.exp(-v2 * y2 * e11) * ((m2 + v2 * y2 * g2) / t11 * Math.sin(t11 * e11) + g2 * Math.cos(t11 * e11));
    } else if (1 === v2) i10 = (t11) => a2 - Math.exp(-y2 * t11) * (g2 + (m2 + y2 * g2) * t11);
    else {
      let t11 = y2 * Math.sqrt(v2 * v2 - 1);
      i10 = (e11) => {
        let i11 = Math.exp(-v2 * y2 * e11), n11 = Math.min(t11 * e11, 300);
        return a2 - i11 * ((m2 + v2 * y2 * g2) * Math.sinh(n11) + t11 * g2 * Math.cosh(n11)) / t11;
      };
    }
    let b2 = { calculatedDuration: f2 && c2 || null, next: (t11) => {
      let e11 = i10(t11);
      if (f2) l2.done = t11 >= c2;
      else {
        let n11 = 0 === t11 ? m2 : 0;
        v2 < 1 && (n11 = 0 === t11 ? P(m2) : V(i10, t11, e11));
        let o3 = Math.abs(a2 - e11) <= s2;
        l2.done = Math.abs(n11) <= r2 && o3;
      }
      return l2.value = l2.done ? a2 : e11, l2;
    }, toString: () => {
      let t11 = Math.min(k(b2), 2e4), e11 = j((e12) => b2.next(t11 * e12).value, t11, 30);
      return t11 + "ms " + e11;
    }, toTransition: () => {
    } };
    return b2;
  }
  function z({ keyframes: t10, velocity: e10 = 0, power: i10 = 0.8, timeConstant: n10 = 325, bounceDamping: r2 = 10, bounceStiffness: s2 = 500, modifyTarget: o2, min: a2, max: l2, restDelta: u2 = 0.5, restSpeed: h2 }) {
    let d2, c2, p2 = t10[0], f2 = { done: false, value: p2 }, m2 = (t11) => void 0 !== a2 && t11 < a2 || void 0 !== l2 && t11 > l2, v2 = (t11) => void 0 === a2 ? l2 : void 0 === l2 || Math.abs(a2 - t11) < Math.abs(l2 - t11) ? a2 : l2, g2 = i10 * e10, y2 = p2 + g2, x2 = void 0 === o2 ? y2 : o2(y2);
    x2 !== y2 && (g2 = x2 - p2);
    let b2 = (t11) => -g2 * Math.exp(-t11 / n10), w2 = (t11) => x2 + b2(t11), S2 = (t11) => {
      let e11 = b2(t11), i11 = w2(t11);
      f2.done = Math.abs(e11) <= u2, f2.value = f2.done ? x2 : i11;
    }, P2 = (t11) => {
      m2(f2.value) && (d2 = t11, c2 = I({ keyframes: [f2.value, v2(f2.value)], velocity: V(w2, t11, f2.value), damping: r2, stiffness: s2, restDelta: u2, restSpeed: h2 }));
    };
    return P2(0), { calculatedDuration: null, next: (t11) => {
      let e11 = false;
      return (c2 || void 0 !== d2 || (e11 = true, S2(t11), P2(t11)), void 0 !== d2 && t11 >= d2) ? c2.next(t11 - d2) : (e11 || S2(t11), f2);
    } };
  }
  I.applyToOptions = (t10) => {
    let e10 = (function(t11, e11 = 100, i10) {
      let n10 = i10({ ...t11, keyframes: [0, e11] }), r2 = Math.min(k(n10), 2e4);
      return { type: "keyframes", ease: (t12) => n10.next(r2 * t12).value / e11, duration: T(r2) };
    })(t10, 100, I);
    return t10.ease = e10.ease, t10.duration = P(e10.duration), t10.type = "keyframes", t10;
  };
  var N = i(1994);
  let U = (t10, e10, i10) => (((1 - 3 * i10 + 3 * e10) * t10 + (3 * i10 - 6 * e10)) * t10 + 3 * e10) * t10;
  function W(t10, e10, i10, n10) {
    if (t10 === e10 && i10 === n10) return N.l;
    let r2 = (e11) => (function(t11, e12, i11, n11, r3) {
      let s2, o2, a2 = 0;
      do
        (s2 = U(o2 = e12 + (i11 - e12) / 2, n11, r3) - t11) > 0 ? i11 = o2 : e12 = o2;
      while (Math.abs(s2) > 1e-7 && ++a2 < 12);
      return o2;
    })(e11, 0, 1, t10, i10);
    return (t11) => 0 === t11 || 1 === t11 ? t11 : U(r2(t11), e10, n10);
  }
  let G = W(0.42, 0, 1, 1), q = W(0, 0, 0.58, 1), X = W(0.42, 0, 0.58, 1), K = (t10) => Array.isArray(t10) && "number" != typeof t10[0], $ = (t10) => (e10) => e10 <= 0.5 ? t10(2 * e10) / 2 : (2 - t10(2 * (1 - e10))) / 2, Y = (t10) => (e10) => 1 - t10(1 - e10), H = W(0.33, 1.53, 0.69, 0.99), Q = Y(H), Z = $(Q), J = (t10) => (t10 *= 2) < 1 ? 0.5 * Q(t10) : 0.5 * (2 - Math.pow(2, -10 * (t10 - 1))), tt = (t10) => 1 - Math.sin(Math.acos(t10)), te = Y(tt), ti = $(tt), tn = (t10) => Array.isArray(t10) && "number" == typeof t10[0], tr = { linear: N.l, easeIn: G, easeInOut: X, easeOut: q, circIn: tt, circInOut: ti, circOut: te, backIn: Q, backInOut: Z, backOut: H, anticipate: J }, ts = (t10) => "string" == typeof t10, to = (t10) => {
    if (tn(t10)) {
      (0, D.V)(4 === t10.length, "Cubic bezier arrays must contain four numerical values.");
      let [e10, i10, n10, r2] = t10;
      return W(e10, i10, n10, r2);
    }
    return ts(t10) ? ((0, D.V)(void 0 !== tr[t10], `Invalid easing type '${t10}'`), tr[t10]) : t10;
  };
  var ta = i(1036), tl = i(2433);
  function tu({ duration: t10 = 300, keyframes: e10, times: i10, ease: n10 = "easeInOut" }) {
    var r2;
    let s2 = K(n10) ? n10.map(to) : to(n10), o2 = { done: false, value: e10[0] }, a2 = (r2 = i10 && i10.length === e10.length ? i10 : (0, tl.Z)(e10), r2.map((e11) => e11 * t10)), l2 = (0, ta.G)(a2, e10, { ease: Array.isArray(s2) ? s2 : e10.map(() => s2 || X).splice(0, e10.length - 1) });
    return { calculatedDuration: t10, next: (e11) => (o2.value = l2(e11), o2.done = e11 >= t10, o2) };
  }
  let th = (t10) => null !== t10;
  function td(t10, { repeat: e10, repeatType: i10 = "loop" }, n10, r2 = 1) {
    let s2 = t10.filter(th), o2 = r2 < 0 || e10 && "loop" !== i10 && e10 % 2 == 1 ? 0 : s2.length - 1;
    return o2 && void 0 !== n10 ? n10 : s2[o2];
  }
  let tc = { decay: z, inertia: z, tween: tu, keyframes: tu, spring: I };
  function tp(t10) {
    "string" == typeof t10.type && (t10.type = tc[t10.type]);
  }
  class tf {
    constructor() {
      this.updateFinished();
    }
    get finished() {
      return this._finished;
    }
    updateFinished() {
      this._finished = new Promise((t10) => {
        this.resolve = t10;
      });
    }
    notifyFinished() {
      this.resolve();
    }
    then(t10, e10) {
      return this.finished.then(t10, e10);
    }
  }
  let tm = (t10) => t10 / 100;
  class tv extends tf {
    constructor(t10) {
      super(), this.state = "idle", this.startTime = null, this.isStopped = false, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
        var _a, _b;
        let { motionValue: t11 } = this.options;
        t11 && t11.updatedAt !== A.k.now() && this.tick(A.k.now()), this.isStopped = true, "idle" !== this.state && (this.teardown(), (_b = (_a = this.options).onStop) == null ? void 0 : _b.call(_a));
      }, E.mainThread++, this.options = t10, this.initAnimation(), this.play(), false === t10.autoplay && this.pause();
    }
    initAnimation() {
      let { options: t10 } = this;
      tp(t10);
      let { type: e10 = tu, repeat: i10 = 0, repeatDelay: n10 = 0, repeatType: r2, velocity: s2 = 0 } = t10, { keyframes: o2 } = t10, a2 = e10 || tu;
      a2 !== tu && "number" != typeof o2[0] && (this.mixKeyframes = (0, w.F)(tm, (0, C.j)(o2[0], o2[1])), o2 = [0, 100]);
      let l2 = a2({ ...t10, keyframes: o2 });
      "mirror" === r2 && (this.mirroredGenerator = a2({ ...t10, keyframes: [...o2].reverse(), velocity: -s2 })), null === l2.calculatedDuration && (l2.calculatedDuration = k(l2));
      let { calculatedDuration: u2 } = l2;
      this.calculatedDuration = u2, this.resolvedDuration = u2 + n10, this.totalDuration = this.resolvedDuration * (i10 + 1) - n10, this.generator = l2;
    }
    updateTime(t10) {
      let e10 = Math.round(t10 - this.startTime) * this.playbackSpeed;
      null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e10;
    }
    tick(t10, e10 = false) {
      let { generator: i10, totalDuration: n10, mixKeyframes: r2, mirroredGenerator: s2, resolvedDuration: o2, calculatedDuration: a2 } = this;
      if (null === this.startTime) return i10.next(0);
      let { delay: l2 = 0, keyframes: u2, repeat: h2, repeatType: d2, repeatDelay: c2, type: p2, onUpdate: f2, finalKeyframe: m2 } = this.options;
      this.speed > 0 ? this.startTime = Math.min(this.startTime, t10) : this.speed < 0 && (this.startTime = Math.min(t10 - n10 / this.speed, this.startTime)), e10 ? this.currentTime = t10 : this.updateTime(t10);
      let v2 = this.currentTime - l2 * (this.playbackSpeed >= 0 ? 1 : -1), g2 = this.playbackSpeed >= 0 ? v2 < 0 : v2 > n10;
      this.currentTime = Math.max(v2, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n10);
      let y2 = this.currentTime, x2 = i10;
      if (h2) {
        let t11 = Math.min(this.currentTime, n10) / o2, e11 = Math.floor(t11), i11 = t11 % 1;
        !i11 && t11 >= 1 && (i11 = 1), 1 === i11 && e11--, (e11 = Math.min(e11, h2 + 1)) % 2 && ("reverse" === d2 ? (i11 = 1 - i11, c2 && (i11 -= c2 / o2)) : "mirror" === d2 && (x2 = s2)), y2 = (0, S.q)(0, 1, i11) * o2;
      }
      let b2 = g2 ? { done: false, value: u2[0] } : x2.next(y2);
      r2 && (b2.value = r2(b2.value));
      let { done: w2 } = b2;
      g2 || null === a2 || (w2 = this.playbackSpeed >= 0 ? this.currentTime >= n10 : this.currentTime <= 0);
      let P2 = null === this.holdTime && ("finished" === this.state || "running" === this.state && w2);
      return P2 && p2 !== z && (b2.value = td(u2, this.options, m2, this.speed)), f2 && f2(b2.value), P2 && this.finish(), b2;
    }
    then(t10, e10) {
      return this.finished.then(t10, e10);
    }
    get duration() {
      return T(this.calculatedDuration);
    }
    get time() {
      return T(this.currentTime);
    }
    set time(t10) {
      var _a;
      t10 = P(t10), this.currentTime = t10, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t10 : this.driver && (this.startTime = this.driver.now() - t10 / this.playbackSpeed), (_a = this.driver) == null ? void 0 : _a.start(false);
    }
    get speed() {
      return this.playbackSpeed;
    }
    set speed(t10) {
      this.updateTime(A.k.now());
      let e10 = this.playbackSpeed !== t10;
      this.playbackSpeed = t10, e10 && (this.time = T(this.currentTime));
    }
    play() {
      var _a, _b;
      if (this.isStopped) return;
      let { driver: t10 = M, startTime: e10 } = this.options;
      this.driver || (this.driver = t10((t11) => this.tick(t11))), (_b = (_a = this.options).onPlay) == null ? void 0 : _b.call(_a);
      let i10 = this.driver.now();
      "finished" === this.state ? (this.updateFinished(), this.startTime = i10) : null !== this.holdTime ? this.startTime = i10 - this.holdTime : this.startTime || (this.startTime = e10 != null ? e10 : i10), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
    }
    pause() {
      this.state = "paused", this.updateTime(A.k.now()), this.holdTime = this.currentTime;
    }
    complete() {
      "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null;
    }
    finish() {
      var _a, _b;
      this.notifyFinished(), this.teardown(), this.state = "finished", (_b = (_a = this.options).onComplete) == null ? void 0 : _b.call(_a);
    }
    cancel() {
      var _a, _b;
      this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (_b = (_a = this.options).onCancel) == null ? void 0 : _b.call(_a);
    }
    teardown() {
      this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, E.mainThread--;
    }
    stopDriver() {
      this.driver && (this.driver.stop(), this.driver = void 0);
    }
    sample(t10) {
      return this.startTime = 0, this.tick(t10, true);
    }
    attachTimeline(t10) {
      var _a;
      return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (_a = this.driver) == null ? void 0 : _a.stop(), t10.observe(this);
    }
  }
  let tg = (t10) => 180 * t10 / Math.PI, ty = (t10) => tb(tg(Math.atan2(t10[1], t10[0]))), tx = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: (t10) => (Math.abs(t10[0]) + Math.abs(t10[3])) / 2, rotate: ty, rotateZ: ty, skewX: (t10) => tg(Math.atan(t10[1])), skewY: (t10) => tg(Math.atan(t10[2])), skew: (t10) => (Math.abs(t10[1]) + Math.abs(t10[2])) / 2 }, tb = (t10) => ((t10 %= 360) < 0 && (t10 += 360), t10), tw = (t10) => Math.sqrt(t10[0] * t10[0] + t10[1] * t10[1]), tS = (t10) => Math.sqrt(t10[4] * t10[4] + t10[5] * t10[5]), tP = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: tw, scaleY: tS, scale: (t10) => (tw(t10) + tS(t10)) / 2, rotateX: (t10) => tb(tg(Math.atan2(t10[6], t10[5]))), rotateY: (t10) => tb(tg(Math.atan2(-t10[2], t10[0]))), rotateZ: ty, rotate: ty, skewX: (t10) => tg(Math.atan(t10[4])), skewY: (t10) => tg(Math.atan(t10[1])), skew: (t10) => (Math.abs(t10[1]) + Math.abs(t10[4])) / 2 };
  function tT(t10) {
    return +!!t10.includes("scale");
  }
  function tA(t10, e10) {
    let i10, n10;
    if (!t10 || "none" === t10) return tT(e10);
    let r2 = t10.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
    if (r2) i10 = tP, n10 = r2;
    else {
      let e11 = t10.match(/^matrix\(([-\d.e\s,]+)\)$/u);
      i10 = tx, n10 = e11;
    }
    if (!n10) return tT(e10);
    let s2 = i10[e10], o2 = n10[1].split(",").map(tC);
    return "function" == typeof s2 ? s2(o2) : o2[s2];
  }
  let tE = (t10, e10) => {
    let { transform: i10 = "none" } = getComputedStyle(t10);
    return tA(i10, e10);
  };
  function tC(t10) {
    return parseFloat(t10.trim());
  }
  var tM = i(7564), tj = i(6405);
  let tk = (t10) => t10 === tM.ai || t10 === tj.px, tR = /* @__PURE__ */ new Set(["x", "y", "z"]), tV = d.filter((t10) => !tR.has(t10)), t_ = { width: ({ x: t10 }, { paddingLeft: e10 = "0", paddingRight: i10 = "0" }) => t10.max - t10.min - parseFloat(e10) - parseFloat(i10), height: ({ y: t10 }, { paddingTop: e10 = "0", paddingBottom: i10 = "0" }) => t10.max - t10.min - parseFloat(e10) - parseFloat(i10), top: (t10, { top: e10 }) => parseFloat(e10), left: (t10, { left: e10 }) => parseFloat(e10), bottom: ({ y: t10 }, { top: e10 }) => parseFloat(e10) + (t10.max - t10.min), right: ({ x: t10 }, { left: e10 }) => parseFloat(e10) + (t10.max - t10.min), x: (t10, { transform: e10 }) => tA(e10, "x"), y: (t10, { transform: e10 }) => tA(e10, "y") };
  t_.translateX = t_.x, t_.translateY = t_.y;
  let tD = /* @__PURE__ */ new Set(), tO = false, tF = false, tL = false;
  function tB() {
    if (tF) {
      let t10 = Array.from(tD).filter((t11) => t11.needsMeasurement), e10 = new Set(t10.map((t11) => t11.element)), i10 = /* @__PURE__ */ new Map();
      e10.forEach((t11) => {
        let e11 = (function(t12) {
          let e12 = [];
          return tV.forEach((i11) => {
            let n10 = t12.getValue(i11);
            void 0 !== n10 && (e12.push([i11, n10.get()]), n10.set(+!!i11.startsWith("scale")));
          }), e12;
        })(t11);
        e11.length && (i10.set(t11, e11), t11.render());
      }), t10.forEach((t11) => t11.measureInitialState()), e10.forEach((t11) => {
        t11.render();
        let e11 = i10.get(t11);
        e11 && e11.forEach(([e12, i11]) => {
          var _a;
          (_a = t11.getValue(e12)) == null ? void 0 : _a.set(i11);
        });
      }), t10.forEach((t11) => t11.measureEndState()), t10.forEach((t11) => {
        void 0 !== t11.suspendedScrollY && window.scrollTo(0, t11.suspendedScrollY);
      });
    }
    tF = false, tO = false, tD.forEach((t10) => t10.complete(tL)), tD.clear();
  }
  function tI() {
    tD.forEach((t10) => {
      t10.readKeyframes(), t10.needsMeasurement && (tF = true);
    });
  }
  class tz {
    constructor(t10, e10, i10, n10, r2, s2 = false) {
      this.state = "pending", this.isAsync = false, this.needsMeasurement = false, this.unresolvedKeyframes = [...t10], this.onComplete = e10, this.name = i10, this.motionValue = n10, this.element = r2, this.isAsync = s2;
    }
    scheduleResolve() {
      this.state = "scheduled", this.isAsync ? (tD.add(this), tO || (tO = true, h.Gt.read(tI), h.Gt.resolveKeyframes(tB))) : (this.readKeyframes(), this.complete());
    }
    readKeyframes() {
      var _a;
      let { unresolvedKeyframes: t10, name: e10, element: i10, motionValue: n10 } = this;
      if (null === t10[0]) {
        let r2 = n10 == null ? void 0 : n10.get(), s2 = t10[t10.length - 1];
        if (void 0 !== r2) t10[0] = r2;
        else if (i10 && e10) {
          let n11 = i10.readValue(e10, s2);
          null != n11 && (t10[0] = n11);
        }
        void 0 === t10[0] && (t10[0] = s2), n10 && void 0 === r2 && n10.set(t10[0]);
      }
      for (let e11 = 1; e11 < t10.length; e11++) (_a = t10[e11]) != null ? _a : t10[e11] = t10[e11 - 1];
    }
    setFinalKeyframe() {
    }
    measureInitialState() {
    }
    renderEndStyles() {
    }
    measureEndState() {
    }
    complete(t10 = false) {
      this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t10), tD.delete(this);
    }
    cancel() {
      "scheduled" === this.state && (tD.delete(this), this.state = "pending");
    }
    resume() {
      "pending" === this.state && this.scheduleResolve();
    }
  }
  let tN = (t10) => t10.startsWith("--");
  var tU = i(9453), tW = i(3185), tG = i(4800);
  let tq = {}, tX = (function(t10, e10) {
    let i10 = (0, tG.p)(t10);
    return () => {
      var _a;
      return (_a = tq[e10]) != null ? _a : i10();
    };
  })(() => {
    try {
      document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch (t10) {
      return false;
    }
    return true;
  }, "linearEasing"), tK = ([t10, e10, i10, n10]) => `cubic-bezier(${t10}, ${e10}, ${i10}, ${n10})`, t$ = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: tK([0, 0.65, 0.55, 1]), circOut: tK([0.55, 0, 1, 0.45]), backIn: tK([0.31, 0.01, 0.66, -0.59]), backOut: tK([0.33, 1.53, 0.69, 0.99]) };
  function tY(t10) {
    return "function" == typeof t10 && "applyToOptions" in t10;
  }
  class tH extends tf {
    constructor(t10) {
      if (super(), this.finishedTime = null, this.isStopped = false, !t10) return;
      let { element: e10, name: i10, keyframes: n10, pseudoElement: r2, allowFlatten: s2 = false, finalKeyframe: o2, onComplete: a2 } = t10;
      this.isPseudoElement = !!r2, this.allowFlatten = s2, this.options = t10, (0, D.V)("string" != typeof t10.type, `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "motion"?`);
      let l2 = (function({ type: t11, ...e11 }) {
        var _a, _b;
        return tY(t11) && tX() ? t11.applyToOptions(e11) : ((_a = e11.duration) != null ? _a : e11.duration = 300, (_b = e11.ease) != null ? _b : e11.ease = "easeOut", e11);
      })(t10);
      this.animation = (function(t11, e11, i11, { delay: n11 = 0, duration: r3 = 300, repeat: s3 = 0, repeatType: o3 = "loop", ease: a3 = "easeOut", times: l3 } = {}, u2) {
        let h2 = { [e11]: i11 };
        l3 && (h2.offset = l3);
        let d2 = (function t12(e12, i12) {
          if (e12) return "function" == typeof e12 ? tX() ? j(e12, i12) : "ease-out" : tn(e12) ? tK(e12) : Array.isArray(e12) ? e12.map((e13) => t12(e13, i12) || t$.easeOut) : t$[e12];
        })(a3, r3);
        Array.isArray(d2) && (h2.easing = d2), tW.Q.value && E.waapi++;
        let c2 = { delay: n11, duration: r3, easing: Array.isArray(d2) ? "linear" : d2, fill: "both", iterations: s3 + 1, direction: "reverse" === o3 ? "alternate" : "normal" };
        u2 && (c2.pseudoElement = u2);
        let p2 = t11.animate(h2, c2);
        return tW.Q.value && p2.finished.finally(() => {
          E.waapi--;
        }), p2;
      })(e10, i10, n10, l2, r2), false === l2.autoplay && this.animation.pause(), this.animation.onfinish = () => {
        if (this.finishedTime = this.time, !r2) {
          let t11 = td(n10, this.options, o2, this.speed);
          this.updateMotionValue ? this.updateMotionValue(t11) : (function(t12, e11, i11) {
            tN(e11) ? t12.style.setProperty(e11, i11) : t12.style[e11] = i11;
          })(e10, i10, t11), this.animation.cancel();
        }
        a2 == null ? void 0 : a2(), this.notifyFinished();
      };
    }
    play() {
      this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished());
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      var _a, _b;
      (_b = (_a = this.animation).finish) == null ? void 0 : _b.call(_a);
    }
    cancel() {
      try {
        this.animation.cancel();
      } catch (t10) {
      }
    }
    stop() {
      if (this.isStopped) return;
      this.isStopped = true;
      let { state: t10 } = this;
      "idle" !== t10 && "finished" !== t10 && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
    }
    commitStyles() {
      var _a, _b;
      this.isPseudoElement || ((_b = (_a = this.animation).commitStyles) == null ? void 0 : _b.call(_a));
    }
    get duration() {
      var _a, _b;
      return T(Number(((_b = (_a = this.animation.effect) == null ? void 0 : _a.getComputedTiming) == null ? void 0 : _b.call(_a).duration) || 0));
    }
    get time() {
      return T(Number(this.animation.currentTime) || 0);
    }
    set time(t10) {
      this.finishedTime = null, this.animation.currentTime = P(t10);
    }
    get speed() {
      return this.animation.playbackRate;
    }
    set speed(t10) {
      t10 < 0 && (this.finishedTime = null), this.animation.playbackRate = t10;
    }
    get state() {
      return null !== this.finishedTime ? "finished" : this.animation.playState;
    }
    get startTime() {
      return Number(this.animation.startTime);
    }
    set startTime(t10) {
      this.animation.startTime = t10;
    }
    attachTimeline({ timeline: t10, observe: e10 }) {
      var _a;
      return (this.allowFlatten && ((_a = this.animation.effect) == null ? void 0 : _a.updateTiming({ easing: "linear" })), this.animation.onfinish = null, t10 && (0, tU.J)()) ? (this.animation.timeline = t10, N.l) : e10(this);
    }
  }
  let tQ = { anticipate: J, backInOut: Z, circInOut: ti };
  class tZ extends tH {
    constructor(t10) {
      !(function(t11) {
        "string" == typeof t11.ease && t11.ease in tQ && (t11.ease = tQ[t11.ease]);
      })(t10), tp(t10), super(t10), t10.startTime && (this.startTime = t10.startTime), this.options = t10;
    }
    updateMotionValue(t10) {
      var _a;
      let { motionValue: e10, onUpdate: i10, onComplete: n10, element: r2, ...s2 } = this.options;
      if (!e10) return;
      if (void 0 !== t10) return void e10.set(t10);
      let o2 = new tv({ ...s2, autoplay: false }), a2 = P((_a = this.finishedTime) != null ? _a : this.time);
      e10.setWithVelocity(o2.sample(a2 - 10).value, o2.sample(a2).value, 10), o2.stop();
    }
  }
  var tJ = i(7355);
  let t0 = (t10, e10) => "zIndex" !== e10 && !!("number" == typeof t10 || Array.isArray(t10) || "string" == typeof t10 && (tJ.f.test(t10) || "0" === t10) && !t10.startsWith("url("));
  var t1 = i(24);
  let t2 = /* @__PURE__ */ new Set(["opacity", "clipPath", "filter", "transform"]), t5 = (0, tG.p)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
  class t3 extends tf {
    constructor({ autoplay: t10 = true, delay: e10 = 0, type: i10 = "keyframes", repeat: n10 = 0, repeatDelay: r2 = 0, repeatType: s2 = "loop", keyframes: o2, name: a2, motionValue: l2, element: u2, ...h2 }) {
      var _a;
      super(), this.stop = () => {
        var _a2, _b;
        this._animation && (this._animation.stop(), (_a2 = this.stopTimeline) == null ? void 0 : _a2.call(this)), (_b = this.keyframeResolver) == null ? void 0 : _b.cancel();
      }, this.createdAt = A.k.now();
      let d2 = { autoplay: t10, delay: e10, type: i10, repeat: n10, repeatDelay: r2, repeatType: s2, name: a2, motionValue: l2, element: u2, ...h2 }, c2 = (u2 == null ? void 0 : u2.KeyframeResolver) || tz;
      this.keyframeResolver = new c2(o2, (t11, e11, i11) => this.onKeyframesResolved(t11, e11, d2, !i11), a2, l2, u2), (_a = this.keyframeResolver) == null ? void 0 : _a.scheduleResolve();
    }
    onKeyframesResolved(t10, e10, i10, n10) {
      this.keyframeResolver = void 0;
      let { name: r2, type: s2, velocity: o2, delay: a2, isHandoff: l2, onUpdate: u2 } = i10;
      this.resolvedAt = A.k.now(), !(function(t11, e11, i11, n11) {
        let r3 = t11[0];
        if (null === r3) return false;
        if ("display" === e11 || "visibility" === e11) return true;
        let s3 = t11[t11.length - 1], o3 = t0(r3, e11), a3 = t0(s3, e11);
        return (0, D.$)(o3 === a3, `You are trying to animate ${e11} from "${r3}" to "${s3}". ${r3} is not an animatable value - to enable this animation set ${r3} to a value animatable to ${s3} via the \`style\` property.`), !!o3 && !!a3 && ((function(t12) {
          let e12 = t12[0];
          if (1 === t12.length) return true;
          for (let i12 = 0; i12 < t12.length; i12++) if (t12[i12] !== e12) return true;
        })(t11) || ("spring" === i11 || tY(i11)) && n11);
      })(t10, r2, s2, o2) && ((v.W.instantAnimations || !a2) && (u2 == null ? void 0 : u2(td(t10, i10, e10))), t10[0] = t10[t10.length - 1], i10.duration = 0, i10.repeat = 0);
      let h2 = { startTime: n10 ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0, finalKeyframe: e10, ...i10, keyframes: t10 }, d2 = !l2 && (function(t11) {
        var _a;
        let { motionValue: e11, name: i11, repeatDelay: n11, repeatType: r3, damping: s3, type: o3 } = t11;
        if (!(0, t1.s)((_a = e11 == null ? void 0 : e11.owner) == null ? void 0 : _a.current)) return false;
        let { onUpdate: a3, transformTemplate: l3 } = e11.owner.getProps();
        return t5() && i11 && t2.has(i11) && ("transform" !== i11 || !l3) && !a3 && !n11 && "mirror" !== r3 && 0 !== s3 && "inertia" !== o3;
      })(h2) ? new tZ({ ...h2, element: h2.motionValue.owner.current }) : new tv(h2);
      d2.finished.then(() => this.notifyFinished()).catch(N.l), this.pendingTimeline && (this.stopTimeline = d2.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = d2;
    }
    get finished() {
      return this._animation ? this.animation.finished : this._finished;
    }
    then(t10, e10) {
      return this.finished.finally(t10).then(() => {
      });
    }
    get animation() {
      var _a;
      return this._animation || ((_a = this.keyframeResolver) == null ? void 0 : _a.resume(), tL = true, tI(), tB(), tL = false), this._animation;
    }
    get duration() {
      return this.animation.duration;
    }
    get time() {
      return this.animation.time;
    }
    set time(t10) {
      this.animation.time = t10;
    }
    get speed() {
      return this.animation.speed;
    }
    get state() {
      return this.animation.state;
    }
    set speed(t10) {
      this.animation.speed = t10;
    }
    get startTime() {
      return this.animation.startTime;
    }
    attachTimeline(t10) {
      return this._animation ? this.stopTimeline = this.animation.attachTimeline(t10) : this.pendingTimeline = t10, () => this.stop();
    }
    play() {
      this.animation.play();
    }
    pause() {
      this.animation.pause();
    }
    complete() {
      this.animation.complete();
    }
    cancel() {
      var _a;
      this._animation && this.animation.cancel(), (_a = this.keyframeResolver) == null ? void 0 : _a.cancel();
    }
  }
  let t4 = (t10) => null !== t10, t9 = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, t6 = (t10) => ({ type: "spring", stiffness: 550, damping: 0 === t10 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), t7 = { type: "keyframes", duration: 0.8 }, t8 = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 }, et = (t10, e10) => {
    let { keyframes: i10 } = e10;
    return i10.length > 2 ? t7 : c.has(t10) ? t10.startsWith("scale") ? t6(i10[1]) : t9 : t8;
  }, ee = function(t10, e10, i10) {
    let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r2 = arguments.length > 4 ? arguments[4] : void 0, s2 = arguments.length > 5 ? arguments[5] : void 0;
    return (o2) => {
      let l2 = a(n10, t10) || {}, u2 = l2.delay || n10.delay || 0, { elapsed: d2 = 0 } = n10;
      d2 -= P(u2);
      let c2 = { keyframes: Array.isArray(i10) ? i10 : [null, i10], ease: "easeOut", velocity: e10.getVelocity(), ...l2, delay: -d2, onUpdate: (t11) => {
        e10.set(t11), l2.onUpdate && l2.onUpdate(t11);
      }, onComplete: () => {
        o2(), l2.onComplete && l2.onComplete();
      }, name: t10, motionValue: e10, element: s2 ? void 0 : r2 };
      !(function(t11) {
        let { when: e11, delay: i11, delayChildren: n11, staggerChildren: r3, staggerDirection: s3, repeat: o3, repeatType: a2, repeatDelay: l3, from: u3, elapsed: h2, ...d3 } = t11;
        return !!Object.keys(d3).length;
      })(l2) && Object.assign(c2, et(t10, c2)), c2.duration && (c2.duration = P(c2.duration)), c2.repeatDelay && (c2.repeatDelay = P(c2.repeatDelay)), void 0 !== c2.from && (c2.keyframes[0] = c2.from);
      let p2 = false;
      if (false !== c2.type && (0 !== c2.duration || c2.repeatDelay) || (c2.duration = 0, 0 === c2.delay && (p2 = true)), (v.W.instantAnimations || v.W.skipAnimations) && (p2 = true, c2.duration = 0, c2.delay = 0), c2.allowFlatten = !l2.type && !l2.ease, p2 && !s2 && void 0 !== e10.get()) {
        let t11 = (function(t12, e11, i11) {
          let { repeat: n11, repeatType: r3 = "loop" } = e11, s3 = t12.filter(t4), o3 = n11 && "loop" !== r3 && n11 % 2 == 1 ? 0 : s3.length - 1;
          return s3[o3];
        })(c2.keyframes, l2);
        if (void 0 !== t11) return void h.Gt.update(() => {
          c2.onUpdate(t11), c2.onComplete();
        });
      }
      return l2.isSync ? new tv(c2) : new t3(c2);
    };
  };
  function ei(t10, e10) {
    let { delay: i10 = 0, transitionOverride: n10, type: r2 } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, { transition: s2 = t10.getDefaultTransition(), transitionEnd: l2, ...u2 } = e10;
    n10 && (s2 = n10);
    let d2 = [], c2 = r2 && t10.animationState && t10.animationState.getState()[r2];
    for (let e11 in u2) {
      var v2;
      let n11 = t10.getValue(e11, null != (v2 = t10.latestValues[e11]) ? v2 : null), r3 = u2[e11];
      if (void 0 === r3 || c2 && (function(t11, e12) {
        let { protectedKeys: i11, needsAnimating: n12 } = t11, r4 = i11.hasOwnProperty(e12) && true !== n12[e12];
        return n12[e12] = false, r4;
      })(c2, e11)) continue;
      let o2 = { delay: i10, ...a(s2 || {}, e11) }, l3 = n11.get();
      if (void 0 !== l3 && !n11.isAnimating && !Array.isArray(r3) && r3 === l3 && !o2.velocity) continue;
      let f2 = false;
      if (window.MotionHandoffAnimation) {
        let i11 = t10.props[b];
        if (i11) {
          let t11 = window.MotionHandoffAnimation(i11, e11, h.Gt);
          null !== t11 && (o2.startTime = t11, f2 = true);
        }
      }
      y(t10, e11), n11.start(ee(e11, n11, r3, t10.shouldReduceMotion && p.has(e11) ? { type: false } : o2, t10, f2));
      let m2 = n11.animation;
      m2 && d2.push(m2);
    }
    return l2 && Promise.all(d2).then(() => {
      h.Gt.update(() => {
        l2 && (function(t11, e11) {
          let { transitionEnd: i11 = {}, transition: n11 = {}, ...r3 } = o(t11, e11) || {};
          for (let e12 in r3 = { ...r3, ...i11 }) {
            var s3;
            let i12 = m(s3 = r3[e12]) ? s3[s3.length - 1] || 0 : s3;
            t11.hasValue(e12) ? t11.getValue(e12).set(i12) : t11.addValue(e12, (0, f.OQ)(i12));
          }
        })(t10, l2);
      });
    }), d2;
  }
  function en(t10, e10) {
    var i10;
    let n10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r2 = o(t10, e10, "exit" === n10.type ? null == (i10 = t10.presenceContext) ? void 0 : i10.custom : void 0), { transition: s2 = t10.getDefaultTransition() || {} } = r2 || {};
    n10.transitionOverride && (s2 = n10.transitionOverride);
    let a2 = r2 ? () => Promise.all(ei(t10, r2, n10)) : () => Promise.resolve(), l2 = t10.variantChildren && t10.variantChildren.size ? function() {
      let i11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, { delayChildren: r3 = 0, staggerChildren: o2, staggerDirection: a3 } = s2;
      return (function(t11, e11) {
        let i12 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, n11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, r4 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1, s3 = arguments.length > 5 ? arguments[5] : void 0, o3 = [], a4 = (t11.variantChildren.size - 1) * n11, l3 = 1 === r4 ? function() {
          let t12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return t12 * n11;
        } : function() {
          let t12 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          return a4 - t12 * n11;
        };
        return Array.from(t11.variantChildren).sort(er).forEach((t12, n12) => {
          t12.notify("AnimationStart", e11), o3.push(en(t12, e11, { ...s3, delay: i12 + l3(n12) }).then(() => t12.notify("AnimationComplete", e11)));
        }), Promise.all(o3);
      })(t10, e10, r3 + i11, o2, a3, n10);
    } : () => Promise.resolve(), { when: u2 } = s2;
    if (!u2) return Promise.all([a2(), l2(n10.delay)]);
    {
      let [t11, e11] = "beforeChildren" === u2 ? [a2, l2] : [l2, a2];
      return t11().then(() => e11());
    }
  }
  function er(t10, e10) {
    return t10.sortNodePosition(e10);
  }
  function es(t10, e10) {
    if (!Array.isArray(e10)) return false;
    let i10 = e10.length;
    if (i10 !== t10.length) return false;
    for (let n10 = 0; n10 < i10; n10++) if (e10[n10] !== t10[n10]) return false;
    return true;
  }
  function eo(t10) {
    return "string" == typeof t10 || Array.isArray(t10);
  }
  let ea = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], el = ["initial", ...ea], eu = el.length, eh = [...ea].reverse(), ed = ea.length;
  function ec() {
    let t10 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return { isActive: t10, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
  }
  function ep() {
    return { animate: ec(true), whileInView: ec(), whileHover: ec(), whileTap: ec(), whileDrag: ec(), whileFocus: ec(), exit: ec() };
  }
  class ef {
    update() {
    }
    constructor(t10) {
      this.isMounted = false, this.node = t10;
    }
  }
  class em extends ef {
    updateAnimationControlsSubscription() {
      let { animate: t10 } = this.node.getProps();
      n(t10) && (this.unmountControls = t10.subscribe(this.node));
    }
    mount() {
      this.updateAnimationControlsSubscription();
    }
    update() {
      let { animate: t10 } = this.node.getProps(), { animate: e10 } = this.node.prevProps || {};
      t10 !== e10 && this.updateAnimationControlsSubscription();
    }
    unmount() {
      var t10;
      this.node.animationState.reset(), null == (t10 = this.unmountControls) || t10.call(this);
    }
    constructor(t10) {
      super(t10), t10.animationState || (t10.animationState = (function(t11) {
        let e10 = (e11) => Promise.all(e11.map((e12) => {
          let { animation: i11, options: n10 } = e12;
          return (function(t12, e13) {
            let i12, n11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            if (t12.notify("AnimationStart", e13), Array.isArray(e13)) i12 = Promise.all(e13.map((e14) => en(t12, e14, n11)));
            else if ("string" == typeof e13) i12 = en(t12, e13, n11);
            else {
              let r3 = "function" == typeof e13 ? o(t12, e13, n11.custom) : e13;
              i12 = Promise.all(ei(t12, r3, n11));
            }
            return i12.then(() => {
              t12.notify("AnimationComplete", e13);
            });
          })(t11, i11, n10);
        })), i10 = ep(), r2 = true, s2 = (e11) => (i11, n10) => {
          var r3;
          let s3 = o(t11, n10, "exit" === e11 ? null == (r3 = t11.presenceContext) ? void 0 : r3.custom : void 0);
          if (s3) {
            let { transition: t12, transitionEnd: e12, ...n11 } = s3;
            i11 = { ...i11, ...n11, ...e12 };
          }
          return i11;
        };
        function a2(a3) {
          let { props: l2 } = t11, u2 = (function t12(e11) {
            if (!e11) return;
            if (!e11.isControllingVariants) {
              let i12 = e11.parent && t12(e11.parent) || {};
              return void 0 !== e11.props.initial && (i12.initial = e11.props.initial), i12;
            }
            let i11 = {};
            for (let t13 = 0; t13 < eu; t13++) {
              let n10 = el[t13], r3 = e11.props[n10];
              (eo(r3) || false === r3) && (i11[n10] = r3);
            }
            return i11;
          })(t11.parent) || {}, h2 = [], d2 = /* @__PURE__ */ new Set(), c2 = {}, p2 = 1 / 0;
          for (let e11 = 0; e11 < ed; e11++) {
            var f2, v2;
            let o2 = eh[e11], g3 = i10[o2], y2 = void 0 !== l2[o2] ? l2[o2] : u2[o2], x2 = eo(y2), b2 = o2 === a3 ? g3.isActive : null;
            false === b2 && (p2 = e11);
            let w2 = y2 === u2[o2] && y2 !== l2[o2] && x2;
            if (w2 && r2 && t11.manuallyAnimateOnMount && (w2 = false), g3.protectedKeys = { ...c2 }, !g3.isActive && null === b2 || !y2 && !g3.prevProp || n(y2) || "boolean" == typeof y2) continue;
            let S2 = (f2 = g3.prevProp, "string" == typeof (v2 = y2) ? v2 !== f2 : !!Array.isArray(v2) && !es(v2, f2)), P2 = S2 || o2 === a3 && g3.isActive && !w2 && x2 || e11 > p2 && x2, T2 = false, A2 = Array.isArray(y2) ? y2 : [y2], E2 = A2.reduce(s2(o2), {});
            false === b2 && (E2 = {});
            let { prevResolvedValues: C2 = {} } = g3, M2 = { ...C2, ...E2 }, j2 = (e12) => {
              P2 = true, d2.has(e12) && (T2 = true, d2.delete(e12)), g3.needsAnimating[e12] = true;
              let i11 = t11.getValue(e12);
              i11 && (i11.liveStyle = false);
            };
            for (let t12 in M2) {
              let e12 = E2[t12], i11 = C2[t12];
              if (c2.hasOwnProperty(t12)) continue;
              let n10 = false;
              (m(e12) && m(i11) ? es(e12, i11) : e12 === i11) ? void 0 !== e12 && d2.has(t12) ? j2(t12) : g3.protectedKeys[t12] = true : null != e12 ? j2(t12) : d2.add(t12);
            }
            g3.prevProp = y2, g3.prevResolvedValues = E2, g3.isActive && (c2 = { ...c2, ...E2 }), r2 && t11.blockInitialAnimation && (P2 = false);
            let k2 = !(w2 && S2) || T2;
            P2 && k2 && h2.push(...A2.map((t12) => ({ animation: t12, options: { type: o2 } })));
          }
          if (d2.size) {
            let e11 = {};
            if ("boolean" != typeof l2.initial) {
              let i11 = o(t11, Array.isArray(l2.initial) ? l2.initial[0] : l2.initial);
              i11 && i11.transition && (e11.transition = i11.transition);
            }
            d2.forEach((i11) => {
              let n10 = t11.getBaseTarget(i11), r3 = t11.getValue(i11);
              r3 && (r3.liveStyle = true), e11[i11] = null != n10 ? n10 : null;
            }), h2.push({ animation: e11 });
          }
          let g2 = !!h2.length;
          return r2 && (false === l2.initial || l2.initial === l2.animate) && !t11.manuallyAnimateOnMount && (g2 = false), r2 = false, g2 ? e10(h2) : Promise.resolve();
        }
        return { animateChanges: a2, setActive: function(e11, n10) {
          var r3;
          if (i10[e11].isActive === n10) return Promise.resolve();
          null == (r3 = t11.variantChildren) || r3.forEach((t12) => {
            var i11;
            return null == (i11 = t12.animationState) ? void 0 : i11.setActive(e11, n10);
          }), i10[e11].isActive = n10;
          let s3 = a2(e11);
          for (let t12 in i10) i10[t12].protectedKeys = {};
          return s3;
        }, setAnimateFunction: function(i11) {
          e10 = i11(t11);
        }, getState: () => i10, reset: () => {
          i10 = ep(), r2 = true;
        } };
      })(t10));
    }
  }
  let ev = 0;
  class eg extends ef {
    update() {
      if (!this.node.presenceContext) return;
      let { isPresent: t10, onExitComplete: e10 } = this.node.presenceContext, { isPresent: i10 } = this.node.prevPresenceContext || {};
      if (!this.node.animationState || t10 === i10) return;
      let n10 = this.node.animationState.setActive("exit", !t10);
      e10 && !t10 && n10.then(() => {
        e10(this.id);
      });
    }
    mount() {
      let { register: t10, onExitComplete: e10 } = this.node.presenceContext || {};
      e10 && e10(this.id), t10 && (this.unmount = t10(this.id));
    }
    unmount() {
    }
    constructor() {
      super(...arguments), this.id = ev++;
    }
  }
  let ey = { x: false, y: false };
  var ex = i(2067);
  function eb(t10, e10, i10) {
    let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { passive: true };
    return t10.addEventListener(e10, i10, n10), () => t10.removeEventListener(e10, i10);
  }
  let ew = (t10) => "mouse" === t10.pointerType ? "number" != typeof t10.button || t10.button <= 0 : false !== t10.isPrimary;
  function eS(t10) {
    return { point: { x: t10.pageX, y: t10.pageY } };
  }
  let eP = (t10) => (e10) => ew(e10) && t10(e10, eS(e10));
  function eT(t10, e10, i10, n10) {
    return eb(t10, e10, eP(i10), n10);
  }
  function eA(t10) {
    let { top: e10, left: i10, right: n10, bottom: r2 } = t10;
    return { x: { min: i10, max: n10 }, y: { min: e10, max: r2 } };
  }
  function eE(t10) {
    return t10.max - t10.min;
  }
  function eC(t10, e10, i10) {
    let n10 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5;
    t10.origin = n10, t10.originPoint = (0, ex.k)(e10.min, e10.max, t10.origin), t10.scale = eE(i10) / eE(e10), t10.translate = (0, ex.k)(i10.min, i10.max, t10.origin) - t10.originPoint, (t10.scale >= 0.9999 && t10.scale <= 1.0001 || isNaN(t10.scale)) && (t10.scale = 1), (t10.translate >= -0.01 && t10.translate <= 0.01 || isNaN(t10.translate)) && (t10.translate = 0);
  }
  function eM(t10, e10, i10, n10) {
    eC(t10.x, e10.x, i10.x, n10 ? n10.originX : void 0), eC(t10.y, e10.y, i10.y, n10 ? n10.originY : void 0);
  }
  function ej(t10, e10, i10) {
    t10.min = i10.min + e10.min, t10.max = t10.min + eE(e10);
  }
  function ek(t10, e10, i10) {
    t10.min = e10.min - i10.min, t10.max = t10.min + eE(e10);
  }
  function eR(t10, e10, i10) {
    ek(t10.x, e10.x, i10.x), ek(t10.y, e10.y, i10.y);
  }
  let eV = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), e_ = () => ({ x: eV(), y: eV() }), eD = () => ({ min: 0, max: 0 }), eO = () => ({ x: eD(), y: eD() });
  function eF(t10) {
    return [t10("x"), t10("y")];
  }
  function eL(t10) {
    return void 0 === t10 || 1 === t10;
  }
  function eB(t10) {
    let { scale: e10, scaleX: i10, scaleY: n10 } = t10;
    return !eL(e10) || !eL(i10) || !eL(n10);
  }
  function eI(t10) {
    return eB(t10) || ez(t10) || t10.z || t10.rotate || t10.rotateX || t10.rotateY || t10.skewX || t10.skewY;
  }
  function ez(t10) {
    var e10, i10;
    return (e10 = t10.x) && "0%" !== e10 || (i10 = t10.y) && "0%" !== i10;
  }
  function eN(t10, e10, i10, n10, r2) {
    return void 0 !== r2 && (t10 = n10 + r2 * (t10 - n10)), n10 + i10 * (t10 - n10) + e10;
  }
  function eU(t10) {
    let e10 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i10 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n10 = arguments.length > 3 ? arguments[3] : void 0, r2 = arguments.length > 4 ? arguments[4] : void 0;
    t10.min = eN(t10.min, e10, i10, n10, r2), t10.max = eN(t10.max, e10, i10, n10, r2);
  }
  function eW(t10, e10) {
    let { x: i10, y: n10 } = e10;
    eU(t10.x, i10.translate, i10.scale, i10.originPoint), eU(t10.y, n10.translate, n10.scale, n10.originPoint);
  }
  function eG(t10, e10) {
    t10.min = t10.min + e10, t10.max = t10.max + e10;
  }
  function eq(t10, e10, i10, n10) {
    let r2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0.5, s2 = (0, ex.k)(t10.min, t10.max, r2);
    eU(t10, e10, i10, s2, n10);
  }
  function eX(t10, e10) {
    eq(t10.x, e10.x, e10.scaleX, e10.scale, e10.originX), eq(t10.y, e10.y, e10.scaleY, e10.scale, e10.originY);
  }
  function eK(t10, e10) {
    return eA((function(t11, e11) {
      if (!e11) return t11;
      let i10 = e11({ x: t11.left, y: t11.top }), n10 = e11({ x: t11.right, y: t11.bottom });
      return { top: i10.y, left: i10.x, bottom: n10.y, right: n10.x };
    })(t10.getBoundingClientRect(), e10));
  }
  let e$ = (t10) => {
    let { current: e10 } = t10;
    return e10 ? e10.ownerDocument.defaultView : null;
  };
  function eY(t10) {
    return t10 && "object" == typeof t10 && Object.prototype.hasOwnProperty.call(t10, "current");
  }
  let eH = (t10, e10) => Math.abs(t10 - e10);
  class eQ {
    updateHandlers(t10) {
      this.handlers = t10;
    }
    end() {
      this.removeListeners && this.removeListeners(), (0, h.WG)(this.updatePoint);
    }
    constructor(t10, e10, { transformPagePoint: i10, contextWindow: n10, dragSnapToOrigin: r2 = false } = {}) {
      if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let t11 = e0(this.lastMoveEventInfo, this.history), e11 = null !== this.startEvent, i11 = (function(t12, e12) {
          return Math.sqrt(eH(t12.x, e12.x) ** 2 + eH(t12.y, e12.y) ** 2);
        })(t11.offset, { x: 0, y: 0 }) >= 3;
        if (!e11 && !i11) return;
        let { point: n11 } = t11, { timestamp: r3 } = h.uv;
        this.history.push({ ...n11, timestamp: r3 });
        let { onStart: s3, onMove: o3 } = this.handlers;
        e11 || (s3 && s3(this.lastMoveEvent, t11), this.startEvent = this.lastMoveEvent), o3 && o3(this.lastMoveEvent, t11);
      }, this.handlePointerMove = (t11, e11) => {
        this.lastMoveEvent = t11, this.lastMoveEventInfo = eZ(e11, this.transformPagePoint), h.Gt.update(this.updatePoint, true);
      }, this.handlePointerUp = (t11, e11) => {
        this.end();
        let { onEnd: i11, onSessionEnd: n11, resumeAnimation: r3 } = this.handlers;
        if (this.dragSnapToOrigin && r3 && r3(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        let s3 = e0("pointercancel" === t11.type ? this.lastMoveEventInfo : eZ(e11, this.transformPagePoint), this.history);
        this.startEvent && i11 && i11(t11, s3), n11 && n11(t11, s3);
      }, !ew(t10)) return;
      this.dragSnapToOrigin = r2, this.handlers = e10, this.transformPagePoint = i10, this.contextWindow = n10 || window;
      let s2 = eZ(eS(t10), this.transformPagePoint), { point: o2 } = s2, { timestamp: a2 } = h.uv;
      this.history = [{ ...o2, timestamp: a2 }];
      let { onSessionStart: l2 } = e10;
      l2 && l2(t10, e0(s2, this.history)), this.removeListeners = (0, w.F)(eT(this.contextWindow, "pointermove", this.handlePointerMove), eT(this.contextWindow, "pointerup", this.handlePointerUp), eT(this.contextWindow, "pointercancel", this.handlePointerUp));
    }
  }
  function eZ(t10, e10) {
    return e10 ? { point: e10(t10.point) } : t10;
  }
  function eJ(t10, e10) {
    return { x: t10.x - e10.x, y: t10.y - e10.y };
  }
  function e0(t10, e10) {
    let { point: i10 } = t10;
    return { point: i10, delta: eJ(i10, e1(e10)), offset: eJ(i10, e10[0]), velocity: (function(t11, e11) {
      if (t11.length < 2) return { x: 0, y: 0 };
      let i11 = t11.length - 1, n10 = null, r2 = e1(t11);
      for (; i11 >= 0 && (n10 = t11[i11], !(r2.timestamp - n10.timestamp > P(0.1))); ) i11--;
      if (!n10) return { x: 0, y: 0 };
      let s2 = T(r2.timestamp - n10.timestamp);
      if (0 === s2) return { x: 0, y: 0 };
      let o2 = { x: (r2.x - n10.x) / s2, y: (r2.y - n10.y) / s2 };
      return o2.x === 1 / 0 && (o2.x = 0), o2.y === 1 / 0 && (o2.y = 0), o2;
    })(e10, 0.1) };
  }
  function e1(t10) {
    return t10[t10.length - 1];
  }
  var e2 = i(4115);
  function e5(t10, e10, i10) {
    return { min: void 0 !== e10 ? t10.min + e10 : void 0, max: void 0 !== i10 ? t10.max + i10 - (t10.max - t10.min) : void 0 };
  }
  function e3(t10, e10) {
    let i10 = e10.min - t10.min, n10 = e10.max - t10.max;
    return e10.max - e10.min < t10.max - t10.min && ([i10, n10] = [n10, i10]), { min: i10, max: n10 };
  }
  function e4(t10, e10, i10) {
    return { min: e9(t10, e10), max: e9(t10, i10) };
  }
  function e9(t10, e10) {
    return "number" == typeof t10 ? t10 : t10[e10] || 0;
  }
  let e6 = /* @__PURE__ */ new WeakMap();
  class e7 {
    start(t10) {
      let { snapToCursor: e10 = false } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, { presenceContext: i10 } = this.visualElement;
      if (i10 && false === i10.isPresent) return;
      let { dragSnapToOrigin: n10 } = this.getProps();
      this.panSession = new eQ(t10, { onSessionStart: (t11) => {
        let { dragSnapToOrigin: i11 } = this.getProps();
        i11 ? this.pauseAnimation() : this.stopAnimation(), e10 && this.snapToCursor(eS(t11).point);
      }, onStart: (t11, e11) => {
        let { drag: i11, dragPropagation: n11, onDragStart: r2 } = this.getProps();
        if (i11 && !n11 && (this.openDragLock && this.openDragLock(), this.openDragLock = (function(t12) {
          if ("x" === t12 || "y" === t12) if (ey[t12]) return null;
          else return ey[t12] = true, () => {
            ey[t12] = false;
          };
          return ey.x || ey.y ? null : (ey.x = ey.y = true, () => {
            ey.x = ey.y = false;
          });
        })(i11), !this.openDragLock)) return;
        this.isDragging = true, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = true, this.visualElement.projection.target = void 0), eF((t12) => {
          let e12 = this.getAxisMotionValue(t12).get() || 0;
          if (tj.KN.test(e12)) {
            let { projection: i12 } = this.visualElement;
            if (i12 && i12.layout) {
              let n12 = i12.layout.layoutBox[t12];
              n12 && (e12 = eE(n12) * (parseFloat(e12) / 100));
            }
          }
          this.originPoint[t12] = e12;
        }), r2 && h.Gt.postRender(() => r2(t11, e11)), y(this.visualElement, "transform");
        let { animationState: s2 } = this.visualElement;
        s2 && s2.setActive("whileDrag", true);
      }, onMove: (t11, e11) => {
        let { dragPropagation: i11, dragDirectionLock: n11, onDirectionLock: r2, onDrag: s2 } = this.getProps();
        if (!i11 && !this.openDragLock) return;
        let { offset: o2 } = e11;
        if (n11 && null === this.currentDirection) {
          this.currentDirection = (function(t12) {
            let e12 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10, i12 = null;
            return Math.abs(t12.y) > e12 ? i12 = "y" : Math.abs(t12.x) > e12 && (i12 = "x"), i12;
          })(o2), null !== this.currentDirection && r2 && r2(this.currentDirection);
          return;
        }
        this.updateAxis("x", e11.point, o2), this.updateAxis("y", e11.point, o2), this.visualElement.render(), s2 && s2(t11, e11);
      }, onSessionEnd: (t11, e11) => this.stop(t11, e11), resumeAnimation: () => eF((t11) => {
        var e11;
        return "paused" === this.getAnimationState(t11) && (null == (e11 = this.getAxisMotionValue(t11).animation) ? void 0 : e11.play());
      }) }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: n10, contextWindow: e$(this.visualElement) });
    }
    stop(t10, e10) {
      let i10 = this.isDragging;
      if (this.cancel(), !i10) return;
      let { velocity: n10 } = e10;
      this.startAnimation(n10);
      let { onDragEnd: r2 } = this.getProps();
      r2 && h.Gt.postRender(() => r2(t10, e10));
    }
    cancel() {
      this.isDragging = false;
      let { projection: t10, animationState: e10 } = this.visualElement;
      t10 && (t10.isAnimationBlocked = false), this.panSession && this.panSession.end(), this.panSession = void 0;
      let { dragPropagation: i10 } = this.getProps();
      !i10 && this.openDragLock && (this.openDragLock(), this.openDragLock = null), e10 && e10.setActive("whileDrag", false);
    }
    updateAxis(t10, e10, i10) {
      let { drag: n10 } = this.getProps();
      if (!i10 || !e8(t10, n10, this.currentDirection)) return;
      let r2 = this.getAxisMotionValue(t10), s2 = this.originPoint[t10] + i10[t10];
      this.constraints && this.constraints[t10] && (s2 = (function(t11, e11, i11) {
        let { min: n11, max: r3 } = e11;
        return void 0 !== n11 && t11 < n11 ? t11 = i11 ? (0, ex.k)(n11, t11, i11.min) : Math.max(t11, n11) : void 0 !== r3 && t11 > r3 && (t11 = i11 ? (0, ex.k)(r3, t11, i11.max) : Math.min(t11, r3)), t11;
      })(s2, this.constraints[t10], this.elastic[t10])), r2.set(s2);
    }
    resolveConstraints() {
      var t10;
      let { dragConstraints: e10, dragElastic: i10 } = this.getProps(), n10 = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(false) : null == (t10 = this.visualElement.projection) ? void 0 : t10.layout, r2 = this.constraints;
      e10 && eY(e10) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e10 && n10 ? this.constraints = (function(t11, e11) {
        let { top: i11, left: n11, bottom: r3, right: s2 } = e11;
        return { x: e5(t11.x, n11, s2), y: e5(t11.y, i11, r3) };
      })(n10.layoutBox, e10) : this.constraints = false, this.elastic = (function() {
        let t11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0.35;
        return false === t11 ? t11 = 0 : true === t11 && (t11 = 0.35), { x: e4(t11, "left", "right"), y: e4(t11, "top", "bottom") };
      })(i10), r2 !== this.constraints && n10 && this.constraints && !this.hasMutatedConstraints && eF((t11) => {
        false !== this.constraints && this.getAxisMotionValue(t11) && (this.constraints[t11] = (function(t12, e11) {
          let i11 = {};
          return void 0 !== e11.min && (i11.min = e11.min - t12.min), void 0 !== e11.max && (i11.max = e11.max - t12.min), i11;
        })(n10.layoutBox[t11], this.constraints[t11]));
      });
    }
    resolveRefConstraints() {
      var t10;
      let { dragConstraints: e10, onMeasureDragConstraints: i10 } = this.getProps();
      if (!e10 || !eY(e10)) return false;
      let n10 = e10.current;
      (0, D.V)(null !== n10, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
      let { projection: r2 } = this.visualElement;
      if (!r2 || !r2.layout) return false;
      let s2 = (function(t11, e11, i11) {
        let n11 = eK(t11, i11), { scroll: r3 } = e11;
        return r3 && (eG(n11.x, r3.offset.x), eG(n11.y, r3.offset.y)), n11;
      })(n10, r2.root, this.visualElement.getTransformPagePoint()), o2 = (t10 = r2.layout.layoutBox, { x: e3(t10.x, s2.x), y: e3(t10.y, s2.y) });
      if (i10) {
        let t11 = i10((function(t12) {
          let { x: e11, y: i11 } = t12;
          return { top: i11.min, right: e11.max, bottom: i11.max, left: e11.min };
        })(o2));
        this.hasMutatedConstraints = !!t11, t11 && (o2 = eA(t11));
      }
      return o2;
    }
    startAnimation(t10) {
      let { drag: e10, dragMomentum: i10, dragElastic: n10, dragTransition: r2, dragSnapToOrigin: s2, onDragTransitionEnd: o2 } = this.getProps(), a2 = this.constraints || {};
      return Promise.all(eF((o3) => {
        if (!e8(o3, e10, this.currentDirection)) return;
        let l2 = a2 && a2[o3] || {};
        s2 && (l2 = { min: 0, max: 0 });
        let u2 = { type: "inertia", velocity: i10 ? t10[o3] : 0, bounceStiffness: n10 ? 200 : 1e6, bounceDamping: n10 ? 40 : 1e7, timeConstant: 750, restDelta: 1, restSpeed: 10, ...r2, ...l2 };
        return this.startAxisValueAnimation(o3, u2);
      })).then(o2);
    }
    startAxisValueAnimation(t10, e10) {
      let i10 = this.getAxisMotionValue(t10);
      return y(this.visualElement, t10), i10.start(ee(t10, i10, 0, e10, this.visualElement, false));
    }
    stopAnimation() {
      eF((t10) => this.getAxisMotionValue(t10).stop());
    }
    pauseAnimation() {
      eF((t10) => {
        var e10;
        return null == (e10 = this.getAxisMotionValue(t10).animation) ? void 0 : e10.pause();
      });
    }
    getAnimationState(t10) {
      var e10;
      return null == (e10 = this.getAxisMotionValue(t10).animation) ? void 0 : e10.state;
    }
    getAxisMotionValue(t10) {
      let e10 = "_drag".concat(t10.toUpperCase()), i10 = this.visualElement.getProps();
      return i10[e10] || this.visualElement.getValue(t10, (i10.initial ? i10.initial[t10] : void 0) || 0);
    }
    snapToCursor(t10) {
      eF((e10) => {
        let { drag: i10 } = this.getProps();
        if (!e8(e10, i10, this.currentDirection)) return;
        let { projection: n10 } = this.visualElement, r2 = this.getAxisMotionValue(e10);
        if (n10 && n10.layout) {
          let { min: i11, max: s2 } = n10.layout.layoutBox[e10];
          r2.set(t10[e10] - (0, ex.k)(i11, s2, 0.5));
        }
      });
    }
    scalePositionWithinConstraints() {
      if (!this.visualElement.current) return;
      let { drag: t10, dragConstraints: e10 } = this.getProps(), { projection: i10 } = this.visualElement;
      if (!eY(e10) || !i10 || !this.constraints) return;
      this.stopAnimation();
      let n10 = { x: 0, y: 0 };
      eF((t11) => {
        let e11 = this.getAxisMotionValue(t11);
        if (e11 && false !== this.constraints) {
          let i11 = e11.get();
          n10[t11] = (function(t12, e12) {
            let i12 = 0.5, n11 = eE(t12), r3 = eE(e12);
            return r3 > n11 ? i12 = (0, e2.q)(e12.min, e12.max - n11, t12.min) : n11 > r3 && (i12 = (0, e2.q)(t12.min, t12.max - r3, e12.min)), (0, S.q)(0, 1, i12);
          })({ min: i11, max: i11 }, this.constraints[t11]);
        }
      });
      let { transformTemplate: r2 } = this.visualElement.getProps();
      this.visualElement.current.style.transform = r2 ? r2({}, "") : "none", i10.root && i10.root.updateScroll(), i10.updateLayout(), this.resolveConstraints(), eF((e11) => {
        if (!e8(e11, t10, null)) return;
        let i11 = this.getAxisMotionValue(e11), { min: r3, max: s2 } = this.constraints[e11];
        i11.set((0, ex.k)(r3, s2, n10[e11]));
      });
    }
    addListeners() {
      if (!this.visualElement.current) return;
      e6.set(this.visualElement, this);
      let t10 = eT(this.visualElement.current, "pointerdown", (t11) => {
        let { drag: e11, dragListener: i11 = true } = this.getProps();
        e11 && i11 && this.start(t11);
      }), e10 = () => {
        let { dragConstraints: t11 } = this.getProps();
        eY(t11) && t11.current && (this.constraints = this.resolveRefConstraints());
      }, { projection: i10 } = this.visualElement, n10 = i10.addEventListener("measure", e10);
      i10 && !i10.layout && (i10.root && i10.root.updateScroll(), i10.updateLayout()), h.Gt.read(e10);
      let r2 = eb(window, "resize", () => this.scalePositionWithinConstraints()), s2 = i10.addEventListener("didUpdate", (t11) => {
        let { delta: e11, hasLayoutChanged: i11 } = t11;
        this.isDragging && i11 && (eF((t12) => {
          let i12 = this.getAxisMotionValue(t12);
          i12 && (this.originPoint[t12] += e11[t12].translate, i12.set(i12.get() + e11[t12].translate));
        }), this.visualElement.render());
      });
      return () => {
        r2(), t10(), n10(), s2 && s2();
      };
    }
    getProps() {
      let t10 = this.visualElement.getProps(), { drag: e10 = false, dragDirectionLock: i10 = false, dragPropagation: n10 = false, dragConstraints: r2 = false, dragElastic: s2 = 0.35, dragMomentum: o2 = true } = t10;
      return { ...t10, drag: e10, dragDirectionLock: i10, dragPropagation: n10, dragConstraints: r2, dragElastic: s2, dragMomentum: o2 };
    }
    constructor(t10) {
      this.openDragLock = null, this.isDragging = false, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = false, this.hasMutatedConstraints = false, this.elastic = eO(), this.visualElement = t10;
    }
  }
  function e8(t10, e10, i10) {
    return (true === e10 || e10 === t10) && (null === i10 || i10 === t10);
  }
  class it extends ef {
    mount() {
      let { dragControls: t10 } = this.node.getProps();
      t10 && (this.removeGroupControls = t10.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || N.l;
    }
    unmount() {
      this.removeGroupControls(), this.removeListeners();
    }
    constructor(t10) {
      super(t10), this.removeGroupControls = N.l, this.removeListeners = N.l, this.controls = new e7(t10);
    }
  }
  let ie = (t10) => (e10, i10) => {
    t10 && h.Gt.postRender(() => t10(e10, i10));
  };
  class ii extends ef {
    onPointerDown(t10) {
      this.session = new eQ(t10, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: e$(this.node) });
    }
    createPanHandlers() {
      let { onPanSessionStart: t10, onPanStart: e10, onPan: i10, onPanEnd: n10 } = this.node.getProps();
      return { onSessionStart: ie(t10), onStart: ie(e10), onMove: i10, onEnd: (t11, e11) => {
        delete this.session, n10 && h.Gt.postRender(() => n10(t11, e11));
      } };
    }
    mount() {
      this.removePointerDownListener = eT(this.node.current, "pointerdown", (t10) => this.onPointerDown(t10));
    }
    update() {
      this.session && this.session.updateHandlers(this.createPanHandlers());
    }
    unmount() {
      this.removePointerDownListener(), this.session && this.session.end();
    }
    constructor() {
      super(...arguments), this.removePointerDownListener = N.l;
    }
  }
  var ir = i(3928);
  let { schedule: is } = (0, i(3648).I)(queueMicrotask, false);
  var io = i(756), ia = i(3691), il = i(874);
  let iu = (0, io.createContext)({}), ih = { hasAnimatedSinceResize: true, hasEverUpdated: false };
  function id(t10, e10) {
    return e10.max === e10.min ? 0 : t10 / (e10.max - e10.min) * 100;
  }
  let ic = { correct: (t10, e10) => {
    if (!e10.target) return t10;
    if ("string" == typeof t10) if (!tj.px.test(t10)) return t10;
    else t10 = parseFloat(t10);
    let i10 = id(t10, e10.target.x), n10 = id(t10, e10.target.y);
    return "".concat(i10, "% ").concat(n10, "%");
  } };
  var ip = i(7753);
  let im = {};
  class iv extends io.Component {
    componentDidMount() {
      let { visualElement: t10, layoutGroup: e10, switchLayoutGroup: i10, layoutId: n10 } = this.props, { projection: r2 } = t10;
      for (let t11 in iy) im[t11] = iy[t11], (0, ip.j)(t11) && (im[t11].isCSSVariable = true);
      r2 && (e10.group && e10.group.add(r2), i10 && i10.register && n10 && i10.register(r2), r2.root.didUpdate(), r2.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }), r2.setOptions({ ...r2.options, onExitComplete: () => this.safeToRemove() })), ih.hasEverUpdated = true;
    }
    getSnapshotBeforeUpdate(t10) {
      let { layoutDependency: e10, visualElement: i10, drag: n10, isPresent: r2 } = this.props, { projection: s2 } = i10;
      return s2 && (s2.isPresent = r2, n10 || t10.layoutDependency !== e10 || void 0 === e10 || t10.isPresent !== r2 ? s2.willUpdate() : this.safeToRemove(), t10.isPresent !== r2 && (r2 ? s2.promote() : s2.relegate() || h.Gt.postRender(() => {
        let t11 = s2.getStack();
        t11 && t11.members.length || this.safeToRemove();
      }))), null;
    }
    componentDidUpdate() {
      let { projection: t10 } = this.props.visualElement;
      t10 && (t10.root.didUpdate(), is.postRender(() => {
        !t10.currentAnimation && t10.isLead() && this.safeToRemove();
      }));
    }
    componentWillUnmount() {
      let { visualElement: t10, layoutGroup: e10, switchLayoutGroup: i10 } = this.props, { projection: n10 } = t10;
      n10 && (n10.scheduleCheckAfterUnmount(), e10 && e10.group && e10.group.remove(n10), i10 && i10.deregister && i10.deregister(n10));
    }
    safeToRemove() {
      let { safeToRemove: t10 } = this.props;
      t10 && t10();
    }
    render() {
      return null;
    }
  }
  function ig(t10) {
    let [e10, i10] = (0, ia.xQ)(), n10 = (0, io.useContext)(il.L);
    return (0, ir.jsx)(iv, { ...t10, layoutGroup: n10, switchLayoutGroup: (0, io.useContext)(iu), isPresent: e10, safeToRemove: i10 });
  }
  let iy = { borderRadius: { ...ic, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: ic, borderTopRightRadius: ic, borderBottomLeftRadius: ic, borderBottomRightRadius: ic, boxShadow: { correct: (t10, e10) => {
    let { treeScale: i10, projectionDelta: n10 } = e10, r2 = tJ.f.parse(t10);
    if (r2.length > 5) return t10;
    let s2 = tJ.f.createTransformer(t10), o2 = +("number" != typeof r2[0]), a2 = n10.x.scale * i10.x, l2 = n10.y.scale * i10.y;
    r2[0 + o2] /= a2, r2[1 + o2] /= l2;
    let u2 = (0, ex.k)(a2, l2, 0.5);
    return "number" == typeof r2[2 + o2] && (r2[2 + o2] /= u2), "number" == typeof r2[3 + o2] && (r2[3 + o2] /= u2), s2(r2);
  } } };
  var ix = i(623), ib = i(2335), iw = i(167);
  let iS = (t10, e10) => t10.depth - e10.depth;
  class iP {
    add(t10) {
      (0, iw.Kq)(this.children, t10), this.isDirty = true;
    }
    remove(t10) {
      (0, iw.Ai)(this.children, t10), this.isDirty = true;
    }
    forEach(t10) {
      this.isDirty && this.children.sort(iS), this.isDirty = false, this.children.forEach(t10);
    }
    constructor() {
      this.children = [], this.isDirty = false;
    }
  }
  function iT(t10) {
    return g(t10) ? t10.get() : t10;
  }
  let iA = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], iE = iA.length, iC = (t10) => "string" == typeof t10 ? parseFloat(t10) : t10, iM = (t10) => "number" == typeof t10 || tj.px.test(t10);
  function ij(t10, e10) {
    return void 0 !== t10[e10] ? t10[e10] : t10.borderRadius;
  }
  let ik = iV(0, 0.5, te), iR = iV(0.5, 0.95, N.l);
  function iV(t10, e10, i10) {
    return (n10) => n10 < t10 ? 0 : n10 > e10 ? 1 : i10((0, e2.q)(t10, e10, n10));
  }
  function i_(t10, e10) {
    t10.min = e10.min, t10.max = e10.max;
  }
  function iD(t10, e10) {
    i_(t10.x, e10.x), i_(t10.y, e10.y);
  }
  function iO(t10, e10) {
    t10.translate = e10.translate, t10.scale = e10.scale, t10.originPoint = e10.originPoint, t10.origin = e10.origin;
  }
  function iF(t10, e10, i10, n10, r2) {
    return t10 -= e10, t10 = n10 + 1 / i10 * (t10 - n10), void 0 !== r2 && (t10 = n10 + 1 / r2 * (t10 - n10)), t10;
  }
  function iL(t10, e10, i10, n10, r2) {
    let [s2, o2, a2] = i10;
    !(function(t11) {
      let e11 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, i11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.5, r3 = arguments.length > 4 ? arguments[4] : void 0, s3 = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : t11, o3 = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : t11;
      if (tj.KN.test(e11) && (e11 = parseFloat(e11), e11 = (0, ex.k)(o3.min, o3.max, e11 / 100) - o3.min), "number" != typeof e11) return;
      let a3 = (0, ex.k)(s3.min, s3.max, n11);
      t11 === s3 && (a3 -= e11), t11.min = iF(t11.min, e11, i11, a3, r3), t11.max = iF(t11.max, e11, i11, a3, r3);
    })(t10, e10[s2], e10[o2], e10[a2], e10.scale, n10, r2);
  }
  let iB = ["x", "scaleX", "originX"], iI = ["y", "scaleY", "originY"];
  function iz(t10, e10, i10, n10) {
    iL(t10.x, e10, iB, i10 ? i10.x : void 0, n10 ? n10.x : void 0), iL(t10.y, e10, iI, i10 ? i10.y : void 0, n10 ? n10.y : void 0);
  }
  function iN(t10) {
    return 0 === t10.translate && 1 === t10.scale;
  }
  function iU(t10) {
    return iN(t10.x) && iN(t10.y);
  }
  function iW(t10, e10) {
    return t10.min === e10.min && t10.max === e10.max;
  }
  function iG(t10, e10) {
    return Math.round(t10.min) === Math.round(e10.min) && Math.round(t10.max) === Math.round(e10.max);
  }
  function iq(t10, e10) {
    return iG(t10.x, e10.x) && iG(t10.y, e10.y);
  }
  function iX(t10) {
    return eE(t10.x) / eE(t10.y);
  }
  function iK(t10, e10) {
    return t10.translate === e10.translate && t10.scale === e10.scale && t10.originPoint === e10.originPoint;
  }
  class i$ {
    add(t10) {
      (0, iw.Kq)(this.members, t10), t10.scheduleRender();
    }
    remove(t10) {
      if ((0, iw.Ai)(this.members, t10), t10 === this.prevLead && (this.prevLead = void 0), t10 === this.lead) {
        let t11 = this.members[this.members.length - 1];
        t11 && this.promote(t11);
      }
    }
    relegate(t10) {
      let e10, i10 = this.members.findIndex((e11) => t10 === e11);
      if (0 === i10) return false;
      for (let t11 = i10; t11 >= 0; t11--) {
        let i11 = this.members[t11];
        if (false !== i11.isPresent) {
          e10 = i11;
          break;
        }
      }
      return !!e10 && (this.promote(e10), true);
    }
    promote(t10, e10) {
      let i10 = this.lead;
      if (t10 !== i10 && (this.prevLead = i10, this.lead = t10, t10.show(), i10)) {
        i10.instance && i10.scheduleRender(), t10.scheduleRender(), t10.resumeFrom = i10, e10 && (t10.resumeFrom.preserveOpacity = true), i10.snapshot && (t10.snapshot = i10.snapshot, t10.snapshot.latestValues = i10.animationValues || i10.latestValues), t10.root && t10.root.isUpdating && (t10.isLayoutDirty = true);
        let { crossfade: n10 } = t10.options;
        false === n10 && i10.hide();
      }
    }
    exitAnimationComplete() {
      this.members.forEach((t10) => {
        let { options: e10, resumingFrom: i10 } = t10;
        e10.onExitComplete && e10.onExitComplete(), i10 && i10.options.onExitComplete && i10.options.onExitComplete();
      });
    }
    scheduleRender() {
      this.members.forEach((t10) => {
        t10.instance && t10.scheduleRender(false);
      });
    }
    removeLeadSnapshot() {
      this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
    }
    constructor() {
      this.members = [];
    }
  }
  let iY = { nodes: 0, calculatedTargetDeltas: 0, calculatedProjections: 0 }, iH = ["", "X", "Y", "Z"], iQ = { visibility: "hidden" }, iZ = 0;
  function iJ(t10, e10, i10, n10) {
    let { latestValues: r2 } = e10;
    r2[t10] && (i10[t10] = r2[t10], e10.setStaticValue(t10, 0), n10 && (n10[t10] = 0));
  }
  function i0(t10) {
    let { attachResizeListener: e10, defaultParent: i10, measureScroll: n10, checkIsScrollRoot: r2, resetTransform: s2 } = t10;
    return class {
      addEventListener(t11, e11) {
        return this.eventHandlers.has(t11) || this.eventHandlers.set(t11, new ib.v()), this.eventHandlers.get(t11).add(e11);
      }
      notifyListeners(t11) {
        for (var e11 = arguments.length, i11 = Array(e11 > 1 ? e11 - 1 : 0), n11 = 1; n11 < e11; n11++) i11[n11 - 1] = arguments[n11];
        let r3 = this.eventHandlers.get(t11);
        r3 && r3.notify(...i11);
      }
      hasListeners(t11) {
        return this.eventHandlers.has(t11);
      }
      mount(t11) {
        if (this.instance) return;
        this.isSVG = (0, ix.x)(t11) && (!(0, ix.x)(t11) || "svg" !== t11.tagName), this.instance = t11;
        let { layoutId: i11, layout: n11, visualElement: r3 } = this.options;
        if (r3 && !r3.current && r3.mount(t11), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (n11 || i11) && (this.isLayoutDirty = true), e10) {
          let i12, n12 = () => this.root.updateBlockedByResize = false;
          e10(t11, () => {
            this.root.updateBlockedByResize = true, i12 && i12(), i12 = (function(t12, e11) {
              let i13 = A.k.now(), n13 = (r4) => {
                let { timestamp: s3 } = r4, o2 = s3 - i13;
                o2 >= 250 && ((0, h.WG)(n13), t12(o2 - e11));
              };
              return h.Gt.setup(n13, true), () => (0, h.WG)(n13);
            })(n12, 250), ih.hasAnimatedSinceResize && (ih.hasAnimatedSinceResize = false, this.nodes.forEach(i8));
          });
        }
        i11 && this.root.registerSharedNode(i11, this), false !== this.options.animate && r3 && (i11 || n11) && this.addEventListener("didUpdate", (t12) => {
          let { delta: e11, hasLayoutChanged: i12, hasRelativeLayoutChanged: n12, layout: s3 } = t12;
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0, this.relativeTarget = void 0;
            return;
          }
          let o2 = this.options.transition || r3.getDefaultTransition() || na, { onLayoutAnimationStart: l2, onLayoutAnimationComplete: u2 } = r3.getProps(), h2 = !this.targetLayout || !iq(this.targetLayout, s3), d2 = !i12 && n12;
          if (this.options.layoutRoot || this.resumeFrom || d2 || i12 && (h2 || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
            let t13 = { ...a(o2, "layout"), onPlay: l2, onComplete: u2 };
            (r3.shouldReduceMotion || this.options.layoutRoot) && (t13.delay = 0, t13.type = false), this.startAnimation(t13), this.setAnimationOrigin(e11, d2);
          } else i12 || i8(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = s3;
        });
      }
      unmount() {
        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
        let t11 = this.getStack();
        t11 && t11.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), (0, h.WG)(this.updateProjection);
      }
      blockUpdate() {
        this.updateManuallyBlocked = true;
      }
      unblockUpdate() {
        this.updateManuallyBlocked = false;
      }
      isUpdateBlocked() {
        return this.updateManuallyBlocked || this.updateBlockedByResize;
      }
      isTreeAnimationBlocked() {
        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || false;
      }
      startUpdate() {
        !this.isUpdateBlocked() && (this.isUpdating = true, this.nodes && this.nodes.forEach(ni), this.animationId++);
      }
      getTransformTemplate() {
        let { visualElement: t11 } = this.options;
        return t11 && t11.getProps().transformTemplate;
      }
      willUpdate() {
        let t11 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (this.root.hasTreeAnimated = true, this.root.isUpdateBlocked()) {
          this.options.onExitComplete && this.options.onExitComplete();
          return;
        }
        if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && (function t12(e12) {
          if (e12.hasCheckedOptimisedAppear = true, e12.root === e12) return;
          let { visualElement: i12 } = e12.options;
          if (!i12) return;
          let n12 = i12.props[b];
          if (window.MotionHasOptimisedAnimation(n12, "transform")) {
            let { layout: t13, layoutId: i13 } = e12.options;
            window.MotionCancelOptimisedAnimation(n12, "transform", h.Gt, !(t13 || i13));
          }
          let { parent: r3 } = e12;
          r3 && !r3.hasCheckedOptimisedAppear && t12(r3);
        })(this), this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
        this.isLayoutDirty = true;
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let e12 = this.path[t12];
          e12.shouldResetTransform = true, e12.updateScroll("snapshot"), e12.options.layoutRoot && e12.willUpdate(false);
        }
        let { layoutId: e11, layout: i11 } = this.options;
        if (void 0 === e11 && !i11) return;
        let n11 = this.getTransformTemplate();
        this.prevTransformTemplateValue = n11 ? n11(this.latestValues, "") : void 0, this.updateSnapshot(), t11 && this.notifyListeners("willUpdate");
      }
      update() {
        if (this.updateScheduled = false, this.isUpdateBlocked()) {
          this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(i9);
          return;
        }
        this.isUpdating || this.nodes.forEach(i6), this.isUpdating = false, this.nodes.forEach(i7), this.nodes.forEach(i1), this.nodes.forEach(i2), this.clearAllSnapshots();
        let t11 = A.k.now();
        h.uv.delta = (0, S.q)(0, 1e3 / 60, t11 - h.uv.timestamp), h.uv.timestamp = t11, h.uv.isProcessing = true, h.PP.update.process(h.uv), h.PP.preRender.process(h.uv), h.PP.render.process(h.uv), h.uv.isProcessing = false;
      }
      didUpdate() {
        this.updateScheduled || (this.updateScheduled = true, is.read(this.scheduleUpdate));
      }
      clearAllSnapshots() {
        this.nodes.forEach(i4), this.sharedNodes.forEach(nn);
      }
      scheduleUpdateProjection() {
        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = true, h.Gt.preRender(this.updateProjection, false, true));
      }
      scheduleCheckAfterUnmount() {
        h.Gt.postRender(() => {
          this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
        });
      }
      updateSnapshot() {
        !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || eE(this.snapshot.measuredBox.x) || eE(this.snapshot.measuredBox.y) || (this.snapshot = void 0));
      }
      updateLayout() {
        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
        if (this.resumeFrom && !this.resumeFrom.instance) for (let t12 = 0; t12 < this.path.length; t12++) this.path[t12].updateScroll();
        let t11 = this.layout;
        this.layout = this.measure(false), this.layoutCorrected = eO(), this.isLayoutDirty = false, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
        let { visualElement: e11 } = this.options;
        e11 && e11.notify("LayoutMeasure", this.layout.layoutBox, t11 ? t11.layoutBox : void 0);
      }
      updateScroll() {
        let t11 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure", e11 = !!(this.options.layoutScroll && this.instance);
        if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t11 && (e11 = false), e11 && this.instance) {
          let e12 = r2(this.instance);
          this.scroll = { animationId: this.root.animationId, phase: t11, isRoot: e12, offset: n10(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : e12 };
        }
      }
      resetTransform() {
        if (!s2) return;
        let t11 = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, e11 = this.projectionDelta && !iU(this.projectionDelta), i11 = this.getTransformTemplate(), n11 = i11 ? i11(this.latestValues, "") : void 0, r3 = n11 !== this.prevTransformTemplateValue;
        t11 && this.instance && (e11 || eI(this.latestValues) || r3) && (s2(this.instance, n11), this.shouldResetTransform = false, this.scheduleRender());
      }
      measure() {
        var t11;
        let e11 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0], i11 = this.measurePageBox(), n11 = this.removeElementScroll(i11);
        return e11 && (n11 = this.removeTransform(n11)), nh((t11 = n11).x), nh(t11.y), { animationId: this.root.animationId, measuredBox: i11, layoutBox: n11, latestValues: {}, source: this.id };
      }
      measurePageBox() {
        var t11;
        let { visualElement: e11 } = this.options;
        if (!e11) return eO();
        let i11 = e11.measureViewportBox();
        if (!((null == (t11 = this.scroll) ? void 0 : t11.wasRoot) || this.path.some(nc))) {
          let { scroll: t12 } = this.root;
          t12 && (eG(i11.x, t12.offset.x), eG(i11.y, t12.offset.y));
        }
        return i11;
      }
      removeElementScroll(t11) {
        var e11;
        let i11 = eO();
        if (iD(i11, t11), null == (e11 = this.scroll) ? void 0 : e11.wasRoot) return i11;
        for (let e12 = 0; e12 < this.path.length; e12++) {
          let n11 = this.path[e12], { scroll: r3, options: s3 } = n11;
          n11 !== this.root && r3 && s3.layoutScroll && (r3.wasRoot && iD(i11, t11), eG(i11.x, r3.offset.x), eG(i11.y, r3.offset.y));
        }
        return i11;
      }
      applyTransform(t11) {
        let e11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], i11 = eO();
        iD(i11, t11);
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let n11 = this.path[t12];
          !e11 && n11.options.layoutScroll && n11.scroll && n11 !== n11.root && eX(i11, { x: -n11.scroll.offset.x, y: -n11.scroll.offset.y }), eI(n11.latestValues) && eX(i11, n11.latestValues);
        }
        return eI(this.latestValues) && eX(i11, this.latestValues), i11;
      }
      removeTransform(t11) {
        let e11 = eO();
        iD(e11, t11);
        for (let t12 = 0; t12 < this.path.length; t12++) {
          let i11 = this.path[t12];
          if (!i11.instance || !eI(i11.latestValues)) continue;
          eB(i11.latestValues) && i11.updateSnapshot();
          let n11 = eO();
          iD(n11, i11.measurePageBox()), iz(e11, i11.latestValues, i11.snapshot ? i11.snapshot.layoutBox : void 0, n11);
        }
        return eI(this.latestValues) && iz(e11, this.latestValues), e11;
      }
      setTargetDelta(t11) {
        this.targetDelta = t11, this.root.scheduleUpdateProjection(), this.isProjectionDirty = true;
      }
      setOptions(t11) {
        this.options = { ...this.options, ...t11, crossfade: void 0 === t11.crossfade || t11.crossfade };
      }
      clearMeasurements() {
        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = false;
      }
      forceRelativeParentToResolveTarget() {
        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== h.uv.timestamp && this.relativeParent.resolveTargetDelta(true);
      }
      resolveTargetDelta() {
        var t11, e11, i11, n11;
        let r3 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], s3 = this.getLead();
        this.isProjectionDirty || (this.isProjectionDirty = s3.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s3.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s3.isSharedProjectionDirty);
        let o2 = !!this.resumingFrom || this !== s3;
        if (!(r3 || o2 && this.isSharedProjectionDirty || this.isProjectionDirty || (null == (t11 = this.parent) ? void 0 : t11.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
        let { layout: a2, layoutId: l2 } = this.options;
        if (this.layout && (a2 || l2)) {
          if (this.resolvedRelativeTargetAt = h.uv.timestamp, !this.targetDelta && !this.relativeTarget) {
            let t12 = this.getClosestProjectingParent();
            t12 && t12.layout && 1 !== this.animationProgress ? (this.relativeParent = t12, this.forceRelativeParentToResolveTarget(), this.relativeTarget = eO(), this.relativeTargetOrigin = eO(), eR(this.relativeTargetOrigin, this.layout.layoutBox, t12.layout.layoutBox), iD(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          if (this.relativeTarget || this.targetDelta) {
            if ((this.target || (this.target = eO(), this.targetWithTransforms = eO()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) ? (this.forceRelativeParentToResolveTarget(), e11 = this.target, i11 = this.relativeTarget, n11 = this.relativeParent.target, ej(e11.x, i11.x, n11.x), ej(e11.y, i11.y, n11.y)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : iD(this.target, this.layout.layoutBox), eW(this.target, this.targetDelta)) : iD(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
              this.attemptToResolveRelativeTarget = false;
              let t12 = this.getClosestProjectingParent();
              t12 && !!t12.resumingFrom == !!this.resumingFrom && !t12.options.layoutScroll && t12.target && 1 !== this.animationProgress ? (this.relativeParent = t12, this.forceRelativeParentToResolveTarget(), this.relativeTarget = eO(), this.relativeTargetOrigin = eO(), eR(this.relativeTargetOrigin, this.target, t12.target), iD(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
            }
            tW.Q.value && iY.calculatedTargetDeltas++;
          }
        }
      }
      getClosestProjectingParent() {
        if (!(!this.parent || eB(this.parent.latestValues) || ez(this.parent.latestValues))) if (this.parent.isProjecting()) return this.parent;
        else return this.parent.getClosestProjectingParent();
      }
      isProjecting() {
        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
      }
      calcProjection() {
        var t11;
        let e11 = this.getLead(), i11 = !!this.resumingFrom || this !== e11, n11 = true;
        if ((this.isProjectionDirty || (null == (t11 = this.parent) ? void 0 : t11.isProjectionDirty)) && (n11 = false), i11 && (this.isSharedProjectionDirty || this.isTransformDirty) && (n11 = false), this.resolvedRelativeTargetAt === h.uv.timestamp && (n11 = false), n11) return;
        let { layout: r3, layoutId: s3 } = this.options;
        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r3 || s3)) return;
        iD(this.layoutCorrected, this.layout.layoutBox);
        let o2 = this.treeScale.x, a2 = this.treeScale.y;
        !(function(t12, e12, i12) {
          let n12, r4, s4 = arguments.length > 3 && void 0 !== arguments[3] && arguments[3], o3 = i12.length;
          if (o3) {
            e12.x = e12.y = 1;
            for (let a3 = 0; a3 < o3; a3++) {
              r4 = (n12 = i12[a3]).projectionDelta;
              let { visualElement: o4 } = n12.options;
              (!o4 || !o4.props.style || "contents" !== o4.props.style.display) && (s4 && n12.options.layoutScroll && n12.scroll && n12 !== n12.root && eX(t12, { x: -n12.scroll.offset.x, y: -n12.scroll.offset.y }), r4 && (e12.x *= r4.x.scale, e12.y *= r4.y.scale, eW(t12, r4)), s4 && eI(n12.latestValues) && eX(t12, n12.latestValues));
            }
            e12.x < 1.0000000000001 && e12.x > 0.999999999999 && (e12.x = 1), e12.y < 1.0000000000001 && e12.y > 0.999999999999 && (e12.y = 1);
          }
        })(this.layoutCorrected, this.treeScale, this.path, i11), e11.layout && !e11.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e11.target = e11.layout.layoutBox, e11.targetWithTransforms = eO());
        let { target: l2 } = e11;
        if (!l2) {
          this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
          return;
        }
        this.projectionDelta && this.prevProjectionDelta ? (iO(this.prevProjectionDelta.x, this.projectionDelta.x), iO(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), eM(this.projectionDelta, this.layoutCorrected, l2, this.latestValues), this.treeScale.x === o2 && this.treeScale.y === a2 && iK(this.projectionDelta.x, this.prevProjectionDelta.x) && iK(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = true, this.scheduleRender(), this.notifyListeners("projectionUpdate", l2)), tW.Q.value && iY.calculatedProjections++;
      }
      hide() {
        this.isVisible = false;
      }
      show() {
        this.isVisible = true;
      }
      scheduleRender() {
        var t11;
        let e11 = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
        if (null == (t11 = this.options.visualElement) || t11.scheduleRender(), e11) {
          let t12 = this.getStack();
          t12 && t12.scheduleRender();
        }
        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
      }
      createProjectionDeltas() {
        this.prevProjectionDelta = e_(), this.projectionDelta = e_(), this.projectionDeltaWithTransform = e_();
      }
      setAnimationOrigin(t11) {
        let e11, i11 = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], n11 = this.snapshot, r3 = n11 ? n11.latestValues : {}, s3 = { ...this.latestValues }, o2 = e_();
        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !i11;
        let a2 = eO(), l2 = (n11 ? n11.source : void 0) !== (this.layout ? this.layout.source : void 0), u2 = this.getStack(), h2 = !u2 || u2.members.length <= 1, d2 = !!(l2 && !h2 && true === this.options.crossfade && !this.path.some(no));
        this.animationProgress = 0, this.mixTargetDelta = (i12) => {
          let n12 = i12 / 1e3;
          if (nr(o2.x, t11.x, n12), nr(o2.y, t11.y, n12), this.setTargetDelta(o2), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
            var u3, c2, p2, f2, m2, v2;
            eR(a2, this.layout.layoutBox, this.relativeParent.layout.layoutBox), p2 = this.relativeTarget, f2 = this.relativeTargetOrigin, m2 = a2, v2 = n12, ns(p2.x, f2.x, m2.x, v2), ns(p2.y, f2.y, m2.y, v2), e11 && (u3 = this.relativeTarget, c2 = e11, iW(u3.x, c2.x) && iW(u3.y, c2.y)) && (this.isProjectionDirty = false), e11 || (e11 = eO()), iD(e11, this.relativeTarget);
          }
          l2 && (this.animationValues = s3, (function(t12, e12, i13, n13, r4, s4) {
            var o3, a3, l3, u4;
            r4 ? (t12.opacity = (0, ex.k)(0, null != (o3 = i13.opacity) ? o3 : 1, ik(n13)), t12.opacityExit = (0, ex.k)(null != (a3 = e12.opacity) ? a3 : 1, 0, iR(n13))) : s4 && (t12.opacity = (0, ex.k)(null != (l3 = e12.opacity) ? l3 : 1, null != (u4 = i13.opacity) ? u4 : 1, n13));
            for (let r5 = 0; r5 < iE; r5++) {
              let s5 = "border".concat(iA[r5], "Radius"), o4 = ij(e12, s5), a4 = ij(i13, s5);
              (void 0 !== o4 || void 0 !== a4) && (o4 || (o4 = 0), a4 || (a4 = 0), 0 === o4 || 0 === a4 || iM(o4) === iM(a4) ? (t12[s5] = Math.max((0, ex.k)(iC(o4), iC(a4), n13), 0), (tj.KN.test(a4) || tj.KN.test(o4)) && (t12[s5] += "%")) : t12[s5] = a4);
            }
            (e12.rotate || i13.rotate) && (t12.rotate = (0, ex.k)(e12.rotate || 0, i13.rotate || 0, n13));
          })(s3, r3, this.latestValues, n12, d2, h2)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n12;
        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
      }
      startAnimation(t11) {
        var e11, i11, n11;
        this.notifyListeners("animationStart"), null == (e11 = this.currentAnimation) || e11.stop(), null == (n11 = this.resumingFrom) || null == (i11 = n11.currentAnimation) || i11.stop(), this.pendingAnimation && ((0, h.WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = h.Gt.update(() => {
          ih.hasAnimatedSinceResize = true, E.layout++, this.motionValue || (this.motionValue = (0, f.OQ)(0)), this.currentAnimation = (function(t12, e12, i12) {
            let n12 = g(t12) ? t12 : (0, f.OQ)(t12);
            return n12.start(ee("", n12, e12, i12)), n12.animation;
          })(this.motionValue, [0, 1e3], { ...t11, velocity: 0, isSync: true, onUpdate: (e12) => {
            this.mixTargetDelta(e12), t11.onUpdate && t11.onUpdate(e12);
          }, onStop: () => {
            E.layout--;
          }, onComplete: () => {
            E.layout--, t11.onComplete && t11.onComplete(), this.completeAnimation();
          } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
        });
      }
      completeAnimation() {
        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
        let t11 = this.getStack();
        t11 && t11.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
      }
      finishAnimation() {
        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
      }
      applyTransformsToTarget() {
        let t11 = this.getLead(), { targetWithTransforms: e11, target: i11, layout: n11, latestValues: r3 } = t11;
        if (e11 && i11 && n11) {
          if (this !== t11 && this.layout && n11 && nd(this.options.animationType, this.layout.layoutBox, n11.layoutBox)) {
            i11 = this.target || eO();
            let e12 = eE(this.layout.layoutBox.x);
            i11.x.min = t11.target.x.min, i11.x.max = i11.x.min + e12;
            let n12 = eE(this.layout.layoutBox.y);
            i11.y.min = t11.target.y.min, i11.y.max = i11.y.min + n12;
          }
          iD(e11, i11), eX(e11, r3), eM(this.projectionDeltaWithTransform, this.layoutCorrected, e11, r3);
        }
      }
      registerSharedNode(t11, e11) {
        this.sharedNodes.has(t11) || this.sharedNodes.set(t11, new i$()), this.sharedNodes.get(t11).add(e11);
        let i11 = e11.options.initialPromotionConfig;
        e11.promote({ transition: i11 ? i11.transition : void 0, preserveFollowOpacity: i11 && i11.shouldPreserveFollowOpacity ? i11.shouldPreserveFollowOpacity(e11) : void 0 });
      }
      isLead() {
        let t11 = this.getStack();
        return !t11 || t11.lead === this;
      }
      getLead() {
        var t11;
        let { layoutId: e11 } = this.options;
        return e11 && (null == (t11 = this.getStack()) ? void 0 : t11.lead) || this;
      }
      getPrevLead() {
        var t11;
        let { layoutId: e11 } = this.options;
        return e11 ? null == (t11 = this.getStack()) ? void 0 : t11.prevLead : void 0;
      }
      getStack() {
        let { layoutId: t11 } = this.options;
        if (t11) return this.root.sharedNodes.get(t11);
      }
      promote() {
        let { needsReset: t11, transition: e11, preserveFollowOpacity: i11 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n11 = this.getStack();
        n11 && n11.promote(this, i11), t11 && (this.projectionDelta = void 0, this.needsReset = true), e11 && this.setOptions({ transition: e11 });
      }
      relegate() {
        let t11 = this.getStack();
        return !!t11 && t11.relegate(this);
      }
      resetSkewAndRotation() {
        let { visualElement: t11 } = this.options;
        if (!t11) return;
        let e11 = false, { latestValues: i11 } = t11;
        if ((i11.z || i11.rotate || i11.rotateX || i11.rotateY || i11.rotateZ || i11.skewX || i11.skewY) && (e11 = true), !e11) return;
        let n11 = {};
        i11.z && iJ("z", t11, n11, this.animationValues);
        for (let e12 = 0; e12 < iH.length; e12++) iJ("rotate".concat(iH[e12]), t11, n11, this.animationValues), iJ("skew".concat(iH[e12]), t11, n11, this.animationValues);
        for (let e12 in t11.render(), n11) t11.setStaticValue(e12, n11[e12]), this.animationValues && (this.animationValues[e12] = n11[e12]);
        t11.scheduleRender();
      }
      getProjectionStyles(t11) {
        if (!this.instance || this.isSVG) return;
        if (!this.isVisible) return iQ;
        let e11 = { visibility: "" }, i11 = this.getTransformTemplate();
        if (this.needsReset) return this.needsReset = false, e11.opacity = "", e11.pointerEvents = iT(null == t11 ? void 0 : t11.pointerEvents) || "", e11.transform = i11 ? i11(this.latestValues, "") : "none", e11;
        let n11 = this.getLead();
        if (!this.projectionDelta || !this.layout || !n11.target) {
          let e12 = {};
          return this.options.layoutId && (e12.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e12.pointerEvents = iT(null == t11 ? void 0 : t11.pointerEvents) || ""), this.hasProjected && !eI(this.latestValues) && (e12.transform = i11 ? i11({}, "") : "none", this.hasProjected = false), e12;
        }
        let r3 = n11.animationValues || n11.latestValues;
        this.applyTransformsToTarget(), e11.transform = (function(t12, e12, i12) {
          let n12 = "", r4 = t12.x.translate / e12.x, s4 = t12.y.translate / e12.y, o3 = (null == i12 ? void 0 : i12.z) || 0;
          if ((r4 || s4 || o3) && (n12 = "translate3d(".concat(r4, "px, ").concat(s4, "px, ").concat(o3, "px) ")), (1 !== e12.x || 1 !== e12.y) && (n12 += "scale(".concat(1 / e12.x, ", ").concat(1 / e12.y, ") ")), i12) {
            let { transformPerspective: t13, rotate: e13, rotateX: r5, rotateY: s5, skewX: o4, skewY: a4 } = i12;
            t13 && (n12 = "perspective(".concat(t13, "px) ").concat(n12)), e13 && (n12 += "rotate(".concat(e13, "deg) ")), r5 && (n12 += "rotateX(".concat(r5, "deg) ")), s5 && (n12 += "rotateY(".concat(s5, "deg) ")), o4 && (n12 += "skewX(".concat(o4, "deg) ")), a4 && (n12 += "skewY(".concat(a4, "deg) "));
          }
          let a3 = t12.x.scale * e12.x, l3 = t12.y.scale * e12.y;
          return (1 !== a3 || 1 !== l3) && (n12 += "scale(".concat(a3, ", ").concat(l3, ")")), n12 || "none";
        })(this.projectionDeltaWithTransform, this.treeScale, r3), i11 && (e11.transform = i11(r3, e11.transform));
        let { x: s3, y: o2 } = this.projectionDelta;
        if (e11.transformOrigin = "".concat(100 * s3.origin, "% ").concat(100 * o2.origin, "% 0"), n11.animationValues) {
          var a2, l2;
          e11.opacity = n11 === this ? null != (l2 = null != (a2 = r3.opacity) ? a2 : this.latestValues.opacity) ? l2 : 1 : this.preserveOpacity ? this.latestValues.opacity : r3.opacityExit;
        } else e11.opacity = n11 === this ? void 0 !== r3.opacity ? r3.opacity : "" : void 0 !== r3.opacityExit ? r3.opacityExit : 0;
        for (let t12 in im) {
          if (void 0 === r3[t12]) continue;
          let { correct: i12, applyTo: s4, isCSSVariable: o3 } = im[t12], a3 = "none" === e11.transform ? r3[t12] : i12(r3[t12], n11);
          if (s4) {
            let t13 = s4.length;
            for (let i13 = 0; i13 < t13; i13++) e11[s4[i13]] = a3;
          } else o3 ? this.options.visualElement.renderState.vars[t12] = a3 : e11[t12] = a3;
        }
        return this.options.layoutId && (e11.pointerEvents = n11 === this ? iT(null == t11 ? void 0 : t11.pointerEvents) || "" : "none"), e11;
      }
      clearSnapshot() {
        this.resumeFrom = this.snapshot = void 0;
      }
      resetTree() {
        this.root.nodes.forEach((t11) => {
          var e11;
          return null == (e11 = t11.currentAnimation) ? void 0 : e11.stop();
        }), this.root.nodes.forEach(i9), this.root.sharedNodes.clear();
      }
      constructor(t11 = {}, e11 = null == i10 ? void 0 : i10()) {
        this.id = iZ++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = false, this.isAnimationBlocked = false, this.isLayoutDirty = false, this.isProjectionDirty = false, this.isSharedProjectionDirty = false, this.isTransformDirty = false, this.updateManuallyBlocked = false, this.updateBlockedByResize = false, this.isUpdating = false, this.isSVG = false, this.needsReset = false, this.shouldResetTransform = false, this.hasCheckedOptimisedAppear = false, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = false, this.updateScheduled = false, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = false, this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = false, this.clearAllSnapshots());
        }, this.updateProjection = () => {
          this.projectionUpdateScheduled = false, tW.Q.value && (iY.nodes = iY.calculatedTargetDeltas = iY.calculatedProjections = 0), this.nodes.forEach(i5), this.nodes.forEach(nt), this.nodes.forEach(ne), this.nodes.forEach(i3), tW.Q.addProjectionMetrics && tW.Q.addProjectionMetrics(iY);
        }, this.resolvedRelativeTargetAt = 0, this.hasProjected = false, this.isVisible = true, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = t11, this.root = e11 ? e11.root || e11 : this, this.path = e11 ? [...e11.path, e11] : [], this.parent = e11, this.depth = e11 ? e11.depth + 1 : 0;
        for (let t12 = 0; t12 < this.path.length; t12++) this.path[t12].shouldResetTransform = true;
        this.root === this && (this.nodes = new iP());
      }
    };
  }
  function i1(t10) {
    t10.updateLayout();
  }
  function i2(t10) {
    var e10;
    let i10 = (null == (e10 = t10.resumeFrom) ? void 0 : e10.snapshot) || t10.snapshot;
    if (t10.isLead() && t10.layout && i10 && t10.hasListeners("didUpdate")) {
      let { layoutBox: e11, measuredBox: n10 } = t10.layout, { animationType: r2 } = t10.options, s2 = i10.source !== t10.layout.source;
      "size" === r2 ? eF((t11) => {
        let n11 = s2 ? i10.measuredBox[t11] : i10.layoutBox[t11], r3 = eE(n11);
        n11.min = e11[t11].min, n11.max = n11.min + r3;
      }) : nd(r2, i10.layoutBox, e11) && eF((n11) => {
        let r3 = s2 ? i10.measuredBox[n11] : i10.layoutBox[n11], o3 = eE(e11[n11]);
        r3.max = r3.min + o3, t10.relativeTarget && !t10.currentAnimation && (t10.isProjectionDirty = true, t10.relativeTarget[n11].max = t10.relativeTarget[n11].min + o3);
      });
      let o2 = e_();
      eM(o2, e11, i10.layoutBox);
      let a2 = e_();
      s2 ? eM(a2, t10.applyTransform(n10, true), i10.measuredBox) : eM(a2, e11, i10.layoutBox);
      let l2 = !iU(o2), u2 = false;
      if (!t10.resumeFrom) {
        let n11 = t10.getClosestProjectingParent();
        if (n11 && !n11.resumeFrom) {
          let { snapshot: r3, layout: s3 } = n11;
          if (r3 && s3) {
            let o3 = eO();
            eR(o3, i10.layoutBox, r3.layoutBox);
            let a3 = eO();
            eR(a3, e11, s3.layoutBox), iq(o3, a3) || (u2 = true), n11.options.layoutRoot && (t10.relativeTarget = a3, t10.relativeTargetOrigin = o3, t10.relativeParent = n11);
          }
        }
      }
      t10.notifyListeners("didUpdate", { layout: e11, snapshot: i10, delta: a2, layoutDelta: o2, hasLayoutChanged: l2, hasRelativeLayoutChanged: u2 });
    } else if (t10.isLead()) {
      let { onExitComplete: e11 } = t10.options;
      e11 && e11();
    }
    t10.options.transition = void 0;
  }
  function i5(t10) {
    tW.Q.value && iY.nodes++, t10.parent && (t10.isProjecting() || (t10.isProjectionDirty = t10.parent.isProjectionDirty), t10.isSharedProjectionDirty || (t10.isSharedProjectionDirty = !!(t10.isProjectionDirty || t10.parent.isProjectionDirty || t10.parent.isSharedProjectionDirty)), t10.isTransformDirty || (t10.isTransformDirty = t10.parent.isTransformDirty));
  }
  function i3(t10) {
    t10.isProjectionDirty = t10.isSharedProjectionDirty = t10.isTransformDirty = false;
  }
  function i4(t10) {
    t10.clearSnapshot();
  }
  function i9(t10) {
    t10.clearMeasurements();
  }
  function i6(t10) {
    t10.isLayoutDirty = false;
  }
  function i7(t10) {
    let { visualElement: e10 } = t10.options;
    e10 && e10.getProps().onBeforeLayoutMeasure && e10.notify("BeforeLayoutMeasure"), t10.resetTransform();
  }
  function i8(t10) {
    t10.finishAnimation(), t10.targetDelta = t10.relativeTarget = t10.target = void 0, t10.isProjectionDirty = true;
  }
  function nt(t10) {
    t10.resolveTargetDelta();
  }
  function ne(t10) {
    t10.calcProjection();
  }
  function ni(t10) {
    t10.resetSkewAndRotation();
  }
  function nn(t10) {
    t10.removeLeadSnapshot();
  }
  function nr(t10, e10, i10) {
    t10.translate = (0, ex.k)(e10.translate, 0, i10), t10.scale = (0, ex.k)(e10.scale, 1, i10), t10.origin = e10.origin, t10.originPoint = e10.originPoint;
  }
  function ns(t10, e10, i10, n10) {
    t10.min = (0, ex.k)(e10.min, i10.min, n10), t10.max = (0, ex.k)(e10.max, i10.max, n10);
  }
  function no(t10) {
    return t10.animationValues && void 0 !== t10.animationValues.opacityExit;
  }
  let na = { duration: 0.45, ease: [0.4, 0, 0.1, 1] }, nl = (t10) => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t10), nu = nl("applewebkit/") && !nl("chrome/") ? Math.round : N.l;
  function nh(t10) {
    t10.min = nu(t10.min), t10.max = nu(t10.max);
  }
  function nd(t10, e10, i10) {
    return "position" === t10 || "preserve-aspect" === t10 && !(0.2 >= Math.abs(iX(e10) - iX(i10)));
  }
  function nc(t10) {
    var e10;
    return t10 !== t10.root && (null == (e10 = t10.scroll) ? void 0 : e10.wasRoot);
  }
  let np = i0({ attachResizeListener: (t10, e10) => eb(t10, "resize", e10), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => true }), nf = { current: void 0 }, nm = i0({ measureScroll: (t10) => ({ x: t10.scrollLeft, y: t10.scrollTop }), defaultParent: () => {
    if (!nf.current) {
      let t10 = new np({});
      t10.mount(window), t10.setOptions({ layoutScroll: true }), nf.current = t10;
    }
    return nf.current;
  }, resetTransform: (t10, e10) => {
    t10.style.transform = void 0 !== e10 ? e10 : "none";
  }, checkIsScrollRoot: (t10) => "fixed" === window.getComputedStyle(t10).position });
  var nv = i(811);
  function ng(t10, e10) {
    let i10 = (0, nv.K)(t10), n10 = new AbortController();
    return [i10, { passive: true, ...e10, signal: n10.signal }, () => n10.abort()];
  }
  function ny(t10) {
    return !("touch" === t10.pointerType || ey.x || ey.y);
  }
  function nx(t10, e10, i10) {
    let { props: n10 } = t10;
    t10.animationState && n10.whileHover && t10.animationState.setActive("whileHover", "Start" === i10);
    let r2 = n10["onHover" + i10];
    r2 && h.Gt.postRender(() => r2(e10, eS(e10)));
  }
  class nb extends ef {
    mount() {
      let { current: t10 } = this.node;
      t10 && (this.unmount = (function(t11, e10, i10 = {}) {
        let [n10, r2, s2] = ng(t11, i10), o2 = (t12) => {
          if (!ny(t12)) return;
          let { target: i11 } = t12, n11 = e10(i11, t12);
          if ("function" != typeof n11 || !i11) return;
          let s3 = (t13) => {
            ny(t13) && (n11(t13), i11.removeEventListener("pointerleave", s3));
          };
          i11.addEventListener("pointerleave", s3, r2);
        };
        return n10.forEach((t12) => {
          t12.addEventListener("pointerenter", o2, r2);
        }), s2;
      })(t10, (t11, e10) => (nx(this.node, e10, "Start"), (t12) => nx(this.node, t12, "End"))));
    }
    unmount() {
    }
  }
  class nw extends ef {
    onFocus() {
      let t10 = false;
      try {
        t10 = this.node.current.matches(":focus-visible");
      } catch (e10) {
        t10 = true;
      }
      t10 && this.node.animationState && (this.node.animationState.setActive("whileFocus", true), this.isActive = true);
    }
    onBlur() {
      this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", false), this.isActive = false);
    }
    mount() {
      this.unmount = (0, w.F)(eb(this.node.current, "focus", () => this.onFocus()), eb(this.node.current, "blur", () => this.onBlur()));
    }
    unmount() {
    }
    constructor() {
      super(...arguments), this.isActive = false;
    }
  }
  let nS = (t10, e10) => !!e10 && (t10 === e10 || nS(t10, e10.parentElement)), nP = /* @__PURE__ */ new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]), nT = /* @__PURE__ */ new WeakSet();
  function nA(t10) {
    return (e10) => {
      "Enter" === e10.key && t10(e10);
    };
  }
  function nE(t10, e10) {
    t10.dispatchEvent(new PointerEvent("pointer" + e10, { isPrimary: true, bubbles: true }));
  }
  let nC = (t10, e10) => {
    let i10 = t10.currentTarget;
    if (!i10) return;
    let n10 = nA(() => {
      if (nT.has(i10)) return;
      nE(i10, "down");
      let t11 = nA(() => {
        nE(i10, "up");
      });
      i10.addEventListener("keyup", t11, e10), i10.addEventListener("blur", () => nE(i10, "cancel"), e10);
    });
    i10.addEventListener("keydown", n10, e10), i10.addEventListener("blur", () => i10.removeEventListener("keydown", n10), e10);
  };
  function nM(t10) {
    return ew(t10) && !(ey.x || ey.y);
  }
  function nj(t10, e10, i10) {
    let { props: n10 } = t10;
    if (t10.current instanceof HTMLButtonElement && t10.current.disabled) return;
    t10.animationState && n10.whileTap && t10.animationState.setActive("whileTap", "Start" === i10);
    let r2 = n10["onTap" + ("End" === i10 ? "" : i10)];
    r2 && h.Gt.postRender(() => r2(e10, eS(e10)));
  }
  class nk extends ef {
    mount() {
      let { current: t10 } = this.node;
      t10 && (this.unmount = (function(t11, e10, i10 = {}) {
        let [n10, r2, s2] = ng(t11, i10), o2 = (t12) => {
          let n11 = t12.currentTarget;
          if (!nM(t12)) return;
          nT.add(n11);
          let s3 = e10(n11, t12), o3 = (t13, e11) => {
            window.removeEventListener("pointerup", a2), window.removeEventListener("pointercancel", l2), nT.has(n11) && nT.delete(n11), nM(t13) && "function" == typeof s3 && s3(t13, { success: e11 });
          }, a2 = (t13) => {
            o3(t13, n11 === window || n11 === document || i10.useGlobalTarget || nS(n11, t13.target));
          }, l2 = (t13) => {
            o3(t13, false);
          };
          window.addEventListener("pointerup", a2, r2), window.addEventListener("pointercancel", l2, r2);
        };
        return n10.forEach((t12) => {
          ((i10.useGlobalTarget ? window : t12).addEventListener("pointerdown", o2, r2), (0, t1.s)(t12)) && (t12.addEventListener("focus", (t13) => nC(t13, r2)), nP.has(t12.tagName) || -1 !== t12.tabIndex || t12.hasAttribute("tabindex") || (t12.tabIndex = 0));
        }), s2;
      })(t10, (t11, e10) => (nj(this.node, e10, "Start"), (t12, e11) => {
        let { success: i10 } = e11;
        return nj(this.node, t12, i10 ? "End" : "Cancel");
      }), { useGlobalTarget: this.node.props.globalTapTarget }));
    }
    unmount() {
    }
  }
  let nR = /* @__PURE__ */ new WeakMap(), nV = /* @__PURE__ */ new WeakMap(), n_ = (t10) => {
    let e10 = nR.get(t10.target);
    e10 && e10(t10);
  }, nD = (t10) => {
    t10.forEach(n_);
  }, nO = { some: 0, all: 1 };
  class nF extends ef {
    startObserver() {
      this.unmount();
      let { viewport: t10 = {} } = this.node.getProps(), { root: e10, margin: i10, amount: n10 = "some", once: r2 } = t10, s2 = { root: e10 ? e10.current : void 0, rootMargin: i10, threshold: "number" == typeof n10 ? n10 : nO[n10] };
      return (function(t11, e11, i11) {
        let n11 = (function(t12) {
          let { root: e12, ...i12 } = t12, n12 = e12 || document;
          nV.has(n12) || nV.set(n12, {});
          let r3 = nV.get(n12), s3 = JSON.stringify(i12);
          return r3[s3] || (r3[s3] = new IntersectionObserver(nD, { root: e12, ...i12 })), r3[s3];
        })(e11);
        return nR.set(t11, i11), n11.observe(t11), () => {
          nR.delete(t11), n11.unobserve(t11);
        };
      })(this.node.current, s2, (t11) => {
        let { isIntersecting: e11 } = t11;
        if (this.isInView === e11 || (this.isInView = e11, r2 && !e11 && this.hasEnteredView)) return;
        e11 && (this.hasEnteredView = true), this.node.animationState && this.node.animationState.setActive("whileInView", e11);
        let { onViewportEnter: i11, onViewportLeave: n11 } = this.node.getProps(), s3 = e11 ? i11 : n11;
        s3 && s3(t11);
      });
    }
    mount() {
      this.startObserver();
    }
    update() {
      if ("undefined" == typeof IntersectionObserver) return;
      let { props: t10, prevProps: e10 } = this.node;
      ["amount", "margin", "root"].some((function(t11) {
        let { viewport: e11 = {} } = t11, { viewport: i10 = {} } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (t12) => e11[t12] !== i10[t12];
      })(t10, e10)) && this.startObserver();
    }
    unmount() {
    }
    constructor() {
      super(...arguments), this.hasEnteredView = false, this.isInView = false;
    }
  }
  let nL = (0, io.createContext)({ strict: false });
  var nB = i(3645);
  let nI = (0, io.createContext)({});
  function nz(t10) {
    return n(t10.animate) || el.some((e10) => eo(t10[e10]));
  }
  function nN(t10) {
    return !!(nz(t10) || t10.variants);
  }
  function nU(t10) {
    return Array.isArray(t10) ? t10.join(" ") : t10;
  }
  var nW = i(427);
  let nG = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }, nq = {};
  for (let t10 in nG) nq[t10] = { isEnabled: (e10) => nG[t10].some((t11) => !!e10[t11]) };
  let nX = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
  var nK = i(1308), n$ = i(2487);
  function nY(t10, e10) {
    let { layout: i10, layoutId: n10 } = e10;
    return c.has(t10) || t10.startsWith("origin") || (i10 || void 0 !== n10) && (!!im[t10] || "opacity" === t10);
  }
  let nH = (t10, e10) => e10 && "number" == typeof t10 ? e10.transform(t10) : t10, nQ = { ...tM.ai, transform: Math.round }, nZ = { rotate: tj.uj, rotateX: tj.uj, rotateY: tj.uj, rotateZ: tj.uj, scale: tM.hs, scaleX: tM.hs, scaleY: tM.hs, scaleZ: tM.hs, skew: tj.uj, skewX: tj.uj, skewY: tj.uj, distance: tj.px, translateX: tj.px, translateY: tj.px, translateZ: tj.px, x: tj.px, y: tj.px, z: tj.px, perspective: tj.px, transformPerspective: tj.px, opacity: tM.X4, originX: tj.gQ, originY: tj.gQ, originZ: tj.px }, nJ = { borderWidth: tj.px, borderTopWidth: tj.px, borderRightWidth: tj.px, borderBottomWidth: tj.px, borderLeftWidth: tj.px, borderRadius: tj.px, radius: tj.px, borderTopLeftRadius: tj.px, borderTopRightRadius: tj.px, borderBottomRightRadius: tj.px, borderBottomLeftRadius: tj.px, width: tj.px, maxWidth: tj.px, height: tj.px, maxHeight: tj.px, top: tj.px, right: tj.px, bottom: tj.px, left: tj.px, padding: tj.px, paddingTop: tj.px, paddingRight: tj.px, paddingBottom: tj.px, paddingLeft: tj.px, margin: tj.px, marginTop: tj.px, marginRight: tj.px, marginBottom: tj.px, marginLeft: tj.px, backgroundPositionX: tj.px, backgroundPositionY: tj.px, ...nZ, zIndex: nQ, fillOpacity: tM.X4, strokeOpacity: tM.X4, numOctaves: nQ }, n0 = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, n1 = d.length;
  function n2(t10, e10, i10) {
    let { style: n10, vars: r2, transformOrigin: s2 } = t10, o2 = false, a2 = false;
    for (let t11 in e10) {
      let i11 = e10[t11];
      if (c.has(t11)) {
        o2 = true;
        continue;
      }
      if ((0, ip.j)(t11)) {
        r2[t11] = i11;
        continue;
      }
      {
        let e11 = nH(i11, nJ[t11]);
        t11.startsWith("origin") ? (a2 = true, s2[t11] = e11) : n10[t11] = e11;
      }
    }
    if (!e10.transform && (o2 || i10 ? n10.transform = (function(t11, e11, i11) {
      let n11 = "", r3 = true;
      for (let s3 = 0; s3 < n1; s3++) {
        let o3 = d[s3], a3 = t11[o3];
        if (void 0 === a3) continue;
        let l2 = true;
        if (!(l2 = "number" == typeof a3 ? a3 === +!!o3.startsWith("scale") : 0 === parseFloat(a3)) || i11) {
          let t12 = nH(a3, nJ[o3]);
          if (!l2) {
            r3 = false;
            let e12 = n0[o3] || o3;
            n11 += "".concat(e12, "(").concat(t12, ") ");
          }
          i11 && (e11[o3] = t12);
        }
      }
      return n11 = n11.trim(), i11 ? n11 = i11(e11, r3 ? "" : n11) : r3 && (n11 = "none"), n11;
    })(e10, t10.transform, i10) : n10.transform && (n10.transform = "none")), a2) {
      let { originX: t11 = "50%", originY: e11 = "50%", originZ: i11 = 0 } = s2;
      n10.transformOrigin = "".concat(t11, " ").concat(e11, " ").concat(i11);
    }
  }
  let n5 = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
  function n3(t10, e10, i10) {
    for (let n10 in e10) g(e10[n10]) || nY(n10, i10) || (t10[n10] = e10[n10]);
  }
  let n4 = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, n9 = { offset: "strokeDashoffset", array: "strokeDasharray" };
  function n6(t10, e10, i10, n10, r2) {
    var s2, o2;
    let { attrX: a2, attrY: l2, attrScale: u2, pathLength: h2, pathSpacing: d2 = 1, pathOffset: c2 = 0, ...p2 } = e10;
    if (n2(t10, p2, n10), i10) {
      t10.style.viewBox && (t10.attrs.viewBox = t10.style.viewBox);
      return;
    }
    t10.attrs = t10.style, t10.style = {};
    let { attrs: f2, style: m2 } = t10;
    f2.transform && (m2.transform = f2.transform, delete f2.transform), (m2.transform || f2.transformOrigin) && (m2.transformOrigin = null != (s2 = f2.transformOrigin) ? s2 : "50% 50%", delete f2.transformOrigin), m2.transform && (m2.transformBox = null != (o2 = null == r2 ? void 0 : r2.transformBox) ? o2 : "fill-box", delete f2.transformBox), void 0 !== a2 && (f2.x = a2), void 0 !== l2 && (f2.y = l2), void 0 !== u2 && (f2.scale = u2), void 0 !== h2 && (function(t11, e11) {
      let i11 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, n11 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0, r3 = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
      t11.pathLength = 1;
      let s3 = r3 ? n4 : n9;
      t11[s3.offset] = tj.px.transform(-n11);
      let o3 = tj.px.transform(e11), a3 = tj.px.transform(i11);
      t11[s3.array] = "".concat(o3, " ").concat(a3);
    })(f2, h2, d2, c2, false);
  }
  let n7 = () => ({ ...n5(), attrs: {} }), n8 = (t10) => "string" == typeof t10 && "svg" === t10.toLowerCase();
  var rt = i(9839);
  let re = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
  function ri(t10) {
    if ("string" != typeof t10 || t10.includes("-")) ;
    else if (re.indexOf(t10) > -1 || /[A-Z]/u.test(t10)) return true;
    return false;
  }
  var rn = i(2102);
  let rr = (t10) => (e10, i10) => {
    let r2 = (0, io.useContext)(nI), o2 = (0, io.useContext)(nK.t), a2 = () => (function(t11, e11, i11, r3) {
      let { scrapeMotionValuesFromProps: o3, createRenderState: a3 } = t11;
      return { latestValues: (function(t12, e12, i12, r4) {
        let o4 = {}, a4 = r4(t12, {});
        for (let t13 in a4) o4[t13] = iT(a4[t13]);
        let { initial: l2, animate: u2 } = t12, h2 = nz(t12), d2 = nN(t12);
        e12 && d2 && !h2 && false !== t12.inherit && (void 0 === l2 && (l2 = e12.initial), void 0 === u2 && (u2 = e12.animate));
        let c2 = !!i12 && false === i12.initial, p2 = (c2 = c2 || false === l2) ? u2 : l2;
        if (p2 && "boolean" != typeof p2 && !n(p2)) {
          let e13 = Array.isArray(p2) ? p2 : [p2];
          for (let i13 = 0; i13 < e13.length; i13++) {
            let n10 = s(t12, e13[i13]);
            if (n10) {
              let { transitionEnd: t13, transition: e14, ...i14 } = n10;
              for (let t14 in i14) {
                let e15 = i14[t14];
                if (Array.isArray(e15)) {
                  let t15 = c2 ? e15.length - 1 : 0;
                  e15 = e15[t15];
                }
                null !== e15 && (o4[t14] = e15);
              }
              for (let e15 in t13) o4[e15] = t13[e15];
            }
          }
        }
        return o4;
      })(e11, i11, r3, o3), renderState: a3() };
    })(t10, e10, r2, o2);
    return i10 ? a2() : (0, rn.M)(a2);
  };
  function rs(t10, e10, i10) {
    let { style: n10 } = t10, r2 = {};
    for (let o2 in n10) {
      var s2;
      (g(n10[o2]) || e10.style && g(e10.style[o2]) || nY(o2, t10) || (null == i10 || null == (s2 = i10.getValue(o2)) ? void 0 : s2.liveStyle) !== void 0) && (r2[o2] = n10[o2]);
    }
    return r2;
  }
  let ro = { useVisualState: rr({ scrapeMotionValuesFromProps: rs, createRenderState: n5 }) };
  function ra(t10, e10, i10) {
    let n10 = rs(t10, e10, i10);
    for (let i11 in t10) (g(t10[i11]) || g(e10[i11])) && (n10[-1 !== d.indexOf(i11) ? "attr" + i11.charAt(0).toUpperCase() + i11.substring(1) : i11] = t10[i11]);
    return n10;
  }
  let rl = { useVisualState: rr({ scrapeMotionValuesFromProps: ra, createRenderState: n7 }) }, ru = (t10) => (e10) => e10.test(t10), rh = [tM.ai, tj.px, tj.KN, tj.uj, tj.vw, tj.vh, { test: (t10) => "auto" === t10, parse: (t10) => t10 }], rd = (t10) => rh.find(ru(t10)), rc = (t10) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t10), rp = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u, rf = (t10) => /^0[^.\s]+$/u.test(t10);
  var rm = i(5257);
  let rv = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
  function rg(t10) {
    let [e10, i10] = t10.slice(0, -1).split("(");
    if ("drop-shadow" === e10) return t10;
    let [n10] = i10.match(rm.S) || [];
    if (!n10) return t10;
    let r2 = i10.replace(n10, ""), s2 = +!!rv.has(e10);
    return n10 !== i10 && (s2 *= 100), e10 + "(" + s2 + r2 + ")";
  }
  let ry = /\b([a-z-]*)\(.*?\)/gu, rx = { ...tJ.f, getAnimatableNone: (t10) => {
    let e10 = t10.match(ry);
    return e10 ? e10.map(rg).join(" ") : t10;
  } };
  var rb = i(7499);
  let rw = { ...nJ, color: rb.y, backgroundColor: rb.y, outlineColor: rb.y, fill: rb.y, stroke: rb.y, borderColor: rb.y, borderTopColor: rb.y, borderRightColor: rb.y, borderBottomColor: rb.y, borderLeftColor: rb.y, filter: rx, WebkitFilter: rx }, rS = (t10) => rw[t10];
  function rP(t10, e10) {
    let i10 = rS(t10);
    return i10 !== rx && (i10 = tJ.f), i10.getAnimatableNone ? i10.getAnimatableNone(e10) : void 0;
  }
  let rT = /* @__PURE__ */ new Set(["auto", "none", "0"]);
  class rA extends tz {
    constructor(t10, e10, i10, n10, r2) {
      super(t10, e10, i10, n10, r2, true);
    }
    readKeyframes() {
      let { unresolvedKeyframes: t10, element: e10, name: i10 } = this;
      if (!e10 || !e10.current) return;
      super.readKeyframes();
      for (let i11 = 0; i11 < t10.length; i11++) {
        let n11 = t10[i11];
        if ("string" == typeof n11 && (n11 = n11.trim(), (0, ip.p)(n11))) {
          let r3 = (function t11(e11, i12, n12 = 1) {
            (0, D.V)(n12 <= 4, `Max CSS variable fallback depth detected in property "${e11}". This may indicate a circular fallback dependency.`);
            let [r4, s3] = (function(t12) {
              let e12 = rp.exec(t12);
              if (!e12) return [,];
              let [, i13, n13, r5] = e12;
              return [`--${i13 != null ? i13 : n13}`, r5];
            })(e11);
            if (!r4) return;
            let o3 = window.getComputedStyle(i12).getPropertyValue(r4);
            if (o3) {
              let t12 = o3.trim();
              return rc(t12) ? parseFloat(t12) : t12;
            }
            return (0, ip.p)(s3) ? t11(s3, i12, n12 + 1) : s3;
          })(n11, e10.current);
          void 0 !== r3 && (t10[i11] = r3), i11 === t10.length - 1 && (this.finalKeyframe = n11);
        }
      }
      if (this.resolveNoneKeyframes(), !p.has(i10) || 2 !== t10.length) return;
      let [n10, r2] = t10, s2 = rd(n10), o2 = rd(r2);
      if (s2 !== o2) if (tk(s2) && tk(o2)) for (let e11 = 0; e11 < t10.length; e11++) {
        let i11 = t10[e11];
        "string" == typeof i11 && (t10[e11] = parseFloat(i11));
      }
      else t_[i10] && (this.needsMeasurement = true);
    }
    resolveNoneKeyframes() {
      let { unresolvedKeyframes: t10, name: e10 } = this, i10 = [];
      for (let e11 = 0; e11 < t10.length; e11++) {
        var n10;
        (null === t10[e11] || ("number" == typeof (n10 = t10[e11]) ? 0 === n10 : null === n10 || "none" === n10 || "0" === n10 || rf(n10))) && i10.push(e11);
      }
      i10.length && (function(t11, e11, i11) {
        let n11, r2 = 0;
        for (; r2 < t11.length && !n11; ) {
          let e12 = t11[r2];
          "string" == typeof e12 && !rT.has(e12) && (0, tJ.V)(e12).values.length && (n11 = t11[r2]), r2++;
        }
        if (n11 && i11) for (let r3 of e11) t11[r3] = rP(i11, n11);
      })(t10, i10, e10);
    }
    measureInitialState() {
      let { element: t10, unresolvedKeyframes: e10, name: i10 } = this;
      if (!t10 || !t10.current) return;
      "height" === i10 && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = t_[i10](t10.measureViewportBox(), window.getComputedStyle(t10.current)), e10[0] = this.measuredOrigin;
      let n10 = e10[e10.length - 1];
      void 0 !== n10 && t10.getValue(i10, n10).jump(n10, false);
    }
    measureEndState() {
      var _a;
      let { element: t10, name: e10, unresolvedKeyframes: i10 } = this;
      if (!t10 || !t10.current) return;
      let n10 = t10.getValue(e10);
      n10 && n10.jump(this.measuredOrigin, false);
      let r2 = i10.length - 1, s2 = i10[r2];
      i10[r2] = t_[e10](t10.measureViewportBox(), window.getComputedStyle(t10.current)), null !== s2 && void 0 === this.finalKeyframe && (this.finalKeyframe = s2), ((_a = this.removedTransforms) == null ? void 0 : _a.length) && this.removedTransforms.forEach(([e11, i11]) => {
        t10.getValue(e11).set(i11);
      }), this.resolveNoneKeyframes();
    }
  }
  let rE = [...rh, rb.y, tJ.f], rC = (t10) => rE.find(ru(t10)), rM = { current: null }, rj = { current: false }, rk = /* @__PURE__ */ new WeakMap(), rR = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
  class rV {
    scrapeMotionValuesFromProps(t10, e10, i10) {
      return {};
    }
    mount(t10) {
      this.current = t10, rk.set(t10, this), this.projection && !this.projection.instance && this.projection.mount(t10), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t11, e10) => this.bindToMotionValue(e10, t11)), rj.current || (function() {
        if (rj.current = true, nW.B) if (window.matchMedia) {
          let t11 = window.matchMedia("(prefers-reduced-motion)"), e10 = () => rM.current = t11.matches;
          t11.addListener(e10), e10();
        } else rM.current = false;
      })(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || rM.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
    }
    unmount() {
      for (let t10 in this.projection && this.projection.unmount(), (0, h.WG)(this.notifyUpdate), (0, h.WG)(this.render), this.valueSubscriptions.forEach((t11) => t11()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t10].clear();
      for (let t10 in this.features) {
        let e10 = this.features[t10];
        e10 && (e10.unmount(), e10.isMounted = false);
      }
      this.current = null;
    }
    bindToMotionValue(t10, e10) {
      let i10;
      this.valueSubscriptions.has(t10) && this.valueSubscriptions.get(t10)();
      let n10 = c.has(t10);
      n10 && this.onBindTransform && this.onBindTransform();
      let r2 = e10.on("change", (e11) => {
        this.latestValues[t10] = e11, this.props.onUpdate && h.Gt.preRender(this.notifyUpdate), n10 && this.projection && (this.projection.isTransformDirty = true);
      }), s2 = e10.on("renderRequest", this.scheduleRender);
      window.MotionCheckAppearSync && (i10 = window.MotionCheckAppearSync(this, t10, e10)), this.valueSubscriptions.set(t10, () => {
        r2(), s2(), i10 && i10(), e10.owner && e10.stop();
      });
    }
    sortNodePosition(t10) {
      return this.current && this.sortInstanceNodePosition && this.type === t10.type ? this.sortInstanceNodePosition(this.current, t10.current) : 0;
    }
    updateFeatures() {
      let t10 = "animation";
      for (t10 in nq) {
        let e10 = nq[t10];
        if (!e10) continue;
        let { isEnabled: i10, Feature: n10 } = e10;
        if (!this.features[t10] && n10 && i10(this.props) && (this.features[t10] = new n10(this)), this.features[t10]) {
          let e11 = this.features[t10];
          e11.isMounted ? e11.update() : (e11.mount(), e11.isMounted = true);
        }
      }
    }
    triggerBuild() {
      this.build(this.renderState, this.latestValues, this.props);
    }
    measureViewportBox() {
      return this.current ? this.measureInstanceViewportBox(this.current, this.props) : eO();
    }
    getStaticValue(t10) {
      return this.latestValues[t10];
    }
    setStaticValue(t10, e10) {
      this.latestValues[t10] = e10;
    }
    update(t10, e10) {
      (t10.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t10, this.prevPresenceContext = this.presenceContext, this.presenceContext = e10;
      for (let e11 = 0; e11 < rR.length; e11++) {
        let i10 = rR[e11];
        this.propEventSubscriptions[i10] && (this.propEventSubscriptions[i10](), delete this.propEventSubscriptions[i10]);
        let n10 = t10["on" + i10];
        n10 && (this.propEventSubscriptions[i10] = this.on(i10, n10));
      }
      this.prevMotionValues = (function(t11, e11, i10) {
        for (let n10 in e11) {
          let r2 = e11[n10], s2 = i10[n10];
          if (g(r2)) t11.addValue(n10, r2);
          else if (g(s2)) t11.addValue(n10, (0, f.OQ)(r2, { owner: t11 }));
          else if (s2 !== r2) if (t11.hasValue(n10)) {
            let e12 = t11.getValue(n10);
            true === e12.liveStyle ? e12.jump(r2) : e12.hasAnimated || e12.set(r2);
          } else {
            let e12 = t11.getStaticValue(n10);
            t11.addValue(n10, (0, f.OQ)(void 0 !== e12 ? e12 : r2, { owner: t11 }));
          }
        }
        for (let n10 in i10) void 0 === e11[n10] && t11.removeValue(n10);
        return e11;
      })(this, this.scrapeMotionValuesFromProps(t10, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
    }
    getProps() {
      return this.props;
    }
    getVariant(t10) {
      return this.props.variants ? this.props.variants[t10] : void 0;
    }
    getDefaultTransition() {
      return this.props.transition;
    }
    getTransformPagePoint() {
      return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
      return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
    }
    addVariantChild(t10) {
      let e10 = this.getClosestVariantNode();
      if (e10) return e10.variantChildren && e10.variantChildren.add(t10), () => e10.variantChildren.delete(t10);
    }
    addValue(t10, e10) {
      let i10 = this.values.get(t10);
      e10 !== i10 && (i10 && this.removeValue(t10), this.bindToMotionValue(t10, e10), this.values.set(t10, e10), this.latestValues[t10] = e10.get());
    }
    removeValue(t10) {
      this.values.delete(t10);
      let e10 = this.valueSubscriptions.get(t10);
      e10 && (e10(), this.valueSubscriptions.delete(t10)), delete this.latestValues[t10], this.removeValueFromRenderState(t10, this.renderState);
    }
    hasValue(t10) {
      return this.values.has(t10);
    }
    getValue(t10, e10) {
      if (this.props.values && this.props.values[t10]) return this.props.values[t10];
      let i10 = this.values.get(t10);
      return void 0 === i10 && void 0 !== e10 && (i10 = (0, f.OQ)(null === e10 ? void 0 : e10, { owner: this }), this.addValue(t10, i10)), i10;
    }
    readValue(t10, e10) {
      var i10;
      let n10 = void 0 === this.latestValues[t10] && this.current ? null != (i10 = this.getBaseTargetFromProps(this.props, t10)) ? i10 : this.readValueFromInstance(this.current, t10, this.options) : this.latestValues[t10];
      return null != n10 && ("string" == typeof n10 && (rc(n10) || rf(n10)) ? n10 = parseFloat(n10) : !rC(n10) && tJ.f.test(e10) && (n10 = rP(t10, e10)), this.setBaseTarget(t10, g(n10) ? n10.get() : n10)), g(n10) ? n10.get() : n10;
    }
    setBaseTarget(t10, e10) {
      this.baseTarget[t10] = e10;
    }
    getBaseTarget(t10) {
      let e10, { initial: i10 } = this.props;
      if ("string" == typeof i10 || "object" == typeof i10) {
        var n10;
        let r3 = s(this.props, i10, null == (n10 = this.presenceContext) ? void 0 : n10.custom);
        r3 && (e10 = r3[t10]);
      }
      if (i10 && void 0 !== e10) return e10;
      let r2 = this.getBaseTargetFromProps(this.props, t10);
      return void 0 === r2 || g(r2) ? void 0 !== this.initialValues[t10] && void 0 === e10 ? void 0 : this.baseTarget[t10] : r2;
    }
    on(t10, e10) {
      return this.events[t10] || (this.events[t10] = new ib.v()), this.events[t10].add(e10);
    }
    notify(t10) {
      for (var e10 = arguments.length, i10 = Array(e10 > 1 ? e10 - 1 : 0), n10 = 1; n10 < e10; n10++) i10[n10 - 1] = arguments[n10];
      this.events[t10] && this.events[t10].notify(...i10);
    }
    constructor({ parent: t10, props: e10, presenceContext: i10, reducedMotionConfig: n10, blockInitialAnimation: r2, visualState: s2 }, o2 = {}) {
      this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = false, this.isControllingVariants = false, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = tz, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
      }, this.renderScheduledAt = 0, this.scheduleRender = () => {
        let t11 = A.k.now();
        this.renderScheduledAt < t11 && (this.renderScheduledAt = t11, h.Gt.render(this.render, false, true));
      };
      let { latestValues: a2, renderState: l2 } = s2;
      this.latestValues = a2, this.baseTarget = { ...a2 }, this.initialValues = e10.initial ? { ...a2 } : {}, this.renderState = l2, this.parent = t10, this.props = e10, this.presenceContext = i10, this.depth = t10 ? t10.depth + 1 : 0, this.reducedMotionConfig = n10, this.options = o2, this.blockInitialAnimation = !!r2, this.isControllingVariants = nz(e10), this.isVariantNode = nN(e10), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t10 && t10.current);
      let { willChange: u2, ...d2 } = this.scrapeMotionValuesFromProps(e10, {}, this);
      for (let t11 in d2) {
        let e11 = d2[t11];
        void 0 !== a2[t11] && g(e11) && e11.set(a2[t11], false);
      }
    }
  }
  class r_ extends rV {
    sortInstanceNodePosition(t10, e10) {
      return 2 & t10.compareDocumentPosition(e10) ? 1 : -1;
    }
    getBaseTargetFromProps(t10, e10) {
      return t10.style ? t10.style[e10] : void 0;
    }
    removeValueFromRenderState(t10, e10) {
      let { vars: i10, style: n10 } = e10;
      delete i10[t10], delete n10[t10];
    }
    handleChildMotionValue() {
      this.childSubscription && (this.childSubscription(), delete this.childSubscription);
      let { children: t10 } = this.props;
      g(t10) && (this.childSubscription = t10.on("change", (t11) => {
        this.current && (this.current.textContent = "".concat(t11));
      }));
    }
    constructor() {
      super(...arguments), this.KeyframeResolver = rA;
    }
  }
  function rD(t10, e10, i10, n10) {
    let { style: r2, vars: s2 } = e10;
    for (let e11 in Object.assign(t10.style, r2, n10 && n10.getProjectionStyles(i10)), s2) t10.style.setProperty(e11, s2[e11]);
  }
  class rO extends r_ {
    readValueFromInstance(t10, e10) {
      var i10;
      if (c.has(e10)) return (null == (i10 = this.projection) ? void 0 : i10.isProjecting) ? tT(e10) : tE(t10, e10);
      {
        let i11 = window.getComputedStyle(t10), n10 = ((0, ip.j)(e10) ? i11.getPropertyValue(e10) : i11[e10]) || 0;
        return "string" == typeof n10 ? n10.trim() : n10;
      }
    }
    measureInstanceViewportBox(t10, e10) {
      let { transformPagePoint: i10 } = e10;
      return eK(t10, i10);
    }
    build(t10, e10, i10) {
      n2(t10, e10, i10.transformTemplate);
    }
    scrapeMotionValuesFromProps(t10, e10, i10) {
      return rs(t10, e10, i10);
    }
    constructor() {
      super(...arguments), this.type = "html", this.renderInstance = rD;
    }
  }
  let rF = /* @__PURE__ */ new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
  class rL extends r_ {
    getBaseTargetFromProps(t10, e10) {
      return t10[e10];
    }
    readValueFromInstance(t10, e10) {
      if (c.has(e10)) {
        let t11 = rS(e10);
        return t11 && t11.default || 0;
      }
      return e10 = rF.has(e10) ? e10 : x(e10), t10.getAttribute(e10);
    }
    scrapeMotionValuesFromProps(t10, e10, i10) {
      return ra(t10, e10, i10);
    }
    build(t10, e10, i10) {
      n6(t10, e10, this.isSVGTag, i10.transformTemplate, i10.style);
    }
    renderInstance(t10, e10, i10, n10) {
      for (let i11 in rD(t10, e10, void 0, n10), e10.attrs) t10.setAttribute(rF.has(i11) ? i11 : x(i11), e10.attrs[i11]);
    }
    mount(t10) {
      this.isSVGTag = n8(t10.tagName), super.mount(t10);
    }
    constructor() {
      super(...arguments), this.type = "svg", this.isSVGTag = false, this.measureInstanceViewportBox = eO;
    }
  }
  let rB = (function(t10) {
    if ("undefined" == typeof Proxy) return t10;
    let e10 = /* @__PURE__ */ new Map();
    return new Proxy(function() {
      for (var e11 = arguments.length, i10 = Array(e11), n10 = 0; n10 < e11; n10++) i10[n10] = arguments[n10];
      return t10(...i10);
    }, { get: (i10, n10) => "create" === n10 ? t10 : (e10.has(n10) || e10.set(n10, t10(n10)), e10.get(n10)) });
  })((l = { animation: { Feature: em }, exit: { Feature: eg }, inView: { Feature: nF }, tap: { Feature: nk }, focus: { Feature: nw }, hover: { Feature: nb }, pan: { Feature: ii }, drag: { Feature: it, ProjectionNode: nm, MeasureLayout: ig }, layout: { ProjectionNode: nm, MeasureLayout: ig } }, u = (t10, e10) => ri(t10) ? new rL(e10) : new rO(e10, { allowProjection: t10 !== io.Fragment }), function(t10) {
    let { forwardMotionProps: e10 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { forwardMotionProps: false };
    return (function(t11) {
      var e11, i10;
      let { preloadedFeatures: n10, createVisualElement: r2, useRender: s2, useVisualState: o2, Component: a2 } = t11;
      function l2(t12, e12) {
        var i11, n11, l3;
        let u3, h2 = { ...(0, io.useContext)(nB.Q), ...t12, layoutId: (function(t13) {
          let { layoutId: e13 } = t13, i12 = (0, io.useContext)(il.L).id;
          return i12 && void 0 !== e13 ? i12 + "-" + e13 : e13;
        })(t12) }, { isStatic: d2 } = h2, c2 = (function(t13) {
          let { initial: e13, animate: i12 } = (function(t14, e14) {
            if (nz(t14)) {
              let { initial: e15, animate: i13 } = t14;
              return { initial: false === e15 || eo(e15) ? e15 : void 0, animate: eo(i13) ? i13 : void 0 };
            }
            return false !== t14.inherit ? e14 : {};
          })(t13, (0, io.useContext)(nI));
          return (0, io.useMemo)(() => ({ initial: e13, animate: i12 }), [nU(e13), nU(i12)]);
        })(t12), p2 = o2(t12, d2);
        if (!d2 && nW.B) {
          n11 = 0, l3 = 0, (0, io.useContext)(nL).strict;
          let t13 = (function(t14) {
            let { drag: e13, layout: i12 } = nq;
            if (!e13 && !i12) return {};
            let n12 = { ...e13, ...i12 };
            return { MeasureLayout: (null == e13 ? void 0 : e13.isEnabled(t14)) || (null == i12 ? void 0 : i12.isEnabled(t14)) ? n12.MeasureLayout : void 0, ProjectionNode: n12.ProjectionNode };
          })(h2);
          u3 = t13.MeasureLayout, c2.visualElement = (function(t14, e13, i12, n12, r3) {
            var s3, o3, a3, l4;
            let { visualElement: u4 } = (0, io.useContext)(nI), h3 = (0, io.useContext)(nL), d3 = (0, io.useContext)(nK.t), c3 = (0, io.useContext)(nB.Q).reducedMotion, p3 = (0, io.useRef)(null);
            n12 = n12 || h3.renderer, !p3.current && n12 && (p3.current = n12(t14, { visualState: e13, parent: u4, props: i12, presenceContext: d3, blockInitialAnimation: !!d3 && false === d3.initial, reducedMotionConfig: c3 }));
            let f2 = p3.current, m2 = (0, io.useContext)(iu);
            f2 && !f2.projection && r3 && ("html" === f2.type || "svg" === f2.type) && (function(t15, e14, i13, n13) {
              let { layoutId: r4, layout: s4, drag: o4, dragConstraints: a4, layoutScroll: l5, layoutRoot: u5, layoutCrossfade: h4 } = e14;
              t15.projection = new i13(t15.latestValues, e14["data-framer-portal-id"] ? void 0 : (function t16(e15) {
                if (e15) return false !== e15.options.allowProjection ? e15.projection : t16(e15.parent);
              })(t15.parent)), t15.projection.setOptions({ layoutId: r4, layout: s4, alwaysMeasureLayout: !!o4 || a4 && eY(a4), visualElement: t15, animationType: "string" == typeof s4 ? s4 : "both", initialPromotionConfig: n13, crossfade: h4, layoutScroll: l5, layoutRoot: u5 });
            })(p3.current, i12, r3, m2);
            let v2 = (0, io.useRef)(false);
            (0, io.useInsertionEffect)(() => {
              f2 && v2.current && f2.update(i12, d3);
            });
            let g2 = i12[b], y2 = (0, io.useRef)(!!g2 && !(null == (s3 = (o3 = window).MotionHandoffIsComplete) ? void 0 : s3.call(o3, g2)) && (null == (a3 = (l4 = window).MotionHasOptimisedAnimation) ? void 0 : a3.call(l4, g2)));
            return (0, n$.E)(() => {
              f2 && (v2.current = true, window.MotionIsMounted = true, f2.updateFeatures(), is.render(f2.render), y2.current && f2.animationState && f2.animationState.animateChanges());
            }), (0, io.useEffect)(() => {
              f2 && (!y2.current && f2.animationState && f2.animationState.animateChanges(), y2.current && (queueMicrotask(() => {
                var t15, e14;
                null == (t15 = (e14 = window).MotionHandoffMarkAsComplete) || t15.call(e14, g2);
              }), y2.current = false));
            }), f2;
          })(a2, p2, h2, r2, t13.ProjectionNode);
        }
        return (0, ir.jsxs)(nI.Provider, { value: c2, children: [u3 && c2.visualElement ? (0, ir.jsx)(u3, { visualElement: c2.visualElement, ...h2 }) : null, s2(a2, t12, (i11 = c2.visualElement, (0, io.useCallback)((t13) => {
          t13 && p2.onMount && p2.onMount(t13), i11 && (t13 ? i11.mount(t13) : i11.unmount()), e12 && ("function" == typeof e12 ? e12(t13) : eY(e12) && (e12.current = t13));
        }, [i11])), p2, d2, c2.visualElement)] });
      }
      n10 && (function(t12) {
        for (let e12 in t12) nq[e12] = { ...nq[e12], ...t12[e12] };
      })(n10), l2.displayName = "motion.".concat("string" == typeof a2 ? a2 : "create(".concat(null != (i10 = null != (e11 = a2.displayName) ? e11 : a2.name) ? i10 : "", ")"));
      let u2 = (0, io.forwardRef)(l2);
      return u2[nX] = a2, u2;
    })({ ...ri(t10) ? rl : ro, preloadedFeatures: l, useRender: (function() {
      let t11 = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return (e11, i10, n10, r2, s2) => {
        let { latestValues: o2 } = r2, a2 = (ri(e11) ? function(t12, e12, i11, n11) {
          let r3 = (0, io.useMemo)(() => {
            let i12 = n7();
            return n6(i12, e12, n8(n11), t12.transformTemplate, t12.style), { ...i12.attrs, style: { ...i12.style } };
          }, [e12]);
          if (t12.style) {
            let e13 = {};
            n3(e13, t12.style, t12), r3.style = { ...e13, ...r3.style };
          }
          return r3;
        } : function(t12, e12) {
          let i11 = {}, n11 = (function(t13, e13) {
            let i12 = t13.style || {}, n12 = {};
            return n3(n12, i12, t13), Object.assign(n12, (function(t14, e14) {
              let { transformTemplate: i13 } = t14;
              return (0, io.useMemo)(() => {
                let t15 = n5();
                return n2(t15, e14, i13), Object.assign({}, t15.vars, t15.style);
              }, [e14]);
            })(t13, e13)), n12;
          })(t12, e12);
          return t12.drag && false !== t12.dragListener && (i11.draggable = false, n11.userSelect = n11.WebkitUserSelect = n11.WebkitTouchCallout = "none", n11.touchAction = true === t12.drag ? "none" : "pan-".concat("x" === t12.drag ? "y" : "x")), void 0 === t12.tabIndex && (t12.onTap || t12.onTapStart || t12.whileTap) && (i11.tabIndex = 0), i11.style = n11, i11;
        })(i10, o2, s2, e11), l2 = (0, rt.J)(i10, "string" == typeof e11, t11), u2 = e11 !== io.Fragment ? { ...l2, ...a2, ref: n10 } : {}, { children: h2 } = i10, d2 = (0, io.useMemo)(() => g(h2) ? h2.get() : h2, [h2]);
        return (0, io.createElement)(e11, { ...u2, children: d2 });
      };
    })(e10), createVisualElement: u, Component: t10 });
  }));
}, 6405: (t, e, i) => {
  "use strict";
  i.d(e, { KN: () => s, gQ: () => u, px: () => o, uj: () => r, vh: () => a, vw: () => l });
  let n = (t2) => ({ test: (e2) => "string" == typeof e2 && e2.endsWith(t2) && 1 === e2.split(" ").length, parse: parseFloat, transform: (e2) => `${e2}${t2}` }), r = n("deg"), s = n("%"), o = n("px"), a = n("vh"), l = n("vw"), u = { ...s, parse: (t2) => s.parse(t2) / 100, transform: (t2) => s.transform(100 * t2) };
}, 6450: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "getImgProps", { enumerable: true, get: function() {
    return l;
  } }), i(3555);
  let n = i(4491), r = i(2895), s = ["-moz-initial", "fill", "none", "scale-down", void 0];
  function o(t2) {
    return void 0 !== t2.default;
  }
  function a(t2) {
    return void 0 === t2 ? t2 : "number" == typeof t2 ? Number.isFinite(t2) ? t2 : NaN : "string" == typeof t2 && /^[0-9]+$/.test(t2) ? parseInt(t2, 10) : NaN;
  }
  function l(t2, e2) {
    var i2, l2;
    let u, h, d, { src: c, sizes: p, unoptimized: f = false, priority: m = false, loading: v, className: g, quality: y, width: x, height: b, fill: w = false, style: S, overrideSrc: P, onLoad: T, onLoadingComplete: A, placeholder: E = "empty", blurDataURL: C, fetchPriority: M, decoding: j = "async", layout: k, objectFit: R, objectPosition: V, lazyBoundary: _, lazyRoot: D, ...O } = t2, { imgConf: F, showAltText: L, blurComplete: B, defaultLoader: I } = e2, z = F || r.imageConfigDefault;
    if ("allSizes" in z) u = z;
    else {
      let t3 = [...z.deviceSizes, ...z.imageSizes].sort((t4, e4) => t4 - e4), e3 = z.deviceSizes.sort((t4, e4) => t4 - e4), n2 = null == (i2 = z.qualities) ? void 0 : i2.sort((t4, e4) => t4 - e4);
      u = { ...z, allSizes: t3, deviceSizes: e3, qualities: n2 };
    }
    if (void 0 === I) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", { value: "E163", enumerable: false, configurable: true });
    let N = O.loader || I;
    delete O.loader, delete O.srcSet;
    let U = "__next_img_default" in N;
    if (U) {
      if ("custom" === u.loader) throw Object.defineProperty(Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'), "__NEXT_ERROR_CODE", { value: "E252", enumerable: false, configurable: true });
    } else {
      let t3 = N;
      N = (e3) => {
        let { config: i3, ...n2 } = e3;
        return t3(n2);
      };
    }
    if (k) {
      "fill" === k && (w = true);
      let t3 = { intrinsic: { maxWidth: "100%", height: "auto" }, responsive: { width: "100%", height: "auto" } }[k];
      t3 && (S = { ...S, ...t3 });
      let e3 = { responsive: "100vw", fill: "100vw" }[k];
      e3 && !p && (p = e3);
    }
    let W = "", G = a(x), q = a(b);
    if ((l2 = c) && "object" == typeof l2 && (o(l2) || void 0 !== l2.src)) {
      let t3 = o(c) ? c.default : c;
      if (!t3.src) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(t3)), "__NEXT_ERROR_CODE", { value: "E460", enumerable: false, configurable: true });
      if (!t3.height || !t3.width) throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(t3)), "__NEXT_ERROR_CODE", { value: "E48", enumerable: false, configurable: true });
      if (h = t3.blurWidth, d = t3.blurHeight, C = C || t3.blurDataURL, W = t3.src, !w) if (G || q) {
        if (G && !q) {
          let e3 = G / t3.width;
          q = Math.round(t3.height * e3);
        } else if (!G && q) {
          let e3 = q / t3.height;
          G = Math.round(t3.width * e3);
        }
      } else G = t3.width, q = t3.height;
    }
    let X = !m && ("lazy" === v || void 0 === v);
    (!(c = "string" == typeof c ? c : W) || c.startsWith("data:") || c.startsWith("blob:")) && (f = true, X = false), u.unoptimized && (f = true), U && !u.dangerouslyAllowSVG && c.split("?", 1)[0].endsWith(".svg") && (f = true);
    let K = a(y), $ = Object.assign(w ? { position: "absolute", height: "100%", width: "100%", left: 0, top: 0, right: 0, bottom: 0, objectFit: R, objectPosition: V } : {}, L ? {} : { color: "transparent" }, S), Y = B || "empty" === E ? null : "blur" === E ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({ widthInt: G, heightInt: q, blurWidth: h, blurHeight: d, blurDataURL: C || "", objectFit: $.objectFit }) + '")' : 'url("' + E + '")', H = s.includes($.objectFit) ? "fill" === $.objectFit ? "100% 100%" : "cover" : $.objectFit, Q = Y ? { backgroundSize: H, backgroundPosition: $.objectPosition || "50% 50%", backgroundRepeat: "no-repeat", backgroundImage: Y } : {}, Z = (function(t3) {
      let { config: e3, src: i3, unoptimized: n2, width: r2, quality: s2, sizes: o2, loader: a2 } = t3;
      if (n2) return { src: i3, srcSet: void 0, sizes: void 0 };
      let { widths: l3, kind: u2 } = (function(t4, e4, i4) {
        let { deviceSizes: n3, allSizes: r3 } = t4;
        if (i4) {
          let t5 = /(^|\s)(1?\d?\d)vw/g, e5 = [];
          for (let n4; n4 = t5.exec(i4); ) e5.push(parseInt(n4[2]));
          if (e5.length) {
            let t6 = 0.01 * Math.min(...e5);
            return { widths: r3.filter((e6) => e6 >= n3[0] * t6), kind: "w" };
          }
          return { widths: r3, kind: "w" };
        }
        return "number" != typeof e4 ? { widths: n3, kind: "w" } : { widths: [...new Set([e4, 2 * e4].map((t5) => r3.find((e5) => e5 >= t5) || r3[r3.length - 1]))], kind: "x" };
      })(e3, r2, o2), h2 = l3.length - 1;
      return { sizes: o2 || "w" !== u2 ? o2 : "100vw", srcSet: l3.map((t4, n3) => a2({ config: e3, src: i3, quality: s2, width: t4 }) + " " + ("w" === u2 ? t4 : n3 + 1) + u2).join(", "), src: a2({ config: e3, src: i3, quality: s2, width: l3[h2] }) };
    })({ config: u, src: c, unoptimized: f, width: G, quality: K, sizes: p, loader: N });
    return { props: { ...O, loading: X ? "lazy" : v, fetchPriority: M, width: G, height: q, decoding: j, className: g, style: { ...$, ...Q }, sizes: Z.sizes, srcSet: Z.srcSet, src: P || Z.src }, meta: { unoptimized: f, priority: m, placeholder: E, fill: w } };
  }
}, 6957: (t, e, i) => {
  "use strict";
  i.d(e, { B: () => u });
  var n = i(7809), r = i(7564), s = i(5204), o = i(3405);
  let a = (t2) => (0, n.q)(0, 255, t2), l = { ...r.ai, transform: (t2) => Math.round(a(t2)) }, u = { test: (0, o.$)("rgb", "red"), parse: (0, o.q)("red", "green", "blue"), transform: ({ red: t2, green: e2, blue: i2, alpha: n2 = 1 }) => "rgba(" + l.transform(t2) + ", " + l.transform(e2) + ", " + l.transform(i2) + ", " + (0, s.a)(r.X4.transform(n2)) + ")" };
}, 7074: (t, e) => {
  "use strict";
  function i(t2) {
    var e2;
    let { config: i2, src: n2, width: r, quality: s } = t2, o = s || (null == (e2 = i2.qualities) ? void 0 : e2.reduce((t3, e3) => Math.abs(e3 - 75) < Math.abs(t3 - 75) ? e3 : t3)) || 75;
    return i2.path + "?url=" + encodeURIComponent(n2) + "&w=" + r + "&q=" + o + (n2.startsWith("/_next/static/media/"), "");
  }
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: function() {
    return n;
  } }), i.__next_img_default = true;
  let n = i;
}, 7114: (t, e, i) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), !(function(t2, e2) {
    for (var i2 in e2) Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
  })(e, { default: function() {
    return l;
  }, getImageProps: function() {
    return a;
  } });
  let n = i(9582), r = i(6450), s = i(2250), o = n._(i(7074));
  function a(t2) {
    let { props: e2 } = (0, r.getImgProps)(t2, { defaultLoader: o.default, imgConf: { deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840], imageSizes: [16, 32, 48, 64, 96, 128, 256, 384], path: "/_next/image", loader: "default", dangerouslyAllowSVG: false, unoptimized: false } });
    for (let [t3, i2] of Object.entries(e2)) void 0 === i2 && delete e2[t3];
    return { props: e2 };
  }
  let l = s.Image;
}, 7355: (t, e, i) => {
  "use strict";
  i.d(e, { V: () => h, f: () => f });
  var n = i(7499);
  let r = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
  var s = i(5257), o = i(5204);
  let a = "number", l = "color", u = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
  function h(t2) {
    let e2 = t2.toString(), i2 = [], r2 = { color: [], number: [], var: [] }, s2 = [], o2 = 0, h2 = e2.replace(u, (t3) => (n.y.test(t3) ? (r2.color.push(o2), s2.push(l), i2.push(n.y.parse(t3))) : t3.startsWith("var(") ? (r2.var.push(o2), s2.push("var"), i2.push(t3)) : (r2.number.push(o2), s2.push(a), i2.push(parseFloat(t3))), ++o2, "${}")).split("${}");
    return { values: i2, split: h2, indexes: r2, types: s2 };
  }
  function d(t2) {
    return h(t2).values;
  }
  function c(t2) {
    let { split: e2, types: i2 } = h(t2), r2 = e2.length;
    return (t3) => {
      let s2 = "";
      for (let u2 = 0; u2 < r2; u2++) if (s2 += e2[u2], void 0 !== t3[u2]) {
        let e3 = i2[u2];
        e3 === a ? s2 += (0, o.a)(t3[u2]) : e3 === l ? s2 += n.y.transform(t3[u2]) : s2 += t3[u2];
      }
      return s2;
    };
  }
  let p = (t2) => "number" == typeof t2 ? 0 : n.y.test(t2) ? n.y.getAnimatableNone(t2) : t2, f = { test: function(t2) {
    var _a, _b;
    return isNaN(t2) && "string" == typeof t2 && (((_a = t2.match(s.S)) == null ? void 0 : _a.length) || 0) + (((_b = t2.match(r)) == null ? void 0 : _b.length) || 0) > 0;
  }, parse: d, createTransformer: c, getAnimatableNone: function(t2) {
    let e2 = d(t2);
    return c(t2)(e2.map(p));
  } };
}, 7499: (t, e, i) => {
  "use strict";
  i.d(e, { y: () => o });
  var n = i(9952), r = i(7681), s = i(6957);
  let o = { test: (t2) => s.B.test(t2) || n.u.test(t2) || r.V.test(t2), parse: (t2) => s.B.test(t2) ? s.B.parse(t2) : r.V.test(t2) ? r.V.parse(t2) : n.u.parse(t2), transform: (t2) => "string" == typeof t2 ? t2 : t2.hasOwnProperty("red") ? s.B.transform(t2) : r.V.transform(t2), getAnimatableNone: (t2) => {
    let e2 = o.parse(t2);
    return e2.alpha = 0, o.transform(e2);
  } };
}, 7564: (t, e, i) => {
  "use strict";
  i.d(e, { X4: () => s, ai: () => r, hs: () => o });
  var n = i(7809);
  let r = { test: (t2) => "number" == typeof t2, parse: parseFloat, transform: (t2) => t2 }, s = { ...r, transform: (t2) => (0, n.q)(0, 1, t2) }, o = { ...r, default: 1 };
}, 7681: (t, e, i) => {
  "use strict";
  i.d(e, { V: () => a });
  var n = i(7564), r = i(6405), s = i(5204), o = i(3405);
  let a = { test: (0, o.$)("hsl", "hue"), parse: (0, o.q)("hue", "saturation", "lightness"), transform: ({ hue: t2, saturation: e2, lightness: i2, alpha: o2 = 1 }) => "hsla(" + Math.round(t2) + ", " + r.KN.transform((0, s.a)(e2)) + ", " + r.KN.transform((0, s.a)(i2)) + ", " + (0, s.a)(n.X4.transform(o2)) + ")" };
}, 7753: (t, e, i) => {
  "use strict";
  i.d(e, { j: () => r, p: () => o });
  let n = (t2) => (e2) => "string" == typeof e2 && e2.startsWith(t2), r = n("--"), s = n("var(--"), o = (t2) => !!s(t2) && a.test(t2.split("/*")[0].trim()), a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
}, 7809: (t, e, i) => {
  "use strict";
  i.d(e, { q: () => n });
  let n = (t2, e2, i2) => i2 > e2 ? e2 : i2 < t2 ? t2 : i2;
}, 7920: (t, e, i) => {
  "use strict";
  i.d(e, { W: () => n });
  let n = {};
}, 7958: (t, e, i) => {
  "use strict";
  var n = i(8970);
  i.o(n, "usePathname") && i.d(e, { usePathname: function() {
    return n.usePathname;
  } }), i.o(n, "useRouter") && i.d(e, { useRouter: function() {
    return n.useRouter;
  } });
}, 8091: (t, e, i) => {
  "use strict";
  t.exports = i(2562).style;
}, 8186: (t, e, i) => {
  "use strict";
  i.d(e, { F: () => r });
  let n = (t2, e2) => (i2) => e2(t2(i2)), r = (...t2) => t2.reduce(n);
}, 8767: (t, e, i) => {
  "use strict";
  i.d(e, { $: () => n, V: () => r });
  let n = () => {
  }, r = () => {
  };
}, 9453: (t, e, i) => {
  "use strict";
  i.d(e, { J: () => n });
  let n = (0, i(4800).p)(() => void 0 !== window.ScrollTimeline);
}, 9613: () => {
}, 9839: (t, e, i) => {
  "use strict";
  i.d(e, { J: () => a, D: () => o });
  let n = /* @__PURE__ */ new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
  function r(t2) {
    return t2.startsWith("while") || t2.startsWith("drag") && "draggable" !== t2 || t2.startsWith("layout") || t2.startsWith("onTap") || t2.startsWith("onPan") || t2.startsWith("onLayout") || n.has(t2);
  }
  let s = (t2) => !r(t2);
  function o(t2) {
    "function" == typeof t2 && (s = (e2) => e2.startsWith("on") ? !r(e2) : t2(e2));
  }
  try {
    o(require("@emotion/is-prop-valid").default);
  } catch (t2) {
  }
  function a(t2, e2, i2) {
    let n2 = {};
    for (let o2 in t2) ("values" !== o2 || "object" != typeof t2.values) && (s(o2) || true === i2 && r(o2) || !e2 && !r(o2) || t2.draggable && o2.startsWith("onDrag")) && (n2[o2] = t2[o2]);
    return n2;
  }
}, 9952: (t, e, i) => {
  "use strict";
  i.d(e, { u: () => r });
  var n = i(6957);
  let r = { test: (0, i(3405).$)("#"), parse: function(t2) {
    let e2 = "", i2 = "", n2 = "", r2 = "";
    return t2.length > 5 ? (e2 = t2.substring(1, 3), i2 = t2.substring(3, 5), n2 = t2.substring(5, 7), r2 = t2.substring(7, 9)) : (e2 = t2.substring(1, 2), i2 = t2.substring(2, 3), n2 = t2.substring(3, 4), r2 = t2.substring(4, 5), e2 += e2, i2 += i2, n2 += n2, r2 += r2), { red: parseInt(e2, 16), green: parseInt(i2, 16), blue: parseInt(n2, 16), alpha: r2 ? parseInt(r2, 16) / 255 : 1 };
  }, transform: n.B.transform };
} }]);
