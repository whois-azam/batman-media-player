if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
if(typeof queueMicrotask==='undefined'){window.queueMicrotask=function(cb){Promise.resolve().then(cb);};self.queueMicrotask=window.queueMicrotask;}
if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5985], { 338: (e, t, s) => {
  s.d(t, { cL: () => l, cz: () => c, sb: () => d, t0: () => u });
  var a = s(756);
  let n = a.useLayoutEffect, l = { quick: 6e4, standard: 15e4, later: 3e5 }, i = { ambience: true, ambienceIntensity: "standard", cardTrailers: true, heroTrailers: true, autoNext: true, autoSkip: true, showContinueWatching: true, rememberSearches: true, ambientMode: true, ambientDelay: "standard", forYouRow: true, newSeasonsRow: true, weekSchedule: true, spoilerShield: false, pauseHistory: false }, o = "app-settings", r = "settings-updated";
  function d() {
    try {
      let e2 = JSON.parse(localStorage.getItem(o) || "{}");
      if (e2 && "object" == typeof e2 && 4 !== e2._v) {
        e2.autoSkip = true, e2._v = 4;
        try {
          localStorage.setItem(o, JSON.stringify(e2));
        } catch (e3) {
        }
      }
      return { ...i, ...e2 };
    } catch (e2) {
      return { ...i };
    }
  }
  function c(e2, t2) {
    try {
      localStorage.setItem(o, JSON.stringify({ ...d(), [e2]: t2 })), window.dispatchEvent(new Event(r));
    } catch (e3) {
    }
  }
  function u() {
    let [e2, t2] = (0, a.useState)(i);
    return n(() => {
      let e3 = () => t2(d());
      return e3(), window.addEventListener(r, e3), window.addEventListener("storage", e3), () => {
        window.removeEventListener(r, e3), window.removeEventListener("storage", e3);
      };
    }, []), e2;
  }
}, 1530: (e, t, s) => {
  s.d(t, { Bp: () => C, Cq: () => E, EY: () => y, Gs: () => j, OJ: () => g, aQ: () => a, dR: () => N, f8: () => k });
  let a = "sixseven:mylist-updated", n = "localWatchlist", l = /* @__PURE__ */ new Set(), i = [], o = /* @__PURE__ */ new Map(), r = false, d = false, c = null, u = false, h = /* @__PURE__ */ new Set(), p = (e2) => "".concat(e2.type, "-").concat(Number(e2.id));
  function b(e2) {
    let t2 = p(e2), s2 = o.get(t2), a2 = Object.fromEntries(Object.entries(e2).filter((e3) => {
      let [, t3] = e3;
      return null != t3;
    }));
    o.set(t2, { ...s2 || {}, ...a2, id: Number(e2.id), type: e2.type });
  }
  function x(e2) {
    let t2 = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    l.has(e2) || (l.add(e2), t2 ? i.unshift(e2) : i.push(e2));
  }
  function m(e2) {
    if (!l.delete(e2)) return;
    let t2 = i.indexOf(e2);
    t2 >= 0 && i.splice(t2, 1);
  }
  function f() {
    try {
      let e2 = JSON.parse(localStorage.getItem(n) || "[]");
      return Array.isArray(e2) ? e2 : [];
    } catch (e2) {
      return [];
    }
  }
  function w(e2) {
    try {
      localStorage.setItem(n, JSON.stringify(e2.slice(0, 100)));
    } catch (e3) {
    }
  }
  function v() {
    window.dispatchEvent(new Event(a));
  }
  function g() {
    return d ? Promise.resolve() : c || (c = (async () => {
      if (!r) for (let e2 of (r = true, f())) Number.isFinite(Number(null == e2 ? void 0 : e2.id)) && ((null == e2 ? void 0 : e2.type) === "movie" || (null == e2 ? void 0 : e2.type) === "tv") && (x(p(e2), false), b(e2));
      try {
        let e2 = await fetch("/api/watchlist");
        if (e2.ok) {
          let t2 = await e2.json();
          for (let e3 of (u = true, [...t2.watchlist || []].reverse())) {
            let t3 = Number(null == e3 ? void 0 : e3.showId);
            if (!Number.isFinite(t3) || t3 <= 0 || (null == e3 ? void 0 : e3.type) !== "movie" && (null == e3 ? void 0 : e3.type) !== "tv") continue;
            let s2 = "".concat(e3.type, "-").concat(t3);
            h.has(s2) || x(s2, false);
          }
          d = true;
        } else 401 === e2.status && (u = false, d = true);
      } catch (e2) {
      }
      d && h.clear(), c = null, v();
    })());
  }
  function j(e2) {
    return l.has(p(e2));
  }
  function y() {
    return i.map((e2) => {
      let t2 = e2.indexOf("-");
      return { type: e2.slice(0, t2), id: Number(e2.slice(t2 + 1)) };
    });
  }
  function N(e2) {
    return o.get(p(e2)) || null;
  }
  function k(e2) {
    b(e2);
  }
  let _ = /* @__PURE__ */ new Map(), S = /* @__PURE__ */ new Map();
  function E(e2) {
    let t2 = p(e2), s2 = !l.has(t2);
    return b(e2), s2 ? x(t2) : m(t2), d || (s2 ? h.delete(t2) : h.add(t2)), v(), _.set(t2, s2), !(function(e3) {
      if (S.has(e3)) return;
      let t3 = (async () => {
        try {
          await g();
          let t4 = null;
          for (; _.has(e3); ) {
            let s3 = _.get(e3);
            if (_.delete(e3), s3 === t4) continue;
            let a2 = false;
            if (u) {
              let t5 = e3.indexOf("-");
              try {
                a2 = (await fetch(s3 ? "/api/watchlist/add" : "/api/watchlist/remove", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ showId: Number(e3.slice(t5 + 1)), type: e3.slice(0, t5) }) })).ok;
              } catch (e4) {
              }
            }
            t4 = s3, a2 && l.has(e3) ? w(f().filter((t5) => p(t5) !== e3)) : (function(e4) {
              let t5 = f().filter((t6) => p(t6) !== e4);
              if (l.has(e4)) {
                let s4 = o.get(e4);
                s4 && t5.unshift(s4);
              }
              w(t5);
            })(e3);
          }
        } finally {
          S.delete(e3);
        }
      })();
      S.set(e3, t3);
    })(t2), s2;
  }
  function C(e2) {
    let t2 = p(e2);
    m(t2), w(f().filter((e3) => p(e3) !== t2)), v();
  }
}, 2241: (e, t, s) => {
  s.d(t, { A: () => o });
  var a = s(3928), n = s(756);
  let l = (e2) => "https://image.tmdb.org/t/p/w500".concat(e2), i = null;
  function o(e2) {
    let { compact: t2 = false } = e2, [s2, o2] = (0, n.useState)(i || []);
    return (0, n.useEffect)(() => {
      if (i) return;
      let e3 = true;
      return fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat("a46c50a0ccb1bafe2b15665df7fad7e1")).then((e4) => e4.json()).then((t3) => {
        let s3 = ((null == t3 ? void 0 : t3.results) || []).filter((e4) => e4.backdrop_path).slice(0, 4).map((e4) => e4.backdrop_path);
        4 === s3.length && (i = s3, e3 && o2(s3));
      }).catch(() => {
      }), () => {
        e3 = false;
      };
    }, []), (0, a.jsxs)("a", { href: "https://movies2love.com", className: "np-banner".concat(t2 ? " np-compact" : ""), title: "Find more sites for movies and TV shows", children: [(0, a.jsx)("span", { className: "np-art", "aria-hidden": true, children: s2.map((e3, t3) => (0, a.jsx)("img", { src: l(e3), alt: "", loading: "lazy", className: "np-frame", style: { "--np-delay": "".concat(3 * t3, "s") } }, e3)) }), (0, a.jsx)("span", { className: "np-scrim", "aria-hidden": true }), (0, a.jsxs)("span", { className: "np-copy", children: [(0, a.jsx)("span", { className: "np-title", children: "Find more sites for movies & TV shows" }), (0, a.jsx)("span", { className: "np-sub", children: "movies2love.com" })] })] });
  }
}, 2404: (e, t, s) => {
  s.d(t, { A: () => n, O: () => l });
  var a = s(3928);
  function n(e2) {
    let { className: t2 = "", size: s2 = "md" } = e2;
    return (0, a.jsx)("span", { "aria-label": "Available in 4K", title: "Available in 4K", className: "inline-flex items-center rounded border border-white/80 text-white font-semibold tabular-nums ".concat("sm" === s2 ? "px-2 py-1 text-[11px]" : "px-3 py-1.5", " ").concat(t2), style: { letterSpacing: "0.09em", boxShadow: "inset 0 0 0 0.5px rgba(255,255,255,0.14)" }, children: "4K" });
  }
  function l(e2) {
    let { className: t2 = "h-4 w-4" } = e2;
    return (0, a.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round", className: t2, "aria-hidden": "true", children: [(0, a.jsx)("rect", { x: "2.25", y: "5.25", width: "19.5", height: "13.5", rx: "2.75" }), (0, a.jsx)("path", { d: "M9.4 9.4v3.1h2.6" }), (0, a.jsx)("path", { d: "M11.55 9.4v5.2" }), (0, a.jsx)("path", { d: "M14.4 9.4v5.2" }), (0, a.jsx)("path", { d: "M17.05 9.4 14.4 12l2.65 2.6" })] });
  }
  s(756);
}, 2631: (e, t, s) => {
  s.d(t, { A: () => i });
  var a = s(3928), n = s(756), l = s(2500);
  function i(e2) {
    let { name: t2, season: s2, variant: i2, onClose: o, anchor: r } = e2, [d, c] = (0, n.useState)(null), [u, h] = (0, n.useState)(null);
    (0, n.useEffect)(() => {
      let e3 = false;
      return c(null), fetch("/api/recaps?q=".concat(encodeURIComponent("".concat(t2, " Season ").concat(s2, " recap")))).then((e4) => e4.ok ? e4.json() : { videos: [] }).then((t3) => {
        e3 || c(t3.videos || []);
      }).catch(() => {
        e3 || c([]);
      }), () => {
        e3 = true;
      };
    }, [t2, s2]), (0, n.useEffect)(() => {
      let e3 = (e4) => {
        "Escape" === e4.key && (e4.stopPropagation(), o());
      };
      return window.addEventListener("keydown", e3, true), () => window.removeEventListener("keydown", e3, true);
    }, [o]);
    let p = (0, a.jsxs)("div", { className: "flex items-start justify-between gap-4", children: [(0, a.jsxs)("div", { className: "min-w-0", children: [(0, a.jsxs)("p", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-white/35", children: ["Season ", s2, " recap"] }), (0, a.jsx)("p", { className: "mt-1 truncate text-[17px] font-semibold text-white", children: t2 })] }), (0, a.jsx)("button", { onClick: o, "aria-label": "Close recaps", className: "mt-0.5 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/[0.08] hover:text-white", children: (0, a.jsx)(l.QCr, { className: "h-4 w-4" }) })] }), b = u ? (0, a.jsxs)("div", { className: "mt-4", children: [(0, a.jsxs)("button", { onClick: () => h(null), className: "mb-3 inline-flex items-center gap-2 text-[12.5px] font-medium text-white/60 transition-colors hover:text-white", children: [(0, a.jsx)(l.QVr, { className: "h-3 w-3" }), "All recaps"] }), (0, a.jsx)("div", { className: "aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/[0.08] bg-black", children: (0, a.jsx)("iframe", { src: "https://www.youtube.com/embed/".concat(u.videoId, "?autoplay=1&rel=0&modestbranding=1"), title: u.title, allow: "autoplay; encrypted-media; picture-in-picture", allowFullScreen: true, className: "h-full w-full" }) }), (0, a.jsx)("p", { className: "mt-3 text-[14px] font-medium text-white/90", children: u.title }), (0, a.jsxs)("p", { className: "mt-0.5 text-[12.5px] text-white/40", children: [u.channel, u.views ? " \xB7 ".concat(u.views) : ""] })] }) : (0, a.jsxs)("div", { className: "mt-4 space-y-2.5", children: [null === d && [0, 1, 2, 3].map((e3) => (0, a.jsxs)("div", { className: "flex animate-pulse gap-3.5", children: [(0, a.jsx)("div", { className: "h-[74px] w-[132px] flex-shrink-0 rounded-lg bg-white/[0.06]" }), (0, a.jsxs)("div", { className: "flex-1 space-y-2 pt-1.5", children: [(0, a.jsx)("div", { className: "h-3.5 w-4/5 rounded bg-white/[0.08]" }), (0, a.jsx)("div", { className: "h-3 w-2/5 rounded bg-white/[0.05]" })] })] }, e3)), (null == d ? void 0 : d.length) === 0 && (0, a.jsx)("p", { className: "py-8 text-center text-[13.5px] text-white/40", children: "No recaps found for this season." }), null == d ? void 0 : d.map((e3) => (0, a.jsxs)("button", { onClick: () => h(e3), className: "group flex w-full gap-3.5 rounded-xl p-1.5 text-left transition-colors hover:bg-white/[0.05] active:bg-white/[0.07]", children: [(0, a.jsxs)("span", { className: "relative h-[74px] w-[132px] flex-shrink-0 overflow-hidden rounded-lg ring-1 ring-white/[0.08]", children: [(0, a.jsx)("img", { src: "https://i.ytimg.com/vi/".concat(e3.videoId, "/mqdefault.jpg"), alt: "", loading: "lazy", decoding: "async", className: "h-full w-full object-cover" }), (0, a.jsx)("span", { className: "absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity group-hover:opacity-100", children: (0, a.jsx)(l.gSK, { className: "h-3.5 w-3.5 text-white drop-shadow" }) }), e3.duration && (0, a.jsx)("span", { className: "absolute bottom-1 right-1 rounded bg-black/75 px-1.5 py-0.5 text-[10.5px] font-semibold text-white/90", children: e3.duration })] }), (0, a.jsxs)("span", { className: "min-w-0 flex-1 pt-0.5", children: [(0, a.jsx)("span", { className: "line-clamp-2 text-[14px] font-medium leading-snug text-white/90 transition-colors group-hover:text-white", children: e3.title }), (0, a.jsxs)("span", { className: "mt-1 block truncate text-[12.5px] text-white/40", children: [e3.channel, e3.views ? " \xB7 ".concat(e3.views) : ""] })] })] }, e3.videoId))] });
    return "mobile" === i2 ? (0, a.jsxs)("div", { className: "fixed inset-0 z-[95]", children: [(0, a.jsx)("button", { className: "absolute inset-0 bg-black/60", onClick: o, "aria-label": "Close recaps" }), (0, a.jsxs)("div", { className: "absolute inset-x-0 bottom-0 max-h-[86dvh] overflow-y-auto overscroll-contain rounded-t-[24px] border-t border-white/[0.08] bg-[#0c0d11] px-5 pb-[max(20px,env(safe-area-inset-bottom))] pt-2", children: [(0, a.jsx)("span", { className: "mx-auto mb-4 block h-[5px] w-9 rounded-full bg-white/20", "aria-hidden": true }), p, b] })] }) : (0, a.jsxs)("div", { className: "".concat(r ? "absolute inset-x-0" : "fixed inset-0", " z-[60] flex items-center justify-center p-6"), style: r ? { top: r.top, height: r.height } : void 0, children: [(0, a.jsx)("button", { className: "absolute inset-0 bg-black/70", onClick: o, "aria-label": "Close recaps" }), (0, a.jsxs)("div", { className: "relative max-h-[86vh] w-full max-w-xl overflow-y-auto overscroll-contain rounded-2xl border border-white/[0.08] bg-[#101116] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.6)]", style: { scrollbarWidth: "none", msOverflowStyle: "none" }, children: [p, b] })] });
  }
}, 3026: (e, t, s) => {
  s.d(t, { iG: () => l, jz: () => i, yq: () => o });
  let a = 0, n = null;
  function l() {
    return a;
  }
  function i() {
    if ("undefined" == typeof document || (a += 1) > 1) return;
    let e2 = document.body, t2 = window.innerWidth - document.documentElement.clientWidth;
    n = { overflow: e2.style.overflow, position: e2.style.position, top: e2.style.top, width: e2.style.width, touchAction: e2.style.touchAction, paddingRight: e2.style.paddingRight, scrollY: window.scrollY }, e2.style.overflow = "hidden", e2.style.position = "fixed", e2.style.top = "-".concat(n.scrollY, "px"), e2.style.width = "100%", e2.style.touchAction = "none", t2 > 0 && (e2.style.paddingRight = "".concat(t2, "px")), document.documentElement.style.setProperty("--removed-scrollbar", "".concat(t2, "px"));
  }
  function o() {
    if ("undefined" == typeof document || 0 === a || (a -= 1) > 0 || !n) return;
    let e2 = document.body;
    e2.style.overflow = n.overflow, e2.style.position = n.position, e2.style.top = n.top, e2.style.width = n.width, e2.style.touchAction = n.touchAction, e2.style.paddingRight = n.paddingRight, document.documentElement.style.removeProperty("--removed-scrollbar"), window.scrollTo({ top: n.scrollY, left: 0, behavior: "instant" }), n = null;
  }
}, 3842: (e, t, s) => {
  s.d(t, { N: () => l });
  var a = s(756);
  let n = null;
  function l() {
    let [e2, t2] = (0, a.useState)(null);
    return (0, a.useEffect)(() => {
      let e3 = true;
      return (n || (n = fetch("/data/uhd.json", { cache: "no-cache" }).then((e4) => e4.ok ? e4.json() : Promise.reject(Error(String(e4.status)))).then((e4) => {
        let t3 = /* @__PURE__ */ new Map();
        for (let s2 of (null == e4 ? void 0 : e4.tv) || []) {
          let e5 = Number(null == s2 ? void 0 : s2.id);
          if (!e5) continue;
          let a2 = /* @__PURE__ */ new Map();
          for (let [e6, t4] of Object.entries((null == s2 ? void 0 : s2.eps) || {})) {
            let s3 = Number(e6);
            Number.isFinite(s3) && a2.set(s3, new Set(t4.map(Number).filter(Boolean)));
          }
          t3.set(e5, a2);
        }
        return { generatedAt: String((null == e4 ? void 0 : e4.generatedAt) || ""), movies: new Set(((null == e4 ? void 0 : e4.movies) || []).map(Number)), tv: new Set(((null == e4 ? void 0 : e4.tv) || []).map((e5) => Number(null == e5 ? void 0 : e5.id)).filter(Boolean)), episodes: new Map(((null == e4 ? void 0 : e4.tv) || []).map((e5) => [Number(null == e5 ? void 0 : e5.id), Number((null == e5 ? void 0 : e5.episodes) || 0)])), eps: t3 };
      }).catch(() => null))).then((s2) => {
        e3 && t2(s2);
      }), () => {
        e3 = false;
      };
    }, []), { index: e2, isUhd: (t3, s2) => {
      if (!e2 || !s2) return false;
      let a2 = Number(s2);
      return !!a2 && ("tv" === t3 ? e2.tv.has(a2) : e2.movies.has(a2));
    }, isUhdEpisode: (t3, s2, a2) => {
      var n2, l2;
      if (!e2) return false;
      let i = Number(t3), o = Number(s2), r = Number(a2);
      return !!i && !!Number.isFinite(o) && !!Number.isFinite(r) && !!(null == (l2 = e2.eps.get(i)) || null == (n2 = l2.get(o)) ? void 0 : n2.has(r));
    }, uhdSeasonCount: (t3, s2) => {
      var a2, n2;
      if (!e2) return 0;
      let l2 = Number(t3), i = Number(s2);
      return l2 && Number.isFinite(i) && (null == (n2 = e2.eps.get(l2)) || null == (a2 = n2.get(i)) ? void 0 : a2.size) || 0;
    }, uhdEpisodes: (t3) => {
      let s2 = Number(t3);
      return e2 && s2 && e2.episodes.get(s2) || 0;
    } };
  }
}, 5985: (e, t, s) => {
  s.r(t), s.d(t, { default: () => M });
  var a = s(3928), n = s(8091), l = s.n(n), i = s(2404), o = s(3842), r = s(756), d = s(3637), c = s(7958), u = s(2500), h = s(6077), p = s(4213);
  function b(e2) {
    let { showId: t2, showName: s2, season: n2, episodes: l2, progress: i2, onClose: o2 } = e2, [c2, h2] = (0, r.useState)(null), [p2, b2] = (0, r.useState)(false), x2 = (0, r.useRef)(null);
    (0, r.useEffect)(() => {
      null === c2 && l2.length && h2(l2[0].episode_number);
    }, [l2, c2]), (0, r.useEffect)(() => {
      let e3 = (e4) => {
        "Escape" === e4.key && o2();
      };
      return window.addEventListener("keydown", e3), () => window.removeEventListener("keydown", e3);
    }, [o2]), (0, r.useEffect)(() => {
      let e3 = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = e3;
      };
    }, []);
    let m2 = l2.filter((e3) => {
      var t3;
      return null == (t3 = i2["s".concat(n2, "e").concat(e3.episode_number)]) ? void 0 : t3.watched;
    }).map((e3) => e3.episode_number), f2 = m2.length ? Math.max(...m2) : 0, w2 = l2.length ? Math.round(f2 / l2.length * 100) : 0, v2 = (0, r.useMemo)(() => l2.find((e3) => e3.episode_number === c2) || null, [l2, c2]), g2 = (0, r.useMemo)(() => {
      var e3;
      if (v2 && null !== c2 && c2 <= f2 && v2.still_path) return v2.still_path;
      let t3 = l2.find((e4) => e4.episode_number <= f2 && e4.still_path);
      return (null == t3 ? void 0 : t3.still_path) || (null == (e3 = l2[0]) ? void 0 : e3.still_path) || null;
    }, [v2, c2, f2, l2]);
    function j2(e3) {
      var t3;
      null == (t3 = x2.current) || t3.scrollBy({ left: 640 * e3, behavior: "smooth" });
    }
    return (0, a.jsxs)("div", { className: "memory-fade fixed inset-0 z-[260] flex items-center justify-center overflow-hidden bg-black text-white", children: [g2 && (0, a.jsx)("div", { className: "memory-fade absolute inset-0 overflow-hidden", children: (0, a.jsx)(d.default, { src: "https://image.tmdb.org/t/p/w500".concat(g2), alt: "", fill: true, sizes: "100vw", priority: true, className: "scale-110 object-cover opacity-40 blur-[80px] saturate-[1.4]" }) }, g2), (0, a.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" }), (0, a.jsx)("button", { onClick: o2, "aria-label": "Close", className: "absolute right-6 top-6 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/[0.08] text-white/75 backdrop-blur-md transition-colors hover:bg-white/[0.16] hover:text-white", children: (0, a.jsx)(u.QCr, { className: "h-4 w-4" }) }), (0, a.jsxs)("div", { className: "relative z-10 w-full max-w-6xl space-y-7 p-8 md:p-10", children: [(0, a.jsxs)("div", { children: [(0, a.jsx)("div", { className: "h-[3px] w-full overflow-hidden rounded-full bg-white/[0.14]", children: (0, a.jsx)("div", { className: "h-full rounded-full bg-white transition-[width] duration-500", style: { width: "".concat(w2, "%") } }) }), (0, a.jsxs)("p", { className: "mt-2.5 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-white/45", children: [w2, "% of Season ", n2, " watched"] })] }), (0, a.jsxs)("div", { children: [(0, a.jsx)("p", { className: "text-[11.5px] font-semibold uppercase tracking-[0.2em] text-white/40", children: "Previously on" }), (0, a.jsx)("h2", { className: "mt-1.5 text-3xl font-bold leading-tight md:text-4xl", children: s2 }), (0, a.jsx)("p", { className: "mt-4 min-h-[3.5rem] max-w-3xl text-[15px] leading-relaxed text-white/65", children: p2 ? "Locked to avoid spoilers \u2014 watch the episode to unlock this memory." : (null == v2 ? void 0 : v2.overview) || "No summary available." })] }), (0, a.jsxs)("div", { className: "group relative", children: [(0, a.jsx)("button", { onClick: () => j2(-1), "aria-label": "Scroll episodes left", className: "absolute bottom-0 left-0 top-0 z-20 hidden w-12 items-center justify-center text-white/0 transition-colors duration-200 hover:!text-white group-hover:text-white/70 md:flex", children: (0, a.jsx)(u._Jj, { className: "h-6 w-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" }) }), (0, a.jsx)("button", { onClick: () => j2(1), "aria-label": "Scroll episodes right", className: "absolute bottom-0 right-0 top-0 z-20 hidden w-12 items-center justify-center text-white/0 transition-colors duration-200 hover:!text-white group-hover:text-white/70 md:flex", children: (0, a.jsx)(u.X6T, { className: "h-6 w-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" }) }), (0, a.jsx)("div", { ref: x2, onWheel: (e3) => {
      let t3 = e3.currentTarget;
      t3.scrollWidth > t3.clientWidth && Math.abs(e3.deltaY) > Math.abs(e3.deltaX) && (t3.scrollLeft += e3.deltaY);
    }, className: "no-scrollbar flex snap-x gap-4 overflow-x-auto px-1 py-1.5", style: { maskImage: "linear-gradient(to right, transparent 0, black 52px, black calc(100% - 52px), transparent 100%)" }, children: l2.map((e3) => {
      var t3;
      let s3 = i2["s".concat(n2, "e").concat(e3.episode_number)], l3 = (null != (t3 = null == s3 ? void 0 : s3.watched) ? t3 : 0) > 0 || e3.episode_number <= f2 ? "watched" : "future", o3 = c2 === e3.episode_number, r2 = "future" === l3;
      return (0, a.jsxs)("div", { onClick: () => {
        var t4;
        return t4 = e3.episode_number, void (b2("future" === l3), h2(t4));
      }, className: "relative aspect-video w-72 flex-none cursor-pointer snap-start overflow-hidden rounded-xl transition-all duration-300 ".concat(o3 ? "opacity-100 ring-1 ring-white/[0.35] shadow-[0_16px_40px_rgba(0,0,0,0.55)]" : "opacity-[0.72] ring-1 ring-white/[0.08] hover:opacity-100 hover:ring-white/25"), children: [e3.still_path ? (0, a.jsx)(d.default, { src: "https://image.tmdb.org/t/p/w500".concat(e3.still_path), alt: r2 ? "Episode ".concat(e3.episode_number) : e3.name, fill: true, sizes: "288px", className: "object-cover ".concat(r2 ? "scale-110 blur-[10px]" : "") }) : (0, a.jsx)("div", { className: "h-full w-full bg-white/[0.05]" }), r2 ? (0, a.jsxs)("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-black/45", children: [(0, a.jsx)("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.12] backdrop-blur-sm", children: (0, a.jsx)(u.JhU, { className: "h-3.5 w-3.5 text-white/80" }) }), (0, a.jsxs)("span", { className: "text-[11px] font-semibold uppercase tracking-[0.16em] text-white/60", children: ["Episode ", e3.episode_number] })] }) : (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)("div", { className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent px-3.5 pb-3 pt-10", children: (0, a.jsxs)("p", { className: "truncate text-[13px] font-semibold text-white", children: [e3.episode_number, ". ", e3.name] }) }), (0, a.jsx)("span", { className: "absolute right-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm", children: (0, a.jsx)(u.CMH, { className: "h-2.5 w-2.5 text-white/85" }) })] })] }, e3.episode_number);
    }) })] })] }), (0, a.jsx)("style", { children: "\n        .no-scrollbar::-webkit-scrollbar { display: none; }\n        .no-scrollbar { scrollbar-width: none; }\n        .memory-fade { animation: memoryFade 0.35s cubic-bezier(0.23, 1, 0.32, 1); }\n        @keyframes memoryFade { from { opacity: 0; } to { opacity: 1; } }\n        @media (prefers-reduced-motion: reduce) { .memory-fade { animation: none; } }\n      " })] });
  }
  function x(e2) {
    let { onClick: t2 } = e2;
    return (0, a.jsxs)("div", { className: "relative inline-block", children: [(0, a.jsx)("span", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 via-cyan-500 to-purple-600 opacity-50 blur-2xl -z-20 animate-spin-slow", "aria-hidden": "true" }), (0, a.jsx)("span", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-fuchsia-500 via-cyan-500 to-purple-600 opacity-40 blur-xl -z-10 animate-pulse", "aria-hidden": "true" }), (0, a.jsxs)("button", { onClick: t2, title: "Revisit what's happened so far", className: "relative bg-white/5 backdrop-blur-md border border-white/10 text-white rounded-full px-6 py-2 font-semibold shadow-neon transition hover:scale-105 animate-glow flex items-center gap-2", children: [(0, a.jsx)(u.KuA, {}), "Memory Lane"] })] });
  }
  var m = s(9051), f = s(6006), w = s(2631), v = s(2241), g = s(3026), j = s(338), y = s(9777), N = s(1530);
  let k = (e2) => {
    let { active: t2 = false } = e2;
    return (0, a.jsxs)("svg", { width: "25", height: "25", viewBox: "0 0 24 24", fill: "none", className: "transition-all ".concat(t2 ? "drop-shadow-glow" : ""), style: { filter: t2 ? "drop-shadow(0 0 7px #4fd1ff) drop-shadow(0 0 3px #60a5fa)" : void 0 }, children: [(0, a.jsx)("rect", { x: "2", y: "5", width: "20", height: "14", rx: "5", fill: t2 ? "url(#g1)" : "#18181b", stroke: t2 ? "#38bdf8" : "#444", strokeWidth: "2.2" }), (0, a.jsx)("rect", { x: "5", y: "8", width: "7", height: "8", rx: "2", fill: t2 ? "#fff7" : "#4448" }), (0, a.jsx)("rect", { x: "13", y: "8", width: "6", height: "5", rx: "2", fill: t2 ? "#7dd3fc" : "#222a" }), (0, a.jsx)("defs", { children: (0, a.jsxs)("linearGradient", { id: "g1", x1: "2", y1: "5", x2: "22", y2: "19", gradientUnits: "userSpaceOnUse", children: [(0, a.jsx)("stop", { stopColor: "#fff", stopOpacity: "0.24" }), (0, a.jsx)("stop", { offset: "1", stopColor: "#60a5fa", stopOpacity: "0.20" })] }) })] });
  }, _ = (e2) => {
    let { active: t2 = false } = e2;
    return (0, a.jsxs)("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", className: "transition-all ".concat(t2 ? "drop-shadow-glow" : ""), style: { filter: t2 ? "drop-shadow(0 0 7px #000c) drop-shadow(0 0 2px #0af)" : void 0 }, children: [(0, a.jsx)("rect", { x: "3", y: "6", width: "18", height: "12", rx: "4", fill: "#18181b", stroke: "#38bdf8", strokeWidth: "2.2" }), (0, a.jsx)("rect", { x: "8", y: "9.5", width: "8", height: "5", rx: "1.7", fill: "#222e" })] });
  }, S = { backgroundColor: "#0f172a", color: "#f8fafc" };
  function E(e2) {
    if (!e2 || e2 <= 0) return "";
    let t2 = Math.floor(e2 / 60), s2 = Math.floor(t2 / 60);
    return s2 > 0 ? "".concat(s2, "h ").concat(t2 % 60, "m") : "".concat(t2, " min");
  }
  let C = "a46c50a0ccb1bafe2b15665df7fad7e1", L = /* @__PURE__ */ new Map();
  function M(e2) {
    var t2, s2, n2;
    let { show: M2, onClose: z, zIndex: I, fromUhd: O } = e2, A = (0, c.useRouter)(), [R, P] = (0, r.useState)(M2);
    (0, r.useEffect)(() => {
      P(M2);
    }, [M2]);
    let W = (0, r.useRef)(null), F = (0, r.useRef)(null), T = (0, r.useRef)(null), q = (0, m.W)(), U = (0, j.t0)(), B = (function() {
      let [e6, t3] = (0, r.useState)("unknown");
      return (0, r.useEffect)(() => {
        let e7 = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        function s3() {
          if (!e7) return void t3("unknown");
          t3(e7.effectiveType || "unknown");
        }
        if (s3(), e7 && e7.addEventListener) return e7.addEventListener("change", s3), () => e7.removeEventListener("change", s3);
      }, []), e6;
    })(), H = (0, r.useMemo)(() => "slow-2g" === B || "2g" === B ? 15 : "3g" === B ? 32 : "4g" === B ? 75 : 50, [B]), J = (0, r.useMemo)(() => {
      if ("4g" !== B && "unknown" !== B) return false;
      let e6 = !window.matchMedia("(prefers-reduced-motion: reduce)").matches, t3 = navigator.deviceMemory || 0, s3 = navigator.hardwareConcurrency || 0;
      return e6 && (t3 >= 8 || s3 >= 8);
    }, [B]), [K, D] = (0, r.useState)(false);
    (0, r.useEffect)(() => {
      D("slow-2g" === B || "2g" === B);
    }, [B]);
    let [Y, G] = (0, r.useState)(null), [Q, V] = (0, r.useState)("NR"), [X, $] = (0, r.useState)(false), [Z, ee] = (0, r.useState)(false), [et, es] = (0, r.useState)(false), [ea, en] = (0, r.useState)(true), [el, ei] = (0, r.useState)(true), [, eo] = (0, r.useState)(0);
    (0, r.useEffect)(() => {
      (0, N.OJ)();
      let e6 = () => eo((e7) => e7 + 1);
      return window.addEventListener(N.aQ, e6), () => window.removeEventListener(N.aQ, e6);
    }, []);
    let er = (0, N.Gs)(R), [ed, ec] = (0, r.useState)([]), [eu, eh] = (0, r.useState)("tv" === R.type && R.season ? R.season : 1), [ep, eb] = (0, r.useState)([]), [ex, em] = (0, r.useState)(false), [ef, ew] = (0, r.useState)(null), [ev, eg] = (0, r.useState)({}), [ej, ey] = (0, r.useState)(false), [eN, ek] = (0, r.useState)(false), [e_, eS] = (0, r.useState)(null);
    (0, r.useEffect)(() => {
      let e6 = F.current;
      if (!eN || !e6) return;
      let t3 = e6.style.overflow;
      return e6.style.overflow = "hidden", () => {
        e6.style.overflow = t3;
      };
    }, [eN]);
    let [eE, eC] = (0, r.useState)(false), [eL, eM] = (0, r.useState)(false), [ez, eI] = (0, r.useState)(false);
    (0, r.useEffect)(() => {
      let e6 = () => eI(document.fullscreenElement === F.current);
      return document.addEventListener("fullscreenchange", e6), () => document.removeEventListener("fullscreenchange", e6);
    }, []);
    let { holdAmbience: eO } = (0, f.k)(), eA = R.backdrop_path || R.poster_path || null;
    function eR() {
      let e6 = (function() {
        try {
          return JSON.parse(localStorage.getItem("continueWatching") || "{}");
        } catch (e7) {
          return {};
        }
      })();
      if ("movie" === R.type) {
        let t3 = Object.values(e6).find((e7) => "movie" === e7.type && e7.id === R.id && e7.progress);
        ew((null == t3 ? void 0 : t3.progress) ? { ...t3.progress } : null);
      } else if ("tv" === R.type) {
        let t3 = {};
        Object.values(e6).forEach((e7) => {
          "tv" === e7.type && e7.id === R.id && (e7.progress && e7.season && e7.episode && (t3["s".concat(e7.season, "e").concat(e7.episode)] = { watched: e7.progress.watched, duration: e7.progress.duration }), e7.show_progress && "object" == typeof e7.show_progress && Object.entries(e7.show_progress).forEach((e8) => {
            var s3, a2;
            let [n3, l2] = e8;
            t3[n3] = { watched: (null == (s3 = l2.progress) ? void 0 : s3.watched) || 0, duration: (null == (a2 = l2.progress) ? void 0 : a2.duration) || 0 };
          }));
        }), eg(t3);
      }
    }
    (0, r.useEffect)(() => {
      eA && eO(eA);
    }, [eA, eO]), (0, r.useEffect)(() => () => eO(null), [eO]), (0, r.useEffect)(() => {
      let e6 = window.matchMedia("(max-width: 767px)"), t3 = () => eM(e6.matches);
      return t3(), e6.addEventListener("change", t3), () => e6.removeEventListener("change", t3);
    }, []);
    let eP = (function() {
      let [e6, t3] = (0, r.useState)(false);
      return (0, r.useEffect)(() => {
        let e7 = navigator.userAgent, s3 = /Macintosh|MacIntel|MacPPC|Mac68K/.test(navigator.platform), a2 = /^((?!chrome|android).)*safari/i.test(e7);
        t3(s3 && !a2);
      }, []), e6;
    })(), [eW, eF] = (function(e6) {
      let [t3, s3] = (0, r.useState)(() => localStorage.getItem("uiStyle") || e6);
      return (0, r.useEffect)(() => {
        localStorage.setItem("uiStyle", t3);
      }, [t3]), [t3, s3];
    })("glassy");
    (0, r.useEffect)(() => {
      if (q) return q.setSuppressed(true), () => q.setSuppressed(false);
    }, [q]), (0, r.useEffect)(() => {
      (0, g.jz)(), es(true);
      let e6 = window.setTimeout(() => ei(false), 280);
      return () => {
        window.clearTimeout(e6), (0, g.yq)();
      };
    }, []), (0, r.useEffect)(() => {
      "tv" === R.type ? eh(R.season || 1) : eh(1);
    }, [R.id, R.type, R.season]), (0, r.useEffect)(() => {
      if (!R) return;
      let e6 = "".concat(R.type, ":").concat(R.id), t3 = L.get(e6);
      t3 ? (G(t3), en(false)) : (en(true), G(null));
      let s3 = false;
      return fetch("https://api.themoviedb.org/3/".concat(R.type, "/").concat(R.id) + "?api_key=".concat(C, "&language=en-US") + "&append_to_response=credits,release_dates,content_ratings,images&include_image_language=en,null").then((e7) => e7.json()).then((t4) => {
        var a2, n3, l2, i2, o2, r2;
        if (!s3) if (L.set(e6, t4), G(t4), en(false), "movie" === R.type) {
          let e7 = null == (n3 = t4.release_dates) || null == (a2 = n3.results) ? void 0 : a2.find((e8) => "US" === e8.iso_3166_1);
          V((null == e7 || null == (i2 = e7.release_dates) || null == (l2 = i2[0]) ? void 0 : l2.certification) || "NR");
        } else {
          let e7 = null == (r2 = t4.content_ratings) || null == (o2 = r2.results) ? void 0 : o2.find((e8) => "US" === e8.iso_3166_1);
          if (V((null == e7 ? void 0 : e7.rating) || "NR"), t4.seasons) {
            ec(t4.seasons);
            let e8 = t4.seasons.map((e10) => e10.season_number).filter((e10) => e10 > 0), s4 = R.season || 1, a3 = e8.includes(1) ? 1 : e8[0] || 1;
            eh(e8.includes(s4) ? s4 : a3);
          }
        }
      }).catch(() => {
        s3 || (G(null), en(false));
      }), () => {
        s3 = true;
      };
    }, [R]);
    let [eT, eq] = (0, r.useState)([]);
    (0, r.useEffect)(() => {
      let e6 = false;
      return eq([]), fetch("https://api.themoviedb.org/3/".concat(R.type, "/").concat(R.id, "/recommendations?api_key=").concat(C, "&language=en-US")).then((e7) => e7.json()).then(async (t3) => {
        let s3 = (t3.results || []).filter((e7) => e7.backdrop_path || e7.poster_path);
        if (s3.length < 4) {
          let e7 = await fetch("https://api.themoviedb.org/3/".concat(R.type, "/").concat(R.id, "/similar?api_key=").concat(C, "&language=en-US")).then((e8) => e8.json()), t4 = new Set(s3.map((e8) => e8.id));
          s3 = [...s3, ...(e7.results || []).filter((e8) => (e8.backdrop_path || e8.poster_path) && !t4.has(e8.id))];
        }
        e6 || eq(s3.slice(0, 8));
      }).catch(() => {
        e6 || eq([]);
      }), () => {
        e6 = true;
      };
    }, [R.id, R.type]);
    let eU = (e6) => {
      var t3;
      $(false), ee(false), P({ id: e6.id, type: R.type, title: e6.title, name: e6.name, backdrop_path: e6.backdrop_path || void 0, poster_path: e6.poster_path || void 0 }), null == (t3 = F.current) || t3.scrollTo({ top: 0, behavior: "smooth" });
    }, eB = (e6) => {
      e6 && (e$(), window.dispatchEvent(new CustomEvent("sixseven:open-search", { detail: { query: e6 } })));
    };
    (0, r.useEffect)(() => {
      if ("tv" !== R.type || R.season || 1 !== eu || 0 === ed.length) return;
      let e6 = 1, t3 = 0;
      Object.entries(ev).forEach((s3) => {
        let [a2, n3] = s3, l2 = a2.match(/^s(\d+)e\d+$/);
        if (!l2) return;
        let i2 = Number(l2[1]);
        i2 > 0 && n3.watched > t3 && (e6 = i2, t3 = n3.watched);
      }), 1 !== e6 && ed.some((t4) => t4.season_number === e6) && eh(e6);
    }, [R.type, R.season, eu, ed, ev]), (0, r.useEffect)(() => {
      "tv" === R.type && eu && (em(true), fetch("https://api.themoviedb.org/3/tv/".concat(R.id, "/season/").concat(eu) + "?api_key=".concat(C)).then((e6) => e6.json()).then((e6) => {
        eb(e6.episodes || []), em(false);
      }).catch(() => {
        eb([]), em(false);
      }));
    }, [R.id, R.type, eu]), (0, r.useEffect)(() => {
      eR();
    }, [R.id, R.type, eu, ep]), (0, r.useEffect)(() => {
      let e6 = () => eR();
      return window.addEventListener("cw-updated", e6), window.addEventListener("storage", e6), () => {
        window.removeEventListener("cw-updated", e6), window.removeEventListener("storage", e6);
      };
    }, [R.id, R.type, eu, ep]), (0, r.useEffect)(() => {
      if ("tv" !== R.type || 0 === ep.length) return;
      let e6 = "memoryLaneDismissed:".concat(R.id), t3 = localStorage.getItem(e6);
      !(t3 && Date.now() - Number(t3) < 432e6) && Object.keys(ev).length >= 3 && ey(true);
    }, [ep, ev, R.id, R.type]), (0, r.useEffect)(() => {
      Y && !X && ee(true);
    }, [Y, X]), (0, r.useEffect)(() => {
      let e6 = () => {
        W.current && eC(W.current.scrollHeight > W.current.clientHeight + 20);
      };
      return e6(), window.addEventListener("resize", e6), () => window.removeEventListener("resize", e6);
    }, [Y, ep]);
    let eH = (0, r.useMemo)(() => {
      if ("tv" !== R.type || !ep || 0 === ep.length) return null;
      let e6 = null;
      return ep.forEach((t3, s3) => {
        let a2 = ev["s".concat(eu, "e").concat(t3.episode_number)];
        a2 && a2.watched > 0 && (!e6 || a2.watched > e6.watched) && (e6 = { idx: s3, watched: a2.watched, duration: a2.duration });
      }), e6;
    }, [ep, eu, ev, R.type]), eJ = (null == Y ? void 0 : Y.title) || (null == Y ? void 0 : Y.name) || R.title || R.name || "Loading title", eK = ((null == Y ? void 0 : Y.release_date) || (null == Y ? void 0 : Y.first_air_date) || "").slice(0, 4), eD = ((null == Y ? void 0 : Y.genres) || []).map((e6) => e6.name).join(", "), eY = ((null == Y || null == (t2 = Y.credits) ? void 0 : t2.cast) || []).slice(0, 5), eG = ((null == Y || null == (s2 = Y.credits) ? void 0 : s2.cast) || []).slice(0, 12), eQ = (null == Y || null == (n2 = Y.images) ? void 0 : n2.logos) || [], eV = eQ.find((e6) => "en" === e6.iso_639_1) || eQ[0], eX = null == eV ? void 0 : eV.file_path, e$ = () => {
      if (eL) return void z();
      es(false), setTimeout(z, 300);
    }, { isUhd: eZ, isUhdEpisode: e0, uhdSeasonCount: e1 } = (0, o.N)(), [e4, e22] = (0, r.useState)(false), e5 = eZ(null == R ? void 0 : R.type, null == R ? void 0 : R.id), e9 = "movie" === R.type && ef && ef.watched > 0 ? ef.duration && ef.watched >= ef.duration - 60 ? { text: "Play", icon: (0, a.jsx)(u.gSK, {}) } : { text: "Resume", icon: (0, a.jsx)(u.Swo, {}) } : "tv" === R.type && eH && eH.watched > 0 ? eH.duration && eH.watched >= eH.duration - 60 ? { text: "Play", icon: (0, a.jsx)(u.gSK, {}) } : { text: "Resume", icon: (0, a.jsx)(u.Swo, {}) } : { text: "Play", icon: (0, a.jsx)(u.gSK, {}) };
    e5 && O && "Play" === e9.text && (e9.text = "Play in 4K");
    let e3 = "\n    dm-shell relative w-full max-w-[94vw]\n    sm:max-w-3xl md:max-w-5xl lg:max-w-6xl xl:max-w-[80vw]\n    max-h-[98vh] overflow-y-auto rounded-2xl border shadow-2xl drop-shadow-2xl\n    ".concat(eP || "black" === eW ? "bg-[#18181b] border-white/10" : "bg-gradient-to-br from-white/15 via-white/10 to-white/5 backdrop-blur-xl border-white/15", "\n    ").concat(eL ? "" : et ? "animate-scale-in" : "animate-scale-out", "\n  ");
    return (0, a.jsxs)(a.Fragment, { children: [ej && (0, a.jsx)(b, { showId: R.id, showName: R.name || R.title || "", season: eu, episodes: ep, progress: ev, onClose: function() {
      ey(false), localStorage.setItem("memoryLaneDismissed:".concat(R.id), String(Date.now()));
    } }), (0, a.jsxs)("div", { onClick: () => {
      el || ea || e$();
    }, className: "fixed inset-0 flex items-center justify-center px-1 sm:px-2 ".concat(eL ? "opacity-100" : "transition-opacity duration-300 ".concat(et ? "opacity-100" : "opacity-0")), style: { zIndex: null != I ? I : 50 }, children: [(0, a.jsx)("div", { className: "absolute inset-0 bg-black/40", style: { willChange: "opacity" } }), !eP && "glassy" === eW && J && (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(h.P.div, { className: "absolute -top-52 -left-56 w-[480px] h-[420px] bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-600 opacity-40 blur-[36px] rounded-full pointer-events-none dm-blob-a", animate: { scale: [1, 1.18, 1.05, 1.12, 1], x: [0, 12, 16, 5, 0], y: [0, 13, -9, 3, 0], rotate: [0, 24, 9, -18, 0] }, transition: { duration: 14, repeat: 1 / 0, ease: "easeInOut" }, style: { willChange: "transform, opacity" } }), (0, a.jsx)(h.P.div, { className: "absolute top-36 right-8 w-[380px] h-[350px] bg-gradient-to-br from-fuchsia-400 via-pink-500 to-purple-600 opacity-28 blur-[30px] rounded-full pointer-events-none dm-blob-b", animate: { scale: [1, 1.12, 1.08, 1.09, 1], x: [0, -14, -17, -4, 0], y: [0, 5, -15, 9, 0], rotate: [0, -17, -4, 9, 0] }, transition: { duration: 13, repeat: 1 / 0, ease: "easeInOut" }, style: { willChange: "transform, opacity" } }), (0, a.jsx)(h.P.div, { className: "absolute bottom-24 left-[32%] w-[290px] h-[270px] bg-gradient-to-br from-teal-300 via-emerald-400 to-indigo-400 opacity-24 blur-[32px] rounded-full pointer-events-none dm-blob-c", animate: { scale: [1.08, 1, 1.11, 0.98, 1.08], x: [0, 8, -14, 3, 0], y: [0, -13, 17, 5, 0], rotate: [0, 18, -22, 7, 0] }, transition: { duration: 16, repeat: 1 / 0, ease: "easeInOut" }, style: { willChange: "transform, opacity" } })] }), K && (0, a.jsx)("div", { className: "fixed top-6 left-1/2 z-[999] -translate-x-1/2 bg-red-500/90 text-white text-base px-5 py-3 rounded-full shadow-xl font-semibold animate-pulse dm-net-warn", children: "Slow connection detected: Optimizing for speed!" }), (0, a.jsxs)("div", { ref: F, onClick: (e6) => e6.stopPropagation(), style: { scrollbarWidth: "none", msOverflowStyle: "none", willChange: "opacity", overscrollBehavior: "contain", boxShadow: eP ? "0 8px 32px 0 rgba(0,0,0,0.34)" : "0 8px 56px 0 rgba(0,0,0,0.44)" }, className: "jsx-1456db399024dbbe " + (e3 || ""), children: [(0, a.jsx)(l(), { id: "1456db399024dbbe", children: "div.jsx-1456db399024dbbe::-webkit-scrollbar{display:none}.drop-shadow-glow.jsx-1456db399024dbbe{-webkit-filter:drop-shadow(0 0 10px#7dd3fc)!important;filter:drop-shadow(0 0 10px#7dd3fc)!important}" }), (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe relative w-full h-96 sm:h-[480px] dm-hero", children: [(null == Y ? void 0 : Y.backdrop_path) ? (0, a.jsx)(d.default, { src: "https://image.tmdb.org/t/p/w1280".concat(Y.backdrop_path), alt: "backdrop", fill: true, priority: true, quality: H, className: "object-cover", style: { willChange: "transform, opacity", filter: eP ? "brightness(0.85)" : void 0 }, loading: H <= 20 ? "lazy" : "eager" }) : (0, a.jsx)("div", { className: "jsx-1456db399024dbbe w-full h-full flex items-center justify-center text-gray-400 text-2xl", children: "No Backdrop" }), (0, a.jsx)("button", { onClick: () => {
      el || ea || e$();
    }, disabled: el || ea, style: { willChange: "filter, opacity" }, className: "jsx-1456db399024dbbe absolute top-5 right-5 text-white text-3xl hover:text-gray-300 transition drop-shadow", children: (0, a.jsx)(u.QCr, {}) }), (0, a.jsx)(p.N, { children: eE && (0, a.jsx)(h.P.button, { ref: T, initial: "initial", animate: "animate", exit: "exit", variants: { initial: { opacity: 0, y: -16, scale: 0.82 }, animate: { opacity: 1, y: [0, 18, 0], scale: [1, 1.13, 1], transition: { duration: 1.6, repeat: 1 / 0, repeatType: "loop", ease: "easeInOut" } }, exit: { opacity: 0, y: -16, scale: 0.85, transition: { duration: 0.35 } } }, "aria-label": "Scroll down", onClick: (e6) => {
      e6.stopPropagation(), W.current && W.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }, style: { position: "absolute", left: "50%", bottom: "16px", transform: "translateX(-50%)", zIndex: 40, background: "rgba(16,16,16,0.36)", borderRadius: "9999px", boxShadow: "0 2px 10px 0 rgba(0,0,0,0.15)", border: "none", padding: 0, width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", opacity: 0.95, cursor: "pointer", outline: "none", transition: "opacity 0.15s", willChange: "transform, opacity" }, children: (0, a.jsx)("svg", { width: 38, height: 38, viewBox: "0 0 48 48", fill: "none", className: "jsx-1456db399024dbbe", children: (0, a.jsx)(h.P.path, { d: "M24 32L14 22M24 32L34 22", stroke: "white", strokeWidth: "4.2", strokeLinecap: "round", strokeLinejoin: "round", initial: { pathLength: 0, opacity: 0.15 }, animate: { pathLength: 1, opacity: 1, transition: { duration: 0.65, delay: 0.15, ease: "easeOut" } } }) }) }, "down-arrow") })] }), (0, a.jsx)("div", { style: { willChange: "transform, opacity" }, className: "jsx-1456db399024dbbe absolute left-1/2 top-96 sm:top-[480px] z-20 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg", children: eX ? (0, a.jsx)(d.default, { src: "https://image.tmdb.org/t/p/w1280".concat(eX), alt: "logo", width: 480, height: 180, onLoadingComplete: () => $(true), quality: H, loading: H <= 20 ? "lazy" : "eager", className: "object-contain transition-opacity duration-700 ".concat(X ? "opacity-100" : "opacity-0", " drop-shadow-lg"), style: { willChange: "transform, opacity" } }) : (0, a.jsx)("h2", { style: { willChange: "transform, opacity" }, className: "jsx-1456db399024dbbe " + "text-white font-bold text-center transition-opacity duration-700 ".concat(Z ? "opacity-100" : "opacity-0", " text-5xl sm:text-6xl lg:text-7xl drop-shadow-lg"), children: eJ }) }), "movie" === R.type && !!ef && "number" == typeof ef.watched && ef.watched > 0 && (0, a.jsx)("div", { className: "jsx-1456db399024dbbe w-full px-10 mt-4 mb-1 flex items-center justify-start", children: (0, a.jsxs)("span", { className: "jsx-1456db399024dbbe text-xs font-semibold bg-black/60 text-white/80 px-4 py-2 rounded-full shadow-md", children: ["Watched: ", E(ef.watched), ef.duration > 0 && " / ".concat(E(ef.duration))] }) }), ea && (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe absolute inset-0 z-30 pointer-events-none", children: [(0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-full w-full animate-pulse bg-gradient-to-b from-zinc-900/60 via-zinc-900/40 to-zinc-950/70" }), (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe absolute left-8 right-8 top-[26rem] space-y-6", children: [(0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-12 w-2/3 rounded-xl bg-white/15" }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-6 w-1/4 rounded-xl bg-white/10" }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-16 w-full rounded-xl bg-white/10" }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-16 w-5/6 rounded-xl bg-white/10" })] })] }), (el || ea) && (0, a.jsx)("div", { className: "jsx-1456db399024dbbe absolute inset-0 z-40 flex items-center justify-center bg-black/25 backdrop-blur-[1px]", children: (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex items-center gap-3 rounded-full bg-black/55 px-4 py-2 text-sm text-white/90 border border-white/10", children: [(0, a.jsx)("span", { className: "jsx-1456db399024dbbe h-2.5 w-2.5 rounded-full bg-cyan-300 animate-pulse" }), "Preparing details..."] }) }), (0, a.jsxs)("div", { ref: W, style: { minHeight: 0, willChange: "transform, opacity" }, className: "jsx-1456db399024dbbe relative pt-36 px-4 sm:px-9 md:px-14 pb-10 text-white flex flex-col", children: [(0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex flex-wrap items-center gap-6 text-xl text-gray-200/80 mb-8", children: [(0, a.jsx)("span", { className: "jsx-1456db399024dbbe", children: eK }), e5 ? (0, a.jsx)(i.A, {}) : (0, a.jsx)("span", { className: "jsx-1456db399024dbbe border border-gray-300/60 px-3 py-1.5 rounded", children: "HD" }), (0, a.jsx)("span", { className: "jsx-1456db399024dbbe border border-gray-300/60 px-3 py-1.5 rounded", children: Q }), (null == Y ? void 0 : Y.vote_average) > 0 && (0, a.jsxs)("span", { className: "jsx-1456db399024dbbe border border-gray-300/60 px-3 py-1.5 rounded", children: ["\u2605 ", Y.vote_average.toFixed(1)] })] }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe mb-6 -mt-3", children: (0, a.jsx)(v.A, {}) }), (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex flex-wrap items-center gap-6 mb-10", children: [(0, y.f)(Y || R) ? (0, a.jsx)("span", { className: "jsx-1456db399024dbbe flex items-center rounded-full border border-white/[0.2] bg-white/[0.1] px-9 py-4 text-2xl font-semibold text-white", children: (0, y.f)(Y || R) }) : (0, a.jsxs)("button", { onClick: function() {
      let e6 = O ? "?uhd=1" : "";
      if ("movie" === R.type) A.push("/watch/movie/".concat(R.id).concat(e6));
      else if ("tv" === R.type) {
        var t3;
        if (0 === ep.length) return;
        let s3 = 0;
        eH && (s3 = eH.idx, eH.idx === ep.length - 1 && eH.duration && eH.watched >= eH.duration - 60 && (s3 = 0));
        let a2 = (null == (t3 = ep[s3]) ? void 0 : t3.episode_number) || 1;
        A.push("/watch/tv/".concat(R.id, "/").concat(eu, "/").concat(a2).concat(e6));
      }
    }, style: { willChange: "transform, filter, opacity" }, className: "jsx-1456db399024dbbe bg-white text-black px-9 py-4 rounded-full flex items-center space-x-2 font-semibold text-2xl hover:shadow-lg hover:scale-105 transition", children: [e9.icon, (0, a.jsx)("span", { className: "jsx-1456db399024dbbe", children: e9.text })] }), (0, a.jsx)("button", { onClick: function(e6) {
      var t3, s3, a2, n3, l2;
      e6.stopPropagation(), (0, N.Cq)({ id: R.id, type: R.type, title: (null == Y ? void 0 : Y.title) || (null == Y ? void 0 : Y.name) || R.title || R.name, poster_path: null != (s3 = null != (t3 = null == Y ? void 0 : Y.poster_path) ? t3 : R.poster_path) ? s3 : null, backdrop_path: null != (n3 = null != (a2 = null == Y ? void 0 : Y.backdrop_path) ? a2 : R.backdrop_path) ? n3 : null, logo_path: null != (l2 = R.logo_path) ? l2 : null });
    }, "aria-label": er ? "Remove from My List" : "Add to My List", style: { minWidth: 60, minHeight: 60, willChange: "transform, filter, opacity" }, className: "jsx-1456db399024dbbe bg-white/20 text-white p-5 rounded-full hover:bg-white/30 backdrop-blur-sm transition flex items-center justify-center", children: (0, a.jsx)(p.N, { mode: "wait", initial: false, children: er ? (0, a.jsx)(h.P.span, { initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 }, transition: { duration: 0.16 }, className: "flex items-center justify-center", children: (0, a.jsx)(u.CMH, {}) }, "in") : (0, a.jsx)(h.P.span, { initial: { opacity: 0, scale: 0.6 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.7 }, transition: { duration: 0.16 }, className: "flex items-center justify-center", children: (0, a.jsx)(u.OiG, {}) }, "out") }) }), "tv" === R.type && (0, a.jsx)(x, { onClick: () => ey(true) }), (0, a.jsx)("button", { onClick: () => {
      if (F.current) {
        let e6 = F.current;
        e6.requestFullscreen && e6.requestFullscreen();
      }
    }, title: "Full Screen", style: { willChange: "transform, filter, opacity" }, className: "jsx-1456db399024dbbe bg-white/20 text-white p-5 rounded-full hover:bg-white/30 backdrop-blur-sm transition", children: (0, a.jsx)(u._AH, {}) }), !eP && (0, a.jsx)("button", { onClick: () => eF((e6) => "glassy" === e6 ? "black" : "glassy"), title: "glassy" === eW ? "Switch to Solid Black UI" : "Switch to Glassy UI", style: { minWidth: 60, minHeight: 60, willChange: "transform, filter, opacity" }, className: "jsx-1456db399024dbbe bg-white/20 text-white p-5 rounded-full hover:bg-white/30 backdrop-blur-sm transition flex items-center justify-center", children: "glassy" === eW ? (0, a.jsx)(k, { active: true }) : (0, a.jsx)(_, { active: true }) })] }), (0, a.jsx)("p", { className: "jsx-1456db399024dbbe text-gray-200/90 leading-snug text-2xl mb-8", children: (null == Y ? void 0 : Y.overview) || "Loading synopsis..." }), (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe mt-auto text-lg text-gray-300 space-y-1 mb-10", children: [!ez && (0, a.jsxs)("p", { className: "jsx-1456db399024dbbe", children: [(0, a.jsx)("span", { className: "jsx-1456db399024dbbe font-semibold text-white", children: "Starring:\xA0" }), eY.map((e6, t3) => {
      var s3;
      return (0, a.jsxs)(r.Fragment, { children: [t3 > 0 && ", ", (0, a.jsx)("button", { onClick: () => eB(e6.name), title: "Search ".concat(e6.name), className: "jsx-1456db399024dbbe transition-colors hover:text-white hover:underline underline-offset-4 decoration-white/40", children: e6.name })] }, null != (s3 = e6.id) ? s3 : t3);
    })] }), (0, a.jsxs)("p", { className: "jsx-1456db399024dbbe", children: [(0, a.jsx)("span", { className: "jsx-1456db399024dbbe font-semibold text-white", children: "Genres:\xA0" }), eD] })] }), "tv" === R.type && (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe w-full flex flex-col dm-episodes", children: [(0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex items-center gap-3 mb-6", children: [(0, a.jsx)("span", { className: "jsx-1456db399024dbbe font-semibold text-white text-2xl", children: "Episodes" }), (0, a.jsx)("select", { value: eu, onChange: (e6) => eh(Number(e6.target.value)), style: { minWidth: 170, appearance: "none", WebkitAppearance: "none", MozAppearance: "none", paddingRight: 16 }, className: "jsx-1456db399024dbbe bg-white/10 text-white px-4 py-3 rounded border border-white/20 text-xl", children: ed.map((e6) => (0, a.jsxs)("option", { value: e6.season_number, style: S, className: "jsx-1456db399024dbbe", children: [e6.name, e6.air_date ? " (".concat(e6.air_date.slice(0, 4), ")") : ""] }, e6.season_number)) }), e1(R.id, eu) > 0 && (0, a.jsx)("button", { type: "button", "aria-pressed": e4, onClick: () => e22((e6) => !e6), className: "jsx-1456db399024dbbe " + "rounded-full px-4 py-2.5 text-lg font-semibold transition-colors ".concat(e4 ? "bg-white text-black" : "bg-white/10 text-white/70 ring-1 ring-white/20 hover:text-white"), children: "4K only" })] }), ex ? (0, a.jsx)("div", { "aria-live": "polite", "aria-busy": "true", className: "jsx-1456db399024dbbe space-y-6 py-2", children: [0, 1, 2].map((e6) => (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex gap-8 rounded-2xl bg-white/10 p-7 items-center animate-pulse", children: [(0, a.jsx)("div", { className: "jsx-1456db399024dbbe w-64 h-44 rounded-2xl bg-white/10 flex-shrink-0" }), (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex-1 space-y-3", children: [(0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-7 w-1/2 rounded bg-white/15" }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-5 w-1/4 rounded bg-white/10" }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-5 w-full rounded bg-white/10" }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-5 w-5/6 rounded bg-white/10" })] })] }, e6)) }) : (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe space-y-8", children: [eu > 1 && (0, a.jsxs)("div", { onClick: () => {
      let e6 = F.current;
      eS(e6 ? { top: e6.scrollTop, height: e6.clientHeight } : null), ek(true);
    }, className: "jsx-1456db399024dbbe flex gap-8 rounded-2xl bg-white/10 hover:bg-white/20 transition cursor-pointer p-7 items-center mb-1", children: [(0, a.jsxs)("div", { className: "jsx-1456db399024dbbe relative w-64 h-44 rounded-2xl overflow-hidden bg-black/40 flex-shrink-0", children: [(() => {
      var e6;
      let t3 = null == (e6 = ed.find((e7) => e7.season_number === eu - 1)) ? void 0 : e6.poster_path;
      return t3 ? (0, a.jsx)(d.default, { src: "https://image.tmdb.org/t/p/w500".concat(t3), alt: "Season ".concat(eu - 1), fill: true, quality: H, className: "object-cover" }) : R.backdrop_path ? (0, a.jsx)(d.default, { src: "https://image.tmdb.org/t/p/w780".concat(R.backdrop_path), alt: "", fill: true, quality: H, className: "object-cover" }) : (0, a.jsx)("div", { className: "jsx-1456db399024dbbe h-full w-full bg-white/[0.04]" });
    })(), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe absolute inset-0 flex items-center justify-center bg-black/50", children: (0, a.jsx)("span", { className: "jsx-1456db399024dbbe flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,0.45)]", children: (0, a.jsx)(u.Swo, { className: "h-5 w-5 text-black" }) }) }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe absolute left-3 bottom-3 rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-white shadow", children: "Recap" })] }), (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex-1 flex flex-col min-w-0", children: [(0, a.jsxs)("span", { className: "jsx-1456db399024dbbe text-2xl font-bold text-white", children: ["Season ", eu - 1, " Recap"] }), (0, a.jsxs)("span", { className: "jsx-1456db399024dbbe text-gray-200 text-lg mt-2", children: ["Forgot where things left off? Catch up on Season", " ", eu - 1, " before starting Season ", eu, "."] })] })] }), ep.filter((e6) => !e4 || e0(R.id, eu, e6.episode_number)).map((e6) => {
      var t3, s3;
      let n3 = ev["s".concat(eu, "e").concat(e6.episode_number)], l2 = null != (t3 = null == n3 ? void 0 : n3.watched) ? t3 : 0, o2 = null != (s3 = null == n3 ? void 0 : n3.duration) ? s3 : e6.runtime ? 60 * e6.runtime : 0, r2 = U.spoilerShield && l2 <= 0;
      return (0, a.jsxs)("div", { onClick: () => A.push("/watch/tv/".concat(R.id, "/").concat(eu, "/").concat(e6.episode_number)), className: "jsx-1456db399024dbbe group flex gap-8 rounded-2xl bg-white/10 hover:bg-white/20 transition cursor-pointer p-7 items-center mb-1", children: [(0, a.jsxs)("div", { className: "jsx-1456db399024dbbe relative w-64 h-44 rounded-2xl overflow-hidden bg-black/40 flex-shrink-0", children: [e6.still_path ? (0, a.jsx)(d.default, { src: "https://image.tmdb.org/t/p/w1280".concat(e6.still_path), alt: e6.name, fill: true, quality: H, loading: H <= 20 ? "lazy" : "eager", className: "object-cover transition-[filter] duration-300 ".concat(r2 ? "blur-2xl group-hover:blur-0" : "") }) : (0, a.jsx)("div", { className: "jsx-1456db399024dbbe w-full h-full flex items-center justify-center text-gray-400 text-xl", children: "No Image" }), e0(R.id, eu, e6.episode_number) && (0, a.jsx)(i.A, { size: "sm", className: "absolute left-3 top-3 bg-black/60 backdrop-blur-sm" }), (l2 > 0 || o2 > 0) && (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe absolute left-3 bottom-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-semibold shadow", children: ["Watched: ", E(l2), o2 > 0 && " / ".concat(E(o2))] })] }), (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex-1 flex flex-col min-w-0", children: [(0, a.jsxs)("div", { className: "jsx-1456db399024dbbe flex items-center justify-between mb-2", children: [(0, a.jsxs)("span", { className: "jsx-1456db399024dbbe text-2xl font-bold text-white truncate", children: [e6.episode_number, ". ", e6.name] }), (0, a.jsxs)("span", { className: "jsx-1456db399024dbbe text-xl text-gray-300 ml-3", children: [e6.runtime ? "".concat(e6.runtime, "m") : "", e6.air_date && (0, a.jsx)("span", { className: "jsx-1456db399024dbbe ml-3 text-gray-400 text-lg", children: e6.air_date })] })] }), (0, a.jsx)("span", { className: "jsx-1456db399024dbbe " + "text-gray-200 text-lg line-clamp-2 transition-[filter] duration-300 ".concat(r2 ? "blur-[7px] select-none group-hover:blur-0" : ""), children: e6.overview || "No summary." })] })] }, e6.episode_number);
    })] })] }), ez && eG.length > 0 && (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe w-full", children: [(0, a.jsx)("div", { "aria-hidden": true, className: "jsx-1456db399024dbbe mt-6 h-px w-full bg-white/[0.07]" }), (0, a.jsx)("p", { className: "jsx-1456db399024dbbe mt-10 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-white/35", children: "Cast" }), (0, a.jsx)("div", { style: { scrollbarWidth: "none", msOverflowStyle: "none" }, className: "jsx-1456db399024dbbe mt-7 flex gap-8 overflow-x-auto pb-3", children: eG.map((e6) => {
      var t3;
      return (0, a.jsxs)("button", { onClick: () => eB(e6.name), title: "Search ".concat(e6.name), className: "jsx-1456db399024dbbe group flex w-[128px] flex-shrink-0 flex-col items-center text-center", children: [(0, a.jsx)("span", { className: "jsx-1456db399024dbbe block h-[104px] w-[104px] overflow-hidden rounded-full ring-1 ring-white/[0.1] shadow-[0_10px_28px_rgba(0,0,0,0.35)] transition duration-300 group-hover:ring-white/[0.55]", children: e6.profile_path ? (0, a.jsx)("img", { src: "https://image.tmdb.org/t/p/w185".concat(e6.profile_path), alt: e6.name, loading: "lazy", decoding: "async", className: "jsx-1456db399024dbbe h-full w-full object-cover" }) : (0, a.jsx)("span", { className: "jsx-1456db399024dbbe flex h-full w-full items-center justify-center bg-white/[0.06] text-2xl font-semibold text-white/40", children: (null == (t3 = e6.name) ? void 0 : t3[0]) || "?" }) }), (0, a.jsx)("span", { className: "jsx-1456db399024dbbe mt-3.5 w-full truncate text-[16px] font-medium text-white/90 transition-colors group-hover:text-white", children: e6.name }), (0, a.jsx)("span", { className: "jsx-1456db399024dbbe mt-0.5 w-full truncate text-[13px] text-white/40", children: e6.character })] }, e6.id);
    }) })] }), ez && eT.length > 0 && (0, a.jsxs)("div", { className: "jsx-1456db399024dbbe w-full", children: [(0, a.jsx)("div", { "aria-hidden": true, className: "jsx-1456db399024dbbe mt-10 h-px w-full bg-white/[0.07]" }), (0, a.jsx)("p", { className: "jsx-1456db399024dbbe mt-10 text-[12.5px] font-semibold uppercase tracking-[0.18em] text-white/35", children: "More Like This" }), (0, a.jsx)("div", { className: "jsx-1456db399024dbbe mt-7 grid grid-cols-4 gap-x-6 gap-y-9", children: eT.map((e6) => (0, a.jsxs)("button", { onClick: () => eU(e6), className: "jsx-1456db399024dbbe group min-w-0 text-left", children: [(0, a.jsx)("span", { className: "jsx-1456db399024dbbe block aspect-video w-full overflow-hidden rounded-xl ring-1 ring-white/[0.08] shadow-[0_14px_34px_rgba(0,0,0,0.35)] transition duration-300 group-hover:ring-white/[0.45]", children: (0, a.jsx)("img", { src: "https://image.tmdb.org/t/p/w500".concat(e6.backdrop_path || e6.poster_path), alt: e6.title || e6.name || "", loading: "lazy", decoding: "async", className: "jsx-1456db399024dbbe h-full w-full object-cover" }) }), (0, a.jsx)("span", { className: "jsx-1456db399024dbbe mt-3 block truncate text-[16px] font-medium text-white/90 transition-colors group-hover:text-white", children: e6.title || e6.name }), (0, a.jsxs)("span", { className: "jsx-1456db399024dbbe mt-0.5 block text-[13px] text-white/40", children: [(e6.release_date || e6.first_air_date || "").slice(0, 4), e6.vote_average ? "  \xB7  \u2605 ".concat(e6.vote_average.toFixed(1)) : ""] })] }, e6.id)) })] })] }), eN && "tv" === R.type && eu > 1 && (0, a.jsx)(w.A, { name: (null == Y ? void 0 : Y.name) || R.name || R.title || "", season: eu - 1, variant: "desktop", anchor: null != e_ ? e_ : void 0, onClose: () => ek(false) })] })] })] });
  }
}, 6006: (e, t, s) => {
  s.d(t, { k: () => r, w: () => d });
  var a = s(3928), n = s(756), l = s(338);
  let i = { subtle: "opacity-[0.22]", standard: "opacity-[0.32]", vivid: "opacity-[0.45]" }, o = (0, n.createContext)({ setAmbience: () => {
  }, holdAmbience: () => {
  } }), r = () => (0, n.useContext)(o);
  function d(e2) {
    let { children: t2 } = e2, [s2, r2] = (0, n.useState)(false), [d2, c] = (0, n.useState)(null), u = (0, n.useRef)(null), h = (0, l.t0)(), p = (0, n.useCallback)((e3) => {
      u.current || (e3 ? (c(e3), r2(true)) : r2(false));
    }, []), b = (0, n.useCallback)((e3) => {
      u.current = e3, e3 ? (c(e3), r2(true)) : r2(false);
    }, []), x = (0, n.useMemo)(() => ({ setAmbience: p, holdAmbience: b }), [p, b]);
    (0, n.useEffect)(() => {
      let e3 = () => {
        u.current || r2(false);
      };
      return window.addEventListener("sixseven:tab-switch", e3), () => window.removeEventListener("sixseven:tab-switch", e3);
    }, []);
    let m = s2 && h.ambience;
    return (0, a.jsxs)(o.Provider, { value: x, children: [(0, a.jsx)("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 z-0 transition-opacity duration-[900ms] ease-out ".concat(m ? i[h.ambienceIntensity] : "opacity-0"), style: { maskImage: "linear-gradient(to bottom, transparent 0px, transparent calc(118vh - 8rem), black calc(165vh - 8rem), black 100%)", WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, transparent calc(118vh - 8rem), black calc(165vh - 8rem), black 100%)" }, children: d2 && (0, a.jsx)("img", { src: "https://image.tmdb.org/t/p/w500".concat(d2), alt: "", className: "fixed inset-0 h-full w-full scale-110 object-cover blur-[110px] saturate-[1.5]" }) }), t2] });
  }
}, 9777: (e, t, s) => {
  s.d(t, { f: () => a });
  function a(e2) {
    let t2 = Date.parse((null == e2 ? void 0 : e2.release_date) || (null == e2 ? void 0 : e2.first_air_date) || "");
    if (!Number.isFinite(t2)) return null;
    let s2 = Math.ceil((t2 - Date.now()) / 864e5);
    return s2 <= 0 ? null : s2 <= 99 ? "In ".concat(s2, " day").concat(1 === s2 ? "" : "s") : "Releases ".concat(new Date(t2).toLocaleDateString("en-US", { month: "short", year: "numeric" }));
  }
} }]);
