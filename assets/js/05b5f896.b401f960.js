"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[4336],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=i.createContext({}),s=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return i.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),g=r,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||p;return t?i.createElement(m,a(a({ref:n},c),{},{components:t})):i.createElement(m,a({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var p=t.length,a=new Array(p);a[0]=g;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[u]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<p;s++)a[s]=t[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7785:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var i=t(7462),r=(t(7294),t(3905));const p={},a=void 0,l={unversionedId:"Jarvis/jarvis-cd/Pipelines-with-Python/Pipeline-Python-API",id:"Jarvis/jarvis-cd/Pipelines-with-Python/Pipeline-Python-API",title:"Pipeline-Python-API",description:"This guide documents how to use Jarvis within a python script. To this point,",source:"@site/docs/05-Jarvis/02-jarvis-cd/07-Pipelines-with-Python/01-Pipeline-Python-API.md",sourceDirName:"05-Jarvis/02-jarvis-cd/07-Pipelines-with-Python",slug:"/Jarvis/jarvis-cd/Pipelines-with-Python/Pipeline-Python-API",permalink:"/docs/Jarvis/jarvis-cd/Pipelines-with-Python/Pipeline-Python-API",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Building-A-Jarvis-Package",permalink:"/docs/Jarvis/jarvis-cd/Building-A-Jarvis-Package/"},next:{title:"Dependencies",permalink:"/docs/Jarvis/jarvis-cd/Packages/CM1"}},o={},s=[],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This guide documents how to use Jarvis within a python script. To this point,\nwe have demonstrated the Jarvis CLI. However, the Python API can be used\nfor building more complex benchmarks."),(0,r.kt)("h1",{id:"61-importing-jarvis-cd"},"6.1. Importing Jarvis CD"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from jarvis_cd.basic.pkg import Pipeline\n")),(0,r.kt)("h1",{id:"62-creating-a-pipeline"},"6.2. Creating a Pipeline"),(0,r.kt)("p",null,"To create a pipeline and save the environment for the pipeline:"),(0,r.kt)("p",null,"USAGE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().create(pipeline_id).build_env().save()\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().create('gs-hermes').build_env().save()\n")),(0,r.kt)("p",null,"NOTE: create() will not override any data if the pipeline already exists."),(0,r.kt)("h1",{id:"63-loading-an-existing-pipeline"},"6.3. Loading an Existing Pipeline"),(0,r.kt)("p",null,"USAGE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().load(pipeline_id=None)\n")),(0,r.kt)("p",null,"The following will load the currently-focused pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().load()\n")),(0,r.kt)("p",null,"The following will load the pipeline with a particular name"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline = Pipeline().load('gs-hermes')\n")),(0,r.kt)("h1",{id:"65-append-pkgs-to-a-pipeline"},"6.5. Append Pkgs to a Pipeline"),(0,r.kt)("p",null,"USAGE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pipeline.append(pkg_type, pkg_id=None, do_configure=True, **kwargs)\n"""\nCreate and append a pkg to the pipeline\n\n:param pkg_type: The type of pkg to create (e.g., OrangeFS)\n:param pkg_id: Semantic name of the pkg to create\n:param do_configure: Whether to configure while appending\n:param kwargs: Any parameters the user want to configure in the pkg\n:return: self\n"""\n')),(0,r.kt)("p",null,"The following will add Hermes to the pipeline with a sleep of 10"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.append('hermes', 'sleep'=10)\npipeline.append('hermes_mpiio')\npipeline.append('gray_scott')\npipeline.save()\n")),(0,r.kt)("h1",{id:"66-configure-a-pkg-in-the-pipeline"},"6.6. Configure a Pkg in the Pipeline"),(0,r.kt)("p",null,"USAGE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pkg = pipeline.get_pkg(pkg_id)\npkg.configure(**kwargs)\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pkg = pipline.get_pkg('hermes')\npkg.configure(sleep=5).save()\n")),(0,r.kt)("h1",{id:"67-unlink--remove-pkgs-from-a-pipeline"},"6.7. Unlink / Remove Pkgs from a Pipeline"),(0,r.kt)("p",null,"Unlink will simply remove the program from the Jarvis config, but not\ndestroy its contents. Unlinked pkgs can be re-linked using append without\nlosing the configuration data."),(0,r.kt)("p",null,"Remove ereases the pkg from the filesystem entirely."),(0,r.kt)("p",null,"USAGE:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.remove(pkg_id).save()\npipeline.unlink(pkg_id).save()\n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.remove('hermes').save()\n")),(0,r.kt)("h1",{id:"68-run-a-pipeline"},"6.8. Run a Pipeline"),(0,r.kt)("p",null,"To run the Pipeline end-to-end:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.run()\n")),(0,r.kt)("h1",{id:"69-destroy-a-pipeline"},"6.9. Destroy a Pipeline"),(0,r.kt)("p",null,"To destroy a Pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pipeline.destroy()\n")))}d.isMDXComponent=!0}}]);