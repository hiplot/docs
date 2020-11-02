# Download


## hctl

hctl 是 Hiplot 网站的命令行程序. 它可以让用户在命令行环境下使用 Hiplot 网站的绘图系统。

最新发布版本 (v0.1.2):

**Linux:**

- [hctl_0.1.2_Linux_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Linux_64-bit.tar.gz)
- [hctl_0.1.2_Linux_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Linux_32-bit.tar.gz)

**MAC OSX:**

- [hctl_0.1.2_Darwin_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Darwin_64-bit.tar.gz)


**Windows:**

- [hctl_0.1.2_Windows_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Windows_64-bit.tar.gz)
- [hctl_0.1.2_Windows_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Windows_32-bit.tar.gz)

使用 hctl 进行绘图之前，用户需要使用 `hctl login` 命令获得 Hiplot 的服务授权。 登录成功后，即可使用 `hctl plot` 命令进行绘图：输入数据为一个 JSON 格式的参数文件和/或一个/多个数据表。

示例输入 [demo.tar.gz](https://hiplot.com.cn/download/hctl/_demo.tar.gz)。

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Linux_64-bit.tar.gz
wget https://hiplot.com.cn/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.2_Linux_64-bit.tar.gz
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
##   -h, --help             help for hctl
##       --log-dir string   log dir. (default "/tmp/_log")
##   -o, --out-dir string   output dir. (default "/tmp")
##       --save-log         Save log to file.
##   -k, --task-id string   task ID (default is random). (default "653f51df-f14e-4dcf-9a26-7efbe5c74c1a")
##       --verbose int      verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
##   -v, --version          version for hctl
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
## 
## Flags:
##   -c, --config string         json format tool config file.
##   -d, --data string           data table file (sepreate by comma).
##   -h, --help                  help for plot
##       --load-example string   load example field (only work for hctl config export) (default "true")
##   -m, --module string         module name: basic, advance. (default "basic")
##   -p, --params string         json format tool params file (exported by Hiplot).
##       --print-links           print result links
##       --temp-code string      task tempcode. (default "GKgFxTK")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string   log dir. (default "/tmp/_log")
##   -o, --out-dir string   output dir. (default "/tmp")
##       --save-log         Save log to file.
##   -k, --task-id string   task ID (default is random). (default "1fdd6168-29c7-46b7-8d07-a327c627fce6")
##       --verbose int      verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
