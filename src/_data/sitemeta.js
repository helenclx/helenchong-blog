export const siteDomain = "blog.helenchong.omg.lol";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
	email: "helenchong@omg.lol",
};

export const en = {
	siteName: "Galaxy Garden",
	siteAuthor: {
		name: "Helen Chong",
		url: siteUrl + "/en/about"
	},
	siteDescription: () => this.siteAuthor.name + "'s personal blog."
};

export const zh = {
	siteName: "银河花园",
	siteAuthor: {
		name: "张海伦",
		url: siteUrl + "/zh/about"
	},
	siteDescription: () => this.siteAuthor.name + "的个人部落格。"
};