---
layout: page
title: 写文章使用说明
permalink: /admin/help/
robots: noindex
sitemap: false
---

[进入站内编辑器](/admin/) · [返回博客首页](/)

### 首次登录

1. 用自己的博客账号登录 GitHub，打开[新建细粒度令牌](https://github.com/settings/personal-access-tokens/new?name=Blog%20Editor&target_name=PatrickMlrose&expires_in=30&contents=write)。
2. 资源所有者选 **PatrickMlrose**，仓库访问选 **Only select repositories**，仅勾选 **PatrickMlrose.github.io**。设置有效期，只给 **Contents → Read and write**，保留自动附带的 **Metadata → Read-only**。
3. 回到[编辑器](/admin/)，选 **使用令牌登录 / Sign In with Token**，把令牌粘贴到编辑器的登录框。不要贴到文章、仓库文件或聊天中。

令牌会保存在这台设备的浏览器中，请在自己的设备上登录。到期后可重新登录；也可在 [GitHub 令牌设置](https://github.com/settings/personal-access-tokens) 中撤销权限。

### 写作、传图和发布

打开 **文章** 集合，创建新文章或选一篇修改。填写标题、时间和正文，按需添加分类和标签。要在正文插图，在正文工具栏选择图片，上传或从媒体库选择；封面图片可单独设置。上传文件放在博客的 `assets/uploads/`。

**在博客上公开** 默认开启。保存后，点写作室顶部的 **发布进度**，找到这次保存对应的记录。等 `deploy` 成功后点 **查看博客**，或刷新已打开的首页，即可查看更新。也可以直接打开[部署记录](https://github.com/PatrickMlrose/PatrickMlrose.github.io/actions/workflows/pages-deploy.yml?query=branch%3Amain)。

首次保存时自动用文章日期生成文件名；不要为已有文章手动改名，以免影响旧链接。

想稍后再发布，可以先关闭 **在博客上公开** 后保存；准备好时再开启并保存。未展示文章的源文件仍在公开仓库中。
