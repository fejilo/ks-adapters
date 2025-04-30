var fs = (e) => {
  throw TypeError(e);
};
var ds = (e, t, s) => t.has(e) || fs("Cannot " + s);
var N = (e, t, s) => (ds(e, t, "read from private field"), s ? s.call(e) : t.get(e)), Be = (e, t, s) => t.has(e) ? fs("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), _e = (e, t, s, r) => (ds(e, t, "write to private field"), r ? r.call(e, s) : t.set(e, s), s);
let xr = class {
  constructor() {
  }
  isValid(t) {
  }
  decode(t) {
  }
};
class Rr extends xr {
  constructor() {
    super();
  }
  /**
   * Validate de token expires
   * @param {String} token -string token
   * @returns {Boolean} - result of the validation true/false
   */
  isValid(t) {
    if (!t) return !1;
    try {
      const s = this.decode(t), r = Math.floor(Date.now() / 1e3);
      return !(s.exp && s.exp < r);
    } catch {
      return !1;
    }
  }
  /**
   * decode a JWT Token
   * @param {string} token - string token to decode
   * @returns {Object|null} - payoad object or null if the token not is valid
   */
  decode(t) {
    if (!t) return null;
    try {
      const s = t.split(".");
      if (s.length !== 3) return null;
      const r = s[1], n = atob(
        r.replace(/-/g, "+").replace(/_/g, "/").padEnd(r.length + (4 - r.length % 4) % 4, "=")
      );
      return JSON.parse(n);
    } catch {
      return null;
    }
  }
}
//! moment.js
//! version : 2.30.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var Ds;
function u() {
  return Ds.apply(null, arguments);
}
function Nr(e) {
  Ds = e;
}
function U(e) {
  return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
}
function me(e) {
  return e != null && Object.prototype.toString.call(e) === "[object Object]";
}
function g(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function It(e) {
  if (Object.getOwnPropertyNames)
    return Object.getOwnPropertyNames(e).length === 0;
  var t;
  for (t in e)
    if (g(e, t))
      return !1;
  return !0;
}
function R(e) {
  return e === void 0;
}
function ie(e) {
  return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
}
function We(e) {
  return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
}
function Ms(e, t) {
  var s = [], r, n = e.length;
  for (r = 0; r < n; ++r)
    s.push(t(e[r], r));
  return s;
}
function he(e, t) {
  for (var s in t)
    g(t, s) && (e[s] = t[s]);
  return g(t, "toString") && (e.toString = t.toString), g(t, "valueOf") && (e.valueOf = t.valueOf), e;
}
function Z(e, t, s, r) {
  return Zs(e, t, s, r, !0).utc();
}
function Cr() {
  return {
    empty: !1,
    unusedTokens: [],
    unusedInput: [],
    overflow: -2,
    charsLeftOver: 0,
    nullInput: !1,
    invalidEra: null,
    invalidMonth: null,
    invalidFormat: !1,
    userInvalidated: !1,
    iso: !1,
    parsedDateParts: [],
    era: null,
    meridiem: null,
    rfc2822: !1,
    weekdayMismatch: !1
  };
}
function p(e) {
  return e._pf == null && (e._pf = Cr()), e._pf;
}
var Ot;
Array.prototype.some ? Ot = Array.prototype.some : Ot = function(e) {
  var t = Object(this), s = t.length >>> 0, r;
  for (r = 0; r < s; r++)
    if (r in t && e.call(this, t[r], r, t))
      return !0;
  return !1;
};
function Ut(e) {
  var t = null, s = !1, r = e._d && !isNaN(e._d.getTime());
  if (r && (t = p(e), s = Ot.call(t.parsedDateParts, function(n) {
    return n != null;
  }), r = t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && s), e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0)), Object.isFrozen == null || !Object.isFrozen(e))
    e._isValid = r;
  else
    return r;
  return e._isValid;
}
function nt(e) {
  var t = Z(NaN);
  return e != null ? he(p(t), e) : p(t).userInvalidated = !0, t;
}
var ps = u.momentProperties = [], _t = !1;
function Bt(e, t) {
  var s, r, n, i = ps.length;
  if (R(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), R(t._i) || (e._i = t._i), R(t._f) || (e._f = t._f), R(t._l) || (e._l = t._l), R(t._strict) || (e._strict = t._strict), R(t._tzm) || (e._tzm = t._tzm), R(t._isUTC) || (e._isUTC = t._isUTC), R(t._offset) || (e._offset = t._offset), R(t._pf) || (e._pf = p(t)), R(t._locale) || (e._locale = t._locale), i > 0)
    for (s = 0; s < i; s++)
      r = ps[s], n = t[r], R(n) || (e[r] = n);
  return e;
}
function Fe(e) {
  Bt(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), _t === !1 && (_t = !0, u.updateOffset(this), _t = !1);
}
function B(e) {
  return e instanceof Fe || e != null && e._isAMomentObject != null;
}
function Ts(e) {
  u.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
}
function L(e, t) {
  var s = !0;
  return he(function() {
    if (u.deprecationHandler != null && u.deprecationHandler(null, e), s) {
      var r = [], n, i, a, o = arguments.length;
      for (i = 0; i < o; i++) {
        if (n = "", typeof arguments[i] == "object") {
          n += `
[` + i + "] ";
          for (a in arguments[0])
            g(arguments[0], a) && (n += a + ": " + arguments[0][a] + ", ");
          n = n.slice(0, -2);
        } else
          n = arguments[i];
        r.push(n);
      }
      Ts(
        e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
      ), s = !1;
    }
    return t.apply(this, arguments);
  }, t);
}
var ms = {};
function Ys(e, t) {
  u.deprecationHandler != null && u.deprecationHandler(e, t), ms[e] || (Ts(t), ms[e] = !0);
}
u.suppressDeprecationWarnings = !1;
u.deprecationHandler = null;
function J(e) {
  return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
}
function Ar(e) {
  var t, s;
  for (s in e)
    g(e, s) && (t = e[s], J(t) ? this[s] = t : this["_" + s] = t);
  this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
    (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
  );
}
function Dt(e, t) {
  var s = he({}, e), r;
  for (r in t)
    g(t, r) && (me(e[r]) && me(t[r]) ? (s[r] = {}, he(s[r], e[r]), he(s[r], t[r])) : t[r] != null ? s[r] = t[r] : delete s[r]);
  for (r in e)
    g(e, r) && !g(t, r) && me(e[r]) && (s[r] = he({}, s[r]));
  return s;
}
function Ht(e) {
  e != null && this.set(e);
}
var Mt;
Object.keys ? Mt = Object.keys : Mt = function(e) {
  var t, s = [];
  for (t in e)
    g(e, t) && s.push(t);
  return s;
};
var Pr = {
  sameDay: "[Today at] LT",
  nextDay: "[Tomorrow at] LT",
  nextWeek: "dddd [at] LT",
  lastDay: "[Yesterday at] LT",
  lastWeek: "[Last] dddd [at] LT",
  sameElse: "L"
};
function Lr(e, t, s) {
  var r = this._calendar[e] || this._calendar.sameElse;
  return J(r) ? r.call(t, s) : r;
}
function j(e, t, s) {
  var r = "" + Math.abs(e), n = t - r.length, i = e >= 0;
  return (i ? s ? "+" : "" : "-") + Math.pow(10, Math.max(0, n)).toString().substr(1) + r;
}
var Vt = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, He = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, gt = {}, ve = {};
function f(e, t, s, r) {
  var n = r;
  typeof r == "string" && (n = function() {
    return this[r]();
  }), e && (ve[e] = n), t && (ve[t[0]] = function() {
    return j(n.apply(this, arguments), t[1], t[2]);
  }), s && (ve[s] = function() {
    return this.localeData().ordinal(
      n.apply(this, arguments),
      e
    );
  });
}
function Wr(e) {
  return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
}
function Fr(e) {
  var t = e.match(Vt), s, r;
  for (s = 0, r = t.length; s < r; s++)
    ve[t[s]] ? t[s] = ve[t[s]] : t[s] = Wr(t[s]);
  return function(n) {
    var i = "", a;
    for (a = 0; a < r; a++)
      i += J(t[a]) ? t[a].call(n, e) : t[a];
    return i;
  };
}
function $e(e, t) {
  return e.isValid() ? (t = Es(t, e.localeData()), gt[t] = gt[t] || Fr(t), gt[t](e)) : e.localeData().invalidDate();
}
function Es(e, t) {
  var s = 5;
  function r(n) {
    return t.longDateFormat(n) || n;
  }
  for (He.lastIndex = 0; s >= 0 && He.test(e); )
    e = e.replace(
      He,
      r
    ), He.lastIndex = 0, s -= 1;
  return e;
}
var Ir = {
  LTS: "h:mm:ss A",
  LT: "h:mm A",
  L: "MM/DD/YYYY",
  LL: "MMMM D, YYYY",
  LLL: "MMMM D, YYYY h:mm A",
  LLLL: "dddd, MMMM D, YYYY h:mm A"
};
function Ur(e) {
  var t = this._longDateFormat[e], s = this._longDateFormat[e.toUpperCase()];
  return t || !s ? t : (this._longDateFormat[e] = s.match(Vt).map(function(r) {
    return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
  }).join(""), this._longDateFormat[e]);
}
var Br = "Invalid date";
function Hr() {
  return this._invalidDate;
}
var Vr = "%d", qr = /\d{1,2}/;
function Gr(e) {
  return this._ordinal.replace("%d", e);
}
var $r = {
  future: "in %s",
  past: "%s ago",
  s: "a few seconds",
  ss: "%d seconds",
  m: "a minute",
  mm: "%d minutes",
  h: "an hour",
  hh: "%d hours",
  d: "a day",
  dd: "%d days",
  w: "a week",
  ww: "%d weeks",
  M: "a month",
  MM: "%d months",
  y: "a year",
  yy: "%d years"
};
function jr(e, t, s, r) {
  var n = this._relativeTime[s];
  return J(n) ? n(e, t, s, r) : n.replace(/%d/i, e);
}
function zr(e, t) {
  var s = this._relativeTime[e > 0 ? "future" : "past"];
  return J(s) ? s(t) : s.replace(/%s/i, t);
}
var ys = {
  D: "date",
  dates: "date",
  date: "date",
  d: "day",
  days: "day",
  day: "day",
  e: "weekday",
  weekdays: "weekday",
  weekday: "weekday",
  E: "isoWeekday",
  isoweekdays: "isoWeekday",
  isoweekday: "isoWeekday",
  DDD: "dayOfYear",
  dayofyears: "dayOfYear",
  dayofyear: "dayOfYear",
  h: "hour",
  hours: "hour",
  hour: "hour",
  ms: "millisecond",
  milliseconds: "millisecond",
  millisecond: "millisecond",
  m: "minute",
  minutes: "minute",
  minute: "minute",
  M: "month",
  months: "month",
  month: "month",
  Q: "quarter",
  quarters: "quarter",
  quarter: "quarter",
  s: "second",
  seconds: "second",
  second: "second",
  gg: "weekYear",
  weekyears: "weekYear",
  weekyear: "weekYear",
  GG: "isoWeekYear",
  isoweekyears: "isoWeekYear",
  isoweekyear: "isoWeekYear",
  w: "week",
  weeks: "week",
  week: "week",
  W: "isoWeek",
  isoweeks: "isoWeek",
  isoweek: "isoWeek",
  y: "year",
  years: "year",
  year: "year"
};
function W(e) {
  return typeof e == "string" ? ys[e] || ys[e.toLowerCase()] : void 0;
}
function qt(e) {
  var t = {}, s, r;
  for (r in e)
    g(e, r) && (s = W(r), s && (t[s] = e[r]));
  return t;
}
var Zr = {
  date: 9,
  day: 11,
  weekday: 11,
  isoWeekday: 11,
  dayOfYear: 4,
  hour: 13,
  millisecond: 16,
  minute: 14,
  month: 8,
  quarter: 7,
  second: 15,
  weekYear: 1,
  isoWeekYear: 1,
  week: 5,
  isoWeek: 5,
  year: 1
};
function Jr(e) {
  var t = [], s;
  for (s in e)
    g(e, s) && t.push({ unit: s, priority: Zr[s] });
  return t.sort(function(r, n) {
    return r.priority - n.priority;
  }), t;
}
var xs = /\d/, C = /\d\d/, Rs = /\d{3}/, Gt = /\d{4}/, it = /[+-]?\d{6}/, b = /\d\d?/, Ns = /\d\d\d\d?/, Cs = /\d\d\d\d\d\d?/, at = /\d{1,3}/, $t = /\d{1,4}/, ot = /[+-]?\d{1,6}/, Oe = /\d+/, lt = /[+-]?\d+/, Kr = /Z|[+-]\d\d:?\d\d/gi, ht = /Z|[+-]\d\d(?::?\d\d)?/gi, Qr = /[+-]?\d+(\.\d{1,3})?/, Ie = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, De = /^[1-9]\d?/, jt = /^([1-9]\d|\d)/, Xe;
Xe = {};
function c(e, t, s) {
  Xe[e] = J(t) ? t : function(r, n) {
    return r && s ? s : t;
  };
}
function Xr(e, t) {
  return g(Xe, e) ? Xe[e](t._strict, t._locale) : new RegExp(en(e));
}
function en(e) {
  return re(
    e.replace("\\", "").replace(
      /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
      function(t, s, r, n, i) {
        return s || r || n || i;
      }
    )
  );
}
function re(e) {
  return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
}
function A(e) {
  return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
}
function m(e) {
  var t = +e, s = 0;
  return t !== 0 && isFinite(t) && (s = A(t)), s;
}
var Tt = {};
function v(e, t) {
  var s, r = t, n;
  for (typeof e == "string" && (e = [e]), ie(t) && (r = function(i, a) {
    a[t] = m(i);
  }), n = e.length, s = 0; s < n; s++)
    Tt[e[s]] = r;
}
function Ue(e, t) {
  v(e, function(s, r, n, i) {
    n._w = n._w || {}, t(s, n._w, n, i);
  });
}
function tn(e, t, s) {
  t != null && g(Tt, e) && Tt[e](t, s._a, s, e);
}
function ut(e) {
  return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
}
var E = 0, te = 1, G = 2, T = 3, I = 4, se = 5, pe = 6, sn = 7, rn = 8;
f("Y", 0, 0, function() {
  var e = this.year();
  return e <= 9999 ? j(e, 4) : "+" + e;
});
f(0, ["YY", 2], 0, function() {
  return this.year() % 100;
});
f(0, ["YYYY", 4], 0, "year");
f(0, ["YYYYY", 5], 0, "year");
f(0, ["YYYYYY", 6, !0], 0, "year");
c("Y", lt);
c("YY", b, C);
c("YYYY", $t, Gt);
c("YYYYY", ot, it);
c("YYYYYY", ot, it);
v(["YYYYY", "YYYYYY"], E);
v("YYYY", function(e, t) {
  t[E] = e.length === 2 ? u.parseTwoDigitYear(e) : m(e);
});
v("YY", function(e, t) {
  t[E] = u.parseTwoDigitYear(e);
});
v("Y", function(e, t) {
  t[E] = parseInt(e, 10);
});
function Ne(e) {
  return ut(e) ? 366 : 365;
}
u.parseTwoDigitYear = function(e) {
  return m(e) + (m(e) > 68 ? 1900 : 2e3);
};
var As = Me("FullYear", !0);
function nn() {
  return ut(this.year());
}
function Me(e, t) {
  return function(s) {
    return s != null ? (Ps(this, e, s), u.updateOffset(this, t), this) : Ce(this, e);
  };
}
function Ce(e, t) {
  if (!e.isValid())
    return NaN;
  var s = e._d, r = e._isUTC;
  switch (t) {
    case "Milliseconds":
      return r ? s.getUTCMilliseconds() : s.getMilliseconds();
    case "Seconds":
      return r ? s.getUTCSeconds() : s.getSeconds();
    case "Minutes":
      return r ? s.getUTCMinutes() : s.getMinutes();
    case "Hours":
      return r ? s.getUTCHours() : s.getHours();
    case "Date":
      return r ? s.getUTCDate() : s.getDate();
    case "Day":
      return r ? s.getUTCDay() : s.getDay();
    case "Month":
      return r ? s.getUTCMonth() : s.getMonth();
    case "FullYear":
      return r ? s.getUTCFullYear() : s.getFullYear();
    default:
      return NaN;
  }
}
function Ps(e, t, s) {
  var r, n, i, a, o;
  if (!(!e.isValid() || isNaN(s))) {
    switch (r = e._d, n = e._isUTC, t) {
      case "Milliseconds":
        return void (n ? r.setUTCMilliseconds(s) : r.setMilliseconds(s));
      case "Seconds":
        return void (n ? r.setUTCSeconds(s) : r.setSeconds(s));
      case "Minutes":
        return void (n ? r.setUTCMinutes(s) : r.setMinutes(s));
      case "Hours":
        return void (n ? r.setUTCHours(s) : r.setHours(s));
      case "Date":
        return void (n ? r.setUTCDate(s) : r.setDate(s));
      case "FullYear":
        break;
      default:
        return;
    }
    i = s, a = e.month(), o = e.date(), o = o === 29 && a === 1 && !ut(i) ? 28 : o, n ? r.setUTCFullYear(i, a, o) : r.setFullYear(i, a, o);
  }
}
function an(e) {
  return e = W(e), J(this[e]) ? this[e]() : this;
}
function on(e, t) {
  if (typeof e == "object") {
    e = qt(e);
    var s = Jr(e), r, n = s.length;
    for (r = 0; r < n; r++)
      this[s[r].unit](e[s[r].unit]);
  } else if (e = W(e), J(this[e]))
    return this[e](t);
  return this;
}
function ln(e, t) {
  return (e % t + t) % t;
}
var D;
Array.prototype.indexOf ? D = Array.prototype.indexOf : D = function(e) {
  var t;
  for (t = 0; t < this.length; ++t)
    if (this[t] === e)
      return t;
  return -1;
};
function zt(e, t) {
  if (isNaN(e) || isNaN(t))
    return NaN;
  var s = ln(t, 12);
  return e += (t - s) / 12, s === 1 ? ut(e) ? 29 : 28 : 31 - s % 7 % 2;
}
f("M", ["MM", 2], "Mo", function() {
  return this.month() + 1;
});
f("MMM", 0, 0, function(e) {
  return this.localeData().monthsShort(this, e);
});
f("MMMM", 0, 0, function(e) {
  return this.localeData().months(this, e);
});
c("M", b, De);
c("MM", b, C);
c("MMM", function(e, t) {
  return t.monthsShortRegex(e);
});
c("MMMM", function(e, t) {
  return t.monthsRegex(e);
});
v(["M", "MM"], function(e, t) {
  t[te] = m(e) - 1;
});
v(["MMM", "MMMM"], function(e, t, s, r) {
  var n = s._locale.monthsParse(e, r, s._strict);
  n != null ? t[te] = n : p(s).invalidMonth = e;
});
var hn = "January_February_March_April_May_June_July_August_September_October_November_December".split(
  "_"
), Ls = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Ws = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, un = Ie, cn = Ie;
function fn(e, t) {
  return e ? U(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ws).test(t) ? "format" : "standalone"][e.month()] : U(this._months) ? this._months : this._months.standalone;
}
function dn(e, t) {
  return e ? U(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ws.test(t) ? "format" : "standalone"][e.month()] : U(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
}
function pn(e, t, s) {
  var r, n, i, a = e.toLocaleLowerCase();
  if (!this._monthsParse)
    for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
      i = Z([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
        i,
        ""
      ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
  return s ? t === "MMM" ? (n = D.call(this._shortMonthsParse, a), n !== -1 ? n : null) : (n = D.call(this._longMonthsParse, a), n !== -1 ? n : null) : t === "MMM" ? (n = D.call(this._shortMonthsParse, a), n !== -1 ? n : (n = D.call(this._longMonthsParse, a), n !== -1 ? n : null)) : (n = D.call(this._longMonthsParse, a), n !== -1 ? n : (n = D.call(this._shortMonthsParse, a), n !== -1 ? n : null));
}
function mn(e, t, s) {
  var r, n, i;
  if (this._monthsParseExact)
    return pn.call(this, e, t, s);
  for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
    if (n = Z([2e3, r]), s && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
      "^" + this.months(n, "").replace(".", "") + "$",
      "i"
    ), this._shortMonthsParse[r] = new RegExp(
      "^" + this.monthsShort(n, "").replace(".", "") + "$",
      "i"
    )), !s && !this._monthsParse[r] && (i = "^" + this.months(n, "") + "|^" + this.monthsShort(n, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "MMMM" && this._longMonthsParse[r].test(e))
      return r;
    if (s && t === "MMM" && this._shortMonthsParse[r].test(e))
      return r;
    if (!s && this._monthsParse[r].test(e))
      return r;
  }
}
function Fs(e, t) {
  if (!e.isValid())
    return e;
  if (typeof t == "string") {
    if (/^\d+$/.test(t))
      t = m(t);
    else if (t = e.localeData().monthsParse(t), !ie(t))
      return e;
  }
  var s = t, r = e.date();
  return r = r < 29 ? r : Math.min(r, zt(e.year(), s)), e._isUTC ? e._d.setUTCMonth(s, r) : e._d.setMonth(s, r), e;
}
function Is(e) {
  return e != null ? (Fs(this, e), u.updateOffset(this, !0), this) : Ce(this, "Month");
}
function yn() {
  return zt(this.year(), this.month());
}
function _n(e) {
  return this._monthsParseExact ? (g(this, "_monthsRegex") || Us.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (g(this, "_monthsShortRegex") || (this._monthsShortRegex = un), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
}
function gn(e) {
  return this._monthsParseExact ? (g(this, "_monthsRegex") || Us.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (g(this, "_monthsRegex") || (this._monthsRegex = cn), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
}
function Us() {
  function e(h, d) {
    return d.length - h.length;
  }
  var t = [], s = [], r = [], n, i, a, o;
  for (n = 0; n < 12; n++)
    i = Z([2e3, n]), a = re(this.monthsShort(i, "")), o = re(this.months(i, "")), t.push(a), s.push(o), r.push(o), r.push(a);
  t.sort(e), s.sort(e), r.sort(e), this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._monthsShortStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function wn(e, t, s, r, n, i, a) {
  var o;
  return e < 100 && e >= 0 ? (o = new Date(e + 400, t, s, r, n, i, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, s, r, n, i, a), o;
}
function Ae(e) {
  var t, s;
  return e < 100 && e >= 0 ? (s = Array.prototype.slice.call(arguments), s[0] = e + 400, t = new Date(Date.UTC.apply(null, s)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
}
function et(e, t, s) {
  var r = 7 + t - s, n = (7 + Ae(e, 0, r).getUTCDay() - t) % 7;
  return -n + r - 1;
}
function Bs(e, t, s, r, n) {
  var i = (7 + s - r) % 7, a = et(e, r, n), o = 1 + 7 * (t - 1) + i + a, h, d;
  return o <= 0 ? (h = e - 1, d = Ne(h) + o) : o > Ne(e) ? (h = e + 1, d = o - Ne(e)) : (h = e, d = o), {
    year: h,
    dayOfYear: d
  };
}
function Pe(e, t, s) {
  var r = et(e.year(), t, s), n = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, a;
  return n < 1 ? (a = e.year() - 1, i = n + ne(a, t, s)) : n > ne(e.year(), t, s) ? (i = n - ne(e.year(), t, s), a = e.year() + 1) : (a = e.year(), i = n), {
    week: i,
    year: a
  };
}
function ne(e, t, s) {
  var r = et(e, t, s), n = et(e + 1, t, s);
  return (Ne(e) - r + n) / 7;
}
f("w", ["ww", 2], "wo", "week");
f("W", ["WW", 2], "Wo", "isoWeek");
c("w", b, De);
c("ww", b, C);
c("W", b, De);
c("WW", b, C);
Ue(
  ["w", "ww", "W", "WW"],
  function(e, t, s, r) {
    t[r.substr(0, 1)] = m(e);
  }
);
function kn(e) {
  return Pe(e, this._week.dow, this._week.doy).week;
}
var vn = {
  dow: 0,
  // Sunday is the first day of the week.
  doy: 6
  // The week that contains Jan 6th is the first week of the year.
};
function Sn() {
  return this._week.dow;
}
function bn() {
  return this._week.doy;
}
function On(e) {
  var t = this.localeData().week(this);
  return e == null ? t : this.add((e - t) * 7, "d");
}
function Dn(e) {
  var t = Pe(this, 1, 4).week;
  return e == null ? t : this.add((e - t) * 7, "d");
}
f("d", 0, "do", "day");
f("dd", 0, 0, function(e) {
  return this.localeData().weekdaysMin(this, e);
});
f("ddd", 0, 0, function(e) {
  return this.localeData().weekdaysShort(this, e);
});
f("dddd", 0, 0, function(e) {
  return this.localeData().weekdays(this, e);
});
f("e", 0, 0, "weekday");
f("E", 0, 0, "isoWeekday");
c("d", b);
c("e", b);
c("E", b);
c("dd", function(e, t) {
  return t.weekdaysMinRegex(e);
});
c("ddd", function(e, t) {
  return t.weekdaysShortRegex(e);
});
c("dddd", function(e, t) {
  return t.weekdaysRegex(e);
});
Ue(["dd", "ddd", "dddd"], function(e, t, s, r) {
  var n = s._locale.weekdaysParse(e, r, s._strict);
  n != null ? t.d = n : p(s).invalidWeekday = e;
});
Ue(["d", "e", "E"], function(e, t, s, r) {
  t[r] = m(e);
});
function Mn(e, t) {
  return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
}
function Tn(e, t) {
  return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
}
function Zt(e, t) {
  return e.slice(t, 7).concat(e.slice(0, t));
}
var Yn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), Hs = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), En = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), xn = Ie, Rn = Ie, Nn = Ie;
function Cn(e, t) {
  var s = U(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
  return e === !0 ? Zt(s, this._week.dow) : e ? s[e.day()] : s;
}
function An(e) {
  return e === !0 ? Zt(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
}
function Pn(e) {
  return e === !0 ? Zt(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
}
function Ln(e, t, s) {
  var r, n, i, a = e.toLocaleLowerCase();
  if (!this._weekdaysParse)
    for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
      i = Z([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
        i,
        ""
      ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
        i,
        ""
      ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
  return s ? t === "dddd" ? (n = D.call(this._weekdaysParse, a), n !== -1 ? n : null) : t === "ddd" ? (n = D.call(this._shortWeekdaysParse, a), n !== -1 ? n : null) : (n = D.call(this._minWeekdaysParse, a), n !== -1 ? n : null) : t === "dddd" ? (n = D.call(this._weekdaysParse, a), n !== -1 || (n = D.call(this._shortWeekdaysParse, a), n !== -1) ? n : (n = D.call(this._minWeekdaysParse, a), n !== -1 ? n : null)) : t === "ddd" ? (n = D.call(this._shortWeekdaysParse, a), n !== -1 || (n = D.call(this._weekdaysParse, a), n !== -1) ? n : (n = D.call(this._minWeekdaysParse, a), n !== -1 ? n : null)) : (n = D.call(this._minWeekdaysParse, a), n !== -1 || (n = D.call(this._weekdaysParse, a), n !== -1) ? n : (n = D.call(this._shortWeekdaysParse, a), n !== -1 ? n : null));
}
function Wn(e, t, s) {
  var r, n, i;
  if (this._weekdaysParseExact)
    return Ln.call(this, e, t, s);
  for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
    if (n = Z([2e3, 1]).day(r), s && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
      "^" + this.weekdays(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._shortWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysShort(n, "").replace(".", "\\.?") + "$",
      "i"
    ), this._minWeekdaysParse[r] = new RegExp(
      "^" + this.weekdaysMin(n, "").replace(".", "\\.?") + "$",
      "i"
    )), this._weekdaysParse[r] || (i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), s && t === "dddd" && this._fullWeekdaysParse[r].test(e))
      return r;
    if (s && t === "ddd" && this._shortWeekdaysParse[r].test(e))
      return r;
    if (s && t === "dd" && this._minWeekdaysParse[r].test(e))
      return r;
    if (!s && this._weekdaysParse[r].test(e))
      return r;
  }
}
function Fn(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = Ce(this, "Day");
  return e != null ? (e = Mn(e, this.localeData()), this.add(e - t, "d")) : t;
}
function In(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
  return e == null ? t : this.add(e - t, "d");
}
function Un(e) {
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    var t = Tn(e, this.localeData());
    return this.day(this.day() % 7 ? t : t - 7);
  } else
    return this.day() || 7;
}
function Bn(e) {
  return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Jt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (g(this, "_weekdaysRegex") || (this._weekdaysRegex = xn), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
}
function Hn(e) {
  return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Jt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (g(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Rn), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
}
function Vn(e) {
  return this._weekdaysParseExact ? (g(this, "_weekdaysRegex") || Jt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (g(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Nn), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
}
function Jt() {
  function e(k, Y) {
    return Y.length - k.length;
  }
  var t = [], s = [], r = [], n = [], i, a, o, h, d;
  for (i = 0; i < 7; i++)
    a = Z([2e3, 1]).day(i), o = re(this.weekdaysMin(a, "")), h = re(this.weekdaysShort(a, "")), d = re(this.weekdays(a, "")), t.push(o), s.push(h), r.push(d), n.push(o), n.push(h), n.push(d);
  t.sort(e), s.sort(e), r.sort(e), n.sort(e), this._weekdaysRegex = new RegExp("^(" + n.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
    "^(" + r.join("|") + ")",
    "i"
  ), this._weekdaysShortStrictRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  ), this._weekdaysMinStrictRegex = new RegExp(
    "^(" + t.join("|") + ")",
    "i"
  );
}
function Kt() {
  return this.hours() % 12 || 12;
}
function qn() {
  return this.hours() || 24;
}
f("H", ["HH", 2], 0, "hour");
f("h", ["hh", 2], 0, Kt);
f("k", ["kk", 2], 0, qn);
f("hmm", 0, 0, function() {
  return "" + Kt.apply(this) + j(this.minutes(), 2);
});
f("hmmss", 0, 0, function() {
  return "" + Kt.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2);
});
f("Hmm", 0, 0, function() {
  return "" + this.hours() + j(this.minutes(), 2);
});
f("Hmmss", 0, 0, function() {
  return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2);
});
function Vs(e, t) {
  f(e, 0, 0, function() {
    return this.localeData().meridiem(
      this.hours(),
      this.minutes(),
      t
    );
  });
}
Vs("a", !0);
Vs("A", !1);
function qs(e, t) {
  return t._meridiemParse;
}
c("a", qs);
c("A", qs);
c("H", b, jt);
c("h", b, De);
c("k", b, De);
c("HH", b, C);
c("hh", b, C);
c("kk", b, C);
c("hmm", Ns);
c("hmmss", Cs);
c("Hmm", Ns);
c("Hmmss", Cs);
v(["H", "HH"], T);
v(["k", "kk"], function(e, t, s) {
  var r = m(e);
  t[T] = r === 24 ? 0 : r;
});
v(["a", "A"], function(e, t, s) {
  s._isPm = s._locale.isPM(e), s._meridiem = e;
});
v(["h", "hh"], function(e, t, s) {
  t[T] = m(e), p(s).bigHour = !0;
});
v("hmm", function(e, t, s) {
  var r = e.length - 2;
  t[T] = m(e.substr(0, r)), t[I] = m(e.substr(r)), p(s).bigHour = !0;
});
v("hmmss", function(e, t, s) {
  var r = e.length - 4, n = e.length - 2;
  t[T] = m(e.substr(0, r)), t[I] = m(e.substr(r, 2)), t[se] = m(e.substr(n)), p(s).bigHour = !0;
});
v("Hmm", function(e, t, s) {
  var r = e.length - 2;
  t[T] = m(e.substr(0, r)), t[I] = m(e.substr(r));
});
v("Hmmss", function(e, t, s) {
  var r = e.length - 4, n = e.length - 2;
  t[T] = m(e.substr(0, r)), t[I] = m(e.substr(r, 2)), t[se] = m(e.substr(n));
});
function Gn(e) {
  return (e + "").toLowerCase().charAt(0) === "p";
}
var $n = /[ap]\.?m?\.?/i, jn = Me("Hours", !0);
function zn(e, t, s) {
  return e > 11 ? s ? "pm" : "PM" : s ? "am" : "AM";
}
var Gs = {
  calendar: Pr,
  longDateFormat: Ir,
  invalidDate: Br,
  ordinal: Vr,
  dayOfMonthOrdinalParse: qr,
  relativeTime: $r,
  months: hn,
  monthsShort: Ls,
  week: vn,
  weekdays: Yn,
  weekdaysMin: En,
  weekdaysShort: Hs,
  meridiemParse: $n
}, O = {}, Ye = {}, Le;
function Zn(e, t) {
  var s, r = Math.min(e.length, t.length);
  for (s = 0; s < r; s += 1)
    if (e[s] !== t[s])
      return s;
  return r;
}
function _s(e) {
  return e && e.toLowerCase().replace("_", "-");
}
function Jn(e) {
  for (var t = 0, s, r, n, i; t < e.length; ) {
    for (i = _s(e[t]).split("-"), s = i.length, r = _s(e[t + 1]), r = r ? r.split("-") : null; s > 0; ) {
      if (n = ct(i.slice(0, s).join("-")), n)
        return n;
      if (r && r.length >= s && Zn(i, r) >= s - 1)
        break;
      s--;
    }
    t++;
  }
  return Le;
}
function Kn(e) {
  return !!(e && e.match("^[^/\\\\]*$"));
}
function ct(e) {
  var t = null, s;
  if (O[e] === void 0 && typeof module < "u" && module && module.exports && Kn(e))
    try {
      t = Le._abbr, s = require, s("./locale/" + e), ce(t);
    } catch {
      O[e] = null;
    }
  return O[e];
}
function ce(e, t) {
  var s;
  return e && (R(t) ? s = ae(e) : s = Qt(e, t), s ? Le = s : typeof console < "u" && console.warn && console.warn(
    "Locale " + e + " not found. Did you forget to load it?"
  )), Le._abbr;
}
function Qt(e, t) {
  if (t !== null) {
    var s, r = Gs;
    if (t.abbr = e, O[e] != null)
      Ys(
        "defineLocaleOverride",
        "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
      ), r = O[e]._config;
    else if (t.parentLocale != null)
      if (O[t.parentLocale] != null)
        r = O[t.parentLocale]._config;
      else if (s = ct(t.parentLocale), s != null)
        r = s._config;
      else
        return Ye[t.parentLocale] || (Ye[t.parentLocale] = []), Ye[t.parentLocale].push({
          name: e,
          config: t
        }), null;
    return O[e] = new Ht(Dt(r, t)), Ye[e] && Ye[e].forEach(function(n) {
      Qt(n.name, n.config);
    }), ce(e), O[e];
  } else
    return delete O[e], null;
}
function Qn(e, t) {
  if (t != null) {
    var s, r, n = Gs;
    O[e] != null && O[e].parentLocale != null ? O[e].set(Dt(O[e]._config, t)) : (r = ct(e), r != null && (n = r._config), t = Dt(n, t), r == null && (t.abbr = e), s = new Ht(t), s.parentLocale = O[e], O[e] = s), ce(e);
  } else
    O[e] != null && (O[e].parentLocale != null ? (O[e] = O[e].parentLocale, e === ce() && ce(e)) : O[e] != null && delete O[e]);
  return O[e];
}
function ae(e) {
  var t;
  if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
    return Le;
  if (!U(e)) {
    if (t = ct(e), t)
      return t;
    e = [e];
  }
  return Jn(e);
}
function Xn() {
  return Mt(O);
}
function Xt(e) {
  var t, s = e._a;
  return s && p(e).overflow === -2 && (t = s[te] < 0 || s[te] > 11 ? te : s[G] < 1 || s[G] > zt(s[E], s[te]) ? G : s[T] < 0 || s[T] > 24 || s[T] === 24 && (s[I] !== 0 || s[se] !== 0 || s[pe] !== 0) ? T : s[I] < 0 || s[I] > 59 ? I : s[se] < 0 || s[se] > 59 ? se : s[pe] < 0 || s[pe] > 999 ? pe : -1, p(e)._overflowDayOfYear && (t < E || t > G) && (t = G), p(e)._overflowWeeks && t === -1 && (t = sn), p(e)._overflowWeekday && t === -1 && (t = rn), p(e).overflow = t), e;
}
var ei = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ti = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, si = /Z|[+-]\d\d(?::?\d\d)?/, Ve = [
  ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
  ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
  ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
  ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
  ["YYYY-DDD", /\d{4}-\d{3}/],
  ["YYYY-MM", /\d{4}-\d\d/, !1],
  ["YYYYYYMMDD", /[+-]\d{10}/],
  ["YYYYMMDD", /\d{8}/],
  ["GGGG[W]WWE", /\d{4}W\d{3}/],
  ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
  ["YYYYDDD", /\d{7}/],
  ["YYYYMM", /\d{6}/, !1],
  ["YYYY", /\d{4}/, !1]
], wt = [
  ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
  ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
  ["HH:mm:ss", /\d\d:\d\d:\d\d/],
  ["HH:mm", /\d\d:\d\d/],
  ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
  ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
  ["HHmmss", /\d\d\d\d\d\d/],
  ["HHmm", /\d\d\d\d/],
  ["HH", /\d\d/]
], ri = /^\/?Date\((-?\d+)/i, ni = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ii = {
  UT: 0,
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function $s(e) {
  var t, s, r = e._i, n = ei.exec(r) || ti.exec(r), i, a, o, h, d = Ve.length, k = wt.length;
  if (n) {
    for (p(e).iso = !0, t = 0, s = d; t < s; t++)
      if (Ve[t][1].exec(n[1])) {
        a = Ve[t][0], i = Ve[t][2] !== !1;
        break;
      }
    if (a == null) {
      e._isValid = !1;
      return;
    }
    if (n[3]) {
      for (t = 0, s = k; t < s; t++)
        if (wt[t][1].exec(n[3])) {
          o = (n[2] || " ") + wt[t][0];
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
    }
    if (!i && o != null) {
      e._isValid = !1;
      return;
    }
    if (n[4])
      if (si.exec(n[4]))
        h = "Z";
      else {
        e._isValid = !1;
        return;
      }
    e._f = a + (o || "") + (h || ""), ts(e);
  } else
    e._isValid = !1;
}
function ai(e, t, s, r, n, i) {
  var a = [
    oi(e),
    Ls.indexOf(t),
    parseInt(s, 10),
    parseInt(r, 10),
    parseInt(n, 10)
  ];
  return i && a.push(parseInt(i, 10)), a;
}
function oi(e) {
  var t = parseInt(e, 10);
  return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
}
function li(e) {
  return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
function hi(e, t, s) {
  if (e) {
    var r = Hs.indexOf(e), n = new Date(
      t[0],
      t[1],
      t[2]
    ).getDay();
    if (r !== n)
      return p(s).weekdayMismatch = !0, s._isValid = !1, !1;
  }
  return !0;
}
function ui(e, t, s) {
  if (e)
    return ii[e];
  if (t)
    return 0;
  var r = parseInt(s, 10), n = r % 100, i = (r - n) / 100;
  return i * 60 + n;
}
function js(e) {
  var t = ni.exec(li(e._i)), s;
  if (t) {
    if (s = ai(
      t[4],
      t[3],
      t[2],
      t[5],
      t[6],
      t[7]
    ), !hi(t[1], s, e))
      return;
    e._a = s, e._tzm = ui(t[8], t[9], t[10]), e._d = Ae.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), p(e).rfc2822 = !0;
  } else
    e._isValid = !1;
}
function ci(e) {
  var t = ri.exec(e._i);
  if (t !== null) {
    e._d = /* @__PURE__ */ new Date(+t[1]);
    return;
  }
  if ($s(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  if (js(e), e._isValid === !1)
    delete e._isValid;
  else
    return;
  e._strict ? e._isValid = !1 : u.createFromInputFallback(e);
}
u.createFromInputFallback = L(
  "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
  function(e) {
    e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
  }
);
function we(e, t, s) {
  return e ?? t ?? s;
}
function fi(e) {
  var t = new Date(u.now());
  return e._useUTC ? [
    t.getUTCFullYear(),
    t.getUTCMonth(),
    t.getUTCDate()
  ] : [t.getFullYear(), t.getMonth(), t.getDate()];
}
function es(e) {
  var t, s, r = [], n, i, a;
  if (!e._d) {
    for (n = fi(e), e._w && e._a[G] == null && e._a[te] == null && di(e), e._dayOfYear != null && (a = we(e._a[E], n[E]), (e._dayOfYear > Ne(a) || e._dayOfYear === 0) && (p(e)._overflowDayOfYear = !0), s = Ae(a, 0, e._dayOfYear), e._a[te] = s.getUTCMonth(), e._a[G] = s.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
      e._a[t] = r[t] = n[t];
    for (; t < 7; t++)
      e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
    e._a[T] === 24 && e._a[I] === 0 && e._a[se] === 0 && e._a[pe] === 0 && (e._nextDay = !0, e._a[T] = 0), e._d = (e._useUTC ? Ae : wn).apply(
      null,
      r
    ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[T] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (p(e).weekdayMismatch = !0);
  }
}
function di(e) {
  var t, s, r, n, i, a, o, h, d;
  t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, a = 4, s = we(
    t.GG,
    e._a[E],
    Pe(S(), 1, 4).year
  ), r = we(t.W, 1), n = we(t.E, 1), (n < 1 || n > 7) && (h = !0)) : (i = e._locale._week.dow, a = e._locale._week.doy, d = Pe(S(), i, a), s = we(t.gg, e._a[E], d.year), r = we(t.w, d.week), t.d != null ? (n = t.d, (n < 0 || n > 6) && (h = !0)) : t.e != null ? (n = t.e + i, (t.e < 0 || t.e > 6) && (h = !0)) : n = i), r < 1 || r > ne(s, i, a) ? p(e)._overflowWeeks = !0 : h != null ? p(e)._overflowWeekday = !0 : (o = Bs(s, r, n, i, a), e._a[E] = o.year, e._dayOfYear = o.dayOfYear);
}
u.ISO_8601 = function() {
};
u.RFC_2822 = function() {
};
function ts(e) {
  if (e._f === u.ISO_8601) {
    $s(e);
    return;
  }
  if (e._f === u.RFC_2822) {
    js(e);
    return;
  }
  e._a = [], p(e).empty = !0;
  var t = "" + e._i, s, r, n, i, a, o = t.length, h = 0, d, k;
  for (n = Es(e._f, e._locale).match(Vt) || [], k = n.length, s = 0; s < k; s++)
    i = n[s], r = (t.match(Xr(i, e)) || [])[0], r && (a = t.substr(0, t.indexOf(r)), a.length > 0 && p(e).unusedInput.push(a), t = t.slice(
      t.indexOf(r) + r.length
    ), h += r.length), ve[i] ? (r ? p(e).empty = !1 : p(e).unusedTokens.push(i), tn(i, r, e)) : e._strict && !r && p(e).unusedTokens.push(i);
  p(e).charsLeftOver = o - h, t.length > 0 && p(e).unusedInput.push(t), e._a[T] <= 12 && p(e).bigHour === !0 && e._a[T] > 0 && (p(e).bigHour = void 0), p(e).parsedDateParts = e._a.slice(0), p(e).meridiem = e._meridiem, e._a[T] = pi(
    e._locale,
    e._a[T],
    e._meridiem
  ), d = p(e).era, d !== null && (e._a[E] = e._locale.erasConvertYear(d, e._a[E])), es(e), Xt(e);
}
function pi(e, t, s) {
  var r;
  return s == null ? t : e.meridiemHour != null ? e.meridiemHour(t, s) : (e.isPM != null && (r = e.isPM(s), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
}
function mi(e) {
  var t, s, r, n, i, a, o = !1, h = e._f.length;
  if (h === 0) {
    p(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
    return;
  }
  for (n = 0; n < h; n++)
    i = 0, a = !1, t = Bt({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[n], ts(t), Ut(t) && (a = !0), i += p(t).charsLeftOver, i += p(t).unusedTokens.length * 10, p(t).score = i, o ? i < r && (r = i, s = t) : (r == null || i < r || a) && (r = i, s = t, a && (o = !0));
  he(e, s || t);
}
function yi(e) {
  if (!e._d) {
    var t = qt(e._i), s = t.day === void 0 ? t.date : t.day;
    e._a = Ms(
      [t.year, t.month, s, t.hour, t.minute, t.second, t.millisecond],
      function(r) {
        return r && parseInt(r, 10);
      }
    ), es(e);
  }
}
function _i(e) {
  var t = new Fe(Xt(zs(e)));
  return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
}
function zs(e) {
  var t = e._i, s = e._f;
  return e._locale = e._locale || ae(e._l), t === null || s === void 0 && t === "" ? nt({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), B(t) ? new Fe(Xt(t)) : (We(t) ? e._d = t : U(s) ? mi(e) : s ? ts(e) : gi(e), Ut(e) || (e._d = null), e));
}
function gi(e) {
  var t = e._i;
  R(t) ? e._d = new Date(u.now()) : We(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? ci(e) : U(t) ? (e._a = Ms(t.slice(0), function(s) {
    return parseInt(s, 10);
  }), es(e)) : me(t) ? yi(e) : ie(t) ? e._d = new Date(t) : u.createFromInputFallback(e);
}
function Zs(e, t, s, r, n) {
  var i = {};
  return (t === !0 || t === !1) && (r = t, t = void 0), (s === !0 || s === !1) && (r = s, s = void 0), (me(e) && It(e) || U(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = n, i._l = s, i._i = e, i._f = t, i._strict = r, _i(i);
}
function S(e, t, s, r) {
  return Zs(e, t, s, r, !1);
}
var wi = L(
  "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : nt();
  }
), ki = L(
  "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
  function() {
    var e = S.apply(null, arguments);
    return this.isValid() && e.isValid() ? e > this ? this : e : nt();
  }
);
function Js(e, t) {
  var s, r;
  if (t.length === 1 && U(t[0]) && (t = t[0]), !t.length)
    return S();
  for (s = t[0], r = 1; r < t.length; ++r)
    (!t[r].isValid() || t[r][e](s)) && (s = t[r]);
  return s;
}
function vi() {
  var e = [].slice.call(arguments, 0);
  return Js("isBefore", e);
}
function Si() {
  var e = [].slice.call(arguments, 0);
  return Js("isAfter", e);
}
var bi = function() {
  return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
}, Ee = [
  "year",
  "quarter",
  "month",
  "week",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
function Oi(e) {
  var t, s = !1, r, n = Ee.length;
  for (t in e)
    if (g(e, t) && !(D.call(Ee, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
      return !1;
  for (r = 0; r < n; ++r)
    if (e[Ee[r]]) {
      if (s)
        return !1;
      parseFloat(e[Ee[r]]) !== m(e[Ee[r]]) && (s = !0);
    }
  return !0;
}
function Di() {
  return this._isValid;
}
function Mi() {
  return H(NaN);
}
function ft(e) {
  var t = qt(e), s = t.year || 0, r = t.quarter || 0, n = t.month || 0, i = t.week || t.isoWeek || 0, a = t.day || 0, o = t.hour || 0, h = t.minute || 0, d = t.second || 0, k = t.millisecond || 0;
  this._isValid = Oi(t), this._milliseconds = +k + d * 1e3 + // 1000
  h * 6e4 + // 1000 * 60
  o * 1e3 * 60 * 60, this._days = +a + i * 7, this._months = +n + r * 3 + s * 12, this._data = {}, this._locale = ae(), this._bubble();
}
function je(e) {
  return e instanceof ft;
}
function Yt(e) {
  return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
}
function Ti(e, t, s) {
  var r = Math.min(e.length, t.length), n = Math.abs(e.length - t.length), i = 0, a;
  for (a = 0; a < r; a++)
    m(e[a]) !== m(t[a]) && i++;
  return i + n;
}
function Ks(e, t) {
  f(e, 0, 0, function() {
    var s = this.utcOffset(), r = "+";
    return s < 0 && (s = -s, r = "-"), r + j(~~(s / 60), 2) + t + j(~~s % 60, 2);
  });
}
Ks("Z", ":");
Ks("ZZ", "");
c("Z", ht);
c("ZZ", ht);
v(["Z", "ZZ"], function(e, t, s) {
  s._useUTC = !0, s._tzm = ss(ht, e);
});
var Yi = /([\+\-]|\d\d)/gi;
function ss(e, t) {
  var s = (t || "").match(e), r, n, i;
  return s === null ? null : (r = s[s.length - 1] || [], n = (r + "").match(Yi) || ["-", 0, 0], i = +(n[1] * 60) + m(n[2]), i === 0 ? 0 : n[0] === "+" ? i : -i);
}
function rs(e, t) {
  var s, r;
  return t._isUTC ? (s = t.clone(), r = (B(e) || We(e) ? e.valueOf() : S(e).valueOf()) - s.valueOf(), s._d.setTime(s._d.valueOf() + r), u.updateOffset(s, !1), s) : S(e).local();
}
function Et(e) {
  return -Math.round(e._d.getTimezoneOffset());
}
u.updateOffset = function() {
};
function Ei(e, t, s) {
  var r = this._offset || 0, n;
  if (!this.isValid())
    return e != null ? this : NaN;
  if (e != null) {
    if (typeof e == "string") {
      if (e = ss(ht, e), e === null)
        return this;
    } else Math.abs(e) < 16 && !s && (e = e * 60);
    return !this._isUTC && t && (n = Et(this)), this._offset = e, this._isUTC = !0, n != null && this.add(n, "m"), r !== e && (!t || this._changeInProgress ? er(
      this,
      H(e - r, "m"),
      1,
      !1
    ) : this._changeInProgress || (this._changeInProgress = !0, u.updateOffset(this, !0), this._changeInProgress = null)), this;
  } else
    return this._isUTC ? r : Et(this);
}
function xi(e, t) {
  return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
}
function Ri(e) {
  return this.utcOffset(0, e);
}
function Ni(e) {
  return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Et(this), "m")), this;
}
function Ci() {
  if (this._tzm != null)
    this.utcOffset(this._tzm, !1, !0);
  else if (typeof this._i == "string") {
    var e = ss(Kr, this._i);
    e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
  }
  return this;
}
function Ai(e) {
  return this.isValid() ? (e = e ? S(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
}
function Pi() {
  return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
}
function Li() {
  if (!R(this._isDSTShifted))
    return this._isDSTShifted;
  var e = {}, t;
  return Bt(e, this), e = zs(e), e._a ? (t = e._isUTC ? Z(e._a) : S(e._a), this._isDSTShifted = this.isValid() && Ti(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
}
function Wi() {
  return this.isValid() ? !this._isUTC : !1;
}
function Fi() {
  return this.isValid() ? this._isUTC : !1;
}
function Qs() {
  return this.isValid() ? this._isUTC && this._offset === 0 : !1;
}
var Ii = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Ui = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
function H(e, t) {
  var s = e, r = null, n, i, a;
  return je(e) ? s = {
    ms: e._milliseconds,
    d: e._days,
    M: e._months
  } : ie(e) || !isNaN(+e) ? (s = {}, t ? s[t] = +e : s.milliseconds = +e) : (r = Ii.exec(e)) ? (n = r[1] === "-" ? -1 : 1, s = {
    y: 0,
    d: m(r[G]) * n,
    h: m(r[T]) * n,
    m: m(r[I]) * n,
    s: m(r[se]) * n,
    ms: m(Yt(r[pe] * 1e3)) * n
    // the millisecond decimal point is included in the match
  }) : (r = Ui.exec(e)) ? (n = r[1] === "-" ? -1 : 1, s = {
    y: de(r[2], n),
    M: de(r[3], n),
    w: de(r[4], n),
    d: de(r[5], n),
    h: de(r[6], n),
    m: de(r[7], n),
    s: de(r[8], n)
  }) : s == null ? s = {} : typeof s == "object" && ("from" in s || "to" in s) && (a = Bi(
    S(s.from),
    S(s.to)
  ), s = {}, s.ms = a.milliseconds, s.M = a.months), i = new ft(s), je(e) && g(e, "_locale") && (i._locale = e._locale), je(e) && g(e, "_isValid") && (i._isValid = e._isValid), i;
}
H.fn = ft.prototype;
H.invalid = Mi;
function de(e, t) {
  var s = e && parseFloat(e.replace(",", "."));
  return (isNaN(s) ? 0 : s) * t;
}
function gs(e, t) {
  var s = {};
  return s.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(s.months, "M").isAfter(t) && --s.months, s.milliseconds = +t - +e.clone().add(s.months, "M"), s;
}
function Bi(e, t) {
  var s;
  return e.isValid() && t.isValid() ? (t = rs(t, e), e.isBefore(t) ? s = gs(e, t) : (s = gs(t, e), s.milliseconds = -s.milliseconds, s.months = -s.months), s) : { milliseconds: 0, months: 0 };
}
function Xs(e, t) {
  return function(s, r) {
    var n, i;
    return r !== null && !isNaN(+r) && (Ys(
      t,
      "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
    ), i = s, s = r, r = i), n = H(s, r), er(this, n, e), this;
  };
}
function er(e, t, s, r) {
  var n = t._milliseconds, i = Yt(t._days), a = Yt(t._months);
  e.isValid() && (r = r ?? !0, a && Fs(e, Ce(e, "Month") + a * s), i && Ps(e, "Date", Ce(e, "Date") + i * s), n && e._d.setTime(e._d.valueOf() + n * s), r && u.updateOffset(e, i || a));
}
var Hi = Xs(1, "add"), Vi = Xs(-1, "subtract");
function tr(e) {
  return typeof e == "string" || e instanceof String;
}
function qi(e) {
  return B(e) || We(e) || tr(e) || ie(e) || $i(e) || Gi(e) || e === null || e === void 0;
}
function Gi(e) {
  var t = me(e) && !It(e), s = !1, r = [
    "years",
    "year",
    "y",
    "months",
    "month",
    "M",
    "days",
    "day",
    "d",
    "dates",
    "date",
    "D",
    "hours",
    "hour",
    "h",
    "minutes",
    "minute",
    "m",
    "seconds",
    "second",
    "s",
    "milliseconds",
    "millisecond",
    "ms"
  ], n, i, a = r.length;
  for (n = 0; n < a; n += 1)
    i = r[n], s = s || g(e, i);
  return t && s;
}
function $i(e) {
  var t = U(e), s = !1;
  return t && (s = e.filter(function(r) {
    return !ie(r) && tr(e);
  }).length === 0), t && s;
}
function ji(e) {
  var t = me(e) && !It(e), s = !1, r = [
    "sameDay",
    "nextDay",
    "lastDay",
    "nextWeek",
    "lastWeek",
    "sameElse"
  ], n, i;
  for (n = 0; n < r.length; n += 1)
    i = r[n], s = s || g(e, i);
  return t && s;
}
function zi(e, t) {
  var s = e.diff(t, "days", !0);
  return s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse";
}
function Zi(e, t) {
  arguments.length === 1 && (arguments[0] ? qi(arguments[0]) ? (e = arguments[0], t = void 0) : ji(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
  var s = e || S(), r = rs(s, this).startOf("day"), n = u.calendarFormat(this, r) || "sameElse", i = t && (J(t[n]) ? t[n].call(this, s) : t[n]);
  return this.format(
    i || this.localeData().calendar(n, this, S(s))
  );
}
function Ji() {
  return new Fe(this);
}
function Ki(e, t) {
  var s = B(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() > s.valueOf() : s.valueOf() < this.clone().startOf(t).valueOf()) : !1;
}
function Qi(e, t) {
  var s = B(e) ? e : S(e);
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() < s.valueOf() : this.clone().endOf(t).valueOf() < s.valueOf()) : !1;
}
function Xi(e, t, s, r) {
  var n = B(e) ? e : S(e), i = B(t) ? t : S(t);
  return this.isValid() && n.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(n, s) : !this.isBefore(n, s)) && (r[1] === ")" ? this.isBefore(i, s) : !this.isAfter(i, s))) : !1;
}
function ea(e, t) {
  var s = B(e) ? e : S(e), r;
  return this.isValid() && s.isValid() ? (t = W(t) || "millisecond", t === "millisecond" ? this.valueOf() === s.valueOf() : (r = s.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
}
function ta(e, t) {
  return this.isSame(e, t) || this.isAfter(e, t);
}
function sa(e, t) {
  return this.isSame(e, t) || this.isBefore(e, t);
}
function ra(e, t, s) {
  var r, n, i;
  if (!this.isValid())
    return NaN;
  if (r = rs(e, this), !r.isValid())
    return NaN;
  switch (n = (r.utcOffset() - this.utcOffset()) * 6e4, t = W(t), t) {
    case "year":
      i = ze(this, r) / 12;
      break;
    case "month":
      i = ze(this, r);
      break;
    case "quarter":
      i = ze(this, r) / 3;
      break;
    case "second":
      i = (this - r) / 1e3;
      break;
    case "minute":
      i = (this - r) / 6e4;
      break;
    case "hour":
      i = (this - r) / 36e5;
      break;
    case "day":
      i = (this - r - n) / 864e5;
      break;
    case "week":
      i = (this - r - n) / 6048e5;
      break;
    default:
      i = this - r;
  }
  return s ? i : A(i);
}
function ze(e, t) {
  if (e.date() < t.date())
    return -ze(t, e);
  var s = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(s, "months"), n, i;
  return t - r < 0 ? (n = e.clone().add(s - 1, "months"), i = (t - r) / (r - n)) : (n = e.clone().add(s + 1, "months"), i = (t - r) / (n - r)), -(s + i) || 0;
}
u.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
u.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
function na() {
  return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
}
function ia(e) {
  if (!this.isValid())
    return null;
  var t = e !== !0, s = t ? this.clone().utc() : this;
  return s.year() < 0 || s.year() > 9999 ? $e(
    s,
    t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
  ) : J(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", $e(s, "Z")) : $e(
    s,
    t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
  );
}
function aa() {
  if (!this.isValid())
    return "moment.invalid(/* " + this._i + " */)";
  var e = "moment", t = "", s, r, n, i;
  return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), s = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", n = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(s + r + n + i);
}
function oa(e) {
  e || (e = this.isUtc() ? u.defaultFormatUtc : u.defaultFormat);
  var t = $e(this, e);
  return this.localeData().postformat(t);
}
function la(e, t) {
  return this.isValid() && (B(e) && e.isValid() || S(e).isValid()) ? H({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ha(e) {
  return this.from(S(), e);
}
function ua(e, t) {
  return this.isValid() && (B(e) && e.isValid() || S(e).isValid()) ? H({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
}
function ca(e) {
  return this.to(S(), e);
}
function sr(e) {
  var t;
  return e === void 0 ? this._locale._abbr : (t = ae(e), t != null && (this._locale = t), this);
}
var rr = L(
  "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
  function(e) {
    return e === void 0 ? this.localeData() : this.locale(e);
  }
);
function nr() {
  return this._locale;
}
var tt = 1e3, Se = 60 * tt, st = 60 * Se, ir = (365 * 400 + 97) * 24 * st;
function be(e, t) {
  return (e % t + t) % t;
}
function ar(e, t, s) {
  return e < 100 && e >= 0 ? new Date(e + 400, t, s) - ir : new Date(e, t, s).valueOf();
}
function or(e, t, s) {
  return e < 100 && e >= 0 ? Date.UTC(e + 400, t, s) - ir : Date.UTC(e, t, s);
}
function fa(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? or : ar, e) {
    case "year":
      t = s(this.year(), 0, 1);
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3,
        1
      );
      break;
    case "month":
      t = s(this.year(), this.month(), 1);
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday()
      );
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1)
      );
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date());
      break;
    case "hour":
      t = this._d.valueOf(), t -= be(
        t + (this._isUTC ? 0 : this.utcOffset() * Se),
        st
      );
      break;
    case "minute":
      t = this._d.valueOf(), t -= be(t, Se);
      break;
    case "second":
      t = this._d.valueOf(), t -= be(t, tt);
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function da(e) {
  var t, s;
  if (e = W(e), e === void 0 || e === "millisecond" || !this.isValid())
    return this;
  switch (s = this._isUTC ? or : ar, e) {
    case "year":
      t = s(this.year() + 1, 0, 1) - 1;
      break;
    case "quarter":
      t = s(
        this.year(),
        this.month() - this.month() % 3 + 3,
        1
      ) - 1;
      break;
    case "month":
      t = s(this.year(), this.month() + 1, 1) - 1;
      break;
    case "week":
      t = s(
        this.year(),
        this.month(),
        this.date() - this.weekday() + 7
      ) - 1;
      break;
    case "isoWeek":
      t = s(
        this.year(),
        this.month(),
        this.date() - (this.isoWeekday() - 1) + 7
      ) - 1;
      break;
    case "day":
    case "date":
      t = s(this.year(), this.month(), this.date() + 1) - 1;
      break;
    case "hour":
      t = this._d.valueOf(), t += st - be(
        t + (this._isUTC ? 0 : this.utcOffset() * Se),
        st
      ) - 1;
      break;
    case "minute":
      t = this._d.valueOf(), t += Se - be(t, Se) - 1;
      break;
    case "second":
      t = this._d.valueOf(), t += tt - be(t, tt) - 1;
      break;
  }
  return this._d.setTime(t), u.updateOffset(this, !0), this;
}
function pa() {
  return this._d.valueOf() - (this._offset || 0) * 6e4;
}
function ma() {
  return Math.floor(this.valueOf() / 1e3);
}
function ya() {
  return new Date(this.valueOf());
}
function _a() {
  var e = this;
  return [
    e.year(),
    e.month(),
    e.date(),
    e.hour(),
    e.minute(),
    e.second(),
    e.millisecond()
  ];
}
function ga() {
  var e = this;
  return {
    years: e.year(),
    months: e.month(),
    date: e.date(),
    hours: e.hours(),
    minutes: e.minutes(),
    seconds: e.seconds(),
    milliseconds: e.milliseconds()
  };
}
function wa() {
  return this.isValid() ? this.toISOString() : null;
}
function ka() {
  return Ut(this);
}
function va() {
  return he({}, p(this));
}
function Sa() {
  return p(this).overflow;
}
function ba() {
  return {
    input: this._i,
    format: this._f,
    locale: this._locale,
    isUTC: this._isUTC,
    strict: this._strict
  };
}
f("N", 0, 0, "eraAbbr");
f("NN", 0, 0, "eraAbbr");
f("NNN", 0, 0, "eraAbbr");
f("NNNN", 0, 0, "eraName");
f("NNNNN", 0, 0, "eraNarrow");
f("y", ["y", 1], "yo", "eraYear");
f("y", ["yy", 2], 0, "eraYear");
f("y", ["yyy", 3], 0, "eraYear");
f("y", ["yyyy", 4], 0, "eraYear");
c("N", ns);
c("NN", ns);
c("NNN", ns);
c("NNNN", Aa);
c("NNNNN", Pa);
v(
  ["N", "NN", "NNN", "NNNN", "NNNNN"],
  function(e, t, s, r) {
    var n = s._locale.erasParse(e, r, s._strict);
    n ? p(s).era = n : p(s).invalidEra = e;
  }
);
c("y", Oe);
c("yy", Oe);
c("yyy", Oe);
c("yyyy", Oe);
c("yo", La);
v(["y", "yy", "yyy", "yyyy"], E);
v(["yo"], function(e, t, s, r) {
  var n;
  s._locale._eraYearOrdinalRegex && (n = e.match(s._locale._eraYearOrdinalRegex)), s._locale.eraYearOrdinalParse ? t[E] = s._locale.eraYearOrdinalParse(e, n) : t[E] = parseInt(e, 10);
});
function Oa(e, t) {
  var s, r, n, i = this._eras || ae("en")._eras;
  for (s = 0, r = i.length; s < r; ++s) {
    switch (typeof i[s].since) {
      case "string":
        n = u(i[s].since).startOf("day"), i[s].since = n.valueOf();
        break;
    }
    switch (typeof i[s].until) {
      case "undefined":
        i[s].until = 1 / 0;
        break;
      case "string":
        n = u(i[s].until).startOf("day").valueOf(), i[s].until = n.valueOf();
        break;
    }
  }
  return i;
}
function Da(e, t, s) {
  var r, n, i = this.eras(), a, o, h;
  for (e = e.toUpperCase(), r = 0, n = i.length; r < n; ++r)
    if (a = i[r].name.toUpperCase(), o = i[r].abbr.toUpperCase(), h = i[r].narrow.toUpperCase(), s)
      switch (t) {
        case "N":
        case "NN":
        case "NNN":
          if (o === e)
            return i[r];
          break;
        case "NNNN":
          if (a === e)
            return i[r];
          break;
        case "NNNNN":
          if (h === e)
            return i[r];
          break;
      }
    else if ([a, o, h].indexOf(e) >= 0)
      return i[r];
}
function Ma(e, t) {
  var s = e.since <= e.until ? 1 : -1;
  return t === void 0 ? u(e.since).year() : u(e.since).year() + (t - e.offset) * s;
}
function Ta() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].name;
  return "";
}
function Ya() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].narrow;
  return "";
}
function Ea() {
  var e, t, s, r = this.localeData().eras();
  for (e = 0, t = r.length; e < t; ++e)
    if (s = this.clone().startOf("day").valueOf(), r[e].since <= s && s <= r[e].until || r[e].until <= s && s <= r[e].since)
      return r[e].abbr;
  return "";
}
function xa() {
  var e, t, s, r, n = this.localeData().eras();
  for (e = 0, t = n.length; e < t; ++e)
    if (s = n[e].since <= n[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), n[e].since <= r && r <= n[e].until || n[e].until <= r && r <= n[e].since)
      return (this.year() - u(n[e].since).year()) * s + n[e].offset;
  return this.year();
}
function Ra(e) {
  return g(this, "_erasNameRegex") || is.call(this), e ? this._erasNameRegex : this._erasRegex;
}
function Na(e) {
  return g(this, "_erasAbbrRegex") || is.call(this), e ? this._erasAbbrRegex : this._erasRegex;
}
function Ca(e) {
  return g(this, "_erasNarrowRegex") || is.call(this), e ? this._erasNarrowRegex : this._erasRegex;
}
function ns(e, t) {
  return t.erasAbbrRegex(e);
}
function Aa(e, t) {
  return t.erasNameRegex(e);
}
function Pa(e, t) {
  return t.erasNarrowRegex(e);
}
function La(e, t) {
  return t._eraYearOrdinalRegex || Oe;
}
function is() {
  var e = [], t = [], s = [], r = [], n, i, a, o, h, d = this.eras();
  for (n = 0, i = d.length; n < i; ++n)
    a = re(d[n].name), o = re(d[n].abbr), h = re(d[n].narrow), t.push(a), e.push(o), s.push(h), r.push(a), r.push(o), r.push(h);
  this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
    "^(" + s.join("|") + ")",
    "i"
  );
}
f(0, ["gg", 2], 0, function() {
  return this.weekYear() % 100;
});
f(0, ["GG", 2], 0, function() {
  return this.isoWeekYear() % 100;
});
function dt(e, t) {
  f(0, [e, e.length], 0, t);
}
dt("gggg", "weekYear");
dt("ggggg", "weekYear");
dt("GGGG", "isoWeekYear");
dt("GGGGG", "isoWeekYear");
c("G", lt);
c("g", lt);
c("GG", b, C);
c("gg", b, C);
c("GGGG", $t, Gt);
c("gggg", $t, Gt);
c("GGGGG", ot, it);
c("ggggg", ot, it);
Ue(
  ["gggg", "ggggg", "GGGG", "GGGGG"],
  function(e, t, s, r) {
    t[r.substr(0, 2)] = m(e);
  }
);
Ue(["gg", "GG"], function(e, t, s, r) {
  t[r] = u.parseTwoDigitYear(e);
});
function Wa(e) {
  return lr.call(
    this,
    e,
    this.week(),
    this.weekday() + this.localeData()._week.dow,
    this.localeData()._week.dow,
    this.localeData()._week.doy
  );
}
function Fa(e) {
  return lr.call(
    this,
    e,
    this.isoWeek(),
    this.isoWeekday(),
    1,
    4
  );
}
function Ia() {
  return ne(this.year(), 1, 4);
}
function Ua() {
  return ne(this.isoWeekYear(), 1, 4);
}
function Ba() {
  var e = this.localeData()._week;
  return ne(this.year(), e.dow, e.doy);
}
function Ha() {
  var e = this.localeData()._week;
  return ne(this.weekYear(), e.dow, e.doy);
}
function lr(e, t, s, r, n) {
  var i;
  return e == null ? Pe(this, r, n).year : (i = ne(e, r, n), t > i && (t = i), Va.call(this, e, t, s, r, n));
}
function Va(e, t, s, r, n) {
  var i = Bs(e, t, s, r, n), a = Ae(i.year, 0, i.dayOfYear);
  return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
}
f("Q", 0, "Qo", "quarter");
c("Q", xs);
v("Q", function(e, t) {
  t[te] = (m(e) - 1) * 3;
});
function qa(e) {
  return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
}
f("D", ["DD", 2], "Do", "date");
c("D", b, De);
c("DD", b, C);
c("Do", function(e, t) {
  return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
});
v(["D", "DD"], G);
v("Do", function(e, t) {
  t[G] = m(e.match(b)[0]);
});
var hr = Me("Date", !0);
f("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
c("DDD", at);
c("DDDD", Rs);
v(["DDD", "DDDD"], function(e, t, s) {
  s._dayOfYear = m(e);
});
function Ga(e) {
  var t = Math.round(
    (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
  ) + 1;
  return e == null ? t : this.add(e - t, "d");
}
f("m", ["mm", 2], 0, "minute");
c("m", b, jt);
c("mm", b, C);
v(["m", "mm"], I);
var $a = Me("Minutes", !1);
f("s", ["ss", 2], 0, "second");
c("s", b, jt);
c("ss", b, C);
v(["s", "ss"], se);
var ja = Me("Seconds", !1);
f("S", 0, 0, function() {
  return ~~(this.millisecond() / 100);
});
f(0, ["SS", 2], 0, function() {
  return ~~(this.millisecond() / 10);
});
f(0, ["SSS", 3], 0, "millisecond");
f(0, ["SSSS", 4], 0, function() {
  return this.millisecond() * 10;
});
f(0, ["SSSSS", 5], 0, function() {
  return this.millisecond() * 100;
});
f(0, ["SSSSSS", 6], 0, function() {
  return this.millisecond() * 1e3;
});
f(0, ["SSSSSSS", 7], 0, function() {
  return this.millisecond() * 1e4;
});
f(0, ["SSSSSSSS", 8], 0, function() {
  return this.millisecond() * 1e5;
});
f(0, ["SSSSSSSSS", 9], 0, function() {
  return this.millisecond() * 1e6;
});
c("S", at, xs);
c("SS", at, C);
c("SSS", at, Rs);
var ue, ur;
for (ue = "SSSS"; ue.length <= 9; ue += "S")
  c(ue, Oe);
function za(e, t) {
  t[pe] = m(("0." + e) * 1e3);
}
for (ue = "S"; ue.length <= 9; ue += "S")
  v(ue, za);
ur = Me("Milliseconds", !1);
f("z", 0, 0, "zoneAbbr");
f("zz", 0, 0, "zoneName");
function Za() {
  return this._isUTC ? "UTC" : "";
}
function Ja() {
  return this._isUTC ? "Coordinated Universal Time" : "";
}
var l = Fe.prototype;
l.add = Hi;
l.calendar = Zi;
l.clone = Ji;
l.diff = ra;
l.endOf = da;
l.format = oa;
l.from = la;
l.fromNow = ha;
l.to = ua;
l.toNow = ca;
l.get = an;
l.invalidAt = Sa;
l.isAfter = Ki;
l.isBefore = Qi;
l.isBetween = Xi;
l.isSame = ea;
l.isSameOrAfter = ta;
l.isSameOrBefore = sa;
l.isValid = ka;
l.lang = rr;
l.locale = sr;
l.localeData = nr;
l.max = ki;
l.min = wi;
l.parsingFlags = va;
l.set = on;
l.startOf = fa;
l.subtract = Vi;
l.toArray = _a;
l.toObject = ga;
l.toDate = ya;
l.toISOString = ia;
l.inspect = aa;
typeof Symbol < "u" && Symbol.for != null && (l[Symbol.for("nodejs.util.inspect.custom")] = function() {
  return "Moment<" + this.format() + ">";
});
l.toJSON = wa;
l.toString = na;
l.unix = ma;
l.valueOf = pa;
l.creationData = ba;
l.eraName = Ta;
l.eraNarrow = Ya;
l.eraAbbr = Ea;
l.eraYear = xa;
l.year = As;
l.isLeapYear = nn;
l.weekYear = Wa;
l.isoWeekYear = Fa;
l.quarter = l.quarters = qa;
l.month = Is;
l.daysInMonth = yn;
l.week = l.weeks = On;
l.isoWeek = l.isoWeeks = Dn;
l.weeksInYear = Ba;
l.weeksInWeekYear = Ha;
l.isoWeeksInYear = Ia;
l.isoWeeksInISOWeekYear = Ua;
l.date = hr;
l.day = l.days = Fn;
l.weekday = In;
l.isoWeekday = Un;
l.dayOfYear = Ga;
l.hour = l.hours = jn;
l.minute = l.minutes = $a;
l.second = l.seconds = ja;
l.millisecond = l.milliseconds = ur;
l.utcOffset = Ei;
l.utc = Ri;
l.local = Ni;
l.parseZone = Ci;
l.hasAlignedHourOffset = Ai;
l.isDST = Pi;
l.isLocal = Wi;
l.isUtcOffset = Fi;
l.isUtc = Qs;
l.isUTC = Qs;
l.zoneAbbr = Za;
l.zoneName = Ja;
l.dates = L(
  "dates accessor is deprecated. Use date instead.",
  hr
);
l.months = L(
  "months accessor is deprecated. Use month instead",
  Is
);
l.years = L(
  "years accessor is deprecated. Use year instead",
  As
);
l.zone = L(
  "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
  xi
);
l.isDSTShifted = L(
  "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
  Li
);
function Ka(e) {
  return S(e * 1e3);
}
function Qa() {
  return S.apply(null, arguments).parseZone();
}
function cr(e) {
  return e;
}
var w = Ht.prototype;
w.calendar = Lr;
w.longDateFormat = Ur;
w.invalidDate = Hr;
w.ordinal = Gr;
w.preparse = cr;
w.postformat = cr;
w.relativeTime = jr;
w.pastFuture = zr;
w.set = Ar;
w.eras = Oa;
w.erasParse = Da;
w.erasConvertYear = Ma;
w.erasAbbrRegex = Na;
w.erasNameRegex = Ra;
w.erasNarrowRegex = Ca;
w.months = fn;
w.monthsShort = dn;
w.monthsParse = mn;
w.monthsRegex = gn;
w.monthsShortRegex = _n;
w.week = kn;
w.firstDayOfYear = bn;
w.firstDayOfWeek = Sn;
w.weekdays = Cn;
w.weekdaysMin = Pn;
w.weekdaysShort = An;
w.weekdaysParse = Wn;
w.weekdaysRegex = Bn;
w.weekdaysShortRegex = Hn;
w.weekdaysMinRegex = Vn;
w.isPM = Gn;
w.meridiem = zn;
function rt(e, t, s, r) {
  var n = ae(), i = Z().set(r, t);
  return n[s](i, e);
}
function fr(e, t, s) {
  if (ie(e) && (t = e, e = void 0), e = e || "", t != null)
    return rt(e, t, s, "month");
  var r, n = [];
  for (r = 0; r < 12; r++)
    n[r] = rt(e, r, s, "month");
  return n;
}
function as(e, t, s, r) {
  typeof e == "boolean" ? (ie(t) && (s = t, t = void 0), t = t || "") : (t = e, s = t, e = !1, ie(t) && (s = t, t = void 0), t = t || "");
  var n = ae(), i = e ? n._week.dow : 0, a, o = [];
  if (s != null)
    return rt(t, (s + i) % 7, r, "day");
  for (a = 0; a < 7; a++)
    o[a] = rt(t, (a + i) % 7, r, "day");
  return o;
}
function Xa(e, t) {
  return fr(e, t, "months");
}
function eo(e, t) {
  return fr(e, t, "monthsShort");
}
function to(e, t, s) {
  return as(e, t, s, "weekdays");
}
function so(e, t, s) {
  return as(e, t, s, "weekdaysShort");
}
function ro(e, t, s) {
  return as(e, t, s, "weekdaysMin");
}
ce("en", {
  eras: [
    {
      since: "0001-01-01",
      until: 1 / 0,
      offset: 1,
      name: "Anno Domini",
      narrow: "AD",
      abbr: "AD"
    },
    {
      since: "0000-12-31",
      until: -1 / 0,
      offset: 1,
      name: "Before Christ",
      narrow: "BC",
      abbr: "BC"
    }
  ],
  dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
  ordinal: function(e) {
    var t = e % 10, s = m(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
    return e + s;
  }
});
u.lang = L(
  "moment.lang is deprecated. Use moment.locale instead.",
  ce
);
u.langData = L(
  "moment.langData is deprecated. Use moment.localeData instead.",
  ae
);
var K = Math.abs;
function no() {
  var e = this._data;
  return this._milliseconds = K(this._milliseconds), this._days = K(this._days), this._months = K(this._months), e.milliseconds = K(e.milliseconds), e.seconds = K(e.seconds), e.minutes = K(e.minutes), e.hours = K(e.hours), e.months = K(e.months), e.years = K(e.years), this;
}
function dr(e, t, s, r) {
  var n = H(t, s);
  return e._milliseconds += r * n._milliseconds, e._days += r * n._days, e._months += r * n._months, e._bubble();
}
function io(e, t) {
  return dr(this, e, t, 1);
}
function ao(e, t) {
  return dr(this, e, t, -1);
}
function ws(e) {
  return e < 0 ? Math.floor(e) : Math.ceil(e);
}
function oo() {
  var e = this._milliseconds, t = this._days, s = this._months, r = this._data, n, i, a, o, h;
  return e >= 0 && t >= 0 && s >= 0 || e <= 0 && t <= 0 && s <= 0 || (e += ws(xt(s) + t) * 864e5, t = 0, s = 0), r.milliseconds = e % 1e3, n = A(e / 1e3), r.seconds = n % 60, i = A(n / 60), r.minutes = i % 60, a = A(i / 60), r.hours = a % 24, t += A(a / 24), h = A(pr(t)), s += h, t -= ws(xt(h)), o = A(s / 12), s %= 12, r.days = t, r.months = s, r.years = o, this;
}
function pr(e) {
  return e * 4800 / 146097;
}
function xt(e) {
  return e * 146097 / 4800;
}
function lo(e) {
  if (!this.isValid())
    return NaN;
  var t, s, r = this._milliseconds;
  if (e = W(e), e === "month" || e === "quarter" || e === "year")
    switch (t = this._days + r / 864e5, s = this._months + pr(t), e) {
      case "month":
        return s;
      case "quarter":
        return s / 3;
      case "year":
        return s / 12;
    }
  else
    switch (t = this._days + Math.round(xt(this._months)), e) {
      case "week":
        return t / 7 + r / 6048e5;
      case "day":
        return t + r / 864e5;
      case "hour":
        return t * 24 + r / 36e5;
      case "minute":
        return t * 1440 + r / 6e4;
      case "second":
        return t * 86400 + r / 1e3;
      case "millisecond":
        return Math.floor(t * 864e5) + r;
      default:
        throw new Error("Unknown unit " + e);
    }
}
function oe(e) {
  return function() {
    return this.as(e);
  };
}
var mr = oe("ms"), ho = oe("s"), uo = oe("m"), co = oe("h"), fo = oe("d"), po = oe("w"), mo = oe("M"), yo = oe("Q"), _o = oe("y"), go = mr;
function wo() {
  return H(this);
}
function ko(e) {
  return e = W(e), this.isValid() ? this[e + "s"]() : NaN;
}
function ye(e) {
  return function() {
    return this.isValid() ? this._data[e] : NaN;
  };
}
var vo = ye("milliseconds"), So = ye("seconds"), bo = ye("minutes"), Oo = ye("hours"), Do = ye("days"), Mo = ye("months"), To = ye("years");
function Yo() {
  return A(this.days() / 7);
}
var Q = Math.round, ke = {
  ss: 44,
  // a few seconds to seconds
  s: 45,
  // seconds to minute
  m: 45,
  // minutes to hour
  h: 22,
  // hours to day
  d: 26,
  // days to month/week
  w: null,
  // weeks to month
  M: 11
  // months to year
};
function Eo(e, t, s, r, n) {
  return n.relativeTime(t || 1, !!s, e, r);
}
function xo(e, t, s, r) {
  var n = H(e).abs(), i = Q(n.as("s")), a = Q(n.as("m")), o = Q(n.as("h")), h = Q(n.as("d")), d = Q(n.as("M")), k = Q(n.as("w")), Y = Q(n.as("y")), x = i <= s.ss && ["s", i] || i < s.s && ["ss", i] || a <= 1 && ["m"] || a < s.m && ["mm", a] || o <= 1 && ["h"] || o < s.h && ["hh", o] || h <= 1 && ["d"] || h < s.d && ["dd", h];
  return s.w != null && (x = x || k <= 1 && ["w"] || k < s.w && ["ww", k]), x = x || d <= 1 && ["M"] || d < s.M && ["MM", d] || Y <= 1 && ["y"] || ["yy", Y], x[2] = t, x[3] = +e > 0, x[4] = r, Eo.apply(null, x);
}
function Ro(e) {
  return e === void 0 ? Q : typeof e == "function" ? (Q = e, !0) : !1;
}
function No(e, t) {
  return ke[e] === void 0 ? !1 : t === void 0 ? ke[e] : (ke[e] = t, e === "s" && (ke.ss = t - 1), !0);
}
function Co(e, t) {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var s = !1, r = ke, n, i;
  return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (s = e), typeof t == "object" && (r = Object.assign({}, ke, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), n = this.localeData(), i = xo(this, !s, r, n), s && (i = n.pastFuture(+this, i)), n.postformat(i);
}
var kt = Math.abs;
function ge(e) {
  return (e > 0) - (e < 0) || +e;
}
function pt() {
  if (!this.isValid())
    return this.localeData().invalidDate();
  var e = kt(this._milliseconds) / 1e3, t = kt(this._days), s = kt(this._months), r, n, i, a, o = this.asSeconds(), h, d, k, Y;
  return o ? (r = A(e / 60), n = A(r / 60), e %= 60, r %= 60, i = A(s / 12), s %= 12, a = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", h = o < 0 ? "-" : "", d = ge(this._months) !== ge(o) ? "-" : "", k = ge(this._days) !== ge(o) ? "-" : "", Y = ge(this._milliseconds) !== ge(o) ? "-" : "", h + "P" + (i ? d + i + "Y" : "") + (s ? d + s + "M" : "") + (t ? k + t + "D" : "") + (n || r || e ? "T" : "") + (n ? Y + n + "H" : "") + (r ? Y + r + "M" : "") + (e ? Y + a + "S" : "")) : "P0D";
}
var _ = ft.prototype;
_.isValid = Di;
_.abs = no;
_.add = io;
_.subtract = ao;
_.as = lo;
_.asMilliseconds = mr;
_.asSeconds = ho;
_.asMinutes = uo;
_.asHours = co;
_.asDays = fo;
_.asWeeks = po;
_.asMonths = mo;
_.asQuarters = yo;
_.asYears = _o;
_.valueOf = go;
_._bubble = oo;
_.clone = wo;
_.get = ko;
_.milliseconds = vo;
_.seconds = So;
_.minutes = bo;
_.hours = Oo;
_.days = Do;
_.weeks = Yo;
_.months = Mo;
_.years = To;
_.humanize = Co;
_.toISOString = pt;
_.toString = pt;
_.toJSON = pt;
_.locale = sr;
_.localeData = nr;
_.toIsoString = L(
  "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
  pt
);
_.lang = rr;
f("X", 0, 0, "unix");
f("x", 0, 0, "valueOf");
c("x", lt);
c("X", Qr);
v("X", function(e, t, s) {
  s._d = new Date(parseFloat(e) * 1e3);
});
v("x", function(e, t, s) {
  s._d = new Date(m(e));
});
//! moment.js
u.version = "2.30.1";
Nr(S);
u.fn = l;
u.min = vi;
u.max = Si;
u.now = bi;
u.utc = Z;
u.unix = Ka;
u.months = Xa;
u.isDate = We;
u.locale = ce;
u.invalid = nt;
u.duration = H;
u.isMoment = B;
u.weekdays = to;
u.parseZone = Qa;
u.localeData = ae;
u.isDuration = je;
u.monthsShort = eo;
u.weekdaysMin = ro;
u.defineLocale = Qt;
u.updateLocale = Qn;
u.locales = Xn;
u.weekdaysShort = so;
u.normalizeUnits = W;
u.relativeTimeRounding = Ro;
u.relativeTimeThreshold = No;
u.calendarFormat = zi;
u.prototype = l;
u.HTML5_FMT = {
  DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
  // <input type="datetime-local" />
  DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
  // <input type="datetime-local" step="1" />
  DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
  // <input type="datetime-local" step="0.001" />
  DATE: "YYYY-MM-DD",
  // <input type="date" />
  TIME: "HH:mm",
  // <input type="time" />
  TIME_SECONDS: "HH:mm:ss",
  // <input type="time" step="1" />
  TIME_MS: "HH:mm:ss.SSS",
  // <input type="time" step="0.001" />
  WEEK: "GGGG-[W]WW",
  // <input type="week" />
  MONTH: "YYYY-MM"
  // <input type="month" />
};
const Ao = (e) => {
  let t = [], s = e.split("|");
  for (let r of s) {
    let n = r.split(",");
    for (let i = 1; i < n.length; i++)
      t.push(`${n[0]}.${n[i]}`);
  }
  return t;
}, Po = (e) => {
  const t = {
    id: e.u,
    campaigns: [],
    expTimestamp: e.exp,
    expDate: u.unix(e.exp).format("YYYY/MM/DD HH:mm:ss"),
    lts: e.lts,
    appId: e.a,
    appVersion: e.appv
  };
  let s = 0, r = 0;
  const n = Ao(e.p);
  for (let i of e.c) {
    t.campaigns[s] = {
      id: r + i,
      primary: e.uc == s,
      owner: !!e.oc.includes(s),
      permissions: []
    };
    for (let a of e.cp[s])
      t.campaigns[s].permissions.push(n[a]);
    r = r + i, s += 1;
  }
  return t;
};
class Pl {
  constructor(t = "JWT") {
    if (!t) throw new Error("Auth strategy is required");
    switch (t) {
      case "JWT":
        this.strategy = new Rr();
        break;
      default:
        throw new Error(`Invalid Adapter: ${t}`);
    }
  }
  isValid(t) {
    return this.strategy.isValid(t);
  }
  decode(t) {
    const s = this.strategy.decode(t);
    return Po(s);
  }
}
let yr = class {
  constructor() {
  }
  get(t) {
  }
  set(t, s) {
  }
  remove(t) {
  }
  clear() {
  }
};
class Lo extends yr {
  constructor() {
    super();
  }
  get(t) {
    const s = window.localStorage.getItem(t);
    try {
      return s ? JSON.parse(s) : null;
    } catch {
      return s;
    }
  }
  set(t, s) {
    try {
      const n = typeof s == "object" && s !== null ? JSON.stringify(s) : String(s);
      window.localStorage.setItem(t, n);
    } catch (r) {
      console.error(`Error setting localStorage[${t}]:`, r);
    }
  }
  remove(t) {
    try {
      window.localStorage.removeItem(t);
    } catch (s) {
      console.error(`Error in localStorage[${t}]:`, s);
    }
  }
  clear() {
    try {
      window.localStorage.clear();
    } catch (t) {
      console.error("Error in localStorage:", t);
    }
  }
}
var le;
class Wo extends yr {
  constructor() {
    super();
    Be(this, le);
    _e(this, le, /* @__PURE__ */ new Map());
  }
  get(s) {
    return N(this, le).get(s);
  }
  set(s, r) {
    N(this, le).set(s, r);
  }
  remove(s) {
    N(this, le).delete(s);
  }
  clear() {
    N(this, le).clear();
  }
}
le = new WeakMap();
class Wl {
  constructor(t = "memory") {
    if (!t) throw new Error("Cache strategy is required");
    switch (t) {
      case "localStorage":
        this.strategy = new Lo();
        break;
      case "memory":
        this.strategy = new Wo();
        break;
      default:
        throw new Error(`Estrategia no válida: ${t}`);
    }
  }
  get(t) {
    return this.strategy.get(t);
  }
  set(t, s) {
    this.strategy.set(t, s);
  }
  remove(t) {
    this.strategy.remove(t);
  }
  clear() {
    this.strategy.clear();
  }
  setStrategy(t) {
    this.strategy = t;
  }
}
let Fo = class {
  constructor() {
  }
  subscribe() {
    throw new Error("subscribe method must be implemented");
  }
  unsubscribe() {
    throw new Error("unsubscribe method must be implemented");
  }
  emit(t, s) {
    throw new Error("on method must be implemented");
  }
};
var X;
const V = class V extends Fo {
  constructor() {
    if (N(V, X))
      return N(V, X);
    super(), this.listeners = /* @__PURE__ */ new Map(), _e(V, X, this);
  }
  /**
   * Subscribe to Event.
   * @param {string} eventName - Event Name
   * @param {Function} callback - Function to be called when the event is emitted
   */
  subscribe(t, s) {
    this.listeners.has(t) || this.listeners.set(t, /* @__PURE__ */ new Set()), this.listeners.get(t).add(s);
  }
  /**
   * Unsubscribe from Event.
   * @param {string} eventName - Event name
   * @param {Function} callback - Function to be removed (should be the same as the one used in subscribe)
   */
  unsubscribe(t, s) {
    this.listeners.has(t) && (this.listeners.get(t).delete(s), this.listeners.get(t).size === 0 && this.listeners.delete(t));
  }
  /**
   * Emit an event to all subscribers.
   * @param {string} eventName - Event name
   * @param {any} payload - Data sent to subscribers
   */
  emit(t, s) {
    if (this.listeners.has(t))
      for (const r of this.listeners.get(t))
        r(s);
  }
  /**
   * subscribe to an event only once.
   * @param {string} eventName
   * @param {Function} callback
   */
  subscribeOnce(t, s) {
    const r = (n) => {
      s(n), this.unsubscribe(t, r);
    };
    this.subscribe(t, r);
  }
  /**
   * Clena all listeners.
   */
  clear() {
    this.listeners.clear();
  }
  /**
   * Get the singleton instance of EventBus.
   * @returns {EventBus} The singleton instance of EventBus
   */
  static getInstance() {
    return N(V, X) || _e(V, X, new V()), N(V, X);
  }
};
X = new WeakMap(), Be(V, X, null);
let Rt = V;
class Il {
  constructor(t = "eventBus") {
    if (!t) throw new Error("Event strategy is required");
    switch (t) {
      case "eventBus":
        this.strategy = new Rt();
        break;
      default:
        throw new Error(`Strategy not found: ${t}`);
    }
  }
  subscribe(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.subscribe(t, s);
  }
  unsubscribe(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.unsubscribe(t, s);
  }
  emit(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.emit(t, s);
  }
  subscribeOnce(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.subscribeOnce(t, s);
  }
  clear() {
    return this.strategy.clear();
  }
}
const z = /* @__PURE__ */ Object.create(null);
z.open = "0";
z.close = "1";
z.ping = "2";
z.pong = "3";
z.message = "4";
z.upgrade = "5";
z.noop = "6";
const Ze = /* @__PURE__ */ Object.create(null);
Object.keys(z).forEach((e) => {
  Ze[z[e]] = e;
});
const Nt = { type: "error", data: "parser error" }, _r = typeof Blob == "function" || typeof Blob < "u" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]", gr = typeof ArrayBuffer == "function", wr = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer, os = ({ type: e, data: t }, s, r) => _r && t instanceof Blob ? s ? r(t) : ks(t, r) : gr && (t instanceof ArrayBuffer || wr(t)) ? s ? r(t) : ks(new Blob([t]), r) : r(z[e] + (t || "")), ks = (e, t) => {
  const s = new FileReader();
  return s.onload = function() {
    const r = s.result.split(",")[1];
    t("b" + (r || ""));
  }, s.readAsDataURL(e);
};
function vs(e) {
  return e instanceof Uint8Array ? e : e instanceof ArrayBuffer ? new Uint8Array(e) : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
}
let vt;
function Io(e, t) {
  if (_r && e.data instanceof Blob)
    return e.data.arrayBuffer().then(vs).then(t);
  if (gr && (e.data instanceof ArrayBuffer || wr(e.data)))
    return t(vs(e.data));
  os(e, !1, (s) => {
    vt || (vt = new TextEncoder()), t(vt.encode(s));
  });
}
const Ss = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Re = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (let e = 0; e < Ss.length; e++)
  Re[Ss.charCodeAt(e)] = e;
const Uo = (e) => {
  let t = e.length * 0.75, s = e.length, r, n = 0, i, a, o, h;
  e[e.length - 1] === "=" && (t--, e[e.length - 2] === "=" && t--);
  const d = new ArrayBuffer(t), k = new Uint8Array(d);
  for (r = 0; r < s; r += 4)
    i = Re[e.charCodeAt(r)], a = Re[e.charCodeAt(r + 1)], o = Re[e.charCodeAt(r + 2)], h = Re[e.charCodeAt(r + 3)], k[n++] = i << 2 | a >> 4, k[n++] = (a & 15) << 4 | o >> 2, k[n++] = (o & 3) << 6 | h & 63;
  return d;
}, Bo = typeof ArrayBuffer == "function", ls = (e, t) => {
  if (typeof e != "string")
    return {
      type: "message",
      data: kr(e, t)
    };
  const s = e.charAt(0);
  return s === "b" ? {
    type: "message",
    data: Ho(e.substring(1), t)
  } : Ze[s] ? e.length > 1 ? {
    type: Ze[s],
    data: e.substring(1)
  } : {
    type: Ze[s]
  } : Nt;
}, Ho = (e, t) => {
  if (Bo) {
    const s = Uo(e);
    return kr(s, t);
  } else
    return { base64: !0, data: e };
}, kr = (e, t) => {
  switch (t) {
    case "blob":
      return e instanceof Blob ? e : new Blob([e]);
    case "arraybuffer":
    default:
      return e instanceof ArrayBuffer ? e : e.buffer;
  }
}, vr = "", Vo = (e, t) => {
  const s = e.length, r = new Array(s);
  let n = 0;
  e.forEach((i, a) => {
    os(i, !1, (o) => {
      r[a] = o, ++n === s && t(r.join(vr));
    });
  });
}, qo = (e, t) => {
  const s = e.split(vr), r = [];
  for (let n = 0; n < s.length; n++) {
    const i = ls(s[n], t);
    if (r.push(i), i.type === "error")
      break;
  }
  return r;
};
function Go() {
  return new TransformStream({
    transform(e, t) {
      Io(e, (s) => {
        const r = s.length;
        let n;
        if (r < 126)
          n = new Uint8Array(1), new DataView(n.buffer).setUint8(0, r);
        else if (r < 65536) {
          n = new Uint8Array(3);
          const i = new DataView(n.buffer);
          i.setUint8(0, 126), i.setUint16(1, r);
        } else {
          n = new Uint8Array(9);
          const i = new DataView(n.buffer);
          i.setUint8(0, 127), i.setBigUint64(1, BigInt(r));
        }
        e.data && typeof e.data != "string" && (n[0] |= 128), t.enqueue(n), t.enqueue(s);
      });
    }
  });
}
let St;
function qe(e) {
  return e.reduce((t, s) => t + s.length, 0);
}
function Ge(e, t) {
  if (e[0].length === t)
    return e.shift();
  const s = new Uint8Array(t);
  let r = 0;
  for (let n = 0; n < t; n++)
    s[n] = e[0][r++], r === e[0].length && (e.shift(), r = 0);
  return e.length && r < e[0].length && (e[0] = e[0].slice(r)), s;
}
function $o(e, t) {
  St || (St = new TextDecoder());
  const s = [];
  let r = 0, n = -1, i = !1;
  return new TransformStream({
    transform(a, o) {
      for (s.push(a); ; ) {
        if (r === 0) {
          if (qe(s) < 1)
            break;
          const h = Ge(s, 1);
          i = (h[0] & 128) === 128, n = h[0] & 127, n < 126 ? r = 3 : n === 126 ? r = 1 : r = 2;
        } else if (r === 1) {
          if (qe(s) < 2)
            break;
          const h = Ge(s, 2);
          n = new DataView(h.buffer, h.byteOffset, h.length).getUint16(0), r = 3;
        } else if (r === 2) {
          if (qe(s) < 8)
            break;
          const h = Ge(s, 8), d = new DataView(h.buffer, h.byteOffset, h.length), k = d.getUint32(0);
          if (k > Math.pow(2, 21) - 1) {
            o.enqueue(Nt);
            break;
          }
          n = k * Math.pow(2, 32) + d.getUint32(4), r = 3;
        } else {
          if (qe(s) < n)
            break;
          const h = Ge(s, n);
          o.enqueue(ls(i ? h : St.decode(h), t)), r = 0;
        }
        if (n === 0 || n > e) {
          o.enqueue(Nt);
          break;
        }
      }
    }
  });
}
const Sr = 4;
function M(e) {
  if (e) return jo(e);
}
function jo(e) {
  for (var t in M.prototype)
    e[t] = M.prototype[t];
  return e;
}
M.prototype.on = M.prototype.addEventListener = function(e, t) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this;
};
M.prototype.once = function(e, t) {
  function s() {
    this.off(e, s), t.apply(this, arguments);
  }
  return s.fn = t, this.on(e, s), this;
};
M.prototype.off = M.prototype.removeListener = M.prototype.removeAllListeners = M.prototype.removeEventListener = function(e, t) {
  if (this._callbacks = this._callbacks || {}, arguments.length == 0)
    return this._callbacks = {}, this;
  var s = this._callbacks["$" + e];
  if (!s) return this;
  if (arguments.length == 1)
    return delete this._callbacks["$" + e], this;
  for (var r, n = 0; n < s.length; n++)
    if (r = s[n], r === t || r.fn === t) {
      s.splice(n, 1);
      break;
    }
  return s.length === 0 && delete this._callbacks["$" + e], this;
};
M.prototype.emit = function(e) {
  this._callbacks = this._callbacks || {};
  for (var t = new Array(arguments.length - 1), s = this._callbacks["$" + e], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  if (s) {
    s = s.slice(0);
    for (var r = 0, n = s.length; r < n; ++r)
      s[r].apply(this, t);
  }
  return this;
};
M.prototype.emitReserved = M.prototype.emit;
M.prototype.listeners = function(e) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
};
M.prototype.hasListeners = function(e) {
  return !!this.listeners(e).length;
};
const mt = typeof Promise == "function" && typeof Promise.resolve == "function" ? (t) => Promise.resolve().then(t) : (t, s) => s(t, 0), P = typeof self < "u" ? self : typeof window < "u" ? window : Function("return this")(), zo = "arraybuffer";
function br(e, ...t) {
  return t.reduce((s, r) => (e.hasOwnProperty(r) && (s[r] = e[r]), s), {});
}
const Zo = P.setTimeout, Jo = P.clearTimeout;
function yt(e, t) {
  t.useNativeTimers ? (e.setTimeoutFn = Zo.bind(P), e.clearTimeoutFn = Jo.bind(P)) : (e.setTimeoutFn = P.setTimeout.bind(P), e.clearTimeoutFn = P.clearTimeout.bind(P));
}
const Ko = 1.33;
function Qo(e) {
  return typeof e == "string" ? Xo(e) : Math.ceil((e.byteLength || e.size) * Ko);
}
function Xo(e) {
  let t = 0, s = 0;
  for (let r = 0, n = e.length; r < n; r++)
    t = e.charCodeAt(r), t < 128 ? s += 1 : t < 2048 ? s += 2 : t < 55296 || t >= 57344 ? s += 3 : (r++, s += 4);
  return s;
}
function Or() {
  return Date.now().toString(36).substring(3) + Math.random().toString(36).substring(2, 5);
}
function el(e) {
  let t = "";
  for (let s in e)
    e.hasOwnProperty(s) && (t.length && (t += "&"), t += encodeURIComponent(s) + "=" + encodeURIComponent(e[s]));
  return t;
}
function tl(e) {
  let t = {}, s = e.split("&");
  for (let r = 0, n = s.length; r < n; r++) {
    let i = s[r].split("=");
    t[decodeURIComponent(i[0])] = decodeURIComponent(i[1]);
  }
  return t;
}
class sl extends Error {
  constructor(t, s, r) {
    super(t), this.description = s, this.context = r, this.type = "TransportError";
  }
}
class hs extends M {
  /**
   * Transport abstract constructor.
   *
   * @param {Object} opts - options
   * @protected
   */
  constructor(t) {
    super(), this.writable = !1, yt(this, t), this.opts = t, this.query = t.query, this.socket = t.socket, this.supportsBinary = !t.forceBase64;
  }
  /**
   * Emits an error.
   *
   * @param {String} reason
   * @param description
   * @param context - the error context
   * @return {Transport} for chaining
   * @protected
   */
  onError(t, s, r) {
    return super.emitReserved("error", new sl(t, s, r)), this;
  }
  /**
   * Opens the transport.
   */
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  /**
   * Closes the transport.
   */
  close() {
    return (this.readyState === "opening" || this.readyState === "open") && (this.doClose(), this.onClose()), this;
  }
  /**
   * Sends multiple packets.
   *
   * @param {Array} packets
   */
  send(t) {
    this.readyState === "open" && this.write(t);
  }
  /**
   * Called upon open
   *
   * @protected
   */
  onOpen() {
    this.readyState = "open", this.writable = !0, super.emitReserved("open");
  }
  /**
   * Called with data.
   *
   * @param {String} data
   * @protected
   */
  onData(t) {
    const s = ls(t, this.socket.binaryType);
    this.onPacket(s);
  }
  /**
   * Called with a decoded packet.
   *
   * @protected
   */
  onPacket(t) {
    super.emitReserved("packet", t);
  }
  /**
   * Called upon close.
   *
   * @protected
   */
  onClose(t) {
    this.readyState = "closed", super.emitReserved("close", t);
  }
  /**
   * Pauses the transport, in order not to lose packets during an upgrade.
   *
   * @param onPause
   */
  pause(t) {
  }
  createUri(t, s = {}) {
    return t + "://" + this._hostname() + this._port() + this.opts.path + this._query(s);
  }
  _hostname() {
    const t = this.opts.hostname;
    return t.indexOf(":") === -1 ? t : "[" + t + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && +(this.opts.port !== 443) || !this.opts.secure && Number(this.opts.port) !== 80) ? ":" + this.opts.port : "";
  }
  _query(t) {
    const s = el(t);
    return s.length ? "?" + s : "";
  }
}
class rl extends hs {
  constructor() {
    super(...arguments), this._polling = !1;
  }
  get name() {
    return "polling";
  }
  /**
   * Opens the socket (triggers polling). We write a PING message to determine
   * when the transport is open.
   *
   * @protected
   */
  doOpen() {
    this._poll();
  }
  /**
   * Pauses polling.
   *
   * @param {Function} onPause - callback upon buffers are flushed and transport is paused
   * @package
   */
  pause(t) {
    this.readyState = "pausing";
    const s = () => {
      this.readyState = "paused", t();
    };
    if (this._polling || !this.writable) {
      let r = 0;
      this._polling && (r++, this.once("pollComplete", function() {
        --r || s();
      })), this.writable || (r++, this.once("drain", function() {
        --r || s();
      }));
    } else
      s();
  }
  /**
   * Starts polling cycle.
   *
   * @private
   */
  _poll() {
    this._polling = !0, this.doPoll(), this.emitReserved("poll");
  }
  /**
   * Overloads onData to detect payloads.
   *
   * @protected
   */
  onData(t) {
    const s = (r) => {
      if (this.readyState === "opening" && r.type === "open" && this.onOpen(), r.type === "close")
        return this.onClose({ description: "transport closed by the server" }), !1;
      this.onPacket(r);
    };
    qo(t, this.socket.binaryType).forEach(s), this.readyState !== "closed" && (this._polling = !1, this.emitReserved("pollComplete"), this.readyState === "open" && this._poll());
  }
  /**
   * For polling, send a close packet.
   *
   * @protected
   */
  doClose() {
    const t = () => {
      this.write([{ type: "close" }]);
    };
    this.readyState === "open" ? t() : this.once("open", t);
  }
  /**
   * Writes a packets payload.
   *
   * @param {Array} packets - data packets
   * @protected
   */
  write(t) {
    this.writable = !1, Vo(t, (s) => {
      this.doWrite(s, () => {
        this.writable = !0, this.emitReserved("drain");
      });
    });
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "https" : "http", s = this.query || {};
    return this.opts.timestampRequests !== !1 && (s[this.opts.timestampParam] = Or()), !this.supportsBinary && !s.sid && (s.b64 = 1), this.createUri(t, s);
  }
}
let Dr = !1;
try {
  Dr = typeof XMLHttpRequest < "u" && "withCredentials" in new XMLHttpRequest();
} catch {
}
const nl = Dr;
function il() {
}
class al extends rl {
  /**
   * XHR Polling constructor.
   *
   * @param {Object} opts
   * @package
   */
  constructor(t) {
    if (super(t), typeof location < "u") {
      const s = location.protocol === "https:";
      let r = location.port;
      r || (r = s ? "443" : "80"), this.xd = typeof location < "u" && t.hostname !== location.hostname || r !== t.port;
    }
  }
  /**
   * Sends data.
   *
   * @param {String} data to send.
   * @param {Function} called upon flush.
   * @private
   */
  doWrite(t, s) {
    const r = this.request({
      method: "POST",
      data: t
    });
    r.on("success", s), r.on("error", (n, i) => {
      this.onError("xhr post error", n, i);
    });
  }
  /**
   * Starts a poll cycle.
   *
   * @private
   */
  doPoll() {
    const t = this.request();
    t.on("data", this.onData.bind(this)), t.on("error", (s, r) => {
      this.onError("xhr poll error", s, r);
    }), this.pollXhr = t;
  }
}
class $ extends M {
  /**
   * Request constructor
   *
   * @param {Object} options
   * @package
   */
  constructor(t, s, r) {
    super(), this.createRequest = t, yt(this, r), this._opts = r, this._method = r.method || "GET", this._uri = s, this._data = r.data !== void 0 ? r.data : null, this._create();
  }
  /**
   * Creates the XHR object and sends the request.
   *
   * @private
   */
  _create() {
    var t;
    const s = br(this._opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    s.xdomain = !!this._opts.xd;
    const r = this._xhr = this.createRequest(s);
    try {
      r.open(this._method, this._uri, !0);
      try {
        if (this._opts.extraHeaders) {
          r.setDisableHeaderCheck && r.setDisableHeaderCheck(!0);
          for (let n in this._opts.extraHeaders)
            this._opts.extraHeaders.hasOwnProperty(n) && r.setRequestHeader(n, this._opts.extraHeaders[n]);
        }
      } catch {
      }
      if (this._method === "POST")
        try {
          r.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
        } catch {
        }
      try {
        r.setRequestHeader("Accept", "*/*");
      } catch {
      }
      (t = this._opts.cookieJar) === null || t === void 0 || t.addCookies(r), "withCredentials" in r && (r.withCredentials = this._opts.withCredentials), this._opts.requestTimeout && (r.timeout = this._opts.requestTimeout), r.onreadystatechange = () => {
        var n;
        r.readyState === 3 && ((n = this._opts.cookieJar) === null || n === void 0 || n.parseCookies(
          // @ts-ignore
          r.getResponseHeader("set-cookie")
        )), r.readyState === 4 && (r.status === 200 || r.status === 1223 ? this._onLoad() : this.setTimeoutFn(() => {
          this._onError(typeof r.status == "number" ? r.status : 0);
        }, 0));
      }, r.send(this._data);
    } catch (n) {
      this.setTimeoutFn(() => {
        this._onError(n);
      }, 0);
      return;
    }
    typeof document < "u" && (this._index = $.requestsCount++, $.requests[this._index] = this);
  }
  /**
   * Called upon error.
   *
   * @private
   */
  _onError(t) {
    this.emitReserved("error", t, this._xhr), this._cleanup(!0);
  }
  /**
   * Cleans up house.
   *
   * @private
   */
  _cleanup(t) {
    if (!(typeof this._xhr > "u" || this._xhr === null)) {
      if (this._xhr.onreadystatechange = il, t)
        try {
          this._xhr.abort();
        } catch {
        }
      typeof document < "u" && delete $.requests[this._index], this._xhr = null;
    }
  }
  /**
   * Called upon load.
   *
   * @private
   */
  _onLoad() {
    const t = this._xhr.responseText;
    t !== null && (this.emitReserved("data", t), this.emitReserved("success"), this._cleanup());
  }
  /**
   * Aborts the request.
   *
   * @package
   */
  abort() {
    this._cleanup();
  }
}
$.requestsCount = 0;
$.requests = {};
if (typeof document < "u") {
  if (typeof attachEvent == "function")
    attachEvent("onunload", bs);
  else if (typeof addEventListener == "function") {
    const e = "onpagehide" in P ? "pagehide" : "unload";
    addEventListener(e, bs, !1);
  }
}
function bs() {
  for (let e in $.requests)
    $.requests.hasOwnProperty(e) && $.requests[e].abort();
}
const ol = function() {
  const e = Mr({
    xdomain: !1
  });
  return e && e.responseType !== null;
}();
class ll extends al {
  constructor(t) {
    super(t);
    const s = t && t.forceBase64;
    this.supportsBinary = ol && !s;
  }
  request(t = {}) {
    return Object.assign(t, { xd: this.xd }, this.opts), new $(Mr, this.uri(), t);
  }
}
function Mr(e) {
  const t = e.xdomain;
  try {
    if (typeof XMLHttpRequest < "u" && (!t || nl))
      return new XMLHttpRequest();
  } catch {
  }
  if (!t)
    try {
      return new P[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
    } catch {
    }
}
const Tr = typeof navigator < "u" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
class hl extends hs {
  get name() {
    return "websocket";
  }
  doOpen() {
    const t = this.uri(), s = this.opts.protocols, r = Tr ? {} : br(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
    try {
      this.ws = this.createSocket(t, s, r);
    } catch (n) {
      return this.emitReserved("error", n);
    }
    this.ws.binaryType = this.socket.binaryType, this.addEventListeners();
  }
  /**
   * Adds event listeners to the socket
   *
   * @private
   */
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (t) => this.onClose({
      description: "websocket connection closed",
      context: t
    }), this.ws.onmessage = (t) => this.onData(t.data), this.ws.onerror = (t) => this.onError("websocket error", t);
  }
  write(t) {
    this.writable = !1;
    for (let s = 0; s < t.length; s++) {
      const r = t[s], n = s === t.length - 1;
      os(r, this.supportsBinary, (i) => {
        try {
          this.doWrite(r, i);
        } catch {
        }
        n && mt(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    typeof this.ws < "u" && (this.ws.onerror = () => {
    }, this.ws.close(), this.ws = null);
  }
  /**
   * Generates uri for connection.
   *
   * @private
   */
  uri() {
    const t = this.opts.secure ? "wss" : "ws", s = this.query || {};
    return this.opts.timestampRequests && (s[this.opts.timestampParam] = Or()), this.supportsBinary || (s.b64 = 1), this.createUri(t, s);
  }
}
const bt = P.WebSocket || P.MozWebSocket;
class ul extends hl {
  createSocket(t, s, r) {
    return Tr ? new bt(t, s, r) : s ? new bt(t, s) : new bt(t);
  }
  doWrite(t, s) {
    this.ws.send(s);
  }
}
class cl extends hs {
  get name() {
    return "webtransport";
  }
  doOpen() {
    try {
      this._transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]);
    } catch (t) {
      return this.emitReserved("error", t);
    }
    this._transport.closed.then(() => {
      this.onClose();
    }).catch((t) => {
      this.onError("webtransport error", t);
    }), this._transport.ready.then(() => {
      this._transport.createBidirectionalStream().then((t) => {
        const s = $o(Number.MAX_SAFE_INTEGER, this.socket.binaryType), r = t.readable.pipeThrough(s).getReader(), n = Go();
        n.readable.pipeTo(t.writable), this._writer = n.writable.getWriter();
        const i = () => {
          r.read().then(({ done: o, value: h }) => {
            o || (this.onPacket(h), i());
          }).catch((o) => {
          });
        };
        i();
        const a = { type: "open" };
        this.query.sid && (a.data = `{"sid":"${this.query.sid}"}`), this._writer.write(a).then(() => this.onOpen());
      });
    });
  }
  write(t) {
    this.writable = !1;
    for (let s = 0; s < t.length; s++) {
      const r = t[s], n = s === t.length - 1;
      this._writer.write(r).then(() => {
        n && mt(() => {
          this.writable = !0, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    var t;
    (t = this._transport) === null || t === void 0 || t.close();
  }
}
const fl = {
  websocket: ul,
  webtransport: cl,
  polling: ll
}, dl = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, pl = [
  "source",
  "protocol",
  "authority",
  "userInfo",
  "user",
  "password",
  "host",
  "port",
  "relative",
  "path",
  "directory",
  "file",
  "query",
  "anchor"
];
function Ct(e) {
  if (e.length > 8e3)
    throw "URI too long";
  const t = e, s = e.indexOf("["), r = e.indexOf("]");
  s != -1 && r != -1 && (e = e.substring(0, s) + e.substring(s, r).replace(/:/g, ";") + e.substring(r, e.length));
  let n = dl.exec(e || ""), i = {}, a = 14;
  for (; a--; )
    i[pl[a]] = n[a] || "";
  return s != -1 && r != -1 && (i.source = t, i.host = i.host.substring(1, i.host.length - 1).replace(/;/g, ":"), i.authority = i.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), i.ipv6uri = !0), i.pathNames = ml(i, i.path), i.queryKey = yl(i, i.query), i;
}
function ml(e, t) {
  const s = /\/{2,9}/g, r = t.replace(s, "/").split("/");
  return (t.slice(0, 1) == "/" || t.length === 0) && r.splice(0, 1), t.slice(-1) == "/" && r.splice(r.length - 1, 1), r;
}
function yl(e, t) {
  const s = {};
  return t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(r, n, i) {
    n && (s[n] = i);
  }), s;
}
const At = typeof addEventListener == "function" && typeof removeEventListener == "function", Je = [];
At && addEventListener("offline", () => {
  Je.forEach((e) => e());
}, !1);
class fe extends M {
  /**
   * Socket constructor.
   *
   * @param {String|Object} uri - uri or options
   * @param {Object} opts - options
   */
  constructor(t, s) {
    if (super(), this.binaryType = zo, this.writeBuffer = [], this._prevBufferLen = 0, this._pingInterval = -1, this._pingTimeout = -1, this._maxPayload = -1, this._pingTimeoutTime = 1 / 0, t && typeof t == "object" && (s = t, t = null), t) {
      const r = Ct(t);
      s.hostname = r.host, s.secure = r.protocol === "https" || r.protocol === "wss", s.port = r.port, r.query && (s.query = r.query);
    } else s.host && (s.hostname = Ct(s.host).host);
    yt(this, s), this.secure = s.secure != null ? s.secure : typeof location < "u" && location.protocol === "https:", s.hostname && !s.port && (s.port = this.secure ? "443" : "80"), this.hostname = s.hostname || (typeof location < "u" ? location.hostname : "localhost"), this.port = s.port || (typeof location < "u" && location.port ? location.port : this.secure ? "443" : "80"), this.transports = [], this._transportsByName = {}, s.transports.forEach((r) => {
      const n = r.prototype.name;
      this.transports.push(n), this._transportsByName[n] = r;
    }), this.opts = Object.assign({
      path: "/engine.io",
      agent: !1,
      withCredentials: !1,
      upgrade: !0,
      timestampParam: "t",
      rememberUpgrade: !1,
      addTrailingSlash: !0,
      rejectUnauthorized: !0,
      perMessageDeflate: {
        threshold: 1024
      },
      transportOptions: {},
      closeOnBeforeunload: !1
    }, s), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), typeof this.opts.query == "string" && (this.opts.query = tl(this.opts.query)), At && (this.opts.closeOnBeforeunload && (this._beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this._beforeunloadEventListener, !1)), this.hostname !== "localhost" && (this._offlineEventListener = () => {
      this._onClose("transport close", {
        description: "network connection lost"
      });
    }, Je.push(this._offlineEventListener))), this.opts.withCredentials && (this._cookieJar = void 0), this._open();
  }
  /**
   * Creates transport of the given type.
   *
   * @param {String} name - transport name
   * @return {Transport}
   * @private
   */
  createTransport(t) {
    const s = Object.assign({}, this.opts.query);
    s.EIO = Sr, s.transport = t, this.id && (s.sid = this.id);
    const r = Object.assign({}, this.opts, {
      query: s,
      socket: this,
      hostname: this.hostname,
      secure: this.secure,
      port: this.port
    }, this.opts.transportOptions[t]);
    return new this._transportsByName[t](r);
  }
  /**
   * Initializes transport to use and starts probe.
   *
   * @private
   */
  _open() {
    if (this.transports.length === 0) {
      this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      return;
    }
    const t = this.opts.rememberUpgrade && fe.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1 ? "websocket" : this.transports[0];
    this.readyState = "opening";
    const s = this.createTransport(t);
    s.open(), this.setTransport(s);
  }
  /**
   * Sets the current transport. Disables the existing one (if any).
   *
   * @private
   */
  setTransport(t) {
    this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this._onDrain.bind(this)).on("packet", this._onPacket.bind(this)).on("error", this._onError.bind(this)).on("close", (s) => this._onClose("transport close", s));
  }
  /**
   * Called when connection is deemed open.
   *
   * @private
   */
  onOpen() {
    this.readyState = "open", fe.priorWebsocketSuccess = this.transport.name === "websocket", this.emitReserved("open"), this.flush();
  }
  /**
   * Handles a packet.
   *
   * @private
   */
  _onPacket(t) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing")
      switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) {
        case "open":
          this.onHandshake(JSON.parse(t.data));
          break;
        case "ping":
          this._sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"), this._resetPingTimeout();
          break;
        case "error":
          const s = new Error("server error");
          s.code = t.data, this._onError(s);
          break;
        case "message":
          this.emitReserved("data", t.data), this.emitReserved("message", t.data);
          break;
      }
  }
  /**
   * Called upon handshake completion.
   *
   * @param {Object} data - handshake obj
   * @private
   */
  onHandshake(t) {
    this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this._pingInterval = t.pingInterval, this._pingTimeout = t.pingTimeout, this._maxPayload = t.maxPayload, this.onOpen(), this.readyState !== "closed" && this._resetPingTimeout();
  }
  /**
   * Sets and resets ping timeout timer based on server pings.
   *
   * @private
   */
  _resetPingTimeout() {
    this.clearTimeoutFn(this._pingTimeoutTimer);
    const t = this._pingInterval + this._pingTimeout;
    this._pingTimeoutTime = Date.now() + t, this._pingTimeoutTimer = this.setTimeoutFn(() => {
      this._onClose("ping timeout");
    }, t), this.opts.autoUnref && this._pingTimeoutTimer.unref();
  }
  /**
   * Called on `drain` event
   *
   * @private
   */
  _onDrain() {
    this.writeBuffer.splice(0, this._prevBufferLen), this._prevBufferLen = 0, this.writeBuffer.length === 0 ? this.emitReserved("drain") : this.flush();
  }
  /**
   * Flush write buffers.
   *
   * @private
   */
  flush() {
    if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const t = this._getWritablePackets();
      this.transport.send(t), this._prevBufferLen = t.length, this.emitReserved("flush");
    }
  }
  /**
   * Ensure the encoded size of the writeBuffer is below the maxPayload value sent by the server (only for HTTP
   * long-polling)
   *
   * @private
   */
  _getWritablePackets() {
    if (!(this._maxPayload && this.transport.name === "polling" && this.writeBuffer.length > 1))
      return this.writeBuffer;
    let s = 1;
    for (let r = 0; r < this.writeBuffer.length; r++) {
      const n = this.writeBuffer[r].data;
      if (n && (s += Qo(n)), r > 0 && s > this._maxPayload)
        return this.writeBuffer.slice(0, r);
      s += 2;
    }
    return this.writeBuffer;
  }
  /**
   * Checks whether the heartbeat timer has expired but the socket has not yet been notified.
   *
   * Note: this method is private for now because it does not really fit the WebSocket API, but if we put it in the
   * `write()` method then the message would not be buffered by the Socket.IO client.
   *
   * @return {boolean}
   * @private
   */
  /* private */
  _hasPingExpired() {
    if (!this._pingTimeoutTime)
      return !0;
    const t = Date.now() > this._pingTimeoutTime;
    return t && (this._pingTimeoutTime = 0, mt(() => {
      this._onClose("ping timeout");
    }, this.setTimeoutFn)), t;
  }
  /**
   * Sends a message.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  write(t, s, r) {
    return this._sendPacket("message", t, s, r), this;
  }
  /**
   * Sends a message. Alias of {@link Socket#write}.
   *
   * @param {String} msg - message.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @return {Socket} for chaining.
   */
  send(t, s, r) {
    return this._sendPacket("message", t, s, r), this;
  }
  /**
   * Sends a packet.
   *
   * @param {String} type: packet type.
   * @param {String} data.
   * @param {Object} options.
   * @param {Function} fn - callback function.
   * @private
   */
  _sendPacket(t, s, r, n) {
    if (typeof s == "function" && (n = s, s = void 0), typeof r == "function" && (n = r, r = null), this.readyState === "closing" || this.readyState === "closed")
      return;
    r = r || {}, r.compress = r.compress !== !1;
    const i = {
      type: t,
      data: s,
      options: r
    };
    this.emitReserved("packetCreate", i), this.writeBuffer.push(i), n && this.once("flush", n), this.flush();
  }
  /**
   * Closes the connection.
   */
  close() {
    const t = () => {
      this._onClose("forced close"), this.transport.close();
    }, s = () => {
      this.off("upgrade", s), this.off("upgradeError", s), t();
    }, r = () => {
      this.once("upgrade", s), this.once("upgradeError", s);
    };
    return (this.readyState === "opening" || this.readyState === "open") && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? r() : t();
    }) : this.upgrading ? r() : t()), this;
  }
  /**
   * Called upon transport error
   *
   * @private
   */
  _onError(t) {
    if (fe.priorWebsocketSuccess = !1, this.opts.tryAllTransports && this.transports.length > 1 && this.readyState === "opening")
      return this.transports.shift(), this._open();
    this.emitReserved("error", t), this._onClose("transport error", t);
  }
  /**
   * Called upon transport close.
   *
   * @private
   */
  _onClose(t, s) {
    if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
      if (this.clearTimeoutFn(this._pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), At && (this._beforeunloadEventListener && removeEventListener("beforeunload", this._beforeunloadEventListener, !1), this._offlineEventListener)) {
        const r = Je.indexOf(this._offlineEventListener);
        r !== -1 && Je.splice(r, 1);
      }
      this.readyState = "closed", this.id = null, this.emitReserved("close", t, s), this.writeBuffer = [], this._prevBufferLen = 0;
    }
  }
}
fe.protocol = Sr;
class _l extends fe {
  constructor() {
    super(...arguments), this._upgrades = [];
  }
  onOpen() {
    if (super.onOpen(), this.readyState === "open" && this.opts.upgrade)
      for (let t = 0; t < this._upgrades.length; t++)
        this._probe(this._upgrades[t]);
  }
  /**
   * Probes a transport.
   *
   * @param {String} name - transport name
   * @private
   */
  _probe(t) {
    let s = this.createTransport(t), r = !1;
    fe.priorWebsocketSuccess = !1;
    const n = () => {
      r || (s.send([{ type: "ping", data: "probe" }]), s.once("packet", (Y) => {
        if (!r)
          if (Y.type === "pong" && Y.data === "probe") {
            if (this.upgrading = !0, this.emitReserved("upgrading", s), !s)
              return;
            fe.priorWebsocketSuccess = s.name === "websocket", this.transport.pause(() => {
              r || this.readyState !== "closed" && (k(), this.setTransport(s), s.send([{ type: "upgrade" }]), this.emitReserved("upgrade", s), s = null, this.upgrading = !1, this.flush());
            });
          } else {
            const x = new Error("probe error");
            x.transport = s.name, this.emitReserved("upgradeError", x);
          }
      }));
    };
    function i() {
      r || (r = !0, k(), s.close(), s = null);
    }
    const a = (Y) => {
      const x = new Error("probe error: " + Y);
      x.transport = s.name, i(), this.emitReserved("upgradeError", x);
    };
    function o() {
      a("transport closed");
    }
    function h() {
      a("socket closed");
    }
    function d(Y) {
      s && Y.name !== s.name && i();
    }
    const k = () => {
      s.removeListener("open", n), s.removeListener("error", a), s.removeListener("close", o), this.off("close", h), this.off("upgrading", d);
    };
    s.once("open", n), s.once("error", a), s.once("close", o), this.once("close", h), this.once("upgrading", d), this._upgrades.indexOf("webtransport") !== -1 && t !== "webtransport" ? this.setTimeoutFn(() => {
      r || s.open();
    }, 200) : s.open();
  }
  onHandshake(t) {
    this._upgrades = this._filterUpgrades(t.upgrades), super.onHandshake(t);
  }
  /**
   * Filters upgrades, returning only those matching client transports.
   *
   * @param {Array} upgrades - server upgrades
   * @private
   */
  _filterUpgrades(t) {
    const s = [];
    for (let r = 0; r < t.length; r++)
      ~this.transports.indexOf(t[r]) && s.push(t[r]);
    return s;
  }
}
let gl = class extends _l {
  constructor(t, s = {}) {
    const r = typeof t == "object" ? t : s;
    (!r.transports || r.transports && typeof r.transports[0] == "string") && (r.transports = (r.transports || ["polling", "websocket", "webtransport"]).map((n) => fl[n]).filter((n) => !!n)), super(t, r);
  }
};
function wl(e, t = "", s) {
  let r = e;
  s = s || typeof location < "u" && location, e == null && (e = s.protocol + "//" + s.host), typeof e == "string" && (e.charAt(0) === "/" && (e.charAt(1) === "/" ? e = s.protocol + e : e = s.host + e), /^(https?|wss?):\/\//.test(e) || (typeof s < "u" ? e = s.protocol + "//" + e : e = "https://" + e), r = Ct(e)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/";
  const i = r.host.indexOf(":") !== -1 ? "[" + r.host + "]" : r.host;
  return r.id = r.protocol + "://" + i + ":" + r.port + t, r.href = r.protocol + "://" + i + (s && s.port === r.port ? "" : ":" + r.port), r;
}
const kl = typeof ArrayBuffer == "function", vl = (e) => typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer, Yr = Object.prototype.toString, Sl = typeof Blob == "function" || typeof Blob < "u" && Yr.call(Blob) === "[object BlobConstructor]", bl = typeof File == "function" || typeof File < "u" && Yr.call(File) === "[object FileConstructor]";
function us(e) {
  return kl && (e instanceof ArrayBuffer || vl(e)) || Sl && e instanceof Blob || bl && e instanceof File;
}
function Ke(e, t) {
  if (!e || typeof e != "object")
    return !1;
  if (Array.isArray(e)) {
    for (let s = 0, r = e.length; s < r; s++)
      if (Ke(e[s]))
        return !0;
    return !1;
  }
  if (us(e))
    return !0;
  if (e.toJSON && typeof e.toJSON == "function" && arguments.length === 1)
    return Ke(e.toJSON(), !0);
  for (const s in e)
    if (Object.prototype.hasOwnProperty.call(e, s) && Ke(e[s]))
      return !0;
  return !1;
}
function Ol(e) {
  const t = [], s = e.data, r = e;
  return r.data = Pt(s, t), r.attachments = t.length, { packet: r, buffers: t };
}
function Pt(e, t) {
  if (!e)
    return e;
  if (us(e)) {
    const s = { _placeholder: !0, num: t.length };
    return t.push(e), s;
  } else if (Array.isArray(e)) {
    const s = new Array(e.length);
    for (let r = 0; r < e.length; r++)
      s[r] = Pt(e[r], t);
    return s;
  } else if (typeof e == "object" && !(e instanceof Date)) {
    const s = {};
    for (const r in e)
      Object.prototype.hasOwnProperty.call(e, r) && (s[r] = Pt(e[r], t));
    return s;
  }
  return e;
}
function Dl(e, t) {
  return e.data = Lt(e.data, t), delete e.attachments, e;
}
function Lt(e, t) {
  if (!e)
    return e;
  if (e && e._placeholder === !0) {
    if (typeof e.num == "number" && e.num >= 0 && e.num < t.length)
      return t[e.num];
    throw new Error("illegal attachments");
  } else if (Array.isArray(e))
    for (let s = 0; s < e.length; s++)
      e[s] = Lt(e[s], t);
  else if (typeof e == "object")
    for (const s in e)
      Object.prototype.hasOwnProperty.call(e, s) && (e[s] = Lt(e[s], t));
  return e;
}
const Ml = [
  "connect",
  "connect_error",
  "disconnect",
  "disconnecting",
  "newListener",
  "removeListener"
  // used by the Node.js EventEmitter
], Tl = 5;
var y;
(function(e) {
  e[e.CONNECT = 0] = "CONNECT", e[e.DISCONNECT = 1] = "DISCONNECT", e[e.EVENT = 2] = "EVENT", e[e.ACK = 3] = "ACK", e[e.CONNECT_ERROR = 4] = "CONNECT_ERROR", e[e.BINARY_EVENT = 5] = "BINARY_EVENT", e[e.BINARY_ACK = 6] = "BINARY_ACK";
})(y || (y = {}));
class Yl {
  /**
   * Encoder constructor
   *
   * @param {function} replacer - custom replacer to pass down to JSON.parse
   */
  constructor(t) {
    this.replacer = t;
  }
  /**
   * Encode a packet as a single string if non-binary, or as a
   * buffer sequence, depending on packet type.
   *
   * @param {Object} obj - packet object
   */
  encode(t) {
    return (t.type === y.EVENT || t.type === y.ACK) && Ke(t) ? this.encodeAsBinary({
      type: t.type === y.EVENT ? y.BINARY_EVENT : y.BINARY_ACK,
      nsp: t.nsp,
      data: t.data,
      id: t.id
    }) : [this.encodeAsString(t)];
  }
  /**
   * Encode packet as string.
   */
  encodeAsString(t) {
    let s = "" + t.type;
    return (t.type === y.BINARY_EVENT || t.type === y.BINARY_ACK) && (s += t.attachments + "-"), t.nsp && t.nsp !== "/" && (s += t.nsp + ","), t.id != null && (s += t.id), t.data != null && (s += JSON.stringify(t.data, this.replacer)), s;
  }
  /**
   * Encode packet as 'buffer sequence' by removing blobs, and
   * deconstructing packet into object with placeholders and
   * a list of buffers.
   */
  encodeAsBinary(t) {
    const s = Ol(t), r = this.encodeAsString(s.packet), n = s.buffers;
    return n.unshift(r), n;
  }
}
function Os(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
class cs extends M {
  /**
   * Decoder constructor
   *
   * @param {function} reviver - custom reviver to pass down to JSON.stringify
   */
  constructor(t) {
    super(), this.reviver = t;
  }
  /**
   * Decodes an encoded packet string into packet JSON.
   *
   * @param {String} obj - encoded packet
   */
  add(t) {
    let s;
    if (typeof t == "string") {
      if (this.reconstructor)
        throw new Error("got plaintext data when reconstructing a packet");
      s = this.decodeString(t);
      const r = s.type === y.BINARY_EVENT;
      r || s.type === y.BINARY_ACK ? (s.type = r ? y.EVENT : y.ACK, this.reconstructor = new El(s), s.attachments === 0 && super.emitReserved("decoded", s)) : super.emitReserved("decoded", s);
    } else if (us(t) || t.base64)
      if (this.reconstructor)
        s = this.reconstructor.takeBinaryData(t), s && (this.reconstructor = null, super.emitReserved("decoded", s));
      else
        throw new Error("got binary data when not reconstructing a packet");
    else
      throw new Error("Unknown type: " + t);
  }
  /**
   * Decode a packet String (JSON data)
   *
   * @param {String} str
   * @return {Object} packet
   */
  decodeString(t) {
    let s = 0;
    const r = {
      type: Number(t.charAt(0))
    };
    if (y[r.type] === void 0)
      throw new Error("unknown packet type " + r.type);
    if (r.type === y.BINARY_EVENT || r.type === y.BINARY_ACK) {
      const i = s + 1;
      for (; t.charAt(++s) !== "-" && s != t.length; )
        ;
      const a = t.substring(i, s);
      if (a != Number(a) || t.charAt(s) !== "-")
        throw new Error("Illegal attachments");
      r.attachments = Number(a);
    }
    if (t.charAt(s + 1) === "/") {
      const i = s + 1;
      for (; ++s && !(t.charAt(s) === "," || s === t.length); )
        ;
      r.nsp = t.substring(i, s);
    } else
      r.nsp = "/";
    const n = t.charAt(s + 1);
    if (n !== "" && Number(n) == n) {
      const i = s + 1;
      for (; ++s; ) {
        const a = t.charAt(s);
        if (a == null || Number(a) != a) {
          --s;
          break;
        }
        if (s === t.length)
          break;
      }
      r.id = Number(t.substring(i, s + 1));
    }
    if (t.charAt(++s)) {
      const i = this.tryParse(t.substr(s));
      if (cs.isPayloadValid(r.type, i))
        r.data = i;
      else
        throw new Error("invalid payload");
    }
    return r;
  }
  tryParse(t) {
    try {
      return JSON.parse(t, this.reviver);
    } catch {
      return !1;
    }
  }
  static isPayloadValid(t, s) {
    switch (t) {
      case y.CONNECT:
        return Os(s);
      case y.DISCONNECT:
        return s === void 0;
      case y.CONNECT_ERROR:
        return typeof s == "string" || Os(s);
      case y.EVENT:
      case y.BINARY_EVENT:
        return Array.isArray(s) && (typeof s[0] == "number" || typeof s[0] == "string" && Ml.indexOf(s[0]) === -1);
      case y.ACK:
      case y.BINARY_ACK:
        return Array.isArray(s);
    }
  }
  /**
   * Deallocates a parser's resources
   */
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
}
class El {
  constructor(t) {
    this.packet = t, this.buffers = [], this.reconPack = t;
  }
  /**
   * Method to be called when binary data received from connection
   * after a BINARY_EVENT packet.
   *
   * @param {Buffer | ArrayBuffer} binData - the raw binary data received
   * @return {null | Object} returns null if more binary data is expected or
   *   a reconstructed packet object if all buffers have been received.
   */
  takeBinaryData(t) {
    if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) {
      const s = Dl(this.reconPack, this.buffers);
      return this.finishedReconstruction(), s;
    }
    return null;
  }
  /**
   * Cleans up binary packet reconstruction variables.
   */
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
}
const xl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Decoder: cs,
  Encoder: Yl,
  get PacketType() {
    return y;
  },
  protocol: Tl
}, Symbol.toStringTag, { value: "Module" }));
function F(e, t, s) {
  return e.on(t, s), function() {
    e.off(t, s);
  };
}
const Rl = Object.freeze({
  connect: 1,
  connect_error: 1,
  disconnect: 1,
  disconnecting: 1,
  // EventEmitter reserved events: https://nodejs.org/api/events.html#events_event_newlistener
  newListener: 1,
  removeListener: 1
});
let Er = class extends M {
  /**
   * `Socket` constructor.
   */
  constructor(t, s, r) {
    super(), this.connected = !1, this.recovered = !1, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = t, this.nsp = s, r && r.auth && (this.auth = r.auth), this._opts = Object.assign({}, r), this.io._autoConnect && this.open();
  }
  /**
   * Whether the socket is currently disconnected
   *
   * @example
   * const socket = io();
   *
   * socket.on("connect", () => {
   *   console.log(socket.disconnected); // false
   * });
   *
   * socket.on("disconnect", () => {
   *   console.log(socket.disconnected); // true
   * });
   */
  get disconnected() {
    return !this.connected;
  }
  /**
   * Subscribe to open, close and packet events
   *
   * @private
   */
  subEvents() {
    if (this.subs)
      return;
    const t = this.io;
    this.subs = [
      F(t, "open", this.onopen.bind(this)),
      F(t, "packet", this.onpacket.bind(this)),
      F(t, "error", this.onerror.bind(this)),
      F(t, "close", this.onclose.bind(this))
    ];
  }
  /**
   * Whether the Socket will try to reconnect when its Manager connects or reconnects.
   *
   * @example
   * const socket = io();
   *
   * console.log(socket.active); // true
   *
   * socket.on("disconnect", (reason) => {
   *   if (reason === "io server disconnect") {
   *     // the disconnection was initiated by the server, you need to manually reconnect
   *     console.log(socket.active); // false
   *   }
   *   // else the socket will automatically try to reconnect
   *   console.log(socket.active); // true
   * });
   */
  get active() {
    return !!this.subs;
  }
  /**
   * "Opens" the socket.
   *
   * @example
   * const socket = io({
   *   autoConnect: false
   * });
   *
   * socket.connect();
   */
  connect() {
    return this.connected ? this : (this.subEvents(), this.io._reconnecting || this.io.open(), this.io._readyState === "open" && this.onopen(), this);
  }
  /**
   * Alias for {@link connect()}.
   */
  open() {
    return this.connect();
  }
  /**
   * Sends a `message` event.
   *
   * This method mimics the WebSocket.send() method.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/send
   *
   * @example
   * socket.send("hello");
   *
   * // this is equivalent to
   * socket.emit("message", "hello");
   *
   * @return self
   */
  send(...t) {
    return t.unshift("message"), this.emit.apply(this, t), this;
  }
  /**
   * Override `emit`.
   * If the event is in `events`, it's emitted normally.
   *
   * @example
   * socket.emit("hello", "world");
   *
   * // all serializable datastructures are supported (no need to call JSON.stringify)
   * socket.emit("hello", 1, "2", { 3: ["4"], 5: Uint8Array.from([6]) });
   *
   * // with an acknowledgement from the server
   * socket.emit("hello", "world", (val) => {
   *   // ...
   * });
   *
   * @return self
   */
  emit(t, ...s) {
    var r, n, i;
    if (Rl.hasOwnProperty(t))
      throw new Error('"' + t.toString() + '" is a reserved event name');
    if (s.unshift(t), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
      return this._addToQueue(s), this;
    const a = {
      type: y.EVENT,
      data: s
    };
    if (a.options = {}, a.options.compress = this.flags.compress !== !1, typeof s[s.length - 1] == "function") {
      const k = this.ids++, Y = s.pop();
      this._registerAckCallback(k, Y), a.id = k;
    }
    const o = (n = (r = this.io.engine) === null || r === void 0 ? void 0 : r.transport) === null || n === void 0 ? void 0 : n.writable, h = this.connected && !(!((i = this.io.engine) === null || i === void 0) && i._hasPingExpired());
    return this.flags.volatile && !o || (h ? (this.notifyOutgoingListeners(a), this.packet(a)) : this.sendBuffer.push(a)), this.flags = {}, this;
  }
  /**
   * @private
   */
  _registerAckCallback(t, s) {
    var r;
    const n = (r = this.flags.timeout) !== null && r !== void 0 ? r : this._opts.ackTimeout;
    if (n === void 0) {
      this.acks[t] = s;
      return;
    }
    const i = this.io.setTimeoutFn(() => {
      delete this.acks[t];
      for (let o = 0; o < this.sendBuffer.length; o++)
        this.sendBuffer[o].id === t && this.sendBuffer.splice(o, 1);
      s.call(this, new Error("operation has timed out"));
    }, n), a = (...o) => {
      this.io.clearTimeoutFn(i), s.apply(this, o);
    };
    a.withError = !0, this.acks[t] = a;
  }
  /**
   * Emits an event and waits for an acknowledgement
   *
   * @example
   * // without timeout
   * const response = await socket.emitWithAck("hello", "world");
   *
   * // with a specific timeout
   * try {
   *   const response = await socket.timeout(1000).emitWithAck("hello", "world");
   * } catch (err) {
   *   // the server did not acknowledge the event in the given delay
   * }
   *
   * @return a Promise that will be fulfilled when the server acknowledges the event
   */
  emitWithAck(t, ...s) {
    return new Promise((r, n) => {
      const i = (a, o) => a ? n(a) : r(o);
      i.withError = !0, s.push(i), this.emit(t, ...s);
    });
  }
  /**
   * Add the packet to the queue.
   * @param args
   * @private
   */
  _addToQueue(t) {
    let s;
    typeof t[t.length - 1] == "function" && (s = t.pop());
    const r = {
      id: this._queueSeq++,
      tryCount: 0,
      pending: !1,
      args: t,
      flags: Object.assign({ fromQueue: !0 }, this.flags)
    };
    t.push((n, ...i) => r !== this._queue[0] ? void 0 : (n !== null ? r.tryCount > this._opts.retries && (this._queue.shift(), s && s(n)) : (this._queue.shift(), s && s(null, ...i)), r.pending = !1, this._drainQueue())), this._queue.push(r), this._drainQueue();
  }
  /**
   * Send the first packet of the queue, and wait for an acknowledgement from the server.
   * @param force - whether to resend a packet that has not been acknowledged yet
   *
   * @private
   */
  _drainQueue(t = !1) {
    if (!this.connected || this._queue.length === 0)
      return;
    const s = this._queue[0];
    s.pending && !t || (s.pending = !0, s.tryCount++, this.flags = s.flags, this.emit.apply(this, s.args));
  }
  /**
   * Sends a packet.
   *
   * @param packet
   * @private
   */
  packet(t) {
    t.nsp = this.nsp, this.io._packet(t);
  }
  /**
   * Called upon engine `open`.
   *
   * @private
   */
  onopen() {
    typeof this.auth == "function" ? this.auth((t) => {
      this._sendConnectPacket(t);
    }) : this._sendConnectPacket(this.auth);
  }
  /**
   * Sends a CONNECT packet to initiate the Socket.IO session.
   *
   * @param data
   * @private
   */
  _sendConnectPacket(t) {
    this.packet({
      type: y.CONNECT,
      data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, t) : t
    });
  }
  /**
   * Called upon engine or manager `error`.
   *
   * @param err
   * @private
   */
  onerror(t) {
    this.connected || this.emitReserved("connect_error", t);
  }
  /**
   * Called upon engine `close`.
   *
   * @param reason
   * @param description
   * @private
   */
  onclose(t, s) {
    this.connected = !1, delete this.id, this.emitReserved("disconnect", t, s), this._clearAcks();
  }
  /**
   * Clears the acknowledgement handlers upon disconnection, since the client will never receive an acknowledgement from
   * the server.
   *
   * @private
   */
  _clearAcks() {
    Object.keys(this.acks).forEach((t) => {
      if (!this.sendBuffer.some((r) => String(r.id) === t)) {
        const r = this.acks[t];
        delete this.acks[t], r.withError && r.call(this, new Error("socket has been disconnected"));
      }
    });
  }
  /**
   * Called with socket packet.
   *
   * @param packet
   * @private
   */
  onpacket(t) {
    if (t.nsp === this.nsp)
      switch (t.type) {
        case y.CONNECT:
          t.data && t.data.sid ? this.onconnect(t.data.sid, t.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
          break;
        case y.EVENT:
        case y.BINARY_EVENT:
          this.onevent(t);
          break;
        case y.ACK:
        case y.BINARY_ACK:
          this.onack(t);
          break;
        case y.DISCONNECT:
          this.ondisconnect();
          break;
        case y.CONNECT_ERROR:
          this.destroy();
          const r = new Error(t.data.message);
          r.data = t.data.data, this.emitReserved("connect_error", r);
          break;
      }
  }
  /**
   * Called upon a server event.
   *
   * @param packet
   * @private
   */
  onevent(t) {
    const s = t.data || [];
    t.id != null && s.push(this.ack(t.id)), this.connected ? this.emitEvent(s) : this.receiveBuffer.push(Object.freeze(s));
  }
  emitEvent(t) {
    if (this._anyListeners && this._anyListeners.length) {
      const s = this._anyListeners.slice();
      for (const r of s)
        r.apply(this, t);
    }
    super.emit.apply(this, t), this._pid && t.length && typeof t[t.length - 1] == "string" && (this._lastOffset = t[t.length - 1]);
  }
  /**
   * Produces an ack callback to emit with an event.
   *
   * @private
   */
  ack(t) {
    const s = this;
    let r = !1;
    return function(...n) {
      r || (r = !0, s.packet({
        type: y.ACK,
        id: t,
        data: n
      }));
    };
  }
  /**
   * Called upon a server acknowledgement.
   *
   * @param packet
   * @private
   */
  onack(t) {
    const s = this.acks[t.id];
    typeof s == "function" && (delete this.acks[t.id], s.withError && t.data.unshift(null), s.apply(this, t.data));
  }
  /**
   * Called upon server connect.
   *
   * @private
   */
  onconnect(t, s) {
    this.id = t, this.recovered = s && this._pid === s, this._pid = s, this.connected = !0, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(!0);
  }
  /**
   * Emit buffered events (received and emitted).
   *
   * @private
   */
  emitBuffered() {
    this.receiveBuffer.forEach((t) => this.emitEvent(t)), this.receiveBuffer = [], this.sendBuffer.forEach((t) => {
      this.notifyOutgoingListeners(t), this.packet(t);
    }), this.sendBuffer = [];
  }
  /**
   * Called upon server disconnect.
   *
   * @private
   */
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  /**
   * Called upon forced client/server side disconnections,
   * this method ensures the manager stops tracking us and
   * that reconnections don't get triggered for this.
   *
   * @private
   */
  destroy() {
    this.subs && (this.subs.forEach((t) => t()), this.subs = void 0), this.io._destroy(this);
  }
  /**
   * Disconnects the socket manually. In that case, the socket will not try to reconnect.
   *
   * If this is the last active Socket instance of the {@link Manager}, the low-level connection will be closed.
   *
   * @example
   * const socket = io();
   *
   * socket.on("disconnect", (reason) => {
   *   // console.log(reason); prints "io client disconnect"
   * });
   *
   * socket.disconnect();
   *
   * @return self
   */
  disconnect() {
    return this.connected && this.packet({ type: y.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  /**
   * Alias for {@link disconnect()}.
   *
   * @return self
   */
  close() {
    return this.disconnect();
  }
  /**
   * Sets the compress flag.
   *
   * @example
   * socket.compress(false).emit("hello");
   *
   * @param compress - if `true`, compresses the sending data
   * @return self
   */
  compress(t) {
    return this.flags.compress = t, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the event message will be dropped when this socket is not
   * ready to send messages.
   *
   * @example
   * socket.volatile.emit("hello"); // the server may or may not receive it
   *
   * @returns self
   */
  get volatile() {
    return this.flags.volatile = !0, this;
  }
  /**
   * Sets a modifier for a subsequent event emission that the callback will be called with an error when the
   * given number of milliseconds have elapsed without an acknowledgement from the server:
   *
   * @example
   * socket.timeout(5000).emit("my-event", (err) => {
   *   if (err) {
   *     // the server did not acknowledge the event in the given delay
   *   }
   * });
   *
   * @returns self
   */
  timeout(t) {
    return this.flags.timeout = t, this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * @example
   * socket.onAny((event, ...args) => {
   *   console.log(`got ${event}`);
   * });
   *
   * @param listener
   */
  onAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * @example
   * socket.prependAny((event, ...args) => {
   *   console.log(`got event ${event}`);
   * });
   *
   * @param listener
   */
  prependAny(t) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`got event ${event}`);
   * }
   *
   * socket.onAny(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAny(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAny();
   *
   * @param listener
   */
  offAny(t) {
    if (!this._anyListeners)
      return this;
    if (t) {
      const s = this._anyListeners;
      for (let r = 0; r < s.length; r++)
        if (t === s[r])
          return s.splice(r, 1), this;
    } else
      this._anyListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAny() {
    return this._anyListeners || [];
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.onAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  onAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this;
  }
  /**
   * Adds a listener that will be fired when any event is emitted. The event name is passed as the first argument to the
   * callback. The listener is added to the beginning of the listeners array.
   *
   * Note: acknowledgements sent to the server are not included.
   *
   * @example
   * socket.prependAnyOutgoing((event, ...args) => {
   *   console.log(`sent event ${event}`);
   * });
   *
   * @param listener
   */
  prependAnyOutgoing(t) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this;
  }
  /**
   * Removes the listener that will be fired when any event is emitted.
   *
   * @example
   * const catchAllListener = (event, ...args) => {
   *   console.log(`sent event ${event}`);
   * }
   *
   * socket.onAnyOutgoing(catchAllListener);
   *
   * // remove a specific listener
   * socket.offAnyOutgoing(catchAllListener);
   *
   * // or remove all listeners
   * socket.offAnyOutgoing();
   *
   * @param [listener] - the catch-all listener (optional)
   */
  offAnyOutgoing(t) {
    if (!this._anyOutgoingListeners)
      return this;
    if (t) {
      const s = this._anyOutgoingListeners;
      for (let r = 0; r < s.length; r++)
        if (t === s[r])
          return s.splice(r, 1), this;
    } else
      this._anyOutgoingListeners = [];
    return this;
  }
  /**
   * Returns an array of listeners that are listening for any event that is specified. This array can be manipulated,
   * e.g. to remove listeners.
   */
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  /**
   * Notify the listeners for each packet sent
   *
   * @param packet
   *
   * @private
   */
  notifyOutgoingListeners(t) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const s = this._anyOutgoingListeners.slice();
      for (const r of s)
        r.apply(this, t.data);
    }
  }
};
function Te(e) {
  e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0;
}
Te.prototype.duration = function() {
  var e = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t = Math.random(), s = Math.floor(t * this.jitter * e);
    e = Math.floor(t * 10) & 1 ? e + s : e - s;
  }
  return Math.min(e, this.max) | 0;
};
Te.prototype.reset = function() {
  this.attempts = 0;
};
Te.prototype.setMin = function(e) {
  this.ms = e;
};
Te.prototype.setMax = function(e) {
  this.max = e;
};
Te.prototype.setJitter = function(e) {
  this.jitter = e;
};
class Wt extends M {
  constructor(t, s) {
    var r;
    super(), this.nsps = {}, this.subs = [], t && typeof t == "object" && (s = t, t = void 0), s = s || {}, s.path = s.path || "/socket.io", this.opts = s, yt(this, s), this.reconnection(s.reconnection !== !1), this.reconnectionAttempts(s.reconnectionAttempts || 1 / 0), this.reconnectionDelay(s.reconnectionDelay || 1e3), this.reconnectionDelayMax(s.reconnectionDelayMax || 5e3), this.randomizationFactor((r = s.randomizationFactor) !== null && r !== void 0 ? r : 0.5), this.backoff = new Te({
      min: this.reconnectionDelay(),
      max: this.reconnectionDelayMax(),
      jitter: this.randomizationFactor()
    }), this.timeout(s.timeout == null ? 2e4 : s.timeout), this._readyState = "closed", this.uri = t;
    const n = s.parser || xl;
    this.encoder = new n.Encoder(), this.decoder = new n.Decoder(), this._autoConnect = s.autoConnect !== !1, this._autoConnect && this.open();
  }
  reconnection(t) {
    return arguments.length ? (this._reconnection = !!t, t || (this.skipReconnect = !0), this) : this._reconnection;
  }
  reconnectionAttempts(t) {
    return t === void 0 ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this);
  }
  reconnectionDelay(t) {
    var s;
    return t === void 0 ? this._reconnectionDelay : (this._reconnectionDelay = t, (s = this.backoff) === null || s === void 0 || s.setMin(t), this);
  }
  randomizationFactor(t) {
    var s;
    return t === void 0 ? this._randomizationFactor : (this._randomizationFactor = t, (s = this.backoff) === null || s === void 0 || s.setJitter(t), this);
  }
  reconnectionDelayMax(t) {
    var s;
    return t === void 0 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, (s = this.backoff) === null || s === void 0 || s.setMax(t), this);
  }
  timeout(t) {
    return arguments.length ? (this._timeout = t, this) : this._timeout;
  }
  /**
   * Starts trying to reconnect if reconnection is enabled and we have not
   * started reconnecting yet
   *
   * @private
   */
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && this.backoff.attempts === 0 && this.reconnect();
  }
  /**
   * Sets the current transport `socket`.
   *
   * @param {Function} fn - optional, callback
   * @return self
   * @public
   */
  open(t) {
    if (~this._readyState.indexOf("open"))
      return this;
    this.engine = new gl(this.uri, this.opts);
    const s = this.engine, r = this;
    this._readyState = "opening", this.skipReconnect = !1;
    const n = F(s, "open", function() {
      r.onopen(), t && t();
    }), i = (o) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", o), t ? t(o) : this.maybeReconnectOnOpen();
    }, a = F(s, "error", i);
    if (this._timeout !== !1) {
      const o = this._timeout, h = this.setTimeoutFn(() => {
        n(), i(new Error("timeout")), s.close();
      }, o);
      this.opts.autoUnref && h.unref(), this.subs.push(() => {
        this.clearTimeoutFn(h);
      });
    }
    return this.subs.push(n), this.subs.push(a), this;
  }
  /**
   * Alias for open()
   *
   * @return self
   * @public
   */
  connect(t) {
    return this.open(t);
  }
  /**
   * Called upon transport open.
   *
   * @private
   */
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const t = this.engine;
    this.subs.push(
      F(t, "ping", this.onping.bind(this)),
      F(t, "data", this.ondata.bind(this)),
      F(t, "error", this.onerror.bind(this)),
      F(t, "close", this.onclose.bind(this)),
      // @ts-ignore
      F(this.decoder, "decoded", this.ondecoded.bind(this))
    );
  }
  /**
   * Called upon a ping.
   *
   * @private
   */
  onping() {
    this.emitReserved("ping");
  }
  /**
   * Called with data.
   *
   * @private
   */
  ondata(t) {
    try {
      this.decoder.add(t);
    } catch (s) {
      this.onclose("parse error", s);
    }
  }
  /**
   * Called when parser fully decodes a packet.
   *
   * @private
   */
  ondecoded(t) {
    mt(() => {
      this.emitReserved("packet", t);
    }, this.setTimeoutFn);
  }
  /**
   * Called upon socket error.
   *
   * @private
   */
  onerror(t) {
    this.emitReserved("error", t);
  }
  /**
   * Creates a new socket for the given `nsp`.
   *
   * @return {Socket}
   * @public
   */
  socket(t, s) {
    let r = this.nsps[t];
    return r ? this._autoConnect && !r.active && r.connect() : (r = new Er(this, t, s), this.nsps[t] = r), r;
  }
  /**
   * Called upon a socket close.
   *
   * @param socket
   * @private
   */
  _destroy(t) {
    const s = Object.keys(this.nsps);
    for (const r of s)
      if (this.nsps[r].active)
        return;
    this._close();
  }
  /**
   * Writes a packet.
   *
   * @param packet
   * @private
   */
  _packet(t) {
    const s = this.encoder.encode(t);
    for (let r = 0; r < s.length; r++)
      this.engine.write(s[r], t.options);
  }
  /**
   * Clean up transport subscriptions and packet buffer.
   *
   * @private
   */
  cleanup() {
    this.subs.forEach((t) => t()), this.subs.length = 0, this.decoder.destroy();
  }
  /**
   * Close the current socket.
   *
   * @private
   */
  _close() {
    this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close");
  }
  /**
   * Alias for close()
   *
   * @private
   */
  disconnect() {
    return this._close();
  }
  /**
   * Called when:
   *
   * - the low-level engine is closed
   * - the parser encountered a badly formatted packet
   * - all sockets are disconnected
   *
   * @private
   */
  onclose(t, s) {
    var r;
    this.cleanup(), (r = this.engine) === null || r === void 0 || r.close(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, s), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  /**
   * Attempt a reconnection.
   *
   * @private
   */
  reconnect() {
    if (this._reconnecting || this.skipReconnect)
      return this;
    const t = this;
    if (this.backoff.attempts >= this._reconnectionAttempts)
      this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1;
    else {
      const s = this.backoff.duration();
      this._reconnecting = !0;
      const r = this.setTimeoutFn(() => {
        t.skipReconnect || (this.emitReserved("reconnect_attempt", t.backoff.attempts), !t.skipReconnect && t.open((n) => {
          n ? (t._reconnecting = !1, t.reconnect(), this.emitReserved("reconnect_error", n)) : t.onreconnect();
        }));
      }, s);
      this.opts.autoUnref && r.unref(), this.subs.push(() => {
        this.clearTimeoutFn(r);
      });
    }
  }
  /**
   * Called upon successful reconnect.
   *
   * @private
   */
  onreconnect() {
    const t = this.backoff.attempts;
    this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t);
  }
}
const xe = {};
function Qe(e, t) {
  typeof e == "object" && (t = e, e = void 0), t = t || {};
  const s = wl(e, t.path || "/socket.io"), r = s.source, n = s.id, i = s.path, a = xe[n] && i in xe[n].nsps, o = t.forceNew || t["force new connection"] || t.multiplex === !1 || a;
  let h;
  return o ? h = new Wt(r, t) : (xe[n] || (xe[n] = new Wt(r, t)), h = xe[n]), s.query && !t.query && (t.query = s.queryKey), h.socket(s.path, t);
}
Object.assign(Qe, {
  Manager: Wt,
  Socket: Er,
  io: Qe,
  connect: Qe
});
class Nl {
  constructor() {
  }
  connect() {
    throw new Error("connect method must be implemented");
  }
  disconnect() {
    throw new Error("disconnect method must be implemented");
  }
  on(t, s) {
    throw new Error("on method must be implemented");
  }
  off(t, s) {
    throw new Error("off method must be implemented");
  }
  emit(t, s) {
    throw new Error("emit method must be implemented");
  }
  once(t, s) {
  }
}
var ee;
const q = class q extends Nl {
  constructor(t, {
    transport: s = ["websocket"],
    auth: r = {},
    autoConnect: n = !1,
    reconnectionAttempts: i = 5,
    reconnectionDelay: a = 1e3,
    timeout: o = 2e4
  } = {}) {
    if (!t)
      throw new Error("Server URL is required");
    if (N(q, ee))
      return N(q, ee);
    super(), this.serverUrl = t, this.options = {
      transport: s,
      auth: r,
      autoConnect: n,
      reconnectionAttempts: i,
      reconnectionDelay: a,
      timeout: o
    }, this.socket = Qe(t, this.options), this.socket.on("connect", () => {
      console.log("Connected to server");
    }), this.socket.on("disconnect", () => {
      console.log("Disconnected from server");
    }), this.socket.on("connect_error", (h) => {
      console.error("Connection error:", h);
    }), _e(q, ee, this);
  }
  connect() {
    this.socket.connected || this.socket.connect();
  }
  disconnect() {
    this.socket.connected && (this.socket.removeAllListeners(), this.socket.disconnect());
  }
  on(t, s) {
    this.socket.on(t, s);
  }
  off(t, s) {
    this.socket.off(t, s);
  }
  emit(t, s) {
    this.socket.emit(t, s);
  }
  once(t, s) {
    this.socket.once(t, s);
  }
  static getInstance(t, s = {}) {
    return N(q, ee) || _e(q, ee, new q(t, s)), N(q, ee);
  }
};
ee = new WeakMap(), Be(q, ee, null);
let Ft = q;
class Hl {
  /**
   * Socket class that manages the connection to the server using different strategies
   * @param {String} strategy - strategy to use for socket connection
   * @param {String} serverUrl - server URL
   * @param {Object} options - options for the socket connection
   */
  constructor(t = "socketIO", s, r = {}) {
    if (!t) throw new Error("socket strategy is required");
    if (!s) throw new Error("Server URL is required");
    switch (t) {
      case "socketIO":
        this.strategy = new Ft(s, r);
        break;
      default:
        throw new Error(`Strategy not found: ${t}`);
    }
  }
  connect() {
    return this.strategy.connect();
  }
  disconnect() {
    return this.strategy.disconnect();
  }
  on(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.on(t, s);
  }
  off(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.off(t, s);
  }
  emit(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.emit(t, s);
  }
  once(t, s) {
    if (!t) throw new Error("Event name is required");
    return this.strategy.once(t, s);
  }
}
export {
  Pl as Auth,
  Wl as Cache,
  Il as Event,
  Hl as Socket
};
