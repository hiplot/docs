# 工具调试方案

## 调试方式

Hiplot 开源及初级开发者主要通过以下方式进行工具调试：

1. 克隆 Hiplot 的代码仓库至同一级目录：[plugins-open](https://github.com/hiplot/plugins-open), [plugins-developer](https://github.com/hiplot/plugins-developer)；
2. Vue.js 前端 + R/其他后端程序的工具：进入该工具目录（toolname）运行该工具目录下的 `run.sh` 脚本直接输出结果。如果希望更新优化参数和脚本，可以修改工具目录下的 `data.json` 和 `plot.R` 完成后台脚本更新、`ui.json` 完成前端页面更新。
3. Shiny 应用：直接使用 Rstudio 进行调试开发；
4. 纯前端应用：直接使用 VS Code + Chrome 进行实时调试开发。
 

Hiplot 高阶开发者主要通过以下方式进行工具调试：

1. 克隆 Hiplot 高阶开发者核心仓库；
2. Vue.js 前端 + R/其他后端程序的工具：进入核心仓库，并运行该目录下的 `run_debug.R` 脚本完成工具执行：`Rscript run_debug.R -c toolname/data.json -i toolname/data.txt -t toolname -m modulename --enableExample`。如果希望更新优化参数和脚本，可以修改对应工具目录下的 `data.json` 和 `plot.R` 完成后台脚本更新、`ui.json` 完成前端页面更新；
3. Shiny 应用：直接使用 Rstudio 进行调试；
4. 纯前端应用：直接使用 VS Code + Chrome 进行实时调试开发。

## 注意事项

开源及初级开发者仓库和高阶开发者仓库开发格式（Vue.js 前端 + R/其他后端程序的工具）存在一定差异，后者针对生产环境进行了一系列额外优化，且无需在 `plot.R` 脚本中加载 `lib.R`、`head.R` 以及 `foot.R`，以加速应用执行速度。

开源及初级开发者仓库工具会在经过修改和优化后将被整合进入高阶开发者仓库，同时完成生产环境上线。
