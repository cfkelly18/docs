(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1256],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2936:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],c={sidebar_position:10},s="Deployment",l={unversionedId:"smart-contracts/components/deployment",id:"smart-contracts/components/deployment",isDocsHomePage:!1,title:"Deployment",description:"When compiling is complete (it may take a while) cd into the artifacts directory. ls should show you binaries for the contract.",source:"@site/docs/04-smart-contracts/02-components/10-deployment.md",sourceDirName:"04-smart-contracts/02-components",slug:"/smart-contracts/components/deployment",permalink:"/fr/docs/1.0/smart-contracts/components/deployment",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/04-smart-contracts/02-components/10-deployment.md",version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Compilation",permalink:"/fr/docs/1.0/smart-contracts/components/compilation"},next:{title:"Gas Usage and Cost",permalink:"/fr/docs/1.0/smart-contracts/components/gas-cost"}},p=[{value:"Store using the CLI",id:"store-using-the-cli",children:[]}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deployment"},"Deployment"),(0,a.kt)("p",null,"When compiling is complete (it may take a while) ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,a.kt)("inlineCode",{parentName:"p"},"artifacts")," directory. ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," should show you binaries for the contract."),(0,a.kt)("p",null,"In the following examples, remember to switch ",(0,a.kt)("inlineCode",{parentName:"p"},"<your-contract>")," for the name of the binary you just compiled."),(0,a.kt)("h2",{id:"store-using-the-cli"},"Store using the CLI"),(0,a.kt)("p",null,"Using ",(0,a.kt)("inlineCode",{parentName:"p"},"wasmd")," you can now store it on the blockchain:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"wasmd tx wasm store <your-contract>.wasm  --from <your-key> --chain-id <chain-id> --gas auto\n")),(0,a.kt)("p",null,"You will need the code id of the contract. For this, you can look in the JSON output for the ",(0,a.kt)("inlineCode",{parentName:"p"},"code_id")," value. If you would prefer to capture this as a shell variable, instead the previous upload step you can instead do:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd artifacts\nRES=$(wasmd tx wasm store <your-contract>.wasm  --from <your-key> --chain-id=<chain-id> --gas auto -y)\nCODE_ID=$(echo $RES | jq -r '.logs[0].events[0].attributes[-1].value')\n")),(0,a.kt)("p",null,"You will then be able to use ",(0,a.kt)("inlineCode",{parentName:"p"},"$CODE_ID")," in commands when working with the contract for the remainder of your session."))}m.isMDXComponent=!0}}]);