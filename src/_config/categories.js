import sortPinyin from "sort-by-pinyin";

export default function(eleventyConfig) {
    // English post categories
    eleventyConfig.addCollection("categories_en", (collectionApi) => {
        let categories = new Set();
        let posts = collectionApi.getFilteredByTag("posts_en");
        posts.forEach(p => {
            let cats = p.data.categories;
            if (cats) {
                cats.forEach(c => categories.add(c));
            }
        });
        return Array.from(categories).sort((a, b) => a.localeCompare(b, "en", {"sensitivity": "base"}));
    });

    // Chinese post categories
    eleventyConfig.addCollection("categories_zh", (collectionApi) => {
        let categories = new Set();
        let posts = collectionApi.getFilteredByTag("posts_zh");
        posts.forEach(p => {
            let cats = p.data.categories;
            if (cats) {
                cats.forEach(c => categories.add(c));
            }
        });
        return sortPinyin(Array.from(categories));
    });

    // Filter: Filter blog posts by category
    eleventyConfig.addFilter("filterByCategory", (posts, cat) => {
        let result = posts.filter(p => {
            let cats = p.data.categories;
            if (cats) {
                return cats.includes(cat);
            }
        });
        return result;
    });
}
