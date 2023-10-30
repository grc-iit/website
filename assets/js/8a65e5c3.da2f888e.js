"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[2698],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Programming",l={unversionedId:"hermes/programming",id:"hermes/programming",title:"Programming",description:"In this section, we will discuss the general steps of building a program",source:"@site/docs/03-hermes/05-programming.md",sourceDirName:"03-hermes",slug:"/hermes/programming",permalink:"/docs/hermes/programming",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/hermes/configuration"},next:{title:"Buffer Organizer",permalink:"/docs/hermes/components/buffer-organizer"}},s={},c=[{value:"Basic API Example",id:"basic-api-example",level:2},{value:"Basic Deployment",id:"basic-deployment",level:2},{value:"Create a server configuration",id:"create-a-server-configuration",level:3},{value:"Launch the Hermes Daemon",id:"launch-the-hermes-daemon",level:3},{value:"Launch your application",id:"launch-your-application",level:3}],u={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"programming"},"Programming"),(0,a.kt)("p",null,"In this section, we will discuss the general steps of building a program\non top of the Hermes native API. We will focus on the core data structures\nprovided by Hermes -- Buckets and Blobs."),(0,a.kt)("h2",{id:"basic-api-example"},"Basic API Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <hermes.h>\n#include <bucket.h>\n\nint main() {\n  HERMES->Create(hermes::HermesType::kClient);\n  Bucket bkt = hermes->GetBucket("hello");\n  size_t blob_size = KILOBYTES(4);\n  Context ctx;\n\n  for (size_t i = 0; i < num_blobs; ++i) {\n    hermes::Blob blob(blob_size);\n    std::string name = std::to_string(i);\n    char nonce = i % 256;\n    memset(blob.data(), nonce, blob_size);\n    bkt.Put(name, blob, blob_id, ctx);\n  }\n\n  for (size_t i = 0; i < num_blobs; ++i) {\n    std::string name = std::to_string(i);\n    char nonce = i % 256;\n    hermes::Blob blob;\n    bkt.GetBlobId(name, blob_id);\n    bkt.Get(blob_id, blob, ctx);\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HERMES is a singleton macro provided in hermes.h."),(0,a.kt)("li",{parentName:"ul"},"GetBucket will either create a bucket or get the bucket if it exists.\nThis operation is concurrency-safe. I.e., it is guaranteed only one\nthread or process calling this function will create the bucket if it\nDNE."),(0,a.kt)("li",{parentName:"ul"},"Context is optional. It contains the ability to override\ndefaults defined in the server and client configuration files. For\nexample, you can set a custom DPE to use for a blob Put."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hermes::Blob analagous to and std::vector<char>"),". It's not quite the\nsame thing, but we won't go into detail here."),(0,a.kt)("li",{parentName:"ul"},"bkt.Put will put a blob into the bucket. Put destroys all content\nif the blob previously existed. At this time, blobs are considered\nimmutable."),(0,a.kt)("li",{parentName:"ul"},"bkt.Get will get the contents of an entire blob.")),(0,a.kt)("h2",{id:"basic-deployment"},"Basic Deployment"),(0,a.kt)("p",null,"Here we will describe the basic flow of deploying a Hermes program."),(0,a.kt)("h3",{id:"create-a-server-configuration"},"Create a server configuration"),(0,a.kt)("p",null,"Technically, this is optional. Hermes has a\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/HDFGroup/hermes/blob/master/config/hermes_server_default.yaml"},"default server\nconfiguration"),".\nThe main important thing here is defining the storage devices on your machines.\nThe example file has more details."),(0,a.kt)("p",null,"The Hermes server configuration is also described in Section 3."),(0,a.kt)("h3",{id:"launch-the-hermes-daemon"},"Launch the Hermes Daemon"),(0,a.kt)("p",null,"To launch the daemon on a single node, do the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"HERMES_CONF=/path/to/your/hermes_server.yaml \\\nhermes_daemon\n")),(0,a.kt)("p",null,"If you need the daemon on multiple nodes, we support MPI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mpirun -n 4 -ppn 1 --hostfile=hostfile.txt \\\n-genv HERMES_CONF /path/to/your/hermes_server.yaml \\\nhermes_daemon\n")),(0,a.kt)("p",null,"Make sure to only spawn one daemon per node."),(0,a.kt)("h3",{id:"launch-your-application"},"Launch your application"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"HERMES_CONF=/path/to/your/hermes_server.yaml \\\nHERMES_CLEINT_CONF=/path/to/your/hermes_client.yaml \\\n./myprogram\n")))}p.isMDXComponent=!0}}]);