if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
if(typeof queueMicrotask==='undefined'){window.queueMicrotask=function(cb){Promise.resolve().then(cb);};self.queueMicrotask=window.queueMicrotask;}
if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
(() => {
  "use strict";
  var e = {}, t = {};
  function r(o) {
    var n = t[o];
    if (void 0 !== n) return n.exports;
    var a = t[o] = { exports: {} }, i = true;
    try {
      e[o](a, a.exports, r), i = false;
    } finally {
      i && delete t[o];
    }
    return a.exports;
  }
  r.m = e, (() => {
    var e2 = [];
    r.O = (t2, o, n, a) => {
      if (o) {
        a = a || 0;
        for (var i = e2.length; i > 0 && e2[i - 1][2] > a; i--) e2[i] = e2[i - 1];
        e2[i] = [o, n, a];
        return;
      }
      for (var c = 1 / 0, i = 0; i < e2.length; i++) {
        for (var [o, n, a] = e2[i], u = true, l = 0; l < o.length; l++) (false & a || c >= a) && Object.keys(r.O).every((e3) => r.O[e3](o[l])) ? o.splice(l--, 1) : (u = false, a < c && (c = a));
        if (u) {
          e2.splice(i--, 1);
          var d = n();
          void 0 !== d && (t2 = d);
        }
      }
      return t2;
    };
  })(), r.n = (e2) => {
    var t2 = e2 && e2.__esModule ? () => e2.default : () => e2;
    return r.d(t2, { a: t2 }), t2;
  }, (() => {
    var e2, t2 = Object.getPrototypeOf ? (e3) => Object.getPrototypeOf(e3) : (e3) => e3.__proto__;
    r.t = function(o, n) {
      if (1 & n && (o = this(o)), 8 & n || "object" == typeof o && o && (4 & n && o.__esModule || 16 & n && "function" == typeof o.then)) return o;
      var a = /* @__PURE__ */ Object.create(null);
      r.r(a);
      var i = {};
      e2 = e2 || [null, t2({}), t2([]), t2(t2)];
      for (var c = 2 & n && o; "object" == typeof c && !~e2.indexOf(c); c = t2(c)) Object.getOwnPropertyNames(c).forEach((e3) => i[e3] = () => o[e3]);
      return i.default = () => o, r.d(a, i), a;
    };
  })(), r.d = (e2, t2) => {
    for (var o in t2) r.o(t2, o) && !r.o(e2, o) && Object.defineProperty(e2, o, { enumerable: true, get: t2[o] });
  }, r.f = {}, r.e = (e2) => Promise.all(Object.keys(r.f).reduce((t2, o) => (r.f[o](e2, t2), t2), [])), r.u = (e2) => "static/chunks/" + e2 + "." + { 1700: "e4185bc02697c852", 1860: "5cbfc257e586a581", 4445: "9843efa8498e7874", 5525: "a435fe25f0899faf", 6944: "52d1b80f848632ce", 7775: "f187841131fbd773", 7889: "536d6dc0b5a72869", 8075: "2d0a6a99fd1e6bda", 8213: "0c4e4d43c5a9632f" }[e2] + ".js", r.miniCssF = (e2) => {
  }, r.g = (function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || Function("return this")();
    } catch (e2) {
      if ("object" == typeof window) return window;
    }
  })(), r.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), (() => {
    var e2 = {}, t2 = "_N_E:";
    r.l = (o, n, a, i) => {
      if (e2[o]) return void e2[o].push(n);
      if (void 0 !== a) for (var c, u, l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
        var f = l[d];
        if (f.getAttribute("src") == o || f.getAttribute("data-webpack") == t2 + a) {
          c = f;
          break;
        }
      }
      c || (u = true, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, r.nc && c.setAttribute("nonce", r.nc), c.setAttribute("data-webpack", t2 + a), c.src = r.tu(o)), e2[o] = [n];
      var s = (t3, r2) => {
        c.onerror = c.onload = null, clearTimeout(p);
        var n2 = e2[o];
        if (delete e2[o], c.parentNode && c.parentNode.removeChild(c), n2 && n2.forEach((e3) => e3(r2)), t3) return t3(r2);
      }, p = setTimeout(s.bind(null, void 0, { type: "timeout", target: c }), 12e4);
      c.onerror = s.bind(null, c.onerror), c.onload = s.bind(null, c.onload), u && document.head.appendChild(c);
    };
  })(), r.r = (e2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
  }, (() => {
    var e2;
    r.tt = () => (void 0 === e2 && (e2 = { createScriptURL: (e3) => e3 }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e2 = trustedTypes.createPolicy("nextjs#bundler", e2))), e2);
  })(), r.tu = (e2) => r.tt().createScriptURL(e2), r.p = "/_next/", (() => {
    var e2 = { 8068: 0, 6446: 0, 6777: 0, 6295: 0, 4246: 0 };
    r.f.j = (t3, o2) => {
      var n = r.o(e2, t3) ? e2[t3] : void 0;
      if (0 !== n) if (n) o2.push(n[2]);
      else if (/^(6(295|446|777)|4246|8068)$/.test(t3)) e2[t3] = 0;
      else {
        var a = new Promise((r2, o3) => n = e2[t3] = [r2, o3]);
        o2.push(n[2] = a);
        var i = r.p + r.u(t3), c = Error();
        r.l(i, (o3) => {
          if (r.o(e2, t3) && (0 !== (n = e2[t3]) && (e2[t3] = void 0), n)) {
            var a2 = o3 && ("load" === o3.type ? "missing" : o3.type), i2 = o3 && o3.target && o3.target.src;
            c.message = "Loading chunk " + t3 + " failed.\n(" + a2 + ": " + i2 + ")", c.name = "ChunkLoadError", c.type = a2, c.request = i2, n[1](c);
          }
        }, "chunk-" + t3, t3);
      }
    }, r.O.j = (t3) => 0 === e2[t3];
    var t2 = (t3, o2) => {
      var n, a, [i, c, u] = o2, l = 0;
      if (i.some((t4) => 0 !== e2[t4])) {
        for (n in c) r.o(c, n) && (r.m[n] = c[n]);
        if (u) var d = u(r);
      }
      for (t3 && t3(o2); l < i.length; l++) a = i[l], r.o(e2, a) && e2[a] && e2[a][0](), e2[a] = 0;
      return r.O(d);
    }, o = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
    o.forEach(t2.bind(null, 0)), o.push = t2.bind(null, o.push.bind(o));
  })();
})();
