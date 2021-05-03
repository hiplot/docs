# 常见问题

## 账户与联系

**1. 如何联系我们？**

- 邮件联系： admin@hiplot.org
- 右上角点击用户反馈按钮，发送对应主题信息
- 在 https://github.com/hiplot/gold/issues 仓库发帖
- 加入 Hiplot [Discord 社群](https://discord.gg/vX6tSax)或[微信社群](https://docs.qq.com/doc/DS09na3NVYk9OcHVp)

**2. 注册或找回密码后未收到对应回执邮件怎么办？**

- 查看垃圾邮箱
- 更换邮箱进行注册
- 邮件联系 admin@hiplot.org

**3. 如何登陆 Hiplot Tiny RSS server？**

访问 https://hiplot.com.cn/ttrss, 使用 Hiplot 邮箱和默认密码 'public' 进行登录。

**4. 如何登陆 Hiplot Galaxy 镜像服务？**

访问 https://galaxy.hiplot.com.cn, 使用 Hiplot 邮箱和默认密码 'public' 进行登录。

## 数据导入

**1. 数据表只展示 5000 行和 99 列？**

背后真实的数据行和列数是完整的。粘贴和导入的数据都会被完整提交，并不会截断数据。可以点击导出按钮确认。

**2. 导入示例数据后，窗口滚动条不见了？**

将鼠标移出表格即可。

**3. 无法从 Excel 复制数据导入数据表？**

复制粘贴前需要点击对应数据表之后才可以将内容通过复制粘贴导入。

## 应用使用方法

**1. matrix-bubble 数据展示不全怎么办？**

修改颜色主题，尝试使用不同主题，或选择 custom 输入自定义颜色，输入的颜色数量应大于对应的分类变量长度。

**2. 如果出现 Error: Insufficient values in manual scale 报错并无法出图怎么办？**

修改颜色主题，尝试使用不同主题，或选择 custom 输入自定义颜色，输入的颜色数量应大于对应的分类变量长度。

**3. WGCNA 分析任务一直未完成怎么办？**

Hiplot 仅提供单线程模式进行 WGCNA 分析，所以大数据集将会无法在短时间内完成计算，建议对基因进行初步筛选：如变异很小的基因、去掉非编码基因等。另外，我们的代码已经尽可能的优化了分析参数，但由于 WGCNA 分析本身涉及的步骤和算法相对复杂，对于发表级别的最优共表达网络构建，我们仍然建议用户在本地构建分析环境，并参考 WGCNA 官网的教程逐步完成。通过调整不同参数来评估数据结果稳定性，并获得可解释的具有真实生物学意义的结果。

**4. GSEA 分析出现报错： Bad format - expect ncols: 2 but found: XX on line？**

检查 cls 文件前两行，删除掉末尾的所有空字符。

**5. 弦图（chord）每次绘图的颜色都不一样怎么办？**

修改颜色参数，默认为 random，所以会每次生成不一样的颜色。

**6. GO/KEGG 出现报错：ERROR [2021-03-12 15:18:33] Error in ans[ypos] <- rep(yes, length.out = len)[ypos]: replacement has length zero**

调节 P Value / Q Value 阈值到 1。

**7. GO/KEGG 有灰色空白区？**

说明按照阈值设定未富集到条目，可按照 Q12 进行相同处理。

**8. 如何设置自定义颜色？**

改变颜色画板值为 'custom'，然后在自定义颜色字段输入 16 进制颜色代码, 如 #000000。多个 16 进制颜色用空格或逗号分隔。
