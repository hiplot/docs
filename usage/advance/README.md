# Advanced Module

## [AGFusion](/advance/agfusion)

Can be used to visualize the structural pattern of fusion genes at the one-dimensional protein and genome level.

- Data table (four columns):

   gene5 | 5'gene

   gene3 | 3'gene

   breakpoint5 | 5‘ breakpoint

   breakpoint3 | 3‘ breakpoint

- Extra parameters

   Reference gene version | Genome version number: hg38 or hg19

   Output WT Gene | Output WT gene structure
## [Chromsomes-Scatter](/advance/chromsomes-scatter)

Visualize values at chromosomal level.
## [ClusterProfiler GO/KEGG](/advance/clusterprofiler-go-kegg)

Detail see [ClusterProfiler Books](https://hiplot.com.cn/books-static/clusterprofiler-book).

Note: 

- Both the .rds format file or the species name (e.g. hsa and rno) can input in the `KEGG DB` parameter (Demo 2).
- All data columns will be independently calculated for enrichment analysis.
- The empty gray region represents that not found significant items. It is optional to adjust the P/Q value for including more items.
## [DiscoverMutTest](/advance/discover-mut-test)

Can be used to analysing co-occurrence and mutual exclusivity in cancer genomics data.
## [DoAbsolute](/advance/doabsolute)

 ABSOLUTE infers multiple models of purity, malignant cell ploidy and absolute somatic copy-numbers from copy ratios data. It determines possible models for absolute copy numbers per cancer cell from a mixed DNA population and gives copy numbers for genomic segments, and if provided mutation data, for mutated alleles.

 More to see:

 - <https://www.genepattern.org/modules/docs/ABSOLUTE>
 - [Analyzing ABSOLUTE Data](https://www.genepattern.org/analyzing-absolute-data)
 ## [Fusion-Circlize](/advance/fusion-circlize)

Visualize fusion genes at chromosomal level.
## [GGtree-MSA](/advance/ggtree-msa)

Can be used to tree with multiple sequence alignment.
## [GISTIC2](/advance/gistic2)

NOTION: please don't use preprocessing feature when you did not get errors related to overlap segments.

For the new parameters, they are not belong to GISTIC2 software and designed for preprocessing the input file to avoid problem related to overlap segments:

- Clean Overlap Segments: enable the preprocessing.
- Min Probe Number for Clean: if preprocessing is enabled, use this value to drop segments with probe number less than this value.## [Ideogram-Heat](/advance/ideogram-heat)

Visualize values at chromosomal level.
## [Oncoplot](/advance/oncoplot)

- Introduction

  Oncoplot can be used to display the landscape of genomic mutations in cancer cohort.## [Pathview](/advance/pathview)

Calculate the mean expression and fill into the KEGG pathway.
## [Sigflow](/advance/sigflow)

Sigflow provides useful mutational signature analysis workflows. It can auto-extract mutational signatures, fit mutation data to all/specified COSMIC reference signatures (SBS/DBS/INDEL).

There is something you need to know when you use this plugin.

1. This plugin is not a complete version, if you want more features, refer to <https://github.com/ShixiangWang/sigflow>.
2. `MAF` in `Mode` parameter means `SBS` + `DBS` + `INDEL`.
3. If you set the `Maximum Signature Number` to `-1`, it will automatically set the maximum signature number based on the mutation type you want to extract signatures.
4. Option `Number of NMF runs` typically set to 30-50.