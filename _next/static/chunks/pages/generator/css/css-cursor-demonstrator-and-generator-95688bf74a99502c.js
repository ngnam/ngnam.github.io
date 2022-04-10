(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{640:function(e,t,n){"use strict";var r=n(1742),i={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,o,a,s,c,l,f=!1;t||(t={}),n=t.debug||!1;try{if(a=r(),s=document.createRange(),c=document.getSelection(),(l=document.createElement("span")).textContent=e,l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=i[t.format]||i.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(l),s.selectNodeContents(l),c.addRange(s),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");f=!0}catch(p){n&&console.error("unable to copy using execCommand: ",p),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),f=!0}catch(p){n&&console.error("unable to copy using clipboardData: ",p),n&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(s):c.removeAllRanges()),l&&document.body.removeChild(l),a()}return f}},4827:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(5988),i=n(9008),o=n(7294),a=n(4300),s=n(1163),c=n(5893);function l(){var e=(0,s.useRouter)(),t=(0,o.useRef)(null),n=(0,o.useState)("alias"),l=n[0],f=n[1],p=(0,o.useState)("alias"),x=p[0],u=p[1],d=(0,o.useState)(null),m=d[0],b=d[1];(0,o.useEffect)((function(){u("".concat(l));var e="cursor: ".concat(l,";");t.current.value=e,b(e)}),[x,l]);var y=function(e){f(e.target.innerText)};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{className:"jsx-2867535976",children:"CSS Cursor Demonstrator and Generator"}),(0,c.jsx)("meta",{name:"description",content:"CSS Cursor Demonstrator and Generator< - a product by nguyen van nam 0928351036",className:"jsx-2867535976"})]}),(0,c.jsx)("header",{className:"jsx-2867535976",children:(0,c.jsxs)("div",{className:"jsx-2867535976 container",children:[(0,c.jsx)("h1",{className:"jsx-2867535976",children:"A Product of Nguyen Van Nam"}),(0,c.jsx)("h3",{className:"jsx-2867535976",children:"CSS Cursor Demonstrator and Generator"}),(0,c.jsx)("span",{onClick:function(){return e.back()},className:"jsx-2867535976 link-back",children:(0,c.jsxs)("a",{className:"jsx-2867535976",children:[(0,c.jsx)("span",{className:"jsx-2867535976",children:"\u2190"})," Back"]})})]})}),(0,c.jsxs)("section",{className:"jsx-2867535976 container",children:[(0,c.jsxs)("div",{className:"jsx-2867535976 item-container",children:[(0,c.jsxs)("h1",{className:"jsx-2867535976",children:["Cursor Options ",(0,c.jsx)("small",{className:"jsx-2867535976 text-helper",children:"(clicking or Hovering every option)"})]}),(0,c.jsx)("div",{className:"jsx-2867535976 list-options",children:["alias","all-scroll","auto","cell","context-menu","col-resize","copy","crosshair","default","e-resize","ew-resize","grab","grabbing","help","move","n-resize","ne-resize","nesw-resize","ns-resize","nw-resize","nwse-resize","no-drop","none","not-allowed","pointer","progress","row-resize","s-resize","se-resize","sw-resize","text","vertical-text","w-resize","wait","zoom-in","zoom-out","initial"].map((function(e){return(0,c.jsx)("div",{style:{cursor:e},onMouseOver:y,className:"jsx-2867535976 item-option",children:e},e)}))})]}),(0,c.jsxs)("div",{className:"jsx-2867535976 item-container box",children:[(0,c.jsx)("div",{style:{cursor:x},className:"jsx-2867535976 item-preview",children:m}),(0,c.jsxs)("div",{className:"jsx-2867535976 item-code",children:[(0,c.jsx)("textarea",{placeholder:"css generator",rows:"5",cols:"20",ref:t,className:"jsx-2867535976"}),(0,c.jsx)("div",{className:"jsx-2867535976 item-action",children:(0,c.jsx)(a.h,{text:m,onCopy:function(e){},children:(0,c.jsx)("button",{className:"jsx-2867535976",children:"Copy"})})})]})]})]}),(0,c.jsx)(r.default,{id:"2867535976",children:[".container.jsx-2867535976{max-width:100rem;min-height:60vh;margin:1rem auto;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}",".item-container.jsx-2867535976{margin:.5rem;padding:1rem;-webkit-flex:1;-ms-flex:1;flex:1;border:.5px dotted #ccc;background:#fff;}",".box.jsx-2867535976{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".box.jsx-2867535976 .item-preview.jsx-2867535976{-webkit-flex:1;-ms-flex:1;flex:1;font-family:Helvetica,Arial,sans-serif;font-size:1.5em;font-weight:600;text-align:center;color:red;background:#ffffff;border:3px solid #ccc;border-radius:10px;box-shadow:2px 2px 2px #ccc;max-height:100px;line-height:100px;margin:50px auto;overflow:visible;padding:0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".box.jsx-2867535976 .item-code.jsx-2867535976{-webkit-flex:1;-ms-flex:1;flex:1;background:#ccc;color:#333;padding:.5rem;font-size:1em;font-family:monospace;height:200px;width:100%;margin:50px 0;position:relative;}",".item-code.jsx-2867535976 .item-action.jsx-2867535976{position:absolute;top:8px;right:8px;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;display:none;}",".item-code.jsx-2867535976:hover .item-action.jsx-2867535976{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".item-code.jsx-2867535976 textarea.jsx-2867535976{width:100%;height:100%;padding:10px;font-size:1em;font-family:monospace;resize:none;}","header.jsx-2867535976>.container.jsx-2867535976{height:auto;min-height:auto;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:0;padding:0 1rem;}","header.jsx-2867535976>.container.jsx-2867535976 h1.jsx-2867535976,header.jsx-2867535976>.container.jsx-2867535976 .link-back.jsx-2867535976{font-size:1rem;min-width:20%;}",".link-back.jsx-2867535976{cursor:pointer;text-align:right;}","footer.jsx-2867535976{max-width:100rem;margin:1rem;}",".list-options.jsx-2867535976{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-height:450px;overflow:auto;}",".item-option.jsx-2867535976{-webkit-flex:1;-ms-flex:1;flex:1;margin:.5rem;padding:.5rem;border:.5px dotted #ccc;background:#fff;text-align:center;font-size:1em;font-family:monospace;font-weight:600;-webkit-transition:all .5s;transition:all .5s;-webkit-transition:all .5s;transition:all .5s;height:50px;min-width:12rem;max-width:12rem;}",".item-option.jsx-2867535976:hover{background:#94e6ff;color:red;border:1px solid #11a683;}",".text-helper.jsx-2867535976{color:gray;font-size:0.8em;}","@media (max-width:600px){.container.jsx-2867535976{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box.jsx-2867535976 .item-preview.jsx-2867535976{height:150px!important;max-height:150px!important;margin-top:25px!important;}}","@media only screen and (min-device-width:320px) and (max-device-width:480px) and (-webkit-min-device-pixel-ratio:2){.container.jsx-2867535976{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.box.jsx-2867535976 .item-preview.jsx-2867535976{height:150px!important;max-height:150px!important;margin-top:25px!important;}}"]})]})}},6211:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/css-cursor-demonstrator-and-generator",function(){return n(4827)}])},4300:function(e,t,n){"use strict";t.h=void 0;var r=o(n(7294)),i=o(n(640));function o(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?u(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var b=function(e){function t(){var e,n;l(this,t);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];return m(u(n=p(this,(e=x(t)).call.apply(e,[this].concat(a)))),"onClick",(function(e){var t=n.props,o=t.text,a=t.onCopy,s=t.children,c=t.options,l=r.default.Children.only(s),f=(0,i.default)(o,c);a&&a(o,f),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(e)})),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=c(e,["text","onCopy","options","children"]),i=r.default.Children.only(t);return r.default.cloneElement(i,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&f(n.prototype,o),a&&f(n,a),t}(r.default.PureComponent);t.h=b,m(b,"defaultProps",{onCopy:void 0,options:void 0})},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}},function(e){e.O(0,[285,774,888,179],(function(){return t=6211,e(e.s=t);var t}));var t=e.O();_N_E=t}]);