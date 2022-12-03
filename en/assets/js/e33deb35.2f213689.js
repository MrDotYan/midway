"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[11873],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),m=i,y=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(y,r(r({ref:n},c),{},{components:t})):a.createElement(y,r({ref:n},c))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},98029:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={},r="Express application migration",l={unversionedId:"serverless/migrate_express",id:"serverless/migrate_express",title:"Express application migration",description:"Midway Serverless provides a general application migration scheme, which can publish the original application to the function platform without modifying the code as much as possible. With this solution, you can migrate the original express applications to the function platform for hosting as quickly and simply as possible, and enjoy the flexible dividends of the cloud-native era.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/serverless/migrate_express.md",sourceDirName:"serverless",slug:"/serverless/migrate_express",permalink:"/en/docs/serverless/migrate_express",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/migrate_express.md",tags:[],version:"current",frontMatter:{},sidebar:"serverless",previous:{title:"Koa application migration",permalink:"/en/docs/serverless/migrate_koa"},next:{title:"Egg application migration",permalink:"/en/docs/serverless/migrate_egg"}},p={},s=[{value:"Add function configuration",id:"add-function-configuration",level:2},{value:"Code modification",id:"code-modification",level:2},{value:"Static resources",id:"static-resources",level:2},{value:"Deployment",id:"deployment",level:2},{value:"Default",id:"default",level:2},{value:"ariyun",id:"ariyun",level:3},{value:"Tencent cloud",id:"tencent-cloud",level:3},{value:"Modify the name of the deployed function",id:"modify-the-name-of-the-deployed-function",level:3}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"express-application-migration"},"Express application migration"),(0,i.kt)("p",null,"Midway Serverless provides a general application migration scheme, which can publish the original application to the function platform without modifying the code as much as possible. With this solution, you can migrate the original express applications to the function platform for hosting as quickly and simply as possible, and enjoy the flexible dividends of the cloud-native era."),(0,i.kt)("h2",{id:"add-function-configuration"},"Add function configuration"),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," file to the root directory of the code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-express-demo ## Application Name Published to Cloud Platform\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: express ## the type of application deployed\n  version: 3.0.0\n\npackage:\n  exclude:\n    -package-lock.json ## Ignore package-lock.json files\n\ncustom:\n  customDomain:\n    domainName: auto ## automatically generates domain name\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Sometimes package-lock.json files will cause the deployment package to be too large (enter dev dependencies).")),(0,i.kt)("h2",{id:"code-modification"},"Code modification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"The default app needs to be exported"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"The current file name of the project file must be ",(0,i.kt)("inlineCode",{parentName:"li"},"app.js"),"."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," is a reserved file. Do not include this file in the project.")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// app.js\n\nconst express = require('express');\nconst app = express();\n\n// * * * * *\n\n// Comment on the original listening\n// app.listen(3000);\n\n// Export the default app\nmodule.exports = app;\n")),(0,i.kt)("p",null,"If there is asynchronous initialization, such as connecting to a database, we provide asynchronous support."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"// app.js\n\nconst express = require('express');\nconst app = new express();\n\n// * * * * *\n\n// Comment on the original listening\n// app.listen(3000);\n\n// Export the default app\nmodule.exports = async () => {\n  // do some async method, like db connect\n  return app;\n};\n")),(0,i.kt)("h2",{id:"static-resources"},"Static resources"),(0,i.kt)("p",null,"If you want to build a copied directory in the root directory of the project, such as the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," directory of static files, configure the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.include")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-express-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: express ## the type of application deployed\n  version: 3.0.0\n\npackage:\n  include:\n    - public                 ## Written here will be automatically packaged\n  exclude:\n    -package-lock.json ## Ignore package-lock.json files\n")),(0,i.kt)("h2",{id:"deployment"},"Deployment"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," configuration Scripts script and dev dependency ",(0,i.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli"),", execute ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run deploy"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "devDependencies": {\n    "@midwayjs/cli": "^1.2.36"\n    ...\n  },\n  "scripts": {\n    "deploy": "midway-bin deploy ",\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"Or use a different npm package to accelerate."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'{\n  "scripts": {\n    "deploy": "midway-bin deploy --npm=cnpm ",\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"You can also execute commands separately."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$npx midway-bin deploy ## deploy by npm\n$npx midway-bin deploy --npm=cnpm ## deploy by cnpm\n")),(0,i.kt)("h2",{id:"default"},"Default"),(0,i.kt)("h3",{id:"ariyun"},"ariyun"),(0,i.kt)("p",null,"By default, it is published as an http trigger. If you need an API gateway, you can modify and configure the functions structure according to the format of f.yml. At the same time, you need to configure routes on the platform."),(0,i.kt)("h3",{id:"tencent-cloud"},"Tencent cloud"),(0,i.kt)("p",null,"By default, it is published as an API gateway trigger and the gateway route is automatically configured."),(0,i.kt)("h3",{id:"modify-the-name-of-the-deployed-function"},"Modify the name of the deployed function"),(0,i.kt)("p",null,"You can use the name field."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service: my-express-demo\n\nprovider:\n  name: aliyun ## cloud platform, aliyun,tencent, etc\n\ndeployType:\n  type: express\n  version: 3.0.0\n  Name: app_idx ## function name\n")))}d.isMDXComponent=!0}}]);