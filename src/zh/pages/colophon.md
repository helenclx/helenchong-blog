---
title: 网站建立
desc: 本部落格是如何建立的。
updated: 2025-03-31T19:09:06+0800
---

## 科技
* 使用静态网页生成器 [Eleventy](https://www.11ty.dev/) 版本 {{ eleventy.version }} 构建
* JavaScript 运行环境：[Bun](https://bun.sh)。
* 模板语言：Nunjucks 和 Markdown。
* 测试浏览器：Mozilla Firefox、Vivaldi 和 Lynx。
* 源代码可在 [GitHub](https://github.com/helenclx/helenchong-blog) 上获取。

## 托管与域名
* 通过 GitHub action 从本部落格的 GitHub 仓库部署到 [Hostinger](https://www.hostinger.my/)。
* 本部落格网址 {{ sitemeta.siteDomain }} 是我的 [omg.lol](https://home.omg.lol/) 网址 [helenchong.omg.lol](https://helenchong.omg.lol/) 的子域名。我于 2024 年 10 月 19 日注册并购买了 omg.lol 的网址与终身会员资格。

## 插件
* Eleventy 的官方 [RSS](https://www.11ty.dev/docs/plugins/rss/) 插件
* Eleventy 的官方 [Fetch](https://www.11ty.dev/docs/plugins/fetch/) 插件
* uncenter 的 [eleventy-plugin-toc](https://www.npmjs.com/package/@uncenter/eleventy-plugin-toc)
* [limax](https://www.npmjs.com/package/limax)

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
