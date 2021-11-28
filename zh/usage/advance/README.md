# 进阶模块

## [AGFusion](/advance/agfusion)

用于在一维蛋白和基因组水平可视化融合基因结构模式。

- 数据表格（四列）：

  gene5 | 5' 基因

  gene3 | 3' 基因

  breakpoint5 | 5‘ 断点

  breakpoint3 | 3‘ 断点

- 额外参数

  参考基因版本 | 基因组版本号：hg38 或 hg19
  
  输出野生型基因 | 同时输出野生型基因结构
## [Chromsomes-Scatter](/advance/chromsomes-scatter)

染色体坐标可视化数值分布。
## [ClusterProfiler GO/KEGG](/advance/clusterprofiler-go-kegg)

详细参数见 [ClusterProfiler Books](https://hiplot.com.cn/books-static/clusterprofiler-book).

注意: 

- `KEGG DB` 参数可以输入 .rds 格式的文件或者物种名 (如 hsa 和 rno) (示例 2)。
- 所有数据列都将独立进行富集分析
- 如果绘图结果中存在灰色空白区，说明未显著富集到条目，可能需要调整 P 或 Q 阈值来纳入更多条目
## [DiscoverMutTest](/advance/discover-mut-test)

用于分析癌症基因突变的共存互斥性。
## [Fusion-Circlize](/advance/fusion-circlize)

使用染色体圈图可视化融合基因。
## [GGtree-MSA](/advance/ggtree-msa)

可以用于可视化进化树和多重序列比对结果。
## [GISTIC2](/advance/gistic2)

⚠️注意：如果程序没有发现 overlap 相关的错误，请不要使用预处理相关的 2 个参数，请保持保持它们为默认值。 

新增加的 2 个参数不属于 GISTIC2 软件本身，它们被设计用来处理 GISTIC2 报告 Overlap 相关错误：

- 预处理 Overlap 片段：激活预处理。
- 预处理最少探针数：如果预处理被激活，该参数可以用来过滤掉小于该参数值的拷贝数片段。 ## [染色体热图](/advance/ideogram-heat)

染色体坐标可视化数值分布。
## [突变全景图](/advance/oncoplot)

- 简介

  突变全景图可以用于展示癌症队列基因组突变概貌。
  ## [Pathview](/advance/pathview)

计算平均表达量，然后在 KEGG 通路中进行展示。
