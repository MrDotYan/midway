"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65497],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var m=a.createContext({}),l=function(e){var t=a.useContext(m),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(m,".").concat(f)]||p[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},s),{},{components:r})):a.createElement(d,o({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var m in t)hasOwnProperty.call(t,m)&&(c[m]=t[m]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},54795:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={date:"2021-02-24T20:00"},o="v2.8.0",c={permalink:"/en/changelog/v2.8.0",source:"@site/changelog/source/v2.8.0.md",title:"v2.8.0",description:"Features",date:"2021-02-24T20:00:00.000Z",formattedDate:"February 24, 2021",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2021-02-24T20:00"},prevItem:{title:"v2.8.2",permalink:"/en/changelog/v2.8.2"},nextItem:{title:"v2.7.7",permalink:"/en/changelog/v2.7.7"},listPageLink:"/en/changelog/page/6"},m={authorsImageUrls:[]},l=[{value:"Features",id:"features",level:3}],s={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add router collector and export router table (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/852"},"#852"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/3641ac9c78ed9888525ce0c87415b961d4602fa8"},"3641ac9"),")"),(0,n.kt)("li",{parentName:"ul"},"move context logger to @midwayjs/logger and add createFileL\u2026 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/859"},"#859"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/49f568f372b610494d59fa415f4f241c400c7db0"},"49f568f"),")"),(0,n.kt)("li",{parentName:"ul"},"support gRPC stream API (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/855"},"#855"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/bd51c46a1986d9a0666d6af2a1f053ad74560dcc"},"bd51c46"),")"),(0,n.kt)("li",{parentName:"ul"},"support inject by class (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/832"},"#832"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ba5364fcdf9b83c5f778bb7e18d48b821be8f25b"},"ba5364f"),")"),(0,n.kt)("li",{parentName:"ul"},"support queries decorator (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/858"},"#858"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/ddb080bbba0b24a4c1f826d8552966275f31ebeb"},"ddb080b"),")")))}p.isMDXComponent=!0}}]);