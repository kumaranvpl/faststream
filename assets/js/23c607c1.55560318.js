"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[9840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(r),k=a,m=f["".concat(l,".").concat(k)]||f[k]||u[k]||o;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},1025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={},s="run_fastkafka_server_process",i={unversionedId:"cli/run_fastkafka_server_process",id:"version-0.7.0/cli/run_fastkafka_server_process",title:"run_fastkafka_server_process",description:"Usage:",source:"@site/versioned_docs/version-0.7.0/cli/run_fastkafka_server_process.md",sourceDirName:"cli",slug:"/cli/run_fastkafka_server_process",permalink:"/docs/0.7.0/cli/run_fastkafka_server_process",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fastkafka",permalink:"/docs/0.7.0/cli/fastkafka"},next:{title:"LICENSE",permalink:"/docs/0.7.0/LICENSE"}},l={},p=[],c={toc:p},f="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"run_fastkafka_server_process"},(0,a.kt)("inlineCode",{parentName:"h1"},"run_fastkafka_server_process")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Usage"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"$ run_fastkafka_server_process [OPTIONS] APP\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APP"),": Input in the form of 'path:app', where ",(0,a.kt)("strong",{parentName:"li"},"path")," is the path to a python file and ",(0,a.kt)("strong",{parentName:"li"},"app")," is an object of type ",(0,a.kt)("strong",{parentName:"li"},"FastKafka"),".  ","[required]")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Options"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--kafka-broker TEXT"),": Kafka broker, one of the keys of the kafka_brokers dictionary passed in the constructor of FastKafka class.  ","[required]"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--install-completion"),": Install completion for the current shell."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--show-completion"),": Show completion for the current shell, to copy it or customize the installation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")))}u.isMDXComponent=!0}}]);