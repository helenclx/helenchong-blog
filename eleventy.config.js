// Plugins
import { EleventyI18nPlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import { VentoPlugin } from 'eleventy-plugin-vento';
import tocPlugin from '@uncenter/eleventy-plugin-toc';

// Custom configurations
import feedConfig from "./src/_config/feed.js";
import filesConfig from "./src/_config/files.js";
import filters from "./src/_config/filters.js";
import markdownItConfig from "./src/_config/markdown-it.js";
import shortCodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en",
        errorMode: "allow-fallback"
    });
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
    eleventyConfig.addPlugin(VentoPlugin, {
        autotrim: true,
    });
    eleventyConfig.addPlugin(tocPlugin, {
        tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
        wrapper: function (toc) {
            return `<nav class="toc" aria-labelledby="toc-heading">${toc}</nav>`;
        },
    });

    // Custom configurations
    eleventyConfig.addPlugin(feedConfig);
    eleventyConfig.addPlugin(filesConfig);
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(shortCodesConfig);

    // Filters
    eleventyConfig.addFilter("formatDate", filters.formatDate);
    eleventyConfig.addFilter("slugStr", filters.slugStr);

    return {
        markdownTemplateEngine: "vto",
        htmlTemplateEngine: "vto",
        dir: {
            input: "src"
        }
    };
};
