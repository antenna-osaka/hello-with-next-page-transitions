_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{JIrl:function(e,n,t){"use strict";var o=t("q1tI"),r=t.n(o).a.createContext({position:{x:null,y:null},updatePosition:function(){}});n.a=r},Juyh:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),r=t.n(o),a=t("YFqc"),c=t.n(a),u=t("VccZ"),i=r.a.createElement,s=function(e){var n=Object(o.useState)(!1),t=n[0],r=n[1],a=e.pageTransitionReadyToEnter;Object(o.useEffect)((function(){var e=setTimeout((function(){a(),r(!0)}),2e3);return function(){clearTimeout(e)}}),[a]);var s=i(u.a,{position:{x:0,y:200}});return t?i("div",{className:"container bg-success page"},s,i("h1",null,"About us"),i("p",null,'Notice how a loading spinner showed up while my content was "loading"? Pretty neat, huh?'),i(c.a,{href:"/"},i("a",{className:"btn btn-light"},"Go back home"))):s};s.defaultProps={pageTransitionReadyToEnter:function(){}},s.pageTransitionDelayEnter=!0,n.default=s},VccZ:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var o=t("q1tI"),r=t.n(o),a=t("JIrl");function c(e){var n=e.position,t=r.a.useContext(a.a).updatePosition;return r.a.useEffect((function(){t(n)})),null}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var o=t("J4zp"),r=t("284h");n.__esModule=!0,n.default=void 0;var a=r(t("q1tI")),c=t("elyg"),u=t("nOHt"),i=t("vNVm"),s={};function l(e,n,t,o){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[n+"%"+t+(r?"%"+r:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),r=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(r,e.href,!0),t=o(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(r,e.as):u||a}}),[r,e.href,e.as]),p=f.href,d=f.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var m=a.Children.only(v),E=m&&"object"===typeof m&&m.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),_=o(w,2),T=_[0],I=_[1],L=a.default.useCallback((function(e){T(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,T]);(0,a.useEffect)((function(){var e=I&&n&&(0,c.isLocalURL)(p),o="undefined"!==typeof b?b:t&&t.locale,r=s[p+"%"+d+(o?"%"+o:"")];e&&!r&&l(t,p,d,{locale:o})}),[d,p,I,b,n,t]);var M={ref:L,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,n,t,o,r,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=o.indexOf("#")<0),n[r?"replace":"push"](t,o,{shallow:a,locale:i,scroll:u}).then((function(e){e&&u&&document.body.focus()})))}(e,t,p,d,h,y,g,b)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),l(t,p,d,{priority:!0}))}};if(e.passHref||"a"===m.type&&!("href"in m.props)){var N="undefined"!==typeof b?b:t&&t.locale,J=(0,c.getDomainLocale)(d,N,t&&t.locales,t&&t.domainLocales);M.href=J||(0,c.addBasePath)((0,c.addLocale)(d,N,t&&t.defaultLocale))}return a.default.cloneElement(m,M)};n.default=f},rB5V:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("Juyh")}])},vNVm:function(e,n,t){"use strict";var o=t("J4zp"),r=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,r=(0,a.useRef)(),s=(0,a.useState)(!1),l=o(s,2),f=l[0],p=l[1],d=(0,a.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),t||f||e&&e.tagName&&(r.current=function(e,n,t){var o=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var n=o.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:r,elements:o}),t}(t),r=o.id,a=o.observer,c=o.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(r))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,f]);return(0,a.useEffect)((function(){u||f||(0,c.default)((function(){return p(!0)}))}),[f]),[d,f]};var a=t("q1tI"),c=r(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map}},[["rB5V",0,2,1]]]);