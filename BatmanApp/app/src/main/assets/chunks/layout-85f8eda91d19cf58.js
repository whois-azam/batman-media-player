if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
if(typeof queueMicrotask==='undefined'){window.queueMicrotask=function(cb){Promise.resolve().then(cb);};self.queueMicrotask=window.queueMicrotask;}
if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7177], { 634: (e) => {
  e.exports = { style: { fontFamily: "'Fraunces', 'Fraunces Fallback'" }, className: "__className_39f12c", variable: "__variable_39f12c" };
}, 955: (e, t, a) => {
  Promise.resolve().then(a.t.bind(a, 7559, 23)), Promise.resolve().then(a.bind(a, 9051)), Promise.resolve().then(a.bind(a, 8888)), Promise.resolve().then(a.bind(a, 6873)), Promise.resolve().then(a.t.bind(a, 6736, 23)), Promise.resolve().then(a.t.bind(a, 634, 23)), Promise.resolve().then(a.t.bind(a, 3416, 23)), Promise.resolve().then(a.t.bind(a, 6917, 23)), Promise.resolve().then(a.t.bind(a, 4882, 23)), Promise.resolve().then(a.t.bind(a, 6872, 23)), Promise.resolve().then(a.t.bind(a, 3558, 23)), Promise.resolve().then(a.t.bind(a, 6575, 23)), Promise.resolve().then(a.t.bind(a, 4613, 23));
}, 1107: (e, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), !(function(e2, t2) {
    for (var a2 in t2) Object.defineProperty(e2, a2, { enumerable: true, get: t2[a2] });
  })(t, { cancelIdleCallback: function() {
    return n;
  }, requestIdleCallback: function() {
    return a;
  } });
  let a = "undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e2) {
    let t2 = Date.now();
    return self.setTimeout(function() {
      e2({ didTimeout: false, timeRemaining: function() {
        return Math.max(0, 50 - (Date.now() - t2));
      } });
    }, 1);
  }, n = "undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e2) {
    return clearTimeout(e2);
  };
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", { value: true }), Object.assign(t.default, t), e.exports = t.default);
}, 3416: (e) => {
  e.exports = { style: { fontFamily: "'Nunito', 'Nunito Fallback'", fontStyle: "normal" }, className: "__className_4845c7", variable: "__variable_4845c7" };
}, 3558: (e) => {
  e.exports = { style: { fontFamily: "'Sora', 'Sora Fallback'", fontStyle: "normal" }, className: "__className_a28a92", variable: "__variable_a28a92" };
}, 4613: (e) => {
  e.exports = { style: { fontFamily: "'Plus Jakarta Sans', 'Plus Jakarta Sans Fallback'", fontStyle: "normal" }, className: "__className_3fe9e3", variable: "__variable_3fe9e3" };
}, 4882: (e) => {
  e.exports = { style: { fontFamily: "'Space Grotesk', 'Space Grotesk Fallback'", fontStyle: "normal" }, className: "__className_b6c08e", variable: "__variable_b6c08e" };
}, 5223: (e, t, a) => {
  "use strict";
  a.d(t, { A: () => i });
  var n = a(3928);
  a(756);
  var s = a(6873);
  function i(e2) {
    let { variant: t2 = "nav" } = e2, a2 = (0, s.Z)(), i2 = "wm wm-".concat(t2);
    switch (a2.id) {
      case "love":
        return (0, n.jsxs)("span", { className: "".concat(i2, " wm-love"), "aria-label": "Movies2Love", children: [(0, n.jsx)("span", { className: "wm-love-a", "aria-hidden": true, children: "movies" }), (0, n.jsx)("span", { className: "wm-love-heart", "aria-hidden": true, children: "\u2665" }), (0, n.jsx)("span", { className: "wm-love-b", "aria-hidden": true, children: "love" })] });
      case "phantom":
        return (0, n.jsxs)("span", { className: "".concat(i2, " wm-phantom"), "aria-label": "PhantomFlix", children: [(0, n.jsx)("span", { className: "wm-ph-a", "aria-hidden": true, children: "PHANTOM" }), (0, n.jsx)("span", { className: "wm-ph-b", "aria-hidden": true, children: "FLIX" })] });
      case "raven":
        return (0, n.jsxs)("span", { className: "".concat(i2, " wm-raven"), "aria-label": "RavenFlix", children: [(0, n.jsx)("svg", { className: "wm-rv-icon", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: (0, n.jsx)("path", { d: "M20.7 3.3c-4.9.4-8.6 2-11.2 4.6-2.4 2.4-3.9 5.6-4.6 9.4l-1.6 3.4c-.2.4 0 .8.4 1 .4.2.8 0 1-.4l1.5-3.2c3.8-.6 7-2.1 9.5-4.6 2.6-2.6 4.2-6.3 4.6-11.2 0-.4-.3-.7-.7-.7l1.1 1.7zm-1.5 1.5c-.5 3.9-1.9 6.9-4 9-2 2-4.6 3.3-7.7 3.9.6-3.1 1.9-5.7 3.9-7.7 2.1-2.1 5.1-3.5 9-4l-1.2-1.2z" }) }), (0, n.jsx)("span", { className: "wm-rv-a", "aria-hidden": true, children: "RAVEN" }), (0, n.jsx)("span", { className: "wm-rv-b", "aria-hidden": true, children: "FLIX" })] });
      case "shows":
        return (0, n.jsxs)("span", { className: "".concat(i2, " wm-shows"), "aria-label": "Shows.st", children: [(0, n.jsx)("span", { className: "wm-sh-play", "aria-hidden": true, children: (0, n.jsx)("svg", { viewBox: "0 0 24 24", fill: "currentColor", children: (0, n.jsx)("path", { d: "M8 5.5v13l11-6.5z" }) }) }), (0, n.jsx)("span", { className: "wm-sh-a", "aria-hidden": true, children: "SHOWS" }), (0, n.jsx)("span", { className: "wm-sh-b", "aria-hidden": true, children: ".st" })] });
      default:
        return (0, n.jsxs)("span", { className: "flex items-center gap-2", "aria-label": "67movies", children: [(0, n.jsx)("span", { className: "nav" === t2 ? "rounded-[5px] bg-white px-[7px] pb-[4px] pt-[3px] text-[14px] font-black leading-none tracking-tight text-black" : "rounded-[5px] bg-white px-[7px] pb-[4px] pt-[3px] text-[13px] font-black leading-none tracking-tight text-black", "aria-hidden": true, children: "67" }), (0, n.jsx)("span", { className: "nav" === t2 ? "text-[11.5px] font-semibold tracking-[0.24em] text-white/90" : "text-[11px] font-semibold tracking-[0.24em] text-white/80", "aria-hidden": true, children: "MOVIES" })] });
    }
  }
}, 5799: (e, t) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), Object.defineProperty(t, "setAttributesFromProps", { enumerable: true, get: function() {
    return i;
  } });
  let a = { acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv", noModule: "noModule" }, n = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];
  function s(e2) {
    return ["async", "defer", "noModule"].includes(e2);
  }
  function i(e2, t2) {
    for (let [i2, r] of Object.entries(t2)) {
      if (!t2.hasOwnProperty(i2) || n.includes(i2) || void 0 === r) continue;
      let o = a[i2] || i2.toLowerCase();
      "SCRIPT" === e2.tagName && s(o) ? e2[o] = !!r : e2.setAttribute(o, String(r)), (false === r || "SCRIPT" === e2.tagName && s(o) && (!r || "false" === r)) && (e2.setAttribute(o, ""), e2.removeAttribute(o));
    }
  }
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", { value: true }), Object.assign(t.default, t), e.exports = t.default);
}, 6267: (e, t, a) => {
  "use strict";
  a.d(t, { AR: () => m, Mj: () => n, d6: () => u, iH: () => h });
  let n = "sixseven:pwa-state", s = "pwaInstalled", i = null, r = false, o = false, l = false;
  function c() {
    window.dispatchEvent(new Event(n));
  }
  function d() {
    r = true;
    try {
      localStorage.setItem(s, "1");
    } catch (e2) {
    }
  }
  function m() {
    !l && (l = true, "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").catch(() => {
    }), window.addEventListener("beforeinstallprompt", (e2) => {
      e2.preventDefault(), i = e2, o = false, c();
    }), window.addEventListener("appinstalled", () => {
      i = null, d(), c();
    }), (window.matchMedia("(display-mode: standalone)").matches || navigator.standalone) && d());
  }
  function u() {
    if (i) return "promptable";
    let e2 = r;
    try {
      e2 = e2 || "1" === localStorage.getItem(s);
    } catch (e3) {
    }
    if (e2) return "installed";
    if (o) return "dismissed";
    let t2 = navigator.userAgent;
    return /iPhone|iPad|iPod/.test(t2) || /Macintosh/.test(t2) && navigator.maxTouchPoints > 1 ? "ios-guide" : "unavailable";
  }
  async function h() {
    let e2 = i;
    if (!e2) return false;
    i = null;
    try {
      e2.prompt();
      let t2 = await e2.userChoice, a2 = (null == t2 ? void 0 : t2.outcome) === "accepted";
      return a2 || (o = true), c(), a2;
    } catch (e3) {
      return o = true, c(), false;
    }
  }
}, 6575: (e) => {
  e.exports = { style: { fontFamily: "'Bricolage Grotesque', 'Bricolage Grotesque Fallback'", fontStyle: "normal" }, className: "__className_bc796d", variable: "__variable_bc796d" };
}, 6736: (e, t, a) => {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: true }), !(function(e2, t2) {
    for (var a2 in t2) Object.defineProperty(e2, a2, { enumerable: true, get: t2[a2] });
  })(t, { default: function() {
    return w;
  }, handleClientScriptLoad: function() {
    return v;
  }, initScriptLoader: function() {
    return p;
  } });
  let n = a(9582), s = a(6215), i = a(3928), r = n._(a(3221)), o = s._(a(756)), l = a(4595), c = a(5799), d = a(1107), m = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Set(), h = (e2) => {
    if (r.default.preinit) return void e2.forEach((e3) => {
      r.default.preinit(e3, { as: "style" });
    });
    {
      let t2 = document.head;
      e2.forEach((e3) => {
        let a2 = document.createElement("link");
        a2.type = "text/css", a2.rel = "stylesheet", a2.href = e3, t2.appendChild(a2);
      });
    }
  }, f = (e2) => {
    let { src: t2, id: a2, onLoad: n2 = () => {
    }, onReady: s2 = null, dangerouslySetInnerHTML: i2, children: r2 = "", strategy: o2 = "afterInteractive", onError: l2, stylesheets: d2 } = e2, f2 = a2 || t2;
    if (f2 && u.has(f2)) return;
    if (m.has(t2)) {
      u.add(f2), m.get(t2).then(n2, l2);
      return;
    }
    let v2 = () => {
      s2 && s2(), u.add(f2);
    }, p2 = document.createElement("script"), b2 = new Promise((e3, t3) => {
      p2.addEventListener("load", function(t4) {
        e3(), n2 && n2.call(this, t4), v2();
      }), p2.addEventListener("error", function(e4) {
        t3(e4);
      });
    }).catch(function(e3) {
      l2 && l2(e3);
    });
    i2 ? (p2.innerHTML = i2.__html || "", v2()) : r2 ? (p2.textContent = "string" == typeof r2 ? r2 : Array.isArray(r2) ? r2.join("") : "", v2()) : t2 && (p2.src = t2, m.set(t2, b2)), (0, c.setAttributesFromProps)(p2, e2), "worker" === o2 && p2.setAttribute("type", "text/partytown"), p2.setAttribute("data-nscript", o2), d2 && h(d2), document.body.appendChild(p2);
  };
  function v(e2) {
    let { strategy: t2 = "afterInteractive" } = e2;
    "lazyOnload" === t2 ? window.addEventListener("load", () => {
      (0, d.requestIdleCallback)(() => f(e2));
    }) : f(e2);
  }
  function p(e2) {
    e2.forEach(v), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach((e3) => {
      let t2 = e3.id || e3.getAttribute("src");
      u.add(t2);
    });
  }
  function b(e2) {
    let { id: t2, src: a2 = "", onLoad: n2 = () => {
    }, onReady: s2 = null, strategy: c2 = "afterInteractive", onError: m2, stylesheets: h2, ...v2 } = e2, { updateScripts: p2, scripts: b2, getIsSsr: w2, appDir: g, nonce: x } = (0, o.useContext)(l.HeadManagerContext), y = (0, o.useRef)(false);
    (0, o.useEffect)(() => {
      let e3 = t2 || a2;
      y.current || (s2 && e3 && u.has(e3) && s2(), y.current = true);
    }, [s2, t2, a2]);
    let _ = (0, o.useRef)(false);
    if ((0, o.useEffect)(() => {
      if (!_.current) {
        if ("afterInteractive" === c2) f(e2);
        else "lazyOnload" === c2 && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => f(e2)) : window.addEventListener("load", () => {
          (0, d.requestIdleCallback)(() => f(e2));
        }));
        _.current = true;
      }
    }, [e2, c2]), ("beforeInteractive" === c2 || "worker" === c2) && (p2 ? (b2[c2] = (b2[c2] || []).concat([{ id: t2, src: a2, onLoad: n2, onReady: s2, onError: m2, ...v2 }]), p2(b2)) : w2 && w2() ? u.add(t2 || a2) : w2 && !w2() && f(e2)), g) {
      if (h2 && h2.forEach((e3) => {
        r.default.preinit(e3, { as: "style" });
      }), "beforeInteractive" === c2) if (!a2) return v2.dangerouslySetInnerHTML && (v2.children = v2.dangerouslySetInnerHTML.__html, delete v2.dangerouslySetInnerHTML), (0, i.jsx)("script", { nonce: x, dangerouslySetInnerHTML: { __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...v2, id: t2 }]) + ")" } });
      else return r.default.preload(a2, v2.integrity ? { as: "script", integrity: v2.integrity, nonce: x, crossOrigin: v2.crossOrigin } : { as: "script", nonce: x, crossOrigin: v2.crossOrigin }), (0, i.jsx)("script", { nonce: x, dangerouslySetInnerHTML: { __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([a2, { ...v2, id: t2 }]) + ")" } });
      "afterInteractive" === c2 && a2 && r.default.preload(a2, v2.integrity ? { as: "script", integrity: v2.integrity, nonce: x, crossOrigin: v2.crossOrigin } : { as: "script", nonce: x, crossOrigin: v2.crossOrigin });
    }
    return null;
  }
  Object.defineProperty(b, "__nextScript", { value: true });
  let w = b;
  ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", { value: true }), Object.assign(t.default, t), e.exports = t.default);
}, 6872: (e) => {
  e.exports = { style: { fontFamily: "'Syne', 'Syne Fallback'", fontStyle: "normal" }, className: "__className_7f6805", variable: "__variable_7f6805" };
}, 6873: (e, t, a) => {
  "use strict";
  a.d(t, { SiteProvider: () => o, Z: () => l });
  var n = a(3928), s = a(756);
  let i = { classic: { id: "classic", domain: "67movies.net", name: "67movies", shortName: "67movies", tagline: "Movies and shows with a taste of their own.", titleDefault: "67movies.net \u2014 Watch Movies & TV Shows in HD Online", description: "Watch trending movies and TV shows in high quality on 67movies.net. Fast search, clean UI, and fresh daily picks across action, anime, drama, and more.", ogDescription: "Stream trending movies and TV shows on 67movies.net with a fast, modern interface and high-quality artwork.", keywords: ["67movies", "67movies.net", "stream movies online", "watch tv shows online", "hd movie streaming", "movies", "tv shows", "watch movies", "trending movies", "popular tv shows", "new releases", "top rated movies"], themeColor: "#0c0d11", backgroundColor: "#000000", defaultTab: "home", icon: "/icon.png", accent: "#ffffff" }, love: { id: "love", domain: "movies2love.com", name: "Movies2Love", shortName: "Movies2Love", tagline: "Find sites for movies and TV shows.", titleDefault: "Movies2Love \u2014 Find Streaming Sites for Movies & TV Shows", description: "A short, current list of streaming sites for movies and TV shows. Full catalogs, no signups, different styles. Bookmark the ones you like.", ogDescription: "Looking for a site to watch movies and TV shows? A short, current list of ones that work.", keywords: ["movies2love", "movies2love.com", "streaming sites", "free movie sites", "watch movies online", "watch tv shows online", "movie sites list", "where to watch movies"], themeColor: "#20060f", backgroundColor: "#16040a", defaultTab: "home", icon: "/sites/love/icon.svg?v=2", accent: "#ff9db8" }, phantom: { id: "phantom", domain: "phantomflix.net", name: "PhantomFlix", shortName: "PhantomFlix", tagline: "Streaming from the other side.", titleDefault: "PhantomFlix \u2014 Stream Movies & TV Shows in HD", description: "PhantomFlix streams trending movies and TV shows in HD with a fast, haunting interface. Horror, thrillers, sci-fi and every genre in between \u2014 if it exists, it appears.", ogDescription: "Streaming from the other side. Watch trending movies and TV shows in HD on PhantomFlix.", keywords: ["phantomflix", "phantomflix.net", "watch movies online", "stream tv shows online", "hd streaming", "horror movies online", "thriller movies", "trending movies", "popular tv shows"], themeColor: "#04070c", backgroundColor: "#02040a", defaultTab: "home", icon: "/sites/phantom/icon.svg", accent: "#8ceaf5" }, raven: { id: "raven", domain: "ravenflix.net", name: "RavenFlix", shortName: "RavenFlix", tagline: "Dark. Sleek. Cinematic.", titleDefault: "RavenFlix \u2014 Watch Movies & TV Shows in HD", description: "RavenFlix is the dark, sleek way to watch trending movies and TV shows in HD. A cinematic interface, fast search and fresh daily picks across every genre.", ogDescription: "Dark. Sleek. Cinematic. Stream trending movies and TV shows in HD on RavenFlix.", keywords: ["ravenflix", "ravenflix.net", "watch movies online", "stream tv shows online", "hd movie streaming", "cinematic streaming", "trending movies", "popular tv shows", "new releases"], themeColor: "#0b0712", backgroundColor: "#070510", defaultTab: "home", icon: "/sites/raven/icon.svg", accent: "#a78bfa" }, shows: { id: "shows", domain: "shows.st", name: "Shows", shortName: "Shows.st", tagline: "Every show. One place.", titleDefault: "Shows.st \u2014 Every TV Show, One Place, in HD", description: "Shows.st puts every trending TV show in one bright, fast place \u2014 plus the movies everyone is talking about. Jump straight into series, seasons and new episodes in HD.", ogDescription: "Every show. One place. Stream trending TV shows and movies in HD on Shows.st.", keywords: ["shows", "shows.st", "watch tv shows online", "stream series online", "tv show streaming", "new episodes online", "binge watch shows", "trending tv shows", "watch movies online"], themeColor: "#141414", backgroundColor: "#0b0b0b", defaultTab: "tv", icon: "/sites/shows/icon.svg?v=2", accent: "#e50914" } };
  Object.keys(i);
  let r = (0, s.createContext)(i.classic);
  function o(e2) {
    let { site: t2, children: a2 } = e2;
    return (0, n.jsx)(r.Provider, { value: t2, children: a2 });
  }
  function l() {
    return (0, s.useContext)(r);
  }
}, 6917: (e) => {
  e.exports = { style: { fontFamily: "'Chakra Petch', 'Chakra Petch Fallback'", fontStyle: "normal" }, className: "__className_28a0c0", variable: "__variable_28a0c0" };
}, 7559: () => {
}, 7958: (e, t, a) => {
  "use strict";
  var n = a(8970);
  a.o(n, "usePathname") && a.d(t, { usePathname: function() {
    return n.usePathname;
  } }), a.o(n, "useRouter") && a.d(t, { useRouter: function() {
    return n.useRouter;
  } });
}, 8888: (e, t, a) => {
  "use strict";
  a.d(t, { default: () => d });
  var n = a(3928), s = a(756), i = a(7958), r = a(6267), o = a(6873), l = a(5223);
  function c() {
    let e2 = (0, o.Z)(), t2 = (0, i.usePathname)();
    return "classic" === e2.id || (null == t2 ? void 0 : t2.startsWith("/watch")) ? null : (0, n.jsxs)("div", { className: "theme-backdrop", "aria-hidden": true, children: [(0, n.jsx)("i", { className: "tb tb-a" }), (0, n.jsx)("i", { className: "tb tb-b" }), (0, n.jsx)("i", { className: "tb tb-c" }), (0, n.jsx)("i", { className: "tb tb-d" }), (0, n.jsx)("i", { className: "tb tb-e" })] });
  }
  function d(e2) {
    let { children: t2 } = e2, a2 = (0, i.usePathname)(), d2 = null == a2 ? void 0 : a2.startsWith("/watch"), m = (0, o.Z)(), u = "/sites" === a2 || "love" === m.id;
    return (0, s.useEffect)(() => {
      (0, r.AR)();
    }, []), (0, n.jsxs)(n.Fragment, { children: [!u && (0, n.jsx)(c, {}), (0, n.jsx)("main", { className: "relative z-[1] flex-grow w-full overflow-hidden", children: t2 }), !d2 && !u && (0, n.jsx)("footer", { className: "relative z-[1] w-full border-t border-white/[0.06] py-10 pb-28 md:pb-10", children: (0, n.jsxs)("div", { className: "mx-auto max-w-7xl px-6", children: [(0, n.jsx)("div", { className: "flex flex-col gap-5 md:flex-row md:items-center md:justify-between", children: (0, n.jsx)(l.A, { variant: "footer" }) }), (0, n.jsxs)("p", { className: "mt-6 max-w-2xl text-[11.5px] leading-relaxed text-white/30", children: ["\xA9 2026 ", m.domain, " \u2014 this site does not host any streams; it links to content on third-party sites."] })] }) })] });
  }
} }, (e) => {
  var t = (t2) => e(e.s = t2);
  e.O(0, [6446, 6777, 9051, 5460, 7123, 7358], () => t(955)), _N_E = e.O();
}]);
