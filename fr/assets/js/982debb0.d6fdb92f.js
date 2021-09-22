(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2749],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1478:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:5},c="Compatibility",l={unversionedId:"COMPATIBILITY",id:"version-0.14/COMPATIBILITY",isDocsHomePage:!1,title:"Compatibility",description:"Wasm VM can support one or more contract-VM interface versions. The interface",source:"@site/docs_versioned_docs/version-0.14/05-COMPATIBILITY.md",sourceDirName:".",slug:"/COMPATIBILITY",permalink:"/fr/docs/0.14/COMPATIBILITY",editUrl:"https://github.com/InterWasm/docs/edit/main/docs_versioned_docs/version-0.14/05-COMPATIBILITY.md",tags:[],version:"0.14",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"version-0.14/docsSidebar",previous:{title:"CW20 ICS20",permalink:"/fr/docs/0.14/ibc/cw20-ics20"},next:{title:"Migrating Contracts",permalink:"/fr/docs/0.14/MIGRATING"}},m=[],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compatibility"},"Compatibility"),(0,o.kt)("p",null,"Wasm VM can support one or more contract-VM interface versions. The interface\nversion is communicated by the contract via a Wasm export. This is the current\ncompatibility list:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"cosmwasm-std"),(0,o.kt)("th",{parentName:"tr",align:null},"cosmwasm-vm"),(0,o.kt)("th",{parentName:"tr",align:null},"x/wasm"),(0,o.kt)("th",{parentName:"tr",align:null},"@cosmjs/cosmwasm-stargate"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.15"),(0,o.kt)("td",{parentName:"tr",align:null},"0.15"),(0,o.kt)("td",{parentName:"tr",align:null},"0.18"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.25.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"0.14"),(0,o.kt)("td",{parentName:"tr",align:null},"0.16-0.17"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.25.0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0.13"),(0,o.kt)("td",{parentName:"tr",align:null},"0.13"),(0,o.kt)("td",{parentName:"tr",align:null},"0.16"),(0,o.kt)("td",{parentName:"tr",align:null},"^0.24.0")))),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-std")," version defines which contracts are compatible with this system. The wasm code uploaded must\nhave been compiled with one of the supported ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-std"),' versions, or will be rejeted upon upload (with some error\nmessage about "contract too old?" or "contract too new?"). ',(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-vm")," version defines the runtime used. It is a\nbreaking change to switch runtimes (you will need to organize a chain upgrade). As of ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmwasm-vm 0.13")," we are\nusing ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasmerio/wasmer/"},"wasmer")," 1.0, which is significantly more performant than the older versions.\n",(0,o.kt)("inlineCode",{parentName:"p"},"@cosmjs/cosmwasm-stargate")," follows the compatible ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," version."))}u.isMDXComponent=!0}}]);