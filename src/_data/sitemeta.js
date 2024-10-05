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
	siteName: "銀河花園",
	siteAuthor: {
		name: "張海倫",
		url: siteUrl + "/zh/about"
	},
	siteDescription: () => this.siteAuthor.name + "的個人部落格。"
};