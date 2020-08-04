# Basic Module

## Seqlogo

- brief introduction

  The sequence LOGO is a graphic that describes a sequence pattern of binding sites.

- Analysis of case data

  The loaded data is the Sequence of binding sites for multiple transcription factors on multiple genes.

- Interpretation of case statistics graphics

  A sequence of binding sites was displayed in a column of the chart by means of BITS calculation, which could clearly observe the large proportion of bases of different sequences.

- Extra parameters

  Seqtype: DNA represents DNA sequence, RNA represents RNA sequence, aa represents amino acid sequence.

  Color Scheme: Different colors of base 

  Method: BITS represented the proportion of different bases in the vertical coordinate axis with the maximum value of 2 by using the BIT formula;Prob represents the proportion of bases in the total base of the sequence, which is displayed in the vertical axis with the maximum value of 1..

## Heatmap

- brief introduction

  Heat map is an intuitive and visual method for analyzing the distribution of experimental data, which can be used for quality control of experimental data and visualization display of difference data, as well as clustering of data and samples to observe sample quality.

- Analysis of case data

  The loaded data are Count (gene name and corresponding gene expression value), sampleInfo (sample name, group and other relevant information, such as age), and gene information (gene name and its pathway, such as tumor pathway and physiological pathway).

- Interpretation of case statistics graphics

  In the example figure, each small grid represents each gene, and the shade of color represents the expression level of this gene. The larger the expression level is, the darker the color will be (red is up-regulated, green is down-regulated).Each row represents the expression of each gene in a different sample, and each column represents the expression of all genes in each sample.The upper tree represents the clustering analysis results of different samples of different groups and ages, and the left tree represents the clustering analysis results of different genes from different samples.

## Corelation Heatmap

- brief introduction

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

## ROC

- brief introduction

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

## Box plot

- brief introduction

  The box plot is a method of visualizing the distribution characteristics of a set of data by means of a quartile graph.

- Analysis of case data

  The loaded data is data set (data on treatment outcomes of different treatment regimens).

- Interpretation of case statistics graphics

  The abscissa represents several different sets of data, and the ordinate represents the quartile of each set of data respectively. The upper, middle and lower horizontal lines of the box represent the upper, median and lower quartile respectively; The values represented by the upper and lower line segments respectively exponential the maximum and minimum values of the data, and the points outside the box represent outliers. The above figure indicates the P value between two variables. It can be considered that in treatment plan 1, there is a significant difference in efficacy between the middle-dose group and the low-dose group, and so on.

- Extra parameters

  P Value Form:Value is a numeric value, signif is the number of "\*" and no is not showing the P value

  Add Points:Mark out the points represented by numerical value

## Violin

- brief introduction

  The violin plot, named for its resemblance to a violin, is a statistical diagram combining a box diagram with a kernel density diagram to show the distribution of data and the probability density.

- Analysis of case data

  The loaded data is data set (gene names and expression levels in different tumors).

- Interpretation of case statistics graphics

  The violin plot can reflect the data distribution, which is similar to the box diagram. The black horizontal line in the box shows the median gene expression level in each tumor, and the upper and lower edges in the white box represent the upper and lower quartiles in the data set. The violin graph can also reflect the data density, and the more concentrated the data set, the fatter the graph. The gene expression distribution in the BLGG group is more concentrated, followed by BIC group and AML group.

- Extra parameters

  P Value Form:Value is a numeric value, signif is the number of "\*" and no is not showing the P value

  Add Boxplot:Place a boxplot inside the violin

## Half Violin

- brief introduction

  The half violin plot is a statistical graph used to display the distribution and probability density of data by replacing the left part with the data frequency count graph on the basis of keeping the right part of violin graph.

- Analysis of case data

  The loaded data is data set (gene names and expression levels in different tumors).

- Interpretation of case statistics graphics

  The  half violin plot can reflect the data distribution, which is similar to the box diagram. The black horizontal line in the box shows the median gene expression level in each tumor, and the upper and lower edges in the white box represent the upper and lower quartiles in the data set. The distribution of observable numerical points on the left half; The violin graph can also reflect the data density, and the more concentrated the data set, the fatter the graph. The gene expression distribution in the BLGG group is more concentrated, followed by BIC group and AML group.

## Ridge

- brief introduction

  The ridge map is a graph that connects points and forms a ridge.

- Analysis of case data

  The loaded data are three groups and their corresponding values.

- Interpretation of case statistics graphics

  Different colors represent different groups, and the approximate degree of data can be observed.

## Gantt

- brief introduction 

  The Gantt chart is a type of bar chart that illustrates a project schedule.

- Analysis of case data

  Data were loaded for 4 samples (4 patients), 3 items (3 treatments), and the start and end times of each treatment.

- Interpretation of case statistics graphics

  The horizontal axis represents the time schedule, the vertical axis represents 4 patients, and the 3 colors represent 3 treatments. The figure can observe the time schedule of different treatments for each patient.

## Survival Analysis

- brief introduction

  The survivorship curve is a graph showing the number or proportion of individuals surviving to each age for a given species or group (e.g. males or females). 

- Analysis of case data

  The loaded data are point-in-time, status and groups.

- Interpretation of case statistics graphics

  The horizontal axis represents the time axis and the vertical axis represents the probability of survival.The red curve represents the survivolship curve of G1 group and the blue curve represents the survivolship curve of G2 group.After logrank test, p value =0.0013<0.05 indicated that the difference in survival status between the two groups could not be explained by sampling error, and the grouping factor was the reason for the difference in survival rate between the two curves.The graph shows that overall survival is better in G2 than in G1.

## Volcano

- brief introduction

  The volcanogram is a visual representation of the difference in gene expression between two samples.

- Analysis of case data

  The loaded data is the gene name and its corresponding logFC and p.value.

- Interpretation of case statistics graphics

  The horizontal axis is denoted by log2 (fold change), and the more different genes are distributed at both ends of the picture.The ordinate is denoted by -log10 (p.value) and is the negative log of the P value of T test significance.Blue dots represent down-regulated genes, red dots represent up-regulated genes, and gray dots represent genes that are not significantly different.

## Sankey

- brief introduction

  Sankey diagrams are a type of flow diagramin which the width of the arrows is proportional to the flow rate.

- Analysis of case data

  The loaded data are the  four variables and the frequency of combination of four variables.

- Interpretation of case statistics graphics

  The color of female shunting is blue, the color of male shunting is red, and the width of blue shunting is equal to the total width of female.

## Venn

- brief introduction

  A Venn diagram is a diagramthat shows all possible logical relations between a finite collection of different sets. These diagrams depict elements as points in the plane, and sets as regions inside closed curves. A Venn diagram consists of multiple overlapping closed curves, usually circles, each representing a set. The points inside a curve labelled S represent elements of the set S, while points outside the boundary represent elements not in the set S. This lends to easily read visualizations; for example, the set of all elements that are members of both sets Sand T, S ∩ T, is represented visually by the area of overlap of the regions S and T. In Venn diagrams the curves are overlapped in every possible way, showing all possible relations between the sets. 

- Analysis of case data

  The loaded data is a collection of five gene names.

- Interpretation of case statistics graphics

  The closed curve of 5 colors represents 5 sets, and the number represents the number of overlapping or non-overlapping genes in multiple sets. For example, 8 in the sample figure represents 8 identical gene names in 5 sample sets.

## tSNE

- brief introduction

  T-sne is a nonlinear dimensionality reduction algorithm suitable for high-dimensional data reduction to two or three dimensions and visualization. The algorithm can make the t distribution of points with greater similarity closer in the lower dimensional space. For low similarity points, the t distribution is farther away in the low dimensional space.

- Analysis of case data

  The loaded data are the data set (gene name and corresponding gene expression value) and sample information (sample name and grouping)

- Interpretation of case statistics graphics

  Different colors represent different samples, which is the same as PCA (principal component analysis) graphic interpretation. The difference lies in the visualization effect. For dissimilar points in T-SNE, a small distance will generate a large gradient to repel them.

- Extra parameters

  Perplexity:

  Theta:

## PCA

- brief introduction

  Principal component analysis (PCA) is a data processing method with "dimension reduction" as the core, replacing multi-index data with a few comprehensive indicators (PCA), and restoring the most essential characteristics of data.

- Analysis of case data

  The loaded data are set (gene name and corresponding gene expression value) and sample information (sample name and grouping).

- Interpretation of case statistics graphics

  Different colors represent different samples, which can explain the relationship between principal components and original variables. For example, M1 has a greater contribution to PC1, while M8 has a greater negative correlation with PC1.

## Line Regression

- brief introduction

  Linear regression is a regression method for linear modeling of the relationship between independent variables and dependent variables.If there is only one independent variable, it is called simple regression, and if there is more than one independent variable, it is called multiple regression.

- Analysis of case data

  The loaded data are independent variables, dependent variables and groups.

- Interpretation of case statistics graphics

  Different colors represent different groups, and linear regression equations can be added. The closer R squared is to 1, the closer the fitted curve is to the actual curve.

## Line Regression（errorbar)

- brief introduction

  The error line mainly indicates the error range of each data point and shows the potential error or uncertainty relative to each data in the series.

- Analysis of case data

  The loaded data are two groups and their corresponding values.

- Interpretation of case statistics graphics

  The red line in low type represents the maximum value of the low type in treat1, the red line represents the minimum value of the low type in treat1, and so on. Conduct rank-sum test on treat1 and treat2 according to low,mid and high types respectively, and display p-value at the top of the figure.

- Extra parameters

  P Value Form:Value is a numeric value, signif is the number of "\*" and no is not showing the P value

## Scatter

- brief introduction

   Two groups of data are used to form multiple coordinate points. By observing the distribution of coordinate points, it can judge whether there is correlation between variables or summarize the data processing mode of coordinate point distribution.

- Analysis of case data

  The loaded data are the horizontal axis values and their corresponding vertical axis values and groups.

- Interpretation of case statistics graphics

  Value1 represents the horizontal axis and Value2 represents the vertical axis. The diagram shows that Value1 and Value2 in treatment plan 1 are positively correlated: that is, when Value1 becomes larger, Value2 will become larger; In treatment plan 2, two variables are negatively correlated: that is, when Value1 becomes larger, Value2 becomes smaller.

- Extra parameters

  Change Point Shape:Different groups have different shapes.

## 3D Scatter

- brief introduction

  3D scatter plot is to apply a number of quantitative variables to different coaxes in space and combine different variables into coordinates in space, so as to clearly explain the interaction between the three quantitative variables.

- Analysis of case data

  The loaded data are three variables and grouping.

- Interpretation of case statistics graphics

  In the figure, temperature, pressure and time are respectively placed on x (horizontal axis), Y (vertical axis) and Z (perspective axis) to generate a THREE-DIMENSIONAL scatter plot, and the correlation between variables and their correlation degree can be intuitively found.

- Extra parameters

  Phi:The larger the positive value is, the more it tends to observe from the top down. The greater the negative value, the more likely it is to be observed from the bottom of the three-dimensional figure upwards.

  Theta:The Angle at which a three-dimensional figure rotates horizontally

## Histogram

- brief introduction

  Histogram refers to the distribution of continuous variable data by a series of vertical stripes or line segments with different heights.

- Analysis of case data

  The loaded data is the data set (data on treatment outcomes of different treatment regimens).

- Interpretation of case statistics graphics

  The width of the rectangle in the figure is proportional to and different from the spacing, and the vertical axis represents the frequency.

- Extra parameters

  Bins: Change the width of the rectangle

## Density

- brief introduction

  The kernel density map is a graph used to observe the distribution of continuous variables.

- Analysis of case data

  The loaded data is the data set (data on treatment outcomes of different treatment regimens).

- Interpretation of case statistics graphics

  Different colors represent different groups, with values on the horizontal axis and frequencies on the vertical axis.

- Extra parameters

  Stack:

## Pie

- brief introduction

  The pie chart is a statistical chart that shows the proportion of each part by dividing a circle into sections.

- Analysis of case data

  The loaded data are different groups and their data.

- Interpretation of case statistics graphics

  In a circle graph, the arc length of each slice (the arc length of its center Angle and the region corresponding to its center Angle) is proportional to the number represented. The pie chart shows the number of samples for the 1 to 4 components and the corresponding proportions. The number of samples in one group is 13, accounting for 11.71%; the number of samples in two groups is 34, accounting for 30.63%; the number of samples in three groups is 21, accounting for 18.92%; and the number of samples in four groups is 43, accounting for 38.74%.

## Donut

- brief introduction

  The donut is a variant of the pie chart, with a blank center allowing for additional information about the data as a whole to be included. Doughnut charts are similar to pie charts in that their aim is to illustrate proportions.

- Analysis of case data

  The loaded data are different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups and different areas represent data and proportion.

## Dendrogram

- brief introduction

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

## Ribbon

- brief introduction

  The ribbon diagram is a pattern similar to a ribbon.

- Analysis of case data

  The loaded data are the X-axis values and their corresponding Y-axis values and groups.

- Interpretation of case statistics graphics

  Each color represents a different grouping, through which broken lines can be seen the change of each group of data over time.

## Beeswarm

- brief introduction 

  The beeswarm is a noninterference scatter plot which is similar to a bee colony.

- Analysis of case data

  The loaded data are  different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups, and dots represent data.

## Area

- brief introduction

  The area chart displays graphically quantitative data. It is based on the line chart. The area between axis and line are commonly emphasized with colors, textures and hatchings.

- Analysis of case data

  The loaded data are xaxis.value and yaxis.value.

- Interpretation of case statistics graphics

  Different colors represent different groups of area charts.

## Barplot

- brief introduction

  The bar chart is a statistical chart showing the size of data values in terms of the length of the rectangle.

- Analysis of case data

  The loaded data are efficacy data of different doses of drugs in different treatment regimens.

- Interpretation of case statistics graphics

  Bar charts are used to display category data with rectangular bars whose height or length is proportional to the value they represent. Bar charts can be drawn vertically or horizontally. The bar chart shows the comparison between the discrete categories. One axis of the chart shows the specific categories to be compared, and the other axis represents the measurements. Some bar charts show bars that can also show the values of multiple measurement variables. The bar chart shows the different effects of low, medium, and high doses in different treatment groups (groups 1 to 4). Group 1 had the best effect with medium dose treatment, group 2 had the best effect with high dose treatment, group 3 had no significant difference with dose treatment, and group 4 had the best effect with high dose treatment.

- Extra Parameters

  Bar Type:Dodge means horizontal listing and stack means top - down stacking

  Horizon:Swap the position of the category axis with that of the measurement axis

  Add Numeric Lable:Add numeric lable

## Contour(Matrix)

- brief introduction

  The contour map (matrix) is a graph that displays three-dimensional data in a two-dimensional form

- Analysis of case data

  The loaded data is a matrix.

- Interpretation of case statistics graphics

  Yellow represents the highest, dark purple represents the lowest, the height scale range is 90-190.

## 3D pie

- brief introduction

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

## Line

- brief introduction

  The line chart is a statistical chart that USES a linear or logarithmic scale to draw data in a two - or three-dimensional view to show the data set or track the characteristics of the data over time.

- Analysis of case data

  The loaded data are the horizontal axis values and their corresponding vertical axis values and groups.

- Interpretation of case statistics graphics

  The diagram shows that value1 is positively correlated with Value2 in treatment plan 1, while Value1 is negatively correlated with Value2 in treatment plan 2.

- Extra Parameters

  Change Line Type:Change the shape of different grouping lines

  Add Points:Add the point corresponding to the value

## Bubble

- brief introduction

  The bubble chart is a statistical chart that shows the third variable by the size of the bubble on the basis of the scatter chart, so that the three variables can be compared and analyzed simultaneously.

- Analysis of case data

  The loaded data are GO Term,Gene Ridio, Gene count and P-value.

- Interpretation of case statistics graphics

  The x-axis represents Gene Ridio, and the y-axis is GO Term; The size of the dot represents the number of genes, and the color of the dot represents the high or low P value.

- Extra Parameters

  Show Numbers:Displays the number of bubbles

  Color Theme:Displays the color theme for the P value

## Dotchart

- brief introduction

  Sliding bead chart is a graph of beads sliding on a column. It is the superposition of bar chart and scatter chart.

- Analysis of case data

  The loaded data are gene names and their corresponding gene expression values and groups.

- Interpretation of case statistics graphics

  Each color represents a different grouping, so that the differences in gene expression values can be intuitively understood.

## 3D Barplot

- brief introduction

  3D bar charts are used to provide a 3D look and feel for the data. The third dimension is often used for aesthetic reasons, but it does not improve data reading. Still intended to show comparisons between discrete categories.

- Analysis of case data

  The loaded data are efficacy data of different doses of drugs in different treatment regimens.

- Interpretation of case statistics graphics

  The 3D histogram shows the different therapeutic effects of different treatment groups (groups 1 to 4) with low, medium and high doses. Group 1 had the best effect with medium dose treatment, group 2 had the best effect with high dose treatment, group 3 had no significant difference with dose treatment, and group 4 had the best effect with high dose treatment.

- Extra Parameters

  Phi:The larger the positive value is, the more it tends to observe from the top down. The greater the negative value, the more likely it is to be observed from the bottom of the three-dimensional figure upwards.

  Theta:The Angle at which a three-dimensional figure rotates horizontally.

## Contour (XY)

- brief introduction

  Contour plot (XY) is a data processing method that reflects data density through contour line.

- Analysis of case data

  The loaded data are two variables.

- Interpretation of case statistics graphics

  Just as contour lines in geography represent different heights, different contour lines in contour maps represent different densities. The closer to the center, the smaller contour loop is, and the higher the regional data density is. For example, the data density of yellow area is the highest, while that of blue area is the lowest.

## Radar

- brief introduction

  Radar chart displays multivariable data in the form of two-dimensional charts representing three or more quantitative variables on the axis starting from the same point, so as to visually express the comparison of a research object in multiple parameters.

- Analysis of case data

  The loaded data is data set (expression levels of 5 genes in 4 diseases).

- Interpretation of case statistics graphics

  Each color of the radar map represents a disease, and the position of each point represents different gene expression. The higher the gene expression value, the farther away it is from the center of the circle, and vice versa.

## Parliament

- brief introduction

  The parliamentary chart is a data processing method that looks like a parliamentary seat, with points representing a data set to show the share ratio of each group more flexibly.

- Analysis of case data

  The loaded data are groups and their corresponding values.

- Interpretation of case statistics graphics

  Different colors represent different groups, and each dot represents one data point. It's a semicircle of points, the smallest fraction of which can be represented by a single point in a parliamentary diagram.

## Perspective

- brief introduction

  The three-dimensional perspective is a three-dimensional figure that can connect the higher values contained in a matrix with surfaces.

- Analysis of case data

  The loaded data is a matrix.

- Interpretation of case statistics graphics

  A clear view of a mountain peak.

## Treemap

- brief introduction

  Tree map is a kind of tree structure diagram that graphical form to represent hierarchy structure.

- Analysis of case data

  The loaded data are  different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups and different areas represent data and proportion.

- Extra Parameters

  Corelated Labe Size with Box Size: Associate the label size with the square size ratio.

## Fan plot

- brief introduction

  The pie chart is a statistical chart designed to clearly show the percentage of each data group by the size of the pie.

- Analysis of case data

  The loaded data are  different groups and their data.

- Interpretation of case statistics graphics

  Different colors represent different groups and different areas represent data and proportion.

- Extra Parameters

  Show Ratio:Show the proportions next to the different groups.

## China Map

- brief introduction

  A map of China is a statistical chart on a map of China showing the distribution of a set of variables in different provinces within China.

- Analysis of case data

  The loaded data is the distribution of a variable in each province of China.

- Interpretation of case statistics graphics

  The graph shows the distribution of variable values in different provinces in China. The redder the color, the higher the value, and the closer the color is to green, the lower the value.

## World Map

- brief introduction

  A world map is a statistical chart on a world map showing the distribution of a set of variables in different countries of the world.

- Analysis of case data

  The loaded data is the distribution of a variable in countries around the world.

- Interpretation of case statistics graphics

  The graph illustrates the distribution of variable values in different countries of the world. The redder the color, the higher the value, and the closer the color is to green, the lower the value.

## Pyramid Chart

- brief introduction

  The pyramid chart is a pyramid-like figure that distributes data on both sides of a central axis.

- Analysis of case data

  The loaded data are age, gender, and the number of people after the combination of the first two variables .

- Interpretation of case statistics graphics

  The graph shows the age groups from bottom to top in order on the central axis, the left side represents the number of men, the right side represents the number of women, and the X-axis represents the number of people. The graph clearly shows the proportion of men and women in different age groups and the proportion of different age groups in the same gender.

- Extra parameters

  sort:No means the central axis is arranged in the order of age;Desc means descending order by total population;Asc stands for ascending order by total population.

# Diverging scale

- brief introduction

  The diverging scale is a graph that maps a continuous, quantitative input to a continuous fixed interpolator.

- Analysis of case data

  The loaded data are models and its functional indexes.

- Interpretation of case statistics graphics

  Hp data is shown on the horizontal axis, model names (classification) are shown on the vertical axis, models above average are shown in red, and models below average are shown in blue. Data is assigned on a scale of 2 by size.

- Extra parameters

  Type:Lollipop represents the drawing of sliding beads on both sides of the central axis;Bar represents a bar graph drawn on both sides of the central axis.

## Dist plot

- brief introduction

  The dist plot is a visual diagram using a confidence distribution.

- Analysis of case data

  The loaded data are five conditions and their corresponding values.

- Interpretation of case statistics graphics

  The diagram shows the confidence distribution of the mean under the conditions, and the approximate distribution of the corresponding values under the five conditions can be seen.