"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={},s="typeorm:Model Generator",l={unversionedId:"tool/typeorm_generator",id:"tool/typeorm_generator",title:"typeorm:Model Generator",description:"Thank community user @youtiao66 for providing this module.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tool/typeorm_generator.md",sourceDirName:"tool",slug:"/tool/typeorm_generator",permalink:"/en/docs/tool/typeorm_generator",draft:!1,editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/tool/typeorm_generator.md",tags:[],version:"current",frontMatter:{},sidebar:"other",previous:{title:"Check tool",permalink:"/en/docs/tool/luckyeye"},next:{title:"sequelize-auto-midway",permalink:"/en/docs/tool/sequelize_generator"}},i={},p=[{value:"Use",id:"use",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"typeormmodel-generator"},"typeorm:Model Generator"),(0,o.kt)("p",null,"Thank community user @youtiao66 for providing this module."),(0,o.kt)("p",null,"With this tool, you can quickly create a TypeORM Model for Midway."),(0,o.kt)("h2",{id:"use"},"Use"),(0,o.kt)("p",null,"For example, generate a mysql model."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Recommended\n# Please replace the configuration information\n$npx mdl-gen-midway -h localhost -p 3306 -d yourdbname -u root -x yourpassword -e mysql --noConfig --case-property none\n")),(0,o.kt)("p",null,"Full parameters:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Usage: npx mdl-gen-midway -h <host> -d <database> -p [port] -u <user> -x\n[password] -e [engine]\n\nOptions:\n  --help Show help [boolean]\n  --version Show version number [boolean]\n  -h, --host IP address/Hostname for database server\n                                                          [default: "127.0.0.1"]\n  -d, --database Database name(or path for sqlite) [required]\n  -u, --user Username for database server\n  -x, --pass Password for database server [default: ""]\n  -p, --port Port number for database server\n  -e, --engine Database engine\n          [choices: "mssql", "postgres", "mysql", "mariadb", "oracle", "sqlite"]\n                                                              [default: "mssql"]\n  -o, --output Where to place generated models\n                            [default: "./output"]\n  -s, --schema Schema name to create model from. Only for mssql\n                         and postgres. You can pass multiple values\n                         separated by comma eg. -s scheme1,scheme2,scheme3\n  --ssl [boolean] [default: false]\n\n  --noConfig Doesn\'t create tsconfig.json and\n                         ormconfig.json [Boolean] [Default: false]\n\n  --cp, --case-property Convert property names to specified case\n                  [Optional values: "pascal", "camel", "snake", "none"] [Default value: "camel"]\n\n')))}u.isMDXComponent=!0}}]);