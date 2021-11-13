# Basic Module

## [Area](/basic/area)

- Introduction

  The area chart displays graphically quantitative data. It is based on the line chart. The area between axis and line are commonly emphasized with colors, textures and hatchings.

- Analysis of case data

  The loaded data are xaxis.value and yaxis.value.

- Interpretation of case statistics graphics

  Different colors represent different groups of area charts.

## [3D Barplot](/basic/barplot-3d)

- Introduction

  3D bar charts are used to provide a 3D look and feel for the data. The third dimension is often used for aesthetic reasons, but it does not improve data reading. Still intended to show comparisons between discrete categories.

- Analysis of case data

  The loaded data are efficacy data of different doses of drugs in different treatment regimens.

- Interpretation of case statistics graphics

  The 3D histogram shows the different therapeutic effects of different treatment groups (groups 1 to 4) with low, medium and high doses. Group 1 had the best effect with medium dose treatment, group 2 had the best effect with high dose treatment, group 3 had no significant difference with dose treatment, and group 4 had the best effect with high dose treatment.

- Extra Parameters

  Phi:The larger the positive value is, the more it tends to observe from the top down. The greater the negative value, the more likely it is to be observed from the bottom of the three-dimensional figure upwards.

  Theta:The Angle at which a three-dimensional figure rotates horizontally.

## [Barplot Color Group](/basic/barplot-color-group)

The color group barplot can be used to display data values in groups, and to label different colors in sequence, which is often used to visualize the results of GO/KEGG pathway enrichment analysis.

- Data table (three columns):

   Term | Entry name, such as GO/KEGG channel name

   Count | The numerical size of the entry, such as the number of genes enriched in a pathway

   Type | Category to which this channel belongs: such as BP/MF/CC/KEGG

- Extra parameters:

   Display number | Used to control the maximum number of entries displayed in each group in the histogram. If set to 4, only the first 4 records of each group in Type will be taken
## [Barplot Errorbar](/basic/barplot-errorbar)

- ### Function Introduction

    Bar plot with error-lines and groups.
    
- ### Data Structure

    Data frame. 
    
    \<1st-col\>: (Numeric) values as Y-axis. 
    
    \<2nd-col\>: (Numeric or String) classes as X-axis. 
    
    \<3rd-col\>: (String) groups as colors and legend.
    

- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    **Special parameters**
    
    Errorbar width: error bar width
    
    Bar border color: error bar border color
    
    **Other notes**

    P-values for two columns of data are calculated by comparison with all samples

    P-values for three columns of data are whether there is a difference within the group

## [Gradient Barplot](/basic/barplot-gradient)

- Introduction

   It is similar to the bubble chart, but on the basis of the histogram, a color gradient rectangle is used to simultaneously display the visualization of two variables.

- Case data analysis

   The first column is Go Term (Go language code), the second column is the number of genes, and the third column is pvalue.

- Graphic interpretation of case statistics

   As shown in the figure, blue is a low pvalue color, and red is a high pvalue color. As the pvalue increases, the color changes from blue to red. The abscissa indicates the number of genes.

- Extra parameters

   Number of impressions: show the number of Go IDs in Go Term

   Horizontal: When it is turned on, the ordinate is Go id, the abscissa is a value, and the graph is a rectangle arranged horizontally. When it is closed, the horizontal and vertical coordinates are reversed, and the graph is a rectangle arranged vertically.

   Low value color: indicates the color displayed by low pvalue

   High value color: indicates the color displayed by high pvalue
## [barplot-line-multiple](/basic/barplot-line-multiple)

- ### Function Introduction

    Displaying multiple bar or line plot in one diagram.
    
- ### Data Structure

    Data frame with multiple columns data (Numeric).

- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    **Special parameters**
    
    Plot type: the type of image (line or bar chart)
    
    Line size: the width of the line corresponding to the line graph
    
    Point size: the size of the data point



## [Barplot](/basic/barplot)

- Introduction

  The bar chart is a statistical chart showing the size of data values in terms of the length of the rectangle.

- Analysis of case data

  The loaded data are efficacy data of different doses of drugs in different treatment regimens.

- Interpretation of case statistics graphics

  Bar charts are used to display category data with rectangular bars whose height or length is proportional to the value they represent. Bar charts can be drawn vertically or horizontally. The bar chart shows the comparison between the discrete categories. One axis of the chart shows the specific categories to be compared, and the other axis represents the measurements. Some bar charts show bars that can also show the values of multiple measurement variables. The bar chart shows the different effects of low, medium, and high doses in different treatment groups (groups 1 to 4). Group 1 had the best effect with medium dose treatment, group 2 had the best effect with high dose treatment, group 3 had no significant difference with dose treatment, and group 4 had the best effect with high dose treatment.

- Extra Parameters

  Bar Type:Dodge means horizontal listing and stack means top - down stacking

  Horizon:Swap the position of the category axis with that of the measurement axis

  Add Numeric Lable:Add numeric lable

## [Beanplot](/basic/beanplot)

- Introduction

  The beanplot is a method of visualizing the distribution characteristics.

- Analysis of case data

  The loaded data is data set (data on treatment outcomes of different treatment regimens).
## [Beeswarm](/basic/beeswarm)

- Introduction 

  The beeswarm is a noninterference scatter plot which is similar to a bee colony.

- Analysis of case data

  The loaded data are  different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups, and dots represent data.

## [Bivariate](/basic/bivariate)

- Introduction

  Display multiple bi-variables relationship.
## [Box plot](/basic/boxplot)

- Introduction

  The box plot is a method of visualizing the distribution characteristics of a set of data by means of a quartile graph.

- Analysis of case data

  The loaded data is data set (data on treatment outcomes of different treatment regimens).

- Interpretation of case statistics graphics

  The abscissa represents several different sets of data, and the ordinate represents the quartile of each set of data respectively. The upper, middle and lower horizontal lines of the box represent the upper, median and lower quartile respectively; The values represented by the upper and lower line segments respectively exponential the maximum and minimum values of the data, and the points outside the box represent outliers. The above figure indicates the P value between two variables. It can be considered that in treatment plan 1, there is a significant difference in efficacy between the middle-dose group and the low-dose group, and so on.

- Extra parameters

  P Value Form:Value is a numeric value, signif is the number of "\*" and no is not showing the P value

  Add Points:Mark out the points represented by numerical value

## [Bubble](/basic/bubble)

- Introduction

  The bubble chart is a statistical chart that shows the third variable by the size of the bubble on the basis of the scatter chart, so that the three variables can be compared and analyzed simultaneously.

- Analysis of case data

  The loaded data are GO Term,Gene Ridio, Gene count and P-value.

- Interpretation of case statistics graphics

  The x-axis represents Gene Ridio, and the y-axis is GO Term; The size of the dot represents the number of genes, and the color of the dot represents the high or low P value.

- Extra Parameters

  Show Numbers:Displays the number of bubbles

  Color Theme:Displays the color theme for the P value

## [Bumpchart](/basic/bumpchart)

- Introduction

Bump chart can be used to display the change of grouped values.
## [Calibration Curve](/basic/calibration-curve)

- ### Function Introduction

    The calibration curve is used to evaluate the consistency / calibration, i.e. the difference between the predicted value and the real value
    
- ### Data Structure

    Data frame of multi columns data (Numeric allow NA). i.e the survival data (status with 0 and 1).

- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    **Special parameters**
    
    Model: model calculation method (default is linear fitting model)
    
    Cmmethod: the method to check the model (km algorithm by default)
    
    Method: calibration method (boot method by default)
    
    Time (day): time, support time unit is day (default 365 days)



## [Chi-square-fisher Test](/basic/chi-square-fisher)

- Introduction

   Chi-square and Fisher test can be used to test the frequency difference of categorical variables. The tool will automatically select the statistical method of Chi-square and Fisher exact test.

- Data Table

   The data table supports two formats: contingency table (example 1) and single-row record table (example 2)

- Extra parameters

   Loop Method | The tool will generate all permutations and combinations that can be compared, and then test the differences between the two groups through traversal, optionally traversing by the rows and columns of the contingency table

   Add Mean | Add mean to test

   Add Median | Add median to test
## [Chord](/basic/chord)

- ### Function Introduction

    The complex interaction is visualized in the form of chord graph.
    
- ### Data Structure

    Data frame or matrix of interaction of genes with pathways or gene ontologys.

- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    
    **Special parameters**
    
    Dist Name: distance between label and chord graph
    
    Circle width: the width of the circle border of a chord graph
    
    Label distance: the distance of the label
    
    Link visible: is the link shown in the chord diagram
    
    Scale: is the chord graph displayed according to the proportion of free scaling of elements
    

## [Circular Barplot](https://hiplot.com.cn/basic/circular-barplot)

- Introduction

  The circular barplot is used to display the data values with circular bars across discrete categories for comparisons.

- Analysis of case data

  The loaded data have three columns, with the first represent individual items, the second for different groups and the third for data values.

- Interpretation of case statistics graphics

  As shown in the example figure, four different groups with every individual items are showed with circular bars. Each bars are colored by their groups, and the data values and item names were labeled on the end of the bars. 

- Extra Parameters

  Sort Value: whether the data values in each group need to bed sorted, default is not sorted.

  Label: whether the item names are labeled on the bars, default is labeled.

  Gapbar Num: set the number of gapped bars for separate each groups.

  Label Size: set the font size of labels.



## [Contour(Matrix)](/basic/contour-matrix)

- Introduction

  The contour map (matrix) is a graph that displays three-dimensional data in a two-dimensional form

- Analysis of case data

  The loaded data is a matrix.

- Interpretation of case statistics graphics

  Yellow represents the highest, dark purple represents the lowest, the height scale range is 90-190.

## [Contour (XY)](/basic/contour-xy)

- Introduction

  Contour plot (XY) is a data processing method that reflects data density through contour line.

- Analysis of case data

  The loaded data are two variables.

- Interpretation of case statistics graphics

  Just as contour lines in geography represent different heights, different contour lines in contour maps represent different densities. The closer to the center, the smaller contour loop is, and the higher the regional data density is. For example, the data density of yellow area is the highest, while that of blue area is the lowest.

## [Corelation Heatmap](/basic/cor-heatmap)

- Introduction

  The correlation heat map is a graph that analyzes the correlation between two or more variables.

- Analysis of case data

  The loaded data are  the gene names and the expression of each sample.

- Interpretation of case statistics graphics

   Red indicates positive correlation between two genes, blue indicates negative correlation between two genes, and the number in each cell indicates correlation coefficient.

- Extra parameters

  Correlation  : Row means correlation calculation by row, COL means correlation calculation by column.

  Half: Upper for the image on the upper left, Lower for the image on the lower right, and full for the panorama.

  Shape:Circle means circles and square means squares.

  Reorder:Sort by the resulting correlation coefficient.

## [D3 Wordcloud](/basic/d3-wordcloud)

- Introduction

   The word cloud is to visualize the "keywords" that appear frequently in the web text by forming a "keyword cloud layer" or "keyword rendering".

- Case data analysis

   Load data nouns and noun frequencies.

- Graphic interpretation of case statistics

   The icon shows a heart-shaped picture, showing its proportion in the word cloud according to the frequency of nouns.

- Extra parameters

   Gradient mode: change the color to gradient

   Gradient dark: nouns with low word frequency are dark

   Gradient highlight color: nouns with high word frequency are light colors
## [Dendrogram](/basic/dendrogram)

- Introduction

  The dendrogram is a diagram representing a tree. This diagrammatic representation is frequently used in different contexts:In hierarchical clustering, it illustrates the arrangement of the clusters produced by the corresponding analyses.

  In computational biology, it shows the clustering of genes or samples, sometimes in the margins of heatmaps. 

- Analysis of case data

  The loaded data are gene name and corresponding gene expression value.

- Interpretation of case statistics graphics

  The figure is like a tree perpendicular to 90°. M1-M10 represents the root, and the branches grow and converge to the right to form the trunk of the branch.It can be seen that the figure generates 2 classes, 4 classes, and so on.

- Extra Parameters

  Clade:

  Distance Measure:

  Type of tree:Change the shape of the tree

  Add Lable Color:After clustering, samples with similar names and colors are similar

## [Mirror Density & Histogram](/basic/density-hist-mirror)

- Introduction

  The mirror density & histogram is a graph used to observe the distribution of continuous variables in two side view: top and bottom## [Density](/basic/density)

- Introduction

  The kernel density map is a graph used to observe the distribution of continuous variables.

- Analysis of case data

  The loaded data is the data set (data on treatment outcomes of different treatment regimens).

- Interpretation of case statistics graphics

  Different colors represent different groups, with values on the horizontal axis and frequencies on the vertical axis.

- Extra parameters

  Stack:

## [Diverging scale](/basic/diverging-scale)

- Introduction

  The diverging scale is a graph that maps a continuous, quantitative input to a continuous fixed interpolator.

- Analysis of case data

  The first column is a list of model names, and the remaining columns enter the relevant indicators and corresponding values.

- Interpretation of case statistics graphics

  Hp data is shown on the horizontal axis, model names (classification) are shown on the vertical axis, models above average are shown in red, and models below average are shown in blue. Data is assigned on a scale of 2 by size.

- Extra parameters

  Type: Lollipop represents the drawing of sliding beads on both sides of the central axis;Bar represents a bar graph drawn on both sides of the central axis.

  Scale: When scale is turned on, the data is normalized and displayed on a scale of ±2; when scale is turned off, the vertical slide ball chart and histogram are displayed.

  Line size: As the right pull value increases, the red and blue lines extending from the vertical axis become thicker.

  Point size: As the value of the right pull increases, the point of the horizontal and vertical values at the end of the red and blue lines becomes larger.

  Color: indicates the line color, the default red is the positive line color, and blue is the negative line color.

## [Donut](/basic/donut)

- Introduction

  The donut is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included. Doughnut charts are similar to pie charts in that their aim is to illustrate proportions.

- Analysis of case data

  The loaded data are different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups and different areas represent data and proportion.

## [Dotchart](/basic/dotchart)

- Introduction

  Sliding bead chart is a graph of beads sliding on a column. It is the superposition of bar chart and scatter chart.

- Analysis of case data

  The loaded data are gene names and their corresponding gene expression values and groups.

- Interpretation of case statistics graphics

  Each color represents a different grouping, so that the differences in gene expression values can be intuitively understood.

## [Dual Y Axis Chart](/basic/dual-y-axis)

- Introduction

The dual Y-axis graph can put two groups of data with larger orders of magnitude in the same graph for display.

- Analysis of case data

The loaded data is divided into three columns, the first column is the value of the x-axis, the second column is the value of the left Y-axis, and the third column is the value of the right Y-axis.

- Interpretation of case statistics graphics

In the case data, the Y-axis scale on the left is in the range of 0-100, while the Y-axis scale on the right is 0-1000.

- Extra Parameters

Coefficient: used for scaling of the second Y-axis scale

Color1: The color of the first polyline

Color2: The second discounted color
## [Dumbbell](/basic/dumbbell)

- Introduction

Dumbbell chart can be used to display the change of values.
## [Easy Pairs](/basic/easy-pairs)

- Introduction

  Display a matrix of plots for viewing correlation relationship and distributions of multiple variables.
## [SOM Model Vis](/basic/easy-som)

- Introduction

  Establish the SOM model and conduct the visulization.
## [Eulerr](/basic/eulerr)

- Introduction

   The proportional Venn diagram is a Venn diagram that can display the relationship between sets in proportion.

- Case data analysis

   The first column represents different variables and the intersection relationship between variables. The intersection relationship is connected with the "&" symbol, and the second column indicates the value of the single variable or the intersection between variables.

- Case graphic analysis

   Consistent with the Venn diagram, the area of the single variable or the intersection area of the variable is proportional to its value.
## [Cox Models Forest](/basic/ezcox)

- Introduction

  Cox model forest  is a visual representation of a COX model that constructs a risk forest map to facilitate variable screening

- Analysis of case data

  The loaded data are time,status and multiple variable factor.

- Interpretation of case statistics graphics

  The first column of the table shows the variables and sample numbers, the second column shows the forest plot, and the third column shows the CI 95% confidence interval range, its mean and P values.
  
  Forest map interpretation.
  
  The middle vertical line represents the invalid line, the horizontal line represents the 95% confidence interval of the variable factor, and the length represents the magnitude of the confidence interval. If the confidence interval of a variable factor intersects the invalid line, the variable factor is considered to have no statistical significance, and the position of the square is the point estimation of HR.
  
  Age is the control variable.
  
  The incidence of the ph.ecog factor is greater than that of the age factor, and the ph.ecog factor increases the occurrence of survival (P&LT;0.001, statistically significant).
  
  The incidence of sex is less than that of age, and sex reduces the incidence of survival (P =0.002&lt;0.05, statistically significant).

- Extra parameters

  Merge Models:Integrate multiple variable factors into an icon.

  Drop Controls:Remove the row of the age variable in the diagram.

  Add Caption:Mark the title below the icon to the right.

## [Fan plot](/basic/fan)

- Introduction

  The pie chart is a statistical chart designed to clearly show the percentage of each data group by the size of the pie.

- Analysis of case data

  The loaded data are  different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups and different areas represent data and proportion.

- Extra Parameters

  Show Ratio:Show the proportions next to the different groups.

## [Fishplot](/basic/fishplot)

Detail: https://github.com/chrisamiller/fishplot

- Data Table

  timepoints: specifying the timepoints for each column of the matrix

  parents: specifying parental relationships between clones

  samplename: samplename (support multiple samples)

  other: a numeric matrix containing tumor fraction estimates for all clones at all timepoints

- General parameters

  Color Palette: control background colors

  Color Palette2: control clone colors

- Extra parameters

  Shape: the type of shape to construct the plot out of

  Background Type: a string giving the background type

  Time Unit: time unit added to vline axis

  Border Width: a numeric width for the border line around this polygon

  Padding Pecent: the amount of "ramp-up" to the left of the first timepoint. Given as a fraction of the total plot width. Default 0.2

  Vline: add timepoints vline

  Clone Label: add clone name 

  Fix Missing: whether to "correct" clones that have zero values at timepoints between non-zero values. (the clone must still have been present if it came back)

  Vline of Color: Color of timepoints vline

  Border of Color: Color of border
## [Flowerplot](/basic/flowerplot)

- Introduction

  The flowerplot is used to display  all possible logical relations between a finite collection of different sets .

- Analysis of case data

  The loaded data is a multiple column data frame with different sets .

- Extra Parameters

  angle: set the angle of rotation in degress.

  a: set the radii of the ellipses along the x-axes.

  b: set the radii of the ellipses along the y-axes.

  r: set the radius of the central circle.

  ellipse_col_pal: set the color palette for filling the ellipse.

  circle_col: set the color for filling the central circle.

  lab_size: set the label text cex.



## [Gantt](/basic/gantt)

- Introduction 

  The Gantt chart is a type of bar chart that illustrates a project schedule.

- Analysis of case data

  Data were loaded for 4 samples (4 patients), 3 items (3 treatments), and the start and end times of each treatment.

- Interpretation of case statistics graphics

  The horizontal axis represents the time schedule, the vertical axis represents 4 patients, and the 3 colors represent 3 treatments. The figure can observe the time schedule of different treatments for each patient.

## [Gene Density](https://hiplot.com.cn/basic/gene-density)

- Introduction

  The gene density is used to display the distribution of gene density among different chromosomes with the colored heat map and area graph.

- Analysis of case data

  The loaded data have two files, the first file contain the chromosome information with three columns: chr, start, end, the second file contain the gene information with three columns: chr, start, end.

- Interpretation of case statistics graphics

  As shown in the example figure,  gene density across every chromosomes are displayed with colored heat map and combined area graph.

- Extra Parameters

  Windows:  set the window size to calculate genomic density.

- Reference Packages

  circlize: (Maintainer: Zuguang Gu <z.gu@dkfz.de>)

  ComplexHeatmap: (Maintainer: Zuguang Gu <z.gu@dkfz.de>)

  gtrellis: (Zuguang Gu <z.gu@dkfz.de>)

## [Gene Ranking Dotplot](https://hiplot.com.cn/basic/gene-rank)

- Introduction

  The gene ranking dotplot is used to display the differentially expressed genes with sorted ranking by the log2foldchange and pvalues with colored dot chart. 

- Analysis of case data

  The loaded data have three columns, with the first represent gene names, the second for log2FC and the third for pvalues.

- Interpretation of case statistics graphics

  As shown in the example figure, the x-axis represents the ranking of every differentially expressed genes, the y-axis shows the log2foldchange, the dot is colored by the pvalues and the dot size represents the log2foldchange.

- Extra Parameters

  log2FC: set the threshold of log2foldchage, default is 1.

  TopN: set the number of labeled top genes.

  Label Size: set the font size of labels.



## [Gene Cluster Trend](https://hiplot.com.cn/basic/gene-trend)

- Introduction

  The gene cluster trend is used to display different gene expression trend with multiple lines showing the similar expression patterns in each cluster.

- Analysis of case data

  The loaded data are a gene expression matrix with each row represent a gene and each column represent a time-point sample.

- Interpretation of case statistics graphics

  As shown in the example figure, the genes are clustered into different groups, with each group showing similar expression patterns across different time-points. The average expression trend is highlighted in each cluster.

- Extra Parameters

  Cluster Num: set the number of desired cluster.

  Draw Cluster Centre Line: whether draw the centre line of the average expression in every cluster.

  Threshold: set the threshold for excluding genes. If the percentage of missing values (indicated by NA in the expression matrix) is larger than thres, the corresponding gene will be excluded.

  MinStd: set the threshold for minimum standard deviation. If the standard deviation of a gene's expression is smaller than min.std the corresponding gene will be excluded.

- Reference Packages

  Mfuzz: (Maintainer: Matthias Futschik <matthias.futschik@sysbiolab.eu>)



## [Dist plot](/basic/ggdist)

- Introduction

  The dist plot is a visual diagram using a confidence distribution.

- Analysis of case data

  The loaded data are five conditions and their corresponding values.

- Interpretation of case statistics graphics

  The diagram shows the confidence distribution of the mean under the conditions, and the approximate distribution of the corresponding values under the five conditions can be seen.

## [ggpubr-boxplot](/basic/ggpubr-boxplot)

Try plotting and if you have any problem with the parameters, check <https://rpkgs.datanovia.com/ggpubr/reference/ggboxplot.html> or internet materials.## [Seqlogo](/basic/ggseqlogo)

- Introduction

  The sequence LOGO is a graphic that describes a sequence pattern of binding sites.

- Analysis of case data

  The loaded data is the Sequence of binding sites for multiple transcription factors on multiple genes.

- Interpretation of case statistics graphics

  A sequence of binding sites was displayed in a column of the chart by means of BITS calculation, which could clearly observe the large proportion of bases of different sequences.

- Extra parameters

  Seqtype: DNA represents DNA sequence, RNA represents RNA sequence, aa represents amino acid sequence.

  Color Scheme: Different colors of base 

  Method: BITS represented the proportion of different bases in the vertical coordinate axis with the maximum value of 2 by using the BIT formula;Prob represents the proportion of bases in the total base of the sequence, which is displayed in the vertical axis with the maximum value of 1..

## [ggplot2 Wordcloud](/basic/ggwordcloud)

- Introduction

   The word cloud is to visualize the "keywords" that appear frequently in the web text by forming a "keyword cloud layer" or "keyword rendering".

- Case data analysis

   Load data nouns and noun frequencies.

- Graphic interpretation of case statistics

   Display the proportion of nouns in the word cloud graph according to the frequency of nouns.

- Extra parameters

   Minimum rotation: the minimum clockwise rotation angle of the entry

   Maximum rotation: the maximum clockwise rotation angle of the entry

   Font size range: limit the font size of entries

   Word spacing: font spacing of entries 
## [GOBar Plot](https://hiplot.com.cn/basic/gobar)

- Introduction

  The gobar plot is used to display Z-score coloured barplot of terms ordered alternatively by z-score or the negative logarithm of the adjusted p-value.

- Analysis of case data

  The loaded data are the results of GO enrichment with seven columns: category, GO id, GO term, gene count, gene name, logFC, adjust pvalue and zscore.

- Interpretation of case statistics graphics

  As shown in the example figure,  the x-axis represent each GO term, the y-axis represent the -log(adj_pvalue), each bar is colored by the z-score. If display is used to facet the plot the width of the panels will be proportional to the length of the x scale.

- Extra Parameters

  Display:  A character vector indicating whether a single plot ('single') or a facet plot with panels for each category should be drawn (default='single').

- Reference Packages

  GOplot: (Maintainer: Wencke Walter <wencke.walter@arcor.de>)

## [GOBubble Plot](https://hiplot.com.cn/basic/gobubble)

- Introduction

  The gobubble plot is used to display Z-score coloured bubble plot of terms ordered alternatively by z-score or the negative logarithm of the adjusted p-value.

- Analysis of case data

  The loaded data are the results of GO enrichment with seven columns: category, GO id, GO term, gene count, gene name, logFC, adjust pvalue and zscore.

- Interpretation of case statistics graphics

  As shown in the example figure,  the x- axis of the plot represents the z-score. The negative logarithm of the adjusted p-value (corresponding to the significance of the term) is displayed on the y-axis. The area of the plotted circles is proportional to the number of genes assigned to the term. Each circle is coloured according to its category and labeled alternatively with the ID or term name.If static is set to FALSE the mouse hover effect will be enabled.

- Extra Parameters

  Display:  A character vector indicating whether a single plot ('single') or a facet plot with panels for each category should be drawn (default='single').

  Label ID: Defines whether label the GO term.

  Table Legend: Defines whether a table of GO ID and GO term should be displayed on the right side of the plot or not (default = TRUE).

  Label Threshold: Sets a threshold for the displayed labels. The threshold refers to the -log(adjusted p-value).

- Reference Packages

  GOplot: (Maintainer: Wencke Walter <wencke.walter@arcor.de>)
## [GOCircle Plot](https://hiplot.com.cn/basic/gocircle)

- Introduction

  The gocircle plot is used to display the circular plot combines gene expression and gene- annotation enrichment data. A subset of terms is displayed like the GOBar plot in combination with a scatter plot of the gene expression data. The whole plot is drawn on a specific coordinate system to achieve the circular layout. The segments are labeled with the term ID.

- Analysis of case data

  The loaded data are the results of GO enrichment with seven columns: category, GO id, GO term, gene count, gene name, logFC, adjust pvalue and zscore.

- Interpretation of case statistics graphics

  As shown in the example figure,  the outer circle shows a scatter plot for each term of the logFC of the assigned genes. Red circles display up-regulation and blue ones down-regulation by default.

- Extra Parameters

  Show Items:  A numeric vector defines how many processes are displayed (starting from the first row of data). 

  Label Size: Size of the segment labels (default=5).

  Rad1: The radius of the inner circle (default=2).

  Rad2: The radius of the outer circle (default=3).

  Table Legend: Shall a table be displayd or not? (default=TRUE).

- Reference Packages

  GOplot: (Maintainer: Wencke Walter <wencke.walter@arcor.de>)

## [Half Violin](/basic/half-violin)

- Introduction

  The half violin plot is a statistical graph used to display the distribution and probability density of data by replacing the left part with the data frequency count graph on the basis of keeping the right part of violin graph.

- Analysis of case data

  The loaded data is data set (gene names and expression levels in different tumors).

- Interpretation of case statistics graphics

  The  half violin plot can reflect the data distribution, which is similar to the box diagram. The black horizontal line in the box shows the median gene expression level in each tumor, and the upper and lower edges in the white box represent the upper and lower quartiles in the data set. The distribution of observable numerical points on the left half; The violin graph can also reflect the data density, and the more concentrated the data set, the fatter the graph. The gene expression distribution in the BLGG group is more concentrated, followed by BIC group and AML group.

## [Heatmap](/basic/heatmap)

- Introduction

  Heat map is an intuitive and visual method for analyzing the distribution of experimental data, which can be used for quality control of experimental data and visualization display of difference data, as well as clustering of data and samples to observe sample quality.

- Analysis of case data

  The loaded data are Count (gene name and corresponding gene expression value), sampleInfo (sample name, group and other relevant information, such as age), and gene information (gene name and its pathway, such as tumor pathway and physiological pathway).

- Interpretation of case statistics graphics

  In the example figure, each small grid represents each gene, and the shade of color represents the expression level of this gene. The larger the expression level is, the darker the color will be (red is up-regulated, green is down-regulated).Each row represents the expression of each gene in a different sample, and each column represents the expression of all genes in each sample.The upper tree represents the clustering analysis results of different samples of different groups and ages, and the left tree represents the clustering analysis results of different genes from different samples.

## [HiC Heatmap](https://hiplot.com.cn/basic/hic-heatmap)

- Introduction

  The HiC heatmap is used to display the genome-wide chromatin interaction with heatmap on different chromosomes.

- Analysis of case data

  The loaded data have three columns, with the first for one locus bin index, the second for another locus bin index, and the third for the interaction frequency between this two locus.

- Interpretation of case statistics graphics

  As shown in the example figure,  a heat map represent the  interaction frequency between any two locus. The color displays their intensity of interaction.

- Extra Parameters

  Resolution:  set the resolution of calculated interaction frequency.

  Interval: set the tick interval of x and y-axis.

## [Histogram](/basic/histogram)

- Introduction

  Histogram refers to the distribution of continuous variable data by a series of vertical stripes or line segments with different heights.

- Analysis of case data

  The loaded data is the data set (data on treatment outcomes of different treatment regimens).

- Interpretation of case statistics graphics

  The width of the rectangle in the figure is proportional to and different from the spacing, and the vertical axis represents the frequency.

- Extra parameters

  Bins: Change the width of the rectangle

## [Likert Plot](/basic/likert)

- Introduction

  Descriptive statistical analysis of Likert scale data## [Line Regression（errorbar)](/basic/line-errorbar)

- Introduction

  The error line mainly indicates the error range of each data point and shows the potential error or uncertainty relative to each data in the series.

- Analysis of case data

  The loaded data are two groups and their corresponding values.

- Interpretation of case statistics graphics

  The red line in low type represents the maximum value of the low type in treat1, the red line represents the minimum value of the low type in treat1, and so on. Conduct rank-sum test on treat1 and treat2 according to low,mid and high types respectively, and display p-value at the top of the figure.

- Extra parameters

  P Value Form:Value is a numeric value, signif is the number of "\*" and no is not showing the P value

## [Line](/basic/line)

- Introduction

  The line chart is a statistical chart that USES a linear or logarithmic scale to draw data in a two - or three-dimensional view to show the data set or track the characteristics of the data over time.

- Analysis of case data

  The loaded data are the horizontal axis values and their corresponding vertical axis values and groups.

- Interpretation of case statistics graphics

  The diagram shows that value1 is positively correlated with Value2 in treatment plan 1, while Value1 is negatively correlated with Value2 in treatment plan 2.

- Extra Parameters

  Change Line Type:Change the shape of different grouping lines

  Add Points:Add the point corresponding to the value

## [Line Regression](/basic/line-regression)

- Introduction

  Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.If there is only one independent variable, it is called simple regression, and if there is more than one independent variable, it is called multiple regression.

- Analysis of case data

  The loaded data are independent variables, dependent variables and groups.

- Interpretation of case statistics graphics

  Different colors represent different groups, and linear regression equations can be added. The closer R squared is to 1, the closer the fitted curve is to the actual curve.

## [China Map 2](/basic/map-china 2)

- Introduction

  A map of China is a statistical chart on a map of China showing the distribution of a set of variables in different provinces within China.

- Analysis of case data

  The loaded data is the distribution of a variable in each province of China.

- Interpretation of case statistics graphics

  The graph shows the distribution of variable values in different provinces in China. The redder the color, the higher the value, and the closer the color is to green, the lower the value.

## [China Map](/basic/map-china)

- Introduction

  A map of China is a statistical chart on a map of China showing the distribution of a set of variables in different provinces within China.

- Analysis of case data

  The loaded data is the distribution of a variable in each province of China.

- Interpretation of case statistics graphics

  The graph shows the distribution of variable values in different provinces in China. The redder the color, the higher the value, and the closer the color is to green, the lower the value.

## [World Map](/basic/map-world)

- Introduction

  A world map is a statistical chart on a world map showing the distribution of a set of variables in different countries of the world.

- Analysis of case data

  The loaded data is the distribution of a variable in countries around the world.

- Interpretation of case statistics graphics

  The graph illustrates the distribution of variable values in different countries of the world. The redder the color, the higher the value, and the closer the color is to green, the lower the value.

## [Matrix Bubble](/basic/matrix-bubble)

- ### Function Introduction

    The color matrix bubble  is used to visualize the expression matrix data of multiple genes (rows) in various cells (columns).
    
- ### Data Structure

    \<1st-col\>: (String) cell sample name as X axis, 
    
    \<2nd-col\>: (String) gene name as the Y axis, 
    
    \<3rd-col\>: (Numeric) Gene expression, 
    
    [4th-col]: (String) groups.


- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    
    **Special parameters**
    
    
    Panel space: the distance between groups in the image when the cells are divided into multiple groups (default 0)
    


## [Metawho](/basic/metawho)

- Introduction

The goal of metawho is to provide simple R implementation of “Meta-analytical method to Identify Who Benefits Most from Treatments”.

metawho is powered by R package metafor and does not support dataset contains individuals for now. Please use stata package ipdmetan if you are more familar with stata code.

- Usage

  - `data`: a table contains at least columns 'trial' (for trial id), 'hr' (for hazard ratio), 'ci.lb' (for lower boundary of hazard ratio), 'ci.ub' (for upper boundary of hazard ratio) and 'ni' (number of sample).
  - `conf_level`: set the confidence interval coresponding to the 'ci.lb' and 'ci.ub', typically is 0.95.## [Moon Charts](/basic/moon-charts)

- Introduction

  The moon chart is a graph that uses the moon's waxing and waning to reflect the size of the data.

- Analysis of case data

  The loaded data are the name of the restaurant and the number of types of food in the restaurant, the number of decorative style types, the number of tableware sets and the number of price types.

- Interpretation of case statistics graphics

  The first row of the diagram shows the name of the restaurant, the first column shows different variables in the restaurant, the blank moon represents the number of 1 (the least number), the black moon represents the number of 5 (the most number) data, as the number of data increases, the black area of the moon gradually becomes larger, that is, gradually becomes full moon.


## [Mosaic Ratio Plot](/basic/likert)

- Introduction

  Can be used to display the ratio using mosaic
## [Network (igraph)](/basic/network-igraph)

- Introduction

  Network (igraph) can be used to visulize basic network based on igraph.

- Data Table

   Two data tables need to be entered. Table 1 is node information, including node ID and other annotation information, which can be used to map color and size. Table 2 is the link information, including node ID and connection information between nodes

- Data args

   Label Column: used to label node names

   Color Column: used to map node and connection colors

   Node Size Column: used to map node size. If not set, the degrees (#links) of nodes will be used

   Mark Group Column: convert the selected types of nodes by using irregular color graphics

   Line Width Column: used to map the line width

- Extra parameters

   Layout: set the distribution style of the nodes and lines of the network diagram

   Line Type: set type of lines

   Node Shape: set shape of nodes

   Transform (size): used to scale and transform node size column data

   Transform (width): used to scale and transform the line width column data

   Label Distance: control the distance between label and graph

## [Nomogram (Logistic)](/basic/nomogram-logist)

- Introduction

    Nomogram is often used to evaluate the prognosis of oncology and medicine, and can visualize the results of logistic regression or Cox regression.
## [nomogram](/basic/nomogram)

- ### Function Introduction

    Nomogram is often used to evaluate the prognosis of oncology and medicine, and can visualize the results of logistic regression or Cox regression.
    
- ### Data Structure

    Survival data frame with time, which sex and status are presented by number such as 0,1 according to example data.

- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    **Special parameters**
    


## [Parliament](/basic/parliament)

- Introduction

  The parliamentary chart is a data processing method that looks like a parliamentary seat, with points representing a data set to show the share ratio of each group more flexibly.

- Analysis of case data

  The loaded data are groups and their corresponding values.

- Interpretation of case statistics graphics

  Different colors represent different groups, and each dot represents one data point. It's a semicircle of points, the smallest fraction of which can be represented by a single point in a parliamentary diagram.

## [PCA](/basic/pca)

- Introduction

  Principal component analysis (PCA) is a data processing method with "dimension reduction" as the core, replacing multi-index data with a few comprehensive indicators (PCA), and restoring the most essential characteristics of data.

- Analysis of case data

  The loaded data are set (gene name and corresponding gene expression value) and sample information (sample name and grouping).

- Interpretation of case statistics graphics

  Different colors represent different samples, which can explain the relationship between principal components and original variables. For example, M1 has a greater contribution to PC1, while M8 has a greater negative correlation with PC1.

## [PCAtools](/basic/pcatools)

PCAtools can reduce the dimensionality of data through principal component analysis, and view principal component related features at a two-dimensional level

- Data table 1 (numerical matrix):

  Each column is a sample, and each row is a feature (such as gene, chip probe)

- Data sheet 2 (sample information):

  The first column is the sample, and the other columns are the phenotypic characteristics of the sample, which can be used to mark the color and shape of the point and perform correlation analysis with the principal component

- Data table 2 parameter columns

  Bi-plot color column (single choice) | Used to map phenotypic features to Bi-plot and mark points in different colors

  Bi-plot shape column (single choice) | Used to map phenotypic features to Bi-plot and mark points as different shapes

  Eigencorplot phenotype column (multiple choice) | Used to draw correlation heat map of phenotype and principal component
  
- Extra parameters:

  \* Components | The number of principal components of screeplot, pairsplot, plotloadings, and eigencorplot

  Top Variance | Used to filter the included numerical matrix features
  
  Corelation Method | Method pass to `cor` function for corelation calulation

  Method for Missing Values | Method for handling missing values in corelation calulation

  Screeplot Bar, Loadings \* |  Control the colors of images elements

Detail introduction about [PCAtools](http://www.bioconductor.org/packages/release/bioc/vignettes/PCAtools/inst/doc/PCAtools.html)
## [Perspective](/basic/perspective)

- Introduction

  The three-dimensional perspective is a three-dimensional figure that can connect the higher values contained in a matrix with surfaces.

- Analysis of case data

  The loaded data is a matrix.

- Interpretation of case statistics graphics

  A clear view of a mountain peak.

## [3D pie](/basic/pie-3d)

- Introduction

  The 3D pie chart is a pie chart that has a 3D appearance.

- Analysis of case data

  The loaded data are different groups and their data.

- Interpretation of case statistics graphics

  The figure shows more aesthetically the number of samples in groups 1 to 4 and the proportion corresponding to the number of samples in the 3D form. The number of samples in one group is 13, accounting for 11.71%; the number of samples in two groups is 34, accounting for 30.63%; the number of samples in three groups is 21, accounting for 18.92%; and the number of samples in four groups is 43, accounting for 38.74%.

- Extra Parameters

  Radius:Diameter of disk

  Circle Height:Thickness of disk

  Theta:The Angle of the horizontal rotation of a 3D pie chart

  Explode:The dispersion degree of each group pie chart

## [Pie](/basic/pie)

- Introduction

  The pie chart is a statistical chart that shows the proportion of each part by dividing a circle into sections.

- Analysis of case data

  The loaded data are different groups and their data.

- Interpretation of case statistics graphics

  In a circle graph, the arc length of each slice (the arc length of its center Angle and the region corresponding to its center Angle) is proportional to the number represented. The pie chart shows the number of samples for the 1 to 4 components and the corresponding proportions. The number of samples in one group is 13, accounting for 11.71%; the number of samples in two groups is 34, accounting for 30.63%; the number of samples in three groups is 21, accounting for 18.92%; and the number of samples in four groups is 43, accounting for 38.74%.

## [Pyramid Chart2](/basic/pyramid-chart2)

- Introduction

  The pyramid chart is a pyramid-like figure that distributes data on both sides of a central axis.

- Analysis of case data

  The loaded data are age, gender, and the number of people after the combination of the first two variables .

- Interpretation of case statistics graphics

  The graph shows the age groups from bottom to top in order on the central axis, the left side represents the number of men, the right side represents the number of women, and the X-axis represents the number of people. The graph clearly shows the proportion of men and women in different age groups and the proportion of different age groups in the same gender.
## [Pyramid Chart](/basic/pyramid-chart)

- Introduction

  The pyramid chart is a pyramid-like figure that distributes data on both sides of a central axis.

- Analysis of case data

  The loaded data are age, gender, and the number of people after the combination of the first two variables .

- Interpretation of case statistics graphics

  The graph shows the age groups from bottom to top in order on the central axis, the left side represents the number of men, the right side represents the number of women, and the X-axis represents the number of people. The graph clearly shows the proportion of men and women in different age groups and the proportion of different age groups in the same gender.

- Extra parameters

  sort:No means the central axis is arranged in the order of age;Desc means descending order by total population;Asc stands for ascending order by total population.

## [Radar](/basic/radar)

- Introduction

  Radar chart displays multivariable data in the form of two-dimensional charts representing three or more quantitative variables on the axis starting from the same point, so as to visually express the comparison of a research object in multiple parameters.

- Analysis of case data

  The loaded data is data set (expression levels of 5 genes in 4 diseases).

- Interpretation of case statistics graphics

  Each color of the radar map represents a disease, and the position of each point represents different gene expression. The higher the gene expression value, the farther away it is from the center of the circle, and vice versa.

## [R Script Flow](/basic/r-code-flow)

- Introduction

  R script flow can realize the visual window of if, else and other logic functions.

- Analysis of case data

  The loaded data are if, else function code of R.

- Interpretation of case statistics graphics

  The graph shows that if the variable x&lt;10, a =1, if the variable x&GT;10, a = 2;If a is equal to 2, then c is equal to d, if a is not equal to 2, then d is equal to a.


## [Ribbon](/basic/ribbon)

- Introduction

  The ribbon diagram is a pattern similar to a ribbon.

- Analysis of case data

  The loaded data are the X-axis values and their corresponding Y-axis values and groups.

- Interpretation of case statistics graphics

  Each color represents a different grouping, through which broken lines can be seen the change of each group of data over time.

## [Ridge](/basic/ridge)

- Introduction

  The ridge map is a graph that connects points and forms a ridge.

- Analysis of case data

  The loaded data are three groups and their corresponding values.

- Interpretation of case statistics graphics

  Different colors represent different groups, and the approximate degree of data can be observed.

## [ROC](/basic/roc)

- Introduction

  Receiver operating characteristic curve (ROC curve) is used to describe the diagnostic ability of binary classifier system when its recognition threshold changes.

- Analysis of case data

  The loaded data are the outcomes of one column of dichotomous variables and three columns of different variables (diagnostic indicators) and their values.

- Interpretation of case statistics graphics

  There is no functional relationship between specificity on the horizontal axis and sensitivity on the vertical axis.The closer the curve is to the upper left corner, the better the predictive ability of the diagnostic index is.Each color represented a variable (diagnostic indicator), and the blue and red curves were significantly better predictors than the green curves.AUC is the area under ROC curve.AUC=1 indicates that there is at least one threshold on the curve that leads to a perfect prediction.0.5<AUC<1, better than random guess, appropriate selection of threshold value, can have predictive value. AUC=0.5, like random guesses, the model has no predictive value. If AUC<0.5, the possible reason is that the dichotomy variable such as (0,1) is reversed with the ending setting, and the result assignment can be reversed.In this diagram, it can be considered that Am variable has the best predictive ability as shown in value-Am(86.9792)>value-GG(84.3750)>value-EL(56.7708).

- Extra parameters

  Add interval:Shape means to draw a confidence interval with color, bars means to draw a confidence interval with vertical bars, and no means not to draw a confidence interval.

  Smooth Curve:make a step diagram into a smooth curve.

  Evaluation Modle:

  Compare Modles:

## [Rose Chart](/basic/rose-chart)

- Introduction

The rose chart is a column chart drawn in polar coordinates. The radius of the arc is used to indicate the size of the data.

- Analysis of case data

The loaded data is divided into three columns, the first column is the sample name, the second column is the grouping, and the third column is the value corresponding to the sample.

- Interpretation of case statistics graphics

The case data is the distribution of up- and down-regulated genes in different organs after using scRNA-Seq to sequence different human organs.
## [Sankey](/basic/sankey)

- Introduction

  Sankey diagrams are a type of flow diagramin which the width of the arrows is proportional to the flow rate.

- Analysis of case data

  The loaded data are the  four variables and the frequency of combination of four variables.

- Interpretation of case statistics graphics

  The color of female shunting is blue, the color of male shunting is red, and the width of blue shunting is equal to the total width of female.

## [3D Scatter](/basic/scatter-3d)

- Introduction

  3D scatter plot is to apply a number of quantitative variables to different coaxes in space and combine different variables into coordinates in space, so as to clearly explain the interaction between the three quantitative variables.

- Analysis of case data

  The loaded data are three variables and grouping.

- Interpretation of case statistics graphics

  In the figure, temperature, pressure and time are respectively placed on x (horizontal axis), Y (vertical axis) and Z (perspective axis) to generate a THREE-DIMENSIONAL scatter plot, and the correlation between variables and their correlation degree can be intuitively found.

- Extra parameters

  Phi:The larger the positive value is, the more it tends to observe from the top down. The greater the negative value, the more likely it is to be observed from the bottom of the three-dimensional figure upwards.

  Theta:The Angle at which a three-dimensional figure rotates horizontally

## [Scatter Pie](/basic/scatterpie)

Scatter Pie can be used to visualize data fraction in different space coordinates.

Currently, this plugin provides a simple API for the Scatter Pie implementation in [scatterpie](https://cran.r-project.org/web/packages/scatterpie/vignettes/scatterpie.html) package.

The input data table should contains at least 3 columns. The first two columns correspond to the space coordinates and other more columns represents data values in different categories. If you know the long/wide data format, you can also provide input data table with long format (default is wide format).## [Scatter](/basic/scatter)

- Introduction

   Two groups of data are used to form multiple coordinate points. By observing the distribution of coordinate points, it can judge whether there is correlation between variables or summarize the data processing mode of coordinate point distribution.

- Analysis of case data

  The loaded data are the horizontal axis values and their corresponding vertical axis values and groups.

- Interpretation of case statistics graphics

  Value1 represents the horizontal axis and Value2 represents the vertical axis. The diagram shows that Value1 and Value2 in treatment plan 1 are positively correlated: that is, when Value1 becomes larger, Value2 will become larger; In treatment plan 2, two variables are negatively correlated: that is, when Value1 becomes larger, Value2 becomes smaller.

- Extra parameters

  Change Point Shape:Different groups have different shapes.

## [slopegraph](/basic/slopegraph)

- Introduction

Sopegraph can be used to display the change of values.
## [Stack Violin](/basic/stack-violin)

- ### Function Introduction

    The expression of key genes in each cluster in single-cell transcriptomic (Single Cell RNA-Seq)analysis.
    
- ### Data Structure

    Gene expression matrix. Gene expression matrix in all cells and groups in single cell transcriptome analysis (Single Cell RNA-Seq).

- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    **Special parameters**
    
    Y Axis Text Angle: Angle of y-axis text
    




## [Survival Analysis](/basic/survival)

- Introduction

  The survivorship curve is a graph showing the number or proportion of individuals surviving to each age for a given species or group (e.g. males or females). 

- Analysis of case data

  The loaded data are point-in-time, status and groups.

- Interpretation of case statistics graphics

  The horizontal axis represents time and the vertical axis represents the probability of survival. The blue curve represents the survivolship curve of G1 group and the red curve represents the survivolship curve of G2 group. After logrank test, p value =0.0013<0.05 indicates that difference in survival status between the two groups could not be explained by sampling error, and the grouping factor is the reason for the difference in survival rate between the two curves. This graph shows that overall survival is better in G2 than in G1.

## [time-roc](/basic/time-roc)

- ### Function Introduction

    Receiver Operating Characteristic (ROC) analysis with time records in survival analysis.
    
- ### Data Structure

    \<Table1\>: (Numeric) survival data (i.e survive, risk).
    
    \<Table2\>: (Numeric) time data.
    

- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    **Special parameters**
    
    Time unit: time unit, year, month, day optional
    
    Annotation text location (x): the position of annotation corresponding to the X axis
    
    Annotation text location (y): the position of annotation corresponding to the Y axis
    


## [Heatmap Decision Tree](/basic/treeheatr)

- Introduction

  The heatmap decision tree is a visualization graph that combines two types of graphs: heatmap and decision tree visualization.

- Case data analysis

  The first column is the name of the species, the second column is the island, and the rest are the species characteristics.

- Graphic interpretation of case statistics

  The upper half of the figure is a decision diagram, and the lower half is a heat map.

  Decision tree: The topmost island has the greatest influence on the classification of species, and can be classified into different species according to different conditions.

  Heatmap: you can observe the changes in the amount of each species under each condition.

  Legend: For each categorical variable, different colors indicate different types; for continuous variables, the higher the value, the lighter the color, otherwise, the darker.
  
- Extra parameters

  Display mode: heat-tree: draw a heat map decision tree diagram; heat-only: draw only a heat map; tree-only: draw a decision tree diagram only.

  The relative size of the heat map: 0 means no heat map; 1 means only heat map. That is, the proportion of the height of the heat map relative to the entire heat map decision tree.

  Graphic spacing: the spacing between the heat map and the decision tree diagram.

  Relative level weight: Relative weight of child node positions according to their levels, commonly ranges from 1 to 1.5. 1 for parent node perfectly in the middle of child nodes.

  Leaf node clustering: Logical. If TRUE, target/label is included in hierarchical clustering of samples within each leaf node and might yield a more interpretable heatmap.

  Sample clustering: Logical. If TRUE, hierarchical clustering would be performed among samples within each leaf node.

  Continuous variable legend: whether to display the color legend of the continuous variable of the heat map.

  Categorical variable legend: whether to display the color legend of the categorical variable of the heat map.
## [Treemap](/basic/treemap)

- Introduction

  Tree map is a kind of tree structure diagram that graphical form to represent hierarchy structure.

- Analysis of case data

  The loaded data are  different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups and different areas represent data and proportion.

- Extra Parameters

  Corelated Labe Size with Box Size: Associate the label size with the square size ratio.

## [tSNE](/basic/tsne)

- Introduction

  T-sne is a nonlinear dimensionality reduction algorithm suitable for high-dimensional data reduction to two or three dimensions and visualization. The algorithm can make the t distribution of points with greater similarity closer in the lower dimensional space. For low similarity points, the t distribution is farther away in the low dimensional space.

- Analysis of case data

  The loaded data are the data set (gene name and corresponding gene expression value) and sample information (sample name and grouping)

- Interpretation of case statistics graphics

  Different colors represent different samples, which is the same as PCA (principal component analysis) graphic interpretation. The difference lies in the visualization effect. For dissimilar points in T-SNE, a small distance will generate a large gradient to repel them.

- Extra parameters

  Perplexity:

  Theta:

## [UMAP](/basic/umap)

- Introduction

  UMAP is a nonlinear dimensionality reduction algorithm suitable for high-dimensional data reduction to two or three dimensions and visualization. The algorithm can make the t distribution of points with greater similarity closer in the lower dimensional space. For low similarity points, the t distribution is farther away in the low dimensional space.

- Analysis of case data

  The loaded data are the data set (gene name and corresponding gene expression value) and sample information (sample name and grouping)

- Interpretation of case statistics graphics

  Different colors represent different samples, which is the same as PCA (principal component analysis) graphic interpretation. The difference lies in the visualization effect. For dissimilar points in T-SNE, a small distance will generate a large gradient to repel them.

- Extra parameters

  Perplexity:

  Theta:

## [Upset](/basic/upset-plot)

- Data table

   There are two types of data tables: list and binary. The list format is that each column is a set and contains all the elements corresponding to the set. In the binary format, the first column is all the elements of all sets, and the subsequent columns are a numeric matrix composed of 0 and 1. 1 indicates that the corresponding row element exists in a certain set, and 0 indicates that it does not exist.

- Extra parameters
  
   Sets Label | Label of set barplots (left)

   Comb Label | Label of combined barplots (top)

   Data Types | list and binary. The parameter description is the same as the data table.

   Mode: Refer to https://jokergoo.github.io/ComplexHeatmap-reference/book/upset-plot.html#upset-mode

   Reorder Sets | Sort the set histogram

   Reorder Comb | Sort the combination histogram

   Point Size | Set the size of the points

   Line Width | Set the width of the lines

   Sets Bar | set the color of the set barplots (left)

   Comb Bar | set the color of the combined barplots (top)

   Point Lines | set the dotted line color

   Background Rectangles | background rectangle color

   Unselected Points | Unselected point color
## [Venn](/basic/venn)

- Introduction

  A Venn diagram is a diagramthat shows all possible logical relations between a finite collection of different sets. These diagrams depict elements as points in the plane, and sets as regions inside closed curves. A Venn diagram consists of multiple overlapping closed curves, usually circles, each representing a set. The points inside a curve labelled S represent elements of the set S, while points outside the boundary represent elements not in the set S. This lends to easily read visualizations; for example, the set of all elements that are members of both sets Sand T, S ∩ T, is represented visually by the area of overlap of the regions S and T. In Venn diagrams the curves are overlapped in every possible way, showing all possible relations between the sets. 

- Analysis of case data

  The loaded data is a collection of five gene names.

- Interpretation of case statistics graphics

  The closed curve of 5 colors represents 5 sets, and the number represents the number of overlapping or non-overlapping genes in multiple sets. For example, 8 in the sample figure represents 8 identical gene names in 5 sample sets.

## [Violin-Group](/basic/violin-group)

- ### Function Introduction

    Violin and box plot of grouped data with T-test.
    
- ### Data Structure

    Data frame. \<1st-col\>: (Numeric) value data, 
    
    \<2nd-col\>: (String) 1st-rank groups, 
    
    \<3rd-col\>: (String) 2nd-rank groups.
    


- ### Parameter details

    **Main parameters**
    
    Title: the main title of the image (some images can replace the default title)
    
    Theme: image theme (provided by ggplot2)
    
    Color palette: image matching
    
    Font family: font (such as time new Roma specified by mainstream journals)
    
    Width: the width of the output image (the default is inches, such as 12 x 7 inch in the standard)
    
    Height: the height of the output image (the default is inches, such as 12 x 7 inch)
    
    Alpha: transparency of the element (0-1, 0 for transparency, 1 for opacity)
    
    
    **Important parameters**
    
    Legend position: the position of the legend in the image
    
    Legend direction: arrangement of multiple elements in legend (horizontal or vertical)
    
    Legend Title Size: Legend Main Title Size
    
    Legend text size: the size of the element text in the legend
    
    
    Axis title size: the size of the image axis title
    
    Axis font size: the size of the image axis scale font
    
    Axis text angle: the angle of the image axis text
    
    Axis adjust: image axis text distance (fine tuning)
    
    
    **Special parameters**
    
    Add geom: add box line graph to violin graph to show more abundant information
    
    Stat method: confidence statistics method (t-test by default)
    


## [Violin](/basic/violin)

- Introduction

  The violin plot, named for its resemblance to a violin, is a statistical diagram combining a box diagram with a kernel density diagram to show the distribution of data and the probability density.

- Analysis of case data

  The loaded data is data set (gene names and expression levels in different tumors).

- Interpretation of case statistics graphics

  The violin plot can reflect the data distribution, which is similar to the box diagram. The black horizontal line in the box shows the median gene expression level in each tumor, and the upper and lower edges in the white box represent the upper and lower quartiles in the data set. The violin graph can also reflect the data density, and the more concentrated the data set, the fatter the graph. The gene expression distribution in the BLGG group is more concentrated, followed by BIC group and AML group.

- Extra parameters

  P Value Form:Value is a numeric value, signif is the number of "\*" and no is not showing the P value

  Add Boxplot:Place a boxplot inside the violin

## [Volcano](/basic/volcano)

- Introduction

  The volcanogram is a visual representation of the difference in gene expression between two samples.

- Analysis of case data

  The loaded data is the gene name and its corresponding logFC and p.value.

- Interpretation of case statistics graphics

  The horizontal axis is denoted by log2 (fold change), and the more different genes are distributed at both ends of the picture.The ordinate is denoted by -log10 (p.value) and is the negative log of the P value of T test significance.Blue dots represent down-regulated genes, red dots represent up-regulated genes, and gray dots represent genes that are not significantly different.

## [Waterfalls](https://hiplot.com.cn/basic/waterfalls)

- Introduction

  The waterfall chart is used to display the cumulative effect of sequentially introduced positive or negative values .  These intermediate values can either be time based or category based. 

- Analysis of case data

  The loaded data have two columns, with the first for category based items and the second for their corresponding values.

- Interpretation of case statistics graphics

  As shown in the example figure, the x-axis represent each category based items, the y-axis showing their cumulative values.  Increments and decrements that are sufficiently extreme can cause the cumulative total to fall above and below the axis at various points. 

- Extra Parameters

  Rect Text Size: set the size of the text in the rectangles.

  Bar Width: set the width of the rectangle bar.

  Line Type: set the the linetype drawn between successive rectangles.

- Reference Packages

  waterfalls: (Maintainer: Hugh Parsonage <hugh.parsonage+waterfall@gmail.com>)
