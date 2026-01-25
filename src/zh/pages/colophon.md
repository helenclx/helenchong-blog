---
title: 网站建立
desc: 本部落格是如何建立的。
tags: ["footernav_zh"]
updated: 2026-01-26T00:55:22+0800
---
## 科技

* 使用静态网页生成器 [Eleventy](https://www.11ty.dev/) 版本 {{ eleventy.version }} 构建。
* JavaScript 软件包管理器：[pnpm](https://pnpm.io/)。
* 模板语言：[Vento](https://vento.js.org/) 和 Markdown。
* 测试浏览器：Mozilla Firefox、Vivaldi 和 Lynx。
* 源代码可在[我的 Gitea 实例](https://git.helenchong.dev/helenchong/helenchong-blog)、[Codeberg](https://codeberg.org/helenchong/helenchong-blog) 或 [GitHub](https://github.com/helenclx/helenchong-blog) 上获取。

## 托管与域名

* 托管于我从 [DeluxHost](https://deluxhost.net/) 租借的虚拟专用服务器（virtual private server，VPS）。
* 网络服务器：[Caddy](https://caddyserver.com/)。
* 本部落格网址 {{ sitemeta.siteDomain }} 是我的 [omg.lol](https://home.omg.lol/) 网址 [helenchong.omg.lol](https://helenchong.omg.lol/) 的子域名。我于 2024 年 10 月 19 日注册并购买了 omg.lol 的网址与终身会员资格。

在此之前，本部落格由 [Hostinger](https://www.hostinger.com/my) 的 Premium 共享主机套餐托管至 2025 年 5 月 14 日，以及由我从 [Chunkserve](https://chunkserve.com/) 租借的虚拟转筒服务器托管至 2025 年 5 月 27 日。

## 插件

* Eleventy 的官方 [RSS](https://www.11ty.dev/docs/plugins/rss/) 插件
* Noel Forte 的 [eleventy-plugin-vento](https://github.com/noelforte/eleventy-plugin-vento)
* uncenter 的 [eleventy-plugin-toc](https://www.npmjs.com/package/@uncenter/eleventy-plugin-toc)
* [Luxon](https://moment.github.io/luxon/)
* [limax](https://github.com/lovell/limax)
* [sort-by-pinyin](https://github.com/lisposter/sort-by-pinyin)

### markdown-it 插件

Eleventy 内置了 Markdown 解析器 [markdown-it](https://www.npmjs.com/package/markdown-it) 以将 Markdown 转换为 HTML。
* [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
* [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
* [markdown-it-bracketed-spans](https://www.npmjs.com/package/markdown-it-bracketed-spans)

## 字体

* [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans)——拉丁字母和数字的默认字体。CSS 样式表和 WOFF2 字体格式由 [google-webfonts-helper](https://gwfh.mranftl.com/fonts) 生成。
* [Intel One Mono](https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html)——单行距字体。

## 品牌

* 我用 Affinity Designer 2 设计{{ sitemeta[page.lang].siteName }}的标志和 88x31 徽章。
* 我用 Adobe Illustrator CS5 绘制自己的卡通插图头像，绘画风格晾干源自 [Andy Carolan](https://www.andycarolan.com/)。

## 写作

 - 用 [Obsidian](https://obsidian.md/) 草稿并撰写网页和部落格文章。
 - 用我自行编写的 Python 脚本创建新部落格文章的文件。
