"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53175],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||i;return r?a.createElement(d,o(o({ref:t},m),{},{components:r})):a.createElement(d,o({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4814:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={date:"2022-04-21T20:00"},o="v3.3.4",c={permalink:"/changelog/v3.3.4",source:"@site/changelog/source/v3.3.4.md",title:"v3.3.4",description:"Bug Fixes",date:"2022-04-21T20:00:00.000Z",formattedDate:"2022\u5e744\u670821\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-04-21T20:00"},prevItem:{title:"v3.3.5",permalink:"/changelog/v3.3.5"},nextItem:{title:"v3.3.3",permalink:"/changelog/v3.3.3"},listPageLink:"/changelog/page/2"},s={authorsImageUrls:[]},l=[{value:"Bug Fixes",id:"bug-fixes",level:3},{value:"Features",id:"features",level:3}],m={toc:l};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"close logger before egg app close (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1928"},"#1928"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d30d21f7b2727a2891ac3810dc8dbcbc5276abd7"},"d30d21f"),")"),(0,n.kt)("li",{parentName:"ul"},"is express method got error result (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1919"},"#1919"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/7ca9359c8421f77f1f410c56730cb8babaf65a8c"},"7ca9359"),")"),(0,n.kt)("li",{parentName:"ul"},"register app before framework init (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1925"},"#1925"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/e2fd7425983e30b5ff61fe27db4215b05d33b778"},"e2fd742"),")"),(0,n.kt)("li",{parentName:"ul"},"typings for app decorator (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1929"},"#1929"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c508458f9f7505185e676330b3668d38701c6137"},"c508458"),")")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"add recommend extension for site (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1922"},"#1922"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/290179ce47c287f2b39599e609a349c14907cccc"},"290179c"),")")))}p.isMDXComponent=!0}}]);