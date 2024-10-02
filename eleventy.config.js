export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    return {
        markdownTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    };
};