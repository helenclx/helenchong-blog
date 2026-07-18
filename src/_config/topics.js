import pinyin from "pinyin";

export default function (eleventyConfig) {
	// Add post topic collection by tag
	function addTopicCollection(tag, comparator) {
		return (collectionApi) => {
			const topics = new Set();
			const posts = collectionApi.getFilteredByTag(tag);
			posts.forEach((p) => {
				const tops = p.data.topics;
				if (tops) {
					tops.forEach((c) => {
						topics.add(c);
					});
				}
			});
			return Array.from(topics).sort(comparator);
		};
	}

	// English post topic collection
	eleventyConfig.addCollection(
		"topics_en",
		addTopicCollection("posts_en", (a, b) =>
			a.localeCompare(b, "en", { sensitivity: "base" }),
		),
	);

	// Chinese post topic collection
	eleventyConfig.addCollection(
		"topics_zh",
		addTopicCollection("posts_zh", pinyin.compare),
	);

	// Filter: Filter blog posts by topic
	eleventyConfig.addFilter("filterByTopic", (posts, topic) => {
		const result = posts.filter((p) => {
			const tops = p.data.topics;
			return tops ? tops.includes(topic) : false;
		});
		return result;
	});
}
