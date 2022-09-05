(() => {
  'use strict';
  var n = {
      526: (n, t, e) => {
        e.d(t, { Z: () => i });
        var o = e(15),
          a = e.n(o),
          r = e(645),
          A = e.n(r)()(a());
        A.push([
          n.id,
          '@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap);',
        ]),
          A.push([
            n.id,
            "/* Container */\n.tlgc{\n  position: fixed;\n  z-index: 10002;\n  bottom: 0; right: 0; left: auto; top: auto;\n  content: '';\n  padding: 12px;\n}\n\n/* Message above icon */\n.tlgc .tlgm{\n  position: relative;\n  font-size: 14px; background-color: #fff;\n  font-family: 'Open Sans', sans-serif;\n  box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n  padding: 15px 20px; padding-right: 30px;\n  border-radius: 8px;\n  color: #525252;\n  font-weight: 600;\n  margin-bottom: 12px;\n  max-width: 450px;\n  width: auto;\n\tdisplay: none;\n\tanimation-duration: .5s;\n\tanimation-fill-mode: both;\n\tanimation-delay: .5s;\n}\n\n/* Close button */\n.tlgc .tlgm span{ \n\tcontent: ''; \n\tposition: absolute; \n\twidth: 10px; \n\theight: 10px; \n\tright: 15px; \n\ttop: 15px; \n\tleft: auto; \n}\n.tlgc .tlgm span:hover{ cursor: pointer; }\n.tlgc .tlgm span::after{ \n\tcontent: ''; \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0; \n\twidth: 10px; \n\theight: 2px; \n\tbackground-color: #979797; \n\ttransform: rotate(45deg); \n}\n.tlgc .tlgm span::before{ \n\tcontent: ''; \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0; \n\twidth: 10px; \n\theight: 2px; \n\tbackground-color: #979797; \n\ttransform: rotate(-45deg); \n}\n\n/* Button */\n.tlgc .telewidget-button{\n    content: '';\n    width: 48px; height: 48px;\n    position: relative;\n    float: right;\n    display: flex; justify-content: center; align-items: center;\n    transition: .1s linear;\n\tanimation-duration: .5s;\n\tanimation-fill-mode: both;\n}\n.tlgc .telewidget-button::before{ \n    content: ''; position: absolute;\n    border-radius: 50%;\n    z-index: 10000;\n    width: 100%; height: 100%;\n    box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n}\n.tlgc .telewidget-button img{ \n    z-index: 10001;\n    transition: .1s linear;\n    margin: 0 !important; padding: 0 !important;\n    max-width: 100%; \n}\n.tlgc .telewidget-button:hover img{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n/* POSITION THE WIDGET TO THE LEFT */\n.tlgc.left{ left: 0; width: auto; right: initial; }\n.tlgc.left .telewidget-button{ float: left; }\n\n/* SHOW WIDGET ON MOBILES DIVICES */\n.tlgc.show-message-always .tlgm{ display: block; }\n\n/* Dark theme */\n.tlgc.dark .tlgm{\n    font-size: 14px; background-color: #081131;\n    box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n    color: #eeeeee;\n}\n.tlgc.dark .telewidget-button::before{ \n    box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n}\n.tlgc.dark .tlgm span::after{ \n\tbackground-color: #e2e2e2; \n}\n.tlgc.dark .tlgm span::before{ \n\tbackground-color: #e2e2e2; \n}\n\n/* Tablets */\n@media only screen and (min-width : 768px) \n{\n    .tlgc .tlgm span{ right: 10px;}\n    .tlgc .tlgm{ display: block; }\n}\n\n@keyframes zoomIn {\n    from {\n        transform: scale(.2);\n        opacity: 0;\n    }\n}\n@keyframes slide {\n    from {\n        transform: translateY(20px);\n        opacity: 0;\n    }\n}\n\n/* Classes for animations */\n.zoomIn { animation-name: zoomIn; }\n.slide { animation-name: slide; }",
            '',
            {
              version: 3,
              sources: ['webpack://./src/views/message.css'],
              names: [],
              mappings:
                'AAEA,cAAc;AACd;EACE,eAAe;EACf,cAAc;EACd,SAAS,EAAE,QAAQ,EAAE,UAAU,EAAE,SAAS;EAC1C,WAAW;EACX,aAAa;AACf;;AAEA,uBAAuB;AACvB;EACE,kBAAkB;EAClB,eAAe,EAAE,sBAAsB;EACvC,oCAAoC;EACpC,0CAA0C;EAC1C,kBAAkB,EAAE,mBAAmB;EACvC,kBAAkB;EAClB,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;CACZ,aAAa;CACb,uBAAuB;CACvB,yBAAyB;CACzB,oBAAoB;AACrB;;AAEA,iBAAiB;AACjB;CACC,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,YAAY;CACZ,WAAW;CACX,SAAS;CACT,UAAU;AACX;AACA,wBAAwB,eAAe,EAAE;AACzC;CACC,WAAW;CACX,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,WAAW;CACX,yBAAyB;CACzB,wBAAwB;AACzB;AACA;CACC,WAAW;CACX,kBAAkB;CAClB,MAAM;CACN,OAAO;CACP,WAAW;CACX,WAAW;CACX,yBAAyB;CACzB,yBAAyB;AAC1B;;AAEA,WAAW;AACX;IACI,WAAW;IACX,WAAW,EAAE,YAAY;IACzB,kBAAkB;IAClB,YAAY;IACZ,aAAa,EAAE,uBAAuB,EAAE,mBAAmB;IAC3D,sBAAsB;CACzB,uBAAuB;CACvB,yBAAyB;AAC1B;AACA;IACI,WAAW,EAAE,kBAAkB;IAC/B,kBAAkB;IAClB,cAAc;IACd,WAAW,EAAE,YAAY;IACzB,0CAA0C;AAC9C;AACA;IACI,cAAc;IACd,sBAAsB;IACtB,oBAAoB,EAAE,qBAAqB;IAC3C,eAAe;AACnB;AACA;IACI,eAAe;IACf,qBAAqB;AACzB;;AAEA,oCAAoC;AACpC,YAAY,OAAO,EAAE,WAAW,EAAE,cAAc,EAAE;AAClD,+BAA+B,WAAW,EAAE;;AAE5C,mCAAmC;AACnC,iCAAiC,cAAc,EAAE;;AAEjD,eAAe;AACf;IACI,eAAe,EAAE,yBAAyB;IAC1C,0CAA0C;IAC1C,cAAc;AAClB;AACA;IACI,0CAA0C;AAC9C;AACA;CACC,yBAAyB;AAC1B;AACA;CACC,yBAAyB;AAC1B;;AAEA,YAAY;AACZ;;IAEI,kBAAkB,WAAW,CAAC;IAC9B,aAAa,cAAc,EAAE;AACjC;;AAEA;IACI;QACI,oBAAoB;QACpB,UAAU;IACd;AACJ;AACA;IACI;QACI,2BAA2B;QAC3B,UAAU;IACd;AACJ;;AAEA,2BAA2B;AAC3B,UAAU,sBAAsB,EAAE;AAClC,SAAS,qBAAqB,EAAE',
              sourcesContent: [
                "@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap');\n\n/* Container */\n.tlgc{\n  position: fixed;\n  z-index: 10002;\n  bottom: 0; right: 0; left: auto; top: auto;\n  content: '';\n  padding: 12px;\n}\n\n/* Message above icon */\n.tlgc .tlgm{\n  position: relative;\n  font-size: 14px; background-color: #fff;\n  font-family: 'Open Sans', sans-serif;\n  box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n  padding: 15px 20px; padding-right: 30px;\n  border-radius: 8px;\n  color: #525252;\n  font-weight: 600;\n  margin-bottom: 12px;\n  max-width: 450px;\n  width: auto;\n\tdisplay: none;\n\tanimation-duration: .5s;\n\tanimation-fill-mode: both;\n\tanimation-delay: .5s;\n}\n\n/* Close button */\n.tlgc .tlgm span{ \n\tcontent: ''; \n\tposition: absolute; \n\twidth: 10px; \n\theight: 10px; \n\tright: 15px; \n\ttop: 15px; \n\tleft: auto; \n}\n.tlgc .tlgm span:hover{ cursor: pointer; }\n.tlgc .tlgm span::after{ \n\tcontent: ''; \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0; \n\twidth: 10px; \n\theight: 2px; \n\tbackground-color: #979797; \n\ttransform: rotate(45deg); \n}\n.tlgc .tlgm span::before{ \n\tcontent: ''; \n\tposition: absolute; \n\ttop: 0; \n\tleft: 0; \n\twidth: 10px; \n\theight: 2px; \n\tbackground-color: #979797; \n\ttransform: rotate(-45deg); \n}\n\n/* Button */\n.tlgc .telewidget-button{\n    content: '';\n    width: 48px; height: 48px;\n    position: relative;\n    float: right;\n    display: flex; justify-content: center; align-items: center;\n    transition: .1s linear;\n\tanimation-duration: .5s;\n\tanimation-fill-mode: both;\n}\n.tlgc .telewidget-button::before{ \n    content: ''; position: absolute;\n    border-radius: 50%;\n    z-index: 10000;\n    width: 100%; height: 100%;\n    box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n}\n.tlgc .telewidget-button img{ \n    z-index: 10001;\n    transition: .1s linear;\n    margin: 0 !important; padding: 0 !important;\n    max-width: 100%; \n}\n.tlgc .telewidget-button:hover img{\n    cursor: pointer;\n    transform: scale(1.1);\n}\n\n/* POSITION THE WIDGET TO THE LEFT */\n.tlgc.left{ left: 0; width: auto; right: initial; }\n.tlgc.left .telewidget-button{ float: left; }\n\n/* SHOW WIDGET ON MOBILES DIVICES */\n.tlgc.show-message-always .tlgm{ display: block; }\n\n/* Dark theme */\n.tlgc.dark .tlgm{\n    font-size: 14px; background-color: #081131;\n    box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n    color: #eeeeee;\n}\n.tlgc.dark .telewidget-button::before{ \n    box-shadow: 1px 2px 8px rgba(70,70,70,.25);\n}\n.tlgc.dark .tlgm span::after{ \n\tbackground-color: #e2e2e2; \n}\n.tlgc.dark .tlgm span::before{ \n\tbackground-color: #e2e2e2; \n}\n\n/* Tablets */\n@media only screen and (min-width : 768px) \n{\n    .tlgc .tlgm span{ right: 10px;}\n    .tlgc .tlgm{ display: block; }\n}\n\n@keyframes zoomIn {\n    from {\n        transform: scale(.2);\n        opacity: 0;\n    }\n}\n@keyframes slide {\n    from {\n        transform: translateY(20px);\n        opacity: 0;\n    }\n}\n\n/* Classes for animations */\n.zoomIn { animation-name: zoomIn; }\n.slide { animation-name: slide; }",
              ],
              sourceRoot: '',
            },
          ]);
        const i = A;
      },
      645: (n) => {
        n.exports = function (n) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var e = n(t);
                return t[2] ? '@media '.concat(t[2], ' {').concat(e, '}') : e;
              }).join('');
            }),
            (t.i = function (n, e, o) {
              'string' == typeof n && (n = [[null, n, '']]);
              var a = {};
              if (o)
                for (var r = 0; r < this.length; r++) {
                  var A = this[r][0];
                  null != A && (a[A] = !0);
                }
              for (var i = 0; i < n.length; i++) {
                var s = [].concat(n[i]);
                (o && a[s[0]]) ||
                  (e &&
                    (s[2]
                      ? (s[2] = ''.concat(e, ' and ').concat(s[2]))
                      : (s[2] = e)),
                  t.push(s));
              }
            }),
            t
          );
        };
      },
      15: (n) => {
        function t(n, t) {
          (null == t || t > n.length) && (t = n.length);
          for (var e = 0, o = new Array(t); e < t; e++) o[e] = n[e];
          return o;
        }
        n.exports = function (n) {
          var e,
            o,
            a =
              ((o = 4),
              (function (n) {
                if (Array.isArray(n)) return n;
              })((e = n)) ||
                (function (n, t) {
                  var e =
                    n &&
                    (('undefined' != typeof Symbol && n[Symbol.iterator]) ||
                      n['@@iterator']);
                  if (null != e) {
                    var o,
                      a,
                      r = [],
                      A = !0,
                      i = !1;
                    try {
                      for (
                        e = e.call(n);
                        !(A = (o = e.next()).done) &&
                        (r.push(o.value), !t || r.length !== t);
                        A = !0
                      );
                    } catch (n) {
                      (i = !0), (a = n);
                    } finally {
                      try {
                        A || null == e.return || e.return();
                      } finally {
                        if (i) throw a;
                      }
                    }
                    return r;
                  }
                })(e, o) ||
                (function (n, e) {
                  if (n) {
                    if ('string' == typeof n) return t(n, e);
                    var o = Object.prototype.toString.call(n).slice(8, -1);
                    return (
                      'Object' === o &&
                        n.constructor &&
                        (o = n.constructor.name),
                      'Map' === o || 'Set' === o
                        ? Array.from(n)
                        : 'Arguments' === o ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
                        ? t(n, e)
                        : void 0
                    );
                  }
                })(e, o) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  );
                })()),
            r = a[1],
            A = a[3];
          if ('function' == typeof btoa) {
            var i = btoa(unescape(encodeURIComponent(JSON.stringify(A)))),
              s =
                'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                  i
                ),
              l = '/*# '.concat(s, ' */'),
              c = A.sources.map(function (n) {
                return '/*# sourceURL='
                  .concat(A.sourceRoot || '')
                  .concat(n, ' */');
              });
            return [r].concat(c).concat([l]).join('\n');
          }
          return [r].join('\n');
        };
      },
      379: (n, t, e) => {
        var o,
          a = (function () {
            var n = {};
            return function (t) {
              if (void 0 === n[t]) {
                var e = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  e instanceof window.HTMLIFrameElement
                )
                  try {
                    e = e.contentDocument.head;
                  } catch (n) {
                    e = null;
                  }
                n[t] = e;
              }
              return n[t];
            };
          })(),
          r = [];
        function A(n) {
          for (var t = -1, e = 0; e < r.length; e++)
            if (r[e].identifier === n) {
              t = e;
              break;
            }
          return t;
        }
        function i(n, t) {
          for (var e = {}, o = [], a = 0; a < n.length; a++) {
            var i = n[a],
              s = t.base ? i[0] + t.base : i[0],
              l = e[s] || 0,
              c = ''.concat(s, ' ').concat(l);
            e[s] = l + 1;
            var d = A(c),
              p = { css: i[1], media: i[2], sourceMap: i[3] };
            -1 !== d
              ? (r[d].references++, r[d].updater(p))
              : r.push({ identifier: c, updater: C(p, t), references: 1 }),
              o.push(c);
          }
          return o;
        }
        function s(n) {
          var t = document.createElement('style'),
            o = n.attributes || {};
          if (void 0 === o.nonce) {
            var r = e.nc;
            r && (o.nonce = r);
          }
          if (
            (Object.keys(o).forEach(function (n) {
              t.setAttribute(n, o[n]);
            }),
            'function' == typeof n.insert)
          )
            n.insert(t);
          else {
            var A = a(n.insert || 'head');
            if (!A)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            A.appendChild(t);
          }
          return t;
        }
        var l,
          c =
            ((l = []),
            function (n, t) {
              return (l[n] = t), l.filter(Boolean).join('\n');
            });
        function d(n, t, e, o) {
          var a = e
            ? ''
            : o.media
            ? '@media '.concat(o.media, ' {').concat(o.css, '}')
            : o.css;
          if (n.styleSheet) n.styleSheet.cssText = c(t, a);
          else {
            var r = document.createTextNode(a),
              A = n.childNodes;
            A[t] && n.removeChild(A[t]),
              A.length ? n.insertBefore(r, A[t]) : n.appendChild(r);
          }
        }
        function p(n, t, e) {
          var o = e.css,
            a = e.media,
            r = e.sourceMap;
          if (
            (a ? n.setAttribute('media', a) : n.removeAttribute('media'),
            r &&
              'undefined' != typeof btoa &&
              (o +=
                '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                  ' */'
                )),
            n.styleSheet)
          )
            n.styleSheet.cssText = o;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(o));
          }
        }
        var u = null,
          g = 0;
        function C(n, t) {
          var e, o, a;
          if (t.singleton) {
            var r = g++;
            (e = u || (u = s(t))),
              (o = d.bind(null, e, r, !1)),
              (a = d.bind(null, e, r, !0));
          } else
            (e = s(t)),
              (o = p.bind(null, e, t)),
              (a = function () {
                !(function (n) {
                  if (null === n.parentNode) return !1;
                  n.parentNode.removeChild(n);
                })(e);
              });
          return (
            o(n),
            function (t) {
              if (t) {
                if (
                  t.css === n.css &&
                  t.media === n.media &&
                  t.sourceMap === n.sourceMap
                )
                  return;
                o((n = t));
              } else a();
            }
          );
        }
        n.exports = function (n, t) {
          (t = t || {}).singleton ||
            'boolean' == typeof t.singleton ||
            (t.singleton =
              (void 0 === o &&
                (o = Boolean(
                  window && document && document.all && !window.atob
                )),
              o));
          var e = i((n = n || []), t);
          return function (n) {
            if (
              ((n = n || []),
              '[object Array]' === Object.prototype.toString.call(n))
            ) {
              for (var o = 0; o < e.length; o++) {
                var a = A(e[o]);
                r[a].references--;
              }
              for (var s = i(n, t), l = 0; l < e.length; l++) {
                var c = A(e[l]);
                0 === r[c].references && (r[c].updater(), r.splice(c, 1));
              }
              e = s;
            }
          };
        };
      },
    },
    t = {};
  function e(o) {
    var a = t[o];
    if (void 0 !== a) return a.exports;
    var r = (t[o] = { id: o, exports: {} });
    return n[o](r, r.exports, e), r.exports;
  }
  (e.n = (n) => {
    var t = n && n.__esModule ? () => n.default : () => n;
    return e.d(t, { a: t }), t;
  }),
    (e.d = (n, t) => {
      for (var o in t)
        e.o(t, o) &&
          !e.o(n, o) &&
          Object.defineProperty(n, o, { enumerable: !0, get: t[o] });
    }),
    (e.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t)),
    (() => {
      var n = e(379),
        t = e.n(n),
        o = e(526);
      t()(o.Z, { insert: 'head', singleton: !1 }), o.Z.locals;
      var a = document.createElement('div');
      a.innerHTML =
        '<div class="tlgc"> <div class="tlgm"></div> <a target="_blank" rel="nofollow" class="telewidget-button"><img src="https://cdn.jsdelivr.net/gh/mascarell/telewidget/assets/telegram.svg" alt="TeleWidget Icon"/></a> </div> ';
      var r = a.querySelector('.tlgc');
      function A() {
        r.querySelector('.tlgm').style.display = 'none';
      }
      var i = ['config'];
      function s(n, t) {
        if (!n) throw Error('API method required');
        if (((n = n.toLowerCase()), -1 === i.indexOf(n)))
          throw Error('Method '.concat(n, ' is not supported'));
        switch (n) {
          case 'config':
            !(function (n) {
              if (
                (n.useAnimations &&
                  (r.querySelector('.tlgm').classList.add('slide'),
                  r
                    .querySelector('.telewidget-button')
                    .classList.add('zoomIn')),
                n.useDarkTheme && r.classList.add('dark'),
                n.message
                  ? n.useCookies &&
                    null ==
                      document.cookie.match(
                        /^(.*;)?\s*showmessage\s*=\s*[^;]+(.*)?$/
                      )
                    ? ((r.querySelector('.tlgm').innerHTML = ''.concat(
                        n.message,
                        ' <span></span>'
                      )),
                      r
                        .querySelector('.tlgm span')
                        .addEventListener('click', A),
                      console.log('creating cookie'),
                      (e = new Date()).setTime(e.getTime() + 2592e5),
                      (o = '; expires=' + e.toGMTString()),
                      (document.cookie = 'showmessage=no' + o + '; path=/'))
                    : n.useCookies
                    ? r.querySelector('.tlgm').remove()
                    : ((r.querySelector('.tlgm').innerHTML = ''.concat(
                        n.message,
                        ' <span></span>'
                      )),
                      r
                        .querySelector('.tlgm span')
                        .addEventListener('click', A))
                  : r.querySelector('.tlgm').remove(),
                n.users)
              )
                try {
                  var t = n.users[Math.floor(Math.random() * n.users.length)];
                  r.querySelector('.telewidget-button').href =
                    'https://t.me/'.concat(t);
                } catch (n) {
                  console.error('telewidget -> cannot select users');
                }
              var e, o;
              n.floatLeft && r.classList.add('left'),
                n.showMessageAlways && r.classList.add('show-message-always'),
                document.getElementsByTagName('body')[0].appendChild(r);
            })(t);
            break;
          default:
            console.warn('No handler defined for '.concat(n));
        }
      }
      !(function (n) {
        var t = n[n.ww],
          e = t.q;
        if (e) for (var o = 0; o < e.length; o++) s(e[o][0], e[o][1]);
        (t = s).configurations = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbWVzc2FnZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmNzcz83MjRkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tZXNzYWdlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiXSwibmFtZXMiOlsiX19fQ1NTX0xPQURFUl9FWFBPUlRfX18iLCJwdXNoIiwibW9kdWxlIiwiaWQiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsInRoaXMiLCJtYXAiLCJpdGVtIiwiY29udGVudCIsImNvbmNhdCIsImpvaW4iLCJpIiwibW9kdWxlcyIsIm1lZGlhUXVlcnkiLCJkZWR1cGUiLCJhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzIiwibGVuZ3RoIiwiX2kiLCJfYXJyYXlMaWtlVG9BcnJheSIsImFyciIsImxlbiIsImFycjIiLCJBcnJheSIsIl9pdGVtIiwiaXNBcnJheSIsIl9hcnJheVdpdGhIb2xlcyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJfZSIsIl9hcnIiLCJfbiIsIl9kIiwiY2FsbCIsIm5leHQiLCJkb25lIiwidmFsdWUiLCJlcnIiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJvIiwibWluTGVuIiwibiIsIk9iamVjdCIsInByb3RvdHlwZSIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZnJvbSIsInRlc3QiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJUeXBlRXJyb3IiLCJfbm9uSXRlcmFibGVSZXN0IiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsIm1lbW8iLCJnZXRUYXJnZXQiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJzdHlsZXNJbkRvbSIsImdldEluZGV4QnlJZGVudGlmaWVyIiwiaWRlbnRpZmllciIsInJlc3VsdCIsIm1vZHVsZXNUb0RvbSIsIm9wdGlvbnMiLCJpZENvdW50TWFwIiwiaWRlbnRpZmllcnMiLCJiYXNlIiwiY291bnQiLCJpbmRleCIsIm9iaiIsImNzcyIsIm1lZGlhIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRTdHlsZSIsImluc2VydFN0eWxlRWxlbWVudCIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsImF0dHJpYnV0ZXMiLCJub25jZSIsImtleXMiLCJmb3JFYWNoIiwia2V5Iiwic2V0QXR0cmlidXRlIiwiaW5zZXJ0IiwiRXJyb3IiLCJhcHBlbmRDaGlsZCIsInRleHRTdG9yZSIsInJlcGxhY2VUZXh0IiwicmVwbGFjZW1lbnQiLCJmaWx0ZXIiLCJCb29sZWFuIiwiYXBwbHlUb1NpbmdsZXRvblRhZyIsInJlbW92ZSIsInN0eWxlU2hlZXQiLCJjc3NUZXh0IiwiY3NzTm9kZSIsImNyZWF0ZVRleHROb2RlIiwiY2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwbHlUb1RhZyIsInJlbW92ZUF0dHJpYnV0ZSIsImZpcnN0Q2hpbGQiLCJzaW5nbGV0b24iLCJzaW5nbGV0b25Db3VudGVyIiwidXBkYXRlIiwic3R5bGVJbmRleCIsImJpbmQiLCJwYXJlbnROb2RlIiwicmVtb3ZlU3R5bGVFbGVtZW50IiwibmV3T2JqIiwiYWxsIiwiYXRvYiIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaW5kZXgiLCJzcGxpY2UiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJ1bmRlZmluZWQiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwiZ2V0dGVyIiwiX19lc01vZHVsZSIsImQiLCJhIiwiZGVmaW5pdGlvbiIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInByb3AiLCJoYXNPd25Qcm9wZXJ0eSIsInRtcCIsImlubmVySFRNTCIsImNvbnRhaW5lciIsImNsb3NlTWVzc2FnZSIsImRpc3BsYXkiLCJzdXBwb3J0ZWRBUEkiLCJhcGlIYW5kbGVyIiwiYXBpIiwicGFyYW1zIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwiY29uZmlnIiwidXNlQW5pbWF0aW9ucyIsImNsYXNzTGlzdCIsImFkZCIsInVzZURhcmtUaGVtZSIsIm1lc3NhZ2UiLCJ1c2VDb29raWVzIiwiY29va2llIiwibWF0Y2giLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImRhdGUiLCJEYXRlIiwic2V0VGltZSIsImdldFRpbWUiLCJkYXlzIiwiZXhwaXJlcyIsInRvR01UU3RyaW5nIiwidXNlcnMiLCJyYW5kb21Vc2VycyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImhyZWYiLCJlcnJvciIsImZsb2F0TGVmdCIsInNob3dNZXNzYWdlQWx3YXlzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJ3YXJuIiwiZ2xvYmFsT2JqZWN0IiwicXVldWUiLCJxIiwiY29uZmlndXJhdGlvbnMiLCJhcHAiXSwibWFwcGluZ3MiOiJ1RkFHSUEsRSxNQUEwQixHQUE0QixLQUMxREEsRUFBd0JDLEtBQUssQ0FBQ0MsRUFBT0MsR0FBSSwyRkFFekNILEVBQXdCQyxLQUFLLENBQUNDLEVBQU9DLEdBQUksKzhGQUFnOUYsR0FBRyxDQUFDLFFBQVUsRUFBRSxRQUFVLENBQUMscUNBQXFDLE1BQVEsR0FBRyxTQUFXLGs3Q0FBazdDLGVBQWlCLENBQUMsNGlHQUE0aUcsV0FBYSxNQUU1a1AsVyxRQ0FBRCxFQUFPRSxRQUFVLFNBQVVDLEdBQ3pCLElBQUlDLEVBQU8sR0F1RFgsT0FyREFBLEVBQUtDLFNBQVcsV0FDZCxPQUFPQyxLQUFLQyxLQUFJLFNBQVVDLEdBQ3hCLElBQUlDLEVBQVVOLEVBQXVCSyxHQUVyQyxPQUFJQSxFQUFLLEdBQ0EsVUFBVUUsT0FBT0YsRUFBSyxHQUFJLE1BQU1FLE9BQU9ELEVBQVMsS0FHbERBLEtBQ05FLEtBQUssS0FLVlAsRUFBS1EsRUFBSSxTQUFVQyxFQUFTQyxFQUFZQyxHQUNmLGlCQUFaRixJQUVUQSxFQUFVLENBQUMsQ0FBQyxLQUFNQSxFQUFTLE1BRzdCLElBQUlHLEVBQXlCLEdBRTdCLEdBQUlELEVBQ0YsSUFBSyxJQUFJSCxFQUFJLEVBQUdBLEVBQUlOLEtBQUtXLE9BQVFMLElBQUssQ0FFcEMsSUFBSVgsRUFBS0ssS0FBS00sR0FBRyxHQUVQLE1BQU5YLElBQ0ZlLEVBQXVCZixJQUFNLEdBS25DLElBQUssSUFBSWlCLEVBQUssRUFBR0EsRUFBS0wsRUFBUUksT0FBUUMsSUFBTSxDQUMxQyxJQUFJVixFQUFPLEdBQUdF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b3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA2MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQ29udGFpbmVyICovXFxuLnRsZ2N7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwMjtcXG4gIGJvdHRvbTogMDsgcmlnaHQ6IDA7IGxlZnQ6IGF1dG87IHRvcDogYXV0bztcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLyogTWVzc2FnZSBhYm92ZSBpY29uICovXFxuLnRsZ2MgLnRsZ217XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE0cHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCByZ2JhKDcwLDcwLDcwLC4yNSk7XFxuICBwYWRkaW5nOiAxNXB4IDIwcHg7IHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogIzUyNTI1MjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG5cXHRhbmltYXRpb24tZGVsYXk6IC41cztcXG59XFxuXFxuLyogQ2xvc2UgYnV0dG9uICovXFxuLnRsZ2MgLnRsZ20gc3BhbnsgXFxuXFx0Y29udGVudDogJyc7IFxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuXFx0d2lkdGg6IDEwcHg7IFxcblxcdGhlaWdodDogMTBweDsgXFxuXFx0cmlnaHQ6IDE1cHg7IFxcblxcdHRvcDogMTVweDsgXFxuXFx0bGVmdDogYXV0bzsgXFxufVxcbi50bGdjIC50bGdtIHNwYW46aG92ZXJ7IGN1cnNvcjogcG9pbnRlcjsgfVxcbi50bGdjIC50bGdtIHNwYW46OmFmdGVyeyBcXG5cXHRjb250ZW50OiAnJzsgXFxuXFx0cG9zaXRpb246IGFic29sdXRlOyBcXG5cXHR0b3A6IDA7IFxcblxcdGxlZnQ6IDA7IFxcblxcdHdpZHRoOiAxMHB4OyBcXG5cXHRoZWlnaHQ6IDJweDsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzsgXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBcXG59XFxuLnRsZ2MgLnRsZ20gc3Bhbjo6YmVmb3JleyBcXG5cXHRjb250ZW50OiAnJzsgXFxuXFx0cG9zaXRpb246IGFic29sdXRlOyBcXG5cXHR0b3A6IDA7IFxcblxcdGxlZnQ6IDA7IFxcblxcdHdpZHRoOiAxMHB4OyBcXG5cXHRoZWlnaHQ6IDJweDsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzsgXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgXFxufVxcblxcbi8qIEJ1dHRvbiAqL1xcbi50bGdjIC50ZWxld2lkZ2V0LWJ1dHRvbntcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGxpbmVhcjtcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IC41cztcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG4udGxnYyAudGVsZXdpZGdldC1idXR0b246OmJlZm9yZXsgXFxuICAgIGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggOHB4IHJnYmEoNzAsNzAsNzAsLjI1KTtcXG59XFxuLnRsZ2MgLnRlbGV3aWRnZXQtYnV0dG9uIGltZ3sgXFxuICAgIHotaW5kZXg6IDEwMDAxO1xcbiAgICB0cmFuc2l0aW9uOiAuMXMgbGluZWFyO1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IFxcbn1cXG4udGxnYyAudGVsZXdpZGdldC1idXR0b246aG92ZXIgaW1ne1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogUE9TSVRJT04gVEhFIFdJREdFVCBUTyBUSEUgTEVGVCAqL1xcbi50bGdjLmxlZnR7IGxlZnQ6IDA7IHdpZHRoOiBhdXRvOyByaWdodDogaW5pdGlhbDsgfVxcbi50bGdjLmxlZnQgLnRlbGV3aWRnZXQtYnV0dG9ueyBmbG9hdDogbGVmdDsgfVxcblxcbi8qIFNIT1cgV0lER0VUIE9OIE1PQklMRVMgRElWSUNFUyAqL1xcbi50bGdjLnNob3ctbWVzc2FnZS1hbHdheXMgLnRsZ217IGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyogRGFyayB0aGVtZSAqL1xcbi50bGdjLmRhcmsgLnRsZ217XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgYmFja2dyb3VuZC1jb2xvcjogIzA4MTEzMTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggcmdiYSg3MCw3MCw3MCwuMjUpO1xcbiAgICBjb2xvcjogI2VlZWVlZTtcXG59XFxuLnRsZ2MuZGFyayAudGVsZXdpZGdldC1idXR0b246OmJlZm9yZXsgXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggOHB4IHJnYmEoNzAsNzAsNzAsLjI1KTtcXG59XFxuLnRsZ2MuZGFyayAudGxnbSBzcGFuOjphZnRlcnsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjsgXFxufVxcbi50bGdjLmRhcmsgLnRsZ20gc3Bhbjo6YmVmb3JleyBcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyOyBcXG59XFxuXFxuLyogVGFibGV0cyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSBcXG57XFxuICAgIC50bGdjIC50bGdtIHNwYW57IHJpZ2h0OiAxMHB4O31cXG4gICAgLnRsZ2MgLnRsZ217IGRpc3BsYXk6IGJsb2NrOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cXG4vKiBDbGFzc2VzIGZvciBhbmltYXRpb25zICovXFxuLnpvb21JbiB7IGFuaW1hdGlvbi1uYW1lOiB6b29tSW47IH1cXG4uc2xpZGUgeyBhbmltYXRpb24tbmFtZTogc2xpZGU7IH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvdmlld3MvbWVzc2FnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUEsY0FBYztBQUNkO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxTQUFTO0VBQzFDLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUEsdUJBQXVCO0FBQ3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWUsRUFBRSxzQkFBc0I7RUFDdkMsb0NBQW9DO0VBQ3BDLDBDQUEwQztFQUMxQyxrQkFBa0IsRUFBRSxtQkFBbUI7RUFDdkMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0NBQ1osYUFBYTtDQUNiLHVCQUF1QjtDQUN2Qix5QkFBeUI7Q0FDekIsb0JBQW9CO0FBQ3JCOztBQUVBLGlCQUFpQjtBQUNqQjtDQUNDLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0NBQ1gsU0FBUztDQUNULFVBQVU7QUFDWDtBQUNBLHdCQUF3QixlQUFlLEVBQUU7QUFDekM7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixPQUFPO0NBQ1AsV0FBVztDQUNYLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsd0JBQXdCO0FBQ3pCO0FBQ0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixPQUFPO0NBQ1AsV0FBVztDQUNYLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIseUJBQXlCO0FBQzFCOztBQUVBLFdBQVc7QUFDWDtJQUNJLFdBQVc7SUFDWCxXQUFXLEVBQUUsWUFBWTtJQUN6QixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWEsRUFBRSx1QkFBdUIsRUFBRSxtQkFBbUI7SUFDM0Qsc0JBQXNCO0NBQ3pCLHVCQUF1QjtDQUN2Qix5QkFBeUI7QUFDMUI7QUFDQTtJQUNJLFdBQVcsRUFBRSxrQkFBa0I7SUFDL0Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXLEVBQUUsWUFBWTtJQUN6QiwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsb0JBQW9CLEVBQUUscUJBQXFCO0lBQzNDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7O0FBRUEsb0NBQW9DO0FBQ3BDLFlBQVksT0FBTyxFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUU7QUFDbEQsK0JBQStCLFdBQVcsRUFBRTs7QUFFNUMsbUNBQW1DO0FBQ25DLGlDQUFpQyxjQUFjLEVBQUU7O0FBRWpELGVBQWU7QUFDZjtJQUNJLGVBQWUsRUFBRSx5QkFBeUI7SUFDMUMsMENBQTBDO0lBQzFDLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDBDQUEwQztBQUM5QztBQUNBO0NBQ0MseUJBQXlCO0FBQzFCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUEsWUFBWTtBQUNaOztJQUVJLGtCQUFrQixXQUFXLENBQUM7SUFDOUIsYUFBYSxjQUFjLEVBQUU7QUFDakM7O0FBRUE7SUFDSTtRQUNJLG9CQUFvQjtRQUNwQixVQUFVO0lBQ2Q7QUFDSjtBQUNBO0lBQ0k7UUFDSSwyQkFBMkI7UUFDM0IsVUFBVTtJQUNkO0FBQ0o7O0FBRUEsMkJBQTJCO0FBQzNCLFVBQVUsc0JBQXNCLEVBQUU7QUFDbEMsU0FBUyxxQkFBcUIsRUFBRVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA2MDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuLyogQ29udGFpbmVyICovXFxuLnRsZ2N7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxMDAwMjtcXG4gIGJvdHRvbTogMDsgcmlnaHQ6IDA7IGxlZnQ6IGF1dG87IHRvcDogYXV0bztcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLyogTWVzc2FnZSBhYm92ZSBpY29uICovXFxuLnRsZ2MgLnRsZ217XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmb250LXNpemU6IDE0cHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxuICBib3gtc2hhZG93OiAxcHggMnB4IDhweCByZ2JhKDcwLDcwLDcwLC4yNSk7XFxuICBwYWRkaW5nOiAxNXB4IDIwcHg7IHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBjb2xvcjogIzUyNTI1MjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgbWF4LXdpZHRoOiA0NTBweDtcXG4gIHdpZHRoOiBhdXRvO1xcblxcdGRpc3BsYXk6IG5vbmU7XFxuXFx0YW5pbWF0aW9uLWR1cmF0aW9uOiAuNXM7XFxuXFx0YW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcXG5cXHRhbmltYXRpb24tZGVsYXk6IC41cztcXG59XFxuXFxuLyogQ2xvc2UgYnV0dG9uICovXFxuLnRsZ2MgLnRsZ20gc3BhbnsgXFxuXFx0Y29udGVudDogJyc7IFxcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXFxuXFx0d2lkdGg6IDEwcHg7IFxcblxcdGhlaWdodDogMTBweDsgXFxuXFx0cmlnaHQ6IDE1cHg7IFxcblxcdHRvcDogMTVweDsgXFxuXFx0bGVmdDogYXV0bzsgXFxufVxcbi50bGdjIC50bGdtIHNwYW46aG92ZXJ7IGN1cnNvcjogcG9pbnRlcjsgfVxcbi50bGdjIC50bGdtIHNwYW46OmFmdGVyeyBcXG5cXHRjb250ZW50OiAnJzsgXFxuXFx0cG9zaXRpb246IGFic29sdXRlOyBcXG5cXHR0b3A6IDA7IFxcblxcdGxlZnQ6IDA7IFxcblxcdHdpZHRoOiAxMHB4OyBcXG5cXHRoZWlnaHQ6IDJweDsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzsgXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyBcXG59XFxuLnRsZ2MgLnRsZ20gc3Bhbjo6YmVmb3JleyBcXG5cXHRjb250ZW50OiAnJzsgXFxuXFx0cG9zaXRpb246IGFic29sdXRlOyBcXG5cXHR0b3A6IDA7IFxcblxcdGxlZnQ6IDA7IFxcblxcdHdpZHRoOiAxMHB4OyBcXG5cXHRoZWlnaHQ6IDJweDsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzk3OTc5NzsgXFxuXFx0dHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTsgXFxufVxcblxcbi8qIEJ1dHRvbiAqL1xcbi50bGdjIC50ZWxld2lkZ2V0LWJ1dHRvbntcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcbiAgICBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogLjFzIGxpbmVhcjtcXG5cXHRhbmltYXRpb24tZHVyYXRpb246IC41cztcXG5cXHRhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xcbn1cXG4udGxnYyAudGVsZXdpZGdldC1idXR0b246OmJlZm9yZXsgXFxuICAgIGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgei1pbmRleDogMTAwMDA7XFxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggOHB4IHJnYmEoNzAsNzAsNzAsLjI1KTtcXG59XFxuLnRsZ2MgLnRlbGV3aWRnZXQtYnV0dG9uIGltZ3sgXFxuICAgIHotaW5kZXg6IDEwMDAxO1xcbiAgICB0cmFuc2l0aW9uOiAuMXMgbGluZWFyO1xcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDsgcGFkZGluZzogMCAhaW1wb3J0YW50O1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7IFxcbn1cXG4udGxnYyAudGVsZXdpZGdldC1idXR0b246aG92ZXIgaW1ne1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLyogUE9TSVRJT04gVEhFIFdJREdFVCBUTyBUSEUgTEVGVCAqL1xcbi50bGdjLmxlZnR7IGxlZnQ6IDA7IHdpZHRoOiBhdXRvOyByaWdodDogaW5pdGlhbDsgfVxcbi50bGdjLmxlZnQgLnRlbGV3aWRnZXQtYnV0dG9ueyBmbG9hdDogbGVmdDsgfVxcblxcbi8qIFNIT1cgV0lER0VUIE9OIE1PQklMRVMgRElWSUNFUyAqL1xcbi50bGdjLnNob3ctbWVzc2FnZS1hbHdheXMgLnRsZ217IGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLyogRGFyayB0aGVtZSAqL1xcbi50bGdjLmRhcmsgLnRsZ217XFxuICAgIGZvbnQtc2l6ZTogMTRweDsgYmFja2dyb3VuZC1jb2xvcjogIzA4MTEzMTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDJweCA4cHggcmdiYSg3MCw3MCw3MCwuMjUpO1xcbiAgICBjb2xvcjogI2VlZWVlZTtcXG59XFxuLnRsZ2MuZGFyayAudGVsZXdpZGdldC1idXR0b246OmJlZm9yZXsgXFxuICAgIGJveC1zaGFkb3c6IDFweCAycHggOHB4IHJnYmEoNzAsNzAsNzAsLjI1KTtcXG59XFxuLnRsZ2MuZGFyayAudGxnbSBzcGFuOjphZnRlcnsgXFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2UyZTJlMjsgXFxufVxcbi50bGdjLmRhcmsgLnRsZ20gc3Bhbjo6YmVmb3JleyBcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlMmUyOyBcXG59XFxuXFxuLyogVGFibGV0cyAqL1xcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSBcXG57XFxuICAgIC50bGdjIC50bGdtIHNwYW57IHJpZ2h0OiAxMHB4O31cXG4gICAgLnRsZ2MgLnRsZ217IGRpc3BsYXk6IGJsb2NrOyB9XFxufVxcblxcbkBrZXlmcmFtZXMgem9vbUluIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC4yKTtcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBzbGlkZSB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xcbiAgICAgICAgb3BhY2l0eTogMDtcXG4gICAgfVxcbn1cXG5cXG4vKiBDbGFzc2VzIGZvciBhbmltYXRpb25zICovXFxuLnpvb21JbiB7IGFuaW1hdGlvbi1uYW1lOiB6b29tSW47IH1cXG4uc2xpZGUgeyBhbmltYXRpb24tbmFtZTogc2xpZGU7IH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lc3NhZ2UuY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IGh0bWwgZnJvbSAnLi9tZXNzYWdlLmh0bWwnO1xuaW1wb3J0ICcuL21lc3NhZ2UuY3NzJztcblxubGV0IGJvZHk7XG5sZXQgdG1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50bXAuaW5uZXJIVE1MID0gaHRtbDtcbmxldCBjb250YWluZXIgPSB0bXAucXVlcnlTZWxlY3RvcignLnRsZ2MnKTtcblxuLyogSW5pdGlhbCBjb25maWd1cmF0aW9uIGZvciB0aGUgd2lkZ2V0ICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlnKGNvbmZpZykgeyAgICBcblx0Ly8gQWRkIGFuaW1hdGlvbnMgaWYgdGhlIG9wdGlvbiBpcyBlbmFibGVkXG5cdGlmKGNvbmZpZy51c2VBbmltYXRpb25zKSB7XG5cdFx0Y29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50bGdtJykuY2xhc3NMaXN0LmFkZCgnc2xpZGUnKTtcblx0XHRjb250YWluZXIucXVlcnlTZWxlY3RvcignLnRlbGV3aWRnZXQtYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnem9vbUluJyk7XG5cdH1cblxuXHQvLyBBZGQgZGFyayB0aGVtZSBjbGFzc2VzIGlmIHRoZSBvcHRpb24gaXMgZW5hYmxlZFxuXHRpZiAoY29uZmlnLnVzZURhcmtUaGVtZSkge1xuXHRcdGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG5cdH1cblx0XG4gIC8vIFdlbGNvbWUgbWVzc2FnZVxuICBpZihjb25maWcubWVzc2FnZSkge1xuICAgIC8vIElmIHdlIHVzZSBjb29raWVzLCBjaGVjayB0byBzZWUgaWYgdGhlIGNvb2tpZSBleGlzdHMgYWxyZWFkeVxuICAgIGlmKGNvbmZpZy51c2VDb29raWVzICYmIGRvY3VtZW50LmNvb2tpZS5tYXRjaCgvXiguKjspP1xccypzaG93bWVzc2FnZVxccyo9XFxzKlteO10rKC4qKT8kLykgPT0gbnVsbCApIHtcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGxnbScpLmlubmVySFRNTCA9IGAke2NvbmZpZy5tZXNzYWdlfSA8c3Bhbj48L3NwYW4+YDtcbiAgICAgIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGNsb3NlIHRoZSBtZXNzYWdlIG9uIHRoZSB3aWRnZXRcbiAgICAgIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGxnbSBzcGFuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1lc3NhZ2UpO1xuICAgICAgLy8gQ3JlYXRlIHRoZSBjb29raWVcbiAgICAgIGNyZWF0ZUNvb2tpZSgnc2hvd21lc3NhZ2UnLCAnbm8nLCAzKTtcbiAgICAgIC8vIFNob3cgdGhlIG1lc3NhZ2UgaWYgd2UncmUgbm90IHVzaW5nIGNvb2tpZXNcbiAgICB9IGVsc2UgaWYgKCFjb25maWcudXNlQ29va2llcykge1xuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50bGdtJykuaW5uZXJIVE1MID0gYCR7Y29uZmlnLm1lc3NhZ2V9IDxzcGFuPjwvc3Bhbj5gO1xuICAgICAgLy8gRXZlbnQgbGlzdGVuZXIgdG8gY2xvc2UgdGhlIG1lc3NhZ2Ugb24gdGhlIHdpZGdldFxuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50bGdtIHNwYW4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTWVzc2FnZSk7XG4gICAgICAvLyBSZW1vdmUgdGhlIGRpdiB0aGF0IGNvbnRhaW5zIHRoZSB3ZWxjb21lIG1lc3NhZ2UgaWYgd2UncmUgdXNpbmcgdGhlIGNvb2tpZSBhbmQgaXQgYWxyZWFkeSBleGlzdHNcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50bGdtJykucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gd2VsY29tZSBtZXNzYWdlLCByZW1vdmUgdGhhdCBkaXZcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIucXVlcnlTZWxlY3RvcignLnRsZ20nKS5yZW1vdmUoKTtcbiAgfVxuXHRcdFxuXHQvLyBBZGQgdGVsZWdyYW0gbGlua1xuICAgIGlmKGNvbmZpZy51c2Vycykge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgcmFuZG9tVXNlcnMgPSBjb25maWcudXNlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29uZmlnLnVzZXJzLmxlbmd0aCldO1xuXHRcdFx0XG5cdFx0XHRjb250YWluZXIucXVlcnlTZWxlY3RvcignLnRlbGV3aWRnZXQtYnV0dG9uJykuaHJlZiA9IGBodHRwczovL3QubWUvJHtyYW5kb21Vc2Vyc31gO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCd0ZWxld2lkZ2V0IC0+IGNhbm5vdCBzZWxlY3QgdXNlcnMnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTaG93IHRoZSB3aWRnZXQgb24gdGhlIGxlZnQgc2lkZSBvZiB0aGUgcGFnZVxuICAgIGlmKGNvbmZpZy5mbG9hdExlZnQpIHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG5cdH1cblxuXHQvLyBTaG93IHRoZSB3aWRnZXQgbWVzc2FnZSBvbiBtb2JpbGUgZGV2aWNlc1xuICBpZihjb25maWcuc2hvd01lc3NhZ2VBbHdheXMpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2hvdy1tZXNzYWdlLWFsd2F5cycpO1xuXHR9XG5cblx0Ly8gQWRkIHRoZSB3aWRnZXQgdG8gdGhlIGJvZHkgb2YgeW91ciBwYWdlXG4gIGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbi8qIENsb3NlIHdpZGdldCB3ZWxjb21lIG1lc3NhZ2UgKi9cbmV4cG9ydCBmdW5jdGlvbiBjbG9zZU1lc3NhZ2UoKSB7XG4gIGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcudGxnbScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbn1cblxuLyogRnVuY3Rpb24gdG8gY3JlYXRlIGEgY29va2llIHRvIHNob3cgdGhlIG1lc3NhZ2Ugb25seSBvbmNlIGV2ZXJ5IGRheSAqL1xuLyogVGFrZW4gZnJvbSBoZXJlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzY1NjE2ODcvaG93LWNhbi1pLXNldC1hLWNvb2tpZS10by1leHBpcmUtYWZ0ZXIteC1kYXlzLXdpdGgtdGhpcy1jb2RlLWktaGF2ZSAqL1xuZnVuY3Rpb24gY3JlYXRlQ29va2llKG5hbWUsIHZhbHVlLCBkYXlzKSB7XG4gIGNvbnNvbGUubG9nKCdjcmVhdGluZyBjb29raWUnKTtcblxuICBsZXQgZGF0ZTtcbiAgbGV0IGV4cGlyZXM7XG5cbiAgaWYgKGRheXMpIHtcbiAgICBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKGRheXMqMjQqNjAqNjAqMTAwMCkpO1xuICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIitkYXRlLnRvR01UU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgZXhwaXJlcyA9IFwiXCI7XG4gIH1cblxuICBkb2N1bWVudC5jb29raWUgPSBuYW1lK1wiPVwiK3ZhbHVlK2V4cGlyZXMrXCI7IHBhdGg9L1wiO1xufSIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInRsZ2NcXFwiPiA8ZGl2IGNsYXNzPVxcXCJ0bGdtXFxcIj48L2Rpdj4gPGEgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHJlbD1cXFwibm9mb2xsb3dcXFwiIGNsYXNzPVxcXCJ0ZWxld2lkZ2V0LWJ1dHRvblxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9tYXNjYXJlbGwvdGVsZXdpZGdldC9hc3NldHMvdGVsZWdyYW0uc3ZnXFxcIiBhbHQ9XFxcIlRlbGVXaWRnZXQgSWNvblxcXCIvPjwvYT4gPC9kaXY+IFwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL3ZpZXdzL21lc3NhZ2UnXG5cbmNvbnN0IHN1cHBvcnRlZEFQSSA9IFsnY29uZmlnJ10gLy8gZW5saXN0IGFsbCBtZXRob2RzIHN1cHBvcnRlZCBieSBBUEkgKGUuZy4gYG13KCdldmVudCcsICd1c2VyLWxvZ2luJyk7YClcblxuLypcbiAgICBUaGUgbWFpbiBlbnRyeSBvZiB0aGUgYXBwbGljYXRpb25cbiovXG5mdW5jdGlvbiBhcHAod2luZG93KSB7XG4gIC8vIHNldCBkZWZhdWx0IGNvbmZpZ3VyYXRpb25zXG4gIGxldCBjb25maWd1cmF0aW9ucyA9IHtcbiAgICBtZXNzYWdlOiBmYWxzZSxcbiAgICB1c2VyczogZmFsc2UsXG4gICAgZmxvYXRMZWZ0OiBmYWxzZSxcbiAgICBzaG93TWVzc2FnZUFsd2F5czogZmFsc2UsXG4gICAgdXNlQ29va2llczogZmFsc2UsXG4gICAgdXNlQW5pbWF0aW9uczogZmFsc2UsXG4gICAgdXNlRGFya1RoZW1lOiBmYWxzZSxcbiAgfVxuXG4gIC8vIGFsbCBtZXRob2RzIHRoYXQgd2VyZSBjYWxsZWQgdGlsbCBub3cgYW5kIHN0b3JlZCBpbiBxdWV1ZVxuICAvLyBuZWVkcyB0byBiZSBjYWxsZWQgbm93IFxuICBsZXQgZ2xvYmFsT2JqZWN0ID0gd2luZG93W3dpbmRvd1snd3cnXV1cbiAgbGV0IHF1ZXVlID0gZ2xvYmFsT2JqZWN0LnFcbiAgaWYgKHF1ZXVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWV1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgYXBpSGFuZGxlcihxdWV1ZVtpXVswXSwgcXVldWVbaV1bMV0pXG4gICAgfVxuICB9XG5cbiAgLy8gb3ZlcnJpZGUgdGVtcG9yYXJ5ICh1bnRpbCB0aGUgYXBwIGxvYWRlZCkgaGFuZGxlclxuICAvLyBmb3Igd2lkZ2V0J3MgQVBJIGNhbGxzXG4gIGdsb2JhbE9iamVjdCA9IGFwaUhhbmRsZXJcbiAgZ2xvYmFsT2JqZWN0LmNvbmZpZ3VyYXRpb25zID0gY29uZmlndXJhdGlvbnNcbn1cblxuLypcbiAgICBNZXRob2QgdGhhdCBoYW5kbGVzIGFsbCBBUEkgY2FsbHNcbiovXG5mdW5jdGlvbiBhcGlIYW5kbGVyKGFwaSwgcGFyYW1zKSB7XG4gIGlmICghYXBpKSB0aHJvdyBFcnJvcignQVBJIG1ldGhvZCByZXF1aXJlZCcpXG4gICAgYXBpID0gYXBpLnRvTG93ZXJDYXNlKClcblxuICBpZiAoc3VwcG9ydGVkQVBJLmluZGV4T2YoYXBpKSA9PT0gLTEpIHRocm93IEVycm9yKGBNZXRob2QgJHthcGl9IGlzIG5vdCBzdXBwb3J0ZWRgKVxuXG4gIHN3aXRjaCAoYXBpKSB7XG4gICAgLy8gVE9ETzogYWRkIEFQSSBpbXBsZW1lbnRhdGlvblxuICAgIGNhc2UgJ2NvbmZpZyc6XG4gICAgICBjb25maWcocGFyYW1zKVxuICAgIGJyZWFrXG4gICAgZGVmYXVsdDpcbiAgICAgIGNvbnNvbGUud2FybihgTm8gaGFuZGxlciBkZWZpbmVkIGZvciAke2FwaX1gKVxuICB9XG59XG5cbmFwcCh3aW5kb3cpIl0sInNvdXJjZVJvb3QiOiIifQ==
