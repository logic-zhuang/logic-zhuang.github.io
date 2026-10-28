# 个人网站 (Personal Website)

基于 [Astro](https://astro.build) 的静态个人网站，适合求职展示与技术博客。

## 快速开始

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 本地预览构建结果
npm run preview
```

## 目录结构

```
├── public/              # 静态资源（favicon、简历 PDF 等）
├── src/
│   ├── components/       # Astro 组件
│   ├── layouts/          # 布局模板
│   ├── pages/            # 页面文件（文件路由）
│   │   ├── index.astro   # 首页
│   │   ├── projects.astro # 项目列表
│   │   ├── about.astro   # 关于我
│   │   └── projects/      # 项目详情页
│   └── styles/            # 全局样式
├── astro.config.mjs      # Astro 配置
└── package.json
```

## 上线部署（GitHub Pages）

### 1. 修改配置
编辑 `astro.config.mjs`，把 `site` 改成你的 GitHub 用户名：
```js
site: 'https://你的用户名.github.io',
```

### 2. 推送到 GitHub
```bash
git init
git add .
git commit -m "init: personal website"
git branch -M main
git remote add origin https://github.com/你的用户名/你的用户名.github.io.git
git push -u origin main
```

### 3. 开启 GitHub Pages
仓库 → Settings → Pages → Source 选择 `GitHub Actions`

新建 `.github/workflows/deploy.yml`：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v2
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

推送后自动部署，访问 `https://你的用户名.github.io` 即可。

## 需要修改的占位内容

| 位置 | 说明 |
|------|------|
| 所有页面中的 `你的名字` | 替换为真实姓名 |
| `astro.config.mjs` 中的 `your-username` | 替换为 GitHub 用户名 |
| `Footer.astro` 和 `about.astro` 中的邮箱/GitHub 链接 | 替换为真实联系方式 |
| `public/resume.pdf` | 放入你的简历 PDF 文件 |
| Header 中的 `你的名字` | 导航栏显示名 |

## 自定义

- **配色**：编辑 `src/styles/global.css` 顶部的 CSS 变量 `--accent`
- **新增项目**：在 `src/pages/projects/` 新建 `.astro` 文件，并在 `projects.astro` 中添加入口卡片
- **新增博客**：可启用 Astro Content Collections，在 `src/content/` 下新建 blog 目录
