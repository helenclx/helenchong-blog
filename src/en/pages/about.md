---
title: About
desc: About this blog and its author.
tags: ["headernav_en"]
toc: true
---
{{ imgFigure "/assets/galaxygarden/profilepic.webp", sitemeta[page.lang].siteName + "'s profile picture", "profilepic" }}
[Image description: Cartoon digital illustration of a Chinese person with light skin and black hair, wearing a pair of red glasses and a purple polo shirt, on a light purple background. Description ends.]
{{ /imgFigure }}

Hello! I am {{ sitemeta[page.lang].siteAuthor.name }}, a Millennial queer, autistic and visually impaired Malaysian Chinese person who goes by [they/them or she/her pronouns]({{ profileitems.pronounsPage[page.lang] }}).

Professionally, I am a [web developer]({{ profileitems.devSite }}) with 8 years of experience as a graphic designer. My hobbies include coding, reading, video games, drawing and crocheting.

I speak Mandarin Chinese, English, Cantonese and Malay, though I am most fluent in Mandarin and English, which is why this blog is available in English and Mandarin.

## About This Blog

{{ imgFigure "/assets/galaxygarden/galaxy-garden-logo.webp", "Logo of " + sitemeta[page.lang].siteName, "profilepic" }}
[Image description: Logo of my personal blog, {{ sitemeta[page.lang].siteName }}, with the logo consists of a light yellow minimalist shape of a galaxy resembling the capital G on top of a purple background. Description ends.]
{{ /imgFigure }}

{{ sitemeta[page.lang].siteName }} is my personal blog, launched on 8 October 2024.

The blog name is based on the name of my first blogs in the 2000s, Galaxy Park. I have always loved space, and I consider my personal blog my own garden on the web. Galaxy Garden being alliterative in English also helps. The name Galaxy Garden being similar but not the same as Galaxy Park reflects both my desire to return to my internet roots of blogging, and to start a new beginning of my blogging journey.

Technical information about {{ sitemeta[page.lang].siteName }} can be found on the [Colophon](colophon.md) page.

## Blog Badge

{{ imgFigure "/assets/galaxygarden/galaxy-garden-88x31.svg", sitemeta[page.lang].siteName + "'s 88x31 badge", "grid-center", 'width="176" height="62"' }}
[Image description: {{ langstrings[page.lang].siteBadgeAlt  }} Description ends.]
{{ /imgFigure }}

I have designed and made a 88x31 badge for {{ sitemeta[page.lang].siteName }}, so if you want to link back to this blog, you may use this badge.

## Contact

The best way to contact me is through email. You can email me at [{{ sitemeta.siteAuthor.emailEncoded }}]({{ sitemeta.siteAuthor.emailDecoyUrl }}){rel="nofollow, noindex"}. I also have a [PGP key](https://keys.openpgp.org/search?q=helenchong%40omg.lol). Using [plain text email](https://useplaintext.email/) is encouraged.

If you want to chat with me, you may message `{{ sitemeta.siteAuthor.signal }}` on Signal.

As for social media, I am only active on [{{ profileitems.socials.mastodon.name }}](https://en.wikipedia.org/wiki/Mastodon_(social_network)) and the [Fediverse](https://en.wikipedia.org/wiki/Fediverse)，with my handle being [{{ profileitems.socials.mastodon.user }}]({{ profileitems.socials.mastodon.url }}). If you are new to the Fediverse, I recommend checking out [Fedi.Tips](https://fedi.tips/) to learn to get started.
