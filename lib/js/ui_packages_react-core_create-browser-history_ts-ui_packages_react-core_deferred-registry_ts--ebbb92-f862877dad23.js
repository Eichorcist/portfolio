"use strict";
(globalThis.webpackChunk = globalThis.webpackChunk || []).push([
	["ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92"], {
		34232: (e, t, r) => {
			r.d(t, {
				n: () => o
			});
			var a = r(85893),
				n = r(67294),
				s = r(87487);

			function o({
				children: e,
				appName: t,
				category: r,
				metadata: o
			}) {
				let i = (0, n.useMemo)(() => ({
					appName: t,
					category: r,
					metadata: o
				}), [t, r, o]);
				return (0, a.jsx)(s.f.Provider, {
					value: i,
					children: e
				})
			}
			try {
				o.displayName || (o.displayName = "AnalyticsProvider")
			} catch {}
		},
		87487: (e, t, r) => {
			r.d(t, {
				f: () => n
			});
			var a = r(67294);
			let n = (0, a.createContext)(null)
		},
		65722: (e, t, r) => {
			r.d(t, {
				Z: () => a
			});
			let a = () => void 0
		},
		45055: (e, t, r) => {
			r.d(t, {
				I: () => n
			});
			var a = r(67294);
			let n = (0, a.createContext)(null)
		},
		59112: (e, t, r) => {
			r.d(t, {
				l: () => n
			});
			var a = r(12599);

			function n(e = {}) {
				let t;
				let r = (0, a.lX)({
						...e,
						v5Compat: !0
					}),
					n = [],
					s = !1;

				function o(e) {
					if (n.length > 0)
						for (let t of n) t({
							retry() {
								e()
							}
						});
					else e()
				}
				return r.listen(e => {
					if (s) {
						s = !1;
						return
					}
					if (e.action === a.aU.Pop && n.length && null !== e.delta && n.length > 0) {
						let t = e.delta;
						for (let e of (s = !0, r.go(-1 * t), n)) e({
							retry() {
								r.go(t)
							}
						})
					} else t?.(e)
				}), {
					get action() {
						return r.action
					},
					get location() {
						return r.location
					},
					createHref: e => r.createHref(e),
					createURL: e => r.createURL(e),
					encodeLocation: e => r.encodeLocation(e),
					push(e, t) {
						o(() => r.push(e, t))
					},
					replace(e, t) {
						o(() => r.replace(e, t))
					},
					go(e) {
						o(() => r.go(e))
					},
					listen(e) {
						if (t) throw Error("A history only accepts one active listener");
						return t = e, () => {
							t = void 0
						}
					},
					block: e => (n.push(e), () => {
						n = n.filter(t => t !== e)
					})
				}
			}
		},
		96843: (e, t, r) => {
			r.d(t, {
				e: () => DeferredRegistry
			});
			let DeferredRegistry = class DeferredRegistry {
				register(e, t) {
					let r = this.registrationEntries[e];
					r ? r.resolve?.(t) : this.registrationEntries[e] = {
						promise: Promise.resolve(t)
					}
				}
				getRegistration(e) {
					var t;
					return (t = this.registrationEntries)[e] || (t[e] = new a), this.registrationEntries[e].promise
				}
				constructor() {
					this.registrationEntries = {}
				}
			};
			let a = class Deferred {
				constructor() {
					this.promise = new Promise(e => {
						this.resolve = e
					})
				}
			}
		},
		51145: (e, t, r) => {
			r.d(t, {
				Z: () => l
			});
			var a = r(44544);
			let {
				getItem: n,
				setItem: s,
				removeItem: o
			} = (0, a.Z)("localStorage"), i = "REACT_PROFILING_ENABLED", l = {
				enable: () => s(i, "true"),
				disable: () => o(i),
				isEnabled: () => !!n(i)
			}
		},
		87634: (e, t, r) => {
			r.d(t, {
				sS: () => f,
				F1: () => g,
				V6: () => y
			});
			var a = r(85893),
				n = r(85529),
				s = r(70697),
				o = r(41905),
				i = r(67294);
			let l = {
					info: "",
					success: "Toast--success",
					error: "Toast--error"
				},
				c = {
					info: (0, a.jsx)(n.InfoIcon, {}),
					success: (0, a.jsx)(n.CheckIcon, {}),
					error: (0, a.jsx)(n.StopIcon, {})
				},
				d = ({
					message: e,
					timeToLive: t,
					icon: r,
					type: n = "info",
					role: d = "log"
				}) => {
					let [u, h] = i.useState(!0), {
						safeSetTimeout: m
					} = (0, s.Z)();
					return (0, i.useEffect)(() => {
						t && m(() => h(!1), t - 300)
					}, [m, t]), (0, a.jsx)(o.h, {
						children: (0, a.jsx)("div", {
							className: "p-1 position-fixed bottom-0 left-0 mb-3 ml-3",
							children: (0, a.jsxs)("div", {
								className: `Toast ${l[n]} ${u?"Toast--animateIn":"Toast--animateOut"}`,
								id: "ui-app-toast",
								"data-testid": `ui-app-toast-${n}`,
								role: d,
								children: [(0, a.jsx)("span", {
									className: "Toast-icon",
									children: r || c[n]
								}), (0, a.jsx)("span", {
									className: "Toast-content",
									children: e
								})]
							})
						})
					})
				};
			try {
				d.displayName || (d.displayName = "Toast")
			} catch {}
			var u = r(65722),
				h = r(77427);
			let m = (0, i.createContext)({
					addToast: u.Z,
					addPersistedToast: u.Z,
					clearPersistedToast: u.Z
				}),
				p = (0, i.createContext)({
					toasts: [],
					persistedToast: null
				});

			function f({
				children: e
			}) {
				let [t, r] = (0, h.Z)([]), [n, o] = (0, i.useState)(null), {
					safeSetTimeout: l
				} = (0, s.Z)(), c = (0, i.useCallback)(function(e) {
					r([...t, e]), l(() => r(t.slice(1)), 5e3)
				}, [t, l, r]), d = (0, i.useCallback)(function(e) {
					o(e)
				}, [o]), u = (0, i.useCallback)(function() {
					o(null)
				}, [o]), f = (0, i.useMemo)(() => ({
					addToast: c,
					addPersistedToast: d,
					clearPersistedToast: u
				}), [d, c, u]), y = (0, i.useMemo)(() => ({
					toasts: t,
					persistedToast: n
				}), [t, n]);
				return (0, a.jsx)(m.Provider, {
					value: f,
					children: (0, a.jsx)(p.Provider, {
						value: y,
						children: e
					})
				})
			}

			function y() {
				return (0, i.useContext)(m)
			}
			try {
				m.displayName || (m.displayName = "ToastContext")
			} catch {}
			try {
				p.displayName || (p.displayName = "InternalToastsContext")
			} catch {}
			try {
				f.displayName || (f.displayName = "ToastContextProvider")
			} catch {}

			function g() {
				let {
					toasts: e,
					persistedToast: t
				} = (0, i.useContext)(p);
				return (0, a.jsxs)(a.Fragment, {
					children: [e.map((e, t) => (0, a.jsx)(d, {
						message: e.message,
						icon: e.icon,
						timeToLive: 5e3,
						type: e.type,
						role: e.role
					}, t)), t && (0, a.jsx)(d, {
						message: t.message,
						icon: t.icon,
						type: t.type,
						role: t.role
					})]
				})
			}
			try {
				g.displayName || (g.displayName = "Toasts")
			} catch {}
		},
		78249: (e, t, r) => {
			r.d(t, {
				g: () => s
			});
			var a = r(67294),
				n = r(86283);

			function s(e, t) {
				n.Qg && (0, a.useLayoutEffect)(e, t)
			}
		},
		37169: (e, t, r) => {
			r.d(t, {
				Z: () => s
			});
			var a = r(78249),
				n = r(67294);

			function s() {
				let e = (0, n.useRef)(!1),
					t = (0, n.useCallback)(() => e.current, []);
				return (0, a.g)(() => (e.current = !0, () => {
					e.current = !1
				}), []), t
			}
		},
		77427: (e, t, r) => {
			r.d(t, {
				Z: () => s
			});
			var a = r(37169),
				n = r(67294);
			let s = function(e) {
				let t = (0, a.Z)(),
					[r, s] = (0, n.useState)(e),
					o = (0, n.useCallback)(e => {
						t() && s(e)
					}, [t]);
				return [r, o]
			}
		},
		58989: (e, t, r) => {
			r.d(t, {
				i: () => o
			});
			var a = r(85893),
				n = r(67294),
				s = r(45055);

			function o({
				routes: e,
				history: t,
				children: r
			}) {
				let o = (0, n.useMemo)(() => ({
					routes: e,
					history: t
				}), [e, t]);
				return (0, a.jsx)(s.I.Provider, {
					value: o,
					children: r
				})
			}
			try {
				o.displayName || (o.displayName = "AppContextProvider")
			} catch {}
		},
		1343: (e, t, r) => {
			let a;
			r.d(t, {
				R: () => p
			});
			var n = r(85893),
				s = r(98224),
				o = r(8386),
				i = r(67294);
			let l = globalThis.document;

			function c(e) {
				let t = e.colorMode;
				return {
					colorMode: function(e) {
						switch (e) {
							case "light":
								return "day";
							case "dark":
								return "night";
							default:
								return "auto"
						}
					}(t),
					dayScheme: e.lightTheme,
					nightScheme: e.darkTheme
				}
			}
			let d = l ? function() {
				let {
					documentElement: e
				} = l, [t, r] = (0, i.useState)(() => c(e.dataset));
				return (0, i.useEffect)(() => {
					let t = new MutationObserver(() => r(c(e.dataset)));
					return t.observe(e, {
						attributes: !0,
						attributeFilter: ["data-color-mode", "data-light-theme", "data-dark-theme"]
					}), () => t.disconnect()
				}, [e]), t
			} : function() {
				return c(a || {})
			};
			var u = r(87634),
				h = r(34232);
			let m = {};

			function p({
				appName: e,
				children: t,
				wasServerRendered: r
			}) {
				let {
					colorMode: a,
					dayScheme: i,
					nightScheme: l
				} = d();
				return (0, n.jsx)(s.DJ, {
					wasServerRendered: r,
					children: (0, n.jsx)(h.n, {
						appName: e,
						category: "",
						metadata: m,
						children: (0, n.jsx)(o.ZP, {
							colorMode: a,
							dayScheme: i,
							nightScheme: l,
							preventSSRMismatch: !0,
							children: (0, n.jsx)(u.sS, {
								children: t
							})
						})
					})
				})
			}
			try {
				p.displayName || (p.displayName = "BaseProviders")
			} catch {}
		},
		77617: (e, t, r) => {
			r.d(t, {
				P: () => i
			});
			var a = r(85893),
				n = r(87634),
				s = r(67294);

			function o() {
				let {
					addToast: e
				} = (0, n.V6)();
				return (0, s.useEffect)(() => {
					e({
						type: "error",
						message: "SSR failed, see console for error details"
					})
				}, []), null
			}
			try {
				o.displayName || (o.displayName = "SSRErrorToast")
			} catch {}

			function i({
				ssrError: e
			}) {
				return (0, a.jsxs)(a.Fragment, {
					children: [(0, a.jsx)(n.F1, {}), e && (0, a.jsx)(o, {})]
				})
			}
			try {
				i.displayName || (i.displayName = "CommonElements")
			} catch {}
		},
		88003: (e, t, r) => {
			r.d(t, {
				S: () => ReactBaseElement
			});
			var a = r(85893),
				n = r(76006),
				s = r(20745),
				o = r(67294),
				i = r(51145);

			function l(e, t, r, a) {
				var n, s = arguments.length,
					o = s < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, r) : a;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, a);
				else
					for (var i = e.length - 1; i >= 0; i--)(n = e[i]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
				return s > 3 && o && Object.defineProperty(t, r, o), o
			}
			let ReactBaseElement = class ReactBaseElement extends HTMLElement {
				get name() {
					return this.getAttribute(this.nameAttribute)
				}
				get embeddedDataText() {
					let e = this.embeddedData?.textContent;
					if (!e) throw Error(`No embedded data provided for react element ${this.name}`);
					return e
				}
				get hasSSRContent() {
					return "true" === this.getAttribute("data-ssr")
				}
				connectedCallback() {
					this.renderReact()
				}
				disconnectedCallback() {
					this.root?.unmount(), this.root = void 0
				}
				async renderReact() {
					let e = {
						createRoot: s.s,
						hydrateRoot: s.a
					};
					i.Z.isEnabled() && (e = await this.getReactDomWithProfiling());
					let t = JSON.parse(this.embeddedDataText),
						r = this.ssrError?.textContent,
						n = await this.getReactNode(t),
						l = (0, a.jsx)(o.StrictMode, {
							children: n
						});
					if (r && this.logSSRError(r), this.hasSSRContent) {
						let t = this.querySelector('style[data-styled="true"]');
						t && document.head.appendChild(t), this.root = e.hydrateRoot(this.reactRoot, l, {
							onRecoverableError: () => {}
						}), t && requestIdleCallback(() => {
							t.parentElement?.removeChild(t)
						})
					} else this.root = e.createRoot(this.reactRoot), this.root.render(l);
					this.classList.add("loaded")
				}
				getReactDomWithProfiling() {
					return r.e("react-profiling").then(r.t.bind(r, 62518, 19))
				}
				logSSRError(e) {
					let t = JSON.parse(e),
						r = function(e) {
							if (!e.stacktrace) return "";
							let t = "\n ",
								r = e.stacktrace.map(e => {
									let {
										function: r,
										filename: a,
										lineno: n,
										colno: s
									} = e, o = `${t} at ${r} (${a}:${n}:${s})`;
									return t = " ", o
								});
							return r.join("\n")
						}(t);
					console.error("Error During Alloy SSR:", `${t.type}: ${t.value}
`, t, r)
				}
			};
			l([n.fA], ReactBaseElement.prototype, "embeddedData", void 0), l([n.fA], ReactBaseElement.prototype, "ssrError", void 0), l([n.fA], ReactBaseElement.prototype, "reactRoot", void 0)
		},
		98224: (e, t, r) => {
			r.d(t, {
				DJ: () => c,
				i$: () => a,
				kb: () => l
			});
			var a, n = r(85893),
				s = r(67294),
				o = r(86283),
				i = r(78249);
			! function(e) {
				e.ServerRender = "ServerRender", e.ClientHydrate = "ClientHydrate", e.ClientRender = "ClientRender"
			}(a || (a = {}));
			let l = (0, s.createContext)("ClientRender");

			function c({
				wasServerRendered: e,
				children: t
			}) {
				let [r, a] = (0, s.useState)(() => o.W6 ? "ServerRender" : e ? "ClientHydrate" : "ClientRender");
				return (0, i.g)(() => {
					"ClientRender" !== r && a("ClientRender")
				}, [r]), (0, n.jsx)(l.Provider, {
					value: r,
					children: t
				})
			}
			try {
				l.displayName || (l.displayName = "RenderPhaseContext")
			} catch {}
			try {
				c.displayName || (c.displayName = "RenderPhaseProvider")
			} catch {}
		}
	}
]);
//# sourceMappingURL=ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92-96113646a99b.js.map