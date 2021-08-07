(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5052],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8111:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return c}});var a=t(2122),r=t(9756),o=(t(7294),t(3905)),s=["components"],i={sidebar_position:3},l="Environment Setup",u={unversionedId:"lesson-1/environment",id:"lesson-1/environment",isDocsHomePage:!1,title:"Environment Setup",description:"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For",source:"@site/dev-academy/lesson-1/04-environment.md",sourceDirName:"lesson-1",slug:"/lesson-1/environment",permalink:"/fr/dev-academy/lesson-1/environment",editUrl:"https://github.com/CosmWasm/docs/edit/main/dev-academy/lesson-1/04-environment.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"devAcademy",previous:{title:"Basics of Cosmos SDK and CosmWasm",permalink:"/fr/dev-academy/lesson-1/cosmos-sdk-cw"},next:{title:"Challenge",permalink:"/fr/dev-academy/lesson-1/challenge"}},d=[{value:"Go",id:"go",children:[]},{value:"Rust",id:"rust",children:[{value:"Installing Rust in Linux and Mac",id:"installing-rust-in-linux-and-mac",children:[]}]},{value:"wasmd",id:"wasmd",children:[]},{value:"Setup wasmd and Wallet",id:"setup-wasmd-and-wallet",children:[]},{value:"Export wasmd Parameters",id:"export-wasmd-parameters",children:[]},{value:"Setting up your IDE",id:"setting-up-your-ide",children:[]}],p={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-setup"},"Environment Setup"),(0,o.kt)("p",null,"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For\neasy testing, oysternet network is online, you can use it to deploy and run your contracts."),(0,o.kt)("p",null,"When interacting with network, you can either use ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," which is a Go client or Node REPL. Although Node REPL is\nrecommended for contract operations, since JSON manipulation is not intuitive with the Shell/Go client."),(0,o.kt)("p",null,"For the whole course, we will be using a public testnet to make things simpler."),(0,o.kt)("h2",{id:"go"},"Go"),(0,o.kt)("p",null,"You can setup golang following ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/golang/go/wiki#working-with-go"},"official documentation"),". The latest\nversions of ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd"),"\nrequire go version ",(0,o.kt)("inlineCode",{parentName:"p"},"v1.15"),"."),(0,o.kt)("h2",{id:"rust"},"Rust"),(0,o.kt)("p",null,"Assuming you have never worked with rust, you will first need to install some tooling. The standard approach is to\nuse ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup")," to maintain dependencies and handle updating multiple versions of\n",(0,o.kt)("inlineCode",{parentName:"p"},"cargo")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"rustc"),", which you will be using."),(0,o.kt)("h3",{id:"installing-rust-in-linux-and-mac"},"Installing Rust in Linux and Mac"),(0,o.kt)("p",null,"First, ",(0,o.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"install rustup"),". Once installed, make sure you have the wasm32 target:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"rustup default stable\ncargo version\n# If this is lower than 1.50.0+, update\nrustup update stable\n\nrustup target list --installed\nrustup target add wasm32-unknown-unknown\n")),(0,o.kt)("h2",{id:"wasmd"},"wasmd"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," is the backbone of CosmWasm platform. It is the implementation of a Cosmoszone with wasm smart contracts\nenabled."),(0,o.kt)("p",null,"This code was forked from the ",(0,o.kt)("inlineCode",{parentName:"p"},"cosmos/gaia")," repository as a basis and then added x/wasm and cleaned up many\ngaia-specific files. However, the wasmd binary should function just like gaiad except for the addition of the x/wasm\nmodule."),(0,o.kt)("p",null,"If you intend to develop or edit a contract, you need wasmd."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/CosmWasm/wasmd.git\ncd wasmd\n# replace the v0.16.0 with the most stable version on https://github.com/CosmWasm/wasmd/releases\ngit checkout v0.16.0\nmake install\n\n# verify the installation\nwasmd version\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have any problems here, check your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"make install")," will copy ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," to\n",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/go/bin")," by default, please make sure that is set up in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," as well, which should be the case in general\nfor building Go code from source."))),(0,o.kt)("h2",{id:"setup-wasmd-and-wallet"},"Setup wasmd and Wallet"),(0,o.kt)("p",null,"Let's configure ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," exec, point it to testnets, create wallet and ask tokens from faucet:"),(0,o.kt)("p",null,"First source the oysternet cosmwasm public network configurations to the shell:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/oysternet-1/defaults.env)\n")),(0,o.kt)("p",null,"Setup the client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'# add wallets for testing\nwasmd keys add main\n>\n{\n  "name": "main",\n  "type": "local",\n  "address": "wasm13nt9rxj7v2ly096hm8qsyfjzg5pr7vn5saqd50",\n  "pubkey": "wasmpub1addwnpepqf4n9afaefugnfztg7udk50duwr4n8p7pwcjlm9tuumtlux5vud6qvfgp9g",\n  "mnemonic": "hobby bunker rotate piano satoshi planet network verify else market spring toward pledge turkey tip slim word jaguar congress thumb flag project chalk inspire"\n}\n\n')),(0,o.kt)("p",null,"You need some tokens in your address to interact. If you are using local node you can skip this step. Requesting tokens\nfrom faucet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'JSON=$(jq -n --arg addr $(wasmd keys show -a main) \'{"denom":"usponge","address":$addr}\') && curl -X POST --header\n"Content-Type: application/json" --data "$JSON" https://faucet.oysternet.cosmwasm.com/credit\n')),(0,o.kt)("h2",{id:"export-wasmd-parameters"},"Export wasmd Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," client requries setup for interacting with different testnets.\nEach testnet has its own endpoints and system parameters."),(0,o.kt)("p",null,"Best way to configure ",(0,o.kt)("inlineCode",{parentName:"p"},"wasmd")," is by setting up environment variables below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# bash\nexport NODE="--node $RPC"\nexport TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.001usponge --gas auto --gas-adjustment 1.3"\n\n# zsh\nexport NODE=(--node $RPC)\nexport TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001usponge --gas auto --gas-adjustment 1.3)\n')),(0,o.kt)("p",null,"If command above throws error, this means your shell is different. If no errors, try running this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank total $NODE\n")),(0,o.kt)("h2",{id:"setting-up-your-ide"},"Setting up your IDE"),(0,o.kt)("p",null,"We need a good IDE for developing rust smart contracts. We recommend Intellij with Rust Plugin."))}c.isMDXComponent=!0}}]);