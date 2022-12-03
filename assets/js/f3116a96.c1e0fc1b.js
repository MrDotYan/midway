"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=r,d=u["".concat(p,".").concat(m)]||u[m]||k[m]||a;return n?o.createElement(d,l(l({ref:t},c),{},{components:n})):o.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49743:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=n(87462),r=(n(67294),n(3905));const a={title:"\u63a5\u53e3\u5f00\u53d1 & \u524d\u7aef\u8c03\u7528"},l=void 0,s={unversionedId:"hooks/hooks_api",id:"version-2.0.0/hooks/hooks_api",title:"\u63a5\u53e3\u5f00\u53d1 & \u524d\u7aef\u8c03\u7528",description:"\u201c\u96f6\u201d API \u8c03\u7528",source:"@site/versioned_docs/version-2.0.0/hooks/hooks_api.md",sourceDirName:"hooks",slug:"/hooks/hooks_api",permalink:"/docs/2.0.0/hooks/hooks_api",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/hooks/hooks_api.md",tags:[],version:"2.0.0",frontMatter:{title:"\u63a5\u53e3\u5f00\u53d1 & \u524d\u7aef\u8c03\u7528"},sidebar:"hooks",previous:{title:"\u4ecb\u7ecd",permalink:"/docs/2.0.0/hooks/intro"},next:{title:"Hooks \u8bed\u6cd5",permalink:"/docs/2.0.0/hooks/hooks_syntax"}},p={},i=[{value:"\u201c\u96f6\u201d API \u8c03\u7528",id:"\u96f6-api-\u8c03\u7528",level:2},{value:"\u521b\u5efa\u63a5\u53e3\u4e0e\u8c03\u7528",id:"\u521b\u5efa\u63a5\u53e3\u4e0e\u8c03\u7528",level:2},{value:"Get",id:"get",level:3},{value:"Post",id:"post",level:3},{value:"Put/Delete",id:"putdelete",level:3},{value:"\u89c4\u5219",id:"\u89c4\u5219",level:2}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u96f6-api-\u8c03\u7528"},"\u201c\u96f6\u201d API \u8c03\u7528"),(0,r.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u4f60\u5728\u524d\u7aef\u53ef\u4ee5\u76f4\u63a5\u5bfc\u5165\u670d\u52a1\u7aef\u51fd\u6570\u5e76\u8fdb\u884c\u8c03\u7528\u3002"),(0,r.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4f60\u518d\u4e5f\u4e0d\u7528\u62fc\u63a5 API URL\uff0c\u5728\u524d\u7aef\u624b\u52a8\u53d1\u8d77\u8bf7\u6c42\u5e76\u7ba1\u7406\u72b6\u6001\u7b49\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u540e\u7aef\u63a5\u53e3")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useContext } from '@midwayjs/hooks';\n\nexport async function getPath() {\n  // Get HTTP request context by Hooks\n  const ctx = useContext();\n  return ctx.path;\n}\n\nexport async function post(name: string) {\n  const ctx = useContext();\n\n  return {\n    message: `Hello ${name}!`,\n    method: ctx.method,\n  };\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u524d\u7aef\u8c03\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { getPath, post } from './apis/lambda';\n\n// send GET request to /api/getPath\nconst path = await getPath();\nconsole.assert(path === '/api/getPath');\n\nconst { message, method } = await post('Jake');\n\nconsole.assert(message === 'Hello Jake!');\nconsole.assert(method === 'POST');\n")),(0,r.kt)("p",null,"\u6211\u4eec\u6253\u9020\u4e86\u201c\u96f6\u201d API \u8c03\u7528\u529f\u80fd\uff0c\u4f60\u53ea\u9700\u8981\u5173\u6ce8\u4e8e\u63a5\u53e3\u7684\u8c03\u7528\uff0c\u800c\u975e HTTP \u7684\u7ec6\u8282\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u63a5\u53e3\u4e0e\u8c03\u7528"},"\u521b\u5efa\u63a5\u53e3\u4e0e\u8c03\u7528"),(0,r.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u9ed8\u8ba4\u914d\u7f6e\u7684\u63a5\u53e3\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda")," \u6587\u4ef6\u5939\u4e0b \u4efb\u610f ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," \u6587\u4ef6\u4e2d\u5bfc\u51fa\u7684\u5f02\u6b65\u51fd\u6570\uff0c\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/docs/hooks_route"},"\u8def\u7531\u914d\u7f6e"),"\u6765\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684\u6587\u4ef6\u5939\u3002"),(0,r.kt)("h3",{id:"get"},"Get"),(0,r.kt)("p",null,"\u5bfc\u51fa\u7684\u51fd\u6570\u4e2d\uff0c\u5982\u679c\u4e0d\u5e26\u53c2\u6570\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Get")," \u63a5\u53e3\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/apis/lambda/index.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function foo() {\n  return 'foo';\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u524d\u7aef\u8c03\u7528\u793a\u4f8b(src/app.tsx)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { foo } from './apis/lambda';\n\nconst response = await foo();\nconsole.log(response); // foo\n")),(0,r.kt)("h3",{id:"post"},"Post"),(0,r.kt)("p",null,"\u51fd\u6570\u6709\u53c2\u6570\u5219\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"Post")," \u63a5\u53e3\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"/apis/lambda/index.ts")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function bar(name: string) {\n  return `hello ${name}`;\n}\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u524d\u7aef\u8c03\u7528\u793a\u4f8b(src/app.tsx)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"import { bar } from './apis/lambda';\n\nconst response = await bar('\u5f20\u4e09');\nconsole.log(response); // hello \u5f20\u4e09\n")),(0,r.kt)("h3",{id:"putdelete"},"Put/Delete"),(0,r.kt)("p",null,"Midway Hooks \u7684\u63a5\u53e3\u4fe1\u606f\u4e0e\u524d\u7aef\u8c03\u7528 SDK \u5747\u4e3a\u81ea\u52a8\u751f\u6210\uff0c\u56e0\u6b64\u4e0d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"p"},"Put/Delete")," \u8c03\u7528\u3002"),(0,r.kt)("h2",{id:"\u89c4\u5219"},"\u89c4\u5219"),(0,r.kt)("p",null,"Midway Hooks \u7684\u63a5\u53e3\uff0c\u5fc5\u987b\u662f\u5728\u6a21\u5757\u9876\u5c42\u76f4\u63a5\u5bfc\u51fa\u7684\u51fd\u6570\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4f8b\u5b50")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function demo() {}\n\nexport const demo = async function () {};\n\nexport default async function demo() {}\n")))}u.isMDXComponent=!0}}]);