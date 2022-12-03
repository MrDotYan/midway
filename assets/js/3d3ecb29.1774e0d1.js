"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=o(n),u=r,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:r,l[1]=p;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={title:"\u5feb\u901f\u4e0a\u624b"},l=void 0,p={unversionedId:"quickstart",id:"version-1.0.0/quickstart",title:"\u5feb\u901f\u4e0a\u624b",description:"\u5b89\u88c5 Node \u73af\u5883",source:"@site/versioned_docs/version-1.0.0/quickstart.md",sourceDirName:".",slug:"/quickstart",permalink:"/docs/1.0.0/quickstart",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-1.0.0/quickstart.md",tags:[],version:"1.0.0",frontMatter:{title:"\u5feb\u901f\u4e0a\u624b"},sidebar:"common",previous:{title:"\u57fa\u7840\u4ecb\u7ecd",permalink:"/docs/1.0.0/intro"},next:{title:"TS \u65b0\u624b\u6307\u5357",permalink:"/docs/1.0.0/ts_guide"}},s={},o=[{value:"\u5b89\u88c5 Node \u73af\u5883",id:"\u5b89\u88c5-node-\u73af\u5883",level:3},{value:"\u521b\u5efa\u65b0\u5e94\u7528",id:"\u521b\u5efa\u65b0\u5e94\u7528",level:3},{value:"\u4e86\u89e3\u76ee\u5f55\u7ed3\u6784",id:"\u4e86\u89e3\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u5feb\u901f\u5f00\u53d1\u5f15\u5bfc",id:"\u5feb\u901f\u5f00\u53d1\u5f15\u5bfc",level:2},{value:"\u548c Egg \u4f53\u7cfb\u76f8\u540c\u7684\u90e8\u5206",id:"\u548c-egg-\u4f53\u7cfb\u76f8\u540c\u7684\u90e8\u5206",level:2},{value:"\u8fd0\u884c\u73af\u5883",id:"\u8fd0\u884c\u73af\u5883",level:3},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"Web \u4e2d\u95f4\u4ef6",id:"web-\u4e2d\u95f4\u4ef6",level:3},{value:"Router \u8def\u7531",id:"router-\u8def\u7531",level:3},{value:"\u6846\u67b6\u6269\u5c55",id:"\u6846\u67b6\u6269\u5c55",level:3},{value:"\u542f\u52a8\u81ea\u5b9a\u4e49",id:"\u542f\u52a8\u81ea\u5b9a\u4e49",level:3}],c={toc:o};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"\u5b89\u88c5-node-\u73af\u5883"},"\u5b89\u88c5 Node \u73af\u5883"),(0,r.kt)("p",null,"\u53ef\u4ee5\u8bbf\u95ee Node.js \u5b98\u7f51\u6216\u8005\u4f7f\u7528 nvm \u7b49\u7c7b\u4f3c\u4ea7\u54c1\uff0c\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,r.kt)("h3",{id:"\u521b\u5efa\u65b0\u5e94\u7528"},"\u521b\u5efa\u65b0\u5e94\u7528"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/midway-init"},"midway-init")," \u5de5\u5177\u81ea\u52a8\u521b\u5efa midway \u5e94\u7528\u7684\u76ee\u5f55\u7ed3\u6784:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i midway-init -g\n$ midway-init\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u751f\u6210\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm scripts")," \u6765\u9a71\u52a8\u542f\u52a8\u547d\u4ee4:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install\n$ npm run dev\n")),(0,r.kt)("h3",{id:"\u4e86\u89e3\u76ee\u5f55\u7ed3\u6784"},"\u4e86\u89e3\u76ee\u5f55\u7ed3\u6784"),(0,r.kt)("p",null,"midway \u7684\u76ee\u5f55\u548c eggjs \u76ee\u5f55\u975e\u5e38\u63a5\u8fd1\uff0c\u4f46\u4e5f\u6709\u6240\u533a\u522b\uff0c\u4e0d\u540c\u7684\u5730\u65b9\u5728\u4e8e\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ts \u6e90\u7801\u5b58\u653e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"/src")," \u76ee\u5f55\u4e0b\uff0c\u7f16\u8bd1\u540e\u4ee3\u7801\u5b58\u653e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"li"},"/dist")," \u4e0b"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u5f80\u7684 app \u7b49\u90fd\u8fc1\u79fb\u81f3 ",(0,r.kt)("inlineCode",{parentName:"li"},"/src/app")," \u4e0b\uff0c\u4f5c\u4e3a web \u5c42"),(0,r.kt)("li",{parentName:"ul"},"\u4f20\u7edf\u7684\u4e1a\u52a1\u903b\u8f91\u7b49\uff0c\u79fb\u52a8\u5230\u5176\u4ed6\u76ee\u5f55\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"/service"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c  midway6-test tree -I node_modules\n.\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 README.zh-CN.md\n\u251c\u2500\u2500 dist                                ---- \u7f16\u8bd1\u540e\u76ee\u5f55\n\u251c\u2500\u2500 logs                                ---- \u672c\u5730\u65e5\u5fd7\u76ee\u5f55\n\u2502\xa0\xa0 \u2514\u2500\u2500 midway6-test                    ---- \u65e5\u5fd7\u5e94\u7528\u540d\u5f00\u5934\n\u2502\xa0\xa0     \u251c\u2500\u2500 common-error.log            ---- \u9519\u8bef\u65e5\u5fd7\n\u2502\xa0\xa0     \u251c\u2500\u2500 midway-agent.log            ---- agent \u8f93\u51fa\u7684\u65e5\u5fd7\n\u2502\xa0\xa0     \u251c\u2500\u2500 midway-core.log             ---- \u6846\u67b6\u8f93\u51fa\u7684\u65e5\u5fd7\n\u2502\xa0\xa0     \u251c\u2500\u2500 midway-web.log              ---- koa \u8f93\u51fa\u7684\u65e5\u5fd7\n\u2502\xa0\xa0     \u2514\u2500\u2500 midway6-test-web.log\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src                                 ---- \u6e90\u7801\u76ee\u5f55\n\u2502\xa0\xa0 \u251c\u2500\u2500 app                             ---- web \u5c42\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 controller                  ---- web \u5c42 controller \u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 home.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 user.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 middleware (\u53ef\u9009)            ---- web \u5c42\u4e2d\u95f4\u4ef6\u76ee\u5f55\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 trace.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 public (\u53ef\u9009)                ---- web \u5c42\u9759\u6001\u6587\u4ef6\u76ee\u5f55\uff0c\u53ef\u4ee5\u914d\u7f6e\n\u2502   \u2502   \u251c\u2500\u2500 view (\u53ef\u9009)\n\u2502   \u2502   |   \u2514\u2500\u2500 home.tpl                ---- web \u5c42\u6a21\u677f\n\u2502\xa0\xa0 \u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config.default.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config.local.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config.prod.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 config.unittest.ts\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 plugin.ts\n\u2502\xa0\xa0 \u2514\u2500\u2500 service                         ---- \u4e1a\u52a1\u903b\u8f91\u5c42\u76ee\u5f55\uff0c\u81ea\u7531\u5b9a\u4e49\n\u2502\xa0\xa0 \u2502 \xa0 \u2514\u2500\u2500 user.ts                     ---- \u4e1a\u52a1\u903b\u8f91\u5c42\uff0c\u81ea\u7531\u5b9a\u4e49\n\u2502\xa0\xa0 \u251c\u2500\u2500 interface.ts                    ---- \u63a5\u53e3\u5b9a\u4e49\u6587\u4ef6\uff0c\u81ea\u7531\u5b9a\u4e49\n\u2502\xa0\xa0 \u251c\u2500\u2500 app.ts                          ---- \u5e94\u7528\u6269\u5c55\u6587\u4ef6\uff0c\u53ef\u9009\n\u2502\xa0\xa0 \u2514\u2500\u2500 agent.ts                        ---- agent \u6269\u5c55\u6587\u4ef6\uff0c\u53ef\u9009\n\u251c\u2500\u2500 test\n\u2502\xa0\xa0 \u2514\u2500\u2500 app\n\u2502\xa0\xa0     \u2514\u2500\u2500 controller\n\u2502\xa0\xa0         \u2514\u2500\u2500 home.test.ts\n\u251c\u2500\u2500 tsconfig.json\n\u2514\u2500\u2500 tslint.json\n")),(0,r.kt)("p",null,"\u5982\u4e0a\uff0c\u7531\u6846\u67b6\u7ea6\u5b9a\u7684\u76ee\u5f55\uff0cMidway \u4f7f\u7528 EggJs \u4f5c\u4e3a Web \u5c42\u5bb9\u5668\uff0c\u627f\u8f7d\u8bf7\u6c42\u63a7\u5236\u5668\u548c\u4f20\u7edf MVC \u5c42\u7684\u5de5\u4f5c\uff0c\u8fd9\u4e00\u5757\u7531\u4e8e\u53d7\u5230\u9650\u5236\uff0c\u6709\u7740\u4e00\u5b9a\u7684\u76ee\u5f55\u7ea6\u5b9a\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app/router.ts")," \u53ef\u9009\uff0c\u7528\u4e8e\u914d\u7f6e URL \u8def\u7531\u89c4\u5219\uff0c\u5177\u4f53\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/basics/router.html"},"Router"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app/controller/**")," \u7528\u4e8e\u89e3\u6790\u7528\u6237\u7684\u8f93\u5165\uff0c\u5904\u7406\u540e\u8fd4\u56de\u76f8\u5e94\u7684\u7ed3\u679c\uff0c\u5177\u4f53\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"hController"},"Controller"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app/middleware/**")," \u53ef\u9009\uff0c\u7528\u4e8e\u7f16\u5199\u4e2d\u95f4\u4ef6\uff0c\u5177\u4f53\u53c2\u89c1 ",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/basics/middleware.html"},"Middleware"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app/extend/**")," \u53ef\u9009\uff0c\u7528\u4e8e\u6846\u67b6\u7684\u6269\u5c55\uff0c\u5177\u4f53\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/basics/extend.html"},"\u6846\u67b6\u6269\u5c55"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/config/config.{env}.ts")," \u7528\u4e8e\u7f16\u5199\u914d\u7f6e\u6587\u4ef6\uff0c\u5177\u4f53\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/basics/config.html"},"\u914d\u7f6e"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/config/plugin.ts")," \u7528\u4e8e\u914d\u7f6e\u9700\u8981\u52a0\u8f7d\u7684\u63d2\u4ef6\uff0c\u5177\u4f53\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/basics/plugin.html"},"\u63d2\u4ef6"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"test/**")," \u7528\u4e8e\u5355\u5143\u6d4b\u8bd5\uff0c\u5177\u4f53\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/core/unittest.html"},"\u5355\u5143\u6d4b\u8bd5"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app.ts")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"agent.ts")," \u7528\u4e8e\u81ea\u5b9a\u4e49\u542f\u52a8\u65f6\u7684\u521d\u59cb\u5316\u5de5\u4f5c\uff0c\u53ef\u9009\uff0c\u5177\u4f53\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/basics/app-start.html"},"\u542f\u52a8\u81ea\u5b9a\u4e49"),"\u3002\u5173\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"agent.js"),"\u7684\u4f5c\u7528\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/core/cluster-and-ipc.html#agent-%E6%9C%BA%E5%88%B6"},"Agent \u673a\u5236"),"\u3002")),(0,r.kt)("p",null,"\u800c\u5176\u4ed6\u7531\u4e8e Egg \u63d2\u4ef6\u7684\u9650\u5236\uff0c\u53ef\u80fd\u6709\u4e9b\u76ee\u5f55\u4e5f\u4f1a\u6709\u76f8\u5e94\u7684\u7ea6\u5b9a\uff0c\u6bd4\u5982\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app/public/**")," \u7528\u4e8e\u653e\u7f6e\u9759\u6001\u8d44\u6e90\uff0c\u53ef\u9009\uff0c\u5177\u4f53\u53c2\u89c1\u5185\u7f6e\u63d2\u4ef6 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/eggjs/egg-static"},"egg-static"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/app/view/**")," \u7528\u4e8e\u653e\u7f6e\u6a21\u677f\u6587\u4ef6\uff0c\u53ef\u9009\uff0c\u7531\u6a21\u677f\u63d2\u4ef6\u7ea6\u5b9a\uff0c\u5177\u4f53\u53c2\u89c1",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/core/view.html"},"\u6a21\u677f\u6e32\u67d3"),"\u3002")),(0,r.kt)("p",null,"\u6211\u4eec\u4f1a\u53d1\u73b0\u5e38\u89c1\u7684\u4ee3\u7801\u90fd\u4f1a\u5b58\u653e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"/src")," \u76ee\u5f55\u4e0b\uff0c\u7531\u4e8e ts \u7684\u7279\u6b8a\u6027\uff0c\u5728\u670d\u52a1\u5668\u4e0a\u4f1a\u901a\u8fc7\u6253\u5305\u6784\u5efa\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.js")," \u6587\u4ef6\u5b58\u653e\u4e8e ",(0,r.kt)("inlineCode",{parentName:"p"},"/dist")," \u76ee\u5f55\u3002\u5c06\u6e90\u6587\u4ef6\u548c\u7f16\u8bd1\u540e\u6587\u4ef6\u5206\u5f00\u662f\u6211\u4eec\u6700\u5f00\u59cb\u7684\u521d\u8877\u3002"),(0,r.kt)("p",null,"\u800c\u9664\u4e86 app \u76ee\u5f55\u4ee5\u5916\u7684\u5176\u4ed6\u76ee\u5f55\uff0c\u5728 midway \u4f53\u7cfb\u4e0b\u5e76\u6ca1\u6709\u4e25\u683c\u7684\u89c4\u5b9a\uff0c\u5927\u4f53\u53ef\u4ee5\u6309\u7167\u903b\u8f91\u5206\u5c42\uff0c\u6bd4\u5982\u6309\u7167\u4f20\u7edf\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"web, biz, service, manager, dao")," \u7b49\u8fdb\u884c\u5206\u5c42\u8fdb\u884c\u521b\u5efa\u76ee\u5f55\u5c31\u975e\u5e38\u4e0d\u9519\u3002"),(0,r.kt)("p",null,"::: tip\n\u7531\u4e8e Midway \u91c7\u7528\u4e86\u81ea\u52a8\u626b\u63cf\u88c5\u914d\uff0c\u4f9d\u8d56\u6ce8\u5165\u7b49\u7279\u6027\uff0c\u65e0\u9700\u5728\u7279\u5b9a\u7684\u76ee\u5f55\u4e0b\u53d7\u5230\u9650\u5236\uff0c\u4f7f\u5f97\u5728\u5168\u6808\u5e94\u7528\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u4fdd\u6301\u4e86\u4e0d\u9519\u7684\u5f00\u53d1\u4f53\u9a8c\u3002\n:::"),(0,r.kt)("h2",{id:"\u5feb\u901f\u5f00\u53d1\u5f15\u5bfc"},"\u5feb\u901f\u5f00\u53d1\u5f15\u5bfc"),(0,r.kt)("p",null,"\u60f3\u8981\u5feb\u901f\u4e0a\u624b midway\uff0c\u9664\u4e86\u9700\u8981\u4e86\u89e3\u4e00\u4e9b\u57fa\u7840\u7684\u4e1c\u897f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u867d\u7136\u53ef\u4ee5\u76f4\u63a5\u7528 js \u7684\u8bed\u6cd5\u4e66\u5199\uff0c\u4f46\u662f\u4f60\u6700\u597d\u4e86\u89e3 TypeScript\uff0c\u8fd9\u91cc\u6709\u4e2a ",(0,r.kt)("a",{parentName:"li",href:"ts_start.md"},"\u5feb\u901f\u4ecb\u7ecd"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u4f7f\u7528\u9762\u5411\u5bf9\u8c61\u7684\u601d\u60f3\u6765\u7f16\u7801\uff0c\u5b83\u7684\u7ecf\u4e45\u4e0d\u8870\u662f\u6709\u9053\u7406\u7684\uff0c\u4f7f\u7528 class \u673a\u5236\u80fd\u591f\u65b9\u4fbf\u7684\u878d\u5165\u6211\u4eec\u7684\u65b0\u7279\u6027\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4e86\u89e3 midway \u7684\u4f9d\u8d56\u6ce8\u5165\u4f53\u7cfb\uff0c\u4ee5\u53ca\u5e38\u7528\u7684\u88c5\u9970\u5668\uff0c\u8fd9\u91cc\u505a\u4e86 ",(0,r.kt)("a",{parentName:"li",href:"ioc.md"},"\u4f9d\u8d56\u6ce8\u5165\u7684\u4ecb\u7ecd"),"\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5728 midway \u7684\u6587\u6863\u4e2d\u6ca1\u6709\u627e\u5230\u4f60\u60f3\u8981\u7684\u4e1c\u897f\uff0c\u8bb0\u4f4f\u53ef\u4ee5\u53bb ",(0,r.kt)("a",{parentName:"li",href:"https://eggjs.org/zh-cn/intro/"},"Egg \u7684\u6587\u6863\u627e\u627e"),"\uff0c\u6216\u8005 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/midwayjs/midway/issues"},"\u5411\u6211\u4eec\u63d0 Issue"),"\u3002")),(0,r.kt)("h2",{id:"\u548c-egg-\u4f53\u7cfb\u76f8\u540c\u7684\u90e8\u5206"},"\u548c Egg \u4f53\u7cfb\u76f8\u540c\u7684\u90e8\u5206"),(0,r.kt)("p",null,"\u8fd9\u90e8\u5206\u7684\u5185\u5bb9\u548c Egg \u4f53\u7cfb\u57fa\u672c\u662f\u76f8\u540c\u7684\uff0c\u5927\u4f53\u4e0d\u540c\u7684\u662f\u540e\u7f00\u7684\u533a\u522b ",(0,r.kt)("inlineCode",{parentName:"p"},"*.ts"),"\uff0c\u4ee5\u53ca\u6839\u76ee\u5f55\uff08midway \u7684\u6839\u76ee\u5f55\u5728 src)\u3002"),(0,r.kt)("h3",{id:"\u8fd0\u884c\u73af\u5883"},"\u8fd0\u884c\u73af\u5883"),(0,r.kt)("p",null,"\u76ee\u524d\u6ca1\u6709\u505a\u7279\u6b8a\u5904\u7406\uff0c\u5b8c\u5168\u4e00\u6837\uff0c\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/env.html"},"\u8fd0\u884c\u73af\u5883\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,r.kt)("p",null,"\u6846\u67b6\u652f\u6301\u6839\u636e\u73af\u5883\u6765\u52a0\u8f7d\u914d\u7f6e\uff0c\u5b9a\u4e49\u591a\u4e2a\u73af\u5883\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u552f\u4e00\u4e0d\u540c\u7684\u662f\u540e\u7f00\u7684\u533a\u522b\uff0c\u5177\u4f53\u73af\u5883\u8bf7\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/env.html"},"\u8fd0\u884c\u73af\u5883\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"src/config\n|- config.default.ts\n|- config.prod.ts\n|- config.unittest.ts\n`- config.local.ts\n")),(0,r.kt)("h3",{id:"web-\u4e2d\u95f4\u4ef6"},"Web \u4e2d\u95f4\u4ef6"),(0,r.kt)("p",null,"\u9664\u4e86\u76ee\u5f55\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/middleware")," \u4ee5\u53ca\u540e\u7f00\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"*.ts")," \uff0c\u5176\u4f59\u5b8c\u5168\u4e00\u6837\uff0c\u67e5\u770b",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/middleware.html"},"\u4e2d\u95f4\u4ef6\u6587\u6863"),"\u3002"),(0,r.kt)("h3",{id:"router-\u8def\u7531"},"Router \u8def\u7531"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"src/app/router.ts")," \u6587\u4ef6\u4f9d\u65e7\u53ef\u7528\uff0c\u63a8\u8350\u4f7f\u7528 midway \u4f53\u7cfb\u7684 ",(0,r.kt)("a",{parentName:"p",href:"#%E8%B7%AF%E7%94%B1%E8%A3%85%E9%A5%B0%E5%99%A8"},"\u8def\u7531\u88c5\u9970\u5668"),"\uff0cegg \u7684\u8def\u7531\u6587\u6863\u5728",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/router.html"},"\u8fd9\u91cc"),"\u3002"),(0,r.kt)("h3",{id:"\u6846\u67b6\u6269\u5c55"},"\u6846\u67b6\u6269\u5c55"),(0,r.kt)("p",null,"\u9488\u5bf9\u6846\u67b6\u81ea\u8eab\u7684\u6269\u5c55\u70b9\uff0c\u4f9d\u65e7\u4fdd\u7559\u53ef\u7528\uff0c\u76ee\u5f55\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app/*.ts"),"\uff0c\u6587\u6863\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/extend.html"},"\u6846\u67b6\u6269\u5c55"),"\u3002"),(0,r.kt)("h3",{id:"\u542f\u52a8\u81ea\u5b9a\u4e49"},"\u542f\u52a8\u81ea\u5b9a\u4e49"),(0,r.kt)("p",null,"\u542f\u52a8\u81ea\u5b9a\u4e49\u4f9d\u65e7\u4fdd\u7559\u53ef\u7528\uff0c\u76ee\u5f55\u53d8\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.ts"),"\uff0c\u6587\u6863\u67e5\u770b ",(0,r.kt)("a",{parentName:"p",href:"https://eggjs.org/zh-cn/basics/app-start.html"},"\u542f\u52a8\u81ea\u5b9a\u4e49"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"app.ts")," \u4e2d\u8c03\u7528 IoC \u4e2d\u7684\u5bf9\u8c61\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u6cd5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// app.js\nmodule.exports = (app) => {\n  app.beforeStart(async () => {\n    // \u4ece\u5168\u5c40\u4f5c\u7528\u57df\u62ff\u5355\u4f8b\u5bf9\u8c61\n    const obj = await app.applicationContext.getAsync('xxx');\n\n    // \u4ece\u8bf7\u6c42\u4f5c\u7528\u57df\u62ff\u5bf9\u8c61\n    const ctx = app.createAnonymousContext();\n    const obj = await ctx.requestContext.getAsync('xxx');\n  });\n};\n")))}m.isMDXComponent=!0}}]);