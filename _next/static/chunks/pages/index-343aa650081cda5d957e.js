_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"3lm8":function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t("mOvS"),o=t.n(r);function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",n=o()(),t=n.publicRuntimeConfig,r=void 0===t?{}:t,a=r.assetPrefix,c=void 0===a?"":a;return c+e}},RNiq:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),o=t.n(r),a=t("YFqc"),c=t.n(a),u=t("3lm8"),i=o.a.createElement;n.default=function(){return i("div",{className:"container bg-primary page"},i("h1",null,"Hello, world!"),i(c.a,{href:Object(u.a)("/about")},i("a",{className:"btn btn-light"},"About us")))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),i=t("vNVm"),f={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var s=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",s=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=s.href,p=s.as,v=e.children,h=e.replace,m=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var b=a.Children.only(v),_=b&&"object"===typeof b&&b.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),E=r(w,2),L=E[0],M=E[1],N=a.default.useCallback((function(e){L(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,L]);(0,a.useEffect)((function(){var e=M&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof y?y:t&&t.locale,o=f[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,M,y,n,t]);var R={ref:N,onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,d,p,h,m,g,y)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===b.type&&!("href"in b.props)){var O="undefined"!==typeof y?y:t&&t.locale,q=(0,c.getDomainLocale)(p,O,t&&t.locales,t&&t.domainLocales);R.href=q||(0,c.addBasePath)((0,c.addLocale)(p,O,t&&t.defaultLocale))}return a.default.cloneElement(b,R)};n.default=s},mOvS:function(e,n,t){e.exports=t("yLiY")},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,a.useRef)(),f=(0,a.useState)(!1),l=r(f,2),s=l[0],d=l[1],p=(0,a.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||s||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,s]);return(0,a.useEffect)((function(){u||s||(0,c.default)((function(){return d(!0)}))}),[s]),[p,s]};var a=t("q1tI"),c=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])},yLiY:function(e,n,t){"use strict";var r;n.__esModule=!0,n.setConfig=function(e){r=e},n.default=void 0;n.default=function(){return r}}},[["vlRD",0,2,1]]]);