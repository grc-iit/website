"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[9864],{8442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var i=a(5893),r=a(1151),s=(a(7294),a(4880));function n(e){let{data:t,isSorted:a=!1}=e;return(0,i.jsx)("div",{className:"container",children:(0,i.jsx)("div",{className:"row",children:(a?t.sort(((e,t)=>e.name.localeCompare(t.name))):t).map((e=>(0,i.jsx)(s.Z,{project:e},e.id)))})})}var o=a(866);const c={title:"Projects",hide_table_of_contents:!0},d="Projects",l={type:"mdx",permalink:"/research/projects/",source:"@site/src/pages/research/projects/index.mdx",title:"Projects",frontMatter:{title:"Projects",hide_table_of_contents:!0},unlisted:!1},u={},p=[];function m(e){const t={h1:"h1",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"projects",children:"Projects"}),"\n",(0,i.jsx)(n,{data:o.Z,isSorted:!0})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},5194:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var i=a(512),r=a(866);const s={badgeDarker:"badgeDarker_Lm_2"};var n=a(5893);function o(e){let{addMargin:t=!0,projectId:a}=e;const{isOpenSource:o=!1,isOurs:c=!1,type:d}=(0,r.R)(a),l="funded"===d;return l||o||c?(0,n.jsxs)("div",{className:(0,i.Z)(t&&"margin-bottom--md"),style:{lineHeight:1},children:[c&&(0,n.jsx)("span",{className:"badge badge--primary margin-horiz--xs",children:"GRC-LED"}),l&&(0,n.jsx)("span",{className:"badge badge--success margin-horiz--xs",children:"FUNDED"}),o&&(0,n.jsx)("span",{className:(0,i.Z)("badge badge--secondary margin-horiz--xs",s.badgeDarker),children:"OPEN SOURCE"})]}):null}},4880:(e,t,a)=>{a.d(t,{Z:()=>c});var i=a(3692),r=(a(7294),a(512)),s=a(5194);const n={card:"card_wAK3",cardDarker:"cardDarker_TeYg"};var o=a(5893);function c(e){let{project:t,isThemeLight:a=!1}=e;const{id:c,link:d,name:l,title:u,shortDescription:p}=t;return(0,o.jsx)("div",{className:"col col--4 margin-bottom--lg",children:(0,o.jsxs)("div",{className:(0,r.Z)("card text--center",n.card,!a&&n.cardDarker),children:[(0,o.jsxs)("div",{className:"card__header",children:[(0,o.jsx)("h3",{children:u}),(0,o.jsx)(s.Z,{addMargin:!1,projectId:c})]}),(0,o.jsx)("div",{className:"card__body",children:(0,o.jsx)("p",{children:p})}),(0,o.jsx)("div",{className:"card__footer",children:(0,o.jsxs)(i.Z,{className:"button button--primary button--block",href:d,children:["Learn more about ",l]})})]})})}},866:(e,t,a)=>{a.d(t,{R:()=>s,Z:()=>r});const i=[{id:"iowarp",name:"IOWarp",title:"IOWarp: Advanced Data Management for Scientific Workflows",shortDescription:"IOWarp is a comprehensive data management platform designed to address the unique challenges in scientific workflows that integrate simulation, analytics, and Artificial Intelligence (AI). IOWarp builds on existing storage infrastructures, optimizing data flow and providing a scalable, adaptable platform for managing diverse data needs in modern scientific workflows, particularly those augmented by AI.",link:"/research/projects/iowarp",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"chronolog",name:"ChronoLog",title:"ChronoLog: A High-Performance Storage Infrastructure for Activity and Log Workloads",shortDescription:"HPC applications generate more data than storage systems can handle, and it is becoming increasingly important to store activity (log) data generated by people and applications. ChronoLog is a hierarchical, distributed log store that leverages physical time to achieve log ordering and reduce contention while utilizing storage tiers to elastically scale the log capacity.",link:"/research/projects/chronolog",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"coeus",name:"Coeus",title:"Coeus: Accelerating Scientific Insights Using Enriched Metadata",shortDescription:"In collaboration with Sandia and Oak Ridge National Laboratories, coeus investigate the use of an active storage system to calculate derived quantities and support complex queries on scientific data (simulation and observational) as well as optimizing data placement across the storage hierarchy, with awareness of the resource limitations, to better support the scientific discovery process.",link:"/research/projects/coeus",isFeatured:!0,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"dayu",name:"DaYu",title:"DaYu: Optimizing Distributed Scientific Workflows by Decoding Dataflow Semantics and Dynamics",shortDescription:"Nowadays, distributed scientific workflows encounter challenges in data movement through storage systems. DaYu, by capturing the mapping of data objects to I/O operations, can uncover new insights for optimizing workflow data movement.",link:"/research/projects/dayu",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"dtio",name:"DTIO",title:"DTIO: A Data Task I/O Runtime",shortDescription:"In partnership with Argonne National Laboratory, DTIO investigates the use of a task framework for unifying complex I/O stacks and providing features such as resilience, fault-tolerance, and task replay.",link:"/research/projects/dtio",isFeatured:!1,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"hermes",name:"Hermes",title:"Hermes: Extending the HDF Library to Support Intelligent I/O Buffering for Deep Memory and Storage Hierarchy System",shortDescription:"To reduce the I/O bottleneck, complex storage hierarchies have been introduced. However, managing this complexity should not be left to application developers. Hermes is a middeware library that automatically manages buffering in heterogeneous storage environments.",link:"/research/projects/hermes",isFeatured:!0,isOpenSource:!0,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"iris",name:"IRIS",title:"IRIS: I/O Redirection Via Integrated Storage",shortDescription:"Various storage solutions exist and require specialized APIs and data models in order to use, which binds developers, applications, and entire computing facilities to using certain interfaces. Each storage system is designed and optimized for certain applications but does not perform well for others. IRIS is a unified storage access system that bridges the semantic gap between filesystems and object stores.",link:"/research/projects/iris",isFeatured:!1,isOpenSource:!0,isOurs:!0,researchStatus:"testing",status:"active",type:"funded"},{id:"labios",name:"Labios",title:"LABIOS: A Distributed Label-Based I/O System",shortDescription:"HPC and Big Data environments have diverged over the years, resulting in diverging and even conflicting I/O requirements. Labios aims to address the challenges vital to HPC + Big Data Convergence",link:"/research/projects/labios",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"optmem",name:"OptMem",title:"Optimization of Memory Architectures: A Foundation Approach",shortDescription:"This project establishes a foundational framework for memory performance modeling and optimization in modern architectures, utilizing simulation and real-system analysis to advance architecture designs for data-intensive applications.",link:"/research/projects/optmem",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"ready",status:"active",type:"funded"},{id:"storehub",name:"StoreHub",title:"StoreHub",shortDescription:"StoreHub is a collaborative platform designed to advance data storage research by providing a specialized infrastructure that meets the unique needs of researchers. It brings together experts handling large amounts of data, focusing on I/O performance, and developing innovative storage solutions, making it a vital resource for the community.",link:"/research/projects/storehub",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"unimcc",name:"UniMCC",title:"UniMCC: Towards A Unified Memory-centric Computing System with Cross-layer Support",shortDescription:"UniMCC addresses memory bottlenecks in data-centric applications with a full-stack, cross-layer system that integrates architecture, SW/HW interfaces, code generation, runtime support, and performance optimization to maximize memory-centric computing's potential.",link:"/research/projects/unimcc",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"viper",name:"Viper",title:"Viper: A High-Performance I/O Framework for Transferring Deep Neural Network Models",shortDescription:"Within a DL workflow, exchanging DNN models through PFS may result in  high model update latency and discovery latency. Moreover, model update frequency affects both training and inference performance. Viper is an I/O framework aiming to accelerate model discovery and delivery, and to find an optimal model checkpoint schedule to balance the trade-off.",link:"/research/projects/viper",isFeatured:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"funded"},{id:"wisio",name:"WisIO",title:"WisIO: Automated I/O Bottleneck Detection via Multi-Perspective Views for HPC Workloads",shortDescription:"Explore WisIO, an automated I/O bottleneck detection tool with multi-perspective views for I/O trace data analysis. Overcoming large-scale I/O challenges, WisIO utilizes distributed computing and an extensible rule engine for tailored solutions. Elevate your I/O analysis in HPC environments with WisIO.",link:"/research/projects/wisio",isFeatured:!1,isOpenSource:!1,isOurs:!0,researchStatus:"r&d",status:"active",type:"student"}],r=i;function s(e){return i.find((t=>t.id===e))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>n});var i=a(7294);const r={},s=i.createContext(r);function n(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:n(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);