"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9516],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>k});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(a),m=o,k=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(k,l(l({ref:t},c),{},{components:a})):n.createElement(k,l({ref:t},c))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},48894:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={},l="Introduction",i={unversionedId:"hooks/intro",id:"hooks/intro",title:"Introduction",description:'Midway Hooks is a functional full stack framework that supports four core features: "Zero" Api & Type Safety & Full Stack Kit & Powerful Backend.',source:"@site/i18n/en/docusaurus-plugin-content-docs/current/hooks/intro.md",sourceDirName:"hooks",slug:"/hooks/intro",permalink:"/en/docs/hooks/intro",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"hooks",next:{title:"API Development",permalink:"/en/docs/hooks/api"}},s={},p=[{value:"Feature introduction",id:"feature-introduction",level:2},{value:"Zero APIs",id:"zero-apis",level:3},{value:"Type Safety and Runtime Safety",id:"type-safety-and-runtime-safety",level:3},{value:"Full stack kit",id:"full-stack-kit",level:3},{value:"Powerful backend",id:"powerful-backend",level:3},{value:"create application",id:"create-application",level:2},{value:"Next step",id:"next-step",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,'Midway Hooks is a functional full stack framework that supports four core features: "Zero" Api & Type Safety & Full Stack Kit & Powerful Backend.'),(0,o.kt)("h2",{id:"feature-introduction"},"Feature introduction"),(0,o.kt)("h3",{id:"zero-apis"},"Zero APIs"),(0,o.kt)("p",null,"The back-end interface functions developed in the Midway Hooks full-stack application can be directly imported and called, without the need for handwritten Ajax glue layers at the front and back ends. Here is a simple example:"),(0,o.kt)("p",null,"Backend code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  APIs,\n  Post,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Post(), // Http Path: /api/say,\n  async (name: string) => {\n    return `Hello ${name}!`;\n  }\n);\n")),(0,o.kt)("p",null,"Front-end call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import say from './api';\n\nconst response = await say('Midway');\nconsole.log(response); // Hello Midway!\n")),(0,o.kt)("h3",{id:"type-safety-and-runtime-safety"},"Type Safety and Runtime Safety"),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"/en/docs/hooks/validate"},"Validate")," validator provided by ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks"),", you can achieve type-safe + runtime-safe links from front-end to back-end. Here is a simple example:"),(0,o.kt)("p",null,"Backend code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  APIs,\n  Post,\n  Validate,\n} from '@midwayjs/hooks';\nimport { z } from 'zod';\n\nexport default Api(\n  Post('/hello'),\n  Validate(z.string(), z.number()),\n  async (name: string, age: number) => {\n    return `Hello ${name}, you are ${age} years old.`;\n  }\n);\n")),(0,o.kt)("p",null,"All-in-one call:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import hello from './api';\n\ntry {\n  await hello(null, null);\n} catch (error) {\n  console.log(error.message); // 'name must be a string'\n  console.log(error.status); // 422\n}\n")),(0,o.kt)("p",null,"throughout the process."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Front-end: Based on type, statically verify input parameters and get type hints"),(0,o.kt)("li",{parentName:"ul"},"Backend: Verify the incoming parameters of the frontend"),(0,o.kt)("li",{parentName:"ul"},"Business logic such as database: use the correct data")),(0,o.kt)("p",null,"In this way, we can achieve static type safety + runtime safety at low cost."),(0,o.kt)("h3",{id:"full-stack-kit"},"Full stack kit"),(0,o.kt)("p",null,"In Midway Hooks, we provide ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks-kit")," to quickly develop full stack applications."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks dev")," to start full-stack applications, ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks build")," to package full-stack applications, and on the server side, you can also use ",(0,o.kt)("inlineCode",{parentName:"p"},"hooks start")," to start the application with one click."),(0,o.kt)("p",null,"Solve your worries when using full-stack applications."),(0,o.kt)("h3",{id:"powerful-backend"},"Powerful backend"),(0,o.kt)("p",null,"Midway Hooks is developed based on Midway."),(0,o.kt)("p",null,"Midway is an 8-year-old Node.js framework with powerful back-end functions, including Cache / Redis / Mongodb / Task / Config and other commonly used components under the Web."),(0,o.kt)("p",null,"And all of this you can enjoy seamlessly when using Midway Hooks."),(0,o.kt)("h2",{id:"create-application"},"create application"),(0,o.kt)("p",null,"Midway Hooks currently provides the following templates:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Full stack application",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/react"},"react")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/vue"},"vue")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/prisma"},"prisma")))),(0,o.kt)("li",{parentName:"ul"},"API Server",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/hooks/blob/main/examples/api"},"api"))))),(0,o.kt)("p",null,"The command to create an application based on the specification is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit https://github.com/midwayjs/hooks/examples/<name>\n")),(0,o.kt)("p",null,"The full stack application command to create a react template is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit https://github.com/midwayjs/hooks/examples/react ./hooks-app\n")),(0,o.kt)("p",null,"The application command to create an api template is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx degit https://github.com/midwayjs/hooks/examples/api ./hooks-app\n")),(0,o.kt)("h2",{id:"next-step"},"Next step"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Learn how to develop interfaces and provide them for front-end calls: ",(0,o.kt)("a",{parentName:"li",href:"/en/docs/hooks/api"},"Interface Development")),(0,o.kt)("li",{parentName:"ul"},"How to use and create reusable Hooks: ",(0,o.kt)("a",{parentName:"li",href:"/en/docs/hooks/builtin-hooks"},"Hooks")),(0,o.kt)("li",{parentName:"ul"},"How to validate user parameters at runtime: ",(0,o.kt)("a",{parentName:"li",href:"/en/docs/hooks/validate"},"validate"))))}u.isMDXComponent=!0}}]);