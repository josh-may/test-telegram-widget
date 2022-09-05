(() => {
  'use strict';
  var n = {
      526: (n, e, r) => {
        r.d(e, { Z: () => c });
        var t = r(15),
          o = r.n(t),
          a = r(645),
          i = r.n(a)()(o());
        i.push([
          n.id,
          '/* .js-widget-overlay {\n  z-index: 10001;\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  opacity: 0.8;\n  background-color: #000;\n} */\n/* \n.js-widget-dialog {\n  position: fixed;\n  z-index: 10002;\n  background: #fff;\n  left: 50%;\n  top: 30%;\n  margin: 0 0 0 -120px;\n  width: 200px;\n  padding: 10px 20px;\n  border: solid 1px #333;\n} */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: Gotham Rounded, sans-serif;\n  font-weight: normal;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background: linear-gradient(to right, #00aaff, #00ff6c);\n}\n\n.calculator-grid {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  min-height: 1vh;\n  max-width: 51.3vh;\n  /* width: 28.2%; */\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 1px;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: minmax(120px, auto) repeat(5, 100px);\n}\n\n.calculator-grid > button {\n  cursor: pointer;\n  font-size: 2rem;\n  border: 1px solid white;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.75);\n}\n\n.calculator-grid > button:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.span-two {\n  grid-column: span 2;\n}\n\n.output {\n  grid-column: 1 / -1;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  flex-direction: column;\n  padding: 10px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n.output .previous-operand {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 1.5rem;\n}\n\n.output .current-operand {\n  color: white;\n  font-size: 2.5rem;\n}\n',
          '',
          {
            version: 3,
            sources: ['webpack://./src/views/message.css'],
            names: [],
            mappings:
              'AAAA;;;;;;;;;GASG;AACH;;;;;;;;;;;GAWG;;AAEH;;;EAGE,sBAAsB;EACtB,uCAAuC;EACvC,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,uDAAuD;AACzD;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,qBAAqB;EACrB,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qCAAqC;EACrC,2CAA2C;EAC3C,aAAa;EACb,uCAAuC;EACvC,wDAAwD;AAC1D;;AAEA;EACE,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,aAAa;EACb,2CAA2C;AAC7C;;AAEA;EACE,0CAA0C;AAC5C;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qCAAqC;EACrC,aAAa;EACb,qBAAqB;EACrB,6BAA6B;EAC7B,sBAAsB;EACtB,aAAa;EACb,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,gCAAgC;EAChC,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB',
            sourcesContent: [
              '/* .js-widget-overlay {\n  z-index: 10001;\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  opacity: 0.8;\n  background-color: #000;\n} */\n/* \n.js-widget-dialog {\n  position: fixed;\n  z-index: 10002;\n  background: #fff;\n  left: 50%;\n  top: 30%;\n  margin: 0 0 0 -120px;\n  width: 200px;\n  padding: 10px 20px;\n  border: solid 1px #333;\n} */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  font-family: Gotham Rounded, sans-serif;\n  font-weight: normal;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  background: linear-gradient(to right, #00aaff, #00ff6c);\n}\n\n.calculator-grid {\n  display: grid;\n  justify-content: center;\n  align-content: center;\n  min-height: 1vh;\n  max-width: 51.3vh;\n  /* width: 28.2%; */\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-gap: 1px;\n  grid-template-columns: repeat(4, 100px);\n  grid-template-rows: minmax(120px, auto) repeat(5, 100px);\n}\n\n.calculator-grid > button {\n  cursor: pointer;\n  font-size: 2rem;\n  border: 1px solid white;\n  outline: none;\n  background-color: rgba(255, 255, 255, 0.75);\n}\n\n.calculator-grid > button:hover {\n  background-color: rgba(255, 255, 255, 0.9);\n}\n\n.span-two {\n  grid-column: span 2;\n}\n\n.output {\n  grid-column: 1 / -1;\n  background-color: rgba(0, 0, 0, 0.75);\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-around;\n  flex-direction: column;\n  padding: 10px;\n  word-wrap: break-word;\n  word-break: break-all;\n}\n\n.output .previous-operand {\n  color: rgba(255, 255, 255, 0.75);\n  font-size: 1.5rem;\n}\n\n.output .current-operand {\n  color: white;\n  font-size: 2.5rem;\n}\n',
            ],
            sourceRoot: '',
          },
        ]);
        const c = i;
      },
      645: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var r = n(e);
                return e[2] ? '@media '.concat(e[2], ' {').concat(r, '}') : r;
              }).join('');
            }),
            (e.i = function (n, r, t) {
              'string' == typeof n && (n = [[null, n, '']]);
              var o = {};
              if (t)
                for (var a = 0; a < this.length; a++) {
                  var i = this[a][0];
                  null != i && (o[i] = !0);
                }
              for (var c = 0; c < n.length; c++) {
                var u = [].concat(n[c]);
                (t && o[u[0]]) ||
                  (r &&
                    (u[2]
                      ? (u[2] = ''.concat(r, ' and ').concat(u[2]))
                      : (u[2] = r)),
                  e.push(u));
              }
            }),
            e
          );
        };
      },
      15: (n) => {
        function e(n, e) {
          (null == e || e > n.length) && (e = n.length);
          for (var r = 0, t = new Array(e); r < e; r++) t[r] = n[r];
          return t;
        }
        n.exports = function (n) {
          var r,
            t,
            o =
              ((t = 4),
              (function (n) {
                if (Array.isArray(n)) return n;
              })((r = n)) ||
                (function (n, e) {
                  var r =
                    n &&
                    (('undefined' != typeof Symbol && n[Symbol.iterator]) ||
                      n['@@iterator']);
                  if (null != r) {
                    var t,
                      o,
                      a = [],
                      i = !0,
                      c = !1;
                    try {
                      for (
                        r = r.call(n);
                        !(i = (t = r.next()).done) &&
                        (a.push(t.value), !e || a.length !== e);
                        i = !0
                      );
                    } catch (n) {
                      (c = !0), (o = n);
                    } finally {
                      try {
                        i || null == r.return || r.return();
                      } finally {
                        if (c) throw o;
                      }
                    }
                    return a;
                  }
                })(r, t) ||
                (function (n, r) {
                  if (n) {
                    if ('string' == typeof n) return e(n, r);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    return (
                      'Object' === t &&
                        n.constructor &&
                        (t = n.constructor.name),
                      'Map' === t || 'Set' === t
                        ? Array.from(n)
                        : 'Arguments' === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? e(n, r)
                        : void 0
                    );
                  }
                })(r, t) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            a = o[1],
            i = o[3];
          if ('function' == typeof btoa) {
            var c = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
              u =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  c
                ),
              s = '/*# '.concat(u, ' */'),
              d = i.sources.map(function (n) {
                return '/*# sourceURL='
                  .concat(i.sourceRoot || '')
                  .concat(n, ' */');
              });
            return [a].concat(d).concat([s]).join('\n');
          }
          return [a].join('\n');
        };
      },
      379: (n, e, r) => {
        var t,
          o = (function () {
            var n = {};
            return function (e) {
              if (void 0 === n[e]) {
                var r = document.querySelector(e);
                if (
                  window.HTMLIFrameElement &&
                  r instanceof window.HTMLIFrameElement
                )
                  try {
                    r = r.contentDocument.head;
                  } catch (n) {
                    r = null;
                  }
                n[e] = r;
              }
              return n[e];
            };
          })(),
          a = [];
        function i(n) {
          for (var e = -1, r = 0; r < a.length; r++)
            if (a[r].identifier === n) {
              e = r;
              break;
            }
          return e;
        }
        function c(n, e) {
          for (var r = {}, t = [], o = 0; o < n.length; o++) {
            var c = n[o],
              u = e.base ? c[0] + e.base : c[0],
              s = r[u] || 0,
              d = ''.concat(u, ' ').concat(s);
            r[u] = s + 1;
            var l = i(d),
              f = { css: c[1], media: c[2], sourceMap: c[3] };
            -1 !== l
              ? (a[l].references++, a[l].updater(f))
              : a.push({ identifier: d, updater: g(f, e), references: 1 }),
              t.push(d);
          }
          return t;
        }
        function u(n) {
          var e = document.createElement('style'),
            t = n.attributes || {};
          if (void 0 === t.nonce) {
            var a = r.nc;
            a && (t.nonce = a);
          }
          if (
            (Object.keys(t).forEach(function (n) {
              e.setAttribute(n, t[n]);
            }),
            'function' == typeof n.insert)
          )
            n.insert(e);
          else {
            var i = o(n.insert || 'head');
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(e);
          }
          return e;
        }
        var s,
          d =
            ((s = []),
            function (n, e) {
              return (s[n] = e), s.filter(Boolean).join('\n');
            });
        function l(n, e, r, t) {
          var o = r
            ? ''
            : t.media
            ? '@media '.concat(t.media, ' {').concat(t.css, '}')
            : t.css;
          if (n.styleSheet) n.styleSheet.cssText = d(e, o);
          else {
            var a = document.createTextNode(o),
              i = n.childNodes;
            i[e] && n.removeChild(i[e]),
              i.length ? n.insertBefore(a, i[e]) : n.appendChild(a);
          }
        }
        function f(n, e, r) {
          var t = r.css,
            o = r.media,
            a = r.sourceMap;
          if (
            (o ? n.setAttribute('media', o) : n.removeAttribute('media'),
            a &&
              'undefined' != typeof btoa &&
              (t +=
                '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                  ' */'
                )),
            n.styleSheet)
          )
            n.styleSheet.cssText = t;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(t));
          }
        }
        var A = null,
          p = 0;
        function g(n, e) {
          var r, t, o;
          if (e.singleton) {
            var a = p++;
            (r = A || (A = u(e))),
              (t = l.bind(null, r, a, !1)),
              (o = l.bind(null, r, a, !0));
          } else
            (r = u(e)),
              (t = f.bind(null, r, e)),
              (o = function () {
                !(function (n) {
                  if (null === n.parentNode) return !1;
                  n.parentNode.removeChild(n);
                })(r);
              });
          return (
            t(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap
                )
                  return;
                t((n = e));
              } else o();
            }
          );
        }
        n.exports = function (n, e) {
          (e = e || {}).singleton ||
            'boolean' == typeof e.singleton ||
            (e.singleton =
              (void 0 === t &&
                (t = Boolean(
                  window && document && document.all && !window.atob
                )),
              t));
          var r = c((n = n || []), e);
          return function (n) {
            if (
              ((n = n || []),
              '[object Array]' === Object.prototype.toString.call(n))
            ) {
              for (var t = 0; t < r.length; t++) {
                var o = i(r[t]);
                a[o].references--;
              }
              for (var u = c(n, e), s = 0; s < r.length; s++) {
                var d = i(r[s]);
                0 === a[d].references && (a[d].updater(), a.splice(d, 1));
              }
              r = u;
            }
          };
        };
      },
    },
    e = {};
  function r(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var a = (e[t] = { id: t, exports: {} });
    return n[t](a, a.exports, r), a.exports;
  }
  (r.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return r.d(e, { a: e }), e;
  }),
    (r.d = (n, e) => {
      for (var t in e)
        r.o(e, t) &&
          !r.o(n, t) &&
          Object.defineProperty(n, t, { enumerable: !0, get: e[t] });
    }),
    (r.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (r.r = (n) => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(n, '__esModule', { value: !0 });
    }),
    (() => {
      var n = {};
      r.r(n);
      var e = r(379),
        t = r.n(e),
        o = r(526);
      t()(o.Z, { insert: 'head', singleton: !1 }), o.Z.locals;
      var a = ['config'];
      function i(e, r) {
        if (!e) throw Error('API method required');
        if (((e = e.toLowerCase()), -1 === a.indexOf(e)))
          throw Error('Method '.concat(e, ' is not supported'));
        'config' === e
          ? (0, n.config)(r)
          : console.warn('No handler defined for '.concat(e));
      }
      !(function (n) {
        var e = n[n.ww],
          r = e.q;
        if (r) for (var t = 0; t < r.length; t++) i(r[t][0], r[t][1]);
        (e = i).configurations = {
          message: !1,
          users: !1,
          floatLeft: !1,
          showMessageAlways: !1,
          useCookies: !1,
          useAnimations: !1,
          useDarkTheme: !1,
        };
      })(window);
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWVzc2FnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmNzcz83MjRkIiwid2VicGFjazovLy8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbIl9fX0NTU19MT0FERVJfRVhQT1JUX19fIiwicHVzaCIsIm1vZHVsZSIsImlkIiwiZXhwb3J0cyIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwidG9TdHJpbmciLCJ0aGlzIiwibWFwIiwiaXRlbSIsImNvbnRlbnQiLCJjb25jYXQiLCJqb2luIiwiaSIsIm1vZHVsZXMiLCJtZWRpYVF1ZXJ5IiwiZGVkdXBlIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImxlbmd0aCIsIl9pIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhcnIiLCJsZW4iLCJhcnIyIiwiQXJyYXkiLCJfaXRlbSIsImlzQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJTeW1ib2wiLCJpdGVyYXRvciIsIl9zIiwiX2UiLCJfYXJyIiwiX24iLCJfZCIsImNhbGwiLCJuZXh0IiwiZG9uZSIsInZhbHVlIiwiZXJyIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwibyIsIm1pbkxlbiIsIm4iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiVHlwZUVycm9yIiwiX25vbkl0ZXJhYmxlUmVzdCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJtZW1vIiwiZ2V0VGFyZ2V0IiwidGFyZ2V0Iiwic3R5bGVUYXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ3aW5kb3ciLCJIVE1MSUZyYW1lRWxlbWVudCIsImNvbnRlbnREb2N1bWVudCIsImhlYWQiLCJlIiwic3R5bGVzSW5Eb20iLCJnZXRJbmRleEJ5SWRlbnRpZmllciIsImlkZW50aWZpZXIiLCJyZXN1bHQiLCJtb2R1bGVzVG9Eb20iLCJvcHRpb25zIiwiaWRDb3VudE1hcCIsImlkZW50aWZpZXJzIiwiYmFzZSIsImNvdW50IiwiaW5kZXgiLCJvYmoiLCJjc3MiLCJtZWRpYSIsInNvdXJjZU1hcCIsInJlZmVyZW5jZXMiLCJ1cGRhdGVyIiwiYWRkU3R5bGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJzdHlsZSIsImNyZWF0ZUVsZW1lbnQiLCJhdHRyaWJ1dGVzIiwibm9uY2UiLCJrZXlzIiwiZm9yRWFjaCIsImtleSIsInNldEF0dHJpYnV0ZSIsImluc2VydCIsIkVycm9yIiwiYXBwZW5kQ2hpbGQiLCJ0ZXh0U3RvcmUiLCJyZXBsYWNlVGV4dCIsInJlcGxhY2VtZW50IiwiZmlsdGVyIiwiQm9vbGVhbiIsImFwcGx5VG9TaW5nbGV0b25UYWciLCJyZW1vdmUiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNzc05vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsImNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsImluc2VydEJlZm9yZSIsImFwcGx5VG9UYWciLCJyZW1vdmVBdHRyaWJ1dGUiLCJmaXJzdENoaWxkIiwic2luZ2xldG9uIiwic2luZ2xldG9uQ291bnRlciIsInVwZGF0ZSIsInN0eWxlSW5kZXgiLCJiaW5kIiwicGFyZW50Tm9kZSIsInJlbW92ZVN0eWxlRWxlbWVudCIsIm5ld09iaiIsImFsbCIsImF0b2IiLCJsYXN0SWRlbnRpZmllcnMiLCJuZXdMaXN0IiwibmV3TGFzdElkZW50aWZpZXJzIiwiX2luZGV4Iiwic3BsaWNlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJwcm9wIiwiaGFzT3duUHJvcGVydHkiLCJyIiwidG9TdHJpbmdUYWciLCJzdXBwb3J0ZWRBUEkiLCJhcGlIYW5kbGVyIiwiYXBpIiwicGFyYW1zIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY29uZmlnIiwiY29uc29sZSIsIndhcm4iLCJnbG9iYWxPYmplY3QiLCJxdWV1ZSIsInEiLCJjb25maWd1cmF0aW9ucyIsIm1lc3NhZ2UiLCJ1c2VycyIsImZsb2F0TGVmdCIsInNob3dNZXNzYWdlQWx3YXlzIiwidXNlQ29va2llcyIsInVzZUFuaW1hdGlvbnMiLCJ1c2VEYXJrVGhlbWUiLCJhcHAiXSwibWFwcGluZ3MiOiJ1RkFHSUEsRSxNQUEwQixHQUE0QixLQUUxREEsRUFBd0JDLEtBQUssQ0FBQ0Ms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ZGdldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogLmpzLXdpZGdldC1vdmVybGF5IHtcXG4gIHotaW5kZXg6IDEwMDAxO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwcHg7XFxuICBib3R0b206IDBweDtcXG4gIGxlZnQ6IDBweDtcXG4gIHJpZ2h0OiAwcHg7XFxuICBvcGFjaXR5OiAwLjg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn0gKi9cXG4vKiBcXG4uanMtd2lkZ2V0LWRpYWxvZyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwMjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDMwJTtcXG4gIG1hcmdpbjogMCAwIDAgLTEyMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzMzMztcXG59ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBHb3RoYW0gUm91bmRlZCwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcblxcbmJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzAwYWFmZiwgIzAwZmY2Yyk7XFxufVxcblxcbi5jYWxjdWxhdG9yLWdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgbWluLWhlaWdodDogMXZoO1xcbiAgbWF4LXdpZHRoOiA1MS4zdmg7XFxuICAvKiB3aWR0aDogMjguMiU7ICovXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAxcHg7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxMDBweCk7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbm1heCgxMjBweCwgYXV0bykgcmVwZWF0KDUsIDEwMHB4KTtcXG59XFxuXFxuLmNhbGN1bGF0b3ItZ3JpZCA+IGJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcbn1cXG5cXG4uY2FsY3VsYXRvci1ncmlkID4gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG59XFxuXFxuLnNwYW4tdHdvIHtcXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XFxufVxcblxcbi5vdXRwdXQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG59XFxuXFxuLm91dHB1dCAucHJldmlvdXMtb3BlcmFuZCB7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4ub3V0cHV0IC5jdXJyZW50LW9wZXJhbmQge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy92aWV3cy9tZXNzYWdlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Ozs7Ozs7O0dBU0c7QUFDSDs7Ozs7Ozs7Ozs7R0FXRzs7QUFFSDs7O0VBR0Usc0JBQXNCO0VBQ3RCLHVDQUF1QztFQUN2QyxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHVEQUF1RDtBQUN6RDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQywyQ0FBMkM7RUFDM0MsYUFBYTtFQUNiLHVDQUF1QztFQUN2Qyx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAuanMtd2lkZ2V0LW92ZXJsYXkge1xcbiAgei1pbmRleDogMTAwMDE7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDBweDtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogMHB4O1xcbiAgcmlnaHQ6IDBweDtcXG4gIG9wYWNpdHk6IDAuODtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufSAqL1xcbi8qIFxcbi5qcy13aWRnZXQtZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDAyO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogMzAlO1xcbiAgbWFyZ2luOiAwIDAgMCAtMTIwcHg7XFxuICB3aWR0aDogMjAwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICBib3JkZXI6IHNvbGlkIDFweCAjMzMzO1xcbn0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZm9udC1mYW1pbHk6IEdvdGhhbSBSb3VuZGVkLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDBhYWZmLCAjMDBmZjZjKTtcXG59XFxuXFxuLmNhbGN1bGF0b3ItZ3JpZCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBtaW4taGVpZ2h0OiAxdmg7XFxuICBtYXgtd2lkdGg6IDUxLjN2aDtcXG4gIC8qIHdpZHRoOiAyOC4yJTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgZ3JpZC1nYXA6IDFweDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDEwMHB4KTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWlubWF4KDEyMHB4LCBhdXRvKSByZXBlYXQoNSwgMTAwcHgpO1xcbn1cXG5cXG4uY2FsY3VsYXRvci1ncmlkID4gYnV0dG9uIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XFxufVxcblxcbi5jYWxjdWxhdG9yLWdyaWQgPiBidXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xcbn1cXG5cXG4uc3Bhbi10d28ge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcXG59XFxuXFxuLm91dHB1dCB7XFxuICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4ub3V0cHV0IC5wcmV2aW91cy1vcGVyYW5kIHtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5vdXRwdXQgLmN1cnJlbnQtb3BlcmFuZCB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXNzYWdlLmNzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vdmlld3MvbWVzc2FnZSdcblxuY29uc3Qgc3VwcG9ydGVkQVBJID0gWydjb25maWcnXSAvLyBlbmxpc3QgYWxsIG1ldGhvZHMgc3VwcG9ydGVkIGJ5IEFQSSAoZS5nLiBgbXcoJ2V2ZW50JywgJ3VzZXItbG9naW4nKTtgKVxuXG4vKlxuICAgIFRoZSBtYWluIGVudHJ5IG9mIHRoZSBhcHBsaWNhdGlvblxuKi9cbmZ1bmN0aW9uIGFwcCh3aW5kb3cpIHtcbiAgLy8gc2V0IGRlZmF1bHQgY29uZmlndXJhdGlvbnNcbiAgbGV0IGNvbmZpZ3VyYXRpb25zID0ge1xuICAgIG1lc3NhZ2U6IGZhbHNlLFxuICAgIHVzZXJzOiBmYWxzZSxcbiAgICBmbG9hdExlZnQ6IGZhbHNlLFxuICAgIHNob3dNZXNzYWdlQWx3YXlzOiBmYWxzZSxcbiAgICB1c2VDb29raWVzOiBmYWxzZSxcbiAgICB1c2VBbmltYXRpb25zOiBmYWxzZSxcbiAgICB1c2VEYXJrVGhlbWU6IGZhbHNlLFxuICB9XG5cbiAgLy8gYWxsIG1ldGhvZHMgdGhhdCB3ZXJlIGNhbGxlZCB0aWxsIG5vdyBhbmQgc3RvcmVkIGluIHF1ZXVlXG4gIC8vIG5lZWRzIHRvIGJlIGNhbGxlZCBub3cgXG4gIGxldCBnbG9iYWxPYmplY3QgPSB3aW5kb3dbd2luZG93Wyd3dyddXVxuICBsZXQgcXVldWUgPSBnbG9iYWxPYmplY3QucVxuICBpZiAocXVldWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhcGlIYW5kbGVyKHF1ZXVlW2ldWzBdLCBxdWV1ZVtpXVsxXSlcbiAgICB9XG4gIH1cblxuICAvLyBvdmVycmlkZSB0ZW1wb3JhcnkgKHVudGlsIHRoZSBhcHAgbG9hZGVkKSBoYW5kbGVyXG4gIC8vIGZvciB3aWRnZXQncyBBUEkgY2FsbHNcbiAgZ2xvYmFsT2JqZWN0ID0gYXBpSGFuZGxlclxuICBnbG9iYWxPYmplY3QuY29uZmlndXJhdGlvbnMgPSBjb25maWd1cmF0aW9uc1xufVxuXG4vKlxuICAgIE1ldGhvZCB0aGF0IGhhbmRsZXMgYWxsIEFQSSBjYWxsc1xuKi9cbmZ1bmN0aW9uIGFwaUhhbmRsZXIoYXBpLCBwYXJhbXMpIHtcbiAgaWYgKCFhcGkpIHRocm93IEVycm9yKCdBUEkgbWV0aG9kIHJlcXVpcmVkJylcbiAgICBhcGkgPSBhcGkudG9Mb3dlckNhc2UoKVxuXG4gIGlmIChzdXBwb3J0ZWRBUEkuaW5kZXhPZihhcGkpID09PSAtMSkgdGhyb3cgRXJyb3IoYE1ldGhvZCAke2FwaX0gaXMgbm90IHN1cHBvcnRlZGApXG5cbiAgc3dpdGNoIChhcGkpIHtcbiAgICAvLyBUT0RPOiBhZGQgQVBJIGltcGxlbWVudGF0aW9uXG4gICAgY2FzZSAnY29uZmlnJzpcbiAgICAgIGNvbmZpZyhwYXJhbXMpXG4gICAgYnJlYWtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS53YXJuKGBObyBoYW5kbGVyIGRlZmluZWQgZm9yICR7YXBpfWApXG4gIH1cbn1cblxuYXBwKHdpbmRvdykiXSwic291cmNlUm9vdCI6IiJ9
