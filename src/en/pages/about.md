---
title: About
desc: About this blog and its author.
---
{% imgFigure "/assets/helenchong/profilepic.webp", "{{ sitemeta[page.lang].siteAuthor.name }}'s profile picture", "profilepic" %}
[Image description: Cartoon digital illustration of a Chinese person with light skin and black hair, wearing a pair of red glasses and a purple polo shirt, on a light purple background. Description ends.]
{% endimgFigure %}

Hello! I am {{ sitemeta[page.lang].siteAuthor.name }}, a Millennial queer, autistic Malaysian Chinese person who goes by [they/them or she/her pronouns]({{ profilelinks.pronounsPage[page.lang] }}).

Professionally, I am a [web developer]({{ profilelinks.devSite }}) with 8 years of experience as a graphic designer. My hobbies include coding, reading, video games, drawing and crocheting.

I speak Mandarin Chinese, English, Cantonese and Malay, though I am most fluent in Mandarin and English, which is why this blog is available in English and Mandarin.

## About This Blog

{{ sitemeta[page.lang].siteName }} is my personal blog, launched on 8 October 2024.

The blog name is based on the name of my first blogs in the 2000s, Galaxy Park. I have always loved space, and I consider my personal blog my own garden on the web. Galaxy Garden being alliterative in English also helps. The name Galaxy Garden being similar but not the same as Galaxy Park reflects both my desire to return to my internet roots of blogging, and to start a new beginning of my blogging journey.

Technical information about {{ sitemeta[page.lang].siteName }} can be found on the [Colophon](colophon.md) page.

## Contact

The best way to contact me is through email. You can email me at [{{ sitemeta.siteAuthor.emailEncoded | safe }}](mailto:{{ sitemeta.siteAuthor.emailEncoded | safe }}). Using [plain text email](https://useplaintext.email/) is encouraged.

Alternately, if you want to follow me on social media, you can find me on the following platforms:
<ul>
    {% for social, values in profilelinks.socials %}
    <li>
        {{ values.inlineSvg | safe }} {{ values.name }}:
        <a{% if values.isExternalLink %} class="external-link"{% endif %} href="{{ values.url }}">{{ values.user }}</a>
    </li>
    {% endfor %}
</ul>