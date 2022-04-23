# Download



## Desktop Client

We build the desktop client of Hiplot based on the [Electron](https://www.electronjs.org/). The demo data and UI components are fixed in the desktop client under the given version.

Latest release version:


|File                                                                                                                         |Size     |Date       |MD5                              |
|:----------------------------------------------------------------------------------------------------------------------------|:--------|:----------|:--------------------------------|
|[Hiplot_Desktop_0.2.0_Darwin.dmg](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Darwin.dmg)             |85.5 Mb  |2022-04-23 |01970f96c2ca513297939ad12304676a |
|[Hiplot_Desktop_0.2.0_Linux_amd64.deb](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_amd64.deb)   |59.8 Mb  |2022-04-23 |9ffa3c077a72ecb278a729cb219771bc |
|[Hiplot_Desktop_0.2.0_Linux_x64.apk](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x64.apk)       |87.2 Mb  |2022-04-23 |6b17c5f4d90ee1fdb38f685fe8e97c97 |
|[Hiplot_Desktop_0.2.0_Linux_x86_64.rpm](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x86_64.rpm) |59.9 Mb  |2022-04-23 |981b3e5c85336134ac0b1274392a0d6c |
|[Hiplot_Desktop_0.2.0_Windows.exe](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows.exe)           |127.7 Mb |2022-04-23 |3969432030e7b8878be959c4419c1a62 |
|[Hiplot_Desktop_0.2.0_Windows_ia32.exe](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_ia32.exe) |62.7 Mb  |2022-04-23 |fd7ece88eaed37212576cbe0837aa54b |
|[Hiplot_Desktop_0.2.0_Windows_x64.exe](https://hiplot.com.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_x64.exe)   |65.8 Mb  |2022-04-23 |30f64f54bea570eeaa679023031480e4 |

Other releases of desktop client: [here](https://hiplot.com.cn/download/desktop)

## hctl

hctl is the command-line client of Hiplot website. It can be used to draw plots without the web environment.

Latest release version (v0.1.4):


|File                                                                                                            |Size   |Date       |MD5                              |
|:---------------------------------------------------------------------------------------------------------------|:------|:----------|:--------------------------------|
|[hctl_0.1.4_Darwin_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Darwin_64-bit.tar.gz)   |2.9 Mb |2022-04-23 |c63fbc9a7552084f7e1027a8df9b2f4e |
|[hctl_0.1.4_Darwin_arm64.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Darwin_arm64.tar.gz)     |2.8 Mb |2022-04-23 |8c4ae51addc0604018665ed1c23e6f36 |
|[hctl_0.1.4_Linux_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Linux_32-bit.tar.gz)     |2.7 Mb |2022-04-23 |d034dbd6c3dfc9702398adfef5a82c08 |
|[hctl_0.1.4_Linux_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Linux_64-bit.tar.gz)     |2.8 Mb |2022-04-23 |26cddce49c026ff9754ed50a57ca18a3 |
|[hctl_0.1.4_Linux_arm64.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Linux_arm64.tar.gz)       |2.6 Mb |2022-04-23 |c043936c9078fc326d36c18e30c09317 |
|[hctl_0.1.4_Windows_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Windows_32-bit.tar.gz) |2.8 Mb |2022-04-23 |c2cd4e8c23a3c928bcfea6947cf058c3 |
|[hctl_0.1.4_Windows_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Windows_64-bit.tar.gz) |2.9 Mb |2022-04-23 |4b9099f0277daa1207c35e8658c718a6 |
|[hctl_0.1.4_Windows_arm64.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Windows_arm64.tar.gz)   |2.6 Mb |2022-04-23 |6c9f86339b9b4347704624a19ecb2d6f |

Other releases of hctl: [here](https://hiplot.com.cn/download/hctl)

It is required to login Hiplot server first using the `hctl login` command. `hctl plot` command can be used to draw plots by using the parameter file and data files.

Demo input files of hctl can be download from here: [demo.tar.gz](https://hiplot.com.cn/download/hctl/_demo.tar.gz).

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot.com.cn/download/hctl/v0.1.4/hctl_0.1.4_Linux_64-bit.tar.gz
wget https://hiplot.com.cn/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.4_Linux_64-bit.tar.gz
tar -xzvf _demo.tar.gz

hctl login

# only input data files
hctl plot -c _demo/heatmap/config.json -t heatmap -d _demo/heatmap/countData.txt,_demo/heatmap/sampleInfo.txt,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-pure-data-mode

# only use remote files
hctl plot -c _demo/heatmap/config2.json -t heatmap -o /tmp/hiplot-pure-remote-data-mode

# mixed usage
hctl plot -c _demo/heatmap/config3.json -t heatmap -d _demo/heatmap/countData.txt,,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-mixed-mode

# hiplot exported params
hctl plot -p _demo/heatmap/params.json -t heatmap -o /tmp/hiplot-params-mode

# hiplot config 和 plot 命令联合
## show hctl supported plugins
hctl config -l
## download basic/tsne params
hctl config basic/tsne
## draw tsne graphics
hctl plot -p basic-tsne-params.json -o /tmp/hiplot-tsne
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
##   -k, --taskname string   task ID (default is random). (default "36fbe83a-7255-4088-8feb-9ebebe658b2b")
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
##   hctl config basic/pca
##   hctl plot -p basic-pca-params.json --load-example true -o /tmp/pca1
##   hctl plot -p basic-pca-params.json --load-example 2 -o /tmp/pca2
##   hctl plot -p _demo/tsne/basic-tsne-params.json -o /tmp/hiplot-tsne
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
##       --temp-code string      task tempcode. (default "9odzRxI")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "6eec067f-428e-4ca0-b5b9-d0e59f1d2759")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
