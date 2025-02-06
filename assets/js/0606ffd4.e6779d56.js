"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[9623],{823:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"hpc-tutorials/docker/docker-basics","title":"Docker Guide","description":"This is a brief guide on how to use Docker. Docker is a containerization","source":"@site/docs/02-hpc-tutorials/05-docker/01-docker-basics.md","sourceDirName":"02-hpc-tutorials/05-docker","slug":"/hpc-tutorials/docker/docker-basics","permalink":"/docs/hpc-tutorials/docker/docker-basics","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Unit Testing in C++","permalink":"/docs/hpc-tutorials/cpp-introduction/unit-tests"},"next":{"title":"Docker Clusters","permalink":"/docs/hpc-tutorials/docker/docker-cluster"}}');var r=i(4848),o=i(8453);const a={},s="Docker Guide",c={},l=[{value:"Installation",id:"installation",level:2},{value:"Docker Basics",id:"docker-basics",level:2},{value:"Setup",id:"setup",level:3},{value:"Create a Dockerfile",id:"create-a-dockerfile",level:2},{value:"Build the container image",id:"build-the-container-image",level:2},{value:"Run the container",id:"run-the-container",level:2},{value:"Interacting with the container",id:"interacting-with-the-container",level:2},{value:"Useful Commands",id:"useful-commands",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"docker-guide",children:"Docker Guide"})}),"\n",(0,r.jsx)(n.p,{children:"This is a brief guide on how to use Docker. Docker is a containerization\nframework. Containers are used run multiple OSes at once without\nhaving to reboot or log out. There are many uses for containers:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Portability: For example, code programmed on for a Linux system\ncan now execute on a Mac or Windows machine."}),"\n",(0,r.jsx)(n.li,{children:"Testing: You can test your code on multiple OSes just by spawning\ndifferent containers for each OS and running your unit tests there."}),"\n",(0,r.jsx)(n.li,{children:"Reliability: Containers can be migrated if a machine is expected\nto go down. This is frequently done by cloud providers"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(n.p,{children:["The official install guide is ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"here"}),".\nYou do need root priviliges to install and use docker."]}),"\n",(0,r.jsx)(n.h2,{id:"docker-basics",children:"Docker Basics"}),"\n",(0,r.jsx)(n.p,{children:"In this section, we go through an example of a Dockerfile and how to create a\ncontainer."}),"\n",(0,r.jsx)(n.h3,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.p,{children:"First, cd into the tutorial directory."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd ${SCS_TUTORIAL}/5.1.docker_basics\n"})}),"\n",(0,r.jsx)(n.p,{children:"This directory contains a single file: Dockerfile"}),"\n",(0,r.jsx)(n.h2,{id:"create-a-dockerfile",children:"Create a Dockerfile"}),"\n",(0,r.jsxs)(n.p,{children:["Below is an example ",(0,r.jsx)(n.a,{href:"https://github.com/grc-iit/grc-tutorial/blob/main/docker/01-docker-basics/Dockerfile",children:"Dockerfile"})," which creates a basic Ubuntu20.04 container."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-docker",children:'# Install ubuntu 20.04\nFROM ubuntu:20.04\nLABEL maintainer="llogan@hawk.iit.edu"\nLABEL version="0.0"\nLABEL description="An example docker image"\n\n# Disable Prompt During Packages Installation\nARG DEBIAN_FRONTEND=noninteractive\n\n# Update ubuntu\nRUN apt update && apt install\n\n# Install some basic packages\nRUN apt install -y \\\n    openssh-server \\\n    sudo\n\n# Set an environment variable\nENV MY_VAR=hi\n\n# Print environment variable\nRUN echo ${MY_VAR}\n'})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["FROM ubuntu:20.04 indicates the OS version that docker should install.\nThere are other OSes, such as fedora",":latest",", ubuntu",":latest",", centos",":centos8",".\nThis can be useful for testing portability."]}),"\n",(0,r.jsx)(n.li,{children:"LABEL parameters are just metadata"}),"\n",(0,r.jsx)(n.li,{children:"RUN executes a command as if in a terminal"}),"\n",(0,r.jsx)(n.li,{children:"ENV sets an environment variable"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"build-the-container-image",children:"Build the container image"}),"\n",(0,r.jsx)(n.p,{children:"First, the container image must be built. This will parse the Dockerfile, install the OS, and run all commands in the Dockerfile.\nThe syntax is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker build -t [IMAGE_NAME] [DOCKERFILE_DIR, can be a github link] -f [DOCKERFILE_NAME]\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"IMAGE_NAME: a semantic name for the image being built. NOTE: the name must be in snake case (i.e., no caps)."}),"\n",(0,r.jsx)(n.li,{children:"DOCKERFILE_DIR: the directory containing the Dockerfile."}),"\n",(0,r.jsx)(n.li,{children:"DOCKERFILE_NAME: the name of the dockerfile in that directory. This is optional. Default: Dockerfile."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Let's say that our Dockerfile is located at ",(0,r.jsx)(n.code,{children:"${HOME}/MyDockerfiles/Dockerfile"}),".\nWe could build the image two ways:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"# Option 1: a single command\nsudo docker build -t myimage ${HOME}/MyDockerfiles\n\n# Option 2: cd into the directory\ncd ${HOME}/MyDockerfiles\nsudo docker build -t myimage .\n"})}),"\n",(0,r.jsx)(n.h2,{id:"run-the-container",children:"Run the container"}),"\n",(0,r.jsx)(n.p,{children:"Next, we must run the container. This will create a container from the container image. There can be multiple containers made from the same image.\nThe syntax is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker run [OPTIONS] [IMAGE_NAME] [COMMAND (optional)]\n"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"OPTIONS: There are many settings which docker provides. We'll go over some of them below."}),"\n",(0,r.jsx)(n.li,{children:"IMAGE_NAME: The semantic name of the image to build the container from"}),"\n",(0,r.jsx)(n.li,{children:"COMMAND: An optional command to run within the container."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"This command will create a container CONTAINER_ID from IMAGE_NAME which uses the host network to connect to the internet and download packages."}),"\n",(0,r.jsx)(n.p,{children:"In our case, we want to make the container interactive (i.e., have a shell):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"sudo docker run -it --name mycontainer --network host myimage\n"})}),"\n",(0,r.jsx)(n.p,{children:'We use the option "-it" to specify this is an interactive session.'}),"\n",(0,r.jsx)(n.h2,{id:"interacting-with-the-container",children:"Interacting with the container"}),"\n",(0,r.jsx)(n.p,{children:"You can reconnect to an interactive container's shell using docker exec. The syntax is as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker exec [CONTAINER_ID] /bin/bash\n"})}),"\n",(0,r.jsx)(n.p,{children:"You can now run commands within the image. For us, this would be:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo docker exec mycontainer /bin/bash\n"})}),"\n",(0,r.jsx)(n.h2,{id:"useful-commands",children:"Useful Commands"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Run a container with a shared directory between guest and host\nsudo docker run -it --name [CONTAINER_ID] --mount src=[HOST_PATH],target=[CONTAINER_PATH],type=bind --network host [IMAGE_NAME]\n\n# List all running containers\nsudo docker container ls\n\n# List all container IDs\nsudo docker container ls --all\n\n# Get interactive shell for container\nsudo docker exec [CONTAINER_ID] /bin/bash\n\n# Execute command in container\ndocker exec [CONTAINER_ID] [COMMAND]\n\n# Kill a running container\nsudo docker stop [CONTAINER_ID]\n\n# Delete a container\nsudo docker rm [CONTAINER_ID]\n\n# Commit the state of a container CONTAINER_ID into a new container\n# COPY_CONTAINER_ID\nsudo docker commit [CONTAINER_ID] [COPY_CONTAINER_ID]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(6540);const r={},o=t.createContext(r);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);