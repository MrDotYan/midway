"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45172],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[m]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},l="Common npm problems",p={unversionedId:"faq/npm_problem",id:"faq/npm_problem",title:"Common npm problems",description:"1. Do not want to generate package-lock.json",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/faq/npm_problem.md",sourceDirName:"faq",slug:"/faq/npm_problem",permalink:"/en/docs/faq/npm_problem",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/faq/npm_problem.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"Common git problems",permalink:"/en/docs/faq/git_problem"},next:{title:"Common TS questions",permalink:"/en/docs/faq/ts_problem"}},i={},c=[{value:"1. Do not want to generate package-lock.json",id:"1-do-not-want-to-generate-package-lockjson",level:2},{value:"2. Maximum call stack size exceeded to report an error",id:"2-maximum-call-stack-size-exceeded-to-report-an-error",level:2},{value:"3. Python/Canvas reported an error",id:"3-pythoncanvas-reported-an-error",level:2}],s={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-npm-problems"},"Common npm problems"),(0,a.kt)("h2",{id:"1-do-not-want-to-generate-package-lockjson"},"1. Do not want to generate package-lock.json"),(0,a.kt)("p",null,"In some cases, the lock version is not particularly easy to use, but there will be many strange problems. We will disable npm's function of generating ",(0,a.kt)("inlineCode",{parentName:"p"},"package-lock.json")," files."),(0,a.kt)("p",null,"You can enter the following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm config set package-lock false\n")),(0,a.kt)("h2",{id:"2-maximum-call-stack-size-exceeded-to-report-an-error"},"2. Maximum call stack size exceeded to report an error"),(0,a.kt)("p",null,"Generally, after npm install, npm install a package."),(0,a.kt)("p",null,"Solution:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Delete node_modules"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:2},(0,a.kt)("li",{parentName:"ol"},"Delete package-lock.json"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ol",{parentName:"li",start:3},(0,a.kt)("li",{parentName:"ol"},"Re-npm install")))),(0,a.kt)("p",null,"If there are still problems, you can try to try again using node v14/npm6."),(0,a.kt)("h2",{id:"3-pythoncanvas-reported-an-error"},"3. Python/Canvas reported an error"),(0,a.kt)("p",null,"Appears when installing jest module using node v15/npm7."),(0,a.kt)("p",null,"For example:\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01fctCcQ2191p8aMfDd_!!6000000006941-2-tps-1623-295.png",alt:"image.png"})),(0,a.kt)("p",null,"Solution: Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"--legacy-peer-deps")," parameter to npm I."),(0,a.kt)("p",null,"Reason: The test framework Jest relies on jsdom,npm7 will automatically install the canvas package that its peerDependencies depends on, and the installation and compilation of canvas requires a python3 environment."))}m.isMDXComponent=!0}}]);