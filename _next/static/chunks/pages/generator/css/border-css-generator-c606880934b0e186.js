(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{640:function(e,n,t){"use strict";var r=t(1742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,n){var t,a,c,i,l,s,b=!1;n||(n={}),t=n.debug||!1;try{if(c=r(),i=document.createRange(),l=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),n.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){t&&console.warn("unable to use e.clipboardData"),t&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[n.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(n.format,e);n.onCopy&&(r.preventDefault(),n.onCopy(r.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");b=!0}catch(f){t&&console.error("unable to copy using execCommand: ",f),t&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(n.format||"text",e),n.onCopy&&n.onCopy(window.clipboardData),b=!0}catch(f){t&&console.error("unable to copy using clipboardData: ",f),t&&console.error("falling back to prompt"),a=function(e){var n=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,n)}("message"in n?n.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),s&&document.body.removeChild(s),c()}return b}},1088:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/border-css-generator",function(){return t(6216)}])},5734:function(e,n,t){"use strict";var r=t(5893),o=t(7294),a=t(3858),c=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){i(e,n,t[n])}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.Z=function(e){var n=(0,o.useState)(!1),t=n[0],a=n[1],i=e.label,b=e.errorMessage,f=e.onChange,u=(e.id,s(e,["label","errorMessage","onChange","id"])),d=function(e){a(!0)};return!u.hidden&&(0,r.jsxs)("div",{className:c().formInput,children:[(0,r.jsx)("label",{htmlFor:u.name,children:i}),function(){switch(u.type){case"checkbox":return(0,r.jsxs)("div",{className:c().formInputpn,children:[(0,r.jsx)("input",l({},u,{checked:u.checked,onChange:f})),(0,r.jsx)("div",{className:c().currentValue,children:u.checked?"On":"Off"})]});case"select":return(0,r.jsx)("div",{className:c().formInputpn,children:(0,r.jsxs)("select",l({onChange:f},u,{children:[(0,r.jsx)("option",{value:"",children:"--choose--"}),u.options.map((function(e,n){return(0,r.jsx)("option",{value:e.value,children:e.label},n)}))]}))});default:return(0,r.jsxs)("div",{className:c().formInputpn,children:[(0,r.jsx)("input",l({},u,{onChange:f,onBlur:d,onFocus:function(){return"confirmPassword"===u.name&&a(!0)},focused:t.toString()})),(0,r.jsxs)("div",{className:c().currentValue,children:["".concat(u.value)," ",u.unit?u.unit:""]})]})}}(),(0,r.jsx)("span",{children:b})]})}},6216:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return p}});var r=t(5893),o=t(5988),a=t(9008),c=t(5734),i=t(7294),l=t(4300),s=t(1163);function b(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){f(e,n,t[n])}))}return e}function d(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"===typeof e)return b(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return b(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(){var e=(0,s.useRouter)(),n=(0,i.useRef)(null),t=(0,i.useState)({targetinvidualborder:!1,borderwidth:18,borderstyle:"outset",bordercolor:"#ff6550",background:"#ffffff",genbackground:!1}),b=t[0],p=t[1],m="rgb(21 140 186)",x=(0,i.useState)("18px solid #ff6550"),y=x[0],g=x[1],h=(0,i.useState)(m),j=h[0],v=h[1],w=(0,i.useState)(null),k=w[0],O=w[1];(0,i.useEffect)((function(){g("".concat(b.borderwidth,"px ").concat(b.borderstyle," ").concat(b.bordercolor));var e="border: ".concat(y,";");b.genbackground?(v(b.background),e+="\nbackground: ".concat(b.background,";")):(e="border: ".concat(y,";"),v(m)),n.current.value=e,O(e)}),[y,b]);var C=(0,i.useState)([{id:1,name:"borderwidth",type:"range",min:0,max:200,step:1,label:"Border Width (all borders)",required:!1,unit:"px",hidden:!1},{id:2,name:"targetinvidualborder",type:"checkbox",label:"Target invidual border"},{id:3,name:"borderstyle",label:"Border Style",type:"select",options:[{label:"Dotted",value:"dotted"},{label:"Dashed",value:"dashed"},{label:"Solid",value:"solid"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"ridge",value:"ridge"},{label:"Inset",value:"inset"},{label:"Outset",value:"outset"},{label:"None",value:"none"},{label:"Hidden",value:"hidden"}]},{id:4,name:"bordercolor",type:"color",label:"Border Color"},{id:5,name:"background",type:"color",label:"Background Color"},{id:6,name:"genbackground",type:"checkbox",label:"Include background color in generating code:"}]),S=C[0],N=C[1],P=function(e){"checkbox"===e.target.type?(console.log(e.target.checked),"genbackground"===e.target.name&&(e.target.checked?v(b.background):v(m)),"targetinvidualborder"===e.target.name&&N((function(n){return n.filter((function(e){return 1===e.id}))[0].hidden=e.target.checked,d(n)})),p(u({},b,f({},e.target.name,!b[e.target.name])))):"select"===e.target.type?console.log(e.target.value):p(u({},b,f({},e.target.name,e.target.value)))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{className:"jsx-9bfca65ab8bb473f",children:"Border CSS Generator"}),(0,r.jsx)("meta",{name:"description",content:"Border CSS Generator CSS Generator tool - a product by nguyen van nam 0928351036",className:"jsx-9bfca65ab8bb473f"})]}),(0,r.jsx)("header",{className:"jsx-9bfca65ab8bb473f",children:(0,r.jsxs)("div",{className:"jsx-9bfca65ab8bb473f container",children:[(0,r.jsx)("h1",{className:"jsx-9bfca65ab8bb473f",children:"A Product of Nguyen Van Nam"}),(0,r.jsx)("h3",{className:"jsx-9bfca65ab8bb473f",children:"Border CSS Generator"}),(0,r.jsx)("span",{onClick:function(){return e.back()},className:"jsx-9bfca65ab8bb473f link-back",children:(0,r.jsxs)("a",{className:"jsx-9bfca65ab8bb473f",children:[(0,r.jsx)("span",{className:"jsx-9bfca65ab8bb473f",children:"\u2190"})," Back"]})})]})}),(0,r.jsxs)("section",{className:"jsx-9bfca65ab8bb473f container",children:[(0,r.jsx)("div",{className:"jsx-9bfca65ab8bb473f item-container",children:(0,r.jsxs)("form",{className:"jsx-9bfca65ab8bb473f",children:[(0,r.jsx)("h1",{className:"jsx-9bfca65ab8bb473f",children:"Border Options"}),S.map((function(e){return"checkbox"===e.type?(0,r.jsx)(c.Z,u({},e,{checked:b[e.name],onChange:P}),e.id):(0,r.jsx)(c.Z,u({},e,{value:b[e.name],onChange:P}),e.id)}))]})}),(0,r.jsxs)("div",{className:"jsx-9bfca65ab8bb473f item-container box",children:[(0,r.jsx)("div",{style:{border:y,backgroundColor:j},className:"jsx-9bfca65ab8bb473f item-preview",children:"Border CSS generator"}),(0,r.jsx)("div",{className:"jsx-9bfca65ab8bb473f item-code",children:(0,r.jsx)("textarea",{placeholder:"css generator",rows:"5",cols:"20",ref:n,className:"jsx-9bfca65ab8bb473f"})}),(0,r.jsx)("div",{className:"jsx-9bfca65ab8bb473f item-action",children:(0,r.jsx)(l.h,{text:k,onCopy:function(e){},children:(0,r.jsx)("button",{className:"jsx-9bfca65ab8bb473f",children:"Copy"})})})]})]}),(0,r.jsx)(o.default,{id:"9bfca65ab8bb473f",children:".container.jsx-9bfca65ab8bb473f{max-width:100rem;\nmin-height:60vh;\nmargin:1rem auto;\npadding:0 0.5rem;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:row;\n-ms-flex-direction:row;\nflex-direction:row;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between}\n.item-container.jsx-9bfca65ab8bb473f{margin:.5rem;\npadding:1rem;\n-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nborder:.5px dotted #ccc;\nbackground:#fff}\n.box.jsx-9bfca65ab8bb473f{display:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column;\n-webkit-box-pack:justify;\n-webkit-justify-content:space-between;\njustify-content:space-between;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center}\n.box.jsx-9bfca65ab8bb473f .item-preview.jsx-9bfca65ab8bb473f{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:rgb(21, 140, 186);\nwidth:500px;\nheight:250px;\nmax-height:250px;\nmargin-top:50px;\npadding:1em;\ndisplay:-webkit-box;\ndisplay:-webkit-flex;\ndisplay:-ms-flexbox;\ndisplay:flex;\n-webkit-justify-content:center;\njustify-content:center;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\ncolor:#333}\n.box.jsx-9bfca65ab8bb473f .item-code.jsx-9bfca65ab8bb473f{-webkit-flex:1;\n-ms-flex:1;\nflex:1;\nbackground:#ccc;\ncolor:#333;\npadding:.5rem;\nfont-size:1em;\nfont-family:monospace;\nheight:200px;\nwidth:100%;\nmargin:50px 0}\n.item-code.jsx-9bfca65ab8bb473f textarea.jsx-9bfca65ab8bb473f{width:100%;\nheight:100%;\npadding:10px;\nfont-size:1em;\nfont-family:monospace;\nresize:none}\nfooter.jsx-9bfca65ab8bb473f{max-width:100rem;\nmargin:1rem}\nheader.jsx-9bfca65ab8bb473f>.container.jsx-9bfca65ab8bb473f{height:auto;\nmin-height:auto;\n-webkit-align-items:center;\n-webkit-box-align:center;\n-ms-flex-align:center;\nalign-items:center;\nmargin-bottom:0;\npadding:0 1rem}\nheader.jsx-9bfca65ab8bb473f>.container.jsx-9bfca65ab8bb473f h1.jsx-9bfca65ab8bb473f, header.jsx-9bfca65ab8bb473f>.container.jsx-9bfca65ab8bb473f .link-back.jsx-9bfca65ab8bb473f{font-size:1rem;\nmin-width:20%}\n.link-back.jsx-9bfca65ab8bb473f{cursor:pointer;\ntext-align:right}\n@media (max-width:600px) {.container.jsx-9bfca65ab8bb473f{-webkit-flex-direction:column;\n-ms-flex-direction:column;\nflex-direction:column}\n.box.jsx-9bfca65ab8bb473f .item-preview.jsx-9bfca65ab8bb473f{width:50vh!important;\nheight:150px!important;\nmax-height:150px!important;\nmargin-top:25px!important}}\n@media'next/link';"})]})}},3858:function(e){e.exports={formInput:"formInput_formInput__C59Bd",formInputpn:"formInput_formInputpn__oz3L6",currentValue:"formInput_currentValue__TBzNq"}},4300:function(e,n,t){"use strict";n.h=void 0;var r=a(t(7294)),o=a(t(640));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function s(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function b(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,n){return!n||"object"!==c(n)&&"function"!==typeof n?d(e):n}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,n){return(p=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var x=function(e){function n(){var e,t;s(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return m(d(t=f(this,(e=u(n)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var n=t.props,a=n.text,c=n.onCopy,i=n.children,l=n.options,s=r.default.Children.only(i),b=(0,o.default)(a,l);c&&c(a,b),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(e)})),t}var t,a,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&p(e,n)}(n,e),t=n,(a=[{key:"render",value:function(){var e=this.props,n=(e.text,e.onCopy,e.options,e.children),t=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(n);return r.default.cloneElement(o,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(t,!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},t,{onClick:this.onClick}))}}])&&b(t.prototype,a),c&&b(t,c),n}(r.default.PureComponent);n.h=x,m(x,"defaultProps",{onCopy:void 0,options:void 0})},1742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var n=document.activeElement,t=[],r=0;r<e.rangeCount;r++)t.push(e.getRangeAt(r));switch(n.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":n.blur();break;default:n=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||t.forEach((function(n){e.addRange(n)})),n&&n.focus()}}}},function(e){e.O(0,[285,774,888,179],(function(){return n=1088,e(e.s=n);var n}));var n=e.O();_N_E=n}]);