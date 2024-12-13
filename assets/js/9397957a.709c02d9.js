"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[440],{3472:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(5893),c=t(1151);const i={},a="Factory Design Pattern",o={id:"hpc-tutorials/cpp-introduction/cpp-factory",title:"Factory Design Pattern",description:"The Factory pattern is used to provide a common interface to construct",source:"@site/docs/02-hpc-tutorials/04-cpp-introduction/10-cpp-factory.md",sourceDirName:"02-hpc-tutorials/04-cpp-introduction",slug:"/hpc-tutorials/cpp-introduction/cpp-factory",permalink:"/docs/hpc-tutorials/cpp-introduction/cpp-factory",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Singleton",permalink:"/docs/hpc-tutorials/cpp-introduction/cpp-singleton"},next:{title:"Mixins",permalink:"/docs/hpc-tutorials/cpp-introduction/cpp-mixins"}},r={},d=[{value:"The Base Class",id:"the-base-class",level:2},{value:"The Derived Classes",id:"the-derived-classes",level:2},{value:"The Factory",id:"the-factory",level:2},{value:"Usage",id:"usage",level:2},{value:"Discussion",id:"discussion",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"factory-design-pattern",children:"Factory Design Pattern"}),"\n",(0,s.jsx)(n.p,{children:"The Factory pattern is used to provide a common interface to construct\nobjects that have a common base class. The main benefit is that you can\ndynamically choose different policies at runtime, instead of forcing a\nspecific policy at compile-time."}),"\n",(0,s.jsx)(n.p,{children:"Let's say we want to make a factory for I/O schedulers. An I/O scheduler\nis a policy to decide the order with which I/O requests are sent to a storage device."}),"\n",(0,s.jsx)(n.h2,{id:"the-base-class",children:"The Base Class"}),"\n",(0,s.jsx)(n.p,{children:"First, we define the base class I/O scheduler."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class IoSched {\n public:\n  virtual void PushRequest() = 0;\n  virtual void PopRequest() = 0;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"We have two methods: push an I/O request and pop an I/O request."}),"\n",(0,s.jsx)(n.h2,{id:"the-derived-classes",children:"The Derived Classes"}),"\n",(0,s.jsx)(n.p,{children:"Now we implement some specific I/O scheduling policies. In this example,\nwe provide RoundRobinSched and DeadlineSched."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"class RoundRobinSched : public IoSched {\n public:\n  void PushRequest() override {}\n  void PopRequest() override {}\n};\n\nclass DeadlineSched : public IoSched {\n public:\n  DeadlineSched(int a, int b) {}\n  void PushRequest() override {}\n  void PopRequest() override {}\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"DeadlineSched takes parameters a & b. RoundRobinSched has no parameters."}),"\n",(0,s.jsx)(n.h2,{id:"the-factory",children:"The Factory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"enum class IoSchedType {\n  kRoundRobin,\n  kDeadline\n};\n\nclass IoSchedFactory {\n public:\n  static std::unique_ptr<IoSched> Get(IoSchedType type) {\n    switch (type) {\n      case IoSchedType::kRoundRobin:\n        return std::make_unique<RoundRobinSched>();\n      case IoSchedType::kDeadline:\n        return std::make_unique<DeadlineSched>(0, 1);\n    }\n  }\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(n.p,{children:"Now you can use the factory to construct your object."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int main() {\n  auto sched = IoSchedFactory::Get(IoSchedType::kRoundRobin);\n  sched->PushRequest();\n  sched->PopRequest();\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"discussion",children:"Discussion"}),"\n",(0,s.jsx)(n.p,{children:"One of the main benefits of the factory design is that you can change policies\ndynamically. I/O schedulers in the Linux kernel for example can be changed at\nany time. Below is an example of using the Factory to dynamically set the\nI/O scheduling policy."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-cpp",children:"int main(int argc, char **argv) {\n  IoSchedType sched_type = static_cast<IoSchedType>(std::stoi(argv[1]));\n  auto sched = IoSchedFactory::Get(sched_type);\n  sched->PushRequest();\n  sched->PopRequest();\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"Factories can have a performance penalty since they require a memory allocation\nto use. However, this penalty is almost always insignificant. If a factory\nmatches your use case, then make your code readable first. If it turns out to\ncause significant performance problems, then fix it later. You can make a custom\nmemory allocator to fix the issue if it's really needed."})]})}function h(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(7294);const c={},i=s.createContext(c);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);