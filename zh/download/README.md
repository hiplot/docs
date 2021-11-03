# Download



## 桌面客户端

我们基于 [Electron](https://www.electronjs.org/) 构建了 Hiplot 的桌面客户端。示例数据和 UI 组件将在特定版本下被固定。

Latest release version (v0.1.0):

**Linux:**

- [Hiplot_Desktop_0.1.0_Linux_x86_64.AppImage](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Linux_x86_64.AppImage)
- [Hiplot_Desktop_0.1.0_Linux_amd64.snap](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Linux_amd64.snap)

**Windows:**

- [Hiplot_Desktop_0.1.0_Windows.exe](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Windows.exe)

**MAC OSX**

- [Hiplot_Desktop_0.1.0_Darwin.dmg](https://hiplot.com.cn/download/desktop/v0.1.0/Hiplot_Desktop_0.1.0_Darwin.dmg)

```
## hctl

hctl 是 Hiplot 网站的命令行程序. 它可以让用户在命令行环境下使用 Hiplot 网站的绘图系统。

最新发布版本 (v0.1.3):

**Linux:**

- [hctl_0.1.3_Linux_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Linux_64-bit.tar.gz)
- [hctl_0.1.3_Linux_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Linux_32-bit.tar.gz)

**MAC OSX:**

- [hctl_0.1.3_Darwin_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Darwin_64-bit.tar.gz)


**Windows:**

- [hctl_0.1.3_Windows_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Windows_64-bit.tar.gz)
- [hctl_0.1.3_Windows_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Windows_32-bit.tar.gz)

使用 hctl 进行绘图之前，用户需要使用 `hctl login` 命令获得 Hiplot 的服务授权。 登录成功后，即可使用 `hctl plot` 命令进行绘图：输入数据为一个 JSON 格式的参数文件和/或一个/多个数据表。

示例输入 [demo.tar.gz](https://hiplot.com.cn/download/hctl/_demo.tar.gz)。

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot.com.cn/download/hctl/v0.1.3/hctl_0.1.3_Linux_64-bit.tar.gz
wget https://hiplot.com.cn/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.3_Linux_64-bit.tar.gz
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
```

### 命令行主程序


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
##   -k, --taskname string   task ID (default is random). (default "3274a56d-f0f5-4254-b742-27255dab4613")
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
##       --temp-code string      task tempcode. (default "PIAMOtu")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "1a3e53bf-9d17-4e27-acfe-5269714c8423")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
