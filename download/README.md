# Download


## hctl

hctl is the command-line client of Hiplot website. It can be used to draw plots without the web environment.

Latest release version (v0.1.2):

**Linux:**

- [hctl_0.1.2_Linux_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Linux_64-bit.tar.gz)
- [hctl_0.1.2_Linux_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Linux_32-bit.tar.gz)

**MAC OSX:**

- [hctl_0.1.2_Darwin_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Darwin_64-bit.tar.gz)


**Windows:**
- [hctl_0.1.2_Windows_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Windows_64-bit.tar.gz)
- [hctl_0.1.2_Windows_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Windows_32-bit.tar.gz)

It is required to login Hiplot server first using the `hctl login` command. `hctl plot` command can be used to draw plots by using the parameter file and data files.

Demo input files of hctl can be download from here: [demo.tar.gz](https://hiplot.com.cn/download/hctl/_demo.tar.gz).

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot.com.cn/download/hctl/v0.1.2/hctl_0.1.2_Linux_64-bit.tar.gz
wget https://hiplot.com.cn/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.2_Linux_64-bit.tar.gz
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
##   -h, --help             help for hctl
##       --log-dir string   log dir. (default "/tmp/_log")
##   -o, --out-dir string   output dir. (default "/tmp")
##       --save-log         Save log to file.
##   -k, --task-id string   task ID (default is random). (default "4b972a37-e32d-407f-b33b-25616687d282")
##       --verbose int      verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
##   -v, --version          version for hctl
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
## 
## Flags:
##   -c, --config string         json format tool config file.
##   -d, --data string           data table file (sepreate by comma).
##   -h, --help                  help for plot
##       --load-example string   load example field (only work for hctl config export) (default "true")
##   -m, --module string         module name: basic, advance. (default "basic")
##   -p, --params string         json format tool params file (exported by Hiplot).
##       --print-links           print result links
##       --temp-code string      task tempcode. (default "2aXExDR")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string   log dir. (default "/tmp/_log")
##   -o, --out-dir string   output dir. (default "/tmp")
##       --save-log         Save log to file.
##   -k, --task-id string   task ID (default is random). (default "63829dbd-13fb-47b8-9cc9-b957d8053287")
##       --verbose int      verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
