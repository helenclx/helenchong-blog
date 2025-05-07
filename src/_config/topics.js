import sortPinyin from "sort-by-pinyin";

export default function(eleventyConfig) {
    // English post topics
    eleventyConfig.addCollection("topics_en", (collectionApi) => {
        let topics = new Set();
        let posts = collectionApi.getFilteredByTag("posts_en");
        posts.forEach(p => {
            let tops = p.data.topics;
            if (tops) {
                tops.forEach(c => topics.add(c));
            }
        });
        return Array.from(topics).sort((a, b) => a.localeCompare(b, "en", {"sensitivity": "base"}));
    });

    // Chinese post topics
    eleventyConfig.addCollection("topics_zh", (collectionApi) => {
        let topics = new Set();
        let posts = collectionApi.getFilteredByTag("posts_zh");
        posts.forEach(p => {
            let tops = p.data.topics;
            if (tops) {
                tops.forEach(c => topics.add(c));
            }
        });
        return sortPinyin(Array.from(topics));
    });

    // Filter: Filter blog posts by category
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
