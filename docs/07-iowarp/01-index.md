# IoWarp

IoWarp is a powerful cutting-edge data management platform designed to streamline and accelerate scientific workflows, especially those intensified by the rise of artificial intelligence (AI). It optimizes data flow throughout the research process, ensuring efficient handling of diverse data types, formats, and the exponential growth of data. IOWarp aims to significantly reduce data access times, accelerate the pace of scientific discovery, and foster a collaborative research environment.

## Dependencies

Currently, IoWarp is Linux-only. We are working on extending portability.

[Spack](https://spack.io/) is the easiest way to install iowarp as of right now.

### Install Spack
```bash
cd ${HOME}
git clone https://github.com/spack/spack.git
cd spack
git checkout tags/v0.22.2
echo ". ${PWD}/share/spack/setup-env.sh" >> ~/.bashrc
source ~/.bashrc
```

### Clone the GRC Spack Repo
```bash
cd ${HOME}
git clone https://github.com/grc-iit/grc-repo
spack repo add grc-repo
```

## Install IOWARP: USERS
For general users of IOWARP, use the following command:
```bash
spack install iowarp
```

## Install IOWARP: DEVS

### For Linux users
For those contributing to iowarp:
```bash
spack install iowarp +nocompile
spack load iowarp
```
NOTE: spack load is only for a specific terminal. You
must call this command every time you open a new terminal
or login to your machine.

For developer installations, we will use a tool named scspkg.
scspkg is installed automatically by iowarp. It is a tool for
managing modulefiles, which set various environment variables
that streamline the installation of our tools.

### For non-Linux users

We provide an Ubuntu contianer where iowarp's dependencies are
already installed. No need to rerun ``spack install iowarp +nocompile``.
```bash
docker pull lukemartinlogan/chimaera-deps:latest
docker run -it \
--name iowarp \
--network host \
--memory=8G \
--shm-size=8G \
-p 4000:4000 \
-p 4001:4001 \
lukemartinlogan/chimaera-deps:latest
```

### For Pull Requests
You may find the github [command line](https://cli.github.com/) useful for making PRs.
```bash
gh auth login
gh repo set-default
gh pr create --title "Your pull request title" --body "Your pull request description"
```

### Hermes-SHM
```bash
cd ${HOME}
scspkg create hermes_shm
git clone https://github.com/iowarp/cte-hermes-shm.git
cd cte-hermes-shm
mkdir build
cd build
cmake ../ \
-DCMAKE_INSTALL_PREFIX=$(scspkg pkg root hermes_shm) \
-DHSHM_ENABLE_COMPRESS=ON \
-DHSHM_ENABLE_ENCRYPT=ON \
-DHSHM_RPC_THALLIUM=ON \
-DHSHM_USE_ELF=ON
make -j32 install
```

If you will be working on hermes-shm, create your own personal 
fork instead of cloning directly. The following will allow
you to keep your fork updated with changes to the global repo.
```bash
cd ${HOME}/hermes_shm
git remote add iowarp https://github.com/iowarp/cte-hermes-shm.git
git pull iowarp
```

### IoWarp Runtime: Chimaera
```bash
cd ${HOME}
scspkg create iowarp_runtime
git clone https://github.com/iowarp/iowarp-runtime

cd iowarp-runtime
module load hermes_shm
mkdir build
cd build
cmake ../ \
-DCMAKE_INSTALL_PREFIX=$(scspkg pkg root iowarp_runtime)
make -j32 install
```

NOTE: If you will be working on iowarp-runtime, create your own personal 
fork instead of cloning directly. The following will allow
you to keep your fork updated with changes to the global repo.
```bash
cd ${HOME}/hermes_shm
git remote add iowarp https://github.com/iowarp/iowarp-runtime
git pull iowarp
```

### Content-Transfer-Engine: Hermes
```bash
cd ${HOME}
scspkg create cte
git clone https://github.com/iowarp/content-transfer-engine.git

cd content-transfer-engine
module load hermes_shm iowarp_runtime
mkdir build
cd build
cmake ../ \
-DCMAKE_INSTALL_PREFIX=$(scspkg pkg root cte)
make -j32 install
```

NOTE: If you will be working on the cte, create your own personal
fork instead of cloning directly. The following will allow
you to keep your fork updated with changes to the global repo.
```bash
cd ${HOME}/hermes_shm
git remote add iowarp https://github.com/iowarp/content-transfer-engine.git
git pull iowarp
```
