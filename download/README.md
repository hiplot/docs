# Download



## Desktop Client

We build the desktop client of Hiplot based on the [Electron](https://www.electronjs.org/). The demo data and UI components are fixed in the desktop client under the given version.

Latest release version (v0.1.0):

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
##   -k, --taskname string   task ID (default is random). (default "5450ae95-0240-4a7e-8fd2-569fa8b48b28")
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
##       --temp-code string      task tempcode. (default "SdgVZ7t")
##   -t, --tool string           tool name (e.g. heatmap).
## 
## Global Flags:
##       --log-dir string    log dir. (default "/tmp/_log")
##   -o, --out-dir string    output dir. (default "/tmp")
##       --proxy string      HTTP proxy to query.
##       --save-log          Save log to file.
##   -k, --taskname string   task ID (default is random). (default "36175dad-389e-433c-a348-3c489538f40b")
##       --timeout int       set the timeout of per request. (default 35)
##       --verbose int       verbose level (0:no output, 1: basic level, 2: with env info) (default 1)
```
