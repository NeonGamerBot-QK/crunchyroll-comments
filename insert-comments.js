;(async () => {
  const instance = typeof chrome === 'undefined' ? browser : chrome

// console.log(dayjs().from(dayjs('2008-04-04')))
// to work with firefox bundle it
  try {
    !(function (t, e) { typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = e() : typeof define === 'function' && define.amd ? define(e) : (t = typeof globalThis !== 'undefined' ? globalThis : t || self).dayjs = e() }(this, function () { 'use strict'; var t = 1e3, e = 6e4, n = 36e5, r = 'millisecond', i = 'second', s = 'minute', u = 'hour', a = 'day', o = 'week', c = 'month', f = 'quarter', h = 'year', d = 'date', l = 'Invalid Date', $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {name: 'en', weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'), months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_'), ordinal: function (t) { var e = ['th', 'st', 'nd', 'rd'], n = t % 100; return '[' + t + (e[(n - 20) % 10] || e[n] || e[0]) + ']' }}, m = function (t, e, n) { var r = String(t); return !r || r.length >= e ? t : '' + Array(e + 1 - r.length).join(n) + t }, v = {s: m, z: function (t) { var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60; return (e <= 0 ? '+' : '-') + m(r, 2, '0') + ':' + m(i, 2, '0') }, m: function t (e, n) { if (e.date() < n.date()) return -t(n, e); var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c); return +(-(r + (n - i) / (s ? i - u : u - i)) || 0) }, a: function (t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t) }, p: function (t) { return {M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f}[t] || String(t || '').toLowerCase().replace(/s$/, '') }, u: function (t) { return void 0 === t }}, g = 'en', D = {}; D[g] = M; var p = '$isDayjsObject', S = function (t) { return t instanceof _ || !(!t || !t[p]) }, w = function t (e, n, r) { var i; if (!e) return g; if (typeof e === 'string') { var s = e.toLowerCase(); D[s] && (i = s), n && (D[s] = n, i = s); var u = e.split('-'); if (!i && u.length > 1) return t(u[0]) } else { var a = e.name; D[a] = e, i = a } return !r && i && (g = i), i || !r && g }, O = function (t, e) { if (S(t)) return t.clone(); var n = typeof e === 'object' ? e : {}; return n.date = t, n.args = arguments, new _(n) }, b = v; b.l = w, b.i = S, b.w = function (t, e) { return O(t, {locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset}) }; var _ = (function () { function M (t) { this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0 } var m = M.prototype; return m.parse = function (t) { this.$d = (function (t) { var e = t.date, n = t.utc; if (e === null) return new Date(NaN); if (b.u(e)) return new Date(); if (e instanceof Date) return new Date(e); if (typeof e === 'string' && !/Z$/i.test(e)) { var r = e.match($); if (r) { var i = r[2] - 1 || 0, s = (r[7] || '0').substring(0, 3); return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s) } } return new Date(e) }(t)), this.init() }, m.init = function () { var t = this.$d; this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds() }, m.$utils = function () { return b }, m.isValid = function () { return !(this.$d.toString() === l) }, m.isSame = function (t, e) { var n = O(t); return this.startOf(e) <= n && n <= this.endOf(e) }, m.isAfter = function (t, e) { return O(t) < this.startOf(e) }, m.isBefore = function (t, e) { return this.endOf(e) < O(t) }, m.$g = function (t, e, n) { return b.u(t) ? this[e] : this.set(n, t) }, m.unix = function () { return Math.floor(this.valueOf() / 1e3) }, m.valueOf = function () { return this.$d.getTime() }, m.startOf = function (t, e) { var n = this, r = !!b.u(e) || e, f = b.p(t), l = function (t, e) { var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n); return r ? i : i.endOf(a) }, $ = function (t, e) { return b.w(n.toDate()[t].apply(n.toDate('s'), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), n) }, y = this.$W, M = this.$M, m = this.$D, v = 'set' + (this.$u ? 'UTC' : ''); switch (f) { case h:return r ? l(1, 0) : l(31, 11); case c:return r ? l(1, M) : l(0, M + 1); case o:var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g; return l(r ? m - D : m + (6 - D), M); case a:case d:return $(v + 'Hours', 0); case u:return $(v + 'Minutes', 1); case s:return $(v + 'Seconds', 2); case i:return $(v + 'Milliseconds', 3); default:return this.clone() } }, m.endOf = function (t) { return this.startOf(t, !1) }, m.$set = function (t, e) { var n, o = b.p(t), f = 'set' + (this.$u ? 'UTC' : ''), l = (n = {}, n[a] = f + 'Date', n[d] = f + 'Date', n[c] = f + 'Month', n[h] = f + 'FullYear', n[u] = f + 'Hours', n[s] = f + 'Minutes', n[i] = f + 'Seconds', n[r] = f + 'Milliseconds', n)[o], $ = o === a ? this.$D + (e - this.$W) : e; if (o === c || o === h) { var y = this.clone().set(d, 1); y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d } else l && this.$d[l]($); return this.init(), this }, m.set = function (t, e) { return this.clone().$set(t, e) }, m.get = function (t) { return this[b.p(t)]() }, m.add = function (r, f) { var d, l = this; r = Number(r); var $ = b.p(f), y = function (t) { var e = O(l); return b.w(e.date(e.date() + Math.round(t * r)), l) }; if ($ === c) return this.set(c, this.$M + r); if ($ === h) return this.set(h, this.$y + r); if ($ === a) return y(1); if ($ === o) return y(7); var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M; return b.w(m, this) }, m.subtract = function (t, e) { return this.add(-1 * t, e) }, m.format = function (t) { var e = this, n = this.$locale(); if (!this.isValid()) return n.invalidDate || l; var r = t || 'YYYY-MM-DDTHH:mm:ssZ', i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function (t, n, i, s) { return t && (t[n] || t(e, r)) || i[n].slice(0, s) }, d = function (t) { return b.s(s % 12 || 12, t, '0') }, $ = f || function (t, e, n) { var r = t < 12 ? 'AM' : 'PM'; return n ? r.toLowerCase() : r }; return r.replace(y, function (t, r) { return r || (function (t) { switch (t) { case 'YY':return String(e.$y).slice(-2); case 'YYYY':return b.s(e.$y, 4, '0'); case 'M':return a + 1; case 'MM':return b.s(a + 1, 2, '0'); case 'MMM':return h(n.monthsShort, a, c, 3); case 'MMMM':return h(c, a); case 'D':return e.$D; case 'DD':return b.s(e.$D, 2, '0'); case 'd':return String(e.$W); case 'dd':return h(n.weekdaysMin, e.$W, o, 2); case 'ddd':return h(n.weekdaysShort, e.$W, o, 3); case 'dddd':return o[e.$W]; case 'H':return String(s); case 'HH':return b.s(s, 2, '0'); case 'h':return d(1); case 'hh':return d(2); case 'a':return $(s, u, !0); case 'A':return $(s, u, !1); case 'm':return String(u); case 'mm':return b.s(u, 2, '0'); case 's':return String(e.$s); case 'ss':return b.s(e.$s, 2, '0'); case 'SSS':return b.s(e.$ms, 3, '0'); case 'Z':return i } return null }(t)) || i.replace(':', '') }) }, m.utcOffset = function () { return 15 * -Math.round(this.$d.getTimezoneOffset() / 15) }, m.diff = function (r, d, l) { var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function () { return b.m(y, m) }; switch (M) { case h:$ = D() / 12; break; case c:$ = D(); break; case f:$ = D() / 3; break; case o:$ = (g - v) / 6048e5; break; case a:$ = (g - v) / 864e5; break; case u:$ = g / n; break; case s:$ = g / e; break; case i:$ = g / t; break; default:$ = g } return l ? $ : b.a($) }, m.daysInMonth = function () { return this.endOf(c).$D }, m.$locale = function () { return D[this.$L] }, m.locale = function (t, e) { if (!t) return this.$L; var n = this.clone(), r = w(t, e, !0); return r && (n.$L = r), n }, m.clone = function () { return b.w(this.$d, this) }, m.toDate = function () { return new Date(this.valueOf()) }, m.toJSON = function () { return this.isValid() ? this.toISOString() : null }, m.toISOString = function () { return this.$d.toISOString() }, m.toString = function () { return this.$d.toUTCString() }, M }()), k = _.prototype; return O.prototype = k, [['$ms', r], ['$s', i], ['$m', s], ['$H', u], ['$W', a], ['$M', c], ['$y', h], ['$D', d]].forEach(function (t) { k[t[1]] = function (e) { return this.$g(e, t[0], t[1]) } }), O.extend = function (t, e) { return t.$i || (t(e, _, O), t.$i = !0), O }, O.locale = w, O.isDayjs = S, O.unix = function (t) { return O(1e3 * t) }, O.en = D[g], O.Ls = D, O.p = {}, O }))
    !(function (r, e) { typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = e() : typeof define === 'function' && define.amd ? define(e) : (r = typeof globalThis !== 'undefined' ? globalThis : r || self).dayjs_plugin_relativeTime = e() }(this, function () { 'use strict'; return function (r, e, t) { r = r || {}; var n = e.prototype, o = {future: 'in %s', past: '%s ago', s: 'a few seconds', m: 'a minute', mm: '%d minutes', h: 'an hour', hh: '%d hours', d: 'a day', dd: '%d days', M: 'a month', MM: '%d months', y: 'a year', yy: '%d years'}; function i (r, e, t, o) { return n.fromToBase(r, e, t, o) }t.en.relativeTime = o, n.fromToBase = function (e, n, i, d, u) { for (var f, a, s, l = i.$locale().relativeTime || o, h = r.thresholds || [{l: 's', r: 44, d: 'second'}, {l: 'm', r: 89}, {l: 'mm', r: 44, d: 'minute'}, {l: 'h', r: 89}, {l: 'hh', r: 21, d: 'hour'}, {l: 'd', r: 35}, {l: 'dd', r: 25, d: 'day'}, {l: 'M', r: 45}, {l: 'MM', r: 10, d: 'month'}, {l: 'y', r: 17}, {l: 'yy', d: 'year'}], m = h.length, c = 0; c < m; c += 1) { var y = h[c]; y.d && (f = d ? t(e).diff(i, y.d, !0) : i.diff(e, y.d, !0)); var p = (r.rounding || Math.round)(Math.abs(f)); if (s = f > 0, p <= y.r || !y.r) { p <= 1 && c > 0 && (y = h[c - 1]); var v = l[y.l]; u && (p = u('' + p)), a = typeof v === 'string' ? v.replace('%d', p) : v(p, n, y.l, s); break } } if (n) return a; var M = s ? l.future : l.past; return typeof M === 'function' ? M(a) : M.replace('%s', a) }, n.to = function (r, e) { return i(r, e, this, !0) }, n.from = function (r, e) { return i(r, e, this) }; var d = function (r) { return r.$u ? t.utc() : t() }; n.toNow = function (r) { return this.to(d(this), r) }, n.fromNow = function (r) { return this.from(d(this), r) } } }))
    dayjs.extend(window.dayjs_plugin_relativeTime)
  } catch (e) {
    console.error('caught')
  }
  const timestampRegex = /^(?:\d+(?::[0-5][0-9]:[0-5][0-9])?|[0-5]?[0-9]:[0-5][0-9])$/gm
  const parseTimestamp = timestamp => {
    if (!timestampRegex.test(timestamp)) return 0
    const [mins, sec] = timestamp.split(':')
    return (parseInt(mins) * 60) + parseInt(sec)
  }
;(() => {
  let s = 1000; let m = s * 60; let h = m * 60; let d = h * 24; let w = d * 7; let y = d * 365.25; window.ms = function (val, options) { options = options || {}; let type = typeof val; if (type === 'string' && val.length > 0) { return parse(val) } else if (type === 'number' && isFinite(val)) { return options.long ? fmtLong(val) : fmtShort(val) } throw new Error('val is not a non-empty string or a valid number. val=' + JSON.stringify(val)) }; function parse (str) { str = String(str); if (str.length > 100) { return } let match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str); if (!match) { return } let n = parseFloat(match[1]); let type = (match[2] || 'ms').toLowerCase(); switch (type) { case 'years':case 'year':case 'yrs':case 'yr':case 'y':return n * y; case 'weeks':case 'week':case 'w':return n * w; case 'days':case 'day':case 'd':return n * d; case 'hours':case 'hour':case 'hrs':case 'hr':case 'h':return n * h; case 'minutes':case 'minute':case 'mins':case 'min':case 'm':return n * m; case 'seconds':case 'second':case 'secs':case 'sec':case 's':return n * s; case 'milliseconds':case 'millisecond':case 'msecs':case 'msec':case 'ms':return n; default:return undefined } } function fmtShort (ms) { let msAbs = Math.abs(ms); if (msAbs >= d) { return Math.round(ms / d) + 'd' } if (msAbs >= h) { return Math.round(ms / h) + 'h' } if (msAbs >= m) { return Math.round(ms / m) + 'm' } if (msAbs >= s) { return Math.round(ms / s) + 's' } return ms + 'ms' } function fmtLong (ms) { let msAbs = Math.abs(ms); if (msAbs >= d) { return plural(ms, msAbs, d, 'day') } if (msAbs >= h) { return plural(ms, msAbs, h, 'hour') } if (msAbs >= m) { return plural(ms, msAbs, m, 'minute') } if (msAbs >= s) { return plural(ms, msAbs, s, 'second') } return ms + ' ms' } function plural (ms, msAbs, n, name) { let isPlural = msAbs >= n * 1.5; return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '') }
})()
  console.debug(`Crunchroll Comments loaded`)
  const EXAMPLE_MESSAGE_PAYLOAD_GEN = () => {
    return {
      user_data: {
        avatar: 'https://static.crunchyroll.com/assets/avatar/60x60/1044-jujutsu-kaisen-satoru-gojo.png',
        name: 'Gojo'
      },
      content: `Wow crunchyroll ${Math.random().toString()}, ${Math.PI.toFixed(20).toString()}`,
      created_at: Date.now() - 5 * 1000 * 60
    }
  }
  const notLoggedIn = `
<div class="info-box--wxFEW info-box--is-narrow---ByIu"><h3 class="heading--nKNOf heading--is-xs--UyvXH heading--is-family-type-one--GqBzU list-info-box__title--G6GzN">Account Required</h3><p class="text--gq6o- text--is-l--iccTo list-info-box__description--zQj3B">Please <a tabindex="0" href="https://sso.crunchyroll.com/authorize?client_id=noaihdevm_6iyg0a8l0q&amp;redirect_uri=https%3A%2F%2Fwww.crunchyroll.com%2Fcallback&amp;response_type=cookie&amp;state=%2Fwatch%2FGRG5JD92R%2Fcruelty" class="user-message-action" data-t="anon-infobox-login">Log In</a> or <a tabindex="0" href="https://sso.crunchyroll.com/authorize?client_id=noaihdevm_6iyg0a8l0q&amp;redirect_uri=https%3A%2F%2Fwww.crunchyroll.com%2Fcallback&amp;response_type=cookie&amp;state=%2Fwatch%2FGRG5JD92R%2Fcruelty&amp;prompt=register" data-t="anon-infobox-signup" class="user-message-action">Create Account</a> to comment</p></div>
`

  function createAvatar (user_data = EXAMPLE_MESSAGE_PAYLOAD_GEN().user_data) {
    const avatar = document.createElement('div')
    avatar.className = 'avatar--t6-Pn'
    avatar.innerHTML = `
<div class="content-image--3na7E content-image--is-background-type-one--1LQDe avatar__image--Y0mTL"><figure class="content-image__figure--7vume"><picture><img class="progressive-image-base__fade--Nrn20 progressive-image-base__fade--is-ready--dMxKu content-image__image--7tGlg" loading="eager" src="${user_data.avatar}" alt="User avatar."></picture></figure></div>`
    return avatar
  }
  if (window.self !== window.top) {
    window.onload = () => {
      window.addEventListener('message', e => {
            // console.debug(e)
        if (typeof e === 'string') return
        const key = e.message ? 'message' : 'data'
        const data = e[key]
            // funfact all messages under data are video.js
    //    if(key !== 'data') {
    //     alert(key)
    //     alert(data)
    //    }
        const v = document.querySelector('video')

        switch (data.cmd) {
          case 'speed_to':
            v.currentTime = data.time
            break
        }
            // ...
      }, false)
    }
    return
  }
  const speed_up = point => {
    const el = document.getElementsByTagName('iframe')[0] || document.querySelector('#player0') || {}
    el.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' })
    if (document.getElementsByClassName('css-9pa8cd')[1]) document.getElementsByClassName('css-9pa8cd')[1].click()
    document.getElementsByTagName('iframe')[0].contentWindow.postMessage({ cmd: 'speed_to', time: point }, '*')
  }
  // window.speed_up_to = speed_up
  function createCommentBody (parent, body) {
    const noClassDiv = document.createElement('div') // called this because its class on site is class=""
    const innerDiv0 = document.createElement('div')
    innerDiv0.className = 'expandable-section__wrapper--G-ttI'
    const p = document.createElement('p')
    p.className = 'text--gq6o- text--is-l--iccTo expandable-section__text---00oG'
// p.style.paddingRight = "2px"
// p.style.paddingLeft = "2px"
    p.innerText = body
    const timestamps = []
    p.innerHTML.split(' ').forEach((e) => {
      if (e.includes(':') && !isNaN(e[0])) {
        timestamps.push(e)
      }
    })
    timestamps.forEach(timestamp => {
      const splits = p.innerHTML.split(timestamp)
      const before = splits[0]
      const after = splits[1]
      const a = document.createElement('a')
      a.className = 'cr-timestamp-link'
      a.onclick = () => speed_up(parseTimestamp(timestamp))
      a.innerText = timestamp
      p.innerHTML = ''
      p.append(before, a, after)
    })
//  const splits = p.innerHTML.split(' ').map(e => {
//     console.log(e.trim()[0])
//     if(e.includes(':') && !isNaN(e[0])) {
//         const a = document.createElement('a')
//         a.className = "cr-timestamp-link"
//         a.onclick = () => speed_up(parseTimestamp(e))
//         a.innerText = e
//         return a
//         // return `<a class="cr-timestamp-link" onclick="window.speed_up_to(${parseTimestamp(e)})">${e}</a>`
//     }  else {
//         const span = document.createElement('span')
//         span.innerText = " "+ e
//         return span
//     }
// })
// p.innerHTML = ""
// splits.forEach((el) => {
//     if(el && el.style) {
//         el.style.marginRight = "2px"
//     el.style.marginLeft = "2px"
//     }
//     p.append(el)
// })
    innerDiv0.append(p)
    noClassDiv.append(innerDiv0)
    if (parent) {
      return parent.append(noClassDiv)
    } else {
      return noClassDiv
    }
  }
  const div = document.createElement('div')

  async function runSystem () {
    const url = new URL(location.href)
    const [ep_id, ep_name] = url.pathname.split('/').slice(1)
    const userId = JSON.parse(localStorage.ajs_user_id) // user id will be used to identify user on comments
    function getUserLoggedInDetails () {
      if (!userId) return null
      const p = document.getElementsByClassName('erc-authenticated-user-menu')[0]
      return {
        avatar: p.children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].src,
        name: p.children[1].children[0].children[0].querySelector('h4').innerHTML
      }
    }
    const ep_data = await fetch(`https://api.saahild.com/api/crunchyroll/comments/${ep_id}/${ep_name}`, {
      headers: {
        'x-user-id': userId
      }
    }).then(r => r.json())
    function createCommentWrapper () {
      const wrapper = document.createElement('div')
      wrapper.className = 'comments-wrapper-narrow'
      const div = document.createElement('div')
      div.className = 'erc-comments'
      wrapper.append(div)
      return [wrapper, div]
    }
    function createSubmitPage (parent) {
      const div = document.createElement('div')
      div.className = 'info-box--wxFEW info-box--is-narrow---ByIu'
      const h3 = document.createElement('h3')
      const textarea = document.createElement('textarea')
      const submitButton = document.createElement('button')
      h3.className = 'heading--nKNOf heading--is-xs--UyvXH heading--is-family-type-one--GqBzU list-info-box__title--G6GzN'
      h3.innerText = 'Write Comment'
      textarea.style.marginBottom = '2.5rem'
      submitButton.className = 'button--xqVd0 button--is-type-one-weak--KLvCX load-more-button'
      textarea.rows = '30'
      textarea.cols = '30'
      textarea.className = 'comment-textarea__editable-area--gKhpt'
      submitButton.innerHTML = '<span class="call-to-action--PEidl call-to-action--is-m--RVdkI button__cta--LOqDH">Submit</span>'
      submitButton.onclick = () => {
        const info = getUserLoggedInDetails()
        console.debug(info)
        if (!info) return
        fetch(`https://api.saahild.com/api/crunchyroll/comments/${ep_id}/${ep_name}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-user-id': userId
          },
          body: JSON.stringify({
            user_data: info, content: textarea.value
          })
        }).then(r => r.json()).then(({ message, errors}) => alert(message.includes('NEW') ? `Message sent!` : `${message}${errors ? '\n' + errors.join('\n') : ''}`))
      }
      div.append(h3)
      div.append(textarea)
      div.append(submitButton)
      parent.append(div)
    }
    function createCommentEl (payload = EXAMPLE_MESSAGE_PAYLOAD_GEN()) {
      let { user_data, content, created_at, badges, is_liked, likes, dislikes, has_disliked, id, has_liked, is_mine } = payload
      if(!badges) badges = []
      if(payload.updated_at && payload.created_at !== payload.updated_at) badges = [{ name: "EDITED"}, ...badges]
      console.log(payload)
      const commentDiv = document.createElement('div')
      commentDiv.className = 'comment-wrapper'
// todo erc-comment-group
      const commentDetails = document.createElement('div')
      commentDetails.className = 'erc-comment-group'
      const innerDiv = document.createElement('div')
      innerDiv.className = 'comment--p2rGy'
      const avatar = createAvatar(user_data)
      const innerDivContent = document.createElement('div')
// todo comment actions
      const commentSignature = document.createElement('div')
      const commentBody = document.createElement('div')
      const commentActions = document.createElement('ul')
      commentActions.className = 'comment-actions--jMKiu'
      const reportEl = document.createElement('li')
      reportEl.className = 'comment-actions__item-wrapper--CbVBD'
      reportEl.innerHTML = `<button class="call-to-action--PEidl call-to-action--is-s--xFu35 comment-actions__item--5xkC3" onclick="window.open('mailto:neon@saahild.com?subject=Report%20Message&body=${encodeURIComponent(`[reason to report message]\n\nMessage ID:${id || created_at}\nMy ID: ${localStorage.ajs_user_id}`)}')"><svg class="episode-rate-action__icon--DEMWd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512"><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64l0 256c0 17.7 14.3 32 32 32s32-14.3 32-32L96 64zM64 480a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg> Report</button>`
      const likeEl = document.createElement('li')

      const likeBtn = document.createElement('button')
      likeEl.className = 'comment-actions__item-wrapper--CbVBD'
      likeBtn.className = 'call-to-action--PEidl call-to-action--is-s--xFu35 comment-actions__item--5xkC3'
      // if (has_liked) likeBtn.style.color = '#F47521'
      likeBtn.innerHTML = `<svg ${has_liked ? 'style="color: #F47521 !important;fill: #F47521 !important;stroke: #F47521 !important;"' : ''} class="episode-rate-action__icon--DEMWd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="thumbs-up-svg" aria-labelledby="thumbs-up-svg" aria-hidden="true" role="img"><title id="thumbs-up-svg">Like this</title><path d="M7 20h12v-4c0-.155.036-.309.105-.447l1.33-2.658c.28-.561.28-1.229 0-1.79L19.382 9H14a1 1 0 0 1-1-1V4c0-1.103-.897-2-2-2h-1v4.879a3.973 3.973 0 0 1-1.172 2.828l-.021.021L7 11.432V20zm12 2H6a1 1 0 0 1-1-1V11a1 1 0 0 1 .314-.728l2.109-1.989C7.795 7.906 8 7.408 8 6.879V1a1 1 0 0 1 1-1h2c2.206 0 4 1.794 4 4v3h4.382c.764 0 1.449.424 1.789 1.106l1.053 2.105a4.02 4.02 0 0 1 0 3.578L21 16.236V20c0 1.103-.897 2-2 2zm-17-.063a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v9.938a1 1 0 0 1-1 1z"></path></svg> ${likes || 0}`
      likeBtn.onclick = () => {
        // fetch('https:/')
        fetch(`https://api.saahild.com/api/crunchyroll/comments/${ep_id}/${ep_name}/${id || created_at}/like`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-user-id': userId
          }
        }).then(r => r.json()).then(({ message }) => {
          let n_has_liked = !has_liked
          let n_likes = n_has_liked ? likes + 1 : likes - 1
          if (has_liked) {
            likeBtn.style.color = ''
            likeBtn.innerHTML = `<svg ${n_has_liked ? 'style="color: #F47521 !important;fill: #F47521 !important;stroke: #F47521 !important;"' : ''} class="episode-rate-action__icon--DEMWd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="thumbs-up-svg" aria-labelledby="thumbs-up-svg" aria-hidden="true" role="img"><title id="thumbs-up-svg">Like this</title><path d="M7 20h12v-4c0-.155.036-.309.105-.447l1.33-2.658c.28-.561.28-1.229 0-1.79L19.382 9H14a1 1 0 0 1-1-1V4c0-1.103-.897-2-2-2h-1v4.879a3.973 3.973 0 0 1-1.172 2.828l-.021.021L7 11.432V20zm12 2H6a1 1 0 0 1-1-1V11a1 1 0 0 1 .314-.728l2.109-1.989C7.795 7.906 8 7.408 8 6.879V1a1 1 0 0 1 1-1h2c2.206 0 4 1.794 4 4v3h4.382c.764 0 1.449.424 1.789 1.106l1.053 2.105a4.02 4.02 0 0 1 0 3.578L21 16.236V20c0 1.103-.897 2-2 2zm-17-.063a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v9.938a1 1 0 0 1-1 1z"></path></svg> ${(n_likes || 0)}`
          } else {
            likeBtn.style.color = '#F47521'
            likeBtn.innerHTML = `<svg ${n_has_liked ? 'style="color: #F47521 !important;fill: #F47521 !important;stroke: #F47521 !important;"' : ''} class="episode-rate-action__icon--DEMWd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="thumbs-up-svg" aria-labelledby="thumbs-up-svg" aria-hidden="true" role="img"><title id="thumbs-up-svg">Like this</title><path d="M7 20h12v-4c0-.155.036-.309.105-.447l1.33-2.658c.28-.561.28-1.229 0-1.79L19.382 9H14a1 1 0 0 1-1-1V4c0-1.103-.897-2-2-2h-1v4.879a3.973 3.973 0 0 1-1.172 2.828l-.021.021L7 11.432V20zm12 2H6a1 1 0 0 1-1-1V11a1 1 0 0 1 .314-.728l2.109-1.989C7.795 7.906 8 7.408 8 6.879V1a1 1 0 0 1 1-1h2c2.206 0 4 1.794 4 4v3h4.382c.764 0 1.449.424 1.789 1.106l1.053 2.105a4.02 4.02 0 0 1 0 3.578L21 16.236V20c0 1.103-.897 2-2 2zm-17-.063a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v9.938a1 1 0 0 1-1 1z"></path></svg> ${(n_likes || 0)}`
          }
          has_liked = n_has_liked
          likes = n_likes
        })
      }
      const editSvg = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" class="episode-rate-action__icon--DEMWd" viewBox="0 0 24 24">
    <path d="M 18.414062 2 C 18.158062 2 17.902031 2.0979687 17.707031 2.2929688 L 15.707031 4.2929688 L 14.292969 5.7070312 L 3 17 L 3 21 L 7 21 L 21.707031 6.2929688 C 22.098031 5.9019687 22.098031 5.2689063 21.707031 4.8789062 L 19.121094 2.2929688 C 18.926094 2.0979687 18.670063 2 18.414062 2 z M 18.414062 4.4140625 L 19.585938 5.5859375 L 18.292969 6.8789062 L 17.121094 5.7070312 L 18.414062 4.4140625 z M 15.707031 7.1210938 L 16.878906 8.2929688 L 6.171875 19 L 5 19 L 5 17.828125 L 15.707031 7.1210938 z"></path>
</svg>`
const delSvg = `<svg xmlns="http://www.w3.org/2000/svg" class="episode-rate-action__icon--DEMWd" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.803372 6 11.082924 6.9194511 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 8.2636719 15 A 1.50015 1.50015 0 0 0 8.6523438 15.007812 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 39.347656 15.007812 A 1.50015 1.50015 0 0 0 39.728516 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.916254 6.9202798 35.196001 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 14.640625 9 L 33.359375 9 C 34.196749 9 34.974746 9.4162203 35.439453 10.113281 L 36.697266 12 L 11.302734 12 L 12.560547 10.113281 A 1.50015 1.50015 0 0 0 12.5625 10.111328 C 13.025982 9.4151428 13.801878 9 14.640625 9 z M 11.669922 15 L 36.330078 15 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 11.669922 15 z"></path>
</svg>`
      const dislikeEl = document.createElement('li')
      const dislikeBtn = document.createElement('button')
      dislikeEl.className = 'comment-actions__item-wrapper--CbVBD'
      dislikeBtn.className = 'call-to-action--PEidl call-to-action--is-s--xFu35 comment-actions__item--5xkC3'
      dislikeBtn.innerHTML = `<svg style="transform: rotate(180deg);${has_disliked ? 'fill: #F47521 !important;stroke: #F47521 !important;' : ''}" class="episode-rate-action__icon--DEMWd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="thumbs-up-svg" aria-labelledby="thumbs-up-svg" aria-hidden="true" role="img"><title id="thumbs-up-svg">Like this</title><path d="M7 20h12v-4c0-.155.036-.309.105-.447l1.33-2.658c.28-.561.28-1.229 0-1.79L19.382 9H14a1 1 0 0 1-1-1V4c0-1.103-.897-2-2-2h-1v4.879a3.973 3.973 0 0 1-1.172 2.828l-.021.021L7 11.432V20zm12 2H6a1 1 0 0 1-1-1V11a1 1 0 0 1 .314-.728l2.109-1.989C7.795 7.906 8 7.408 8 6.879V1a1 1 0 0 1 1-1h2c2.206 0 4 1.794 4 4v3h4.382c.764 0 1.449.424 1.789 1.106l1.053 2.105a4.02 4.02 0 0 1 0 3.578L21 16.236V20c0 1.103-.897 2-2 2zm-17-.063a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v9.938a1 1 0 0 1-1 1z"></path></svg> ${dislikes || 0}`
      dislikeBtn.onclick = () => {
        // fetch('https:/')
        fetch(`https://api.saahild.com/api/crunchyroll/comments/${ep_id}/${ep_name}/${id || created_at}/dislike`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-user-id': userId
          }
        }).then(r => r.json()).then(({ message }) => {
          let n_has_disliked = !has_disliked
          let n_likes = n_has_disliked ? dislikes + 1 : dislikes - 1
          if (has_disliked) {
            dislikeBtn.style.color = ''
          } else {
            dislikeBtn.style.color = '#F47521 !importent'
          }
          dislikeBtn.innerHTML = `<svg style="transform: rotate(180deg);${n_has_disliked ? 'fill: #F47521 !important;stroke: #F47521 !important;' : ''}" class="episode-rate-action__icon--DEMWd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-t="thumbs-up-svg" aria-labelledby="thumbs-up-svg" aria-hidden="true" role="img"><title id="thumbs-up-svg">Like this</title><path d="M7 20h12v-4c0-.155.036-.309.105-.447l1.33-2.658c.28-.561.28-1.229 0-1.79L19.382 9H14a1 1 0 0 1-1-1V4c0-1.103-.897-2-2-2h-1v4.879a3.973 3.973 0 0 1-1.172 2.828l-.021.021L7 11.432V20zm12 2H6a1 1 0 0 1-1-1V11a1 1 0 0 1 .314-.728l2.109-1.989C7.795 7.906 8 7.408 8 6.879V1a1 1 0 0 1 1-1h2c2.206 0 4 1.794 4 4v3h4.382c.764 0 1.449.424 1.789 1.106l1.053 2.105a4.02 4.02 0 0 1 0 3.578L21 16.236V20c0 1.103-.897 2-2 2zm-17-.063a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v9.938a1 1 0 0 1-1 1z"></path></svg> ${n_likes || 0}`
          has_disliked = n_has_disliked
          dislikes = n_likes
        })
      }
      const editEl = document.createElement('li')
      editEl.className = 'comment-actions__item-wrapper--CbVBD'
      const editBtn = document.createElement('button')
      editBtn.className = 'call-to-action--PEidl call-to-action--is-s--xFu35 comment-actions__item--5xkC3'
      editBtn.innerHTML = `${editSvg} Edit`
      editBtn.onclick = () => {
        const newContent = prompt(`New Message (IK THE UI IS BAD ITS BETA)`)
        // console.log(newContent)
         fetch(`https://api.saahild.com/api/crunchyroll/comments/${ep_id}/${ep_name}/${id || created_at}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-user-id': userId
          },
          body: JSON.stringify({
           content: newContent
          })
        }).then(r => r.json()).then(({ message, errors}) => {
          commentBody.innerHTML = ""
        createCommentBody(commentBody, newContent)
          alert(`Message Edited!`)
        })
      } 
      editEl.append(editBtn)
         const deleteEl = document.createElement('li')
         deleteEl.className = 'comment-actions__item-wrapper--CbVBD'
      const deleteBtn = document.createElement('button')
      deleteBtn.className = 'call-to-action--PEidl call-to-action--is-s--xFu35 comment-actions__item--5xkC3'
      deleteBtn.innerHTML = `${delSvg}`
      deleteBtn.onclick = () => {
const conf = confirm(`Are you sure you want to delete this!`)
if(conf) {
  // ...
  fetch(`https://api.saahild.com/api/crunchyroll/comments/${ep_id}/${ep_name}/${id || created_at}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-user-id': userId
    }
  }).then(r => r.json()).then(({ message, errors}) => {
  commentDiv.remove()
    alert(`Message Deleted!`)
  })
}
      } 
      deleteEl.append(deleteBtn)

      
      commentSignature.className = 'comment__signature--ViT7H'
      commentBody.className = 'comment__body--PmW4R'
// sig first
      const commenterUsername = document.createElement('div')
      commenterUsername.className = 'comment__username--dNChO'
      commenterUsername.innerHTML = `<h5 class="text--gq6o- text--is-semibold--AHOYN text--is-l--iccTo username--06KaN">${user_data.name} ${badges.map(b => `<span class='cr-badge'>${b.name}</span>`).join(' ')}</h5>`
      const commentDate = document.createElement('span')
      commentDate.className = 'text--gq6o- text--is-m--pqiL- comment__publication-date--1Enil'
      try {
        commentDate.innerText = dayjs().to(dayjs(created_at))
      } catch (e) {
    // dayjs broken on firefox
        commentDate.innerText = window.ms(Date.now() - created_at, true) + ' ago'
      }

      createCommentBody(commentBody, content)
      commentSignature.append(commenterUsername)
      commentSignature.append(commentDate)
      likeEl.append(likeBtn)
      dislikeEl.append(dislikeBtn)
      commentActions.append(reportEl)
      commentActions.append(likeEl)
      commentActions.append(dislikeEl)
      if(is_mine) {
        //... compile all here  
        commentActions.append(editEl)
        commentActions.append(deleteEl)
        }
      innerDivContent.append(commentSignature)

// innerDivContent.append(commentSignature)
      innerDivContent.append(commentBody)
      innerDivContent.append(commentActions)
      innerDiv.append(avatar)
      innerDiv.append(innerDivContent)
      commentDetails.append(innerDiv)
      commentDiv.append(commentDetails)
      return commentDiv
    }

    // setTimeout(async () => {
// const urlParams = new URLSearchParams(location.search)
// if(!url.pathname.includes('/watch/')) return;
    div.className = 'commenting-wrapper'
    const innerDiv = document.createElement('div') // inner div cus yes
    const commentSectionDiv = document.createElement('div')
    const commentsHeader = document.createElement('div')
    const commentsCount = document.createElement('h5')
    commentsCount.className = 'heading--nKNOf heading--is-xxs--1CKSn heading--is-family-type-one--GqBzU comments-count'
    commentsCount.innerText = '{comments_count} Comments'.replace('{comments_count}', ep_data.length)
    commentsHeader.className = 'comments-header'
    commentsHeader.appendChild(commentsCount)
    commentSectionDiv.className = 'erc-commenting-section'

    if (!userId) {
      const notLoggedInc = document.createElement('div')
      notLoggedInc.className = 'erc-anonymous-info-box anonymous-info-box'
      notLoggedInc.innerHTML = notLoggedIn
      commentSectionDiv.append(notLoggedInc)
    } else {
      const LoggedInc = document.createElement('div')
      LoggedInc.className = 'erc-anonymous-info-box anonymous-info-box'
    // LoggedInc.innerHTML =
      createSubmitPage(LoggedInc)
      commentSectionDiv.append(LoggedInc)
    }
    const [commentWrapper, addCommentsToMe] = createCommentWrapper()
    if (ep_data.length == 0) {
      const div = document.createElement('div')
      div.className = 'erc-no-comments'
      div.innerText = `Looks like theres no comments `
      addCommentsToMe.append(div)
    } else {
      const safeModeQ = await instance.storage.sync.get('safeMode').then(v => v.safeMode)
      console.log(`Safe Mode: ${safeModeQ}`)
      if (safeModeQ) {
        console.log('safe mode enabled')
        await Promise.all(ep_data
        .map(async e => {
          return {
            ...e,
            safeMode: !(await instance.runtime.sendMessage({ cmd: 'check_content', msg: e.content }))
          }
            // addCommentsToMe.append(createCommentEl(e))
        })).then(e => {
          console.debug(0)
          const filtered = e.filter(f => f.safeMode)
          commentsCount.innerText = '{comments_count} Comments'.replace('{comments_count}', filtered.length)
          filtered.forEach(e => {
            addCommentsToMe.append(createCommentEl(e))
          })
          console.debug(1)
        }) 
        console.debug(2)
      } else {
        ep_data.forEach(e => {
          addCommentsToMe.append(createCommentEl(e))
        })
      }
    }
// addCommentsToMe.append(createCommentEl(EXAMPLE_MESSAGE_PAYLOAD_GEN()))
// addCommentsToMe.append(createCommentEl(EXAMPLE_MESSAGE_PAYLOAD_GEN()))
// addCommentsToMe.append(createCommentEl(EXAMPLE_MESSAGE_PAYLOAD_GEN()))
// addCommentsToMe.append(createCommentEl(EXAMPLE_MESSAGE_PAYLOAD_GEN()))
// addCommentsToMe.append(createCommentEl(EXAMPLE_MESSAGE_PAYLOAD_GEN()))
// addCommentsToMe.append(createCommentEl(EXAMPLE_MESSAGE_PAYLOAD_GEN()))
// addCommentsToMe.append(createCommentEl(EXAMPLE_MESSAGE_PAYLOAD_GEN()))
    commentSectionDiv.append(commentsHeader)
    commentSectionDiv.append(commentWrapper)
    innerDiv.append(commentSectionDiv)
    div.append(innerDiv)
// console.log(parent)

    // }, 0)
  }
  let last_url = location.href.toString()
  setInterval(() => {
    let urlWasChanged = location.href !== last_url
    if (document.getElementsByClassName('commenting-wrapper')[0] && urlWasChanged) {
      last_url = location.href.toString()
      div.innerHTML = ''
      try {
        document.getElementsByClassName('commenting-wrapper')[0].remove()
      } catch (e) {}
      runSystem()
    } else {
      const parent = document.getElementsByClassName('body-wrapper')[0]
      if (!parent) return
      if (parent && !document.getElementsByClassName('commenting-wrapper')[0]) {
        parent.append(div)
      }
    }
  }, 20)
  runSystem()
})()
