---
title: "OpenClash 实用手册：33 章指南与 fq-book 整编"
date: 2026-11-03 00:00:00 +0800
categories: [技术实践, 网络工具]
tags: [OpenClash, OpenWrt, Mihomo, DNS, 网络排查]
description: "完整交互手册已收录到博客：33 章指南、86 篇 fq-book 原书导读、45 个视频索引，以及配置工具和验收清单。"
comments: false
toc: true
---

这份 OpenClash 使用手册现已收录到本站，可以直接在博客域名下阅读。它从安装、订阅、DNS 和规则分流讲起，再延伸到终端代理、协议兼容、SSH 隧道、NAT 与证书排查。

**[打开完整交互手册](/handbook/openclash/)**

## 这份手册包括什么

- **33 章实用指南**：原有 21 章 OpenClash 教程，加上 12 章 fq-book 实用整编。
- **86 篇原书导读**：覆盖指定版本 fq-book 的全部 Markdown 来源页面，按主题、整编方式和关键词筛选。
- **45 个视频索引**：保留原有教程目录和研究范围说明。
- **配置与验收工具**：生成 YouTube 规则覆写模块，下载 provider 示例，记录浏览器本地的安装验收进度。

全文搜索、章节跳转、代码复制和下载都在手册内完成。验收勾选仅保存在当前浏览器，不会连接或修改路由器。

## 从哪里开始

| 现在要解决的问题 | 建议阅读 |
| --- | --- |
| 第一次安装 OpenClash | 第 1—8 章，完成后用第 21 章验收 |
| 已有配置，想添加分流规则 | 第 6、9、10、11 章 |
| 网络突然异常 | 第 18 章，再根据现象阅读第 23、28 章 |
| 浏览器正常，终端或 Git 不通 | 第 22、24、26 章 |
| 游戏、虚拟机或局域网异常 | 第 12、27 章 |
| 想理解旧教程怎样迁移 | 第 32 章与“原书导读” |

## 全部章节

| 章节 | 主题 |
| --- | --- |
| 01 | 先确定一条清晰的使用路线 |
| 02 | 分清 OpenClash、核心、订阅、规则和面板 |
| 03 | 安装前：系统、网络和备份 |
| 04 | 主路由和旁路网关怎么接 |
| 05 | 安装插件和核心 |
| 06 | 导入订阅与认识两种配置文件 |
| 07 | 三组容易混淆的“模式” |
| 08 | DNS：配置中最需要理解的一部分 |
| 09 | 策略组和分流规则 |
| 10 | 保存自定义规则：优先使用界面和覆写模块 |
| 11 | 一份容易维护的 provider 配置 |
| 12 | 按设备和应用分流 |
| 13 | IPv6：先决定谁接管，再决定开关 |
| 14 | AdGuard Home、SmartDNS、MosDNS 如何配合 |
| 15 | Smart 智能策略组 |
| 16 | 自建节点、链式代理和订阅转换 |
| 17 | 控制面板、域名嗅探与远程管理 |
| 18 | 故障排查：从现象到证据 |
| 19 | 升级、回退和日常维护 |
| 20 | 怎样理解这套视频的演进 |
| 21 | 完成标准：一次安装至少验收这些项目 |
| 22 | 从一次网页请求理解代理、VPN 与透明接管 |
| 23 | DNS、Hosts 与加密解析的实际边界 |
| 24 | 让终端、Git 和下载器使用正确的代理 |
| 25 | 协议、节点链接和订阅兼容性 |
| 26 | SSH 隧道与应用级代理的最小实践 |
| 27 | NAT、游戏、虚拟机与局域网 |
| 28 | TLS、RST、403：把失败定位到具体层 |
| 29 | 浏览器、隐私与出口 IP 的使用习惯 |
| 30 | 自建节点与服务维护：从能连到可恢复 |
| 31 | Tor、IPFS、网页存档：按用途扩展阅读 |
| 32 | 阅读旧教程时的迁移与纠错清单 |
| 33 | 手册来源、授权与 GitHub 网站维护 |

## 下载与保留

- [33 章完整手册（Markdown）](/handbook/openclash/downloads/openclash-guide.md)
- [fq-book 新增实用整编（Markdown）](/handbook/openclash/downloads/fq-book-guide.md)
- [86 篇来源映射（JSON）](/handbook/openclash/downloads/fq-book-index.json)
- [视频与来源索引（Markdown）](/handbook/openclash/downloads/video-index.md)
- [源码与维护说明](https://github.com/PatrickMlrose/openclash-handbook)

Markdown 可以保存到本地阅读；原文与视频仍需通过各自链接访问。

## 来源、修改与许可

新增整编参考 hoochanlon 及贡献者的[《这本书能让你连接互联网》](https://github.com/hoochanlon/fq-book)，锁定上游提交 [345bc27](https://github.com/hoochanlon/fq-book/tree/345bc276f60a24a34c90042c19d28c0fc01e87e2)。整编于 **2026-11-02**，按 OpenClash 场景重新组织、改写并补充操作与排查方法；本次收录到博客的日期为 **2026-11-03**。

原书 README 标注 [CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)，新增整编文档按同一许可提供并保留署名、来源与修改说明。原书转载文章和图片仍属于各自权利人；本站保留原文入口，没有镜像其全文与图片。详细信息见[整编说明](/handbook/openclash/downloads/integration-notes.md)和[来源授权记录](/handbook/openclash/downloads/ATTRIBUTION.md)。

原有第 1—21 章保留 **2026-09-05** 的研究日期与版本快照，不代表当前最新版本。视频未取得完整字幕，原书中的服务商、旧软件和外链也没有逐项复测。手册中的网络操作仍需按自己的设备与版本验证。
