"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[4516],{7479:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"type":"mdx","permalink":"/research/projects/viper","source":"@site/src/pages/research/projects/viper.mdx","title":"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models","description":"Within a DL workflow, the scientific AI application and the inference serving system typically communicate","frontMatter":{"title":"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models"},"unlisted":false}');var r=i(4848),s=i(8453),a=i(4571);const o={title:"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models"},c="Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models",d={},l=[{value:"Background",id:"background",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Approach",id:"approach",level:2},{value:"Evaluation Results",id:"evaluation-results",level:2},{value:"Members",id:"members",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:i(4021).A,width:"200"})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"viper-a-high-performance-io-framework-for-transferring-deep-neural-network-models",children:"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models"})}),"\n",(0,r.jsx)(a.A,{projectId:"viper"}),"\n",(0,r.jsx)(n.p,{children:"Within a DL workflow, the scientific AI application and the inference serving system typically communicate\nthe DNN models through a model repository (e.g., PFS). However, this method may result in high model update\nlatency due to I/O bottlenecks of PFS and high model discovery latency due to the fixed-interval pull-based\nmodel detection mechanism. Moreover, both continuous learning and the scenario that consumer has a limited\ntime window for inferencing increases the model update frequency between producers and consumers. Model update\nfrequency affects both training and inference performance. Viper is a high-performance I/O framework aiming\nto accelerate the model exchange, and to find an optimal model update schedule to achieve high inference\nperformance while keeping low training cost."}),"\n",(0,r.jsx)(n.h2,{id:"background",children:"Background"}),"\n",(0,r.jsx)(n.p,{children:"In the traditional deep learning (DL) workflow:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Producer (Scientific AI Application) typically trains a DNN model offline with a fixed set of input data and then persists the trained model to a model repository for future use"}),"\n",(0,r.jsx)(n.li,{children:"Consumer (Inference Serving System) loads the pre-trained DNN model from the model repository and offers online inference queries for end-user applications"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"However, this offline training is not an ideal choice in two scenarios:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["**Scenario 1: ** Modern scientific DL workflows often operate in dynamic environments where new data is constantly changing and accumulating over time.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"To adapt to data changes, continuous learning is utilized to continuously (re)-train a DNN model by using some online techniques."}),"\n",(0,r.jsx)(n.li,{children:"Continuous learning implies the continuous deployment of the DNN model to keep the model up-to-date"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["**Scenario 2: ** The consumer may have a limited time window for inferences, it may need to start inferencing after the warmup phase in model training on the producer side","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Producer continues training the model while the consumer conducts inferences"}),"\n",(0,r.jsx)(n.li,{children:"This requires the intermediate DNN models to be consistently delivered from the producer to the consumer during training to achieve high inference performance"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:i(6734).A,width:"600"})})}),"\n",(0,r.jsxs)(n.p,{children:["Both scenarios ",(0,r.jsx)(n.strong,{children:"increase the model update frequency"})," between producers and consumers."]}),"\n",(0,r.jsx)(n.h2,{id:"motivation",children:"Motivation"}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:i(4051).A,width:"600"})})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Model update frequency ",(0,r.jsx)(n.strong,{children:"affects both training and inference performance"}),", since a model update operation involves both model checkpointing and model data delivery.E.g.,","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Frequent model updates can enhance inference performance but may slow down training"}),"\n",(0,r.jsx)(n.li,{children:"Infrequent model updates may pose less overhead on training but may degrade the overall inference model accuracy"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Currently, Scientific AI Applications and Inference Serving Systems communicate through a model repository (e.g., PFS), as depicted in Figure (a). This communication method may result in:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"High model update latency"})," due to the I/O bottlenecks caused by concurrent, uncoordinated, small I/O accesses to PFS"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"High model discovery High model discovery latency on consumers"})," due to the static fixed-interval pull-based (e.g., polling) detection mechanism"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Thus, there is a need to 1) ",(0,r.jsx)(n.strong,{children:"balance the trade-off"})," between training and inference performance; 2) ",(0,r.jsx)(n.strong,{children:"accelerate model data discovery and delivery"})," between producers and consumers (Figure b)."]}),"\n",(0,r.jsx)(n.h2,{id:"approach",children:"Approach"}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:i(3914).A,width:"600"})})}),"\n",(0,r.jsx)(n.p,{children:"Viper is a high-performance I/O framework to accelerate DNN models exchange between\nproducers and consumers. It aims to:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Balance the trade-off between training runtime and inference performance"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Viper builds an ",(0,r.jsx)(n.strong,{children:"intelligent inference performance predictor"})," to achieve this object","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Can ",(0,r.jsx)(n.strong,{children:"decide an optimal model checkpoint schedule"})," between producers and consumers"]}),"\n",(0,r.jsx)(n.li,{children:"Supporting two different algorithms for finding the optimal checkpoint schedule"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Accelerate model data transfer"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Viper creates a ",(0,r.jsx)(n.strong,{children:"novel cache-aware data transfer engine"})," to speedup model update between producers and consumers","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Creating a direct data exchange channel for model delivery and utilizes. E.g., the direct GPU-to-GPU or RAM-to-RAM data transfer strategy"}),"\n",(0,r.jsx)(n.li,{children:"Utilizing a lightweight ublish-subscribe notification mechanism to promptly inform the consumer of the model changes."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)("center",{children:(0,r.jsx)("p",{children:(0,r.jsx)("img",{src:i(2676).A,width:"400"})})}),"\n",(0,r.jsx)(n.h2,{id:"evaluation-results",children:"Evaluation Results"}),"\n",(0,r.jsxs)("center",{children:[(0,r.jsx)("h3",{children:"End-to-end Model Update Latency"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"start"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:i(5244).A,width:"300"})}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)("ul",{style:{textAlign:"left"},children:[(0,r.jsx)("li",{children:"The Y-axis shows the end-to-end CANDLE-NT3 model update latency in seconds"}),(0,r.jsx)("li",{children:"Viper improves model update latency by"}),(0,r.jsxs)("ul",{style:{textAlign:"left"},children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"~10x"})," via GPU-to-GPU model transfer strategy"]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("strong",{children:"~3.5x"})," via RAM-to-RAM model transfer strategy"]})]})]})})]}),(0,r.jsx)("h3",{children:"Benefits of Low-latency Model Update Strategy"}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("img",{src:i(950).A,width:"400"})}),(0,r.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:(0,r.jsxs)("ul",{style:{textAlign:"left"},children:[(0,r.jsx)("li",{children:"Application: CANDLE-NT3 model of 4.6GB size"}),(0,r.jsx)("li",{children:"The left Y-axis shows cumulative inference loss over 50000 inference requests"}),(0,r.jsx)("li",{children:"The right Y-axis shows training overhead added by model checkpointing"}),(0,r.jsx)("li",{children:"GPU-to-GPU and RAM-to-RAM model transfer strategies exhibit"}),(0,r.jsxs)("ul",{style:{textAlign:"left"},children:[(0,r.jsx)("li",{children:"lower cumulative inference loss"}),(0,r.jsx)("li",{children:"less training overhead time"})]})]})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"members",children:"Members"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Jie Ye, Illinois Institute of Technology"}),"\n",(0,r.jsx)(n.li,{children:"Jaime Cernuda, Illinois Institute of Technology"}),"\n",(0,r.jsx)(n.li,{children:"Bogdan Nicolae, Argonne National Laboratory"}),"\n",(0,r.jsx)(n.li,{children:"Anthony Kougkas, Illinois Institute of Technology"}),"\n",(0,r.jsx)(n.li,{children:"Xian-He Sun, Illinois Institute of Technology"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},4571:(e,n,i)=>{i.d(n,{A:()=>o});i(6540);var t=i(4164),r=i(1657);const s={badgeDarker:"badgeDarker_Lm_2"};var a=i(4848);function o(e){let{addMargin:n=!0,projectId:i}=e;const{isOpenSource:o=!1,isOurs:c=!1,type:d}=(0,r.G)(i),l="funded"===d;return l||o||c?(0,a.jsxs)("div",{className:(0,t.A)(n&&"margin-bottom--md"),style:{lineHeight:1},children:[c&&(0,a.jsx)("span",{className:"badge badge--primary margin-horiz--xs",children:"GRC-LED"}),l&&(0,a.jsx)("span",{className:"badge badge--success margin-horiz--xs",children:"FUNDED"}),o&&(0,a.jsx)("span",{className:(0,t.A)("badge badge--secondary margin-horiz--xs",s.badgeDarker),children:"OPEN SOURCE"})]}):null}},1657:(e,n,i)=>{i.d(n,{A:()=>r,G:()=>s});const t=[{id:"iowarp",name:"IOWarp",title:"IOWarp: Advanced Data Management for Scientific Workflows",shortDescription:"IOWarp is a comprehensive data management platform designed to address the unique challenges in scientific workflows that integrate simulation, analytics, and Artificial Intelligence (AI). IOWarp builds on existing storage infrastructures, optimizing data flow and providing a scalable, adaptable platform for managing diverse data needs in modern scientific workflows, particularly those augmented by AI.",link:"/research/projects/iowarp",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"chronolog",name:"ChronoLog",title:"ChronoLog: A High-Performance Storage Infrastructure for Activity and Log Workloads",shortDescription:"HPC applications generate more data than storage systems can handle, and it is becoming increasingly important to store activity (log) data generated by people and applications. ChronoLog is a hierarchical, distributed log store that leverages physical time to achieve log ordering and reduce contention while utilizing storage tiers to elastically scale the log capacity.",link:"/research/projects/chronolog",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"coeus",name:"Coeus",title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata",shortDescription:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system to calculate derived quantities and support complex queries on scientific data (simulation and observational) as well as optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support the scientific discovery process.",link:"/research/projects/coeus",isFeatured:!0,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"dayu",name:"DaYu",title:"DaYu: Optimizing Distributed Scientific Workflows by Decoding Dataflow Semantics and Dynamics",shortDescription:"Nowadays, distributed scientific workflows encounter challenges in data movement through storage systems. DaYu, by capturing the mapping of data objects to I/O operations, can uncover new insights for optimizing workflow data movement.",link:"/research/projects/dayu",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"dtio",name:"DTIO",title:"DTIO: A Data Task I/O Runtime",shortDescription:"In partnership with Argonne National Laboratory, DTIO investigates the use of a task framework for unifying complex I/O stacks and providing features such as resilience, fault-tolerance, and task replay.",link:"/research/projects/dtio",isFeatured:!1,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"hermes",name:"Hermes",title:"Hermes: Extending the HDF Library to Support Intelligent I/O Buffering for Deep Memory and Storage Hierarchy System",shortDescription:"To reduce the I/O bottleneck, complex storage hierarchies have been introduced. However, managing this complexity should not be left to application developers. Hermes is a middeware library that automatically manages buffering in heterogeneous storage environments.",link:"/research/projects/hermes",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"iris",name:"IRIS",title:"IRIS: I/O Redirection Via Integrated Storage",shortDescription:"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers, applications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized for certain applications but does not perform well for others. IRIS is a unified storage access system that bridges the semantic gap between filesystems and object stores.",link:"/research/projects/iris",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"labios",name:"Labios",title:"LABIOS: A Distributed Label-Based I/O System",shortDescription:"HPC and Big Data environments have diverged over the years, resulting in diverging and even conflicting I/O requirements. Labios aims to address the challenges vital to HPC + Big Data Convergence",link:"/research/projects/labios",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"optmem",name:"OptMem",title:"Optimization of Memory Architectures: A Foundation Approach",shortDescription:"This project establishes a foundational framework for memory performance modeling and optimization in modern architectures, utilizing simulation and real-system analysis to advance architecture designs for data-intensive applications.",link:"/research/projects/optmem",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"storehub",name:"StoreHub",title:"StoreHub",shortDescription:"StoreHub is a collaborative platform designed to advance data storage research by providing a specialized infrastructure that meets the unique needs of researchers. It brings together experts handling large amounts of data, focusing on I/O performance, and developing innovative storage solutions, making it a vital resource for the community.",link:"/research/projects/storehub",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"unimcc",name:"UniMCC",title:"UniMCC: Towards A Unified Memory-centric Computing System with Cross-layer Support",shortDescription:"UniMCC addresses memory bottlenecks in data-centric applications with a full-stack, cross-layer system that integrates architecture, SW/HW interfaces, code generation, runtime support, and performance optimization to maximize memory-centric computing's potential.",link:"/research/projects/unimcc",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"viper",name:"Viper",title:"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models",shortDescription:"Within a DL workflow, exchanging DNN models through PFS may result in  high model update latency and discovery latency. Moreover, model update frequency affects both training and inference performance. Viper is an I/O framework aiming to accelerate model discovery and delivery, and to find an optimal model checkpoint schedule to balance the trade-off.",link:"/research/projects/viper",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"wisio",name:"WisIO",title:"WisIO: Automated I/O Bottleneck Detection via Multi-Perspective Views for HPC Workloads",shortDescription:"Explore WisIO, an automated I/O bottleneck detection tool with multi-perspective views for I/O trace data analysis. Overcoming large-scale I/O challenges, WisIO utilizes distributed computing and an extensible rule engine for tailored solutions. Elevate your I/O analysis in HPC environments with WisIO.",link:"/research/projects/wisio",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"student"}],r=t;function s(e){return t.find((n=>n.id===e))}},950:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/benefits_low_latency_strategy-f5f6fc2cb955c936c1e9b6fc8cbe4193.png"},2676:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/data_transfer-bd621a0c8a42b3401593200c131b1c32.png"},5244:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/end_to_end_latency-b64732777ddcba119a7224e8cc98fb17.png"},3914:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/high_level_design-33c6a561fda3dd9c72e992691933f5dd.png"},4021:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/logo-95bd4156d3a78ae2165cd6b0cd2d41b8.png"},6734:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/scenario2-3f2e0ace5443aaec287e4fd1dd06be5c.png"},4051:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/viper_motivation-59af44a57af0d841b49966ce02f4c5b6.png"},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);