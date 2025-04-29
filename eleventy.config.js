// Plugins
import { EleventyI18nPlugin, InputPathToUrlTransformPlugin } from "@11ty/eleventy";
import tocPlugin from '@uncenter/eleventy-plugin-toc';
import { VentoPlugin } from 'eleventy-plugin-vento';

// Custom configurations
import feedConfig from "./src/_config/feed.js";
import filesConfig from "./src/_config/files.js";
import filtersConfig from "./src/_config/filters.js";
import markdownItConfig from "./src/_config/markdown-it.js";
import shortcodesConfig from "./src/_config/shortcodes.js";

export default function(eleventyConfig) {
    // ----- Plugins
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en",
        errorMode: "allow-fallback"
    });
    eleventyConfig.addPlugin(InputPathToUrlTransformPlugin);
    eleventyConfig.addPlugin(tocPlugin, {
        tags: ['h2', 'h3', 'h4', 'h5', 'h6'],
        wrapper: function (toc) {
            return `<nav class="toc" aria-labelledby="toc-heading">${toc}</nav>`;
        },
    });

    // ----- Custom configurations
    eleventyConfig.addPlugin(feedConfig);
    eleventyConfig.addPlugin(filesConfig);
    eleventyConfig.addPlugin(filtersConfig);
    eleventyConfig.addPlugin(markdownItConfig);
    eleventyConfig.addPlugin(shortcodesConfig);

    // ----- Vento plugin for Eleventy
    // Must be loaded after plugins that modify filters
    eleventyConfig.addPlugin(VentoPlugin, {
        autotrim: true,
    });

    return {
        markdownTemplateEngine: "vto",
        htmlTemplateEngine: "vto",
        dir: {
            input: "src"
        }
    };
};
