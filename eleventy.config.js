// Plugins
import { EleventyI18nPlugin } from "@11ty/eleventy";

// Custom configurations
import feedConfig from "./src/_config/feed.js";
import filtersConfig from "./src/_config/filters.js";
import markdownItConfig from "./src/_config/markdown-it.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en",
        errorMode: "allow-fallback"
    });

    // Custom configurations
    eleventyConfig.addPlugin(feedConfig);
    eleventyConfig.addPlugin(filtersConfig);
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(shortCodesConfig);

    // Passthrough File Copy
    eleventyConfig.addPassthroughCopy("./src/assets/");
    eleventyConfig.addWatchTarget("./src/assets/");

    return {
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "src"
        }
    };
};