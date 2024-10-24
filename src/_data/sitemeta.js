export const siteDomain = "blog.helenchong.omg.lol";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
	email: "helenchong@omg.lol",
	emailEncoded: "&#x68;&#x65;&#x6C;&#x65;&#x6E;&#x63;&#x68;&#x6F;&#x6E;&#x67;&#x40;&#x6F;&#x6D;&#x67;&#x2E;&#x6C;&#x6F;&#x6C;",
};
export const feedPath = "feed.xml";
export const siteLang = {
    en: {
      label: 'EN',
      code: 'en',
      long: 'English'
    },
    zh: {
      label: 'ZH',
      code: 'zh',
      long: '中文'
    }
};

export const en = {
	siteName: "Galaxy Garden",
	siteAuthor: {
		name: "Helen Chong",
		url: siteUrl + "/en/about"
	},
	siteDescription() { return this.siteAuthor.name + "'s personal blog."; }
};

export const zh = {
	siteName: "银河花园",
	siteAuthor: {
		name: "张海伦",
		url: siteUrl + "/zh/about"
	},
	siteDescription() { return this.siteAuthor.name + "的个人部落格。"; }
};