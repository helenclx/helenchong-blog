export const siteDomain = "blog.helenchong.omg.lol";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
	email: "helenchong@omg.lol",
	emailEncoded: '<span class="email-encoded">helenchong@omg<b>.example</b>.lol</span>',
	emailDecoyUrl: "emailme/",
	matrix: "@helenchong:omg.lol",
	signal: "helenchong.08"
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
		name: "Helen Chong",
		url: siteUrl + "/zh/about"
	},
	siteDescription() { return this.siteAuthor.name + "的个人部落格。"; }
};