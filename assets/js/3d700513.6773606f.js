"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[989],{8297:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>u});var a=i(5893),s=i(1151),r=i(3161);const n={title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata"},o="Coeus: Accelerating Scientific Insights Using Enriched Metadata",c={type:"mdx",permalink:"/research/projects/coeus",source:"@site/src/pages/research/projects/coeus.mdx",title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata",description:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system",frontMatter:{title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata"},unlisted:!1},d={},u=[];function l(e){const t={h1:"h1",p:"p",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"coeus-accelerating-scientific-insights-using-enriched-metadata",children:"Coeus: Accelerating Scientific Insights Using Enriched Metadata"}),"\n",(0,a.jsx)(r.Z,{projectId:"coeus"}),"\n",(0,a.jsx)(t.p,{children:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system\nto calculate derived quantities and support complex queries on scientific data (simulation and observational) as well\nas optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support\nthe scientific discovery process."})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},3161:(e,t,i)=>{i.d(t,{Z:()=>n});i(7294);var a=i(512),s=i(866),r=i(5893);function n(e){let{addMargin:t=!0,projectId:i}=e;const{isOpenSource:n=!1,isOurs:o=!1,type:c}=(0,s.R)(i),d="funded"===c;return d||n||o?(0,r.jsxs)("div",{className:(0,a.Z)(t&&"margin-bottom--md"),style:{lineHeight:1},children:[o&&(0,r.jsx)("span",{className:"badge badge--primary margin-horiz--xs",children:"GRC-LED"}),d&&(0,r.jsx)("span",{className:"badge badge--success margin-horiz--xs",children:"FUNDED"}),n&&(0,r.jsx)("span",{className:"badge badge--secondary margin-horiz--xs",children:"OPEN SOURCE"})]}):null}},866:(e,t,i)=>{i.d(t,{R:()=>r,Z:()=>s});const a=[{id:"aces",name:"ACES",title:"ACES: Accelerating Sparse Matrix Multiplication with Adaptive Execution Flow and Concurrency-Aware Cache Optimizations",shortDescription:"ACES accelerates sparse matrix multiplications by dynamically adjusting execution flows and using concurrency-aware cache management to reduce data movement and optimize performance.",link:"/research/projects/aces",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"coeus",name:"Coeus",title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata",shortDescription:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system to calculate derived quantities and support complex queries on scientific data (simulation and observational) as well as optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support the scientific discovery process.",link:"/research/projects/coeus",isFeatured:!0,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"chrome",name:"CHROME",title:"CHROME: Concurrency-Aware Holistic Cache Management Framework with Online Reinforcement Learning",shortDescription:"CHROME improves cache management through a concurrency-aware framework that integrates cache replacement, bypassing, and prefetching using online reinforcement learning. This holistic approach dynamically optimizes cache decisions, adapting to workload changes and enhancing cache efficiency across multi-core systems.",link:"/research/projects/chrome",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"chronolog",name:"ChronoLog",title:"ChronoLog: A High-Performance Storage Infrastructure for Activity and Log Workloads",shortDescription:"HPC applications generate more data than storage systems can handle, and it is becoming increasingly important to store activity (log) data generated by people and applications. ChronoLog is a hierarchical, distributed log store that leverages physical time to achieve log ordering and reduce contention while utilizing storage tiers to elastically scale the log capacity.",link:"/research/projects/chronolog",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"iris",name:"IRIS",title:"IRIS: I/O Redirection Via Integrated Storage",shortDescription:"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers, applications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized for certain applications but does not perform well for others. IRIS is a unified storage access system that bridges the semantic gap between filesystems and object stores.",link:"/research/projects/iris",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"hermes",name:"Hermes",title:"Hermes: Extending the HDF Library to Support Intelligent I/O Buffering for Deep Memory and Storage Hierarchy System",shortDescription:"To reduce the I/O bottleneck, complex storage hierarchies have been introduced. However, managing this complexity should not be left to application developers. Hermes is a middeware library that automatically manages buffering in heterogeneous storage environments.",link:"/research/projects/hermes",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"labios",name:"Labios",title:"LABIOS: A Distributed Label-Based I/O System",shortDescription:"HPC and Big Data environments have diverged over the years, resulting in diverging and even conflicting I/O requirements. Labios aims to address the challenges vital to HPC + Big Data Convergence",link:"/research/projects/labios",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"dtio",name:"DTIO",title:"DTIO: A Data Task I/O Runtime",shortDescription:"In partnership with Argonne National Laboratory, DTIO investigates the use of a task framework for unifying complex I/O stacks and providing features such as resilience, fault-tolerance, and task replay.",link:"/research/projects/dtio",isFeatured:!1,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"viper",name:"Viper",title:"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models",shortDescription:"Within a DL workflow, exchanging DNN models through PFS may result in  high model update latency and discovery latency. Moreover, model update frequency affects both training and inference performance. Viper is an I/O framework aiming to accelerate model discovery and delivery, and to find an optimal model checkpoint schedule to balance the trade-off.",link:"/research/projects/viper",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"dayu",name:"DaYu",title:"DaYu: Optimizing Distributed Scientific Workflows by Decoding Dataflow Semantics and Dynamics",shortDescription:"Nowadays, distributed scientific workflows encounter challenges in data movement through storage systems. DaYu, by capturing the mapping of data objects to I/O operations, can uncover new insights for optimizing workflow data movement.",link:"/research/projects/dayu",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"wisio",name:"WisIO",title:"WisIO: Automated I/O Bottleneck Detection via Multi-Perspective Views for HPC Workloads",shortDescription:"Explore WisIO, an automated I/O bottleneck detection tool with multi-perspective views for I/O trace data analysis. Overcoming large-scale I/O challenges, WisIO utilizes distributed computing and an extensible rule engine for tailored solutions. Elevate your I/O analysis in HPC environments with WisIO.",link:"/research/projects/wisio",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"student"},{id:"storehub",name:"StoreHub",title:"StoreHub",shortDescription:"StoreHub is a collaborative platform designed to advance data storage research by providing a specialized infrastructure that meets the unique needs of researchers. It brings together experts handling large amounts of data, focusing on I/O performance, and developing innovative storage solutions, making it a vital resource for the community.",link:"/research/projects/storehub",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"}],s=a;function r(e){return a.find((t=>t.id===e))}},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>n});var a=i(7294);const s={},r=a.createContext(s);function n(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);