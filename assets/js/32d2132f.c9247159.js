"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(y,l(l({ref:t},c),{},{components:n})):r.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC"},l=void 0,o={unversionedId:"serverless/deploy_to_aliyun",id:"version-2.0.0/serverless/deploy_to_aliyun",title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC",description:"\u914d\u7f6e",source:"@site/versioned_docs/version-2.0.0/serverless/deploy_to_aliyun.md",sourceDirName:"serverless",slug:"/serverless/deploy_to_aliyun",permalink:"/docs/2.0.0/serverless/deploy_to_aliyun",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/deploy_to_aliyun.md",tags:[],version:"2.0.0",frontMatter:{title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC"},sidebar:"Serverless",previous:{title:"MNS \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09",permalink:"/docs/2.0.0/serverless/aliyun_trigger_mns"},next:{title:"\u963f\u91cc\u4e91\u53d1\u5e03 FAQ",permalink:"/docs/2.0.0/serverless/deploy_aliyun_faq"}},s={},p=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"f.yml")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," \u6bb5\u843d\u5904\u786e\u4fdd\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"aliyun")," \u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  name: midway-faas-examples\n\nprovider:\n  name: aliyun\n")),(0,i.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,i.kt)("p",null,"\u90e8\u7f72\u51fd\u6570\uff0c\u76f4\u63a5\u4f7f\u7528\u53d1\u5e03\u547d\u4ee4\u5373\u53ef\u6253\u5305\u5e76\u90e8\u7f72\u51fd\u6570\uff0cDeploy \u547d\u4ee4\u4f1a\u81ea\u52a8\u6253\u5305\uff0c\u5e76\u8c03\u7528\u963f\u91cc\u4e91\u5b98\u65b9\u90e8\u7f72\u5de5\u5177\u53d1\u5e03\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm run deploy\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u5982\u679c\u8f93\u9519\u4e86\u4fe1\u606f\uff0c\u53ef\u4ee5\u91cd\u65b0\u6267\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npx midway-bin deploy --resetConfig")," \u4fee\u6539\u3002")),(0,i.kt)("p",null,"\u963f\u91cc\u4e91\u90e8\u7f72\u9996\u6b21\u9700\u8981\u914d\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"accountId"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"accountKey"),"\u3001",(0,i.kt)("inlineCode",{parentName:"p"},"accountSecret")),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654967-11e1bcbd-5a56-4239-99e1-5a1472ad49fd.png#align=left&display=inline&height=514&margin=%5Bobject%20Object%5D&originHeight=514&originWidth=1152&size=0&status=done&style=none&width=1152",width:"1152"}),(0,i.kt)("p",null,"\u76f8\u5173\u914d\u7f6e\u83b7\u53d6\uff0c\u53ef\u53c2\u7167\u4e0b\u65b9\u56fe\u7247\uff1a"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654949-9c14958c-3aff-403a-b89b-d03a3a95cd18.png#align=left&display=inline&height=696&margin=%5Bobject%20Object%5D&originHeight=696&originWidth=1832&size=0&status=done&style=none&width=1832",width:"1832"}),(0,i.kt)("p",null,"\u70b9\u51fb\u6b64\u5904\u8df3\u8f6c\u963f\u91cc\u4e91",(0,i.kt)("a",{parentName:"p",href:"https://account.console.aliyun.com/#/secure"},"\u5b89\u5168\u8bbe\u7f6e\u9875"),"\u3002"),(0,i.kt)("hr",null),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1585718654950-19a811c5-2cf3-4843-a619-cfd744430fae.png#align=left&display=inline&height=184&margin=%5Bobject%20Object%5D&originHeight=592&originWidth=2406&size=0&status=done&style=none&width=746",width:"746"}),(0,i.kt)("p",null,"\u70b9\u51fb\u8df3\u8f6c\u963f\u91cc\u4e91\u4e2a\u4eba ",(0,i.kt)("a",{parentName:"p",href:"https://usercenter.console.aliyun.com/#/manage/ak"},"AccessKey \u9875\u9762"),"\u3002"),(0,i.kt)("p",null,"\u53d1\u5e03\u540e\uff0c\u963f\u91cc\u4e91\u4f1a\u8f93\u51fa\u4e00\u4e2a\u4e34\u65f6\u53ef\u7528\u7684\u57df\u540d\uff0c\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee\u5373\u53ef\u3002"),(0,i.kt)("img",{src:"https://cdn.nlark.com/yuque/0/2020/png/501408/1600835297676-1753de7a-fb0d-46ca-98f0-944eba5b2f2b.png#align=left&display=inline&height=193&margin=%5Bobject%20Object%5D&name=image.png&originHeight=193&originWidth=1219&size=35152&status=done&style=none&width=1219",width:"1219"}),(0,i.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,i.kt)("p",null,"\u8bf7\u67e5\u8be2 ",(0,i.kt)("a",{parentName:"p",href:"/docs/deploy_aliyun_faq"},"\u963f\u91cc\u4e91\u53d1\u5e03 FAQ"),"\u3002"))}d.isMDXComponent=!0}}]);