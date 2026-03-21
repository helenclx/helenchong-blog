import pinyin from "pinyin";

export default function(eleventyConfig) {
	// Add post topic collection by tag
	function addTopicCollection(tag, comparator) {
		return (collectionApi) => {
			let topics = new Set();
			let posts = collectionApi.getFilteredByTag(tag);
			posts.forEach(p => {
				let tops = p.data.topics;
				if (tops) {
					tops.forEach(c => topics.add(c));
				}
			});
			return Array.from(topics).sort(comparator);
		};
	}

	// English post topic collection
	eleventyConfig.addCollection(
		"topics_en",
		addTopicCollection(
			"posts_en",
			(a, b) => a.localeCompare(b, "en", {"sensitivity": "base"})
		)
	);

	// Chinese post topic collection
	eleventyConfig.addCollection(
		"topics_zh",
		addTopicCollection("posts_zh", pinyin.compare)
	);

	// Filter: Filter blog posts by topic
	eleventyConfig.addFilter("filterByTopic", (posts, topic) => {
		let result = posts.filter(p => {
			let tops = p.data.topics;
			if (tops) {
				return tops.includes(topic);
			}
		});
		return result;
	});
}
