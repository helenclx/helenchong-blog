---
title: Colophon
desc: How this blog is built.
updated: 2024-12-31T10:22:29+0800
---

## Technology
* Built with the static site generator [Eleventy](https://www.11ty.dev/) v{{ eleventy.version }}.
* JavaScript runtime: [Bun](https://bun.sh).
* Templating languages: Nunjucks and Markdown.
* Code written with Visual Studio Code.
* Tested browsers: Mozilla Firefox, Vivaldi and Lynx.
* Source code available on [GitHub](https://github.com/helenclx/helenchong-blog).

## Host and Domain
* Deployed to [Hostinger](https://www.hostinger.my/) from this blog's GitHub repository with a GitHub action.
* The address, {{ sitemeta.siteDomain }}, is a subdomain of my [omg.lol](https://home.omg.lol/) address: [helenchong.omg.lol](https://helenchong.omg.lol/), which was registered and purchased on 19 October 2024 for a lifetime membership of omg.lol.

## Plugins
* Eleventy's official [RSS](https://www.11ty.dev/docs/plugins/rss/) plugin
* Eleventy's official [Fetch](https://www.11ty.dev/docs/plugins/fetch/) plugin
* uncenter's [eleventy-plugin-toc](https://www.npmjs.com/package/@uncenter/eleventy-plugin-toc)
* [limax](https://www.npmjs.com/package/limax)

### markdown-it plugins
Eleventy has the Markdown parser [markdown-it](https://www.npmjs.com/package/markdown-it) built in to render Markdown to HTML.
* [markdown-it-anchor](https://www.npmjs.com/package/markdown-it-anchor)
* [markdown-it-attrs](https://www.npmjs.com/package/markdown-it-attrs)
* [markdown-it-bracketed-spans](https://www.npmjs.com/package/markdown-it-bracketed-spans)

## Fonts
* [Lexica Ultralegible](https://jacobxperez.github.io/lexica-ultralegible/) — default font for latin alphabets and numbers.
* [Intel One Mono](https://www.intel.com/content/www/us/en/company-overview/one-monospace-font.html) — monospaced font.

## Branding

* I designed the {{ sitemeta[page.lang].siteName }} logo in Affinity Designer 2.
* I drew the cartoon illustration avatar of myself in Adobe Illustrator CS5, inspired by [Andy Carolan](https://www.andycarolan.com/)'s art style.