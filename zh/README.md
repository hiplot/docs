# 概览

[中文版](./) | [English Version](../)

<img src="https://img.shields.io/badge/lifecycle-experimental-orange.svg" alt="Life cycle: experimental">

数据可视化在科研工作中发挥着越来越重要的作用。基于可视化图形，我们可以更好地展示科研数据中的主要特征和规律。以生物医学为例，大多数临床医学学生和初级科研工作者一般需要花费数十天乃至数月的时间去熟悉和掌握常用的数据可视化工具，如 SPSS、Origin 和 Graphpad。之后才有可能去完成部分基础的数据统计分析和可视化。 如果是要专门从事数据分析和建模方向的相关人员则还需额外学习一门甚至数门编程语言（如 MATLAB、R 和 Python ）。而要达到能够自由探索数据的水平则还需要额外花费更多时间去深入学习和进阶。

近年来，随着各类云计算平台（如生物医学领域的 Galaxy 和 DNAnexus）、相关 IT 软硬件基础设施的发展（如分布式计算、容器技术、软件包管理器、数据分析流程构建框架等），初级科研工作者已经可以相对比较轻松地获取相关数据的上游分析结果。特别是当常规组学数据的上游分析流程趋于稳定和完善，数据上游分析流程的可自定义程度和可变程度已经大大降低。而数据分析下游流程中的可视化和个性化深度解读已经成为当前用户面临的最大挑战：

1.  开源用户社区开发的可视化软件或方法大多还没有很好的整合在一个统一的用户接口之下；
2.  国内缺少活跃的针对科研数据可视化的协作社区，"** 画图群" 成为初级科研用户为数不多的选择；
3.  国内缺少类似于 Graphpad、MATLAB 核心数据可视化软件和平台，在被美国禁用之后，只能花费额外成本进行流程迁移或重头开始开发；
4.  国内外开发的一些平台和工具用户体验一般：用户界面不够美观；中英文支持的屈指可数；上手仍然有一定难度；部分平台的文件管理不太方便；用户能够主动参与平台建设的屈指可数；
5.  相关数据可视化工具仍然相对匮乏，杂志和用户需求旺盛，已发布多年的 Circos 圆圈图可视化，通过封装一些便捷操作就可以发表文章：

-   Rasche H, Hiltemann S. Galactic Circos: User-friendly Circos plots within the Galaxy platform. Gigascience. 2020;9(6):giaa065. doi:10.1093/gigascience/giaa065;
-   Marx H, Coon JJ. MS-Helios: a Circos wrapper to visualize multi-omic datasets. BMC Bioinformatics. 2019;20(1):21. Published 2019 Jan 11. doi:10.1186/s12859-018-2564-9; Yu Y, Ouyang Y, Yao W.
-   shinyCircos: an R/Shiny application for interactive creation of Circos plot. Bioinformatics. 2018;34(7):1229-1231. doi:10.1093/bioinformatics/btx763）

![Galaxy Platform](https://s1.ax1x.com/2020/07/08/UEk8mV.png)

Hiplot 是由 openbiox 社区于 2019 年 10 月发起，并在新冠疫情爆发后快速发展的一个社区开发项目：致力于建立一个快速迭代、支持中英文环境的科研数据可视化平台和协作社区。

目前该平台建设已初具规模，已提供 40 余种基于 R 语言的基础可视化的功能：

![](https://pic3.zhimg.com/80/v2-9ec5275aff039798cf35ba73e109de38_720w.jpg)

Hiplot 项目发起的初衷就是为了满足广大临床医学学生和科研工作者科研数据可视化的基础需求：

1.  基础可视化：覆盖大多数基础的科研可视化功能，参照 SPSS、GraphPad、国内外开发的相关可视化软件和工具
2.  进阶可视化：包括 Shiny 在内的复杂可视化图形和应用；文献图表的重现和再分析；新的可视化图形展示插件：如基于 Circos、circlize 的二次开发；openbiox 社区贡献的可视化应用（如 UCSCXenaShiny 和 bioshiny）
3.  附加模块：低计算量的附加模块（如文献数据资源下载、ID 转换、文件格式转换、RESTful APIs 访问等）
4.  文件管理（支持上传、下载、复制、移动、删除、在线预览和编辑等操作）

其他一些我正在收集和考虑纳入 Hiplot 平台中的可视化功能：

![](https://pic4.zhimg.com/80/v2-6b6594e17dd1d26a23bcc4f56df5c7c2_720w.jpg)

**用户交互界面展示（部分）：**

![](https://picb.zhimg.com/80/v2-fe6589d314076c4ed185d52bfb86eba3_720w.jpg)

登录

![](https://pic4.zhimg.com/80/v2-99efc0528963311e562a49eb828822c4_720w.jpg)

注册

![](https://pic1.zhimg.com/80/v2-92ec8062a7548e83ead15e8fc15f27ab_720w.jpg)

基础绘图卡片浏览与检索

![](https://pic3.zhimg.com/80/v2-269dac241079408cd78b68a36b38ae41_720w.jpg)

绘图示例 | 相关性热图

![](https://pic3.zhimg.com/80/v2-7f775eb457c0ba3c410cbfb23ec9cd17_720w.jpg)

绘图示例 | 免疫浸润分析

![](https://picb.zhimg.com/80/v2-562a022353bc8eac39f4e5f5db4f320e_720w.jpg)

文件上传窗口

![](https://pic1.zhimg.com/80/v2-e22822a6d179aaff5320b478ee0388ba_720w.jpg)

文件浏览与管理

![](https://pic2.zhimg.com/80/v2-24406918e07c06aeae75cb6e704b6eeb_720w.jpg)

文件在线查看和编辑（支持文本文件、XLSX、CSV、TXT 等）

![](https://pic3.zhimg.com/80/v2-efcf77da5d64ecff6deac844bd3abb46_720w.jpg)

文件在线查看和编辑（支持文本文件、XLSX、CSV、TXT 等）

![](https://pic3.zhimg.com/80/v2-c2566db9ed1c631ac73a84459a2b2d56_720w.jpg)

提交文献原文和附录下载任务（基于 openbiox 社区贡献的 [bget](https://github.com/openanno/bget) 项目）

![](https://picb.zhimg.com/80/v2-af4a1fa4bf3913c1cebe2c1dcb2dea2a_720w.jpg)

提交文献原文和附录下载任务（基于 openbiox 社区贡献的 [bget](https://github.com/openanno/bget) 项目）

如果你想贡献 Hiplot 项目，欢迎加入我们的用户社区：[Discord](https://discord.gg/vX6tSax)

本文档内容遵循 <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
