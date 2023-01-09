# Download



## 桌面客户端

我们基于 [Electron](https://www.electronjs.org/) 构建了 Hiplot 的桌面客户端。示例数据和 UI 组件将在特定版本下被固定。

最新版本:


|File                                  |Size     |Date       |MD5                              |
|:-------------------------------------|:--------|:----------|:--------------------------------|
|[Hiplot_Desktop_0.2.0_Darwin.dmg](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Darwin.dmg)|85.5 Mb  |2022-04-23 |3b9b172ad7c42f21cc5cad7193d3e6fa |
|[Hiplot_Desktop_0.2.0_Linux_amd64.deb](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_amd64.deb)|59.8 Mb  |2022-04-23 |1364a9cdda29899cdf7559b21c795839 |
|[Hiplot_Desktop_0.2.0_Linux_x64.apk](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x64.apk)|87.2 Mb  |2022-04-23 |1da132999464e6d8cec6d5bf28f33912 |
|[Hiplot_Desktop_0.2.0_Linux_x86_64.rpm](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Linux_x86_64.rpm)|59.9 Mb  |2022-04-23 |1cbaf4cbe039a68cf3c6abeeabacf861 |
|[Hiplot_Desktop_0.2.0_Windows.exe](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows.exe)|127.7 Mb |2022-04-23 |e3209b49148a2107ef4cc5f28de48558 |
|[Hiplot_Desktop_0.2.0_Windows_ia32.exe](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_ia32.exe)|62.7 Mb  |2022-04-23 |bc70b084a6e7357ba2514b053c74ffc8 |
|[Hiplot_Desktop_0.2.0_Windows_x64.exe](https://download.hiplot-academic.com/download/desktop/v0.2.0/Hiplot_Desktop_0.2.0_Windows_x64.exe)|65.8 Mb  |2022-04-23 |9e52e69fe0089ac2d9f411a91e29c0ac |

其他桌面版本: [这里](https://download.hiplot-academic.com/download/desktop/)

## hctl

hctl 是 Hiplot 网站的命令行程序. 它可以让用户在命令行环境下使用 Hiplot 网站的绘图系统。

最新发布版本 (v0.1.5):


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

其他 hctl 版本: [这里](https://hiplot-academic.com/download/hctl)

使用 hctl 进行绘图之前，用户需要使用 `hctl login` 命令获得 Hiplot 的服务授权。 登录成功后，即可使用 `hctl plot` 命令进行绘图：输入数据为一个 JSON 格式的参数文件和/或一个/多个数据表。

示例输入 [demo.tar.gz](https://hiplot-academic.com/download/hctl/_demo.tar.gz)。

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot-academic.com/download/hctl/v0.1.5/hctl_0.1.5_Linux_64-bit.tar.gz
wget https://hiplot-academic.com/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.5_Linux_64-bit.tar.gz
tar -xzvf _demo.tar.gz

./hctl login

# 只输入本地数据文件
./hctl plot -c _demo/heatmap/config.json -t heatmap -d _demo/heatmap/countData.txt,_demo/heatmap/sampleInfo.txt,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-pure-data-mode

# 只使用远程服务器文件
./hctl plot -c _demo/heatmap/config2.json -t heatmap -o /tmp/hiplot-pure-remote-data-mode

# 混合使用本地数据和远程服务器文件
./hctl plot -c _demo/heatmap/config3.json -t heatmap -d _demo/heatmap/countData.txt,,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-mixed-mode

# 使用 Hiplot 网站导出的参数文件
./hctl plot -p _demo/heatmap/params.json -t heatmap -o /tmp/hiplot-params-mode

# hiplot config 和 plot 命令联合
## 展示 hctl 支持的网页插件
hctl config -l
## 下载 basic/tsne 插件配置文件
hctl config basic/tsne
## 绘制 tsne 图形
hctl plot -p basic-tsne-params.json -o /tmp/hiplot-tsne
```

### 命令行主程序


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
##   -k, --taskname string   task ID (default is random). (default "e01a4a51-3c3d-4fff-8044-e5c5e7244072")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
##   -v, --version           version for hctl
## 
## Use "hctl [command] --help" for more information about a command.
```

### 绘图子程序


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
##       --temp-code string      task tempcode. (default "g5w69Kn")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "e2c5cf00-5902-4d8a-8add-293b7330b06a")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
