// Plugins
import { EleventyI18nPlugin } from "@11ty/eleventy";
import wordcountPlugin from "eleventy-plugin-wordcount-extended";

export default function(eleventyConfig) {
    // Plugins
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
        defaultLanguage: "en",
        errorMode: "allow-fallback"
    });
    eleventyConfig.addPlugin(wordcountPlugin);

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