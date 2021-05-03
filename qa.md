# Q&A

## Accounts & Contact

**1. How to contact us?**

- Send email： admin@hiplot.org;
- Click the feedback button and then send messages;
- Create an issue in https://github.com/hiplot/gold/issues;
- Join the Hiplot [Discord Server](https://discord.gg/vX6tSax) or [Wechat Group](https://docs.qq.com/doc/DS09na3NVYk9OcHVp).

**2. Do not receive the activation email?**

- View junk email;
- Change email;
- Contact admin@hiplot.org.

**3. How to login Hiplot Tiny RSS server?**

Visit https://hiplot.com.cn/ttrss, and then use the Hiplot account and the default password 'public'.

**4. How to login Hiplot Galaxy mirror website?**

Visit https://galaxy.hiplot.com.cn, and then use the Hiplot account and the default password 'public'.

## Data importing

**1. Does the data table only show 5000 rows and 99 columns?**

The actual number of rows and columns behind the data is complete. Both pasted and imported data will be submitted completely, and the data will not be truncated. You can click the export button to confirm.

**2. After importing the demo data, the scroll bar of the window disappeared?**

Just move the mouse out of the table.

**3. Can't copy data from Excel?**

Before copying and pasting, you need to click the corresponding data table before copy-paste.

## Usage of Application

**1. matrix-bubble do not completely show?**

Change color palette.

**2. Error: Insufficient values in manual scale?**

Change color palette.

**3. WGCNA tasks do not finish?**

Hiplot only provides single-thread WGCNA analysis, so large data sets will not be able to complete in a short time. It is recommended to conduct a preliminary screening of genes: such as genes with small mutations, removing non-coding genes, etc. In addition, our code has optimized the analysis parameters as much as possible, but because the steps and algorithms involved in the WGCNA analysis itself are relatively complex, we still recommend that users build the analysis environment locally for the construction of the optimal co-expression network at the publication level, and refer to it. The tutorial on the WGCNA official website is completed step by step. Evaluate the stability of data results by adjusting different parameters, and obtain interpretable results with true biological significance.

**4. Error: GSEA, Bad format - expect ncols: 2 but found: XX on line?**

Check the top two lines of the .cls file and delete the two lines tail spaces.

**5. How to keep the same colors in the chord?**

Change the color palette and do not use the random option.

**6. Error: GO/KEGG failed：ERROR [2021-03-12 15:18:33] Error in ans[ypos] <- rep(yes, length.out = len)[ypos]: replacement has length zero?**

Adjust P Value / Q Value threshold to 1.

**7. GO/KEGG analysis contain empty gray region?**

It indicates that do not have significantly enriched terms. You can try to adjust P Value / Q Value threshold to 1.

**8. How to set custom colors?**

Change the color palette to 'custom', and then input hexadecimal color, e.g. #000000, in the custom color input field. You need to separate multiple hexadecimal colors by space or comma.
