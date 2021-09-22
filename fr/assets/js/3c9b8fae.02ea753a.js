(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3193],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5827:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:3},l="Setting Up Environment",c={unversionedId:"getting-started/setting-env",id:"getting-started/setting-env",isDocsHomePage:!1,title:"Setting Up Environment",description:"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For",source:"@site/docs/02-getting-started/03-setting-env.md",sourceDirName:"02-getting-started",slug:"/getting-started/setting-env",permalink:"/fr/docs/1.0/getting-started/setting-env",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/02-getting-started/03-setting-env.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Installation",permalink:"/fr/docs/1.0/getting-started/installation"},next:{title:"Downloading and Compiling Contract",permalink:"/fr/docs/1.0/getting-started/compile-contract"}},d=[{value:"Setup Go CLI",id:"setup-go-cli",children:[]},{value:"Export wasmd Parameters",id:"export-wasmd-parameters",children:[]},{value:"Setup Node REPL",id:"setup-node-repl",children:[]},{value:"Run Local Node (optional)",id:"run-local-node-optional",children:[]}],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setting-up-environment"},"Setting Up Environment"),(0,r.kt)("p",null,"You need an environment to run contracts. You can either run your node locally or connect to an existing network. For\neasy testing, oysternet network is online, you can use it to deploy and run your contracts. If you want to setup and run\nagainst a local blockchain, ",(0,r.kt)("a",{parentName:"p",href:"#run-local-node-optional"},"click here")),(0,r.kt)("p",null,"To verify testnet is currently running, make sure the following URLs are all working for you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://rpc.oysternet.cosmwasm.com/status"},"http://rpc.oysternet.cosmwasm.com/status")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://faucet.oysternet.cosmwasm.com/status"},"https://faucet.oysternet.cosmwasm.com/status")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://lcd.oysternet.cosmwasm.com/node_info"},"http://lcd.oysternet.cosmwasm.com/node_info"))),(0,r.kt)("p",null,"We have set up two native tokens - ",(0,r.kt)("inlineCode",{parentName:"p"},"STAR")," (",(0,r.kt)("inlineCode",{parentName:"p"},"ustar"),") for becoming a validator and ",(0,r.kt)("inlineCode",{parentName:"p"},"SPONGE")," (",(0,r.kt)("inlineCode",{parentName:"p"},"usponge"),") for paying fees.\nAvailable frontends:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Block Explorer: ",(0,r.kt)("a",{parentName:"li",href:"https://block-explorer.oysternet.cosmwasm.com"},"https://block-explorer.oysternet.cosmwasm.com"))),(0,r.kt)("p",null,"You can use these to explore txs, addresses, validators and contracts feel free to deploy one pointing to our rpc/lcd\nservers and we will list it."),(0,r.kt)("p",null,"You can find more information about other testnets:\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/testnets"},"CosmWasm/testnets")," and ",(0,r.kt)("a",{parentName:"p",href:"/ecosystem/testnets/testnets"},"Testnet section"),"."),(0,r.kt)("p",null,"When interacting with network, you can either use ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," which is a Go client or Node REPL. Altough Node REPL is\nrecommended for contract operations, since JSON manipulation is not intuitive with the Shell/Go client."),(0,r.kt)("h2",{id:"setup-go-cli"},"Setup Go CLI"),(0,r.kt)("p",null,"Let's configure ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd")," exec, point it to testnets, create wallet and ask tokens from faucet:"),(0,r.kt)("p",null,"First source the oysternet network configurations to the shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"source <(curl -sSL https://raw.githubusercontent.com/CosmWasm/testnets/master/oysternet-1/defaults.env)\n")),(0,r.kt)("p",null,"Setup the client:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# add wallets for testing\nwasmd keys add fred\n>\n{\n  "name": "fred",\n  "type": "local",\n  "address": "wasm13nt9rxj7v2ly096hm8qsyfjzg5pr7vn5saqd50",\n  "pubkey": "wasmpub1addwnpepqf4n9afaefugnfztg7udk50duwr4n8p7pwcjlm9tuumtlux5vud6qvfgp9g",\n  "mnemonic": "hobby bunker rotate piano satoshi planet network verify else market spring toward pledge turkey tip slim word jaguar congress thumb flag project chalk inspire"\n}\n\nwasmd keys add bob\nwasmd keys add thief\n')),(0,r.kt)("p",null,"You need some tokens in your address to interact. If you are using local node you can skip this step. Requesting tokens\nfrom faucet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'JSON=$(jq -n --arg addr $(wasmd keys show -a fred) \'{"denom":"usponge","address":$addr}\') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.oysternet.cosmwasm.com/credit\nJSON=$(jq -n --arg addr $(wasmd keys show -a thief) \'{"denom":"usponge","address":$addr}\') && curl -X POST --header "Content-Type: application/json" --data "$JSON" https://faucet.oysternet.cosmwasm.com/credit\n')),(0,r.kt)("h2",{id:"export-wasmd-parameters"},"Export wasmd Parameters"),(0,r.kt)("p",null,"If you intend to use wasmd as client, we recommend you to setup these variables. Otherwise You will have to define type\nin node, chain id and gas-prices details with every command you execute. Also for this tutorial we will use these\nvariables. So make sure you export these before proceeding."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# bash\nexport NODE="--node $RPC"\nexport TXFLAG="${NODE} --chain-id ${CHAIN_ID} --gas-prices 0.001usponge --gas auto --gas-adjustment 1.3"\n\n# zsh\nexport NODE=(--node $RPC)\nexport TXFLAG=($NODE --chain-id $CHAIN_ID --gas-prices 0.001usponge --gas auto --gas-adjustment 1.3)\n')),(0,r.kt)("p",null,"If command above throws error, this means your shell is different. If no errors, try running this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wasmd query bank total $NODE\n")),(0,r.kt)("h2",{id:"setup-node-repl"},"Setup Node REPL"),(0,r.kt)("p",null,"Beyond the standard CLI tooling, we have also produced a flexible TypeScript library\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cosmjs"},"CosmJS"),", which runs in Node.js as well as in modern browsers and handles queries\nand submitting transactions. Along with this library, we produced\n",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cosmjs/cli"},"@cosmjs/cli"),", which is a super-charged Node console. It supports ",(0,r.kt)("inlineCode",{parentName:"p"},"await"),",\ndoes type checking for helpful error messages, and preloads many CosmJS utilities. If you are comfortable with the Node\nconsole, you will probably find this easier and more powerful than the CLI tooling."),(0,r.kt)("p",null,"Using the REPL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// Create or load account\nconst mnemonic = loadOrCreateMnemonic('fred.key')\nmnemonicToAddress(mnemonic)\n\nconst {address, client} = await connect(mnemonic, {})\naddress\n\nclient.getAccount()\n// if empty - this only works with CosmWasm\nhitFaucet(defaultFaucetUrl, address, 'STAR')\nclient.getAccount()\n")),(0,r.kt)("h2",{id:"run-local-node-optional"},"Run Local Node (optional)"),(0,r.kt)("p",null,"If you are interested in running your local network you can use the script below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# default home is ~/.wasmd\n# if you want to setup multiple apps on your local make sure to change this value\nAPP_HOME="~/.wasmd"\nRPC="http://localhost:26657"\nCHAIN_ID="localnet"\n# initialize wasmd configuration files\nwasmd init localnet --chain-id ${CHAIN_ID} --home ${APP_HOME}\n\n# add minimum gas prices config to app configuration file\nsed -i -r \'s/minimum-gas-prices = ""/minimum-gas-prices = "0.01ucosm"/\' ${APP_HOME}/config/app.toml\n\n# Create main address\n# --keyring-backend test is for testing purposes\n# Change it to --keyring-backend file for secure usage.\nexport KEYRING="--keyring-backend test --keyring-dir $HOME/.wasmd_keys"\nwasmd keys add main $KEYRING\n\n# create validator address\nwasmd keys add validator $KEYRING\n\n# add your wallet addresses to genesis\nwasmd add-genesis-account $(wasmd keys show -a main $KEYRING) 10000000000ucosm,10000000000stake --home ${APP_HOME}\nwasmd add-genesis-account $(wasmd keys show -a validator $KEYRING) 10000000000ucosm,10000000000stake --home ${APP_HOME}\n\n# add fred\'s address as validator\'s address\nwasmd gentx validator 1000000000stake --home ${APP_HOME} --chain-id ${CHAIN_ID} $KEYRING\n\n# collect gentxs to genesis\nwasmd collect-gentxs --home ${APP_HOME}\n\n# validate the genesis file\nwasmd validate-genesis --home ${APP_HOME}\n\n# run the node\nwasmd start --home ${APP_HOME}\n')))}p.isMDXComponent=!0}}]);