"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75632],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,d=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5062:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={date:"2020-11-03T20:00"},i="v2.3.23",c={permalink:"/changelog/v2.3.23",source:"@site/changelog/source/v2.3.23.md",title:"v2.3.23",description:"Bug Fixes",date:"2020-11-03T20:00:00.000Z",formattedDate:"2020\u5e7411\u67083\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2020-11-03T20:00"},prevItem:{title:"v2.4.0",permalink:"/changelog/v2.4.0"},nextItem:{title:"v2.3.22",permalink:"/changelog/v2.3.22"},listPageLink:"/changelog/page/8"},l={authorsImageUrls:[]},p=[{value:"Bug Fixes",id:"bug-fixes",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"delay loader.load after midway bootstrap init (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/699"},"#699"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/2d12a551707099e0fc7ea188466190e63d02a29a"},"2d12a55"),")"),(0,a.kt)("li",{parentName:"ul"},"trigger lifecycle after egg load (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/701"},"#701"),") (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/4d63e3ae38f9d8492894353b1794f1b571790e9d"},"4d63e3a"),")")))}s.isMDXComponent=!0}}]);