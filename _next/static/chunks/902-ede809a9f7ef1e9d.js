(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{1902:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(5893),a=r(9008),o=r(8721),i=r.n(o),l=r(5794),c=r.n(l),s=r(1664),u="My Portfolio",f="A personal website for nguyen van nam using Next.js";function d(e){var t=e.children,r=e.home,o="/images/11207864.jfif";return(0,n.jsxs)("div",{className:i().container,children:[(0,n.jsxs)(a.default,{children:[(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale"}),(0,n.jsx)("meta",{name:"description",content:"a personal website using Next.js"}),(0,n.jsx)("meta",{property:"og:image",content:o}),(0,n.jsx)("meta",{name:"og:title",content:f}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("title",{children:f})]}),(0,n.jsxs)("header",{className:i().header,children:[r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("img",{priority:"true",src:o,className:c().borderCircle,height:144,width:144,alt:u}),(0,n.jsx)("h1",{className:c().heading2Xl,children:u})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{children:(0,n.jsx)("img",{priority:"true",src:o,className:c().borderCircle,height:108,width:108,alt:u})})}),(0,n.jsx)("h2",{className:c().headingLg,children:(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{className:c().colorInherit,children:u})})})]}),(0,n.jsxs)("ul",{className:i().menu,children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/blog/hello",children:"Hello"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/blog/",children:"Blog"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.default,{href:"/authors/me",children:"Profile"})})]})]}),(0,n.jsx)("main",{className:i().main,children:t}),!r&&(0,n.jsx)("div",{className:i().backToHome,children:(0,n.jsx)(s.default,{href:"/",children:(0,n.jsx)("a",{children:"\u2190 Back to home"})})}),(0,n.jsx)("footer",{className:i().footer,children:(0,n.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear().toString()]})})]})}},8418:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},l=r(6273),c=r(387),s=r(7190);var u={};function f(e,t,r,n){if(e&&l.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;u[t+"%"+r+(a?"%"+a:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=c.useRouter(),o=i.default.useMemo((function(){var t=a(l.resolveHref(n,e.href,!0),2),r=t[0],o=t[1];return{href:r,as:e.as?l.resolveHref(n,e.as):o||r}}),[n,e.href,e.as]),d=o.href,h=o.as,m=e.children,p=e.replace,y=e.shallow,g=e.scroll,_=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var v=(t=i.default.Children.only(m))&&"object"===typeof t&&t.ref,x=a(s.useIntersection({rootMargin:"200px"}),2),b=x[0],j=x[1],w=i.default.useCallback((function(e){b(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,b]);i.default.useEffect((function(){var e=j&&r&&l.isLocalURL(d),t="undefined"!==typeof _?_:n&&n.locale,a=u[d+"%"+h+(t?"%"+t:"")];e&&!a&&f(n,d,h,{locale:t})}),[h,d,j,_,r,n]);var k={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,i,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[a?"replace":"push"](r,n,{shallow:o,locale:c,scroll:i}))}(e,n,d,h,p,y,g,_)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),l.isLocalURL(d)&&f(n,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var I="undefined"!==typeof _?_:n&&n.locale,L=n&&n.isLocaleDomain&&l.getDomainLocale(h,I,n&&n.locales,n&&n.domainLocales);k.href=L||l.addBasePath(l.addLocale(h,I,n&&n.defaultLocale))}return i.default.cloneElement(t,k)};t.default=d},7190:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o=[],i=!0,l=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(o.push(n.value),!t||o.length!==t);i=!0);}catch(c){l=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,n=o.useRef(),s=a(o.useState(!1),2),u=s[0],f=s[1],d=o.useCallback((function(e){n.current&&(n.current(),n.current=void 0),r||u||e&&e.tagName&&(n.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[r,t,u]);return o.useEffect((function(){if(!l&&!u){var e=i.requestIdleCallback((function(){return f(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),[d,u]};var o=r(7294),i=r(9311),l="undefined"!==typeof IntersectionObserver;var c=new Map},8721:function(e){e.exports={container:"layout_container__fbLkO",main:"layout_main__o_HW1",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_",footer:"layout_footer__dka_2",menu:"layout_menu__rRyk8"}},5794:function(e){e.exports={heading2Xl:"utils_heading2Xl___9fFP",headingXl:"utils_headingXl__u25Y2",headingLg:"utils_headingLg__5535D",headingMd:"utils_headingMd__gD1Ok",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},9008:function(e,t,r){e.exports=r(5443)},1664:function(e,t,r){e.exports=r(8418)}}]);