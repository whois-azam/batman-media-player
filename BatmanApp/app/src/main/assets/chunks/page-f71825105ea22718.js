if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
if(typeof queueMicrotask==='undefined'){window.queueMicrotask=function(cb){Promise.resolve().then(cb);};self.queueMicrotask=window.queueMicrotask;}
if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8974], { 1751: (e, t, a) => {
  "use strict";
  a.d(t, { A: () => s });
  var n = a(3928);
  function s() {
    return (0, n.jsxs)("div", { className: "fixed inset-0 z-[82]", children: [(0, n.jsx)("div", { className: "absolute inset-0 bg-black/60" }), (0, n.jsxs)("div", { className: "absolute inset-x-0 bottom-0 h-[96dvh] rounded-t-[22px] bg-[#0c0d11]", style: { animation: "sheetup 260ms cubic-bezier(0.22,1,0.36,1) both" }, children: [(0, n.jsx)("style", { children: "@keyframes sheetup { from { transform: translateY(48px); opacity: 0.4; } to { transform: none; opacity: 1; } }" }), (0, n.jsx)("span", { className: "mx-auto mt-2.5 block h-[5px] w-9 rounded-full bg-white/20" }), (0, n.jsx)("div", { className: "h-[38vh] w-full animate-pulse bg-white/[0.05]" }), (0, n.jsxs)("div", { className: "animate-pulse px-5 pt-5", children: [(0, n.jsx)("div", { className: "h-6 w-3/5 rounded bg-white/[0.08]" }), (0, n.jsx)("div", { className: "mt-3 h-3.5 w-2/5 rounded bg-white/[0.06]" }), (0, n.jsxs)("div", { className: "mt-5 flex gap-2.5", children: [(0, n.jsx)("div", { className: "h-12 flex-1 rounded-full bg-white/[0.08]" }), (0, n.jsx)("div", { className: "h-12 w-12 rounded-full bg-white/[0.06]" })] }), (0, n.jsxs)("div", { className: "mt-5 space-y-2.5", children: [(0, n.jsx)("div", { className: "h-3 w-full rounded bg-white/[0.05]" }), (0, n.jsx)("div", { className: "h-3 w-[92%] rounded bg-white/[0.05]" }), (0, n.jsx)("div", { className: "h-3 w-[70%] rounded bg-white/[0.05]" })] })] })] })] });
  }
  a(756);
}, 3246: (e, t, a) => {
  "use strict";
  a.d(t, { RE: () => l, cl: () => o, vJ: () => n, xZ: () => r });
  let n = 1e4, s = 0, i = false;
  function l(e2) {
    (s += 1) >= 3 && (i = true);
    try {
      (window.__heroTrailerErrors = window.__heroTrailerErrors || []).push(e2);
    } catch (e3) {
    }
    return i;
  }
  function r() {
    s = 0;
  }
  function o() {
    return i;
  }
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
}, 5914: (e, t, a) => {
  "use strict";
  a.d(t, { A: () => s });
  var n = a(3928);
  function s(e2) {
    let { progress: t2 = 0, size: a2 = 48 } = e2, s2 = a2 + 8, i = s2 / 2, l = a2 / 2 + 1.5, r = 2 * Math.PI * l, o = Math.max(0, Math.min(1, t2)), c = t2 <= 0;
    return (0, n.jsxs)("svg", { className: "pointer-events-none absolute drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)] ".concat(c ? "animate-spin" : ""), width: s2, height: s2, viewBox: "0 0 ".concat(s2, " ").concat(s2), style: { top: "50%", left: "50%", marginTop: -(s2 / 2), marginLeft: -(s2 / 2), ...c ? {} : { transform: "rotate(-90deg)" } }, children: [(0, n.jsx)("circle", { cx: i, cy: i, r: l, fill: "none", stroke: "rgba(255,255,255,0.18)", strokeWidth: "2" }), c ? (0, n.jsx)("circle", { cx: i, cy: i, r: l, fill: "none", stroke: "rgba(255,255,255,0.95)", strokeWidth: "2.25", strokeLinecap: "round", strokeDasharray: "".concat((0.18 * r).toFixed(2), " ").concat((0.82 * r).toFixed(2)) }) : (0, n.jsx)("circle", { cx: i, cy: i, r: l, fill: "none", stroke: "rgba(255,255,255,0.95)", strokeWidth: "2.25", strokeLinecap: "round", strokeDasharray: r.toFixed(2), strokeDashoffset: r * (1 - o), style: { transition: "stroke-dashoffset 0.25s linear" } })] });
  }
  a(756);
}, 6267: (e, t, a) => {
  "use strict";
  a.d(t, { AR: () => h, Mj: () => n, d6: () => u, iH: () => m });
  let n = "sixseven:pwa-state", s = "pwaInstalled", i = null, l = false, r = false, o = false;
  function c() {
    window.dispatchEvent(new Event(n));
  }
  function d() {
    l = true;
    try {
      localStorage.setItem(s, "1");
    } catch (e2) {
    }
  }
  function h() {
    !o && (o = true, "serviceWorker" in navigator && navigator.serviceWorker.register("/sw.js").catch(() => {
    }), window.addEventListener("beforeinstallprompt", (e2) => {
      e2.preventDefault(), i = e2, r = false, c();
    }), window.addEventListener("appinstalled", () => {
      i = null, d(), c();
    }), (window.matchMedia("(display-mode: standalone)").matches || navigator.standalone) && d());
  }
  function u() {
    if (i) return "promptable";
    let e2 = l;
    try {
      e2 = e2 || "1" === localStorage.getItem(s);
    } catch (e3) {
    }
    if (e2) return "installed";
    if (r) return "dismissed";
    let t2 = navigator.userAgent;
    return /iPhone|iPad|iPod/.test(t2) || /Macintosh/.test(t2) && navigator.maxTouchPoints > 1 ? "ios-guide" : "unavailable";
  }
  async function m() {
    let e2 = i;
    if (!e2) return false;
    i = null;
    try {
      e2.prompt();
      let t2 = await e2.userChoice, a2 = (null == t2 ? void 0 : t2.outcome) === "accepted";
      return a2 || (r = true), c(), a2;
    } catch (e3) {
      return r = true, c(), false;
    }
  }
}, 6849: (e, t, a) => {
  "use strict";
  a.d(t, { A: () => g });
  var n = a(3928), s = a(756), i = a(9319), l = a(3637), r = a(6006), o = a(1530), c = a(338), d = a(3221), h = a(7958), u = a(2500), m = a(3026), p = a(6873);
  function x(e2) {
    let { item: t2, onClose: a2, onDetails: i2 } = e2, l2 = (0, p.Z)(), r2 = (0, h.useRouter)(), [, c2] = s.useState(0);
    (0, s.useEffect)(() => {
      let e3 = () => c2((e4) => e4 + 1);
      return window.addEventListener(o.aQ, e3), () => window.removeEventListener(o.aQ, e3);
    }, []), (0, s.useEffect)(() => ((0, m.jz)(), () => (0, m.yq)()), []);
    let x2 = t2.title || t2.name || "", f2 = (0, o.Gs)(t2), g2 = async () => {
      let e3 = "".concat(location.origin, "/details/").concat(t2.type, "/").concat(t2.id);
      try {
        navigator.share ? await navigator.share({ title: "".concat(x2, " \u2014 ").concat(l2.name), url: e3 }) : await navigator.clipboard.writeText(e3);
      } catch (e4) {
      }
      a2();
    }, w = "flex min-h-[52px] w-full items-center gap-3.5 rounded-xl px-3 text-left text-[14px] font-medium text-white/85 active:bg-white/[0.06]", b = "h-4 w-4 text-white/50";
    return (0, d.createPortal)((0, n.jsxs)("div", { className: "fixed inset-0 z-[95]", children: [(0, n.jsx)("button", { className: "absolute inset-0 bg-black/60", onClick: a2, "aria-label": "Close" }), (0, n.jsxs)("div", { className: "absolute inset-x-0 bottom-0 rounded-t-[22px] border-t border-white/[0.08] bg-[#0c0d11] pb-[max(14px,env(safe-area-inset-bottom))] sheet-shell", style: { animation: "qasheet 240ms cubic-bezier(0.22,1,0.36,1) both" }, children: [(0, n.jsx)("style", { children: "@keyframes qasheet { from { transform: translateY(40px); opacity: 0.5; } to { transform: none; opacity: 1; } }" }), (0, n.jsx)("span", { className: "mx-auto mt-2 block h-[5px] w-9 rounded-full bg-white/20 sheet-handle", "aria-hidden": true }), (0, n.jsxs)("div", { className: "flex items-center gap-3.5 px-5 pb-2 pt-3.5", children: [(0, n.jsx)("span", { className: "block h-[46px] w-[82px] flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-white/[0.08]", children: (t2.backdrop_path || t2.poster_path) && (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w300".concat(t2.backdrop_path || t2.poster_path), alt: "", className: "h-full w-full object-cover" }) }), (0, n.jsxs)("span", { className: "min-w-0", children: [(0, n.jsx)("span", { className: "block truncate text-[15px] font-semibold text-white", children: x2 }), (0, n.jsx)("span", { className: "block text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/30", children: "tv" === t2.type ? "Series" : "Movie" })] })] }), (0, n.jsxs)("div", { className: "px-2 pb-1", children: [(0, n.jsxs)("button", { className: w, onClick: () => {
      r2.push("tv" === t2.type ? "/watch/tv/".concat(t2.id, "/1/1") : "/watch/movie/".concat(t2.id)), a2();
    }, children: [(0, n.jsx)(u.gSK, { className: b }), " Play now"] }), (0, n.jsx)("div", { className: "mx-3 h-px bg-white/[0.07]", "aria-hidden": true }), (0, n.jsxs)("button", { className: w, onClick: () => {
      var e3, a3, n2;
      return (0, o.Cq)({ id: t2.id, type: t2.type, title: x2, poster_path: null != (e3 = t2.poster_path) ? e3 : null, backdrop_path: null != (a3 = t2.backdrop_path) ? a3 : null, logo_path: null != (n2 = t2.logo_path) ? n2 : null });
    }, children: [f2 ? (0, n.jsx)(u.CMH, { className: b }) : (0, n.jsx)(u.OiG, { className: b }), f2 ? "In My List" : "Add to My List"] }), (0, n.jsx)("div", { className: "mx-3 h-px bg-white/[0.07]", "aria-hidden": true }), (0, n.jsxs)("button", { className: w, onClick: g2, children: [(0, n.jsx)(u.eb3, { className: b }), " Share"] }), (0, n.jsx)("div", { className: "mx-3 h-px bg-white/[0.07]", "aria-hidden": true }), (0, n.jsxs)("button", { className: w, onClick: () => {
      a2(), i2(t2);
    }, children: [(0, n.jsx)(u.__w, { className: b }), " Details"] })] })] })] }), document.body);
  }
  let f = (0, i.default)(() => a.e(4445).then(a.bind(a, 4445)), { loadableGenerated: { webpack: () => [4445] }, ssr: false, loading: () => null }), g = s.memo(function(e2) {
    let { title: t2, subtitle: a2, action: i2, items: d2, noPadding: h2 = false, captionLogoless: m2 = false, onSelect: p2 } = e2, g2 = (0, s.useRef)(null), [w, b] = (0, s.useState)(null), [v, y] = (0, s.useState)(null), [j, N] = (0, s.useState)(true), [k, S] = (0, s.useState)(false), [, _] = (0, s.useState)(0);
    (0, s.useEffect)(() => {
      (0, o.OJ)();
      let e3 = () => _((e4) => e4 + 1);
      return window.addEventListener(o.aQ, e3), () => window.removeEventListener(o.aQ, e3);
    }, []);
    let { setAmbience: C } = (0, r.k)(), E = (0, s.useRef)(null), T = (0, s.useRef)(null), M = (0, s.useRef)(null), A = (0, s.useRef)({}), [P, L] = (0, s.useState)({}), [z, I] = (0, s.useState)(true);
    (0, s.useEffect)(() => {
      let e3 = window.matchMedia("(hover: hover)"), t3 = () => I(e3.matches);
      return t3(), e3.addEventListener("change", t3), () => e3.removeEventListener("change", t3);
    }, []);
    let D = z && !m2 ? d2.filter((e3) => !!e3.logo_path) : d2, [O, F] = (0, s.useState)(null), R = (0, s.useRef)(null), H = (0, s.useRef)(null), W = (0, s.useRef)(false), q = (e3) => (t3) => {
      let a3 = t3.touches[0];
      H.current = { x: a3.clientX, y: a3.clientY }, W.current = false, R.current = setTimeout(() => {
        W.current = true;
        try {
          var t4, a4;
          null == (t4 = (a4 = navigator).vibrate) || t4.call(a4, 12);
        } catch (e4) {
        }
        F(e3);
      }, 420);
    }, J = (e3) => {
      let t3 = H.current;
      if (!t3 || !R.current) return;
      let a3 = e3.touches[0];
      (Math.abs(a3.clientX - t3.x) > 10 || Math.abs(a3.clientY - t3.y) > 10) && U();
    }, U = () => {
      R.current && clearTimeout(R.current), R.current = null, H.current = null;
    }, V = () => {
      if (W.current) {
        W.current = false;
        let e3 = (e4) => {
          e4.preventDefault(), e4.stopPropagation(), t3();
        }, t3 = () => document.removeEventListener("click", e3, true);
        document.addEventListener("click", e3, true), setTimeout(t3, 700);
      }
      U();
    }, Y = (e3) => {
      if (!g2.current) return;
      let { clientWidth: t3, scrollLeft: a3 } = g2.current;
      g2.current.scrollTo({ left: "left" === e3 ? a3 - t3 : a3 + t3, behavior: "smooth" });
    }, B = async (e3, t3) => {
      try {
        var a3;
        let n2 = await fetch("https://api.themoviedb.org/3/".concat(t3, "/").concat(e3, "/videos?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1", "&language=en-US")), { results: s2 } = await n2.json(), i3 = s2.find((e4) => "Trailer" === e4.type && "YouTube" === e4.site);
        y(null != (a3 = null == i3 ? void 0 : i3.key) ? a3 : null);
      } catch (e4) {
        y(null);
      }
    }, K = (e3, t3) => {
      E.current = setTimeout(() => {
        (0, c.sb)().cardTrailers && (b(e3), B(e3, t3));
      }, 120), T.current = setTimeout(() => {
        let a3 = d2.find((a4) => a4.id === e3 && a4.type === t3), n2 = (null == a3 ? void 0 : a3.backdrop_path) || (null == a3 ? void 0 : a3.poster_path);
        n2 && C(n2);
      }, 900);
    }, G = () => {
      E.current && clearTimeout(E.current), T.current && clearTimeout(T.current), M.current && clearInterval(M.current), b(null), y(null), N(true), S(false), C(null);
    };
    (0, s.useEffect)(() => () => C(null), [C]);
    let X = (e3) => (t3) => {
      let a3 = t3.target;
      A.current[e3] = a3, a3.setVolume(100), a3.mute(), N(true), a3.playVideo();
    }, Q = (e3) => {
      if (1 !== e3.data) return;
      N(e3.target.isMuted()), M.current && clearInterval(M.current);
      let t3 = Date.now();
      M.current = setInterval(() => {
        let a3 = e3.target.getCurrentTime ? e3.target.getCurrentTime() : 0;
        (a3 > 4 || Date.now() - t3 > 2e4) && (M.current && clearInterval(M.current), a3 > 1 && S(true));
      }, 400);
    }, Z = (e3) => {
      if (e3.stopPropagation(), null == w) return;
      let t3 = A.current[w];
      t3 && (t3.isMuted() ? (t3.unMute(), N(false)) : (t3.mute(), N(true)));
    };
    return (0, n.jsxs)("section", { className: "relative z-10 rail-section rail-slider ".concat(h2 ? "" : "rail-padded pt-6 pb-2 md:pt-5 md:pb-3"), children: [(0, n.jsxs)("div", { className: "flex items-center justify-between px-4 md:px-0 rail-head ".concat(a2 ? "mb-1" : "mb-2.5 md:mb-3"), children: [(0, n.jsx)("h3", { className: "text-base font-bold md:text-lg rail-heading", children: t2 }), i2] }), a2 && (0, n.jsx)("p", { className: "mb-2.5 px-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30 md:mb-3 md:px-0 rail-subtitle", children: a2 }), (0, n.jsx)("style", { children: "\n        @keyframes cardPieFill { to { stroke-dashoffset: 1.9; } }\n        .card-pie { animation: cardPieFill 4.6s linear forwards; }\n        @media (prefers-reduced-motion: reduce) { .card-pie { animation: none; stroke-dashoffset: 1.9; } }\n      " }), (0, n.jsxs)("div", { className: "relative overflow-visible", children: [(0, n.jsx)("button", { onClick: () => Y("left"), className: "hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10 hover:bg-white/20 transition rail-chevron", children: (0, n.jsx)(u._Jj, { className: "h-4 w-4" }) }), (0, n.jsx)("button", { onClick: () => Y("right"), className: "hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10 hover:bg-white/20 transition rail-chevron", children: (0, n.jsx)(u.X6T, { className: "h-4 w-4" }) }), (0, n.jsx)("div", { ref: g2, className: "no-scrollbar flex gap-2.5 md:gap-4 overflow-x-auto overflow-y-visible h-auto pl-4 pr-4 md:pl-0 md:pr-4 scroll-smooth snap-x snap-mandatory scroll-pl-4 md:snap-none md:scroll-pl-0 rail-scroller", style: { scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }, children: D.map((e3) => {
      let t3 = w === e3.id && !!v, a3 = "https://image.tmdb.org/t/p/w780".concat(e3.backdrop_path || e3.poster_path), s2 = (e3.release_date || e3.first_air_date || "").slice(0, 4), i3 = Date.parse(e3.release_date || e3.first_air_date || ""), r2 = Number.isFinite(i3) ? Math.ceil((i3 - Date.now()) / 864e5) : 0, c2 = r2 > 0 ? r2 > 99 ? "In ".concat(Math.round(r2 / 30), "mo") : "In ".concat(r2, "d") : null;
      return (0, n.jsxs)("div", { className: "w-[56vw] flex-shrink-0 snap-start sm:w-64 md:w-[375px] cursor-pointer rail-card ".concat(z ? "" : "select-none"), style: z ? void 0 : { WebkitTouchCallout: "none", WebkitUserSelect: "none" }, onMouseEnter: z ? () => K(e3.id, e3.type) : void 0, onMouseLeave: z ? G : void 0, onTouchStart: z ? void 0 : q(e3), onTouchMove: z ? void 0 : J, onTouchEnd: z ? void 0 : V, onTouchCancel: z ? void 0 : U, onContextMenu: z ? void 0 : (e4) => e4.preventDefault(), onClick: () => null == p2 ? void 0 : p2(e3), children: [(0, n.jsxs)("div", { className: "\n                    group relative w-full overflow-hidden\n                    ring-1 ring-white/[0.07]\n                    aspect-video sm:h-40 md:h-[210px]\n                    rounded-lg md:rounded-xl\n                    transition-transform duration-150 active:scale-[0.98] md:active:scale-100\n                    rail-card-art\n                  ", children: [e3.badge && (0, n.jsx)("span", { className: "absolute left-2 top-2 z-10 rounded-full bg-white px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] text-black shadow-[0_4px_14px_rgba(0,0,0,0.35)]", children: e3.badge }), !(t3 && k) && c2 && (0, n.jsx)("span", { className: "absolute bottom-2 left-2 z-10 rounded-full bg-white px-2 py-0.5 text-[10.5px] font-semibold text-black", children: c2 }), !(t3 && k) && (0, n.jsx)("span", { role: "button", "aria-label": (0, o.Gs)(e3) ? "Remove from My List" : "Add to My List", onClick: (t4) => {
        var a4, n2, s3;
        t4.stopPropagation(), (0, o.Cq)({ id: e3.id, type: e3.type, title: e3.title || e3.name, poster_path: null != (a4 = e3.poster_path) ? a4 : null, backdrop_path: null != (n2 = e3.backdrop_path) ? n2 : null, logo_path: null != (s3 = e3.logo_path) ? s3 : null });
      }, className: "absolute right-1.5 top-1.5 z-20 flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition duration-200 md:right-2 md:top-2 md:h-8 md:w-8 ".concat((0, o.Gs)(e3) ? "bg-black/55 text-white/90 ring-1 ring-white/[0.4]" : "bg-black/55 text-white/70 opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:bg-black/75 hover:text-white"), children: (0, o.Gs)(e3) ? (0, n.jsx)(u.CMH, { className: "h-[10px] w-[10px]" }) : (0, n.jsx)(u.OiG, { className: "h-[11px] w-[11px]" }) }), (0, n.jsxs)("div", { className: "w-full h-full overflow-hidden rounded-lg md:rounded-xl", children: [(0, n.jsx)(l.default, { src: P[e3.id] ? "/fallback.png" : a3, alt: e3.title || e3.name || "", width: 780, height: 439, onError: () => L((t4) => ({ ...t4, [e3.id]: true })), className: "object-cover w-full h-full rounded-lg md:rounded-xl transition-transform duration-300 group-hover:scale-105", loading: "lazy" }), t3 && (0, n.jsx)("div", { className: "absolute inset-0 rounded-lg md:rounded-xl overflow-hidden transition-opacity duration-700", style: { opacity: +!!k, pointerEvents: "none" }, children: (0, n.jsx)("div", { className: "w-full h-full", style: { transform: "scale(1.75)", transformOrigin: "center", pointerEvents: "none" }, children: (0, n.jsx)(f, { videoId: v, opts: { width: "100%", height: "100%", playerVars: { autoplay: 1, mute: 1, controls: 0, modestbranding: 1, rel: 0, disablekb: 1, iv_load_policy: 3, playsinline: 1, fs: 0 } }, onReady: X(e3.id), onStateChange: Q, className: "w-full h-full", style: { pointerEvents: "none" } }) }) })] }), t3 && k && (0, n.jsx)("button", { onClick: Z, className: "absolute bottom-2 right-2 z-20 p-1 rounded-full bg-white/20 backdrop-blur-md transition", children: j ? (0, n.jsx)(u.FZ2, { className: "w-4 h-4 text-white" }) : (0, n.jsx)(u.pPd, { className: "w-4 h-4 text-white" }) }), w === e3.id && !k && (0, n.jsx)("div", { className: "pointer-events-none absolute bottom-2 right-2 z-30 rounded-full backdrop-blur-md", style: { background: "rgba(0,0,0,0.28)", padding: 3 }, children: (0, n.jsxs)("svg", { width: "15", height: "15", viewBox: "0 0 16 16", style: { transform: "rotate(-90deg)", display: "block" }, children: [(0, n.jsx)("circle", { cx: "8", cy: "8", r: "6", fill: "rgba(255,255,255,0.18)" }), (0, n.jsx)("circle", { className: "card-pie", cx: "8", cy: "8", r: "3", fill: "none", stroke: "#fff", strokeWidth: "6", strokeDasharray: "18.85", strokeDashoffset: "18.85" })] }) }), e3.logo_path && z && (0, n.jsx)("div", { className: "\n                      absolute top-1/2 right-1.5 md:right-2 transform -translate-y-1/2\n                      w-16 h-8\n                      sm:w-28 sm:h-14\n                      md:w-32 md:h-16\n                      flex items-center justify-center pointer-events-none z-10\n                    ", children: (0, n.jsx)("div", { className: "relative w-full h-full", children: (0, n.jsx)(l.default, { src: "https://image.tmdb.org/t/p/w500".concat(e3.logo_path), alt: "logo", fill: true, sizes: "128px", className: "object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]", onError: (e4) => {
        e4.target.style.display = "none";
      } }) }) })] }), (!z || m2 && !e3.logo_path) && (0, n.jsxs)("div", { className: "mt-2 rail-caption", children: [(0, n.jsx)("p", { className: "truncate text-[12.5px] font-medium text-white/90", children: e3.title || e3.name }), (s2 || c2) && (0, n.jsx)("p", { className: "mt-0.5 text-[10px] uppercase tracking-[0.08em] text-white/35", children: c2 ? "".concat(s2 ? "".concat(s2, " \xB7 ") : "").concat(c2) : s2 })] })] }, "".concat(e3.type, "-").concat(e3.id));
    }) })] }), O && (0, n.jsx)(x, { item: O, onClose: () => F(null), onDetails: (e3) => null == p2 ? void 0 : p2(e3) })] });
  });
}, 6873: (e, t, a) => {
  "use strict";
  a.d(t, { SiteProvider: () => r, Z: () => o });
  var n = a(3928), s = a(756);
  let i = { classic: { id: "classic", domain: "67movies.net", name: "67movies", shortName: "67movies", tagline: "Movies and shows with a taste of their own.", titleDefault: "67movies.net \u2014 Watch Movies & TV Shows in HD Online", description: "Watch trending movies and TV shows in high quality on 67movies.net. Fast search, clean UI, and fresh daily picks across action, anime, drama, and more.", ogDescription: "Stream trending movies and TV shows on 67movies.net with a fast, modern interface and high-quality artwork.", keywords: ["67movies", "67movies.net", "stream movies online", "watch tv shows online", "hd movie streaming", "movies", "tv shows", "watch movies", "trending movies", "popular tv shows", "new releases", "top rated movies"], themeColor: "#0c0d11", backgroundColor: "#000000", defaultTab: "home", icon: "/icon.png", accent: "#ffffff" }, love: { id: "love", domain: "movies2love.com", name: "Movies2Love", shortName: "Movies2Love", tagline: "Find sites for movies and TV shows.", titleDefault: "Movies2Love \u2014 Find Streaming Sites for Movies & TV Shows", description: "A short, current list of streaming sites for movies and TV shows. Full catalogs, no signups, different styles. Bookmark the ones you like.", ogDescription: "Looking for a site to watch movies and TV shows? A short, current list of ones that work.", keywords: ["movies2love", "movies2love.com", "streaming sites", "free movie sites", "watch movies online", "watch tv shows online", "movie sites list", "where to watch movies"], themeColor: "#20060f", backgroundColor: "#16040a", defaultTab: "home", icon: "/sites/love/icon.svg?v=2", accent: "#ff9db8" }, phantom: { id: "phantom", domain: "phantomflix.net", name: "PhantomFlix", shortName: "PhantomFlix", tagline: "Streaming from the other side.", titleDefault: "PhantomFlix \u2014 Stream Movies & TV Shows in HD", description: "PhantomFlix streams trending movies and TV shows in HD with a fast, haunting interface. Horror, thrillers, sci-fi and every genre in between \u2014 if it exists, it appears.", ogDescription: "Streaming from the other side. Watch trending movies and TV shows in HD on PhantomFlix.", keywords: ["phantomflix", "phantomflix.net", "watch movies online", "stream tv shows online", "hd streaming", "horror movies online", "thriller movies", "trending movies", "popular tv shows"], themeColor: "#04070c", backgroundColor: "#02040a", defaultTab: "home", icon: "/sites/phantom/icon.svg", accent: "#8ceaf5" }, raven: { id: "raven", domain: "ravenflix.net", name: "RavenFlix", shortName: "RavenFlix", tagline: "Dark. Sleek. Cinematic.", titleDefault: "RavenFlix \u2014 Watch Movies & TV Shows in HD", description: "RavenFlix is the dark, sleek way to watch trending movies and TV shows in HD. A cinematic interface, fast search and fresh daily picks across every genre.", ogDescription: "Dark. Sleek. Cinematic. Stream trending movies and TV shows in HD on RavenFlix.", keywords: ["ravenflix", "ravenflix.net", "watch movies online", "stream tv shows online", "hd movie streaming", "cinematic streaming", "trending movies", "popular tv shows", "new releases"], themeColor: "#0b0712", backgroundColor: "#070510", defaultTab: "home", icon: "/sites/raven/icon.svg", accent: "#a78bfa" }, shows: { id: "shows", domain: "shows.st", name: "Shows", shortName: "Shows.st", tagline: "Every show. One place.", titleDefault: "Shows.st \u2014 Every TV Show, One Place, in HD", description: "Shows.st puts every trending TV show in one bright, fast place \u2014 plus the movies everyone is talking about. Jump straight into series, seasons and new episodes in HD.", ogDescription: "Every show. One place. Stream trending TV shows and movies in HD on Shows.st.", keywords: ["shows", "shows.st", "watch tv shows online", "stream series online", "tv show streaming", "new episodes online", "binge watch shows", "trending tv shows", "watch movies online"], themeColor: "#141414", backgroundColor: "#0b0b0b", defaultTab: "tv", icon: "/sites/shows/icon.svg?v=2", accent: "#e50914" } };
  Object.keys(i);
  let l = (0, s.createContext)(i.classic);
  function r(e2) {
    let { site: t2, children: a2 } = e2;
    return (0, n.jsx)(l.Provider, { value: t2, children: a2 });
  }
  function o() {
    return (0, s.useContext)(l);
  }
}, 8238: (e, t, a) => {
  "use strict";
  a.d(t, { default: () => tJ });
  var n = a(3928), s = a(756), i = a(9319), l = a(3246), r = a(3637), o = a(338), c = a(1765), d = a.n(c), h = a(4213), u = a(6077), m = a(2500), p = a(6849);
  let x = "a46c50a0ccb1bafe2b15665df7fad7e1";
  function f(e10) {
    let { onSelect: t2 } = e10, [a2, i2] = (0, s.useState)([]), [l2, c2] = (0, s.useState)({}), [d2, h2] = (0, s.useState)(false), [u2, p2] = (0, s.useState)("idle"), [f2, g2] = (0, s.useState)({}), [w2, b2] = (0, s.useState)({}), [v2, y2] = (0, s.useState)("none"), [j2, N2] = (0, s.useState)(null), [k2, S2] = (0, s.useState)(null), [_2, C2] = (0, s.useState)(false), [E2, T2] = (0, s.useState)("idle"), M2 = (0, s.useRef)(null), A2 = (0, o.t0)();
    async function P2(e11) {
      let t3 = "".concat(e11.type, "-").concat(e11.id), a3 = Object.fromEntries(Object.entries(w2).filter((e12) => {
        let [a4] = e12;
        return !a4.startsWith(t3);
      }));
      if (localStorage.setItem("continueWatching", JSON.stringify(a3)), localStorage.setItem("__cw_lastUpdate", JSON.stringify(Date.now())), b2(a3), window.dispatchEvent(new Event("cw-updated")), d2) try {
        await fetch("/api/progress/delete", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: e11.id, type: e11.type }) });
      } catch (e12) {
      }
    }
    function L2() {
      p2("loading");
      let e11 = {}, t3 = null;
      try {
        e11 = JSON.parse(localStorage.getItem("continueWatching") || "{}"), t3 = JSON.parse(localStorage.getItem("__cw_lastUpdate") || "null");
      } catch (e12) {
      }
      b2(e11), S2(t3), d2 ? fetch("/api/progress/get", { credentials: "include" }).then(async (t4) => {
        let a3 = {}, n2 = null;
        if (t4.ok) {
          let e12 = await t4.json();
          a3 = e12.progress || {}, n2 = e12.updatedAt ? new Date(e12.updatedAt).getTime() : null;
        }
        g2(a3), N2(n2);
        let s2 = Object.keys(e11).length, i3 = Object.keys(a3).length;
        !s2 && i3 ? y2("cloudOnly") : s2 && !i3 ? y2("localOnly") : s2 && i3 && !(function(e12, t5) {
          let a4 = Object.keys(e12), n3 = Object.keys(t5);
          if (a4.length !== n3.length) return false;
          for (let n4 of a4) if (JSON.stringify(e12[n4]) !== JSON.stringify(t5[n4])) return false;
          return true;
        })(e11, a3) ? y2("merge") : y2("none"), p2("idle");
      }).catch(() => {
        g2({}), y2(Object.keys(e11).length ? "localOnly" : "none"), p2("idle");
      }) : (g2({}), y2(Object.keys(e11).length ? "localOnly" : "none"), p2("idle"));
    }
    async function z2() {
      C2(true), T2("clearing");
      try {
        if (localStorage.setItem("continueWatching", "{}"), localStorage.setItem("__cw_lastUpdate", JSON.stringify(Date.now())), b2({}), window.dispatchEvent(new Event("cw-updated")), d2 && !(await fetch("/api/progress/clear", { method: "POST", credentials: "include" })).ok) throw Error("Failed cloud clear");
        T2("success"), setTimeout(() => {
          C2(false), T2("idle"), L2();
        }, 700);
      } catch (e11) {
        T2("error"), setTimeout(() => {
          C2(false), T2("idle");
        }, 1e3);
      }
    }
    function I2(e11) {
      return e11 ? new Date(e11).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) : "";
    }
    (0, s.useEffect)(() => {
      fetch("/api/profile").then((e11) => h2(401 !== e11.status)).catch(() => h2(false));
    }, []), (0, s.useEffect)(() => {
      let e11 = () => L2();
      return window.addEventListener("cw-updated", e11), window.addEventListener("storage", e11), () => {
        window.removeEventListener("cw-updated", e11), window.removeEventListener("storage", e11);
      };
    }, [d2]), (0, s.useEffect)(() => {
      L2();
    }, [d2]), (0, s.useEffect)(() => {
      let e11 = Object.values(w2);
      i2(e11);
      let t3 = {};
      Promise.all(e11.map(async (e12) => {
        try {
          let a3 = "movie" === e12.type ? "https://api.themoviedb.org/3/movie/".concat(e12.id, "?api_key=").concat(x) : "https://api.themoviedb.org/3/tv/".concat(e12.id, "?api_key=").concat(x), n2 = await fetch(a3), s2 = await n2.json();
          (s2.title && "Unknown" !== s2.title || s2.name && "Unknown" !== s2.name) && (t3["".concat(e12.type, "-").concat(e12.id)] = { id: e12.id, title: s2.title || s2.name, name: s2.name, poster_path: s2.poster_path, backdrop_path: s2.backdrop_path });
        } catch (e13) {
        }
      })).then(() => c2(t3));
    }, [w2]);
    let D2 = "loading" === u2 && 0 === a2.length, O2 = a2.filter((e11) => {
      let t3 = l2["".concat(e11.type, "-").concat(e11.id)], a3 = (null == t3 ? void 0 : t3.title) || (null == t3 ? void 0 : t3.name) || e11.title || e11.name;
      return a3 && !a3.toLowerCase().includes("unknown");
    }), F2 = {};
    for (let e11 of O2) {
      let t3 = "".concat(e11.type, "-").concat(e11.id);
      (!F2[t3] || (e11.updatedAt || 0) > (F2[t3].updatedAt || 0)) && (F2[t3] = e11);
    }
    let R2 = Object.values(F2).sort((e11, t3) => (t3.updatedAt || 0) - (e11.updatedAt || 0));
    return A2.showContinueWatching ? (0, n.jsxs)("section", { className: "relative z-10 py-8 rail-section rail-cw", children: [(0, n.jsxs)("div", { className: "mb-3 md:mb-4 md:space-y-3", children: [(0, n.jsxs)("div", { className: "flex items-baseline justify-between md:block", children: [(0, n.jsx)("h3", { className: "text-base font-bold tracking-tight md:text-lg rail-heading", children: "Continue Watching" }), (0, n.jsx)("button", { className: "text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30 transition-colors active:text-white/60 md:hidden ".concat(_2 ? "cursor-not-allowed opacity-70" : ""), onClick: z2, disabled: _2, children: _2 ? "Clearing\u2026" : "success" === E2 ? "Cleared" : "Clear" })] }), (0, n.jsxs)("div", { className: "hidden w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center md:flex", children: [d2 && (0, n.jsx)(function() {
      let e11, t3 = null, a3 = "", s2 = false;
      if ("loading" === u2) return (0, n.jsxs)("div", { className: "inline-flex h-8 items-center gap-2 rounded-full bg-white/[0.07] px-3.5", children: [(0, n.jsx)("div", { className: "flex h-5 w-5 items-center justify-center", children: (0, n.jsx)(m.KP4, { className: "h-3 w-3 animate-spin text-white/60" }) }), (0, n.jsx)("span", { className: "text-xs font-semibold text-white/60", children: "Loading\u2026" })] });
      if ("cloudOnly" === v2) t3 = (0, n.jsx)(m.mSE, { className: "h-3.5 w-3.5 text-white/70" }), a3 = "Restore from Cloud", e11 = () => {
        p2("syncing"), setTimeout(() => {
          localStorage.setItem("continueWatching", JSON.stringify(f2)), localStorage.setItem("__cw_lastUpdate", JSON.stringify(Date.now())), b2(f2), p2("success"), setTimeout(() => {
            p2("idle"), L2();
          }, 700);
        }, 250);
      };
      else if ("localOnly" === v2) t3 = (0, n.jsx)(m.BzO, { className: "h-3.5 w-3.5 text-white/70" }), a3 = "Sync to Cloud", e11 = () => {
        p2("syncing"), fetch("/api/progress/sync", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify(w2) }).then((e12) => {
          p2(e12.ok ? "success" : "error"), setTimeout(() => {
            p2("idle"), L2();
          }, 700);
        }).catch(() => {
          p2("error"), setTimeout(() => p2("idle"), 900);
        });
      };
      else {
        if ("merge" !== v2) return null;
        t3 = (0, n.jsx)(m.KP4, { className: "h-3.5 w-3.5 text-white/70" }), a3 = "Merge & Sync", e11 = () => {
          p2("syncing");
          let e12 = { ...f2, ...w2 };
          localStorage.setItem("continueWatching", JSON.stringify(e12)), localStorage.setItem("__cw_lastUpdate", JSON.stringify(Date.now())), b2(e12), fetch("/api/progress/sync", { method: "POST", credentials: "include", headers: { "Content-Type": "application/json" }, body: JSON.stringify(e12) }).then((e13) => {
            p2(e13.ok ? "success" : "error"), setTimeout(() => {
              p2("idle"), L2();
            }, 700);
          }).catch(() => {
            p2("error"), setTimeout(() => p2("idle"), 900);
          });
        };
      }
      return "syncing" === u2 ? (t3 = (0, n.jsx)(m.KP4, { className: "h-3 w-3 animate-spin text-white/60" }), a3 = "Processing\u2026", s2 = true) : "success" === u2 ? (t3 = (0, n.jsx)(m.CMH, { className: "h-3 w-3 text-white/80" }), a3 = "Done", s2 = true) : "error" === u2 && (t3 = (0, n.jsx)(m.QCr, { className: "h-3 w-3 text-white/60" }), a3 = "Failed \u2014 retry", s2 = true), (0, n.jsxs)("button", { onClick: e11, disabled: s2, className: "inline-flex h-8 items-center gap-2 rounded-full bg-white/[0.07] px-3.5 text-xs font-semibold text-white/70 transition-colors duration-150 hover:bg-white/[0.12] hover:text-white ".concat(s2 ? "cursor-not-allowed opacity-70" : ""), children: [t3, a3] });
    }, {}), (0, n.jsxs)("button", { className: "inline-flex h-8 items-center gap-2 rounded-full bg-white/[0.07] px-3.5 text-xs font-semibold text-white/70 transition-colors duration-150 hover:bg-white/[0.12] hover:text-white ".concat(_2 ? "cursor-not-allowed opacity-70" : ""), onClick: z2, disabled: _2, children: [(0, n.jsx)(m.dAQ, { className: "h-3 w-3" }), _2 ? "Clearing\u2026" : "success" === E2 ? "Cleared" : "Clear history"] }), (0, n.jsxs)("span", { className: "px-1 text-[10.5px] uppercase tracking-[0.08em] text-white/30 sm:ml-1 sm:px-0", children: [j2 && (0, n.jsxs)(n.Fragment, { children: ["Cloud ", I2(j2), " \xB7 "] }), k2 && (0, n.jsxs)(n.Fragment, { children: ["Local ", I2(k2)] })] })] })] }), (0, n.jsxs)("div", { className: "relative", children: [(0, n.jsx)("button", { onClick: () => {
      if (!M2.current) return;
      let { clientWidth: e11, scrollLeft: t3 } = M2.current;
      M2.current.scrollTo({ left: t3 - e11, behavior: "smooth" });
    }, className: "hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10 transition hover:bg-white/20 rail-chevron", children: (0, n.jsx)(m._Jj, { className: "h-5 w-5" }) }), (0, n.jsx)("button", { onClick: () => {
      if (!M2.current) return;
      let { clientWidth: e11, scrollLeft: t3 } = M2.current;
      M2.current.scrollTo({ left: t3 + e11, behavior: "smooth" });
    }, className: "hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md ring-1 ring-white/10 transition hover:bg-white/20 rail-chevron", children: (0, n.jsx)(m.X6T, { className: "h-5 w-5" }) }), (0, n.jsx)("div", { ref: M2, className: "no-scrollbar flex h-auto gap-3 overflow-x-auto overflow-y-visible pl-3 pr-3 scroll-smooth snap-x snap-mandatory md:gap-4 md:snap-none md:pl-0 md:pr-4 rail-scroller", style: { scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }, children: D2 ? Array.from({ length: 4 }).map((e11, t3) => (0, n.jsx)("div", { className: "w-[82vw] min-w-[250px] max-w-[330px] animate-pulse rounded-xl bg-white/12 aspect-video sm:h-40 sm:w-64 sm:min-w-0 sm:max-w-none md:h-[210px] md:w-[375px] md:rounded-xl", style: { boxShadow: "0 15px 30px rgba(0,0,0,0.12)", minWidth: 200, minHeight: 120 } }, t3)) : 0 === R2.length ? (0, n.jsxs)("div", { className: "flex h-[224px] w-full items-center justify-center gap-2 text-lg text-white/60", children: [(0, n.jsx)(m.KP4, { className: "animate-spin text-white/40" }), "No progress yet. Start watching something!"] }) : R2.map((e11) => {
      var a3;
      let s2 = l2["".concat(e11.type, "-").concat(e11.id)];
      if (!s2) return null;
      let i3 = "".concat(e11.type, "-").concat(e11.id, "-").concat(e11.season || "", "-").concat(e11.episode || ""), o2 = s2.backdrop_path ? "https://image.tmdb.org/t/p/w780".concat(s2.backdrop_path) : s2.poster_path ? "https://image.tmdb.org/t/p/w780".concat(s2.poster_path) : null, c3 = 0;
      (null == (a3 = e11.progress) ? void 0 : a3.duration) && (c3 = Math.floor(e11.progress.watched / e11.progress.duration * 100));
      let d3 = "tv" === e11.type && e11.season && e11.episode ? "S".concat(e11.season, " \u2022 E").concat(e11.episode) : void 0, h3 = s2.title || s2.name || e11.title || e11.name || "";
      return (0, n.jsxs)("div", { className: "group relative w-[82vw] min-w-[250px] max-w-[330px] flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-[#090909]  transition snap-start aspect-video sm:h-40 sm:w-64 sm:min-w-0 sm:max-w-none md:h-[210px] md:w-[375px] md:rounded-xl ring-1 ring-white/[0.07] rail-card rail-card-cw", onClick: () => null == t2 ? void 0 : t2({ ...e11, ...s2, realTitle: h3, poster_path: s2.poster_path, backdrop_path: s2.backdrop_path }), tabIndex: 0, children: [o2 ? (0, n.jsx)(r.default, { src: o2, alt: h3, width: 1280, height: 720, className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105", loading: "lazy" }) : (0, n.jsxs)("div", { className: "flex items-center justify-center w-full h-full bg-neutral-900 text-white text-lg font-bold", children: [(0, n.jsx)(m.gSK, { className: "mr-2" }), h3] }), (0, n.jsx)("div", { className: "absolute inset-0 z-[1] bg-gradient-to-t from-black/90 via-black/30 to-transparent" }), (0, n.jsx)("button", { type: "button", onClick: (t3) => {
        t3.stopPropagation(), P2(e11);
      }, className: "absolute right-2.5 top-2.5 z-20 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-white/70 opacity-100 backdrop-blur-sm transition-opacity duration-150 hover:bg-black/75 hover:text-white focus-visible:opacity-100 md:opacity-0 md:group-hover:opacity-100", "aria-label": "Remove ".concat(h3, " from continue watching"), title: "Remove from Continue Watching", children: (0, n.jsx)(m.QCr, { className: "h-3 w-3" }) }), (0, n.jsx)("span", { className: "pointer-events-none absolute left-1/2 top-1/2 z-20 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/55 text-white opacity-0 backdrop-blur-sm transition-opacity duration-150 group-hover:opacity-100", children: (0, n.jsx)(m.gSK, { className: "ml-0.5 h-3.5 w-3.5" }) }), (0, n.jsxs)("div", { className: "absolute inset-x-0 bottom-0 z-10 px-3.5 pb-3", children: [(0, n.jsx)("p", { className: "truncate text-[14px] font-semibold leading-tight text-white", children: h3 }), (0, n.jsxs)("p", { className: "mt-1 truncate text-[10.5px] uppercase tracking-[0.08em] text-white/50", children: [d3 ? "".concat(d3, " \xB7 ") : "movie" === e11.type ? "Movie \xB7 " : "", c3 > 0 ? "".concat(c3, "%") : "Just started"] })] }), (0, n.jsx)("div", { className: "absolute inset-x-0 bottom-0 z-20 h-[3px] bg-white/[0.15]", children: (0, n.jsx)("div", { className: "h-full bg-white", style: { width: "".concat(c3, "%") } }) })] }, i3);
    }) })] })] }) : null;
  }
  var g = a(7958), w = a(3026);
  let b = "tasteSeeds", v = "sixseven:taste-updated";
  function y() {
    let e10 = /* @__PURE__ */ new Map(), t2 = Date.now();
    try {
      let s2 = JSON.parse(localStorage.getItem("continueWatching") || "{}");
      for (let i2 of Object.values(s2)) {
        var a2, n2;
        let s3 = Number(null == i2 ? void 0 : i2.id);
        if (!Number.isFinite(s3) || s3 <= 0 || (null == i2 ? void 0 : i2.type) !== "movie" && (null == i2 ? void 0 : i2.type) !== "tv") continue;
        let l2 = (null == (a2 = i2.progress) ? void 0 : a2.watched) || 0, r2 = (null == (n2 = i2.progress) ? void 0 : n2.duration) || 0, o2 = r2 > 0 ? Math.min(1, l2 / r2) : 0, c2 = i2.updatedAt ? Math.max(0, (t2 - i2.updatedAt) / 864e5) : 30, d2 = (0.35 + 0.65 * o2) * Math.exp(-c2 / 45), h2 = "".concat(i2.type, ":").concat(s3), u2 = e10.get(h2);
        (!u2 || d2 > u2.weight) && e10.set(h2, { id: s3, type: i2.type, weight: d2 });
      }
    } catch (e11) {
    }
    try {
      let t3 = JSON.parse(localStorage.getItem(b) || "[]");
      for (let a3 of Array.isArray(t3) ? t3 : []) {
        let t4 = Number(null == a3 ? void 0 : a3.id);
        if (!Number.isFinite(t4) || (null == a3 ? void 0 : a3.type) !== "movie" && (null == a3 ? void 0 : a3.type) !== "tv") continue;
        let n3 = "".concat(a3.type, ":").concat(t4);
        e10.has(n3) || e10.set(n3, { id: t4, type: a3.type, weight: 0.6 });
      }
    } catch (e11) {
    }
    return [...e10.values()].sort((e11, t3) => t3.weight - e11.weight).slice(0, 30);
  }
  let j = [[180, "3 hours"], [240, "4 hours"], [320, "All night"]], N = (e10) => "".concat(Math.floor(e10 / 60), "h ").concat(e10 % 60 ? "".concat(e10 % 60, "m") : "").trim(), k = (e10) => {
    let t2 = new Date(Date.now() + 6e4 * e10), a2 = t2.getHours(), n2 = String(t2.getMinutes()).padStart(2, "0");
    return "".concat((a2 + 11) % 12 + 1, ":").concat(n2, " ").concat(a2 >= 12 ? "PM" : "AM");
  }, S = /* @__PURE__ */ new Map();
  function _(e10) {
    var t2;
    let { candidates: a2, onClose: i2, onDetails: l2 } = e10, r2 = (0, g.useRouter)(), [o2, c2] = (0, s.useState)("all"), [d2, h2] = (0, s.useState)(null), [u2, p2] = (0, s.useState)("single"), [x2, f2] = (0, s.useState)(240), [b2, v2] = (0, s.useState)(null), [_2, C2] = (0, s.useState)(0), [E2, T2] = (0, s.useState)(null), M2 = (0, s.useRef)(null), A2 = (0, s.useMemo)(() => a2.filter((e11) => "all" === o2 || e11.type === o2), [a2, o2]), P2 = (0, s.useCallback)(() => {
      let e11 = A2.filter((e12) => e12.id !== M2.current), t3 = e11.length ? e11 : A2;
      if (!t3.length) return;
      let a3 = Math.max(...t3.map((e12) => {
        var t4;
        return null != (t4 = e12.score) ? t4 : 0;
      })), n2 = t3.map((e12) => {
        var t4;
        return Math.exp(((null != (t4 = e12.score) ? t4 : 0) - a3) / 0.035);
      }), s2 = Math.random() * n2.reduce((e12, t4) => e12 + t4, 0), i3 = t3[t3.length - 1];
      for (let e12 = 0; e12 < t3.length; e12++) if ((s2 -= n2[e12]) <= 0) {
        i3 = t3[e12];
        break;
      }
      M2.current = i3.id, h2(i3);
    }, [A2]);
    (0, s.useEffect)(() => {
      P2();
    }, [P2]), (0, s.useEffect)(() => {
      (0, w.jz)();
      let e11 = (e12) => {
        "Escape" === e12.key && (e12.stopPropagation(), i2());
      };
      return window.addEventListener("keydown", e11, true), () => {
        (0, w.yq)(), window.removeEventListener("keydown", e11, true);
      };
    }, [i2]), (0, s.useEffect)(() => {
      if ("double" !== u2) return;
      let e11 = false;
      return v2(null), C2(0), fetch("/api/for-you", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ seeds: y(), mode: "double", budget: x2 }) }).then((e12) => e12.ok ? e12.json() : { pairs: [] }).then((t3) => {
        e11 || v2(Array.isArray(t3.pairs) ? t3.pairs : []);
      }).catch(() => {
        e11 || v2([]);
      }), () => {
        e11 = true;
      };
    }, [u2, x2]), (0, s.useEffect)(() => {
      if (!d2) return;
      let e11 = "".concat(d2.type, ":").concat(d2.id), t3 = S.get(e11);
      if (t3) return void T2(t3);
      T2(null);
      let a3 = false;
      return fetch("https://api.themoviedb.org/3/".concat(d2.type, "/").concat(d2.id, "?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1", "&language=en-US")).then((e12) => e12.json()).then((t4) => {
        var n2;
        let s2 = { runtime: t4.runtime || (null == (n2 = t4.episode_run_time) ? void 0 : n2[0]) || null, genres: (t4.genres || []).slice(0, 2).map((e12) => e12.name) };
        S.set(e11, s2), a3 || T2(s2);
      }).catch(() => {
        a3 || T2({ runtime: null, genres: [] });
      }), () => {
        a3 = true;
      };
    }, [d2]);
    let L2 = (0, s.useMemo)(() => {
      var e11;
      if (!d2 || A2.length < 2) return null;
      let t3 = A2.map((e12) => {
        var t4;
        return null != (t4 = e12.score) ? t4 : 0;
      }), a3 = Math.min(...t3), n2 = Math.max(...t3);
      return n2 - a3 < 1e-6 ? 95 : Math.round(78 + 21 * (((null != (e11 = d2.score) ? e11 : 0) - a3) / (n2 - a3)));
    }, [d2, A2]);
    if (!d2) return null;
    let z2 = d2.title || d2.name || "", I2 = (d2.release_date || d2.first_air_date || "").slice(0, 4);
    return (0, n.jsxs)("div", { className: "fixed inset-0 z-[120] flex items-center justify-center p-4 md:p-8", children: [(0, n.jsx)("button", { className: "absolute inset-0 bg-black/80", onClick: i2, "aria-label": "Close" }), (0, n.jsxs)("div", { className: "relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d11] shadow-[0_40px_100px_rgba(0,0,0,0.7)]", children: ["single" === u2 && (0, n.jsxs)("div", { className: "relative aspect-video w-full bg-black", children: [(d2.backdrop_path || d2.poster_path) && (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w780".concat(d2.backdrop_path || d2.poster_path), alt: "", className: "h-full w-full object-cover" }), (0, n.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0c0d11] via-transparent to-transparent" }), (0, n.jsx)("button", { onClick: i2, "aria-label": "Close", className: "absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-white/70 transition-colors hover:text-white", children: (0, n.jsx)(m.QCr, { className: "h-4 w-4" }) })] }), (0, n.jsxs)("div", { className: "px-6 pb-6 ".concat("double" === u2 ? "pt-5" : "pt-1"), children: [(0, n.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [(0, n.jsx)("p", { className: "text-[10.5px] font-semibold uppercase tracking-[0.18em] text-white/35", children: "double" === u2 ? "Double feature" : "Tonight\u2019s pick" }), (0, n.jsxs)("span", { className: "flex items-center gap-2", children: [(0, n.jsx)("span", { className: "flex rounded-full bg-white/[0.06] p-[3px]", children: [["single", "One pick"], ["double", "Double bill"]].map((e11) => {
      let [t3, a3] = e11;
      return (0, n.jsx)("button", { onClick: () => p2(t3), className: "h-[24px] rounded-full px-3 text-[11px] font-semibold transition-colors ".concat(u2 === t3 ? "bg-white text-black" : "text-white/50 hover:text-white/80"), children: a3 }, t3);
    }) }), "double" === u2 && (0, n.jsx)("button", { onClick: i2, "aria-label": "Close", className: "inline-flex h-7 w-7 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/[0.08] hover:text-white", children: (0, n.jsx)(m.QCr, { className: "h-3.5 w-3.5" }) })] })] }), "single" === u2 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("h3", { className: "mt-1.5 text-[24px] font-bold leading-tight text-white", children: z2 }), (0, n.jsx)("p", { className: "mt-1.5 text-[13px] text-white/45", children: [I2, (null == E2 ? void 0 : E2.runtime) ? "".concat(E2.runtime, " min") : "tv" === d2.type ? "Series" : null, (null == E2 || null == (t2 = E2.genres) ? void 0 : t2.length) ? E2.genres.join(" \xB7 ") : null, d2.vote_average ? "\u2605 ".concat(d2.vote_average.toFixed(1)) : null].filter(Boolean).join("  \xB7  ") }), (d2.because || L2) && (0, n.jsxs)("p", { className: "mt-2.5 text-[12.5px] text-white/55", children: [L2 ? "".concat(L2, "% match") : "", L2 && d2.because ? "  \xB7  " : "", d2.because ? "because you watched ".concat(d2.because) : ""] }), (0, n.jsx)("div", { className: "mt-4 flex gap-1.5", children: [["all", "Anything"], ["movie", "Movie"], ["tv", "Series"]].map((e11) => {
      let [t3, a3] = e11;
      return (0, n.jsx)("button", { onClick: () => {
        M2.current = null, c2(t3);
      }, className: "h-8 rounded-full border px-3.5 text-[11.5px] font-semibold transition-colors ".concat(o2 === t3 ? "border-white bg-white text-black" : "border-white/[0.12] bg-white/[0.04] text-white/60 hover:text-white"), children: a3 }, t3);
    }) }), (0, n.jsxs)("div", { className: "mt-5 flex items-center gap-2.5", children: [(0, n.jsxs)("button", { onClick: () => {
      i2(), r2.push("tv" === d2.type ? "/watch/tv/".concat(d2.id, "/1/1") : "/watch/movie/".concat(d2.id));
    }, className: "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white text-[13.5px] font-semibold text-black transition-transform active:scale-[0.98]", children: [(0, n.jsx)(m.gSK, { className: "h-3 w-3" }), "Play"] }), (0, n.jsxs)("button", { onClick: P2, className: "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.05] px-5 text-[13.5px] font-medium text-white/85 transition-colors hover:bg-white/[0.09]", children: [(0, n.jsx)(m.Swo, { className: "h-3 w-3" }), "Another"] }), (0, n.jsx)("button", { onClick: () => {
      i2(), l2(d2);
    }, className: "inline-flex h-11 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.05] px-5 text-[13.5px] font-medium text-white/85 transition-colors hover:bg-white/[0.09]", children: "Details" })] })] }), "double" === u2 && (0, n.jsxs)("div", { className: "mt-3", children: [(0, n.jsx)("div", { className: "flex gap-1.5", children: j.map((e11) => {
      let [t3, a3] = e11;
      return (0, n.jsx)("button", { onClick: () => f2(t3), className: "h-8 rounded-full border px-3.5 text-[11.5px] font-semibold transition-colors ".concat(x2 === t3 ? "border-white bg-white text-black" : "border-white/[0.12] bg-white/[0.04] text-white/60 hover:text-white"), children: a3 }, t3);
    }) }), null === b2 && (0, n.jsxs)("div", { className: "mt-4 grid animate-pulse grid-cols-2 gap-3", children: [(0, n.jsx)("div", { className: "aspect-video rounded-xl bg-white/[0.06]" }), (0, n.jsx)("div", { className: "aspect-video rounded-xl bg-white/[0.06]" })] }), (null == b2 ? void 0 : b2.length) === 0 && (0, n.jsx)("p", { className: "mt-6 py-4 text-center text-[13px] text-white/40", children: "Couldn\u2019t fit a good pairing in that window tonight." }), b2 && b2.length > 0 && (() => {
      let e11 = b2[_2 % b2.length], t3 = (e12) => (0, n.jsxs)("button", { onClick: () => {
        i2(), l2(e12);
      }, className: "group text-left", children: [(0, n.jsx)("span", { className: "block aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/[0.08] transition group-hover:ring-white/[0.4]", children: (e12.backdrop_path || e12.poster_path) && (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w500".concat(e12.backdrop_path || e12.poster_path), alt: "", className: "h-full w-full object-cover" }) }), (0, n.jsx)("span", { className: "mt-2 block truncate text-[13.5px] font-medium text-white/90 group-hover:text-white", children: e12.title || e12.name }), (0, n.jsx)("span", { className: "block text-[11.5px] text-white/40", children: e12.runtime ? "".concat(e12.runtime, " min") : "" })] });
      return (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)("div", { className: "mt-4 grid grid-cols-2 gap-3", children: [t3(e11.a), t3(e11.b)] }), (0, n.jsxs)("p", { className: "mt-3 text-[12.5px] text-white/55", children: [N(e11.total), " with a break\xA0\xA0\xB7\xA0\xA0done by ", k(e11.total)] }), (0, n.jsxs)("div", { className: "mt-4 flex items-center gap-2.5", children: [(0, n.jsxs)("button", { onClick: () => {
        i2(), r2.push("/watch/movie/".concat(e11.a.id));
      }, className: "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white text-[13.5px] font-semibold text-black transition-transform active:scale-[0.98]", children: [(0, n.jsx)(m.gSK, { className: "h-3 w-3" }), "Start the first"] }), (0, n.jsxs)("button", { onClick: () => C2((e12) => e12 + 1), className: "inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/[0.14] bg-white/[0.05] px-5 text-[13.5px] font-medium text-white/85 transition-colors hover:bg-white/[0.09]", children: [(0, n.jsx)(m.Swo, { className: "h-3 w-3" }), "Another pair"] })] })] });
    })()] })] })] })] });
  }
  let C = /* @__PURE__ */ new Map(), E = /* @__PURE__ */ new Set(), T = 0;
  function M() {
    for (let e10 of (T++, E)) e10();
  }
  function A(e10, t2, a2) {
    let n2 = false;
    for (let [t3, s2] of C) s2.rail !== e10 || a2.includes(t3) || (C.delete(t3), n2 = true);
    for (let s2 of a2) {
      let a3 = C.get(s2);
      (!a3 || a3.rank > t2) && (C.set(s2, { rank: t2, rail: e10 }), n2 = true);
    }
    n2 && M();
  }
  function P(e10) {
    let t2 = false;
    for (let [a2, n2] of C) n2.rail === e10 && (C.delete(a2), t2 = true);
    t2 && M();
  }
  function L(e10, t2) {
    let a2 = C.get(e10);
    return !!a2 && a2.rank < t2;
  }
  function z(e10) {
    return E.add(e10), () => {
      E.delete(e10);
    };
  }
  let I = (e10) => "".concat(e10.type || e10.media_type, "-").concat(e10.id);
  function D(e10) {
    let { onSelect: t2 } = e10, [a2, i2] = (0, s.useState)([]), [l2, r2] = (0, s.useState)(""), [c2, d2] = (0, s.useState)(false), h2 = (0, o.t0)(), [u2, m2] = (0, s.useState)(0);
    (0, s.useEffect)(() => {
      let e11 = () => m2((e12) => e12 + 1);
      return window.addEventListener(v, e11), () => window.removeEventListener(v, e11);
    }, []), (0, s.useEffect)(() => {
      if (!h2.forYouRow) return;
      let e11 = y();
      if (e11.length < 2) return;
      let t3 = false;
      return fetch("/api/for-you", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ seeds: e11 }) }).then((e12) => e12.ok ? e12.json() : { items: [] }).then((e12) => {
        var a3;
        !t3 && Array.isArray(e12.items) && !(e12.items.length < 5) && (i2(e12.items), r2((null == (a3 = e12.items[0]) ? void 0 : a3.because) || ""));
      }).catch(() => {
      }), () => {
        t3 = true;
      };
    }, [h2.forYouRow, u2]);
    let x2 = (function(e11, t3, a3) {
      let [n2, i3] = (0, s.useState)(0);
      return (0, s.useEffect)(() => z(() => i3((e12) => e12 + 1)), []), (0, s.useEffect)(() => {
        A(e11, 3, a3.filter((e12) => !L(I(e12), 3)).map(I));
      }, [e11, t3, a3, n2]), (0, s.useEffect)(() => () => P(e11), [e11]), a3.filter((e12) => !L(I(e12), t3));
    })("for-you", 3, a2);
    return h2.forYouRow && 0 !== x2.length ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(p.A, { title: "For You", subtitle: l2 ? "Because you watched ".concat(l2) : "Based on what you\u2019ve watched", action: (0, n.jsx)("button", { onClick: () => d2(true), className: "h-8 rounded-full border border-white/[0.12] bg-white/[0.04] px-3.5 text-[11.5px] font-semibold text-white/60 transition-colors hover:border-white/[0.3] hover:text-white", children: "Pick for me" }), items: x2, onSelect: t2 }), c2 && (0, n.jsx)(_, { candidates: a2, onClose: () => d2(false), onDetails: (e11) => null == t2 ? void 0 : t2(e11) })] }) : null;
  }
  let O = "newSeasons:v1";
  async function F() {
    let e10 = (function() {
      let e11 = {};
      try {
        e11 = JSON.parse(localStorage.getItem("continueWatching") || "{}");
      } catch (e12) {
        return /* @__PURE__ */ new Map();
      }
      let t3 = /* @__PURE__ */ new Map();
      for (let a3 of Object.values(e11)) {
        let e12 = Number(null == a3 ? void 0 : a3.id);
        if (!Number.isFinite(e12) || (null == a3 ? void 0 : a3.type) !== "tv") continue;
        let n3 = Number(null == a3 ? void 0 : a3.season) || 1;
        t3.set(e12, Math.max(t3.get(e12) || 0, n3));
      }
      return t3;
    })();
    if (0 === e10.size) return [];
    try {
      let e11 = JSON.parse(sessionStorage.getItem(O) || "null");
      if (e11 && Date.now() - e11.at < 36e5) return e11.items;
    } catch (e11) {
    }
    let t2 = Date.now(), a2 = [...e10.entries()].slice(0, 15), n2 = (await Promise.all(a2.map(async (e11) => {
      let [a3, n3] = e11;
      try {
        var s2;
        let e12 = await fetch("https://api.themoviedb.org/3/tv/".concat(a3, "?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1", "&language=en-US&append_to_response=images&include_image_language=en,null")).then((e13) => e13.json()), i2 = (e12.seasons || []).filter((e13) => e13.season_number > 0 && e13.air_date), l2 = i2.filter((e13) => new Date(e13.air_date).getTime() <= t2 && (e13.episode_count || 0) > 0), r2 = l2.length ? l2.reduce((e13, t3) => t3.season_number > e13.season_number ? t3 : e13) : null, o2 = r2 ? new Date(r2.air_date).getTime() : 0, c2 = r2 && r2.season_number > n3 && t2 - o2 < 31536e6, d2 = i2.filter((e13) => {
          let a4 = new Date(e13.air_date).getTime();
          return a4 > t2 && a4 - t2 < 10368e6 && e13.season_number > n3;
        }).sort((e13, t3) => new Date(e13.air_date).getTime() - new Date(t3.air_date).getTime())[0];
        if (!c2 && !d2) return null;
        let h2 = d2 ? Math.ceil((new Date(d2.air_date).getTime() - t2) / 864e5) : 0, u2 = (null == (s2 = e12.images) ? void 0 : s2.logos) || [], m2 = u2.find((e13) => "en" === e13.iso_639_1) || u2[0];
        return { id: e12.id, type: "tv", name: e12.name, title: e12.name, backdrop_path: e12.backdrop_path, poster_path: e12.poster_path, logo_path: (null == m2 ? void 0 : m2.file_path) || null, vote_average: e12.vote_average, first_air_date: e12.first_air_date, season: d2 ? d2.season_number : r2.season_number, badge: d2 ? "Season ".concat(d2.season_number, " in ").concat(h2, "d") : "Season ".concat(r2.season_number, " \xB7 New"), _airedAt: d2 ? t2 + (10368e6 - 864e5 * h2) : o2 };
      } catch (e12) {
        return null;
      }
    }))).filter(Boolean).sort((e11, t3) => t3._airedAt - e11._airedAt).map((e11) => {
      let { _airedAt: t3, ...a3 } = e11;
      return a3;
    });
    try {
      sessionStorage.setItem(O, JSON.stringify({ at: Date.now(), items: n2 }));
    } catch (e11) {
    }
    return n2;
  }
  function R(e10) {
    let { onSelect: t2 } = e10, [a2, i2] = (0, s.useState)([]), l2 = (0, o.t0)();
    return ((0, s.useEffect)(() => {
      if (!l2.newSeasonsRow) return;
      let e11 = false, t3 = window, a3 = () => F().then((t4) => {
        e11 || i2(t4);
      }), n2 = t3.requestIdleCallback ? t3.requestIdleCallback(a3, { timeout: 4e3 }) : setTimeout(a3, 1500);
      return () => {
        e11 = true, t3.cancelIdleCallback ? t3.cancelIdleCallback(n2) : clearTimeout(n2);
      };
    }, [l2.newSeasonsRow]), l2.newSeasonsRow && 0 !== a2.length) ? (0, n.jsx)(p.A, { title: "New Seasons", subtitle: "Shows you watched, back with new episodes", items: a2, onSelect: t2 }) : null;
  }
  function H(e10) {
    let { anchor: t2, rank: a2, onSelect: i2 } = e10, [l2, r2] = (0, s.useState)([]);
    (0, s.useEffect)(() => {
      let e11 = false;
      return fetch("/api/for-you", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ seeds: [{ id: t2.id, type: t2.type, weight: 1 }] }) }).then((e12) => e12.ok ? e12.json() : { items: [] }).then((t3) => {
        !e11 && Array.isArray(t3.items) && t3.items.length >= 6 && r2(t3.items);
      }).catch(() => {
      }), () => {
        e11 = true;
      };
    }, [t2.id, t2.type]);
    let o2 = (function(e11, t3, a3) {
      let [n2, i3] = (0, s.useState)(0);
      return (0, s.useEffect)(() => z(() => i3((e12) => e12 + 1)), []), (0, s.useEffect)(() => {
        A(e11, t3, a3.filter((e12) => !L(I(e12), t3)).map(I));
      }, [e11, t3, a3, n2]), (0, s.useEffect)(() => () => P(e11), [e11]), a3.filter((e12) => !L(I(e12), t3));
    })("since-".concat(t2.type, "-").concat(t2.id), a2, l2);
    return o2.length < 5 ? null : (0, n.jsx)(p.A, { title: "Since you watched ".concat(t2.title), items: o2, onSelect: i2 });
  }
  function W(e10) {
    let { onSelect: t2 } = e10, a2 = (0, o.t0)(), [i2, l2] = (0, s.useState)([]);
    return ((0, s.useEffect)(() => {
      if (!a2.forYouRow) return void l2([]);
      l2((function(e11) {
        let t3 = {};
        try {
          t3 = JSON.parse(localStorage.getItem("continueWatching") || "{}");
        } catch (e12) {
          return [];
        }
        let a3 = /* @__PURE__ */ new Map(), n2 = Date.now();
        for (let e12 of Object.values(t3)) {
          var s2, i3;
          let t4 = Number(null == e12 ? void 0 : e12.id);
          if (!Number.isFinite(t4) || t4 <= 0 || (null == e12 ? void 0 : e12.type) !== "movie" && (null == e12 ? void 0 : e12.type) !== "tv") continue;
          let l3 = e12.title || "";
          if (!l3) continue;
          let r2 = (null == (s2 = e12.progress) ? void 0 : s2.watched) || 0, o2 = (null == (i3 = e12.progress) ? void 0 : i3.duration) || 0, c2 = (0.35 + 0.65 * (o2 > 0 ? Math.min(1, r2 / o2) : 0)) * Math.exp(-(e12.updatedAt ? Math.max(0, (n2 - e12.updatedAt) / 864e5) : 30) / 45), d2 = "".concat(e12.type, ":").concat(t4), h2 = a3.get(d2);
          (!h2 || c2 > h2.weight) && a3.set(d2, { id: t4, type: e12.type, title: l3, weight: c2 });
        }
        return [...a3.values()].sort((e12, t4) => t4.weight - e12.weight).slice(0, 2);
      })(0));
    }, [a2.forYouRow]), a2.forYouRow && 0 !== i2.length) ? (0, n.jsx)(n.Fragment, { children: i2.map((e11, a3) => (0, n.jsx)(H, { anchor: e11, rank: 1 + a3, onSelect: t2 }, "".concat(e11.type, "-").concat(e11.id))) }) : null;
  }
  let q = "tasteOnboarding", J = [{ id: 27205, type: "movie" }, { id: 155, type: "movie" }, { id: 1396, type: "tv" }, { id: 66732, type: "tv" }, { id: 129, type: "movie" }, { id: 496243, type: "movie" }, { id: 597, type: "movie" }, { id: 872585, type: "movie" }, { id: 1399, type: "tv" }, { id: 100088, type: "tv" }, { id: 419430, type: "movie" }, { id: 2316, type: "tv" }, { id: 313369, type: "movie" }, { id: 603, type: "movie" }, { id: 1402, type: "tv" }, { id: 245891, type: "movie" }, { id: 4935, type: "movie" }, { id: 94997, type: "tv" }];
  function U() {
    let [e10, t2] = (0, s.useState)(false), [a2, i2] = (0, s.useState)([]), [l2, r2] = (0, s.useState)(/* @__PURE__ */ new Set());
    if ((0, s.useEffect)(() => {
      try {
        if (localStorage.getItem(q) || y().length >= 2) return;
      } catch (e11) {
        return;
      }
      t2(true), fetch("/api/for-you", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lookup: J }) }).then((e11) => e11.ok ? e11.json() : { items: [] }).then((e11) => i2((e11.items || []).filter((e12) => e12.poster_path))).catch(() => {
      });
    }, []), !e10 || a2.length < 8) return null;
    let o2 = (e11) => {
      r2((t3) => {
        let a3 = new Set(t3), n2 = "".concat(e11.type, ":").concat(e11.id);
        return a3.has(n2) ? a3.delete(n2) : a3.add(n2), a3;
      });
    };
    return (0, n.jsxs)("section", { className: "relative z-10 px-4 pt-6 pb-2 md:px-0 md:pt-5 md:pb-3", children: [(0, n.jsx)("p", { className: "text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: "Make it yours" }), (0, n.jsxs)("div", { className: "mt-1 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1", children: [(0, n.jsx)("h3", { className: "text-base font-bold md:text-lg", children: "Pick a few things you love" }), (0, n.jsx)("p", { className: "text-[12px] text-white/40", children: "Powers your For You feed \u2014 no account needed." })] }), (0, n.jsx)("div", { className: "mt-4 grid grid-cols-3 gap-2.5 sm:grid-cols-6 md:grid-cols-9", children: a2.map((e11) => {
      let t3 = "".concat(e11.type, ":").concat(e11.id), a3 = l2.has(t3);
      return (0, n.jsxs)("button", { onClick: () => o2(e11), "aria-pressed": a3, className: "group relative aspect-[2/3] overflow-hidden rounded-lg ring-1 transition duration-200 ".concat(a3 ? "ring-2 ring-white" : "ring-white/[0.08] hover:ring-white/[0.35]"), title: e11.title || e11.name, children: [(0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w342".concat(e11.poster_path), alt: e11.title || e11.name || "", loading: "lazy", decoding: "async", className: "h-full w-full object-cover transition duration-200 ".concat(a3 ? "opacity-100" : "opacity-[0.82] group-hover:opacity-100") }), a3 && (0, n.jsx)("span", { className: "absolute right-1.5 top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-black/55 ring-1 ring-white/[0.5] backdrop-blur-sm", children: (0, n.jsx)("svg", { viewBox: "0 0 12 12", className: "h-[8px] w-[8px]", fill: "none", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: (0, n.jsx)("path", { d: "M2 6.5 4.8 9 10 3.5" }) }) })] }, t3);
    }) }), (0, n.jsxs)("div", { className: "mt-4 flex items-center gap-4", children: [(0, n.jsx)("button", { onClick: () => {
      let e11 = a2.filter((e12) => l2.has("".concat(e12.type, ":").concat(e12.id))).map((e12) => ({ id: e12.id, type: e12.type }));
      try {
        localStorage.setItem(b, JSON.stringify(e11)), localStorage.setItem(q, "done");
      } catch (e12) {
      }
      window.dispatchEvent(new Event(v)), t2(false);
    }, disabled: l2.size < 3, className: "h-10 rounded-full px-6 text-[13px] font-semibold transition ".concat(l2.size >= 3 ? "bg-white text-black" : "cursor-default border border-white/[0.1] bg-white/[0.04] text-white/30"), children: l2.size >= 3 ? "Build my feed" : "Pick ".concat(3 - l2.size, " more") }), (0, n.jsx)("button", { onClick: () => {
      try {
        localStorage.setItem(q, "skip");
      } catch (e11) {
      }
      t2(false);
    }, className: "text-[12px] font-medium text-white/35 transition-colors hover:text-white/70", children: "Skip" })] })] });
  }
  function V(e10) {
    let { onSelect: t2 } = e10, [a2, i2] = (0, s.useState)([]), l2 = (0, o.t0)(), [r2, c2] = (0, s.useState)(0);
    (0, s.useEffect)(() => {
      let e11 = () => c2((e12) => e12 + 1);
      return window.addEventListener(v, e11), () => window.removeEventListener(v, e11);
    }, []), (0, s.useEffect)(() => {
      if (!l2.forYouRow) return;
      let e11 = y();
      if (e11.length < 2) return;
      let t3 = false;
      return fetch("/api/for-you", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ seeds: e11, mode: "gems" }) }).then((e12) => e12.ok ? e12.json() : { items: [] }).then((e12) => {
        !t3 && Array.isArray(e12.items) && e12.items.length >= 5 && i2(e12.items);
      }).catch(() => {
      }), () => {
        t3 = true;
      };
    }, [l2.forYouRow, r2]);
    let d2 = (function(e11, t3, a3) {
      let [n2, i3] = (0, s.useState)(0);
      return (0, s.useEffect)(() => z(() => i3((e12) => e12 + 1)), []), (0, s.useEffect)(() => {
        A(e11, 4, a3.filter((e12) => !L(I(e12), 4)).map(I));
      }, [e11, t3, a3, n2]), (0, s.useEffect)(() => () => P(e11), [e11]), a3.filter((e12) => !L(I(e12), t3));
    })("hidden-gems", 4, a2);
    return l2.forYouRow && 0 !== d2.length ? (0, n.jsx)(p.A, { title: "Hidden Gems", subtitle: "Loved by few, matched to you", items: d2, onSelect: t2 }) : null;
  }
  let Y = "thisWeek:v1";
  async function B() {
    let e10 = (function() {
      let e11 = {};
      try {
        e11 = JSON.parse(localStorage.getItem("continueWatching") || "{}");
      } catch (e12) {
        return [];
      }
      let t3 = /* @__PURE__ */ new Set();
      for (let a2 of Object.values(e11)) {
        let e12 = Number(null == a2 ? void 0 : a2.id);
        Number.isFinite(e12) && (null == a2 ? void 0 : a2.type) === "tv" && t3.add(e12);
      }
      return [...t3].slice(0, 15);
    })();
    if (0 === e10.length) return [];
    try {
      let e11 = JSON.parse(sessionStorage.getItem(Y) || "null");
      if (e11 && Date.now() - e11.at < 18e5) return e11.items;
    } catch (e11) {
    }
    let t2 = (await Promise.all(e10.map(async (e11) => {
      try {
        let t3 = await fetch("https://api.themoviedb.org/3/tv/".concat(e11, "?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1", "&language=en-US")).then((e12) => e12.json()), a2 = t3.next_episode_to_air;
        if (!(null == a2 ? void 0 : a2.air_date)) return null;
        let n2 = Math.floor(((/* @__PURE__ */ new Date(a2.air_date + "T00:00:00")).getTime() - new Date((/* @__PURE__ */ new Date()).toDateString()).getTime()) / 864e5);
        if (n2 < 0 || n2 > 7) return null;
        return { id: t3.id, name: t3.name, backdrop_path: t3.backdrop_path, poster_path: t3.poster_path, season: a2.season_number, episode: a2.episode_number, epName: a2.name || "", airDate: a2.air_date };
      } catch (e12) {
        return null;
      }
    }))).filter(Boolean).sort((e11, t3) => e11.airDate.localeCompare(t3.airDate));
    try {
      sessionStorage.setItem(Y, JSON.stringify({ at: Date.now(), items: t2 }));
    } catch (e11) {
    }
    return t2;
  }
  function K(e10) {
    let { onSelect: t2 } = e10, [a2, i2] = (0, s.useState)([]), l2 = (0, o.t0)();
    return ((0, s.useEffect)(() => {
      if (!l2.weekSchedule) return;
      let e11 = false, t3 = window, a3 = () => B().then((t4) => {
        e11 || i2(t4);
      }), n2 = t3.requestIdleCallback ? t3.requestIdleCallback(a3, { timeout: 4e3 }) : setTimeout(a3, 1200);
      return () => {
        e11 = true, t3.cancelIdleCallback ? t3.cancelIdleCallback(n2) : clearTimeout(n2);
      };
    }, [l2.weekSchedule]), l2.weekSchedule && 0 !== a2.length) ? (0, n.jsxs)("section", { className: "relative z-10 pt-6 pb-2 md:pt-5 md:pb-3", children: [(0, n.jsxs)("div", { className: "px-4 md:px-0", children: [(0, n.jsx)("h3", { className: "text-base font-bold md:text-lg", children: "This Week" }), (0, n.jsx)("p", { className: "mb-2.5 mt-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30 md:mb-3", children: "New episodes from your shows" })] }), (0, n.jsx)("div", { className: "no-scrollbar flex gap-2.5 overflow-x-auto pl-4 pr-4 md:gap-4 md:pl-0 snap-x snap-mandatory scroll-pl-4 md:snap-none md:scroll-pl-0", style: { scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }, children: a2.map((e11) => {
      let a3 = (function(e12) {
        let t3 = new Date((/* @__PURE__ */ new Date()).toDateString()).getTime(), a4 = Math.round(((/* @__PURE__ */ new Date(e12 + "T00:00:00")).getTime() - t3) / 864e5);
        return a4 <= 0 ? "Today" : 1 === a4 ? "Tomorrow" : (/* @__PURE__ */ new Date(e12 + "T00:00:00")).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      })(e11.airDate), s2 = "Today" === a3;
      return (0, n.jsxs)("button", { onClick: () => null == t2 ? void 0 : t2({ id: e11.id, type: "tv", name: e11.name }), className: "w-[56vw] flex-shrink-0 snap-start text-left sm:w-60 md:w-[300px]", children: [(0, n.jsxs)("span", { className: "relative block aspect-video w-full overflow-hidden rounded-lg ring-1 ring-white/[0.07] md:rounded-xl", children: [(e11.backdrop_path || e11.poster_path) && (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w500".concat(e11.backdrop_path || e11.poster_path), alt: e11.name, loading: "lazy", decoding: "async", className: "h-full w-full object-cover" }), (0, n.jsx)("span", { className: "absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.08em] ".concat(s2 ? "bg-white text-black" : "bg-black/70 text-white/85"), children: a3 }), (0, n.jsxs)("span", { className: "absolute bottom-2 left-2 rounded-full bg-black/70 px-2 py-0.5 text-[10.5px] font-semibold text-white/90", children: ["S", e11.season, " \xB7 E", e11.episode] })] }), (0, n.jsx)("span", { className: "mt-2 block truncate text-[12.5px] font-medium text-white/90", children: e11.name }), e11.epName && (0, n.jsx)("span", { className: "mt-0.5 block truncate text-[10px] uppercase tracking-[0.08em] text-white/35", children: e11.epName })] }, e11.id);
    }) })] }) : null;
  }
  var G = a(1530);
  let X = "a46c50a0ccb1bafe2b15665df7fad7e1";
  async function Q(e10) {
    if (0 === e10.length) return { shows: [], failedKeys: [] };
    let t2 = /* @__PURE__ */ new Map(), a2 = [], n2 = true;
    try {
      for (let a3 of (await fetch("/api/for-you", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lookup: e10 }) }).then((e11) => e11.ok ? e11.json() : (n2 = false, { items: [] }))).items || []) t2.set("".concat(a3.type, "-").concat(a3.id), a3);
    } catch (e11) {
      n2 = false;
    }
    let s2 = e10.filter((e11) => !t2.has("".concat(e11.type, "-").concat(e11.id)));
    return await Promise.all(s2.slice(0, 20).map(async (e11) => {
      let s3 = "".concat(e11.type, "-").concat(e11.id);
      try {
        let l2 = await fetch("https://api.themoviedb.org/3/".concat(e11.type, "/").concat(e11.id, "?api_key=").concat(X, "&language=en-US")).then((e12) => e12.json());
        if (!(null == l2 ? void 0 : l2.id)) {
          n2 || a2.push(s3);
          return;
        }
        let r2 = null;
        try {
          var i2;
          let t3 = await fetch("https://api.themoviedb.org/3/".concat(e11.type, "/").concat(e11.id, "/images?api_key=").concat(X, "&include_image_language=en,null")).then((e12) => e12.json()), a3 = (t3.logos || []).find((e12) => "en" === e12.iso_639_1) || (null == (i2 = t3.logos) ? void 0 : i2[0]);
          r2 = (null == a3 ? void 0 : a3.file_path) || null;
        } catch (e12) {
        }
        t2.set(s3, { id: l2.id, type: e11.type, title: l2.title, name: l2.name, backdrop_path: l2.backdrop_path, poster_path: l2.poster_path, vote_average: l2.vote_average, release_date: l2.release_date, first_air_date: l2.first_air_date, logo_path: r2 });
      } catch (e12) {
        a2.push(s3);
      }
    })), { shows: e10.map((e11) => t2.get("".concat(e11.type, "-").concat(e11.id))).filter(Boolean), failedKeys: a2 };
  }
  function Z(e10) {
    let { onSelect: t2 } = e10, [a2, i2] = (0, s.useState)([]), l2 = (0, s.useRef)(/* @__PURE__ */ new Set());
    return ((0, s.useEffect)(() => {
      let e11 = false, t3 = () => {
        let t4 = (0, G.EY)().map((e12) => (0, G.dR)(e12)).filter((e12) => !!(e12 && (e12.backdrop_path || e12.poster_path))).map((e12) => ({ ...e12 }));
        e11 || i2(t4.slice(0, 20));
      }, a3 = async () => {
        let e12 = (0, G.EY)().slice(0, 20).filter((e13) => {
          let t4 = "".concat(e13.type, "-").concat(e13.id);
          if (l2.current.has(t4)) return false;
          let a5 = (0, G.dR)(e13);
          return !a5 || !(a5.backdrop_path || a5.poster_path) || !a5.logo_path;
        });
        if (0 === e12.length) return;
        for (let t4 of e12) l2.current.add("".concat(t4.type, "-").concat(t4.id));
        let { shows: a4, failedKeys: n3 } = await Q(e12);
        for (let e13 of n3) l2.current.delete(e13);
        for (let e13 of a4) (0, G.Gs)(e13) && (0, G.f8)(e13);
        a4.length > 0 && t3();
      }, n2 = () => {
        t3(), a3();
      };
      return (0, G.OJ)().then(n2), window.addEventListener(G.aQ, n2), () => {
        e11 = true, window.removeEventListener(G.aQ, n2);
      };
    }, []), 0 === a2.length) ? null : (0, n.jsx)(p.A, { title: "My List", subtitle: "Saved for later \u2014 tap + on any card", items: a2, captionLogoless: true, onSelect: t2 });
  }
  var $ = a(9447), ee = a(8410), et = a(9777), ea = a(1751);
  let en = (0, i.default)(() => a.e(1860).then(a.bind(a, 9479)), { loadableGenerated: { webpack: () => [9479] }, ssr: false, loading: () => (0, n.jsx)(ea.A, {}) }), es = (0, i.default)(() => Promise.resolve().then(a.bind(a, 5985)), { loadableGenerated: { webpack: () => [5985] }, ssr: false, loading: () => null }), ei = (0, i.default)(() => a.e(8213).then(a.bind(a, 8213)), { loadableGenerated: { webpack: () => [8213] }, ssr: false, loading: () => null }), el = (0, i.default)(() => a.e(4445).then(a.bind(a, 4445)), { loadableGenerated: { webpack: () => [4445] }, ssr: false, loading: () => null }), er = [];
  function eo(e10) {
    return !(!e10 || er.includes(e10.id));
  }
  function ec(e10) {
    let t2 = e10.release_date || e10.first_air_date;
    return !!t2 && parseInt(t2.slice(0, 4), 10) >= 2020;
  }
  function ed(e10) {
    return !!e10 && "object" == typeof e10 && Object.keys(e10).length > 0;
  }
  function eh(e10) {
    let { tabVisible: t2 = true, hero: a2, trending: i2, popularTv: c2 = [], topRatedTv: x2 = [], action: g2 = [], comedy: w2 = [], romance: b2 = [], horror: v2 = [], anime: y2 = [], bollywood: j2 = [], korean: N2 = [], documentary: k2 = [], kids: S2 = [], adventure: _2 = [], popular: C2 = [], crime: E2 = [], fantasy: T2 = [], thriller: M2 = [], mystery: A2 = [], western: P2 = [], war: L2 = [], pixar: z2 = [], disney: I2 = [], marvel: O2 = [], oscarWinners: F2 = [], topRated: H2 = [], appleOriginals: q2 = [], a24: J2 = [], directors: Y2 = [], top250: B2 = [], steamyMovies: G2 = [], steamySeries: X2 = [], featuredRails: Q2 = [] } = e10, [ea2, er2] = (0, s.useState)(true);
    (0, s.useEffect)(() => {
      let e11 = () => er2(window.innerHeight >= window.innerWidth);
      return e11(), window.addEventListener("resize", e11), window.addEventListener("orientationchange", e11), () => {
        window.removeEventListener("resize", e11), window.removeEventListener("orientationchange", e11);
      };
    }, []);
    let eh2 = (0, s.useMemo)(() => i2.filter(ec).filter(eo), [i2]), eu2 = (0, s.useMemo)(() => ec(a2) && eo(a2) ? a2 : eh2[0] || null, [a2, eh2]), em2 = (0, s.useMemo)(() => {
      if (!eu2) return [];
      let e11 = eh2.filter((e12) => e12.id !== eu2.id);
      return [eu2, ...e11];
    }, [eu2, eh2]), [ep2, ex2] = (0, s.useState)(0), ef2 = em2[ep2], [eg2, ew2] = (0, s.useState)(null), [eb2, ev2] = (0, s.useState)(null), [ey2, ej2] = (0, s.useState)(false), [eN2, ek2] = (0, s.useState)(0), [eS2, e_2] = (0, s.useState)(true), [eC2, eE2] = (0, s.useState)(false), [eT2, eM2] = (0, s.useState)(true), [eA2, eP2] = (0, s.useState)(false), eL2 = (0, s.useRef)(null), ez2 = (0, s.useRef)(0), eI2 = Math.min(6, em2.length);
    (0, s.useEffect)(() => {
      if (!ea2 || eI2 < 2) return;
      let e11 = setInterval(() => {
        document.hidden || ex2((e12) => (e12 + 1) % eI2);
      }, 7e3);
      return () => clearInterval(e11);
    }, [ea2, eI2]);
    let eD2 = (e11) => {
      48 > Math.abs(e11) || eI2 < 2 || ex2((t3) => (t3 + (e11 < 0 ? 1 : eI2 - 1)) % eI2);
    };
    (0, s.useEffect)(() => {
      let e11 = true;
      async function t3() {
        let t4 = {};
        try {
          t4 = JSON.parse(localStorage.getItem("continueWatching") || "{}");
        } catch (e12) {
        }
        if (ed(t4)) {
          e11 && eP2(true);
          return;
        }
        try {
          let t5 = await fetch("/api/profile");
          if (401 === t5.status) {
            e11 && eP2(false);
            return;
          }
          let a4 = await fetch("/api/progress/get", { credentials: "include" });
          if (!a4.ok) {
            e11 && eP2(false);
            return;
          }
          let n2 = await a4.json();
          if (ed(n2.progress)) {
            e11 && eP2(true);
            return;
          }
        } catch (t5) {
          e11 && eP2(false);
          return;
        }
        e11 && eP2(false);
      }
      t3();
      let a3 = () => t3();
      return window.addEventListener("storage", a3), () => {
        e11 = false, window.removeEventListener("storage", a3);
      };
    }, []);
    let eO2 = (0, s.useCallback)(() => {
      ej2(false), e_2(true), eE2(false), eM2(true), ek2(0), ex2((e11) => (e11 + 1) % em2.length);
    }, [em2.length]);
    (0, s.useEffect)(() => {
      if (!eb2 || ey2) return;
      let e11 = false, t3 = setInterval(() => {
        let t4 = eL2.current, a3 = t4 && t4.getCurrentTime ? t4.getCurrentTime() : 0;
        if (!e11) if (!(a3 > 0) || !(a3 <= 6.5)) return;
        else e11 = true;
        ek2(Math.min(1, a3 / 5)), a3 > 5 && ej2(true);
      }, 200);
      return () => clearInterval(t3);
    }, [eb2, ey2]);
    let eF2 = (0, o.t0)();
    (0, s.useEffect)(() => {
      if (!ef2) return;
      if (ea2 || !t2 || !(0, o.sb)().heroTrailers || (0, l.cl)()) {
        ev2(null), ej2(false), ek2(0);
        return;
      }
      let e11 = false;
      return fetch("https://api.themoviedb.org/3/".concat(ef2.type, "/").concat(ef2.id, "/videos?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1")).then((e12) => e12.json()).then((t3) => {
        var a3;
        if (e11) return;
        let n2 = null == (a3 = t3.results) ? void 0 : a3.find((e12) => "YouTube" === e12.site && "Trailer" === e12.type);
        n2 ? ev2(n2.key) : ev2(null);
      }).catch(() => {
        e11 || ev2(null);
      }), () => {
        e11 = true;
      };
    }, [ef2, eF2.heroTrailers, ea2, t2]), (0, s.useEffect)(() => {
      if (!eb2) return;
      let e11 = setTimeout(() => {
        let e12 = eL2.current;
        e12 && e12.getCurrentTime && e12.getCurrentTime() > 5 && 8 >= e12.getCurrentTime() && ej2(true);
      }, 9500);
      return () => clearTimeout(e11);
    }, [eb2]), (0, s.useEffect)(() => {
      if (!ey2) return;
      let e11 = setTimeout(() => {
        eE2(true), eM2(false);
      }, 1500);
      return () => clearTimeout(e11);
    }, [ey2]), (0, s.useEffect)(() => {
      var e11, t3;
      if (!ey2 || !eL2.current) return;
      let a3 = null == (e11 = (t3 = eL2.current).getDuration) ? void 0 : e11.call(t3);
      if (a3 > 5) {
        let e12 = setTimeout(() => eO2(), 1e3 * Math.max(4, a3 - 13));
        return () => clearTimeout(e12);
      }
    }, [ey2, eO2]);
    let [eR2, eH2] = (0, s.useState)(false), eW2 = (0, s.useCallback)((e11) => {
      (0, l.RE)(e11 && e11.data), eH2(true), ej2(false), ev2(null);
    }, []);
    (0, s.useEffect)(() => {
      eH2(false);
    }, [ef2]), (0, s.useEffect)(() => {
      ey2 && (0, l.xZ)();
    }, [ey2]), (0, s.useEffect)(() => {
      if (ea2 || !t2 || !(eR2 || (0, l.cl)())) return;
      let e11 = setTimeout(() => eO2(), l.vJ);
      return () => clearTimeout(e11);
    }, [eR2, ef2, eO2, t2, ea2]), (0, s.useEffect)(() => {
      if (ey2 || !em2.length) return;
      let e11 = setTimeout(() => eO2(), 8e3);
      return () => clearTimeout(e11);
    }, [ep2, ey2, eO2, em2.length]);
    let eq2 = () => {
      eL2.current && (eS2 ? (eL2.current.unMute(), e_2(false)) : (eL2.current.mute(), e_2(true)));
    }, eJ2 = eT2 ? "20%" : "30%", eU2 = (0, s.useCallback)(ew2, []);
    return ef2 ? (0, n.jsxs)(n.Fragment, { children: [ea2 ? (0, n.jsx)("section", { className: "w-full overflow-hidden bg-black hero-shell hero-portrait", children: (0, n.jsxs)("div", { className: "relative w-full hero-frame", style: { minHeight: "66vh", height: "min(74vh, 640px)" }, onTouchStart: (e11) => ez2.current = e11.touches[0].clientX, onTouchEnd: (e11) => eD2(e11.changedTouches[0].clientX - ez2.current), children: [(0, n.jsx)(h.N, { mode: "wait", children: (0, n.jsx)(u.P.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.6, ease: "easeOut" }, className: "absolute inset-0 hero-media", children: (0, n.jsx)(r.default, { src: "https://image.tmdb.org/t/p/w780".concat(ef2.backdrop_path || ef2.poster_path), alt: "poster", fill: true, priority: true, sizes: "100vw", className: ef2.backdrop_path ? "object-cover" : "object-contain scale-[0.94]" }) }, ef2.id) }), (0, n.jsx)("div", { className: "absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_24%,rgba(0,0,0,0.38)_68%,rgba(0,0,0,0.7)_100%)]" }), (0, n.jsx)("div", { className: "absolute inset-0 z-[1] bg-gradient-to-b from-black/55 via-black/24 to-black" }), (0, n.jsx)("div", { className: "absolute inset-0 z-[1] bg-gradient-to-r from-black/58 via-transparent to-black/36" }), (0, n.jsx)("div", { className: "absolute bottom-0 left-0 right-0 z-10 px-4 pb-[max(40px,env(safe-area-inset-bottom)+24px)] hero-content", children: (0, n.jsxs)(u.P.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.45, ease: "easeOut" }, children: [(0, n.jsx)("h2", { className: "text-[34px] font-bold leading-[1.05] tracking-[-0.02em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]", children: ef2.title || ef2.name }), (0, n.jsxs)("div", { className: "mt-2 flex flex-wrap items-center gap-2 text-[12px] text-white/60", children: [ef2.vote_average > 0 && (0, n.jsxs)("span", { className: "font-semibold text-white", children: ["\u2605 ", ef2.vote_average.toFixed(1)] }), (ef2.release_date || ef2.first_air_date) && (0, n.jsx)("span", { children: (ef2.release_date || ef2.first_air_date).slice(0, 4) }), (0, n.jsx)("span", { className: "rounded-[3px] border border-white/[0.18] px-1 py-px text-[9.5px] font-semibold uppercase tracking-[0.1em] text-white/60", children: "movie" === ef2.type ? "Movie" : "Series" })] }), ef2.overview && (0, n.jsx)("p", { className: "mt-2.5 line-clamp-2 text-[13px] leading-relaxed text-white/65", children: ef2.overview }), (0, n.jsxs)("div", { className: "mt-4 flex items-center gap-3 hero-ctas", children: [(0, et.f)(ef2) ? (0, n.jsx)("span", { className: "inline-flex h-11 items-center justify-center rounded-full border border-white/[0.16] bg-white/[0.1] px-6 text-[13px] font-semibold text-white", children: (0, et.f)(ef2) }) : (0, n.jsxs)(d(), { href: "/watch/".concat(ef2.type, "/").concat(ef2.id), className: "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-8 text-[14px] font-semibold text-black transition-transform active:scale-[0.97]", children: [(0, n.jsx)(m.gSK, { className: "text-[11px]" }), " Play"] }), (0, n.jsx)("button", { onClick: () => ew2(ef2), "aria-label": "Details", className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.08] text-white backdrop-blur-md transition-transform active:scale-[0.95]", children: (0, n.jsx)(m.__w, { className: "text-[15px]" }) }), eb2 && ey2 && (0, n.jsx)("button", { onClick: eq2, className: "inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.08] text-white backdrop-blur-md transition-transform active:scale-[0.95]", "aria-label": eS2 ? "Unmute trailer" : "Mute trailer", children: eS2 ? (0, n.jsx)(m.FZ2, { className: "text-sm" }) : (0, n.jsx)(m.pPd, { className: "text-sm" }) })] })] }, "".concat(ef2.id, "-panel")) }), eI2 > 1 && (0, n.jsx)("div", { className: "absolute inset-x-0 bottom-[max(14px,env(safe-area-inset-bottom)+2px)] z-10 flex justify-center gap-1.5 hero-dots", children: em2.slice(0, eI2).map((e11, t3) => (0, n.jsx)("span", { className: "h-[5px] rounded-full transition-all duration-300 ".concat(t3 === ep2 % eI2 ? "w-4 bg-white" : "w-[5px] bg-white/25") }, e11.id)) })] }) }) : (0, n.jsx)(n.Fragment, { children: (0, n.jsx)("div", { className: "-mt-32", children: (0, n.jsxs)("section", { className: "relative h-screen w-full overflow-hidden hero-shell hero-landscape", children: [(0, n.jsx)(h.N, { children: !ey2 && (0, n.jsxs)(u.P.div, { initial: { opacity: 0, scale: 1.05 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 1.02 }, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }, className: "absolute inset-0 z-0 hero-media", children: [(0, n.jsx)(r.default, { src: "https://image.tmdb.org/t/p/w780".concat(ef2.backdrop_path || ef2.poster_path), alt: "poster", fill: true, priority: true, className: "object-cover" }), (0, n.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" })] }, "poster") }), (0, n.jsx)(h.N, { children: eb2 && (0, n.jsxs)(u.P.div, { initial: { opacity: 0 }, animate: { opacity: +!!ey2 }, exit: { opacity: 0 }, transition: { duration: 1, ease: [0.4, 0, 0.2, 1] }, className: "absolute inset-0 hero-media", children: [(0, n.jsx)("div", { className: "absolute w-[150%] h-[150%] -top-[25%] -left-[25%] pointer-events-none", children: (0, n.jsx)(el, { videoId: eb2, onReady: (e11) => {
      var t3, a3;
      eL2.current = e11.target;
      let n2 = (null == (t3 = (a3 = e11.target).getAvailableQualityLevels) ? void 0 : t3.call(a3)) || [], s2 = n2.includes("highres") ? "highres" : n2[0];
      s2 && e11.target.setPlaybackQuality(s2), e11.target.mute(), e11.target.playVideo();
    }, onError: eW2, opts: { width: "100%", height: "100%", playerVars: { autoplay: 1, mute: 1, playsinline: 1, fs: 0, controls: 0, modestbranding: 1, rel: 0, iv_load_policy: 3, disablekb: 1 } }, className: "w-full h-full" }) }), (0, n.jsx)("div", { className: "absolute inset-0 bg-black/20" })] }, "yt") }), (0, n.jsx)("div", { className: "absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none hero-fade" }), (0, n.jsxs)(u.P.div, { initial: { y: -80, opacity: 0 }, animate: { y: 0, opacity: 1, top: eJ2, scale: eC2 ? 0.75 : 1 }, transition: { type: "spring", stiffness: 90, damping: 16, mass: 0.7, duration: 0.7 }, className: "\n                  absolute z-10 flex flex-col gap-8\n                  left-1/2 -translate-x-1/2 items-center max-w-full\n                  sm:left-10 sm:-translate-x-0 sm:max-w-[400px]\n                  md:left-16 md:max-w-[440px]\n                  hero-content\n                ", style: { top: eJ2, width: "clamp(220px, 40vw, 440px)" }, children: [(0, n.jsx)(u.P.div, { initial: { x: -40, opacity: 0, scale: 0.96 }, animate: { x: 0, opacity: 1, scale: 1 }, transition: { type: "spring", stiffness: 120, damping: 18, delay: 0.05 }, className: "flex w-full justify-center items-center", children: ef2.logo_path ? (0, n.jsx)(r.default, { src: "https://image.tmdb.org/t/p/w500".concat(ef2.logo_path), alt: "logo", width: 440, height: 120, className: "object-contain mx-auto", style: { width: "100%", maxWidth: "440px", minWidth: "220px", maxHeight: "120px", margin: "0 auto" }, priority: true }) : (0, n.jsx)("h2", { className: "text-[32px] sm:text-[44px] md:text-[60px] font-extrabold drop-shadow-md text-white w-full text-center", children: ef2.title || ef2.name }) }, ef2.logo_path || ef2.title || ef2.name), (0, n.jsxs)(u.P.div, { initial: { opacity: 0, scale: 0.96 }, animate: { opacity: 1, scale: 1 }, transition: { type: "spring", stiffness: 120, damping: 12, delay: 0.18 }, className: "flex items-center justify-center gap-3 sm:gap-6 z-20 w-full hero-ctas", children: [(0, et.f)(ef2) ? (0, n.jsx)("span", { className: "flex items-center gap-3 rounded-full border border-white/[0.2] bg-white/[0.12] px-6 py-2.5 text-lg font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.3)] backdrop-blur-md sm:text-xl", style: { minHeight: "48px", minWidth: "110px" }, children: (0, et.f)(ef2) }) : (0, n.jsxs)(d(), { href: "/watch/".concat(ef2.type, "/").concat(ef2.id), className: "flex items-center gap-3 rounded-full bg-white px-6 py-2.5 text-lg font-semibold text-black shadow-[0_14px_28px_rgba(0,0,0,0.3)] transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.34)] active:scale-[0.98] sm:text-xl", style: { minHeight: "48px", minWidth: "110px" }, children: [(0, n.jsx)(m.gSK, { className: "text-xl" }), " Play"] }), (0, n.jsxs)("button", { onClick: () => ew2(ef2), className: "flex items-center gap-3 rounded-full border border-white/18 bg-white/18 px-6 py-2.5 text-lg font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-white/24 hover:shadow-[0_16px_32px_rgba(0,0,0,0.34)] active:scale-[0.98] sm:text-xl", style: { minHeight: "48px", minWidth: "110px" }, children: [(0, n.jsx)(m.__w, { className: "text-xl" }), " Info"] }), eb2 && (0, n.jsx)("button", { onClick: eq2, className: "flex items-center justify-center rounded-full border border-white/20 bg-white/24 p-3 shadow-[0_12px_24px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-white/32 hover:shadow-[0_16px_30px_rgba(0,0,0,0.34)] active:scale-[0.97]", style: { minHeight: "48px", minWidth: "48px" }, children: eS2 ? (0, n.jsx)(m.FZ2, { className: "text-xl" }) : (0, n.jsx)(m.pPd, { className: "text-xl" }) })] })] })] }) }) }), (0, n.jsxs)("main", { className: "relative flex flex-col gap-2 pb-[calc(env(safe-area-inset-bottom)+104px)]", children: [eF2.ambience && ef2 && (0, n.jsx)("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 z-0 overflow-hidden", style: { maskImage: "linear-gradient(to bottom, transparent, black 180px)", WebkitMaskImage: "linear-gradient(to bottom, transparent, black 180px)" }, children: (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w300".concat(ef2.backdrop_path || ef2.poster_path), alt: "", className: "fixed inset-0 h-full w-full scale-110 object-cover blur-[72px] saturate-[1.4]", style: { opacity: { subtle: 0.2, standard: 0.3, vivid: 0.42 }[eF2.ambienceIntensity] || 0.3 } }, ef2.id) }), eA2 && (0, n.jsx)("div", { className: "px-4", children: (0, n.jsx)(f, { onSelect: eU2 }) }), (0, n.jsx)(Z, { onSelect: eU2 }), (0, n.jsx)(K, { onSelect: eU2 }), (0, n.jsx)(R, { onSelect: eU2 }), (0, n.jsx)(U, {}), (0, n.jsx)(D, { onSelect: eU2 }), (0, n.jsx)(W, { onSelect: eU2 }), (0, n.jsx)(V, { onSelect: eU2 }), (0, n.jsx)(ee.A, { featuredRails: Array.isArray(Q2) && Q2.length > 0 ? Q2 : [{ key: "popular-fallback", label: "Popular", items: C2 }], onSelect: eU2, minHeight: 200, batchSize: 6 }), Array.isArray(Y2) && Y2.map((e11) => Array.isArray(e11.movies) && e11.movies.length >= 5 && (0, n.jsx)($.A, { minHeight: 200, children: (0, n.jsx)(p.A, { title: "By ".concat(e11.name), items: e11.movies, onSelect: eU2 }) }, e11.name))] }), eg2 && (ea2 ? (0, n.jsx)(en, { show: eg2, onClose: () => ew2(null) }) : (0, n.jsx)(es, { show: eg2, onClose: () => ew2(null) })), (0, n.jsx)(ei, {})] }) : (0, n.jsx)("div", { className: "min-h-screen flex items-center justify-center text-white text-xl", children: "No recent movies or shows found." });
  }
  var eu = a(5914);
  let em = (0, i.default)(() => Promise.resolve().then(a.bind(a, 5985)), { loadableGenerated: { webpack: () => [5985] }, ssr: false, loading: () => null }), ep = (0, i.default)(() => a.e(8213).then(a.bind(a, 8213)), { loadableGenerated: { webpack: () => [8213] }, ssr: false, loading: () => null }), ex = (0, i.default)(() => a.e(4445).then(a.bind(a, 4445)), { loadableGenerated: { webpack: () => [4445] }, ssr: false, loading: () => null }), ef = [];
  function eg(e10) {
    return !(!e10 || ef.includes(e10.id));
  }
  function ew(e10) {
    let t2 = e10.release_date || e10.first_air_date;
    return !!t2 && parseInt(t2.slice(0, 4), 10) >= 2020;
  }
  function eb(e10) {
    return !!e10 && "object" == typeof e10 && Object.keys(e10).length > 0;
  }
  function ev(e10) {
    let { hero: t2, trending: a2, popularTv: i2 = [], topRatedTv: c2 = [], action: h2 = [], comedy: u2 = [], romance: x2 = [], horror: g2 = [], anime: w2 = [], bollywood: b2 = [], korean: v2 = [], documentary: y2 = [], kids: j2 = [], adventure: N2 = [], popular: k2 = [], crime: S2 = [], fantasy: _2 = [], thriller: C2 = [], mystery: E2 = [], western: T2 = [], war: M2 = [], pixar: A2 = [], disney: P2 = [], marvel: L2 = [], oscarWinners: z2 = [], topRated: I2 = [], appleOriginals: O2 = [], a24: F2 = [], directors: H2 = [], top250: q2 = [], steamyMovies: J2 = [], steamySeries: Y2 = [], featuredRails: B2 = [], tabVisible: G2 = true } = e10, X2 = (0, s.useMemo)(() => a2.filter(ew).filter(eg), [a2]), Q2 = (0, s.useMemo)(() => ew(t2) && eg(t2) ? t2 : X2[0] || null, [t2, X2]), ea2 = (0, s.useMemo)(() => {
      if (!Q2) return [];
      let e11 = X2.filter((e12) => e12.id !== Q2.id);
      return [Q2, ...e11];
    }, [Q2, X2]), [en2, es2] = (0, s.useState)(0), ei2 = ea2[en2], [el2, er2] = (0, s.useState)(null), [eo2, ec2] = (0, s.useState)(null), [ed2, eh2] = (0, s.useState)(false), [ef2, ev2] = (0, s.useState)(0), [ey2, ej2] = (0, s.useState)(true), [eN2, ek2] = (0, s.useState)(true), [eS2, e_2] = (0, s.useState)(false), [eC2, eE2] = (0, s.useState)(true), [eT2, eM2] = (0, s.useState)(false), eA2 = (0, s.useRef)(null), [eP2, eL2] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      eL2(false);
      let e11 = 0, t3 = 0;
      return e11 = window.requestAnimationFrame(() => {
        t3 = window.requestAnimationFrame(() => eL2(true));
      }), () => {
        window.cancelAnimationFrame(e11), window.cancelAnimationFrame(t3);
      };
    }, []), (0, s.useEffect)(() => {
      let e11 = true;
      async function t3() {
        let t4 = {};
        try {
          t4 = JSON.parse(localStorage.getItem("continueWatching") || "{}");
        } catch (e12) {
        }
        if (eb(t4)) {
          e11 && eM2(true);
          return;
        }
        try {
          let t5 = await fetch("/api/profile");
          if (401 === t5.status) {
            e11 && eM2(false);
            return;
          }
          let a4 = await fetch("/api/progress/get", { credentials: "include" });
          if (!a4.ok) {
            e11 && eM2(false);
            return;
          }
          let n2 = await a4.json();
          if (eb(n2.progress)) {
            e11 && eM2(true);
            return;
          }
        } catch (t5) {
          e11 && eM2(false);
          return;
        }
        e11 && eM2(false);
      }
      t3();
      let a3 = () => t3();
      return window.addEventListener("storage", a3), () => {
        e11 = false, window.removeEventListener("storage", a3);
      };
    }, []);
    let ez2 = (0, s.useCallback)(() => {
      eh2(false), ej2(true), ek2(true), e_2(false), eE2(true), ev2(0), es2((e11) => (e11 + 1) % ea2.length);
    }, [ea2.length]);
    (0, s.useEffect)(() => {
      if (!eo2 || ed2) return;
      let e11 = false, t3 = setInterval(() => {
        let t4 = eA2.current, a3 = t4 && t4.getCurrentTime ? t4.getCurrentTime() : 0;
        if (!e11) if (!(a3 > 0) || !(a3 <= 6.5)) return;
        else e11 = true;
        ev2(Math.min(1, a3 / 3.8)), a3 > 3.8 && eh2(true);
      }, 200);
      return () => clearInterval(t3);
    }, [eo2, ed2]);
    let eI2 = (0, o.t0)();
    (0, s.useEffect)(() => {
      if (!ei2) return;
      if (!G2 || !(0, o.sb)().heroTrailers || (0, l.cl)()) {
        ec2(null), eh2(false), ev2(0);
        return;
      }
      if (void 0 !== ei2.trailerKey) return void ec2(ei2.trailerKey);
      let e11 = false;
      return fetch("https://api.themoviedb.org/3/".concat(ei2.type, "/").concat(ei2.id, "/videos?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1")).then((e12) => e12.json()).then((t3) => {
        var a3;
        if (e11) return;
        let n2 = null == (a3 = t3.results) ? void 0 : a3.find((e12) => "YouTube" === e12.site && "Trailer" === e12.type);
        n2 ? ec2(n2.key) : ec2(null);
      }).catch(() => {
        e11 || ec2(null);
      }), () => {
        e11 = true;
      };
    }, [ei2, eI2.heroTrailers, G2]), (0, s.useEffect)(() => {
      if (!ed2) return;
      let e11 = setTimeout(() => {
        ek2(false), e_2(true), eE2(false);
      }, 1500);
      return () => clearTimeout(e11);
    }, [ed2]), (0, s.useEffect)(() => {
      var e11, t3;
      if (!ed2 || !eA2.current) return;
      let a3 = null == (e11 = (t3 = eA2.current).getDuration) ? void 0 : e11.call(t3);
      if (a3 > 5) {
        let e12 = setTimeout(() => ez2(), 1e3 * Math.max(4, a3 - 13));
        return () => clearTimeout(e12);
      }
    }, [ed2, ez2]);
    let [eD2, eO2] = (0, s.useState)(false), eF2 = (0, s.useCallback)((e11) => {
      (0, l.RE)(e11 && e11.data), eO2(true), eh2(false), ec2(null);
    }, []);
    (0, s.useEffect)(() => {
      eO2(false);
    }, [ei2]), (0, s.useEffect)(() => {
      ed2 && (0, l.xZ)();
    }, [ed2]), (0, s.useEffect)(() => {
      if (!G2 || !(eD2 || (0, l.cl)())) return;
      let e11 = setTimeout(() => ez2(), l.vJ);
      return () => clearTimeout(e11);
    }, [eD2, ei2, ez2, G2]);
    let eR2 = (0, s.useCallback)(er2, []);
    return ei2 ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: "-mt-32", children: (0, n.jsxs)("section", { className: "relative h-screen w-full overflow-hidden hero-shell hero-desktop", children: [(0, n.jsxs)("div", { className: "absolute inset-0 z-0 hero-media", style: { opacity: eP2 && !ed2 ? 1 : 0, transform: eP2 ? "scale(1)" : "scale(1.05)", transition: "opacity 1s cubic-bezier(0.4,0,0.2,1),transform 1s cubic-bezier(0.4,0,0.2,1)" }, children: [(0, n.jsx)(r.default, { src: "https://image.tmdb.org/t/p/w1280".concat(ei2.backdrop_path || ei2.poster_path), alt: "poster", fill: true, priority: true, sizes: "100vw", quality: 80, className: "object-cover" }), (0, n.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" })] }), eo2 && (0, n.jsxs)("div", { className: "absolute inset-0 hero-media", style: { opacity: +!!ed2, transition: "opacity 1s cubic-bezier(0.4,0,0.2,1)" }, children: [(0, n.jsx)("div", { className: "absolute w-[150%] h-[150%] -top-[25%] -left-[25%] pointer-events-none", children: (0, n.jsx)(ex, { videoId: eo2, onReady: (e11) => {
      eA2.current = e11.target, e11.target.mute(), e11.target.playVideo();
    }, onError: eF2, opts: { width: "100%", height: "100%", playerVars: { autoplay: 1, mute: 1, controls: 0, modestbranding: 1, rel: 0, iv_load_policy: 3, disablekb: 1, playsinline: 1, fs: 0 } }, className: "w-full h-full" }) }), (0, n.jsx)("div", { className: "absolute inset-0 bg-black/20" })] }), (0, n.jsx)("div", { className: "absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent pointer-events-none hero-fade" }), (0, n.jsxs)("div", { className: "\n              absolute z-10 flex flex-col gap-8\n              left-1/2 -translate-x-1/2 items-center max-w-full\n              sm:left-10 sm:-translate-x-0 sm:max-w-[400px]\n              md:left-16 md:max-w-[440px]\n              hero-content\n            ", style: { top: eC2 ? "20%" : "30%", width: "clamp(220px, 40vw, 440px)", opacity: +!!eP2, transform: "translateY(".concat(eP2 ? 0 : -80, "px) scale(").concat(eS2 ? 0.75 : 1, ")"), transition: "all 0.7s cubic-bezier(0.4,0,0.2,1)" }, children: [(0, n.jsx)("div", { className: "flex w-full justify-center items-center", style: { opacity: +!!eP2, transform: "translateX(".concat(eP2 ? 0 : -40, "px) scale(").concat(eP2 ? 1 : 0.96, ")"), transition: "all 0.7s cubic-bezier(0.4,0,0.2,1) 50ms" }, children: ei2.logo_path ? (0, n.jsx)(r.default, { src: "https://image.tmdb.org/t/p/w500".concat(ei2.logo_path), alt: "logo", width: 440, height: 120, className: "object-contain mx-auto", style: { width: "100%", maxWidth: "440px", minWidth: "220px", maxHeight: "120px", margin: "0 auto" }, priority: true }) : (0, n.jsx)("h2", { className: "text-[32px] sm:text-[44px] md:text-[60px] font-extrabold drop-shadow-md text-white w-full text-center", children: ei2.title || ei2.name }) }, ei2.logo_path || ei2.title || ei2.name), (0, n.jsxs)("div", { className: "flex items-center justify-center gap-3 sm:gap-6 z-20 w-full hero-ctas", style: { opacity: +!!eP2, transform: "scale(".concat(eP2 ? 1 : 0.96, ")"), transition: "all 0.7s cubic-bezier(0.4,0,0.2,1) 180ms" }, children: [(0, et.f)(ei2) ? (0, n.jsx)("span", { className: "flex items-center gap-3 rounded-full border border-white/[0.2] bg-white/[0.12] px-6 py-2.5 text-lg font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.3)] backdrop-blur-md sm:text-xl", style: { minHeight: "48px", minWidth: "110px" }, children: (0, et.f)(ei2) }) : (0, n.jsxs)(d(), { href: "/watch/".concat(ei2.type, "/").concat(ei2.id), className: "flex items-center gap-3 rounded-full bg-white px-6 py-2.5 text-lg font-semibold text-black shadow-[0_14px_28px_rgba(0,0,0,0.3)] transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-[0_16px_32px_rgba(0,0,0,0.34)] active:scale-[0.98] sm:text-xl", style: { minHeight: "48px", minWidth: "110px" }, children: [(0, n.jsx)(m.gSK, { className: "text-xl" }), " Play"] }), (0, n.jsxs)("button", { onClick: () => er2(ei2), className: "flex items-center gap-3 rounded-full border border-white/18 bg-white/18 px-6 py-2.5 text-lg font-semibold text-white shadow-[0_14px_28px_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-white/24 hover:shadow-[0_16px_32px_rgba(0,0,0,0.34)] active:scale-[0.98] sm:text-xl", style: { minHeight: "48px", minWidth: "110px" }, children: [(0, n.jsx)(m.__w, { className: "text-xl" }), " Info"] }), eo2 && (0, n.jsx)("div", { className: "relative", style: { minHeight: "48px", minWidth: "48px" }, children: (0, n.jsxs)("button", { onClick: () => {
      eA2.current && (ey2 ? (eA2.current.unMute(), ej2(false)) : (eA2.current.mute(), ej2(true)));
    }, className: "relative flex items-center justify-center rounded-full border border-white/20 bg-white/24 p-3 shadow-[0_12px_24px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-white/32 hover:shadow-[0_16px_30px_rgba(0,0,0,0.34)] active:scale-[0.97]", style: { minHeight: "48px", minWidth: "48px" }, children: [!ed2 && (0, n.jsx)(eu.A, { progress: ef2, size: 48 }), ey2 ? (0, n.jsx)(m.FZ2, { className: "text-xl" }) : (0, n.jsx)(m.pPd, { className: "text-xl" })] }) })] })] }), (0, n.jsx)("button", { onClick: () => {
      ek2((e11) => {
        let t3 = !e11;
        return eE2(t3), t3 && e_2(false), t3;
      });
    }, className: "absolute bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/20 bg-white/24 p-3 shadow-[0_12px_24px_rgba(0,0,0,0.28)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-[1px] hover:bg-white/32 hover:shadow-[0_16px_30px_rgba(0,0,0,0.34)] active:scale-95 hero-toggle", style: { opacity: +!!eP2, transform: "translateY(".concat(24 * !eP2, "px)"), transition: "all 0.5s cubic-bezier(0.4,0,0.2,1) 700ms" }, children: eN2 ? (0, n.jsx)(m.Vr3, { className: "text-white text-2xl" }) : (0, n.jsx)(m.Ucs, { className: "text-white text-2xl" }) }), (0, n.jsx)("div", { className: "absolute bottom-0 w-full px-4 sm:px-6 md:px-16 pb-8 hero-trending", style: { opacity: +!!eN2, transform: "translateY(".concat(64 * !eN2, "px)"), transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)", pointerEvents: eN2 ? "auto" : "none" }, children: X2.length >= 5 && (0, n.jsx)(p.A, { title: "Trending Now", items: X2, noPadding: true, onSelect: eR2 }) })] }) }), (0, n.jsxs)("main", { className: "flex flex-col gap-6 px-4 sm:px-6 md:px-16 pb-24", children: [eT2 && (0, n.jsx)(f, { onSelect: eR2 }), (0, n.jsx)(Z, { onSelect: eR2 }), (0, n.jsx)(K, { onSelect: eR2 }), (0, n.jsx)(R, { onSelect: eR2 }), (0, n.jsx)(U, {}), (0, n.jsx)(D, { onSelect: eR2 }), (0, n.jsx)(W, { onSelect: eR2 }), (0, n.jsx)(V, { onSelect: eR2 }), (0, n.jsx)(ee.A, { featuredRails: Array.isArray(B2) && B2.length > 0 ? B2 : [{ key: "steamy-movies-fallback", label: "Steamy Movies", items: J2 }, { key: "steamy-series-fallback", label: "Steamy Series", items: Y2 }], onSelect: eR2, minHeight: 280, batchSize: 6 }), Array.isArray(H2) && H2.map((e11) => Array.isArray(e11.movies) && e11.movies.length >= 5 && (0, n.jsx)($.A, { minHeight: 280, children: (0, n.jsx)(p.A, { title: "By ".concat(e11.name), items: e11.movies, onSelect: eR2 }) }, e11.name))] }), el2 && (0, n.jsx)(em, { show: el2, onClose: () => er2(null) }), (0, n.jsx)(ep, {})] }) : (0, n.jsx)("div", { className: "min-h-screen flex items-center justify-center text-white text-xl", children: "No recent movies or shows found." });
  }
  function ey(e10) {
    let [t2, a2] = (0, s.useState)(null);
    return ((0, s.useEffect)(() => {
      function e11() {
        a2("undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent));
      }
      return e11(), window.addEventListener("resize", e11), window.addEventListener("orientationchange", e11), () => {
        window.removeEventListener("resize", e11), window.removeEventListener("orientationchange", e11);
      };
    }, []), null === t2) ? (0, n.jsx)("div", { className: "min-h-screen bg-black" }) : t2 ? (0, n.jsx)(eh, { ...e10 }) : (0, n.jsx)(ev, { ...e10 });
  }
  let ej = (0, i.default)(() => a.e(8075).then(a.bind(a, 8075)), { loadableGenerated: { webpack: () => [8075] }, loading: () => (0, n.jsx)("div", { className: "min-h-screen bg-black" }) }), eN = (0, i.default)(() => a.e(5525).then(a.bind(a, 5525)), { loadableGenerated: { webpack: () => [5525] }, loading: () => (0, n.jsx)("div", { className: "min-h-screen bg-black" }) });
  function ek(e10) {
    let [t2, a2] = (0, s.useState)(false);
    return (0, s.useEffect)(() => {
      let e11 = () => a2(window.innerWidth <= 768);
      return e11(), window.addEventListener("resize", e11), () => window.removeEventListener("resize", e11);
    }, []), t2 ? (0, n.jsx)(eN, { ...e10 }) : (0, n.jsx)(ej, { ...e10 });
  }
  let eS = ["trendingTv", "popularTv", "topRatedTv", "onAir", "anime", "crime", "comedy", "family", "kids", "action", "documentary", "scifi", "drama", "mystery", "reality", "western", "war", "fantasy", "adventure", "romance", "horror", "thriller", "soap", "talk", "news", "music", "steamySeries", "featuredRails"], e_ = (0, i.default)(() => a.e(6944).then(a.bind(a, 6944)), { loadableGenerated: { webpack: () => [6944] }, loading: () => (0, n.jsx)("div", { className: "min-h-screen bg-black" }) }), eC = (0, i.default)(() => a.e(1700).then(a.bind(a, 1700)), { loadableGenerated: { webpack: () => [1700] }, loading: () => (0, n.jsx)("div", { className: "min-h-screen bg-black" }) });
  function eE(e10) {
    let [t2, a2] = (0, s.useState)("desktop"), i2 = { ...e10 };
    return (eS.forEach((e11) => {
      Array.isArray(i2[e11]) || (i2[e11] = []);
    }), (0, s.useEffect)(() => {
      function e11() {
        let e12 = window.innerWidth;
        e12 <= 768 ? a2("mobile") : e12 <= 1200 ? a2("mid") : a2("desktop");
      }
      return e11(), window.addEventListener("resize", e11), () => window.removeEventListener("resize", e11);
    }, []), "mobile" === t2) ? (0, n.jsx)(eC, { ...i2 }) : (0, n.jsx)(e_, { ...i2 });
  }
  var eT = a(3842);
  let eM = (0, i.default)(() => a.e(7889).then(a.bind(a, 7889)), { loadableGenerated: { webpack: () => [7889] }, loading: () => (0, n.jsx)("div", { className: "min-h-screen bg-black" }) }), eA = (0, i.default)(() => a.e(7775).then(a.bind(a, 7775)), { loadableGenerated: { webpack: () => [7775] }, loading: () => (0, n.jsx)("div", { className: "min-h-screen bg-black" }) });
  function eP(e10) {
    let [t2, a2] = (0, s.useState)(false), { index: i2 } = (0, eT.N)(), [l2, r2] = (0, s.useState)(null);
    (0, s.useEffect)(() => {
      let e11 = () => a2(window.innerWidth <= 768);
      return e11(), window.addEventListener("resize", e11), () => window.removeEventListener("resize", e11);
    }, []);
    let o2 = (0, s.useRef)("");
    (0, s.useEffect)(() => {
      let t3 = i2 && i2.generatedAt;
      if (!t3 || t3 === e10.generatedAt || o2.current === t3) return;
      o2.current = t3;
      let a3 = 0, n2 = (e11) => fetch("/api/uhd-tab", { cache: "no-store" }).then((e12) => e12.ok ? e12.json() : null).then((s2) => {
        s2 && (((s2.films || []).length || (s2.series || []).length) && r2(s2), e11 && s2.generatedAt !== t3 && (a3 = setTimeout(() => n2(false), 7e4)));
      }).catch(() => {
      });
      return n2(true), () => clearTimeout(a3);
    }, [i2, e10.generatedAt]);
    let c2 = (0, s.useMemo)(() => l2 ? { ...e10, films: l2.films || [], series: l2.series || [], featuredRails: l2.featuredRails || [], featured: (e10.featured || []).length ? e10.featured : l2.featured || [] } : e10, [e10, l2]);
    return t2 ? (0, n.jsx)(eA, { ...c2 }) : (0, n.jsx)(eM, { ...c2 });
  }
  var eL = a(2404), ez = a(2425), eI = a(6571), eD = a(3856), eO = a(3221), eF = a(8091), eR = a.n(eF), eH = a(5985);
  let eW = "watchStats:v1", eq = (e10) => {
    let t2 = e10.getFullYear(), a2 = String(e10.getMonth() + 1).padStart(2, "0"), n2 = String(e10.getDate()).padStart(2, "0");
    return "".concat(t2, "-").concat(a2, "-").concat(n2);
  };
  async function eJ() {
    var e10, t2, a2, n2, s2;
    let i2 = {};
    try {
      i2 = JSON.parse(localStorage.getItem("continueWatching") || "{}");
    } catch (e11) {
      return null;
    }
    let l2 = Object.values(i2).filter((e11) => e11 && ("movie" === e11.type || "tv" === e11.type) && Number.isFinite(Number(e11.id)));
    if (0 === l2.length) return null;
    let r2 = /* @__PURE__ */ new Map();
    for (let e11 of l2) {
      let i3 = Number(e11.id), l3 = "".concat(e11.type, ":").concat(i3), o3 = 0;
      if ("tv" === e11.type && e11.show_progress && Object.keys(e11.show_progress).length) for (let t3 of Object.values(e11.show_progress)) o3 += (null == t3 || null == (n2 = t3.progress) ? void 0 : n2.watched) || 0;
      else o3 = (null == (s2 = e11.progress) ? void 0 : s2.watched) || 0;
      let c3 = (null == (t2 = e11.progress) ? void 0 : t2.duration) > 0 ? Math.min(1, ((null == (a2 = e11.progress) ? void 0 : a2.watched) || 0) / e11.progress.duration) : 0, d3 = r2.get(l3);
      r2.set(l3, { id: i3, type: e11.type, seconds: ((null == d3 ? void 0 : d3.seconds) || 0) + o3, completion: Math.max((null == d3 ? void 0 : d3.completion) || 0, c3), at: Math.max((null == d3 ? void 0 : d3.at) || 0, e11.updatedAt || 0) });
    }
    let o2 = [...r2.values()], c2 = o2.reduce((e11, t3) => e11 + t3.seconds, 0) / 3600, d2 = o2.filter((e11) => "movie" === e11.type).length, h2 = o2.filter((e11) => e11.completion >= 0.9).length, u2 = {};
    try {
      u2 = JSON.parse(localStorage.getItem("watchLog") || "{}");
    } catch (e11) {
    }
    let m2 = {};
    for (let e11 of o2) {
      if (!e11.at) continue;
      let t3 = eq(new Date(e11.at));
      m2[t3] = (m2[t3] || 0) + e11.seconds;
    }
    let p2 = { ...m2 };
    for (let [e11, t3] of Object.entries(u2)) p2[e11] = Math.max(p2[e11] || 0, Number(t3) || 0);
    let x2 = /* @__PURE__ */ new Date(), f2 = new Date(x2);
    f2.setDate(x2.getDate() - (x2.getDay() + 6) % 7);
    let g2 = [], w2 = [0, 0, 0, 0, 0, 0, 0];
    for (let e11 = 15; e11 >= 0; e11--) {
      let t3 = [];
      for (let a3 = 0; a3 < 7; a3++) {
        let n3 = new Date(f2);
        n3.setDate(f2.getDate() - 7 * e11 + a3);
        let s3 = eq(n3), i3 = n3 > x2 ? -1 : p2[s3] || 0;
        t3.push({ day: s3, seconds: i3 }), i3 > 0 && (w2[a3] += i3);
      }
      g2.push(t3);
    }
    let b2 = {};
    try {
      b2 = JSON.parse(sessionStorage.getItem(eW) || "{}");
    } catch (e11) {
    }
    let v2 = o2.filter((e11) => !b2["".concat(e11.type, ":").concat(e11.id)]).slice(0, 25);
    await Promise.all(v2.map(async (e11) => {
      try {
        let t3 = await fetch("https://api.themoviedb.org/3/".concat(e11.type, "/").concat(e11.id, "?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1", "&language=en-US")).then((e12) => e12.json());
        b2["".concat(e11.type, ":").concat(e11.id)] = { genres: (t3.genres || []).map((e12) => e12.name), vote: t3.vote_average || null };
      } catch (t3) {
        b2["".concat(e11.type, ":").concat(e11.id)] = { genres: [], vote: null };
      }
    }));
    try {
      sessionStorage.setItem(eW, JSON.stringify(b2));
    } catch (e11) {
    }
    let y2 = /* @__PURE__ */ new Map(), j2 = 0, N2 = 0;
    for (let e11 of o2) {
      let t3 = b2["".concat(e11.type, ":").concat(e11.id)];
      if (!t3) continue;
      let a3 = Math.max(e11.seconds, 600);
      for (let e12 of t3.genres) y2.set(e12, (y2.get(e12) || 0) + a3);
      t3.vote && (j2 += t3.vote * a3, N2 += a3);
    }
    let k2 = [...y2.entries()].sort((e11, t3) => t3[1] - e11[1]).slice(0, 5), S2 = (null == (e10 = k2[0]) ? void 0 : e10[1]) || 1;
    return { hours: c2, titles: o2.length, finished: h2, moviePct: Math.round(d2 / o2.length * 100), avgRating: N2 ? j2 / N2 : null, genres: k2.map((e11) => {
      let [t3, a3] = e11;
      return { name: t3, pct: Math.round(a3 / S2 * 100) };
    }), weeks: g2, dow: w2 };
  }
  let eU = "text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30";
  function eV() {
    var e10;
    let [t2, a2] = (0, s.useState)("loading");
    if ((0, s.useEffect)(() => {
      let e11 = false;
      return eJ().then((t3) => {
        e11 || a2(t3);
      }).catch(() => {
        e11 || a2(null);
      }), () => {
        e11 = true;
      };
    }, []), null === t2) return null;
    if ("loading" === t2) return (0, n.jsx)("div", { className: "mt-6 grid animate-pulse grid-cols-3 gap-3", children: [0, 1, 2].map((e11) => (0, n.jsx)("div", { className: "h-[72px] rounded-xl bg-white/[0.05]" }, e11)) });
    let i2 = [[(e10 = t2.hours) < 1 ? "".concat(Math.round(60 * e10), "m") : e10 < 10 ? "".concat(e10.toFixed(1), "h") : "".concat(Math.round(e10), "h"), "Watched"], [String(t2.titles), "Titles"], [String(t2.finished), "Finished"]], l2 = Math.max(...t2.dow, 1), r2 = ["M", "T", "W", "T", "F", "S", "S"];
    return (0, n.jsxs)("div", { className: "mt-7 w-full border-t border-white/[0.07] pt-6", children: [(0, n.jsx)("p", { className: eU, children: "Your stats" }), (0, n.jsx)("div", { className: "mt-3.5 grid grid-cols-3 gap-3", children: i2.map((e11) => {
      let [t3, a3] = e11;
      return (0, n.jsxs)("div", { className: "rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3.5 text-center", children: [(0, n.jsx)("p", { className: "text-[22px] font-bold leading-none text-white", children: t3 }), (0, n.jsx)("p", { className: "mt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/35", children: a3 })] }, a3);
    }) }), (0, n.jsxs)("div", { className: "mt-6", children: [(0, n.jsxs)("div", { className: "flex items-baseline justify-between", children: [(0, n.jsx)("p", { className: eU, children: "Activity" }), (0, n.jsxs)("p", { className: "text-[10px] uppercase tracking-[0.14em] text-white/20", children: ["Last ", 16, " weeks"] })] }), (0, n.jsxs)("div", { className: "mt-3 flex max-w-[440px] gap-2", children: [(0, n.jsxs)("div", { className: "flex flex-col justify-between py-[1px] text-[9px] font-semibold uppercase text-white/25", children: [(0, n.jsx)("span", { children: "M" }), (0, n.jsx)("span", { children: "T" }), (0, n.jsx)("span", { children: "S" })] }), (0, n.jsx)("div", { className: "flex flex-1 gap-[3px]", children: t2.weeks.map((e11, t3) => (0, n.jsx)("div", { className: "flex flex-1 flex-col gap-[3px]", children: e11.map((e12) => {
      var t4;
      return e12.seconds < 0 ? (0, n.jsx)("span", { className: "aspect-square w-full rounded-[3px]" }, e12.day) : (0, n.jsx)("span", { title: "".concat(e12.day, " \u2014 ").concat(e12.seconds ? "".concat(Math.max(1, Math.round(e12.seconds / 60)), " min") : "nothing"), className: "aspect-square w-full rounded-[3px] bg-white transition-opacity", style: { opacity: (t4 = e12.seconds) <= 0 ? 0.055 : t4 < 1800 ? 0.2 : t4 < 5400 ? 0.38 : t4 < 10800 ? 0.6 : 0.9 } }, e12.day);
    }) }, t3)) })] })] }), (0, n.jsxs)("div", { className: "mt-6 grid gap-6 md:grid-cols-2", children: [t2.genres.length > 0 && (0, n.jsxs)("div", { children: [(0, n.jsx)("p", { className: eU, children: "Genres" }), (0, n.jsx)("div", { className: "mt-3 space-y-2.5", children: t2.genres.map((e11) => (0, n.jsxs)("div", { className: "flex items-center gap-3", children: [(0, n.jsx)("span", { className: "w-24 flex-shrink-0 truncate text-[12px] text-white/60", children: e11.name }), (0, n.jsx)("span", { className: "relative h-[3px] flex-1 overflow-hidden rounded-full bg-white/[0.08]", children: (0, n.jsx)("span", { className: "absolute inset-y-0 left-0 rounded-full bg-white/70", style: { width: "".concat(e11.pct, "%") } }) })] }, e11.name)) })] }), (0, n.jsxs)("div", { children: [(0, n.jsx)("p", { className: eU, children: "Rhythm" }), (0, n.jsx)("div", { className: "mt-3 flex h-[76px] items-end gap-2", children: t2.dow.map((e11, t3) => (0, n.jsxs)("div", { className: "flex flex-1 flex-col items-center gap-1.5", children: [(0, n.jsx)("div", { className: "flex h-[56px] w-full items-end", children: (0, n.jsx)("span", { className: "w-full rounded-t-[3px] bg-white/70", style: { height: "".concat(Math.max(4, Math.round(e11 / l2 * 100)), "%"), opacity: e11 > 0 ? 1 : 0.15 } }) }), (0, n.jsx)("span", { className: "text-[9px] font-semibold uppercase text-white/25", children: r2[t3] })] }, t3)) })] })] }), (0, n.jsxs)("p", { className: "mt-5 text-[12px] text-white/40", children: [t2.moviePct >= 50 ? "".concat(t2.moviePct, "% movies") : "".concat(100 - t2.moviePct, "% series"), t2.genres[0] ? "  \xB7  mostly ".concat(t2.genres[0].name.toLowerCase()) : "", t2.avgRating ? "  \xB7  avg \u2605 ".concat(t2.avgRating.toFixed(1)) : ""] })] });
  }
  let eY = "67B.";
  function eB(e10) {
    var t2;
    let { onPick: a2 } = e10, [i2, l2] = (0, s.useState)(null), [r2, o2] = (0, s.useState)(false), [c2, d2] = (0, s.useState)(""), [h2, u2] = (0, s.useState)("idle"), [m2, p2] = (0, s.useState)(null);
    return ((0, s.useEffect)(() => {
      l2((function() {
        let e11 = y().slice(0, 12);
        if (e11.length < 2) return null;
        let t3 = e11.map((e12) => [+("tv" === e12.type), e12.id, Math.round(100 * e12.weight)]);
        try {
          return eY + btoa(JSON.stringify(t3)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
        } catch (e12) {
          return null;
        }
      })());
    }, []), i2) ? (0, n.jsxs)("div", { className: "mt-7 w-full border-t border-white/[0.07] pt-6", children: [(0, n.jsx)("p", { className: "text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: "Blend" }), (0, n.jsx)("p", { className: "mt-2 text-[13px] text-white/55", children: "Trade taste codes with a friend \u2014 see how your tastes match and what fits you both." }), (0, n.jsxs)("div", { className: "mt-3.5 flex flex-wrap items-center gap-2.5", children: [(0, n.jsx)("code", { className: "max-w-[220px] truncate rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-[11px] text-white/50", children: i2 }), (0, n.jsx)("button", { onClick: () => {
      var e11;
      null == (e11 = navigator.clipboard) || e11.writeText(i2).then(() => {
        o2(true), setTimeout(() => o2(false), 1600);
      });
    }, className: "h-9 rounded-full border border-white/[0.14] bg-white/[0.06] px-4 text-[12px] font-semibold text-white/85 transition-colors hover:bg-white/[0.1]", children: r2 ? "Copied" : "Copy my code" })] }), (0, n.jsxs)("div", { className: "mt-3 flex flex-wrap items-center gap-2.5", children: [(0, n.jsx)("input", { value: c2, onChange: (e11) => {
      d2(e11.target.value), "error" === h2 && u2("idle");
    }, placeholder: "Paste a friend's code\u2026", className: "h-9 w-[260px] rounded-full border border-white/[0.1] bg-white/[0.04] px-4 text-[12.5px] text-white outline-none placeholder:text-white/30 focus:border-white/[0.3]" }), (0, n.jsx)("button", { onClick: () => {
      let e11 = (function(e12) {
        let t3 = e12.trim();
        if (!t3.startsWith(eY)) return null;
        try {
          let e13 = t3.slice(eY.length).replace(/-/g, "+").replace(/_/g, "/"), a3 = JSON.parse(atob(e13));
          if (!Array.isArray(a3)) return null;
          let n2 = a3.map((e14) => ({ type: 1 === e14[0] ? "tv" : "movie", id: Number(e14[1]), weight: Math.max(0.05, Math.min(1, Number(e14[2]) / 100)) })).filter((e14) => Number.isFinite(e14.id) && e14.id > 0);
          return n2.length >= 2 ? n2 : null;
        } catch (e13) {
          return null;
        }
      })(c2);
      if (!e11) return void u2("error");
      u2("loading"), p2(null), fetch("/api/for-you", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ seeds: y(), friendSeeds: e11, mode: "blend" }) }).then((e12) => e12.ok ? e12.json() : null).then((e12) => {
        e12 && Array.isArray(e12.items) && "number" == typeof e12.compatibility ? (p2({ pct: Math.min(99, Math.round(100 * e12.compatibility)), items: e12.items.slice(0, 8) }), u2("idle")) : u2("error");
      }).catch(() => u2("error"));
    }, disabled: !c2.trim() || "loading" === h2, className: "h-9 rounded-full px-5 text-[12px] font-semibold transition ".concat(c2.trim() && "loading" !== h2 ? "bg-white text-black" : "cursor-default border border-white/[0.1] bg-white/[0.04] text-white/30"), children: "loading" === h2 ? "Blending\u2026" : "Blend" }), "error" === h2 && (0, n.jsx)("span", { className: "text-[12px] text-white/45", children: "That code didn\u2019t parse \u2014 check it and try again." })] }), m2 && (0, n.jsxs)("div", { className: "mt-5", children: [(0, n.jsxs)("div", { className: "flex items-baseline gap-3", children: [(0, n.jsxs)("span", { className: "text-[34px] font-bold leading-none text-white", children: [m2.pct, "%"] }), (0, n.jsxs)("span", { className: "text-[13px] text-white/55", children: ["taste match \xA0\xB7\xA0 ", (t2 = m2.pct) >= 75 ? "Practically movie soulmates" : t2 >= 50 ? "Plenty to share" : t2 >= 25 ? "An acquired blend" : "Opposites night"] })] }), m2.items.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("p", { className: "mt-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: "For both of you" }), (0, n.jsx)("div", { className: "mt-3 grid grid-cols-4 gap-2.5 sm:grid-cols-8", children: m2.items.map((e11) => (0, n.jsx)("button", { onClick: () => null == a2 ? void 0 : a2({ id: e11.id, type: e11.type }), title: e11.title || e11.name, className: "group relative aspect-[2/3] overflow-hidden rounded-lg ring-1 ring-white/[0.08] transition hover:ring-white/[0.4]", children: (e11.poster_path || e11.backdrop_path) && (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w342".concat(e11.poster_path || e11.backdrop_path), alt: e11.title || e11.name || "", loading: "lazy", decoding: "async", className: "h-full w-full object-cover opacity-[0.88] transition group-hover:opacity-100" }) }, "".concat(e11.type, "-").concat(e11.id))) })] })] })] }) : null;
  }
  let eK = (0, i.default)(() => a.e(1860).then(a.bind(a, 9479)), { loadableGenerated: { webpack: () => [9479] }, ssr: false, loading: () => (0, n.jsx)(ea.A, {}) }), eG = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Romance", "Sci-Fi", "Thriller", "Animation"];
  function eX(e10) {
    return new Promise((t2) => {
      let a2 = new FileReader();
      a2.onload = (e11) => {
        var a3;
        return t2(null == (a3 = e11.target) ? void 0 : a3.result);
      }, a2.readAsDataURL(e10);
    });
  }
  function eQ(e10) {
    if (!e10 || "object" != typeof e10) return [];
    let t2 = Object.entries(e10).map((e11) => {
      let [t3, a3] = e11;
      return { key: t3, id: Number(null == a3 ? void 0 : a3.id), type: (null == a3 ? void 0 : a3.type) === "movie" ? "movie" : "tv", season: null == a3 ? void 0 : a3.season, episode: null == a3 ? void 0 : a3.episode, updatedAt: null == a3 ? void 0 : a3.updatedAt, title: null == a3 ? void 0 : a3.title, name: null == a3 ? void 0 : a3.name, progress: null == a3 ? void 0 : a3.progress };
    }).filter((e11) => Number.isFinite(e11.id)), a2 = /* @__PURE__ */ new Map();
    for (let e11 of t2) {
      let t3 = "".concat(e11.type, "-").concat(e11.id), n2 = a2.get(t3);
      (!n2 || (e11.updatedAt || 0) > (n2.updatedAt || 0)) && a2.set(t3, e11);
    }
    return Array.from(a2.values()).sort((e11, t3) => (t3.updatedAt || 0) - (e11.updatedAt || 0));
  }
  function eZ(e10) {
    let { show: t2, onClose: a2, userId: i2 } = e10, [l2, o2] = (0, s.useState)(null), [c2, d2] = (0, s.useState)(null), [h2, u2] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      let e11 = window.matchMedia("(max-width: 767px)"), t3 = () => u2(e11.matches);
      return t3(), e11.addEventListener("change", t3), () => e11.removeEventListener("change", t3);
    }, []);
    let [p2, x2] = (0, s.useState)(false), [f2, g2] = (0, s.useState)(""), [b2, v2] = (0, s.useState)({}), [y2, j2] = (0, s.useState)(24), [N2, k2] = (0, s.useState)(false), [S2, _2] = (0, s.useState)({}), [C2, E2] = (0, s.useState)(false), T2 = (function(e11, t3) {
      let [a3, n2] = (0, s.useState)(e11);
      return (0, s.useEffect)(() => {
        let t4 = setTimeout(() => n2(e11), 180);
        return () => clearTimeout(t4);
      }, [e11, 180]), a3;
    })(f2, 180);
    (0, s.useEffect)(() => {
      if (!t2) {
        g2(""), v2({});
        return;
      }
      function e11(e12) {
        "Escape" === e12.key && a2();
      }
      return (0, w.jz)(), window.addEventListener("keydown", e11), () => {
        (0, w.yq)(), window.removeEventListener("keydown", e11);
      };
    }, [t2, a2]), (0, s.useEffect)(() => {
      t2 && (x2(true), fetch(i2 ? "/api/profile?id=".concat(i2) : "/api/profile").then(async (e11) => 401 === e11.status ? (window.location.href = "/auth", null) : e11.json()).then((e11) => {
        if (!e11 || e11.error || !Array.isArray(e11.watchlist)) return void o2(null);
        let t3 = { name: e11.name, email: e11.email, tag: e11.tag, joinDate: new Date(e11.joinDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }), avatar: e11.avatar || "", banner: e11.banner || "", mood: e11.mood || "", genres: Array.isArray(e11.genres) ? e11.genres : [], quote: e11.quote || "", showWatchHistory: !!e11.showWatchHistory, canViewWatchHistory: !!e11.canViewWatchHistory, watchHistory: eQ(e11.watchHistory), watchlist: e11.watchlist.map((e12) => ({ showId: e12.showId, type: e12.type, poster: "/placeholder.png", title: e12.title || e12.name || "", name: e12.name || e12.title || "", poster_path: e12.poster_path || "", addedAt: e12.addedAt || "" })) };
        o2(t3), _2({ mood: t3.mood, genres: t3.genres, quote: t3.quote, avatar: t3.avatar, banner: t3.banner, showWatchHistory: t3.showWatchHistory });
      }).catch(() => o2(null)).finally(() => x2(false)));
    }, [t2, i2]), (0, s.useEffect)(() => {
      l2 && (async () => {
        let e11 = false, t3 = [...l2.watchlist];
        for (let a3 = 0; a3 < Math.min(y2, t3.length); a3++) {
          let n2 = t3[a3];
          if ("/placeholder.png" === n2.poster || !n2.poster) try {
            let t4 = await fetch("https://api.themoviedb.org/3/".concat(n2.type, "/").concat(n2.showId, "?api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1", "&language=en-US")), a4 = await t4.json();
            n2.poster = a4.poster_path ? "https://image.tmdb.org/t/p/w342".concat(a4.poster_path) : "/placeholder.png", n2.poster_path = a4.poster_path || "", n2.title = a4.title || a4.name || "", n2.name = a4.name || a4.title || "", e11 = true;
          } catch (e12) {
          }
        }
        e11 && o2((e12) => e12 ? { ...e12, watchlist: t3 } : e12);
      })();
    }, [l2, y2]), (0, s.useEffect)(() => {
      if (!l2 || !l2.canViewWatchHistory || 0 === l2.watchHistory.length) return;
      let e11 = "a46c50a0ccb1bafe2b15665df7fad7e1";
      e11 && (async () => {
        E2(true);
        let t3 = false, a3 = [...l2.watchHistory];
        for (let n2 = 0; n2 < Math.min(12, a3.length); n2++) {
          let s2 = a3[n2];
          if (!s2.poster && !s2.backdrop) try {
            let a4 = await fetch("https://api.themoviedb.org/3/".concat(s2.type, "/").concat(s2.id, "?api_key=").concat(e11, "&language=en-US")), n3 = await a4.json();
            s2.poster = n3.poster_path ? "https://image.tmdb.org/t/p/w342".concat(n3.poster_path) : "/placeholder.png", s2.backdrop = n3.backdrop_path ? "https://image.tmdb.org/t/p/w780".concat(n3.backdrop_path) : "", s2.title = "movie" === s2.type ? n3.title || s2.title : n3.name || s2.title, s2.name = "tv" === s2.type ? n3.name || s2.name : n3.title || s2.name, t3 = true;
          } catch (e12) {
          }
        }
        t3 && o2((e12) => e12 ? { ...e12, watchHistory: a3 } : e12), E2(false);
      })();
    }, [l2]);
    let M2 = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      if (!t2 || !M2.current) return;
      function e11(e12) {
        let { scrollTop: t3, scrollHeight: a4, clientHeight: n2 } = e12.target;
        t3 + n2 + 180 > a4 && l2 && y2 < l2.watchlist.length && j2((e13) => Math.min(e13 + 12, l2.watchlist.length));
      }
      let a3 = M2.current;
      return a3.addEventListener("scroll", e11), () => a3.removeEventListener("scroll", e11);
    }, [t2, l2, y2]);
    let A2 = s.useMemo(() => {
      if (!l2) return [];
      let e11 = l2.watchlist;
      if (T2.trim()) {
        let t3 = T2.toLowerCase();
        e11 = e11.filter((e12) => e12.title && e12.title.toLowerCase().includes(t3) || e12.name && e12.name.toLowerCase().includes(t3));
      }
      return e11.slice(0, y2);
    }, [l2, T2, y2]), P2 = (e11, t3) => "".concat(e11, "-").concat(t3), L2 = async (e11, t3) => {
      if (!l2) return;
      let a3 = P2(e11, t3);
      v2((e12) => ({ ...e12, [a3]: "pending" }));
      try {
        let n2 = await fetch("/api/profile", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ showId: e11, type: t3 }) });
        (await n2.json()).ok ? ((0, G.Bp)({ id: e11, type: t3 }), v2((e12) => ({ ...e12, [a3]: "success" })), setTimeout(() => {
          o2((a4) => a4 ? { ...a4, watchlist: a4.watchlist.filter((a5) => a5.showId !== e11 || a5.type !== t3) } : a4), v2((e12) => {
            let t4 = { ...e12 };
            return delete t4[a3], t4;
          });
        }, 400)) : (v2((e12) => ({ ...e12, [a3]: "fail" })), setTimeout(() => {
          v2((e12) => {
            let t4 = { ...e12 };
            return delete t4[a3], t4;
          });
        }, 600));
      } catch (e12) {
        v2((e13) => ({ ...e13, [a3]: "fail" })), setTimeout(() => {
          v2((e13) => {
            let t4 = { ...e13 };
            return delete t4[a3], t4;
          });
        }, 600);
      }
    };
    async function z2() {
      if ((await fetch("/api/profile", { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ mood: S2.mood, genres: S2.genres, quote: S2.quote, avatar: S2.avatar, banner: S2.banner, showWatchHistory: S2.showWatchHistory }) })).ok) {
        k2(false);
        let e11 = await fetch("/api/profile").then((e12) => e12.json());
        e11.error || (o2({ name: e11.name, email: e11.email, tag: e11.tag, joinDate: new Date(e11.joinDate).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }), avatar: e11.avatar || "", banner: e11.banner || "", mood: e11.mood || "", genres: Array.isArray(e11.genres) ? e11.genres : [], quote: e11.quote || "", showWatchHistory: !!e11.showWatchHistory, canViewWatchHistory: !!e11.canViewWatchHistory, watchHistory: eQ(e11.watchHistory), watchlist: e11.watchlist || [] }), _2((t3) => ({ ...t3, avatar: e11.avatar, banner: e11.banner, showWatchHistory: !!e11.showWatchHistory })));
      }
    }
    return t2 ? (0, n.jsxs)("div", { id: "overlay-bg", className: "fixed inset-0 z-[250] flex items-center justify-center bg-black/80 overflow-y-auto scrollbar-custom scroll-smooth ".concat(h2 ? "py-0" : "py-8"), style: { fontFamily: "Inter, Sora, SF Pro Display, sans-serif", backdropFilter: h2 ? void 0 : "blur(6px)", overscrollBehaviorY: "contain" }, onClick: function(e11) {
      "overlay-bg" === e11.target.id && a2();
    }, children: [(0, n.jsxs)("div", { style: { background: "#0c0d11", boxShadow: h2 ? "none" : "0 40px 100px rgba(0,0,0,0.7)", padding: h2 ? "3.6rem 1rem calc(env(safe-area-inset-bottom) + 2rem)" : "3.2rem 3rem 2.6rem 3rem", minHeight: h2 ? void 0 : 510, maxHeight: h2 ? void 0 : "90vh", overflowY: "auto" }, onClick: (e11) => e11.stopPropagation(), className: "jsx-a56d74a659a848a4 " + "ov-panel ov-profile-panel relative w-full overflow-hidden animate-fadeUp scrollbar-custom scroll-smooth ".concat(h2 ? "min-h-[100dvh] rounded-none" : "max-w-5xl rounded-[28px] border border-white/[0.08]"), children: [!i2 && (0, n.jsx)("button", { onClick: async () => {
      try {
        await fetch("/api/auth/logout", { method: "POST" });
      } catch (e11) {
      }
      window.location.href = "/auth";
    }, "aria-label": "Logout", style: { border: "none" }, className: "jsx-a56d74a659a848a4 absolute top-6 left-6 z-30 w-9 h-9 rounded-full flex items-center justify-center bg-white/20 text-white text-xl shadow-sm hover:bg-white/30 transition", children: (0, n.jsx)(m.axc, {}) }), (0, n.jsx)("button", { onClick: a2, "aria-label": "Close", style: { border: "none" }, className: "jsx-a56d74a659a848a4 absolute top-6 right-6 z-30 w-9 h-9 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/70 text-white text-2xl shadow-sm transition", children: (0, n.jsx)(m.QCr, {}) }), N2 ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 relative w-full mt-4 mb-7", children: [(0, n.jsx)("div", { style: { backgroundImage: "url(".concat(S2.banner || "", ")"), backgroundSize: "cover" }, className: "jsx-a56d74a659a848a4 h-36 w-full overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.07]" }), (0, n.jsx)("input", { type: "file", accept: "image/*", onChange: async (e11) => {
      var t3;
      let a3 = null == (t3 = e11.target.files) ? void 0 : t3[0];
      a3 && _2({ ...S2, banner: await eX(a3) });
    }, className: "jsx-a56d74a659a848a4 absolute top-2 right-2 text-xs text-white bg-black/40 rounded-md px-2 py-1 backdrop-blur-sm" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 absolute -bottom-8 left-6 w-20 h-20 rounded-full overflow-hidden border-4 border-white/20 bg-gray-600", children: S2.avatar ? (0, n.jsx)("img", { src: S2.avatar, alt: "avatar", className: "jsx-a56d74a659a848a4 object-cover w-full h-full" }) : (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 w-full h-full flex items-center justify-center text-white text-3xl font-bold", children: (null == l2 ? void 0 : l2.name) ? l2.name.split(" ").map((e11) => e11[0]).join("").slice(0, 2).toUpperCase() : "U#" }) }), (0, n.jsx)("input", { type: "file", accept: "image/*", onChange: async (e11) => {
      var t3;
      let a3 = null == (t3 = e11.target.files) ? void 0 : t3[0];
      a3 && _2({ ...S2, avatar: await eX(a3) });
    }, className: "jsx-a56d74a659a848a4 absolute bottom-0 left-28 text-xs text-white bg-black/40 rounded-md px-2 py-1 backdrop-blur-sm" })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 pt-10 pb-4 text-white flex flex-col gap-4", children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 w-full max-w-xs flex flex-col items-start", children: [(0, n.jsx)("label", { className: "jsx-a56d74a659a848a4 mb-1 ml-1 text-sm text-white/80", children: "Mood" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 flex gap-2", children: ["\u{1F600}", "\u{1F60E}", "\u{1F622}", "\u{1F621}", "\u{1F634}", "\u{1F92F}", "\u{1F60D}", "\u{1F929}"].map((e11) => (0, n.jsx)("button", { type: "button", onClick: () => _2({ ...S2, mood: e11 }), className: "jsx-a56d74a659a848a4 " + "text-2xl ".concat(S2.mood === e11 ? "opacity-100" : "opacity-50"), children: e11 }, e11)) })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 w-full max-w-xl flex flex-col items-start", children: [(0, n.jsx)("label", { className: "jsx-a56d74a659a848a4 mb-1 ml-1 text-sm text-white/80", children: "Favorite Genres" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 flex flex-wrap gap-2", children: eG.map((e11) => {
      var t3;
      return (0, n.jsxs)("label", { className: "jsx-a56d74a659a848a4 text-xs text-white flex items-center gap-1 px-2 py-1 bg-white/20 rounded-full", children: [(0, n.jsx)("input", { type: "checkbox", checked: null == (t3 = S2.genres) ? void 0 : t3.includes(e11), onChange: (t4) => {
        let a3 = t4.target.checked;
        _2((t5) => {
          let n2 = new Set(t5.genres || []);
          return a3 ? n2.add(e11) : n2.delete(e11), { ...t5, genres: Array.from(n2) };
        });
      }, className: "jsx-a56d74a659a848a4 accent-blue-500" }), e11] }, e11);
    }) })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 w-full max-w-xl flex flex-col items-start mt-1", children: [(0, n.jsx)("label", { className: "jsx-a56d74a659a848a4 mb-1 ml-1 text-sm text-white/80", children: "Favorite Quote" }), (0, n.jsx)("input", { value: S2.quote || "", onChange: (e11) => _2({ ...S2, quote: e11.target.value }), className: "jsx-a56d74a659a848a4 w-full px-3 py-2 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60" })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 w-full max-w-xl flex items-center justify-between rounded-xl border border-white/25 bg-white/10 px-3 py-2", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 text-sm text-white/85", children: "Show watch history on your public profile" }), (0, n.jsxs)("button", { type: "button", onClick: () => _2((e11) => ({ ...e11, showWatchHistory: !e11.showWatchHistory })), className: "jsx-a56d74a659a848a4 inline-flex items-center gap-2 rounded-full bg-black/40 px-3 py-1.5 text-xs text-white/85", children: [S2.showWatchHistory ? (0, n.jsx)(m.Ny1, { className: "text-emerald-300" }) : (0, n.jsx)(m.mx3, { className: "text-white/70" }), S2.showWatchHistory ? "Visible" : "Hidden"] })] })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 flex justify-end gap-3 mt-6", children: [(0, n.jsx)("button", { onClick: () => k2(false), className: "jsx-a56d74a659a848a4 ov-cancel px-4 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 border border-white/30 text-white shadow backdrop-blur-md text-sm transition", children: "Cancel" }), (0, n.jsx)("button", { onClick: z2, className: "jsx-a56d74a659a848a4 ov-save px-4 py-1.5 rounded-xl bg-gradient-to-br from-[#4f8cf7]/80 to-[#7886f9]/80 hover:from-[#4f8cf7] hover:to-[#7886f9] text-white shadow-md backdrop-blur-md text-sm transition", children: "Save" })] })] }) : h2 ? (0, n.jsx)(n.Fragment, { children: p2 || !l2 ? (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 animate-pulse pt-1", children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 flex items-center gap-4", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 h-[72px] w-[72px] rounded-full bg-white/[0.08]" }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 space-y-2", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 h-4 w-36 rounded bg-white/[0.08]" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 h-3 w-24 rounded bg-white/[0.06]" })] })] }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 mt-8 grid grid-cols-3 gap-2.5", children: Array.from({ length: 6 }).map((e11, t3) => (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 aspect-[2/3] rounded-lg bg-white/[0.05]" }, t3)) })] }) : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 flex items-center gap-4 pt-1", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 h-[72px] w-[72px] shrink-0 overflow-hidden rounded-full bg-white/[0.06] ring-1 ring-white/[0.12]", children: l2.avatar ? (0, n.jsx)("img", { src: l2.avatar, alt: "avatar", className: "jsx-a56d74a659a848a4 h-full w-full object-cover" }) : (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 flex h-full w-full items-center justify-center text-xl font-bold text-white/80", children: l2.name ? l2.name.split(" ").map((e11) => e11[0]).join("").slice(0, 2).toUpperCase() : "U" }) }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 min-w-0", children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 truncate text-[20px] font-bold tracking-[-0.01em] text-white", children: [l2.name || "User", l2.mood && (0, n.jsx)("span", { className: "jsx-a56d74a659a848a4 ml-1.5 text-[16px]", children: l2.mood })] }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 truncate text-[12.5px] text-white/50", children: l2.tag }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 mt-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: ["Joined ", l2.joinDate] })] })] }), l2.quote && (0, n.jsxs)("p", { className: "jsx-a56d74a659a848a4 mt-3 text-[13px] italic leading-relaxed text-white/50", children: ["\u201C", l2.quote, "\u201D"] }), l2.genres.length > 0 && (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 mt-3 flex flex-wrap gap-1.5", children: l2.genres.map((e11) => (0, n.jsx)("span", { className: "jsx-a56d74a659a848a4 rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-white/60", children: e11 }, e11)) }), !i2 && (0, n.jsxs)("button", { onClick: () => k2(true), className: "jsx-a56d74a659a848a4 mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.05] px-5 text-[13px] font-medium text-white/85 transition-transform active:scale-[0.98]", children: [(0, n.jsx)(m.uO9, { className: "h-3 w-3 text-white/50" }), " Edit Profile"] }), (0, n.jsx)(eV, {}), (0, n.jsx)(eB, { onPick: (e11) => d2(e11) }), l2.canViewWatchHistory && l2.watchHistory.length > 0 && (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 mt-7", children: [(0, n.jsx)("p", { className: "jsx-a56d74a659a848a4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: "Watch History" }), (0, n.jsx)("div", { style: { scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }, className: "jsx-a56d74a659a848a4 no-scrollbar -mx-4 mt-3 flex gap-3 overflow-x-auto px-4", children: l2.watchHistory.slice(0, 10).map((e11) => {
      var t3;
      let a3 = (null == (t3 = e11.progress) ? void 0 : t3.duration) ? Math.min(100, Math.floor(e11.progress.watched / e11.progress.duration * 100)) : 0, s2 = e11.title || e11.name || "Title #".concat(e11.id);
      return (0, n.jsxs)("button", { type: "button", onClick: () => d2({ id: e11.id, type: e11.type }), className: "jsx-a56d74a659a848a4 w-[190px] shrink-0 text-left", children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 relative overflow-hidden rounded-xl ring-1 ring-white/[0.07]", children: [(0, n.jsx)(r.default, { src: e11.backdrop || e11.poster || "/placeholder.png", alt: s2, width: 380, height: 214, className: "aspect-video w-full object-cover", loading: "lazy" }), a3 > 0 && (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 absolute inset-x-0 bottom-0 h-[3px] bg-white/[0.2]", children: (0, n.jsx)("div", { style: { width: "".concat(a3, "%") }, className: "jsx-a56d74a659a848a4 h-full bg-white" }) })] }), (0, n.jsx)("p", { className: "jsx-a56d74a659a848a4 mt-1.5 truncate text-[12px] font-medium text-white/90", children: s2 }), (0, n.jsxs)("p", { className: "jsx-a56d74a659a848a4 mt-0.5 text-[9.5px] uppercase tracking-[0.1em] text-white/35", children: ["tv" === e11.type && e11.season && e11.episode ? "S".concat(e11.season, " \xB7 E").concat(e11.episode) : "movie" === e11.type ? "Movie" : "Series", a3 > 0 && " \xB7 ".concat(a3, "%")] })] }, e11.key);
    }) })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 mt-7", children: [(0, n.jsxs)("p", { className: "jsx-a56d74a659a848a4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: ["Watchlist", A2.length > 0 ? " \u2014 ".concat(A2.length) : ""] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 mt-3 flex h-10 items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.06] px-4", children: [(0, n.jsx)(m.KSO, { className: "h-3.5 w-3.5 shrink-0 text-white/35" }), (0, n.jsx)("input", { type: "text", value: f2, onChange: (e11) => g2(e11.target.value), placeholder: "Search your list\u2026", className: "jsx-a56d74a659a848a4 w-full border-0 bg-transparent text-[14px] text-white outline-none placeholder:text-white/35" })] }), 0 === A2.length ? (0, n.jsx)("p", { className: "jsx-a56d74a659a848a4 mt-6 text-center text-[13px] text-white/40", children: f2 ? "No matches in your list." : "Nothing saved yet." }) : (0, n.jsx)("div", { style: { gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }, className: "jsx-a56d74a659a848a4 mt-4 grid gap-x-2.5 gap-y-4", children: A2.map((e11) => {
      let t3 = b2[P2(e11.showId, e11.type)] || "idle";
      return (0, n.jsxs)("div", { style: { opacity: "pending" === t3 ? 0.6 : 1 }, onClick: () => {
        ("idle" === t3 || "fail" === t3) && d2({ id: e11.showId, type: e11.type });
      }, className: "jsx-a56d74a659a848a4 relative min-w-0", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 overflow-hidden rounded-lg ring-1 ring-white/[0.07]", children: (0, n.jsx)(r.default, { src: e11.poster || "/placeholder.png", alt: "", width: 342, height: 513, className: "aspect-[2/3] w-full object-cover", draggable: false, loading: "lazy" }) }), !i2 && (0, n.jsx)("button", { title: "Remove", style: { pointerEvents: ["pending", "success"].includes(t3) ? "none" : "auto" }, onClick: (a3) => {
        a3.stopPropagation(), ("idle" === t3 || "fail" === t3) && L2(e11.showId, e11.type);
      }, className: "jsx-a56d74a659a848a4 absolute right-1.5 top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-black/60 ring-1 ring-white/[0.12]", children: "pending" === t3 ? (0, n.jsx)("span", { className: "jsx-a56d74a659a848a4 h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/80 border-t-transparent" }) : "success" === t3 ? (0, n.jsx)(m.CMH, { className: "h-3 w-3 text-white" }) : (0, n.jsx)(m.qbC, { className: "h-3 w-3 text-white/70" }) }), (0, n.jsx)("p", { className: "jsx-a56d74a659a848a4 mt-1.5 truncate text-[11.5px] font-medium text-white/90", children: e11.title || e11.name })] }, e11.showId);
    }) })] })] }) }) : (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 relative w-full mt-4 mb-7", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 h-36 w-full overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.07]", children: (null == l2 ? void 0 : l2.banner) && (0, n.jsx)("img", { src: l2.banner, alt: "banner", className: "jsx-a56d74a659a848a4 object-cover w-full h-full" }) }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 absolute -bottom-8 left-6 w-20 h-20 rounded-full overflow-hidden ring-1 ring-white/[0.14] bg-[#15161b] shadow-[0_12px_32px_rgba(0,0,0,0.55)]", children: (null == l2 ? void 0 : l2.avatar) ? (0, n.jsx)("img", { src: l2.avatar, alt: "avatar", className: "jsx-a56d74a659a848a4 object-cover w-full h-full" }) : (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 w-full h-full flex items-center justify-center text-white text-3xl font-bold", children: (null == l2 ? void 0 : l2.name) ? l2.name.split(" ").map((e11) => e11[0]).join("").slice(0, 2).toUpperCase() : "U#" }) })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 pt-10 pb-4 text-white flex flex-col gap-1", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 text-lg font-semibold soft-text animate-fadeIn", children: (null == l2 ? void 0 : l2.name) || "User" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 text-sm text-white/70", children: null == l2 ? void 0 : l2.tag }), (null == l2 ? void 0 : l2.email) && !i2 && (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 text-sm text-white/70", children: l2.email }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 mt-0.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: ["Joined ", null == l2 ? void 0 : l2.joinDate] }), (null == l2 ? void 0 : l2.mood) && (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 text-xl", children: l2.mood }), l2 && l2.genres.length > 0 && (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 flex flex-wrap gap-2 mt-1", children: l2.genres.map((e11) => (0, n.jsx)("span", { className: "jsx-a56d74a659a848a4 rounded-full border border-white/[0.1] bg-white/[0.04] px-2.5 py-1 text-xs text-white/70", children: e11 }, e11)) }), (null == l2 ? void 0 : l2.quote) && (0, n.jsxs)("blockquote", { className: "jsx-a56d74a659a848a4 italic text-sm soft-text animate-fadeIn mt-1 max-w-xl", children: ["\u201C", l2.quote, "\u201D"] }), !i2 && (0, n.jsxs)("button", { onClick: () => k2(true), className: "jsx-a56d74a659a848a4 mt-3 px-6 py-2 min-w-[9rem] rounded-full text-sm flex items-center justify-center gap-2 border border-white/[0.14] bg-white/[0.06] text-white/85 transition-colors hover:bg-white/[0.1]", children: [(0, n.jsx)(m.uO9, { className: "text-white/80" }), " Edit Profile"] })] }), (0, n.jsx)(eV, {}), (0, n.jsx)(eB, { onPick: (e11) => d2(e11) }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 mt-8 mb-6 border-t border-white/[0.07] pt-6", children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 mb-3 flex items-center justify-between", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: "Watch History" }), (null == l2 ? void 0 : l2.canViewWatchHistory) ? (0, n.jsxs)("span", { className: "jsx-a56d74a659a848a4 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-white/25", children: [l2.watchHistory.length, " ", 1 === l2.watchHistory.length ? "title" : "titles"] }) : (0, n.jsx)("span", { className: "jsx-a56d74a659a848a4 text-xs text-white/50", children: "Hidden by user" })] }), (null == l2 ? void 0 : l2.canViewWatchHistory) ? 0 === l2.watchHistory.length ? (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-4 text-sm text-white/50", children: "No synced watch history yet." }) : (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 no-scrollbar flex gap-3 overflow-x-auto pb-1", children: [l2.watchHistory.slice(0, 10).map((e11) => {
      var t3;
      let a3 = (null == (t3 = e11.progress) ? void 0 : t3.duration) ? Math.min(100, Math.floor(e11.progress.watched / e11.progress.duration * 100)) : 0, s2 = e11.title || e11.name || "Title #".concat(e11.id);
      return (0, n.jsxs)("button", { type: "button", onClick: () => d2({ id: e11.id, type: e11.type }), className: "jsx-a56d74a659a848a4 group relative h-[128px] min-w-[220px] overflow-hidden rounded-xl ring-1 ring-white/[0.08] bg-black/40 text-left", children: [(0, n.jsx)(r.default, { src: e11.backdrop || e11.poster || "/placeholder.png", alt: s2, width: 440, height: 248, className: "h-full w-full object-cover", loading: "lazy" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 absolute bottom-0 left-0 right-0 p-2", children: [(0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 truncate text-xs font-semibold text-white", children: s2 }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 text-[11px] text-white/70", children: "tv" === e11.type && e11.season && e11.episode ? "S".concat(e11.season, " \u2022 E").concat(e11.episode) : "movie" === e11.type ? "Movie" : "Series" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/30", children: (0, n.jsx)("div", { style: { width: "".concat(a3, "%") }, className: "jsx-a56d74a659a848a4 h-full rounded-full bg-white" }) })] })] }, e11.key);
    }), C2 && (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 flex h-[128px] min-w-[220px] items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.03] text-sm text-white/45", children: "Loading\u2026" })] }) : (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-4 text-sm text-white/50", children: "This user has hidden their watch history." })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 flex flex-row gap-2 w-full items-center justify-between md:justify-end mb-4", children: [(0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 flex items-center rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2", children: [(0, n.jsx)(m.KSO, { className: "text-white/40 mr-2" }), (0, n.jsx)("input", { type: "text", value: f2, onChange: (e11) => g2(e11.target.value), placeholder: "Search\u2026", style: { fontFamily: "inherit", fontWeight: 400, fontSize: 15 }, className: "jsx-a56d74a659a848a4 bg-transparent outline-none border-0 text-white text-base placeholder:text-white/40 w-[160px] sm:w-[260px]" })] }), (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 rounded-full border border-white/[0.1] bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/60", children: [A2.length, " ", 1 === A2.length ? "item" : "items"] })] }), (0, n.jsx)("div", { ref: M2, style: { maxHeight: "44vh", minHeight: 140, fontSize: 14 }, className: "jsx-a56d74a659a848a4 w-full grid gap-x-3 gap-y-5 md:gap-x-9 md:gap-y-10 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 overflow-y-auto pb-1 pr-1 scrollbar-custom", children: p2 ? Array.from({ length: 16 }).map((e11, t3) => (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 rounded-2xl bg-white/10 w-full aspect-[2/3] animate-pulse" }, t3)) : l2 && 0 === A2.length ? (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 col-span-full text-center text-white/70 py-6 text-base font-normal", children: "No items found." }) : A2.map((e11) => {
      let t3 = b2[P2(e11.showId, e11.type)] || "idle";
      return (0, n.jsxs)("div", { style: { opacity: "pending" === t3 ? 0.7 : 1, boxShadow: "success" === t3 ? "none" : "0 2px 8px #fff1, 0 2px 6px #0003" }, onClick: () => {
        ("idle" === t3 || "fail" === t3) && d2({ id: e11.showId, type: e11.type });
      }, className: "jsx-a56d74a659a848a4 \n                        relative rounded-2xl overflow-hidden\n                        cursor-pointer bg-white/15 shadow-md aspect-[2/3]\n                        flex flex-col min-h-[90px]\n                      ", children: [!i2 && (0, n.jsx)("button", { title: "Remove", style: { opacity: "pending" === t3 ? 0.5 : 1, pointerEvents: ["pending", "success"].includes(t3) ? "none" : "auto", border: 0 }, onClick: (a3) => {
        a3.stopPropagation(), ("idle" === t3 || "fail" === t3) && L2(e11.showId, e11.type);
      }, className: "jsx-a56d74a659a848a4 absolute z-20 top-2 right-2 w-8 h-8 flex items-center justify-center bg-black/75 rounded-full shadow", children: "pending" === t3 ? (0, n.jsx)("span", { className: "jsx-a56d74a659a848a4 loader w-4 h-4 border-2 border-white/80 border-t-transparent rounded-full animate-spin" }) : "success" === t3 ? (0, n.jsx)(m.CMH, { className: "text-green-500" }) : (0, n.jsx)(m.qbC, { className: "text-red-400" }) }), (0, n.jsx)(r.default, { src: e11.poster || "/placeholder.png", alt: "", width: 342, height: 513, className: "object-cover w-full h-full", draggable: false, loading: "lazy" }), (0, n.jsx)("div", { className: "jsx-a56d74a659a848a4 absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-2 pb-2.5 flex flex-col", children: e11.addedAt && (0, n.jsxs)("div", { className: "jsx-a56d74a659a848a4 text-white/80 text-xs truncate", children: ["Added ", new Date(e11.addedAt).toLocaleDateString()] }) })] }, e11.showId);
    }) })] }), (0, n.jsx)(eR(), { id: "a56d74a659a848a4", children: ".scrollbar-custom{scrollbar-width:none;-ms-overflow-style:none}.scrollbar-custom::-webkit-scrollbar{display:none}.loader{border-top-color:#7f82ff!important}.soft-text{background:-webkit-linear-gradient(left,#e0e7ff,#f5f3ff);background:-moz-linear-gradient(left,#e0e7ff,#f5f3ff);background:-o-linear-gradient(left,#e0e7ff,#f5f3ff);background:linear-gradient(90deg,#e0e7ff,#f5f3ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}@-webkit-keyframes fadeUp{from{opacity:0;-webkit-transform:translatey(40px);transform:translatey(40px)}to{opacity:1;-webkit-transform:translatey(0);transform:translatey(0)}}@-moz-keyframes fadeUp{from{opacity:0;-moz-transform:translatey(40px);transform:translatey(40px)}to{opacity:1;-moz-transform:translatey(0);transform:translatey(0)}}@-o-keyframes fadeUp{from{opacity:0;-o-transform:translatey(40px);transform:translatey(40px)}to{opacity:1;-o-transform:translatey(0);transform:translatey(0)}}@keyframes fadeUp{from{opacity:0;-webkit-transform:translatey(40px);-moz-transform:translatey(40px);-o-transform:translatey(40px);transform:translatey(40px)}to{opacity:1;-webkit-transform:translatey(0);-moz-transform:translatey(0);-o-transform:translatey(0);transform:translatey(0)}}.animate-fadeUp{-webkit-animation:fadeUp.6s ease forwards;-moz-animation:fadeUp.6s ease forwards;-o-animation:fadeUp.6s ease forwards;animation:fadeUp.6s ease forwards}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-moz-keyframes fadeIn{from{opacity:0}to{opacity:1}}@-o-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.animate-fadeIn{-webkit-animation:fadeIn 1s ease both;-moz-animation:fadeIn 1s ease both;-o-animation:fadeIn 1s ease both;animation:fadeIn 1s ease both}@-webkit-keyframes glowSoft{0%,100%{-webkit-box-shadow:0 0 6px rgba(255,255,255,.2);box-shadow:0 0 6px rgba(255,255,255,.2)}50%{-webkit-box-shadow:0 0 12px rgba(255,255,255,.35);box-shadow:0 0 12px rgba(255,255,255,.35)}}@-moz-keyframes glowSoft{0%,100%{-moz-box-shadow:0 0 6px rgba(255,255,255,.2);box-shadow:0 0 6px rgba(255,255,255,.2)}50%{-moz-box-shadow:0 0 12px rgba(255,255,255,.35);box-shadow:0 0 12px rgba(255,255,255,.35)}}@-o-keyframes glowSoft{0%,100%{box-shadow:0 0 6px rgba(255,255,255,.2)}50%{box-shadow:0 0 12px rgba(255,255,255,.35)}}@keyframes glowSoft{0%,100%{-webkit-box-shadow:0 0 6px rgba(255,255,255,.2);-moz-box-shadow:0 0 6px rgba(255,255,255,.2);box-shadow:0 0 6px rgba(255,255,255,.2)}50%{-webkit-box-shadow:0 0 12px rgba(255,255,255,.35);-moz-box-shadow:0 0 12px rgba(255,255,255,.35);box-shadow:0 0 12px rgba(255,255,255,.35)}}.glow-soft{-webkit-animation:glowSoft 4s ease-in-out infinite;-moz-animation:glowSoft 4s ease-in-out infinite;-o-animation:glowSoft 4s ease-in-out infinite;animation:glowSoft 4s ease-in-out infinite}" })] }), c2 && (0, eO.createPortal)(h2 ? (0, n.jsx)(eK, { show: { id: c2.id, type: c2.type }, onClose: () => d2(null) }) : (0, n.jsx)(eH.default, { show: { id: c2.id, type: c2.type }, onClose: () => d2(null), zIndex: 300 }), document.body)] }) : null;
  }
  var e$ = a(1941);
  function e0(e10) {
    let { className: t2 = "" } = e10, [a2, i2] = (0, s.useState)(false), [l2, r2] = (0, s.useState)(false), [o2, c2] = (0, s.useState)([]), [d2, h2] = (0, s.useState)(""), [u2, p2] = (0, s.useState)(null), [x2, f2] = (0, s.useState)(null), [g2, w2] = (0, s.useState)(false), b2 = (0, s.useRef)(null), v2 = (0, s.useRef)(null), [y2, j2] = (0, s.useState)([]);
    async function N2() {
      (await fetch("/api/friends/request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ tag: d2 }) })).ok ? (h2(""), w2(true), setTimeout(() => w2(false), 2e3)) : alert("Failed to send request");
    }
    (0, s.useEffect)(() => {
      if (a2) return document.addEventListener("click", e11), window.addEventListener("scroll", t3), () => {
        document.removeEventListener("click", e11), window.removeEventListener("scroll", t3);
      };
      function e11(e12) {
        b2.current && !b2.current.contains(e12.target) && i2(false);
      }
      function t3() {
        i2(false);
      }
    }, [a2]), (0, s.useEffect)(() => {
      a2 && (r2(true), fetch("/api/profile").then((e11) => e11.json()).then((e11) => p2(e11)), fetch("/api/friends").then((e11) => e11.json()).then((e11) => c2(e11.friends || [])).finally(() => r2(false)));
    }, [a2]), (0, s.useEffect)(() => {
      if (!a2 || !u2) return;
      let e11 = (0, e$.Ay)("https://heartbreaking-desert-cocoa.glitch.me", { transports: ["websocket"] });
      return v2.current = e11, e11.emit("presence", { id: u2.id }), e11.on("presence", (e12) => j2(e12)), () => {
        e11.disconnect(), v2.current = null;
      };
    }, [a2, u2]);
    let k2 = [...o2].sort((e11, t3) => {
      let a3 = y2.includes(e11.id);
      return a3 === y2.includes(t3.id) ? 0 : a3 ? -1 : 1;
    });
    return (0, n.jsxs)("div", { className: "relative ".concat(t2), ref: b2, children: [(0, n.jsx)("button", { onClick: () => i2(!a2), className: "p-2 rounded-full hover:bg-white/20 transition", children: (0, n.jsx)(m.M5n, { className: "w-5 h-5" }) }), a2 && (0, n.jsxs)("div", { className: "ov-panel ov-friends absolute right-0 mt-2 w-80 bg-black/80 backdrop-blur-xl rounded-2xl shadow-xl p-4 z-50 animate-fade-in", children: [(0, n.jsxs)("div", { className: "flex items-center justify-between mb-2", children: [(0, n.jsx)("div", { className: "text-sm font-semibold", children: "Friends" }), (0, n.jsx)("button", { onClick: () => i2(false), className: "p-1 hover:text-red-500", children: (0, n.jsx)(m.QCr, {}) })] }), u2 && (0, n.jsxs)("div", { className: "mb-3 text-xs text-white/80 flex items-center gap-1", children: ["Your tag: ", (0, n.jsx)("span", { className: "font-mono", children: u2.tag }), (0, n.jsx)("button", { className: "ml-1 p-1 hover:text-green-400", onClick: () => navigator.clipboard.writeText(u2.tag), children: (0, n.jsx)(m.paH, {}) })] }), (0, n.jsxs)("div", { className: "flex mb-2 gap-2", children: [(0, n.jsx)("input", { value: d2, onChange: (e11) => h2(e11.target.value), placeholder: "Search tag", className: "flex-1 bg-white/10 rounded-full px-3 py-1 outline-none text-sm" }), (0, n.jsx)("button", { onClick: N2, className: "px-3 py-1 bg-white/20 rounded-full text-sm flex items-center gap-1", children: (0, n.jsx)(m.NPy, {}) })] }), g2 && (0, n.jsx)("div", { className: "text-xs text-green-400 mb-1", children: "Request sent!" }), (0, n.jsx)("div", { className: "max-h-60 overflow-y-auto space-y-2 pr-1", children: l2 ? Array.from({ length: 3 }).map((e11, t3) => (0, n.jsxs)("div", { className: "flex items-center justify-between bg-white/10 rounded-lg px-3 py-2 animate-pulse", children: [(0, n.jsxs)("div", { className: "flex flex-col gap-1 text-sm", children: [(0, n.jsx)("div", { className: "h-3 w-24 bg-white/30 rounded" }), (0, n.jsx)("div", { className: "h-2 w-16 bg-white/20 rounded" })] }), (0, n.jsx)("div", { className: "h-5 w-10 bg-white/20 rounded-full" })] }, t3)) : 0 === o2.length ? (0, n.jsx)("div", { className: "text-center text-sm text-white/60", children: "No friends" }) : k2.map((e11) => (0, n.jsxs)("div", { onClick: () => {
      "accepted" === e11.status && (f2(e11.id), i2(false));
    }, className: "flex items-center justify-between bg-white/10 rounded-lg px-3 py-2 hover:bg-white/20 transition cursor-pointer", children: [(0, n.jsxs)("div", { className: "flex flex-col text-sm", children: [(0, n.jsxs)("span", { className: "font-semibold flex items-center gap-1", children: [e11.name, y2.includes(e11.id) && (0, n.jsx)("span", { className: "ov-dot w-2 h-2 bg-green-400 rounded-full animate-pulse" })] }), (0, n.jsx)("span", { className: "text-xs text-white/60", children: e11.tag })] }), "pending" === e11.status && "incoming" === e11.direction ? (0, n.jsxs)("div", { className: "flex gap-2", children: [(0, n.jsx)("button", { onClick: (t3) => {
      t3.stopPropagation(), fetch("/api/friends/respond", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: e11.id, action: "accept" }) }).then(() => i2(false));
    }, className: "p-1 rounded-full bg-white text-black hover:bg-white/80", children: (0, n.jsx)(m.CMH, { className: "w-3 h-3" }) }), (0, n.jsx)("button", { onClick: (t3) => {
      t3.stopPropagation(), fetch("/api/friends/respond", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: e11.id, action: "decline" }) }).then(() => i2(false));
    }, className: "p-1 rounded-full bg-black text-white hover:bg-black/70", children: (0, n.jsx)(m.QCr, { className: "w-3 h-3" }) })] }) : "accepted" === e11.status ? (0, n.jsx)("button", { onClick: (t3) => {
      t3.stopPropagation(), fetch("/api/friends/remove", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: e11.id }) }).then(() => i2(false));
    }, className: "text-xs hover:text-red-500", children: "Remove" }) : (0, n.jsx)("span", { className: "text-xs text-white/60", children: e11.status })] }, e11.id)) })] }), x2 && (0, eO.createPortal)((0, n.jsx)(eZ, { show: !!x2, onClose: () => f2(null), userId: x2 }), document.body)] });
  }
  var e1 = a(5223), e5 = a(6873), e4 = a(4834);
  let e2 = /* @__PURE__ */ new Set(["the", "a", "an", "in", "on", "of", "and", "or", "to", "from", "at", "is", "it", "its", "that", "this", "was", "be", "are", "as", "about", "like"]), e6 = /* @__PURE__ */ new Set(["movie", "movies", "film", "films", "show", "shows", "series", "tv"]), e3 = /* @__PURE__ */ new Set(["with", "starring", "featuring", "stars", "actor", "actress", "cast", "by"]);
  function e8(e10) {
    return e10.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  }
  function e7(e10) {
    return e8(e10).split(" ").filter(Boolean);
  }
  function e9(e10, t2) {
    if (e10 === t2) return 1;
    let a2 = (function(e11, t3) {
      if (e11 === t3) return 1;
      let a3 = e11.length, n3 = t3.length;
      if (!a3 || !n3) return 0;
      let s3 = Math.max(0, Math.floor(Math.max(a3, n3) / 2) - 1), i2 = Array(a3).fill(false), l2 = Array(n3).fill(false), r2 = 0;
      for (let o3 = 0; o3 < a3; o3++) {
        let a4 = Math.max(0, o3 - s3), c3 = Math.min(n3 - 1, o3 + s3);
        for (let n4 = a4; n4 <= c3; n4++) if (!l2[n4] && e11[o3] === t3[n4]) {
          i2[o3] = true, l2[n4] = true, r2++;
          break;
        }
      }
      if (!r2) return 0;
      let o2 = 0, c2 = 0;
      for (let n4 = 0; n4 < a3; n4++) if (i2[n4]) {
        for (; !l2[c2]; ) c2++;
        e11[n4] !== t3[c2] && o2++, c2++;
      }
      let d2 = (r2 / a3 + r2 / n3 + (r2 - (o2 /= 2)) / r2) / 3, h2 = 0;
      for (let s4 = 0; s4 < Math.min(4, a3, n3) && e11[s4] === t3[s4]; s4++) h2++;
      return d2 + 0.1 * h2 * (1 - d2);
    })(e10, t2), n2 = e10.length <= t2.length ? e10 : t2, s2 = e10.length <= t2.length ? t2 : e10;
    return n2.length >= 4 && s2.startsWith(n2) ? Math.max(a2, 0.9 * (n2.length / s2.length) + 0.1) : a2;
  }
  let te = /* @__PURE__ */ new Map();
  async function tt(e10, t2) {
    let a2 = "https://api.themoviedb.org/3/".concat(e10).concat(e10.includes("?") ? "&" : "?", "api_key=").concat("a46c50a0ccb1bafe2b15665df7fad7e1");
    if (te.has(a2)) return te.get(a2);
    let n2 = await fetch(a2, { signal: t2 });
    if (!n2.ok) throw Error("tmdb ".concat(n2.status));
    let s2 = await n2.json();
    return te.size > 300 && te.delete(te.keys().next().value), te.set(a2, s2), s2;
  }
  function ta(e10, t2) {
    return e10.catch((e11) => {
      if ((null == e11 ? void 0 : e11.name) === "AbortError") throw e11;
      return t2;
    });
  }
  async function tn(e10, t2) {
    let a2 = await tt("search/multi?query=".concat(encodeURIComponent(e10)), t2);
    return ((null == a2 ? void 0 : a2.results) || []).filter((e11) => "movie" === e11.media_type || "tv" === e11.media_type);
  }
  async function ts(e10, t2) {
    let a2 = await tt("search/person?query=".concat(encodeURIComponent(e10)), t2);
    return ((null == a2 ? void 0 : a2.results) || []).map((e11) => ({ ...e11, media_type: "person" }));
  }
  async function ti(e10, t2) {
    let a2 = await tt("person/".concat(e10, "/combined_credits?"), t2), n2 = /* @__PURE__ */ new Set();
    return [...(null == a2 ? void 0 : a2.cast) || [], ...(null == a2 ? void 0 : a2.crew) || []].filter((e11) => "movie" === e11.media_type || "tv" === e11.media_type).filter((e11) => {
      let t3 = "".concat(e11.media_type, "-").concat(e11.id);
      return !n2.has(t3) && (n2.add(t3), true);
    }).sort((e11, t3) => (t3.popularity || 0) - (e11.popularity || 0)).slice(0, 40);
  }
  let tl = { 28: "action", 12: "adventure", 16: "animation animated", 35: "comedy", 80: "crime", 99: "documentary", 18: "drama", 10751: "family", 14: "fantasy", 36: "history", 27: "horror", 10402: "music", 9648: "mystery", 10749: "romance", 878: "science fiction sci fi", 53: "thriller", 10752: "war", 37: "western", 10759: "action adventure", 10762: "kids", 10764: "reality", 10765: "sci fi fantasy science fiction", 10766: "soap", 10768: "war politics" };
  async function tr(e10, t2, a2) {
    let n2 = e7(e10), s2 = n2.some((e11) => e3.has(e11)), i2 = n2.filter((e11) => !e2.has(e11) && !e6.has(e11) && !e3.has(e11));
    if (!i2.length) return { items: [], people: [] };
    let l2 = i2.join(" "), r2 = [];
    for (let e11 = 0; e11 < i2.length - 1 && r2.length < 3; e11++) r2.push("".concat(i2[e11], " ").concat(i2[e11 + 1]));
    let o2 = i2.filter((e11) => e11.length >= 3).slice(0, 4), c2 = [l2, ...r2.slice(0, 2), ...o2.slice(0, 2)].filter((e11, t3, a3) => a3.indexOf(e11) === t3).slice(0, 4), [d2, h2, u2] = await Promise.all([Promise.all(r2.map((e11) => ta(tn(e11, a2), []))), Promise.all(o2.map((e11) => ta(tn(e11, a2), []))), Promise.all(c2.map((e11) => ta(ts(e11, a2), [])))]), m2 = [], p2 = o2.filter((e11, t3) => e11.length >= 5 && 0 === h2[t3].length).slice(0, 2);
    p2.length && m2.push(...await Promise.all(p2.map((e11) => ta(tn(e11.slice(0, Math.max(3, e11.length - 2)), a2), []))));
    let x2 = (e11) => Array.from(new Map(e11.map((e12) => [e12.id, e12])).values()).map((e12) => {
      let t3 = e7(e12.name || "");
      if (!t3.length) return { p: e12, sim: 0 };
      let a3 = i2.map((e13) => Math.max(0, ...t3.map((t4) => e9(e13, t4))));
      return { p: e12, sim: a3.reduce((e13, t4) => e13 + t4, 0) / a3.length };
    }).sort((e12, t3) => t3.sim * Math.log10(2 + (t3.p.popularity || 0)) - e12.sim * Math.log10(2 + (e12.p.popularity || 0))), f2 = (e11) => e11.reduce((e12, t3) => Math.max(e12, t3.sim), 0), g2 = u2.flat(), w2 = x2(g2);
    if (0.9 > f2(w2)) {
      let e11 = i2.filter((e12) => e12.length >= 5).sort((e12, t3) => t3.length - e12.length).slice(0, 2);
      e11.length && (w2 = x2(g2 = [...g2, ...(await Promise.all(e11.map((e12) => ta(ts(e12.slice(0, e12.length - 2), a2), [])))).flat()]));
    }
    let b2 = s2 ? 0.62 : i2.length >= 3 ? 0.85 : 0.74, v2 = f2(w2), y2 = w2.filter((e11) => {
      if (e11.sim < b2 || e11.sim < v2 - 0.08) return false;
      let t3 = (e11.p.popularity || 0) >= 1.5;
      return 1 === i2.length ? t3 && e11.sim >= 0.95 : t3 || e11.sim >= 0.95;
    }).slice(0, 2), j2 = await Promise.all(y2.map((e11) => ta(ti(e11.p.id, a2), []))), N2 = /* @__PURE__ */ new Map(), k2 = (e11, t3) => {
      for (let a3 of e11) {
        let e12 = "".concat(a3.media_type, "-").concat(a3.id), n3 = N2.get(e12);
        n3 ? n3.provenance = Math.max(n3.provenance, t3) : N2.set(e12, (function(e13, t4) {
          let a4 = /* @__PURE__ */ new Map(), n4 = (e14, t5) => {
            if (e14) for (let n5 of e7(e14)) a4.set(n5, (a4.get(n5) || 0) + t5);
          };
          n4(e13.title || e13.name, 3);
          let s3 = e13.original_title || e13.original_name;
          for (let t5 of (s3 && s3 !== (e13.title || e13.name) && n4(s3, 2), e13.genre_ids || [])) n4(tl[t5], 1.5);
          return n4(e13.overview, 1), { item: e13, tf: a4, norm: 0, provenance: t4 };
        })(a3, t3));
      }
    };
    k2(t2, 1), d2.forEach((e11) => k2(e11, 0.72)), h2.forEach((e11) => k2(e11, 0.5)), m2.forEach((e11) => k2(e11, 0.42)), j2.forEach((e11, t3) => k2(e11, 0.55 + 0.45 * y2[t3].sim));
    let S2 = [...N2.values()];
    if (!S2.length) return { items: [], people: y2.map((e11) => e11.p) };
    let _2 = /* @__PURE__ */ new Map();
    for (let e11 of S2) for (let t3 of e11.tf.keys()) _2.set(t3, (_2.get(t3) || 0) + 1);
    let C2 = S2.length, E2 = (e11) => Math.log(1 + C2 / (1 + (_2.get(e11) || 0)));
    for (let e11 of S2) {
      let t3 = 0;
      for (let [a3, n3] of e11.tf) t3 += (n3 * E2(a3)) ** 2;
      e11.norm = Math.sqrt(t3) || 1;
    }
    let T2 = e8(l2);
    return { items: S2.map((e11) => {
      let t3 = 0, a3 = 0;
      for (let n4 of i2) {
        let s4 = 0, i3 = E2(n4);
        for (let [t4, a4] of e11.tf) {
          let e12 = e9(n4, t4);
          if (e12 < 0.84) continue;
          let l4 = e12 * e12 * a4 * E2(t4);
          l4 > s4 && (s4 = l4, i3 = E2(t4));
        }
        t3 += s4 * i3, a3 += i3 * i3;
      }
      let n3 = t3 / ((Math.sqrt(a3) || 1) * e11.norm), s3 = e8(e11.item.title || e11.item.name || "");
      T2.length >= 4 && s3.length >= 4 && (s3.includes(T2) ? n3 = Math.min(1, n3 + 0.25) : T2.includes(s3) && (n3 = Math.min(1, n3 + 0.25 * (s3.length / T2.length))));
      let l3 = Math.min(1, Math.log10(1 + (e11.item.popularity || 0)) / 2.5), r3 = (e11.item.vote_average || 0) / 10 * Math.min(1, (e11.item.vote_count || 0) / 300), o3 = 0.58 * n3 + 0.16 * e11.provenance + 0.16 * l3 + 0.1 * r3;
      return { d: e11, text: n3, score: o3 };
    }).filter((e11) => e11.text > 0.05 || e11.d.provenance >= 0.55).sort((e11, t3) => t3.score - e11.score).slice(0, 18).map((e11) => e11.d.item), people: y2.map((e11) => e11.p).slice(0, 3) };
  }
  let to = "a46c50a0ccb1bafe2b15665df7fad7e1", tc = "recent-searches", td = [["relevance", "Relevance"], ["rating", "Top Rated"], ["new", "Newest"], ["popular", "Popular"]], th = [{ label: "Action", movie: 28, tv: 10759 }, { label: "Comedy", movie: 35, tv: 35 }, { label: "Drama", movie: 18, tv: 18 }, { label: "Horror", movie: 27, tv: null }, { label: "Sci-Fi", movie: 878, tv: 10765 }, { label: "Romance", movie: 10749, tv: null }, { label: "Crime", movie: 80, tv: 80 }, { label: "Animation", movie: 16, tv: 16 }, { label: "Fantasy", movie: 14, tv: 10765 }, { label: "Documentary", movie: 99, tv: 99 }], tu = null, tm = {}, tp = {};
  function tx() {
    try {
      if (!(0, o.sb)().rememberSearches) return [];
      let e10 = JSON.parse(localStorage.getItem(tc) || "[]");
      return Array.isArray(e10) ? e10.slice(0, 5) : [];
    } catch (e10) {
      return [];
    }
  }
  function tf(e10) {
    let t2 = e10.release_date || e10.first_air_date || "";
    return t2 ? t2.slice(0, 4) : "";
  }
  function tg(e10) {
    let { text: t2, query: a2 } = e10, s2 = a2.trim();
    if (!s2) return (0, n.jsx)(n.Fragment, { children: t2 });
    let i2 = t2.toLowerCase().indexOf(s2.toLowerCase());
    return -1 === i2 ? (0, n.jsx)(n.Fragment, { children: t2 }) : (0, n.jsxs)(n.Fragment, { children: [t2.slice(0, i2), (0, n.jsx)("mark", { className: "bg-transparent font-semibold text-white", children: t2.slice(i2, i2 + s2.length) }), t2.slice(i2 + s2.length)] });
  }
  function tw(e10, t2) {
    let a2 = [...e10];
    switch (t2) {
      case "rating":
        return a2.sort((e11, t3) => (t3.vote_count && t3.vote_count >= 50 ? t3.vote_average || 0 : -1) - (e11.vote_count && e11.vote_count >= 50 ? e11.vote_average || 0 : -1));
      case "new":
        return a2.sort((e11, t3) => new Date(t3.release_date || t3.first_air_date || 0).getTime() - new Date(e11.release_date || e11.first_air_date || 0).getTime());
      case "popular":
        return a2.sort((e11, t3) => (t3.popularity || 0) - (e11.popularity || 0));
      default:
        return a2;
    }
  }
  function tb(e10) {
    let { item: t2, query: a2, selected: i2, tall: l2, showType: r2 = true, kbNav: o2, onHover: c2, onPick: d2, onRemove: h2 } = e10, u2 = "person" === t2.media_type, p2 = t2.title || t2.name || "Untitled", x2 = tf(t2), f2 = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      var e11, t3;
      i2 && (null == (t3 = null == o2 ? void 0 : o2.current) || t3) && (null == (e11 = f2.current) || e11.scrollIntoView({ block: "nearest" }));
    }, [i2]);
    let g2 = u2 ? (t2.known_for || []).map((e11) => e11.title || e11.name).filter(Boolean).slice(0, 2).join(", ") : "";
    return (0, n.jsxs)("div", { ref: f2, role: "option", "aria-selected": i2, onMouseEnter: () => {
      o2 && (o2.current = false), c2();
    }, onClick: d2, className: "ov-row relative mx-2 flex cursor-pointer items-center gap-3 rounded-xl px-3 transition-colors duration-150 ".concat(l2 ? "py-2.5" : "py-[9px]", " ").concat(i2 ? "bg-white/[0.08]" : ""), children: [i2 && (0, n.jsx)("span", { className: "ov-row-bar absolute left-0 top-1/2 h-[55%] w-[2px] -translate-y-1/2 rounded-full bg-white/90" }), u2 ? t2.profile_path ? (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w92".concat(t2.profile_path), alt: "", className: "h-11 w-11 shrink-0 rounded-full object-cover", loading: "lazy" }) : (0, n.jsx)("span", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-white/25", children: (0, n.jsx)(m.x$1, { className: "h-4 w-4" }) }) : t2.poster_path ? (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w92".concat(t2.poster_path), alt: "", className: "shrink-0 rounded-[4px] object-cover ring-1 ring-white/[0.07] ".concat("h-14 w-10"), loading: "lazy" }) : (0, n.jsx)("span", { className: "flex shrink-0 items-center justify-center rounded-[4px] bg-white/[0.06] text-white/25 ".concat("h-14 w-10"), children: (0, n.jsx)(m.UUG, { className: "h-3.5 w-3.5" }) }), (0, n.jsxs)("span", { className: "min-w-0 flex-1", children: [(0, n.jsx)("span", { className: "block truncate text-[14.5px] font-medium text-white/80", children: (0, n.jsx)(tg, { text: p2, query: a2 }) }), (0, n.jsx)("span", { className: "mt-1 block truncate text-[11px] uppercase tracking-[0.08em] text-white/35", children: u2 ? (0, n.jsxs)(n.Fragment, { children: [t2.known_for_department || "Actor", g2 && " \xB7 ".concat(g2)] }) : (0, n.jsxs)(n.Fragment, { children: [x2, r2 && "".concat(x2 ? " \xB7 " : "").concat("movie" === t2.media_type ? "Movie" : "TV"), "number" == typeof t2.vote_average && t2.vote_average > 0 && (0, n.jsxs)(n.Fragment, { children: [(x2 || r2) && " \xB7 ", "\u2605 ", t2.vote_average.toFixed(1)] })] }) })] }), h2 && (0, n.jsx)("button", { onClick: (e11) => {
      e11.stopPropagation(), h2();
    }, className: "shrink-0 rounded-full p-1.5 text-white/35 hover:bg-white/10 hover:text-white", "aria-label": "Remove from recent searches", children: (0, n.jsx)(e4.U_s, { className: "h-3.5 w-3.5" }) })] });
  }
  function tv(e10) {
    let { item: t2, selected: a2, kbNav: i2, onHover: l2, onPick: r2 } = e10, o2 = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      var e11, t3;
      a2 && (null == (t3 = null == i2 ? void 0 : i2.current) || t3) && (null == (e11 = o2.current) || e11.scrollIntoView({ block: "nearest" }));
    }, [a2]);
    let c2 = t2.title || t2.name || "Untitled", d2 = tf(t2);
    return (0, n.jsxs)("div", { ref: o2, role: "option", "aria-selected": a2, onMouseEnter: () => {
      i2 && (i2.current = false), l2();
    }, onClick: r2, className: "cursor-pointer pb-1", children: [(0, n.jsx)("div", { className: "relative overflow-hidden rounded-lg transition-all duration-200 ".concat(a2 ? "ring-1 ring-white/[0.35] shadow-[0_12px_32px_rgba(0,0,0,0.55)]" : "ring-1 ring-white/[0.07] hover:ring-white/25"), children: t2.poster_path ? (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w342".concat(t2.poster_path), alt: "", loading: "lazy", className: "aspect-[2/3] w-full object-cover" }) : (0, n.jsx)("span", { className: "flex aspect-[2/3] w-full items-center justify-center bg-white/[0.05] text-white/25", children: (0, n.jsx)(m.UUG, { className: "h-5 w-5" }) }) }), (0, n.jsx)("p", { className: "mt-1.5 truncate text-[12px] font-medium text-white/90", children: c2 }), (0, n.jsxs)("p", { className: "mt-0.5 text-[10px] uppercase tracking-[0.08em] text-white/35", children: [d2, "number" == typeof t2.vote_average && t2.vote_average > 0 && (0, n.jsxs)(n.Fragment, { children: [" \xB7 \u2605 ", t2.vote_average.toFixed(1)] })] })] });
  }
  function ty(e10) {
    let { children: t2 } = e10;
    return (0, n.jsx)("p", { className: "ov-group-label px-5 pb-2 pt-4 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: t2 });
  }
  function tj(e10) {
    let { tall: t2 } = e10;
    return (0, n.jsx)("div", { className: "px-2", children: Array.from({ length: 6 }).map((e11, a2) => (0, n.jsxs)("div", { className: "flex items-center gap-3 rounded-xl px-3 ".concat(t2 ? "py-2.5" : "py-[9px]"), children: [(0, n.jsx)("span", { className: "search-shimmer shrink-0 rounded-md ".concat(t2 ? "h-14 w-10" : "h-12 w-8") }), (0, n.jsxs)("span", { className: "min-w-0 flex-1", children: [(0, n.jsx)("span", { className: "search-shimmer block h-3.5 w-[60%] rounded" }), (0, n.jsx)("span", { className: "search-shimmer mt-2 block h-3 w-[35%] rounded" })] })] }, a2)) });
  }
  function tN(e10) {
    let { cols: t2 } = e10;
    return (0, n.jsx)("div", { className: "grid gap-3.5 px-5 pb-5 pt-2 ".concat(3 === t2 ? "grid-cols-3" : "grid-cols-4"), children: Array.from({ length: 2 * t2 }).map((e11, t3) => (0, n.jsx)("span", { className: "search-shimmer aspect-[2/3] w-full rounded-lg" }, t3)) });
  }
  function tk(e10) {
    let { on: t2, children: a2, onClick: s2 } = e10;
    return (0, n.jsx)("button", { onClick: s2, className: "ov-seg h-8 shrink-0 rounded-full px-3.5 text-[11.5px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150 ".concat(t2 ? "bg-white text-black" : "bg-white/[0.03] text-white/50 ring-1 ring-white/[0.07] hover:bg-white/[0.07] hover:text-white/80"), children: a2 });
  }
  function tS(e10) {
    let t2 = e10.currentTarget;
    t2.scrollWidth > t2.clientWidth && Math.abs(e10.deltaY) > Math.abs(e10.deltaX) && (t2.scrollLeft += e10.deltaY);
  }
  function t_(e10) {
    let { show: t2, isMobile: a2 = false, onClose: i2, onSelect: l2, initialQuery: r2 = null } = e10, [c2, d2] = (0, s.useState)(""), [p2, x2] = (0, s.useState)([]), [f2, g2] = (0, s.useState)([]), [w2, b2] = (0, s.useState)(null), [v2, y2] = (0, s.useState)(false), [j2, N2] = (0, s.useState)(false), [k2, S2] = (0, s.useState)(false), [_2, C2] = (0, s.useState)([]), [E2, T2] = (0, s.useState)([]), [M2, A2] = (0, s.useState)(0), P2 = (0, s.useRef)(false), [L2, z2] = (0, s.useState)("all"), [I2, D2] = (0, s.useState)("relevance"), [O2, F2] = (0, s.useState)(null), [R2, H2] = (0, s.useState)(null), [W2, q2] = (0, s.useState)([]), [J2, U2] = (0, s.useState)([]), V2 = (0, s.useRef)(null), Y2 = (0, s.useRef)(null), B2 = (0, s.useRef)(null), [K2, G2] = (0, s.useState)(false), X2 = (0, s.useRef)(null), [Q2, Z2] = (0, s.useState)(false);
    (0, s.useEffect)(() => {
      let e11 = window;
      Z2(!!(e11.SpeechRecognition || e11.webkitSpeechRecognition));
    }, []);
    let $2 = () => {
      if (K2) {
        var e11;
        null == (e11 = X2.current) || e11.stop();
        return;
      }
      let t3 = window, a3 = t3.SpeechRecognition || t3.webkitSpeechRecognition;
      if (!a3) return;
      let n2 = new a3();
      X2.current = n2, n2.lang = "en-US", n2.interimResults = true, n2.continuous = false, n2.onresult = (e12) => {
        let t4 = Array.from(e12.results).map((e13) => {
          var t5;
          return (null == (t5 = e13[0]) ? void 0 : t5.transcript) || "";
        }).join(" ").trim();
        t4 && d2(t4);
      }, n2.onend = () => G2(false), n2.onerror = () => G2(false);
      try {
        n2.start(), G2(true);
      } catch (e12) {
        G2(false);
      }
    };
    (0, s.useEffect)(() => {
      var e11;
      t2 || null == (e11 = X2.current) || e11.stop();
    }, [t2]);
    let ee2 = a2 ? 3 : 4;
    (0, s.useEffect)(() => {
      t2 && (B2.current = r2 || null, d2(r2 || ""), x2([]), g2([]), b2(null), y2(false), S2(false), A2(0), z2("all"), D2("relevance"), F2(null), H2(null), q2([]), U2([]), C2(tx()), tu ? T2(tu) : fetch("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(to)).then((e11) => e11.json()).then((e11) => {
        let t3 = (e11.results || []).filter((e12) => "movie" === e12.media_type || "tv" === e12.media_type).slice(0, 12);
        tu = t3, T2(t3);
      }).catch(() => T2([])));
    }, [t2, r2]), (0, s.useEffect)(() => {
      if (!t2) return;
      let e11 = (e12) => {
        a2 || !V2.current || V2.current.contains(e12.target) || i2();
      }, n2 = (e12) => {
        "Escape" === e12.key && i2();
      };
      return document.addEventListener("mousedown", e11), window.addEventListener("keydown", n2), () => {
        document.removeEventListener("mousedown", e11), window.removeEventListener("keydown", n2);
      };
    }, [t2, a2, i2]);
    let et2 = (0, s.useMemo)(() => (function(e11) {
      let t3 = e11.trim(), a3 = t3.match(/\b(19|20)\d{2}\b/);
      if (!a3) return { text: t3, year: null };
      let n2 = t3.replace(a3[0], "").replace(/\s{2,}/g, " ").trim();
      return n2.length < 2 ? { text: t3, year: null } : { text: n2, year: a3[0] };
    })(c2), [c2]);
    (0, s.useEffect)(() => {
      if (!t2 || R2) return;
      if (!et2.text) {
        x2([]), g2([]), b2(null), y2(false), N2(false), S2(false);
        return;
      }
      N2(true);
      let e11 = new AbortController(), n2 = setTimeout(async () => {
        try {
          let t3 = await fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat(to, "&query=").concat(encodeURIComponent(et2.text)), { signal: e11.signal });
          if (!t3.ok) throw Error("search ".concat(t3.status));
          let a3 = (await t3.json()).results || [], n3 = a3.filter((e12) => "movie" === e12.media_type || "tv" === e12.media_type).sort((e12, t4) => (t4.popularity || 0) - (e12.popularity || 0)).slice(0, 14), s2 = a3.filter((e12) => "person" === e12.media_type).slice(0, 3), i3 = B2.current;
          if (i3) {
            B2.current = null;
            let e12 = s2.find((e13) => (e13.name || "").toLowerCase() === i3.trim().toLowerCase());
            e12 && H2(e12);
          }
          if (x2(n3), g2(s2), b2(null), y2(false), A2(0), S2(true), n3.length >= 5) return void N2(false);
          let [l3, r3] = await Promise.all([fetch("/api/semantic-search?q=".concat(encodeURIComponent(et2.text)), { signal: e11.signal }).then((e12) => e12.ok ? e12.json() : { results: [] }).catch(() => ({ results: [] })), tr(et2.text, n3, e11.signal)]);
          if (e11.signal.aborted) return;
          let o2 = [], c3 = new Set(n3.map((e12) => "".concat(e12.media_type, "-").concat(e12.id)));
          for (let e12 of [...l3.results || [], ...r3.items]) {
            let t4 = "".concat(e12.media_type, "-").concat(e12.id);
            c3.has(t4) || (c3.add(t4), o2.push(e12));
          }
          if (o2.length && (x2([...n3, ...o2].slice(0, 18)), b2(0 === n3.length ? et2.text : null), A2(0)), r3.people.length) {
            let e12 = new Set(s2.map((e13) => e13.id));
            g2([...s2, ...r3.people.filter((t4) => !e12.has(t4.id))].slice(0, 3)), y2(true);
          }
          N2(false);
        } catch (e12) {
          (null == e12 ? void 0 : e12.name) !== "AbortError" && (x2([]), g2([]), b2(null), y2(false), S2(true), N2(false));
        }
      }, a2 ? 400 : 250);
      return () => {
        clearTimeout(n2), e11.abort();
      };
    }, [t2, et2.text, a2, R2]), (0, s.useEffect)(() => {
      if (t2 && R2) {
        if (tm[R2.id]) return void q2(tm[R2.id]);
        N2(true), fetch("https://api.themoviedb.org/3/person/".concat(R2.id, "/combined_credits?api_key=").concat(to)).then((e11) => e11.json()).then((e11) => {
          let t3 = /* @__PURE__ */ new Set(), a3 = [...e11.cast || [], ...e11.crew || []].filter((e12) => ("movie" === e12.media_type || "tv" === e12.media_type) && e12.poster_path).filter((e12) => !(e12.genre_ids || []).some((e13) => 10767 === e13 || 10763 === e13)).filter((e12) => {
            let a4 = "".concat(e12.media_type).concat(e12.id);
            return !t3.has(a4) && (t3.add(a4), true);
          }).sort((e12, t4) => (t4.popularity || 0) - (e12.popularity || 0)).slice(0, 30);
          tm[R2.id] = a3, q2(a3), N2(false), A2(0);
        }).catch(() => {
          q2([]), N2(false);
        });
      }
    }, [t2, R2]);
    let ea2 = null != O2 ? th[O2] : null, en2 = !et2.text && !R2 && (null != ea2 || "relevance" !== I2 || "all" !== L2);
    (0, s.useEffect)(() => {
      if (!t2 || !en2) return void U2([]);
      let e11 = "".concat(L2, "|").concat(I2, "|").concat(O2);
      if (tp[e11]) {
        U2(tp[e11]), A2(0);
        return;
      }
      N2(true);
      let a3 = [];
      ("all" === L2 || "movie" === L2) && (null == ea2 || null != ea2.movie) && a3.push(fetch("https://api.themoviedb.org/3/discover/movie?api_key=".concat(to, "&sort_by=").concat({ relevance: "popularity.desc", popular: "popularity.desc", rating: "vote_average.desc&vote_count.gte=300", new: "primary_release_date.desc&vote_count.gte=30" }[I2]).concat((null == ea2 ? void 0 : ea2.movie) ? "&with_genres=".concat(ea2.movie) : "")).then((e12) => e12.json()).then((e12) => (e12.results || []).map((e13) => ({ ...e13, media_type: "movie" }))).catch(() => [])), ("all" === L2 || "tv" === L2) && (null == ea2 || null != ea2.tv) && a3.push(fetch("https://api.themoviedb.org/3/discover/tv?api_key=".concat(to, "&sort_by=").concat({ relevance: "popularity.desc", popular: "popularity.desc", rating: "vote_average.desc&vote_count.gte=300", new: "first_air_date.desc&vote_count.gte=30" }[I2]).concat((null == ea2 ? void 0 : ea2.tv) ? "&with_genres=".concat(ea2.tv) : "")).then((e12) => e12.json()).then((e12) => (e12.results || []).map((e13) => ({ ...e13, media_type: "tv" }))).catch(() => [])), Promise.all(a3).then((t3) => {
        let a4 = tw(t3.flat(), "relevance" === I2 ? "popular" : I2).filter((e12) => e12.poster_path).slice(0, 20);
        tp[e11] = a4, U2(a4), N2(false), A2(0);
      });
    }, [t2, en2, L2, I2, O2]), (0, s.useEffect)(() => {
      A2(0);
    }, [L2, I2, O2, R2]);
    let es2 = !!et2.text && !R2, ei2 = (0, s.useMemo)(() => {
      let e11 = p2;
      return "all" !== L2 && (e11 = e11.filter((e12) => e12.media_type === L2)), ea2 && (e11 = e11.filter((e12) => {
        let t3 = e12.genre_ids || [];
        return null != ea2.movie && t3.includes(ea2.movie) || null != ea2.tv && t3.includes(ea2.tv);
      })), et2.year && (e11 = e11.filter((e12) => tf(e12) === et2.year)), tw(e11, I2);
    }, [p2, L2, ea2, et2.year, I2]), el2 = (0, s.useMemo)(() => ei2.filter((e11) => "movie" === e11.media_type), [ei2]), er2 = (0, s.useMemo)(() => ei2.filter((e11) => "tv" === e11.media_type), [ei2]), eo2 = "all" !== L2 || ea2 || et2.year ? [] : f2, ec2 = v2 && eo2.length > 0, ed2 = ec2 ? eo2.length : 0, eh2 = ed2 + el2.length, eu2 = ec2 ? 0 : el2.length + er2.length, em2 = es2 && k2 && !j2 && 0 === ei2.length && 0 === eo2.length, ep2 = (0, s.useMemo)(() => E2.filter((e11) => !_2.some((t3) => t3.id === e11.id && t3.media_type === e11.media_type)), [E2, _2]), ex2 = (0, s.useMemo)(() => J2.filter((e11) => "movie" === e11.media_type), [J2]), ef2 = (0, s.useMemo)(() => J2.filter((e11) => "tv" === e11.media_type), [J2]), eg2 = (0, s.useMemo)(() => R2 ? W2 : es2 ? ei2.length || eo2.length ? ec2 ? [...eo2, ...el2, ...er2] : [...el2, ...er2, ...eo2] : em2 ? E2 : [] : en2 ? [...ex2, ...ef2] : [..._2, ...ep2], [R2, W2, es2, ei2.length, eo2, ec2, el2, er2, em2, E2, en2, ex2, ef2, _2, ep2]), ew2 = (0, s.useCallback)((e11) => {
      var t3, a3;
      if ("person" === e11.media_type) {
        H2(e11), d2("");
        return;
      }
      !(function(e12) {
        try {
          if (!(0, o.sb)().rememberSearches) return;
          let t4 = [e12, ...tx().filter((t5) => t5.id !== e12.id || t5.media_type !== e12.media_type)].slice(0, 5);
          localStorage.setItem(tc, JSON.stringify(t4));
        } catch (e13) {
        }
      })(e11), i2(), l2({ id: e11.id, type: e11.media_type, title: e11.title, name: e11.name, poster_path: null != (t3 = e11.poster_path) ? t3 : void 0, backdrop_path: null != (a3 = e11.backdrop_path) ? a3 : "", overview: e11.overview, first_air_date: e11.first_air_date, release_date: e11.release_date, genre_ids: e11.genre_ids, vote_average: e11.vote_average, classification: void 0, logo_path: void 0, logo_width: void 0, logo_height: void 0 });
    }, [i2, l2]);
    (0, s.useEffect)(() => {
      if (!t2) return;
      let e11 = (e12) => {
        "ArrowDown" === e12.key ? (e12.preventDefault(), P2.current = true, A2((e13) => eg2.length ? (e13 + 1) % eg2.length : 0)) : "ArrowUp" === e12.key ? (e12.preventDefault(), P2.current = true, A2((e13) => eg2.length ? (e13 - 1 + eg2.length) % eg2.length : 0)) : "Enter" === e12.key && eg2[M2] && ew2(eg2[M2]);
      };
      return window.addEventListener("keydown", e11), () => window.removeEventListener("keydown", e11);
    }, [t2, eg2, M2, ew2]);
    let eb2 = (e11, t3) => (0, n.jsx)("div", { className: "grid gap-3.5 px-5 pb-5 pt-1.5 ".concat(3 === ee2 ? "grid-cols-3" : "grid-cols-4"), children: e11.map((e12, s2) => (0, n.jsx)(tv, { kbNav: P2, item: e12, selected: !a2 && M2 === t3 + s2, onHover: () => A2(t3 + s2), onPick: () => ew2(e12) }, "".concat(e12.media_type).concat(e12.id))) }), ev2 = (0, n.jsxs)("div", { className: "ov-toolbar border-b border-white/[0.07]", children: [(0, n.jsx)("div", { onWheel: tS, className: "no-scrollbar flex items-center gap-2 overflow-x-auto px-4 pt-2.5 [mask-image:linear-gradient(to_right,black_calc(100%-28px),transparent)]", children: R2 ? (0, n.jsxs)("button", { onClick: () => {
      H2(null), q2([]);
    }, className: "flex h-8 shrink-0 items-center gap-1.5 rounded-full bg-white px-3.5 text-[11.5px] font-semibold uppercase tracking-[0.08em] text-black", children: [R2.name, (0, n.jsx)(e4.U_s, { className: "h-3 w-3" })] }) : (0, n.jsxs)(n.Fragment, { children: [["all", "movie", "tv"].map((e11) => (0, n.jsx)(tk, { on: L2 === e11, onClick: () => z2(e11), children: "all" === e11 ? "All" : "movie" === e11 ? "Movies" : "TV" }, e11)), (0, n.jsx)("span", { className: "mx-1.5 h-4 w-px shrink-0 bg-white/[0.1]", "aria-hidden": true }), td.map((e11) => {
      let [t3, a3] = e11;
      return (0, n.jsx)(tk, { on: I2 === t3 && "relevance" !== I2, onClick: () => D2(t3), children: a3 }, t3);
    })] }) }), !R2 && (0, n.jsx)("div", { onWheel: tS, className: "flex items-center gap-2 px-4 pb-3 pt-1.5 ".concat(a2 ? "no-scrollbar overflow-x-auto [mask-image:linear-gradient(to_right,black_calc(100%-28px),transparent)]" : "flex-wrap"), children: th.map((e11, t3) => (0, n.jsx)(tk, { on: O2 === t3, onClick: () => F2(O2 === t3 ? null : t3), children: e11.label }, e11.label)) }), R2 && (0, n.jsx)("div", { className: "pb-3" })] }), ey2 = (e11) => eo2.length > 0 ? (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: "People" }), eo2.map((t3, s2) => (0, n.jsx)(tb, { kbNav: P2, item: t3, query: et2.text, tall: e11, selected: !a2 && M2 === eu2 + s2, onHover: () => A2(eu2 + s2), onPick: () => ew2(t3) }, "p".concat(t3.id)))] }) : null, ej2 = (e11) => (0, n.jsxs)("div", { className: "transition-opacity duration-200 ".concat(j2 && eg2.length ? "opacity-50" : "opacity-100"), children: [j2 && !eg2.length && (es2 ? (0, n.jsx)(tj, { tall: e11 }) : (0, n.jsx)(tN, { cols: ee2 })), R2 && W2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)(ty, { children: ["Filmography \xB7 ", R2.name] }), eb2(W2, 0)] }), es2 && (ei2.length > 0 || eo2.length > 0) && (0, n.jsxs)(n.Fragment, { children: [w2 && ei2.length > 0 && (0, n.jsxs)("p", { className: "px-5 pt-3 text-[13px] text-white/35", children: ["Closest matches for \u201C", w2, "\u201D"] }), ec2 && ey2(e11), el2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: "Movies" }), el2.map((t3, s2) => (0, n.jsx)(tb, { kbNav: P2, item: t3, query: et2.text, tall: e11, showType: false, selected: !a2 && M2 === ed2 + s2, onHover: () => A2(ed2 + s2), onPick: () => ew2(t3) }, "m".concat(t3.id)))] }), er2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: "TV Shows" }), er2.map((t3, s2) => (0, n.jsx)(tb, { kbNav: P2, item: t3, query: et2.text, tall: e11, showType: false, selected: !a2 && M2 === eh2 + s2, onHover: () => A2(eh2 + s2), onPick: () => ew2(t3) }, "t".concat(t3.id)))] }), !ec2 && ey2(e11)] }), em2 && (0, n.jsxs)("div", { className: "pt-2", children: [(0, n.jsxs)("p", { className: "px-4 pt-4 text-center text-[15px] font-semibold text-white/90", children: ["No results for \u201C", et2.text, "\u201D"] }), (0, n.jsx)("p", { className: "px-4 pb-3 pt-1 text-center text-[13px] text-white/35", children: "Try different filters or a broader title." }), E2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: "Trending now" }), eb2(E2, 0)] })] }), en2 && !es2 && !R2 && J2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [ex2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: ea2 ? "".concat(ea2.label, " \xB7 Movies") : "Movies" }), eb2(ex2, 0)] }), ef2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: ea2 ? "".concat(ea2.label, " \xB7 TV") : "TV Shows" }), eb2(ef2, ex2.length)] })] }), !es2 && !R2 && !en2 && (0, n.jsxs)(n.Fragment, { children: [_2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: "Recent" }), _2.map((t3, s2) => (0, n.jsx)(tb, { kbNav: P2, item: t3, query: "", tall: e11, selected: !a2 && M2 === s2, onHover: () => A2(s2), onPick: () => ew2(t3), onRemove: () => {
      try {
        localStorage.setItem(tc, JSON.stringify(tx().filter((e12) => e12.id !== t3.id || e12.media_type !== t3.media_type)));
      } catch (e12) {
      }
      C2(tx());
    } }, "r".concat(t3.media_type).concat(t3.id)))] }), ep2.length > 0 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(ty, { children: "Trending now" }), eb2(ep2, _2.length)] })] }), (0, n.jsx)("span", { "aria-live": "polite", className: "sr-only", children: es2 ? "".concat(ei2.length + eo2.length, " results") : "" })] }), eN2 = "\n    .search-shimmer {\n      background: linear-gradient(90deg, rgba(255,255,255,0.05) 40%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.05) 60%);\n      background-size: 200% 100%;\n      animation: searchShimmer 1.5s linear infinite;\n    }\n    @keyframes searchShimmer {\n      from { background-position: 200% 0; }\n      to { background-position: -200% 0; }\n    }\n    .no-scrollbar::-webkit-scrollbar { display: none; }\n    .no-scrollbar { scrollbar-width: none; }\n  ";
    return a2 ? (0, n.jsx)(h.N, { children: t2 && (0, n.jsxs)(u.P.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.15 }, className: "ov-panel ov-search-mobile fixed inset-0 z-[100] bg-[#0b0c10]", children: [(0, n.jsx)("style", { children: eN2 }), (0, n.jsxs)("div", { className: "flex h-full flex-col", children: [(0, n.jsxs)("div", { className: "px-3 pb-0 pt-[max(10px,env(safe-area-inset-top))]", children: [(0, n.jsxs)("div", { className: "flex items-center gap-2 pb-2", children: [(0, n.jsx)("button", { onClick: i2, className: "inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-white/80", "aria-label": "Close search", children: (0, n.jsx)(e4.AqJ, { className: "h-5 w-5" }) }), (0, n.jsxs)("div", { className: "ov-search-field flex min-h-[44px] flex-1 items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.06] px-4", children: [(0, n.jsx)(m.KSO, { className: "h-4 w-4 shrink-0 text-white/35" }), (0, n.jsx)("input", { value: c2, onChange: (e11) => d2(e11.target.value), placeholder: K2 ? "Listening\u2026" : "Search movies, shows, people\u2026", autoFocus: true, className: "h-full w-full bg-transparent text-[16px] text-white caret-white outline-none placeholder:text-white/35" }), Q2 && (0, n.jsxs)("button", { onClick: $2, "aria-label": K2 ? "Stop listening" : "Voice search", className: "relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ".concat(K2 ? "bg-white text-black" : "text-white/35"), children: [K2 && (0, n.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-white/25", "aria-hidden": true }), (0, n.jsx)(m.i0t, { className: "h-3.5 w-3.5" })] }), c2 && (0, n.jsx)("button", { onClick: () => d2(""), "aria-label": "Clear", className: "text-white/35", children: (0, n.jsx)(e4.U_s, { className: "h-4 w-4" }) })] })] }), ev2] }), (0, n.jsx)("div", { className: "flex-1 overflow-y-auto pb-[calc(24px+env(safe-area-inset-bottom))] pt-1", children: ej2(true) })] })] }) }) : (0, n.jsx)(h.N, { children: t2 && (0, n.jsxs)(u.P.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0.12 } }, transition: { duration: 0.18 }, className: "fixed inset-0 z-[100] flex items-start justify-center bg-black/60 px-4 pt-[8vh]", children: [(0, n.jsx)("style", { children: eN2 }), (0, n.jsx)(u.P.div, { initial: { opacity: 0, scale: 0.97, y: -6 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.98, transition: { duration: 0.12 } }, transition: { duration: 0.18, ease: [0.23, 1, 0.32, 1] }, className: "w-full max-w-[820px]", children: (0, n.jsxs)("div", { ref: V2, role: "dialog", "aria-label": "Search", className: "ov-panel ov-search-panel overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(11,12,16,0.93)] shadow-[0_32px_80px_rgba(0,0,0,0.65)] backdrop-blur-2xl backdrop-saturate-[1.8]", children: [(0, n.jsxs)("div", { className: "ov-search-inputrow flex items-center gap-3.5 border-b border-white/[0.07] px-5", children: [(0, n.jsx)(m.KSO, { className: "h-4 w-4 shrink-0 text-white/30" }), (0, n.jsx)("input", { ref: Y2, value: c2, onChange: (e11) => d2(e11.target.value), placeholder: R2 ? "Browsing ".concat(R2.name) : K2 ? "Listening\u2026" : "Search movies, shows, people\u2026", autoFocus: true, disabled: !!R2, className: "w-full bg-transparent py-4 text-[17px] text-white caret-white outline-none placeholder:text-white/30 disabled:opacity-60" }), Q2 && !R2 && (0, n.jsxs)("button", { onClick: $2, "aria-label": K2 ? "Stop listening" : "Voice search", title: "Voice search", className: "relative inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors ".concat(K2 ? "bg-white text-black" : "text-white/35 hover:text-white/70"), children: [K2 && (0, n.jsx)("span", { className: "absolute inset-0 animate-ping rounded-full bg-white/25", "aria-hidden": true }), (0, n.jsx)(m.i0t, { className: "h-3.5 w-3.5" })] }), (0, n.jsx)("kbd", { className: "ov-kbd inline-flex h-[19px] shrink-0 items-center rounded bg-white/[0.08] px-1.5 text-[10.5px] font-semibold tracking-wide text-white/35", children: "esc" })] }), ev2, (0, n.jsx)("div", { className: "h-[min(560px,62vh)] overflow-y-auto overscroll-contain py-1 [scrollbar-width:thin] [scrollbar-color:rgba(255,255,255,0.12)_transparent]", children: ej2(false) })] }) })] }) });
  }
  var tC = a(674), tE = a(9051), tT = a(6267);
  function tM(e10) {
    let { on: t2, onChange: a2, label: s2 } = e10;
    return (0, n.jsx)("button", { role: "switch", "aria-checked": t2, "aria-label": s2, onClick: () => a2(!t2), className: "ov-toggle relative h-[28px] w-[46px] shrink-0 rounded-full transition-colors duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 ".concat(t2 ? "bg-white" : "bg-white/[0.16] hover:bg-white/[0.22]"), children: (0, n.jsx)("span", { className: "ov-knob absolute left-[2px] top-[2px] block h-6 w-6 rounded-full shadow-[0_1px_2px_rgba(0,0,0,0.35)] transition-transform duration-200 ease-[cubic-bezier(0.3,0.9,0.4,1)] ".concat(t2 ? "translate-x-[18px] bg-black" : "translate-x-0 bg-white/90") }) });
  }
  function tA(e10) {
    let { title: t2, description: a2, children: s2 } = e10;
    return (0, n.jsxs)("div", { className: "ov-set-row flex items-center justify-between gap-6 px-4 py-3.5", children: [(0, n.jsxs)("div", { className: "min-w-0", children: [(0, n.jsx)("p", { className: "text-[14px] font-medium text-white/90", children: t2 }), (0, n.jsx)("p", { className: "mt-1 text-[12px] leading-relaxed text-white/55", children: a2 })] }), s2] });
  }
  function tP(e10) {
    let { label: t2, children: a2 } = e10;
    return (0, n.jsxs)("section", { className: "ov-group px-5 pt-5", children: [(0, n.jsx)("p", { className: "ov-group-label px-1 pb-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: t2 }), (0, n.jsx)("div", { className: "ov-group-card divide-y divide-white/[0.05] rounded-xl bg-white/[0.035] ring-1 ring-white/[0.05]", children: a2 })] });
  }
  let tL = [["quick", "1 min"], ["standard", "2\xBD min"], ["later", "5 min"]], tz = [["subtle", "Subtle"], ["standard", "Standard"], ["vivid", "Vivid"]];
  function tI(e10) {
    let { show: t2, onClose: a2 } = e10, i2 = (0, e5.Z)(), l2 = (0, o.t0)(), { enabled: r2, toggle: c2 } = (0, tE.g)(), d2 = (0, s.useRef)(null), [m2, p2] = (0, s.useState)("unavailable");
    (0, s.useEffect)(() => {
      let e11 = () => p2((0, tT.d6)());
      return e11(), window.addEventListener(tT.Mj, e11), () => window.removeEventListener(tT.Mj, e11);
    }, []);
    let [x2, f2] = (0, s.useState)(false);
    return (0, s.useEffect)(() => {
      let e11 = window.matchMedia("(max-width: 767px)"), t3 = () => f2(e11.matches);
      return t3(), e11.addEventListener("change", t3), () => e11.removeEventListener("change", t3);
    }, []), (0, s.useEffect)(() => {
      if (!t2) return;
      let e11 = (e12) => {
        if ("Escape" === e12.key) return void a2();
        if ("Tab" !== e12.key) return;
        let t3 = d2.current;
        if (!t3) return;
        let n3 = t3.querySelectorAll('button, [href], input, select, [tabindex]:not([tabindex="-1"])');
        if (!n3.length) return;
        let s2 = n3[0], i3 = n3[n3.length - 1], l3 = document.activeElement;
        e12.shiftKey ? l3 && l3 !== s2 && t3.contains(l3) || (e12.preventDefault(), i3.focus()) : l3 && l3 !== i3 && t3.contains(l3) || (e12.preventDefault(), s2.focus());
      }, n2 = (e12) => {
        d2.current && !d2.current.contains(e12.target) && a2();
      };
      return window.addEventListener("keydown", e11), document.addEventListener("mousedown", n2), () => {
        window.removeEventListener("keydown", e11), document.removeEventListener("mousedown", n2);
      };
    }, [t2, a2]), (0, s.useEffect)(() => {
      if (t2) return (0, w.jz)(), () => (0, w.yq)();
    }, [t2]), (0, s.useEffect)(() => {
      if (!t2) return;
      let e11 = document.activeElement, a3 = requestAnimationFrame(() => {
        var e12;
        return null == (e12 = d2.current) ? void 0 : e12.focus();
      });
      return () => {
        var t3;
        cancelAnimationFrame(a3), e11 && e11.isConnected ? e11.focus() : null == (t3 = document.querySelector('[aria-label="Account"]')) || t3.focus();
      };
    }, [t2]), (0, n.jsx)(tC.x, { reducedMotion: "user", children: (0, n.jsx)(h.N, { children: t2 && (0, n.jsx)(u.P.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0, transition: { duration: 0.12 } }, transition: { duration: 0.18 }, className: "fixed inset-0 z-[110] flex bg-black/60 ".concat(x2 ? "items-end" : "items-center justify-center px-4 py-6"), children: (0, n.jsx)(u.P.div, { initial: x2 ? { y: "100%" } : { opacity: 0, scale: 0.97, y: -6 }, animate: x2 ? { y: 0 } : { opacity: 1, scale: 1, y: 0 }, exit: x2 ? { y: "100%", transition: { type: "spring", stiffness: 380, damping: 40 } } : { opacity: 0, scale: 0.98, transition: { duration: 0.12 } }, transition: x2 ? { type: "spring", stiffness: 320, damping: 32 } : { duration: 0.18, ease: [0.23, 1, 0.32, 1] }, className: x2 ? "w-full" : "w-full max-w-[540px]", style: x2 ? { willChange: "transform" } : void 0, children: (0, n.jsxs)("div", { ref: d2, role: "dialog", "aria-modal": "true", "aria-label": "Settings", tabIndex: -1, className: x2 ? "ov-panel ov-settings-sheet flex h-[92dvh] flex-col overflow-hidden rounded-t-[24px] border-t border-white/[0.08] bg-[#0c0d11] shadow-[0_-12px_40px_rgba(0,0,0,0.42)] outline-none" : "ov-panel ov-settings-panel flex max-h-[min(78vh,700px)] flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(11,12,16,0.93)] shadow-[0_32px_80px_rgba(0,0,0,0.65)] outline-none backdrop-blur-2xl backdrop-saturate-[1.8]", children: [x2 && (0, n.jsx)("span", { className: "mx-auto mt-2 block h-[5px] w-9 shrink-0 rounded-full bg-white/20", "aria-hidden": true }), (0, n.jsxs)("div", { className: "flex shrink-0 items-center justify-between border-b border-white/[0.07] px-6 py-4", children: [(0, n.jsx)("h2", { className: "text-[16px] font-semibold tracking-[-0.01em] text-white", children: "Settings" }), (0, n.jsx)("button", { onClick: a2, className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.07] text-white/60 outline-none transition-colors hover:bg-white/[0.14] hover:text-white focus-visible:ring-2 focus-visible:ring-white/40", "aria-label": "Close settings", children: (0, n.jsx)(e4.U_s, { className: "h-4 w-4" }) })] }), (0, n.jsxs)("div", { className: "min-h-0 flex-1 overflow-y-auto overscroll-contain [scrollbar-color:rgba(255,255,255,0.12)_transparent] [scrollbar-width:thin] ".concat(x2 ? "pb-[calc(env(safe-area-inset-bottom)+16px)]" : ""), children: [(0, n.jsxs)(tP, { label: "Browsing", children: [(0, n.jsx)(tA, { title: "Ambience", description: "Lets the page glow in the artwork's colors.", children: (0, n.jsx)(tM, { on: l2.ambience, onChange: (e11) => (0, o.cz)("ambience", e11), label: "Ambience" }) }), (0, n.jsx)(h.N, { initial: false, children: l2.ambience && (0, n.jsx)(u.P.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] }, className: "overflow-hidden", children: (0, n.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3", children: [(0, n.jsx)("p", { className: "text-[13px] text-white/55", children: "Intensity" }), (0, n.jsx)("div", { role: "radiogroup", "aria-label": "Ambience intensity", className: "ov-pills flex rounded-full bg-white/[0.06] p-[3px]", children: tz.map((e11, t3) => {
      let [a3, s2] = e11, i3 = l2.ambienceIntensity === a3;
      return (0, n.jsxs)("button", { role: "radio", "aria-checked": i3, tabIndex: i3 ? 0 : -1, onClick: () => (0, o.cz)("ambienceIntensity", a3), onKeyDown: (e12) => {
        var a4, n2;
        if ("ArrowLeft" !== e12.key && "ArrowRight" !== e12.key) return;
        e12.preventDefault();
        let s3 = (t3 + ("ArrowRight" === e12.key ? 1 : -1) + tz.length) % tz.length;
        (0, o.cz)("ambienceIntensity", tz[s3][0]), null == (n2 = e12.currentTarget.parentElement) || null == (a4 = n2.children[s3]) || a4.focus();
      }, className: "ov-pill relative h-[26px] rounded-full px-3.5 text-[12px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-white/40", children: [i3 && (0, n.jsx)(u.P.span, { layoutId: "settings-intensity-pill", className: "ov-pill-active absolute inset-0 rounded-full bg-white", transition: { type: "spring", stiffness: 500, damping: 40 } }), (0, n.jsx)("span", { className: "relative z-10 transition-colors duration-150 ".concat(i3 ? "text-black" : "text-white/50 hover:text-white/80"), children: s2 })] }, a3);
    }) })] }) }, "intensity") }), !x2 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(tA, { title: "Card trailer previews", description: "Play a muted trailer when you rest on a card for a moment.", children: (0, n.jsx)(tM, { on: l2.cardTrailers, onChange: (e11) => (0, o.cz)("cardTrailers", e11), label: "Card trailer previews" }) }), (0, n.jsx)(tA, { title: "Hero trailers", description: "Autoplay the featured title's trailer at the top of Home, Movies and TV.", children: (0, n.jsx)(tM, { on: l2.heroTrailers, onChange: (e11) => (0, o.cz)("heroTrailers", e11), label: "Hero trailers" }) })] }), (0, n.jsx)(tA, { title: "Continue Watching", description: "Show your in-progress titles on the homepage.", children: (0, n.jsx)(tM, { on: l2.showContinueWatching, onChange: (e11) => (0, o.cz)("showContinueWatching", e11), label: "Continue Watching" }) }), (0, n.jsx)(tA, { title: "For You", description: "A rail of picks matched to what you've been watching.", children: (0, n.jsx)(tM, { on: l2.forYouRow, onChange: (e11) => (0, o.cz)("forYouRow", e11), label: "For You" }) }), (0, n.jsx)(tA, { title: "New Seasons", description: "Flags shows you watched when a season you haven't seen drops.", children: (0, n.jsx)(tM, { on: l2.newSeasonsRow, onChange: (e11) => (0, o.cz)("newSeasonsRow", e11), label: "New Seasons" }) }), (0, n.jsx)(tA, { title: "This Week", description: "Upcoming episodes from shows you watch, day by day.", children: (0, n.jsx)(tM, { on: l2.weekSchedule, onChange: (e11) => (0, o.cz)("weekSchedule", e11), label: "This Week" }) })] }), (0, n.jsxs)(tP, { label: "Screensaver", children: [(0, n.jsx)(tA, { title: "Ambient mode", description: "After sitting idle, the screen dims into trending artwork with a clock. Any input wakes it.", children: (0, n.jsx)(tM, { on: l2.ambientMode, onChange: (e11) => (0, o.cz)("ambientMode", e11), label: "Ambient mode" }) }), (0, n.jsx)(h.N, { initial: false, children: l2.ambientMode && (0, n.jsx)(u.P.div, { initial: { height: 0, opacity: 0 }, animate: { height: "auto", opacity: 1 }, exit: { height: 0, opacity: 0 }, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] }, className: "overflow-hidden", children: (0, n.jsxs)("div", { className: "flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-3", children: [(0, n.jsx)("p", { className: "text-[13px] text-white/55", children: "Starts after" }), (0, n.jsx)("div", { role: "radiogroup", "aria-label": "Screensaver delay", className: "ov-pills flex rounded-full bg-white/[0.06] p-[3px]", children: tL.map((e11, t3) => {
      let [a3, s2] = e11, i3 = l2.ambientDelay === a3;
      return (0, n.jsxs)("button", { role: "radio", "aria-checked": i3, tabIndex: i3 ? 0 : -1, onClick: () => (0, o.cz)("ambientDelay", a3), onKeyDown: (e12) => {
        var a4, n2;
        if ("ArrowLeft" !== e12.key && "ArrowRight" !== e12.key) return;
        e12.preventDefault();
        let s3 = (t3 + ("ArrowRight" === e12.key ? 1 : -1) + tL.length) % tL.length;
        (0, o.cz)("ambientDelay", tL[s3][0]), null == (n2 = e12.currentTarget.parentElement) || null == (a4 = n2.children[s3]) || a4.focus();
      }, className: "ov-pill relative h-[26px] rounded-full px-3.5 text-[12px] font-medium outline-none focus-visible:ring-2 focus-visible:ring-white/40", children: [i3 && (0, n.jsx)(u.P.span, { layoutId: "settings-ambient-delay-pill", className: "ov-pill-active absolute inset-0 rounded-full bg-white", transition: { type: "spring", stiffness: 500, damping: 40 } }), (0, n.jsx)("span", { className: "relative z-10 transition-colors duration-150 ".concat(i3 ? "text-black" : "text-white/50 hover:text-white/80"), children: s2 })] }, a3);
    }) })] }) }, "ambient-delay") })] }), (0, n.jsxs)(tP, { label: "Playback", children: [(0, n.jsx)(tA, { title: "Auto-play next", description: "Count down and jump to the next episode (or a recommended movie) in the final seconds.", children: (0, n.jsx)(tM, { on: l2.autoNext, onChange: (e11) => (0, o.cz)("autoNext", e11), label: "Auto-play next" }) }), (0, n.jsx)(tA, { title: "Auto-skip intros & recaps", description: "Jumps past intros and recaps automatically when community timings exist. Credits always get a skip button instead.", children: (0, n.jsx)(tM, { on: l2.autoSkip, onChange: (e11) => (0, o.cz)("autoSkip", e11), label: "Auto-skip intros and recaps" }) }), (0, n.jsx)(tA, { title: "Spoiler shield", description: "Blurs stills and synopses of episodes you haven't watched. Hover to peek.", children: (0, n.jsx)(tM, { on: l2.spoilerShield, onChange: (e11) => (0, o.cz)("spoilerShield", e11), label: "Spoiler shield" }) })] }), (0, n.jsx)(tP, { label: "Search", children: (0, n.jsx)(tA, { title: "Remember recent searches", description: "Keep your last few picks in the search panel for quick access.", children: (0, n.jsx)(tM, { on: l2.rememberSearches, onChange: (e11) => (0, o.cz)("rememberSearches", e11), label: "Remember recent searches" }) }) }), (0, n.jsx)(tP, { label: "Privacy", children: (0, n.jsx)(tA, { title: "Pause watch history", description: "While paused, nothing you watch is recorded \u2014 no history, no stats, no personalization.", children: (0, n.jsx)(tM, { on: l2.pauseHistory, onChange: (e11) => (0, o.cz)("pauseHistory", e11), label: "Pause watch history" }) }) }), (0, n.jsx)(tP, { label: "Ads", children: (0, n.jsx)(tA, { title: "Show ads", description: "Ads keep the site running. Takes effect after a reload.", children: (0, n.jsx)(tM, { on: r2, onChange: () => c2(), label: "Show ads" }) }) }), (0, n.jsx)(tP, { label: "App", children: (0, n.jsxs)(tA, { title: "Install ".concat(i2.name), description: "installed" === m2 ? "Installed \u2014 launch it from your home screen or dock." : "ios-guide" === m2 ? 'In Safari: tap the Share button, then "Add to Home Screen". Full-screen, with its own icon.' : "promptable" === m2 ? "Full-screen app with its own icon \u2014 no app store needed." : "dismissed" === m2 ? "Prompt dismissed \u2014 reload the page to try again, or use the browser menu: \u22EE \u2192 Install app." : 'If your browser supports it, an Install button appears here \u2014 or look for "Install app" / "Add to Home Screen" in the browser menu.', children: ["promptable" === m2 && (0, n.jsx)("button", { onClick: () => (0, tT.iH)(), className: "h-9 shrink-0 rounded-full bg-white px-4 text-[13px] font-semibold text-black transition-transform active:scale-[0.97]", children: "Install" }), "installed" === m2 && (0, n.jsx)("span", { className: "shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: "Installed" })] }) }), (0, n.jsx)("p", { className: "px-6 pb-5 pt-4 text-center text-[11px] text-white/45", children: "Saved automatically on this device." })] })] }) }) }) }) });
  }
  let tD = { type: "spring", stiffness: 400, damping: 30 }, tO = { type: "spring", bounce: 0.15, duration: 0.55 };
  function tF(e10) {
    let { active: t2, setTab: a2, onSelect: i2 } = e10, l2 = (0, e5.Z)(), [r2, o2] = (0, s.useState)(false), [c2, d2] = (0, s.useState)(false), [p2, x2] = (0, s.useState)(false), [f2, g2] = (0, s.useState)(false), [b2, v2] = (0, s.useState)(false), [y2, j2] = (0, s.useState)(null), [N2, k2] = (0, s.useState)(null), [S2, _2] = (0, s.useState)(null), [C2, E2] = (0, s.useState)(t2), [T2, M2] = (0, s.useState)(false), [A2, P2] = (0, s.useState)(true), L2 = async () => {
      try {
        await fetch("/api/auth/logout", { method: "POST" });
      } catch (e11) {
      }
      g2(false), k2(false), window.location.reload();
    }, z2 = () => {
      window.location.href = "/auth";
    };
    (0, s.useEffect)(() => {
      if (!f2) return;
      let e11 = (e12) => {
        "Escape" === e12.key && g2(false);
      }, t3 = (e12) => {
        var t4;
        let a3 = e12.target;
        (null == (t4 = a3.closest) ? void 0 : t4.call(a3, "[data-account-menu]")) || g2(false);
      };
      return window.addEventListener("keydown", e11), document.addEventListener("mousedown", t3), () => {
        window.removeEventListener("keydown", e11), document.removeEventListener("mousedown", t3);
      };
    }, [f2]);
    let { scrollY: I2 } = (0, ez.L)();
    (0, eI.L)(I2, "change", (e11) => {
      var t3;
      if (false !== S2) return;
      let a3 = e11 - (null != (t3 = I2.getPrevious()) ? t3 : 0);
      if (r2) return M2(false);
      a3 > 10 && e11 > 400 ? M2(true) : a3 < 0 && M2(false);
    }), (0, s.useEffect)(() => {
      _2(/Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent));
    }, []), (0, s.useEffect)(() => {
      P2(!/win|linux/i.test(navigator.platform + navigator.userAgent));
    }, []), (0, s.useEffect)(() => {
      fetch("/api/profile").then((e11) => k2(401 !== e11.status)).catch(() => k2(false));
    }, []), (0, s.useEffect)(() => {
      let e11 = (e12) => {
        var t3;
        j2((null == (t3 = e12.detail) ? void 0 : t3.query) || null), d2(false), x2(false), o2(true);
      };
      return window.addEventListener("sixseven:open-search", e11), () => window.removeEventListener("sixseven:open-search", e11);
    }, []), (0, s.useEffect)(() => {
      E2(t2);
    }, [t2]), (0, s.useEffect)(() => {
      let e11 = (e12) => {
        if (p2) return;
        if ((e12.metaKey || e12.ctrlKey) && "k" === e12.key.toLowerCase()) {
          e12.preventDefault(), j2(null), o2((e13) => !e13);
          return;
        }
        if ("/" === e12.key && !r2) {
          let t4 = e12.target;
          t4 && ("INPUT" === t4.tagName || "TEXTAREA" === t4.tagName || t4.isContentEditable) || (e12.preventDefault(), j2(null), o2(true));
          return;
        }
        if (false !== S2 || e12.metaKey || e12.ctrlKey || e12.altKey || 1 !== e12.key.length || " " === e12.key || "/" === e12.key) return;
        let t3 = e12.target;
        if (!t3 || "INPUT" !== t3.tagName && "TEXTAREA" !== t3.tagName && !t3.isContentEditable) {
          if (r2) return void j2((t4) => (t4 || "") + e12.key);
          (0, w.iG)() > 0 || (e12.preventDefault(), j2(e12.key), o2(true));
        }
      };
      return window.addEventListener("keydown", e11), () => window.removeEventListener("keydown", e11);
    }, [S2, r2, p2]), (0, s.useEffect)(() => {
      if (!S2 || !b2) return;
      let e11 = (e12) => {
        "Escape" === e12.key && v2(false);
      };
      return window.addEventListener("keydown", e11), () => window.removeEventListener("keydown", e11);
    }, [S2, b2]), (0, s.useEffect)(() => {
      if (r2 || true === S2 && b2) return (0, w.jz)(), () => (0, w.yq)();
    }, [S2, b2, r2]);
    let D2 = [["Home", "home", (0, n.jsx)(eD.rTq, { className: "h-4 w-4" }, "home")], ["Movies", "movie", (0, n.jsx)(eD.Gcy, { className: "h-4 w-4" }, "movie")], ["TV", "tv", (0, n.jsx)(eD.ue7, { className: "h-4 w-4" }, "tv")], ["4K", "uhd", (0, n.jsx)(eL.O, { className: "h-4 w-4" }, "uhd")]], O2 = (0, s.useRef)({}), [F2, R2] = (0, s.useState)(null), H2 = (0, s.useRef)({}), [W2, q2] = (0, s.useState)(null), J2 = (0, s.useRef)(null), U2 = (0, s.useRef)(false);
    U2.current = r2 || b2 || c2 || p2, (0, s.useEffect)(() => {
      var e11, t3;
      if (null === S2) return;
      let a3 = S2 ? H2 : O2, n2 = S2 ? q2 : R2, s2 = () => {
        let e12 = {};
        for (let [, t4] of D2) {
          let n3 = a3.current[t4];
          n3 && (e12[t4] = { x: n3.offsetLeft, w: n3.offsetWidth });
        }
        n2(e12);
      };
      return s2(), window.addEventListener("resize", s2), null == (t3 = document.fonts) || null == (e11 = t3.ready) || e11.then(s2).catch(() => {
      }), () => window.removeEventListener("resize", s2);
    }, [S2]), (0, s.useEffect)(() => {
      if (!S2 || !(/iP(hone|od|ad)/.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1)) return;
      let e11 = J2.current;
      if (!e11) return;
      let t3 = window.visualViewport, a3 = 0, n2 = 0, s2 = 0, i3 = null, l3 = false, r3 = 0, o3 = 0, c3 = -1 / 0, d3 = 0, h2 = 0, u2 = -1 / 0, m2 = () => performance.now(), p3 = () => {
        r3 = m2();
      }, x3 = () => {
        o3 = m2();
      }, f3 = () => (0, w.iG)() > 0 || U2.current || document.body.classList.contains("mobile-details-open") || "hidden" === document.body.style.overflow || "fixed" === document.body.style.position, g3 = () => {
        if (!t3) return 0;
        if (t3.scale > 1.01) return null;
        let e12 = window.innerHeight - t3.height - t3.offsetTop;
        return Math.abs(e12) > 64 ? 0 : e12;
      }, b3 = (e12) => {
        if (1 !== e12.touches.length) {
          i3 = null;
          return;
        }
        let t4 = e12.touches[0];
        i3 = t4.identifier, a3 = t4.clientX, n2 = t4.clientY, s2 = m2(), l3 = false;
      }, v3 = (e12) => {
        if (null === i3) return;
        if (e12.touches.length > 1) {
          i3 = null;
          return;
        }
        let t4 = e12.touches[0];
        (Math.abs(t4.clientX - a3) > 10 || Math.abs(t4.clientY - n2) > 10) && (l3 = true);
      }, y3 = (t4) => {
        let a4 = i3;
        if (i3 = null, null === a4 || t4.defaultPrevented || t4.touches.length > 0 || 1 !== t4.changedTouches.length) return;
        let n3 = t4.changedTouches[0];
        if (n3.identifier !== a4 || l3 || m2() - s2 > 500 || m2() - r3 < 100 || m2() - c3 < 500 || f3()) return;
        let p4 = g3();
        if (null === p4) return;
        let x4 = n3.clientX, w2 = n3.clientY, b4 = e11.getBoundingClientRect();
        if (x4 < b4.left - 4 || x4 > b4.right + 4) return;
        let v4 = document.elementFromPoint(x4, w2);
        if (v4 && e11.contains(v4)) return;
        let y4 = Math.abs(p4) > 1 || m2() - o3 < 600, j4 = y4 ? Math.max(p4, 0) + 24 : 8, N3 = y4 ? Math.max(-p4, 0) + 24 : 8;
        if (w2 < b4.top - j4 || w2 > b4.bottom + N3) return;
        let k3 = null, S3 = 1 / 0;
        for (let t5 of Array.from(e11.querySelectorAll("button"))) {
          let e12 = t5.getBoundingClientRect();
          if (x4 >= e12.left - 2 && x4 <= e12.right + 2) {
            k3 = t5;
            break;
          }
          let a5 = Math.abs((e12.left + e12.right) / 2 - x4);
          a5 < S3 && a5 <= 14 && (S3 = a5, k3 = t5);
        }
        if (!k3) {
          y4 && t4.cancelable && (t4.preventDefault(), d3 = x4, h2 = w2, u2 = m2() + 400);
          return;
        }
        t4.cancelable && t4.preventDefault(), c3 = m2(), d3 = x4, h2 = w2, u2 = m2() + 400, k3.click();
      }, j3 = (t4) => {
        if (m2() > u2 || t4.target instanceof Node && e11.contains(t4.target)) return;
        let a4 = t4.clientX - d3, n3 = t4.clientY - h2;
        a4 * a4 + n3 * n3 > 2304 || (u2 = -1 / 0, t4.preventDefault(), t4.stopPropagation());
      };
      return document.addEventListener("touchstart", b3, { capture: true, passive: true }), document.addEventListener("touchmove", v3, { capture: true, passive: true }), document.addEventListener("touchend", y3, { capture: true, passive: false }), document.addEventListener("click", j3, true), window.addEventListener("scroll", p3, { passive: true }), null == t3 || t3.addEventListener("resize", x3), null == t3 || t3.addEventListener("scroll", x3), () => {
        document.removeEventListener("touchstart", b3, true), document.removeEventListener("touchmove", v3, true), document.removeEventListener("touchend", y3, true), document.removeEventListener("click", j3, true), window.removeEventListener("scroll", p3), null == t3 || t3.removeEventListener("resize", x3), null == t3 || t3.removeEventListener("scroll", x3);
      };
    }, [S2]);
    let V2 = (0, s.useCallback)(() => {
      j2(null), o2(true);
    }, []), Y2 = (0, n.jsx)(e1.A, { variant: "nav" });
    return (0, n.jsxs)(n.Fragment, { children: [false === S2 && (0, n.jsx)(u.P.header, { className: "pointer-events-none fixed inset-x-0 top-5 z-50 flex justify-center px-3 nav-wrap nav-wrap-".concat(l2.id), style: { paddingRight: "calc(0.75rem + var(--removed-scrollbar, 0px))" }, initial: { y: -24, opacity: 0 }, animate: { y: T2 ? -110 : 0, opacity: 1 }, transition: { type: "spring", stiffness: 320, damping: 32 }, children: (0, n.jsxs)("nav", { className: "pointer-events-auto isolate relative flex items-center gap-2 rounded-full border border-white/[0.09] bg-[rgba(44,46,54,0.48)] p-[10px] shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-[24px] backdrop-saturate-[1.9] nav-shell nav-shell-".concat(l2.id), style: { transform: "translateZ(0)" }, children: [(0, n.jsx)("span", { className: "pointer-events-none absolute inset-0 rounded-full nav-sheen", style: { background: "linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.02) 45%, rgba(0,0,0,0.05) 100%)" }, "aria-hidden": true }), "classic" !== l2.id && (0, n.jsx)("span", { className: "nav-brand relative", children: Y2 }), (0, n.jsxs)("div", { className: "relative flex items-center gap-2 nav-tabs", onMouseLeave: () => E2(t2), children: [(0, n.jsx)(h.N, { children: (null == F2 ? void 0 : F2[C2]) && C2 !== t2 && (0, n.jsx)(u.P.span, { "aria-hidden": true, className: "absolute top-0 h-11 rounded-full bg-white/[0.1] nav-hoverpill", initial: { opacity: 0, x: F2[C2].x, width: F2[C2].w }, animate: { opacity: 1, x: F2[C2].x, width: F2[C2].w }, exit: { opacity: 0 }, transition: { ...tD, opacity: { duration: 0.12 } }, style: { left: 0 } }, "nav-hover") }), (null == F2 ? void 0 : F2[t2]) && (0, n.jsx)(u.P.span, { "aria-hidden": true, className: "absolute top-0 h-11 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.38)] nav-pill", initial: false, animate: { x: F2[t2].x, width: F2[t2].w }, transition: tO, style: { left: 0 } }), D2.map((e11) => {
      let [s2, i3] = e11, l3 = t2 === i3;
      return (0, n.jsx)("button", { ref: (e12) => {
        O2.current[i3] = e12;
      }, onClick: () => a2(i3), onMouseOver: () => E2(i3), style: { WebkitTapHighlightColor: "transparent" }, className: "relative inline-flex h-11 items-center rounded-full px-[22px] text-[15px] font-semibold outline-none transition-[color,transform] duration-200 focus-visible:ring-2 focus-visible:ring-white/40 ".concat(l3 ? (null == F2 ? void 0 : F2[t2]) ? "text-black" : "bg-white text-black" : "text-white/80 hover:scale-[1.04] hover:text-white", " nav-tab nav-tab-").concat(i3).concat(l3 ? " is-active" : ""), children: s2 }, i3);
    })] }), (0, n.jsx)("span", { className: "relative mx-2.5 h-6 w-px bg-white/[0.12] nav-div", "aria-hidden": true }), (0, n.jsx)("button", { onClick: V2, title: A2 ? "Search  \u2318K" : "Search  Ctrl+K", className: "relative inline-flex h-11 w-11 items-center justify-center rounded-full text-white/80 outline-none transition-[color,transform,background-color] duration-200 hover:scale-[1.06] hover:bg-white/[0.1] hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 nav-icon nav-search", "aria-label": "Search (Cmd+K)", children: (0, n.jsx)(m.KSO, { className: "h-[15px] w-[15px]" }) }), (0, n.jsx)(u.P.span, { className: "relative inline-flex items-center justify-center ".concat(N2 ? "" : "overflow-hidden", " nav-friends"), initial: false, animate: { width: 36 * (false !== N2), opacity: +!!N2 }, transition: { duration: 0.25, ease: "easeOut" }, "aria-hidden": !N2, children: N2 && (0, n.jsx)(e0, {}) }), (0, n.jsxs)("span", { className: "relative nav-account", "data-account-menu": true, children: [(0, n.jsx)("button", { onClick: () => g2((e11) => !e11), className: "relative inline-flex h-11 w-11 items-center justify-center rounded-full outline-none transition-[color,transform,background-color] duration-200 hover:scale-[1.06] hover:bg-white/[0.1] hover:text-white focus-visible:ring-2 focus-visible:ring-white/40 active:scale-95 ".concat(f2 ? "bg-white/[0.12] text-white" : "text-white/80", " nav-icon nav-accbtn"), "aria-label": "Account", "aria-haspopup": "menu", "aria-expanded": f2, children: (0, n.jsx)(m.NBi, { className: "h-5 w-5" }) }), (0, n.jsx)(h.N, { children: f2 && (0, n.jsxs)(u.P.div, { initial: { opacity: 0, scale: 0.96, y: -4 }, animate: { opacity: 1, scale: 1, y: 0 }, exit: { opacity: 0, scale: 0.97, y: -4, transition: { duration: 0.12 } }, transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] }, role: "menu", className: "absolute right-0 top-[calc(100%+10px)] w-52 overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(17,18,24,0.94)] py-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.6)] backdrop-blur-2xl backdrop-saturate-[1.8] nav-menu", children: [N2 && (0, n.jsxs)("button", { role: "menuitem", onClick: () => {
      g2(false), d2(true);
    }, className: "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13.5px] font-medium text-white/80 transition-colors hover:bg-white/[0.07] hover:text-white", children: [(0, n.jsx)(eD.XPP, { className: "h-4 w-4 text-white/50" }), "Profile"] }), (0, n.jsxs)("button", { role: "menuitem", onClick: () => {
      g2(false), x2(true);
    }, className: "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13.5px] font-medium text-white/80 transition-colors hover:bg-white/[0.07] hover:text-white", children: [(0, n.jsx)(eD.rDf, { className: "h-4 w-4 text-white/50" }), "Settings"] }), (0, n.jsx)("div", { className: "mx-3 my-1 h-px bg-white/[0.08]", "aria-hidden": true }), N2 ? (0, n.jsxs)("button", { role: "menuitem", onClick: L2, className: "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13.5px] font-medium text-white/80 transition-colors hover:bg-white/[0.07] hover:text-white", children: [(0, n.jsx)(eD.CWj, { className: "h-4 w-4 text-white/50" }), "Log out"] }) : (0, n.jsxs)("button", { role: "menuitem", onClick: z2, className: "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-[13.5px] font-medium text-white/80 transition-colors hover:bg-white/[0.07] hover:text-white", children: [(0, n.jsx)(eD.VX, { className: "h-4 w-4 text-white/50" }), "Log in"] })] }) })] })] }) }), S2 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)("div", { className: "pointer-events-none fixed inset-x-0 bottom-0 z-[70] flex justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+12px)] dock-wrap dock-wrap-".concat(l2.id), children: (0, n.jsxs)("nav", { ref: J2, className: "pointer-events-auto isolate flex items-center overflow-hidden rounded-full border border-white/[0.08] bg-[rgba(11,12,16,0.93)] p-[6px] shadow-[0_20px_50px_rgba(0,0,0,0.55)] backdrop-blur-md nav-dock nav-dock-".concat(l2.id), style: { transform: "translateZ(0)", WebkitTransform: "translateZ(0)" }, children: [(0, n.jsxs)("div", { className: "relative flex items-center dock-tabs", children: [(null == W2 ? void 0 : W2[t2]) && (0, n.jsx)(u.P.span, { "aria-hidden": true, className: "absolute top-0 h-11 rounded-full bg-white shadow-[0_6px_20px_rgba(0,0,0,0.38)] dock-pill", initial: false, animate: { x: W2[t2].x, width: W2[t2].w }, transition: tO, style: { left: 0 } }), D2.map((e11) => {
      let [s2, i3] = e11;
      return (0, n.jsx)("button", { ref: (e12) => {
        H2.current[i3] = e12;
      }, onClick: () => a2(i3), style: { WebkitTapHighlightColor: "transparent" }, className: "relative inline-flex h-11 items-center rounded-full px-4 text-[13px] font-semibold outline-none transition-colors duration-200 max-[359px]:px-3 ".concat(t2 === i3 ? (null == W2 ? void 0 : W2[t2]) ? "text-black" : "bg-white text-black" : "text-white/80", " dock-tab dock-tab-").concat(i3).concat(t2 === i3 ? " is-active" : ""), children: s2 }, i3);
    })] }), (0, n.jsx)("span", { className: "mx-1.5 h-6 w-px bg-white/[0.12] max-[359px]:mx-0.5 dock-div", "aria-hidden": true }), (0, n.jsx)("button", { onClick: V2, style: { WebkitTapHighlightColor: "transparent" }, className: "inline-flex h-11 w-11 items-center justify-center rounded-full text-white/80 active:bg-white/[0.08] max-[359px]:w-10 dock-icon dock-search", "aria-label": "Search", children: (0, n.jsx)(m.KSO, { className: "h-4 w-4" }) }), (0, n.jsx)("button", { onClick: () => v2(true), style: { WebkitTapHighlightColor: "transparent" }, className: "inline-flex h-11 w-11 items-center justify-center rounded-full active:bg-white/[0.08] max-[359px]:w-10 ".concat(N2 ? "text-white/80" : "text-white/50", " dock-icon dock-accbtn"), "aria-label": "Account", children: (0, n.jsx)(m.NBi, { className: "h-[18px] w-[18px]" }) })] }) }), (0, n.jsx)(h.N, { children: b2 && (0, n.jsxs)("div", { className: "fixed inset-0 z-[80]", children: [(0, n.jsx)(u.P.button, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.18 }, onClick: () => v2(false), className: "absolute inset-0 bg-black/60", "aria-label": "Close account sheet" }), (0, n.jsxs)(u.P.div, { initial: { y: "100%" }, animate: { y: 0 }, exit: { y: "100%" }, transition: { type: "spring", stiffness: 400, damping: 34 }, className: "absolute inset-x-0 bottom-0 rounded-t-2xl border-t border-white/[0.08] bg-[#0c0d11] pb-[max(12px,env(safe-area-inset-bottom))]", children: [(0, n.jsx)("span", { className: "mx-auto mt-2 block h-[5px] w-9 rounded-full bg-white/20", "aria-hidden": true }), (0, n.jsxs)("div", { className: "flex items-center justify-between px-5 pb-1 pt-4", children: [(0, n.jsx)("p", { className: "text-[10.5px] font-semibold uppercase tracking-[0.16em] text-white/30", children: "Account" }), Y2] }), (0, n.jsxs)("div", { className: "px-2 pb-1 pt-1", children: [N2 && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsxs)("button", { onClick: () => {
      d2(true), v2(false);
    }, className: "flex min-h-[52px] w-full items-center gap-3 rounded-xl px-3 text-left text-[14px] font-medium text-white/85 active:bg-white/[0.06]", children: [(0, n.jsx)(m.NBi, { className: "h-4 w-4 text-white/50" }), "Profile"] }), (0, n.jsx)("div", { className: "mx-3 h-px bg-white/[0.07]", "aria-hidden": true })] }), (0, n.jsxs)("button", { onClick: () => {
      x2(true), v2(false);
    }, className: "flex min-h-[52px] w-full items-center gap-3 rounded-xl px-3 text-left text-[14px] font-medium text-white/85 active:bg-white/[0.06]", children: [(0, n.jsx)(eD.rDf, { className: "h-4 w-4 text-white/50" }), "Settings"] }), (0, n.jsx)("div", { className: "mx-3 h-px bg-white/[0.07]", "aria-hidden": true }), N2 ? (0, n.jsxs)("button", { onClick: L2, className: "flex min-h-[52px] w-full items-center gap-3 rounded-xl px-3 text-left text-[14px] font-medium text-white/85 active:bg-white/[0.06]", children: [(0, n.jsx)(eD.CWj, { className: "h-4 w-4 text-white/50" }), "Log out"] }) : (0, n.jsxs)("button", { onClick: z2, className: "flex min-h-[52px] w-full items-center gap-3 rounded-xl px-3 text-left text-[14px] font-medium text-white/85 active:bg-white/[0.06]", children: [(0, n.jsx)(eD.VX, { className: "h-4 w-4 text-white/50" }), "Log in"] })] })] })] }) })] }), (0, n.jsx)(t_, { show: r2, isMobile: null != S2 && S2, initialQuery: y2, onClose: () => {
      o2(false), j2(null);
    }, onSelect: (e11) => {
      o2(false), j2(null), i2(e11);
    } }), (0, n.jsx)(eZ, { show: c2, onClose: () => d2(false) }), (0, n.jsx)(tI, { show: p2, onClose: () => x2(false) })] });
  }
  var tR = a(6006);
  function tH(e10) {
    let { items: t2 } = e10, a2 = (0, e5.Z)(), i2 = (0, s.useMemo)(() => (t2 || []).filter((e11) => e11.backdrop_path).slice(0, 14), [t2]), [l2, r2] = (0, s.useState)(false), [c2, d2] = (0, s.useState)(0), [h2, u2] = (0, s.useState)(false), m2 = (0, s.useRef)(null), p2 = () => {
      var e11;
      let t3 = Number(localStorage.getItem("ambientIdleMs"));
      return Number.isFinite(t3) && t3 >= 1e3 ? t3 : null != (e11 = o.cL[(0, o.sb)().ambientDelay]) ? e11 : 15e4;
    }, x2 = (0, s.useCallback)(() => {
      m2.current && clearTimeout(m2.current), m2.current = setTimeout(() => {
        if (!(0, o.sb)().ambientMode || (0, w.iG)() > 0 || document.hidden || i2.length < 3) return void x2();
        d2(Math.floor(Math.random() * i2.length)), u2(false), r2(true);
      }, p2());
    }, [i2.length]);
    (0, s.useEffect)(() => {
      let e11 = 0, t3 = () => {
        let t4 = Date.now();
        t4 - e11 < 400 || (e11 = t4, r2((e12) => (e12 && u2(true), e12)), x2());
      }, a3 = ["pointermove", "pointerdown", "keydown", "wheel", "touchstart", "scroll"];
      for (let e12 of a3) window.addEventListener(e12, t3, { passive: true });
      return x2(), () => {
        for (let e12 of a3) window.removeEventListener(e12, t3);
        m2.current && clearTimeout(m2.current);
      };
    }, [x2]), (0, s.useEffect)(() => {
      if (!h2) return;
      let e11 = setTimeout(() => {
        r2(false), u2(false);
      }, 600);
      return () => clearTimeout(e11);
    }, [h2]), (0, s.useEffect)(() => {
      if (!l2 || i2.length < 2) return;
      let e11 = setInterval(() => d2((e12) => (e12 + 1) % i2.length), 9e3);
      return () => clearInterval(e11);
    }, [l2, i2.length]), (0, s.useEffect)(() => {
      if (!l2 || i2.length < 2) return;
      let e11 = i2[(c2 + 1) % i2.length];
      (null == e11 ? void 0 : e11.backdrop_path) && (new Image().src = "https://image.tmdb.org/t/p/w1280".concat(e11.backdrop_path));
    }, [l2, c2, i2]);
    let f2 = (function(e11) {
      let [t3, a3] = (0, s.useState)(() => /* @__PURE__ */ new Date());
      return (0, s.useEffect)(() => {
        if (!e11) return;
        a3(/* @__PURE__ */ new Date());
        let t4 = setInterval(() => a3(/* @__PURE__ */ new Date()), 2e4);
        return () => clearInterval(t4);
      }, [e11]), t3;
    })(l2);
    if (!l2 || 0 === i2.length) return null;
    let g2 = i2[c2 % i2.length], b2 = g2.title || g2.name || "", v2 = (g2.release_date || g2.first_air_date || "").slice(0, 4), y2 = String(f2.getHours()).padStart(2, "0"), j2 = String(f2.getMinutes()).padStart(2, "0");
    return (0, n.jsxs)("div", { "aria-hidden": true, className: "fixed inset-0 z-[200] bg-black transition-opacity duration-[600ms] ease-out ".concat(h2 ? "opacity-0" : "opacity-100"), children: [(0, n.jsx)("style", { children: "\n        @keyframes ambientDrift {\n          from { transform: scale(1.02); }\n          to { transform: scale(1.1); }\n        }\n        @keyframes ambientIn {\n          from { opacity: 0; }\n          to { opacity: 1; }\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .ambient-frame { animation: ambientIn 1.4s ease-out both !important; transform: none !important; }\n        }\n      " }), (0, n.jsxs)("div", { className: "absolute inset-0", children: [(0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w1280".concat(g2.backdrop_path), alt: "", className: "ambient-frame h-full w-full object-cover", style: { animation: "ambientDrift ".concat(10500, "ms linear both, ambientIn 1.4s ease-out both") } }), (0, n.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/35" }), (0, n.jsxs)("div", { className: "absolute bottom-12 left-12 max-w-[46%]", style: { animation: "ambientIn 1.6s ease-out both" }, children: [g2.logo_path ? (0, n.jsx)("img", { src: "https://image.tmdb.org/t/p/w300".concat(g2.logo_path), alt: b2, className: "max-h-[84px] max-w-full object-contain brightness-0 invert opacity-90" }) : (0, n.jsx)("p", { className: "text-[34px] font-bold leading-tight text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.6)]", children: b2 }), (0, n.jsxs)("p", { className: "mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40", children: [v2 ? "".concat(v2, " \xB7 ") : "", "Trending now"] })] })] }, g2.id), (0, n.jsxs)("div", { className: "absolute right-12 top-10 text-right", children: [(0, n.jsxs)("p", { className: "text-[56px] font-extralight leading-none text-white/90 [text-shadow:0_2px_16px_rgba(0,0,0,0.5)]", children: [y2, ":", j2] }), (0, n.jsxs)("p", { className: "mt-2 text-[10.5px] font-semibold uppercase tracking-[0.2em] text-white/30", children: [a2.name, " \xB7 Ambient"] })] })] });
  }
  let tW = (0, i.default)(() => a.e(1860).then(a.bind(a, 9479)), { loadableGenerated: { webpack: () => [9479] }, ssr: false, loading: () => (0, n.jsx)(ea.A, {}) });
  a.e(4445).then(a.bind(a, 4445)).catch(() => {
  }), a.e(1860).then(a.bind(a, 9479)).catch(() => {
  });
  let tq = ["home", "movie", "tv", "uhd"];
  function tJ(e10) {
    let { home: t2, movie: a2, tv: i2, uhd: l2 } = e10, r2 = (0, e5.Z)(), [o2, c2] = (0, s.useState)(r2.defaultTab), [d2, h2] = (0, s.useState)(null), [u2, m2] = (0, s.useState)(false), [p2, x2] = (0, s.useState)({ home: "home" === r2.defaultTab, movie: "movie" === r2.defaultTab, tv: "tv" === r2.defaultTab, uhd: false });
    (0, s.useEffect)(() => {
      m2("undefined" != typeof navigator && /Mobi|Android|iPhone|iPad|iPod|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent));
    }, []), (0, s.useEffect)(() => {
      let e11 = () => x2({ home: true, movie: true, tv: true, uhd: true }), t3 = window, a3 = t3.requestIdleCallback ? t3.requestIdleCallback(e11, { timeout: 5e3 }) : setTimeout(e11, 3e3);
      return () => {
        t3.cancelIdleCallback ? t3.cancelIdleCallback(a3) : clearTimeout(a3);
      };
    }, []);
    let f2 = (0, s.useCallback)((e11) => {
      x2((t3) => t3[e11] ? t3 : { ...t3, [e11]: true }), c2(e11), window.scrollTo({ top: 0, left: 0, behavior: "instant" }), window.dispatchEvent(new Event("sixseven:tab-switch"));
    }, []), g2 = (e11, s2) => "home" === e11 ? (0, n.jsx)(ey, { ...t2, tabVisible: s2 }) : "movie" === e11 ? (0, n.jsx)(ek, { ...a2, tabVisible: s2 }) : "tv" === e11 ? (0, n.jsx)(eE, { ...i2, tabVisible: s2 }) : (0, n.jsx)(eP, { ...l2, tabVisible: s2 });
    return (0, n.jsxs)("div", { className: "relative bg-black text-white min-h-screen", children: [(0, n.jsx)("style", { children: "\n        @keyframes tabfade {\n          from { opacity: 0; transform: translateY(8px); }\n          to { opacity: 1; transform: none; }\n        }\n        @media (prefers-reduced-motion: reduce) {\n          .tabfade { animation: none !important; }\n        }\n      " }), (0, n.jsxs)(tR.w, { children: [(0, n.jsx)(tF, { active: o2, setTab: f2, onSelect: h2 }), tq.map((e11) => p2[e11] && (0, n.jsx)("div", { className: "tabfade", style: { display: o2 === e11 ? void 0 : "none", animation: "tabfade 320ms cubic-bezier(0.22,1,0.36,1)" }, children: g2(e11, o2 === e11) }, e11)), (0, n.jsx)(tH, { items: (null == t2 ? void 0 : t2.trending) || [] }), d2 && (u2 ? (0, n.jsx)(tW, { show: d2, onClose: () => h2(null) }) : (0, n.jsx)(eH.default, { show: d2, onClose: () => h2(null), zIndex: 90 }))] })] });
  }
}, 8410: (e, t, a) => {
  "use strict";
  a.d(t, { A: () => o });
  var n = a(3928), s = a(756), i = a(6849), l = a(9447);
  function r(e2) {
    let { minHeight: t2 = 220 } = e2;
    return (0, n.jsxs)("div", { className: "px-4 md:px-0", style: { minHeight: t2 }, children: [(0, n.jsx)("div", { className: "h-4 w-40 rounded bg-white/10 mb-4 animate-pulse" }), (0, n.jsx)("div", { className: "flex gap-3 overflow-hidden", children: Array.from({ length: 4 }).map((e3, t3) => (0, n.jsx)("div", { className: "h-[160px] w-[260px] rounded-xl bg-white/10 animate-pulse" }, t3)) })] });
  }
  function o(e2) {
    let { featuredRails: t2 = [], onSelect: a2, minHeight: o2 = 220, batchSize: c = 6, initialLongTailCount: d = 0, apiPath: h = "/api/home-rails", media: u } = e2, [m, p] = (0, s.useState)([]), [x, f] = (0, s.useState)(d), [g, w] = (0, s.useState)(true), [b, v] = (0, s.useState)(false), y = (0, s.useRef)(null), j = (0, s.useMemo)(() => [...t2 || [], ...m || []].filter((e3) => Array.isArray(e3.items) && e3.items.length >= 8), [t2, m]);
    return (0, s.useEffect)(() => {
      p([]), f(d), w(true);
    }, [d]), (0, s.useEffect)(() => {
      if (!g || b) return;
      let e3 = y.current;
      if (!e3) return;
      let t3 = new IntersectionObserver((e4) => {
        var t4;
        (null == (t4 = e4[0]) ? void 0 : t4.isIntersecting) && (v(true), fetch("".concat(h, "?offset=").concat(x, "&limit=").concat(c).concat(u ? "&media=".concat(u) : "")).then((e5) => e5.ok ? e5.json() : { rails: [], hasMore: false, nextOffset: x + c }).then((e5) => {
          p((t5) => {
            let a3 = [...t5, ...e5.rails || []], n2 = /* @__PURE__ */ new Set();
            return a3.filter((e6) => !(!(null == e6 ? void 0 : e6.key) || n2.has(e6.key)) && (n2.add(e6.key), true));
          }), w(!!e5.hasMore), f(Number(e5.nextOffset || x + c));
        }).catch(() => {
          w(false);
        }).finally(() => v(false)));
      }, { rootMargin: "1200px 0px 1200px 0px", threshold: 0.01 });
      return t3.observe(e3), () => t3.disconnect();
    }, [x, c, g, b, h, u]), (0, n.jsxs)(n.Fragment, { children: [j.map((e3) => (0, n.jsx)(l.A, { minHeight: o2, children: (0, n.jsx)(i.A, { title: e3.label, items: e3.items, onSelect: a2 }) }, e3.key)), (g || b) && (0, n.jsx)("div", { ref: y, className: "w-full", children: b && (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(r, { minHeight: o2 }), (0, n.jsx)(r, { minHeight: o2 })] }) })] });
  }
}, 9447: (e, t, a) => {
  "use strict";
  a.d(t, { A: () => i });
  var n = a(3928), s = a(756);
  function i(e2) {
    let { children: t2, rootMargin: a2 = "600px", minHeight: i2 = 280, className: l = "" } = e2, r = (0, s.useRef)(null), [o, c] = (0, s.useState)(false);
    return (0, s.useEffect)(() => {
      let e3 = r.current;
      if (!e3) return;
      let t3 = new IntersectionObserver((e4) => {
        let [a3] = e4;
        a3.isIntersecting && (c(true), t3.disconnect());
      }, { rootMargin: a2 });
      return t3.observe(e3), () => t3.disconnect();
    }, [a2]), (0, n.jsx)("div", { ref: r, className: l, style: { minHeight: o ? void 0 : i2 }, children: o ? t2 : (0, n.jsxs)("div", { className: "px-4 pt-6 md:px-0 md:pt-10", "aria-hidden": true, children: [(0, n.jsx)("div", { className: "mb-2.5 h-4 w-36 rounded bg-white/[0.06] md:mb-3" }), (0, n.jsx)("div", { className: "flex gap-2.5 overflow-hidden md:gap-4", children: [0, 1, 2].map((e3) => (0, n.jsx)("div", { className: "aspect-video w-[56vw] flex-shrink-0 rounded-lg bg-white/[0.04] ring-1 ring-white/[0.05] sm:w-64 md:w-[375px] md:rounded-xl" }, e3)) })] }) });
  }
}, 9526: (e, t, a) => {
  Promise.resolve().then(a.bind(a, 8238)), Promise.resolve().then(a.t.bind(a, 8931, 23));
} }, (e) => {
  var t = (t2) => e(e.s = t2);
  e.O(0, [6295, 7054, 6752, 9987, 5958, 1765, 8274, 9051, 5985, 5460, 7123, 7358], () => t(9526)), _N_E = e.O();
}]);
