(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{654:function(e,t,i){"use strict";i.r(t);var s=i(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"build-requirements"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#build-requirements"}},[e._v("#")]),e._v(" Build Requirements")]),e._v(" "),i("p",[e._v("For minimum system requirements instances with 2 processor CPU and 4GB memory is recommended.\nBuilding code may require larger instances, especially if you want to build a static instance (recompile Rust code).")]),e._v(" "),i("h1",{attrs:{id:"installation"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),i("p",[e._v("Node executable may vary between networks, and "),i("a",{attrs:{href:"#option-1-preferred-build-static-binary-using-docker-linux-only"}},[e._v("Option 1")]),e._v("\nmight become obsolete. Network details, configuration and informations can be found on "),i("a",{attrs:{href:"https://github.com/CosmWasm/testnets",target:"_blank",rel:"noopener noreferrer"}},[e._v("CosmWasm/testnets"),i("OutboundLink")],1),e._v(". Please head over to the repo and explore before starting setting up a node.")]),e._v(" "),i("h2",{attrs:{id:"simplest"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#simplest"}},[e._v("#")]),e._v(" Simplest")]),e._v(" "),i("p",[e._v("Use docker image, or build locally: "),i("code",[e._v("https://github.com/CosmWasm/wasmd/#dockerized")]),e._v(".")]),e._v(" "),i("h2",{attrs:{id:"bare-metal"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#bare-metal"}},[e._v("#")]),e._v(" Bare Metal")]),e._v(" "),i("h3",{attrs:{id:"option-1-preferred-build-static-binary-using-docker-linux-only"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#option-1-preferred-build-static-binary-using-docker-linux-only"}},[e._v("#")]),e._v(" Option 1 (preferred - build static binary using docker - Linux only)")]),e._v(" "),i("p",[e._v("Constructing a "),i("code",[e._v("wasmd")]),e._v(" is a tricky process and involves using Alpine Linux as a build environment and recompiling the Rust dependencies as static libs.\nUsing Dockerfile is suggested.")]),e._v(" "),i("ol",[i("li",[i("p",[e._v("Clone the project "),i("code",[e._v("git clone https://github.com/CosmWasm/wasmd.git && cd wasmd")])])]),e._v(" "),i("li",[i("p",[e._v("Checkout to testnets version "),i("code",[e._v("git checkout vx.x.x")])])]),e._v(" "),i("li",[i("p",[e._v("Build docker image "),i("code",[e._v("docker build . -t wasmd-docker")])])]),e._v(" "),i("li",[i("p",[e._v("Extract the specific binaries from build environment:")]),e._v(" "),i("code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"aWQ9JChkb2NrZXIgY3JlYXRlIHdhc21kLWRvY2tlcikKZG9ja2VyIGNwICRpZDovdXNyL2Jpbi93YXNtZCAuCmRvY2tlciBjcCAkaWQ6L3Vzci9iaW4vd2FzbWNsaSAuCiMgZG9ja2VyIGNwICRpZDovdXNyL2Jpbi9jb3JhbGQgLgojIGRvY2tlciBjcCAkaWQ6L3Vzci9iaW4vY29yYWwgLgpkb2NrZXIgcm0gLXYgJGlkCg=="}})],1),e._v(" "),i("li",[i("p",[e._v("Use the static binaries on any bare metal Linux box")])])]),e._v(" "),i("h3",{attrs:{id:"option-2-dev-style-dynamic-binary-works-on-linux-and-osx"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#option-2-dev-style-dynamic-binary-works-on-linux-and-osx"}},[e._v("#")]),e._v(" Option 2: (dev-style: dynamic binary - works on Linux and OSX)")]),e._v(" "),i("ol",[i("li",[i("code",[e._v("git clone https://github.com/CosmWasm/wasmd.git && cd wasmd")])]),e._v(" "),i("li",[e._v("Checkout to testnets version "),i("code",[e._v("git checkout vx.x.x")])]),e._v(" "),i("li",[e._v("Compile dev build: "),i("code",[e._v("make build")]),e._v(" or "),i("code",[e._v("make build-<testnet>")]),e._v(" for testnets")]),e._v(" "),i("li",[i("code",[e._v("ldd build/wasmd")])]),e._v(" "),i("li",[e._v("Notice the line like: "),i("code",[e._v("libgo_cosmwasm.so => /home/USERNAME/go/pkg/mod/github.com/!cosm!wasm/go-cosmwasm@v0.9.1/api/libgo_cosmwasm.so")]),e._v("\nthis file must be in the library path along with wasmd")]),e._v(" "),i("li",[e._v("Copy "),i("code",[e._v("wasmd")]),e._v(" to any location on the target system (that will run the node)")]),e._v(" "),i("li",[e._v("Copy "),i("code",[e._v("libgo_cosmwasm.so")]),e._v(" (path above) to the target system under "),i("code",[e._v("/usr/lib/libgo_cosmwasm.so")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);