# Download



## Desktop Client

We build the desktop client of Hiplot (ORG) based on the [Electron](https://www.electronjs.org/). The demo data and UI components are fixed in the desktop client under the given version.

Latest release version:


|File                                  |Size     |Date       |MD5                              |
|:-------------------------------------|:--------|:----------|:--------------------------------|
|[Hiplot_Desktop_0.2.0_Darwin.dmg](https://download.hiplot.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Darwin.dmg)|85.5 Mb  |2022-04-23 |3b9b172ad7c42f21cc5cad7193d3e6fa |
|[Hiplot_Desktop_0.2.0_Linux_amd64.deb](https://download.hiplot.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_amd64.deb)|59.8 Mb  |2022-04-23 |1364a9cdda29899cdf7559b21c795839 |
|[Hiplot_Desktop_0.2.0_Linux_x64.apk](https://download.hiplot.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x64.apk)|87.2 Mb  |2022-04-23 |1da132999464e6d8cec6d5bf28f33912 |
|[Hiplot_Desktop_0.2.0_Linux_x86_64.rpm](https://download.hiplot.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x86_64.rpm)|59.9 Mb  |2022-04-23 |1cbaf4cbe039a68cf3c6abeeabacf861 |
|[Hiplot_Desktop_0.2.0_Windows.exe](https://download.hiplot.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows.exe)|127.7 Mb |2022-04-23 |e3209b49148a2107ef4cc5f28de48558 |
|[Hiplot_Desktop_0.2.0_Windows_ia32.exe](https://download.hiplot.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_ia32.exe)|62.7 Mb  |2022-04-23 |bc70b084a6e7357ba2514b053c74ffc8 |
|[Hiplot_Desktop_0.2.0_Windows_x64.exe](https://download.hiplot.cn/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_x64.exe)|65.8 Mb  |2022-04-23 |9e52e69fe0089ac2d9f411a91e29c0ac |

Other releases of desktop client: [here](https://hiplot.cn/download/desktop)

## hctl

hctl is the command-line client of Hiplot (ORG) website. It can be used to draw plots without the web environment.

Latest release version (v0.1.7):


|File                             |Size   |Date       |MD5                              |
|:--------------------------------|:------|:----------|:--------------------------------|
|[hctl_0.1.7_Darwin_64-bit.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Darwin_64-bit.tar.gz)|3 Mb   |2023-02-08 |19173d8631683c3bd751310c38fbb65c |
|[hctl_0.1.7_Darwin_arm64.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Darwin_arm64.tar.gz)|2.9 Mb |2023-02-08 |e19f342414414c7c9597e94a8ed60207 |
|[hctl_0.1.7_Linux_32-bit.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Linux_32-bit.tar.gz)|2.8 Mb |2023-02-08 |7d032a64356320f71f817de0fc8219b4 |
|[hctl_0.1.7_Linux_64-bit.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Linux_64-bit.tar.gz)|2.9 Mb |2023-02-08 |cfc2c81bbe3486e4fbc75ae80ee71d6f |
|[hctl_0.1.7_Linux_arm64.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Linux_arm64.tar.gz)|2.7 Mb |2023-02-08 |e61edbf465586c832d9b0bd7827ec9a7 |
|[hctl_0.1.7_Windows_32-bit.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Windows_32-bit.tar.gz)|2.9 Mb |2023-02-08 |21a1ee95e7f6cf48f029396fb2d5dc77 |
|[hctl_0.1.7_Windows_64-bit.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Windows_64-bit.tar.gz)|2.9 Mb |2023-02-08 |082bfe11a98b9458fa0c3021e3b1ca67 |
|[hctl_0.1.7_Windows_arm64.tar.gz](https://download.hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Windows_arm64.tar.gz)|2.7 Mb |2023-02-08 |3e6adef0e76a799eb15add028d26ae66 |

Other releases of hctl: [here](https://hiplot.cn/download/hctl)

It is required to login Hiplot (ORG) server first using the `hctl login` command. `hctl plot` command can be used to draw plots by using the parameter file and data files.

Demo input files of hctl can be download from here: [demo.tar.gz](https://hiplot.cn/download/hctl/_demo.tar.gz).

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot.cn/download/hctl/v0.1.7/hctl_0.1.7_Linux_64-bit.tar.gz
wget https://hiplot.cn/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.7_Linux_64-bit.tar.gz
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
## Command-line client to draw plots of [Hiplot](https://hiplot.cn) website. More see here https://github.com/hiplot.
## 
## Usage:
##   hctl [flags]
##   hctl [command]
## 
## Available Commands:
##   completion  Generate the autocompletion script for the specified shell
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
##   -k, --taskname string   task ID (default is random). (default "435f5f32-4750-4e74-b97e-13a40d5d0f3e")
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
##   hctl plot -p _demo/tsne/basic-tsne-params.json -o /tmp/hiplot-tsne --load-example true
## 
## Flags:
##       --check-task            check task status, taskname and tmpcode are required.
##   -c, --config string         json format tool config file.
##   -d, --data string           data table file (sepreate by comma).
##   -h, --help                  help for plot
##       --load-example string   load example field (only work for hctl config export) (default "false")
##   -m, --module string         module name: basic, advance. (default "basic")
##   -p, --params string         json format tool params file (exported by Hiplot).
##       --print-links           print result links
##       --temp-code string      task tempcode. (default "mZuBg2X")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "3429232c-e2b8-4d1d-b89f-1a6b4dffcb02")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
