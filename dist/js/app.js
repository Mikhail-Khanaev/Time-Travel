/*! For license information please see app.min.js.LICENSE.txt */
(() => {
  var t = {
      711: function (t) {
        t.exports = (function (t) {
          function e(s) {
            if (i[s]) return i[s].exports;
            var o = (i[s] = { exports: {}, id: s, loaded: !1 });
            return (
              t[s].call(o.exports, o, o.exports, e), (o.loaded = !0), o.exports
            );
          }
          var i = {};
          return (e.m = t), (e.c = i), (e.p = "dist/"), e(0);
        })([
          function (t, e, i) {
            "use strict";
            function s(t) {
              return t && t.__esModule ? t : { default: t };
            }
            var o =
                Object.assign ||
                function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var i = arguments[e];
                    for (var s in i)
                      Object.prototype.hasOwnProperty.call(i, s) &&
                        (t[s] = i[s]);
                  }
                  return t;
                },
              n = (s(i(1)), i(6)),
              r = s(n),
              l = s(i(7)),
              a = s(i(8)),
              d = s(i(9)),
              c = s(i(10)),
              u = s(i(11)),
              g = s(i(14)),
              h = [],
              m = !1,
              p = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1,
              },
              f = function () {
                if (
                  (arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0] &&
                    (m = !0),
                  m)
                )
                  return (
                    (h = (0, u.default)(h, p)), (0, c.default)(h, p.once), h
                  );
              },
              v = function () {
                (h = (0, g.default)()), f();
              },
              y = function () {
                h.forEach(function (t, e) {
                  t.node.removeAttribute("data-aos"),
                    t.node.removeAttribute("data-aos-easing"),
                    t.node.removeAttribute("data-aos-duration"),
                    t.node.removeAttribute("data-aos-delay");
                });
              },
              b = function (t) {
                return (
                  !0 === t ||
                  ("mobile" === t && d.default.mobile()) ||
                  ("phone" === t && d.default.phone()) ||
                  ("tablet" === t && d.default.tablet()) ||
                  ("function" == typeof t && !0 === t())
                );
              },
              w = function (t) {
                (p = o(p, t)), (h = (0, g.default)());
                var e = document.all && !window.atob;
                return b(p.disable) || e
                  ? y()
                  : (p.disableMutationObserver ||
                      a.default.isSupported() ||
                      (console.info(
                        '\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '
                      ),
                      (p.disableMutationObserver = !0)),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-easing", p.easing),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-duration", p.duration),
                    document
                      .querySelector("body")
                      .setAttribute("data-aos-delay", p.delay),
                    "DOMContentLoaded" === p.startEvent &&
                    ["complete", "interactive"].indexOf(document.readyState) >
                      -1
                      ? f(!0)
                      : "load" === p.startEvent
                      ? window.addEventListener(p.startEvent, function () {
                          f(!0);
                        })
                      : document.addEventListener(p.startEvent, function () {
                          f(!0);
                        }),
                    window.addEventListener(
                      "resize",
                      (0, l.default)(f, p.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "orientationchange",
                      (0, l.default)(f, p.debounceDelay, !0)
                    ),
                    window.addEventListener(
                      "scroll",
                      (0, r.default)(function () {
                        (0, c.default)(h, p.once);
                      }, p.throttleDelay)
                    ),
                    p.disableMutationObserver ||
                      a.default.ready("[data-aos]", v),
                    h);
              };
            t.exports = { init: w, refresh: f, refreshHard: v };
          },
          function (t, e) {},
          ,
          ,
          ,
          ,
          function (t, e) {
            (function (e) {
              "use strict";
              function i(t, e, i) {
                function s(e) {
                  var i = p,
                    s = f;
                  return (p = f = void 0), (I = e), (y = t.apply(s, i));
                }
                function n(t) {
                  return (I = t), (b = setTimeout(c, e)), E ? s(t) : y;
                }
                function r(t) {
                  var i = e - (t - w);
                  return T ? C(i, v - (t - I)) : i;
                }
                function a(t) {
                  var i = t - w;
                  return void 0 === w || i >= e || i < 0 || (T && t - I >= v);
                }
                function c() {
                  var t = S();
                  return a(t) ? u(t) : void (b = setTimeout(c, r(t)));
                }
                function u(t) {
                  return (b = void 0), k && p ? s(t) : ((p = f = void 0), y);
                }
                function g() {
                  void 0 !== b && clearTimeout(b),
                    (I = 0),
                    (p = w = f = b = void 0);
                }
                function h() {
                  return void 0 === b ? y : u(S());
                }
                function m() {
                  var t = S(),
                    i = a(t);
                  if (((p = arguments), (f = this), (w = t), i)) {
                    if (void 0 === b) return n(w);
                    if (T) return (b = setTimeout(c, e)), s(w);
                  }
                  return void 0 === b && (b = setTimeout(c, e)), y;
                }
                var p,
                  f,
                  v,
                  y,
                  b,
                  w,
                  I = 0,
                  E = !1,
                  T = !1,
                  k = !0;
                if ("function" != typeof t) throw new TypeError(d);
                return (
                  (e = l(e) || 0),
                  o(i) &&
                    ((E = !!i.leading),
                    (v = (T = "maxWait" in i) ? x(l(i.maxWait) || 0, e) : v),
                    (k = "trailing" in i ? !!i.trailing : k)),
                  (m.cancel = g),
                  (m.flush = h),
                  m
                );
              }
              function s(t, e, s) {
                var n = !0,
                  r = !0;
                if ("function" != typeof t) throw new TypeError(d);
                return (
                  o(s) &&
                    ((n = "leading" in s ? !!s.leading : n),
                    (r = "trailing" in s ? !!s.trailing : r)),
                  i(t, e, { leading: n, maxWait: e, trailing: r })
                );
              }
              function o(t) {
                var e = void 0 === t ? "undefined" : a(t);
                return !!t && ("object" == e || "function" == e);
              }
              function n(t) {
                return !!t && "object" == (void 0 === t ? "undefined" : a(t));
              }
              function r(t) {
                return (
                  "symbol" == (void 0 === t ? "undefined" : a(t)) ||
                  (n(t) && w.call(t) == u)
                );
              }
              function l(t) {
                if ("number" == typeof t) return t;
                if (r(t)) return c;
                if (o(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = o(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(g, "");
                var i = m.test(t);
                return i || p.test(t)
                  ? f(t.slice(2), i ? 2 : 8)
                  : h.test(t)
                  ? c
                  : +t;
              }
              var a =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      },
                d = "Expected a function",
                c = NaN,
                u = "[object Symbol]",
                g = /^\s+|\s+$/g,
                h = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                p = /^0o[0-7]+$/i,
                f = parseInt,
                v =
                  "object" == (void 0 === e ? "undefined" : a(e)) &&
                  e &&
                  e.Object === Object &&
                  e,
                y =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : a(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                b = v || y || Function("return this")(),
                w = Object.prototype.toString,
                x = Math.max,
                C = Math.min,
                S = function () {
                  return b.Date.now();
                };
              t.exports = s;
            }.call(
              e,
              (function () {
                return this;
              })()
            ));
          },
          function (t, e) {
            (function (e) {
              "use strict";
              function i(t, e, i) {
                function o(e) {
                  var i = p,
                    s = f;
                  return (p = f = void 0), (I = e), (y = t.apply(s, i));
                }
                function n(t) {
                  return (I = t), (b = setTimeout(c, e)), E ? o(t) : y;
                }
                function l(t) {
                  var i = e - (t - S);
                  return T ? x(i, v - (t - I)) : i;
                }
                function d(t) {
                  var i = t - S;
                  return void 0 === S || i >= e || i < 0 || (T && t - I >= v);
                }
                function c() {
                  var t = C();
                  return d(t) ? u(t) : void (b = setTimeout(c, l(t)));
                }
                function u(t) {
                  return (b = void 0), k && p ? o(t) : ((p = f = void 0), y);
                }
                function g() {
                  void 0 !== b && clearTimeout(b),
                    (I = 0),
                    (p = S = f = b = void 0);
                }
                function h() {
                  return void 0 === b ? y : u(C());
                }
                function m() {
                  var t = C(),
                    i = d(t);
                  if (((p = arguments), (f = this), (S = t), i)) {
                    if (void 0 === b) return n(S);
                    if (T) return (b = setTimeout(c, e)), o(S);
                  }
                  return void 0 === b && (b = setTimeout(c, e)), y;
                }
                var p,
                  f,
                  v,
                  y,
                  b,
                  S,
                  I = 0,
                  E = !1,
                  T = !1,
                  k = !0;
                if ("function" != typeof t) throw new TypeError(a);
                return (
                  (e = r(e) || 0),
                  s(i) &&
                    ((E = !!i.leading),
                    (v = (T = "maxWait" in i) ? w(r(i.maxWait) || 0, e) : v),
                    (k = "trailing" in i ? !!i.trailing : k)),
                  (m.cancel = g),
                  (m.flush = h),
                  m
                );
              }
              function s(t) {
                var e = void 0 === t ? "undefined" : l(t);
                return !!t && ("object" == e || "function" == e);
              }
              function o(t) {
                return !!t && "object" == (void 0 === t ? "undefined" : l(t));
              }
              function n(t) {
                return (
                  "symbol" == (void 0 === t ? "undefined" : l(t)) ||
                  (o(t) && b.call(t) == c)
                );
              }
              function r(t) {
                if ("number" == typeof t) return t;
                if (n(t)) return d;
                if (s(t)) {
                  var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                  t = s(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(u, "");
                var i = h.test(t);
                return i || m.test(t)
                  ? p(t.slice(2), i ? 2 : 8)
                  : g.test(t)
                  ? d
                  : +t;
              }
              var l =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      },
                a = "Expected a function",
                d = NaN,
                c = "[object Symbol]",
                u = /^\s+|\s+$/g,
                g = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                p = parseInt,
                f =
                  "object" == (void 0 === e ? "undefined" : l(e)) &&
                  e &&
                  e.Object === Object &&
                  e,
                v =
                  "object" ==
                    ("undefined" == typeof self ? "undefined" : l(self)) &&
                  self &&
                  self.Object === Object &&
                  self,
                y = f || v || Function("return this")(),
                b = Object.prototype.toString,
                w = Math.max,
                x = Math.min,
                C = function () {
                  return y.Date.now();
                };
              t.exports = i;
            }.call(
              e,
              (function () {
                return this;
              })()
            ));
          },
          function (t, e) {
            "use strict";
            function i(t) {
              var e = void 0,
                s = void 0;
              for (e = 0; e < t.length; e += 1) {
                if ((s = t[e]).dataset && s.dataset.aos) return !0;
                if (s.children && i(s.children)) return !0;
              }
              return !1;
            }
            function s() {
              return (
                window.MutationObserver ||
                window.WebKitMutationObserver ||
                window.MozMutationObserver
              );
            }
            function o() {
              return !!s();
            }
            function n(t, e) {
              var i = window.document,
                o = new (s())(r);
              (l = e),
                o.observe(i.documentElement, {
                  childList: !0,
                  subtree: !0,
                  removedNodes: !0,
                });
            }
            function r(t) {
              t &&
                t.forEach(function (t) {
                  var e = Array.prototype.slice.call(t.addedNodes),
                    s = Array.prototype.slice.call(t.removedNodes);
                  if (i(e.concat(s))) return l();
                });
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var l = function () {};
            e.default = { isSupported: o, ready: n };
          },
          function (t, e) {
            "use strict";
            function i(t, e) {
              if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function");
            }
            function s() {
              return (
                navigator.userAgent || navigator.vendor || window.opera || ""
              );
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = (function () {
                function t(t, e) {
                  for (var i = 0; i < e.length; i++) {
                    var s = e[i];
                    (s.enumerable = s.enumerable || !1),
                      (s.configurable = !0),
                      "value" in s && (s.writable = !0),
                      Object.defineProperty(t, s.key, s);
                  }
                }
                return function (e, i, s) {
                  return i && t(e.prototype, i), s && t(e, s), e;
                };
              })(),
              n =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
              r =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              l =
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
              a =
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
              d = (function () {
                function t() {
                  i(this, t);
                }
                return (
                  o(t, [
                    {
                      key: "phone",
                      value: function () {
                        var t = s();
                        return !(!n.test(t) && !r.test(t.substr(0, 4)));
                      },
                    },
                    {
                      key: "mobile",
                      value: function () {
                        var t = s();
                        return !(!l.test(t) && !a.test(t.substr(0, 4)));
                      },
                    },
                    {
                      key: "tablet",
                      value: function () {
                        return this.mobile() && !this.phone();
                      },
                    },
                  ]),
                  t
                );
              })();
            e.default = new d();
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = function (t, e, i) {
                var s = t.node.getAttribute("data-aos-once");
                e > t.position
                  ? t.node.classList.add("aos-animate")
                  : void 0 !== s &&
                    ("false" === s || (!i && "true" !== s)) &&
                    t.node.classList.remove("aos-animate");
              },
              s = function (t, e) {
                var s = window.pageYOffset,
                  o = window.innerHeight;
                t.forEach(function (t, n) {
                  i(t, o + s, e);
                });
              };
            e.default = s;
          },
          function (t, e, i) {
            "use strict";
            function s(t) {
              return t && t.__esModule ? t : { default: t };
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = s(i(12)),
              n = function (t, e) {
                return (
                  t.forEach(function (t, i) {
                    t.node.classList.add("aos-init"),
                      (t.position = (0, o.default)(t.node, e.offset));
                  }),
                  t
                );
              };
            e.default = n;
          },
          function (t, e, i) {
            "use strict";
            function s(t) {
              return t && t.__esModule ? t : { default: t };
            }
            Object.defineProperty(e, "__esModule", { value: !0 });
            var o = s(i(13)),
              n = function (t, e) {
                var i = 0,
                  s = 0,
                  n = window.innerHeight,
                  r = {
                    offset: t.getAttribute("data-aos-offset"),
                    anchor: t.getAttribute("data-aos-anchor"),
                    anchorPlacement: t.getAttribute(
                      "data-aos-anchor-placement"
                    ),
                  };
                switch (
                  (r.offset && !isNaN(r.offset) && (s = parseInt(r.offset)),
                  r.anchor &&
                    document.querySelectorAll(r.anchor) &&
                    (t = document.querySelectorAll(r.anchor)[0]),
                  (i = (0, o.default)(t).top),
                  r.anchorPlacement)
                ) {
                  case "top-bottom":
                    break;
                  case "center-bottom":
                    i += t.offsetHeight / 2;
                    break;
                  case "bottom-bottom":
                    i += t.offsetHeight;
                    break;
                  case "top-center":
                    i += n / 2;
                    break;
                  case "bottom-center":
                    i += n / 2 + t.offsetHeight;
                    break;
                  case "center-center":
                    i += n / 2 + t.offsetHeight / 2;
                    break;
                  case "top-top":
                    i += n;
                    break;
                  case "bottom-top":
                    i += t.offsetHeight + n;
                    break;
                  case "center-top":
                    i += t.offsetHeight / 2 + n;
                }
                return (
                  r.anchorPlacement || r.offset || isNaN(e) || (s = e), i + s
                );
              };
            e.default = n;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = function (t) {
              for (
                var e = 0, i = 0;
                t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);

              )
                (e += t.offsetLeft - ("BODY" != t.tagName ? t.scrollLeft : 0)),
                  (i += t.offsetTop - ("BODY" != t.tagName ? t.scrollTop : 0)),
                  (t = t.offsetParent);
              return { top: i, left: e };
            };
            e.default = i;
          },
          function (t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = function (t) {
              return (
                (t = t || document.querySelectorAll("[data-aos]")),
                Array.prototype.map.call(t, function (t) {
                  return { node: t };
                })
              );
            };
            e.default = i;
          },
        ]);
      },
    },
    e = {};
  function i(s) {
    var o = e[s];
    if (void 0 !== o) return o.exports;
    var n = (e[s] = { exports: {} });
    return t[s].call(n.exports, n, n.exports, i), n.exports;
  }
  (() => {
    "use strict";
    let t = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          t.Android() || t.BlackBerry() || t.iOS() || t.Opera() || t.Windows()
        );
      },
    };
    let e = !0,
      s = (t = 500) => {
        let i = document.querySelector("body");
        if (e) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let t = 0; t < s.length; t++) {
              s[t].style.paddingRight = "0px";
            }
            (i.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, t),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      },
      o = (t = 500) => {
        let i = document.querySelector("body");
        if (e) {
          let s = document.querySelectorAll("[data-lp]");
          for (let t = 0; t < s.length; t++) {
            s[t].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (i.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (e = !1),
            setTimeout(function () {
              e = !0;
            }, t);
        }
      };
    function n(t) {
      setTimeout(() => {
        window.FLS && console.log(t);
      }, 0);
    }
    let r = (t, e = !1, i = 500, o = 0) => {
      const r = document.querySelector(t);
      if (r) {
        let l = "",
          a = 0;
        e &&
          ((l = "header.header"), (a = document.querySelector(l).offsetHeight));
        let d = {
          speedAsDuration: !0,
          speed: i,
          header: l,
          offset: o,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (s(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(r, "", d);
        else {
          let t = r.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: a ? t - a : t, behavior: "smooth" });
        }
        n(`[gotoBlock]: Юхуу...едем к ${t}`);
      } else n(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${t}`);
    };
    const l = { inputMaskModule: null, selectModule: null };
    let a = {
      getErrors(t) {
        let e = 0,
          i = t.querySelectorAll("*[data-required]");
        return (
          i.length &&
            i.forEach((t) => {
              (null === t.offsetParent && "SELECT" !== t.tagName) ||
                t.disabled ||
                (e += this.validateInput(t));
            }),
          e
        );
      },
      validateInput(t) {
        let e = 0;
        return (
          "email" === t.dataset.required
            ? ((t.value = t.value.replace(" ", "")),
              this.emailTest(t) ? (this.addError(t), e++) : this.removeError(t))
            : ("checkbox" !== t.type || t.checked) && t.value
            ? this.removeError(t)
            : (this.addError(t), e++),
          e
        );
      },
      addError(t) {
        t.classList.add("_form-error"),
          t.parentElement.classList.add("_form-error");
        let e = t.parentElement.querySelector(".form__error");
        e && t.parentElement.removeChild(e),
          t.dataset.error &&
            t.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${t.dataset.error}</div>`
            );
      },
      removeError(t) {
        t.classList.remove("_form-error"),
          t.parentElement.classList.remove("_form-error"),
          t.parentElement.querySelector(".form__error") &&
            t.parentElement.removeChild(
              t.parentElement.querySelector(".form__error")
            );
      },
      formClean(t) {
        t.reset(),
          setTimeout(() => {
            let e = t.querySelectorAll("input,textarea");
            for (let t = 0; t < e.length; t++) {
              const i = e[t];
              i.parentElement.classList.remove("_form-focus"),
                i.classList.remove("_form-focus"),
                a.removeError(i),
                (i.value = i.dataset.placeholder);
            }
            let i = t.querySelectorAll(".checkbox__input");
            if (i.length > 0)
              for (let t = 0; t < i.length; t++) {
                i[t].checked = !1;
              }
            if (l.selectModule) {
              let e = t.querySelectorAll(".select");
              if (e.length)
                for (let t = 0; t < e.length; t++) {
                  const i = e[t].querySelector("select");
                  l.selectModule.selectBuild(i);
                }
            }
          }, 0);
      },
      emailTest: (t) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(t.value),
    };
    let d = !1;
    setTimeout(() => {
      if (d) {
        let t = new Event("windowScroll");
        window.addEventListener("scroll", function (e) {
          document.dispatchEvent(t);
        });
      }
    }, 0);
    var c = function () {
      return (
        (c =
          Object.assign ||
          function (t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
              for (var o in (e = arguments[i]))
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t;
          }),
        c.apply(this, arguments)
      );
    };
    var u = "lgAfterAppendSlide",
      g = "lgInit",
      h = "lgHasVideo",
      m = "lgContainerResize",
      p = "lgUpdateSlides",
      f = "lgAfterAppendSubHtml",
      v = "lgBeforeOpen",
      y = "lgAfterOpen",
      b = "lgSlideItemLoad",
      w = "lgBeforeSlide",
      x = "lgAfterSlide",
      C = "lgPosterClick",
      S = "lgDragStart",
      I = "lgDragMove",
      E = "lgDragEnd",
      T = "lgBeforeNextSlide",
      k = "lgBeforePrevSlide",
      O = "lgBeforeClose",
      L = "lgAfterClose",
      A = {
        mode: "lg-slide",
        easing: "ease",
        speed: 400,
        licenseKey: "0000-0000-000-0000",
        height: "100%",
        width: "100%",
        addClass: "",
        startClass: "lg-start-zoom",
        backdropDuration: 300,
        container: "",
        startAnimationDuration: 400,
        zoomFromOrigin: !0,
        hideBarsDelay: 0,
        showBarsAfter: 1e4,
        slideDelay: 0,
        supportLegacyBrowser: !0,
        allowMediaOverlap: !1,
        videoMaxSize: "1280-720",
        loadYouTubePoster: !0,
        defaultCaptionHeight: 0,
        ariaLabelledby: "",
        ariaDescribedby: "",
        resetScrollPosition: !0,
        hideScrollbar: !1,
        closable: !0,
        swipeToClose: !0,
        closeOnTap: !0,
        showCloseIcon: !0,
        showMaximizeIcon: !1,
        loop: !0,
        escKey: !0,
        keyPress: !0,
        trapFocus: !0,
        controls: !0,
        slideEndAnimation: !0,
        hideControlOnEnd: !1,
        mousewheel: !1,
        getCaptionFromTitleOrAlt: !0,
        appendSubHtmlTo: ".lg-sub-html",
        subHtmlSelectorRelative: !1,
        preload: 2,
        numberOfSlideItemsInDom: 10,
        selector: "",
        selectWithin: "",
        nextHtml: "",
        prevHtml: "",
        index: 0,
        iframeWidth: "100%",
        iframeHeight: "100%",
        iframeMaxWidth: "100%",
        iframeMaxHeight: "100%",
        download: !0,
        counter: !0,
        appendCounterTo: ".lg-toolbar",
        swipeThreshold: 50,
        enableSwipe: !0,
        enableDrag: !0,
        dynamic: !1,
        dynamicEl: [],
        extraProps: [],
        exThumbImage: "",
        isMobile: void 0,
        mobileSettings: { controls: !1, showCloseIcon: !1, download: !1 },
        plugins: [],
        strings: {
          closeGallery: "Close gallery",
          toggleMaximize: "Toggle maximize",
          previousSlide: "Previous slide",
          nextSlide: "Next slide",
          download: "Download",
          playVideo: "Play video",
        },
      };
    var M = (function () {
      function t(t) {
        return (
          (this.cssVenderPrefixes = [
            "TransitionDuration",
            "TransitionTimingFunction",
            "Transform",
            "Transition",
          ]),
          (this.selector = this._getSelector(t)),
          (this.firstElement = this._getFirstEl()),
          this
        );
      }
      return (
        (t.generateUUID = function () {
          return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
            /[xy]/g,
            function (t) {
              var e = (16 * Math.random()) | 0;
              return ("x" == t ? e : (3 & e) | 8).toString(16);
            }
          );
        }),
        (t.prototype._getSelector = function (t, e) {
          return (
            void 0 === e && (e = document),
            "string" != typeof t
              ? t
              : ((e = e || document),
                "#" === t.substring(0, 1)
                  ? e.querySelector(t)
                  : e.querySelectorAll(t))
          );
        }),
        (t.prototype._each = function (t) {
          return this.selector
            ? (void 0 !== this.selector.length
                ? [].forEach.call(this.selector, t)
                : t(this.selector, 0),
              this)
            : this;
        }),
        (t.prototype._setCssVendorPrefix = function (t, e, i) {
          var s = e.replace(/-([a-z])/gi, function (t, e) {
            return e.toUpperCase();
          });
          -1 !== this.cssVenderPrefixes.indexOf(s)
            ? ((t.style[s.charAt(0).toLowerCase() + s.slice(1)] = i),
              (t.style["webkit" + s] = i),
              (t.style["moz" + s] = i),
              (t.style["ms" + s] = i),
              (t.style["o" + s] = i))
            : (t.style[s] = i);
        }),
        (t.prototype._getFirstEl = function () {
          return this.selector && void 0 !== this.selector.length
            ? this.selector[0]
            : this.selector;
        }),
        (t.prototype.isEventMatched = function (t, e) {
          var i = e.split(".");
          return t
            .split(".")
            .filter(function (t) {
              return t;
            })
            .every(function (t) {
              return -1 !== i.indexOf(t);
            });
        }),
        (t.prototype.attr = function (t, e) {
          return void 0 === e
            ? this.firstElement
              ? this.firstElement.getAttribute(t)
              : ""
            : (this._each(function (i) {
                i.setAttribute(t, e);
              }),
              this);
        }),
        (t.prototype.find = function (t) {
          return D(this._getSelector(t, this.selector));
        }),
        (t.prototype.first = function () {
          return this.selector && void 0 !== this.selector.length
            ? D(this.selector[0])
            : D(this.selector);
        }),
        (t.prototype.eq = function (t) {
          return D(this.selector[t]);
        }),
        (t.prototype.parent = function () {
          return D(this.selector.parentElement);
        }),
        (t.prototype.get = function () {
          return this._getFirstEl();
        }),
        (t.prototype.removeAttr = function (t) {
          var e = t.split(" ");
          return (
            this._each(function (t) {
              e.forEach(function (e) {
                return t.removeAttribute(e);
              });
            }),
            this
          );
        }),
        (t.prototype.wrap = function (t) {
          if (!this.firstElement) return this;
          var e = document.createElement("div");
          return (
            (e.className = t),
            this.firstElement.parentNode.insertBefore(e, this.firstElement),
            this.firstElement.parentNode.removeChild(this.firstElement),
            e.appendChild(this.firstElement),
            this
          );
        }),
        (t.prototype.addClass = function (t) {
          return (
            void 0 === t && (t = ""),
            this._each(function (e) {
              t.split(" ").forEach(function (t) {
                t && e.classList.add(t);
              });
            }),
            this
          );
        }),
        (t.prototype.removeClass = function (t) {
          return (
            this._each(function (e) {
              t.split(" ").forEach(function (t) {
                t && e.classList.remove(t);
              });
            }),
            this
          );
        }),
        (t.prototype.hasClass = function (t) {
          return !!this.firstElement && this.firstElement.classList.contains(t);
        }),
        (t.prototype.hasAttribute = function (t) {
          return !!this.firstElement && this.firstElement.hasAttribute(t);
        }),
        (t.prototype.toggleClass = function (t) {
          return this.firstElement
            ? (this.hasClass(t) ? this.removeClass(t) : this.addClass(t), this)
            : this;
        }),
        (t.prototype.css = function (t, e) {
          var i = this;
          return (
            this._each(function (s) {
              i._setCssVendorPrefix(s, t, e);
            }),
            this
          );
        }),
        (t.prototype.on = function (e, i) {
          var s = this;
          return this.selector
            ? (e.split(" ").forEach(function (e) {
                Array.isArray(t.eventListeners[e]) ||
                  (t.eventListeners[e] = []),
                  t.eventListeners[e].push(i),
                  s.selector.addEventListener(e.split(".")[0], i);
              }),
              this)
            : this;
        }),
        (t.prototype.once = function (t, e) {
          var i = this;
          return (
            this.on(t, function () {
              i.off(t), e(t);
            }),
            this
          );
        }),
        (t.prototype.off = function (e) {
          var i = this;
          return this.selector
            ? (Object.keys(t.eventListeners).forEach(function (s) {
                i.isEventMatched(e, s) &&
                  (t.eventListeners[s].forEach(function (t) {
                    i.selector.removeEventListener(s.split(".")[0], t);
                  }),
                  (t.eventListeners[s] = []));
              }),
              this)
            : this;
        }),
        (t.prototype.trigger = function (t, e) {
          if (!this.firstElement) return this;
          var i = new CustomEvent(t.split(".")[0], { detail: e || null });
          return this.firstElement.dispatchEvent(i), this;
        }),
        (t.prototype.load = function (t) {
          var e = this;
          return (
            fetch(t)
              .then(function (t) {
                return t.text();
              })
              .then(function (t) {
                e.selector.innerHTML = t;
              }),
            this
          );
        }),
        (t.prototype.html = function (t) {
          return void 0 === t
            ? this.firstElement
              ? this.firstElement.innerHTML
              : ""
            : (this._each(function (e) {
                e.innerHTML = t;
              }),
              this);
        }),
        (t.prototype.append = function (t) {
          return (
            this._each(function (e) {
              "string" == typeof t
                ? e.insertAdjacentHTML("beforeend", t)
                : e.appendChild(t);
            }),
            this
          );
        }),
        (t.prototype.prepend = function (t) {
          return (
            this._each(function (e) {
              e.insertAdjacentHTML("afterbegin", t);
            }),
            this
          );
        }),
        (t.prototype.remove = function () {
          return (
            this._each(function (t) {
              t.parentNode.removeChild(t);
            }),
            this
          );
        }),
        (t.prototype.empty = function () {
          return (
            this._each(function (t) {
              t.innerHTML = "";
            }),
            this
          );
        }),
        (t.prototype.scrollTop = function (t) {
          return void 0 !== t
            ? ((document.body.scrollTop = t),
              (document.documentElement.scrollTop = t),
              this)
            : window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;
        }),
        (t.prototype.scrollLeft = function (t) {
          return void 0 !== t
            ? ((document.body.scrollLeft = t),
              (document.documentElement.scrollLeft = t),
              this)
            : window.pageXOffset ||
                document.documentElement.scrollLeft ||
                document.body.scrollLeft ||
                0;
        }),
        (t.prototype.offset = function () {
          if (!this.firstElement) return { left: 0, top: 0 };
          var t = this.firstElement.getBoundingClientRect(),
            e = D("body").style().marginLeft;
          return {
            left: t.left - parseFloat(e) + this.scrollLeft(),
            top: t.top + this.scrollTop(),
          };
        }),
        (t.prototype.style = function () {
          return this.firstElement
            ? this.firstElement.currentStyle ||
                window.getComputedStyle(this.firstElement)
            : {};
        }),
        (t.prototype.width = function () {
          var t = this.style();
          return (
            this.firstElement.clientWidth -
            parseFloat(t.paddingLeft) -
            parseFloat(t.paddingRight)
          );
        }),
        (t.prototype.height = function () {
          var t = this.style();
          return (
            this.firstElement.clientHeight -
            parseFloat(t.paddingTop) -
            parseFloat(t.paddingBottom)
          );
        }),
        (t.eventListeners = {}),
        t
      );
    })();
    function D(t) {
      return (
        (function () {
          if ("function" == typeof window.CustomEvent) return !1;
          window.CustomEvent = function (t, e) {
            e = e || { bubbles: !1, cancelable: !1, detail: null };
            var i = document.createEvent("CustomEvent");
            return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
          };
        })(),
        Element.prototype.matches ||
          (Element.prototype.matches =
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector),
        new M(t)
      );
    }
    var z = [
      "src",
      "sources",
      "subHtml",
      "subHtmlUrl",
      "html",
      "video",
      "poster",
      "slideName",
      "responsive",
      "srcset",
      "sizes",
      "iframe",
      "downloadUrl",
      "download",
      "width",
      "facebookShareUrl",
      "tweetText",
      "iframeTitle",
      "twitterShareUrl",
      "pinterestShareUrl",
      "pinterestText",
      "fbHtml",
      "disqusIdentifier",
      "disqusUrl",
    ];
    function _(t) {
      return "href" === t
        ? "src"
        : (t = (t =
            (t = t.replace("data-", "")).charAt(0).toLowerCase() +
            t.slice(1)).replace(/-([a-z])/g, function (t) {
            return t[1].toUpperCase();
          }));
    }
    var P = function (t, e, i, s) {
        void 0 === i && (i = 0);
        var o = D(t).attr("data-lg-size") || s;
        if (o) {
          var n = o.split(",");
          if (n[1])
            for (var r = window.innerWidth, l = 0; l < n.length; l++) {
              var a = n[l];
              if (parseInt(a.split("-")[2], 10) > r) {
                o = a;
                break;
              }
              l === n.length - 1 && (o = a);
            }
          var d = o.split("-"),
            c = parseInt(d[0], 10),
            u = parseInt(d[1], 10),
            g = e.width(),
            h = e.height() - i,
            m = Math.min(g, c),
            p = Math.min(h, u),
            f = Math.min(m / c, p / u);
          return { width: c * f, height: u * f };
        }
      },
      B = function (t, e, i, s, o) {
        if (o) {
          var n = D(t).find("img").first();
          if (n.get()) {
            var r = e.get().getBoundingClientRect(),
              l = r.width,
              a = e.height() - (i + s),
              d = n.width(),
              c = n.height(),
              u = n.style(),
              g =
                (l - d) / 2 -
                n.offset().left +
                (parseFloat(u.paddingLeft) || 0) +
                (parseFloat(u.borderLeft) || 0) +
                D(window).scrollLeft() +
                r.left,
              h =
                (a - c) / 2 -
                n.offset().top +
                (parseFloat(u.paddingTop) || 0) +
                (parseFloat(u.borderTop) || 0) +
                D(window).scrollTop() +
                i;
            return (
              "translate3d(" +
              (g *= -1) +
              "px, " +
              (h *= -1) +
              "px, 0) scale3d(" +
              d / o.width +
              ", " +
              c / o.height +
              ", 1)"
            );
          }
        }
      },
      G = function (t, e, i, s, o, n) {
        return (
          '<div class="lg-video-cont lg-has-iframe" style="width:' +
          t +
          "; max-width:" +
          i +
          "; height: " +
          e +
          "; max-height:" +
          s +
          '">\n                    <iframe class="lg-object" frameborder="0" ' +
          (n ? 'title="' + n + '"' : "") +
          ' src="' +
          o +
          '"  allowfullscreen="true"></iframe>\n                </div>'
        );
      },
      j = function (t, e, i, s, o, n) {
        var r =
            "<img " +
            i +
            " " +
            (s ? 'srcset="' + s + '"' : "") +
            "  " +
            (o ? 'sizes="' + o + '"' : "") +
            ' class="lg-object lg-image" data-index="' +
            t +
            '" src="' +
            e +
            '" />',
          l = "";
        n &&
          (l = ("string" == typeof n ? JSON.parse(n) : n).map(function (t) {
            var e = "";
            return (
              Object.keys(t).forEach(function (i) {
                e += " " + i + '="' + t[i] + '"';
              }),
              "<source " + e + "></source>"
            );
          }));
        return "" + l + r;
      },
      H = function (t) {
        for (var e = [], i = [], s = "", o = 0; o < t.length; o++) {
          var n = t[o].split(" ");
          "" === n[0] && n.splice(0, 1), i.push(n[0]), e.push(n[1]);
        }
        for (var r = window.innerWidth, l = 0; l < e.length; l++)
          if (parseInt(e[l], 10) > r) {
            s = i[l];
            break;
          }
        return s;
      },
      F = function (t) {
        return !!t && !!t.complete && 0 !== t.naturalWidth;
      },
      N = function (t, e, i, s, o) {
        return (
          '<div class="lg-video-cont ' +
          (o && o.youtube
            ? "lg-has-youtube"
            : o && o.vimeo
            ? "lg-has-vimeo"
            : "lg-has-html5") +
          '" style="' +
          i +
          '">\n                <div class="lg-video-play-button">\n                <svg\n                    viewBox="0 0 20 20"\n                    preserveAspectRatio="xMidYMid"\n                    focusable="false"\n                    aria-labelledby="' +
          s +
          '"\n                    role="img"\n                    class="lg-video-play-icon"\n                >\n                    <title>' +
          s +
          '</title>\n                    <polygon class="lg-video-play-icon-inner" points="1,0 20,10 1,20"></polygon>\n                </svg>\n                <svg class="lg-video-play-icon-bg" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle></svg>\n                <svg class="lg-video-play-icon-circle" viewBox="0 0 50 50" focusable="false">\n                    <circle cx="50%" cy="50%" r="20"></circle>\n                </svg>\n            </div>\n            ' +
          (e || "") +
          '\n            <img class="lg-object lg-video-poster" src="' +
          t +
          '" />\n        </div>'
        );
      },
      $ = function (t) {
        var e = t.querySelectorAll(
          'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'
        );
        return [].filter.call(e, function (t) {
          var e = window.getComputedStyle(t);
          return "none" !== e.display && "hidden" !== e.visibility;
        });
      },
      q = function (t, e, i, s) {
        var o = [],
          n = (function () {
            for (var t = 0, e = 0, i = arguments.length; e < i; e++)
              t += arguments[e].length;
            var s = Array(t),
              o = 0;
            for (e = 0; e < i; e++)
              for (var n = arguments[e], r = 0, l = n.length; r < l; r++, o++)
                s[o] = n[r];
            return s;
          })(z, e);
        return (
          [].forEach.call(t, function (t) {
            for (var e = {}, r = 0; r < t.attributes.length; r++) {
              var l = t.attributes[r];
              if (l.specified) {
                var a = _(l.name),
                  d = "";
                n.indexOf(a) > -1 && (d = a), d && (e[d] = l.value);
              }
            }
            var c = D(t),
              u = c.find("img").first().attr("alt"),
              g = c.attr("title"),
              h = s ? c.attr(s) : c.find("img").first().attr("src");
            (e.thumb = h),
              i && !e.subHtml && (e.subHtml = g || u || ""),
              (e.alt = u || g || ""),
              o.push(e);
          }),
          o
        );
      },
      W = function () {
        return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      },
      V = function (t, e, i) {
        if (!t)
          return e
            ? { html5: !0 }
            : void console.error(
                "lightGallery :- data-src is not provided on slide item " +
                  (i + 1) +
                  ". Please make sure the selector property is properly configured. More info - https://www.lightgalleryjs.com/demos/html-markup/"
              );
        var s = t.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)([\&|?][\S]*)*/i
          ),
          o = t.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)(.*)?/i
          ),
          n = t.match(
            /https?:\/\/(.+)?(wistia\.com|wi\.st)\/(medias|embed)\/([0-9a-z\-_]+)(.*)/
          );
        return s
          ? { youtube: s }
          : o
          ? { vimeo: o }
          : n
          ? { wistia: n }
          : void 0;
      },
      R = 0,
      Y = (function () {
        function t(t, e) {
          if (
            ((this.lgOpened = !1),
            (this.index = 0),
            (this.plugins = []),
            (this.lGalleryOn = !1),
            (this.lgBusy = !1),
            (this.currentItemsInDom = []),
            (this.prevScrollTop = 0),
            (this.bodyPaddingRight = 0),
            (this.isDummyImageRemoved = !1),
            (this.dragOrSwipeEnabled = !1),
            (this.mediaContainerPosition = { top: 0, bottom: 0 }),
            !t)
          )
            return this;
          if (
            (R++,
            (this.lgId = R),
            (this.el = t),
            (this.LGel = D(t)),
            this.generateSettings(e),
            this.buildModules(),
            this.settings.dynamic &&
              void 0 !== this.settings.dynamicEl &&
              !Array.isArray(this.settings.dynamicEl))
          )
            throw "When using dynamic mode, you must also define dynamicEl as an Array.";
          return (
            (this.galleryItems = this.getItems()),
            this.normalizeSettings(),
            this.init(),
            this.validateLicense(),
            this
          );
        }
        return (
          (t.prototype.generateSettings = function (t) {
            if (
              ((this.settings = c(c({}, A), t)),
              this.settings.isMobile &&
              "function" == typeof this.settings.isMobile
                ? this.settings.isMobile()
                : W())
            ) {
              var e = c(
                c({}, this.settings.mobileSettings),
                this.settings.mobileSettings
              );
              this.settings = c(c({}, this.settings), e);
            }
          }),
          (t.prototype.normalizeSettings = function () {
            this.settings.slideEndAnimation &&
              (this.settings.hideControlOnEnd = !1),
              this.settings.closable || (this.settings.swipeToClose = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              this.settings.dynamic && (this.zoomFromOrigin = !1),
              this.settings.container ||
                (this.settings.container = document.body),
              (this.settings.preload = Math.min(
                this.settings.preload,
                this.galleryItems.length
              ));
          }),
          (t.prototype.init = function () {
            var t = this;
            this.addSlideVideoInfo(this.galleryItems),
              this.buildStructure(),
              this.LGel.trigger(g, { instance: this }),
              this.settings.keyPress && this.keyPress(),
              setTimeout(function () {
                t.enableDrag(), t.enableSwipe(), t.triggerPosterClick();
              }, 50),
              this.arrow(),
              this.settings.mousewheel && this.mousewheel(),
              this.settings.dynamic || this.openGalleryOnItemClick();
          }),
          (t.prototype.openGalleryOnItemClick = function () {
            for (
              var t = this,
                e = function (e) {
                  var s = i.items[e],
                    o = D(s),
                    n = M.generateUUID();
                  o.attr("data-lg-id", n).on(
                    "click.lgcustom-item-" + n,
                    function (i) {
                      i.preventDefault();
                      var o = t.settings.index || e;
                      t.openGallery(o, s);
                    }
                  );
                },
                i = this,
                s = 0;
              s < this.items.length;
              s++
            )
              e(s);
          }),
          (t.prototype.buildModules = function () {
            var t = this;
            this.settings.plugins.forEach(function (e) {
              t.plugins.push(new e(t, D));
            });
          }),
          (t.prototype.validateLicense = function () {
            this.settings.licenseKey
              ? "0000-0000-000-0000" === this.settings.licenseKey &&
                console.warn(
                  "lightGallery: " +
                    this.settings.licenseKey +
                    " license key is not valid for production use"
                )
              : console.error("Please provide a valid license key");
          }),
          (t.prototype.getSlideItem = function (t) {
            return D(this.getSlideItemId(t));
          }),
          (t.prototype.getSlideItemId = function (t) {
            return "#lg-item-" + this.lgId + "-" + t;
          }),
          (t.prototype.getIdName = function (t) {
            return t + "-" + this.lgId;
          }),
          (t.prototype.getElementById = function (t) {
            return D("#" + this.getIdName(t));
          }),
          (t.prototype.manageSingleSlideClassName = function () {
            this.galleryItems.length < 2
              ? this.outer.addClass("lg-single-item")
              : this.outer.removeClass("lg-single-item");
          }),
          (t.prototype.buildStructure = function () {
            var t = this;
            if (!(this.$container && this.$container.get())) {
              var e = "",
                i = "";
              this.settings.controls &&
                (e =
                  '<button type="button" id="' +
                  this.getIdName("lg-prev") +
                  '" aria-label="' +
                  this.settings.strings.previousSlide +
                  '" class="lg-prev lg-icon"> ' +
                  this.settings.prevHtml +
                  ' </button>\n                <button type="button" id="' +
                  this.getIdName("lg-next") +
                  '" aria-label="' +
                  this.settings.strings.nextSlide +
                  '" class="lg-next lg-icon"> ' +
                  this.settings.nextHtml +
                  " </button>"),
                ".lg-item" !== this.settings.appendSubHtmlTo &&
                  (i =
                    '<div class="lg-sub-html" role="status" aria-live="polite"></div>');
              var s = "";
              this.settings.allowMediaOverlap && (s += "lg-media-overlap ");
              var o = this.settings.ariaLabelledby
                  ? 'aria-labelledby="' + this.settings.ariaLabelledby + '"'
                  : "",
                n = this.settings.ariaDescribedby
                  ? 'aria-describedby="' + this.settings.ariaDescribedby + '"'
                  : "",
                r =
                  "lg-container " +
                  this.settings.addClass +
                  " " +
                  (document.body !== this.settings.container
                    ? "lg-inline"
                    : ""),
                l =
                  this.settings.closable && this.settings.showCloseIcon
                    ? '<button type="button" aria-label="' +
                      this.settings.strings.closeGallery +
                      '" id="' +
                      this.getIdName("lg-close") +
                      '" class="lg-close lg-icon"></button>'
                    : "",
                a = this.settings.showMaximizeIcon
                  ? '<button type="button" aria-label="' +
                    this.settings.strings.toggleMaximize +
                    '" id="' +
                    this.getIdName("lg-maximize") +
                    '" class="lg-maximize lg-icon"></button>'
                  : "",
                d =
                  '\n        <div class="' +
                  r +
                  '" id="' +
                  this.getIdName("lg-container") +
                  '" tabindex="-1" aria-modal="true" ' +
                  o +
                  " " +
                  n +
                  ' role="dialog"\n        >\n            <div id="' +
                  this.getIdName("lg-backdrop") +
                  '" class="lg-backdrop"></div>\n\n            <div id="' +
                  this.getIdName("lg-outer") +
                  '" class="lg-outer lg-use-css3 lg-css3 lg-hide-items ' +
                  s +
                  ' ">\n\n              <div id="' +
                  this.getIdName("lg-content") +
                  '" class="lg-content">\n                <div id="' +
                  this.getIdName("lg-inner") +
                  '" class="lg-inner">\n                </div>\n                ' +
                  e +
                  '\n              </div>\n                <div id="' +
                  this.getIdName("lg-toolbar") +
                  '" class="lg-toolbar lg-group">\n                    ' +
                  a +
                  "\n                    " +
                  l +
                  "\n                    </div>\n                    " +
                  (".lg-outer" === this.settings.appendSubHtmlTo ? i : "") +
                  '\n                <div id="' +
                  this.getIdName("lg-components") +
                  '" class="lg-components">\n                    ' +
                  (".lg-sub-html" === this.settings.appendSubHtmlTo ? i : "") +
                  "\n                </div>\n            </div>\n        </div>\n        ";
              D(this.settings.container).append(d),
                document.body !== this.settings.container &&
                  D(this.settings.container).css("position", "relative"),
                (this.outer = this.getElementById("lg-outer")),
                (this.$lgComponents = this.getElementById("lg-components")),
                (this.$backdrop = this.getElementById("lg-backdrop")),
                (this.$container = this.getElementById("lg-container")),
                (this.$inner = this.getElementById("lg-inner")),
                (this.$content = this.getElementById("lg-content")),
                (this.$toolbar = this.getElementById("lg-toolbar")),
                this.$backdrop.css(
                  "transition-duration",
                  this.settings.backdropDuration + "ms"
                );
              var c = this.settings.mode + " ";
              this.manageSingleSlideClassName(),
                this.settings.enableDrag && (c += "lg-grab "),
                this.outer.addClass(c),
                this.$inner.css(
                  "transition-timing-function",
                  this.settings.easing
                ),
                this.$inner.css(
                  "transition-duration",
                  this.settings.speed + "ms"
                ),
                this.settings.download &&
                  this.$toolbar.append(
                    '<a id="' +
                      this.getIdName("lg-download") +
                      '" target="_blank" rel="noopener" aria-label="' +
                      this.settings.strings.download +
                      '" download class="lg-download lg-icon"></a>'
                  ),
                this.counter(),
                D(window).on(
                  "resize.lg.global" +
                    this.lgId +
                    " orientationchange.lg.global" +
                    this.lgId,
                  function () {
                    t.refreshOnResize();
                  }
                ),
                this.hideBars(),
                this.manageCloseGallery(),
                this.toggleMaximize(),
                this.initModules();
            }
          }),
          (t.prototype.refreshOnResize = function () {
            if (this.lgOpened) {
              var t = this.galleryItems[this.index].__slideVideoInfo;
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var e = this.mediaContainerPosition,
                i = e.top,
                s = e.bottom;
              if (
                ((this.currentImageSize = P(
                  this.items[this.index],
                  this.outer,
                  i + s,
                  t && this.settings.videoMaxSize
                )),
                t && this.resizeVideoSlide(this.index, this.currentImageSize),
                this.zoomFromOrigin && !this.isDummyImageRemoved)
              ) {
                var o = this.getDummyImgStyles(this.currentImageSize);
                this.outer
                  .find(".lg-current .lg-dummy-img")
                  .first()
                  .attr("style", o);
              }
              this.LGel.trigger(m);
            }
          }),
          (t.prototype.resizeVideoSlide = function (t, e) {
            var i = this.getVideoContStyle(e);
            this.getSlideItem(t).find(".lg-video-cont").attr("style", i);
          }),
          (t.prototype.updateSlides = function (t, e) {
            if (
              (this.index > t.length - 1 && (this.index = t.length - 1),
              1 === t.length && (this.index = 0),
              t.length)
            ) {
              var i = this.galleryItems[e].src;
              (this.galleryItems = t),
                this.updateControls(),
                this.$inner.empty(),
                (this.currentItemsInDom = []);
              var s = 0;
              this.galleryItems.some(function (t, e) {
                return t.src === i && ((s = e), !0);
              }),
                (this.currentItemsInDom = this.organizeSlideItems(s, -1)),
                this.loadContent(s, !0),
                this.getSlideItem(s).addClass("lg-current"),
                (this.index = s),
                this.updateCurrentCounter(s),
                this.LGel.trigger(p);
            } else this.closeGallery();
          }),
          (t.prototype.getItems = function () {
            if (((this.items = []), this.settings.dynamic))
              return this.settings.dynamicEl || [];
            if ("this" === this.settings.selector) this.items.push(this.el);
            else if (this.settings.selector)
              if ("string" == typeof this.settings.selector)
                if (this.settings.selectWithin) {
                  var t = D(this.settings.selectWithin);
                  this.items = t.find(this.settings.selector).get();
                } else
                  this.items = this.el.querySelectorAll(this.settings.selector);
              else this.items = this.settings.selector;
            else this.items = this.el.children;
            return q(
              this.items,
              this.settings.extraProps,
              this.settings.getCaptionFromTitleOrAlt,
              this.settings.exThumbImage
            );
          }),
          (t.prototype.shouldHideScrollbar = function () {
            return (
              this.settings.hideScrollbar &&
              document.body === this.settings.container
            );
          }),
          (t.prototype.hideScrollbar = function () {
            if (this.shouldHideScrollbar()) {
              this.bodyPaddingRight = parseFloat(
                D("body").style().paddingRight
              );
              var t = document.documentElement.getBoundingClientRect(),
                e = window.innerWidth - t.width;
              D(document.body).css(
                "padding-right",
                e + this.bodyPaddingRight + "px"
              ),
                D(document.body).addClass("lg-overlay-open");
            }
          }),
          (t.prototype.resetScrollBar = function () {
            this.shouldHideScrollbar() &&
              (D(document.body).css(
                "padding-right",
                this.bodyPaddingRight + "px"
              ),
              D(document.body).removeClass("lg-overlay-open"));
          }),
          (t.prototype.openGallery = function (t, e) {
            var i = this;
            if ((void 0 === t && (t = this.settings.index), !this.lgOpened)) {
              (this.lgOpened = !0),
                this.outer.removeClass("lg-hide-items"),
                this.hideScrollbar(),
                this.$container.addClass("lg-show");
              var s = this.getItemsToBeInsertedToDom(t, t);
              this.currentItemsInDom = s;
              var o = "";
              s.forEach(function (t) {
                o = o + '<div id="' + t + '" class="lg-item"></div>';
              }),
                this.$inner.append(o),
                this.addHtml(t);
              var n = "";
              this.mediaContainerPosition = this.getMediaContainerPosition();
              var r = this.mediaContainerPosition,
                l = r.top,
                a = r.bottom;
              this.settings.allowMediaOverlap ||
                this.setMediaContainerPosition(l, a);
              var d = this.galleryItems[t].__slideVideoInfo;
              this.zoomFromOrigin &&
                e &&
                ((this.currentImageSize = P(
                  e,
                  this.outer,
                  l + a,
                  d && this.settings.videoMaxSize
                )),
                (n = B(e, this.outer, l, a, this.currentImageSize))),
                (this.zoomFromOrigin && n) ||
                  (this.outer.addClass(this.settings.startClass),
                  this.getSlideItem(t).removeClass("lg-complete"));
              var c = this.settings.zoomFromOrigin
                ? 100
                : this.settings.backdropDuration;
              setTimeout(function () {
                i.outer.addClass("lg-components-open");
              }, c),
                (this.index = t),
                this.LGel.trigger(v),
                this.getSlideItem(t).addClass("lg-current"),
                (this.lGalleryOn = !1),
                (this.prevScrollTop = D(window).scrollTop()),
                setTimeout(function () {
                  if (i.zoomFromOrigin && n) {
                    var e = i.getSlideItem(t);
                    e.css("transform", n),
                      setTimeout(function () {
                        e
                          .addClass("lg-start-progress lg-start-end-progress")
                          .css(
                            "transition-duration",
                            i.settings.startAnimationDuration + "ms"
                          ),
                          i.outer.addClass("lg-zoom-from-image");
                      }),
                      setTimeout(function () {
                        e.css("transform", "translate3d(0, 0, 0)");
                      }, 100);
                  }
                  setTimeout(function () {
                    i.$backdrop.addClass("in"),
                      i.$container.addClass("lg-show-in");
                  }, 10),
                    setTimeout(function () {
                      i.settings.trapFocus &&
                        document.body === i.settings.container &&
                        i.trapFocus();
                    }, i.settings.backdropDuration + 50),
                    (i.zoomFromOrigin && n) ||
                      setTimeout(function () {
                        i.outer.addClass("lg-visible");
                      }, i.settings.backdropDuration),
                    i.slide(t, !1, !1, !1),
                    i.LGel.trigger(y);
                }),
                document.body === this.settings.container &&
                  D("html").addClass("lg-on");
            }
          }),
          (t.prototype.getMediaContainerPosition = function () {
            if (this.settings.allowMediaOverlap) return { top: 0, bottom: 0 };
            var t = this.$toolbar.get().clientHeight || 0,
              e = this.outer.find(".lg-components .lg-sub-html").get(),
              i =
                this.settings.defaultCaptionHeight ||
                (e && e.clientHeight) ||
                0,
              s = this.outer.find(".lg-thumb-outer").get();
            return { top: t, bottom: (s ? s.clientHeight : 0) + i };
          }),
          (t.prototype.setMediaContainerPosition = function (t, e) {
            void 0 === t && (t = 0),
              void 0 === e && (e = 0),
              this.$content.css("top", t + "px").css("bottom", e + "px");
          }),
          (t.prototype.hideBars = function () {
            var t = this;
            setTimeout(function () {
              t.outer.removeClass("lg-hide-items"),
                t.settings.hideBarsDelay > 0 &&
                  (t.outer.on(
                    "mousemove.lg click.lg touchstart.lg",
                    function () {
                      t.outer.removeClass("lg-hide-items"),
                        clearTimeout(t.hideBarTimeout),
                        (t.hideBarTimeout = setTimeout(function () {
                          t.outer.addClass("lg-hide-items");
                        }, t.settings.hideBarsDelay));
                    }
                  ),
                  t.outer.trigger("mousemove.lg"));
            }, this.settings.showBarsAfter);
          }),
          (t.prototype.initPictureFill = function (t) {
            if (this.settings.supportLegacyBrowser)
              try {
                picturefill({ elements: [t.get()] });
              } catch (t) {
                console.warn(
                  "lightGallery :- If you want srcset or picture tag to be supported for older browser please include picturefil javascript library in your document."
                );
              }
          }),
          (t.prototype.counter = function () {
            if (this.settings.counter) {
              var t =
                '<div class="lg-counter" role="status" aria-live="polite">\n                <span id="' +
                this.getIdName("lg-counter-current") +
                '" class="lg-counter-current">' +
                (this.index + 1) +
                ' </span> /\n                <span id="' +
                this.getIdName("lg-counter-all") +
                '" class="lg-counter-all">' +
                this.galleryItems.length +
                " </span></div>";
              this.outer.find(this.settings.appendCounterTo).append(t);
            }
          }),
          (t.prototype.addHtml = function (t) {
            var e, i;
            if (
              (this.galleryItems[t].subHtmlUrl
                ? (i = this.galleryItems[t].subHtmlUrl)
                : (e = this.galleryItems[t].subHtml),
              !i)
            )
              if (e) {
                var s = e.substring(0, 1);
                ("." !== s && "#" !== s) ||
                  (e =
                    this.settings.subHtmlSelectorRelative &&
                    !this.settings.dynamic
                      ? D(this.items).eq(t).find(e).first().html()
                      : D(e).first().html());
              } else e = "";
            if (".lg-item" !== this.settings.appendSubHtmlTo)
              i
                ? this.outer.find(".lg-sub-html").load(i)
                : this.outer.find(".lg-sub-html").html(e);
            else {
              var o = D(this.getSlideItemId(t));
              i
                ? o.load(i)
                : o.append('<div class="lg-sub-html">' + e + "</div>");
            }
            null != e &&
              ("" === e
                ? this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .addClass("lg-empty-html")
                : this.outer
                    .find(this.settings.appendSubHtmlTo)
                    .removeClass("lg-empty-html")),
              this.LGel.trigger(f, { index: t });
          }),
          (t.prototype.preload = function (t) {
            for (
              var e = 1;
              e <= this.settings.preload &&
              !(e >= this.galleryItems.length - t);
              e++
            )
              this.loadContent(t + e, !1);
            for (var i = 1; i <= this.settings.preload && !(t - i < 0); i++)
              this.loadContent(t - i, !1);
          }),
          (t.prototype.getDummyImgStyles = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px;\n                margin-left: -" +
                  t.width / 2 +
                  "px;\n                margin-top: -" +
                  t.height / 2 +
                  "px;\n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (t.prototype.getVideoContStyle = function (t) {
            return t
              ? "width:" +
                  t.width +
                  "px;\n                height:" +
                  t.height +
                  "px"
              : "";
          }),
          (t.prototype.getDummyImageContent = function (t, e, i) {
            var s;
            if ((this.settings.dynamic || (s = D(this.items).eq(e)), s)) {
              var o = void 0;
              if (
                !(o = this.settings.exThumbImage
                  ? s.attr(this.settings.exThumbImage)
                  : s.find("img").first().attr("src"))
              )
                return "";
              var n =
                "<img " +
                i +
                ' style="' +
                this.getDummyImgStyles(this.currentImageSize) +
                '" class="lg-dummy-img" src="' +
                o +
                '" />';
              return (
                t.addClass("lg-first-slide"),
                this.outer.addClass("lg-first-slide-loading"),
                n
              );
            }
            return "";
          }),
          (t.prototype.setImgMarkup = function (t, e, i) {
            var s = this.galleryItems[i],
              o = s.alt,
              n = s.srcset,
              r = s.sizes,
              l = s.sources,
              a = o ? 'alt="' + o + '"' : "",
              d =
                '<picture class="lg-img-wrap"> ' +
                (this.isFirstSlideWithZoomAnimation()
                  ? this.getDummyImageContent(e, i, a)
                  : j(i, t, a, n, r, l)) +
                "</picture>";
            e.prepend(d);
          }),
          (t.prototype.onSlideObjectLoad = function (t, e, i, s) {
            var o = t.find(".lg-object").first();
            F(o.get()) || e
              ? i()
              : (o.on("load.lg error.lg", function () {
                  i && i();
                }),
                o.on("error.lg", function () {
                  s && s();
                }));
          }),
          (t.prototype.onLgObjectLoad = function (t, e, i, s, o, n) {
            var r = this;
            this.onSlideObjectLoad(
              t,
              n,
              function () {
                r.triggerSlideItemLoad(t, e, i, s, o);
              },
              function () {
                t.addClass("lg-complete lg-complete_"),
                  t.html(
                    '<span class="lg-error-msg">Oops... Failed to load content...</span>'
                  );
              }
            );
          }),
          (t.prototype.triggerSlideItemLoad = function (t, e, i, s, o) {
            var n = this,
              r = this.galleryItems[e],
              l = o && "video" === this.getSlideType(r) && !r.poster ? s : 0;
            setTimeout(function () {
              t.addClass("lg-complete lg-complete_"),
                n.LGel.trigger(b, { index: e, delay: i || 0, isFirstSlide: o });
            }, l);
          }),
          (t.prototype.isFirstSlideWithZoomAnimation = function () {
            return !(
              this.lGalleryOn ||
              !this.zoomFromOrigin ||
              !this.currentImageSize
            );
          }),
          (t.prototype.addSlideVideoInfo = function (t) {
            var e = this;
            t.forEach(function (t, i) {
              (t.__slideVideoInfo = V(t.src, !!t.video, i)),
                t.__slideVideoInfo &&
                  e.settings.loadYouTubePoster &&
                  !t.poster &&
                  t.__slideVideoInfo.youtube &&
                  (t.poster =
                    "//img.youtube.com/vi/" +
                    t.__slideVideoInfo.youtube[1] +
                    "/maxresdefault.jpg");
            });
          }),
          (t.prototype.loadContent = function (t, e) {
            var i = this,
              s = this.galleryItems[t],
              o = D(this.getSlideItemId(t)),
              n = s.poster,
              r = s.srcset,
              l = s.sizes,
              a = s.sources,
              d = s.src,
              c = s.video,
              g = c && "string" == typeof c ? JSON.parse(c) : c;
            if (s.responsive) {
              var m = s.responsive.split(",");
              d = H(m) || d;
            }
            var p = s.__slideVideoInfo,
              f = "",
              v = !!s.iframe,
              y = !this.lGalleryOn,
              b = 0;
            if (
              (y &&
                (b =
                  this.zoomFromOrigin && this.currentImageSize
                    ? this.settings.startAnimationDuration + 10
                    : this.settings.backdropDuration + 10),
              !o.hasClass("lg-loaded"))
            ) {
              if (p) {
                var w = this.mediaContainerPosition,
                  x = w.top,
                  C = w.bottom,
                  S = P(
                    this.items[t],
                    this.outer,
                    x + C,
                    p && this.settings.videoMaxSize
                  );
                f = this.getVideoContStyle(S);
              }
              if (v) {
                var I = G(
                  this.settings.iframeWidth,
                  this.settings.iframeHeight,
                  this.settings.iframeMaxWidth,
                  this.settings.iframeMaxHeight,
                  d,
                  s.iframeTitle
                );
                o.prepend(I);
              } else if (n) {
                var E = "";
                y &&
                  this.zoomFromOrigin &&
                  this.currentImageSize &&
                  (E = this.getDummyImageContent(o, t, ""));
                I = N(n, E || "", f, this.settings.strings.playVideo, p);
                o.prepend(I);
              } else if (p) {
                I = '<div class="lg-video-cont " style="' + f + '"></div>';
                o.prepend(I);
              } else if ((this.setImgMarkup(d, o, t), r || a)) {
                var T = o.find(".lg-object");
                this.initPictureFill(T);
              }
              (n || p) &&
                this.LGel.trigger(h, {
                  index: t,
                  src: d,
                  html5Video: g,
                  hasPoster: !!n,
                }),
                this.LGel.trigger(u, { index: t }),
                this.lGalleryOn &&
                  ".lg-item" === this.settings.appendSubHtmlTo &&
                  this.addHtml(t);
            }
            var k = 0;
            b && !D(document.body).hasClass("lg-from-hash") && (k = b),
              this.isFirstSlideWithZoomAnimation() &&
                (setTimeout(function () {
                  o.removeClass(
                    "lg-start-end-progress lg-start-progress"
                  ).removeAttr("style");
                }, this.settings.startAnimationDuration + 100),
                o.hasClass("lg-loaded") ||
                  setTimeout(function () {
                    if ("image" === i.getSlideType(s)) {
                      var e = s.alt,
                        c = e ? 'alt="' + e + '"' : "";
                      if (
                        (o
                          .find(".lg-img-wrap")
                          .append(j(t, d, c, r, l, s.sources)),
                        r || a)
                      ) {
                        var u = o.find(".lg-object");
                        i.initPictureFill(u);
                      }
                    }
                    ("image" === i.getSlideType(s) ||
                      ("video" === i.getSlideType(s) && n)) &&
                      (i.onLgObjectLoad(o, t, b, k, !0, !1),
                      i.onSlideObjectLoad(
                        o,
                        !(!p || !p.html5 || n),
                        function () {
                          i.loadContentOnFirstSlideLoad(t, o, k);
                        },
                        function () {
                          i.loadContentOnFirstSlideLoad(t, o, k);
                        }
                      ));
                  }, this.settings.startAnimationDuration + 100)),
              o.addClass("lg-loaded"),
              (this.isFirstSlideWithZoomAnimation() &&
                ("video" !== this.getSlideType(s) || n)) ||
                this.onLgObjectLoad(o, t, b, k, y, !(!p || !p.html5 || n)),
              (this.zoomFromOrigin && this.currentImageSize) ||
                !o.hasClass("lg-complete_") ||
                this.lGalleryOn ||
                setTimeout(function () {
                  o.addClass("lg-complete");
                }, this.settings.backdropDuration),
              (this.lGalleryOn = !0),
              !0 === e &&
                (o.hasClass("lg-complete_")
                  ? this.preload(t)
                  : o
                      .find(".lg-object")
                      .first()
                      .on("load.lg error.lg", function () {
                        i.preload(t);
                      }));
          }),
          (t.prototype.loadContentOnFirstSlideLoad = function (t, e, i) {
            var s = this;
            setTimeout(function () {
              e.find(".lg-dummy-img").remove(),
                e.removeClass("lg-first-slide"),
                s.outer.removeClass("lg-first-slide-loading"),
                (s.isDummyImageRemoved = !0),
                s.preload(t);
            }, i + 300);
          }),
          (t.prototype.getItemsToBeInsertedToDom = function (t, e, i) {
            var s = this;
            void 0 === i && (i = 0);
            var o = [],
              n = Math.max(i, 3);
            n = Math.min(n, this.galleryItems.length);
            var r = "lg-item-" + this.lgId + "-" + e;
            if (this.galleryItems.length <= 3)
              return (
                this.galleryItems.forEach(function (t, e) {
                  o.push("lg-item-" + s.lgId + "-" + e);
                }),
                o
              );
            if (t < (this.galleryItems.length - 1) / 2) {
              for (var l = t; l > t - n / 2 && l >= 0; l--)
                o.push("lg-item-" + this.lgId + "-" + l);
              var a = o.length;
              for (l = 0; l < n - a; l++)
                o.push("lg-item-" + this.lgId + "-" + (t + l + 1));
            } else {
              for (
                l = t;
                l <= this.galleryItems.length - 1 && l < t + n / 2;
                l++
              )
                o.push("lg-item-" + this.lgId + "-" + l);
              for (a = o.length, l = 0; l < n - a; l++)
                o.push("lg-item-" + this.lgId + "-" + (t - l - 1));
            }
            return (
              this.settings.loop &&
                (t === this.galleryItems.length - 1
                  ? o.push("lg-item-" + this.lgId + "-0")
                  : 0 === t &&
                    o.push(
                      "lg-item-" +
                        this.lgId +
                        "-" +
                        (this.galleryItems.length - 1)
                    )),
              -1 === o.indexOf(r) && o.push("lg-item-" + this.lgId + "-" + e),
              o
            );
          }),
          (t.prototype.organizeSlideItems = function (t, e) {
            var i = this,
              s = this.getItemsToBeInsertedToDom(
                t,
                e,
                this.settings.numberOfSlideItemsInDom
              );
            return (
              s.forEach(function (t) {
                -1 === i.currentItemsInDom.indexOf(t) &&
                  i.$inner.append('<div id="' + t + '" class="lg-item"></div>');
              }),
              this.currentItemsInDom.forEach(function (t) {
                -1 === s.indexOf(t) && D("#" + t).remove();
              }),
              s
            );
          }),
          (t.prototype.getPreviousSlideIndex = function () {
            var t = 0;
            try {
              var e = this.outer.find(".lg-current").first().attr("id");
              t = parseInt(e.split("-")[3]) || 0;
            } catch (e) {
              t = 0;
            }
            return t;
          }),
          (t.prototype.setDownloadValue = function (t) {
            if (this.settings.download) {
              var e = this.galleryItems[t];
              if (!1 === e.downloadUrl || "false" === e.downloadUrl)
                this.outer.addClass("lg-hide-download");
              else {
                var i = this.getElementById("lg-download");
                this.outer.removeClass("lg-hide-download"),
                  i.attr("href", e.downloadUrl || e.src),
                  e.download && i.attr("download", e.download);
              }
            }
          }),
          (t.prototype.makeSlideAnimation = function (t, e, i) {
            var s = this;
            this.lGalleryOn && i.addClass("lg-slide-progress"),
              setTimeout(
                function () {
                  s.outer.addClass("lg-no-trans"),
                    s.outer
                      .find(".lg-item")
                      .removeClass("lg-prev-slide lg-next-slide"),
                    "prev" === t
                      ? (e.addClass("lg-prev-slide"),
                        i.addClass("lg-next-slide"))
                      : (e.addClass("lg-next-slide"),
                        i.addClass("lg-prev-slide")),
                    setTimeout(function () {
                      s.outer.find(".lg-item").removeClass("lg-current"),
                        e.addClass("lg-current"),
                        s.outer.removeClass("lg-no-trans");
                    }, 50);
                },
                this.lGalleryOn ? this.settings.slideDelay : 0
              );
          }),
          (t.prototype.slide = function (t, e, i, s) {
            var o = this,
              n = this.getPreviousSlideIndex();
            if (
              ((this.currentItemsInDom = this.organizeSlideItems(t, n)),
              !this.lGalleryOn || n !== t)
            ) {
              var r = this.galleryItems.length;
              if (!this.lgBusy) {
                this.settings.counter && this.updateCurrentCounter(t);
                var l = this.getSlideItem(t),
                  a = this.getSlideItem(n),
                  d = this.galleryItems[t],
                  c = d.__slideVideoInfo;
                if (
                  (this.outer.attr("data-lg-slide-type", this.getSlideType(d)),
                  this.setDownloadValue(t),
                  c)
                ) {
                  var u = this.mediaContainerPosition,
                    g = u.top,
                    h = u.bottom,
                    m = P(
                      this.items[t],
                      this.outer,
                      g + h,
                      c && this.settings.videoMaxSize
                    );
                  this.resizeVideoSlide(t, m);
                }
                if (
                  (this.LGel.trigger(w, {
                    prevIndex: n,
                    index: t,
                    fromTouch: !!e,
                    fromThumb: !!i,
                  }),
                  (this.lgBusy = !0),
                  clearTimeout(this.hideBarTimeout),
                  this.arrowDisable(t),
                  s || (t < n ? (s = "prev") : t > n && (s = "next")),
                  e)
                ) {
                  this.outer
                    .find(".lg-item")
                    .removeClass("lg-prev-slide lg-current lg-next-slide");
                  var p = void 0,
                    f = void 0;
                  r > 2
                    ? ((p = t - 1),
                      (f = t + 1),
                      ((0 === t && n === r - 1) || (t === r - 1 && 0 === n)) &&
                        ((f = 0), (p = r - 1)))
                    : ((p = 0), (f = 1)),
                    "prev" === s
                      ? this.getSlideItem(f).addClass("lg-next-slide")
                      : this.getSlideItem(p).addClass("lg-prev-slide"),
                    l.addClass("lg-current");
                } else this.makeSlideAnimation(s, l, a);
                this.lGalleryOn
                  ? setTimeout(function () {
                      o.loadContent(t, !0),
                        ".lg-item" !== o.settings.appendSubHtmlTo &&
                          o.addHtml(t);
                    }, this.settings.speed +
                      50 +
                      (e ? 0 : this.settings.slideDelay))
                  : this.loadContent(t, !0),
                  setTimeout(function () {
                    (o.lgBusy = !1),
                      a.removeClass("lg-slide-progress"),
                      o.LGel.trigger(x, {
                        prevIndex: n,
                        index: t,
                        fromTouch: e,
                        fromThumb: i,
                      });
                  }, (this.lGalleryOn ? this.settings.speed + 100 : 100) +
                    (e ? 0 : this.settings.slideDelay));
              }
              this.index = t;
            }
          }),
          (t.prototype.updateCurrentCounter = function (t) {
            this.getElementById("lg-counter-current").html(t + 1 + "");
          }),
          (t.prototype.updateCounterTotal = function () {
            this.getElementById("lg-counter-all").html(
              this.galleryItems.length + ""
            );
          }),
          (t.prototype.getSlideType = function (t) {
            return t.__slideVideoInfo ? "video" : t.iframe ? "iframe" : "image";
          }),
          (t.prototype.touchMove = function (t, e, i) {
            var s = e.pageX - t.pageX,
              o = e.pageY - t.pageY,
              n = !1;
            if (
              (this.swipeDirection
                ? (n = !0)
                : Math.abs(s) > 15
                ? ((this.swipeDirection = "horizontal"), (n = !0))
                : Math.abs(o) > 15 &&
                  ((this.swipeDirection = "vertical"), (n = !0)),
              n)
            ) {
              var r = this.getSlideItem(this.index);
              if ("horizontal" === this.swipeDirection) {
                null == i || i.preventDefault(),
                  this.outer.addClass("lg-dragging"),
                  this.setTranslate(r, s, 0);
                var l = r.get().offsetWidth,
                  a = (15 * l) / 100 - Math.abs((10 * s) / 100);
                this.setTranslate(
                  this.outer.find(".lg-prev-slide").first(),
                  -l + s - a,
                  0
                ),
                  this.setTranslate(
                    this.outer.find(".lg-next-slide").first(),
                    l + s + a,
                    0
                  );
              } else if (
                "vertical" === this.swipeDirection &&
                this.settings.swipeToClose
              ) {
                null == i || i.preventDefault(),
                  this.$container.addClass("lg-dragging-vertical");
                var d = 1 - Math.abs(o) / window.innerHeight;
                this.$backdrop.css("opacity", d);
                var c = 1 - Math.abs(o) / (2 * window.innerWidth);
                this.setTranslate(r, 0, o, c, c),
                  Math.abs(o) > 100 &&
                    this.outer
                      .addClass("lg-hide-items")
                      .removeClass("lg-components-open");
              }
            }
          }),
          (t.prototype.touchEnd = function (t, e, i) {
            var s,
              o = this;
            "lg-slide" !== this.settings.mode &&
              this.outer.addClass("lg-slide"),
              setTimeout(function () {
                o.$container.removeClass("lg-dragging-vertical"),
                  o.outer
                    .removeClass("lg-dragging lg-hide-items")
                    .addClass("lg-components-open");
                var n = !0;
                if ("horizontal" === o.swipeDirection) {
                  s = t.pageX - e.pageX;
                  var r = Math.abs(t.pageX - e.pageX);
                  s < 0 && r > o.settings.swipeThreshold
                    ? (o.goToNextSlide(!0), (n = !1))
                    : s > 0 &&
                      r > o.settings.swipeThreshold &&
                      (o.goToPrevSlide(!0), (n = !1));
                } else if ("vertical" === o.swipeDirection) {
                  if (
                    ((s = Math.abs(t.pageY - e.pageY)),
                    o.settings.closable && o.settings.swipeToClose && s > 100)
                  )
                    return void o.closeGallery();
                  o.$backdrop.css("opacity", 1);
                }
                if (
                  (o.outer.find(".lg-item").removeAttr("style"),
                  n && Math.abs(t.pageX - e.pageX) < 5)
                ) {
                  var l = D(i.target);
                  o.isPosterElement(l) && o.LGel.trigger(C);
                }
                o.swipeDirection = void 0;
              }),
              setTimeout(function () {
                o.outer.hasClass("lg-dragging") ||
                  "lg-slide" === o.settings.mode ||
                  o.outer.removeClass("lg-slide");
              }, this.settings.speed + 100);
          }),
          (t.prototype.enableSwipe = function () {
            var t = this,
              e = {},
              i = {},
              s = !1,
              o = !1;
            this.settings.enableSwipe &&
              (this.$inner.on("touchstart.lg", function (i) {
                t.dragOrSwipeEnabled = !0;
                var s = t.getSlideItem(t.index);
                (!D(i.target).hasClass("lg-item") &&
                  !s.get().contains(i.target)) ||
                  t.outer.hasClass("lg-zoomed") ||
                  t.lgBusy ||
                  1 !== i.targetTouches.length ||
                  ((o = !0),
                  (t.touchAction = "swipe"),
                  t.manageSwipeClass(),
                  (e = {
                    pageX: i.targetTouches[0].pageX,
                    pageY: i.targetTouches[0].pageY,
                  }));
              }),
              this.$inner.on("touchmove.lg", function (n) {
                o &&
                  "swipe" === t.touchAction &&
                  1 === n.targetTouches.length &&
                  ((i = {
                    pageX: n.targetTouches[0].pageX,
                    pageY: n.targetTouches[0].pageY,
                  }),
                  t.touchMove(e, i, n),
                  (s = !0));
              }),
              this.$inner.on("touchend.lg", function (n) {
                if ("swipe" === t.touchAction) {
                  if (s) (s = !1), t.touchEnd(i, e, n);
                  else if (o) {
                    var r = D(n.target);
                    t.isPosterElement(r) && t.LGel.trigger(C);
                  }
                  (t.touchAction = void 0), (o = !1);
                }
              }));
          }),
          (t.prototype.enableDrag = function () {
            var t = this,
              e = {},
              i = {},
              s = !1,
              o = !1;
            this.settings.enableDrag &&
              (this.outer.on("mousedown.lg", function (i) {
                t.dragOrSwipeEnabled = !0;
                var o = t.getSlideItem(t.index);
                (D(i.target).hasClass("lg-item") ||
                  o.get().contains(i.target)) &&
                  (t.outer.hasClass("lg-zoomed") ||
                    t.lgBusy ||
                    (i.preventDefault(),
                    t.lgBusy ||
                      (t.manageSwipeClass(),
                      (e = { pageX: i.pageX, pageY: i.pageY }),
                      (s = !0),
                      (t.outer.get().scrollLeft += 1),
                      (t.outer.get().scrollLeft -= 1),
                      t.outer.removeClass("lg-grab").addClass("lg-grabbing"),
                      t.LGel.trigger(S))));
              }),
              D(window).on("mousemove.lg.global" + this.lgId, function (n) {
                s &&
                  t.lgOpened &&
                  ((o = !0),
                  (i = { pageX: n.pageX, pageY: n.pageY }),
                  t.touchMove(e, i),
                  t.LGel.trigger(I));
              }),
              D(window).on("mouseup.lg.global" + this.lgId, function (n) {
                if (t.lgOpened) {
                  var r = D(n.target);
                  o
                    ? ((o = !1), t.touchEnd(i, e, n), t.LGel.trigger(E))
                    : t.isPosterElement(r) && t.LGel.trigger(C),
                    s &&
                      ((s = !1),
                      t.outer.removeClass("lg-grabbing").addClass("lg-grab"));
                }
              }));
          }),
          (t.prototype.triggerPosterClick = function () {
            var t = this;
            this.$inner.on("click.lg", function (e) {
              !t.dragOrSwipeEnabled &&
                t.isPosterElement(D(e.target)) &&
                t.LGel.trigger(C);
            });
          }),
          (t.prototype.manageSwipeClass = function () {
            var t = this.index + 1,
              e = this.index - 1;
            this.settings.loop &&
              this.galleryItems.length > 2 &&
              (0 === this.index
                ? (e = this.galleryItems.length - 1)
                : this.index === this.galleryItems.length - 1 && (t = 0)),
              this.outer
                .find(".lg-item")
                .removeClass("lg-next-slide lg-prev-slide"),
              e > -1 && this.getSlideItem(e).addClass("lg-prev-slide"),
              this.getSlideItem(t).addClass("lg-next-slide");
          }),
          (t.prototype.goToNextSlide = function (t) {
            var e = this,
              i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index + 1 < this.galleryItems.length
                  ? (this.index++,
                    this.LGel.trigger(T, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : i
                  ? ((this.index = 0),
                    this.LGel.trigger(T, { index: this.index }),
                    this.slide(this.index, !!t, !1, "next"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-right-end"),
                    setTimeout(function () {
                      e.outer.removeClass("lg-right-end");
                    }, 400)));
          }),
          (t.prototype.goToPrevSlide = function (t) {
            var e = this,
              i = this.settings.loop;
            t && this.galleryItems.length < 3 && (i = !1),
              this.lgBusy ||
                (this.index > 0
                  ? (this.index--,
                    this.LGel.trigger(k, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : i
                  ? ((this.index = this.galleryItems.length - 1),
                    this.LGel.trigger(k, { index: this.index, fromTouch: t }),
                    this.slide(this.index, !!t, !1, "prev"))
                  : this.settings.slideEndAnimation &&
                    !t &&
                    (this.outer.addClass("lg-left-end"),
                    setTimeout(function () {
                      e.outer.removeClass("lg-left-end");
                    }, 400)));
          }),
          (t.prototype.keyPress = function () {
            var t = this;
            D(window).on("keydown.lg.global" + this.lgId, function (e) {
              t.lgOpened &&
                !0 === t.settings.escKey &&
                27 === e.keyCode &&
                (e.preventDefault(),
                t.settings.allowMediaOverlap &&
                t.outer.hasClass("lg-can-toggle") &&
                t.outer.hasClass("lg-components-open")
                  ? t.outer.removeClass("lg-components-open")
                  : t.closeGallery()),
                t.lgOpened &&
                  t.galleryItems.length > 1 &&
                  (37 === e.keyCode && (e.preventDefault(), t.goToPrevSlide()),
                  39 === e.keyCode && (e.preventDefault(), t.goToNextSlide()));
            });
          }),
          (t.prototype.arrow = function () {
            var t = this;
            this.getElementById("lg-prev").on("click.lg", function () {
              t.goToPrevSlide();
            }),
              this.getElementById("lg-next").on("click.lg", function () {
                t.goToNextSlide();
              });
          }),
          (t.prototype.arrowDisable = function (t) {
            if (!this.settings.loop && this.settings.hideControlOnEnd) {
              var e = this.getElementById("lg-prev"),
                i = this.getElementById("lg-next");
              t + 1 === this.galleryItems.length
                ? i.attr("disabled", "disabled").addClass("disabled")
                : i.removeAttr("disabled").removeClass("disabled"),
                0 === t
                  ? e.attr("disabled", "disabled").addClass("disabled")
                  : e.removeAttr("disabled").removeClass("disabled");
            }
          }),
          (t.prototype.setTranslate = function (t, e, i, s, o) {
            void 0 === s && (s = 1),
              void 0 === o && (o = 1),
              t.css(
                "transform",
                "translate3d(" +
                  e +
                  "px, " +
                  i +
                  "px, 0px) scale3d(" +
                  s +
                  ", " +
                  o +
                  ", 1)"
              );
          }),
          (t.prototype.mousewheel = function () {
            var t = this,
              e = 0;
            this.outer.on("wheel.lg", function (i) {
              if (i.deltaY && !(t.galleryItems.length < 2)) {
                i.preventDefault();
                var s = new Date().getTime();
                s - e < 1e3 ||
                  ((e = s),
                  i.deltaY > 0
                    ? t.goToNextSlide()
                    : i.deltaY < 0 && t.goToPrevSlide());
              }
            });
          }),
          (t.prototype.isSlideElement = function (t) {
            return (
              t.hasClass("lg-outer") ||
              t.hasClass("lg-item") ||
              t.hasClass("lg-img-wrap")
            );
          }),
          (t.prototype.isPosterElement = function (t) {
            var e = this.getSlideItem(this.index)
              .find(".lg-video-play-button")
              .get();
            return (
              t.hasClass("lg-video-poster") ||
              t.hasClass("lg-video-play-button") ||
              (e && e.contains(t.get()))
            );
          }),
          (t.prototype.toggleMaximize = function () {
            var t = this;
            this.getElementById("lg-maximize").on("click.lg", function () {
              t.$container.toggleClass("lg-inline"), t.refreshOnResize();
            });
          }),
          (t.prototype.invalidateItems = function () {
            for (var t = 0; t < this.items.length; t++) {
              var e = D(this.items[t]);
              e.off("click.lgcustom-item-" + e.attr("data-lg-id"));
            }
          }),
          (t.prototype.trapFocus = function () {
            var t = this;
            this.$container.get().focus({ preventScroll: !0 }),
              D(window).on("keydown.lg.global" + this.lgId, function (e) {
                if (t.lgOpened && ("Tab" === e.key || 9 === e.keyCode)) {
                  var i = $(t.$container.get()),
                    s = i[0],
                    o = i[i.length - 1];
                  e.shiftKey
                    ? document.activeElement === s &&
                      (o.focus(), e.preventDefault())
                    : document.activeElement === o &&
                      (s.focus(), e.preventDefault());
                }
              });
          }),
          (t.prototype.manageCloseGallery = function () {
            var t = this;
            if (this.settings.closable) {
              var e = !1;
              this.getElementById("lg-close").on("click.lg", function () {
                t.closeGallery();
              }),
                this.settings.closeOnTap &&
                  (this.outer.on("mousedown.lg", function (i) {
                    var s = D(i.target);
                    e = !!t.isSlideElement(s);
                  }),
                  this.outer.on("mousemove.lg", function () {
                    e = !1;
                  }),
                  this.outer.on("mouseup.lg", function (i) {
                    var s = D(i.target);
                    t.isSlideElement(s) &&
                      e &&
                      (t.outer.hasClass("lg-dragging") || t.closeGallery());
                  }));
            }
          }),
          (t.prototype.closeGallery = function (t) {
            var e = this;
            if (!this.lgOpened || (!this.settings.closable && !t)) return 0;
            this.LGel.trigger(O),
              this.settings.resetScrollPosition &&
                !this.settings.hideScrollbar &&
                D(window).scrollTop(this.prevScrollTop);
            var i,
              s = this.items[this.index];
            if (this.zoomFromOrigin && s) {
              var o = this.mediaContainerPosition,
                n = o.top,
                r = o.bottom,
                l = this.galleryItems[this.index],
                a = l.__slideVideoInfo,
                d = l.poster,
                c = P(
                  s,
                  this.outer,
                  n + r,
                  a && d && this.settings.videoMaxSize
                );
              i = B(s, this.outer, n, r, c);
            }
            this.zoomFromOrigin && i
              ? (this.outer.addClass("lg-closing lg-zoom-from-image"),
                this.getSlideItem(this.index)
                  .addClass("lg-start-end-progress")
                  .css(
                    "transition-duration",
                    this.settings.startAnimationDuration + "ms"
                  )
                  .css("transform", i))
              : (this.outer.addClass("lg-hide-items"),
                this.outer.removeClass("lg-zoom-from-image")),
              this.destroyModules(),
              (this.lGalleryOn = !1),
              (this.isDummyImageRemoved = !1),
              (this.zoomFromOrigin = this.settings.zoomFromOrigin),
              clearTimeout(this.hideBarTimeout),
              (this.hideBarTimeout = !1),
              D("html").removeClass("lg-on"),
              this.outer.removeClass("lg-visible lg-components-open"),
              this.$backdrop.removeClass("in").css("opacity", 0);
            var u =
              this.zoomFromOrigin && i
                ? Math.max(
                    this.settings.startAnimationDuration,
                    this.settings.backdropDuration
                  )
                : this.settings.backdropDuration;
            return (
              this.$container.removeClass("lg-show-in"),
              setTimeout(function () {
                e.zoomFromOrigin &&
                  i &&
                  e.outer.removeClass("lg-zoom-from-image"),
                  e.$container.removeClass("lg-show"),
                  e.resetScrollBar(),
                  e.$backdrop
                    .removeAttr("style")
                    .css(
                      "transition-duration",
                      e.settings.backdropDuration + "ms"
                    ),
                  e.outer.removeClass("lg-closing " + e.settings.startClass),
                  e.getSlideItem(e.index).removeClass("lg-start-end-progress"),
                  e.$inner.empty(),
                  e.lgOpened && e.LGel.trigger(L, { instance: e }),
                  e.$container.get() && e.$container.get().blur(),
                  (e.lgOpened = !1);
              }, u + 100),
              u + 100
            );
          }),
          (t.prototype.initModules = function () {
            this.plugins.forEach(function (t) {
              try {
                t.init();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly initiated"
                );
              }
            });
          }),
          (t.prototype.destroyModules = function (t) {
            this.plugins.forEach(function (e) {
              try {
                t ? e.destroy() : e.closeGallery && e.closeGallery();
              } catch (t) {
                console.warn(
                  "lightGallery:- make sure lightGallery module is properly destroyed"
                );
              }
            });
          }),
          (t.prototype.refresh = function (t) {
            this.settings.dynamic || this.invalidateItems(),
              (this.galleryItems = t || this.getItems()),
              this.updateControls(),
              this.openGalleryOnItemClick(),
              this.LGel.trigger(p);
          }),
          (t.prototype.updateControls = function () {
            this.addSlideVideoInfo(this.galleryItems),
              this.updateCounterTotal(),
              this.manageSingleSlideClassName();
          }),
          (t.prototype.destroy = function () {
            var t = this,
              e = this.closeGallery(!0);
            return (
              setTimeout(function () {
                t.destroyModules(!0),
                  t.settings.dynamic || t.invalidateItems(),
                  D(window).off(".lg.global" + t.lgId),
                  t.LGel.off(".lg"),
                  t.$container.remove();
              }, e),
              e
            );
          }),
          t
        );
      })();
    const U = function (t, e) {
        return new Y(t, e);
      },
      X = document.querySelectorAll("[data-gallery]");
    X.length &&
      X.forEach((t) => {
        U(t, { licenseKey: "7EC452A9-0CFD441C-BD984C7C-17C8456E", speed: 500 });
      }),
      i(711).init({
        disable: !1,
        startEvent: "DOMContentLoaded",
        initClassName: "aos-init",
        animatedClassName: "aos-animate",
        useClassNames: !1,
        disableMutationObserver: !1,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 400,
        easing: "ease",
        once: !1,
        mirror: !1,
        anchorPlacement: "top-bottom",
      }),
      (window.FLS = !0),
      (function (t) {
        let e = new Image();
        (e.onload = e.onerror =
          function () {
            t(2 == e.height);
          }),
          (e.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (t) {
        let e = !0 === t ? "webp" : "no-webp";
        document.documentElement.classList.add(e);
      }),
      (function () {
        let t = document.querySelector(".icon-menu");
        t &&
          t.addEventListener("click", function (t) {
            e &&
              (((t = 500) => {
                document.documentElement.classList.contains("lock")
                  ? s(t)
                  : o(t);
              })(),
              document.documentElement.classList.toggle("menu-open"));
          });
      })(),
      (function () {
        if (document.querySelectorAll("[data-fullscreen]").length && t.any()) {
          function e() {
            let t = 0.01 * window.innerHeight;
            document.documentElement.style.setProperty("--vh", `${t}px`);
          }
          window.addEventListener("resize", e), e();
        }
      })(),
      (function (t) {
        const e = document.forms;
        if (e.length)
          for (const t of e)
            t.addEventListener("submit", function (t) {
              i(t.target, t);
            }),
              t.addEventListener("reset", function (t) {
                const e = t.target;
                a.formClean(e);
              });
        async function i(e, i) {
          if (0 === (t ? a.getErrors(e) : 0)) {
            if (e.hasAttribute("data-ajax")) {
              i.preventDefault();
              const t = e.getAttribute("action")
                  ? e.getAttribute("action").trim()
                  : "#",
                o = e.getAttribute("method")
                  ? e.getAttribute("method").trim()
                  : "GET",
                n = new FormData(e);
              e.classList.add("_sending");
              const r = await fetch(t, { method: o, body: n });
              if (r.ok) {
                await r.json();
                e.classList.remove("_sending"), s(e);
              } else alert("Ошибка"), e.classList.remove("_sending");
            } else e.hasAttribute("data-dev") && (i.preventDefault(), s(e));
          } else {
            i.preventDefault();
            const t = e.querySelector("._form-error");
            t && e.hasAttribute("data-goto-error") && r(t, !0, 1e3);
          }
        }
        function s(t) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: t } })
          ),
            a.formClean(t),
            n(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (function () {
        d = !0;
        const t = document.querySelector("header.header"),
          e = t.hasAttribute("data-scroll-show"),
          i = t.dataset.scrollShow ? t.dataset.scrollShow : 500,
          s = t.dataset.scroll ? t.dataset.scroll : 1;
        let o,
          n = 0;
        document.addEventListener("windowScroll", function (r) {
          const l = window.scrollY;
          clearTimeout(o),
            l >= s
              ? (!t.classList.contains("_header-scroll") &&
                  t.classList.add("_header-scroll"),
                e &&
                  (l > n
                    ? t.classList.contains("_header-show") &&
                      t.classList.remove("_header-show")
                    : !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show"),
                  (o = setTimeout(() => {
                    !t.classList.contains("_header-show") &&
                      t.classList.add("_header-show");
                  }, i))))
              : (t.classList.contains("_header-scroll") &&
                  t.classList.remove("_header-scroll"),
                e &&
                  t.classList.contains("_header-show") &&
                  t.classList.remove("_header-show")),
            (n = l <= 0 ? 0 : l);
        });
      })();
  })();
})();
