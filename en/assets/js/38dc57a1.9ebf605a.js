"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22669],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return r?o.createElement(h,l(l({ref:t},u),{},{components:r})):o.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<a;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65400:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const a={},l="Server startup failure troubleshooting",i={unversionedId:"ops/ecs_start_err",id:"ops/ecs_start_err",title:"Server startup failure troubleshooting",description:"Application startup failure is a very common phenomenon. Logic errors, compilation errors, configuration errors, and environmental problems may all cause your project to fail to start.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/ops/ecs_start_err.md",sourceDirName:"ops",slug:"/ops/ecs_start_err",permalink:"/en/docs/ops/ecs_start_err",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/ops/ecs_start_err.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"egg:ts-helper",permalink:"/en/docs/tool/egg-ts-helper"},next:{title:"Frequently Asked Framework Issues",permalink:"/en/docs/faq/framework_problem"}},s={},p=[{value:"Quickly locate code problems",id:"quickly-locate-code-problems",level:2},{value:"Possible environmental problems",id:"possible-environmental-problems",level:2},{value:"1. The document is incomplete or not up to date.",id:"1-the-document-is-incomplete-or-not-up-to-date",level:3},{value:"2. The issue of starting the user&#39;s authority",id:"2-the-issue-of-starting-the-users-authority",level:3},{value:"3. Startup Port Conflict",id:"3-startup-port-conflict",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"server-startup-failure-troubleshooting"},"Server startup failure troubleshooting"),(0,n.kt)("p",null,"Application startup failure is a very common phenomenon. Logic errors, compilation errors, configuration errors, and environmental problems may all cause your project to fail to start."),(0,n.kt)("h2",{id:"quickly-locate-code-problems"},"Quickly locate code problems"),(0,n.kt)("p",null,"In most cases, the startup failure we talk about is generally a server environment startup failure. Let's take Linux as an example."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"ps aux | grep node")," to check whether processes exist and whether the number of processes is correct.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ","[project log directory]","(../logger# Configure log root directory), view the contents of the ",(0,n.kt)("inlineCode",{parentName:"p"},"common-error.log")," file, and check the cause based on the latest stack.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Console logs that are started, such as ",(0,n.kt)("inlineCode",{parentName:"p"},"pm2 logs")))),(0,n.kt)("p",null,"Most of the problems will be found in the log. Please make the habit of logging in to the machine to view the log as much as possible. This is a necessary skill for developers."),(0,n.kt)("h2",{id:"possible-environmental-problems"},"Possible environmental problems"),(0,n.kt)("p",null,"In addition to the problems of the code itself, the environment may also bring some problems. These problems are more difficult to find, and are often related to the system, permissions, environment variables, startup parameters, network environment, and even the kernel itself."),(0,n.kt)("p",null,"Here are some possible scenarios."),(0,n.kt)("h3",{id:"1-the-document-is-incomplete-or-not-up-to-date"},"1. The document is incomplete or not up to date."),(0,n.kt)("p",null,"Ensure that your project has performed the following processes before deployment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"npm run dev")," or similar command to start locally and run successfully."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"npm run build")," to compile the ts file into a js file, and generate the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist")," directory in the root directory."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:3},(0,n.kt)("li",{parentName:"ol"},"Use ",(0,n.kt)("inlineCode",{parentName:"li"},"npm run start")," to run the js file locally.")))),(0,n.kt)("p",null,"Check whether the files and directory structure on the server are complete, for example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Whether the ",(0,n.kt)("inlineCode",{parentName:"li"},"node_modules")," directory exists"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"Whether the ",(0,n.kt)("inlineCode",{parentName:"li"},"dist")," directory and the js file in it exist or is the latest.")))),(0,n.kt)("h3",{id:"2-the-issue-of-starting-the-users-authority"},"2. The issue of starting the user's authority"),(0,n.kt)("p",null,"We usually use a regular account, such as an admin account, instead of using sudo to deploy."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Check whether the user has the permission to start node by creating a directory."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"Check whether the server log directory of the project has write permission")))),(0,n.kt)("h3",{id:"3-startup-port-conflict"},"3. Startup Port Conflict"),(0,n.kt)("p",null,"If you start multiple Node.js projects, if you use the same port, you will throw a port reuse error."))}c.isMDXComponent=!0}}]);