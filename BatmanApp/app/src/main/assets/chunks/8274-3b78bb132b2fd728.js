if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
if(typeof queueMicrotask==='undefined'){window.queueMicrotask=function(cb){Promise.resolve().then(cb);};self.queueMicrotask=window.queueMicrotask;}
if(typeof globalThis==='undefined'){window.globalThis=window;self.globalThis=window;}
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8274], { 331: (t, e, s) => {
  "use strict";
  function r(t2) {
    let { reason: e2, children: s2 } = t2;
    return s2;
  }
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "BailoutToCSR", { enumerable: true, get: function() {
    return r;
  } }), s(2943);
}, 674: (t, e, s) => {
  "use strict";
  s.d(e, { x: () => h });
  var r = s(3928), n = s(756), i = s(3645), o = s(9839), a = s(2102);
  function h(t2) {
    let { children: e2, isValidProp: s2, ...h2 } = t2;
    s2 && (0, o.D)(s2), (h2 = { ...(0, n.useContext)(i.Q), ...h2 }).isStatic = (0, a.M)(() => h2.isStatic);
    let c = (0, n.useMemo)(() => h2, [JSON.stringify(h2.transition), h2.transformPagePoint, h2.reducedMotion]);
    return (0, r.jsx)(i.Q.Provider, { value: c, children: e2 });
  }
}, 1941: (t, e, s) => {
  "use strict";
  let r, n;
  s.d(e, { Ay: () => tA });
  var i, o = {};
  s.r(o), s.d(o, { Decoder: () => tm, Encoder: () => tg, PacketType: () => i, protocol: () => td });
  let a = /* @__PURE__ */ Object.create(null);
  a.open = "0", a.close = "1", a.ping = "2", a.pong = "3", a.message = "4", a.upgrade = "5", a.noop = "6";
  let h = /* @__PURE__ */ Object.create(null);
  Object.keys(a).forEach((t2) => {
    h[a[t2]] = t2;
  });
  let c = { type: "error", data: "parser error" }, l = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), u = "function" == typeof ArrayBuffer, p = (t2) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t2) : t2 && t2.buffer instanceof ArrayBuffer, f = ({ type: t2, data: e2 }, s2, r2) => {
    if (l && e2 instanceof Blob) if (s2) return r2(e2);
    else return d(e2, r2);
    if (u && (e2 instanceof ArrayBuffer || p(e2))) if (s2) return r2(e2);
    else return d(new Blob([e2]), r2);
    return r2(a[t2] + (e2 || ""));
  }, d = (t2, e2) => {
    let s2 = new FileReader();
    return s2.onload = function() {
      e2("b" + (s2.result.split(",")[1] || ""));
    }, s2.readAsDataURL(t2);
  };
  function g(t2) {
    return t2 instanceof Uint8Array ? t2 : t2 instanceof ArrayBuffer ? new Uint8Array(t2) : new Uint8Array(t2.buffer, t2.byteOffset, t2.byteLength);
  }
  let y = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
  for (let t2 = 0; t2 < y.length; t2++) m[y.charCodeAt(t2)] = t2;
  let _ = (t2) => {
    let e2 = 0.75 * t2.length, s2 = t2.length, r2, n2 = 0, i2, o2, a2, h2;
    "=" === t2[t2.length - 1] && (e2--, "=" === t2[t2.length - 2] && e2--);
    let c2 = new ArrayBuffer(e2), l2 = new Uint8Array(c2);
    for (r2 = 0; r2 < s2; r2 += 4) i2 = m[t2.charCodeAt(r2)], o2 = m[t2.charCodeAt(r2 + 1)], a2 = m[t2.charCodeAt(r2 + 2)], h2 = m[t2.charCodeAt(r2 + 3)], l2[n2++] = i2 << 2 | o2 >> 4, l2[n2++] = (15 & o2) << 4 | a2 >> 2, l2[n2++] = (3 & a2) << 6 | 63 & h2;
    return c2;
  }, b = "function" == typeof ArrayBuffer, v = (t2, e2) => {
    if ("string" != typeof t2) return { type: "message", data: k(t2, e2) };
    let s2 = t2.charAt(0);
    return "b" === s2 ? { type: "message", data: w(t2.substring(1), e2) } : h[s2] ? t2.length > 1 ? { type: h[s2], data: t2.substring(1) } : { type: h[s2] } : c;
  }, w = (t2, e2) => b ? k(_(t2), e2) : { base64: true, data: t2 }, k = (t2, e2) => "blob" === e2 ? t2 instanceof Blob ? t2 : new Blob([t2]) : t2 instanceof ArrayBuffer ? t2 : t2.buffer, E = (t2, e2) => {
    let s2 = t2.length, r2 = Array(s2), n2 = 0;
    t2.forEach((t3, i2) => {
      f(t3, false, (t4) => {
        r2[i2] = t4, ++n2 === s2 && e2(r2.join(""));
      });
    });
  }, O = (t2, e2) => {
    let s2 = t2.split(""), r2 = [];
    for (let t3 = 0; t3 < s2.length; t3++) {
      let n2 = v(s2[t3], e2);
      if (r2.push(n2), "error" === n2.type) break;
    }
    return r2;
  };
  function A(t2) {
    return t2.reduce((t3, e2) => t3 + e2.length, 0);
  }
  function T(t2, e2) {
    if (t2[0].length === e2) return t2.shift();
    let s2 = new Uint8Array(e2), r2 = 0;
    for (let n2 = 0; n2 < e2; n2++) s2[n2] = t2[0][r2++], r2 === t2[0].length && (t2.shift(), r2 = 0);
    return t2.length && r2 < t2[0].length && (t2[0] = t2[0].slice(r2)), s2;
  }
  function x(t2) {
    if (t2) {
      var e2 = t2;
      for (var s2 in x.prototype) e2[s2] = x.prototype[s2];
      return e2;
    }
  }
  x.prototype.on = x.prototype.addEventListener = function(t2, e2) {
    return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t2] = this._callbacks["$" + t2] || []).push(e2), this;
  }, x.prototype.once = function(t2, e2) {
    function s2() {
      this.off(t2, s2), e2.apply(this, arguments);
    }
    return s2.fn = e2, this.on(t2, s2), this;
  }, x.prototype.off = x.prototype.removeListener = x.prototype.removeAllListeners = x.prototype.removeEventListener = function(t2, e2) {
    if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
    var s2, r2 = this._callbacks["$" + t2];
    if (!r2) return this;
    if (1 == arguments.length) return delete this._callbacks["$" + t2], this;
    for (var n2 = 0; n2 < r2.length; n2++) if ((s2 = r2[n2]) === e2 || s2.fn === e2) {
      r2.splice(n2, 1);
      break;
    }
    return 0 === r2.length && delete this._callbacks["$" + t2], this;
  }, x.prototype.emit = function(t2) {
    this._callbacks = this._callbacks || {};
    for (var e2 = Array(arguments.length - 1), s2 = this._callbacks["$" + t2], r2 = 1; r2 < arguments.length; r2++) e2[r2 - 1] = arguments[r2];
    if (s2) {
      s2 = s2.slice(0);
      for (var r2 = 0, n2 = s2.length; r2 < n2; ++r2) s2[r2].apply(this, e2);
    }
    return this;
  }, x.prototype.emitReserved = x.prototype.emit, x.prototype.listeners = function(t2) {
    return this._callbacks = this._callbacks || {}, this._callbacks["$" + t2] || [];
  }, x.prototype.hasListeners = function(t2) {
    return !!this.listeners(t2).length;
  };
  let R = "function" == typeof Promise && "function" == typeof Promise.resolve ? (t2) => Promise.resolve().then(t2) : (t2, e2) => e2(t2, 0), C = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
  function B(t2, ...e2) {
    return e2.reduce((e3, s2) => (t2.hasOwnProperty(s2) && (e3[s2] = t2[s2]), e3), {});
  }
  let S = C.setTimeout, L = C.clearTimeout;
  function N(t2, e2) {
    e2.useNativeTimers ? (t2.setTimeoutFn = S.bind(C), t2.clearTimeoutFn = L.bind(C)) : (t2.setTimeoutFn = C.setTimeout.bind(C), t2.clearTimeoutFn = C.clearTimeout.bind(C));
  }
  function P() {
    return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
  }
  class j extends Error {
    constructor(t2, e2, s2) {
      super(t2), this.description = e2, this.context = s2, this.type = "TransportError";
    }
  }
  class q extends x {
    constructor(t2) {
      super(), this.writable = false, N(this, t2), this.opts = t2, this.query = t2.query, this.socket = t2.socket, this.supportsBinary = !t2.forceBase64;
    }
    onError(t2, e2, s2) {
      return super.emitReserved("error", new j(t2, e2, s2)), this;
    }
    open() {
      return this.readyState = "opening", this.doOpen(), this;
    }
    close() {
      return ("opening" === this.readyState || "open" === this.readyState) && (this.doClose(), this.onClose()), this;
    }
    send(t2) {
      "open" === this.readyState && this.write(t2);
    }
    onOpen() {
      this.readyState = "open", this.writable = true, super.emitReserved("open");
    }
    onData(t2) {
      let e2 = v(t2, this.socket.binaryType);
      this.onPacket(e2);
    }
    onPacket(t2) {
      super.emitReserved("packet", t2);
    }
    onClose(t2) {
      this.readyState = "closed", super.emitReserved("close", t2);
    }
    pause(t2) {
    }
    createUri(t2, e2 = {}) {
      return t2 + "://" + this._hostname() + this._port() + this.opts.path + this._query(e2);
    }
    _hostname() {
      let t2 = this.opts.hostname;
      return -1 === t2.indexOf(":") ? t2 : "[" + t2 + "]";
    }
    _port() {
      return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : "";
    }
    _query(t2) {
      let e2 = (function(t3) {
        let e3 = "";
        for (let s2 in t3) t3.hasOwnProperty(s2) && (e3.length && (e3 += "&"), e3 += encodeURIComponent(s2) + "=" + encodeURIComponent(t3[s2]));
        return e3;
      })(t2);
      return e2.length ? "?" + e2 : "";
    }
  }
  class M extends q {
    constructor() {
      super(...arguments), this._polling = false;
    }
    get name() {
      return "polling";
    }
    doOpen() {
      this._poll();
    }
    pause(t2) {
      this.readyState = "pausing";
      let e2 = () => {
        this.readyState = "paused", t2();
      };
      if (this._polling || !this.writable) {
        let t3 = 0;
        this._polling && (t3++, this.once("pollComplete", function() {
          --t3 || e2();
        })), this.writable || (t3++, this.once("drain", function() {
          --t3 || e2();
        }));
      } else e2();
    }
    _poll() {
      this._polling = true, this.doPoll(), this.emitReserved("poll");
    }
    onData(t2) {
      O(t2, this.socket.binaryType).forEach((t3) => {
        if ("opening" === this.readyState && "open" === t3.type && this.onOpen(), "close" === t3.type) return this.onClose({ description: "transport closed by the server" }), false;
        this.onPacket(t3);
      }), "closed" !== this.readyState && (this._polling = false, this.emitReserved("pollComplete"), "open" === this.readyState && this._poll());
    }
    doClose() {
      let t2 = () => {
        this.write([{ type: "close" }]);
      };
      "open" === this.readyState ? t2() : this.once("open", t2);
    }
    write(t2) {
      this.writable = false, E(t2, (t3) => {
        this.doWrite(t3, () => {
          this.writable = true, this.emitReserved("drain");
        });
      });
    }
    uri() {
      let t2 = this.opts.secure ? "https" : "http", e2 = this.query || {};
      return false !== this.opts.timestampRequests && (e2[this.opts.timestampParam] = P()), this.supportsBinary || e2.sid || (e2.b64 = 1), this.createUri(t2, e2);
    }
  }
  let D = false;
  try {
    D = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
  } catch (t2) {
  }
  let I = D;
  function U() {
  }
  class F extends M {
    constructor(t2) {
      if (super(t2), "undefined" != typeof location) {
        let e2 = "https:" === location.protocol, s2 = location.port;
        s2 || (s2 = e2 ? "443" : "80"), this.xd = "undefined" != typeof location && t2.hostname !== location.hostname || s2 !== t2.port;
      }
    }
    doWrite(t2, e2) {
      let s2 = this.request({ method: "POST", data: t2 });
      s2.on("success", e2), s2.on("error", (t3, e3) => {
        this.onError("xhr post error", t3, e3);
      });
    }
    doPoll() {
      let t2 = this.request();
      t2.on("data", this.onData.bind(this)), t2.on("error", (t3, e2) => {
        this.onError("xhr poll error", t3, e2);
      }), this.pollXhr = t2;
    }
  }
  class W extends x {
    constructor(t2, e2, s2) {
      super(), this.createRequest = t2, N(this, s2), this._opts = s2, this._method = s2.method || "GET", this._uri = e2, this._data = void 0 !== s2.data ? s2.data : null, this._create();
    }
    _create() {
      var t2;
      let e2 = B(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
      e2.xdomain = !!this._opts.xd;
      let s2 = this._xhr = this.createRequest(e2);
      try {
        s2.open(this._method, this._uri, true);
        try {
          if (this._opts.extraHeaders) for (let t3 in s2.setDisableHeaderCheck && s2.setDisableHeaderCheck(true), this._opts.extraHeaders) this._opts.extraHeaders.hasOwnProperty(t3) && s2.setRequestHeader(t3, this._opts.extraHeaders[t3]);
        } catch (t3) {
        }
        if ("POST" === this._method) try {
          s2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch (t3) {
        }
        try {
          s2.setRequestHeader("Accept", "*/*");
        } catch (t3) {
        }
        null == (t2 = this._opts.cookieJar) || t2.addCookies(s2), "withCredentials" in s2 && (s2.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (s2.timeout = this._opts.requestTimeout), s2.onreadystatechange = () => {
          var t3;
          3 === s2.readyState && (null == (t3 = this._opts.cookieJar) || t3.parseCookies(s2.getResponseHeader("set-cookie"))), 4 === s2.readyState && (200 === s2.status || 1223 === s2.status ? this._onLoad() : this.setTimeoutFn(() => {
            this._onError("number" == typeof s2.status ? s2.status : 0);
          }, 0));
        }, s2.send(this._data);
      } catch (t3) {
        this.setTimeoutFn(() => {
          this._onError(t3);
        }, 0);
        return;
      }
      "undefined" != typeof document && (this._index = W.requestsCount++, W.requests[this._index] = this);
    }
    _onError(t2) {
      this.emitReserved("error", t2, this._xhr), this._cleanup(true);
    }
    _cleanup(t2) {
      if (void 0 !== this._xhr && null !== this._xhr) {
        if (this._xhr.onreadystatechange = U, t2) try {
          this._xhr.abort();
        } catch (t3) {
        }
        "undefined" != typeof document && delete W.requests[this._index], this._xhr = null;
      }
    }
    _onLoad() {
      let t2 = this._xhr.responseText;
      null !== t2 && (this.emitReserved("data", t2), this.emitReserved("success"), this._cleanup());
    }
    abort() {
      this._cleanup();
    }
  }
  function H() {
    for (let t2 in W.requests) W.requests.hasOwnProperty(t2) && W.requests[t2].abort();
  }
  W.requestsCount = 0, W.requests = {}, "undefined" != typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", H) : "function" == typeof addEventListener && addEventListener("onpagehide" in C ? "pagehide" : "unload", H, false));
  let V = (function() {
    let t2 = Y({ xdomain: false });
    return t2 && null !== t2.responseType;
  })();
  class z extends F {
    constructor(t2) {
      super(t2);
      let e2 = t2 && t2.forceBase64;
      this.supportsBinary = V && !e2;
    }
    request(t2 = {}) {
      return Object.assign(t2, { xd: this.xd }, this.opts), new W(Y, this.uri(), t2);
    }
  }
  function Y(t2) {
    let e2 = t2.xdomain;
    try {
      if ("undefined" != typeof XMLHttpRequest && (!e2 || I)) return new XMLHttpRequest();
    } catch (t3) {
    }
    if (!e2) try {
      return new C[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch (t3) {
    }
  }
  let K = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
  class J extends q {
    get name() {
      return "websocket";
    }
    doOpen() {
      let t2 = this.uri(), e2 = this.opts.protocols, s2 = K ? {} : B(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
      this.opts.extraHeaders && (s2.headers = this.opts.extraHeaders);
      try {
        this.ws = this.createSocket(t2, e2, s2);
      } catch (t3) {
        return this.emitReserved("error", t3);
      }
      this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
    }
    addEventListeners() {
      this.ws.onopen = () => {
        this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
      }, this.ws.onclose = (t2) => this.onClose({ description: "websocket connection closed", context: t2 }), this.ws.onmessage = (t2) => this.onData(t2.data), this.ws.onerror = (t2) => this.onError("websocket error", t2);
    }
    write(t2) {
      this.writable = false;
      for (let e2 = 0; e2 < t2.length; e2++) {
        let s2 = t2[e2], r2 = e2 === t2.length - 1;
        f(s2, this.supportsBinary, (t3) => {
          try {
            this.doWrite(s2, t3);
          } catch (t4) {
          }
          r2 && R(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      void 0 !== this.ws && (this.ws.onerror = () => {
      }, this.ws.close(), this.ws = null);
    }
    uri() {
      let t2 = this.opts.secure ? "wss" : "ws", e2 = this.query || {};
      return this.opts.timestampRequests && (e2[this.opts.timestampParam] = P()), this.supportsBinary || (e2.b64 = 1), this.createUri(t2, e2);
    }
  }
  let Q = C.WebSocket || C.MozWebSocket;
  class X extends J {
    createSocket(t2, e2, s2) {
      return K ? new Q(t2, e2, s2) : e2 ? new Q(t2, e2) : new Q(t2);
    }
    doWrite(t2, e2) {
      this.ws.send(e2);
    }
  }
  class G extends q {
    get name() {
      return "webtransport";
    }
    doOpen() {
      try {
        this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
      } catch (t2) {
        return this.emitReserved("error", t2);
      }
      this._transport.closed.then(() => {
        this.onClose();
      }).catch((t2) => {
        this.onError("webtransport error", t2);
      }), this._transport.ready.then(() => {
        this._transport.createBidirectionalStream().then((t2) => {
          let e2 = (function(t3, e3) {
            n || (n = new TextDecoder());
            let s3 = [], r2 = 0, i3 = -1, o3 = false;
            return new TransformStream({ transform(a3, h2) {
              for (s3.push(a3); ; ) {
                if (0 === r2) {
                  if (1 > A(s3)) break;
                  let t4 = T(s3, 1);
                  o3 = (128 & t4[0]) == 128, r2 = (i3 = 127 & t4[0]) < 126 ? 3 : 126 === i3 ? 1 : 2;
                } else if (1 === r2) {
                  if (2 > A(s3)) break;
                  let t4 = T(s3, 2);
                  i3 = new DataView(t4.buffer, t4.byteOffset, t4.length).getUint16(0), r2 = 3;
                } else if (2 === r2) {
                  if (8 > A(s3)) break;
                  let t4 = T(s3, 8), e4 = new DataView(t4.buffer, t4.byteOffset, t4.length), n2 = e4.getUint32(0);
                  if (n2 > 2097151) {
                    h2.enqueue(c);
                    break;
                  }
                  i3 = 4294967296 * n2 + e4.getUint32(4), r2 = 3;
                } else {
                  if (A(s3) < i3) break;
                  let t4 = T(s3, i3);
                  h2.enqueue(v(o3 ? t4 : n.decode(t4), e3)), r2 = 0;
                }
                if (0 === i3 || i3 > t3) {
                  h2.enqueue(c);
                  break;
                }
              }
            } });
          })(Number.MAX_SAFE_INTEGER, this.socket.binaryType), s2 = t2.readable.pipeThrough(e2).getReader(), i2 = new TransformStream({ transform(t3, e3) {
            var s3;
            s3 = (s4) => {
              let r2, n2 = s4.length;
              if (n2 < 126) new DataView((r2 = new Uint8Array(1)).buffer).setUint8(0, n2);
              else if (n2 < 65536) {
                let t4 = new DataView((r2 = new Uint8Array(3)).buffer);
                t4.setUint8(0, 126), t4.setUint16(1, n2);
              } else {
                let t4 = new DataView((r2 = new Uint8Array(9)).buffer);
                t4.setUint8(0, 127), t4.setBigUint64(1, BigInt(n2));
              }
              t3.data && "string" != typeof t3.data && (r2[0] |= 128), e3.enqueue(r2), e3.enqueue(s4);
            }, l && t3.data instanceof Blob ? t3.data.arrayBuffer().then(g).then(s3) : u && (t3.data instanceof ArrayBuffer || p(t3.data)) ? s3(g(t3.data)) : f(t3, false, (t4) => {
              r || (r = new TextEncoder()), s3(r.encode(t4));
            });
          } });
          i2.readable.pipeTo(t2.writable), this._writer = i2.writable.getWriter();
          let o2 = () => {
            s2.read().then(({ done: t3, value: e3 }) => {
              t3 || (this.onPacket(e3), o2());
            }).catch((t3) => {
            });
          };
          o2();
          let a2 = { type: "open" };
          this.query.sid && (a2.data = `{"sid":"${this.query.sid}"}`), this._writer.write(a2).then(() => this.onOpen());
        });
      });
    }
    write(t2) {
      this.writable = false;
      for (let e2 = 0; e2 < t2.length; e2++) {
        let s2 = t2[e2], r2 = e2 === t2.length - 1;
        this._writer.write(s2).then(() => {
          r2 && R(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      }
    }
    doClose() {
      var t2;
      null == (t2 = this._transport) || t2.close();
    }
  }
  let $ = { websocket: X, webtransport: G, polling: z }, Z = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, tt = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
  function te(t2) {
    if (t2.length > 8e3) throw "URI too long";
    let e2 = t2, s2 = t2.indexOf("["), r2 = t2.indexOf("]");
    -1 != s2 && -1 != r2 && (t2 = t2.substring(0, s2) + t2.substring(s2, r2).replace(/:/g, ";") + t2.substring(r2, t2.length));
    let n2 = Z.exec(t2 || ""), i2 = {}, o2 = 14;
    for (; o2--; ) i2[tt[o2]] = n2[o2] || "";
    return -1 != s2 && -1 != r2 && (i2.source = e2, i2.host = i2.host.substring(1, i2.host.length - 1).replace(/;/g, ":"), i2.authority = i2.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i2.ipv6uri = true), i2.pathNames = (function(t3, e3) {
      let s3 = e3.replace(/\/{2,9}/g, "/").split("/");
      return ("/" == e3.slice(0, 1) || 0 === e3.length) && s3.splice(0, 1), "/" == e3.slice(-1) && s3.splice(s3.length - 1, 1), s3;
    })(0, i2.path), i2.queryKey = (function(t3, e3) {
      let s3 = {};
      return e3.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t4, e4, r3) {
        e4 && (s3[e4] = r3);
      }), s3;
    })(0, i2.query), i2;
  }
  let ts = "function" == typeof addEventListener && "function" == typeof removeEventListener, tr = [];
  ts && addEventListener("offline", () => {
    tr.forEach((t2) => t2());
  }, false);
  class tn extends x {
    constructor(t2, e2) {
      if (super(), this.binaryType = "arraybuffer", this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t2 && "object" == typeof t2 && (e2 = t2, t2 = null), t2) {
        let s2 = te(t2);
        e2.hostname = s2.host, e2.secure = "https" === s2.protocol || "wss" === s2.protocol, e2.port = s2.port, s2.query && (e2.query = s2.query);
      } else e2.host && (e2.hostname = te(e2.host).host);
      N(this, e2), this.secure = null != e2.secure ? e2.secure : "undefined" != typeof location && "https:" === location.protocol, e2.hostname && !e2.port && (e2.port = this.secure ? "443" : "80"), this.hostname = e2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = e2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, e2.transports.forEach((t3) => {
        let e3 = t3.prototype.name;
        this.transports.push(e3), this._transportsByName[e3] = t3;
      }), this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, e2), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), "string" == typeof this.opts.query && (this.opts.query = (function(t3) {
        let e3 = {}, s2 = t3.split("&");
        for (let t4 = 0, r2 = s2.length; t4 < r2; t4++) {
          let r3 = s2[t4].split("=");
          e3[decodeURIComponent(r3[0])] = decodeURIComponent(r3[1]);
        }
        return e3;
      })(this.opts.query)), ts && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
        this.transport && (this.transport.removeAllListeners(), this.transport.close());
      }, addEventListener("beforeunload", this._beforeunloadEventListener, false)), "localhost" !== this.hostname && (this._offlineEventListener = () => {
        this._onClose("transport close", { description: "network connection lost" });
      }, tr.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
    }
    createTransport(t2) {
      let e2 = Object.assign({}, this.opts.query);
      e2.EIO = 4, e2.transport = t2, this.id && (e2.sid = this.id);
      let s2 = Object.assign({}, this.opts, { query: e2, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[t2]);
      return new this._transportsByName[t2](s2);
    }
    _open() {
      if (0 === this.transports.length) return void this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      let t2 = this.opts.rememberUpgrade && tn.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket") ? "websocket" : this.transports[0];
      this.readyState = "opening";
      let e2 = this.createTransport(t2);
      e2.open(), this.setTransport(e2);
    }
    setTransport(t2) {
      this.transport && this.transport.removeAllListeners(), this.transport = t2, t2.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (t3) => this._onClose("transport close", t3));
    }
    onOpen() {
      this.readyState = "open", tn.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush();
    }
    _onPacket(t2) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t2), this.emitReserved("heartbeat"), t2.type) {
        case "open":
          this.onHandshake(JSON.parse(t2.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          let e2 = Error("server error");
          e2.code = t2.data, this._onError(e2);
          break;
        case "message":
          this.emitReserved("data", t2.data), this.emitReserved("message", t2.data);
      }
    }
    onHandshake(t2) {
      this.emitReserved("handshake", t2), this.id = t2.sid, this.transport.query.sid = t2.sid, this._pingInterval = t2.pingInterval, this._pingTimeout = t2.pingTimeout, this._maxPayload = t2.maxPayload, this.onOpen(), "closed" !== this.readyState && this._resetPingTimeout();
    }
    _resetPingTimeout() {
      this.clearTimeoutFn(this._pingTimeoutTimer);
      let t2 = this._pingInterval + this._pingTimeout;
      this._pingTimeoutTime = Date.now() + t2, this._pingTimeoutTimer = this.setTimeoutFn(() => {
        this._onClose("ping timeout");
      }, t2), this.opts.autoUnref && this._pingTimeoutTimer.unref();
    }
    _onDrain() {
      this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
    }
    flush() {
      if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
        let t2 = this._getWritablePackets();
        this.transport.send(t2), this._prevBufferLen = t2.length, this.emitReserved("flush");
      }
    }
    _getWritablePackets() {
      if (!(this._maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
      let t2 = 1;
      for (let e2 = 0; e2 < this.writeBuffer.length; e2++) {
        let s2 = this.writeBuffer[e2].data;
        if (s2 && (t2 += "string" == typeof s2 ? (function(t3) {
          let e3 = 0, s3 = 0;
          for (let r2 = 0, n2 = t3.length; r2 < n2; r2++) (e3 = t3.charCodeAt(r2)) < 128 ? s3 += 1 : e3 < 2048 ? s3 += 2 : e3 < 55296 || e3 >= 57344 ? s3 += 3 : (r2++, s3 += 4);
          return s3;
        })(s2) : Math.ceil(1.33 * (s2.byteLength || s2.size))), e2 > 0 && t2 > this._maxPayload) return this.writeBuffer.slice(0, e2);
        t2 += 2;
      }
      return this.writeBuffer;
    }
    _hasPingExpired() {
      if (!this._pingTimeoutTime) return true;
      let t2 = Date.now() > this._pingTimeoutTime;
      return t2 && (this._pingTimeoutTime = 0, R(() => {
        this._onClose("ping timeout");
      }, this.setTimeoutFn)), t2;
    }
    write(t2, e2, s2) {
      return this._sendPacket("message", t2, e2, s2), this;
    }
    send(t2, e2, s2) {
      return this._sendPacket("message", t2, e2, s2), this;
    }
    _sendPacket(t2, e2, s2, r2) {
      if ("function" == typeof e2 && (r2 = e2, e2 = void 0), "function" == typeof s2 && (r2 = s2, s2 = null), "closing" === this.readyState || "closed" === this.readyState) return;
      (s2 = s2 || {}).compress = false !== s2.compress;
      let n2 = { type: t2, data: e2, options: s2 };
      this.emitReserved("packetCreate", n2), this.writeBuffer.push(n2), r2 && this.once("flush", r2), this.flush();
    }
    close() {
      let t2 = () => {
        this._onClose("forced close"), this.transport.close();
      }, e2 = () => {
        this.off("upgrade", e2), this.off("upgradeError", e2), t2();
      }, s2 = () => {
        this.once("upgrade", e2), this.once("upgradeError", e2);
      };
      return ("opening" === this.readyState || "open" === this.readyState) && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
        this.upgrading ? s2() : t2();
      }) : this.upgrading ? s2() : t2()), this;
    }
    _onError(t2) {
      if (tn.priorWebsocketSuccess = false, this.opts.tryAllTransports && this.transports.length > 1 && "opening" === this.readyState) return this.transports.shift(), this._open();
      this.emitReserved("error", t2), this._onClose("transport error", t2);
    }
    _onClose(t2, e2) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), ts && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, false), this._offlineEventListener)) {
          let t3 = tr.indexOf(this._offlineEventListener);
          -1 !== t3 && tr.splice(t3, 1);
        }
        this.readyState = "closed", this.id = null, this.emitReserved("close", t2, e2), this.writeBuffer = [], this._prevBufferLen = 0;
      }
    }
  }
  tn.protocol = 4;
  class ti extends tn {
    constructor() {
      super(...arguments), this._upgrades = [];
    }
    onOpen() {
      if (super.onOpen(), "open" === this.readyState && this.opts.upgrade) for (let t2 = 0; t2 < this._upgrades.length; t2++) this._probe(this._upgrades[t2]);
    }
    _probe(t2) {
      let e2 = this.createTransport(t2), s2 = false;
      tn.priorWebsocketSuccess = false;
      let r2 = () => {
        s2 || (e2.send([{ type: "ping", data: "probe" }]), e2.once("packet", (t3) => {
          if (!s2) if ("pong" === t3.type && "probe" === t3.data) {
            if (this.upgrading = true, this.emitReserved("upgrading", e2), !e2) return;
            tn.priorWebsocketSuccess = "websocket" === e2.name, this.transport.pause(() => {
              s2 || "closed" !== this.readyState && (c2(), this.setTransport(e2), e2.send([{ type: "upgrade" }]), this.emitReserved("upgrade", e2), e2 = null, this.upgrading = false, this.flush());
            });
          } else {
            let t4 = Error("probe error");
            t4.transport = e2.name, this.emitReserved("upgradeError", t4);
          }
        }));
      };
      function n2() {
        s2 || (s2 = true, c2(), e2.close(), e2 = null);
      }
      let i2 = (t3) => {
        let s3 = Error("probe error: " + t3);
        s3.transport = e2.name, n2(), this.emitReserved("upgradeError", s3);
      };
      function o2() {
        i2("transport closed");
      }
      function a2() {
        i2("socket closed");
      }
      function h2(t3) {
        e2 && t3.name !== e2.name && n2();
      }
      let c2 = () => {
        e2.removeListener("open", r2), e2.removeListener("error", i2), e2.removeListener("close", o2), this.off("close", a2), this.off("upgrading", h2);
      };
      e2.once("open", r2), e2.once("error", i2), e2.once("close", o2), this.once("close", a2), this.once("upgrading", h2), -1 !== this._upgrades.indexOf("webtransport") && "webtransport" !== t2 ? this.setTimeoutFn(() => {
        s2 || e2.open();
      }, 200) : e2.open();
    }
    onHandshake(t2) {
      this._upgrades = this._filterUpgrades(t2.upgrades), super.onHandshake(t2);
    }
    _filterUpgrades(t2) {
      let e2 = [];
      for (let s2 = 0; s2 < t2.length; s2++) ~this.transports.indexOf(t2[s2]) && e2.push(t2[s2]);
      return e2;
    }
  }
  class to extends ti {
    constructor(t2, e2 = {}) {
      let s2 = "object" == typeof t2 ? t2 : e2;
      (!s2.transports || s2.transports && "string" == typeof s2.transports[0]) && (s2.transports = (s2.transports || ["polling", "websocket", "webtransport"]).map((t3) => $[t3]).filter((t3) => !!t3)), super(t2, s2);
    }
  }
  to.protocol;
  let ta = "function" == typeof ArrayBuffer, th = (t2) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t2) : t2.buffer instanceof ArrayBuffer, tc = Object.prototype.toString, tl = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === tc.call(Blob), tu = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === tc.call(File);
  function tp(t2) {
    return ta && (t2 instanceof ArrayBuffer || th(t2)) || tl && t2 instanceof Blob || tu && t2 instanceof File;
  }
  let tf = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"], td = 5;
  !(function(t2) {
    t2[t2.CONNECT = 0] = "CONNECT", t2[t2.DISCONNECT = 1] = "DISCONNECT", t2[t2.EVENT = 2] = "EVENT", t2[t2.ACK = 3] = "ACK", t2[t2.CONNECT_ERROR = 4] = "CONNECT_ERROR", t2[t2.BINARY_EVENT = 5] = "BINARY_EVENT", t2[t2.BINARY_ACK = 6] = "BINARY_ACK";
  })(i || (i = {}));
  class tg {
    constructor(t2) {
      this.replacer = t2;
    }
    encode(t2) {
      return (t2.type === i.EVENT || t2.type === i.ACK) && (function t3(e2, s2) {
        if (!e2 || "object" != typeof e2) return false;
        if (Array.isArray(e2)) {
          for (let s3 = 0, r2 = e2.length; s3 < r2; s3++) if (t3(e2[s3])) return true;
          return false;
        }
        if (tp(e2)) return true;
        if (e2.toJSON && "function" == typeof e2.toJSON && 1 == arguments.length) return t3(e2.toJSON(), true);
        for (let s3 in e2) if (Object.prototype.hasOwnProperty.call(e2, s3) && t3(e2[s3])) return true;
        return false;
      })(t2) ? this.encodeAsBinary({ type: t2.type === i.EVENT ? i.BINARY_EVENT : i.BINARY_ACK, nsp: t2.nsp, data: t2.data, id: t2.id }) : [this.encodeAsString(t2)];
    }
    encodeAsString(t2) {
      let e2 = "" + t2.type;
      return (t2.type === i.BINARY_EVENT || t2.type === i.BINARY_ACK) && (e2 += t2.attachments + "-"), t2.nsp && "/" !== t2.nsp && (e2 += t2.nsp + ","), null != t2.id && (e2 += t2.id), null != t2.data && (e2 += JSON.stringify(t2.data, this.replacer)), e2;
    }
    encodeAsBinary(t2) {
      let e2 = (function(t3) {
        let e3 = [], s3 = t3.data;
        return t3.data = (function t4(e4, s4) {
          if (!e4) return e4;
          if (tp(e4)) {
            let t5 = { _placeholder: true, num: s4.length };
            return s4.push(e4), t5;
          }
          if (Array.isArray(e4)) {
            let r3 = Array(e4.length);
            for (let n2 = 0; n2 < e4.length; n2++) r3[n2] = t4(e4[n2], s4);
            return r3;
          }
          if ("object" == typeof e4 && !(e4 instanceof Date)) {
            let r3 = {};
            for (let n2 in e4) Object.prototype.hasOwnProperty.call(e4, n2) && (r3[n2] = t4(e4[n2], s4));
            return r3;
          }
          return e4;
        })(s3, e3), t3.attachments = e3.length, { packet: t3, buffers: e3 };
      })(t2), s2 = this.encodeAsString(e2.packet), r2 = e2.buffers;
      return r2.unshift(s2), r2;
    }
  }
  function ty(t2) {
    return "[object Object]" === Object.prototype.toString.call(t2);
  }
  class tm extends x {
    constructor(t2) {
      super(), this.reviver = t2;
    }
    add(t2) {
      let e2;
      if ("string" == typeof t2) {
        if (this.reconstructor) throw Error("got plaintext data when reconstructing a packet");
        let s2 = (e2 = this.decodeString(t2)).type === i.BINARY_EVENT;
        s2 || e2.type === i.BINARY_ACK ? (e2.type = s2 ? i.EVENT : i.ACK, this.reconstructor = new t_(e2), 0 === e2.attachments && super.emitReserved("decoded", e2)) : super.emitReserved("decoded", e2);
      } else if (tp(t2) || t2.base64) if (this.reconstructor) (e2 = this.reconstructor.takeBinaryData(t2)) && (this.reconstructor = null, super.emitReserved("decoded", e2));
      else throw Error("got binary data when not reconstructing a packet");
      else throw Error("Unknown type: " + t2);
    }
    decodeString(t2) {
      let e2 = 0, s2 = { type: Number(t2.charAt(0)) };
      if (void 0 === i[s2.type]) throw Error("unknown packet type " + s2.type);
      if (s2.type === i.BINARY_EVENT || s2.type === i.BINARY_ACK) {
        let r3 = e2 + 1;
        for (; "-" !== t2.charAt(++e2) && e2 != t2.length; ) ;
        let n2 = t2.substring(r3, e2);
        if (n2 != Number(n2) || "-" !== t2.charAt(e2)) throw Error("Illegal attachments");
        s2.attachments = Number(n2);
      }
      if ("/" === t2.charAt(e2 + 1)) {
        let r3 = e2 + 1;
        for (; ++e2 && "," !== t2.charAt(e2) && e2 !== t2.length; ) ;
        s2.nsp = t2.substring(r3, e2);
      } else s2.nsp = "/";
      let r2 = t2.charAt(e2 + 1);
      if ("" !== r2 && Number(r2) == r2) {
        let r3 = e2 + 1;
        for (; ++e2; ) {
          let s3 = t2.charAt(e2);
          if (null == s3 || Number(s3) != s3) {
            --e2;
            break;
          }
          if (e2 === t2.length) break;
        }
        s2.id = Number(t2.substring(r3, e2 + 1));
      }
      if (t2.charAt(++e2)) {
        let r3 = this.tryParse(t2.substr(e2));
        if (tm.isPayloadValid(s2.type, r3)) s2.data = r3;
        else throw Error("invalid payload");
      }
      return s2;
    }
    tryParse(t2) {
      try {
        return JSON.parse(t2, this.reviver);
      } catch (t3) {
        return false;
      }
    }
    static isPayloadValid(t2, e2) {
      switch (t2) {
        case i.CONNECT:
          return ty(e2);
        case i.DISCONNECT:
          return void 0 === e2;
        case i.CONNECT_ERROR:
          return "string" == typeof e2 || ty(e2);
        case i.EVENT:
        case i.BINARY_EVENT:
          return Array.isArray(e2) && ("number" == typeof e2[0] || "string" == typeof e2[0] && -1 === tf.indexOf(e2[0]));
        case i.ACK:
        case i.BINARY_ACK:
          return Array.isArray(e2);
      }
    }
    destroy() {
      this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
    }
  }
  class t_ {
    constructor(t2) {
      this.packet = t2, this.buffers = [], this.reconPack = t2;
    }
    takeBinaryData(t2) {
      if (this.buffers.push(t2), this.buffers.length === this.reconPack.attachments) {
        var e2, s2;
        let t3 = (e2 = this.reconPack, s2 = this.buffers, e2.data = (function t4(e3, s3) {
          if (!e3) return e3;
          if (e3 && true === e3._placeholder) {
            if ("number" == typeof e3.num && e3.num >= 0 && e3.num < s3.length) return s3[e3.num];
            throw Error("illegal attachments");
          }
          if (Array.isArray(e3)) for (let r2 = 0; r2 < e3.length; r2++) e3[r2] = t4(e3[r2], s3);
          else if ("object" == typeof e3) for (let r2 in e3) Object.prototype.hasOwnProperty.call(e3, r2) && (e3[r2] = t4(e3[r2], s3));
          return e3;
        })(e2.data, s2), delete e2.attachments, e2);
        return this.finishedReconstruction(), t3;
      }
      return null;
    }
    finishedReconstruction() {
      this.reconPack = null, this.buffers = [];
    }
  }
  function tb(t2, e2, s2) {
    return t2.on(e2, s2), function() {
      t2.off(e2, s2);
    };
  }
  let tv = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
  class tw extends x {
    constructor(t2, e2, s2) {
      super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t2, this.nsp = e2, s2 && s2.auth && (this.auth = s2.auth), this._opts = Object.assign({}, s2), this.io._autoConnect && this.open();
    }
    get disconnected() {
      return !this.connected;
    }
    subEvents() {
      if (this.subs) return;
      let t2 = this.io;
      this.subs = [tb(t2, "open", this.onopen.bind(this)), tb(t2, "packet", this.onpacket.bind(this)), tb(t2, "error", this.onerror.bind(this)), tb(t2, "close", this.onclose.bind(this))];
    }
    get active() {
      return !!this.subs;
    }
    connect() {
      return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
    }
    open() {
      return this.connect();
    }
    send(...t2) {
      return t2.unshift("message"), this.emit.apply(this, t2), this;
    }
    emit(t2, ...e2) {
      var s2, r2, n2;
      if (tv.hasOwnProperty(t2)) throw Error('"' + t2.toString() + '" is a reserved event name');
      if (e2.unshift(t2), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(e2), this;
      let o2 = { type: i.EVENT, data: e2 };
      if (o2.options = {}, o2.options.compress = false !== this.flags.compress, "function" == typeof e2[e2.length - 1]) {
        let t3 = this.ids++, s3 = e2.pop();
        this._registerAckCallback(t3, s3), o2.id = t3;
      }
      let a2 = null == (r2 = null == (s2 = this.io.engine) ? void 0 : s2.transport) ? void 0 : r2.writable, h2 = this.connected && !(null == (n2 = this.io.engine) ? void 0 : n2._hasPingExpired());
      return this.flags.volatile && !a2 || (h2 ? (this.notifyOutgoingListeners(o2), this.packet(o2)) : this.sendBuffer.push(o2)), this.flags = {}, this;
    }
    _registerAckCallback(t2, e2) {
      var s2;
      let r2 = null != (s2 = this.flags.timeout) ? s2 : this._opts.ackTimeout;
      if (void 0 === r2) {
        this.acks[t2] = e2;
        return;
      }
      let n2 = this.io.setTimeoutFn(() => {
        delete this.acks[t2];
        for (let e3 = 0; e3 < this.sendBuffer.length; e3++) this.sendBuffer[e3].id === t2 && this.sendBuffer.splice(e3, 1);
        e2.call(this, Error("operation has timed out"));
      }, r2), i2 = (...t3) => {
        this.io.clearTimeoutFn(n2), e2.apply(this, t3);
      };
      i2.withError = true, this.acks[t2] = i2;
    }
    emitWithAck(t2, ...e2) {
      return new Promise((s2, r2) => {
        let n2 = (t3, e3) => t3 ? r2(t3) : s2(e3);
        n2.withError = true, e2.push(n2), this.emit(t2, ...e2);
      });
    }
    _addToQueue(t2) {
      let e2;
      "function" == typeof t2[t2.length - 1] && (e2 = t2.pop());
      let s2 = { id: this._queueSeq++, tryCount: 0, pending: false, args: t2, flags: Object.assign({ fromQueue: true }, this.flags) };
      t2.push((t3, ...r2) => {
        if (s2 === this._queue[0]) return null !== t3 ? s2.tryCount > this._opts.retries && (this._queue.shift(), e2 && e2(t3)) : (this._queue.shift(), e2 && e2(null, ...r2)), s2.pending = false, this._drainQueue();
      }), this._queue.push(s2), this._drainQueue();
    }
    _drainQueue(t2 = false) {
      if (!this.connected || 0 === this._queue.length) return;
      let e2 = this._queue[0];
      (!e2.pending || t2) && (e2.pending = true, e2.tryCount++, this.flags = e2.flags, this.emit.apply(this, e2.args));
    }
    packet(t2) {
      t2.nsp = this.nsp, this.io._packet(t2);
    }
    onopen() {
      "function" == typeof this.auth ? this.auth((t2) => {
        this._sendConnectPacket(t2);
      }) : this._sendConnectPacket(this.auth);
    }
    _sendConnectPacket(t2) {
      this.packet({ type: i.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t2) : t2 });
    }
    onerror(t2) {
      this.connected || this.emitReserved("connect_error", t2);
    }
    onclose(t2, e2) {
      this.connected = false, delete this.id, this.emitReserved("disconnect", t2, e2), this._clearAcks();
    }
    _clearAcks() {
      Object.keys(this.acks).forEach((t2) => {
        if (!this.sendBuffer.some((e2) => String(e2.id) === t2)) {
          let e2 = this.acks[t2];
          delete this.acks[t2], e2.withError && e2.call(this, Error("socket has been disconnected"));
        }
      });
    }
    onpacket(t2) {
      if (t2.nsp === this.nsp) switch (t2.type) {
        case i.CONNECT:
          t2.data && t2.data.sid ? this.onconnect(t2.data.sid, t2.data.pid) : this.emitReserved("connect_error", Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case i.EVENT:
        case i.BINARY_EVENT:
          this.onevent(t2);
          break;
        case i.ACK:
        case i.BINARY_ACK:
          this.onack(t2);
          break;
        case i.DISCONNECT:
          this.ondisconnect();
          break;
        case i.CONNECT_ERROR:
          this.destroy();
          let e2 = Error(t2.data.message);
          e2.data = t2.data.data, this.emitReserved("connect_error", e2);
      }
    }
    onevent(t2) {
      let e2 = t2.data || [];
      null != t2.id && e2.push(this.ack(t2.id)), this.connected ? this.emitEvent(e2) : this.receiveBuffer.push(Object.freeze(e2));
    }
    emitEvent(t2) {
      if (this._anyListeners && this._anyListeners.length) for (let e2 of this._anyListeners.slice()) e2.apply(this, t2);
      super.emit.apply(this, t2), this._pid && t2.length && "string" == typeof t2[t2.length - 1] && (this._lastOffset = t2[t2.length - 1]);
    }
    ack(t2) {
      let e2 = this, s2 = false;
      return function(...r2) {
        s2 || (s2 = true, e2.packet({ type: i.ACK, id: t2, data: r2 }));
      };
    }
    onack(t2) {
      let e2 = this.acks[t2.id];
      "function" == typeof e2 && (delete this.acks[t2.id], e2.withError && t2.data.unshift(null), e2.apply(this, t2.data));
    }
    onconnect(t2, e2) {
      this.id = t2, this.recovered = e2 && this._pid === e2, this._pid = e2, this.connected = true, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(true);
    }
    emitBuffered() {
      this.receiveBuffer.forEach((t2) => this.emitEvent(t2)), this.receiveBuffer = [], this.sendBuffer.forEach((t2) => {
        this.notifyOutgoingListeners(t2), this.packet(t2);
      }), this.sendBuffer = [];
    }
    ondisconnect() {
      this.destroy(), this.onclose("io server disconnect");
    }
    destroy() {
      this.subs && (this.subs.forEach((t2) => t2()), this.subs = void 0), this.io._destroy(this);
    }
    disconnect() {
      return this.connected && this.packet({ type: i.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
    }
    close() {
      return this.disconnect();
    }
    compress(t2) {
      return this.flags.compress = t2, this;
    }
    get volatile() {
      return this.flags.volatile = true, this;
    }
    timeout(t2) {
      return this.flags.timeout = t2, this;
    }
    onAny(t2) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t2), this;
    }
    prependAny(t2) {
      return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t2), this;
    }
    offAny(t2) {
      if (!this._anyListeners) return this;
      if (t2) {
        let e2 = this._anyListeners;
        for (let s2 = 0; s2 < e2.length; s2++) if (t2 === e2[s2]) {
          e2.splice(s2, 1);
          break;
        }
      } else this._anyListeners = [];
      return this;
    }
    listenersAny() {
      return this._anyListeners || [];
    }
    onAnyOutgoing(t2) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t2), this;
    }
    prependAnyOutgoing(t2) {
      return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t2), this;
    }
    offAnyOutgoing(t2) {
      if (!this._anyOutgoingListeners) return this;
      if (t2) {
        let e2 = this._anyOutgoingListeners;
        for (let s2 = 0; s2 < e2.length; s2++) if (t2 === e2[s2]) {
          e2.splice(s2, 1);
          break;
        }
      } else this._anyOutgoingListeners = [];
      return this;
    }
    listenersAnyOutgoing() {
      return this._anyOutgoingListeners || [];
    }
    notifyOutgoingListeners(t2) {
      if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) for (let e2 of this._anyOutgoingListeners.slice()) e2.apply(this, t2.data);
    }
  }
  function tk(t2) {
    t2 = t2 || {}, this.ms = t2.min || 100, this.max = t2.max || 1e4, this.factor = t2.factor || 2, this.jitter = t2.jitter > 0 && t2.jitter <= 1 ? t2.jitter : 0, this.attempts = 0;
  }
  tk.prototype.duration = function() {
    var t2 = this.ms * Math.pow(this.factor, this.attempts++);
    if (this.jitter) {
      var e2 = Math.random(), s2 = Math.floor(e2 * this.jitter * t2);
      t2 = (1 & Math.floor(10 * e2)) == 0 ? t2 - s2 : t2 + s2;
    }
    return 0 | Math.min(t2, this.max);
  }, tk.prototype.reset = function() {
    this.attempts = 0;
  }, tk.prototype.setMin = function(t2) {
    this.ms = t2;
  }, tk.prototype.setMax = function(t2) {
    this.max = t2;
  }, tk.prototype.setJitter = function(t2) {
    this.jitter = t2;
  };
  class tE extends x {
    constructor(t2, e2) {
      var s2;
      super(), this.nsps = {}, this.subs = [], t2 && "object" == typeof t2 && (e2 = t2, t2 = void 0), (e2 = e2 || {}).path = e2.path || "/socket.io", this.opts = e2, N(this, e2), this.reconnection(false !== e2.reconnection), this.reconnectionAttempts(e2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(e2.reconnectionDelay || 1e3), this.reconnectionDelayMax(e2.reconnectionDelayMax || 5e3), this.randomizationFactor(null != (s2 = e2.randomizationFactor) ? s2 : 0.5), this.backoff = new tk({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == e2.timeout ? 2e4 : e2.timeout), this._readyState = "closed", this.uri = t2;
      let r2 = e2.parser || o;
      this.encoder = new r2.Encoder(), this.decoder = new r2.Decoder(), this._autoConnect = false !== e2.autoConnect, this._autoConnect && this.open();
    }
    reconnection(t2) {
      return arguments.length ? (this._reconnection = !!t2, t2 || (this.skipReconnect = true), this) : this._reconnection;
    }
    reconnectionAttempts(t2) {
      return void 0 === t2 ? this._reconnectionAttempts : (this._reconnectionAttempts = t2, this);
    }
    reconnectionDelay(t2) {
      var e2;
      return void 0 === t2 ? this._reconnectionDelay : (this._reconnectionDelay = t2, null == (e2 = this.backoff) || e2.setMin(t2), this);
    }
    randomizationFactor(t2) {
      var e2;
      return void 0 === t2 ? this._randomizationFactor : (this._randomizationFactor = t2, null == (e2 = this.backoff) || e2.setJitter(t2), this);
    }
    reconnectionDelayMax(t2) {
      var e2;
      return void 0 === t2 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t2, null == (e2 = this.backoff) || e2.setMax(t2), this);
    }
    timeout(t2) {
      return arguments.length ? (this._timeout = t2, this) : this._timeout;
    }
    maybeReconnectOnOpen() {
      !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
    }
    open(t2) {
      if (~this._readyState.indexOf("open")) return this;
      this.engine = new to(this.uri, this.opts);
      let e2 = this.engine, s2 = this;
      this._readyState = "opening", this.skipReconnect = false;
      let r2 = tb(e2, "open", function() {
        s2.onopen(), t2 && t2();
      }), n2 = (e3) => {
        this.cleanup(), this._readyState = "closed", this.emitReserved("error", e3), t2 ? t2(e3) : this.maybeReconnectOnOpen();
      }, i2 = tb(e2, "error", n2);
      if (false !== this._timeout) {
        let t3 = this._timeout, s3 = this.setTimeoutFn(() => {
          r2(), n2(Error("timeout")), e2.close();
        }, t3);
        this.opts.autoUnref && s3.unref(), this.subs.push(() => {
          this.clearTimeoutFn(s3);
        });
      }
      return this.subs.push(r2), this.subs.push(i2), this;
    }
    connect(t2) {
      return this.open(t2);
    }
    onopen() {
      this.cleanup(), this._readyState = "open", this.emitReserved("open");
      let t2 = this.engine;
      this.subs.push(tb(t2, "ping", this.onping.bind(this)), tb(t2, "data", this.ondata.bind(this)), tb(t2, "error", this.onerror.bind(this)), tb(t2, "close", this.onclose.bind(this)), tb(this.decoder, "decoded", this.ondecoded.bind(this)));
    }
    onping() {
      this.emitReserved("ping");
    }
    ondata(t2) {
      try {
        this.decoder.add(t2);
      } catch (t3) {
        this.onclose("parse error", t3);
      }
    }
    ondecoded(t2) {
      R(() => {
        this.emitReserved("packet", t2);
      }, this.setTimeoutFn);
    }
    onerror(t2) {
      this.emitReserved("error", t2);
    }
    socket(t2, e2) {
      let s2 = this.nsps[t2];
      return s2 ? this._autoConnect && !s2.active && s2.connect() : (s2 = new tw(this, t2, e2), this.nsps[t2] = s2), s2;
    }
    _destroy(t2) {
      for (let t3 of Object.keys(this.nsps)) if (this.nsps[t3].active) return;
      this._close();
    }
    _packet(t2) {
      let e2 = this.encoder.encode(t2);
      for (let s2 = 0; s2 < e2.length; s2++) this.engine.write(e2[s2], t2.options);
    }
    cleanup() {
      this.subs.forEach((t2) => t2()), this.subs.length = 0, this.decoder.destroy();
    }
    _close() {
      this.skipReconnect = true, this._reconnecting = false, this.onclose("forced close");
    }
    disconnect() {
      return this._close();
    }
    onclose(t2, e2) {
      var s2;
      this.cleanup(), null == (s2 = this.engine) || s2.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t2, e2), this._reconnection && !this.skipReconnect && this.reconnect();
    }
    reconnect() {
      if (this._reconnecting || this.skipReconnect) return this;
      let t2 = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = false;
      else {
        let e2 = this.backoff.duration();
        this._reconnecting = true;
        let s2 = this.setTimeoutFn(() => {
          !t2.skipReconnect && (this.emitReserved("reconnect_attempt", t2.backoff.attempts), t2.skipReconnect || t2.open((e3) => {
            e3 ? (t2._reconnecting = false, t2.reconnect(), this.emitReserved("reconnect_error", e3)) : t2.onreconnect();
          }));
        }, e2);
        this.opts.autoUnref && s2.unref(), this.subs.push(() => {
          this.clearTimeoutFn(s2);
        });
      }
    }
    onreconnect() {
      let t2 = this.backoff.attempts;
      this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", t2);
    }
  }
  let tO = {};
  function tA(t2, e2) {
    let s2;
    "object" == typeof t2 && (e2 = t2, t2 = void 0);
    let r2 = (function(t3, e3 = "", s3) {
      let r3 = t3;
      s3 = s3 || "undefined" != typeof location && location, null == t3 && (t3 = s3.protocol + "//" + s3.host), "string" == typeof t3 && ("/" === t3.charAt(0) && (t3 = "/" === t3.charAt(1) ? s3.protocol + t3 : s3.host + t3), /^(https?|wss?):\/\//.test(t3) || (t3 = void 0 !== s3 ? s3.protocol + "//" + t3 : "https://" + t3), r3 = te(t3)), !r3.port && (/^(http|ws)$/.test(r3.protocol) ? r3.port = "80" : /^(http|ws)s$/.test(r3.protocol) && (r3.port = "443")), r3.path = r3.path || "/";
      let n3 = -1 !== r3.host.indexOf(":") ? "[" + r3.host + "]" : r3.host;
      return r3.id = r3.protocol + "://" + n3 + ":" + r3.port + e3, r3.href = r3.protocol + "://" + n3 + (s3 && s3.port === r3.port ? "" : ":" + r3.port), r3;
    })(t2, (e2 = e2 || {}).path || "/socket.io"), n2 = r2.source, i2 = r2.id, o2 = r2.path, a2 = tO[i2] && o2 in tO[i2].nsps;
    return e2.forceNew || e2["force new connection"] || false === e2.multiplex || a2 ? s2 = new tE(n2, e2) : (tO[i2] || (tO[i2] = new tE(n2, e2)), s2 = tO[i2]), r2.query && !e2.query && (e2.query = r2.queryKey), s2.socket(r2.path, e2);
  }
  Object.assign(tA, { Manager: tE, Socket: tw, io: tA, connect: tA });
}, 2425: (t, e, s) => {
  "use strict";
  let r, n;
  s.d(e, { L: () => K });
  var i = s(5329), o = s(8767), a = s(756), h = s(1994), c = s(4624);
  function l(t2, e2) {
    let s2, r2 = () => {
      let { currentTime: r3 } = e2, n2 = (null === r3 ? 0 : r3.value) / 100;
      s2 !== n2 && t2(n2), s2 = n2;
    };
    return c.Gt.preUpdate(r2, true), () => (0, c.WG)(r2);
  }
  var u = s(9453), p = s(623), f = s(811);
  let d = /* @__PURE__ */ new WeakMap(), g = (t2, e2, s2) => (r2, n2) => n2 && n2[0] ? n2[0][t2 + "Size"] : (0, p.x)(r2) && "getBBox" in r2 ? r2.getBBox()[e2] : r2[s2], y = g("inline", "width", "offsetWidth"), m = g("block", "height", "offsetHeight");
  function _({ target: t2, borderBoxSize: e2 }) {
    var _a;
    (_a = d.get(t2)) == null ? void 0 : _a.forEach((s2) => {
      s2(t2, { get width() {
        return y(t2, e2);
      }, get height() {
        return m(t2, e2);
      } });
    });
  }
  function b(t2) {
    t2.forEach(_);
  }
  let v = /* @__PURE__ */ new Set();
  var w = s(4115), k = s(696);
  let E = () => ({ current: 0, offset: [], progress: 0, scrollLength: 0, targetOffset: 0, targetLength: 0, containerLength: 0, velocity: 0 }), O = () => ({ time: 0, x: E(), y: E() }), A = { x: { length: "Width", position: "Left" }, y: { length: "Height", position: "Top" } };
  function T(t2, e2, s2, r2) {
    let n2 = s2[e2], { length: i2, position: o2 } = A[e2], a2 = n2.current, h2 = s2.time;
    n2.current = t2["scroll".concat(o2)], n2.scrollLength = t2["scroll".concat(i2)] - t2["client".concat(i2)], n2.offset.length = 0, n2.offset[0] = 0, n2.offset[1] = n2.scrollLength, n2.progress = (0, w.q)(0, n2.scrollLength, n2.current);
    let c2 = r2 - h2;
    n2.velocity = c2 > 50 ? 0 : (0, k.f)(n2.current - a2, c2);
  }
  var x = s(1036), R = s(2433), C = s(7809), B = s(24);
  let S = { start: 0, center: 0.5, end: 1 };
  function L(t2, e2) {
    let s2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0, r2 = 0;
    if (t2 in S && (t2 = S[t2]), "string" == typeof t2) {
      let e3 = parseFloat(t2);
      t2.endsWith("px") ? r2 = e3 : t2.endsWith("%") ? t2 = e3 / 100 : t2.endsWith("vw") ? r2 = e3 / 100 * document.documentElement.clientWidth : t2.endsWith("vh") ? r2 = e3 / 100 * document.documentElement.clientHeight : t2 = e3;
    }
    return "number" == typeof t2 && (r2 = e2 * t2), s2 + r2;
  }
  let N = [0, 0], P = { All: [[0, 0], [1, 1]] }, j = { x: 0, y: 0 }, q = /* @__PURE__ */ new WeakMap(), M = /* @__PURE__ */ new WeakMap(), D = /* @__PURE__ */ new WeakMap(), I = (t2) => t2 === document.scrollingElement ? window : t2;
  function U(t2) {
    let { container: e2 = document.scrollingElement, ...s2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (!e2) return h.l;
    let i2 = D.get(e2);
    i2 || (i2 = /* @__PURE__ */ new Set(), D.set(e2, i2));
    let o2 = (function(t3, e3, s3) {
      let r2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      return { measure: (e4) => {
        !(function(t4) {
          let e5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t4, s4 = arguments.length > 2 ? arguments[2] : void 0;
          if (s4.x.targetOffset = 0, s4.y.targetOffset = 0, e5 !== t4) {
            let r3 = e5;
            for (; r3 && r3 !== t4; ) s4.x.targetOffset += r3.offsetLeft, s4.y.targetOffset += r3.offsetTop, r3 = r3.offsetParent;
          }
          s4.x.targetLength = e5 === t4 ? e5.scrollWidth : e5.clientWidth, s4.y.targetLength = e5 === t4 ? e5.scrollHeight : e5.clientHeight, s4.x.containerLength = t4.clientWidth, s4.y.containerLength = t4.clientHeight;
        })(t3, r2.target, s3), T(t3, "x", s3, e4), T(t3, "y", s3, e4), s3.time = e4, (r2.offset || r2.target) && (function(t4, e5, s4) {
          let { offset: r3 = P.All } = s4, { target: n2 = t4, axis: i3 = "y" } = s4, o3 = "y" === i3 ? "height" : "width", a3 = n2 !== t4 ? (function(t5, e6) {
            let s5 = { x: 0, y: 0 }, r4 = t5;
            for (; r4 && r4 !== e6; ) if ((0, B.s)(r4)) s5.x += r4.offsetLeft, s5.y += r4.offsetTop, r4 = r4.offsetParent;
            else if ("svg" === r4.tagName) {
              let t6 = r4.getBoundingClientRect(), e7 = (r4 = r4.parentElement).getBoundingClientRect();
              s5.x += t6.left - e7.left, s5.y += t6.top - e7.top;
            } else if (r4 instanceof SVGGraphicsElement) {
              let { x: t6, y: e7 } = r4.getBBox();
              s5.x += t6, s5.y += e7;
              let n3 = null, i4 = r4.parentNode;
              for (; !n3; ) "svg" === i4.tagName && (n3 = i4), i4 = r4.parentNode;
              r4 = n3;
            } else break;
            return s5;
          })(n2, t4) : j, h2 = n2 === t4 ? { width: t4.scrollWidth, height: t4.scrollHeight } : "getBBox" in n2 && "svg" !== n2.tagName ? n2.getBBox() : { width: n2.clientWidth, height: n2.clientHeight }, c2 = { width: t4.clientWidth, height: t4.clientHeight };
          e5[i3].offset.length = 0;
          let l2 = !e5[i3].interpolate, u2 = r3.length;
          for (let t5 = 0; t5 < u2; t5++) {
            let s5 = (function(t6, e6, s6, r4) {
              let n3 = Array.isArray(t6) ? t6 : N, i4 = 0, o4 = 0;
              return "number" == typeof t6 ? n3 = [t6, t6] : "string" == typeof t6 && (n3 = (t6 = t6.trim()).includes(" ") ? t6.split(" ") : [t6, S[t6] ? t6 : "0"]), (i4 = L(n3[0], s6, r4)) - L(n3[1], e6);
            })(r3[t5], c2[o3], h2[o3], a3[i3]);
            l2 || s5 === e5[i3].interpolatorOffsets[t5] || (l2 = true), e5[i3].offset[t5] = s5;
          }
          l2 && (e5[i3].interpolate = (0, x.G)(e5[i3].offset, (0, R.Z)(r3), { clamp: false }), e5[i3].interpolatorOffsets = [...e5[i3].offset]), e5[i3].progress = (0, C.q)(0, 1, e5[i3].interpolate(e5[i3].current));
        })(t3, s3, r2);
      }, notify: () => e3(s3) };
    })(e2, t2, O(), s2);
    if (i2.add(o2), !q.has(e2)) {
      let t3 = () => {
        for (let t4 of i2) t4.measure(c.uv.timestamp);
        c.Gt.preUpdate(s3);
      }, s3 = () => {
        for (let t4 of i2) t4.notify();
      }, o3 = () => c.Gt.read(t3);
      q.set(e2, o3);
      let a3 = I(e2);
      window.addEventListener("resize", o3, { passive: true }), e2 !== document.documentElement && M.set(e2, "function" == typeof e2 ? (v.add(e2), n || (n = () => {
        let t4 = { get width() {
          return window.innerWidth;
        }, get height() {
          return window.innerHeight;
        } };
        v.forEach((e3) => e3(t4));
      }, window.addEventListener("resize", n)), () => {
        v.delete(e2), v.size || "function" != typeof n || (window.removeEventListener("resize", n), n = void 0);
      }) : (function(t4, e3) {
        r || "undefined" != typeof ResizeObserver && (r = new ResizeObserver(b));
        let s4 = (0, f.K)(t4);
        return s4.forEach((t5) => {
          let s5 = d.get(t5);
          s5 || (s5 = /* @__PURE__ */ new Set(), d.set(t5, s5)), s5.add(e3), r == null ? void 0 : r.observe(t5);
        }), () => {
          s4.forEach((t5) => {
            let s5 = d.get(t5);
            s5 == null ? void 0 : s5.delete(e3), (s5 == null ? void 0 : s5.size) || (r == null ? void 0 : r.unobserve(t5));
          });
        };
      })(e2, o3)), a3.addEventListener("scroll", o3, { passive: true }), o3();
    }
    let a2 = q.get(e2);
    return c.Gt.read(a2, false, true), () => {
      (0, c.WG)(a2);
      let t3 = D.get(e2);
      if (!t3 || (t3.delete(o2), t3.size)) return;
      let s3 = q.get(e2);
      if (q.delete(e2), s3) {
        var r2;
        I(e2).removeEventListener("scroll", s3), null == (r2 = M.get(e2)) || r2(), window.removeEventListener("resize", s3);
      }
    };
  }
  let F = /* @__PURE__ */ new Map();
  function W(t2) {
    var e2, s2, r2, n2;
    let { source: i2, container: o2, ...a2 } = t2, { axis: h2 } = a2;
    i2 && (o2 = i2);
    let c2 = null != (e2 = F.get(o2)) ? e2 : /* @__PURE__ */ new Map();
    F.set(o2, c2);
    let l2 = null != (s2 = a2.target) ? s2 : "self", p2 = null != (r2 = c2.get(l2)) ? r2 : {}, f2 = h2 + (null != (n2 = a2.offset) ? n2 : []).join(",");
    return p2[f2] || (p2[f2] = !a2.target && (0, u.J)() ? new ScrollTimeline({ source: o2, axis: h2 }) : (function(t3) {
      let e3 = { value: 0 }, s3 = U((s4) => {
        e3.value = 100 * s4[t3.axis].progress;
      }, t3);
      return { currentTime: e3, cancel: s3 };
    })({ container: o2, ...a2 })), p2[f2];
  }
  var H = s(2102), V = s(2487);
  function z(t2, e2) {
    (0, o.$)(!!(!e2 || e2.current), "You have defined a ".concat(t2, " options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its `layoutEffect: false` option."));
  }
  let Y = () => ({ scrollX: (0, i.OQ)(0), scrollY: (0, i.OQ)(0), scrollXProgress: (0, i.OQ)(0), scrollYProgress: (0, i.OQ)(0) });
  function K() {
    let { container: t2, target: e2, layoutEffect: s2 = true, ...r2 } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n2 = (0, H.M)(Y);
    return (s2 ? V.E : a.useEffect)(() => (z("target", e2), z("container", t2), (function(t3) {
      var e3, s3;
      let { axis: r3 = "y", container: n3 = document.scrollingElement, ...i2 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (!n3) return h.l;
      let o2 = { axis: r3, container: n3, ...i2 };
      return "function" == typeof t3 ? (e3 = t3, s3 = o2, 2 === e3.length ? U((t4) => {
        e3(t4[s3.axis].progress, t4);
      }, s3) : l(e3, W(s3))) : (function(t4, e4) {
        let s4 = W(e4);
        return t4.attachTimeline({ timeline: e4.target ? void 0 : s4, observe: (t5) => (t5.pause(), l((e5) => {
          t5.time = t5.duration * e5;
        }, s4)) });
      })(t3, o2);
    })((t3, e3) => {
      let { x: s3, y: r3 } = e3;
      n2.scrollX.set(s3.current), n2.scrollXProgress.set(s3.progress), n2.scrollY.set(r3.current), n2.scrollYProgress.set(r3.progress);
    }, { ...r2, container: (null == t2 ? void 0 : t2.current) || void 0, target: (null == e2 ? void 0 : e2.current) || void 0 })), [t2, e2, JSON.stringify(r2.offset)]), n2;
  }
}, 3225: (t, e) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), !(function(t2, e2) {
    for (var s2 in e2) Object.defineProperty(t2, s2, { enumerable: true, get: e2[s2] });
  })(e, { bindSnapshot: function() {
    return o;
  }, createAsyncLocalStorage: function() {
    return i;
  }, createSnapshot: function() {
    return a;
  } });
  let s = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", { value: "E504", enumerable: false, configurable: true });
  class r {
    disable() {
      throw s;
    }
    getStore() {
    }
    run() {
      throw s;
    }
    exit() {
      throw s;
    }
    enterWith() {
      throw s;
    }
    static bind(t2) {
      return t2;
    }
  }
  let n = "undefined" != typeof globalThis && window.AsyncLocalStorage;
  function i() {
    return n ? new n() : new r();
  }
  function o(t2) {
    return n ? n.bind(t2) : r.bind(t2);
  }
  function a() {
    return n ? n.snapshot() : function(t2, ...e2) {
      return t2(...e2);
    };
  }
}, 4934: (t, e, s) => {
  "use strict";
  function r(t2) {
    let { moduleIds: e2 } = t2;
    return null;
  }
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "PreloadChunks", { enumerable: true, get: function() {
    return r;
  } }), s(3928), s(3221), s(4941), s(5172);
}, 4941: (t, e, s) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "workAsyncStorage", { enumerable: true, get: function() {
    return r.workAsyncStorageInstance;
  } });
  let r = s(6259);
}, 6259: (t, e, s) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "workAsyncStorageInstance", { enumerable: true, get: function() {
    return r;
  } });
  let r = (0, s(3225).createAsyncLocalStorage)();
}, 6571: (t, e, s) => {
  "use strict";
  s.d(e, { L: () => n });
  var r = s(756);
  function n(t2, e2, s2) {
    (0, r.useInsertionEffect)(() => t2.on(e2, s2), [t2, e2, s2]);
  }
}, 6604: (t, e, s) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: function() {
    return h;
  } });
  let r = s(3928), n = s(756), i = s(331);
  function o(t2) {
    return { default: t2 && "default" in t2 ? t2.default : t2 };
  }
  s(4934);
  let a = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: true }, h = function(t2) {
    let e2 = { ...a, ...t2 }, s2 = (0, n.lazy)(() => e2.loader().then(o)), h2 = e2.loading;
    function c(t3) {
      let o2 = h2 ? (0, r.jsx)(h2, { isLoading: true, pastDelay: true, error: null }) : null, a2 = !e2.ssr || !!e2.loading, c2 = a2 ? n.Suspense : n.Fragment, l = e2.ssr ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(s2, { ...t3 })] }) : (0, r.jsx)(i.BailoutToCSR, { reason: "next/dynamic", children: (0, r.jsx)(s2, { ...t3 }) });
      return (0, r.jsx)(c2, { ...a2 ? { fallback: o2 } : {}, children: l });
    }
    return c.displayName = "LoadableComponent", c;
  };
}, 8620: (t, e, s) => {
  "use strict";
  Object.defineProperty(e, "__esModule", { value: true }), Object.defineProperty(e, "default", { enumerable: true, get: function() {
    return n;
  } });
  let r = s(9582)._(s(6604));
  function n(t2, e2) {
    var s2;
    let n2 = {};
    "function" == typeof t2 && (n2.loader = t2);
    let i = { ...n2, ...e2 };
    return (0, r.default)({ ...i, modules: null == (s2 = i.loadableGenerated) ? void 0 : s2.modules });
  }
  ("function" == typeof e.default || "object" == typeof e.default && null !== e.default) && void 0 === e.default.__esModule && (Object.defineProperty(e.default, "__esModule", { value: true }), Object.assign(e.default, e), t.exports = e.default);
}, 8931: (t) => {
  t.exports = { style: { fontFamily: "'Inter', 'Inter Fallback'", fontStyle: "normal" }, className: "__className_176161" };
}, 9319: (t, e, s) => {
  "use strict";
  s.d(e, { default: () => n.a });
  var r = s(8620), n = s.n(r);
} }]);
