"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[5674],{3628:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});var i=s(5893),a=s(1151);const r={},l="Building Hermes",t={id:"hermes/building-hermes",title:"Building Hermes",description:"Dependencies",source:"@site/docs/03-hermes/02-building-hermes.md",sourceDirName:"03-hermes",slug:"/hermes/building-hermes",permalink:"/docs/hermes/building-hermes",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Main Scenario",permalink:"/docs/hermes/main-scenario"},next:{title:"Deploying Hermes",permalink:"/docs/hermes/deploying-hermes"}},c={},o=[{value:"Dependencies",id:"dependencies",level:2},{value:"Bootstrapping Spack",id:"bootstrapping-spack",level:2},{value:"Install Spack",id:"install-spack",level:3},{value:"Clone the GRC Spack Repo",id:"clone-the-grc-spack-repo",level:3},{value:"Add External Dependencies",id:"add-external-dependencies",level:3},{value:"Installing Hermes on a new machine with Spack",id:"installing-hermes-on-a-new-machine-with-spack",level:2},{value:"Why is my spack installation failing?",id:"why-is-my-spack-installation-failing",level:3},{value:"Environment errors",id:"environment-errors",level:4},{value:"Dependency conflicts",id:"dependency-conflicts",level:4},{value:"Compilation errors",id:"compilation-errors",level:4},{value:"Fetcher errors",id:"fetcher-errors",level:4},{value:"Corruption",id:"corruption",level:4},{value:"Building Hermes with CMake",id:"building-hermes-with-cmake",level:2},{value:"Install Dependencies",id:"install-dependencies",level:3},{value:"Hermes",id:"hermes",level:4},{value:"(Optional) SCSPKG",id:"optional-scspkg",level:4},{value:"Build Hermes",id:"build-hermes",level:3},{value:"Load Hermes dependencies",id:"load-hermes-dependencies",level:4},{value:"(Optional) Create a Hermes SCSPKG repo",id:"optional-create-a-hermes-scspkg-repo",level:4},{value:"Compile and Install",id:"compile-and-install",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"building-hermes",children:"Building Hermes"}),"\n",(0,i.jsx)(n.h2,{id:"dependencies",children:"Dependencies"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A C++ compiler that supports C++ 17. GCC 9.4 is the minimum version of GCC that Hermes was tested with."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://mochi.readthedocs.io/en/latest/installing.html",children:"Thallium"})," - RPC library for HPC. Use a version greater than ",(0,i.jsx)(n.code,{children:"0.5"})," for RoCE support."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jbeder/yaml-cpp",children:"yaml-cpp"})," - YAML file parser"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/lukemartinlogan/hermes_shm",children:"hermes_shm"}),": A library containing shared-memory data structures, configuration parsing, and various helper utilities"]}),"\n",(0,i.jsx)(n.li,{children:"HDF5 1.14.0 if compiling with VFD"}),"\n",(0,i.jsx)(n.li,{children:"MPI-IO adapter only tested with MPICH and OpenMPI."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bootstrapping-spack",children:"Bootstrapping Spack"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://spack.io/",children:"Spack"})," is the easiest way to get Hermes and all its dependencies installed."]}),"\n",(0,i.jsx)(n.h3,{id:"install-spack",children:"Install Spack"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'cd ${HOME}\ngit clone https://github.com/spack/spack.git\ncd spack\ngit checkout tags/v0.22.2\necho ". ${PWD}/share/spack/setup-env.sh" >> ~/.bashrc\nsource ~/.bashrc\n'})}),"\n",(0,i.jsx)(n.h3,{id:"clone-the-grc-spack-repo",children:"Clone the GRC Spack Repo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cd ${HOME}\ngit clone https://github.com/grc-iit/grc-repo\nspack repo add grc-repo\n"})}),"\n",(0,i.jsx)(n.h3,{id:"add-external-dependencies",children:"Add External Dependencies"}),"\n",(0,i.jsx)(n.p,{children:"Introspect your machine to ensure that spack considers software already present on your machine. If there are modulefiles, make sure all relevant modulefiles have been loaded before executing this command.\nYou should ensure that any modules relating to networking (e.g., libfabric or UCX) and MPI are loaded, since they are likely specialized to your machine:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack external find\nspack external find python\n"})}),"\n",(0,i.jsx)(n.p,{children:"Third, ensure that a recent compiler is added in spack. Hermes and some of its dependencies use the full C++17 feature set and require a compiler suitable of handling this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack compiler add\nspack compiler list\n"})}),"\n",(0,i.jsx)("a",{id:"installing-hermes"}),"\n",(0,i.jsx)(n.h2,{id:"installing-hermes-on-a-new-machine-with-spack",children:"Installing Hermes on a new machine with Spack"}),"\n",(0,i.jsx)(n.p,{children:"Before installing, you may want to verify that spack is going to\ninstall Hermes with the correct dependencies."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack spec -I hermes\n"})}),"\n",(0,i.jsx)(n.p,{children:"Some questions you may want to ask yourself:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Is the correct MPI version being used?"}),"\n",(0,i.jsx)(n.li,{children:"Is the correct libfabric being used?"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"To install the default Hermes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack install hermes\n"})}),"\n",(0,i.jsx)(n.p,{children:"Hermes additionally has variants for intercepting MPI-IO and HDF5. They\ncan be installed as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack install hermes+vfd+mpiio\n"})}),"\n",(0,i.jsx)(n.p,{children:"If you intend to use high-performance networks such as verbs,\nyou will need to have knowledge of your specific system. This step is highly dependent on the machine, and you may need to consult your machine's documentation or sysadmin to determine what kind of network you use. If your machine uses infiniband, libfabric+verbs is probably for you. Libfabric does not come preinstalled with verbs support in spack."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"spack install hermes ^ libfabric fabrics=rxm,sockets,tcp,udp,verbs\n"})}),"\n",(0,i.jsx)(n.h3,{id:"why-is-my-spack-installation-failing",children:"Why is my spack installation failing?"}),"\n",(0,i.jsx)(n.p,{children:"While spack automates the installation of most dependencies, it is under active development and by no means perfect. We have identified several situations that have caused difficulty when installing Hermes across HPC sites. These issues are not necessarily related to Hermes itself, rather spack in general."}),"\n",(0,i.jsx)(n.p,{children:"If Hermes fails to install use debug mode to get more information:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack -d install hermes\n"})}),"\n",(0,i.jsx)(n.h4,{id:"environment-errors",children:"Environment errors"}),"\n",(0,i.jsx)(n.p,{children:"Your machine may have specific expectations on certain dependencies.\nBy default, spack installs everything from scratch. However, if your\nmachine has software installed as modulefiles, spack will not see\nthese until explicitly told to."}),"\n",(0,i.jsx)(n.p,{children:"We have found several instances of users installing Hermes before adding relevant modulefiles on their machine to spack. Probably the most important modules are MPI installations and networking libraries (e.g., libfabric, UCX, etc). This is because they are installed and configured specifically by the sysadmin for the particular machine. When installing Hermes, make sure any modulefile that you would typically use to build software is loaded and then run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack external find\n"})}),"\n",(0,i.jsx)(n.p,{children:"To view the set of external packages discovered, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cat ~/.spack/packages.yaml\n"})}),"\n",(0,i.jsx)(n.p,{children:"Spack external is not by any means perfect. You may find that some\nmodules you intend to use have not been automatically discovered.\nIn this situation, you can edit the packages.yaml file manually\nto add the packages. The format of the yaml file is straightforward."}),"\n",(0,i.jsx)(n.h4,{id:"dependency-conflicts",children:"Dependency conflicts"}),"\n",(0,i.jsx)(n.p,{children:"There may be multiple versions of the same software installed at the\nsame time. To determine what dependencies Hermes will be using, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack spec -I hermes\n"})}),"\n",(0,i.jsxs)(n.p,{children:["You may find that some dependencies are not the ones you had intended.\nFor example, maybe you have both MPICH 3.3.2 and 3.4.3 installed.\nYou can choose a specific version of a dependency using ",(0,i.jsx)(n.code,{children:"^"}),". Below\nis an example of installing with mpich@3.3.2"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack install hermes ^ mpich@3.3.2\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compilation-errors",children:"Compilation errors"}),"\n",(0,i.jsx)(n.p,{children:"Hermes and some of its dependencies (e.g., thallium) require C++17 support. Not all compilers support this -- even if they say they do.\nGCC 8.5.0, for example, has partial C++17 support, but does not have the full feature set. Many HPC sites have old compilers loaded by default.\nEnsure that a recent C++ compiler is used when compiling Hermes. As a guideline, GCC 9.4 is the earliest GCC version we have tested successfully on Hermes."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack compiler add\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In order to ensure that spack uses the correct compiler, you can\nuse the ",(0,i.jsx)(n.code,{children:"%"})," symbol:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack install hermes%gcc@9.4\n"})}),"\n",(0,i.jsx)(n.h4,{id:"fetcher-errors",children:"Fetcher errors"}),"\n",(0,i.jsx)(n.p,{children:"A fetcher error occurs when a package fails to download. There are three reasons this may occur:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"You lost internet connection when downloading. Ensure you are actually connected to the internet by pinging a well-known website such as google."}),"\n",(0,i.jsx)(n.li,{children:"You are running on a restricted network and your proxy is misconfigured. In this case, you must contact your sysadmins to resolve the issue."}),"\n",(0,i.jsx)(n.li,{children:"The spackage is outdated and contains a broken URL. Either contact the maintainers of the package or visit their documentation to make a custom installation."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"corruption",children:"Corruption"}),"\n",(0,i.jsx)(n.p,{children:"Spack can become corrupted if a package's installation is cutoff prematurely. There's not much that can be done here outside of reinstalling spack and the Hermes dependencies"}),"\n",(0,i.jsx)(n.p,{children:"To effectively uninstall spack:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# remove the spack metadata files\nrm -rf ~/.spack\n# remove the cloned spack repo\nrm -rf /path/to/spack\n"})}),"\n",(0,i.jsx)(n.h2,{id:"building-hermes-with-cmake",children:"Building Hermes with CMake"}),"\n",(0,i.jsx)(n.p,{children:"For those developing Hermes, uninstalling and reinstalling from spack\nis extremely cumbersome. As an alternative to spack, Hermes can be\ninstalled manually with a combination of spack and CMake."}),"\n",(0,i.jsx)(n.h3,{id:"install-dependencies",children:"Install Dependencies"}),"\n",(0,i.jsx)(n.h4,{id:"hermes",children:"Hermes"}),"\n",(0,i.jsxs)(n.p,{children:["Install Hermes as you typically would following the instructrions\nin ",(0,i.jsx)(n.a,{href:"#installing-hermes",children:"Section 1"}),". While the Hermes version itself\nis not useful, the installation process will install all dependencies\nwhich will make life much easier for a manual Hermes build. To save\nsome time, you could choose to install ",(0,i.jsx)(n.code,{children:"hermes_shm"})," instead, which contains the same dependencies and variants as Hermes itself."]}),"\n",(0,i.jsx)(n.h4,{id:"optional-scspkg",children:"(Optional) SCSPKG"}),"\n",(0,i.jsxs)(n.p,{children:["To help with managing the organization of manually-built software, we created a tool called ",(0,i.jsx)(n.a,{href:"https://github.com/grc-iit/scspkg",children:"SCSPKG"})," that helps automate the construction of modulefiles."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/grc-iit/scspkg.git\ncd scspkg\npip install -e . --user\necho "module use $(scspkg module dir)" >> ~/.bashrc\nscspkg init False\n'})}),"\n",(0,i.jsx)(n.h3,{id:"build-hermes",children:"Build Hermes"}),"\n",(0,i.jsx)(n.h4,{id:"load-hermes-dependencies",children:"Load Hermes dependencies"}),"\n",(0,i.jsx)(n.p,{children:"First, load all Hermes dependencies. Hermes_shm is a spackage that\ncontains the same exact dependencies as the full Hermes code:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"spack load hermes_shm\n"})}),"\n",(0,i.jsx)(n.h4,{id:"optional-create-a-hermes-scspkg-repo",children:"(Optional) Create a Hermes SCSPKG repo"}),"\n",(0,i.jsx)(n.p,{children:"An SCSPKG repo for Hermes can be created as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"scspkg create hermes_run\n"})}),"\n",(0,i.jsx)(n.p,{children:"This will do three things:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Create the ",(0,i.jsx)(n.strong,{children:"source"})," directory, which is where uncompiled source code is stored. Hermes, for example, could be cloned in this directory -- ",(0,i.jsx)(n.strong,{children:"although this is not required"}),". This directory is created to help developers organize and prevent cluttering their home directory."]}),"\n",(0,i.jsxs)(n.li,{children:["Create the ",(0,i.jsx)(n.strong,{children:"root"})," directory, which is where compiled code is installed to. I.e., this is the directory CMAKE_INSTALL_PREFIX will point to."]}),"\n",(0,i.jsx)(n.li,{children:"Create a modulefile containing most relevant environment variables needed for building HPC software (PATH, LD_LIBRARY_PATH, etc.). The modulefile will contain the root directory."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The path to the source directory is given by the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"scspkg pkg src hermes_run\n"})}),"\n",(0,i.jsx)(n.p,{children:"The path to the root directory is given by the command:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"scspkg pkg root hermes_run\n"})}),"\n",(0,i.jsx)(n.p,{children:"To view the modulefile, run:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"module show hermes_run\n"})}),"\n",(0,i.jsx)(n.h4,{id:"compile-and-install",children:"Compile and Install"}),"\n",(0,i.jsx)(n.p,{children:"After this, the local installation can be created as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"mkdir build\ncd build\ncmake ../ -DCMAKE_INSTALL_PREFIX=$(scspkg pkg root hermes_run)\nmake -j32 install\n"})}),"\n",(0,i.jsx)(n.p,{children:"To compile with MPI-IO and VFD interceptors:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cmake ../ \\\n-DHERMES_ENABLE_MPIIO_ADAPTER=ON \\\n-DHERMES_ENABLE_VFD=ON \\\n-DCMAKE_INSTALL_PREFIX=$(scspkg pkg root hermes_run)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["There are several options provided in the root Hermes ",(0,i.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/blob/1.2/CMakeLists.txt",children:"CMake"}),". To view these\noptions, one can run run:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"ccmake ../\n"})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>l});var i=s(7294);const a={},r=i.createContext(a);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);