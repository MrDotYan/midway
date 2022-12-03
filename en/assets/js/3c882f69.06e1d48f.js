"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,y=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[d]="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={},s="Serverless functions are deployed as applications",p={unversionedId:"serverless/serverless_to_app",id:"serverless/serverless_to_app",title:"Serverless functions are deployed as applications",description:"Midway Serverless already supports deployment to various Serverless cloud platforms in v1.0 version, such as Aliyun FC, Tencent Cloud SCF, etc. Starting from v2.0 version, existing Serverless functions are supported to be deployed on your private server in application mode.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/serverless_to_app.md",sourceDirName:"serverless",slug:"/serverless/serverless_to_app",permalink:"/en/docs/serverless/serverless_to_app",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/serverless_to_app.md",tags:[],version:"current",frontMatter:{}},i={},l=[{value:"premise",id:"premise",level:2},{value:"Use",id:"use",level:2},{value:"1. Installation application deployment dependency",id:"1-installation-application-deployment-dependency",level:3},{value:"2. Add startup file",id:"2-add-startup-file",level:3},{value:"3. Deploy Applications",id:"3-deploy-applications",level:3}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serverless-functions-are-deployed-as-applications"},"Serverless functions are deployed as applications"),(0,a.kt)("p",null,"Midway Serverless already supports deployment to various Serverless cloud platforms in v1.0 version, such as Aliyun FC, Tencent Cloud SCF, etc. Starting from v2.0 version, existing Serverless functions are supported to be deployed on your private server in application mode."),(0,a.kt)("h2",{id:"premise"},"premise"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/faas")," must be greater than ",(0,a.kt)("inlineCode",{parentName:"p"},"2.8.7"),"."),(0,a.kt)("h2",{id:"use"},"Use"),(0,a.kt)("h3",{id:"1-installation-application-deployment-dependency"},"1. Installation application deployment dependency"),(0,a.kt)("p",null,"Mainly ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/bootstrap")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app")," packages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/bootstrap @midwayjs/serverless-app --save\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/bootstrap")," is used to start the upper layer framework of Midway. ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/serverless-app")," is used to wrap the original function code into actual application running. It is also one of the upper layer Framework of Midway."),(0,a.kt)("h3",{id:"2-add-startup-file"},"2. Add startup file"),(0,a.kt)("p",null,"Add the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootstrap.js")," file to the root directory of the project with the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// bootstrap.js\nconst { Bootstrap } = require('@midwayjs/bootstrap');\nconst { Framework } = require('@midwayjs/serverless-app');\nconst app = new Framework().configure({\n  port: 7001\n});\n\nBootstrap.load(app).run();\n")),(0,a.kt)("h3",{id:"3-deploy-applications"},"3. Deploy Applications"),(0,a.kt)("p",null,"You can add the ",(0,a.kt)("inlineCode",{parentName:"p"},"start")," command to the ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," to facilitate startup."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "NODE_ENV=production node bootstrap.js"\n  }\n}\n')),(0,a.kt)("p",null,"Then, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run start")," command. Also"),(0,a.kt)("p",null,"You can run this command by using a tool such as ",(0,a.kt)("inlineCode",{parentName:"p"},"pm2"),"."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"http:// 127.0.0.1:7001")," after startup."))}d.isMDXComponent=!0}}]);