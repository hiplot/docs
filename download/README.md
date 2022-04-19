# Download



## Desktop Client

We build the desktop client of Hiplot based on the [Electron](https://www.electronjs.org/). The demo data and UI components are fixed in the desktop client under the given version.

Latest release version:


|File                                                                                                                         |Size     |Date       |MD5                              |
|:----------------------------------------------------------------------------------------------------------------------------|:--------|:----------|:--------------------------------|
|[Hiplot_Desktop_0.2.0_Darwin.dmg](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Darwin.dmg)             |85.5 Mb  |2022-04-19 |7da62cb4619f27f0c13f323f8e9c0d93 |
|[Hiplot_Desktop_0.2.0_Linux_amd64.deb](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_amd64.deb)   |59.8 Mb  |2022-04-19 |12d94c21bc5641f6a0b6e191c7d6cd25 |
|[Hiplot_Desktop_0.2.0_Linux_amd64.snap](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_amd64.snap) |75.5 Mb  |2022-04-19 |97680b12035b2a14fa0194a79e418513 |
|[Hiplot_Desktop_0.2.0_Linux_x64.apk](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x64.apk)       |87.1 Mb  |2022-04-19 |54302528cccf97c29b05d239d8b25e33 |
|[Hiplot_Desktop_0.2.0_Linux_x86_64.rpm](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x86_64.rpm) |59.9 Mb  |2022-04-19 |764c3b6d079056f2a38edbd4b7cdcf6d |
|[Hiplot_Desktop_0.2.0_Windows.exe](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows.exe)           |128.4 Mb |2022-04-19 |24a72ec9478710fa5c5498482d386bdd |
|[Hiplot_Desktop_0.2.0_Windows_ia32.exe](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_ia32.exe) |62.6 Mb  |2022-04-19 |7eb64f50edb2c3c15159b6e677743a54 |
|[Hiplot_Desktop_0.2.0_Windows_x64.exe](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_x64.exe)   |65.8 Mb  |2022-04-19 |f429b21c3e14bb8f15046ba26d1f6ec3 |

Old release version (v0.1.0):

**Linux:**

- [Hiplot_Desktop_0.1.0_Linux_x86_64.AppImage](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Linux_x86_64.AppImage)
- [Hiplot_Desktop_0.1.0_Linux_amd64.snap](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Linux_amd64.snap)

**Windows:**

- [Hiplot_Desktop_0.1.0_Windows.exe](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Windows.exe)

**MAC OSX**

- [Hiplot_Desktop_0.1.0_Darwin.dmg](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Darwin.dmg)

## hctl

hctl is the command-line client of Hiplot website. It can be used to draw plots without the web environment.

Latest release version (v0.1.3):

**Linux:**

- [hctl_0.1.3_Linux_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Linux_64-bit.tar.gz)
- [hctl_0.1.3_Linux_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Linux_32-bit.tar.gz)

**MAC OSX:**

- [hctl_0.1.3_Darwin_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Darwin_64-bit.tar.gz)


**Windows:**
- [hctl_0.1.3_Windows_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Windows_64-bit.tar.gz)
- [hctl_0.1.3_Windows_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Windows_32-bit.tar.gz)

It is required to login Hiplot server first using the `hctl login` command. `hctl plot` command can be used to draw plots by using the parameter file and data files.

Demo input files of hctl can be download from here: [demo.tar.gz](https://hiplot.com.cn/download/hctl/_demo.tar.gz).

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Linux_64-bit.tar.gz
wget https://hiplot.com.cn/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.3_Linux_64-bit.tar.gz
tar -xzvf _demo.tar.gz

./hctl login

# only input data files
./hctl plot -c _demo/heatmap/config.json -t heatmap -d _demo/heatmap/countData.txt,_demo/heatmap/sampleInfo.txt,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-pure-data-mode

# only use remote files
./hctl plot -c _demo/heatmap/config2.json -t heatmap -o /tmp/hiplot-pure-remote-data-mode

# mixed usage
./hctl plot -c _demo/heatmap/config3.json -t heatmap -d _demo/heatmap/countData.txt,,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-mixed-mode

# hiplot exported param
./hctl plot -p _demo/heatmap/params.json -t heatmap -o /tmp/hiplot-params-mode
```

### Main Interface


```
## Command-line client to draw plots of [Hiplot](https://hiplot.com.cn) website. More see here https://github.com/hiplot.
## 
## Usage:
##   hctl [flags]
##   hctl [command]
## 
## Available Commands:
##   config      Initializing a config.json file of hiplot application.
##   help        Help about any command
##   login       Login Hiplot Website.
##   plot        Plot functions of Hiplot Website.
## 
## Flags:
##   -h, --help              help for hctl
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "e0b9bd64-e911-4713-988b-4024a2ea1326")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
##   -v, --version           version for hctl
## 
## Use "hctl [command] --help" for more information about a command.
```

### Plot Interface


```
## Plot functions of Hiplot Website.
## 
## Usage:
##   hctl plot [flags]
## 
## Examples:
##   hctl plot -c _demo/heatmap/config.json -t heatmap -d _demo/heatmap/countData.txt,_demo/heatmap/sampleInfo.txt,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-pure-data-mode
##   hctl plot -c _demo/heatmap/config2.json -t heatmap -o /tmp/hiplot-pure-remote-data-mode
##   hctl plot -c _demo/heatmap/config3.json -t heatmap -d _demo/heatmap/countData.txt,,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-mixed-mode
##   hctl plot -p _demo/heatmap/params.json -t heatmap -o /tmp/hiplot-params-mode
##   hctl plot -p _demo/heatmap/params2.json -o /tmp/hiplot-params-mode2
##   hctl plot -p _demo/heatmap/basic-heatmap-params.json --load-example true -o /tmp/hiplot-params-mode3
##   hctl plot --check-task --temp-code QwbMBp7 --taskname 62919a54-ee68-49c4-b070-7384c60fb05f --tool clusterprofiler-go-kegg -m advance -o /tmp/clusterprofiler-go-kegg
##   hctl plot -p basic-pca-params.json --load-example true -o /tmp/pca1
##   hctl plot -p basic-pca-params.json --load-example 2 -o /tmp/pca2
## 
## Flags:
##       --check-task            check task status, taskname and tmpcode are required.
##   -c, --config string         json format tool config file.
##   -d, --data string           data table file (sepreate by comma).
##   -h, --help                  help for plot
##       --load-example string   load example field (only work for hctl config export) (default "true")
##   -m, --module string         module name: basic, advance. (default "basic")
##   -p, --params string         json format tool params file (exported by Hiplot).
##       --print-links           print result links
##       --temp-code string      task tempcode. (default "odusVDD")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "d8b61f17-ee56-4433-ad0e-19fb99380119")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
