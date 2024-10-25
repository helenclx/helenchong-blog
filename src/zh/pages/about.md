---
title: 关于
desc: 关于本部落格和作者。
---
{% imgFigure "/assets/helenchong/profilepic.webp", "{{ sitemeta[page.lang].siteAuthor.name }}的个人肖像", "profilepic" %}
【图片描述： 一名浅色皮肤、黑色头发、戴着一副红色眼镜，并穿着一件紫色 Polo 衫的华人，位于浅紫色背景的卡通数字插画。描述结束。】
{% endimgFigure %}

你好！我是{{ sitemeta[page.lang].siteAuthor.name }}，一个千禧世代的马来西亚华人酷儿兼自闭儿。[我的代称]({{ profilelinks.pronounsPage[page.lang] }})包括他/你、tā/你、她/妳和粤语的佢/你。

我的专业是[网页开发人员]({{ profilelinks.devSite }})，并拥有八年平面设计师的经验。我的爱好包括编码、阅读、电玩、绘画和钩针。

我会说华语、英语、粤语和马来语，但我的华语和英语最为流利，这也是本部落格有英语和华语版本的原因。

## 关于本部落格

{{ sitemeta[page.lang].siteName }} 是是我的个人部落格，于 2024 年 10 月 8 日正式发行。

此部落格名字灵感源自我在 2000 年代期间部落格名字——星光盛宴。我一向都对太空有浓厚的喜爱，而我将部落格视为自己网络上的个人花园。银河花园的英文名 Galaxy Garden 因两个字还以 G 开头而押韵。银河花园和星光盛宴共享太空的主题，但又由不同词语组成，反映出我回归写部落格、我的网络创作根源的意愿，同时也是我的部落格旅程的新开始。

{{ sitemeta[page.lang].siteName }}使用静态网页生成器 [Eleventy](https://www.11ty.dev/) 构建, 并由 [Hostinger](https://www.hostinger.my/) 托管。

## 联系方式

联络我的最佳方式是通过电子邮件。你可以发送电子邮件至 [{{ sitemeta.siteAuthor.emailEncoded | safe }}](mailto:{{ sitemeta.siteAuthor.emailEncoded | safe }})。鼓励使用[纯文本电子邮件](https://useplaintext.email/)。

另外，如果你想在社交媒体上关注我，你也可以在以下平台找我：
- Mastodon: [{{ profilelinks.socials.mastodon.user }}]({{ profilelinks.socials.mastodon.url }})
- Bluesky: [{{ profilelinks.socials.bluesky.user }}]({{ profilelinks.socials.bluesky.url }}){.external-link}