(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3],{3397:function(e,r,t){"use strict";var n=t(4730),o=t(1246),c=t.n(o),i=t(7294),a=t(5893),l=["children","label","isShow","callback"];r.Z=function(e){var r=e.children,t=e.label,o=e.isShow,d=(e.callback,(0,n.Z)(e,l)),u=i.Children.only(r),s=d.inline;return o&&(0,a.jsxs)("div",{className:c().formGroupInput,children:[!s&&(0,a.jsx)("label",{className:c().label,children:t||""}),(0,a.jsxs)("div",{className:c().formGroupInputContainer,children:[s&&(0,a.jsx)("label",{className:c().label,children:t||""}),i.cloneElement(u)]})]})}},3276:function(e,r,t){"use strict";var n=t(9499),o=t(4730),c=t(7294),i=t(3858),a=t.n(i),l=t(5893),d=["label","errorMessage","onChange","id","editable"];function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=(0,c.useState)(!1),t=r[0],n=r[1],i=e.label,u=e.errorMessage,p=e.onChange,f=(e.id,e.editable),b=(0,o.Z)(e,d),h=(0,c.useRef)(),m=function(e){n(!0)},g=function(e){e.preventDefault(),isNaN(h.current.value)&&(h.current.value=0),h.current.value=parseInt(h.current.value)+1,h.current.focus()},x=function(e){e.preventDefault(),isNaN(h.current.value)&&(h.current.value=0),h.current.value=parseInt(h.current.value)-1,h.current.focus()};return!b.hidden&&(0,l.jsxs)("div",{className:a().formInput,children:[(0,l.jsx)("label",{htmlFor:b.name,children:i||""}),function(){switch(b.type){case"checkbox":return(0,l.jsx)("div",{className:a().formInputpn,children:(0,l.jsxs)("label",{className:"input_checkbox_container",children:[b.value?"On":"Off",(0,l.jsx)("input",s(s({},b),{},{checked:b.value,onChange:p})),(0,l.jsx)("span",{className:"checkmark input-checkbox-custom"})]})});case"radio":return(0,l.jsx)("div",{className:a().formInputpn,children:(0,l.jsxs)("label",{className:"input_checkbox_container",children:[b.value?"On":"Off",(0,l.jsx)("input",s(s({},b),{},{checked:b.value,onChange:p})),(0,l.jsx)("span",{className:"checkmark input-radio-custom"})]})});case"select":return(0,l.jsx)("div",{className:a().formInputpn,children:(0,l.jsxs)("select",s(s({onChange:p},b),{},{children:[(0,l.jsx)("option",{value:"",children:"--choose--"}),b.options.map((function(e,r){return(0,l.jsx)("option",{value:e.value,children:e.label},r)}))]}))});case"range":return(0,l.jsxs)("div",{className:a().formInputpn,children:[(0,l.jsx)("input",s(s({},b),{},{onChange:p,onBlur:m,className:"input-range-custom".concat(b.className?" "+b.className:"")})),f?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("input",{style:{width:"70px",flex:"0 1 auto"},onChange:p,type:"number",min:b.min,max:b.max,name:b.name,value:b.value}),(0,l.jsxs)("div",{className:a().currentValue,children:["".concat(b.value),b.unit?b.unit:""]})]}):(0,l.jsxs)("div",{className:a().currentValue,children:["".concat(b.value),b.unit?b.unit:""]})]});case"number":return(0,l.jsxs)("div",{className:a().formInputpn,children:[(0,l.jsxs)("div",{className:a().formInputGrouppn,children:[(0,l.jsx)("input",s(s({ref:h},b),{},{onChange:p,onFocus:p})),(0,l.jsxs)("div",{className:a().formInputAddon,children:[(0,l.jsx)("span",{onClick:g,className:a().formButtonPlus,children:"+"}),(0,l.jsx)("span",{onClick:x,children:"-"})]})]}),(0,l.jsxs)("div",{className:a().currentValue,children:["".concat(b.value),b.unit?b.unit:""]})]});default:return(0,l.jsxs)("div",{className:a().formInputpn,children:[(0,l.jsx)("input",s(s({},b),{},{onChange:p,onBlur:m,onFocus:function(){return"confirmPassword"===b.name&&n(!0)},focused:t.toString()})),(0,l.jsxs)("div",{className:a().currentValue,children:["".concat(b.value),b.unit?b.unit:""]})]})}}(),(0,l.jsx)("span",{className:a().formInput__error,children:u})]})}},3021:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return x}});var n=t(9499),o=t(9892),c=t(9008),i=t(3276),a=t(3397),l=t(7294),d=t(4300),u=t(1163),s=t(7448),p=t.n(s),f=t(4184),b=t.n(f),h=t(5893);function m(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function g(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?m(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function x(){var e=(0,u.useRouter)(),r=(0,l.useRef)(null),t=(0,l.useState)({targetinvidualborder:!1,borderwidth:10,borderstyle:"solid",bordercolor:"#ff6550",bordertopwidth:10,bordertopstyle:"solid",bordertopcolor:"#ff6550",borderrightwidth:0,borderrightstyle:"solid",borderrightcolor:"#ff6550",borderbottomwidth:10,borderbottomstyle:"solid",borderbottomcolor:"#ff6550",borderleftwidth:0,borderleftstyle:"solid",borderleftcolor:"#ff6550",background:"#ffffff",genbackground:!0}),s=t[0],f=t[1],m="rgb(21 140 186)",x=(0,l.useState)({borderAll:"10px solid #ff6550"}),v=(x[0],x[1]),j=(0,l.useState)(m),y=j[0],_=j[1],k=(0,l.useState)(null),O=k[0],N=k[1];(0,l.useEffect)((function(){var e={borderAll:"".concat(s.borderwidth,"px ").concat(s.borderstyle," ").concat(s.bordercolor),borderTop:"".concat(s.bordertopwidth,"px ").concat(s.bordertopstyle," ").concat(s.bordertopcolor),borderRight:"".concat(s.borderrightwidth,"px ").concat(s.borderrightstyle," ").concat(s.borderrightcolor),borderBottom:"".concat(s.borderbottomwidth,"px ").concat(s.borderbottomstyle," ").concat(s.borderbottomcolor),borderLeft:"".concat(s.borderleftwidth,"px ").concat(s.borderleftstyle," ").concat(s.borderleftcolor)};v(e);var t="".concat(s.targetinvidualborder?"border-top: ".concat(e.borderTop,";\n")+"border-right: ".concat(e.borderRight,";\n")+"border-bottom: ".concat(e.borderBottom,";\n")+"border-left: ".concat(e.borderLeft,";\n"):"border: ".concat(e.borderAll,";\n"))+"".concat(s.genbackground?"background: ".concat(y,";"):"");s.genbackground?_(s.background):_(m),r.current.value=t,N(t)}),[s,y]);var w=[{label:"Dotted",value:"dotted"},{label:"Dashed",value:"dashed"},{label:"Solid",value:"solid"},{label:"Double",value:"double"},{label:"Groove",value:"groove"},{label:"ridge",value:"ridge"},{label:"Inset",value:"inset"},{label:"Outset",value:"outset"},{label:"None",value:"none"},{label:"Hidden",value:"hidden"}],S=(0,l.useState)([{id:1,name:"borderwidth",type:"range",min:0,max:200,step:1,label:"Border Width (all borders)",required:!1,unit:"px",hidden:!1},{id:2,name:"targetinvidualborder",type:"checkbox",label:"Target invidual border"},{id:3,name:"borderstyle",label:"Border Style",type:"select",options:JSON.parse(JSON.stringify(w))},{id:4,name:"bordercolor",type:"color",label:"Border Color"},{id:5,name:"bordertopwidth",group:"Border Top",type:"number",col:3,hidden:!0,unit:"px"},{id:6,name:"bordertopstyle",group:"Border Top",type:"select",options:JSON.parse(JSON.stringify(w)),col:3,hidden:!0},{id:7,name:"bordertopcolor",group:"Border Top",type:"color",col:3,hidden:!0},{id:8,name:"borderrightwidth",group:"Border Right",type:"number",col:3,hidden:!0,unit:"px"},{id:9,name:"borderrightstyle",group:"Border Right",type:"select",options:JSON.parse(JSON.stringify(w)),col:3,hidden:!0},{id:10,name:"borderrightcolor",group:"Border Right",type:"color",col:3,hidden:!0},{id:11,name:"borderbottomwidth",group:"Border Bottom",type:"number",col:3,hidden:!0,unit:"px"},{id:12,name:"borderbottomstyle",group:"Border Bottom",type:"select",options:JSON.parse(JSON.stringify(w)),col:3,hidden:!0},{id:13,name:"borderbottomcolor",group:"Border Bottom",type:"color",col:3,hidden:!0},{id:14,name:"borderleftwidth",group:"Border Left",type:"number",col:3,hidden:!0,unit:"px"},{id:15,name:"borderleftstyle",group:"Border Left",type:"select",options:JSON.parse(JSON.stringify(w)),col:3,hidden:!0},{id:16,name:"borderleftcolor",group:"Border Left",type:"color",col:3,hidden:!0},{id:17,name:"background",type:"color",label:"Background Color"},{id:18,name:"genbackground",type:"checkbox",label:"Include background color in generating code:"}]),B=S[0],I=S[1],C=function(e){"checkbox"===e.target.type?(console.log(e.target.checked),"genbackground"===e.target.name&&(e.target.checked?_(s.background):_(m)),"targetinvidualborder"===e.target.name&&I((function(r){return r.filter((function(e){return 1===e.id}))[0].hidden=e.target.checked,r.filter((function(e){return 3===e.id}))[0].hidden=e.target.checked,r.filter((function(e){return 4===e.id}))[0].hidden=e.target.checked,r.filter((function(e){return 5===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 6===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 7===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 8===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 9===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 10===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 11===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 12===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 13===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 14===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 15===e.id}))[0].hidden=!e.target.checked,r.filter((function(e){return 16===e.id}))[0].hidden=!e.target.checked,(0,o.Z)(r)})),f(g(g({},s),{},(0,n.Z)({},e.target.name,!s[e.target.name])))):f(g(g({},s),{},(0,n.Z)({},e.target.name,e.target.value)))};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(c.default,{children:[(0,h.jsx)("title",{children:"Border CSS Generator"}),(0,h.jsx)("meta",{name:"description",content:"Border CSS Generator CSS Generator tool - a product by nguyen van nam 0928351036"})]}),(0,h.jsx)("header",{className:p().header,children:(0,h.jsxs)("div",{className:b()([p().container,"container"]),children:[(0,h.jsx)("h1",{children:"A Product of Nguyen Van Nam"}),(0,h.jsx)("h3",{children:"Border CSS Generator"}),(0,h.jsx)("span",{className:p()["link-back"],onClick:function(){return e.back()},children:(0,h.jsxs)("a",{children:[(0,h.jsx)("span",{children:"\u2190"})," Back"]})})]})}),(0,h.jsxs)("section",{className:b()([p().container,"container"]),children:[(0,h.jsx)("div",{className:p()["item-container"],children:(0,h.jsxs)("form",{children:[(0,h.jsx)("h1",{children:"Border Options"}),(0,h.jsx)(a.Z,{label:"Border Top",isShow:s.targetinvidualborder,children:(0,h.jsx)(h.Fragment,{children:B.filter((function(e){return"Border Top"===e.group})).map((function(e){return(0,h.jsx)(i.Z,g(g({},e),{},{value:s[e.name],onChange:C}),e.id)}))})}),(0,h.jsx)(a.Z,{label:"Border Right",isShow:s.targetinvidualborder,children:(0,h.jsx)(h.Fragment,{children:B.filter((function(e){return"Border Right"===e.group})).map((function(e){return(0,h.jsx)(i.Z,g(g({},e),{},{value:s[e.name],onChange:C}),e.id)}))})}),(0,h.jsx)(a.Z,{label:"Border Bottom",isShow:s.targetinvidualborder,children:(0,h.jsx)(h.Fragment,{children:B.filter((function(e){return"Border Bottom"===e.group})).map((function(e){return(0,h.jsx)(i.Z,g(g({},e),{},{value:s[e.name],onChange:C}),e.id)}))})}),(0,h.jsx)(a.Z,{label:"Border Left",isShow:s.targetinvidualborder,children:(0,h.jsx)(h.Fragment,{children:B.filter((function(e){return"Border Left"===e.group})).map((function(e){return(0,h.jsx)(i.Z,g(g({},e),{},{value:s[e.name],onChange:C}),e.id)}))})}),B.filter((function(e){return!e.group})).map((function(e){return(0,h.jsx)(i.Z,g(g({},e),{},{value:s[e.name],onChange:C}),e.id)}))]})}),(0,h.jsxs)("div",{className:b()([p()["item-container"],p().box]),children:[s.targetinvidualborder?(0,h.jsx)("div",{className:p()["item-preview"],style:{borderWidth:"".concat(s.bordertopwidth,"px ").concat(s.borderrightwidth,"px ").concat(s.borderbottomwidth,"px ").concat(s.borderleftwidth,"px"),borderStyle:"".concat(s.bordertopstyle," ").concat(s.borderrightstyle," ").concat(s.borderbottomstyle," ").concat(s.borderleftstyle),borderColor:"".concat(s.bordertopcolor," ").concat(s.borderrightcolor," ").concat(s.borderbottomcolor," ").concat(s.borderleftcolor),backgroundColor:y},children:"Border CSS generator"}):(0,h.jsx)("div",{className:p()["item-preview"],style:{border:"".concat(s.borderwidth,"px ").concat(s.borderstyle," ").concat(s.bordercolor),backgroundColor:y},children:"Border CSS generator"}),(0,h.jsxs)("div",{className:p()["item-code"],children:[(0,h.jsx)("textarea",{placeholder:"css generator",rows:"5",cols:"20",ref:r}),(0,h.jsx)("div",{className:p()["item-action"],children:(0,h.jsx)(d.h,{text:O,onCopy:function(e){},children:(0,h.jsx)("button",{className:"p-2",children:"Copy"})})})]})]})]})]})}},1088:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/border-css-generator",function(){return t(3021)}])},1246:function(e){e.exports={formGroupInput:"formGroupInput_formGroupInput__hHva_",formGroupInputContainer:"formGroupInput_formGroupInputContainer__baJtW",label:"formGroupInput_label__ZSgd0"}},3858:function(e){e.exports={formInput:"formInput_formInput__C59Bd",formInput__error:"formInput_formInput__error__bsjYY",formInputpn:"formInput_formInputpn__oz3L6",flexWrap:"formInput_flexWrap__mUYmb",currentValue:"formInput_currentValue__TBzNq",inputCol:"formInput_inputCol__7NnBa",formInputGrouppn:"formInput_formInputGrouppn__e8psX",formInputAddon:"formInput_formInputAddon__KfykE",formButtonPlus:"formInput_formButtonPlus__qRlU9"}},7448:function(e){e.exports={container:"css_container__hsn3T","item-container":"css_item-container___EXFJ",box:"css_box__ts0wC","item-preview":"css_item-preview__R_gDc","item-code":"css_item-code__0Rlg4","item-action":"css_item-action__QcZnG","list-options":"css_list-options__mkVOa","item-option":"css_item-option__RGMLv","text-helper":"css_text-helper__MXVxT",footer:"css_footer__KkwUG",header:"css_header__oReCN","link-back":"css_link-back__gjnex"}},4730:function(e,r,t){"use strict";function n(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(r,{Z:function(){return n}})},9892:function(e,r,t){"use strict";function n(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(r,{Z:function(){return o}})}},function(e){e.O(0,[285,774,888,179],(function(){return r=1088,e(e.s=r);var r}));var r=e.O();_N_E=r}]);