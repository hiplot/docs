# Usage of basic plots

## Volcanogram

- *brief introduction* 

  The volcanogram is a visual representation of the difference in gene expression between two samples.

- Analysis of case data

  The loaded data is the gene name and its corresponding logFC and p.value.

- Interpretation of case statistics graphics

  The horizontal axis is denoted by log2 (fold change), and the more different genes are distributed at both ends of the picture.The ordinate is denoted by -log10 (p.value) and is the negative log of the P value of T test significance.Blue dots represent down-regulated genes, red dots represent up-regulated genes, and gray dots represent genes that are not significantly different.

## Heatmap

- *brief introduction* 

  Heat map is an intuitive and visual method for analyzing the distribution of experimental data, which can be used for quality control of experimental data and visualization display of difference data, as well as clustering of data and samples to observe sample quality.

- Analysis of case data

  The loaded data are Count (gene name and corresponding gene expression value), sampleInfo (sample name, group and other relevant information, such as age), and gene information (gene name and its pathway, such as tumor pathway and physiological pathway).

- Interpretation of case statistics graphics

  In the example figure, each small grid represents each gene, and the shade of color represents the expression level of this gene. The larger the expression level is, the darker the color will be (red is up-regulated, green is down-regulated).Each row represents the expression of each gene in a different sample, and each column represents the expression of all genes in each sample.The upper tree represents the clustering analysis results of different samples of different groups and ages, and the left tree represents the clustering analysis results of different genes from different samples.
