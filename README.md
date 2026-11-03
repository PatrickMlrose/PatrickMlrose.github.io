# PatrickMlrose 的博客

网站：https://patrickmlrose.github.io

基于 Jekyll / Chirpy，使用 GitHub Actions 构建并发布到 GitHub Pages。

## 在博客内写文章

侧栏点击 **写文章** 即可打开 [站内编辑器](https://patrickmlrose.github.io/admin/)。使用仅限本仓库、具有 Contents 读写权限的细粒度令牌登录；无需额外的认证服务器。[首次登录、传图和发布说明](https://patrickmlrose.github.io/admin/help/)。

编辑器管理 `_posts/` 和 `assets/uploads/`；保存直接提交到 `main`，沿用同一条 Pages 工作流。前端依赖锁定在 `tools/editor/package-lock.json`，部署时构建到本站，不在页面中加载远程 CMS 脚本。

## 在 GitHub 网页发布文章

1. 打开仓库，选择 Add file → Create new file。
2. 文件名填写 `_posts/YYYY-MM-DD-short-title.md`。
3. 参考下面的文章头部，日期改成实际发布时间，再写正文。
4. 提交到 `main`，在 Actions 中等待 Build and Deploy 成功。

```markdown
---
title: "我的新文章"
date: 2026-10-28 09:00:00 +0800
categories: [学习笔记]
tags: [笔记]
description: "文章简介。"
---

这里开始写正文。
```

草稿示例在 `_drafts/new-post-template.md`。草稿不会出现在网站中，但本仓库公开，草稿源文件也公开。

## 常用修改位置

| 内容 | 文件 |
| --- | --- |
| 博客标题、介绍、头像 | `_config.yml` |
| 关于页面 | `_tabs/about.md` |
| 文章 | `_posts/` |
| 社交链接 | `_data/contact.yml` |
| 自动构建和部署 | `.github/workflows/pages-deploy.yml` |

图片可放在 `assets/img/`，文章中用 `![说明](/assets/img/example.jpg)` 引用。

## 发布设置

仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
`main` 自动构建并部署；`setup/chirpy-blog` 只构建和检查，不发布。

工作流会检查站内链接，外部网站的可达性不在该检查范围内。
主题静态库使用官方子模块并随站点发布。

## 本地预览（可选）

需要 Ruby 3.4、Bundler、Git 和 Node.js 24。无需本地环境也能在站内编辑器或 GitHub 网页写作。

```sh
git submodule update --init --recursive
npm ci --prefix tools/editor
npm run build --prefix tools/editor
bundle install
bundle exec jekyll serve
```

## 迁移记录

- 原 Hexo 版本提交：`25e0136cc18cea0c86ab8da116c130ee70e7ba20`。
- 远程备份分支：`backup/hexo-before-chirpy-2026-10-28`。
- 原默认文章保留在 `/2026/01/02/hello-world/`。
- Chirpy Starter 来源：https://github.com/cotes2020/chirpy-starter
- 模板提交：`beffc88713242da8bf49325674be38d171071213`。
- 保留上游 LICENSE；使用本仓库时请区分模板代码与作者文章的权利。

## OpenClash 手册

完整交互手册位于 `/handbook/openclash/`，侧栏入口为 `/openclash/`，导读文章位于 `/posts/openclash-handbook/`。

发布来源：[PatrickMlrose/openclash-handbook](https://github.com/PatrickMlrose/openclash-handbook)，本次快照提交 `e09e1488b5761eeeb36d63e540395e53f37af129`。原书来源、许可与改写说明保存在手册的下载目录中。

更新时先在手册源码仓库运行 `npm ci && npm run prepare:pages`，检查后将 `docs/` 下文件同步到本仓库 `handbook/openclash/`（无需复制 `.nojekyll`）。保留下载目录中的 `ATTRIBUTION.md` 和入口 HTML 的 canonical 链接；同步更新导读文章和章节数量，再提交 main。手册独立于博客主题渲染，由原有 GitHub Actions 一同发布。
