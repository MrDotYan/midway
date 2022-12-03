"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),d=o,y=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68064:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={title:"TypeORM Model Generator"},s=void 0,l={unversionedId:"tool/typeorm_generator",id:"version-2.0.0/tool/typeorm_generator",title:"TypeORM Model Generator",description:"\u611f\u8c22\u793e\u533a\u7528\u6237 @youtiao66 \u63d0\u4f9b\u6b64\u6a21\u5757\u3002",source:"@site/versioned_docs/version-2.0.0/tool/typeorm_generator.md",sourceDirName:"tool",slug:"/tool/typeorm_generator",permalink:"/docs/2.0.0/tool/typeorm_generator",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/tool/typeorm_generator.md",tags:[],version:"2.0.0",frontMatter:{title:"TypeORM Model Generator"},sidebar:"other",previous:{title:"\u68c0\u67e5\u5de5\u5177",permalink:"/docs/2.0.0/tool/luckyeye"},next:{title:"midwayjs/egg-ts-helper",permalink:"/docs/2.0.0/tool/egg-ts-helper"}},p={},i=[{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2}],c={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u611f\u8c22\u793e\u533a\u7528\u6237 @youtiao66 \u63d0\u4f9b\u6b64\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7\u8be5\u5de5\u5177\uff0c\u4f60\u53ef\u4ee5\u5feb\u901f\u521b\u5efa for Midway \u7684 TypeORM Model\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u6bd4\u5982\u751f\u6210 mysql \u7684 model\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# \u63a8\u8350\n# \u8bf7\u66ff\u6362\u914d\u7f6e\u4fe1\u606f\n$ npx mdl-gen-midway -h localhost -p 3306 -d yourdbname -u root -x yourpassword -e mysql --noConfig --case-property none\n")),(0,o.kt)("p",null,"\u5b8c\u6574\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Usage: npx mdl-gen-midway -h <host> -d <database> -p [port] -u <user> -x\n[password] -e [engine]\n\nOptions:\n  --help                 Show help                                     [boolean]\n  --version              Show version number                           [boolean]\n  -h, --host             IP address/Hostname for database server\n                                                          [default: "127.0.0.1"]\n  -d, --database         Database name(or path for sqlite)            [required]\n  -u, --user             Username for database server\n  -x, --pass             Password for database server              [default: ""]\n  -p, --port             Port number for database server\n  -e, --engine           Database engine\n          [choices: "mssql", "postgres", "mysql", "mariadb", "oracle", "sqlite"]\n                                                              [default: "mssql"]\n  -o, --output           Where to place generated models\n                            [default: "./output"]\n  -s, --schema           Schema name to create model from. Only for mssql\n                         and postgres. You can pass multiple values\n                         separated by comma eg. -s scheme1,scheme2,scheme3\n  --ssl                                               [boolean] [default: false]\n\n  --noConfig             Doesn\'t create tsconfig.json and\n                         ormconfig.json         [\u5e03\u5c14] [\u9ed8\u8ba4\u503c: false]\n\n  --cp, --case-property  Convert property names to specified case\n                  [\u53ef\u9009\u503c: "pascal", "camel", "snake", "none"] [\u9ed8\u8ba4\u503c: "camel"]\n\n')))}u.isMDXComponent=!0}}]);