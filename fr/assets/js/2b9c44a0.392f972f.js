(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1335],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(h,s(s({ref:t},l),{},{components:n})):a.createElement(h,s({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4328:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return l},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),s=["components"],i={sidebar_position:5},c="Uploading and Interacting",d={unversionedId:"getting-started/interact-with-contract",id:"getting-started/interact-with-contract",isDocsHomePage:!1,title:"Uploading and Interacting",description:"We have the binary ready. Now it is time to see some wasm action. You can use Go CLI or",source:"@site/docs/02-getting-started/05-interact-with-contract.md",sourceDirName:"02-getting-started",slug:"/getting-started/interact-with-contract",permalink:"/fr/docs/1.0/getting-started/interact-with-contract",editUrl:"https://github.com/InterWasm/docs/edit/main/docs/02-getting-started/05-interact-with-contract.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Downloading and Compiling Contract",permalink:"/fr/docs/1.0/getting-started/compile-contract"},next:{title:"Next Steps",permalink:"/fr/docs/1.0/getting-started/next-steps"}},l=[{value:"Go CLI",id:"go-cli",children:[{value:"Instantiating the Contract",id:"instantiating-the-contract",children:[]}]},{value:"Node Console",id:"node-console",children:[{value:"Uploading with JS",id:"uploading-with-js",children:[]},{value:"Executing Contract with JS",id:"executing-contract-with-js",children:[]}]}],u={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"uploading-and-interacting"},"Uploading and Interacting"),(0,r.kt)("p",null,"We have the binary ready. Now it is time to see some wasm action. You can use ",(0,r.kt)("a",{parentName:"p",href:"#go-cli"},"Go CLI")," or\n",(0,r.kt)("a",{parentName:"p",href:"#node-console"},"Node Console")," as you wish."),(0,r.kt)("h2",{id:"go-cli"},"Go CLI"),(0,r.kt)("p",null,"We generated a wasm binary executable in the previous chapter. Let's put it into use. Now, we will upload the code to\nthe blockchain. Afterwards, you can download the bytecode to verify it is proper:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# see how many codes we have now\nwasmd query wasm list-code $NODE\n\n# gas is huge due to wasm size... but auto-zipping reduced this from 1.8M to around 600k\n# you can see the code in the result\nRES=$(wasmd tx wasm store artifacts/cw_escrow.wasm --from fred $TXFLAG -y)\n\n# you can also get the code this way\nCODE_ID=$(echo $RES | jq -r '.logs[0].events[0].attributes[-1].value')\n\n# no contracts yet, this should return an empty list\nwasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\n\n# you can also download the wasm from the chain and check that the diff between them is empty\nwasmd query wasm code $CODE_ID $NODE download.wasm\ndiff artifacts/cw_escrow.wasm download.wasm\n")),(0,r.kt)("h3",{id:"instantiating-the-contract"},"Instantiating the Contract"),(0,r.kt)("p",null,"We can now create an instance of this wasm contract. Here the verifier will fund an escrow, that will allow fred to\ncontrol payout and upon release, the funds go to bob."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# instantiate contract and verify\nINIT=$(jq -n --arg fred $(wasmd keys show -a fred) --arg bob $(wasmd keys show -a bob) \'{"arbiter":$fred,"recipient":$bob}\')\nwasmd tx wasm instantiate $CODE_ID "$INIT" \\\n    --from fred --amount=50000usponge  --label "escrow 1" $TXFLAG -y\n\n# check the contract state (and account balance)\nwasmd query wasm list-contract-by-code $CODE_ID $NODE --output json\nCONTRACT=$(wasmd query wasm list-contract-by-code $CODE_ID $NODE --output json | jq -r \'.contracts[-1]\')\necho $CONTRACT\n\n# we should see this contract with 50000usponge\nwasmd query wasm contract $CONTRACT $NODE\nwasmd query bank balances $CONTRACT $NODE\n\n# you can dump entire contract state\nwasmd query wasm contract-state all $CONTRACT $NODE\n\n# note that we prefix the key "config" with two bytes indicating it\'s length\n# echo -n config | xxd -ps\n# gives 636f6e666967\n# thus we have a key 0006636f6e666967\n\n# you can also query one key directly\nwasmd query wasm contract-state raw $CONTRACT 0006636f6e666967 $NODE --hex\n\n# Note that keys are hex encoded, and val is base64 encoded.\n# To view the returned data (assuming it is ascii), try something like:\n# (Note that in many cases the binary data returned is non in ascii format, thus the encoding)\nwasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r \'.models[0].key\' | xxd -r -ps\nwasmd query wasm contract-state all $CONTRACT $NODE --output "json" | jq -r \'.models[0].value\' | base64 -d\n\n# or try a "smart query", executing against the contract\nwasmd query wasm contract-state smart $CONTRACT \'{}\' $NODE\n# (since we didn\'t implement any valid QueryMsg, we just get a parse error back)\n')),(0,r.kt)("p",null,"Once we have the funds in the escrow, let us try to release them. First, failing to do so with a key that is not the\nverifier, then using the proper key to release."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# execute fails if wrong person\nAPPROVE=\'{"approve":{"quantity":[{"amount":"50000","denom":"usponge"}]}}\'\nwasmd tx wasm execute $CONTRACT "$APPROVE" \\\n    --from thief $TXFLAG -y\n\n# looking at the logs should show: "execute wasm contract failed: Unauthorized"\n# and bob should still be broke (and broken showing the account does not exist Error)\nwasmd query bank balances $(wasmd keys show bob -a) $NODE\n\n# but succeeds when fred tries\nwasmd tx wasm execute $CONTRACT "$APPROVE" \\\n    --from fred $TXFLAG -y\n\nwasmd query bank balances $(wasmd keys show bob -a) $NODE\n\n# contract coins must be empty\nwasmd query bank balances $CONTRACT $NODE\n')),(0,r.kt)("h2",{id:"node-console"},"Node Console"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Node console needs to be updated. The code below is obsolete"))),(0,r.kt)("p",null,"If you set up the Node Console / REPL in the ",(0,r.kt)("a",{parentName:"p",href:"./setting-env#setup-node-repl"},"client setup section"),", you can use that to\ndeploy and execute your contract. I think you will find that JSON manipulation and parsing is a bit nicer in JavaScript\nthan in Shell Script."),(0,r.kt)("p",null,"First, go to the cli directory and start up your console:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npx @cosmjs/cli@^0.25 --init https://raw.githubusercontent.com/CosmWasm/testnets/master/heldernet/cli_helper.ts\n")),(0,r.kt)("p",null,"Now, we make all the keys and initialize clients:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const fredSeed = loadOrCreateMnemonic("fred.key");\nconst {address: fredAddr, client: fredClient} = await connect(fredSeed, {});\n\n// bob doesn\'t have a client here as we will not\n// submit any tx with this account, just query balance\nconst bobSeed = loadOrCreateMnemonic("bob.key");\nconst bobAddr = await mnemonicToAddress("muffin fix provide project obtain......", bobSeed);\n\nconst thiefSeed = loadOrCreateMnemonic("thief.key");\n\nconst {address: thiefAddr, client: thiefClient} = await connect(thiefSeed, {});\n\nconsole.log(fredAddr, bobAddr, thiefAddr);\n')),(0,r.kt)("p",null,"Hit the faucet it needed for fred, so he has tokens to submit transactions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'fredClient.getAccount();\n// if "undefined", do the following\nhitFaucet(defaultFaucetUrl, fredAddr, "usponge")\nfredClient.getAccount();\n\nthiefClient.getAccount();\n// if "undefined", do the following\nhitFaucet(defaultFaucetUrl, thiefAddr, "usponge")\nthiefClient.getAccount();\n\n// check bobAddr has no funds\nfredClient.getAccount(bobAddr);\n\n// get the working directory (needed later)\nprocess.cwd()\n')),(0,r.kt)("h3",{id:"uploading-with-js"},"Uploading with JS"),(0,r.kt)("p",null,"Now, we go back to the Node console and upload the contract and instantiate it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const wasm = fs.readFileSync(\'artifacts/cw_escrow.wasm\');\n// you can add extra information to contract details such as source and builder.\nconst up = await fredClient.upload(wasm, {\n  source: "https://crates.io/api/v1/crates/cw-escrow/0.10.0/download",\n  builder: "cosmwasm/rust-optimizer:0.10.7"\n});\n\nconsole.log(up);\nconst {codeId} = up;\n\nconst initMsg = {arbiter: fredAddr, recipient: bobAddr};\nconst {contractAddress} = await fredClient.instantiate(codeId, initMsg, "Escrow 1", {\n  memo: "memo",\n  transferAmount: [{denom: "usponge", amount: "50000"}]\n});\n\n// check the contract is set up properly\nconsole.log(contractAddress);\nfredClient.getContract(contractAddress);\nfredClient.getAccount(contractAddress);\n\n// make a raw query - key length prefixed "config"\nconst key = new Uint8Array([0, 6, ...toAscii("config")]);\nconst raw = await fredClient.queryContractRaw(contractAddress, key);\nJSON.parse(fromUtf8(raw))\n// note the addresses are stored in base64 internally, not bech32, but the data is there... this is why we often implement smart queries on real contracts\n')),(0,r.kt)("h3",{id:"executing-contract-with-js"},"Executing Contract with JS"),(0,r.kt)("p",null,'Once we have properly configured the contract, let\'s show how to use it, both the proper "approve"\ncommand:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const approve = {approve: {quantity: [{amount: "50000", denom: "usponge"}]}};\n\n// thief cannot approve\nthiefClient.execute(contractAddress, approve)\n\n// but fred can (and moves money to bob)\nfredClient.execute(contractAddress, approve);\n// verify bob got the tokens\nfredClient.getAccount(bobAddr);\n// verify contract lost\nfredClient.getAccount(contractAddress);\n')))}p.isMDXComponent=!0}}]);