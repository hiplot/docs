# Download


## hctl

hctl is the command-line client of Hiplot website. It can be used to draw plots without the web environment.

Latest release version (v0.1.0):

**Linux:**

- [hctl_0.1.0_Linux_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.0/hctl_0.1.0_Linux_64-bit.tar.gz)
- [hctl_0.1.0_Linux_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.0/hctl_0.1.0_Linux_32-bit.tar.gz)

**MAC OSX:**

- [hctl_0.1.0_Darwin_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.0/hctl_0.1.0_Darwin_64-bit.tar.gz)


**Windows:**
- [hctl_0.1.0_Windows_64-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.0/hctl_0.1.0_Windows_64-bit.tar.gz)
- [hctl_0.1.0_Windows_32-bit.tar.gz](https://hiplot.com.cn/download/hctl/v0.1.0/hctl_0.1.0_Windows_32-bit.tar.gz)

It is required to login Hiplot server first using the `hctl login` command. `hctl plot` command can be used to draw plots by using the parameter file and data files.

Demo input files of hctl can be download from here: [demo.tar.gz](https://hiplot.com.cn/download/hctl/_demo.tar.gz).

```bash
## Linux 64 Demo
mkdir /tmp/hiplot
cd /tmp/hiplot
wget https://hiplot.com.cn/download/hctl/v0.1.0/hctl_0.1.0_Linux_64-bit.tar.gz
wget https://hiplot.com.cn/download/hctl/_demo.tar.gz

tar -xzvf hctl_0.1.0_Linux_64-bit.tar.gz
tar -xzvf _demo.tar.gz

./hctl login

# only input data files
./hctl plot -c _demo/heatmap/params.json -t heatmap -d _demo/heatmap/countData.txt,_demo/heatmap/sampleInfo.txt,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-pure-data-mode

# only use remote files
./hctl plot -c _demo/heatmap/params2.json -t heatmap -o /tmp/hiplot-pure-remote-data-mode

# mixed usage
./hctl plot -c _demo/heatmap/params3.json -t heatmap -d _demo/heatmap/countData.txt,,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-mixed-mode
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
##   help        Help about any command
##   login       Login Hiplot Website.
##   plot        Plot functions of Hiplot Website.
## 
## Flags:
##   -h, --help             help for hctl
##       --log-dir string   log dir. (default "/tmp/_log")
##   -o, --out-dir string   output dir. (default "/tmp")
##       --save-log         Save log to file.
##   -k, --task-id string   task ID (default is random). (default "182bd168-3bc6-4507-9745-ce9f81bd33ea")
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
##   hctl plot -c _demo/heatmap/params.json -t heatmap -d _demo/heatmap/countData.txt,_demo/heatmap/sampleInfo.txt,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-pure-data-mode
##   hctl plot -c _demo/heatmap/params2.json -t heatmap -o /tmp/hiplot-pure-remote-data-mode
##   hctl plot -c _demo/heatmap/params3.json -t heatmap -d _demo/heatmap/countData.txt,,_demo/heatmap/geneInfo.txt -o /tmp/hiplot-mixed-mode
## 
## Flags:
##   -d, --data string        data table file (sepreate by comma).
##   -h, --help               help for plot
##   -m, --module string      module name: basic, advance. (default "basic")
##   -c, --params string      json format tool params file (exported by Hiplot).
##       --print-links        print result links
##       --temp-code string   task tempcode. (default "3RxPkCW")
##   -t, --tool string        tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string   log dir. (default "/tmp/_log")
##   -o, --out-dir string   output dir. (default "/tmp")
##       --save-log         Save log to file.
##   -k, --task-id string   task ID (default is random). (default "01f36be0-36ec-4e48-9673-1507a818fa3d")
##       --verbose int      verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
