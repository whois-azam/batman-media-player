if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
if(typeof queueMicrotask==='undefined'){window.queueMicrotask=function(cb){Promise.resolve().then(cb);};self.queueMicrotask=window.queueMicrotask;}
if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1765], { 434: (e, t) => {
  Object.defineProperty(t, "__esModule", { value: true }), !(function(e2, t2) {
    for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  })(t, { DecodeError: function() {
    return h;
  }, MiddlewareNotFoundError: function() {
    return b;
  }, MissingStaticPage: function() {
    return m;
  }, NormalizeError: function() {
    return g;
  }, PageNotFoundError: function() {
    return y;
  }, SP: function() {
    return p;
  }, ST: function() {
    return d;
  }, WEB_VITALS: function() {
    return r;
  }, execOnce: function() {
    return n;
  }, getDisplayName: function() {
    return f;
  }, getLocationOrigin: function() {
    return i;
  }, getURL: function() {
    return a;
  }, isAbsoluteUrl: function() {
    return u;
  }, isResSent: function() {
    return c;
  }, loadGetInitialProps: function() {
    return l;
  }, normalizeRepeatedSlashes: function() {
    return s;
  }, stringifyError: function() {
    return P;
  } });
  let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
  function n(e2) {
    let t2, r2 = false;
    return function() {
      for (var n2 = arguments.length, o2 = Array(n2), u2 = 0; u2 < n2; u2++) o2[u2] = arguments[u2];
      return r2 || (r2 = true, t2 = e2(...o2)), t2;
    };
  }
  let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, u = (e2) => o.test(e2);
  function i() {
    let { protocol: e2, hostname: t2, port: r2 } = window.location;
    return e2 + "//" + t2 + (r2 ? ":" + r2 : "");
  }
  function a() {
    let { href: e2 } = window.location, t2 = i();
    return e2.substring(t2.length);
  }
  function f(e2) {
    return "string" == typeof e2 ? e2 : e2.displayName || e2.name || "Unknown";
  }
  function c(e2) {
    return e2.finished || e2.headersSent;
  }
  function s(e2) {
    let t2 = e2.split("?");
    return t2[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t2[1] ? "?" + t2.slice(1).join("?") : "");
  }
  async function l(e2, t2) {
    let r2 = t2.res || t2.ctx && t2.ctx.res;
    if (!e2.getInitialProps) return t2.ctx && t2.Component ? { pageProps: await l(t2.Component, t2.ctx) } : {};
    let n2 = await e2.getInitialProps(t2);
    if (r2 && c(r2)) return n2;
    if (!n2) throw Object.defineProperty(Error('"' + f(e2) + '.getInitialProps()" should resolve to an object. But found "' + n2 + '" instead.'), "__NEXT_ERROR_CODE", { value: "E394", enumerable: false, configurable: true });
    return n2;
  }
  let p = "undefined" != typeof performance, d = p && ["mark", "measure", "getEntriesByName"].every((e2) => "function" == typeof performance[e2]);
  class h extends Error {
  }
  class g extends Error {
  }
  class y extends Error {
    constructor(e2) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = "Cannot find module for page: " + e2;
    }
  }
  class m extends Error {
    constructor(e2, t2) {
      super(), this.message = "Failed to load static file for page: " + e2 + " " + t2;
    }
  }
  class b extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module";
    }
  }
  function P(e2) {
    return JSON.stringify({ message: e2.message, stack: e2.stack });
  }
}, 1765: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), !(function(e2, t2) {
    for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  })(t, { default: function() {
    return y;
  }, useLinkStatus: function() {
    return b;
  } });
  let n = r(6215), o = r(3928), u = n._(r(756)), i = r(2332), a = r(8602), f = r(1301), c = r(529), s = r(434), l = r(5008);
  r(3555);
  let p = r(3709), d = r(4517), h = r(9);
  function g(e2) {
    return "string" == typeof e2 ? e2 : (0, i.formatUrl)(e2);
  }
  function y(e2) {
    let t2, r2, n2, [i2, y2] = (0, u.useOptimistic)(p.IDLE_LINK_STATUS), b2 = (0, u.useRef)(null), { href: P, as: E, children: v, prefetch: _ = null, passHref: O, replace: j, shallow: T, scroll: N, onClick: C, onMouseEnter: S, onTouchStart: A, legacyBehavior: L = false, onNavigate: x, ref: U, unstable_dynamicOnHover: I, ...k } = e2;
    t2 = v, L && ("string" == typeof t2 || "number" == typeof t2) && (t2 = (0, o.jsx)("a", { children: t2 }));
    let w = u.default.useContext(a.AppRouterContext), M = false !== _, R = null === _ ? f.PrefetchKind.AUTO : f.PrefetchKind.FULL, { href: D, as: F } = u.default.useMemo(() => {
      let e3 = g(P);
      return { href: e3, as: E ? g(E) : e3 };
    }, [P, E]);
    L && (r2 = u.default.Children.only(t2));
    let K = L ? r2 && "object" == typeof r2 && r2.ref : U, B = u.default.useCallback((e3) => (null !== w && (b2.current = (0, p.mountLinkInstance)(e3, D, w, R, M, y2)), () => {
      b2.current && ((0, p.unmountLinkForCurrentNavigation)(b2.current), b2.current = null), (0, p.unmountPrefetchableInstance)(e3);
    }), [M, D, w, R, y2]), z = { ref: (0, c.useMergedRef)(B, K), onClick(e3) {
      L || "function" != typeof C || C(e3), L && r2.props && "function" == typeof r2.props.onClick && r2.props.onClick(e3), w && (e3.defaultPrevented || (function(e4, t3, r3, n3, o2, i3, a2) {
        let { nodeName: f2 } = e4.currentTarget;
        if (!("A" === f2.toUpperCase() && (function(e5) {
          let t4 = e5.currentTarget.getAttribute("target");
          return t4 && "_self" !== t4 || e5.metaKey || e5.ctrlKey || e5.shiftKey || e5.altKey || e5.nativeEvent && 2 === e5.nativeEvent.which;
        })(e4) || e4.currentTarget.hasAttribute("download"))) {
          if (!(0, d.isLocalURL)(t3)) {
            o2 && (e4.preventDefault(), location.replace(t3));
            return;
          }
          e4.preventDefault(), u.default.startTransition(() => {
            if (a2) {
              let e5 = false;
              if (a2({ preventDefault: () => {
                e5 = true;
              } }), e5) return;
            }
            (0, h.dispatchNavigateAction)(r3 || t3, o2 ? "replace" : "push", null == i3 || i3, n3.current);
          });
        }
      })(e3, D, F, b2, j, N, x));
    }, onMouseEnter(e3) {
      L || "function" != typeof S || S(e3), L && r2.props && "function" == typeof r2.props.onMouseEnter && r2.props.onMouseEnter(e3), w && M && (0, p.onNavigationIntent)(e3.currentTarget, true === I);
    }, onTouchStart: function(e3) {
      L || "function" != typeof A || A(e3), L && r2.props && "function" == typeof r2.props.onTouchStart && r2.props.onTouchStart(e3), w && M && (0, p.onNavigationIntent)(e3.currentTarget, true === I);
    } };
    return (0, s.isAbsoluteUrl)(F) ? z.href = F : L && !O && ("a" !== r2.type || "href" in r2.props) || (z.href = (0, l.addBasePath)(F)), n2 = L ? u.default.cloneElement(r2, z) : (0, o.jsx)("a", { ...k, ...z, children: t2 }), (0, o.jsx)(m.Provider, { value: i2, children: n2 });
  }
  r(8187);
  let m = (0, u.createContext)(p.IDLE_LINK_STATUS), b = () => (0, u.useContext)(m);
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", { value: true }), Object.assign(t.default, t), e.exports = t.default);
}, 2332: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), !(function(e2, t2) {
    for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  })(t, { formatUrl: function() {
    return u;
  }, formatWithValidation: function() {
    return a;
  }, urlObjectKeys: function() {
    return i;
  } });
  let n = r(6215)._(r(4228)), o = /https?|ftp|gopher|file/;
  function u(e2) {
    let { auth: t2, hostname: r2 } = e2, u2 = e2.protocol || "", i2 = e2.pathname || "", a2 = e2.hash || "", f = e2.query || "", c = false;
    t2 = t2 ? encodeURIComponent(t2).replace(/%3A/i, ":") + "@" : "", e2.host ? c = t2 + e2.host : r2 && (c = t2 + (~r2.indexOf(":") ? "[" + r2 + "]" : r2), e2.port && (c += ":" + e2.port)), f && "object" == typeof f && (f = String(n.urlQueryToSearchParams(f)));
    let s = e2.search || f && "?" + f || "";
    return u2 && !u2.endsWith(":") && (u2 += ":"), e2.slashes || (!u2 || o.test(u2)) && false !== c ? (c = "//" + (c || ""), i2 && "/" !== i2[0] && (i2 = "/" + i2)) : c || (c = ""), a2 && "#" !== a2[0] && (a2 = "#" + a2), s && "?" !== s[0] && (s = "?" + s), "" + u2 + c + (i2 = i2.replace(/[?#]/g, encodeURIComponent)) + (s = s.replace("#", "%23")) + a2;
  }
  let i = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];
  function a(e2) {
    return u(e2);
  }
}, 4228: (e, t) => {
  function r(e2) {
    let t2 = {};
    for (let [r2, n2] of e2.entries()) {
      let e3 = t2[r2];
      void 0 === e3 ? t2[r2] = n2 : Array.isArray(e3) ? e3.push(n2) : t2[r2] = [e3, n2];
    }
    return t2;
  }
  function n(e2) {
    return "string" == typeof e2 ? e2 : ("number" != typeof e2 || isNaN(e2)) && "boolean" != typeof e2 ? "" : String(e2);
  }
  function o(e2) {
    let t2 = new URLSearchParams();
    for (let [r2, o2] of Object.entries(e2)) if (Array.isArray(o2)) for (let e3 of o2) t2.append(r2, n(e3));
    else t2.set(r2, n(o2));
    return t2;
  }
  function u(e2) {
    for (var t2 = arguments.length, r2 = Array(t2 > 1 ? t2 - 1 : 0), n2 = 1; n2 < t2; n2++) r2[n2 - 1] = arguments[n2];
    for (let t3 of r2) {
      for (let r3 of t3.keys()) e2.delete(r3);
      for (let [r3, n3] of t3.entries()) e2.append(r3, n3);
    }
    return e2;
  }
  Object.defineProperty(t, "__esModule", { value: true }), !(function(e2, t2) {
    for (var r2 in t2) Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
  })(t, { assign: function() {
    return u;
  }, searchParamsToUrlQuery: function() {
    return r;
  }, urlQueryToSearchParams: function() {
    return o;
  } });
}, 4517: (e, t, r) => {
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "isLocalURL", { enumerable: true, get: function() {
    return u;
  } });
  let n = r(434), o = r(6840);
  function u(e2) {
    if (!(0, n.isAbsoluteUrl)(e2)) return true;
    try {
      let t2 = (0, n.getLocationOrigin)(), r2 = new URL(e2, t2);
      return r2.origin === t2 && (0, o.hasBasePath)(r2.pathname);
    } catch (e3) {
      return false;
    }
  }
}, 8187: (e, t) => {
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "errorOnce", { enumerable: true, get: function() {
    return r;
  } });
  let r = (e2) => {
  };
} }]);
