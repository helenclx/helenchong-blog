import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import { siteUrl, en, zh } from "../_data/sitemeta.js";

export default function(eleventyConfig) {
    // English feed
    eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/en/feed.xml",
		collection: {
			name: "posts_en",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: en.siteName,
			subtitle: en.siteDescription(),
			base: siteUrl + "/en/",
			author: {
				name: en.siteAuthor.name,
				email: en.siteAuthor.email,
			}
		}
	});

    // Chinese feed
    eleventyConfig.addPlugin(feedPlugin, {
		type: "atom",
		outputPath: "/zh/feed.xml",
		collection: {
			name: "posts_zh",
			limit: 10,
		},
		metadata: {
			language: "zh",
			title: zh.siteName,
			subtitle: zh.siteDescription(),
			base: siteUrl + "/zh/",
			author: {
				name: zh.siteAuthor.name,
				email: zh.siteAuthor.email,
			}
		}
	});
}