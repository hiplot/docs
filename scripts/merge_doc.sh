echo "# Basic Module
" > usage/basic/README.md
cat ../plugins/private/basic/r/*/README.md >> usage/basic/README.md

echo "# 基础模块
" > zh/usage/basic/README.md
cat ../plugins/private/basic/r/*/README-zh_cn.md >> zh/usage/basic/README.md

echo "# Advanced Module
" > usage/advance/README.md
cat ../plugins/private/advance/scripts/r/*/README.md >> usage/advance/README.md

echo "# 进阶模块
" > zh/usage/advance/README.md
cat ../plugins/private/advance/scripts/r/*/README-zh_cn.md >> zh/usage/advance/README.md

echo "# Mini Tools
" > usage/mini-tools/README.md
cat ../plugins/private/mini-tools/r/*/README.md >> usage/mini-tools/README.md

echo "# 小工具箱
" > zh/usage/mini-tools/README.md
cat ../plugins/private/mini-tools/r/*/README-zh_cn.md >> zh/usage/mini-tools/README.md

echo "# Clinial Tools
" > usage/clinical-tools/README.md
cat ../plugins/private/clinical-tools/r/*/README.md >> usage/clinical-tools/README.md

echo "# 临床工具箱
" > zh/usage/clinical-tools/README.md
cat ../plugins/private/clinical-tools/r/*/README-zh_cn.md >> zh/usage/clinical-tools/README.md
