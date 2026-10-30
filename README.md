# 个人网站 · 卢嘉淇 (Jiaqi Lu)

基于 [Astro](https://astro.build) 的静态个人网站，用于求职与研究生申请展示。

- 线上地址：https://logic-zhuang.github.io
- 源码仓库：https://github.com/logic-zhuang/logic-zhuang.github.io

## 定位

统计学背景的 AI 应用开发者。方向：AI 应用开发、数据分析、算法工程。

## 页面结构

| 路径 | 说明 |
|------|------|
| `/` | 首页：第一屏、关键数据、研究兴趣、代表项目、实习经历 |
| `/projects/` | 项目列表：RAG 问答、Agent 技能、健身小程序 |
| `/projects/ai-knowledge-base/` | AI Agent 检索问答项目详情（LangGraph + RAG） |
| `/projects/automation-skills/` | 网页与桌面 Agent Skills 开发详情 |
| `/projects/fitness-miniprogram/` | 训练手记 · 健身打卡小程序详情 |
| `/skills/` | 技能栈，技能关联到对应项目/成果 |
| `/about/` | 教育背景、研究兴趣、实习、荣誉、联系方式 |
| `/resume.pdf` | 中文简历 PDF |

## 快速开始

```bash
npm install
npm run dev        # 本地开发
npm run build      # 构建生产版本（输出到 dist/）
npm run preview    # 本地预览构建结果
```

## 部署

推送到 `main` 分支后，GitHub Actions 自动构建并部署到 GitHub Pages（见 `.github/workflows/deploy.yml`）。

## 维护说明

- 项目数据集中在 `src/pages/index.astro`、`src/pages/projects.astro` 内联维护
- 项目详情页位于 `src/pages/projects/`
- 全局样式：`src/styles/global.css`（Material Design 配色，CSS 变量见文件顶部）
- 联系方式：邮箱 `2374493946@qq.com`；GitHub `github.com/logic-zhuang`
