"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9844],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,d=p["".concat(c,".").concat(u)]||p[u]||f[u]||i;return a?r.createElement(d,o(o({ref:t},l),{},{components:a})):r.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[p]="string"==typeof e?e:n,o[1]=m;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},76658:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={date:"2022-02-13T20:00"},o="v3.0.6",m={permalink:"/changelog/v3.0.6",source:"@site/changelog/source/v3.0.6.md",title:"v3.0.6",description:"Bug Fixes",date:"2022-02-13T20:00:00.000Z",formattedDate:"2022\u5e742\u670813\u65e5",tags:[],hasTruncateMarker:!0,authors:[],frontMatter:{date:"2022-02-13T20:00"},prevItem:{title:"v3.0.7",permalink:"/changelog/v3.0.7"},nextItem:{title:"v3.0.5",permalink:"/changelog/v3.0.5"},listPageLink:"/changelog/page/4"},c={authorsImageUrls:[]},s=[{value:"Bug Fixes",id:"bug-fixes",level:3}],l={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1692"},"#1692")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1696"},"#1696"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/a3ac74ab1152e8762ab6ae7d6bfa513255de4a56"},"a3ac74a"),")"),(0,n.kt)("li",{parentName:"ul"},"add missing dep (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1684"},"#1684"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/fbd02e2097ba0bbd774c012ebad647608b588e28"},"fbd02e2"),")"),(0,n.kt)("li",{parentName:"ul"},"missing import component will be throw error (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1694"},"#1694"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c17f049ef698ba55509e4ef5ea915668345dc50f"},"c17f049"),")"),(0,n.kt)("li",{parentName:"ul"},"not found after no router set. (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1698"},"#1698"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/c7f466f118008bf001c17f1145deba5fbf2a7827"},"c7f466f"),")"),(0,n.kt)("li",{parentName:"ul"},"queue service scope (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1699"},"#1699"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/d2e46e5d4ef8af8016a4153bf132fed32770f06f"},"d2e46e5"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"web:")," check type of variable this.app.middleware (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues/1688"},"#1688"),") (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/commit/f69fb5a59dac41d4457a48a591dc15df8dce36e0"},"f69fb5a"),")")))}p.isMDXComponent=!0}}]);