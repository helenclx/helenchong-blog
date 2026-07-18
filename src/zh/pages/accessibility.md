---
title: 无障碍声明
tags: ["footernav_zh"]
updated: 2026-05-21T23:30:14+0800
eleventyComputed:
  desc: "{{ sitemeta.zh.siteName }}的网站无障碍声明。"
---

作为一名残疾人士和神经多样性群体成员，无障碍设计对我而言至关重要。因此，尽管本部落格主要是作为我个人表达的天地，但我同时也希望访客无论使用何种技术设备或具备何种能力，都能获得最佳的浏览体验。

因此，我致力于将本部落格设计得对残疾人士和神经多样性群体更具包容性，力求符合[《Web 内容无障碍指南（Web Content Accessibility Guidelines，WCAG）2.2版》](https://www.w3.org/WAI/standards-guidelines/wcag/)的 AA 级标准。

## 无障碍功能

本部落格无障碍功能概述：

- 响应式网页设计和适合移动设备的布局。
- 语义化 HTML，并采用 Web Accessibility Initiative – Accessible Rich Internet Applications（WAI-ARIA）增强。
- 文本与背景颜色之间具有足够的色彩对比度。
- 所有非装饰性图片均配有替代文本，部分图片还附有更详细的描述。
- 支持键盘导航：所有互动元素均可通过键盘按键获得焦点并进行互动，获得焦点时会显示可见的轮廓线。
- 内容与标题的逻辑结构清晰。
- 提供跳转至主要内容或页面顶部的链接。
- 字体大小适中，且放大后不会破坏网站布局。
- 不自动播放音频或视频。

本部落格使用 [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans) 作为默认拉丁字体，并使用 [Intel One Mono](https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html) 作为等宽字体，以提升文本的可读性。

## 测试

我使用以下工具来测试本部落格的无障碍性：

- WebAIM 的 [WAVE 浏览器扩展](https://wave.webaim.org/extension/)
- [Alex Clapperton 的色彩对比度检测器](https://colourcontrast.cc/)
- 适用于 Windows 的 [NVDA](https://www.nvaccess.org/about-nvda/) 屏幕阅读器
- 适用于 Linux 的 [Orca](https://orca.gnome.org/) 屏幕阅读器
- 适用于 Android 的 TalkBack 屏幕阅读器

此外，我还通过仅使用键盘进行导航的方式，手动测试本部落格的无障碍性。

## 反馈

欢迎残疾人士和神经多样性群体提供反馈。如果您有任何反馈或建议，旨在提升本部落格的无障碍性，请[通过电子邮件联系我]({{ sitemeta.siteAuthor.emailDecoyUrl }}){rel=“nofollow, noindex”}。
