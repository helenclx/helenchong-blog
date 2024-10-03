export const siteDomain = "blog.helenchong.omg.lol";
export const siteUrl = "https://" + siteDomain || "http://localhost:8080";
export const siteAuthor = {
	email: "helenchong@omg.lol",
	url: siteUrl + "/about"
};
export const feedPath = "/feed.xml";
export const feedUrl = siteUrl + feedPath;

export const en = {
	siteName: "Helen Chong's Journal",
	siteAuthor: {
		name: "Helen Chong"
	},
	siteDescription: () => this.siteAuthor.name + "'s personal blog."
};

export const zh = {
	siteName: "張海倫的日誌",
	siteAuthor: {
		name: "張海倫"
	},
	siteDescription: () => this.siteAuthor.name + "的個人部落格。"
};