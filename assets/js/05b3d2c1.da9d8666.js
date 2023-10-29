"use strict";(self.webpackChunkgnosis=self.webpackChunkgnosis||[]).push([[4922],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Installation",i={unversionedId:"Jarvis/jarvis-cd/Packages/WRF",id:"Jarvis/jarvis-cd/Packages/WRF",title:"Installation",description:"system check",source:"@site/docs/05-Jarvis/02-jarvis-cd/08-Packages/05-WRF.md",sourceDirName:"05-Jarvis/02-jarvis-cd/08-Packages",slug:"/Jarvis/jarvis-cd/Packages/WRF",permalink:"/docs/Jarvis/jarvis-cd/Packages/WRF",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Dependencies",permalink:"/docs/Jarvis/jarvis-cd/Packages/Montage"},next:{title:"Installation",permalink:"/docs/Jarvis/jarvis-cd/Packages/Nyx"}},s={},p=[{value:"system check",id:"system-check",level:2},{value:"Create a library folder and install the library",id:"create-a-library-folder-and-install-the-library",level:2},{value:"Choice 1: Install the library(with the HDF5 support and without PnetCDF support)",id:"choice-1-install-the-librarywith-the-hdf5-support-and-without-pnetcdf-support",level:2},{value:"Choice 2: Install the libarary(with both HDF5 support and PnetCDF support)",id:"choice-2-install-the-libararywith-both-hdf5-support-and-pnetcdf-support",level:2},{value:"Install WPS",id:"install-wps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("h2",{id:"system-check"},"system check"),(0,r.kt)("p",null,"Create a Test folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir TESTS\ncd TESTS\n")),(0,r.kt)("p",null,"Download the test cases and start tests, the output of tests should include SUCCESS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://www2.mmm.ucar.edu/wrf/OnLineTutorial/compile_tutorial/tar_files/Fortran_C_tests.tar\ntar -xf Fortran_C_tests.tar\ngfortran TEST_1_fortran_only_fixed.f\n./a.out\ngfortran TEST_2_fortran_only_free.f90\n./a.out\ngcc TEST_3_c_only.c\n./a.out\ngcc -c -m64 TEST_4_fortran+c_c.c\ngfortran -c -m64 TEST_4_fortran+c_f.f90\ngfortran -m64 TEST_4_fortran+c_f.o TEST_4_fortran+c_c.o\n./a.out\n./TEST_csh.csh\n./TEST_perl.pl\n./TEST_sh.sh\n")),(0,r.kt)("h2",{id:"create-a-library-folder-and-install-the-library"},"Create a library folder and install the library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir Build_WRF\ncd Build_WRF\nmkdir LIBRARIES\ncd LIBRARIES\n")),(0,r.kt)("p",null,"Download  and unzip the required libraries."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"nedcdf-c-4.9.2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -c https://downloads.unidata.ucar.edu/netcdf-c/4.9.2/netcdf-c-4.9.2.tar.gz\ntar xzvf netcdf-c-4.9.2.tar.gz\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"hdf5(you can also install the newest version)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -c https://support.hdfgroup.org/ftp/HDF5/releases/hdf5-1.12/hdf5-1.12.2/src/hdf5-1.12.2.tar.gz\ntar xzvf hdf5-1.12.2.tar.gz\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"zlib(1.2.11)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -c https://www2.mmm.ucar.edu/wrf/OnLineTutorial/compile_tutorial/tar_files/zlib-1.2.11.tar.gz\ntar xzvf zlib-1.2.11.tar.gz\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"NETCDF-Fortran(4.6.1)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://downloads.unidata.ucar.edu/netcdf-fortran/4.6.1/netcdf-fortran-4.6.1.tar.gz\ntar xzvf netcdf-fortran-4.6.1.tar.gz\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"PnetCDF(1.12.3)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://parallel-netcdf.github.io/Release/pnetcdf-1.12.3.tar.gz\ntar xzvf pnetcdf-1.12.3.tar.gz\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"LibPNG")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget -c https://www2.mmm.ucar.edu/wrf/OnLineTutorial/compile_tutorial/tar_files/libpng-1.2.50.tar.gz\ntar xzvf libpng-1.2.50.tar.gz\n")),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},"MPICH\nwhen load the adios2, mpi is automatically loaded in PATH")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module load adios2/2.9.1-6fh7kh2\n")),(0,r.kt)("h2",{id:"choice-1-install-the-librarywith-the-hdf5-support-and-without-pnetcdf-support"},"Choice 1: Install the library(with the HDF5 support and without PnetCDF support)"),(0,r.kt)("p",null,"Set the environment variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export DIR=/PATH/TO/Build_WRF/LIBRARIES\nexport CC=gcc\nexport CXX=g++\nexport FC=gfortran\nexport F77=gfortran\nmodule load libxml2\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the zlib")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd zlib-1.2.11/\n./configure --prefix=$DIR\nmake\nmake install\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Install the hdf5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd hdf5-1.12.2/\n./configure --prefix=$DIR --with-zlib=$DIR --enable-hl --enable-fortran\nmake check\nmake install\nexport HDF5=$DIR\nexport LD_LIBRARY_PATH=$DIR/lib:$LD_LIBRARY_PATH\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Build NETCDF-C")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd netcdf-c-4.9.2\nexport CPPFLAGS=-I$DIR/include\nexport LDFLAGS=-L$DIR/lib\n ./configure --prefix=$DIR --disable-dap\nmake check\nmake install\nexport PATH=$DIR/bin:$PATH\nexport NETCDF=$DIR\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Build NetCDF fortran library links with NETCDF-C, after successful installation,\nnetcdf.inc will be ${NETCDF}/include file.\nFor sometimes, it will show C compiler stop working, Please check the environment variable in\nLIBS="-lnetcdf -lhdf5_hl -lhdf5 -lz", make sure netcdf and hdf5 path in the environment variables. ')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export LD_LIBRARY_PATH=$DIR/lib:$LD_LIBRARY_PATH\nexport CPPFLAGS="-I${DIR}/include -I/usr/include"\nexport LDFLAGS="-L${DIR}/lib -L/usr/lib"\nexport LIBS="-lnetcdf -lhdf5_hl -lhdf5 -lz" \n./configure --prefix=$DIR --disable-shared\nmake check\nmake install\n')),(0,r.kt)("p",null,"Library Compatibility Tests( the result should show SUCCESS)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir LibTests\ncd libTests\nwget https://www2.mmm.ucar.edu/wrf/OnLineTutorial/compile_tutorial/tar_files/Fortran_C_NETCDF_MPI_tests.tar\ntar -xf Fortran_C_NETCDF_MPI_tests.tar\ncp ${NETCDF}/include/netcdf.inc .\ngfortran -c 01_fortran+c+netcdf_f.f\ngcc -c 01_fortran+c+netcdf_c.c\ngfortran 01_fortran+c+netcdf_f.o 01_fortran+c+netcdf_c.o \\\n     -L${NETCDF}/lib -lnetcdff -lnetcdf\n./a.out\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Install the WRF\nThe adios2 need to be installed with c-blocs, mpi, and hdf5.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Bash"},'cd ..\nwget https://github.com/wrf-model/WRF/releases/download/v4.5.1/v4.5.1.tar.gz\ntar xvzf v4.5.1.tar.gz\ncd WRFV4.5.1\nmodule load adios2/2.9.1-6fh7kh2\nexport ADIOS2="/mnt/repo/software/spack/spack/opt/spack/linux-ubuntu22.04-skylake_avx512/gcc-11.3.0/adios2-2.9.1-6fh7kh2v3tombadg56kmop72sjhf23dg"\nexport HDF5=$DIR\nexport NETCDF=$DIR\nexport NETCDF_classic=1\n./configure\n')),(0,r.kt)("p",null,"Please select from among the following Linux x86_64 options:\nChoose 34(dmpar),\nCompile for nesting?\nchoose 1.\nIf configure is done, you can see a configure.wrf file in the folder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./compile em_real\n #./compile em_real >& log.compile\nexport WRF_DIR=PATH/to/WRFV4.5.1\n")),(0,r.kt)("p",null,"You can see the following information shows the installation is successful."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"---\x3e                  Executables successfully built                  <---                                                                                                                                                                      \n -rwxrwxr-x 1 hxu40 hxu40 51667784 Sep 15 12:21 main/ndown.exe                                                           \n -rwxrwxr-x 1 hxu40 hxu40 51794800 Sep 15 12:21 main/real.exe                                                           \n -rwxrwxr-x 1 hxu40 hxu40 50930720 Sep 15 12:21 main/tc.exe                                                              \n -rwxrwxr-x 1 hxu40 hxu40 59885752 Sep 15 12:21 main/wrf.exe                                                                                                                                                                                     \n\n==========================================================================   \n")),(0,r.kt)("p",null,"To check  check whether it was successful"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -ls main/*.exe\n")),(0,r.kt)("p",null,"If you compiled a real case, you should see:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wrf.exe (model executable)\nreal.exe (real data initialization)\nndown.exe (one-way nesting)\ntc.exe (for tc bogusing--serial only)\n")),(0,r.kt)("h2",{id:"choice-2-install-the-libararywith-both-hdf5-support-and-pnetcdf-support"},"Choice 2: Install the libarary(with both HDF5 support and PnetCDF support)"),(0,r.kt)("p",null,"TBD, Looks like not necessary for this case"),(0,r.kt)("h2",{id:"install-wps"},"Install WPS"),(0,r.kt)("p",null,"Download and install required library"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd $DIR\nwget https://www2.mmm.ucar.edu/wrf/OnLineTutorial/compile_tutorial/tar_files/libpng-1.2.50.tar.gz\ntar xzvf libpng-1.2.50.tar.gz\ncd libpng-1.2.50\n./configure --prefix=$DIR/grib2\nmake\nmake install\ncd ..\nwget https://www2.mmm.ucar.edu/wrf/OnLineTutorial/compile_tutorial/tar_files/jasper-1.900.1.tar.gz\ntar xzvf jasper-1.900.1.tar.gz    \ncd jasper-1.900.1\n./configure --prefix=$DIR/grib2\nmake\nmake install\ncd ..\ncd $DIR\ncd zlib_1.22.1\n./configure --prefix=$DIR/grib2\nmake\nmake install\nexport JASPERLIB=$DIR/grib2/lib\nexport JASPERINC=$DIR/grib2/include\n")),(0,r.kt)("p",null,"Download WPS and install"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#go to WRF folder\nmkdir WPS\nwget https://github.com/wrf-model/WPS/archive/v4.5.tar.gz\ntar -xvzf v4.5.tar.gz\ncd WPS-4.5\nexport JASPERLIB=$DIR/grib2/lib\nexport JASPERINC=$DIR/grib2/include\n./configure --build-grib2-libs #Option 3 for gfortran and distributed memory\n./compile\n")),(0,r.kt)("p",null,"IF you see this message after ./configure, please ignore"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Testing for NetCDF, C and Fortran compiler\nThis installation NetCDF is 64-bit\nC compiler is 64-bit\nFortran compiler is 64-bit\nYour versions of Fortran and NETCDF are not consistent.\n```bash\n\nIf the compile successfully,\nthere should be 3 executables in the WPS top-level directory, that are linked to their corresponding src/ directories:\n```bash\ngeogrid.exe -> geogrid/src/geogrid.exe\nungrib.exe -> ungrib/src/ungrib.exe\nmetgrid.exe -> metgrid/src/metgrid.exe\n")),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the benchmark dataset, here is the website for dataset:\n",(0,r.kt)("a",{parentName:"li",href:"https://www2.mmm.ucar.edu/wrf/users/benchmark/v44/benchdata_v44.html"},"https://www2.mmm.ucar.edu/wrf/users/benchmark/v44/benchdata_v44.html"),"\nChoose one of them for testing.\nUnzip the file.\ncopy the wrfbdy_d01, wrfinput_d01 and namelist.input file to WRF/test/em_real file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"change the namelist.input file\nThe ADIOS2 I/O option for history and/or restart file is enabled by setting one of the following:\nio_form_history = 14\nio_form_restart = 14\nframes_per_outfile   = 1000000,\nhistory_outname      = '/Path/to/output/wrfout_d<domain>_<date>' (this part also can be changed in WRF/Register/register.io_bipartitie file)\nDo not change the wrfout_d<domain>_<date>\n")),(0,r.kt)("p",null,"Run wrf with adios2\nadd adios2.xml file in the same folder(wrf/test/em_real)\nHere is the example of adios2.xml file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'<?xml version="1.0"?>\n<adios-config>\n\n  \x3c!-- <io name="/Path/to/wrfout_d01_2018-06-17_00:00:00"> --\x3e\n  <io name="/Path/to/wrfout_d01_2019-11-26_12:00:00">\n\n    \x3c!-- <engine type="BP4"> --\x3e\n    \x3c!-- </engine> --\x3e\n\n    <engine type="BP4">\n      <parameter key="RendezvousReaderCount" value="0"/>\n      <parameter key="QueueLimit" value="1"/>\n      <parameter key="QueueFullPolicy" value="Discard"/>\n      <parameter key="OpenTimeoutSecs" value="30.0"/>\n    </engine>\n\n    \x3c!-- <engine type="BP4"> --\x3e\n      \x3c!-- <parameter key="AggregatorRatio" value="18"/> --\x3e\n      \x3c!-- <parameter key="NumAggregators" value="36"/> --\x3e\n      \x3c!-- <parameter key="BurstBufferPath" value="/mnt/local/mike"/> --\x3e\n      \x3c!-- <parameter key="BurstBufferDrain" value="Off"/> --\x3e\n      \x3c!-- <parameter key="BurstBufferVerbose" value="1"/> --\x3e\n    \x3c!-- </engine> --\x3e\n  </io>\n</adios-config>\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"module load adios2/2.9.1-6fh7kh2\nexport DIR=~/Build_WRF/LIBRARIES\nexport CC=gcc\nexport CXX=g++\nexport FC=gfortran\nexport F77=gfortran\nexport HDF5=$DIR\nexport LD_LIBRARY_PATH=$DIR/lib:$LD_LIBRARY_PATH\nexport NETCDF=$DIR\nexport PATH=$DIR/bin:$PATH\nexport LD_LIBRARY_PATH=/mnt/repo/software/spack/spack/opt/spack/linux-ubuntu22.04-skylake_avx512/gcc-11.3.0/adios2-2.9.1-6fh7kh2v3tombadg56kmop72sjhf23dg/lib:$LD_LIBRARY_PATH\n./wrf.exe or(mpirun -np <number of process> ./wrf.exe\n")),(0,r.kt)("p",null,'The BP5 output will have mmd.0 file and the BP4 does not have mmd.0 file\nTHe output file has the same name for different machine: "wrfout_d01_2019-11-26_12:00:00"'),(0,r.kt)("h1",{id:"post-processing-part"},"Post processing part"),(0,r.kt)("p",null,"Here is the python script. Then add the same adios2.xml file into the same folder with python"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'import argparse\nimport adios2                               # pylint: disable=import-error\nimport numpy as np                          # pylint: disable=import-error\nimport matplotlib.pyplot as plt             # pylint: disable=import-error\nimport matplotlib.gridspec as gridspec      # pylint: disable=import-error\nfrom mpi4py import MPI                      # pylint: disable=import-error\nimport cartopy.crs as ccrs                  # pylint: disable=import-error\nimport cartopy.feature as cfeature          # pylint: disable=import-error\nfrom mpl_toolkits.axes_grid1 import make_axes_locatable # pylint: disable=import-error\n#\n#\ndef setup_args():\n    parser = argparse.ArgumentParser()\n    parser.add_argument("--instream", "-i", help="Name of the input stream", default="wrfout_d01_2019-11-26_23:00:00")\n    parser.add_argument("--outfile", "-o", help="Name of the output file", default="screen")\n    parser.add_argument("--varname", "-v", help="Name of variable read", default="T2")\n    args = parser.parse_args()\n    return args\n\ndef plot_var(var, fr_step):\n\n    lccproj = ccrs.LambertConformal(central_longitude=-74.5, central_latitude=38.8)\n    fig, ax = plt.subplots(figsize=(15, 18), subplot_kw=dict(projection=lccproj))\n    plt.subplots_adjust(right=0.88)  # adjust the right margin of the plot\n    title = fr_step.read_string("Times")\n    plt.title("WRF-ADIOS2 Demo \\n {}".format(title[0]), fontsize=17)\n\n     # format the spacing of the colorbar\n    divider = make_axes_locatable(ax)\n    cax = divider.new_horizontal(size=\'5%\', pad=0.1, axes_class=plt.Axes)\n    fig.add_axes(cax)\n\n    displaysec = 0.5\n    cur_step = fr_step.current_step()\n    x = fr_step.read("XLONG")\n    y = fr_step.read("XLAT")\n    data = fr_step.read(var)\n    print(data)\n    data = data * 9 / 5 - 459.67 #convert from K to F\n\n    # define the limits for the model to subset and plot\n    # model_lims = dict(minlon=-80, maxlon=-69, minlat=35, maxlat=43)\n\n    # # create boolean indices where lat/lon are within defined boundaries\n    # lon_ind = np.logical_and(x > model_lims[\'minlon\'], x < model_lims[\'maxlon\'])\n    # lat_ind = np.logical_and(y > model_lims[\'minlat\'], y < model_lims[\'maxlat\'])\n    # # find i and j indices of lon/lat in boundaries\n    # ind = np.where(np.logical_and(lon_ind, lat_ind))\n\n    # data = np.squeeze(data)[range(np.min(ind[0]), np.max(ind[0]) + 1),\n    #                 range(np.min(ind[1]), np.max(ind[1]) + 1)]\n\n    h = ax.pcolormesh(x, y, data, vmin=-20, vmax=110,\n                      cmap=\'jet\', transform=ccrs.PlateCarree())\n\n    cb = plt.colorbar(h, cax=cax)\n    cb.set_label(label="Temperature [F]", fontsize=14)  # add the label on the colorbar\n    cb.ax.tick_params(labelsize=12)  # format the size of the tick labels\n\n    # add contours\n    contour_list = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]  # define contour levels\n    cs = ax.contour(x, y, data, contour_list, colors=\'black\',\n                    linewidths=.5, transform=ccrs.PlateCarree())\n    ax.clabel(cs, inline=True, fontsize=10.5, fmt=\'%d\')\n\n    # add the latitude and longitude gridlines\n    gl = ax.gridlines(draw_labels=True, linewidth=1, color=\'gray\', alpha=0.5,\n                      linestyle=\'dotted\', x_inline=False)\n    gl.top_labels = False\n    gl.right_labels = False\n    gl.xlabel_style = {\'size\': 13}\n    gl.ylabel_style = {\'size\': 13}\n\n     # add map features\n    land = cfeature.NaturalEarthFeature(\'physical\', \'land\', \'10m\')\n    ax.add_feature(land, zorder=5, edgecolor=\'black\', facecolor=\'none\')\n\n    state_lines = cfeature.NaturalEarthFeature(\n        category=\'cultural\',\n        name=\'admin_1_states_provinces_lines\',\n        scale=\'10m\',\n        facecolor=\'none\')\n\n    ax.add_feature(cfeature.BORDERS, zorder=6)\n    ax.add_feature(state_lines, zorder=7, edgecolor=\'black\')\n\n    #plt.title(title)\n\n    # plt.ion()\n    #plt.show()\n    # plt.pause(displaysec)\n    # #clear_output()\n    # plt.clf()\n\n    imgfile = "image"+"{0:0>5}.png".format(cur_step)\n    plt.savefig(imgfile)\n    plt.clf()\n\nif __name__ == "__main__":\n    args = setup_args()\n    fr = adios2.open(args.instream, "r", MPI.COMM_WORLD, "adios2.xml", "wrfout_d01_2019-11-26_23:00:00")\n\n    for fr_step in fr:\n        plot_var(args.varname, fr_step)\n\n    fr.close()\n\n')),(0,r.kt)("p",null,"Run this python script with adios2.xml file in the same folder."))}u.isMDXComponent=!0}}]);