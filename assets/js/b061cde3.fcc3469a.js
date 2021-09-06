(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4653],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6198:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],c={sidebar_position:2},p="Cosmic dApp logic",s={unversionedId:"smart-contracts/frontend_app/cosmicdapp-logic",id:"smart-contracts/frontend_app/cosmicdapp-logic",isDocsHomePage:!1,title:"Cosmic dApp logic",description:"The CosmWasm/dApps [Logic] package provides three kinds of",source:"@site/docs/04-smart-contracts/10-frontend_app/02-cosmicdapp-logic.md",sourceDirName:"04-smart-contracts/10-frontend_app",slug:"/smart-contracts/frontend_app/cosmicdapp-logic",permalink:"/docs/1.0/smart-contracts/frontend_app/cosmicdapp-logic",editUrl:"https://github.com/CosmWasm/docs/edit/main/docs/04-smart-contracts/10-frontend_app/02-cosmicdapp-logic.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/1.0/smart-contracts/frontend_app/introduction"},next:{title:"Cosmic dApp design",permalink:"/docs/1.0/smart-contracts/frontend_app/cosmicdapp-design"}},l=[{value:"Config",id:"config",children:[]},{value:"Utils",id:"utils",children:[]},{value:"Service",id:"service",children:[{value:"Sdk provider",id:"sdk-provider",children:[]},{value:"Account provider",id:"account-provider",children:[]},{value:"ErrorProvider",id:"errorprovider",children:[]},{value:"CW20",id:"cw20",children:[]},{value:"ProtectedSwitch",id:"protectedswitch",children:[]}]}],d={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cosmic-dapp-logic"},"Cosmic dApp logic"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/dApps/tree/master/packages/logic"},(0,o.kt)("inlineCode",{parentName:"a"},"CosmWasm/dApps [Logic]"))," package provides three kinds of\nresources that will make it easier to develop CosmJS based dApps: ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"#config"},"config")),", ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"#utils"},"utils")),", and ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("a",{parentName:"em",href:"#service"},"service")),". In order to better\nunderstand the example balance checker dApp that we'll be developing, we'll go over those utilities that will be used in\nthe app."),(0,o.kt)("h2",{id:"config"},"Config"),(0,o.kt)("p",null,"The AppConfig definitions that configure the app to work for a given chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"export interface AppConfig {\n  readonly chainId: string;\n  readonly chainName: string;\n  readonly addressPrefix: string;\n  readonly rpcUrl: string;\n  readonly httpUrl: string;\n  readonly faucetUrl: string;\n  readonly feeToken: string;\n  readonly stakingToken: string;\n  readonly faucetToken: string;\n  readonly coinMap: CoinMap;\n  readonly gasPrice: number;\n  readonly codeId?: number;\n}\n")),(0,o.kt)("p",null,"In this tutorial we'll be using configuration for Heldernet."),(0,o.kt)("p",null,"The fields are pretty self-explanatory except ",(0,o.kt)("inlineCode",{parentName:"p"},"coinMap"),", which is a map of native coin names that will allow us to\npretty print the token amounts with ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeCoinToDisplay()"),". It looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'{\n  ucosm: {\n    denom: "COSM", fractionalDigits\n  :\n    6\n  }\n,\n  ustake: {\n    denom: "STAKE", fractionalDigits\n  :\n    6\n  }\n,\n}\n')),(0,o.kt)("h2",{id:"utils"},"Utils"),(0,o.kt)("p",null,"Here you can find the definition for a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoinMap")," like the one above, which will come in handy when defining it in your\nconfig file."),(0,o.kt)("p",null,"There are also several utility functions for working with errors and currencies. In this tutorial we'll only be\nusing ",(0,o.kt)("inlineCode",{parentName:"p"},"nativeCoinToDisplay()"),", which takes two parameters: a ",(0,o.kt)("inlineCode",{parentName:"p"},"[@cosmjs/launchpad](https://github.com/cosmos/cosmjs/tree/main/packages/launchpad)")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Coin")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"CoinMap"),"."),(0,o.kt)("p",null,"It makes use of those parameters and the ",(0,o.kt)("inlineCode",{parentName:"p"},"Decimal")," class from ",(0,o.kt)("inlineCode",{parentName:"p"},"[@cosmjs/math](https://github.com/cosmos/cosmjs/tree/main/packages/math)")," to return a ",(0,o.kt)("inlineCode",{parentName:"p"},"Coin")," with a more user\nfriendly ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," field, that will be used for printing native coins in the balance checker."),(0,o.kt)("h2",{id:"service"},"Service"),(0,o.kt)("p",null,"This resource offers several ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/"},"React")," context providers, some utility functions, and a ",(0,o.kt)("inlineCode",{parentName:"p"},"[ProtectedSwitch](#protectedswitch)")," React component."),(0,o.kt)("h3",{id:"sdk-provider"},"Sdk provider"),(0,o.kt)("p",null,"We'll be able to interact with this React context provider with the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSdk")," hook, which will give us access to\na ",(0,o.kt)("inlineCode",{parentName:"p"},"SigningCosmWasmClient")," in order to query the chain."),(0,o.kt)("h3",{id:"account-provider"},"Account provider"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"useAccount")," hook will expose this provider's state, which will be useful for getting the user address and balance."),(0,o.kt)("h3",{id:"errorprovider"},"ErrorProvider"),(0,o.kt)("p",null,"By making use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useError")," hook, we will be able to query and change the value of a global error."),(0,o.kt)("h3",{id:"cw20"},"CW20"),(0,o.kt)("p",null,"This is a utility that will provide several methods for interacting with CW20 contracts. For the balance checker, we'll\nbe querying the balance of a given CW20 contract token."),(0,o.kt)("h3",{id:"protectedswitch"},"ProtectedSwitch"),(0,o.kt)("p",null,"A wrapper around ",(0,o.kt)("inlineCode",{parentName:"p"},"react-router-dom")," ",(0,o.kt)("inlineCode",{parentName:"p"},"Switch"),", that only allows the user to visit the routes inside if the user has\nfinished the login process."))}u.isMDXComponent=!0}}]);