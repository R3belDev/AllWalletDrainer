(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    48312: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(57858);
        },
      ]);
    },
    69348: function (n, e, t) {
      "use strict";
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var r,
        o = t(186),
        i = t(57875),
        a = "md";
      function c(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function u() {
        var n,
          e,
          t =
            ((n = [
              "\n  font-size: ",
              ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ",
              " {\n    font-size: ",
              ";\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (u = function () {
            return t;
          }),
          t
        );
      }
      var l =
          (c((r = {}), a, { fontSize: "20px", fontSizeLg: "20px" }),
          c(r, "lg", { fontSize: "24px", fontSizeLg: "24px" }),
          c(r, "xl", { fontSize: "32px", fontSizeLg: "40px" }),
          c(r, "xxl", { fontSize: "48px", fontSizeLg: "64px" }),
          r),
        s = (0, o.ZP)(i.Z)
          .attrs({ bold: !0 })
          .withConfig({ componentId: "sc-4eb7e0a9-0" })
          .withConfig({ componentId: "sc-1ab7df28-0" })(
          u(),
          function (n) {
            var e = n.scale;
            return l[e || a].fontSize;
          },
          function (n) {
            return n.theme.mediaQueries.lg;
          },
          function (n) {
            var e = n.scale;
            return l[e || a].fontSizeLg;
          }
        );
      s.defaultProps = { as: "h2" };
      var d = s;
    },
    57086: function (n, e, t) {
      "use strict";
      var r = t(85893),
        o = (t(67294), t(76108));
      function i(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      e.Z = function (n) {
        return (0, r.jsx)(
          o.Z,
          (function (n) {
            for (
              var e = arguments,
                t = function (t) {
                  var r = null != e[t] ? e[t] : {},
                    o = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(r).filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable;
                      })
                    )),
                    o.forEach(function (e) {
                      i(n, e, r[e]);
                    });
                },
                r = 1;
              r < arguments.length;
              r++
            )
              t(r);
            return n;
          })({ viewBox: "0 0 24 24" }, n, {
            children: (0, r.jsx)("path", {
              d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z",
            }),
          })
        );
      };
    },
    22696: function (n, e, t) {
      "use strict";
      var r = t(85893),
        o = (t(67294), t(186)),
        i = t(69348),
        a = t(38270),
        c = t(73727);
      function u(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      e.Z = function (n) {
        var e = n.title,
          t = n.onDismiss,
          l = n.onBack,
          s = n.children,
          d = n.hideCloseButton,
          f = void 0 !== d && d,
          p = n.bodyPadding,
          m = void 0 === p ? "24px" : p,
          h = n.headerBackground,
          y = void 0 === h ? "transparent" : h,
          b = n.minWidth,
          v = void 0 === b ? "100%" : b,
          x = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, [
            "title",
            "onDismiss",
            "onBack",
            "children",
            "hideCloseButton",
            "bodyPadding",
            "headerBackground",
            "minWidth",
          ]),
          g = (0, o.Fg)();
        return (0, r.jsxs)(
          c.F0,
          (function (n) {
            for (
              var e = arguments,
                t = function (t) {
                  var r = null != e[t] ? e[t] : {},
                    o = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(r).filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable;
                      })
                    )),
                    o.forEach(function (e) {
                      u(n, e, r[e]);
                    });
                },
                r = 1;
              r < arguments.length;
              r++
            )
              t(r);
            return n;
          })({ minWidth: v }, x, {
            children: [
              (0, r.jsxs)(c.xB, {
                background: (0, a.Z)("colors.".concat(y), y)(g),
                children: [
                  (0, r.jsxs)(c.r6, {
                    children: [
                      l && (0, r.jsx)(c.vy, { onBack: l }),
                      (0, r.jsx)(i.Z, { children: e }),
                    ],
                  }),
                  !f && (0, r.jsx)(c.ol, { onDismiss: t }),
                ],
              }),
              (0, r.jsx)(c.fe, { p: m, children: s }),
            ],
          })
        );
      };
    },
    73727: function (n, e, t) {
      "use strict";
      t.d(e, {
        vy: function () {
          return j;
        },
        fe: function () {
          return x;
        },
        ol: function () {
          return g;
        },
        F0: function () {
          return w;
        },
        xB: function () {
          return b;
        },
        r6: function () {
          return v;
        },
      });
      var r = t(85893),
        o = (t(67294), t(186)),
        i = t(80613),
        a = t(14795),
        c = t(76108);
      function u(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var l = function (n) {
          return (0, r.jsx)(
            c.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        u(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 24 24" }, n, {
              children: (0, r.jsx)("path", {
                d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z",
              }),
            })
          );
        },
        s = t(44665),
        d = t(684);
      function f(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function p() {
        var n = f([
          "\n  align-items: center;\n  background: ",
          ";\n  // border-bottom: 1px solid ",
          ";\n  display: flex;\n  padding: 24px;\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        var n = f(["\n  align-items: center;\n  flex: 1;\n"]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        var n = f([
          "\n  flex-direction: column;\n  max-height: 100vh;\n  max-height: calc(var(--vh, 1vh) * 90);\n  overflow-y: auto;\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        var n = f([
          "\n  position: fixed;\n  top: 0px;\n  overflow: hidden;\n  background: ",
          ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ",
          ";\n  // border-radius: 32px;\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  max-height: calc(var(--vh, 1vh) * 100);\n  z-index: ",
          ";\n\n  ",
          " {\n    width: auto;\n    min-width: ",
          ";\n    max-width: 100%;\n  }\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      var b = o.ZP.div
          .withConfig({ componentId: "sc-1dbed346-0" })
          .withConfig({ componentId: "sc-c541f1d5-0" })(
          p(),
          function (n) {
            return n.background || "transparent";
          },
          function (n) {
            return n.theme.colors.cardBorder;
          }
        ),
        v = (0, o.ZP)(i.Z)
          .withConfig({ componentId: "sc-1dbed346-1" })
          .withConfig({ componentId: "sc-c541f1d5-1" })(m()),
        x = (0, o.ZP)(i.Z)
          .withConfig({ componentId: "sc-1dbed346-2" })
          .withConfig({ componentId: "sc-c541f1d5-2" })(h()),
        g = function (n) {
          var e = n.onDismiss;
          return (0, r.jsx)(d.Z, {
            scale: "sm",
            height: 32,
            width: 32,
            variant: "text",
            onClick: e,
            "aria-label": "Close the dialog",
            children: (0, r.jsx)(s.Z, {
              width: 32,
              height: 32,
              color: "primary",
            }),
          });
        },
        j = function (n) {
          var e = n.onBack;
          return (0, r.jsx)(d.Z, {
            scale: "sm",
            variant: "text",
            onClick: e,
            "area-label": "go back",
            mr: "8px",
            children: (0, r.jsx)(l, {
              width: 32,
              height: 32,
              color: "primary",
            }),
          });
        },
        w = (0, o.ZP)(a.Z)
          .withConfig({ componentId: "sc-1dbed346-3" })
          .withConfig({ componentId: "sc-c541f1d5-3" })(
          y(),
          function (n) {
            return n.theme.modal.background;
          },
          function (n) {
            return n.theme.colors.cardBorder;
          },
          function (n) {
            return n.theme.zIndices.modal;
          },
          function (n) {
            return n.theme.mediaQueries.xs;
          },
          function (n) {
            return n.minWidth;
          }
        );
    },
    57858: function (n, e, t) {
      "use strict";
      t.r(e),
        t.d(e, {
          default: function () {
            return Ks;
          },
        });
      var r,
        o = t(85893),
        i = t(67294),
        a = t(186),
        c = t(5765),
        u = JSON.parse(
          '[{"inputs":[],"name":"WETH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountIn","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"reserveIn","type":"uint256"},{"internalType":"uint256","name":"reserveOut","type":"uint256"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsIn","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"name":"quote","outputs":[{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETHSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermitSupportingFeeOnTransferTokens","outputs":[{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapETHForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETHSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSupportingFeeOnTransferTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"},{"internalType":"uint256","name":"amountInMax","type":"uint256"},{"internalType":"address[]","name":"path","type":"address[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapTokensForExactTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"}]'
        ),
        l = t(71114),
        s = t(2593),
        d = t(52353);
      function f(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var p,
        m,
        h,
        y =
          (f(
            (r = {}),
            c.a_.MAINNET,
            "0x10ED43C718714eb63d5aA57B78B54704E256024E"
          ),
          f(r, c.a_.TESTNET, "0xD99D1c33F9fC3444f8101754aBC46c52416550D1"),
          r),
        b =
          (f((p = {}), c.a_.MAINNET, [
            d.ke.wbnb,
            d.ke.cake,
            d.ke.busd,
            d.ke.usdt,
            d.ke.btcb,
            d.ke.eth,
            d.ke.usdc,
          ]),
          f(p, c.a_.TESTNET, [d.ux.wbnb, d.ux.cake, d.ux.busd]),
          p),
        v = f({}, c.a_.MAINNET, {}),
        x = f({}, c.a_.MAINNET, {}),
        g =
          (f((m = {}), c.a_.MAINNET, [d.ke.busd, d.ke.cake, d.ke.btcb]),
          f(m, c.a_.TESTNET, [d.ux.wbnb, d.ux.cake, d.ux.busd]),
          m),
        j =
          (f((h = {}), c.a_.MAINNET, [
            d.ke.wbnb,
            d.ke.dai,
            d.ke.busd,
            d.ke.usdt,
          ]),
          f(h, c.a_.TESTNET, [d.ux.wbnb, d.ux.cake, d.ux.busd]),
          f({}, c.a_.MAINNET, [
            [d.ke.cake, d.ke.wbnb],
            [d.ke.busd, d.ke.usdt],
            [d.ke.dai, d.ke.usdt],
          ]),
          c.QA.BigInt(0)),
        w = c.QA.BigInt(10),
        O = c.QA.BigInt(1e4),
        C = new c.gG(c.QA.BigInt(1), O),
        k = new c.gG(c.QA.BigInt(100), O),
        I = new c.gG(c.QA.BigInt(300), O),
        T = new c.gG(c.QA.BigInt(500), O),
        P = new c.gG(c.QA.BigInt(1e3), O),
        S = new c.gG(c.QA.BigInt(1500), O),
        Z = c.QA.exponentiate(w, c.QA.BigInt(16)),
        A = new c.gG(c.QA.BigInt(50), O),
        E = new c.gG("0"),
        N = new c.gG("1"),
        M = new c.gG(c.QA.BigInt(25), O),
        L = N.subtract(M),
        D = (s.O$.from(5e5), t(45332)),
        U = t(52394);
      function z(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function B(n, e, t) {
        return (0, D.uN)(y[l.K], u, (0, D.TY)(e, t));
      }
      function R(n) {
        var e,
          t,
          r = n
            ? N.subtract(
                n.route.pairs.reduce(function (n) {
                  return n.multiply(L);
                }, N)
              )
            : void 0,
          o = n && r ? n.priceImpact.subtract(r) : void 0;
        return {
          priceImpactWithoutFee: o
            ? new c.gG(
                null == o ? void 0 : o.numerator,
                null == o ? void 0 : o.denominator
              )
            : void 0,
          realizedLPFee:
            r &&
            n &&
            ((e = n.inputAmount),
            (
              null != (t = c.dt) &&
              "undefined" != typeof Symbol &&
              t[Symbol.hasInstance]
                ? t[Symbol.hasInstance](e)
                : e instanceof t
            )
              ? new c.dt(
                  n.inputAmount.token,
                  r.multiply(n.inputAmount.raw).quotient
                )
              : c.ih.ether(r.multiply(n.inputAmount.raw).quotient)),
        };
      }
      function F(n, e) {
        var t,
          r,
          o = ((t = e), new c.gG(c.QA.BigInt(t), O));
        return (
          z((r = {}), U.gN.INPUT, null == n ? void 0 : n.maximumAmountIn(o)),
          z(r, U.gN.OUTPUT, null == n ? void 0 : n.minimumAmountOut(o)),
          r
        );
      }
      function W(n) {
        return (null == n ? void 0 : n.lessThan(S))
          ? (null == n ? void 0 : n.lessThan(T))
            ? (null == n ? void 0 : n.lessThan(I))
              ? (null == n ? void 0 : n.lessThan(k))
                ? 0
                : 1
              : 2
            : 3
          : 4;
      }
      function $(n, e) {
        return n
          ? e
            ? ""
                .concat(n.executionPrice.invert().toSignificant(6), " ")
                .concat(n.inputAmount.currency.symbol, " / ")
                .concat(n.outputAmount.currency.symbol)
            : ""
                .concat(n.executionPrice.toSignificant(6), " ")
                .concat(n.outputAmount.currency.symbol, " / ")
                .concat(n.inputAmount.currency.symbol)
          : "";
      }
      var H = t(57875),
        G = t(684),
        V = t(77330),
        _ = function () {
          var n = (0, i.useContext)(V.k);
          if (void 0 === n)
            throw new Error("Match Breakpoint context is undefined");
          return n;
        },
        q = t(93059),
        Y = t(80613),
        Q = t(76108);
      function K(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var J = function (n) {
        return (0, o.jsx)(
          Q.Z,
          (function (n) {
            for (
              var e = arguments,
                t = function (t) {
                  var r = null != e[t] ? e[t] : {},
                    o = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(r).filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable;
                      })
                    )),
                    o.forEach(function (e) {
                      K(n, e, r[e]);
                    });
                },
                r = 1;
              r < arguments.length;
              r++
            )
              t(r);
            return n;
          })({ viewBox: "0 0 24 24" }, n, {
            children: (0, o.jsx)("path", {
              d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z",
            }),
          })
        );
      };
      function X(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var nn = function (n) {
          return (0, o.jsx)(
            Q.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        X(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 24 24" }, n, {
              children: (0, o.jsx)("path", {
                d: "M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 00-.7 0z",
              }),
            })
          );
        },
        en = t(76889),
        tn = t(92535),
        rn = t(57247),
        on = t(88954);
      function an(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function cn(n) {
        for (
          var e = arguments,
            t = function (t) {
              var r = null != e[t] ? e[t] : {},
                o = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(r).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(r, n).enumerable;
                  })
                )),
                o.forEach(function (e) {
                  an(n, e, r[e]);
                });
            },
            r = 1;
          r < arguments.length;
          r++
        )
          t(r);
        return n;
      }
      function un(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function ln() {
        var n = un([
          "\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n",
        ]);
        return (
          (ln = function () {
            return n;
          }),
          n
        );
      }
      function sn() {
        var n = un([
          "\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n",
        ]);
        return (
          (sn = function () {
            return n;
          }),
          n
        );
      }
      function dn() {
        var n = un([
          "\n  position: relative;\n  will-change: opacity;\n  opacity: 0;\n  &.appear {\n    animation: ",
          " 0.3s ease-in-out forwards;\n  }\n  &.disappear {\n    animation: ",
          " 0.3s ease-in-out forwards;\n  }\n",
        ]);
        return (
          (dn = function () {
            return n;
          }),
          n
        );
      }
      function fn() {
        var n = un([
          "\n  position: relative;\n  ",
          "\n  ",
          "\n  overflow: hidden;\n",
        ]);
        return (
          (fn = function () {
            return n;
          }),
          n
        );
      }
      function pn() {
        var n = un([
          "\n  min-height: 20px;\n  display: block;\n  background-color: ",
          ";\n  border-radius: ",
          ";\n  ",
          "\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (pn = function () {
            return n;
          }),
          n
        );
      }
      function mn() {
        var n = un([
          "\n  animation: ",
          " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n",
        ]);
        return (
          (mn = function () {
            return n;
          }),
          n
        );
      }
      function hn() {
        var n = un([
          '\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: "";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ',
          " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n",
        ]);
        return (
          (hn = function () {
            return n;
          }),
          n
        );
      }
      var yn = (0, a.F4)(ln()),
        bn = (0, a.F4)(sn()),
        vn =
          ((0, a.ZP)(tn.m.div)
            .withConfig({ componentId: "sc-67e1208-0" })
            .withConfig({ componentId: "sc-d22c5bfe-0" })(dn(), on.Oz, on.a4),
          a.ZP.div
            .withConfig({ componentId: "sc-67e1208-1" })
            .withConfig({ componentId: "sc-d22c5bfe-1" })(fn(), rn.bK, rn.Dh),
          a.ZP.div
            .withConfig({ componentId: "sc-67e1208-2" })
            .withConfig({ componentId: "sc-d22c5bfe-2" })(
            pn(),
            function (n) {
              return n.theme.colors.backgroundDisabled;
            },
            function (n) {
              var e = n.variant,
                t = n.theme;
              return "circle" === e ? t.radii.circle : t.radii.small;
            },
            rn.bK,
            rn.Dh,
            rn.E0
          )),
        xn = (0, a.ZP)(vn)
          .withConfig({ componentId: "sc-67e1208-3" })
          .withConfig({ componentId: "sc-d22c5bfe-3" })(mn(), bn),
        gn = (0, a.ZP)(vn)
          .withConfig({ componentId: "sc-67e1208-4" })
          .withConfig({ componentId: "sc-d22c5bfe-4" })(hn(), yn),
        jn = function (n) {
          var e = n.variant,
            t = void 0 === e ? "rect" : e,
            r = n.animation,
            i = void 0 === r ? "pulse" : r,
            a = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, ["variant", "animation"]);
          return "waves" === i
            ? (0, o.jsx)(gn, cn({ variant: t }, a))
            : (0, o.jsx)(xn, cn({ variant: t }, a));
        },
        wn = t(14795);
      function On(n, e) {
        var t =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E;
        if (n && !e) return !1;
        if (e && !n) return !0;
        if (n && e) {
          if (
            n.tradeType !== e.tradeType ||
            !(0, c.KA)(n.inputAmount.currency, e.inputAmount.currency) ||
            !(0, c.KA)(n.outputAmount.currency, e.outputAmount.currency)
          )
            throw new Error("Trades are not comparable");
          return t.equalTo(E)
            ? n.executionPrice.lessThan(e.executionPrice)
            : n.executionPrice.raw
                .multiply(t.add(N))
                .lessThan(e.executionPrice);
        }
      }
      var Cn = t(94654),
        kn = t.n(Cn),
        In = t(20316),
        Tn = t(59808),
        Pn = t(54941),
        Sn = t(54543),
        Zn = t(94133);
      function An(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function En(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          Mn(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Nn(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return An(n);
          })(n) ||
          (function (n) {
            if (
              ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n["@@iterator"]
            )
              return Array.from(n);
          })(n) ||
          Mn(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Mn(n, e) {
        if (n) {
          if ("string" == typeof n) return An(n, e);
          var t = Object.prototype.toString.call(n).slice(8, -1);
          return (
            "Object" === t && n.constructor && (t = n.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(t)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? An(n, e)
              : void 0
          );
        }
      }
      function Ln(n, e) {
        var t = (0, In.Z)().chainId,
          r = En(
            t ? [(0, Sn.pu)(n, t), (0, Sn.pu)(e, t)] : [void 0, void 0],
            2
          ),
          o = r[0],
          a = r[1],
          c = (0, i.useMemo)(
            function () {
              var n, e, r;
              if (!t) return [];
              var i,
                c,
                u = null !== (r = b[t]) && void 0 !== r ? r : [],
                l =
                  o &&
                  null !==
                    (i =
                      null === (n = v[t]) || void 0 === n
                        ? void 0
                        : n[o.address]) &&
                  void 0 !== i
                    ? i
                    : [],
                s =
                  a &&
                  null !==
                    (c =
                      null === (e = v[t]) || void 0 === e
                        ? void 0
                        : e[a.address]) &&
                  void 0 !== c
                    ? c
                    : [];
              return Nn(u).concat(Nn(l), Nn(s));
            },
            [t, o, a]
          ),
          u = (0, i.useMemo)(
            function () {
              return kn()(c, function (n) {
                return c.map(function (e) {
                  return [n, e];
                });
              });
            },
            [c]
          ),
          l = (0, i.useMemo)(
            function () {
              return o && a
                ? [[o, a]]
                    .concat(
                      Nn(
                        c.map(function (n) {
                          return [o, n];
                        })
                      ),
                      Nn(
                        c.map(function (n) {
                          return [a, n];
                        })
                      ),
                      Nn(u)
                    )
                    .filter(function (n) {
                      return Boolean(n[0] && n[1]);
                    })
                    .filter(function (n) {
                      var e = En(n, 2),
                        t = e[0],
                        r = e[1];
                      return t.address !== r.address;
                    })
                    .filter(function (n) {
                      var e = En(n, 2),
                        r = e[0],
                        o = e[1];
                      if (!t) return !0;
                      var i = x[t],
                        a = null == i ? void 0 : i[r.address],
                        c = null == i ? void 0 : i[o.address];
                      return !(
                        (a || c) &&
                        ((a &&
                          !a.find(function (n) {
                            return o.equals(n);
                          })) ||
                          (c &&
                            !c.find(function (n) {
                              return r.equals(n);
                            })))
                      );
                    })
                : [];
            },
            [o, a, c, u, t]
          ),
          s = (0, Pn.z$)(l);
        return (0, i.useMemo)(
          function () {
            return Object.values(
              s
                .filter(function (n) {
                  return Boolean(n[0] === Pn._G.EXISTS && n[1]);
                })
                .reduce(function (n, e) {
                  var t,
                    r = En(e, 2)[1];
                  return (
                    (n[r.liquidityToken.address] =
                      null !== (t = n[r.liquidityToken.address]) && void 0 !== t
                        ? t
                        : r),
                    n
                  );
                }, {})
            );
          },
          [s]
        );
      }
      function Dn(n, e) {
        var t = Ln(null == n ? void 0 : n.currency, e),
          r = En((0, Tn.RO)(), 1)[0];
        return (0, i.useMemo)(
          function () {
            if (n && e && t.length > 0) {
              var o;
              if (r)
                return null !==
                  (o = c.ho.bestTradeExactIn(t, n, e, {
                    maxHops: 1,
                    maxNumResults: 1,
                  })[0]) && void 0 !== o
                  ? o
                  : null;
              for (var i = null, a = 1; a <= 3; a++) {
                var u,
                  l =
                    null !==
                      (u = c.ho.bestTradeExactIn(t, n, e, {
                        maxHops: a,
                        maxNumResults: 1,
                      })[0]) && void 0 !== u
                      ? u
                      : null;
                On(i, l, A) && (i = l);
              }
              return i;
            }
            return null;
          },
          [t, n, e, r]
        );
      }
      var Un = t(22696),
        zn = t(69323),
        Bn = t(7867);
      function Rn(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Fn() {
        var n = Rn([
          "\n  width: ",
          ";\n  display: flex;\n  align-items: ",
          ";\n  justify-content: ",
          ";\n  padding: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n",
        ]);
        return (
          (Fn = function () {
            return n;
          }),
          n
        );
      }
      function Wn() {
        var n = Rn(["\n  justify-content: space-between;\n"]);
        return (
          (Wn = function () {
            return n;
          }),
          n
        );
      }
      function $n() {
        var n = Rn(["\n  display: flex;\n  align-items: flex-end;\n"]);
        return (
          ($n = function () {
            return n;
          }),
          n
        );
      }
      function Hn() {
        var n = Rn([
          "\n  flex-wrap: wrap;\n  margin: ",
          ";\n  justify-content: ",
          ";\n\n  & > * {\n    margin: ",
          " !important;\n  }\n",
        ]);
        return (
          (Hn = function () {
            return n;
          }),
          n
        );
      }
      function Gn() {
        var n = Rn(["\n  width: fit-content;\n  margin: ", ";\n"]);
        return (
          (Gn = function () {
            return n;
          }),
          n
        );
      }
      var Vn = (0, a.ZP)(wn.Z).withConfig({ componentId: "sc-2ce7e6d-0" })(
          Fn(),
          function (n) {
            var e = n.width;
            return null != e ? e : "100%";
          },
          function (n) {
            var e = n.align;
            return null != e ? e : "center";
          },
          function (n) {
            var e = n.justify;
            return null != e ? e : "flex-start";
          },
          function (n) {
            var e = n.padding;
            return null != e ? e : "0";
          },
          function (n) {
            return n.border;
          },
          function (n) {
            return n.borderRadius;
          }
        ),
        _n = (0, a.ZP)(Vn).withConfig({ componentId: "sc-2ce7e6d-1" })(Wn()),
        qn =
          (a.ZP.div.withConfig({ componentId: "sc-2ce7e6d-2" })($n()),
          (0, a.ZP)(Vn).withConfig({ componentId: "sc-2ce7e6d-3" })(
            Hn(),
            function (n) {
              var e = n.gap;
              return e && "-".concat(e);
            },
            function (n) {
              return n.justify;
            },
            function (n) {
              return n.gap;
            }
          )),
        Yn = (0, a.ZP)(Vn).withConfig({ componentId: "sc-2ce7e6d-4" })(
          Gn(),
          function (n) {
            var e = n.gap;
            return e && "-".concat(e);
          }
        ),
        Qn = Vn;
      function Kn(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Jn() {
        var n = Kn([
          "\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n",
        ]);
        return (
          (Jn = function () {
            return n;
          }),
          n
        );
      }
      function Xn() {
        var n = Kn(["\n  width: 100%;\n  align-items: center;\n"]);
        return (
          (Xn = function () {
            return n;
          }),
          n
        );
      }
      function ne() {
        var n = Kn([
          "\n  display: grid;\n  grid-auto-rows: auto;\n  grid-row-gap: ",
          ";\n  justify-items: ",
          ";\n",
        ]);
        return (
          (ne = function () {
            return n;
          }),
          n
        );
      }
      var ee = a.ZP.div.withConfig({ componentId: "sc-91e5cc43-0" })(Jn()),
        te = (0, a.ZP)(ee).withConfig({ componentId: "sc-91e5cc43-1" })(Xn()),
        re = a.ZP.div.withConfig({ componentId: "sc-91e5cc43-2" })(
          ne(),
          function (n) {
            var e = n.gap;
            return (
              ("sm" === e ? "8px" : "md" === e && "12px") ||
              ("lg" === e && "24px") ||
              e
            );
          },
          function (n) {
            return n.justify;
          }
        ),
        oe = ee;
      function ie(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var ae = function (n) {
          return (0, o.jsxs)(
            Q.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        ie(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 96 96" }, n, {
              children: [
                (0, o.jsx)("circle", {
                  cx: "48",
                  cy: "48",
                  r: "48",
                  fill: "#F0B90B",
                }),
                (0, o.jsx)("path", {
                  d: "M30.9008 25.9057L47.8088 16.0637L64.7169 25.9057L58.5007 29.5416L47.8088 23.3355L37.117 29.5416L30.9008 25.9057ZM64.7169 38.3179L58.5007 34.682L47.8088 40.8881L37.117 34.682L30.9008 38.3179V45.5897L41.5926 51.7958V64.2079L47.8088 67.8438L54.0251 64.2079V51.7958L64.7169 45.5897V38.3179ZM64.7169 58.0018V50.7301L58.5007 54.366V61.6377L64.7169 58.0018ZM69.1305 60.572L58.4386 66.7781V74.0499L75.3467 64.2079V44.524L69.1305 48.1599V60.572ZM62.9143 32.1118L69.1305 35.7477V43.0195L75.3467 39.3836V32.1118L69.1305 28.4759L62.9143 32.1118ZM41.5926 69.411V76.6828L47.8088 80.3187L54.0251 76.6828V69.411L47.8088 73.0469L41.5926 69.411ZM30.9008 58.0018L37.117 61.6377V54.366L30.9008 50.7301V58.0018ZM41.5926 32.1118L47.8088 35.7477L54.0251 32.1118L47.8088 28.4759L41.5926 32.1118ZM26.4872 35.7477L32.7034 32.1118L26.4872 28.4759L20.271 32.1118V39.3836L26.4872 43.0195V35.7477ZM26.4872 48.1599L20.271 44.524V64.2079L37.1791 74.0499V66.7781L26.4872 60.572V48.1599Z",
                  fill: "white",
                }),
              ],
            })
          );
        },
        ce = t(27697),
        ue = t(38796);
      function le(n) {
        return (0, i.useMemo)(
          function () {
            return n ? (0, ue.Z)(n) : [];
          },
          [n]
        );
      }
      var se = function (n) {
          return "https://assets-cdn.trustwallet.com/blockchains/smartchain/assets/".concat(
            n,
            "/logo.png"
          );
        },
        de = t(32798);
      function fe(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function pe(n, e) {
        return null != e &&
          "undefined" != typeof Symbol &&
          e[Symbol.hasInstance]
          ? !!e[Symbol.hasInstance](n)
          : n instanceof e;
      }
      function me() {
        var n,
          e,
          t =
            ((n = [
              "\n  width: ",
              ";\n  height: ",
              ";\n  border-radius: 50%;\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (me = function () {
            return t;
          }),
          t
        );
      }
      var he = (0, a.ZP)(de.Z).withConfig({ componentId: "sc-22b0add6-0" })(
        me(),
        function (n) {
          return n.size;
        },
        function (n) {
          return n.size;
        }
      );
      function ye(n) {
        var e,
          t = n.currency,
          r = n.size,
          a = void 0 === r ? "24px" : r,
          u = n.style,
          l = le(pe(t, ce.DT) ? t.logoURI : void 0),
          s = (0, i.useMemo)(
            function () {
              return t === c.c0
                ? []
                : pe(t, c.WU)
                ? pe(t, ce.DT)
                  ? (function (n) {
                      return (
                        (function (n) {
                          if (Array.isArray(n)) return fe(n);
                        })(n) ||
                        (function (n) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != n[Symbol.iterator]) ||
                            null != n["@@iterator"]
                          )
                            return Array.from(n);
                        })(n) ||
                        (function (n, e) {
                          if (n) {
                            if ("string" == typeof n) return fe(n, e);
                            var t = Object.prototype.toString
                              .call(n)
                              .slice(8, -1);
                            return (
                              "Object" === t &&
                                n.constructor &&
                                (t = n.constructor.name),
                              "Map" === t || "Set" === t
                                ? Array.from(t)
                                : "Arguments" === t ||
                                  /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                    t
                                  )
                                ? fe(n, e)
                                : void 0
                            );
                          }
                        })(n) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                          );
                        })()
                      );
                    })(l).concat([se(t.address)])
                  : [se(t.address)]
                : [];
            },
            [t, l]
          );
        return t === c.c0
          ? (0, o.jsx)(ae, { width: a, style: u })
          : (0, o.jsx)(he, {
              size: a,
              srcs: s,
              alt: "".concat(
                null !== (e = null == t ? void 0 : t.symbol) && void 0 !== e
                  ? e
                  : "token",
                " logo"
              ),
              style: u,
            });
      }
      function be() {
        var n,
          e,
          t =
            ((n = [
              "\n  display: flex;\n  flex-direction: row;\n  margin-right: ",
              ";\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (be = function () {
            return t;
          }),
          t
        );
      }
      var ve = a.ZP.div.withConfig({ componentId: "sc-b339c6de-0" })(
        be(),
        function (n) {
          return n.margin && "4px";
        }
      );
      function xe(n) {
        var e = n.currency0,
          t = n.currency1,
          r = n.size,
          i = void 0 === r ? 20 : r,
          a = n.margin,
          c = void 0 !== a && a;
        return (0, o.jsxs)(ve, {
          margin: c,
          children: [
            e &&
              (0, o.jsx)(ye, {
                currency: e,
                size: "".concat(i.toString(), "px"),
                style: { marginRight: "4px" },
              }),
            t &&
              (0, o.jsx)(ye, {
                currency: t,
                size: "".concat(i.toString(), "px"),
              }),
          ],
        });
      }
      function ge() {
        var n,
          e,
          t =
            ((n = ["\n  width: ", ";\n  height: ", ";\n"]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (ge = function () {
            return t;
          }),
          t
        );
      }
      var je = (0, a.ZP)(de.Z).withConfig({ componentId: "sc-60793395-0" })(
        ge(),
        function (n) {
          return n.size;
        },
        function (n) {
          return n.size;
        }
      );
      function we(n) {
        var e = n.logoURI,
          t = n.style,
          r = n.size,
          i = void 0 === r ? "24px" : r,
          a = n.alt,
          c = le(e);
        return (0, o.jsx)(je, { alt: a, size: i, srcs: c, style: t });
      }
      function Oe(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function Ce() {
        var n,
          e,
          t =
            ((n = [
              "\n  padding: 8px 0;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ",
              ";\n  background-color: ",
              ";\n  text-align: center;\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Ce = function () {
            return t;
          }),
          t
        );
      }
      var ke = a.ZP.div.withConfig({ componentId: "sc-7c595778-0" })(
          Ce(),
          function (n) {
            return n.theme.colors.text;
          },
          function (n) {
            return n.theme.colors.invertedContrast;
          }
        ),
        Ie = function (n) {
          var e = n.currencies,
            t = n.onDismiss,
            r = (0, In.Z)().chainId,
            i = (0, Bn.$G)().t,
            a =
              r && e
                ? e.map(function (n) {
                    return (0, Sn.pu)(n, r);
                  })
                : [],
            c = (0, Zn.l6)();
          return (0, o.jsx)(Un.Z, {
            title: i("Unsupported Assets"),
            maxWidth: "420px",
            onDismiss: t,
            children: (0, o.jsxs)(re, {
              gap: "lg",
              children: [
                a.map(function (n) {
                  var e;
                  return (
                    n &&
                    c &&
                    Object.keys(c).includes(n.address) &&
                    (0, o.jsxs)(
                      re,
                      {
                        gap: "10px",
                        children: [
                          (0, o.jsxs)(qn, {
                            gap: "5px",
                            align: "center",
                            children: [
                              (0, o.jsx)(ye, { currency: n, size: "24px" }),
                              (0, o.jsx)(H.Z, { children: n.symbol }),
                            ],
                          }),
                          r &&
                            (0, o.jsx)(zn.Z, {
                              external: !0,
                              small: !0,
                              color: "primaryDark",
                              href: (0, D.s6)(n.address, "address", r),
                              children: n.address,
                            }),
                        ],
                      },
                      null === (e = n.address) || void 0 === e
                        ? void 0
                        : e.concat("not-supported")
                    )
                  );
                }),
                (0, o.jsx)(re, {
                  gap: "lg",
                  children: (0, o.jsx)(H.Z, {
                    children: i(
                      "Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons."
                    ),
                  }),
                }),
              ],
            }),
          });
        };
      function Te(n) {
        var e = n.currencies,
          t = (0, Bn.$G)().t,
          r = (function (n, e) {
            return (
              (function (n) {
                if (Array.isArray(n)) return n;
              })(n) ||
              (function (n, e) {
                var t =
                  null == n
                    ? null
                    : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"];
                if (null != t) {
                  var r,
                    o,
                    i = [],
                    a = !0,
                    c = !1;
                  try {
                    for (
                      t = t.call(n);
                      !(a = (r = t.next()).done) &&
                      (i.push(r.value), !e || i.length !== e);
                      a = !0
                    );
                  } catch (n) {
                    (c = !0), (o = n);
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return i;
                }
              })(n, e) ||
              (function (n, e) {
                if (n) {
                  if ("string" == typeof n) return Oe(n, e);
                  var t = Object.prototype.toString.call(n).slice(8, -1);
                  return (
                    "Object" === t && n.constructor && (t = n.constructor.name),
                    "Map" === t || "Set" === t
                      ? Array.from(t)
                      : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? Oe(n, e)
                      : void 0
                  );
                }
              })(n, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })((0, q.Z)((0, o.jsx)(Ie, { currencies: e })), 1)[0];
        return (0, o.jsx)(ke, {
          children: (0, o.jsx)(en.Z, {
            variant: "text",
            onClick: r,
            children: t("Read more about unsupported assets"),
          }),
        });
      }
      var Pe = t(11163);
      function Se(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var Ze = c.a_.MAINNET,
        Ae = (0, d.MO)({
          pokemoney: new c.WU(
            Ze,
            "0x32ff5b4C3B1744F0344D96fA2f87799Ed2805749",
            18,
            "PMY",
            "Pokemoney Coin",
            ""
          ),
        }),
        Ee = (0, d.MO)({}),
        Ne = (function () {
          var n = l.K;
          return parseInt(n, 10) === c.a_.TESTNET
            ? Object.keys(Ae).reduce(function (n, e) {
                return (function (n) {
                  for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                      r = Object.keys(t);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            t,
                            n
                          ).enumerable;
                        })
                      )),
                      r.forEach(function (e) {
                        Se(n, e, t[e]);
                      });
                  }
                  return n;
                })({}, n, Se({}, e, Ee[e] || Ae[e]));
              }, {})
            : Ae;
        })(),
        Me = d.ZP.bondly,
        Le = {
          safemoon: d.ZP.safemoon,
          bondly: Me,
          itam: d.ZP.itam,
          ccar: d.ZP.ccar,
          bttold: d.ZP.bttold,
          pokemoney: Ne.pokemoney,
        },
        De = Object.values(Le),
        Ue = function (n) {
          return De.some(function (e) {
            return n.address === e.address;
          });
        },
        ze = t(77044),
        Be = t(47141);
      function Re() {
        var n = (0, Be.TL)();
        return {
          onSwitchTokens: (0, i.useCallback)(
            function () {
              n((0, U.KS)());
            },
            [n]
          ),
          onCurrencySelection: (0, i.useCallback)(
            function (e, t) {
              var r, o;
              n(
                (0, U.j)({
                  field: e,
                  currencyId:
                    ((r = t),
                    (o = c.WU),
                    (
                      null != o &&
                      "undefined" != typeof Symbol &&
                      o[Symbol.hasInstance]
                        ? o[Symbol.hasInstance](r)
                        : r instanceof o
                    )
                      ? t.address
                      : t === c.c0
                      ? "BNB"
                      : ""),
                })
              );
            },
            [n]
          ),
          onUserInput: (0, i.useCallback)(
            function (e, t) {
              n((0, U.LC)({ field: e, typedValue: t }));
            },
            [n]
          ),
          onChangeRecipient: (0, i.useCallback)(
            function (e) {
              n((0, U.He)({ recipient: e }));
            },
            [n]
          ),
        };
      }
      var Fe = t(8100);
      function We(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function $e() {
        var n = We([
          "\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ",
          ";\n  z-index: 1;\n  width: 100%;\n ",
        ]);
        return (
          ($e = function () {
            return n;
          }),
          n
        );
      }
      function He() {
        var n = We([
          "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
          ";\n  transition: border-color 300ms ",
          ",\n    color 500ms ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (He = function () {
            return n;
          }),
          n
        );
      }
      function Ge() {
        var n = We(["\n  flex: 1;\n  padding: 1rem;\n"]);
        return (
          (Ge = function () {
            return n;
          }),
          n
        );
      }
      function Ve() {
        var n = We([
          "\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ",
          ";\n  transition: color 300ms ",
          ";\n  color: ",
          ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
          ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (Ve = function () {
            return n;
          }),
          n
        );
      }
      var _e = a.ZP.div.withConfig({ componentId: "sc-3ae8a5e6-0" })(
          $e(),
          function (n) {
            return n.theme.colors.backgroundAlt;
          }
        ),
        qe = a.ZP.div.withConfig({ componentId: "sc-3ae8a5e6-1" })(
          He(),
          function (n) {
            var e = n.error,
              t = n.theme;
            return e ? t.colors.failure : t.colors.background;
          },
          function (n) {
            return n.error ? "step-end" : "step-start";
          },
          function (n) {
            return n.error ? "step-end" : "step-start";
          },
          function (n) {
            return n.theme.colors.backgroundAlt;
          }
        ),
        Ye = a.ZP.div.withConfig({ componentId: "sc-3ae8a5e6-2" })(Ge()),
        Qe = a.ZP.input.withConfig({ componentId: "sc-3ae8a5e6-3" })(
          Ve(),
          function (n) {
            return n.theme.colors.backgroundAlt;
          },
          function (n) {
            return n.error ? "step-end" : "step-start";
          },
          function (n) {
            var e = n.error,
              t = n.theme;
            return e ? t.colors.failure : t.colors.primary;
          },
          function (n) {
            return n.theme.colors.textDisabled;
          },
          function (n) {
            return n.theme.colors.textDisabled;
          }
        );
      function Ke(n) {
        var e = n.id,
          t = n.value,
          r = n.onChange,
          a = (0, In.Z)().chainId,
          c = (0, Bn.$G)().t,
          u = (0, D.UJ)(t) ? t : void 0,
          l = (0, i.useCallback)(
            function (n) {
              var e = n.target.value.replace(/\s+/g, "");
              r(e);
            },
            [r]
          ),
          s = Boolean(t.length > 0 && !u);
        return (0, o.jsx)(_e, {
          id: e,
          children: (0, o.jsx)(qe, {
            error: s,
            children: (0, o.jsx)(Ye, {
              children: (0, o.jsxs)(re, {
                gap: "md",
                children: [
                  (0, o.jsxs)(_n, {
                    children: [
                      (0, o.jsx)(H.Z, { children: c("Recipient") }),
                      u &&
                        a &&
                        (0, o.jsxs)(zn.Z, {
                          external: !0,
                          small: !0,
                          href: (0, D.s6)(u, "address", a),
                          children: ["(", c("View on BscScan"), ")"],
                        }),
                    ],
                  }),
                  (0, o.jsx)(Qe, {
                    className: "recipient-address-input",
                    type: "text",
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    placeholder: c("Wallet Address"),
                    error: s,
                    pattern: "^(0x[a-fA-F0-9]{40})$",
                    onChange: l,
                    value: t,
                  }),
                ],
              }),
            }),
          }),
        });
      }
      function Je(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Xe() {
        var n = Je([
          "\n  width: ",
          ";\n  padding: ",
          ";\n  border: ",
          ";\n  border-radius: ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (Xe = function () {
            return n;
          }),
          n
        );
      }
      function nt() {
        var n = Je([
          "\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (nt = function () {
            return n;
          }),
          n
        );
      }
      function et() {
        var n = Je([
          "\n  border: 1px solid ",
          ";\n  background-color: ",
          ";\n",
        ]);
        return (
          (et = function () {
            return n;
          }),
          n
        );
      }
      function tt() {
        var n = Je(["\n  background-color: ", ";\n"]);
        return (
          (tt = function () {
            return n;
          }),
          n
        );
      }
      var rt = (0, a.ZP)(wn.Z).withConfig({ componentId: "sc-2d513063-0" })(
          Xe(),
          function (n) {
            var e = n.width;
            return null != e ? e : "100%";
          },
          function (n) {
            var e = n.padding;
            return null != e ? e : "1.25rem";
          },
          function (n) {
            return n.border;
          },
          function (n) {
            var e = n.borderRadius;
            return null != e ? e : "16px";
          },
          function (n) {
            return n.theme.colors.background;
          }
        ),
        ot = rt,
        it =
          ((0, a.ZP)(rt).withConfig({ componentId: "sc-2d513063-1" })(
            nt(),
            function (n) {
              return n.theme.colors.background;
            },
            function (n) {
              return n.theme.colors.backgroundAlt;
            }
          ),
          (0, a.ZP)(rt).withConfig({ componentId: "sc-2d513063-2" })(
            et(),
            function (n) {
              return n.theme.colors.cardBorder;
            },
            function (n) {
              return n.theme.colors.background;
            }
          )),
        at = (0, a.ZP)(rt).withConfig({ componentId: "sc-2d513063-3" })(
          tt(),
          function (n) {
            return n.theme.colors.dropdown;
          }
        );
      function ct(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function ut(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function lt(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var st = function (n) {
        return (0, o.jsx)(
          Q.Z,
          (function (n) {
            for (
              var e = arguments,
                t = function (t) {
                  var r = null != e[t] ? e[t] : {},
                    o = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(r).filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable;
                      })
                    )),
                    o.forEach(function (e) {
                      lt(n, e, r[e]);
                    });
                },
                r = 1;
              r < arguments.length;
              r++
            )
              t(r);
            return n;
          })({ viewBox: "0 0 100 100" }, n, {
            children: (0, o.jsx)("g", {
              className: "ldl-scale",
              style: {
                transformOrigin: "50% 50%",
                transform: "rotate(0deg) scale(0.8, 0.8)",
              },
              children: (0, o.jsxs)("g", {
                className: "ldl-ani",
                children: [
                  (0, o.jsx)("g", {
                    className: "ldl-layer",
                    children: (0, o.jsx)("g", {
                      className: "ldl-ani",
                      children: (0, o.jsxs)("g", {
                        children: [
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -0.617284s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#849b87",
                                fill: "none",
                                d: "M61 35.333H42.667a7.333 7.333 0 0 0-7.333 7.333v0a7.333 7.333 0 0 0 7.333 7.333h14.667a7.333 7.333 0 0 1 7.333 7.333v0a7.333 7.333 0 0 1-7.333 7.333h-22",
                                style: { stroke: "rgb(255, 168, 38)" },
                              }),
                            }),
                          }),
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -0.679012s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                d: "M50 64.667V70",
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#849b87",
                                fill: "none",
                                style: { stroke: "rgb(255, 168, 38)" },
                              }),
                            }),
                          }),
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -0.740741s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                d: "M50 30v5.332",
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#849b87",
                                fill: "none",
                                style: { stroke: "rgb(255, 168, 38)" },
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsx)("g", {
                    className: "ldl-layer",
                    children: (0, o.jsx)("g", {
                      className: "ldl-ani",
                      children: (0, o.jsxs)("g", {
                        children: [
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -0.802469s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#76a4bd",
                                fill: "none",
                                d: "M50 85.609c19.666 0 35.609-15.943 35.609-35.609a35.47 35.47 0 0 0-8.199-22.733",
                                style: { stroke: "rgb(142, 9, 152)" },
                              }),
                            }),
                          }),
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -0.864198s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                d: "M50 85.609L55.489 90",
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#76a4bd",
                                fill: "none",
                                style: { stroke: "rgb(142, 9, 152)" },
                              }),
                            }),
                          }),
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -0.925926s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                d: "M50 85.609l4.391-5.489",
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#76a4bd",
                                fill: "none",
                                style: { stroke: "rgb(142, 9, 152)" },
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsx)("g", {
                    className: "ldl-layer",
                    children: (0, o.jsx)("g", {
                      className: "ldl-ani",
                      children: (0, o.jsxs)("g", {
                        children: [
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -0.987654s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#76a4bd",
                                fill: "none",
                                d: "M50 14.391c-19.666 0-35.609 15.943-35.609 35.609a35.47 35.47 0 0 0 8.199 22.733",
                                style: { stroke: "rgb(142, 9, 152)" },
                              }),
                            }),
                          }),
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -1.04938s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                d: "M50 14.391L44.511 10",
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#76a4bd",
                                fill: "none",
                                style: { stroke: "rgb(142, 9, 152)" },
                              }),
                            }),
                          }),
                          (0, o.jsx)("g", {
                            className: "ldl-layer",
                            children: (0, o.jsx)("g", {
                              className: "ldl-ani",
                              style: {
                                transformOrigin: "50px 50px",
                                opacity: 1,
                                animation:
                                  "1.11111s linear -1.11111s infinite normal forwards running fade-spinner",
                              },
                              children: (0, o.jsx)("path", {
                                d: "M50 14.391l-4.391 5.489",
                                strokeMiterlimit: "10",
                                strokeLinejoin: "round",
                                strokeLinecap: "round",
                                strokeWidth: "6",
                                stroke: "#76a4bd",
                                fill: "none",
                                style: { stroke: "rgb(142, 9, 152)" },
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      };
      function dt(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function ft() {
        var n = dt([
          "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
        ]);
        return (
          (ft = function () {
            return n;
          }),
          n
        );
      }
      function pt() {
        var n = dt([
          "\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n",
        ]);
        return (
          (pt = function () {
            return n;
          }),
          n
        );
      }
      function mt() {
        var n = dt(["\n  position: relative;\n"]);
        return (
          (mt = function () {
            return n;
          }),
          n
        );
      }
      function ht() {
        var n = dt([
          "\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ",
          " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n",
        ]);
        return (
          (ht = function () {
            return n;
          }),
          n
        );
      }
      function yt() {
        var n = dt([
          "\n  animation: ",
          " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n",
        ]);
        return (
          (yt = function () {
            return n;
          }),
          n
        );
      }
      var bt = (0, a.F4)(ft()),
        vt = (0, a.F4)(pt()),
        xt = a.ZP.div
          .withConfig({ componentId: "sc-bcb20eb2-0" })
          .withConfig({ componentId: "sc-15204b52-0" })(mt()),
        gt =
          ((0, a.ZP)(function (n) {
            return (0, o.jsx)(
              Q.Z,
              (function (n) {
                for (
                  var e = arguments,
                    t = function (t) {
                      var r = null != e[t] ? e[t] : {},
                        o = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                          Object.getOwnPropertySymbols(r).filter(function (n) {
                            return Object.getOwnPropertyDescriptor(
                              r,
                              n
                            ).enumerable;
                          })
                        )),
                        o.forEach(function (e) {
                          ut(n, e, r[e]);
                        });
                    },
                    r = 1;
                  r < arguments.length;
                  r++
                )
                  t(r);
                return n;
              })({ viewBox: "0 0 128 128" }, n, {
                children: (0, o.jsxs)("svg", {
                  width: "128",
                  height: "128",
                  viewBox: "0 0 128 128",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, o.jsx)("path", {
                      d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z",
                      fill: "#FEDC90",
                      stroke: "#D1884F",
                      strokeWidth: "2.89134",
                    }),
                    (0, o.jsx)("path", {
                      d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z",
                      fill: "#D1884F",
                      stroke: "#633001",
                      strokeWidth: "2.89134",
                    }),
                    (0, o.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z",
                      fill: "#633001",
                    }),
                  ],
                }),
              })
            );
          })
            .withConfig({ componentId: "sc-bcb20eb2-1" })
            .withConfig({ componentId: "sc-15204b52-1" })(ht(), bt),
          (0, a.ZP)(function (n) {
            return (0, o.jsxs)(
              Q.Z,
              (function (n) {
                for (
                  var e = arguments,
                    t = function (t) {
                      var r = null != e[t] ? e[t] : {},
                        o = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                          Object.getOwnPropertySymbols(r).filter(function (n) {
                            return Object.getOwnPropertyDescriptor(
                              r,
                              n
                            ).enumerable;
                          })
                        )),
                        o.forEach(function (e) {
                          ct(n, e, r[e]);
                        });
                    },
                    r = 1;
                  r < arguments.length;
                  r++
                )
                  t(r);
                return n;
              })({ viewBox: "0 0 256 256" }, n, {
                children: [
                  (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z",
                    fill: "#464649",
                  }),
                  (0, o.jsx)("path", {
                    d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z",
                    fill: "#606063",
                  }),
                  (0, o.jsx)("path", {
                    d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z",
                    fill: "#464649",
                  }),
                  (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z",
                    fill: "#464649",
                  }),
                  (0, o.jsx)("path", {
                    d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z",
                    fill: "#606063",
                  }),
                  (0, o.jsx)("path", {
                    d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z",
                    fill: "#464649",
                  }),
                  (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z",
                    fill: "#464649",
                  }),
                  (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z",
                    fill: "#979797",
                  }),
                  (0, o.jsx)("path", {
                    d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z",
                    fill: "#464649",
                  }),
                  (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z",
                    fill: "#737373",
                  }),
                  (0, o.jsx)("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z",
                    fill: "#606063",
                  }),
                ],
              })
            );
          })
            .withConfig({ componentId: "sc-bcb20eb2-2" })
            .withConfig({ componentId: "sc-15204b52-2" })(yt(), vt),
          function (n) {
            var e = n.size,
              t = void 0 === e ? 128 : e;
            return (0, o.jsx)(xt, {
              children: (0, o.jsx)(st, { width: "".concat(0.5 * t, "px") }),
            });
          });
      function jt(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var wt = function (n) {
          return (0, o.jsx)(
            Q.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        jt(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 24 24" }, n, {
              children: (0, o.jsx)("path", {
                d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z",
              }),
            })
          );
        },
        Ot = t(92586),
        Ct = t(93312),
        kt = t(99102);
      function It(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Tt() {
        var n = It(["\n  width: 100%;\n height:"]);
        return (
          (Tt = function () {
            return n;
          }),
          n
        );
      }
      function Pt() {
        var n = It(["\n  padding: 24px;\n"]);
        return (
          (Pt = function () {
            return n;
          }),
          n
        );
      }
      function St() {
        var n = It(["\n  padding: 24px 0;\n"]);
        return (
          (St = function () {
            return n;
          }),
          n
        );
      }
      var Zt = a.ZP.div.withConfig({ componentId: "sc-16ccc04b-0" })(Tt()),
        At = (0, a.ZP)(re).withConfig({ componentId: "sc-16ccc04b-1" })(Pt()),
        Et = (0, a.ZP)(te).withConfig({ componentId: "sc-16ccc04b-2" })(St());
      function Nt(n) {
        var e = n.pendingText,
          t = (0, Bn.$G)().t;
        return (0, o.jsxs)(Zt, {
          children: [
            (0, o.jsx)(Et, { children: (0, o.jsx)(gt, { size: 400 }) }),
            (0, o.jsxs)(re, {
              gap: "12px",
              justify: "center",
              children: [
                (0, o.jsx)(H.Z, {
                  fontSize: "20px",
                  children: t("Waiting For Confirmation"),
                }),
                (0, o.jsx)(re, {
                  gap: "12px",
                  justify: "center",
                  children: (0, o.jsx)(H.Z, {
                    bold: !0,
                    small: !0,
                    textAlign: "center",
                    children: e,
                  }),
                }),
                (0, o.jsx)(H.Z, {
                  small: !0,
                  color: "textSubtle",
                  textAlign: "center",
                  children: t("Confirm this transaction in your wallet"),
                }),
              ],
            }),
          ],
        });
      }
      function Mt(n) {
        var e,
          t = n.onDismiss,
          r = n.chainId,
          i = n.hash,
          a = n.currencyToAdd,
          c = (0, In.Z)().library,
          u = (0, Bn.$G)().t,
          l = (0, Sn.pu)(a, r);
        return (0, o.jsx)(Zt, {
          children: (0, o.jsxs)(At, {
            children: [
              (0, o.jsx)(Et, {
                children: (0, o.jsx)(wt, {
                  strokeWidth: 0.5,
                  width: "90px",
                  color: "primary",
                }),
              }),
              (0, o.jsxs)(re, {
                gap: "12px",
                justify: "center",
                children: [
                  (0, o.jsx)(H.Z, {
                    fontSize: "20px",
                    children: u("Transaction Submitted"),
                  }),
                  r &&
                    i &&
                    (0, o.jsx)(zn.Z, {
                      external: !0,
                      small: !0,
                      href: (0, D.s6)(i, "transaction", r),
                      children: u("View on BscScan"),
                    }),
                  a &&
                    (null == c || null === (e = c.provider) || void 0 === e
                      ? void 0
                      : e.isMetaMask) &&
                    (0, o.jsx)(en.Z, {
                      variant: "tertiary",
                      mt: "12px",
                      width: "fit-content",
                      onClick: function () {
                        return (0, kt.$)(
                          l.address,
                          l.symbol,
                          l.decimals,
                          ((n = l),
                          (
                            null != (e = ce.DT) &&
                            "undefined" != typeof Symbol &&
                            e[Symbol.hasInstance]
                              ? e[Symbol.hasInstance](n)
                              : n instanceof e
                          )
                            ? l.logoURI
                            : void 0)
                        );
                        var n, e;
                      },
                      children: (0, o.jsxs)(Yn, {
                        children: [
                          u("Add %asset% to Metamask", { asset: a.symbol }),
                          (0, o.jsx)(Ot.Z, { width: "16px", ml: "6px" }),
                        ],
                      }),
                    }),
                  (0, o.jsx)(en.Z, {
                    onClick: t,
                    mt: "20px",
                    children: u("Close"),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function Lt(n) {
        var e = n.bottomContent,
          t = n.topContent;
        return (0, o.jsxs)(Zt, {
          children: [
            (0, o.jsx)(wn.Z, { children: t() }),
            (0, o.jsx)(wn.Z, { children: e() }),
          ],
        });
      }
      function Dt(n) {
        var e = n.message,
          t = n.onDismiss,
          r = (0, Bn.$G)().t;
        return (0, o.jsxs)(Zt, {
          children: [
            (0, o.jsxs)(re, {
              justify: "center",
              children: [
                (0, o.jsx)(Ct.Z, { color: "failure", width: "64px" }),
                (0, o.jsx)(H.Z, {
                  color: "failure",
                  style: {
                    textAlign: "center",
                    width: "85%",
                    wordBreak: "break-word",
                  },
                  children: e,
                }),
              ],
            }),
            (0, o.jsx)(Y.Z, {
              justifyContent: "center",
              pt: "24px",
              children: (0, o.jsx)(en.Z, {
                onClick: t,
                children: r("Dismiss"),
              }),
            }),
          ],
        });
      }
      var Ut = function (n) {
          var e = n.title,
            t = n.onDismiss,
            r = n.customOnDismiss,
            a = n.attemptingTxn,
            c = n.hash,
            u = n.pendingText,
            l = n.content,
            s = n.currencyToAdd,
            d = (0, In.Z)().chainId,
            f = (0, i.useCallback)(
              function () {
                r && r(), null == t || t();
              },
              [r, t]
            );
          return d
            ? (0, o.jsx)(Un.Z, {
                title: e,
                onDismiss: f,
                children: a
                  ? (0, o.jsx)(Nt, { pendingText: u })
                  : c
                  ? (0, o.jsx)(Mt, {
                      chainId: d,
                      hash: c,
                      onDismiss: f,
                      currencyToAdd: s,
                    })
                  : l(),
              })
            : null;
        },
        zt = t(57086),
        Bt = t(63483),
        Rt = t(99046);
      function Ft(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Wt() {
        var n,
          e,
          t =
            ((n = ["\n  :hover,\n  :focus {\n    opacity: 0.7;\n  }\n"]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Wt = function () {
            return t;
          }),
          t
        );
      }
      var $t = a.ZP.div.withConfig({ componentId: "sc-faba58fd-0" })(Wt()),
        Ht = function (n) {
          var e = n.text,
            t = n.placement,
            r = void 0 === t ? "right-end" : t,
            i = n.size,
            a = void 0 === i ? "16px" : i,
            c = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, ["text", "placement", "size"]),
            u = (0, Bt.Z)(e, { placement: r, trigger: "hover" }),
            l = u.targetRef,
            s = u.tooltip,
            d = u.tooltipVisible;
          return (0, o.jsxs)(
            wn.Z,
            (function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {},
                  r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(t).filter(function (n) {
                      return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })
                  )),
                  r.forEach(function (e) {
                    Ft(n, e, t[e]);
                  });
              }
              return n;
            })({}, c, {
              children: [
                d && s,
                (0, o.jsx)($t, {
                  ref: l,
                  children: (0, o.jsx)(Rt.Z, { color: "textSubtle", width: a }),
                }),
              ],
            })
          );
        };
      function Gt(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Vt() {
        var n = Gt([
          "\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 1rem;\n",
        ]);
        return (
          (Vt = function () {
            return n;
          }),
          n
        );
      }
      function _t() {
        var n = Gt([
          "\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        ",
        ]);
        return (
          (_t = function () {
            return n;
          }),
          n
        );
      }
      function qt() {
        var n = Gt(["\n  padding: 2px;\n\n  ", "\n"]);
        return (
          (qt = function () {
            return n;
          }),
          n
        );
      }
      function Yt() {
        var n = Gt(["\n  color: ", ";\n"]);
        return (
          (Yt = function () {
            return n;
          }),
          n
        );
      }
      function Qt() {
        var n = Gt([
          "\n  height: 22px;\n  width: 22px;\n  background-color: ",
          ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
          ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
          ";\n  }\n  :focus {\n    background-color: ",
          ";\n    outline: none;\n  }\n",
        ]);
        return (
          (Qt = function () {
            return n;
          }),
          n
        );
      }
      function Kt() {
        var n = Gt(["\n  width: 220px;\n"]);
        return (
          (Kt = function () {
            return n;
          }),
          n
        );
      }
      function Jt() {
        var n = Gt([
          "\n  background-color: ",
          ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
          ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
        ]);
        return (
          (Jt = function () {
            return n;
          }),
          n
        );
      }
      function Xt() {
        var n = Gt([
          "\n  background-color: ",
          ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n",
        ]);
        return (
          (Xt = function () {
            return n;
          }),
          n
        );
      }
      function nr() {
        var n = Gt([
          "\n  background-color: ",
          ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n",
        ]);
        return (
          (nr = function () {
            return n;
          }),
          n
        );
      }
      var er = (0, a.ZP)(Y.Z).withConfig({ componentId: "sc-4d6dcedb-0" })(
          Vt()
        ),
        tr = a.ZP.div.withConfig({ componentId: "sc-4d6dcedb-1" })(
          qt(),
          function (n) {
            return n.clickable ? (0, a.iv)(_t()) : null;
          }
        ),
        rr = (0, a.ZP)(H.Z).withConfig({ componentId: "sc-4d6dcedb-2" })(
          Yt(),
          function (n) {
            var e = n.theme,
              t = n.severity;
            return 3 === t || 4 === t
              ? e.colors.failure
              : 2 === t
              ? e.colors.warning
              : 1 === t
              ? e.colors.text
              : e.colors.success;
          }
        ),
        or = a.ZP.button.withConfig({ componentId: "sc-4d6dcedb-3" })(
          Qt(),
          function (n) {
            return n.theme.colors.background;
          },
          function (n) {
            return n.theme.colors.text;
          },
          function (n) {
            return n.theme.colors.dropdown;
          },
          function (n) {
            return n.theme.colors.dropdown;
          }
        ),
        ir = (0, a.ZP)(H.Z)
          .attrs({ ellipsis: !0 })
          .withConfig({ componentId: "sc-4d6dcedb-4" })(Kt()),
        ar = a.ZP.div.withConfig({ componentId: "sc-4d6dcedb-5" })(
          Jt(),
          function (n) {
            var e = n.theme;
            return "".concat(e.colors.failure, "33");
          },
          function (n) {
            return n.theme.colors.failure;
          }
        ),
        cr = a.ZP.div.withConfig({ componentId: "sc-4d6dcedb-6" })(
          Xt(),
          function (n) {
            var e = n.theme;
            return "".concat(e.colors.failure, "33");
          }
        );
      function ur(n) {
        var e = n.error;
        return (0, o.jsxs)(ar, {
          children: [
            (0, o.jsx)(cr, { children: (0, o.jsx)(Ct.Z, { width: "24px" }) }),
            (0, o.jsx)("p", { children: e }),
          ],
        });
      }
      var lr = (0, a.ZP)(re).withConfig({ componentId: "sc-4d6dcedb-7" })(
        nr(),
        function (n) {
          var e = n.theme;
          return "".concat(e.colors.warning, "33");
        }
      );
      function sr(n) {
        var e = n.priceImpact;
        return (0, o.jsx)(rr, {
          fontSize: "14px",
          severity: W(e),
          children: e
            ? e.lessThan(C)
              ? "<0.01%"
              : "".concat(e.toFixed(2), "%")
            : "-",
        });
      }
      function dr() {
        var n,
          e,
          t =
            ((n = [
              "\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ",
              ";\n  border: 1px solid ",
              ";\n  background-color: ",
              ";\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (dr = function () {
            return t;
          }),
          t
        );
      }
      var fr = (0, a.ZP)(re).withConfig({ componentId: "sc-baed3881-0" })(
        dr(),
        function (n) {
          return n.theme.radii.default;
        },
        function (n) {
          return n.theme.colors.cardBorder;
        },
        function (n) {
          return n.theme.colors.background;
        }
      );
      function pr(n) {
        var e,
          t,
          r,
          a,
          u = n.trade,
          l = n.onConfirm,
          s = n.allowedSlippage,
          d = n.swapErrorMessage,
          f = n.disabledConfirm,
          p = (0, Bn.$G)().t,
          m = (0, i.useState)(!1),
          h = m[0],
          y = m[1],
          b = (0, i.useMemo)(
            function () {
              return F(u, s);
            },
            [s, u]
          ),
          v = (0, i.useMemo)(
            function () {
              return R(u);
            },
            [u]
          ),
          x = v.priceImpactWithoutFee,
          g = v.realizedLPFee,
          j = W(x);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(fr, {
              children: [
                (0, o.jsxs)(_n, {
                  align: "center",
                  children: [
                    (0, o.jsx)(H.Z, { fontSize: "14px", children: p("Price") }),
                    (0, o.jsxs)(H.Z, {
                      fontSize: "14px",
                      style: {
                        justifyContent: "center",
                        alignItems: "center",
                        display: "flex",
                        textAlign: "right",
                        paddingLeft: "10px",
                      },
                      children: [
                        $(u, h),
                        (0, o.jsx)(or, {
                          onClick: function () {
                            return y(!h);
                          },
                          children: (0, o.jsx)(zt.Z, { width: "14px" }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)(_n, {
                  children: [
                    (0, o.jsxs)(Yn, {
                      children: [
                        (0, o.jsx)(H.Z, {
                          fontSize: "14px",
                          children:
                            u.tradeType === c.YL.EXACT_INPUT
                              ? p("Minimum received")
                              : p("Maximum sold"),
                        }),
                        (0, o.jsx)(Ht, {
                          text: p(
                            "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                          ),
                          ml: "4px",
                        }),
                      ],
                    }),
                    (0, o.jsxs)(Yn, {
                      children: [
                        (0, o.jsx)(H.Z, {
                          fontSize: "14px",
                          children:
                            u.tradeType === c.YL.EXACT_INPUT
                              ? null !==
                                  (r =
                                    null === (e = b[U.gN.OUTPUT]) ||
                                    void 0 === e
                                      ? void 0
                                      : e.toSignificant(4)) && void 0 !== r
                                ? r
                                : "-"
                              : null !==
                                  (a =
                                    null === (t = b[U.gN.INPUT]) || void 0 === t
                                      ? void 0
                                      : t.toSignificant(4)) && void 0 !== a
                              ? a
                              : "-",
                        }),
                        (0, o.jsx)(H.Z, {
                          fontSize: "14px",
                          marginLeft: "4px",
                          children:
                            u.tradeType === c.YL.EXACT_INPUT
                              ? u.outputAmount.currency.symbol
                              : u.inputAmount.currency.symbol,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)(_n, {
                  children: [
                    (0, o.jsxs)(Yn, {
                      children: [
                        (0, o.jsx)(H.Z, {
                          fontSize: "14px",
                          children: p("Price Impact"),
                        }),
                        (0, o.jsx)(Ht, {
                          text: p(
                            "The difference between the market price and your price due to trade size."
                          ),
                          ml: "4px",
                        }),
                      ],
                    }),
                    (0, o.jsx)(sr, { priceImpact: x }),
                  ],
                }),
                (0, o.jsxs)(_n, {
                  children: [
                    (0, o.jsxs)(Yn, {
                      children: [
                        (0, o.jsx)(H.Z, {
                          fontSize: "14px",
                          children: p("Liquidity Provider Fee"),
                        }),
                        (0, o.jsx)(Ht, {
                          text: (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)(H.Z, {
                                mb: "12px",
                                children: p(
                                  "For each trade a %amount% fee is paid",
                                  { amount: "0.25%" }
                                ),
                              }),
                              (0, o.jsxs)(H.Z, {
                                children: [
                                  "- ",
                                  p("%amount% to LP token holders", {
                                    amount: "0.17%",
                                  }),
                                ],
                              }),
                              (0, o.jsxs)(H.Z, {
                                children: [
                                  "- ",
                                  p("%amount% to the Treasury", {
                                    amount: "0.03%",
                                  }),
                                ],
                              }),
                              (0, o.jsxs)(H.Z, {
                                children: [
                                  "- ",
                                  p("%amount% towards CAKE buyback and burn", {
                                    amount: "0.05%",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          ml: "4px",
                        }),
                      ],
                    }),
                    (0, o.jsx)(H.Z, {
                      fontSize: "14px",
                      children: g
                        ? ""
                            .concat(
                              null == g ? void 0 : g.toSignificant(6),
                              " "
                            )
                            .concat(u.inputAmount.currency.symbol)
                        : "-",
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsxs)(qn, {
              children: [
                (0, o.jsx)(en.Z, {
                  variant: j > 2 ? "danger" : "primary",
                  onClick: l,
                  disabled: f,
                  mt: "12px",
                  id: "confirm-swap-or-send",
                  width: "100%",
                  children: p(j > 2 ? "Swap Anyway" : "Confirm Swap"),
                }),
                d ? (0, o.jsx)(ur, { error: d }) : null,
              ],
            }),
          ],
        });
      }
      var mr = t(2349);
      function hr(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function yr(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return hr(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? hr(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function br(n) {
        var e,
          t,
          r = n.trade,
          a = n.allowedSlippage,
          u = n.recipient,
          l = n.showAcceptChanges,
          s = n.onAcceptChanges,
          d = (0, Bn.$G)().t,
          f = (0, i.useMemo)(
            function () {
              return F(r, a);
            },
            [r, a]
          ),
          p = W(
            (0, i.useMemo)(
              function () {
                return R(r);
              },
              [r]
            ).priceImpactWithoutFee
          ),
          m =
            r.tradeType === c.YL.EXACT_INPUT
              ? null === (e = f[U.gN.OUTPUT]) || void 0 === e
                ? void 0
                : e.toSignificant(6)
              : null === (t = f[U.gN.INPUT]) || void 0 === t
              ? void 0
              : t.toSignificant(6),
          h =
            r.tradeType === c.YL.EXACT_INPUT
              ? r.outputAmount.currency.symbol
              : r.inputAmount.currency.symbol,
          y = yr(
            (r.tradeType === c.YL.EXACT_INPUT
              ? d(
                  "Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.",
                  { amount: m, symbol: h }
                )
              : d(
                  "Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.",
                  { amount: m, symbol: h }
                )
            ).split("".concat(m, " ").concat(h)),
            2
          ),
          b = y[0],
          v = y[1],
          x = u ? (0, mr.Z)(u) : "",
          g = yr(
            d("Output will be sent to %recipient%", { recipient: x }).split(x),
            2
          ),
          j = g[0],
          w = g[1];
        return (0, o.jsxs)(re, {
          gap: "md",
          children: [
            (0, o.jsxs)(_n, {
              align: "flex-end",
              children: [
                (0, o.jsxs)(Yn, {
                  gap: "0px",
                  children: [
                    (0, o.jsx)(ye, {
                      currency: r.inputAmount.currency,
                      size: "24px",
                      style: { marginRight: "12px" },
                    }),
                    (0, o.jsx)(ir, {
                      fontSize: "24px",
                      color:
                        l && r.tradeType === c.YL.EXACT_OUTPUT
                          ? "primary"
                          : "text",
                      children: r.inputAmount.toSignificant(6),
                    }),
                  ],
                }),
                (0, o.jsx)(Yn, {
                  gap: "0px",
                  children: (0, o.jsx)(H.Z, {
                    fontSize: "24px",
                    ml: "10px",
                    children: r.inputAmount.currency.symbol,
                  }),
                }),
              ],
            }),
            (0, o.jsx)(Yn, {
              children: (0, o.jsx)(J, { width: "16px", ml: "4px" }),
            }),
            (0, o.jsxs)(_n, {
              align: "flex-end",
              children: [
                (0, o.jsxs)(Yn, {
                  gap: "0px",
                  children: [
                    (0, o.jsx)(ye, {
                      currency: r.outputAmount.currency,
                      size: "24px",
                      style: { marginRight: "12px" },
                    }),
                    (0, o.jsx)(ir, {
                      fontSize: "24px",
                      color:
                        p > 2
                          ? "failure"
                          : l && r.tradeType === c.YL.EXACT_INPUT
                          ? "primary"
                          : "text",
                      children: r.outputAmount.toSignificant(6),
                    }),
                  ],
                }),
                (0, o.jsx)(Yn, {
                  gap: "0px",
                  children: (0, o.jsx)(H.Z, {
                    fontSize: "24px",
                    ml: "10px",
                    children: r.outputAmount.currency.symbol,
                  }),
                }),
              ],
            }),
            l
              ? (0, o.jsx)(lr, {
                  justify: "flex-start",
                  gap: "0px",
                  children: (0, o.jsxs)(_n, {
                    children: [
                      (0, o.jsxs)(Yn, {
                        children: [
                          (0, o.jsx)(Ct.Z, { mr: "8px" }),
                          (0, o.jsxs)(H.Z, {
                            bold: !0,
                            children: [" ", d("Price Updated")],
                          }),
                        ],
                      }),
                      (0, o.jsx)(en.Z, { onClick: s, children: d("Accept") }),
                    ],
                  }),
                })
              : null,
            (0, o.jsx)(re, {
              justify: "flex-start",
              gap: "sm",
              style: { padding: "24px 0 0 0px" },
              children: (0, o.jsxs)(H.Z, {
                small: !0,
                color: "textSubtle",
                textAlign: "left",
                style: { width: "100%" },
                children: [b, (0, o.jsxs)("b", { children: [m, " ", h] }), v],
              }),
            }),
            null !== u
              ? (0, o.jsx)(re, {
                  justify: "flex-start",
                  gap: "sm",
                  style: { padding: "12px 0 0 0px" },
                  children: (0, o.jsxs)(H.Z, {
                    color: "textSubtle",
                    children: [
                      j,
                      (0, o.jsx)("b", { title: u, children: x }),
                      w,
                    ],
                  }),
                })
              : null,
          ],
        });
      }
      var vr = function (n) {
        var e,
          t,
          r,
          a,
          u,
          l,
          s,
          d,
          f,
          p,
          m = n.trade,
          h = n.originalTrade,
          y = n.onAcceptChanges,
          b = n.allowedSlippage,
          v = n.onConfirm,
          x = n.onDismiss,
          g = n.customOnDismiss,
          j = n.recipient,
          w = n.swapErrorMessage,
          O = n.attemptingTxn,
          C = n.txHash,
          k = (0, i.useMemo)(
            function () {
              return Boolean(
                m &&
                  h &&
                  ((e = h),
                  !(
                    (n = m).tradeType === e.tradeType &&
                    (0, c.KA)(n.inputAmount.currency, e.inputAmount.currency) &&
                    n.inputAmount.equalTo(e.inputAmount) &&
                    (0, c.KA)(
                      n.outputAmount.currency,
                      e.outputAmount.currency
                    ) &&
                    n.outputAmount.equalTo(e.outputAmount)
                  ))
              );
              var n, e;
            },
            [h, m]
          ),
          I = (0, Bn.$G)().t,
          T = (0, i.useCallback)(
            function () {
              return m
                ? (0, o.jsx)(br, {
                    trade: m,
                    allowedSlippage: b,
                    recipient: j,
                    showAcceptChanges: k,
                    onAcceptChanges: y,
                  })
                : null;
            },
            [b, y, j, k, m]
          ),
          P = (0, i.useCallback)(
            function () {
              return m
                ? (0, o.jsx)(pr, {
                    onConfirm: v,
                    trade: m,
                    disabledConfirm: k,
                    swapErrorMessage: w,
                    allowedSlippage: b,
                  })
                : null;
            },
            [b, v, k, w, m]
          ),
          S = I("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
            amountA:
              null !==
                (s =
                  null == m || null === (e = m.inputAmount) || void 0 === e
                    ? void 0
                    : e.toSignificant(6)) && void 0 !== s
                ? s
                : "",
            symbolA:
              null !==
                (d =
                  null == m ||
                  null === (t = m.inputAmount) ||
                  void 0 === t ||
                  null === (r = t.currency) ||
                  void 0 === r
                    ? void 0
                    : r.symbol) && void 0 !== d
                ? d
                : "",
            amountB:
              null !==
                (f =
                  null == m || null === (a = m.outputAmount) || void 0 === a
                    ? void 0
                    : a.toSignificant(6)) && void 0 !== f
                ? f
                : "",
            symbolB:
              null !==
                (p =
                  null == m ||
                  null === (u = m.outputAmount) ||
                  void 0 === u ||
                  null === (l = u.currency) ||
                  void 0 === l
                    ? void 0
                    : l.symbol) && void 0 !== p
                ? p
                : "",
          }),
          Z = (0, i.useCallback)(
            function () {
              return w
                ? (0, o.jsx)(Dt, { onDismiss: x, message: w })
                : (0, o.jsx)(Lt, { topContent: T, bottomContent: P });
            },
            [x, P, T, w]
          );
        return (0, o.jsx)(Ut, {
          title: I("Confirm Swap"),
          onDismiss: x,
          customOnDismiss: g,
          attemptingTxn: O,
          hash: C,
          content: Z,
          pendingText: S,
          currencyToAdd: null == m ? void 0 : m.outputAmount.currency,
        });
      };
      function xr(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var gr = function (n) {
          return (0, o.jsx)(
            Q.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        xr(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 24 24" }, n, {
              children: (0, o.jsx)("path", {
                d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z",
              }),
            })
          );
        },
        jr = t(69241),
        wr = t(95565),
        Or = t(75472),
        Cr = t.n(Or),
        kr = t(12737);
      function Ir(n, e) {
        return null != e &&
          "undefined" != typeof Symbol &&
          e[Symbol.hasInstance]
          ? !!e[Symbol.hasInstance](n)
          : n instanceof e;
      }
      function Tr(n, e) {
        return (function (n, e) {
          var t,
            r = (0, i.useMemo)(
              function () {
                return null !==
                  (t =
                    null == e
                      ? void 0
                      : e.filter(function (n) {
                          return (
                            !1 !== (0, D.UJ)(null == n ? void 0 : n.address)
                          );
                        })) && void 0 !== t
                  ? t
                  : [];
              },
              [e]
            ),
            o = (0, i.useMemo)(
              function () {
                return r.map(function (n) {
                  return n.address;
                });
              },
              [r]
            ),
            a = (0, kr._Y)(
              o,
              jr.ZP,
              "balanceOf",
              (0, i.useMemo)(
                function () {
                  return [n];
                },
                [n]
              )
            ),
            u = (0, i.useMemo)(
              function () {
                return a.some(function (n) {
                  return n.loading;
                });
              },
              [a]
            );
          return [
            (0, i.useMemo)(
              function () {
                return n && r.length > 0
                  ? r.reduce(function (n, e, t) {
                      var r,
                        o,
                        i =
                          null == a ||
                          null === (r = a[t]) ||
                          void 0 === r ||
                          null === (o = r.result) ||
                          void 0 === o
                            ? void 0
                            : o[0],
                        u = i ? c.QA.BigInt(i.toString()) : void 0;
                      return u && (n[e.address] = new c.dt(e, u)), n;
                    }, {})
                  : {};
              },
              [n, r, a]
            ),
            u,
          ];
        })(n, e)[0];
      }
      function Pr(n, e) {
        var t,
          r,
          o,
          a = (0, i.useMemo)(
            function () {
              return null !==
                (t =
                  null == e
                    ? void 0
                    : e.filter(function (n) {
                        return Ir(n, c.WU);
                      })) && void 0 !== t
                ? t
                : [];
            },
            [e]
          ),
          u = Tr(n, a),
          l = (function (n) {
            var e = (0, wr.gq)(),
              t = (0, i.useMemo)(
                function () {
                  return n
                    ? Cr()(
                        n.map(D.UJ).filter(function (n) {
                          return !1 !== n;
                        })
                      )
                    : [];
                },
                [n]
              ),
              r = (0, kr.es)(
                e,
                "getEthBalance",
                t.map(function (n) {
                  return [n];
                })
              );
            return (0, i.useMemo)(
              function () {
                return t.reduce(function (n, e, t) {
                  var o,
                    i,
                    a =
                      null == r ||
                      null === (o = r[t]) ||
                      void 0 === o ||
                      null === (i = o.result) ||
                      void 0 === i
                        ? void 0
                        : i[0];
                  return a && (n[e] = c.ih.ether(c.QA.BigInt(a.toString()))), n;
                }, {});
              },
              [t, r]
            );
          })(
            (0, i.useMemo)(
              function () {
                return (
                  null !==
                    (r =
                      null == e
                        ? void 0
                        : e.some(function (n) {
                            return n === c.c0;
                          })) &&
                  void 0 !== r &&
                  r
                );
              },
              [e]
            )
              ? [n]
              : []
          );
        return (0, i.useMemo)(
          function () {
            return null !==
              (o =
                null == e
                  ? void 0
                  : e.map(function (e) {
                      if (n && e)
                        return Ir(e, c.WU)
                          ? u[e.address]
                          : e === c.c0
                          ? l[n]
                          : void 0;
                    })) && void 0 !== o
              ? o
              : [];
          },
          [n, e, l, u]
        );
      }
      function Sr(n, e) {
        return Pr(n, [e])[0];
      }
      var Zr = t(73727),
        Ar = t(69348);
      function Er() {
        var n,
          e,
          t =
            ((n = [
              "\n  background-color: ",
              ";\n  border: 0;\n  border-radius: 8px;\n  box-shadow: ",
              ";\n  color: ",
              ";\n  display: block;\n  font-size: 16px;\n  height: ",
              ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n  border: 1px solid ",
              ";\n\n  &::placeholder {\n    color: ",
              ";\n  }\n\n  &:disabled {\n    background-color: ",
              ";\n    box-shadow: none;\n    color: ",
              ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ",
              ";\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Er = function () {
            return t;
          }),
          t
        );
      }
      var Nr = a.ZP.input
        .withConfig({ componentId: "sc-c2969364-0" })
        .withConfig({ componentId: "sc-f8e81065-0" })(
        Er(),
        function (n) {
          return n.theme.colors.input;
        },
        function (n) {
          var e = n.isSuccess,
            t = void 0 !== e && e,
            r = n.isWarning,
            o = void 0 !== r && r,
            i = n.theme;
          return o
            ? i.shadows.warning
            : t
            ? i.shadows.success
            : i.shadows.inset;
        },
        function (n) {
          return n.theme.colors.text;
        },
        function (n) {
          var e = n.scale;
          switch (void 0 === e ? "md" : e) {
            case "sm":
              return "32px";
            case "lg":
              return "48px";
            default:
              return "40px";
          }
        },
        function (n) {
          return n.theme.colors.inputSecondary;
        },
        function (n) {
          return n.theme.colors.textSubtle;
        },
        function (n) {
          return n.theme.colors.backgroundDisabled;
        },
        function (n) {
          return n.theme.colors.textDisabled;
        },
        function (n) {
          return n.theme.shadows.focus;
        }
      );
      Nr.defaultProps = { scale: "md", isSuccess: !1, isWarning: !1 };
      var Mr = Nr,
        Lr = t(97486),
        Dr = t(2021);
      function Ur() {
        var n,
          e,
          t =
            ((n = [
              "\n  border: 1px solid ",
              ";\n  border-radius: 10px;\n  display: flex;\n  padding: 6px;\n\n  align-items: center;\n  :hover {\n    cursor: ",
              ";\n    background-color: ",
              ";\n  }\n\n  background-color: ",
              ";\n  opacity: ",
              ";\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Ur = function () {
            return t;
          }),
          t
        );
      }
      var zr = a.ZP.div.withConfig({ componentId: "sc-a2b8c16e-0" })(
        Ur(),
        function (n) {
          var e = n.theme;
          return n.disable ? "transparent" : e.colors.dropdown;
        },
        function (n) {
          return !n.disable && "pointer";
        },
        function (n) {
          var e = n.theme;
          return !n.disable && e.colors.background;
        },
        function (n) {
          var e = n.theme;
          return n.disable && e.colors.dropdown;
        },
        function (n) {
          return n.disable && "0.4";
        }
      );
      function Br(n) {
        var e = n.chainId,
          t = n.onSelect,
          r = n.selectedCurrency,
          i = (0, Bn.$G)().t;
        return (0, o.jsxs)(re, {
          gap: "md",
          children: [
            (0, o.jsxs)(qn, {
              children: [
                (0, o.jsx)(H.Z, {
                  fontSize: "14px",
                  children: i("Common bases"),
                }),
                (0, o.jsx)(Ht, {
                  text: i(
                    "These tokens are commonly paired with other tokens."
                  ),
                  ml: "4px",
                }),
              ],
            }),
            (0, o.jsxs)(qn, {
              gap: "auto",
              children: [
                (0, o.jsxs)(zr, {
                  onClick: function () {
                    (r && (0, c.KA)(r, c.c0)) || t(c.c0);
                  },
                  disable: r === c.c0,
                  children: [
                    (0, o.jsx)(ye, {
                      currency: c.c0,
                      style: { marginRight: 8 },
                    }),
                    (0, o.jsx)(H.Z, { children: "BNB" }),
                  ],
                }),
                (e ? g[e] : []).map(function (n) {
                  var e,
                    i,
                    a =
                      ((e = r),
                      (null != (i = c.WU) &&
                      "undefined" != typeof Symbol &&
                      i[Symbol.hasInstance]
                        ? !!i[Symbol.hasInstance](e)
                        : e instanceof i) && r.address === n.address);
                  return (0, o.jsxs)(
                    zr,
                    {
                      onClick: function () {
                        return !a && t(n);
                      },
                      disable: a,
                      children: [
                        (0, o.jsx)(ye, {
                          currency: n,
                          style: { marginRight: 8, borderRadius: "50%" },
                        }),
                        (0, o.jsx)(H.Z, { children: n.symbol }),
                      ],
                    },
                    n.address
                  );
                }),
              ],
            }),
          ],
        });
      }
      var Rr = t(1314);
      function Fr(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Wr(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function $r() {
        var n = Wr([
          "\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n",
        ]);
        return (
          ($r = function () {
            return n;
          }),
          n
        );
      }
      function Hr() {
        var n = Wr([
          "\n  animation: 2s ",
          " linear infinite;\n  height: ",
          ";\n  width: ",
          ";\n  path {\n    stroke: ",
          ";\n  }\n",
        ]);
        return (
          (Hr = function () {
            return n;
          }),
          n
        );
      }
      var Gr = (0, a.F4)($r()),
        Vr = a.ZP.svg.withConfig({ componentId: "sc-fa227f0-0" })(
          Hr(),
          Gr,
          function (n) {
            return n.size;
          },
          function (n) {
            return n.size;
          },
          function (n) {
            var e = n.stroke,
              t = n.theme;
            return null != e ? e : t.colors.primary;
          }
        );
      function _r(n) {
        var e = n.size,
          t = void 0 === e ? "16px" : e,
          r = n.stroke,
          i = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, ["size", "stroke"]);
        return (0, o.jsx)(
          Vr,
          (function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                  })
                )),
                r.forEach(function (e) {
                  Fr(n, e, t[e]);
                });
            }
            return n;
          })(
            {
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              size: t,
              stroke: r,
            },
            i,
            {
              children: (0, o.jsx)("path", {
                d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5",
                strokeWidth: "2.5",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
            }
          )
        );
      }
      var qr = t(84267);
      function Yr(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Qr() {
        var n = Yr([
          "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) auto;\n  grid-gap: 10px;\n  align-items: center;\n\n  opacity: ",
          ";\n\n  ",
          " {\n    grid-gap: 16px;\n  }\n",
        ]);
        return (
          (Qr = function () {
            return n;
          }),
          n
        );
      }
      function Kr() {
        var n = Yr([
          "\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n  stroke: ",
          ";\n",
        ]);
        return (
          (Kr = function () {
            return n;
          }),
          n
        );
      }
      function Jr() {
        var n = Yr([
          "\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 140px;\n  font-size: 12px;\n",
        ]);
        return (
          (Jr = function () {
            return n;
          }),
          n
        );
      }
      var Xr = a.ZP.div.withConfig({ componentId: "sc-dc1869dc-0" })(
          Qr(),
          function (n) {
            return n.dim ? "0.4" : "1";
          },
          function (n) {
            return n.theme.mediaQueries.md;
          }
        ),
        no = (0, a.ZP)(qr.Z).withConfig({ componentId: "sc-dc1869dc-1" })(
          Kr(),
          function (n) {
            return n.theme.colors.success;
          }
        ),
        eo = a.ZP.div.withConfig({ componentId: "sc-dc1869dc-2" })(Jr());
      function to(n) {
        var e,
          t,
          r = n.token,
          i = n.style,
          a = n.dim,
          c = n.showImportView,
          u = n.setImportToken,
          l = (0, In.Z)().chainId,
          s = _().isMobile,
          d = (0, Bn.$G)().t,
          f = (0, Dr.qB)(),
          p =
            l &&
            (null == f ||
            null === (e = f[l]) ||
            void 0 === e ||
            null === (t = e[r.address]) ||
            void 0 === t
              ? void 0
              : t.list),
          m = (0, Zn.EH)(r),
          h = (0, Zn.ZN)(r);
        return (0, o.jsxs)(Xr, {
          style: i,
          children: [
            (0, o.jsx)(ye, {
              currency: r,
              size: s ? "20px" : "24px",
              style: { opacity: a ? "0.6" : "1" },
            }),
            (0, o.jsxs)(re, {
              gap: "4px",
              style: { opacity: a ? "0.6" : "1" },
              children: [
                (0, o.jsxs)(qn, {
                  children: [
                    (0, o.jsx)(H.Z, { mr: "8px", children: r.symbol }),
                    (0, o.jsx)(H.Z, {
                      color: "textDisabled",
                      children: (0, o.jsx)(eo, {
                        title: r.name,
                        children: r.name,
                      }),
                    }),
                  ],
                }),
                p &&
                  p.logoURI &&
                  (0, o.jsxs)(Yn, {
                    children: [
                      (0, o.jsxs)(H.Z, {
                        fontSize: s ? "10px" : "14px",
                        mr: "4px",
                        color: "textSubtle",
                        children: [d("via"), " ", p.name],
                      }),
                      (0, o.jsx)(we, { logoURI: p.logoURI, size: "12px" }),
                    ],
                  }),
              ],
            }),
            h || m
              ? (0, o.jsxs)(Yn, {
                  style: { minWidth: "fit-content" },
                  children: [
                    (0, o.jsx)(no, {}),
                    (0, o.jsx)(H.Z, { color: "success", children: "Active" }),
                  ],
                })
              : (0, o.jsx)(en.Z, {
                  scale: s ? "sm" : "md",
                  width: "fit-content",
                  onClick: function () {
                    u && u(r), c();
                  },
                  children: d("Import"),
                }),
          ],
        });
      }
      function ro(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function oo(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function io(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return ro(n);
          })(n) ||
          (function (n) {
            if (
              ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n["@@iterator"]
            )
              return Array.from(n);
          })(n) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return ro(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? ro(n, e)
                  : void 0
              );
            }
          })(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ao() {
        var n = oo([
          "\n  white-space: nowrap;\n  overflow: hidden;\n  max-width: 5rem;\n  text-overflow: ellipsis;\n",
        ]);
        return (
          (ao = function () {
            return n;
          }),
          n
        );
      }
      function co() {
        var n = oo([
          "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-gap: 16px;\n  align-items: center;\n",
        ]);
        return (
          (co = function () {
            return n;
          }),
          n
        );
      }
      function uo() {
        var n = oo([
          "\n  padding: 4px 20px;\n  height: 56px;\n  display: grid;\n  grid-template-columns: auto minmax(auto, 1fr) minmax(0, 72px);\n  grid-gap: 8px;\n  cursor: ",
          ";\n  pointer-events: ",
          ";\n  :hover {\n    background-color: ",
          ";\n  }\n  opacity: ",
          ";\n",
        ]);
        return (
          (uo = function () {
            return n;
          }),
          n
        );
      }
      function lo(n) {
        return (
          (e = n),
          (
            null != (t = c.WU) &&
            "undefined" != typeof Symbol &&
            t[Symbol.hasInstance]
              ? t[Symbol.hasInstance](e)
              : e instanceof t
          )
            ? n.address
            : n === c.c0
            ? "ETHER"
            : ""
        );
        var e, t;
      }
      var so = (0, a.ZP)(H.Z).withConfig({ componentId: "sc-f3c3ef3d-0" })(
          ao()
        ),
        fo = a.ZP.div.withConfig({ componentId: "sc-f3c3ef3d-1" })(co());
      function po(n) {
        var e = n.balance;
        return (0, o.jsx)(so, {
          title: e.toExact(),
          children: e.toSignificant(4),
        });
      }
      var mo = (0, a.ZP)(_n).withConfig({ componentId: "sc-f3c3ef3d-2" })(
        uo(),
        function (n) {
          return !n.disabled && "pointer";
        },
        function (n) {
          return n.disabled && "none";
        },
        function (n) {
          var e = n.theme;
          return !n.disabled && e.colors.background;
        },
        function (n) {
          var e = n.disabled,
            t = n.selected;
          return e || t ? 0.5 : 1;
        }
      );
      function ho(n) {
        var e = n.currency,
          t = n.onSelect,
          r = n.isSelected,
          i = n.otherSelected,
          a = n.style,
          c = (0, ze.Ge)().account,
          u = (0, Bn.$G)().t,
          l = lo(e),
          s = (0, Dr.z0)(),
          d = (0, D.wK)(s, e),
          f = (0, Zn.EH)(e),
          p = Sr(null != c ? c : void 0, e);
        return (0, o.jsxs)(mo, {
          style: a,
          className: "token-item-".concat(l),
          onClick: function () {
            return r ? null : t();
          },
          disabled: r,
          selected: i,
          children: [
            (0, o.jsx)(ye, { currency: e, size: "24px" }),
            (0, o.jsxs)(oe, {
              children: [
                (0, o.jsx)(H.Z, { bold: !0, children: e.symbol }),
                (0, o.jsxs)(H.Z, {
                  color: "textSubtle",
                  small: !0,
                  ellipsis: !0,
                  maxWidth: "200px",
                  children: [
                    !d && f && "".concat(u("Added by user"), " •"),
                    " ",
                    e.name,
                  ],
                }),
              ],
            }),
            (0, o.jsx)(Yn, {
              style: { justifySelf: "flex-end" },
              children: p
                ? (0, o.jsx)(po, { balance: p })
                : c
                ? (0, o.jsx)(_r, {})
                : null,
            }),
          ],
        });
      }
      function yo(n) {
        var e = n.height,
          t = n.currencies,
          r = n.inactiveCurrencies,
          a = n.selectedCurrency,
          u = n.onCurrencySelect,
          l = n.otherCurrency,
          s = n.fixedListRef,
          d = n.showBNB,
          f = n.showImportView,
          p = n.setImportToken,
          m = n.breakIndex,
          h = (0, i.useMemo)(
            function () {
              var n = d
                ? [c.F.ETHER].concat(io(t), io(r))
                : io(t).concat(io(r));
              return (
                void 0 !== m &&
                  (n = io(n.slice(0, m)).concat(
                    [void 0],
                    io(n.slice(m, n.length))
                  )),
                n
              );
            },
            [m, t, r, d]
          ),
          y = (0, In.Z)().chainId,
          b = (0, Bn.$G)().t,
          v = (0, i.useCallback)(
            function (n) {
              var e = n.data,
                r = n.index,
                i = n.style,
                s = e[r],
                d = Boolean(a && (0, c.KA)(a, s)),
                h = Boolean(l && (0, c.KA)(l, s)),
                v = (0, Sn.pu)(s, y),
                x = r > t.length;
              return r !== m && e
                ? x && v
                  ? (0, o.jsx)(to, {
                      style: i,
                      token: v,
                      showImportView: f,
                      setImportToken: p,
                      dim: !0,
                    })
                  : (0, o.jsx)(ho, {
                      style: i,
                      currency: s,
                      isSelected: d,
                      onSelect: function () {
                        return u(s);
                      },
                      otherSelected: h,
                    })
                : (0, o.jsx)(fo, {
                    style: i,
                    children: (0, o.jsx)(it, {
                      padding: "8px 12px",
                      borderRadius: "8px",
                      children: (0, o.jsxs)(_n, {
                        children: [
                          (0, o.jsx)(H.Z, {
                            small: !0,
                            children: b(
                              "Expanded results from inactive Token Lists"
                            ),
                          }),
                          (0, o.jsx)(Ht, {
                            text: b(
                              "Tokens from inactive lists. Import specific tokens below or click 'Manage' to activate more lists."
                            ),
                            ml: "4px",
                          }),
                        ],
                      }),
                    }),
                  });
            },
            [a, l, y, t.length, m, u, b, f, p]
          ),
          x = (0, i.useCallback)(function (n, e) {
            return lo(e[n]);
          }, []);
        return (0, o.jsx)(Rr.t7, {
          height: e,
          ref: s,
          width: "100%",
          itemData: h,
          itemCount: h.length,
          itemSize: 56,
          itemKey: x,
          children: v,
        });
      }
      function bo(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function vo(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return bo(n);
          })(n) ||
          (function (n) {
            if (
              ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n["@@iterator"]
            )
              return Array.from(n);
          })(n) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return bo(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? bo(n, e)
                  : void 0
              );
            }
          })(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function xo(n) {
        var e = (0, D.UJ)(n);
        if (e) {
          var t = e.toLowerCase();
          return function (n) {
            return "address" in n && t === n.address.toLowerCase();
          };
        }
        var r = n
          .toLowerCase()
          .split(/\s+/)
          .filter(function (n) {
            return n.length > 0;
          });
        if (0 === r.length)
          return function () {
            return !0;
          };
        var o = function (n) {
          var e = n
            .toLowerCase()
            .split(/\s+/)
            .filter(function (n) {
              return n.length > 0;
            });
          return r.every(function (n) {
            return (
              0 === n.length ||
              e.some(function (e) {
                return e.startsWith(n) || e.endsWith(n);
              })
            );
          });
        };
        return function (n) {
          var e = n.symbol,
            t = n.name;
          return (e && o(e)) || (t && o(t));
        };
      }
      var go;
      function jo(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function wo(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Oo(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })
            )),
            r.forEach(function (e) {
              wo(n, e, t[e]);
            });
        }
        return n;
      }
      function Co(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return jo(n);
          })(n) ||
          (function (n) {
            if (
              ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n["@@iterator"]
            )
              return Array.from(n);
          })(n) ||
          ko(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function ko(n, e) {
        if (n) {
          if ("string" == typeof n) return jo(n, e);
          var t = Object.prototype.toString.call(n).slice(8, -1);
          return (
            "Object" === t && n.constructor && (t = n.constructor.name),
            "Map" === t || "Set" === t
              ? Array.from(t)
              : "Arguments" === t ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
              ? jo(n, e)
              : void 0
          );
        }
      }
      var Io = function (n) {
        var e = n.selectedCurrency,
          t = n.onCurrencySelect,
          r = n.otherSelectedCurrency,
          a = n.showCommonBases,
          u = n.showImportView,
          l = n.setImportToken,
          s = (0, Bn.$G)().t,
          d = (0, In.Z)().chainId,
          f = (0, i.useRef)(),
          p = (0, i.useState)(""),
          m = p[0],
          h = p[1],
          y = (0, Lr.Z)(m, 200),
          b = (0, i.useState)(!1)[0],
          v = (0, Zn.e_)(),
          x = (0, Zn.dQ)(y),
          g = (0, Zn.EH)(x),
          j = (function (n, e) {
            return (
              (function (n) {
                if (Array.isArray(n)) return n;
              })(n) ||
              (function (n, e) {
                var t =
                  null == n
                    ? null
                    : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"];
                if (null != t) {
                  var r,
                    o,
                    i = [],
                    a = !0,
                    c = !1;
                  try {
                    for (
                      t = t.call(n);
                      !(a = (r = t.next()).done) &&
                      (i.push(r.value), !e || i.length !== e);
                      a = !0
                    );
                  } catch (n) {
                    (c = !0), (o = n);
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return i;
                }
              })(n, e) ||
              ko(n, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })((0, Tn.TO)(), 1)[0],
          w = (0, i.useMemo)(
            function () {
              var n = y.toLowerCase().trim();
              return "" === n || "b" === n || "bn" === n || "bnb" === n;
            },
            [y]
          ),
          O = (function (n, e) {
            return (0, i.useMemo)(
              function () {
                if (!n) return [];
                var t = e.toLowerCase().trim(),
                  r = t.split(/\s+/).filter(function (n) {
                    return n.length > 0;
                  });
                if (r.length > 1) return n;
                var o = [],
                  i = [],
                  a = [];
                return (
                  n.forEach(function (n) {
                    var e,
                      c,
                      u =
                        null === (e = n.symbol) || void 0 === e
                          ? void 0
                          : e.toLowerCase();
                    return u === r[0] ||
                      (null === (c = n.name) || void 0 === c
                        ? void 0
                        : c.toLowerCase()) === t
                      ? o.push(n)
                      : u.startsWith(t)
                      ? i.push(n)
                      : a.push(n);
                  }),
                  vo(o).concat(vo(i), vo(a))
                );
              },
              [n, e]
            );
          })(
            (0, i.useMemo)(
              function () {
                var n = xo(y);
                return Object.values(v).filter(n);
              },
              [v, y]
            ),
            y
          ),
          C = (function (n) {
            var e = (function () {
                var n = (0, ze.Ge)().account,
                  e = (0, Zn.e_)(),
                  t = Tr(
                    null != n ? n : void 0,
                    (0, i.useMemo)(
                      function () {
                        return Object.values(null != e ? e : {});
                      },
                      [e]
                    )
                  );
                return null != t ? t : {};
              })(),
              t = (0, i.useMemo)(
                function () {
                  return (function (n) {
                    return function (e, t) {
                      var r,
                        o,
                        i =
                          ((r = n[e.address]),
                          (o = n[t.address]),
                          r && o
                            ? r.greaterThan(o)
                              ? -1
                              : r.equalTo(o)
                              ? 0
                              : 1
                            : r && r.greaterThan("0")
                            ? -1
                            : o && o.greaterThan("0")
                            ? 1
                            : 0);
                      return 0 !== i
                        ? i
                        : e.symbol && t.symbol
                        ? e.symbol.toLowerCase() < t.symbol.toLowerCase()
                          ? -1
                          : 1
                        : e.symbol || t.symbol
                        ? -1
                        : 0;
                    };
                  })(null != e ? e : {});
                },
                [e]
              );
            return (0, i.useMemo)(
              function () {
                return n
                  ? function (n, e) {
                      return -1 * t(n, e);
                    }
                  : t;
              },
              [n, t]
            );
          })(b),
          k = (0, i.useMemo)(
            function () {
              return Co(O).sort(C);
            },
            [O, C]
          ),
          I = (0, i.useCallback)(
            function (n) {
              t(n),
                j &&
                  (go ||
                    (go = new Audio(
                      "https://pancake.mypinata.cloud/ipfs/Qmc5kLWfQpQHu96iwre9DWSjtedXqVUgmCvehdcVPWZtc7"
                    )),
                  go).play();
            },
            [j, t]
          ),
          T = (0, i.useRef)();
        (0, i.useEffect)(function () {
          T.current.focus();
        }, []);
        var P = (0, i.useCallback)(function (n) {
            var e,
              t = n.target.value,
              r = (0, D.UJ)(t);
            h(r || t),
              null === (e = f.current) || void 0 === e || e.scrollTo(0);
          }, []),
          S = (0, i.useCallback)(
            function (n) {
              if ("Enter" === n.key)
                if ("bnb" === y.toLowerCase().trim()) I(c.c0);
                else if (k.length > 0) {
                  var e;
                  ((null === (e = k[0].symbol) || void 0 === e
                    ? void 0
                    : e.toLowerCase()) !== y.trim().toLowerCase() &&
                    1 !== k.length) ||
                    I(k[0]);
                }
            },
            [k, I, y]
          ),
          Z = (function (n) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 10,
              t = (0, Dr.R0)(),
              r = (0, Dr.eu)(),
              o = (0, In.Z)().chainId,
              a = (0, Zn.e_)();
            return (0, i.useMemo)(
              function () {
                if (!n || 0 === n.trim().length) return [];
                var i = xo(n),
                  c = [],
                  u = [],
                  l = {},
                  s = n.toLowerCase().trim(),
                  d = !0,
                  f = !1,
                  p = void 0;
                try {
                  for (
                    var m, h = r[Symbol.iterator]();
                    !(d = (m = h.next()).done);
                    d = !0
                  ) {
                    var y = m.value,
                      b = t[y].current;
                    if (b) {
                      var v = !0,
                        x = !1,
                        g = void 0;
                      try {
                        for (
                          var j, w = b.tokens[Symbol.iterator]();
                          !(v = (j = w.next()).done);
                          v = !0
                        ) {
                          var O = j.value;
                          if (
                            O.chainId === o &&
                            !(O.address in a) &&
                            !l[O.address] &&
                            i(O)
                          ) {
                            var C,
                              k,
                              I,
                              T,
                              P,
                              S =
                                null !==
                                  (P =
                                    null ===
                                      (k =
                                        null === (C = O.tags) || void 0 === C
                                          ? void 0
                                          : C.map(function (n) {
                                              var e;
                                              if (
                                                null === (e = b.tags) ||
                                                void 0 === e
                                                  ? void 0
                                                  : e[n]
                                              )
                                                return Oo({}, b.tags[n], {
                                                  id: n,
                                                });
                                            })) || void 0 === k
                                      ? void 0
                                      : k.filter(function (n) {
                                          return Boolean(n);
                                        })) && void 0 !== P
                                  ? P
                                  : [],
                              Z = new ce.DT(O, S);
                            (l[Z.address] = !0),
                              (null === (I = O.name) || void 0 === I
                                ? void 0
                                : I.toLowerCase()) === s ||
                              (null === (T = O.symbol) || void 0 === T
                                ? void 0
                                : T.toLowerCase()) === s
                                ? c.push(Z)
                                : u.push(Z);
                          }
                        }
                      } catch (n) {
                        (x = !0), (g = n);
                      } finally {
                        try {
                          v || null == w.return || w.return();
                        } finally {
                          if (x) throw g;
                        }
                      }
                    }
                  }
                } catch (n) {
                  (f = !0), (p = n);
                } finally {
                  try {
                    d || null == h.return || h.return();
                  } finally {
                    if (f) throw p;
                  }
                }
                return Co(c).concat(Co(u)).slice(0, e);
              },
              [a, o, r, t, e, n]
            );
          })(y),
          A = Boolean(null == Z ? void 0 : Z.length),
          E = (0, i.useCallback)(
            function () {
              return !x || g || A
                ? Boolean(null == k ? void 0 : k.length) || A
                  ? (0, o.jsx)(wn.Z, {
                      margin: "24px -24px",
                      children: (0, o.jsx)(yo, {
                        height: 390,
                        showBNB: w,
                        currencies: k,
                        inactiveCurrencies: Z,
                        breakIndex:
                          Boolean(null == Z ? void 0 : Z.length) && k
                            ? k.length
                            : void 0,
                        onCurrencySelect: I,
                        otherCurrency: r,
                        selectedCurrency: e,
                        fixedListRef: f,
                        showImportView: u,
                        setImportToken: l,
                      }),
                    })
                  : (0, o.jsx)(oe, {
                      style: { padding: "20px", height: "100%" },
                      children: (0, o.jsx)(H.Z, {
                        color: "textSubtle",
                        textAlign: "center",
                        mb: "20px",
                        children: s("No results found."),
                      }),
                    })
                : (0, o.jsx)(oe, {
                    style: { padding: "20px 0", height: "100%" },
                    children: (0, o.jsx)(to, {
                      token: x,
                      showImportView: u,
                      setImportToken: l,
                    }),
                  });
            },
            [Z, k, I, A, r, x, g, e, l, w, u, s]
          );
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(re, {
              gap: "16px",
              children: [
                (0, o.jsx)(Qn, {
                  children: (0, o.jsx)(Mr, {
                    id: "token-search-input",
                    placeholder: s("Search name or paste address"),
                    scale: "lg",
                    autoComplete: "off",
                    value: m,
                    ref: T,
                    onChange: P,
                    onKeyDown: S,
                  }),
                }),
                a &&
                  (0, o.jsx)(Br, {
                    chainId: d,
                    onSelect: I,
                    selectedCurrency: e,
                  }),
              ],
            }),
            E(),
          ],
        });
      };
      function To() {
        var n,
          e,
          t =
            ((n = ["\n  display: grid;\n  ", "\n  ", "\n"]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (To = function () {
            return t;
          }),
          t
        );
      }
      var Po,
        So = (0, a.ZP)(wn.Z)
          .withConfig({ componentId: "sc-b3fe3fbc-0" })
          .withConfig({ componentId: "sc-f411e064-0" })(To(), rn.GQ, rn.eC),
        Zo = "primary";
      function Ao(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var Eo,
        No =
          (Ao((Po = {}), "md", {
            height: "28px",
            padding: "0 8px",
            fontSize: "14px",
          }),
          Ao(Po, "sm", { height: "24px", padding: "0 4px", fontSize: "12px" }),
          Po),
        Mo =
          (Ao((Eo = {}), Zo, { backgroundColor: "primary" }),
          Ao(Eo, "secondary", { backgroundColor: "secondary" }),
          Ao(Eo, "success", { backgroundColor: "success" }),
          Ao(Eo, "textDisabled", { backgroundColor: "textDisabled" }),
          Ao(Eo, "textSubtle", { backgroundColor: "textSubtle" }),
          Ao(Eo, "binance", { backgroundColor: "binance" }),
          Ao(Eo, "failure", { backgroundColor: "failure" }),
          Ao(Eo, "warning", { backgroundColor: "warning" }),
          Eo);
      function Lo() {
        var n,
          e,
          t =
            ((n = [
              "\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
              "\n\n  ",
              "\n  ",
              "\n  ",
              "\n  ",
              "\n\n  ",
              "\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Lo = function () {
            return t;
          }),
          t
        );
      }
      var Do = a.ZP.div
        .withConfig({ componentId: "sc-26d88be7-0" })
        .withConfig({ componentId: "sc-40404043-0" })(
        Lo(),
        function (n) {
          var e = n.textTransform;
          return e && "text-transform: ".concat(e, ";");
        },
        (0, rn.bU)({ prop: "scale", variants: No }),
        (0, rn.bU)({ variants: Mo }),
        rn.Dh,
        rn.cp,
        function (n) {
          var e = n.outline,
            t = n.theme,
            r = n.variant;
          if (e) {
            var o = Mo[void 0 === r ? Zo : r].backgroundColor,
              i = t.colors[o];
            return "\n      color: "
              .concat(i, ";\n      background: ")
              .concat(t.colors.background, ";\n      border: 2px solid ")
              .concat(i, ";\n    ");
          }
          return "";
        }
      );
      function Uo(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var zo = function (n) {
        var e = n.startIcon,
          t = n.endIcon,
          r = n.children,
          a = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, ["startIcon", "endIcon", "children"]);
        return (0, o.jsxs)(
          Do,
          (function (n) {
            for (
              var e = arguments,
                t = function (t) {
                  var r = null != e[t] ? e[t] : {},
                    o = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(r).filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable;
                      })
                    )),
                    o.forEach(function (e) {
                      Uo(n, e, r[e]);
                    });
                },
                r = 1;
              r < arguments.length;
              r++
            )
              t(r);
            return n;
          })({}, a, {
            children: [
              i.isValidElement(e) && i.cloneElement(e, { mr: "0.5em" }),
              r,
              i.isValidElement(t) && i.cloneElement(t, { ml: "0.5em" }),
            ],
          })
        );
      };
      zo.defaultProps = { variant: "primary", scale: "md", outline: !1 };
      var Bo = zo;
      function Ro(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Fo(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var Wo = {
        warning: { background: "#FFB23719", borderColor: "warning" },
        danger: { background: "#ED4B9E19", borderColor: "failure" },
        success: {
          background: "rgba(49, 208, 170, 0.1)",
          borderColor: "success",
        },
      };
      function $o(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Ho(n) {
        for (
          var e = arguments,
            t = function (t) {
              var r = null != e[t] ? e[t] : {},
                o = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(r).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(r, n).enumerable;
                  })
                )),
                o.forEach(function (e) {
                  $o(n, e, r[e]);
                });
            },
            r = 1;
          r < arguments.length;
          r++
        )
          t(r);
        return n;
      }
      function Go(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Vo() {
        var n = Go([
          "\n  background-color: transparent !important;\n  border-color: #a19fab !important;\n\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  ",
          "\n  ",
          "\n",
        ]);
        return (
          (Vo = function () {
            return n;
          }),
          n
        );
      }
      function _o() {
        var n = Go([
          "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n",
        ]);
        return (
          (_o = function () {
            return n;
          }),
          n
        );
      }
      var qo = i.createContext({ variant: "success" }),
        Yo = {
          warning: function (n) {
            return (0, o.jsx)(
              Q.Z,
              (function (n) {
                for (
                  var e = arguments,
                    t = function (t) {
                      var r = null != e[t] ? e[t] : {},
                        o = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                          Object.getOwnPropertySymbols(r).filter(function (n) {
                            return Object.getOwnPropertyDescriptor(
                              r,
                              n
                            ).enumerable;
                          })
                        )),
                        o.forEach(function (e) {
                          Ro(n, e, r[e]);
                        });
                    },
                    r = 1;
                  r < arguments.length;
                  r++
                )
                  t(r);
                return n;
              })({ viewBox: "0 0 24 24" }, n, {
                children: (0, o.jsx)("path", {
                  d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z",
                }),
              })
            );
          },
          danger: Ct.Z,
          success: function (n) {
            return (0, o.jsx)(
              Q.Z,
              (function (n) {
                for (
                  var e = arguments,
                    t = function (t) {
                      var r = null != e[t] ? e[t] : {},
                        o = Object.keys(r);
                      "function" == typeof Object.getOwnPropertySymbols &&
                        (o = o.concat(
                          Object.getOwnPropertySymbols(r).filter(function (n) {
                            return Object.getOwnPropertyDescriptor(
                              r,
                              n
                            ).enumerable;
                          })
                        )),
                        o.forEach(function (e) {
                          Fo(n, e, r[e]);
                        });
                    },
                    r = 1;
                  r < arguments.length;
                  r++
                )
                  t(r);
                return n;
              })({ viewBox: "0 0 24 24" }, n, {
                children: (0, o.jsx)("path", {
                  d: "M12 2.75711C6.48 2.75711 2 7.23711 2 12.7571C2 18.2771 6.48 22.7571 12 22.7571C17.52 22.7571 22 18.2771 22 12.7571C22 7.23711 17.52 2.75711 12 2.75711ZM9.29 17.0471L5.7 13.4571C5.31 13.0671 5.31 12.4371 5.7 12.0471C6.09 11.6571 6.72 11.6571 7.11 12.0471L10 14.9271L16.88 8.04711C17.27 7.65711 17.9 7.65711 18.29 8.04711C18.68 8.43711 18.68 9.06711 18.29 9.45711L10.7 17.0471C10.32 17.4371 9.68 17.4371 9.29 17.0471Z",
                }),
              })
            );
          },
        },
        Qo = a.ZP.div
          .withConfig({ componentId: "sc-e375c97-0" })
          .withConfig({ componentId: "sc-2aceb5dc-0" })(
          Vo(),
          rn.Dh,
          (0, rn.bU)({ variants: Wo })
        ),
        Ko = a.ZP.div
          .withConfig({ componentId: "sc-e375c97-1" })
          .withConfig({ componentId: "sc-2aceb5dc-1" })(_o()),
        Jo = function (n) {
          var e = n.children,
            t = n.variant,
            r = n.icon,
            i = n.action,
            a = n.actionInline,
            c = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, ["children", "variant", "icon", "action", "actionInline"]),
            u = Yo[t];
          return (0, o.jsx)(qo.Provider, {
            value: { variant: t },
            children: (0, o.jsxs)(
              Qo,
              Ho({ variant: t }, c, {
                children: [
                  (0, o.jsxs)(Ko, {
                    children: [
                      (0, o.jsx)(wn.Z, {
                        mr: "12px",
                        children:
                          null != r
                            ? r
                            : (0, o.jsx)(u, {
                                color: Wo[t].borderColor,
                                width: "120px",
                              }),
                      }),
                      e,
                      a && i,
                    ],
                  }),
                  !a && i,
                ],
              })
            ),
          });
        };
      function Xo() {
        var n,
          e,
          t =
            ((n = [
              "\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ",
              ";\n  width: ",
              ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ",
              ";\n  box-shadow: ",
              ';\n\n  &:after {\n    content: "";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ',
              ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ",
              ";\n  }\n\n  &:checked {\n    background-color: ",
              ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Xo = function () {
            return t;
          }),
          t
        );
      }
      var ni = function (n) {
          return "sm" === n.scale ? "24px" : "32px";
        },
        ei = a.ZP.input
          .attrs({ type: "checkbox" })
          .withConfig({ componentId: "sc-11bd21f1-0" })
          .withConfig({ componentId: "sc-6522c4f4-0" })(
          Xo(),
          ni,
          ni,
          function (n) {
            return n.theme.colors.input;
          },
          function (n) {
            return n.theme.shadows.inset;
          },
          function (n) {
            return n.theme.shadows.focus;
          },
          function (n) {
            return n.theme.shadows.focus;
          },
          function (n) {
            return n.theme.colors.success;
          }
        );
      ei.defaultProps = { scale: "md" };
      var ti = ei,
        ri = function (n) {
          var e = n.tokens,
            t = n.handleCurrencySelect,
            r = (0, In.Z)().chainId,
            a = (0, Bn.$G)().t,
            c = (0, i.useState)(!1),
            u = c[0],
            l = c[1],
            s = (0, Tn._E)(),
            d = (0, Dr.qB)();
          return (0, o.jsxs)(re, {
            gap: "lg",
            children: [
              e.map(function (n) {
                var e,
                  t,
                  i =
                    r &&
                    (null == d ||
                    null === (e = d[r]) ||
                    void 0 === e ||
                    null === (t = e[n.address]) ||
                    void 0 === t
                      ? void 0
                      : t.list);
                return (
                  n.address && "".concat((0, mr.Z)(n.address)),
                  (0, o.jsxs)(
                    So,
                    {
                      style: {
                        border: "1px solid #A19FAB",
                        borderRadius: "16px",
                        padding: "16px",
                      },
                      gridTemplateRows: "1fr 1fr 1fr",
                      gridGap: "4px",
                      children: [
                        void 0 !== i
                          ? (0, o.jsxs)(Bo, {
                              variant: "success",
                              outline: !0,
                              scale: "sm",
                              startIcon:
                                i.logoURI &&
                                (0, o.jsx)(we, {
                                  logoURI: i.logoURI,
                                  size: "12px",
                                }),
                              children: [a("via"), " ", i.name],
                            })
                          : (0, o.jsx)(o.Fragment, {}),
                        (0, o.jsxs)(Y.Z, {
                          alignItems: "center",
                          children: [
                            (0, o.jsx)(H.Z, { mr: "8px", children: n.name }),
                            (0, o.jsxs)(H.Z, {
                              children: ["(", n.symbol, ")"],
                            }),
                          ],
                        }),
                        r &&
                          (0, o.jsxs)(o.Fragment, {
                            children: [
                              (0, o.jsx)(H.Z, {
                                mr: "4px",
                                fontSize: 14,
                                children: n.address,
                              }),
                              (0, o.jsxs)(zn.Z, {
                                href: (0, D.s6)(n.address, "address", r),
                                external: !0,
                                children: ["(", a("View on BscScan"), ")"],
                              }),
                            ],
                          }),
                      ],
                    },
                    n.address
                  )
                );
              }),
              (0, o.jsxs)(Jo, {
                variant: "warning",
                children: [
                  (0, o.jsx)(H.Z, {
                    color: "#F99D15",
                    fontSize: 24,
                    fontWeight: "bold",
                    textAlign: "center",
                    children: a("Trade at your own risk!"),
                  }),
                  (0, o.jsx)(H.Z, {
                    color: "#A19FAB",
                    textAlign: "center",
                    children: a(
                      "Anyone can create a BEP20 token on BSC with any name, including creating fake versions of existing tokens and tokens that claim to represent projects. If you purchase an arbitrary token, you may be unable to sell it back."
                    ),
                  }),
                  (0, o.jsxs)(Y.Z, {
                    alignItems: "center",
                    onClick: function () {
                      return l(!u);
                    },
                    children: [
                      (0, o.jsx)(ti, {
                        scale: "sm",
                        name: "confirmed",
                        type: "checkbox",
                        checked: u,
                        onChange: function () {
                          return l(!u);
                        },
                      }),
                      (0, o.jsx)(H.Z, {
                        ml: "8px",
                        style: { userSelect: "none" },
                        children: a("I understand"),
                      }),
                    ],
                  }),
                ],
              }),
              (0, o.jsx)(Y.Z, {
                justifyContent: "space-between",
                alignItems: "center",
                children: (0, o.jsx)(en.Z, {
                  width: "100%",
                  variant: "primary",
                  disabled: !u,
                  onClick: function () {
                    e.forEach(function (n) {
                      return s(n);
                    }),
                      t && t(e[0]);
                  },
                  className: ".token-dismiss-button",
                  children: a("Import"),
                }),
              }),
            ],
          });
        },
        oi = t(67712);
      function ii(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function ai() {
        var n,
          e,
          t =
            ((n = [
              "\n  background-color: ",
              ";\n  border-radius: 16px;\n  display: ",
              ";\n  border: 1px solid ",
              ";\n  width: ",
              ";\n\n  & > button,\n  & > a {\n    flex: ",
              ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ",
              "\n  ",
              "\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (ai = function () {
            return t;
          }),
          t
        );
      }
      var ci = a.ZP.div
        .withConfig({ componentId: "sc-2d7da5a3-0" })
        .withConfig({ componentId: "sc-adfa3e2c-0" })(
        ai(),
        function (n) {
          var e = n.theme,
            t = n.variant;
          return e.colors[t === oi.o.SUBTLE ? "input" : "tertiary"];
        },
        function (n) {
          return n.fullWidth ? "flex" : "inline-flex";
        },
        function (n) {
          var e = n.theme,
            t = n.variant;
          return e.colors[t === oi.o.SUBTLE ? "inputSecondary" : "disabled"];
        },
        function (n) {
          return n.fullWidth ? "100%" : "auto";
        },
        function (n) {
          return n.fullWidth ? 1 : "auto";
        },
        function (n) {
          var e = n.disabled,
            t = n.theme,
            r = n.variant;
          return e
            ? "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: ".concat(
                r === oi.o.PRIMARY ? t.colors.primary : t.colors.textSubtle,
                ";\n        }\n    "
              )
            : "";
        },
        rn.Dh
      );
      function ui(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function li(n) {
        for (
          var e = arguments,
            t = function (t) {
              var r = null != e[t] ? e[t] : {},
                o = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(r).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(r, n).enumerable;
                  })
                )),
                o.forEach(function (e) {
                  ui(n, e, r[e]);
                });
            },
            r = 1;
          r < arguments.length;
          r++
        )
          t(r);
        return n;
      }
      function si() {
        var n,
          e,
          t =
            ((n = [
              "\n  background-color: transparent;\n  color: ",
              ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (si = function () {
            return t;
          }),
          t
        );
      }
      var di = (0, a.ZP)(en.Z)
          .withConfig({ componentId: "sc-baf98d6e-0" })
          .withConfig({ componentId: "sc-c36f07c1-0" })(si(), function (n) {
          var e = n.theme;
          return n.variant === oi.o.PRIMARY
            ? e.colors.primary
            : e.colors.textSubtle;
        }),
        fi = function (n) {
          var e = n.isActive,
            t = void 0 !== e && e,
            r = n.variant,
            i = void 0 === r ? oi.o.PRIMARY : r,
            a = n.as,
            c = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, ["isActive", "variant", "as"]);
          return t
            ? (0, o.jsx)(en.Z, li({ as: a, variant: i }, c))
            : (0, o.jsx)(di, li({ forwardedAs: a, variant: i }, c));
        },
        pi = t(34051),
        mi = t.n(pi),
        hi = t(27960);
      function yi(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var bi = function (n) {
        return (0, o.jsx)(
          Q.Z,
          (function (n) {
            for (
              var e = arguments,
                t = function (t) {
                  var r = null != e[t] ? e[t] : {},
                    o = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(r).filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable;
                      })
                    )),
                    o.forEach(function (e) {
                      yi(n, e, r[e]);
                    });
                },
                r = 1;
              r < arguments.length;
              r++
            )
              t(r);
            return n;
          })({ viewBox: "0 0 24 24" }, n, {
            children: (0, o.jsx)("path", {
              d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z",
            }),
          })
        );
      };
      function vi(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function xi() {
        var n = vi([
          "\n  background-color: ",
          ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ",
          ";\n  left: ",
          ";\n  position: absolute;\n  top: ",
          ";\n  transition: left 200ms ease-in;\n  width: ",
          ";\n  z-index: 1;\n",
        ]);
        return (
          (xi = function () {
            return n;
          }),
          n
        );
      }
      function gi() {
        var n = vi([
          "\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ",
          " {\n    left: ",
          ";\n  }\n\n  &:focus + ",
          " {\n    box-shadow: ",
          ";\n  }\n\n  &:hover + ",
          ":not(:disabled):not(:checked) {\n    box-shadow: ",
          ";\n  }\n",
        ]);
        return (
          (gi = function () {
            return n;
          }),
          n
        );
      }
      function ji() {
        var n = vi([
          "\n  align-items: center;\n  background-color: ",
          ";\n  border-radius: 24px;\n  box-shadow: ",
          ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ",
          ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ",
          ";\n",
        ]);
        return (
          (ji = function () {
            return n;
          }),
          n
        );
      }
      var wi = {
          sm: {
            handleHeight: "16px",
            handleWidth: "16px",
            handleLeft: "2px",
            handleTop: "2px",
            checkedLeft: "calc(100% - 18px)",
            toggleHeight: "20px",
            toggleWidth: "36px",
          },
          md: {
            handleHeight: "26px",
            handleWidth: "26px",
            handleLeft: "3px",
            handleTop: "3px",
            checkedLeft: "calc(100% - 30px)",
            toggleHeight: "32px",
            toggleWidth: "56px",
          },
          lg: {
            handleHeight: "32px",
            handleWidth: "32px",
            handleLeft: "4px",
            handleTop: "4px",
            checkedLeft: "calc(100% - 36px)",
            toggleHeight: "40px",
            toggleWidth: "72px",
          },
        },
        Oi = function (n) {
          return function (e) {
            var t = e.scale;
            return wi[void 0 === t ? "lg" : t][n];
          };
        },
        Ci = a.ZP.div
          .withConfig({ componentId: "sc-4d215cc-0" })
          .withConfig({ componentId: "sc-a4c3c38-0" })(
          xi(),
          function (n) {
            return n.theme.toggle.handleBackground;
          },
          Oi("handleHeight"),
          Oi("handleLeft"),
          Oi("handleTop"),
          Oi("handleWidth")
        ),
        ki = a.ZP.input
          .withConfig({ componentId: "sc-4d215cc-1" })
          .withConfig({ componentId: "sc-a4c3c38-1" })(
          gi(),
          Ci,
          Oi("checkedLeft"),
          Ci,
          function (n) {
            return n.theme.shadows.focus;
          },
          Ci,
          function (n) {
            return n.theme.shadows.focus;
          }
        ),
        Ii = a.ZP.div
          .withConfig({ componentId: "sc-4d215cc-2" })
          .withConfig({ componentId: "sc-a4c3c38-2" })(
          ji(),
          function (n) {
            var e = n.theme,
              t = n.$checked,
              r = n.$checkedColor,
              o = n.$defaultColor;
            return e.colors[t ? r : o];
          },
          function (n) {
            return n.theme.shadows.inset;
          },
          Oi("toggleHeight"),
          Oi("toggleWidth")
        );
      function Ti(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Pi(n) {
        for (
          var e = arguments,
            t = function (t) {
              var r = null != e[t] ? e[t] : {},
                o = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(r).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(r, n).enumerable;
                  })
                )),
                o.forEach(function (e) {
                  Ti(n, e, r[e]);
                });
            },
            r = 1;
          r < arguments.length;
          r++
        )
          t(r);
        return n;
      }
      var Si = function (n) {
        var e = n.checked,
          t = n.defaultColor,
          r = void 0 === t ? "input" : t,
          i = n.checkedColor,
          a = void 0 === i ? "success" : i,
          c = n.scale,
          u = void 0 === c ? "lg" : c,
          l = n.startIcon,
          s = n.endIcon,
          d = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, [
            "checked",
            "defaultColor",
            "checkedColor",
            "scale",
            "startIcon",
            "endIcon",
          ]),
          f = !!e;
        return (0, o.jsxs)(Ii, {
          $checked: f,
          $checkedColor: a,
          $defaultColor: r,
          scale: u,
          children: [
            (0, o.jsx)(
              ki,
              Pi({ checked: e, scale: u }, d, { type: "checkbox" })
            ),
            l && s
              ? (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(Ci, {
                      scale: u,
                      children: (0, o.jsx)(Y.Z, {
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        children: e ? s(e) : l(!e),
                      }),
                    }),
                    (0, o.jsxs)(Y.Z, {
                      width: "100%",
                      height: "100%",
                      justifyContent: "space-around",
                      alignItems: "center",
                      children: [l(), s()],
                    }),
                  ],
                })
              : (0, o.jsx)(Ci, { scale: u }),
          ],
        });
      };
      function Zi(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var Ai,
        Ei = function (n) {
          return (0, o.jsx)(
            Q.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        Zi(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 24 24" }, n, {
              children: (0, o.jsx)("path", {
                d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z",
              }),
            })
          );
        },
        Ni = t(9473),
        Mi = t(26693),
        Li = t(35552),
        Di = t(53247);
      function Ui(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function zi(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(e, t);
            function a(n) {
              Ui(i, r, o, a, c, "next", n);
            }
            function c(n) {
              Ui(i, r, o, a, c, "throw", n);
            }
            a(void 0);
          });
        };
      }
      function Bi(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Ri() {
        var n = Bi(["\n  width: 100%;\n  height: 100%;\n"]);
        return (
          (Ri = function () {
            return n;
          }),
          n
        );
      }
      function Fi() {
        var n = Bi([
          "\n  background-color: ",
          ";\n  border: solid 1px;\n  border-color: ",
          ";\n  transition: 200ms;\n  align-items: center;\n  padding: 1rem;\n  border-radius: 20px;\n",
        ]);
        return (
          (Fi = function () {
            return n;
          }),
          n
        );
      }
      function Wi() {
        var n = Bi([
          "\n  padding: 1rem 0;\n  height: 100%;\n  overflow: auto;\n",
        ]);
        return (
          (Wi = function () {
            return n;
          }),
          n
        );
      }
      !(function (n) {
        (n[(n.search = 0)] = "search"),
          (n[(n.manage = 1)] = "manage"),
          (n[(n.importToken = 2)] = "importToken"),
          (n[(n.importList = 3)] = "importList");
      })(Ai || (Ai = {}));
      var $i = (0, a.ZP)(oe).withConfig({ componentId: "sc-e45caff2-0" })(Ri()),
        Hi = (0, a.ZP)(Qn).withConfig({ componentId: "sc-e45caff2-1" })(
          Fi(),
          function (n) {
            var e = n.active,
              t = n.theme;
            return e ? "".concat(t.colors.success, "19") : "transparent";
          },
          function (n) {
            var e = n.active,
              t = n.theme;
            return e ? t.colors.success : t.colors.tertiary;
          }
        );
      function Gi(n) {
        return "list-row-".concat(n.replace(/\./g, "-"));
      }
      var Vi = (0, i.memo)(function (n) {
          var e,
            t = n.listUrl,
            r = (0, Ni.v9)(function (n) {
              return n.lists.byUrl;
            }),
            a = (0, Be.TL)(),
            c = r[t],
            u = c.current,
            l = c.pendingUpdate,
            s = (0, Dr.EF)(t),
            d = (0, Bn.$G)().t,
            f = (0, i.useCallback)(
              function () {
                l && a((0, Di.xJ)(t));
              },
              [a, t, l]
            ),
            p = (0, i.useCallback)(
              function () {
                window.confirm(
                  "Please confirm you would like to remove this list"
                ) && a((0, Di.J_)(t));
              },
              [a, t]
            ),
            m = (0, i.useCallback)(
              function () {
                a((0, Di.ic)(t));
              },
              [a, t]
            ),
            h = (0, i.useCallback)(
              function () {
                a((0, Di.K$)(t));
              },
              [a, t]
            ),
            y = (0, Bt.Z)(
              (0, o.jsxs)("div", {
                children: [
                  (0, o.jsx)(H.Z, {
                    children:
                      u &&
                      ((e = u.version),
                      "v"
                        .concat(e.major, ".")
                        .concat(e.minor, ".")
                        .concat(e.patch)),
                  }),
                  (0, o.jsx)(hi.Z, {
                    external: !0,
                    href: "https://tokenlists.org/token-list?url=".concat(t),
                    children: d("See"),
                  }),
                  (0, o.jsx)(en.Z, {
                    variant: "danger",
                    scale: "xs",
                    onClick: p,
                    disabled: 1 === Object.keys(r).length,
                    children: d("Remove"),
                  }),
                  l &&
                    (0, o.jsx)(en.Z, {
                      variant: "text",
                      onClick: f,
                      style: { fontSize: "12px" },
                      children: d("Update list"),
                    }),
                ],
              }),
              { placement: "right-end", trigger: "click" }
            ),
            b = y.targetRef,
            v = y.tooltip,
            x = y.tooltipVisible;
          return u
            ? (0, o.jsxs)(
                Hi,
                {
                  active: s,
                  id: Gi(t),
                  children: [
                    x && v,
                    u.logoURI
                      ? (0, o.jsx)(we, {
                          size: "40px",
                          style: { marginRight: "1rem" },
                          logoURI: u.logoURI,
                          alt: "".concat(u.name, " list logo"),
                        })
                      : (0, o.jsx)("div", {
                          style: {
                            width: "24px",
                            height: "24px",
                            marginRight: "1rem",
                          },
                        }),
                    (0, o.jsxs)(oe, {
                      style: { flex: "1" },
                      children: [
                        (0, o.jsx)(Qn, {
                          children: (0, o.jsx)(H.Z, {
                            bold: !0,
                            children: u.name,
                          }),
                        }),
                        (0, o.jsxs)(Yn, {
                          mt: "4px",
                          children: [
                            (0, o.jsxs)(H.Z, {
                              fontSize: "12px",
                              mr: "6px",
                              textTransform: "lowercase",
                              children: [u.tokens.length, " ", d("Tokens")],
                            }),
                            (0, o.jsx)("span", {
                              ref: b,
                              children: (0, o.jsx)(bi, {
                                color: "text",
                                width: "12px",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, o.jsx)(Si, {
                      checked: s,
                      onChange: function () {
                        s ? h() : m();
                      },
                    }),
                  ],
                },
                t
              )
            : null;
        }),
        _i = a.ZP.div.withConfig({ componentId: "sc-e45caff2-2" })(Wi()),
        qi = function (n) {
          var e = n.setModalView,
            t = n.setImportList,
            r = n.setListUrl,
            a = (0, i.useState)(""),
            c = a[0],
            u = a[1],
            l = (0, Bn.$G)().t,
            s = (0, Dr.R0)(),
            d = (0, Dr.v0)(),
            f = (0, i.useState)(),
            p = f[0],
            m = f[1];
          (0, i.useEffect)(
            function () {
              !p && d && m(d);
            },
            [p, d]
          );
          var h = (0, i.useCallback)(function (n) {
              u(n.target.value);
            }, []),
            y = (0, Li.Z)(),
            b = (0, i.useMemo)(
              function () {
                return (0, ue.Z)(c).length > 0;
              },
              [c]
            ),
            v = (0, i.useMemo)(
              function () {
                return Object.keys(s)
                  .filter(function (n) {
                    return Boolean(s[n].current) && !Mi.US.includes(n);
                  })
                  .sort(function (n, e) {
                    var t = s[n].current,
                      r = s[e].current;
                    if (
                      (null == p ? void 0 : p.includes(n)) &&
                      !(null == p ? void 0 : p.includes(e))
                    )
                      return -1;
                    if (
                      !(null == p ? void 0 : p.includes(n)) &&
                      (null == p ? void 0 : p.includes(e))
                    )
                      return 1;
                    if (t && r) {
                      var o = "pancakeswap";
                      return t.name.toLowerCase().includes(o) ||
                        r.name.toLowerCase().includes(o) ||
                        t.name.toLowerCase() < r.name.toLowerCase()
                        ? -1
                        : t.name.toLowerCase() === r.name.toLowerCase()
                        ? 0
                        : 1;
                    }
                    return t ? -1 : r ? 1 : 0;
                  });
              },
              [s, p]
            ),
            x = (0, i.useState)(),
            g = x[0],
            j = x[1],
            w = (0, i.useState)(),
            O = w[0],
            C = w[1];
          (0, i.useEffect)(
            function () {
              function n() {
                return (n = zi(
                  mi().mark(function n() {
                    return mi().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            y(c, !1)
                              .then(function (n) {
                                return j(n);
                              })
                              .catch(function () {
                                return C("Error importing list");
                              });
                          case 1:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                )).apply(this, arguments);
              }
              b
                ? (function () {
                    n.apply(this, arguments);
                  })()
                : (j(void 0), "" !== c && C("Enter valid list location")),
                "" === c && C(void 0);
            },
            [y, c, b]
          );
          var k = Object.keys(s).includes(c),
            I = (0, i.useCallback)(
              function () {
                g && (t(g), e(Ai.importList), r(c));
              },
              [c, t, r, e, g]
            );
          return (0, o.jsxs)($i, {
            children: [
              (0, o.jsxs)(re, {
                gap: "14px",
                children: [
                  (0, o.jsx)(Qn, {
                    children: (0, o.jsx)(Mr, {
                      id: "list-add-input",
                      scale: "lg",
                      placeholder: l("https:// or ipfs://"),
                      value: c,
                      onChange: h,
                    }),
                  }),
                  O
                    ? (0, o.jsx)(H.Z, {
                        color: "failure",
                        style: { textOverflow: "ellipsis", overflow: "hidden" },
                        children: O,
                      })
                    : null,
                ],
              }),
              g &&
                (0, o.jsx)(re, {
                  style: { paddingTop: 0 },
                  children: (0, o.jsx)(ot, {
                    padding: "12px 20px",
                    children: (0, o.jsxs)(_n, {
                      children: [
                        (0, o.jsxs)(Yn, {
                          children: [
                            g.logoURI &&
                              (0, o.jsx)(we, {
                                logoURI: g.logoURI,
                                size: "40px",
                              }),
                            (0, o.jsxs)(re, {
                              gap: "4px",
                              style: { marginLeft: "20px" },
                              children: [
                                (0, o.jsx)(H.Z, { bold: !0, children: g.name }),
                                (0, o.jsxs)(H.Z, {
                                  color: "textSubtle",
                                  small: !0,
                                  textTransform: "lowercase",
                                  children: [g.tokens.length, " ", l("Tokens")],
                                }),
                              ],
                            }),
                          ],
                        }),
                        k
                          ? (0, o.jsxs)(Yn, {
                              children: [
                                (0, o.jsx)(Ei, { width: "16px", mr: "10px" }),
                                (0, o.jsx)(H.Z, { children: l("Loaded") }),
                              ],
                            })
                          : (0, o.jsx)(en.Z, {
                              width: "fit-content",
                              onClick: I,
                              children: l("Import"),
                            }),
                      ],
                    }),
                  }),
                }),
              (0, o.jsx)(_i, {
                children: (0, o.jsx)(re, {
                  gap: "md",
                  children: v.map(function (n) {
                    return (0, o.jsx)(Vi, { listUrl: n }, n);
                  }),
                }),
              }),
            ],
          });
        },
        Yi = t(44665),
        Qi = t(82733);
      function Ki(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Ji() {
        var n = Ki([
          "\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n  padding-bottom: 60px;\n",
        ]);
        return (
          (Ji = function () {
            return n;
          }),
          n
        );
      }
      function Xi() {
        var n = Ki([
          "\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n",
        ]);
        return (
          (Xi = function () {
            return n;
          }),
          n
        );
      }
      var na = a.ZP.div.withConfig({ componentId: "sc-11caa501-0" })(Ji()),
        ea = a.ZP.div.withConfig({ componentId: "sc-11caa501-1" })(Xi());
      function ta(n) {
        var e = n.setModalView,
          t = n.setImportToken,
          r = (0, In.Z)().chainId,
          a = (0, Bn.$G)().t,
          c = (0, i.useState)(""),
          u = c[0],
          l = c[1],
          s = (0, i.useRef)(),
          d = (0, i.useCallback)(function (n) {
            var e = n.target.value,
              t = (0, D.UJ)(e);
            l(t || e);
          }, []),
          f = (0, Zn.dQ)(u),
          p = (0, Qi.Z)(),
          m = (0, Tn.QG)(),
          h = (0, i.useCallback)(
            function () {
              r &&
                p &&
                p.forEach(function (n) {
                  return m(r, n.address);
                });
            },
            [m, p, r]
          ),
          y = (0, i.useMemo)(
            function () {
              return (
                r &&
                p.map(function (n) {
                  return (0, o.jsxs)(
                    _n,
                    {
                      width: "100%",
                      children: [
                        (0, o.jsxs)(Yn, {
                          children: [
                            (0, o.jsx)(ye, { currency: n, size: "20px" }),
                            (0, o.jsx)(zn.Z, {
                              external: !0,
                              href: (0, D.s6)(n.address, "address", r),
                              color: "textSubtle",
                              ml: "10px",
                              children: n.symbol,
                            }),
                          ],
                        }),
                        (0, o.jsxs)(Yn, {
                          children: [
                            (0, o.jsx)(G.Z, {
                              variant: "text",
                              onClick: function () {
                                return m(r, n.address);
                              },
                              children: (0, o.jsx)(Yi.Z, {}),
                            }),
                            (0, o.jsx)(hi.Z, {
                              href: (0, D.s6)(n.address, "address", r),
                            }),
                          ],
                        }),
                      ],
                    },
                    n.address
                  );
                })
              );
            },
            [p, r, m]
          ),
          b = "" === u || (0, D.UJ)(u);
        return (0, o.jsx)(na, {
          children: (0, o.jsxs)(oe, {
            style: { width: "100%", flex: "1 1" },
            children: [
              (0, o.jsxs)(re, {
                gap: "14px",
                children: [
                  (0, o.jsx)(Qn, {
                    children: (0, o.jsx)(Mr, {
                      id: "token-search-input",
                      scale: "lg",
                      placeholder: "0x0000",
                      value: u,
                      autoComplete: "off",
                      ref: s,
                      onChange: d,
                      isWarning: !b,
                    }),
                  }),
                  !b &&
                    (0, o.jsx)(H.Z, {
                      color: "failure",
                      children: a("Enter valid token address"),
                    }),
                  f &&
                    (0, o.jsx)(to, {
                      token: f,
                      showImportView: function () {
                        return e(Ai.importToken);
                      },
                      setImportToken: t,
                      style: { height: "fit-content" },
                    }),
                ],
              }),
              y,
              (0, o.jsxs)(ea, {
                children: [
                  (0, o.jsxs)(H.Z, {
                    bold: !0,
                    color: "textSubtle",
                    children: [
                      null == p ? void 0 : p.length,
                      " ",
                      1 === p.length ? a("Custom Token") : a("Custom Tokens"),
                    ],
                  }),
                  p.length > 0 &&
                    (0, o.jsx)(en.Z, {
                      variant: "tertiary",
                      onClick: h,
                      children: a("Clear all"),
                    }),
                ],
              }),
            ],
          }),
        });
      }
      function ra() {
        var n,
          e,
          t =
            ((n = ["\n  width: 100%;\n"]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (ra = function () {
            return t;
          }),
          t
        );
      }
      var oa = (0, a.ZP)(function (n) {
        var e = n.activeIndex,
          t = void 0 === e ? 0 : e,
          r = n.scale,
          a = void 0 === r ? oi.Q.MD : r,
          c = n.variant,
          u = void 0 === c ? oi.o.PRIMARY : c,
          l = n.onItemClick,
          s = n.disabled,
          d = n.children,
          f = n.fullWidth,
          p = void 0 !== f && f,
          m = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, [
            "activeIndex",
            "scale",
            "variant",
            "onItemClick",
            "disabled",
            "children",
            "fullWidth",
          ]);
        return (0, o.jsx)(
          ci,
          (function (n) {
            for (
              var e = arguments,
                t = function (t) {
                  var r = null != e[t] ? e[t] : {},
                    o = Object.keys(r);
                  "function" == typeof Object.getOwnPropertySymbols &&
                    (o = o.concat(
                      Object.getOwnPropertySymbols(r).filter(function (n) {
                        return Object.getOwnPropertyDescriptor(r, n).enumerable;
                      })
                    )),
                    o.forEach(function (e) {
                      ii(n, e, r[e]);
                    });
                },
                r = 1;
              r < arguments.length;
              r++
            )
              t(r);
            return n;
          })({ disabled: s, variant: u, fullWidth: p }, m, {
            children: i.Children.map(d, function (n, e) {
              return (0, i.cloneElement)(n, {
                isActive: t === e,
                onClick: l
                  ? function () {
                      return l(e);
                    }
                  : void 0,
                scale: a,
                variant: u,
                disabled: s,
              });
            }),
          })
        );
      }).withConfig({ componentId: "sc-875450a9-0" })(ra());
      function ia(n) {
        var e = n.setModalView,
          t = n.setImportList,
          r = n.setImportToken,
          a = n.setListUrl,
          c = (0, i.useState)(!0),
          u = c[0],
          l = c[1],
          s = (0, Bn.$G)().t;
        return (0, o.jsxs)(Zr.fe, {
          children: [
            (0, o.jsxs)(oa, {
              activeIndex: u ? 0 : 1,
              onItemClick: function () {
                return l(function (n) {
                  return !n;
                });
              },
              scale: "sm",
              variant: "subtle",
              mb: "32px",
              children: [
                (0, o.jsx)(fi, { width: "50%", children: s("Lists") }),
                (0, o.jsx)(fi, { width: "50%", children: s("Tokens") }),
              ],
            }),
            u
              ? (0, o.jsx)(qi, {
                  setModalView: e,
                  setImportList: t,
                  setListUrl: a,
                })
              : (0, o.jsx)(ta, { setModalView: e, setImportToken: r }),
          ],
        });
      }
      var aa = t(82010),
        ca = function () {
          var n = (0, aa.F)(),
            e = n.resolvedTheme,
            t = n.setTheme;
          return {
            isDark: "dark" === e,
            theme: (0, i.useContext)(a.Ni),
            setTheme: t,
          };
        };
      function ua(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function la() {
        var n = ua(["\n  position: relative;\n  width: 100%;\n"]);
        return (
          (la = function () {
            return n;
          }),
          n
        );
      }
      function sa() {
        var n = ua([
          "\n  height: 3px;\n  width: 3px;\n  background-color: ",
          ";\n  border-radius: 50%;\n",
        ]);
        return (
          (sa = function () {
            return n;
          }),
          n
        );
      }
      var da = a.ZP.div.withConfig({ componentId: "sc-7fdd9120-0" })(la()),
        fa = a.ZP.div.withConfig({ componentId: "sc-7fdd9120-1" })(
          sa(),
          function (n) {
            return n.theme.colors.text;
          }
        ),
        pa = function (n) {
          var e,
            t = n.listURL,
            r = n.list,
            a = n.onImport,
            c = ca().theme,
            u = (0, Be.TL)(),
            l = (0, Bn.$G)().t,
            s = (0, i.useState)(!1),
            d = s[0],
            f = s[1],
            p = (0, Dr.R0)(),
            m = (0, Li.Z)(),
            h = Boolean(
              null === (e = p[t]) || void 0 === e ? void 0 : e.loadingRequestId
            ),
            y = (0, i.useState)(null),
            b = y[0],
            v = y[1],
            x = (0, i.useCallback)(
              function () {
                h ||
                  (v(null),
                  m(t)
                    .then(function () {
                      u((0, Di.ic)(t)), a();
                    })
                    .catch(function (n) {
                      v(n.message), u((0, Di.J_)(t));
                    }));
              },
              [h, u, m, t, a]
            );
          return (0, o.jsx)(da, {
            children: (0, o.jsx)(re, {
              gap: "md",
              children: (0, o.jsxs)(re, {
                gap: "md",
                children: [
                  (0, o.jsx)(ot, {
                    padding: "12px 20px",
                    children: (0, o.jsx)(_n, {
                      children: (0, o.jsxs)(Yn, {
                        children: [
                          r.logoURI &&
                            (0, o.jsx)(we, {
                              logoURI: r.logoURI,
                              size: "40px",
                            }),
                          (0, o.jsxs)(re, {
                            gap: "sm",
                            style: { marginLeft: "20px" },
                            children: [
                              (0, o.jsxs)(Yn, {
                                children: [
                                  (0, o.jsx)(H.Z, {
                                    bold: !0,
                                    mr: "6px",
                                    children: r.name,
                                  }),
                                  (0, o.jsx)(fa, {}),
                                  (0, o.jsxs)(H.Z, {
                                    small: !0,
                                    color: "textSubtle",
                                    ml: "6px",
                                    children: [r.tokens.length, " tokens"],
                                  }),
                                ],
                              }),
                              (0, o.jsx)(zn.Z, {
                                small: !0,
                                external: !0,
                                ellipsis: !0,
                                maxWidth: "90%",
                                href: "https://tokenlists.org/token-list?url=".concat(
                                  t
                                ),
                                children: t,
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, o.jsx)(Jo, {
                    variant: "danger",
                    children: (0, o.jsxs)(Y.Z, {
                      flexDirection: "column",
                      children: [
                        (0, o.jsx)(H.Z, {
                          fontSize: "20px",
                          textAlign: "center",
                          color: c.colors.failure,
                          mb: "16px",
                          children: l("Import at your own risk"),
                        }),
                        (0, o.jsx)(H.Z, {
                          color: c.colors.failure,
                          mb: "8px",
                          children: l(
                            "By adding this list you are implicitly trusting that the data is correct. Anyone can create a list, including creating fake versions of existing lists and lists that claim to represent projects that do not have one."
                          ),
                        }),
                        (0, o.jsx)(H.Z, {
                          bold: !0,
                          color: c.colors.failure,
                          mb: "16px",
                          children: l(
                            "If you purchase a token from this list, you may not be able to sell it back."
                          ),
                        }),
                        (0, o.jsxs)(Y.Z, {
                          alignItems: "center",
                          children: [
                            (0, o.jsx)(ti, {
                              name: "confirmed",
                              type: "checkbox",
                              checked: d,
                              onChange: function () {
                                return f(!d);
                              },
                              scale: "sm",
                            }),
                            (0, o.jsx)(H.Z, {
                              ml: "10px",
                              style: { userSelect: "none" },
                              children: l("I understand"),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, o.jsx)(en.Z, {
                    disabled: !d,
                    onClick: x,
                    children: l("Import"),
                  }),
                  b
                    ? (0, o.jsx)(H.Z, {
                        color: "failure",
                        style: { textOverflow: "ellipsis", overflow: "hidden" },
                        children: b,
                      })
                    : null,
                ],
              }),
            }),
          });
        };
      function ma(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function ha(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function ya() {
        var n = ha([
          "\n  width: 100%;\n  background-color: ",
          ";\n  text-align: center;\n",
        ]);
        return (
          (ya = function () {
            return n;
          }),
          n
        );
      }
      function ba() {
        var n = ha(["\n  max-width: 420px;\n  width: 100%;\n"]);
        return (
          (ba = function () {
            return n;
          }),
          n
        );
      }
      function va() {
        var n = ha([
          "\n  padding: 24px;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n",
        ]);
        return (
          (va = function () {
            return n;
          }),
          n
        );
      }
      var xa = a.ZP.div.withConfig({ componentId: "sc-f6f68042-0" })(
          ya(),
          function (n) {
            return n.theme.colors.backgroundAlt;
          }
        ),
        ga = (0, a.ZP)(Zr.F0).withConfig({ componentId: "sc-f6f68042-1" })(
          ba()
        ),
        ja = (0, a.ZP)(Zr.fe).withConfig({ componentId: "sc-f6f68042-2" })(
          va()
        );
      function wa(n) {
        var e,
          t = n.onDismiss,
          r =
            void 0 === t
              ? function () {
                  return null;
                }
              : t,
          a = n.onCurrencySelect,
          c = n.selectedCurrency,
          u = n.otherSelectedCurrency,
          l = n.showCommonBases,
          s = void 0 !== l && l,
          d = (0, i.useState)(Ai.search),
          f = d[0],
          p = d[1],
          m = (0, i.useCallback)(
            function (n) {
              null == r || r(), a(n);
            },
            [r, a]
          ),
          h = (function (n) {
            var e = (0, i.useRef)();
            return (
              (0, i.useEffect)(
                function () {
                  e.current = n;
                },
                [n]
              ),
              e.current
            );
          })(f),
          y = (0, i.useState)(),
          b = y[0],
          v = y[1],
          x = (0, i.useState)(),
          g = x[0],
          j = x[1],
          w = (0, i.useState)(),
          O = w[0],
          C = w[1],
          k = (0, Bn.$G)().t,
          I =
            (ma((e = {}), Ai.search, {
              title: k("Select a Token"),
              onBack: void 0,
            }),
            ma(e, Ai.manage, {
              title: k("Manage"),
              onBack: function () {
                return p(Ai.search);
              },
            }),
            ma(e, Ai.importToken, {
              title: k("Import Tokens"),
              onBack: function () {
                return p(h && h !== Ai.importToken ? h : Ai.search);
              },
            }),
            ma(e, Ai.importList, {
              title: k("Import List"),
              onBack: function () {
                return p(Ai.search);
              },
            }),
            e);
        return (0, o.jsxs)(ga, {
          minWidth: "100%",
          children: [
            (0, o.jsxs)(Zr.xB, {
              children: [
                (0, o.jsxs)(Zr.r6, {
                  children: [
                    I[f].onBack && (0, o.jsx)(Zr.vy, { onBack: I[f].onBack }),
                    (0, o.jsx)(Ar.Z, { children: I[f].title }),
                  ],
                }),
                (0, o.jsx)(Zr.ol, { onDismiss: r }),
              ],
            }),
            (0, o.jsxs)(ja, {
              children: [
                f === Ai.search
                  ? (0, o.jsx)(Io, {
                      onCurrencySelect: m,
                      selectedCurrency: c,
                      otherSelectedCurrency: u,
                      showCommonBases: s,
                      showImportView: function () {
                        return p(Ai.importToken);
                      },
                      setImportToken: v,
                    })
                  : f === Ai.importToken && b
                  ? (0, o.jsx)(ri, { tokens: [b], handleCurrencySelect: m })
                  : f === Ai.importList && g && O
                  ? (0, o.jsx)(pa, {
                      list: g,
                      listURL: O,
                      onImport: function () {
                        return p(Ai.manage);
                      },
                    })
                  : f === Ai.manage
                  ? (0, o.jsx)(ia, {
                      setModalView: p,
                      setImportToken: v,
                      setImportList: j,
                      setListUrl: C,
                    })
                  : "",
                f === Ai.search &&
                  (0, o.jsx)(xa, {
                    children: (0, o.jsx)(en.Z, {
                      onClick: function () {
                        return p(Ai.manage);
                      },
                      className: "list-token-manage-button",
                      children: k("Manage Tokens"),
                    }),
                  }),
              ],
            }),
          ],
        });
      }
      function Oa(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Ca() {
        var n,
          e,
          t =
            ((n = [
              "\n  color: ",
              ";\n  width: 0;\n  position: relative;\n  font-weight: 500;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: transparent;\n  font-size: 16px;\n  text-align: ",
              ";\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  [type='number'] {\n    -moz-appearance: textfield;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
              ";\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Ca = function () {
            return t;
          }),
          t
        );
      }
      var ka,
        Ia = a.ZP.input.withConfig({ componentId: "sc-1c5b2b79-0" })(
          Ca(),
          function (n) {
            var e = n.error,
              t = n.theme;
            return e ? t.colors.failure : t.colors.text;
          },
          function (n) {
            var e = n.align;
            return null != e ? e : "right";
          },
          function (n) {
            return n.theme.colors.textSubtle;
          }
        ),
        Ta = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
        Pa = (0, i.memo)(function (n) {
          var e = n.value,
            t = n.onUserInput,
            r = n.placeholder,
            i = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, ["value", "onUserInput", "placeholder"]),
            a = (0, Bn.$G)().t;
          return (0, o.jsx)(
            Ia,
            (function (n) {
              for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {},
                  r = Object.keys(t);
                "function" == typeof Object.getOwnPropertySymbols &&
                  (r = r.concat(
                    Object.getOwnPropertySymbols(t).filter(function (n) {
                      return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })
                  )),
                  r.forEach(function (e) {
                    Oa(n, e, t[e]);
                  });
              }
              return n;
            })({}, i, {
              value: e,
              onChange: function (n) {
                var e;
                ("" === (e = n.target.value.replace(/,/g, ".")) ||
                  Ta.test((0, D.hr)(e))) &&
                  t(e);
              },
              inputMode: "decimal",
              title: a("Token Amount"),
              autoComplete: "off",
              autoCorrect: "off",
              type: "text",
              pattern: "^[0-9]*[.,]?[0-9]*$",
              placeholder: r || "0.0",
              minLength: 1,
              maxLength: 79,
              spellCheck: "false",
            })
          );
        }),
        Sa = t(42987),
        Za = t(70322);
      function Aa(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Ea(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })
            )),
            r.forEach(function (e) {
              Aa(n, e, t[e]);
            });
        }
        return n;
      }
      function Na() {
        var n,
          e,
          t =
            ((n = [
              "\n  display: ",
              ";\n  position: absolute;\n  padding: 8px;\n  top: ",
              ";\n  right: ",
              ";\n  text-align: center;\n  font-size: ",
              ";\n  background-color: ",
              ";\n  color: ",
              ";\n  border-radius: 16px;\n  opacity: 0.7;\n  width: max-content;\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Na = function () {
            return t;
          }),
          t
        );
      }
      var Ma = a.ZP.div.withConfig({ componentId: "sc-96375544-0" })(
          Na(),
          function (n) {
            return n.isTooltipDisplayed ? "inline" : "none";
          },
          function (n) {
            var e = n.tooltipTop;
            return "".concat(e, "px");
          },
          function (n) {
            var e = n.tooltipRight;
            return e ? "".concat(e, "px") : 0;
          },
          function (n) {
            var e = n.tooltipFontSize;
            return null !== (ka = "".concat(e, "px")) && void 0 !== ka
              ? ka
              : "100%";
          },
          function (n) {
            return n.theme.colors.contrast;
          },
          function (n) {
            return n.theme.colors.invertedContrast;
          }
        ),
        La = function (n) {
          var e = n.text,
            t = n.tooltipMessage,
            r = n.width,
            a = n.tooltipTop,
            c = n.tooltipRight,
            u = n.tooltipFontSize,
            l = n.buttonColor,
            s = void 0 === l ? "primary" : l,
            d = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, [
              "text",
              "tooltipMessage",
              "width",
              "tooltipTop",
              "tooltipRight",
              "tooltipFontSize",
              "buttonColor",
            ]),
            f = (0, i.useState)(!1),
            p = f[0],
            m = f[1],
            h = function () {
              m(!0),
                setTimeout(function () {
                  m(!1);
                }, 1e3);
            };
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(
                Sa.Z,
                Ea(
                  {
                    style: { cursor: "pointer" },
                    color: s,
                    width: r,
                    onClick: function () {
                      return (0, Za.z)(e, h);
                    },
                  },
                  d
                )
              ),
              (0, o.jsx)(Ma, {
                isTooltipDisplayed: p,
                tooltipTop: a,
                tooltipRight: c,
                tooltipFontSize: u,
                children: t,
              }),
            ],
          });
        };
      function Da(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function Ua(n, e) {
        return null != e &&
          "undefined" != typeof Symbol &&
          e[Symbol.hasInstance]
          ? !!e[Symbol.hasInstance](n)
          : n instanceof e;
      }
      function za(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Ba() {
        var n = za([
          "\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: start;\n  justify-content: flex-end;\n  padding: ",
          ";\n",
        ]);
        return (
          (Ba = function () {
            return n;
          }),
          n
        );
      }
      function Ra() {
        var n = za(["\n  padding: 0 0.5rem;\n"]);
        return (
          (Ra = function () {
            return n;
          }),
          n
        );
      }
      function Fa() {
        var n = za([
          "\n  display: flex;\n  flex-flow: row nowrap;\n  justify-contents: space-between;\n  width: 100%;\n  align-items: center;\n  color: ",
          ";\n  font-size: 0.75rem;\n  line-height: 1rem;\n  padding: 0.75rem 1rem 0 1rem;\n",
        ]);
        return (
          (Fa = function () {
            return n;
          }),
          n
        );
      }
      function Wa() {
        var n = za([
          "\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 20px;\n  background-color: ",
          ";\n  z-index: 1;\n",
        ]);
        return (
          (Wa = function () {
            return n;
          }),
          n
        );
      }
      function $a() {
        var n = za([
          "\n  overflow: hidden;\n  border-radius: 8px;\n  background-color: ",
          ";\n  box-shadow: ",
          ";\n",
        ]);
        return (
          ($a = function () {
            return n;
          }),
          n
        );
      }
      function Ha() {
        var n = za(["\n  cursor: pointer;\n"]);
        return (
          (Ha = function () {
            return n;
          }),
          n
        );
      }
      var Ga = a.ZP.div.withConfig({ componentId: "sc-efe1d131-0" })(
          Ba(),
          function (n) {
            return n.selected
              ? "0.75rem 0.5rem 0.75rem 1rem"
              : "0.75rem 0.75rem 0.75rem 1rem";
          }
        ),
        Va = (0, a.ZP)(en.Z)
          .attrs({ variant: "text", scale: "sm" })
          .withConfig({ componentId: "sc-efe1d131-1" })(Ra()),
        _a = a.ZP.div.withConfig({ componentId: "sc-efe1d131-2" })(
          Fa(),
          function (n) {
            return n.theme.colors.text;
          }
        ),
        qa = a.ZP.div.withConfig({ componentId: "sc-efe1d131-3" })(
          Wa(),
          function (n) {
            return n.theme.colors.backgroundAlt;
          }
        ),
        Ya = a.ZP.div.withConfig({ componentId: "sc-efe1d131-4" })(
          $a(),
          function (n) {
            return n.theme.colors.input;
          },
          function (n) {
            return n.theme.shadows.inset;
          }
        ),
        Qa = a.ZP.button.withConfig({ componentId: "sc-efe1d131-5" })(Ha());
      function Ka(n) {
        var e,
          t,
          r = n.value,
          i = n.onUserInput,
          a = n.onMax,
          u = n.showMaxButton,
          l = n.label,
          s = n.onCurrencySelect,
          d = n.currency,
          f = n.disableCurrencySelect,
          p = void 0 !== f && f,
          m = n.hideBalance,
          h = void 0 !== m && m,
          y = n.pair,
          b = void 0 === y ? null : y,
          v = n.otherCurrency,
          x = n.id,
          g = n.showCommonBases,
          j = (0, In.Z)(),
          w = j.account,
          O = j.library,
          C = Sr(null != w ? w : void 0, null != d ? d : void 0),
          k = (0, Bn.$G)(),
          I = k.t,
          T =
            (k.currentLanguage.locale,
            b ? b.liquidityToken : Ua(d, c.WU) ? d : null),
          P = T ? (0, D.UJ)(T.address) : null,
          S = (function (n, e) {
            return (
              (function (n) {
                if (Array.isArray(n)) return n;
              })(n) ||
              (function (n, e) {
                var t =
                  null == n
                    ? null
                    : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"];
                if (null != t) {
                  var r,
                    o,
                    i = [],
                    a = !0,
                    c = !1;
                  try {
                    for (
                      t = t.call(n);
                      !(a = (r = t.next()).done) &&
                      (i.push(r.value), !e || i.length !== e);
                      a = !0
                    );
                  } catch (n) {
                    (c = !0), (o = n);
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return i;
                }
              })(n, e) ||
              (function (n, e) {
                if (n) {
                  if ("string" == typeof n) return Da(n, e);
                  var t = Object.prototype.toString.call(n).slice(8, -1);
                  return (
                    "Object" === t && n.constructor && (t = n.constructor.name),
                    "Map" === t || "Set" === t
                      ? Array.from(t)
                      : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? Da(n, e)
                      : void 0
                  );
                }
              })(n, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })(
            (0, q.Z)(
              (0, o.jsx)(wa, {
                onCurrencySelect: s,
                selectedCurrency: d,
                otherSelectedCurrency: v,
                showCommonBases: g,
              })
            ),
            1
          )[0];
        return (0, o.jsxs)(wn.Z, {
          position: "relative",
          id: x,
          children: [
            (0, o.jsx)(Y.Z, {
              mb: "6px",
              alignItems: "center",
              justifyContent: "space-between",
            }),
            (0, o.jsx)(qa, {
              children: (0, o.jsxs)(Ya, {
                children: [
                  w &&
                    d &&
                    u &&
                    "To" !== l &&
                    (0, o.jsx)(Qa, {
                      style: { marginLeft: "auto", display: "block" },
                      onClick: a,
                      children: I("Use Max"),
                    }),
                  (0, o.jsx)(Y.Z, {
                    children: (0, o.jsxs)(_a, {
                      children: [
                        (0, o.jsx)(Pa, {
                          align: "left",
                          className: "token-amount-input",
                          value: r,
                          onUserInput: function (n) {
                            i(n);
                          },
                        }),
                        (0, o.jsx)(Va, {
                          className: "open-currency-select-button",
                          selected: !!d,
                          onClick: function () {
                            p || S();
                          },
                          children: (0, o.jsxs)(Y.Z, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [
                              b
                                ? (0, o.jsx)(xe, {
                                    currency0: b.token0,
                                    currency1: b.token1,
                                    size: 16,
                                    margin: !0,
                                  })
                                : d
                                ? (0, o.jsx)(ye, {
                                    currency: d,
                                    size: "24px",
                                    style: { marginRight: "8px" },
                                  })
                                : null,
                              b
                                ? (0, o.jsxs)(H.Z, {
                                    id: "pair",
                                    bold: !0,
                                    children: [
                                      null == b ? void 0 : b.token0.symbol,
                                      ":",
                                      null == b ? void 0 : b.token1.symbol,
                                    ],
                                  })
                                : (0, o.jsx)(H.Z, {
                                    id: "pair",
                                    bold: !0,
                                    children:
                                      (d && d.symbol && d.symbol.length > 20
                                        ? ""
                                            .concat(d.symbol.slice(0, 4), "...")
                                            .concat(
                                              d.symbol.slice(
                                                d.symbol.length - 5,
                                                d.symbol.length
                                              )
                                            )
                                        : null == d
                                        ? void 0
                                        : d.symbol) || I("Select a currency"),
                                  }),
                              !p && (0, o.jsx)(gr, {}),
                            ],
                          }),
                        }),
                        T && P
                          ? (0, o.jsxs)(Y.Z, {
                              style: { gap: "4px" },
                              alignItems: "center",
                              children: [
                                (0, o.jsx)(La, {
                                  width: "16px",
                                  buttonColor: "textSubtle",
                                  text: P,
                                  tooltipMessage: I("Token address copied"),
                                  tooltipTop: -20,
                                  tooltipRight: 40,
                                  tooltipFontSize: 12,
                                }),
                                (null == O ||
                                null === (e = O.provider) ||
                                void 0 === e
                                  ? void 0
                                  : e.isMetaMask) &&
                                  (0, o.jsx)(Ot.Z, {
                                    style: { cursor: "pointer" },
                                    width: "16px",
                                    onClick: function () {
                                      return (0, kt.$)(
                                        P,
                                        T.symbol,
                                        T.decimals,
                                        Ua(T, ce.DT) ? T.logoURI : void 0
                                      );
                                    },
                                  }),
                              ],
                            })
                          : null,
                      ],
                    }),
                  }),
                  (0, o.jsx)(Ga, {
                    selected: p,
                    children:
                      w &&
                      (0, o.jsx)(H.Z, {
                        onClick: a,
                        color: "textSubtle",
                        fontSize: "14px",
                        style: { display: "inline", cursor: "pointer" },
                        children:
                          !h && d
                            ? I("Balance: %balance%", {
                                balance:
                                  null !==
                                    (t =
                                      null == C
                                        ? void 0
                                        : C.toSignificant(6)) && void 0 !== t
                                    ? t
                                    : I("Loading"),
                              })
                            : " -",
                      }),
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function Ja(n) {
        return null != n;
      }
      var Xa = function (n) {
        return (function (n, e) {
          var t = (0, i.useState)(function () {
              return e && e(n) ? n : void 0;
            }),
            r = t[0],
            o = t[1];
          return (
            (0, i.useEffect)(
              function () {
                o(function (t) {
                  return !e || e(n) ? n : t;
                });
              },
              [e, n]
            ),
            r
          );
        })(n, Ja);
      };
      function nc(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var ec = function (n) {
          return (0, o.jsx)(
            Q.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        nc(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 24 24" }, n, {
              children: (0, o.jsx)("path", {
                d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z",
              }),
            })
          );
        },
        tc = (0, i.memo)(function (n) {
          var e = n.trade;
          return (0, o.jsx)(Y.Z, {
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "flex-end",
            alignItems: "center",
            children: e.route.path.map(function (n, e, t) {
              var r = e === t.length - 1,
                a = (0, Sn.Bv)(n);
              return (0,
              o.jsxs)(i.Fragment, { children: [(0, o.jsx)(Y.Z, { alignItems: "end", children: (0, o.jsx)(H.Z, { fontSize: "14px", ml: "0.125rem", mr: "0.125rem", children: a.symbol }) }), !r && (0, o.jsx)(ec, { width: "12px" })] }, e);
            }),
          });
        });
      function rc(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function oc(n) {
        var e,
          t,
          r,
          i,
          a = n.trade,
          u = n.allowedSlippage,
          l = (0, Bn.$G)().t,
          s = R(a),
          d = s.priceImpactWithoutFee,
          f = s.realizedLPFee,
          p = a.tradeType === c.YL.EXACT_INPUT,
          m = F(a, u);
        return (0, o.jsxs)(re, {
          style: { padding: "0 16px" },
          children: [
            (0, o.jsxs)(_n, {
              children: [
                (0, o.jsxs)(Yn, {
                  children: [
                    (0, o.jsx)(H.Z, {
                      fontSize: "14px",
                      color: "textSubtle",
                      children: l(p ? "Minimum received" : "Maximum sold"),
                    }),
                    (0, o.jsx)(Ht, {
                      text: l(
                        "Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."
                      ),
                      ml: "4px",
                      placement: "top-start",
                    }),
                  ],
                }),
                (0, o.jsx)(Yn, {
                  children: (0, o.jsx)(H.Z, {
                    fontSize: "14px",
                    children: p
                      ? null !==
                          (r = ""
                            .concat(
                              null === (e = m[U.gN.OUTPUT]) || void 0 === e
                                ? void 0
                                : e.toSignificant(4),
                              " "
                            )
                            .concat(a.outputAmount.currency.symbol)) &&
                        void 0 !== r
                        ? r
                        : "-"
                      : null !==
                          (i = ""
                            .concat(
                              null === (t = m[U.gN.INPUT]) || void 0 === t
                                ? void 0
                                : t.toSignificant(4),
                              " "
                            )
                            .concat(a.inputAmount.currency.symbol)) &&
                        void 0 !== i
                      ? i
                      : "-",
                  }),
                }),
              ],
            }),
            (0, o.jsxs)(_n, {
              children: [
                (0, o.jsxs)(Yn, {
                  children: [
                    (0, o.jsx)(H.Z, {
                      fontSize: "14px",
                      color: "textSubtle",
                      children: l("Price Impact"),
                    }),
                    (0, o.jsx)(Ht, {
                      text: l(
                        "The difference between the market price and estimated price due to trade size."
                      ),
                      ml: "4px",
                      placement: "top-start",
                    }),
                  ],
                }),
                (0, o.jsx)(sr, { priceImpact: d }),
              ],
            }),
            (0, o.jsxs)(_n, {
              children: [
                (0, o.jsxs)(Yn, {
                  children: [
                    (0, o.jsx)(H.Z, {
                      fontSize: "14px",
                      color: "textSubtle",
                      children: l("Liquidity Provider Fee"),
                    }),
                    (0, o.jsx)(Ht, {
                      text: (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(H.Z, {
                            mb: "12px",
                            children: l(
                              "For each trade a %amount% fee is paid",
                              { amount: "0.25%" }
                            ),
                          }),
                          (0, o.jsxs)(H.Z, {
                            children: [
                              "- ",
                              l("%amount% to LP token holders", {
                                amount: "0.17%",
                              }),
                            ],
                          }),
                          (0, o.jsxs)(H.Z, {
                            children: [
                              "- ",
                              l("%amount% to the Treasury", {
                                amount: "0.03%",
                              }),
                            ],
                          }),
                          (0, o.jsxs)(H.Z, {
                            children: [
                              "- ",
                              l("%amount% towards CAKE buyback and burn", {
                                amount: "0.05%",
                              }),
                            ],
                          }),
                        ],
                      }),
                      ml: "4px",
                      placement: "top-start",
                    }),
                  ],
                }),
                (0, o.jsx)(H.Z, {
                  fontSize: "14px",
                  children: f
                    ? ""
                        .concat(f.toSignificant(4), " ")
                        .concat(a.inputAmount.currency.symbol)
                    : "-",
                }),
              ],
            }),
          ],
        });
      }
      function ic(n) {
        var e = n.trade,
          t = (0, Bn.$G)().t,
          r = (function (n, e) {
            return (
              (function (n) {
                if (Array.isArray(n)) return n;
              })(n) ||
              (function (n, e) {
                var t =
                  null == n
                    ? null
                    : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"];
                if (null != t) {
                  var r,
                    o,
                    i = [],
                    a = !0,
                    c = !1;
                  try {
                    for (
                      t = t.call(n);
                      !(a = (r = t.next()).done) &&
                      (i.push(r.value), !e || i.length !== e);
                      a = !0
                    );
                  } catch (n) {
                    (c = !0), (o = n);
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return i;
                }
              })(n, e) ||
              (function (n, e) {
                if (n) {
                  if ("string" == typeof n) return rc(n, e);
                  var t = Object.prototype.toString.call(n).slice(8, -1);
                  return (
                    "Object" === t && n.constructor && (t = n.constructor.name),
                    "Map" === t || "Set" === t
                      ? Array.from(t)
                      : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? rc(n, e)
                      : void 0
                  );
                }
              })(n, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })((0, Tn.$2)(), 1)[0],
          i = Boolean(e && e.route.path.length > 2);
        return (0, o.jsx)(re, {
          gap: "0px",
          children:
            e &&
            (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsx)(oc, { trade: e, allowedSlippage: r }),
                i &&
                  (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsxs)(_n, {
                      style: { padding: "0 16px" },
                      children: [
                        (0, o.jsxs)("span", {
                          style: { display: "flex", alignItems: "center" },
                          children: [
                            (0, o.jsx)(H.Z, {
                              fontSize: "14px",
                              color: "textSubtle",
                              children: t("Route"),
                            }),
                            (0, o.jsx)(Ht, {
                              text: t(
                                "Routing through these tokens resulted in the best price for your trade."
                              ),
                              ml: "4px",
                              placement: "top-start",
                            }),
                          ],
                        }),
                        (0, o.jsx)(tc, { trade: e }),
                      ],
                    }),
                  }),
              ],
            }),
        });
      }
      function ac(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function cc(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })
            )),
            r.forEach(function (e) {
              ac(n, e, t[e]);
            });
        }
        return n;
      }
      function uc() {
        var n,
          e,
          t =
            ((n = [
              "\n  margin-top: ",
              ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n  // max-width: 400px;\n  border-radius: 20px;\n  // background-color: ",
              ";\n\n  transform: ",
              ";\n  transition: transform 300ms ease-in-out;\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (uc = function () {
            return t;
          }),
          t
        );
      }
      var lc = a.ZP.div.withConfig({ componentId: "sc-7c40223e-0" })(
        uc(),
        function (n) {
          return n.show ? "16px" : 0;
        },
        function (n) {
          return n.theme.colors.invertedContrast;
        },
        function (n) {
          return n.show ? "translateY(0%)" : "translateY(-100%)";
        }
      );
      function sc(n) {
        var e,
          t = n.trade,
          r = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, ["trade"]),
          i = Xa(t);
        return (0, o.jsx)(lc, {
          show: Boolean(t),
          children: (0, o.jsx)(
            ic,
            cc({}, r, {
              trade:
                null !== (e = null != t ? t : i) && void 0 !== e ? e : void 0,
            })
          ),
        });
      }
      function dc(n) {
        var e,
          t,
          r,
          i,
          a,
          c = n.price,
          u = n.showInverted,
          l = n.setShowInverted,
          s = u
            ? null == c
              ? void 0
              : c.toSignificant(6)
            : null === (e = null == c ? void 0 : c.invert()) || void 0 === e
            ? void 0
            : e.toSignificant(6),
          d = Boolean(
            (null == c ? void 0 : c.baseCurrency) &&
              (null == c ? void 0 : c.quoteCurrency)
          ),
          f = u
            ? ""
                .concat(
                  null == c || null === (t = c.quoteCurrency) || void 0 === t
                    ? void 0
                    : t.symbol,
                  " per "
                )
                .concat(
                  null == c || null === (r = c.baseCurrency) || void 0 === r
                    ? void 0
                    : r.symbol
                )
            : ""
                .concat(
                  null == c || null === (i = c.baseCurrency) || void 0 === i
                    ? void 0
                    : i.symbol,
                  " per "
                )
                .concat(
                  null == c || null === (a = c.quoteCurrency) || void 0 === a
                    ? void 0
                    : a.symbol
                );
        return (0, o.jsx)(H.Z, {
          style: {
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          },
          children: d
            ? (0, o.jsxs)(o.Fragment, {
                children: [
                  null != s ? s : "-",
                  " ",
                  f,
                  (0, o.jsx)(or, {
                    onClick: function () {
                      return l(!u);
                    },
                    children: (0, o.jsx)(zt.Z, { width: "14px" }),
                  }),
                ],
              })
            : "-",
        });
      }
      function fc(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function pc(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function mc() {
        var n = pc(["\n  width: 50%;\n"]);
        return (
          (mc = function () {
            return n;
          }),
          n
        );
      }
      function hc() {
        var n = pc([
          "\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
          ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n",
        ]);
        return (
          (hc = function () {
            return n;
          }),
          n
        );
      }
      function yc() {
        var n = pc([
          "\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n",
        ]);
        return (
          (yc = function () {
            return n;
          }),
          n
        );
      }
      function bc() {
        var n = pc([
          "\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ",
          "\n      0%,\n    ",
          "\n      80%\n  );\n  opacity: 0.6;\n",
        ]);
        return (
          (bc = function () {
            return n;
          }),
          n
        );
      }
      var vc,
        xc,
        gc = (0, a.ZP)(_n).withConfig({ componentId: "sc-b6a41b3e-0" })(mc()),
        jc = a.ZP.div.withConfig({ componentId: "sc-b6a41b3e-1" })(
          hc(),
          function (n) {
            var e = n.theme,
              t = n.confirmed;
            return n.disabled
              ? e.colors.backgroundDisabled
              : t
              ? e.colors.success
              : e.colors.primary;
          }
        ),
        wc = a.ZP.div.withConfig({ componentId: "sc-b6a41b3e-2" })(yc()),
        Oc = a.ZP.div.withConfig({ componentId: "sc-b6a41b3e-3" })(
          bc(),
          function (n) {
            var e = n.theme,
              t = n.prevConfirmed;
            return n.disabled
              ? e.colors.backgroundDisabled
              : t
              ? e.colors.success
              : e.colors.primary;
          },
          function (n) {
            var e = n.theme,
              t = n.prevConfirmed;
            return n.disabled
              ? e.colors.backgroundDisabled
              : t
              ? e.colors.primary
              : e.colors.backgroundDisabled;
          }
        );
      function Cc(n) {
        var e = n.steps,
          t = n.disabled,
          r = void 0 !== t && t,
          i = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, ["steps", "disabled"]);
        return (0, o.jsx)(
          re,
          (function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                  })
                )),
                r.forEach(function (e) {
                  fc(n, e, t[e]);
                });
            }
            return n;
          })({ justify: "center" }, i, {
            children: (0, o.jsxs)(gc, {
              children: [
                e.map(function (n, t) {
                  return (0,
                  o.jsxs)(wc, { children: [(0, o.jsx)(jc, { confirmed: n, disabled: r || (!e[t - 1] && 0 !== t), children: n ? "✓" : t + 1 }), (0, o.jsx)(Oc, { prevConfirmed: n, disabled: r })] }, t);
                }),
                (0, o.jsx)(jc, {
                  disabled: r || !e[e.length - 1],
                  children: e.length + 1,
                }),
              ],
            }),
          })
        );
      }
      function kc(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function Ic(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return kc(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? kc(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      !(function (n) {
        (n.InvalidInput = "InvalidInput"),
          (n.RiskyLow = "RiskyLow"),
          (n.RiskyHigh = "RiskyHigh");
      })(vc || (vc = {})),
        (function (n) {
          n.InvalidInput = "InvalidInput";
        })(xc || (xc = {}));
      var Tc = RegExp("^\\d*(?:\\\\[.])?\\d*$"),
        Pc = function () {
          var n,
            e,
            t = Ic((0, Tn.$2)(), 2),
            r = t[0],
            a = t[1],
            c = Ic((0, Tn.A6)(), 2),
            u = c[0],
            l = c[1],
            s = (0, i.useState)(""),
            d = s[0],
            f = s[1],
            p = (0, i.useState)(""),
            m = p[0],
            h = p[1],
            y = (0, Bn.$G)().t,
            b =
              "" === d ||
              (r / 100).toFixed(2) === Number.parseFloat(d).toFixed(2),
            v = "" === m || (u / 60).toString() === m;
          (n =
            "" === d || b
              ? b && r < 50
                ? vc.RiskyLow
                : b && r > 500
                ? vc.RiskyHigh
                : void 0
              : vc.InvalidInput),
            (e = "" === m || v ? void 0 : xc.InvalidInput);
          var x = function (n) {
              if ("" === n || Tc.test((0, D.hr)(n))) {
                f(n);
                try {
                  var e = Number.parseInt(
                    (100 * Number.parseFloat(n)).toString()
                  );
                  !Number.isNaN(e) && e < 5e3 && a(e);
                } catch (n) {
                  console.error(n);
                }
              }
            },
            g = function (n) {
              h(n);
              try {
                var e = 60 * Number.parseInt(n);
                !Number.isNaN(e) && e > 0 && l(e);
              } catch (n) {
                console.error(n);
              }
            };
          return (0, o.jsxs)(Y.Z, {
            flexDirection: "column",
            children: [
              (0, o.jsxs)(Y.Z, {
                flexDirection: "column",
                mb: "24px",
                children: [
                  (0, o.jsxs)(Y.Z, {
                    mb: "12px",
                    children: [
                      (0, o.jsx)(H.Z, { children: y("Slippage Tolerance") }),
                      (0, o.jsx)(Ht, {
                        text: y(
                          "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution."
                        ),
                        placement: "top-start",
                        ml: "4px",
                      }),
                    ],
                  }),
                  (0, o.jsxs)(Y.Z, {
                    flexWrap: "wrap",
                    children: [
                      (0, o.jsx)(en.Z, {
                        mt: "4px",
                        mr: "4px",
                        scale: "sm",
                        onClick: function () {
                          f(""), a(10);
                        },
                        variant: 10 === r ? "primary" : "tertiary",
                        children: "0.1%",
                      }),
                      (0, o.jsx)(en.Z, {
                        mt: "4px",
                        mr: "4px",
                        scale: "sm",
                        onClick: function () {
                          f(""), a(50);
                        },
                        variant: 50 === r ? "primary" : "tertiary",
                        children: "0.5%",
                      }),
                      (0, o.jsx)(en.Z, {
                        mr: "4px",
                        mt: "4px",
                        scale: "sm",
                        onClick: function () {
                          f(""), a(100);
                        },
                        variant: 100 === r ? "primary" : "tertiary",
                        children: "1.0%",
                      }),
                      (0, o.jsxs)(Y.Z, {
                        alignItems: "center",
                        children: [
                          (0, o.jsx)(wn.Z, {
                            width: "76px",
                            mt: "4px",
                            children: (0, o.jsx)(Mr, {
                              scale: "sm",
                              inputMode: "decimal",
                              pattern: "^[0-9]*[.,]?[0-9]{0,2}$",
                              placeholder: (r / 100).toFixed(2),
                              value: d,
                              onBlur: function () {
                                x((r / 100).toFixed(2));
                              },
                              onChange: function (n) {
                                n.currentTarget.validity.valid &&
                                  x(n.target.value.replace(/,/g, "."));
                              },
                              isWarning: !b,
                              isSuccess: ![10, 50, 100].includes(r),
                            }),
                          }),
                          (0, o.jsx)(H.Z, {
                            color: "primary",
                            bold: !0,
                            ml: "2px",
                            children: "%",
                          }),
                        ],
                      }),
                    ],
                  }),
                  !!n &&
                    (0, o.jsx)(H.Z, {
                      fontSize: "14px",
                      color: n === vc.InvalidInput ? "red" : "#F3841E",
                      mt: "8px",
                      children:
                        n === vc.InvalidInput
                          ? y("Enter a valid slippage percentage")
                          : n === vc.RiskyLow
                          ? y("Your transaction may fail")
                          : y("Your transaction may be frontrun"),
                    }),
                ],
              }),
              (0, o.jsxs)(Y.Z, {
                justifyContent: "space-between",
                alignItems: "center",
                mb: "24px",
                children: [
                  (0, o.jsxs)(Y.Z, {
                    alignItems: "center",
                    children: [
                      (0, o.jsx)(H.Z, { children: y("Tx deadline (mins)") }),
                      (0, o.jsx)(Ht, {
                        text: y(
                          "Your transaction will revert if it is left confirming for longer than this time."
                        ),
                        placement: "top-start",
                        ml: "4px",
                      }),
                    ],
                  }),
                  (0, o.jsx)(Y.Z, {
                    children: (0, o.jsx)(wn.Z, {
                      width: "60px",
                      mt: "4px",
                      children: (0, o.jsx)(Mr, {
                        scale: "sm",
                        inputMode: "numeric",
                        pattern: "^[0-9]+$",
                        color: e ? "red" : void 0,
                        onBlur: function () {
                          g((u / 60).toString());
                        },
                        placeholder: (u / 60).toString(),
                        value: m,
                        onChange: function (n) {
                          n.currentTarget.validity.valid && g(n.target.value);
                        },
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function Sc(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      var Zc = function (n) {
        var e = n.setShowConfirmExpertModal,
          t = n.setShowExpertModeAcknowledgement,
          r = (function (n, e) {
            return (
              (function (n) {
                if (Array.isArray(n)) return n;
              })(n) ||
              (function (n, e) {
                var t =
                  null == n
                    ? null
                    : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"];
                if (null != t) {
                  var r,
                    o,
                    i = [],
                    a = !0,
                    c = !1;
                  try {
                    for (
                      t = t.call(n);
                      !(a = (r = t.next()).done) &&
                      (i.push(r.value), !e || i.length !== e);
                      a = !0
                    );
                  } catch (n) {
                    (c = !0), (o = n);
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return i;
                }
              })(n, e) ||
              (function (n, e) {
                if (n) {
                  if ("string" == typeof n) return Sc(n, e);
                  var t = Object.prototype.toString.call(n).slice(8, -1);
                  return (
                    "Object" === t && n.constructor && (t = n.constructor.name),
                    "Map" === t || "Set" === t
                      ? Array.from(t)
                      : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? Sc(n, e)
                      : void 0
                  );
                }
              })(n, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })((0, Tn.DG)(), 2)[1],
          a = (0, i.useState)(!1),
          c = a[0],
          u = a[1],
          l = (0, Bn.$G)().t;
        return (0, o.jsxs)(Un.Z, {
          title: l("Expert Mode"),
          onBack: function () {
            return e(!1);
          },
          onDismiss: function () {
            return e(!1);
          },
          headerBackground: "gradients.cardHeader",
          style: { maxWidth: "360px" },
          children: [
            (0, o.jsx)(Jo, {
              variant: "warning",
              mb: "24px",
              children: (0, o.jsx)(H.Z, {
                children: l(
                  "Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds."
                ),
              }),
            }),
            (0, o.jsx)(H.Z, {
              mb: "24px",
              children: l("Only use this mode if you know what you’re doing."),
            }),
            (0, o.jsxs)(Y.Z, {
              alignItems: "center",
              mb: "24px",
              children: [
                (0, o.jsx)(ti, {
                  name: "confirmed",
                  type: "checkbox",
                  checked: c,
                  onChange: function () {
                    return u(!c);
                  },
                  scale: "sm",
                }),
                (0, o.jsx)(H.Z, {
                  ml: "10px",
                  color: "textSubtle",
                  style: { userSelect: "none" },
                  children: l("Don’t show this again"),
                }),
              ],
            }),
            (0, o.jsx)(en.Z, {
              mb: "8px",
              id: "confirm-expert-mode",
              onClick: function () {
                "confirm" ===
                  window.prompt(
                    'Please type the word "confirm" to enable expert mode.'
                  ) && (r(), e(!1), c && t(!1));
              },
              children: l("Turn On Expert Mode"),
            }),
            (0, o.jsx)(en.Z, {
              variant: "secondary",
              onClick: function () {
                e(!1);
              },
              children: l("Cancel"),
            }),
          ],
        });
      };
      function Ac(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      var Ec = function () {
        var n = (0, Bn.$G)().t,
          e = (function (n, e) {
            return (
              (function (n) {
                if (Array.isArray(n)) return n;
              })(n) ||
              (function (n, e) {
                var t =
                  null == n
                    ? null
                    : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                      n["@@iterator"];
                if (null != t) {
                  var r,
                    o,
                    i = [],
                    a = !0,
                    c = !1;
                  try {
                    for (
                      t = t.call(n);
                      !(a = (r = t.next()).done) &&
                      (i.push(r.value), !e || i.length !== e);
                      a = !0
                    );
                  } catch (n) {
                    (c = !0), (o = n);
                  } finally {
                    try {
                      a || null == t.return || t.return();
                    } finally {
                      if (c) throw o;
                    }
                  }
                  return i;
                }
              })(n, e) ||
              (function (n, e) {
                if (n) {
                  if ("string" == typeof n) return Ac(n, e);
                  var t = Object.prototype.toString.call(n).slice(8, -1);
                  return (
                    "Object" === t && n.constructor && (t = n.constructor.name),
                    "Map" === t || "Set" === t
                      ? Array.from(t)
                      : "Arguments" === t ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                      ? Ac(n, e)
                      : void 0
                  );
                }
              })(n, e) ||
              (function () {
                throw new TypeError(
                  "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                );
              })()
            );
          })((0, Tn.nF)(), 2),
          t = e[0],
          r = e[1];
        return (0, o.jsxs)(Y.Z, {
          flexDirection: "column",
          children: [
            (0, o.jsxs)(Y.Z, {
              mb: "12px",
              alignItems: "center",
              children: [
                (0, o.jsx)(H.Z, {
                  children: n("Default Transaction Speed (GWEI)"),
                }),
                (0, o.jsx)(Ht, {
                  text: n(
                    "Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees"
                  ),
                  placement: "top-start",
                  ml: "4px",
                }),
              ],
            }),
            (0, o.jsxs)(Y.Z, {
              flexWrap: "wrap",
              children: [
                (0, o.jsx)(en.Z, {
                  mt: "4px",
                  mr: "4px",
                  scale: "sm",
                  onClick: function () {
                    r(ce.j4.default);
                  },
                  variant: t === ce.j4.default ? "primary" : "tertiary",
                  children: n("Standard (%gasPrice%)", {
                    gasPrice: ce.DB.default,
                  }),
                }),
                (0, o.jsx)(en.Z, {
                  mt: "4px",
                  mr: "4px",
                  scale: "sm",
                  onClick: function () {
                    r(ce.j4.fast);
                  },
                  variant: t === ce.j4.fast ? "primary" : "tertiary",
                  children: n("Fast (%gasPrice%)", { gasPrice: ce.DB.fast }),
                }),
                (0, o.jsx)(en.Z, {
                  mr: "4px",
                  mt: "4px",
                  scale: "sm",
                  onClick: function () {
                    r(ce.j4.instant);
                  },
                  variant: t === ce.j4.instant ? "primary" : "tertiary",
                  children: n("Instant (%gasPrice%)", {
                    gasPrice: ce.DB.instant,
                  }),
                }),
              ],
            }),
          ],
        });
      };
      function Nc(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function Mc(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return Nc(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Nc(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Lc() {
        var n,
          e,
          t =
            ((n = [
              "\n  flex-direction: column;\n  max-height: 400px;\n  ",
              " {\n    max-height: none;\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Lc = function () {
            return t;
          }),
          t
        );
      }
      var Dc = (0, a.ZP)(Y.Z).withConfig({ componentId: "sc-fbd53c6a-0" })(
          Lc(),
          function (n) {
            return n.theme.mediaQueries.sm;
          }
        ),
        Uc = function (n) {
          var e = n.onDismiss,
            t = (0, i.useState)(!1),
            r = t[0],
            a = t[1],
            c = Mc((0, Tn.wX)(), 2),
            u = c[0],
            l = c[1],
            s = Mc((0, Tn.DG)(), 2),
            d = s[0],
            f = s[1],
            p = Mc((0, Tn.RO)(), 2),
            m = p[0],
            h = p[1],
            y = Mc((0, Tn.TO)(), 2),
            b = (y[0], y[1], Mc((0, Tn.YF)(), 2)),
            v = (b[0], b[1], Re().onChangeRecipient),
            x = (0, Bn.$G)().t,
            g = ca();
          return (
            g.theme,
            g.isDark,
            g.setTheme,
            r
              ? (0, o.jsx)(Zc, {
                  setShowConfirmExpertModal: a,
                  onDismiss: e,
                  setShowExpertModeAcknowledgement: l,
                })
              : (0, o.jsx)(Un.Z, {
                  title: x("Settings"),
                  onDismiss: e,
                  children: (0, o.jsxs)(Dc, {
                    children: [
                      (0, o.jsx)(Y.Z, {
                        pb: "24px",
                        flexDirection: "column",
                        children: (0, o.jsx)(Ec, {}),
                      }),
                      (0, o.jsx)(Y.Z, {
                        pb: "24px",
                        flexDirection: "column",
                        children: (0, o.jsx)(Pc, {}),
                      }),
                      (0, o.jsxs)(Y.Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "24px",
                        children: [
                          (0, o.jsxs)(Y.Z, {
                            alignItems: "center",
                            children: [
                              (0, o.jsx)(H.Z, { children: x("Expert Mode") }),
                              (0, o.jsx)(Ht, {
                                text: x(
                                  "Bypasses confirmation modals and allows high slippage trades. Use at your own risk."
                                ),
                                placement: "top-start",
                                ml: "4px",
                              }),
                            ],
                          }),
                          (0, o.jsx)(Si, {
                            id: "toggle-expert-mode-button",
                            scale: "md",
                            checked: d,
                            onChange: function () {
                              d ? (v(null), f()) : u ? a(!0) : (v(null), f());
                            },
                          }),
                        ],
                      }),
                      (0, o.jsxs)(Y.Z, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        mb: "24px",
                        children: [
                          (0, o.jsxs)(Y.Z, {
                            alignItems: "center",
                            children: [
                              (0, o.jsx)(H.Z, {
                                children: x("Disable Multihops"),
                              }),
                              (0, o.jsx)(Ht, {
                                text: x(
                                  "Restricts swaps to direct pairs only."
                                ),
                                placement: "top-start",
                                ml: "4px",
                              }),
                            ],
                          }),
                          (0, o.jsx)(Si, {
                            id: "toggle-disable-multihop-button",
                            checked: m,
                            scale: "md",
                            onChange: function () {
                              h(!m);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                })
          );
        };
      function zc(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      var Bc = function (n) {
          var e = n.color,
            t = n.mr,
            r = void 0 === t ? "8px" : t,
            i = (function (n, e) {
              return (
                (function (n) {
                  if (Array.isArray(n)) return n;
                })(n) ||
                (function (n, e) {
                  var t =
                    null == n
                      ? null
                      : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                        n["@@iterator"];
                  if (null != t) {
                    var r,
                      o,
                      i = [],
                      a = !0,
                      c = !1;
                    try {
                      for (
                        t = t.call(n);
                        !(a = (r = t.next()).done) &&
                        (i.push(r.value), !e || i.length !== e);
                        a = !0
                      );
                    } catch (n) {
                      (c = !0), (o = n);
                    } finally {
                      try {
                        a || null == t.return || t.return();
                      } finally {
                        if (c) throw o;
                      }
                    }
                    return i;
                  }
                })(n, e) ||
                (function (n, e) {
                  if (n) {
                    if ("string" == typeof n) return zc(n, e);
                    var t = Object.prototype.toString.call(n).slice(8, -1);
                    return (
                      "Object" === t &&
                        n.constructor &&
                        (t = n.constructor.name),
                      "Map" === t || "Set" === t
                        ? Array.from(t)
                        : "Arguments" === t ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                        ? zc(n, e)
                        : void 0
                    );
                  }
                })(n, e) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()
              );
            })((0, q.Z)((0, o.jsx)(Uc, {})), 1)[0];
          return (0, o.jsx)(Y.Z, {
            children: (0, o.jsx)(G.Z, {
              style: { background: "#E272FC", borderRadius: "8px" },
              onClick: i,
              variant: "text",
              scale: "sm",
              mr: r,
              id: "open-settings-dialog-button",
              children: (0, o.jsx)(bi, {
                height: 20,
                width: 20,
                color: e || "textSubtle",
              }),
            }),
          });
        },
        Rc = (t(41664), t(75398));
      function Fc() {
        var n = (0, In.Z)(),
          e = n.chainId,
          t = n.account,
          r = (0, Be.TL)();
        return (0, i.useCallback)(
          function (n) {
            var o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              i = o.summary,
              a = o.approval,
              c = o.claim,
              u = o.type,
              l = o.order;
            if (t && e) {
              var s = n.hash;
              if (!s) throw Error("No transaction hash found.");
              r(
                (0, Rc.dT)({
                  hash: s,
                  from: t,
                  chainId: e,
                  approval: a,
                  summary: i,
                  claim: c,
                  type: u,
                  order: l,
                })
              );
            }
          },
          [r, e, t]
        );
      }
      function Wc() {
        var n,
          e = (0, In.Z)().chainId,
          t = (0, Ni.v9)(function (n) {
            return n.transactions;
          });
        return (0, i.useMemo)(
          function () {
            return e && null !== (n = t[e]) && void 0 !== n ? n : {};
          },
          [e, t]
        );
      }
      function $c(n) {
        return new Date().getTime() - n.addedTime < 864e5;
      }
      function Hc(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Gc() {
        var n = Hc([
          "\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none !important;\n  border-radius: 0.5rem;\n  padding: 0.25rem 0rem;\n  font-weight: 500;\n  font-size: 0.825rem;\n  color: ",
          ";\n",
        ]);
        return (
          (Gc = function () {
            return n;
          }),
          n
        );
      }
      function Vc() {
        var n = Hc(["\n  color: ", ";\n"]);
        return (
          (Vc = function () {
            return n;
          }),
          n
        );
      }
      var _c = a.ZP.div.withConfig({ componentId: "sc-8aaa60d2-0" })(
          Gc(),
          function (n) {
            return n.theme.colors.primary;
          }
        ),
        qc = a.ZP.div.withConfig({ componentId: "sc-8aaa60d2-1" })(
          Vc(),
          function (n) {
            var e = n.pending,
              t = n.success,
              r = n.theme;
            return e
              ? r.colors.primary
              : t
              ? r.colors.success
              : r.colors.failure;
          }
        );
      function Yc(n) {
        var e,
          t,
          r = n.tx,
          i = (0, In.Z)().chainId,
          a = null == r ? void 0 : r.summary,
          c = !(null == r ? void 0 : r.receipt),
          u =
            !c &&
            r &&
            (1 ===
              (null === (e = r.receipt) || void 0 === e ? void 0 : e.status) ||
              void 0 ===
                (null === (t = r.receipt) || void 0 === t ? void 0 : t.status));
        return i
          ? (0, o.jsxs)(_c, {
              pending: c,
              success: u,
              children: [
                (0, o.jsx)(hi.Z, {
                  href: (0, D.s6)(r.hash, "transaction", i),
                  children: null != a ? a : r.hash,
                }),
                (0, o.jsx)(qc, {
                  pending: c,
                  success: u,
                  children: c
                    ? (0, o.jsx)(_r, {})
                    : u
                    ? (0, o.jsx)(Ei, { color: "success" })
                    : (0, o.jsx)(Yi.Z, { color: "failure" }),
                }),
              ],
            })
          : null;
      }
      var Qc = t(18082),
        Kc = t(85518);
      function Jc(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var Xc = function (n) {
          return (0, o.jsx)(
            Q.Z,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        Jc(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ viewBox: "0 0 24 24" }, n, {
              children: (0, o.jsx)("path", {
                d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z",
              }),
            })
          );
        },
        nu = t(29409);
      function eu(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function tu() {
        var n,
          e,
          t =
            ((n = [
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: auto;\n  justify-content: center;\n  margin-left: auto;\n  margin-right: auto;\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (tu = function () {
            return t;
          }),
          t
        );
      }
      var ru = (0, a.ZP)(en.Z)
          .attrs({ width: "100%", variant: "text", py: "16px" })
          .withConfig({ componentId: "sc-540b9455-0" })
          .withConfig({ componentId: "sc-4a6a2b7-0" })(tu()),
        ou = function (n) {
          var e = n.t,
            t = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, ["t"]);
          return (0, o.jsxs)(
            ru,
            (function (n) {
              for (
                var e = arguments,
                  t = function (t) {
                    var r = null != e[t] ? e[t] : {},
                      o = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols &&
                      (o = o.concat(
                        Object.getOwnPropertySymbols(r).filter(function (n) {
                          return Object.getOwnPropertyDescriptor(
                            r,
                            n
                          ).enumerable;
                        })
                      )),
                      o.forEach(function (e) {
                        eu(n, e, r[e]);
                      });
                  },
                  r = 1;
                r < arguments.length;
                r++
              )
                t(r);
              return n;
            })({ variant: "tertiary" }, t, {
              children: [
                (0, o.jsx)(Xc, {
                  width: "40px",
                  mb: "8px",
                  color: "textSubtle",
                }),
                (0, o.jsx)(H.Z, { fontSize: "14px", children: e("More") }),
              ],
            })
          );
        },
        iu = function (n) {
          var e = n.login,
            t = n.walletConfig,
            r = n.onDismiss,
            i = t.title,
            a = t.icon;
          return (0, o.jsxs)(ru, {
            variant: "tertiary",
            onClick: function () {
              if ("Trust Wallet" === i && nu.mD && Kc.nI)
                return (
                  e(nu.mD.connectorId),
                  null === localStorage ||
                    void 0 === localStorage ||
                    localStorage.setItem(nu.Y4, nu.mD.title),
                  null === localStorage ||
                    void 0 === localStorage ||
                    localStorage.setItem(nu.OM, nu.mD.connectorId),
                  void r()
                );
              !window.ethereum && t.href
                ? window.open(t.href, "_blank", "noopener noreferrer")
                : (e(t.connectorId),
                  null === localStorage ||
                    void 0 === localStorage ||
                    localStorage.setItem(nu.Y4, t.title),
                  null === localStorage ||
                    void 0 === localStorage ||
                    localStorage.setItem(nu.OM, t.connectorId),
                  r());
            },
            id: "wallet-connect-".concat(i.toLocaleLowerCase()),
            children: [
              (0, o.jsx)(a, { width: "40px", mb: "8px" }),
              (0, o.jsx)(H.Z, { fontSize: "14px", children: i }),
            ],
          });
        };
      function au(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function cu(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function uu(n) {
        for (
          var e = arguments,
            t = function (t) {
              var r = null != e[t] ? e[t] : {},
                o = Object.keys(r);
              "function" == typeof Object.getOwnPropertySymbols &&
                (o = o.concat(
                  Object.getOwnPropertySymbols(r).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(r, n).enumerable;
                  })
                )),
                o.forEach(function (e) {
                  cu(n, e, r[e]);
                });
            },
            r = 1;
          r < arguments.length;
          r++
        )
          t(r);
        return n;
      }
      function lu() {
        var n,
          e,
          t =
            ((n = ["\n  border-bottom: 1px solid ", ";\n"]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (lu = function () {
            return t;
          }),
          t
        );
      }
      var su = (0, a.ZP)(wn.Z)
          .withConfig({ componentId: "sc-a0f283b4-0" })
          .withConfig({ componentId: "sc-47ea086b-0" })(lu(), function (n) {
          return n.theme.colors.cardBorder;
        }),
        du = function (n) {
          return "function" == typeof n ? n() : n;
        },
        fu = function (n) {
          var e,
            t = n.login,
            r = n.onDismiss,
            c =
              void 0 === r
                ? function () {
                    return null;
                  }
                : r,
            u = n.displayCount,
            l = void 0 === u ? 3 : u,
            s = n.t,
            d = (0, i.useState)(!1),
            f = d[0],
            p = d[1],
            m =
              ((0, a.Fg)(),
              (function (n) {
                var e = n.sort(function (n, e) {
                    return du(n.priority) - du(e.priority);
                  }),
                  t =
                    null === localStorage || void 0 === localStorage
                      ? void 0
                      : localStorage.getItem(nu.Y4);
                if (!t) return e;
                var r = e.find(function (n) {
                  return n.title === t;
                });
                return r
                  ? [r].concat(
                      (function (n) {
                        return (
                          (function (n) {
                            if (Array.isArray(n)) return au(n);
                          })(n) ||
                          (function (n) {
                            if (
                              ("undefined" != typeof Symbol &&
                                null != n[Symbol.iterator]) ||
                              null != n["@@iterator"]
                            )
                              return Array.from(n);
                          })(n) ||
                          (function (n, e) {
                            if (n) {
                              if ("string" == typeof n) return au(n, e);
                              var t = Object.prototype.toString
                                .call(n)
                                .slice(8, -1);
                              return (
                                "Object" === t &&
                                  n.constructor &&
                                  (t = n.constructor.name),
                                "Map" === t || "Set" === t
                                  ? Array.from(t)
                                  : "Arguments" === t ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      t
                                    )
                                  ? au(n, e)
                                  : void 0
                              );
                            }
                          })(n) ||
                          (function () {
                            throw new TypeError(
                              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                          })()
                        );
                      })(
                        e.filter(function (n) {
                          return n.title !== t;
                        })
                      )
                    )
                  : e;
              })(nu.ZP)),
            h = (
              null === (e = window.ethereum) || void 0 === e
                ? void 0
                : e.isTrust
            )
              ? m.filter(function (n) {
                  return "WalletConnect" !== n.title;
                })
              : m,
            y = f ? h : h.slice(0, l);
          return (0, o.jsxs)(Zr.F0, {
            minWidth: "100%",
            children: [
              (0, o.jsxs)(Zr.xB, {
                children: [
                  (0, o.jsx)(Zr.r6, {
                    children: (0, o.jsx)(Ar.Z, {
                      children: s("Connect Wallet"),
                    }),
                  }),
                  (0, o.jsx)(Zr.ol, { onDismiss: c }),
                ],
              }),
              (0, o.jsxs)(Zr.fe, {
                minWidth: ["320px", null, "340px"],
                children: [
                  (0, o.jsx)(su, {
                    py: "24px",
                    maxHeight: "453px",
                    overflowY: "auto",
                    children: (0, o.jsxs)(So, {
                      gridTemplateColumns: "1fr 1fr",
                      children: [
                        y.map(function (n) {
                          return (0,
                          o.jsx)(wn.Z, { children: (0, o.jsx)(iu, { walletConfig: n, login: t, onDismiss: c }) }, n.title);
                        }),
                        !f &&
                          (0, o.jsx)(ou, {
                            t: s,
                            onClick: function () {
                              return p(!0);
                            },
                          }),
                      ],
                    }),
                  }),
                  (0, o.jsxs)(wn.Z, {
                    p: "24px",
                    children: [
                      (0, o.jsx)(H.Z, {
                        textAlign: "center",
                        color: "textSubtle",
                        as: "p",
                        mb: "16px",
                        children: s("Haven’t got a crypto wallet yet?"),
                      }),
                      (0, o.jsx)(
                        en.Z,
                        uu(
                          {
                            as: "a",
                            href: "https://docs.pancakeswap.finance/get-started/connection-guide",
                            variant: "subtle",
                            width: "100%",
                          },
                          (0, Qc.Z)(),
                          { children: s("Learn How to Connect") }
                        )
                      ),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function pu(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function mu(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return pu(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? pu(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var hu = t(18424),
        yu = t(18027);
      function bu(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      var vu = function (n) {
        var e = n.children,
          t = (function (n, e) {
            if (null == n) return {};
            var t,
              r,
              o = (function (n, e) {
                if (null == n) return {};
                var t,
                  r,
                  o = {},
                  i = Object.keys(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                return o;
              })(n, e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(n);
              for (r = 0; r < i.length; r++)
                (t = i[r]),
                  e.indexOf(t) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(n, t) &&
                      (o[t] = n[t]));
            }
            return o;
          })(n, ["children"]),
          r = (0, Bn.$G)().t,
          i = (0, hu.Z)(),
          a = i.login,
          c =
            (i.logout,
            (function (n, e, t) {
              return {
                onPresentConnectModal: mu(
                  (0, q.Z)((0, o.jsx)(fu, { login: n, t: t })),
                  1
                )[0],
              };
            })(a, 0, r).onPresentConnectModal);
        return (0, o.jsx)(
          en.Z,
          (function (n) {
            for (var e = 1; e < arguments.length; e++) {
              var t = null != arguments[e] ? arguments[e] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(t).filter(function (n) {
                    return Object.getOwnPropertyDescriptor(t, n).enumerable;
                  })
                )),
                r.forEach(function (e) {
                  bu(n, e, t[e]);
                });
            }
            return n;
          })
          
        );
      };
      
      function xu(n) {
        return (0, o.jsx)(Y.Z, {
          flexDirection: "column",
          children: n.map(function (n) {
            return (0, o.jsx)(Yc, { tx: n }, n.hash + n.addedTime);
          }),
        });
      }
      var gu = function (n) {
        var e = n.onDismiss,
          t = (0, In.Z)(),
          r = t.account,
          a = t.chainId,
          c = (0, Be.TL)(),
          u = Wc(),
          l = (0, Bn.$G)().t,
          s = Cr()(Object.values(u).filter($c), "addedTime", "desc"),
          d = s.filter(function (n) {
            return !n.receipt;
          }),
          f = s.filter(function (n) {
            return n.receipt;
          }),
          p = (0, i.useCallback)(
            function () {
              a && c((0, Rc.fY)({ chainId: a }));
            },
            [c, a]
          );
        return (0, o.jsx)(Un.Z, {
          title: l("Recent Transactions"),
          headerBackground: "gradients.cardHeader",
          onDismiss: e,
          children: r
            ? (0, o.jsx)(Zr.fe, {
                children:
                  d.length || f.length
                    ? (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsxs)(qn, {
                            mb: "1rem",
                            style: { justifyContent: "space-between" },
                            children: [
                              (0, o.jsx)(H.Z, {
                                children: l("Recent Transactions"),
                              }),
                              (0, o.jsx)(en.Z, {
                                variant: "tertiary",
                                scale: "xs",
                                onClick: p,
                                children: l("clear all"),
                              }),
                            ],
                          }),
                          xu(d),
                          xu(f),
                        ],
                      })
                    : (0, o.jsx)(H.Z, {
                        children: l("No recent transactions"),
                      }),
              })
            : (0, o.jsx)(vu, {}),
        });
      };
      function ju() {
        var n,
          e,
          t =
            ((n = [
              "\n  align-items: center;\n  justify-content: space-between;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ",
              ";\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (ju = function () {
            return t;
          }),
          t
        );
      }
      (0, a.ZP)(Y.Z).withConfig({ componentId: "sc-5e85f46f-0" })(
        ju(),
        function (n) {
          return n.theme.colors.cardBorder;
        }
      );
      var wu = t(5926);
      function Ou() {
        var n,
          e,
          t =
            ((n = [
              "\n  // border-radius: 1rem;\n  max-width: 800px;\n  width: 100%;\n  height: 100vh;\n  z-index: 1;\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Ou = function () {
            return t;
          }),
          t
        );
      }
      var Cu = (0, a.ZP)(wu.Z).withConfig({ componentId: "sc-9b3a18cd-0" })(
        Ou()
      );
      function ku(n) {
        var e = n.children;
        return (0, o.jsx)(Cu, { children: e });
      }
      var Iu = t(21046),
        Tu = t(40802),
        Pu = function (n) {
          console.error(n);
        },
        Su = t(27361),
        Zu = t.n(Su);
      function Au(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function Eu(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function Nu(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Mu(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })
            )),
            r.forEach(function (e) {
              Nu(n, e, t[e]);
            });
        }
        return n;
      }
      function Lu(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return Au(n);
          })(n) ||
          (function (n) {
            if (
              ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n["@@iterator"]
            )
              return Array.from(n);
          })(n) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return Au(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Au(n, e)
                  : void 0
              );
            }
          })(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Du() {
        var n = (0, Tn.Fh)();
        return {
          callWithGasPrice: (0, i.useCallback)(
            (function () {
              var e,
                t =
                  ((e = mi().mark(function e(t, r) {
                    var o,
                      i,
                      a,
                      c,
                      u,
                      l,
                      s = arguments;
                    return mi().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (o = s.length > 2 && void 0 !== s[2] ? s[2] : []),
                              (i =
                                s.length > 3 && void 0 !== s[3] ? s[3] : null),
                              Tu.n_({
                                type: "Transaction",
                                message: "Call with gas price: ".concat(n),
                                data: {
                                  contractAddress: t.address,
                                  methodName: r,
                                  methodArgs: o,
                                  overrides: i,
                                },
                              }),
                              (a = Zu()(t, r)),
                              (c = null == i ? void 0 : i.gasPrice),
                              (e.next = 6),
                              a.apply(
                                void 0,
                                Lu(o).concat([
                                  c ? Mu({}, i) : Mu({}, i, { gasPrice: n }),
                                ])
                              )
                            );
                          case 6:
                            return (
                              (u = e.sent) &&
                                Tu.n_({
                                  type: "Transaction",
                                  message: "Transaction sent: ".concat(u.hash),
                                  data: {
                                    hash: u.hash,
                                    from: u.from,
                                    gasLimit:
                                      null === (l = u.gasLimit) || void 0 === l
                                        ? void 0
                                        : l.toString(),
                                    nonce: u.nonce,
                                  },
                                }),
                              e.abrupt("return", u)
                            );
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })),
                  function () {
                    var n = this,
                      t = arguments;
                    return new Promise(function (r, o) {
                      var i = e.apply(n, t);
                      function a(n) {
                        Eu(i, r, o, a, c, "next", n);
                      }
                      function c(n) {
                        Eu(i, r, o, a, c, "throw", n);
                      }
                      a(void 0);
                    });
                  });
              return function (n, e) {
                return t.apply(this, arguments);
              };
            })(),
            [n]
          ),
        };
      }
      var Uu,
        zu = t(85426);
      function Bu(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function Ru(n, e) {
        var t,
          r,
          o,
          a = (0, ze.Ge)().account,
          u = Du().callWithGasPrice,
          l = (0, Bn.$G)().t,
          s = (0, zu.Z)().toastError,
          d =
            ((t = n),
            (
              null != (r = c.dt) &&
              "undefined" != typeof Symbol &&
              r[Symbol.hasInstance]
                ? r[Symbol.hasInstance](t)
                : t instanceof r
            )
              ? n.token
              : void 0),
          f = (function (n, e, t) {
            var r = (0, wr.Ib)(null == n ? void 0 : n.address, !1),
              o = (0, i.useMemo)(
                function () {
                  return [e, t];
                },
                [e, t]
              ),
              a = (0, kr.Wk)(r, "allowance", o).result;
            return (0, i.useMemo)(
              function () {
                return n && a ? new c.dt(n, a.toString()) : void 0;
              },
              [n, a]
            );
          })(d, null != a ? a : void 0, e),
          p = (function (n, e) {
            var t = Wc();
            return (0, i.useMemo)(
              function () {
                return (
                  "string" == typeof n &&
                  "string" == typeof e &&
                  Object.keys(t).some(function (r) {
                    var o = t[r];
                    if (!o) return !1;
                    if (o.receipt) return !1;
                    var i = o.approval;
                    return (
                      !!i && i.spender === e && i.tokenAddress === n && $c(o)
                    );
                  })
                );
              },
              [t, e, n]
            );
          })(null == d ? void 0 : d.address, e),
          m = (0, i.useMemo)(
            function () {
              return n && e
                ? n.currency === c.c0
                  ? Uu.APPROVED
                  : f
                  ? f.lessThan(n)
                    ? p
                      ? Uu.PENDING
                      : Uu.NOT_APPROVED
                    : Uu.APPROVED
                  : Uu.UNKNOWN
                : Uu.UNKNOWN;
            },
            [n, f, p, e]
          ),
          h = (0, wr.Ib)(null == d ? void 0 : d.address),
          y = Fc(),
          b = (0, i.useCallback)(
            ((o = mi().mark(function t() {
              var r, o;
              return mi().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      if (m === Uu.NOT_APPROVED) {
                        t.next = 4;
                        break;
                      }
                      return (
                        s(l("Error"), l("Approve was called unnecessarily")),
                        console.error("approve was called unnecessarily"),
                        t.abrupt("return")
                      );
                    case 4:
                      if (d) {
                        t.next = 8;
                        break;
                      }
                      return (
                        s(l("Error"), l("No token")),
                        console.error("no token"),
                        t.abrupt("return")
                      );
                    case 8:
                      if (h) {
                        t.next = 12;
                        break;
                      }
                      return (
                        s(
                          l("Error"),
                          l(
                            "Cannot find contract of the token %tokenAddress%",
                            { tokenAddress: null == d ? void 0 : d.address }
                          )
                        ),
                        console.error("tokenContract is null"),
                        t.abrupt("return")
                      );
                    case 12:
                      if (n) {
                        t.next = 16;
                        break;
                      }
                      return (
                        s(l("Error"), l("Missing amount to approve")),
                        console.error("missing amount to approve"),
                        t.abrupt("return")
                      );
                    case 16:
                      if (e) {
                        t.next = 20;
                        break;
                      }
                      return (
                        s(l("Error"), l("No spender")),
                        console.error("no spender"),
                        t.abrupt("return")
                      );
                    case 20:
                      return (
                        (r = !1),
                        (t.next = 23),
                        h.estimateGas.approve(e, Iu.Bz).catch(function () {
                          return (
                            (r = !0), h.estimateGas.approve(e, n.raw.toString())
                          );
                        })
                      );
                    case 23:
                      return (
                        (o = t.sent),
                        t.abrupt(
                          "return",
                          u(h, "approve", [e, r ? n.raw.toString() : Iu.Bz], {
                            gasLimit: (0, D.yC)(o),
                          })
                            .then(function (t) {
                              y(t, {
                                summary: "Approve ".concat(n.currency.symbol),
                                approval: {
                                  tokenAddress: d.address,
                                  spender: e,
                                },
                                type: "approve",
                              });
                            })
                            .catch(function (n) {
                              throw (
                                (Pu(n),
                                console.error("Failed to approve token", n),
                                4001 !== (null == n ? void 0 : n.code) &&
                                  s(l("Error"), n.message),
                                n)
                              );
                            })
                        )
                      );
                    case 25:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })),
            function () {
              var n = this,
                e = arguments;
              return new Promise(function (t, r) {
                var i = o.apply(n, e);
                function a(n) {
                  Bu(i, t, r, a, c, "next", n);
                }
                function c(n) {
                  Bu(i, t, r, a, c, "throw", n);
                }
                a(void 0);
              });
            }),
            [m, d, h, n, e, y, u, l, s]
          );
        return [m, b];
      }
      t(55855),
        (function (n) {
          (n[(n.UNKNOWN = 0)] = "UNKNOWN"),
            (n[(n.NOT_APPROVED = 1)] = "NOT_APPROVED"),
            (n[(n.PENDING = 2)] = "PENDING"),
            (n[(n.APPROVED = 3)] = "APPROVED");
        })(Uu || (Uu = {}));
      var Fu,
        Wu = t(95223);
      function $u(n) {
        return /^0x0*$/.test(n);
      }
      function Hu() {
        var n = (0, Ni.v9)(function (n) {
            return n.user.userDeadline;
          }),
          e = (function () {
            var n,
              e,
              t = (0, wr.gq)();
            return null === (n = (0, kr.Wk)(t, "getCurrentBlockTimestamp")) ||
              void 0 === n ||
              null === (e = n.result) ||
              void 0 === e
              ? void 0
              : e[0];
          })();
        return (0, i.useMemo)(
          function () {
            if (e && n) return e.add(n);
          },
          [e, n]
        );
      }
      function Gu(n) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : Wu.gv,
          t = arguments.length > 2 ? arguments[2] : void 0,
          r = (0, In.Z)(),
          o = r.account,
          a = r.chainId,
          u = r.library,
          l = null === t ? o : t,
          s = Hu();
        return (0, i.useMemo)(
          function () {
            if (!(n && l && u && o && a && s)) return [];
            var t = B(0, u, o);
            if (!t) return [];
            var r = [];
            return (
              r.push(
                c.F0.swapCallParameters(n, {
                  feeOnTransfer: !1,
                  allowedSlippage: new c.gG(c.QA.BigInt(e), O),
                  recipient: l,
                  deadline: s.toNumber(),
                })
              ),
              n.tradeType === c.YL.EXACT_INPUT &&
                r.push(
                  c.F0.swapCallParameters(n, {
                    feeOnTransfer: !0,
                    allowedSlippage: new c.gG(c.QA.BigInt(e), O),
                    recipient: l,
                    deadline: s.toNumber(),
                  })
                ),
              r.map(function (n) {
                return { parameters: n, contract: t };
              })
            );
          },
          [o, e, a, s, u, l, n]
        );
      }
      function Vu(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function _u(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function qu(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(e, t);
            function a(n) {
              _u(i, r, o, a, c, "next", n);
            }
            function c(n) {
              _u(i, r, o, a, c, "throw", n);
            }
            a(void 0);
          });
        };
      }
      function Yu(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Qu(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })
            )),
            r.forEach(function (e) {
              Yu(n, e, t[e]);
            });
        }
        return n;
      }
      function Ku(n) {
        return (
          (function (n) {
            if (Array.isArray(n)) return Vu(n);
          })(n) ||
          (function (n) {
            if (
              ("undefined" != typeof Symbol && null != n[Symbol.iterator]) ||
              null != n["@@iterator"]
            )
              return Array.from(n);
          })(n) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return Vu(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Vu(n, e)
                  : void 0
              );
            }
          })(n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ju(n, e) {
        for (var t; n; ) {
          var r, o, i, a, c, u;
          (t =
            null !==
              (c =
                null !==
                  (a =
                    null !== (i = n.reason) && void 0 !== i
                      ? i
                      : null === (r = n.data) || void 0 === r
                      ? void 0
                      : r.message) && void 0 !== a
                  ? a
                  : n.message) && void 0 !== c
              ? c
              : t),
            (n =
              null !== (u = n.error) && void 0 !== u
                ? u
                : null === (o = n.data) || void 0 === o
                ? void 0
                : o.originalError);
        }
        switch (
          (0 === (null == t ? void 0 : t.indexOf("execution reverted: ")) &&
            (t = t.substring("execution reverted: ".length)),
          t)
        ) {
          case "PancakeRouter: EXPIRED":
            return e(
              "The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low."
            );
          case "PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":
          case "PancakeRouter: EXCESSIVE_INPUT_AMOUNT":
            return e(
              "This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance."
            );
          case "TransferHelper: TRANSFER_FROM_FAILED":
            return e(
              "The input token cannot be transferred. There may be an issue with the input token."
            );
          case "Pancake: TRANSFER_FAILED":
            return e(
              "The output token cannot be transferred. There may be an issue with the output token."
            );
          default:
            return -1 !==
              (null == t ? void 0 : t.indexOf("undefined is not an object"))
              ? (console.error(n, t),
                e(
                  "An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading."
                ))
              : e(
                  "Unknown error%reason%. Try increasing your slippage tolerance.",
                  { reason: t ? ': "'.concat(t, '"') : "" }
                );
        }
      }
      !(function (n) {
        (n[(n.INVALID = 0)] = "INVALID"),
          (n[(n.LOADING = 1)] = "LOADING"),
          (n[(n.VALID = 2)] = "VALID");
      })(Fu || (Fu = {}));
      var Xu,
        nl = t(61744),
        el = function (n, e) {
          var t, r;
          if (n && e)
            try {
              var o = (0, nl.vz)(n, e.decimals).toString();
              if ("0" !== o)
                return (
                  (t = e),
                  (
                    null != (r = c.WU) &&
                    "undefined" != typeof Symbol &&
                    r[Symbol.hasInstance]
                      ? r[Symbol.hasInstance](t)
                      : t instanceof r
                  )
                    ? new c.dt(e, c.QA.BigInt(o))
                    : c.ih.ether(c.QA.BigInt(o))
                );
            } catch (e) {
              console.debug(
                'Failed to parse input amount: "'.concat(n, '"'),
                e
              );
            }
        };
      function tl(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function rl(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(e, t);
            function a(n) {
              tl(i, r, o, a, c, "next", n);
            }
            function c(n) {
              tl(i, r, o, a, c, "throw", n);
            }
            a(void 0);
          });
        };
      }
      !(function (n) {
        (n[(n.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"),
          (n[(n.WRAP = 1)] = "WRAP"),
          (n[(n.UNWRAP = 2)] = "UNWRAP");
      })(Xu || (Xu = {}));
      var ol = { wrapType: Xu.NOT_APPLICABLE };
      t(49770);
      var il = t(28687),
        al = t(4034),
        cl = t(34155),
        ul = function (n) {
          if (n === al.JY)
            return { "X-Sf": cl.env.NEXT_PUBLIC_SF_HEADER || window.sfHeader };
        },
        ll = new il.GraphQLClient(al.JY, { headers: ul(al.JY) }),
        sl =
          (new il.GraphQLClient(al.JY, {
            headers: { "X-Sf": cl.env.SF_HEADER },
            timeout: 5e3,
          }),
          new il.GraphQLClient("https://graphql.bitquery.io", {
            headers: { "X-API-KEY": cl.env.BIT_QUERY_HEADER },
            timeout: 5e3,
          }),
          function (n, e, t) {
            var r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 3e4;
            return Promise.race([
              t ? n.request(e, t) : n.request(e),
              new Promise(function (n, e) {
                setTimeout(function () {
                  e(
                    new Error(
                      "Request timed out after ".concat(r, " milliseconds")
                    )
                  );
                }, r);
              }),
            ]);
          });
      function dl(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function fl(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function pl(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (n) {
                return Object.getOwnPropertyDescriptor(t, n).enumerable;
              })
            )),
            r.forEach(function (e) {
              fl(n, e, t[e]);
            });
        }
        return n;
      }
      var ml = (function () {
        var n,
          e =
            ((n = mi().mark(function n(e, t, r) {
              var o,
                i,
                a,
                c,
                u,
                l,
                s,
                d,
                f = arguments;
              return mi().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        (o = f.length > 3 && void 0 !== f[3] ? f[3] : 1e3),
                          (i = {}),
                          (a = !1),
                          (c = 0),
                          (u = new il.GraphQLClient(r, { headers: ul(r) })),
                          (n.prev = 5);
                      case 6:
                        if (a) {
                          n.next = 18;
                          break;
                        }
                        return (
                          (l = t.length),
                          c + o < t.length && (l = c + o),
                          (s = t.slice(c, l)),
                          (n.next = 12),
                          sl(u, e(s))
                        );
                      case 12:
                        (d = n.sent),
                          (i = pl({}, i, d)),
                          (a = Object.keys(d).length < o || c + o > t.length),
                          (c += o),
                          (n.next = 6);
                        break;
                      case 18:
                        return n.abrupt("return", i);
                      case 21:
                        return (
                          (n.prev = 21),
                          (n.t0 = n.catch(5)),
                          console.error("Failed to fetch info data", n.t0),
                          n.abrupt("return", null)
                        );
                      case 25:
                      case "end":
                        return n.stop();
                    }
                },
                n,
                null,
                [[5, 21]]
              );
            })),
            function () {
              var e = this,
                t = arguments;
              return new Promise(function (r, o) {
                var i = n.apply(e, t);
                function a(n) {
                  dl(i, r, o, a, c, "next", n);
                }
                function c(n) {
                  dl(i, r, o, a, c, "throw", n);
                }
                a(void 0);
              });
            });
        return function (n, t, r) {
          return e.apply(this, arguments);
        };
      })();
      function hl(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function yl() {
        var n,
          e,
          t =
            ((n = ["query blocks {\n    ", "\n  }"]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (yl = function () {
            return t;
          }),
          t
        );
      }
      var bl = function (n) {
          return n.map(function (n) {
            return "t"
              .concat(
                n,
                ":blocks(first: 1, orderBy: timestamp, orderDirection: desc, where: { timestamp_gt: "
              )
              .concat(n, ", timestamp_lt: ")
              .concat(n + 600, " }) {\n      number\n    }");
          });
        },
        vl = function (n) {
          return (0, il.gql)(yl(), n);
        },
        xl = (function () {
          var n,
            e =
              ((n = mi().mark(function n(e) {
                var t,
                  r,
                  o,
                  i,
                  a,
                  c,
                  u,
                  l,
                  s,
                  d,
                  f = arguments;
                return mi().wrap(
                  function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            ((t =
                              f.length > 1 && void 0 !== f[1] ? f[1] : "desc"),
                            (r = f.length > 2 && void 0 !== f[2] ? f[2] : 500),
                            0 !== (null == e ? void 0 : e.length))
                          ) {
                            n.next = 3;
                            break;
                          }
                          return n.abrupt("return", []);
                        case 3:
                          return (n.next = 5), ml(vl, bl(e), al.I0, r);
                        case 5:
                          if (((o = n.sent), (i = []), !o)) {
                            n.next = 26;
                            break;
                          }
                          for (
                            a = !0,
                              c = !1,
                              u = void 0,
                              n.prev = 9,
                              l = Object.keys(o)[Symbol.iterator]();
                            !(a = (s = l.next()).done);
                            a = !0
                          )
                            (d = s.value),
                              o[d].length > 0 &&
                                i.push({
                                  timestamp: d.split("t")[1],
                                  number: parseInt(o[d][0].number, 10),
                                });
                          n.next = 17;
                          break;
                        case 13:
                          (n.prev = 13),
                            (n.t0 = n.catch(9)),
                            (c = !0),
                            (u = n.t0);
                        case 17:
                          (n.prev = 17),
                            (n.prev = 18),
                            a || null == l.return || l.return();
                        case 20:
                          if (((n.prev = 20), !c)) {
                            n.next = 23;
                            break;
                          }
                          throw u;
                        case 23:
                          return n.finish(20);
                        case 24:
                          return n.finish(17);
                        case 25:
                          return n.abrupt(
                            "return",
                            Cr()(
                              i,
                              function (n) {
                                return n.number;
                              },
                              t
                            )
                          );
                        case 26:
                          return n.abrupt("return", i);
                        case 27:
                        case "end":
                          return n.stop();
                      }
                  },
                  n,
                  null,
                  [
                    [9, 13, 17, 25],
                    [18, , 20, 24],
                  ]
                );
              })),
              function () {
                var e = this,
                  t = arguments;
                return new Promise(function (r, o) {
                  var i = n.apply(e, t);
                  function a(n) {
                    hl(i, r, o, a, c, "next", n);
                  }
                  function c(n) {
                    hl(i, r, o, a, c, "throw", n);
                  }
                  a(void 0);
                });
              });
          return function (n) {
            return e.apply(this, arguments);
          };
        })(),
        gl = function (n) {
          if (!n) return "";
          var e = n.toLowerCase();
          return "bnb" === e ? "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c" : e;
        };
      function jl() {
        var n,
          e,
          t =
            ((n = [
              "\n  query lastPairDayId($pairId: String) {\n    pairDayDatas(first: 1, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n    }\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (jl = function () {
            return t;
          }),
          t
        );
      }
      var wl = (0, il.gql)(jl());
      function Ol() {
        var n,
          e,
          t =
            ((n = [
              "\n  query pairHourDatas($pairId: String, $first: Int) {\n    pairHourDatas(first: $first, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Ol = function () {
            return t;
          }),
          t
        );
      }
      var Cl = (0, il.gql)(Ol());
      function kl() {
        var n,
          e,
          t =
            ((n = [
              "\n  query pairDayDatasByIdsQuery($pairIds: [String]) {\n    pairDayDatas(where: { id_in: $pairIds }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n      pairAddress {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (kl = function () {
            return t;
          }),
          t
        );
      }
      var Il,
        Tl,
        Pl = (0, il.gql)(kl());
      function Sl(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      !(function (n) {
        (n[(n.DAY = 0)] = "DAY"),
          (n[(n.WEEK = 1)] = "WEEK"),
          (n[(n.MONTH = 2)] = "MONTH"),
          (n[(n.YEAR = 3)] = "YEAR");
      })(Il || (Il = {}));
      var Zl,
        Al =
          (Sl((Tl = {}), Il.DAY, 24),
          Sl(Tl, Il.WEEK, 28),
          Sl(Tl, Il.MONTH, 30),
          Sl(Tl, Il.YEAR, 24),
          Tl),
        El =
          (Sl((Zl = {}), Il.DAY, null),
          Sl(Zl, Il.WEEK, 6),
          Sl(Zl, Il.MONTH, 1),
          Sl(Zl, Il.YEAR, 15),
          Zl),
        Nl = t(98913),
        Ml = t.n(Nl),
        Ll = function (n) {
          var e = n.id,
            t = n.pairId;
          return e.replace("".concat(t, "-"), "");
        },
        Dl = function (n) {
          var e = n.pairAddress,
            t = n.pairLastId,
            r = n.timeWindow,
            o = n.idsCount,
            i = Number(t);
          return r === Il.DAY
            ? []
            : Ml()(o, function (n) {
                return "".concat(e, "-").concat(i - n * El[r]);
              });
        };
      function Ul() {
        var n,
          e,
          t =
            ((n = [
              "\n  query pairDayDatas($pairId: String, $first: Int) {\n    pairDayDatas(first: $first, where: { pairAddress: $pairId }, orderBy: date, orderDirection: desc) {\n      id\n      date\n      reserve0\n      reserve1\n      reserveUSD\n      pairAddress {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Ul = function () {
            return t;
          }),
          t
        );
      }
      var zl = (0, il.gql)(Ul());
      function Bl() {
        var n,
          e,
          t =
            ((n = [
              "\n  query pairHourDatasByIds($pairIds: [String]) {\n    pairHourDatas(where: { id_in: $pairIds }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n      hourStartUnix\n      reserve0\n      reserve1\n      reserveUSD\n      pair {\n        token0 {\n          id\n        }\n        token1 {\n          id\n        }\n      }\n    }\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Bl = function () {
            return t;
          }),
          t
        );
      }
      var Rl = (0, il.gql)(Bl());
      function Fl() {
        var n,
          e,
          t =
            ((n = [
              "\n  query lastPairHourId($pairId: String) {\n    pairHourDatas(first: 1, where: { pair: $pairId }, orderBy: hourStartUnix, orderDirection: desc) {\n      id\n    }\n  }\n",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Fl = function () {
            return t;
          }),
          t
        );
      }
      var Wl = (0, il.gql)(Fl());
      !(function () {
        var n;
        n = mi().mark(function n(e) {
          var t, r, o, i, a, c, u, l, s, d, f, p, m, h, y, b, v;
          return mi().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    (t = e.pairId),
                      (r = e.timeWindow),
                      (o = ll),
                      (n.prev = 2),
                      (n.t0 = r),
                      (n.next =
                        n.t0 === Il.DAY
                          ? 6
                          : n.t0 === Il.WEEK
                          ? 10
                          : n.t0 === Il.MONTH
                          ? 23
                          : n.t0 === Il.YEAR
                          ? 27
                          : 40);
                    break;
                  case 6:
                    return (n.next = 8), sl(o, Cl, { pairId: t, first: Al[r] });
                  case 8:
                    return (
                      (i = n.sent), n.abrupt("return", { data: i, error: !1 })
                    );
                  case 10:
                    return (n.next = 13), sl(o, Wl, { pairId: t });
                  case 13:
                    if (
                      ((c = n.sent),
                      (u = (null == c ? void 0 : c.pairHourDatas)
                        ? null === (a = c.pairHourDatas[0]) || void 0 === a
                          ? void 0
                          : a.id
                        : null))
                    ) {
                      n.next = 17;
                      break;
                    }
                    return n.abrupt("return", {
                      data: { pairHourDatas: [] },
                      error: !1,
                    });
                  case 17:
                    return (
                      (l = Ll({ id: u, pairId: t })),
                      (s = Dl({
                        pairAddress: t,
                        pairLastId: l,
                        timeWindow: r,
                        idsCount: Al[r],
                      })),
                      (n.next = 21),
                      sl(o, Rl, { pairIds: s })
                    );
                  case 21:
                    return (
                      (d = n.sent), n.abrupt("return", { data: d, error: !1 })
                    );
                  case 23:
                    return (
                      (n.next = 25), sl(o, zl, { pairId: t, first: Al[r] })
                    );
                  case 25:
                    return (
                      (f = n.sent), n.abrupt("return", { data: f, error: !1 })
                    );
                  case 27:
                    return (n.next = 30), sl(o, wl, { pairId: t });
                  case 30:
                    if (
                      ((m = n.sent),
                      (h = (null == m ? void 0 : m.pairDayDatas)
                        ? null === (p = m.pairDayDatas[0]) || void 0 === p
                          ? void 0
                          : p.id
                        : null))
                    ) {
                      n.next = 34;
                      break;
                    }
                    return n.abrupt("return", {
                      data: { pairDayDatas: [] },
                      error: !1,
                    });
                  case 34:
                    return (
                      (y = Ll({ id: h, pairId: t })),
                      (b = Dl({
                        pairAddress: t,
                        pairLastId: y,
                        timeWindow: r,
                        idsCount: Al[r],
                      })),
                      (n.next = 38),
                      sl(o, Pl, { pairIds: b })
                    );
                  case 38:
                    return (
                      (v = n.sent), n.abrupt("return", { data: v, error: !1 })
                    );
                  case 40:
                    return n.abrupt("return", { data: null, error: !1 });
                  case 41:
                    n.next = 47;
                    break;
                  case 43:
                    return (
                      (n.prev = 43),
                      (n.t1 = n.catch(2)),
                      console.error("Failed to fetch price chart data", n.t1),
                      n.abrupt("return", { error: !0 })
                    );
                  case 47:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[2, 43]]
          );
        });
      })();
      var $l = t(28401),
        Hl = t(12383),
        Gl = t(42569);
      function Vl() {
        var n,
          e,
          t =
            ((n = [
              "\n      query derivedTokenPriceData {\n        ",
              "\n      }\n    ",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Vl = function () {
            return t;
          }),
          t
        );
      }
      var _l = function (n, e) {
          return e.map(function (e) {
            return "\n    t"
              .concat(e.timestamp, ':token(id:"')
              .concat(n, '", block: { number: ')
              .concat(e.number, " }) { \n        derivedBNB\n      }\n    ");
          });
        },
        ql = function (n) {
          return (0, il.gql)(Vl(), n);
        };
      function Yl(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function Ql(n, e, t, r, o, i, a) {
        try {
          var c = n[i](a),
            u = c.value;
        } catch (n) {
          return void t(n);
        }
        c.done ? e(u) : Promise.resolve(u).then(r, o);
      }
      function Kl(n) {
        return function () {
          var e = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = n.apply(e, t);
            function a(n) {
              Ql(i, r, o, a, c, "next", n);
            }
            function c(n) {
              Ql(i, r, o, a, c, "throw", n);
            }
            a(void 0);
          });
        };
      }
      function Jl(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return Yl(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Yl(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      var Xl = (function () {
          var n = Kl(
            mi().mark(function n(e, t) {
              var r, o;
              return mi().wrap(function (n) {
                for (;;)
                  switch ((n.prev = n.next)) {
                    case 0:
                      return (n.next = 2), ml(ql, _l(e, t), al.JY, 200);
                    case 2:
                      if ((r = n.sent)) {
                        n.next = 6;
                        break;
                      }
                      return (
                        console.error("Price data failed to load"),
                        n.abrupt("return", null)
                      );
                    case 6:
                      return (
                        (o = []),
                        Object.keys(r).forEach(function (n) {
                          var t,
                            i = n.split("t")[1];
                          i &&
                            o.push({
                              tokenAddress: e,
                              timestamp: i,
                              derivedBNB: (
                                null === (t = r[n]) || void 0 === t
                                  ? void 0
                                  : t.derivedBNB
                              )
                                ? parseFloat(r[n].derivedBNB)
                                : 0,
                            });
                        }),
                        n.abrupt(
                          "return",
                          Cr()(o, function (n) {
                            return parseInt(n.timestamp, 10);
                          })
                        )
                      );
                    case 9:
                    case "end":
                      return n.stop();
                  }
              }, n);
            })
          );
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })(),
        ns = function (n) {
          switch (n) {
            case Il.DAY:
              return 3600;
            case Il.WEEK:
              return 14400;
            case Il.MONTH:
              return 86400;
            case Il.YEAR:
              return 1296e3;
            default:
              return 14400;
          }
        },
        es = function (n) {
          switch (n) {
            case Il.DAY:
              return 1;
            case Il.WEEK:
              return 7;
            case Il.MONTH:
              return 30;
            case Il.YEAR:
              return 365;
            default:
              return 7;
          }
        };
      function ts() {
        var n,
          e,
          t =
            ((n = [
              "\n      query pools {\n        now: ",
              "\n        oneDayAgo: ",
              "\n        twoDaysAgo: ",
              "\n        oneWeekAgo: ",
              "\n        twoWeeksAgo: ",
              "\n      }\n    ",
            ]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (ts = function () {
            return t;
          }),
          t
        );
      }
      Kl(
        mi().mark(function n(e, t, r) {
          var o, i, a, c, u, l, s, d, f;
          return mi().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    for (
                      o = ns(r),
                        i = (0, $l.Z)(new Date()),
                        a = (0, $l.Z)(
                          (0, Hl.Z)((0, Gl.Z)(1e3 * i, { days: es(r) }))
                        ),
                        c = [],
                        u = a;
                      u <= i;

                    )
                      c.push(u), (u += o);
                    return (n.prev = 6), (n.next = 9), xl(c, "asc", 500);
                  case 9:
                    if ((l = n.sent) && 0 !== l.length) {
                      n.next = 13;
                      break;
                    }
                    return (
                      console.error("Error fetching blocks for timestamps", c),
                      n.abrupt("return", null)
                    );
                  case 13:
                    return (
                      (n.t0 = Jl),
                      (n.next = 16),
                      Promise.all([Xl(e, l), Xl(t, l)])
                    );
                  case 16:
                    return (
                      (n.t1 = n.sent),
                      (s = (0, n.t0)(n.t1, 2)),
                      (d = s[0]),
                      (f = s[1]),
                      n.abrupt("return", {
                        token0DerivedBnb: d,
                        token1DerivedBnb: f,
                      })
                    );
                  case 23:
                    return (
                      (n.prev = 23),
                      (n.t2 = n.catch(6)),
                      console.error(
                        "Failed to fetched derived price data for chart",
                        n.t2
                      ),
                      n.abrupt("return", null)
                    );
                  case 27:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[6, 23]]
          );
        })
      );
      var rs = function (n, e) {
        var t = n ? "block: {number: ".concat(n, "}") : "",
          r = '["'.concat(e.join('","'), '"]');
        return "pairs(\n    where: { id_in: "
          .concat(r, " }\n    ")
          .concat(
            t,
            "\n    orderBy: trackedReserveBNB\n    orderDirection: desc\n  ) {\n    id\n    reserve0\n    reserve1\n    reserveUSD\n    volumeUSD\n    token0Price\n    token1Price\n    token0 {\n      id\n      symbol\n      name\n    }\n    token1 {\n      id\n      symbol\n      name\n    }\n  }"
          );
      };
      function os(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function is(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function as(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return os(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? os(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      mi().mark(function n(e, t, r, o, i) {
        var a, c;
        return mi().wrap(
          function (n) {
            for (;;)
              switch ((n.prev = n.next)) {
                case 0:
                  return (
                    (n.prev = 0),
                    (a = (0, il.gql)(
                      ts(),
                      rs(null, i),
                      rs(e, i),
                      rs(t, i),
                      rs(r, i),
                      rs(o, i)
                    )),
                    (n.next = 4),
                    ll.request(a)
                  );
                case 4:
                  return (
                    (c = n.sent), n.abrupt("return", { data: c, error: !1 })
                  );
                case 8:
                  return (
                    (n.prev = 8),
                    (n.t0 = n.catch(0)),
                    console.error("Failed to fetch pool data", n.t0),
                    n.abrupt("return", { error: !0 })
                  );
                case 12:
                case "end":
                  return n.stop();
              }
          },
          n,
          null,
          [[0, 8]]
        );
      });
      var cs = [
        "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
        "0xf164fC0Ec4E93095b804a4795bBe1e041497b92a",
        "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D",
      ];
      function us(n, e) {
        return (
          n.route.path.some(function (n) {
            return n.address === e;
          }) ||
          n.route.pairs.some(function (n) {
            return n.liquidityToken.address === e;
          })
        );
      }
      function ls(n, e, t, r, o) {
        var a,
          u,
          l,
          s,
          d,
          f = (0, ze.Ge)().account,
          p = (0, Bn.$G)().t,
          m =
            null !== (a = null === o ? f : (0, D.UJ)(o) || null) && void 0 !== a
              ? a
              : null,
          h = Pr(null != f ? f : void 0, [
            null != t ? t : void 0,
            null != r ? r : void 0,
          ]),
          y = n === U.gN.INPUT,
          b = el(e, null !== (u = y ? t : r) && void 0 !== u ? u : void 0),
          v = Dn(y ? b : void 0, null != r ? r : void 0),
          x = (function (n, e) {
            var t = Ln(n, null == e ? void 0 : e.currency),
              r = En((0, Tn.RO)(), 1)[0];
            return (0, i.useMemo)(
              function () {
                if (n && e && t.length > 0) {
                  var o;
                  if (r)
                    return null !==
                      (o = c.ho.bestTradeExactOut(t, n, e, {
                        maxHops: 1,
                        maxNumResults: 1,
                      })[0]) && void 0 !== o
                      ? o
                      : null;
                  for (var i = null, a = 1; a <= 3; a++) {
                    var u,
                      l =
                        null !==
                          (u = c.ho.bestTradeExactOut(t, n, e, {
                            maxHops: a,
                            maxNumResults: 1,
                          })[0]) && void 0 !== u
                          ? u
                          : null;
                    On(i, l, A) && (i = l);
                  }
                  return i;
                }
                return null;
              },
              [n, e, t, r]
            );
          })(null != t ? t : void 0, y ? void 0 : b),
          g = y ? v : x,
          j = (is((l = {}), U.gN.INPUT, h[0]), is(l, U.gN.OUTPUT, h[1]), l),
          w =
            (is((s = {}), U.gN.INPUT, null != t ? t : void 0),
            is(s, U.gN.OUTPUT, null != r ? r : void 0),
            s);
        f || (d = p("Connect Wallet")),
          b || (d = null != d ? d : p("Enter an amount")),
          (w[U.gN.INPUT] && w[U.gN.OUTPUT]) ||
            (d = null != d ? d : p("Select a token"));
        var O = (0, D.UJ)(m);
        m && O
          ? (-1 !== cs.indexOf(O) || (v && us(v, O)) || (x && us(x, O))) &&
            (d = null != d ? d : p("Invalid recipient"))
          : (d = null != d ? d : p("Enter a recipient"));
        var C = as((0, Tn.$2)(), 1)[0],
          k = g && C && F(g, C),
          I = [j[U.gN.INPUT], k ? k[U.gN.INPUT] : null],
          T = I[0],
          P = I[1];
        return (
          T &&
            P &&
            T.lessThan(P) &&
            (d = p("Insufficient %symbol% balance", {
              symbol: P.currency.symbol,
            })),
          {
            currencies: w,
            currencyBalances: j,
            parsedAmount: b,
            v2Trade: null != g ? g : void 0,
            inputError: d,
          }
        );
      }
      function ss(n) {
        if ("string" == typeof n) {
          var e = (0, D.UJ)(n);
          if (e) return e;
          if ("BNB" === n.toUpperCase()) return "BNB";
          if (!1 === e) return "BNB";
        }
        return "";
      }
      var ds = /^0x[a-fA-F0-9]{40}$/;
      var fs = function () {
          var n = (0, Bn.$G)().t;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(H.Z, {
              children: [
                n("SAFEMOON has been migrated to"),
                " ",
                (0, o.jsx)(zn.Z, {
                  style: { display: "inline" },
                  external: !0,
                  href: "https://bscscan.com/address/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5",
                  children: n("a new contract address."),
                }),
                " ",
                n(
                  "Trading on the old address may result in the complete loss of your assets. For more information please refer to"
                ),
                " ",
                (0, o.jsxs)(zn.Z, {
                  style: { display: "inline" },
                  external: !0,
                  href: "https://twitter.com/safemoon/status/1477770592031887360",
                  children: [n("Safemoon's announcement"), "."],
                }),
              ],
            }),
          });
        },
        ps = function () {
          var n = (0, Bn.$G)().t;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(H.Z, {
              children: [
                n("ITAM has been rebranded as ITAM CUBE."),
                " ",
                (0, o.jsx)(zn.Z, {
                  style: { display: "inline" },
                  external: !0,
                  href: "https://itam.network/swap",
                  children: n(
                    "Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens."
                  ),
                }),
                " ",
                n(
                  "All transfers of the old ITAM token will be disabled after the swap."
                ),
              ],
            }),
          });
        },
        ms = function () {
          var n = (0, Bn.$G)().t;
          return (0, o.jsx)(H.Z, {
            children: n(
              "Warning: BONDLY has been compromised. Please remove liquidity until further notice."
            ),
          });
        },
        hs = function (n) {
          var e = n.handleContinueClick,
            t = (0, Bn.$G)().t,
            r = (0, i.useState)(!1),
            a = r[0],
            c = r[1];
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(Y.Z, {
              justifyContent: "space-between",
              children: [
                (0, o.jsxs)(Y.Z, {
                  alignItems: "center",
                  children: [
                    (0, o.jsx)(ti, {
                      name: "confirmed",
                      type: "checkbox",
                      checked: a,
                      onChange: function () {
                        return c(!a);
                      },
                      scale: "sm",
                    }),
                    (0, o.jsx)(H.Z, {
                      ml: "10px",
                      style: { userSelect: "none" },
                      children: t("I understand"),
                    }),
                  ],
                }),
                (0, o.jsx)(en.Z, {
                  disabled: !a,
                  onClick: e,
                  children: t("Continue"),
                }),
              ],
            }),
          });
        },
        ys = function () {
          var n = (0, Bn.$G)().t;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsxs)(H.Z, {
              children: [
                n("Crypto Cars (CCAR) has been migrated to"),
                " ",
                (0, o.jsx)(zn.Z, {
                  style: { display: "inline" },
                  external: !0,
                  href: "https://bscscan.com/token/0x322e5015Cc464Ada7f99dE7131CE494dE1834396",
                  children: n("a new contract address."),
                }),
                " ",
                n(
                  "Trading on the old address may result in the complete loss of your assets. For more information please refer to"
                ),
                " ",
                (0, o.jsx)(zn.Z, {
                  style: { display: "inline" },
                  external: !0,
                  href: "https://t.me/Crypto_Cars_Official/465037",
                  children: n("the announcement."),
                }),
              ],
            }),
          });
        },
        bs = function () {
          var n = (0, Bn.$G)().t;
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)(H.Z, {
                children: n(
                  "Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:"
                ),
              }),
              (0, o.jsx)(H.Z, { children: "1 BTT (OLD) = 1,000 BTT (NEW)" }),
              (0, o.jsxs)(H.Z, {
                mb: "8px",
                children: [
                  n("Trade the new BTT token"),
                  " ",
                  (0, o.jsx)(zn.Z, {
                    style: { display: "inline" },
                    href: "https://pancakeswap.finance/swap?outputCurrency=0x352Cb5E19b12FC216548a2677bD0fce83BaE434B",
                    children: n("here"),
                  }),
                ],
              }),
              (0, o.jsx)(hi.Z, {
                href: "https://medium.com/@BitTorrent/tutorial-how-to-swap-bttold-to-btt-453264d7142",
                children: n("For more details on the swap, please refer here."),
              }),
            ],
          });
        },
        vs = function () {
          var n = (0, Bn.$G)().t;
          return (0, o.jsx)(o.Fragment, {
            children: (0, o.jsx)(H.Z, {
              children: n("Suspicious rugpull token"),
            }),
          });
        };
      function xs(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function gs(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function js() {
        var n = gs(["\n  max-width: 440px;\n"]);
        return (
          (js = function () {
            return n;
          }),
          n
        );
      }
      function ws() {
        var n = gs([
          "\n  align-items: flex-start;\n  justify-content: flex-start;\n",
        ]);
        return (
          (ws = function () {
            return n;
          }),
          n
        );
      }
      var Os = (0, a.ZP)(Zr.F0).withConfig({ componentId: "sc-771ca0ed-0" })(
          js()
        ),
        Cs = (0, a.ZP)(Jo).withConfig({ componentId: "sc-771ca0ed-1" })(ws()),
        ks = function (n) {
          var e,
            t = n.swapCurrency,
            r = n.onDismiss,
            i = (0, Bn.$G)().t,
            a = ca().theme,
            c = (xs((e = {}), Le.safemoon.address, {
              symbol: Le.safemoon.symbol,
              component: (0, o.jsx)(fs, {}),
            }),
            xs(e, Le.bondly.address, {
              symbol: Le.bondly.symbol,
              component: (0, o.jsx)(ms, {}),
            }),
            xs(e, Le.itam.address, {
              symbol: Le.itam.symbol,
              component: (0, o.jsx)(ps, {}),
            }),
            xs(e, Le.ccar.address, {
              symbol: Le.ccar.symbol,
              component: (0, o.jsx)(ys, {}),
            }),
            xs(e, Le.bttold.address, {
              symbol: Le.bttold.symbol,
              component: (0, o.jsx)(bs, {}),
            }),
            xs(e, Le.pokemoney.address, {
              symbol: Le.pokemoney.symbol,
              component: (0, o.jsx)(vs, {}),
            }),
            e)[t.address];
          return (0, o.jsxs)(Os, {
            minWidth: "280px",
            children: [
              (0, o.jsx)(Zr.xB, {
                background: a.colors.gradients.cardHeader,
                children: (0, o.jsx)(Ar.Z, {
                  p: "12px 24px",
                  children: i("Notice for trading %symbol%", {
                    symbol: c.symbol,
                  }),
                }),
              }),
              (0, o.jsxs)(Zr.fe, {
                p: "24px",
                children: [
                  (0, o.jsx)(Cs, {
                    variant: "warning",
                    mb: "24px",
                    children: (0, o.jsx)(wn.Z, { children: c.component }),
                  }),
                  (0, o.jsx)(hs, { handleContinueClick: r }),
                ],
              }),
            ],
          });
        };
      function Is() {
        var n,
          e,
          t =
            ((n = ["\n  width: 100%;\n"]),
            e || (e = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
            ));
        return (
          (Is = function () {
            return t;
          }),
          t
        );
      }
      var Ts = (0, a.ZP)(wn.Z).withConfig({ componentId: "sc-5423eb0-0" })(
        Is()
      );
      function Ps(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Ss() {
        var n = Ps(["\n  display: inline-flex;\n  position: relative;\n"]);
        return (
          (Ss = function () {
            return n;
          }),
          n
        );
      }
      function Zs() {
        var n = Ps([
          "\n  display: ",
          ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ",
          ";\n  border-radius: 50%;\n  background-color: ",
          ";\n",
        ]);
        return (
          (Zs = function () {
            return n;
          }),
          n
        );
      }
      var As = a.ZP.span
          .withConfig({ componentId: "sc-903b7e77-0" })
          .withConfig({ componentId: "sc-c38c6186-0" })(Ss()),
        Es = a.ZP.span
          .withConfig({ componentId: "sc-903b7e77-1" })
          .withConfig({ componentId: "sc-c38c6186-1" })(
          Zs(),
          function (n) {
            return n.show ? "inline-flex" : "none";
          },
          function (n) {
            return n.theme.colors.invertedContrast;
          },
          function (n) {
            var e = n.theme,
              t = n.color;
            return e.colors[t];
          }
        ),
        Ns = function (n) {
          var e = n.show,
            t = void 0 !== e && e,
            r = n.color,
            a = void 0 === r ? "failure" : r,
            c = n.children,
            u = (function (n, e) {
              if (null == n) return {};
              var t,
                r,
                o = (function (n, e) {
                  if (null == n) return {};
                  var t,
                    r,
                    o = {},
                    i = Object.keys(n);
                  for (r = 0; r < i.length; r++)
                    (t = i[r]), e.indexOf(t) >= 0 || (o[t] = n[t]);
                  return o;
                })(n, e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(n);
                for (r = 0; r < i.length; r++)
                  (t = i[r]),
                    e.indexOf(t) >= 0 ||
                      (Object.prototype.propertyIsEnumerable.call(n, t) &&
                        (o[t] = n[t]));
              }
              return o;
            })(n, ["show", "color", "children"]);
          return (0, o.jsxs)(As, {
            children: [
              i.Children.map(c, function (n) {
                return (0, i.cloneElement)(n, u);
              }),
              (0, o.jsx)(Es, { show: t, color: a }),
            ],
          });
        };
      function Ms(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function Ls(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return Ms(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Ms(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Ds(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Us() {
        var n = Ds([
          "\n  flex-direction: column;\n  align-items: center;\n  padding: 24px;\n  width: 100%;\n  border-bottom: 1px solid ",
          ";\n",
        ]);
        return (
          (Us = function () {
            return n;
          }),
          n
        );
      }
      function zs() {
        var n = Ds(["\n  color: ", ";\n"]);
        return (
          (zs = function () {
            return n;
          }),
          n
        );
      }
      var Bs = (0, a.ZP)(Y.Z).withConfig({ componentId: "sc-2fcc0a78-0" })(
          Us(),
          function (n) {
            return n.theme.colors.cardBorder;
          }
        ),
        Rs =
          ((0, a.ZP)(G.Z).withConfig({ componentId: "sc-2fcc0a78-1" })(
            zs(),
            function (n) {
              return n.theme.colors.textSubtle;
            }
          ),
          function (n) {
            var e = n.title,
              t = (n.hasAmount, n.onRefreshPrice, Ls((0, Tn.DG)(), 1)[0]);
            return (
              Ls((0, q.Z)((0, o.jsx)(gu, {})), 1)[0],
              (0, o.jsx)(Bs, {
                children: (0, o.jsxs)(Y.Z, {
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  children: [
                    (0, o.jsx)(Y.Z, {
                      flexDirection: "column",
                      alignItems: "flex-between",
                      width: "100%",
                      mr: 18,
                      children: (0, o.jsx)(Ar.Z, { as: "h2", children: e }),
                    }),
                    (0, o.jsx)(Y.Z, {
                      children: (0, o.jsx)(Ns, {
                        show: t,
                        children: (0, o.jsx)(Bc, { color: "#2C2B4A", mr: "0" }),
                      }),
                    }),
                  ],
                }),
              })
            );
          }),
        Fs = function (n) {
          var e = n.tokens,
            t = n.onDismiss,
            r = n.onCancel,
            i = (0, Bn.$G)().t;
          return (0, o.jsx)(Un.Z, {
            title: i("Import Token"),
            onDismiss: function () {
              null == t || t(), r();
            },
            style: { maxWidth: "420px" },
            children: (0, o.jsx)(ri, { tokens: e, handleCurrencySelect: t }),
          });
        };
      function Ws(n, e) {
        (null == e || e > n.length) && (e = n.length);
        for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
        return r;
      }
      function $s(n, e, t) {
        return (
          e in n
            ? Object.defineProperty(n, e, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (n[e] = t),
          n
        );
      }
      function Hs(n, e) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, e) {
            var t =
              null == n
                ? null
                : ("undefined" != typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                c = !1;
              try {
                for (
                  t = t.call(n);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (n) {
                (c = !0), (o = n);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (c) throw o;
                }
              }
              return i;
            }
          })(n, e) ||
          (function (n, e) {
            if (n) {
              if ("string" == typeof n) return Ws(n, e);
              var t = Object.prototype.toString.call(n).slice(8, -1);
              return (
                "Object" === t && n.constructor && (t = n.constructor.name),
                "Map" === t || "Set" === t
                  ? Array.from(t)
                  : "Arguments" === t ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                  ? Ws(n, e)
                  : void 0
              );
            }
          })(n, e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function Gs(n, e) {
        return (
          e || (e = n.slice(0)),
          Object.freeze(
            Object.defineProperties(n, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      function Vs() {
        var n = Gs([
          "\n  font-size: 12px;\n  font-weight: bold;\n  color: ",
          ";\n",
        ]);
        return (
          (Vs = function () {
            return n;
          }),
          n
        );
      }
      function _s() {
        var n = Gs([
          "\n  width: 40px;\n  height: 40px;\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  .icon-down {\n    display: block;\n    fill: white;\n  }\n  .icon-up-down {\n    display: none;\n  }\n  &:hover {\n    opacity: 1 !important;\n    background-color: ",
          ";\n    .icon-down {\n      display: none;\n      fill: white;\n    }\n    .icon-up-down {\n      display: block;\n      fill: white;\n    }\n  }\n",
        ]);
        return (
          (_s = function () {
            return n;
          }),
          n
        );
      }
      var qs = (0, a.ZP)(H.Z).withConfig({ componentId: "sc-f6bd7005-0" })(
          Vs(),
          function (n) {
            return n.theme.colors.secondary;
          }
        ),
        Ys = (0, a.ZP)(G.Z).withConfig({ componentId: "sc-f6bd7005-1" })(
          _s(),
          function (n) {
            return n.theme.colors.primary;
          }
        );
      function Qs() {
        var n,
          e,
          t,
          r,
          a,
          u = (0, Pe.useRouter)(),
          s = (function () {
            var n = (0, In.Z)().chainId,
              e = (0, Be.TL)(),
              t = (0, Pe.useRouter)().query,
              r = (0, i.useState)(),
              o = r[0],
              a = r[1];
            return (
              (0, i.useEffect)(
                function () {
                  if (n) {
                    var r = (function (n) {
                      var e = ss(n.inputCurrency) || "BNB",
                        t =
                          ss(n.outputCurrency) ||
                          "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82";
                      e === t &&
                        ("string" == typeof n.outputCurrency
                          ? (e = "")
                          : (t = ""));
                      var r,
                        o,
                        i = (function (n) {
                          return "string" != typeof n
                            ? null
                            : (0, D.UJ)(n) || (ds.test(n) ? n : null);
                        })(n.recipient);
                      return (
                        is((r = {}), U.gN.INPUT, { currencyId: e }),
                        is(r, U.gN.OUTPUT, { currencyId: t }),
                        is(
                          r,
                          "typedValue",
                          "string" != typeof (o = n.exactAmount) ||
                            Number.isNaN(parseFloat(o))
                            ? ""
                            : o
                        ),
                        is(
                          r,
                          "independentField",
                          (function (n) {
                            return "string" == typeof n &&
                              "output" === n.toLowerCase()
                              ? U.gN.OUTPUT
                              : U.gN.INPUT;
                          })(n.exactField)
                        ),
                        is(r, "recipient", i),
                        is(r, "pairDataById", {}),
                        is(r, "derivedPairDataById", {}),
                        r
                      );
                    })(t);
                    e(
                      (0, U.mV)({
                        typedValue: r.typedValue,
                        field: r.independentField,
                        inputCurrencyId: r[U.gN.INPUT].currencyId,
                        outputCurrencyId: r[U.gN.OUTPUT].currencyId,
                        recipient: null,
                      })
                    ),
                      a({
                        inputCurrencyId: r[U.gN.INPUT].currencyId,
                        outputCurrencyId: r[U.gN.OUTPUT].currencyId,
                      });
                  }
                },
                [e, n, t]
              ),
              o
            );
          })(),
          d = (0, Bn.$G)().t,
          f = _().isMobile,
          p = (0, i.useState)(!1),
          m = (p[0], p[1], Hs((0, Tn.vD)(f), 2)),
          h = m[0],
          b = m[1],
          v = (0, i.useState)(h),
          x = v[0],
          g =
            (v[1],
            (function () {
              var n = (0, i.useState)(!1),
                e = n[0],
                t = n[1],
                r = (0, i.useCallback)(
                  function () {
                    e || t(!0);
                  },
                  [e]
                ),
                o = (0, Fe.kY)().mutate;
              return (
                (0, i.useEffect)(
                  function () {
                    e &&
                      (o("blockNumber"),
                      setTimeout(function () {
                        return t(!1);
                      }, 500));
                  },
                  [o, e]
                ),
                { refreshBlockNumber: r, isLoading: e }
              );
            })()),
          w = g.refreshBlockNumber,
          O = g.isLoading;
        (0, i.useEffect)(
          function () {
            b(x);
          },
          [x, b]
        );
        var C,
          k,
          I,
          S,
          A,
          E,
          N = [
            (0, Zn.U8)(null == s ? void 0 : s.inputCurrencyId),
            (0, Zn.U8)(null == s ? void 0 : s.outputCurrencyId),
          ],
          M = N[0],
          L = N[1],
          z = (0, i.useMemo)(
            function () {
              var n;
              return null !==
                (C =
                  null === (n = [M, L]) || void 0 === n
                    ? void 0
                    : n.filter(function (n) {
                        return (
                          (e = n),
                          null != (t = c.WU) &&
                          "undefined" != typeof Symbol &&
                          t[Symbol.hasInstance]
                            ? !!t[Symbol.hasInstance](e)
                            : e instanceof t
                        );
                        var e, t;
                      })) && void 0 !== C
                ? C
                : [];
            },
            [M, L]
          ),
          B = (0, Zn.e_)(),
          $ =
            z &&
            z.filter(function (n) {
              return !(n.address in B);
            }),
          G = (0, ze.Ge)().account,
          V = Hs((0, Tn.DG)(), 1)[0],
          Q = Hs((0, Tn.$2)(), 1)[0],
          K = (0, Ni.v9)(function (n) {
            return n.swap;
          }),
          X = K.independentField,
          tn = K.typedValue,
          rn = K.recipient,
          on = K[U.gN.INPUT].currencyId,
          an = K[U.gN.OUTPUT].currencyId,
          cn = (0, Zn.U8)(on),
          un = (0, Zn.U8)(an),
          ln = ls(X, tn, cn, un, rn),
          sn = ln.v2Trade,
          dn = ln.currencyBalances,
          fn = ln.parsedAmount,
          pn = ln.currencies,
          mn = ln.inputError,
          hn = (function (n, e, t) {
            var r = (0, Bn.$G)().t,
              o = (0, In.Z)(),
              a = o.chainId,
              u = o.account,
              l = Du().callWithGasPrice,
              s = (0, wr.J8)(),
              d = Sr(null != u ? u : void 0, n),
              f = (0, i.useMemo)(
                function () {
                  return el(t, n);
                },
                [n, t]
              ),
              p = Fc();
            return (0, i.useMemo)(
              function () {
                if (!(s && a && n && e)) return ol;
                var t = f && d && !d.lessThan(f);
                return n === c.c0 && (0, c.KA)(c.DX[a], e)
                  ? {
                      wrapType: Xu.WRAP,
                      execute:
                        t && f
                          ? rl(
                              mi().mark(function n() {
                                var e;
                                return mi().wrap(
                                  function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.prev = 0),
                                            (n.next = 3),
                                            l(s, "deposit", void 0, {
                                              value: "0x".concat(
                                                f.raw.toString(16)
                                              ),
                                            })
                                          );
                                        case 3:
                                          (e = n.sent),
                                            p(e, {
                                              summary: "Wrap ".concat(
                                                f.toSignificant(6),
                                                " BNB to WBNB"
                                              ),
                                              type: "wrap",
                                            }),
                                            (n.next = 10);
                                          break;
                                        case 7:
                                          (n.prev = 7),
                                            (n.t0 = n.catch(0)),
                                            console.error(
                                              "Could not deposit",
                                              n.t0
                                            );
                                        case 10:
                                        case "end":
                                          return n.stop();
                                      }
                                  },
                                  n,
                                  null,
                                  [[0, 7]]
                                );
                              })
                            )
                          : void 0,
                      inputError: t ? void 0 : r("Insufficient BNB balance"),
                    }
                  : (0, c.KA)(c.DX[a], n) && e === c.c0
                  ? {
                      wrapType: Xu.UNWRAP,
                      execute:
                        t && f
                          ? rl(
                              mi().mark(function n() {
                                var e;
                                return mi().wrap(
                                  function (n) {
                                    for (;;)
                                      switch ((n.prev = n.next)) {
                                        case 0:
                                          return (
                                            (n.prev = 0),
                                            (n.next = 3),
                                            l(s, "withdraw", [
                                              "0x".concat(f.raw.toString(16)),
                                            ])
                                          );
                                        case 3:
                                          (e = n.sent),
                                            p(e, {
                                              summary: "Unwrap ".concat(
                                                f.toSignificant(6),
                                                " WBNB to BNB"
                                              ),
                                            }),
                                            (n.next = 10);
                                          break;
                                        case 7:
                                          (n.prev = 7),
                                            (n.t0 = n.catch(0)),
                                            console.error(
                                              "Could not withdraw",
                                              n.t0
                                            );
                                        case 10:
                                        case "end":
                                          return n.stop();
                                      }
                                  },
                                  n,
                                  null,
                                  [[0, 7]]
                                );
                              })
                            )
                          : void 0,
                      inputError: t ? void 0 : r("Insufficient WBNB balance"),
                    }
                  : ol;
              },
              [s, a, n, e, r, f, d, p, l]
            );
          })(pn[U.gN.INPUT], pn[U.gN.OUTPUT], tn),
          yn = hn.wrapType,
          bn = hn.execute,
          vn = hn.inputError,
          xn = yn !== Xu.NOT_APPLICABLE,
          gn = xn ? void 0 : sn,
          On =
            ((function (n, e, t, r) {
              var o,
                i = gl(n),
                a = gl(t),
                c = Dn(el("1", null != e ? e : void 0), null != r ? r : void 0);
              if (!e || !r || !c) return null;
              var u,
                l = parseFloat(
                  null == c || null === (o = c.executionPrice) || void 0 === o
                    ? void 0
                    : o.toSignificant(6)
                ),
                s = 1 / l;
              is((u = {}), i, l), is(u, a, s);
            })(on, cn, an, un),
            xn
              ? ($s((k = {}), U.gN.INPUT, fn), $s(k, U.gN.OUTPUT, fn), k)
              : ($s(
                  (I = {}),
                  U.gN.INPUT,
                  X === U.gN.INPUT ? fn : null == gn ? void 0 : gn.inputAmount
                ),
                $s(
                  I,
                  U.gN.OUTPUT,
                  X === U.gN.OUTPUT ? fn : null == gn ? void 0 : gn.outputAmount
                ),
                I)),
          Cn = Re(),
          kn = Cn.onSwitchTokens,
          Pn = Cn.onCurrencySelection,
          An = Cn.onUserInput,
          En = Cn.onChangeRecipient,
          Nn = !mn,
          Mn = X === U.gN.INPUT ? U.gN.OUTPUT : U.gN.INPUT,
          Ln = (0, i.useCallback)(
            function (n) {
              An(U.gN.INPUT, n);
            },
            [An]
          ),
          Un = (0, i.useCallback)(
            function (n) {
              An(U.gN.OUTPUT, n);
            },
            [An]
          ),
          zn = (0, i.useState)({
            tradeToConfirm: void 0,
            attemptingTxn: !1,
            swapErrorMessage: void 0,
            txHash: void 0,
          }),
          Rn = zn[0],
          Fn = Rn.tradeToConfirm,
          Wn = Rn.swapErrorMessage,
          $n = Rn.attemptingTxn,
          Hn = Rn.txHash,
          Gn = zn[1],
          Vn =
            ($s((E = {}), X, tn),
            $s(
              E,
              Mn,
              xn
                ? null !==
                    (S =
                      null === (n = On[X]) || void 0 === n
                        ? void 0
                        : n.toExact()) && void 0 !== S
                  ? S
                  : ""
                : null !==
                    (A =
                      null === (e = On[Mn]) || void 0 === e
                        ? void 0
                        : e.toSignificant(6)) && void 0 !== A
                ? A
                : ""
            ),
            E),
          Yn = null == gn ? void 0 : gn.route,
          Qn = Boolean(
            pn[U.gN.INPUT] &&
              pn[U.gN.OUTPUT] &&
              (null === (t = On[X]) || void 0 === t ? void 0 : t.greaterThan(j))
          ),
          Kn = !Yn,
          Jn = Hs(
            (function (n) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              return Ru(
                (0, i.useMemo)(
                  function () {
                    return n ? F(n, e)[U.gN.INPUT] : void 0;
                  },
                  [n, e]
                ),
                y[l.K]
              );
            })(gn, Q),
            2
          ),
          Xn = Jn[0],
          ne = Jn[1],
          ee = (0, i.useState)(!1),
          te = ee[0],
          ie = ee[1];
        (0, i.useEffect)(
          function () {
            Xn === Uu.PENDING && ie(!0);
          },
          [Xn, te]
        );
        var ae = (function (n) {
            if (n)
              return n.currency === c.c0
                ? c.QA.greaterThan(n.raw, Z)
                  ? c.ih.ether(c.QA.subtract(n.raw, Z))
                  : c.ih.ether(j)
                : n;
          })(dn[U.gN.INPUT]),
          ce = Boolean(
            ae &&
              (null === (r = On[U.gN.INPUT]) || void 0 === r
                ? void 0
                : r.equalTo(ae))
          ),
          ue = (function (n) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : Wu.gv,
              t = arguments.length > 2 ? arguments[2] : void 0,
              r = (0, In.Z)(),
              o = r.account,
              a = r.chainId,
              c = r.library,
              u = (0, Tn.Fh)(),
              l = Gu(n, e, t),
              s = (0, Bn.$G)().t,
              d = Fc(),
              f = null === t ? o : t;
            return (0, i.useMemo)(
              function () {
                return n && c && o && a
                  ? f
                    ? {
                        state: Fu.VALID,
                        callback: (function () {
                          var e = qu(
                            mi().mark(function e() {
                              var r, i, a, c, p, m, h, y, b, v, x;
                              return mi().wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      return (
                                        (e.next = 3),
                                        Promise.all(
                                          l.map(function (n) {
                                            var e,
                                              t = n.parameters,
                                              r = t.methodName,
                                              o = t.args,
                                              i = t.value,
                                              a = n.contract,
                                              c =
                                                !i || $u(i) ? {} : { value: i };
                                            return (e = a.estimateGas)[r]
                                              .apply(e, Ku(o).concat([c]))
                                              .then(function (e) {
                                                return {
                                                  call: n,
                                                  gasEstimate: e,
                                                };
                                              })
                                              .catch(function (e) {
                                                var t;
                                                return (
                                                  console.error(
                                                    "Gas estimate failed, trying eth_call to extract error",
                                                    n
                                                  ),
                                                  (t = a.callStatic)[r]
                                                    .apply(t, Ku(o).concat([c]))
                                                    .then(function (t) {
                                                      return (
                                                        console.error(
                                                          "Unexpected successful call after failed estimate gas",
                                                          n,
                                                          e,
                                                          t
                                                        ),
                                                        {
                                                          call: n,
                                                          error: s(
                                                            "Unexpected issue with estimating the gas. Please try again."
                                                          ),
                                                        }
                                                      );
                                                    })
                                                    .catch(function (e) {
                                                      return (
                                                        console.error(
                                                          "Call threw error",
                                                          n,
                                                          e
                                                        ),
                                                        {
                                                          call: n,
                                                          error: Ju(e, s),
                                                        }
                                                      );
                                                    })
                                                );
                                              });
                                          })
                                        )
                                      );
                                    case 3:
                                      if (
                                        ((i = e.sent),
                                        (a = i.find(function (n, e, t) {
                                          return (
                                            "gasEstimate" in n &&
                                            (e === t.length - 1 ||
                                              "gasEstimate" in t[e + 1])
                                          );
                                        })))
                                      ) {
                                        e.next = 10;
                                        break;
                                      }
                                      if (
                                        !(
                                          (c = i.filter(function (n) {
                                            return "error" in n;
                                          })).length > 0
                                        )
                                      ) {
                                        e.next = 9;
                                        break;
                                      }
                                      throw new Error(c[c.length - 1].error);
                                    case 9:
                                      throw new Error(
                                        s(
                                          "Unexpected error. Could not estimate gas for the swap."
                                        )
                                      );
                                    case 10:
                                      return (
                                        (p = a.call),
                                        (m = p.contract),
                                        (h = p.parameters),
                                        (y = h.methodName),
                                        (b = h.args),
                                        (v = h.value),
                                        (x = a.gasEstimate),
                                        e.abrupt(
                                          "return",
                                          (r = m)[y]
                                            .apply(
                                              r,
                                              Ku(b).concat([
                                                Qu(
                                                  {
                                                    gasLimit: (0, D.yC)(x),
                                                    gasPrice: u,
                                                  },
                                                  v && !$u(v)
                                                    ? { value: v, from: o }
                                                    : { from: o }
                                                ),
                                              ])
                                            )
                                            .then(function (e) {
                                              var r =
                                                  n.inputAmount.currency.symbol,
                                                i =
                                                  n.outputAmount.currency
                                                    .symbol,
                                                a =
                                                  n.inputAmount.toSignificant(
                                                    3
                                                  ),
                                                c =
                                                  n.outputAmount.toSignificant(
                                                    3
                                                  ),
                                                u = "Swap "
                                                  .concat(a, " ")
                                                  .concat(r, " for ")
                                                  .concat(c, " ")
                                                  .concat(i),
                                                l =
                                                  f === o
                                                    ? u
                                                    : ""
                                                        .concat(u, " to ")
                                                        .concat(
                                                          t && (0, D.UJ)(t)
                                                            ? (0, mr.Z)(t)
                                                            : t
                                                        );
                                              return (
                                                d(e, {
                                                  summary: l,
                                                  type: "swap",
                                                }),
                                                e.hash
                                              );
                                            })
                                            .catch(function (n) {
                                              throw 4001 ===
                                                (null == n ? void 0 : n.code)
                                                ? new Error(
                                                    "Transaction rejected."
                                                  )
                                                : (console.error(
                                                    "Swap failed",
                                                    n,
                                                    y,
                                                    b,
                                                    v
                                                  ),
                                                  new Error(
                                                    s(
                                                      "Swap failed: %message%",
                                                      { message: Ju(n, s) }
                                                    )
                                                  ));
                                            })
                                        )
                                      );
                                    case 12:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            })
                          );
                          return function () {
                            return e.apply(this, arguments);
                          };
                        })(),
                        error: null,
                      }
                    : null !== t
                    ? {
                        state: Fu.INVALID,
                        callback: null,
                        error: "Invalid recipient",
                      }
                    : { state: Fu.LOADING, callback: null, error: null }
                  : {
                      state: Fu.INVALID,
                      callback: null,
                      error: "Missing dependencies",
                    };
              },
              [n, c, o, a, f, t, l, u, s, d]
            );
          })(gn, Q, rn),
          le = ue.callback,
          se = ue.error,
          de = R(gn).priceImpactWithoutFee,
          fe = Hs((0, Tn.RO)(), 1)[0],
          pe = (0, i.useCallback)(
            function () {
              (de &&
                !(function (n, e) {
                  if (!n.lessThan(P)) {
                    var t = "confirm";
                    return (
                      window.prompt(
                        e(
                          'This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.',
                          { amount: P.toFixed(0), word: t }
                        )
                      ) === t
                    );
                  }
                  return (
                    !!n.lessThan(T) ||
                    window.confirm(
                      e(
                        "This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.",
                        { amount: T.toFixed(0) }
                      )
                    )
                  );
                })(de, d)) ||
                (le &&
                  (Gn({
                    attemptingTxn: !0,
                    tradeToConfirm: Fn,
                    swapErrorMessage: void 0,
                    txHash: void 0,
                  }),
                  le()
                    .then(function (n) {
                      Gn({
                        attemptingTxn: !1,
                        tradeToConfirm: Fn,
                        swapErrorMessage: void 0,
                        txHash: n,
                      });
                    })
                    .catch(function (n) {
                      Gn({
                        attemptingTxn: !1,
                        tradeToConfirm: Fn,
                        swapErrorMessage: n.message,
                        txHash: void 0,
                      });
                    })));
            },
            [de, le, Fn, d]
          ),
          me = (0, i.useState)(!1),
          he = me[0],
          ye = me[1],
          be = W(de),
          ve =
            !mn &&
            (Xn === Uu.NOT_APPROVED ||
              Xn === Uu.PENDING ||
              (te && Xn === Uu.APPROVED)) &&
            !(be > 3 && !V),
          xe = (0, i.useCallback)(
            function () {
              Gn({
                tradeToConfirm: Fn,
                attemptingTxn: $n,
                swapErrorMessage: Wn,
                txHash: Hn,
              }),
                Hn && An(U.gN.INPUT, "");
            },
            [$n, An, Wn, Fn, Hn]
          ),
          ge = (0, i.useCallback)(
            function () {
              Gn({
                tradeToConfirm: gn,
                swapErrorMessage: Wn,
                txHash: Hn,
                attemptingTxn: $n,
              });
            },
            [$n, Wn, gn, Hn]
          ),
          je = (0, i.useState)(null),
          we = je[0],
          Oe = je[1],
          Ce = Hs((0, q.Z)((0, o.jsx)(ks, { swapCurrency: we }), !1), 1)[0];
        (0, i.useEffect)(
          function () {
            we && Ce();
          },
          [we]
        );
        var ke = (0, i.useCallback)(
            function (n) {
              ie(!1), Pn(U.gN.INPUT, n);
              var e = Ue(n);
              Oe(e ? n : null);
            },
            [Pn]
          ),
          Ie = (0, i.useCallback)(
            function () {
              ae && An(U.gN.INPUT, ae.toExact());
            },
            [ae, An]
          ),
          Se = (0, i.useCallback)(
            function (n) {
              Pn(U.gN.OUTPUT, n);
              var e = Ue(n);
              Oe(e ? n : null);
            },
            [Pn]
          ),
          Ze = (function (n, e) {
            var t = (0, Zn.l6)(),
              r = (0, In.Z)().chainId,
              o = (0, Sn.pu)(n, r),
              i = (0, Sn.pu)(e, r);
            if (t) {
              if (o && Object.keys(t).includes(o.address)) return !0;
              if (i && Object.keys(t).includes(i.address)) return !0;
            }
            return !1;
          })(null == pn ? void 0 : pn.INPUT, null == pn ? void 0 : pn.OUTPUT),
          Ae = Hs(
            (0, q.Z)(
              (0, o.jsx)(Fs, {
                tokens: $,
                onCancel: function () {
                  return u.push("/swap");
                },
              })
            ),
            1
          )[0];
        (0, i.useEffect)(
          function () {
            $.length > 0 && Ae();
          },
          [$.length]
        );
        var Ee,
          Ne = Hs(
            (0, q.Z)(
              (0, o.jsx)(vr, {
                trade: gn,
                originalTrade: Fn,
                onAcceptChanges: ge,
                attemptingTxn: $n,
                txHash: Hn,
                recipient: rn,
                allowedSlippage: Q,
                onConfirm: pe,
                swapErrorMessage: Wn,
                customOnDismiss: xe,
              }),
              !0,
              !0,
              "confirmSwapModal"
            ),
            1
          )[0],
          Me = Boolean(fn),
          Le = (0, i.useCallback)(
            function () {
              Me && w();
            },
            [Me, w]
          );
        return (0, o.jsx)(Y.Z, {
          width: "100%",
          justifyContent: "start",
          position: "relative",
          children: (0, o.jsx)(Ts, {
            children: (0, o.jsxs)(ku, {
              children: [
                (0, o.jsx)(Rs, {
                  title: d("Swap"),
                  hasAmount: Me,
                  onRefreshPrice: Le,
                }),
                (0, o.jsxs)(er, {
                  id: "swap-page",
                  style: { minHeight: "412px" },
                  children: [
                    (0, o.jsxs)(re, {
                      gap: "sm",
                      children: [
                        (0, o.jsx)(Ka, {
                          label:
                            X === U.gN.OUTPUT && !xn && gn
                              ? d("From (estimated)")
                              : d("From"),
                          value: Vn[U.gN.INPUT],
                          showMaxButton: !ce,
                          currency: pn[U.gN.INPUT],
                          onUserInput: Ln,
                          onMax: Ie,
                          onCurrencySelect: ke,
                          otherCurrency: pn[U.gN.OUTPUT],
                          id: "swap-currency-input",
                        }),
                        (0, o.jsx)(re, {
                          style: {
                            marginTop: "-20px",
                            marginBottom: "-20px",
                            zIndex: 10,
                          },
                          justify: "space-between",
                          children: (0, o.jsxs)(qn, {
                            justify: V ? "space-between" : "center",
                            style: { padding: "0 1rem" },
                            children: [
                              (0, o.jsxs)(Ys, {
                                variant: "primary",
                                onClick: function () {
                                  ie(!1), kn();
                                },
                                children: [
                                  (0, o.jsx)(J, {
                                    width: 24,
                                    className: "icon-down",
                                    color:
                                      pn[U.gN.INPUT] && pn[U.gN.OUTPUT]
                                        ? "primary"
                                        : "text",
                                  }),
                                  (0, o.jsx)(nn, {
                                    width: 24,
                                    className: "icon-up-down",
                                    color:
                                      pn[U.gN.INPUT] && pn[U.gN.OUTPUT]
                                        ? "primary"
                                        : "text",
                                  }),
                                ],
                              }),
                              null === rn && !xn && V
                                ? (0, o.jsx)(en.Z, {
                                    variant: "text",
                                    id: "add-recipient-button",
                                    onClick: function () {
                                      return En("");
                                    },
                                    children: d("+ Add a send (optional)"),
                                  })
                                : null,
                            ],
                          }),
                        }),
                        (0, o.jsx)(Ka, {
                          value: Vn[U.gN.OUTPUT],
                          onUserInput: Un,
                          label:
                            X === U.gN.INPUT && !xn && gn
                              ? d("To (estimated)")
                              : d("To"),
                          showMaxButton: !1,
                          currency: pn[U.gN.OUTPUT],
                          onCurrencySelect: Se,
                          otherCurrency: pn[U.gN.INPUT],
                          id: "swap-currency-output",
                        }),
                        V && null !== rn && !xn
                          ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsxs)(qn, {
                                  justify: "space-between",
                                  style: { padding: "0 1rem" },
                                  children: [
                                    (0, o.jsx)(tr, {
                                      clickable: !1,
                                      children: (0, o.jsx)(J, {
                                        width: "16px",
                                      }),
                                    }),
                                    (0, o.jsx)(en.Z, {
                                      variant: "text",
                                      id: "remove-recipient-button",
                                      onClick: function () {
                                        return En(null);
                                      },
                                      children: d("- Remove send"),
                                    }),
                                  ],
                                }),
                                (0, o.jsx)(Ke, {
                                  id: "recipient",
                                  value: rn,
                                  onChange: En,
                                }),
                              ],
                            })
                          : null,
                        xn
                          ? null
                          : (0, o.jsxs)(re, {
                              gap: "7px",
                              style: { padding: "0 16px" },
                              children: [
                                (0, o.jsx)(_n, {
                                  align: "center",
                                  children:
                                    Boolean(gn) &&
                                    (0, o.jsxs)(o.Fragment, {
                                      children: [
                                        (0, o.jsx)(qs, {
                                          children: d("Price"),
                                        }),
                                        O
                                          ? (0, o.jsx)(jn, {
                                              width: "100%",
                                              ml: "8px",
                                              height: "24px",
                                            })
                                          : (0, o.jsx)(dc, {
                                              price:
                                                null == gn
                                                  ? void 0
                                                  : gn.executionPrice,
                                              showInverted: he,
                                              setShowInverted: ye,
                                            }),
                                      ],
                                    }),
                                }),
                                (0, o.jsxs)(_n, {
                                  align: "center",
                                  children: [
                                    (0, o.jsx)(qs, {
                                      children: d("Slippage Tolerance"),
                                    }),
                                    (0, o.jsxs)(H.Z, {
                                      bold: !0,
                                      color: "primary",
                                      children: [Q / 100, "%"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      ],
                    }),
                    Ze
                      ? (0, o.jsx)(Te, { currencies: [pn.INPUT, pn.OUTPUT] })
                      : gn && (0, o.jsx)(sc, { trade: gn }),
                    // (0, o.jsxs)(wn.Z, {
                    //   mt: "0.25rem",
                    //   children: [
                    //     Ze
                    //       ? (0, o.jsx)(en.Z, {
                    //           width: "100%",
                    //           disabled: !0,
                    //           children: d("Unsupported Asset"),
                    //         })
                    //       : G
                    //       ? xn
                    //         ? (0, o.jsx)(en.Z, {
                    //             width: "100%",
                    //             disabled: Boolean(vn),
                    //             onClick: bn,
                    //             children:
                    //               null != vn
                    //                 ? vn
                    //                 : yn === Xu.WRAP
                    //                 ? "Wrap"
                    //                 : yn === Xu.UNWRAP
                    //                 ? "Unwrap"
                    //                 : null,
                    //           })
                    //         : Kn && Qn
                    //         ? (0, o.jsxs)(at, {
                    //             style: {
                    //               textAlign: "center",
                    //               padding: "0.75rem",
                    //             },
                    //             children: [
                    //               (0, o.jsx)(H.Z, {
                    //                 color: "textSubtle",
                    //                 children: d(
                    //                   "Insufficient liquidity for this trade."
                    //                 ),
                    //               }),
                    //               fe &&
                    //                 (0, o.jsx)(H.Z, {
                    //                   color: "textSubtle",
                    //                   children: d(
                    //                     "Try enabling multi-hop trades."
                    //                   ),
                    //                 }),
                    //             ],
                    //           })
                    //         : ve
                    //         ? (0, o.jsxs)(_n, {
                    //             children: [
                    //               (0, o.jsx)(en.Z, {
                    //                 variant:
                    //                   Xn === Uu.APPROVED
                    //                     ? "success"
                    //                     : "primary",
                    //                 onClick: ne,
                    //                 disabled: Xn !== Uu.NOT_APPROVED || te,
                    //                 width: "48%",
                    //                 children:
                    //                   Xn === Uu.PENDING
                    //                     ? (0, o.jsxs)(qn, {
                    //                         gap: "6px",
                    //                         justify: "center",
                    //                         children: [
                    //                           d("Enabling"),
                    //                           " ",
                    //                           (0, o.jsx)(_r, {
                    //                             stroke: "white",
                    //                           }),
                    //                         ],
                    //                       })
                    //                     : te && Xn === Uu.APPROVED
                    //                     ? d("Enabled")
                    //                     : d("Enable %asset%", {
                    //                         asset:
                    //                           null !==
                    //                             (Ee =
                    //                               null ===
                    //                                 (a = pn[U.gN.INPUT]) ||
                    //                               void 0 === a
                    //                                 ? void 0
                    //                                 : a.symbol) && void 0 !== Ee
                    //                             ? Ee
                    //                             : "",
                    //                       }),
                    //               }),
                    //               (0, o.jsx)(en.Z, {
                    //                 variant:
                    //                   Nn && be > 2 ? "danger" : "primary",
                    //                 onClick: function () {
                    //                   V
                    //                     ? pe()
                    //                     : (Gn({
                    //                         tradeToConfirm: gn,
                    //                         attemptingTxn: !1,
                    //                         swapErrorMessage: void 0,
                    //                         txHash: void 0,
                    //                       }),
                    //                       Ne());
                    //                 },
                    //                 width: "48%",
                    //                 id: "swap-button",
                    //                 disabled:
                    //                   !Nn ||
                    //                   Xn !== Uu.APPROVED ||
                    //                   (be > 3 && !V),
                    //                 children: d(
                    //                   be > 3 && !V
                    //                     ? "Price Impact High"
                    //                     : be > 2
                    //                     ? "Swap Anyway"
                    //                     : "Swap"
                    //                 ),
                    //               }),
                    //             ],
                    //           })
                    //         : (0, o.jsx)(en.Z, {
                    //             variant:
                    //               Nn && be > 2 && !se ? "danger" : "primary",
                    //             onClick: function () {
                    //               V
                    //                 ? pe()
                    //                 : (Gn({
                    //                     tradeToConfirm: gn,
                    //                     attemptingTxn: !1,
                    //                     swapErrorMessage: void 0,
                    //                     txHash: void 0,
                    //                   }),
                    //                   Ne());
                    //             },
                    //             id: "swap-button",
                    //             width: "100%",
                    //             style: { borderRadius: "100px" },
                    //             disabled: !Nn || (be > 3 && !V) || !!se,
                    //             children:
                    //               mn ||
                    //               d(
                    //                 be > 3 && !V
                    //                   ? "Price Impact Too High"
                    //                   : be > 2
                    //                   ? "Swap Anyway"
                    //                   : "Swap"
                    //               ),
                    //           })
                    //       : (0, o.jsx)(vu, { width: "100%" }),
                    //     ve &&
                    //       (0, o.jsx)(oe, {
                    //         style: { marginTop: "1rem" },
                    //         children: (0, o.jsx)(Cc, {
                    //           steps: [Xn === Uu.APPROVED],
                    //         }),
                    //       }),
                    //     V && Wn ? (0, o.jsx)(ur, { error: Wn }) : null,
                    //   ],
                    // }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var Ks = function () {
        return (0, o.jsx)(Qs, {});
      };
    },
    38796: function (n, e, t) {
      "use strict";
      function r(n) {
        switch (n.split(":")[0].toLowerCase()) {
          case "https":
            return [n];
          case "http":
            return ["https".concat(n.substring(4)), n];
          case "ipfs":
            var e,
              t =
                null === (e = n.match(/^ipfs:(\/\/)?(.*)$/i)) || void 0 === e
                  ? void 0
                  : e[2];
            return [
              "https://cloudflare-ipfs.com/ipfs/".concat(t, "/"),
              "https://ipfs.io/ipfs/".concat(t, "/"),
            ];
          case "ipns":
            var r,
              o =
                null === (r = n.match(/^ipns:(\/\/)?(.*)$/i)) || void 0 === r
                  ? void 0
                  : r[2];
            return [
              "https://cloudflare-ipfs.com/ipns/".concat(o, "/"),
              "https://ipfs.io/ipns/".concat(o, "/"),
            ];
          default:
            return [];
        }
      }
      t.d(e, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (n) {
    n.O(0, [399, 774, 888, 179], function () {
      return 48312, n((n.s = 48312));
    });
    var e = n.O();
    _N_E = e;
  },
]);
