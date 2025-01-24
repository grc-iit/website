"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[6057],{8398:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=n(5893),i=n(1151);const a={},t="Resource Graph",o={id:"jarvis/jarvis-cd/resource-graph",title:"Resource Graph",description:"A resource graph contains a snapshot of the state of a cluster. This",source:"@site/docs/05-jarvis/02-jarvis-cd/03-resource-graph.md",sourceDirName:"05-jarvis/02-jarvis-cd",slug:"/jarvis/jarvis-cd/resource-graph",permalink:"/docs/jarvis/jarvis-cd/resource-graph",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/jarvis/jarvis-cd/getting-started"},next:{title:"Design & Motivation",permalink:"/docs/jarvis/jarvis-cd/design-motivation"}},l={},c=[{value:"Resource Graph Contents",id:"resource-graph-contents",level:2},{value:"Building a Resource Graph Automatically",id:"building-a-resource-graph-automatically",level:2},{value:"Storage Graph",id:"storage-graph",level:2},{value:"Network Graph",id:"network-graph",level:2},{value:"CPU Graph",id:"cpu-graph",level:2},{value:"Memory Graph",id:"memory-graph",level:2},{value:"Querying the Resource Graph",id:"querying-the-resource-graph",level:2},{value:"Future Ideas",id:"future-ideas",level:2}];function h(e){const r={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"resource-graph",children:"Resource Graph"}),"\n",(0,s.jsx)(r.p,{children:"A resource graph contains a snapshot of the state of a cluster. This\nnormalizes machine-specific information which common across jarvis\nrepos. Resource graphs provide query interfaces which avoid having to\nrepeat the same paths all over the place. This section describes the\ncontents of a resource graph and the API available to Jarvis repos."}),"\n",(0,s.jsx)(r.h2,{id:"resource-graph-contents",children:"Resource Graph Contents"}),"\n",(0,s.jsx)(r.p,{children:"The resource graph contains information about the cluster hardware:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Block devices"}),"\n",(0,s.jsx)(r.li,{children:"Device partitions"}),"\n",(0,s.jsx)(r.li,{children:"Filesystem mount points"}),"\n",(0,s.jsx)(r.li,{children:"Capacities"}),"\n",(0,s.jsx)(r.li,{children:"Network protocols"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"NOTE: The resource-graph utility command depends on:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"fi_info"}),"\n",(0,s.jsx)(r.li,{children:"chi-nettest"}),"\n",(0,s.jsx)(r.li,{children:"lsblk"}),"\n",(0,s.jsx)(r.li,{children:"df"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"These are installed automatically with the spack package."}),"\n",(0,s.jsx)(r.h2,{id:"building-a-resource-graph-automatically",children:"Building a Resource Graph Automatically"}),"\n",(0,s.jsx)(r.p,{children:"Most of the information regarding resource graphs can be introspected.\nThe main things that are not automatic:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"Hostfile: which machines are we introspecting?"}),"\n",(0,s.jsx)(r.li,{children:"What is the per-user mount point of the storage devices?"}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"If you want jarvis to execute distributed programs, provide a hostfile.\nThis is optional for local programs."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"jarvis hostfile set /path/to/hostfile\n"})}),"\n",(0,s.jsx)(r.p,{children:"Build the resource graph"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"jarvis rg build\n"})}),"\n",(0,s.jsxs)(r.p,{children:["The resource graph will be stored under ",(0,s.jsx)(r.code,{children:"~/.jarvis/resource_graph.yaml"})]}),"\n",(0,s.jsx)(r.h2,{id:"storage-graph",children:"Storage Graph"}),"\n",(0,s.jsx)(r.p,{children:"The following command lists all block devices, their type, and their mount points:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"lsblk -o NAME,SIZE,MODEL,TRAN,MOUNTPOINT\n"})}),"\n",(0,s.jsx)(r.p,{children:"The following command lists all mounted filesystems and their capacities:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"df -h\n"})}),"\n",(0,s.jsx)(r.p,{children:"The following command lists all SPDK nvmes:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"spdk_nvme list -c\n"})}),"\n",(0,s.jsx)(r.p,{children:"NOTE: SPDK is not currently implemented"}),"\n",(0,s.jsx)(r.p,{children:"The storage resource graph parses these commands automatically."}),"\n",(0,s.jsx)(r.h2,{id:"network-graph",children:"Network Graph"}),"\n",(0,s.jsx)(r.p,{children:"To build the network graph, we collect the outputs from the following command:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"fi_info\n"})}),"\n",(0,s.jsx)(r.p,{children:"This will store the network information available per host."}),"\n",(0,s.jsx)(r.p,{children:"We use a utility named chi-nettest to identify properties of networks. Mainly,\nwe use this program to detect whether we can send data over it."}),"\n",(0,s.jsx)(r.h2,{id:"cpu-graph",children:"CPU Graph"}),"\n",(0,s.jsx)(r.p,{children:"CPU information can be helpful for determining information such as the number\nof threads to use for a metadata service."}),"\n",(0,s.jsx)(r.p,{children:"TODO."}),"\n",(0,s.jsx)(r.h2,{id:"memory-graph",children:"Memory Graph"}),"\n",(0,s.jsx)(r.p,{children:"Memory information can be useful for determining things like cache sizes."}),"\n",(0,s.jsx)(r.p,{children:"TODO."}),"\n",(0,s.jsx)(r.h2,{id:"querying-the-resource-graph",children:"Querying the Resource Graph"}),"\n",(0,s.jsx)(r.p,{children:"The resource graph can be queried for network and storage info."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-python",children:"from jarvis_util import *\n\nrg = ResourceGraph()\nrg.find_storage(shared=True, needs_root=False)\n"})}),"\n",(0,s.jsx)(r.h2,{id:"future-ideas",children:"Future Ideas"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"What if we have a smart NIC?"}),"\n",(0,s.jsx)(r.li,{children:"What if we have FPGAs and ASICs?"}),"\n"]})]})}function d(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>t});var s=n(7294);const i={},a=s.createContext(i);function t(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);