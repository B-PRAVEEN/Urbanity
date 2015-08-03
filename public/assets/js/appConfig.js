function uiUploader(a) {
    "use strict";

    function b(a) {
        for (var b = 0; b < a.length; b++) i.files.push(a[b])
    }

    function c() {
        return i.files
    }

    function d(a) {
        i.options = a;
        for (var b = 0; b < i.files.length && i.activeUploads != i.options.concurrency; b++) i.files[b].active || h(i.files[b], i.options.url)
    }

    function e(a) {
        i.files.splice(i.files.indexOf(a), 1)
    }

    function f() {
        i.files.splice(0, i.files.length)
    }

    function g(a) {
        var b = ["n/a", "bytes", "KiB", "MiB", "GiB", "TB", "PB", "EiB", "ZiB", "YiB"],
            c = +Math.floor(Math.log(a) / Math.log(1024));
        return (a / Math.pow(1024, c)).toFixed(c ? 1 : 0) + " " + b[isNaN(a) ? 0 : c + 1]
    }

    function h(a, b) {
        var c, e, f, h = "",
            j = "file";
        if (i.activeUploads += 1, a.active = !0, c = new window.XMLHttpRequest, e = new window.FormData, c.open("POST", b), c.upload.onloadstart = function() {}, c.upload.onprogress = function(b) {
                b.lengthComputable && (a.loaded = b.loaded, a.humanSize = g(b.loaded), i.options.onProgress(a))
            }, c.onload = function() {
                i.activeUploads -= 1, d(i.options), i.options.onCompleted(a)
            }, c.onerror = function() {}, h)
            for (f in h) h.hasOwnProperty(f) && e.append(f, h[f]);
        return e.append(j, a, a.name), c.send(e), c
    }
    var i = this;
    return i.files = [], i.options = {}, i.activeUploads = 0, a.info("uiUploader loaded"), {
        addFiles: b,
        getFiles: c,
        files: i.files,
        startUpload: d,
        removeFile: e,
        removeAll: f
    }
}! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    function c(a) {
        var b = a.length,
            c = _.type(a);
        return "function" === c || _.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    function d(a, b, c) {
        if (_.isFunction(b)) return _.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return _.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (ha.test(b)) return _.filter(b, a, c);
            b = _.filter(b, a)
        }
        return _.grep(a, function(a) {
            return U.call(b, a) >= 0 !== c
        })
    }

    function e(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = oa[a] = {};
        return _.each(a.match(na) || [], function(a, c) {
            b[c] = !0
        }), b
    }

    function g() {
        Z.removeEventListener("DOMContentLoaded", g, !1), a.removeEventListener("load", g, !1), _.ready()
    }

    function h() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = _.expando + h.uid++
    }

    function i(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(ua, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ta.test(c) ? _.parseJSON(c) : c
                } catch (e) {}
                sa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function j() {
        return !0
    }

    function k() {
        return !1
    }

    function l() {
        try {
            return Z.activeElement
        } catch (a) {}
    }

    function m(a, b) {
        return _.nodeName(a, "table") && _.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function n(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function o(a) {
        var b = Ka.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function p(a, b) {
        for (var c = 0, d = a.length; d > c; c++) ra.set(a[c], "globalEval", !b || ra.get(b[c], "globalEval"))
    }

    function q(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (ra.hasData(a) && (f = ra.access(a), g = ra.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) _.event.add(b, e, j[e][c])
            }
            sa.hasData(a) && (h = sa.access(a), i = _.extend({}, h), sa.set(b, i))
        }
    }

    function r(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && _.nodeName(a, b) ? _.merge([a], c) : c
    }

    function s(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && ya.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    function t(b, c) {
        var d, e = _(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : _.css(e[0], "display");
        return e.detach(), f
    }

    function u(a) {
        var b = Z,
            c = Oa[a];
        return c || (c = t(a, b), "none" !== c && c || (Na = (Na || _("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Na[0].contentDocument, b.write(), b.close(), c = t(a, b), Na.detach()), Oa[a] = c), c
    }

    function v(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || _.contains(a.ownerDocument, a) || (g = _.style(a, b)), Qa.test(g) && Pa.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function w(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    function x(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = Xa.length; e--;)
            if (b = Xa[e] + c, b in a) return b;
        return d
    }

    function y(a, b, c) {
        var d = Ta.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function z(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += _.css(a, c + wa[f], !0, e)), d ? ("content" === c && (g -= _.css(a, "padding" + wa[f], !0, e)), "margin" !== c && (g -= _.css(a, "border" + wa[f] + "Width", !0, e))) : (g += _.css(a, "padding" + wa[f], !0, e), "padding" !== c && (g += _.css(a, "border" + wa[f] + "Width", !0, e)));
        return g
    }

    function A(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = "border-box" === _.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = v(a, b, f), (0 > e || null == e) && (e = a.style[b]), Qa.test(e)) return e;
            d = g && (Y.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + z(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function B(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ra.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && xa(d) && (f[g] = ra.access(d, "olddisplay", u(d.nodeName)))) : (e = xa(d), "none" === c && e || ra.set(d, "olddisplay", e ? c : _.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function C(a, b, c, d, e) {
        return new C.prototype.init(a, b, c, d, e)
    }

    function D() {
        return setTimeout(function() {
            Ya = void 0
        }), Ya = _.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = wa[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function F(a, b, c) {
        for (var d, e = (cb[b] || []).concat(cb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function G(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this,
            m = {}, n = a.style,
            o = a.nodeType && xa(a),
            p = ra.get(a, "fxshow");
        c.queue || (h = _._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, _.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = _.css(a, "display"), k = "none" === j ? ra.get(a, "olddisplay") || u(a.nodeName) : j, "inline" === k && "none" === _.css(a, "float") && (n.display = "inline-block")), c.overflow && (n.overflow = "hidden", l.always(function() {
            n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], $a.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    o = !0
                }
                m[d] = p && p[d] || _.style(a, d)
            } else j = void 0;
        if (_.isEmptyObject(m)) "inline" === ("none" === j ? u(a.nodeName) : j) && (n.display = j);
        else {
            p ? "hidden" in p && (o = p.hidden) : p = ra.access(a, "fxshow", {}), f && (p.hidden = !o), o ? _(a).show() : l.done(function() {
                _(a).hide()
            }), l.done(function() {
                var b;
                ra.remove(a, "fxshow");
                for (b in m) _.style(a, b, m[b])
            });
            for (d in m) g = F(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function H(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = _.camelCase(c), e = b[d], f = a[c], _.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = _.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function I(a, b, c) {
        var d, e, f = 0,
            g = bb.length,
            h = _.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Ya || D(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            }, j = h.promise({
                elem: a,
                props: _.extend({}, b),
                opts: _.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ya || D(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = _.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (H(k, j.opts.specialEasing); g > f; f++)
            if (d = bb[f].call(j, a, k, j.opts)) return d;
        return _.map(k, F, j), _.isFunction(j.opts.start) && j.opts.start.call(a, j), _.fx.timer(_.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    function J(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(na) || [];
            if (_.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function K(a, b, c, d) {
        function e(h) {
            var i;
            return f[h] = !0, _.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
            }), i
        }
        var f = {}, g = a === tb;
        return e(b.dataTypes[0]) || !f["*"] && e("*")
    }

    function L(a, b) {
        var c, d, e = _.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && _.extend(!0, a, d), a
    }

    function M(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes;
             "*" === i[0];) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function N(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f;)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
                    if (g = j[i + " " + f] || j["* " + f], !g)
                        for (e in j)
                            if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                                break
                            }
                    if (g !== !0)
                        if (g && a["throws"]) b = g(b);
                        else try {
                            b = g(b)
                        } catch (l) {
                            return {
                                state: "parsererror",
                                error: g ? l : "No conversion from " + i + " to " + f
                            }
                        }
                }
        return {
            state: "success",
            data: b
        }
    }

    function O(a, b, c, d) {
        var e;
        if (_.isArray(b)) _.each(b, function(b, e) {
            c || yb.test(a) ? d(a, e) : O(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== _.type(b)) d(a, b);
        else
            for (e in b) O(a + "[" + e + "]", b[e], c, d)
    }

    function P(a) {
        return _.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var Q = [],
        R = Q.slice,
        S = Q.concat,
        T = Q.push,
        U = Q.indexOf,
        V = {}, W = V.toString,
        X = V.hasOwnProperty,
        Y = {}, Z = a.document,
        $ = "2.1.3",
        _ = function(a, b) {
            return new _.fn.init(a, b)
        }, aa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ba = /^-ms-/,
        ca = /-([\da-z])/gi,
        da = function(a, b) {
            return b.toUpperCase()
        };
    _.fn = _.prototype = {
        jquery: $,
        constructor: _,
        selector: "",
        length: 0,
        toArray: function() {
            return R.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : R.call(this)
        },
        pushStack: function(a) {
            var b = _.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return _.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(_.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(R.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: T,
        sort: Q.sort,
        splice: Q.splice
    }, _.extend = _.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || _.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (_.isPlainObject(d) || (e = _.isArray(d))) ? (e ? (e = !1, f = c && _.isArray(c) ? c : []) : f = c && _.isPlainObject(c) ? c : {}, g[b] = _.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, _.extend({
        expando: "jQuery" + ($ + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === _.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return !_.isArray(a) && a - parseFloat(a) + 1 >= 0
        },
        isPlainObject: function(a) {
            return "object" !== _.type(a) || a.nodeType || _.isWindow(a) ? !1 : a.constructor && !X.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? V[W.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = _.trim(a), a && (1 === a.indexOf("use strict") ? (b = Z.createElement("script"), b.text = a, Z.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(ba, "ms-").replace(ca, da)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a);
            if (d) {
                if (h)
                    for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.apply(a[f], d), e === !1) break
            } else if (h)
                for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
            else
                for (f in a)
                    if (e = b.call(a[f], f, a[f]), e === !1) break; return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(aa, "")
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? _.merge(d, "string" == typeof a ? [a] : a) : T.call(d, a)), d
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : U.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, d) {
            var e, f = 0,
                g = a.length,
                h = c(a),
                i = [];
            if (h)
                for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
            else
                for (f in a) e = b(a[f], f, d), null != e && i.push(e);
            return S.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, e;
            return "string" == typeof b && (c = a[b], b = a, a = c), _.isFunction(a) ? (d = R.call(arguments, 2), e = function() {
                return a.apply(b || this, d.concat(R.call(arguments)))
            }, e.guid = a.guid = a.guid || _.guid++, e) : void 0
        },
        now: Date.now,
        support: Y
    }), _.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        V["[object " + b + "]"] = b.toLowerCase()
    });
    var ea = function(a) {
        function b(a, b, c, d) {
            var e, f, g, h, i, j, l, n, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
            if (!d && I) {
                if (11 !== h && (e = sa.exec(a)))
                    if (g = e[1]) {
                        if (9 === h) {
                            if (f = b.getElementById(g), !f || !f.parentNode) return c;
                            if (f.id === g) return c.push(f), c
                        } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
                    } else {
                        if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
                        if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
                    }
                if (v.qsa && (!J || !J.test(a))) {
                    if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                        o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                    }
                    if (p) try {
                        return $.apply(c, o.querySelectorAll(p)), c
                    } catch (q) {} finally {
                        l || b.removeAttribute("id")
                    }
                }
            }
            return B(a.replace(ia, "$1"), b, c, d)
        }

        function c() {
            function a(c, d) {
                return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            return a[N] = !0, a
        }

        function e(a) {
            var b = G.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function j(a) {
            return d(function(b) {
                return b = +b, d(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function k(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        function l() {}

        function m(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function n(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = Q++;
            return b.first ? function(b, c, f) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [P, f];
                if (g) {
                    for (; b = b[d];)
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) {
                            if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function o(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--;)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function p(a, c, d) {
            for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
            return d
        }

        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function r(a, b, c, e, f, g) {
            return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    r = d || p(b || "*", h.nodeType ? [h] : h, []),
                    s = !a || !d && b ? r : q(r, m, a, h, i),
                    t = c ? f || (d ? a : o || e) ? [] : g : s;
                if (c && c(s, t, h, i), e)
                    for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                if (d) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                            f(null, t = [], j, i)
                        }
                        for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                    }
                } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
            })
        }

        function s(a) {
            for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
                return a === b
            }, g, !0), j = n(function(a) {
                return aa(b, a) > -1
            }, g, !0), k = [
                function(a, c, d) {
                    var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
                    return b = null, e
                }
            ]; e > h; h++)
                if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                else {
                    if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                        for (d = ++h; e > d && !w.relative[a[d].type]; d++);
                        return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
                                value: " " === a[h - 2].type ? "*" : ""
                            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
                    }
                    k.push(c)
                }
            return o(k)
        }

        function t(a, c) {
            var e = c.length > 0,
                f = a.length > 0,
                g = function(d, g, h, i, j) {
                    var k, l, m, n = 0,
                        o = "0",
                        p = d && [],
                        r = [],
                        s = C,
                        t = d || f && w.find.TAG("*", j),
                        u = P += null == s ? 1 : Math.random() || .1,
                        v = t.length;
                    for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                        if (f && k) {
                            for (l = 0; m = a[l++];)
                                if (m(k, g, h)) {
                                    i.push(k);
                                    break
                                }
                            j && (P = u)
                        }
                        e && ((k = !m && k) && n--, d && p.push(k))
                    }
                    if (n += o, e && o !== n) {
                        for (l = 0; m = c[l++];) m(p, r, g, h);
                        if (d) {
                            if (n > 0)
                                for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                            r = q(r)
                        }
                        $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                    }
                    return j && (P = u, C = s), p
                };
            return e ? d(g) : g
        }
        var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
            O = a.document,
            P = 0,
            Q = 0,
            R = c(),
            S = c(),
            T = c(),
            U = function(a, b) {
                return a === b && (E = !0), 0
            }, V = 1 << 31,
            W = {}.hasOwnProperty,
            X = [],
            Y = X.pop,
            Z = X.push,
            $ = X.push,
            _ = X.slice,
            aa = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            }, ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ca = "[\\x20\\t\\r\\n\\f]",
            da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            ea = da.replace("w", "w#"),
            fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
            ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
            ha = new RegExp(ca + "+", "g"),
            ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
            ja = new RegExp("^" + ca + "*," + ca + "*"),
            ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
            la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
            ma = new RegExp(ga),
            na = new RegExp("^" + ea + "$"),
            oa = {
                ID: new RegExp("^#(" + da + ")"),
                CLASS: new RegExp("^\\.(" + da + ")"),
                TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + fa),
                PSEUDO: new RegExp("^" + ga),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + ba + ")$", "i"),
                needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
            }, pa = /^(?:input|select|textarea|button)$/i,
            qa = /^h\d$/i,
            ra = /^[^{]+\{\s*\[native \w/,
            sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ta = /[+~]/,
            ua = /'|\\/g,
            va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
            wa = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, xa = function() {
                F()
            };
        try {
            $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
        } catch (ya) {
            $ = {
                apply: X.length ? function(a, b) {
                    Z.apply(a, _.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++];);
                    a.length = c - 1
                }
            }
        }
        v = b.support = {}, y = b.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, F = b.setDocument = function(a) {
            var b, c, d = a ? a.ownerDocument || a : O;
            return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), v.getElementsByTagName = e(function(a) {
                return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
            }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) {
                return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
            }), v.getById ? (w.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete w.find.ID, w.filter.ID = function(a) {
                var b = a.replace(va, wa);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = f[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
                    return I ? b.getElementsByClassName(a) : void 0
                }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) {
                H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
            }), e(function(a) {
                var b = d.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
            })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
                v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
            }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            }, U = b ? function(a, b) {
                if (a === b) return E = !0, 0;
                var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
            } : function(a, b) {
                if (a === b) return E = !0, 0;
                var c, e = 0,
                    f = a.parentNode,
                    h = b.parentNode,
                    i = [a],
                    j = [b];
                if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                if (f === h) return g(a, b);
                for (c = a; c = c.parentNode;) i.unshift(c);
                for (c = b; c = c.parentNode;) j.unshift(c);
                for (; i[e] === j[e];) e++;
                return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
            }, d) : G
        }, b.matches = function(a, c) {
            return b(a, null, null, c)
        }, b.matchesSelector = function(a, c) {
            if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
                var d = L.call(a, c);
                if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return b(c, G, null, [a]).length > 0
        }, b.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b)
        }, b.attr = function(a, b) {
            (a.ownerDocument || a) !== G && F(a);
            var c = w.attrHandle[b.toLowerCase()],
                d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
            return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }, b.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            return D = null, a
        }, x = b.getText = function(a) {
            var b, c = "",
                d = 0,
                e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
                } else if (3 === e || 4 === e) return a.nodeValue
            } else
                for (; b = a[d++];) c += x(b);
            return c
        }, w = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: oa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(va, wa).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        var f = b.attr(e, a);
                        return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                for (; p;) {
                                    for (l = b; l = l[p];)
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [P, n, m];
                                        break
                                    }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                            else
                                for (;
                                    (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, c) {
                    var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
                    }) : function(a) {
                        return f(a, 0, e)
                    }) : f
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = A(a.replace(ia, "$1"));
                    return e[N] ? d(function(a, b, c, d) {
                        for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, d, f) {
                        return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return b(a, c).length > 0
                    }
                }),
                contains: d(function(a) {
                    return a = a.replace(va, wa),
                        function(b) {
                            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
                        }
                }),
                lang: d(function(a) {
                    return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === H
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !! (a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !! a.checked || "option" === b && !! a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !w.pseudos.empty(a)
                },
                header: function(a) {
                    return qa.test(a.nodeName)
                },
                input: function(a) {
                    return pa.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: j(function() {
                    return [0]
                }),
                last: j(function(a, b) {
                    return [b - 1]
                }),
                eq: j(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: j(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: j(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: j(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (u in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) w.pseudos[u] = h(u);
        for (u in {
            submit: !0,
            reset: !0
        }) w.pseudos[u] = i(u);
        return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return c ? 0 : k.slice(0);
            for (h = a, i = [], j = w.preFilter; h;) {
                (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(ia, " ")
                }), h = h.slice(d.length));
                for (g in w.filter)!(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break
            }
            return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
        }, A = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = T[a + " "];
            if (!f) {
                for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d)), f.selector = a
            }
            return f
        }, B = b.select = function(a, b, c, d) {
            var e, f, g, h, i, j = "function" == typeof a && a,
                l = !d && z(a = j.selector || a);
            if (c = c || [], 1 === l.length) {
                if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                    if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                    j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                }
                for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                    if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
                        if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
                        break
                    }
            }
            return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
        }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !! E,
            F(), v.sortDetached = e(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"))
        }), e(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), v.attributes && e(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f(ba, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), b
    }(a);
    _.find = ea, _.expr = ea.selectors, _.expr[":"] = _.expr.pseudos, _.unique = ea.uniqueSort, _.text = ea.getText, _.isXMLDoc = ea.isXML, _.contains = ea.contains;
    var fa = _.expr.match.needsContext,
        ga = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ha = /^.[^:#\[\.,]*$/;
    _.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? _.find.matchesSelector(d, a) ? [d] : [] : _.find.matches(a, _.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, _.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(_(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (_.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) _.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? _.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(d(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(d(this, a || [], !0))
        },
        is: function(a) {
            return !!d(this, "string" == typeof a && fa.test(a) ? _(a) : a || [], !1).length
        }
    });
    var ia, ja = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        ka = _.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : ja.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || ia).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof _ ? b[0] : b, _.merge(this, _.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : Z, !0)), ga.test(c[1]) && _.isPlainObject(b))
                        for (c in b) _.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = Z.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = Z, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : _.isFunction(a) ? "undefined" != typeof ia.ready ? ia.ready(a) : a(_) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), _.makeArray(a, this))
        };
    ka.prototype = _.fn, ia = _(Z);
    var la = /^(?:parents|prev(?:Until|All))/,
        ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    _.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                 (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && _(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), _.fn.extend({
        has: function(a) {
            var b = _(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (_.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = fa.test(a) || "string" != typeof a ? _(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && _.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? _.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? U.call(_(a), this[0]) : U.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(_.unique(_.merge(this.get(), _(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    }), _.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return _.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return _.dir(a, "parentNode", c)
        },
        next: function(a) {
            return e(a, "nextSibling")
        },
        prev: function(a) {
            return e(a, "previousSibling")
        },
        nextAll: function(a) {
            return _.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return _.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return _.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return _.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return _.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return _.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || _.merge([], a.childNodes)
        }
    }, function(a, b) {
        _.fn[a] = function(c, d) {
            var e = _.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = _.filter(d, e)), this.length > 1 && (ma[a] || _.unique(e), la.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var na = /\S+/g,
        oa = {};
    _.Callbacks = function(a) {
        a = "string" == typeof a ? oa[a] || f(a) : _.extend({}, a);
        var b, c, d, e, g, h, i = [],
            j = !a.once && [],
            k = function(f) {
                for (b = a.memory && f, c = !0, h = e || 0, e = 0, g = i.length, d = !0; i && g > h; h++)
                    if (i[h].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, i && (j ? j.length && k(j.shift()) : b ? i = [] : l.disable())
            }, l = {
                add: function() {
                    if (i) {
                        var c = i.length;
                        ! function f(b) {
                            _.each(b, function(b, c) {
                                var d = _.type(c);
                                "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c)
                            })
                        }(arguments), d ? g = i.length : b && (e = c, k(b))
                    }
                    return this
                },
                remove: function() {
                    return i && _.each(arguments, function(a, b) {
                        for (var c;
                             (c = _.inArray(b, i, c)) > -1;) i.splice(c, 1), d && (g >= c && g--, h >= c && h--)
                    }), this
                },
                has: function(a) {
                    return a ? _.inArray(a, i) > -1 : !(!i || !i.length)
                },
                empty: function() {
                    return i = [], g = 0, this
                },
                disable: function() {
                    return i = j = b = void 0, this
                },
                disabled: function() {
                    return !i
                },
                lock: function() {
                    return j = void 0, b || l.disable(), this
                },
                locked: function() {
                    return !j
                },
                fireWith: function(a, b) {
                    return !i || c && !j || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? j.push(b) : k(b)), this
                },
                fire: function() {
                    return l.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return l
    }, _.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", _.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", _.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", _.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return _.Deferred(function(c) {
                            _.each(b, function(b, f) {
                                var g = _.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && _.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? _.extend(a, d) : d
                    }
                }, e = {};
            return d.pipe = d.then, _.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b, c, d, e = 0,
                f = R.call(arguments),
                g = f.length,
                h = 1 !== g || a && _.isFunction(a.promise) ? g : 0,
                i = 1 === h ? a : _.Deferred(),
                j = function(a, c, d) {
                    return function(e) {
                        c[a] = this, d[a] = arguments.length > 1 ? R.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
                    }
                };
            if (g > 1)
                for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && _.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise()
        }
    });
    var pa;
    _.fn.ready = function(a) {
        return _.ready.promise().done(a), this
    }, _.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? _.readyWait++ : _.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --_.readyWait : _.isReady) || (_.isReady = !0, a !== !0 && --_.readyWait > 0 || (pa.resolveWith(Z, [_]), _.fn.triggerHandler && (_(Z).triggerHandler("ready"), _(Z).off("ready"))))
        }
    }), _.ready.promise = function(b) {
        return pa || (pa = _.Deferred(), "complete" === Z.readyState ? setTimeout(_.ready) : (Z.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1))), pa.promise(b)
    }, _.ready.promise();
    var qa = _.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === _.type(c)) {
            e = !0;
            for (h in c) _.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, _.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(_(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    _.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    }, h.uid = 1, h.accepts = _.acceptData, h.prototype = {
        key: function(a) {
            if (!h.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = h.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, _.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (_.isEmptyObject(f)) _.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, _.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                _.isArray(b) ? d = b.concat(b.map(_.camelCase)) : (e = _.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(na) || [])), c = d.length;
                for (; c--;) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !_.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var ra = new h,
        sa = new h,
        ta = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ua = /([A-Z])/g;
    _.extend({
        hasData: function(a) {
            return sa.hasData(a) || ra.hasData(a)
        },
        data: function(a, b, c) {
            return sa.access(a, b, c)
        },
        removeData: function(a, b) {
            sa.remove(a, b)
        },
        _data: function(a, b, c) {
            return ra.access(a, b, c)
        },
        _removeData: function(a, b) {
            ra.remove(a, b)
        }
    }), _.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = sa.get(f), 1 === f.nodeType && !ra.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = _.camelCase(d.slice(5)), i(f, d, e[d])));
                    ra.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                sa.set(this, a)
            }) : qa(this, function(b) {
                var c, d = _.camelCase(a);
                if (f && void 0 === b) {
                    if (c = sa.get(f, a), void 0 !== c) return c;
                    if (c = sa.get(f, d), void 0 !== c) return c;
                    if (c = i(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = sa.get(this, d);
                    sa.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && sa.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                sa.remove(this, a)
            })
        }
    }), _.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = ra.get(a, b), c && (!d || _.isArray(c) ? d = ra.access(a, b, _.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = _.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = _._queueHooks(a, b),
                g = function() {
                    _.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return ra.get(a, c) || ra.access(a, c, {
                    empty: _.Callbacks("once memory").add(function() {
                        ra.remove(a, [b + "queue", c])
                    })
                })
        }
    }), _.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? _.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = _.queue(this, a, b);
                _._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && _.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                _.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = _.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ra.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var va = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        wa = ["Top", "Right", "Bottom", "Left"],
        xa = function(a, b) {
            return a = b || a, "none" === _.css(a, "display") || !_.contains(a.ownerDocument, a)
        }, ya = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = Z.createDocumentFragment(),
            b = a.appendChild(Z.createElement("div")),
            c = Z.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), Y.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", Y.noCloneChecked = !! b.cloneNode(!0).lastChild.defaultValue
    }();
    var za = "undefined";
    Y.focusinBubbles = "onfocusin" in a;
    var Aa = /^key/,
        Ba = /^(?:mouse|pointer|contextmenu)|click/,
        Ca = /^(?:focusinfocus|focusoutblur)$/,
        Da = /^([^.]*)(?:\.(.+)|)$/;
    _.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.get(a);
            if (q)
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = _.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function(b) {
                    return typeof _ !== za && _.event.triggered !== b.type ? _.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(na) || [""], j = b.length; j--;) h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = _.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = _.event.special[n] || {}, k = _.extend({
                    type: n,
                    origType: p,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && _.expr.match.needsContext.test(e),
                    namespace: o.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), _.event.global[n] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = ra.hasData(a) && ra.get(a);
            if (q && (i = q.events)) {
                for (b = (b || "").match(na) || [""], j = b.length; j--;)
                    if (h = Da.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                        for (l = _.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--;) k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || _.removeEvent(a, n, q.handle), delete i[n])
                    } else
                        for (n in i) _.event.remove(a, n + b[j], c, d, !0);
                _.isEmptyObject(i) && (delete q.handle, ra.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, j, k, l, m = [d || Z],
                n = X.call(b, "type") ? b.type : b,
                o = X.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || Z, 3 !== d.nodeType && 8 !== d.nodeType && !Ca.test(n + _.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), j = n.indexOf(":") < 0 && "on" + n, b = b[_.expando] ? b : new _.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : _.makeArray(c, [b]), l = _.event.special[n] || {}, e || !l.trigger || l.trigger.apply(d, c) !== !1)) {
                if (!e && !l.noBubble && !_.isWindow(d)) {
                    for (i = l.delegateType || n, Ca.test(i + n) || (g = g.parentNode); g; g = g.parentNode) m.push(g), h = g;
                    h === (d.ownerDocument || Z) && m.push(h.defaultView || h.parentWindow || a)
                }
                for (f = 0;
                     (g = m[f++]) && !b.isPropagationStopped();) b.type = f > 1 ? i : l.bindType || n, k = (ra.get(g, "events") || {})[b.type] && ra.get(g, "handle"), k && k.apply(g, c), k = j && g[j], k && k.apply && _.acceptData(g) && (b.result = k.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = n, e || b.isDefaultPrevented() || l._default && l._default.apply(m.pop(), c) !== !1 || !_.acceptData(d) || j && _.isFunction(d[n]) && !_.isWindow(d) && (h = d[j], h && (d[j] = null), _.event.triggered = n, d[n](), _.event.triggered = void 0, h && (d[j] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = _.event.fix(a);
            var b, c, d, e, f, g = [],
                h = R.call(arguments),
                i = (ra.get(this, "events") || {})[a.type] || [],
                j = _.event.special[a.type] || {};
            if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                for (g = _.event.handlers.call(this, a, i), b = 0;
                     (e = g[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem, c = 0;
                         (f = e.handlers[c++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(f.namespace)) && (a.handleObj = f, a.data = f.data, d = ((_.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return j.postDispatch && j.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? _(e, this).index(i) >= 0 : _.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || Z, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[_.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Ba.test(e) ? this.mouseHooks : Aa.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new _.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
            return a.target || (a.target = Z), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== l() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === l() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && _.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return _.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = _.extend(new _.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? _.event.trigger(e, null, b) : _.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, _.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, _.Event = function(a, b) {
        return this instanceof _.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? j : k) : this.type = a, b && _.extend(this, b), this.timeStamp = a && a.timeStamp || _.now(), void(this[_.expando] = !0)) : new _.Event(a, b)
    }, _.Event.prototype = {
        isDefaultPrevented: k,
        isPropagationStopped: k,
        isImmediatePropagationStopped: k,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = j, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = j, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = j, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, _.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        _.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !_.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), Y.focusinBubbles || _.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            _.event.simulate(b, a.target, _.event.fix(a), !0)
        };
        _.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b);
                e || d.addEventListener(a, c, !0), ra.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = ra.access(d, b) - 1;
                e ? ra.access(d, b, e) : (d.removeEventListener(a, c, !0), ra.remove(d, b))
            }
        }
    }), _.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = k;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return _().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = _.guid++)), this.each(function() {
                _.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, _(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = k), this.each(function() {
                _.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                _.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? _.event.trigger(a, b, c, !0) : void 0
        }
    });
    var Ea = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Fa = /<([\w:]+)/,
        Ga = /<|&#?\w+;/,
        Ha = /<(?:script|style|link)/i,
        Ia = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ja = /^$|\/(?:java|ecma)script/i,
        Ka = /^true\/(.*)/,
        La = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Ma = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Ma.optgroup = Ma.option, Ma.tbody = Ma.tfoot = Ma.colgroup = Ma.caption = Ma.thead, Ma.th = Ma.td, _.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = _.contains(a.ownerDocument, a);
            if (!(Y.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || _.isXMLDoc(a)))
                for (g = r(h), f = r(a), d = 0, e = f.length; e > d; d++) s(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || r(a), g = g || r(h), d = 0, e = f.length; e > d; d++) q(f[d], g[d]);
                else q(a, h);
            return g = r(h, "script"), g.length > 0 && p(g, !i && r(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === _.type(e)) _.merge(l, e.nodeType ? [e] : e);
                    else if (Ga.test(e)) {
                        for (f = f || k.appendChild(b.createElement("div")), g = (Fa.exec(e) || ["", ""])[1].toLowerCase(), h = Ma[g] || Ma._default, f.innerHTML = h[1] + e.replace(Ea, "<$1></$2>") + h[2], j = h[0]; j--;) f = f.lastChild;
                        _.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
                    } else l.push(b.createTextNode(e));
            for (k.textContent = "", m = 0; e = l[m++];)
                if ((!d || -1 === _.inArray(e, d)) && (i = _.contains(e.ownerDocument, e), f = r(k.appendChild(e), "script"), i && p(f), c))
                    for (j = 0; e = f[j++];) Ja.test(e.type || "") && c.push(e);
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = _.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (_.acceptData(c) && (e = c[ra.expando], e && (b = ra.cache[e]))) {
                    if (b.events)
                        for (d in b.events) f[d] ? _.event.remove(c, d) : _.removeEvent(c, d, b.handle);
                    ra.cache[e] && delete ra.cache[e]
                }
                delete sa.cache[c[sa.expando]]
            }
        }
    }), _.fn.extend({
        text: function(a) {
            return qa(this, function(a) {
                return void 0 === a ? _.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = m(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? _.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || _.cleanData(r(c)), c.parentNode && (b && _.contains(c.ownerDocument, c) && p(r(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (_.cleanData(r(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return _.clone(this, a, b)
            })
        },
        html: function(a) {
            return qa(this, function(a) {
                var b = this[0] || {}, c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !Ha.test(a) && !Ma[(Fa.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Ea, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (_.cleanData(r(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, _.cleanData(r(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = S.apply([], a);
            var c, d, e, f, g, h, i = 0,
                j = this.length,
                k = this,
                l = j - 1,
                m = a[0],
                p = _.isFunction(m);
            if (p || j > 1 && "string" == typeof m && !Y.checkClone && Ia.test(m)) return this.each(function(c) {
                var d = k.eq(c);
                p && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
            });
            if (j && (c = _.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (e = _.map(r(c, "script"), n), f = e.length; j > i; i++) g = c, i !== l && (g = _.clone(g, !0, !0), f && _.merge(e, r(g, "script"))), b.call(this[i], g, i);
                if (f)
                    for (h = e[e.length - 1].ownerDocument, _.map(e, o), i = 0; f > i; i++) g = e[i], Ja.test(g.type || "") && !ra.access(g, "globalEval") && _.contains(h, g) && (g.src ? _._evalUrl && _._evalUrl(g.src) : _.globalEval(g.textContent.replace(La, "")))
            }
            return this
        }
    }), _.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        _.fn[a] = function(a) {
            for (var c, d = [], e = _(a), f = e.length - 1, g = 0; f >= g; g++) c = g === f ? this : this.clone(!0), _(e[g])[b](c), T.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var Na, Oa = {}, Pa = /^margin/,
        Qa = new RegExp("^(" + va + ")(?!px)[a-z%]+$", "i"),
        Ra = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
    ! function() {
        function b() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", g.innerHTML = "", e.appendChild(f);
            var b = a.getComputedStyle(g, null);
            c = "1%" !== b.top, d = "4px" === b.width, e.removeChild(f)
        }
        var c, d, e = Z.documentElement,
            f = Z.createElement("div"),
            g = Z.createElement("div");
        g.style && (g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", Y.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", f.appendChild(g), a.getComputedStyle && _.extend(Y, {
            pixelPosition: function() {
                return b(), c
            },
            boxSizingReliable: function() {
                return null == d && b(), d
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(Z.createElement("div"));
                return c.style.cssText = g.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.removeChild(c), b
            }
        }))
    }(), _.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Sa = /^(none|table(?!-c[ea]).+)/,
        Ta = new RegExp("^(" + va + ")(.*)$", "i"),
        Ua = new RegExp("^([+-])=(" + va + ")", "i"),
        Va = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }, Wa = {
            letterSpacing: "0",
            fontWeight: "400"
        }, Xa = ["Webkit", "O", "Moz", "ms"];
    _.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = v(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = _.camelCase(b),
                    i = a.style;
                return b = _.cssProps[h] || (_.cssProps[h] = x(i, h)), g = _.cssHooks[b] || _.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Ua.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(_.css(a, b)), f = "number"), void(null != c && c === c && ("number" !== f || _.cssNumber[h] || (c += "px"), Y.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))))
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = _.camelCase(b);
            return b = _.cssProps[h] || (_.cssProps[h] = x(a.style, h)), g = _.cssHooks[b] || _.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = v(a, b, d)), "normal" === e && b in Wa && (e = Wa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || _.isNumeric(f) ? f || 0 : e) : e
        }
    }), _.each(["height", "width"], function(a, b) {
        _.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Sa.test(_.css(a, "display")) && 0 === a.offsetWidth ? _.swap(a, Va, function() {
                    return A(a, b, d)
                }) : A(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return y(a, c, d ? z(a, b, d, "border-box" === _.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), _.cssHooks.marginRight = w(Y.reliableMarginRight, function(a, b) {
        return b ? _.swap(a, {
            display: "inline-block"
        }, v, [a, "marginRight"]) : void 0
    }), _.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        _.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + wa[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Pa.test(a) || (_.cssHooks[a + b].set = y)
    }), _.fn.extend({
        css: function(a, b) {
            return qa(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (_.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = _.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? _.style(a, b, c) : _.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return B(this, !0)
        },
        hide: function() {
            return B(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                xa(this) ? _(this).show() : _(this).hide()
            })
        }
    }), _.Tween = C, C.prototype = {
        constructor: C,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (_.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = C.propHooks[this.prop];
            return a && a.get ? a.get(this) : C.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = C.propHooks[this.prop];
            return this.pos = b = this.options.duration ? _.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : C.propHooks._default.set(this), this
        }
    }, C.prototype.init.prototype = C.prototype, C.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = _.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                _.fx.step[a.prop] ? _.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[_.cssProps[a.prop]] || _.cssHooks[a.prop]) ? _.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, C.propHooks.scrollTop = C.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, _.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, _.fx = C.prototype.init, _.fx.step = {};
    var Ya, Za, $a = /^(?:toggle|show|hide)$/,
        _a = new RegExp("^(?:([+-])=|)(" + va + ")([a-z%]*)$", "i"),
        ab = /queueHooks$/,
        bb = [G],
        cb = {
            "*": [
                function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = _a.exec(b),
                        f = e && e[3] || (_.cssNumber[a] ? "" : "px"),
                        g = (_.cssNumber[a] || "px" !== f && +d) && _a.exec(_.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, _.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }
            ]
        };
    _.Animation = _.extend(I, {
        tweener: function(a, b) {
            _.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], cb[c] = cb[c] || [], cb[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? bb.unshift(a) : bb.push(a)
        }
    }), _.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? _.extend({}, a) : {
            complete: c || !c && b || _.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !_.isFunction(b) && b
        };
        return d.duration = _.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in _.fx.speeds ? _.fx.speeds[d.duration] : _.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            _.isFunction(d.old) && d.old.call(this), d.queue && _.dequeue(this, d.queue)
        }, d
    }, _.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(xa).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a, b, c, d) {
            var e = _.isEmptyObject(a),
                f = _.speed(b, c, d),
                g = function() {
                    var b = I(this, _.extend({}, a), f);
                    (e || ra.get(this, "finish")) && b.stop(!0)
                };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = _.timers,
                    g = ra.get(this);
                if (e) g[e] && g[e].stop && d(g[e]);
                else
                    for (e in g) g[e] && g[e].stop && ab.test(e) && d(g[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && _.dequeue(this, a)
            })
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = ra.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = _.timers,
                    g = d ? d.length : 0;
                for (c.finish = !0, _.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), _.each(["toggle", "show", "hide"], function(a, b) {
        var c = _.fn[b];
        _.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    }), _.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        _.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), _.timers = [], _.fx.tick = function() {
        var a, b = 0,
            c = _.timers;
        for (Ya = _.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || _.fx.stop(), Ya = void 0
    }, _.fx.timer = function(a) {
        _.timers.push(a), a() ? _.fx.start() : _.timers.pop()
    }, _.fx.interval = 13, _.fx.start = function() {
        Za || (Za = setInterval(_.fx.tick, _.fx.interval))
    }, _.fx.stop = function() {
        clearInterval(Za), Za = null
    }, _.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, _.fn.delay = function(a, b) {
        return a = _.fx ? _.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    },
        function() {
            var a = Z.createElement("input"),
                b = Z.createElement("select"),
                c = b.appendChild(Z.createElement("option"));
            a.type = "checkbox", Y.checkOn = "" !== a.value, Y.optSelected = c.selected, b.disabled = !0, Y.optDisabled = !c.disabled, a = Z.createElement("input"), a.value = "t", a.type = "radio", Y.radioValue = "t" === a.value
        }();
    var db, eb, fb = _.expr.attrHandle;
    _.fn.extend({
        attr: function(a, b) {
            return qa(this, _.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                _.removeAttr(this, a)
            })
        }
    }), _.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === za ? _.prop(a, b, c) : (1 === f && _.isXMLDoc(a) || (b = b.toLowerCase(), d = _.attrHooks[b] || (_.expr.match.bool.test(b) ? eb : db)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = _.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void _.removeAttr(a, b)) : void 0
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(na);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = _.propFix[c] || c, _.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!Y.radioValue && "radio" === b && _.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), eb = {
        set: function(a, b, c) {
            return b === !1 ? _.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, _.each(_.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = fb[b] || _.find.attr;
        fb[b] = function(a, b, d) {
            var e, f;
            return d || (f = fb[b], fb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, fb[b] = f), e
        }
    });
    var gb = /^(?:input|select|textarea|button)$/i;
    _.fn.extend({
        prop: function(a, b) {
            return qa(this, _.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[_.propFix[a] || a]
            })
        }
    }), _.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !_.isXMLDoc(a), f && (b = _.propFix[b] || b, e = _.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || gb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), Y.optSelected || (_.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        _.propFix[this.toLowerCase()] = this
    });
    var hb = /[\t\r\n\f]/g;
    _.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : " ")) {
                        for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = _.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (_.isFunction(a)) return this.each(function(b) {
                _(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(na) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(hb, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                        g = a ? _.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(_.isFunction(a) ? function(c) {
                _(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c)
                    for (var b, d = 0, e = _(this), f = a.match(na) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else(c === za || "boolean" === c) && (this.className && ra.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ra.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(hb, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var ib = /\r/g;
    _.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = _.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, _(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : _.isArray(e) && (e = _.map(e, function(a) {
                    return null == a ? "" : a + ""
                })), b = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
            })) : e ? (b = _.valHooks[e.type] || _.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ib, "") : null == c ? "" : c)) : void 0
        }
    }), _.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = _.find.attr(a, "value");
                    return null != b ? b : _.trim(_.text(a))
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (Y.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && _.nodeName(c.parentNode, "optgroup"))) {
                            if (b = _(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = _.makeArray(b), g = e.length; g--;) d = e[g], (d.selected = _.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), _.each(["radio", "checkbox"], function() {
        _.valHooks[this] = {
            set: function(a, b) {
                return _.isArray(b) ? a.checked = _.inArray(_(a).val(), b) >= 0 : void 0
            }
        }, Y.checkOn || (_.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), _.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        _.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), _.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var jb = _.now(),
        kb = /\?/;
    _.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, _.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && _.error("Invalid XML: " + a), b
    };
    var lb = /#.*$/,
        mb = /([?&])_=[^&]*/,
        nb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        ob = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        pb = /^(?:GET|HEAD)$/,
        qb = /^\/\//,
        rb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        sb = {}, tb = {}, ub = "*/".concat("*"),
        vb = a.location.href,
        wb = rb.exec(vb.toLowerCase()) || [];
    _.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vb,
            type: "GET",
            isLocal: ob.test(wb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": _.parseJSON,
                "text xml": _.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? L(L(a, _.ajaxSettings), b) : L(_.ajaxSettings, a)
        },
        ajaxPrefilter: J(sb),
        ajaxTransport: J(tb),
        ajax: function(a, b) {
            function c(a, b, c, g) {
                var i, k, r, s, u, w = b;
                2 !== t && (t = 2, h && clearTimeout(h), d = void 0, f = g || "", v.readyState = a > 0 ? 4 : 0, i = a >= 200 && 300 > a || 304 === a, c && (s = M(l, v, c)), s = N(l, s, v, i), i ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (_.lastModified[e] = u), u = v.getResponseHeader("etag"), u && (_.etag[e] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, i = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", i ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, j && n.trigger(i ? "ajaxSuccess" : "ajaxError", [v, l, i ? k : r]), p.fireWith(m, [v, w]), j && (n.trigger("ajaxComplete", [v, l]), --_.active || _.event.trigger("ajaxStop")))
            }
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var d, e, f, g, h, i, j, k, l = _.ajaxSetup({}, b),
                m = l.context || l,
                n = l.context && (m.nodeType || m.jquery) ? _(m) : _.event,
                o = _.Deferred(),
                p = _.Callbacks("once memory"),
                q = l.statusCode || {}, r = {}, s = {}, t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!g)
                                for (g = {}; b = nb.exec(f);) g[b[1].toLowerCase()] = b[2];
                            b = g[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return d && d.abort(b), c(0, b), this
                    }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || vb) + "").replace(lb, "").replace(qb, wb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = _.trim(l.dataType || "*").toLowerCase().match(na) || [""], null == l.crossDomain && (i = rb.exec(l.url.toLowerCase()), l.crossDomain = !(!i || i[1] === wb[1] && i[2] === wb[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (wb[3] || ("http:" === wb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = _.param(l.data, l.traditional)), K(sb, l, b, v), 2 === t) return v;
            j = _.event && l.global, j && 0 === _.active++ && _.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !pb.test(l.type), e = l.url, l.hasContent || (l.data && (e = l.url += (kb.test(e) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = mb.test(e) ? e.replace(mb, "$1_=" + jb++) : e + (kb.test(e) ? "&" : "?") + "_=" + jb++)), l.ifModified && (_.lastModified[e] && v.setRequestHeader("If-Modified-Since", _.lastModified[e]), _.etag[e] && v.setRequestHeader("If-None-Match", _.etag[e])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : l.accepts["*"]);
            for (k in l.headers) v.setRequestHeader(k, l.headers[k]);
            if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (k in {
                success: 1,
                error: 1,
                complete: 1
            }) v[k](l[k]);
            if (d = K(tb, l, b, v)) {
                v.readyState = 1, j && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
                    v.abort("timeout")
                }, l.timeout));
                try {
                    t = 1, d.send(r, c)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    c(-1, w)
                }
            } else c(-1, "No Transport");
            return v
        },
        getJSON: function(a, b, c) {
            return _.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return _.get(a, void 0, b, "script")
        }
    }), _.each(["get", "post"], function(a, b) {
        _[b] = function(a, c, d, e) {
            return _.isFunction(c) && (e = e || d, d = c, c = void 0), _.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), _._evalUrl = function(a) {
        return _.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, _.fn.extend({
        wrapAll: function(a) {
            var b;
            return _.isFunction(a) ? this.each(function(b) {
                _(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = _(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a = this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(_.isFunction(a) ? function(b) {
                _(this).wrapInner(a.call(this, b))
            } : function() {
                var b = _(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = _.isFunction(a);
            return this.each(function(c) {
                _(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                _.nodeName(this, "body") || _(this).replaceWith(this.childNodes)
            }).end()
        }
    }), _.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, _.expr.filters.visible = function(a) {
        return !_.expr.filters.hidden(a)
    };
    var xb = /%20/g,
        yb = /\[\]$/,
        zb = /\r?\n/g,
        Ab = /^(?:submit|button|image|reset|file)$/i,
        Bb = /^(?:input|select|textarea|keygen)/i;
    _.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = _.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = _.ajaxSettings && _.ajaxSettings.traditional), _.isArray(a) || a.jquery && !_.isPlainObject(a)) _.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) O(c, a[c], b, e);
        return d.join("&").replace(xb, "+")
    }, _.fn.extend({
        serialize: function() {
            return _.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = _.prop(this, "elements");
                return a ? _.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !_(this).is(":disabled") && Bb.test(this.nodeName) && !Ab.test(a) && (this.checked || !ya.test(a))
            }).map(function(a, b) {
                var c = _(this).val();
                return null == c ? null : _.isArray(c) ? _.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(zb, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(zb, "\r\n")
                }
            }).get()
        }
    }), _.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cb = 0,
        Db = {}, Eb = {
            0: 200,
            1223: 204
        }, Fb = _.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Db) Db[a]()
    }), Y.cors = !! Fb && "withCredentials" in Fb, Y.ajax = Fb = !! Fb, _.ajaxTransport(function(a) {
        var b;
        return Y.cors || Fb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Db[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Eb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Db[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b) throw h
                }
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), _.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return _.globalEval(a), a
            }
        }
    }), _.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), _.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = _("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), Z.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gb = [],
        Hb = /(=)\?(?=&|$)|\?\?/;
    _.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gb.pop() || _.expando + "_" + jb++;
            return this[a] = !0, a
        }
    }), _.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = _.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hb, "$1" + e) : b.jsonp !== !1 && (b.url += (kb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || _.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gb.push(e)), g && _.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), _.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || Z;
        var d = ga.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = _.buildFragment([a], b, e), e && e.length && _(e).remove(), _.merge([], d.childNodes))
    };
    var Ib = _.fn.load;
    _.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ib) return Ib.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = _.trim(a.slice(h)), a = a.slice(0, h)), _.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && _.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? _("<div>").append(_.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        _.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), _.expr.filters.animated = function(a) {
        return _.grep(_.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jb = a.document.documentElement;
    _.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = _.css(a, "position"),
                l = _(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = _.css(a, "top"), i = _.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), _.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, _.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                _.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, _.contains(b, d) ? (typeof d.getBoundingClientRect !== za && (e = d.getBoundingClientRect()), c = P(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === _.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), _.nodeName(a[0], "html") || (d = a.offset()), d.top += _.css(a[0], "borderTopWidth", !0), d.left += _.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - _.css(c, "marginTop", !0),
                    left: b.left - d.left - _.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Jb; a && !_.nodeName(a, "html") && "static" === _.css(a, "position");) a = a.offsetParent;
                return a || Jb
            })
        }
    }), _.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        _.fn[b] = function(e) {
            return qa(this, function(b, e, f) {
                var g = P(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), _.each(["top", "left"], function(a, b) {
        _.cssHooks[b] = w(Y.pixelPosition, function(a, c) {
            return c ? (c = v(a, b), Qa.test(c) ? _(a).position()[b] + "px" : c) : void 0
        })
    }), _.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        _.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            _.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return qa(this, function(b, c, d) {
                    var e;
                    return _.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? _.css(b, c, g) : _.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), _.fn.size = function() {
        return this.length
    }, _.fn.andSelf = _.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return _
    });
    var Kb = a.jQuery,
        Lb = a.$;
    return _.noConflict = function(b) {
        return a.$ === _ && (a.$ = Lb), b && a.jQuery === _ && (a.jQuery = Kb), _
    }, typeof b === za && (a.jQuery = a.$ = _), _
}),
    function(a, b, c) {
        "use strict";

        function d(a, b) {
            return b = b || Error,
                function() {
                    var c, d, e = arguments[0],
                        f = "[" + (a ? a + ":" : "") + e + "] ",
                        g = arguments[1],
                        h = arguments;
                    for (c = f + g.replace(/\{\d+\}/g, function(a) {
                            var b = +a.slice(1, -1);
                            return b + 2 < h.length ? ma(h[b + 2]) : a
                        }), c = c + "\nhttp://errors.angularjs.org/1.3.11/" + (a ? a + "/" : "") + e, d = 2; d < arguments.length; d++) c = c + (2 == d ? "?" : "&") + "p" + (d - 2) + "=" + encodeURIComponent(ma(arguments[d]));
                    return new b(c)
                }
        }

        function e(a) {
            if (null == a || z(a)) return !1;
            var b = a.length;
            return a.nodeType === qd && b ? !0 : u(a) || jd(a) || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function f(a, b, c) {
            var d, g;
            if (a)
                if (x(a))
                    for (d in a) "prototype" == d || "length" == d || "name" == d || a.hasOwnProperty && !a.hasOwnProperty(d) || b.call(c, a[d], d, a);
                else if (jd(a) || e(a)) {
                    var h = "object" != typeof a;
                    for (d = 0, g = a.length; g > d; d++)(h || d in a) && b.call(c, a[d], d, a)
                } else if (a.forEach && a.forEach !== f) a.forEach(b, c, a);
                else
                    for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a);
            return a
        }

        function g(a) {
            return Object.keys(a).sort()
        }

        function h(a, b, c) {
            for (var d = g(a), e = 0; e < d.length; e++) b.call(c, a[d[e]], d[e]);
            return d
        }

        function i(a) {
            return function(b, c) {
                a(c, b)
            }
        }

        function j() {
            return ++hd
        }

        function k(a, b) {
            b ? a.$$hashKey = b : delete a.$$hashKey
        }

        function l(a) {
            for (var b = a.$$hashKey, c = 1, d = arguments.length; d > c; c++) {
                var e = arguments[c];
                if (e)
                    for (var f = Object.keys(e), g = 0, h = f.length; h > g; g++) {
                        var i = f[g];
                        a[i] = e[i]
                    }
            }
            return k(a, b), a
        }

        function m(a) {
            return parseInt(a, 10)
        }

        function n(a, b) {
            return l(Object.create(a), b)
        }

        function o() {}

        function p(a) {
            return a
        }

        function q(a) {
            return function() {
                return a
            }
        }

        function r(a) {
            return "undefined" == typeof a
        }

        function s(a) {
            return "undefined" != typeof a
        }

        function t(a) {
            return null !== a && "object" == typeof a
        }

        function u(a) {
            return "string" == typeof a
        }

        function v(a) {
            return "number" == typeof a
        }

        function w(a) {
            return "[object Date]" === ed.call(a)
        }

        function x(a) {
            return "function" == typeof a
        }

        function y(a) {
            return "[object RegExp]" === ed.call(a)
        }

        function z(a) {
            return a && a.window === a
        }

        function A(a) {
            return a && a.$evalAsync && a.$watch
        }

        function B(a) {
            return "[object File]" === ed.call(a)
        }

        function C(a) {
            return "[object FormData]" === ed.call(a)
        }

        function D(a) {
            return "[object Blob]" === ed.call(a)
        }

        function E(a) {
            return "boolean" == typeof a
        }

        function F(a) {
            return a && x(a.then)
        }

        function G(a) {
            return !(!a || !(a.nodeName || a.prop && a.attr && a.find))
        }

        function H(a) {
            var b, c = {}, d = a.split(",");
            for (b = 0; b < d.length; b++) c[d[b]] = !0;
            return c
        }

        function I(a) {
            return Uc(a.nodeName || a[0] && a[0].nodeName)
        }

        function J(a, b) {
            var c = a.indexOf(b);
            return c >= 0 && a.splice(c, 1), b
        }

        function K(a, b, c, d) {
            if (z(a) || A(a)) throw fd("cpws", "Can't copy! Making copies of Window or Scope instances is not supported.");
            if (b) {
                if (a === b) throw fd("cpi", "Can't copy! Source and destination are identical.");
                if (c = c || [], d = d || [], t(a)) {
                    var e = c.indexOf(a);
                    if (-1 !== e) return d[e];
                    c.push(a), d.push(b)
                }
                var g;
                if (jd(a)) {
                    b.length = 0;
                    for (var h = 0; h < a.length; h++) g = K(a[h], null, c, d), t(a[h]) && (c.push(a[h]), d.push(g)), b.push(g)
                } else {
                    var i = b.$$hashKey;
                    jd(b) ? b.length = 0 : f(b, function(a, c) {
                        delete b[c]
                    });
                    for (var j in a) a.hasOwnProperty(j) && (g = K(a[j], null, c, d), t(a[j]) && (c.push(a[j]), d.push(g)), b[j] = g);
                    k(b, i)
                }
            } else if (b = a, a)
                if (jd(a)) b = K(a, [], c, d);
                else if (w(a)) b = new Date(a.getTime());
                else if (y(a)) b = new RegExp(a.source, a.toString().match(/[^\/]*$/)[0]), b.lastIndex = a.lastIndex;
                else if (t(a)) {
                    var l = Object.create(Object.getPrototypeOf(a));
                    b = K(a, l, c, d)
                }
            return b
        }

        function L(a, b) {
            if (jd(a)) {
                b = b || [];
                for (var c = 0, d = a.length; d > c; c++) b[c] = a[c]
            } else if (t(a)) {
                b = b || {};
                for (var e in a)("$" !== e.charAt(0) || "$" !== e.charAt(1)) && (b[e] = a[e])
            }
            return b || a
        }

        function M(a, b) {
            if (a === b) return !0;
            if (null === a || null === b) return !1;
            if (a !== a && b !== b) return !0;
            var d, e, f, g = typeof a,
                h = typeof b;
            if (g == h && "object" == g) {
                if (!jd(a)) {
                    if (w(a)) return w(b) ? M(a.getTime(), b.getTime()) : !1;
                    if (y(a) && y(b)) return a.toString() == b.toString();
                    if (A(a) || A(b) || z(a) || z(b) || jd(b)) return !1;
                    f = {};
                    for (e in a)
                        if ("$" !== e.charAt(0) && !x(a[e])) {
                            if (!M(a[e], b[e])) return !1;
                            f[e] = !0
                        }
                    for (e in b)
                        if (!f.hasOwnProperty(e) && "$" !== e.charAt(0) && b[e] !== c && !x(b[e])) return !1;
                    return !0
                }
                if (!jd(b)) return !1;
                if ((d = a.length) == b.length) {
                    for (e = 0; d > e; e++)
                        if (!M(a[e], b[e])) return !1;
                    return !0
                }
            }
            return !1
        }

        function N(a, b, c) {
            return a.concat(bd.call(b, c))
        }

        function O(a, b) {
            return bd.call(a, b || 0)
        }

        function P(a, b) {
            var c = arguments.length > 2 ? O(arguments, 2) : [];
            return !x(b) || b instanceof RegExp ? b : c.length ? function() {
                return arguments.length ? b.apply(a, N(c, arguments, 0)) : b.apply(a, c)
            } : function() {
                return arguments.length ? b.apply(a, arguments) : b.call(a)
            }
        }

        function Q(a, d) {
            var e = d;
            return "string" == typeof a && "$" === a.charAt(0) && "$" === a.charAt(1) ? e = c : z(d) ? e = "$WINDOW" : d && b === d ? e = "$DOCUMENT" : A(d) && (e = "$SCOPE"), e
        }

        function R(a, b) {
            return "undefined" == typeof a ? c : (v(b) || (b = b ? 2 : null), JSON.stringify(a, Q, b))
        }

        function S(a) {
            return u(a) ? JSON.parse(a) : a
        }

        function T(a) {
            a = $c(a).clone();
            try {
                a.empty()
            } catch (b) {}
            var c = $c("<div>").append(a).html();
            try {
                return a[0].nodeType === rd ? Uc(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function(a, b) {
                    return "<" + Uc(b)
                })
            } catch (b) {
                return Uc(c)
            }
        }

        function U(a) {
            try {
                return decodeURIComponent(a)
            } catch (b) {}
        }

        function V(a) {
            var b, c, d = {};
            return f((a || "").split("&"), function(a) {
                if (a && (b = a.replace(/\+/g, "%20").split("="), c = U(b[0]), s(c))) {
                    var e = s(b[1]) ? U(b[1]) : !0;
                    Vc.call(d, c) ? jd(d[c]) ? d[c].push(e) : d[c] = [d[c], e] : d[c] = e
                }
            }), d
        }

        function W(a) {
            var b = [];
            return f(a, function(a, c) {
                jd(a) ? f(a, function(a) {
                    b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
                }) : b.push(Y(c, !0) + (a === !0 ? "" : "=" + Y(a, !0)))
            }), b.length ? b.join("&") : ""
        }

        function X(a) {
            return Y(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
        }

        function Y(a, b) {
            return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%20/g, b ? "%20" : "+")
        }

        function Z(a, b) {
            var c, d, e = nd.length;
            for (a = $c(a), d = 0; e > d; ++d)
                if (c = nd[d] + b, u(c = a.attr(c))) return c;
            return null
        }

        function $(a, b) {
            var c, d, e = {};
            f(nd, function(b) {
                var e = b + "app";
                !c && a.hasAttribute && a.hasAttribute(e) && (c = a, d = a.getAttribute(e))
            }), f(nd, function(b) {
                var e, f = b + "app";
                !c && (e = a.querySelector("[" + f.replace(":", "\\:") + "]")) && (c = e, d = e.getAttribute(f))
            }), c && (e.strictDi = null !== Z(c, "strict-di"), b(c, d ? [d] : [], e))
        }

        function _(c, d, e) {
            t(e) || (e = {});
            var g = {
                strictDi: !1
            };
            e = l(g, e);
            var h = function() {
                    if (c = $c(c), c.injector()) {
                        var a = c[0] === b ? "document" : T(c);
                        throw fd("btstrpd", "App Already Bootstrapped with this Element '{0}'", a.replace(/</, "&lt;").replace(/>/, "&gt;"))
                    }
                    d = d || [], d.unshift(["$provide",
                        function(a) {
                            a.value("$rootElement", c)
                        }
                    ]), e.debugInfoEnabled && d.push(["$compileProvider",
                        function(a) {
                            a.debugInfoEnabled(!0)
                        }
                    ]), d.unshift("ng");
                    var f = Sa(d, e.strictDi);
                    return f.invoke(["$rootScope", "$rootElement", "$compile", "$injector",
                        function(a, b, c, d) {
                            a.$apply(function() {
                                b.data("$injector", d), c(b)(a)
                            })
                        }
                    ]), f
                }, i = /^NG_ENABLE_DEBUG_INFO!/,
                j = /^NG_DEFER_BOOTSTRAP!/;
            return a && i.test(a.name) && (e.debugInfoEnabled = !0, a.name = a.name.replace(i, "")), a && !j.test(a.name) ? h() : (a.name = a.name.replace(j, ""), void(gd.resumeBootstrap = function(a) {
                f(a, function(a) {
                    d.push(a)
                }), h()
            }))
        }

        function aa() {
            a.name = "NG_ENABLE_DEBUG_INFO!" + a.name, a.location.reload()
        }

        function ba(a) {
            var b = gd.element(a).injector();
            if (!b) throw fd("test", "no injector found for element argument to getTestability");
            return b.get("$$testability")
        }

        function ca(a, b) {
            return b = b || "_", a.replace(od, function(a, c) {
                return (c ? b : "") + a.toLowerCase()
            })
        }

        function da() {
            var b;
            pd || (_c = a.jQuery, _c && _c.fn.on ? ($c = _c, l(_c.fn, {
                scope: Jd.scope,
                isolateScope: Jd.isolateScope,
                controller: Jd.controller,
                injector: Jd.injector,
                inheritedData: Jd.inheritedData
            }), b = _c.cleanData, _c.cleanData = function(a) {
                var c;
                if (id) id = !1;
                else
                    for (var d, e = 0; null != (d = a[e]); e++) c = _c._data(d, "events"), c && c.$destroy && _c(d).triggerHandler("$destroy");
                b(a)
            }) : $c = ua, gd.element = $c, pd = !0)
        }

        function ea(a, b, c) {
            if (!a) throw fd("areq", "Argument '{0}' is {1}", b || "?", c || "required");
            return a
        }

        function fa(a, b, c) {
            return c && jd(a) && (a = a[a.length - 1]), ea(x(a), b, "not a function, got " + (a && "object" == typeof a ? a.constructor.name || "Object" : typeof a)), a
        }

        function ga(a, b) {
            if ("hasOwnProperty" === a) throw fd("badname", "hasOwnProperty is not a valid {0} name", b)
        }

        function ha(a, b, c) {
            if (!b) return a;
            for (var d, e = b.split("."), f = a, g = e.length, h = 0; g > h; h++) d = e[h], a && (a = (f = a)[d]);
            return !c && x(a) ? P(f, a) : a
        }

        function ia(a) {
            var b = a[0],
                c = a[a.length - 1],
                d = [b];
            do {
                if (b = b.nextSibling, !b) break;
                d.push(b)
            } while (b !== c);
            return $c(d)
        }

        function ja() {
            return Object.create(null)
        }

        function ka(a) {
            function b(a, b, c) {
                return a[b] || (a[b] = c())
            }
            var c = d("$injector"),
                e = d("ng"),
                f = b(a, "angular", Object);
            return f.$$minErr = f.$$minErr || d, b(f, "module", function() {
                var a = {};
                return function(d, f, g) {
                    var h = function(a, b) {
                        if ("hasOwnProperty" === a) throw e("badname", "hasOwnProperty is not a valid {0} name", b)
                    };
                    return h(d, "module"), f && a.hasOwnProperty(d) && (a[d] = null), b(a, d, function() {
                        function a(a, c, d, e) {
                            return e || (e = b),
                                function() {
                                    return e[d || "push"]([a, c, arguments]), j
                                }
                        }
                        if (!f) throw c("nomod", "Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.", d);
                        var b = [],
                            e = [],
                            h = [],
                            i = a("$injector", "invoke", "push", e),
                            j = {
                                _invokeQueue: b,
                                _configBlocks: e,
                                _runBlocks: h,
                                requires: f,
                                name: d,
                                provider: a("$provide", "provider"),
                                factory: a("$provide", "factory"),
                                service: a("$provide", "service"),
                                value: a("$provide", "value"),
                                constant: a("$provide", "constant", "unshift"),
                                animation: a("$animateProvider", "register"),
                                filter: a("$filterProvider", "register"),
                                controller: a("$controllerProvider", "register"),
                                directive: a("$compileProvider", "directive"),
                                config: i,
                                run: function(a) {
                                    return h.push(a), this
                                }
                            };
                        return g && i(g), j
                    })
                }
            })
        }

        function la(a) {
            var b = [];
            return JSON.stringify(a, function(a, c) {
                if (c = Q(a, c), t(c)) {
                    if (b.indexOf(c) >= 0) return "<<already seen>>";
                    b.push(c)
                }
                return c
            })
        }

        function ma(a) {
            return "function" == typeof a ? a.toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof a ? "undefined" : "string" != typeof a ? la(a) : a
        }

        function na(b) {
            l(b, {
                bootstrap: _,
                copy: K,
                extend: l,
                equals: M,
                element: $c,
                forEach: f,
                injector: Sa,
                noop: o,
                bind: P,
                toJson: R,
                fromJson: S,
                identity: p,
                isUndefined: r,
                isDefined: s,
                isString: u,
                isFunction: x,
                isObject: t,
                isNumber: v,
                isElement: G,
                isArray: jd,
                version: vd,
                isDate: w,
                lowercase: Uc,
                uppercase: Wc,
                callbacks: {
                    counter: 0
                },
                getTestability: ba,
                $$minErr: d,
                $$csp: md,
                reloadWithDebugInfo: aa
            }), ad = ka(a);
            try {
                ad("ngLocale")
            } catch (c) {
                ad("ngLocale", []).provider("$locale", qb)
            }
            ad("ng", ["ngLocale"], ["$provide",
                function(a) {
                    a.provider({
                        $$sanitizeUri: Wb
                    }), a.provider("$compile", Za).directive({
                        a: Ae,
                        input: Re,
                        textarea: Re,
                        form: Fe,
                        script: Hf,
                        select: Kf,
                        style: Mf,
                        option: Lf,
                        ngBind: Ue,
                        ngBindHtml: We,
                        ngBindTemplate: Ve,
                        ngClass: Ye,
                        ngClassEven: $e,
                        ngClassOdd: Ze,
                        ngCloak: _e,
                        ngController: af,
                        ngForm: Ge,
                        ngHide: Bf,
                        ngIf: df,
                        ngInclude: ef,
                        ngInit: gf,
                        ngNonBindable: vf,
                        ngPluralize: wf,
                        ngRepeat: xf,
                        ngShow: Af,
                        ngStyle: Cf,
                        ngSwitch: Df,
                        ngSwitchWhen: Ef,
                        ngSwitchDefault: Ff,
                        ngOptions: Jf,
                        ngTransclude: Gf,
                        ngModel: sf,
                        ngList: hf,
                        ngChange: Xe,
                        pattern: Of,
                        ngPattern: Of,
                        required: Nf,
                        ngRequired: Nf,
                        minlength: Qf,
                        ngMinlength: Qf,
                        maxlength: Pf,
                        ngMaxlength: Pf,
                        ngValue: Te,
                        ngModelOptions: uf
                    }).directive({
                        ngInclude: ff
                    }).directive(Be).directive(bf), a.provider({
                        $anchorScroll: Ta,
                        $animate: Td,
                        $browser: Wa,
                        $cacheFactory: Xa,
                        $controller: bb,
                        $document: cb,
                        $exceptionHandler: db,
                        $filter: gc,
                        $interpolate: ob,
                        $interval: pb,
                        $http: kb,
                        $httpBackend: mb,
                        $location: Eb,
                        $log: Fb,
                        $parse: Qb,
                        $rootScope: Vb,
                        $q: Rb,
                        $$q: Sb,
                        $sce: $b,
                        $sceDelegate: Zb,
                        $sniffer: _b,
                        $templateCache: Ya,
                        $templateRequest: ac,
                        $$testability: bc,
                        $timeout: cc,
                        $window: fc,
                        $$rAF: Ub,
                        $$asyncCallback: Ua,
                        $$jqLite: Na
                    })
                }
            ])
        }

        function oa() {
            return ++xd
        }

        function pa(a) {
            return a.replace(Ad, function(a, b, c, d) {
                return d ? c.toUpperCase() : c
            }).replace(Bd, "Moz$1")
        }

        function qa(a) {
            return !Fd.test(a)
        }

        function ra(a) {
            var b = a.nodeType;
            return b === qd || !b || b === td
        }

        function sa(a, b) {
            var c, d, e, g, h = b.createDocumentFragment(),
                i = [];
            if (qa(a)) i.push(b.createTextNode(a));
            else {
                for (c = c || h.appendChild(b.createElement("div")), d = (Gd.exec(a) || ["", ""])[1].toLowerCase(), e = Id[d] || Id._default, c.innerHTML = e[1] + a.replace(Hd, "<$1></$2>") + e[2], g = e[0]; g--;) c = c.lastChild;
                i = N(i, c.childNodes), c = h.firstChild, c.textContent = ""
            }
            return h.textContent = "", h.innerHTML = "", f(i, function(a) {
                h.appendChild(a)
            }), h
        }

        function ta(a, c) {
            c = c || b;
            var d;
            return (d = Ed.exec(a)) ? [c.createElement(d[1])] : (d = sa(a, c)) ? d.childNodes : []
        }

        function ua(a) {
            if (a instanceof ua) return a;
            var b;
            if (u(a) && (a = kd(a), b = !0), !(this instanceof ua)) {
                if (b && "<" != a.charAt(0)) throw Dd("nosel", "Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");
                return new ua(a)
            }
            b ? Ea(this, ta(a)) : Ea(this, a)
        }

        function va(a) {
            return a.cloneNode(!0)
        }

        function wa(a, b) {
            if (b || ya(a), a.querySelectorAll)
                for (var c = a.querySelectorAll("*"), d = 0, e = c.length; e > d; d++) ya(c[d])
        }

        function xa(a, b, c, d) {
            if (s(d)) throw Dd("offargs", "jqLite#off() does not support the `selector` argument");
            var e = za(a),
                g = e && e.events,
                h = e && e.handle;
            if (h)
                if (b) f(b.split(" "), function(b) {
                    if (s(c)) {
                        var d = g[b];
                        if (J(d || [], c), d && d.length > 0) return
                    }
                    zd(a, b, h), delete g[b]
                });
                else
                    for (b in g) "$destroy" !== b && zd(a, b, h), delete g[b]
        }

        function ya(a, b) {
            var d = a.ng339,
                e = d && wd[d];
            if (e) {
                if (b) return void delete e.data[b];
                e.handle && (e.events.$destroy && e.handle({}, "$destroy"), xa(a)), delete wd[d], a.ng339 = c
            }
        }

        function za(a, b) {
            var d = a.ng339,
                e = d && wd[d];
            return b && !e && (a.ng339 = d = oa(), e = wd[d] = {
                events: {},
                data: {},
                handle: c
            }), e
        }

        function Aa(a, b, c) {
            if (ra(a)) {
                var d = s(c),
                    e = !d && b && !t(b),
                    f = !b,
                    g = za(a, !e),
                    h = g && g.data;
                if (d) h[b] = c;
                else {
                    if (f) return h;
                    if (e) return h && h[b];
                    l(h, b)
                }
            }
        }

        function Ba(a, b) {
            return a.getAttribute ? (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + b + " ") > -1 : !1
        }

        function Ca(a, b) {
            b && a.setAttribute && f(b.split(" "), function(b) {
                a.setAttribute("class", kd((" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + kd(b) + " ", " ")))
            })
        }

        function Da(a, b) {
            if (b && a.setAttribute) {
                var c = (" " + (a.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
                f(b.split(" "), function(a) {
                    a = kd(a), -1 === c.indexOf(" " + a + " ") && (c += a + " ")
                }), a.setAttribute("class", kd(c))
            }
        }

        function Ea(a, b) {
            if (b)
                if (b.nodeType) a[a.length++] = b;
                else {
                    var c = b.length;
                    if ("number" == typeof c && b.window !== b) {
                        if (c)
                            for (var d = 0; c > d; d++) a[a.length++] = b[d]
                    } else a[a.length++] = b
                }
        }

        function Fa(a, b) {
            return Ga(a, "$" + (b || "ngController") + "Controller")
        }

        function Ga(a, b, d) {
            a.nodeType == td && (a = a.documentElement);
            for (var e = jd(b) ? b : [b]; a;) {
                for (var f = 0, g = e.length; g > f; f++)
                    if ((d = $c.data(a, e[f])) !== c) return d;
                a = a.parentNode || a.nodeType === ud && a.host
            }
        }

        function Ha(a) {
            for (wa(a, !0); a.firstChild;) a.removeChild(a.firstChild)
        }

        function Ia(a, b) {
            b || wa(a);
            var c = a.parentNode;
            c && c.removeChild(a)
        }

        function Ja(b, c) {
            c = c || a, "complete" === c.document.readyState ? c.setTimeout(b) : $c(c).on("load", b)
        }

        function Ka(a, b) {
            var c = Kd[b.toLowerCase()];
            return c && Ld[I(a)] && c
        }

        function La(a, b) {
            var c = a.nodeName;
            return ("INPUT" === c || "TEXTAREA" === c) && Md[b]
        }

        function Ma(a, b) {
            var c = function(c, d) {
                c.isDefaultPrevented = function() {
                    return c.defaultPrevented
                };
                var e = b[d || c.type],
                    f = e ? e.length : 0;
                if (f) {
                    if (r(c.immediatePropagationStopped)) {
                        var g = c.stopImmediatePropagation;
                        c.stopImmediatePropagation = function() {
                            c.immediatePropagationStopped = !0, c.stopPropagation && c.stopPropagation(), g && g.call(c)
                        }
                    }
                    c.isImmediatePropagationStopped = function() {
                        return c.immediatePropagationStopped === !0
                    }, f > 1 && (e = L(e));
                    for (var h = 0; f > h; h++) c.isImmediatePropagationStopped() || e[h].call(a, c)
                }
            };
            return c.elem = a, c
        }

        function Na() {
            this.$get = function() {
                return l(ua, {
                    hasClass: function(a, b) {
                        return a.attr && (a = a[0]), Ba(a, b)
                    },
                    addClass: function(a, b) {
                        return a.attr && (a = a[0]), Da(a, b)
                    },
                    removeClass: function(a, b) {
                        return a.attr && (a = a[0]), Ca(a, b)
                    }
                })
            }
        }

        function Oa(a, b) {
            var c = a && a.$$hashKey;
            if (c) return "function" == typeof c && (c = a.$$hashKey()), c;
            var d = typeof a;
            return c = "function" == d || "object" == d && null !== a ? a.$$hashKey = d + ":" + (b || j)() : d + ":" + a
        }

        function Pa(a, b) {
            if (b) {
                var c = 0;
                this.nextUid = function() {
                    return ++c
                }
            }
            f(a, this.put, this)
        }

        function Qa(a) {
            var b = a.toString().replace(Qd, ""),
                c = b.match(Nd);
            return c ? "function(" + (c[1] || "").replace(/[\s\r\n]+/, " ") + ")" : "fn"
        }

        function Ra(a, b, c) {
            var d, e, g, h;
            if ("function" == typeof a) {
                if (!(d = a.$inject)) {
                    if (d = [], a.length) {
                        if (b) throw u(c) && c || (c = a.name || Qa(a)), Rd("strictdi", "{0} is not using explicit annotation and cannot be invoked in strict mode", c);
                        e = a.toString().replace(Qd, ""), g = e.match(Nd), f(g[1].split(Od), function(a) {
                            a.replace(Pd, function(a, b, c) {
                                d.push(c)
                            })
                        })
                    }
                    a.$inject = d
                }
            } else jd(a) ? (h = a.length - 1, fa(a[h], "fn"), d = a.slice(0, h)) : fa(a, "fn", !0);
            return d
        }

        function Sa(a, b) {
            function d(a) {
                return function(b, c) {
                    return t(b) ? void f(b, i(a)) : a(b, c)
                }
            }

            function e(a, b) {
                if (ga(a, "service"), (x(b) || jd(b)) && (b = A.instantiate(b)), !b.$get) throw Rd("pget", "Provider '{0}' must define $get factory method.", a);
                return z[a + v] = b
            }

            function g(a, b) {
                return function() {
                    var c = C.invoke(b, this);
                    if (r(c)) throw Rd("undef", "Provider '{0}' must return a value from $get factory method.", a);
                    return c
                }
            }

            function h(a, b, c) {
                return e(a, {
                    $get: c !== !1 ? g(a, b) : b
                })
            }

            function j(a, b) {
                return h(a, ["$injector",
                    function(a) {
                        return a.instantiate(b)
                    }
                ])
            }

            function k(a, b) {
                return h(a, q(b), !1)
            }

            function l(a, b) {
                ga(a, "constant"), z[a] = b, B[a] = b
            }

            function m(a, b) {
                var c = A.get(a + v),
                    d = c.$get;
                c.$get = function() {
                    var a = C.invoke(d, c);
                    return C.invoke(b, null, {
                        $delegate: a
                    })
                }
            }

            function n(a) {
                var b, c = [];
                return f(a, function(a) {
                    function d(a) {
                        var b, c;
                        for (b = 0, c = a.length; c > b; b++) {
                            var d = a[b],
                                e = A.get(d[0]);
                            e[d[1]].apply(e, d[2])
                        }
                    }
                    if (!y.get(a)) {
                        y.put(a, !0);
                        try {
                            u(a) ? (b = ad(a), c = c.concat(n(b.requires)).concat(b._runBlocks), d(b._invokeQueue), d(b._configBlocks)) : x(a) ? c.push(A.invoke(a)) : jd(a) ? c.push(A.invoke(a)) : fa(a, "module")
                        } catch (e) {
                            throw jd(a) && (a = a[a.length - 1]), e.message && e.stack && -1 == e.stack.indexOf(e.message) && (e = e.message + "\n" + e.stack), Rd("modulerr", "Failed to instantiate module {0} due to:\n{1}", a, e.stack || e.message || e)
                        }
                    }
                }), c
            }

            function p(a, c) {
                function d(b, d) {
                    if (a.hasOwnProperty(b)) {
                        if (a[b] === s) throw Rd("cdep", "Circular dependency found: {0}", b + " <- " + w.join(" <- "));
                        return a[b]
                    }
                    try {
                        return w.unshift(b), a[b] = s, a[b] = c(b, d)
                    } catch (e) {
                        throw a[b] === s && delete a[b], e
                    } finally {
                        w.shift()
                    }
                }

                function e(a, c, e, f) {
                    "string" == typeof e && (f = e, e = null);
                    var g, h, i, j = [],
                        k = Ra(a, b, f);
                    for (h = 0, g = k.length; g > h; h++) {
                        if (i = k[h], "string" != typeof i) throw Rd("itkn", "Incorrect injection token! Expected service name as string, got {0}", i);
                        j.push(e && e.hasOwnProperty(i) ? e[i] : d(i, f))
                    }
                    return jd(a) && (a = a[g]), a.apply(c, j)
                }

                function f(a, b, c) {
                    var d = Object.create((jd(a) ? a[a.length - 1] : a).prototype || null),
                        f = e(a, d, b, c);
                    return t(f) || x(f) ? f : d
                }
                return {
                    invoke: e,
                    instantiate: f,
                    get: d,
                    annotate: Ra,
                    has: function(b) {
                        return z.hasOwnProperty(b + v) || a.hasOwnProperty(b)
                    }
                }
            }
            b = b === !0;
            var s = {}, v = "Provider",
                w = [],
                y = new Pa([], !0),
                z = {
                    $provide: {
                        provider: d(e),
                        factory: d(h),
                        service: d(j),
                        value: d(k),
                        constant: d(l),
                        decorator: m
                    }
                }, A = z.$injector = p(z, function(a, b) {
                    throw gd.isString(b) && w.push(b), Rd("unpr", "Unknown provider: {0}", w.join(" <- "))
                }),
                B = {}, C = B.$injector = p(B, function(a, b) {
                    var d = A.get(a + v, b);
                    return C.invoke(d.$get, d, c, a)
                });
            return f(n(a), function(a) {
                C.invoke(a || o)
            }), C
        }

        function Ta() {
            var a = !0;
            this.disableAutoScrolling = function() {
                a = !1
            }, this.$get = ["$window", "$location", "$rootScope",
                function(b, c, d) {
                    function e(a) {
                        var b = null;
                        return Array.prototype.some.call(a, function(a) {
                            return "a" === I(a) ? (b = a, !0) : void 0
                        }), b
                    }

                    function f() {
                        var a = h.yOffset;
                        if (x(a)) a = a();
                        else if (G(a)) {
                            var c = a[0],
                                d = b.getComputedStyle(c);
                            a = "fixed" !== d.position ? 0 : c.getBoundingClientRect().bottom
                        } else v(a) || (a = 0);
                        return a
                    }

                    function g(a) {
                        if (a) {
                            a.scrollIntoView();
                            var c = f();
                            if (c) {
                                var d = a.getBoundingClientRect().top;
                                b.scrollBy(0, d - c)
                            }
                        } else b.scrollTo(0, 0)
                    }

                    function h() {
                        var a, b = c.hash();
                        b ? (a = i.getElementById(b)) ? g(a) : (a = e(i.getElementsByName(b))) ? g(a) : "top" === b && g(null) : g(null)
                    }
                    var i = b.document;
                    return a && d.$watch(function() {
                        return c.hash()
                    }, function(a, b) {
                        (a !== b || "" !== a) && Ja(function() {
                            d.$evalAsync(h)
                        })
                    }), h
                }
            ]
        }

        function Ua() {
            this.$get = ["$$rAF", "$timeout",
                function(a, b) {
                    return a.supported ? function(b) {
                        return a(b)
                    } : function(a) {
                        return b(a, 0, !1)
                    }
                }
            ]
        }

        function Va(a, b, d, e) {
            function g(a) {
                try {
                    a.apply(null, O(arguments, 1))
                } finally {
                    if (x--, 0 === x)
                        for (; y.length;) try {
                            y.pop()()
                        } catch (b) {
                            d.error(b)
                        }
                }
            }

            function h(a) {
                var b = a.indexOf("#");
                return -1 === b ? "" : a.substr(b + 1)
            }

            function i(a, b) {
                ! function c() {
                    f(A, function(a) {
                        a()
                    }), z = b(c, a)
                }()
            }

            function j() {
                k(), l()
            }

            function k() {
                B = a.history.state, B = r(B) ? null : B, M(B, I) && (B = I), I = B
            }

            function l() {
                (D !== n.url() || C !== B) && (D = n.url(), C = B, f(G, function(a) {
                    a(n.url(), B)
                }))
            }

            function m(a) {
                try {
                    return decodeURIComponent(a)
                } catch (b) {
                    return a
                }
            }
            var n = this,
                p = b[0],
                q = a.location,
                s = a.history,
                t = a.setTimeout,
                v = a.clearTimeout,
                w = {};
            n.isMock = !1;
            var x = 0,
                y = [];
            n.$$completeOutstandingRequest = g, n.$$incOutstandingRequestCount = function() {
                x++
            }, n.notifyWhenNoOutstandingRequests = function(a) {
                f(A, function(a) {
                    a()
                }), 0 === x ? a() : y.push(a)
            };
            var z, A = [];
            n.addPollFn = function(a) {
                return r(z) && i(100, t), A.push(a), a
            };
            var B, C, D = q.href,
                E = b.find("base"),
                F = null;
            k(), C = B, n.url = function(b, c, d) {
                if (r(d) && (d = null), q !== a.location && (q = a.location), s !== a.history && (s = a.history), b) {
                    var f = C === d;
                    if (D === b && (!e.history || f)) return n;
                    var g = D && vb(D) === vb(b);
                    return D = b, C = d, !e.history || g && f ? (g || (F = b), c ? q.replace(b) : g ? q.hash = h(b) : q.href = b) : (s[c ? "replaceState" : "pushState"](d, "", b), k(), C = B), n
                }
                return F || q.href.replace(/%27/g, "'")
            }, n.state = function() {
                return B
            };
            var G = [],
                H = !1,
                I = null;
            n.onUrlChange = function(b) {
                return H || (e.history && $c(a).on("popstate", j), $c(a).on("hashchange", j), H = !0), G.push(b), b
            }, n.$$checkUrlChange = l, n.baseHref = function() {
                var a = E.attr("href");
                return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
            };
            var J = {}, K = "",
                L = n.baseHref();
            n.cookies = function(a, b) {
                var e, f, g, h, i;
                if (!a) {
                    if (p.cookie !== K)
                        for (K = p.cookie, f = K.split("; "), J = {}, h = 0; h < f.length; h++) g = f[h], i = g.indexOf("="), i > 0 && (a = m(g.substring(0, i)), J[a] === c && (J[a] = m(g.substring(i + 1))));
                    return J
                }
                b === c ? p.cookie = encodeURIComponent(a) + "=;path=" + L + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : u(b) && (e = (p.cookie = encodeURIComponent(a) + "=" + encodeURIComponent(b) + ";path=" + L).length + 1, e > 4096 && d.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + e + " > 4096 bytes)!"))
            }, n.defer = function(a, b) {
                var c;
                return x++, c = t(function() {
                    delete w[c], g(a)
                }, b || 0), w[c] = !0, c
            }, n.defer.cancel = function(a) {
                return w[a] ? (delete w[a], v(a), g(o), !0) : !1
            }
        }

        function Wa() {
            this.$get = ["$window", "$log", "$sniffer", "$document",
                function(a, b, c, d) {
                    return new Va(a, d, b, c)
                }
            ]
        }

        function Xa() {
            this.$get = function() {
                function a(a, c) {
                    function e(a) {
                        a != m && (n ? n == a && (n = a.n) : n = a, f(a.n, a.p), f(a, m), m = a, m.n = null)
                    }

                    function f(a, b) {
                        a != b && (a && (a.p = b), b && (b.n = a))
                    }
                    if (a in b) throw d("$cacheFactory")("iid", "CacheId '{0}' is already taken!", a);
                    var g = 0,
                        h = l({}, c, {
                            id: a
                        }),
                        i = {}, j = c && c.capacity || Number.MAX_VALUE,
                        k = {}, m = null,
                        n = null;
                    return b[a] = {
                        put: function(a, b) {
                            if (j < Number.MAX_VALUE) {
                                var c = k[a] || (k[a] = {
                                        key: a
                                    });
                                e(c)
                            }
                            if (!r(b)) return a in i || g++, i[a] = b, g > j && this.remove(n.key), b
                        },
                        get: function(a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b) return;
                                e(b)
                            }
                            return i[a]
                        },
                        remove: function(a) {
                            if (j < Number.MAX_VALUE) {
                                var b = k[a];
                                if (!b) return;
                                b == m && (m = b.p), b == n && (n = b.n), f(b.n, b.p), delete k[a]
                            }
                            delete i[a], g--
                        },
                        removeAll: function() {
                            i = {}, g = 0, k = {}, m = n = null
                        },
                        destroy: function() {
                            i = null, h = null, k = null, delete b[a]
                        },
                        info: function() {
                            return l({}, h, {
                                size: g
                            })
                        }
                    }
                }
                var b = {};
                return a.info = function() {
                    var a = {};
                    return f(b, function(b, c) {
                        a[c] = b.info()
                    }), a
                }, a.get = function(a) {
                    return b[a]
                }, a
            }
        }

        function Ya() {
            this.$get = ["$cacheFactory",
                function(a) {
                    return a("templates")
                }
            ]
        }

        function Za(a, d) {
            function e(a, b) {
                var c = /^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,
                    d = {};
                return f(a, function(a, e) {
                    var f = a.match(c);
                    if (!f) throw Ud("iscp", "Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}", b, e, a);
                    d[e] = {
                        mode: f[1][0],
                        collection: "*" === f[2],
                        optional: "?" === f[3],
                        attrName: f[4] || e
                    }
                }), d
            }
            var g = {}, h = "Directive",
                j = /^\s*directive\:\s*([\w\-]+)\s+(.*)$/,
                k = /(([\w\-]+)(?:\:([^;]+))?;?)/,
                m = H("ngSrc,ngSrcset,src,srcset"),
                r = /^(?:(\^\^?)?(\?)?(\^\^?)?)?/,
                v = /^(on[a-z]+|formaction)$/;
            this.directive = function y(b, c) {
                return ga(b, "directive"), u(b) ? (ea(c, "directiveFactory"), g.hasOwnProperty(b) || (g[b] = [], a.factory(b + h, ["$injector", "$exceptionHandler",
                    function(a, c) {
                        var d = [];
                        return f(g[b], function(f, g) {
                            try {
                                var h = a.invoke(f);
                                x(h) ? h = {
                                    compile: q(h)
                                } : !h.compile && h.link && (h.compile = q(h.link)), h.priority = h.priority || 0, h.index = g, h.name = h.name || b, h.require = h.require || h.controller && h.name, h.restrict = h.restrict || "EA", t(h.scope) && (h.$$isolateBindings = e(h.scope, h.name)), d.push(h)
                            } catch (i) {
                                c(i)
                            }
                        }), d
                    }
                ])), g[b].push(c)) : f(b, i(y)), this
            }, this.aHrefSanitizationWhitelist = function(a) {
                return s(a) ? (d.aHrefSanitizationWhitelist(a), this) : d.aHrefSanitizationWhitelist()
            }, this.imgSrcSanitizationWhitelist = function(a) {
                return s(a) ? (d.imgSrcSanitizationWhitelist(a), this) : d.imgSrcSanitizationWhitelist()
            };
            var w = !0;
            this.debugInfoEnabled = function(a) {
                return s(a) ? (w = a, this) : w
            }, this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$templateRequest", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri",
                function(a, d, e, i, q, s, y, z, B, C, D) {
                    function E(a, b) {
                        try {
                            a.addClass(b)
                        } catch (c) {}
                    }

                    function F(a, b, c, d, e) {
                        a instanceof $c || (a = $c(a)), f(a, function(b, c) {
                            b.nodeType == rd && b.nodeValue.match(/\S+/) && (a[c] = $c(b).wrap("<span></span>").parent()[0])
                        });
                        var g = H(a, b, a, c, d, e);
                        F.$$addScopeClass(a);
                        var h = null;
                        return function(b, c, d) {
                            ea(b, "scope"), d = d || {};
                            var e = d.parentBoundTranscludeFn,
                                f = d.transcludeControllers,
                                i = d.futureParentElement;
                            e && e.$$boundTransclude && (e = e.$$boundTransclude), h || (h = G(i));
                            var j;
                            if (j = "html" !== h ? $c($(h, $c("<div>").append(a).html())) : c ? Jd.clone.call(a) : a, f)
                                for (var k in f) j.data("$" + k + "Controller", f[k].instance);
                            return F.$$addScopeInfo(j, b), c && c(j, b), g && g(b, j, j, e), j
                        }
                    }

                    function G(a) {
                        var b = a && a[0];
                        return b && "foreignobject" !== I(b) && b.toString().match(/SVG/) ? "svg" : "html"
                    }

                    function H(a, b, d, e, f, g) {
                        function h(a, d, e, f) {
                            var g, h, i, j, k, l, m, n, q;
                            if (o) {
                                var r = d.length;
                                for (q = new Array(r), k = 0; k < p.length; k += 3) m = p[k], q[m] = d[m]
                            } else q = d;
                            for (k = 0, l = p.length; l > k;) i = q[p[k++]], g = p[k++], h = p[k++], g ? (g.scope ? (j = a.$new(), F.$$addScopeInfo($c(i), j)) : j = a, n = g.transcludeOnThisElement ? K(a, g.transclude, f, g.elementTranscludeOnThisElement) : !g.templateOnThisElement && f ? f : !f && b ? K(a, b) : null, g(h, j, i, e, n)) : h && h(a, i.childNodes, c, f)
                        }
                        for (var i, j, k, l, m, n, o, p = [], q = 0; q < a.length; q++) i = new ga, j = L(a[q], [], i, 0 === q ? e : c, f), k = j.length ? Q(j, a[q], i, b, d, null, [], [], g) : null, k && k.scope && F.$$addScopeClass(i.$$element), m = k && k.terminal || !(l = a[q].childNodes) || !l.length ? null : H(l, k ? (k.transcludeOnThisElement || !k.templateOnThisElement) && k.transclude : b), (k || m) && (p.push(q, k, m), n = !0, o = o || k), g = null;
                        return n ? h : null
                    }

                    function K(a, b, c, d) {
                        var e = function(d, e, f, g, h) {
                            return d || (d = a.$new(!1, h), d.$$transcluded = !0), b(d, e, {
                                parentBoundTranscludeFn: c,
                                transcludeControllers: f,
                                futureParentElement: g
                            })
                        };
                        return e
                    }

                    function L(a, b, c, d, e) {
                        var f, g, h = a.nodeType,
                            i = c.$attr;
                        switch (h) {
                            case qd:
                                S(b, $a(I(a)), "E", d, e);
                                for (var l, m, n, o, p, q, r = a.attributes, s = 0, v = r && r.length; v > s; s++) {
                                    var w = !1,
                                        x = !1;
                                    l = r[s], m = l.name, p = kd(l.value), o = $a(m), (q = la.test(o)) && (m = m.replace(Vd, "").substr(8).replace(/_(.)/g, function(a, b) {
                                        return b.toUpperCase()
                                    }));
                                    var y = o.replace(/(Start|End)$/, "");
                                    U(y) && o === y + "Start" && (w = m, x = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6)), n = $a(m.toLowerCase()), i[n] = m, (q || !c.hasOwnProperty(n)) && (c[n] = p, Ka(a, n) && (c[n] = !0)), aa(a, b, p, n, q), S(b, n, "A", d, e, w, x)
                                }
                                if (g = a.className, t(g) && (g = g.animVal), u(g) && "" !== g)
                                    for (; f = k.exec(g);) n = $a(f[2]), S(b, n, "C", d, e) && (c[n] = kd(f[3])), g = g.substr(f.index + f[0].length);
                                break;
                            case rd:
                                Z(b, a.nodeValue);
                                break;
                            case sd:
                                try {
                                    f = j.exec(a.nodeValue), f && (n = $a(f[1]), S(b, n, "M", d, e) && (c[n] = kd(f[2])))
                                } catch (z) {}
                        }
                        return b.sort(X), b
                    }

                    function N(a, b, c) {
                        var d = [],
                            e = 0;
                        if (b && a.hasAttribute && a.hasAttribute(b)) {
                            do {
                                if (!a) throw Ud("uterdir", "Unterminated attribute, found '{0}' but no matching '{1}' found.", b, c);
                                a.nodeType == qd && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--), d.push(a), a = a.nextSibling
                            } while (e > 0)
                        } else d.push(a);
                        return $c(d)
                    }

                    function P(a, b, c) {
                        return function(d, e, f, g, h) {
                            return e = N(e[0], b, c), a(d, e, f, g, h)
                        }
                    }

                    function Q(a, g, h, i, j, k, l, m, n) {
                        function o(a, b, c, d) {
                            a && (c && (a = P(a, c, d)), a.require = z.require, a.directiveName = B, (I === z || z.$$isolateScope) && (a = da(a, {
                                isolateScope: !0
                            })), l.push(a)), b && (c && (b = P(b, c, d)), b.require = z.require, b.directiveName = B, (I === z || z.$$isolateScope) && (b = da(b, {
                                isolateScope: !0
                            })), m.push(b))
                        }

                        function p(a, b, c, d) {
                            var e, g, h = "data",
                                i = !1,
                                j = c;
                            if (u(b)) {
                                if (g = b.match(r), b = b.substring(g[0].length), g[3] && (g[1] ? g[3] = null : g[1] = g[3]), "^" === g[1] ? h = "inheritedData" : "^^" === g[1] && (h = "inheritedData", j = c.parent()), "?" === g[2] && (i = !0), e = null, d && "data" === h && (e = d[b]) && (e = e.instance), e = e || j[h]("$" + b + "Controller"), !e && !i) throw Ud("ctreq", "Controller '{0}', required by directive '{1}', can't be found!", b, a);
                                return e || null
                            }
                            return jd(b) && (e = [], f(b, function(b) {
                                e.push(p(a, b, c, d))
                            })), e
                        }

                        function v(a, b, e, i, j) {
                            function k(a, b, d) {
                                var e;
                                return A(a) || (d = b, b = a, a = c), U && (e = v), d || (d = U ? x.parent() : x), j(a, b, e, d, D)
                            }
                            var n, o, r, t, u, v, w, x, z;
                            if (g === e ? (z = h, x = h.$$element) : (x = $c(e), z = new ga(x, h)), I && (u = b.$new(!0)), j && (w = k, w.$$boundTransclude = j), H && (y = {}, v = {}, f(H, function(a) {
                                    var c, d = {
                                        $scope: a === I || a.$$isolateScope ? u : b,
                                        $element: x,
                                        $attrs: z,
                                        $transclude: w
                                    };
                                    t = a.controller, "@" == t && (t = z[a.name]), c = s(t, d, !0, a.controllerAs), v[a.name] = c, U || x.data("$" + a.name + "Controller", c.instance), y[a.name] = c
                                })), I) {
                                F.$$addScopeInfo(x, u, !0, !(J && (J === I || J === I.$$originalDirective))), F.$$addScopeClass(x, !0);
                                var B = y && y[I.name],
                                    C = u;
                                B && B.identifier && I.bindToController === !0 && (C = B.instance), f(u.$$isolateBindings = I.$$isolateBindings, function(a, c) {
                                    var e, f, g, h, i = a.attrName,
                                        j = a.optional,
                                        k = a.mode;
                                    switch (k) {
                                        case "@":
                                            z.$observe(i, function(a) {
                                                C[c] = a
                                            }), z.$$observers[i].$$scope = b, z[i] && (C[c] = d(z[i])(b));
                                            break;
                                        case "=":
                                            if (j && !z[i]) return;
                                            f = q(z[i]), h = f.literal ? M : function(a, b) {
                                                return a === b || a !== a && b !== b
                                            }, g = f.assign || function() {
                                                    throw e = C[c] = f(b), Ud("nonassign", "Expression '{0}' used with directive '{1}' is non-assignable!", z[i], I.name)
                                                }, e = C[c] = f(b);
                                            var l = function(a) {
                                                return h(a, C[c]) || (h(a, e) ? g(b, a = C[c]) : C[c] = a), e = a
                                            };
                                            l.$stateful = !0;
                                            var m;
                                            m = a.collection ? b.$watchCollection(z[i], l) : b.$watch(q(z[i], l), null, f.literal), u.$on("$destroy", m);
                                            break;
                                        case "&":
                                            f = q(z[i]), C[c] = function(a) {
                                                return f(b, a)
                                            }
                                    }
                                })
                            }
                            for (y && (f(y, function(a) {
                                a()
                            }), y = null), n = 0, o = l.length; o > n; n++) r = l[n], fa(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w);
                            var D = b;
                            for (I && (I.template || null === I.templateUrl) && (D = u), a && a(D, e.childNodes, c, j), n = m.length - 1; n >= 0; n--) r = m[n], fa(r, r.isolateScope ? u : b, x, z, r.require && p(r.directiveName, r.require, x, v), w)
                        }
                        n = n || {};
                        for (var w, y, z, B, C, D, E, G = -Number.MAX_VALUE, H = n.controllerDirectives, I = n.newIsolateScopeDirective, J = n.templateDirective, K = n.nonTlbTranscludeDirective, Q = !1, S = !1, U = n.hasElementTranscludeDirective, X = h.$$element = $c(g), Z = k, _ = i, aa = 0, ca = a.length; ca > aa; aa++) {
                            z = a[aa];
                            var ea = z.$$start,
                                ha = z.$$end;
                            if (ea && (X = N(g, ea, ha)), C = c, G > z.priority) break;
                            if ((E = z.scope) && (z.templateUrl || (t(E) ? (Y("new/isolated scope", I || w, z, X), I = z) : Y("new/isolated scope", I, z, X)), w = w || z), B = z.name, !z.templateUrl && z.controller && (E = z.controller, H = H || {}, Y("'" + B + "' controller", H[B], z, X), H[B] = z), (E = z.transclude) && (Q = !0, z.$$tlb || (Y("transclusion", K, z, X), K = z), "element" == E ? (U = !0, G = z.priority, C = X, X = h.$$element = $c(b.createComment(" " + B + ": " + h[B] + " ")), g = X[0], ba(j, O(C), g), _ = F(C, i, G, Z && Z.name, {
                                    nonTlbTranscludeDirective: K
                                })) : (C = $c(va(g)).contents(), X.empty(), _ = F(C, i))), z.template)
                                if (S = !0, Y("template", J, z, X), J = z, E = x(z.template) ? z.template(X, h) : z.template, E = ka(E), z.replace) {
                                    if (Z = z, C = qa(E) ? [] : ab($(z.templateNamespace, kd(E))), g = C[0], 1 != C.length || g.nodeType !== qd) throw Ud("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", B, "");
                                    ba(j, X, g);
                                    var ia = {
                                            $attr: {}
                                        }, ja = L(g, [], ia),
                                        la = a.splice(aa + 1, a.length - (aa + 1));
                                    I && R(ja), a = a.concat(ja).concat(la), V(h, ia), ca = a.length
                                } else X.html(E);
                            if (z.templateUrl) S = !0, Y("template", J, z, X), J = z, z.replace && (Z = z), v = W(a.splice(aa, a.length - aa), X, h, j, Q && _, l, m, {
                                controllerDirectives: H,
                                newIsolateScopeDirective: I,
                                templateDirective: J,
                                nonTlbTranscludeDirective: K
                            }), ca = a.length;
                            else if (z.compile) try {
                                D = z.compile(X, h, _), x(D) ? o(null, D, ea, ha) : D && o(D.pre, D.post, ea, ha)
                            } catch (ma) {
                                e(ma, T(X))
                            }
                            z.terminal && (v.terminal = !0, G = Math.max(G, z.priority))
                        }
                        return v.scope = w && w.scope === !0, v.transcludeOnThisElement = Q, v.elementTranscludeOnThisElement = U, v.templateOnThisElement = S, v.transclude = _, n.hasElementTranscludeDirective = U, v
                    }

                    function R(a) {
                        for (var b = 0, c = a.length; c > b; b++) a[b] = n(a[b], {
                            $$isolateScope: !0
                        })
                    }

                    function S(b, d, f, i, j, k, l) {
                        if (d === j) return null;
                        var m = null;
                        if (g.hasOwnProperty(d))
                            for (var o, p = a.get(d + h), q = 0, r = p.length; r > q; q++) try {
                                o = p[q], (i === c || i > o.priority) && -1 != o.restrict.indexOf(f) && (k && (o = n(o, {
                                    $$start: k,
                                    $$end: l
                                })), b.push(o), m = o)
                            } catch (s) {
                                e(s)
                            }
                        return m
                    }

                    function U(b) {
                        if (g.hasOwnProperty(b))
                            for (var c, d = a.get(b + h), e = 0, f = d.length; f > e; e++)
                                if (c = d[e], c.multiElement) return !0;
                        return !1
                    }

                    function V(a, b) {
                        var c = b.$attr,
                            d = a.$attr,
                            e = a.$$element;
                        f(a, function(d, e) {
                            "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                        }), f(b, function(b, f) {
                            "class" == f ? (E(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == f ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == f.charAt(0) || a.hasOwnProperty(f) || (a[f] = b, d[f] = c[f])
                        })
                    }

                    function W(a, b, c, d, e, g, h, j) {
                        var k, m, n = [],
                            o = b[0],
                            p = a.shift(),
                            q = l({}, p, {
                                templateUrl: null,
                                transclude: null,
                                replace: null,
                                $$originalDirective: p
                            }),
                            r = x(p.templateUrl) ? p.templateUrl(b, c) : p.templateUrl,
                            s = p.templateNamespace;
                        return b.empty(), i(B.getTrustedResourceUrl(r)).then(function(i) {
                            var l, u, v, w;
                            if (i = ka(i), p.replace) {
                                if (v = qa(i) ? [] : ab($(s, kd(i))), l = v[0], 1 != v.length || l.nodeType !== qd) throw Ud("tplrt", "Template for directive '{0}' must have exactly one root element. {1}", p.name, r);
                                u = {
                                    $attr: {}
                                }, ba(d, b, l);
                                var x = L(l, [], u);
                                t(p.scope) && R(x), a = x.concat(a), V(c, u)
                            } else l = o, b.html(i);
                            for (a.unshift(q), k = Q(a, l, c, e, b, p, g, h, j), f(d, function(a, c) {
                                a == l && (d[c] = b[0])
                            }), m = H(b[0].childNodes, e); n.length;) {
                                var y = n.shift(),
                                    z = n.shift(),
                                    A = n.shift(),
                                    B = n.shift(),
                                    C = b[0];
                                if (!y.$$destroyed) {
                                    if (z !== o) {
                                        var D = z.className;
                                        j.hasElementTranscludeDirective && p.replace || (C = va(l)), ba(A, $c(z), C), E($c(C), D)
                                    }
                                    w = k.transcludeOnThisElement ? K(y, k.transclude, B) : B, k(m, y, C, d, w)
                                }
                            }
                            n = null
                        }),
                            function(a, b, c, d, e) {
                                var f = e;
                                b.$$destroyed || (n ? n.push(b, c, d, f) : (k.transcludeOnThisElement && (f = K(b, k.transclude, e)), k(m, b, c, d, f)))
                            }
                    }

                    function X(a, b) {
                        var c = b.priority - a.priority;
                        return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
                    }

                    function Y(a, b, c, d) {
                        if (b) throw Ud("multidir", "Multiple directives [{0}, {1}] asking for {2} on: {3}", b.name, c.name, a, T(d))
                    }

                    function Z(a, b) {
                        var c = d(b, !0);
                        c && a.push({
                            priority: 0,
                            compile: function(a) {
                                var b = a.parent(),
                                    d = !! b.length;
                                return d && F.$$addBindingClass(b),
                                    function(a, b) {
                                        var e = b.parent();
                                        d || F.$$addBindingClass(e), F.$$addBindingInfo(e, c.expressions), a.$watch(c, function(a) {
                                            b[0].nodeValue = a
                                        })
                                    }
                            }
                        })
                    }

                    function $(a, c) {
                        switch (a = Uc(a || "html")) {
                            case "svg":
                            case "math":
                                var d = b.createElement("div");
                                return d.innerHTML = "<" + a + ">" + c + "</" + a + ">", d.childNodes[0].childNodes;
                            default:
                                return c
                        }
                    }

                    function _(a, b) {
                        if ("srcdoc" == b) return B.HTML;
                        var c = I(a);
                        return "xlinkHref" == b || "form" == c && "action" == b || "img" != c && ("src" == b || "ngSrc" == b) ? B.RESOURCE_URL : void 0
                    }

                    function aa(a, b, c, e, f) {
                        var g = _(a, e);
                        f = m[e] || f;
                        var h = d(c, !0, g, f);
                        if (h) {
                            if ("multiple" === e && "select" === I(a)) throw Ud("selmulti", "Binding to the 'multiple' attribute is not supported. Element: {0}", T(a));
                            b.push({
                                priority: 100,
                                compile: function() {
                                    return {
                                        pre: function(a, b, i) {
                                            var j = i.$$observers || (i.$$observers = {});
                                            if (v.test(e)) throw Ud("nodomevents", "Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
                                            var k = i[e];
                                            k !== c && (h = k && d(k, !0, g, f), c = k), h && (i[e] = h(a), (j[e] || (j[e] = [])).$$inter = !0, (i.$$observers && i.$$observers[e].$$scope || a).$watch(h, function(a, b) {
                                                "class" === e && a != b ? i.$updateClass(a, b) : i.$set(e, a)
                                            }))
                                        }
                                    }
                                }
                            })
                        }
                    }

                    function ba(a, c, d) {
                        var e, f, g = c[0],
                            h = c.length,
                            i = g.parentNode;
                        if (a)
                            for (e = 0, f = a.length; f > e; e++)
                                if (a[e] == g) {
                                    a[e++] = d;
                                    for (var j = e, k = j + h - 1, l = a.length; l > j; j++, k++) l > k ? a[j] = a[k] : delete a[j];
                                    a.length -= h - 1, a.context === g && (a.context = d);
                                    break
                                }
                        i && i.replaceChild(d, g);
                        var m = b.createDocumentFragment();
                        m.appendChild(g), $c(d).data($c(g).data()), _c ? (id = !0, _c.cleanData([g])) : delete $c.cache[g[$c.expando]];
                        for (var n = 1, o = c.length; o > n; n++) {
                            var p = c[n];
                            $c(p).remove(), m.appendChild(p), delete c[n]
                        }
                        c[0] = d, c.length = 1
                    }

                    function da(a, b) {
                        return l(function() {
                            return a.apply(null, arguments)
                        }, a, b)
                    }

                    function fa(a, b, c, d, f, g) {
                        try {
                            a(b, c, d, f, g)
                        } catch (h) {
                            e(h, T(c))
                        }
                    }
                    var ga = function(a, b) {
                        if (b) {
                            var c, d, e, f = Object.keys(b);
                            for (c = 0, d = f.length; d > c; c++) e = f[c], this[e] = b[e]
                        } else this.$attr = {};
                        this.$$element = a
                    };
                    ga.prototype = {
                        $normalize: $a,
                        $addClass: function(a) {
                            a && a.length > 0 && C.addClass(this.$$element, a)
                        },
                        $removeClass: function(a) {
                            a && a.length > 0 && C.removeClass(this.$$element, a)
                        },
                        $updateClass: function(a, b) {
                            var c = _a(a, b);
                            c && c.length && C.addClass(this.$$element, c);
                            var d = _a(b, a);
                            d && d.length && C.removeClass(this.$$element, d)
                        },
                        $set: function(a, b, d, g) {
                            var h, i = this.$$element[0],
                                j = Ka(i, a),
                                k = La(i, a),
                                l = a;
                            if (j ? (this.$$element.prop(a, b), g = j) : k && (this[k] = b, l = k), this[a] = b, g ? this.$attr[a] = g : (g = this.$attr[a], g || (this.$attr[a] = g = ca(a, "-"))), h = I(this.$$element), "a" === h && "href" === a || "img" === h && "src" === a) this[a] = b = D(b, "src" === a);
                            else if ("img" === h && "srcset" === a) {
                                for (var m = "", n = kd(b), o = /(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/, p = /\s/.test(n) ? o : /(,)/, q = n.split(p), r = Math.floor(q.length / 2), s = 0; r > s; s++) {
                                    var t = 2 * s;
                                    m += D(kd(q[t]), !0), m += " " + kd(q[t + 1])
                                }
                                var u = kd(q[2 * s]).split(/\s/);
                                m += D(kd(u[0]), !0), 2 === u.length && (m += " " + kd(u[1])), this[a] = b = m
                            }
                            d !== !1 && (null === b || b === c ? this.$$element.removeAttr(g) : this.$$element.attr(g, b));
                            var v = this.$$observers;
                            v && f(v[l], function(a) {
                                try {
                                    a(b)
                                } catch (c) {
                                    e(c)
                                }
                            })
                        },
                        $observe: function(a, b) {
                            var c = this,
                                d = c.$$observers || (c.$$observers = ja()),
                                e = d[a] || (d[a] = []);
                            return e.push(b), y.$evalAsync(function() {
                                !e.$$inter && c.hasOwnProperty(a) && b(c[a])
                            }),
                                function() {
                                    J(e, b)
                                }
                        }
                    };
                    var ha = d.startSymbol(),
                        ia = d.endSymbol(),
                        ka = "{{" == ha || "}}" == ia ? p : function(a) {
                            return a.replace(/\{\{/g, ha).replace(/}}/g, ia)
                        }, la = /^ngAttr[A-Z]/;
                    return F.$$addBindingInfo = w ? function(a, b) {
                        var c = a.data("$binding") || [];
                        jd(b) ? c = c.concat(b) : c.push(b), a.data("$binding", c)
                    } : o, F.$$addBindingClass = w ? function(a) {
                        E(a, "ng-binding")
                    } : o, F.$$addScopeInfo = w ? function(a, b, c, d) {
                        var e = c ? d ? "$isolateScopeNoTemplate" : "$isolateScope" : "$scope";
                        a.data(e, b)
                    } : o, F.$$addScopeClass = w ? function(a, b) {
                        E(a, b ? "ng-isolate-scope" : "ng-scope")
                    } : o, F
                }
            ]
        }

        function $a(a) {
            return pa(a.replace(Vd, ""))
        }

        function _a(a, b) {
            var c = "",
                d = a.split(/\s+/),
                e = b.split(/\s+/);
            a: for (var f = 0; f < d.length; f++) {
                for (var g = d[f], h = 0; h < e.length; h++)
                    if (g == e[h]) continue a;
                c += (c.length > 0 ? " " : "") + g
            }
            return c
        }

        function ab(a) {
            a = $c(a);
            var b = a.length;
            if (1 >= b) return a;
            for (; b--;) {
                var c = a[b];
                c.nodeType === sd && cd.call(a, b, 1)
            }
            return a
        }

        function bb() {
            var a = {}, b = !1,
                e = /^(\S+)(\s+as\s+(\w+))?$/;
            this.register = function(b, c) {
                ga(b, "controller"), t(b) ? l(a, b) : a[b] = c
            }, this.allowGlobals = function() {
                b = !0
            }, this.$get = ["$injector", "$window",
                function(f, g) {
                    function h(a, b, c, e) {
                        if (!a || !t(a.$scope)) throw d("$controller")("noscp", "Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.", e, b);
                        a.$scope[b] = c
                    }
                    return function(d, i, j, k) {
                        var m, n, o, p;
                        if (j = j === !0, k && u(k) && (p = k), u(d) && (n = d.match(e), o = n[1], p = p || n[3], d = a.hasOwnProperty(o) ? a[o] : ha(i.$scope, o, !0) || (b ? ha(g, o, !0) : c), fa(d, o, !0)), j) {
                            var q = (jd(d) ? d[d.length - 1] : d).prototype;
                            return m = Object.create(q || null), p && h(i, p, m, o || d.name), l(function() {
                                return f.invoke(d, m, i, o), m
                            }, {
                                instance: m,
                                identifier: p
                            })
                        }
                        return m = f.instantiate(d, i, o), p && h(i, p, m, o || d.name), m
                    }
                }
            ]
        }

        function cb() {
            this.$get = ["$window",
                function(a) {
                    return $c(a.document)
                }
            ]
        }

        function db() {
            this.$get = ["$log",
                function(a) {
                    return function(b, c) {
                        a.error.apply(a, arguments)
                    }
                }
            ]
        }

        function eb(a, b) {
            if (u(a)) {
                var c = a.replace($d, "").trim();
                if (c) {
                    var d = b("Content-Type");
                    (d && 0 === d.indexOf(Wd) || fb(c)) && (a = S(c))
                }
            }
            return a
        }

        function fb(a) {
            var b = a.match(Yd);
            return b && Zd[b[0]].test(a)
        }

        function gb(a) {
            var b, c, d, e = ja();
            return a ? (f(a.split("\n"), function(a) {
                d = a.indexOf(":"), b = Uc(kd(a.substr(0, d))), c = kd(a.substr(d + 1)), b && (e[b] = e[b] ? e[b] + ", " + c : c)
            }), e) : e
        }

        function hb(a) {
            var b = t(a) ? a : c;
            return function(c) {
                if (b || (b = gb(a)), c) {
                    var d = b[Uc(c)];
                    return void 0 === d && (d = null), d
                }
                return b
            }
        }

        function ib(a, b, c, d) {
            return x(d) ? d(a, b, c) : (f(d, function(d) {
                a = d(a, b, c)
            }), a)
        }

        function jb(a) {
            return a >= 200 && 300 > a
        }

        function kb() {
            var a = this.defaults = {
                transformResponse: [eb],
                transformRequest: [
                    function(a) {
                        return !t(a) || B(a) || D(a) || C(a) ? a : R(a)
                    }
                ],
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*"
                    },
                    post: L(Xd),
                    put: L(Xd),
                    patch: L(Xd)
                },
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN"
            }, b = !1;
            this.useApplyAsync = function(a) {
                return s(a) ? (b = !! a, this) : b
            };
            var e = this.interceptors = [];
            this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector",
                function(g, i, j, k, m, n) {
                    function o(b) {
                        function e(a) {
                            var b = l({}, a);
                            return a.data ? b.data = ib(a.data, a.headers, a.status, i.transformResponse) : b.data = a.data, jb(a.status) ? b : m.reject(b)
                        }

                        function g(a) {
                            var b, c = {};
                            return f(a, function(a, d) {
                                x(a) ? (b = a(), null != b && (c[d] = b)) : c[d] = a
                            }), c
                        }

                        function h(b) {
                            var c, d, e, f = a.headers,
                                h = l({}, b.headers);
                            f = l({}, f.common, f[Uc(b.method)]);
                            a: for (c in f) {
                                d = Uc(c);
                                for (e in h)
                                    if (Uc(e) === d) continue a;
                                h[c] = f[c]
                            }
                            return g(h)
                        }
                        if (!gd.isObject(b)) throw d("$http")("badreq", "Http request configuration must be an object.  Received: {0}", b);
                        var i = l({
                            method: "get",
                            transformRequest: a.transformRequest,
                            transformResponse: a.transformResponse
                        }, b);
                        i.headers = h(b), i.method = Wc(i.method);
                        var j = function(b) {
                                var d = b.headers,
                                    g = ib(b.data, hb(d), c, b.transformRequest);
                                return r(g) && f(d, function(a, b) {
                                    "content-type" === Uc(b) && delete d[b]
                                }), r(b.withCredentials) && !r(a.withCredentials) && (b.withCredentials = a.withCredentials), v(b, g).then(e, e)
                            }, k = [j, c],
                            n = m.when(i);
                        for (f(A, function(a) {
                            (a.request || a.requestError) && k.unshift(a.request, a.requestError), (a.response || a.responseError) && k.push(a.response, a.responseError)
                        }); k.length;) {
                            var o = k.shift(),
                                p = k.shift();
                            n = n.then(o, p)
                        }
                        return n.success = function(a) {
                            return n.then(function(b) {
                                a(b.data, b.status, b.headers, i)
                            }), n
                        }, n.error = function(a) {
                            return n.then(null, function(b) {
                                a(b.data, b.status, b.headers, i)
                            }), n
                        }, n
                    }

                    function p(a) {
                        f(arguments, function(a) {
                            o[a] = function(b, c) {
                                return o(l(c || {}, {
                                    method: a,
                                    url: b
                                }))
                            }
                        })
                    }

                    function q(a) {
                        f(arguments, function(a) {
                            o[a] = function(b, c, d) {
                                return o(l(d || {}, {
                                    method: a,
                                    url: b,
                                    data: c
                                }))
                            }
                        })
                    }

                    function v(d, e) {
                        function f(a, c, d, e) {
                            function f() {
                                h(c, a, d, e)
                            }
                            n && (jb(a) ? n.put(w, [a, c, gb(d), e]) : n.remove(w)), b ? k.$applyAsync(f) : (f(), k.$$phase || k.$apply())
                        }

                        function h(a, b, c, e) {
                            b = Math.max(b, 0), (jb(b) ? q.resolve : q.reject)({
                                data: a,
                                status: b,
                                headers: hb(c),
                                config: d,
                                statusText: e
                            })
                        }

                        function j(a) {
                            h(a.data, a.status, L(a.headers()), a.statusText)
                        }

                        function l() {
                            var a = o.pendingRequests.indexOf(d); - 1 !== a && o.pendingRequests.splice(a, 1)
                        }
                        var n, p, q = m.defer(),
                            u = q.promise,
                            v = d.headers,
                            w = y(d.url, d.params);
                        if (o.pendingRequests.push(d), u.then(l, l), !d.cache && !a.cache || d.cache === !1 || "GET" !== d.method && "JSONP" !== d.method || (n = t(d.cache) ? d.cache : t(a.cache) ? a.cache : z), n && (p = n.get(w), s(p) ? F(p) ? p.then(j, j) : jd(p) ? h(p[1], p[0], L(p[2]), p[3]) : h(p, 200, {}, "OK") : n.put(w, u)), r(p)) {
                            var x = ec(d.url) ? i.cookies()[d.xsrfCookieName || a.xsrfCookieName] : c;
                            x && (v[d.xsrfHeaderName || a.xsrfHeaderName] = x), g(d.method, w, e, f, v, d.timeout, d.withCredentials, d.responseType)
                        }
                        return u
                    }

                    function y(a, b) {
                        if (!b) return a;
                        var c = [];
                        return h(b, function(a, b) {
                            null === a || r(a) || (jd(a) || (a = [a]), f(a, function(a) {
                                t(a) && (a = w(a) ? a.toISOString() : R(a)), c.push(Y(b) + "=" + Y(a))
                            }))
                        }), c.length > 0 && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&")), a
                    }
                    var z = j("$http"),
                        A = [];
                    return f(e, function(a) {
                        A.unshift(u(a) ? n.get(a) : n.invoke(a))
                    }), o.pendingRequests = [], p("get", "delete", "head", "jsonp"), q("post", "put", "patch"), o.defaults = a, o
                }
            ]
        }

        function lb() {
            return new a.XMLHttpRequest
        }

        function mb() {
            this.$get = ["$browser", "$window", "$document",
                function(a, b, c) {
                    return nb(a, lb, a.defer, b.angular.callbacks, c[0])
                }
            ]
        }

        function nb(a, b, d, e, g) {
            function h(a, b, c) {
                var d = g.createElement("script"),
                    f = null;
                return d.type = "text/javascript", d.src = a, d.async = !0, f = function(a) {
                    zd(d, "load", f), zd(d, "error", f), g.body.removeChild(d), d = null;
                    var h = -1,
                        i = "unknown";
                    a && ("load" !== a.type || e[b].called || (a = {
                        type: "error"
                    }), i = a.type, h = "error" === a.type ? 404 : 200), c && c(h, i)
                }, yd(d, "load", f), yd(d, "error", f), g.body.appendChild(d), f
            }
            return function(g, i, j, k, l, m, n, p) {
                function q() {
                    u && u(), v && v.abort()
                }

                function r(b, e, f, g, h) {
                    y !== c && d.cancel(y), u = v = null, b(e, f, g, h), a.$$completeOutstandingRequest(o)
                }
                if (a.$$incOutstandingRequestCount(), i = i || a.url(), "jsonp" == Uc(g)) {
                    var t = "_" + (e.counter++).toString(36);
                    e[t] = function(a) {
                        e[t].data = a, e[t].called = !0
                    };
                    var u = h(i.replace("JSON_CALLBACK", "angular.callbacks." + t), t, function(a, b) {
                        r(k, a, e[t].data, "", b), e[t] = o
                    })
                } else {
                    var v = b();
                    v.open(g, i, !0), f(l, function(a, b) {
                        s(a) && v.setRequestHeader(b, a)
                    }), v.onload = function() {
                        var a = v.statusText || "",
                            b = "response" in v ? v.response : v.responseText,
                            c = 1223 === v.status ? 204 : v.status;
                        0 === c && (c = b ? 200 : "file" == dc(i).protocol ? 404 : 0), r(k, c, b, v.getAllResponseHeaders(), a)
                    };
                    var w = function() {
                        r(k, -1, null, null, "")
                    };
                    if (v.onerror = w, v.onabort = w, n && (v.withCredentials = !0), p) try {
                        v.responseType = p
                    } catch (x) {
                        if ("json" !== p) throw x
                    }
                    v.send(j || null)
                } if (m > 0) var y = d(q, m);
                else F(m) && m.then(q)
            }
        }

        function ob() {
            var a = "{{",
                b = "}}";
            this.startSymbol = function(b) {
                return b ? (a = b, this) : a
            }, this.endSymbol = function(a) {
                return a ? (b = a, this) : b
            }, this.$get = ["$parse", "$exceptionHandler", "$sce",
                function(c, d, e) {
                    function f(a) {
                        return "\\\\\\" + a
                    }

                    function g(f, g, m, n) {
                        function o(c) {
                            return c.replace(j, a).replace(k, b)
                        }

                        function p(a) {
                            try {
                                return a = D(a), n && !s(a) ? a : E(a)
                            } catch (b) {
                                var c = _d("interr", "Can't interpolate: {0}\n{1}", f, b.toString());
                                d(c)
                            }
                        }
                        n = !! n;
                        for (var q, t, u, v = 0, w = [], y = [], z = f.length, A = [], B = []; z > v;) {
                            if (-1 == (q = f.indexOf(a, v)) || -1 == (t = f.indexOf(b, q + h))) {
                                v !== z && A.push(o(f.substring(v)));
                                break
                            }
                            v !== q && A.push(o(f.substring(v, q))), u = f.substring(q + h, t), w.push(u), y.push(c(u, p)), v = t + i, B.push(A.length), A.push("")
                        }
                        if (m && A.length > 1) throw _d("noconcat", "Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce", f);
                        if (!g || w.length) {
                            var C = function(a) {
                                for (var b = 0, c = w.length; c > b; b++) {
                                    if (n && r(a[b])) return;
                                    A[B[b]] = a[b]
                                }
                                return A.join("")
                            }, D = function(a) {
                                return m ? e.getTrusted(m, a) : e.valueOf(a)
                            }, E = function(a) {
                                if (null == a) return "";
                                switch (typeof a) {
                                    case "string":
                                        break;
                                    case "number":
                                        a = "" + a;
                                        break;
                                    default:
                                        a = R(a)
                                }
                                return a
                            };
                            return l(function(a) {
                                var b = 0,
                                    c = w.length,
                                    e = new Array(c);
                                try {
                                    for (; c > b; b++) e[b] = y[b](a);
                                    return C(e)
                                } catch (g) {
                                    var h = _d("interr", "Can't interpolate: {0}\n{1}", f, g.toString());
                                    d(h)
                                }
                            }, {
                                exp: f,
                                expressions: w,
                                $$watchDelegate: function(a, b, c) {
                                    var d;
                                    return a.$watchGroup(y, function(c, e) {
                                        var f = C(c);
                                        x(b) && b.call(this, f, c !== e ? d : f, a), d = f
                                    }, c)
                                }
                            })
                        }
                    }
                    var h = a.length,
                        i = b.length,
                        j = new RegExp(a.replace(/./g, f), "g"),
                        k = new RegExp(b.replace(/./g, f), "g");
                    return g.startSymbol = function() {
                        return a
                    }, g.endSymbol = function() {
                        return b
                    }, g
                }
            ]
        }

        function pb() {
            this.$get = ["$rootScope", "$window", "$q", "$$q",
                function(a, b, c, d) {
                    function e(e, g, h, i) {
                        var j = b.setInterval,
                            k = b.clearInterval,
                            l = 0,
                            m = s(i) && !i,
                            n = (m ? d : c).defer(),
                            o = n.promise;
                        return h = s(h) ? h : 0, o.then(null, null, e), o.$$intervalId = j(function() {
                            n.notify(l++), h > 0 && l >= h && (n.resolve(l), k(o.$$intervalId), delete f[o.$$intervalId]), m || a.$apply()
                        }, g), f[o.$$intervalId] = n, o
                    }
                    var f = {};
                    return e.cancel = function(a) {
                        return a && a.$$intervalId in f ? (f[a.$$intervalId].reject("canceled"), b.clearInterval(a.$$intervalId), delete f[a.$$intervalId], !0) : !1
                    }, e
                }
            ]
        }

        function qb() {
            this.$get = function() {
                return {
                    id: "en-us",
                    NUMBER_FORMATS: {
                        DECIMAL_SEP: ".",
                        GROUP_SEP: ",",
                        PATTERNS: [{
                            minInt: 1,
                            minFrac: 0,
                            maxFrac: 3,
                            posPre: "",
                            posSuf: "",
                            negPre: "-",
                            negSuf: "",
                            gSize: 3,
                            lgSize: 3
                        }, {
                            minInt: 1,
                            minFrac: 2,
                            maxFrac: 2,
                            posPre: "¤",
                            posSuf: "",
                            negPre: "(¤",
                            negSuf: ")",
                            gSize: 3,
                            lgSize: 3
                        }],
                        CURRENCY_SYM: "$"
                    },
                    DATETIME_FORMATS: {
                        MONTH: "January,February,March,April,May,June,July,August,September,October,November,December".split(","),
                        SHORTMONTH: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
                        DAY: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
                        SHORTDAY: "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
                        AMPMS: ["AM", "PM"],
                        medium: "MMM d, y h:mm:ss a",
                        "short": "M/d/yy h:mm a",
                        fullDate: "EEEE, MMMM d, y",
                        longDate: "MMMM d, y",
                        mediumDate: "MMM d, y",
                        shortDate: "M/d/yy",
                        mediumTime: "h:mm:ss a",
                        shortTime: "h:mm a"
                    },
                    pluralCat: function(a) {
                        return 1 === a ? "one" : "other"
                    }
                }
            }
        }

        function rb(a) {
            for (var b = a.split("/"), c = b.length; c--;) b[c] = X(b[c]);
            return b.join("/")
        }

        function sb(a, b) {
            var c = dc(a);
            b.$$protocol = c.protocol, b.$$host = c.hostname, b.$$port = m(c.port) || be[c.protocol] || null
        }

        function tb(a, b) {
            var c = "/" !== a.charAt(0);
            c && (a = "/" + a);
            var d = dc(a);
            b.$$path = decodeURIComponent(c && "/" === d.pathname.charAt(0) ? d.pathname.substring(1) : d.pathname), b.$$search = V(d.search), b.$$hash = decodeURIComponent(d.hash), b.$$path && "/" != b.$$path.charAt(0) && (b.$$path = "/" + b.$$path)
        }

        function ub(a, b) {
            return 0 === b.indexOf(a) ? b.substr(a.length) : void 0
        }

        function vb(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substr(0, b)
        }

        function wb(a) {
            return a.replace(/(#.+)|#$/, "$1")
        }

        function xb(a) {
            return a.substr(0, vb(a).lastIndexOf("/") + 1)
        }

        function yb(a) {
            return a.substring(0, a.indexOf("/", a.indexOf("//") + 2))
        }

        function zb(a, b) {
            this.$$html5 = !0, b = b || "";
            var d = xb(a);
            sb(a, this), this.$$parse = function(a) {
                var b = ub(d, a);
                if (!u(b)) throw ce("ipthprfx", 'Invalid url "{0}", missing path prefix "{1}".', a, d);
                tb(b, this), this.$$path || (this.$$path = "/"), this.$$compose()
            }, this.$$compose = function() {
                var a = W(this.$$search),
                    b = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rb(this.$$path) + (a ? "?" + a : "") + b, this.$$absUrl = d + this.$$url.substr(1)
            }, this.$$parseLinkUrl = function(e, f) {
                if (f && "#" === f[0]) return this.hash(f.slice(1)), !0;
                var g, h, i;
                return (g = ub(a, e)) !== c ? (h = g, i = (g = ub(b, g)) !== c ? d + (ub("/", g) || g) : a + h) : (g = ub(d, e)) !== c ? i = d + g : d == e + "/" && (i = d), i && this.$$parse(i), !! i
            }
        }

        function Ab(a, b) {
            var c = xb(a);
            sb(a, this), this.$$parse = function(d) {
                function e(a, b, c) {
                    var d, e = /^\/[A-Z]:(\/.*)/;
                    return 0 === b.indexOf(c) && (b = b.replace(c, "")), e.exec(b) ? a : (d = e.exec(a), d ? d[1] : a)
                }
                var f, g = ub(a, d) || ub(c, d);
                "#" === g.charAt(0) ? (f = ub(b, g), r(f) && (f = g)) : f = this.$$html5 ? g : "", tb(f, this), this.$$path = e(this.$$path, f, a), this.$$compose()
            }, this.$$compose = function() {
                var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + (this.$$url ? b + this.$$url : "")
            }, this.$$parseLinkUrl = function(b, c) {
                return vb(a) == vb(b) ? (this.$$parse(b), !0) : !1
            }
        }

        function Bb(a, b) {
            this.$$html5 = !0, Ab.apply(this, arguments);
            var c = xb(a);
            this.$$parseLinkUrl = function(d, e) {
                if (e && "#" === e[0]) return this.hash(e.slice(1)), !0;
                var f, g;
                return a == vb(d) ? f = d : (g = ub(c, d)) ? f = a + b + g : c === d + "/" && (f = c), f && this.$$parse(f), !! f
            }, this.$$compose = function() {
                var c = W(this.$$search),
                    d = this.$$hash ? "#" + X(this.$$hash) : "";
                this.$$url = rb(this.$$path) + (c ? "?" + c : "") + d, this.$$absUrl = a + b + this.$$url
            }
        }

        function Cb(a) {
            return function() {
                return this[a]
            }
        }

        function Db(a, b) {
            return function(c) {
                return r(c) ? this[a] : (this[a] = b(c), this.$$compose(), this)
            }
        }

        function Eb() {
            var a = "",
                b = {
                    enabled: !1,
                    requireBase: !0,
                    rewriteLinks: !0
                };
            this.hashPrefix = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.html5Mode = function(a) {
                return E(a) ? (b.enabled = a, this) : t(a) ? (E(a.enabled) && (b.enabled = a.enabled), E(a.requireBase) && (b.requireBase = a.requireBase), E(a.rewriteLinks) && (b.rewriteLinks = a.rewriteLinks), this) : b
            }, this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", "$window",
                function(c, d, e, f, g) {
                    function h(a, b, c) {
                        var e = j.url(),
                            f = j.$$state;
                        try {
                            d.url(a, b, c), j.$$state = d.state()
                        } catch (g) {
                            throw j.url(e), j.$$state = f, g
                        }
                    }

                    function i(a, b) {
                        c.$broadcast("$locationChangeSuccess", j.absUrl(), a, j.$$state, b)
                    }
                    var j, k, l, m = d.baseHref(),
                        n = d.url();
                    if (b.enabled) {
                        if (!m && b.requireBase) throw ce("nobase", "$location in HTML5 mode requires a <base> tag to be present!");
                        l = yb(n) + (m || "/"), k = e.history ? zb : Bb
                    } else l = vb(n), k = Ab;
                    j = new k(l, "#" + a), j.$$parseLinkUrl(n, n), j.$$state = d.state();
                    var o = /^\s*(javascript|mailto):/i;
                    f.on("click", function(a) {
                        if (b.rewriteLinks && !a.ctrlKey && !a.metaKey && !a.shiftKey && 2 != a.which && 2 != a.button) {
                            for (var e = $c(a.target);
                                 "a" !== I(e[0]);)
                                if (e[0] === f[0] || !(e = e.parent())[0]) return;
                            var h = e.prop("href"),
                                i = e.attr("href") || e.attr("xlink:href");
                            t(h) && "[object SVGAnimatedString]" === h.toString() && (h = dc(h.animVal).href), o.test(h) || !h || e.attr("target") || a.isDefaultPrevented() || j.$$parseLinkUrl(h, i) && (a.preventDefault(), j.absUrl() != d.url() && (c.$apply(), g.angular["ff-684208-preventDefault"] = !0))
                        }
                    }), j.absUrl() != n && d.url(j.absUrl(), !0);
                    var p = !0;
                    return d.onUrlChange(function(a, b) {
                        c.$evalAsync(function() {
                            var d, e = j.absUrl(),
                                f = j.$$state;
                            j.$$parse(a), j.$$state = b, d = c.$broadcast("$locationChangeStart", a, e, b, f).defaultPrevented, j.absUrl() === a && (d ? (j.$$parse(e), j.$$state = f, h(e, !1, f)) : (p = !1, i(e, f)))
                        }), c.$$phase || c.$digest()
                    }), c.$watch(function() {
                        var a = wb(d.url()),
                            b = wb(j.absUrl()),
                            f = d.state(),
                            g = j.$$replace,
                            k = a !== b || j.$$html5 && e.history && f !== j.$$state;
                        (p || k) && (p = !1, c.$evalAsync(function() {
                            var b = j.absUrl(),
                                d = c.$broadcast("$locationChangeStart", b, a, j.$$state, f).defaultPrevented;
                            j.absUrl() === b && (d ? (j.$$parse(a), j.$$state = f) : (k && h(b, g, f === j.$$state ? null : j.$$state), i(a, f)))
                        })), j.$$replace = !1
                    }), j
                }
            ]
        }

        function Fb() {
            var a = !0,
                b = this;
            this.debugEnabled = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.$get = ["$window",
                function(c) {
                    function d(a) {
                        return a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line)), a
                    }

                    function e(a) {
                        var b = c.console || {}, e = b[a] || b.log || o,
                            g = !1;
                        try {
                            g = !! e.apply
                        } catch (h) {}
                        return g ? function() {
                            var a = [];
                            return f(arguments, function(b) {
                                a.push(d(b))
                            }), e.apply(b, a)
                        } : function(a, b) {
                            e(a, null == b ? "" : b)
                        }
                    }
                    return {
                        log: e("log"),
                        info: e("info"),
                        warn: e("warn"),
                        error: e("error"),
                        debug: function() {
                            var c = e("debug");
                            return function() {
                                a && c.apply(b, arguments)
                            }
                        }()
                    }
                }
            ]
        }

        function Gb(a, b) {
            if ("__defineGetter__" === a || "__defineSetter__" === a || "__lookupGetter__" === a || "__lookupSetter__" === a || "__proto__" === a) throw ee("isecfld", "Attempting to access a disallowed field in Angular expressions! Expression: {0}", b);
            return a
        }

        function Hb(a, b) {
            if (a) {
                if (a.constructor === a) throw ee("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a.window === a) throw ee("isecwindow", "Referencing the Window in Angular expressions is disallowed! Expression: {0}", b);
                if (a.children && (a.nodeName || a.prop && a.attr && a.find)) throw ee("isecdom", "Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}", b);
                if (a === Object) throw ee("isecobj", "Referencing Object in Angular expressions is disallowed! Expression: {0}", b)
            }
            return a
        }

        function Ib(a, b) {
            if (a) {
                if (a.constructor === a) throw ee("isecfn", "Referencing Function in Angular expressions is disallowed! Expression: {0}", b);
                if (a === fe || a === ge || a === he) throw ee("isecff", "Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}", b)
            }
        }

        function Jb(a) {
            return a.constant
        }

        function Kb(a, b, c, d, e) {
            Hb(a, e), Hb(b, e);
            for (var f, g = c.split("."), h = 0; g.length > 1; h++) {
                f = Gb(g.shift(), e);
                var i = 0 === h && b && b[f] || a[f];
                i || (i = {}, a[f] = i), a = Hb(i, e)
            }
            return f = Gb(g.shift(), e), Hb(a[f], e), a[f] = d, d
        }

        function Lb(a) {
            return "constructor" == a
        }

        function Mb(a, b, d, e, f, g, h) {
            Gb(a, g), Gb(b, g), Gb(d, g), Gb(e, g), Gb(f, g);
            var i = function(a) {
                    return Hb(a, g)
                }, j = h || Lb(a) ? i : p,
                k = h || Lb(b) ? i : p,
                l = h || Lb(d) ? i : p,
                m = h || Lb(e) ? i : p,
                n = h || Lb(f) ? i : p;
            return function(g, h) {
                var i = h && h.hasOwnProperty(a) ? h : g;
                return null == i ? i : (i = j(i[a]), b ? null == i ? c : (i = k(i[b]), d ? null == i ? c : (i = l(i[d]), e ? null == i ? c : (i = m(i[e]), f ? null == i ? c : i = n(i[f]) : i) : i) : i) : i)
            }
        }

        function Nb(a, b) {
            return function(c, d) {
                return a(c, d, Hb, b)
            }
        }

        function Ob(a, b, d) {
            var e = b.expensiveChecks,
                g = e ? oe : ne,
                h = g[a];
            if (h) return h;
            var i = a.split("."),
                j = i.length;
            if (b.csp) h = 6 > j ? Mb(i[0], i[1], i[2], i[3], i[4], d, e) : function(a, b) {
                var f, g = 0;
                do f = Mb(i[g++], i[g++], i[g++], i[g++], i[g++], d, e)(a, b), b = c, a = f; while (j > g);
                return f
            };
            else {
                var k = "";
                e && (k += "s = eso(s, fe);\nl = eso(l, fe);\n");
                var l = e;
                f(i, function(a, b) {
                    Gb(a, d);
                    var c = (b ? "s" : '((l&&l.hasOwnProperty("' + a + '"))?l:s)') + "." + a;
                    (e || Lb(a)) && (c = "eso(" + c + ", fe)", l = !0), k += "if(s == null) return undefined;\ns=" + c + ";\n"
                }), k += "return s;";
                var m = new Function("s", "l", "eso", "fe", k);
                m.toString = q(k), l && (m = Nb(m, d)), h = m
            }
            return h.sharedGetter = !0, h.assign = function(b, c, d) {
                return Kb(b, d, a, c, a)
            }, g[a] = h, h
        }

        function Pb(a) {
            return x(a.valueOf) ? a.valueOf() : pe.call(a)
        }

        function Qb() {
            var a = ja(),
                b = ja();
            this.$get = ["$filter", "$sniffer",
                function(c, d) {
                    function e(a) {
                        var b = a;
                        return a.sharedGetter && (b = function(b, c) {
                            return a(b, c)
                        }, b.literal = a.literal, b.constant = a.constant, b.assign = a.assign), b
                    }

                    function g(a, b) {
                        for (var c = 0, d = a.length; d > c; c++) {
                            var e = a[c];
                            e.constant || (e.inputs ? g(e.inputs, b) : -1 === b.indexOf(e) && b.push(e))
                        }
                        return b
                    }

                    function h(a, b) {
                        return null == a || null == b ? a === b : "object" == typeof a && (a = Pb(a), "object" == typeof a) ? !1 : a === b || a !== a && b !== b
                    }

                    function i(a, b, c, d) {
                        var e, f = d.$$inputs || (d.$$inputs = g(d.inputs, []));
                        if (1 === f.length) {
                            var i = h;
                            return f = f[0], a.$watch(function(a) {
                                var b = f(a);
                                return h(b, i) || (e = d(a), i = b && Pb(b)), e
                            }, b, c)
                        }
                        for (var j = [], k = 0, l = f.length; l > k; k++) j[k] = h;
                        return a.$watch(function(a) {
                            for (var b = !1, c = 0, g = f.length; g > c; c++) {
                                var i = f[c](a);
                                (b || (b = !h(i, j[c]))) && (j[c] = i && Pb(i))
                            }
                            return b && (e = d(a)), e
                        }, b, c)
                    }

                    function j(a, b, c, d) {
                        var e, f;
                        return e = a.$watch(function(a) {
                            return d(a)
                        }, function(a, c, d) {
                            f = a, x(b) && b.apply(this, arguments), s(a) && d.$$postDigest(function() {
                                s(f) && e()
                            })
                        }, c)
                    }

                    function k(a, b, c, d) {
                        function e(a) {
                            var b = !0;
                            return f(a, function(a) {
                                s(a) || (b = !1)
                            }), b
                        }
                        var g, h;
                        return g = a.$watch(function(a) {
                            return d(a)
                        }, function(a, c, d) {
                            h = a, x(b) && b.call(this, a, c, d), e(a) && d.$$postDigest(function() {
                                e(h) && g()
                            })
                        }, c)
                    }

                    function l(a, b, c, d) {
                        var e;
                        return e = a.$watch(function(a) {
                            return d(a)
                        }, function(a, c, d) {
                            x(b) && b.apply(this, arguments), e()
                        }, c)
                    }

                    function m(a, b) {
                        if (!b) return a;
                        var c = a.$$watchDelegate,
                            d = c !== k && c !== j,
                            e = d ? function(c, d) {
                                var e = a(c, d);
                                return b(e, c, d)
                            } : function(c, d) {
                                var e = a(c, d),
                                    f = b(e, c, d);
                                return s(e) ? f : e
                            };
                        return a.$$watchDelegate && a.$$watchDelegate !== i ? e.$$watchDelegate = a.$$watchDelegate : b.$stateful || (e.$$watchDelegate = i, e.inputs = [a]), e
                    }
                    var n = {
                        csp: d.csp,
                        expensiveChecks: !1
                    }, p = {
                        csp: d.csp,
                        expensiveChecks: !0
                    };
                    return function(d, f, g) {
                        var h, q, r;
                        switch (typeof d) {
                            case "string":
                                r = d = d.trim();
                                var s = g ? b : a;
                                if (h = s[r], !h) {
                                    ":" === d.charAt(0) && ":" === d.charAt(1) && (q = !0, d = d.substring(2));
                                    var t = g ? p : n,
                                        u = new le(t),
                                        v = new me(u, c, t);
                                    h = v.parse(d), h.constant ? h.$$watchDelegate = l : q ? (h = e(h), h.$$watchDelegate = h.literal ? k : j) : h.inputs && (h.$$watchDelegate = i), s[r] = h
                                }
                                return m(h, f);
                            case "function":
                                return m(d, f);
                            default:
                                return m(o, f)
                        }
                    }
                }
            ]
        }

        function Rb() {
            this.$get = ["$rootScope", "$exceptionHandler",
                function(a, b) {
                    return Tb(function(b) {
                        a.$evalAsync(b)
                    }, b)
                }
            ]
        }

        function Sb() {
            this.$get = ["$browser", "$exceptionHandler",
                function(a, b) {
                    return Tb(function(b) {
                        a.defer(b)
                    }, b)
                }
            ]
        }

        function Tb(a, b) {
            function e(a, b, c) {
                function d(b) {
                    return function(c) {
                        e || (e = !0, b.call(a, c))
                    }
                }
                var e = !1;
                return [d(b), d(c)]
            }

            function g() {
                this.$$state = {
                    status: 0
                }
            }

            function h(a, b) {
                return function(c) {
                    b.call(a, c)
                }
            }

            function i(a) {
                var d, e, f;
                f = a.pending, a.processScheduled = !1, a.pending = c;
                for (var g = 0, h = f.length; h > g; ++g) {
                    e = f[g][0], d = f[g][a.status];
                    try {
                        x(d) ? e.resolve(d(a.value)) : 1 === a.status ? e.resolve(a.value) : e.reject(a.value)
                    } catch (i) {
                        e.reject(i), b(i)
                    }
                }
            }

            function j(b) {
                !b.processScheduled && b.pending && (b.processScheduled = !0, a(function() {
                    i(b)
                }))
            }

            function k() {
                this.promise = new g, this.resolve = h(this, this.resolve), this.reject = h(this, this.reject), this.notify = h(this, this.notify)
            }

            function l(a) {
                var b = new k,
                    c = 0,
                    d = jd(a) ? [] : {};
                return f(a, function(a, e) {
                    c++, r(a).then(function(a) {
                        d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                    }, function(a) {
                        d.hasOwnProperty(e) || b.reject(a)
                    })
                }), 0 === c && b.resolve(d), b.promise
            }
            var m = d("$q", TypeError),
                n = function() {
                    return new k
                };
            g.prototype = {
                then: function(a, b, c) {
                    var d = new k;
                    return this.$$state.pending = this.$$state.pending || [], this.$$state.pending.push([d, a, b, c]), this.$$state.status > 0 && j(this.$$state), d.promise
                },
                "catch": function(a) {
                    return this.then(null, a)
                },
                "finally": function(a, b) {
                    return this.then(function(b) {
                        return q(b, !0, a)
                    }, function(b) {
                        return q(b, !1, a)
                    }, b)
                }
            }, k.prototype = {
                resolve: function(a) {
                    this.promise.$$state.status || (a === this.promise ? this.$$reject(m("qcycle", "Expected promise to be resolved with value other than itself '{0}'", a)) : this.$$resolve(a))
                },
                $$resolve: function(a) {
                    var c, d;
                    d = e(this, this.$$resolve, this.$$reject);
                    try {
                        (t(a) || x(a)) && (c = a && a.then), x(c) ? (this.promise.$$state.status = -1, c.call(a, d[0], d[1], this.notify)) : (this.promise.$$state.value = a, this.promise.$$state.status = 1, j(this.promise.$$state))
                    } catch (f) {
                        d[1](f), b(f)
                    }
                },
                reject: function(a) {
                    this.promise.$$state.status || this.$$reject(a)
                },
                $$reject: function(a) {
                    this.promise.$$state.value = a, this.promise.$$state.status = 2, j(this.promise.$$state)
                },
                notify: function(c) {
                    var d = this.promise.$$state.pending;
                    this.promise.$$state.status <= 0 && d && d.length && a(function() {
                        for (var a, e, f = 0, g = d.length; g > f; f++) {
                            e = d[f][0], a = d[f][3];
                            try {
                                e.notify(x(a) ? a(c) : c)
                            } catch (h) {
                                b(h)
                            }
                        }
                    })
                }
            };
            var o = function(a) {
                var b = new k;
                return b.reject(a), b.promise
            }, p = function(a, b) {
                var c = new k;
                return b ? c.resolve(a) : c.reject(a), c.promise
            }, q = function(a, b, c) {
                var d = null;
                try {
                    x(c) && (d = c())
                } catch (e) {
                    return p(e, !1)
                }
                return F(d) ? d.then(function() {
                    return p(a, b)
                }, function(a) {
                    return p(a, !1)
                }) : p(a, b)
            }, r = function(a, b, c, d) {
                var e = new k;
                return e.resolve(a), e.promise.then(b, c, d)
            }, s = function u(a) {
                function b(a) {
                    d.resolve(a)
                }

                function c(a) {
                    d.reject(a)
                }
                if (!x(a)) throw m("norslvr", "Expected resolverFn, got '{0}'", a);
                if (!(this instanceof u)) return new u(a);
                var d = new k;
                return a(b, c), d.promise
            };
            return s.defer = n, s.reject = o, s.when = r, s.all = l, s
        }

        function Ub() {
            this.$get = ["$window", "$timeout",
                function(a, b) {
                    var c = a.requestAnimationFrame || a.webkitRequestAnimationFrame,
                        d = a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.webkitCancelRequestAnimationFrame,
                        e = !! c,
                        f = e ? function(a) {
                            var b = c(a);
                            return function() {
                                d(b)
                            }
                        } : function(a) {
                            var c = b(a, 16.66, !1);
                            return function() {
                                b.cancel(c)
                            }
                        };
                    return f.supported = e, f
                }
            ]
        }

        function Vb() {
            var a = 10,
                b = d("$rootScope"),
                c = null,
                g = null;
            this.digestTtl = function(b) {
                return arguments.length && (a = b), a
            }, this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser",
                function(d, h, i, k) {
                    function l() {
                        this.$id = j(), this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null, this.$root = this, this.$$destroyed = !1, this.$$listeners = {}, this.$$listenerCount = {}, this.$$isolateBindings = null
                    }

                    function m(a) {
                        if (v.$$phase) throw b("inprog", "{0} already in progress", v.$$phase);
                        v.$$phase = a
                    }

                    function n() {
                        v.$$phase = null
                    }

                    function p(a, b, c) {
                        do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
                    }

                    function q() {}

                    function s() {
                        for (; z.length;) try {
                            z.shift()()
                        } catch (a) {
                            h(a)
                        }
                        g = null
                    }

                    function u() {
                        null === g && (g = k.defer(function() {
                            v.$apply(s)
                        }))
                    }
                    l.prototype = {
                        constructor: l,
                        $new: function(a, b) {
                            function c() {
                                d.$$destroyed = !0
                            }
                            var d;
                            return b = b || this, a ? (d = new l, d.$root = this.$root) : (this.$$ChildScope || (this.$$ChildScope = function() {
                                this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null, this.$$listeners = {}, this.$$listenerCount = {}, this.$id = j(), this.$$ChildScope = null
                            }, this.$$ChildScope.prototype = this), d = new this.$$ChildScope), d.$parent = b, d.$$prevSibling = b.$$childTail, b.$$childHead ? (b.$$childTail.$$nextSibling = d, b.$$childTail = d) : b.$$childHead = b.$$childTail = d, (a || b != this) && d.$on("$destroy", c), d
                        },
                        $watch: function(a, b, d) {
                            var e = i(a);
                            if (e.$$watchDelegate) return e.$$watchDelegate(this, b, d, e);
                            var f = this,
                                g = f.$$watchers,
                                h = {
                                    fn: b,
                                    last: q,
                                    get: e,
                                    exp: a,
                                    eq: !! d
                                };
                            return c = null, x(b) || (h.fn = o), g || (g = f.$$watchers = []), g.unshift(h),
                                function() {
                                    J(g, h), c = null
                                }
                        },
                        $watchGroup: function(a, b) {
                            function c() {
                                i = !1, j ? (j = !1, b(e, e, h)) : b(e, d, h)
                            }
                            var d = new Array(a.length),
                                e = new Array(a.length),
                                g = [],
                                h = this,
                                i = !1,
                                j = !0;
                            if (!a.length) {
                                var k = !0;
                                return h.$evalAsync(function() {
                                    k && b(e, e, h)
                                }),
                                    function() {
                                        k = !1
                                    }
                            }
                            return 1 === a.length ? this.$watch(a[0], function(a, c, f) {
                                e[0] = a, d[0] = c, b(e, a === c ? e : d, f)
                            }) : (f(a, function(a, b) {
                                var f = h.$watch(a, function(a, f) {
                                    e[b] = a, d[b] = f, i || (i = !0, h.$evalAsync(c))
                                });
                                g.push(f)
                            }), function() {
                                for (; g.length;) g.shift()()
                            })
                        },
                        $watchCollection: function(a, b) {
                            function c(a) {
                                f = a;
                                var b, c, d, h, i;
                                if (!r(f)) {
                                    if (t(f))
                                        if (e(f)) {
                                            g !== n && (g = n, q = g.length = 0, l++), b = f.length, q !== b && (l++, g.length = q = b);
                                            for (var j = 0; b > j; j++) i = g[j], h = f[j], d = i !== i && h !== h, d || i === h || (l++, g[j] = h)
                                        } else {
                                            g !== o && (g = o = {}, q = 0, l++), b = 0;
                                            for (c in f) f.hasOwnProperty(c) && (b++, h = f[c], i = g[c], c in g ? (d = i !== i && h !== h, d || i === h || (l++, g[c] = h)) : (q++, g[c] = h, l++));
                                            if (q > b) {
                                                l++;
                                                for (c in g) f.hasOwnProperty(c) || (q--, delete g[c])
                                            }
                                        } else g !== f && (g = f, l++);
                                    return l
                                }
                            }

                            function d() {
                                if (p ? (p = !1, b(f, f, j)) : b(f, h, j), k)
                                    if (t(f))
                                        if (e(f)) {
                                            h = new Array(f.length);
                                            for (var a = 0; a < f.length; a++) h[a] = f[a]
                                        } else {
                                            h = {};
                                            for (var c in f) Vc.call(f, c) && (h[c] = f[c])
                                        } else h = f
                            }
                            c.$stateful = !0;
                            var f, g, h, j = this,
                                k = b.length > 1,
                                l = 0,
                                m = i(a, c),
                                n = [],
                                o = {}, p = !0,
                                q = 0;
                            return this.$watch(m, d)
                        },
                        $digest: function() {
                            var d, e, f, i, j, l, o, p, r, t, u = a,
                                z = this,
                                A = [];
                            m("$digest"), k.$$checkUrlChange(), this === v && null !== g && (k.defer.cancel(g), s()), c = null;
                            do {
                                for (l = !1, p = z; w.length;) {
                                    try {
                                        t = w.shift(), t.scope.$eval(t.expression, t.locals)
                                    } catch (B) {
                                        h(B)
                                    }
                                    c = null
                                }
                                a: do {
                                    if (i = p.$$watchers)
                                        for (j = i.length; j--;) try {
                                            if (d = i[j])
                                                if ((e = d.get(p)) === (f = d.last) || (d.eq ? M(e, f) : "number" == typeof e && "number" == typeof f && isNaN(e) && isNaN(f))) {
                                                    if (d === c) {
                                                        l = !1;
                                                        break a
                                                    }
                                                } else l = !0, c = d, d.last = d.eq ? K(e, null) : e, d.fn(e, f === q ? e : f, p), 5 > u && (r = 4 - u, A[r] || (A[r] = []), A[r].push({
                                                    msg: x(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp,
                                                    newVal: e,
                                                    oldVal: f
                                                }))
                                        } catch (B) {
                                            h(B)
                                        }
                                    if (!(o = p.$$childHead || p !== z && p.$$nextSibling))
                                        for (; p !== z && !(o = p.$$nextSibling);) p = p.$parent
                                } while (p = o);
                                if ((l || w.length) && !u--) throw n(), b("infdig", "{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}", a, A)
                            } while (l || w.length);
                            for (n(); y.length;) try {
                                y.shift()()
                            } catch (B) {
                                h(B)
                            }
                        },
                        $destroy: function() {
                            if (!this.$$destroyed) {
                                var a = this.$parent;
                                if (this.$broadcast("$destroy"), this.$$destroyed = !0, this !== v) {
                                    for (var b in this.$$listenerCount) p(this, this.$$listenerCount[b], b);
                                    a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$destroy = this.$digest = this.$apply = this.$evalAsync = this.$applyAsync = o, this.$on = this.$watch = this.$watchGroup = function() {
                                        return o
                                    }, this.$$listeners = {}, this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = this.$$watchers = null
                                }
                            }
                        },
                        $eval: function(a, b) {
                            return i(a)(this, b)
                        },
                        $evalAsync: function(a, b) {
                            v.$$phase || w.length || k.defer(function() {
                                w.length && v.$digest()
                            }), w.push({
                                scope: this,
                                expression: a,
                                locals: b
                            })
                        },
                        $$postDigest: function(a) {
                            y.push(a)
                        },
                        $apply: function(a) {
                            try {
                                return m("$apply"), this.$eval(a)
                            } catch (b) {
                                h(b)
                            } finally {
                                n();
                                try {
                                    v.$digest()
                                } catch (b) {
                                    throw h(b), b
                                }
                            }
                        },
                        $applyAsync: function(a) {
                            function b() {
                                c.$eval(a)
                            }
                            var c = this;
                            a && z.push(b), u()
                        },
                        $on: function(a, b) {
                            var c = this.$$listeners[a];
                            c || (this.$$listeners[a] = c = []), c.push(b);
                            var d = this;
                            do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                            var e = this;
                            return function() {
                                var d = c.indexOf(b); - 1 !== d && (c[d] = null, p(e, 1, a))
                            }
                        },
                        $emit: function(a, b) {
                            var c, d, e, f = [],
                                g = this,
                                i = !1,
                                j = {
                                    name: a,
                                    targetScope: g,
                                    stopPropagation: function() {
                                        i = !0
                                    },
                                    preventDefault: function() {
                                        j.defaultPrevented = !0
                                    },
                                    defaultPrevented: !1
                                }, k = N([j], arguments, 1);
                            do {
                                for (c = g.$$listeners[a] || f, j.currentScope = g, d = 0, e = c.length; e > d; d++)
                                    if (c[d]) try {
                                        c[d].apply(null, k)
                                    } catch (l) {
                                        h(l)
                                    } else c.splice(d, 1), d--, e--;
                                if (i) return j.currentScope = null, j;
                                g = g.$parent
                            } while (g);
                            return j.currentScope = null, j
                        },
                        $broadcast: function(a, b) {
                            var c = this,
                                d = c,
                                e = c,
                                f = {
                                    name: a,
                                    targetScope: c,
                                    preventDefault: function() {
                                        f.defaultPrevented = !0
                                    },
                                    defaultPrevented: !1
                                };
                            if (!c.$$listenerCount[a]) return f;
                            for (var g, i, j, k = N([f], arguments, 1); d = e;) {
                                for (f.currentScope = d, g = d.$$listeners[a] || [], i = 0, j = g.length; j > i; i++)
                                    if (g[i]) try {
                                        g[i].apply(null, k)
                                    } catch (l) {
                                        h(l)
                                    } else g.splice(i, 1), i--, j--;
                                if (!(e = d.$$listenerCount[a] && d.$$childHead || d !== c && d.$$nextSibling))
                                    for (; d !== c && !(e = d.$$nextSibling);) d = d.$parent
                            }
                            return f.currentScope = null, f
                        }
                    };
                    var v = new l,
                        w = v.$$asyncQueue = [],
                        y = v.$$postDigestQueue = [],
                        z = v.$$applyAsyncQueue = [];
                    return v
                }
            ]
        }

        function Wb() {
            var a = /^\s*(https?|ftp|mailto|tel|file):/,
                b = /^\s*((https?|ftp|file|blob):|data:image\/)/;
            this.aHrefSanitizationWhitelist = function(b) {
                return s(b) ? (a = b, this) : a
            }, this.imgSrcSanitizationWhitelist = function(a) {
                return s(a) ? (b = a, this) : b
            }, this.$get = function() {
                return function(c, d) {
                    var e, f = d ? b : a;
                    return e = dc(c).href, "" === e || e.match(f) ? c : "unsafe:" + e
                }
            }
        }

        function Xb(a) {
            if ("self" === a) return a;
            if (u(a)) {
                if (a.indexOf("***") > -1) throw qe("iwcard", "Illegal sequence *** in string matcher.  String: {0}", a);
                return a = ld(a).replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*"), new RegExp("^" + a + "$")
            }
            if (y(a)) return new RegExp("^" + a.source + "$");
            throw qe("imatcher", 'Matchers may only be "self", string patterns or RegExp objects')
        }

        function Yb(a) {
            var b = [];
            return s(a) && f(a, function(a) {
                b.push(Xb(a))
            }), b
        }

        function Zb() {
            this.SCE_CONTEXTS = re;
            var a = ["self"],
                b = [];
            this.resourceUrlWhitelist = function(b) {
                return arguments.length && (a = Yb(b)), a
            }, this.resourceUrlBlacklist = function(a) {
                return arguments.length && (b = Yb(a)), b
            }, this.$get = ["$injector",
                function(d) {
                    function e(a, b) {
                        return "self" === a ? ec(b) : !! a.exec(b.href)
                    }

                    function f(c) {
                        var d, f, g = dc(c.toString()),
                            h = !1;
                        for (d = 0, f = a.length; f > d; d++)
                            if (e(a[d], g)) {
                                h = !0;
                                break
                            }
                        if (h)
                            for (d = 0, f = b.length; f > d; d++)
                                if (e(b[d], g)) {
                                    h = !1;
                                    break
                                }
                        return h
                    }

                    function g(a) {
                        var b = function(a) {
                            this.$$unwrapTrustedValue = function() {
                                return a
                            }
                        };
                        return a && (b.prototype = new a), b.prototype.valueOf = function() {
                            return this.$$unwrapTrustedValue()
                        }, b.prototype.toString = function() {
                            return this.$$unwrapTrustedValue().toString()
                        }, b
                    }

                    function h(a, b) {
                        var d = m.hasOwnProperty(a) ? m[a] : null;
                        if (!d) throw qe("icontext", "Attempted to trust a value in invalid context. Context: {0}; Value: {1}", a, b);
                        if (null === b || b === c || "" === b) return b;
                        if ("string" != typeof b) throw qe("itype", "Attempted to trust a non-string value in a content requiring a string: Context: {0}", a);
                        return new d(b)
                    }

                    function i(a) {
                        return a instanceof l ? a.$$unwrapTrustedValue() : a
                    }

                    function j(a, b) {
                        if (null === b || b === c || "" === b) return b;
                        var d = m.hasOwnProperty(a) ? m[a] : null;
                        if (d && b instanceof d) return b.$$unwrapTrustedValue();
                        if (a === re.RESOURCE_URL) {
                            if (f(b)) return b;
                            throw qe("insecurl", "Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}", b.toString())
                        }
                        if (a === re.HTML) return k(b);
                        throw qe("unsafe", "Attempting to use an unsafe value in a safe context.")
                    }
                    var k = function(a) {
                        throw qe("unsafe", "Attempting to use an unsafe value in a safe context.")
                    };
                    d.has("$sanitize") && (k = d.get("$sanitize"));
                    var l = g(),
                        m = {};
                    return m[re.HTML] = g(l), m[re.CSS] = g(l), m[re.URL] = g(l), m[re.JS] = g(l), m[re.RESOURCE_URL] = g(m[re.URL]), {
                        trustAs: h,
                        getTrusted: j,
                        valueOf: i
                    }
                }
            ]
        }

        function $b() {
            var a = !0;
            this.enabled = function(b) {
                return arguments.length && (a = !! b), a
            }, this.$get = ["$parse", "$sceDelegate",
                function(b, c) {
                    if (a && 8 > Zc) throw qe("iequirks", "Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");
                    var d = L(re);
                    d.isEnabled = function() {
                        return a
                    }, d.trustAs = c.trustAs, d.getTrusted = c.getTrusted, d.valueOf = c.valueOf, a || (d.trustAs = d.getTrusted = function(a, b) {
                        return b
                    }, d.valueOf = p), d.parseAs = function(a, c) {
                        var e = b(c);
                        return e.literal && e.constant ? e : b(c, function(b) {
                            return d.getTrusted(a, b)
                        })
                    };
                    var e = d.parseAs,
                        g = d.getTrusted,
                        h = d.trustAs;
                    return f(re, function(a, b) {
                        var c = Uc(b);
                        d[pa("parse_as_" + c)] = function(b) {
                            return e(a, b)
                        }, d[pa("get_trusted_" + c)] = function(b) {
                            return g(a, b)
                        }, d[pa("trust_as_" + c)] = function(b) {
                            return h(a, b)
                        }
                    }), d
                }
            ]
        }

        function _b() {
            this.$get = ["$window", "$document",
                function(a, b) {
                    var c, d, e = {}, f = m((/android (\d+)/.exec(Uc((a.navigator || {}).userAgent)) || [])[1]),
                        g = /Boxee/i.test((a.navigator || {}).userAgent),
                        h = b[0] || {}, i = /^(Moz|webkit|ms)(?=[A-Z])/,
                        j = h.body && h.body.style,
                        k = !1,
                        l = !1;
                    if (j) {
                        for (var n in j)
                            if (d = i.exec(n)) {
                                c = d[0], c = c.substr(0, 1).toUpperCase() + c.substr(1);
                                break
                            }
                        c || (c = "WebkitOpacity" in j && "webkit"), k = !! ("transition" in j || c + "Transition" in j), l = !! ("animation" in j || c + "Animation" in j), !f || k && l || (k = u(h.body.style.webkitTransition), l = u(h.body.style.webkitAnimation))
                    }
                    return {
                        history: !(!a.history || !a.history.pushState || 4 > f || g),
                        hasEvent: function(a) {
                            if ("input" === a && 11 >= Zc) return !1;
                            if (r(e[a])) {
                                var b = h.createElement("div");
                                e[a] = "on" + a in b
                            }
                            return e[a]
                        },
                        csp: md(),
                        vendorPrefix: c,
                        transitions: k,
                        animations: l,
                        android: f
                    }
                }
            ]
        }

        function ac() {
            this.$get = ["$templateCache", "$http", "$q",
                function(a, b, c) {
                    function d(e, f) {
                        function g(a) {
                            if (!f) throw Ud("tpload", "Failed to load template: {0}", e);
                            return c.reject(a)
                        }
                        d.totalPendingRequests++;
                        var h = b.defaults && b.defaults.transformResponse;
                        jd(h) ? h = h.filter(function(a) {
                            return a !== eb
                        }) : h === eb && (h = null);
                        var i = {
                            cache: a,
                            transformResponse: h
                        };
                        return b.get(e, i)["finally"](function() {
                            d.totalPendingRequests--
                        }).then(function(a) {
                            return a.data
                        }, g)
                    }
                    return d.totalPendingRequests = 0, d
                }
            ]
        }

        function bc() {
            this.$get = ["$rootScope", "$browser", "$location",
                function(a, b, c) {
                    var d = {};
                    return d.findBindings = function(a, b, c) {
                        var d = a.getElementsByClassName("ng-binding"),
                            e = [];
                        return f(d, function(a) {
                            var d = gd.element(a).data("$binding");
                            d && f(d, function(d) {
                                if (c) {
                                    var f = new RegExp("(^|\\s)" + ld(b) + "(\\s|\\||$)");
                                    f.test(d) && e.push(a)
                                } else -1 != d.indexOf(b) && e.push(a)
                            })
                        }), e
                    }, d.findModels = function(a, b, c) {
                        for (var d = ["ng-", "data-ng-", "ng\\:"], e = 0; e < d.length; ++e) {
                            var f = c ? "=" : "*=",
                                g = "[" + d[e] + "model" + f + '"' + b + '"]',
                                h = a.querySelectorAll(g);
                            if (h.length) return h
                        }
                    }, d.getLocation = function() {
                        return c.url()
                    }, d.setLocation = function(b) {
                        b !== c.url() && (c.url(b), a.$digest())
                    }, d.whenStable = function(a) {
                        b.notifyWhenNoOutstandingRequests(a)
                    }, d
                }
            ]
        }

        function cc() {
            this.$get = ["$rootScope", "$browser", "$q", "$$q", "$exceptionHandler",
                function(a, b, c, d, e) {
                    function f(f, h, i) {
                        var j, k = s(i) && !i,
                            l = (k ? d : c).defer(),
                            m = l.promise;
                        return j = b.defer(function() {
                            try {
                                l.resolve(f())
                            } catch (b) {
                                l.reject(b), e(b)
                            } finally {
                                delete g[m.$$timeoutId]
                            }
                            k || a.$apply()
                        }, h), m.$$timeoutId = j, g[j] = l, m
                    }
                    var g = {};
                    return f.cancel = function(a) {
                        return a && a.$$timeoutId in g ? (g[a.$$timeoutId].reject("canceled"), delete g[a.$$timeoutId], b.defer.cancel(a.$$timeoutId)) : !1
                    }, f
                }
            ]
        }

        function dc(a) {
            var b = a;
            return Zc && (se.setAttribute("href", b), b = se.href), se.setAttribute("href", b), {
                href: se.href,
                protocol: se.protocol ? se.protocol.replace(/:$/, "") : "",
                host: se.host,
                search: se.search ? se.search.replace(/^\?/, "") : "",
                hash: se.hash ? se.hash.replace(/^#/, "") : "",
                hostname: se.hostname,
                port: se.port,
                pathname: "/" === se.pathname.charAt(0) ? se.pathname : "/" + se.pathname
            }
        }

        function ec(a) {
            var b = u(a) ? dc(a) : a;
            return b.protocol === te.protocol && b.host === te.host
        }

        function fc() {
            this.$get = q(a)
        }

        function gc(a) {
            function b(d, e) {
                if (t(d)) {
                    var g = {};
                    return f(d, function(a, c) {
                        g[c] = b(c, a)
                    }), g
                }
                return a.factory(d + c, e)
            }
            var c = "Filter";
            this.register = b, this.$get = ["$injector",
                function(a) {
                    return function(b) {
                        return a.get(b + c)
                    }
                }
            ], b("currency", kc), b("date", vc), b("filter", hc), b("json", wc), b("limitTo", xc), b("lowercase", ye), b("number", lc), b("orderBy", yc), b("uppercase", ze)
        }

        function hc() {
            return function(a, b, c) {
                if (!jd(a)) return a;
                var d, e;
                switch (typeof b) {
                    case "function":
                        d = b;
                        break;
                    case "boolean":
                    case "number":
                    case "string":
                        e = !0;
                    case "object":
                        d = ic(b, c, e);
                        break;
                    default:
                        return a
                }
                return a.filter(d)
            }
        }

        function ic(a, b, c) {
            var d, e = t(a) && "$" in a;
            return b === !0 ? b = M : x(b) || (b = function(a, b) {
                return t(a) || t(b) ? !1 : (a = Uc("" + a), b = Uc("" + b), -1 !== a.indexOf(b))
            }), d = function(d) {
                return e && !t(d) ? jc(d, a.$, b, !1) : jc(d, a, b, c)
            }
        }

        function jc(a, b, c, d, e) {
            var f = typeof a,
                g = typeof b;
            if ("string" === g && "!" === b.charAt(0)) return !jc(a, b.substring(1), c, d);
            if (jd(a)) return a.some(function(a) {
                return jc(a, b, c, d)
            });
            switch (f) {
                case "object":
                    var h;
                    if (d) {
                        for (h in a)
                            if ("$" !== h.charAt(0) && jc(a[h], b, c, !0)) return !0;
                        return e ? !1 : jc(a, b, c, !1)
                    }
                    if ("object" === g) {
                        for (h in b) {
                            var i = b[h];
                            if (!x(i)) {
                                var j = "$" === h,
                                    k = j ? a : a[h];
                                if (!jc(k, i, c, j, j)) return !1
                            }
                        }
                        return !0
                    }
                    return c(a, b);
                case "function":
                    return !1;
                default:
                    return c(a, b)
            }
        }

        function kc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c, d) {
                return r(c) && (c = b.CURRENCY_SYM), r(d) && (d = b.PATTERNS[1].maxFrac), null == a ? a : mc(a, b.PATTERNS[1], b.GROUP_SEP, b.DECIMAL_SEP, d).replace(/\u00A4/g, c)
            }
        }

        function lc(a) {
            var b = a.NUMBER_FORMATS;
            return function(a, c) {
                return null == a ? a : mc(a, b.PATTERNS[0], b.GROUP_SEP, b.DECIMAL_SEP, c)
            }
        }

        function mc(a, b, c, d, e) {
            if (!isFinite(a) || t(a)) return "";
            var f = 0 > a;
            a = Math.abs(a);
            var g = a + "",
                h = "",
                i = [],
                j = !1;
            if (-1 !== g.indexOf("e")) {
                var k = g.match(/([\d\.]+)e(-?)(\d+)/);
                k && "-" == k[2] && k[3] > e + 1 ? a = 0 : (h = g, j = !0)
            }
            if (j) e > 0 && 1 > a && (h = a.toFixed(e), a = parseFloat(h));
            else {
                var l = (g.split(ue)[1] || "").length;
                r(e) && (e = Math.min(Math.max(b.minFrac, l), b.maxFrac)), a = +(Math.round(+(a.toString() + "e" + e)).toString() + "e" + -e);
                var m = ("" + a).split(ue),
                    n = m[0];
                m = m[1] || "";
                var o, p = 0,
                    q = b.lgSize,
                    s = b.gSize;
                if (n.length >= q + s)
                    for (p = n.length - q, o = 0; p > o; o++)(p - o) % s === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (o = p; o < n.length; o++)(n.length - o) % q === 0 && 0 !== o && (h += c), h += n.charAt(o);
                for (; m.length < e;) m += "0";
                e && "0" !== e && (h += d + m.substr(0, e))
            }
            return 0 === a && (f = !1), i.push(f ? b.negPre : b.posPre, h, f ? b.negSuf : b.posSuf), i.join("")
        }

        function nc(a, b, c) {
            var d = "";
            for (0 > a && (d = "-", a = -a), a = "" + a; a.length < b;) a = "0" + a;
            return c && (a = a.substr(a.length - b)), d + a
        }

        function oc(a, b, c, d) {
            return c = c || 0,
                function(e) {
                    var f = e["get" + a]();
                    return (c > 0 || f > -c) && (f += c), 0 === f && -12 == c && (f = 12), nc(f, b, d)
                }
        }

        function pc(a, b) {
            return function(c, d) {
                var e = c["get" + a](),
                    f = Wc(b ? "SHORT" + a : a);
                return d[f][e]
            }
        }

        function qc(a) {
            var b = -1 * a.getTimezoneOffset(),
                c = b >= 0 ? "+" : "";
            return c += nc(Math[b > 0 ? "floor" : "ceil"](b / 60), 2) + nc(Math.abs(b % 60), 2)
        }

        function rc(a) {
            var b = new Date(a, 0, 1).getDay();
            return new Date(a, 0, (4 >= b ? 5 : 12) - b)
        }

        function sc(a) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate() + (4 - a.getDay()))
        }

        function tc(a) {
            return function(b) {
                var c = rc(b.getFullYear()),
                    d = sc(b),
                    e = +d - +c,
                    f = 1 + Math.round(e / 6048e5);
                return nc(f, a)
            }
        }

        function uc(a, b) {
            return a.getHours() < 12 ? b.AMPMS[0] : b.AMPMS[1]
        }

        function vc(a) {
            function b(a) {
                var b;
                if (b = a.match(c)) {
                    var d = new Date(0),
                        e = 0,
                        f = 0,
                        g = b[8] ? d.setUTCFullYear : d.setFullYear,
                        h = b[8] ? d.setUTCHours : d.setHours;
                    b[9] && (e = m(b[9] + b[10]), f = m(b[9] + b[11])), g.call(d, m(b[1]), m(b[2]) - 1, m(b[3]));
                    var i = m(b[4] || 0) - e,
                        j = m(b[5] || 0) - f,
                        k = m(b[6] || 0),
                        l = Math.round(1e3 * parseFloat("0." + (b[7] || 0)));
                    return h.call(d, i, j, k, l), d
                }
                return a
            }
            var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
            return function(c, d, e) {
                var g, h, i = "",
                    j = [];
                if (d = d || "mediumDate", d = a.DATETIME_FORMATS[d] || d, u(c) && (c = xe.test(c) ? m(c) : b(c)), v(c) && (c = new Date(c)), !w(c)) return c;
                for (; d;) h = we.exec(d), h ? (j = N(j, h, 1), d = j.pop()) : (j.push(d), d = null);
                return e && "UTC" === e && (c = new Date(c.getTime()), c.setMinutes(c.getMinutes() + c.getTimezoneOffset())), f(j, function(b) {
                    g = ve[b], i += g ? g(c, a.DATETIME_FORMATS) : b.replace(/(^'|'$)/g, "").replace(/''/g, "'")
                }), i
            }
        }

        function wc() {
            return function(a, b) {
                return r(b) && (b = 2), R(a, b)
            }
        }

        function xc() {
            return function(a, b) {
                return v(a) && (a = a.toString()), jd(a) || u(a) ? (b = Math.abs(Number(b)) === 1 / 0 ? Number(b) : m(b), b ? b > 0 ? a.slice(0, b) : a.slice(b) : u(a) ? "" : []) : a
            }
        }

        function yc(a) {
            return function(b, c, d) {
                function f(a, b) {
                    for (var d = 0; d < c.length; d++) {
                        var e = c[d](a, b);
                        if (0 !== e) return e
                    }
                    return 0
                }

                function g(a, b) {
                    return b ? function(b, c) {
                        return a(c, b)
                    } : a
                }

                function h(a) {
                    switch (typeof a) {
                        case "number":
                        case "boolean":
                        case "string":
                            return !0;
                        default:
                            return !1
                    }
                }

                function i(a) {
                    return null === a ? "null" : "function" == typeof a.valueOf && (a = a.valueOf(), h(a)) ? a : "function" == typeof a.toString && (a = a.toString(), h(a)) ? a : ""
                }

                function j(a, b) {
                    var c = typeof a,
                        d = typeof b;
                    return c === d && "object" === c && (a = i(a), b = i(b)), c === d ? ("string" === c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : b > a ? -1 : 1) : d > c ? -1 : 1
                }
                return e(b) ? (c = jd(c) ? c : [c], 0 === c.length && (c = ["+"]), c = c.map(function(b) {
                    var c = !1,
                        d = b || p;
                    if (u(b)) {
                        if (("+" == b.charAt(0) || "-" == b.charAt(0)) && (c = "-" == b.charAt(0), b = b.substring(1)), "" === b) return g(j, c);
                        if (d = a(b), d.constant) {
                            var e = d();
                            return g(function(a, b) {
                                return j(a[e], b[e])
                            }, c)
                        }
                    }
                    return g(function(a, b) {
                        return j(d(a), d(b))
                    }, c)
                }), bd.call(b).sort(g(f, d))) : b
            }
        }

        function zc(a) {
            return x(a) && (a = {
                link: a
            }), a.restrict = a.restrict || "AC", q(a)
        }

        function Ac(a, b) {
            a.$name = b
        }

        function Bc(a, b, d, e, g) {
            var h = this,
                i = [],
                j = h.$$parentForm = a.parent().controller("form") || Ce;
            h.$error = {}, h.$$success = {}, h.$pending = c, h.$name = g(b.name || b.ngForm || "")(d), h.$dirty = !1, h.$pristine = !0, h.$valid = !0, h.$invalid = !1, h.$submitted = !1, j.$addControl(h), h.$rollbackViewValue = function() {
                f(i, function(a) {
                    a.$rollbackViewValue()
                })
            }, h.$commitViewValue = function() {
                f(i, function(a) {
                    a.$commitViewValue()
                })
            }, h.$addControl = function(a) {
                ga(a.$name, "input"), i.push(a), a.$name && (h[a.$name] = a)
            }, h.$$renameControl = function(a, b) {
                var c = a.$name;
                h[c] === a && delete h[c], h[b] = a, a.$name = b
            }, h.$removeControl = function(a) {
                a.$name && h[a.$name] === a && delete h[a.$name], f(h.$pending, function(b, c) {
                    h.$setValidity(c, null, a)
                }), f(h.$error, function(b, c) {
                    h.$setValidity(c, null, a)
                }), f(h.$$success, function(b, c) {
                    h.$setValidity(c, null, a)
                }), J(i, a)
            }, Qc({
                ctrl: this,
                $element: a,
                set: function(a, b, c) {
                    var d = a[b];
                    if (d) {
                        var e = d.indexOf(c); - 1 === e && d.push(c)
                    } else a[b] = [c]
                },
                unset: function(a, b, c) {
                    var d = a[b];
                    d && (J(d, c), 0 === d.length && delete a[b])
                },
                parentForm: j,
                $animate: e
            }), h.$setDirty = function() {
                e.removeClass(a, lf), e.addClass(a, mf), h.$dirty = !0, h.$pristine = !1, j.$setDirty()
            }, h.$setPristine = function() {
                e.setClass(a, lf, mf + " " + De), h.$dirty = !1, h.$pristine = !0, h.$submitted = !1, f(i, function(a) {
                    a.$setPristine()
                })
            }, h.$setUntouched = function() {
                f(i, function(a) {
                    a.$setUntouched()
                })
            }, h.$setSubmitted = function() {
                e.addClass(a, De), h.$submitted = !0, j.$setSubmitted()
            }
        }

        function Cc(a) {
            a.$formatters.push(function(b) {
                return a.$isEmpty(b) ? b : b.toString()
            })
        }

        function Dc(a, b, c, d, e, f) {
            Ec(a, b, c, d, e, f), Cc(d)
        }

        function Ec(a, b, c, d, e, f) {
            var g = Uc(b[0].type);
            if (!e.android) {
                var h = !1;
                b.on("compositionstart", function(a) {
                    h = !0
                }), b.on("compositionend", function() {
                    h = !1, i()
                })
            }
            var i = function(a) {
                if (j && (f.defer.cancel(j), j = null), !h) {
                    var e = b.val(),
                        i = a && a.type;
                    "password" === g || c.ngTrim && "false" === c.ngTrim || (e = kd(e)), (d.$viewValue !== e || "" === e && d.$$hasNativeValidators) && d.$setViewValue(e, i)
                }
            };
            if (e.hasEvent("input")) b.on("input", i);
            else {
                var j, k = function(a, b, c) {
                    j || (j = f.defer(function() {
                        j = null, b && b.value === c || i(a)
                    }))
                };
                b.on("keydown", function(a) {
                    var b = a.keyCode;
                    91 === b || b > 15 && 19 > b || b >= 37 && 40 >= b || k(a, this, this.value)
                }), e.hasEvent("paste") && b.on("paste cut", k)
            }
            b.on("change", i), d.$render = function() {
                b.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
            }
        }

        function Fc(a, b) {
            if (w(a)) return a;
            if (u(a)) {
                Ne.lastIndex = 0;
                var c = Ne.exec(a);
                if (c) {
                    var d = +c[1],
                        e = +c[2],
                        f = 0,
                        g = 0,
                        h = 0,
                        i = 0,
                        j = rc(d),
                        k = 7 * (e - 1);
                    return b && (f = b.getHours(), g = b.getMinutes(), h = b.getSeconds(), i = b.getMilliseconds()), new Date(d, 0, j.getDate() + k, f, g, h, i)
                }
            }
            return NaN
        }

        function Gc(a, b) {
            return function(c, d) {
                var e, g;
                if (w(c)) return c;
                if (u(c)) {
                    if ('"' == c.charAt(0) && '"' == c.charAt(c.length - 1) && (c = c.substring(1, c.length - 1)), He.test(c)) return new Date(c);
                    if (a.lastIndex = 0, e = a.exec(c)) return e.shift(), g = d ? {
                        yyyy: d.getFullYear(),
                        MM: d.getMonth() + 1,
                        dd: d.getDate(),
                        HH: d.getHours(),
                        mm: d.getMinutes(),
                        ss: d.getSeconds(),
                        sss: d.getMilliseconds() / 1e3
                    } : {
                        yyyy: 1970,
                        MM: 1,
                        dd: 1,
                        HH: 0,
                        mm: 0,
                        ss: 0,
                        sss: 0
                    }, f(e, function(a, c) {
                        c < b.length && (g[b[c]] = +a)
                    }), new Date(g.yyyy, g.MM - 1, g.dd, g.HH, g.mm, g.ss || 0, 1e3 * g.sss || 0)
                }
                return NaN
            }
        }

        function Hc(a, b, d, e) {
            return function(f, g, h, i, j, k, l) {
                function m(a) {
                    return a && !(a.getTime && a.getTime() !== a.getTime())
                }

                function n(a) {
                    return s(a) ? w(a) ? a : d(a) : c
                }
                Ic(f, g, h, i), Ec(f, g, h, i, j, k);
                var o, p = i && i.$options && i.$options.timezone;
                if (i.$$parserName = a, i.$parsers.push(function(a) {
                        if (i.$isEmpty(a)) return null;
                        if (b.test(a)) {
                            var e = d(a, o);
                            return "UTC" === p && e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                        }
                        return c
                    }), i.$formatters.push(function(a) {
                        if (a && !w(a)) throw qf("datefmt", "Expected `{0}` to be a date", a);
                        if (m(a)) {
                            if (o = a, o && "UTC" === p) {
                                var b = 6e4 * o.getTimezoneOffset();
                                o = new Date(o.getTime() + b)
                            }
                            return l("date")(a, e, p)
                        }
                        return o = null, ""
                    }), s(h.min) || h.ngMin) {
                    var q;
                    i.$validators.min = function(a) {
                        return !m(a) || r(q) || d(a) >= q
                    }, h.$observe("min", function(a) {
                        q = n(a), i.$validate()
                    })
                }
                if (s(h.max) || h.ngMax) {
                    var t;
                    i.$validators.max = function(a) {
                        return !m(a) || r(t) || d(a) <= t
                    }, h.$observe("max", function(a) {
                        t = n(a), i.$validate()
                    })
                }
            }
        }

        function Ic(a, b, d, e) {
            var f = b[0],
                g = e.$$hasNativeValidators = t(f.validity);
            g && e.$parsers.push(function(a) {
                var d = b.prop(Tc) || {};
                return d.badInput && !d.typeMismatch ? c : a
            })
        }

        function Jc(a, b, d, e, f, g) {
            if (Ic(a, b, d, e), Ec(a, b, d, e, f, g), e.$$parserName = "number", e.$parsers.push(function(a) {
                    return e.$isEmpty(a) ? null : Ke.test(a) ? parseFloat(a) : c
                }), e.$formatters.push(function(a) {
                    if (!e.$isEmpty(a)) {
                        if (!v(a)) throw qf("numfmt", "Expected `{0}` to be a number", a);
                        a = a.toString()
                    }
                    return a
                }), d.min || d.ngMin) {
                var h;
                e.$validators.min = function(a) {
                    return e.$isEmpty(a) || r(h) || a >= h
                }, d.$observe("min", function(a) {
                    s(a) && !v(a) && (a = parseFloat(a, 10)), h = v(a) && !isNaN(a) ? a : c, e.$validate()
                })
            }
            if (d.max || d.ngMax) {
                var i;
                e.$validators.max = function(a) {
                    return e.$isEmpty(a) || r(i) || i >= a
                }, d.$observe("max", function(a) {
                    s(a) && !v(a) && (a = parseFloat(a, 10)), i = v(a) && !isNaN(a) ? a : c, e.$validate()
                })
            }
        }

        function Kc(a, b, c, d, e, f) {
            Ec(a, b, c, d, e, f), Cc(d), d.$$parserName = "url", d.$validators.url = function(a, b) {
                var c = a || b;
                return d.$isEmpty(c) || Ie.test(c)
            }
        }

        function Lc(a, b, c, d, e, f) {
            Ec(a, b, c, d, e, f), Cc(d), d.$$parserName = "email", d.$validators.email = function(a, b) {
                var c = a || b;
                return d.$isEmpty(c) || Je.test(c)
            }
        }

        function Mc(a, b, c, d) {
            r(c.name) && b.attr("name", j());
            var e = function(a) {
                b[0].checked && d.$setViewValue(c.value, a && a.type)
            };
            b.on("click", e), d.$render = function() {
                var a = c.value;
                b[0].checked = a == d.$viewValue
            }, c.$observe("value", d.$render)
        }

        function Nc(a, b, c, e, f) {
            var g;
            if (s(e)) {
                if (g = a(e), !g.constant) throw d("ngModel")("constexpr", "Expected constant expression for `{0}`, but saw `{1}`.", c, e);
                return g(b)
            }
            return f
        }

        function Oc(a, b, c, d, e, f, g, h) {
            var i = Nc(h, a, "ngTrueValue", c.ngTrueValue, !0),
                j = Nc(h, a, "ngFalseValue", c.ngFalseValue, !1),
                k = function(a) {
                    d.$setViewValue(b[0].checked, a && a.type)
                };
            b.on("click", k), d.$render = function() {
                b[0].checked = d.$viewValue
            }, d.$isEmpty = function(a) {
                return a === !1
            }, d.$formatters.push(function(a) {
                return M(a, i)
            }), d.$parsers.push(function(a) {
                return a ? i : j
            })
        }

        function Pc(a, b) {
            return a = "ngClass" + a, ["$animate",
                function(c) {
                    function d(a, b) {
                        var c = [];
                        a: for (var d = 0; d < a.length; d++) {
                            for (var e = a[d], f = 0; f < b.length; f++)
                                if (e == b[f]) continue a;
                            c.push(e)
                        }
                        return c
                    }

                    function e(a) {
                        if (jd(a)) return a;
                        if (u(a)) return a.split(" ");
                        if (t(a)) {
                            var b = [];
                            return f(a, function(a, c) {
                                a && (b = b.concat(c.split(" ")))
                            }), b
                        }
                        return a
                    }
                    return {
                        restrict: "AC",
                        link: function(g, h, i) {
                            function j(a) {
                                var b = l(a, 1);
                                i.$addClass(b)
                            }

                            function k(a) {
                                var b = l(a, -1);
                                i.$removeClass(b)
                            }

                            function l(a, b) {
                                var c = h.data("$classCounts") || {}, d = [];
                                return f(a, function(a) {
                                    (b > 0 || c[a]) && (c[a] = (c[a] || 0) + b, c[a] === +(b > 0) && d.push(a))
                                }), h.data("$classCounts", c), d.join(" ")
                            }

                            function m(a, b) {
                                var e = d(b, a),
                                    f = d(a, b);
                                e = l(e, 1), f = l(f, -1), e && e.length && c.addClass(h, e), f && f.length && c.removeClass(h, f)
                            }

                            function n(a) {
                                if (b === !0 || g.$index % 2 === b) {
                                    var c = e(a || []);
                                    if (o) {
                                        if (!M(a, o)) {
                                            var d = e(o);
                                            m(d, c)
                                        }
                                    } else j(c)
                                }
                                o = L(a)
                            }
                            var o;
                            g.$watch(i[a], n, !0), i.$observe("class", function(b) {
                                n(g.$eval(i[a]))
                            }), "ngClass" !== a && g.$watch("$index", function(c, d) {
                                var f = 1 & c;
                                if (f !== (1 & d)) {
                                    var h = e(g.$eval(i[a]));
                                    f === b ? j(h) : k(h)
                                }
                            })
                        }
                    }
                }
            ]
        }

        function Qc(a) {
            function b(a, b, i) {
                b === c ? d("$pending", a, i) : e("$pending", a, i), E(b) ? b ? (l(h.$error, a, i), k(h.$$success, a, i)) : (k(h.$error, a, i), l(h.$$success, a, i)) : (l(h.$error, a, i), l(h.$$success, a, i)), h.$pending ? (f(pf, !0), h.$valid = h.$invalid = c, g("", null)) : (f(pf, !1), h.$valid = Rc(h.$error), h.$invalid = !h.$valid, g("", h.$valid));
                var j;
                j = h.$pending && h.$pending[a] ? c : h.$error[a] ? !1 : h.$$success[a] ? !0 : null, g(a, j), m.$setValidity(a, j, h)
            }

            function d(a, b, c) {
                h[a] || (h[a] = {}), k(h[a], b, c)
            }

            function e(a, b, d) {
                h[a] && l(h[a], b, d), Rc(h[a]) && (h[a] = c)
            }

            function f(a, b) {
                b && !j[a] ? (n.addClass(i, a), j[a] = !0) : !b && j[a] && (n.removeClass(i, a), j[a] = !1)
            }

            function g(a, b) {
                a = a ? "-" + ca(a, "-") : "", f(jf + a, b === !0), f(kf + a, b === !1)
            }
            var h = a.ctrl,
                i = a.$element,
                j = {}, k = a.set,
                l = a.unset,
                m = a.parentForm,
                n = a.$animate;
            j[kf] = !(j[jf] = i.hasClass(jf)), h.$setValidity = b
        }

        function Rc(a) {
            if (a)
                for (var b in a) return !1;
            return !0
        }
        var Sc = /^\/(.+)\/([a-z]*)$/,
            Tc = "validity",
            Uc = function(a) {
                return u(a) ? a.toLowerCase() : a
            }, Vc = Object.prototype.hasOwnProperty,
            Wc = function(a) {
                return u(a) ? a.toUpperCase() : a
            }, Xc = function(a) {
                return u(a) ? a.replace(/[A-Z]/g, function(a) {
                    return String.fromCharCode(32 | a.charCodeAt(0))
                }) : a
            }, Yc = function(a) {
                return u(a) ? a.replace(/[a-z]/g, function(a) {
                    return String.fromCharCode(-33 & a.charCodeAt(0))
                }) : a
            };
        "i" !== "I".toLowerCase() && (Uc = Xc, Wc = Yc);
        var Zc, $c, _c, ad, bd = [].slice,
            cd = [].splice,
            dd = [].push,
            ed = Object.prototype.toString,
            fd = d("ng"),
            gd = a.angular || (a.angular = {}),
            hd = 0;
        Zc = b.documentMode, o.$inject = [], p.$inject = [];
        var id, jd = Array.isArray,
            kd = function(a) {
                return u(a) ? a.trim() : a
            }, ld = function(a) {
                return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            }, md = function() {
                if (s(md.isActive_)) return md.isActive_;
                var a = !(!b.querySelector("[ng-csp]") && !b.querySelector("[data-ng-csp]"));
                if (!a) try {
                    new Function("")
                } catch (c) {
                    a = !0
                }
                return md.isActive_ = a
            }, nd = ["ng-", "data-ng-", "ng:", "x-ng-"],
            od = /[A-Z]/g,
            pd = !1,
            qd = 1,
            rd = 3,
            sd = 8,
            td = 9,
            ud = 11,
            vd = {
                full: "1.3.11",
                major: 1,
                minor: 3,
                dot: 11,
                codeName: "spiffy-manatee"
            };
        ua.expando = "ng339";
        var wd = ua.cache = {}, xd = 1,
            yd = function(a, b, c) {
                a.addEventListener(b, c, !1)
            }, zd = function(a, b, c) {
                a.removeEventListener(b, c, !1)
            };
        ua._data = function(a) {
            return this.cache[a[this.expando]] || {}
        };
        var Ad = /([\:\-\_]+(.))/g,
            Bd = /^moz([A-Z])/,
            Cd = {
                mouseleave: "mouseout",
                mouseenter: "mouseover"
            }, Dd = d("jqLite"),
            Ed = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            Fd = /<|&#?\w+;/,
            Gd = /<([\w:]+)/,
            Hd = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Id = {
                option: [1, '<select multiple="multiple">', "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Id.optgroup = Id.option, Id.tbody = Id.tfoot = Id.colgroup = Id.caption = Id.thead, Id.th = Id.td;
        var Jd = ua.prototype = {
            ready: function(c) {
                function d() {
                    e || (e = !0, c())
                }
                var e = !1;
                "complete" === b.readyState ? setTimeout(d) : (this.on("DOMContentLoaded", d), ua(a).on("load", d))
            },
            toString: function() {
                var a = [];
                return f(this, function(b) {
                    a.push("" + b)
                }), "[" + a.join(", ") + "]"
            },
            eq: function(a) {
                return $c(a >= 0 ? this[a] : this[this.length + a])
            },
            length: 0,
            push: dd,
            sort: [].sort,
            splice: [].splice
        }, Kd = {};
        f("multiple,selected,checked,disabled,readOnly,required,open".split(","), function(a) {
            Kd[Uc(a)] = a
        });
        var Ld = {};
        f("input,select,option,textarea,button,form,details".split(","), function(a) {
            Ld[a] = !0
        });
        var Md = {
            ngMinlength: "minlength",
            ngMaxlength: "maxlength",
            ngMin: "min",
            ngMax: "max",
            ngPattern: "pattern"
        };
        f({
            data: Aa,
            removeData: ya
        }, function(a, b) {
            ua[b] = a
        }), f({
            data: Aa,
            inheritedData: Ga,
            scope: function(a) {
                return $c.data(a, "$scope") || Ga(a.parentNode || a, ["$isolateScope", "$scope"])
            },
            isolateScope: function(a) {
                return $c.data(a, "$isolateScope") || $c.data(a, "$isolateScopeNoTemplate")
            },
            controller: Fa,
            injector: function(a) {
                return Ga(a, "$injector")
            },
            removeAttr: function(a, b) {
                a.removeAttribute(b)
            },
            hasClass: Ba,
            css: function(a, b, c) {
                return b = pa(b), s(c) ? void(a.style[b] = c) : a.style[b]
            },
            attr: function(a, b, d) {
                var e = Uc(b);
                if (Kd[e]) {
                    if (!s(d)) return a[b] || (a.attributes.getNamedItem(b) || o).specified ? e : c;
                    d ? (a[b] = !0, a.setAttribute(b, e)) : (a[b] = !1, a.removeAttribute(e))
                } else if (s(d)) a.setAttribute(b, d);
                else if (a.getAttribute) {
                    var f = a.getAttribute(b, 2);
                    return null === f ? c : f
                }
            },
            prop: function(a, b, c) {
                return s(c) ? void(a[b] = c) : a[b]
            },
            text: function() {
                function a(a, b) {
                    if (r(b)) {
                        var c = a.nodeType;
                        return c === qd || c === rd ? a.textContent : ""
                    }
                    a.textContent = b
                }
                return a.$dv = "", a
            }(),
            val: function(a, b) {
                if (r(b)) {
                    if (a.multiple && "select" === I(a)) {
                        var c = [];
                        return f(a.options, function(a) {
                            a.selected && c.push(a.value || a.text)
                        }), 0 === c.length ? null : c
                    }
                    return a.value
                }
                a.value = b
            },
            html: function(a, b) {
                return r(b) ? a.innerHTML : (wa(a, !0), void(a.innerHTML = b))
            },
            empty: Ha
        }, function(a, b) {
            ua.prototype[b] = function(b, d) {
                var e, f, g = this.length;
                if (a !== Ha && (2 == a.length && a !== Ba && a !== Fa ? b : d) === c) {
                    if (t(b)) {
                        for (e = 0; g > e; e++)
                            if (a === Aa) a(this[e], b);
                            else
                                for (f in b) a(this[e], f, b[f]);
                        return this
                    }
                    for (var h = a.$dv, i = h === c ? Math.min(g, 1) : g, j = 0; i > j; j++) {
                        var k = a(this[j], b, d);
                        h = h ? h + k : k
                    }
                    return h
                }
                for (e = 0; g > e; e++) a(this[e], b, d);
                return this
            }
        }), f({
            removeData: ya,
            on: function Rf(a, b, c, d) {
                if (s(d)) throw Dd("onargs", "jqLite#on() does not support the `selector` or `eventData` parameters");
                if (ra(a)) {
                    var e = za(a, !0),
                        f = e.events,
                        g = e.handle;
                    g || (g = e.handle = Ma(a, f));
                    for (var h = b.indexOf(" ") >= 0 ? b.split(" ") : [b], i = h.length; i--;) {
                        b = h[i];
                        var j = f[b];
                        j || (f[b] = [], "mouseenter" === b || "mouseleave" === b ? Rf(a, Cd[b], function(a) {
                            var c = this,
                                d = a.relatedTarget;
                            (!d || d !== c && !c.contains(d)) && g(a, b)
                        }) : "$destroy" !== b && yd(a, b, g), j = f[b]), j.push(c)
                    }
                }
            },
            off: xa,
            one: function(a, b, c) {
                a = $c(a), a.on(b, function d() {
                    a.off(b, c), a.off(b, d)
                }), a.on(b, c)
            },
            replaceWith: function(a, b) {
                var c, d = a.parentNode;
                wa(a), f(new ua(b), function(b) {
                    c ? d.insertBefore(b, c.nextSibling) : d.replaceChild(b, a), c = b
                })
            },
            children: function(a) {
                var b = [];
                return f(a.childNodes, function(a) {
                    a.nodeType === qd && b.push(a)
                }), b
            },
            contents: function(a) {
                return a.contentDocument || a.childNodes || []
            },
            append: function(a, b) {
                var c = a.nodeType;
                if (c === qd || c === ud) {
                    b = new ua(b);
                    for (var d = 0, e = b.length; e > d; d++) {
                        var f = b[d];
                        a.appendChild(f)
                    }
                }
            },
            prepend: function(a, b) {
                if (a.nodeType === qd) {
                    var c = a.firstChild;
                    f(new ua(b), function(b) {
                        a.insertBefore(b, c)
                    })
                }
            },
            wrap: function(a, b) {
                b = $c(b).eq(0).clone()[0];
                var c = a.parentNode;
                c && c.replaceChild(b, a), b.appendChild(a)
            },
            remove: Ia,
            detach: function(a) {
                Ia(a, !0)
            },
            after: function(a, b) {
                var c = a,
                    d = a.parentNode;
                b = new ua(b);
                for (var e = 0, f = b.length; f > e; e++) {
                    var g = b[e];
                    d.insertBefore(g, c.nextSibling), c = g
                }
            },
            addClass: Da,
            removeClass: Ca,
            toggleClass: function(a, b, c) {
                b && f(b.split(" "), function(b) {
                    var d = c;
                    r(d) && (d = !Ba(a, b)), (d ? Da : Ca)(a, b)
                })
            },
            parent: function(a) {
                var b = a.parentNode;
                return b && b.nodeType !== ud ? b : null
            },
            next: function(a) {
                return a.nextElementSibling
            },
            find: function(a, b) {
                return a.getElementsByTagName ? a.getElementsByTagName(b) : []
            },
            clone: va,
            triggerHandler: function(a, b, c) {
                var d, e, g, h = b.type || b,
                    i = za(a),
                    j = i && i.events,
                    k = j && j[h];
                k && (d = {
                    preventDefault: function() {
                        this.defaultPrevented = !0
                    },
                    isDefaultPrevented: function() {
                        return this.defaultPrevented === !0
                    },
                    stopImmediatePropagation: function() {
                        this.immediatePropagationStopped = !0
                    },
                    isImmediatePropagationStopped: function() {
                        return this.immediatePropagationStopped === !0
                    },
                    stopPropagation: o,
                    type: h,
                    target: a
                }, b.type && (d = l(d, b)), e = L(k), g = c ? [d].concat(c) : [d], f(e, function(b) {
                    d.isImmediatePropagationStopped() || b.apply(a, g)
                }))
            }
        }, function(a, b) {
            ua.prototype[b] = function(b, c, d) {
                for (var e, f = 0, g = this.length; g > f; f++) r(e) ? (e = a(this[f], b, c, d), s(e) && (e = $c(e))) : Ea(e, a(this[f], b, c, d));
                return s(e) ? e : this
            }, ua.prototype.bind = ua.prototype.on, ua.prototype.unbind = ua.prototype.off
        }), Pa.prototype = {
            put: function(a, b) {
                this[Oa(a, this.nextUid)] = b
            },
            get: function(a) {
                return this[Oa(a, this.nextUid)]
            },
            remove: function(a) {
                var b = this[a = Oa(a, this.nextUid)];
                return delete this[a], b
            }
        };
        var Nd = /^function\s*[^\(]*\(\s*([^\)]*)\)/m,
            Od = /,/,
            Pd = /^\s*(_?)(\S+?)\1\s*$/,
            Qd = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,
            Rd = d("$injector");
        Sa.$$annotate = Ra;
        var Sd = d("$animate"),
            Td = ["$provide",
                function(a) {
                    this.$$selectors = {}, this.register = function(b, c) {
                        var d = b + "-animation";
                        if (b && "." != b.charAt(0)) throw Sd("notcsel", "Expecting class selector starting with '.' got '{0}'.", b);
                        this.$$selectors[b.substr(1)] = d, a.factory(d, c)
                    }, this.classNameFilter = function(a) {
                        return 1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null), this.$$classNameFilter
                    }, this.$get = ["$$q", "$$asyncCallback", "$rootScope",
                        function(a, b, c) {
                            function d(b) {
                                var d, e = a.defer();
                                return e.promise.$$cancelFn = function() {
                                    d && d()
                                }, c.$$postDigest(function() {
                                    d = b(function() {
                                        e.resolve()
                                    })
                                }), e.promise
                            }

                            function e(a, b) {
                                var c = [],
                                    d = [],
                                    e = ja();
                                return f((a.attr("class") || "").split(/\s+/), function(a) {
                                    e[a] = !0
                                }), f(b, function(a, b) {
                                    var f = e[b];
                                    a === !1 && f ? d.push(b) : a !== !0 || f || c.push(b)
                                }), c.length + d.length > 0 && [c.length ? c : null, d.length ? d : null]
                            }

                            function g(a, b, c) {
                                for (var d = 0, e = b.length; e > d; ++d) {
                                    var f = b[d];
                                    a[f] = c
                                }
                            }

                            function h() {
                                return j || (j = a.defer(), b(function() {
                                    j.resolve(), j = null
                                })), j.promise
                            }

                            function i(a, b) {
                                if (gd.isObject(b)) {
                                    var c = l(b.from || {}, b.to || {});
                                    a.css(c)
                                }
                            }
                            var j;
                            return {
                                animate: function(a, b, c) {
                                    return i(a, {
                                        from: b,
                                        to: c
                                    }), h()
                                },
                                enter: function(a, b, c, d) {
                                    return i(a, d), c ? c.after(a) : b.prepend(a), h()
                                },
                                leave: function(a, b) {
                                    return a.remove(), h()
                                },
                                move: function(a, b, c, d) {
                                    return this.enter(a, b, c, d)
                                },
                                addClass: function(a, b, c) {
                                    return this.setClass(a, b, [], c)
                                },
                                $$addClassImmediately: function(a, b, c) {
                                    return a = $c(a), b = u(b) ? b : jd(b) ? b.join(" ") : "", f(a, function(a) {
                                        Da(a, b)
                                    }), i(a, c), h()
                                },
                                removeClass: function(a, b, c) {
                                    return this.setClass(a, [], b, c)
                                },
                                $$removeClassImmediately: function(a, b, c) {
                                    return a = $c(a), b = u(b) ? b : jd(b) ? b.join(" ") : "", f(a, function(a) {
                                        Ca(a, b)
                                    }), i(a, c), h()
                                },
                                setClass: function(a, b, c, f) {
                                    var h = this,
                                        i = "$$animateClasses",
                                        j = !1;
                                    a = $c(a);
                                    var k = a.data(i);
                                    k ? f && k.options && (k.options = gd.extend(k.options || {}, f)) : (k = {
                                        classes: {},
                                        options: f
                                    }, j = !0);
                                    var l = k.classes;
                                    return b = jd(b) ? b : b.split(" "), c = jd(c) ? c : c.split(" "), g(l, b, !0), g(l, c, !1), j && (k.promise = d(function(b) {
                                        var c = a.data(i);
                                        if (a.removeData(i), c) {
                                            var d = e(a, c.classes);
                                            d && h.$$setClassImmediately(a, d[0], d[1], c.options)
                                        }
                                        b()
                                    }), a.data(i, k)), k.promise
                                },
                                $$setClassImmediately: function(a, b, c, d) {
                                    return b && this.$$addClassImmediately(a, b), c && this.$$removeClassImmediately(a, c), i(a, d), h()
                                },
                                enabled: o,
                                cancel: o
                            }
                        }
                    ]
                }
            ],
            Ud = d("$compile");
        Za.$inject = ["$provide", "$$sanitizeUriProvider"];
        var Vd = /^((?:x|data)[\:\-_])/i,
            Wd = "application/json",
            Xd = {
                "Content-Type": Wd + ";charset=utf-8"
            }, Yd = /^\[|^\{(?!\{)/,
            Zd = {
                "[": /]$/,
                "{": /}$/
            }, $d = /^\)\]\}',?\n/,
            _d = d("$interpolate"),
            ae = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/,
            be = {
                http: 80,
                https: 443,
                ftp: 21
            }, ce = d("$location"),
            de = {
                $$html5: !1,
                $$replace: !1,
                absUrl: Cb("$$absUrl"),
                url: function(a) {
                    if (r(a)) return this.$$url;
                    var b = ae.exec(a);
                    return (b[1] || "" === a) && this.path(decodeURIComponent(b[1])), (b[2] || b[1] || "" === a) && this.search(b[3] || ""), this.hash(b[5] || ""), this
                },
                protocol: Cb("$$protocol"),
                host: Cb("$$host"),
                port: Cb("$$port"),
                path: Db("$$path", function(a) {
                    return a = null !== a ? a.toString() : "", "/" == a.charAt(0) ? a : "/" + a
                }),
                search: function(a, b) {
                    switch (arguments.length) {
                        case 0:
                            return this.$$search;
                        case 1:
                            if (u(a) || v(a)) a = a.toString(), this.$$search = V(a);
                            else {
                                if (!t(a)) throw ce("isrcharg", "The first argument of the `$location#search()` call must be a string or an object.");
                                a = K(a, {}), f(a, function(b, c) {
                                    null == b && delete a[c]
                                }), this.$$search = a
                            }
                            break;
                        default:
                            r(b) || null === b ? delete this.$$search[a] : this.$$search[a] = b
                    }
                    return this.$$compose(), this
                },
                hash: Db("$$hash", function(a) {
                    return null !== a ? a.toString() : ""
                }),
                replace: function() {
                    return this.$$replace = !0, this
                }
            };
        f([Bb, Ab, zb], function(a) {
            a.prototype = Object.create(de), a.prototype.state = function(b) {
                if (!arguments.length) return this.$$state;
                if (a !== zb || !this.$$html5) throw ce("nostate", "History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
                return this.$$state = r(b) ? null : b, this
            }
        });
        var ee = d("$parse"),
            fe = Function.prototype.call,
            ge = Function.prototype.apply,
            he = Function.prototype.bind,
            ie = ja();
        f({
            "null": function() {
                return null
            },
            "true": function() {
                return !0
            },
            "false": function() {
                return !1
            },
            undefined: function() {}
        }, function(a, b) {
            a.constant = a.literal = a.sharedGetter = !0, ie[b] = a
        }), ie["this"] = function(a) {
            return a
        }, ie["this"].sharedGetter = !0;
        var je = l(ja(), {
                "+": function(a, b, d, e) {
                    return d = d(a, b), e = e(a, b), s(d) ? s(e) ? d + e : d : s(e) ? e : c
                },
                "-": function(a, b, c, d) {
                    return c = c(a, b), d = d(a, b), (s(c) ? c : 0) - (s(d) ? d : 0)
                },
                "*": function(a, b, c, d) {
                    return c(a, b) * d(a, b)
                },
                "/": function(a, b, c, d) {
                    return c(a, b) / d(a, b)
                },
                "%": function(a, b, c, d) {
                    return c(a, b) % d(a, b)
                },
                "===": function(a, b, c, d) {
                    return c(a, b) === d(a, b)
                },
                "!==": function(a, b, c, d) {
                    return c(a, b) !== d(a, b)
                },
                "==": function(a, b, c, d) {
                    return c(a, b) == d(a, b)
                },
                "!=": function(a, b, c, d) {
                    return c(a, b) != d(a, b)
                },
                "<": function(a, b, c, d) {
                    return c(a, b) < d(a, b)
                },
                ">": function(a, b, c, d) {
                    return c(a, b) > d(a, b)
                },
                "<=": function(a, b, c, d) {
                    return c(a, b) <= d(a, b)
                },
                ">=": function(a, b, c, d) {
                    return c(a, b) >= d(a, b)
                },
                "&&": function(a, b, c, d) {
                    return c(a, b) && d(a, b)
                },
                "||": function(a, b, c, d) {
                    return c(a, b) || d(a, b)
                },
                "!": function(a, b, c) {
                    return !c(a, b)
                },
                "=": !0,
                "|": !0
            }),
            ke = {
                n: "\n",
                f: "\f",
                r: "\r",
                t: "	",
                v: "",
                "'": "'",
                '"': '"'
            }, le = function(a) {
                this.options = a
            };
        le.prototype = {
            constructor: le,
            lex: function(a) {
                for (this.text = a, this.index = 0, this.tokens = []; this.index < this.text.length;) {
                    var b = this.text.charAt(this.index);
                    if ('"' === b || "'" === b) this.readString(b);
                    else if (this.isNumber(b) || "." === b && this.isNumber(this.peek())) this.readNumber();
                    else if (this.isIdent(b)) this.readIdent();
                    else if (this.is(b, "(){}[].,;:?")) this.tokens.push({
                        index: this.index,
                        text: b
                    }), this.index++;
                    else if (this.isWhitespace(b)) this.index++;
                    else {
                        var c = b + this.peek(),
                            d = c + this.peek(2),
                            e = je[b],
                            f = je[c],
                            g = je[d];
                        if (e || f || g) {
                            var h = g ? d : f ? c : b;
                            this.tokens.push({
                                index: this.index,
                                text: h,
                                operator: !0
                            }), this.index += h.length
                        } else this.throwError("Unexpected next character ", this.index, this.index + 1)
                    }
                }
                return this.tokens
            },
            is: function(a, b) {
                return -1 !== b.indexOf(a)
            },
            peek: function(a) {
                var b = a || 1;
                return this.index + b < this.text.length ? this.text.charAt(this.index + b) : !1
            },
            isNumber: function(a) {
                return a >= "0" && "9" >= a && "string" == typeof a
            },
            isWhitespace: function(a) {
                return " " === a || "\r" === a || "	" === a || "\n" === a || "" === a || " " === a
            },
            isIdent: function(a) {
                return a >= "a" && "z" >= a || a >= "A" && "Z" >= a || "_" === a || "$" === a
            },
            isExpOperator: function(a) {
                return "-" === a || "+" === a || this.isNumber(a)
            },
            throwError: function(a, b, c) {
                c = c || this.index;
                var d = s(b) ? "s " + b + "-" + this.index + " [" + this.text.substring(b, c) + "]" : " " + c;
                throw ee("lexerr", "Lexer Error: {0} at column{1} in expression [{2}].", a, d, this.text)
            },
            readNumber: function() {
                for (var a = "", b = this.index; this.index < this.text.length;) {
                    var c = Uc(this.text.charAt(this.index));
                    if ("." == c || this.isNumber(c)) a += c;
                    else {
                        var d = this.peek();
                        if ("e" == c && this.isExpOperator(d)) a += c;
                        else if (this.isExpOperator(c) && d && this.isNumber(d) && "e" == a.charAt(a.length - 1)) a += c;
                        else {
                            if (!this.isExpOperator(c) || d && this.isNumber(d) || "e" != a.charAt(a.length - 1)) break;
                            this.throwError("Invalid exponent")
                        }
                    }
                    this.index++
                }
                this.tokens.push({
                    index: b,
                    text: a,
                    constant: !0,
                    value: Number(a)
                })
            },
            readIdent: function() {
                for (var a = this.index; this.index < this.text.length;) {
                    var b = this.text.charAt(this.index);
                    if (!this.isIdent(b) && !this.isNumber(b)) break;
                    this.index++
                }
                this.tokens.push({
                    index: a,
                    text: this.text.slice(a, this.index),
                    identifier: !0
                })
            },
            readString: function(a) {
                var b = this.index;
                this.index++;
                for (var c = "", d = a, e = !1; this.index < this.text.length;) {
                    var f = this.text.charAt(this.index);
                    if (d += f, e) {
                        if ("u" === f) {
                            var g = this.text.substring(this.index + 1, this.index + 5);
                            g.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + g + "]"), this.index += 4, c += String.fromCharCode(parseInt(g, 16))
                        } else {
                            var h = ke[f];
                            c += h || f
                        }
                        e = !1
                    } else if ("\\" === f) e = !0;
                    else {
                        if (f === a) return this.index++, void this.tokens.push({
                            index: b,
                            text: d,
                            constant: !0,
                            value: c
                        });
                        c += f
                    }
                    this.index++
                }
                this.throwError("Unterminated quote", b)
            }
        };
        var me = function(a, b, c) {
            this.lexer = a, this.$filter = b, this.options = c
        };
        me.ZERO = l(function() {
            return 0
        }, {
            sharedGetter: !0,
            constant: !0
        }), me.prototype = {
            constructor: me,
            parse: function(a) {
                this.text = a, this.tokens = this.lexer.lex(a);
                var b = this.statements();
                return 0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]), b.literal = !! b.literal, b.constant = !! b.constant, b
            },
            primary: function() {
                var a;
                this.expect("(") ? (a = this.filterChain(), this.consume(")")) : this.expect("[") ? a = this.arrayDeclaration() : this.expect("{") ? a = this.object() : this.peek().identifier && this.peek().text in ie ? a = ie[this.consume().text] : this.peek().identifier ? a = this.identifier() : this.peek().constant ? a = this.constant() : this.throwError("not a primary expression", this.peek());
                for (var b, c; b = this.expect("(", "[", ".");) "(" === b.text ? (a = this.functionCall(a, c), c = null) : "[" === b.text ? (c = a, a = this.objectIndex(a)) : "." === b.text ? (c = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
                return a
            },
            throwError: function(a, b) {
                throw ee("syntax", "Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].", b.text, a, b.index + 1, this.text, this.text.substring(b.index))
            },
            peekToken: function() {
                if (0 === this.tokens.length) throw ee("ueoe", "Unexpected end of expression: {0}", this.text);
                return this.tokens[0]
            },
            peek: function(a, b, c, d) {
                return this.peekAhead(0, a, b, c, d)
            },
            peekAhead: function(a, b, c, d, e) {
                if (this.tokens.length > a) {
                    var f = this.tokens[a],
                        g = f.text;
                    if (g === b || g === c || g === d || g === e || !b && !c && !d && !e) return f
                }
                return !1
            },
            expect: function(a, b, c, d) {
                var e = this.peek(a, b, c, d);
                return e ? (this.tokens.shift(), e) : !1
            },
            consume: function(a) {
                if (0 === this.tokens.length) throw ee("ueoe", "Unexpected end of expression: {0}", this.text);
                var b = this.expect(a);
                return b || this.throwError("is unexpected, expecting [" + a + "]", this.peek()), b
            },
            unaryFn: function(a, b) {
                var c = je[a];
                return l(function(a, d) {
                    return c(a, d, b)
                }, {
                    constant: b.constant,
                    inputs: [b]
                })
            },
            binaryFn: function(a, b, c, d) {
                var e = je[b];
                return l(function(b, d) {
                    return e(b, d, a, c)
                }, {
                    constant: a.constant && c.constant,
                    inputs: !d && [a, c]
                })
            },
            identifier: function() {
                for (var a = this.consume().text; this.peek(".") && this.peekAhead(1).identifier && !this.peekAhead(2, "(");) a += this.consume().text + this.consume().text;
                return Ob(a, this.options, this.text)
            },
            constant: function() {
                var a = this.consume().value;
                return l(function() {
                    return a
                }, {
                    constant: !0,
                    literal: !0
                })
            },
            statements: function() {
                for (var a = [];;)
                    if (this.tokens.length > 0 && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";")) return 1 === a.length ? a[0] : function(b, c) {
                        for (var d, e = 0, f = a.length; f > e; e++) d = a[e](b, c);
                        return d
                    }
            },
            filterChain: function() {
                for (var a, b = this.expression(); a = this.expect("|");) b = this.filter(b);
                return b
            },
            filter: function(a) {
                var b, d, e = this.$filter(this.consume().text);
                if (this.peek(":"))
                    for (b = [], d = []; this.expect(":");) b.push(this.expression());
                var f = [a].concat(b || []);
                return l(function(f, g) {
                    var h = a(f, g);
                    if (d) {
                        d[0] = h;
                        for (var i = b.length; i--;) d[i + 1] = b[i](f, g);
                        return e.apply(c, d)
                    }
                    return e(h)
                }, {
                    constant: !e.$stateful && f.every(Jb),
                    inputs: !e.$stateful && f
                })
            },
            expression: function() {
                return this.assignment()
            },
            assignment: function() {
                var a, b, c = this.ternary();
                return (b = this.expect("=")) ? (c.assign || this.throwError("implies assignment but [" + this.text.substring(0, b.index) + "] can not be assigned to", b), a = this.ternary(), l(function(b, d) {
                    return c.assign(b, a(b, d), d)
                }, {
                    inputs: [c, a]
                })) : c
            },
            ternary: function() {
                var a, b, c = this.logicalOR();
                if ((b = this.expect("?")) && (a = this.assignment(), this.consume(":"))) {
                    var d = this.assignment();
                    return l(function(b, e) {
                        return c(b, e) ? a(b, e) : d(b, e)
                    }, {
                        constant: c.constant && a.constant && d.constant
                    })
                }
                return c
            },
            logicalOR: function() {
                for (var a, b = this.logicalAND(); a = this.expect("||");) b = this.binaryFn(b, a.text, this.logicalAND(), !0);
                return b
            },
            logicalAND: function() {
                for (var a, b = this.equality(); a = this.expect("&&");) b = this.binaryFn(b, a.text, this.equality(), !0);
                return b
            },
            equality: function() {
                for (var a, b = this.relational(); a = this.expect("==", "!=", "===", "!==");) b = this.binaryFn(b, a.text, this.relational());
                return b
            },
            relational: function() {
                for (var a, b = this.additive(); a = this.expect("<", ">", "<=", ">=");) b = this.binaryFn(b, a.text, this.additive());
                return b
            },
            additive: function() {
                for (var a, b = this.multiplicative(); a = this.expect("+", "-");) b = this.binaryFn(b, a.text, this.multiplicative());
                return b
            },
            multiplicative: function() {
                for (var a, b = this.unary(); a = this.expect("*", "/", "%");) b = this.binaryFn(b, a.text, this.unary());
                return b
            },
            unary: function() {
                var a;
                return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(me.ZERO, a.text, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.text, this.unary()) : this.primary()
            },
            fieldAccess: function(a) {
                var b = this.identifier();
                return l(function(d, e, f) {
                    var g = f || a(d, e);
                    return null == g ? c : b(g)
                }, {
                    assign: function(c, d, e) {
                        var f = a(c, e);
                        return f || a.assign(c, f = {}, e), b.assign(f, d)
                    }
                })
            },
            objectIndex: function(a) {
                var b = this.text,
                    d = this.expression();
                return this.consume("]"), l(function(e, f) {
                    var g, h = a(e, f),
                        i = d(e, f);
                    return Gb(i, b), h ? g = Hb(h[i], b) : c
                }, {
                    assign: function(c, e, f) {
                        var g = Gb(d(c, f), b),
                            h = Hb(a(c, f), b);
                        return h || a.assign(c, h = {}, f), h[g] = e
                    }
                })
            },
            functionCall: function(a, b) {
                var d = [];
                if (")" !== this.peekToken().text)
                    do d.push(this.expression()); while (this.expect(","));
                this.consume(")");
                var e = this.text,
                    f = d.length ? [] : null;
                return function(g, h) {
                    var i = b ? b(g, h) : s(b) ? c : g,
                        j = a(g, h, i) || o;
                    if (f)
                        for (var k = d.length; k--;) f[k] = Hb(d[k](g, h), e);
                    Hb(i, e), Ib(j, e);
                    var l = j.apply ? j.apply(i, f) : j(f[0], f[1], f[2], f[3], f[4]);
                    return Hb(l, e)
                }
            },
            arrayDeclaration: function() {
                var a = [];
                if ("]" !== this.peekToken().text)
                    do {
                        if (this.peek("]")) break;
                        a.push(this.expression())
                    } while (this.expect(","));
                return this.consume("]"), l(function(b, c) {
                    for (var d = [], e = 0, f = a.length; f > e; e++) d.push(a[e](b, c));
                    return d
                }, {
                    literal: !0,
                    constant: a.every(Jb),
                    inputs: a
                })
            },
            object: function() {
                var a = [],
                    b = [];
                if ("}" !== this.peekToken().text)
                    do {
                        if (this.peek("}")) break;
                        var c = this.consume();
                        c.constant ? a.push(c.value) : c.identifier ? a.push(c.text) : this.throwError("invalid key", c), this.consume(":"), b.push(this.expression())
                    } while (this.expect(","));
                return this.consume("}"), l(function(c, d) {
                    for (var e = {}, f = 0, g = b.length; g > f; f++) e[a[f]] = b[f](c, d);
                    return e
                }, {
                    literal: !0,
                    constant: b.every(Jb),
                    inputs: b
                })
            }
        };
        var ne = ja(),
            oe = ja(),
            pe = Object.prototype.valueOf,
            qe = d("$sce"),
            re = {
                HTML: "html",
                CSS: "css",
                URL: "url",
                RESOURCE_URL: "resourceUrl",
                JS: "js"
            }, Ud = d("$compile"),
            se = b.createElement("a"),
            te = dc(a.location.href);
        gc.$inject = ["$provide"], kc.$inject = ["$locale"], lc.$inject = ["$locale"];
        var ue = ".",
            ve = {
                yyyy: oc("FullYear", 4),
                yy: oc("FullYear", 2, 0, !0),
                y: oc("FullYear", 1),
                MMMM: pc("Month"),
                MMM: pc("Month", !0),
                MM: oc("Month", 2, 1),
                M: oc("Month", 1, 1),
                dd: oc("Date", 2),
                d: oc("Date", 1),
                HH: oc("Hours", 2),
                H: oc("Hours", 1),
                hh: oc("Hours", 2, -12),
                h: oc("Hours", 1, -12),
                mm: oc("Minutes", 2),
                m: oc("Minutes", 1),
                ss: oc("Seconds", 2),
                s: oc("Seconds", 1),
                sss: oc("Milliseconds", 3),
                EEEE: pc("Day"),
                EEE: pc("Day", !0),
                a: uc,
                Z: qc,
                ww: tc(2),
                w: tc(1)
            }, we = /((?:[^yMdHhmsaZEw']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|w+))(.*)/,
            xe = /^\-?\d+$/;
        vc.$inject = ["$locale"];
        var ye = q(Uc),
            ze = q(Wc);
        yc.$inject = ["$parse"];
        var Ae = q({
                restrict: "E",
                compile: function(a, b) {
                    return b.href || b.xlinkHref || b.name ? void 0 : function(a, b) {
                        if ("a" === b[0].nodeName.toLowerCase()) {
                            var c = "[object SVGAnimatedString]" === ed.call(b.prop("href")) ? "xlink:href" : "href";
                            b.on("click", function(a) {
                                b.attr(c) || a.preventDefault()
                            })
                        }
                    }
                }
            }),
            Be = {};
        f(Kd, function(a, b) {
            if ("multiple" != a) {
                var c = $a("ng-" + b);
                Be[c] = function() {
                    return {
                        restrict: "A",
                        priority: 100,
                        link: function(a, d, e) {
                            a.$watch(e[c], function(a) {
                                e.$set(b, !! a)
                            })
                        }
                    }
                }
            }
        }), f(Md, function(a, b) {
            Be[b] = function() {
                return {
                    priority: 100,
                    link: function(a, c, d) {
                        if ("ngPattern" === b && "/" == d.ngPattern.charAt(0)) {
                            var e = d.ngPattern.match(Sc);
                            if (e) return void d.$set("ngPattern", new RegExp(e[1], e[2]))
                        }
                        a.$watch(d[b], function(a) {
                            d.$set(b, a)
                        })
                    }
                }
            }
        }), f(["src", "srcset", "href"], function(a) {
            var b = $a("ng-" + a);
            Be[b] = function() {
                return {
                    priority: 99,
                    link: function(c, d, e) {
                        var f = a,
                            g = a;
                        "href" === a && "[object SVGAnimatedString]" === ed.call(d.prop("href")) && (g = "xlinkHref", e.$attr[g] = "xlink:href", f = null), e.$observe(b, function(b) {
                            return b ? (e.$set(g, b), void(Zc && f && d.prop(f, e[g]))) : void("href" === a && e.$set(g, null))
                        })
                    }
                }
            }
        });
        var Ce = {
            $addControl: o,
            $$renameControl: Ac,
            $removeControl: o,
            $setValidity: o,
            $setDirty: o,
            $setPristine: o,
            $setSubmitted: o
        }, De = "ng-submitted";
        Bc.$inject = ["$element", "$attrs", "$scope", "$animate", "$interpolate"];
        var Ee = function(a) {
                return ["$timeout", function(b) {
                    var d = {
                        name: "form",
                        restrict: a ? "EAC" : "E",
                        controller: Bc,
                        compile: function(a) {
                            return a.addClass(lf).addClass(jf), {
                                pre: function(a, d, e, f) {
                                    if (!("action" in e)) {
                                        var g = function(b) {
                                            a.$apply(function() {
                                                f.$commitViewValue(), f.$setSubmitted()
                                            }), b.preventDefault()
                                        };
                                        yd(d[0], "submit", g), d.on("$destroy", function() {
                                            b(function() {
                                                zd(d[0], "submit", g)
                                            }, 0, !1)
                                        })
                                    }
                                    var h = f.$$parentForm,
                                        i = f.$name;
                                    i && (Kb(a, null, i, f, i), e.$observe(e.name ? "name" : "ngForm", function(b) {
                                        i !== b && (Kb(a, null, i, c, i), i = b, Kb(a, null, i, f, i), h.$$renameControl(f, i))
                                    })), d.on("$destroy", function() {
                                        h.$removeControl(f), i && Kb(a, null, i, c, i), l(f, Ce)
                                    })
                                }
                            }
                        }
                    };
                    return d
                }]
            }, Fe = Ee(),
            Ge = Ee(!0),
            He = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,
            Ie = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
            Je = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
            Ke = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,
            Le = /^(\d{4})-(\d{2})-(\d{2})$/,
            Me = /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Ne = /^(\d{4})-W(\d\d)$/,
            Oe = /^(\d{4})-(\d\d)$/,
            Pe = /^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,
            Qe = {
                text: Dc,
                date: Hc("date", Le, Gc(Le, ["yyyy", "MM", "dd"]), "yyyy-MM-dd"),
                "datetime-local": Hc("datetimelocal", Me, Gc(Me, ["yyyy", "MM", "dd", "HH", "mm", "ss", "sss"]), "yyyy-MM-ddTHH:mm:ss.sss"),
                time: Hc("time", Pe, Gc(Pe, ["HH", "mm", "ss", "sss"]), "HH:mm:ss.sss"),
                week: Hc("week", Ne, Fc, "yyyy-Www"),
                month: Hc("month", Oe, Gc(Oe, ["yyyy", "MM"]), "yyyy-MM"),
                number: Jc,
                url: Kc,
                email: Lc,
                radio: Mc,
                checkbox: Oc,
                hidden: o,
                button: o,
                submit: o,
                reset: o,
                file: o
            }, Re = ["$browser", "$sniffer", "$filter", "$parse",
                function(a, b, c, d) {
                    return {
                        restrict: "E",
                        require: ["?ngModel"],
                        link: {
                            pre: function(e, f, g, h) {
                                h[0] && (Qe[Uc(g.type)] || Qe.text)(e, f, g, h[0], b, a, c, d)
                            }
                        }
                    }
                }
            ],
            Se = /^(true|false|\d+)$/,
            Te = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    compile: function(a, b) {
                        return Se.test(b.ngValue) ? function(a, b, c) {
                            c.$set("value", a.$eval(c.ngValue))
                        } : function(a, b, c) {
                            a.$watch(c.ngValue, function(a) {
                                c.$set("value", a)
                            })
                        }
                    }
                }
            }, Ue = ["$compile",
                function(a) {
                    return {
                        restrict: "AC",
                        compile: function(b) {
                            return a.$$addBindingClass(b),
                                function(b, d, e) {
                                    a.$$addBindingInfo(d, e.ngBind), d = d[0], b.$watch(e.ngBind, function(a) {
                                        d.textContent = a === c ? "" : a
                                    })
                                }
                        }
                    }
                }
            ],
            Ve = ["$interpolate", "$compile",
                function(a, b) {
                    return {
                        compile: function(d) {
                            return b.$$addBindingClass(d),
                                function(d, e, f) {
                                    var g = a(e.attr(f.$attr.ngBindTemplate));
                                    b.$$addBindingInfo(e, g.expressions), e = e[0], f.$observe("ngBindTemplate", function(a) {
                                        e.textContent = a === c ? "" : a
                                    })
                                }
                        }
                    }
                }
            ],
            We = ["$sce", "$parse", "$compile",
                function(a, b, c) {
                    return {
                        restrict: "A",
                        compile: function(d, e) {
                            var f = b(e.ngBindHtml),
                                g = b(e.ngBindHtml, function(a) {
                                    return (a || "").toString()
                                });
                            return c.$$addBindingClass(d),
                                function(b, d, e) {
                                    c.$$addBindingInfo(d, e.ngBindHtml), b.$watch(g, function() {
                                        d.html(a.getTrustedHtml(f(b)) || "")
                                    })
                                }
                        }
                    }
                }
            ],
            Xe = q({
                restrict: "A",
                require: "ngModel",
                link: function(a, b, c, d) {
                    d.$viewChangeListeners.push(function() {
                        a.$eval(c.ngChange)
                    })
                }
            }),
            Ye = Pc("", !0),
            Ze = Pc("Odd", 0),
            $e = Pc("Even", 1),
            _e = zc({
                compile: function(a, b) {
                    b.$set("ngCloak", c), a.removeClass("ng-cloak")
                }
            }),
            af = [
                function() {
                    return {
                        restrict: "A",
                        scope: !0,
                        controller: "@",
                        priority: 500
                    }
                }
            ],
            bf = {}, cf = {
                blur: !0,
                focus: !0
            };
        f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function(a) {
            var b = $a("ng-" + a);
            bf[b] = ["$parse", "$rootScope",
                function(c, d) {
                    return {
                        restrict: "A",
                        compile: function(e, f) {
                            var g = c(f[b], null, !0);
                            return function(b, c) {
                                c.on(a, function(c) {
                                    var e = function() {
                                        g(b, {
                                            $event: c
                                        })
                                    };
                                    cf[a] && d.$$phase ? b.$evalAsync(e) : b.$apply(e)
                                })
                            }
                        }
                    }
                }
            ]
        });
        var df = ["$animate",
                function(a) {
                    return {
                        multiElement: !0,
                        transclude: "element",
                        priority: 600,
                        terminal: !0,
                        restrict: "A",
                        $$tlb: !0,
                        link: function(c, d, e, f, g) {
                            var h, i, j;
                            c.$watch(e.ngIf, function(c) {
                                c ? i || g(function(c, f) {
                                    i = f, c[c.length++] = b.createComment(" end ngIf: " + e.ngIf + " "), h = {
                                        clone: c
                                    }, a.enter(c, d.parent(), d)
                                }) : (j && (j.remove(), j = null), i && (i.$destroy(), i = null), h && (j = ia(h.clone), a.leave(j).then(function() {
                                    j = null
                                }), h = null))
                            })
                        }
                    }
                }
            ],
            ef = ["$templateRequest", "$anchorScroll", "$animate", "$sce",
                function(a, b, c, d) {
                    return {
                        restrict: "ECA",
                        priority: 400,
                        terminal: !0,
                        transclude: "element",
                        controller: gd.noop,
                        compile: function(e, f) {
                            var g = f.ngInclude || f.src,
                                h = f.onload || "",
                                i = f.autoscroll;
                            return function(e, f, j, k, l) {
                                var m, n, o, p = 0,
                                    q = function() {
                                        n && (n.remove(), n = null), m && (m.$destroy(), m = null), o && (c.leave(o).then(function() {
                                            n = null
                                        }), n = o, o = null)
                                    };
                                e.$watch(d.parseAsResourceUrl(g), function(d) {
                                    var g = function() {
                                        !s(i) || i && !e.$eval(i) || b()
                                    }, j = ++p;
                                    d ? (a(d, !0).then(function(a) {
                                        if (j === p) {
                                            var b = e.$new();
                                            k.template = a;
                                            var i = l(b, function(a) {
                                                q(), c.enter(a, null, f).then(g)
                                            });
                                            m = b, o = i, m.$emit("$includeContentLoaded", d), e.$eval(h)
                                        }
                                    }, function() {
                                        j === p && (q(), e.$emit("$includeContentError", d))
                                    }), e.$emit("$includeContentRequested", d)) : (q(), k.template = null)
                                })
                            }
                        }
                    }
                }
            ],
            ff = ["$compile",
                function(a) {
                    return {
                        restrict: "ECA",
                        priority: -400,
                        require: "ngInclude",
                        link: function(c, d, e, f) {
                            return /SVG/.test(d[0].toString()) ? (d.empty(), void a(sa(f.template, b).childNodes)(c, function(a) {
                                d.append(a)
                            }, {
                                futureParentElement: d
                            })) : (d.html(f.template), void a(d.contents())(c))
                        }
                    }
                }
            ],
            gf = zc({
                priority: 450,
                compile: function() {
                    return {
                        pre: function(a, b, c) {
                            a.$eval(c.ngInit)
                        }
                    }
                }
            }),
            hf = function() {
                return {
                    restrict: "A",
                    priority: 100,
                    require: "ngModel",
                    link: function(a, b, d, e) {
                        var g = b.attr(d.$attr.ngList) || ", ",
                            h = "false" !== d.ngTrim,
                            i = h ? kd(g) : g,
                            j = function(a) {
                                if (!r(a)) {
                                    var b = [];
                                    return a && f(a.split(i), function(a) {
                                        a && b.push(h ? kd(a) : a)
                                    }), b
                                }
                            };
                        e.$parsers.push(j), e.$formatters.push(function(a) {
                            return jd(a) ? a.join(g) : c
                        }), e.$isEmpty = function(a) {
                            return !a || !a.length
                        }
                    }
                }
            }, jf = "ng-valid",
            kf = "ng-invalid",
            lf = "ng-pristine",
            mf = "ng-dirty",
            nf = "ng-untouched",
            of = "ng-touched",
            pf = "ng-pending",
            qf = new d("ngModel"),
            rf = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", "$timeout", "$rootScope", "$q", "$interpolate",
                function(a, b, d, e, g, h, i, j, k, l) {
                    this.$viewValue = Number.NaN, this.$modelValue = Number.NaN, this.$$rawModelValue = c, this.$validators = {}, this.$asyncValidators = {}, this.$parsers = [], this.$formatters = [], this.$viewChangeListeners = [], this.$untouched = !0, this.$touched = !1, this.$pristine = !0, this.$dirty = !1, this.$valid = !0, this.$invalid = !1, this.$error = {}, this.$$success = {}, this.$pending = c, this.$name = l(d.name || "", !1)(a);
                    var m = g(d.ngModel),
                        n = m.assign,
                        p = m,
                        q = n,
                        t = null,
                        u = this;
                    this.$$setOptions = function(a) {
                        if (u.$options = a, a && a.getterSetter) {
                            var b = g(d.ngModel + "()"),
                                c = g(d.ngModel + "($$$p)");
                            p = function(a) {
                                var c = m(a);
                                return x(c) && (c = b(a)), c
                            }, q = function(a, b) {
                                x(m(a)) ? c(a, {
                                    $$$p: u.$modelValue
                                }) : n(a, u.$modelValue)
                            }
                        } else if (!m.assign) throw qf("nonassign", "Expression '{0}' is non-assignable. Element: {1}", d.ngModel, T(e))
                    }, this.$render = o, this.$isEmpty = function(a) {
                        return r(a) || "" === a || null === a || a !== a
                    };
                    var w = e.inheritedData("$formController") || Ce,
                        y = 0;
                    Qc({
                        ctrl: this,
                        $element: e,
                        set: function(a, b) {
                            a[b] = !0
                        },
                        unset: function(a, b) {
                            delete a[b]
                        },
                        parentForm: w,
                        $animate: h
                    }), this.$setPristine = function() {
                        u.$dirty = !1, u.$pristine = !0, h.removeClass(e, mf), h.addClass(e, lf)
                    }, this.$setDirty = function() {
                        u.$dirty = !0, u.$pristine = !1, h.removeClass(e, lf), h.addClass(e, mf), w.$setDirty()
                    }, this.$setUntouched = function() {
                        u.$touched = !1, u.$untouched = !0, h.setClass(e, nf, of)
                    }, this.$setTouched = function() {
                        u.$touched = !0, u.$untouched = !1, h.setClass(e, of, nf)
                    }, this.$rollbackViewValue = function() {
                        i.cancel(t), u.$viewValue = u.$$lastCommittedViewValue, u.$render()
                    }, this.$validate = function() {
                        if (!v(u.$modelValue) || !isNaN(u.$modelValue)) {
                            var a = u.$$lastCommittedViewValue,
                                b = u.$$rawModelValue,
                                d = u.$$parserName || "parse",
                                e = u.$error[d] ? !1 : c,
                                f = u.$valid,
                                g = u.$modelValue,
                                h = u.$options && u.$options.allowInvalid;
                            u.$$runValidators(e, b, a, function(a) {
                                h || f === a || (u.$modelValue = a ? b : c, u.$modelValue !== g && u.$$writeModelToScope())
                            })
                        }
                    }, this.$$runValidators = function(a, b, d, e) {
                        function g(a) {
                            var b = u.$$parserName || "parse";
                            if (a === c) j(b, null);
                            else if (j(b, a), !a) return f(u.$validators, function(a, b) {
                                j(b, null)
                            }), f(u.$asyncValidators, function(a, b) {
                                j(b, null)
                            }), !1;
                            return !0
                        }

                        function h() {
                            var a = !0;
                            return f(u.$validators, function(c, e) {
                                var f = c(b, d);
                                a = a && f, j(e, f)
                            }), a ? !0 : (f(u.$asyncValidators, function(a, b) {
                                j(b, null)
                            }), !1)
                        }

                        function i() {
                            var a = [],
                                e = !0;
                            f(u.$asyncValidators, function(f, g) {
                                var h = f(b, d);
                                if (!F(h)) throw qf("$asyncValidators", "Expected asynchronous validator to return a promise but got '{0}' instead.", h);
                                j(g, c), a.push(h.then(function() {
                                    j(g, !0)
                                }, function(a) {
                                    e = !1, j(g, !1)
                                }))
                            }), a.length ? k.all(a).then(function() {
                                l(e)
                            }, o) : l(!0)
                        }

                        function j(a, b) {
                            m === y && u.$setValidity(a, b)
                        }

                        function l(a) {
                            m === y && e(a)
                        }
                        y++;
                        var m = y;
                        return g(a) && h() ? void i() : void l(!1)
                    }, this.$commitViewValue = function() {
                        var a = u.$viewValue;
                        i.cancel(t), (u.$$lastCommittedViewValue !== a || "" === a && u.$$hasNativeValidators) && (u.$$lastCommittedViewValue = a, u.$pristine && this.$setDirty(), this.$$parseAndValidate())
                    }, this.$$parseAndValidate = function() {
                        function b() {
                            u.$modelValue !== h && u.$$writeModelToScope()
                        }
                        var d = u.$$lastCommittedViewValue,
                            e = d,
                            f = r(e) ? c : !0;
                        if (f)
                            for (var g = 0; g < u.$parsers.length; g++)
                                if (e = u.$parsers[g](e), r(e)) {
                                    f = !1;
                                    break
                                }
                        v(u.$modelValue) && isNaN(u.$modelValue) && (u.$modelValue = p(a));
                        var h = u.$modelValue,
                            i = u.$options && u.$options.allowInvalid;
                        u.$$rawModelValue = e, i && (u.$modelValue = e, b()), u.$$runValidators(f, e, u.$$lastCommittedViewValue, function(a) {
                            i || (u.$modelValue = a ? e : c, b())
                        })
                    }, this.$$writeModelToScope = function() {
                        q(a, u.$modelValue), f(u.$viewChangeListeners, function(a) {
                            try {
                                a()
                            } catch (c) {
                                b(c)
                            }
                        })
                    }, this.$setViewValue = function(a, b) {
                        u.$viewValue = a, (!u.$options || u.$options.updateOnDefault) && u.$$debounceViewValueCommit(b)
                    }, this.$$debounceViewValueCommit = function(b) {
                        var c, d = 0,
                            e = u.$options;
                        e && s(e.debounce) && (c = e.debounce, v(c) ? d = c : v(c[b]) ? d = c[b] : v(c["default"]) && (d = c["default"])), i.cancel(t), d ? t = i(function() {
                            u.$commitViewValue()
                        }, d) : j.$$phase ? u.$commitViewValue() : a.$apply(function() {
                            u.$commitViewValue()
                        })
                    }, a.$watch(function() {
                        var b = p(a);
                        if (b !== u.$modelValue) {
                            u.$modelValue = u.$$rawModelValue = b;
                            for (var d = u.$formatters, e = d.length, f = b; e--;) f = d[e](f);
                            u.$viewValue !== f && (u.$viewValue = u.$$lastCommittedViewValue = f, u.$render(), u.$$runValidators(c, b, f, o))
                        }
                        return b
                    })
                }
            ],
            sf = ["$rootScope",
                function(a) {
                    return {
                        restrict: "A",
                        require: ["ngModel", "^?form", "^?ngModelOptions"],
                        controller: rf,
                        priority: 1,
                        compile: function(b) {
                            return b.addClass(lf).addClass(nf).addClass(jf), {
                                pre: function(a, b, c, d) {
                                    var e = d[0],
                                        f = d[1] || Ce;
                                    e.$$setOptions(d[2] && d[2].$options), f.$addControl(e), c.$observe("name", function(a) {
                                        e.$name !== a && f.$$renameControl(e, a)
                                    }), a.$on("$destroy", function() {
                                        f.$removeControl(e)
                                    })
                                },
                                post: function(b, c, d, e) {
                                    var f = e[0];
                                    f.$options && f.$options.updateOn && c.on(f.$options.updateOn, function(a) {
                                        f.$$debounceViewValueCommit(a && a.type)
                                    }), c.on("blur", function(c) {
                                        f.$touched || (a.$$phase ? b.$evalAsync(f.$setTouched) : b.$apply(f.$setTouched))
                                    })
                                }
                            }
                        }
                    }
                }
            ],
            tf = /(\s+|^)default(\s+|$)/,
            uf = function() {
                return {
                    restrict: "A",
                    controller: ["$scope", "$attrs",
                        function(a, b) {
                            var d = this;
                            this.$options = a.$eval(b.ngModelOptions), this.$options.updateOn !== c ? (this.$options.updateOnDefault = !1, this.$options.updateOn = kd(this.$options.updateOn.replace(tf, function() {
                                return d.$options.updateOnDefault = !0, " "
                            }))) : this.$options.updateOnDefault = !0
                        }
                    ]
                }
            }, vf = zc({
                terminal: !0,
                priority: 1e3
            }),
            wf = ["$locale", "$interpolate",
                function(a, b) {
                    var c = /{}/g,
                        d = /^when(Minus)?(.+)$/;
                    return {
                        restrict: "EA",
                        link: function(e, g, h) {
                            function i(a) {
                                g.text(a || "")
                            }
                            var j, k = h.count,
                                l = h.$attr.when && g.attr(h.$attr.when),
                                m = h.offset || 0,
                                n = e.$eval(l) || {}, o = {}, p = b.startSymbol(),
                                q = b.endSymbol(),
                                r = p + k + "-" + m + q,
                                s = gd.noop;
                            f(h, function(a, b) {
                                var c = d.exec(b);
                                if (c) {
                                    var e = (c[1] ? "-" : "") + Uc(c[2]);
                                    n[e] = g.attr(h.$attr[b])
                                }
                            }), f(n, function(a, d) {
                                o[d] = b(a.replace(c, r))
                            }), e.$watch(k, function(b) {
                                var c = parseFloat(b),
                                    d = isNaN(c);
                                d || c in n || (c = a.pluralCat(c - m)), c === j || d && isNaN(j) || (s(), s = e.$watch(o[c], i), j = c)
                            })
                        }
                    }
                }
            ],
            xf = ["$parse", "$animate",
                function(a, g) {
                    var h = "$$NG_REMOVED",
                        i = d("ngRepeat"),
                        j = function(a, b, c, d, e, f, g) {
                            a[c] = d, e && (a[e] = f), a.$index = b, a.$first = 0 === b, a.$last = b === g - 1, a.$middle = !(a.$first || a.$last), a.$odd = !(a.$even = 0 === (1 & b))
                        }, k = function(a) {
                            return a.clone[0]
                        }, l = function(a) {
                            return a.clone[a.clone.length - 1]
                        };
                    return {
                        restrict: "A",
                        multiElement: !0,
                        transclude: "element",
                        priority: 1e3,
                        terminal: !0,
                        $$tlb: !0,
                        compile: function(d, m) {
                            var n = m.ngRepeat,
                                o = b.createComment(" end ngRepeat: " + n + " "),
                                p = n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);
                            if (!p) throw i("iexp", "Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.", n);
                            var q = p[1],
                                r = p[2],
                                s = p[3],
                                t = p[4];
                            if (p = q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/), !p) throw i("iidexp", "'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.", q);
                            var u = p[3] || p[1],
                                v = p[2];
                            if (s && (!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s) || /^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s))) throw i("badident", "alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.", s);
                            var w, x, y, z, A = {
                                $id: Oa
                            };
                            return t ? w = a(t) : (y = function(a, b) {
                                return Oa(b)
                            }, z = function(a) {
                                return a
                            }),
                                function(a, b, d, m, p) {
                                    w && (x = function(b, c, d) {
                                        return v && (A[v] = b), A[u] = c, A.$index = d, w(a, A)
                                    });
                                    var q = ja();
                                    a.$watchCollection(r, function(d) {
                                        var m, r, t, w, A, B, C, D, E, F, G, H, I = b[0],
                                            J = ja();
                                        if (s && (a[s] = d), e(d)) E = d, D = x || y;
                                        else {
                                            D = x || z, E = [];
                                            for (var K in d) d.hasOwnProperty(K) && "$" != K.charAt(0) && E.push(K);
                                            E.sort()
                                        }
                                        for (w = E.length, G = new Array(w), m = 0; w > m; m++)
                                            if (A = d === E ? m : E[m], B = d[A], C = D(A, B, m), q[C]) F = q[C], delete q[C], J[C] = F, G[m] = F;
                                            else {
                                                if (J[C]) throw f(G, function(a) {
                                                    a && a.scope && (q[a.id] = a)
                                                }), i("dupes", "Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}", n, C, B);
                                                G[m] = {
                                                    id: C,
                                                    scope: c,
                                                    clone: c
                                                }, J[C] = !0
                                            }
                                        for (var L in q) {
                                            if (F = q[L], H = ia(F.clone), g.leave(H), H[0].parentNode)
                                                for (m = 0, r = H.length; r > m; m++) H[m][h] = !0;
                                            F.scope.$destroy()
                                        }
                                        for (m = 0; w > m; m++)
                                            if (A = d === E ? m : E[m], B = d[A], F = G[m], F.scope) {
                                                t = I;
                                                do t = t.nextSibling; while (t && t[h]);
                                                k(F) != t && g.move(ia(F.clone), null, $c(I)), I = l(F), j(F.scope, m, u, B, v, A, w)
                                            } else p(function(a, b) {
                                                F.scope = b;
                                                var c = o.cloneNode(!1);
                                                a[a.length++] = c, g.enter(a, null, $c(I)), I = c, F.clone = a, J[F.id] = F, j(F.scope, m, u, B, v, A, w)
                                            });
                                        q = J
                                    })
                                }
                        }
                    }
                }
            ],
            yf = "ng-hide",
            zf = "ng-hide-animate",
            Af = ["$animate",
                function(a) {
                    return {
                        restrict: "A",
                        multiElement: !0,
                        link: function(b, c, d) {
                            b.$watch(d.ngShow, function(b) {
                                a[b ? "removeClass" : "addClass"](c, yf, {
                                    tempClasses: zf
                                })
                            })
                        }
                    }
                }
            ],
            Bf = ["$animate",
                function(a) {
                    return {
                        restrict: "A",
                        multiElement: !0,
                        link: function(b, c, d) {
                            b.$watch(d.ngHide, function(b) {
                                a[b ? "addClass" : "removeClass"](c, yf, {
                                    tempClasses: zf
                                })
                            })
                        }
                    }
                }
            ],
            Cf = zc(function(a, b, c) {
                a.$watchCollection(c.ngStyle, function(a, c) {
                    c && a !== c && f(c, function(a, c) {
                        b.css(c, "")
                    }), a && b.css(a)
                })
            }),
            Df = ["$animate",
                function(a) {
                    return {
                        restrict: "EA",
                        require: "ngSwitch",
                        controller: ["$scope",
                            function() {
                                this.cases = {}
                            }
                        ],
                        link: function(c, d, e, g) {
                            var h = e.ngSwitch || e.on,
                                i = [],
                                j = [],
                                k = [],
                                l = [],
                                m = function(a, b) {
                                    return function() {
                                        a.splice(b, 1)
                                    }
                                };
                            c.$watch(h, function(c) {
                                var d, e;
                                for (d = 0, e = k.length; e > d; ++d) a.cancel(k[d]);
                                for (k.length = 0, d = 0, e = l.length; e > d; ++d) {
                                    var h = ia(j[d].clone);
                                    l[d].$destroy();
                                    var n = k[d] = a.leave(h);
                                    n.then(m(k, d))
                                }
                                j.length = 0, l.length = 0, (i = g.cases["!" + c] || g.cases["?"]) && f(i, function(c) {
                                    c.transclude(function(d, e) {
                                        l.push(e);
                                        var f = c.element;
                                        d[d.length++] = b.createComment(" end ngSwitchWhen: ");
                                        var g = {
                                            clone: d
                                        };
                                        j.push(g), a.enter(d, f.parent(), f)
                                    })
                                })
                            })
                        }
                    }
                }
            ],
            Ef = zc({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(a, b, c, d, e) {
                    d.cases["!" + c.ngSwitchWhen] = d.cases["!" + c.ngSwitchWhen] || [], d.cases["!" + c.ngSwitchWhen].push({
                        transclude: e,
                        element: b
                    })
                }
            }),
            Ff = zc({
                transclude: "element",
                priority: 1200,
                require: "^ngSwitch",
                multiElement: !0,
                link: function(a, b, c, d, e) {
                    d.cases["?"] = d.cases["?"] || [], d.cases["?"].push({
                        transclude: e,
                        element: b
                    })
                }
            }),
            Gf = zc({
                restrict: "EAC",
                link: function(a, b, c, e, f) {
                    if (!f) throw d("ngTransclude")("orphan", "Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}", T(b));
                    f(function(a) {
                        b.empty(), b.append(a)
                    })
                }
            }),
            Hf = ["$templateCache",
                function(a) {
                    return {
                        restrict: "E",
                        terminal: !0,
                        compile: function(b, c) {
                            if ("text/ng-template" == c.type) {
                                var d = c.id,
                                    e = b[0].text;
                                a.put(d, e)
                            }
                        }
                    }
                }
            ],
            If = d("ngOptions"),
            Jf = q({
                restrict: "A",
                terminal: !0
            }),
            Kf = ["$compile", "$parse",
                function(a, d) {
                    var e = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
                        h = {
                            $setViewValue: o
                        };
                    return {
                        restrict: "E",
                        require: ["select", "?ngModel"],
                        controller: ["$element", "$scope", "$attrs",
                            function(a, b, c) {
                                var d, e, f = this,
                                    g = {}, i = h;
                                f.databound = c.ngModel, f.init = function(a, b, c) {
                                    i = a, d = b, e = c
                                }, f.addOption = function(b, c) {
                                    ga(b, '"option value"'), g[b] = !0, i.$viewValue == b && (a.val(b), e.parent() && e.remove()), c && c[0].hasAttribute("selected") && (c[0].selected = !0)
                                }, f.removeOption = function(a) {
                                    this.hasOption(a) && (delete g[a], i.$viewValue === a && this.renderUnknownOption(a))
                                }, f.renderUnknownOption = function(b) {
                                    var c = "? " + Oa(b) + " ?";
                                    e.val(c), a.prepend(e), a.val(c), e.prop("selected", !0)
                                }, f.hasOption = function(a) {
                                    return g.hasOwnProperty(a)
                                }, b.$on("$destroy", function() {
                                    f.renderUnknownOption = o
                                })
                            }
                        ],
                        link: function(h, i, j, k) {
                            function l(a, b, c, d) {
                                c.$render = function() {
                                    var a = c.$viewValue;
                                    d.hasOption(a) ? (z.parent() && z.remove(), b.val(a), "" === a && o.prop("selected", !0)) : r(a) && o ? b.val("") : d.renderUnknownOption(a)
                                }, b.on("change", function() {
                                    a.$apply(function() {
                                        z.parent() && z.remove(), c.$setViewValue(b.val())
                                    })
                                })
                            }

                            function m(a, b, c) {
                                var d;
                                c.$render = function() {
                                    var a = new Pa(c.$viewValue);
                                    f(b.find("option"), function(b) {
                                        b.selected = s(a.get(b.value))
                                    })
                                }, a.$watch(function() {
                                    M(d, c.$viewValue) || (d = L(c.$viewValue), c.$render())
                                }), b.on("change", function() {
                                    a.$apply(function() {
                                        var a = [];
                                        f(b.find("option"), function(b) {
                                            b.selected && a.push(b.value)
                                        }), c.$setViewValue(a)
                                    })
                                })
                            }

                            function n(b, h, i) {
                                function j(a, c, d) {
                                    return M[B] = d, E && (M[E] = c), a(b, M)
                                }

                                function k() {
                                    b.$apply(function() {
                                        var a, c = H(b) || [];
                                        if (t) a = [], f(h.val(), function(b) {
                                            b = J ? K[b] : b, a.push(l(b, c[b]))
                                        });
                                        else {
                                            var d = J ? K[h.val()] : h.val();
                                            a = l(d, c[d])
                                        }
                                        i.$setViewValue(a), r()
                                    })
                                }

                                function l(a, b) {
                                    if ("?" === a) return c;
                                    if ("" === a) return null;
                                    var d = D ? D : G;
                                    return j(d, a, b)
                                }

                                function m() {
                                    var a, c = H(b);
                                    if (c && jd(c)) {
                                        a = new Array(c.length);
                                        for (var d = 0, e = c.length; e > d; d++) a[d] = j(A, d, c[d]);
                                        return a
                                    }
                                    if (c) {
                                        a = {};
                                        for (var f in c) c.hasOwnProperty(f) && (a[f] = j(A, f, c[f]))
                                    }
                                    return a
                                }

                                function n(a) {
                                    var b;
                                    if (t)
                                        if (J && jd(a)) {
                                            b = new Pa([]);
                                            for (var c = 0; c < a.length; c++) b.put(j(J, null, a[c]), !0)
                                        } else b = new Pa(a);
                                    else J && (a = j(J, null, a));
                                    return function(c, d) {
                                        var e;
                                        return e = J ? J : D ? D : G, t ? s(b.remove(j(e, c, d))) : a === j(e, c, d)
                                    }
                                }

                                function o() {
                                    w || (b.$$postDigest(r), w = !0)
                                }

                                function q(a, b, c) {
                                    a[b] = a[b] || 0, a[b] += c ? 1 : -1
                                }

                                function r() {
                                    w = !1;
                                    var a, c, d, e, k, l, m, o, r, u, z, B, C, D, G, I, N, O = {
                                            "": []
                                        }, P = [""],
                                        Q = i.$viewValue,
                                        R = H(b) || [],
                                        S = E ? g(R) : R,
                                        T = {}, U = n(Q),
                                        V = !1;
                                    for (K = {}, B = 0; u = S.length, u > B; B++) m = B, E && (m = S[B], "$" === m.charAt(0)) || (o = R[m], a = j(F, m, o) || "", (c = O[a]) || (c = O[a] = [], P.push(a)), C = U(m, o), V = V || C, I = j(A, m, o), I = s(I) ? I : "", N = J ? J(b, M) : E ? S[B] : B, J && (K[N] = m), c.push({
                                        id: N,
                                        label: I,
                                        selected: C
                                    }));
                                    for (t || (v || null === Q ? O[""].unshift({
                                        id: "",
                                        label: "",
                                        selected: !V
                                    }) : V || O[""].unshift({
                                        id: "?",
                                        label: "",
                                        selected: !0
                                    })), z = 0, r = P.length; r > z; z++) {
                                        for (a = P[z], c = O[a], L.length <= z ? (e = {
                                            element: y.clone().attr("label", a),
                                            label: c.label
                                        }, k = [e], L.push(k), h.append(e.element)) : (k = L[z], e = k[0], e.label != a && e.element.attr("label", e.label = a)), D = null, B = 0, u = c.length; u > B; B++) d = c[B], (l = k[B + 1]) ? (D = l.element, l.label !== d.label && (q(T, l.label, !1), q(T, d.label, !0), D.text(l.label = d.label), D.prop("label", l.label)), l.id !== d.id && D.val(l.id = d.id), D[0].selected !== d.selected && (D.prop("selected", l.selected = d.selected), Zc && D.prop("selected", l.selected))) : ("" === d.id && v ? G = v : (G = x.clone()).val(d.id).prop("selected", d.selected).attr("selected", d.selected).prop("label", d.label).text(d.label), k.push(l = {
                                            element: G,
                                            label: d.label,
                                            id: d.id,
                                            selected: d.selected
                                        }), q(T, d.label, !0), D ? D.after(G) : e.element.append(G), D = G);
                                        for (B++; k.length > B;) d = k.pop(), q(T, d.label, !1), d.element.remove()
                                    }
                                    for (; L.length > z;) {
                                        for (c = L.pop(), B = 1; B < c.length; ++B) q(T, c[B].label, !1);
                                        c[0].element.remove()
                                    }
                                    f(T, function(a, b) {
                                        a > 0 ? p.addOption(b) : 0 > a && p.removeOption(b)
                                    })
                                }
                                var z;
                                if (!(z = u.match(e))) throw If("iexp", "Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}", u, T(h));
                                var A = d(z[2] || z[1]),
                                    B = z[4] || z[6],
                                    C = / as /.test(z[0]) && z[1],
                                    D = C ? d(C) : null,
                                    E = z[5],
                                    F = d(z[3] || ""),
                                    G = d(z[2] ? z[1] : B),
                                    H = d(z[7]),
                                    I = z[8],
                                    J = I ? d(z[8]) : null,
                                    K = {}, L = [
                                        [{
                                            element: h,
                                            label: ""
                                        }]
                                    ],
                                    M = {};
                                v && (a(v)(b), v.removeClass("ng-scope"), v.remove()), h.empty(), h.on("change", k), i.$render = r, b.$watchCollection(H, o), b.$watchCollection(m, o), t && b.$watchCollection(function() {
                                    return i.$modelValue
                                }, o)
                            }
                            if (k[1]) {
                                for (var o, p = k[0], q = k[1], t = j.multiple, u = j.ngOptions, v = !1, w = !1, x = $c(b.createElement("option")), y = $c(b.createElement("optgroup")), z = x.clone(), A = 0, B = i.children(), C = B.length; C > A; A++)
                                    if ("" === B[A].value) {
                                        o = v = B.eq(A);
                                        break
                                    }
                                p.init(q, v, z), t && (q.$isEmpty = function(a) {
                                    return !a || 0 === a.length
                                }), u ? n(h, i, q) : t ? m(h, i, q) : l(h, i, q, p)
                            }
                        }
                    }
                }
            ],
            Lf = ["$interpolate",
                function(a) {
                    var b = {
                        addOption: o,
                        removeOption: o
                    };
                    return {
                        restrict: "E",
                        priority: 100,
                        compile: function(c, d) {
                            if (r(d.value)) {
                                var e = a(c.text(), !0);
                                e || d.$set("value", c.text())
                            }
                            return function(a, c, d) {
                                var f = "$selectController",
                                    g = c.parent(),
                                    h = g.data(f) || g.parent().data(f);
                                h && h.databound || (h = b), e ? a.$watch(e, function(a, b) {
                                    d.$set("value", a), b !== a && h.removeOption(b), h.addOption(a, c)
                                }) : h.addOption(d.value, c), c.on("$destroy", function() {
                                    h.removeOption(d.value)
                                })
                            }
                        }
                    }
                }
            ],
            Mf = q({
                restrict: "E",
                terminal: !1
            }),
            Nf = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        d && (c.required = !0, d.$validators.required = function(a, b) {
                            return !c.required || !d.$isEmpty(b)
                        }, c.$observe("required", function() {
                            d.$validate()
                        }))
                    }
                }
            }, Of = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, e, f) {
                        if (f) {
                            var g, h = e.ngPattern || e.pattern;
                            e.$observe("pattern", function(a) {
                                if (u(a) && a.length > 0 && (a = new RegExp("^" + a + "$")), a && !a.test) throw d("ngPattern")("noregexp", "Expected {0} to be a RegExp but was {1}. Element: {2}", h, a, T(b));
                                g = a || c, f.$validate()
                            }), f.$validators.pattern = function(a) {
                                return f.$isEmpty(a) || r(g) || g.test(a)
                            }
                        }
                    }
                }
            }, Pf = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        if (d) {
                            var e = -1;
                            c.$observe("maxlength", function(a) {
                                var b = m(a);
                                e = isNaN(b) ? -1 : b, d.$validate()
                            }), d.$validators.maxlength = function(a, b) {
                                return 0 > e || d.$isEmpty(a) || b.length <= e
                            }
                        }
                    }
                }
            }, Qf = function() {
                return {
                    restrict: "A",
                    require: "?ngModel",
                    link: function(a, b, c, d) {
                        if (d) {
                            var e = 0;
                            c.$observe("minlength", function(a) {
                                e = m(a) || 0, d.$validate()
                            }), d.$validators.minlength = function(a, b) {
                                return d.$isEmpty(b) || b.length >= e
                            }
                        }
                    }
                }
            };
        return a.angular.bootstrap ? void console.log("WARNING: Tried to load angular more than once.") : (da(), na(gd), void $c(b).ready(function() {
            $(b, _)
        }))
    }(window, document), !window.angular.$$csp() && window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),
    function(a, b, c) {
        "use strict";
        b.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function() {
            var a = "$$ngAnimateChildren";
            return function(c, d, e) {
                var f = e.ngAnimateChildren;
                b.isString(f) && 0 === f.length ? d.data(a, !0) : c.$watch(f, function(b) {
                    d.data(a, !! b)
                })
            }
        }).factory("$$animateReflow", ["$$rAF", "$document",
            function(a, b) {
                var c = b[0].body;
                return function(b) {
                    return a(function() {
                        c.offsetWidth + 1;
                        b()
                    })
                }
            }
        ]).config(["$provide", "$animateProvider",
            function(d, e) {
                function f(a) {
                    for (var b = 0; b < a.length; b++) {
                        var c = a[b];
                        if (c.nodeType == q) return c
                    }
                }

                function g(a) {
                    return a && b.element(a)
                }

                function h(a) {
                    return b.element(f(a))
                }

                function i(a, b) {
                    return f(a) == f(b)
                }
                var j, k = b.noop,
                    l = b.forEach,
                    m = e.$$selectors,
                    n = b.isArray,
                    o = b.isString,
                    p = b.isObject,
                    q = 1,
                    r = "$$ngAnimateState",
                    s = "$$ngAnimateChildren",
                    t = "ng-animate",
                    u = {
                        running: !0
                    };
                d.decorator("$animate", ["$delegate", "$$q", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", "$templateRequest", "$$jqLite",
                    function(a, c, d, q, v, w, x, y, z, A) {
                        function B(a, b) {
                            var c = a.data(r) || {};
                            return b && (c.running = !0, c.structural = !0, a.data(r, c)), c.disabled || c.running && c.structural
                        }

                        function C(a) {
                            var b, d = c.defer();
                            return d.promise.$$cancelFn = function() {
                                b && b()
                            }, x.$$postDigest(function() {
                                b = a(function() {
                                    d.resolve()
                                })
                            }), d.promise
                        }

                        function D(a) {
                            return p(a) ? (a.tempClasses && o(a.tempClasses) && (a.tempClasses = a.tempClasses.split(/\s+/)), a) : void 0
                        }

                        function E(a, b, c) {
                            c = c || {};
                            var d = {};
                            l(c, function(a, b) {
                                l(b.split(" "), function(b) {
                                    d[b] = a
                                })
                            });
                            var e = Object.create(null);
                            l((a.attr("class") || "").split(/\s+/), function(a) {
                                e[a] = !0
                            });
                            var f = [],
                                g = [];
                            return l(b && b.classes || [], function(a, b) {
                                var c = e[b],
                                    h = d[b] || {};
                                a === !1 ? (c || "addClass" == h.event) && g.push(b) : a === !0 && (c && "removeClass" != h.event || f.push(b))
                            }), f.length + g.length > 0 && [f.join(" "), g.join(" ")]
                        }

                        function F(a) {
                            if (a) {
                                var b = [],
                                    c = {}, e = a.substr(1).split(".");
                                (q.transitions || q.animations) && b.push(d.get(m[""]));
                                for (var f = 0; f < e.length; f++) {
                                    var g = e[f],
                                        h = m[g];
                                    h && !c[g] && (b.push(d.get(h)), c[g] = !0)
                                }
                                return b
                            }
                        }

                        function G(a, c, d, e) {
                            function f(a, b) {
                                var c = a[b],
                                    d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                                return c || d ? ("leave" == b && (d = c, c = null), w.push({
                                    event: b,
                                    fn: c
                                }), t.push({
                                    event: b,
                                    fn: d
                                }), !0) : void 0
                            }

                            function g(b, c, f) {
                                function g(a) {
                                    if (c) {
                                        if ((c[a] || k)(), ++m < h.length) return;
                                        c = null
                                    }
                                    f()
                                }
                                var h = [];
                                l(b, function(a) {
                                    a.fn && h.push(a)
                                });
                                var m = 0;
                                l(h, function(b, f) {
                                    var h = function() {
                                        g(f)
                                    };
                                    switch (b.event) {
                                        case "setClass":
                                            c.push(b.fn(a, i, j, h, e));
                                            break;
                                        case "animate":
                                            c.push(b.fn(a, d, e.from, e.to, h));
                                            break;
                                        case "addClass":
                                            c.push(b.fn(a, i || d, h, e));
                                            break;
                                        case "removeClass":
                                            c.push(b.fn(a, j || d, h, e));
                                            break;
                                        default:
                                            c.push(b.fn(a, h, e))
                                    }
                                }), c && 0 === c.length && f()
                            }
                            var h = a[0];
                            if (h) {
                                e && (e.to = e.to || {}, e.from = e.from || {});
                                var i, j;
                                n(d) && (i = d[0], j = d[1], i ? j ? d = i + " " + j : (d = i, c = "addClass") : (d = j, c = "removeClass"));
                                var m = "setClass" == c,
                                    o = m || "addClass" == c || "removeClass" == c || "animate" == c,
                                    p = a.attr("class"),
                                    q = p + " " + d;
                                if (O(q)) {
                                    var r = k,
                                        s = [],
                                        t = [],
                                        u = k,
                                        v = [],
                                        w = [],
                                        x = (" " + q).replace(/\s+/g, ".");
                                    return l(F(x), function(a) {
                                        var b = f(a, c);
                                        !b && m && (f(a, "addClass"), f(a, "removeClass"))
                                    }), {
                                        node: h,
                                        event: c,
                                        className: d,
                                        isClassBased: o,
                                        isSetClassOperation: m,
                                        applyStyles: function() {
                                            e && a.css(b.extend(e.from || {}, e.to || {}))
                                        },
                                        before: function(a) {
                                            r = a, g(t, s, function() {
                                                r = k, a()
                                            })
                                        },
                                        after: function(a) {
                                            u = a, g(w, v, function() {
                                                u = k, a()
                                            })
                                        },
                                        cancel: function() {
                                            s && (l(s, function(a) {
                                                (a || k)(!0)
                                            }), r(!0)), v && (l(v, function(a) {
                                                (a || k)(!0)
                                            }), u(!0))
                                        }
                                    }
                                }
                            }
                        }

                        function H(a, c, d, e, f, g, h, i) {
                            function m(b) {
                                var e = "$animate:" + b;
                                x && x[e] && x[e].length > 0 && w(function() {
                                    d.triggerHandler(e, {
                                        event: a,
                                        className: c
                                    })
                                })
                            }

                            function n() {
                                m("before")
                            }

                            function o() {
                                m("after")
                            }

                            function p() {
                                m("close"), i()
                            }

                            function q() {
                                q.hasBeenRun || (q.hasBeenRun = !0, g())
                            }

                            function s() {
                                if (!s.hasBeenRun) {
                                    v && v.applyStyles(), s.hasBeenRun = !0, h && h.tempClasses && l(h.tempClasses, function(a) {
                                        j.removeClass(d, a)
                                    });
                                    var b = d.data(r);
                                    b && (v && v.isClassBased ? J(d, c) : (w(function() {
                                        var b = d.data(r) || {};
                                        H == b.index && J(d, c, a)
                                    }), d.data(r, b))), p()
                                }
                            }
                            var u = k,
                                v = G(d, a, c, h);
                            if (!v) return q(), n(), o(), s(), u;
                            a = v.event, c = v.className;
                            var x = b.element._data(v.node);
                            if (x = x && x.events, e || (e = f ? f.parent() : d.parent()), K(d, e)) return q(), n(), o(), s(), u;
                            var y = d.data(r) || {}, z = y.active || {}, A = y.totalActive || 0,
                                B = y.last,
                                C = !1;
                            if (A > 0) {
                                var D = [];
                                if (v.isClassBased) {
                                    if ("setClass" == B.event) D.push(B), J(d, c);
                                    else if (z[c]) {
                                        var E = z[c];
                                        E.event == a ? C = !0 : (D.push(E), J(d, c))
                                    }
                                } else if ("leave" == a && z["ng-leave"]) C = !0;
                                else {
                                    for (var F in z) D.push(z[F]);
                                    y = {}, J(d, !0)
                                }
                                D.length > 0 && l(D, function(a) {
                                    a.cancel()
                                })
                            }
                            if (!v.isClassBased || v.isSetClassOperation || "animate" == a || C || (C = "addClass" == a == d.hasClass(c)), C) return q(), n(), o(), p(), u;
                            z = y.active || {}, A = y.totalActive || 0, "leave" == a && d.one("$destroy", function(a) {
                                var c = b.element(this),
                                    d = c.data(r);
                                if (d) {
                                    var e = d.active["ng-leave"];
                                    e && (e.cancel(), J(c, "ng-leave"))
                                }
                            }), j.addClass(d, t), h && h.tempClasses && l(h.tempClasses, function(a) {
                                j.addClass(d, a)
                            });
                            var H = M++;
                            return A++, z[c] = v, d.data(r, {
                                last: v,
                                active: z,
                                index: H,
                                totalActive: A
                            }), n(), v.before(function(b) {
                                var e = d.data(r);
                                b = b || !e || !e.active[c] || v.isClassBased && e.active[c].event != a, q(), b === !0 ? s() : (o(), v.after(s))
                            }), v.cancel
                        }

                        function I(a) {
                            var c = f(a);
                            if (c) {
                                var d = b.isFunction(c.getElementsByClassName) ? c.getElementsByClassName(t) : c.querySelectorAll("." + t);
                                l(d, function(a) {
                                    a = b.element(a);
                                    var c = a.data(r);
                                    c && c.active && l(c.active, function(a) {
                                        a.cancel()
                                    })
                                })
                            }
                        }

                        function J(a, b) {
                            if (i(a, v)) u.disabled || (u.running = !1, u.structural = !1);
                            else if (b) {
                                var c = a.data(r) || {}, d = b === !0;
                                !d && c.active && c.active[b] && (c.totalActive--, delete c.active[b]), (d || !c.totalActive) && (j.removeClass(a, t), a.removeData(r))
                            }
                        }

                        function K(a, c) {
                            if (u.disabled) return !0;
                            if (i(a, v)) return u.running;
                            var d, e, f;
                            do {
                                if (0 === c.length) break;
                                var g = i(c, v),
                                    h = g ? u : c.data(r) || {};
                                if (h.disabled) return !0;
                                if (g && (f = !0), d !== !1) {
                                    var j = c.data(s);
                                    b.isDefined(j) && (d = j)
                                }
                                e = e || h.running || h.last && !h.last.isClassBased
                            } while (c = c.parent());
                            return !f || !d && e
                        }
                        j = A, v.data(r, u);
                        var L = x.$watch(function() {
                                return z.totalPendingRequests
                            }, function(a, b) {
                                0 === a && (L(), x.$$postDigest(function() {
                                    x.$$postDigest(function() {
                                        u.running = !1
                                    })
                                }))
                            }),
                            M = 0,
                            N = e.classNameFilter(),
                            O = N ? function(a) {
                                return N.test(a)
                            } : function() {
                                return !0
                            };
                        return {
                            animate: function(a, b, c, d, e) {
                                return d = d || "ng-inline-animate", e = D(e) || {}, e.from = c ? b : null, e.to = c ? c : b, C(function(b) {
                                    return H("animate", d, h(a), null, null, k, e, b)
                                })
                            },
                            enter: function(c, d, e, f) {
                                return f = D(f), c = b.element(c), d = g(d), e = g(e), B(c, !0), a.enter(c, d, e), C(function(a) {
                                    return H("enter", "ng-enter", h(c), d, e, k, f, a)
                                })
                            },
                            leave: function(c, d) {
                                return d = D(d), c = b.element(c), I(c), B(c, !0), C(function(b) {
                                    return H("leave", "ng-leave", h(c), null, null, function() {
                                        a.leave(c)
                                    }, d, b)
                                })
                            },
                            move: function(c, d, e, f) {
                                return f = D(f), c = b.element(c), d = g(d), e = g(e), I(c), B(c, !0), a.move(c, d, e), C(function(a) {
                                    return H("move", "ng-move", h(c), d, e, k, f, a);
                                })
                            },
                            addClass: function(a, b, c) {
                                return this.setClass(a, b, [], c)
                            },
                            removeClass: function(a, b, c) {
                                return this.setClass(a, [], b, c)
                            },
                            setClass: function(c, d, e, g) {
                                g = D(g);
                                var i = "$$animateClasses";
                                if (c = b.element(c), c = h(c), B(c)) return a.$$setClassImmediately(c, d, e, g);
                                var j, k = c.data(i),
                                    m = !! k;
                                return k || (k = {}, k.classes = {}), j = k.classes, d = n(d) ? d : d.split(" "), l(d, function(a) {
                                    a && a.length && (j[a] = !0)
                                }), e = n(e) ? e : e.split(" "), l(e, function(a) {
                                    a && a.length && (j[a] = !1)
                                }), m ? (g && k.options && (k.options = b.extend(k.options || {}, g)), k.promise) : (c.data(i, k = {
                                    classes: j,
                                    options: g
                                }), k.promise = C(function(b) {
                                    var d = c.parent(),
                                        e = f(c),
                                        g = e.parentNode;
                                    if (!g || g.$$NG_REMOVED || e.$$NG_REMOVED) return void b();
                                    var h = c.data(i);
                                    c.removeData(i);
                                    var j = c.data(r) || {}, k = E(c, h, j.active);
                                    return k ? H("setClass", k, c, d, null, function() {
                                        k[0] && a.$$addClassImmediately(c, k[0]), k[1] && a.$$removeClassImmediately(c, k[1])
                                    }, h.options, b) : b()
                                }))
                            },
                            cancel: function(a) {
                                a.$$cancelFn()
                            },
                            enabled: function(a, b) {
                                switch (arguments.length) {
                                    case 2:
                                        if (a) J(b);
                                        else {
                                            var c = b.data(r) || {};
                                            c.disabled = !0, b.data(r, c)
                                        }
                                        break;
                                    case 1:
                                        u.disabled = !a;
                                        break;
                                    default:
                                        a = !u.disabled
                                }
                                return !!a
                            }
                        }
                    }
                ]), e.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow",
                    function(d, e, g, h) {
                        function i() {
                            J || (J = h(function() {
                                W = [], J = null, U = {}
                            }))
                        }

                        function m(a, b) {
                            J && J(), W.push(b), J = h(function() {
                                l(W, function(a) {
                                    a()
                                }), W = [], J = null, U = {}
                            })
                        }

                        function p(a, c) {
                            var d = f(a);
                            a = b.element(d), Z.push(a);
                            var e = Date.now() + c;
                            Y >= e || (g.cancel(X), Y = e, X = g(function() {
                                r(Z), Z = []
                            }, c, !1))
                        }

                        function r(a) {
                            l(a, function(a) {
                                var b = a.data(Q);
                                b && l(b.closeAnimationFns, function(a) {
                                    a()
                                })
                            })
                        }

                        function s(a, b) {
                            var c = b ? U[b] : null;
                            if (!c) {
                                var e = 0,
                                    f = 0,
                                    g = 0,
                                    h = 0;
                                l(a, function(a) {
                                    if (a.nodeType == q) {
                                        var b = d.getComputedStyle(a) || {}, c = b[E + K];
                                        e = Math.max(t(c), e);
                                        var i = b[E + M];
                                        f = Math.max(t(i), f);
                                        b[G + M];
                                        h = Math.max(t(b[G + M]), h);
                                        var j = t(b[G + K]);
                                        j > 0 && (j *= parseInt(b[G + N], 10) || 1), g = Math.max(j, g)
                                    }
                                }), c = {
                                    total: 0,
                                    transitionDelay: f,
                                    transitionDuration: e,
                                    animationDelay: h,
                                    animationDuration: g
                                }, b && (U[b] = c)
                            }
                            return c
                        }

                        function t(a) {
                            var b = 0,
                                c = o(a) ? a.split(/\s*,\s*/) : [];
                            return l(c, function(a) {
                                b = Math.max(parseFloat(a) || 0, b)
                            }), b
                        }

                        function u(a) {
                            var b = a.parent(),
                                c = b.data(P);
                            return c || (b.data(P, ++V), c = V), c + "-" + f(a).getAttribute("class")
                        }

                        function v(a, b, c, d) {
                            var e = ["ng-enter", "ng-leave", "ng-move"].indexOf(c) >= 0,
                                g = u(b),
                                h = g + " " + c,
                                i = U[h] ? ++U[h].total : 0,
                                k = {};
                            if (i > 0) {
                                var l = c + "-stagger",
                                    m = g + " " + l,
                                    n = !U[m];
                                n && j.addClass(b, l), k = s(b, m), n && j.removeClass(b, l)
                            }
                            j.addClass(b, c);
                            var o = b.data(Q) || {}, p = s(b, h),
                                q = p.transitionDuration,
                                r = p.animationDuration;
                            if (e && 0 === q && 0 === r) return j.removeClass(b, c), !1;
                            var t = d || e && q > 0,
                                v = r > 0 && k.animationDelay > 0 && 0 === k.animationDuration,
                                w = o.closeAnimationFns || [];
                            b.data(Q, {
                                stagger: k,
                                cacheKey: h,
                                running: o.running || 0,
                                itemIndex: i,
                                blockTransition: t,
                                closeAnimationFns: w
                            });
                            var z = f(b);
                            return t && (x(z, !0), d && b.css(d)), v && y(z, !0), !0
                        }

                        function w(a, b, c, d, e) {
                            function h() {
                                b.off(M, i), j.removeClass(b, n), j.removeClass(b, o), K && g.cancel(K), C(b, c);
                                var a = f(b);
                                for (var d in r) a.style.removeProperty(r[d])
                            }

                            function i(a) {
                                a.stopPropagation();
                                var b = a.originalEvent || a,
                                    c = b.$manualTimeStamp || b.timeStamp || Date.now(),
                                    e = parseFloat(b.elapsedTime.toFixed(R));
                                Math.max(c - L, 0) >= G && e >= D && d()
                            }
                            var k = f(b),
                                m = b.data(Q);
                            if (-1 == k.getAttribute("class").indexOf(c) || !m) return void d();
                            var n = "",
                                o = "";
                            l(c.split(" "), function(a, b) {
                                var c = (b > 0 ? " " : "") + a;
                                n += c + "-active", o += c + "-pending"
                            });
                            var q = "",
                                r = [],
                                t = m.itemIndex,
                                u = m.stagger,
                                v = 0;
                            if (t > 0) {
                                var w = 0;
                                u.transitionDelay > 0 && 0 === u.transitionDuration && (w = u.transitionDelay * t);
                                var z = 0;
                                u.animationDelay > 0 && 0 === u.animationDuration && (z = u.animationDelay * t, r.push(I + "animation-play-state")), v = Math.round(100 * Math.max(w, z)) / 100
                            }
                            v || (j.addClass(b, n), m.blockTransition && x(k, !1));
                            var A = m.cacheKey + " " + n,
                                B = s(b, A),
                                D = Math.max(B.transitionDuration, B.animationDuration);
                            if (0 === D) return j.removeClass(b, n), C(b, c), void d();
                            !v && e && Object.keys(e).length > 0 && (B.transitionDuration || (b.css("transition", B.animationDuration + "s linear all"), r.push("transition")), b.css(e));
                            var E = Math.max(B.transitionDelay, B.animationDelay),
                                G = E * T;
                            if (r.length > 0) {
                                var J = k.getAttribute("style") || "";
                                ";" !== J.charAt(J.length - 1) && (J += ";"), k.setAttribute("style", J + " " + q)
                            }
                            var K, L = Date.now(),
                                M = H + " " + F,
                                N = (E + D) * S,
                                O = (v + N) * T;
                            return v > 0 && (j.addClass(b, o), K = g(function() {
                                K = null, B.transitionDuration > 0 && x(k, !1), B.animationDuration > 0 && y(k, !1), j.addClass(b, n), j.removeClass(b, o), e && (0 === B.transitionDuration && b.css("transition", B.animationDuration + "s linear all"), b.css(e), r.push("transition"))
                            }, v * T, !1)), b.on(M, i), m.closeAnimationFns.push(function() {
                                h(), d()
                            }), m.running++, p(b, O), h
                        }

                        function x(a, b) {
                            a.style[E + L] = b ? "none" : ""
                        }

                        function y(a, b) {
                            a.style[G + O] = b ? "paused" : ""
                        }

                        function z(a, b, c, d) {
                            return v(a, b, c, d) ? function(a) {
                                a && C(b, c)
                            } : void 0
                        }

                        function A(a, b, c, d, e) {
                            return b.data(Q) ? w(a, b, c, d, e) : (C(b, c), void d())
                        }

                        function B(a, b, c, d, e) {
                            var f = z(a, b, c, e.from);
                            if (!f) return i(), void d();
                            var g = f;
                            return m(b, function() {
                                g = A(a, b, c, d, e.to)
                            }),
                                function(a) {
                                    (g || k)(a)
                                }
                        }

                        function C(a, b) {
                            j.removeClass(a, b);
                            var c = a.data(Q);
                            c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(Q))
                        }

                        function D(a, b) {
                            var c = "";
                            return a = n(a) ? a : a.split(/\s+/), l(a, function(a, d) {
                                a && a.length > 0 && (c += (d > 0 ? " " : "") + a + b)
                            }), c
                        }
                        var E, F, G, H, I = "";
                        a.ontransitionend === c && a.onwebkittransitionend !== c ? (I = "-webkit-", E = "WebkitTransition", F = "webkitTransitionEnd transitionend") : (E = "transition", F = "transitionend"), a.onanimationend === c && a.onwebkitanimationend !== c ? (I = "-webkit-", G = "WebkitAnimation", H = "webkitAnimationEnd animationend") : (G = "animation", H = "animationend");
                        var J, K = "Duration",
                            L = "Property",
                            M = "Delay",
                            N = "IterationCount",
                            O = "PlayState",
                            P = "$$ngAnimateKey",
                            Q = "$$ngAnimateCSS3Data",
                            R = 3,
                            S = 1.5,
                            T = 1e3,
                            U = {}, V = 0,
                            W = [],
                            X = null,
                            Y = 0,
                            Z = [];
                        return {
                            animate: function(a, b, c, d, e, f) {
                                return f = f || {}, f.from = c, f.to = d, B("animate", a, b, e, f)
                            },
                            enter: function(a, b, c) {
                                return c = c || {}, B("enter", a, "ng-enter", b, c)
                            },
                            leave: function(a, b, c) {
                                return c = c || {}, B("leave", a, "ng-leave", b, c)
                            },
                            move: function(a, b, c) {
                                return c = c || {}, B("move", a, "ng-move", b, c)
                            },
                            beforeSetClass: function(a, b, c, d, e) {
                                e = e || {};
                                var f = D(c, "-remove") + " " + D(b, "-add"),
                                    g = z("setClass", a, f, e.from);
                                return g ? (m(a, d), g) : (i(), void d())
                            },
                            beforeAddClass: function(a, b, c, d) {
                                d = d || {};
                                var e = z("addClass", a, D(b, "-add"), d.from);
                                return e ? (m(a, c), e) : (i(), void c())
                            },
                            beforeRemoveClass: function(a, b, c, d) {
                                d = d || {};
                                var e = z("removeClass", a, D(b, "-remove"), d.from);
                                return e ? (m(a, c), e) : (i(), void c())
                            },
                            setClass: function(a, b, c, d, e) {
                                e = e || {}, c = D(c, "-remove"), b = D(b, "-add");
                                var f = c + " " + b;
                                return A("setClass", a, f, d, e.to)
                            },
                            addClass: function(a, b, c, d) {
                                return d = d || {}, A("addClass", a, D(b, "-add"), c, d.to)
                            },
                            removeClass: function(a, b, c, d) {
                                return d = d || {}, A("removeClass", a, D(b, "-remove"), c, d.to)
                            }
                        }
                    }
                ])
            }
        ])
    }(window, window.angular),
    function(a, b, c) {
        "use strict";
        b.module("ngCookies", ["ng"]).factory("$cookies", ["$rootScope", "$browser",
            function(a, d) {
                function e() {
                    var a, e, f, i;
                    for (a in h) k(g[a]) && d.cookies(a, c);
                    for (a in g) e = g[a], b.isString(e) || (e = "" + e, g[a] = e), e !== h[a] && (d.cookies(a, e), i = !0);
                    if (i) {
                        i = !1, f = d.cookies();
                        for (a in g) g[a] !== f[a] && (k(f[a]) ? delete g[a] : g[a] = f[a], i = !0)
                    }
                }
                var f, g = {}, h = {}, i = !1,
                    j = b.copy,
                    k = b.isUndefined;
                return d.addPollFn(function() {
                    var b = d.cookies();
                    f != b && (f = b, j(b, h), j(b, g), i && a.$apply())
                })(), i = !0, a.$watch(e), g
            }
        ]).factory("$cookieStore", ["$cookies",
            function(a) {
                return {
                    get: function(c) {
                        var d = a[c];
                        return d ? b.fromJson(d) : d
                    },
                    put: function(c, d) {
                        a[c] = b.toJson(d)
                    },
                    remove: function(b) {
                        delete a[b]
                    }
                }
            }
        ])
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d(a) {
            return null != a && "" !== a && "hasOwnProperty" !== a && h.test("." + a)
        }

        function e(a, b) {
            if (!d(b)) throw g("badmember", 'Dotted member path "@{0}" is invalid.', b);
            for (var e = b.split("."), f = 0, h = e.length; h > f && a !== c; f++) {
                var i = e[f];
                a = null !== a ? a[i] : c
            }
            return a
        }

        function f(a, c) {
            c = c || {}, b.forEach(c, function(a, b) {
                delete c[b]
            });
            for (var d in a)!a.hasOwnProperty(d) || "$" === d.charAt(0) && "$" === d.charAt(1) || (c[d] = a[d]);
            return c
        }
        var g = b.$$minErr("$resource"),
            h = /^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;
        b.module("ngResource", ["ng"]).provider("$resource", function() {
            var a = this;
            this.defaults = {
                stripTrailingSlashes: !0,
                actions: {
                    get: {
                        method: "GET"
                    },
                    save: {
                        method: "POST"
                    },
                    query: {
                        method: "GET",
                        isArray: !0
                    },
                    remove: {
                        method: "DELETE"
                    },
                    "delete": {
                        method: "DELETE"
                    }
                }
            }, this.$get = ["$http", "$q",
                function(d, h) {
                    function i(a) {
                        return j(a, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
                    }

                    function j(a, b) {
                        return encodeURIComponent(a).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, b ? "%20" : "+")
                    }

                    function k(b, c) {
                        this.template = b, this.defaults = o({}, a.defaults, c), this.urlParams = {}
                    }

                    function l(i, j, r, s) {
                        function t(a, b) {
                            var c = {};
                            return b = o({}, j, b), n(b, function(b, d) {
                                q(b) && (b = b()), c[d] = b && b.charAt && "@" == b.charAt(0) ? e(a, b.substr(1)) : b
                            }), c
                        }

                        function u(a) {
                            return a.resource
                        }

                        function v(a) {
                            f(a || {}, this)
                        }
                        var w = new k(i, s);
                        return r = o({}, a.defaults.actions, r), v.prototype.toJSON = function() {
                            var a = o({}, this);
                            return delete a.$promise, delete a.$resolved, a
                        }, n(r, function(a, e) {
                            var i = /^(POST|PUT|PATCH)$/i.test(a.method);
                            v[e] = function(j, k, l, r) {
                                var s, x, y, z = {};
                                switch (arguments.length) {
                                    case 4:
                                        y = r, x = l;
                                    case 3:
                                    case 2:
                                        if (!q(k)) {
                                            z = j, s = k, x = l;
                                            break
                                        }
                                        if (q(j)) {
                                            x = j, y = k;
                                            break
                                        }
                                        x = k, y = l;
                                    case 1:
                                        q(j) ? x = j : i ? s = j : z = j;
                                        break;
                                    case 0:
                                        break;
                                    default:
                                        throw g("badargs", "Expected up to 4 arguments [params, data, success, error], got {0} arguments", arguments.length)
                                }
                                var A = this instanceof v,
                                    B = A ? s : a.isArray ? [] : new v(s),
                                    C = {}, D = a.interceptor && a.interceptor.response || u,
                                    E = a.interceptor && a.interceptor.responseError || c;
                                n(a, function(a, b) {
                                    "params" != b && "isArray" != b && "interceptor" != b && (C[b] = p(a))
                                }), i && (C.data = s), w.setUrlParams(C, o({}, t(s, a.params || {}), z), a.url);
                                var F = d(C).then(function(c) {
                                    var d = c.data,
                                        h = B.$promise;
                                    if (d) {
                                        if (b.isArray(d) !== !! a.isArray) throw g("badcfg", "Error in resource configuration for action `{0}`. Expected response to contain an {1} but got an {2}", e, a.isArray ? "array" : "object", b.isArray(d) ? "array" : "object");
                                        a.isArray ? (B.length = 0, n(d, function(a) {
                                            "object" == typeof a ? B.push(new v(a)) : B.push(a)
                                        })) : (f(d, B), B.$promise = h)
                                    }
                                    return B.$resolved = !0, c.resource = B, c
                                }, function(a) {
                                    return B.$resolved = !0, (y || m)(a), h.reject(a)
                                });
                                return F = F.then(function(a) {
                                    var b = D(a);
                                    return (x || m)(b, a.headers), b
                                }, E), A ? F : (B.$promise = F, B.$resolved = !1, B)
                            }, v.prototype["$" + e] = function(a, b, c) {
                                q(a) && (c = b, b = a, a = {});
                                var d = v[e].call(this, a, this, b, c);
                                return d.$promise || d
                            }
                        }), v.bind = function(a) {
                            return l(i, o({}, j, a), r)
                        }, v
                    }
                    var m = b.noop,
                        n = b.forEach,
                        o = b.extend,
                        p = b.copy,
                        q = b.isFunction;
                    return k.prototype = {
                        setUrlParams: function(a, c, d) {
                            var e, f, h = this,
                                j = d || h.template,
                                k = h.urlParams = {};
                            n(j.split(/\W/), function(a) {
                                if ("hasOwnProperty" === a) throw g("badname", "hasOwnProperty is not a valid parameter name.");
                                !new RegExp("^\\d+$").test(a) && a && new RegExp("(^|[^\\\\]):" + a + "(\\W|$)").test(j) && (k[a] = !0)
                            }), j = j.replace(/\\:/g, ":"), c = c || {}, n(h.urlParams, function(a, d) {
                                e = c.hasOwnProperty(d) ? c[d] : h.defaults[d], b.isDefined(e) && null !== e ? (f = i(e), j = j.replace(new RegExp(":" + d + "(\\W|$)", "g"), function(a, b) {
                                    return f + b
                                })) : j = j.replace(new RegExp("(/?):" + d + "(\\W|$)", "g"), function(a, b, c) {
                                    return "/" == c.charAt(0) ? c : b + c
                                })
                            }), h.defaults.stripTrailingSlashes && (j = j.replace(/\/+$/, "") || "/"), j = j.replace(/\/\.(?=\w+($|\?))/, "."), a.url = j.replace(/\/\\\./, "/."), n(c, function(b, c) {
                                h.urlParams[c] || (a.params = a.params || {}, a.params[c] = b)
                            })
                        }
                    }, l
                }
            ]
        })
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d() {
            this.$get = ["$$sanitizeUri",
                function(a) {
                    return function(b) {
                        var c = [];
                        return g(b, j(c, function(b, c) {
                            return !/^unsafe/.test(a(b, c))
                        })), c.join("")
                    }
                }
            ]
        }

        function e(a) {
            var c = [],
                d = j(c, b.noop);
            return d.chars(a), c.join("")
        }

        function f(a) {
            var b, c = {}, d = a.split(",");
            for (b = 0; b < d.length; b++) c[d[b]] = !0;
            return c
        }

        function g(a, c) {
            function d(a, d, f, g) {
                if (d = b.lowercase(d), z[d])
                    for (; t.last() && A[t.last()];) e("", t.last());
                y[d] && t.last() == d && e("", d), g = v[d] || !! g, g || t.push(d);
                var i = {};
                f.replace(n, function(a, b, c, d, e) {
                    var f = c || d || e || "";
                    i[b] = h(f)
                }), c.start && c.start(d, i, g)
            }

            function e(a, d) {
                var e, f = 0;
                if (d = b.lowercase(d))
                    for (f = t.length - 1; f >= 0 && t[f] != d; f--);
                if (f >= 0) {
                    for (e = t.length - 1; e >= f; e--) c.end && c.end(t[e]);
                    t.length = f
                }
            }
            "string" != typeof a && (a = null === a || "undefined" == typeof a ? "" : "" + a);
            var f, g, i, j, t = [],
                u = a;
            for (t.last = function() {
                return t[t.length - 1]
            }; a;) {
                if (j = "", g = !0, t.last() && C[t.last()] ? (a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + t.last() + "[^>]*>", "i"), function(a, b) {
                        return b = b.replace(q, "$1").replace(s, "$1"), c.chars && c.chars(h(b)), ""
                    }), e("", t.last())) : (0 === a.indexOf("<!--") ? (f = a.indexOf("--", 4), f >= 0 && a.lastIndexOf("-->", f) === f && (c.comment && c.comment(a.substring(4, f)), a = a.substring(f + 3), g = !1)) : r.test(a) ? (i = a.match(r), i && (a = a.replace(i[0], ""), g = !1)) : p.test(a) ? (i = a.match(m), i && (a = a.substring(i[0].length), i[0].replace(m, e), g = !1)) : o.test(a) && (i = a.match(l), i ? (i[4] && (a = a.substring(i[0].length), i[0].replace(l, d)), g = !1) : (j += "<", a = a.substring(1))), g && (f = a.indexOf("<"), j += 0 > f ? a : a.substring(0, f), a = 0 > f ? "" : a.substring(f), c.chars && c.chars(h(j)))), a == u) throw k("badparse", "The sanitizer was unable to parse the following block of html: {0}", a);
                u = a
            }
            e()
        }

        function h(a) {
            if (!a) return "";
            var b = J.exec(a),
                c = b[1],
                d = b[3],
                e = b[2];
            return e && (I.innerHTML = e.replace(/</g, "&lt;"), e = "textContent" in I ? I.textContent : I.innerText), c + e + d
        }

        function i(a) {
            return a.replace(/&/g, "&amp;").replace(t, function(a) {
                var b = a.charCodeAt(0),
                    c = a.charCodeAt(1);
                return "&#" + (1024 * (b - 55296) + (c - 56320) + 65536) + ";"
            }).replace(u, function(a) {
                return "&#" + a.charCodeAt(0) + ";"
            }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
        }

        function j(a, c) {
            var d = !1,
                e = b.bind(a, a.push);
            return {
                start: function(a, f, g) {
                    a = b.lowercase(a), !d && C[a] && (d = a), d || D[a] !== !0 || (e("<"), e(a), b.forEach(f, function(d, f) {
                        var g = b.lowercase(f),
                            h = "img" === a && "src" === g || "background" === g;
                        H[g] !== !0 || E[g] === !0 && !c(d, h) || (e(" "), e(f), e('="'), e(i(d)), e('"'))
                    }), e(g ? "/>" : ">"))
                },
                end: function(a) {
                    a = b.lowercase(a), d || D[a] !== !0 || (e("</"), e(a), e(">")), a == d && (d = !1)
                },
                chars: function(a) {
                    d || e(i(a))
                }
            }
        }
        var k = b.$$minErr("$sanitize"),
            l = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,
            m = /^<\/\s*([\w:-]+)[^>]*>/,
            n = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,
            o = /^</,
            p = /^<\//,
            q = /<!--(.*?)-->/g,
            r = /<!DOCTYPE([^>]*?)>/i,
            s = /<!\[CDATA\[(.*?)]]>/g,
            t = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            u = /([^\#-~| |!])/g,
            v = f("area,br,col,hr,img,wbr"),
            w = f("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
            x = f("rp,rt"),
            y = b.extend({}, x, w),
            z = b.extend({}, w, f("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),
            A = b.extend({}, x, f("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
            B = f("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use"),
            C = f("script,style"),
            D = b.extend({}, v, z, A, y, B),
            E = f("background,cite,href,longdesc,src,usemap,xlink:href"),
            F = f("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width"),
            G = f("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan"),
            H = b.extend({}, E, G, F),
            I = document.createElement("pre"),
            J = /^(\s*)([\s\S]*?)(\s*)$/;
        b.module("ngSanitize", []).provider("$sanitize", d), b.module("ngSanitize").filter("linky", ["$sanitize",
            function(a) {
                var c = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"”’]/,
                    d = /^mailto:/;
                return function(f, g) {
                    function h(a) {
                        a && n.push(e(a))
                    }

                    function i(a, c) {
                        n.push("<a "), b.isDefined(g) && n.push('target="', g, '" '), n.push('href="', a.replace(/"/g, "&quot;"), '">'), h(c), n.push("</a>")
                    }
                    if (!f) return f;
                    for (var j, k, l, m = f, n = []; j = m.match(c);) k = j[0], j[2] || j[4] || (k = (j[3] ? "http://" : "mailto:") + k), l = j.index, h(m.substr(0, l)), i(k, j[0].replace(d, "")), m = m.substring(l + j[0].length);
                    return h(m), a(n.join(""))
                }
            }
        ])
    }(window, window.angular),
    function(a, b, c) {
        "use strict";

        function d(a, c, d) {
            e.directive(a, ["$parse", "$swipe",
                function(e, f) {
                    var g = 75,
                        h = .3,
                        i = 30;
                    return function(j, k, l) {
                        function m(a) {
                            if (!n) return !1;
                            var b = Math.abs(a.y - n.y),
                                d = (a.x - n.x) * c;
                            return o && g > b && d > 0 && d > i && h > b / d
                        }
                        var n, o, p = e(l[a]),
                            q = ["touch"];
                        b.isDefined(l.ngSwipeDisableMouse) || q.push("mouse"), f.bind(k, {
                            start: function(a, b) {
                                n = a, o = !0
                            },
                            cancel: function(a) {
                                o = !1
                            },
                            end: function(a, b) {
                                m(a) && j.$apply(function() {
                                    k.triggerHandler(d), p(j, {
                                        $event: b
                                    })
                                })
                            }
                        }, q)
                    }
                }
            ])
        }
        var e = b.module("ngTouch", []);
        e.factory("$swipe", [
            function() {
                function a(a) {
                    var b = a.touches && a.touches.length ? a.touches : [a],
                        c = a.changedTouches && a.changedTouches[0] || a.originalEvent && a.originalEvent.changedTouches && a.originalEvent.changedTouches[0] || b[0].originalEvent || b[0];
                    return {
                        x: c.clientX,
                        y: c.clientY
                    }
                }

                function c(a, c) {
                    var d = [];
                    return b.forEach(a, function(a) {
                        var b = e[a][c];
                        b && d.push(b)
                    }), d.join(" ")
                }
                var d = 10,
                    e = {
                        mouse: {
                            start: "mousedown",
                            move: "mousemove",
                            end: "mouseup"
                        },
                        touch: {
                            start: "touchstart",
                            move: "touchmove",
                            end: "touchend",
                            cancel: "touchcancel"
                        }
                    };
                return {
                    bind: function(b, e, f) {
                        var g, h, i, j, k = !1;
                        f = f || ["mouse", "touch"], b.on(c(f, "start"), function(b) {
                            i = a(b), k = !0, g = 0, h = 0, j = i, e.start && e.start(i, b)
                        });
                        var l = c(f, "cancel");
                        l && b.on(l, function(a) {
                            k = !1, e.cancel && e.cancel(a)
                        }), b.on(c(f, "move"), function(b) {
                            if (k && i) {
                                var c = a(b);
                                if (g += Math.abs(c.x - j.x), h += Math.abs(c.y - j.y), j = c, !(d > g && d > h)) return h > g ? (k = !1, void(e.cancel && e.cancel(b))) : (b.preventDefault(), void(e.move && e.move(c, b)))
                            }
                        }), b.on(c(f, "end"), function(b) {
                            k && (k = !1, e.end && e.end(a(b), b))
                        })
                    }
                }
            }
        ]), e.config(["$provide",
            function(a) {
                a.decorator("ngClickDirective", ["$delegate",
                    function(a) {
                        return a.shift(), a
                    }
                ])
            }
        ]), e.directive("ngClick", ["$parse", "$timeout", "$rootElement",
            function(a, c, d) {
                function e(a, b, c, d) {
                    return Math.abs(a - c) < p && Math.abs(b - d) < p
                }

                function f(a, b, c) {
                    for (var d = 0; d < a.length; d += 2)
                        if (e(a[d], a[d + 1], b, c)) return a.splice(d, d + 2), !0;
                    return !1
                }

                function g(a) {
                    if (!(Date.now() - j > o)) {
                        var b = a.touches && a.touches.length ? a.touches : [a],
                            c = b[0].clientX,
                            d = b[0].clientY;
                        1 > c && 1 > d || l && l[0] === c && l[1] === d || (l && (l = null), "label" === a.target.tagName.toLowerCase() && (l = [c, d]), f(k, c, d) || (a.stopPropagation(), a.preventDefault(), a.target && a.target.blur()))
                    }
                }

                function h(a) {
                    var b = a.touches && a.touches.length ? a.touches : [a],
                        d = b[0].clientX,
                        e = b[0].clientY;
                    k.push(d, e), c(function() {
                        for (var a = 0; a < k.length; a += 2)
                            if (k[a] == d && k[a + 1] == e) return void k.splice(a, a + 2)
                    }, o, !1)
                }

                function i(a, b) {
                    k || (d[0].addEventListener("click", g, !0), d[0].addEventListener("touchstart", h, !0), k = []), j = Date.now(), f(k, a, b)
                }
                var j, k, l, m = 750,
                    n = 12,
                    o = 2500,
                    p = 25,
                    q = "ng-click-active";
                return function(c, d, e) {
                    function f() {
                        o = !1, d.removeClass(q)
                    }
                    var g, h, j, k, l = a(e.ngClick),
                        o = !1;
                    d.on("touchstart", function(a) {
                        o = !0, g = a.target ? a.target : a.srcElement, 3 == g.nodeType && (g = g.parentNode), d.addClass(q), h = Date.now();
                        var b = a.touches && a.touches.length ? a.touches : [a],
                            c = b[0].originalEvent || b[0];
                        j = c.clientX, k = c.clientY
                    }), d.on("touchmove", function(a) {
                        f()
                    }), d.on("touchcancel", function(a) {
                        f()
                    }), d.on("touchend", function(a) {
                        var c = Date.now() - h,
                            l = a.changedTouches && a.changedTouches.length ? a.changedTouches : a.touches && a.touches.length ? a.touches : [a],
                            p = l[0].originalEvent || l[0],
                            q = p.clientX,
                            r = p.clientY,
                            s = Math.sqrt(Math.pow(q - j, 2) + Math.pow(r - k, 2));
                        o && m > c && n > s && (i(q, r), g && g.blur(), b.isDefined(e.disabled) && e.disabled !== !1 || d.triggerHandler("click", [a])), f()
                    }), d.onclick = function(a) {}, d.on("click", function(a, b) {
                        c.$apply(function() {
                            l(c, {
                                $event: b || a
                            })
                        })
                    }), d.on("mousedown", function(a) {
                        d.addClass(q)
                    }), d.on("mousemove mouseup", function(a) {
                        d.removeClass(q)
                    })
                }
            }
        ]), d("ngSwipeLeft", -1, "swipeleft"), d("ngSwipeRight", 1, "swiperight")
    }(window, window.angular), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
    function(a, b, c) {
        "use strict";

        function d(a, b) {
            return M(new(M(function() {}, {
                prototype: a
            })), b)
        }

        function e(a) {
            return L(arguments, function(b) {
                b !== a && L(b, function(b, c) {
                    a.hasOwnProperty(c) || (a[c] = b)
                })
            }), a
        }

        function f(a, b) {
            var c = [];
            for (var d in a.path) {
                if (a.path[d] !== b.path[d]) break;
                c.push(a.path[d])
            }
            return c
        }

        function g(a) {
            if (Object.keys) return Object.keys(a);
            var c = [];
            return b.forEach(a, function(a, b) {
                c.push(b)
            }), c
        }

        function h(a, b) {
            if (Array.prototype.indexOf) return a.indexOf(b, Number(arguments[2]) || 0);
            var c = a.length >>> 0,
                d = Number(arguments[2]) || 0;
            for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)
                if (d in a && a[d] === b) return d;
            return -1
        }

        function i(a, b, c, d) {
            var e, i = f(c, d),
                j = {}, k = [];
            for (var l in i)
                if (i[l].params && (e = g(i[l].params), e.length))
                    for (var m in e) h(k, e[m]) >= 0 || (k.push(e[m]), j[e[m]] = a[e[m]]);
            return M({}, j, b)
        }

        function j(a, b, c) {
            if (!c) {
                c = [];
                for (var d in a) c.push(d)
            }
            for (var e = 0; e < c.length; e++) {
                var f = c[e];
                if (a[f] != b[f]) return !1
            }
            return !0
        }

        function k(a, b) {
            var c = {};
            return L(a, function(a) {
                c[a] = b[a]
            }), c
        }

        function l(a) {
            var b = {}, c = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
            for (var d in a) - 1 == h(c, d) && (b[d] = a[d]);
            return b
        }

        function m(a, b) {
            var c = K(a),
                d = c ? [] : {};
            return L(a, function(a, e) {
                b(a, e) && (d[c ? d.length : e] = a)
            }), d
        }

        function n(a, b) {
            var c = K(a) ? [] : {};
            return L(a, function(a, d) {
                c[d] = b(a, d)
            }), c
        }

        function o(a, b) {
            var d = 1,
                f = 2,
                i = {}, j = [],
                k = i,
                m = M(a.when(i), {
                    $$promises: i,
                    $$values: i
                });
            this.study = function(i) {
                function n(a, c) {
                    if (s[c] !== f) {
                        if (r.push(c), s[c] === d) throw r.splice(0, h(r, c)), new Error("Cyclic dependency: " + r.join(" -> "));
                        if (s[c] = d, I(a)) q.push(c, [
                            function() {
                                return b.get(a)
                            }
                        ], j);
                        else {
                            var e = b.annotate(a);
                            L(e, function(a) {
                                a !== c && i.hasOwnProperty(a) && n(i[a], a)
                            }), q.push(c, a, e)
                        }
                        r.pop(), s[c] = f
                    }
                }

                function o(a) {
                    return J(a) && a.then && a.$$promises
                }
                if (!J(i)) throw new Error("'invocables' must be an object");
                var p = g(i || {}),
                    q = [],
                    r = [],
                    s = {};
                return L(i, n), i = r = s = null,
                    function(d, f, g) {
                        function h() {
                            --u || (v || e(t, f.$$values), r.$$values = t, r.$$promises = r.$$promises || !0, delete r.$$inheritedValues, n.resolve(t))
                        }

                        function i(a) {
                            r.$$failure = a, n.reject(a)
                        }

                        function j(c, e, f) {
                            function j(a) {
                                l.reject(a), i(a)
                            }

                            function k() {
                                if (!G(r.$$failure)) try {
                                    l.resolve(b.invoke(e, g, t)), l.promise.then(function(a) {
                                        t[c] = a, h()
                                    }, j)
                                } catch (a) {
                                    j(a)
                                }
                            }
                            var l = a.defer(),
                                m = 0;
                            L(f, function(a) {
                                s.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, s[a].then(function(b) {
                                    t[a] = b, --m || k()
                                }, j))
                            }), m || k(), s[c] = l.promise
                        }
                        if (o(d) && g === c && (g = f, f = d, d = null), d) {
                            if (!J(d)) throw new Error("'locals' must be an object")
                        } else d = k; if (f) {
                            if (!o(f)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                        } else f = m;
                        var n = a.defer(),
                            r = n.promise,
                            s = r.$$promises = {}, t = M({}, d),
                            u = 1 + q.length / 3,
                            v = !1;
                        if (G(f.$$failure)) return i(f.$$failure), r;
                        f.$$inheritedValues && e(t, l(f.$$inheritedValues, p)), M(s, f.$$promises), f.$$values ? (v = e(t, l(f.$$values, p)), r.$$inheritedValues = l(f.$$values, p), h()) : (f.$$inheritedValues && (r.$$inheritedValues = l(f.$$inheritedValues, p)), f.then(h, i));
                        for (var w = 0, x = q.length; x > w; w += 3) d.hasOwnProperty(q[w]) ? h() : j(q[w], q[w + 1], q[w + 2]);
                        return r
                    }
            }, this.resolve = function(a, b, c, d) {
                return this.study(a)(b, c, d)
            }
        }

        function p(a, b, c) {
            this.fromConfig = function(a, b, c) {
                return G(a.template) ? this.fromString(a.template, b) : G(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : G(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
            }, this.fromString = function(a, b) {
                return H(a) ? a(b) : a
            }, this.fromUrl = function(c, d) {
                return H(c) && (c = c(d)), null == c ? null : a.get(c, {
                    cache: b,
                    headers: {
                        Accept: "text/html"
                    }
                }).then(function(a) {
                    return a.data
                })
            }, this.fromProvider = function(a, b, d) {
                return c.invoke(a, null, d || {
                        params: b
                    })
            }
        }

        function q(a, b, e) {
            function f(b, c, d, e) {
                if (q.push(b), o[b]) return o[b];
                if (!/^\w+(-+\w+)*(?:\[\])?$/.test(b)) throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
                if (p[b]) throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
                return p[b] = new O.Param(b, c, d, e), p[b]
            }

            function g(a, b, c) {
                var d = ["", ""],
                    e = a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
                if (!b) return e;
                switch (c) {
                    case !1:
                        d = ["(", ")"];
                        break;
                    case !0:
                        d = ["?(", ")?"];
                        break;
                    default:
                        d = ["(" + c + "|", ")?"]
                }
                return e + d[0] + b + d[1]
            }

            function h(c, e) {
                var f, g, h, i, j;
                return f = c[2] || c[3], j = b.params[f], h = a.substring(m, c.index), g = e ? c[4] : c[4] || ("*" == c[1] ? ".*" : null), i = O.type(g || "string") || d(O.type("string"), {
                        pattern: new RegExp(g)
                    }), {
                    id: f,
                    regexp: g,
                    segment: h,
                    type: i,
                    cfg: j
                }
            }
            b = M({
                params: {}
            }, J(b) ? b : {});
            var i, j = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                k = /([:]?)([\w\[\]-]+)|\{([\w\[\]-]+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
                l = "^",
                m = 0,
                n = this.segments = [],
                o = e ? e.params : {}, p = this.params = e ? e.params.$$new() : new O.ParamSet,
                q = [];
            this.source = a;
            for (var r, s, t;
                 (i = j.exec(a)) && (r = h(i, !1), !(r.segment.indexOf("?") >= 0));) s = f(r.id, r.type, r.cfg, "path"), l += g(r.segment, s.type.pattern.source, s.squash), n.push(r.segment), m = j.lastIndex;
            t = a.substring(m);
            var u = t.indexOf("?");
            if (u >= 0) {
                var v = this.sourceSearch = t.substring(u);
                if (t = t.substring(0, u), this.sourcePath = a.substring(0, m + u), v.length > 0)
                    for (m = 0; i = k.exec(v);) r = h(i, !0), s = f(r.id, r.type, r.cfg, "search"), m = j.lastIndex
            } else this.sourcePath = a, this.sourceSearch = "";
            l += g(t) + (b.strict === !1 ? "/?" : "") + "$", n.push(t), this.regexp = new RegExp(l, b.caseInsensitive ? "i" : c), this.prefix = n[0], this.$$paramNames = q
        }

        function r(a) {
            M(this, a)
        }

        function s() {
            function a(a) {
                return null != a ? a.toString().replace(/\//g, "%2F") : a
            }

            function e(a) {
                return null != a ? a.toString().replace(/%2F/g, "/") : a
            }

            function f(a) {
                return this.pattern.test(a)
            }

            function i() {
                return {
                    strict: t,
                    caseInsensitive: p
                }
            }

            function j(a) {
                return H(a) || K(a) && H(a[a.length - 1])
            }

            function k() {
                for (; x.length;) {
                    var a = x.shift();
                    if (a.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
                    b.extend(v[a.name], o.invoke(a.def))
                }
            }

            function l(a) {
                M(this, a || {})
            }
            O = this;
            var o, p = !1,
                t = !0,
                u = !1,
                v = {}, w = !0,
                x = [],
                y = {
                    string: {
                        encode: a,
                        decode: e,
                        is: f,
                        pattern: /[^/]*/
                    },
                    "int": {
                        encode: a,
                        decode: function(a) {
                            return parseInt(a, 10)
                        },
                        is: function(a) {
                            return G(a) && this.decode(a.toString()) === a
                        },
                        pattern: /\d+/
                    },
                    bool: {
                        encode: function(a) {
                            return a ? 1 : 0
                        },
                        decode: function(a) {
                            return 0 !== parseInt(a, 10)
                        },
                        is: function(a) {
                            return a === !0 || a === !1
                        },
                        pattern: /0|1/
                    },
                    date: {
                        encode: function(a) {
                            return this.is(a) ? [a.getFullYear(), ("0" + (a.getMonth() + 1)).slice(-2), ("0" + a.getDate()).slice(-2)].join("-") : c
                        },
                        decode: function(a) {
                            if (this.is(a)) return a;
                            var b = this.capture.exec(a);
                            return b ? new Date(b[1], b[2] - 1, b[3]) : c
                        },
                        is: function(a) {
                            return a instanceof Date && !isNaN(a.valueOf())
                        },
                        equals: function(a, b) {
                            return this.is(a) && this.is(b) && a.toISOString() === b.toISOString()
                        },
                        pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
                        capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
                    },
                    json: {
                        encode: b.toJson,
                        decode: b.fromJson,
                        is: b.isObject,
                        equals: b.equals,
                        pattern: /[^/]*/
                    },
                    any: {
                        encode: b.identity,
                        decode: b.identity,
                        is: b.identity,
                        equals: b.equals,
                        pattern: /.*/
                    }
                };
            s.$$getDefaultValue = function(a) {
                if (!j(a.value)) return a.value;
                if (!o) throw new Error("Injectable functions cannot be called at configuration time");
                return o.invoke(a.value)
            }, this.caseInsensitive = function(a) {
                return G(a) && (p = a), p
            }, this.strictMode = function(a) {
                return G(a) && (t = a), t
            }, this.defaultSquashPolicy = function(a) {
                if (!G(a)) return u;
                if (a !== !0 && a !== !1 && !I(a)) throw new Error("Invalid squash policy: " + a + ". Valid policies: false, true, arbitrary-string");
                return u = a, a
            }, this.compile = function(a, b) {
                return new q(a, M(i(), b))
            }, this.isMatcher = function(a) {
                if (!J(a)) return !1;
                var b = !0;
                return L(q.prototype, function(c, d) {
                    H(c) && (b = b && G(a[d]) && H(a[d]))
                }), b
            }, this.type = function(a, b, c) {
                if (!G(b)) return v[a];
                if (v.hasOwnProperty(a)) throw new Error("A type named '" + a + "' has already been defined.");
                return v[a] = new r(M({
                    name: a
                }, b)), c && (x.push({
                    name: a,
                    def: c
                }), w || k()), this
            }, L(y, function(a, b) {
                v[b] = new r(M({
                    name: b
                }, a))
            }), v = d(v, {}), this.$get = ["$injector",
                function(a) {
                    return o = a, w = !1, k(), L(y, function(a, b) {
                        v[b] || (v[b] = new r(a))
                    }), this
                }
            ], this.Param = function(a, b, d, e) {
                function f(a) {
                    var b = J(a) ? g(a) : [],
                        c = -1 === h(b, "value") && -1 === h(b, "type") && -1 === h(b, "squash") && -1 === h(b, "array");
                    return c && (a = {
                        value: a
                    }), a.$$fn = j(a.value) ? a.value : function() {
                        return a.value
                    }, a
                }

                function i(b, c, d) {
                    if (b.type && c) throw new Error("Param '" + a + "' has two type configurations.");
                    return c ? c : b.type ? b.type instanceof r ? b.type : new r(b.type) : "config" === d ? v.any : v.string
                }

                function k() {
                    var b = {
                        array: "search" === e ? "auto" : !1
                    }, c = a.match(/\[\]$/) ? {
                        array: !0
                    } : {};
                    return M(b, c, d).array
                }

                function l(a, b) {
                    var c = a.squash;
                    if (!b || c === !1) return !1;
                    if (!G(c) || null == c) return u;
                    if (c === !0 || I(c)) return c;
                    throw new Error("Invalid squash policy: '" + c + "'. Valid policies: false, true, or arbitrary string")
                }

                function p(a, b, d, e) {
                    var f, g, i = [{
                        from: "",
                        to: d || b ? c : ""
                    }, {
                        from: null,
                        to: d || b ? c : ""
                    }];
                    return f = K(a.replace) ? a.replace : [], I(e) && f.push({
                        from: e,
                        to: c
                    }), g = n(f, function(a) {
                        return a.from
                    }), m(i, function(a) {
                        return -1 === h(g, a.from)
                    }).concat(f)
                }

                function q() {
                    if (!o) throw new Error("Injectable functions cannot be called at configuration time");
                    return o.invoke(d.$$fn)
                }

                function s(a) {
                    function b(a) {
                        return function(b) {
                            return b.from === a
                        }
                    }

                    function c(a) {
                        var c = n(m(w.replace, b(a)), function(a) {
                            return a.to
                        });
                        return c.length ? c[0] : a
                    }
                    return a = c(a), G(a) ? w.type.decode(a) : q()
                }

                function t() {
                    return "{Param:" + a + " " + b + " squash: '" + z + "' optional: " + y + "}"
                }
                var w = this;
                d = f(d), b = i(d, b, e);
                var x = k();
                b = x ? b.$asArray(x, "search" === e) : b, "string" !== b.name || x || "path" !== e || d.value !== c || (d.value = "");
                var y = d.value !== c,
                    z = l(d, y),
                    A = p(d, x, y, z);
                M(this, {
                    id: a,
                    type: b,
                    location: e,
                    array: x,
                    squash: z,
                    replace: A,
                    isOptional: y,
                    value: s,
                    dynamic: c,
                    config: d,
                    toString: t
                })
            }, l.prototype = {
                $$new: function() {
                    return d(this, M(new l, {
                        $$parent: this
                    }))
                },
                $$keys: function() {
                    for (var a = [], b = [], c = this, d = g(l.prototype); c;) b.push(c), c = c.$$parent;
                    return b.reverse(), L(b, function(b) {
                        L(g(b), function(b) {
                            -1 === h(a, b) && -1 === h(d, b) && a.push(b)
                        })
                    }), a
                },
                $$values: function(a) {
                    var b = {}, c = this;
                    return L(c.$$keys(), function(d) {
                        b[d] = c[d].value(a && a[d])
                    }), b
                },
                $$equals: function(a, b) {
                    var c = !0,
                        d = this;
                    return L(d.$$keys(), function(e) {
                        var f = a && a[e],
                            g = b && b[e];
                        d[e].type.equals(f, g) || (c = !1)
                    }), c
                },
                $$validates: function(a) {
                    var b, c, d, e = !0,
                        f = this;
                    return L(this.$$keys(), function(g) {
                        d = f[g], c = a[g], b = !c && d.isOptional, e = e && (b || !! d.type.is(c))
                    }), e
                },
                $$parent: c
            }, this.ParamSet = l
        }

        function t(a, d) {
            function e(a) {
                var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
                return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
            }

            function f(a, b) {
                return a.replace(/\$(\$|\d{1,2})/, function(a, c) {
                    return b["$" === c ? 0 : Number(c)]
                })
            }

            function g(a, b, c) {
                if (!c) return !1;
                var d = a.invoke(b, b, {
                    $match: c
                });
                return G(d) ? d : !0
            }

            function h(d, e, f, g) {
                function h(a, b, c) {
                    return "/" === p ? a : b ? p.slice(0, -1) + a : c ? p.slice(1) + a : a
                }

                function m(a) {
                    function b(a) {
                        var b = a(f, d);
                        return b ? (I(b) && d.replace().url(b), !0) : !1
                    }
                    if (!a || !a.defaultPrevented) {
                        var e = o && d.url() === o;
                        if (o = c, e) return !0;
                        var g, h = j.length;
                        for (g = 0; h > g; g++)
                            if (b(j[g])) return;
                        k && b(k)
                    }
                }

                function n() {
                    return i = i || e.$on("$locationChangeSuccess", m)
                }
                var o, p = g.baseHref(),
                    q = d.url();
                return l || n(), {
                    sync: function() {
                        m()
                    },
                    listen: function() {
                        return n()
                    },
                    update: function(a) {
                        return a ? void(q = d.url()) : void(d.url() !== q && (d.url(q), d.replace()))
                    },
                    push: function(a, b, e) {
                        d.url(a.format(b || {})), o = e && e.$$avoidResync ? d.url() : c, e && e.replace && d.replace()
                    },
                    href: function(c, e, f) {
                        if (!c.validates(e)) return null;
                        var g = a.html5Mode();
                        b.isObject(g) && (g = g.enabled);
                        var i = c.format(e);
                        if (f = f || {}, g || null === i || (i = "#" + a.hashPrefix() + i), i = h(i, g, f.absolute), !f.absolute || !i) return i;
                        var j = !g && i ? "/" : "",
                            k = d.port();
                        return k = 80 === k || 443 === k ? "" : ":" + k, [d.protocol(), "://", d.host(), k, j, i].join("")
                    }
                }
            }
            var i, j = [],
                k = null,
                l = !1;
            this.rule = function(a) {
                if (!H(a)) throw new Error("'rule' must be a function");
                return j.push(a), this
            }, this.otherwise = function(a) {
                if (I(a)) {
                    var b = a;
                    a = function() {
                        return b
                    }
                } else if (!H(a)) throw new Error("'rule' must be a function");
                return k = a, this
            }, this.when = function(a, b) {
                var c, h = I(b);
                if (I(a) && (a = d.compile(a)), !h && !H(b) && !K(b)) throw new Error("invalid 'handler' in when()");
                var i = {
                    matcher: function(a, b) {
                        return h && (c = d.compile(b), b = ["$match",
                            function(a) {
                                return c.format(a)
                            }
                        ]), M(function(c, d) {
                            return g(c, b, a.exec(d.path(), d.search()))
                        }, {
                            prefix: I(a.prefix) ? a.prefix : ""
                        })
                    },
                    regex: function(a, b) {
                        if (a.global || a.sticky) throw new Error("when() RegExp must not be global or sticky");
                        return h && (c = b, b = ["$match",
                            function(a) {
                                return f(c, a)
                            }
                        ]), M(function(c, d) {
                            return g(c, b, a.exec(d.path()))
                        }, {
                            prefix: e(a)
                        })
                    }
                }, j = {
                    matcher: d.isMatcher(a),
                    regex: a instanceof RegExp
                };
                for (var k in j)
                    if (j[k]) return this.rule(i[k](a, b));
                throw new Error("invalid 'what' in when()")
            }, this.deferIntercept = function(a) {
                a === c && (a = !0), l = a
            }, this.$get = h, h.$inject = ["$location", "$rootScope", "$injector", "$browser"]
        }

        function u(a, e) {
            function f(a) {
                return 0 === a.indexOf(".") || 0 === a.indexOf("^")
            }

            function l(a, b) {
                if (!a) return c;
                var d = I(a),
                    e = d ? a : a.name,
                    g = f(e);
                if (g) {
                    if (!b) throw new Error("No reference point given for path '" + e + "'");
                    b = l(b);
                    for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)
                        if ("" !== h[i] || 0 !== i) {
                            if ("^" !== h[i]) break;
                            if (!k.parent) throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                            k = k.parent
                        } else k = b;
                    h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
                }
                var m = y[e];
                return !m || !d && (d || m !== a && m.self !== a) ? c : m
            }

            function m(a, b) {
                z[a] || (z[a] = []), z[a].push(b)
            }

            function o(a) {
                for (var b = z[a] || []; b.length;) p(b.shift())
            }

            function p(b) {
                b = d(b, {
                    self: b,
                    resolve: b.resolve || {},
                    toString: function() {
                        return this.name
                    }
                });
                var c = b.name;
                if (!I(c) || c.indexOf("@") >= 0) throw new Error("State must have a valid name");
                if (y.hasOwnProperty(c)) throw new Error("State '" + c + "'' is already defined");
                var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : I(b.parent) ? b.parent : J(b.parent) && I(b.parent.name) ? b.parent.name : "";
                if (e && !y[e]) return m(e, b.self);
                for (var f in B) H(B[f]) && (b[f] = B[f](b, B.$delegates[f]));
                return y[c] = b, !b[A] && b.url && a.when(b.url, ["$match", "$stateParams",
                    function(a, c) {
                        x.$current.navigable == b && j(a, c) || x.transitionTo(b, a, {
                            inherit: !0,
                            location: !1
                        })
                    }
                ]), o(c), b
            }

            function q(a) {
                return a.indexOf("*") > -1
            }

            function r(a) {
                var b = a.split("."),
                    c = x.$current.name.split(".");
                if ("**" === b[0] && (c = c.slice(h(c, b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(h(c, b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length) return !1;
                for (var d = 0, e = b.length; e > d; d++) "*" === b[d] && (c[d] = "*");
                return c.join("") === b.join("")
            }

            function s(a, b) {
                return I(a) && !G(b) ? B[a] : H(b) && I(a) ? (B[a] && !B.$delegates[a] && (B.$delegates[a] = B[a]), B[a] = b, this) : this
            }

            function t(a, b) {
                return J(a) ? b = a : b.name = a, p(b), this
            }

            function u(a, e, f, h, m, o, p, s, t) {
                function u(b, c, d, f) {
                    var g = a.$broadcast("$stateNotFound", b, c, d);
                    if (g.defaultPrevented) return p.update(), D;
                    if (!g.retry) return null;
                    if (f.$retry) return p.update(), E;
                    var h = x.transition = e.when(g.retry);
                    return h.then(function() {
                        return h !== x.transition ? B : (b.options.$retry = !0, x.transitionTo(b.to, b.toParams, b.options))
                    }, function() {
                        return D
                    }), p.update(), h
                }

                function z(a, c, d, g, i, j) {
                    var l = d ? c : k(a.params.$$keys(), c),
                        n = {
                            $stateParams: l
                        };
                    i.resolve = m.resolve(a.resolve, n, i.resolve, a);
                    var o = [i.resolve.then(function(a) {
                        i.globals = a
                    })];
                    return g && o.push(g), L(a.views, function(c, d) {
                        var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};
                        e.$template = [
                            function() {
                                return f.load(d, {
                                        view: c,
                                        locals: n,
                                        params: l,
                                        notify: j.notify
                                    }) || ""
                            }
                        ], o.push(m.resolve(e, n, i.resolve, a).then(function(f) {
                            if (H(c.controllerProvider) || K(c.controllerProvider)) {
                                var g = b.extend({}, e, n);
                                f.$$controller = h.invoke(c.controllerProvider, null, g)
                            } else f.$$controller = c.controller;
                            f.$$state = a, f.$$controllerAs = c.controllerAs, i[d] = f
                        }))
                    }), e.all(o).then(function(a) {
                        return i
                    })
                }
                var B = e.reject(new Error("transition superseded")),
                    C = e.reject(new Error("transition prevented")),
                    D = e.reject(new Error("transition aborted")),
                    E = e.reject(new Error("transition failed"));
                return w.locals = {
                    resolve: null,
                    globals: {
                        $stateParams: {}
                    }
                }, x = {
                    params: {},
                    current: w.self,
                    $current: w,
                    transition: null
                }, x.reload = function() {
                    return x.transitionTo(x.current, o, {
                        reload: !0,
                        inherit: !1,
                        notify: !0
                    })
                }, x.go = function(a, b, c) {
                    return x.transitionTo(a, b, M({
                        inherit: !0,
                        relative: x.$current
                    }, c))
                }, x.transitionTo = function(b, c, f) {
                    c = c || {}, f = M({
                        location: !0,
                        inherit: !1,
                        relative: null,
                        notify: !0,
                        reload: !1,
                        $retry: !1
                    }, f || {});
                    var g, j = x.$current,
                        m = x.params,
                        n = j.path,
                        q = l(b, f.relative);
                    if (!G(q)) {
                        var r = {
                            to: b,
                            toParams: c,
                            options: f
                        }, s = u(r, j.self, m, f);
                        if (s) return s;
                        if (b = r.to, c = r.toParams, f = r.options, q = l(b, f.relative), !G(q)) {
                            if (!f.relative) throw new Error("No such state '" + b + "'");
                            throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'")
                        }
                    }
                    if (q[A]) throw new Error("Cannot transition to abstract state '" + b + "'");
                    if (f.inherit && (c = i(o, c || {}, x.$current, q)), !q.params.$$validates(c)) return E;
                    c = q.params.$$values(c), b = q;
                    var t = b.path,
                        y = 0,
                        D = t[y],
                        F = w.locals,
                        H = [];
                    if (!f.reload)
                        for (; D && D === n[y] && D.ownParams.$$equals(c, m);) F = H[y] = D.locals, y++, D = t[y];
                    if (v(b, j, F, f)) return b.self.reloadOnSearch !== !1 && p.update(), x.transition = null, e.when(x.current);
                    if (c = k(b.params.$$keys(), c || {}), f.notify && a.$broadcast("$stateChangeStart", b.self, c, j.self, m).defaultPrevented) return p.update(), C;
                    for (var I = e.when(F), J = y; J < t.length; J++, D = t[J]) F = H[J] = d(F), I = z(D, c, D === b, I, F, f);
                    var K = x.transition = I.then(function() {
                        var d, e, g;
                        if (x.transition !== K) return B;
                        for (d = n.length - 1; d >= y; d--) g = n[d], g.self.onExit && h.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                        for (d = y; d < t.length; d++) e = t[d], e.locals = H[d], e.self.onEnter && h.invoke(e.self.onEnter, e.self, e.locals.globals);
                        return x.transition !== K ? B : (x.$current = b, x.current = b.self, x.params = c, N(x.params, o), x.transition = null, f.location && b.navigable && p.push(b.navigable.url, b.navigable.locals.globals.$stateParams, {
                            $$avoidResync: !0,
                            replace: "replace" === f.location
                        }), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, j.self, m), p.update(!0), x.current)
                    }, function(d) {
                        return x.transition !== K ? B : (x.transition = null, g = a.$broadcast("$stateChangeError", b.self, c, j.self, m, d), g.defaultPrevented || p.update(), e.reject(d))
                    });
                    return K
                }, x.is = function(a, b, d) {
                    d = M({
                        relative: x.$current
                    }, d || {});
                    var e = l(a, d.relative);
                    return G(e) ? x.$current !== e ? !1 : b ? j(e.params.$$values(b), o) : !0 : c
                }, x.includes = function(a, b, d) {
                    if (d = M({
                            relative: x.$current
                        }, d || {}), I(a) && q(a)) {
                        if (!r(a)) return !1;
                        a = x.$current.name
                    }
                    var e = l(a, d.relative);
                    return G(e) ? G(x.$current.includes[e.name]) ? b ? j(e.params.$$values(b), o, g(b)) : !0 : !1 : c
                }, x.href = function(a, b, d) {
                    d = M({
                        lossy: !0,
                        inherit: !0,
                        absolute: !1,
                        relative: x.$current
                    }, d || {});
                    var e = l(a, d.relative);
                    if (!G(e)) return null;
                    d.inherit && (b = i(o, b || {}, x.$current, e));
                    var f = e && d.lossy ? e.navigable : e;
                    return f && f.url !== c && null !== f.url ? p.href(f.url, k(e.params.$$keys(), b || {}), {
                        absolute: d.absolute
                    }) : null
                }, x.get = function(a, b) {
                    if (0 === arguments.length) return n(g(y), function(a) {
                        return y[a].self
                    });
                    var c = l(a, b || x.$current);
                    return c && c.self ? c.self : null
                }, x
            }

            function v(a, b, c, d) {
                return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0
            }
            var w, x, y = {}, z = {}, A = "abstract",
                B = {
                    parent: function(a) {
                        if (G(a.parent) && a.parent) return l(a.parent);
                        var b = /^(.+)\.[^.]+$/.exec(a.name);
                        return b ? l(b[1]) : w
                    },
                    data: function(a) {
                        return a.parent && a.parent.data && (a.data = a.self.data = M({}, a.parent.data, a.data)), a.data
                    },
                    url: function(a) {
                        var b = a.url,
                            c = {
                                params: a.params || {}
                            };
                        if (I(b)) return "^" == b.charAt(0) ? e.compile(b.substring(1), c) : (a.parent.navigable || w).url.concat(b, c);
                        if (!b || e.isMatcher(b)) return b;
                        throw new Error("Invalid url '" + b + "' in state '" + a + "'")
                    },
                    navigable: function(a) {
                        return a.url ? a : a.parent ? a.parent.navigable : null
                    },
                    ownParams: function(a) {
                        var b = a.url && a.url.params || new O.ParamSet;
                        return L(a.params || {}, function(a, c) {
                            b[c] || (b[c] = new O.Param(c, null, a, "config"))
                        }), b
                    },
                    params: function(a) {
                        return a.parent && a.parent.params ? M(a.parent.params.$$new(), a.ownParams) : new O.ParamSet
                    },
                    views: function(a) {
                        var b = {};
                        return L(G(a.views) ? a.views : {
                            "": a
                        }, function(c, d) {
                            d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
                        }), b
                    },
                    path: function(a) {
                        return a.parent ? a.parent.path.concat(a) : []
                    },
                    includes: function(a) {
                        var b = a.parent ? M({}, a.parent.includes) : {};
                        return b[a.name] = !0, b
                    },
                    $delegates: {}
                };
            w = p({
                name: "",
                url: "^",
                views: null,
                "abstract": !0
            }), w.navigable = null, this.decorator = s, this.state = t, this.$get = u, u.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
        }

        function v() {
            function a(a, b) {
                return {
                    load: function(c, d) {
                        var e, f = {
                            template: null,
                            controller: null,
                            view: null,
                            locals: null,
                            notify: !0,
                            async: !0,
                            params: {}
                        };
                        return d = M(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e
                    }
                }
            }
            this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
        }

        function w() {
            var a = !1;
            this.useAnchorScroll = function() {
                a = !0
            }, this.$get = ["$anchorScroll", "$timeout",
                function(b, c) {
                    return a ? b : function(a) {
                        c(function() {
                            a[0].scrollIntoView()
                        }, 0, !1)
                    }
                }
            ]
        }

        function x(a, c, d, e) {
            function f() {
                return c.has ? function(a) {
                    return c.has(a) ? c.get(a) : null
                } : function(a) {
                    try {
                        return c.get(a)
                    } catch (b) {
                        return null
                    }
                }
            }

            function g(a, b) {
                var c = function() {
                    return {
                        enter: function(a, b, c) {
                            b.after(a), c()
                        },
                        leave: function(a, b) {
                            a.remove(), b()
                        }
                    }
                };
                if (j) return {
                    enter: function(a, b, c) {
                        var d = j.enter(a, null, b, c);
                        d && d.then && d.then(c)
                    },
                    leave: function(a, b) {
                        var c = j.leave(a, b);
                        c && c.then && c.then(b)
                    }
                };
                if (i) {
                    var d = i && i(b, a);
                    return {
                        enter: function(a, b, c) {
                            d.enter(a, null, b), c()
                        },
                        leave: function(a, b) {
                            d.leave(a), b()
                        }
                    }
                }
                return c()
            }
            var h = f(),
                i = h("$animator"),
                j = h("$animate"),
                k = {
                    restrict: "ECA",
                    terminal: !0,
                    priority: 400,
                    transclude: "element",
                    compile: function(c, f, h) {
                        return function(c, f, i) {
                            function j() {
                                l && (l.remove(), l = null), n && (n.$destroy(), n = null), m && (r.leave(m, function() {
                                    l = null
                                }), l = m, m = null)
                            }

                            function k(g) {
                                var k, l = z(c, i, f, e),
                                    s = l && a.$current && a.$current.locals[l];
                                if (g || s !== o) {
                                    k = c.$new(), o = a.$current.locals[l];
                                    var t = h(k, function(a) {
                                        r.enter(a, f, function() {
                                            n && n.$emit("$viewContentAnimationEnded"), (b.isDefined(q) && !q || c.$eval(q)) && d(a)
                                        }), j()
                                    });
                                    m = t, n = k, n.$emit("$viewContentLoaded"), n.$eval(p)
                                }
                            }
                            var l, m, n, o, p = i.onload || "",
                                q = i.autoscroll,
                                r = g(i, c);
                            c.$on("$stateChangeSuccess", function() {
                                k(!1)
                            }), c.$on("$viewContentLoading", function() {
                                k(!1)
                            }), k(!0)
                        }
                    }
                };
            return k
        }

        function y(a, b, c, d) {
            return {
                restrict: "ECA",
                priority: -400,
                compile: function(e) {
                    var f = e.html();
                    return function(e, g, h) {
                        var i = c.$current,
                            j = z(e, h, g, d),
                            k = i && i.locals[j];
                        if (k) {
                            g.data("$uiView", {
                                name: j,
                                state: k.$$state
                            }), g.html(k.$template ? k.$template : f);
                            var l = a(g.contents());
                            if (k.$$controller) {
                                k.$scope = e;
                                var m = b(k.$$controller, k);
                                k.$$controllerAs && (e[k.$$controllerAs] = m), g.data("$ngControllerController", m), g.children().data("$ngControllerController", m)
                            }
                            l(e)
                        }
                    }
                }
            }
        }

        function z(a, b, c, d) {
            var e = d(b.uiView || b.name || "")(a),
                f = c.inheritedData("$uiView");
            return e.indexOf("@") >= 0 ? e : e + "@" + (f ? f.state.name : "")
        }

        function A(a, b) {
            var c, d = a.match(/^\s*({[^}]*})\s*$/);
            if (d && (a = b + "(" + d[1] + ")"), c = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !c || 4 !== c.length) throw new Error("Invalid state ref '" + a + "'");
            return {
                state: c[1],
                paramExpr: c[3] || null
            }
        }

        function B(a) {
            var b = a.parent().inheritedData("$uiView");
            return b && b.state && b.state.name ? b.state : void 0
        }

        function C(a, c) {
            var d = ["location", "inherit", "reload"];
            return {
                restrict: "A",
                require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
                link: function(e, f, g, h) {
                    var i = A(g.uiSref, a.current.name),
                        j = null,
                        k = B(f) || a.$current,
                        l = null,
                        m = "A" === f.prop("tagName"),
                        n = "FORM" === f[0].nodeName,
                        o = n ? "action" : "href",
                        p = !0,
                        q = {
                            relative: k,
                            inherit: !0
                        }, r = e.$eval(g.uiSrefOpts) || {};
                    b.forEach(d, function(a) {
                        a in r && (q[a] = r[a])
                    });
                    var s = function(c) {
                        if (c && (j = b.copy(c)), p) {
                            l = a.href(i.state, j, q);
                            var d = h[1] || h[0];
                            return d && d.$$setStateInfo(i.state, j), null === l ? (p = !1, !1) : void g.$set(o, l)
                        }
                    };
                    i.paramExpr && (e.$watch(i.paramExpr, function(a, b) {
                        a !== j && s(a)
                    }, !0), j = b.copy(e.$eval(i.paramExpr))), s(), n || f.bind("click", function(b) {
                        var d = b.which || b.button;
                        if (!(d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target"))) {
                            var e = c(function() {
                                a.go(i.state, j, q)
                            });
                            b.preventDefault();
                            var g = m && !l ? 1 : 0;
                            b.preventDefault = function() {
                                g-- <= 0 && c.cancel(e)
                            }
                        }
                    })
                }
            }
        }

        function D(a, b, c) {
            return {
                restrict: "A",
                controller: ["$scope", "$element", "$attrs",
                    function(b, d, e) {
                        function f() {
                            g() ? d.addClass(j) : d.removeClass(j)
                        }

                        function g() {
                            return "undefined" != typeof e.uiSrefActiveEq ? h && a.is(h.name, i) : h && a.includes(h.name, i)
                        }
                        var h, i, j;
                        j = c(e.uiSrefActiveEq || e.uiSrefActive || "", !1)(b), this.$$setStateInfo = function(b, c) {
                            h = a.get(b, B(d)), i = c, f()
                        }, b.$on("$stateChangeSuccess", f)
                    }
                ]
            }
        }

        function E(a) {
            var b = function(b) {
                return a.is(b)
            };
            return b.$stateful = !0, b
        }

        function F(a) {
            var b = function(b) {
                return a.includes(b)
            };
            return b.$stateful = !0, b
        }
        var G = b.isDefined,
            H = b.isFunction,
            I = b.isString,
            J = b.isObject,
            K = b.isArray,
            L = b.forEach,
            M = b.extend,
            N = b.copy;
        b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), o.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", o), p.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", p);
        var O;
        q.prototype.concat = function(a, b) {
            var c = {
                caseInsensitive: O.caseInsensitive(),
                strict: O.strictMode(),
                squash: O.defaultSquashPolicy()
            };
            return new q(this.sourcePath + a + this.sourceSearch, M(c, b), this)
        }, q.prototype.toString = function() {
            return this.source
        }, q.prototype.exec = function(a, b) {
            function c(a) {
                function b(a) {
                    return a.split("").reverse().join("")
                }

                function c(a) {
                    return a.replace(/\\-/, "-")
                }
                var d = b(a).split(/-(?!\\)/),
                    e = n(d, b);
                return n(e, c).reverse()
            }
            var d = this.regexp.exec(a);
            if (!d) return null;
            b = b || {};
            var e, f, g, h = this.parameters(),
                i = h.length,
                j = this.segments.length - 1,
                k = {};
            if (j !== d.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
            for (e = 0; j > e; e++) {
                g = h[e];
                var l = this.params[g],
                    m = d[e + 1];
                for (f = 0; f < l.replace; f++) l.replace[f].from === m && (m = l.replace[f].to);
                m && l.array === !0 && (m = c(m)), k[g] = l.value(m)
            }
            for (; i > e; e++) g = h[e], k[g] = this.params[g].value(b[g]);
            return k
        }, q.prototype.parameters = function(a) {
            return G(a) ? this.params[a] || null : this.$$paramNames
        }, q.prototype.validates = function(a) {
            return this.params.$$validates(a)
        }, q.prototype.format = function(a) {
            function b(a) {
                return encodeURIComponent(a).replace(/-/g, function(a) {
                    return "%5C%" + a.charCodeAt(0).toString(16).toUpperCase()
                })
            }
            a = a || {};
            var c = this.segments,
                d = this.parameters(),
                e = this.params;
            if (!this.validates(a)) return null;
            var f, g = !1,
                h = c.length - 1,
                i = d.length,
                j = c[0];
            for (f = 0; i > f; f++) {
                var k = h > f,
                    l = d[f],
                    m = e[l],
                    o = m.value(a[l]),
                    p = m.isOptional && m.type.equals(m.value(), o),
                    q = p ? m.squash : !1,
                    r = m.type.encode(o);
                if (k) {
                    var s = c[f + 1];
                    if (q === !1) null != r && (j += K(r) ? n(r, b).join("-") : encodeURIComponent(r)), j += s;
                    else if (q === !0) {
                        var t = j.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
                        j += s.match(t)[1]
                    } else I(q) && (j += q + s)
                } else {
                    if (null == r || p && q !== !1) continue;
                    K(r) || (r = [r]), r = n(r, encodeURIComponent).join("&" + l + "="), j += (g ? "&" : "?") + (l + "=" + r), g = !0
                }
            }
            return j
        }, r.prototype.is = function(a, b) {
            return !0
        }, r.prototype.encode = function(a, b) {
            return a
        }, r.prototype.decode = function(a, b) {
            return a
        }, r.prototype.equals = function(a, b) {
            return a == b
        }, r.prototype.$subPattern = function() {
            var a = this.pattern.toString();
            return a.substr(1, a.length - 2)
        }, r.prototype.pattern = /.*/, r.prototype.toString = function() {
            return "{Type:" + this.name + "}"
        }, r.prototype.$asArray = function(a, b) {
            function d(a, b) {
                function d(a, b) {
                    return function() {
                        return a[b].apply(a, arguments)
                    }
                }

                function e(a) {
                    return K(a) ? a : G(a) ? [a] : []
                }

                function f(a) {
                    switch (a.length) {
                        case 0:
                            return c;
                        case 1:
                            return "auto" === b ? a[0] : a;
                        default:
                            return a
                    }
                }

                function g(a) {
                    return !a
                }

                function h(a, b) {
                    return function(c) {
                        c = e(c);
                        var d = n(c, a);
                        return b === !0 ? 0 === m(d, g).length : f(d)
                    }
                }

                function i(a) {
                    return function(b, c) {
                        var d = e(b),
                            f = e(c);
                        if (d.length !== f.length) return !1;
                        for (var g = 0; g < d.length; g++)
                            if (!a(d[g], f[g])) return !1;
                        return !0
                    }
                }
                this.encode = h(d(a, "encode")), this.decode = h(d(a, "decode")), this.is = h(d(a, "is"), !0), this.equals = i(d(a, "equals")), this.pattern = a.pattern, this.$arrayMode = b
            }
            if (!a) return this;
            if ("auto" === a && !b) throw new Error("'auto' array mode is for query parameters only");
            return new d(this, a)
        }, b.module("ui.router.util").provider("$urlMatcherFactory", s), b.module("ui.router.util").run(["$urlMatcherFactory",
            function(a) {}
        ]), t.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", t), u.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", u), v.$inject = [], b.module("ui.router.state").provider("$view", v), b.module("ui.router.state").provider("$uiViewScroll", w), x.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], y.$inject = ["$compile", "$controller", "$state", "$interpolate"], b.module("ui.router.state").directive("uiView", x), b.module("ui.router.state").directive("uiView", y), C.$inject = ["$state", "$timeout"], D.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", C).directive("uiSrefActive", D).directive("uiSrefActiveEq", D), E.$inject = ["$state"], F.$inject = ["$state"], b.module("ui.router.state").filter("isState", E).filter("includedByState", F)
    }(window, window.angular),
    function() {
        function a(a) {
            return ["$rootScope", "$window", function(b, c) {
                for (var d, e, f, g = c[a] || (console.warn("This browser does not support Web Storage!"), {}), h = {
                    $default: function(a) {
                        for (var b in a) angular.isDefined(h[b]) || (h[b] = a[b]);
                        return h
                    },
                    $reset: function(a) {
                        for (var b in h) "$" === b[0] || delete h[b];
                        return h.$default(a)
                    }
                }, i = 0; i < g.length; i++)(f = g.key(i)) && "ngStorage-" === f.slice(0, 10) && (h[f.slice(10)] = angular.fromJson(g.getItem(f)));
                return d = angular.copy(h), b.$watch(function() {
                    e || (e = setTimeout(function() {
                        if (e = null, !angular.equals(h, d)) {
                            angular.forEach(h, function(a, b) {
                                angular.isDefined(a) && "$" !== b[0] && g.setItem("ngStorage-" + b, angular.toJson(a)), delete d[b]
                            });
                            for (var a in d) g.removeItem("ngStorage-" + a);
                            d = angular.copy(h)
                        }
                    }, 100))
                }), "localStorage" === a && c.addEventListener && c.addEventListener("storage", function(a) {
                    "ngStorage-" === a.key.slice(0, 10) && (a.newValue ? h[a.key.slice(10)] = angular.fromJson(a.newValue) : delete h[a.key.slice(10)], d = angular.copy(h), b.$apply())
                }), h
            }]
        }
        angular.module("ngStorage", []).factory("$localStorage", a("localStorage")).factory("$sessionStorage", a("sessionStorage"))
    }(), angular.module("ui.alias", []).config(["$compileProvider", "uiAliasConfig",
    function(a, b) {
        "use strict";
        b = b || {}, angular.forEach(b, function(b, c) {
            angular.isString(b) && (b = {
                replace: !0,
                template: b
            }), a.directive(c, function() {
                return b
            })
        })
    }
]), angular.module("ui.event", []).directive("uiEvent", ["$parse",
    function(a) {
        "use strict";
        return function(b, c, d) {
            var e = b.$eval(d.uiEvent);
            angular.forEach(e, function(d, e) {
                var f = a(d);
                c.bind(e, function(a) {
                    var c = Array.prototype.slice.call(arguments);
                    c = c.splice(1), f(b, {
                        $event: a,
                        $params: c
                    }), b.$$phase || b.$apply()
                })
            })
        }
    }
]), angular.module("ui.format", []).filter("format", function() {
    "use strict";
    return function(a, b) {
        var c = a;
        if (angular.isString(c) && void 0 !== b)
            if (angular.isArray(b) || angular.isObject(b) || (b = [b]), angular.isArray(b)) {
                var d = b.length,
                    e = function(a, c) {
                        return c = parseInt(c, 10), c >= 0 && d > c ? b[c] : a
                    };
                c = c.replace(/\$([0-9]+)/g, e)
            } else angular.forEach(b, function(a, b) {
                c = c.split(":" + b).join(a)
            });
        return c
    }
}), angular.module("ui.highlight", []).filter("highlight", function() {
    "use strict";
    return function(a, b, c) {
        return a && (b || angular.isNumber(b)) ? (a = a.toString(), b = b.toString(), c ? a.split(b).join('<span class="ui-match">' + b + "</span>") : a.replace(new RegExp(b, "gi"), '<span class="ui-match">$&</span>')) : a
    }
}), angular.module("ui.include", []).directive("uiInclude", ["$http", "$templateCache", "$anchorScroll", "$compile",
    function(a, b, c, d) {
        "use strict";
        return {
            restrict: "ECA",
            terminal: !0,
            compile: function(e, f) {
                var g = f.uiInclude || f.src,
                    h = f.fragment || "",
                    i = f.onload || "",
                    j = f.autoscroll;
                return function(e, f) {
                    function k() {
                        var k = ++m,
                            o = e.$eval(g),
                            p = e.$eval(h);
                        o ? a.get(o, {
                            cache: b
                        }).success(function(a) {
                            if (k === m) {
                                l && l.$destroy(), l = e.$new();
                                var b;
                                b = p ? angular.element("<div/>").html(a).find(p) : angular.element("<div/>").html(a).contents(), f.html(b), d(b)(l), !angular.isDefined(j) || j && !e.$eval(j) || c(), l.$emit("$includeContentLoaded"), e.$eval(i)
                            }
                        }).error(function() {
                            k === m && n()
                        }) : n()
                    }
                    var l, m = 0,
                        n = function() {
                            l && (l.$destroy(), l = null), f.html("")
                        };
                    e.$watch(h, k), e.$watch(g, k)
                }
            }
        }
    }
]), angular.module("ui.indeterminate", []).directive("uiIndeterminate", [
    function() {
        "use strict";
        return {
            compile: function(a, b) {
                return b.type && "checkbox" === b.type.toLowerCase() ? function(a, b, c) {
                    a.$watch(c.uiIndeterminate, function(a) {
                        b[0].indeterminate = !! a
                    })
                } : angular.noop
            }
        }
    }
]), angular.module("ui.inflector", []).filter("inflector", function() {
    "use strict";

    function a(a) {
        return a = a.replace(/([A-Z])|([\-|\_])/g, function(a, b) {
            return " " + (b || "")
        }), a.replace(/\s\s+/g, " ").trim().toLowerCase().split(" ")
    }

    function b(a) {
        var b = [];
        return angular.forEach(a, function(a) {
            b.push(a.charAt(0).toUpperCase() + a.substr(1))
        }), b
    }
    var c = {
        humanize: function(c) {
            return b(a(c)).join(" ")
        },
        underscore: function(b) {
            return a(b).join("_")
        },
        variable: function(c) {
            return c = a(c), c = c[0] + b(c.slice(1)).join("")
        }
    };
    return function(a, b) {
        return b !== !1 && angular.isString(a) ? (b = b || "humanize", c[b](a)) : a
    }
}), angular.module("ui.jq", []).value("uiJqConfig", {}).directive("uiJq", ["uiJqConfig", "$timeout",
    function(a, b) {
        "use strict";
        return {
            restrict: "A",
            compile: function(c, d) {
                if (!angular.isFunction(c[d.uiJq])) throw new Error('ui-jq: The "' + d.uiJq + '" function does not exist');
                var e = a && a[d.uiJq];
                return function(a, c, d) {
                    function f() {
                        b(function() {
                            c[d.uiJq].apply(c, g)
                        }, 0, !1)
                    }
                    var g = [];
                    d.uiOptions ? (g = a.$eval("[" + d.uiOptions + "]"), angular.isObject(e) && angular.isObject(g[0]) && (g[0] = angular.extend({}, e, g[0]))) : e && (g = [e]), d.ngModel && c.is("select,input,textarea") && c.bind("change", function() {
                        c.trigger("input")
                    }), d.uiRefresh && a.$watch(d.uiRefresh, function() {
                        f()
                    }), f()
                }
            }
        }
    }
]), angular.module("ui.keypress", []).factory("keypressHelper", ["$parse",
    function(a) {
        "use strict";
        var b = {
            8: "backspace",
            9: "tab",
            13: "enter",
            27: "esc",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down",
            45: "insert",
            46: "delete"
        }, c = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        };
        return function(d, e, f, g) {
            var h, i = [];
            h = e.$eval(g["ui" + c(d)]), angular.forEach(h, function(b, c) {
                var d, e;
                e = a(b), angular.forEach(c.split(" "), function(a) {
                    d = {
                        expression: e,
                        keys: {}
                    }, angular.forEach(a.split("-"), function(a) {
                        d.keys[a] = !0
                    }), i.push(d)
                })
            }), f.bind(d, function(a) {
                var c = !(!a.metaKey || a.ctrlKey),
                    f = !! a.altKey,
                    g = !! a.ctrlKey,
                    h = !! a.shiftKey,
                    j = a.keyCode;
                "keypress" === d && !h && j >= 97 && 122 >= j && (j -= 32), angular.forEach(i, function(d) {
                    var i = d.keys[b[j]] || d.keys[j.toString()],
                        k = !! d.keys.meta,
                        l = !! d.keys.alt,
                        m = !! d.keys.ctrl,
                        n = !! d.keys.shift;
                    i && k === c && l === f && m === g && n === h && e.$apply(function() {
                        d.expression(e, {
                            $event: a
                        })
                    })
                })
            })
        }
    }
]), angular.module("ui.keypress").directive("uiKeydown", ["keypressHelper",
    function(a) {
        "use strict";
        return {
            link: function(b, c, d) {
                a("keydown", b, c, d)
            }
        }
    }
]), angular.module("ui.keypress").directive("uiKeypress", ["keypressHelper",
    function(a) {
        "use strict";
        return {
            link: function(b, c, d) {
                a("keypress", b, c, d)
            }
        }
    }
]), angular.module("ui.keypress").directive("uiKeyup", ["keypressHelper",
    function(a) {
        "use strict";
        return {
            link: function(b, c, d) {
                a("keyup", b, c, d)
            }
        }
    }
]), angular.module("ui.mask", []).value("uiMaskConfig", {
    maskDefinitions: {
        9: /\d/,
        A: /[a-zA-Z]/,
        "*": /[a-zA-Z0-9]/
    },
    clearOnBlur: !0
}).directive("uiMask", ["uiMaskConfig", "$parse",
    function(a, b) {
        "use strict";
        return {
            priority: 100,
            require: "ngModel",
            restrict: "A",
            compile: function() {
                var c = a;
                return function(a, d, e, f) {
                    function g(a) {
                        return angular.isDefined(a) ? (t(a), O ? (l(), m(), !0) : k()) : k()
                    }

                    function h(a) {
                        angular.isDefined(a) && (E = a, O && x())
                    }

                    function i(a) {
                        return O ? (H = p(a || ""), J = o(H), f.$setValidity("mask", J), J && H.length ? q(H) : void 0) : a
                    }

                    function j(a) {
                        return O ? (H = p(a || ""), J = o(H), f.$viewValue = H.length ? q(H) : "", f.$setValidity("mask", J), "" === H && e.required && f.$setValidity("required", !f.$error.required), J ? H : void 0) : a
                    }

                    function k() {
                        return O = !1, n(), angular.isDefined(Q) ? d.attr("placeholder", Q) : d.removeAttr("placeholder"), angular.isDefined(R) ? d.attr("maxlength", R) : d.removeAttr("maxlength"), d.val(f.$modelValue), f.$viewValue = f.$modelValue, !1
                    }

                    function l() {
                        H = L = p(f.$modelValue || ""), I = K = q(H), J = o(H);
                        var a = J && H.length ? I : "";
                        e.maxlength && d.attr("maxlength", 2 * C[C.length - 1]), d.attr("placeholder", E), d.val(a), f.$viewValue = a
                    }

                    function m() {
                        P || (d.bind("blur", u), d.bind("mousedown mouseup", v), d.bind("input keyup click focus", x), P = !0)
                    }

                    function n() {
                        P && (d.unbind("blur", u), d.unbind("mousedown", v), d.unbind("mouseup", v), d.unbind("input", x), d.unbind("keyup", x), d.unbind("click", x), d.unbind("focus", x), P = !1)
                    }

                    function o(a) {
                        return a.length ? a.length >= G : !0
                    }

                    function p(a) {
                        var b = "",
                            c = D.slice();
                        return a = a.toString(), angular.forEach(F, function(b) {
                            a = a.replace(b, "")
                        }), angular.forEach(a.split(""), function(a) {
                            c.length && c[0].test(a) && (b += a, c.shift())
                        }), b
                    }

                    function q(a) {
                        var b = "",
                            c = C.slice();
                        return angular.forEach(E.split(""), function(d, e) {
                            a.length && e === c[0] ? (b += a.charAt(0) || "_", a = a.substr(1), c.shift()) : b += d
                        }), b
                    }

                    function r(a) {
                        var b = e.placeholder;
                        return "undefined" != typeof b && b[a] ? b[a] : "_"
                    }

                    function s() {
                        return E.replace(/[_]+/g, "_").replace(/([^_]+)([a-zA-Z0-9])([^_])/g, "$1$2_$3").split("_")
                    }

                    function t(a) {
                        var b = 0;
                        if (C = [], D = [], E = "", "string" == typeof a) {
                            G = 0;
                            var c = !1,
                                d = a.split("");
                            angular.forEach(d, function(a, d) {
                                S.maskDefinitions[a] ? (C.push(b), E += r(d), D.push(S.maskDefinitions[a]), b++, c || G++) : "?" === a ? c = !0 : (E += a, b++)
                            })
                        }
                        C.push(C.slice().pop() + 1), F = s(), O = C.length > 1 ? !0 : !1
                    }

                    function u() {
                        S.clearOnBlur && (M = 0, N = 0), J && 0 !== H.length || (S.clearOnBlur && (I = "", d.val("")), a.$apply(function() {
                            f.$setViewValue("")
                        }))
                    }

                    function v(a) {
                        "mousedown" === a.type ? d.bind("mouseout", w) : d.unbind("mouseout", w)
                    }

                    function w() {
                        N = B(this), d.unbind("mouseout", w)
                    }

                    function x(b) {
                        b = b || {};
                        var c = b.which,
                            e = b.type;
                        if (16 !== c && 91 !== c) {
                            var g, h = d.val(),
                                i = K,
                                j = p(h),
                                k = L,
                                l = !1,
                                m = z(this) || 0,
                                n = M || 0,
                                o = m - n,
                                r = C[0],
                                s = C[j.length] || C.slice().shift(),
                                t = N || 0,
                                u = B(this) > 0,
                                v = t > 0,
                                w = h.length > i.length || t && h.length > i.length - t,
                                x = h.length < i.length || t && h.length === i.length - t,
                                D = c >= 37 && 40 >= c && b.shiftKey,
                                E = 37 === c,
                                F = 8 === c || "keyup" !== e && x && -1 === o,
                                G = 46 === c || "keyup" !== e && x && 0 === o && !v,
                                H = (E || F || "click" === e) && m > r;
                            if (N = B(this), !D && (!u || "click" !== e && "keyup" !== e)) {
                                if ("input" === e && x && !v && j === k) {
                                    for (; F && m > r && !y(m);) m--;
                                    for (; G && s > m && -1 === C.indexOf(m);) m++;
                                    var I = C.indexOf(m);
                                    j = j.substring(0, I) + j.substring(I + 1), l = !0
                                }
                                for (g = q(j), K = g, L = j, d.val(g), l && a.$apply(function() {
                                    f.$setViewValue(j)
                                }), w && r >= m && (m = r + 1), H && m--, m = m > s ? s : r > m ? r : m; !y(m) && m > r && s > m;) m += H ? -1 : 1;
                                (H && s > m || w && !y(n)) && m++, M = m, A(this, m)
                            }
                        }
                    }

                    function y(a) {
                        return C.indexOf(a) > -1
                    }

                    function z(a) {
                        if (!a) return 0;
                        if (void 0 !== a.selectionStart) return a.selectionStart;
                        if (document.selection) {
                            a.focus();
                            var b = document.selection.createRange();
                            return b.moveStart("character", a.value ? -a.value.length : 0), b.text.length
                        }
                        return 0
                    }

                    function A(a, b) {
                        if (!a) return 0;
                        if (0 !== a.offsetWidth && 0 !== a.offsetHeight)
                            if (a.setSelectionRange) a.focus(), a.setSelectionRange(b, b);
                            else if (a.createTextRange) {
                                var c = a.createTextRange();
                                c.collapse(!0), c.moveEnd("character", b), c.moveStart("character", b), c.select()
                            }
                    }

                    function B(a) {
                        return a ? void 0 !== a.selectionStart ? a.selectionEnd - a.selectionStart : document.selection ? document.selection.createRange().text.length : 0 : 0
                    }
                    var C, D, E, F, G, H, I, J, K, L, M, N, O = !1,
                        P = !1,
                        Q = e.placeholder,
                        R = e.maxlength,
                        S = {};
                    e.uiOptions ? (S = a.$eval("[" + e.uiOptions + "]"), angular.isObject(S[0]) && (S = function(a, b) {
                        for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (void 0 === b[c] ? b[c] = angular.copy(a[c]) : angular.extend(b[c], a[c]));
                        return b
                    }(c, S[0]))) : S = c, e.$observe("uiMask", g), e.$observe("placeholder", h);
                    var T = !1;
                    e.$observe("modelViewValue", function(a) {
                        "true" === a && (T = !0)
                    }), a.$watch(e.ngModel, function(c) {
                        if (T && c) {
                            var d = b(e.ngModel);
                            d.assign(a, f.$viewValue)
                        }
                    }), f.$formatters.push(i), f.$parsers.push(j), d.bind("mousedown mouseup", v), Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
                        if (null === this) throw new TypeError;
                        var b = Object(this),
                            c = b.length >>> 0;
                        if (0 === c) return -1;
                        var d = 0;
                        if (arguments.length > 1 && (d = Number(arguments[1]), d !== d ? d = 0 : 0 !== d && d !== 1 / 0 && d !== -(1 / 0) && (d = (d > 0 || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
                        for (var e = d >= 0 ? d : Math.max(c - Math.abs(d), 0); c > e; e++)
                            if (e in b && b[e] === a) return e;
                        return -1
                    })
                }
            }
        }
    }
]), angular.module("ui.reset", []).value("uiResetConfig", null).directive("uiReset", ["uiResetConfig",
    function(a) {
        "use strict";
        var b = null;
        return void 0 !== a && (b = a), {
            require: "ngModel",
            link: function(a, c, d, e) {
                var f;
                f = angular.element('<a class="ui-reset" />'), c.wrap('<span class="ui-resetwrap" />').after(f), f.bind("click", function(c) {
                    c.preventDefault(), a.$apply(function() {
                        d.uiReset ? e.$setViewValue(a.$eval(d.uiReset)) : e.$setViewValue(b), e.$render()
                    })
                })
            }
        }
    }
]), angular.module("ui.route", []).directive("uiRoute", ["$location", "$parse",
    function(a, b) {
        "use strict";
        return {
            restrict: "AC",
            scope: !0,
            compile: function(c, d) {
                var e;
                if (d.uiRoute) e = "uiRoute";
                else if (d.ngHref) e = "ngHref";
                else {
                    if (!d.href) throw new Error("uiRoute missing a route or href property on " + c[0]);
                    e = "href"
                }
                return function(c, d, f) {
                    function g(b) {
                        var d = b.indexOf("#");
                        d > -1 && (b = b.substr(d + 1)), (j = function() {
                            i(c, a.path().indexOf(b) > -1)
                        })()
                    }

                    function h(b) {
                        var d = b.indexOf("#");
                        d > -1 && (b = b.substr(d + 1)), (j = function() {
                            var d = new RegExp("^" + b + "$", ["i"]);
                            i(c, d.test(a.path()))
                        })()
                    }
                    var i = b(f.ngModel || f.routeModel || "$uiRoute").assign,
                        j = angular.noop;
                    switch (e) {
                        case "uiRoute":
                            f.uiRoute ? h(f.uiRoute) : f.$observe("uiRoute", h);
                            break;
                        case "ngHref":
                            f.ngHref ? g(f.ngHref) : f.$observe("ngHref", g);
                            break;
                        case "href":
                            g(f.href)
                    }
                    c.$on("$routeChangeSuccess", function() {
                        j()
                    }), c.$on("$stateChangeSuccess", function() {
                        j()
                    })
                }
            }
        }
    }
]), angular.module("ui.scroll.jqlite", ["ui.scroll"]).service("jqLiteExtras", ["$log", "$window",
    function(a, b) {
        "use strict";
        return {
            registerFor: function(a) {
                var c, d, e, f, g, h, i;
                return d = angular.element.prototype.css, a.prototype.css = function(a, b) {
                    var c, e;
                    return e = this, c = e[0], c && 3 !== c.nodeType && 8 !== c.nodeType && c.style ? d.call(e, a, b) : void 0
                }, h = function(a) {
                    return a && a.document && a.location && a.alert && a.setInterval
                }, i = function(a, b, c) {
                    var d, e, f, g, i;
                    return d = a[0], i = {
                        top: ["scrollTop", "pageYOffset", "scrollLeft"],
                        left: ["scrollLeft", "pageXOffset", "scrollTop"]
                    }[b], e = i[0], g = i[1], f = i[2], h(d) ? angular.isDefined(c) ? d.scrollTo(a[f].call(a), c) : g in d ? d[g] : d.document.documentElement[e] : angular.isDefined(c) ? d[e] = c : d[e]
                }, b.getComputedStyle ? (f = function(a) {
                    return b.getComputedStyle(a, null)
                }, c = function(a, b) {
                    return parseFloat(b)
                }) : (f = function(a) {
                    return a.currentStyle
                }, c = function(a, b) {
                    var c, d, e, f, g, h, i;
                    return c = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, f = new RegExp("^(" + c + ")(?!px)[a-z%]+$", "i"), f.test(b) ? (i = a.style, d = i.left, g = a.runtimeStyle, h = g && g.left, g && (g.left = i.left), i.left = b, e = i.pixelLeft, i.left = d, h && (g.left = h), e) : parseFloat(b)
                }), e = function(a, b) {
                    var d, e, g, i, j, k, l, m, n, o, p, q, r;
                    return h(a) ? (d = document.documentElement[{
                        height: "clientHeight",
                        width: "clientWidth"
                    }[b]], {
                        base: d,
                        padding: 0,
                        border: 0,
                        margin: 0
                    }) : (r = {
                        width: [a.offsetWidth, "Left", "Right"],
                        height: [a.offsetHeight, "Top", "Bottom"]
                    }[b], d = r[0], l = r[1], m = r[2], k = f(a), p = c(a, k["padding" + l]) || 0, q = c(a, k["padding" + m]) || 0, e = c(a, k["border" + l + "Width"]) || 0, g = c(a, k["border" + m + "Width"]) || 0, i = k["margin" + l], j = k["margin" + m], n = c(a, i) || 0, o = c(a, j) || 0, {
                        base: d,
                        padding: p + q,
                        border: e + g,
                        margin: n + o
                    })
                }, g = function(a, b, c) {
                    var d, g, h;
                    return g = e(a, b), g.base > 0 ? {
                        base: g.base - g.padding - g.border,
                        outer: g.base,
                        outerfull: g.base + g.margin
                    }[c] : (d = f(a), h = d[b], (0 > h || null === h) && (h = a.style[b] || 0), h = parseFloat(h) || 0, {
                        base: h - g.padding - g.border,
                        outer: h,
                        outerfull: h + g.padding + g.border + g.margin
                    }[c])
                }, angular.forEach({
                    before: function(a) {
                        var b, c, d, e, f, g, h;
                        if (f = this, c = f[0], e = f.parent(), b = e.contents(), b[0] === c) return e.prepend(a);
                        for (d = g = 1, h = b.length - 1; h >= 1 ? h >= g : g >= h; d = h >= 1 ? ++g : --g)
                            if (b[d] === c) return void angular.element(b[d - 1]).after(a);
                        throw new Error("invalid DOM structure " + c.outerHTML)
                    },
                    height: function(a) {
                        var b;
                        return b = this, angular.isDefined(a) ? (angular.isNumber(a) && (a += "px"), d.call(b, "height", a)) : g(this[0], "height", "base")
                    },
                    outerHeight: function(a) {
                        return g(this[0], "height", a ? "outerfull" : "outer")
                    },
                    offset: function(a) {
                        var b, c, d, e, f, g;
                        if (f = this, arguments.length) {
                            if (void 0 === a) return f;
                            throw new Error("offset setter method is not implemented")
                        }
                        return b = {
                            top: 0,
                            left: 0
                        }, e = f[0], (c = e && e.ownerDocument) ? (d = c.documentElement,
                        null != e.getBoundingClientRect && (b = e.getBoundingClientRect()), g = c.defaultView || c.parentWindow, {
                            top: b.top + (g.pageYOffset || d.scrollTop) - (d.clientTop || 0),
                            left: b.left + (g.pageXOffset || d.scrollLeft) - (d.clientLeft || 0)
                        }) : void 0
                    },
                    scrollTop: function(a) {
                        return i(this, "top", a)
                    },
                    scrollLeft: function(a) {
                        return i(this, "left", a)
                    }
                }, function(b, c) {
                    return a.prototype[c] ? void 0 : a.prototype[c] = b
                })
            }
        }
    }
]).run(["$log", "$window", "jqLiteExtras",
    function(a, b, c) {
        "use strict";
        return b.jQuery ? void 0 : c.registerFor(angular.element)
    }
]), angular.module("ui.scroll", []).directive("uiScrollViewport", ["$log",
    function() {
        "use strict";
        return {
            controller: ["$scope", "$element",
                function(a, b) {
                    return this.viewport = b, this
                }
            ]
        }
    }
]).directive("uiScroll", ["$log", "$injector", "$rootScope", "$timeout",
    function(a, b, c, d) {
        "use strict";
        return {
            require: ["?^uiScrollViewport"],
            transclude: "element",
            priority: 1e3,
            terminal: !0,
            compile: function(e, f, g) {
                return function(e, f, h, i) {
                    var j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca;
                    if (J = a.debug || a.log, K = h.uiScroll.match(/^\s*(\w+)\s+in\s+([\w\.]+)\s*$/), !K) throw new Error("Expected uiScroll in form of '_item_ in _datasource_' but got '" + h.uiScroll + "'");
                    if (H = K[1], u = K[2], F = function(a) {
                            return angular.isObject(a) && a.get && angular.isFunction(a.get)
                        }, C = function(a, b) {
                            var c;
                            return a ? (c = b.match(/^([\w]+)\.(.+)$/), c && 3 === c.length ? C(a[c[1]], c[2]) : a[b]) : null
                        }, t = C(e, u), !F(t) && (t = b.get(u), !F(t))) throw new Error("" + u + " is not a valid datasource");
                    return q = Math.max(3, +h.bufferSize || 10), p = function() {
                        return aa.outerHeight() * Math.max(.1, +h.padding || .1)
                    }, S = function(a) {
                        var b;
                        return null != (b = a[0].scrollHeight) ? b : a[0].document.documentElement.scrollHeight
                    }, j = null, g(W = e.$new(), function(a) {
                        var b, c, d, e, g, h;
                        if (e = a[0].localName, "dl" === e) throw new Error("ui-scroll directive does not support <" + a[0].localName + "> as a repeating tag: " + a[0].outerHTML);
                        return "li" !== e && "tr" !== e && (e = "div"), h = i[0] && i[0].viewport ? i[0].viewport : angular.element(window), h.css({
                            "overflow-y": "auto",
                            display: "block"
                        }), d = function(a) {
                            var b, c, d;
                            switch (a) {
                                case "tr":
                                    return d = angular.element("<table><tr><td><div></div></td></tr></table>"), b = d.find("div"), c = d.find("tr"), c.paddingHeight = function() {
                                        return b.height.apply(b, arguments)
                                    }, c;
                                default:
                                    return c = angular.element("<" + a + "></" + a + ">"), c.paddingHeight = c.height, c
                            }
                        }, c = function(a, b, c) {
                            return b[{
                                top: "before",
                                bottom: "after"
                            }[c]](a), {
                                paddingHeight: function() {
                                    return a.paddingHeight.apply(a, arguments)
                                },
                                insert: function(b) {
                                    return a[{
                                        top: "after",
                                        bottom: "before"
                                    }[c]](b)
                                }
                            }
                        }, g = c(d(e), f, "top"), b = c(d(e), f, "bottom"), W.$destroy(), j = {
                            viewport: h,
                            topPadding: g.paddingHeight,
                            bottomPadding: b.paddingHeight,
                            append: b.insert,
                            prepend: g.insert,
                            bottomDataPos: function() {
                                return S(h) - b.paddingHeight()
                            },
                            topDataPos: function() {
                                return g.paddingHeight()
                            }
                        }
                    }), aa = j.viewport, ba = aa.scope() || c, angular.isDefined(h.topVisible) && (Z = function(a) {
                        return ba[h.topVisible] = a
                    }), angular.isDefined(h.topVisibleElement) && (Y = function(a) {
                        return ba[h.topVisibleElement] = a
                    }), angular.isDefined(h.topVisibleScope) && (_ = function(a) {
                        return ba[h.topVisibleScope] = a
                    }), X = function(a) {
                        return Z && Z(a.scope[H]), Y && Y(a.element), _ && _(a.scope), t.topVisible ? t.topVisible(a) : void 0
                    }, I = angular.isDefined(h.isLoading) ? function(a) {
                        return ba[h.isLoading] = a, t.loading ? t.loading(a) : void 0
                    } : function(a) {
                        return t.loading ? t.loading(a) : void 0
                    }, Q = 0, B = 1, L = 1, o = [], M = [], x = !1, m = !1, G = !1, O = function(a, b) {
                        var c, d;
                        for (c = d = a; b >= a ? b > d : d > b; c = b >= a ? ++d : --d) o[c].scope.$destroy(), o[c].element.remove();
                        return o.splice(a, b - a)
                    }, N = function() {
                        return Q++, B = 1, L = 1, O(0, o.length), j.topPadding(0), j.bottomPadding(0), M = [], x = !1, m = !1, k(Q, !1)
                    }, n = function() {
                        return aa.scrollTop() + aa.outerHeight()
                    }, $ = function() {
                        return aa.scrollTop()
                    }, T = function() {
                        return !x && j.bottomDataPos() < n() + p()
                    }, r = function() {
                        var a, b, c, d, e, f, g, h, i, k;
                        for (a = 0, g = 0, b = i = k = o.length - 1; 0 >= k ? 0 >= i : i >= 0; b = 0 >= k ? ++i : --i)
                            if (c = o[b], e = c.element.offset().top, f = h !== e, h = e, f && (d = c.element.outerHeight(!0)), j.bottomDataPos() - a - d > n() + p()) f && (a += d), g++, x = !1;
                            else {
                                if (f) break;
                                g++
                            }
                        return g > 0 ? (j.bottomPadding(j.bottomPadding() + a), O(o.length - g, o.length), L -= g, J("clipped off bottom " + g + " bottom padding " + j.bottomPadding())) : void 0
                    }, U = function() {
                        return !m && j.topDataPos() > $() - p()
                    }, s = function() {
                        var a, b, c, d, e, f, g, h, i;
                        for (g = 0, e = 0, h = 0, i = o.length; i > h; h++)
                            if (a = o[h], c = a.element.offset().top, d = f !== c, f = c, d && (b = a.element.outerHeight(!0)), j.topDataPos() + g + b < $() - p()) d && (g += b), e++, m = !1;
                            else {
                                if (d) break;
                                e++
                            }
                        return e > 0 ? (j.topPadding(j.topPadding() + g), O(0, e), B += e, J("clipped off top " + e + " top padding " + j.topPadding())) : void 0
                    }, w = function(a, b, c) {
                        return G || (G = !0, I(!0)), 1 === M.push(b) ? z(a, c) : void 0
                    }, D = function(a) {
                        return a.displayTemp = a.css("display"), a.css("display", "none")
                    }, V = function(a) {
                        return a.hasOwnProperty("displayTemp") ? a.css("display", a.displayTemp) : void 0
                    }, E = function(a, b) {
                        var c, d, f;
                        return c = e.$new(), c[H] = b, d = a > B, c.$index = a, d && c.$index--, f = {
                            scope: c
                        }, g(c, function(b) {
                            return f.element = b, d ? a === L ? (D(b), j.append(b), o.push(f)) : (o[a - B].element.after(b), o.splice(a - B + 1, 0, f)) : (D(b), j.prepend(b), o.unshift(f))
                        }), {
                            appended: d,
                            wrapper: f
                        }
                    }, l = function(a, b) {
                        var c;
                        return a ? j.bottomPadding(Math.max(0, j.bottomPadding() - b.element.outerHeight(!0))) : (c = j.topPadding() - b.element.outerHeight(!0), c >= 0 ? j.topPadding(c) : aa.scrollTop(aa.scrollTop() + b.element.outerHeight(!0)))
                    }, v = function(a, b, c) {
                        var d, e, f, g, h, i, k, l, m;
                        if (J("top {actual=" + j.topDataPos() + " visible from=" + $() + " bottom {visible through=" + n() + " actual=" + j.bottomDataPos() + "}"), T() ? w(a, !0, b) : U() && w(a, !1, b), c && c(a), 0 === M.length) {
                            for (i = 0, m = [], k = 0, l = o.length; l > k; k++) {
                                if (d = o[k], f = d.element.offset().top, g = h !== f, h = f, g && (e = d.element.outerHeight(!0)), !(g && j.topDataPos() + i + e < $())) {
                                    g && X(d);
                                    break
                                }
                                m.push(i += e)
                            }
                            return m
                        }
                    }, k = function(a, b, c, e) {
                        return c && c.length ? d(function() {
                            var d, g, h, i, j, k, m, n;
                            for (i = [], j = 0, m = c.length; m > j; j++) g = c[j], f = g.wrapper.element, V(f), d = f.offset().top, h !== d && (i.push(g), h = d);
                            for (k = 0, n = i.length; n > k; k++) g = i[k], l(g.appended, g.wrapper);
                            return v(a, b, e)
                        }) : v(a, b, e)
                    }, A = function(a, b, c) {
                        return k(a, b, c, function() {
                            return M.shift(), 0 === M.length ? (G = !1, I(!1)) : z(a, b)
                        })
                    }, z = function(a, b) {
                        var c;
                        return c = M[0], c ? o.length && !T() ? A(a, b) : t.get(L, q, function(c) {
                            var d, e, f, g;
                            if (!a || a === Q) {
                                if (e = [], c.length < q && (x = !0, j.bottomPadding(0)), c.length > 0)
                                    for (s(), f = 0, g = c.length; g > f; f++) d = c[f], e.push(E(++L, d));
                                return A(a, b, e)
                            }
                        }) : o.length && !U() ? A(a, b) : t.get(B - q, q, function(c) {
                            var d, e, f, g;
                            if (!a || a === Q) {
                                if (e = [], c.length < q && (m = !0, j.topPadding(0)), c.length > 0)
                                    for (o.length && r(), d = f = g = c.length - 1; 0 >= g ? 0 >= f : f >= 0; d = 0 >= g ? ++f : --f) e.unshift(E(--B, c[d]));
                                return A(a, b, e)
                            }
                        })
                    }, P = function() {
                        return c.$$phase || G ? void 0 : (k(null, !1), e.$apply())
                    }, aa.bind("resize", P), R = function() {
                        return c.$$phase || G ? void 0 : (k(null, !0), e.$apply())
                    }, aa.bind("scroll", R), ca = function(a) {
                        var b, c;
                        return b = aa[0].scrollTop, c = aa[0].scrollHeight - aa[0].clientHeight, 0 === b && !m || b === c && !x ? a.preventDefault() : void 0
                    }, aa.bind("mousewheel", ca), e.$watch(t.revision, function() {
                        return N()
                    }), y = t.scope ? t.scope.$new() : e.$new(), e.$on("$destroy", function() {
                        return y.$destroy(), aa.unbind("resize", P), aa.unbind("scroll", R), aa.unbind("mousewheel", ca)
                    }), y.$on("update.items", function(a, b, c) {
                        var d, e, f, g, h;
                        if (angular.isFunction(b))
                            for (e = function(a) {
                                return b(a.scope)
                            }, f = 0, g = o.length; g > f; f++) d = o[f], e(d);
                        else 0 <= (h = b - B - 1) && h < o.length && (o[b - B - 1].scope[H] = c);
                        return null
                    }), y.$on("delete.items", function(a, b) {
                        var c, d, e, f, g, h, i, j, l, m, n, p;
                        if (angular.isFunction(b)) {
                            for (e = [], h = 0, l = o.length; l > h; h++) d = o[h], e.unshift(d);
                            for (g = function(a) {
                                return b(a.scope) ? (O(e.length - 1 - c, e.length - c), L--) : void 0
                            }, c = i = 0, m = e.length; m > i; c = ++i) f = e[c], g(f)
                        } else 0 <= (p = b - B - 1) && p < o.length && (O(b - B - 1, b - B), L--);
                        for (c = j = 0, n = o.length; n > j; c = ++j) d = o[c], d.scope.$index = B + c;
                        return k(null, !1)
                    }), y.$on("insert.item", function(a, b, c) {
                        var d, e, f, g, h;
                        if (e = [], angular.isFunction(b)) throw new Error("not implemented - Insert with locator function");
                        for (0 <= (h = b - B - 1) && h < o.length && (e.push(E(b, c)), L++), d = f = 0, g = o.length; g > f; d = ++f) c = o[d], c.scope.$index = B + d;
                        return k(null, !1, e)
                    })
                }
            }
        }
    }
]), angular.module("ui.scrollfix", []).directive("uiScrollfix", ["$window",
    function(a) {
        "use strict";

        function b() {
            if (angular.isDefined(a.pageYOffset)) return a.pageYOffset;
            var b = document.compatMode && "BackCompat" !== document.compatMode ? document.documentElement : document.body;
            return b.scrollTop
        }
        return {
            require: "^?uiScrollfixTarget",
            link: function(c, d, e, f) {
                function g() {
                    var a = f ? i[0].scrollTop : b();
                    !d.hasClass("ui-scrollfix") && a > e.uiScrollfix ? d.addClass("ui-scrollfix") : d.hasClass("ui-scrollfix") && a < e.uiScrollfix && d.removeClass("ui-scrollfix")
                }
                var h = d[0].offsetTop,
                    i = f && f.$element || angular.element(a);
                e.uiScrollfix ? "string" == typeof e.uiScrollfix && ("-" === e.uiScrollfix.charAt(0) ? e.uiScrollfix = h - parseFloat(e.uiScrollfix.substr(1)) : "+" === e.uiScrollfix.charAt(0) && (e.uiScrollfix = h + parseFloat(e.uiScrollfix.substr(1)))) : e.uiScrollfix = h, i.on("scroll", g), c.$on("$destroy", function() {
                    i.off("scroll", g)
                })
            }
        }
    }
]).directive("uiScrollfixTarget", [
    function() {
        "use strict";
        return {
            controller: ["$element",
                function(a) {
                    this.$element = a
                }
            ]
        }
    }
]), angular.module("ui.showhide", []).directive("uiShow", [
    function() {
        "use strict";
        return function(a, b, c) {
            a.$watch(c.uiShow, function(a) {
                a ? b.addClass("ui-show") : b.removeClass("ui-show")
            })
        }
    }
]).directive("uiHide", [
    function() {
        "use strict";
        return function(a, b, c) {
            a.$watch(c.uiHide, function(a) {
                a ? b.addClass("ui-hide") : b.removeClass("ui-hide")
            })
        }
    }
]).directive("uiToggle", [
    function() {
        "use strict";
        return function(a, b, c) {
            a.$watch(c.uiToggle, function(a) {
                a ? b.removeClass("ui-hide").addClass("ui-show") : b.removeClass("ui-show").addClass("ui-hide")
            })
        }
    }
]), angular.module("ui.unique", []).filter("unique", ["$parse",
    function(a) {
        "use strict";
        return function(b, c) {
            if (c === !1) return b;
            if ((c || angular.isUndefined(c)) && angular.isArray(b)) {
                var d = [],
                    e = angular.isString(c) ? a(c) : function(a) {
                        return a
                    }, f = function(a) {
                        return angular.isObject(a) ? e(a) : a
                    };
                angular.forEach(b, function(a) {
                    for (var b = !1, c = 0; c < d.length; c++)
                        if (angular.equals(f(d[c]), f(a))) {
                            b = !0;
                            break
                        }
                    b || d.push(a)
                }), b = d
            }
            return b
        }
    }
]), angular.module("ui.uploader", []).service("uiUploader", uiUploader), uiUploader.$inject = ["$log"], angular.module("ui.validate", []).directive("uiValidate", function() {
    "use strict";
    return {
        restrict: "A",
        require: "ngModel",
        link: function(a, b, c, d) {
            function e(b) {
                return angular.isString(b) ? void a.$watch(b, function() {
                    angular.forEach(g, function(a) {
                        a(d.$modelValue)
                    })
                }) : angular.isArray(b) ? void angular.forEach(b, function(b) {
                    a.$watch(b, function() {
                        angular.forEach(g, function(a) {
                            a(d.$modelValue)
                        })
                    })
                }) : void(angular.isObject(b) && angular.forEach(b, function(b, c) {
                    angular.isString(b) && a.$watch(b, function() {
                        g[c](d.$modelValue)
                    }), angular.isArray(b) && angular.forEach(b, function(b) {
                        a.$watch(b, function() {
                            g[c](d.$modelValue)
                        })
                    })
                }))
            }
            var f, g = {}, h = a.$eval(c.uiValidate);
            h && (angular.isString(h) && (h = {
                validator: h
            }), angular.forEach(h, function(b, c) {
                f = function(e) {
                    var f = a.$eval(b, {
                        $value: e
                    });
                    return angular.isObject(f) && angular.isFunction(f.then) ? (f.then(function() {
                        d.$setValidity(c, !0)
                    }, function() {
                        d.$setValidity(c, !1)
                    }), e) : f ? (d.$setValidity(c, !0), e) : (d.$setValidity(c, !1), e)
                }, g[c] = f, d.$formatters.push(f), d.$parsers.push(f)
            }), c.uiValidateWatch && e(a.$eval(c.uiValidateWatch)))
        }
    }
}), angular.module("ui.utils", ["ui.event", "ui.format", "ui.highlight", "ui.include", "ui.indeterminate", "ui.inflector", "ui.jq", "ui.keypress", "ui.mask", "ui.reset", "ui.route", "ui.scrollfix", "ui.scroll", "ui.scroll.jqlite", "ui.showhide", "ui.unique", "ui.validate"]), angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]), angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]), angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope",
    function(a, b, c) {
        function d(a) {
            for (var b in a)
                if (void 0 !== f.style[b]) return a[b]
        }
        var e = function(d, f, g) {
                g = g || {};
                var h = a.defer(),
                    i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"],
                    j = function(a) {
                        c.$apply(function() {
                            d.unbind(i, j), h.resolve(d)
                        })
                    };
                return i && d.bind(i, j), b(function() {
                    angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
                }), h.promise.cancel = function() {
                    i && d.unbind(i, j), h.reject("Transition cancelled")
                }, h.promise
            }, f = document.createElement("trans"),
            g = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }, h = {
                WebkitTransition: "webkitAnimationEnd",
                MozTransition: "animationend",
                OTransition: "oAnimationEnd",
                transition: "animationend"
            };
        return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
    }
]), angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition",
    function(a) {
        return {
            link: function(b, c, d) {
                function e(b) {
                    function d() {
                        j === e && (j = void 0)
                    }
                    var e = a(c, b);
                    return j && j.cancel(), j = e, e.then(d, d), e
                }

                function f() {
                    k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({
                        height: c[0].scrollHeight + "px"
                    }).then(g))
                }

                function g() {
                    c.removeClass("collapsing"), c.addClass("collapse in"), c.css({
                        height: "auto"
                    })
                }

                function h() {
                    if (k) k = !1, i(), c.css({
                        height: 0
                    });
                    else {
                        c.css({
                            height: c[0].scrollHeight + "px"
                        });
                        c[0].offsetWidth;
                        c.removeClass("collapse in").addClass("collapsing"), e({
                            height: 0
                        }).then(i)
                    }
                }

                function i() {
                    c.removeClass("collapsing"), c.addClass("collapse")
                }
                var j, k = !0;
                b.$watch(d.collapse, function(a) {
                    a ? h() : f()
                })
            }
        }
    }
]), angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {
    closeOthers: !0
}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig",
    function(a, b, c) {
        this.groups = [], this.closeOthers = function(d) {
            var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
            e && angular.forEach(this.groups, function(a) {
                a !== d && (a.isOpen = !1)
            })
        }, this.addGroup = function(a) {
            var b = this;
            this.groups.push(a), a.$on("$destroy", function(c) {
                b.removeGroup(a)
            })
        }, this.removeGroup = function(a) {
            var b = this.groups.indexOf(a); - 1 !== b && this.groups.splice(b, 1)
        }
    }
]).directive("accordion", function() {
    return {
        restrict: "EA",
        controller: "AccordionController",
        transclude: !0,
        replace: !1,
        templateUrl: "template/accordion/accordion.html"
    }
}).directive("accordionGroup", function() {
    return {
        require: "^accordion",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/accordion/accordion-group.html",
        scope: {
            heading: "@",
            isOpen: "=?",
            isDisabled: "=?"
        },
        controller: function() {
            this.setHeading = function(a) {
                this.heading = a
            }
        },
        link: function(a, b, c, d) {
            d.addGroup(a), a.$watch("isOpen", function(b) {
                b && d.closeOthers(a)
            }), a.toggleOpen = function() {
                a.isDisabled || (a.isOpen = !a.isOpen)
            }
        }
    }
}).directive("accordionHeading", function() {
    return {
        restrict: "EA",
        transclude: !0,
        template: "",
        replace: !0,
        require: "^accordionGroup",
        link: function(a, b, c, d, e) {
            d.setHeading(e(a, function() {}))
        }
    }
}).directive("accordionTransclude", function() {
    return {
        require: "^accordionGroup",
        link: function(a, b, c, d) {
            a.$watch(function() {
                return d[c.accordionTransclude]
            }, function(a) {
                a && (b.html(""), b.append(a))
            })
        }
    }
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs",
    function(a, b) {
        a.closeable = "close" in b, this.close = a.close
    }
]).directive("alert", function() {
    return {
        restrict: "EA",
        controller: "AlertController",
        templateUrl: "template/alert/alert.html",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@",
            close: "&"
        }
    }
}).directive("dismissOnTimeout", ["$timeout",
    function(a) {
        return {
            require: "alert",
            link: function(b, c, d, e) {
                a(function() {
                    e.close()
                }, parseInt(d.dismissOnTimeout, 10))
            }
        }
    }
]), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function() {
    return function(a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function(a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {
    activeClass: "active",
    toggleEvent: "click"
}).controller("ButtonsController", ["buttonConfig",
    function(a) {
        this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
    }
]).directive("btnRadio", function() {
    return {
        require: ["btnRadio", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f.$render = function() {
                b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
            }, b.bind(e.toggleEvent, function() {
                var d = b.hasClass(e.activeClass);
                (!d || angular.isDefined(c.uncheckable)) && a.$apply(function() {
                    f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
                })
            })
        }
    }
}).directive("btnCheckbox", function() {
    return {
        require: ["btnCheckbox", "ngModel"],
        controller: "ButtonsController",
        link: function(a, b, c, d) {
            function e() {
                return g(c.btnCheckboxTrue, !0)
            }

            function f() {
                return g(c.btnCheckboxFalse, !1)
            }

            function g(b, c) {
                var d = a.$eval(b);
                return angular.isDefined(d) ? d : c
            }
            var h = d[0],
                i = d[1];
            i.$render = function() {
                b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
            }, b.bind(h.toggleEvent, function() {
                a.$apply(function() {
                    i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
                })
            })
        }
    }
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$interval", "$transition",
    function(a, b, c, d) {
        function e() {
            f();
            var b = +a.interval;
            !isNaN(b) && b > 0 && (h = c(g, b))
        }

        function f() {
            h && (c.cancel(h), h = null)
        }

        function g() {
            var b = +a.interval;
            i && !isNaN(b) && b > 0 ? a.next() : a.pause()
        }
        var h, i, j = this,
            k = j.slides = a.slides = [],
            l = -1;
        j.currentSlide = null;
        var m = !1;
        j.select = a.select = function(c, f) {
            function g() {
                if (!m) {
                    if (j.currentSlide && angular.isString(f) && !a.noTransition && c.$element) {
                        c.$element.addClass(f);
                        c.$element[0].offsetWidth;
                        angular.forEach(k, function(a) {
                            angular.extend(a, {
                                direction: "",
                                entering: !1,
                                leaving: !1,
                                active: !1
                            })
                        }), angular.extend(c, {
                            direction: f,
                            active: !0,
                            entering: !0
                        }), angular.extend(j.currentSlide || {}, {
                            direction: f,
                            leaving: !0
                        }), a.$currentTransition = d(c.$element, {}),
                            function(b, c) {
                                a.$currentTransition.then(function() {
                                    h(b, c)
                                }, function() {
                                    h(b, c)
                                })
                            }(c, j.currentSlide)
                    } else h(c, j.currentSlide);
                    j.currentSlide = c, l = i, e()
                }
            }

            function h(b, c) {
                angular.extend(b, {
                    direction: "",
                    active: !0,
                    leaving: !1,
                    entering: !1
                }), angular.extend(c || {}, {
                    direction: "",
                    active: !1,
                    leaving: !1,
                    entering: !1
                }), a.$currentTransition = null
            }
            var i = k.indexOf(c);
            void 0 === f && (f = i > l ? "next" : "prev"), c && c !== j.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
        }, a.$on("$destroy", function() {
            m = !0
        }), j.indexOfSlide = function(a) {
            return k.indexOf(a)
        }, a.next = function() {
            var b = (l + 1) % k.length;
            return a.$currentTransition ? void 0 : j.select(k[b], "next")
        }, a.prev = function() {
            var b = 0 > l - 1 ? k.length - 1 : l - 1;
            return a.$currentTransition ? void 0 : j.select(k[b], "prev")
        }, a.isActive = function(a) {
            return j.currentSlide === a
        }, a.$watch("interval", e), a.$on("$destroy", f), a.play = function() {
            i || (i = !0, e())
        }, a.pause = function() {
            a.noPause || (i = !1, f())
        }, j.addSlide = function(b, c) {
            b.$element = c, k.push(b), 1 === k.length || b.active ? (j.select(k[k.length - 1]), 1 == k.length && a.play()) : b.active = !1
        }, j.removeSlide = function(a) {
            var b = k.indexOf(a);
            k.splice(b, 1), k.length > 0 && a.active ? b >= k.length ? j.select(k[b - 1]) : j.select(k[b]) : l > b && l--
        }
    }
]).directive("carousel", [
    function() {
        return {
            restrict: "EA",
            transclude: !0,
            replace: !0,
            controller: "CarouselController",
            require: "carousel",
            templateUrl: "template/carousel/carousel.html",
            scope: {
                interval: "=",
                noTransition: "=",
                noPause: "="
            }
        }
    }
]).directive("slide", function() {
    return {
        require: "^carousel",
        restrict: "EA",
        transclude: !0,
        replace: !0,
        templateUrl: "template/carousel/slide.html",
        scope: {
            active: "=?"
        },
        link: function(a, b, c, d) {
            d.addSlide(a, b), a.$on("$destroy", function() {
                d.removeSlide(a)
            }), a.$watch("active", function(b) {
                b && d.select(a)
            })
        }
    }
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter",
    function(a, b) {
        function c(a) {
            var c = [],
                d = a.split("");
            return angular.forEach(e, function(b, e) {
                var f = a.indexOf(e);
                if (f > -1) {
                    a = a.split(""), d[f] = "(" + b.regex + ")", a[f] = "$";
                    for (var g = f + 1, h = f + e.length; h > g; g++) d[g] = "", a[g] = "$";
                    a = a.join(""), c.push({
                        index: f,
                        apply: b.apply
                    })
                }
            }), {
                regex: new RegExp("^" + d.join("") + "$"),
                map: b(c, "index")
            }
        }

        function d(a, b, c) {
            return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
        }
        this.parsers = {};
        var e = {
            yyyy: {
                regex: "\\d{4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            yy: {
                regex: "\\d{2}",
                apply: function(a) {
                    this.year = +a + 2e3
                }
            },
            y: {
                regex: "\\d{1,4}",
                apply: function(a) {
                    this.year = +a
                }
            },
            MMMM: {
                regex: a.DATETIME_FORMATS.MONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
                }
            },
            MMM: {
                regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"),
                apply: function(b) {
                    this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
                }
            },
            MM: {
                regex: "0[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            M: {
                regex: "[1-9]|1[0-2]",
                apply: function(a) {
                    this.month = a - 1
                }
            },
            dd: {
                regex: "[0-2][0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            d: {
                regex: "[1-2]?[0-9]{1}|3[0-1]{1}",
                apply: function(a) {
                    this.date = +a
                }
            },
            EEEE: {
                regex: a.DATETIME_FORMATS.DAY.join("|")
            },
            EEE: {
                regex: a.DATETIME_FORMATS.SHORTDAY.join("|")
            }
        };
        this.parse = function(b, e) {
            if (!angular.isString(b) || !e) return b;
            e = a.DATETIME_FORMATS[e] || e, this.parsers[e] || (this.parsers[e] = c(e));
            var f = this.parsers[e],
                g = f.regex,
                h = f.map,
                i = b.match(g);
            if (i && i.length) {
                for (var j, k = {
                    year: 1900,
                    month: 0,
                    date: 1,
                    hours: 0
                }, l = 1, m = i.length; m > l; l++) {
                    var n = h[l - 1];
                    n.apply && n.apply.call(k, i[l])
                }
                return d(k.year, k.month, k.date) && (j = new Date(k.year, k.month, k.date, k.hours)), j
            }
        }
    }
]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window",
    function(a, b) {
        function c(a, c) {
            return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
        }

        function d(a) {
            return "static" === (c(a, "position") || "static")
        }
        var e = function(b) {
            for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);) e = e.offsetParent;
            return e || c
        };
        return {
            position: function(b) {
                var c = this.offset(b),
                    d = {
                        top: 0,
                        left: 0
                    }, f = e(b[0]);
                f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
                var g = b[0].getBoundingClientRect();
                return {
                    width: g.width || b.prop("offsetWidth"),
                    height: g.height || b.prop("offsetHeight"),
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offset: function(c) {
                var d = c[0].getBoundingClientRect();
                return {
                    width: d.width || c.prop("offsetWidth"),
                    height: d.height || c.prop("offsetHeight"),
                    top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop),
                    left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)
                }
            },
            positionElements: function(a, b, c, d) {
                var e, f, g, h, i = c.split("-"),
                    j = i[0],
                    k = i[1] || "center";
                e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
                var l = {
                    center: function() {
                        return e.left + e.width / 2 - f / 2
                    },
                    left: function() {
                        return e.left
                    },
                    right: function() {
                        return e.left + e.width
                    }
                }, m = {
                    center: function() {
                        return e.top + e.height / 2 - g / 2
                    },
                    top: function() {
                        return e.top
                    },
                    bottom: function() {
                        return e.top + e.height
                    }
                };
                switch (j) {
                    case "right":
                        h = {
                            top: m[k](),
                            left: l[j]()
                        };
                        break;
                    case "left":
                        h = {
                            top: m[k](),
                            left: e.left - f
                        };
                        break;
                    case "bottom":
                        h = {
                            top: m[j](),
                            left: l[k]()
                        };
                        break;
                    default:
                        h = {
                            top: e.top - g,
                            left: l[k]()
                        }
                }
                return h
            }
        }
    }
]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {
    formatDay: "dd",
    formatMonth: "MMMM",
    formatYear: "yyyy",
    formatDayHeader: "EEE",
    formatDayTitle: "MMMM yyyy",
    formatMonthTitle: "yyyy",
    datepickerMode: "day",
    minMode: "day",
    maxMode: "year",
    showWeeks: !0,
    startingDay: 0,
    yearRange: 20,
    minDate: null,
    maxDate: null
}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig",
    function(a, b, c, d, e, f, g, h) {
        var i = this,
            j = {
                $setViewValue: angular.noop
            };
        this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function(c, e) {
            i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
        }), angular.forEach(["minDate", "maxDate"], function(d) {
            b[d] ? a.$parent.$watch(c(b[d]), function(a) {
                i[d] = a ? new Date(a) : null, i.refreshView()
            }) : i[d] = h[d] ? new Date(h[d]) : null
        }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function(b) {
            return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
        }, this.init = function(a) {
            j = a, j.$render = function() {
                i.render()
            }
        }, this.render = function() {
            if (j.$modelValue) {
                var a = new Date(j.$modelValue),
                    b = !isNaN(a);
                b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
            }
            this.refreshView()
        }, this.refreshView = function() {
            if (this.element) {
                this._refreshView();
                var a = j.$modelValue ? new Date(j.$modelValue) : null;
                j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
            }
        }, this.createDateObject = function(a, b) {
            var c = j.$modelValue ? new Date(j.$modelValue) : null;
            return {
                date: a,
                label: g(a, b),
                selected: c && 0 === this.compare(a, c),
                disabled: this.isDisabled(a),
                current: 0 === this.compare(a, new Date)
            }
        }, this.isDisabled = function(c) {
            return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({
                    date: c,
                    mode: a.datepickerMode
                })
        }, this.split = function(a, b) {
            for (var c = []; a.length > 0;) c.push(a.splice(0, b));
            return c
        }, a.select = function(b) {
            if (a.datepickerMode === i.minMode) {
                var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
                c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
            } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
        }, a.move = function(a) {
            var b = i.activeDate.getFullYear() + a * (i.step.years || 0),
                c = i.activeDate.getMonth() + a * (i.step.months || 0);
            i.activeDate.setFullYear(b, c, 1), i.refreshView()
        }, a.toggleMode = function(b) {
            b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
        }, a.keys = {
            13: "enter",
            32: "space",
            33: "pageup",
            34: "pagedown",
            35: "end",
            36: "home",
            37: "left",
            38: "up",
            39: "right",
            40: "down"
        };
        var k = function() {
            e(function() {
                i.element[0].focus()
            }, 0, !1)
        };
        a.$on("datepicker.focus", k), a.keydown = function(b) {
            var c = a.keys[b.which];
            if (c && !b.shiftKey && !b.altKey)
                if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
                    if (i.isDisabled(i.activeDate)) return;
                    a.select(i.activeDate), k()
                } else !b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
        }
    }
]).directive("datepicker", function() {
    return {
        restrict: "EA",
        replace: !0,
        templateUrl: "template/datepicker/datepicker.html",
        scope: {
            datepickerMode: "=?",
            dateDisabled: "&"
        },
        require: ["datepicker", "?^ngModel"],
        controller: "DatepickerController",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}).directive("daypicker", ["dateFilter",
    function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/day.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                function f(a, b) {
                    return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
                }

                function g(a, b) {
                    var c = new Array(b),
                        d = new Date(a),
                        e = 0;
                    for (d.setHours(12); b > e;) c[e++] = new Date(d), d.setDate(d.getDate() + 1);
                    return c
                }

                function h(a) {
                    var b = new Date(a);
                    b.setDate(b.getDate() + 4 - (b.getDay() || 7));
                    var c = b.getTime();
                    return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
                }
                b.showWeeks = e.showWeeks, e.step = {
                    months: 1
                }, e.element = c;
                var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                e._refreshView = function() {
                    var c = e.activeDate.getFullYear(),
                        d = e.activeDate.getMonth(),
                        f = new Date(c, d, 1),
                        i = e.startingDay - f.getDay(),
                        j = i > 0 ? 7 - i : -i,
                        k = new Date(f);
                    j > 0 && k.setDate(-j + 1);
                    for (var l = g(k, 42), m = 0; 42 > m; m++) l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {
                        secondary: l[m].getMonth() !== d,
                        uid: b.uniqueId + "-" + m
                    });
                    b.labels = new Array(7);
                    for (var n = 0; 7 > n; n++) b.labels[n] = {
                        abbr: a(l[n].date, e.formatDayHeader),
                        full: a(l[n].date, "EEEE")
                    };
                    if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                        b.weekNumbers = [];
                        for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
                    }
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
                }, e.handleKeyDown = function(a, b) {
                    var c = e.activeDate.getDate();
                    if ("left" === a) c -= 1;
                    else if ("up" === a) c -= 7;
                    else if ("right" === a) c += 1;
                    else if ("down" === a) c += 7;
                    else if ("pageup" === a || "pagedown" === a) {
                        var d = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setMonth(d, 1), c = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), c)
                    } else "home" === a ? c = 1 : "end" === a && (c = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
                    e.activeDate.setDate(c)
                }, e.refreshView()
            }
        }
    }
]).directive("monthpicker", ["dateFilter",
    function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/month.html",
            require: "^datepicker",
            link: function(b, c, d, e) {
                e.step = {
                    years: 1
                }, e.element = c, e._refreshView = function() {
                    for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++) c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {
                        uid: b.uniqueId + "-" + f
                    });
                    b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
                }, e.compare = function(a, b) {
                    return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
                }, e.handleKeyDown = function(a, b) {
                    var c = e.activeDate.getMonth();
                    if ("left" === a) c -= 1;
                    else if ("up" === a) c -= 3;
                    else if ("right" === a) c += 1;
                    else if ("down" === a) c += 3;
                    else if ("pageup" === a || "pagedown" === a) {
                        var d = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                        e.activeDate.setFullYear(d)
                    } else "home" === a ? c = 0 : "end" === a && (c = 11);
                    e.activeDate.setMonth(c)
                }, e.refreshView()
            }
        }
    }
]).directive("yearpicker", ["dateFilter",
    function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/datepicker/year.html",
            require: "^datepicker",
            link: function(a, b, c, d) {
                function e(a) {
                    return parseInt((a - 1) / f, 10) * f + 1
                }
                var f = d.yearRange;
                d.step = {
                    years: f
                }, d.element = b, d._refreshView = function() {
                    for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++) b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {
                        uid: a.uniqueId + "-" + c
                    });
                    a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
                }, d.compare = function(a, b) {
                    return a.getFullYear() - b.getFullYear()
                }, d.handleKeyDown = function(a, b) {
                    var c = d.activeDate.getFullYear();
                    "left" === a ? c -= 1 : "up" === a ? c -= 5 : "right" === a ? c += 1 : "down" === a ? c += 5 : "pageup" === a || "pagedown" === a ? c += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? c = e(d.activeDate.getFullYear()) : "end" === a && (c = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(c)
                }, d.refreshView()
            }
        }
    }
]).constant("datepickerPopupConfig", {
    datepickerPopup: "yyyy-MM-dd",
    currentText: "Today",
    clearText: "Clear",
    closeText: "Done",
    closeOnDateSelection: !0,
    appendToBody: !1,
    showButtonBar: !0
}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig",
    function(a, b, c, d, e, f, g) {
        return {
            restrict: "EA",
            require: "ngModel",
            scope: {
                isOpen: "=?",
                currentText: "@",
                clearText: "@",
                closeText: "@",
                dateDisabled: "&"
            },
            link: function(h, i, j, k) {
                function l(a) {
                    return a.replace(/([A-Z])/g, function(a) {
                        return "-" + a.toLowerCase()
                    })
                }

                function m(a) {
                    if (a) {
                        if (angular.isDate(a) && !isNaN(a)) return k.$setValidity("date", !0), a;
                        if (angular.isString(a)) {
                            var b = f.parse(a, n) || new Date(a);
                            return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                        }
                        return void k.$setValidity("date", !1)
                    }
                    return k.$setValidity("date", !0), null;
                }
                var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection,
                    p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
                h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function(a) {
                    return h[a + "Text"] || g[a + "Text"]
                }, j.$observe("datepickerPopup", function(a) {
                    n = a || g.datepickerPopup, k.$render()
                });
                var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
                q.attr({
                    "ng-model": "date",
                    "ng-change": "dateSelection()"
                });
                var r = angular.element(q.children()[0]);
                j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function(a, b) {
                    r.attr(l(b), a)
                }), h.watchData = {}, angular.forEach(["minDate", "maxDate", "datepickerMode"], function(a) {
                    if (j[a]) {
                        var c = b(j[a]);
                        if (h.$parent.$watch(c, function(b) {
                                h.watchData[a] = b
                            }), r.attr(l(a), "watchData." + a), "datepickerMode" === a) {
                            var d = c.assign;
                            h.$watch("watchData." + a, function(a, b) {
                                a !== b && d(h.$parent, a)
                            })
                        }
                    }
                }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function(a) {
                    angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
                }, i.bind("input change keyup", function() {
                    h.$apply(function() {
                        h.date = k.$modelValue
                    })
                }), k.$render = function() {
                    var a = k.$viewValue ? e(k.$viewValue, n) : "";
                    i.val(a), h.date = m(k.$modelValue)
                };
                var s = function(a) {
                    h.isOpen && a.target !== i[0] && h.$apply(function() {
                        h.isOpen = !1
                    })
                }, t = function(a, b) {
                    h.keydown(a)
                };
                i.bind("keydown", t), h.keydown = function(a) {
                    27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
                }, h.$watch("isOpen", function(a) {
                    a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
                }), h.select = function(a) {
                    if ("today" === a) {
                        var b = new Date;
                        angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
                    }
                    h.dateSelection(a)
                }, h.close = function() {
                    h.isOpen = !1, i[0].focus()
                };
                var u = a(q)(h);
                q.remove(), p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function() {
                    u.remove(), i.unbind("keydown", t), c.unbind("click", s)
                })
            }
        }
    }
]).directive("datepickerPopupWrap", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        templateUrl: "template/datepicker/popup.html",
        link: function(a, b, c) {
            b.bind("click", function(a) {
                a.preventDefault(), a.stopPropagation()
            })
        }
    }
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {
    openClass: "open"
}).service("dropdownService", ["$document",
    function(a) {
        var b = null;
        this.open = function(e) {
            b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
        }, this.close = function(e) {
            b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
        };
        var c = function(a) {
            if (b) {
                var c = b.getToggleElement();
                a && c && c[0].contains(a.target) || b.$apply(function() {
                    b.isOpen = !1
                })
            }
        }, d = function(a) {
            27 === a.which && (b.focusToggleElement(), c())
        }
    }
]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate",
    function(a, b, c, d, e, f) {
        var g, h = this,
            i = a.$new(),
            j = d.openClass,
            k = angular.noop,
            l = b.onToggle ? c(b.onToggle) : angular.noop;
        this.init = function(d) {
            h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function(a) {
                i.isOpen = !! a
            }))
        }, this.toggle = function(a) {
            return i.isOpen = arguments.length ? !! a : !i.isOpen
        }, this.isOpen = function() {
            return i.isOpen
        }, i.getToggleElement = function() {
            return h.toggleElement
        }, i.focusToggleElement = function() {
            h.toggleElement && h.toggleElement[0].focus()
        }, i.$watch("isOpen", function(b, c) {
            f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {
                open: !! b
            })
        }), a.$on("$locationChangeSuccess", function() {
            i.isOpen = !1
        }), a.$on("$destroy", function() {
            i.$destroy()
        })
    }
]).directive("dropdown", function() {
    return {
        controller: "DropdownController",
        link: function(a, b, c, d) {
            d.init(b)
        }
    }
}).directive("dropdownToggle", function() {
    return {
        require: "?^dropdown",
        link: function(a, b, c, d) {
            if (d) {
                d.toggleElement = b;
                var e = function(e) {
                    e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function() {
                        d.toggle()
                    })
                };
                b.bind("click", e), b.attr({
                    "aria-haspopup": !0,
                    "aria-expanded": !1
                }), a.$watch(d.isOpen, function(a) {
                    b.attr("aria-expanded", !! a)
                }), a.$on("$destroy", function() {
                    b.unbind("click", e)
                })
            }
        }
    }
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function() {
    return {
        createNew: function() {
            var a = [];
            return {
                add: function(b, c) {
                    a.push({
                        key: b,
                        value: c
                    })
                },
                get: function(b) {
                    for (var c = 0; c < a.length; c++)
                        if (b == a[c].key) return a[c]
                },
                keys: function() {
                    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].key);
                    return b
                },
                top: function() {
                    return a[a.length - 1]
                },
                remove: function(b) {
                    for (var c = -1, d = 0; d < a.length; d++)
                        if (b == a[d].key) {
                            c = d;
                            break
                        }
                    return a.splice(c, 1)[0]
                },
                removeTop: function() {
                    return a.splice(a.length - 1, 1)[0]
                },
                length: function() {
                    return a.length
                }
            }
        }
    }
}).directive("modalBackdrop", ["$timeout",
    function(a) {
        return {
            restrict: "EA",
            replace: !0,
            templateUrl: "template/modal/backdrop.html",
            link: function(b, c, d) {
                b.backdropClass = d.backdropClass || "", b.animate = !1, a(function() {
                    b.animate = !0
                })
            }
        }
    }
]).directive("modalWindow", ["$modalStack", "$timeout",
    function(a, b) {
        return {
            restrict: "EA",
            scope: {
                index: "@",
                animate: "="
            },
            replace: !0,
            transclude: !0,
            templateUrl: function(a, b) {
                return b.templateUrl || "template/modal/window.html"
            },
            link: function(c, d, e) {
                d.addClass(e.windowClass || ""), c.size = e.size, b(function() {
                    c.animate = !0, d[0].querySelectorAll("[autofocus]").length || d[0].focus()
                }), c.close = function(b) {
                    var c = a.getTop();
                    c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
                }
            }
        }
    }
]).directive("modalTransclude", function() {
    return {
        link: function(a, b, c, d, e) {
            e(a.$parent, function(a) {
                b.empty(), b.append(a)
            })
        }
    }
}).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap",
    function(a, b, c, d, e, f) {
        function g() {
            for (var a = -1, b = n.keys(), c = 0; c < b.length; c++) n.get(b[c]).value.backdrop && (a = c);
            return a
        }

        function h(a) {
            var b = c.find("body").eq(0),
                d = n.get(a).value;
            n.remove(a), j(d.modalDomEl, d.modalScope, 300, function() {
                d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
            })
        }

        function i() {
            if (k && -1 == g()) {
                var a = l;
                j(k, l, 150, function() {
                    a.$destroy(), a = null
                }), k = void 0, l = void 0
            }
        }

        function j(c, d, e, f) {
            function g() {
                g.done || (g.done = !0, c.remove(), f && f())
            }
            d.animate = !1;
            var h = a.transitionEndEventName;
            if (h) {
                var i = b(g, e);
                c.bind(h, function() {
                    b.cancel(i), g(), d.$apply()
                })
            } else b(g)
        }
        var k, l, m = "modal-open",
            n = f.createNew(),
            o = {};
        return e.$watch(g, function(a) {
            l && (l.index = a)
        }), c.bind("keydown", function(a) {
            var b;
            27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function() {
                o.dismiss(b.key, "escape key press")
            })))
        }), o.open = function(a, b) {
            n.add(a, {
                deferred: b.deferred,
                modalScope: b.scope,
                backdrop: b.backdrop,
                keyboard: b.keyboard
            });
            var f = c.find("body").eq(0),
                h = g();
            if (h >= 0 && !k) {
                l = e.$new(!0), l.index = h;
                var i = angular.element("<div modal-backdrop></div>");
                i.attr("backdrop-class", b.backdropClass), k = d(i)(l), f.append(k)
            }
            var j = angular.element("<div modal-window></div>");
            j.attr({
                "template-url": b.windowTemplateUrl,
                "window-class": b.windowClass,
                size: b.size,
                index: n.length() - 1,
                animate: "animate"
            }).html(b.content);
            var o = d(j)(b.scope);
            n.top().value.modalDomEl = o, f.append(o), f.addClass(m)
        }, o.close = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.resolve(b), h(a))
        }, o.dismiss = function(a, b) {
            var c = n.get(a);
            c && (c.value.deferred.reject(b), h(a))
        }, o.dismissAll = function(a) {
            for (var b = this.getTop(); b;) this.dismiss(b.key, a), b = this.getTop()
        }, o.getTop = function() {
            return n.top()
        }, o
    }
]).provider("$modal", function() {
    var a = {
        options: {
            backdrop: !0,
            keyboard: !0
        },
        $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack",
            function(b, c, d, e, f, g, h) {
                function i(a) {
                    return a.template ? d.when(a.template) : e.get(angular.isFunction(a.templateUrl) ? a.templateUrl() : a.templateUrl, {
                        cache: f
                    }).then(function(a) {
                        return a.data
                    })
                }

                function j(a) {
                    var c = [];
                    return angular.forEach(a, function(a) {
                        (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
                    }), c
                }
                var k = {};
                return k.open = function(b) {
                    var e = d.defer(),
                        f = d.defer(),
                        k = {
                            result: e.promise,
                            opened: f.promise,
                            close: function(a) {
                                h.close(k, a)
                            },
                            dismiss: function(a) {
                                h.dismiss(k, a)
                            }
                        };
                    if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl) throw new Error("One of template or templateUrl options is required.");
                    var l = d.all([i(b)].concat(j(b.resolve)));
                    return l.then(function(a) {
                        var d = (b.scope || c).$new();
                        d.$close = k.close, d.$dismiss = k.dismiss;
                        var f, i = {}, j = 1;
                        b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function(b, c) {
                            i[c] = a[j++]
                        }), f = g(b.controller, i), b.controllerAs && (d[b.controllerAs] = f)), h.open(k, {
                            scope: d,
                            deferred: e,
                            content: a[0],
                            backdrop: b.backdrop,
                            keyboard: b.keyboard,
                            backdropClass: b.backdropClass,
                            windowClass: b.windowClass,
                            windowTemplateUrl: b.windowTemplateUrl,
                            size: b.size
                        })
                    }, function(a) {
                        e.reject(a)
                    }), l.then(function() {
                        f.resolve(!0)
                    }, function() {
                        f.reject(!1)
                    }), k
                }, k
            }
        ]
    };
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse",
    function(a, b, c) {
        var d = this,
            e = {
                $setViewValue: angular.noop
            }, f = b.numPages ? c(b.numPages).assign : angular.noop;
        this.init = function(f, g) {
            e = f, this.config = g, e.$render = function() {
                d.render()
            }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function(b) {
                d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
            }) : this.itemsPerPage = g.itemsPerPage
        }, this.calculateTotalPages = function() {
            var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
            return Math.max(b || 0, 1)
        }, this.render = function() {
            a.page = parseInt(e.$viewValue, 10) || 1
        }, a.selectPage = function(b) {
            a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
        }, a.getText = function(b) {
            return a[b + "Text"] || d.config[b + "Text"]
        }, a.noPrevious = function() {
            return 1 === a.page
        }, a.noNext = function() {
            return a.page === a.totalPages
        }, a.$watch("totalItems", function() {
            a.totalPages = d.calculateTotalPages()
        }), a.$watch("totalPages", function(b) {
            f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
        })
    }
]).constant("paginationConfig", {
    itemsPerPage: 10,
    boundaryLinks: !1,
    directionLinks: !0,
    firstText: "First",
    previousText: "Previous",
    nextText: "Next",
    lastText: "Last",
    rotate: !0
}).directive("pagination", ["$parse", "paginationConfig",
    function(a, b) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                firstText: "@",
                previousText: "@",
                nextText: "@",
                lastText: "@"
            },
            require: ["pagination", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pagination.html",
            replace: !0,
            link: function(c, d, e, f) {
                function g(a, b, c) {
                    return {
                        number: a,
                        text: b,
                        active: c
                    }
                }

                function h(a, b) {
                    var c = [],
                        d = 1,
                        e = b,
                        f = angular.isDefined(k) && b > k;
                    f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
                    for (var h = d; e >= h; h++) {
                        var i = g(h, h, h === a);
                        c.push(i)
                    }
                    if (f && !l) {
                        if (d > 1) {
                            var j = g(d - 1, "...", !1);
                            c.unshift(j)
                        }
                        if (b > e) {
                            var m = g(e + 1, "...", !1);
                            c.push(m)
                        }
                    }
                    return c
                }
                var i = f[0],
                    j = f[1];
                if (j) {
                    var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize,
                        l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
                    c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function(a) {
                        k = parseInt(a, 10), i.render()
                    });
                    var m = i.render;
                    i.render = function() {
                        m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
                    }
                }
            }
        }
    }
]).constant("pagerConfig", {
    itemsPerPage: 10,
    previousText: "« Previous",
    nextText: "Next »",
    align: !0
}).directive("pager", ["pagerConfig",
    function(a) {
        return {
            restrict: "EA",
            scope: {
                totalItems: "=",
                previousText: "@",
                nextText: "@"
            },
            require: ["pager", "?ngModel"],
            controller: "PaginationController",
            templateUrl: "template/pagination/pager.html",
            replace: !0,
            link: function(b, c, d, e) {
                var f = e[0],
                    g = e[1];
                g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
            }
        }
    }
]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function() {
    function a(a) {
        var b = /[A-Z]/g,
            c = "-";
        return a.replace(b, function(a, b) {
            return (b ? c : "") + a.toLowerCase()
        })
    }
    var b = {
        placement: "top",
        animation: !0,
        popupDelay: 0
    }, c = {
        mouseenter: "mouseleave",
        click: "click",
        focus: "blur"
    }, d = {};
    this.options = function(a) {
        angular.extend(d, a)
    }, this.setTriggers = function(a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$document", "$position", "$interpolate",
        function(e, f, g, h, i, j) {
            return function(e, k, l) {
                function m(a) {
                    var b = a || n.trigger || l,
                        d = c[b] || b;
                    return {
                        show: b,
                        hide: d
                    }
                }
                var n = angular.extend({}, b, d),
                    o = a(e),
                    p = j.startSymbol(),
                    q = j.endSymbol(),
                    r = "<div " + o + '-popup title="' + p + "title" + q + '" content="' + p + "content" + q + '" placement="' + p + "placement" + q + '" animation="animation" is-open="isOpen"></div>';
                return {
                    restrict: "EA",
                    compile: function(a, b) {
                        var c = f(r);
                        return function(a, b, d) {
                            function f() {
                                D.isOpen ? l() : j()
                            }

                            function j() {
                                (!C || a.$eval(d[k + "Enable"])) && (s(), D.popupDelay ? z || (z = g(o, D.popupDelay, !1), z.then(function(a) {
                                    a()
                                })) : o()())
                            }

                            function l() {
                                a.$apply(function() {
                                    p()
                                })
                            }

                            function o() {
                                return z = null, y && (g.cancel(y), y = null), D.content ? (q(), w.css({
                                    top: 0,
                                    left: 0,
                                    display: "block"
                                }), A ? h.find("body").append(w) : b.after(w), E(), D.isOpen = !0, D.$digest(), E) : angular.noop
                            }

                            function p() {
                                D.isOpen = !1, g.cancel(z), z = null, D.animation ? y || (y = g(r, 500)) : r()
                            }

                            function q() {
                                w && r(), x = D.$new(), w = c(x, angular.noop)
                            }

                            function r() {
                                y = null, w && (w.remove(), w = null), x && (x.$destroy(), x = null)
                            }

                            function s() {
                                t(), u()
                            }

                            function t() {
                                var a = d[k + "Placement"];
                                D.placement = angular.isDefined(a) ? a : n.placement
                            }

                            function u() {
                                var a = d[k + "PopupDelay"],
                                    b = parseInt(a, 10);
                                D.popupDelay = isNaN(b) ? n.popupDelay : b
                            }

                            function v() {
                                var a = d[k + "Trigger"];
                                F(), B = m(a), B.show === B.hide ? b.bind(B.show, f) : (b.bind(B.show, j), b.bind(B.hide, l))
                            }
                            var w, x, y, z, A = angular.isDefined(n.appendToBody) ? n.appendToBody : !1,
                                B = m(void 0),
                                C = angular.isDefined(d[k + "Enable"]),
                                D = a.$new(!0),
                                E = function() {
                                    var a = i.positionElements(b, w, D.placement, A);
                                    a.top += "px", a.left += "px", w.css(a)
                                };
                            D.isOpen = !1, d.$observe(e, function(a) {
                                D.content = a, !a && D.isOpen && p()
                            }), d.$observe(k + "Title", function(a) {
                                D.title = a
                            });
                            var F = function() {
                                b.unbind(B.show, j), b.unbind(B.hide, l)
                            };
                            v();
                            var G = a.$eval(d[k + "Animation"]);
                            D.animation = angular.isDefined(G) ? !! G : n.animation;
                            var H = a.$eval(d[k + "AppendToBody"]);
                            A = angular.isDefined(H) ? H : A, A && a.$on("$locationChangeSuccess", function() {
                                D.isOpen && p()
                            }), a.$on("$destroy", function() {
                                g.cancel(y), g.cancel(z), F(), r(), D = null
                            })
                        }
                    }
                }
            }
        }
    ]
}).directive("tooltipPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-popup.html"
    }
}).directive("tooltip", ["$tooltip",
    function(a) {
        return a("tooltip", "tooltip", "mouseenter")
    }
]).directive("tooltipHtmlUnsafePopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"
    }
}).directive("tooltipHtmlUnsafe", ["$tooltip",
    function(a) {
        return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
    }
]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function() {
    return {
        restrict: "EA",
        replace: !0,
        scope: {
            title: "@",
            content: "@",
            placement: "@",
            animation: "&",
            isOpen: "&"
        },
        templateUrl: "template/popover/popover.html"
    }
}).directive("popover", ["$tooltip",
    function(a) {
        return a("popover", "popover", "click")
    }
]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {
    animate: !0,
    max: 100
}).controller("ProgressController", ["$scope", "$attrs", "progressConfig",
    function(a, b, c) {
        var d = this,
            e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
        this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function(b, c) {
            e || c.css({
                transition: "none"
            }), this.bars.push(b), b.$watch("value", function(c) {
                b.percent = +(100 * c / a.max).toFixed(2)
            }), b.$on("$destroy", function() {
                c = null, d.removeBar(b)
            })
        }, this.removeBar = function(a) {
            this.bars.splice(this.bars.indexOf(a), 1)
        }
    }
]).directive("progress", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        require: "progress",
        scope: {},
        templateUrl: "template/progressbar/progress.html"
    }
}).directive("bar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        require: "^progress",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/bar.html",
        link: function(a, b, c, d) {
            d.addBar(a, b)
        }
    }
}).directive("progressbar", function() {
    return {
        restrict: "EA",
        replace: !0,
        transclude: !0,
        controller: "ProgressController",
        scope: {
            value: "=",
            type: "@"
        },
        templateUrl: "template/progressbar/progressbar.html",
        link: function(a, b, c, d) {
            d.addBar(a, angular.element(b.children()[0]))
        }
    }
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {
    max: 5,
    stateOn: null,
    stateOff: null
}).controller("RatingController", ["$scope", "$attrs", "ratingConfig",
    function(a, b, c) {
        var d = {
            $setViewValue: angular.noop
        };
        this.init = function(e) {
            d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
            var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
            a.range = this.buildTemplateObjects(f)
        }, this.buildTemplateObjects = function(a) {
            for (var b = 0, c = a.length; c > b; b++) a[b] = angular.extend({
                index: b
            }, {
                stateOn: this.stateOn,
                stateOff: this.stateOff
            }, a[b]);
            return a
        }, a.rate = function(b) {
            !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
        }, a.enter = function(b) {
            a.readonly || (a.value = b), a.onHover({
                value: b
            })
        }, a.reset = function() {
            a.value = d.$viewValue, a.onLeave()
        }, a.onKeydown = function(b) {
            /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
        }, this.render = function() {
            a.value = d.$viewValue
        }
    }
]).directive("rating", function() {
    return {
        restrict: "EA",
        require: ["rating", "ngModel"],
        scope: {
            readonly: "=?",
            onHover: "&",
            onLeave: "&"
        },
        controller: "RatingController",
        templateUrl: "template/rating/rating.html",
        replace: !0,
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f)
        }
    }
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope",
    function(a) {
        var b = this,
            c = b.tabs = a.tabs = [];
        b.select = function(a) {
            angular.forEach(c, function(b) {
                b.active && b !== a && (b.active = !1, b.onDeselect())
            }), a.active = !0, a.onSelect()
        }, b.addTab = function(a) {
            c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
        }, b.removeTab = function(a) {
            var e = c.indexOf(a);
            if (a.active && c.length > 1 && !d) {
                var f = e == c.length - 1 ? e - 1 : e + 1;
                b.select(c[f])
            }
            c.splice(e, 1)
        };
        var d;
        a.$on("$destroy", function() {
            d = !0
        })
    }
]).directive("tabset", function() {
    return {
        restrict: "EA",
        transclude: !0,
        replace: !0,
        scope: {
            type: "@"
        },
        controller: "TabsetController",
        templateUrl: "template/tabs/tabset.html",
        link: function(a, b, c) {
            a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
        }
    }
}).directive("tab", ["$parse",
    function(a) {
        return {
            require: "^tabset",
            restrict: "EA",
            replace: !0,
            templateUrl: "template/tabs/tab.html",
            transclude: !0,
            scope: {
                active: "=?",
                heading: "@",
                onSelect: "&select",
                onDeselect: "&deselect"
            },
            controller: function() {},
            compile: function(b, c, d) {
                return function(b, c, e, f) {
                    b.$watch("active", function(a) {
                        a && f.select(b)
                    }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function(a) {
                        b.disabled = !! a
                    }), b.select = function() {
                        b.disabled || (b.active = !0)
                    }, f.addTab(b), b.$on("$destroy", function() {
                        f.removeTab(b)
                    }), b.$transcludeFn = d
                }
            }
        }
    }
]).directive("tabHeadingTransclude", [
    function() {
        return {
            restrict: "A",
            require: "^tab",
            link: function(a, b, c, d) {
                a.$watch("headingElement", function(a) {
                    a && (b.html(""), b.append(a))
                })
            }
        }
    }
]).directive("tabContentTransclude", function() {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }
    return {
        restrict: "A",
        require: "^tabset",
        link: function(b, c, d) {
            var e = b.$eval(d.tabContentTransclude);
            e.$transcludeFn(e.$parent, function(b) {
                angular.forEach(b, function(b) {
                    a(b) ? e.headingElement = b : c.append(b)
                })
            })
        }
    }
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {
    hourStep: 1,
    minuteStep: 1,
    showMeridian: !0,
    meridians: null,
    readonlyInput: !1,
    mousewheel: !0
}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig",
    function(a, b, c, d, e, f) {
        function g() {
            var b = parseInt(a.hours, 10),
                c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
            return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
        }

        function h() {
            var b = parseInt(a.minutes, 10);
            return b >= 0 && 60 > b ? b : void 0
        }

        function i(a) {
            return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
        }

        function j(a) {
            k(), o.$setViewValue(new Date(n)), l(a)
        }

        function k() {
            o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
        }

        function l(b) {
            var c = n.getHours(),
                d = n.getMinutes();
            a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
        }

        function m(a) {
            var b = new Date(n.getTime() + 6e4 * a);
            n.setHours(b.getHours(), b.getMinutes()), j()
        }
        var n = new Date,
            o = {
                $setViewValue: angular.noop
            }, p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
        this.init = function(c, d) {
            o = c, o.$render = this.render;
            var e = d.eq(0),
                g = d.eq(1),
                h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
            h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
        };
        var q = f.hourStep;
        b.hourStep && a.$parent.$watch(c(b.hourStep), function(a) {
            q = parseInt(a, 10)
        });
        var r = f.minuteStep;
        b.minuteStep && a.$parent.$watch(c(b.minuteStep), function(a) {
            r = parseInt(a, 10)
        }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function(b) {
            if (a.showMeridian = !! b, o.$error.time) {
                var c = g(),
                    d = h();
                angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
            } else l()
        }), this.setupMousewheelEvents = function(b, c) {
            var d = function(a) {
                a.originalEvent && (a = a.originalEvent);
                var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
                return a.detail || b > 0
            };
            b.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
            }), c.bind("mousewheel wheel", function(b) {
                a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
            })
        }, this.setupInputEvents = function(b, c) {
            if (a.readonlyInput) return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
            var d = function(b, c) {
                o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
            };
            a.updateHours = function() {
                var a = g();
                angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
            }, b.bind("blur", function(b) {
                !a.invalidHours && a.hours < 10 && a.$apply(function() {
                    a.hours = i(a.hours)
                })
            }), a.updateMinutes = function() {
                var a = h();
                angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
            }, c.bind("blur", function(b) {
                !a.invalidMinutes && a.minutes < 10 && a.$apply(function() {
                    a.minutes = i(a.minutes)
                })
            })
        }, this.render = function() {
            var a = o.$modelValue ? new Date(o.$modelValue) : null;
            isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
        }, a.incrementHours = function() {
            m(60 * q)
        }, a.decrementHours = function() {
            m(60 * -q)
        }, a.incrementMinutes = function() {
            m(r)
        }, a.decrementMinutes = function() {
            m(-r)
        }, a.toggleMeridian = function() {
            m(720 * (n.getHours() < 12 ? 1 : -1))
        }
    }
]).directive("timepicker", function() {
    return {
        restrict: "EA",
        require: ["timepicker", "?^ngModel"],
        controller: "TimepickerController",
        replace: !0,
        scope: {},
        templateUrl: "template/timepicker/timepicker.html",
        link: function(a, b, c, d) {
            var e = d[0],
                f = d[1];
            f && e.init(f, b.find("input"))
        }
    }
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse",
    function(a) {
        var b = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+([\s\S]+?)$/;
        return {
            parse: function(c) {
                var d = c.match(b);
                if (!d) throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
                return {
                    itemName: d[3],
                    source: a(d[4]),
                    viewMapper: a(d[2] || d[1]),
                    modelMapper: a(d[1])
                }
            }
        }
    }
]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser",
    function(a, b, c, d, e, f, g) {
        var h = [9, 13, 27, 38, 40];
        return {
            require: "ngModel",
            link: function(i, j, k, l) {
                var m, n = i.$eval(k.typeaheadMinLength) || 1,
                    o = i.$eval(k.typeaheadWaitMs) || 0,
                    p = i.$eval(k.typeaheadEditable) !== !1,
                    q = b(k.typeaheadLoading).assign || angular.noop,
                    r = b(k.typeaheadOnSelect),
                    s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0,
                    t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1,
                    u = i.$eval(k.typeaheadFocusFirst) !== !1,
                    v = b(k.ngModel).assign,
                    w = g.parse(k.typeahead),
                    x = i.$new();
                i.$on("$destroy", function() {
                    x.$destroy()
                });
                var y = "typeahead-" + x.$id + "-" + Math.floor(1e4 * Math.random());
                j.attr({
                    "aria-autocomplete": "list",
                    "aria-expanded": !1,
                    "aria-owns": y
                });
                var z = angular.element("<div typeahead-popup></div>");
                z.attr({
                    id: y,
                    matches: "matches",
                    active: "activeIdx",
                    select: "select(activeIdx)",
                    query: "query",
                    position: "position"
                }), angular.isDefined(k.typeaheadTemplateUrl) && z.attr("template-url", k.typeaheadTemplateUrl);
                var A = function() {
                    x.matches = [], x.activeIdx = -1, j.attr("aria-expanded", !1)
                }, B = function(a) {
                    return y + "-option-" + a
                };
                x.$watch("activeIdx", function(a) {
                    0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", B(a))
                });
                var C = function(a) {
                    var b = {
                        $viewValue: a
                    };
                    q(i, !0), c.when(w.source(i, b)).then(function(c) {
                        var d = a === l.$viewValue;
                        if (d && m)
                            if (c.length > 0) {
                                x.activeIdx = u ? 0 : -1, x.matches.length = 0;
                                for (var e = 0; e < c.length; e++) b[w.itemName] = c[e], x.matches.push({
                                    id: B(e),
                                    label: w.viewMapper(x, b),
                                    model: c[e]
                                });
                                x.query = a, x.position = t ? f.offset(j) : f.position(j), x.position.top = x.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                            } else A();
                        d && q(i, !1)
                    }, function() {
                        A(), q(i, !1)
                    })
                };
                A(), x.query = void 0;
                var D, E = function(a) {
                    D = d(function() {
                        C(a)
                    }, o)
                }, F = function() {
                    D && d.cancel(D)
                };
                l.$parsers.unshift(function(a) {
                    return m = !0, a && a.length >= n ? o > 0 ? (F(), E(a)) : C(a) : (q(i, !1), F(), A()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
                }), l.$formatters.push(function(a) {
                    var b, c, d = {};
                    return s ? (d.$model = a, s(i, d)) : (d[w.itemName] = a, b = w.viewMapper(i, d), d[w.itemName] = void 0, c = w.viewMapper(i, d), b !== c ? b : a)
                }), x.select = function(a) {
                    var b, c, e = {};
                    e[w.itemName] = c = x.matches[a].model, b = w.modelMapper(i, e), v(i, b), l.$setValidity("editable", !0), r(i, {
                        $item: c,
                        $model: b,
                        $label: w.viewMapper(i, e)
                    }), A(), d(function() {
                        j[0].focus()
                    }, 0, !1)
                }, j.bind("keydown", function(a) {
                    0 !== x.matches.length && -1 !== h.indexOf(a.which) && (-1 != x.activeIdx || 13 !== a.which && 9 !== a.which) && (a.preventDefault(), 40 === a.which ? (x.activeIdx = (x.activeIdx + 1) % x.matches.length, x.$digest()) : 38 === a.which ? (x.activeIdx = (x.activeIdx > 0 ? x.activeIdx : x.matches.length) - 1, x.$digest()) : 13 === a.which || 9 === a.which ? x.$apply(function() {
                        x.select(x.activeIdx)
                    }) : 27 === a.which && (a.stopPropagation(), A(), x.$digest()))
                }), j.bind("blur", function(a) {
                    m = !1
                });
                var G = function(a) {
                    j[0] !== a.target && (A(), x.$digest())
                };
                e.bind("click", G), i.$on("$destroy", function() {
                    e.unbind("click", G), t && H.remove()
                });
                var H = a(z)(x);
                t ? e.find("body").append(H) : j.after(H)
            }
        }
    }
]).directive("typeaheadPopup", function() {
    return {
        restrict: "EA",
        scope: {
            matches: "=",
            query: "=",
            active: "=",
            position: "=",
            select: "&"
        },
        replace: !0,
        templateUrl: "template/typeahead/typeahead-popup.html",
        link: function(a, b, c) {
            a.templateUrl = c.templateUrl, a.isOpen = function() {
                return a.matches.length > 0
            }, a.isActive = function(b) {
                return a.active == b
            }, a.selectActive = function(b) {
                a.active = b
            }, a.selectMatch = function(b) {
                a.select({
                    activeIdx: b
                })
            }
        }
    }
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse",
    function(a, b, c, d) {
        return {
            restrict: "EA",
            scope: {
                index: "=",
                match: "=",
                query: "="
            },
            link: function(e, f, g) {
                var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
                a.get(h, {
                    cache: b
                }).success(function(a) {
                    f.replaceWith(c(a.trim())(e))
                })
            }
        }
    }
]).filter("typeaheadHighlight", function() {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }
    return function(b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache",
    function(a) {
        a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a href class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>\n')
    }
]), angular.module("template/accordion/accordion.html", []).run(["$templateCache",
    function(a) {
        a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
    }
]), angular.module("template/alert/alert.html", []).run(["$templateCache",
    function(a) {
        a.put("template/alert/alert.html", '<div class="alert" ng-class="[\'alert-\' + (type || \'warning\'), closeable ? \'alert-dismissable\' : null]" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
    }
]), angular.module("template/carousel/carousel.html", []).run(["$templateCache",
    function(a) {
        a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
    }
]), angular.module("template/carousel/slide.html", []).run(["$templateCache",
    function(a) {
        a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
    }
]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
    }
]), angular.module("template/datepicker/day.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n');
    }
]), angular.module("template/datepicker/month.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/datepicker/popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group pull-left">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
    }
]), angular.module("template/datepicker/year.html", []).run(["$templateCache",
    function(a) {
        a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
    }
]), angular.module("template/modal/backdrop.html", []).run(["$templateCache",
    function(a) {
        a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade {{ backdropClass }}"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
    }
]), angular.module("template/modal/window.html", []).run(["$templateCache",
    function(a) {
        a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" modal-transclude></div></div>\n</div>')
    }
]), angular.module("template/pagination/pager.html", []).run(["$templateCache",
    function(a) {
        a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
    }
]), angular.module("template/pagination/pagination.html", []).run(["$templateCache",
    function(a) {
        a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
    }
]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
    }
]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
    }
]), angular.module("template/popover/popover.html", []).run(["$templateCache",
    function(a) {
        a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
    }
]), angular.module("template/progressbar/bar.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progress.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
    }
]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache",
    function(a) {
        a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
    }
]), angular.module("template/rating/rating.html", []).run(["$templateCache",
    function(a) {
        a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
    }
]), angular.module("template/tabs/tab.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a href ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
    }
]), angular.module("template/tabs/tabset.html", []).run(["$templateCache",
    function(a) {
        a.put("template/tabs/tabset.html", '<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
    }
]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache",
    function(a) {
        a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
    }
]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache",
    function(a) {
        a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
    }
]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache",
    function(a) {
        a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-show="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>\n')
    }
]),
    function() {
        "use strict";

        function a(a) {
            var b = [];
            return angular.forEach(a.requires, function(a) {
                -1 === i.indexOf(a) && b.push(a)
            }), b
        }

        function b(a) {
            try {
                return angular.module(a)
            } catch (b) {
                if (/No module/.test(b) || b.message.indexOf("$injector:nomod") > -1) return !1
            }
        }

        function c(a) {
            try {
                return angular.module(a)
            } catch (b) {
                throw (/No module/.test(b) || b.message.indexOf("$injector:nomod") > -1) && (b.message = 'The module "' + a + '" that you are trying to load does not exist. ' + b.message), b
            }
        }

        function d(a, b, c, d) {
            if (b) {
                var e, g, h, i;
                for (e = 0, g = b.length; g > e; e++)
                    if (h = b[e], angular.isArray(h)) {
                        if (null !== a) {
                            if (!a.hasOwnProperty(h[0])) throw new Error("unsupported provider " + h[0]);
                            i = a[h[0]]
                        }
                        var j = f(h, c);
                        if ("invoke" !== h[1]) j && angular.isDefined(i) && i[h[1]].apply(i, h[2]);
                        else {
                            var k = function(a) {
                                var b = l.indexOf(c + "-" + a);
                                (-1 === b || d) && (-1 === b && l.push(c + "-" + a), angular.isDefined(i) && i[h[1]].apply(i, h[2]))
                            };
                            if (angular.isFunction(h[2][0])) k(h[2][0]);
                            else if (angular.isArray(h[2][0]))
                                for (var m = 0, n = h[2][0].length; n > m; m++) angular.isFunction(h[2][0][m]) && k(h[2][0][m])
                        }
                    }
            }
        }

        function e(a, b, c) {
            if (b) {
                var f, h, j, k = [];
                for (f = b.length - 1; f >= 0; f--)
                    if (h = b[f], "string" != typeof h && (h = g(h)), h && -1 === m.indexOf(h)) {
                        var l = -1 === i.indexOf(h);
                        if (j = angular.module(h), l && (i.push(h), e(a, j.requires, c)), j._runBlocks.length > 0)
                            for (n[h] = []; j._runBlocks.length > 0;) n[h].push(j._runBlocks.shift());
                        angular.isDefined(n[h]) && (l || c.rerun) && (k = k.concat(n[h])), d(a, j._invokeQueue, h, c.reconfig), d(a, j._configBlocks, h, c.reconfig), p(l ? "ocLazyLoad.moduleLoaded" : "ocLazyLoad.moduleReloaded", h), b.pop(), m.push(h)
                    }
                var o = a.getInstanceInjector();
                angular.forEach(k, function(a) {
                    o.invoke(a)
                })
            }
        }

        function f(a, b) {
            var c = a[2][0],
                d = a[1],
                e = !1;
            angular.isUndefined(k[b]) && (k[b] = {}), angular.isUndefined(k[b][d]) && (k[b][d] = []);
            var f = function(a) {
                e = !0, k[b][d].push(a), p("ocLazyLoad.componentLoaded", [b, d, a])
            };
            if (angular.isString(c) && -1 === k[b][d].indexOf(c)) f(c);
            else {
                if (!angular.isObject(c)) return !1;
                angular.forEach(c, function(a) {
                    angular.isString(a) && -1 === k[b][d].indexOf(a) && f(a)
                })
            }
            return e
        }

        function g(a) {
            var b = null;
            return angular.isString(a) ? b = a : angular.isObject(a) && a.hasOwnProperty("name") && angular.isString(a.name) && (b = a.name), b
        }

        function h(a) {
            if (0 === j.length) {
                var b = [a],
                    c = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"],
                    e = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/,
                    f = function(a) {
                        return a && b.push(a)
                    };
                angular.forEach(c, function(b) {
                    c[b] = !0, f(document.getElementById(b)), b = b.replace(":", "\\:"), a[0].querySelectorAll && (angular.forEach(a[0].querySelectorAll("." + b), f), angular.forEach(a[0].querySelectorAll("." + b + "\\:"), f), angular.forEach(a[0].querySelectorAll("[" + b + "]"), f))
                }), angular.forEach(b, function(b) {
                    if (0 === j.length) {
                        var d = " " + a.className + " ",
                            f = e.exec(d);
                        f ? j.push((f[2] || "").replace(/\s+/g, ",")) : angular.forEach(b.attributes, function(a) {
                            0 === j.length && c[a.name] && j.push(a.value)
                        })
                    }
                })
            }
            if (0 === j.length) throw "No module found during bootstrap, unable to init ocLazyLoad";
            var g = function h(a) {
                if (-1 === i.indexOf(a)) {
                    i.push(a);
                    var b = angular.module(a);
                    d(null, b._invokeQueue, a), d(null, b._configBlocks, a), angular.forEach(b.requires, h)
                }
            };
            angular.forEach(j, function(a) {
                g(a)
            })
        }
        var i = ["ng"],
            j = [],
            k = {}, l = [],
            m = [],
            n = {}, o = angular.module("oc.lazyLoad", ["ng"]),
            p = angular.noop;
        o.provider("$ocLazyLoad", ["$controllerProvider", "$provide", "$compileProvider", "$filterProvider", "$injector", "$animateProvider",
            function(d, f, j, k, l, n) {
                var o, q, r, s = {}, t = {
                        $controllerProvider: d,
                        $compileProvider: j,
                        $filterProvider: k,
                        $provide: f,
                        $injector: l,
                        $animateProvider: n
                    }, u = document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0],
                    v = !1,
                    w = !1;
                h(angular.element(window.document)), this.$get = ["$log", "$q", "$templateCache", "$http", "$rootElement", "$rootScope", "$cacheFactory", "$interval",
                    function(d, f, h, j, k, l, n, x) {
                        var y, z = n("ocLazyLoad"),
                            A = !1,
                            B = !1;
                        v || (d = {}, d.error = angular.noop, d.warn = angular.noop, d.info = angular.noop), t.getInstanceInjector = function() {
                            return y ? y : y = k.data("$injector") || angular.injector()
                        }, p = function(a, b) {
                            w && l.$broadcast(a, b), v && d.info(a, b)
                        };
                        var C = function(a, b, c) {
                            var d, e, g = f.defer(),
                                h = function(a) {
                                    var b = (new Date).getTime();
                                    return a.indexOf("?") >= 0 ? "&" === a.substring(0, a.length - 1) ? a + "_dc=" + b : a + "&_dc=" + b : a + "?_dc=" + b
                                };
                            switch (angular.isUndefined(z.get(b)) && z.put(b, g.promise), a) {
                                case "css":
                                    d = document.createElement("link"), d.type = "text/css", d.rel = "stylesheet", d.href = c.cache === !1 ? h(b) : b;
                                    break;
                                case "js":
                                    d = document.createElement("script"), d.src = c.cache === !1 ? h(b) : b;
                                    break;
                                default:
                                    g.reject(new Error('Requested type "' + a + '" is not known. Could not inject "' + b + '"'))
                            }
                            d.onload = d.onreadystatechange = function(a) {
                                d.readyState && !/^c|loade/.test(d.readyState) || e || (d.onload = d.onreadystatechange = null, e = 1, p("ocLazyLoad.fileLoaded", b), g.resolve())
                            }, d.onerror = function(a) {
                                g.reject(new Error("Unable to load " + b))
                            }, d.async = c.serie ? 0 : 1;
                            var i = u.lastChild;
                            if (c.insertBefore) {
                                var j = angular.element(c.insertBefore);
                                j && j.length > 0 && (i = j[0])
                            }
                            if (u.insertBefore(d, i), "css" == a) {
                                if (!A) {
                                    var k = navigator.userAgent.toLowerCase();
                                    if (/iP(hone|od|ad)/.test(navigator.platform)) {
                                        var l = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                                            m = parseFloat([parseInt(l[1], 10), parseInt(l[2], 10), parseInt(l[3] || 0, 10)].join("."));
                                        B = 6 > m
                                    } else if (k.indexOf("android") > -1) {
                                        var n = parseFloat(k.slice(k.indexOf("android") + 8));
                                        B = 4.4 > n
                                    } else if (k.indexOf("safari") > -1 && -1 == k.indexOf("chrome")) {
                                        var o = parseFloat(k.match(/version\/([\.\d]+)/i)[1]);
                                        B = 6 > o
                                    }
                                }
                                if (B) var q = 1e3,
                                    r = x(function() {
                                        try {
                                            d.sheet.cssRules, x.cancel(r), d.onload()
                                        } catch (a) {
                                            --q <= 0 && d.onerror()
                                        }
                                    }, 20)
                            }
                            return g.promise
                        };
                        angular.isUndefined(o) && (o = function(a, b, c) {
                            var d = [];
                            angular.forEach(a, function(a) {
                                d.push(C("js", a, c))
                            }), f.all(d).then(function() {
                                b()
                            }, function(a) {
                                b(a)
                            })
                        }, o.ocLazyLoadLoader = !0), angular.isUndefined(q) && (q = function(a, b, c) {
                            var d = [];
                            angular.forEach(a, function(a) {
                                d.push(C("css", a, c))
                            }), f.all(d).then(function() {
                                b()
                            }, function(a) {
                                b(a)
                            })
                        }, q.ocLazyLoadLoader = !0), angular.isUndefined(r) && (r = function(a, b, c) {
                            var d = [];
                            return angular.forEach(a, function(a) {
                                var b = f.defer();
                                d.push(b.promise), j.get(a, c).success(function(c) {
                                    angular.isString(c) && c.length > 0 && angular.forEach(angular.element(c), function(a) {
                                        "SCRIPT" === a.nodeName && "text/ng-template" === a.type && h.put(a.id, a.innerHTML)
                                    }), angular.isUndefined(z.get(a)) && z.put(a, !0), b.resolve()
                                }).error(function(c) {
                                    b.reject(new Error('Unable to load template file "' + a + '": ' + c))
                                })
                            }), f.all(d).then(function() {
                                b()
                            }, function(a) {
                                b(a)
                            })
                        }, r.ocLazyLoadLoader = !0);
                        var D = function(a, b) {
                            var c = [],
                                e = [],
                                g = [],
                                h = [],
                                i = null;
                            angular.extend(b || {}, a);
                            var j = function(a) {
                                i = z.get(a), angular.isUndefined(i) || b.cache === !1 ? /\.(css|less)[^\.]*$/.test(a) && -1 === c.indexOf(a) ? c.push(a) : /\.(htm|html)[^\.]*$/.test(a) && -1 === e.indexOf(a) ? e.push(a) : -1 === g.indexOf(a) && g.push(a) : i && h.push(i)
                            };
                            if (b.serie ? j(b.files.shift()) : angular.forEach(b.files, function(a) {
                                    j(a)
                                }), c.length > 0) {
                                var k = f.defer();
                                q(c, function(a) {
                                    angular.isDefined(a) && q.hasOwnProperty("ocLazyLoadLoader") ? (d.error(a), k.reject(a)) : k.resolve()
                                }, b), h.push(k.promise)
                            }
                            if (e.length > 0) {
                                var l = f.defer();
                                r(e, function(a) {
                                    angular.isDefined(a) && r.hasOwnProperty("ocLazyLoadLoader") ? (d.error(a), l.reject(a)) : l.resolve()
                                }, b), h.push(l.promise)
                            }
                            if (g.length > 0) {
                                var m = f.defer();
                                o(g, function(a) {
                                    angular.isDefined(a) && o.hasOwnProperty("ocLazyLoadLoader") ? (d.error(a), m.reject(a)) : m.resolve()
                                }, b), h.push(m.promise)
                            }
                            return b.serie && b.files.length > 0 ? f.all(h).then(function() {
                                return D(a, b)
                            }) : f.all(h)
                        };
                        return {
                            getModuleConfig: function(a) {
                                if (!angular.isString(a)) throw new Error("You need to give the name of the module to get");
                                return s[a] ? s[a] : null
                            },
                            setModuleConfig: function(a) {
                                if (!angular.isObject(a)) throw new Error("You need to give the module config object to set");
                                return s[a.name] = a, a
                            },
                            getModules: function() {
                                return i
                            },
                            isLoaded: function(a) {
                                var c = function(a) {
                                    var c = i.indexOf(a) > -1;
                                    return c || (c = !! b(a)), c
                                };
                                if (angular.isString(a) && (a = [a]), angular.isArray(a)) {
                                    var d, e;
                                    for (d = 0, e = a.length; e > d; d++)
                                        if (!c(a[d])) return !1;
                                    return !0
                                }
                                throw new Error("You need to define the module(s) name(s)")
                            },
                            load: function(h, j) {
                                var k, l, n = this,
                                    o = null,
                                    p = [],
                                    q = [],
                                    r = f.defer();
                                if (angular.isUndefined(j) && (j = {}), angular.isArray(h)) return angular.forEach(h, function(a) {
                                    a && q.push(n.load(a, j))
                                }), f.all(q).then(function() {
                                    r.resolve(h)
                                }, function(a) {
                                    r.reject(a)
                                }), r.promise;
                                if (k = g(h), "string" == typeof h ? (o = n.getModuleConfig(h), o || (o = {
                                        files: [h]
                                    }, k = null)) : "object" == typeof h && (o = n.setModuleConfig(h)), null === o ? (l = 'Module "' + k + '" is not configured, cannot load.', d.error(l), r.reject(new Error(l))) : angular.isDefined(o.template) && (angular.isUndefined(o.files) && (o.files = []), angular.isString(o.template) ? o.files.push(o.template) : angular.isArray(o.template) && o.files.concat(o.template)), p.push = function(a) {
                                        -1 === this.indexOf(a) && Array.prototype.push.apply(this, arguments)
                                    }, angular.isDefined(k) && b(k) && -1 !== i.indexOf(k) && (p.push(k), angular.isUndefined(o.files))) return r.resolve(), r.promise;
                                var s = {};
                                angular.extend(s, j, o);
                                var u = function v(e) {
                                    var h, i, j, k, l = [];
                                    if (h = g(e), null === h) return f.when();
                                    try {
                                        i = c(h)
                                    } catch (m) {
                                        var o = f.defer();
                                        return d.error(m.message), o.reject(m), o.promise
                                    }
                                    return j = a(i), angular.forEach(j, function(a) {
                                        if ("string" == typeof a) {
                                            var c = n.getModuleConfig(a);
                                            if (null === c) return void p.push(a);
                                            a = c
                                        }
                                        return b(a.name) ? void("string" != typeof e && (k = a.files.filter(function(b) {
                                            return n.getModuleConfig(a.name).files.indexOf(b) < 0
                                        }), 0 !== k.length && d.warn('Module "', h, '" attempted to redefine configuration for dependency. "', a.name, '"\n Additional Files Loaded:', k), l.push(D(a.files, s).then(function() {
                                            return v(a)
                                        })))) : ("object" == typeof a && (a.hasOwnProperty("name") && a.name && (n.setModuleConfig(a), p.push(a.name)), a.hasOwnProperty("css") && 0 !== a.css.length && angular.forEach(a.css, function(a) {
                                            C("css", a, s)
                                        })), void(a.hasOwnProperty("files") && 0 !== a.files.length && a.files && l.push(D(a, s).then(function() {
                                            return v(a)
                                        }))))
                                    }), f.all(l)
                                };
                                return D(o, s).then(function() {
                                    null === k ? r.resolve(h) : (p.push(k), u(k).then(function() {
                                        try {
                                            m = [], e(t, p, s)
                                        } catch (a) {
                                            return d.error(a.message), void r.reject(a)
                                        }
                                        r.resolve(h)
                                    }, function(a) {
                                        r.reject(a)
                                    }))
                                }, function(a) {
                                    r.reject(a)
                                }), r.promise
                            }
                        }
                    }
                ], this.config = function(a) {
                    if (angular.isDefined(a.jsLoader) || angular.isDefined(a.asyncLoader)) {
                        if (!angular.isFunction(a.jsLoader || a.asyncLoader)) throw "The js loader needs to be a function";
                        o = a.jsLoader || a.asyncLoader
                    }
                    if (angular.isDefined(a.cssLoader)) {
                        if (!angular.isFunction(a.cssLoader)) throw "The css loader needs to be a function";
                        q = a.cssLoader
                    }
                    if (angular.isDefined(a.templatesLoader)) {
                        if (!angular.isFunction(a.templatesLoader)) throw "The template loader needs to be a function";
                        r = a.templatesLoader
                    }
                    angular.isDefined(a.modules) && (angular.isArray(a.modules) ? angular.forEach(a.modules, function(a) {
                        s[a.name] = a
                    }) : s[a.modules.name] = a.modules), angular.isDefined(a.debug) && (v = a.debug), angular.isDefined(a.events) && (w = a.events)
                }
            }
        ]), o.directive("ocLazyLoad", ["$ocLazyLoad", "$compile", "$animate", "$parse",
            function(a, b, c, d) {
                return {
                    restrict: "A",
                    terminal: !0,
                    priority: 1e3,
                    compile: function(e, f) {
                        var g = e[0].innerHTML;
                        return e.html(""),
                            function(e, f, h) {
                                var i = d(h.ocLazyLoad);
                                e.$watch(function() {
                                    return i(e) || h.ocLazyLoad
                                }, function(d) {
                                    angular.isDefined(d) && a.load(d).then(function(a) {
                                        c.enter(b(g)(e), null, f)
                                    })
                                }, !0)
                            }
                    }
                }
            }
        ]);
        var q = angular.bootstrap;
        angular.bootstrap = function(a, b, c) {
            return j = b.slice(), q(a, b, c)
        }, Array.prototype.indexOf || (Array.prototype.indexOf = function(a, b) {
            var c;
            if (null == this) throw new TypeError('"this" is null or not defined');
            var d = Object(this),
                e = d.length >>> 0;
            if (0 === e) return -1;
            var f = +b || 0;
            if (Math.abs(f) === 1 / 0 && (f = 0), f >= e) return -1;
            for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); e > c;) {
                if (c in d && d[c] === a) return c;
                c++
            }
            return -1
        })
    }(), angular.module("pascalprecht.translate", ["ng"]).run(["$translate",
    function(a) {
        var b = a.storageKey(),
            c = a.storage(),
            d = function() {
                var d = a.preferredLanguage();
                angular.isString(d) ? a.use(d) : c.put(b, a.use())
            };
        c ? c.get(b) ? a.use(c.get(b))["catch"](d) : d() : angular.isString(a.preferredLanguage()) && a.use(a.preferredLanguage())
    }
]), angular.module("pascalprecht.translate").provider("$translate", ["$STORAGE_KEY",
    function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q = {}, r = [],
            s = a,
            t = [],
            u = !1,
            v = "translate-cloak",
            w = !1,
            x = ".",
            y = "2.5.2",
            z = function() {
                var a, b, c = window.navigator,
                    d = ["language", "browserLanguage", "systemLanguage", "userLanguage"];
                if (angular.isArray(c.languages))
                    for (a = 0; a < c.languages.length; a++)
                        if (b = c.languages[a], b && b.length) return b;
                for (a = 0; a < d.length; a++)
                    if (b = c[d[a]], b && b.length) return b;
                return null
            };
        z.displayName = "angular-translate/service: getFirstBrowserLanguage";
        var A = function() {
            return (z() || "").split("-").join("_")
        };
        A.displayName = "angular-translate/service: getLocale";
        var B = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return c;
            return -1
        }, C = function() {
            return this.replace(/^\s+|\s+$/g, "")
        }, D = function(a) {
            for (var b = [], d = angular.lowercase(a), e = 0, f = r.length; f > e; e++) b.push(angular.lowercase(r[e]));
            if (B(b, d) > -1) return a;
            if (c) {
                var g;
                for (var h in c) {
                    var i = !1,
                        j = Object.prototype.hasOwnProperty.call(c, h) && angular.lowercase(h) === angular.lowercase(a);
                    if ("*" === h.slice(-1) && (i = h.slice(0, -1) === a.slice(0, h.length - 1)), (j || i) && (g = c[h], B(b, angular.lowercase(g)) > -1)) return g
                }
            }
            var k = a.split("_");
            return k.length > 1 && B(b, angular.lowercase(k[0])) > -1 ? k[0] : a
        }, E = function(a, b) {
            if (!a && !b) return q;
            if (a && !b) {
                if (angular.isString(a)) return q[a]
            } else angular.isObject(q[a]) || (q[a] = {}), angular.extend(q[a], F(b));
            return this
        };
        this.translations = E, this.cloakClassName = function(a) {
            return a ? (v = a, this) : v
        };
        var F = function(a, b, c, d) {
            var e, f, g, h;
            b || (b = []), c || (c = {});
            for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (h = a[e], angular.isObject(h) ? F(h, b.concat(e), c, e) : (f = b.length ? "" + b.join(x) + x + e : e, b.length && e === d && (g = "" + b.join(x), c[g] = "@:" + f), c[f] = h));
            return c
        };
        this.addInterpolation = function(a) {
            return t.push(a), this
        }, this.useMessageFormatInterpolation = function() {
            return this.useInterpolation("$translateMessageFormatInterpolation")
        }, this.useInterpolation = function(a) {
            return k = a, this
        }, this.useSanitizeValueStrategy = function(a) {
            return u = a, this
        }, this.preferredLanguage = function(a) {
            return G(a), this
        };
        var G = function(a) {
            return a && (b = a), b
        };
        this.translationNotFoundIndicator = function(a) {
            return this.translationNotFoundIndicatorLeft(a), this.translationNotFoundIndicatorRight(a), this
        }, this.translationNotFoundIndicatorLeft = function(a) {
            return a ? (n = a, this) : n
        }, this.translationNotFoundIndicatorRight = function(a) {
            return a ? (o = a, this) : o
        }, this.fallbackLanguage = function(a) {
            return H(a), this
        };
        var H = function(a) {
            return a ? (angular.isString(a) ? (e = !0, d = [a]) : angular.isArray(a) && (e = !1, d = a), angular.isString(b) && B(d, b) < 0 && d.push(b), this) : e ? d[0] : d
        };
        this.use = function(a) {
            if (a) {
                if (!q[a] && !l) throw new Error("$translateProvider couldn't find translationTable for langKey: '" + a + "'");
                return f = a, this
            }
            return f
        };
        var I = function(a) {
            return a ? void(s = a) : i ? i + s : s
        };
        this.storageKey = I, this.useUrlLoader = function(a, b) {
            return this.useLoader("$translateUrlLoader", angular.extend({
                url: a
            }, b))
        }, this.useStaticFilesLoader = function(a) {
            return this.useLoader("$translateStaticFilesLoader", a)
        }, this.useLoader = function(a, b) {
            return l = a, m = b || {}, this
        }, this.useLocalStorage = function() {
            return this.useStorage("$translateLocalStorage")
        }, this.useCookieStorage = function() {
            return this.useStorage("$translateCookieStorage")
        }, this.useStorage = function(a) {
            return h = a, this
        }, this.storagePrefix = function(a) {
            return a ? (i = a, this) : a
        }, this.useMissingTranslationHandlerLog = function() {
            return this.useMissingTranslationHandler("$translateMissingTranslationHandlerLog")
        }, this.useMissingTranslationHandler = function(a) {
            return j = a, this
        }, this.usePostCompiling = function(a) {
            return w = !! a, this
        }, this.determinePreferredLanguage = function(a) {
            var c = a && angular.isFunction(a) ? a() : A();
            return b = r.length ? D(c) : c, this
        }, this.registerAvailableLanguageKeys = function(a, b) {
            return a ? (r = a, b && (c = b), this) : r
        }, this.useLoaderCache = function(a) {
            return a === !1 ? p = void 0 : a === !0 ? p = !0 : "undefined" == typeof a ? p = "$translationCache" : a && (p = a), this
        }, this.$get = ["$log", "$injector", "$rootScope", "$q",
            function(a, c, i, r) {
                var x, z, A, J = c.get(k || "$translateDefaultInterpolation"),
                    K = !1,
                    L = {}, M = {}, N = function(a, c, e) {
                        if (angular.isArray(a)) {
                            var g = function(a) {
                                for (var b = {}, d = [], f = function(a) {
                                    var d = r.defer(),
                                        f = function(c) {
                                            b[a] = c, d.resolve([a, c])
                                        };
                                    return N(a, c, e).then(f, f), d.promise
                                }, g = 0, h = a.length; h > g; g++) d.push(f(a[g]));
                                return r.all(d).then(function() {
                                    return b
                                })
                            };
                            return g(a)
                        }
                        var i = r.defer();
                        a && (a = C.apply(a));
                        var j = function() {
                            var a = b ? M[b] : M[f];
                            if (z = 0, h && !a) {
                                var c = x.get(s);
                                if (a = M[c], d && d.length) {
                                    var e = B(d, c);
                                    z = 0 === e ? 1 : 0, B(d, b) < 0 && d.push(b)
                                }
                            }
                            return a
                        }();
                        return j ? j.then(function() {
                            Z(a, c, e).then(i.resolve, i.reject)
                        }, i.reject) : Z(a, c, e).then(i.resolve, i.reject), i.promise
                    }, O = function(a) {
                        return n && (a = [n, a].join(" ")), o && (a = [a, o].join(" ")), a
                    }, P = function(a) {
                        f = a, i.$emit("$translateChangeSuccess", {
                            language: a
                        }), h && x.put(N.storageKey(), f), J.setLocale(f), angular.forEach(L, function(a, b) {
                            L[b].setLocale(f)
                        }), i.$emit("$translateChangeEnd", {
                            language: a
                        })
                    }, Q = function(a) {
                        if (!a) throw "No language key specified for loading.";
                        var b = r.defer();
                        i.$emit("$translateLoadingStart", {
                            language: a
                        }), K = !0;
                        var d = p;
                        "string" == typeof d && (d = c.get(d));
                        var e = angular.extend({}, m, {
                            key: a,
                            $http: angular.extend({}, {
                                cache: d
                            }, m.$http)
                        });
                        return c.get(l)(e).then(function(c) {
                            var d = {};
                            i.$emit("$translateLoadingSuccess", {
                                language: a
                            }), angular.isArray(c) ? angular.forEach(c, function(a) {
                                angular.extend(d, F(a))
                            }) : angular.extend(d, F(c)), K = !1, b.resolve({
                                key: a,
                                table: d
                            }), i.$emit("$translateLoadingEnd", {
                                language: a
                            })
                        }, function(a) {
                            i.$emit("$translateLoadingError", {
                                language: a
                            }), b.reject(a), i.$emit("$translateLoadingEnd", {
                                language: a
                            })
                        }), b.promise
                    };
                if (h && (x = c.get(h), !x.get || !x.put)) throw new Error("Couldn't use storage '" + h + "', missing get() or put() method!");
                angular.isFunction(J.useSanitizeValueStrategy) && J.useSanitizeValueStrategy(u), t.length && angular.forEach(t, function(a) {
                    var d = c.get(a);
                    d.setLocale(b || f), angular.isFunction(d.useSanitizeValueStrategy) && d.useSanitizeValueStrategy(u), L[d.getInterpolationIdentifier()] = d
                });
                var R = function(a) {
                    var b = r.defer();
                    return Object.prototype.hasOwnProperty.call(q, a) ? b.resolve(q[a]) : M[a] ? M[a].then(function(a) {
                        E(a.key, a.table), b.resolve(a.table)
                    }, b.reject) : b.reject(), b.promise
                }, S = function(a, b, c, d) {
                    var e = r.defer();
                    return R(a).then(function(g) {
                        Object.prototype.hasOwnProperty.call(g, b) ? (d.setLocale(a), e.resolve(d.interpolate(g[b], c)), d.setLocale(f)) : e.reject()
                    }, e.reject), e.promise
                }, T = function(a, b, c, d) {
                    var e, g = q[a];
                    return g && Object.prototype.hasOwnProperty.call(g, b) && (d.setLocale(a), e = d.interpolate(g[b], c), d.setLocale(f)), e
                }, U = function(a) {
                    if (j) {
                        var b = c.get(j)(a, f);
                        return void 0 !== b ? b : a
                    }
                    return a
                }, V = function(a, b, c, e) {
                    var f = r.defer();
                    if (a < d.length) {
                        var g = d[a];
                        S(g, b, c, e).then(f.resolve, function() {
                            V(a + 1, b, c, e).then(f.resolve)
                        })
                    } else f.resolve(U(b));
                    return f.promise
                }, W = function(a, b, c, e) {
                    var f;
                    if (a < d.length) {
                        var g = d[a];
                        f = T(g, b, c, e), f || (f = W(a + 1, b, c, e))
                    }
                    return f
                }, X = function(a, b, c) {
                    return V(A > 0 ? A : z, a, b, c)
                }, Y = function(a, b, c) {
                    return W(A > 0 ? A : z, a, b, c)
                }, Z = function(a, b, c) {
                    var e = r.defer(),
                        g = f ? q[f] : q,
                        h = c ? L[c] : J;
                    if (g && Object.prototype.hasOwnProperty.call(g, a)) {
                        var i = g[a];
                        "@:" === i.substr(0, 2) ? N(i.substr(2), b, c).then(e.resolve, e.reject) : e.resolve(h.interpolate(i, b))
                    } else {
                        var k;
                        j && !K && (k = U(a)), f && d && d.length ? X(a, b, h).then(function(a) {
                            e.resolve(a)
                        }, function(a) {
                            e.reject(O(a))
                        }) : j && !K && k ? e.resolve(k) : e.reject(O(a))
                    }
                    return e.promise
                }, $ = function(a, b, c) {
                    var e, g = f ? q[f] : q,
                        h = c ? L[c] : J;
                    if (g && Object.prototype.hasOwnProperty.call(g, a)) {
                        var i = g[a];
                        e = "@:" === i.substr(0, 2) ? $(i.substr(2), b, c) : h.interpolate(i, b)
                    } else {
                        var k;
                        j && !K && (k = U(a)), f && d && d.length ? (z = 0, e = Y(a, b, h)) : e = j && !K && k ? k : O(a)
                    }
                    return e
                };
                if (N.preferredLanguage = function(a) {
                        return a && G(a), b
                    }, N.cloakClassName = function() {
                        return v
                    }, N.fallbackLanguage = function(a) {
                        if (void 0 !== a && null !== a) {
                            if (H(a), l && d && d.length)
                                for (var b = 0, c = d.length; c > b; b++) M[d[b]] || (M[d[b]] = Q(d[b]));
                            N.use(N.use())
                        }
                        return e ? d[0] : d
                    }, N.useFallbackLanguage = function(a) {
                        if (void 0 !== a && null !== a)
                            if (a) {
                                var b = B(d, a);
                                b > -1 && (A = b)
                            } else A = 0
                    }, N.proposedLanguage = function() {
                        return g
                    }, N.storage = function() {
                        return x
                    }, N.use = function(a) {
                        if (!a) return f;
                        var b = r.defer();
                        i.$emit("$translateChangeStart", {
                            language: a
                        });
                        var c = D(a);
                        return c && (a = c), q[a] || !l || M[a] ? (b.resolve(a), P(a)) : (g = a, M[a] = Q(a).then(function(c) {
                            return E(c.key, c.table), b.resolve(c.key), P(c.key), g === a && (g = void 0), c
                        }, function(a) {
                            g === a && (g = void 0), i.$emit("$translateChangeError", {
                                language: a
                            }), b.reject(a), i.$emit("$translateChangeEnd", {
                                language: a
                            })
                        })), b.promise
                    }, N.storageKey = function() {
                        return I()
                    }, N.isPostCompilingEnabled = function() {
                        return w
                    }, N.refresh = function(a) {
                        function b() {
                            e.resolve(), i.$emit("$translateRefreshEnd", {
                                language: a
                            })
                        }

                        function c() {
                            e.reject(), i.$emit("$translateRefreshEnd", {
                                language: a
                            })
                        }
                        if (!l) throw new Error("Couldn't refresh translation table, no loader registered!");
                        var e = r.defer();
                        if (i.$emit("$translateRefreshStart", {
                                language: a
                            }), a) q[a] ? Q(a).then(function(c) {
                            E(c.key, c.table), a === f && P(f), b()
                        }, c) : c();
                        else {
                            var g = [],
                                h = {};
                            if (d && d.length)
                                for (var j = 0, k = d.length; k > j; j++) g.push(Q(d[j])), h[d[j]] = !0;
                            f && !h[f] && g.push(Q(f)), r.all(g).then(function(a) {
                                angular.forEach(a, function(a) {
                                    q[a.key] && delete q[a.key], E(a.key, a.table)
                                }), f && P(f), b()
                            })
                        }
                        return e.promise
                    }, N.instant = function(a, c, e) {
                        if (null === a || angular.isUndefined(a)) return a;
                        if (angular.isArray(a)) {
                            for (var g = {}, h = 0, i = a.length; i > h; h++) g[a[h]] = N.instant(a[h], c, e);
                            return g
                        }
                        if (angular.isString(a) && a.length < 1) return a;
                        a && (a = C.apply(a));
                        var k, l = [];
                        b && l.push(b), f && l.push(f), d && d.length && (l = l.concat(d));
                        for (var m = 0, n = l.length; n > m; m++) {
                            var o = l[m];
                            if (q[o] && "undefined" != typeof q[o][a] && (k = $(a, c, e)), "undefined" != typeof k) break
                        }
                        return k || "" === k || (k = J.interpolate(a, c), j && !K && (k = U(a))), k
                    }, N.versionInfo = function() {
                        return y
                    }, N.loaderCache = function() {
                        return p
                    }, l && (angular.equals(q, {}) && N.use(N.use()), d && d.length))
                    for (var _ = function(a) {
                        return E(a.key, a.table), i.$emit("$translateChangeEnd", {
                            language: a.key
                        }), a
                    }, aa = 0, ba = d.length; ba > aa; aa++) M[d[aa]] = Q(d[aa]).then(_);
                return N
            }
        ]
    }
]), angular.module("pascalprecht.translate").factory("$translateDefaultInterpolation", ["$interpolate",
    function(a) {
        var b, c = {}, d = "default",
            e = null,
            f = {
                escaped: function(a) {
                    var b = {};
                    for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && (b[c] = angular.element("<div></div>").text(a[c]).html());
                    return b
                }
            }, g = function(a) {
                var b;
                return b = angular.isFunction(f[e]) ? f[e](a) : a
            };
        return c.setLocale = function(a) {
            b = a
        }, c.getInterpolationIdentifier = function() {
            return d
        }, c.useSanitizeValueStrategy = function(a) {
            return e = a, this
        }, c.interpolate = function(b, c) {
            return e && (c = g(c)), a(b)(c || {})
        }, c
    }
]), angular.module("pascalprecht.translate").constant("$STORAGE_KEY", "NG_TRANSLATE_LANG_KEY"), angular.module("pascalprecht.translate").directive("translate", ["$translate", "$q", "$interpolate", "$compile", "$parse", "$rootScope",
    function(a, b, c, d, e, f) {
        return {
            restrict: "AE",
            scope: !0,
            compile: function(b, g) {
                var h = g.translateValues ? g.translateValues : void 0,
                    i = g.translateInterpolation ? g.translateInterpolation : void 0,
                    j = b[0].outerHTML.match(/translate-value-+/i),
                    k = "^(.*)(" + c.startSymbol() + ".*" + c.endSymbol() + ")(.*)",
                    l = "^(.*)" + c.startSymbol() + "(.*)" + c.endSymbol() + "(.*)";
                return function(b, m, n) {
                    b.interpolateParams = {}, b.preText = "", b.postText = "";
                    var o = {}, p = function(a) {
                        if (angular.equals(a, "") || !angular.isDefined(a)) {
                            var d = m.text().match(k);
                            angular.isArray(d) ? (b.preText = d[1], b.postText = d[3], o.translate = c(d[2])(b.$parent), watcherMatches = m.text().match(l), angular.isArray(watcherMatches) && watcherMatches[2] && watcherMatches[2].length && b.$watch(watcherMatches[2], function(a) {
                                o.translate = a, u()
                            })) : o.translate = m.text().replace(/^\s+|\s+$/g, "")
                        } else o.translate = a;
                        u()
                    }, q = function(a) {
                        n.$observe(a, function(b) {
                            o[a] = b, u()
                        })
                    };
                    n.$observe("translate", function(a) {
                        p(a)
                    });
                    for (var r in n) n.hasOwnProperty(r) && "translateAttr" === r.substr(0, 13) && q(r);
                    if (n.$observe("translateDefault", function(a) {
                            b.defaultText = a
                        }), h && n.$observe("translateValues", function(a) {
                            a && b.$parent.$watch(function() {
                                angular.extend(b.interpolateParams, e(a)(b.$parent))
                            })
                        }), j) {
                        var s = function(a) {
                            n.$observe(a, function(c) {
                                var d = angular.lowercase(a.substr(14, 1)) + a.substr(15);
                                b.interpolateParams[d] = c
                            })
                        };
                        for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && "translateValue" === t.substr(0, 14) && "translateValues" !== t && s(t)
                    }
                    var u = function() {
                        for (var a in o) o.hasOwnProperty(a) && o[a] && v(a, o[a], b, b.interpolateParams)
                    }, v = function(b, c, d, e) {
                        a(c, e, i).then(function(a) {
                            w(a, d, !0, b)
                        }, function(a) {
                            w(a, d, !1, b)
                        })
                    }, w = function(b, c, e, f) {
                        if ("translate" === f) {
                            e || "undefined" == typeof c.defaultText || (b = c.defaultText), m.html(c.preText + b + c.postText);
                            var h = a.isPostCompilingEnabled(),
                                i = "undefined" != typeof g.translateCompile,
                                j = i && "false" !== g.translateCompile;
                            (h && !i || j) && d(m.contents())(c)
                        } else {
                            e || "undefined" == typeof c.defaultText || (b = c.defaultText);
                            var k = n.$attr[f].substr(15);
                            m.attr(k, b)
                        }
                    };
                    b.$watch("interpolateParams", u, !0);
                    var x = f.$on("$translateChangeSuccess", u);
                    m.text().length && p(""), u(), b.$on("$destroy", x)
                }
            }
        }
    }
]), angular.module("pascalprecht.translate").directive("translateCloak", ["$rootScope", "$translate",
    function(a, b) {
        return {
            compile: function(c) {
                var d = function() {
                    c.addClass(b.cloakClassName())
                }, e = function() {
                    c.removeClass(b.cloakClassName())
                }, f = a.$on("$translateChangeEnd", function() {
                    e(), f(), f = null
                });
                return d(),
                    function(a, c, f) {
                        f.translateCloak && f.translateCloak.length && f.$observe("translateCloak", function(a) {
                            b(a).then(e, d)
                        })
                    }
            }
        }
    }
]), angular.module("pascalprecht.translate").filter("translate", ["$parse", "$translate",
    function(a, b) {
        var c = function(c, d, e) {
            return angular.isObject(d) || (d = a(d)(this)), b.instant(c, d, e)
        };
        return c.$stateful = !0, c
    }
]), angular.module("pascalprecht.translate").factory("$translateStaticFilesLoader", ["$q", "$http",
    function(a, b) {
        return function(c) {
            if (!c || !angular.isString(c.prefix) || !angular.isString(c.suffix)) throw new Error("Couldn't load static files, no prefix or suffix specified!");
            var d = a.defer();
            return b(angular.extend({
                url: [c.prefix, c.key, c.suffix].join(""),
                method: "GET",
                params: ""
            }, c.$http)).success(function(a) {
                d.resolve(a)
            }).error(function(a) {
                d.reject(c.key)
            }), d.promise
        }
    }
]), angular.module("pascalprecht.translate").factory("$translateCookieStorage", ["$cookieStore",
    function(a) {
        var b = {
            get: function(b) {
                return a.get(b)
            },
            set: function(b, c) {
                a.put(b, c)
            },
            put: function(b, c) {
                a.put(b, c)
            }
        };
        return b
    }
]), angular.module("pascalprecht.translate").factory("$translateLocalStorage", ["$window", "$translateCookieStorage",
    function(a, b) {
        var c = function() {
                var b;
                return {
                    get: function(c) {
                        return b || (b = a.localStorage.getItem(c)), b
                    },
                    set: function(c, d) {
                        b = d, a.localStorage.setItem(c, d)
                    },
                    put: function(c, d) {
                        b = d, a.localStorage.setItem(c, d)
                    }
                }
            }(),
            d = "localStorage" in a;
        if (d) {
            var e = "pascalprecht.translate.storageTest";
            try {
                null !== a.localStorage ? (a.localStorage.setItem(e, "foo"), a.localStorage.removeItem(e), d = !0) : d = !1
            } catch (f) {
                d = !1
            }
        }
        var g = d ? c : b;
        return g
    }
]), angular.module("app", ["ngAnimate", "ngCookies", "ngResource", "ngSanitize", "ngTouch", "ngStorage", "ui.router", "ui.bootstrap", "ui.utils", "ui.load", "ui.jq", "oc.lazyLoad", "pascalprecht.translate"]);
var app = angular.module("app").config(["$controllerProvider", "$compileProvider", "$filterProvider", "$provide",
    function(a, b, c, d) {
        app.controller = a.register, app.directive = b.directive, app.filter = c.register, app.factory = d.factory, app.service = d.service, app.constant = d.constant, app.value = d.value
    }
]).config(["$translateProvider",
    function(a) {
        a.useStaticFilesLoader({
            prefix: "l10n/",
            suffix: ".js"
        }), a.preferredLanguage("en"), a.useLocalStorage()
    }
]);
angular.module("app").constant("JQ_CONFIG", {
    easyPieChart: ["../bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.fill.js"],
    sparkline: ["../bower_components/jquery.sparkline/dist/jquery.sparkline.retina.js"],
    plot: ["../bower_components/flot/jquery.flot.js", "../bower_components/flot/jquery.flot.pie.js", "../bower_components/flot/jquery.flot.resize.js", "../bower_components/flot.tooltip/js/jquery.flot.tooltip.js", "../bower_components/flot.orderbars/js/jquery.flot.orderBars.js", "../bower_components/flot-spline/js/jquery.flot.spline.js"],
    moment: ["../bower_components/moment/moment.js"],
    screenfull: ["../bower_components/screenfull/dist/screenfull.min.js"],
    slimScroll: ["../bower_components/slimscroll/jquery.slimscroll.min.js"],
    sortable: ["../bower_components/html5sortable/jquery.sortable.js"],
    nestable: ["../bower_components/nestable/jquery.nestable.js", "../bower_components/nestable/jquery.nestable.css"],
    filestyle: ["../bower_components/bootstrap-filestyle/src/bootstrap-filestyle.js"],
    slider: ["../bower_components/bootstrap-slider/bootstrap-slider.js", "../bower_components/bootstrap-slider/bootstrap-slider.css"],
    chosen: ["../bower_components/chosen/chosen.jquery.min.js", "../bower_components/bootstrap-chosen/bootstrap-chosen.css"],
    TouchSpin: ["../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js", "../bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css"],
    wysiwyg: ["../bower_components/bootstrap-wysiwyg/bootstrap-wysiwyg.js", "../bower_components/bootstrap-wysiwyg/external/jquery.hotkeys.js"],
    dataTable: ["../bower_components/datatables/media/js/jquery.dataTables.min.js", "../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.js", "../bower_components/plugins/integration/bootstrap/3/dataTables.bootstrap.css"],
    vectorMap: ["../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.min.js", "../bower_components/bower-jvectormap/jquery-jvectormap-world-mill-en.js", "../bower_components/bower-jvectormap/jquery-jvectormap-us-aea-en.js", "../bower_components/bower-jvectormap/jquery-jvectormap-1.2.2.css"],
    footable: ["../bower_components/footable/dist/footable.all.min.js", "../bower_components/footable/css/footable.core.css"],
    fullcalendar: ["../bower_components/moment/moment.js", "../bower_components/fullcalendar/dist/fullcalendar.min.js", "../bower_components/fullcalendar/dist/fullcalendar.css", "../bower_components/fullcalendar/dist/fullcalendar.theme.css"],
    daterangepicker: ["../bower_components/moment/moment.js", "../bower_components/bootstrap-daterangepicker/daterangepicker.js", "../bower_components/bootstrap-daterangepicker/daterangepicker-bs3.css"],
    tagsinput: ["../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.js", "../bower_components/bootstrap-tagsinput/dist/bootstrap-tagsinput.css"]
}).config(["$ocLazyLoadProvider",
    function(a) {
        a.config({
            debug: !0,
            events: !0,
            modules: [{
                name: "ngGrid",
                files: ["../bower_components/ng-grid/build/ng-grid.min.js", "../bower_components/ng-grid/ng-grid.min.css", "../bower_components/ng-grid/ng-grid.bootstrap.css"]
            }, {
                name: "ui.grid",
                files: ["../bower_components/angular-ui-grid/ui-grid.min.js", "../bower_components/angular-ui-grid/ui-grid.min.css", "../bower_components/angular-ui-grid/ui-grid.bootstrap.css"]
            }, {
                name: "ui.select",
                files: ["../bower_components/angular-ui-select/dist/select.min.js", "../bower_components/angular-ui-select/dist/select.min.css"]
            }, {
                name: "angularFileUpload",
                files: ["../bower_components/angular-file-upload/angular-file-upload.min.js"]
            }, {
                name: "ui.calendar",
                files: ["../bower_components/angular-ui-calendar/src/calendar.js"]
            }, {
                name: "ngImgCrop",
                files: ["../bower_components/ngImgCrop/compile/minified/ng-img-crop.js", "../bower_components/ngImgCrop/compile/minified/ng-img-crop.css"]
            }, {
                name: "angularBootstrapNavTree",
                files: ["../bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js", "../bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css"]
            }, {
                name: "toaster",
                files: ["../bower_components/angularjs-toaster/toaster.js", "../bower_components/angularjs-toaster/toaster.css"]
            }, {
                name: "textAngular",
                files: ["../bower_components/textAngular/dist/textAngular-sanitize.min.js", "../bower_components/textAngular/dist/textAngular.min.js"]
            }, {
                name: "vr.directives.slider",
                files: ["../bower_components/venturocket-angular-slider/build/angular-slider.min.js", "../bower_components/venturocket-angular-slider/build/angular-slider.css"]
            }, {
                name: "com.2fdevs.videogular",
                files: ["../bower_components/videogular/videogular.min.js"]
            }, {
                name: "com.2fdevs.videogular.plugins.controls",
                files: ["../bower_components/videogular-controls/controls.min.js"]
            }, {
                name: "com.2fdevs.videogular.plugins.buffering",
                files: ["../bower_components/videogular-buffering/buffering.min.js"]
            }, {
                name: "com.2fdevs.videogular.plugins.overlayplay",
                files: ["../bower_components/videogular-overlay-play/overlay-play.min.js"]
            }, {
                name: "com.2fdevs.videogular.plugins.poster",
                files: ["../bower_components/videogular-poster/poster.min.js"]
            }, {
                name: "com.2fdevs.videogular.plugins.imaads",
                files: ["../bower_components/videogular-ima-ads/ima-ads.min.js"]
            }, {
                name: "xeditable",
                files: ["../bower_components/angular-xeditable/dist/js/xeditable.min.js", "../bower_components/angular-xeditable/dist/css/xeditable.css"]
            }, {
                name: "smart-table",
                files: ["../bower_components/angular-smart-table/dist/smart-table.min.js"]
            }]
        })
    }
]), angular.module("app").run(["$rootScope", "$state", "$stateParams",
    function(a, b, c) {
        a.$state = b, a.$stateParams = c
    }
]).config(["$stateProvider", "$urlRouterProvider", "JQ_CONFIG",
    function(a, b, c) {
        b.otherwise("/"), a.state("app", {
            "abstract": !0,
            url: "/app",
            templateUrl: "index.html"
        }).state("home", {
            url: '/home',
            templateUrl: 'home/homeView.html',
            controller: 'homeCtrl',
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load(["js/controllers/chart.js"])
                    }
                ]
            }
        }).state("landingView", {
            url: "/landingView",
            templateUrl: "public/landing/landingView.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load(["js/controllers/chart.js"])
                    }
                ]
            }
        }).state("app.ui", {
            url: "/ui",
            template: '<div ui-view class="fade-in-up"></div>'
        }).state("app.ui.buttons", {
            url: "/buttons",
            templateUrl: "public/assets/ui_buttons.html"
        }).state("app.ui.icons", {
            url: "/icons",
            templateUrl: "public/assets/ui_icons.html"
        }).state("app.ui.grid", {
            url: "/grid",
            templateUrl: "public/assets/ui_grid.html"
        }).state("app.ui.widgets", {
            url: "/widgets",
            templateUrl: "public/assets/ui_widgets.html"
        }).state("app.ui.bootstrap", {
            url: "/bootstrap",
            templateUrl: "public/assets/ui_bootstrap.html"
        }).state("app.ui.sortable", {
            url: "/sortable",
            templateUrl: "public/assets/ui_sortable.html"
        }).state("app.ui.scroll", {
            url: "/scroll",
            templateUrl: "public/assets/ui_scroll.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load("js/controllers/scroll.js")
                    }
                ]
            }
        }).state("app.ui.portlet", {
            url: "/portlet",
            templateUrl: "public/assets/ui_portlet.html"
        }).state("app.ui.timeline", {
            url: "/timeline",
            templateUrl: "public/assets/ui_timeline.html"
        }).state("app.ui.tree", {
            url: "/tree",
            templateUrl: "public/assets/ui_tree.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("angularBootstrapNavTree").then(function() {
                            return a.load("js/controllers/tree.js")
                        })
                    }
                ]
            }
        }).state("app.ui.toaster", {
            url: "/toaster",
            templateUrl: "public/assets/ui_toaster.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("toaster").then(function() {
                            return a.load("js/controllers/toaster.js")
                        })
                    }
                ]
            }
        }).state("app.ui.jvectormap", {
            url: "/jvectormap",
            templateUrl: "public/assets/ui_jvectormap.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("js/controllers/vectormap.js")
                    }
                ]
            }
        }).state("app.ui.googlemap", {
            url: "/googlemap",
            templateUrl: "public/assets/ui_googlemap.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/app/map/load-google-maps.js", "js/app/map/ui-map.js", "js/app/map/map.js"]).then(function() {
                            return loadGoogleMaps()
                        })
                    }
                ]
            }
        }).state("app.chart", {
            url: "/chart",
            templateUrl: "public/assets/ui_chart.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load("js/controllers/chart.js")
                    }
                ]
            }
        }).state("app.table", {
            url: "/table",
            template: "<div ui-view></div>"
        }).state("app.table.static", {
            url: "/static",
            templateUrl: "public/assets/table_static.html"
        }).state("app.table.datatable", {
            url: "/datatable",
            templateUrl: "public/assets/table_datatable.html"
        }).state("app.table.footable", {
            url: "/footable",
            templateUrl: "public/assets/table_footable.html"
        }).state("app.table.grid", {
            url: "/grid",
            templateUrl: "public/assets/table_grid.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("ngGrid").then(function() {
                            return a.load("js/controllers/grid.js")
                        })
                    }
                ]
            }
        }).state("app.table.uigrid", {
            url: "/uigrid",
            templateUrl: "public/assets/table_uigrid.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("ui.grid").then(function() {
                            return a.load("js/controllers/uigrid.js")
                        })
                    }
                ]
            }
        }).state("app.table.editable", {
            url: "/editable",
            templateUrl: "public/assets/table_editable.html",
            controller: "XeditableCtrl",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("xeditable").then(function() {
                            return a.load("js/controllers/xeditable.js")
                        })
                    }
                ]
            }
        }).state("app.table.smart", {
            url: "/smart",
            templateUrl: "public/assets/table_smart.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("smart-table").then(function() {
                            return a.load("js/controllers/table.js")
                        })
                    }
                ]
            }
        }).state("app.form", {
            url: "/form",
            template: '<div ui-view class="fade-in"></div>',
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load("js/controllers/form.js")
                    }
                ]
            }
        }).state("app.form.components", {
            url: "/components",
            templateUrl: "public/assets/form_components.html",
            resolve: {
                deps: ["uiLoad", "$ocLazyLoad",
                    function(a, b) {
                        return a.load(c.daterangepicker).then(function() {
                            return a.load("js/controllers/form.components.js")
                        }).then(function() {
                            return b.load("ngBootstrap")
                        })
                    }
                ]
            }
        }).state("app.form.elements", {
            url: "/elements",
            templateUrl: "public/assets/form_elements.html"
        }).state("app.form.validation", {
            url: "/validation",
            templateUrl: "public/assets/form_validation.html"
        }).state("app.form.wizard", {
            url: "/wizard",
            templateUrl: "public/assets/form_wizard.html"
        }).state("app.form.fileupload", {
            url: "/fileupload",
            templateUrl: "public/assets/form_fileupload.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("angularFileUpload").then(function() {
                            return a.load("js/controllers/file-upload.js")
                        })
                    }
                ]
            }
        }).state("app.form.imagecrop", {
            url: "/imagecrop",
            templateUrl: "public/assets/form_imagecrop.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("ngImgCrop").then(function() {
                            return a.load("js/controllers/imgcrop.js")
                        })
                    }
                ]
            }
        }).state("app.form.select", {
            url: "/select",
            templateUrl: "public/assets/form_select.html",
            controller: "SelectCtrl",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("ui.select").then(function() {
                            return a.load("js/controllers/select.js")
                        })
                    }
                ]
            }
        }).state("app.form.slider", {
            url: "/slider",
            templateUrl: "public/assets/form_slider.html",
            controller: "SliderCtrl",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("vr.directives.slider").then(function() {
                            return a.load("js/controllers/slider.js")
                        })
                    }
                ]
            }
        }).state("app.form.editor", {
            url: "/editor",
            templateUrl: "public/assets/form_editor.html",
            controller: "EditorCtrl",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("textAngular").then(function() {
                            return a.load("js/controllers/editor.js")
                        })
                    }
                ]
            }
        }).state("app.form.xeditable", {
            url: "/xeditable",
            templateUrl: "public/assets/form_xeditable.html",
            controller: "XeditableCtrl",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load("xeditable").then(function() {
                            return a.load("js/controllers/xeditable.js")
                        })
                    }
                ]
            }
        }).state("app.page", {
            url: "/page",
            template: '<div ui-view class="fade-in-down"></div>'
        }).state("app.page.profile", {
            url: "/profile",
            templateUrl: "public/assets/page_profile.html"
        }).state("app.page.post", {
            url: "/post",
            templateUrl: "public/assets/page_post.html"
        }).state("app.page.search", {
            url: "/search",
            templateUrl: "public/assets/page_search.html"
        }).state("app.page.invoice", {
            url: "/invoice",
            templateUrl: "public/assets/page_invoice.html"
        }).state("app.page.price", {
            url: "/price",
            templateUrl: "public/assets/page_price.html"
        }).state("app.docs", {
            url: "/docs",
            templateUrl: "public/assets/docs.html"
        }).state("lockme", {
            url: "/lockme",
            templateUrl: "public/assets/page_lockme.html"
        }).state("access", {
            url: "/access",
            template: '<div ui-view class="fade-in-right-big smooth"></div>'
        }).state("access.signin", {
            url: "/signin",
            templateUrl: "public/assets/page_signin.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/controllers/signin.js"])
                    }
                ]
            }
        }).state("access.signup", {
            url: "/signup",
            templateUrl: "public/assets/page_signup.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/controllers/signup.js"])
                    }
                ]
            }
        }).state("access.forgotpwd", {
            url: "/forgotpwd",
            templateUrl: "public/assets/page_forgotpwd.html"
        }).state("access.404", {
            url: "/404",
            templateUrl: "public/assets/page_404.html"
        }).state("app.calendar", {
            url: "/calendar",
            templateUrl: "public/assets/app_calendar.html",
            resolve: {
                deps: ["$ocLazyLoad", "uiLoad",
                    function(a, b) {
                        return b.load(c.fullcalendar.concat("js/app/calendar/calendar.js")).then(function() {
                            return a.load("ui.calendar")
                        })
                    }
                ]
            }
        }).state("app.mail", {
            "abstract": !0,
            url: "/mail",
            templateUrl: "public/assets/mail.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/app/mail/mail.js", "js/app/mail/mail-service.js", c.moment])
                    }
                ]
            }
        }).state("app.mail.list", {
            url: "/inbox/{fold}",
            templateUrl: "public/assets/mail.list.html"
        }).state("app.mail.detail", {
            url: "/{mailId:[0-9]{1,4}}",
            templateUrl: "public/assets/mail.detail.html"
        }).state("app.mail.compose", {
            url: "/compose",
            templateUrl: "public/assets/mail.new.html"
        }).state("layout", {
            "abstract": !0,
            url: "/layout",
            templateUrl: "public/assets/layout.html"
        }).state("layout.fullwidth", {
            url: "/fullwidth",
            views: {
                "": {
                    templateUrl: "public/assets/layout_fullwidth.html"
                },
                footer: {
                    templateUrl: "public/assets/layout_footer_fullwidth.html"
                }
            },
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/controllers/vectormap.js"])
                    }
                ]
            }
        }).state("layout.mobile", {
            url: "/mobile",
            views: {
                "": {
                    templateUrl: "public/assets/layout_mobile.html"
                },
                footer: {
                    templateUrl: "public/assets/layout_footer_mobile.html"
                }
            }
        }).state("layout.app", {
            url: "/app",
            views: {
                "": {
                    templateUrl: "public/assets/layout_app.html"
                },
                footer: {
                    templateUrl: "public/assets/layout_footer_fullwidth.html"
                }
            },
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/controllers/tab.js"])
                    }
                ]
            }
        }).state("apps", {
            "abstract": !0,
            url: "/apps",
            templateUrl: "public/assets/layout.html"
        }).state("apps.note", {
            url: "/note",
            templateUrl: "public/assets/apps_note.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/app/note/note.js", c.moment])
                    }
                ]
            }
        }).state("apps.contact", {
            url: "/contact",
            templateUrl: "public/assets/apps_contact.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/app/contact/contact.js"])
                    }
                ]
            }
        }).state("app.weather", {
            url: "/weather",
            templateUrl: "public/assets/apps_weather.html",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load({
                            name: "angular-skycons",
                            files: ["js/app/weather/skycons.js", "js/app/weather/angular-skycons.js", "js/app/weather/ctrl.js", c.moment]
                        })
                    }
                ]
            }
        }).state("app.todo", {
            url: "/todo",
            templateUrl: "public/assets/apps_todo.html",
            resolve: {
                deps: ["uiLoad",
                    function(a) {
                        return a.load(["js/app/todo/todo.js", c.moment])
                    }
                ]
            }
        }).state("app.todo.list", {
            url: "/{fold}"
        }).state("music", {
            url: "/music",
            templateUrl: "public/assets/music.html",
            controller: "MusicCtrl",
            resolve: {
                deps: ["$ocLazyLoad",
                    function(a) {
                        return a.load(["com.2fdevs.videogular", "com.2fdevs.videogular.plugins.controls", "com.2fdevs.videogular.plugins.overlayplay", "com.2fdevs.videogular.plugins.poster", "com.2fdevs.videogular.plugins.buffering", "js/app/music/ctrl.js", "js/app/music/theme.css"])
                    }
                ]
            }
        }).state("music.home", {
            url: "/home",
            templateUrl: "public/assets/music.home.html"
        }).state("music.genres", {
            url: "/genres",
            templateUrl: "public/assets/music.genres.html"
        }).state("music.detail", {
            url: "/detail",
            templateUrl: "public/assets/music.detail.html"
        }).state("music.mtv", {
            url: "/mtv",
            templateUrl: "public/assets/music.mtv.html"
        }).state("music.mtvdetail", {
            url: "/mtvdetail",
            templateUrl: "public/assets/music.mtv.detail.html"
        }).state("music.playlist", {
            url: "/playlist/{fold}",
            templateUrl: "public/assets/music.playlist.html"
        })
    }
]), angular.module("app").controller("AppCtrl", ["$scope", "$translate", "$localStorage", "$window",
    function(a, b, c, d) {
        function e(a) {
            var b = a.navigator.userAgent || a.navigator.vendor || a.opera;
            return /iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(b)
        }
        var f = !! navigator.userAgent.match(/MSIE/i);
        f && angular.element(d.document.body).addClass("ie"), e(d) && angular.element(d.document.body).addClass("smart"), a.app = {
            name: "Urbanity",
            version: "2.0.1",
            color: {
                primary: "#7266ba",
                info: "#23b7e5",
                success: "#27c24c",
                warning: "#fad733",
                danger: "#f05050",
                light: "#e8eff0",
                dark: "#3a3f51",
                black: "#1c2b36"
            },
            settings: {
                themeID: 1,
                navbarHeaderColor: "bg-black",
                navbarCollapseColor: "bg-white-only",
                asideColor: "bg-black",
                headerFixed: !0,
                asideFixed: !1,
                asideFolded: !1,
                asideDock: !1,
                container: !1
            }
        }, angular.isDefined(c.settings) ? a.app.settings = c.settings : c.settings = a.app.settings, a.$watch("app.settings", function() {
            a.app.settings.asideDock && a.app.settings.asideFixed && (a.app.settings.headerFixed = !0), c.settings = a.app.settings
        }, !0), a.lang = {
            isopen: !1
        }, a.langs = {
            en: "English",
            de_DE: "German",
            it_IT: "Italian"
        }, a.selectLang = a.langs[b.proposedLanguage()] || "English", a.setLang = function(c, d) {
            a.selectLang = a.langs[c], b.use(c), a.lang.isopen = !a.lang.isopen
        }
    }
]), angular.module("app").directive("setNgAnimate", ["$animate",
    function(a) {
        return {
            link: function(b, c, d) {
                b.$watch(function() {
                    return b.$eval(d.setNgAnimate, b)
                }, function(b, d) {
                    a.enabled( !! b, c)
                })
            }
        }
    }
]), angular.module("app").directive("uiButterbar", ["$rootScope", "$anchorScroll",
    function(a, b) {
        return {
            restrict: "AC",
            template: '<span class="bar"></span>',
            link: function(a, c, d) {
                c.addClass("butterbar hide"), a.$on("$stateChangeStart", function(a) {
                    b(), c.removeClass("hide").addClass("active")
                }), a.$on("$stateChangeSuccess", function(a, b, d, e) {
                    a.targetScope.$watch("$viewContentLoaded", function() {
                        c.addClass("hide").removeClass("active")
                    })
                })
            }
        }
    }
]), angular.module("app").directive("uiFocus", function(a, b) {
    return {
        link: function(c, d, e) {
            var f = b(e.uiFocus);
            c.$watch(f, function(b) {
                b === !0 && a(function() {
                    d[0].focus()
                })
            }), d.bind("blur", function() {
                c.$apply(f.assign(c, !1))
            })
        }
    }
}), angular.module("app").directive("uiFullscreen", ["uiLoad", "JQ_CONFIG", "$document", "$window",
    function(a, b, c, d) {
        return {
            restrict: "AC",
            template: '<i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress fa-fw text-active"></i>',
            link: function(d, e, f) {
                e.addClass("hide"), a.load(b.screenfull).then(function() {
                    screenfull.enabled && !navigator.userAgent.match(/Trident.*rv:11\./) && e.removeClass("hide"), e.on("click", function() {
                        var a;
                        f.target && (a = $(f.target)[0]), screenfull.toggle(a)
                    }), c.on(screenfull.raw.fullscreenchange, function() {
                        screenfull.isFullscreen ? e.addClass("active") : e.removeClass("active")
                    })
                })
            }
        }
    }
]), angular.module("ui.jq", ["ui.load"]).value("uiJqConfig", {}).directive("uiJq", ["uiJqConfig", "JQ_CONFIG", "uiLoad", "$timeout",
    function(a, b, c, d) {
        return {
            restrict: "A",
            compile: function(e, f) {
                if (!angular.isFunction(e[f.uiJq]) && !b[f.uiJq]) throw new Error('ui-jq: The "' + f.uiJq + '" function does not exist');
                var g = a && a[f.uiJq];
                return function(a, e, f) {
                    function h() {
                        var b = [];
                        return f.uiOptions ? (b = a.$eval("[" + f.uiOptions + "]"), angular.isObject(g) && angular.isObject(b[0]) && (b[0] = angular.extend({}, g, b[0]))) : g && (b = [g]), b
                    }

                    function i() {
                        d(function() {
                            e[f.uiJq].apply(e, h())
                        }, 0, !1)
                    }

                    function j() {
                        f.uiRefresh && a.$watch(f.uiRefresh, function() {
                            i()
                        })
                    }
                    f.ngModel && e.is("select,input,textarea") && e.bind("change", function() {
                        e.trigger("input")
                    }), b[f.uiJq] ? c.load(b[f.uiJq]).then(function() {
                        i(), j()
                    })["catch"](function() {}) : (i(), j())
                }
            }
        }
    }
]), angular.module("app").directive("uiModule", ["MODULE_CONFIG", "uiLoad", "$compile",
    function(a, b, c) {
        return {
            restrict: "A",
            compile: function(d, e) {
                var f = d.contents().clone();
                return function(d, e, g) {
                    e.contents().remove(), b.load(a[g.uiModule]).then(function() {
                        c(f)(d, function(a, b) {
                            e.append(a)
                        })
                    })
                }
            }
        }
    }
]), angular.module("app").directive("uiNav", ["$timeout",
    function(a) {
        return {
            restrict: "AC",
            link: function(a, b, c) {
                var d, e = $(window),
                    f = 768,
                    g = $(".app-aside"),
                    h = ".dropdown-backdrop";
                b.on("click", "a", function(a) {
                    d && d.trigger("mouseleave.nav");
                    var b = $(this);
                    b.parent().siblings(".active").toggleClass("active"), b.next().is("ul") && b.parent().toggleClass("active") && a.preventDefault(), b.next().is("ul") || e.width() < f && $(".app-aside").removeClass("show off-screen")
                }), b.on("mouseenter", "a", function(a) {
                    if (d && d.trigger("mouseleave.nav"), $("> .nav", g).remove(), !(!$(".app-aside-fixed.app-aside-folded").length || e.width() < f || $(".app-aside-dock").length)) {
                        var b, c = $(a.target),
                            i = $(window).height(),
                            j = 50,
                            k = 150;
                        !c.is("a") && (c = c.closest("a")), c.next().is("ul") && (d = c.next(), c.parent().addClass("active"), b = c.parent().position().top + j, d.css("top", b), b + d.height() > i && d.css("bottom", 0), b + k > i && d.css("bottom", i - b - j).css("top", "auto"), d.appendTo(g), d.on("mouseleave.nav", function(a) {
                            $(h).remove(), d.appendTo(c.parent()), d.off("mouseleave.nav").css("top", "auto").css("bottom", "auto"), c.parent().removeClass("active")
                        }), $(".smart").length && $('<div class="dropdown-backdrop"/>').insertAfter(".app-aside").on("click", function(a) {
                            a && a.trigger("mouseleave.nav")
                        }))
                    }
                }), g.on("mouseleave", function(a) {
                    d && d.trigger("mouseleave.nav"), $("> .nav", g).remove()
                })
            }
        }
    }
]), angular.module("app").directive("uiScrollTo", ["$location", "$anchorScroll",
    function(a, b) {
        return {
            restrict: "AC",
            link: function(c, d, e) {
                d.on("click", function(c) {
                    a.hash(e.uiScrollTo), b()
                })
            }
        }
    }
]), angular.module("app").directive("uiShift", ["$timeout",
    function(a) {
        return {
            restrict: "A",
            link: function(b, c, d) {
                function e() {
                    a(function() {
                        var a = d.uiShift,
                            b = d.target;
                        h.hasClass("in") || h[a](b).addClass("in")
                    })
                }

                function f() {
                    g && g.prepend(c), !g && h.insertAfter(j), h.removeClass("in")
                }
                var g, h = $(c),
                    i = $(window),
                    j = h.prev(),
                    k = i.width();
                !j.length && (g = h.parent()), 768 > k && e() || f(), i.resize(function() {
                    k !== i.width() && a(function() {
                        i.width() < 768 && e() || f(), k = i.width()
                    })
                })
            }
        }
    }
]), angular.module("app").directive("uiToggleClass", ["$timeout", "$document",
    function(a, b) {
        return {
            restrict: "AC",
            link: function(a, b, c) {
                b.on("click", function(a) {
                    function d(a, b) {
                        for (var c = new RegExp("\\s" + a.replace(/\*/g, "[A-Za-z0-9-_]+").split(" ").join("\\s|\\s") + "\\s", "g"), d = " " + $(b)[0].className + " "; c.test(d);) d = d.replace(c, " ");
                        $(b)[0].className = $.trim(d)
                    }
                    a.preventDefault();
                    var e = c.uiToggleClass.split(","),
                        f = c.target && c.target.split(",") || Array(b),
                        g = 0;
                    angular.forEach(e, function(a) {
                        var b = f[f.length && g]; - 1 !== a.indexOf("*") && d(a, b), $(b).toggleClass(a), g++
                    }), $(b).toggleClass("active")
                })
            }
        }
    }
]), angular.module("ui.load", []).service("uiLoad", ["$document", "$q", "$timeout",
    function(a, b, c) {
        var d = [],
            e = !1,
            f = b.defer();
        this.load = function(a) {
            a = angular.isArray(a) ? a : a.split(/\s+/);
            var b = this;
            return e || (e = f.promise), angular.forEach(a, function(a) {
                e = e.then(function() {
                    return a.indexOf(".css") >= 0 ? b.loadCSS(a) : b.loadScript(a)
                })
            }), f.resolve(), e
        }, this.loadScript = function(e) {
            if (d[e]) return d[e].promise;
            var f = b.defer(),
                g = a[0].createElement("script");
            return g.src = e, g.onload = function(a) {
                c(function() {
                    f.resolve(a)
                })
            }, g.onerror = function(a) {
                c(function() {
                    f.reject(a)
                })
            }, a[0].body.appendChild(g), d[e] = f, f.promise
        }, this.loadCSS = function(e) {
            if (d[e]) return d[e].promise;
            var f = b.defer(),
                g = a[0].createElement("link");
            return g.rel = "stylesheet", g.type = "text/css", g.href = e, g.onload = function(a) {
                c(function() {
                    f.resolve(a)
                })
            }, g.onerror = function(a) {
                c(function() {
                    f.reject(a)
                })
            }, a[0].head.appendChild(g), d[e] = f, f.promise
        }
    }
]), angular.module("app").filter("fromNow", function() {
    return function(a) {
        return moment(a).fromNow()
    }
}), app.controller("AccordionDemoCtrl", ["$scope",
    function(a) {
        a.oneAtATime = !0, a.groups = [{
            title: "Accordion group header - #1",
            content: "Dynamic group body - #1"
        }, {
            title: "Accordion group header - #2",
            content: "Dynamic group body - #2"
        }], a.items = ["Item 1", "Item 2", "Item 3"], a.addItem = function() {
            var b = a.items.length + 1;
            a.items.push("Item " + b)
        }, a.status = {
            isFirstOpen: !0,
            isFirstDisabled: !1
        }
    }
]), app.controller("AlertDemoCtrl", ["$scope",
    function(a) {
        a.alerts = [{
            type: "success",
            msg: "Well done! You successfully read this important alert message."
        }, {
            type: "info",
            msg: "Heads up! This alert needs your attention, but it is not super important."
        }, {
            type: "warning",
            msg: "Warning! Best check yo self, you are not looking too good..."
        }], a.addAlert = function() {
            a.alerts.push({
                type: "danger",
                msg: "Oh snap! Change a few things up and try submitting again."
            })
        }, a.closeAlert = function(b) {
            a.alerts.splice(b, 1)
        }
    }
]), app.controller("ButtonsDemoCtrl", ["$scope",
    function(a) {
        a.singleModel = 1, a.radioModel = "Middle", a.checkModel = {
            left: !1,
            middle: !0,
            right: !1
        }
    }
]), app.controller("CarouselDemoCtrl", ["$scope",
    function(a) {
        a.myInterval = 5e3;
        var b = a.slides = [];
        a.addSlide = function() {
            b.push({
                image: "img/c" + b.length + ".jpg",
                text: ["Carousel text #0", "Carousel text #1", "Carousel text #2", "Carousel text #3"][b.length % 4]
            })
        };
        for (var c = 0; 4 > c; c++) a.addSlide()
    }
]), app.controller("DropdownDemoCtrl", ["$scope",
    function(a) {
        a.items = ["The first choice!", "And another choice for you.", "but wait! A third!"], a.status = {
            isopen: !1
        }, a.toggled = function(a) {}, a.toggleDropdown = function(b) {
            b.preventDefault(), b.stopPropagation(), a.status.isopen = !a.status.isopen
        }
    }
]), app.controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items",
    function(a, b, c) {
        a.items = c, a.selected = {
            item: a.items[0]
        }, a.ok = function() {
            b.close(a.selected.item)
        }, a.cancel = function() {
            b.dismiss("cancel")
        }
    }
]), app.controller("ModalDemoCtrl", ["$scope", "$modal", "$log",
    function(a, b, c) {
        a.items = ["item1", "item2", "item3"], a.open = function(d) {
            var e = b.open({
                templateUrl: "myModalContent.html",
                controller: "ModalInstanceCtrl",
                size: d,
                resolve: {
                    items: function() {
                        return a.items
                    }
                }
            });
            e.result.then(function(b) {
                a.selected = b
            }, function() {
                c.info("Modal dismissed at: " + new Date)
            })
        }
    }
]), app.controller("PaginationDemoCtrl", ["$scope", "$log",
    function(a, b) {
        a.totalItems = 64, a.currentPage = 4, a.setPage = function(b) {
            a.currentPage = b
        }, a.pageChanged = function() {
            b.info("Page changed to: " + a.currentPage)
        }, a.maxSize = 5, a.bigTotalItems = 175, a.bigCurrentPage = 1
    }
]), app.controller("PopoverDemoCtrl", ["$scope",
    function(a) {
        a.dynamicPopover = "Hello, World!", a.dynamicPopoverTitle = "Title"
    }
]), app.controller("ProgressDemoCtrl", ["$scope",
    function(a) {
        a.max = 200, a.random = function() {
            var b, c = Math.floor(100 * Math.random() + 1);
            b = 25 > c ? "success" : 50 > c ? "info" : 75 > c ? "warning" : "danger", a.showWarning = "danger" === b || "warning" === b, a.dynamic = c, a.type = b
        }, a.random(), a.randomStacked = function() {
            a.stacked = [];
            for (var b = ["success", "info", "warning", "danger"], c = 0, d = Math.floor(4 * Math.random() + 1); d > c; c++) {
                var e = Math.floor(4 * Math.random());
                a.stacked.push({
                    value: Math.floor(30 * Math.random() + 1),
                    type: b[e]
                })
            }
        }, a.randomStacked()
    }
]), app.controller("TabsDemoCtrl", ["$scope",
    function(a) {
        a.tabs = [{
            title: "Dynamic Title 1",
            content: "Dynamic content 1"
        }, {
            title: "Dynamic Title 2",
            content: "Dynamic content 2",
            disabled: !0
        }]
    }
]), app.controller("RatingDemoCtrl", ["$scope",
    function(a) {
        a.rate = 7, a.max = 10, a.isReadonly = !1, a.hoveringOver = function(b) {
            a.overStar = b, a.percent = 100 * (b / a.max)
        }
    }
]), app.controller("TooltipDemoCtrl", ["$scope",
    function(a) {
        a.dynamicTooltip = "Hello, World!", a.dynamicTooltipText = "dynamic", a.htmlTooltip = "I've been made <b>bold</b>!"
    }
]), app.controller("TypeaheadDemoCtrl", ["$scope", "$http",
    function(a, b) {
        a.selected = void 0, a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"], a.getLocation = function(a) {
            return b.get("http://maps.googleapis.com/maps/api/geocode/json", {
                params: {
                    address: a,
                    sensor: !1
                }
            }).then(function(a) {
                var b = [];
                return angular.forEach(a.data.results, function(a) {
                    b.push(a.formatted_address)
                }), b
            })
        }
    }
]), app.controller("DatepickerDemoCtrl", ["$scope",
    function(a) {
        a.today = function() {
            a.dt = new Date
        }, a.today(), a.clear = function() {
            a.dt = null
        }, a.disabled = function(a, b) {
            return "day" === b && (0 === a.getDay() || 6 === a.getDay())
        }, a.toggleMin = function() {
            a.minDate = a.minDate ? null : new Date
        }, a.toggleMin(), a.open = function(b) {
            b.preventDefault(), b.stopPropagation(), a.opened = !0
        }, a.dateOptions = {
            formatYear: "yy",
            startingDay: 1,
            "class": "datepicker"
        }, a.initDate = new Date("2016-15-20"), a.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "dd.MM.yyyy", "shortDate"], a.format = a.formats[0]
    }
]), app.controller("TimepickerDemoCtrl", ["$scope",
    function(a) {
        a.mytime = new Date, a.hstep = 1, a.mstep = 15, a.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        }, a.ismeridian = !0, a.toggleMode = function() {
            a.ismeridian = !a.ismeridian
        }, a.update = function() {
            var b = new Date;
            b.setHours(14), b.setMinutes(0), a.mytime = b
        }, a.changed = function() {}, a.clear = function() {
            a.mytime = null
        }
    }
]);
