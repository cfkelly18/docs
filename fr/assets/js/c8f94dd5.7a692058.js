(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4175],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=i,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4380:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var a=t(2122),i=t(9756),o=(t(7294),t(3905)),r=["components"],s={sidebar_position:1},l="CW20 Spec: Fungible Tokens",p={unversionedId:"cw20/spec",id:"cw20/spec",isDocsHomePage:!1,title:"CW20 Spec: Fungible Tokens",description:"cw20 package source",source:"@site/cw-plus/cw20/spec.md",sourceDirName:"cw20",slug:"/cw20/spec",permalink:"/fr/cw-plus/0.9.0/cw20/spec",editUrl:"https://github.com/InterWasm/docs/edit/main/cw-plus/cw20/spec.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cwPlus",previous:{title:"CW2 Spec",permalink:"/fr/cw-plus/0.9.0/cw2/spec"},next:{title:"cw20-base Spec",permalink:"/fr/cw-plus/0.9.0/cw20/cw20-base-spec"}},c=[{value:"Base",id:"base",children:[{value:"Messages",id:"messages",children:[]},{value:"Queries",id:"queries",children:[]},{value:"Receiver",id:"receiver",children:[]}]},{value:"Allowances",id:"allowances",children:[{value:"Messages",id:"messages-1",children:[]},{value:"Queries",id:"queries-1",children:[]}]},{value:"Mintable",id:"mintable",children:[{value:"Messages",id:"messages-2",children:[]},{value:"Queries",id:"queries-2",children:[]}]}],d={toc:c};function m(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cw20-spec-fungible-tokens"},"CW20 Spec: Fungible Tokens"),(0,o.kt)("p",null,"cw20 package source\ncode: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-plus/tree/master/packages/cw20"},"https://github.com/CosmWasm/cw-plus/tree/master/packages/cw20")),(0,o.kt)("p",null,"cw20 is a specification for fungible tokens based on CosmWasm. The name and design is loosely based on Ethereum's ERC20\nstandard, but many changes have been made. The types in here can be imported by contracts that wish to implement this\nspec, or by contracts that call to any standard cw20 contract."),(0,o.kt)("p",null,"The specification is split into multiple sections, a contract may only implement some of this functionality, but must\nimplement the base."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"This section contains cw20 spec implementation details. If you are around to play with the contract, skip this")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"section and go to the ",(0,o.kt)("a",{parentName:"p",href:"/fr/cw-plus/0.9.0/cw20/cw20-base-tutorial"},"next page")))),(0,o.kt)("h2",{id:"base"},"Base"),(0,o.kt)("p",null,"This handles balances and transfers. Note that all amounts are handled as ",(0,o.kt)("inlineCode",{parentName:"p"},"Uint128")," (128 bit integers with JSON string\nrepresentation). Handling decimals is left to the UI and not interpreted"),(0,o.kt)("h3",{id:"messages"},"Messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Transfer{recipient, amount}")," - Moves ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," account. This is designed to send to an address controlled by a private key\nand ",(0,o.kt)("em",{parentName:"p"},"does not")," trigger any actions on the recipient if it is a contract."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Send{contract, amount, msg}")," - Moves ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from the\n",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account to the ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," account. ",(0,o.kt)("inlineCode",{parentName:"p"},"contract")," must be an address of a contract that implements\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"Receiver")," interface. The ",(0,o.kt)("inlineCode",{parentName:"p"},"msg"),"\nwill be passed to the recipient contract, along with the amount."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Burn{amount}")," - Remove ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from the balance of ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender"),"\nand reduce ",(0,o.kt)("inlineCode",{parentName:"p"},"total_supply")," by the same amount."),(0,o.kt)("h3",{id:"queries"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Balance{address}"),' - Returns the balance of the given address. Returns "0" if the address is unknown to the contract.\nReturn type is ',(0,o.kt)("inlineCode",{parentName:"p"},"BalanceResponse{balance}"),"."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TokenInfo{}")," - Returns the token info of the contract. Return type is\n",(0,o.kt)("inlineCode",{parentName:"p"},"TokenInfoResponse{name, symbol, decimal, total_supply}"),"."),(0,o.kt)("h3",{id:"receiver"},"Receiver"),(0,o.kt)("p",null,"The counter-part to ",(0,o.kt)("inlineCode",{parentName:"p"},"Send")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"Receive"),", which must be implemented by any contract that wishes to manage cw20 tokens.\nThis is generally ",(0,o.kt)("em",{parentName:"p"},"not"),"\nimplemented by any cw20 contract."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Receive{sender, amount, msg}")," - This is designed to handle ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"\nmessages. The address of the contract is stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender"),"\nso it cannot be faked. The contract should ensure the sender matches the token contract it expects to handle, and not\nallow arbitrary addresses."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"sender")," is the original account requesting to move the tokens and ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Binary")," data that can be decoded into\na contract-specific message. This can be empty if we have only one default action, or it may be a ",(0,o.kt)("inlineCode",{parentName:"p"},"ReceiveMsg")," variant\nto clarify the intention. For example, if I send to a uniswap contract, I can specify which token I want to swap against\nusing this field."),(0,o.kt)("h2",{id:"allowances"},"Allowances"),(0,o.kt)("p",null,"A contract may allow actors to delegate some of their balance to other accounts. This is not as essential as with ERC20\nas we use ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"Receive"),"\nto send tokens to a contract, not ",(0,o.kt)("inlineCode",{parentName:"p"},"Approve"),"/",(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom"),". But it is still a nice use-case, and you can see how the\nCosmos SDK wants to add payment allowances to native tokens. This is mainly designed to provide access to other\npublic-key-based accounts."),(0,o.kt)("p",null,"There was an issue with race conditions in the original ERC20 approval spec. If you had an approval of 50 and I then\nwant to reduce it to 20, I submit a Tx to set the allowance to 20. If you see that and immediately submit a tx using the\nentire 50, you then get access to the other 20. Not only did you quickly spend the 50 before I could reduce it, you get\nanother 20 for free."),(0,o.kt)("p",null,"The solution discussed in the Ethereum community was an ",(0,o.kt)("inlineCode",{parentName:"p"},"IncreaseAllowance"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"DecreaseAllowance")," operator (instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"Approve"),"). To originally set an approval, use ",(0,o.kt)("inlineCode",{parentName:"p"},"IncreaseAllowance"),", which\nworks fine with no previous allowance.\n",(0,o.kt)("inlineCode",{parentName:"p"},"DecreaseAllowance")," is meant to be robust, that is if you decrease by more than the current allowance (eg. the user\nspent some in the middle), it will just round down to 0 and not make any underflow error."),(0,o.kt)("h3",{id:"messages-1"},"Messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"IncreaseAllowance{spender, amount, expires}")," - Set or increase the allowance such that ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," may access up\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"amount + current_allowance")," tokens from the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account. This may optionally come with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Expiration"),"\ntime, which if set limits when the approval can be used (by time or height)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DecreaseAllowance{spender, amount, expires}")," - Decrease or clear the allowance such that ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," may access up\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"current_allowance - amount")," tokens from the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," account. This may optionally come with an ",(0,o.kt)("inlineCode",{parentName:"p"},"Expiration"),"\ntime, which if set limits when the approval can be used (by time or height). If ",(0,o.kt)("inlineCode",{parentName:"p"},"amount >= current_allowance"),", this will\nclear the allowance (delete it)."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom{owner, recipient, amount}")," - This makes use of an allowance and if there was a valid, un-expired\npre-approval for the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender"),", then we move ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," tokens from ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient")," and deduct it from the\navailable allowance."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SendFrom{owner, contract, amount, msg}")," - ",(0,o.kt)("inlineCode",{parentName:"p"},"SendFrom")," is to ",(0,o.kt)("inlineCode",{parentName:"p"},"Send"),", what\n",(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom")," is to ",(0,o.kt)("inlineCode",{parentName:"p"},"Transfer"),". This allows a pre-approved account to not just transfer the tokens, but to send them to\nanother contract to trigger a given action. ",(0,o.kt)("strong",{parentName:"p"},"Note")," ",(0,o.kt)("inlineCode",{parentName:"p"},"SendFrom")," will set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Receive{sender}"),"\nto be the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," (the account that triggered the transfer)\nrather than the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner")," account (the account the money is coming from). This is an open question whether we should\nswitch this?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"BurnFrom{owner, amount}")," - This works like ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferFrom"),", but burns the tokens instead of transfering them. This will\nreduce the owner's balance, ",(0,o.kt)("inlineCode",{parentName:"p"},"total_supply")," and the caller's allowance."),(0,o.kt)("h3",{id:"queries-1"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Allowance{owner, spender}")," - This returns the available allowance that ",(0,o.kt)("inlineCode",{parentName:"p"},"spender")," can access from the ",(0,o.kt)("inlineCode",{parentName:"p"},"owner"),"'s account,\nalong with the expiration info. Return type is ",(0,o.kt)("inlineCode",{parentName:"p"},"AllowanceResponse{balance, expiration}"),"."),(0,o.kt)("h2",{id:"mintable"},"Mintable"),(0,o.kt)("p",null,"This allows another contract to mint new tokens, possibly with a cap. There is only one minter specified here, if you\nwant more complex access management, please use a multisig or other contract as the minter address and handle updating\nthe ACL there."),(0,o.kt)("h3",{id:"messages-2"},"Messages"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Mint{recipient, amount}")," - If the ",(0,o.kt)("inlineCode",{parentName:"p"},"env.sender")," is the allowed minter, this will create ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," new tokens (updating\ntotal supply) and add them to the balance of ",(0,o.kt)("inlineCode",{parentName:"p"},"recipient"),"."),(0,o.kt)("h3",{id:"queries-2"},"Queries"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Minter{}")," - Returns who and how much can be minted. Return type is\n",(0,o.kt)("inlineCode",{parentName:"p"},"MinterResponse {minter, cap}"),". Cap may be unset."))}m.isMDXComponent=!0}}]);