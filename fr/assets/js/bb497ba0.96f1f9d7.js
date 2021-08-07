(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3103],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7382:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a=["components"],c={sidebar_position:2},s="Blockchain Infrastructure",l={unversionedId:"lesson-1/infra",id:"lesson-1/infra",isDocsHomePage:!1,title:"Blockchain Infrastructure",description:"Blockchain infrastructure is different from traditional systems.",source:"@site/dev-academy/lesson-1/02-infra.md",sourceDirName:"lesson-1",slug:"/lesson-1/infra",permalink:"/fr/dev-academy/lesson-1/infra",editUrl:"https://github.com/CosmWasm/docs/edit/main/dev-academy/lesson-1/02-infra.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devAcademy",previous:{title:"What is Blockchain?",permalink:"/fr/dev-academy/lesson-1/what-is-blockchain"},next:{title:"Basics of Cosmos SDK and CosmWasm",permalink:"/fr/dev-academy/lesson-1/cosmos-sdk-cw"}},u=[],f={toc:u};function p(e){var n=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,c,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"blockchain-infrastructure"},"Blockchain Infrastructure"),(0,i.kt)("p",null,"Blockchain infrastructure is different from traditional systems.\nIn traditional web services it usually follows this: Frontend application interacts with Backend."),(0,i.kt)("p",null,"Blockchain infra is similar to this but has different aspects and components integrated."),(0,i.kt)("p",null,"Here is an illustration for explaining:"),(0,i.kt)("p",null,"Frontend either speaks directly to blockchain network,\nOr interacts with backend which is in connection with blockchain network."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"network",src:t(866).Z})),(0,i.kt)("p",null,"Blockchain network contains nodes which are connected and building blocks, verifies transactions.\nWhole operation rely on the blockchain in the middle, other services are built around that.\nFor example, backend infra can save information to an external database to serve complex queries."))}p.isMDXComponent=!0},866:function(e,n,t){"use strict";n.Z=t.p+"assets/images/network-29e49c1ec142b10fd9c56dc82525efab.jpeg"}}]);