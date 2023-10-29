"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[5523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),f=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=f(n),d=a,m=c["".concat(l,".").concat(d)]||c[d]||p[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,i[1]=s;for(var f=2;f<o;f++)i[f]=n[f];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},601:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>f});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Hermes/Hermes-components/Buffer-Pool",id:"Hermes/Hermes-components/Buffer-Pool",title:"Buffer-Pool",description:"The main idea behind the Buffer Pool is to avoid the runtime",source:"@site/docs/03-Hermes/06-Hermes-components/02-Buffer-Pool.md",sourceDirName:"03-Hermes/06-Hermes-components",slug:"/Hermes/Hermes-components/Buffer-Pool",permalink:"/docs/Hermes/Hermes-components/Buffer-Pool",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buffer-Organizer",permalink:"/docs/Hermes/Hermes-components/Buffer-Organizer"},next:{title:"Buffering-Target",permalink:"/docs/Hermes/Hermes-components/Buffering-Target"}},l={},f=[{value:"Buffers and BufferIDs",id:"buffers-and-bufferids",level:2},{value:"Buffer Pool Layout",id:"buffer-pool-layout",level:2},{value:"Initialization",id:"initialization",level:3},{value:"API",id:"api",level:2},{value:"Buffer Pool Visualizer",id:"buffer-pool-visualizer",level:2}],u={toc:f},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The main idea behind the ",(0,a.kt)("strong",{parentName:"p"},"Buffer Pool")," is to avoid the runtime\noverhead of memory allocation each time Hermes wishes to buffer data.\nInstead, we pre-allocate a pool of fixed sized (though the size groups\nare configurable) buffers that can be reused throughout an application\nrun. We allocate memory and reserve file system space on startup and\ndivide the available resources into buffers which the system can\nrequest. We deploy one buffer pool per node for a given Hermes instance."),(0,a.kt)("h2",{id:"buffers-and-bufferids"},"Buffers and BufferIDs"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Buffer"))," represents a portion of storage that Hermes is aware of\nand is allowed to buffer data in. It can be backed by various storage\ndevices (RAM, NVMe, SSD, burst buffer, parallel file system, object\nstore, etc.). Each ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"Buffer"))," is identified by a globally unique (per\nHermes application instance) ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferID")," which is an unsigned 64 bit\ninteger divided into the following sections:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"32 bits for the node ID. Each node is assigned a unique integer\nindex (starting at 1, not 0) during Hermes initialization."),(0,a.kt)("li",{parentName:"ul"},"32 bits for header index. This is an index into the array of buffer\nheaders on the corresponding node.")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferID")," of 0 (node id = 0 and header index = 0) signifies the NULL\n",(0,a.kt)("inlineCode",{parentName:"p"},"BufferID"),"."),(0,a.kt)("h2",{id:"buffer-pool-layout"},"Buffer Pool Layout"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Terminology\nBlock : A ",(0,a.kt)("strong",{parentName:"li"},"block")," is the smallest buffering unit available to\nHermes. It defaults to the system's page size (usually 4 KiB on\nLinux) but can be configured to be any value.\nSlab : A ",(0,a.kt)("strong",{parentName:"li"},"slab")," is the collection of all buffers of the same block\nsize. A typical setup would be a buffer pool with 4 slabs where the\nfirst slab is a collection of buffers that are 1 block each, the\nnext slab consists of buffers of 4 blocks each, then 16-block\nbuffers, and 32-block buffers. The number of slabs and number of\nblocks for each slab is configurable through a Hermes configuration\nfile so that it can be tailored to each application's I/O pattern.")),(0,a.kt)("p",null,"[","[../images/BufferPoolLayout.jpg|Buffer Pool Layout]","]"),(0,a.kt)("h3",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"When Hermes initializes, it will read from the Hermes configuration file\nhow much space is available for buffering in each tier. The amount of\nRAM available is allocated as 1 contiguous address space and split into\nslabs and buffer pool metadata. The total amount of metadata is\ncalculated and reserved. The remaining space is split up into slabs,\naccording to the parameters in the configuration file. A free list is\nmaintained for each slab of buffers. Buffers are marked as in use or\nnot. When the system requests buffers, the buffer pool simply returns\nthe first item from the free list, and freeing buffers translates to\npushing them onto the head of the free list."),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("p",null,"The primary consumer of the buffer pool API is the Hermes API.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Bucket::Put")," is the primary path that will request buffers, and\n",(0,a.kt)("inlineCode",{parentName:"p"},"Bucket::Delete")," will release buffers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"std::vector<hermes::BufferID> GetBuffers(const hermes::PlacementSchema &schema);\nvoid ReleaseBuffers(const std::vector<hermes::BufferID> &buffer_ids);\n")),(0,a.kt)("p",null,"Most operations deal with ",(0,a.kt)("inlineCode",{parentName:"p"},"BufferID"),"s, but when the data itself must be\naccessed (e.g., when an I/O client wises to flush buffers to the PFS)\neach ID contains all the information required to get to the actual data."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Split and Merge")),(0,a.kt)("p",null,"In addition, if the system finds that small buffers are underutilized\nwhile large buffers are exhausted, it can merge unused small buffers\ninto larger buffers for better utilization. Conversely, if large buffers\nare underutilized, it can split large buffers into small buffers."),(0,a.kt)("h2",{id:"buffer-pool-visualizer"},"Buffer Pool Visualizer"),(0,a.kt)("p",null,"To facilitate testing and debugging, we've developed a tool to display a\ngraphical view of the state of a buffer pool. The buffer visualization\nupdates in real time by simply reading the buffer pool shared memory, so\nwe can watch how buffers get used and freed as an application executes,\nand it can be attached and detached to/from any running application.\nBelow is a visualization of a buffer pool with 4 slabs. The red slab is\nmade of 1-block (4 KiB in this case) buffers, the yellow of 4-block\nbuffers, the green of 16 block buffers, and the blue of 32-block\nbuffers. Note that the relative sizes are preserved. The space above the\nmagenta line is directly mapped to the RAM buffers in shared memory.\nBelow the magenta line we see the total headers, including those in use\n(green) and unused (grey). In the initial state, we have some unused\nheaders to facilitate splitting buffers."),(0,a.kt)("p",null,"[","[../images/buffer_pool_visualizer_default.png]","]"),(0,a.kt)("p",null,"Here we have merged the yellow 4-block slab into the green 16-block\nslab. We can also see that fewer headers are in use because we now have\nfewer buffers."),(0,a.kt)("p",null,"[","[../images/buffer_pool_visualizer_merge.png]","]"),(0,a.kt)("p",null,"Here we have split all slabs into the smallest possible buffers,\nresulting in one slab of 1-block buffers. Here every header is used, and\nthis is the maximum number of buffers the system can support for this\nparticular configuration."),(0,a.kt)("p",null,"[","[../images/buffer_pool_visualizer_split.png]","]"),(0,a.kt)("p",null,"Development on the visualizer occurs on an as-needed basis, but should\nthe need arise, it would be great to be able to zoom in and out, and\nhover over buffers to see actual data."))}p.isMDXComponent=!0}}]);