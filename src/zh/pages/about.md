---
title: 关于
desc: 关于本部落格和作者。
---
{% imgFigure "/assets/galaxygarden/profilepic.webp", "{{ sitemeta[page.lang].siteAuthor.name }} 的个人肖像", "profilepic" %}
【图片描述： 一名浅色皮肤、黑色头发、戴着一副红色眼镜，并穿着一件紫色 Polo 衫的华人，位于浅紫色背景的卡通数字插画。描述结束。】
{% endimgFigure %}

你好！我是 {{ sitemeta[page.lang].siteAuthor.name }}（中文姓氏：张），一个千禧世代的马来西亚华人酷儿、自闭儿兼视障人士。[我的代称]({{ profileitems.pronounsPage[page.lang] }})包括他/你、tā/你、她/妳和粤语的佢/你。

我的专业是[网页开发人员]({{ profileitems.devSite }})，并拥有八年平面设计师的经验。我的爱好包括编码、阅读、电玩、绘画和钩针。

我会说华语、英语、粤语和马来语，但我的华语和英语最为流利，这也是本部落格有英语和华语版本的原因。

## 关于本部落格

{% imgFigure "/assets/galaxygarden/galaxy-garden-logo.webp", "Logo of {{ sitemeta[page.lang].siteName }}", "profilepic" %}
【图片描述： 我的个人部落格，{{ sitemeta[page.lang].siteName }}的标志，由一个浅黄色、样子与大写字母 G 相似的简约的银河形状和紫色背景组成。描述结束。】
{% endimgFigure %}

{{ sitemeta[page.lang].siteName }}是是我的个人部落格，于 2024 年 10 月 8 日正式发行。

此部落格名字灵感源自我在 2000 年代期间部落格名字——星光盛宴。我一向都对太空有浓厚的喜爱，而我将部落格视为自己网络上的个人花园。银河花园的英文名 Galaxy Garden 因两个字还以 G 开头而押韵。银河花园和星光盛宴共享太空的主题，但又由不同词语组成，反映出我回归写部落格、我的网络创作根源的意愿，同时也是我的部落格旅程的新开始。

有关{{ sitemeta[page.lang].siteName }}的技术信息，可参见[网站建立](colophon.md)页面。

## 部落格徽章

<div class="grid-center">
    <img src="/assets/galaxygarden/galaxy-garden-88x31.svg" alt="{{ langstrings[page.lang].siteBadgeAlt  }}" width="176" height="62" loading="lazy">
</div>

我为{{ sitemeta[page.lang].siteName }}设计了一枚 88x31 徽章，所以如果你想链接至本部落格，你可使用这枚徽章。

嵌入{{ sitemeta[page.lang].siteName }}的 88x31 徽章的 HTML 代码：

```html
<a href="{{ sitemeta.siteUrl }}/">
    <img width="88" height="31"
        src="{{ sitemeta.siteUrl }}/assets/galaxygarden/galaxy-garden-88x31.svg"
        alt="{{ langstrings[page.lang].siteBadgeAlt  }}">
</a>
```

## 联系方式

联络我的最佳方式是通过电子邮件。你可以发送电子邮件至 [{{ sitemeta.siteAuthor.emailEncoded | safe }}]({{ sitemeta.siteAuthor.emailDecoyUrl }}){rel="nofollow, noindex"}。鼓励使用[纯文本电子邮件](https://useplaintext.email/)。

如果你想以尽安全的方式与我聊天，你可在 Signal 上发送私讯至 `{{ sitemeta.siteAuthor.signal }}`。

至于社交媒体，我只活跃于 [{{ profileitems.socials.mastodon.name }}](https://zh.wikipedia.org/wiki/Mastodon) 及[联邦宇宙](https://zh.wikipedia.org/wiki/%E8%81%94%E9%82%A6%E5%AE%87%E5%AE%99)，而我的账号为 [{{ profileitems.socials.mastodon.user }}]({{ profileitems.socials.mastodon.url }})。