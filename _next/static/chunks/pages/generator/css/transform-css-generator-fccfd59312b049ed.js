(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[702],{3276:function(e,n,t){"use strict";var r=t(9499),a=t(4730),s=t(7294),c=t(3858),o=t.n(c),i=t(5893),l=["label","errorMessage","onChange","id","editable"];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=(0,s.useState)(!1),t=n[0],r=n[1],c=e.label,u=e.errorMessage,m=e.onChange,f=(e.id,e.editable),d=(0,a.Z)(e,l),h=(0,s.useRef)(),x=function(e){r(!0)},_=function(e){e.preventDefault(),isNaN(h.current.value)&&(h.current.value=0),h.current.value=parseInt(h.current.value)+1,h.current.focus()},j=function(e){e.preventDefault(),isNaN(h.current.value)&&(h.current.value=0),h.current.value=parseInt(h.current.value)-1,h.current.focus()};return!d.hidden&&(0,i.jsxs)("div",{className:o().formInput,children:[(0,i.jsx)("label",{htmlFor:d.name,children:c||""}),function(){switch(d.type){case"checkbox":return(0,i.jsx)("div",{className:o().formInputpn,children:(0,i.jsxs)("label",{className:"input_checkbox_container",children:[d.value?"On":"Off",(0,i.jsx)("input",p(p({},d),{},{checked:d.value,onChange:m})),(0,i.jsx)("span",{className:"checkmark input-checkbox-custom"})]})});case"radio":return(0,i.jsx)("div",{className:o().formInputpn,children:(0,i.jsxs)("label",{className:"input_checkbox_container",children:[d.value?"On":"Off",(0,i.jsx)("input",p(p({},d),{},{checked:d.value,onChange:m})),(0,i.jsx)("span",{className:"checkmark input-radio-custom"})]})});case"select":return(0,i.jsx)("div",{className:o().formInputpn,children:(0,i.jsxs)("select",p(p({onChange:m},d),{},{children:[(0,i.jsx)("option",{value:"",children:"--choose--"}),d.options.map((function(e,n){return(0,i.jsx)("option",{value:e.value,children:e.label},n)}))]}))});case"range":return(0,i.jsxs)("div",{className:o().formInputpn,children:[(0,i.jsx)("input",p(p({},d),{},{onChange:m,onBlur:x,className:"input-range-custom".concat(d.className?" "+d.className:"")})),f?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{style:{width:"70px",flex:"0 1 auto"},onChange:m,type:"number",min:d.min,max:d.max,name:d.name,value:d.value}),(0,i.jsxs)("div",{className:o().currentValue,children:["".concat(d.value),d.unit?d.unit:""]})]}):(0,i.jsxs)("div",{className:o().currentValue,children:["".concat(d.value),d.unit?d.unit:""]})]});case"number":return(0,i.jsxs)("div",{className:o().formInputpn,children:[(0,i.jsxs)("div",{className:o().formInputGrouppn,children:[(0,i.jsx)("input",p(p({ref:h},d),{},{onChange:m,onFocus:m})),(0,i.jsxs)("div",{className:o().formInputAddon,children:[(0,i.jsx)("span",{onClick:_,className:o().formButtonPlus,children:"+"}),(0,i.jsx)("span",{onClick:j,children:"-"})]})]}),(0,i.jsxs)("div",{className:o().currentValue,children:["".concat(d.value),d.unit?d.unit:""]})]});default:return(0,i.jsxs)("div",{className:o().formInputpn,children:[(0,i.jsx)("input",p(p({},d),{},{onChange:m,onBlur:x,onFocus:function(){return"confirmPassword"===d.name&&r(!0)},focused:t.toString()})),(0,i.jsxs)("div",{className:o().currentValue,children:["".concat(d.value),d.unit?d.unit:""]})]})}}(),(0,i.jsx)("span",{className:o().formInput__error,children:u})]})}},3703:function(e,n,t){"use strict";t.d(n,{yf:function(){return r},vC:function(){return a},zZ:function(){return s},Kx:function(){return c}});var r="Web Development Tips",a="/images/girl-g06b208c73_1920.jpg",s="/images/logo.png",c={degreeSign:"\xb0",degreeSignJSCODE:"\xb0",degreeSignEscape:"%C2%B0"}},6913:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(9499),a=t(9008),s=t(3276),c=t(7294),o=t(4300),i=t(1163),l=t(3703),u=t(7448),p=t.n(u),m=t(4184),f=t.n(m),d=t(5893);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(){var e=(0,i.useRouter)(),n=(0,c.useRef)(null),t=(0,c.useState)({rotate:0,scale:1,skew:0,translateX:0,translateY:0}),u=t[0],m=t[1],h=(0,c.useState)(null),_=h[0],j=h[1],v=(0,c.useState)(null),b=v[0],g=v[1];(0,c.useEffect)((function(){var e="".concat(0===parseInt(u.rotate)?"":"rotate(".concat(u.rotate,"deg) "))+"".concat(1===parseFloat(u.scale)?"":"scale(".concat(u.scale,") "))+"".concat(0===parseInt(u.skew)?"":"skew(".concat(u.skew,"deg) "))+"".concat(0===parseInt(u.translateX)&&0===parseInt(u.translateY)?"":"translate(".concat(u.translateX,"px, ").concat(u.translateY,"px)")),t=null!==e&&""!==e;t&&(e=e.trimEnd()),j(e);var r="".concat(t?"transform: ".concat(e,";\n"):"")+"".concat(t?"-webkit-transform: ".concat(e,";\n"):"")+"".concat(t?"-moz-transform: ".concat(e,";\n"):"");n.current.value=r,g(r)}),[u]);var y=[{id:1,name:"rotate",type:"range",min:0,max:360,step:1,label:"Rotate",unit:l.Kx.degreeSign,required:!1,editable:"true"},{id:2,name:"scale",type:"range",min:.1,max:2,step:.1,label:"Scale",editable:"true"},{id:3,name:"skew",type:"range",min:-180,max:180,step:1,label:"Skew",unit:l.Kx.degreeSign,editable:"true"},{id:4,name:"translateX",type:"range",min:-200,max:200,step:1,label:"Translate X",unit:"px",editable:"true"},{id:5,name:"translateY",type:"range",min:-200,max:200,step:1,label:"Translate Y",unit:"px",editable:"true"}],N=function(e){var n=e.target||e,t=n.name;if(console.log(""==n.value,typeof n.value),isNaN(parseFloat(n.value))&&""===n.value)m(x(x({},u),{},(0,r.Z)({},t,"scale"==t?1:0)));else{var a=parseFloat(n.value),s=y.filter((function(e){return e.name===t}))[0];if(s){var c=s.max,o=s.min;a>c&&(a=c),a<o&&(a=o)}m(x(x({},u),{},(0,r.Z)({},t,a)))}};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(a.default,{children:[(0,d.jsx)("title",{children:"Transform CSS Generator"}),(0,d.jsx)("meta",{name:"description",content:"Box Shadow CSS Generator tool - a product by nguyen van nam 0928351036"})]}),(0,d.jsx)("header",{className:p().header,children:(0,d.jsxs)("div",{className:f()([p().container,"container"]),children:[(0,d.jsx)("h1",{children:"A Product of Nguyen Van Nam"}),(0,d.jsx)("h3",{children:"Transform CSS Generator"}),(0,d.jsx)("span",{className:p()["link-back"],onClick:function(){return e.back()},children:(0,d.jsxs)("a",{children:[(0,d.jsx)("span",{children:"\u2190"})," Back"]})})]})}),(0,d.jsxs)("section",{className:f()([p().container,"container"]),children:[(0,d.jsx)("div",{className:p()["item-container"],children:(0,d.jsxs)("form",{children:[(0,d.jsx)("h1",{className:"mb-2",children:"Transform Options"}),y.map((function(e){return(0,d.jsx)(s.Z,x(x({},e),{},{value:u[e.name],onChange:N}),e.id)}))]})}),(0,d.jsxs)("div",{className:f()([p()["item-container"],p().box]),children:[(0,d.jsx)("div",{className:p()["item-preview"],style:{transform:_,width:"300px",minHeight:"300px",maxHeight:"300px"},children:"Transform css generator"}),(0,d.jsxs)("div",{className:p()["item-code"],children:[(0,d.jsx)("textarea",{placeholder:"css generator",rows:"5",cols:"20",ref:n}),(0,d.jsx)("div",{className:p()["item-action"],children:(0,d.jsx)(o.h,{text:b,onCopy:function(e){},children:(0,d.jsx)("button",{className:"p-2",children:"Copy"})})})]})]})]}),(0,d.jsx)("footer",{className:p().footer,children:(0,d.jsx)("div",{className:f()([p().container,"container"]),children:(0,d.jsx)("p",{children:"A Transform CSS generator that helps you quickly generate transform CSS declarations for your website, including Rotate, Scale, Skew and Translate transformations. It comes with many options and it demonstrates instantly. "})})})]})}},7788:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/generator/css/transform-css-generator",function(){return t(6913)}])},3858:function(e){e.exports={formInput:"formInput_formInput__C59Bd",formInput__error:"formInput_formInput__error__bsjYY",formInputpn:"formInput_formInputpn__oz3L6",flexWrap:"formInput_flexWrap__mUYmb",currentValue:"formInput_currentValue__TBzNq",inputCol:"formInput_inputCol__7NnBa",formInputGrouppn:"formInput_formInputGrouppn__e8psX",formInputAddon:"formInput_formInputAddon__KfykE",formButtonPlus:"formInput_formButtonPlus__qRlU9"}},7448:function(e){e.exports={container:"css_container__hsn3T","item-container":"css_item-container___EXFJ",box:"css_box__ts0wC","item-preview":"css_item-preview__R_gDc","item-code":"css_item-code__0Rlg4","item-action":"css_item-action__QcZnG","list-options":"css_list-options__mkVOa","item-option":"css_item-option__RGMLv","text-helper":"css_text-helper__MXVxT",footer:"css_footer__KkwUG",header:"css_header__oReCN","link-back":"css_link-back__gjnex"}},4730:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}t.d(n,{Z:function(){return r}})}},function(e){e.O(0,[285,774,888,179],(function(){return n=7788,e(e.s=n);var n}));var n=e.O();_N_E=n}]);