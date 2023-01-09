# Download



## Desktop Client

We build the desktop client of Hiplot (ORG) based on the [Electron](https://www.electronjs.org/). The demo data and UI components are fixed in the desktop client under the given version.

Latest release version:


|File                                  |Size     |Date       |MD5                              |
|:-------------------------------------|:--------|:----------|:--------------------------------|
|[Hiplot_Desktop_0.2.0_Darwin.dmg](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Darwin.dmg)|85.5 Mb  |2022-04-23 |3b9b172ad7c42f21cc5cad7193d3e6fa |
|[Hiplot_Desktop_0.2.0_Linux_amd64.deb](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_amd64.deb)|59.8 Mb  |2022-04-23 |1364a9cdda29899cdf7559b21c795839 |
|[Hiplot_Desktop_0.2.0_Linux_x64.apk](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x64.apk)|87.2 Mb  |2022-04-23 |1da132999464e6d8cec6d5bf28f33912 |
|[Hiplot_Desktop_0.2.0_Linux_x86_64.rpm](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x86_64.rpm)|59.9 Mb  |2022-04-23 |1cbaf4cbe039a68cf3c6abeeabacf861 |
|[Hiplot_Desktop_0.2.0_Windows.exe](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows.exe)|127.7 Mb |2022-04-23 |e3209b49148a2107ef4cc5f28de48558 |
|[Hiplot_Desktop_0.2.0_Windows_ia32.exe](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_ia32.exe)|62.7 Mb  |2022-04-23 |bc70b084a6e7357ba2514b053c74ffc8 |
|[Hiplot_Desktop_0.2.0_Windows_x64.exe](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_x64.exe)|65.8 Mb  |2022-04-23 |9e52e69fe0089ac2d9f411a91e29c0ac |

Other releases of desktop client: [here](https://hiplot-academic.com/download/desktop)

## hctl

hctl is the command-line client of Hiplot (ORG) website. It can be used to draw plots without the web environment.

Latest release version (v0.1.5):


|File                             |Size   |Date       |MD5                              |
|:--------------------------------|:------|:----------|:--------------------------------|
|[hctl_0.1.6_Darwin_64-bit.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Darwin_64-bit.tar.gz)|2.9 Mb |2022-07-08 |f190fda73ba0b2d1a082a26ae5baccfe |
|[hctl_0.1.6_Darwin_arm64.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Darwin_arm64.tar.gz)|2.8 Mb |2022-07-08 |226be6d982ec451e3781e9685212b521 |
|[hctl_0.1.6_Linux_32-bit.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Linux_32-bit.tar.gz)|2.7 Mb |2022-07-08 |5013c6d3d61a68e344030566d739ce80 |
|[hctl_0.1.6_Linux_64-bit.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Linux_64-bit.tar.gz)|2.8 Mb |2022-07-08 |95b25d72d3a56f0862e48e3980d806a7 |
|[hctl_0.1.6_Linux_arm64.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Linux_arm64.tar.gz)|2.6 Mb |2022-07-08 |045ad19e47e739a90e1593adddddb3ec |
|[hctl_0.1.6_Windows_32-bit.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Windows_32-bit.tar.gz)|2.8 Mb |2022-07-08 |ce57b9c644eeb42f1ec87ad1692e27f7 |
|[hctl_0.1.6_Windows_64-bit.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Windows_64-bit.tar.gz)|2.9 Mb |2022-07-08 |3a5606606a431191ff503102c831f63f |
|[hctl_0.1.6_Windows_arm64.tar.gz](https://download.hiplot-academic.com/download/hctl/v0.1.6/hctl_0.1.6_Windows_arm64.tar.gz)|2.6 Mb |2022-07-08 |2a2a6a0d33b6c251e6a1c9a8ea44780a |

Other releases of hctl: [here](https://hiplot-academic.com/download/hctl)

It is required to login Hiplot (ORG) server first using the `hctl login` command. `hctl plot` command can be used to draw plots by using the parameter file and data files.

Demo input files of hctl can be download from here: [demo.tar.gz](https://hiplot-academic.com/download/hctl/_demo.tar.gz).

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot-academic.com/download/hctl/v0.1.5/hctl_0.1.5_Linux_64-bit.tar.gz
wget https://hiplot-academic.com/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.5_Linux_64-bit.tar.gz
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
## Command-line client to draw plots of [Hiplot](https://hiplot-academic.com) website. More see here https://github.com/hiplot.
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
##   -k, --taskname string   task ID (default is random). (default "edd6b856-654b-4598-a22c-8689fa0b7cf9")
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
##       --temp-code string      task tempcode. (default "Lwizf5M")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "d56e2c68-e187-4ee3-b429-5c0a78a1c0f1")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
