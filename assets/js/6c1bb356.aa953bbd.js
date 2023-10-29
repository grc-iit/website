"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[2968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),c=p(n),h=s,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},f),{},{components:n})):r.createElement(m,i({ref:t},f))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,i=new Array(o);i[0]=h;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[c]="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=n(7462),s=(n(7294),n(3905));const o={},i=void 0,a={unversionedId:"Jarvis/Jarvis-utils/Hostfile/Hostfile",id:"Jarvis/Jarvis-utils/Hostfile/Hostfile",title:"Hostfile",description:"Hostfiles contain a set of machines.",source:"@site/docs/05-Jarvis/01-Jarvis-utils/05-Hostfile/05-Hostfile.md",sourceDirName:"05-Jarvis/01-Jarvis-utils/05-Hostfile",slug:"/Jarvis/Jarvis-utils/Hostfile/",permalink:"/docs/Jarvis/Jarvis-utils/Hostfile/",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Argument-Parsing",permalink:"/docs/Jarvis/Jarvis-utils/Argument-Parsing/"},next:{title:"jarvis-cd",permalink:"/docs/Jarvis/jarvis-cd/jarvis-cd/"}},l={},p=[],f={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(c,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Hostfiles contain a set of machines."),(0,s.kt)("h1",{id:"41-host-text-files"},"4.1. Host Text Files"),(0,s.kt)("p",null,"Hostfiles can be stored as text files on a filesystem.\nThey have the following syntax:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"ares-comp-01\nares-comp-[02-04]\nares-comp-[05-09,11,12-14]-40g\n")),(0,s.kt)("h1",{id:"42-hostfile-import"},"4.2. Hostfile Import"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"from jarvis_util.util.hostfile import Hostfile\n")),(0,s.kt)("h1",{id:"43-hostfile-constructor"},"4.3. Hostfile Constructor"),(0,s.kt)("p",null,"The hostfile has the following constructor:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},'class Hostfile:\n    """\n    Parse a hostfile or store a set of hosts passed in manually.\n    """\n\n    def __init__(self, hostfile=None, all_hosts=None, all_hosts_ip=None,\n                 text=None, find_ips=True):\n        """\n        Constructor. Parse hostfile or store existing host list.\n\n        :param hostfile: The path to the hostfile\n        :param all_hosts: a list of strings representing all hostnames\n        :param all_hosts_ip: a list of strings representing all host IPs\n        :param text: Text of a hostfile\n        :param find_ips: Whether to construct host_ip and all_host_ip fields\n        """\n')),(0,s.kt)("h1",{id:"44-hostfile-for-the-current-machine"},"4.4. Hostfile for the current machine"),(0,s.kt)("p",null,"To get the localhost file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"hostfile = Hostfile()\n")),(0,s.kt)("h1",{id:"45-hostfile-from-a-filesystem"},"4.5. Hostfile from a filesystem"),(0,s.kt)("p",null,"To load a hostfile from the filesystem:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"hostfile = Hostfile(hostfile=f'{HERE}/test_hostfile.txt')\n")),(0,s.kt)("h1",{id:"46-host-names-and-ips"},"4.6. Host names and IPs"),(0,s.kt)("p",null,"To get the host names and IP addresses, the Hostfile stores the ",(0,s.kt)("inlineCode",{parentName:"p"},"hosts"),"\nand ",(0,s.kt)("inlineCode",{parentName:"p"},"hosts_ip")," variables. They are lists of strings."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"hostfile = Hostfile()\nprint(hostfile.hosts)\nprint(hostfile.hosts_ip)\n")),(0,s.kt)("p",null,"Output:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"['localhost']\n['127.0.0.1']\n")))}u.isMDXComponent=!0}}]);