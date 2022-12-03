"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58254],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25754:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="\u5168\u6808\u5957\u4ef6",l={unversionedId:"hooks/fullstack",id:"hooks/fullstack",title:"\u5168\u6808\u5957\u4ef6",description:"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 @midwayjs/hooks-kit \u6765\u5feb\u901f\u5f00\u53d1\u5168\u6808\u5e94\u7528\u3002\u76ee\u524d\u6211\u4eec\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u53ef\u76f4\u63a5\u4f7f\u7528\u7684\u6a21\u7248\uff1a",source:"@site/docs/hooks/fullstack.md",sourceDirName:"hooks",slug:"/hooks/fullstack",permalink:"/docs/hooks/fullstack",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/fullstack.md",tags:[],version:"current",frontMatter:{},sidebar:"hooks",previous:{title:"\u6587\u4ef6\u4e0a\u4f20",permalink:"/docs/hooks/upload"},next:{title:"\u524d\u7aef\u8bf7\u6c42\u5ba2\u6237\u7aef",permalink:"/docs/hooks/client"}},s={},p=[{value:"\u547d\u4ee4\u884c\u754c\u9762",id:"\u547d\u4ee4\u884c\u754c\u9762",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5168\u6808\u5957\u4ef6"},"\u5168\u6808\u5957\u4ef6"),(0,o.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-kit")," \u6765\u5feb\u901f\u5f00\u53d1\u5168\u6808\u5e94\u7528\u3002\u76ee\u524d\u6211\u4eec\u63d0\u4f9b\u4e86\u4ee5\u4e0b\u53ef\u76f4\u63a5\u4f7f\u7528\u7684\u6a21\u7248\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/react"},"react")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/vue"},"vue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/prisma"},"prisma"))),(0,o.kt)("h2",{id:"\u547d\u4ee4\u884c\u754c\u9762"},"\u547d\u4ee4\u884c\u754c\u9762"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-kit")," \u7684\u9879\u76ee\u4e2d\uff0c\u53ef\u4ee5\u5728 npm scripts \u4e2d\u4f7f\u7528 hooks \u53ef\u6267\u884c\u6587\u4ef6\uff0c\u6216\u8005\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"npx hooks")," \u8fd0\u884c\u3002\u4e0b\u9762\u662f\u901a\u8fc7\u811a\u624b\u67b6\u521b\u5efa\u7684 Midway \u5168\u6808\u9879\u76ee\u4e2d\u9ed8\u8ba4\u7684 npm scripts\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "dev": "hooks dev", // \u542f\u52a8\u5f00\u53d1\u670d\u52a1\u5668\n    "start": "hooks start", // \u542f\u52a8\u751f\u4ea7\u670d\u52a1\u5668\uff0c\u4f7f\u7528\u524d\u8bf7\u786e\u4fdd\u5df2\u8fd0\u884c `npm run build`\n    "build": "hooks build" // \u4e3a\u751f\u4ea7\u73af\u5883\u6784\u5efa\u4ea7\u7269\n  }\n}\n')),(0,o.kt)("p",null,"\u5728\u4f7f\u7528\u547d\u4ee4\u884c\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u884c\u53c2\u6570\u4f20\u5165\u9009\u9879\uff0c\u5177\u4f53\u9009\u9879\u53ef\u4ee5\u901a\u8fc7 --help \u53c2\u8003\u3002"),(0,o.kt)("p",null,"\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"hooks build --help")),(0,o.kt)("p",null,"\u8f93\u51fa\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Usage:\n  $ hooks build [root]\n\nOptions:\n  --outDir <dir>  [string] output directory (default: dist)\n  --clean         [boolean] clean output directory before build (default: false)\n  -h, --help      Display this message\n")))}u.isMDXComponent=!0}}]);