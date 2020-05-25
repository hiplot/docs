# Usage

## File Management

Users can upload the files using the web interface and RESTful APIs:

![Upload window](https://s1.ax1x.com/2020/07/08/UV5E3d.png)

The meaning of the bottom buttons:

- view cloud files
- add one local file
- add all files in one directory
- add paste data as a new file
- change default destination directory name (default `upload`)
- start to upload all added files
- retry all failed upload tasks
- remove all upload tasks

![Uploading files](https://s1.ax1x.com/2020/07/08/UV5VgA.png)

After successfully uploaded, users can manage their files via the following interface:

![Manage files](https://s1.ax1x.com/2020/07/08/UV5A9H.png)

Users can view, edit, copy, move, and delete all files excluding the `public` directory, which is a soft link for demo plots.

The meaning of the bottom buttons:

- upload file
- create a new directory
- download selected directories and files
- copy selected directories and files to another directory
- move selected directories and files to another directory
- delete selected directories and files

## Visualization Plugins

Visualization plugins of Hiplot are divided into two parts:

- basic
- advance

The basic module can be used to plot several basic plots for scientific data (e.g. boxplot and heatmap), and most are one plugin one plot.

The advanced module can be used to plot more complex items (e.g. output HTML or PDF report and personalized data visualization process).

A visualization plugin of Hiplot mainly contains six-part:

- data importer or selector (table and input box)
- data arguments
- general parameters (e.g. title, width, height, alpha, and task name), which are shared by all plugins
- extra parameters, which is plugin-specific (e.g. circle shape for correlation heatmap)
- preview window (e.g. HTML, PDF, PNG/JPG, Table), support export
- server-side R script and RESTful APIs

![Demo of Hiplot correlation heatmap](https://s1.ax1x.com/2020/07/08/UV5zGQ.png)

## Other Tasks

Apart from the interactive plots, Hiplot also supports users to submit other types of tasks, e.g. download data files or publications.

![Demo to submit bget task](https://s1.ax1x.com/2020/07/08/UVIgzj.png)

Like the following picture, we submit a [bget](https://github.com/openanno/bget) task to query the paper and the supplementary files of publication.

After submit, the user can view the tasks status and detail information (e.g. log and download result):

![View task status](https://s1.ax1x.com/2020/07/08/UVIRQs.png)

![View detail information of submitted task](https://s1.ax1x.com/2020/07/08/UVoiSH.png)