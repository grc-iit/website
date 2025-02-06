"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[3985],{7532:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"jarvis/jarvis-cd/custom-repos","title":"Custom Repos","description":"There are cases where your organization may have packages used internally and","source":"@site/docs/05-jarvis/02-jarvis-cd/07-custom-repos.md","sourceDirName":"05-jarvis/02-jarvis-cd","slug":"/jarvis/jarvis-cd/custom-repos","permalink":"/docs/jarvis/jarvis-cd/custom-repos","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Pipeline Tests","permalink":"/docs/jarvis/jarvis-cd/pipeline-tests"},"next":{"title":"Building a Package","permalink":"/docs/jarvis/jarvis-cd/building-package"}}');var o=n(4848),a=n(8453);const i={},t="Custom Repos",c={},l=[{value:"Repo structure",id:"repo-structure",level:2},{value:"Register a custom repo",id:"register-a-custom-repo",level:2},{value:"Creating pkgs from a template",id:"creating-pkgs-from-a-template",level:2},{value:"Promoting a repo",id:"promoting-a-repo",level:2},{value:"Remove a repo from consideration",id:"remove-a-repo-from-consideration",level:2}];function p(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"custom-repos",children:"Custom Repos"})}),"\n",(0,o.jsx)(r.p,{children:"There are cases where your organization may have packages used internally and\ndo not want to have to wait to be integrated into the builtin repo."}),"\n",(0,o.jsx)(r.h2,{id:"repo-structure",children:"Repo structure"}),"\n",(0,o.jsx)(r.p,{children:"Custom repos have the following structure:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"my_org_name\n\u2514\u2500\u2500 my_org_name\n    \u2514\u2500\u2500 orangefs\n        \u2514\u2500\u2500 package.py\n"})}),"\n",(0,o.jsx)(r.h2,{id:"register-a-custom-repo",children:"Register a custom repo"}),"\n",(0,o.jsx)(r.p,{children:"You can then register the repo as follows:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"jarvis repo add /path/to/my_org_name\n"})}),"\n",(0,o.jsx)(r.p,{children:"Whenever a new repo is added, it will be the first place\njarvis searches for pkgs."}),"\n",(0,o.jsx)(r.h2,{id:"creating-pkgs-from-a-template",children:"Creating pkgs from a template"}),"\n",(0,o.jsx)(r.p,{children:"You can then add pkgs to the repo as follows:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"jarvis repo create [name] [pkg_class]\n"})}),"\n",(0,o.jsx)(r.p,{children:"pkg_class can be one of:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"service"}),"\n",(0,o.jsx)(r.li,{children:"app"}),"\n",(0,o.jsx)(r.li,{children:"interceptor"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"For example:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"jarvis repo create hermes service\n"})}),"\n",(0,o.jsx)(r.p,{children:"The repo will then look as follows:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{children:"my_org_name\n\u2514\u2500\u2500 my_org_name\n    \u251c\u2500\u2500 hermes\n    \u2502\xa0\xa0 \u2514\u2500\u2500 package.py\n    \u2514\u2500\u2500 orangefs\n        \u2514\u2500\u2500 package.py\n"})}),"\n",(0,o.jsx)(r.h2,{id:"promoting-a-repo",children:"Promoting a repo"}),"\n",(0,o.jsx)(r.p,{children:"Jarvis searches repos in a certain order. To make a repo the first place\nthat jarvis searches, run:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"jarvis repo promote [repo_name]\n"})}),"\n",(0,o.jsx)(r.h2,{id:"remove-a-repo-from-consideration",children:"Remove a repo from consideration"}),"\n",(0,o.jsx)(r.p,{children:"Sometimes a repo needs to be removed entirely from consideration.\nTo do this, run:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"jarvis repo remove [repo_name]\n"})}),"\n",(0,o.jsx)(r.p,{children:"This will not destroy the contents of the repo, it will simply unregister\nthe repo from Jarvis."})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>t});var s=n(6540);const o={},a=s.createContext(o);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);